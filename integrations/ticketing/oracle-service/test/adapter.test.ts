import { describe, expect, it, vi } from "vitest";
import { runProviderConformance } from "@cognidesk/test-harness";
import {
  createOracleServiceTicketingClient,
  createOracleServiceTicketingIntegration,
  createOracleServiceTicketingLiveChecks,
  type OracleServiceTicketingProviderClient,
  oracleServiceTicketingCredentialStatuses,
  oracleServiceTicketingProviderManifest,
} from "../src/index.js";

describe("@cognidesk/integration-ticketing-oracle-service", () => {
  it("exports an official provider manifest for Oracle Service ticketing", () => {
    expect(oracleServiceTicketingProviderManifest).toMatchObject({
      id: "ticketing.oracle-service",
      packageName: "@cognidesk/integration-ticketing-oracle-service",
      category: "ticketing",
      provider: "oracle-service",
      trustLevel: "official",
    });
    expect(oracleServiceTicketingProviderManifest.capabilities.map((capability) => capability.capability))
      .toEqual(expect.arrayContaining([
        "create-provider-object",
        "read-provider-object",
        "update-provider-object",
        "search-provider-object",
        "handoff",
      ]));
    expect(oracleServiceTicketingProviderManifest.capabilities.flatMap((capability) =>
      capability.providerObjects?.map((object) => object.kind) ?? []
    )).toEqual(expect.arrayContaining([
      "oracleServiceRequest",
      "oracleServiceRequestMessage",
    ]));
  });

  it("declares docs-backed scoped Oracle Service coverage", () => {
    expect(oracleServiceTicketingProviderManifest.coverage.scope).toBe("support-workflow-subset");
    expect(oracleServiceTicketingProviderManifest.coverage.notes.join(" ")).toContain("not full Oracle Fusion Service API coverage");
    expect(oracleServiceTicketingProviderManifest.coverage.evidence.map((item) => item.url)).toEqual(expect.arrayContaining([
      "https://docs.oracle.com/en/cloud/saas/sales/faaps/api-internal-service-requests.html",
      "https://docs.oracle.com/en/cloud/saas/sales/faaps/op-servicerequests-post.html",
      "https://docs.oracle.com/en/cloud/saas/sales/faaps/op-servicerequests-get.html",
      "https://docs.oracle.com/en/cloud/saas/sales/faaps/op-servicerequests-srnumber-get.html",
      "https://docs.oracle.com/en/cloud/saas/sales/faaps/op-servicerequests-srnumber-patch.html",
      "https://docs.oracle.com/en/cloud/saas/sales/faaps/op-servicerequests-srnumber-child-messages-post.html",
    ]));
    expect(oracleServiceTicketingProviderManifest.metadata).toMatchObject({
      checkedProviderApiCoverage: {
        coverageArtifact: "docs/provider-coverage/oracle-service-checked-service-requests-2026-06-18.inventory.json",
        checkedFamilyCount: 5,
        implementedFamilyCount: 3,
        gapFamilyCount: 2,
        implementedOperationCount: 5,
      },
    });
  });

  it("uses the built-in Oracle Fusion Service REST adapter when credentials are provided", async () => {
    const fetchMock = vi.fn(async () =>
      jsonResponse({ SrId: 42, SrNumber: "SR/00042", Title: "Cannot check in" })
    );
    const client = createOracleServiceTicketingClient({
      baseUrl: "https://example.fa.oraclecloud.com/",
      accessToken: "oracle-token",
      fetch: fetchMock,
    });

    await expect(client.createServiceRequest({
      title: "Cannot check in",
      problemDescription: "Customer cannot complete online check-in.",
      severityCode: "ORA_SVC_SEV2",
      fields: { SourceCd: "API" },
    })).resolves.toMatchObject({ SrNumber: "SR/00042" });

    const [url, init] = fetchCall(fetchMock);
    expect(url).toBe("https://example.fa.oraclecloud.com/crmRestApi/resources/11.13.18.05/serviceRequests");
    expect(init.method).toBe("POST");
    expect(headerValue(init, "authorization")).toBe("Bearer oracle-token");
    expect(headerValue(init, "content-type")).toContain("application/json");
    expect(jsonBody(init)).toEqual({
      Title: "Cannot check in",
      ProblemDescription: "Customer cannot complete online check-in.",
      SeverityCd: "ORA_SVC_SEV2",
      SourceCd: "API",
    });
  });

  it("encodes Oracle REST paths and query parameters for built-in operations", async () => {
    const fetchMock = vi.fn(async () => jsonResponse({ items: [], count: 0 }));
    const client = createOracleServiceTicketingClient({
      baseUrl: "https://example.fa.oraclecloud.com",
      auth: { type: "basic", username: "svc-user", password: "svc-pass" },
      fetch: fetchMock,
    });

    await client.createServiceRequestMessage({
      srNumber: "SR/00042",
      messageTypeCode: "Internal Note",
      messageContent: "handoff",
    });
    await client.searchServiceRequests({
      q: "StatusCd='ORA_SVC_NEW'",
      fields: ["SrId", "SrNumber"],
      expand: ["messages"],
      limit: 5,
      onlyData: true,
    });

    const [messageUrl, messageInit] = fetchCall(fetchMock, 0);
    expect(new URL(messageUrl).pathname).toBe(
      "/crmRestApi/resources/11.13.18.05/serviceRequests/SR%2F00042/child/messages",
    );
    expect(headerValue(messageInit, "authorization")).toBe(`Basic ${Buffer.from("svc-user:svc-pass").toString("base64")}`);
    expect(jsonBody(messageInit)).toMatchObject({
      MessageTypeCd: "Internal Note",
      MessageContent: "handoff",
    });

    const [searchUrl] = fetchCall(fetchMock, 1);
    const query = new URL(searchUrl).searchParams;
    expect(query.get("q")).toBe("StatusCd='ORA_SVC_NEW'");
    expect(query.get("fields")).toBe("SrId,SrNumber");
    expect(query.get("expand")).toBe("messages");
    expect(query.get("limit")).toBe("5");
    expect(query.get("onlyData")).toBe("true");
  });

  it("keeps Oracle auth headers authoritative and falls back from blank baseUrl to instanceUrl", async () => {
    const fetchMock = vi.fn(async () => jsonResponse({ items: [], count: 0 }));
    const client = createOracleServiceTicketingClient({
      baseUrl: "   ",
      instanceUrl: "https://example.fa.oraclecloud.com/",
      accessToken: "oracle-token",
      headers: { Authorization: "Bearer attacker" },
      fetch: fetchMock,
    });

    await client.searchServiceRequests({ limit: 1 });

    const [url, init] = fetchCall(fetchMock);
    expect(url).toBe("https://example.fa.oraclecloud.com/crmRestApi/resources/11.13.18.05/serviceRequests?limit=1");
    expect(headerValue(init, "authorization")).toBe("Bearer oracle-token");
  });

  it("surfaces Oracle REST JSON errors with status and payload", async () => {
    const fetchMock = vi.fn(async () =>
      jsonResponse({ title: "Invalid service request", "o:errorDetails": [{ detail: "Status is invalid." }] }, {
        status: 400,
        statusText: "Bad Request",
      })
    );
    const client = createOracleServiceTicketingClient({
      baseUrl: "https://example.fa.oraclecloud.com",
      accessToken: "oracle-token",
      fetch: fetchMock,
    });

    await expect(client.searchServiceRequests()).rejects.toMatchObject({
      name: "OracleServiceProviderApiError",
      status: 400,
      message: "Status is invalid.",
      body: expect.objectContaining({ title: "Invalid service request" }),
    });
  });

  it("delegates service request operations to the host-injected provider client", async () => {
    const providerClient = fakeOracleServiceProviderClient();
    const client = createOracleServiceTicketingClient({
      providerClient,
    });

    await expect(client.createServiceRequest({
      title: "Cannot check in",
      problemDescription: "Customer cannot complete online check-in.",
      severityCode: "ORA_SVC_SEV2",
      fields: { SourceCd: "API" },
    })).resolves.toMatchObject({ SrNumber: "SR00042" });
    await expect(client.getServiceRequest("SR00042")).resolves.toMatchObject({ SrNumber: "SR00042" });
    await expect(client.updateServiceRequest("SR00042", {
      statusCode: "ORA_SVC_RESOLVED",
      resolveDescription: "Resolved by support.",
    })).resolves.toMatchObject({ StatusCd: "ORA_SVC_RESOLVED" });
    await expect(client.searchServiceRequests({
      q: "StatusCd='ORA_SVC_NEW'",
      fields: ["SrId", "SrNumber"],
      limit: 5,
      onlyData: true,
    })).resolves.toMatchObject({ count: 1 });
    await expect(client.readiness()).resolves.toMatchObject({ count: 1 });

    const messageContent = Buffer.from("Internal handoff context.").toString("base64");
    await expect(client.createServiceRequestMessage({
      srNumber: "SR00042",
      messageTypeCode: "Internal Note",
      messageContent,
      statusCode: "ORA_SVC_READY",
      socialPrivateFlag: false,
      sourceCode: "API",
      channelTypeCode: "ORA_SVC_EMAIL",
    })).resolves.toMatchObject({ MessageId: 99 });

    expect(providerClient.createServiceRequest).toHaveBeenCalledWith(expect.objectContaining({
      title: "Cannot check in",
      fields: { SourceCd: "API" },
    }));
    expect(providerClient.getServiceRequest).toHaveBeenCalledWith("SR00042");
    expect(providerClient.updateServiceRequest).toHaveBeenCalledWith("SR00042", expect.objectContaining({
      statusCode: "ORA_SVC_RESOLVED",
      resolveDescription: "Resolved by support.",
    }));
    expect(providerClient.searchServiceRequests).toHaveBeenCalledWith(expect.objectContaining({
      q: "StatusCd='ORA_SVC_NEW'",
      fields: ["SrId", "SrNumber"],
      limit: 5,
      onlyData: true,
    }));
    expect(providerClient.readiness).toHaveBeenCalled();
    expect(providerClient.createServiceRequestMessage).toHaveBeenCalledWith(expect.objectContaining({
      srNumber: "SR00042",
      messageTypeCode: "Internal Note",
      messageContent,
    }));
  });

  it("requires either providerClient or REST credentials before executing operations", async () => {
    const client = createOracleServiceTicketingClient();
    await expect(client.searchServiceRequests()).rejects.toThrow("baseUrl/instanceUrl plus access credentials");
    await expect(createOracleServiceTicketingLiveChecks({})[0]?.run({})).rejects.toThrow(
      "baseUrl/instanceUrl plus access credentials",
    );
  });

  it("does not expose Oracle Basic Auth usernames through integration metadata", () => {
    const integration = createOracleServiceTicketingIntegration({
      instanceUrl: "https://example.fa.oraclecloud.com",
      username: "svc-user",
      password: "svc-pass",
      fetch: vi.fn(),
    });

    expect(integration.metadata).toMatchObject({
      implementationStrategy: "no-official-sdk-rest-adapter",
    });
    expect(JSON.stringify(integration.metadata)).not.toContain("svc-user");
    expect(JSON.stringify(integration)).not.toContain("svc-user");
    expect(JSON.stringify(integration.metadata)).not.toContain("svc-pass");
    expect(JSON.stringify(integration)).not.toContain("svc-pass");
  });

  it("reports live conformance as credential-blocked until Oracle credentials are configured", async () => {
    const result = await runProviderConformance({
      manifest: oracleServiceTicketingProviderManifest,
      channels: [{
        id: "ticketing",
        channel: "ticketing",
        providerPackageIds: [oracleServiceTicketingProviderManifest.id],
        enabledCapabilities: ["create-provider-object", "read-provider-object", "update-provider-object", "search-provider-object", "handoff"],
      }],
      credentialStatuses: oracleServiceTicketingCredentialStatuses({}),
      live: {
        enabled: true,
        checks: createOracleServiceTicketingLiveChecks({
          client: { async readiness() {
            return { items: [] };
          } },
        }),
      },
    });

    expect(result.status).toBe("credential-blocked");
    expect(result.checks).toContainEqual(expect.objectContaining({
      id: "provider.live.service-requests",
      status: "credential-blocked",
    }));
  });

  it("passes conformance when Oracle live checks and credentials are configured", async () => {
    const result = await runProviderConformance({
      manifest: oracleServiceTicketingProviderManifest,
      channels: [{
        id: "ticketing",
        channel: "ticketing",
        providerPackageIds: [oracleServiceTicketingProviderManifest.id],
        enabledCapabilities: ["create-provider-object", "read-provider-object", "update-provider-object", "search-provider-object", "handoff"],
      }],
      credentialStatuses: oracleServiceTicketingCredentialStatuses({
        baseUrl: "https://example.fa.oraclecloud.com",
        accessToken: "configured",
      }),
      live: {
        enabled: true,
        checks: createOracleServiceTicketingLiveChecks({
          client: { async readiness() {
            return { items: [{ SrId: 42, SrNumber: "SR00042" }], hasMore: false };
          } },
        }),
      },
    });

    expect(result.status).toBe("passed");
  });
});

function fakeOracleServiceProviderClient(): OracleServiceTicketingProviderClient {
  return {
    createServiceRequest: vi.fn(async () => ({ SrId: 42, SrNumber: "SR00042", Title: "Cannot check in" })),
    getServiceRequest: vi.fn(async () => ({ SrId: 42, SrNumber: "SR00042", Title: "Cannot check in" })),
    updateServiceRequest: vi.fn(async () => ({ SrId: 42, SrNumber: "SR00042", StatusCd: "ORA_SVC_RESOLVED" })),
    createServiceRequestMessage: vi.fn(async () => ({ MessageId: 99, MessageTypeCd: "Internal Note" })),
    searchServiceRequests: vi.fn(async () => ({
      items: [{ SrId: 42, SrNumber: "SR00042" }],
      count: 1,
      hasMore: false,
    })),
    readiness: vi.fn(async () => ({
      items: [{ SrId: 42, SrNumber: "SR00042" }],
      count: 1,
      hasMore: false,
    })),
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
