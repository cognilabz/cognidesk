import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { createOperationBindingReport } from "@cognidesk/integration-kit";
import { describe, expect, it, vi } from "vitest";
import {
  createOracleServiceTicketingIntegration,
  createOracleServiceTicketingOperationHandlers,
  oracleServiceTicketingProviderManifest,
} from "../src/index.js";
import { oracleServiceSupportOperationAllowlist } from "../src/manifest.js";

describe("@cognidesk/integration-ticketing-oracle-service", () => {
  it("keeps the manifest-only entry metadata-only and scoped", async () => {
    const manifestModule = await import("../src/manifest.js");
    expect(manifestModule).toHaveProperty("oracleServiceTicketingProviderManifest");
    expect(manifestModule).not.toHaveProperty("createOracleServiceTicketingClient");
    expect(oracleServiceTicketingProviderManifest).toMatchObject({
      packageName: "@cognidesk/integration-ticketing-oracle-service",
      coverage: { scope: "support-workflow-subset" },
      metadata: {
        implementationStrategy: { strategy: "direct-support-slice" },
        supportOperationSlice: {
          allowlistSha256: "5f3ff8ea4febec8a1f5e4c9d881124c9f215a7b97ebb3ae7a92d7e3f98b370f5",
        },
      },
    });
    expect(oracleServiceSupportOperationAllowlist.map((operation) => operation.alias)).toEqual([
      "ticket.create",
      "ticket.read",
      "ticket.update",
      "ticket.search",
      "oracle-service.serviceRequestMessage.create",
    ]);
  });

  it("binds declared operations to executable handlers", async () => {
    const client = {
      createServiceRequest: vi.fn(async () => ({ SrNumber: "SR-1" })),
      getServiceRequest: vi.fn(async () => ({ SrNumber: "SR-1" })),
      updateServiceRequest: vi.fn(async () => ({ SrNumber: "SR-1", StatusCd: "RESOLVED" })),
      createServiceRequestMessage: vi.fn(async () => ({ MessageId: 1 })),
      searchServiceRequests: vi.fn(async () => ({ items: [] })),
      readiness: vi.fn(async () => ({ items: [] })),
    };
    const handlers = createOracleServiceTicketingOperationHandlers(client);
    expect(createOperationBindingReport(oracleServiceTicketingProviderManifest, handlers)).toMatchObject({
      missingHandlerAliases: [],
      extraHandlerAliases: [],
      invalidExtensionOperationAliases: [],
    });

    const integration = createOracleServiceTicketingIntegration({
      instanceUrl: "https://example.fa.oraclecloud.com",
      accessToken: "token",
      client,
    });
    await expect(integration.run("ticket.read", { srNumber: "SR-1" })).resolves.toMatchObject({ SrNumber: "SR-1" });
    expect(client.getServiceRequest).toHaveBeenCalledWith("SR-1");
  });

  it("depends only on shared Cognidesk packages", () => {
    const packageRoot = dirname(dirname(fileURLToPath(import.meta.url)));
    const packageJson = JSON.parse(readFileSync(join(packageRoot, "package.json"), "utf8"));
    expect(packageJson.dependencies).toEqual({
      "@cognidesk/core": "workspace:*",
      "@cognidesk/integration-kit": "workspace:*",
    });
  });
});
