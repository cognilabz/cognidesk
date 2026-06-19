import type { ProviderCredentialStatusInput } from "@cognidesk/core";
import type { TwilioCredentialStatusInput } from "./contracts.js";
import { twilioVoiceProviderManifest } from "./manifest.js";

export function twilioVoiceCredentialStatuses(input: TwilioCredentialStatusInput): ProviderCredentialStatusInput[] {
  const restCredentialsConfigured = Boolean(input.authToken || (input.apiKeySid && input.apiKeySecret));
  const webhookAuthTokenConfigured = Boolean(input.webhookAuthToken ?? input.authToken);
  return [
    {
      providerPackageId: twilioVoiceProviderManifest.id,
      requirementId: "twilio-account",
      state: input.accountSid ? "configured" : "missing",
      message: input.accountSid ? "Twilio Account SID is configured." : "Twilio Account SID is required.",
    },
    {
      providerPackageId: twilioVoiceProviderManifest.id,
      requirementId: "twilio-rest-api-credentials",
      state: restCredentialsConfigured ? "configured" : "missing",
      message: restCredentialsConfigured
        ? "Twilio REST API credentials are configured."
        : "Twilio Auth Token or API Key SID/secret are required for REST API calls.",
    },
    {
      providerPackageId: twilioVoiceProviderManifest.id,
      requirementId: "twilio-webhook-auth-token",
      state: webhookAuthTokenConfigured ? "configured" : "not-required",
      message: webhookAuthTokenConfigured
        ? "Twilio webhook Auth Token is configured."
        : "Twilio webhook Auth Token is required only when webhook signature validation is enabled.",
    },
    {
      providerPackageId: twilioVoiceProviderManifest.id,
      requirementId: "twilio-voice-number",
      state: input.fromNumber ? "configured" : "missing",
      message: input.fromNumber
        ? "Twilio outbound voice number is configured."
        : "A voice-capable Twilio number is required for outbound calls.",
    },
  ];
}
