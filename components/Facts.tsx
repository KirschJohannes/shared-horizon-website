import { facts } from '../lib/data';
import ScrollReveal from './ScrollReveal';

export default function Facts() {
  return (
    <section id="fakten" style={{ background:'#F3EFE7', padding:'clamp(70px,9vw,130px) clamp(20px,7vw,120px)', scrollMarginTop:64 }}>
      <div style={{ maxWidth:1280, margin:'0 auto' }}>
        <ScrollReveal style={{ maxWidth:680, marginBottom:'clamp(48px,6vw,80px)' }}>
          <span style={{ fontSize:12, letterSpacing:'.32em', textTransform:'uppercase', color:'#80643B', fontWeight:500 }}>
            Fakten &amp; Ausstattung
          </span>
          <h2 style={{ fontFamily:"'Cormorant',serif", fontWeight:500, fontSize:'clamp(34px,5vw,64px)', lineHeight:1.04, color:'#172A2E', margin:'22px 0 0' }}>
            Fakten auf einen Blick.
          </h2>
        </ScrollReveal>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(150px,1fr))', gap:'clamp(28px,4vw,56px) clamp(20px,3vw,40px)' }}>
          {facts.map((ft, i) => (
            <ScrollReveal key={ft.label} delay={i * 0.08}>
              <div style={{ display:'flex', alignItems:'baseline', gap:8 }}>
                <span style={{ fontFamily:"'Cormorant',serif", fontWeight:500, fontSize:'clamp(52px,7vw,88px)', lineHeight:.9, color:'#172A2E', letterSpacing:'.005em' }}>{ft.num}</span>
                <span style={{ fontFamily:"'Jost',sans-serif", fontSize:14, letterSpacing:'.08em', color:'#80643B' }}>{ft.unit}</span>
              </div>
              <div style={{ width:32, height:1, background:'#BD9A64', margin:'16px 0 12px' }} />
              <span style={{ fontFamily:"'Jost',sans-serif", fontSize:13, letterSpacing:'.18em', textTransform:'uppercase', color:'#2A3B3E' }}>{ft.label}</span>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
