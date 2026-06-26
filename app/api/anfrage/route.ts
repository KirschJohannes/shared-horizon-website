import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, telefon, zeitraum, nutzung, personen, nachricht, dsgvo } = body;

    if (!name || !email || !dsgvo) {
      return NextResponse.json({ error: 'Pflichtfelder fehlen.' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT ?? 587),
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const html = `
      <table style="font-family:sans-serif;font-size:15px;line-height:1.6;color:#2A3B3E;border-collapse:collapse;max-width:600px">
        <tr><td colspan="2" style="padding:24px 0 16px;border-bottom:2px solid #BD9A64;font-size:22px;font-weight:600;color:#172A2E">Neue Anfrage — Shared Horizon</td></tr>
        <tr><td style="padding:12px 16px 4px 0;font-weight:500;width:140px">Name</td><td>${name}</td></tr>
        <tr><td style="padding:4px 16px 4px 0;font-weight:500">E-Mail</td><td><a href="mailto:${email}">${email}</a></td></tr>
        ${telefon ? `<tr><td style="padding:4px 16px 4px 0;font-weight:500">Telefon</td><td>${telefon}</td></tr>` : ''}
        ${zeitraum ? `<tr><td style="padding:4px 16px 4px 0;font-weight:500">Zeitraum</td><td>${zeitraum}</td></tr>` : ''}
        ${nutzung ? `<tr><td style="padding:4px 16px 4px 0;font-weight:500">Nutzung</td><td>${nutzung}</td></tr>` : ''}
        ${personen ? `<tr><td style="padding:4px 16px 4px 0;font-weight:500">Personen</td><td>${personen}</td></tr>` : ''}
        ${nachricht ? `<tr><td style="padding:12px 16px 4px 0;font-weight:500;vertical-align:top">Nachricht</td><td style="white-space:pre-line">${nachricht}</td></tr>` : ''}
        <tr><td colspan="2" style="padding:20px 0 0;font-size:12px;color:#9C9488">DSGVO-Einwilligung erteilt · Gesendet über shared-horizon.de</td></tr>
      </table>
    `;

    await transporter.sendMail({
      from: `"Shared Horizon Website" <${process.env.SMTP_USER}>`,
      to: 'anfrage@shared-horizon.de',
      replyTo: email,
      subject: `Neue Anfrage von ${name}${zeitraum ? ` — ${zeitraum}` : ''}`,
      html,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[api/anfrage]', err);
    return NextResponse.json({ error: 'E-Mail konnte nicht gesendet werden.' }, { status: 500 });
  }
}
