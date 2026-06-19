import type { ProviderCredentialStatusInput } from "@cognidesk/core";
import type { GoogleSpeechCredentialStatusInput } from "./contracts.js";
import { googleSpeechProviderManifest } from "./manifest.js";

export function googleSpeechCredentialStatuses(
  input: GoogleSpeechCredentialStatusInput,
): ProviderCredentialStatusInput[] {
  const configured = Boolean(input.accessToken || input.hasAccessTokenProvider);
  return [{
    providerPackageId: googleSpeechProviderManifest.id,
    requirementId: "google-cloud-access-token",
    state: configured ? "configured" : "missing",
    message: configured
      ? "Google Cloud OAuth access token provider is configured."
      : "A Google Cloud OAuth access token or token provider is required for server-side speech requests.",
  }];
}
