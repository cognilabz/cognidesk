import { describe, expect, it } from "vitest";
import { createIntercomTicketingClient } from "../src/index.js";

describe("@cognidesk/integration-ticketing-intercom", () => {
  it("binds declared operations to injectable official-client shaped handlers", async () => {
    const client = createIntercomTicketingClient({
      rawClient: {
        tickets: {
          retrieve: async (id: string) => ({ id }),
          create: async (input: unknown) => ({ created: input }),
          update: async (id: string, input: unknown) => ({ id, input }),
          search: async (input: unknown) => ({ searched: input }),
        },
        conversations: {
          reply: async (input: unknown) => ({ reply: input }),
          retrieve: async (id: string) => ({ conversation: id }),
        },
      },
    });

    expect(client.integration.bindingReport.missingHandlerAliases).toEqual([]);
    await expect(client.integration.run("ticket.create", { ticket_type_id: "bug" })).resolves.toMatchObject({
      created: { ticket_type_id: "bug" },
    });
    await expect(client.integration.run("ticket.internalNote.create", { conversationId: "c1", body: "private" })).resolves.toMatchObject({
      reply: { id: "c1", message_type: "note", body: "private" },
    });
  });
});
