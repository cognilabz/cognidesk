import type { ProviderCredentialStatusInput } from "@cognidesk/core";
import { mailgunEmailProviderManifest } from "./manifest.js";

export interface MailgunCredentialStatusInput {
  apiKeyConfigured?: boolean;
  domain?: string;
  webhookSigningKeyConfigured?: boolean;
}

export function mailgunEmailCredentialStatuses(input: MailgunCredentialStatusInput): ProviderCredentialStatusInput[] {
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
      state: input.webhookSigningKeyConfigured ? "configured" : "not-required",
      message: input.webhookSigningKeyConfigured
        ? "Mailgun webhook signing key is configured."
        : "Webhook signing key is optional unless webhook verification is required.",
    },
  ];
}
