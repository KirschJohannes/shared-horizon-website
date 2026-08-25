import type { ContractData } from "./types";

/** Base64url, UTF-8-sicher. Läuft nur im Browser (btoa/atob) — das Payload
 * steckt im URL-Fragment und wird dort ausschließlich clientseitig gelesen. */
export function encodePayload(data: ContractData): string {
  const json = JSON.stringify(data);
  const bytes = new TextEncoder().encode(json);
  let binary = "";
  bytes.forEach((b) => {
    binary += String.fromCharCode(b);
  });
  const base64 = btoa(binary);
  return base64.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

export function decodePayload(payload: string): ContractData {
  const base64 = payload.replace(/-/g, "+").replace(/_/g, "/");
  const padded = base64 + "=".repeat((4 - (base64.length % 4)) % 4);
  const binary = atob(padded);
  const bytes = Uint8Array.from(binary, (c) => c.charCodeAt(0));
  const json = new TextDecoder().decode(bytes);
  return JSON.parse(json) as ContractData;
}

export function buildVertragLink(origin: string, data: ContractData): string {
  return `${origin}/vertrag#${encodePayload(data)}`;
}
