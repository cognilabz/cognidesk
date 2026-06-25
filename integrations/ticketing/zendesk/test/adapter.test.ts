import { assertIntegrationConformance } from "@cognidesk/integration-kit/testing";
import { describe, expect, it, vi } from "vitest";
import {
  createZendeskTicketingClient,
  createZendeskTicketingIntegration,
  zendeskTicketingOperationAliases,
  zendeskTicketingProviderManifest,
} from "../src/index.js";
import { zendeskTicketingProviderManifest as manifestOnly } from "../src/manifest.js";
import type { ZendeskTicketingRawClient } from "../src/index.js";

describe("@cognidesk/integration-ticketing-zendesk", () => {
  it("exports SDK-backed Zendesk provider metadata", () => {
    expect(manifestOnly.packageName).toBe("@cognidesk/integration-ticketing-zendesk");
    expect(manifestOnly.coverage.scope).toBe("support-workflow-subset");
    expect(manifestOnly.coverage.notes.join(" ")).toContain("node-zendesk");
    expect(manifestOnly.operations.map((operation) => operation.alias)).toEqual([...zendeskTicketingOperationAliases]);
    expect(manifestOnly.metadata?.implementationStrategy).toBe("node-zendesk-sdk-backed-support-workflow-subset");
    expect(manifestOnly.metadata?.providerClient).toMatchObject({
      package: "node-zendesk",
      importPolicy: "runtime-entrypoint-only",
    });
    expect(manifestOnly.metadata?.implementation).toMatchObject({
      rawClientEscapeHatch: "ZendeskTicketingClient.rawClient / getRawClient()",
    });
    expect(manifestOnly.metadata).not.toHaveProperty("sdkDecision");
  });

  it("binds declared operations to injectable rawClient-backed handlers", () => {
    const rawClient = fakeZendeskRawClient();
    const integration = createZendeskTicketingIntegration({
      instanceUrl: "https://example.zendesk.com",
      rawClient,
    });

    expect(integration.manifest.id).toBe(zendeskTicketingProviderManifest.id);
    expect(integration.client.rawClient).toBe(rawClient);
    expect(integration.getRawClient()).toBe(rawClient);
    expect(integration.operationAliases).toEqual([...zendeskTicketingOperationAliases]);
    expect(() => assertIntegrationConformance(integration)).not.toThrow();
  });

  it("creates SDK clients with Zendesk endpoint and auth options", () => {
    const rawClient = fakeZendeskRawClient();
    const createSdkClient = vi.fn(() => rawClient);

    const client = createZendeskTicketingClient({
      instanceUrl: "https://example.zendesk.com/",
      accessToken: "oauth-token",
      createSdkClient,
    });

    expect(client.rawClient).toBe(rawClient);
    expect(client.getRawClient()).toBe(rawClient);
    expect(createSdkClient).toHaveBeenCalledWith(expect.objectContaining({
      endpointUri: "https://example.zendesk.com/api/v2",
      token: "oauth-token",
      oauth: true,
      useOAuth: true,
      throwOriginalException: true,
    }));
  });

  it("routes ticketing operations through node-zendesk rawClient resources", async () => {
    const calls: Array<{ method: string; args: unknown[] }> = [];
    const rawClient = fakeZendeskRawClient(calls);
    const integration = createZendeskTicketingIntegration({
      instanceUrl: "https://example.zendesk.com",
      rawClient,
    });

    await expect(integration.run("ticket.create", { subject: "Need help" })).resolves.toMatchObject({ id: 123 });
    await expect(integration.run("ticket.read", { ticketId: "123" })).resolves.toMatchObject({ id: 123 });
    await expect(integration.run("ticket.update", {
      ticketId: 123,
      patch: { priority: "high" },
    })).resolves.toMatchObject({ id: 123, priority: "high" });
    await expect(integration.run("ticket.search", { query: { type: "ticket", status: "open" } })).resolves.toMatchObject({
      results: [{ id: 123 }],
    });
    await expect(integration.run("ticket.comment.create", {
      ticketId: 123,
      comment: { body: "We can help." },
    })).resolves.toMatchObject({ comment: { public: true } });
    await expect(integration.run("ticket.internalNote.create", {
      ticketId: 123,
      note: { body: "Agent-only note." },
    })).resolves.toMatchObject({ comment: { public: false } });
    await expect(integration.run("ticket.attachments.add", {
      filename: "trace.txt",
      data: "hello",
      token: "upload-token",
    })).resolves.toMatchObject({ token: "upload-token" });
    await expect(integration.run("customer.read", { userId: 456 })).resolves.toMatchObject({ id: 456 });
    await expect(integration.run("zendesk.organization.read", { organizationId: 789 })).resolves.toMatchObject({ id: 789 });
    await expect(integration.run("zendesk.webhook.list", undefined)).resolves.toEqual([{ id: "webhook_1" }]);
    await expect(integration.run("zendesk.readiness", undefined)).resolves.toMatchObject({ id: 1, email: "agent@example.com" });

    expect(calls).toEqual(expect.arrayContaining([
      { method: "tickets.create", args: [{ ticket: { subject: "Need help" } }] },
      { method: "tickets.show", args: [123] },
      { method: "tickets.update", args: [123, { ticket: { priority: "high" } }] },
      { method: "search.query", args: ["type:ticket status:open"] },
      { method: "tickets.update", args: [123, { ticket: { comment: { body: "We can help.", public: true } } }] },
      { method: "tickets.update", args: [123, { ticket: { comment: { body: "Agent-only note.", public: false } } }] },
      { method: "attachments.upload", args: ["readable-stream", { filename: "trace.txt", binary: true, token: "upload-token" }] },
      { method: "users.show", args: [456] },
      { method: "organizations.show", args: [789] },
      { method: "webhooks.list", args: [] },
      { method: "users.me", args: [] },
    ]));
  });

  it("runs Cognidesk operations through the actual node-zendesk SDK transport", async () => {
    const transport = createZendeskSdkTransport();
    const integration = createZendeskTicketingIntegration({
      instanceUrl: "https://example.zendesk.com",
      email: "agent@example.com",
      apiToken: "api-token",
      fetch: transport.fetch,
    });

    expect(integration.getRawClient()).toBe(integration.client.rawClient);
    expect(typeof integration.client.rawClient.tickets.create).toBe("function");

    await expect(integration.run("ticket.create", { subject: "Need help" })).resolves.toMatchObject({
      id: 123,
      subject: "Need help",
    });
    await expect(integration.run("ticket.read", { ticketId: 123 })).resolves.toMatchObject({ id: 123 });
    await expect(integration.run("ticket.update", {
      ticketId: 123,
      patch: { priority: "high" },
    })).resolves.toMatchObject({ id: 123, priority: "high" });
    await expect(integration.run("ticket.search", { query: { type: "ticket", status: "open" } }))
      .resolves.toEqual([{ id: 123 }]);
    await expect(integration.run("ticket.comment.create", {
      ticketId: 123,
      comment: { body: "Visible reply" },
    })).resolves.toMatchObject({ comment: { body: "Visible reply", public: true } });
    await expect(integration.run("ticket.internalNote.create", {
      ticketId: 123,
      note: { body: "Agent note" },
    })).resolves.toMatchObject({ comment: { body: "Agent note", public: false } });
    await expect(integration.run("ticket.attachments.add", {
      filename: "trace.txt",
      data: "hello",
      token: "upload-token",
    })).resolves.toMatchObject({ token: "upload-token" });
    await expect(integration.run("customer.read", { userId: 456 })).resolves.toMatchObject({ id: 456 });
    await expect(integration.run("zendesk.organization.read", { organizationId: 789 })).resolves.toMatchObject({ id: 789 });
    await expect(integration.run("zendesk.webhook.list", undefined)).resolves.toEqual([{ id: "webhook_1" }]);
    await expect(integration.run("zendesk.readiness", undefined)).resolves.toMatchObject({
      id: 1,
      email: "agent@example.com",
    });

    expect(transport.calls).toEqual(expect.arrayContaining([
      expect.objectContaining({
        method: "POST",
        url: "https://example.zendesk.com/api/v2/tickets.json",
        body: "{\"ticket\":{\"subject\":\"Need help\"}}",
      }),
      expect.objectContaining({
        method: "GET",
        url: "https://example.zendesk.com/api/v2/tickets/123.json",
      }),
      expect.objectContaining({
        method: "PUT",
        url: "https://example.zendesk.com/api/v2/tickets/123.json",
        body: "{\"ticket\":{\"priority\":\"high\"}}",
      }),
      expect.objectContaining({
        method: "GET",
        url: "https://example.zendesk.com/api/v2/search.json?query=type%3Aticket+status%3Aopen",
      }),
      expect.objectContaining({
        method: "PUT",
        url: "https://example.zendesk.com/api/v2/tickets/123.json",
        body: "{\"ticket\":{\"comment\":{\"body\":\"Visible reply\",\"public\":true}}}",
      }),
      expect.objectContaining({
        method: "PUT",
        url: "https://example.zendesk.com/api/v2/tickets/123.json",
        body: "{\"ticket\":{\"comment\":{\"body\":\"Agent note\",\"public\":false}}}",
      }),
      expect.objectContaining({
        method: "POST",
        url: "https://example.zendesk.com/api/v2/uploads.json?filename=trace.txt&binary=true&token=upload-token",
        body: "readable-stream",
      }),
      expect.objectContaining({
        method: "GET",
        url: "https://example.zendesk.com/api/v2/users/456.json",
      }),
      expect.objectContaining({
        method: "GET",
        url: "https://example.zendesk.com/api/v2/organizations/789.json",
      }),
      expect.objectContaining({
        method: "GET",
        url: "https://example.zendesk.com/api/v2/webhooks",
      }),
      expect.objectContaining({
        method: "GET",
        url: "https://example.zendesk.com/api/v2/users/me.json",
      }),
    ]));
  });

  it("rejects non-positive Zendesk ids before SDK calls", async () => {
    const calls: Array<{ method: string; args: unknown[] }> = [];
    const integration = createZendeskTicketingIntegration({
      instanceUrl: "https://example.zendesk.com",
      rawClient: fakeZendeskRawClient(calls),
    });

    await expect(integration.run("ticket.read", { ticketId: 0 })).rejects.toThrow("Zendesk id must be a safe integer");
    await expect(integration.run("customer.read", { userId: -1 })).rejects.toThrow("Zendesk id must be a safe integer");
    expect(calls).toEqual([]);
  });

  it("keeps a rawRequest escape hatch on the node-zendesk raw client", async () => {
    const rawRequestCalls: Array<{ method: string; args: unknown[] }> = [];
    const client = createZendeskTicketingClient({
      instanceUrl: "https://example.zendesk.com",
      rawClient: fakeZendeskRawClient(rawRequestCalls),
    });

    await expect(client.rawRequest("/tickets/123.json", {
      method: "GET",
    })).resolves.toMatchObject({ raw: true });

    expect(rawRequestCalls).toContainEqual({
      method: "tickets._rawRequest",
      args: ["GET", "https://example.zendesk.com/api/v2/tickets/123.json", undefined],
    });
  });
});

function fakeZendeskRawClient(calls: Array<{ method: string; args: unknown[] }> = []): ZendeskTicketingRawClient {
  const record = (method: string, args: unknown[], result: unknown) => {
    calls.push({ method, args });
    return Promise.resolve({ response: {}, result });
  };

  return {
    tickets: {
      create: (...args: unknown[]) => record("tickets.create", args, { id: 123, ...ticketPayload(args[0]) }),
      show: (...args: unknown[]) => record("tickets.show", args, { id: args[0] }),
      update: (...args: unknown[]) => record("tickets.update", args, { id: args[0], ...ticketPayload(args[1]) }),
      _rawRequest: (...args: unknown[]) => record("tickets._rawRequest", args, { raw: true }),
    },
    search: {
      query: (...args: unknown[]) => record("search.query", args, { results: [{ id: 123 }] }),
    },
    attachments: {
      upload: (...args: unknown[]) => record("attachments.upload", [
        isReadableStreamLike(args[0]) ? "readable-stream" : args[0],
        args[1],
      ], { upload: { token: "upload-token" } }),
    },
    users: {
      show: (...args: unknown[]) => record("users.show", args, { id: args[0] }),
      me: (...args: unknown[]) => record("users.me", args, { id: 1, email: "agent@example.com" }),
    },
    organizations: {
      show: (...args: unknown[]) => record("organizations.show", args, { id: args[0] }),
    },
    webhooks: {
      list: (...args: unknown[]) => record("webhooks.list", args, [{ id: "webhook_1" }]),
    },
  };
}

function isReadableStreamLike(value: unknown) {
  return typeof value === "object" && value !== null && typeof (value as { pipe?: unknown }).pipe === "function";
}

interface ZendeskSdkTransportCall {
  method: string;
  url: string;
  body: unknown;
}

function createZendeskSdkTransport() {
  const calls: ZendeskSdkTransportCall[] = [];
  const fetch = (async (input: RequestInfo | URL, init?: RequestInit) => {
    const call = {
      method: String((init as { method?: unknown } | undefined)?.method ?? "GET"),
      url: String(input),
      body: transportBody((init as { body?: unknown } | undefined)?.body),
    };
    calls.push(call);
    return new Response(JSON.stringify(zendeskSdkResponse(call)), {
      status: 200,
      headers: { "content-type": "application/json" },
    });
  }) as typeof globalThis.fetch;

  return { calls, fetch };
}

function zendeskSdkResponse(call: ZendeskSdkTransportCall): object {
  const url = new URL(call.url);
  const ticket = ticketPayloadFromTransportBody(call.body);

  if (url.pathname.endsWith("/search.json")) return { results: [{ id: 123 }] };
  if (url.pathname.endsWith("/uploads.json")) return { upload: { token: "upload-token" } };
  if (url.pathname.endsWith("/users/me.json")) return { user: { id: 1, email: "agent@example.com" } };
  if (url.pathname.endsWith("/users/456.json")) return { user: { id: 456 } };
  if (url.pathname.endsWith("/organizations/789.json")) return { organization: { id: 789 } };
  if (url.pathname.endsWith("/webhooks")) return { webhooks: [{ id: "webhook_1" }] };
  if (url.pathname.endsWith("/tickets/123.json")) return { ticket: { id: 123, ...ticket } };
  if (url.pathname.endsWith("/tickets.json")) return { ticket: { id: 123, ...ticket } };
  return {};
}

function ticketPayloadFromTransportBody(body: unknown): object {
  if (typeof body !== "string") return {};
  try {
    return ticketPayload(JSON.parse(body) as unknown);
  } catch {
    return {};
  }
}

function transportBody(body: unknown) {
  if (body === undefined || body === null) return undefined;
  if (typeof body === "string") return body;
  if (isReadableStreamLike(body)) return "readable-stream";
  return body;
}

function ticketPayload(input: unknown): object {
  if (typeof input !== "object" || input === null) return {};
  const ticket = (input as { ticket?: unknown }).ticket;
  return typeof ticket === "object" && ticket !== null
    ? ticket
    : input;
}
