import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { createOperationBindingReport } from "@cognidesk/integration-kit";
import { describe, expect, it, vi } from "vitest";
import {
  createPegaCustomerServiceTicketingIntegration,
  createPegaCustomerServiceTicketingOperationHandlers,
  pegaCustomerServiceTicketingProviderManifest,
} from "../src/index.js";
import { pegaCustomerServiceDelegatedOperationAllowlist } from "../src/manifest.js";

describe("@cognidesk/integration-ticketing-pega-customer-service", () => {
  it("keeps the manifest-only entry metadata-only and scoped", async () => {
    const manifestModule = await import("../src/manifest.js");
    expect(manifestModule).toHaveProperty("pegaCustomerServiceTicketingProviderManifest");
    expect(manifestModule).not.toHaveProperty("createPegaCustomerServiceTicketingClient");
    expect(pegaCustomerServiceTicketingProviderManifest).toMatchObject({
      packageName: "@cognidesk/integration-ticketing-pega-customer-service",
      coverage: { scope: "support-workflow-subset" },
      metadata: {
        implementationStrategy: { strategy: "no-official-sdk-rest-adapter" },
        implementation: {
          strategy: "provider-rest-adapter",
          adapterKind: "no-official-sdk-rest-adapter",
          defaultFetchClient: "built-in-provider-rest-adapter",
        },
        providerClient: {
          interface: "PegaCustomerServiceProviderClient",
          injectionPolicy: "optional-runtime-override",
          defaultClient: "built-in-dx-rest-adapter",
        },
        providerRestAdapterSupportSurface: {
          source: "Built-in Pega DX REST adapter",
          adapterKind: "no-official-sdk-rest-adapter",
        },
      },
    });
    expect(pegaCustomerServiceDelegatedOperationAllowlist.map((operation) => operation.alias)).toEqual([
      "ticket.create",
      "ticket.read",
      "ticket.update",
      "ticket.search",
      "pega-customer-service.caseTypes.list",
      "pega-customer-service.assignmentAction.submit",
    ]);
    expect(pegaCustomerServiceDelegatedOperationAllowlist.map((operation) => operation.providerClientMethod)).toEqual([
      "createCase",
      "getCase",
      "updateCase",
      "searchCases",
      "listCaseTypes",
      "performAssignmentAction",
    ]);
  });

  it("binds declared operations to executable handlers", async () => {
    const client = {
      createCase: vi.fn(async () => ({ caseID: "C-1" })),
      getCase: vi.fn(async () => ({ caseID: "C-1" })),
      updateCase: vi.fn(async () => ({ caseID: "C-1", status: "Resolved" })),
      performAssignmentAction: vi.fn(async () => ({ status: "Resolved" })),
      searchCases: vi.fn(async () => ({ cases: [] })),
      listCaseTypes: vi.fn(async () => []),
      readiness: vi.fn(async () => []),
    };
    const handlers = createPegaCustomerServiceTicketingOperationHandlers(client);
    expect(createOperationBindingReport(pegaCustomerServiceTicketingProviderManifest, handlers)).toMatchObject({
      missingHandlerAliases: [],
      extraHandlerAliases: [],
      invalidExtensionOperationAliases: [],
    });

    const integration = createPegaCustomerServiceTicketingIntegration({
      providerClient: client,
    });
    await expect(integration.run("ticket.read", { caseId: "C-1" })).resolves.toMatchObject({ caseID: "C-1" });
    expect(client.getCase).toHaveBeenCalledWith("C-1");
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
