import type { ProviderCredentialStatusInput } from "@cognidesk/integration-kit";
import { twilioSmsProviderManifest } from "./manifest.js";

export function twilioSmsCredentialStatuses(input: {
  accountSid?: string;
  authToken?: string;
  fromNumber?: string;
  messagingServiceSid?: string;
}): ProviderCredentialStatusInput[] {
  const accountConfigured = Boolean(input.accountSid && input.authToken);
  const senderConfigured = Boolean(input.fromNumber || input.messagingServiceSid);
  return [
    {
      providerPackageId: twilioSmsProviderManifest.id,
      requirementId: "twilio-account",
      state: accountConfigured ? "configured" : "missing",
      message: accountConfigured
        ? "Twilio account credentials are configured."
        : "Twilio Account SID and Auth Token are required.",
    },
    {
      providerPackageId: twilioSmsProviderManifest.id,
      requirementId: "twilio-sms-sender",
      state: senderConfigured ? "configured" : "missing",
      message: senderConfigured
        ? "Twilio SMS sender is configured."
        : "A Twilio from number or Messaging Service SID is required.",
    },
  ];
}
