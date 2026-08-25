import type { ContractSection } from "../types";
import type { Ctype } from "@/lib/vertrag/types";

export function getGemeinsamSectionsDe(
  ctype: Ctype,
  sonder?: string,
): ContractSection[] {
  return [
    {
      nummer: "1",
      titel: "Buchung und Nutzung",
      body: [
        {
          type: "p",
          text:
            ctype === "standard"
              ? "Das Hausboot wird ausschließlich für den vereinbarten Veranstaltungszweck zur Verfügung gestellt."
              : "Das Hausboot wird für den vereinbarten privaten Freizeit- bzw. Veranstaltungszweck zur Verfügung gestellt.",
        },
        {
          type: "p",
          text: "Während Fahrten wird das Hausboot ausschließlich durch die Vermieterin oder einen von ihr bestimmten, entsprechend befähigten Schiffsführer geführt. Der Mieter und seine Gäste sind nicht berechtigt, das Hausboot selbst zu führen.",
        },
        {
          type: "p",
          text: "Eine Nutzung ohne Anwesenheit eines Schiffsführers der Vermieterin ist ausschließlich nach ausdrücklicher Vereinbarung und nur am festen Liegeplatz zulässig.",
        },
        {
          type: "p",
          text: "Die zulässige Personenzahl richtet sich stets nach den für das Hausboot geltenden behördlichen, schifffahrts- und sicherheitsrechtlichen Vorgaben. Die vereinbarte bzw. zulässige Personenzahl darf nicht überschritten werden.",
        },
      ],
    },
    {
      nummer: "3",
      titel: "Führung des Hausboots und Sicherheit",
      body: [
        {
          type: "p",
          text: "Während Fahrten wird das Hausboot ausschließlich durch die Vermieterin oder einen von ihr bestimmten, entsprechend befähigten Schiffsführer geführt.",
        },
        {
          type: "p",
          text: "Den sicherheits- und schifffahrtsbezogenen Anweisungen des Schiffsführers ist von allen Personen an Bord Folge zu leisten.",
        },
        {
          type: "p",
          text: "Der Schiffsführer ist berechtigt, geplante Fahrten, Fahrtstrecken oder einzelne Manöver aus Sicherheitsgründen anzupassen, zu unterbrechen oder nicht durchzuführen. Dies gilt insbesondere bei ungeeigneten Wetterbedingungen, technischen Störungen, behördlichen Vorgaben oder sonstigen Umständen, die eine sichere Durchführung beeinträchtigen.",
        },
        {
          type: "p",
          text: "Der Mieter informiert seine Gäste über die geltenden Sicherheits- und Bordregeln und wirkt auf deren Einhaltung hin.",
        },
      ],
    },
    {
      nummer: "4",
      titel: "Versicherung, Schäden und Haftung",
      body: [
        {
          type: "p",
          text: "Bei Fahrten wird das Hausboot ausschließlich durch die Vermieterin bzw. einen von ihr bestimmten Schiffsführer geführt. Der Mieter benötigt daher für die vereinbarte Nutzung keine eigene Bootsversicherung.",
        },
        {
          type: "p",
          text: "Für Schäden am Hausboot, Inventar oder sonstigem Eigentum der Vermieterin, die der Mieter oder seine Gäste schuldhaft verursachen und die nicht aus der Führung des Hausboots durch die Vermieterin entstehen, haftet der Mieter nach den gesetzlichen Vorschriften.",
        },
        {
          type: "p",
          text: "Eine Regulierung entsprechender Schäden kann gegebenenfalls über eine bestehende private Haftpflichtversicherung des Mieters bzw. des jeweiligen Verursachers erfolgen. Unabhängig davon bleibt der Mieter gegenüber der Vermieterin zum Ersatz eines von ihm oder seinen Gästen zu vertretenden Schadens verpflichtet.",
        },
        {
          type: "p",
          text: "Schäden, technische Störungen und sicherheitsrelevante Mängel sind der Vermieterin unverzüglich mitzuteilen.",
        },
        {
          type: "p",
          text: "Normale Abnutzung durch vertragsgemäßen Gebrauch stellt keinen ersatzpflichtigen Schaden dar.",
        },
        {
          type: "p",
          text: "Die Vermieterin haftet unbeschränkt bei Vorsatz und grober Fahrlässigkeit sowie bei schuldhafter Verletzung von Leben, Körper oder Gesundheit. Bei einfacher Fahrlässigkeit haftet die Vermieterin nur bei Verletzung einer wesentlichen Vertragspflicht und begrenzt auf den vertragstypischen, vorhersehbaren Schaden.",
        },
      ],
    },
    {
      nummer: "5",
      titel: "Nutzung und Bordregeln",
      body: [
        {
          type: "p",
          text: "Das Hausboot und seine Ausstattung sind pfleglich und bestimmungsgemäß zu behandeln.",
        },
        { type: "p", text: "Nicht gestattet sind insbesondere:" },
        {
          type: "list",
          items: [
            "Rauchen in den Innenräumen;",
            "Konsum illegaler Drogen;",
            "Überschreitung der vereinbarten bzw. zulässigen Personenzahl;",
            "eigenständiges Führen des Hausboots ohne ausdrückliche Genehmigung;",
            "Entfernen von Inventar oder Ausstattung;",
            "offene Feuerstellen außerhalb der ausdrücklich dafür vorgesehenen Einrichtungen.",
          ],
        },
        {
          type: "p",
          text: "Grillen, Musik, Alkoholkonsum und sonstige Nutzungen sind im Rahmen der an Bord geltenden Sicherheitsregeln sowie der jeweils geltenden Hafen- und Ruhebestimmungen zulässig.",
        },
        {
          type: "subheading",
          nummer: "5.1",
          titel: "Sicherheitshinweise an Bord",
        },
        {
          type: "p",
          text: "Der Mieter bestätigt, auf die folgenden Gegebenheiten an Bord hingewiesen worden zu sein, und informiert seine Gäste entsprechend:",
        },
        {
          type: "list",
          items: [
            "Die Treppe zwischen den Ebenen ist steil und mit besonderer Vorsicht zu benutzen.",
            "Die Geländer bieten keinen Schutz gegen Übersteigen. Kinder sind an Bord durchgehend zu beaufsichtigen.",
            "Das Bordwasser ist kein Trinkwasser.",
            "An Bord herrscht häufig Wind. Lose Gegenstände und Abfall sind so zu sichern, dass sie nicht in das Gewässer gelangen.",
          ],
        },
      ],
    },
    {
      nummer: "6",
      titel: "Stornierung durch den Mieter",
      body: [
        { type: "p", text: "Bei einer Stornierung gelten folgende Stornokosten:" },
        {
          type: "list",
          items: [
            "mehr als 30 Tage vor Nutzungsbeginn: 50 € Bearbeitungsgebühr;",
            "15–30 Tage vor Nutzungsbeginn: 50 % des vereinbarten Mietpreises;",
            "7–14 Tage vor Nutzungsbeginn: 75 % des vereinbarten Mietpreises;",
            "weniger als 7 Tage vor Nutzungsbeginn oder Nichterscheinen: 100 % des vereinbarten Mietpreises.",
          ],
        },
      ],
    },
    {
      nummer: "7",
      titel: "Ausfall oder Abbruch",
      body: [
        {
          type: "p",
          text: "Kann die vereinbarte Nutzung aufgrund höherer Gewalt, behördlicher Anordnung, nicht vorhersehbarer technischer Störungen oder aus sonstigen von der Vermieterin nicht zu vertretenden Gründen nicht oder nicht vollständig durchgeführt werden, kann die Vermieterin die Nutzung absagen, anpassen oder abbrechen.",
        },
        {
          type: "p",
          text: "Für von der Vermieterin endgültig nicht erbrachte Leistungen werden bereits gezahlte Beträge entsprechend erstattet.",
        },
        {
          type: "p",
          text: "Bei erheblichen Verstößen gegen Sicherheitsanweisungen oder Bordregeln, insbesondere bei Gefährdung von Personen oder des Hausboots, Überschreitung der zulässigen Personenzahl oder vorsätzlicher Beschädigung, ist die Vermieterin berechtigt, die Nutzung vorzeitig zu beenden.",
        },
        {
          type: "p",
          text: "Weitergehende Ansprüche richten sich nach den gesetzlichen Vorschriften und der Haftungsregelung dieses Vertrages.",
        },
      ],
    },
    {
      nummer: "8",
      titel: "Ende der Nutzung",
      body: [
        {
          type: "p",
          text: "Nach Ende der vereinbarten Nutzungszeit ist das Hausboot aufgeräumt und besenrein zu hinterlassen.",
        },
        {
          type: "p",
          text: "Festgestellte Schäden, Verluste oder außergewöhnliche Verschmutzungen sind der Vermieterin spätestens bei Ende der Nutzung mitzuteilen.",
        },
        {
          type: "p",
          text:
            ctype === "standard"
              ? "Die Kontrolle des Hausboots sowie die Abrechnung und Rückzahlung der Kaution richten sich nach § 2 dieses Vertrages."
              : "Die Vermieterin ist berechtigt, das Hausboot und das Inventar nach Ende der Nutzung auf Schäden und Vollständigkeit zu kontrollieren. Sofern keine Ansprüche bestehen, wird die hinterlegte Kaution von 500 € unmittelbar zurückgezahlt.",
        },
      ],
    },
    {
      nummer: "9",
      titel: "Sondervereinbarungen",
      body: [
        {
          type: "p",
          text: sonder && sonder.trim().length > 0
            ? sonder.trim()
            : "Es wurden keine Sondervereinbarungen getroffen.",
        },
      ],
    },
    {
      nummer: "10",
      titel: "Schlussbestimmungen",
      body: [
        {
          type: "p",
          text: "Individuell in § 9 getroffene Sondervereinbarungen gehen den übrigen Bestimmungen dieses Vertrages vor.",
        },
        {
          type: "p",
          text: "Änderungen und Ergänzungen dieses Vertrages können in Textform, insbesondere per E-Mail oder bestätigter Nachricht, vereinbart werden.",
        },
        {
          type: "p",
          text: "Sollten einzelne Bestimmungen dieses Vertrages unwirksam sein oder werden, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.",
        },
        { type: "p", text: "Es gilt deutsches Recht." },
      ],
    },
  ];
}
