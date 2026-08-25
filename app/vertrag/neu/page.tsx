"use client";

import { useRef, useState } from "react";
import { Contract } from "@/components/vertrag/Contract";
import { Eyebrow } from "@/components/vertrag/Eyebrow";
import { Button } from "@/components/vertrag/Button";
import { FormField, fieldClassName } from "@/components/vertrag/FormField";
import { HorizonRule } from "@/components/vertrag/HorizonRule";
import type { ContractData, Ctype, Lang } from "@/lib/vertrag/types";
import {
  computeVereinbarterPreis,
  formatEuro,
  formatEuroPlain,
  parseEuroInput,
} from "@/lib/vertrag/price";
import { formatDate } from "@/lib/vertrag/format";
import { buildVertragLink } from "@/lib/vertrag/payload";
import { generateVertragsnummer } from "@/lib/vertrag/vertragsnummer";
import { firmenfeldNutzungsarten, nutzungsartOptionen } from "@/lib/vertrag/config";

function Segmented<T extends string>({
  value,
  onChange,
  options,
}: {
  value: T;
  onChange: (value: T) => void;
  options: { value: T; label: string }[];
}) {
  return (
    <div className="flex border border-stone">
      {options.map((opt) => (
        <button
          key={opt.value}
          type="button"
          onClick={() => onChange(opt.value)}
          className={`flex-1 px-3 py-2 text-[11px] uppercase tracking-[0.16em] transition-colors ${
            value === opt.value
              ? "bg-navy text-cream"
              : "bg-transparent text-navy-600 hover:text-navy"
          }`}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}

export default function NeuPage() {
  const [lang, setLang] = useState<Lang>("de");
  const [ctype, setCtype] = useState<Ctype>("standard");

  const [name, setName] = useState("");
  const [firma, setFirma] = useState("");
  const [anschrift, setAnschrift] = useState("");
  const [email, setEmail] = useState("");
  const [telefon, setTelefon] = useState("");

  const [beginnDatum, setBeginnDatum] = useState("");
  const [beginnZeit, setBeginnZeit] = useState("");
  const [endeDatum, setEndeDatum] = useState("");
  const [endeZeit, setEndeZeit] = useState("");
  const [nutzungsart, setNutzungsart] = useState("");
  const [personen, setPersonen] = useState("");

  const [mietpreisInput, setMietpreisInput] = useState("");
  const [regulaerInput, setRegulaerInput] = useState("");
  const [nachlassInput, setNachlassInput] = useState("");
  const [vereinbartInput, setVereinbartInput] = useState("");
  const [vereinbartTouched, setVereinbartTouched] = useState(false);

  const [sonder, setSonder] = useState("");

  const [showPreview, setShowPreview] = useState(false);
  const [previewVertragsnummer] = useState(() => generateVertragsnummer());
  const [generatedLink, setGeneratedLink] = useState<string | null>(null);
  const [copyState, setCopyState] = useState<"idle" | "copied">("idle");
  const lastFocused = useRef<HTMLElement | null>(null);

  const regulaer = parseEuroInput(regulaerInput);
  const nachlass = parseEuroInput(nachlassInput);
  const autoVereinbartInput = formatEuroPlain(
    computeVereinbarterPreis(regulaer, nachlass),
  );
  const vereinbartDisplay = vereinbartTouched
    ? vereinbartInput
    : autoVereinbartInput;

  function buildContractData(vertragsnummer: string): ContractData {
    const mietpreis = parseEuroInput(mietpreisInput);
    const regulaer = parseEuroInput(regulaerInput);
    const nachlass = parseEuroInput(nachlassInput);
    const vereinbart =
      ctype === "standard"
        ? mietpreis
        : parseEuroInput(vereinbartDisplay);
    return {
      lang,
      ctype,
      vertragsnummer,
      mieter: {
        name,
        firma: firmenfeldNutzungsarten.includes(nutzungsart) && firma.trim() ? firma : undefined,
        anschrift,
        email,
        telefon,
      },
      nutzung: {
        beginnDatum,
        beginnZeit,
        endeDatum,
        endeZeit,
        art: nutzungsart,
        personen: Number(personen) || 0,
      },
      preis:
        ctype === "standard"
          ? { mietpreis, vereinbart }
          : { regulaer, nachlass, vereinbart },
      sonder: sonder.trim() ? sonder : undefined,
    };
  }

  const previewData = buildContractData(previewVertragsnummer);

  function openPreview() {
    lastFocused.current = document.activeElement as HTMLElement | null;
    setShowPreview(true);
  }

  function closePreview() {
    setShowPreview(false);
    lastFocused.current?.focus();
  }

  function handleErzeugen() {
    const vertragsnummer = generateVertragsnummer();
    const data = buildContractData(vertragsnummer);
    const link = buildVertragLink(window.location.origin, data);
    setGeneratedLink(link);
    setCopyState("idle");
  }

  async function handleKopieren() {
    if (!generatedLink) return;
    await navigator.clipboard.writeText(generatedLink);
    setCopyState("copied");
    setTimeout(() => setCopyState("idle"), 2000);
  }

  const vereinbart =
    ctype === "standard"
      ? parseEuroInput(mietpreisInput)
      : parseEuroInput(vereinbartDisplay);

  return (
    <div className="vertrag-app flex min-h-screen justify-center bg-canvas px-6 py-10">
      <div className="w-full max-w-[820px] border border-stone bg-paper">
        <div className="flex items-baseline justify-between px-10 pb-[18px] pt-[26px]">
          <span className="text-[11px] tracking-[0.3em] text-navy">
            SHARED HORIZON
          </span>
          <span className="text-[9px] tracking-[0.22em] text-stone-500">
            {previewVertragsnummer}
          </span>
        </div>
        <HorizonRule />

        <div className="grid grid-cols-2 gap-8 px-10 py-6">
          <div className="flex flex-col gap-2">
            <Segmented
              value={lang}
              onChange={setLang}
              options={[
                { value: "de", label: "Deutsch" },
                { value: "en", label: "English" },
              ]}
            />
            <Eyebrow>Vertragssprache</Eyebrow>
          </div>
          <div className="flex flex-col gap-2">
            <Segmented
              value={ctype}
              onChange={setCtype}
              options={[
                { value: "standard", label: "Standard" },
                { value: "influencer", label: "Influencer" },
              ]}
            />
            <Eyebrow>Vertragsart</Eyebrow>
          </div>
        </div>

        <div className="mx-10 flex flex-col gap-4 bg-cream px-[26px] py-[22px]">
          <div className="grid grid-cols-4 gap-5">
            <div className="flex flex-col gap-1">
              <span className="font-heading text-[19px] text-navy">
                {name || "—"}
              </span>
              {firmenfeldNutzungsarten.includes(nutzungsart) && firma && (
                <span className="text-[12px] text-navy-600">{firma}</span>
              )}
              <Eyebrow>Mieterin</Eyebrow>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-heading text-[19px] text-navy">
                {beginnDatum ? formatDate(beginnDatum, "de") : "—"}
                {beginnZeit || endeZeit ? ` · ${beginnZeit}–${endeZeit}` : ""}
              </span>
              <Eyebrow>Nutzungszeit</Eyebrow>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-heading text-[19px] text-navy">
                {nutzungsart || "—"}
                {personen ? ` · ${personen} P.` : ""}
              </span>
              <Eyebrow>Nutzungsart</Eyebrow>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-heading text-[19px] text-navy">
                {formatEuro(vereinbart)}
              </span>
              <Eyebrow>Vereinbarter Preis</Eyebrow>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-9 px-10 py-8">
          <div className="flex flex-col gap-4">
            <Eyebrow tone="accent">01 · Termin und Nutzung</Eyebrow>
            <div className="grid grid-cols-[1.1fr_0.7fr_1.1fr_0.7fr] gap-4">
              <FormField label="Beginn · Datum">
                <input
                  type="date"
                  className={fieldClassName}
                  value={beginnDatum}
                  onChange={(e) => setBeginnDatum(e.target.value)}
                />
              </FormField>
              <FormField label="Uhrzeit">
                <input
                  type="time"
                  className={fieldClassName}
                  value={beginnZeit}
                  onChange={(e) => setBeginnZeit(e.target.value)}
                />
              </FormField>
              <FormField label="Ende · Datum">
                <input
                  type="date"
                  className={fieldClassName}
                  value={endeDatum}
                  onChange={(e) => setEndeDatum(e.target.value)}
                />
              </FormField>
              <FormField label="Uhrzeit">
                <input
                  type="time"
                  className={fieldClassName}
                  value={endeZeit}
                  onChange={(e) => setEndeZeit(e.target.value)}
                />
              </FormField>
            </div>
            <div className="grid grid-cols-[2fr_1fr] gap-4">
              <FormField label="Nutzungsart">
                <select
                  className={fieldClassName}
                  value={nutzungsart}
                  onChange={(e) => setNutzungsart(e.target.value)}
                >
                  <option value="" disabled>
                    Bitte wählen
                  </option>
                  {nutzungsartOptionen.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </FormField>
              <FormField label="Personen, maximal">
                <input
                  type="number"
                  min={0}
                  className={fieldClassName}
                  value={personen}
                  onChange={(e) => setPersonen(e.target.value)}
                />
              </FormField>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <Eyebrow tone="accent">02 · Mieterin</Eyebrow>
            <FormField label="Name, vollständig">
              <input
                type="text"
                className={fieldClassName}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </FormField>
            {firmenfeldNutzungsarten.includes(nutzungsart) && (
              <FormField label="Firma · Rechnungsempfängerin, optional">
                <input
                  type="text"
                  placeholder="Nordlicht Studios GmbH"
                  className={fieldClassName}
                  value={firma}
                  onChange={(e) => setFirma(e.target.value)}
                />
              </FormField>
            )}
            <FormField label="Anschrift">
              <input
                type="text"
                className={fieldClassName}
                value={anschrift}
                onChange={(e) => setAnschrift(e.target.value)}
              />
            </FormField>
            <div className="grid grid-cols-[1.3fr_1fr] gap-4">
              <FormField label="E-Mail">
                <input
                  type="email"
                  className={fieldClassName}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormField>
              <FormField label="Telefon">
                <input
                  type="tel"
                  className={fieldClassName}
                  value={telefon}
                  onChange={(e) => setTelefon(e.target.value)}
                />
              </FormField>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <Eyebrow tone="accent">03 · Preis</Eyebrow>
            {ctype === "standard" ? (
              <FormField label="Mietpreis, brutto (€)">
                <input
                  type="text"
                  inputMode="decimal"
                  className={fieldClassName}
                  value={mietpreisInput}
                  onChange={(e) => setMietpreisInput(e.target.value)}
                />
              </FormField>
            ) : (
              <div className="grid grid-cols-3 gap-4">
                <FormField label="Regulärer Preis (€)">
                  <input
                    type="text"
                    inputMode="decimal"
                    className={fieldClassName}
                    value={regulaerInput}
                    onChange={(e) => setRegulaerInput(e.target.value)}
                  />
                </FormField>
                <FormField label="Preisnachlass Influencer-Kooperation (€)">
                  <input
                    type="text"
                    inputMode="decimal"
                    className={fieldClassName}
                    value={nachlassInput}
                    onChange={(e) => setNachlassInput(e.target.value)}
                  />
                </FormField>
                <FormField label="Vereinbarter Preis (€)">
                  <input
                    type="text"
                    inputMode="decimal"
                    className={`${fieldClassName} bg-cream text-brass-deep`}
                    value={vereinbartDisplay}
                    onChange={(e) => {
                      setVereinbartInput(e.target.value);
                      setVereinbartTouched(true);
                    }}
                  />
                </FormField>
              </div>
            )}
          </div>

          <div className="flex flex-col gap-4">
            <Eyebrow tone="accent">04 · Sondervereinbarungen</Eyebrow>
            <FormField label="Wird in Abschnitt 9 des Vertrages aufgenommen">
              <textarea
                rows={4}
                className={fieldClassName}
                value={sonder}
                onChange={(e) => setSonder(e.target.value)}
              />
            </FormField>
          </div>
        </div>

        <HorizonRule />
        <div className="flex items-center justify-between px-10 py-5">
          <button
            type="button"
            onClick={openPreview}
            className="text-[12px] uppercase tracking-[0.22em] text-brass-deep underline decoration-brass-soft underline-offset-4 hover:text-navy hover:decoration-brass-600"
          >
            Vorschau ansehen
          </button>
          <Button variant="primary" onClick={handleErzeugen} type="button">
            Vertrag erzeugen
          </Button>
        </div>
        {generatedLink && (
          <div className="border-t border-stone bg-cream px-10 py-6">
            <div className="flex flex-col gap-3">
              <Eyebrow>Link zum Vertrag</Eyebrow>
              <div className="flex items-stretch gap-3">
                <div className="flex-1 overflow-x-auto whitespace-nowrap border border-stone bg-paper px-4 py-3 font-mono text-[12px] text-navy">
                  {generatedLink}
                </div>
                <Button
                  variant="outline"
                  onClick={handleKopieren}
                  type="button"
                  className="shrink-0"
                >
                  {copyState === "copied" ? "Kopiert" : "Link kopieren"}
                </Button>
              </div>
              <a
                href={`whatsapp://send?text=${encodeURIComponent(generatedLink)}`}
              >
                <Button variant="primary" type="button" className="w-full">
                  Per WhatsApp teilen
                </Button>
              </a>
            </div>
          </div>
        )}

        <HorizonRule />
        <div className="flex items-center justify-between px-10 py-4 text-[9px] uppercase tracking-[0.24em] text-stone-500">
          <span>KIVENT GMBH · BERLIN</span>
          <span>SHARED-HORIZON.DE</span>
        </div>
      </div>

      {showPreview && (
        <div className="fixed inset-0 z-50 flex flex-col overflow-y-auto bg-canvas">
          <div className="flex justify-end px-6 py-4">
            <button
              type="button"
              onClick={closePreview}
              className="text-[11px] uppercase tracking-[0.22em] text-navy underline decoration-stone underline-offset-4 hover:decoration-brass"
            >
              Schließen
            </button>
          </div>
          <div className="flex-1 px-6 pb-16">
            <Contract data={previewData} maxWidth="800px" />
          </div>
        </div>
      )}
    </div>
  );
}
