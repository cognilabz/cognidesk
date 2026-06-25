import { Buffer } from "node:buffer";
import { describe, expect, it, vi } from "vitest";
import { runProviderConformance } from "@cognidesk/test-harness";
import { assertIntegrationConformance } from "@cognidesk/integration-kit/testing";
import {
  createServiceNowTicketingClient,
  createServiceNowTicketingIntegration,
  createServiceNowTicketingLiveChecks,
  serviceNowTicketingCredentialStatuses,
  serviceNowTicketingProviderOperations,
  serviceNowTicketingProviderManifest,
} from "../src/index.js";
import type { ServiceNowRawClient, ServiceNowRecord, ServiceNowTicketingClientOptions } from "../src/index.js";

describe("@cognidesk/integration-ticketing-servicenow", () => {
  it("exports an official provider manifest for ServiceNow ticketing", () => {
    expect(serviceNowTicketingProviderManifest).toMatchObject({
      id: "ticketing.servicenow",
      packageName: "@cognidesk/integration-ticketing-servicenow",
      category: "ticketing",
      provider: "servicenow",
      trustLevel: "official",
      coverage: {
        scope: "support-workflow-subset",
      },
    });
    expect(serviceNowTicketingProviderManifest.coverage.notes.join(" ")).toContain("not full ServiceNow platform API coverage");
    expect(serviceNowTicketingProviderManifest.coverage.notes.join(" ")).toContain("not customer-specific generated schema coverage");
    expect(serviceNowTicketingProviderManifest.coverage.evidence.map((entry) => entry.url))
      .toEqual(expect.arrayContaining([
        "https://www.servicenow.com/docs/r/washingtondc/api-reference/rest-apis/c_TableAPI.html",
        "https://www.servicenow.com/docs/r/washingtondc/api-reference/rest-apis/c_AttachmentAPI.html",
        "https://www.servicenow.com/docs/r/washingtondc/api-reference/rest-apis/c_ImportSetAPI.html",
      ]));
    expect(serviceNowTicketingProviderManifest.capabilities.map((capability) => capability.capability))
      .toEqual(expect.arrayContaining([
        "create-provider-object",
        "read-provider-object",
        "update-provider-object",
        "search-provider-object",
        "handoff",
    ]));
    const providerObjectKinds = serviceNowTicketingProviderManifest.capabilities.flatMap((capability) =>
      capability.providerObjects?.map((object) => object.kind) ?? []
    );
    expect(providerObjectKinds).toEqual(expect.arrayContaining([
      "servicenowRecord",
      "servicenowIncident",
      "servicenowAttachment",
      "servicenowImportSetRecord",
    ]));
    const updateCapability = serviceNowTicketingProviderManifest.capabilities.find((capability) =>
      capability.capability === "update-provider-object"
    );
    const createCapability = serviceNowTicketingProviderManifest.capabilities.find((capability) =>
      capability.capability === "create-provider-object"
    );
    expect(createCapability?.description).toContain("generic table names are SDK-owned schema plumbing");
    expect(updateCapability?.providerObjects?.map((object) => object.kind) ?? [])
      .toEqual(["servicenowRecord", "servicenowIncident"]);
    expect(serviceNowTicketingProviderManifest.metadata).toMatchObject({
      checkedProviderApiCoverage: {
        coverageArtifact: "docs/provider-coverage/servicenow-checked-table-attachment-importset-2026-06-18.inventory.json",
        implementedOperationCount: 11,
        fullCoverageExportRequirement: expect.stringContaining("REST API Explorer/OpenAPI export"),
      },
      channelCoverage: {
        genericTableApi: "sdk-owned-classified-endpoint",
        arbitraryTableTyping: "not-covered",
      },
      checkedProviderSdk: {
        package: "@servicenow/sdk",
        checkedVersion: "4.8.0",
        result: "not-used-as-runtime-rest-client",
      },
      sdkDecision: {
        result: "official-sdk-not-runtime-rest-client",
      },
      implementation: {
        strategy: "provider-rest-adapter",
        rawClientEscapeHatch: "ServiceNowTicketingClient.rawClient",
        defaultClientPolicy: "use-built-in-rest-adapter-when-instance-and-auth-are-configured",
        packageOwnedRestClient: true,
        rawClientOverride: true,
      },
    });
    expect(serviceNowTicketingProviderManifest.operations.map((operation) => operation.alias))
      .toEqual(serviceNowTicketingProviderOperations.map((operation) => operation.alias));
    expect(serviceNowTicketingProviderManifest.operations.map((operation) => operation.alias))
      .toEqual([
        "ticket.create",
        "ticket.read",
        "ticket.update",
        "ticket.search",
        "ticket.comment.create",
        "ticket.internalNote.create",
        "ticket.attachments.add",
        "ticket.attachments.list",
        "servicenow.record.create",
        "servicenow.importSet.insert",
        "servicenow.importSet.result.read",
      ]);
  });

  it("binds declared operations to an injectable ServiceNow raw client", async () => {
    const calls: Array<{ method: string; args: unknown[] }> = [];
    const rawClient: ServiceNowRawClient = {
      async createRecord<T extends ServiceNowRecord = ServiceNowRecord>(tableName: string, record: object) {
        calls.push({ method: "createRecord", args: [tableName, record] });
        return { sys_id: "created-1", tableName, ...record } as unknown as T;
      },
      async getRecord<T extends ServiceNowRecord = ServiceNowRecord>(tableName: string, sysId: string, query?: unknown) {
        calls.push({ method: "getRecord", args: [tableName, sysId, query] });
        return { sys_id: sysId, tableName } as unknown as T;
      },
      async updateRecord<T extends ServiceNowRecord = ServiceNowRecord>(tableName: string, sysId: string, patch: object) {
        calls.push({ method: "updateRecord", args: [tableName, sysId, patch] });
        return { sys_id: sysId, tableName, ...patch } as unknown as T;
      },
      async searchRecords<T extends ServiceNowRecord = ServiceNowRecord>(tableName: string, query?: unknown) {
        calls.push({ method: "searchRecords", args: [tableName, query] });
        return [{ sys_id: "match-1", tableName } as unknown as T];
      },
      async uploadAttachment(input) {
        calls.push({ method: "uploadAttachment", args: [input] });
        return { sys_id: "attachment-1", file_name: input.fileName };
      },
      async listAttachments(query) {
        calls.push({ method: "listAttachments", args: [query] });
        return [{ sys_id: "attachment-1" }];
      },
      async importSet(stagingTableName, record) {
        calls.push({ method: "importSet", args: [stagingTableName, record] });
        return { sys_id: "import-1", stagingTableName };
      },
      async getImportSetResult(stagingTableName, sysId) {
        calls.push({ method: "getImportSetResult", args: [stagingTableName, sysId] });
        return { sys_id: sysId, stagingTableName, status: "inserted" };
      },
    };
    const client = createServiceNowTicketingClient({ rawClient });
    const integration = createServiceNowTicketingIntegration({ ticketingClient: client });

    expect(assertIntegrationConformance({
      manifest: integration.manifest,
      operations: integration.operations,
    })).toMatchObject({
      missingHandlerAliases: [],
      extraHandlerAliases: [],
      invalidExtensionOperationAliases: [],
    });

    await integration.run("ticket.create", { subject: "Cannot sign in", fields: { u_cognidesk: "conversation_1" } });
    await integration.run("ticket.read", { ticketId: "abc123" });
    await integration.run("ticket.update", { ticketId: "abc123", patch: { state: "2" } });
    await integration.run("ticket.search", { query: "active=true", limit: 1 });
    await integration.run("ticket.comment.create", { ticketId: "abc123", body: "Public follow-up." });
    await integration.run("ticket.internalNote.create", { sysId: "abc123", note: "Internal handoff summary." });
    await integration.run("ticket.attachments.add", { ticketId: "abc123", fileName: "debug.log", data: "log body" });
    await integration.run("ticket.attachments.list", { ticketId: "abc123", limit: 5 });
    await integration.run("servicenow.record.create", { tableName: "sn_customerservice_case", fields: { short_description: "Case" } });
    await integration.run("servicenow.importSet.insert", { stagingTableName: "u_cognidesk_import", record: { short_description: "Import" } });
    await integration.run("servicenow.importSet.result.read", { tableName: "u_cognidesk_import", id: "import-1" });

    expect(calls.map((call) => call.method)).toEqual([
      "createRecord",
      "getRecord",
      "updateRecord",
      "searchRecords",
      "updateRecord",
      "updateRecord",
      "uploadAttachment",
      "listAttachments",
      "createRecord",
      "importSet",
      "getImportSetResult",
    ]);
    expect(calls[0]).toMatchObject({
      method: "createRecord",
      args: ["incident", { short_description: "Cannot sign in", u_cognidesk: "conversation_1" }],
    });
    expect(calls[4]).toMatchObject({
      method: "updateRecord",
      args: ["incident", "abc123", { comments: "Public follow-up." }],
    });
    expect(calls[7]).toMatchObject({
      method: "listAttachments",
      args: [{ limit: 5, query: "table_name=incident^table_sys_id=abc123" }],
    });
  });

  it("uses the built-in ServiceNow REST adapter when bearer credentials are configured", async () => {
    const fetchMock = createServiceNowFetchMock();
    const client = createServiceNowTicketingClient({
      instanceUrl: "https://example.service-now.com/",
      accessToken: "bearer-token",
      fetch: fetchMock,
    });

    await expect(client.createIncident({
      shortDescription: "Cannot sign in",
      additionalFields: { u_cognidesk: "conversation_1" },
    })).resolves.toMatchObject({ sys_id: "created-1" });
    await expect(client.getRecord("incident", "abc 123/a", {
      fields: ["sys_id", "number"],
      displayValue: "all",
      excludeReferenceLink: true,
    })).resolves.toMatchObject({ sys_id: "abc123" });
    await expect(client.uploadAttachment({
      tableName: "incident",
      tableSysId: "abc 123/a",
      fileName: "debug log.txt",
      contentType: "text/plain",
      data: "log body",
    })).resolves.toMatchObject({ sys_id: "attachment-1" });

    const [createUrl, createInit] = fetchMock.mock.calls[0]!;
    expect(String(createUrl)).toBe("https://example.service-now.com/api/now/table/incident");
    expect(createInit?.method).toBe("POST");
    const createHeaders = new Headers(createInit?.headers);
    expect(createHeaders.get("Authorization")).toBe("Bearer bearer-token");
    expect(createHeaders.get("Content-Type")).toBe("application/json");
    expect(JSON.parse(createInit?.body as string)).toEqual({
      short_description: "Cannot sign in",
      u_cognidesk: "conversation_1",
    });

    const readUrl = new URL(String(fetchMock.mock.calls[1]![0]));
    expect(readUrl.pathname).toBe("/api/now/table/incident/abc%20123%2Fa");
    expect(readUrl.searchParams.get("sysparm_fields")).toBe("sys_id,number");
    expect(readUrl.searchParams.get("sysparm_display_value")).toBe("all");
    expect(readUrl.searchParams.get("sysparm_exclude_reference_link")).toBe("true");

    const attachmentUrl = new URL(String(fetchMock.mock.calls[2]![0]));
    expect(attachmentUrl.pathname).toBe("/api/now/attachment/file");
    expect(attachmentUrl.searchParams.get("table_name")).toBe("incident");
    expect(attachmentUrl.searchParams.get("table_sys_id")).toBe("abc 123/a");
    expect(attachmentUrl.searchParams.get("file_name")).toBe("debug log.txt");
    const attachmentHeaders = new Headers(fetchMock.mock.calls[2]![1]?.headers);
    expect(attachmentHeaders.get("Content-Type")).toBe("text/plain");
    expect(fetchMock.mock.calls[2]![1]?.body).toBe("log body");
  });

  it("uses ServiceNow Basic Auth when username and password are configured", async () => {
    const fetchMock = vi.fn(async (_input: RequestInfo | URL, _init?: RequestInit) =>
      jsonResponse({ result: [{ sys_id: "match-1" }] }));
    const client = createServiceNowTicketingClient({
      instance: "example.service-now.com",
      username: "api-user",
      password: "api-pass",
      fetch: fetchMock,
    });

    await expect(client.searchRecords("incident", { limit: 1, query: "active=true" }))
      .resolves.toEqual([{ sys_id: "match-1" }]);

    const [url, init] = fetchMock.mock.calls[0]!;
    expect(String(url)).toBe("https://example.service-now.com/api/now/table/incident?sysparm_query=active%3Dtrue&sysparm_limit=1");
    expect(new Headers(init?.headers).get("Authorization"))
      .toBe(`Basic ${Buffer.from("api-user:api-pass").toString("base64")}`);
  });

  it("surfaces ServiceNow REST JSON errors", async () => {
    const fetchMock: NonNullable<ServiceNowTicketingClientOptions["fetch"]> = async () =>
      jsonResponse({ error: { message: "ACL denied" }, status: "failure" }, {
        status: 403,
        statusText: "Forbidden",
      });
    const client = createServiceNowTicketingClient({
      instanceUrl: "https://example.service-now.com",
      accessToken: "bearer-token",
      fetch: fetchMock,
    });

    await expect(client.getRecord("incident", "abc123")).rejects.toMatchObject({
      message: "ServiceNow request failed with 403.",
      status: 403,
      payload: { error: { message: "ACL denied" }, status: "failure" },
    });
  });

  it("fails closed only when neither REST credentials nor host raw client are provided", async () => {
    const client = createServiceNowTicketingClient({});
    await expect(client.searchRecords("incident"))
      .rejects.toThrow("ServiceNow REST adapter requires instanceUrl/baseUrl plus accessToken or username/password");
  });

  it("reports live conformance as credential-blocked until ServiceNow credentials are configured", async () => {
    const result = await runProviderConformance({
      manifest: serviceNowTicketingProviderManifest,
      channels: [{
        id: "ticketing",
        channel: "ticketing",
        providerPackageIds: [serviceNowTicketingProviderManifest.id],
        enabledCapabilities: ["create-provider-object", "read-provider-object", "update-provider-object", "search-provider-object", "handoff"],
      }],
      credentialStatuses: serviceNowTicketingCredentialStatuses({}),
      live: {
        enabled: true,
        checks: createServiceNowTicketingLiveChecks({
          client: {
            async searchRecords() {
              return [];
            },
          },
        }),
      },
    });

    expect(result.status).toBe("credential-blocked");
    expect(result.checks.some((check) =>
      check.id === "provider.live.table-api" && check.status === "credential-blocked"
    )).toBe(true);
  });

  it("passes conformance when ServiceNow live checks and credentials are configured", async () => {
    const result = await runProviderConformance({
      manifest: serviceNowTicketingProviderManifest,
      channels: [{
        id: "ticketing",
        channel: "ticketing",
        providerPackageIds: [serviceNowTicketingProviderManifest.id],
        enabledCapabilities: ["create-provider-object", "read-provider-object", "update-provider-object", "search-provider-object", "handoff"],
      }],
      credentialStatuses: serviceNowTicketingCredentialStatuses({
        instanceUrl: "https://example.service-now.com",
        accessToken: "configured",
      }),
      live: {
        enabled: true,
        checks: createServiceNowTicketingLiveChecks({
          client: {
            async searchRecords<T>() {
              return [{ sys_id: "abc123", number: "INC0010001" }] as T[];
            },
          },
        }),
      },
    });

    expect(result.status).toBe("passed");
    expect(result.checks).toContainEqual(expect.objectContaining({
      id: "provider.live.table-api",
      status: "passed",
    }));
  });
});

function createServiceNowFetchMock() {
  const responses = [
    { result: { sys_id: "created-1" } },
    { result: { sys_id: "abc123" } },
    { result: { sys_id: "attachment-1" } },
    { result: [{ sys_id: "match-1" }] },
  ];
  return vi.fn(async (_input: RequestInfo | URL, _init?: RequestInit) =>
    jsonResponse(responses.shift() ?? { result: {} }));
}

function jsonResponse(body: unknown, init: ResponseInit = {}) {
  return new Response(JSON.stringify(body), {
    status: 200,
    headers: { "Content-Type": "application/json" },
    ...init,
  });
}
