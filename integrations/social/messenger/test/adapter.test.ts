import { createHmac } from "node:crypto";
import { readFile } from "node:fs/promises";
import { describe, expect, it, vi } from "vitest";
import { assertIntegrationConformance } from "@cognidesk/integration-kit/testing";
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
    const integration = defineMessengerSocialIntegration({
      pageAccessToken: "token",
      pageId: "page_1",
      appSecret: "secret",
      fetch: vi.fn() as unknown as typeof fetch,
    });
    expect(() => assertIntegrationConformance(integration)).not.toThrow();
  });

  it("keeps the manifest entry metadata-only", async () => {
    const source = await readFile(new URL("../src/manifest.ts", import.meta.url), "utf8");
    expect(source).not.toContain("./client");
    expect(source).not.toContain("./request");
    expect(source).not.toContain("facebook-nodejs-business-sdk");
    const manifestOnly = await import(new URL("../dist/manifest.js", import.meta.url).href);
    expect(Object.keys(manifestOnly)).toEqual(["messengerSocialProviderManifest"]);
  });

  it("preserves raw client access and webhook verification", async () => {
    const fetchMock = vi.fn(async () => new Response(JSON.stringify({ message_id: "mid.1" })));
    const client = createMessengerSocialClient({
      pageAccessToken: "token",
      pageId: "page_1",
      fetch: fetchMock as unknown as typeof fetch,
    });
    await client.sendText({ recipientId: "psid_1", text: "Hello" });
    expect(fetchMock).toHaveBeenCalledWith(
      "https://graph.facebook.com/v25.0/page_1/messages",
      expect.objectContaining({ method: "POST" }),
    );

    const body = JSON.stringify({ object: "page", entry: [] });
    const signature = `sha256=${createHmac("sha256", "secret").update(body).digest("hex")}`;
    expect(validateMessengerWebhookSignature({ appSecret: "secret", rawBody: body, signature })).toBe(true);
    const integration = defineMessengerSocialIntegration({
      pageAccessToken: "token",
      pageId: "page_1",
      appSecret: "secret",
      fetch: fetchMock as unknown as typeof fetch,
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
