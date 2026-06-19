import { describe, expect, it, vi } from "vitest";
import { runProviderConformance } from "@cognidesk/test-harness";
import {
  createDynamics365TicketingClient,
  createDynamics365TicketingLiveChecks,
  dynamics365TicketingCredentialStatuses,
  dynamics365TicketingProviderManifest,
} from "../../../src/ticketing/dynamics365/index.js";

describe("@cognidesk/integrations", () => {
  it("exports an official provider manifest", () => {
    expect(dynamics365TicketingProviderManifest).toMatchObject({
      id: "ticketing.dynamics365",
      packageName: "@cognidesk/integrations",
      category: "ticketing",
      provider: "dynamics365",
      trustLevel: "official",
      coverage: {
        scope: "support-workflow-subset",
      },
    });
    expect(dynamics365TicketingProviderManifest.coverage.notes.join(" ")).toContain("not full Microsoft Dataverse");
    expect(dynamics365TicketingProviderManifest.coverage.notes.join(" ")).toContain("bounded inline annotation document fields");
    expect(dynamics365TicketingProviderManifest.metadata).toMatchObject({
      checkedProviderApiCoverage: {
        coverageArtifact: "docs/provider-coverage/dynamics365-checked-dataverse-customer-service-2026-06-18.inventory.json",
        implementedOperationCount: 11,
        fullCoverageExportRequirement: expect.stringContaining("$metadata/CSDL"),
      },
      channelCoverage: {
        annotationsCaseNotes: "typed-create-list",
        annotationInlineDocumentFields: "typed-selected",
        annotationAttachmentLifecycle: "provider-supported-not-typed",
      },
    });
    expect(dynamics365TicketingProviderManifest.coverage.evidence.map((entry) => entry.url))
      .toEqual(expect.arrayContaining([
        "https://learn.microsoft.com/en-us/power-apps/developer/data-platform/webapi/overview",
        "https://learn.microsoft.com/en-us/dynamics365/customer-service/develop/reference/entities/incident",
        "https://learn.microsoft.com/en-us/power-apps/developer/data-platform/webapi/query-metadata-web-api",
        "https://learn.microsoft.com/en-us/power-apps/developer/data-platform/webapi/reference/whoami?view=dataverse-latest",
        "https://learn.microsoft.com/en-us/power-apps/developer/data-platform/reference/entities/annotation",
        "https://learn.microsoft.com/en-us/power-apps/developer/data-platform/webapi/reference/addtoqueue?view=dataverse-latest",
    ]));
    const providerObjectKinds = dynamics365TicketingProviderManifest.capabilities.flatMap((capability) =>
      capability.providerObjects?.map((object) => object.kind) ?? []
    );
    expect(providerObjectKinds).toEqual(expect.arrayContaining([
      "dynamics365Incident",
      "dynamics365Annotation",
      "dynamics365Queue",
      "dynamics365Activity",
    ]));
    const updateCapability = dynamics365TicketingProviderManifest.capabilities.find((capability) =>
      capability.capability === "update-provider-object"
    );
    expect(updateCapability?.providerObjects?.map((object) => object.kind) ?? [])
      .toEqual(["dynamics365Incident"]);
  });

  it("creates Dataverse incident records", async () => {
    const fetchMock = vi.fn(async () => new Response(JSON.stringify({ incidentid: "case-1" }), { status: 201 }));
    const client = createDynamics365TicketingClient({
      instanceUrl: "https://example.crm.dynamics.com",
      accessToken: "configured",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await expect(client.createCase({
      title: "Flight disruption",
      description: "Customer needs manual rebooking.",
      customerId: "account-1",
    })).resolves.toMatchObject({ incidentid: "case-1" });

    expect(fetchMock).toHaveBeenCalledWith(
      "https://example.crm.dynamics.com/api/data/v9.2/incidents",
      expect.objectContaining({
        method: "POST",
        headers: expect.objectContaining({ authorization: "Bearer configured" }),
      }),
    );
    const request = (fetchMock.mock.calls[0] as unknown[])[1] as { body: string };
    expect(JSON.parse(request.body)).toMatchObject({
      title: "Flight disruption",
      description: "Customer needs manual rebooking.",
      "customerid_account@odata.bind": "/accounts(account-1)",
    });
  });

  it("uses Dataverse endpoints for metadata, notes, queues, and activities", async () => {
    const fetchMock = vi.fn(async (url: string, init: RequestInit) => {
      if (url.includes("/EntityDefinitions(")) {
        return new Response(JSON.stringify({ LogicalName: "incident", EntitySetName: "incidents" }), { status: 200 });
      }
      if (url.endsWith("/annotations") && init.method === "POST") {
        return new Response(JSON.stringify({ annotationid: "note-1" }), { status: 201 });
      }
      if (url.includes("/annotations?")) {
        return new Response(JSON.stringify({ value: [{ annotationid: "note-1" }] }), { status: 200 });
      }
      if (url.includes("/queues?")) {
        return new Response(JSON.stringify({ value: [{ queueid: "queue-1" }] }), { status: 200 });
      }
      return new Response(JSON.stringify({ value: [{ activityid: "activity-1" }] }), { status: 200 });
    });
    const client = createDynamics365TicketingClient({
      instanceUrl: "https://example.crm.dynamics.com",
      accessToken: "configured",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await expect(client.getEntityDefinition({
      logicalName: "incident",
      select: ["DisplayName", "EntitySetName"],
    })).resolves.toMatchObject({ EntitySetName: "incidents" });
    await expect(client.createCaseNote({
      caseId: "case-1",
      subject: "Handoff",
      text: "Internal handoff context.",
      filename: "handoff.txt",
      documentBody: "SGFuZG9mZg==",
      mimeType: "text/plain",
    })).resolves.toMatchObject({ annotationid: "note-1" });
    await expect(client.listCaseNotes("case-1", { select: ["annotationid", "subject"] })).resolves.toMatchObject({
      value: [{ annotationid: "note-1" }],
    });
    await expect(client.listQueues({ select: ["queueid", "name"], top: 5 })).resolves.toMatchObject({
      value: [{ queueid: "queue-1" }],
    });
    await expect(client.listActivities({ select: ["activityid", "subject"], top: 5 })).resolves.toMatchObject({
      value: [{ activityid: "activity-1" }],
    });

    expect((fetchMock.mock.calls[0] as unknown as [string, RequestInit])[0]).toBe(
      "https://example.crm.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='incident')?%24select=DisplayName%2CEntitySetName",
    );
    const noteRequest = (fetchMock.mock.calls[1] as unknown[])[1] as { body: string };
    expect(JSON.parse(noteRequest.body)).toEqual({
      "objectid_incident@odata.bind": "/incidents(case-1)",
      notetext: "Internal handoff context.",
      subject: "Handoff",
      filename: "handoff.txt",
      documentbody: "SGFuZG9mZg==",
      mimetype: "text/plain",
    });
  });

  it("adds Dataverse incidents to queues through the AddToQueue action", async () => {
    const fetchMock = vi.fn(async () => new Response(JSON.stringify({ QueueItemId: "queue-item-1" }), { status: 200 }));
    const client = createDynamics365TicketingClient({
      instanceUrl: "https://example.crm.dynamics.com",
      accessToken: "configured",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await expect(client.addToQueue({
      queueId: "queue-1",
      targetId: "case-1",
      sourceQueueId: "queue-0",
      queueItemProperties: { title: "Escalated case" },
    })).resolves.toMatchObject({ QueueItemId: "queue-item-1" });

    expect(fetchMock).toHaveBeenCalledWith(
      "https://example.crm.dynamics.com/api/data/v9.2/queues(queue-1)/Microsoft.Dynamics.CRM.AddToQueue",
      expect.objectContaining({
        method: "POST",
        headers: expect.objectContaining({
          authorization: "Bearer configured",
          "content-type": "application/json",
        }),
        body: JSON.stringify({
          Target: { "@odata.id": "incidents(case-1)" },
          SourceQueue: { "@odata.id": "queues(queue-0)" },
          QueueItemProperties: { title: "Escalated case" },
        }),
      }),
    );
  });

  it("passes provider conformance", async () => {
    const result = await runProviderConformance({
      manifest: dynamics365TicketingProviderManifest,
      channels: [{
        id: "ticketing",
        channel: "ticketing",
        providerPackageIds: [dynamics365TicketingProviderManifest.id],
        enabledCapabilities: ["create-provider-object", "read-provider-object", "update-provider-object", "search-provider-object", "handoff"],
      }],
      credentialStatuses: dynamics365TicketingCredentialStatuses({
        instanceUrl: "https://example.crm.dynamics.com",
        apiAccessConfigured: true,
      }),
    });

    expect(result.status).toBe("passed");
  });

  it("passes live conformance with configured Dynamics readiness", async () => {
    const result = await runProviderConformance({
      manifest: dynamics365TicketingProviderManifest,
      channels: [{
        id: "ticketing",
        channel: "ticketing",
        providerPackageIds: [dynamics365TicketingProviderManifest.id],
        enabledCapabilities: ["create-provider-object", "read-provider-object", "update-provider-object", "search-provider-object", "handoff"],
      }],
      credentialStatuses: dynamics365TicketingCredentialStatuses({
        instanceUrl: "https://example.crm.dynamics.com",
        apiAccessConfigured: true,
      }),
      live: {
        enabled: true,
        checks: createDynamics365TicketingLiveChecks({
          instanceUrl: "https://example.crm.dynamics.com",
          accessToken: "configured",
          client: { async readiness() {
            return { LogicalName: "incident", EntitySetName: "incidents" };
          } },
        }),
      },
    });

    expect(result.status).toBe("passed");
    expect(result.checks).toContainEqual(expect.objectContaining({
      id: "provider.live.whoami",
      status: "passed",
    }));
  });

  it("blocks Dynamics live checks when instance or OAuth access is missing", async () => {
    const missingInstance = await runProviderConformance({
      manifest: dynamics365TicketingProviderManifest,
      channels: [{
        id: "ticketing",
        channel: "ticketing",
        providerPackageIds: [dynamics365TicketingProviderManifest.id],
        enabledCapabilities: ["create-provider-object", "read-provider-object", "update-provider-object", "search-provider-object", "handoff"],
      }],
      credentialStatuses: dynamics365TicketingCredentialStatuses({ apiAccessConfigured: true }),
      live: {
        enabled: true,
        checks: createDynamics365TicketingLiveChecks({
          instanceUrl: "https://example.crm.dynamics.com",
          accessToken: "configured",
          client: { async readiness() {
            throw new Error("Dynamics readiness should be credential-blocked before execution.");
          } },
        }),
      },
    });

    const missingAccess = await runProviderConformance({
      manifest: dynamics365TicketingProviderManifest,
      channels: [{
        id: "ticketing",
        channel: "ticketing",
        providerPackageIds: [dynamics365TicketingProviderManifest.id],
        enabledCapabilities: ["create-provider-object", "read-provider-object", "update-provider-object", "search-provider-object", "handoff"],
      }],
      credentialStatuses: dynamics365TicketingCredentialStatuses({
        instanceUrl: "https://example.crm.dynamics.com",
      }),
      live: {
        enabled: true,
        checks: createDynamics365TicketingLiveChecks({
          instanceUrl: "https://example.crm.dynamics.com",
          accessToken: "missing",
          client: { async readiness() {
            throw new Error("Dynamics readiness should be credential-blocked before execution.");
          } },
        }),
      },
    });

    expect(missingInstance.status).toBe("credential-blocked");
    expect(missingAccess.status).toBe("credential-blocked");
    for (const result of [missingInstance, missingAccess]) {
      expect(result.checks).toContainEqual(expect.objectContaining({
        id: "provider.live.whoami",
        status: "credential-blocked",
      }));
    }
  });
});
