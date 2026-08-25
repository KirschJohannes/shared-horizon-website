import {
  Document,
  Image,
  Page,
  StyleSheet,
  Text,
  View,
  pdf,
} from "@react-pdf/renderer";
import type { ContentBlock, ContractSection } from "@/content/vertrag/types";
import { getGemeinsamSectionsDe } from "@/content/vertrag/de/gemeinsam";
import { paragraf2StandardDe } from "@/content/vertrag/de/paragraf2-standard";
import { paragraf2InfluencerDe } from "@/content/vertrag/de/paragraf2-influencer";
import { getGemeinsamSectionsEn } from "@/content/vertrag/en/gemeinsam";
import { paragraf2StandardEn } from "@/content/vertrag/en/paragraf2-standard";
import { paragraf2InfluencerEn } from "@/content/vertrag/en/paragraf2-influencer";
import type { ContractData } from "@/lib/vertrag/types";
import { computeAnzahlung, formatEuro } from "@/lib/vertrag/price";
import { formatDate } from "@/lib/vertrag/format";
import {
  hausboot,
  kaution,
  liegeplatz,
  maxUebernachtungsgaeste,
  vermieterin,
} from "@/lib/vertrag/config";

// PDF-Layout ist laut Briefing bewusst nicht pixelgenau zum Bildschirm/Prototyp,
// sondern im CI sauber neu gesetzt. Standard-PDF-Fonts (Times-Roman/Helvetica)
// statt Cormorant Garamond/Jost: Google Fonts liefert diese beiden Familien
// aktuell nur als variable-font-Datei mit identischem Byte-Inhalt über alle
// angefragten Schriftschnitte (300/400/500) — fontkit/@react-pdf würde damit
// keinen sichtbaren Gewichtsunterschied rendern. Standardfonts sind zudem ohne
// Netzwerkabhängigkeit beim PDF-Erzeugen zuverlässiger für ein Vertragsdokument.
const COLORS = {
  navy: "#172A2E",
  navy600: "#466163",
  brass: "#BD9A64",
  brassDeep: "#A07E4A",
  cream: "#F3EFE7",
  stone: "#E6E0D5",
  stone500: "#9C9488",
  ink: "#2A3B3E",
};

const styles = StyleSheet.create({
  page: {
    paddingTop: 44,
    paddingBottom: 56,
    paddingHorizontal: 48,
    fontFamily: "Helvetica",
    fontSize: 10,
    color: COLORS.ink,
  },
  headRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: COLORS.stone,
    paddingBottom: 8,
    marginBottom: 20,
  },
  headLabel: {
    fontSize: 8,
    letterSpacing: 2,
    color: COLORS.navy,
  },
  headLabelMuted: {
    fontSize: 8,
    letterSpacing: 1.5,
    color: COLORS.stone500,
  },
  title: {
    fontFamily: "Times-Roman",
    fontSize: 22,
    color: COLORS.navy,
    marginBottom: 2,
  },
  subtitle: {
    fontFamily: "Times-Italic",
    fontSize: 12,
    color: COLORS.navy600,
    marginBottom: 16,
  },
  eckdatenBox: {
    backgroundColor: COLORS.cream,
    padding: 14,
    marginBottom: 16,
  },
  eckdatenName: {
    fontFamily: "Times-Roman",
    fontSize: 14,
    color: COLORS.navy,
    marginBottom: 2,
  },
  eckdatenFirma: {
    fontSize: 9,
    color: COLORS.navy600,
    marginBottom: 8,
  },
  eckdatenGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
  },
  eckdatenItem: {
    width: "45%",
  },
  eckdatenValue: {
    fontFamily: "Times-Roman",
    fontSize: 11,
    color: COLORS.navy,
    marginBottom: 2,
  },
  eyebrow: {
    fontSize: 7,
    letterSpacing: 1.5,
    color: COLORS.stone500,
  },
  eyebrowAccent: {
    fontSize: 7,
    letterSpacing: 1.5,
    color: COLORS.brassDeep,
  },
  parteienRow: {
    flexDirection: "row",
    gap: 24,
    marginBottom: 18,
  },
  parteienBlock: {
    flex: 1,
  },
  parteienLine: {
    fontSize: 9,
    lineHeight: 1.5,
    color: COLORS.ink,
  },
  parteienNameLine: {
    fontSize: 9,
    lineHeight: 1.5,
    color: COLORS.navy,
  },
  sectionDivider: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.brass,
    marginTop: 14,
    marginBottom: 6,
  },
  sectionHeading: {
    fontSize: 10.5,
    color: COLORS.navy,
    marginBottom: 8,
  },
  subheading: {
    fontSize: 9.5,
    color: COLORS.navy,
    marginTop: 6,
    marginBottom: 4,
  },
  paragraph: {
    fontSize: 9.5,
    lineHeight: 1.6,
    color: COLORS.ink,
    marginBottom: 8,
  },
  listItem: {
    flexDirection: "row",
    gap: 6,
    marginBottom: 4,
  },
  listDash: {
    color: COLORS.brass,
    fontSize: 9.5,
  },
  listText: {
    fontSize: 9.5,
    lineHeight: 1.5,
    color: COLORS.ink,
    flex: 1,
  },
  tableRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 4,
  },
  tableLabel: {
    fontSize: 9.5,
    color: COLORS.ink,
    flex: 1,
  },
  tableValue: {
    fontSize: 9.5,
    color: COLORS.brassDeep,
  },
  datenblock: {
    borderWidth: 1,
    borderColor: COLORS.stone,
    padding: 10,
    marginBottom: 10,
    gap: 6,
  },
  datenblockRow: {
    gap: 1,
  },
  datenblockValue: {
    fontSize: 9.5,
    color: COLORS.navy,
  },
  signBlock: {
    marginTop: 28,
    flexDirection: "row",
    gap: 24,
  },
  signColumn: {
    flex: 1,
  },
  signLine: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.navy,
    height: 46,
    justifyContent: "flex-end",
  },
  signImage: {
    height: 44,
    objectFit: "contain",
  },
  footer: {
    position: "absolute",
    bottom: 24,
    left: 48,
    right: 48,
    flexDirection: "row",
    justifyContent: "space-between",
    fontSize: 7,
    letterSpacing: 1.5,
    color: COLORS.stone500,
    borderTopWidth: 1,
    borderTopColor: COLORS.stone,
    paddingTop: 6,
  },
});

type Labels = {
  title: string;
  subtitle: string;
  mieterin: string;
  vermieterinLabel: string;
  vertretenDurch: string;
  nutzungszeit: string;
  nutzungsart: string;
  vereinbarterPreis: string;
  anzahlungLabel: string;
  liegeplatzLabel: string;
  gaesteLabel: string;
  gaesteWert: string;
  personenSuffix: string;
  mietpreisBrutto: string;
  regulaererPreis: string;
  preisnachlass: string;
  vereinbarterMietpreis: string;
  anzahlungBeiUnterzeichnung: string;
  restbetragBeiNutzungsbeginn: string;
  kautionLabel: string;
  ortLabel: string;
  datumLabel: string;
};

const labels: Record<"de" | "en", Labels> = {
  de: {
    title: "Miet- und Nutzungsvertrag",
    subtitle: `Hausboot „${hausboot}“`,
    mieterin: "Mieterin",
    vermieterinLabel: "Vermieterin",
    vertretenDurch: "vertreten durch",
    nutzungszeit: "Nutzungszeit",
    nutzungsart: "Nutzungsart",
    vereinbarterPreis: "Vereinbarter Preis",
    anzahlungLabel: "Anzahlung, 50 %",
    liegeplatzLabel: "Liegeplatz · Ausgangsort",
    gaesteLabel: "Übernachtungsgäste",
    gaesteWert: `maximal ${maxUebernachtungsgaeste} Personen`,
    personenSuffix: "Personen",
    mietpreisBrutto: "Mietpreis, brutto",
    regulaererPreis: "Regulärer Mietpreis",
    preisnachlass: "Preisnachlass Kooperation",
    vereinbarterMietpreis: "Vereinbarter Mietpreis",
    anzahlungBeiUnterzeichnung: "Anzahlung bei Unterzeichnung",
    restbetragBeiNutzungsbeginn: "Restbetrag bei Nutzungsbeginn",
    kautionLabel: "Kaution",
    ortLabel: "Ort der Unterzeichnung",
    datumLabel: "Datum",
  },
  en: {
    title: "Rental and Usage Agreement",
    subtitle: `Houseboat "${hausboot}"`,
    mieterin: "Renter",
    vermieterinLabel: "Lessor",
    vertretenDurch: "represented by",
    nutzungszeit: "Period of Use",
    nutzungsart: "Type of Use",
    vereinbarterPreis: "Agreed Rental Price",
    anzahlungLabel: "Down Payment, 50 %",
    liegeplatzLabel: "Berth · Point of Departure",
    gaesteLabel: "Overnight Guests",
    gaesteWert: `maximum ${maxUebernachtungsgaeste} persons`,
    personenSuffix: "persons",
    mietpreisBrutto: "Rental Price, gross",
    regulaererPreis: "Regular Rental Price",
    preisnachlass: "Cooperation Discount",
    vereinbarterMietpreis: "Agreed Rental Price",
    anzahlungBeiUnterzeichnung: "Down Payment upon Signing",
    restbetragBeiNutzungsbeginn: "Remaining Balance upon Start of Use",
    kautionLabel: "Security Deposit",
    ortLabel: "Place of Signing",
    datumLabel: "Date",
  },
};

function buildSections(data: ContractData): ContractSection[] {
  const gemeinsam =
    data.lang === "de"
      ? getGemeinsamSectionsDe(data.ctype, data.sonder)
      : getGemeinsamSectionsEn(data.sonder);
  const paragraf2 =
    data.lang === "de"
      ? data.ctype === "standard"
        ? paragraf2StandardDe
        : paragraf2InfluencerDe
      : data.ctype === "standard"
        ? paragraf2StandardEn
        : paragraf2InfluencerEn;
  const section1 = gemeinsam.find((s) => s.nummer === "1")!;
  const rest = gemeinsam.filter((s) => s.nummer !== "1");
  return [section1, paragraf2, ...rest];
}

function preisRows(data: ContractData, t: Labels): [string, string][] {
  const anzahlungRows: [string, string][] = [
    ["50 %", t.anzahlungBeiUnterzeichnung],
    ["50 %", t.restbetragBeiNutzungsbeginn],
    [formatEuro(kaution), t.kautionLabel],
  ];
  if (data.ctype === "standard") {
    return [
      [formatEuro(data.preis.mietpreis ?? data.preis.vereinbart), t.mietpreisBrutto],
      ...anzahlungRows,
    ];
  }
  return [
    [formatEuro(data.preis.regulaer ?? 0), t.regulaererPreis],
    [formatEuro(data.preis.nachlass ?? 0), t.preisnachlass],
    [formatEuro(data.preis.vereinbart), t.vereinbarterMietpreis],
    ...anzahlungRows,
  ];
}

function DatenblockPdf({ rows }: { rows: [string, string][] }) {
  return (
    <View style={styles.datenblock}>
      {rows.map(([value, label]) => (
        <View key={label} style={styles.datenblockRow}>
          <Text style={styles.datenblockValue}>{value}</Text>
          <Text style={styles.eyebrow}>{label}</Text>
        </View>
      ))}
    </View>
  );
}

function BlockPdf({ block }: { block: ContentBlock }) {
  if (block.type === "p") {
    return <Text style={styles.paragraph}>{block.text}</Text>;
  }
  if (block.type === "list") {
    return (
      <View style={{ marginBottom: 8 }}>
        {block.items.map((item, i) => (
          <View key={i} style={styles.listItem}>
            <Text style={styles.listDash}>—</Text>
            <Text style={styles.listText}>{item}</Text>
          </View>
        ))}
      </View>
    );
  }
  if (block.type === "table") {
    return (
      <View style={{ marginBottom: 8 }}>
        {block.rows.map(([label, value]) => (
          <View key={label} style={styles.tableRow}>
            <Text style={styles.tableLabel}>{label}</Text>
            <Text style={styles.tableValue}>{value}</Text>
          </View>
        ))}
      </View>
    );
  }
  return (
    <Text style={styles.subheading}>
      {block.nummer} {block.titel}
    </Text>
  );
}

function SectionPdf({ section, data, t }: { section: ContractSection; data: ContractData; t: Labels }) {
  return (
    <View wrap>
      <View style={styles.sectionDivider} />
      <Text style={styles.sectionHeading}>
        {section.nummer}. {section.titel}
      </Text>
      {section.nummer === "1" && (
        <DatenblockPdf
          rows={[
            [liegeplatz, t.liegeplatzLabel],
            [t.gaesteWert, t.gaesteLabel],
          ]}
        />
      )}
      {section.nummer === "2" && <DatenblockPdf rows={preisRows(data, t)} />}
      {section.body.map((block, i) => (
        <BlockPdf key={i} block={block} />
      ))}
    </View>
  );
}

export function ContractPdfDocument({
  data,
  ort,
  signatureDataUrl,
}: {
  data: ContractData;
  ort: string;
  signatureDataUrl: string;
}) {
  const t = labels[data.lang];
  const sections = buildSections(data);
  const heute = formatDate(new Date().toISOString().slice(0, 10), data.lang);

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.headRow} fixed>
          <Text style={styles.headLabel}>SHARED HORIZON</Text>
          <Text style={styles.headLabelMuted}>{data.vertragsnummer}</Text>
        </View>

        <Text style={styles.title}>{t.title}</Text>
        <Text style={styles.subtitle}>{t.subtitle}</Text>

        <View style={styles.eckdatenBox}>
          <Text
            style={
              data.mieter.firma
                ? styles.eckdatenName
                : [styles.eckdatenName, { marginBottom: 8 }]
            }
          >
            {data.mieter.name}
          </Text>
          {data.mieter.firma && (
            <Text style={styles.eckdatenFirma}>{data.mieter.firma}</Text>
          )}
          <View style={styles.eckdatenGrid}>
            <View style={styles.eckdatenItem}>
              <Text style={styles.eckdatenValue}>
                {formatDate(data.nutzung.beginnDatum, data.lang)} · {data.nutzung.beginnZeit} – {data.nutzung.endeZeit}
              </Text>
              <Text style={styles.eyebrow}>{t.nutzungszeit}</Text>
            </View>
            <View style={styles.eckdatenItem}>
              <Text style={styles.eckdatenValue}>
                {data.nutzung.art} · {data.nutzung.personen} {t.personenSuffix}
              </Text>
              <Text style={styles.eyebrow}>{t.nutzungsart}</Text>
            </View>
            <View style={styles.eckdatenItem}>
              <Text style={styles.eckdatenValue}>{formatEuro(data.preis.vereinbart)}</Text>
              <Text style={styles.eyebrow}>{t.vereinbarterPreis}</Text>
            </View>
            <View style={styles.eckdatenItem}>
              <Text style={styles.eckdatenValue}>
                {formatEuro(computeAnzahlung(data.preis.vereinbart))}
              </Text>
              <Text style={styles.eyebrow}>{t.anzahlungLabel}</Text>
            </View>
          </View>
        </View>

        <View style={styles.parteienRow}>
          <View style={styles.parteienBlock}>
            <Text style={styles.parteienNameLine}>
              {vermieterin.firma}, {t.vertretenDurch} {vermieterin.vertreten}
            </Text>
            <Text style={styles.parteienLine}>{vermieterin.anschrift}</Text>
            <Text style={styles.parteienLine}>
              {vermieterin.email} · {vermieterin.telefon}
            </Text>
            <Text style={[styles.eyebrow, { marginTop: 2 }]}>{t.vermieterinLabel}</Text>
          </View>
          <View style={styles.parteienBlock}>
            <Text style={styles.parteienNameLine}>{data.mieter.name}</Text>
            <Text style={styles.parteienLine}>{data.mieter.anschrift}</Text>
            <Text style={styles.parteienLine}>
              {data.mieter.email} · {data.mieter.telefon}
            </Text>
            <Text style={[styles.eyebrow, { marginTop: 2 }]}>{t.mieterin}</Text>
          </View>
        </View>

        {sections.map((section) => (
          <SectionPdf key={section.nummer} section={section} data={data} t={t} />
        ))}

        <View style={styles.signBlock} wrap={false}>
          <View style={styles.signColumn}>
            <Text style={styles.parteienLine}>
              {ort}, {heute}
            </Text>
            <Text style={styles.eyebrow}>
              {t.ortLabel} / {t.datumLabel}
            </Text>
          </View>
          <View style={styles.signColumn}>
            <View style={styles.signLine}>
              <Text style={[styles.parteienNameLine, { fontFamily: "Times-Italic" }]}>
                {vermieterin.vertreten}
              </Text>
            </View>
            <Text style={styles.eyebrow}>{t.vermieterinLabel}</Text>
          </View>
          <View style={styles.signColumn}>
            <View style={styles.signLine}>
              {signatureDataUrl && (
                // eslint-disable-next-line jsx-a11y/alt-text -- react-pdf's Image, not an HTML img; no alt prop exists
                <Image src={signatureDataUrl} style={styles.signImage} />
              )}
            </View>
            <Text style={styles.eyebrow}>{t.mieterin}</Text>
          </View>
        </View>

        <View style={styles.footer} fixed>
          <Text>KIVENT GMBH · BERLIN</Text>
          <Text>SHARED-HORIZON.DE</Text>
        </View>
      </Page>
    </Document>
  );
}

export async function renderContractPdfBlob(
  data: ContractData,
  ort: string,
  signatureDataUrl: string,
): Promise<Blob> {
  return pdf(
    <ContractPdfDocument data={data} ort={ort} signatureDataUrl={signatureDataUrl} />,
  ).toBlob();
}
