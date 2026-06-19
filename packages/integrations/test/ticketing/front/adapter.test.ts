import { describe, expect, expectTypeOf, it, vi } from "vitest";
import { runProviderConformance } from "@cognidesk/test-harness";
import { readProviderCoverageArtifact } from "../../provider-coverage-artifacts.js";
import {
  createFrontTicketingClient,
  createFrontTicketingLiveChecks,
  frontTicketingCredentialStatuses,
  frontTicketingProviderManifest,
  type FrontAcceptedMessageResponse,
  type FrontCollectionResponse,
  type FrontCommentResponse,
  type FrontConversationResponse,
  type FrontCreateCommentPayload,
  type FrontCreateMessagePayload,
  type FrontMessageResponse,
  type FrontReplyMessagePayload,
  type FrontUpdateConversationPayload,
} from "../../../src/ticketing/front/index.js";

describe("@cognidesk/integrations", () => {
  it("exports an official provider manifest", () => {
    expect(frontTicketingProviderManifest).toMatchObject({
      id: "ticketing.front",
      packageName: "@cognidesk/integrations",
      category: "ticketing",
      provider: "front",
      coverage: {
        scope: "full-provider-api",
      },
    });
    expect(frontTicketingProviderManifest.credentialRequirements[0]?.scopes)
      .toEqual(expect.arrayContaining(["messages:send", "messages:read", "comments:write", "comments:read", "teammates:read"]));
    expect(frontTicketingProviderManifest.coverage.notes.join(" "))
      .toContain("generated per-operation functions");
    expect(frontTicketingProviderManifest.coverage.evidence.map((evidence) => evidence.url))
      .toEqual(expect.arrayContaining([
        "https://github.com/frontapp/front-api-specs",
        "https://raw.githubusercontent.com/frontapp/front-api-specs/main/channel-api/channel-api.json",
        "https://dev.frontapp.com/reference/create-message",
        "https://dev.frontapp.com/reference/create-message-reply",
        "https://dev.frontapp.com/reference/list-conversation-messages",
        "https://dev.frontapp.com/reference/add-comment",
        "https://dev.frontapp.com/reference/list-conversation-comments",
        "https://dev.frontapp.com/reference/list-teammates",
      ]));
    expect(frontTicketingProviderManifest.metadata).toMatchObject({
      channelCoverage: {
        fullFrontCoreAndChannelApiOperations: "generated-per-operation-functions",
        messages: "typed-json-create-reply-read-and-generated-full-surface",
        multipartAttachments: "generated-full-surface",
        webhooks: "generated-full-surface",
      },
    });
    const coverage = readProviderCoverageArtifact("docs/provider-coverage/front-core-and-channel-api-2026-06-18.operations.json");
    expect(frontTicketingProviderManifest.metadata).toMatchObject({
      fullProviderApiVerification: {
        coverageArtifact: "docs/provider-coverage/front-core-and-channel-api-2026-06-18.operations.json",
        functionCatalogArtifact: "docs/provider-coverage/front-core-and-channel-api-2026-06-18.functions.json",
        documentedOperationCount: coverage.spec?.documentedOperationCount,
        implementedOperationCount: coverage.localSurface?.generatedOperationCount,
        generatedFunctionCount: coverage.localSurface?.generatedFunctionCount,
        unimplementedOperationCount: 0,
      },
    });
    expect(coverage.localSurface?.supportHelperOperationCount).toBe(9);
    expect(coverage.localSurface?.supportHelperGapOperationCount).toBe(246);
    const providerObjectKinds = frontTicketingProviderManifest.capabilities.flatMap((capability) =>
      capability.providerObjects?.map((object) => object.kind) ?? []
    );
    expect(providerObjectKinds).toEqual(expect.arrayContaining([
      "frontConversation",
      "frontMessage",
      "frontComment",
    ]));
  });

  it("exposes typed Front helper request and response contracts", () => {
    const client = createFrontTicketingClient();
    const createMessagePayload: FrontCreateMessagePayload = {
      body: "Customer needs manual rebooking.",
      to: ["ada@example.test"],
      options: { archive: true, tag_ids: ["tag_123"] },
    };
    const replyPayload: FrontReplyMessagePayload = {
      body: "Handoff accepted.",
      channel_id: "cha_123",
    };
    const commentPayload: FrontCreateCommentPayload = {
      body: "Internal handoff note.",
      is_pinned: true,
    };
    const updatePayload: FrontUpdateConversationPayload = {
      status: "open",
      assignee_id: null,
      custom_fields: { priority_reason: "flight disruption" },
    };

    expectTypeOf(client.createMessage("cha_123", createMessagePayload))
      .toEqualTypeOf<Promise<FrontAcceptedMessageResponse>>();
    expectTypeOf(client.replyToConversation("cnv_123", replyPayload))
      .toEqualTypeOf<Promise<FrontAcceptedMessageResponse>>();
    expectTypeOf(client.addComment("cnv_123", commentPayload))
      .toEqualTypeOf<Promise<FrontCommentResponse>>();
    expectTypeOf(client.updateConversation("cnv_123", updatePayload))
      .toEqualTypeOf<Promise<void>>();
    expectTypeOf(client.listConversationMessages("cnv_123"))
      .toEqualTypeOf<Promise<FrontCollectionResponse<FrontMessageResponse>>>();
    expectTypeOf(client.searchConversations("inbox:inb_123", { limit: 10 }))
      .toEqualTypeOf<Promise<FrontCollectionResponse<FrontConversationResponse> & { _total?: number }>>();

    // @ts-expect-error Front JSON helpers intentionally reject multipart attachment payloads.
    const invalidMessagePayload: FrontCreateMessagePayload = { body: "See attachment", to: ["ada@example.test"], attachments: [] };
    void invalidMessagePayload;
  });

  it("fails closed for Front attachment payloads that require multipart/form-data", async () => {
    const fetchMock = vi.fn(async () => new Response(JSON.stringify({ id: "msg-1" }), { status: 201 }));
    const client = createFrontTicketingClient({
      accessToken: "configured",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await expect(client.createMessage("cha_123", {
      body: "See attachment",
      attachments: [],
    } as unknown as FrontCreateMessagePayload)).rejects.toThrow("attachments require multipart/form-data");
    await expect(client.replyToConversation("cnv_123", {
      body: "See attachment",
      attachments: [],
    } as unknown as FrontReplyMessagePayload)).rejects.toThrow("attachments require multipart/form-data");
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("creates Front channel messages", async () => {
    const fetchMock = vi.fn(async () => new Response(JSON.stringify({ id: "msg-1" }), { status: 201 }));
    const client = createFrontTicketingClient({
      accessToken: "configured",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await expect(client.createMessage("cha_123", {
      subject: "Flight disruption",
      body: "Customer needs manual rebooking.",
      to: ["ada@example.test"],
    })).resolves.toMatchObject({ id: "msg-1" });

    expect(fetchMock).toHaveBeenCalledWith(
      "https://api2.frontapp.com/channels/cha_123/messages",
      expect.objectContaining({
        method: "POST",
        headers: expect.objectContaining({ authorization: "Bearer configured" }),
      }),
    );
  });

  it("creates Front conversation replies", async () => {
    const fetchMock = vi.fn(async () => new Response(JSON.stringify({ id: "msg-2" }), { status: 201 }));
    const client = createFrontTicketingClient({
      accessToken: "configured",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await expect(client.replyToConversation("cnv_123", {
      body: "Handoff accepted.",
      channel_id: "cha_123",
    })).resolves.toMatchObject({ id: "msg-2" });

    expect(fetchMock).toHaveBeenCalledWith(
      "https://api2.frontapp.com/conversations/cnv_123/messages",
      expect.objectContaining({
        method: "POST",
        headers: expect.objectContaining({
          authorization: "Bearer configured",
          "content-type": "application/json",
        }),
        body: JSON.stringify({ body: "Handoff accepted.", channel_id: "cha_123" }),
      }),
    );
  });

  it("lists Front conversation messages with query parameters", async () => {
    const fetchMock = vi.fn(async () => new Response(JSON.stringify({ _results: [] }), { status: 200 }));
    const client = createFrontTicketingClient({
      accessToken: "configured",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await expect(client.listConversationMessages("cnv_123", {
      limit: 50,
      sort_by: "created_at",
      sort_order: "desc",
    })).resolves.toMatchObject({ _results: [] });

    expect(fetchMock).toHaveBeenCalledWith(
      "https://api2.frontapp.com/conversations/cnv_123/messages?limit=50&sort_by=created_at&sort_order=desc",
      expect.objectContaining({
        method: "GET",
        headers: expect.objectContaining({ authorization: "Bearer configured" }),
      }),
    );
  });

  it("creates and lists Front conversation comments", async () => {
    const fetchMock = vi
      .fn()
      .mockResolvedValueOnce(new Response(JSON.stringify({ id: "com_1" }), { status: 201 }))
      .mockResolvedValueOnce(new Response(JSON.stringify({ _results: [{ id: "com_1" }] }), { status: 200 }));
    const client = createFrontTicketingClient({
      accessToken: "configured",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await expect(client.addComment("cnv_123", {
      body: "Internal handoff note.",
      is_pinned: true,
    })).resolves.toMatchObject({ id: "com_1" });
    await expect(client.listConversationComments("cnv_123"))
      .resolves.toMatchObject({ _results: [{ id: "com_1" }] });

    expect(fetchMock).toHaveBeenNthCalledWith(
      1,
      "https://api2.frontapp.com/conversations/cnv_123/comments",
      expect.objectContaining({
        method: "POST",
        body: JSON.stringify({ body: "Internal handoff note.", is_pinned: true }),
      }),
    );
    expect(fetchMock).toHaveBeenNthCalledWith(
      2,
      "https://api2.frontapp.com/conversations/cnv_123/comments",
      expect.objectContaining({
        method: "GET",
        headers: expect.objectContaining({ authorization: "Bearer configured" }),
      }),
    );
  });

  it("passes provider conformance", async () => {
    const result = await runProviderConformance({
      manifest: frontTicketingProviderManifest,
      channels: [{
        id: "ticketing",
        channel: "ticketing",
        providerPackageIds: [frontTicketingProviderManifest.id],
        enabledCapabilities: ["create-provider-object", "read-provider-object", "update-provider-object", "search-provider-object", "handoff"],
      }],
      credentialStatuses: frontTicketingCredentialStatuses({ apiAccessConfigured: true }),
    });

    expect(result.status).toBe("passed");
  });

  it("passes live conformance with configured Front readiness", async () => {
    const result = await runProviderConformance({
      manifest: frontTicketingProviderManifest,
      channels: [{
        id: "ticketing",
        channel: "ticketing",
        providerPackageIds: [frontTicketingProviderManifest.id],
        enabledCapabilities: ["create-provider-object", "read-provider-object", "update-provider-object", "search-provider-object", "handoff"],
      }],
      credentialStatuses: frontTicketingCredentialStatuses({ apiAccessConfigured: true }),
      live: {
        enabled: true,
        checks: createFrontTicketingLiveChecks({
          accessToken: "configured",
          client: { async readiness() {
            return { _results: [{ id: "tea_1" }] };
          } },
        }),
      },
    });

    expect(result.status).toBe("passed");
    expect(result.checks).toContainEqual(expect.objectContaining({
      id: "provider.live.teammates",
      status: "passed",
    }));
    expect(frontTicketingCredentialStatuses({ apiAccessConfigured: true })[0]?.scopes)
      .toEqual(expect.arrayContaining(["teammates:read"]));
  });

  it("blocks Front live checks when API access is missing", async () => {
    const result = await runProviderConformance({
      manifest: frontTicketingProviderManifest,
      channels: [{
        id: "ticketing",
        channel: "ticketing",
        providerPackageIds: [frontTicketingProviderManifest.id],
        enabledCapabilities: ["create-provider-object", "read-provider-object", "update-provider-object", "search-provider-object", "handoff"],
      }],
      credentialStatuses: frontTicketingCredentialStatuses({}),
      live: {
        enabled: true,
        checks: createFrontTicketingLiveChecks({
          accessToken: "missing",
          client: { async readiness() {
            throw new Error("Front readiness should be credential-blocked before execution.");
          } },
        }),
      },
    });

    expect(result.status).toBe("credential-blocked");
    expect(result.checks).toContainEqual(expect.objectContaining({
      id: "provider.live.teammates",
      status: "credential-blocked",
    }));
  });
});
