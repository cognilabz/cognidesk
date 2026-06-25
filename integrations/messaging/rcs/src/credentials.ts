import type { ProviderCredentialStatusInput } from "@cognidesk/core";
import type { RcsCredentialStatusInput } from "./contracts.js";
import { rcsMessagingProviderManifest } from "./manifest.js";

export function rcsMessagingCredentialStatuses(input: RcsCredentialStatusInput): ProviderCredentialStatusInput[] {
  const transportConfigured = Boolean(
    input.providerClientConfigured
      || input.accessToken
      || input.tokenProviderConfigured
      || input.serviceAccountConfigured,
  );
  return [
    {
      providerPackageId: rcsMessagingProviderManifest.id,
      requirementId: "rcs-agent",
      state: input.agentId ? "configured" : "missing",
      message: input.agentId
        ? "RCS for Business agentId is configured."
        : "An RCS for Business agentId is required for RBM API calls.",
    },
    {
      providerPackageId: rcsMessagingProviderManifest.id,
      requirementId: "rcs-provider-client",
      state: transportConfigured ? "configured" : "missing",
      scopes: input.scopes ?? [],
      ...(input.expiresAt ? { expiresAt: input.expiresAt } : {}),
      message: transportConfigured
        ? "RCS provider transport is configured."
        : "RCS built-in REST adapter requires accessToken, token provider, service account, or providerClient.",
    },
    {
      providerPackageId: rcsMessagingProviderManifest.id,
      requirementId: "rcs-webhook-client-token",
      state: input.webhookClientToken ? "configured" : "missing",
      message: input.webhookClientToken
        ? "RCS webhook client token is configured."
        : "The RCS webhook client token is required when webhook verification is enabled.",
    },
  ];
}
