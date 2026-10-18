# Shared Horizon – Umsetzungsschritt 1 (18.10.2026)

Status: **nur Feature-Branch / Pull Request, noch nicht produktiv**.

## Umgesetzt
- Bounded JSON-Reader mit echten Byte-Limits für öffentliche POST-Endpunkte und Parser-Tests.
- Anfrageformular: Datentypen, maximale Feldlängen und E-Mail-Adresse serverseitig validieren; HTML-Escaping für Mail-Inhalte; Honeypot als einfacher Bot-Filter; Origin-/Fetch-Site-Prüfung; SMTP-Fehler bleiben sichtbar.
- Vertragsversand: Body-/PDF-Größenlimits, PDF-Signatur- und Seitenzahlprüfung, Eingabefeldvalidierung, Dateinamenhärtung und Origin-/Fetch-Site-Prüfung.
- Vertragsseiten mit `noindex, nofollow` markiert (kein Zugriffsschutz).
- Sitemap enthält nur indexierbare öffentliche Seiten und tatsächliche letzte Inhaltsänderungsdaten statt wechselndem `new Date()`.
- GitHub Actions: `npm ci`, `npm run lint`, `npm test`, `npm run build`.

## Wichtige verbleibende Risiken
1. **Vertragsversand ist weiterhin öffentlich erreichbar.** Ein Origin-Check und Größenlimits sind keine Authentifizierung. Ein Missbrauch als E-Mail-Relay bleibt möglich, weil die Empfängeradresse (CC) aus dem Request kommt. Für echte Absicherung: signiertes, zeitlich begrenztes Einmal-Token oder serverseitiger Vertragsdatensatz; zusätzlich belastbares Rate-Limiting über Edge/WAF/Redis. Erst nach Prüfung der produktiven Vertragsstrecke einführen.
2. **Vertragslinks enthalten weiterhin personenbezogene Daten Base64-kodiert im URL-Fragment.** Das ist nicht verschlüsselt; erfordert gesonderte Migration auf undurchsichtige Tokens sowie Speicher-, Fristen- und Löschkonzept.
3. **Die API erzeugt das PDF derzeit aus Daten des Clients.** Echtheit und Integrität von Vertragsinhalt und Unterschrift müssen bei einer künftigen Umstellung serverseitig abgesichert werden.
4. **GA4 für Shared Horizon fehlt** über Windsor.ai. Conversion-Messung erst mit gültiger Mess-ID, dokumentiertem Consent und aktualisierter Datenschutzerklärung aktivieren; nie Namen/E-Mail-Adressen an GA4 senden.
5. **Produktions-Deployment/Livetest nicht durchgeführt** (Vercel API 403); insbesondere Formular und Vertragsversand vor Merge in Vorschau und nach Deployment mit Testadressen prüfen.
6. **Betriebsmaßnahmen**: Bot-/Spam-Bremse serverseitig dauerhaft per Anbieter/WAF konfigurieren (nicht In-Memory-Map bei Serverless); SMTP-Fehler überwachen.

## Release-Checkliste
- [ ] GitHub Actions Lint/Test/Build grün
- [ ] Staging-/Preview-Formular mit SMTP-Testkonto testen (Erfolg und Fehlerfall)
- [ ] Vertragslink aus /vertrag/neu generieren; PDF signieren, Empfängerzustellung und Layout prüfen
- [ ] Negative API-Tests: fremde Origin, ungültige E-Mail, ungültiges PDF, übergroße Requests
- [ ] Live-Metadaten `/vertrag` und `/vertrag/neu`, Sitemap und Canonicals prüfen
- [ ] Freigabe für Produktiv-Merge; Vercel-Verbindung berechtigen oder unabhängige Live-Kontrolle durchführen
- [ ] GA4-/Conversion-Tracking als separaten Schritt

## Erfolgsmessung
Nach Veröffentlichung und nach 7/28/90 Tagen API-Fehler, Anfragen, Spam-Anteil, GSC-Impressionen/Klicks und später Consent-konforme Conversions vergleichen.

## Folgeschritt: belastbarer Vertragsversand (Entscheidungsvorlage)
### Aktueller Datenfluss
`/vertrag/neu` ist per Basic Auth geschützt. Dort werden Vertragsdetails erfasst und als Base64-kodiertes JSON in einen Link `/vertrag#...` geschrieben. Der öffentliche Browser des Mieters erzeugt das unterschriebene PDF und sendet es an `/api/vertrag/send`, wobei die API eine vom Browser gelieferte E-Mail-Adresse in CC verwendet. Server und Link prüfen aktuell weder kryptografisch die Vertragsdaten noch den Absender als autorisierten Unterzeichner.

### Empfohlene Zielarchitektur
1. Verträge ausschließlich über einen authentifizierten Betreiberbereich erzeugen, serverseitig als Datensatz speichern und mit einem kryptografisch zufälligen, kurzlebigen Einmal-Token verknüpfen. Übertragene URLs enthalten kein Klartext-/Base64-JSON mit Personen-/Vertragsdaten.
2. Öffentliche Mieterseite lädt nach Tokenprüfung nur die für den Vertrag notwendigen Daten. Vertragsbedingungen, Preise, erlaubte Empfänger und Ablaufdatum kommen aus der serverseitigen Quelle und können nicht vom Browser überschrieben werden.
3. Signatur nur in Verbindung mit gültigem Token und serverseitig festgelegtem Vertrag akzeptieren; unterschriebenes Dokument kontrolliert erzeugen, Empfänger serverseitig fest vorgeben, Token atomar als verwendet markieren (Schutz vor Replay/Doppelsendungen).
4. Geeigneten dauerhaften Datenspeicher, Zugriffsschutz, Lösch-/Archivierungsfristen und Verschlüsselungs-/Backup-Konzept auswählen. Kein PII-Logging. Rate-Limits/WAF für Formular und Vertragsversand gegen Missbrauch.
5. Existing Links: Vor Umschaltung aktive alte Vertragslinks identifizieren und geregelte Übergangsfrist oder gezielte Neuerstellung planen. Nicht unangekündigt abschalten.
6. Testen: Sandbox SMTP-Test an die interne Adresse, Zustellung verifizieren, 4xx-Fehler/Limitfälle prüfen; vollständiger End-to-End-Vertragstest (Erzeugung, Öffnen, Signatur, Empfang, Dubletten) vor Produktivfreigabe.

**Vor Implementierung klären:** Gibt es bereits einen eigenen Datenspeicher für Verträge, welche langfristige Aufbewahrung ist gewünscht, und ob in Vercel vorhandene sichere Services nutzbar sind. Dienst-/Vertragsänderungen bedürfen gesonderter Freigabe.

## Prüfgrenze
Über den bisher verbundenen ChatGPT-Vercel-Zugriff gibt die Deployment-API einen 403-Fehler zurück (Scope `kirsch-4920s-projects`). GitHub Actions kann lint/test/build prüfen; ein 200er-HTTP-Test der App beweist noch keine Zustellung im Postfach. Eine echte E-Mail-End-to-End-Probe muss an die interne Empfängeradresse gesendet und der Eingang dort verifiziert werden. Dieser Test ist noch nicht abgeschlossen.
