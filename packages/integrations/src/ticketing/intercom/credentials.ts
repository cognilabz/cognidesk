import type { ProviderCredentialStatusInput } from "@cognidesk/core";
import type { IntercomCredentialStatusInput } from "./contracts.js";
import { intercomTicketingProviderManifest } from "./manifest.js";

export function intercomTicketingCredentialStatuses(
  input: IntercomCredentialStatusInput,
): ProviderCredentialStatusInput[] {
  return [
    {
      providerPackageId: intercomTicketingProviderManifest.id,
      requirementId: "intercom-access-token",
      state: input.accessToken ? "configured" : "missing",
      scopes: input.scopes ?? [],
      ...(input.expiresAt ? { expiresAt: input.expiresAt } : {}),
      message: input.accessToken
        ? "Intercom API access is configured."
        : "An Intercom access token or OAuth bearer token is required.",
    },
    {
      providerPackageId: intercomTicketingProviderManifest.id,
      requirementId: "intercom-webhook-secret",
      state: input.webhookSecret ? "configured" : "not-required",
      message: input.webhookSecret
        ? "Intercom webhook signature validation is configured."
        : "Intercom webhook signature validation is required only when inbound Intercom webhooks are enabled.",
    },
  ];
}
