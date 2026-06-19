import type { ProviderCredentialStatusInput } from "@cognidesk/core";
import type { SesCredentialStatusInput } from "./contracts.js";
import { sesEmailProviderManifest } from "./manifest.js";

export function sesEmailCredentialStatuses(input: SesCredentialStatusInput): ProviderCredentialStatusInput[] {
  const eventIngestionConfigured = Boolean(input.snsConfigured || input.sqsConfigured || input.webhookVerificationConfigured);
  return [
    {
      providerPackageId: sesEmailProviderManifest.id,
      requirementId: "aws-access-key-id",
      state: input.accessKeyConfigured ? "configured" : "missing",
      message: input.accessKeyConfigured
        ? "AWS access key ID is configured for SES API signing."
        : "An AWS access key ID with SES permissions is required.",
    },
    {
      providerPackageId: sesEmailProviderManifest.id,
      requirementId: "aws-secret-access-key",
      state: input.secretKeyConfigured ? "configured" : "missing",
      message: input.secretKeyConfigured
        ? "AWS secret access key is configured server-side for SES API signing."
        : "An AWS secret access key is required and must stay server-side.",
    },
    {
      providerPackageId: sesEmailProviderManifest.id,
      requirementId: "aws-region",
      state: input.region ? "configured" : "missing",
      message: input.region
        ? `AWS Region '${input.region}' is configured for Amazon SES.`
        : "An AWS Region must be configured by the SDK user.",
    },
    {
      providerPackageId: sesEmailProviderManifest.id,
      requirementId: "ses-sender-identity",
      state: input.senderIdentity ? "configured" : "missing",
      message: input.senderIdentity
        ? "A verified SES sender identity or domain is configured."
        : "A verified SES sender identity or domain should be selected before outbound email is enabled.",
    },
    {
      providerPackageId: sesEmailProviderManifest.id,
      requirementId: "ses-event-ingestion",
      state: eventIngestionConfigured ? "configured" : "missing",
      message: eventIngestionConfigured
        ? "SES event ingestion path is configured by the SDK user."
        : "Configure SNS/SQS/HTTP event ingestion and signature verification before accepting SES events.",
    },
  ];
}
