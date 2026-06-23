import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { createOperationBindingReport } from "@cognidesk/integration-kit";
import { describe, expect, it, vi } from "vitest";
import {
  createSapServiceCloudTicketingIntegration,
  createSapServiceCloudTicketingOperationHandlers,
  sapServiceCloudTicketingProviderManifest,
} from "../src/index.js";
import { sapServiceCloudSupportOperationAllowlist } from "../src/manifest.js";

describe("@cognidesk/integration-ticketing-sap-service-cloud", () => {
  it("keeps the manifest-only entry metadata-only and scoped", async () => {
    const manifestModule = await import("../src/manifest.js");
    expect(manifestModule).toHaveProperty("sapServiceCloudTicketingProviderManifest");
    expect(manifestModule).not.toHaveProperty("createSapServiceCloudTicketingClient");
    expect(sapServiceCloudTicketingProviderManifest).toMatchObject({
      packageName: "@cognidesk/integration-ticketing-sap-service-cloud",
      coverage: { scope: "support-workflow-subset" },
      metadata: {
        implementationStrategy: { strategy: "sdk-viable-reviewed-support-slice" },
        supportOperationSlice: {
          allowlistSha256: "0878a63145c55ce016d71a56643a963adc9fe945c7d0a029286d567e5027f30f",
        },
      },
    });
    expect(sapServiceCloudSupportOperationAllowlist.map((operation) => operation.alias)).toEqual([
      "ticket.create",
      "ticket.read",
      "ticket.update",
      "ticket.search",
    ]);
  });

  it("binds declared operations to executable handlers", async () => {
    const client = {
      createServiceRequest: vi.fn(async () => ({ ObjectID: "object-1" })),
      getServiceRequest: vi.fn(async () => ({ ObjectID: "object-1" })),
      updateServiceRequest: vi.fn(async () => ({ ObjectID: "object-1", StatusCode: "2" })),
      searchServiceRequests: vi.fn(async () => ({ results: [] })),
      readiness: vi.fn(async () => ({ results: [] })),
    };
    const handlers = createSapServiceCloudTicketingOperationHandlers(client);
    expect(createOperationBindingReport(sapServiceCloudTicketingProviderManifest, handlers)).toMatchObject({
      missingHandlerAliases: [],
      extraHandlerAliases: [],
      invalidExtensionOperationAliases: [],
    });

    const integration = createSapServiceCloudTicketingIntegration({
      tenantUrl: "https://example.crm.ondemand.com",
      accessToken: "token",
      client,
    });
    await expect(integration.run("ticket.read", { objectId: "object-1" })).resolves.toMatchObject({
      ObjectID: "object-1",
    });
    expect(client.getServiceRequest).toHaveBeenCalledWith("object-1");
  });

  it("keeps SAP SDK packages recorded as viable metadata rather than runtime dependencies", () => {
    const packageRoot = dirname(dirname(fileURLToPath(import.meta.url)));
    const packageJson = JSON.parse(readFileSync(join(packageRoot, "package.json"), "utf8"));
    expect(packageJson.dependencies).toEqual({
      "@cognidesk/core": "workspace:*",
      "@cognidesk/integration-kit": "workspace:*",
    });
    expect(sapServiceCloudTicketingProviderManifest.metadata?.implementationStrategy).toMatchObject({
      viableLibraries: expect.arrayContaining([
        expect.objectContaining({ packageName: "@sap-cloud-sdk/odata-v2", version: "4.7.0" }),
        expect.objectContaining({ packageName: "@sap-cloud-sdk/http-client", version: "4.7.0" }),
      ]),
    });
  });
});
