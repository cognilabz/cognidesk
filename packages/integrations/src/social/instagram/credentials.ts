import type { ProviderCredentialStatusInput } from "@cognidesk/core";
import type { InstagramCredentialStatusInput } from "./contracts.js";
import { instagramSocialProviderManifest } from "./manifest.js";

export function instagramSocialCredentialStatuses(
  input: InstagramCredentialStatusInput,
): ProviderCredentialStatusInput[] {
  const requiredPermissions = [
    "instagram_manage_messages",
    "instagram_basic",
    "pages_messaging",
    "pages_read_engagement",
    "pages_manage_metadata",
  ];
  const grantedPermissions = new Set(input.permissions ?? []);
  const missingPermissions = requiredPermissions.filter((permission) => !grantedPermissions.has(permission));
  const permissionsConfigured = input.permissions !== undefined && missingPermissions.length === 0;

  return [
    {
      providerPackageId: instagramSocialProviderManifest.id,
      requirementId: "instagram-page-access-token",
      state: input.pageAccessToken ? "configured" : "missing",
      scopes: input.permissions ?? [],
      ...(input.expiresAt ? { expiresAt: input.expiresAt } : {}),
      message: input.pageAccessToken
        ? "Meta Page access token is configured."
        : "A Meta Page access token with Instagram messaging permissions is required.",
    },
    {
      providerPackageId: instagramSocialProviderManifest.id,
      requirementId: "instagram-page-id",
      state: input.pageId ? "configured" : "missing",
      message: input.pageId
        ? "Facebook Page ownership metadata is configured."
        : "A connected Facebook Page ID is required.",
    },
    {
      providerPackageId: instagramSocialProviderManifest.id,
      requirementId: "instagram-business-account-id",
      state: input.instagramBusinessAccountId ? "configured" : "missing",
      message: input.instagramBusinessAccountId
        ? "Instagram business account ID is configured."
        : "An Instagram professional account ID is required.",
    },
    {
      providerPackageId: instagramSocialProviderManifest.id,
      requirementId: "instagram-app-secret",
      state: input.appSecret ? "configured" : "missing",
      message: input.appSecret
        ? "Meta app secret is configured for webhook signature validation."
        : "A Meta app secret is required to validate webhook signatures.",
    },
    {
      providerPackageId: instagramSocialProviderManifest.id,
      requirementId: "instagram-webhook-verify-token",
      state: input.verifyToken ? "configured" : "missing",
      message: input.verifyToken
        ? "Instagram webhook verify token is configured."
        : "A webhook verify token is recommended for Meta webhook endpoint verification.",
    },
    {
      providerPackageId: instagramSocialProviderManifest.id,
      requirementId: "instagram-page-webhook-subscription",
      state: input.pageWebhookSubscribed ? "configured" : "missing",
      message: input.pageWebhookSubscribed
        ? "Instagram messaging webhook subscription is confirmed by SDK configuration."
        : "The Page/app must subscribe to Instagram messaging webhook fields before inbound delivery is enabled.",
    },
    {
      providerPackageId: instagramSocialProviderManifest.id,
      requirementId: "instagram-permissions",
      state: permissionsConfigured
        ? "configured"
        : input.permissions?.length
          ? "insufficient-scope"
          : "missing",
      scopes: input.permissions ?? [],
      message: permissionsConfigured
        ? "Required Instagram Graph permissions are configured."
        : missingPermissions.length
          ? `Missing Instagram Graph permissions: ${missingPermissions.join(", ")}.`
          : "Instagram Graph permissions must be granted and supplied by SDK configuration.",
    },
  ];
}
