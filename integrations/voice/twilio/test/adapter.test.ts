import { createHmac } from "node:crypto";
import { readFile } from "node:fs/promises";
import { describe, expect, it } from "vitest";
import {
  createTwilioMediaStreamTwiML,
  createTwilioVoiceClient,
  parseTwilioVoiceWebhook,
  twilioVoiceCredentialStatuses,
  twilioVoiceIntegration,
  twilioVoiceProviderManifest,
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
    await expect(readFile(new URL("../src/manifest.ts", import.meta.url), "utf8"))
      .resolves.not.toMatch(/from\s+["']twilio["']/);
  });

  it("uses injected Twilio helper clients for voice calls", async () => {
    const client = createTwilioVoiceClient({
      accountSid: "AC123",
      authToken: "token",
      rawClient: {
        calls: {
          async create(input) {
            expect(input).toMatchObject({
              to: "+15550100",
              from: "+15550999",
              url: "https://example.test/answer",
            });
            return { sid: "CA123", status: "queued" };
          },
          get(sid) {
            return {
              async fetch() {
                return { sid, status: "in-progress" };
              },
              async update(input) {
                return { sid, ...input };
              },
            };
          },
        },
        api: {
          accounts(accountSid) {
            return { async fetch() { return { sid: accountSid, status: "active" }; } };
          },
        },
      },
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
  });

  it("reports credential readiness", () => {
    expect(twilioVoiceCredentialStatuses({}).map((status) => status.state)).toEqual(["missing", "missing", "not-required"]);
    expect(twilioVoiceCredentialStatuses({ accountSid: "AC123", authToken: "token" }).map((status) => status.state))
      .toEqual(["configured", "configured", "configured"]);
  });
});

function signTwilio(url: string, params: Record<string, string>, authToken: string) {
  const signed = Object.keys(params).sort()
    .reduce((value, key) => `${value}${key}${params[key] ?? ""}`, url);
  return createHmac("sha1", authToken).update(signed).digest("base64");
}
