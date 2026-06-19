import type { ProviderCredentialStatusInput } from "@cognidesk/core";
import type { WhatsAppCredentialStatusInput } from "./contracts.js";
import { whatsappMessagingProviderManifest } from "./manifest.js";

export function whatsappMessagingCredentialStatuses(
  input: WhatsAppCredentialStatusInput,
): ProviderCredentialStatusInput[] {
  return [
    {
      providerPackageId: whatsappMessagingProviderManifest.id,
      requirementId: "whatsapp-access-token",
      state: input.accessToken ? "configured" : "missing",
      scopes: input.scopes ?? [],
      ...(input.expiresAt ? { expiresAt: input.expiresAt } : {}),
      message: input.accessToken
        ? "WhatsApp Business access token is configured."
        : "A Meta Graph API access token with WhatsApp Business scopes is required.",
    },
    {
      providerPackageId: whatsappMessagingProviderManifest.id,
      requirementId: "whatsapp-phone-number-id",
      state: input.phoneNumberId ? "configured" : "missing",
      message: input.phoneNumberId
        ? "WhatsApp Business phone number ID is configured."
        : "A WhatsApp Business phone_number_id is required for Cloud API calls.",
    },
    {
      providerPackageId: whatsappMessagingProviderManifest.id,
      requirementId: "whatsapp-app-secret",
      state: input.appSecret ? "configured" : "missing",
      message: input.appSecret
        ? "Meta app secret is configured."
        : "A Meta app secret is required to validate webhook signatures.",
    },
    {
      providerPackageId: whatsappMessagingProviderManifest.id,
      requirementId: "whatsapp-webhook-verify-token",
      state: input.verifyToken ? "configured" : "missing",
      message: input.verifyToken
        ? "WhatsApp webhook verify token is configured."
        : "A webhook verify token is recommended for Meta webhook endpoint verification.",
    },
    {
      providerPackageId: whatsappMessagingProviderManifest.id,
      requirementId: "whatsapp-waba-webhook-subscription",
      state: input.wabaWebhookSubscribed ? "configured" : "missing",
      message: input.wabaWebhookSubscribed
        ? "WhatsApp WABA messages webhook subscription is confirmed by SDK configuration."
        : "The Meta app must be subscribed to the WABA messages webhook before inbound WhatsApp delivery is enabled.",
    },
  ];
}
