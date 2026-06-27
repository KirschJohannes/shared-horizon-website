import Image from 'next/image';
import { feelings } from '../lib/data';
import ScrollReveal from './ScrollReveal';

export default function AtmoBand() {
  return (
    <section style={{ position:'relative', minHeight:'88vh', display:'flex', alignItems:'center', overflow:'hidden', background:'#172A2E' }}>
      <Image
        src="/images/Stimmung/hausboot_01.webp"
        alt="Shared Horizon Abendstimmung"
        fill
        style={{ objectFit:'cover', objectPosition:'50% 50%' }}
        loading="lazy"
      />
      <div style={{ position:'absolute', inset:0, background:'linear-gradient(90deg,rgba(23,42,46,.92) 0%,rgba(23,42,46,.7) 42%,rgba(23,42,46,.32) 100%)' }} />
      <div style={{ position:'relative', width:'100%', maxWidth:1280, margin:'0 auto', padding:'clamp(70px,9vw,120px) clamp(20px,7vw,120px)' }}>
        <div style={{ maxWidth:560 }}>
          <ScrollReveal>
            <span style={{ fontSize:12, letterSpacing:'.32em', textTransform:'uppercase', color:'#BD9A64', fontWeight:500, display:'block' }}>
              Atmosphäre
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <h2 style={{ fontFamily:"'Cormorant',serif", fontWeight:500, fontSize:'clamp(34px,5.4vw,68px)', lineHeight:1.04, color:'#F3EFE7', margin:'22px 0 clamp(36px,4vw,52px)', letterSpacing:'.005em' }}>
              Wie es sich anfühlt, hier zu sein.
            </h2>
          </ScrollReveal>
          <div style={{ display:'flex', flexDirection:'column' }}>
            {feelings.map((f, i) => (
              <ScrollReveal key={f} delay={0.08 + i * 0.08}>
                <div style={{ display:'flex', alignItems:'center', gap:18, padding:'16px 0', borderTop:'1px solid rgba(189,154,100,.25)' }}>
                  <span style={{ width:6, height:6, borderRadius:'50%', background:'#BD9A64', flexShrink:0 }} />
                  <span style={{ fontFamily:"'Cormorant',serif", fontWeight:500, fontSize:'clamp(20px,2.4vw,30px)', color:'#F3EFE7', letterSpacing:'.01em' }}>{f}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
