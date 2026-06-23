import {
  credentialConfigured,
  credentialMissing,
  type ProviderCredentialStatusInput,
} from "@cognidesk/integration-kit";
import type { GmailCredentialStatusInput } from "./contracts.js";
import { gmailEmailProviderManifest } from "./manifest.js";

export function gmailEmailCredentialStatuses(input: GmailCredentialStatusInput): ProviderCredentialStatusInput[] {
  const status = input.accessToken || input.auth
    ? credentialConfigured({
      providerPackageId: gmailEmailProviderManifest.id,
      requirementId: "google-oauth-access-token",
      scopes: input.scopes ?? [],
      message: input.accessToken
        ? "Google OAuth access token is configured."
        : "Injected Gmail SDK auth client is configured.",
    })
    : credentialMissing({
      providerPackageId: gmailEmailProviderManifest.id,
      requirementId: "google-oauth-access-token",
      scopes: input.scopes ?? [],
      message: "A Google OAuth access token or injected Gmail SDK auth client is required.",
    });
  return [{
    ...status,
    providerPackageId: gmailEmailProviderManifest.id,
    ...(input.expiresAt ? { expiresAt: input.expiresAt } : {}),
  }];
}
