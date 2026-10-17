import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

const url = 'https://shared-horizon.de/hausboot-the-voice';
export const metadata: Metadata = {
  title: 'Hausboot wie bei The Voice of Germany mieten | Shared Horizon Berlin',
  description: 'Ein Hausboot wie bei The Voice of Germany? Shared Horizon in Berlin ist eine baugleiche SolarYacht HBY 90 – als voll ausgestattete Eventlocation für Feiern und Firmenevents.',
  alternates: { canonical: url },
  openGraph: {
    title: 'Hausboot wie bei The Voice – für dein Event in Berlin',
    description: 'Baugleiches Modell, eigenes Erlebnis: Entdecke Shared Horizon, die voll ausgestattete SolarYacht HBY 90 für dein Event in Berlin.',
    url,
    images: [{ url: '/images/og-image-foto.png', width: 1200, height: 630, alt: 'Shared Horizon Hausboot in Berlin' }],
  },
};

const questions = [
  { q: 'Kann ich das Hausboot aus The Voice of Germany mieten?', a: 'Shared Horizon ist nicht das für die TV-Produktion verwendete Boot. Es handelt sich laut Betreiber aber um dasselbe Bootsmodell: die SolarYacht HouseBoatYacht 90 (HBY 90). Shared Horizon kann in Berlin als voll ausgestattete Eventlocation angefragt werden.' },
  { q: 'Welches Modell ist Shared Horizon?', a: 'Shared Horizon ist eine SolarYacht HouseBoatYacht 90 (HBY 90) mit Panoramaverglasung und Dachterrasse.' },
  { q: 'Wofür lässt sich Shared Horizon buchen?', a: 'Das Hausboot eignet sich unter anderem für Geburtstagsfeiern, Team-Events, Firmenveranstaltungen und private Feiern. Ausstattung und Möglichkeiten werden bei der Anfrage abgestimmt.' },
  { q: 'Wo liegt Shared Horizon?', a: 'Im Berliner Südosten, in Berlin-Schmöckwitz. Details und Verfügbarkeit gibt es über die Anfrage auf der Website.' },
];

export default function VoiceHausbootPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Hausboot wie bei The Voice of Germany mieten',
    url,
    description: 'Informationen über das baugleiche SolarYacht HBY 90 Eventboot Shared Horizon in Berlin.',
    isPartOf: { '@type': 'WebSite', name: 'Shared Horizon', url: 'https://shared-horizon.de' },
    about: { '@type': 'Product', name: 'SolarYacht HouseBoatYacht 90 (HBY 90)' },
  };
  return (
    <main style={{ background: '#F3EFE7', color: '#172A2E', minHeight: '100vh', fontFamily: "'Jost',sans-serif" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <header style={{ padding: '22px clamp(20px,6vw,100px)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16 }}>
        <Link href="/" style={{ color: '#172A2E', textDecoration: 'none', letterSpacing: '.18em', fontWeight: 600, fontSize: 13 }}>SHARED HORIZON</Link>
        <Link href="/#anfrage" style={{ color: '#172A2E', fontSize: 13, textUnderlineOffset: 5 }}>Event anfragen ↗</Link>
      </header>
      <section style={{ position: 'relative', minHeight: 'min(76vh,760px)', display: 'flex', alignItems: 'end', background: '#172A2E' }}>
        <Image src="/images/hero-wide.jpg" alt="Shared Horizon – die voll ausgestattete SolarYacht HBY 90 auf dem Wasser" fill priority style={{ objectFit: 'cover' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(23,42,46,.15), rgba(23,42,46,.85))' }} />
        <div style={{ position: 'relative', padding: '90px clamp(20px,7vw,120px) 70px', maxWidth: 1050 }}>
          <p style={{ color: '#E4D3B4', letterSpacing: '.23em', textTransform: 'uppercase', fontSize: 12 }}>SolarYacht HBY 90 · Berlin</p>
          <h1 style={{ color: '#F3EFE7', fontFamily: "'Cormorant',serif", fontWeight: 500, fontSize: 'clamp(46px,7vw,100px)', lineHeight: 1.02, margin: '20px 0' }}>Ein Hausboot wie aus dem Fernsehen. Dein Event auf dem Wasser.</h1>
          <p style={{ color: '#F3EFE7', fontSize: 'clamp(16px,2vw,21px)', lineHeight: 1.65, maxWidth: 630 }}>Derselbe Bootstyp, ein ganz eigenes Erlebnis: Entdecke Shared Horizon – eine vollständig ausgestattete Eventlocation auf einer SolarYacht in Berlin.</p>
          <Link href="/#anfrage" style={{ display: 'inline-block', marginTop: 24, padding: '17px 28px', background: '#BD9A64', color: '#172A2E', textDecoration: 'none', fontWeight: 600, letterSpacing: '.08em', fontSize: 13 }}>EVENT ANFRAGEN ↗</Link>
        </div>
      </section>
      <section style={{ maxWidth: 1100, margin: '0 auto', padding: 'clamp(65px,8vw,115px) 22px' }}>
        <p style={{ textTransform: 'uppercase', letterSpacing: '.22em', color: '#80643B', fontSize: 12 }}>Das Modell hinter dem Erlebnis</p>
        <h2 style={{ fontFamily: "'Cormorant',serif", fontWeight: 500, fontSize: 'clamp(36px,5vw,66px)', lineHeight: 1.1, margin: '18px 0 25px' }}>Die SolarYacht HouseBoatYacht 90 – als Eventlocation.</h2>
        <p style={{ maxWidth: 790, lineHeight: 1.9, fontSize: 18 }}>Du hast bei <em>The Voice of Germany</em> eine außergewöhnliche Hausboot-Location entdeckt und suchst ein ähnliches Erlebnis? Shared Horizon ist nach Angaben des Betreibers <strong>baugleich mit dem für die Produktion eingesetzten Hausboot</strong>: Beide basieren auf der SolarYacht HouseBoatYacht 90 (HBY 90) mit denselben Abmessungen. Der Unterschied: Shared Horizon ist für Veranstaltungen voll ausgestattet – vom gemütlichen Innenbereich bis zur Dachterrasse.</p>
        <p style={{ maxWidth: 790, lineHeight: 1.75, fontSize: 14, color: '#526063' }}>Transparenzhinweis: Shared Horizon ist nicht das Boot aus der Sendung und steht in keiner offiziellen Verbindung zu „The Voice of Germany“, ProSieben, Joyn oder der TV-Produktion. Die Modellgleichheit beruht auf Angaben des Betreibers.</p>
      </section>
      <section style={{ background: '#172A2E', color: '#F3EFE7', padding: 'clamp(65px,8vw,110px) 22px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <p style={{ color: '#BD9A64', textTransform: 'uppercase', letterSpacing: '.22em', fontSize: 12 }}>Mehr als nur eine Kulisse</p>
          <h2 style={{ fontFamily: "'Cormorant',serif", fontWeight: 500, fontSize: 'clamp(38px,5vw,68px)', margin: '15px 0 25px' }}>Die Bühne gehört dir.</h2>
          <p style={{ maxWidth: 690, lineHeight: 1.8, fontSize: 18 }}>Panoramablick aufs Wasser, großzügige Dachterrasse und ein eingerichteter Innenbereich: Ob Geburtstag, Teamtag oder besonderes Get-together – hier wird aus einer eindrucksvollen Location ein persönliches Erlebnis.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(190px,1fr))', gap: 35, margin: '50px 0 35px' }}>
            {['Panoramaverglasung', 'Dachterrasse', 'Voll ausgestatteter Innenbereich', 'Private & geschäftliche Events'].map(item => <div key={item} style={{ borderTop: '1px solid #BD9A64', paddingTop: 20, fontSize: 17 }}>{item}</div>)}
          </div>
          <Link href="/#anfrage" style={{ display: 'inline-block', background: '#BD9A64', color: '#172A2E', padding: '17px 28px', textDecoration: 'none', fontWeight: 600 }}>VERFÜGBARKEIT ANFRAGEN ↗</Link>
        </div>
      </section>
      <section style={{ maxWidth: 1100, margin: '0 auto', padding: 'clamp(65px,8vw,110px) 22px' }}>
        <h2 style={{ fontFamily: "'Cormorant',serif", fontWeight: 500, fontSize: 'clamp(36px,5vw,64px)' }}>Häufige Fragen</h2>
        {questions.map(({q,a}) => <div key={q} style={{ borderTop: '1px solid #C7C5BE', padding: '22px 0' }}><h3 style={{ fontSize: 18, fontWeight: 600, margin: '0 0 10px' }}>{q}</h3><p style={{ fontSize: 16, lineHeight: 1.8, margin: 0 }}>{a}</p></div>)}
        <p style={{ paddingTop: 30 }}><Link href="/" style={{ color: '#80643B' }}>Mehr Bilder, Ausstattung und Buchungsdetails auf der Shared-Horizon-Startseite →</Link></p>
      </section>
    </main>
  );
}
