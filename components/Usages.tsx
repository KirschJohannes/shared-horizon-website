import { usages } from '../lib/data';
import ScrollReveal from './ScrollReveal';

export default function Usages() {
  return (
    <section id="nutzung" style={{ background:'#FBFAF7', padding:'clamp(70px,9vw,130px) clamp(20px,7vw,120px)', scrollMarginTop:64 }}>
      <div style={{ maxWidth:1280, margin:'0 auto' }}>
        <ScrollReveal style={{ maxWidth:680, marginBottom:'clamp(40px,5vw,64px)' }}>
          <span style={{ fontSize:12, letterSpacing:'.32em', textTransform:'uppercase', color:'#A07E4A', fontWeight:500 }}>
            Nutzungsmöglichkeiten
          </span>
          <h2 style={{ fontFamily:"'Cormorant',serif", fontWeight:500, fontSize:'clamp(34px,5vw,64px)', lineHeight:1.04, color:'#172A2E', margin:'22px 0 0' }}>
            Wofür Sie Shared Horizon buchen.
          </h2>
        </ScrollReveal>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(290px,1fr))', gap:1, background:'#E6E0D5', border:'1px solid #E6E0D5', borderRadius:3, overflow:'hidden' }}>
          {usages.map((u, i) => (
            <ScrollReveal key={u.title} delay={i * 0.04}>
              <div className="usage-tile" style={{ background:'#FBFAF7', padding:'clamp(28px,3vw,40px)', position:'relative', height:'100%' }}>
                <span style={{ fontSize:11, letterSpacing:'.22em', textTransform:'uppercase', color:'#A07E4A', fontWeight:500 }}>{u.lead}</span>
                <h3 style={{ fontFamily:"'Cormorant',serif", fontWeight:500, fontSize:'clamp(24px,2.6vw,32px)', lineHeight:1.12, color:'#172A2E', margin:'14px 0 0' }}>{u.title}</h3>
                <p style={{ fontFamily:"'Jost',sans-serif", fontWeight:300, fontSize:15, lineHeight:1.72, color:'#2A3B3E', margin:'16px 0 0' }}>{u.text}</p>
                <div style={{ height:1, background:'#E6E0D5', margin:'22px 0 14px' }} />
                <p style={{ fontFamily:"'Jost',sans-serif", fontSize:12.5, letterSpacing:'.04em', color:'#9C9488', margin:0 }}>{u.bereiche}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
