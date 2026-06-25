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
import { sapServiceCloudProviderClientOperations } from "../src/manifest.js";

describe("@cognidesk/integration-ticketing-sap-service-cloud", () => {
  it("keeps the manifest-only entry metadata-only and scoped", async () => {
    const manifestModule = await import("../src/manifest.js");
    expect(manifestModule).toHaveProperty("sapServiceCloudTicketingProviderManifest");
    expect(manifestModule).not.toHaveProperty("createSapServiceCloudTicketingClient");
    expect(sapServiceCloudTicketingProviderManifest).toMatchObject({
      packageName: "@cognidesk/integration-ticketing-sap-service-cloud",
      coverage: { scope: "support-workflow-subset" },
      metadata: {
        implementationStrategy: "no-official-service-sdk-odata-rest-adapter",
        implementation: {
          strategy: "provider-rest-adapter",
          adapterKind: "no-official-service-sdk-odata-rest-adapter",
          defaultHttpClient: "built-in-fetch",
          defaultFetchClient: "built-in-provider-rest-adapter",
          packageOwnedRestClient: true,
        },
        providerClient: {
          interface: "SapServiceCloudTicketingProviderClient",
          defaultClient: "built-in-odata-rest-adapter",
        },
      },
    });
    expect(sapServiceCloudTicketingProviderManifest.metadata).not.toHaveProperty("supportOperationSlice");
    expect(JSON.stringify(sapServiceCloudTicketingProviderManifest.metadata)).not.toContain("direct-http-support-slice");
    expect(sapServiceCloudProviderClientOperations.map((operation) => operation.alias)).toEqual([
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
      providerClient: client,
    });
    await expect(integration.run("ticket.read", { objectId: "object-1" })).resolves.toMatchObject({
      ObjectID: "object-1",
    });
    expect(client.getServiceRequest).toHaveBeenCalledWith("object-1");
  });

  it("keeps SAP SDK review as metadata and avoids package-owned runtime SDK dependencies", () => {
    const packageRoot = dirname(dirname(fileURLToPath(import.meta.url)));
    const packageJson = JSON.parse(readFileSync(join(packageRoot, "package.json"), "utf8"));
    expect(packageJson.dependencies).toEqual({
      "@cognidesk/core": "workspace:*",
      "@cognidesk/integration-kit": "workspace:*",
    });
    expect(sapServiceCloudTicketingProviderManifest.metadata?.checkedProviderSdk).toMatchObject({
      verdict: "no-official-service-sdk-rest-adapter",
      candidates: expect.arrayContaining([
        expect.objectContaining({ package: "@sap-cloud-sdk/odata-v2", checkedVersion: "4.7.0", result: "not-used-as-package-default" }),
        expect.objectContaining({ package: "@sap-cloud-sdk/http-client", checkedVersion: "4.7.0", result: "not-used-as-package-default" }),
      ]),
    });
  });
});
