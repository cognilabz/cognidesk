import {
  expect,
  it,
  TEAMS_GRAPH_API_GENERATED_FUNCTION_COUNT,
  TEAMS_GRAPH_API_OPERATION_COUNT,
  TEAMS_GRAPH_API_PATH_COUNT,
  teamsWorkplaceCredentialStatuses,
  teamsWorkplaceProviderManifest,
} from "./helpers.js";

export function registerTeamsManifestTests() {
  it("exports an official provider manifest for Microsoft Teams workplace support", () => {
    expect(teamsWorkplaceProviderManifest).toMatchObject({
      id: "workplace.teams",
      packageName: "@cognidesk/integrations",
      category: "workplace",
      provider: "teams",
      trustLevel: "official",
      coverage: {
        scope: "provider-api-subset",
      },
    });
    expect(teamsWorkplaceProviderManifest.metadata?.generatedProviderApiVerification).toMatchObject({
      provider: "microsoft-graph-teams-workplace-slice",
      documentedPathCount: 1415,
      documentedOperationCount: 2293,
      implementedOperationCount: 2293,
      unimplementedOperationCount: 0,
      generatedFunctionCount: 2293,
    });
    expect(TEAMS_GRAPH_API_PATH_COUNT).toBe(1415);
    expect(TEAMS_GRAPH_API_OPERATION_COUNT).toBe(2293);
    expect(TEAMS_GRAPH_API_GENERATED_FUNCTION_COUNT).toBe(2293);
    expect(teamsWorkplaceProviderManifest.capabilities.map((capability) => capability.capability))
      .toEqual(expect.arrayContaining([
        "receive",
        "send",
        "notify",
        "thread",
        "read-provider-object",
        "create-provider-object",
        "update-provider-object",
        "teams.change-notification-client-state",
      ]));
    expect(teamsWorkplaceProviderManifest.coverage.notes.join(" "))
      .toContain("generated per-operation functions for the Microsoft Graph v1.0 Teams/workplace collaboration slice");
    expect(teamsWorkplaceProviderManifest.coverage.notes.join(" "))
      .toContain("not full Microsoft Graph coverage");
    expect(teamsWorkplaceProviderManifest.coverage.notes.join(" "))
      .toContain("Normal Teams channel/chat sends require delegated Microsoft Graph permissions");
    expect(teamsWorkplaceProviderManifest.coverage.evidence.map((evidence) => evidence.url))
      .toEqual(expect.arrayContaining([
        "https://github.com/microsoftgraph/msgraph-metadata/blob/master/apis.yaml",
        "https://raw.githubusercontent.com/microsoftgraph/msgraph-metadata/master/openapi/v1.0/openapi.yaml",
        "https://learn.microsoft.com/en-us/graph/api/channel-post-messages?view=graph-rest-1.0",
        "https://learn.microsoft.com/en-us/graph/api/chatmessage-list-replies?view=graph-rest-1.0",
        "https://learn.microsoft.com/en-us/graph/api/subscription-post-subscriptions?view=graph-rest-1.0",
        "https://learn.microsoft.com/en-us/graph/api/resources/call?view=graph-rest-1.0",
        "https://learn.microsoft.com/en-us/graph/api/resources/onlinemeeting?view=graph-rest-1.0",
      ]));
    expect(teamsWorkplaceProviderManifest.privacyNotes.join(" ")).toContain("Internal visibility");
    expect(teamsWorkplaceProviderManifest.limitations.join(" ")).toContain("tenant/admin consent");
    expect(teamsWorkplaceProviderManifest.limitations.join(" ")).toContain("reject application permission mode");
    expect(teamsWorkplaceProviderManifest.limitations.join(" ")).toContain("subscription renewal/delete/reauthorize operations");
    expect(teamsWorkplaceProviderManifest.capabilities.find((capability) =>
      capability.capability === "create-provider-object"
    )?.providerObjects).toEqual([{ kind: "teamsGraphSubscription", label: "Microsoft Graph Subscription" }]);
  });

  it("reports Microsoft Graph OAuth, tenant, app, and clientState readiness without exposing secrets", () => {
    expect(teamsWorkplaceCredentialStatuses({
      accessToken: "configured",
      tenantId: "tenant_123",
      appClientId: "app_123",
      clientState: "secret",
      scopes: ["User.Read", "ChannelMessage.Send"],
      requiredScopes: ["User.Read", "ChannelMessage.Send"],
    })).toMatchObject([
      { requirementId: "microsoft-graph-oauth-access-token", state: "configured" },
      { requirementId: "microsoft-graph-tenant", state: "configured" },
      { requirementId: "microsoft-graph-app-registration", state: "configured" },
      { requirementId: "microsoft-graph-change-notification-client-state", state: "configured" },
    ]);

    expect(teamsWorkplaceCredentialStatuses({
      accessToken: "configured",
      appClientId: "app_123",
      scopes: ["User.Read"],
      requiredScopes: ["User.Read", "ChatMessage.Send"],
      adminConsentGranted: false,
    })).toEqual(expect.arrayContaining([
      expect.objectContaining({
        requirementId: "microsoft-graph-oauth-access-token",
        state: "insufficient-scope",
      }),
      expect.objectContaining({
        requirementId: "microsoft-graph-app-registration",
        state: "permission-blocked",
      }),
    ]));
  });
}
