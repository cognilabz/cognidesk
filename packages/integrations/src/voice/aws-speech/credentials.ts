import type { ProviderCredentialStatusInput } from "@cognidesk/core";
import type { AwsSpeechCredentialStatusInput } from "./contracts.js";
import { awsSpeechProviderManifest } from "./manifest.js";

export function awsSpeechCredentialStatuses(input: AwsSpeechCredentialStatusInput): ProviderCredentialStatusInput[] {
  const accessKeyConfigured = Boolean(input.accessKeyId);
  const secretKeyConfigured = Boolean(input.secretAccessKey);
  const regionConfigured = Boolean(input.region);
  const sessionTokenConfigured = Boolean(input.sessionToken);
  return [
    {
      providerPackageId: awsSpeechProviderManifest.id,
      requirementId: "aws-access-key-id",
      state: accessKeyConfigured ? "configured" : "missing",
      message: accessKeyConfigured
        ? "AWS access key ID is configured."
        : "An AWS access key ID is required for Amazon Transcribe and Amazon Polly requests.",
    },
    {
      providerPackageId: awsSpeechProviderManifest.id,
      requirementId: "aws-secret-access-key",
      state: secretKeyConfigured ? "configured" : "missing",
      message: secretKeyConfigured
        ? "AWS secret access key is configured."
        : "An AWS secret access key is required for Amazon Transcribe and Amazon Polly requests.",
    },
    {
      providerPackageId: awsSpeechProviderManifest.id,
      requirementId: "aws-region",
      state: regionConfigured ? "configured" : "missing",
      message: regionConfigured
        ? "AWS Region is configured."
        : "An AWS Region is required for Amazon Transcribe and Amazon Polly requests.",
    },
    {
      providerPackageId: awsSpeechProviderManifest.id,
      requirementId: "aws-session-token",
      state: sessionTokenConfigured ? "configured" : "not-required",
      message: sessionTokenConfigured
        ? "AWS session token is configured."
        : "AWS session token is only required when using temporary AWS credentials.",
    },
  ];
}
