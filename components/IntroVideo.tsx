'use client';
import { useState } from 'react';
import ScrollReveal from './ScrollReveal';

const VIMEO_ID = '1204774448';
const VIMEO_HASH = '6a4decac27';
const VIMEO_SRC = `https://player.vimeo.com/video/${VIMEO_ID}?h=${VIMEO_HASH}&title=0&byline=0&portrait=0&color=bd9a64&autoplay=1`;

export default function IntroVideo() {
  const [loaded, setLoaded] = useState(false);

  return (
    <section style={{ background:'#FBFAF7', padding:'clamp(70px,10vw,150px) clamp(20px,7vw,120px)' }}>
      <div style={{ maxWidth:1240, margin:'0 auto', display:'flex', flexWrap:'wrap', alignItems:'center', gap:'clamp(40px,5vw,80px)' }}>

        {/* Text */}
        <ScrollReveal style={{ flex:'1 1 420px', minWidth:'min(100%,320px)' }}>
          <span style={{ fontSize:12, letterSpacing:'.32em', textTransform:'uppercase', color:'#A07E4A', fontWeight:500, display:'block' }}>
            Shared Horizon
          </span>
          <div style={{ width:48, height:1, background:'#BD9A64', margin:'24px 0 32px' }} />
          <p style={{ fontFamily:"'Cormorant',serif", fontWeight:500, fontSize:'clamp(25px,3vw,42px)', lineHeight:1.22, color:'#172A2E', margin:0, letterSpacing:'.005em' }}>
            Ein besonderer Ort auf dem Wasser. Offen, hell und ruhig — ein Rahmen für Gespräche, Ideen und Momente, die bleiben.
          </p>
          <p style={{ fontFamily:"'Jost',sans-serif", fontWeight:300, fontSize:'clamp(16px,1.3vw,18px)', lineHeight:1.75, color:'#2A3B3E', margin:'30px 0 0', letterSpacing:'.01em', maxWidth:520 }}>
            Für Menschen, die Abstand vom Gewöhnlichen suchen. Kein gemieteter Raum, sondern eine Lage: über 170 Quadratmeter, umlaufendes Glas, eine Dachterrasse über dem See. Der Alltag bleibt am Ufer.
          </p>
        </ScrollReveal>

        {/* Video */}
        <ScrollReveal delay={0.12} style={{ flex:'1 1 520px', minWidth:'min(100%,320px)' }}>
          <div style={{ position:'relative', border:'1px solid rgba(189,154,100,.32)', borderRadius:4, overflow:'hidden', boxShadow:'0 30px 70px rgba(23,42,46,.22)', background:'#172A2E' }}>
            <div style={{ position:'relative', width:'100%', paddingTop:'56.25%', height:0 }}>
              {loaded ? (
                <iframe
                  src={VIMEO_SRC}
                  title="Shared Horizon — Film"
                  style={{ position:'absolute', inset:0, width:'100%', height:'100%', border:0 }}
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <button
                  onClick={() => setLoaded(true)}
                  aria-label="Video abspielen"
                  style={{
                    position:'absolute', inset:0, width:'100%', height:'100%',
                    backgroundImage:'url(/images/video-thumbnail.webp)',
                    backgroundSize:'cover', backgroundPosition:'center',
                    border:'none', cursor:'pointer',
                  }}
                />
              )}
            </div>
          </div>
          <div style={{ display:'flex', alignItems:'center', gap:12, marginTop:18 }}>
            <span style={{ width:30, height:1, background:'#BD9A64', opacity:.6, flexShrink:0 }} />
            <span style={{ fontFamily:"'Jost',sans-serif", fontSize:11.5, letterSpacing:'.22em', textTransform:'uppercase', color:'#9C9488' }}>
              Tauchen Sie ein in die Welt der Shared Horizon
            </span>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
