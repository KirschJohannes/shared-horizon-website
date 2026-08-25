"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { ContractData } from "@/lib/vertrag/types";
import type { ContentBlock, ContractSection } from "@/content/vertrag/types";
import { getGemeinsamSectionsDe } from "@/content/vertrag/de/gemeinsam";
import { paragraf2StandardDe } from "@/content/vertrag/de/paragraf2-standard";
import { paragraf2InfluencerDe } from "@/content/vertrag/de/paragraf2-influencer";
import { getGemeinsamSectionsEn } from "@/content/vertrag/en/gemeinsam";
import { paragraf2StandardEn } from "@/content/vertrag/en/paragraf2-standard";
import { paragraf2InfluencerEn } from "@/content/vertrag/en/paragraf2-influencer";
import { HorizonRule } from "./HorizonRule";
import { Eyebrow } from "./Eyebrow";
import { formatDate } from "@/lib/vertrag/format";
import { computeAnzahlung, formatEuro } from "@/lib/vertrag/price";
import {
  hausboot,
  kaution,
  liegeplatz,
  maxUebernachtungsgaeste,
  vermieterin,
} from "@/lib/vertrag/config";

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
  von: string;
  mietpreisBrutto: string;
  regulaererPreis: string;
  preisnachlass: string;
  vereinbarterMietpreis: string;
  anzahlungBeiUnterzeichnung: string;
  restbetragBeiNutzungsbeginn: string;
  kautionLabel: string;
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
    von: "von",
    mietpreisBrutto: "Mietpreis, brutto",
    regulaererPreis: "Regulärer Mietpreis",
    preisnachlass: "Preisnachlass Kooperation",
    vereinbarterMietpreis: "Vereinbarter Mietpreis",
    anzahlungBeiUnterzeichnung: "Anzahlung bei Unterzeichnung",
    restbetragBeiNutzungsbeginn: "Restbetrag bei Nutzungsbeginn",
    kautionLabel: "Kaution",
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
    von: "of",
    mietpreisBrutto: "Rental Price, gross",
    regulaererPreis: "Regular Rental Price",
    preisnachlass: "Cooperation Discount",
    vereinbarterMietpreis: "Agreed Rental Price",
    anzahlungBeiUnterzeichnung: "Down Payment upon Signing",
    restbetragBeiNutzungsbeginn: "Remaining Balance upon Start of Use",
    kautionLabel: "Security Deposit",
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

function DataPair({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1">
      <span className="font-heading text-[17px] leading-[1.25] text-navy whitespace-pre-line">
        {value}
      </span>
      <Eyebrow>{label}</Eyebrow>
    </div>
  );
}

function DatenblockBox({ rows }: { rows: [string, string][] }) {
  return (
    <div className="flex flex-col gap-2.5 border border-stone bg-white px-4 py-3.5 text-[13px]">
      {rows.map(([value, label]) => (
        <div key={label} className="flex flex-col gap-0.5">
          <span className="text-navy">{value}</span>
          <Eyebrow>{label}</Eyebrow>
        </div>
      ))}
    </div>
  );
}

function Block({ block }: { block: ContentBlock }) {
  if (block.type === "p") {
    return <div>{block.text}</div>;
  }
  if (block.type === "list") {
    return (
      <div className="flex flex-col gap-2">
        {block.items.map((item, i) => (
          <div key={i} className="flex gap-2.5">
            <span className="text-brass">—</span>
            <span>{item}</span>
          </div>
        ))}
      </div>
    );
  }
  if (block.type === "table") {
    return (
      <div className="flex flex-col gap-2">
        {block.rows.map(([label, value]) => (
          <div key={label} className="flex items-baseline justify-between gap-4">
            <span>{label}</span>
            <span className="shrink-0 text-brass-deep">{value}</span>
          </div>
        ))}
      </div>
    );
  }
  return (
    <div className="pt-1 text-[13px] font-normal tracking-[0.08em] text-navy">
      {block.nummer} {block.titel}
    </div>
  );
}

function SectionBlock({
  section,
  index,
  data,
  t,
  innerRef,
}: {
  section: ContractSection;
  index: number;
  data: ContractData;
  t: Labels;
  innerRef: (el: HTMLElement | null) => void;
}) {
  return (
    <section ref={innerRef} data-index={index} className="scroll-mt-32">
      <div className="flex flex-col gap-2 pt-1.5">
        <HorizonRule />
        <div className="pt-1.5 font-normal tracking-[0.1em] text-navy">
          {section.nummer}. {section.titel}
        </div>
      </div>
      <div className="flex flex-col gap-[18px] pt-[18px]">
        {section.nummer === "1" && (
          <DatenblockBox
            rows={[
              [liegeplatz, t.liegeplatzLabel],
              [t.gaesteWert, t.gaesteLabel],
            ]}
          />
        )}
        {section.nummer === "2" && <DatenblockBox rows={preisRows(data, t)} />}
        {section.body.map((block, i) => (
          <Block key={i} block={block} />
        ))}
      </div>
    </section>
  );
}

export function Contract({
  data,
  maxWidth = "390px",
}: {
  data: ContractData;
  /** Tailwind arbitrary max-width, z. B. "390px" (Mieter-Handyansicht) oder "800px" (Desktop-Vorschau). */
  maxWidth?: string;
}) {
  const t = labels[data.lang];
  const sections = useMemo(() => buildSections(data), [data]);
  const total = sections.length;
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.getAttribute("data-index"));
            setActiveIndex(idx);
          }
        });
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: 0 },
    );
    sectionRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, [sections]);

  const active = sections[Math.min(activeIndex, total - 1)];

  return (
    <div
      className="mx-auto flex w-full flex-col border border-stone bg-paper"
      style={{ maxWidth }}
    >
      <div className="sticky top-0 z-10 flex flex-col gap-2.5 border-b border-stone bg-paper px-[22px] pb-3 pt-4">
        <div className="flex items-baseline justify-between">
          <span className="text-[9px] tracking-[0.3em] text-navy">
            SHARED HORIZON
          </span>
          <span className="text-[9px] tracking-[0.22em] text-stone-500">
            {data.vertragsnummer}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-[10px] uppercase tracking-[0.18em] text-brass-deep">
            {active.nummer} · {active.titel}
          </span>
          <span className="text-[10px] tracking-[0.14em] text-stone-500">
            {activeIndex + 1} {t.von} {total}
          </span>
        </div>
        <div className="relative h-px w-full bg-stone">
          <div
            className="absolute left-0 top-0 h-px bg-brass transition-[width] duration-200"
            style={{ width: `${((activeIndex + 1) / total) * 100}%` }}
          />
        </div>
      </div>

      <div className="flex flex-col gap-5 px-[22px] pb-8 pt-6">
        <div className="flex flex-col gap-1">
          <h1 className="font-heading text-[30px] font-light leading-[1.15] tracking-[0.03em] text-navy">
            {t.title}
          </h1>
          <span className="font-heading text-[15px] italic text-navy-600">
            {t.subtitle}
          </span>
        </div>

        <div className="flex flex-col gap-4 bg-cream px-5 py-5">
          <div className="flex flex-col gap-1">
            <span className="font-heading text-[20px] text-navy">
              {data.mieter.name}
            </span>
            {data.mieter.firma && (
              <span className="text-[12px] text-navy-600">{data.mieter.firma}</span>
            )}
            <Eyebrow>{t.mieterin}</Eyebrow>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <DataPair
              label={t.nutzungszeit}
              value={`${formatDate(data.nutzung.beginnDatum, data.lang)}\n${data.nutzung.beginnZeit} – ${data.nutzung.endeZeit}`}
            />
            <DataPair
              label={t.nutzungsart}
              value={`${data.nutzung.art}\n${data.nutzung.personen} ${t.personenSuffix}`}
            />
            <DataPair
              label={t.vereinbarterPreis}
              value={formatEuro(data.preis.vereinbart)}
            />
            <DataPair
              label={t.anzahlungLabel}
              value={formatEuro(computeAnzahlung(data.preis.vereinbart))}
            />
          </div>
        </div>

        <div className="flex flex-col gap-4 text-[13px] leading-[1.7] text-ink">
          <div className="flex flex-col gap-1">
            <span className="text-navy">
              {vermieterin.firma}, {t.vertretenDurch} {vermieterin.vertreten}
            </span>
            <span>{vermieterin.anschrift}</span>
            <span>
              {vermieterin.email} · {vermieterin.telefon}
            </span>
            <Eyebrow className="pt-1">{t.vermieterinLabel}</Eyebrow>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-navy">{data.mieter.name}</span>
            <span>{data.mieter.anschrift}</span>
            <span>
              {data.mieter.email} · {data.mieter.telefon}
            </span>
            <Eyebrow className="pt-1">{t.mieterin}</Eyebrow>
          </div>
        </div>

        <div className="flex flex-col gap-[18px] text-[14px] leading-[1.75] text-ink">
          {sections.map((section, idx) => (
            <SectionBlock
              key={section.nummer}
              section={section}
              index={idx}
              data={data}
              t={t}
              innerRef={(el) => {
                sectionRefs.current[idx] = el;
              }}
            />
          ))}
        </div>
      </div>

      <HorizonRule />
      <div className="flex items-center justify-between px-[22px] py-4 text-[9px] uppercase tracking-[0.24em] text-stone-500">
        <span>KIVENT GMBH · BERLIN</span>
        <span>SHARED-HORIZON.DE</span>
      </div>
    </div>
  );
}
