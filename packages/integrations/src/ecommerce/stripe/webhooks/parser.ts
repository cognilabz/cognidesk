import type {
  StripeEventResource,
  StripeWebhookEvent,
  StripeWebhookParseOptions,
} from "../contracts.js";
import {
  parseStripeSignatureHeader,
  validateStripeWebhookSignature,
  type StripeSignatureVerificationResult,
} from "./signature.js";

export async function parseStripeWebhook(
  request: Request,
  options: StripeWebhookParseOptions = {},
): Promise<StripeWebhookEvent> {
  const rawBody = await request.text();
  const signatureHeader = request.headers.get("stripe-signature") ?? "";
  const requireSignature = options.requireSignature ?? true;
  let verification: StripeSignatureVerificationResult | undefined;
  if (requireSignature) {
    if (!options.signingSecret) throw new Error("Stripe webhook signing secret is required to validate webhook signatures.");
    verification = validateStripeWebhookSignature({
      signingSecret: options.signingSecret,
      rawBody,
      signatureHeader,
      toleranceSeconds: options.toleranceSeconds,
      currentTimestamp: options.currentTimestamp,
    });
    if (!verification.valid) throw new Error(verification.reason ?? "Stripe webhook signature validation failed.");
  }
  const event = rawBody ? JSON.parse(rawBody) as StripeEventResource : {};
  const parsedHeader = parseStripeSignatureHeader(signatureHeader);
  const timestamp = verification?.timestamp ?? parsedHeader.timestamp;
  return {
    rawBody,
    ...(timestamp === undefined ? {} : { timestamp }),
    signatures: verification?.signatures ?? parsedHeader.signatures,
    event,
  };
}
