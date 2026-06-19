import type { ProviderCredentialStatusInput } from "@cognidesk/core";
import type { HubSpotCredentialStatusInput } from "./contracts.js";
import { hubSpotTicketingProviderManifest } from "./manifest.js";

export function hubSpotTicketingCredentialStatuses(
  input: HubSpotCredentialStatusInput,
): ProviderCredentialStatusInput[] {
  return [
    {
      providerPackageId: hubSpotTicketingProviderManifest.id,
      requirementId: "hubspot-private-app-token",
      state: input.privateAppToken ? "configured" : "missing",
      scopes: input.scopes ?? [
        "tickets",
        "crm.objects.contacts.read",
        "crm.objects.contacts.write",
        "crm.objects.companies.read",
        "crm.objects.companies.write",
        "crm.objects.owners.read",
      ],
      ...(input.expiresAt ? { expiresAt: input.expiresAt } : {}),
      message: input.privateAppToken
        ? "HubSpot private app API access is configured."
        : "A HubSpot private app access token is required.",
    },
    {
      providerPackageId: hubSpotTicketingProviderManifest.id,
      requirementId: "hubspot-portal",
      state: input.portalId ? "configured" : "missing",
      message: input.portalId
        ? "HubSpot portal ownership metadata is configured."
        : "A HubSpot portal ID is required for readiness and webhook ownership checks.",
    },
    {
      providerPackageId: hubSpotTicketingProviderManifest.id,
      requirementId: "hubspot-app",
      state: input.appId ? "configured" : "not-required",
      message: input.appId
        ? "HubSpot app ownership metadata is configured."
        : "HubSpot app ownership metadata is required only when inbound HubSpot webhooks are enabled.",
    },
    {
      providerPackageId: hubSpotTicketingProviderManifest.id,
      requirementId: "hubspot-webhook-secret",
      state: input.webhookSecret ? "configured" : "not-required",
      message: input.webhookSecret
        ? "HubSpot v3 webhook signature validation is configured."
        : "HubSpot app client secret is required only when inbound HubSpot webhook validation is enabled.",
    },
  ];
}
