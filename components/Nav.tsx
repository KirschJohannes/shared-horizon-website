'use client';
import { useEffect, useState, useCallback } from 'react';
import Image from 'next/image';

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

      {/* Floating CTA */}
      <button
        onClick={() => scrollTo('anfrage')}
        style={{
          position:'fixed', right:'clamp(16px,3vw,32px)', bottom:'clamp(16px,3vw,32px)', zIndex:108,
          fontFamily:"'Jost',sans-serif", fontSize:12, fontWeight:500, letterSpacing:'.16em', textTransform:'uppercase',
          color:'#172A2E', background:'#BD9A64', border:'1px solid #BD9A64', borderRadius:2, padding:'15px 26px',
          cursor:'pointer', boxShadow:'0 18px 48px rgba(23,42,46,.22)',
          opacity: showFloat ? 1 : 0, transform: showFloat ? 'translateY(0)' : 'translateY(20px)',
          pointerEvents: showFloat ? 'auto' : 'none', transition:'opacity .5s,transform .5s,background .2s',
        }}
        onMouseEnter={e => (e.currentTarget.style.background='#CBAE80')}
        onMouseLeave={e => (e.currentTarget.style.background='#BD9A64')}
      >
        Anfragen
      </button>

      <style>{`
        @media (max-width: 1039px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
      `}</style>
    </>
  );
}
