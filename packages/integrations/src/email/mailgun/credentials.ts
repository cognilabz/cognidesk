import type { ProviderCredentialStatusInput } from "@cognidesk/core";
import type { MailgunCredentialStatusInput } from "./contracts.js";
import { mailgunEmailProviderManifest } from "./manifest.js";

export function mailgunEmailCredentialStatuses(input: MailgunCredentialStatusInput): ProviderCredentialStatusInput[] {
  return [
    {
      providerPackageId: mailgunEmailProviderManifest.id,
      requirementId: "mailgun-api-key",
      state: input.apiKeyConfigured ? "configured" : "missing",
      message: input.apiKeyConfigured
        ? "Mailgun API key is configured."
        : "A Mailgun API key is required.",
    },
    {
      providerPackageId: mailgunEmailProviderManifest.id,
      requirementId: "mailgun-domain",
      state: input.domain ? "configured" : "missing",
      message: input.domain
        ? `Mailgun domain '${input.domain}' is configured.`
        : "A Mailgun sending domain is required.",
    },
    {
      providerPackageId: mailgunEmailProviderManifest.id,
      requirementId: "mailgun-webhook-signing-key",
      state: input.webhookSigningKeyConfigured ? "configured" : "missing",
      message: input.webhookSigningKeyConfigured
        ? "Mailgun webhook signing key is configured."
        : "A webhook signing key should be configured before accepting Mailgun events.",
    },
    {
      providerPackageId: mailgunEmailProviderManifest.id,
      requirementId: "mailgun-region",
      state: input.region ? "configured" : "not-required",
      message: input.region
        ? `Mailgun region '${input.region}' is configured.`
        : "Mailgun region is optional; the client defaults to the US API unless the SDK user selects EU routing.",
    },
  ];
}
