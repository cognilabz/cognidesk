import type { ProviderCredentialStatusInput } from "@cognidesk/core";
import type { SalesforceCredentialStatusInput } from "./contracts.js";
import { salesforceTicketingProviderManifest } from "./manifest.js";

export function salesforceTicketingCredentialStatuses(
  input: SalesforceCredentialStatusInput,
): ProviderCredentialStatusInput[] {
  const hasWebhookVerifier = Boolean(input.webhookSecret || input.verifierConfigured);
  return [
    {
      providerPackageId: salesforceTicketingProviderManifest.id,
      requirementId: "salesforce-instance",
      state: input.instanceUrl ? "configured" : "missing",
      message: input.instanceUrl
        ? `Salesforce instance URL is configured${input.apiVersion ? ` for ${input.apiVersion}` : ""}.`
        : "A Salesforce instance URL is required.",
    },
    {
      providerPackageId: salesforceTicketingProviderManifest.id,
      requirementId: "salesforce-oauth-access",
      state: input.accessToken ? "configured" : "missing",
      scopes: input.scopes ?? ["api"],
      ...(input.expiresAt ? { expiresAt: input.expiresAt } : {}),
      message: input.accessToken
        ? "Salesforce OAuth REST API access is configured."
        : "A Salesforce OAuth bearer token with API access is required.",
    },
    {
      providerPackageId: salesforceTicketingProviderManifest.id,
      requirementId: "salesforce-webhook-secret",
      state: hasWebhookVerifier ? "configured" : "not-required",
      message: hasWebhookVerifier
        ? "Salesforce webhook verification is configured."
        : "Salesforce webhook verification is required only when inbound Salesforce event relay parsing is enabled.",
    },
  ];
}
