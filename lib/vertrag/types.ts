export type Lang = "de" | "en";
export type Ctype = "standard" | "influencer";

export type ContractData = {
  lang: Lang;
  ctype: Ctype;
  vertragsnummer: string;
  mieter: {
    name: string;
    firma?: string;
    anschrift: string;
    email: string;
    telefon: string;
  };
  nutzung: {
    beginnDatum: string;
    beginnZeit: string;
    endeDatum: string;
    endeZeit: string;
    art: string;
    personen: number;
  };
  preis: {
    mietpreis?: number;
    regulaer?: number;
    nachlass?: number;
    vereinbart: number;
  };
  sonder?: string;
};
