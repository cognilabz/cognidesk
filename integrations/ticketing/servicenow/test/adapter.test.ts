import { describe, expect, it, vi } from "vitest";
import { runProviderConformance } from "@cognidesk/test-harness";
import { assertIntegrationConformance } from "@cognidesk/integration-kit/testing";
import {
  createServiceNowSdkConnectorRawClient,
  createServiceNowTicketingClient,
  createServiceNowTicketingIntegration,
  createServiceNowTicketingLiveChecks,
  serviceNowTicketingCredentialStatuses,
  serviceNowTicketingProviderOperations,
  serviceNowTicketingProviderManifest,
} from "../src/index.js";
import type { ServiceNowRawClient, ServiceNowRecord, ServiceNowTicketingClientOptions } from "../src/index.js";

interface FakeServiceNowConnector {
  fetch: ReturnType<typeof vi.fn>;
  queryTable: ReturnType<typeof vi.fn>;
}

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
        package: "@servicenow/sdk-api",
        checkedVersion: "4.8.0",
        result: "used-as-runtime-connector",
      },
      sdkDecision: {
        result: "official-sdk-runtime-connector-not-ticketing-client",
      },
      implementation: {
        strategy: "official-sdk-connector",
        rawClientEscapeHatch: "ServiceNowTicketingClient.rawClient",
        sdkPackage: "@servicenow/sdk-api",
        sdkRuntimeSurface: "Connector.fetch and Connector.queryTable",
        defaultClientPolicy: expect.stringContaining("official-servicenow-sdk-api-connector"),
        packageOwnedRestClient: false,
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
    const serviceNowCalls: Array<{ method: string; args: unknown[] }> = [];
    const rawClient: ServiceNowRawClient = {
      async createRecord<T extends ServiceNowRecord = ServiceNowRecord>(tableName: string, record: object) {
        serviceNowCalls.push({ method: "createRecord", args: [tableName, record] });
        return { sys_id: "created-1", tableName, ...record } as unknown as T;
      },
      async getRecord<T extends ServiceNowRecord = ServiceNowRecord>(tableName: string, sysId: string, query?: unknown) {
        serviceNowCalls.push({ method: "getRecord", args: [tableName, sysId, query] });
        return { sys_id: sysId, tableName } as unknown as T;
      },
      async updateRecord<T extends ServiceNowRecord = ServiceNowRecord>(tableName: string, sysId: string, patch: object) {
        serviceNowCalls.push({ method: "updateRecord", args: [tableName, sysId, patch] });
        return { sys_id: sysId, tableName, ...patch } as unknown as T;
      },
      async searchRecords<T extends ServiceNowRecord = ServiceNowRecord>(tableName: string, query?: unknown) {
        serviceNowCalls.push({ method: "searchRecords", args: [tableName, query] });
        return [{ sys_id: "match-1", tableName } as unknown as T];
      },
      async uploadAttachment(input) {
        serviceNowCalls.push({ method: "uploadAttachment", args: [input] });
        return { sys_id: "attachment-1", file_name: input.fileName };
      },
      async listAttachments(query) {
        serviceNowCalls.push({ method: "listAttachments", args: [query] });
        return [{ sys_id: "attachment-1" }];
      },
      async importSet(stagingTableName, record) {
        serviceNowCalls.push({ method: "importSet", args: [stagingTableName, record] });
        return { sys_id: "import-1", stagingTableName };
      },
      async getImportSetResult(stagingTableName, sysId) {
        serviceNowCalls.push({ method: "getImportSetResult", args: [stagingTableName, sysId] });
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

    expect(serviceNowCalls.map((call) => call.method)).toEqual([
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
    expect(serviceNowCalls[0]).toMatchObject({
      method: "createRecord",
      args: ["incident", { short_description: "Cannot sign in", u_cognidesk: "conversation_1" }],
    });
    expect(serviceNowCalls[4]).toMatchObject({
      method: "updateRecord",
      args: ["incident", "abc123", { comments: "Public follow-up." }],
    });
    expect(serviceNowCalls[7]).toMatchObject({
      method: "listAttachments",
      args: [{ limit: 5, query: "table_name=incident^table_sys_id=abc123" }],
    });

    await expect(integration.run("ticket.attachments.list", { ticketId: "abc^123", limit: 5 }))
      .rejects.toThrow("ServiceNow encoded query value for table_sys_id");
    await expect(integration.run("ticket.attachments.list", { ticketId: "abc123", tableName: "incident=bad" }))
      .rejects.toThrow("ServiceNow encoded query value for table_name");
  });

  it("uses the official ServiceNow SDK connector when bearer credentials are configured", async () => {
    const fetchMock = createServiceNowFetchMock();
    const originalFetch = globalThis.fetch;
    vi.stubGlobal("fetch", fetchMock);
    const client = createServiceNowTicketingClient({
      instanceUrl: "https://example.service-now.com/",
      accessToken: "bearer-token",
      timeoutMs: 250,
    });

    try {
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
      expect(fetchMock.mock.calls[2]![1]?.signal).toBeInstanceOf(AbortSignal);
    } finally {
      vi.stubGlobal("fetch", originalFetch);
    }
  });

  it("uses the official ServiceNow SDK connector for OAuth runtime transport", async () => {
    const connector: FakeServiceNowConnector = {
      fetch: vi.fn(async () => jsonResponse({ result: { sys_id: "created-1" } })),
      queryTable: vi.fn(async () => ({
        table: "incident",
        count: 1,
        hasMore: false,
        nextOffset: null,
        records: [{ sys_id: "match-1" }],
      })),
    };
    const client = createServiceNowSdkConnectorRawClient({
      connector: connector as any,
      accessToken: "bearer-token",
      instanceUrl: "https://example.service-now.com/",
      timeoutMs: 250,
    });

    await expect(client.createRecord("incident", { short_description: "Cannot sign in" }))
      .resolves.toMatchObject({ sys_id: "created-1" });
    await expect(client.searchRecords("incident", {
      query: "active=true",
      fields: ["sys_id", "number"],
      limit: 1,
      displayValue: true,
      excludeReferenceLink: true,
    })).resolves.toEqual([{ sys_id: "match-1" }]);

    expect(connector.fetch).toHaveBeenCalledWith(
      "/api/now/table/incident",
      expect.objectContaining({
        method: "POST",
        body: JSON.stringify({ short_description: "Cannot sign in" }),
      }),
      undefined,
    );
    const createHeaders = new Headers(connector.fetch.mock.calls[0]![1]?.headers);
    expect(createHeaders.get("Accept")).toBe("application/json");
    expect(createHeaders.get("Content-Type")).toBe("application/json");
    expect(connector.queryTable).toHaveBeenCalledWith({
      table: "incident",
      encodedQuery: "active=true",
      fields: "sys_id,number",
      limit: 1,
      displayValue: "true",
      excludeReferenceLink: true,
      timeoutMs: 250,
    });
  });

  it("does not fall back to package-owned Basic Auth REST when the SDK connector cannot be configured", async () => {
    const fetchMock = vi.fn(async (_input: RequestInfo | URL, _init?: RequestInit) =>
      jsonResponse({ result: [{ sys_id: "match-1" }] }));
    const client = createServiceNowTicketingClient({
      instance: "example.service-now.com",
      ...({
        username: "api-user",
        password: "api-pass",
        fetch: fetchMock,
      } as unknown as Partial<ServiceNowTicketingClientOptions> & { fetch: typeof fetchMock }),
    });

    await expect(client.searchRecords("incident", { limit: 1, query: "active=true" }))
      .rejects.toThrow("built-in @servicenow/sdk-api Connector");
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("creates an unconfigured integration safely with no factory options", async () => {
    const integration = createServiceNowTicketingIntegration();

    await expect(integration.run("ticket.search", undefined))
      .rejects.toThrow("ServiceNow integration requires an injected ServiceNowRawClient");
  });

  it("surfaces ServiceNow REST JSON errors", async () => {
    const connector: FakeServiceNowConnector = {
      fetch: vi.fn(async () => jsonResponse({ error: { message: "ACL denied" }, status: "failure" }, {
        status: 403,
        statusText: "Forbidden",
      })),
      queryTable: vi.fn(),
    };
    const client = createServiceNowTicketingClient({
      connector: connector as any,
    });

    await expect(client.getRecord("incident", "abc123")).rejects.toMatchObject({
      message: "ServiceNow request failed with 403.",
      status: 403,
      payload: { error: { message: "ACL denied" }, status: "failure" },
    });
    expect(connector.fetch).toHaveBeenCalledWith(
      "/api/now/table/incident/abc123",
      expect.objectContaining({ method: "GET" }),
      expect.any(URLSearchParams),
    );
  });

  it("fails closed when neither the official SDK connector nor a host raw client is provided", async () => {
    const client = createServiceNowTicketingClient({});
    await expect(client.searchRecords("incident"))
      .rejects.toThrow("ServiceNow integration requires an injected ServiceNowRawClient");
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
