import { afterEach, describe, expect, it, vi } from "vitest";
import type { HubSpotTicketingRawClient } from "../src/index.js";

function createSdkShapedRawClient() {
  const calls: unknown[] = [];
  const rawClient = {
    crm: {
      tickets: {
        basicApi: {
          getById: vi.fn(async (...args: unknown[]) => ({ args })),
          create: vi.fn(async (input: unknown) => ({ created: input })),
          update: vi.fn(async (...args: unknown[]) => ({ updated: args })),
        },
        searchApi: {
          doSearch: vi.fn(async (input: unknown) => ({ searched: input })),
        },
      },
      objects: {
        notes: {
          basicApi: {
            create: vi.fn(async (input: unknown) => {
              calls.push(input);
              return { note: input };
            }),
          },
        },
      },
      associations: {
        v4: {
          basicApi: {
            create: vi.fn(async (...args: unknown[]) => ({ associated: args })),
          },
        },
      },
    },
  };

  return { calls, rawClient: rawClient as unknown as HubSpotTicketingRawClient };
}

function resolveProviderOperation(rawClient: unknown, providerOperation: string): unknown {
  return providerOperation.split(".").reduce<unknown>((value, segment) => {
    if (value && typeof value === "object" && segment in value) {
      return (value as Record<string, unknown>)[segment];
    }

    return undefined;
  }, rawClient);
}

afterEach(() => {
  vi.doUnmock("@hubspot/api-client");
  vi.resetModules();
});

describe("@cognidesk/integration-ticketing-hubspot", () => {
  it("binds declared operations to injectable official-client shaped handlers", async () => {
    const { createHubSpotTicketingClient } = await import("../src/index.js");
    const { calls, rawClient } = createSdkShapedRawClient();

    const client = createHubSpotTicketingClient({
      rawClient,
    });

    expect(client.rawClient).toBe(rawClient);
    expect(client.getRawClient()).toBe(rawClient);
    expect(client.integration.bindingReport.missingHandlerAliases).toEqual([]);
    await expect(client.integration.run("ticket.create", { subject: "A" })).resolves.toMatchObject({
      created: { properties: { subject: "A" } },
    });
    await client.integration.run("ticket.comment.create", { body: "hello" });
    expect(calls).toHaveLength(1);
  });

  it("constructs the official HubSpot SDK client and dispatches runtime operations to SDK methods", async () => {
    const constructedConfigs: unknown[] = [];
    const getById = vi.fn(async (...args: unknown[]) => ({ sdk: "getById", args }));
    const ticketCreate = vi.fn(async (input: unknown) => ({ sdk: "ticketCreate", input }));
    const ticketUpdate = vi.fn(async (...args: unknown[]) => ({ sdk: "ticketUpdate", args }));
    const ticketSearch = vi.fn(async (input: unknown) => ({ sdk: "ticketSearch", input }));
    const noteCreate = vi.fn(async (input: unknown) => ({ sdk: "noteCreate", input }));
    const associationCreate = vi.fn(async (...args: unknown[]) => ({ sdk: "associationCreate", args }));

    vi.doMock("@hubspot/api-client", () => ({
      Client: class MockHubSpotClient {
        crm = {
          tickets: {
            basicApi: {
              getById,
              create: ticketCreate,
              update: ticketUpdate,
            },
            searchApi: {
              doSearch: ticketSearch,
            },
          },
          objects: {
            notes: {
              basicApi: {
                create: noteCreate,
              },
            },
          },
          associations: {
            v4: {
              basicApi: {
                create: associationCreate,
              },
            },
          },
        };

        constructor(config?: unknown) {
          constructedConfigs.push(config);
        }
      },
    }));

    const { createHubSpotTicketingClient, hubSpotTicketingProviderOperations } = await import("../src/index.js");
    const client = createHubSpotTicketingClient({ accessToken: "pat-test-token" });

    expect(constructedConfigs).toEqual([{ accessToken: "pat-test-token" }]);
    expect(client.rawClient).toBe(client.getRawClient());
    for (const operation of hubSpotTicketingProviderOperations) {
      if (typeof operation.providerOperation !== "string") {
        throw new Error(`${operation.alias} does not declare a provider SDK operation`);
      }

      expect(resolveProviderOperation(client.rawClient, operation.providerOperation)).toBeTypeOf("function");
    }

    await expect(
      client.integration.run("ticket.read", {
        ticketId: "101",
        properties: ["subject"],
        propertiesWithHistory: ["content"],
        associations: ["contacts"],
        archived: false,
        idProperty: "hs_object_id",
      }),
    ).resolves.toMatchObject({ sdk: "getById" });
    expect(getById).toHaveBeenCalledWith("101", ["subject"], ["content"], ["contacts"], false, "hs_object_id");

    await client.integration.run("ticket.create", { properties: { subject: "SDK ticket" } });
    expect(ticketCreate).toHaveBeenCalledWith({ properties: { subject: "SDK ticket" } });

    await client.integration.run("ticket.update", {
      ticketId: "101",
      properties: { subject: "Updated SDK ticket" },
      idProperty: "hs_object_id",
    });
    expect(ticketUpdate).toHaveBeenCalledWith("101", { properties: { subject: "Updated SDK ticket" } }, "hs_object_id");

    const searchRequest = { filterGroups: [], limit: 10 };
    await client.integration.run("ticket.search", searchRequest);
    expect(ticketSearch).toHaveBeenCalledWith(searchRequest);

    await client.integration.run("ticket.comment.create", {
      body: "Visible update",
      timestamp: "2026-06-25T12:00:00.000Z",
    });
    expect(noteCreate).toHaveBeenNthCalledWith(1, {
      properties: {
        hs_note_body: "Visible update",
        hs_timestamp: "2026-06-25T12:00:00.000Z",
        hs_note_visibility: "PUBLIC",
      },
    });

    await client.integration.run("ticket.internalNote.create", {
      text: "Private context",
      timestamp: "2026-06-25T12:01:00.000Z",
    });
    expect(noteCreate).toHaveBeenNthCalledWith(2, {
      properties: {
        hs_note_body: "Private context",
        hs_timestamp: "2026-06-25T12:01:00.000Z",
      },
    });

    const associationSpec = [{ associationCategory: "HUBSPOT_DEFINED", associationTypeId: 16 }];
    await client.integration.run("hubspot.association.create", {
      ticketId: "101",
      toObjectType: "contacts",
      toObjectId: "202",
      associationSpec,
    });
    expect(associationCreate).toHaveBeenCalledWith("tickets", "101", "contacts", "202", associationSpec);
  });
});
