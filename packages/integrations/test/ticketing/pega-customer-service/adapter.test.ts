import { describe, expect, it, vi } from "vitest";
import { runProviderConformance } from "@cognidesk/test-harness";
import { readProviderCoverageArtifact } from "../../provider-coverage-artifacts.js";
import {
  createPegaCustomerServiceTicketingClient,
  createPegaCustomerServiceTicketingLiveChecks,
  pegaCustomerServiceTicketingCredentialStatuses,
  pegaCustomerServiceTicketingProviderManifest,
} from "../../../src/ticketing/pega-customer-service/index.js";

describe("@cognidesk/integrations", () => {
  it("exports an official provider manifest for Pega Customer Service ticketing", () => {
    expect(pegaCustomerServiceTicketingProviderManifest).toMatchObject({
      id: "ticketing.pega-customer-service",
      packageName: "@cognidesk/integrations",
      category: "ticketing",
      provider: "pega-customer-service",
      trustLevel: "official",
    });
  });

  it("declares docs-backed scoped Pega Customer Service coverage", () => {
    expect(pegaCustomerServiceTicketingProviderManifest.coverage.scope).toBe("support-workflow-subset");
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
    const coverage = readProviderCoverageArtifact("docs/provider-coverage/pega-customer-service-checked-dx-api-2026-06-18.inventory.json");
    expect(pegaCustomerServiceTicketingProviderManifest.metadata).toMatchObject({
      checkedProviderApiCoverage: {
        coverageArtifact: "docs/provider-coverage/pega-customer-service-checked-dx-api-2026-06-18.inventory.json",
        checkedFamilyCount: coverage.counts?.familyCount,
        implementedFamilyCount: coverage.counts?.implementedFamilyCount,
        gapFamilyCount: coverage.counts?.gapFamilyCount,
        implementedOperationCount: coverage.counts?.implementedOperationCount,
      },
    });
  });

  it("creates Pega cases through the DX API", async () => {
    const fetchMock = vi.fn(async () =>
      new Response(JSON.stringify({ ID: "C-1001", caseID: "C-1001", status: "New" }), { status: 201 })
    );
    const client = createPegaCustomerServiceTicketingClient({
      instanceUrl: "https://pega.example.com/prweb",
      accessToken: "oauth-token",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await expect(client.createCase({
      caseTypeId: "MyCo-CS-Work-Service",
      processId: "pyStartCase",
      content: {
        Subject: "Refund follow-up",
        CustomerEmail: "customer@example.test",
      },
    })).resolves.toMatchObject({ caseID: "C-1001" });

    expect(fetchMock).toHaveBeenCalledWith(
      "https://pega.example.com/prweb/api/v1/cases",
      expect.objectContaining({
        method: "POST",
        headers: expect.objectContaining({
          authorization: "Bearer oauth-token",
          "content-type": "application/json",
        }),
      }),
    );
    const request = (fetchMock.mock.calls[0] as unknown[])[1] as { body: string };
    expect(JSON.parse(request.body)).toMatchObject({
      caseTypeID: "MyCo-CS-Work-Service",
      processID: "pyStartCase",
      content: {
        Subject: "Refund follow-up",
        CustomerEmail: "customer@example.test",
      },
    });
  });

  it("submits Pega assignment actions for SDK-configured handoff workflows", async () => {
    const fetchMock = vi.fn(async () =>
      new Response(JSON.stringify({ ID: "C-1001", status: "Pending-Review" }), { status: 200 })
    );
    const client = createPegaCustomerServiceTicketingClient({
      instanceUrl: "https://pega.example.com/prweb",
      accessToken: "oauth-token",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await expect(client.performAssignmentAction({
      assignmentId: "ASSIGN-WORKLIST MYCO-CS-WORK C-1001!REVIEW",
      actionId: "Approve",
      eTag: "W/\"assignment-version\"",
      content: { Resolution: "Approved by support" },
      pageInstructions: [{ instruction: "UPDATE", target: "pyWorkPage" }],
    })).resolves.toMatchObject({ status: "Pending-Review" });

    expect(fetchMock).toHaveBeenCalledWith(
      "https://pega.example.com/prweb/api/v1/assignments/ASSIGN-WORKLIST%20MYCO-CS-WORK%20C-1001!REVIEW/actions/Approve",
      expect.objectContaining({
        method: "PATCH",
        headers: expect.objectContaining({
          authorization: "Bearer oauth-token",
          "content-type": "application/json",
          "if-match": "W/\"assignment-version\"",
        }),
      }),
    );
    const request = (fetchMock.mock.calls[0] as unknown[])[1] as { body: string };
    expect(JSON.parse(request.body)).toMatchObject({
      content: { Resolution: "Approved by support" },
      pageInstructions: [{ instruction: "UPDATE", target: "pyWorkPage" }],
    });
  });

  it("searches Pega cases with query controls", async () => {
    const fetchMock = vi.fn(async () =>
      new Response(JSON.stringify({
        cases: [{ ID: "C-1001", status: "New" }],
        count: 1,
      }), { status: 200 })
    );
    const client = createPegaCustomerServiceTicketingClient({
      instanceUrl: "pega.example.com",
      username: "api-user",
      password: "api-pass",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await expect(client.searchCases({
      caseTypeId: "MyCo-CS-Work-Service",
      status: "New",
      pageSize: 10,
    })).resolves.toMatchObject({ count: 1 });

    const [url, init] = fetchMock.mock.calls[0] as unknown as [string, { headers: Record<string, string> }];
    expect(url).toBe("https://pega.example.com/api/v1/cases?caseTypeID=MyCo-CS-Work-Service&status=New&pageSize=10");
    expect(init.headers.authorization).toBe(`Basic ${Buffer.from("api-user:api-pass").toString("base64")}`);
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
          instanceUrl: "https://pega.example.com",
          accessToken: "missing",
          client: { async readiness() {
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
    const result = await runProviderConformance({
      manifest: pegaCustomerServiceTicketingProviderManifest,
      channels: [{
        id: "ticketing",
        channel: "ticketing",
        providerPackageIds: [pegaCustomerServiceTicketingProviderManifest.id],
        enabledCapabilities: ["create-provider-object", "read-provider-object", "update-provider-object", "search-provider-object", "handoff"],
      }],
      credentialStatuses: pegaCustomerServiceTicketingCredentialStatuses({
        instanceUrl: "https://pega.example.com",
        accessToken: "configured",
      }),
      live: {
        enabled: true,
        checks: createPegaCustomerServiceTicketingLiveChecks({
          instanceUrl: "https://pega.example.com",
          accessToken: "configured",
          client: { async readiness() {
            return [{ ID: "MyCo-CS-Work-Service", name: "Service Case" }];
          } },
        }),
      },
    });

    expect(result.status).toBe("passed");
  });
});
