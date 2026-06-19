import { describe, expect, it, vi } from "vitest";
import { runProviderConformance } from "@cognidesk/test-harness";
import { readProviderCoverageArtifact } from "../../provider-coverage-artifacts.js";
import {
  createFreshdeskTicketingClient,
  createFreshdeskTicketingLiveChecks,
  freshdeskTicketingCredentialStatuses,
  freshdeskTicketingProviderManifest,
  parseFreshdeskWebhookRequest,
  validateFreshdeskWebhookSecret,
} from "../../../src/ticketing/freshdesk/index.js";

const freshdeskInventory = readProviderCoverageArtifact<{
  summary: {
    documentedEntries: number;
    implementedEntries: number;
    gapEntries: number;
  };
  entries: Array<{ id: string; coverage: string }>;
}>("docs/provider-coverage/freshdesk-v2-api-2026-06-18.operations.json");

describe("@cognidesk/integrations", () => {
  it("exports an official provider manifest for Freshdesk ticketing", () => {
    expect(freshdeskTicketingProviderManifest).toMatchObject({
      id: "ticketing.freshdesk",
      packageName: "@cognidesk/integrations",
      category: "ticketing",
      provider: "freshdesk",
      trustLevel: "official",
      coverage: {
        scope: "provider-api-subset",
      },
    });
    expect(freshdeskTicketingProviderManifest.credentialRequirements
      .find((requirement) => requirement.id === "freshdesk-webhook-secret")?.required).toBe(false);
    expect(freshdeskTicketingProviderManifest.coverage.notes.join(" ")).toContain("not full Freshdesk API coverage");
    expect(freshdeskTicketingProviderManifest.coverage.notes.join(" ")).toContain("240 documented entries");
    expect(freshdeskTicketingProviderManifest.coverage.evidence.map((entry) => entry.url))
      .toContain("https://developers.freshdesk.com/api/");
    expect(freshdeskTicketingProviderManifest.coverage.evidence.map((entry) => entry.url))
      .toContain("https://github.com/cognilabz/cognidesk/blob/main/docs/provider-coverage/freshdesk-v2-api-2026-06-18.operations.json");
    expect(freshdeskTicketingProviderManifest.metadata?.channelCoverage).toMatchObject({
      publicOpenApiSpec: "not-covered",
      freshdeskV2Inventory: "typed-selected",
      ticketBulkMergeForwardDeleteRestore: "provider-supported-not-typed",
      companiesFieldsFormsForumsSolutionsMailboxes: "provider-supported-not-typed",
    });
    expect(freshdeskTicketingProviderManifest.metadata?.coverageArtifacts).toMatchObject({
      freshdeskV2Inventory: {
        documentedEntries: 240,
        implementedEntries: 19,
        gapEntries: 221,
      },
    });
    expect(freshdeskTicketingProviderManifest.capabilities.map((capability) => capability.capability))
      .toEqual(expect.arrayContaining([
        "receive",
        "create-provider-object",
        "read-provider-object",
        "update-provider-object",
        "search-provider-object",
        "handoff",
        "freshdesk.webhook-shared-secret",
      ]));
    expect(freshdeskTicketingProviderManifest.capabilities.flatMap((capability) =>
      capability.providerObjects?.map((object) => object.kind) ?? []
    )).toEqual(expect.arrayContaining([
      "freshdeskTicket",
      "freshdeskContact",
      "freshdeskConversation",
      "freshdeskAgent",
      "freshdeskGroup",
    ]));
    expect(freshdeskTicketingProviderManifest.limitations.join(" ")).toContain("SDK users own human handoff timing");
  });

  it("keeps the checked Freshdesk v2 endpoint inventory aligned with manifest claims", () => {
    expect(freshdeskInventory.summary).toMatchObject({
      documentedEntries: 240,
      implementedEntries: 19,
      gapEntries: 221,
    });
    expect(freshdeskInventory.entries
      .filter((entry) => entry.coverage === "implemented")
      .map((entry) => entry.id)
    ).toEqual(expect.arrayContaining([
      "create_ticket",
      "view_a_ticket",
      "list_all_tickets",
      "filter_tickets",
      "update_ticket",
      "list_all_ticket_notes",
      "reply_ticket",
      "add_note_to_a_ticket",
      "create_contact",
      "view_contact",
      "list_all_contacts",
      "filter_contacts",
      "update_contact",
      "view_agent",
      "list_all_agents",
      "me",
      "view_group",
      "list_all_groups",
      "list_all_agents_in_a_group",
    ]));
    expect(freshdeskInventory.entries
      .filter((entry) => entry.coverage === "gap")
      .map((entry) => entry.id)
    ).toEqual(expect.arrayContaining([
      "bulk_update_tickets",
      "ticket_merge",
      "delete_an_attachment",
      "companies",
      "automations",
      "skills",
      "create_a_new_custom_object_record",
    ]));
  });

  it("creates Freshdesk tickets through the v2 Tickets API", async () => {
    const fetchMock = vi.fn(async () =>
      new Response(JSON.stringify({
        id: 123,
        subject: "Cannot check out",
        status: 2,
      }), { status: 201 })
    );
    const client = createFreshdeskTicketingClient({
      domain: "example.freshdesk.com",
      apiKey: "freshdesk-api-key",
      fetch: fetchMock as unknown as typeof fetch,
    });

    const ticket = await client.createTicket({
      subject: "Cannot check out",
      description: "The checkout button fails.",
      email: "customer@example.test",
      priority: 3,
      status: 2,
      tags: ["cognidesk"],
      customFields: { cf_order_id: "order_123" },
    });

    expect(ticket.id).toBe(123);
    expect(fetchMock).toHaveBeenCalledWith(
      "https://example.freshdesk.com/api/v2/tickets",
      expect.objectContaining({
        method: "POST",
        headers: expect.objectContaining({
          authorization: `Basic ${Buffer.from("freshdesk-api-key:X").toString("base64")}`,
          "content-type": "application/json",
        }),
      }),
    );
    const request = (fetchMock.mock.calls[0] as unknown[])[1] as { body: string };
    expect(JSON.parse(request.body)).toEqual({
      subject: "Cannot check out",
      description: "The checkout button fails.",
      email: "customer@example.test",
      priority: 3,
      status: 2,
      tags: ["cognidesk"],
      custom_fields: { cf_order_id: "order_123" },
    });
  });

  it("reads, updates, lists, and searches tickets with Freshdesk API shapes", async () => {
    const fetchMock = vi.fn(async (url: string, init: RequestInit) => {
      if (url.endsWith("/tickets/123?include=requester%2Cconversations") && init.method === "GET") {
        return new Response(JSON.stringify({ id: 123, subject: "Cannot check out" }), { status: 200 });
      }
      if (url.endsWith("/tickets/123") && init.method === "PUT") {
        return new Response(JSON.stringify({ id: 123, status: 3, responder_id: 42 }), { status: 200 });
      }
      if (url.includes("/api/v2/tickets?")) {
        return new Response(JSON.stringify([{ id: 123, subject: "Cannot check out" }]), { status: 200 });
      }
      return new Response(JSON.stringify({
        total: 1,
        results: [{ id: 123, subject: "Cannot check out" }],
      }), { status: 200 });
    });
    const client = createFreshdeskTicketingClient({
      domain: "https://example.freshdesk.com/helpdesk",
      apiKey: "freshdesk-api-key",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await expect(client.getTicket(123, { include: ["requester", "conversations"] })).resolves.toMatchObject({ id: 123 });
    await expect(client.updateTicket(123, {
      status: 3,
      responderId: 42,
      groupId: 7,
      customFields: { cf_handoff: true },
    })).resolves.toMatchObject({ status: 3 });
    await expect(client.listTickets({
      email: "customer@example.test",
      include: ["description"],
      limit: 10,
      page: 2,
    })).resolves.toHaveLength(1);
    const search = await client.searchTickets({
      query: "status:2 AND priority:3",
      page: 1,
      limit: 5,
    });

    expect(search.results).toHaveLength(1);
    const updateRequest = (fetchMock.mock.calls[1] as unknown[])[1] as { body: string };
    expect(JSON.parse(updateRequest.body)).toEqual({
      status: 3,
      responder_id: 42,
      group_id: 7,
      custom_fields: { cf_handoff: true },
    });
    const [listUrl] = fetchMock.mock.calls[2] as unknown as [string, RequestInit];
    expect(listUrl).toBe(
      "https://example.freshdesk.com/api/v2/tickets?email=customer%40example.test&include=description&page=2&per_page=10",
    );
    const [searchUrl] = fetchMock.mock.calls[3] as unknown as [string, RequestInit];
    expect(searchUrl).toBe(
      "https://example.freshdesk.com/api/v2/search/tickets?query=%22status%3A2+AND+priority%3A3%22&page=1&per_page=5",
    );
  });

  it("creates, reads, updates, and searches contacts", async () => {
    const fetchMock = vi.fn(async (url: string, init: RequestInit) => {
      if (url.endsWith("/contacts") && init.method === "POST") {
        return new Response(JSON.stringify({ id: 456, email: "customer@example.test" }), { status: 201 });
      }
      if (url.endsWith("/contacts/456") && init.method === "GET") {
        return new Response(JSON.stringify({ id: 456, name: "Customer" }), { status: 200 });
      }
      if (url.endsWith("/contacts/456") && init.method === "PUT") {
        return new Response(JSON.stringify({ id: 456, phone: "+123" }), { status: 200 });
      }
      return new Response(JSON.stringify({
        total: 1,
        results: [{ id: 456, email: "customer@example.test" }],
      }), { status: 200 });
    });
    const client = createFreshdeskTicketingClient({
      domain: "example.freshdesk.com",
      apiKey: "freshdesk-api-key",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await expect(client.createContact({
      name: "Customer",
      email: "customer@example.test",
      companyId: 8,
      tags: ["vip"],
    })).resolves.toMatchObject({ id: 456 });
    await expect(client.getContact(456)).resolves.toMatchObject({ name: "Customer" });
    await expect(client.updateContact(456, { phone: "+123" })).resolves.toMatchObject({ phone: "+123" });
    await expect(client.searchContacts({ query: "email:'customer@example.test'" })).resolves.toMatchObject({
      total: 1,
      results: [{ id: 456, email: "customer@example.test" }],
    });

    const createRequest = (fetchMock.mock.calls[0] as unknown[])[1] as { body: string };
    expect(JSON.parse(createRequest.body)).toEqual({
      name: "Customer",
      email: "customer@example.test",
      company_id: 8,
      tags: ["vip"],
    });
  });

  it("supports ticket conversations, replies, notes, and handoff basics", async () => {
    const fetchMock = vi.fn(async (url: string, init: RequestInit) => {
      if (url.endsWith("/tickets/123/conversations")) {
        return new Response(JSON.stringify([{ id: 1, body_text: "Initial message" }]), { status: 200 });
      }
      if (url.endsWith("/tickets/123/reply")) {
        return new Response(JSON.stringify({ id: 2, private: false }), { status: 201 });
      }
      if (url.endsWith("/tickets/123/notes")) {
        return new Response(JSON.stringify({ id: 3, private: true }), { status: 201 });
      }
      return new Response(JSON.stringify({ id: 123, responder_id: 42, status: 3 }), { status: 200 });
    });
    const client = createFreshdeskTicketingClient({
      domain: "example.freshdesk.com",
      apiKey: "freshdesk-api-key",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await expect(client.listConversations(123)).resolves.toHaveLength(1);
    await expect(client.createReply(123, {
      body: "Thanks, we are checking.",
      ccEmails: ["manager@example.test"],
    })).resolves.toMatchObject({ private: false });
    await expect(client.createNote(123, {
      body: "Internal Cognidesk handoff context.",
      private: true,
      notifyEmails: ["agent@example.test"],
    })).resolves.toMatchObject({ private: true });
    const handoff = await client.attachHandoff(123, {
      status: 3,
      responderId: 42,
      note: "Assigned to Tier 2.",
      publicReply: "A specialist is taking over.",
      tags: ["handoff"],
    });

    expect(handoff.ticket).toMatchObject({ responder_id: 42 });
    expect(handoff.note).toMatchObject({ private: true });
    expect(handoff.reply).toMatchObject({ private: false });
    const replyRequest = (fetchMock.mock.calls[1] as unknown[])[1] as { body: string };
    expect(JSON.parse(replyRequest.body)).toEqual({
      body: "Thanks, we are checking.",
      cc_emails: ["manager@example.test"],
    });
    const handoffPatch = (fetchMock.mock.calls[3] as unknown[])[1] as { body: string };
    expect(JSON.parse(handoffPatch.body)).toEqual({
      status: 3,
      responder_id: 42,
      tags: ["handoff"],
    });
  });

  it("supports Freshdesk agent and group reads", async () => {
    const fetchMock = vi.fn(async (url: string) => {
      if (url.endsWith("/agents/42")) {
        return new Response(JSON.stringify({ id: 42, contact: { email: "agent@example.test" } }), { status: 200 });
      }
      if (url.includes("/agents?")) {
        return new Response(JSON.stringify([{ id: 42, contact: { email: "agent@example.test" } }]), { status: 200 });
      }
      if (url.endsWith("/groups/7")) {
        return new Response(JSON.stringify({ id: 7, name: "Tier 2" }), { status: 200 });
      }
      if (url.includes("/groups?")) {
        return new Response(JSON.stringify([{ id: 7, name: "Tier 2" }]), { status: 200 });
      }
      return new Response(JSON.stringify([{ id: 42, contact: { email: "agent@example.test" } }]), { status: 200 });
    });
    const client = createFreshdeskTicketingClient({
      domain: "example.freshdesk.com",
      apiKey: "freshdesk-api-key",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await expect(client.getAgent(42)).resolves.toMatchObject({ id: 42 });
    await expect(client.listAgents({ page: 2, limit: 10 })).resolves.toHaveLength(1);
    await expect(client.getGroup(7)).resolves.toMatchObject({ name: "Tier 2" });
    await expect(client.listGroups({ page: 1, limit: 5 })).resolves.toHaveLength(1);
    await expect(client.listAdminGroupAgents(7)).resolves.toHaveLength(1);

    expect((fetchMock.mock.calls[1] as unknown as [string, RequestInit])[0]).toBe(
      "https://example.freshdesk.com/api/v2/agents?page=2&per_page=10",
    );
    expect((fetchMock.mock.calls[4] as unknown as [string, RequestInit])[0]).toBe(
      "https://example.freshdesk.com/api/v2/admin/groups/7/agents",
    );
  });

  it("validates and parses Freshdesk automation webhooks using configured shared headers", async () => {
    expect(validateFreshdeskWebhookSecret({
      expectedSecret: "secret",
      actualSecret: "secret",
    })).toBe(true);
    expect(validateFreshdeskWebhookSecret({
      expectedSecret: "secret",
      actualSecret: "wrong",
    })).toBe(false);

    const request = new Request("https://sdk.example.test/webhooks/freshdesk", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-freshdesk-event": "ticket_updated",
        "x-cognidesk-freshdesk-secret": "secret",
      },
      body: JSON.stringify({ ticket_id: 123, status: 3 }),
    });

    await expect(parseFreshdeskWebhookRequest(request, { webhookSecret: "secret" })).resolves.toMatchObject({
      event: "ticket_updated",
      json: { ticket_id: 123, status: 3 },
    });

    const badRequest = new Request("https://sdk.example.test/webhooks/freshdesk", {
      method: "POST",
      headers: { "x-cognidesk-freshdesk-secret": "wrong" },
      body: "{}",
    });
    await expect(parseFreshdeskWebhookRequest(badRequest, { webhookSecret: "secret" }))
      .rejects.toThrow("shared-secret validation failed");
  });

  it("reports live conformance as credential-blocked until Freshdesk credentials are configured", async () => {
    const result = await runProviderConformance({
      manifest: freshdeskTicketingProviderManifest,
      channels: [{
        id: "ticketing",
        channel: "ticketing",
        providerPackageIds: [freshdeskTicketingProviderManifest.id],
        enabledCapabilities: ["receive", "create-provider-object", "read-provider-object", "update-provider-object", "search-provider-object", "handoff"],
      }],
      credentialStatuses: freshdeskTicketingCredentialStatuses({}),
      live: {
        enabled: true,
        checks: createFreshdeskTicketingLiveChecks({
          domain: "https://example.freshdesk.com",
          apiKey: "missing",
          client: {
            async getCurrentAgent() {
              return {};
            },
          },
        }),
      },
    });

    expect(result.status).toBe("credential-blocked");
    expect(result.checks.some((check) =>
      check.id === "provider.live.current-agent" && check.status === "credential-blocked"
    )).toBe(true);
  });

  it("passes conformance when Freshdesk current-agent live check and credentials are configured", async () => {
    const result = await runProviderConformance({
      manifest: freshdeskTicketingProviderManifest,
      channels: [{
        id: "ticketing",
        channel: "ticketing",
        providerPackageIds: [freshdeskTicketingProviderManifest.id],
        enabledCapabilities: ["receive", "create-provider-object", "read-provider-object", "update-provider-object", "search-provider-object", "handoff"],
      }],
      credentialStatuses: freshdeskTicketingCredentialStatuses({
        domain: "https://example.freshdesk.com",
        apiKey: "configured",
        webhookSecret: "configured",
      }),
      live: {
        enabled: true,
        checks: createFreshdeskTicketingLiveChecks({
          domain: "https://example.freshdesk.com",
          apiKey: "configured",
          client: {
            async getCurrentAgent() {
              return {
                id: 123,
                type: "support_agent",
                contact: { email: "agent@example.test" },
              };
            },
          },
        }),
      },
    });

    expect(result.status).toBe("passed");
    expect(result.checks).toContainEqual(expect.objectContaining({
      id: "provider.live.current-agent",
      status: "passed",
    }));
  });
});
