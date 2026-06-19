import { createHmac } from "node:crypto";
import { describe, expect, it, vi } from "vitest";
import { runProviderConformance } from "@cognidesk/test-harness";
import { readProviderCoverageArtifact } from "../../provider-coverage-artifacts.js";
import {
  createIntercomTicketingClient,
  createIntercomTicketingLiveChecks,
  intercomTicketingCredentialStatuses,
  intercomTicketingProviderManifest,
  parseIntercomSignedRequest,
  validateIntercomRequestSignature,
} from "../../../src/ticketing/intercom/index.js";

describe("@cognidesk/integrations", () => {
  it("exports an official provider manifest for Intercom ticketing", () => {
    expect(intercomTicketingProviderManifest).toMatchObject({
      id: "ticketing.intercom",
      packageName: "@cognidesk/integrations",
      category: "ticketing",
      provider: "intercom",
      trustLevel: "official",
    });
    expect(intercomTicketingProviderManifest.credentialRequirements
      .find((requirement) => requirement.id === "intercom-webhook-secret")?.required).toBe(false);
    expect(intercomTicketingProviderManifest.capabilities.map((capability) => capability.capability))
      .toEqual(expect.arrayContaining([
        "receive",
        "create-provider-object",
        "read-provider-object",
        "update-provider-object",
        "search-provider-object",
        "handoff",
        "intercom.request-signature",
      ]));
    expect(intercomTicketingProviderManifest.coverage).toMatchObject({
      scope: "full-provider-api",
    });
    expect(intercomTicketingProviderManifest.coverage.notes.join(" "))
      .toContain("generated per-operation functions");
    expect(intercomTicketingProviderManifest.coverage.evidence.map((evidence) => evidence.url))
      .toEqual(expect.arrayContaining([
        "https://github.com/intercom/Intercom-OpenAPI",
        "https://developers.intercom.com/docs/references/rest-api/api.intercom.io/conversations",
        "https://developers.intercom.com/docs/references/rest-api/api.intercom.io/admins/identifyadmin",
      ]));
    const coverage = readProviderCoverageArtifact("docs/provider-coverage/intercom-rest-api-2.15-2026-06-18.operations.json");
    expect(intercomTicketingProviderManifest.metadata).toMatchObject({
      fullProviderApiVerification: {
        coverageArtifact: "docs/provider-coverage/intercom-rest-api-2.15-2026-06-18.operations.json",
        functionCatalogArtifact: "docs/provider-coverage/intercom-rest-api-2.15-2026-06-18.functions.json",
        documentedOperationCount: coverage.spec?.documentedOperationCount,
        implementedOperationCount: coverage.localSurface?.generatedOperationCount,
        generatedFunctionCount: coverage.localSurface?.generatedFunctionCount,
        unimplementedOperationCount: 0,
      },
    });
    expect(coverage.localSurface?.supportHelperOperationCount).toBe(11);
    expect(coverage.localSurface?.supportHelperGapOperationCount).toBe(149);
    expect(intercomTicketingProviderManifest.limitations.join(" ")).toContain("handoff timing");
    expect(intercomTicketingProviderManifest.limitations.join(" ")).toContain("reply visibility");
    expect(intercomTicketingProviderManifest.limitations.join(" ")).toContain("customer consent");
    expect(intercomTicketingProviderManifest.limitations.join(" ")).toContain("data retention");
    expect(intercomTicketingProviderManifest.limitations.join(" ")).toContain("workspace policy");
  });

  it("creates contact-initiated conversations through the Intercom Conversations API", async () => {
    const fetchMock = vi.fn(async () =>
      new Response(JSON.stringify({
        type: "user_message",
        id: "message_123",
        conversation_id: "conversation_123",
      }), { status: 200 })
    );
    const client = createIntercomTicketingClient({
      accessToken: "intercom-token",
      fetch: fetchMock as unknown as typeof fetch,
    });

    const message = await client.createConversation({
      from: { type: "contact", id: "contact_123" },
      body: "I need help with my order.",
      subject: "Order question",
      attachmentUrls: ["https://example.test/screenshot.png"],
    });

    expect(message.conversation_id).toBe("conversation_123");
    expect(fetchMock).toHaveBeenCalledWith(
      "https://api.intercom.io/conversations",
      expect.objectContaining({
        method: "POST",
        headers: expect.objectContaining({
          authorization: "Bearer intercom-token",
          "content-type": "application/json",
          "intercom-version": "2.15",
        }),
      }),
    );
    const request = (fetchMock.mock.calls[0] as unknown[])[1] as { body: string };
    const payload = JSON.parse(request.body);
    expect(payload).toEqual({
      from: { type: "contact", id: "contact_123" },
      body: "I need help with my order.",
      subject: "Order question",
      attachment_urls: ["https://example.test/screenshot.png"],
    });
    expect(payload).not.toHaveProperty("message_type");
  });

  it("reads, updates, replies to, manages, and searches Intercom conversations", async () => {
    const fetchMock = vi.fn(async (url: string, init: RequestInit) => {
      if (url.endsWith("/conversations/conversation_123?display_as=plaintext") && init.method === "GET") {
        return new Response(JSON.stringify({ type: "conversation", id: "conversation_123" }), { status: 200 });
      }
      if (url.endsWith("/conversations/conversation_123?display_as=plaintext") && init.method === "PUT") {
        return new Response(JSON.stringify({ type: "conversation", id: "conversation_123", read: true }), { status: 200 });
      }
      if (url.endsWith("/conversations/conversation_123/reply")) {
        return new Response(JSON.stringify({ type: "conversation", id: "conversation_123" }), { status: 200 });
      }
      if (url.endsWith("/conversations/conversation_123/parts")) {
        return new Response(JSON.stringify({
          type: "conversation",
          id: "conversation_123",
          admin_assignee_id: 42,
        }), { status: 200 });
      }
      return new Response(JSON.stringify({
        type: "conversation.list",
        conversations: [{ type: "conversation", id: "conversation_123" }],
        total_count: 1,
        pages: { type: "pages", next: null },
      }), { status: 200 });
    });
    const client = createIntercomTicketingClient({
      accessToken: "intercom-token",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await expect(client.getConversation("conversation_123", { displayAs: "plaintext" }))
      .resolves.toMatchObject({ id: "conversation_123" });
    await expect(client.updateConversation("conversation_123", {
      read: true,
      displayAs: "plaintext",
      customAttributes: { cognidesk_conversation_id: "local_123" },
    })).resolves.toMatchObject({ read: true });
    await expect(client.replyConversation("conversation_123", {
      messageType: "note",
      type: "admin",
      adminId: 42,
      body: "Internal context from Cognidesk.",
    })).resolves.toMatchObject({ id: "conversation_123" });
    await expect(client.manageConversation("conversation_123", {
      messageType: "assignment",
      type: "admin",
      adminId: 42,
      assigneeId: 42,
    })).resolves.toMatchObject({ admin_assignee_id: 42 });
    const search = await client.searchConversations({
      query: { field: "state", operator: "=", value: "open" },
      pagination: { per_page: 5 },
    });

    expect(search.conversations).toHaveLength(1);
    expect(search.totalCount).toBe(1);
    const updateRequest = (fetchMock.mock.calls[1] as unknown[])[1] as { body: string };
    expect(JSON.parse(updateRequest.body)).toEqual({
      read: true,
      custom_attributes: { cognidesk_conversation_id: "local_123" },
    });
    const replyRequest = (fetchMock.mock.calls[2] as unknown[])[1] as { body: string };
    expect(JSON.parse(replyRequest.body)).toEqual({
      message_type: "note",
      type: "admin",
      admin_id: 42,
      body: "Internal context from Cognidesk.",
    });
    const manageRequest = (fetchMock.mock.calls[3] as unknown[])[1] as { body: string };
    expect(JSON.parse(manageRequest.body)).toEqual({
      message_type: "assignment",
      type: "admin",
      admin_id: 42,
      assignee_id: 42,
    });
    const searchRequest = (fetchMock.mock.calls[4] as unknown[])[1] as { body: string };
    expect(JSON.parse(searchRequest.body)).toEqual({
      query: { field: "state", operator: "=", value: "open" },
      pagination: { per_page: 5 },
    });
  });

  it("creates, reads, updates, and searches Intercom tickets", async () => {
    const fetchMock = vi.fn(async (url: string, init: RequestInit) => {
      if (url.endsWith("/tickets") && init.method === "POST") {
        return new Response(JSON.stringify({ type: "ticket", id: "ticket_123", ticket_id: "1390" }), { status: 200 });
      }
      if (url.endsWith("/tickets/ticket_123") && init.method === "GET") {
        return new Response(JSON.stringify({ type: "ticket", id: "ticket_123", open: true }), { status: 200 });
      }
      if (url.endsWith("/tickets/ticket_123") && init.method === "PUT") {
        return new Response(JSON.stringify({ type: "ticket", id: "ticket_123", open: false }), { status: 200 });
      }
      return new Response(JSON.stringify({
        type: "ticket.list",
        tickets: [{ type: "ticket", id: "ticket_123" }],
        total_count: 1,
      }), { status: 200 });
    });
    const client = createIntercomTicketingClient({
      accessToken: "intercom-token",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await expect(client.createTicket({
      ticketTypeId: "ticket_type_123",
      contacts: [{ id: "contact_123" }],
      skipNotifications: true,
      conversationToLinkId: "conversation_123",
      ticketAttributes: {
        _default_title_: "Cannot check out",
        _default_description_: "The checkout button fails.",
      },
      assignment: { adminAssigneeId: "42", teamAssigneeId: "8" },
    })).resolves.toMatchObject({ id: "ticket_123" });
    await expect(client.getTicket("ticket_123")).resolves.toMatchObject({ open: true });
    await expect(client.updateTicket("ticket_123", {
      open: false,
      isShared: false,
      adminId: 42,
      assigneeId: "0",
    })).resolves.toMatchObject({ open: false });
    const search = await client.searchTickets({
      query: { field: "id", operator: "=", value: "ticket_123" },
      pagination: { per_page: 10 },
    });

    expect(search.tickets).toHaveLength(1);
    const createRequest = (fetchMock.mock.calls[0] as unknown[])[1] as { body: string };
    expect(JSON.parse(createRequest.body)).toEqual({
      skip_notifications: true,
      ticket_type_id: "ticket_type_123",
      contacts: [{ id: "contact_123" }],
      conversation_to_link_id: "conversation_123",
      ticket_attributes: {
        _default_title_: "Cannot check out",
        _default_description_: "The checkout button fails.",
      },
      assignment: { admin_assignee_id: "42", team_assignee_id: "8" },
    });
    const updateRequest = (fetchMock.mock.calls[2] as unknown[])[1] as { body: string };
    expect(JSON.parse(updateRequest.body)).toEqual({
      open: false,
      is_shared: false,
      admin_id: 42,
      assignee_id: "0",
    });
  });

  it("validates Intercom webhook signatures and parses signed JSON", async () => {
    const webhookSecret = "client-secret";
    const body = JSON.stringify({
      type: "notification_event",
      topic: "conversation.user.replied",
      data: { item: { type: "conversation", id: "conversation_123" } },
    });
    const signature = signIntercom({ webhookSecret, body });
    const request = new Request("https://example.test/intercom/webhooks", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-hub-signature": signature,
      },
      body,
    });

    expect(validateIntercomRequestSignature({ webhookSecret, rawBody: body, signature })).toBe(true);
    expect(validateIntercomRequestSignature({ webhookSecret, rawBody: `${body}\n`, signature })).toBe(false);

    const parsed = await parseIntercomSignedRequest(request, { webhookSecret });
    expect(parsed.json).toMatchObject({
      type: "notification_event",
      topic: "conversation.user.replied",
    });
  });

  it("reports live conformance as credential-blocked until Intercom credentials are configured", async () => {
    const result = await runProviderConformance({
      manifest: intercomTicketingProviderManifest,
      channels: [{
        id: "ticketing",
        channel: "ticketing",
        providerPackageIds: [intercomTicketingProviderManifest.id],
        enabledCapabilities: ["receive", "create-provider-object", "read-provider-object", "update-provider-object", "search-provider-object", "handoff"],
      }],
      credentialStatuses: intercomTicketingCredentialStatuses({}),
      live: {
        enabled: true,
        checks: createIntercomTicketingLiveChecks({
          accessToken: "missing",
          client: {
            async identifyAdmin() {
              return {};
            },
          },
        }),
      },
    });

    expect(result.status).toBe("credential-blocked");
    expect(result.checks.some((check) =>
      check.id === "provider.live.identity" && check.status === "credential-blocked"
    )).toBe(true);
  });

  it("passes conformance when Intercom live checks and credentials are configured", async () => {
    const result = await runProviderConformance({
      manifest: intercomTicketingProviderManifest,
      channels: [{
        id: "ticketing",
        channel: "ticketing",
        providerPackageIds: [intercomTicketingProviderManifest.id],
        enabledCapabilities: ["receive", "create-provider-object", "read-provider-object", "update-provider-object", "search-provider-object", "handoff"],
      }],
      credentialStatuses: intercomTicketingCredentialStatuses({
        accessToken: "configured",
        webhookSecret: "configured",
      }),
      live: {
        enabled: true,
        checks: createIntercomTicketingLiveChecks({
          accessToken: "configured",
          client: {
            async identifyAdmin() {
              return { type: "admin", id: "42", email: "agent@example.test", app: { id: "app_123" } };
            },
          },
        }),
      },
    });

    expect(result.status).toBe("passed");
    expect(result.checks).toContainEqual(expect.objectContaining({
      id: "provider.live.identity",
      status: "passed",
    }));
  });
});

function signIntercom(input: { webhookSecret: string; body: string }) {
  return `sha1=${createHmac("sha1", input.webhookSecret).update(input.body).digest("hex")}`;
}
