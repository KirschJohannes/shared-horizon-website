'use client';
import { useState } from 'react';
import Image from 'next/image';
import { hotspots } from '../lib/data';
import ScrollReveal from './ScrollReveal';

export default function DeckPlan() {
  const [activeId, setActiveId] = useState<string>('heck');
  const spot = hotspots.find(h => h.id === activeId) ?? null;

  return (
    <section id="karte" style={{ background:'#172A2E', color:'#F3EFE7', padding:'clamp(70px,9vw,130px) clamp(20px,7vw,120px)', scrollMarginTop:64 }}>
      <div style={{ maxWidth:1280, margin:'0 auto' }}>
        <ScrollReveal style={{ display:'flex', flexWrap:'wrap', gap:'clamp(40px,5vw,80px)', alignItems:'flex-start' }}>
          {/* Left: floorplan */}
          <div style={{ flex:'1 1 540px', minWidth:'min(100%,320px)' }}>
            <div style={{ marginBottom:'clamp(34px,4.5vw,56px)' }}>
              <span style={{ fontSize:12, letterSpacing:'.32em', textTransform:'uppercase', color:'#BD9A64', fontWeight:500 }}>Das Boot im Überblick</span>
              <h2 style={{ fontFamily:"'Cormorant',serif", fontWeight:500, fontSize:'clamp(32px,4vw,52px)', lineHeight:1.05, color:'#F3EFE7', margin:'20px 0 0', letterSpacing:'.005em' }}>
                Finden Sie sich an Bord zurecht.
              </h2>
              <p style={{ fontFamily:"'Jost',sans-serif", fontWeight:300, fontSize:'clamp(16px,1.3vw,18px)', lineHeight:1.7, color:'#F3EFE7', opacity:.8, margin:'18px 0 0', maxWidth:500 }}>
                Tippen Sie auf eine Zone im Grundriss, um mehr zu erfahren — vom Heck bis zum Bug.
              </p>
            </div>
            <div style={{ position:'relative', width:'100%' }}>
              <Image src="/images/grundriss-gold.png" alt="Grundriss Shared Horizon" width={800} height={400} style={{ width:'100%', height:'auto', display:'block', userSelect:'none' }} draggable={false} />
              {hotspots.map(h => {
                const active = h.id === activeId;
                return (
                  <button
                    key={h.id}
                    onClick={() => setActiveId(h.id)}
                    aria-label={h.title}
                    style={{
                      position:'absolute', left:`${h.x}%`, top:`${h.y}%`, transform:'translate(-50%,-50%)',
                      width:42, height:42, borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center',
                      fontFamily:"'Jost',sans-serif", fontSize:14, fontWeight:500, cursor:'pointer', zIndex: active ? 3 : 2,
                      transition:'background .25s,color .25s,box-shadow .25s,border-color .25s',
                      background: active ? '#BD9A64' : 'rgba(23,42,46,.6)',
                      color: active ? '#172A2E' : '#F3EFE7',
                      border: active ? '1px solid #BD9A64' : '1px solid rgba(189,154,100,.55)',
                      boxShadow: active ? '0 0 0 7px rgba(189,154,100,.16)' : 'none',
                      backdropFilter:'blur(2px)',
                    }}
                  >
                    {h.n}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: detail panel */}
          <div style={{ flex:'1 1 420px', minWidth:'min(100%,300px)' }}>
            {spot ? (
              <div style={{ border:'1px solid rgba(189,154,100,.28)', borderRadius:3, padding:'clamp(28px,3vw,40px)', background:'rgba(46,74,76,.28)' }}>
                <div style={{ position:'relative', width:'100%', height:'clamp(180px,22vw,240px)', marginBottom:24 }}>
                  <Image src={spot.img} alt={spot.title} fill style={{ objectFit:'cover', borderRadius:2 }} loading="lazy" />
                </div>
                <div style={{ display:'flex', alignItems:'center', gap:12 }}>
                  <span style={{ fontFamily:"'Jost',sans-serif", fontSize:12, fontWeight:500, color:'#172A2E', background:'#BD9A64', width:28, height:28, borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center' }}>
                    {spot.n}
                  </span>
                  <span style={{ fontSize:10.5, letterSpacing:'.26em', textTransform:'uppercase', color:'#BD9A64' }}>{spot.facts}</span>
                </div>
                <h3 style={{ fontFamily:"'Cormorant',serif", fontWeight:500, fontSize:'clamp(28px,3.4vw,40px)', lineHeight:1.1, color:'#F3EFE7', margin:'18px 0 0' }}>{spot.title}</h3>
                <p style={{ fontFamily:"'Jost',sans-serif", fontWeight:300, fontSize:16, lineHeight:1.75, color:'#F3EFE7', opacity:.85, margin:'16px 0 0' }}>{spot.text}</p>
                <div style={{ height:1, background:'linear-gradient(90deg,#BD9A64,transparent)', margin:'24px 0 16px', opacity:.5 }} />
                <div style={{ fontSize:11, letterSpacing:'.2em', textTransform:'uppercase', color:'#9FB0AE', marginBottom:6 }}>Ideen</div>
                <p style={{ fontFamily:"'Jost',sans-serif", fontWeight:300, fontSize:15, color:'#F3EFE7', opacity:.85, margin:0 }}>{spot.ideas}</p>
              </div>
            ) : (
              <div style={{ border:'1px dashed rgba(189,154,100,.32)', borderRadius:3, padding:'clamp(32px,3vw,48px)', textAlign:'center' }}>
                <div style={{ width:40, height:1, background:'#BD9A64', margin:'0 auto 22px', opacity:.6 }} />
                <p style={{ fontFamily:"'Cormorant',serif", fontWeight:500, fontSize:'clamp(22px,2.6vw,30px)', lineHeight:1.3, color:'#F3EFE7', margin:0 }}>
                  Wählen Sie einen Bereich auf dem Boot.
                </p>
                <p style={{ fontFamily:"'Jost',sans-serif", fontWeight:300, fontSize:15, color:'#F3EFE7', opacity:.65, margin:'14px 0 0' }}>Neun Zonen im Grundriss.</p>
              </div>
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
