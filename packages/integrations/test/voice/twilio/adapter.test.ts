import { createHmac } from "node:crypto";
import { describe, expect, expectTypeOf, it, vi } from "vitest";
import { runProviderConformance } from "@cognidesk/test-harness";
import {
  type TwilioAccountResource,
  type TwilioCallResource,
  type TwilioCallStatus,
  createTwilioMediaStreamTwiML,
  createTwilioVoiceClient,
  createTwilioVoiceLiveChecks,
  parseTwilioVoiceWebhook,
  TWILIO_VOICE_FULL_API_GENERATED_FUNCTION_COUNT,
  TWILIO_VOICE_FULL_API_GENERATED_FUNCTION_NAMES,
  TWILIO_VOICE_FULL_API_OPERATION_COUNT,
  twilioVoiceCredentialStatuses,
  twilioVoiceProviderManifest,
  validateTwilioRequestSignature,
} from "../../../src/voice/twilio/index.js";

describe("@cognidesk/integrations", () => {
  it("exports an official provider manifest for Twilio Programmable Voice", () => {
    expect(twilioVoiceProviderManifest).toMatchObject({
      id: "voice.twilio",
      packageName: "@cognidesk/integrations",
      category: "voice",
      provider: "twilio",
      trustLevel: "official",
    });
    expect(twilioVoiceProviderManifest.directions)
      .toEqual(expect.arrayContaining(["inbound-only", "outbound-only", "bidirectional"]));
    expect(twilioVoiceProviderManifest.capabilities.map((capability) => capability.capability))
      .toEqual(expect.arrayContaining([
        "receive",
        "send",
        "media",
        "transfer",
        "twilio.webhook-signature",
      ]));
    expect(twilioVoiceProviderManifest.credentialRequirements.map((requirement) => requirement.id))
      .toEqual(["twilio-account", "twilio-rest-api-credentials", "twilio-webhook-auth-token", "twilio-voice-number"]);
    expect(twilioVoiceProviderManifest.coverage).toMatchObject({
      scope: "full-provider-api",
    });
    expect(twilioVoiceProviderManifest.coverage.notes.join(" "))
      .toContain("generated per-operation functions");
    expect(twilioVoiceProviderManifest.coverage.notes.join(" "))
      .toContain("core Voice call/conference/queue/recording/transcription/stream/SIP resources");
    expect(twilioVoiceProviderManifest.metadata?.fullProviderApiVerification).toMatchObject({
      provider: "twilio-voice-domain",
      documentedOperationCount: 178,
      implementedOperationCount: 178,
      unimplementedOperationCount: 0,
      generatedFunctionCount: 178,
    });
    expect(TWILIO_VOICE_FULL_API_OPERATION_COUNT).toBe(178);
    expect(TWILIO_VOICE_FULL_API_GENERATED_FUNCTION_COUNT).toBe(178);
    expect(TWILIO_VOICE_FULL_API_GENERATED_FUNCTION_NAMES).toEqual(expect.arrayContaining([
      "ApiV2010ListCall",
      "ApiV2010DeleteCall",
      "VoiceV1ListByocTrunk",
      "InsightsV1FetchAccountSettings",
    ]));
  });

  it("exposes generated functions for the documented Twilio Voice-domain operations", async () => {
    const fetchMock = vi.fn(async () =>
      new Response(JSON.stringify({ ok: true }), { status: 200 })
    );
    const client = createTwilioVoiceClient({
      accountSid: "AC123",
      apiKeySid: "SK123",
      apiKeySecret: "api-key-secret",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await client.fullApi.ApiV2010ListCall({ pathParams: { AccountSid: "AC123" }, query: { PageSize: 10 } });
    await client.fullApi.ApiV2010DeleteCall({ pathParams: { AccountSid: "AC123", Sid: "CA123" } });
    await client.fullApi.VoiceV1ListByocTrunk();
    await client.fullApi.InsightsV1FetchAccountSettings();
    await client.fullApi.VoiceV3CreateV3Transcriptions({
      // @ts-expect-error Minimal fixture intentionally exercises request routing; official schema requires source media fields.
      body: { transcription_engine: "google", language_code: "en-US" },
    });

    expect(fetchMock).toHaveBeenNthCalledWith(
      1,
      "https://api.twilio.com/2010-04-01/Accounts/AC123/Calls.json?PageSize=10",
      expect.objectContaining({ method: "GET" }),
    );
    expect(fetchMock).toHaveBeenNthCalledWith(
      2,
      "https://api.twilio.com/2010-04-01/Accounts/AC123/Calls/CA123.json",
      expect.objectContaining({ method: "DELETE" }),
    );
    expect(fetchMock).toHaveBeenNthCalledWith(
      3,
      "https://api.twilio.com/v1/ByocTrunks",
      expect.objectContaining({ method: "GET" }),
    );
    expect(fetchMock).toHaveBeenNthCalledWith(
      4,
      "https://api.twilio.com/v1/Voice/Settings",
      expect.objectContaining({ method: "GET" }),
    );
    expect(fetchMock).toHaveBeenNthCalledWith(
      5,
      "https://api.twilio.com/v3/Transcriptions",
      expect.objectContaining({
        method: "POST",
        headers: expect.objectContaining({
          authorization: `Basic ${Buffer.from("SK123:api-key-secret").toString("base64")}`,
          "content-type": "application/json",
        }),
      }),
    );
    const transcriptionRequest = (fetchMock.mock.calls[4] as unknown[])[1] as { body: string };
    expect(JSON.parse(transcriptionRequest.body)).toMatchObject({ language_code: "en-US" });
    await expect(client.fullApi.ApiV2010DeleteCall({
      // @ts-expect-error Missing Sid intentionally exercises runtime validation.
      pathParams: { AccountSid: "AC123" },
    })).rejects.toThrow("Missing Twilio path parameter 'Sid'");
  });

  it("creates outbound calls through the Twilio Calls REST resource", async () => {
    const fetchMock = vi.fn(async () =>
      new Response(JSON.stringify({
        sid: "CA123",
        status: "queued",
        to: "+15550100",
        from: "+15550999",
      }), { status: 201 })
    );
    const client = createTwilioVoiceClient({
      accountSid: "AC123",
      authToken: "auth-token",
      fetch: fetchMock as unknown as typeof fetch,
    });

    const call = await client.createOutboundCall({
      to: "+15550100",
      from: "+15550999",
      url: "https://example.test/twilio/voice",
      statusCallback: "https://example.test/twilio/status",
      statusCallbackEvent: ["initiated", "completed"],
      metadata: { conversationId: "conversation_1" },
    });

    expect(call.sid).toBe("CA123");
    expect(fetchMock).toHaveBeenCalledWith(
      "https://api.twilio.com/2010-04-01/Accounts/AC123/Calls.json",
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
    expect(request.body.get("Url")).toBe("https://example.test/twilio/voice");
    expect(request.body.getAll("StatusCallbackEvent")).toEqual(["initiated", "completed"]);
    expect(request.body.get("Parameter[conversationId]")).toBe("conversation_1");
  });

  it("exposes documented Twilio call status and account resource types", () => {
    expectTypeOf<TwilioCallResource["status"]>().toEqualTypeOf<TwilioCallStatus | undefined>();
    expectTypeOf<TwilioAccountResource>().toHaveProperty("sid").toEqualTypeOf<string>();

    const call: TwilioCallResource = {
      sid: "CA123",
      status: "in-progress",
    };
    expect(call.status).toBe("in-progress");
  });

  it("requires a TwiML source and allows documented url plus twiml precedence when creating outbound calls", async () => {
    const fetchMock = vi.fn(async () =>
      new Response(JSON.stringify({ sid: "CA123", status: "queued" }), { status: 201 })
    );
    const client = createTwilioVoiceClient({
      accountSid: "AC123",
      apiKeySid: "SK123",
      apiKeySecret: "api-key-secret",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await expect(client.createOutboundCall({
      to: "+15550100",
      from: "+15550999",
    })).rejects.toThrow("At least one of url, twiml, or applicationSid");
    await client.createOutboundCall({
      to: "+15550100",
      from: "+15550999",
      url: "https://example.test/twilio/voice",
      twiml: "<Response />",
    });
    expect(fetchMock).toHaveBeenCalledWith(
      "https://api.twilio.com/2010-04-01/Accounts/AC123/Calls.json",
      expect.objectContaining({
        headers: expect.objectContaining({
          authorization: `Basic ${Buffer.from("SK123:api-key-secret").toString("base64")}`,
        }),
      }),
    );
    const request = (fetchMock.mock.calls[0] as unknown[])[1] as { body: URLSearchParams };
    expect(request.body.get("Url")).toBe("https://example.test/twilio/voice");
    expect(request.body.get("Twiml")).toBe("<Response />");
    await expect(client.createOutboundCall({
      to: "+15550100",
      from: "+15550999",
      url: "https://example.test/twilio/voice",
      applicationSid: "AP123",
    })).rejects.toThrow("applicationSid cannot be combined");
  });

  it("updates active calls through the Twilio Calls REST resource", async () => {
    const fetchMock = vi.fn(async () =>
      new Response(JSON.stringify({
        sid: "CA123",
        status: "in-progress",
      }), { status: 200 })
    );
    const client = createTwilioVoiceClient({
      accountSid: "AC123",
      authToken: "auth-token",
      fetch: fetchMock as unknown as typeof fetch,
    });

    const call = await client.updateCall("CA123", {
      twiml: "<Response><Say>One moment</Say></Response>",
      statusCallback: "https://example.test/twilio/status",
      statusCallbackMethod: "POST",
      timeLimitSeconds: 300,
    });

    expect(call.sid).toBe("CA123");
    expect(fetchMock).toHaveBeenCalledWith(
      "https://api.twilio.com/2010-04-01/Accounts/AC123/Calls/CA123.json",
      expect.objectContaining({ method: "POST" }),
    );
    const request = (fetchMock.mock.calls[0] as unknown[])[1] as { body: URLSearchParams };
    expect(request.body.get("Twiml")).toBe("<Response><Say>One moment</Say></Response>");
    expect(request.body.get("StatusCallback")).toBe("https://example.test/twilio/status");
    expect(request.body.get("StatusCallbackMethod")).toBe("POST");
    expect(request.body.get("TimeLimit")).toBe("300");
  });

  it("redirects active calls with exactly one TwiML source", async () => {
    const fetchMock = vi.fn(async () =>
      new Response(JSON.stringify({
        sid: "CA123",
        status: "in-progress",
      }), { status: 200 })
    );
    const client = createTwilioVoiceClient({
      accountSid: "AC123",
      authToken: "auth-token",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await client.redirectCall("CA123", {
      url: "https://example.test/twilio/transfer",
      method: "GET",
      fallbackUrl: "https://example.test/twilio/fallback",
      fallbackMethod: "POST",
    });

    const request = (fetchMock.mock.calls[0] as unknown[])[1] as { body: URLSearchParams };
    expect(request.body.get("Url")).toBe("https://example.test/twilio/transfer");
    expect(request.body.get("Method")).toBe("GET");
    expect(request.body.get("FallbackUrl")).toBe("https://example.test/twilio/fallback");
    expect(request.body.get("FallbackMethod")).toBe("POST");

    await expect(client.redirectCall("CA123", {}))
      .rejects.toThrow("Exactly one of url or twiml");
    await expect(client.redirectCall("CA123", {
      url: "https://example.test/twilio/transfer",
      twiml: "<Response />",
    })).rejects.toThrow("Exactly one of url or twiml");
  });

  it("ends active or queued calls by updating Twilio call status", async () => {
    const fetchMock = vi.fn(async () =>
      new Response(JSON.stringify({
        sid: "CA123",
        status: "completed",
      }), { status: 200 })
    );
    const client = createTwilioVoiceClient({
      accountSid: "AC123",
      authToken: "auth-token",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await client.endCall("CA123");
    await client.endCall("CA456", { status: "canceled" });

    const completeRequest = (fetchMock.mock.calls[0] as unknown[])[1] as { body: URLSearchParams };
    const cancelRequest = (fetchMock.mock.calls[1] as unknown[])[1] as { body: URLSearchParams };
    expect(completeRequest.body.get("Status")).toBe("completed");
    expect(cancelRequest.body.get("Status")).toBe("canceled");
  });

  it("rejects ambiguous or empty Twilio call updates", async () => {
    const client = createTwilioVoiceClient({
      accountSid: "AC123",
      authToken: "auth-token",
      fetch: vi.fn() as unknown as typeof fetch,
    });

    await expect(client.updateCall("CA123", {}))
      .rejects.toThrow("At least one Twilio call update field");
    await expect(client.updateCall("CA123", {
      url: "https://example.test/twilio/transfer",
      twiml: "<Response />",
    })).rejects.toThrow("Only one of url or twiml");
  });

  it("builds TwiML for bidirectional Media Streams with escaped custom parameters", () => {
    const twiml = createTwilioMediaStreamTwiML({
      websocketUrl: "wss://voice.example.test/twilio",
      customParameters: {
        conversationId: "conversation_1",
        unsafe: "a&b\"<c>",
      },
    });

    expect(twiml).toBe([
      "<?xml version=\"1.0\" encoding=\"UTF-8\"?>",
      "<Response><Connect>",
      "<Stream url=\"wss://voice.example.test/twilio\">",
      "<Parameter name=\"conversationId\" value=\"conversation_1\"/>",
      "<Parameter name=\"unsafe\" value=\"a&amp;b&quot;&lt;c&gt;\"/>",
      "</Stream></Connect></Response>",
    ].join(""));
  });

  it("rejects outbound and both_tracks on bidirectional Twilio Media Streams", () => {
    expect(() => createTwilioMediaStreamTwiML({
      websocketUrl: "wss://voice.example.test/twilio",
      mode: "connect",
      track: "both_tracks",
    })).toThrow("bidirectional <Connect><Stream> supports only inbound_track");
  });

  it("validates and parses signed Twilio Voice webhooks", async () => {
    const url = "https://example.test/twilio/voice";
    const params = {
      AccountSid: "AC123",
      CallSid: "CA123",
      CallStatus: "ringing",
      Direction: "inbound",
      From: "+15550100",
      To: "+15550999",
    };
    const authToken = "secret";
    const signature = sign(url, params, authToken);
    const body = new URLSearchParams(params);
    const request = new Request(url, {
      method: "POST",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        "x-twilio-signature": signature,
      },
      body,
    });

    expect(validateTwilioRequestSignature({ url, params, signature, authToken })).toBe(true);
    const webhook = await parseTwilioVoiceWebhook(request, { authToken });
    expect(webhook).toMatchObject({
      accountSid: "AC123",
      callSid: "CA123",
      callStatus: "ringing",
      direction: "inbound",
      from: "+15550100",
      to: "+15550999",
    });
  });

  it("reports live conformance as credential-blocked until Twilio credentials are configured", async () => {
    const result = await runProviderConformance({
      manifest: twilioVoiceProviderManifest,
      channels: [{
        id: "voice",
        channel: "voice",
        providerPackageIds: [twilioVoiceProviderManifest.id],
        enabledCapabilities: ["receive", "send", "media", "transfer"],
      }],
      credentialStatuses: twilioVoiceCredentialStatuses({}),
      live: {
        enabled: true,
        checks: createTwilioVoiceLiveChecks({
          accountSid: "AC123",
          authToken: "missing",
          client: {
            async fetchAccount() {
              return { sid: "AC123", status: "active" };
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

  it("passes live conformance when a Twilio account check succeeds", async () => {
    const result = await runProviderConformance({
      manifest: twilioVoiceProviderManifest,
      channels: [{
        id: "voice",
        channel: "voice",
        providerPackageIds: [twilioVoiceProviderManifest.id],
        enabledCapabilities: ["receive", "send", "media", "transfer"],
      }],
      credentialStatuses: twilioVoiceCredentialStatuses({
        accountSid: "AC123",
        authToken: "configured",
        fromNumber: "+15550999",
      }),
      live: {
        enabled: true,
        checks: createTwilioVoiceLiveChecks({
          accountSid: "AC123",
          authToken: "configured",
          client: {
            async fetchAccount() {
              return { sid: "AC123", status: "active" };
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

function sign(url: string, params: Record<string, string>, authToken: string) {
  const signed = Object.keys(params).sort()
    .reduce((value, key) => `${value}${key}${params[key]}`, url);
  return createHmac("sha1", authToken).update(signed).digest("base64");
}
