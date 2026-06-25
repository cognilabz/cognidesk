import { createHmac } from "node:crypto";
import { readFile } from "node:fs/promises";
import { FacebookAdsApi } from "facebook-nodejs-business-sdk";
import { describe, expect, it, vi } from "vitest";
import { assertIntegrationConformance } from "@cognidesk/integration-kit/testing";
import {
  createInstagramSocialClient,
  createInstagramTextMessage,
  defineInstagramSocialIntegration,
  instagramHostClientSupportSlice,
  instagramSocialProviderManifest,
  instagramSocialSupportSlice,
  normalizeInstagramWebhookEvents,
  parseInstagramWebhook,
  type InstagramMetaProviderClient,
  validateInstagramWebhookSignature,
} from "../src/index.js";

describe("@cognidesk/integration-social-instagram", () => {
  it("declares split-package metadata and bound operations", () => {
    expect(instagramSocialProviderManifest).toMatchObject({
      id: "social.instagram",
      packageName: "@cognidesk/integration-social-instagram",
      category: "social",
      provider: "instagram",
      coverage: { scope: "support-workflow-subset" },
    });
    expect(instagramSocialProviderManifest.coverage.notes.join(" "))
      .toContain("does not implement the broader Instagram Platform");
    expect(instagramSocialProviderManifest.metadata?.providerClient).toMatchObject({
      interface: "InstagramMetaProviderClient",
      importPolicy: "provider-client-override-supported",
      defaultClientPolicy: "facebook-nodejs-business-sdk-when-configured",
    });
    expect(instagramHostClientSupportSlice).toBe(instagramSocialSupportSlice);
    expect(instagramHostClientSupportSlice.implementationStrategy)
      .toBe("provider-sdk-default-with-typed-domain-adapter");
    expect(instagramHostClientSupportSlice.sdkDecision).toContain("facebook-nodejs-business-sdk");
    expect(instagramHostClientSupportSlice.sdkDecision).toContain("FacebookAdsApi.call");
    const integration = defineInstagramSocialIntegration({
      pageId: "page_1",
      instagramBusinessAccountId: "ig_1",
      appSecret: "secret",
      providerClient: fakeProviderClient(),
    });
    expect(() => assertIntegrationConformance(integration)).not.toThrow();
  });

  it("declares and imports the Meta Business SDK as the default runtime dependency", async () => {
    const packageJson = JSON.parse(await readFile(new URL("../package.json", import.meta.url), "utf8")) as {
      dependencies?: Record<string, string>;
      devDependencies?: Record<string, string>;
    };
    const clientSource = await readFile(new URL("../src/client.ts", import.meta.url), "utf8");

    expect(packageJson.dependencies ?? {}).toHaveProperty("facebook-nodejs-business-sdk");
    expect(packageJson.devDependencies ?? {}).not.toHaveProperty("facebook-nodejs-business-sdk");
    expect(clientSource).toContain("from \"facebook-nodejs-business-sdk\"");
    expect(clientSource).toContain("FacebookAdsApi.init");
    expect(clientSource).toContain("api.call");
    expect(instagramSocialProviderManifest.coverage.evidence.map((evidence) => evidence.url))
      .toContain("https://github.com/facebook/facebook-nodejs-business-sdk");
  });

  it("keeps the manifest entry metadata-only", async () => {
    const source = await readFile(new URL("../src/manifest.ts", import.meta.url), "utf8");
    expect(source).not.toContain("from \"./client");
    expect(source).not.toContain("from \"./request");
    expect(source).not.toContain("direct-graph-support-slice");
    expect(JSON.stringify(instagramSocialProviderManifest.metadata?.implementation)).not.toContain("direct-http");
    expect(JSON.stringify(instagramSocialProviderManifest.metadata?.implementation)).not.toContain("raw Graph default");
    const manifestOnly = await import(new URL("../dist/manifest.js", import.meta.url).href);
    expect(Object.keys(manifestOnly)).toContain("instagramSocialProviderManifest");
    expect(Object.keys(manifestOnly)).not.toContain("createInstagramSocialClient");
  });

  it("delegates provider operations to the host-injected client and preserves webhook verification", async () => {
    const providerClient = fakeProviderClient();
    const client = createInstagramSocialClient({
      pageId: "page_1",
      instagramBusinessAccountId: "ig_1",
      providerClient,
    });
    await client.sendTextMessage({ recipientId: "igsid_1", text: "Hello" });
    await client.listConversations({ limit: 10 });
    expect(providerClient.sendMessage).toHaveBeenCalledWith({
      recipient: { id: "igsid_1" },
      message: { text: "Hello" },
      senderId: "page_1",
    });
    expect(providerClient.listConversations).toHaveBeenCalledWith({
      limit: 10,
      accountId: "ig_1",
    });

    const body = JSON.stringify({ object: "instagram", entry: [] });
    const signature = `sha256=${createHmac("sha256", "secret").update(body).digest("hex")}`;
    expect(validateInstagramWebhookSignature({ appSecret: "secret", rawBody: body, signature })).toBe(true);
    const integration = defineInstagramSocialIntegration({
      pageId: "page_1",
      instagramBusinessAccountId: "ig_1",
      appSecret: "secret",
      providerClient,
    });
    await expect(integration.run("instagram.webhook-signature", {
      appSecret: "attacker",
      rawBody: body,
      signature,
    })).resolves.toBe(true);
    const attackerSignature = `sha256=${createHmac("sha256", "attacker").update(body).digest("hex")}`;
    await expect(integration.run("instagram.webhook-signature", {
      appSecret: "attacker",
      rawBody: body,
      signature: attackerSignature,
    })).resolves.toBe(false);
    const request = new Request("https://example.test/webhook", {
      method: "POST",
      headers: { "x-hub-signature-256": signature },
      body,
    });
    await expect(parseInstagramWebhook(request, { appSecret: "secret" }))
      .resolves.toMatchObject({ payload: { object: "instagram" } });
  });

  it("uses facebook-nodejs-business-sdk for built-in Graph calls by default", async () => {
    const sdkCall = vi.fn(async () => ({ data: [] }));
    const initSpy = vi.spyOn(FacebookAdsApi, "init")
      .mockReturnValue({ call: sdkCall } as unknown as FacebookAdsApi);

    try {
      const client = createInstagramSocialClient({
        pageAccessToken: "page-token",
        pageId: "page_1",
        instagramBusinessAccountId: "ig_1",
      });

      await client.sendTextMessage({ recipientId: "igsid_1", text: "Hello" });
      await client.listConversations({ limit: 2, after: "cursor_1" });

      expect(initSpy).toHaveBeenCalledWith("page-token", "en_US", false);
      expect(sdkCall).toHaveBeenCalledWith("POST", ["page_1", "messages"], {
        recipient: { id: "igsid_1" },
        message: { text: "Hello" },
      });
      expect(sdkCall).toHaveBeenCalledWith("GET", ["ig_1", "conversations"], expect.objectContaining({
        platform: "instagram",
        limit: 2,
        after: "cursor_1",
      }));
    } finally {
      initSpy.mockRestore();
    }
  });

  it("uses the typed REST adapter when callers provide custom transport options", async () => {
    const fetchMock = vi.fn(async (url: string | URL | Request, init?: RequestInit) => {
      const requestUrl = String(url);
      const body = requestUrl.endsWith("/messages")
        ? { message_id: "mid.1", recipient_id: "igsid_1" }
        : { data: [] };
      return new Response(JSON.stringify(body), {
        status: 200,
        headers: { "content-type": "application/json" },
      });
    });
    const client = createInstagramSocialClient({
      pageAccessToken: "page-token",
      pageId: "page/1",
      instagramBusinessAccountId: "ig_1",
      graphApiBaseUrl: "https://graph.example.test/",
      graphApiVersion: "/v99.0/",
      fetch: fetchMock,
    });

    await expect(client.sendTextMessage({ recipientId: "igsid_1", text: "Hello" }))
      .resolves.toMatchObject({ message_id: "mid.1" });
    await expect(client.listConversations({ limit: 10, after: "cursor_1" }))
      .resolves.toMatchObject({ data: [] });

    expect(fetchMock).toHaveBeenCalledTimes(2);
    const sendUrl = new URL(String(fetchMock.mock.calls[0]?.[0]));
    const sendInit = fetchMock.mock.calls[0]?.[1] as RequestInit;
    expect(sendUrl.href).toBe("https://graph.example.test/v99.0/page%2F1/messages");
    expect(sendInit.method).toBe("POST");
    expect(sendInit.headers).toMatchObject({
      accept: "application/json",
      authorization: "Bearer page-token",
      "content-type": "application/json",
    });
    expect(JSON.parse(String(sendInit.body))).toEqual({
      recipient: { id: "igsid_1" },
      message: { text: "Hello" },
    });

    const conversationsUrl = new URL(String(fetchMock.mock.calls[1]?.[0]));
    expect(conversationsUrl.pathname).toBe("/v99.0/ig_1/conversations");
    expect(conversationsUrl.searchParams.get("platform")).toBe("instagram");
    expect(conversationsUrl.searchParams.get("limit")).toBe("10");
    expect(conversationsUrl.searchParams.get("after")).toBe("cursor_1");
    expect(conversationsUrl.searchParams.get("fields")).toContain("messages.limit(10)");
  });

  it("ships a Graph API adapter but fails closed without credentials", () => {
    expect(() => createInstagramSocialClient({ pageId: "page_1" }))
      .toThrow("Instagram built-in Graph API adapter requires accessToken");
    expect(() => defineInstagramSocialIntegration({ appSecret: "secret" }))
      .toThrow("Instagram built-in Graph API adapter requires accessToken");
  });

  it("fails closed before Graph requests for malformed provider clients and missing identifiers", async () => {
    const fetchMock = vi.fn(async () => new Response(JSON.stringify({}), { status: 200 }));
    expect(() => createInstagramSocialClient({
      providerClient: { sendMessage: vi.fn() } as unknown as InstagramMetaProviderClient,
    })).toThrow("listConversations");
    const client = createInstagramSocialClient({
      pageAccessToken: "page-token",
      pageId: "page_1",
      instagramBusinessAccountId: "ig_1",
      fetch: fetchMock,
    });

    expect(() => createInstagramTextMessage({ recipientId: "", text: "Hi" }))
      .toThrow("Instagram recipient ID is required to build a text message.");
    expect(() => createInstagramTextMessage({ recipientId: "igsid_1", text: " " }))
      .toThrow("Instagram message text is required to build a text message.");
    await expect(client.listConversationMessages(""))
      .rejects.toThrow("Instagram conversation ID is required to list conversation messages.");
    await expect(client.getMessage(" "))
      .rejects.toThrow("Instagram message ID is required to read a message.");
    await expect(client.sendMessage({ recipient: { id: "" }, message: { text: "Hi" } }))
      .rejects.toThrow("Instagram recipient ID is required to send messages.");
    await expect(client.sendMessage({ recipient: { id: "igsid_1" }, message: [] as never }))
      .rejects.toThrow("Instagram message payload is required to send messages.");
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("normalizes inbound message webhook events", () => {
    const delivery = { sender: { id: "igsid_1" }, message: { mid: "m_1", text: "Hi" } };

    expect(normalizeInstagramWebhookEvents({
      entry: [{ messaging: [delivery] }],
    })).toEqual([
      {
        type: "social.message.received",
        provider: "instagram",
        message: { mid: "m_1", text: "Hi" },
        raw: delivery,
      },
    ]);
  });

  it.each([
    ["missing message", {}],
    ["null message", { message: null }],
    ["array message", { message: [{ mid: "m_1", text: "Hi" }] }],
    ["string message", { message: "Hi" }],
  ])("skips inbound message webhook events with %s", (_name, malformedFields) => {
    const delivery = {
      sender: { id: "igsid_1" },
      timestamp: 1_718_000_000_000,
      ...malformedFields,
    };

    expect(normalizeInstagramWebhookEvents({
      entry: [{ messaging: [delivery as never] }],
    })).toEqual([]);
  });
});

function fakeProviderClient() {
  return {
    sendMessage: vi.fn(async () => ({ message_id: "mid.1" })),
    listConversations: vi.fn(async () => ({ data: [] })),
    listConversationMessages: vi.fn(async () => ({ data: [] })),
    getMessage: vi.fn(async () => ({ id: "mid.1" })),
    getInstagramBusinessAccount: vi.fn(async () => ({ id: "ig_1", username: "example" })),
    getPage: vi.fn(async () => ({ id: "page_1", name: "Example Page" })),
  };
}
