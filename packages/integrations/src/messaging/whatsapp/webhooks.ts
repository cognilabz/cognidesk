import { createHmac, timingSafeEqual } from "node:crypto";
import type {
  ParseWhatsAppWebhookOptions,
  ValidateWhatsAppWebhookSignatureInput,
  VerifyWhatsAppWebhookChallengeInput,
  WhatsAppSignedWebhook,
  WhatsAppWebhookPayload,
} from "./contracts.js";

export function validateWhatsAppWebhookSignature(input: ValidateWhatsAppWebhookSignatureInput) {
  const rawBody = Buffer.isBuffer(input.rawBody) ? input.rawBody : Buffer.from(input.rawBody, "utf8");
  const expected = `sha256=${createHmac("sha256", input.appSecret).update(rawBody).digest("hex")}`;
  const expectedBuffer = Buffer.from(expected);
  const actualBuffer = Buffer.from(input.signature);
  return expectedBuffer.length === actualBuffer.length
    && timingSafeEqual(expectedBuffer, actualBuffer);
}

export async function parseWhatsAppWebhook(
  request: Request,
  options: ParseWhatsAppWebhookOptions = {},
): Promise<WhatsAppSignedWebhook> {
  const rawBody = await request.text();
  const requireSignature = options.requireSignature ?? true;
  if (requireSignature) {
    if (!options.appSecret) throw new Error("Meta app secret is required to validate WhatsApp webhook signatures.");
    const signature = request.headers.get("x-hub-signature-256") ?? "";
    if (!validateWhatsAppWebhookSignature({ appSecret: options.appSecret, rawBody, signature })) {
      throw new Error("WhatsApp webhook signature validation failed.");
    }
  }
  const contentType = request.headers.get("content-type") ?? undefined;
  return {
    rawBody,
    ...(contentType ? { contentType } : {}),
    payload: rawBody ? JSON.parse(rawBody) as WhatsAppWebhookPayload : {},
  };
}

export function verifyWhatsAppWebhookChallenge(input: VerifyWhatsAppWebhookChallengeInput) {
  if (input.mode !== "subscribe") return undefined;
  if (!input.challenge) return undefined;
  return input.verifyToken === input.expectedVerifyToken ? input.challenge : undefined;
}
