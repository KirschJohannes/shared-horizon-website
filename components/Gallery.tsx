'use client';
import { useState } from 'react';
import Image from 'next/image';
import { gallery, galCats } from '../lib/data';
import Lightbox from './Lightbox';
import ScrollReveal from './ScrollReveal';

export default function Gallery() {
  const [filter, setFilter] = useState('alle');
  const [lbIdx, setLbIdx] = useState(-1);

  const filtered = filter === 'alle' ? gallery : gallery.filter(g => g.cat === filter);
  const lbItem = lbIdx >= 0 ? filtered[lbIdx] : null;

  return (
    <section id="galerie" style={{ background:'#FBFAF7', padding:'clamp(70px,9vw,130px) clamp(20px,7vw,120px)', scrollMarginTop:64 }}>
      <div style={{ maxWidth:1320, margin:'0 auto' }}>
        <ScrollReveal style={{ maxWidth:680, marginBottom:'clamp(36px,4vw,52px)' }}>
          <span style={{ fontSize:12, letterSpacing:'.32em', textTransform:'uppercase', color:'#A07E4A', fontWeight:500 }}>Galerie</span>
          <h2 style={{ fontFamily:"'Cormorant',serif", fontWeight:500, fontSize:'clamp(34px,5vw,64px)', lineHeight:1.04, color:'#172A2E', margin:'22px 0 0' }}>
            Bilder sagen mehr als 1000 Worte
          </h2>
        </ScrollReveal>

        {/* Filter chips */}
        <div className="gal-scroll" style={{ display:'flex', gap:10, overflowX:'auto', paddingBottom:10, marginBottom:'clamp(32px,4vw,48px)' }}>
          {galCats.map(c => {
            const active = c.id === filter;
            return (
              <button
                key={c.id}
                onClick={() => { setFilter(c.id); setLbIdx(-1); }}
                style={{
                  fontFamily:"'Jost',sans-serif", fontSize:12.5, letterSpacing:'.14em', textTransform:'uppercase',
                  cursor:'pointer', padding:'9px 18px', borderRadius:2, transition:'all .25s', whiteSpace:'nowrap',
                  border: active ? '1px solid #172A2E' : '1px solid #E6E0D5',
                  background: active ? '#172A2E' : 'transparent',
                  color: active ? '#F3EFE7' : '#2A3B3E',
                }}
              >
                {c.label}
              </button>
            );
          })}
        </div>

        {/* Masonry grid */}
        <div style={{ columns:'300px', columnGap:14 }}>
          {filtered.map((g, i) => (
            <div
              key={g.id}
              className="gal-tile"
              onClick={() => setLbIdx(i)}
              style={{ breakInside:'avoid', marginBottom:14, position:'relative', cursor:'pointer' }}
            >
              <div style={{ position:'relative', width:'100%', height:g.h }}>
                <Image src={g.src} alt={g.cap} fill style={{ objectFit:'cover', borderRadius:2 }} loading="lazy" />
              </div>
              <div className="gal-cap" style={{ position:'absolute', inset:0, display:'flex', flexDirection:'column', justifyContent:'flex-end', padding:18, background:'linear-gradient(180deg,transparent 55%,rgba(23,42,46,.6))', pointerEvents:'none', borderRadius:2 }}>
                <span style={{ fontFamily:"'Jost',sans-serif", fontSize:13, letterSpacing:'.04em', color:'#F3EFE7' }}>{g.cap}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {lbItem && (
        <Lightbox
          src={lbItem.src}
          cap={lbItem.cap}
          onClose={() => setLbIdx(-1)}
          onPrev={() => setLbIdx(idx => (idx - 1 + filtered.length) % filtered.length)}
          onNext={() => setLbIdx(idx => (idx + 1) % filtered.length)}
        />
      )}
    </section>
  );
}
