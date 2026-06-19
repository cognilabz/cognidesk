import type { ProviderCredentialStatusInput } from "@cognidesk/core";
import type { TwilioSmsCredentialStatusInput } from "./contracts.js";
import { twilioSmsProviderManifest } from "./manifest.js";

export function twilioSmsCredentialStatuses(input: TwilioSmsCredentialStatusInput): ProviderCredentialStatusInput[] {
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
        : "A Twilio SMS-capable phone number or Messaging Service is required to send SMS.",
    },
  ];
}
