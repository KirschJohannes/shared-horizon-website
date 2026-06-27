export interface Hotspot {
  id: string;
  x: number;
  y: number;
  n: number;
  title: string;
  text: string;
  ideas: string;
  facts: string;
  img: string;
}

export interface Usage {
  title: string;
  lead: string;
  text: string;
  bereiche: string;
}

export interface Fact {
  num: string;
  unit: string;
  label: string;
}

export interface GalleryItem {
  id: string;
  cat: string;
  h: number;
  cap: string;
  src: string;
  alt?: string;
}

export interface GalCat {
  id: string;
  label: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface EvType {
  id: string;
  label: string;
}

export interface EvOption {
  title: string;
  zones: string[];
  note: string;
}
