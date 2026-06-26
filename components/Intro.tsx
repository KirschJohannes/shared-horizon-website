import ScrollReveal from './ScrollReveal';

export default function Intro() {
  return (
    <section style={{ background:'#FBFAF7', padding:'clamp(80px,12vw,160px) clamp(20px,7vw,120px)' }}>
      <div style={{ maxWidth:1000, margin:'0 auto', textAlign:'center' }}>
        <ScrollReveal>
          <span style={{ fontSize:12, letterSpacing:'.32em', textTransform:'uppercase', color:'#A07E4A', fontWeight:500, display:'block' }}>
            Shared Horizon
          </span>
        </ScrollReveal>
        <ScrollReveal delay={0.08}>
          <div style={{ width:48, height:1, background:'#BD9A64', margin:'24px auto 36px' }} />
          <p style={{ fontFamily:"'Cormorant',serif", fontWeight:500, fontSize:'clamp(26px,3.6vw,46px)', lineHeight:1.28, color:'#172A2E', margin:0, letterSpacing:'.005em' }}>
            Ein besonderer Ort auf dem Wasser. Offen, hell und ruhig — ein Rahmen für Gespräche, Ideen und Momente, die bleiben.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.16}>
          <p style={{ fontFamily:"'Jost',sans-serif", fontWeight:300, fontSize:'clamp(16px,1.4vw,19px)', lineHeight:1.75, color:'#2A3B3E', maxWidth:640, margin:'38px auto 0', letterSpacing:'.01em' }}>
            Für Menschen, die Abstand vom Gewöhnlichen suchen. Kein gemieteter Raum, sondern eine Lage: über 170 Quadratmeter, umlaufendes Glas, eine Dachterrasse über dem See. Der Alltag bleibt am Ufer.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
