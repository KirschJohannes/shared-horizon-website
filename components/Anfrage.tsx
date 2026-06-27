'use client';
import { useState, FormEvent } from 'react';
import ScrollReveal from './ScrollReveal';

const WA_ICON = (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="#BD9A64" aria-hidden="true">
    <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.945C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.515 5.26l-.999 3.648 3.973-1.042zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
  </svg>
);

const IG_ICON = (
  <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="#BD9A64" strokeWidth="1.8" aria-hidden="true">
    <rect x="2.5" y="2.5" width="19" height="19" rx="5.4"/>
    <circle cx="12" cy="12" r="4.2"/>
    <circle cx="17.4" cy="6.6" r="1.1" fill="#BD9A64" stroke="none"/>
  </svg>
);

const inputStyle: React.CSSProperties = {
  fontFamily:"'Jost',sans-serif", fontSize:15, color:'#172A2E', background:'transparent',
  border:'none', borderBottom:'1px solid #D2CBBD', padding:'8px 0', outline:'none', width:'100%',
};
const labelStyle: React.CSSProperties = {
  flex:'1 1 180px', display:'flex', flexDirection:'column', gap:8,
};
const eyebrowStyle: React.CSSProperties = {
  fontSize:11, letterSpacing:'.18em', textTransform:'uppercase', color:'#9C9488',
};

export default function Anfrage() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError('');
    const fd = new FormData(e.currentTarget);
    const body = {
      name: fd.get('name'),
      email: fd.get('email'),
      telefon: fd.get('telefon'),
      zeitraum: fd.get('zeitraum'),
      nutzung: fd.get('nutzung'),
      personen: fd.get('personen'),
      nachricht: fd.get('nachricht'),
      dsgvo: !!fd.get('dsgvo'),
    };
    try {
      const res = await fetch('/api/anfrage', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(body) });
      if (!res.ok) { const j = await res.json(); throw new Error(j.error || 'Fehler'); }
      setSent(true);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Fehler beim Senden. Bitte versuchen Sie es erneut.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="anfrage" style={{ background:'#F3EFE7', padding:'clamp(70px,9vw,140px) clamp(20px,7vw,120px)', scrollMarginTop:64 }}>
      <div style={{ maxWidth:1200, margin:'0 auto', display:'flex', flexWrap:'wrap', gap:'clamp(40px,5vw,80px)' }}>

        {/* Left column */}
        <ScrollReveal style={{ flex:'1 1 380px', minWidth:'min(100%,300px)' }}>
          <span style={{ fontSize:12, letterSpacing:'.32em', textTransform:'uppercase', color:'#A07E4A', fontWeight:500 }}>Anfrage</span>
          <h2 style={{ fontFamily:"'Cormorant',serif", fontWeight:500, fontSize:'clamp(24px,3vw,42px)', lineHeight:1.12, color:'#172A2E', margin:'16px 0 0', letterSpacing:'.005em' }}>
            Ein Tag auf der Shared Horizon,<br />bereits ab rund 20 Euro pro Person und Stunde.
          </h2>
          <p style={{ fontFamily:"'Jost',sans-serif", fontWeight:300, fontSize:'clamp(16px,1.3vw,18px)', lineHeight:1.75, color:'#2A3B3E', margin:'28px 0 0', maxWidth:420 }}>
            500 € pro Stunde für das ganze Boot — gesamte Ausstattung, Skipper, Grill und Pizzaofen inklusive. In der Gruppe geteilt ein Bruchteil einer klassischen Eventlocation. Wer mehr möchte: Catering, eFoil und SUP als Add-on.
          </p>
          <div style={{ height:1, background:'linear-gradient(90deg,#BD9A64,transparent)', opacity:.6, margin:'36px 0 28px', maxWidth:280 }} />
          <div style={{ display:'flex', flexDirection:'column', gap:14 }}>
            <a href="https://wa.me/4917632479050" target="_blank" rel="noopener" style={{ display:'inline-flex', alignItems:'center', gap:14, color:'#2A3B3E', width:'fit-content' }}>
              <span style={{ display:'inline-flex', alignItems:'center', justifyContent:'center', width:46, height:46, borderRadius:'50%', border:'1px solid #BD9A64', flexShrink:0 }}>
                {WA_ICON}
              </span>
              <span style={{ fontFamily:"'Jost',sans-serif", fontSize:15, fontWeight:300 }}>Kontaktiere uns direkt über WhatsApp</span>
            </a>
            <a href="https://instagram.com/shared.horizon" target="_blank" rel="noopener" style={{ display:'inline-flex', alignItems:'center', gap:14, color:'#2A3B3E', width:'fit-content' }}>
              <span style={{ display:'inline-flex', alignItems:'center', justifyContent:'center', width:46, height:46, borderRadius:'50%', border:'1px solid #BD9A64', flexShrink:0 }}>
                {IG_ICON}
              </span>
              <span style={{ fontFamily:"'Jost',sans-serif", fontSize:15, fontWeight:300 }}>@shared.horizon</span>
            </a>
          </div>
        </ScrollReveal>

        {/* Right column: form */}
        <ScrollReveal delay={0.08} style={{ flex:'1 1 420px', minWidth:'min(100%,300px)' }}>
          {sent ? (
            <div style={{ background:'#172A2E', borderRadius:3, padding:'clamp(40px,5vw,64px)', textAlign:'center', animation:'shFade .4s ease' }}>
              <div style={{ width:44, height:1, background:'#BD9A64', margin:'0 auto 26px' }} />
              <h3 style={{ fontFamily:"'Cormorant',serif", fontWeight:500, fontSize:'clamp(28px,3.4vw,40px)', lineHeight:1.15, color:'#F3EFE7', margin:0 }}>Vielen Dank.</h3>
              <p style={{ fontFamily:"'Jost',sans-serif", fontWeight:300, fontSize:16, lineHeight:1.7, color:'#F3EFE7', opacity:.82, margin:'18px auto 0', maxWidth:360 }}>
                Ihre Anfrage ist bei uns. Wir melden uns in Kürze persönlich bei Ihnen — mit Verfügbarkeit und einem Vorschlag.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ background:'#FBFAF7', border:'1px solid #E6E0D5', borderRadius:3, padding:'clamp(28px,3.4vw,44px)', display:'flex', flexDirection:'column', gap:20 }}>
              <div style={{ display:'flex', flexWrap:'wrap', gap:20 }}>
                <label style={labelStyle}>
                  <span style={eyebrowStyle}>Name</span>
                  <input name="name" type="text" required style={inputStyle} />
                </label>
                <label style={labelStyle}>
                  <span style={eyebrowStyle}>E-Mail</span>
                  <input name="email" type="email" required style={inputStyle} />
                </label>
              </div>
              <div style={{ display:'flex', flexWrap:'wrap', gap:20 }}>
                <label style={labelStyle}>
                  <span style={eyebrowStyle}>Telefon</span>
                  <input name="telefon" type="tel" style={inputStyle} />
                </label>
                <label style={labelStyle}>
                  <span style={eyebrowStyle}>Wunschtermin</span>
                  <input
                    name="zeitraum"
                    type="date"
                    min={new Date().toISOString().split('T')[0]}
                    style={{ ...inputStyle, colorScheme:'light' }}
                  />
                </label>
              </div>
              <div style={{ display:'flex', flexWrap:'wrap', gap:20 }}>
                <label style={labelStyle}>
                  <span style={eyebrowStyle}>Art der Nutzung</span>
                  <select name="nutzung" style={{ ...inputStyle, cursor:'pointer' }}>
                    <option>Business-Offsite</option>
                    <option>Private Feier</option>
                    <option>Netzwerkabend</option>
                    <option>Dinner</option>
                    <option>Fotoshooting</option>
                    <option>Retreat</option>
                    <option>Anderes</option>
                  </select>
                </label>
                <label style={labelStyle}>
                  <span style={eyebrowStyle}>Personenzahl</span>
                  <input name="personen" type="text" placeholder="z. B. 12" style={inputStyle} />
                </label>
              </div>
              <label style={{ display:'flex', flexDirection:'column', gap:8 }}>
                <span style={eyebrowStyle}>Nachricht</span>
                <textarea name="nachricht" rows={3} style={{ ...inputStyle, resize:'vertical' }} />
              </label>
              <label style={{ display:'flex', alignItems:'flex-start', gap:12, cursor:'pointer' }}>
                <input name="dsgvo" type="checkbox" required style={{ marginTop:3, accentColor:'#BD9A64', width:16, height:16, flexShrink:0 }} />
                <span style={{ fontFamily:"'Jost',sans-serif", fontSize:13, lineHeight:1.6, color:'#9C9488' }}>
                  Ich stimme zu, dass meine Angaben zur Bearbeitung meiner Anfrage gespeichert werden. Mehr dazu in unserer{' '}
                  <a href="/datenschutz" style={{ color:'#172A2E', borderBottom:'1px solid #BD9A64' }}>Datenschutzerklärung</a>.
                </span>
              </label>
              {error && <p style={{ fontFamily:"'Jost',sans-serif", fontSize:14, color:'#c0392b', margin:0 }}>{error}</p>}
              <button
                type="submit"
                disabled={loading}
                style={{ marginTop:8, fontFamily:"'Jost',sans-serif", fontSize:13, fontWeight:500, letterSpacing:'.16em', textTransform:'uppercase', color:'#172A2E', background: loading ? '#CBAE80' : '#BD9A64', border:'1px solid #BD9A64', borderRadius:2, padding:'16px 34px', cursor: loading ? 'default' : 'pointer', alignSelf:'flex-start' }}
                onMouseEnter={e => { if (!loading) e.currentTarget.style.background='#CBAE80'; }}
                onMouseLeave={e => { if (!loading) e.currentTarget.style.background='#BD9A64'; }}
              >
                {loading ? 'Wird gesendet…' : 'Unverbindlich anfragen'}
              </button>
            </form>
          )}
        </ScrollReveal>
      </div>
    </section>
  );
}
