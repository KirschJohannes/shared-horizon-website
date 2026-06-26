'use client';
import { useState } from 'react';
import { faqs } from '../lib/data';
import ScrollReveal from './ScrollReveal';

export default function Faq() {
  const [open, setOpen] = useState<number>(0);

  return (
    <section style={{ background:'#FBFAF7', padding:'clamp(70px,9vw,130px) clamp(20px,7vw,120px)' }}>
      <div style={{ maxWidth:980, margin:'0 auto' }}>
        <ScrollReveal style={{ maxWidth:680, marginBottom:'clamp(40px,5vw,60px)' }}>
          <span style={{ fontSize:12, letterSpacing:'.32em', textTransform:'uppercase', color:'#A07E4A', fontWeight:500 }}>Vertrauen &amp; Klarheit</span>
          <h2 style={{ fontFamily:"'Cormorant',serif", fontWeight:500, fontSize:'clamp(34px,5vw,64px)', lineHeight:1.04, color:'#172A2E', margin:'22px 0 0' }}>
            Das Wichtigste, ruhig erklärt.
          </h2>
        </ScrollReveal>

        <div style={{ borderTop:'1px solid #E6E0D5' }}>
          {faqs.map((faq, i) => {
            const isOpen = i === open;
            return (
              <ScrollReveal key={i} delay={i * 0.04}>
                <div style={{ borderBottom:'1px solid #E6E0D5' }}>
                  <button
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    style={{ width:'100%', display:'flex', alignItems:'center', justifyContent:'space-between', gap:20, background:'none', border:'none', cursor:'pointer', padding:'clamp(20px,2.4vw,28px) 0', textAlign:'left' }}
                  >
                    <span style={{ fontFamily:"'Cormorant',serif", fontWeight:500, fontSize:'clamp(19px,2.2vw,26px)', lineHeight:1.25, color:'#172A2E' }}>{faq.q}</span>
                    <span style={{ fontFamily:"'Jost',sans-serif", fontSize:24, fontWeight:300, color:'#BD9A64', flexShrink:0, lineHeight:1 }}>{isOpen ? '−' : '+'}</span>
                  </button>
                  <div style={{ overflow:'hidden', transition:'max-height .45s cubic-bezier(.22,.61,.36,1), opacity .3s', maxHeight: isOpen ? 360 : 0, opacity: isOpen ? 1 : 0 }}>
                    <p style={{ fontFamily:"'Jost',sans-serif", fontWeight:300, fontSize:15.5, lineHeight:1.75, color:'#2A3B3E', margin:0, padding:'0 0 clamp(22px,2.4vw,30px)', maxWidth:680 }}>
                      {faq.a}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
