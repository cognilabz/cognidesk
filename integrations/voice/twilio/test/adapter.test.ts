import { readFile } from "node:fs/promises";
import twilio from "twilio";
import { describe, expect, it } from "vitest";
import {
  createTwilioMediaStreamTwiML,
  createTwilioVoiceIntegration,
  createTwilioVoiceClient,
  createTwilioVoiceOperationHandlers,
  parseTwilioVoiceWebhook,
  twilioVoiceCredentialStatuses,
  twilioVoiceIntegration,
  twilioVoiceProviderManifest,
  validateTwilioRequestSignature,
  type TwilioVoiceRawClient,
} from "../src/index.js";

describe("@cognidesk/integration-voice-twilio", () => {
  it("keeps Twilio Voice separate from SMS and metadata-only at /manifest", async () => {
    expect(twilioVoiceProviderManifest.packageName).toBe("@cognidesk/integration-voice-twilio");
    expect(twilioVoiceProviderManifest.category).toBe("voice");
    expect(twilioVoiceProviderManifest.metadata?.implementation).toMatchObject({
      strategy: "official-sdk",
      sdkPackage: "twilio",
      verifiedVersion: "6.0.2",
    });
    expect(Object.keys(twilioVoiceIntegration.operations)).toEqual([
      "voice.call.answer",
      "voice.call.start",
      "voice.call.redirect",
    ]);
    expect(Object.keys(createTwilioVoiceOperationHandlers({
      accountSid: "AC123",
      voiceClient: createTwilioVoiceClient({
        accountSid: "AC123",
        rawClient: fakeTwilioRawClient(),
      }),
    }))).toEqual([
      "voice.call.answer",
      "voice.call.start",
      "voice.call.redirect",
    ]);
    expect(createTwilioVoiceIntegration({
      accountSid: "AC123",
      voiceClient: createTwilioVoiceClient({
        accountSid: "AC123",
        rawClient: fakeTwilioRawClient(),
      }),
    }).manifest.id).toBe("voice.twilio");
    await expect(readFile(new URL("../src/manifest.ts", import.meta.url), "utf8"))
      .resolves.not.toMatch(/from\s+["']twilio["']/);
    await expect(readFile(new URL("../src/index.ts", import.meta.url), "utf8"))
      .resolves.not.toMatch(/createHmac|timingSafeEqual|globalThis\.fetch|fetchImpl/);
  });

  it("uses injected Twilio helper clients for voice calls", async () => {
    const client = createTwilioVoiceClient({
      accountSid: "AC123",
      authToken: "token",
      rawClient: fakeTwilioRawClient((input) => {
        expect(input).toMatchObject({
          to: "+15550100",
          from: "+15550999",
          url: "https://example.test/answer",
        });
      }),
    });

    await expect(client.createOutboundCall({
      to: "+15550100",
      from: "+15550999",
      url: "https://example.test/answer",
    })).resolves.toMatchObject({ sid: "CA123" });
    await expect(client.fetchCall("CA123")).resolves.toMatchObject({ status: "in-progress" });
    await expect(client.redirectCall("CA123", { url: "https://example.test/redirect" }))
      .resolves.toMatchObject({ url: "https://example.test/redirect" });
    await expect(client.endCall("CA123")).resolves.toMatchObject({ status: "completed" });
    await expect(client.fetchAccount()).resolves.toMatchObject({ sid: "AC123" });
  });

  it("creates operation handlers around an injected SDK-backed client", async () => {
    const client = createTwilioVoiceClient({
      accountSid: "AC123",
      rawClient: fakeTwilioRawClient(),
    });
    const handlers = createTwilioVoiceOperationHandlers({
      accountSid: "AC123",
      voiceClient: client,
      webhookAuthToken: "token",
    });

    await expect(handlers["voice.call.start"]({
      to: "+15550100",
      from: "+15550999",
      url: "https://example.test/answer",
    })).resolves.toMatchObject({ sid: "CA123" });
    await expect(handlers["voice.call.redirect"]({
      callSid: "CA123",
      redirect: { twiml: "<Response><Say>Redirected</Say></Response>" },
    })).resolves.toMatchObject({ twiml: "<Response><Say>Redirected</Say></Response>" });

    const params = new URLSearchParams({
      CallSid: "CA123",
      AccountSid: "AC123",
      From: "+15550100",
      To: "+15550999",
      CallStatus: "ringing",
    });
    const url = "https://example.test/twilio/voice";
    const request = new Request(url, {
      method: "POST",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        "x-twilio-signature": signTwilio(url, Object.fromEntries(params), "token"),
      },
      body: params,
    });

    await expect(handlers["voice.call.answer"]({ request })).resolves.toMatchObject({
      callSid: "CA123",
      callStatus: "ringing",
    });
  });

  it("preserves media stream TwiML constraints", () => {
    expect(createTwilioMediaStreamTwiML({
      websocketUrl: "wss://example.test/voice",
      mode: "connect",
      track: "inbound_track",
      customParameters: { conversationId: "conversation-1" },
    })).toContain("<Connect><Stream");
    expect(() => createTwilioMediaStreamTwiML({
      websocketUrl: "wss://example.test/voice",
      mode: "connect",
      track: "both_tracks",
    })).toThrow("inbound_track only");
  });

  it("validates and parses Twilio Voice webhooks", async () => {
    const params = new URLSearchParams({
      CallSid: "CA123",
      AccountSid: "AC123",
      From: "+15550100",
      To: "+15550999",
      CallStatus: "in-progress",
    });
    const url = "https://example.test/twilio/voice";
    const signature = signTwilio(url, Object.fromEntries(params), "token");
    const request = new Request(url, {
      method: "POST",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        "x-twilio-signature": signature,
      },
      body: params,
    });

    await expect(parseTwilioVoiceWebhook(request, { authToken: "token" })).resolves.toMatchObject({
      callSid: "CA123",
      callStatus: "in-progress",
    });
    expect(validateTwilioRequestSignature({
      url,
      params: Object.fromEntries(params),
      signature,
      authToken: "token",
    })).toBe(true);
  });

  it("reports credential readiness", () => {
    expect(twilioVoiceCredentialStatuses({}).map((status) => status.state)).toEqual(["missing", "missing", "not-required"]);
    expect(twilioVoiceCredentialStatuses({ accountSid: "AC123", authToken: "token" }).map((status) => status.state))
      .toEqual(["configured", "configured", "configured"]);
  });
});

function fakeTwilioRawClient(onCreate?: (input: Record<string, unknown>) => void): TwilioVoiceRawClient {
  const calls = Object.assign(
    (sid: string) => ({
      async fetch() {
        return { sid, status: "in-progress" };
      },
      async update(input: Record<string, unknown>) {
        return { sid, ...input };
      },
    }),
    {
      async create(input: Record<string, unknown>) {
        onCreate?.(input);
        return { sid: "CA123", status: "queued" };
      },
      get(sid: string) {
        return calls(sid);
      },
    },
  );
  return {
    calls,
    api: {
      accounts(accountSid) {
        return { async fetch() { return { sid: accountSid, status: "active" }; } };
      },
    },
  };
}

function signTwilio(url: string, params: Record<string, string>, authToken: string) {
  return twilio.getExpectedTwilioSignature(authToken, url, params);
}
