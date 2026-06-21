import type { ProviderCredentialStatusInput } from "@cognidesk/core";
import { sesEmailProviderManifest } from "./manifest.js";

export interface SesCredentialStatusInput {
  credentialsConfigured?: boolean;
  region?: string;
  snsVerificationConfigured?: boolean;
}

export function sesEmailCredentialStatuses(input: SesCredentialStatusInput): ProviderCredentialStatusInput[] {
  return [
    {
      providerPackageId: sesEmailProviderManifest.id,
      requirementId: "aws-credentials",
      state: input.credentialsConfigured ? "configured" : "missing",
      message: input.credentialsConfigured ? "AWS credentials are configured." : "AWS credentials are required.",
    },
    {
      providerPackageId: sesEmailProviderManifest.id,
      requirementId: "aws-region",
      state: input.region ? "configured" : "missing",
      message: input.region ? `AWS region '${input.region}' is configured.` : "AWS region is required.",
    },
    {
      providerPackageId: sesEmailProviderManifest.id,
      requirementId: "ses-sns-verification",
      state: input.snsVerificationConfigured ? "configured" : "not-required",
      message: input.snsVerificationConfigured
        ? "SNS signature verification is configured."
        : "SNS signature verification is optional unless event verification is required.",
    },
  ];
}
