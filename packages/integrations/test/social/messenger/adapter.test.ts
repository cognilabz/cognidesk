import { createHmac } from "node:crypto";
import { describe, expect, it, vi } from "vitest";
import { runProviderConformance } from "@cognidesk/test-harness";
import {
  createMessengerAttachmentMessage,
  createMessengerSocialClient,
  createMessengerSocialLiveChecks,
  createMessengerTextMessage,
  messengerSocialCredentialStatuses,
  messengerSocialProviderManifest,
  parseMessengerWebhook,
  validateMessengerWebhookSignature,
  verifyMessengerWebhookChallenge,
} from "../../../src/social/messenger/index.js";

describe("@cognidesk/integrations", () => {
  it("exports an official provider manifest for Facebook Messenger", () => {
    expect(messengerSocialProviderManifest).toMatchObject({
      id: "social.messenger",
      packageName: "@cognidesk/integrations",
      category: "social",
      provider: "messenger",
      trustLevel: "official",
      coverage: {
        scope: "support-workflow-subset",
      },
    });
    expect(messengerSocialProviderManifest.capabilities.map((capability) => capability.capability))
      .toEqual(expect.arrayContaining([
        "receive",
        "send",
        "draft",
        "thread",
        "read-provider-object",
        "search-provider-object",
        "media",
        "social.webhook-signature",
      ]));
    expect(messengerSocialProviderManifest.capabilities.map((capability) => capability.capability))
      .not.toContain("social.handover");
    expect(messengerSocialProviderManifest.credentialRequirements.map((requirement) => requirement.id))
      .toEqual(expect.arrayContaining([
        "messenger-page-access-token",
        "messenger-page-webhook-subscription",
      ]));
    expect(messengerSocialProviderManifest.credentialRequirements.find((requirement) =>
      requirement.id === "messenger-page-access-token"
    )?.scopes).toEqual(expect.arrayContaining(["pages_manage_metadata"]));
    expect(messengerSocialProviderManifest.coverage.notes.join(" "))
      .toContain("not full Messenger Platform coverage");
    expect(messengerSocialProviderManifest.metadata?.apiCoverage).toMatchObject({
      operationCatalog: "docs/provider-coverage/messenger-platform-graph-selected-api-2026-06-18.operations.json",
      generatedFromOfficialSpec: false,
      selectedOperationCount: 8,
      implementedOperationCount: 8,
      fullProviderApi: false,
      fullMetaGraphCoverage: false,
    });
    const receive = messengerSocialProviderManifest.capabilities.find((capability) => capability.capability === "receive");
    const send = messengerSocialProviderManifest.capabilities.find((capability) => capability.capability === "send");
    const read = messengerSocialProviderManifest.capabilities.find((capability) =>
      capability.capability === "read-provider-object"
    );
    const search = messengerSocialProviderManifest.capabilities.find((capability) =>
      capability.capability === "search-provider-object"
    );
    expect(receive?.description).toContain("subscribed to the messages webhook");
    expect(send?.description).toContain("24-hour standard messaging window");
    expect(send?.description).toContain("MESSAGE_TAG");
    expect(read?.providerObjects).toEqual(expect.arrayContaining([
      { kind: "messengerConversation", label: "Messenger Conversation" },
      { kind: "messengerMessage", label: "Messenger Message" },
    ]));
    expect(search?.providerObjects).toEqual([
      { kind: "messengerConversation", label: "Messenger Conversation" },
    ]);
    expect(messengerSocialProviderManifest.coverage.notes.join(" "))
      .toContain("legacy Handover Protocol thread-control helpers are not advertised");
    expect(messengerSocialProviderManifest.limitations.join(" ")).toContain("webhook subscriptions");
    expect(messengerSocialProviderManifest.limitations.join(" ")).toContain("messaging window rules");
    expect(messengerSocialProviderManifest.limitations.join(" ")).toContain("Conversation Routing");
    expect(messengerSocialProviderManifest.coverage.evidence.map((evidence) => evidence.url))
      .toEqual(expect.arrayContaining([
        "https://developers.facebook.com/documentation/business-messaging/messenger-platform/webhooks",
        "https://developers.facebook.com/docs/graph-api/reference/page/subscribed_apps/",
        "https://developers.facebook.com/docs/messenger-platform/send-messages/message-tags",
        "https://developers.facebook.com/docs/messenger-platform/send-messages/sender-actions",
      ]));
  });

  it("sends Messenger text messages through the Page messages endpoint", async () => {
    const fetchMock = vi.fn(async () =>
      new Response(JSON.stringify({ recipient_id: "psid_1", message_id: "mid_1" }), { status: 200 })
    );
    const client = createMessengerSocialClient({
      pageAccessToken: "page-token",
      pageId: "page_1",
      fetch: fetchMock as unknown as typeof fetch,
    });

    const result = await client.sendText({
      recipientId: "psid_1",
      text: "Your support update is ready.",
    });

    expect(result.message_id).toBe("mid_1");
    expect(fetchMock).toHaveBeenCalledWith(
      "https://graph.facebook.com/v25.0/page_1/messages",
      expect.objectContaining({
        method: "POST",
        headers: expect.objectContaining({
          authorization: "Bearer page-token",
          "content-type": "application/json",
        }),
      }),
    );
    const request = (fetchMock.mock.calls[0] as unknown[])[1] as { body: string };
    expect(JSON.parse(request.body)).toEqual({
      recipient: { id: "psid_1" },
      messaging_type: "RESPONSE",
      message: { text: "Your support update is ready." },
    });
  });

  it("does not impose Messenger tag policy while building payloads", () => {
    expect(createMessengerTextMessage({
      recipientId: "psid_1",
      text: "Your receipt is available.",
      messagingType: "MESSAGE_TAG",
      tag: "POST_PURCHASE_UPDATE",
    })).toEqual({
      recipient: { id: "psid_1" },
      messagingType: "MESSAGE_TAG",
      tag: "POST_PURCHASE_UPDATE",
      message: { text: "Your receipt is available." },
    });
  });

  it("builds attachment messages, uploads reusable attachments, and keeps legacy handover endpoints low-level", async () => {
    const fetchMock = vi.fn(async (url: string) => {
      if (url.includes("/message_attachments")) {
        return new Response(JSON.stringify({ attachment_id: "attachment_1" }), { status: 200 });
      }
      if (url.includes("/pass_thread_control")) {
        return new Response(JSON.stringify({ success: true, endpoint: "pass" }), { status: 200 });
      }
      if (url.includes("/take_thread_control")) {
        return new Response(JSON.stringify({ success: true, endpoint: "take" }), { status: 200 });
      }
      return new Response(JSON.stringify({ success: true, endpoint: "request" }), { status: 200 });
    });
    const client = createMessengerSocialClient({
      pageAccessToken: "page-token",
      pageId: "page_1",
      fetch: fetchMock as unknown as typeof fetch,
    });

    expect(createMessengerAttachmentMessage({
      recipientId: "psid_1",
      type: "image",
      payload: { attachment_id: "attachment_1" },
    })).toEqual({
      recipient: { id: "psid_1" },
      messagingType: "RESPONSE",
      message: {
        attachment: {
          type: "image",
          payload: { attachment_id: "attachment_1" },
        },
      },
    });
    await expect(client.uploadAttachment({
      type: "image",
      url: "https://example.test/receipt.png",
    })).resolves.toMatchObject({ attachment_id: "attachment_1" });
    await expect(client.passThreadControl({
      recipientId: "psid_1",
      targetAppId: "123456",
      metadata: "handoff",
    })).resolves.toMatchObject({ endpoint: "pass" });
    await expect(client.takeThreadControl({
      recipientId: "psid_1",
      metadata: "resume",
    })).resolves.toMatchObject({ endpoint: "take" });
    await expect(client.requestThreadControl({
      recipientId: "psid_1",
      metadata: "request",
    })).resolves.toMatchObject({ endpoint: "request" });

    const uploadRequest = (fetchMock.mock.calls[0] as unknown[])[1] as { body: string };
    expect(JSON.parse(uploadRequest.body)).toEqual({
      message: {
        attachment: {
          type: "image",
          payload: {
            is_reusable: true,
            url: "https://example.test/receipt.png",
          },
        },
      },
    });
    const passRequest = (fetchMock.mock.calls[1] as unknown[])[1] as { body: string };
    expect(JSON.parse(passRequest.body)).toEqual({
      recipient: { id: "psid_1" },
      target_app_id: "123456",
      metadata: "handoff",
    });
  });

  it("reads Messenger conversations and messages", async () => {
    const fetchMock = vi.fn(async (url: string) => {
      if (url.includes("/conversation_1/messages")) {
        return new Response(JSON.stringify({ data: [{ id: "message_1", message: "Hello" }] }), { status: 200 });
      }
      return new Response(JSON.stringify({ data: [{ id: "conversation_1" }] }), { status: 200 });
    });
    const client = createMessengerSocialClient({
      pageAccessToken: "page-token",
      pageId: "page_1",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await expect(client.listConversations({ limit: 5, userId: "psid_1" }))
      .resolves.toMatchObject({ data: [{ id: "conversation_1" }] });
    await expect(client.getConversationMessages("conversation_1", { fields: ["message", "created_time"] }))
      .resolves.toMatchObject({ data: [{ id: "message_1" }] });

    expect(fetchMock).toHaveBeenNthCalledWith(
      1,
      "https://graph.facebook.com/v25.0/page_1/conversations?fields=id%2Cupdated_time%2Cparticipants%2Cmessages%7Bmessage%2Cfrom%2Cto%2Ccreated_time%2Cattachments%7D&limit=5&user_id=psid_1",
      expect.objectContaining({ method: "GET" }),
    );
    expect(fetchMock).toHaveBeenNthCalledWith(
      2,
      "https://graph.facebook.com/v25.0/conversation_1/messages?fields=message%2Ccreated_time",
      expect.objectContaining({ method: "GET" }),
    );
  });

  it("verifies webhook challenge requests", () => {
    expect(verifyMessengerWebhookChallenge({
      mode: "subscribe",
      token: "verify",
      challenge: "challenge-value",
      expectedVerifyToken: "verify",
    })).toBe("challenge-value");
    expect(verifyMessengerWebhookChallenge({
      mode: "subscribe",
      token: "wrong",
      challenge: "challenge-value",
      expectedVerifyToken: "verify",
    })).toBeUndefined();
  });

  it("validates and parses signed Messenger webhooks", async () => {
    const rawBody = JSON.stringify({
      object: "page",
      entry: [{ id: "page_1", messaging: [{ sender: { id: "psid_1" }, message: { text: "Help" } }] }],
    });
    const appSecret = "app-secret";
    const signature = `sha256=${createHmac("sha256", appSecret).update(rawBody).digest("hex")}`;
    const request = new Request("https://example.test/messenger", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-hub-signature-256": signature,
      },
      body: rawBody,
    });

    expect(validateMessengerWebhookSignature({ rawBody, signature, appSecret })).toBe(true);
    const parsed = await parseMessengerWebhook(request, { appSecret });
    expect(parsed.entry?.[0]?.messaging?.[0]).toMatchObject({
      sender: { id: "psid_1" },
      message: { text: "Help" },
    });
  });

  it("reports conformance as credential-blocked until Messenger credentials are configured", async () => {
    const result = await runProviderConformance({
      manifest: messengerSocialProviderManifest,
      channels: [{
        id: "social",
        channel: "social",
        providerPackageIds: [messengerSocialProviderManifest.id],
        enabledCapabilities: ["receive", "send", "draft", "thread", "read-provider-object", "search-provider-object", "media", "social.webhook-signature"],
      }],
      credentialStatuses: messengerSocialCredentialStatuses({}),
      live: {
        enabled: true,
        checks: createMessengerSocialLiveChecks({
          pageAccessToken: "missing",
          pageId: "page_1",
          client: {
            async getPage() {
              return { id: "page_1" };
            },
            async listConversations() {
              return {};
            },
          },
        }),
      },
    });

    expect(result.status).toBe("credential-blocked");
    expect(result.checks.some((check) =>
      check.id === "provider.live.page" && check.status === "credential-blocked"
    )).toBe(true);
  });

  it("passes conformance when Messenger page readiness is configured", async () => {
    const result = await runProviderConformance({
      manifest: messengerSocialProviderManifest,
      channels: [{
        id: "social",
        channel: "social",
        providerPackageIds: [messengerSocialProviderManifest.id],
        enabledCapabilities: ["receive", "send", "draft", "thread", "read-provider-object", "search-provider-object", "media", "social.webhook-signature"],
      }],
      credentialStatuses: messengerSocialCredentialStatuses({
        pageAccessToken: "page-token",
        pageId: "page_1",
        appSecret: "app-secret",
        verifyToken: "verify",
        pageWebhookSubscribed: true,
      }),
      live: {
        enabled: true,
        checks: createMessengerSocialLiveChecks({
          pageAccessToken: "page-token",
          pageId: "page_1",
          client: {
            async getPage() {
              return { id: "page_1", name: "Support Page", category: "Business" };
            },
            async listConversations() {
              return {};
            },
          },
        }),
      },
    });

    expect(result.status).toBe("passed");
    expect(result.checks).toContainEqual(expect.objectContaining({
      id: "provider.live.page",
      status: "passed",
    }));
  });
});
