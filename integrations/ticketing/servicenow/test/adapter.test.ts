import { describe, expect, it, vi } from "vitest";
import { runProviderConformance } from "@cognidesk/test-harness";
import {
  createServiceNowTicketingClient,
  createServiceNowTicketingLiveChecks,
  serviceNowTicketingCredentialStatuses,
  serviceNowTicketingProviderManifest,
} from "../src/index.js";

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
    });
  });

  it("creates incidents through the ServiceNow Table API", async () => {
    const fetchMock = vi.fn(async () =>
      new Response(JSON.stringify({
        result: {
          sys_id: "abc123",
          number: "INC0010001",
          short_description: "Cannot sign in",
        },
      }), { status: 201 })
    );
    const client = createServiceNowTicketingClient({
      instanceUrl: "https://example.service-now.com/",
      username: "api-user",
      password: "api-pass",
      fetch: fetchMock as unknown as typeof fetch,
    });

    const incident = await client.createIncident({
      shortDescription: "Cannot sign in",
      description: "Customer cannot sign in after password reset.",
      callerId: "user@example.test",
      additionalFields: { u_cognidesk_conversation: "conversation_1" },
    });

    expect(incident.number).toBe("INC0010001");
    expect(fetchMock).toHaveBeenCalledWith(
      "https://example.service-now.com/api/now/table/incident",
      expect.objectContaining({
        method: "POST",
        headers: expect.objectContaining({
          authorization: `Basic ${Buffer.from("api-user:api-pass").toString("base64")}`,
          "content-type": "application/json",
        }),
      }),
    );
    const request = (fetchMock.mock.calls[0] as unknown[])[1] as { body: string };
    expect(JSON.parse(request.body)).toMatchObject({
      short_description: "Cannot sign in",
      description: "Customer cannot sign in after password reset.",
      caller_id: "user@example.test",
      u_cognidesk_conversation: "conversation_1",
    });
  });

  it("searches records with sysparm query controls", async () => {
    const fetchMock = vi.fn(async () =>
      new Response(JSON.stringify({
        result: [{ sys_id: "abc123", number: "INC0010001" }],
      }), { status: 200 })
    );
    const client = createServiceNowTicketingClient({
      instanceUrl: "https://example.service-now.com",
      accessToken: "oauth-token",
      fetch: fetchMock as unknown as typeof fetch,
    });

    const records = await client.searchRecords("incident", {
      query: "active=true",
      fields: ["sys_id", "number"],
      limit: 5,
      excludeReferenceLink: true,
    });

    expect(records).toHaveLength(1);
    const [url, init] = fetchMock.mock.calls[0] as unknown as [string, { headers: Record<string, string> }];
    expect(url).toBe("https://example.service-now.com/api/now/table/incident?sysparm_query=active%3Dtrue&sysparm_fields=sys_id%2Cnumber&sysparm_limit=5&sysparm_exclude_reference_link=true");
    expect(init.headers.authorization).toBe("Bearer oauth-token");
  });

  it("attaches ServiceNow incident work notes and comments through documented Table API updates", async () => {
    const fetchMock = vi.fn(async () =>
      new Response(JSON.stringify({ result: { sys_id: "abc123", number: "INC0010001" } }), { status: 200 })
    );
    const client = createServiceNowTicketingClient({
      instanceUrl: "https://example.service-now.com",
      accessToken: "oauth-token",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await expect(client.addIncidentWorkNote("abc123", "Handoff summary for the ServiceNow agent."))
      .resolves.toMatchObject({ sys_id: "abc123" });
    await expect(client.addIncidentComment("abc123", "Customer-visible follow-up from Cognidesk."))
      .resolves.toMatchObject({ sys_id: "abc123" });

    expect(fetchMock).toHaveBeenNthCalledWith(
      1,
      "https://example.service-now.com/api/now/table/incident/abc123",
      expect.objectContaining({
        method: "PATCH",
        body: JSON.stringify({ work_notes: "Handoff summary for the ServiceNow agent." }),
      }),
    );
    expect(fetchMock).toHaveBeenNthCalledWith(
      2,
      "https://example.service-now.com/api/now/table/incident/abc123",
      expect.objectContaining({
        method: "PATCH",
        body: JSON.stringify({ comments: "Customer-visible follow-up from Cognidesk." }),
      }),
    );
  });

  it("supports ServiceNow Attachment and Import Set API request shapes", async () => {
    const fetchMock = vi.fn(async (url: string, init: RequestInit) => {
      if (url.includes("/attachment/file") && init.method === "POST") {
        return new Response(JSON.stringify({ result: { sys_id: "attachment-1", file_name: "debug.log" } }), { status: 201 });
      }
      if (url.includes("/attachment?")) {
        return new Response(JSON.stringify({ result: [{ sys_id: "attachment-1" }] }), { status: 200 });
      }
      if (url.endsWith("/api/now/import/u_cognidesk_import") && init.method === "POST") {
        return new Response(JSON.stringify({ result: { sys_id: "import-1", transform_map: "map-1" } }), { status: 201 });
      }
      return new Response(JSON.stringify({ result: { sys_id: "import-1", status: "inserted" } }), { status: 200 });
    });
    const client = createServiceNowTicketingClient({
      instanceUrl: "https://example.service-now.com",
      accessToken: "oauth-token",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await expect(client.uploadAttachment({
      tableName: "incident",
      tableSysId: "abc123",
      fileName: "debug.log",
      contentType: "text/plain",
      data: "log body",
    })).resolves.toMatchObject({ sys_id: "attachment-1" });
    await expect(client.listAttachments({
      query: "table_name=incident^table_sys_id=abc123",
      limit: 10,
    })).resolves.toHaveLength(1);
    await expect(client.importSet("u_cognidesk_import", {
      short_description: "Cannot sign in",
    })).resolves.toMatchObject({ sys_id: "import-1" });
    await expect(client.getImportSetResult("u_cognidesk_import", "import-1")).resolves.toMatchObject({
      status: "inserted",
    });

    const uploadInit = (fetchMock.mock.calls[0] as unknown[])[1] as { body: string; headers: Record<string, string> };
    expect((fetchMock.mock.calls[0] as unknown as [string, RequestInit])[0]).toBe(
      "https://example.service-now.com/api/now/attachment/file?table_name=incident&table_sys_id=abc123&file_name=debug.log",
    );
    expect(uploadInit.body).toBe("log body");
    expect(uploadInit.headers["content-type"]).toBe("text/plain");
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
          instanceUrl: "https://example.service-now.com",
          accessToken: "missing",
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
          instanceUrl: "https://example.service-now.com",
          accessToken: "configured",
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
