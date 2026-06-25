import { Buffer } from "node:buffer";
import { assertIntegrationConformance } from "@cognidesk/integration-kit/testing";
import { beforeEach, describe, expect, it, vi } from "vitest";
import {
  createFreshdeskUnavailableClient,
  createFreshdeskTicketingClient,
  createFreshdeskTicketingIntegrationOperationHandlers,
  createFreshdeskTicketingIntegration,
  parseFreshdeskWebhookRequest,
  type FreshdeskJsonObject,
  type FreshdeskTicketingClientOptions,
  type FreshdeskTicketingProviderClient,
} from "../src/index.js";
import packageJson from "../package.json";
import { freshdeskTicketingProviderManifest as manifestOnly } from "../src/manifest.js";

const freshdeskSdkFactory = vi.hoisted(() => vi.fn());

vi.mock("@freshworks/freshdesk", () => ({
  default: freshdeskSdkFactory,
}));

describe("@cognidesk/integration-ticketing-freshdesk", () => {
  beforeEach(() => {
    freshdeskSdkFactory.mockReset();
  });

  it("exports host-injected provider metadata", () => {
    expect(manifestOnly.packageName).toBe("@cognidesk/integration-ticketing-freshdesk");
    expect(manifestOnly.metadata?.implementation).toMatchObject({
      strategy: "provider-sdk-adapter",
      runtimePackage: "@cognidesk/integration-ticketing-freshdesk",
      providerSdkPackage: "@freshworks/freshdesk",
      providerClient: "FreshdeskTicketingProviderClient",
      rawClientEscapeHatch: "FreshdeskTicketingClient.providerClient",
      defaultClientPolicy: "use-official-freshworks-freshdesk-sdk-when-domain-and-apiKey-are-configured",
      packageOwnedRestClient: false,
      packageOwnedRestFallback: true,
      providerClientOverride: true,
      rawClientOverride: true,
      sdkDecision: {
        package: "@freshworks/freshdesk",
        checkedVersion: "0.0.1",
        license: "freshdesk",
        result: "accepted-runtime-sdk",
      },
    });
    expect(manifestOnly.metadata?.sdkDecision).toMatchObject({
      package: "@freshworks/freshdesk",
      checkedVersion: "0.0.1",
      license: "freshdesk",
      result: "accepted-runtime-sdk",
    });
    expect(packageJson.cognidesk.providerSdkDependencies).toEqual(["@freshworks/freshdesk"]);
    expect(packageJson.cognidesk.providerSdkRuntime).toMatchObject({
      sdkPackage: "@freshworks/freshdesk",
      checkedVersion: "0.0.1",
      license: "freshdesk",
      result: "accepted-default-runtime-sdk",
      typedClientOverride: "FreshdeskTicketingProviderClient",
    });
  });

  it("binds declared operations to handlers", () => {
    const integration = createFreshdeskTicketingIntegration({
      providerClient: fakeFreshdeskProviderClient(),
    });
    expect(() => assertIntegrationConformance(integration)).not.toThrow();
  });

  it("creates a client that delegates operations to the injected provider client", async () => {
    const calls: Array<{ operation: string; args: unknown[] }> = [];
    const providerClient = fakeFreshdeskProviderClient(calls);
    const client = createFreshdeskTicketingClient({
      providerClient,
    });
    const handlers = createFreshdeskTicketingIntegrationOperationHandlers({
      ticketingClient: client,
    });

    expect(client.providerClient).toBe(providerClient);
    await expect(handlers["ticket.comment.create"]({ ticketId: 42, reply: { body: "Hello" } }, {
      providerPackageId: "ticketing.freshdesk",
      provider: "freshdesk",
      operationAlias: "ticket.comment.create",
    })).resolves.toEqual({ ok: true, operation: "createReply" });
    expect(calls[0]).toEqual({
      operation: "createReply",
      args: [42, { body: "Hello" }],
    });
  });

  it("uses the official Freshworks Freshdesk SDK by default for covered operations", async () => {
    const sdkClient = {
      tickets: {
        createTicket: vi.fn(async (input: unknown) => ({ ok: true, id: 42, input })),
        getTicket: vi.fn(async () => ({ id: 42 })),
        updateTicket: vi.fn(async () => ({ id: 42, updated: true })),
        searchTicket: vi.fn(async () => ({ results: [] })),
        replyTicket: vi.fn(async () => ({ replied: true })),
        addNotes: vi.fn(async () => ({ noted: true })),
      },
      contacts: {
        getContact: vi.fn(async () => ({ id: 7 })),
        searchContacts: vi.fn(async () => ({ results: [] })),
      },
      conversations: {
        getAllTicketConversations: vi.fn(async () => []),
      },
    };
    freshdeskSdkFactory.mockImplementation(function FreshdeskSdkMock() {
      return sdkClient;
    });
    const client = createFreshdeskTicketingClient({
      domain: "acme",
      apiKey: "fd-key",
    });

    await expect(client.createTicket({
      subject: "Flight disruption",
      email: "ada@example.test",
    })).resolves.toMatchObject({ ok: true, id: 42 });
    await client.getTicket(42);
    await client.searchTickets("\"email:ada@example.test\"");
    await client.createReply(42, { body: "Hello" });
    await client.createNote(42, { body: "Internal" });
    await client.getContact(7);
    await client.searchContacts({ query: "\"email:ada@example.test\"" });

    expect(freshdeskSdkFactory).toHaveBeenCalledWith({
      domain: "acme.freshdesk.com",
      api_key: "fd-key",
    });
    expect(sdkClient.tickets.createTicket).toHaveBeenCalledWith({
      subject: "Flight disruption",
      email: "ada@example.test",
    });
    expect(sdkClient.tickets.getTicket).toHaveBeenCalledWith(42);
    expect(sdkClient.tickets.searchTicket).toHaveBeenCalledWith("\"email:ada@example.test\"");
    expect(sdkClient.tickets.replyTicket).toHaveBeenCalledWith(42, { body: "Hello" });
    expect(sdkClient.tickets.addNotes).toHaveBeenCalledWith(42, { body: "Internal" });
    expect(sdkClient.contacts.getContact).toHaveBeenCalledWith(7);
    expect(sdkClient.contacts.searchContacts).toHaveBeenCalledWith({ query: "\"email:ada@example.test\"" });
  });

  it("uses the built-in Freshdesk REST adapter when credentials are configured", async () => {
    const fetchMock = vi.fn(async (_input: RequestInfo | URL, _init?: RequestInit) =>
      jsonResponse({ ok: true, id: 42 }));
    const client = createFreshdeskTicketingClient({
      domain: "acme",
      apiKey: "fd-key",
      fetch: fetchMock,
    });

    await expect(client.createTicket({
      subject: "Flight disruption",
      email: "ada@example.test",
      custom_fields: { cf_tier: "gold" },
    })).resolves.toMatchObject({ ok: true, id: 42 });
    await client.getTicket("ticket 42/a");
    await client.searchTickets({ query: "\"email:ada@example.test\"", page: 2 });

    const [createUrl, createInit] = fetchMock.mock.calls[0]!;
    expect(String(createUrl)).toBe("https://acme.freshdesk.com/api/v2/tickets");
    expect(createInit?.method).toBe("POST");
    expect(new Headers(createInit?.headers).get("Authorization"))
      .toBe(`Basic ${Buffer.from("fd-key:X").toString("base64")}`);
    expect(new Headers(createInit?.headers).get("Content-Type")).toBe("application/json");
    expect(JSON.parse(createInit?.body as string)).toEqual({
      subject: "Flight disruption",
      email: "ada@example.test",
      custom_fields: { cf_tier: "gold" },
    });

    expect(String(fetchMock.mock.calls[1]![0]))
      .toBe("https://acme.freshdesk.com/api/v2/tickets/ticket%2042%2Fa");
    const searchUrl = new URL(String(fetchMock.mock.calls[2]![0]));
    expect(searchUrl.pathname).toBe("/api/v2/search/tickets");
    expect(searchUrl.searchParams.get("query")).toBe("\"email:ada@example.test\"");
    expect(searchUrl.searchParams.get("page")).toBe("2");
    expect(freshdeskSdkFactory).not.toHaveBeenCalled();
  });

  it("surfaces Freshdesk REST JSON errors", async () => {
    const fetchMock: NonNullable<FreshdeskTicketingClientOptions["fetch"]> = vi.fn(async () =>
      jsonResponse({
        errors: [{ field: "subject", message: "It should be a/an String" }],
      }, {
        status: 422,
        statusText: "Unprocessable Entity",
      }));
    const client = createFreshdeskTicketingClient({
      domain: "https://acme.freshdesk.com",
      apiKey: "fd-key",
      fetch: fetchMock,
    });

    await expect(client.createTicket({})).rejects.toMatchObject({
      message: "Freshdesk request failed with 422.",
      status: 422,
      payload: {
        errors: [{ field: "subject", message: "It should be a/an String" }],
      },
    });
  });

  it("fails closed only when neither REST credentials nor host client are provided", async () => {
    const client = createFreshdeskUnavailableClient();
    await expect(client.readiness()).rejects.toThrow("Freshdesk REST adapter requires domain and apiKey");

    const integration = createFreshdeskTicketingIntegration({});
    await expect(integration.run("freshdesk.readiness", undefined)).rejects.toThrow("domain and apiKey");
  });

  it("delegates Freshdesk replies and parses shared-secret webhooks", async () => {
    const webhookCalls: Array<{ operation: string; args: unknown[] }> = [];
    const integration = createFreshdeskTicketingIntegration({
      providerClient: fakeFreshdeskProviderClient(webhookCalls),
    });
    await integration.run("ticket.comment.create", { ticketId: 42, reply: { body: "Hello" } });
    expect(webhookCalls[0]).toEqual({
      operation: "createReply",
      args: [42, { body: "Hello" }],
    });

    const request = new Request("https://example.test/webhook", {
      method: "POST",
      headers: { "x-cognidesk-freshdesk-webhook-secret": "secret" },
      body: JSON.stringify({ ticket_id: 42 }),
    });
    await expect(parseFreshdeskWebhookRequest(request, { webhookSecret: "secret" }))
      .resolves.toMatchObject({ verified: true, event: { provider: "freshdesk" } });
  });

  it("keeps construction-time Freshdesk webhook credentials authoritative", async () => {
    const integration = createFreshdeskTicketingIntegration({
      providerClient: fakeFreshdeskProviderClient(),
      webhookSecret: "instance-secret",
      webhookHeaderName: "x-instance-secret",
    });
    const request = new Request("https://example.test/webhook", {
      method: "POST",
      headers: { "x-instance-secret": "instance-secret" },
      body: JSON.stringify({ ticket_id: 42 }),
    });

    await expect(integration.run("freshdesk.webhook.parse", {
      request,
      options: {
        webhookSecret: "attacker-secret",
        headerName: "x-attacker-secret",
      },
    })).resolves.toMatchObject({ verified: true, event: { provider: "freshdesk" } });
  });

  it("rejects unsigned Freshdesk webhooks before parsing the request body", async () => {
    const unsignedRequest = new Request("https://example.test/webhook", {
      method: "POST",
      body: "{not-json",
    });

    await expect(parseFreshdeskWebhookRequest(unsignedRequest))
      .rejects.toThrow("Freshdesk webhook shared secret mismatch");
  });

  it("rejects non-object Freshdesk webhook payloads", async () => {
    const request = new Request("https://example.test/webhook", {
      method: "POST",
      headers: { "x-cognidesk-freshdesk-webhook-secret": "secret" },
      body: JSON.stringify(["not", "an", "object"]),
    });

    await expect(parseFreshdeskWebhookRequest(request, { webhookSecret: "secret" }))
      .rejects.toThrow("Freshdesk webhook payload must be a JSON object");
  });
});

function fakeFreshdeskProviderClient(
  calls: Array<{ operation: string; args: unknown[] }> = [],
): FreshdeskTicketingProviderClient {
  const record = (operation: string, args: unknown[]): Promise<FreshdeskJsonObject> => {
    calls.push({ operation, args });
    return Promise.resolve({ ok: true, operation });
  };

  return {
    createTicket: (input) => record("createTicket", [input]),
    getTicket: (ticketId) => record("getTicket", [ticketId]),
    updateTicket: (ticketId, patch) => record("updateTicket", [ticketId, patch]),
    searchTickets: (query) => record("searchTickets", [query]),
    createReply: (ticketId, body) => record("createReply", [ticketId, body]),
    createNote: (ticketId, body) => record("createNote", [ticketId, body]),
    getContact: (contactId) => record("getContact", [contactId]),
    searchContacts: (query) => record("searchContacts", [query]),
    getAgent: (agentId) => record("getAgent", [agentId]),
    getGroup: (groupId) => record("getGroup", [groupId]),
    readiness: () => record("readiness", []),
  };
}

function jsonResponse(body: unknown, init: ResponseInit = {}) {
  return new Response(JSON.stringify(body), {
    status: 200,
    headers: { "Content-Type": "application/json" },
    ...init,
  });
}
