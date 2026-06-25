import { describe, expect, it, vi } from "vitest";
import { runProviderConformance } from "@cognidesk/test-harness";
import { DynamicsWebApi } from "dynamics-web-api";
import {
  createDynamics365RawClient,
  createDynamics365TicketingClient,
  createDynamics365TicketingIntegration,
  createDynamics365TicketingLiveChecks,
  dynamics365TicketingCredentialStatuses,
  dynamics365TicketingProviderManifest,
  type Dynamics365RawClient,
} from "../src/index.js";

const accountId = "00000000-0000-4000-8000-000000000001";
const caseId = "00000000-0000-4000-8000-000000000002";
const queueId = "00000000-0000-4000-8000-000000000003";
const sourceQueueId = "00000000-0000-4000-8000-000000000004";
const dynamicsInstanceUrl = "https://example.crm.dynamics.com";

const dynamicsWebApiMethodNames = [
  "create",
  "retrieve",
  "update",
  "retrieveMultiple",
  "retrieveEntity",
  "callAction",
  "callFunction",
] as const satisfies readonly (keyof Dynamics365RawClient)[];

const sdkBackedOperationMappings = [
  { alias: "ticket.create", method: "create", providerOperation: "create(incidents)" },
  { alias: "ticket.read", method: "retrieve", providerOperation: "retrieve(incidents)" },
  { alias: "ticket.update", method: "update", providerOperation: "update(incidents)" },
  { alias: "ticket.search", method: "retrieveMultiple", providerOperation: "retrieveMultiple(incidents)" },
  { alias: "ticket.internalNote.create", method: "create", providerOperation: "create(annotations)" },
  { alias: "dynamics365.entity-definition.read", method: "retrieveEntity", providerOperation: "retrieveEntity(EntityDefinitions)" },
  { alias: "dynamics365.case-note.create", method: "create", providerOperation: "create(annotations)" },
  { alias: "dynamics365.case-notes.list", method: "retrieveMultiple", providerOperation: "retrieveMultiple(annotations)" },
  { alias: "dynamics365.queue.addToQueue", method: "callAction", providerOperation: "callAction(Microsoft.Dynamics.CRM.AddToQueue)" },
  { alias: "dynamics365.queues.list", method: "retrieveMultiple", providerOperation: "retrieveMultiple(queues)" },
  { alias: "dynamics365.activities.list", method: "retrieveMultiple", providerOperation: "retrieveMultiple(activitypointers)" },
  { alias: "dynamics365.whoami", method: "callFunction", providerOperation: "callFunction(WhoAmI)" },
] as const satisfies readonly {
  alias: string;
  method: (typeof dynamicsWebApiMethodNames)[number];
  providerOperation: string;
}[];

describe("@cognidesk/integration-ticketing-dynamics365", () => {
  it("exports an official provider manifest", () => {
    expect(dynamics365TicketingProviderManifest).toMatchObject({
      id: "ticketing.dynamics365",
      packageName: "@cognidesk/integration-ticketing-dynamics365",
      category: "ticketing",
      provider: "dynamics365",
      trustLevel: "official",
      coverage: {
        scope: "support-workflow-subset",
      },
      metadata: {
        implementation: {
          strategy: "sdk-backed",
          sdkPackage: "dynamics-web-api",
          sdkVersionRange: "2.5.0",
          rawClientEscapeHatch: "Dynamics365TicketingClient.rawClient/getRawClient()",
          manifestImport: "no-sdk-client-initialization",
        },
      },
    });
    expect(dynamics365TicketingProviderManifest.coverage.notes.join(" ")).toContain("not full Microsoft Dataverse");
    expect(dynamics365TicketingProviderManifest.coverage.notes.join(" ")).toContain("bounded inline annotation document fields");
    expect(dynamics365TicketingProviderManifest.coverage.notes.join(" ")).toContain("dynamics-web-api 2.5.0");
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
        broaderDataverseApi: "provider-supported-raw-client",
      },
    });
    expect(dynamics365TicketingProviderManifest.coverage.evidence.map((entry) => entry.url))
      .toEqual(expect.arrayContaining([
        "https://learn.microsoft.com/en-us/power-apps/developer/data-platform/webapi/overview",
        "https://github.com/AleksandrRogov/DynamicsWebApi",
        "https://learn.microsoft.com/en-us/dynamics365/customer-service/develop/reference/entities/incident",
        "https://learn.microsoft.com/en-us/power-apps/developer/data-platform/webapi/query-metadata-web-api",
        "https://learn.microsoft.com/en-us/power-apps/developer/data-platform/webapi/reference/whoami?view=dataverse-latest",
        "https://learn.microsoft.com/en-us/power-apps/developer/data-platform/reference/entities/annotation",
        "https://learn.microsoft.com/en-us/power-apps/developer/data-platform/webapi/reference/addtoqueue?view=dataverse-latest",
      ]));
    expect(dynamics365TicketingProviderManifest.operations.map((operation) => operation.alias))
      .toEqual(expect.arrayContaining([
        "ticket.create",
        "ticket.read",
        "ticket.update",
        "ticket.search",
        "ticket.internalNote.create",
        "dynamics365.queue.addToQueue",
        "dynamics365.whoami",
      ]));
    const providerObjectKinds = dynamics365TicketingProviderManifest.capabilities.flatMap((capability) =>
      capability.providerObjects?.map((object) => object.kind) ?? []
    );
    expect(providerObjectKinds).toEqual(expect.arrayContaining([
      "dynamics365Incident",
      "dynamics365Annotation",
      "dynamics365Queue",
      "dynamics365Activity",
      "internalNote",
    ]));
    const updateCapability = dynamics365TicketingProviderManifest.capabilities.find((capability) =>
      capability.capability === "update-provider-object"
    );
    expect(updateCapability?.providerObjects?.map((object) => object.kind) ?? [])
      .toEqual(["dynamics365Incident"]);
  });

  it("creates and exposes the dynamics-web-api runtime client", () => {
    const rawClient = createDynamics365RawClient({
      instanceUrl: dynamicsInstanceUrl,
      accessToken: "configured",
      apiVersion: "v9.2",
    });
    const client = createDynamics365TicketingClient({
      instanceUrl: dynamicsInstanceUrl,
      accessToken: "configured",
      apiVersion: "v9.2",
    });

    expect(rawClient).toBeInstanceOf(DynamicsWebApi);
    expect(client.rawClient).toBeInstanceOf(DynamicsWebApi);
    expect(client.getRawClient()).toBe(client.rawClient);
    for (const method of dynamicsWebApiMethodNames) {
      expect(rawClient[method]).toEqual(expect.any(Function));
      expect(client.getRawClient()[method]).toEqual(expect.any(Function));
    }
  });

  it("declares Cognidesk operations as concrete dynamics-web-api SDK methods", () => {
    const rawClient = createDynamics365RawClient({
      instanceUrl: dynamicsInstanceUrl,
      accessToken: "configured",
    });
    const operationByAlias = new Map(
      dynamics365TicketingProviderManifest.operations.map((operation) => [operation.alias, operation]),
    );

    for (const { alias, method, providerOperation } of sdkBackedOperationMappings) {
      expect(operationByAlias.get(alias)?.providerOperation).toBe(providerOperation);
      expect(rawClient[method]).toEqual(expect.any(Function));
    }
  });

  it("creates Dataverse incident records through dynamics-web-api", async () => {
    const rawClient = createRawClient({
      create: vi.fn(async () => ({ incidentid: "case-1" })),
    });
    const client = createDynamics365TicketingClient({ rawClient });

    await expect(client.createCase({
      title: "Flight disruption",
      description: "Customer needs manual rebooking.",
      customerId: accountId,
    })).resolves.toMatchObject({ incidentid: "case-1" });

    expect(rawClient.create).toHaveBeenCalledWith({
      collection: "incidents",
      data: {
        title: "Flight disruption",
        description: "Customer needs manual rebooking.",
        "customerid_account@odata.bind": `/accounts(${accountId})`,
      },
    });
  });

  it("uses SDK methods for metadata, notes, queues, and activities", async () => {
    const rawClient = createRawClient({
      retrieveEntity: vi.fn(async () => ({ LogicalName: "incident", EntitySetName: "incidents" })),
      create: vi.fn(async () => ({ annotationid: "note-1" })),
      retrieveMultiple: vi.fn(async (request: { collection: string }) => {
        if (request.collection === "annotations") return { value: [{ annotationid: "note-1" }] };
        if (request.collection === "queues") return { value: [{ queueid: "queue-1" }] };
        return { value: [{ activityid: "activity-1" }] };
      }),
    });
    const client = createDynamics365TicketingClient({ rawClient });

    await expect(client.getEntityDefinition({
      logicalName: "incident",
      select: ["DisplayName", "EntitySetName"],
    })).resolves.toMatchObject({ EntitySetName: "incidents" });
    await expect(client.createCaseNote({
      caseId,
      subject: "Handoff",
      text: "Internal handoff context.",
      filename: "handoff.txt",
      documentBody: "SGFuZG9mZg==",
      mimeType: "text/plain",
    })).resolves.toMatchObject({ annotationid: "note-1" });
    await expect(client.listCaseNotes(caseId, { select: ["annotationid", "subject"] })).resolves.toMatchObject({
      value: [{ annotationid: "note-1" }],
    });
    await expect(client.listQueues({ select: ["queueid", "name"], top: 5 })).resolves.toMatchObject({
      value: [{ queueid: "queue-1" }],
    });
    await expect(client.listActivities({ select: ["activityid", "subject"], top: 5 })).resolves.toMatchObject({
      value: [{ activityid: "activity-1" }],
    });

    expect(rawClient.retrieveEntity).toHaveBeenCalledWith({
      key: "LogicalName='incident'",
      select: ["DisplayName", "EntitySetName"],
    });
    expect(rawClient.create).toHaveBeenCalledWith({
      collection: "annotations",
      data: {
        "objectid_incident@odata.bind": `/incidents(${caseId})`,
        notetext: "Internal handoff context.",
        subject: "Handoff",
        filename: "handoff.txt",
        documentbody: "SGFuZG9mZg==",
        mimetype: "text/plain",
      },
    });
    expect(rawClient.retrieveMultiple).toHaveBeenCalledWith({
      collection: "annotations",
      select: ["annotationid", "subject"],
      filter: `_objectid_value eq ${caseId}`,
    });
  });

  it("adds Dataverse incidents to queues through the SDK AddToQueue action", async () => {
    const rawClient = createRawClient({
      callAction: vi.fn(async () => ({ QueueItemId: "queue-item-1" })),
    });
    const client = createDynamics365TicketingClient({ rawClient });

    await expect(client.addToQueue({
      queueId,
      targetId: caseId,
      sourceQueueId,
      queueItemProperties: { title: "Escalated case" },
    })).resolves.toMatchObject({ QueueItemId: "queue-item-1" });

    expect(rawClient.callAction).toHaveBeenCalledWith({
      collection: "queues",
      key: queueId,
      actionName: "Microsoft.Dynamics.CRM.AddToQueue",
      action: {
        Target: { "@odata.id": `incidents(${caseId})` },
        SourceQueue: { "@odata.id": `queues(${sourceQueueId})` },
        QueueItemProperties: { title: "Escalated case" },
      },
    });
  });

  it("binds declared operations to the typed Dynamics client facade", async () => {
    const rawClient = createRawClient({
      create: vi.fn(async (request: unknown) => ({ created: request })),
      retrieve: vi.fn(async (request: unknown) => ({ retrieved: request })),
      update: vi.fn(async (request: unknown) => ({ updated: request })),
      retrieveMultiple: vi.fn(async (request: unknown) => ({ listed: request })),
      retrieveEntity: vi.fn(async (request: unknown) => ({ entity: request })),
      callAction: vi.fn(async (request: unknown) => ({ action: request })),
      callFunction: vi.fn(async (request: unknown) => ({ function: request })),
    });
    const client = createDynamics365TicketingClient({ rawClient });

    expect(client.integration.bindingReport.missingHandlerAliases).toEqual([]);
    await expect(client.integration.run("ticket.create", { title: "A" })).resolves.toMatchObject({
      created: { collection: "incidents", data: { title: "A" } },
    });
    await expect(client.integration.run("ticket.read", { ticketId: caseId })).resolves.toMatchObject({
      retrieved: { collection: "incidents", key: caseId },
    });
    await expect(client.integration.run("ticket.update", { ticketId: caseId, patch: { title: "B" } }))
      .resolves.toMatchObject({
        updated: { collection: "incidents", key: caseId, data: { title: "B" } },
      });
    await expect(client.integration.run("ticket.search", { top: 1 })).resolves.toMatchObject({
      listed: { collection: "incidents", top: 1 },
    });
    await expect(client.integration.run("ticket.internalNote.create", { caseId, body: "private" }))
      .resolves.toMatchObject({
        created: {
          collection: "annotations",
          data: {
            "objectid_incident@odata.bind": `/incidents(${caseId})`,
            notetext: "private",
          },
        },
      });
    await expect(client.integration.run("dynamics365.entity-definition.read", { logicalName: "incident" }))
      .resolves.toMatchObject({
        entity: { key: "LogicalName='incident'" },
      });
    await expect(client.integration.run("dynamics365.case-note.create", { caseId, text: "extension note" }))
      .resolves.toMatchObject({
        created: {
          collection: "annotations",
          data: {
            "objectid_incident@odata.bind": `/incidents(${caseId})`,
            notetext: "extension note",
          },
        },
      });
    await expect(client.integration.run("dynamics365.case-notes.list", { caseId, top: 2 }))
      .resolves.toMatchObject({
        listed: {
          collection: "annotations",
          filter: `_objectid_value eq ${caseId}`,
          top: 2,
        },
      });
    await expect(client.integration.run("dynamics365.queue.addToQueue", {
      queueId,
      targetId: caseId,
    })).resolves.toMatchObject({
      action: {
        collection: "queues",
        key: queueId,
        actionName: "Microsoft.Dynamics.CRM.AddToQueue",
      },
    });
    await expect(client.integration.run("dynamics365.queues.list", { top: 3 })).resolves.toMatchObject({
      listed: { collection: "queues", top: 3 },
    });
    await expect(client.integration.run("dynamics365.activities.list", { top: 4 })).resolves.toMatchObject({
      listed: { collection: "activitypointers", top: 4 },
    });
    await expect(client.integration.run("dynamics365.whoami", undefined)).resolves.toMatchObject({
      function: "WhoAmI",
    });
  });

  it("rejects unsafe Dataverse identifiers before building OData strings", async () => {
    const rawClient = createRawClient();
    const client = createDynamics365TicketingClient({ rawClient });

    await expect(client.createCase({
      title: "Flight disruption",
      customerId: "account-1",
    })).rejects.toThrow("customerId must be a GUID");
    await expect(client.listCaseNotes("case-1")).rejects.toThrow("caseId must be a GUID");
    await expect(client.addToQueue({
      queueId,
      targetId: caseId,
      targetEntitySetName: "incidents)($expand=ownerid",
    })).rejects.toThrow("targetEntitySetName must be a Dataverse entity-set name");
    expect(rawClient.create).not.toHaveBeenCalled();
    expect(rawClient.retrieveMultiple).not.toHaveBeenCalled();
    expect(rawClient.callAction).not.toHaveBeenCalled();
  });

  it("redacts Dynamics integration credentials before passing operation context", async () => {
    const integration = createDynamics365TicketingIntegration({
      instanceUrl: "https://example.crm.dynamics.com",
      accessToken: "secret-token",
      apiVersion: "v9.2",
      rawClient: createRawClient(),
    });
    const capturedCredentials: unknown[] = [];
    (integration.operations as Record<string, unknown>)["ticket.search"] = async (_input: unknown, context: { credentials?: unknown }) => {
      capturedCredentials.push(context.credentials);
      return {};
    };

    await integration.run("ticket.search", {});

    expect(capturedCredentials[0]).toMatchObject({
      apiAccessConfigured: true,
      apiVersion: "v9.2",
      instanceUrl: "https://example.crm.dynamics.com",
      rawClientConfigured: true,
    });
    expect(JSON.stringify(capturedCredentials[0])).not.toContain("secret-token");
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

function createRawClient(overrides: Partial<Record<keyof Dynamics365RawClient, unknown>> = {}) {
  return {
    create: vi.fn(async () => ({})),
    retrieve: vi.fn(async () => ({})),
    update: vi.fn(async () => ({})),
    retrieveMultiple: vi.fn(async () => ({ value: [] })),
    retrieveEntity: vi.fn(async () => ({})),
    callAction: vi.fn(async () => ({})),
    callFunction: vi.fn(async () => ({})),
    ...overrides,
  } as unknown as Dynamics365RawClient;
}
