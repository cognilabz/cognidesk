import type { ProviderCredentialStatusInput } from "@cognidesk/core";
import { postmarkEmailProviderManifest } from "./manifest.js";

export interface PostmarkCredentialStatusInput {
  serverTokenConfigured?: boolean;
  accountTokenConfigured?: boolean;
}

export function postmarkEmailCredentialStatuses(input: PostmarkCredentialStatusInput): ProviderCredentialStatusInput[] {
  return [
    {
      providerPackageId: postmarkEmailProviderManifest.id,
      requirementId: "postmark-server-token",
      state: input.serverTokenConfigured ? "configured" : "missing",
      message: input.serverTokenConfigured ? "Postmark server token is configured." : "Postmark server token is required.",
    },
    {
      providerPackageId: postmarkEmailProviderManifest.id,
      requirementId: "postmark-account-token",
      state: input.accountTokenConfigured ? "configured" : "not-required",
      message: input.accountTokenConfigured
        ? "Postmark account token is configured."
        : "Postmark account token is optional for this support slice.",
    },
  ];
}
