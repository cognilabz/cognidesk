import type { ProviderCredentialStatusInput } from "@cognidesk/core";
import type { GmailCredentialStatusInput } from "./contracts.js";
import { gmailEmailProviderManifest } from "./manifest.js";

export function gmailEmailCredentialStatuses(input: GmailCredentialStatusInput): ProviderCredentialStatusInput[] {
  return [{
    providerPackageId: gmailEmailProviderManifest.id,
    requirementId: "google-oauth-access-token",
    state: input.accessToken ? "configured" : "missing",
    scopes: input.scopes ?? [],
    ...(input.expiresAt ? { expiresAt: input.expiresAt } : {}),
    message: input.accessToken
      ? "Google OAuth access token is configured."
      : "A Google OAuth access token with Gmail API scopes is required.",
  }];
}
