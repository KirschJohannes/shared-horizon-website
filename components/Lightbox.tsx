'use client';
import { useEffect } from 'react';
import Image from 'next/image';

interface Props {
  src: string;
  cap: string;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function Lightbox({ src, cap, onClose, onPrev, onNext }: Props) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', handler);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handler);
      document.body.style.overflow = '';
    };
  }, [onClose, onPrev, onNext]);

  return (
    <div
      onClick={onClose}
      style={{ position:'fixed', inset:0, zIndex:130, background:'rgba(15,26,28,.94)', backdropFilter:'blur(6px)', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', padding:'clamp(20px,5vw,72px)', animation:'shFade .3s ease' }}
    >
      <button onClick={onClose} aria-label="Schließen" style={{ position:'absolute', top:24, right:28, background:'none', border:'none', color:'#F3EFE7', fontSize:32, lineHeight:1, cursor:'pointer', fontWeight:200 }}>×</button>
      <button onClick={e => { e.stopPropagation(); onPrev(); }} aria-label="Zurück" style={{ position:'absolute', left:'clamp(12px,3vw,40px)', top:'50%', transform:'translateY(-50%)', background:'rgba(243,239,231,.08)', border:'1px solid rgba(189,154,100,.4)', color:'#F3EFE7', width:48, height:48, borderRadius:'50%', cursor:'pointer', fontSize:20 }}>‹</button>
      <button onClick={e => { e.stopPropagation(); onNext(); }} aria-label="Weiter" style={{ position:'absolute', right:'clamp(12px,3vw,40px)', top:'50%', transform:'translateY(-50%)', background:'rgba(243,239,231,.08)', border:'1px solid rgba(189,154,100,.4)', color:'#F3EFE7', width:48, height:48, borderRadius:'50%', cursor:'pointer', fontSize:20 }}>›</button>
      <div onClick={e => e.stopPropagation()} style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:18, maxWidth:'100%' }}>
        <div style={{ position:'relative', width:'min(88vw,1080px)', height:'min(72vh,700px)' }}>
          <Image src={src} alt={cap} fill style={{ objectFit:'contain', borderRadius:2 }} />
        </div>
        <span style={{ fontFamily:"'Cormorant',serif", fontWeight:500, fontSize:'clamp(18px,2vw,26px)', color:'#F3EFE7', letterSpacing:'.01em' }}>{cap}</span>
      </div>
    </div>
  );
}
