import type { ProviderCredentialStatusInput } from "@cognidesk/core";
import type { GooglePlayReviewsCredentialStatusInput } from "./contracts.js";
import { googlePlayReviewsProviderManifest } from "./manifest.js";

export function googlePlayReviewsCredentialStatuses(
  input: GooglePlayReviewsCredentialStatusInput,
): ProviderCredentialStatusInput[] {
  const scopes = input.scopes ?? ["https://www.googleapis.com/auth/androidpublisher"];
  const authConfigured = Boolean(
    input.accessTokenConfigured
    || input.tokenSupplierConfigured
    || input.serviceAccountConfigured,
  );
  return [
    {
      providerPackageId: googlePlayReviewsProviderManifest.id,
      requirementId: "googleplay-service-account",
      state: input.serviceAccountConfigured ? "configured" : "not-required",
      scopes,
      message: input.serviceAccountConfigured
        ? "Google Play service account material is configured server-side."
        : "Service-account material is optional when the SDK user supplies an auth client, access token, or token supplier.",
    },
    {
      providerPackageId: googlePlayReviewsProviderManifest.id,
      requirementId: "googleplay-access-token",
      state: authConfigured ? "configured" : "missing",
      scopes,
      ...(input.expiresAt ? { expiresAt: input.expiresAt } : {}),
      message: authConfigured
        ? "Android Publisher API auth is configured through an official Google auth client, access token, token supplier, or service-account auth."
        : "Android Publisher API auth is required through an official Google auth client, access token, token supplier, or service-account auth.",
    },
    {
      providerPackageId: googlePlayReviewsProviderManifest.id,
      requirementId: "googleplay-package-name",
      state: input.packageName ? "configured" : "missing",
      message: input.packageName
        ? `Android package '${input.packageName}' is configured.`
        : "A Google Play Android package name is required.",
    },
  ];
}
