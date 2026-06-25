import type { FreshdeskJsonObject } from "./contracts.js";

export interface FreshdeskWebhookOptions {
  webhookSecret?: string;
  headerName?: string;
}

export function validateFreshdeskWebhookSecret(headers: Headers, options: FreshdeskWebhookOptions = {}): boolean {
  if (!options.webhookSecret) return false;
  const headerName = options.headerName ?? "x-cognidesk-freshdesk-webhook-secret";
  return headers.get(headerName) === options.webhookSecret;
}

export async function parseFreshdeskWebhookRequest(request: Request, options: FreshdeskWebhookOptions = {}) {
  if (!validateFreshdeskWebhookSecret(request.headers, options)) {
    throw new Error("Freshdesk webhook shared secret mismatch.");
  }
  const payload = await request.json();
  if (payload === null || Array.isArray(payload) || typeof payload !== "object") {
    throw new Error("Freshdesk webhook payload must be a JSON object.");
  }
  return {
    verified: Boolean(options.webhookSecret),
    event: {
      provider: "freshdesk",
      payload: payload as FreshdeskJsonObject,
    },
  };
}
