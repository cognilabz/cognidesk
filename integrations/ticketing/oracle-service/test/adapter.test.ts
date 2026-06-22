import { describe, expect, it, vi } from "vitest";
import { runProviderConformance } from "@cognidesk/test-harness";
import {
  createOracleServiceTicketingClient,
  createOracleServiceTicketingLiveChecks,
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

  it("creates Oracle Fusion Service service requests", async () => {
    const fetchMock = vi.fn(async () =>
      new Response(JSON.stringify({ SrId: 42, SrNumber: "SR00042", Title: "Cannot check in" }), { status: 201 })
    );
    const client = createOracleServiceTicketingClient({
      instanceUrl: "https://example.fa.oraclecloud.com/",
      username: "api-user",
      password: "api-pass",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await expect(client.createServiceRequest({
      title: "Cannot check in",
      problemDescription: "Customer cannot complete online check-in.",
      severityCode: "ORA_SVC_SEV2",
      fields: { SourceCd: "API" },
    })).resolves.toMatchObject({ SrNumber: "SR00042" });

    expect(fetchMock).toHaveBeenCalledWith(
      "https://example.fa.oraclecloud.com/crmRestApi/resources/11.13.18.05/serviceRequests",
      expect.objectContaining({
        method: "POST",
        headers: expect.objectContaining({
          authorization: `Basic ${Buffer.from("api-user:api-pass").toString("base64")}`,
          "content-type": "application/vnd.oracle.adf.resourceitem+json",
        }),
      }),
    );
    const request = (fetchMock.mock.calls[0] as unknown[])[1] as { body: string };
    expect(JSON.parse(request.body)).toMatchObject({
      Title: "Cannot check in",
      ProblemDescription: "Customer cannot complete online check-in.",
      SeverityCd: "ORA_SVC_SEV2",
      SourceCd: "API",
    });
  });

  it("creates Oracle Fusion Service service request child messages", async () => {
    const fetchMock = vi.fn(async () =>
      new Response(JSON.stringify({ MessageId: 99, MessageTypeCd: "Internal Note" }), { status: 201 })
    );
    const client = createOracleServiceTicketingClient({
      instanceUrl: "https://example.fa.oraclecloud.com",
      accessToken: "oauth-token",
      fetch: fetchMock as unknown as typeof fetch,
    });

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

    expect(fetchMock).toHaveBeenCalledWith(
      "https://example.fa.oraclecloud.com/crmRestApi/resources/11.13.18.05/serviceRequests/SR00042/child/messages",
      expect.objectContaining({
        method: "POST",
        headers: expect.objectContaining({
          authorization: "Bearer oauth-token",
          "content-type": "application/vnd.oracle.adf.resourceitem+json",
        }),
      }),
    );
    const request = (fetchMock.mock.calls[0] as unknown[])[1] as { body: string };
    expect(JSON.parse(request.body)).toMatchObject({
      MessageTypeCd: "Internal Note",
      MessageContent: messageContent,
      StatusCd: "ORA_SVC_READY",
      SocialPrivateFlag: false,
      SourceCd: "API",
      ChannelTypeCd: "ORA_SVC_EMAIL",
    });
  });

  it("searches service requests with Oracle collection query controls", async () => {
    const fetchMock = vi.fn(async () =>
      new Response(JSON.stringify({
        items: [{ SrId: 42, SrNumber: "SR00042" }],
        count: 1,
        hasMore: false,
      }), { status: 200 })
    );
    const client = createOracleServiceTicketingClient({
      instanceUrl: "https://example.fa.oraclecloud.com",
      accessToken: "oauth-token",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await expect(client.searchServiceRequests({
      q: "StatusCd='ORA_SVC_NEW'",
      fields: ["SrId", "SrNumber"],
      limit: 5,
      onlyData: true,
    })).resolves.toMatchObject({ count: 1 });

    const [url, init] = fetchMock.mock.calls[0] as unknown as [string, { headers: Record<string, string> }];
    expect(url).toBe("https://example.fa.oraclecloud.com/crmRestApi/resources/11.13.18.05/serviceRequests?q=StatusCd%3D%27ORA_SVC_NEW%27&fields=SrId%2CSrNumber&limit=5&onlyData=true");
    expect(init.headers.authorization).toBe("Bearer oauth-token");
  });

  it("reads and updates service requests by Oracle SrNumber", async () => {
    const fetchMock = vi.fn(async (url: string, init?: RequestInit) => {
      if (init?.method === "GET") {
        return new Response(JSON.stringify({ SrId: 42, SrNumber: "SR00042", Title: "Cannot check in" }), { status: 200 });
      }
      return new Response(JSON.stringify({ SrId: 42, SrNumber: "SR00042", StatusCd: "ORA_SVC_RESOLVED" }), { status: 200 });
    });
    const client = createOracleServiceTicketingClient({
      instanceUrl: "https://example.fa.oraclecloud.com",
      accessToken: "oauth-token",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await expect(client.getServiceRequest("SR00042")).resolves.toMatchObject({ SrNumber: "SR00042" });
    await expect(client.updateServiceRequest("SR00042", {
      statusCode: "ORA_SVC_RESOLVED",
      resolveDescription: "Resolved by support.",
    })).resolves.toMatchObject({ StatusCd: "ORA_SVC_RESOLVED" });

    expect(fetchMock).toHaveBeenNthCalledWith(
      1,
      "https://example.fa.oraclecloud.com/crmRestApi/resources/11.13.18.05/serviceRequests/SR00042",
      expect.objectContaining({ method: "GET" }),
    );
    expect(fetchMock).toHaveBeenNthCalledWith(
      2,
      "https://example.fa.oraclecloud.com/crmRestApi/resources/11.13.18.05/serviceRequests/SR00042",
      expect.objectContaining({ method: "PATCH" }),
    );
    const request = (fetchMock.mock.calls[1] as unknown[])[1] as { body: string };
    expect(JSON.parse(request.body)).toMatchObject({
      StatusCd: "ORA_SVC_RESOLVED",
      ResolveDescription: "Resolved by support.",
    });
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
          instanceUrl: "https://example.fa.oraclecloud.com",
          accessToken: "missing",
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
        instanceUrl: "https://example.fa.oraclecloud.com",
        accessToken: "configured",
      }),
      live: {
        enabled: true,
        checks: createOracleServiceTicketingLiveChecks({
          instanceUrl: "https://example.fa.oraclecloud.com",
          accessToken: "configured",
          client: { async readiness() {
            return { items: [{ SrId: 42, SrNumber: "SR00042" }], hasMore: false };
          } },
        }),
      },
    });

    expect(result.status).toBe("passed");
  });
});
