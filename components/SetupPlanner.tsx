'use client';
import { useState, useCallback } from 'react';
import { evTypes, evMap } from '../lib/data';
import ScrollReveal from './ScrollReveal';

export default function SetupPlanner() {
  const [evType, setEvType] = useState('offsite');
  const [guests, setGuests] = useState(12);

  const ev = evMap[evType];
  const evFormat = guests <= 12 ? 'Sitzend an einer Tafel' : guests <= 16 ? 'Sitzen mit Stehbereich' : 'Empfang mit Stehzonen';

  const scrollTo = useCallback(() => {
    const el = document.getElementById('anfrage');
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 64, behavior: 'smooth' });
  }, []);

  return (
    <section style={{ background:'#172A2E', color:'#F3EFE7', padding:'clamp(70px,9vw,130px) clamp(20px,7vw,120px)' }}>
      <div style={{ maxWidth:1100, margin:'0 auto' }}>
        <ScrollReveal style={{ textAlign:'center', maxWidth:680, margin:'0 auto clamp(40px,5vw,60px)' }}>
          <span style={{ fontSize:12, letterSpacing:'.32em', textTransform:'uppercase', color:'#BD9A64', fontWeight:500 }}>Setup-Planer</span>
          <h2 style={{ fontFamily:"'Cormorant',serif", fontWeight:500, fontSize:'clamp(32px,4.6vw,56px)', lineHeight:1.06, color:'#F3EFE7', margin:'20px 0 0' }}>
            Stellen Sie Ihren Anlass zusammen.
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.08}>
          <div style={{ border:'1px solid rgba(189,154,100,.28)', borderRadius:3, padding:'clamp(28px,4vw,56px)', background:'rgba(46,74,76,.22)' }}>
            <div style={{ fontSize:11, letterSpacing:'.22em', textTransform:'uppercase', color:'#9FB0AE', marginBottom:16 }}>Art des Anlasses</div>
            <div style={{ display:'flex', flexWrap:'wrap', gap:10, marginBottom:'clamp(32px,4vw,48px)' }}>
              {evTypes.map(t => {
                const active = t.id === evType;
                return (
                  <button
                    key={t.id}
                    onClick={() => setEvType(t.id)}
                    style={{
                      fontFamily:"'Jost',sans-serif", fontSize:12.5, letterSpacing:'.12em', textTransform:'uppercase',
                      cursor:'pointer', padding:'11px 20px', borderRadius:2, transition:'all .25s', whiteSpace:'nowrap',
                      fontWeight: active ? 500 : 400,
                      border: active ? '1px solid #BD9A64' : '1px solid rgba(189,154,100,.35)',
                      background: active ? '#BD9A64' : 'transparent',
                      color: active ? '#172A2E' : '#F3EFE7',
                    }}
                  >
                    {t.label}
                  </button>
                );
              })}
            </div>

            <div style={{ display:'flex', flexWrap:'wrap', gap:8, alignItems:'baseline', marginBottom:14 }}>
              <span style={{ fontSize:11, letterSpacing:'.22em', textTransform:'uppercase', color:'#9FB0AE' }}>Personen</span>
              <span style={{ fontFamily:"'Cormorant',serif", fontSize:'clamp(34px,4vw,52px)', fontWeight:500, color:'#BD9A64', lineHeight:1, marginLeft:6 }}>{guests}</span>
              <span style={{ fontFamily:"'Jost',sans-serif", fontSize:14, color:'#F3EFE7', opacity:.7 }}>Gäste · {evFormat}</span>
            </div>
            <input
              type="range" min={2} max={24} step={1} value={guests}
              onChange={e => setGuests(parseInt(e.target.value, 10))}
              style={{ width:'100%', height:4, cursor:'pointer', margin:'0 0 clamp(36px,4vw,48px)' }}
            />

            <div style={{ height:1, background:'linear-gradient(90deg,#BD9A64,transparent)', opacity:.4, marginBottom:'clamp(32px,4vw,44px)' }} />

            <div style={{ display:'flex', flexWrap:'wrap', gap:'clamp(24px,4vw,48px)', alignItems:'flex-start' }}>
              <div style={{ flex:'1 1 320px' }}>
                <div style={{ fontSize:11, letterSpacing:'.22em', textTransform:'uppercase', color:'#9FB0AE', marginBottom:10 }}>Empfohlenes Setup</div>
                <h3 style={{ fontFamily:"'Cormorant',serif", fontWeight:500, fontSize:'clamp(26px,3vw,38px)', color:'#F3EFE7', margin:0 }}>{ev.title}</h3>
                <p style={{ fontFamily:"'Jost',sans-serif", fontWeight:300, fontSize:16, lineHeight:1.7, color:'#F3EFE7', opacity:.82, margin:'14px 0 0', maxWidth:420 }}>{ev.note}</p>
                <div style={{ display:'flex', flexWrap:'wrap', gap:10, marginTop:22 }}>
                  {ev.zones.map(z => (
                    <span key={z} style={{ fontFamily:"'Jost',sans-serif", fontSize:12, letterSpacing:'.06em', color:'#F3EFE7', border:'1px solid rgba(189,154,100,.4)', borderRadius:2, padding:'7px 14px' }}>{z}</span>
                  ))}
                </div>
              </div>
              <div style={{ flexShrink:0, alignSelf:'center' }}>
                <button
                  onClick={scrollTo}
                  style={{ fontFamily:"'Jost',sans-serif", fontSize:13, fontWeight:500, letterSpacing:'.16em', textTransform:'uppercase', color:'#172A2E', background:'#BD9A64', border:'1px solid #BD9A64', borderRadius:2, padding:'16px 34px', cursor:'pointer' }}
                  onMouseEnter={e => (e.currentTarget.style.background='#CBAE80')}
                  onMouseLeave={e => (e.currentTarget.style.background='#BD9A64')}
                >
                  Dieses Setup anfragen
                </button>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
