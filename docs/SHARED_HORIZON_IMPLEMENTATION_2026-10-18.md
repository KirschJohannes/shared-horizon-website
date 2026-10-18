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
