import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';
import nodemailer from 'nodemailer';
import { mailTo } from '@/lib/vertrag/config';
import { readJsonLimited, RequestBodyError } from '@/lib/http/readJsonLimited';

export const runtime = 'nodejs';

// Base64-PDFs müssen innerhalb des Serverless-Requestlimits bleiben.
const MAX_BODY_BYTES = 4_200_000;
const MAX_PDF_BYTES = 3_000_000;
const MAX_PAGES = 40;

type SendBody = {
  pdfBase64: string;
  vertragsnummer: string;
  mieterName: string;
  mieterEmail: string;
  nutzungsbeginnDatum: string;
  lang: 'de' | 'en';
};

function getClientIp(request: NextRequest): string {
  const forwarded = request.headers.get('x-forwarded-for');
  const ip = forwarded?.split(',')[0]?.trim() ?? request.headers.get('x-real-ip') ?? 'unbekannt';
  return ip.replace(/[^0-9a-fA-F.:]/g, '').slice(0, 64) || 'unbekannt';
}

function sanitizeForFilename(value: string): string {
  return value.replace(/[^\p{L}\p{N}_-]+/gu, '').trim().slice(0, 80) || 'Vertrag';
}

function validContractSubmission(value: unknown): value is SendBody {
  if (!value || typeof value !== 'object' || Array.isArray(value)) return false;
  const body = value as Record<string, unknown>;
  const { pdfBase64, vertragsnummer, mieterName, mieterEmail, nutzungsbeginnDatum, lang } = body;

  return (
    typeof pdfBase64 === 'string' &&
    pdfBase64.length > 0 &&
    pdfBase64.length <= Math.ceil(MAX_PDF_BYTES / 3) * 4 &&
    /^[A-Za-z0-9+/]+={0,2}$/.test(pdfBase64) &&
    typeof vertragsnummer === 'string' &&
    /^SH-\d{8}-\d{4}$/.test(vertragsnummer) &&
    typeof mieterName === 'string' &&
    mieterName.trim().length > 0 &&
    mieterName.length <= 120 &&
    typeof mieterEmail === 'string' &&
    mieterEmail.length <= 254 &&
    /^[^\s@<>\x00-\x1f]+@[^\s@<>\x00-\x1f]+\.[^\s@<>\x00-\x1f]+$/.test(mieterEmail) &&
    typeof nutzungsbeginnDatum === 'string' &&
    /^\d{4}-\d{2}-\d{2}$/.test(nutzungsbeginnDatum) &&
    (lang === 'de' || lang === 'en')
  );
}

async function stampSignatureLine(pdfBytes: Uint8Array, line: string): Promise<Uint8Array> {
  const pdfDoc = await PDFDocument.load(pdfBytes);
  const count = pdfDoc.getPageCount();
  if (count < 1 || count > MAX_PAGES) {
    throw new Error('PDF-Seitenanzahl außerhalb der Grenzen');
  }
  const lastPage = pdfDoc.getPage(count - 1);
  const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
  lastPage.drawText(line, {
    x: 48,
    y: 12,
    size: 6.5,
    font,
    color: rgb(0.61, 0.58, 0.53),
  });
  return pdfDoc.save();
}

export async function POST(request: NextRequest) {
  // Origin-Check ist zusätzliche Härtung, ersetzt keine Autorisierung/Rate-Limits.
  const origin = request.headers.get('origin');
  if ((origin && origin !== request.nextUrl.origin) || request.headers.get('sec-fetch-site') === 'cross-site') {
    return NextResponse.json({ error: 'Anfrageherkunft nicht erlaubt.' }, { status: 403 });
  }

  if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
    return NextResponse.json({ error: 'SMTP ist nicht konfiguriert.' }, { status: 503 });
  }

  let raw: unknown;
  try {
    raw = await readJsonLimited(request, MAX_BODY_BYTES);
  } catch (error) {
    const status = error instanceof RequestBodyError ? error.status : 400;
    return NextResponse.json(
      { error: error instanceof RequestBodyError ? error.message : 'Ungültige Anfrage.' },
      { status },
    );
  }

  if (!validContractSubmission(raw)) {
    return NextResponse.json({ error: 'Ungültige Vertragsdaten.' }, { status: 400 });
  }

  const {
    pdfBase64, vertragsnummer, mieterName, mieterEmail, nutzungsbeginnDatum, lang,
  } = raw;

  const originalBytes = Buffer.from(pdfBase64, 'base64');
  if (
    originalBytes.byteLength > MAX_PDF_BYTES ||
    originalBytes.byteLength < 100 ||
    originalBytes.subarray(0, 5).toString('ascii') !== '%PDF-'
  ) {
    return NextResponse.json({ error: 'Ungültige PDF-Datei.' }, { status: 400 });
  }

  const timestamp = new Date().toISOString();
  const signatureLine = `${timestamp} · IP ${getClientIp(request)} · ${mieterEmail} · ${vertragsnummer}`;

  let stampedBytes: Uint8Array;
  try {
    stampedBytes = await stampSignatureLine(originalBytes, signatureLine);
  } catch {
    return NextResponse.json({ error: 'PDF konnte nicht verarbeitet werden.' }, { status: 400 });
  }

  const nachname = sanitizeForFilename(mieterName.trim().split(/\s+/).pop() ?? mieterName);
  const filename = `Mietvertrag_${nachname}_${nutzungsbeginnDatum}.pdf`;
  const subject = lang === 'en'
    ? `Booking Confirmation Shared Horizon – ${mieterName.replace(/[\r\n]/g, ' ')} – ${nutzungsbeginnDatum}`
    : `Buchungsbestätigung Shared Horizon – ${mieterName.replace(/[\r\n]/g, ' ')} – ${nutzungsbeginnDatum}`;

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT ?? 587),
    secure: Number(process.env.SMTP_PORT) === 465,
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
  });

  try {
    await transporter.sendMail({
      from: `"Shared Horizon" <${process.env.SMTP_USER}>`,
      to: mailTo,
      cc: mieterEmail,
      replyTo: mailTo,
      subject,
      text: `Anbei der unterschriebene Vertrag ${vertragsnummer}.`,
      attachments: [{
        filename,
        content: Buffer.from(stampedBytes),
        contentType: 'application/pdf',
      }],
    });
  } catch (error) {
    console.error('[api/vertrag/send] Mailversand fehlgeschlagen', error instanceof Error ? error.name : 'Unbekannt');
    return NextResponse.json({ error: 'Mailversand fehlgeschlagen.' }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
