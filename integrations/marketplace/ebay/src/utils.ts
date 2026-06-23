import { timingSafeEqual } from "node:crypto";
import type { EbayMarketplaceJsonObject } from "./contracts.js";

const EU_OR_UK_COUNTRIES = new Set([
  "AT", "BE", "BG", "HR", "CY", "CZ", "DK", "EE", "FI", "FR", "DE", "GR", "HU", "IE", "IT", "LV", "LT",
  "LU", "MT", "NL", "PL", "PT", "RO", "SK", "SI", "ES", "SE", "GB", "UK",
]);

export function isEuOrUkCountry(country: string | undefined) {
  return Boolean(country && EU_OR_UK_COUNTRIES.has(country.toUpperCase()));
}

export function withQuery(path: string, input: object) {
  const url = new URL(`https://example.test${path}`);
  for (const [key, value] of Object.entries(input)) {
    if (value === undefined || value === null) continue;
    if (Array.isArray(value)) {
      for (const item of value) url.searchParams.append(key, String(item));
      continue;
    }
    url.searchParams.set(key, String(value));
  }
  return `${url.pathname}${url.search}`;
}

export function constantTimeEqual(actual: string, expected: string) {
  const actualBytes = Buffer.from(actual);
  const expectedBytes = Buffer.from(expected);
  return actualBytes.length === expectedBytes.length && timingSafeEqual(actualBytes, expectedBytes);
}

export function readString(value: unknown, dottedPath: string): string | undefined {
  let current = value;
  for (const part of dottedPath.split(".")) {
    if (!current || typeof current !== "object" || !(part in current)) return undefined;
    current = (current as EbayMarketplaceJsonObject)[part];
  }
  return typeof current === "string" ? current : undefined;
}
