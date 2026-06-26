import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Datenschutzerklärung — Shared Horizon',
  robots: { index: false },
};

const h2s: React.CSSProperties = { fontFamily:"'Cormorant',serif", fontWeight:500, fontSize:'clamp(22px,2.6vw,30px)', color:'#172A2E', margin:'0 0 14px' };
const ps: React.CSSProperties = { fontFamily:"'Jost',sans-serif", fontWeight:300, fontSize:16, lineHeight:1.85, color:'#2A3B3E', margin:0 };
const sec: React.CSSProperties = { marginBottom:'clamp(32px,4vw,44px)' };

export default function Datenschutz() {
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
          <h1 style={{ fontFamily:"'Cormorant',serif", fontWeight:500, fontSize:'clamp(38px,6vw,68px)', lineHeight:1.04, color:'#172A2E', margin:'18px 0 0' }}>
            Datenschutz&shy;erklärung
          </h1>
          <p style={{ fontFamily:"'Jost',sans-serif", fontWeight:300, fontSize:16, lineHeight:1.85, color:'#2A3B3E', margin:'20px 0 0', maxWidth:640 }}>
            Der Schutz Ihrer persönlichen Daten ist uns ein wichtiges Anliegen. Wir verarbeiten Ihre Daten ausschließlich auf Grundlage der gesetzlichen Bestimmungen (DSGVO, BDSG). In dieser Datenschutzerklärung informieren wir Sie über die wichtigsten Aspekte der Datenverarbeitung im Rahmen dieser Website.
          </p>
          <div style={{ height:1, background:'linear-gradient(90deg,#BD9A64,#BD9A64 70%,transparent)', opacity:.5, margin:'clamp(34px,5vw,52px) 0' }} />

          <section style={sec}>
            <h2 style={h2s}>1. Verantwortlicher</h2>
            <p style={ps}>
              Verantwortlich für die Datenverarbeitung auf dieser Website ist:<br />
              Kivent GmbH<br />
              Josef-Orlopp-Str. 56, 10365 Berlin<br />
              E-Mail: <a href="mailto:anfrage@shared-horizon.de" style={{ color:'#172A2E', borderBottom:'1px solid #BD9A64', textDecoration:'none' }}>anfrage@shared-horizon.de</a><br />
              Telefon: +49 (0) 30 / 629 30 25 20
            </p>
          </section>

          <section style={sec}>
            <h2 style={h2s}>2. Hosting</h2>
            <p style={ps}>
              Diese Website wird gehostet bei Vercel Inc., 340 Pine Street, Suite 701, San Francisco, CA 94104, USA. Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert. Der Einsatz erfolgt zur Wahrung unserer berechtigten Interessen an einer sicheren und effizienten Bereitstellung unseres Angebots (Art. 6 Abs. 1 lit. f DSGVO). Mit dem Anbieter besteht ein Vertrag über Auftragsverarbeitung (AVV) gemäß Art. 28 DSGVO. Vercel verarbeitet Daten ggf. in den USA auf Basis der EU-Standardvertragsklauseln (SCC). Weitere Informationen:{' '}
              <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" style={{ color:'#172A2E', borderBottom:'1px solid #BD9A64', textDecoration:'none' }}>vercel.com/legal/privacy-policy</a>
            </p>
          </section>

          <section style={sec}>
            <h2 style={h2s}>3. Server-Logfiles</h2>
            <p style={ps}>
              Beim Aufruf dieser Website werden automatisch Informationen in sogenannten Server-Logfiles gespeichert, die Ihr Browser übermittelt: Browsertyp und -version, verwendetes Betriebssystem, Referrer-URL, Hostname des zugreifenden Rechners, Uhrzeit der Serveranfrage und die IP-Adresse. Diese Daten werden nicht mit anderen Datenquellen zusammengeführt. Die Erfassung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO zur technisch fehlerfreien Darstellung und Optimierung der Website.
            </p>
          </section>

          <section style={sec}>
            <h2 style={h2s}>4. Anfrageformular</h2>
            <p style={ps}>
              Wenn Sie uns über das Anfrageformular kontaktieren, verarbeiten wir die von Ihnen angegebenen Daten (insbesondere Name, E-Mail-Adresse sowie Inhalt Ihrer Anfrage), um Ihre Anfrage zu bearbeiten und zu beantworten. Die Verarbeitung erfolgt auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) bzw. zur Durchführung vorvertraglicher Maßnahmen (Art. 6 Abs. 1 lit. b DSGVO). Die Daten verbleiben bei uns, bis der Zweck der Speicherung entfällt oder Sie uns zur Löschung auffordern; zwingende gesetzliche Aufbewahrungsfristen bleiben unberührt.
            </p>
          </section>

          <section style={sec}>
            <h2 style={h2s}>5. Kontaktaufnahme über WhatsApp</h2>
            <p style={ps}>
              Auf unserer Website finden Sie einen Link, über den Sie uns per WhatsApp (Anbieter: WhatsApp Ireland Limited bzw. Meta Platforms Ireland Limited) kontaktieren können. Nutzen Sie diesen, gelangen die von Ihnen übermittelten Daten (Telefonnummer, Profilname, Nachrichteninhalt) zu WhatsApp. Wir haben keinen Einfluss auf die Datenverarbeitung durch WhatsApp/Meta; dabei können Daten auch in Drittländer (u. a. USA) übermittelt werden. Rechtsgrundlage ist Ihre Einwilligung durch die aktive Nutzung des Links (Art. 6 Abs. 1 lit. a DSGVO) sowie unser berechtigtes Interesse an einer unkomplizierten Kontaktmöglichkeit (Art. 6 Abs. 1 lit. f DSGVO). Einzelheiten:{' '}
              <a href="https://www.whatsapp.com/legal/privacy-policy-eea" target="_blank" rel="noopener" style={{ color:'#172A2E', borderBottom:'1px solid #BD9A64', textDecoration:'none' }}>Datenschutzrichtlinie von WhatsApp</a>.
            </p>
          </section>

          <section style={sec}>
            <h2 style={h2s}>6. Instagram</h2>
            <p style={ps}>
              Wir verlinken auf unser Profil beim Dienst Instagram (Anbieter: Meta Platforms Ireland Limited). Es handelt sich um eine reine Verlinkung — beim bloßen Aufruf unserer Website werden hierdurch keine Daten an Instagram übertragen. Erst wenn Sie den Link aktiv anklicken und zu Instagram wechseln, verarbeitet Meta Ihre Daten gemäß seinen eigenen Bestimmungen, ggf. auch in Drittländern. Einzelheiten:{' '}
              <a href="https://privacycenter.instagram.com/policy" target="_blank" rel="noopener" style={{ color:'#172A2E', borderBottom:'1px solid #BD9A64', textDecoration:'none' }}>Datenschutzrichtlinie von Instagram</a>.
            </p>
          </section>

          <section style={sec}>
            <h2 style={h2s}>7. Eingebundenes Video (Vimeo)</h2>
            <p style={ps}>
              Auf unserer Website ist ein Video des Anbieters Vimeo (Vimeo LLC, 555 West 18th Street, New York, NY 10011, USA) eingebunden. Das Video wird erst nach einem aktiven Klick auf den Abspiel-Button geladen (sog. 2-Klick-Lösung). Erst in diesem Moment stellt Ihr Browser eine Verbindung zu den Servern von Vimeo her und übermittelt dabei Ihre IP-Adresse sowie technische Browserdaten. Wir haben keinen Einfluss auf die weitere Datenverarbeitung durch Vimeo. Rechtsgrundlage ist Ihre Einwilligung durch aktive Nutzung des Players (Art. 6 Abs. 1 lit. a DSGVO). Es kann zu einer Übermittlung von Daten in die USA kommen; Vimeo ist nach dem EU-US Data Privacy Framework zertifiziert. Weitere Informationen:{' '}
              <a href="https://vimeo.com/privacy" target="_blank" rel="noopener noreferrer" style={{ color:'#172A2E', borderBottom:'1px solid #BD9A64', textDecoration:'none' }}>Datenschutzrichtlinie von Vimeo</a>.
            </p>
          </section>

          <section style={sec}>
            <h2 style={h2s}>8. Selbst gehostete Schriftarten</h2>
            <p style={ps}>
              Diese Website verwendet ausschließlich lokal gespeicherte Schriftarten (Cormorant, Jost). Es werden keine externen Schriftanbieter wie Google Fonts eingebunden. Es findet kein Datentransfer an Dritte statt.
            </p>
          </section>

          <section style={sec}>
            <h2 style={h2s}>9. Bilder</h2>
            <p style={ps}>
              Alle auf dieser Website verwendeten Bilder sind lokal auf unserem Server gespeichert. Es findet keine Übermittlung von Daten an externe Bilddienste statt.
            </p>
          </section>

          <section style={sec}>
            <h2 style={h2s}>10. SSL-/TLS-Verschlüsselung</h2>
            <p style={ps}>
              Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie am „https://" in der Adresszeile Ihres Browsers.
            </p>
          </section>

          <section style={sec}>
            <h2 style={h2s}>11. Ihre Rechte</h2>
            <p style={ps}>
              Ihnen stehen grundsätzlich die Rechte auf Auskunft (Art. 15), Berichtigung (Art. 16), Löschung (Art. 17), Einschränkung der Verarbeitung (Art. 18), Datenübertragbarkeit (Art. 20) und Widerspruch (Art. 21 DSGVO) zu. Eine erteilte Einwilligung können Sie jederzeit mit Wirkung für die Zukunft widerrufen. Wenden Sie sich hierzu an die oben genannten Kontaktdaten.
            </p>
          </section>

          <section style={sec}>
            <h2 style={h2s}>12. Beschwerderecht bei der Aufsichtsbehörde</h2>
            <p style={ps}>
              Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer Aufsichtsbehörde zu, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes. Zuständige Aufsichtsbehörde ist die Berliner Beauftragte für Datenschutz und Informationsfreiheit, Friedrichstr. 219, 10969 Berlin.
            </p>
          </section>

          <p style={{ fontFamily:"'Jost',sans-serif", fontWeight:300, fontSize:13.5, lineHeight:1.7, color:'#9C9488', margin:'clamp(20px,3vw,32px) 0 0', padding:'18px 22px', background:'#F3EFE7', border:'1px solid #E6E0D5', borderRadius:3 }}>
            Hinweis: Diese Datenschutzerklärung ist auf die auf dieser Website tatsächlich vorhandenen Funktionen zugeschnitten. Bitte vor Veröffentlichung rechtlich prüfen lassen — wir leisten keine Rechtsberatung.
          </p>
        </div>
      </main>

      <footer style={{ background:'#172A2E', padding:'32px clamp(20px,7vw,120px)', display:'flex', flexWrap:'wrap', gap:'16px 28px', justifyContent:'space-between', alignItems:'center' }}>
        <span style={{ fontFamily:"'Jost',sans-serif", fontSize:12, letterSpacing:'.04em', color:'rgba(243,239,231,.55)' }}>
          © {new Date().getFullYear()} Shared Horizon
        </span>
        <div style={{ display:'flex', gap:28, fontFamily:"'Jost',sans-serif", fontSize:12, letterSpacing:'.04em', color:'rgba(243,239,231,.7)' }}>
          <Link href="/" style={{ textDecoration:'none' }}>Startseite</Link>
          <Link href="/impressum" style={{ textDecoration:'none' }}>Impressum</Link>
        </div>
      </footer>
    </div>
  );
}
