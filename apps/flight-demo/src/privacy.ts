import type { RuntimePrivacySettings } from "@cognidesk/core";

export type FlightPrivacyConsent = "consent" | "no";

export const flightDemoPrivacyConsentStorageKey = "cognidesk.flightDemo.privacyConsent.v1";

export const flightDemoPrivacyMaskRules: NonNullable<RuntimePrivacySettings["masks"]> = [
  {
    name: "email",
    pattern: "[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,}",
    flags: "gi",
    replacement: "[email]",
  },
  {
    name: "phone",
    pattern: "(^|[^A-Z0-9])(\\+?\\d[\\d ().-]{6,}\\d)(?=$|[^A-Z0-9])",
    flags: "gi",
    replacement: "$1[phone]",
  },
  {
    name: "booking",
    pattern: "\\bCD-[A-Z]{2}\\d{3}-\\d{4}\\b",
    flags: "gi",
    replacement: "[booking]",
  },
];

export function parseFlightPrivacyConsent(value: unknown): FlightPrivacyConsent | null {
  return value === "consent" || value === "no" ? value : null;
}

export function createFlightDemoPrivacySettings(consent: FlightPrivacyConsent): RuntimePrivacySettings | undefined {
  if (consent === "consent") return undefined;
  return {
    traceContent: "none",
    customerRelationVisibility: "none",
    masks: flightDemoPrivacyMaskRules.map((rule) => ({ ...rule })),
  };
}
