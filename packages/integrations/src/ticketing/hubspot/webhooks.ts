import { createHmac, timingSafeEqual } from "node:crypto";
import type {
  HubSpotSignatureInput,
  HubSpotSignatureValidationInput,
  HubSpotWebhookEvent,
  ParseHubSpotSignedRequestOptions,
} from "./contracts.js";

export function createHubSpotV3Signature(input: HubSpotSignatureInput) {
  const source = [
    input.method.toUpperCase(),
    normalizeHubSpotV3Uri(input.requestUri),
    input.rawBody ?? "",
    String(input.timestamp),
  ].join("");
  return createHmac("sha256", input.clientSecret).update(source, "utf8").digest("base64");
}

export function validateHubSpotV3Signature(input: HubSpotSignatureValidationInput) {
  const timestamp = Number(input.timestamp);
  if (!Number.isFinite(timestamp)) return false;
  if (input.maxAgeMs !== false) {
    const now = input.now ?? Date.now();
    const maxAgeMs = input.maxAgeMs ?? 300_000;
    if (Math.abs(now - timestamp) > maxAgeMs) return false;
  }

  const expected = createHubSpotV3Signature(input);
  return timingSafeStringEqual(expected, input.signature);
}

export async function parseHubSpotSignedRequest(
  request: Request,
  options: ParseHubSpotSignedRequestOptions,
) {
  const rawBody = await request.text();
  const signature = request.headers.get("x-hubspot-signature-v3");
  const timestamp = request.headers.get("x-hubspot-request-timestamp");
  if (!signature || !timestamp) {
    throw new Error("HubSpot v3 webhook signature or timestamp header is missing.");
  }
  const valid = validateHubSpotV3Signature({
    clientSecret: options.clientSecret,
    method: request.method,
    requestUri: options.publicUrl ?? request.url,
    rawBody,
    timestamp,
    ...(options.now !== undefined ? { now: options.now } : {}),
    ...(options.maxAgeMs !== undefined ? { maxAgeMs: options.maxAgeMs } : {}),
    signature,
  });
  if (!valid) {
    throw new Error("HubSpot v3 webhook signature validation failed.");
  }
  const json = rawBody ? JSON.parse(rawBody) as HubSpotWebhookEvent[] : [];
  if (!Array.isArray(json)) {
    throw new Error("HubSpot webhook payload must be an event array.");
  }
  return { events: json, rawBody, signature, timestamp };
}

export function parseHubSpotWebhookPayload(rawBody: string) {
  const json = rawBody ? JSON.parse(rawBody) as HubSpotWebhookEvent[] : [];
  if (!Array.isArray(json)) {
    throw new Error("HubSpot webhook payload must be an event array.");
  }
  return json;
}

const hubSpotV3DecodedCharacters: Array<[RegExp, string]> = [
  [/%3A/gi, ":"],
  [/%2F/gi, "/"],
  [/%3F/gi, "?"],
  [/%40/gi, "@"],
  [/%21/gi, "!"],
  [/%24/gi, "$"],
  [/%27/gi, "'"],
  [/%28/gi, "("],
  [/%29/gi, ")"],
  [/%2A/gi, "*"],
  [/%2C/gi, ","],
  [/%3B/gi, ";"],
];

function normalizeHubSpotV3Uri(uri: string) {
  return hubSpotV3DecodedCharacters.reduce(
    (current, [pattern, replacement]) => current.replace(pattern, replacement),
    uri,
  );
}

function timingSafeStringEqual(a: string, b: string) {
  const left = Buffer.from(a);
  const right = Buffer.from(b);
  if (left.length !== right.length) return false;
  return timingSafeEqual(left, right);
}
