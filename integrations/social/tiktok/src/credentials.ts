import type { ProviderCredentialStatusInput } from "@cognidesk/core";
import type { TikTokCredentialStatusInput } from "./contracts.js";
import { tiktokSocialProviderManifest } from "./manifest.js";

export function tiktokSocialCredentialStatuses(input: TikTokCredentialStatusInput): ProviderCredentialStatusInput[] {
  const requiredScopes = ["user.info.basic"];
  const usefulScopes = [
    "user.info.profile",
    "video.list",
    "research.data.basic",
  ];
  const scopes = new Set(input.scopes ?? []);
  const missingRequiredScopes = requiredScopes.filter((scope) => !scopes.has(scope));
  const hasUsefulScope = usefulScopes.some((scope) => scopes.has(scope));
  const scopesConfigured = input.scopes !== undefined && missingRequiredScopes.length === 0 && hasUsefulScope;

  return [
    {
      providerPackageId: tiktokSocialProviderManifest.id,
      requirementId: "tiktok-client-key",
      state: input.clientKey ? "configured" : "missing",
      message: input.clientKey
        ? "TikTok client key is configured."
        : "A TikTok app client key is required.",
    },
    {
      providerPackageId: tiktokSocialProviderManifest.id,
      requirementId: "tiktok-client-secret",
      state: input.clientSecret ? "configured" : "missing",
      message: input.clientSecret
        ? "TikTok client secret is configured."
        : "A TikTok client secret is required for OAuth and webhook validation.",
    },
    {
      providerPackageId: tiktokSocialProviderManifest.id,
      requirementId: "tiktok-access-token",
      state: input.accessToken ? "configured" : "missing",
      scopes: input.scopes ?? [],
      ...(input.expiresAt ? { expiresAt: input.expiresAt } : {}),
      message: input.accessToken
        ? "TikTok access token is configured."
        : "A TikTok access token is required for approved APIs.",
    },
    {
      providerPackageId: tiktokSocialProviderManifest.id,
      requirementId: "tiktok-account-id",
      state: input.openId || input.businessId ? "configured" : "missing",
      message: input.openId || input.businessId
        ? "TikTok Open ID or Business account ID is configured."
        : "A TikTok Open ID or Business account ID is required to scope operations.",
    },
    {
      providerPackageId: tiktokSocialProviderManifest.id,
      requirementId: "tiktok-webhook-signature",
      state: input.webhookSignatureSecret || input.clientSecret ? "configured" : "missing",
      message: input.webhookSignatureSecret || input.clientSecret
        ? "TikTok webhook signature validation is configured."
        : "TikTok webhook validation requires the client secret or an SDK-configured signature secret.",
    },
    {
      providerPackageId: tiktokSocialProviderManifest.id,
      requirementId: "tiktok-webhook-callback",
      state: input.webhookConfigured ? "configured" : "missing",
      message: input.webhookConfigured
        ? "TikTok webhook callback URL registration is confirmed by SDK configuration."
        : "TikTok webhook callback URL registration must be confirmed by SDK configuration.",
    },
    {
      providerPackageId: tiktokSocialProviderManifest.id,
      requirementId: "tiktok-scopes",
      state: scopesConfigured
        ? "configured"
        : input.scopes?.length
          ? "insufficient-scope"
          : "missing",
      scopes: input.scopes ?? [],
      message: scopesConfigured
        ? "Required TikTok scopes and at least one useful social-support scope are configured."
        : input.scopes?.length
          ? "TikTok scopes must include user.info.basic and an approved social-support surface such as video.list or research.data.basic."
          : "TikTok scopes must be supplied by SDK configuration.",
    },
  ];
}
