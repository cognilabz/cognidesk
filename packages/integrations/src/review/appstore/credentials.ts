import type { ProviderCredentialStatusInput } from "@cognidesk/core";
import type { AppStoreCredentialStatusInput } from "./contracts.js";
import { appStoreReviewsProviderManifest } from "./manifest.js";

export function appStoreReviewsCredentialStatuses(input: AppStoreCredentialStatusInput): ProviderCredentialStatusInput[] {
  const apiKeyConfigured = Boolean(input.issuerId && input.keyId && input.privateKeyConfigured);
  return [
    {
      providerPackageId: appStoreReviewsProviderManifest.id,
      requirementId: "appstore-api-key",
      state: apiKeyConfigured ? "configured" : "missing",
      ...(input.expiresAt ? { expiresAt: input.expiresAt } : {}),
      message: apiKeyConfigured
        ? "App Store Connect API key material is configured server-side."
        : "App Store Connect issuer ID, key ID, and private key are required.",
    },
    {
      providerPackageId: appStoreReviewsProviderManifest.id,
      requirementId: "appstore-app-id",
      state: input.appId ? "configured" : "missing",
      message: input.appId
        ? "App Store Connect app ID is configured."
        : "An App Store Connect app resource ID is required.",
    },
    {
      providerPackageId: appStoreReviewsProviderManifest.id,
      requirementId: "appstore-review-response-policy",
      state: input.responsePolicyConfigured ? "configured" : "missing",
      message: input.responsePolicyConfigured
        ? "SDK-user review response policy is configured."
        : "Configure review reply approval, localization, and escalation policy before publishing responses.",
    },
  ];
}
