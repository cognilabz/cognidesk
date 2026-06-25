import type { FreshdeskJsonObject } from "./contracts.js";

export interface FreshdeskWebhookOptions {
  webhookSecret?: string;
  headerName?: string;
}

export function validateFreshdeskWebhookSecret(headers: Headers, options: FreshdeskWebhookOptions = {}): boolean {
  if (!options.webhookSecret) return true;
  const headerName = options.headerName ?? "x-cognidesk-freshdesk-webhook-secret";
  return headers.get(headerName) === options.webhookSecret;
}

export async function parseFreshdeskWebhookRequest(request: Request, options: FreshdeskWebhookOptions = {}) {
  if (!validateFreshdeskWebhookSecret(request.headers, options)) {
    throw new Error("Freshdesk webhook shared secret mismatch.");
  }
  const payload = await request.json() as FreshdeskJsonObject;
  return {
    verified: Boolean(options.webhookSecret),
    event: {
      provider: "freshdesk",
      payload,
    },
  };
}
