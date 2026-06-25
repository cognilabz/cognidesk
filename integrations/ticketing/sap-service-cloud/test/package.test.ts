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
        implementationStrategy: "sap-cloud-sdk-http-client-odata-adapter",
        implementation: {
          strategy: "provider-sdk-http-client-odata-adapter",
          adapterKind: "sap-cloud-sdk-http-client-odata-adapter",
          providerSdkPackage: "@sap-cloud-sdk/http-client",
          defaultHttpClient: "executeHttpRequest",
          defaultFetchClient: "host-fetch-override-only",
          packageOwnedODataMapping: true,
        },
        providerClient: {
          interface: "SapServiceCloudTicketingProviderClient",
          defaultClient: "built-in-odata-adapter-backed-by-sap-cloud-sdk-http-client",
        },
        providerSdkRuntime: {
          package: "@sap-cloud-sdk/http-client",
          checkedVersion: "4.7.0",
          importedRuntimeFunction: "executeHttpRequest",
          importedRuntimeTypes: ["HttpRequestConfig", "HttpResponse", "Method"],
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

  it("declares and documents the SAP Cloud SDK HTTP client runtime dependency", () => {
    const packageRoot = dirname(dirname(fileURLToPath(import.meta.url)));
    const packageJson = JSON.parse(readFileSync(join(packageRoot, "package.json"), "utf8"));
    expect(packageJson.dependencies).toMatchObject({
      "@sap-cloud-sdk/http-client": "^4.7.0",
      "@cognidesk/core": "workspace:*",
      "@cognidesk/integration-kit": "workspace:*",
    });
    expect(packageJson.cognidesk.providerSdkDependencies).toEqual(["@sap-cloud-sdk/http-client"]);
    expect(sapServiceCloudTicketingProviderManifest.metadata?.checkedProviderSdk).toMatchObject({
      verdict: "sdk-backed-generic-odata-http-client",
      candidates: expect.arrayContaining([
        expect.objectContaining({ package: "@sap-cloud-sdk/http-client", checkedVersion: "4.7.0", result: "accepted-runtime-http-client" }),
        expect.objectContaining({ package: "@sap-cloud-sdk/odata-v2", checkedVersion: "4.7.0", result: "not-generated-client-in-this-package" }),
      ]),
    });
  });

  it("marks built-in OData credentials as conditional on the SAP SDK HTTP adapter", () => {
    expect(sapServiceCloudTicketingProviderManifest.credentialRequirements).toEqual(expect.arrayContaining([
      expect.objectContaining({
        id: "sap-service-cloud-provider-client",
        required: false,
        metadata: expect.objectContaining({
          credentialOwnership: "host-managed-override",
          defaultClientPolicy: "built-in-odata-adapter-backed-by-sap-cloud-sdk-http-client",
        }),
      }),
      expect.objectContaining({
        id: "sap-service-cloud-instance",
        required: false,
        metadata: expect.objectContaining({
          requiredWhen: "built-in-odata-adapter-backed-by-sap-cloud-sdk-http-client",
        }),
      }),
      expect.objectContaining({
        id: "sap-service-cloud-api-access",
        required: false,
        metadata: expect.objectContaining({
          requiredWhen: "built-in-odata-adapter-backed-by-sap-cloud-sdk-http-client",
          scopeKind: "internal-capability-labels",
        }),
      }),
    ]));
  });
});
