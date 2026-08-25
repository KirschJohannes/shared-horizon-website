import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import nodemailer from "nodemailer";
import { mailTo } from "@/lib/vertrag/config";

export const runtime = "nodejs";

type SendBody = {
  pdfBase64: string;
  vertragsnummer: string;
  mieterName: string;
  mieterEmail: string;
  nutzungsbeginnDatum: string;
  lang: "de" | "en";
};

function getClientIp(request: NextRequest): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0]!.trim();
  return request.headers.get("x-real-ip") ?? "unbekannt";
}

function sanitizeForFilename(value: string): string {
  return value.replace(/[^\p{L}\p{N}_-]+/gu, "").trim() || "Vertrag";
}

async function stampSignatureLine(
  pdfBytes: Uint8Array,
  line: string,
): Promise<Uint8Array> {
  const pdfDoc = await PDFDocument.load(pdfBytes);
  const pages = pdfDoc.getPages();
  const lastPage = pages[pages.length - 1];
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
  if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
    return NextResponse.json(
      { error: "SMTP ist nicht konfiguriert." },
      { status: 500 },
    );
  }

  let body: SendBody;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Ungültiger Request-Body." }, { status: 400 });
  }

  const {
    pdfBase64,
    vertragsnummer,
    mieterName,
    mieterEmail,
    nutzungsbeginnDatum,
    lang,
  } = body;

  if (!pdfBase64 || !vertragsnummer || !mieterEmail) {
    return NextResponse.json({ error: "Pflichtfelder fehlen." }, { status: 400 });
  }

  const ip = getClientIp(request);
  const timestamp = new Date().toISOString();
  const signatureLine = `${timestamp} · IP ${ip} · ${mieterEmail} · ${vertragsnummer}`;

  const originalBytes = Uint8Array.from(Buffer.from(pdfBase64, "base64"));
  let stampedBytes: Uint8Array;
  try {
    stampedBytes = await stampSignatureLine(originalBytes, signatureLine);
  } catch {
    return NextResponse.json({ error: "PDF konnte nicht verarbeitet werden." }, { status: 500 });
  }

  const nachname = sanitizeForFilename(
    mieterName.trim().split(/\s+/).pop() ?? mieterName,
  );
  const filename = `Mietvertrag_${nachname}_${nutzungsbeginnDatum}.pdf`;

  const betreffDatum = nutzungsbeginnDatum || new Date().toISOString().slice(0, 10);
  const subject =
    lang === "en"
      ? `Booking Confirmation Shared Horizon – ${mieterName} – ${betreffDatum}`
      : `Buchungsbestätigung Shared Horizon – ${mieterName} – ${betreffDatum}`;

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT ?? 587),
    secure: Number(process.env.SMTP_PORT) === 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Shared Horizon" <${process.env.SMTP_USER}>`,
      to: mailTo,
      cc: mieterEmail,
      replyTo: mailTo,
      subject,
      text: `Anbei der unterschriebene Vertrag ${vertragsnummer}.`,
      attachments: [
        {
          filename,
          content: Buffer.from(stampedBytes),
          contentType: "application/pdf",
        },
      ],
    });
  } catch (err) {
    console.error("[api/vertrag/send]", err);
    return NextResponse.json({ error: "Mailversand fehlgeschlagen." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
