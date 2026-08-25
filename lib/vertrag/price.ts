import { anzahlungAnteil } from "./config";

/** Punkt = Tausendertrenner, Komma = Dezimaltrenner, € und Leerzeichen werden ignoriert. */
export function parseEuroInput(input: string): number {
  const cleaned = input.replace(/€/g, "").replace(/\s/g, "").trim();
  if (cleaned === "") return 0;
  const normalized = cleaned.replace(/\./g, "").replace(",", ".");
  const value = Number.parseFloat(normalized);
  return Number.isFinite(value) ? value : 0;
}

export function formatEuro(value: number): string {
  return new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
  }).format(value);
}

/** Nur die Zahl, deutsches Format, ohne €-Zeichen — für editierbare Felder. */
export function formatEuroPlain(value: number): string {
  return new Intl.NumberFormat("de-DE", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}

export function computeVereinbarterPreis(
  regulaer: number,
  nachlass: number,
): number {
  return Math.max(0, regulaer - nachlass);
}

export function computeAnzahlung(vereinbart: number): number {
  return Math.round(vereinbart * anzahlungAnteil * 100) / 100;
}
