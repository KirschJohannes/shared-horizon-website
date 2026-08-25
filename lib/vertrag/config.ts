export const vermieterin = {
  firma: "Kivent GmbH",
  vertreten: "Johannes Kirsch",
  anschrift: "Josef-Orlopp-Straße 56, 10365 Berlin",
  email: "anfrage@shared-horizon.de",
  telefon: "+49 178 2745859",
};

export const hausboot = "Shared Horizon";
export const liegeplatz = "Weiselpfad 20, 12527 Berlin";
export const maxUebernachtungsgaeste = 5;

export const nutzungsartOptionen = [
  "Firmenfeier",
  "Geburtstag",
  "Content-Produktion",
  "Fotoshooting",
  "Filmdreh",
  "Workshop / Meeting",
  "Privatfeier",
];

// Bei diesen Nutzungsarten erscheint das optionale Firmenfeld (Rechnungsempfängerin).
export const firmenfeldNutzungsarten = ["Firmenfeier", "Filmdreh", "Workshop / Meeting"];

export const anzahlungAnteil = 0.5;
export const kaution = 500;

export const influencerGewichtung = {
  vor: 0.25,
  waehrend: 0.35,
  nach: 0.4,
};

// Bankdaten laut Briefing "werden nachgereicht" — bewusst als Platzhalter, kein
// Secret, daher als Konstante statt Env-Var. Vor Livegang befüllen.
export const zahlungswege = {
  bank: {
    institut: "HypoVereinsbank",
    iban: "", // TODO: IBAN nachtragen
    kontoinhaber: vermieterin.firma,
  },
  paypal: {
    empfaenger: "", // TODO: PayPal-Adresse/-Handle nachtragen
  },
  bar: "Bei der Übergabe am Boot, gegen Quittung.",
};

export const mailFrom = "anfrage@shared-horizon.de";
export const mailTo = "anfrage@shared-horizon.de";
