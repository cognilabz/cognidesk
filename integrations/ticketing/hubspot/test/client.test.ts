import { describe, expect, it } from "vitest";
import { createHubSpotTicketingClient } from "../src/index.js";

describe("@cognidesk/ticketing-hubspot", () => {
  it("binds declared operations to injectable official-client shaped handlers", async () => {
    const calls: unknown[] = [];
    const client = createHubSpotTicketingClient({
      rawClient: {
        crm: {
          tickets: {
            basicApi: {
              getById: async (...args: unknown[]) => ({ args }),
              create: async (input: unknown) => ({ created: input }),
              update: async (...args: unknown[]) => ({ updated: args }),
            },
            searchApi: {
              doSearch: async (input: unknown) => ({ searched: input }),
            },
          },
          objects: {
            notes: {
              basicApi: {
                create: async (input: unknown) => {
                  calls.push(input);
                  return { note: input };
                },
              },
            },
          },
          associations: {
            v4: {
              basicApi: {
                create: async (...args: unknown[]) => ({ associated: args }),
              },
            },
          },
        },
      },
    });

    expect(client.integration.bindingReport.missingHandlerAliases).toEqual([]);
    await expect(client.integration.run("ticket.create", { subject: "A" })).resolves.toMatchObject({
      created: { properties: { subject: "A" } },
    });
    await client.integration.run("ticket.comment.create", { body: "hello" });
    expect(calls).toHaveLength(1);
  });
});
