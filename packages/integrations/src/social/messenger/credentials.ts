import type { ProviderCredentialStatusInput } from "@cognidesk/core";
import type { MessengerCredentialStatusInput } from "./contracts.js";
import { messengerSocialProviderManifest } from "./manifest.js";

export function messengerSocialCredentialStatuses(
  input: MessengerCredentialStatusInput,
): ProviderCredentialStatusInput[] {
  return [
    {
      providerPackageId: messengerSocialProviderManifest.id,
      requirementId: "messenger-page-access-token",
      state: input.pageAccessToken ? "configured" : "missing",
      scopes: input.scopes ?? ["pages_messaging", "pages_show_list", "pages_read_engagement", "pages_manage_metadata"],
      ...(input.expiresAt ? { expiresAt: input.expiresAt } : {}),
      message: input.pageAccessToken
        ? "Messenger Page access token is configured."
        : "A Messenger Page access token is required.",
    },
    {
      providerPackageId: messengerSocialProviderManifest.id,
      requirementId: "messenger-page-id",
      state: input.pageId ? "configured" : "missing",
      message: input.pageId ? "Facebook Page ID is configured." : "A Facebook Page ID is required.",
    },
    {
      providerPackageId: messengerSocialProviderManifest.id,
      requirementId: "messenger-app-secret",
      state: input.appSecret ? "configured" : "missing",
      message: input.appSecret
        ? "Meta app secret is configured for webhook signature validation."
        : "A Meta app secret is required to validate Messenger webhooks.",
    },
    {
      providerPackageId: messengerSocialProviderManifest.id,
      requirementId: "messenger-webhook-verify-token",
      state: input.verifyToken ? "configured" : "missing",
      message: input.verifyToken
        ? "Messenger webhook verify token is configured."
        : "A webhook verify token should be configured for Meta endpoint verification.",
    },
    {
      providerPackageId: messengerSocialProviderManifest.id,
      requirementId: "messenger-page-webhook-subscription",
      state: input.pageWebhookSubscribed ? "configured" : "missing",
      message: input.pageWebhookSubscribed
        ? "Messenger Page messages webhook subscription is confirmed by SDK configuration."
        : "The Facebook Page must subscribe the app to Messenger messages before inbound delivery is enabled.",
    },
  ];
}
