import type { ProviderCredentialStatusInput } from "@cognidesk/core";
import type { EightByEightCredentialStatusInput } from "./contracts.js";
import { eightByEightContactCenterProviderManifest } from "./manifest.js";

export function eightByEightContactCenterCredentialStatuses(
  input: EightByEightCredentialStatusInput,
): ProviderCredentialStatusInput[] {
  return [
    {
      providerPackageId: eightByEightContactCenterProviderManifest.id,
      requirementId: "8x8-contact-center-api-base",
      state: input.apiBaseUrl ? "configured" : "missing",
      message: input.apiBaseUrl ? "8x8 Contact Center API base URL is configured." : "8x8 Contact Center API base URL is required.",
    },
    {
      providerPackageId: eightByEightContactCenterProviderManifest.id,
      requirementId: "8x8-contact-center-api-access",
      state: input.apiAccessConfigured ? "configured" : "missing",
      message: input.apiAccessConfigured ? "8x8 Contact Center API access is configured." : "8x8 Contact Center API access is required.",
    },
    {
      providerPackageId: eightByEightContactCenterProviderManifest.id,
      requirementId: "8x8-contact-center-routing",
      state: input.routingConfigured ? "configured" : "missing",
      message: input.routingConfigured ? "8x8 routing is configured." : "8x8 routing must be configured by the SDK app.",
    },
  ];
}
