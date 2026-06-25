import { executeHttpRequest } from "@sap-cloud-sdk/http-client";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { runProviderConformance } from "@cognidesk/test-harness";
import {
  createSapServiceCloudTicketingClient,
  createSapServiceCloudTicketingIntegration,
  createSapServiceCloudTicketingLiveChecks,
  sapServiceCloudTicketingCredentialStatuses,
  sapServiceCloudTicketingProviderManifest,
  type SapServiceCloudTicketingProviderClient,
} from "../src/index.js";

vi.mock("@sap-cloud-sdk/http-client", () => ({
  executeHttpRequest: vi.fn(),
}));

function createProviderClient(): SapServiceCloudTicketingProviderClient {
  return {
    createServiceRequest: vi.fn(async () => ({ ObjectID: "object-1", ID: "8000001", Name: "Damaged baggage" })),
    getServiceRequest: vi.fn(async () => ({ ObjectID: "object-1", ID: "8000001" })),
    updateServiceRequest: vi.fn(async () => ({ ObjectID: "object-1", StatusCode: "2" })),
    searchServiceRequests: vi.fn(async () => ({ results: [{ ObjectID: "object-1", ID: "8000001" }], count: "1" })),
    readiness: vi.fn(async () => ({ results: [{ ObjectID: "object-1", ID: "8000001" }] })),
  };
}

describe("@cognidesk/integration-ticketing-sap-service-cloud", () => {
  beforeEach(() => {
    vi.mocked(executeHttpRequest).mockReset();
  });

  it("exports an official provider manifest for SAP Service Cloud ticketing", () => {
    expect(sapServiceCloudTicketingProviderManifest).toMatchObject({
      id: "ticketing.sap-service-cloud",
      packageName: "@cognidesk/integration-ticketing-sap-service-cloud",
      category: "ticketing",
      provider: "sap-service-cloud",
      trustLevel: "official",
    });
  });

  it("declares docs-backed scoped SAP Service Cloud coverage with built-in OData transport", () => {
    expect(sapServiceCloudTicketingProviderManifest.coverage.scope).toBe("support-workflow-subset");
    expect(sapServiceCloudTicketingProviderManifest.coverage.notes.join(" ")).toContain("not full SAP Service Cloud API coverage");
    expect(sapServiceCloudTicketingProviderManifest.coverage.notes.join(" ")).toContain("built-in SAP Service Cloud OData adapter");
    expect(sapServiceCloudTicketingProviderManifest.coverage.evidence.map((item) => item.url)).toEqual(expect.arrayContaining([
      "https://help.sap.com/docs/sap-cloud-for-customer/odata-services/sap-cloud-for-customer-odata-api",
      "https://help.sap.com/docs/sap-cloud-for-customer/1364b70b9cbb417ea5e2d80e966d4f49/6c0a463cc9ca450cbd01a9a5057ce682.html",
      "https://help.sap.com/docs/r/1364b70b9cbb417ea5e2d80e966d4f49/LATEST/en-US/6cb5cd1ebe1c49d8b99c22afa29aa5d4.html",
      "https://help.sap.com/doc/77979cd206da4b7f9bd264b390d373fc/CLOUD/en-US/OData_Services.pdf",
    ]));
    const handoff = sapServiceCloudTicketingProviderManifest.capabilities.find((capability) => capability.capability === "handoff");
    expect(handoff?.providerObjects).toEqual(expect.arrayContaining([
      expect.objectContaining({ kind: "sapServiceRequest", schemaName: "ServiceRequestCollection" }),
    ]));
    expect(sapServiceCloudTicketingProviderManifest.metadata).toMatchObject({
      implementationStrategy: "sap-cloud-sdk-http-client-odata-adapter",
      implementation: {
        strategy: "provider-sdk-http-client-odata-adapter",
        adapterKind: "sap-cloud-sdk-http-client-odata-adapter",
        providerSdkPackage: "@sap-cloud-sdk/http-client",
        defaultHttpClient: "executeHttpRequest",
        defaultFetchClient: "host-fetch-override-only",
        packageOwnedODataMapping: true,
      },
      checkedProviderApiCoverage: {
        coverageArtifact: "docs/provider-coverage/sap-service-cloud-checked-c4c-odata-2026-06-18.inventory.json",
        checkedFamilyCount: 3,
        implementedFamilyCount: 2,
        gapFamilyCount: 1,
        implementedOperationCount: 4,
      },
    });
    expect(JSON.stringify(sapServiceCloudTicketingProviderManifest.metadata)).not.toContain("direct-http-support-slice");
  });

  it("uses the official SAP Cloud SDK HTTP client by default when credentials are provided", async () => {
    vi.mocked(executeHttpRequest).mockResolvedValueOnce({
      data: { d: { ObjectID: "object-1", ID: "8000001", Name: "Damaged baggage" } },
      status: 201,
      headers: {},
      request: {},
    } as Awaited<ReturnType<typeof executeHttpRequest>>);
    const client = createSapServiceCloudTicketingClient({
      baseUrl: "https://tenant.crm.ondemand.com/",
      accessToken: "sap-token",
      csrfToken: "csrf-token",
    });

    await expect(client.createServiceRequest({
      name: "Damaged baggage",
      processingTypeCode: "SRRQ",
      servicePriorityCode: "3",
      fields: { DataOriginTypeCode: "4" },
    })).resolves.toMatchObject({ ID: "8000001" });

    expect(executeHttpRequest).toHaveBeenCalledWith(
      { url: "https://tenant.crm.ondemand.com" },
      expect.objectContaining({
        method: "POST",
        url: "/sap/c4c/odata/v1/c4codataapi/ServiceRequestCollection",
        headers: expect.objectContaining({
          Authorization: "Bearer sap-token",
          "x-csrf-token": "csrf-token",
        }),
        data: {
          Name: "Damaged baggage",
          ProcessingTypeCode: "SRRQ",
          ServicePriorityCode: "3",
          DataOriginTypeCode: "4",
        },
      }),
      { fetchCsrfToken: false },
    );
  });

  it("keeps the explicit fetch override path for host-controlled OData transport", async () => {
    const fetchMock = vi.fn(async () =>
      jsonResponse({ d: { ObjectID: "object-1", ID: "8000001", Name: "Damaged baggage" } })
    );
    const client = createSapServiceCloudTicketingClient({
      baseUrl: "https://tenant.crm.ondemand.com/",
      accessToken: "sap-token",
      fetch: fetchMock,
    });

    await expect(client.createServiceRequest({
      name: "Damaged baggage",
      processingTypeCode: "SRRQ",
      servicePriorityCode: "3",
      fields: { DataOriginTypeCode: "4" },
    })).resolves.toMatchObject({ ID: "8000001" });

    const [url, init] = fetchCall(fetchMock);
    expect(url).toBe("https://tenant.crm.ondemand.com/sap/c4c/odata/v1/c4codataapi/ServiceRequestCollection");
    expect(init.method).toBe("POST");
    expect(headerValue(init, "authorization")).toBe("Bearer sap-token");
    expect(headerValue(init, "content-type")).toContain("application/json");
    expect(jsonBody(init)).toEqual({
      Name: "Damaged baggage",
      ProcessingTypeCode: "SRRQ",
      ServicePriorityCode: "3",
      DataOriginTypeCode: "4",
    });
    expect(executeHttpRequest).not.toHaveBeenCalled();
  });

  it("encodes SAP OData keys and query parameters for built-in operations", async () => {
    const fetchMock = vi.fn(async () => jsonResponse({ d: { results: [], __count: "0" } }));
    const client = createSapServiceCloudTicketingClient({
      baseUrl: "https://tenant.crm.ondemand.com",
      accessToken: "sap-token",
      csrfToken: "csrf-token",
      fetch: fetchMock,
    });

    await client.updateServiceRequest("object/1'quoted", {
      statusCode: "2",
      fields: { ServicePriorityCode: "1" },
    }, "etag-1");
    await client.searchServiceRequests({
      filter: "ID eq '8000001'",
      select: ["ObjectID", "ID"],
      expand: ["ServiceRequestDescription"],
      orderBy: "ID desc",
      top: 5,
      skip: 10,
      inlineCount: "allpages",
    });

    const [updateUrl, updateInit] = fetchCall(fetchMock, 0);
    expect(new URL(updateUrl).pathname).toBe(
      "/sap/c4c/odata/v1/c4codataapi/ServiceRequestCollection('object%2F1''quoted')",
    );
    expect(updateInit.method).toBe("PATCH");
    expect(headerValue(updateInit, "if-match")).toBe("etag-1");
    expect(headerValue(updateInit, "x-csrf-token")).toBe("csrf-token");
    expect(jsonBody(updateInit)).toEqual({
      StatusCode: "2",
      ServicePriorityCode: "1",
    });

    const [searchUrl] = fetchCall(fetchMock, 1);
    const query = new URL(searchUrl).searchParams;
    expect(query.get("$filter")).toBe("ID eq '8000001'");
    expect(query.get("$select")).toBe("ObjectID,ID");
    expect(query.get("$expand")).toBe("ServiceRequestDescription");
    expect(query.get("$orderby")).toBe("ID desc");
    expect(query.get("$top")).toBe("5");
    expect(query.get("$skip")).toBe("10");
    expect(query.get("$inlinecount")).toBe("allpages");
  });

  it("surfaces SAP OData JSON errors with status and payload", async () => {
    const fetchMock = vi.fn(async () =>
      jsonResponse({ error: { code: "NOT_FOUND", message: { value: "Invalid ObjectID." } } }, {
        status: 404,
        statusText: "Not Found",
      })
    );
    const client = createSapServiceCloudTicketingClient({
      baseUrl: "https://tenant.crm.ondemand.com",
      accessToken: "sap-token",
      fetch: fetchMock,
    });

    await expect(client.getServiceRequest("missing")).rejects.toMatchObject({
      name: "SapServiceCloudProviderApiError",
      status: 404,
      message: "Invalid ObjectID.",
      body: expect.objectContaining({ error: expect.any(Object) }),
    });
  });

  it("surfaces SAP Cloud SDK HTTP errors with status and payload", async () => {
    vi.mocked(executeHttpRequest).mockRejectedValueOnce({
      response: {
        status: 404,
        statusText: "Not Found",
        headers: { "x-correlationid": "correlation-1" },
        data: { error: { code: "NOT_FOUND", message: { value: "Invalid ObjectID." } } },
      },
    });
    const client = createSapServiceCloudTicketingClient({
      baseUrl: "https://tenant.crm.ondemand.com",
      accessToken: "sap-token",
    });

    await expect(client.getServiceRequest("missing")).rejects.toMatchObject({
      name: "SapServiceCloudProviderApiError",
      status: 404,
      message: "Invalid ObjectID.",
      body: expect.objectContaining({ error: expect.any(Object) }),
      response: expect.objectContaining({ requestId: "correlation-1" }),
    });
  });

  it("delegates SAP Service Cloud ticket operations to the host provider client", async () => {
    const providerClient = createProviderClient();
    const client = createSapServiceCloudTicketingClient({ providerClient });

    await expect(client.createServiceRequest({
      name: "Damaged baggage",
      processingTypeCode: "SRRQ",
      servicePriorityCode: "3",
      fields: { DataOriginTypeCode: "4" },
    })).resolves.toMatchObject({ ID: "8000001" });
    expect(providerClient.createServiceRequest).toHaveBeenCalledWith({
      name: "Damaged baggage",
      processingTypeCode: "SRRQ",
      servicePriorityCode: "3",
      fields: { DataOriginTypeCode: "4" },
    });

    await expect(client.searchServiceRequests({
      filter: "ID eq '8000001'",
      select: ["ObjectID", "ID"],
      top: 5,
      inlineCount: "allpages",
    })).resolves.toMatchObject({ count: "1" });
    expect(providerClient.searchServiceRequests).toHaveBeenCalledWith({
      filter: "ID eq '8000001'",
      select: ["ObjectID", "ID"],
      top: 5,
      inlineCount: "allpages",
    });

    const integration = createSapServiceCloudTicketingIntegration({ providerClient });
    await expect(integration.run("ticket.update", {
      objectId: "object-1",
      statusCode: "2",
      etag: "etag-1",
    })).resolves.toMatchObject({ StatusCode: "2" });
    expect(providerClient.updateServiceRequest).toHaveBeenCalledWith("object-1", { statusCode: "2" }, "etag-1");
  });

  it("requires either providerClient or OData credentials before executing operations", async () => {
    const client = createSapServiceCloudTicketingClient();
    await expect(client.searchServiceRequests()).rejects.toThrow("baseUrl plus accessToken");

    const integration = createSapServiceCloudTicketingIntegration();
    await expect(integration.run("ticket.read", { objectId: "object-1" })).rejects.toThrow("baseUrl plus accessToken");

    const [check] = createSapServiceCloudTicketingLiveChecks({});
    if (!check) throw new Error("Expected SAP Service Cloud live check to be registered.");
    await expect(check.run({})).rejects.toThrow("baseUrl plus accessToken");
  });

  it("rejects partial provider clients before binding runtime operations", () => {
    expect(() => createSapServiceCloudTicketingClient({
      providerClient: {
        createServiceRequest: vi.fn(),
      } as unknown as SapServiceCloudTicketingProviderClient,
    })).toThrow("SapServiceCloudTicketingProviderClient must implement getServiceRequest()");
  });

  it("reports live conformance as credential-blocked until SAP host client access is configured", async () => {
    const result = await runProviderConformance({
      manifest: sapServiceCloudTicketingProviderManifest,
      channels: [{
        id: "ticketing",
        channel: "ticketing",
        providerPackageIds: [sapServiceCloudTicketingProviderManifest.id],
        enabledCapabilities: ["handoff", "create-provider-object", "read-provider-object", "update-provider-object", "search-provider-object"],
      }],
      credentialStatuses: sapServiceCloudTicketingCredentialStatuses({}),
      live: {
        enabled: true,
        checks: createSapServiceCloudTicketingLiveChecks({
          client: { async readiness() {
            return { results: [] };
          } },
        }),
      },
    });

    expect(result.status).toBe("credential-blocked");
    expect(result.checks).toContainEqual(expect.objectContaining({
      id: "provider.live.service-request-collection",
      status: "credential-blocked",
    }));
  });

  it("passes conformance when SAP live checks and host-client credentials are configured", async () => {
    const result = await runProviderConformance({
      manifest: sapServiceCloudTicketingProviderManifest,
      channels: [{
        id: "ticketing",
        channel: "ticketing",
        providerPackageIds: [sapServiceCloudTicketingProviderManifest.id],
        enabledCapabilities: ["handoff", "create-provider-object", "read-provider-object", "update-provider-object", "search-provider-object"],
      }],
      credentialStatuses: sapServiceCloudTicketingCredentialStatuses({
        baseUrl: "https://tenant.crm.ondemand.com",
        accessToken: "configured",
      }),
      live: {
        enabled: true,
        checks: createSapServiceCloudTicketingLiveChecks({
          client: { async readiness() {
            return { results: [{ ObjectID: "object-1", ID: "8000001" }] };
          } },
        }),
      },
    });

    expect(result.status).toBe("passed");
  });
});

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
