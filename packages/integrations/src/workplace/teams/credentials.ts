import type { ProviderCredentialStatusInput } from "@cognidesk/core";
import { createTeamsWorkplaceClient } from "./client.js";
import type {
  TeamsCredentialStatusInput,
  TeamsLiveCheckOptions,
} from "./contracts.js";
import { teamsWorkplaceProviderManifest } from "./manifest.js";

export function teamsWorkplaceCredentialStatuses(
  input: TeamsCredentialStatusInput,
): ProviderCredentialStatusInput[] {
  const missingScopes = (input.requiredScopes ?? [])
    .filter((scope) => !(input.scopes ?? []).includes(scope));
  const accessTokenState = !input.accessToken
    ? "missing"
    : input.expiresAt && Date.parse(input.expiresAt) <= Date.now()
      ? "expired"
      : missingScopes.length > 0
        ? "insufficient-scope"
        : "configured";
  const appState = !input.appClientId
    ? "missing"
    : input.adminConsentGranted === false
      ? "permission-blocked"
      : "configured";

  return [
    {
      providerPackageId: teamsWorkplaceProviderManifest.id,
      requirementId: "microsoft-graph-oauth-access-token",
      state: accessTokenState,
      scopes: input.scopes ?? [],
      ...(input.expiresAt ? { expiresAt: input.expiresAt } : {}),
      message: accessTokenState === "configured"
        ? "Microsoft Graph OAuth access token is configured."
        : accessTokenState === "insufficient-scope"
          ? `Microsoft Graph OAuth access token is missing required scopes: ${missingScopes.join(", ")}.`
          : accessTokenState === "expired"
            ? "Microsoft Graph OAuth access token is expired."
            : "A delegated Microsoft Graph OAuth access token is required for normal Teams message and /me calls.",
    },
    {
      providerPackageId: teamsWorkplaceProviderManifest.id,
      requirementId: "microsoft-graph-tenant",
      state: input.tenantId ? "configured" : "missing",
      message: input.tenantId
        ? "Microsoft Entra tenant is configured."
        : "A Microsoft Entra tenant ID is required for Teams app and consent readiness.",
    },
    {
      providerPackageId: teamsWorkplaceProviderManifest.id,
      requirementId: "microsoft-graph-app-registration",
      state: appState,
      message: appState === "configured"
        ? "Microsoft Graph app registration and consent readiness are configured."
        : appState === "permission-blocked"
          ? "Microsoft Graph app registration is present but tenant/admin consent is blocked or incomplete."
          : "A Microsoft Graph app registration with tenant/admin consent is required.",
    },
    {
      providerPackageId: teamsWorkplaceProviderManifest.id,
      requirementId: "microsoft-graph-change-notification-client-state",
      state: input.clientState ? "configured" : "missing",
      message: input.clientState
        ? "Microsoft Graph change notification clientState is configured."
        : "A clientState secret is recommended for Graph change notification validation.",
    },
  ];
}

export function createTeamsWorkplaceLiveChecks(options: TeamsLiveCheckOptions) {
  return [{
    id: "me",
    description: "Microsoft Graph /me endpoint is reachable with the configured delegated OAuth access token.",
    requiredCredentialIds: ["microsoft-graph-oauth-access-token"],
    async run(context: { signal?: AbortSignal }) {
      const client = options.client ?? createTeamsWorkplaceClient(options);
      const user = await client.getCurrentUser();
      if (context.signal?.aborted) throw new Error("Microsoft Graph /me live check aborted.");
      return {
        details: {
          id: typeof user.id === "string" ? user.id : undefined,
          displayName: typeof user.displayName === "string" ? user.displayName : undefined,
          userPrincipalName: typeof user.userPrincipalName === "string" ? user.userPrincipalName : undefined,
          mail: typeof user.mail === "string" ? user.mail : undefined,
        },
      };
    },
  }];
}
