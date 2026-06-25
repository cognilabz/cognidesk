import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { createOperationBindingReport } from "@cognidesk/integration-kit";
import { describe, expect, it, vi } from "vitest";
import {
  createOracleServiceTicketingClient,
  createOracleServiceTicketingIntegration,
  createOracleServiceTicketingOperationHandlers,
  oracleServiceTicketingProviderManifest,
} from "../src/index.js";
import {
  oracleServiceProviderClientOperationTargets,
  oracleServiceRejectedProviderSdkCandidates,
} from "../src/manifest.js";

describe("@cognidesk/integration-ticketing-oracle-service", () => {
  it("keeps the manifest-only entry metadata-only and scoped", async () => {
    const manifestModule = await import("../src/manifest.js");
    expect(manifestModule).toHaveProperty("oracleServiceTicketingProviderManifest");
    expect(manifestModule).not.toHaveProperty("createOracleServiceTicketingClient");
    expect(oracleServiceTicketingProviderManifest).toMatchObject({
      packageName: "@cognidesk/integration-ticketing-oracle-service",
      coverage: { scope: "support-workflow-subset" },
      metadata: {
        implementationStrategy: {
          strategy: "no-official-sdk-rest-adapter",
          result: "no-suitable-maintained-runtime-provider-sdk",
          exception: "provider-rest-adapter",
        },
        sdkDecision: {
          result: "provider-rest-adapter-exception",
          providerRestAdapterException: true,
          viableMaintainedRuntimeProviderSdk: false,
          acceptedRuntimeProviderSdk: null,
          rejectedLibraries: oracleServiceRejectedProviderSdkCandidates,
        },
        implementation: {
          strategy: "provider-rest-adapter",
          adapterKind: "no-official-sdk-rest-adapter",
          defaultClient: "built-in-oracle-fusion-service-rest-adapter",
        },
        providerClient: {
          interface: "OracleServiceTicketingProviderClient",
          defaultClientPolicy: "built-in-provider-rest-adapter",
        },
        providerRestAdapterOperationSlice: {
          sourceKind: "provider-rest-adapter",
          adapterKind: "no-official-sdk-rest-adapter",
        },
      },
    });
    expect(oracleServiceProviderClientOperationTargets.map((operation) => operation.alias)).toEqual([
      "ticket.create",
      "ticket.read",
      "ticket.update",
      "ticket.search",
      "oracle-service.serviceRequestMessage.create",
    ]);
    expect(oracleServiceRejectedProviderSdkCandidates.map((candidate) => candidate.packageName)).toEqual([
      "oci-fusionapps",
      "oci-sdk",
      "osvc_node",
    ]);
  });

  it("binds declared operations to executable handlers", async () => {
    const providerClient = {
      createServiceRequest: vi.fn(async () => ({ SrNumber: "SR-1" })),
      getServiceRequest: vi.fn(async () => ({ SrNumber: "SR-1" })),
      updateServiceRequest: vi.fn(async () => ({ SrNumber: "SR-1", StatusCd: "RESOLVED" })),
      createServiceRequestMessage: vi.fn(async () => ({ MessageId: 1 })),
      searchServiceRequests: vi.fn(async () => ({ items: [] })),
      readiness: vi.fn(async () => ({ items: [] })),
    };
    const client = createOracleServiceTicketingClient({ providerClient });
    const handlers = createOracleServiceTicketingOperationHandlers(client);
    expect(createOperationBindingReport(oracleServiceTicketingProviderManifest, handlers)).toMatchObject({
      missingHandlerAliases: [],
      extraHandlerAliases: [],
      invalidExtensionOperationAliases: [],
    });

    const integration = createOracleServiceTicketingIntegration({
      providerClient,
    });
    await expect(integration.run("ticket.read", { srNumber: "SR-1" })).resolves.toMatchObject({ SrNumber: "SR-1" });
    expect(providerClient.getServiceRequest).toHaveBeenCalledWith("SR-1");
  });

  it("depends only on shared Cognidesk packages", () => {
    const packageRoot = dirname(dirname(fileURLToPath(import.meta.url)));
    const packageJson = JSON.parse(readFileSync(join(packageRoot, "package.json"), "utf8"));
    expect(packageJson.dependencies).toEqual({
      "@cognidesk/core": "workspace:*",
      "@cognidesk/integration-kit": "workspace:*",
    });
    expect(packageJson.cognidesk.providerSdkDependencies).toEqual([]);
  });
});
