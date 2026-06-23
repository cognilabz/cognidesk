import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import {
  assertIntegrationConformance,
  expect,
  it,
  teamsWorkplaceCredentialStatuses,
  teamsWorkplaceIntegration,
  teamsWorkplaceOperationAliases,
  teamsWorkplaceOperationHandlers,
  teamsWorkplaceProviderManifest,
} from "./helpers.js";

export function registerTeamsManifestTests() {
  it("exports an official split-package provider manifest for Microsoft Teams workplace support", () => {
    expect(teamsWorkplaceProviderManifest).toMatchObject({
      id: "workplace.teams",
      packageName: "@cognidesk/integration-workplace-teams",
      category: "workplace",
      provider: "teams",
      trustLevel: "official",
      coverage: {
        scope: "provider-api-subset",
      },
      metadata: {
        implementation: {
          strategy: "official-sdk",
          sdkPackage: "@microsoft/microsoft-graph-client",
          rawClientEscapeHatch: "rawClient",
          manifestOnlyExport: "@cognidesk/integration-workplace-teams/manifest",
        },
      },
    });
    expect(teamsWorkplaceProviderManifest.operations.map((operation) => operation.alias))
      .toEqual(Object.values(teamsWorkplaceOperationAliases));
    expect(teamsWorkplaceProviderManifest.capabilities.map((capability) => capability.capability))
      .toEqual(expect.arrayContaining([
        "receive",
        "send",
        "notify",
        "thread",
        "read-provider-object",
        "create-provider-object",
        "update-provider-object",
      ]));
    expect(teamsWorkplaceProviderManifest.coverage.notes.join(" "))
      .toContain("@microsoft/microsoft-graph-client");
    expect(teamsWorkplaceProviderManifest.coverage.notes.join(" "))
      .toContain("not full Microsoft Graph coverage");
    expect(teamsWorkplaceProviderManifest.coverage.evidence.map((evidence) => evidence.url))
      .toEqual(expect.arrayContaining([
        "https://www.npmjs.com/package/@microsoft/microsoft-graph-client",
        "https://learn.microsoft.com/en-us/graph/api/channel-post-messages?view=graph-rest-1.0",
        "https://learn.microsoft.com/en-us/graph/api/chatmessage-list-replies?view=graph-rest-1.0",
        "https://learn.microsoft.com/en-us/graph/api/subscription-post-subscriptions?view=graph-rest-1.0",
      ]));
    expect(teamsWorkplaceProviderManifest.privacyNotes.join(" ")).toContain("Internal visibility");
    expect(teamsWorkplaceProviderManifest.limitations.join(" ")).toContain("tenant/admin consent");
    expect(teamsWorkplaceProviderManifest.limitations.join(" ")).toContain("reject application permission mode");
  });

  it("keeps /manifest free of Microsoft Graph runtime imports", () => {
    const manifestSource = readFileSync(fileURLToPath(new URL("../src/manifest.ts", import.meta.url)), "utf8");

    expect(manifestSource).not.toMatch(/from\s+["']@microsoft\/microsoft-graph-client/);
    expect(manifestSource).not.toMatch(/import\(["']@microsoft\/microsoft-graph-client/);
    expect(manifestSource).not.toContain("createTeamsWorkplaceClient");
    expect(manifestSource).not.toContain("Client.init");
  });

  it("binds every manifest operation alias to exactly one handler", () => {
    expect(assertIntegrationConformance({
      manifest: teamsWorkplaceProviderManifest,
      operations: teamsWorkplaceOperationHandlers,
    })).toMatchObject({
      missingHandlerAliases: [],
      extraHandlerAliases: [],
      invalidExtensionOperationAliases: [],
    });
    expect(teamsWorkplaceIntegration.operationAliases).toEqual(Object.values(teamsWorkplaceOperationAliases));
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
