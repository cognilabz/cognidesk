import { createHmac } from "node:crypto";
import { readFile } from "node:fs/promises";
import { FacebookAdsApi } from "facebook-nodejs-business-sdk";
import { describe, expect, it, vi } from "vitest";
import { assertIntegrationConformance } from "@cognidesk/integration-kit/testing";
import type { MessengerSocialProviderClient } from "../src/index.js";
import {
  createMessengerSocialClient,
  defineMessengerSocialIntegration,
  messengerSocialProviderManifest,
  normalizeMessengerWebhookEvents,
  parseMessengerWebhook,
  validateMessengerWebhookSignature,
} from "../src/index.js";

describe("@cognidesk/integration-social-messenger", () => {
  it("declares split-package metadata and bound operations", () => {
    expect(messengerSocialProviderManifest).toMatchObject({
      id: "social.messenger",
      packageName: "@cognidesk/integration-social-messenger",
      category: "social",
      provider: "messenger",
      coverage: { scope: "support-workflow-subset" },
    });
    expect(messengerSocialProviderManifest.metadata?.apiCoverage).toMatchObject({
      fullMetaGraphCoverage: false,
    });
    expect(messengerSocialProviderManifest.metadata?.providerClient).toMatchObject({
      interface: "MessengerSocialProviderClient",
      importPolicy: "provider-client-override-supported",
      defaultClientPolicy: "facebook-nodejs-business-sdk-when-configured",
    });
    expect(messengerSocialProviderManifest.metadata?.implementation).toMatchObject({
      implementationStrategy: "provider-sdk-default-with-typed-domain-adapter",
      providerSdk: expect.objectContaining({
        package: "facebook-nodejs-business-sdk",
        runtimeCall: "FacebookAdsApi.call",
      }),
    });
    const integration = defineMessengerSocialIntegration({
      pageAccessToken: "token",
      pageId: "page_1",
      appSecret: "secret",
      providerClient: fakeMessengerProviderClient(),
    });
    expect(() => assertIntegrationConformance(integration)).not.toThrow();
  });

  it("keeps the manifest entry metadata-only while the runtime imports the Meta SDK", async () => {
    const source = await readFile(new URL("../src/manifest.ts", import.meta.url), "utf8");
    const clientSource = await readFile(new URL("../src/client.ts", import.meta.url), "utf8");
    const packageJson = JSON.parse(await readFile(new URL("../package.json", import.meta.url), "utf8")) as {
      dependencies?: Record<string, string>;
      cognidesk?: { providerSdkDependencies?: string[] };
    };

    expect(source).not.toContain("./client");
    expect(source).not.toContain("./request");
    expect(source).not.toContain("from \"facebook-nodejs-business-sdk\"");
    expect(source).not.toContain("from 'facebook-nodejs-business-sdk'");
    expect(packageJson.dependencies ?? {}).toHaveProperty("facebook-nodejs-business-sdk");
    expect(packageJson.cognidesk?.providerSdkDependencies).toEqual(["facebook-nodejs-business-sdk"]);
    expect(clientSource).toContain("from \"facebook-nodejs-business-sdk\"");
    expect(clientSource).toContain("FacebookAdsApi.init");
    expect(clientSource).toContain("api.call");
    expect(JSON.stringify(messengerSocialProviderManifest.metadata)).not.toContain("direct-http");
    expect(JSON.stringify(messengerSocialProviderManifest.metadata)).not.toContain("raw Graph");
    const manifestOnly = await import(new URL("../dist/manifest.js", import.meta.url).href);
    expect(Object.keys(manifestOnly).sort()).toEqual([
      "messengerSocialOperationAliases",
      "messengerSocialProviderClientSupportSlice",
      "messengerSocialProviderManifest",
      "messengerSocialSupportSlice",
    ]);
  });

  it("delegates normalized operations to the injected provider client and preserves webhook verification", async () => {
    const providerClient = fakeMessengerProviderClient();
    const client = createMessengerSocialClient({
      providerClient,
    });
    await client.sendText({ recipientId: "psid_1", text: "Hello" });
    await client.uploadAttachment({ type: "image", url: "https://cdn.example.test/image.png" });
    await client.listConversations();
    expect(providerClient.sendMessage).toHaveBeenCalledWith({
      recipient: { id: "psid_1" },
      messaging_type: "RESPONSE",
      message: { text: "Hello" },
    });
    expect(providerClient.uploadAttachment).toHaveBeenCalledWith({
      message: {
        attachment: {
          type: "image",
          payload: {
            is_reusable: true,
            url: "https://cdn.example.test/image.png",
          },
        },
      },
    });
    expect(providerClient.listConversations).toHaveBeenCalledWith({
      fields: ["id", "updated_time", "participants", "messages{message,from,to,created_time,attachments}"],
    });

    const body = JSON.stringify({ object: "page", entry: [] });
    const signature = `sha256=${createHmac("sha256", "secret").update(body).digest("hex")}`;
    expect(validateMessengerWebhookSignature({ appSecret: "secret", rawBody: body, signature })).toBe(true);
    const integration = defineMessengerSocialIntegration({
      pageAccessToken: "token",
      pageId: "page_1",
      appSecret: "secret",
      providerClient,
    });
    await expect(integration.run("messenger.webhook-signature", {
      appSecret: "attacker",
      rawBody: body,
      signature,
    })).resolves.toBe(true);
    const attackerSignature = `sha256=${createHmac("sha256", "attacker").update(body).digest("hex")}`;
    await expect(integration.run("messenger.webhook-signature", {
      appSecret: "attacker",
      rawBody: body,
      signature: attackerSignature,
    })).resolves.toBe(false);
    const request = new Request("https://example.test/webhook", {
      method: "POST",
      headers: { "x-hub-signature-256": signature },
      body,
    });
    await expect(parseMessengerWebhook(request, { appSecret: "secret" }))
      .resolves.toMatchObject({ object: "page" });
  });

  it("uses facebook-nodejs-business-sdk for built-in Messenger Graph calls by default", async () => {
    const sdkCall = vi.fn(async () => ({ data: [] }));
    const initSpy = vi.spyOn(FacebookAdsApi, "init")
      .mockReturnValue({ call: sdkCall } as unknown as FacebookAdsApi);

    try {
      const client = createMessengerSocialClient({
        pageAccessToken: "token",
        pageId: "page_1",
      });

      await client.sendText({ recipientId: "psid_1", text: "Hello" });
      await client.listConversations({ limit: 2, after: "cursor_1" });

      expect(initSpy).toHaveBeenCalledWith("token", "en_US", false);
      expect(sdkCall).toHaveBeenCalledWith("POST", ["page_1", "messages"], {
        recipient: { id: "psid_1" },
        messaging_type: "RESPONSE",
        message: { text: "Hello" },
      });
      expect(sdkCall).toHaveBeenCalledWith("GET", ["page_1", "conversations"], expect.objectContaining({
        limit: 2,
        after: "cursor_1",
      }));
    } finally {
      initSpy.mockRestore();
    }
  });

  it("requires Graph API credentials for the built-in Messenger provider client", async () => {
    expect(() => createMessengerSocialClient()).toThrow("accessToken");

    expect(() => defineMessengerSocialIntegration({ appSecret: "secret" }))
      .toThrow("accessToken");
  });

  it("fails closed for non-Meta Graph adapter configuration", () => {
    expect(() => createMessengerSocialClient({
      pageAccessToken: "token",
      pageId: "page_1",
      graphApiBaseUrl: "https://example.test",
    })).toThrow("only supports graph.facebook.com");

    expect(() => createMessengerSocialClient({
      pageAccessToken: "token",
      pageId: "page_1",
      graphApiVersion: "v25.0/messages",
    })).toThrow("version like v25.0");
  });

  it("keeps package-owned Graph REST fallback code for custom transport options", async () => {
    const clientSource = await readFile(new URL("../src/client.ts", import.meta.url), "utf8");
    expect(clientSource).toContain("fetch");
    expect(clientSource).toContain("graphApiBaseUrl");
    expect(clientSource).toContain("graphApiVersion");
    expect(clientSource).toContain("messengerRequest");
    expect(clientSource).toContain("./request");
  });

  it("sends through the selected Messenger Graph REST endpoint with a normalized body", async () => {
    const fetchMock = vi.fn(async () => new Response(JSON.stringify({
      recipient_id: "psid_1",
      message_id: "mid.1",
    }), {
      status: 200,
      headers: { "content-type": "application/json" },
    }));
    const client = createMessengerSocialClient({
      pageAccessToken: "token",
      pageId: "page_1",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await expect(client.sendText({ recipientId: "psid_1", text: "Hello" }))
      .resolves.toMatchObject({ message_id: "mid.1" });

    expect(fetchMock).toHaveBeenCalledTimes(1);
    const [url, init] = fetchMock.mock.calls[0] as unknown as [string, RequestInit];
    expect(url).toBe("https://graph.facebook.com/v25.0/page_1/messages");
    expect(init.method).toBe("POST");
    expect(init.headers).toMatchObject({
      authorization: "Bearer token",
      "content-type": "application/json",
    });
    expect(JSON.parse(String(init.body))).toEqual({
      recipient: { id: "psid_1" },
      messaging_type: "RESPONSE",
      message: { text: "Hello" },
    });
  });

  it("fails closed before delegating malformed side-effect inputs to an injected provider client", async () => {
    const providerClient = fakeMessengerProviderClient();
    const client = createMessengerSocialClient({ providerClient });

    await expect(client.sendMessage({
      recipient: { id: "" },
      message: { text: "Hello" },
    })).rejects.toThrow("recipient.id");
    await expect(client.sendMessage({
      recipient: { id: "psid_1" },
      message: { text: "Hello" },
      senderAction: "typing_on",
    })).rejects.toThrow("exactly one");
    await expect(client.sendMessage({
      recipient: { id: "psid_1" },
      message: { text: "Hello" },
      additionalFields: { message: { text: "override" } },
    })).rejects.toThrow("cannot override message");
    await expect(client.uploadAttachment({
      type: "image",
      url: "http://cdn.example.test/image.png",
    })).rejects.toThrow("HTTPS URL");
    await expect(client.passThreadControl({
      recipientId: "psid_1",
    } as never)).rejects.toThrow("targetAppId");

    expect(providerClient.sendMessage).not.toHaveBeenCalled();
    expect(providerClient.uploadAttachment).not.toHaveBeenCalled();
    expect(providerClient.passThreadControl).not.toHaveBeenCalled();
  });

  it("passes only typed conversation message query fields from the integration operation", async () => {
    const providerClient = fakeMessengerProviderClient();
    const integration = defineMessengerSocialIntegration({
      pageAccessToken: "token",
      pageId: "page_1",
      appSecret: "secret",
      providerClient,
    });

    await integration.run("messenger.conversationMessages.list", {
      conversationId: "conv_1",
      fields: ["id", "message"],
      limit: 2,
      after: "cursor_1",
    });

    expect(providerClient.getConversationMessages).toHaveBeenCalledWith("conv_1", {
      fields: ["id", "message"],
      limit: 2,
      after: "cursor_1",
    });

    await expect(integration.run("messenger.conversationMessages.list", {
      fields: ["id"],
    })).rejects.toThrow("conversationId");
  });

  it("fails closed for malformed webhook signature inputs", () => {
    expect(validateMessengerWebhookSignature({
      appSecret: "",
      rawBody: "{}",
      signature: "sha256=signature",
    })).toBe(false);
    expect(validateMessengerWebhookSignature({
      appSecret: "secret",
      rawBody: "{}",
      signature: "not-a-signature",
    })).toBe(false);
  });

  it("normalizes inbound message webhook events", () => {
    const delivery = {
      sender: { id: "psid_1" },
      recipient: { id: "page_1" },
      timestamp: 1_718_000_000_000,
      message: { mid: "m_1", text: "Hi" },
    };

    expect(normalizeMessengerWebhookEvents({
      object: "page",
      entry: [{ id: "page_1", time: 1_718_000_000_001, messaging: [delivery] }],
    })).toEqual([{
      type: "social.message.received",
      provider: "messenger",
      message: { mid: "m_1", text: "Hi" },
      raw: delivery,
    }]);
  });

  it.each([
    ["missing message", {}],
    ["null message", { message: null }],
    ["array message", { message: [{ mid: "m_1", text: "Hi" }] }],
    ["string message", { message: "Hi" }],
  ])("skips inbound message webhook events with %s", (_name, malformedFields) => {
    const delivery = {
      sender: { id: "psid_1" },
      recipient: { id: "page_1" },
      timestamp: 1_718_000_000_000,
      ...malformedFields,
    };

    expect(normalizeMessengerWebhookEvents({
      object: "page",
      entry: [{ id: "page_1", time: 1_718_000_000_001, messaging: [delivery] }],
    })).toEqual([]);
  });

  it("skips malformed delivery envelopes before reading message fields", () => {
    const delivery = {
      sender: { id: "psid_1" },
      recipient: { id: "page_1" },
      timestamp: 1_718_000_000_000,
      message: { mid: "m_1", text: "Hi" },
    };

    expect(normalizeMessengerWebhookEvents({
      object: "page",
      entry: [{
        id: "page_1",
        time: 1_718_000_000_001,
        messaging: [null, undefined, "not-an-envelope", delivery] as never,
      }],
    })).toEqual([{
      type: "social.message.received",
      provider: "messenger",
      message: { mid: "m_1", text: "Hi" },
      raw: delivery,
    }]);
  });
});

function fakeMessengerProviderClient(): MessengerSocialProviderClient {
  return {
    sendMessage: vi.fn(async () => ({ message_id: "mid.1" })),
    uploadAttachment: vi.fn(async () => ({ attachment_id: "att.1" })),
    passThreadControl: vi.fn(async () => ({ recipient_id: "psid_1" })),
    takeThreadControl: vi.fn(async () => ({ recipient_id: "psid_1" })),
    requestThreadControl: vi.fn(async () => ({ recipient_id: "psid_1" })),
    listConversations: vi.fn(async () => ({ data: [] })),
    getConversationMessages: vi.fn(async () => ({ data: [] })),
    getPage: vi.fn(async () => ({ id: "page_1", name: "Test Page" })),
  };
}
