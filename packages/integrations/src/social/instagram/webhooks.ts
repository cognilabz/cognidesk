import { createHmac, timingSafeEqual } from "node:crypto";
import type {
  InstagramSignedWebhook,
  InstagramWebhookPayload,
  ParseInstagramWebhookOptions,
  ValidateInstagramWebhookSignatureInput,
  VerifyInstagramWebhookChallengeInput,
} from "./contracts.js";

export function validateInstagramWebhookSignature(input: ValidateInstagramWebhookSignatureInput) {
  const rawBody = Buffer.isBuffer(input.rawBody) ? input.rawBody : Buffer.from(input.rawBody, "utf8");
  const expected = `sha256=${createHmac("sha256", input.appSecret).update(rawBody).digest("hex")}`;
  const expectedBuffer = Buffer.from(expected);
  const actualBuffer = Buffer.from(input.signature);
  return expectedBuffer.length === actualBuffer.length
    && timingSafeEqual(expectedBuffer, actualBuffer);
}

export async function parseInstagramWebhook(
  request: Request,
  options: ParseInstagramWebhookOptions = {},
): Promise<InstagramSignedWebhook> {
  const rawBody = await request.text();
  const requireSignature = options.requireSignature ?? true;
  if (requireSignature) {
    if (!options.appSecret) throw new Error("Meta app secret is required to validate Instagram webhook signatures.");
    const signature = request.headers.get("x-hub-signature-256") ?? "";
    if (!validateInstagramWebhookSignature({ appSecret: options.appSecret, rawBody, signature })) {
      throw new Error("Instagram webhook signature validation failed.");
    }
  }
  const contentType = request.headers.get("content-type") ?? undefined;
  return {
    rawBody,
    ...(contentType ? { contentType } : {}),
    payload: rawBody ? JSON.parse(rawBody) as InstagramWebhookPayload : {},
  };
}

export function verifyInstagramWebhookChallenge(input: VerifyInstagramWebhookChallengeInput) {
  if (input.mode !== "subscribe") return undefined;
  if (!input.challenge) return undefined;
  return input.verifyToken === input.expectedVerifyToken ? input.challenge : undefined;
}
