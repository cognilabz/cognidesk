import type { ProviderCredentialStatusInput } from "@cognidesk/core";
import type { AmazonConnectCredentialStatusInput } from "./contracts.js";
import { amazonConnectContactCenterProviderManifest } from "./manifest.js";

export function amazonConnectContactCenterCredentialStatuses(
  input: AmazonConnectCredentialStatusInput,
): ProviderCredentialStatusInput[] {
  return [
    {
      providerPackageId: amazonConnectContactCenterProviderManifest.id,
      requirementId: "amazon-connect-instance",
      state: input.region && input.instanceId ? "configured" : "missing",
      message: input.region && input.instanceId
        ? "Amazon Connect region and instance ID are configured."
        : "Amazon Connect region and instance ID are required.",
    },
    {
      providerPackageId: amazonConnectContactCenterProviderManifest.id,
      requirementId: "amazon-connect-api-access",
      state: input.apiAccessConfigured ? "configured" : "missing",
      scopes: ["connect:StartTaskContact", "connect:StartChatContact", "connect:TransferContact", "connect:DescribeInstance"],
      message: input.apiAccessConfigured
        ? "Amazon Connect server-side API access is configured."
        : "Amazon Connect API access with task/chat/transfer permissions is required.",
    },
  ];
}
