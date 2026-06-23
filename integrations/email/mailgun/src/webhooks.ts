import { createHmac, timingSafeEqual } from "node:crypto";

export interface MailgunWebhookSignatureInput {
  timestamp: string;
  token: string;
  signature: string;
  signingKey: string;
}

export function verifyMailgunWebhookSignature(input: MailgunWebhookSignatureInput): boolean {
  const expected = createHmac("sha256", input.signingKey)
    .update(`${input.timestamp}${input.token}`)
    .digest("hex");
  const expectedBuffer = Buffer.from(expected, "hex");
  const actualBuffer = Buffer.from(input.signature, "hex");
  return expectedBuffer.length === actualBuffer.length && timingSafeEqual(expectedBuffer, actualBuffer);
}

export async function parseMailgunWebhook(request: Request, options: {
  signingKey?: string;
  requireSignature?: boolean;
} = {}) {
  const parsed = await request.json();
  if (!isRecord(parsed)) {
    if (options.requireSignature) throw new Error("Mailgun webhook payload must be a JSON object with signature data.");
    return { payload: parsed, verified: false };
  }
  const payload = parsed;
  const signature = payload.signature;
  if (isRecord(signature)) {
    const verified = typeof options.signingKey === "string"
      && typeof signature.timestamp === "string"
      && typeof signature.token === "string"
      && typeof signature.signature === "string"
      && verifyMailgunWebhookSignature({
        timestamp: signature.timestamp,
        token: signature.token,
        signature: signature.signature,
        signingKey: options.signingKey,
      });
    if (options.requireSignature && !verified) throw new Error("Mailgun webhook signature verification failed.");
    return { payload, verified };
  }
  if (options.requireSignature) throw new Error("Mailgun webhook signature is required.");
  return { payload, verified: false };
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}
