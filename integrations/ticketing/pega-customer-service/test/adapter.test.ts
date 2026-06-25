import { describe, expect, it, vi } from "vitest";
import { runProviderConformance } from "@cognidesk/test-harness";
import {
  createPegaCustomerServiceTicketingClient,
  createPegaCustomerServiceTicketingLiveChecks,
  pegaCustomerServiceTicketingCredentialStatuses,
  pegaCustomerServiceTicketingProviderManifest,
  type PegaCustomerServiceProviderClient,
} from "../src/index.js";

describe("@cognidesk/integration-ticketing-pega-customer-service", () => {
  it("exports an official provider manifest for Pega Customer Service ticketing", () => {
    expect(pegaCustomerServiceTicketingProviderManifest).toMatchObject({
      id: "ticketing.pega-customer-service",
      packageName: "@cognidesk/integration-ticketing-pega-customer-service",
      category: "ticketing",
      provider: "pega-customer-service",
      trustLevel: "official",
    });
  });

  it("declares docs-backed scoped Pega Customer Service coverage", () => {
    expect(pegaCustomerServiceTicketingProviderManifest.coverage.scope).toBe("support-workflow-subset");
    expect(pegaCustomerServiceTicketingProviderManifest.coverage.notes.join(" ")).toContain("built-in Pega DX REST adapter");
    expect(pegaCustomerServiceTicketingProviderManifest.coverage.notes.join(" ")).toContain("not full Pega Customer Service");
    expect(pegaCustomerServiceTicketingProviderManifest.coverage.evidence.map((item) => item.url)).toEqual(expect.arrayContaining([
      "https://docs.pega.com/bundle/dx-api/page/platform/dx-api/dx-api-overview.html",
      "https://docs.pega.com/bundle/dx-api/page/platform/dx-api/managing-cases-dx-api.html",
      "https://docs.pega.com/bundle/dx-api/page/platform/dx-api/endpoint-post-cases.html",
      "https://docs.pega.com/bundle/dx-api/page/platform/dx-api/endpoint-get-cases.html",
      "https://docs.pega.com/bundle/dx-api/page/platform/dx-api/endpoint-get-cases-id.html",
      "https://docs.pega.com/bundle/dx-api/page/platform/dx-api/endpoint-put-cases-id.html",
      "https://docs.pega.com/bundle/dx-api/page/platform/dx-api/endpoint-get-casetypes_0.html",
      "https://docs.pega.com/bundle/dx-api/page/platform/dx-api/endpoint-patch-assignments-assignmentid-actions-actionid.html",
      "https://github.com/pegasystems/react-sdk",
      "https://www.npmjs.com/package/@pega/constellationjs",
    ]));
    const handoff = pegaCustomerServiceTicketingProviderManifest.capabilities.find((capability) =>
      capability.capability === "handoff"
    );
    expect(handoff?.label).toBe("Run Pega case handoff action");
    expect(handoff?.description).toContain("assignment actions");
    expect(handoff?.providerObjects?.map((object) => object.kind)).toEqual(expect.arrayContaining([
      "pegaCase",
      "pegaAssignmentAction",
    ]));
    expect(handoff?.label).not.toContain("Attach");
    expect(pegaCustomerServiceTicketingProviderManifest.metadata).toMatchObject({
      implementation: {
        strategy: "provider-rest-adapter",
        adapterKind: "no-official-sdk-rest-adapter",
        defaultHttpClient: "built-in-fetch",
        defaultFetchClient: "built-in-provider-rest-adapter",
      },
      checkedProviderApiCoverage: {
        coverageArtifact: "docs/provider-coverage/pega-customer-service-checked-dx-api-2026-06-18.inventory.json",
        checkedFamilyCount: 4,
        implementedFamilyCount: 3,
        gapFamilyCount: 1,
        implementedOperationCount: 6,
        implementationOwnership: "built-in-provider-rest-adapter",
      },
    });
  });

  it("uses the built-in Pega DX REST adapter when credentials are provided", async () => {
    const fetchMock = vi.fn(async () => jsonResponse({ caseID: "C-1001", status: "New" }));
    const client = createPegaCustomerServiceTicketingClient({
      baseUrl: "https://pega.example.test/prweb/",
      accessToken: "pega-token",
      fetch: fetchMock,
    });

    await expect(client.createCase({
      caseTypeId: "MyCo-CS-Work-Service",
      processId: "pyStartCase",
      content: {
        Subject: "Refund follow-up",
        CustomerEmail: "customer@example.test",
      },
    })).resolves.toMatchObject({ caseID: "C-1001" });

    const [url, init] = fetchCall(fetchMock);
    expect(url).toBe("https://pega.example.test/prweb/api/application/v2/cases");
    expect(init.method).toBe("POST");
    expect(headerValue(init, "authorization")).toBe("Bearer pega-token");
    expect(headerValue(init, "content-type")).toContain("application/json");
    expect(jsonBody(init)).toEqual({
      caseTypeID: "MyCo-CS-Work-Service",
      processID: "pyStartCase",
      content: {
        Subject: "Refund follow-up",
        CustomerEmail: "customer@example.test",
      },
    });
  });

  it("encodes Pega DX paths and query parameters for built-in operations", async () => {
    const fetchMock = vi.fn(async () => jsonResponse({ cases: [], count: 0 }));
    const client = createPegaCustomerServiceTicketingClient({
      baseUrl: "https://pega.example.test",
      accessToken: "pega-token",
      fetch: fetchMock,
    });

    await client.performAssignmentAction({
      assignmentId: "ASSIGN-WORKLIST MYCO-CS-WORK C-1001!REVIEW/STEP",
      actionId: "Approve/Now",
      eTag: "W/\"assignment-version\"",
      content: { Resolution: "Approved" },
    });
    await client.searchCases({
      caseTypeId: "MyCo-CS-Work-Service",
      status: "New",
      page: 2,
      pageSize: 10,
      fields: { owner: "support@example.test" },
    });

    const [actionUrl, actionInit] = fetchCall(fetchMock, 0);
    expect(new URL(actionUrl).pathname).toBe(
      "/api/application/v2/assignments/ASSIGN-WORKLIST%20MYCO-CS-WORK%20C-1001!REVIEW%2FSTEP/actions/Approve%2FNow",
    );
    expect(actionInit.method).toBe("PATCH");
    expect(headerValue(actionInit, "if-match")).toBe("W/\"assignment-version\"");
    expect(jsonBody(actionInit)).toEqual({ content: { Resolution: "Approved" } });

    const [searchUrl] = fetchCall(fetchMock, 1);
    const query = new URL(searchUrl).searchParams;
    expect(query.get("caseTypeID")).toBe("MyCo-CS-Work-Service");
    expect(query.get("status")).toBe("New");
    expect(query.get("page")).toBe("2");
    expect(query.get("pageSize")).toBe("10");
    expect(query.get("owner")).toBe("support@example.test");
  });

  it("surfaces Pega DX JSON errors with status and payload", async () => {
    const fetchMock = vi.fn(async () =>
      jsonResponse({ errors: [{ message: "Case type is invalid." }] }, {
        status: 422,
        statusText: "Unprocessable Entity",
      })
    );
    const client = createPegaCustomerServiceTicketingClient({
      baseUrl: "https://pega.example.test",
      accessToken: "pega-token",
      fetch: fetchMock,
    });

    await expect(client.createCase({ caseTypeId: "Unknown-Work" })).rejects.toMatchObject({
      name: "PegaCustomerServiceProviderApiError",
      status: 422,
      message: "Case type is invalid.",
      body: expect.objectContaining({ errors: expect.any(Array) }),
    });
  });

  it("requires either providerClient or DX REST credentials before executing operations", async () => {
    const client = createPegaCustomerServiceTicketingClient();

    await expect(client.createCase({ caseTypeId: "MyCo-CS-Work-Service" })).rejects.toThrow(
      "baseUrl plus accessToken/auth headers",
    );
  });

  it("delegates Pega case operations to the host-injected provider client", async () => {
    const providerClient = createProviderClientMock();
    const client = createPegaCustomerServiceTicketingClient({ providerClient });
    const createInput = {
      caseTypeId: "MyCo-CS-Work-Service",
      processId: "pyStartCase",
      content: {
        Subject: "Refund follow-up",
        CustomerEmail: "customer@example.test",
      },
    };
    const updateInput = {
      content: { Resolution: "Approved by support" },
      pageInstructions: [{ instruction: "UPDATE", target: "pyWorkPage" }],
    };

    await expect(client.createCase(createInput)).resolves.toMatchObject({ caseID: "C-1001" });
    await expect(client.getCase("C-1001")).resolves.toMatchObject({ caseID: "C-1001" });
    await expect(client.updateCase("C-1001", updateInput)).resolves.toMatchObject({ status: "Resolved" });

    expect(providerClient.createCase).toHaveBeenCalledWith(createInput);
    expect(providerClient.getCase).toHaveBeenCalledWith("C-1001");
    expect(providerClient.updateCase).toHaveBeenCalledWith("C-1001", updateInput);
  });

  it("delegates Pega search, case-type, readiness, and assignment action operations", async () => {
    const providerClient = createProviderClientMock();
    const client = createPegaCustomerServiceTicketingClient({ providerClient });
    const searchInput = {
      caseTypeId: "MyCo-CS-Work-Service",
      status: "New",
      pageSize: 10,
    };
    const actionInput = {
      assignmentId: "ASSIGN-WORKLIST MYCO-CS-WORK C-1001!REVIEW",
      actionId: "Approve",
      eTag: "W/\"assignment-version\"",
      content: { Resolution: "Approved by support" },
      pageInstructions: [{ instruction: "UPDATE", target: "pyWorkPage" }],
    };

    await expect(client.searchCases(searchInput)).resolves.toMatchObject({ count: 1 });
    await expect(client.listCaseTypes()).resolves.toEqual([{ ID: "MyCo-CS-Work-Service", name: "Service Case" }]);
    await expect(client.readiness()).resolves.toEqual([{ ID: "MyCo-CS-Work-Service", name: "Service Case" }]);
    await expect(client.performAssignmentAction(actionInput)).resolves.toMatchObject({ status: "Pending-Review" });

    expect(providerClient.searchCases).toHaveBeenCalledWith(searchInput);
    expect(providerClient.listCaseTypes).toHaveBeenCalledTimes(1);
    expect(providerClient.readiness).toHaveBeenCalledTimes(1);
    expect(providerClient.performAssignmentAction).toHaveBeenCalledWith(actionInput);
  });

  it("reports live conformance as credential-blocked until Pega credentials are configured", async () => {
    const result = await runProviderConformance({
      manifest: pegaCustomerServiceTicketingProviderManifest,
      channels: [{
        id: "ticketing",
        channel: "ticketing",
        providerPackageIds: [pegaCustomerServiceTicketingProviderManifest.id],
        enabledCapabilities: ["create-provider-object", "read-provider-object", "update-provider-object", "search-provider-object", "handoff"],
      }],
      credentialStatuses: pegaCustomerServiceTicketingCredentialStatuses({}),
      live: {
        enabled: true,
        checks: createPegaCustomerServiceTicketingLiveChecks({
          providerClient: { async readiness() {
            return [];
          } },
        }),
      },
    });

    expect(result.status).toBe("credential-blocked");
    expect(result.checks).toContainEqual(expect.objectContaining({
      id: "provider.live.case-types",
      status: "credential-blocked",
    }));
  });

  it("passes conformance when Pega live checks and credentials are configured", async () => {
    const providerClient = createProviderClientMock();
    const result = await runProviderConformance({
      manifest: pegaCustomerServiceTicketingProviderManifest,
      channels: [{
        id: "ticketing",
        channel: "ticketing",
        providerPackageIds: [pegaCustomerServiceTicketingProviderManifest.id],
        enabledCapabilities: ["create-provider-object", "read-provider-object", "update-provider-object", "search-provider-object", "handoff"],
      }],
      credentialStatuses: pegaCustomerServiceTicketingCredentialStatuses({
        baseUrl: "https://pega.example.test",
        accessToken: "configured",
      }),
      live: {
        enabled: true,
        checks: createPegaCustomerServiceTicketingLiveChecks({ providerClient }),
      },
    });

    expect(result.status).toBe("passed");
  });
});

function createProviderClientMock(): PegaCustomerServiceProviderClient {
  return {
    createCase: vi.fn(async () => ({ ID: "C-1001", caseID: "C-1001", status: "New" })),
    getCase: vi.fn(async () => ({ ID: "C-1001", caseID: "C-1001", status: "New" })),
    updateCase: vi.fn(async () => ({ ID: "C-1001", caseID: "C-1001", status: "Resolved" })),
    performAssignmentAction: vi.fn(async () => ({ ID: "C-1001", status: "Pending-Review" })),
    searchCases: vi.fn(async () => ({ cases: [{ ID: "C-1001", status: "New" }], count: 1 })),
    listCaseTypes: vi.fn(async () => [{ ID: "MyCo-CS-Work-Service", name: "Service Case" }]),
    readiness: vi.fn(async () => [{ ID: "MyCo-CS-Work-Service", name: "Service Case" }]),
  };
}

function jsonResponse(body: unknown, init: ResponseInit = {}) {
  return new Response(JSON.stringify(body), {
    headers: { "content-type": "application/json" },
    ...init,
  });
}

function fetchCall(fetchMock: ReturnType<typeof vi.fn>, index = 0): [string, RequestInit] {
  const call = fetchMock.mock.calls[index];
  if (!call) throw new Error(`Missing fetch call ${index}.`);
  return [String(call[0]), call[1] as RequestInit];
}

function headerValue(init: RequestInit, key: string) {
  return new Headers(init.headers).get(key);
}

function jsonBody(init: RequestInit) {
  return JSON.parse(String(init.body)) as unknown;
}
