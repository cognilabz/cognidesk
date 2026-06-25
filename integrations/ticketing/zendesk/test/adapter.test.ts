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
    expect(manifestOnly.metadata).not.toHaveProperty("sdkDecision");
  });

  it("binds declared operations to injectable rawClient-backed handlers", () => {
    const integration = createZendeskTicketingIntegration({
      instanceUrl: "https://example.zendesk.com",
      rawClient: fakeZendeskRawClient(),
    });

    expect(integration.manifest.id).toBe(zendeskTicketingProviderManifest.id);
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
    await expect(integration.run("ticket.search", { query: "type:ticket status:open" })).resolves.toMatchObject({
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
      { method: "tickets.create", args: [{ subject: "Need help" }] },
      { method: "tickets.show", args: [123] },
      { method: "tickets.update", args: [123, { priority: "high" }] },
      { method: "search.query", args: ["type:ticket status:open"] },
      { method: "attachments.upload", args: ["readable-stream", { filename: "trace.txt", binary: true, token: "upload-token" }] },
      { method: "users.show", args: [456] },
      { method: "organizations.show", args: [789] },
      { method: "webhooks.list", args: [] },
      { method: "users.me", args: [] },
    ]));
  });

  it("keeps a rawRequest escape hatch on the node-zendesk raw client", async () => {
    const calls: Array<{ method: string; args: unknown[] }> = [];
    const client = createZendeskTicketingClient({
      instanceUrl: "https://example.zendesk.com",
      rawClient: fakeZendeskRawClient(calls),
    });

    await expect(client.rawRequest("/tickets/123.json", {
      method: "GET",
    })).resolves.toMatchObject({ raw: true });

    expect(calls).toContainEqual({
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
      create: (...args: unknown[]) => record("tickets.create", args, { id: 123, ...args[0] as object }),
      show: (...args: unknown[]) => record("tickets.show", args, { id: args[0] }),
      update: (...args: unknown[]) => record("tickets.update", args, { id: args[0], ...args[1] as object }),
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
