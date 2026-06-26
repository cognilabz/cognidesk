import type { ProviderCredentialStatusInput } from "@cognidesk/core";
import { createWherebyVideoClient } from "./client.js";
import type { WherebyCredentialStatusInput, WherebyLiveCheckOptions } from "./contracts.js";
import { wherebyVideoProviderManifest } from "./manifest.js";

export function wherebyVideoCredentialStatuses(
  input: WherebyCredentialStatusInput,
): ProviderCredentialStatusInput[] {
  const organizationConfigured = Boolean(input.organizationId || input.subdomain);
  const apiAccessConfigured = Boolean(input.apiAccessConfigured || input.apiKey);
  return [
    {
      providerPackageId: wherebyVideoProviderManifest.id,
      requirementId: "whereby-provider-client",
      state: input.providerClientConfigured ? "configured" : "not-required",
      scopes: input.scopes ?? [],
      message: input.providerClientConfigured
        ? "Host-provided Whereby provider client override is configured."
        : "A host-provided Whereby provider client is optional; the package can use its built-in REST adapter with an API key.",
    },
    {
      providerPackageId: wherebyVideoProviderManifest.id,
      requirementId: "whereby-api-key",
      state: apiAccessConfigured ? "configured" : "missing",
      scopes: input.scopes ?? [],
      message: apiAccessConfigured
        ? "Whereby API access is configured for the built-in REST adapter or host provider client."
        : "Whereby Embedded API key access is required for provider REST operations.",
    },
    {
      providerPackageId: wherebyVideoProviderManifest.id,
      requirementId: "whereby-organization",
      state: organizationConfigured ? "configured" : "not-required",
      message: organizationConfigured
        ? "Whereby organization/subdomain metadata is configured."
        : "Whereby organization/subdomain metadata is optional unless the SDK user enables room URL policy display.",
    },
    {
      providerPackageId: wherebyVideoProviderManifest.id,
      requirementId: "whereby-room-template",
      state: input.roomTemplateConfigured ? "configured" : "not-required",
      message: input.roomTemplateConfigured
        ? "Whereby room template policy is configured."
        : "Whereby room template policy is optional unless the SDK user enables templated meeting creation.",
    },
    {
      providerPackageId: wherebyVideoProviderManifest.id,
      requirementId: "whereby-webhook-signing-secret",
      state: input.webhookSigningSecret ? "configured" : "not-required",
      message: input.webhookSigningSecret
        ? "Whereby webhook signing secret is configured."
        : "Whereby webhook signing secret is required only when accepting webhook events.",
    },
  ];
}

export function createWherebyVideoLiveChecks(options: WherebyLiveCheckOptions) {
  return [{
    id: "meetings-list",
    description: "Whereby provider client can list meetings without creating a meeting.",
    requiredCredentialIds: ["whereby-api-key"],
    async run(context: { signal?: AbortSignal }) {
      const client = options.client ?? createWherebyVideoClient(options);
      const page = await client.listMeetings({ limit: 1 });
      if (context.signal?.aborted) throw new Error("Whereby live meetings-list check aborted.");
      return {
        details: {
          resultCount: Array.isArray(page.results) ? page.results.length : undefined,
          hasCursor: page.cursor !== undefined,
        },
      };
    },
  }];
}
