import test from 'node:test';
import assert from 'node:assert/strict';
import nodemailer from 'nodemailer';
import { buildInquiryMail } from '../lib/email/inquiryTemplate.ts';

const sample = {
  name: 'QA Beispiel',
  email: 'qa@example.invalid',
  telefon: '',
  zeitraum: '2026-11-10',
  nutzung: 'Business-Offsite',
  personen: '12',
  nachricht: 'Test einer Anfrage',
};

test('booking email contains request fields and subject', () => {
  const { subject, html } = buildInquiryMail(sample);
  assert.equal(subject, 'Neue Anfrage von QA Beispiel — 2026-11-10');
  assert.match(html, /Business-Offsite/);
  assert.match(html, /mailto:qa@example.invalid/);
  assert.match(html, /Test einer Anfrage/);
});

test('mail content escapes HTML and removes header line breaks', () => {
  const { subject, html } = buildInquiryMail({
    ...sample,
    name: 'Test\r\nInjected Header',
    nachricht: '<img src=x onerror=alert(1)>&"\'',
  });
  assert.equal(subject, 'Neue Anfrage von Test  Injected Header — 2026-11-10');
  assert.doesNotMatch(subject, /\r|\n/);
  assert.doesNotMatch(html, /<img/);
  assert.match(html, /&lt;img/);
  assert.match(html, /&amp;&quot;&#39;/);
});

test('nodemailer assembles a complete email without contacting SMTP', async () => {
  const transport = nodemailer.createTransport({
    streamTransport: true,
    buffer: true,
  });
  const { subject, html } = buildInquiryMail(sample);
  const info = await transport.sendMail({
    from: '"Shared Horizon Website" <anfrage@shared-horizon.de>',
    to: 'anfrage@shared-horizon.de',
    replyTo: sample.email,
    subject,
    html,
  });
  const wire = info.message.toString();
  assert.match(wire, /To: anfrage@shared-horizon.de/);
  assert.match(wire, /Reply-To: qa@example.invalid/);
  assert.match(wire, /Content-Type: text\/html/);
  assert.match(wire, /Test einer Anfrage/);
});
