import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { readJsonLimited, RequestBodyError } from '@/lib/http/readJsonLimited';
import { buildInquiryMail } from '@/lib/email/inquiryTemplate';

const MAX_REQUEST_BYTES = 16 * 1024;

function textField(value: unknown, maxLength: number, required = false): string | null {
  if (value === undefined || value === null || value === '') return required ? null : '';
  if (typeof value !== 'string') return null;
  const cleaned = value.trim();
  if (cleaned.length > maxLength || (required && !cleaned)) return null;
  return cleaned;
}

export async function POST(req: NextRequest) {
  // Abwehr einfacher Cross-Site-Form-Posts; ersetzt keine Rate-Limit-/Bot-Lösung.
  const origin = req.headers.get('origin');
  if (origin && origin !== req.nextUrl.origin) {
    return NextResponse.json({ error: 'Anfrageherkunft nicht erlaubt.' }, { status: 403 });
  }
  if (req.headers.get('sec-fetch-site') === 'cross-site') {
    return NextResponse.json({ error: 'Anfrageherkunft nicht erlaubt.' }, { status: 403 });
  }

  let raw: unknown;
  try {
    raw = await readJsonLimited(req, MAX_REQUEST_BYTES);
  } catch (error) {
    const status = error instanceof RequestBodyError ? error.status : 400;
    return NextResponse.json(
      { error: error instanceof RequestBodyError ? error.message : 'Ungültige Anfrage.' },
      { status },
    );
  }

  if (!raw || typeof raw !== 'object' || Array.isArray(raw)) {
    return NextResponse.json({ error: 'Ungültige Anfragedaten.' }, { status: 400 });
  }

  const data = raw as Record<string, unknown>;
  // Honeypot: echte Besucher sehen dieses Feld nicht.
  if (typeof data.website === 'string' && data.website.trim()) {
    return NextResponse.json({ ok: true });
  }

  const name = textField(data.name, 120, true);
  const email = textField(data.email, 254, true);
  const telefon = textField(data.telefon, 60);
  const zeitraum = textField(data.zeitraum, 30);
  const nutzung = textField(data.nutzung, 100);
  const personen = textField(data.personen, 50);
  const nachricht = textField(data.nachricht, 3000);

  if (
    !name || !email || telefon === null || zeitraum === null ||
    nutzung === null || personen === null || nachricht === null ||
    data.dsgvo !== true ||
    !/^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(email) ||
    (zeitraum && !/^\d{4}-\d{2}-\d{2}$/.test(zeitraum))
  ) {
    return NextResponse.json({ error: 'Bitte prüfen Sie Ihre Eingaben.' }, { status: 400 });
  }

  if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
    console.error('[api/anfrage] SMTP-Konfiguration fehlt');
    return NextResponse.json({ error: 'Anfrage kann zurzeit nicht versendet werden.' }, { status: 503 });
  }

  const { html, subject } = buildInquiryMail({ name, email, telefon, zeitraum, nutzung, personen, nachricht });

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT ?? 587),
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    });

    await transporter.sendMail({
      from: `"Shared Horizon Website" <${process.env.SMTP_USER}>`,
      to: 'anfrage@shared-horizon.de',
      replyTo: email,
      subject,
      html,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('[api/anfrage] Mailversand fehlgeschlagen', error instanceof Error ? error.name : 'Unbekannt');
    return NextResponse.json({ error: 'E-Mail konnte nicht gesendet werden.' }, { status: 502 });
  }
}
