import type { ProviderCredentialStatusInput } from "@cognidesk/core";
import type { PostmarkCredentialStatusInput } from "./contracts.js";
import { postmarkEmailProviderManifest } from "./manifest.js";

export function postmarkEmailCredentialStatuses(input: PostmarkCredentialStatusInput): ProviderCredentialStatusInput[] {
  return [
    {
      providerPackageId: postmarkEmailProviderManifest.id,
      requirementId: "postmark-server-token",
      state: input.serverTokenConfigured ? "configured" : "missing",
      message: input.serverTokenConfigured
        ? "Postmark Server API token is configured."
        : "A Postmark Server API token is required.",
    },
    {
      providerPackageId: postmarkEmailProviderManifest.id,
      requirementId: "postmark-account-token",
      state: input.accountTokenConfigured ? "configured" : "missing",
      message: input.accountTokenConfigured
        ? "Postmark Account API token is configured for generated account-level operations."
        : "A Postmark Account API token is required for generated account-level operations.",
    },
    {
      providerPackageId: postmarkEmailProviderManifest.id,
      requirementId: "postmark-message-stream",
      state: input.messageStream ? "configured" : "missing",
      message: input.messageStream
        ? `Postmark message stream '${input.messageStream}' is configured.`
        : "A Postmark message stream can be configured per SDK-user email policy.",
    },
    {
      providerPackageId: postmarkEmailProviderManifest.id,
      requirementId: "postmark-webhook-auth",
      state: input.webhookAuthConfigured ? "configured" : "missing",
      message: input.webhookAuthConfigured
        ? "Postmark webhook authentication is configured."
        : "Webhook authentication should be configured by the SDK user before accepting inbound events.",
    },
  ];
}
