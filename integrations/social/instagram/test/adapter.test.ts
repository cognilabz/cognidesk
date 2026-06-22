import { createHmac } from "node:crypto";
import { readFile } from "node:fs/promises";
import { describe, expect, it, vi } from "vitest";
import { assertIntegrationConformance } from "@cognidesk/integration-kit/testing";
import {
  createInstagramSocialClient,
  defineInstagramSocialIntegration,
  instagramSocialProviderManifest,
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
    const integration = defineInstagramSocialIntegration({
      accessToken: "token",
      pageId: "page_1",
      instagramBusinessAccountId: "ig_1",
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
    expect(Object.keys(manifestOnly)).toEqual(["instagramSocialProviderManifest"]);
  });

  it("preserves raw client access and webhook verification", async () => {
    const fetchMock = vi.fn(async () => new Response(JSON.stringify({ message_id: "mid.1" })));
    const client = createInstagramSocialClient({
      accessToken: "token",
      pageId: "page_1",
      instagramBusinessAccountId: "ig_1",
      fetch: fetchMock as unknown as typeof fetch,
    });
    await client.sendTextMessage({ recipientId: "igsid_1", text: "Hello" });
    expect(fetchMock).toHaveBeenCalledWith(
      "https://graph.facebook.com/v25.0/page_1/messages",
      expect.objectContaining({ method: "POST" }),
    );

    const body = JSON.stringify({ object: "instagram", entry: [] });
    const signature = `sha256=${createHmac("sha256", "secret").update(body).digest("hex")}`;
    expect(validateInstagramWebhookSignature({ appSecret: "secret", rawBody: body, signature })).toBe(true);
    const integration = defineInstagramSocialIntegration({
      accessToken: "token",
      pageId: "page_1",
      instagramBusinessAccountId: "ig_1",
      appSecret: "secret",
      fetch: fetchMock as unknown as typeof fetch,
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
