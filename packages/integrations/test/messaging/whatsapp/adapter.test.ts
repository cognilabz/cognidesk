import { createHmac } from "node:crypto";
import { describe, expect, it, vi } from "vitest";
import { runProviderConformance } from "@cognidesk/test-harness";
import {
  createWhatsAppMessagingClient,
  createWhatsAppMessagingLiveChecks,
  createWhatsAppTemplateMessage,
  createWhatsAppTextMessage,
  parseWhatsAppWebhook,
  validateWhatsAppWebhookSignature,
  verifyWhatsAppWebhookChallenge,
  whatsappMessagingCredentialStatuses,
  whatsappMessagingProviderManifest,
} from "../../../src/messaging/whatsapp/index.js";

describe("@cognidesk/integrations", () => {
  it("exports an official provider manifest for WhatsApp messaging", () => {
    expect(whatsappMessagingProviderManifest).toMatchObject({
      id: "messaging.whatsapp",
      packageName: "@cognidesk/integrations",
      category: "messaging",
      provider: "whatsapp",
      trustLevel: "official",
      coverage: {
        scope: "support-workflow-subset",
      },
    });
    expect(whatsappMessagingProviderManifest.capabilities.map((capability) => capability.capability))
      .toEqual(expect.arrayContaining([
        "receive",
        "send",
        "draft",
        "media",
        "attach",
        "read-provider-object",
        "update-provider-object",
        "whatsapp.webhook-signature",
      ]));
    expect(whatsappMessagingProviderManifest.credentialRequirements.map((requirement) => requirement.id))
      .toEqual([
        "whatsapp-access-token",
        "whatsapp-phone-number-id",
        "whatsapp-app-secret",
        "whatsapp-webhook-verify-token",
        "whatsapp-waba-webhook-subscription",
      ]);
    expect(whatsappMessagingProviderManifest.coverage.notes.join(" "))
      .toContain("not full WhatsApp Business Platform coverage");
    expect(whatsappMessagingProviderManifest.metadata?.apiCoverage).toMatchObject({
      operationCatalog: "docs/provider-coverage/whatsapp-business-messaging-openapi-v23-selected-api-2026-06-18.operations.json",
      generatedFromOfficialSpec: true,
      sourcePathCount: 78,
      sourceOperationCount: 113,
      selectedOperationCount: 7,
      implementedOperationCount: 7,
      fullProviderApi: false,
      fullMetaGraphCoverage: false,
    });
    const receive = whatsappMessagingProviderManifest.capabilities.find((capability) => capability.capability === "receive");
    const send = whatsappMessagingProviderManifest.capabilities.find((capability) => capability.capability === "send");
    const read = whatsappMessagingProviderManifest.capabilities.find((capability) =>
      capability.capability === "read-provider-object"
    );
    const update = whatsappMessagingProviderManifest.capabilities.find((capability) =>
      capability.capability === "update-provider-object"
    );
    expect(receive?.description).toContain("subscribed to the WABA messages webhook");
    expect(send?.description).toContain("free-form service messages");
    expect(send?.description).toContain("approved templates");
    expect(read?.providerObjects).toEqual(expect.arrayContaining([
      { kind: "whatsappPhoneNumber", label: "WhatsApp Business Phone Number" },
      { kind: "whatsappBusinessProfile", label: "WhatsApp Business Profile" },
    ]));
    expect(update?.providerObjects).toEqual([
      { kind: "whatsappBusinessProfile", label: "WhatsApp Business Profile" },
    ]);
    expect(whatsappMessagingProviderManifest.limitations.join(" ")).toContain("messaging windows");
    expect(whatsappMessagingProviderManifest.limitations.join(" ")).toContain("templates");
    expect(whatsappMessagingProviderManifest.limitations.join(" ")).toContain("WABA messages webhook subscription");
    expect(whatsappMessagingProviderManifest.coverage.evidence.map((evidence) => evidence.url))
      .toEqual(expect.arrayContaining([
        "https://developers.facebook.com/documentation/business-messaging/whatsapp/get-started",
        "https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/overview/",
        "https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/overview",
        "https://developers.facebook.com/documentation/business-messaging/whatsapp/business-phone-numbers/media/",
      ]));
  });

  it("sends WhatsApp text messages through the Cloud API messages endpoint", async () => {
    const fetchMock = vi.fn(async () =>
      new Response(JSON.stringify({
        messaging_product: "whatsapp",
        contacts: [{ input: "15550100", wa_id: "15550100" }],
        messages: [{ id: "wamid.HBgL" }],
      }), { status: 200 })
    );
    const client = createWhatsAppMessagingClient({
      accessToken: "meta-token",
      phoneNumberId: "1234567890",
      fetch: fetchMock as unknown as typeof fetch,
    });

    const result = await client.sendMessage(createWhatsAppTextMessage({
      to: "15550100",
      body: "Your reset link is ready.",
      previewUrl: false,
      contextMessageId: "wamid.parent",
    }));

    expect(result.messages?.[0]?.id).toBe("wamid.HBgL");
    expect(fetchMock).toHaveBeenCalledWith(
      "https://graph.facebook.com/v25.0/1234567890/messages",
      expect.objectContaining({
        method: "POST",
        headers: expect.objectContaining({
          authorization: "Bearer meta-token",
          "content-type": "application/json",
        }),
      }),
    );
    const request = (fetchMock.mock.calls[0] as unknown[])[1] as { body: string };
    expect(JSON.parse(request.body)).toEqual({
      messaging_product: "whatsapp",
      to: "15550100",
      type: "text",
      text: {
        body: "Your reset link is ready.",
        preview_url: false,
      },
      context: { message_id: "wamid.parent" },
    });
  });

  it("sends template messages without imposing SDK policy defaults", async () => {
    const fetchMock = vi.fn(async () =>
      new Response(JSON.stringify({ messages: [{ id: "wamid.template" }] }), { status: 200 })
    );
    const client = createWhatsAppMessagingClient({
      accessToken: "meta-token",
      phoneNumberId: "1234567890",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await client.sendMessage({
      to: "15550100",
      type: "template",
      template: {
        name: "sdk_user_selected_template",
        language: { code: "en_US" },
        components: [],
      },
    });

    const request = (fetchMock.mock.calls[0] as unknown[])[1] as { body: string };
    expect(JSON.parse(request.body)).toEqual({
      messaging_product: "whatsapp",
      to: "15550100",
      type: "template",
      template: {
        name: "sdk_user_selected_template",
        language: { code: "en_US" },
        components: [],
      },
    });
  });

  it("builds template payloads and manages WhatsApp business profiles", async () => {
    const fetchMock = vi.fn(async (url: string, init: RequestInit) => {
      if (init.method === "GET" && url.includes("/whatsapp_business_profile")) {
        return new Response(JSON.stringify({
          data: [{
            about: "Support desk",
            email: "support@example.test",
            websites: ["https://example.test"],
          }],
        }), { status: 200 });
      }
      return new Response(JSON.stringify({ success: true }), { status: 200 });
    });
    const client = createWhatsAppMessagingClient({
      accessToken: "meta-token",
      phoneNumberId: "1234567890",
      fetch: fetchMock as unknown as typeof fetch,
    });

    expect(createWhatsAppTemplateMessage({
      to: "15550100",
      name: "order_update",
      languageCode: "en_US",
      components: [{ type: "body", parameters: [] }],
    })).toEqual({
      to: "15550100",
      type: "template",
      template: {
        name: "order_update",
        language: { code: "en_US" },
        components: [{ type: "body", parameters: [] }],
      },
    });
    await expect(client.getBusinessProfile(["about", "email", "websites"]))
      .resolves.toMatchObject({ data: [{ email: "support@example.test" }] });
    await expect(client.updateBusinessProfile({
      about: "Support desk",
      email: "support@example.test",
      websites: ["https://example.test"],
      vertical: "PROF_SERVICES",
    })).resolves.toMatchObject({ success: true });

    expect(fetchMock).toHaveBeenNthCalledWith(
      1,
      "https://graph.facebook.com/v25.0/1234567890/whatsapp_business_profile?fields=about%2Cemail%2Cwebsites",
      expect.objectContaining({ method: "GET" }),
    );
    const updateRequest = (fetchMock.mock.calls[1] as unknown[])[1] as { body: string };
    expect(JSON.parse(updateRequest.body)).toEqual({
      messaging_product: "whatsapp",
      about: "Support desk",
      email: "support@example.test",
      websites: ["https://example.test"],
      vertical: "PROF_SERVICES",
    });
  });

  it("uploads media, reads metadata, and downloads media bytes with bearer auth", async () => {
    const fetchMock = vi.fn(async (url: string) => {
      if (url.endsWith("/media")) return new Response(JSON.stringify({ id: "media_1" }), { status: 200 });
      if (url === "https://graph.facebook.com/v25.0/media_1") {
        return new Response(JSON.stringify({
          id: "media_1",
          url: "https://lookaside.facebook.com/whatsapp/media/media_1",
          mime_type: "image/png",
        }), { status: 200 });
      }
      return new Response("bytes", { status: 200 });
    });
    const client = createWhatsAppMessagingClient({
      accessToken: "meta-token",
      phoneNumberId: "1234567890",
      fetch: fetchMock as unknown as typeof fetch,
    });

    const uploaded = await client.uploadMedia({
      file: new Blob(["image"], { type: "image/png" }),
      type: "image/png",
      filename: "receipt.png",
    });
    const metadata = await client.getMedia(uploaded.id ?? "");
    const download = await client.downloadMedia(metadata);

    expect(uploaded.id).toBe("media_1");
    expect(download.status).toBe(200);
    const uploadCall = fetchMock.mock.calls[0] as unknown as [string, { body: FormData; headers: Record<string, string> }];
    expect(uploadCall[0]).toBe("https://graph.facebook.com/v25.0/1234567890/media");
    expect(uploadCall[1].headers.authorization).toBe("Bearer meta-token");
    expect(uploadCall[1].headers).not.toHaveProperty("content-type");
    expect(uploadCall[1].body.get("messaging_product")).toBe("whatsapp");
    expect(uploadCall[1].body.get("type")).toBe("image/png");
    const downloadCall = fetchMock.mock.calls[2] as unknown as [string, { headers: Record<string, string> }];
    expect(downloadCall[0]).toBe("https://lookaside.facebook.com/whatsapp/media/media_1");
    expect(downloadCall[1].headers.authorization).toBe("Bearer meta-token");
  });

  it("fetches phone number profile details for live checks", async () => {
    const fetchMock = vi.fn(async () =>
      new Response(JSON.stringify({
        id: "1234567890",
        display_phone_number: "+1 555 0100",
        verified_name: "Example Support",
        quality_rating: "GREEN",
      }), { status: 200 })
    );
    const client = createWhatsAppMessagingClient({
      accessToken: "meta-token",
      phoneNumberId: "1234567890",
      fetch: fetchMock as unknown as typeof fetch,
    });

    const phoneNumber = await client.getPhoneNumber();

    expect(phoneNumber.verified_name).toBe("Example Support");
    const [url] = fetchMock.mock.calls[0] as unknown as [string];
    expect(url).toBe(
      "https://graph.facebook.com/v25.0/1234567890?fields=id%2Cdisplay_phone_number%2Cverified_name%2Cquality_rating%2Cplatform_type%2Ccode_verification_status",
    );
  });

  it("validates and parses signed WhatsApp webhook JSON", async () => {
    const appSecret = "app-secret";
    const body = JSON.stringify({
      object: "whatsapp_business_account",
      entry: [{
        id: "waba_1",
        changes: [{
          field: "messages",
          value: {
            messaging_product: "whatsapp",
            messages: [{ id: "wamid.inbound", from: "15550100", text: { body: "Help" } }],
          },
        }],
      }],
    });
    const signature = signWhatsApp(appSecret, body);
    const request = new Request("https://example.test/whatsapp/webhook", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-hub-signature-256": signature,
      },
      body,
    });

    expect(validateWhatsAppWebhookSignature({ appSecret, rawBody: body, signature })).toBe(true);
    const parsed = await parseWhatsAppWebhook(request, { appSecret });
    expect(parsed.payload).toMatchObject({
      object: "whatsapp_business_account",
      entry: [{ changes: [{ field: "messages" }] }],
    });
  });

  it("rejects tampered WhatsApp webhook signatures and verifies webhook challenges", () => {
    const appSecret = "app-secret";
    const body = JSON.stringify({ object: "whatsapp_business_account" });
    const signature = signWhatsApp(appSecret, body);

    expect(validateWhatsAppWebhookSignature({
      appSecret,
      rawBody: `${body}\n`,
      signature,
    })).toBe(false);
    expect(verifyWhatsAppWebhookChallenge({
      mode: "subscribe",
      verifyToken: "verify-token",
      challenge: "challenge-text",
      expectedVerifyToken: "verify-token",
    })).toBe("challenge-text");
    expect(verifyWhatsAppWebhookChallenge({
      mode: "subscribe",
      verifyToken: "wrong",
      challenge: "challenge-text",
      expectedVerifyToken: "verify-token",
    })).toBeUndefined();
  });

  it("reports live conformance as credential-blocked until WhatsApp credentials are configured", async () => {
    const result = await runProviderConformance({
      manifest: whatsappMessagingProviderManifest,
      channels: [{
        id: "messaging",
        channel: "messaging",
        providerPackageIds: [whatsappMessagingProviderManifest.id],
        enabledCapabilities: ["receive", "send", "draft", "media", "attach", "read-provider-object", "update-provider-object"],
      }],
      credentialStatuses: whatsappMessagingCredentialStatuses({}),
      live: {
        enabled: true,
        checks: createWhatsAppMessagingLiveChecks({
          accessToken: "missing",
          phoneNumberId: "missing",
          client: {
            async getPhoneNumber() {
              return { id: "1234567890", verified_name: "Example Support" };
            },
          },
        }),
      },
    });

    expect(result.status).toBe("credential-blocked");
    expect(result.checks.some((check) =>
      check.id === "provider.live.phone-number" && check.status === "credential-blocked"
    )).toBe(true);
  });

  it("passes live conformance when WhatsApp credentials and phone number checks are configured", async () => {
    const result = await runProviderConformance({
      manifest: whatsappMessagingProviderManifest,
      channels: [{
        id: "messaging",
        channel: "messaging",
        providerPackageIds: [whatsappMessagingProviderManifest.id],
        enabledCapabilities: ["receive", "send", "draft", "media", "attach", "read-provider-object", "update-provider-object"],
      }],
      credentialStatuses: whatsappMessagingCredentialStatuses({
        accessToken: "configured",
        phoneNumberId: "1234567890",
        appSecret: "configured",
        verifyToken: "configured",
        wabaWebhookSubscribed: true,
        scopes: ["whatsapp_business_messaging", "whatsapp_business_management"],
      }),
      live: {
        enabled: true,
        checks: createWhatsAppMessagingLiveChecks({
          accessToken: "configured",
          phoneNumberId: "1234567890",
          client: {
            async getPhoneNumber() {
              return {
                id: "1234567890",
                display_phone_number: "+1 555 0100",
                verified_name: "Example Support",
                quality_rating: "GREEN",
              };
            },
          },
        }),
      },
    });

    expect(result.status).toBe("passed");
    expect(result.checks).toContainEqual(expect.objectContaining({
      id: "provider.live.phone-number",
      status: "passed",
    }));
  });
});

function signWhatsApp(appSecret: string, body: string) {
  return `sha256=${createHmac("sha256", appSecret).update(body).digest("hex")}`;
}
