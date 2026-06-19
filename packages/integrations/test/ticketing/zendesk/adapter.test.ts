import { describe, expect, it, vi } from "vitest";
import { runProviderConformance } from "@cognidesk/test-harness";
import {
  createZendeskTicketingClient,
  createZendeskTicketingLiveChecks,
  ZENDESK_FULL_API_GENERATED_FUNCTION_COUNT,
  ZENDESK_FULL_API_GENERATED_FUNCTION_NAMES,
  ZENDESK_FULL_API_OPERATION_COUNT,
  zendeskTicketingCredentialStatuses,
  zendeskTicketingProviderManifest,
} from "../../../src/ticketing/zendesk/index.js";

describe("@cognidesk/integrations", () => {
  it("exports an official provider manifest for Zendesk ticketing", () => {
    expect(zendeskTicketingProviderManifest).toMatchObject({
      id: "ticketing.zendesk",
      packageName: "@cognidesk/integrations",
      category: "ticketing",
      provider: "zendesk",
      trustLevel: "official",
      coverage: {
        scope: "full-provider-api",
      },
    });
    expect(zendeskTicketingProviderManifest.coverage.notes.join(" ")).toContain("every operation");
    expect(zendeskTicketingProviderManifest.metadata?.fullProviderApiVerification).toMatchObject({
      documentedOperationCount: 610,
      implementedOperationCount: 610,
      unimplementedOperationCount: 0,
      generatedFunctionCount: 610,
    });
    expect(ZENDESK_FULL_API_OPERATION_COUNT).toBe(610);
    expect(ZENDESK_FULL_API_GENERATED_FUNCTION_COUNT).toBe(610);
    expect(ZENDESK_FULL_API_GENERATED_FUNCTION_NAMES).toEqual(expect.arrayContaining([
      "CreateTicket",
      "ShowTicket",
      "UploadFiles",
      "ListMacros",
      "CreateTrigger",
      "ListSearchResults",
    ]));
    expect(zendeskTicketingProviderManifest.coverage.evidence.map((entry) => entry.url))
      .toEqual(expect.arrayContaining([
        "https://developer.zendesk.com/zendesk/oas.yaml",
        "https://developer.zendesk.com/api-reference/ticketing/tickets/tickets/",
        "https://developer.zendesk.com/api-reference/ticketing/tickets/ticket_comments/",
        "https://developer.zendesk.com/api-reference/webhooks/webhooks-api/webhooks/",
      ]));
    expect(zendeskTicketingProviderManifest.capabilities.map((capability) => capability.capability))
      .toEqual(expect.arrayContaining([
        "create-provider-object",
        "read-provider-object",
        "update-provider-object",
        "search-provider-object",
        "handoff",
    ]));
    const providerObjectKinds = zendeskTicketingProviderManifest.capabilities.flatMap((capability) =>
      capability.providerObjects?.map((object) => object.kind) ?? []
    );
    expect(providerObjectKinds).toEqual(expect.arrayContaining([
      "zendeskTicket",
      "zendeskTicketComment",
      "zendeskUpload",
      "zendeskUser",
      "zendeskOrganization",
      "zendeskWebhook",
    ]));
    const readCapability = zendeskTicketingProviderManifest.capabilities.find((capability) =>
      capability.capability === "read-provider-object"
    );
    expect(readCapability?.providerObjects?.map((object) => object.kind) ?? [])
      .not.toContain("zendeskUpload");
    const searchCapability = zendeskTicketingProviderManifest.capabilities.find((capability) =>
      capability.capability === "search-provider-object"
    );
    expect(searchCapability?.description).toContain("lists configured Zendesk webhooks");
  });

  it("exposes generated functions for the full Zendesk Support OpenAPI surface", async () => {
    const fetchMock = vi.fn(async (url: string, init: RequestInit) => {
      if (url.endsWith("/api/v2/tickets") && init.method === "POST") {
        return new Response(JSON.stringify({ ticket: { id: 123 } }), { status: 201 });
      }
      if (url.endsWith("/api/v2/tickets/123") && init.method === "GET") {
        return new Response(JSON.stringify({ ticket: { id: 123 } }), { status: 200 });
      }
      if (url.endsWith("/api/v2/uploads?filename=debug.log") && init.method === "POST") {
        return new Response(JSON.stringify({ upload: { token: "upload-token" } }), { status: 201 });
      }
      if (url.endsWith("/api/v2/macros?active=true") && init.method === "GET") {
        return new Response(JSON.stringify({ macros: [{ id: 1 }] }), { status: 200 });
      }
      if (url.endsWith("/api/v2/triggers") && init.method === "POST") {
        return new Response(JSON.stringify({ trigger: { id: 2 } }), { status: 201 });
      }
      if (url.endsWith("/api/v2/search?query=type%3Aticket") && init.method === "GET") {
        return new Response(JSON.stringify({ results: [{ id: 123 }] }), { status: 200 });
      }
      return new Response(JSON.stringify({ error: "unexpected request", description: url }), { status: 500 });
    });
    const client = createZendeskTicketingClient({
      instanceUrl: "https://example.zendesk.com/",
      accessToken: "oauth-token",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await expect(client.fullApi.CreateTicket({
      body: { ticket: { subject: "Cannot sign in" } },
    })).resolves.toMatchObject({ ticket: { id: 123 } });
    await expect(client.fullApi.ShowTicket({
      pathParams: { ticket_id: 123 },
    })).resolves.toMatchObject({ ticket: { id: 123 } });
    await expect(client.fullApi.UploadFiles({
      query: { filename: "debug.log" },
      rawBody: "log body",
      contentType: "text/plain",
    })).resolves.toMatchObject({ upload: { token: "upload-token" } });
    await expect(client.fullApi.ListMacros({
      query: { active: true },
    })).resolves.toMatchObject({ macros: [{ id: 1 }] });
    await expect(client.fullApi.CreateTrigger({
      body: { trigger: { title: "Escalate VIP", actions: [] } },
    })).resolves.toMatchObject({ trigger: { id: 2 } });
    await expect(client.requestOperation("ListSearchResults", {
      query: { query: "type:ticket" },
    })).resolves.toMatchObject({ results: [{ id: 123 }] });
    // @ts-expect-error Missing path params intentionally exercises runtime validation.
    await expect(client.fullApi.ShowTicket()).rejects.toThrow("Missing Zendesk path parameter 'ticket_id'");

    expect(fetchMock).toHaveBeenNthCalledWith(
      1,
      "https://example.zendesk.com/api/v2/tickets",
      expect.objectContaining({
        method: "POST",
        headers: expect.objectContaining({
          authorization: "Bearer oauth-token",
          "content-type": "application/json",
        }),
      }),
    );
    const uploadInit = (fetchMock.mock.calls[2] as unknown[])[1] as { body: string; headers: Record<string, string> };
    expect(uploadInit.body).toBe("log body");
    expect(uploadInit.headers["content-type"]).toBe("text/plain");
  });

  it("creates Zendesk Support tickets through the Tickets API", async () => {
    const fetchMock = vi.fn(async () =>
      new Response(JSON.stringify({
        ticket: {
          id: 123,
          subject: "Cannot sign in",
          status: "new",
        },
      }), { status: 201 })
    );
    const client = createZendeskTicketingClient({
      instanceUrl: "https://example.zendesk.com/",
      email: "agent@example.test",
      apiToken: "api-token",
      fetch: fetchMock as unknown as typeof fetch,
    });

    const ticket = await client.createTicket({
      subject: "Cannot sign in",
      comment: { body: "Customer cannot sign in after password reset.", public: false },
      requesterEmail: "customer@example.test",
      priority: "high",
      tags: ["cognidesk"],
      additionalFields: { external_id: "conversation_1" },
    });

    expect(ticket.id).toBe(123);
    expect(fetchMock).toHaveBeenCalledWith(
      "https://example.zendesk.com/api/v2/tickets.json",
      expect.objectContaining({
        method: "POST",
        headers: expect.objectContaining({
          authorization: `Basic ${Buffer.from("agent@example.test/token:api-token").toString("base64")}`,
          "content-type": "application/json",
        }),
      }),
    );
    const request = (fetchMock.mock.calls[0] as unknown[])[1] as { body: string };
    expect(JSON.parse(request.body)).toMatchObject({
      ticket: {
        subject: "Cannot sign in",
        comment: { body: "Customer cannot sign in after password reset.", public: false },
        requester: { email: "customer@example.test" },
        priority: "high",
        tags: ["cognidesk"],
        external_id: "conversation_1",
      },
    });
  });

  it("reads, updates, and searches tickets with Zendesk API shapes", async () => {
    const fetchMock = vi.fn(async (url: string, init: RequestInit) => {
      if (init.method === "GET" && url.endsWith("/tickets/123.json")) {
        return new Response(JSON.stringify({ ticket: { id: 123, subject: "Cannot sign in" } }), { status: 200 });
      }
      if (init.method === "PUT") {
        return new Response(JSON.stringify({ ticket: { id: 123, status: "pending" } }), { status: 200 });
      }
      return new Response(JSON.stringify({
        count: 1,
        next_page: null,
        previous_page: null,
        results: [{ id: 123, subject: "Cannot sign in" }],
      }), { status: 200 });
    });
    const client = createZendeskTicketingClient({
      instanceUrl: "https://example.zendesk.com",
      accessToken: "oauth-token",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await expect(client.getTicket(123)).resolves.toMatchObject({ id: 123 });
    await expect(client.updateTicket(123, {
      status: "pending",
      comment: { body: "Waiting on requester.", public: false },
      assigneeId: 456,
    })).resolves.toMatchObject({ status: "pending" });
    const search = await client.searchTickets({
      query: "status:open requester:customer@example.test",
      sortBy: "updated_at",
      sortOrder: "desc",
      limit: 5,
    });

    expect(search.tickets).toHaveLength(1);
    expect(fetchMock).toHaveBeenNthCalledWith(
      1,
      "https://example.zendesk.com/api/v2/tickets/123.json",
      expect.objectContaining({
        method: "GET",
        headers: expect.objectContaining({ authorization: "Bearer oauth-token" }),
      }),
    );
    const updateRequest = (fetchMock.mock.calls[1] as unknown[])[1] as { body: string };
    expect(JSON.parse(updateRequest.body)).toMatchObject({
      ticket: {
        status: "pending",
        comment: { body: "Waiting on requester.", public: false },
        assignee_id: 456,
      },
    });
    const [searchUrl] = fetchMock.mock.calls[2] as unknown as [string, RequestInit];
    expect(searchUrl).toBe(
      "https://example.zendesk.com/api/v2/search.json?query=type%3Aticket+status%3Aopen+requester%3Acustomer%40example.test&sort_by=updated_at&sort_order=desc&per_page=5",
    );
  });

  it("supports comments, uploads, users, organizations, and webhook listing", async () => {
    const fetchMock = vi.fn(async (url: string, init: RequestInit) => {
      if (url.endsWith("/tickets/123/comments.json")) {
        return new Response(JSON.stringify({ comments: [{ id: 1, public: false }], next_page: null }), { status: 200 });
      }
      if (url.includes("/uploads.json?filename=debug.log") && init.method === "POST") {
        return new Response(JSON.stringify({ upload: { token: "upload-token" } }), { status: 201 });
      }
      if (url.endsWith("/users/456.json")) {
        return new Response(JSON.stringify({ user: { id: 456, email: "customer@example.test" } }), { status: 200 });
      }
      if (url.endsWith("/organizations/789.json")) {
        return new Response(JSON.stringify({ organization: { id: 789, name: "Example" } }), { status: 200 });
      }
      return new Response(JSON.stringify({ webhooks: [{ id: "webhook-1", status: "active" }] }), { status: 200 });
    });
    const client = createZendeskTicketingClient({
      instanceUrl: "https://example.zendesk.com",
      accessToken: "oauth-token",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await expect(client.listTicketComments(123)).resolves.toMatchObject({
      comments: [{ id: 1, public: false }],
      nextPage: null,
    });
    await expect(client.uploadFile({
      filename: "debug.log",
      contentType: "text/plain",
      data: "log body",
    })).resolves.toMatchObject({ token: "upload-token" });
    await expect(client.getUser(456)).resolves.toMatchObject({ email: "customer@example.test" });
    await expect(client.getOrganization(789)).resolves.toMatchObject({ name: "Example" });
    await expect(client.listWebhooks()).resolves.toEqual([{ id: "webhook-1", status: "active" }]);

    const uploadInit = (fetchMock.mock.calls[1] as unknown[])[1] as { body: string; headers: Record<string, string> };
    expect(uploadInit.body).toBe("log body");
    expect(uploadInit.headers["content-type"]).toBe("text/plain");
  });

  it("reports live conformance as credential-blocked until Zendesk credentials are configured", async () => {
    const result = await runProviderConformance({
      manifest: zendeskTicketingProviderManifest,
      channels: [{
        id: "ticketing",
        channel: "ticketing",
        providerPackageIds: [zendeskTicketingProviderManifest.id],
        enabledCapabilities: ["create-provider-object", "read-provider-object", "update-provider-object", "search-provider-object", "handoff"],
      }],
      credentialStatuses: zendeskTicketingCredentialStatuses({}),
      live: {
        enabled: true,
        checks: createZendeskTicketingLiveChecks({
          instanceUrl: "https://example.zendesk.com",
          accessToken: "missing",
          client: {
            async getCurrentUser() {
              return {};
            },
          },
        }),
      },
    });

    expect(result.status).toBe("credential-blocked");
    expect(result.checks.some((check) =>
      check.id === "provider.live.current-user" && check.status === "credential-blocked"
    )).toBe(true);
  });

  it("passes conformance when Zendesk current-user live check and credentials are configured", async () => {
    const result = await runProviderConformance({
      manifest: zendeskTicketingProviderManifest,
      channels: [{
        id: "ticketing",
        channel: "ticketing",
        providerPackageIds: [zendeskTicketingProviderManifest.id],
        enabledCapabilities: ["create-provider-object", "read-provider-object", "update-provider-object", "search-provider-object", "handoff"],
      }],
      credentialStatuses: zendeskTicketingCredentialStatuses({
        instanceUrl: "https://example.zendesk.com",
        accessToken: "configured",
      }),
      live: {
        enabled: true,
        checks: createZendeskTicketingLiveChecks({
          instanceUrl: "https://example.zendesk.com",
          accessToken: "configured",
          client: {
            async getCurrentUser() {
              return { id: 123, role: "agent", active: true };
            },
          },
        }),
      },
    });

    expect(result.status).toBe("passed");
    expect(result.checks).toContainEqual(expect.objectContaining({
      id: "provider.live.current-user",
      status: "passed",
    }));
  });
});
