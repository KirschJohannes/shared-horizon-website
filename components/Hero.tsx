'use client';
import { useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';

export default function Hero() {
  const imgWrapRef = useRef<HTMLDivElement>(null);

  const scrollTo = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 64, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (imgWrapRef.current && y < window.innerHeight) {
        imgWrapRef.current.style.transform = `translateY(${y * 0.18}px)`;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section id="top" style={{ position:'relative', height:'100vh', minHeight:600, width:'100%', overflow:'hidden', background:'#172A2E' }}>
      <div
        ref={imgWrapRef}
        style={{ position:'absolute', top:'-6%', left:0, width:'100%', height:'112%', willChange:'transform' }}
      >
        <Image
          src="/images/hero-wide.jpg"
          alt="Shared Horizon Hausboot bei Sonnenuntergang"
          fill
          priority
          style={{ objectFit:'cover', objectPosition:'50% 42%' }}
        />
      </div>
      <div style={{ position:'absolute', inset:0, background:'linear-gradient(180deg,rgba(23,42,46,.55) 0%,rgba(23,42,46,.12) 32%,rgba(23,42,46,.20) 62%,rgba(23,42,46,.82) 100%)' }} />
      <div style={{ position:'absolute', inset:0, display:'flex', flexDirection:'column', justifyContent:'center', padding:'0 clamp(20px,7vw,120px)', maxWidth:1100 }}>
        <div style={{ opacity:0, animation:'shFade 1.4s cubic-bezier(.22,.61,.36,1) .3s forwards' }}>
          <span style={{ fontSize:12, letterSpacing:'.34em', textTransform:'uppercase', color:'#E4D3B4', fontWeight:500 }}>
            Eventlocation · Berlin-Schmöckwitz
          </span>
          <div style={{ width:64, height:1, background:'#BD9A64', margin:'22px 0 26px' }} />
        </div>
        <h1 style={{
          fontFamily:"'Cormorant',serif", fontWeight:500, color:'#F3EFE7',
          fontSize:'clamp(48px,8.4vw,116px)', lineHeight:.98, letterSpacing:'.005em',
          margin:0, opacity:0, animation:'shFade 1.5s cubic-bezier(.22,.61,.36,1) .5s forwards',
        }}>
          <span style={{ display:'block' }}>Ein Horizont,</span>
          <span style={{ display:'block' }}>den man teilt.</span>
        </h1>
        <p style={{
          fontFamily:"'Jost',sans-serif", fontWeight:300, color:'#F3EFE7',
          fontSize:'clamp(16px,1.5vw,21px)', lineHeight:1.6, maxWidth:520,
          margin:'30px 0 0', letterSpacing:'.01em',
          opacity:0, animation:'shFade 1.5s cubic-bezier(.22,.61,.36,1) .7s forwards',
        }}>
          Über 170 Quadratmeter, umlaufendes Glas und eine Dachterrasse über dem See. Für Events, Offsites und Momente, die Abstand vom Alltag schaffen.
        </p>
        <div style={{ display:'flex', flexWrap:'wrap', gap:16, marginTop:42, opacity:0, animation:'shFade 1.5s cubic-bezier(.22,.61,.36,1) .9s forwards' }}>
          <button
            onClick={() => scrollTo('anfrage')}
            style={{ fontFamily:"'Jost',sans-serif", fontSize:13, fontWeight:500, letterSpacing:'.16em', textTransform:'uppercase', color:'#172A2E', background:'#BD9A64', border:'1px solid #BD9A64', borderRadius:2, padding:'16px 34px', cursor:'pointer', transition:'background .2s' }}
            onMouseEnter={e => (e.currentTarget.style.background = '#CBAE80')}
            onMouseLeave={e => (e.currentTarget.style.background = '#BD9A64')}
          >
            Verfügbarkeit anfragen
          </button>
        </div>
      </div>
      <div style={{ position:'absolute', bottom:30, left:'50%', transform:'translateX(-50%)', display:'flex', flexDirection:'column', alignItems:'center', gap:10 }}>
        <span style={{ fontSize:10, letterSpacing:'.3em', textTransform:'uppercase', color:'rgba(243,239,231,.75)' }}>Scrollen</span>
        <div style={{ width:1, height:38, background:'linear-gradient(180deg,rgba(243,239,231,.7),transparent)', animation:'shCue 2.4s ease-in-out infinite' }} />
      </div>
    </section>
  );
}
