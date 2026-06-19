import { createHmac } from "node:crypto";
import { describe, expect, expectTypeOf, it, vi } from "vitest";
import { runProviderConformance } from "@cognidesk/test-harness";
import {
  createTwilioSmsClient,
  createTwilioSmsLiveChecks,
  parseTwilioSmsWebhook,
  TWILIO_SMS_FULL_API_GENERATED_FUNCTION_COUNT,
  TWILIO_SMS_FULL_API_GENERATED_FUNCTION_NAMES,
  TWILIO_SMS_FULL_API_OPERATION_COUNT,
  twilioSmsCredentialStatuses,
  twilioSmsProviderManifest,
  validateTwilioRequestSignature,
  type TwilioAccountResource,
  type TwilioMessageListResource,
  type TwilioSmsFullApiOperationResponseMap,
} from "../../../src/sms/twilio/index.js";

describe("@cognidesk/integrations", () => {
  it("exports an official provider manifest for Twilio Programmable Messaging", () => {
    expect(twilioSmsProviderManifest).toMatchObject({
      id: "sms.twilio",
      packageName: "@cognidesk/integrations",
      category: "sms",
      provider: "twilio",
      trustLevel: "official",
    });
    expect(twilioSmsProviderManifest.directions)
      .toEqual(expect.arrayContaining(["receive-only", "send-only", "bidirectional"]));
    expect(twilioSmsProviderManifest.capabilities.map((capability) => capability.capability))
      .toEqual(expect.arrayContaining([
        "receive",
        "send",
        "schedule",
        "read-provider-object",
        "search-provider-object",
        "update-provider-object",
        "twilio.webhook-signature",
      ]));
    expect(twilioSmsProviderManifest.credentialRequirements.map((requirement) => requirement.id))
      .toEqual(["twilio-account", "twilio-sms-sender"]);
    expect(twilioSmsProviderManifest.credentialRequirements.find((requirement) =>
      requirement.id === "twilio-sms-sender"
    )?.label).toContain("SMS/MMS");
    expect(twilioSmsProviderManifest.capabilities.find((capability) =>
      capability.capability === "send"
    )?.description).toContain("mediaUrl");
    expect(twilioSmsProviderManifest.coverage).toMatchObject({
      scope: "full-provider-api",
    });
    expect(twilioSmsProviderManifest.coverage.notes.join(" "))
      .toContain("generated per-operation functions");
    expect(twilioSmsProviderManifest.metadata?.fullProviderApiVerification).toMatchObject({
      provider: "twilio-messaging-domain",
      documentedOperationCount: 309,
      implementedOperationCount: 309,
      unimplementedOperationCount: 0,
      generatedFunctionCount: 309,
    });
    expect(twilioSmsProviderManifest.metadata?.categoryProfileId).toBe("sms");
    expect(twilioSmsProviderManifest.operations.map((operation) => operation.alias))
      .toEqual(expect.arrayContaining([
        "sms.message.receive",
        "sms.message.send",
        "sms.message.schedule",
        "sms.message.read",
        "sms.message.search",
        "sms.message.cancel",
      ]));
    expect(TWILIO_SMS_FULL_API_OPERATION_COUNT).toBe(309);
    expect(TWILIO_SMS_FULL_API_GENERATED_FUNCTION_COUNT).toBe(309);
    expect(TWILIO_SMS_FULL_API_GENERATED_FUNCTION_NAMES).toEqual(expect.arrayContaining([
      "ApiV2010DeleteMessage",
      "MessagingV1CreateService",
      "ConversationsV1CreateConversation",
      "ContentV1CreateContent",
    ]));
    expect(twilioSmsProviderManifest.coverage.evidence.map((evidence) => evidence.url))
      .toEqual(expect.arrayContaining([
        "https://www.twilio.com/docs/messaging/api/message-resource",
        "https://www.twilio.com/docs/messaging/features/message-scheduling",
        "https://www.twilio.com/docs/messaging/features/link-shortening",
      ]));
    expect(twilioSmsProviderManifest.privacyNotes.join(" "))
      .toContain("Outbound SMS consent");
    expect(twilioSmsProviderManifest.limitations.join(" "))
      .toContain("does not provide product defaults");
  });

  it("types Twilio message helper and selected operation responses", () => {
    if (false) {
      const client = undefined as unknown as import("../../../src/sms/twilio/index.js").TwilioSmsClient;
      const message = client.requestOperation("api_v2010:FetchMessage", {
        pathParams: { AccountSid: "AC123", Sid: "SM123" },
      });
      const messages = client.listMessages({ pageSize: 20 });
      const account = client.fetchAccount();

      expectTypeOf<Awaited<typeof message>>().toEqualTypeOf<TwilioSmsFullApiOperationResponseMap["api_v2010:FetchMessage"]>();
      expectTypeOf<Awaited<typeof messages>>().toEqualTypeOf<TwilioMessageListResource>();
      expectTypeOf<Awaited<typeof account>>().toEqualTypeOf<TwilioAccountResource>();
    }
  });

  it("exposes generated functions for the documented Twilio Messaging-domain operations", async () => {
    const fetchMock = vi.fn(async (url: string, init: RequestInit) => {
      if (url.endsWith("/v1/Content")) {
        return new Response(JSON.stringify({ sid: "HX123" }), { status: 201 });
      }
      return new Response(JSON.stringify({ ok: true }), { status: 200 });
    });
    const client = createTwilioSmsClient({
      accountSid: "AC123",
      authToken: "auth-token",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await client.fullApi.ApiV2010DeleteMessage({ pathParams: { AccountSid: "AC123", Sid: "SM123" } });
    await client.fullApi.MessagingV1CreateService({ body: { FriendlyName: "Support" } });
    await client.fullApi.ContentV1CreateContent({
      body: {
        friendly_name: "Order update",
        language: "en",
        types: { "twilio/text": { body: "Your order shipped." } },
      },
    });

    expect(fetchMock).toHaveBeenNthCalledWith(
      1,
      "https://api.twilio.com/2010-04-01/Accounts/AC123/Messages/SM123.json",
      expect.objectContaining({ method: "DELETE" }),
    );
    expect(fetchMock).toHaveBeenNthCalledWith(
      2,
      "https://api.twilio.com/v1/Services",
      expect.objectContaining({ method: "POST" }),
    );
    const serviceRequest = (fetchMock.mock.calls[1] as unknown[])[1] as { body: URLSearchParams };
    expect(serviceRequest.body.get("FriendlyName")).toBe("Support");
    expect(fetchMock).toHaveBeenNthCalledWith(
      3,
      "https://api.twilio.com/v1/Content",
      expect.objectContaining({
        method: "POST",
        headers: expect.objectContaining({ "content-type": "application/json" }),
      }),
    );
    const contentRequest = (fetchMock.mock.calls[2] as unknown[])[1] as { body: string };
    expect(JSON.parse(contentRequest.body)).toMatchObject({
      friendly_name: "Order update",
      types: { "twilio/text": { body: "Your order shipped." } },
    });
    // @ts-expect-error Missing Sid intentionally exercises runtime validation.
    await expect(client.requestOperation("api_v2010:DeleteMessage", { pathParams: { AccountSid: "AC123" } }))
      .rejects.toThrow("Missing Twilio path parameter 'Sid'");
  });

  it("sends SMS/MMS through the Twilio Messages REST resource", async () => {
    const fetchMock = vi.fn(async () =>
      new Response(JSON.stringify({
        sid: "SM123",
        status: "queued",
        to: "+15550100",
        from: "+15550999",
      }), { status: 201 })
    );
    const client = createTwilioSmsClient({
      accountSid: "AC123",
      authToken: "auth-token",
      fetch: fetchMock as unknown as typeof fetch,
    });

    const message = await client.sendMessage({
      to: "+15550100",
      from: "+15550999",
      body: "Your reset link is ready.",
      statusCallback: "https://example.test/twilio/sms/status",
      mediaUrl: ["https://example.test/receipt.png"],
      validityPeriodSeconds: 300,
    });

    expect(message.sid).toBe("SM123");
    expect(fetchMock).toHaveBeenCalledWith(
      "https://api.twilio.com/2010-04-01/Accounts/AC123/Messages.json",
      expect.objectContaining({
        method: "POST",
        headers: expect.objectContaining({
          authorization: `Basic ${Buffer.from("AC123:auth-token").toString("base64")}`,
          "content-type": "application/x-www-form-urlencoded",
        }),
      }),
    );
    const request = (fetchMock.mock.calls[0] as unknown[])[1] as { body: URLSearchParams };
    expect(request.body.get("To")).toBe("+15550100");
    expect(request.body.get("From")).toBe("+15550999");
    expect(request.body.get("Body")).toBe("Your reset link is ready.");
    expect(request.body.get("StatusCallback")).toBe("https://example.test/twilio/sms/status");
    expect(request.body.getAll("MediaUrl")).toEqual(["https://example.test/receipt.png"]);
    expect(request.body.get("ValidityPeriod")).toBe("300");
  });

  it("requires exactly one Twilio sender when sending SMS", async () => {
    const client = createTwilioSmsClient({
      accountSid: "AC123",
      authToken: "auth-token",
      fetch: vi.fn() as unknown as typeof fetch,
    });

    await expect(client.sendMessage({
      to: "+15550100",
      body: "Hello.",
    })).rejects.toThrow("Exactly one of from or messagingServiceSid");
    await expect(client.sendMessage({
      to: "+15550100",
      from: "+15550999",
      messagingServiceSid: "MG123",
      body: "Hello.",
    })).rejects.toThrow("Exactly one of from or messagingServiceSid");
  });

  it("fails closed for Twilio advanced message fields without documented constraints", async () => {
    const fetchMock = vi.fn(async () => new Response(JSON.stringify({ sid: "SM123" }), { status: 201 }));
    const client = createTwilioSmsClient({
      accountSid: "AC123",
      authToken: "auth-token",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await expect(client.sendMessage({
      to: "+15550100",
      from: "+15550999",
      body: "Scheduled without service.",
      sendAt: "2026-06-18T12:00:00Z",
      scheduleType: "fixed",
    })).rejects.toThrow("scheduled messages require messagingServiceSid");
    await expect(client.sendMessage({
      to: "+15550100",
      from: "+15550999",
      body: "Shorten this https://example.test",
      shortenUrls: true,
    })).rejects.toThrow("link shortening requires messagingServiceSid");
    await expect(client.sendMessage({
      to: "+15550100",
      messagingServiceSid: "MG123",
      body: "Body and content template.",
      contentSid: "HX123",
    })).rejects.toThrow("ContentSid messages cannot be combined");
    await expect(client.sendMessage({
      to: "+15550100",
      messagingServiceSid: "MG123",
      contentVariables: { name: "Ada" },
    })).rejects.toThrow("contentVariables require contentSid");
    expect(fetchMock).not.toHaveBeenCalled();

    await expect(client.sendMessage({
      to: "+15550100",
      messagingServiceSid: "MG123",
      contentSid: "HX123",
      contentVariables: { name: "Ada" },
      sendAt: "2026-06-18T12:00:00Z",
      scheduleType: "fixed",
      shortenUrls: true,
    })).resolves.toMatchObject({ sid: "SM123" });
    const request = (fetchMock.mock.calls[0] as unknown[])[1] as { body: URLSearchParams };
    expect(request.body.get("MessagingServiceSid")).toBe("MG123");
    expect(request.body.get("ContentSid")).toBe("HX123");
    expect(request.body.get("ScheduleType")).toBe("fixed");
    expect(request.body.get("ShortenUrls")).toBe("true");
  });

  it("reads, lists, and updates Twilio message resources", async () => {
    const fetchMock = vi.fn(async (url: string, init: RequestInit) => {
      if (init.method === "GET" && url.endsWith("/Messages/SM123.json")) {
        return new Response(JSON.stringify({ sid: "SM123", status: "delivered" }), { status: 200 });
      }
      if (init.method === "POST") {
        return new Response(JSON.stringify({ sid: "SM123", status: "canceled" }), { status: 200 });
      }
      return new Response(JSON.stringify({
        messages: [{ sid: "SM123", status: "sent" }],
        next_page_uri: null,
      }), { status: 200 });
    });
    const client = createTwilioSmsClient({
      accountSid: "AC123",
      authToken: "auth-token",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await expect(client.fetchMessage("SM123")).resolves.toMatchObject({ sid: "SM123" });
    const list = await client.listMessages({
      from: "+15550999",
      to: "+15550100",
      dateSentAfter: "2026-01-01",
      pageSize: 5,
    });
    await expect(client.updateMessageStatus("SM123", "cancelled")).resolves.toMatchObject({ status: "canceled" });

    expect(list.messages).toHaveLength(1);
    expect(fetchMock).toHaveBeenNthCalledWith(
      2,
      "https://api.twilio.com/2010-04-01/Accounts/AC123/Messages.json?To=%2B15550100&From=%2B15550999&DateSent%3E=2026-01-01&PageSize=5",
      expect.objectContaining({ method: "GET" }),
    );
    const updateRequest = (fetchMock.mock.calls[2] as unknown[])[1] as { body: URLSearchParams };
    expect(updateRequest.body.get("Status")).toBe("canceled");
  });

  it("validates and parses signed Twilio Messaging webhooks", async () => {
    const url = "https://example.test/twilio/sms";
    const params = {
      AccountSid: "AC123",
      Body: "Need help",
      From: "+15550100",
      MediaContentType0: "image/png",
      MediaUrl0: "https://api.twilio.com/media/ME123",
      MessageSid: "SM123",
      NumMedia: "1",
      SmsStatus: "received",
      To: "+15550999",
    };
    const authToken = "secret";
    const signature = sign(url, params, authToken);
    const request = new Request(url, {
      method: "POST",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        "x-twilio-signature": signature,
      },
      body: new URLSearchParams(params),
    });

    expect(validateTwilioRequestSignature({ url, params, signature, authToken })).toBe(true);
    const webhook = await parseTwilioSmsWebhook(request, { authToken });
    expect(webhook).toMatchObject({
      accountSid: "AC123",
      body: "Need help",
      from: "+15550100",
      messageSid: "SM123",
      numMedia: 1,
      smsStatus: "received",
      to: "+15550999",
    });
    expect(webhook.media).toEqual([{
      url: "https://api.twilio.com/media/ME123",
      contentType: "image/png",
    }]);
  });

  it("reports live conformance as credential-blocked until Twilio SMS credentials are configured", async () => {
    const result = await runProviderConformance({
      manifest: twilioSmsProviderManifest,
      channels: [{
        id: "sms",
        channel: "sms",
        providerPackageIds: [twilioSmsProviderManifest.id],
        enabledCapabilities: ["receive", "send", "read-provider-object", "search-provider-object", "update-provider-object"],
      }],
      credentialStatuses: twilioSmsCredentialStatuses({}),
      live: {
        enabled: true,
        checks: createTwilioSmsLiveChecks({
          accountSid: "AC123",
          authToken: "missing",
          fromNumber: "+15550999",
          client: {
            async fetchAccount() {
              return { sid: "AC123", status: "active" };
            },
            async listIncomingPhoneNumbers() {
              return [{ sid: "PN123", phone_number: "+15550999", capabilities: { sms: true } }];
            },
          },
        }),
      },
    });

    expect(result.status).toBe("credential-blocked");
    expect(result.checks.some((check) =>
      check.id === "provider.live.account" && check.status === "credential-blocked"
    )).toBe(true);
    expect(result.checks.some((check) =>
      check.id === "provider.live.sender" && check.status === "credential-blocked"
    )).toBe(true);
  });

  it("passes live conformance when mocked Twilio account and phone checks succeed", async () => {
    const result = await runProviderConformance({
      manifest: twilioSmsProviderManifest,
      channels: [{
        id: "sms",
        channel: "sms",
        providerPackageIds: [twilioSmsProviderManifest.id],
        enabledCapabilities: ["receive", "send", "read-provider-object", "search-provider-object", "update-provider-object"],
      }],
      credentialStatuses: twilioSmsCredentialStatuses({
        accountSid: "AC123",
        authToken: "configured",
        fromNumber: "+15550999",
      }),
      live: {
        enabled: true,
        checks: createTwilioSmsLiveChecks({
          accountSid: "AC123",
          authToken: "configured",
          fromNumber: "+15550999",
          client: {
            async fetchAccount() {
              return { sid: "AC123", status: "active" };
            },
            async listIncomingPhoneNumbers() {
              return [{ sid: "PN123", phone_number: "+15550999", capabilities: { sms: true } }];
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
    expect(result.checks).toContainEqual(expect.objectContaining({
      id: "provider.live.sender",
      status: "passed",
    }));
  });
});

function sign(url: string, params: Record<string, string>, authToken: string) {
  const signed = Object.keys(params).sort()
    .reduce((value, key) => `${value}${key}${params[key]}`, url);
  return createHmac("sha1", authToken).update(signed).digest("base64");
}
