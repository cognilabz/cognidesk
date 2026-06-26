import { describe, expect, it, vi } from "vitest";
import { createIntercomTicketingClient, type IntercomTicketingRawClient } from "../src/index.js";

describe("@cognidesk/integration-ticketing-intercom", () => {
  it("routes Cognidesk operations through actual intercom-client ticketing SDK methods", async () => {
    const calls: Array<{ method: string; args: unknown[] }> = [];
    const rawClient = fakeIntercomRawClient(calls);
    const client = createIntercomTicketingClient({
      rawClient,
    });

    expect(client.rawClient).toBe(rawClient);
    expect(client.getRawClient()).toBe(rawClient);
    expect(client.integration.bindingReport.missingHandlerAliases).toEqual([]);
    await expect(client.integration.run("ticket.read", { ticketId: "ticket-1" })).resolves.toMatchObject({
      id: "ticket-1",
    });
    await expect(client.integration.run("ticket.create", { ticket_type_id: "bug" })).resolves.toMatchObject({
      created: { ticket_type_id: "bug" },
    });
    await expect(client.integration.run("ticket.update", {
      ticketId: "ticket-1",
      patch: { ticket_id: "ticket-attacker", open: false },
    })).resolves.toMatchObject({
      updated: { ticket_id: "ticket-1", open: false },
    });
    await expect(client.integration.run("ticket.search", {
      query: { field: "state", operator: "=", value: "submitted" },
    })).resolves.toMatchObject({
      searched: { query: { field: "state", operator: "=", value: "submitted" } },
    });
    await expect(client.integration.run("ticket.comment.create", {
      ticketId: "ticket-1",
      adminId: "admin-1",
      bodyObject: { body: "Public reply", message_type: "note" },
    })).resolves.toMatchObject({
      reply: {
        ticket_id: "ticket-1",
        body: { message_type: "comment", type: "admin", admin_id: "admin-1", body: "Public reply" },
      },
    });
    await expect(client.integration.run("ticket.internalNote.create", {
      ticketId: "ticket-1",
      adminId: "admin-1",
      note: "Private note",
    })).resolves.toMatchObject({
      reply: {
        ticket_id: "ticket-1",
        body: { message_type: "note", type: "admin", admin_id: "admin-1", body: "Private note" },
      },
    });
    await expect(client.integration.run("intercom.conversation.read", {
      conversationId: "conversation-1",
      display_as: "plaintext",
    })).resolves.toMatchObject({
      conversation: { conversation_id: "conversation-1", display_as: "plaintext" },
    });

    expect(calls).toEqual([
      { method: "tickets.get", args: [{ ticket_id: "ticket-1" }] },
      { method: "tickets.create", args: [{ ticket_type_id: "bug" }] },
      { method: "tickets.update", args: [{ ticket_id: "ticket-1", open: false }] },
      { method: "tickets.search", args: [{ query: { field: "state", operator: "=", value: "submitted" } }] },
      {
        method: "tickets.reply",
        args: [{
          ticket_id: "ticket-1",
          body: { message_type: "comment", type: "admin", body: "Public reply", admin_id: "admin-1" },
        }],
      },
      {
        method: "tickets.reply",
        args: [{
          ticket_id: "ticket-1",
          body: { message_type: "note", type: "admin", body: "Private note", admin_id: "admin-1" },
        }],
      },
      { method: "conversations.find", args: [{ conversation_id: "conversation-1", display_as: "plaintext" }] },
    ]);
  });

  it("constructs the official Intercom SDK raw client at runtime", async () => {
    const calls: Array<{ method: string; args: unknown[] }> = [];
    const rawClient = fakeIntercomRawClient(calls);
    const IntercomClientMock = vi.fn(function (_options: unknown) {
      return rawClient;
    });

    vi.resetModules();
    vi.doMock("intercom-client", () => ({ IntercomClient: IntercomClientMock }));

    try {
      const { createIntercomTicketingClient: createClient } = await import("../src/index.js");
      const client = createClient({
        accessToken: "token-123",
        sdkOptions: {
          baseUrl: "https://api.example.test",
          maxRetries: 0,
        },
      });

      expect(IntercomClientMock).toHaveBeenCalledWith({
        baseUrl: "https://api.example.test",
        maxRetries: 0,
        token: "token-123",
      });
      expect(client.rawClient).toBe(rawClient);
      expect(client.getRawClient()).toBe(rawClient);
      await expect(client.integration.run("ticket.read", "ticket-1")).resolves.toMatchObject({ id: "ticket-1" });
      expect(calls).toContainEqual({ method: "tickets.get", args: [{ ticket_id: "ticket-1" }] });
    } finally {
      vi.doUnmock("intercom-client");
    }
  });
});

function fakeIntercomRawClient(calls: Array<{ method: string; args: unknown[] }> = []): IntercomTicketingRawClient {
  const record = (method: string, args: unknown[], result: unknown) => {
    calls.push({ method, args });
    return Promise.resolve(result);
  };

  return {
    tickets: {
      create: (...args: unknown[]) => record("tickets.create", args, { created: args[0] }),
      get: (...args: unknown[]) => record("tickets.get", args, { id: (args[0] as { ticket_id: string }).ticket_id }),
      update: (...args: unknown[]) => record("tickets.update", args, { updated: args[0] }),
      search: (...args: unknown[]) => record("tickets.search", args, { searched: args[0] }),
      reply: (...args: unknown[]) => record("tickets.reply", args, { reply: args[0] }),
    },
    conversations: {
      find: (...args: unknown[]) => record("conversations.find", args, { conversation: args[0] }),
    },
  };
}
