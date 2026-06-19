import { createHmac } from "node:crypto";
import { describe, expect, it, vi } from "vitest";
import { runProviderConformance } from "@cognidesk/test-harness";
import {
  createInstagramSocialClient,
  createInstagramSocialLiveChecks,
  createInstagramTextMessage,
  instagramSocialCredentialStatuses,
  instagramSocialProviderManifest,
  parseInstagramWebhook,
  validateInstagramWebhookSignature,
  verifyInstagramWebhookChallenge,
} from "../../../src/social/instagram/index.js";

describe("@cognidesk/integrations", () => {
  it("exports an official provider manifest for Instagram social DMs", () => {
    expect(instagramSocialProviderManifest).toMatchObject({
      id: "social.instagram",
      packageName: "@cognidesk/integrations",
      category: "social",
      provider: "instagram",
      trustLevel: "official",
    });
    expect(instagramSocialProviderManifest.capabilities.map((capability) => capability.capability))
      .toEqual(expect.arrayContaining([
        "receive",
        "send",
        "draft",
        "thread",
        "read-provider-object",
        "search-provider-object",
        "social.webhook-signature",
      ]));
    expect(instagramSocialProviderManifest.credentialRequirements.map((requirement) => requirement.id))
      .toEqual([
        "instagram-page-access-token",
        "instagram-page-id",
        "instagram-business-account-id",
        "instagram-app-secret",
        "instagram-webhook-verify-token",
        "instagram-page-webhook-subscription",
        "instagram-permissions",
      ]);
    expect(instagramSocialProviderManifest.credentialRequirements.find((requirement) =>
      requirement.id === "instagram-page-access-token"
    )?.scopes).toEqual(expect.arrayContaining(["pages_manage_metadata"]));
    expect(instagramSocialProviderManifest.coverage).toMatchObject({
      scope: "support-workflow-subset",
    });
    expect(instagramSocialProviderManifest.coverage.notes.join(" "))
      .toContain("does not implement the broader Instagram Platform");
    expect(instagramSocialProviderManifest.coverage.notes.join(" "))
      .toContain("does not implement the separate Instagram API with Instagram Login messaging surface");
    expect(instagramSocialProviderManifest.metadata?.apiCoverage).toMatchObject({
      operationCatalog: "docs/provider-coverage/instagram-messaging-graph-selected-api-2026-06-18.operations.json",
      generatedFromOfficialSpec: false,
      selectedOperationCount: 6,
      implementedOperationCount: 6,
      fullProviderApi: false,
      fullMetaGraphCoverage: false,
    });
    const receive = instagramSocialProviderManifest.capabilities.find((capability) => capability.capability === "receive");
    const send = instagramSocialProviderManifest.capabilities.find((capability) => capability.capability === "send");
    expect(receive?.description).toContain("subscribed to Instagram messaging webhook fields");
    expect(send?.description).toContain("24-hour response window");
    expect(send?.description).toContain("HUMAN_AGENT");
    expect(send?.description).toContain("7 days");
    expect(instagramSocialProviderManifest.limitations.join(" ")).toContain("Meta app review");
    expect(instagramSocialProviderManifest.limitations.join(" ")).toContain("webhook field subscriptions");
    expect(instagramSocialProviderManifest.limitations.join(" ")).toContain("does not inherit general Messenger message tags");
    expect(instagramSocialProviderManifest.coverage.evidence.map((evidence) => evidence.url))
      .toEqual(expect.arrayContaining([
        "https://developers.facebook.com/documentation/business-messaging/instagram-messaging/overview",
        "https://developers.facebook.com/documentation/business-messaging/instagram-messaging/features/send-message",
        "https://developers.facebook.com/documentation/business-messaging/instagram-messaging/webhooks",
      ]));
    expect(instagramSocialProviderManifest.coverage.evidence.map((evidence) => evidence.url))
      .not.toContain("https://developers.facebook.com/docs/instagram-platform/instagram-api-with-instagram-login/conversations-api/");
  });

  it("reports SDK-user-owned credential and permission readiness", () => {
    const statuses = instagramSocialCredentialStatuses({
      pageAccessToken: "token",
      pageId: "page_1",
      instagramBusinessAccountId: "ig_1",
      appSecret: "secret",
      verifyToken: "verify",
      permissions: ["instagram_manage_messages", "instagram_basic"],
    });

    expect(statuses).toContainEqual(expect.objectContaining({
      requirementId: "instagram-page-access-token",
      state: "configured",
    }));
    expect(statuses).toContainEqual(expect.objectContaining({
      requirementId: "instagram-permissions",
      state: "insufficient-scope",
    }));
  });

  it("sends Instagram text messages through the Graph API messages endpoint", async () => {
    const fetchMock = vi.fn(async () =>
      new Response(JSON.stringify({
        recipient_id: "igsid_1",
        message_id: "mid.$message",
      }), { status: 200 })
    );
    const client = createInstagramSocialClient({
      accessToken: "page-token",
      pageId: "page_1",
      instagramBusinessAccountId: "ig_1",
      fetch: fetchMock as unknown as typeof fetch,
    });

    const sent = await client.sendTextMessage({
      recipientId: "igsid_1",
      text: "Your order is ready.",
      messagingType: "RESPONSE",
    });

    expect(sent.message_id).toBe("mid.$message");
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
      recipient: { id: "igsid_1" },
      message: { text: "Your order is ready." },
      messaging_type: "RESPONSE",
    });
  });

  it("requires an Instagram Page ID or explicit sender ID before sending", async () => {
    const client = createInstagramSocialClient({
      accessToken: "page-token",
      instagramBusinessAccountId: "ig_1",
      fetch: vi.fn() as unknown as typeof fetch,
    });

    await expect(client.sendTextMessage({
      recipientId: "igsid_1",
      text: "Your order is ready.",
    })).rejects.toThrow("Instagram Page ID is required");
  });

  it("builds message payloads without imposing outbound policy defaults", () => {
    expect(createInstagramTextMessage({
      recipientId: "igsid_1",
      text: "Operator-approved reply.",
      senderId: "page_1",
      tag: "HUMAN_AGENT",
    })).toEqual({
      recipient: { id: "igsid_1" },
      message: { text: "Operator-approved reply." },
      senderId: "page_1",
      tag: "HUMAN_AGENT",
    });
  });

  it("reads account, page, conversations, and messages where Graph APIs support it", async () => {
    const fetchMock = vi.fn(async (url: string) => {
      if (url.includes("/ig_1/conversations")) {
        return new Response(JSON.stringify({ data: [{ id: "conversation_1" }] }), { status: 200 });
      }
      if (url.includes("/conversation_1/messages")) {
        return new Response(JSON.stringify({ data: [{ id: "message_1", message: "Help" }] }), { status: 200 });
      }
      if (url.includes("/message_1")) {
        return new Response(JSON.stringify({ id: "message_1", message: "Help" }), { status: 200 });
      }
      if (url.includes("/page_1")) {
        return new Response(JSON.stringify({ id: "page_1", name: "Support Page" }), { status: 200 });
      }
      return new Response(JSON.stringify({ id: "ig_1", username: "support" }), { status: 200 });
    });
    const client = createInstagramSocialClient({
      accessToken: "page-token",
      pageId: "page_1",
      instagramBusinessAccountId: "ig_1",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await expect(client.getInstagramBusinessAccount()).resolves.toMatchObject({ id: "ig_1" });
    await expect(client.getPage()).resolves.toMatchObject({ id: "page_1" });
    const conversations = await client.listConversations({ limit: 5, after: "cursor" });
    const messages = await client.listConversationMessages("conversation_1", { fields: ["id", "message"] });
    await expect(client.getMessage("message_1", ["id", "message"])).resolves.toMatchObject({ id: "message_1" });

    expect(conversations.data?.[0]?.id).toBe("conversation_1");
    expect(messages.data?.[0]?.message).toBe("Help");
    expect(fetchMock).toHaveBeenNthCalledWith(
      3,
      "https://graph.facebook.com/v25.0/ig_1/conversations?platform=instagram&fields=id%2Cupdated_time%2Cparticipants%2Cmessages.limit%2810%29%7Bid%2Ccreated_time%2Cfrom%2Cto%2Cmessage%2Cattachments%7D&limit=5&after=cursor",
      expect.objectContaining({ method: "GET" }),
    );
  });

  it("validates and parses signed Instagram webhook JSON", async () => {
    const appSecret = "app-secret";
    const body = JSON.stringify({
      object: "instagram",
      entry: [{
        id: "ig_1",
        messaging: [{
          sender: { id: "igsid_1" },
          recipient: { id: "ig_1" },
          timestamp: 1780000000000,
          message: { mid: "mid.$inbound", text: "Need help" },
        }],
      }],
    });
    const signature = signInstagram(appSecret, body);
    const request = new Request("https://example.test/instagram/webhook", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-hub-signature-256": signature,
      },
      body,
    });

    expect(validateInstagramWebhookSignature({ appSecret, rawBody: body, signature })).toBe(true);
    const parsed = await parseInstagramWebhook(request, { appSecret });
    expect(parsed.payload).toMatchObject({
      object: "instagram",
      entry: [{ messaging: [{ message: { text: "Need help" } }] }],
    });
  });

  it("rejects tampered webhook signatures and verifies webhook challenges", () => {
    const appSecret = "app-secret";
    const body = JSON.stringify({ object: "instagram" });
    const signature = signInstagram(appSecret, body);

    expect(validateInstagramWebhookSignature({
      appSecret,
      rawBody: `${body}\n`,
      signature,
    })).toBe(false);
    expect(verifyInstagramWebhookChallenge({
      mode: "subscribe",
      verifyToken: "verify-token",
      challenge: "challenge-text",
      expectedVerifyToken: "verify-token",
    })).toBe("challenge-text");
    expect(verifyInstagramWebhookChallenge({
      mode: "subscribe",
      verifyToken: "wrong",
      challenge: "challenge-text",
      expectedVerifyToken: "verify-token",
    })).toBeUndefined();
  });

  it("reports live conformance as credential-blocked until Instagram credentials are configured", async () => {
    const result = await runProviderConformance({
      manifest: instagramSocialProviderManifest,
      channels: [{
        id: "social",
        channel: "social",
        providerPackageIds: [instagramSocialProviderManifest.id],
        enabledCapabilities: ["receive", "send", "draft", "thread", "read-provider-object", "search-provider-object"],
      }],
      credentialStatuses: instagramSocialCredentialStatuses({}),
      live: {
        enabled: true,
        checks: createInstagramSocialLiveChecks({
          accessToken: "missing",
          pageId: "page_1",
          instagramBusinessAccountId: "ig_1",
          client: {
            async getInstagramBusinessAccount() {
              return { id: "ig_1", username: "support" };
            },
            async getPage() {
              return { id: "page_1", name: "Support Page" };
            },
          },
        }),
      },
    });

    expect(result.status).toBe("credential-blocked");
    expect(result.checks.some((check) =>
      check.id === "provider.live.account" && check.status === "credential-blocked"
    )).toBe(true);
  });

  it("passes live conformance when Instagram credentials and account checks are configured", async () => {
    const result = await runProviderConformance({
      manifest: instagramSocialProviderManifest,
      channels: [{
        id: "social",
        channel: "social",
        providerPackageIds: [instagramSocialProviderManifest.id],
        enabledCapabilities: ["receive", "send", "draft", "thread", "read-provider-object", "search-provider-object"],
      }],
      credentialStatuses: instagramSocialCredentialStatuses({
        pageAccessToken: "configured",
        pageId: "page_1",
        instagramBusinessAccountId: "ig_1",
        appSecret: "configured",
        verifyToken: "configured",
        permissions: [
          "instagram_manage_messages",
          "instagram_basic",
          "pages_messaging",
          "pages_read_engagement",
          "pages_manage_metadata",
        ],
        pageWebhookSubscribed: true,
      }),
      live: {
        enabled: true,
        checks: createInstagramSocialLiveChecks({
          accessToken: "configured",
          pageId: "page_1",
          instagramBusinessAccountId: "ig_1",
          client: {
            async getInstagramBusinessAccount() {
              return { id: "ig_1", username: "support" };
            },
            async getPage() {
              return { id: "page_1", name: "Support Page" };
            },
          },
        }),
      },
    });

    expect(result.status).toBe("passed");
    expect(result.checks).toContainEqual(expect.objectContaining({
      id: "provider.live.account",
      status: "passed",
    }));
  });
});

function signInstagram(appSecret: string, body: string) {
  return `sha256=${createHmac("sha256", appSecret).update(body).digest("hex")}`;
}
