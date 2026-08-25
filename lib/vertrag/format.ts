import type { Lang } from "./types";

const MONTHS_EN = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

/** Erwartet ISO-Datum (yyyy-mm-dd) aus <input type="date">. */
export function formatDate(iso: string, lang: Lang): string {
  if (!iso) return "";
  const [y, m, d] = iso.split("-");
  if (!y || !m || !d) return iso;
  if (lang === "de") return `${d}.${m}.${y}`;
  return `${Number(d)} ${MONTHS_EN[Number(m) - 1]} ${y}`;
}
