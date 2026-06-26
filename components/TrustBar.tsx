export default function TrustBar() {
  return (
    <div style={{ background:'#172A2E', borderTop:'1px solid rgba(189,154,100,.18)', padding:'13px clamp(20px,5vw,80px)', textAlign:'center' }}>
      <div style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:10, flexWrap:'wrap' }}>
        <span style={{ color:'#BD9A64', fontSize:16, letterSpacing:4, lineHeight:1 }}>★★★★★</span>
        <span style={{ fontFamily:"'Jost',sans-serif", fontSize:13.5, fontWeight:300, color:'#F3EFE7', opacity:.9 }}>
          5,0 · 9 Bewertungen auf Google, Airbnb &amp; Click&amp;Boat
        </span>
        <span style={{ color:'rgba(189,154,100,.35)', fontSize:12 }}>·</span>
        <span style={{ fontFamily:"'Jost',sans-serif", fontSize:11, letterSpacing:'.24em', textTransform:'uppercase', color:'#F3EFE7', opacity:.5 }}>
          Privates Hausboot · Eigner &amp; Skipper an Bord · Yachthafen Schmöckwitz
        </span>
      </div>
    </div>
  );
}
