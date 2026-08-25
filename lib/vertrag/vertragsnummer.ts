/** Format SH-YYYYMMDD-HHMM aus dem Erstellungszeitpunkt — ohne Datenbank ohne
 * fortlaufende Nummerierung, aber eindeutig, sortierbar und lesbar. */
export function generateVertragsnummer(date: Date = new Date()): string {
  const pad = (n: number) => String(n).padStart(2, "0");
  const yyyy = date.getFullYear();
  const mm = pad(date.getMonth() + 1);
  const dd = pad(date.getDate());
  const hh = pad(date.getHours());
  const min = pad(date.getMinutes());
  return `SH-${yyyy}${mm}${dd}-${hh}${min}`;
}
