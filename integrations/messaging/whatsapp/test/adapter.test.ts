import { createHmac } from "node:crypto";
import { readFile } from "node:fs/promises";
import { describe, expect, it, vi } from "vitest";
import { assertIntegrationConformance } from "@cognidesk/integration-kit/testing";
import {
  createWhatsAppMessagingClient,
  defineWhatsAppMessagingIntegration,
  normalizeWhatsAppWebhookEvents,
  parseWhatsAppWebhook,
  validateWhatsAppWebhookSignature,
  whatsappMessagingProviderManifest,
} from "../src/index.js";

describe("@cognidesk/integration-messaging-whatsapp", () => {
  it("declares split-package metadata and bound operations", () => {
    expect(whatsappMessagingProviderManifest).toMatchObject({
      id: "messaging.whatsapp",
      packageName: "@cognidesk/integration-messaging-whatsapp",
      category: "messaging",
      provider: "whatsapp",
      coverage: { scope: "support-workflow-subset" },
    });
    expect(whatsappMessagingProviderManifest.operations.map((operation) => operation.alias))
      .toEqual(expect.arrayContaining([
        "messaging.message.receive",
        "messaging.message.send",
        "messaging.template.send",
        "messaging.draft.create",
        "messaging.media.send",
        "whatsapp.webhook-signature",
      ]));

    const integration = defineWhatsAppMessagingIntegration({
      accessToken: "token",
      phoneNumberId: "phone_1",
      appSecret: "secret",
      fetch: vi.fn() as unknown as typeof fetch,
    });
    expect(() => assertIntegrationConformance(integration)).not.toThrow();
  });

  it("keeps the manifest entry metadata-only", async () => {
    const source = await readFile(new URL("../src/manifest.ts", import.meta.url), "utf8");
    expect(source).not.toContain("./client");
    expect(source).not.toContain("./request");
    const manifestOnly = await import(new URL("../dist/manifest.js", import.meta.url).href);
    expect(Object.keys(manifestOnly)).toEqual(["whatsappMessagingProviderManifest"]);
  });

  it("preserves raw client access and webhook verification", async () => {
    const fetchMock = vi.fn(async () => new Response(JSON.stringify({ messages: [{ id: "wamid.1" }] })));
    const client = createWhatsAppMessagingClient({
      accessToken: "token",
      phoneNumberId: "phone_1",
      fetch: fetchMock as unknown as typeof fetch,
    });
    await client.sendMessage({ to: "15550100", type: "text", text: { body: "Hello" } });
    expect(fetchMock).toHaveBeenCalledWith(
      "https://graph.facebook.com/v25.0/phone_1/messages",
      expect.objectContaining({ method: "POST" }),
    );

    const body = JSON.stringify({ object: "whatsapp_business_account", entry: [] });
    const signature = `sha256=${createHmac("sha256", "secret").update(body).digest("hex")}`;
    expect(validateWhatsAppWebhookSignature({ appSecret: "secret", rawBody: body, signature })).toBe(true);
    const integration = defineWhatsAppMessagingIntegration({
      accessToken: "token",
      phoneNumberId: "phone_1",
      appSecret: "secret",
      fetch: fetchMock as unknown as typeof fetch,
    });
    await expect(integration.run("whatsapp.webhook-signature", {
      appSecret: "attacker",
      rawBody: body,
      signature,
    })).resolves.toBe(true);
    const attackerSignature = `sha256=${createHmac("sha256", "attacker").update(body).digest("hex")}`;
    await expect(integration.run("whatsapp.webhook-signature", {
      appSecret: "attacker",
      rawBody: body,
      signature: attackerSignature,
    })).resolves.toBe(false);
    const request = new Request("https://example.test/webhook", {
      method: "POST",
      headers: { "x-hub-signature-256": signature },
      body,
    });
    await expect(parseWhatsAppWebhook(request, { appSecret: "secret" }))
      .resolves.toMatchObject({ payload: { object: "whatsapp_business_account" } });
  });

  it("normalizes inbound message and delivery webhook events", () => {
    const change = {
      value: {
        contacts: [{ wa_id: "15550100" }],
        messages: [{ id: "wamid.inbound", text: { body: "Hi" } }],
        statuses: [{ id: "wamid.outbound", status: "delivered" }],
      },
    };

    expect(normalizeWhatsAppWebhookEvents({
      entry: [{
        changes: [change],
      }],
    })).toEqual([
      {
        type: "messaging.message.received",
        provider: "whatsapp",
        message: { id: "wamid.inbound", text: { body: "Hi" } },
        contact: { wa_id: "15550100" },
        raw: change,
      },
      {
        type: "messaging.delivery.updated",
        provider: "whatsapp",
        status: { id: "wamid.outbound", status: "delivered" },
        raw: change,
      },
    ]);
  });

  it("ignores malformed webhook collection fields", () => {
    expect(normalizeWhatsAppWebhookEvents({
      entry: [{
        changes: [{
          value: {
            contacts: "not-contacts" as never,
            messages: "not-messages" as never,
            statuses: { id: "not-statuses" } as never,
          },
        }],
      }],
    })).toEqual([]);

    const change = {
      value: {
        contacts: "not-contacts" as never,
        messages: [{ id: "wamid.inbound" }],
        statuses: "not-statuses" as never,
      },
    };
    expect(normalizeWhatsAppWebhookEvents({
      entry: [{ changes: [change] }],
    })).toEqual([{
      type: "messaging.message.received",
      provider: "whatsapp",
      message: { id: "wamid.inbound" },
      contact: undefined,
      raw: change,
    }]);
  });
});
