export type InquiryMailFields = {
  name: string;
  email: string;
  telefon: string;
  zeitraum: string;
  nutzung: string;
  personen: string;
  nachricht: string;
};

function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (char) => {
    const escapes: Record<string, string> = {
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
    };
    return escapes[char];
  });
}

/** Reine Mail-Formatierung; Versand und serverseitige Validierung erfolgen separat. */
export function buildInquiryMail(fields: InquiryMailFields): { subject: string; html: string } {
  const { name, email, telefon, zeitraum, nutzung, personen, nachricht } = fields;
  const safe = {
    name: escapeHtml(name),
    email: escapeHtml(email),
    telefon: escapeHtml(telefon),
    zeitraum: escapeHtml(zeitraum),
    nutzung: escapeHtml(nutzung),
    personen: escapeHtml(personen),
    nachricht: escapeHtml(nachricht),
  };
  const subject = `Neue Anfrage von ${name.replace(/[\r\n]/g, ' ')}${zeitraum ? ` — ${zeitraum}` : ''}`;
  const html = `
    <table style="font-family:sans-serif;font-size:15px;line-height:1.6;color:#2A3B3E;border-collapse:collapse;max-width:600px">
      <tr><td colspan="2" style="padding:24px 0 16px;border-bottom:2px solid #BD9A64;font-size:22px;font-weight:600;color:#172A2E">Neue Anfrage — Shared Horizon</td></tr>
      <tr><td style="padding:12px 16px 4px 0;font-weight:500;width:140px">Name</td><td>${safe.name}</td></tr>
      <tr><td style="padding:4px 16px 4px 0;font-weight:500">E-Mail</td><td><a href="mailto:${safe.email}">${safe.email}</a></td></tr>
      ${telefon ? `<tr><td style="padding:4px 16px 4px 0;font-weight:500">Telefon</td><td>${safe.telefon}</td></tr>` : ''}
      ${zeitraum ? `<tr><td style="padding:4px 16px 4px 0;font-weight:500">Zeitraum</td><td>${safe.zeitraum}</td></tr>` : ''}
      ${nutzung ? `<tr><td style="padding:4px 16px 4px 0;font-weight:500">Nutzung</td><td>${safe.nutzung}</td></tr>` : ''}
      ${personen ? `<tr><td style="padding:4px 16px 4px 0;font-weight:500">Personen</td><td>${safe.personen}</td></tr>` : ''}
      ${nachricht ? `<tr><td style="padding:12px 16px 4px 0;font-weight:500;vertical-align:top">Nachricht</td><td style="white-space:pre-line">${safe.nachricht}</td></tr>` : ''}
      <tr><td colspan="2" style="padding:20px 0 0;font-size:12px;color:#9C9488">DSGVO-Einwilligung erteilt · Gesendet über shared-horizon.de</td></tr>
    </table>
  `;
  return { subject, html };
}
