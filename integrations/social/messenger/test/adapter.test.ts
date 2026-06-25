import { createHmac } from "node:crypto";
import { readFile } from "node:fs/promises";
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
      defaultClientPolicy: "provider-rest-adapter-when-configured",
    });
    const integration = defineMessengerSocialIntegration({
      pageAccessToken: "token",
      pageId: "page_1",
      appSecret: "secret",
      providerClient: fakeMessengerProviderClient(),
    });
    expect(() => assertIntegrationConformance(integration)).not.toThrow();
  });

  it("keeps the manifest entry metadata-only and host-client based", async () => {
    const source = await readFile(new URL("../src/manifest.ts", import.meta.url), "utf8");
    expect(source).not.toContain("./client");
    expect(source).not.toContain("./request");
    expect(source).not.toContain("facebook-nodejs-business-sdk");
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

  it("requires Graph API credentials for the built-in Messenger provider client", async () => {
    expect(() => createMessengerSocialClient()).toThrow("accessToken");

    expect(() => defineMessengerSocialIntegration({ appSecret: "secret" }))
      .toThrow("accessToken");
  });

  it("ships package-owned Graph request defaults for the built-in provider adapter", async () => {
    const clientSource = await readFile(new URL("../src/client.ts", import.meta.url), "utf8");
    expect(clientSource).toContain("fetch");
    expect(clientSource).toContain("graphApiBaseUrl");
    expect(clientSource).toContain("graphApiVersion");
    expect(clientSource).toContain("messengerRequest");
    expect(clientSource).toContain("./request");
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
