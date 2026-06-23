import { describe, expect, it } from "vitest";
import { createSalesforceTicketingClient } from "../src/index.js";

describe("@cognidesk/integration-ticketing-salesforce", () => {
  it("binds declared operations to injectable jsforce-shaped handlers", async () => {
    const created: unknown[] = [];
    const client = createSalesforceTicketingClient({
      rawClient: {
        sobject(name: string) {
          return {
            retrieve: async (id: string) => ({ name, id }),
            create: async (input: unknown) => {
              created.push({ name, input });
              return { name, input };
            },
            update: async (input: unknown) => ({ name, input }),
          };
        },
        query: async (soql: string) => ({ soql }),
      },
    });

    expect(client.integration.bindingReport.missingHandlerAliases).toEqual([]);
    await expect(client.integration.run("ticket.create", { subject: "A" })).resolves.toMatchObject({
      name: "Case",
      input: { Subject: "A" },
    });
    await client.integration.run("ticket.comment.create", { caseId: "500", body: "public" });
    expect(created).toHaveLength(2);
  });
});
