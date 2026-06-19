import { describe, expect, expectTypeOf, it, vi } from "vitest";
import { runProviderConformance } from "@cognidesk/test-harness";
import {
  createPostmarkEmailClient,
  createPostmarkEmailLiveChecks,
  POSTMARK_FULL_API_GENERATED_FUNCTION_COUNT,
  POSTMARK_FULL_API_OPERATION_COUNT,
  parsePostmarkInboundWebhook,
  postmarkEmailCredentialStatuses,
  postmarkEmailProviderManifest,
  type PostmarkMessageDetails,
  type PostmarkFullApiOperationResponseMap,
  type PostmarkMessageStreamsResponse,
  type PostmarkSuppressionDumpResponse,
} from "../../../src/email/postmark/index.js";

describe("@cognidesk/integrations", () => {
  it("exports an official provider manifest for Postmark email", () => {
    expect(postmarkEmailProviderManifest).toMatchObject({
      id: "email.postmark",
      packageName: "@cognidesk/integrations",
      category: "email",
      provider: "postmark",
      trustLevel: "official",
      coverage: {
        scope: "full-provider-api",
      },
    });
    expect(POSTMARK_FULL_API_OPERATION_COUNT).toBe(66);
    expect(POSTMARK_FULL_API_GENERATED_FUNCTION_COUNT).toBe(66);
    expect(postmarkEmailProviderManifest.metadata).toMatchObject({
      fullProviderApiVerification: {
        documentedOperationCount: 66,
        implementedOperationCount: 66,
        unimplementedOperationCount: 0,
        generatedFunctionCount: 66,
      },
    });
    expect(postmarkEmailProviderManifest.capabilities.map((capability) => capability.capability))
      .toEqual(expect.arrayContaining([
        "receive",
        "send",
        "draft",
        "thread",
        "attach",
        "read-provider-object",
        "search-provider-object",
        "update-provider-object",
      ]));
    const receive = postmarkEmailProviderManifest.capabilities.find((capability) => capability.capability === "receive");
    expect(receive?.description).toContain("inbound email JSON webhooks");
    expect(receive?.description).not.toContain("delivery events");
    expect(postmarkEmailProviderManifest.coverage.evidence.map((evidence) => evidence.url))
      .toEqual(expect.arrayContaining([
        "https://postmarkapp.com/developer/webhooks/inbound-webhook",
        "https://postmarkapp.com/developer/api/webhooks-api",
      ]));
    expect(postmarkEmailProviderManifest.limitations.join(" "))
      .toContain("message history is retention-bound");
    expect(postmarkEmailProviderManifest.capabilities.flatMap((capability) =>
      capability.providerObjects?.map((object) => object.kind) ?? []
    )).toEqual(expect.arrayContaining([
      "postmarkMessageStream",
      "postmarkSuppression",
    ]));
    expect(postmarkEmailProviderManifest.capabilities.find((capability) =>
      capability.capability === "update-provider-object"
    )).toMatchObject({
      sideEffect: true,
      changesWorkflow: true,
      providerObjects: [{ kind: "postmarkSuppression", label: "Postmark Suppression" }],
    });
  });

  it("types Postmark helper and selected operation responses", () => {
    if (false) {
      const client = undefined as unknown as import("../../../src/email/postmark/index.js").PostmarkEmailClient;
      const details = client.getOutboundMessageDetails("message-id");
      const messages = client.requestOperation("server:GET:/messages/outbound", {
        query: { count: 10, offset: 0, status: "sent" },
      });
      const streams = client.listMessageStreams({ MessageStreamType: "Transactional" });
      const suppressions = client.dumpSuppressions({ streamId: "outbound" });

      expectTypeOf<Awaited<typeof details>>().toEqualTypeOf<PostmarkMessageDetails>();
      expectTypeOf<Awaited<typeof messages>>().toEqualTypeOf<PostmarkFullApiOperationResponseMap["server:GET:/messages/outbound"]>();
      expectTypeOf<Awaited<typeof streams>>().toEqualTypeOf<PostmarkMessageStreamsResponse>();
      expectTypeOf<Awaited<typeof suppressions>>().toEqualTypeOf<PostmarkSuppressionDumpResponse>();
    }
  });

  it("sends transactional email through the Postmark Email API", async () => {
    const fetchMock = vi.fn(async () =>
      new Response(JSON.stringify({
        To: "customer@example.test",
        SubmittedAt: "2026-06-17T00:00:00Z",
        MessageID: "message-id",
        ErrorCode: 0,
        Message: "OK",
      }), { status: 200 })
    );
    const client = createPostmarkEmailClient({
      serverToken: "server-token",
      fetch: fetchMock as unknown as typeof fetch,
    });

    const sent = await client.sendEmail({
      From: "support@example.test",
      To: "customer@example.test",
      Subject: "Reset help",
      TextBody: "Here is the reset link.",
      MessageStream: "outbound",
      Metadata: { conversationId: "conversation_1" },
    });

    expect(sent.MessageID).toBe("message-id");
    expect(fetchMock).toHaveBeenCalledWith(
      "https://api.postmarkapp.com/email",
      expect.objectContaining({
        method: "POST",
        headers: expect.objectContaining({
          "x-postmark-server-token": "server-token",
          "content-type": "application/json",
        }),
      }),
    );
    const request = (fetchMock.mock.calls[0] as unknown[])[1] as { body: string };
    expect(JSON.parse(request.body)).toMatchObject({
      From: "support@example.test",
      To: "customer@example.test",
      Subject: "Reset help",
      TextBody: "Here is the reset link.",
      MessageStream: "outbound",
      Metadata: { conversationId: "conversation_1" },
    });
  });

  it("sends template email through the Postmark template endpoint", async () => {
    const fetchMock = vi.fn(async () =>
      new Response(JSON.stringify({ MessageID: "template-message", ErrorCode: 0 }), { status: 200 })
    );
    const client = createPostmarkEmailClient({
      serverToken: "server-token",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await client.sendEmailWithTemplate({
      From: "support@example.test",
      To: "customer@example.test",
      TemplateAlias: "ticket-update",
      TemplateModel: { name: "Ada" },
      MessageStream: "outbound",
    });

    expect(fetchMock).toHaveBeenCalledWith(
      "https://api.postmarkapp.com/email/withTemplate",
      expect.objectContaining({ method: "POST" }),
    );
    const request = (fetchMock.mock.calls[0] as unknown[])[1] as { body: string };
    expect(JSON.parse(request.body)).toMatchObject({
      TemplateAlias: "ticket-update",
      TemplateModel: { name: "Ada" },
    });
  });

  it("reads and searches Postmark message history", async () => {
    const fetchMock = vi.fn(async (url: string) => {
      if (url.includes("/details")) {
        return new Response(JSON.stringify({ MessageID: "message-id", Subject: "Reset help" }), { status: 200 });
      }
      return new Response(JSON.stringify({ TotalCount: 1, Messages: [{ MessageID: "message-id" }] }), { status: 200 });
    });
    const client = createPostmarkEmailClient({
      serverToken: "server-token",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await expect(client.getOutboundMessageDetails("message-id")).resolves.toMatchObject({ MessageID: "message-id" });
    const search = await client.searchOutboundMessages({
      count: 10,
      offset: 0,
      recipient: "customer@example.test",
      fromEmail: "support@example.test",
      tag: "support",
      messageStream: "inbound",
    });

    expect(search.Messages).toHaveLength(1);
    expect(fetchMock).toHaveBeenNthCalledWith(
      2,
      "https://api.postmarkapp.com/messages/outbound?count=10&offset=0&recipient=customer%40example.test&fromemail=support%40example.test&tag=support&messagestream=inbound",
      expect.objectContaining({ method: "GET" }),
    );
  });

  it("lists message streams and manages Postmark suppressions", async () => {
    const fetchMock = vi.fn(async (url: string) => {
      if (url.includes("/message-streams?")) {
        return new Response(JSON.stringify({
          MessageStreams: [{ ID: "outbound", MessageStreamType: "Transactional" }],
        }), { status: 200 });
      }
      if (url.includes("/suppressions/dump")) {
        return new Response(JSON.stringify({
          Suppressions: [{ EmailAddress: "customer@example.test", SuppressionReason: "HardBounce" }],
        }), { status: 200 });
      }
      return new Response(JSON.stringify({
        Suppressions: [{ EmailAddress: "customer@example.test", Status: url.includes("/delete") ? "Deleted" : "Suppressed" }],
      }), { status: 200 });
    });
    const client = createPostmarkEmailClient({
      serverToken: "server-token",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await expect(client.listMessageStreams({
      MessageStreamType: "All",
      IncludeArchivedStreams: true,
    })).resolves.toMatchObject({
      MessageStreams: [{ ID: "outbound" }],
    });
    await expect(client.dumpSuppressions({
      streamId: "outbound",
      fromDate: "2026-06-01",
      toDate: "2026-06-17",
    })).resolves.toMatchObject({
      Suppressions: [{ EmailAddress: "customer@example.test" }],
    });
    await expect(client.createSuppressions({
      streamId: "outbound",
      suppressions: [{ EmailAddress: "customer@example.test" }],
    })).resolves.toMatchObject({
      Suppressions: [{ Status: "Suppressed" }],
    });
    await expect(client.deleteSuppressions({
      streamId: "outbound",
      suppressions: [{ EmailAddress: "customer@example.test" }],
    })).resolves.toMatchObject({
      Suppressions: [{ Status: "Deleted" }],
    });

    expect(fetchMock).toHaveBeenNthCalledWith(
      1,
      "https://api.postmarkapp.com/message-streams?MessageStreamType=All&IncludeArchivedStreams=true",
      expect.objectContaining({ method: "GET" }),
    );
    expect(fetchMock).toHaveBeenNthCalledWith(
      2,
      "https://api.postmarkapp.com/message-streams/outbound/suppressions/dump?fromdate=2026-06-01&todate=2026-06-17",
      expect.objectContaining({ method: "GET" }),
    );
    const createRequest = (fetchMock.mock.calls[2] as unknown[])[1] as { body: string };
    expect(fetchMock).toHaveBeenNthCalledWith(
      3,
      "https://api.postmarkapp.com/message-streams/outbound/suppressions",
      expect.objectContaining({ method: "POST" }),
    );
    expect(JSON.parse(createRequest.body)).toEqual({
      Suppressions: [{ EmailAddress: "customer@example.test" }],
    });
    expect(fetchMock).toHaveBeenNthCalledWith(
      4,
      "https://api.postmarkapp.com/message-streams/outbound/suppressions/delete",
      expect.objectContaining({ method: "POST" }),
    );
  });

  it("routes generated Postmark server and account operations with the right token headers", async () => {
    const fetchMock = vi.fn(async () =>
      new Response(JSON.stringify({ ID: 123, Name: "Support" }), { status: 200 })
    );
    const client = createPostmarkEmailClient({
      serverToken: "server-token",
      accountToken: "account-token",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await expect(client.fullApi.GetBounces({
      query: { count: 10, offset: 0 },
    })).resolves.toMatchObject({ ID: 123 });
    await expect(client.fullApi.GetServerInformation({
      pathParams: { serverid: 123 },
    })).resolves.toMatchObject({ Name: "Support" });

    expect(fetchMock).toHaveBeenNthCalledWith(
      1,
      "https://api.postmarkapp.com/bounces?count=10&offset=0",
      expect.objectContaining({
        method: "GET",
        headers: expect.objectContaining({ "x-postmark-server-token": "server-token" }),
      }),
    );
    expect(fetchMock).toHaveBeenNthCalledWith(
      2,
      "https://api.postmarkapp.com/servers/123",
      expect.objectContaining({
        method: "GET",
        headers: expect.objectContaining({ "x-postmark-account-token": "account-token" }),
      }),
    );
  });

  it("fails generated Postmark account operations without an account token", async () => {
    const client = createPostmarkEmailClient({
      serverToken: "server-token",
      fetch: vi.fn() as unknown as typeof fetch,
    });

    await expect(client.fullApi.ListServers()).rejects.toThrow("account token is required");
  });

  it("parses inbound webhook JSON and enforces configured webhook auth", async () => {
    const request = new Request("https://example.test/postmark/inbound", {
      method: "POST",
      headers: {
        authorization: "Basic configured",
        "content-type": "application/json",
      },
      body: JSON.stringify({
        From: "customer@example.test",
        To: "support@example.test",
        Subject: "Need help",
        MessageID: "inbound-id",
        TextBody: "Can you help?",
        Attachments: [{ Name: "receipt.pdf", ContentType: "application/pdf", ContentLength: 123 }],
      }),
    });

    const webhook = await parsePostmarkInboundWebhook(request, {
      expectedAuthHeader: "Basic configured",
    });

    expect(webhook).toMatchObject({
      From: "customer@example.test",
      Subject: "Need help",
      MessageID: "inbound-id",
    });
    expect(webhook.Attachments?.[0]).toMatchObject({ Name: "receipt.pdf" });
  });

  it("fails closed when Postmark webhook auth is required or mismatched", async () => {
    const request = new Request("https://example.test/postmark/inbound", {
      method: "POST",
      headers: { "content-type": "application/json", authorization: "Basic actual" },
      body: JSON.stringify({ MessageID: "inbound-id" }),
    });

    await expect(parsePostmarkInboundWebhook(request.clone(), { requireAuth: true }))
      .rejects.toThrow("authentication is required");
    await expect(parsePostmarkInboundWebhook(request.clone(), {
      requireAuth: true,
      expectedAuthHeader: "Basic expected",
    })).rejects.toThrow("authentication failed");
  });

  it("reports live conformance as credential-blocked until Postmark credentials are configured", async () => {
    const result = await runProviderConformance({
      manifest: postmarkEmailProviderManifest,
      channels: [{
        id: "email",
        channel: "email",
        providerPackageIds: [postmarkEmailProviderManifest.id],
        enabledCapabilities: ["receive", "send", "draft", "thread", "attach", "read-provider-object", "search-provider-object"],
      }],
      credentialStatuses: postmarkEmailCredentialStatuses({}),
      live: {
        enabled: true,
        checks: createPostmarkEmailLiveChecks({
          serverToken: "missing",
          client: {
            async listWebhooks() {
              return [];
            },
            async listMessageStreams() {
              return { MessageStreams: [] };
            },
          },
        }),
      },
    });

    expect(result.status).toBe("credential-blocked");
    expect(result.checks.some((check) =>
      check.id === "provider.live.webhooks" && check.status === "credential-blocked"
    )).toBe(true);
    expect(result.checks.some((check) =>
      check.id === "provider.live.message-streams" && check.status === "credential-blocked"
    )).toBe(true);
  });

  it("passes conformance when Postmark live check and credentials are configured", async () => {
    const result = await runProviderConformance({
      manifest: postmarkEmailProviderManifest,
      channels: [{
        id: "email",
        channel: "email",
        providerPackageIds: [postmarkEmailProviderManifest.id],
        enabledCapabilities: ["receive", "send", "draft", "thread", "attach", "read-provider-object", "search-provider-object"],
      }],
      credentialStatuses: postmarkEmailCredentialStatuses({
        serverTokenConfigured: true,
        accountTokenConfigured: true,
        messageStream: "outbound",
        webhookAuthConfigured: true,
      }),
      live: {
        enabled: true,
        checks: createPostmarkEmailLiveChecks({
          serverToken: "configured",
          client: {
            async listWebhooks() {
              return [{ ID: 1, Url: "https://example.test/postmark", MessageStream: "outbound" }];
            },
            async listMessageStreams() {
              return { MessageStreams: [{ ID: "outbound", MessageStreamType: "Transactional" }] };
            },
          },
        }),
      },
    });

    expect(result.status).toBe("passed");
    expect(result.checks).toContainEqual(expect.objectContaining({
      id: "provider.live.webhooks",
      status: "passed",
    }));
    expect(result.checks).toContainEqual(expect.objectContaining({
      id: "provider.live.message-streams",
      status: "passed",
    }));
  });
});
