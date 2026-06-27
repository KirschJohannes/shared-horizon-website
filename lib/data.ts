import type { Hotspot, Usage, Fact, GalleryItem, GalCat, FaqItem, EvType, EvOption } from './types';

export const hotspots: Hotspot[] = [
  { id:'heck',    x:2.2,  y:46.9, n:1, title:'Heckterrasse',            text:'Die Heckterrasse misst 6 × 2,5 m und bietet den Aufgang zur Dachterrasse. Der Übergang zwischen den Ebenen an Bord.',              ideas:'Aufgang Dachterrasse · Außenbereich',   facts:'6 × 2,5 m · Aufgang Dachterrasse',     img:'/images/drive/heck.jpg' },
  { id:'kueche',  x:19.6, y:46.2, n:2, title:'Wohn- & Loungebereich',   text:'Der offene Wohn- und Loungebereich — großzügig, hell und mit direktem Blick aufs Wasser. Ideal zum Ankommen, Entspannen und Beisammensein.', ideas:'Lounge · Gespräche · Entspannung',      facts:'Offener Bereich · umlaufendes Glas',    img:'/images/drive/lounge.jpg' },
  { id:'wohnen',  x:40.4, y:80,   n:3, title:'Essbereich',              text:'Der offene Essbereich mit Blick durchs umlaufende Panoramaglas. Platz für lange Tafeln, Gespräche und gemeinsame Stunden.',          ideas:'Dinner · Workshop · Lounge',            facts:'Wohnen & Essen · ca. 40 m²',            img:'/images/drive/essbereich.jpg' },
  { id:'kueche2', x:49.5, y:50,   n:4, title:'Vollausgestattete Küche', text:'Die vollausgestattete Küche mit Kücheninsel und direktem Blick aufs Wasser. Kochen, anrichten und gleichzeitig dabei sein.',          ideas:'Show-Cooking · Catering · Frühstück',  facts:'Kücheninsel · Wasserblick',             img:'/images/drive/kueche.jpg' },
  { id:'wc',      x:62.9, y:69.3, n:5, title:'Gäste-WC',                text:'Ein eigenes Gäste-WC, zentral und diskret gelegen — kurze Wege für Ihre Gäste.',                                                       ideas:'Komfort für Gäste',                     facts:'Separater Sanitärbereich',              img:'/images/gaeste-wc.png' },
  { id:'bad',     x:62.9, y:50,   n:6, title:'Bad mit Blick aufs Wasser', text:'Das Bad liegt an der Außenwand — Tageslicht und Seeblick inklusive. Ankommen und durchatmen.',                                      ideas:'Wellness · Auszeit',                    facts:'Bad · direkter Wasserblick',            img:'/images/drive/bad.jpg' },
  { id:'rueck',   x:78.5, y:27.8, n:7, title:'Separée & Schlafbereich', text:'Ein abgetrennter, ruhiger Bereich — ideal für Gespräche zu zweit, einen privaten Rückzug oder eine Übernachtung.',                   ideas:'Rückzug · Übernachtung · 1:1-Gespräch', facts:'ca. 17 m² · Separée',                  img:'/images/drive/rueck.jpg' },
  { id:'steuer',  x:84.6, y:84.4, n:8, title:'Steuerstand',             text:'Der Steuerstand mit direktem Blick aufs Wasser — das Herzstück des Bootes und ein besonderer Platz an Bord.',                          ideas:'Ausblick · Erlebnis · Foto-Moment',     facts:'Steuerstand · Wasserblick',             img:'/images/drive/steuer.jpg' },
  { id:'bug',     x:95.2, y:49,   n:9, title:'Bugterrasse',             text:'Die Bugterrasse misst 6 × 2,5 m, ist überdacht und mit einer Badeleiter ausgestattet. Geschützter Außenplatz mit direktem Wasserzugang.', ideas:'Überdacht · Badeleiter · Wasserzugang', facts:'6 × 2,5 m · überdacht · Badeleiter',  img:'/images/drive/bug.jpg' },
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
  { num:'70',   unit:'m²',    label:'Innenfläche' },
  { num:'20',   unit:'m²',    label:'Solarfläche' },
  { num:'~20',  unit:'Gäste', label:'Empfohlen' },
];

export const features: string[] = [
  'Umlaufendes Panorama-Glas', 'WPC-Decking', 'Dachterrasse',
  'Helle, offene Architektur', 'Direkte Wasserlage', 'Flexible Nutzung',
];

export const feelings: string[] = [
  'Licht von allen Seiten.', 'Wasser direkt vor Ihnen.', 'Abstand vom Alltag.',
  'Gespräche, die länger bleiben.', 'Sonnenuntergang auf dem Deck.', 'Ein Raum, der ruhiger macht.',
];

export const faqs: FaqItem[] = [
  { q:'Für wie viele Personen ist Shared Horizon geeignet?', a:'Das Boot ist für kleine, hochwertige Runden gedacht. Für Sitz-Settings empfehlen wir bis etwa 12 Personen, für Empfänge mit Stehbereichen bis rund 20 Gäste, und für Veranstaltungen auf der Dachterrasse bis zu 25 Personen. Die genaue Zahl stimmen wir gern auf Ihren Anlass ab.' },
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
  { id:'alle',     label:'Alle' },
  { id:'gesamt',   label:'Gesamtansicht' },
  { id:'innen',    label:'Erlebnisse an Bord' },
  { id:'stimmung', label:'Stimmung' },
  { id:'aussen',   label:'Eventfotos' },
  { id:'deck',     label:'Sport & Wasser' },
  { id:'details',  label:'Details' },
  { id:'event',    label:'Event-Setups' },
];

export const gallery: GalleryItem[] = [
  { id:'g1',  cat:'gesamt',   h:440, cap:'Shared Horizon bei Sonnenuntergang', alt:'Shared Horizon Hausboot Eventlocation bei Sonnenuntergang, Yachthafen Schmöckwitz Berlin',              src:'/images/hero-wide.jpg' },
  { id:'g13', cat:'gesamt',   h:320, cap:'Luftaufnahme von oben',              alt:'Luftaufnahme Hausboot Eventlocation Shared Horizon, Berlin Schmöckwitz von oben',                       src:'/images/drive/g13.jpg' },
  { id:'g14', cat:'gesamt',   h:380, cap:'Seitenansicht aus der Luft',         alt:'Seitenansicht Hausboot Shared Horizon aus der Luft, außergewöhnliche Eventlocation Berlin',             src:'/images/drive/g14.jpg' },
  { id:'g15', cat:'gesamt',   h:300, cap:'Am Wasser',                          alt:'Shared Horizon Hausboot am Wasser, Eventlocation Berlin Köpenick',                                      src:'/images/drive/g15.jpg' },
  { id:'g16', cat:'gesamt',   h:360, cap:'Luftbild Yachthafen',                alt:'Luftbild Yachthafen Schmöckwitz Berlin mit Hausboot Eventlocation Shared Horizon',                      src:'/images/drive/g16.jpg' },
  { id:'g17', cat:'gesamt',   h:420, cap:'Luftaufnahme Gesamtansicht',         alt:'Gesamtansicht Shared Horizon Hausboot Eventlocation am Wasser, Berlin Schmöckwitz',                    src:'/images/drive/g17.jpg' },
  { id:'g2',  cat:'innen',    h:300, cap:'An Bord',                            alt:'Innenraum Shared Horizon Eventlocation Berlin — heller Loungebereich mit Panoramaglas und Wasserblick', src:'/images/drive/g2.jpg' },
  { id:'g7',  cat:'innen',    h:340, cap:'Moment an Bord',                     alt:'Moment an Bord der Hausboot Eventlocation Shared Horizon, Berlin am Wasser',                           src:'/images/drive/g7.jpg' },
  { id:'g18', cat:'innen',    h:400, cap:'Ankommen an Bord',                   alt:'Ankommen an Bord — Hausboot Eventlocation für Business-Offsites und Firmenevents Berlin',              src:'/images/drive/g18.jpg' },
  { id:'g19', cat:'innen',    h:280, cap:'Gemeinsam an Bord',                  alt:'Gäste gemeinsam an Bord der Eventlocation Shared Horizon am Wasser Berlin',                           src:'/images/drive/g19.jpg' },
  { id:'g20', cat:'innen',    h:360, cap:'Ausblick an Bord',                   alt:'Panoramaausblick auf den See vom Innenraum der Eventlocation Shared Horizon Berlin',                   src:'/images/drive/g20.jpg' },
  { id:'g21', cat:'innen',    h:320, cap:'Erlebnis an Bord',                   alt:'Erlebnis an Bord Hausboot Eventlocation Shared Horizon, Berlin Schmöckwitz',                           src:'/images/drive/g21.jpg' },
  { id:'g6',  cat:'stimmung', h:300, cap:'Hausboot bei Nacht',                 alt:'Shared Horizon Hausboot Eventlocation bei Nacht, außergewöhnliche Location am Wasser Berlin',          src:'/images/drive/g6.jpg' },
  { id:'g12', cat:'stimmung', h:380, cap:'Abendstimmung an Bord',              alt:'Abendstimmung an Bord der Eventlocation Shared Horizon, Berlin Schmöckwitz',                           src:'/images/drive/g12.jpg' },
  { id:'g35', cat:'stimmung', h:340, cap:'Goldene Stunde',                     alt:'Goldene Stunde am Hausboot Eventlocation Shared Horizon, Berlin am Wasser',                            src:'/images/drive/g35.jpg' },
  { id:'g36', cat:'stimmung', h:300, cap:'Stimmung am Wasser',                 alt:'Stimmungsvolle Eventlocation am Wasser, Shared Horizon Berlin Schmöckwitz',                           src:'/images/drive/g36.jpg' },
  { id:'g37', cat:'stimmung', h:420, cap:'Sonnenuntergang am See',             alt:'Sonnenuntergang am See bei der Hausboot Eventlocation Shared Horizon Berlin',                          src:'/images/drive/g37.jpg' },
  { id:'g38', cat:'stimmung', h:280, cap:'Licht & Wasser',                     alt:'Licht und Wasser an Bord Shared Horizon, exklusive Eventlocation Berlin',                             src:'/images/drive/g38.jpg' },
  { id:'g47', cat:'stimmung', h:360, cap:'Atmosphäre an Bord',                 alt:'Atmosphäre an Bord der außergewöhnlichen Eventlocation am Wasser Berlin',                             src:'/images/drive/g47.jpg' },
  { id:'g48', cat:'stimmung', h:300, cap:'Ruhe am See',                        alt:'Ruhe am See — Shared Horizon Hausboot Eventlocation Schmöckwitz Berlin',                               src:'/images/drive/g48.jpg' },
  { id:'g49', cat:'stimmung', h:420, cap:'Stimmungsbild',                      alt:'Stimmungsbild Shared Horizon Eventlocation, Yachthafen Berlin Schmöckwitz',                            src:'/images/drive/g49.jpg' },
  { id:'g50', cat:'stimmung', h:320, cap:'Am Wasser',                          alt:'Abendstimmung am Wasser, Hausboot Eventlocation Shared Horizon Berlin',                                src:'/images/drive/g50.jpg' },
  { id:'g51', cat:'stimmung', h:380, cap:'Abends an Bord',                     alt:'Abends an Bord der Eventlocation Shared Horizon am Wasser, Berlin',                                   src:'/images/drive/g51.jpg' },
  { id:'g52', cat:'stimmung', h:300, cap:'Naturnah',                           alt:'Naturnah gelegene Eventlocation am Wasser, Shared Horizon Berlin-Köpenick',                            src:'/images/drive/g52.jpg' },
  { id:'g53', cat:'stimmung', h:340, cap:'Stille am See',                      alt:'Stille am See bei der Hausboot Eventlocation Shared Horizon, Berlin Schmöckwitz',                     src:'/images/drive/g53.jpg' },
  { id:'g54', cat:'stimmung', h:400, cap:'Horizont',                           alt:'Horizont über dem Berliner See — Shared Horizon außergewöhnliche Eventlocation',                       src:'/images/drive/g54.jpg' },
  { id:'g5',  cat:'aussen',   h:380, cap:'Event an Bord',                      alt:'Firmenevent an Bord Shared Horizon, Eventlocation am Wasser Berlin',                                  src:'/images/drive/g5.jpg' },
  { id:'g30', cat:'aussen',   h:300, cap:'Gäste an Bord',                      alt:'Gäste an Bord der Eventlocation Shared Horizon Berlin Schmöckwitz',                                   src:'/images/drive/g30.jpg' },
  { id:'g31', cat:'aussen',   h:360, cap:'Sommerparty',                        alt:'Sommerparty auf dem Hausboot — Eventlocation am Wasser Berlin, Sommerfest Location',                  src:'/images/drive/g31.jpg' },
  { id:'g32', cat:'aussen',   h:420, cap:'Feier am Wasser',                    alt:'Private Feier am Wasser auf dem Hausboot Shared Horizon, Eventlocation Berlin',                       src:'/images/drive/g32.jpg' },
  { id:'g33', cat:'aussen',   h:280, cap:'Abend an Bord',                      alt:'Abend-Event an Bord der exklusiven Hausboot Eventlocation Berlin am Wasser',                          src:'/images/drive/g33.jpg' },
  { id:'g34', cat:'aussen',   h:340, cap:'Gemeinsam feiern',                   alt:'Gemeinsam feiern auf dem Hausboot Shared Horizon, Eventlocation am Wasser Berlin',                    src:'/images/drive/g34.jpg' },
  { id:'g43', cat:'aussen',   h:300, cap:'Event',                              alt:'Event an Bord Shared Horizon Hausboot, Eventlocation Berlin Schmöckwitz',                              src:'/images/drive/g43.jpg' },
  { id:'g44', cat:'aussen',   h:400, cap:'Sommerparty',                        alt:'Sommerfest auf der Eventlocation am Wasser Berlin, Hausboot Shared Horizon',                          src:'/images/drive/g44.jpg' },
  { id:'g45', cat:'aussen',   h:320, cap:'Gäste',                              alt:'Gäste beim Event auf dem Hausboot Shared Horizon, außergewöhnliche Eventlocation Berlin',             src:'/images/drive/g45.jpg' },
  { id:'g46', cat:'aussen',   h:360, cap:'An Bord feiern',                     alt:'Feiern an Bord der Eventlocation Shared Horizon, Hochzeitslocation am Wasser Berlin',                src:'/images/drive/g46.jpg' },
  { id:'g3',  cat:'deck',     h:360, cap:'Sonnendeck',                         alt:'Sonnendeck Shared Horizon, Eventlocation mit Dachterrasse über dem See Berlin',                       src:'/images/drive/g3.jpg' },
  { id:'g9',  cat:'deck',     h:420, cap:'Terrasse am Wasser',                 alt:'Terrasse am Wasser — Eventlocation Shared Horizon, Hausboot mieten Berlin Event',                    src:'/images/drive/g9.jpg' },
  { id:'g22', cat:'deck',     h:300, cap:'Deck & See',                         alt:'Deck mit direktem Seeblick auf dem Hausboot Eventlocation Shared Horizon Berlin',                      src:'/images/drive/g22.jpg' },
  { id:'g23', cat:'deck',     h:340, cap:'Terrasse',                           alt:'Außenterrasse Shared Horizon, Eventlocation am Wasser Berlin Schmöckwitz',                             src:'/images/drive/g23.jpg' },
  { id:'g24', cat:'deck',     h:280, cap:'Am Wasser',                          alt:'Wasserblick von der Terrasse der Hausboot Eventlocation Shared Horizon Berlin',                        src:'/images/drive/g24.jpg' },
  { id:'g25', cat:'deck',     h:380, cap:'Außenbereich',                       alt:'Außenbereich Shared Horizon Eventlocation am Wasser, Hausboot mieten Berlin',                         src:'/images/drive/g25.jpg' },
  { id:'g4',  cat:'details',  h:260, cap:'Details an Bord',                    alt:'Hochwertige Details an Bord der Eventlocation Shared Horizon, Berlin am Wasser',                      src:'/images/drive/g4.jpg' },
  { id:'g10', cat:'details',  h:280, cap:'Ausstattung',                        alt:'Exklusive Ausstattung der Eventlocation Shared Horizon am Wasser Berlin',                             src:'/images/drive/g10.jpg' },
  { id:'g26', cat:'details',  h:340, cap:'Material & Licht',                   alt:'Material und Licht an Bord der außergewöhnlichen Eventlocation am Wasser Berlin',                     src:'/images/drive/g26.jpg' },
  { id:'g27', cat:'details',  h:300, cap:'Innenausstattung',                   alt:'Innenausstattung Shared Horizon, exklusive Eventlocation Berlin Schmöckwitz',                         src:'/images/drive/g27.jpg' },
  { id:'g28', cat:'details',  h:380, cap:'Detail an Bord',                     alt:'Detail an Bord — Hausboot Eventlocation Shared Horizon, Berlin am Wasser',                            src:'/images/drive/g28.jpg' },
  { id:'g29', cat:'details',  h:320, cap:'Schlafbereich',                      alt:'Schlafbereich Shared Horizon, Hausboot Eventlocation Berlin Schmöckwitz für Retreats',                src:'/images/drive/g29.jpg' },
  { id:'g8',  cat:'event',    h:300, cap:'Event-Setup',                        alt:'Event-Setup an Bord Shared Horizon, Firmenevent Location am Wasser Berlin',                           src:'/images/drive/g8.jpg' },
  { id:'g11', cat:'event',    h:340, cap:'Setup an Bord',                      alt:'Business-Offsite Setup auf dem Hausboot Eventlocation Shared Horizon Berlin',                         src:'/images/drive/g11.jpg' },
  { id:'g39', cat:'event',    h:400, cap:'Dinner-Setup',                       alt:'Dinner-Setup auf der Eventlocation am Wasser Berlin — Shared Horizon Hausboot',                       src:'/images/drive/g39.jpg' },
  { id:'g40', cat:'event',    h:280, cap:'Lounge-Setup',                       alt:'Lounge-Setup für Events an Bord Shared Horizon, exklusive Eventlocation Berlin',                     src:'/images/drive/g40.jpg' },
  { id:'g41', cat:'event',    h:360, cap:'Business-Offsite',                   alt:'Business-Offsite auf dem Hausboot Shared Horizon, Firmenevent Eventlocation Berlin',                  src:'/images/drive/g41.jpg' },
  { id:'g42', cat:'event',    h:320, cap:'Schlafbereich Setup',                alt:'Schlafbereich Setup für Retreats auf der Hausboot Eventlocation am Wasser Berlin',                   src:'/images/drive/g42.jpg' },
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
