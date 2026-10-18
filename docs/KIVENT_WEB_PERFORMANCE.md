# Kivent Web Performance – Arbeitsstandard (v1)

Stand: 2026-10-18. Gilt vorerst für eigene Websites (Shared Horizon, Karriere Kick, später weitere Kivent-Angebote).

## Portfolio eigener Websites (Stand 2026-10-18)
| Website/Produkt | Status | Primäre Ziele | Besonderheiten |
| --- | --- | --- | --- |
| shared-horizon.de | Aktiv | Event-/Buchungsanfragen | Next.js, Vercel, GitHub, Search Console |
| karriere-kick.de | Aktiv | Unternehmen, Jugendliche, Schulen, Veranstalter | Dynamische Event-/Standort-/Datums-/Zielgruppenseiten; Technik noch prüfen |
| kivent.de | Dachmarken-Website geplant | Unternehmensvertrauen, Markenführung, B2B-Leads | Informationsarchitektur und Brand-Suchintention von Produktmarken abgrenzen |
| kivent.os | Software-Produkt (technische URL/Veröffentlichungsstatus vor SEO-Arbeiten verifizieren) | Software-Adoption, Vertrieb, Nutzeraktivierung | Öffentliches Marketing vs. Login-/Kundendaten und nicht indexierbare App-Routen sauber trennen |
| be-a-guardian.de | Shop noch online, bestehendes Shopify-Angebot gekündigt; Neubau zu prüfen | Produktverkauf Kickertisch | Vor Abschaltung Inventar, Bestellungen, Domain, SEO-URLs, Redirects, Produkt-/Medien-/Review-Daten und Tracking sichern; erst Ersatz und Migration testen |

## Ergänzende Mindeststandards
- **Messkonzept:** Je Marke relevante Conversion-Ereignisse, Anfragequelle, Kampagnenparameter (UTM), Formular- und Kauftrichter sowie datenschutzkonforme Consent-/Analytics-Implementierung definieren. Anfragen nicht allein anhand von Rankings bewerten.
- **Technisches Monitoring:** Google Search Console, Core Web Vitals/CrUX bzw. PageSpeed, Uptime, Fehlerlogs und 404-/Weiterleitungsreport regelmäßig prüfen.
- **Qualitäts-Gates:** Test-/Preview-Deployments und Rollback-Pfad, Link-/Formular-Checks, Barrierefreiheit (insbesondere Tastatur, Labels, Kontraste), Mobile UX und Security-Updates.
- **Daten- und Rechtehygiene:** Quellen/Fakten belegen, Lizenzen an Bild- und Videomaterial klären, Datenschutz und Cookie-Einwilligung prüfen; nur tatsächlich verfügbare Angebote bewerben.
- **KI-Sichtbarkeit:** Gezielt reale KI-Antworten mit dokumentierten Testfragen überprüfen. Strukturierte Daten sind Hilfsmittel, keine Garantie. Log-/Crawler-Zugriff nur nach Bedarf auditieren.
- **Portfolio-Governance:** Für jede Website eine Steckbriefdatei mit Domain, Repo, Hosting, Datenquellen, verantwortlicher Person, Zielen, Zielgruppen, Deploy-Risiken und Status; Zugänge nicht in Git speichern.
- **Shopmigration:** Keine Domain-/Shop-Abschaltung vor Datensicherung, rechts-/steuerrelevanter Archivierung, URL-Inventur, Redirect-Mapping, Bestell-/Zahlungstest und Freigabe.
- **Software-Sicherheit:** Bei kivent.os interne/private Login-, Admin-, Teilnehmer- und Eventdaten-Routen nicht indexieren; Zugriffsschutz muss technisch durchgesetzt werden, nicht nur durch robots.txt.

## Ziele
1. Qualifizierte Anfragen und Buchungen erhöhen (nicht nur Rankings).
2. Organische Sichtbarkeit in Google und KI-gestützten Sucherlebnissen (GEO) verbessern.
3. Jede Änderung anhand überprüfbarer Daten beurteilen und dokumentieren.

## Verbindlicher Ablauf
1. **Scope & Messbasis**: Website, Geschäftsziele, Nutzergruppen, Conversion-Aktionen, Zeitraum, relevante Länder und Wettbewerber bestimmen. Search-Console-Daten (Keywords, Seiten, Impressionen, Klicks, CTR, Position) vor Änderungen sichern.
2. **Bestandsaufnahme**: Technologie, Repository/Branch, Deployment-Verbindung, sitemap.xml, robots.txt, Canonicals, noindex, Weiterleitungen, Metadaten, strukturierte Daten, mobile Darstellung, Core Web Vitals, Formular-Funktion.
3. **Suchintentionen clustern**: Marke, generische Suche, lokale Suche, Ereignis-/Standortsuche, Informationsfragen. Pro URL eine klare primäre Suchintention; konkurrierende Seiten vermeiden.
4. **Maßnahmen priorisieren**: Erwarteter Nutzen × Relevanz × Umsetzungsaufwand × Risiko; erst kritische Indexierungs-/Conversion-Probleme, dann Content-Optimierung.
5. **Fakten und Recht**: Keine unbelegten Aussagen über Kooperationen, Fernsehauftritte, Teilnehmerzahlen, Preise, Verfügbarkeiten oder Auszeichnungen. Fotos mit Rechteklärung. Strukturierte Daten müssen zum sichtbaren Inhalt passen.
6. **Implementieren**: Bestehendes Design und Conversion-Pfade erhalten. Zuerst Code lesen; möglichst kleine Änderungen. Nach Möglichkeit Branch/Preview statt direkt Production.
7. **Prüfen**: Build/Lint, 200-Status, richtige Domain, Canonical, sichtbarer Inhalt, Mobilansicht, Buttons/Formulare, Metadaten, Sitemap und strukturierte Daten prüfen. Git-Commit ≠ erfolgreicher Live-Deploy.
8. **Ausrollen & Crawling**: Production-Deployment prüfen; geänderte URLs in Search Console inspizieren, Sitemap bei Bedarf aktualisieren/einreichen. Einreichung ist keine Indexierungsgarantie.
9. **Messen**: Nach 7/28/90 Tagen Kennzahlen und Conversions gegen Ausgangslage vergleichen. Interpretation bei kleinen Stichproben mit Unsicherheit.
10. **Dokumentieren**: Datum, URL, Hypothese, Änderungen/Commits, Deployment, Testergebnis und spätere Auswirkungen.

## GEO-Prinzipien
- Klare, überprüfbare Entitäten: Marke, Angebot, Ort, Zielgruppen, Ausstattung, Kontakt.
- Direkt beantwortbare Fragen in verständlicher Sprache; sichtbarer redaktioneller Inhalt hat Vorrang vor reinem Markup.
- Strukturierte Daten nur dann, wenn sie die echte Seite beschreiben. Keine garantierten KI-Erwähnungen versprechen.
- Eindeutige Quelle für Ereignisse, Termine und Angebote; Konsistenz auf Website/Profilen/Partnerseiten.

## Multi-Standort/-Termin-Websites: Karriere Kick (Hypothesen, noch keine Implementierung)
Öffentlich beobachtet: zentrale Marketingseiten und Terminkatalog; Eventseiten unter /in/<standort-datum>/<zielgruppe>, darunter aussteller, jugendliche, lehrkraft. Teilweise existieren auch kürzere /in/<standort>-URLs.
**Vor technischen Änderungen prüfen**: Generator/CMS, Datenmodell, Publishing-Verfahren, echte Route-/Canonical-Regeln, Wiederholungsveranstaltungen, Stadt/Datum-Zuordnung, Anmeldung und Eventstatus.
- Für jedes Event stabile eindeutige Kennung; Termine und Uhrzeiten aus einer Datenquelle.
- Lokale Suchseiten sinnvoll indexieren, aber generische Text-Duplikate, Parametervarianten und abgelaufene Events kontrollieren.
- Zielgruppenseiten (Jugendliche/Lehrkräfte/Aussteller) nur separat indexieren, wenn Suchintention und genügend eigenständiger Inhalt bestehen.
- Event-JSON-LD nur für echte konkrete Events mit validierten Daten und korrektem Status; zeitnah aktualisieren.
- Abgelaufene Termine: definierte Archiv-/Weiterleitungsstrategie statt pauschalem Löschen.
- Eventlisten, interne Verlinkung und XML-Sitemaps bei jeder Veranstaltung automatisiert aktualisieren.
- Anmeldungen nach Event/Standort/Zielgruppe messen; keine personenbezogenen Rohdaten in SEO-Reports.

## Website-Steckbrief – Shared Horizon
- Live: https://shared-horizon.de
- Repository: KirschJohannes/shared-horizon-website (Next.js, Vercel)
- Search Console via Windsor.ai: https://shared-horizon.de/
- Geschäftsziel: qualifizierte Buchungsanfragen für Eventboot in Berlin
- Kampagnen-Landingpage: /hausboot-the-voice
- Referenzdaten Search Console 2026-09-17 bis 2026-10-14: 130 Impressionen, 11 Klicks, mittlere Position 8,65; Zahlen sind nur für diesen Zeitraum und geringe Reichweite aussagekräftig.
- Offene Checks: Indexierung Landingpage, Live-Rendering nach Deploy, Conversion-Messung, echte Fotos optimiert integrieren, Google-Snippets und Canonical je URL verifizieren.

## Definition of Done
Eine Maßnahme gilt erst als **technisch abgeschlossen**, wenn die geplanten Änderungen gespeichert, produktiv bereitgestellt und live geprüft wurden. **SEO-Wirkung** ist eine separate, später zu überprüfende Hypothese.
