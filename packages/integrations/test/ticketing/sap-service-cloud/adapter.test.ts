import { describe, expect, it, vi } from "vitest";
import { runProviderConformance } from "@cognidesk/test-harness";
import { readProviderCoverageArtifact } from "../../provider-coverage-artifacts.js";
import {
  createSapServiceCloudTicketingClient,
  createSapServiceCloudTicketingLiveChecks,
  sapServiceCloudTicketingCredentialStatuses,
  sapServiceCloudTicketingProviderManifest,
} from "../../../src/ticketing/sap-service-cloud/index.js";

describe("@cognidesk/integrations", () => {
  it("exports an official provider manifest for SAP Service Cloud ticketing", () => {
    expect(sapServiceCloudTicketingProviderManifest).toMatchObject({
      id: "ticketing.sap-service-cloud",
      packageName: "@cognidesk/integrations",
      category: "ticketing",
      provider: "sap-service-cloud",
      trustLevel: "official",
    });
  });

  it("declares docs-backed scoped SAP Service Cloud coverage", () => {
    expect(sapServiceCloudTicketingProviderManifest.coverage.scope).toBe("support-workflow-subset");
    expect(sapServiceCloudTicketingProviderManifest.coverage.notes.join(" ")).toContain("not full SAP Service Cloud API coverage");
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
    const coverage = readProviderCoverageArtifact("docs/provider-coverage/sap-service-cloud-checked-c4c-odata-2026-06-18.inventory.json");
    expect(sapServiceCloudTicketingProviderManifest.metadata).toMatchObject({
      checkedProviderApiCoverage: {
        coverageArtifact: "docs/provider-coverage/sap-service-cloud-checked-c4c-odata-2026-06-18.inventory.json",
        checkedFamilyCount: coverage.counts?.familyCount,
        implementedFamilyCount: coverage.counts?.implementedFamilyCount,
        gapFamilyCount: coverage.counts?.gapFamilyCount,
        implementedOperationCount: coverage.counts?.implementedOperationCount,
      },
    });
  });

  it("creates SAP Service Cloud service requests through OData", async () => {
    const fetchMock = vi.fn(async (url: string) => {
      if (url.endsWith("/$metadata")) {
        return new Response("", { status: 200, headers: { "x-csrf-token": "csrf-token", "set-cookie": "SAP_SESSIONID=abc" } });
      }
      return new Response(JSON.stringify({ d: { ObjectID: "object-1", ID: "8000001", Name: "Damaged baggage" } }), { status: 201 });
    });
    const client = createSapServiceCloudTicketingClient({
      tenantUrl: "https://example.crm.ondemand.com/",
      username: "api-user",
      password: "api-pass",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await expect(client.createServiceRequest({
      name: "Damaged baggage",
      processingTypeCode: "SRRQ",
      servicePriorityCode: "3",
      fields: { DataOriginTypeCode: "4" },
    })).resolves.toMatchObject({ ID: "8000001" });

    expect(fetchMock).toHaveBeenNthCalledWith(
      2,
      "https://example.crm.ondemand.com/sap/c4c/odata/v1/c4codataapi/ServiceRequestCollection",
      expect.objectContaining({
        method: "POST",
        headers: expect.objectContaining({
          authorization: `Basic ${Buffer.from("api-user:api-pass").toString("base64")}`,
          "x-csrf-token": "csrf-token",
          cookie: "SAP_SESSIONID=abc",
        }),
      }),
    );
    const request = (fetchMock.mock.calls[1] as unknown[])[1] as { body: string };
    expect(JSON.parse(request.body)).toMatchObject({
      Name: "Damaged baggage",
      ProcessingTypeCode: "SRRQ",
      ServicePriorityCode: "3",
      DataOriginTypeCode: "4",
    });
  });

  it("searches ServiceRequestCollection with OData controls", async () => {
    const fetchMock = vi.fn(async () =>
      new Response(JSON.stringify({
        d: {
          __count: "1",
          results: [{ ObjectID: "object-1", ID: "8000001" }],
        },
      }), { status: 200 })
    );
    const client = createSapServiceCloudTicketingClient({
      tenantUrl: "example.crm.ondemand.com",
      accessToken: "oauth-token",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await expect(client.searchServiceRequests({
      filter: "ID eq '8000001'",
      select: ["ObjectID", "ID"],
      top: 5,
      inlineCount: "allpages",
    })).resolves.toMatchObject({ count: "1" });

    const [url, init] = fetchMock.mock.calls[0] as unknown as [string, { headers: Record<string, string> }];
    expect(url).toBe("https://example.crm.ondemand.com/sap/c4c/odata/v1/c4codataapi/ServiceRequestCollection?%24format=json&%24filter=ID+eq+%278000001%27&%24select=ObjectID%2CID&%24top=5&%24inlinecount=allpages");
    expect(init.headers.authorization).toBe("Bearer oauth-token");
  });

  it("reports live conformance as credential-blocked until SAP credentials are configured", async () => {
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
          tenantUrl: "https://example.crm.ondemand.com",
          accessToken: "missing",
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

  it("passes conformance when SAP live checks and credentials are configured", async () => {
    const result = await runProviderConformance({
      manifest: sapServiceCloudTicketingProviderManifest,
      channels: [{
        id: "ticketing",
        channel: "ticketing",
        providerPackageIds: [sapServiceCloudTicketingProviderManifest.id],
        enabledCapabilities: ["handoff", "create-provider-object", "read-provider-object", "update-provider-object", "search-provider-object"],
      }],
      credentialStatuses: sapServiceCloudTicketingCredentialStatuses({
        tenantUrl: "https://example.crm.ondemand.com",
        accessToken: "configured",
      }),
      live: {
        enabled: true,
        checks: createSapServiceCloudTicketingLiveChecks({
          tenantUrl: "https://example.crm.ondemand.com",
          accessToken: "configured",
          client: { async readiness() {
            return { results: [{ ObjectID: "object-1", ID: "8000001" }] };
          } },
        }),
      },
    });

    expect(result.status).toBe("passed");
  });
});
