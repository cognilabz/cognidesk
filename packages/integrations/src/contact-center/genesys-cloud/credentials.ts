import type { ProviderCredentialStatusInput } from "@cognidesk/core";
import type { GenesysCloudCredentialStatusInput } from "./contracts.js";
import { genesysCloudContactCenterProviderManifest } from "./manifest.js";

export function genesysCloudContactCenterCredentialStatuses(
  input: GenesysCloudCredentialStatusInput,
): ProviderCredentialStatusInput[] {
  return [
    {
      providerPackageId: genesysCloudContactCenterProviderManifest.id,
      requirementId: "genesys-cloud-region",
      state: input.apiBaseUrl ? "configured" : "missing",
      message: input.apiBaseUrl ? "Genesys Cloud API base URL is configured." : "Genesys Cloud API base URL is required.",
    },
    {
      providerPackageId: genesysCloudContactCenterProviderManifest.id,
      requirementId: "genesys-cloud-api-access",
      state: input.apiAccessConfigured ? "configured" : "missing",
      scopes: ["conversation:callback:create", "routing:queue:view", "user:me:view"],
      message: input.apiAccessConfigured ? "Genesys Cloud OAuth access is configured." : "Genesys Cloud OAuth access is required.",
    },
    {
      providerPackageId: genesysCloudContactCenterProviderManifest.id,
      requirementId: "genesys-cloud-routing",
      state: input.routingConfigured ? "configured" : "missing",
      message: input.routingConfigured
        ? "Genesys Cloud routing configuration is provided by the SDK app."
        : "Genesys queue/callback/Open Messaging routing must be supplied by SDK configuration before handoff is enabled.",
    },
    {
      providerPackageId: genesysCloudContactCenterProviderManifest.id,
      requirementId: "genesys-cloud-open-messaging",
      state: input.openMessagingConfigured ? "configured" : "not-required",
      scopes: ["Messaging > Integration > All"],
      message: input.openMessagingConfigured
        ? "Genesys Cloud Open Messaging integration details are supplied by SDK configuration when enabled."
        : "Genesys Cloud Open Messaging integration details are required only when SDK configuration enables Open Messaging digital ingress.",
    },
  ];
}
