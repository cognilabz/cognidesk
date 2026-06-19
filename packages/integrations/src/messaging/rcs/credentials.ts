import type { ProviderCredentialStatusInput } from "@cognidesk/core";
import type { RcsCredentialStatusInput } from "./contracts.js";
import { rcsMessagingProviderManifest } from "./manifest.js";

export function rcsMessagingCredentialStatuses(input: RcsCredentialStatusInput): ProviderCredentialStatusInput[] {
  const authConfigured = Boolean(input.accessToken || input.tokenProviderConfigured || input.serviceAccountClientEmail);
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
      requirementId: "rcs-access-token",
      state: authConfigured ? "configured" : "missing",
      scopes: input.scopes ?? [],
      ...(input.expiresAt ? { expiresAt: input.expiresAt } : {}),
      message: authConfigured
        ? "RCS OAuth access is configured."
        : "A configured OAuth access token, token provider, or service account is required.",
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
