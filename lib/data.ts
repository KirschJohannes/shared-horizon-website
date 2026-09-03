import type { Hotspot, Usage, Fact, GalleryItem, GalCat, FaqItem, EvType, EvOption } from './types';

// Von Hand nachpflegen, wenn Inhalte/Preise sich ändern — dient als
// Aktualitäts-Signal für Suchmaschinen und KI-Systeme (Footer + JsonLd).
export const lastUpdated = '2026-09-03';

export const hotspots: Hotspot[] = [
  { id:'heck',    x:2.2,  y:46.9, n:1, title:'Heckterrasse',            text:'Die Heckterrasse misst 6 × 2,5 m und bietet den Aufgang zur Dachterrasse. Der Übergang zwischen den Ebenen an Bord.',              ideas:'Aufgang Dachterrasse · Außenbereich',   facts:'6 × 2,5 m · Aufgang Dachterrasse',     img:'/images/das_boot/heckterrasse.webp' },
  { id:'kueche',  x:19.6, y:46.2, n:2, title:'Wohn- & Loungebereich',   text:'Der offene Wohn- und Loungebereich — großzügig, hell und mit direktem Blick aufs Wasser. Ideal zum Ankommen, Entspannen und Beisammensein.', ideas:'Lounge · Gespräche · Entspannung',      facts:'Offener Bereich · umlaufendes Glas',    img:'/images/das_boot/lounge.webp' },
  { id:'wohnen',  x:40.4, y:80,   n:3, title:'Essbereich',              text:'Der offene Essbereich mit Blick durchs umlaufende Panoramaglas. Platz für lange Tafeln, Gespräche und gemeinsame Stunden.',          ideas:'Dinner · Workshop · Lounge',            facts:'Wohnen & Essen · ca. 40 m²',            img:'/images/das_boot/essbereich.webp' },
  { id:'kueche2', x:49.5, y:50,   n:4, title:'Vollausgestattete Küche', text:'Die vollausgestattete Küche mit Kücheninsel und direktem Blick aufs Wasser. Kochen, anrichten und gleichzeitig dabei sein.',          ideas:'Show-Cooking · Catering · Frühstück',  facts:'Kücheninsel · Wasserblick',             img:'/images/das_boot/g27.webp' },
  { id:'wc',      x:62.9, y:69.3, n:5, title:'Gäste-WC',                text:'Ein eigenes Gäste-WC, zentral und diskret gelegen — kurze Wege für Ihre Gäste.',                                                       ideas:'Komfort für Gäste',                     facts:'Separater Sanitärbereich',              img:'/images/gaeste-wc.png' },
  { id:'bad',     x:62.9, y:50,   n:6, title:'Bad mit Blick aufs Wasser', text:'Das Bad liegt an der Außenwand — Tageslicht und Seeblick inklusive. Ankommen und durchatmen.',                                      ideas:'Wellness · Auszeit',                    facts:'Bad · direkter Wasserblick',            img:'/images/das_boot/jr2.webp' },
  { id:'rueck',   x:78.5, y:27.8, n:7, title:'Separée & Schlafbereich', text:'Ein abgetrennter, ruhiger Bereich — ideal für Gespräche zu zweit, einen privaten Rückzug oder eine Übernachtung.',                   ideas:'Rückzug · Übernachtung · 1:1-Gespräch', facts:'ca. 17 m² · Separée',                  img:'/images/das_boot/rueck.webp' },
  { id:'steuer',  x:84.6, y:84.4, n:8, title:'Steuerstand',             text:'Der Steuerstand mit direktem Blick aufs Wasser — das Herzstück des Bootes und ein besonderer Platz an Bord.',                          ideas:'Ausblick · Erlebnis · Foto-Moment',     facts:'Steuerstand · Wasserblick',             img:'/images/das_boot/g38.webp' },
  { id:'bug',     x:95.2, y:49,   n:9, title:'Bugterrasse',             text:'Die Bugterrasse misst 6 × 2,5 m, ist überdacht und mit einer Badeleiter ausgestattet. Geschützter Außenplatz mit direktem Wasserzugang.', ideas:'Überdacht · Badeleiter · Wasserzugang', facts:'6 × 2,5 m · überdacht · Badeleiter',  img:'/images/das_boot/bugterrasse.webp' },
];

export const usages: Usage[] = [
  { title:'Business-Offsites',       lead:'Für Teams, die Abstand brauchen', text:'Strategie, Klausur oder Jahresauftakt — fernab vom Büro, mit Tageslicht und Wasserblick statt Meetingraum.', bereiche:'Innenraum · Deck · Lunch an Bord' },
  { title:'Workshops',               lead:'Für konzentriertes Arbeiten',     text:'Ein Raum, der fokussiert. Wenige Reize, viel Licht, klare Flächen für Material und Gedanken.',              bereiche:'Innenraum · Glasfront' },
  { title:'Netzwerkabende',          lead:'Für ausgewählte Kreise',          text:'Mehrere Gesprächszonen, eine ruhige, hochwertige Atmosphäre. Ein Abend, der Verbindung möglich macht.',       bereiche:'Deck · Innenraum · Lounge' },
  { title:'Private Feiern',          lead:'Für die Menschen, die zählen',    text:'Ein kleiner Kreis, gutes Essen, Wasserblick. Kein Standardraum, sondern ein Ort mit Erinnerung.',           bereiche:'Dachterrasse · Lounge' },
  { title:'Dinner auf dem Wasser',   lead:'Für besondere Abende',            text:'Eine Tafel über dem See, der Sonnenuntergang als Gang dazwischen. Essen wird hier zum Anlass.',              bereiche:'Dachterrasse · Küche' },
  { title:'Fotoshootings & Content', lead:'Für Marken und Kreative',         text:'Licht, Glas, Wasser und Architektur. Viele Perspektiven auf engem Raum für hochwertige Inhalte.',           bereiche:'Gesamt · Tageslicht' },
  { title:'Retreats',                lead:'Für ein paar ruhige Tage',        text:'Ankommen, durchatmen, neu sortieren. Das Boot gibt den Rahmen, das Wasser den Takt.',                        bereiche:'Rückzug · Deck · Glasfront' },
  { title:'Romantische Aufenthalte', lead:'Für zwei',                        text:'Abendlicht, Stille und Weite. Ein Ort, der ohne große Geste besonders ist.',                                bereiche:'Deck · Rückzug' },
];

export const facts: Fact[] = [
  { num:'16,5', unit:'Meter', label:'Länge' },
  { num:'6,2',  unit:'Meter', label:'Breite' },
  { num:'170+', unit:'m²',    label:'Gesamtfläche' },
  { num:'70',   unit:'m²',    label:'Sonnendeck' },
];

export const feelings: string[] = [
  'Abschalten, sobald Sie den Hafen verlassen.',
  'Gäste, die für zwei Stunden kamen, bleiben den ganzen Tag.',
  'Die schönsten Sonnenuntergänge der Stadt — weiter Blick übers Wasser.',
  'Schwäne, Enten und Möwen zu Besuch, manchmal sogar ein Biber.',
  'Auch bei Regen: das Prasseln auf dem Wasser, beruhigend und schön.',
];

export const faqs: FaqItem[] = [
  { q:'Was kostet die Miete des Hausboots?', a:'500 € pro Stunde für das gesamte Boot — exklusiv gebucht, nicht geteilt, inklusive Ausstattung und Skipper. In der Gruppe geteilt liegt der Preis pro Person bei voller Kapazität bei rund 20 € pro Stunde. Genaue Details stimmen wir gern auf Ihren Anlass ab.' },
  { q:'Für wie viele Personen ist Shared Horizon geeignet?', a:'Das Boot ist für kleine, hochwertige Runden gedacht. Für Sitz-Settings empfehlen wir bis etwa 12 Personen, für Empfänge mit Stehbereichen bis rund 20 Gäste, und für Veranstaltungen auf der Dachterrasse bis zu 25 Personen. Die genaue Zahl stimmen wir gern auf Ihren Anlass ab.' },
  { q:'Muss ich selbst fahren, oder gibt es einen Skipper?', a:'Ein Skipper ist immer inklusive. Sie müssen selbst nicht fahren und können sich ganz auf Ihren Anlass konzentrieren.' },
  { q:'Wie komme ich zum Hausboot?', a:'Shared Horizon liegt im Yachthafen Schmöckwitz, Weiselpfad 20, 12527 Berlin — rund 30 Minuten vom Berliner Zentrum entfernt. Am Anleger stehen öffentliche Parkplätze zur Verfügung.' },
  { q:'Welche Arten von Events sind möglich?', a:'Business-Offsites, Workshops, Netzwerkabende, private Feiern, Dinner, Fotoshootings und Retreats. Wenn Ihre Idee hier nicht steht, sprechen Sie uns einfach an.' },
  { q:'Gibt es Catering?', a:'An Bord gibt es einen Grill und Pizzaofen. Die Bordküche kann vollumfänglich benutzt werden. Catering kann mitgebracht werden.' },
  { q:'Gibt es Technik?', a:'Stromanschluss, Musikanlage, Beamer und Leinwand sind an Bord vorhanden.' },
  { q:'Kann man das Boot vorab besichtigen?', a:'Ja. Nach einer ersten Abstimmung zeigen wir Ihnen Shared Horizon gerne persönlich - vor Ort oder auch virtuell.' },
  { q:'Was ist bei schlechtem Wetter zu beachten?', a:'Dank umlaufendem Glas und überdachtem Innenraum ist das Boot wetterunabhängig nutzbar. Gerade bei schlechtem Wetter ist es durch seine Naturnähe ein wundervolles Erlebnis — der Innenraum bietet bis zu 20 Personen Platz. Bei Wind und Sturm passen wir Termine im Zweifel gemeinsam an.' },
  { q:'Gibt es Parkmöglichkeiten?', a:'Am Anleger stehen öffentliche Parkmöglichkeiten zur Verfügung.' },
  { q:'Wie flexibel ist das Setup?', a:'Sehr. Tafel, Lounge und Empfangszonen lassen sich neu zusammenstellen. Wir bereiten das Boot für Ihren Anlass vor.' },
  { q:'Sind Übernachtungen möglich?', a:'Für ausgewählte Anlässe und Retreats besprechen wir Übernachtungen individuell.' },
];

export const galCats: GalCat[] = [
  { id:'gesamt',     label:'Gesamtansicht' },
  { id:'boot',       label:'Das Boot' },
  { id:'details',    label:'Details' },
  { id:'stimmung',   label:'Stimmung' },
  { id:'event',      label:'Eventfotos' },
  { id:'kulinar',    label:'Kulinarisches' },
  { id:'sport',      label:'Sport & Wasser' },
  { id:'production', label:'Produktion' },
];

export const gallery: GalleryItem[] = [
  // ─── Kulinarisches ───────────────────────────────────────────────────────────
  { id:'k01', cat:'kulinar', h:380, cap:'Catering an Bord',              alt:'Catering beim Kick-Off Event September 2025, Shared Horizon Berlin',                              src:'/images/Kulinarisches/kick-off_09-25_35.webp' },
  { id:'k02', cat:'kulinar', h:260, cap:'Kulinarisches Highlight',       alt:'Kulinarisches Highlight beim Kick-Off auf der Shared Horizon, Berlin',                            src:'/images/Kulinarisches/kick-off_09-25_45.webp' },
  { id:'k03', cat:'kulinar', h:340, cap:'Köstlichkeiten an Bord',        alt:'Köstlichkeiten beim Kick-Off auf der Shared Horizon Eventlocation, Berlin',                       src:'/images/Kulinarisches/kick-off_09-25_46.webp' },
  { id:'k04', cat:'kulinar', h:260, cap:'Sommerparty-Buffet',            alt:'Kulinarisches Highlight der Kivent Sommerparty, Shared Horizon Eventlocation Berlin',             src:'/images/Kulinarisches/kivent_sommerparty_141_von_154.webp' },
  { id:'k05', cat:'kulinar', h:380, cap:'Feines Catering',               alt:'Catering der Kivent Sommerparty auf der Shared Horizon, Eventlocation am Wasser Berlin',          src:'/images/Kulinarisches/kivent_sommerparty_32_von_154.webp' },
  { id:'k06', cat:'kulinar', h:260, cap:'Speisen an Bord',               alt:'Speisen bei der Kivent Sommerparty auf der Shared Horizon, Eventlocation Berlin',                 src:'/images/Kulinarisches/kivent_sommerparty_33_von_154.webp' },
  { id:'k07', cat:'kulinar', h:300, cap:'Food-Moment',                   alt:'Food-Styling Kivent Sommerparty auf der Shared Horizon Eventlocation, Berlin',                    src:'/images/Kulinarisches/kivent_sommerparty_34_von_154.webp' },
  { id:'k08', cat:'kulinar', h:260, cap:'Genussmoment',                  alt:'Köstlichkeiten der Kivent Sommerparty auf der Shared Horizon, Eventlocation am Wasser Berlin',    src:'/images/Kulinarisches/kivent_sommerparty_35_von_154.webp' },
  { id:'k09', cat:'kulinar', h:380, cap:'Kulinarik an Bord',             alt:'Kulinarik der Kivent Sommerparty an Bord der Shared Horizon, Berlin',                             src:'/images/Kulinarisches/kivent_sommerparty_36_von_154.webp' },
  { id:'k10', cat:'kulinar', h:260, cap:'Catering-Highlight',            alt:'Catering-Highlight Kivent Sommerparty, Shared Horizon Eventlocation Berlin am Wasser',            src:'/images/Kulinarisches/kivent_sommerparty_37_von_154.webp' },
  { id:'k11', cat:'kulinar', h:340, cap:'Genuss auf dem Wasser',         alt:'Kulinarisches Highlight der Shared Horizon Eventlocation Berlin — Tischkultur am Wasser',         src:'/images/Kulinarisches/the_12_highlights_1.webp' },
  { id:'k12', cat:'kulinar', h:260, cap:'Feines Buffet',                 alt:'Feines Catering an Bord der Shared Horizon, Eventlocation am Wasser Berlin',                      src:'/images/Kulinarisches/the_12_highlights_2.webp' },
  { id:'k13', cat:'kulinar', h:300, cap:'Kulinarischer Genuss',          alt:'Genussmomente auf der Shared Horizon, außergewöhnliche Eventlocation am Wasser Berlin',           src:'/images/Kulinarisches/the_12_highlights_3.webp' },
  { id:'k14', cat:'kulinar', h:380, cap:'Tischkultur',                   alt:'Kulinarisches Erlebnis auf der Shared Horizon Eventlocation am Wasser, Berlin-Schmöckwitz',       src:'/images/Kulinarisches/the_12_highlights_49.webp' },

  // ─── Das Boot ─────────────────────────────────────────────────────────────────
  { id:'b01', cat:'boot', h:420, cap:'Badezimmer mit Seeblick',          alt:'Badezimmer an Bord der Shared Horizon mit Seeblick, Eventlocation Berlin-Schmöckwitz',            src:'/images/das_boot/bad.webp' },
  { id:'b02', cat:'boot', h:400, cap:'Bugterrasse',                      alt:'Bugterrasse der Shared Horizon am Wasser, Eventlocation Berlin-Schmöckwitz',                       src:'/images/das_boot/bugterrasse.webp' },
  { id:'b03', cat:'boot', h:260, cap:'Essbereich an Bord',               alt:'Essbereich an Bord der Shared Horizon Eventlocation Berlin, Blick durchs Panoramaglas',           src:'/images/das_boot/essbereich.webp' },
  { id:'b04', cat:'boot', h:260, cap:'Loungebereich',                    alt:'Loungebereich an Bord der Shared Horizon, Eventlocation am Wasser Berlin',                        src:'/images/das_boot/g2.webp' },
  { id:'b05', cat:'boot', h:420, cap:'An Bord',                          alt:'Innenbereich der Shared Horizon Eventlocation, Berlin am Wasser',                                 src:'/images/das_boot/g21.webp' },
  { id:'b06', cat:'boot', h:260, cap:'Offene Wohnküche',                  alt:'Offene Wohnküche mit Kücheninsel und Essbereich an Bord der Shared Horizon, Berlin',           src:'/images/das_boot/g27.webp' },
  { id:'b07', cat:'boot', h:280, cap:'Schlafbereich',                    alt:'Schlafbereich der Shared Horizon Hausboot, Eventlocation Berlin für Retreats',                    src:'/images/das_boot/g29.webp' },
  { id:'b08', cat:'boot', h:260, cap:'Event an Bord',                    alt:'Event an Bord der Shared Horizon Eventlocation am Wasser, Berlin-Schmöckwitz',                    src:'/images/das_boot/g32.webp' },
  { id:'b09', cat:'boot', h:260, cap:'Steuerstand mit Panoramaglas',      alt:'Steuerstand an Bord der Shared Horizon mit Panoramaglas und Blick auf den Yachthafen, Berlin',  src:'/images/das_boot/g38.webp' },
  { id:'b10', cat:'boot', h:280, cap:'Setup an Bord',                    alt:'Event-Setup an Bord der Shared Horizon, Eventlocation für Firmenevents Berlin',                   src:'/images/das_boot/g42.webp' },
  { id:'b11', cat:'boot', h:260, cap:'Firmenevent',                      alt:'Firmenevent auf dem Wasser, Shared Horizon Eventlocation Berlin-Schmöckwitz',                     src:'/images/das_boot/g5.webp' },
  { id:'b12', cat:'boot', h:260, cap:'Moment an Bord',                   alt:'Stimmungsvoller Moment an Bord der Shared Horizon Eventlocation, Berlin',                         src:'/images/das_boot/g7.webp' },
  { id:'b13', cat:'boot', h:400, cap:'Modernes Interieur',               alt:'Modernes Interieur der Shared Horizon, neue Ausstattung an Bord, Eventlocation Berlin',           src:'/images/das_boot/hausboot_neu_09.webp' },
  { id:'b14', cat:'boot', h:400, cap:'Zeitgemäßes Design',               alt:'Zeitgemäßes Design an Bord der Shared Horizon Eventlocation, Berlin am Wasser',                   src:'/images/das_boot/hausboot_neu_10.webp' },
  { id:'b15', cat:'boot', h:400, cap:'Heckterrasse',                     alt:'Heckterrasse der Shared Horizon mit Blick aufs Wasser, Eventlocation Berlin-Schmöckwitz',         src:'/images/das_boot/heckterrasse.webp' },
  { id:'b16', cat:'boot', h:260, cap:'Bad mit Wasserblick',               alt:'Bad mit Dusche, rundem Spiegel und Panoramafenster auf den Yachthafen, Shared Horizon Berlin',  src:'/images/das_boot/jr2.webp' },
  { id:'b17', cat:'boot', h:400, cap:'Außenbereich',                     alt:'Außenbereich der Shared Horizon Eventlocation am Wasser, Berlin-Schmöckwitz',                     src:'/images/das_boot/jr9.webp' },
  { id:'b18', cat:'boot', h:260, cap:'Lounge mit Panoramaglas',          alt:'Loungebereich mit Panoramaglas, Shared Horizon Eventlocation Berlin am Wasser',                   src:'/images/das_boot/lounge.webp' },
  { id:'b19', cat:'boot', h:280, cap:'Privater Rückzug',                 alt:'Privater Rückzugsbereich an Bord der Shared Horizon, Hausboot Eventlocation Berlin',              src:'/images/das_boot/rueck.webp' },

  // ─── Produktion ───────────────────────────────────────────────────────────────
  { id:'p01', cat:'production', h:400, cap:'Event-Produktion',            alt:'Event-Produktion an Bord der Shared Horizon Eventlocation, Berlin am Wasser',                    src:'/images/Production/g50.webp' },
  { id:'p02', cat:'production', h:320, cap:'Produktion an Bord',          alt:'Produktionsfoto der Shared Horizon Eventlocation, Berlin-Schmöckwitz',                           src:'/images/Production/g52.webp' },
  { id:'p03', cat:'production', h:280, cap:'Setup & Produktion',          alt:'Setup und Produktionsfoto der Shared Horizon, außergewöhnliche Eventlocation Berlin',             src:'/images/Production/g53.webp' },
  { id:'p04', cat:'production', h:380, cap:'Fotoproduktion',              alt:'Shared Horizon Fotoproduktion — Produktionsbild der Eventlocation Berlin am Wasser',             src:'/images/Production/hausboot_set_4_07.webp' },
  { id:'p05', cat:'production', h:400, cap:'Steuerstand & Produktion',    alt:'Steuerstand und Produktion an Bord der Shared Horizon, Eventlocation Berlin',                    src:'/images/Production/produktion1.webp' },
  { id:'p06', cat:'production', h:300, cap:'Produktion am Wasser',        alt:'Eventproduktion an Bord der Shared Horizon Eventlocation am Wasser, Berlin',                     src:'/images/Production/produktion2.webp' },

  // ─── Details ──────────────────────────────────────────────────────────────────
  { id:'d01', cat:'details', h:380, cap:'Details an Bord',               alt:'Hochwertige Details an Bord der Shared Horizon Eventlocation, Berlin am Wasser',                  src:'/images/Details/g11.webp' },
  { id:'d02', cat:'details', h:260, cap:'Ausstattungsdetail',            alt:'Ausstattungsdetail der Shared Horizon Eventlocation, Berlin-Schmöckwitz am Wasser',               src:'/images/Details/g19.webp' },
  { id:'d03', cat:'details', h:340, cap:'Einrichtungsdetail',            alt:'Einrichtungsdetail an Bord der Shared Horizon Eventlocation, Berlin',                             src:'/images/Details/g33.webp' },
  { id:'d04', cat:'details', h:260, cap:'Designdetail',                  alt:'Designdetail der Shared Horizon Eventlocation, Hausboot Berlin am Wasser',                        src:'/images/Details/g36.webp' },
  { id:'d05', cat:'details', h:380, cap:'Interieur im Detail',           alt:'Interieur-Detail an Bord der Shared Horizon Hausboot Eventlocation, Berlin',                      src:'/images/Details/g37.webp' },
  { id:'d06', cat:'details', h:260, cap:'Material & Oberfläche',         alt:'Materialmix und Detailansicht der Shared Horizon Eventlocation Berlin am Wasser',                 src:'/images/Details/g39.webp' },
  { id:'d07', cat:'details', h:320, cap:'Licht & Ambiente',              alt:'Stimmungsvolles Ambiente im Detail, Shared Horizon Eventlocation Berlin',                         src:'/images/Details/g40.webp' },
  { id:'d08', cat:'details', h:260, cap:'Premium-Ausstattung',           alt:'Premium-Ausstattung der Shared Horizon Eventlocation, Berlin-Schmöckwitz am Wasser',              src:'/images/Details/g45.webp' },
  { id:'d09', cat:'details', h:340, cap:'Einrichtung im Detail',         alt:'Hochwertige Einrichtung der Shared Horizon Hausboot Eventlocation, Berlin',                       src:'/images/Details/g46.webp' },
  { id:'d10', cat:'details', h:400, cap:'Tisch auf der Dachterrasse',    alt:'Tisch auf der Dachterrasse, Shared Horizon Eventlocation Berlin am Wasser',                       src:'/images/Details/tisch_dachterrasse.webp' },

  // ─── Sport & Wasser ───────────────────────────────────────────────────────────
  { id:'s01', cat:'sport', h:400, cap:'Wassersport',                     alt:'Wassersport an der Shared Horizon Eventlocation, Berlin-Schmöckwitz am Wasser',                   src:'/images/sport_und_wasser/g13.webp' },
  { id:'s02', cat:'sport', h:300, cap:'Sport am Wasser',                 alt:'Sport und Wasser bei der Shared Horizon Eventlocation, Berlin am See',                            src:'/images/sport_und_wasser/g15.webp' },
  { id:'s03', cat:'sport', h:400, cap:'Aktiv am See',                    alt:'Wassersport-Aktivitäten an der Shared Horizon Eventlocation, Berlin-Schmöckwitz',                 src:'/images/sport_und_wasser/g48.webp' },
  { id:'s04', cat:'sport', h:280, cap:'Kanufahren',                      alt:'Kanufahren an der Shared Horizon Eventlocation, aktives Rahmenprogramm Berlin',                   src:'/images/sport_und_wasser/g49.webp' },
  { id:'s05', cat:'sport', h:380, cap:'Outdoor am Wasser',               alt:'Outdoor-Aktivitäten am Wasser der Shared Horizon Eventlocation, Berlin am See',                   src:'/images/sport_und_wasser/g51.webp' },
  { id:'s06', cat:'sport', h:260, cap:'Wassersport Kick-Off',            alt:'Wassersport beim Kick-Off Event auf der Shared Horizon Eventlocation, Berlin',                    src:'/images/sport_und_wasser/kick-off_09-25_60.webp' },
  { id:'s07', cat:'sport', h:320, cap:'Outdoor-Aktivität',               alt:'Outdoor-Aktivität am Wasser beim Kick-Off auf der Shared Horizon, Berlin',                        src:'/images/sport_und_wasser/kick-off_09-25_81.webp' },

  // ─── Eventfotos ───────────────────────────────────────────────────────────────
  { id:'e01', cat:'event', h:380, cap:'Kick-Off September 2025',         alt:'Kick-Off Event September 2025 an Bord der Shared Horizon Eventlocation, Berlin',                  src:'/images/Eventfotos/kick-off_09-25_40.webp' },
  { id:'e02', cat:'event', h:260, cap:'Event an Bord',                   alt:'Veranstaltung an Bord der Shared Horizon Eventlocation Berlin am Wasser',                         src:'/images/Eventfotos/kick-off_09-25_90.webp' },
  { id:'e03', cat:'event', h:340, cap:'Event Highlight',                 alt:'Event Highlight an Bord der Shared Horizon Eventlocation, Berlin-Schmöckwitz',                    src:'/images/Eventfotos/the_12_highlights_18.webp' },
  { id:'e04', cat:'event', h:260, cap:'Moment auf der Shared Horizon',   alt:'Event-Moment der Shared Horizon Eventlocation, Firmenevent am Wasser Berlin',                     src:'/images/Eventfotos/the_12_highlights_58.webp' },
  { id:'e05', cat:'event', h:400, cap:'Highlight am Wasser',             alt:'Eventfoto der Shared Horizon Eventlocation am Wasser, Berlin-Schmöckwitz',                        src:'/images/Eventfotos/the_12_highlights_66.webp' },
  { id:'e06', cat:'event', h:280, cap:'Abendveranstaltung',              alt:'Abendveranstaltung auf der Shared Horizon Eventlocation, Berlin am Wasser',                       src:'/images/Eventfotos/the_12_highlights_73.webp' },
  { id:'e07', cat:'event', h:360, cap:'Eventfoto',                       alt:'Eventfoto der Shared Horizon Eventlocation am Wasser, exklusive Location Berlin',                 src:'/images/Eventfotos/the_12_highlights_89.webp' },
  { id:'e08', cat:'event', h:260, cap:'Stimmungsvoller Moment',          alt:'Stimmungsvoller Moment auf der Shared Horizon Eventlocation Berlin am Wasser',                    src:'/images/Eventfotos/the_12_highlights_92.webp' },
  { id:'e09', cat:'event', h:380, cap:'Firmenevent Highlight',           alt:'Firmenevent Highlight der Shared Horizon Eventlocation, Berlin-Schmöckwitz',                      src:'/images/Eventfotos/the_12_highlights_93.webp' },

  // ─── Stimmung ─────────────────────────────────────────────────────────────────
  { id:'st01', cat:'stimmung', h:400, cap:'Abendlicht',                  alt:'Stimmungsvolles Abendlicht auf der Shared Horizon Eventlocation, Berlin-Schmöckwitz',              src:'/images/Stimmung/g12.webp' },
  { id:'st02', cat:'stimmung', h:300, cap:'Atmosphäre am Abend',         alt:'Atmosphärisches Bild der Shared Horizon Eventlocation am Abend, Berlin am Wasser',                src:'/images/Stimmung/g28.webp' },
  { id:'st03', cat:'stimmung', h:400, cap:'Hausboot am Abend',           alt:'Shared Horizon Hausboot am Abend, Stimmungsbild der Eventlocation Berlin-Schmöckwitz',            src:'/images/Stimmung/hausboot_01.webp' },
  { id:'st04', cat:'stimmung', h:280, cap:'Atmosphäre an Bord',          alt:'Atmosphäre an Bord der Shared Horizon Eventlocation am Wasser, Berlin',                           src:'/images/Stimmung/hausboot_06.webp' },
  { id:'st05', cat:'stimmung', h:400, cap:'Stimmungsbild',               alt:'Stimmungsvolles Bild der Shared Horizon Hausboot Eventlocation, Berlin-Schmöckwitz',              src:'/images/Stimmung/hausboot_07.webp' },
  { id:'st06', cat:'stimmung', h:320, cap:'Abendstimmung',               alt:'Abendstimmung auf der Shared Horizon Eventlocation am Wasser, Berlin',                            src:'/images/Stimmung/hausboot_08.webp' },
  { id:'st07', cat:'stimmung', h:400, cap:'Atmosphärischer Blick',       alt:'Atmosphärischer Blick auf die Shared Horizon Eventlocation, Berlin am Wasser',                    src:'/images/Stimmung/hausboot_09.webp' },
  { id:'st08', cat:'stimmung', h:300, cap:'Am Wasser',                   alt:'Stimmungsbild der Shared Horizon Eventlocation am Wasser, Berlin-Schmöckwitz',                    src:'/images/Stimmung/hausboot_10.webp' },
  { id:'st09', cat:'stimmung', h:400, cap:'Sonnenuntergang',             alt:'Shared Horizon Hausboot bei Sonnenuntergang, Eventlocation Berlin am Wasser',                     src:'/images/Stimmung/hausboot_neu_06.webp' },
  { id:'st10', cat:'stimmung', h:280, cap:'Abendlicht am See',           alt:'Shared Horizon Eventlocation bei Abendlicht am See, Berlin-Schmöckwitz',                          src:'/images/Stimmung/hausboot_set_3_08.webp' },
  { id:'st11', cat:'stimmung', h:400, cap:'Stimmungsfotos',              alt:'Stimmungsvolles Foto der Shared Horizon Eventlocation, Berlin am Wasser',                         src:'/images/Stimmung/hausboot_set_4_03.webp' },
  { id:'st12', cat:'stimmung', h:320, cap:'Atmosphäre bei Sonnenuntergang', alt:'Atmosphäre auf der Shared Horizon Eventlocation bei Sonnenuntergang, Berlin',                  src:'/images/Stimmung/hausboot_set_4_04.webp' },
  { id:'st13', cat:'stimmung', h:260, cap:'Stimmungsmoment',             alt:'Stimmungsmoment an Bord der Shared Horizon Eventlocation, Berlin am Wasser',                      src:'/images/Stimmung/the_12_highlights_94.webp' },

  // ─── Gesamtansicht ────────────────────────────────────────────────────────────
  { id:'ga01', cat:'gesamt', h:280, cap:'Gesamtansicht',                 alt:'Gesamtansicht der Shared Horizon Eventlocation, Hausboot am Wasser Berlin-Schmöckwitz',            src:'/images/Gesamtansicht/g14.webp' },
  { id:'ga02', cat:'gesamt', h:240, cap:'Hausboot bei Nacht',            alt:'Shared Horizon Hausboot von außen, Eventlocation in Berlin-Schmöckwitz am Wasser',                src:'/images/Gesamtansicht/g6.webp' },
  { id:'ga03', cat:'gesamt', h:400, cap:'Neues Hausboot',                alt:'Neues Hausboot Shared Horizon — Außenansicht der Eventlocation Berlin-Schmöckwitz',               src:'/images/Gesamtansicht/hausboot_neu_08.webp' },
  { id:'ga04', cat:'gesamt', h:320, cap:'Vom Wasser aus',                alt:'Shared Horizon Hausboot vom Wasser aus gesehen, Eventlocation Berlin-Schmöckwitz',                src:'/images/Gesamtansicht/hausboot_set_3_05.webp' },
  { id:'ga05', cat:'gesamt', h:400, cap:'Außenansicht',                  alt:'Außenansicht der Shared Horizon Eventlocation am Wasser, Berlin-Schmöckwitz',                     src:'/images/Gesamtansicht/hausboot_set_3_06.webp' },
  { id:'ga06', cat:'gesamt', h:360, cap:'Yachthafen Schmöckwitz',        alt:'Shared Horizon am Yachthafen Berlin-Schmöckwitz, Eventlocation vom Wasser aus gesehen',           src:'/images/Gesamtansicht/hausboot_set_3_07.webp' },
];

export const evTypes: EvType[] = [
  { id:'offsite',  label:'Offsite' },
  { id:'feier',    label:'Feier' },
  { id:'netzwerk', label:'Netzwerk' },
  { id:'dinner',   label:'Dinner' },
  { id:'foto',     label:'Content Day' },
];

export const evMap: Record<string, EvOption> = {
  offsite:  { title:'Business-Offsite', zones:['Innenraum','Deck vorne','Glasfront'], note:'Arbeitstisch innen, Pausen an Deck, Lunch an Bord.' },
  feier:    { title:'Private Feier',    zones:['Dachterrasse','Lounge'],              note:'Tafel oder Lounge oben, Sonnenuntergang inklusive.' },
  netzwerk: { title:'Netzwerkabend',    zones:['Innenraum','Dachterrasse','Deck'],    note:'Mehrere Gesprächszonen, Flying Buffet, offenes Deck.' },
  dinner:   { title:'Dinner',           zones:['Dachterrasse','Küche'],               note:'Lange Tafel über dem Wasser, Küche an Bord.' },
  foto:     { title:'Content Day',      zones:['Glasfront','Dachterrasse','Details'], note:'Wechselndes Tageslicht, Innen und Außen.' },
};
