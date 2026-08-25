"use client";

import { useEffect, useRef, useState } from "react";
import { Contract } from "@/components/vertrag/Contract";
import { HorizonRule } from "@/components/vertrag/HorizonRule";
import { Eyebrow } from "@/components/vertrag/Eyebrow";
import { Button } from "@/components/vertrag/Button";
import { SignaturePad, type SignaturePadHandle } from "@/components/vertrag/SignaturePad";
import { renderContractPdfBlob } from "@/components/vertrag/ContractPdf";
import { decodePayload } from "@/lib/vertrag/payload";
import { computeAnzahlung, formatEuro } from "@/lib/vertrag/price";
import { zahlungswege } from "@/lib/vertrag/config";
import type { ContractData } from "@/lib/vertrag/types";

const t = {
  de: {
    ortLabel: "Ort der Unterzeichnung",
    ortPlatzhalter: "Berlin",
    hintVorher: "Mit dem Finger auf der Linie unterschreiben",
    hintNachher: (ort: string) => `Unterschrieben in ${ort || "…"}, heute`,
    neuZeichnen: "Neu zeichnen",
    unterschriftLabel: "Unterschrift der Mieterin",
    absenden: "Vertrag absenden",
    absendenHinweis: "Eine Kopie geht an: ",
    wirdGesendet: "Wird gesendet …",
    fehler: "Der Vertrag konnte nicht versendet werden. Bitte erneut versuchen.",
    ungueltig: "Dieser Link ist ungültig oder unvollständig.",
    unterschrieben: "Unterschrieben",
    dank: "Vielen Dank! Der Vertrag ist unterschrieben. Eine Kopie liegt in Kürze in Ihrem Postfach:",
    anzahlungLabel: "Anzahlung, 50 % · sofort fällig",
    zahlungswegeLabel: "Zahlungswege",
    ueberweisung: "Überweisung",
    bar: "Bar",
    pdfOeffnen: "Vertrag als PDF öffnen",
  },
  en: {
    ortLabel: "Place of Signing",
    ortPlatzhalter: "Berlin",
    hintVorher: "Sign with your finger on the line",
    hintNachher: (ort: string) => `Signed in ${ort || "…"}, today`,
    neuZeichnen: "Clear",
    unterschriftLabel: "Signature of the Renter",
    absenden: "Submit Agreement",
    absendenHinweis: "A copy will be sent to: ",
    wirdGesendet: "Sending …",
    fehler: "The agreement could not be sent. Please try again.",
    ungueltig: "This link is invalid or incomplete.",
    unterschrieben: "Signed",
    dank: "Thank you! The agreement is signed. A copy will shortly be in your inbox:",
    anzahlungLabel: "Down payment, 50 % · due immediately",
    zahlungswegeLabel: "Payment methods",
    ueberweisung: "Bank transfer",
    bar: "Cash",
    pdfOeffnen: "Open agreement as PDF",
  },
};

export default function VertragPage() {
  const [data, setData] = useState<ContractData | null | "invalid">(null);
  const [ort, setOrt] = useState("");
  const [hasSignature, setHasSignature] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);
  const signatureRef = useRef<SignaturePadHandle>(null);

  // window.location.hash is a browser-only API and unavailable during SSR —
  // this can't be read during render without a hydration mismatch, so the
  // effect (and its setState calls) is the correct tool here.
  /* eslint-disable react-hooks/set-state-in-effect */
  useEffect(() => {
    const hash = window.location.hash.replace(/^#/, "");
    if (!hash) {
      setData("invalid");
      return;
    }
    try {
      setData(decodePayload(hash));
    } catch {
      setData("invalid");
    }
  }, []);
  /* eslint-enable react-hooks/set-state-in-effect */

  if (data === null) return null;

  if (data === "invalid") {
    return (
      <div className="vertrag-app flex min-h-screen items-center justify-center px-6 text-center text-navy">
        {t.de.ungueltig}
      </div>
    );
  }

  const tt = t[data.lang];

  async function handleSubmit() {
    const signatureDataUrl = signatureRef.current?.getDataUrl();
    if (!signatureDataUrl || data === "invalid" || data === null) return;
    setStatus("sending");
    try {
      const blob = await renderContractPdfBlob(data, ort, signatureDataUrl);
      const pdfBase64 = await blobToBase64(blob);
      const res = await fetch("/api/vertrag/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          pdfBase64,
          vertragsnummer: data.vertragsnummer,
          mieterName: data.mieter.name,
          mieterEmail: data.mieter.email,
          nutzungsbeginnDatum: data.nutzung.beginnDatum,
          lang: data.lang,
        }),
      });
      if (!res.ok) throw new Error("send failed");
      setPdfUrl(URL.createObjectURL(blob));
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    const anzahlung = computeAnzahlung(data.preis.vereinbart);
    return (
      <div className="vertrag-app flex min-h-screen justify-center bg-canvas px-4 py-8">
        <div className="w-full max-w-[390px] border border-stone bg-paper">
          <div className="flex flex-col gap-2.5 border-b border-stone px-[22px] pb-3 pt-4">
            <div className="flex items-baseline justify-between">
              <span className="text-[9px] tracking-[0.3em] text-navy">SHARED HORIZON</span>
              <span className="text-[9px] tracking-[0.22em] text-stone-500">
                {data.vertragsnummer}
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-6 px-[22px] py-8">
            <div className="flex flex-col gap-2">
              <h1 className="font-heading text-[34px] font-light text-navy">
                {tt.unterschrieben}
              </h1>
              <p className="text-[14px] leading-[1.7] text-ink">
                {tt.dank} {data.mieter.email}.
              </p>
            </div>

            <div className="flex flex-col gap-1 bg-cream px-5 py-5">
              <span className="font-heading text-[32px] text-navy">
                {formatEuro(anzahlung)}
              </span>
              <Eyebrow>{tt.anzahlungLabel}</Eyebrow>
            </div>

            <div className="flex flex-col gap-4">
              <Eyebrow tone="accent">{tt.zahlungswegeLabel}</Eyebrow>
              <div className="flex flex-col gap-4 text-[13px] leading-[1.6] text-ink">
                <div className="flex flex-col gap-1">
                  <span className="text-navy">{tt.ueberweisung}</span>
                  <span>{zahlungswege.bank.institut}</span>
                  <span>{zahlungswege.bank.kontoinhaber}</span>
                  <span>{zahlungswege.bank.iban || "IBAN wird nachgereicht"}</span>
                  <span>{data.vertragsnummer}</span>
                </div>
                <HorizonRule />
                <div className="flex flex-col gap-1">
                  <span className="text-navy">PayPal</span>
                  <span>{zahlungswege.paypal.empfaenger || "wird nachgereicht"}</span>
                </div>
                <HorizonRule />
                <div className="flex flex-col gap-1">
                  <span className="text-navy">{tt.bar}</span>
                  <span>{zahlungswege.bar}</span>
                </div>
              </div>
            </div>

            {pdfUrl && (
              <a href={pdfUrl} target="_blank" rel="noreferrer">
                <Button variant="outline" size="lg" className="w-full">
                  {tt.pdfOeffnen}
                </Button>
              </a>
            )}
          </div>
          <HorizonRule />
          <div className="flex items-center justify-between px-[22px] py-4 text-[9px] uppercase tracking-[0.24em] text-stone-500">
            <span>KIVENT GMBH · BERLIN</span>
            <span>SHARED-HORIZON.DE</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="vertrag-app flex min-h-screen justify-center bg-canvas px-4 py-8">
      <div className="flex w-full max-w-[390px] flex-col gap-6">
        <Contract data={data} />

        <div className="flex flex-col gap-4 border border-stone bg-paper px-[22px] py-6">
          <label className="flex flex-col gap-1.5">
            <input
              type="text"
              placeholder={tt.ortPlatzhalter}
              value={ort}
              onChange={(e) => setOrt(e.target.value)}
              className="w-full border border-stone bg-paper px-[13px] py-[11px] text-[14px] text-navy focus:border-brass"
            />
            <span className="text-[10px] uppercase tracking-[0.26em] text-stone-500">
              {tt.ortLabel}
            </span>
          </label>

          <div className="flex flex-col gap-2 border border-stone bg-paper px-4 pb-2.5 pt-3.5">
            <SignaturePad
              ref={signatureRef}
              onChange={(value) => setHasSignature(value)}
            />
            <HorizonRule />
            <div className="flex items-center justify-between pt-0.5">
              <span className="text-[11px] text-stone-500">
                {hasSignature ? tt.hintNachher(ort) : tt.hintVorher}
              </span>
              <button
                type="button"
                onClick={() => {
                  signatureRef.current?.clear();
                  setHasSignature(false);
                }}
                className="text-[11px] uppercase tracking-[0.18em] text-brass-deep hover:text-navy"
              >
                {tt.neuZeichnen}
              </button>
            </div>
          </div>
          <span className="text-[10px] uppercase tracking-[0.26em] text-stone-500">
            {tt.unterschriftLabel} · {data.mieter.name}
          </span>

          <Button
            variant="primary"
            size="lg"
            disabled={!hasSignature || status === "sending"}
            onClick={handleSubmit}
            className="w-full"
          >
            {status === "sending" ? tt.wirdGesendet : tt.absenden}
          </Button>
          <span className="text-[11px] text-stone-500">
            {tt.absendenHinweis}
            {data.mieter.email}
          </span>
          {status === "error" && (
            <span className="text-[11px] text-red-700">{tt.fehler}</span>
          )}
        </div>
      </div>
    </div>
  );
}

function blobToBase64(blob: Blob): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const result = reader.result as string;
      resolve(result.split(",")[1] ?? "");
    };
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
}
