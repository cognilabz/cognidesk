import { createHmac, timingSafeEqual } from "node:crypto";
import type {
  MessengerChallengeVerificationInput,
  MessengerWebhookPayload,
  ParseMessengerWebhookOptions,
} from "./contracts.js";

export function verifyMessengerWebhookChallenge(input: MessengerChallengeVerificationInput): string | undefined {
  if (input.mode === "subscribe" && input.token === input.expectedVerifyToken) {
    return input.challenge ?? "";
  }
  return undefined;
}

export async function parseMessengerWebhook(
  request: Request,
  options: ParseMessengerWebhookOptions = {},
): Promise<MessengerWebhookPayload> {
  const rawBody = options.rawBody ?? await request.text();
  const requireSignature = options.requireSignature ?? true;
  if (requireSignature) {
    if (!options.appSecret) throw new Error("Meta app secret is required to validate Messenger webhooks.");
    const signature = request.headers.get("x-hub-signature-256") ?? "";
    if (!validateMessengerWebhookSignature({ rawBody, signature, appSecret: options.appSecret })) {
      throw new Error("Messenger webhook signature validation failed.");
    }
  }
  return JSON.parse(rawBody) as MessengerWebhookPayload;
}

export function validateMessengerWebhookSignature(input: {
  rawBody: string;
  signature: string;
  appSecret: string;
}): boolean {
  const expected = `sha256=${createHmac("sha256", input.appSecret).update(input.rawBody).digest("hex")}`;
  const expectedBuffer = Buffer.from(expected);
  const actualBuffer = Buffer.from(input.signature);
  return expectedBuffer.length === actualBuffer.length && timingSafeEqual(expectedBuffer, actualBuffer);
}
