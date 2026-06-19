import type { ProviderCredentialStatusInput } from "@cognidesk/core";
import { createWherebyVideoClient } from "./client.js";
import type { WherebyCredentialStatusInput, WherebyLiveCheckOptions } from "./contracts.js";
import { wherebyVideoProviderManifest } from "./manifest.js";

export function wherebyVideoCredentialStatuses(
  input: WherebyCredentialStatusInput,
): ProviderCredentialStatusInput[] {
  const organizationConfigured = Boolean(input.organizationId || input.subdomain);
  return [
    {
      providerPackageId: wherebyVideoProviderManifest.id,
      requirementId: "whereby-api-key",
      state: input.apiKey ? "configured" : "missing",
      scopes: input.scopes ?? [],
      message: input.apiKey
        ? "Whereby API key is configured."
        : "A Whereby Embedded API key is required for meeting and room API calls.",
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
    description: "Whereby meetings list endpoint is reachable with the configured API key without creating a meeting.",
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
