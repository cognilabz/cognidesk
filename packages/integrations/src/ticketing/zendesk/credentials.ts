import type { ProviderCredentialStatusInput } from "@cognidesk/core";
import type { ZendeskCredentialStatusInput } from "./contracts.js";
import { zendeskTicketingProviderManifest } from "./manifest.js";

export function zendeskTicketingCredentialStatuses(
  input: ZendeskCredentialStatusInput,
): ProviderCredentialStatusInput[] {
  const hasApiToken = Boolean(input.email && input.apiToken);
  const hasBearer = Boolean(input.accessToken);
  return [
    {
      providerPackageId: zendeskTicketingProviderManifest.id,
      requirementId: "zendesk-instance",
      state: input.instanceUrl ? "configured" : "missing",
      message: input.instanceUrl
        ? "Zendesk Support instance URL is configured."
        : "A Zendesk Support instance URL is required.",
    },
    {
      providerPackageId: zendeskTicketingProviderManifest.id,
      requirementId: "zendesk-api-access",
      state: hasApiToken || hasBearer ? "configured" : "missing",
      scopes: ["read", "write"],
      message: hasApiToken || hasBearer
        ? "Zendesk Support API access is configured."
        : "Zendesk OAuth bearer access or an email plus API token are required.",
    },
  ];
}
