import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import {
  assertIntegrationConformance,
  describe,
  expect,
  it,
  outlookEmailIntegration,
  outlookEmailOperationAliases,
  outlookEmailOperationHandlers,
  outlookEmailProviderManifest,
} from "./helpers.js";

describe("@cognidesk/integration-email-outlook manifest", () => {
  it("exports an official split-package provider manifest for Outlook email", () => {
    expect(outlookEmailProviderManifest).toMatchObject({
      id: "email.outlook",
      packageName: "@cognidesk/integration-email-outlook",
      category: "email",
      provider: "outlook",
      trustLevel: "official",
      coverage: {
        scope: "provider-api-subset",
      },
      metadata: {
        implementation: {
          strategy: "official-sdk",
          sdkPackage: "@microsoft/microsoft-graph-client",
          rawClientEscapeHatch: "rawClient",
          manifestOnlyExport: "@cognidesk/integration-email-outlook/manifest",
        },
      },
    });
    expect(outlookEmailProviderManifest.operations.map((operation) => operation.alias))
      .toEqual(Object.values(outlookEmailOperationAliases));
    expect(outlookEmailProviderManifest.coverage.notes.join(" "))
      .toContain("@microsoft/microsoft-graph-client");
    expect(outlookEmailProviderManifest.coverage.notes.join(" "))
      .toContain("not full Microsoft Graph coverage");
    expect(outlookEmailProviderManifest.coverage.evidence.map((evidence) => evidence.url))
      .toEqual(expect.arrayContaining([
        "https://www.npmjs.com/package/@microsoft/microsoft-graph-client",
        "https://learn.microsoft.com/en-us/graph/api/message-delta?view=graph-rest-1.0",
        "https://learn.microsoft.com/en-us/graph/api/subscription-post-subscriptions?view=graph-rest-1.0",
      ]));
  });

  it("keeps /manifest free of Microsoft Graph runtime imports", () => {
    const manifestSource = readFileSync(fileURLToPath(new URL("../src/manifest.ts", import.meta.url)), "utf8");

    expect(manifestSource).not.toMatch(/from\s+["']@microsoft\/microsoft-graph-client/);
    expect(manifestSource).not.toMatch(/import\(["']@microsoft\/microsoft-graph-client/);
    expect(manifestSource).not.toContain("createOutlookEmailClient");
    expect(manifestSource).not.toContain("Client.init");
  });

  it("binds every manifest operation alias to exactly one handler", () => {
    expect(assertIntegrationConformance({
      manifest: outlookEmailProviderManifest,
      operations: outlookEmailOperationHandlers,
    })).toMatchObject({
      missingHandlerAliases: [],
      extraHandlerAliases: [],
      invalidExtensionOperationAliases: [],
    });
    expect(outlookEmailIntegration.operationAliases).toEqual(Object.values(outlookEmailOperationAliases));
  });
});
