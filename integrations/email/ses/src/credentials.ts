import type { ProviderCredentialStatusInput } from "@cognidesk/core";
import { sesEmailProviderManifest } from "./manifest.js";

export interface SesCredentialStatusInput {
  credentialsConfigured?: boolean;
  region?: string;
  snsVerificationConfigured?: boolean;
  requireSnsSignatureVerification?: boolean;
}

export function sesEmailCredentialStatuses(input: SesCredentialStatusInput): ProviderCredentialStatusInput[] {
  const region = input.region?.trim();
  const snsVerificationRequired = input.requireSnsSignatureVerification ?? true;
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
      state: region ? "configured" : "missing",
      message: region ? `AWS region '${region}' is configured.` : "AWS region is required.",
    },
    {
      providerPackageId: sesEmailProviderManifest.id,
      requirementId: "ses-sns-verification",
      state: input.snsVerificationConfigured
        ? "configured"
        : snsVerificationRequired
          ? "missing"
          : "not-required",
      message: input.snsVerificationConfigured
        ? "SNS signature verification is configured."
        : snsVerificationRequired
          ? "SNS signature verification is required for inbound SES/SNS operations."
          : "SNS signature verification is optional unless event verification is required.",
    },
  ];
}
