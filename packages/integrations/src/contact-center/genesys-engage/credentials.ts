import type { ProviderCredentialStatusInput } from "@cognidesk/core";
import type { GenesysEngageCredentialStatusInput } from "./contracts.js";
import { genesysEngageContactCenterProviderManifest } from "./manifest.js";

export function genesysEngageContactCenterCredentialStatuses(
  input: GenesysEngageCredentialStatusInput,
): ProviderCredentialStatusInput[] {
  return [
    {
      providerPackageId: genesysEngageContactCenterProviderManifest.id,
      requirementId: "genesys-engage-gms-base-url",
      state: input.gmsBaseUrl ? "configured" : "missing",
      message: input.gmsBaseUrl ? "Genesys Mobile Services base URL is configured." : "Genesys Mobile Services base URL is required.",
    },
    {
      providerPackageId: genesysEngageContactCenterProviderManifest.id,
      requirementId: "genesys-engage-auth",
      state: input.authConfigured ? "configured" : "missing",
      message: input.authConfigured
        ? "Genesys Engage/GMS authentication is configured."
        : "Genesys Engage/GMS authentication is not configured.",
    },
    {
      providerPackageId: genesysEngageContactCenterProviderManifest.id,
      requirementId: "genesys-engage-routing",
      state: input.routingConfigured ? "configured" : "missing",
      message: input.routingConfigured
        ? "Genesys Engage routing configuration is provided by the SDK app."
        : "Genesys Engage callback/chat routing must be supplied by SDK configuration before handoff is enabled.",
    },
  ];
}
