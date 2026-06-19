import type { ProviderCredentialStatusInput } from "@cognidesk/core";
import type { ZoomCredentialStatusInput } from "./contracts.js";
import { zoomVideoProviderManifest } from "./manifest.js";

export function zoomVideoCredentialStatuses(
  input: ZoomCredentialStatusInput,
): ProviderCredentialStatusInput[] {
  return [
    {
      providerPackageId: zoomVideoProviderManifest.id,
      requirementId: "zoom-oauth-access-token",
      state: input.accessToken ? "configured" : "missing",
      scopes: input.scopes ?? [],
      ...(input.expiresAt ? { expiresAt: input.expiresAt } : {}),
      message: input.accessToken
        ? "Zoom OAuth access token is configured."
        : "A Zoom OAuth access token with meeting and user scopes is required.",
    },
    {
      providerPackageId: zoomVideoProviderManifest.id,
      requirementId: "zoom-webhook-secret-token",
      state: input.webhookSecretToken ? "configured" : "not-required",
      message: input.webhookSecretToken
        ? "Zoom webhook secret token is configured."
        : "Zoom webhook secret token is required only when inbound Zoom webhook validation is enabled.",
    },
  ];
}
