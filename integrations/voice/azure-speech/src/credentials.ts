import type { ProviderCredentialStatusInput } from "@cognidesk/core";
import type { AzureSpeechCredentialStatusInput } from "./contracts.js";
import { azureSpeechProviderManifest } from "./manifest.js";

export function azureSpeechCredentialStatuses(input: AzureSpeechCredentialStatusInput): ProviderCredentialStatusInput[] {
  const keyConfigured = Boolean(input.speechKey);
  const regionConfigured = Boolean(input.region);
  return [
    {
      providerPackageId: azureSpeechProviderManifest.id,
      requirementId: "azure-speech-key",
      state: keyConfigured ? "configured" : "missing",
      message: keyConfigured
        ? "Azure Speech key is configured."
        : "An Azure Speech resource key is required for speech requests.",
    },
    {
      providerPackageId: azureSpeechProviderManifest.id,
      requirementId: "azure-speech-region",
      state: regionConfigured ? "configured" : "missing",
      message: regionConfigured
        ? "Azure Speech region is configured."
        : "An Azure Speech region is required for speech requests.",
    },
  ];
}
