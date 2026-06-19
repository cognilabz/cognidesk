import { describe, expect, it, vi } from "vitest";
import { createHubSpotTicketingClient } from "../../../src/ticketing/hubspot/index.js";

describe("@cognidesk/integrations HubSpot generated API", () => {
  it("exposes generated functions for the current HubSpot public spec index", async () => {
    const fetchMock = vi.fn(async (url: string, init: RequestInit) => {
      if (url.endsWith("/crm/objects/2026-03/tickets") && init.method === "POST") {
        return new Response(JSON.stringify({ id: "ticket-1" }), { status: 201 });
      }
      if (url.endsWith("/crm/objects/2026-03/tickets/ticket-1?properties=subject") && init.method === "GET") {
        return new Response(JSON.stringify({ id: "ticket-1", properties: { subject: "Cannot sign in" } }), { status: 200 });
      }
      if (url.endsWith("/conversations/custom-channels/2026-03/channel-1/messages") && init.method === "POST") {
        return new Response(JSON.stringify({ id: "message-1" }), { status: 201 });
      }
      if (url.endsWith("/files/2026-03/files/file-1") && init.method === "GET") {
        return new Response(JSON.stringify({ id: "file-1" }), { status: 200 });
      }
      if (url.endsWith("/webhooks-journal/journal/2026-03/batch/earliest/5") && init.method === "GET") {
        return new Response(JSON.stringify({ events: [] }), { status: 200 });
      }
      if (url.endsWith("/crm/owners/2026-03") && init.method === "GET") {
        return new Response(JSON.stringify({ results: [{ id: "owner-1" }] }), { status: 200 });
      }
      if (url.endsWith("/crm/pipelines/2026-03/tickets") && init.method === "POST") {
        return new Response(JSON.stringify({ id: "pipeline-1" }), { status: 201 });
      }
      if (url.endsWith("/crm/objects/2026-03/notes/search") && init.method === "POST") {
        return new Response(JSON.stringify({ results: [] }), { status: 200 });
      }
      return new Response(JSON.stringify({ message: `unexpected ${init.method} ${url}` }), { status: 500 });
    });
    const client = createHubSpotTicketingClient({
      privateAppToken: "hubspot-token",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await expect(client.fullApi.TicketsPostCrmObjects202603TicketsCreate({
      // @ts-expect-error Minimal fixture intentionally exercises request routing; official schema requires associations.
      body: { properties: { subject: "Cannot sign in" } },
    })).resolves.toMatchObject({ id: "ticket-1" });
    await expect(client.fullApi.TicketsGetCrmObjects202603TicketsTicketIdGetById({
      pathParams: { ticketId: "ticket-1" },
      query: { properties: ["subject"] },
    })).resolves.toMatchObject({ id: "ticket-1" });
    await expect(client.fullApi.CustomChannelsPostConversationsCustomChannels202603ChannelIdMessages({
      pathParams: { channelId: "channel-1" },
      // @ts-expect-error Minimal fixture intentionally exercises request routing; official schema requires full custom-channel message fields.
      body: { text: "Hello" },
    })).resolves.toMatchObject({ id: "message-1" });
    await expect(client.fullApi.FilesGetFiles202603FilesFileIdGetById({
      pathParams: { fileId: "file-1" },
    })).resolves.toMatchObject({ id: "file-1" });
    await expect(client.requestOperation("webhooks-journal:webhooks-journal:2026-03:get-/webhooks-journal/journal/2026-03/batch/earliest/{count}", {
      pathParams: { count: 5 },
    })).resolves.toMatchObject({ events: [] });
    await expect(client.fullApi.CrmOwnersGetCrmOwners202603CrmOwnersV3())
      .resolves.toMatchObject({ results: [{ id: "owner-1" }] });
    await expect(client.fullApi.PipelinesPostCrmPipelines202603ObjectTypeCreate({
      pathParams: { objectType: "tickets" },
      // @ts-expect-error Minimal fixture intentionally exercises request routing; official schema requires pipeline stages.
      body: { label: "Support" },
    })).resolves.toMatchObject({ id: "pipeline-1" });
    await expect(client.fullApi.NotesPostCrmObjects202603NotesSearchDoSearch({
      // @ts-expect-error Minimal fixture intentionally exercises request routing; official schema requires search filters/properties/sorts.
      body: { limit: 10 },
    })).resolves.toMatchObject({ results: [] });
    // @ts-expect-error Missing path params intentionally exercises runtime validation.
    await expect(client.fullApi.TicketsGetCrmObjects202603TicketsTicketIdGetById())
      .rejects.toThrow("Missing HubSpot path parameter 'ticketId'");

    expect(fetchMock).toHaveBeenNthCalledWith(
      1,
      "https://api.hubapi.com/crm/objects/2026-03/tickets",
      expect.objectContaining({
        method: "POST",
        headers: expect.objectContaining({
          authorization: "Bearer hubspot-token",
          "content-type": "application/json",
        }),
      }),
    );
    const createRequest = (fetchMock.mock.calls[0] as unknown[])[1] as { body: string };
    expect(JSON.parse(createRequest.body)).toEqual({ properties: { subject: "Cannot sign in" } });
  });
});
