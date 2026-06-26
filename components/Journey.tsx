'use client';
import Image from 'next/image';
import { journey } from '../lib/data';
import ScrollReveal from './ScrollReveal';

export default function Journey() {
  return (
    <section style={{ background:'#172A2E', color:'#F3EFE7', padding:'clamp(70px,9vw,120px) 0 clamp(80px,9vw,130px)' }}>
      <div style={{ maxWidth:1280, margin:'0 auto', padding:'0 clamp(20px,7vw,120px)' }}>
        <ScrollReveal style={{ display:'flex', flexWrap:'wrap', justifyContent:'space-between', alignItems:'flex-end', gap:20, marginBottom:'clamp(36px,4vw,52px)' }}>
          <div style={{ maxWidth:560 }}>
            <span style={{ fontSize:12, letterSpacing:'.32em', textTransform:'uppercase', color:'#BD9A64', fontWeight:500 }}>
              Ein Besuch in zehn Bildern
            </span>
            <h2 style={{ fontFamily:"'Cormorant',serif", fontWeight:500, fontSize:'clamp(32px,4.6vw,56px)', lineHeight:1.06, color:'#F3EFE7', margin:'20px 0 0' }}>
              Bereits das Ankommen ist besonders.
            </h2>
          </div>
          <span style={{ fontFamily:"'Jost',sans-serif", fontSize:12, letterSpacing:'.18em', textTransform:'uppercase', color:'#9FB0AE' }}>
            Wischen →
          </span>
        </ScrollReveal>
      </div>
      <div className="gal-scroll" style={{ display:'flex', gap:'clamp(16px,2vw,28px)', overflowX:'auto', scrollSnapType:'x mandatory', padding:'4px clamp(20px,7vw,120px) 24px', WebkitOverflowScrolling:'touch' }}>
        {journey.map((j, i) => (
          <div key={j.n} style={{ flex:'none', width:'clamp(260px,32vw,400px)', scrollSnapAlign:'start' }}>
            <div style={{ position:'relative' }}>
              <div style={{ position:'relative', width:'100%', height:'clamp(360px,46vw,520px)' }}>
                <Image src={j.src} alt={j.title} fill style={{ objectFit:'cover', borderRadius:2 }} loading="lazy" />
              </div>
              <span style={{ position:'absolute', top:16, left:16, fontFamily:"'Cormorant',serif", fontSize:28, fontWeight:500, color:'#F3EFE7', textShadow:'0 1px 14px rgba(23,42,46,.6)' }}>
                {j.n}
              </span>
            </div>
            <h3 style={{ fontFamily:"'Cormorant',serif", fontWeight:500, fontSize:24, color:'#F3EFE7', margin:'18px 0 0' }}>{j.title}</h3>
            <p style={{ fontFamily:"'Jost',sans-serif", fontWeight:300, fontSize:14.5, lineHeight:1.6, color:'#F3EFE7', opacity:.72, margin:'8px 0 0' }}>{j.line}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
