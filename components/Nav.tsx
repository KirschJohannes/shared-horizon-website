'use client';
import { useEffect, useState, useCallback } from 'react';
import Image from 'next/image';

const WA_ICON = (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="#FFFFFF" aria-hidden="true">
    <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.945C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.515 5.26l-.999 3.648 3.973-1.042zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
  </svg>
);

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showFloat, setShowFloat] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(y > 60);
      setProgress(h > 0 ? (y / h) * 100 : 0);
      setShowFloat(y > window.innerHeight * 0.85);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = useCallback((id: string) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 64, behavior: 'smooth' });
  }, []);

  const linkStyle: React.CSSProperties = {
    fontFamily: "'Jost',sans-serif",
    fontSize: '12.5px',
    letterSpacing: '.16em',
    textTransform: 'uppercase',
    color: '#F3EFE7',
    fontWeight: 400,
    opacity: 0.9,
    cursor: 'pointer',
    background: 'none',
    border: 'none',
    padding: 0,
  };

  return (
    <>
      {/* Scroll progress */}
      <div style={{ position:'fixed', top:0, left:0, right:0, height:2, zIndex:120, pointerEvents:'none' }}>
        <div style={{ height:'100%', width:`${progress}%`, background:'linear-gradient(90deg,transparent,#BD9A64 8%,#BD9A64 92%,transparent)', transition:'width .12s linear' }} />
      </div>

      {/* Nav */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 110,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: scrolled ? '14px clamp(20px,5vw,64px)' : '20px clamp(20px,5vw,64px)',
        background: scrolled ? 'rgba(23,42,46,.96)' : 'transparent',
        boxShadow: scrolled ? '0 1px 0 rgba(189,154,100,.22)' : 'none',
        transition: 'background .4s cubic-bezier(.22,.61,.36,1), padding .4s, box-shadow .4s',
      }}>
        <a href="#top" aria-label="Shared Horizon" style={{ display:'flex', alignItems:'center', gap:12, flexShrink:0 }}>
          <Image src="/images/wordmark-cream.svg" alt="Shared Horizon" width={120} height={15} style={{ height:15, width:'auto' }} />
        </a>

        {/* Desktop menu */}
        <div className="hidden-mobile" style={{ display:'flex', alignItems:'center', gap:'clamp(18px,2vw,34px)' }}>
          <button onClick={() => scrollTo('karte')} style={linkStyle}>Das Boot</button>
          <button onClick={() => scrollTo('nutzung')} style={linkStyle}>Nutzung</button>
          <button onClick={() => scrollTo('galerie')} style={linkStyle}>Galerie</button>
          <button onClick={() => scrollTo('fakten')} style={linkStyle}>Fakten</button>
          <button
            onClick={() => scrollTo('anfrage')}
            style={{ fontFamily:"'Jost',sans-serif", fontSize:12, fontWeight:500, letterSpacing:'.16em', textTransform:'uppercase', color:'#172A2E', background:'#BD9A64', border:'1px solid #BD9A64', borderRadius:2, padding:'11px 22px', cursor:'pointer' }}
            onMouseEnter={e => (e.currentTarget.style.background='#CBAE80')}
            onMouseLeave={e => (e.currentTarget.style.background='#BD9A64')}
          >Anfragen</button>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(true)}
          aria-label="Menü öffnen"
          className="show-mobile"
          style={{ display:'none', flexDirection:'column', gap:5, background:'none', border:'none', cursor:'pointer', padding:8 }}
        >
          <span style={{ display:'block', width:26, height:1.5, background:'#F3EFE7' }} />
          <span style={{ display:'block', width:26, height:1.5, background:'#F3EFE7' }} />
          <span style={{ display:'block', width:18, height:1.5, background:'#F3EFE7' }} />
        </button>
      </nav>

      {/* Mobile full-screen menu */}
      {menuOpen && (
        <div style={{ position:'fixed', inset:0, zIndex:115, background:'#172A2E', display:'flex', flexDirection:'column', padding:'24px clamp(20px,5vw,64px)', animation:'shFade .3s ease' }}>
          <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between' }}>
            <Image src="/images/wordmark-cream.svg" alt="Shared Horizon" width={160} height={20} style={{ height:20, width:'auto' }} />
            <button onClick={() => setMenuOpen(false)} aria-label="Schließen" style={{ background:'none', border:'none', color:'#F3EFE7', fontSize:30, lineHeight:1, cursor:'pointer', fontWeight:200 }}>×</button>
          </div>
          <div style={{ flex:1, display:'flex', flexDirection:'column', justifyContent:'center', gap:28 }}>
            {[
              { label:'Das Boot', id:'karte' },
              { label:'Nutzung', id:'nutzung' },
              { label:'Galerie', id:'galerie' },
              { label:'Fakten', id:'fakten' },
            ].map(item => (
              <button key={item.id} onClick={() => scrollTo(item.id)} style={{ fontFamily:"'Cormorant',serif", fontSize:34, color:'#F3EFE7', fontWeight:500, background:'none', border:'none', cursor:'pointer', textAlign:'left', padding:0 }}>
                {item.label}
              </button>
            ))}
            <button onClick={() => scrollTo('anfrage')} style={{ fontFamily:"'Cormorant',serif", fontSize:34, color:'#BD9A64', fontWeight:500, background:'none', border:'none', cursor:'pointer', textAlign:'left', padding:0 }}>
              Anfragen
            </button>
          </div>
          <div style={{ height:1, background:'linear-gradient(90deg,transparent,#BD9A64 22%,#BD9A64 78%,transparent)', opacity:.5 }} />
        </div>
      )}

      {/* Floating CTAs */}
      <div style={{
        position:'fixed', right:'clamp(16px,3vw,32px)', bottom:'clamp(16px,3vw,32px)', zIndex:108,
        display:'flex', alignItems:'center', gap:12,
        opacity: showFloat ? 1 : 0, transform: showFloat ? 'translateY(0)' : 'translateY(20px)',
        pointerEvents: showFloat ? 'auto' : 'none', transition:'opacity .5s,transform .5s',
      }}>
        <a
          href="https://wa.me/4917632479050"
          target="_blank"
          rel="noopener"
          aria-label="Kontaktiere uns direkt über WhatsApp"
          style={{
            display:'flex', alignItems:'center', justifyContent:'center', width:52, height:52, borderRadius:'50%',
            background:'#25D366', boxShadow:'0 18px 48px rgba(23,42,46,.28)', flexShrink:0, transition:'transform .2s',
          }}
          onMouseEnter={e => (e.currentTarget.style.transform='scale(1.08)')}
          onMouseLeave={e => (e.currentTarget.style.transform='scale(1)')}
        >
          {WA_ICON}
        </a>
        <button
          onClick={() => scrollTo('anfrage')}
          style={{
            fontFamily:"'Jost',sans-serif", fontSize:12, fontWeight:500, letterSpacing:'.16em', textTransform:'uppercase',
            color:'#172A2E', background:'#BD9A64', border:'1px solid #BD9A64', borderRadius:2, padding:'15px 26px',
            cursor:'pointer', boxShadow:'0 18px 48px rgba(23,42,46,.22)', transition:'background .2s',
          }}
          onMouseEnter={e => (e.currentTarget.style.background='#CBAE80')}
          onMouseLeave={e => (e.currentTarget.style.background='#BD9A64')}
        >
          Termin anfragen
        </button>
      </div>

      <style>{`
        @media (max-width: 1039px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
      `}</style>
    </>
  );
}
