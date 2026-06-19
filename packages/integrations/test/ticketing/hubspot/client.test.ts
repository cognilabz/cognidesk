import { describe, expect, it, vi } from "vitest";
import { createHubSpotTicketingClient } from "../../../src/ticketing/hubspot/index.js";

describe("@cognidesk/integrations HubSpot client", () => {
  it("creates HubSpot tickets through the CRM v3 objects API", async () => {
    const fetchMock = vi.fn(async () =>
      new Response(JSON.stringify({
        id: "123",
        properties: { subject: "Cannot sign in" },
      }), { status: 201 })
    );
    const client = createHubSpotTicketingClient({
      privateAppToken: "hubspot-token",
      fetch: fetchMock as unknown as typeof fetch,
    });

    const ticket = await client.createTicket({
      subject: "Cannot sign in",
      pipeline: "0",
      pipelineStage: "1",
      priority: "HIGH",
      ownerId: "456",
      sourceConversationId: "conversation_1",
      properties: { hs_ticket_category: "TECHNICAL_ISSUE" },
      associations: [{
        to: { id: "201" },
        types: [{ associationCategory: "HUBSPOT_DEFINED", associationTypeId: 16 }],
      }],
    });

    expect(ticket.id).toBe("123");
    expect(fetchMock).toHaveBeenCalledWith(
      "https://api.hubapi.com/crm/v3/objects/tickets",
      expect.objectContaining({
        method: "POST",
        headers: expect.objectContaining({
          authorization: "Bearer hubspot-token",
          "content-type": "application/json",
        }),
      }),
    );
    const request = (fetchMock.mock.calls[0] as unknown[])[1] as { body: string };
    expect(JSON.parse(request.body)).toEqual({
      properties: {
        hs_ticket_category: "TECHNICAL_ISSUE",
        subject: "Cannot sign in",
        hs_pipeline: "0",
        hs_pipeline_stage: "1",
        hs_ticket_priority: "HIGH",
        hubspot_owner_id: "456",
        cognidesk_conversation_id: "conversation_1",
      },
      associations: [{
        to: { id: "201" },
        types: [{ associationCategory: "HUBSPOT_DEFINED", associationTypeId: 16 }],
      }],
    });
  });

  it("reads, updates, searches, associates, and inspects HubSpot tickets", async () => {
    const fetchMock = vi.fn(async (url: string, init: RequestInit) => {
      if (url.includes("/tickets/123?") && init.method === "GET") {
        return new Response(JSON.stringify({ id: "123", properties: { subject: "Cannot sign in" } }), { status: 200 });
      }
      if (url.endsWith("/tickets/123?idProperty=external_id") && init.method === "PATCH") {
        return new Response(JSON.stringify({ id: "123", properties: { hs_pipeline_stage: "2" } }), { status: 200 });
      }
      if (url.endsWith("/tickets/search")) {
        return new Response(JSON.stringify({
          total: 1,
          results: [{ id: "123", properties: { subject: "Cannot sign in" } }],
        }), { status: 200 });
      }
      if (url.includes("/tickets/123/associations/contacts/201/16")) {
        return new Response(JSON.stringify({ fromObjectId: "123", toObjectId: "201" }), { status: 200 });
      }
      if (url.endsWith("/crm/v3/properties/tickets")) {
        return new Response(JSON.stringify({ results: [{ name: "subject", label: "Ticket name" }] }), { status: 200 });
      }
      if (url.endsWith("/crm/v3/owners")) {
        return new Response(JSON.stringify({ results: [{ id: "456", email: "agent@example.test" }] }), { status: 200 });
      }
      if (url.endsWith("/crm/v3/pipelines/tickets")) {
        return new Response(JSON.stringify({ results: [{ id: "0", label: "Support pipeline" }] }), { status: 200 });
      }
      if (url.endsWith("/crm/v3/pipelines/tickets/0")) {
        return new Response(JSON.stringify({ id: "0", label: "Support pipeline", stages: [] }), { status: 200 });
      }
      return new Response(JSON.stringify({
        results: [{ typeId: 228, label: null, category: "HUBSPOT_DEFINED" }],
      }), { status: 200 });
    });
    const client = createHubSpotTicketingClient({
      privateAppToken: "hubspot-token",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await expect(client.getTicket("123", {
      properties: ["subject", "hs_pipeline_stage"],
      associations: ["contacts", "companies"],
      archived: false,
    })).resolves.toMatchObject({ id: "123" });
    await expect(client.updateTicket("123", {
      idProperty: "external_id",
      properties: { hs_pipeline_stage: "2" },
    })).resolves.toMatchObject({ properties: { hs_pipeline_stage: "2" } });
    const search = await client.searchTickets({
      filterGroups: [{
        filters: [{ propertyName: "hs_pipeline_stage", operator: "EQ", value: "1" }],
      }],
      properties: ["subject"],
      limit: 5,
    });
    await expect(client.associateTicket({
      ticketId: "123",
      toObjectType: "contacts",
      toObjectId: "201",
      associationTypeId: 16,
    })).resolves.toMatchObject({ fromObjectId: "123" });
    await expect(client.getAssociationLabels("note", "ticket")).resolves.toEqual([
      { typeId: 228, label: null, category: "HUBSPOT_DEFINED" },
    ]);
    await expect(client.listProperties("tickets")).resolves.toEqual([
      { name: "subject", label: "Ticket name" },
    ]);
    await expect(client.listOwners()).resolves.toEqual([
      { id: "456", email: "agent@example.test" },
    ]);
    await expect(client.listTicketPipelines()).resolves.toEqual([
      { id: "0", label: "Support pipeline" },
    ]);
    await expect(client.getTicketPipeline("0")).resolves.toMatchObject({ id: "0" });

    expect(search.results).toHaveLength(1);
    expect((fetchMock.mock.calls[0] as unknown as [string, RequestInit])[0]).toBe(
      "https://api.hubapi.com/crm/v3/objects/tickets/123?properties=subject%2Chs_pipeline_stage&associations=contacts%2Ccompanies&archived=false",
    );
    const updateRequest = (fetchMock.mock.calls[1] as unknown[])[1] as { body: string };
    expect(JSON.parse(updateRequest.body)).toEqual({ properties: { hs_pipeline_stage: "2" } });
    const searchRequest = (fetchMock.mock.calls[2] as unknown[])[1] as { body: string };
    expect(JSON.parse(searchRequest.body)).toEqual({
      filterGroups: [{
        filters: [{ propertyName: "hs_pipeline_stage", operator: "EQ", value: "1" }],
      }],
      properties: ["subject"],
      limit: 5,
    });
  });

  it("creates contacts, companies, and configurable handoff notes", async () => {
    const fetchMock = vi.fn(async (url: string) => {
      if (url.endsWith("/contacts")) return new Response(JSON.stringify({ id: "201", properties: { email: "customer@example.test" } }), { status: 201 });
      if (url.endsWith("/companies")) return new Response(JSON.stringify({ id: "301", properties: { name: "Example" } }), { status: 201 });
      return new Response(JSON.stringify({ id: "401", properties: { hs_note_body: "Handoff context" } }), { status: 201 });
    });
    const client = createHubSpotTicketingClient({
      privateAppToken: "hubspot-token",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await expect(client.createContact({
      email: "customer@example.test",
      firstname: "Ada",
      properties: { cognidesk_customer_id: "customer_1" },
    })).resolves.toMatchObject({ id: "201" });
    await expect(client.createCompany({
      name: "Example",
      domain: "example.test",
    })).resolves.toMatchObject({ id: "301" });
    await expect(client.createHandoffNote({
      ticketId: "123",
      body: "Handoff context",
      timestamp: "2026-06-17T10:00:00.000Z",
      ownerId: "456",
      attachmentIds: ["10", "11"],
      associationTypeId: 228,
    })).resolves.toMatchObject({ id: "401" });

    const contactRequest = (fetchMock.mock.calls[0] as unknown[])[1] as { body: string };
    expect(JSON.parse(contactRequest.body)).toEqual({
      properties: {
        cognidesk_customer_id: "customer_1",
        email: "customer@example.test",
        firstname: "Ada",
      },
    });
    const noteRequest = (fetchMock.mock.calls[2] as unknown[])[1] as { body: string };
    expect(JSON.parse(noteRequest.body)).toEqual({
      properties: {
        hs_note_body: "Handoff context",
        hs_timestamp: "2026-06-17T10:00:00.000Z",
        hubspot_owner_id: "456",
        hs_attachment_ids: "10;11",
      },
      associations: [{
        to: { id: "123" },
        types: [{ associationCategory: "HUBSPOT_DEFINED", associationTypeId: 228 }],
      }],
    });
  });
});
