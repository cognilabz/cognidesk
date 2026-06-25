import { createHmac } from "node:crypto";
import { readFile } from "node:fs/promises";
import { describe, expect, it, vi } from "vitest";
import { assertIntegrationConformance } from "@cognidesk/integration-kit/testing";
import {
  createInstagramSocialClient,
  defineInstagramSocialIntegration,
  instagramHostClientSupportSlice,
  instagramSocialProviderManifest,
  instagramSocialSupportSlice,
  normalizeInstagramWebhookEvents,
  parseInstagramWebhook,
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
      defaultClientPolicy: "provider-rest-adapter-when-configured",
    });
    expect(instagramHostClientSupportSlice).toBe(instagramSocialSupportSlice);
    expect(instagramHostClientSupportSlice.implementationStrategy).toBe("no-official-sdk-rest-adapter");
    const integration = defineInstagramSocialIntegration({
      pageId: "page_1",
      instagramBusinessAccountId: "ig_1",
      appSecret: "secret",
      providerClient: fakeProviderClient(),
    });
    expect(() => assertIntegrationConformance(integration)).not.toThrow();
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

  it("ships a Graph API adapter but fails closed without credentials", () => {
    expect(() => createInstagramSocialClient({ pageId: "page_1" }))
      .toThrow("Instagram built-in Graph API adapter requires accessToken");
    expect(() => defineInstagramSocialIntegration({ appSecret: "secret" }))
      .toThrow("Instagram built-in Graph API adapter requires accessToken");
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
