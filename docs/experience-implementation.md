# Shared Horizon Experience — verbindlicher Implementierungsauftrag

Stand: 15.10.2026 · Arbeitszweig: `feature/shared-horizon-experience`
Status: Umsetzung vorbereitet; **keine** produktive Freigabe.

## Ziel und bestehende Basis
Bestehende Next.js-16-/React-19-Website `KirschJohannes/shared-horizon-website` erweitern. Bestehende Website, Komponenten, Bilddateien, Cormorant/Jost und Farb-Tokens **wiederverwenden**. Nicht in `main` arbeiten. Kein unabhängiger Neuentwurf, keine kleinere Ersatzdemo.

**Verbindliche Referenzen:** `Shared_Horizon_Experience_Konzept.md` (08.10.2026), die vom Auftraggeber favorisierte V3-Designvorschau, ursprünglicher Claude-Code-Auftrag, Shared-Horizon-Designsystem und offizielle Gäste-/Check-in-/Checkout-Informationen. Bei Abweichungen mit der jüngsten Entscheidung abstimmen.

## Beschlossene Nutzerführung
- Vorher: emotionale Einladung und Guest Pass, echtes Hausbootbild, Anlass/Datum/Uhrzeit aus Buchung, Anreise, Vorbereitung, fertige WhatsApp-Nachricht des Veranstalters.
- An Bord: **direkter Zugriff** auf WLAN, Ausstattung/Musik/TV/Beamer/Grill, Hilfe/Sicherheit, gemeinsames Event-Fotoalbum; keine Registrierung für wesentliche Funktionen.
- Danach: Erinnerungen und Album, Teilen/Weiterempfehlung, freiwillige Bewertungen **nur** für geeignete Direktbuchungen, Anfrage über den **bestehenden** Anfrageprozess.
- Veranstalter erstellt **kein Design**. Die Seite wird automatisch aus Ereignisdaten generiert. Er kann den Link teilen und das Album moderieren.
- Jeder mit dem zufälligen Eventlink kann Fotos/Videos **ohne Konto** einsehen/hochladen; Veranstalter kann moderieren; Lösch- und Meldemechanismen und Missbrauchsschutz vor Live-Betrieb prüfen. Öffentlicher Link ist nicht gleich starke Authentisierung.

## Marken- und Qualitätsvorgaben
- Navy #172A2E, Brass #BD9A64, Cream #F3EFE7, Paper #FBFAF7; Cormorant Headlines, Jost Interface. Minimalistisch, bildstark, authentische vorhandene Bilder statt Platzhaltern.
- Gästeansprache „Sie“. Mobile-first 360–430 px. Echte 44px+ Touchziele, Fokus, prefers-reduced-motion, Alttexte.
- Phasen-Konzept **nicht** in generische Marketingkacheln verwandeln. V3 ist visuelle Referenz, keine vollständig funktionierende App.
- Vorab bekannte offene Fakten **nicht erfinden**: Liegeplatz/Anfahrt (abweichende Angaben in Unterlagen), WLAN-Daten, Ansprechpartner, Bewertungslink, Gästezahl, einzelne Geräte. Diese Felder brauchen verifizierte Inhalte.

## Technische Umsetzung
- `/guest`: allgemeiner QR-/NFC-Concierge, ohne Eventlink benutzbar.
- `/e/[token]`: Event-Guest-Pass; zufälliger kryptografischer Token; Phase von Event-Zeitraum und Europa/Berlin ableiten; getrennte Event- und Admin-Berechtigungen.
- Eventdatenserver: öffentlich nur freigegebene Metadaten; Buchungskanal `direct|airbnb|other|unknown` wirksam auswerten. Keine Google-Review- oder Direktbuchungswerbung bei Airbnb oder unbekanntem Kanal.
- Album: tatsächliche persistente Speicherung (Datenbank + Objektspeicher), Upload-Typ-/Größenlimits, Moderation, Löschen, Missbrauchssicherung, Datenschutzhinweise, keine ungeprüfte öffentliche Freigabe von Personenaufnahmen.
- Serverlose/deploybare Realisierung mit vorhandenen Next.js-Routen; keine geheimen Zugangsdaten in Git; Bilder der Marketingseite wiederverwenden.
- Kein automatisches Erreichen anonymer Gäste behaupten; Host muss Nachbereitungslink teilen oder Gast freiwillig wiederkehren.

## Explizite Abnahmetests vor erster Nutzervorschau
1. Vorher / An Bord / Danach sowie Organisatorperspektive vollständig navigierbar; visuell gegen die V3-Referenz abgeglichen.
2. Echt vorhandene Inhalte/Bilder geprüft; keine erfundenen Termine, Adressen oder technischen Zugangsdaten.
3. Jede primäre Schaltfläche hat eine reale Aktion oder ist sichtbar als noch nicht angeschlossene Funktion gekennzeichnet — **niemals Fake-Erfolgsmeldungen**.
4. Zwei unterschiedliche Geräte/Sitzungen können ein Eventalbum tatsächlich gemeinsam sehen, hochladen, löschen/moderieren — falls noch nicht implementiert, Vorschau explizit als unfertig markieren.
5. Kanalregeln für direct, airbnb, other, unknown getestet.
6. 360, 390, 430px und Desktop; Tastatur, Fokus, Konsole, Fehlerszenarien und responsive Bilddarstellung geprüft.
7. Tests/Build bestanden; Deployment **nur Preview**, keine Zuordnung zu `shared-horizon.de` und kein Merge nach `main` ohne explizite Freigabe.
8. Übergabe mit belegter Testliste: bestanden/nicht bestanden/nicht testbar. Keine Behauptung von Safari-/iPhone-Tests ohne echtes Gerät.

## Vorgehensweise
1. Bestandskomponenten und Medienpfade lesen.
2. Design und Informationsarchitektur an der existierenden V3 fixieren.
3. Anwendung samt serverseitiger Datenhaltung und Fotoalbum realisieren.
4. Automatisierte Tests und echte mobile Browser-Renderings prüfen.
5. Geschützten Preview-Link zur Abnahme bereitstellen, **erst danach** über Integration entscheiden.
