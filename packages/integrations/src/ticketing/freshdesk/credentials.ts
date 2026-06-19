import type { ProviderCredentialStatusInput } from "@cognidesk/core";
import type { FreshdeskCredentialStatusInput } from "./contracts.js";
import { freshdeskTicketingProviderManifest } from "./manifest.js";

export function freshdeskTicketingCredentialStatuses(
  input: FreshdeskCredentialStatusInput,
): ProviderCredentialStatusInput[] {
  return [
    {
      providerPackageId: freshdeskTicketingProviderManifest.id,
      requirementId: "freshdesk-domain",
      state: input.domain ? "configured" : "missing",
      message: input.domain
        ? "Freshdesk domain is configured."
        : "A Freshdesk domain URL is required.",
    },
    {
      providerPackageId: freshdeskTicketingProviderManifest.id,
      requirementId: "freshdesk-api-key",
      state: input.apiKey ? "configured" : "missing",
      scopes: input.scopes ?? ["read", "write"],
      message: input.apiKey
        ? "Freshdesk API key access is configured."
        : "A Freshdesk API key is required for Freshdesk v2 API access.",
    },
    {
      providerPackageId: freshdeskTicketingProviderManifest.id,
      requirementId: "freshdesk-webhook-secret",
      state: input.webhookSecret ? "configured" : "not-required",
      message: input.webhookSecret
        ? `Freshdesk webhook shared-secret validation is configured${input.webhookHeaderName ? ` for ${input.webhookHeaderName}` : ""}.`
        : "Freshdesk webhook shared-secret validation is required only when inbound Freshdesk automation webhooks are enabled.",
    },
  ];
}
