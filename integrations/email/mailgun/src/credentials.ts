import type { ProviderCredentialStatusInput } from "@cognidesk/core";
import { mailgunEmailProviderManifest } from "./manifest.js";

export interface MailgunCredentialStatusInput {
  apiKeyConfigured?: boolean;
  domain?: string;
  webhookSigningKeyConfigured?: boolean;
  requireWebhookSignature?: boolean;
}

export function mailgunEmailCredentialStatuses(input: MailgunCredentialStatusInput): ProviderCredentialStatusInput[] {
  const webhookSigningKeyRequired = input.requireWebhookSignature === true;
  return [
    {
      providerPackageId: mailgunEmailProviderManifest.id,
      requirementId: "mailgun-api-key",
      state: input.apiKeyConfigured ? "configured" : "missing",
      message: input.apiKeyConfigured ? "Mailgun API key is configured." : "Mailgun API key is required.",
    },
    {
      providerPackageId: mailgunEmailProviderManifest.id,
      requirementId: "mailgun-domain",
      state: input.domain ? "configured" : "missing",
      message: input.domain ? `Mailgun domain '${input.domain}' is configured.` : "Mailgun domain is required.",
    },
    {
      providerPackageId: mailgunEmailProviderManifest.id,
      requirementId: "mailgun-webhook-signing-key",
      state: input.webhookSigningKeyConfigured
        ? "configured"
        : webhookSigningKeyRequired
          ? "missing"
          : "not-required",
      message: input.webhookSigningKeyConfigured
        ? "Mailgun webhook signing key is configured."
        : webhookSigningKeyRequired
          ? "Webhook signing key is required when webhook signature verification is enabled."
          : "Webhook signing key is optional unless webhook verification is required.",
    },
  ];
}
