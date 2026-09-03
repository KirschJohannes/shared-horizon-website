import Image from 'next/image';
import { lastUpdated } from '../lib/data';

const WA_ICON = (
  <svg width="19" height="19" viewBox="0 0 24 24" fill="#BD9A64" aria-hidden="true">
    <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.945C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.515 5.26l-.999 3.648 3.973-1.042zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
  </svg>
);

const IG_ICON = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#BD9A64" strokeWidth="1.8" aria-hidden="true">
    <rect x="2.5" y="2.5" width="19" height="19" rx="5.4"/>
    <circle cx="12" cy="12" r="4.2"/>
    <circle cx="17.4" cy="6.6" r="1.1" fill="#BD9A64" stroke="none"/>
  </svg>
);

const linkStyle: React.CSSProperties = {
  fontFamily: "'Jost',sans-serif", fontWeight: 300, fontSize: 15,
  color: '#F3EFE7', opacity: .85, transition: 'color .2s',
};

export default function Footer() {
  return (
    <footer style={{ background:'#172A2E', color:'#F3EFE7', padding:'clamp(64px,8vw,110px) clamp(20px,7vw,120px) 40px' }}>
      <div style={{ maxWidth:1200, margin:'0 auto' }}>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))', gap:48, alignItems:'start' }}>

          {/* Full-width: wordmark + tagline */}
          <div style={{ gridColumn:'1/-1', maxWidth:560 }}>
            <Image src="/images/wordmark-cream.svg" alt="Shared Horizon" width={176} height={26} style={{ height:26, width:'auto', marginBottom:28 }} />
            <p style={{ fontFamily:"'Cormorant',serif", fontWeight:500, fontSize:'clamp(24px,3vw,34px)', lineHeight:1.25, color:'#F3EFE7', margin:0, letterSpacing:'.01em' }}>
              Wir halten Ihnen einen Horizont frei.
            </p>
          </div>

          {/* Liegeplatz */}
          <div>
            <div style={{ fontSize:11, letterSpacing:'.28em', textTransform:'uppercase', color:'#BD9A64', marginBottom:18 }}>Liegeplatz</div>
            <p style={{ fontFamily:"'Jost',sans-serif", fontWeight:300, fontSize:15, lineHeight:2, color:'#F3EFE7', opacity:.85, margin:0 }}>
              Yachthafen Schmöckwitz<br />Weiselpfad 20<br />12527 Berlin
            </p>
            <div style={{ display:'flex', gap:12, marginTop:18 }}>
              <a
                href="https://wa.me/4917632479050"
                target="_blank"
                rel="noopener"
                title="Kontaktiere uns direkt über WhatsApp"
                style={{ display:'inline-flex', alignItems:'center', justifyContent:'center', width:40, height:40, borderRadius:'50%', border:'1px solid rgba(189,154,100,.5)', transition:'background .25s,border-color .25s' }}
              >
                {WA_ICON}
              </a>
              <a
                href="https://instagram.com/shared.horizon"
                target="_blank"
                rel="noopener"
                title="@shared.horizon auf Instagram"
                style={{ display:'inline-flex', alignItems:'center', justifyContent:'center', width:40, height:40, borderRadius:'50%', border:'1px solid rgba(189,154,100,.5)', transition:'background .25s,border-color .25s' }}
              >
                {IG_ICON}
              </a>
            </div>
          </div>

          {/* Entdecken */}
          <div>
            <div style={{ fontSize:11, letterSpacing:'.28em', textTransform:'uppercase', color:'#BD9A64', marginBottom:18 }}>Entdecken</div>
            <div style={{ display:'flex', flexDirection:'column', gap:11 }}>
              <a href="#karte" style={linkStyle}>Das Boot</a>
              <a href="#galerie" style={linkStyle}>Galerie</a>
              <a href="#anfrage" style={linkStyle}>Anfragen</a>
            </div>
          </div>

          {/* Folgen */}
          <div>
            <div style={{ fontSize:11, letterSpacing:'.28em', textTransform:'uppercase', color:'#BD9A64', marginBottom:18 }}>Folgen</div>
            <div style={{ display:'flex', flexDirection:'column', gap:11 }}>
              <a href="https://instagram.com/shared.horizon" target="_blank" rel="noopener" style={linkStyle}>Instagram</a>
            </div>
          </div>
        </div>

        <div style={{ height:1, background:'linear-gradient(90deg,transparent,#BD9A64 18%,#BD9A64 82%,transparent)', opacity:.45, margin:'56px 0 28px' }} />

        <div style={{ display:'flex', flexWrap:'wrap', gap:'18px 32px', justifyContent:'space-between', alignItems:'center', fontFamily:"'Jost',sans-serif", fontSize:12, letterSpacing:'.04em', color:'rgba(243,239,231,.55)' }}>
          <span>© {new Date().getFullYear()} Shared Horizon · Zuletzt aktualisiert {lastUpdated}</span>
          <div style={{ display:'flex', gap:28 }}>
            <a href="/impressum" style={{ transition:'color .2s' }}>Impressum</a>
            <a href="/datenschutz" style={{ transition:'color .2s' }}>Datenschutz</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
