import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Impressum — Shared Horizon',
  robots: { index: false },
};

const h2s: React.CSSProperties = { fontFamily:"'Cormorant',serif", fontWeight:500, fontSize:'clamp(22px,2.6vw,30px)', color:'#172A2E', margin:'0 0 16px' };
const ps: React.CSSProperties = { fontFamily:"'Jost',sans-serif", fontWeight:300, fontSize:16, lineHeight:1.85, color:'#2A3B3E', margin:0 };
const sec: React.CSSProperties = { marginBottom:'clamp(34px,4vw,48px)' };

export default function Impressum() {
  return (
    <div style={{ minHeight:'100vh', display:'flex', flexDirection:'column' }}>
      <header style={{ background:'#172A2E', padding:'22px clamp(20px,7vw,120px)', display:'flex', alignItems:'center', justifyContent:'space-between' }}>
        <Link href="/" style={{ fontFamily:"'Cormorant',serif", fontWeight:500, fontSize:22, letterSpacing:'.18em', textTransform:'uppercase', color:'#F3EFE7', textDecoration:'none' }}>
          Shared Horizon
        </Link>
        <Link href="/" style={{ fontFamily:"'Jost',sans-serif", fontSize:12, letterSpacing:'.16em', textTransform:'uppercase', color:'#F3EFE7', opacity:.8, textDecoration:'none' }}>
          ← Zur Startseite
        </Link>
      </header>

      <main style={{ flex:1, background:'#FBFAF7', padding:'clamp(56px,8vw,110px) clamp(20px,7vw,120px)' }}>
        <div style={{ maxWidth:760, margin:'0 auto' }}>
          <span style={{ fontSize:12, letterSpacing:'.32em', textTransform:'uppercase', color:'#A07E4A', fontWeight:500 }}>Rechtliches</span>
          <h1 style={{ fontFamily:"'Cormorant',serif", fontWeight:500, fontSize:'clamp(38px,6vw,68px)', lineHeight:1.04, color:'#172A2E', margin:'18px 0 0' }}>Impressum</h1>
          <div style={{ height:1, background:'linear-gradient(90deg,#BD9A64,#BD9A64 70%,transparent)', opacity:.5, margin:'clamp(34px,5vw,52px) 0' }} />

          <section style={sec}>
            <h2 style={h2s}>Angaben gemäß § 5 DDG</h2>
            <p style={ps}>
              Kivent GmbH<br />
              Josef-Orlopp-Str. 56<br />
              10365 Berlin<br />
              Deutschland
            </p>
            <p style={{ fontFamily:"'Jost',sans-serif", fontWeight:300, fontSize:14, lineHeight:1.7, color:'#9C9488', margin:'12px 0 0' }}>
              Marke „Shared Horizon" — ein Angebot der Kivent GmbH.
            </p>
          </section>

          <section style={sec}>
            <h2 style={h2s}>Vertreten durch</h2>
            <p style={ps}>Geschäftsführung: Johannes Kirsch</p>
          </section>

          <section style={sec}>
            <h2 style={h2s}>Kontakt</h2>
            <p style={ps}>
              E-Mail: <a href="mailto:anfrage@shared-horizon.de" style={{ color:'#172A2E', borderBottom:'1px solid #BD9A64', textDecoration:'none' }}>anfrage@shared-horizon.de</a><br />
              Telefon: +49 (0) 30 / 629 30 25 20
            </p>
          </section>

          <section style={sec}>
            <h2 style={h2s}>Registereintrag</h2>
            <p style={ps}>
              Registergericht: Amtsgericht Charlottenburg<br />
              Registernummer: HRB 164122 B
            </p>
          </section>

          <section style={sec}>
            <h2 style={h2s}>Umsatzsteuer-ID</h2>
            <p style={ps}>
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
              DE 298 024 067
            </p>
          </section>

          <section style={sec}>
            <h2 style={h2s}>Verantwortlich i. S. d. § 18 Abs. 2 MStV</h2>
            <p style={ps}>Johannes Kirsch, Anschrift wie oben</p>
          </section>

          <section style={sec}>
            <h2 style={h2s}>EU-Streitschlichtung</h2>
            <p style={ps}>
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
              <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" style={{ color:'#172A2E', borderBottom:'1px solid #BD9A64', textDecoration:'none' }}>
                https://ec.europa.eu/consumers/odr/
              </a><br />
              Unsere E-Mail-Adresse finden Sie oben im Impressum.
            </p>
            <p style={{ ...ps, marginTop:14 }}>
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </section>

          <p style={{ fontFamily:"'Jost',sans-serif", fontWeight:300, fontSize:13.5, lineHeight:1.7, color:'#9C9488', margin:'clamp(20px,3vw,32px) 0 0', padding:'18px 22px', background:'#F3EFE7', border:'1px solid #E6E0D5', borderRadius:3 }}>
            „Shared Horizon" ist eine Marke der Kivent GmbH. Für Anfragen rund um das Hausboot erreichen Sie uns am schnellsten unter anfrage@shared-horizon.de.
          </p>
        </div>
      </main>

      <footer style={{ background:'#172A2E', padding:'32px clamp(20px,7vw,120px)', display:'flex', flexWrap:'wrap', gap:'16px 28px', justifyContent:'space-between', alignItems:'center' }}>
        <span style={{ fontFamily:"'Jost',sans-serif", fontSize:12, letterSpacing:'.04em', color:'rgba(243,239,231,.55)' }}>
          © {new Date().getFullYear()} Shared Horizon
        </span>
        <div style={{ display:'flex', gap:28, fontFamily:"'Jost',sans-serif", fontSize:12, letterSpacing:'.04em', color:'rgba(243,239,231,.7)' }}>
          <Link href="/" style={{ textDecoration:'none' }}>Startseite</Link>
          <Link href="/datenschutz" style={{ textDecoration:'none' }}>Datenschutz</Link>
        </div>
      </footer>
    </div>
  );
}
