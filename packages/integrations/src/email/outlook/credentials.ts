import type { ProviderCredentialStatusInput } from "@cognidesk/core";
import type { OutlookCredentialStatusInput } from "./contracts.js";
import { outlookEmailProviderManifest } from "./manifest.js";

export function outlookEmailCredentialStatuses(
  input: OutlookCredentialStatusInput,
): ProviderCredentialStatusInput[] {
  const mailboxConfigured = Boolean(input.userId || input.delegatedMe !== false);
  return [
    {
      providerPackageId: outlookEmailProviderManifest.id,
      requirementId: "microsoft-graph-oauth-access-token",
      state: input.accessToken ? "configured" : "missing",
      scopes: input.scopes ?? [],
      ...(input.expiresAt ? { expiresAt: input.expiresAt } : {}),
      message: input.accessToken
        ? "Microsoft Graph OAuth access token is configured."
        : "A Microsoft Graph OAuth access token with mail permissions is required.",
    },
    {
      providerPackageId: outlookEmailProviderManifest.id,
      requirementId: "microsoft-graph-mailbox-user",
      state: mailboxConfigured ? "configured" : "missing",
      message: input.userId
        ? "A Microsoft Graph mailbox user ID or userPrincipalName is configured."
        : mailboxConfigured
          ? "Delegated Microsoft Graph /me mailbox access is configured."
          : "Configure delegated /me access or a Microsoft Graph mailbox user ID/userPrincipalName.",
    },
    {
      providerPackageId: outlookEmailProviderManifest.id,
      requirementId: "microsoft-graph-webhook-client-state",
      state: input.clientStateConfigured ? "configured" : "missing",
      message: input.clientStateConfigured
        ? "Microsoft Graph webhook clientState validation is configured."
        : "A clientState secret is recommended before accepting Microsoft Graph change notifications.",
    },
  ];
}
