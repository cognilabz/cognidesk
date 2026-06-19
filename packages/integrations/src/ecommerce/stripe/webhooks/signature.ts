import { createHmac, timingSafeEqual } from "node:crypto";
import type { StripeWebhookVerificationInput } from "../contracts.js";

export interface StripeSignatureVerificationResult {
  valid: boolean;
  timestamp?: number;
  signatures: string[];
  reason?: string;
}

export function validateStripeWebhookSignature(input: StripeWebhookVerificationInput): StripeSignatureVerificationResult {
  const parsed = parseStripeSignatureHeader(input.signatureHeader);
  if (!parsed.timestamp) return { valid: false, signatures: parsed.signatures, reason: "Stripe-Signature header is missing a timestamp." };
  if (parsed.signatures.length === 0) {
    return { valid: false, timestamp: parsed.timestamp, signatures: [], reason: "Stripe-Signature header is missing a v1 signature." };
  }
  const toleranceSeconds = input.toleranceSeconds ?? 300;
  const now = input.currentTimestamp ?? Math.floor(Date.now() / 1000);
  if (toleranceSeconds > 0 && Math.abs(now - parsed.timestamp) > toleranceSeconds) {
    return {
      valid: false,
      timestamp: parsed.timestamp,
      signatures: parsed.signatures,
      reason: "Stripe webhook timestamp is outside the configured tolerance.",
    };
  }

  const rawBody = Buffer.isBuffer(input.rawBody) ? input.rawBody.toString("utf8") : input.rawBody;
  const expected = createHmac("sha256", input.signingSecret)
    .update(`${parsed.timestamp}.${rawBody}`, "utf8")
    .digest("hex");
  const valid = parsed.signatures.some((signature) => safeEqualHex(expected, signature));
  return {
    valid,
    timestamp: parsed.timestamp,
    signatures: parsed.signatures,
    ...(valid ? {} : { reason: "No Stripe webhook signatures matched the expected payload signature." }),
  };
}

export function parseStripeSignatureHeader(signatureHeader: string) {
  const parts = signatureHeader.split(",").map((part) => part.trim()).filter(Boolean);
  let timestamp: number | undefined;
  const signatures: string[] = [];
  for (const part of parts) {
    const equalsIndex = part.indexOf("=");
    if (equalsIndex === -1) continue;
    const key = part.slice(0, equalsIndex);
    const value = part.slice(equalsIndex + 1);
    if (key === "t") {
      const parsedTimestamp = Number(value);
      if (Number.isFinite(parsedTimestamp)) timestamp = parsedTimestamp;
    }
    if (key === "v1" && value) signatures.push(value);
  }
  return { timestamp, signatures };
}

function safeEqualHex(expected: string, actual: string) {
  const expectedBuffer = Buffer.from(expected, "hex");
  const actualBuffer = Buffer.from(actual, "hex");
  return expectedBuffer.length === actualBuffer.length && timingSafeEqual(expectedBuffer, actualBuffer);
}
