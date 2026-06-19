import { timingSafeEqual } from "node:crypto";
import type {
  FreshdeskWebhookEvent,
  ParseFreshdeskWebhookOptions,
  ValidateFreshdeskWebhookSecretInput,
} from "./contracts.js";

export async function parseFreshdeskWebhookRequest(
  request: Request,
  options: ParseFreshdeskWebhookOptions = {},
): Promise<FreshdeskWebhookEvent> {
  const rawBody = await request.text();
  const headerName = options.headerName ?? "x-cognidesk-freshdesk-secret";
  const requireSecret = options.requireSecret ?? true;
  if (requireSecret) {
    if (!options.webhookSecret) throw new Error("Freshdesk webhook shared secret is required.");
    if (!validateFreshdeskWebhookSecret({
      expectedSecret: options.webhookSecret,
      actualSecret: request.headers.get(headerName),
    })) {
      throw new Error("Freshdesk webhook shared-secret validation failed.");
    }
  }

  const contentType = request.headers.get("content-type") ?? undefined;
  const event = request.headers.get("x-freshdesk-event") ?? request.headers.get("x-cognidesk-event") ?? undefined;
  const parsed = contentType?.includes("application/json") && rawBody
    ? { json: JSON.parse(rawBody) as unknown }
    : {};
  return {
    rawBody,
    ...(contentType ? { contentType } : {}),
    ...(event ? { event } : {}),
    ...parsed,
  };
}

export function validateFreshdeskWebhookSecret(input: ValidateFreshdeskWebhookSecretInput) {
  if (!input.expectedSecret || !input.actualSecret) return false;
  const expectedBuffer = Buffer.from(input.expectedSecret);
  const actualBuffer = Buffer.from(input.actualSecret);
  return expectedBuffer.length === actualBuffer.length
    && timingSafeEqual(expectedBuffer, actualBuffer);
}
