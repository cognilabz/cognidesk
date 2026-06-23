import { createHash, createHmac } from "node:crypto";
import { readFile } from "node:fs/promises";
import { describe, expect, it } from "vitest";
import {
  createVonageVoiceClient,
  createVonageWebSocketNcco,
  parseVonageWebhook,
  vonageVoiceCredentialStatuses,
  vonageVoiceIntegration,
  vonageVoiceProviderManifest,
} from "../src/index.js";

describe("@cognidesk/integration-voice-vonage", () => {
  it("keeps manifest metadata split from SDK runtime imports", async () => {
    expect(vonageVoiceProviderManifest.packageName).toBe("@cognidesk/integration-voice-vonage");
    expect(vonageVoiceProviderManifest.metadata?.implementation).toMatchObject({
      strategy: "official-sdk",
      sdkPackage: "@vonage/server-sdk",
      verifiedVersion: "3.27.0",
    });
    expect(Object.keys(vonageVoiceIntegration.operations)).toEqual([
      "voice.call.answer",
      "voice.call.start",
      "voice.call.transfer",
    ]);
    await expect(readFile(new URL("../src/manifest.ts", import.meta.url), "utf8"))
      .resolves.not.toMatch(/from\s+["']@vonage\/server-sdk["']/);
  });

  it("uses injected Vonage SDK clients for voice calls", async () => {
    const client = createVonageVoiceClient({
      applicationId: "app-id",
      jwt: "jwt",
      defaultEventUrl: ["https://example.test/events"],
      rawClient: {
        voice: {
          async createOutboundCall(input) {
            expect(input).toMatchObject({
              to: [{ type: "phone", number: "15550100" }],
              event_url: ["https://example.test/events"],
            });
            return { uuid: "call-1", status: "started" };
          },
          async getCall(uuid) {
            return { uuid, status: "answered" };
          },
          async updateCall(uuid, input) {
            return { uuid, ...input };
          },
        },
      },
    });

    await expect(client.createOutboundCall({
      to: [{ type: "phone", number: "15550100" }],
      from: { type: "phone", number: "15550999" },
      answerUrl: ["https://example.test/answer"],
    })).resolves.toMatchObject({ uuid: "call-1" });
    await expect(client.fetchCall("call-1")).resolves.toMatchObject({ status: "answered" });
    await expect(client.updateCall("call-1", {
      action: "transfer",
      destination: { type: "url", url: ["https://example.test/transfer"] },
    })).resolves.toMatchObject({ action: "transfer" });
  });

  it("preserves NCCO and outbound-call fail-closed constraints", async () => {
    expect(createVonageWebSocketNcco({ websocketUrl: "wss://example.test/voice" }))
      .toEqual([{ action: "connect", endpoint: [{ type: "websocket", uri: "wss://example.test/voice" }] }]);
    const client = createVonageVoiceClient({
      applicationId: "app-id",
      jwt: "jwt",
      rawClient: { voice: { async createOutboundCall() { return { uuid: "call-1" }; } } },
    });
    await expect(client.createOutboundCall({
      to: [{ type: "phone", number: "15550100" }],
      answerUrl: ["https://example.test/answer"],
    })).rejects.toThrow("eventUrl or defaultEventUrl");
  });

  it("validates and parses Vonage webhooks", async () => {
    const body = JSON.stringify({
      uuid: "call-1",
      status: "completed",
      from: "15550100",
      to: "15550999",
    });
    const signedBody = JSON.stringify({
      uuid: "call-1",
      status: "completed",
    });
    const token = signVonageJwt({
      payload_hash: createHash("sha256").update(signedBody).digest("hex"),
      api_key: "api-key",
    }, "secret");
    const request = new Request("https://example.test/vonage/events", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: signedBody,
    });

    await expect(parseVonageWebhook(request, {
      signatureSecret: "secret",
      expectedApiKey: "api-key",
    })).resolves.toMatchObject({
      type: "event",
      uuid: "call-1",
      status: "completed",
    });
  });

  it("reports credential readiness", () => {
    expect(vonageVoiceCredentialStatuses({}).map((status) => status.state)).toEqual(["missing", "not-required"]);
    expect(vonageVoiceCredentialStatuses({ applicationId: "app-id", jwt: "jwt", signatureSecret: "secret" }).map((status) => status.state))
      .toEqual(["configured", "configured"]);
  });
});

function signVonageJwt(payload: Record<string, unknown>, secret: string) {
  const header = base64url(JSON.stringify({ alg: "HS256", typ: "JWT" }));
  const body = base64url(JSON.stringify(payload));
  const signature = createHmac("sha256", secret).update(`${header}.${body}`).digest("base64url");
  return `${header}.${body}.${signature}`;
}

function base64url(value: string) {
  return Buffer.from(value).toString("base64url");
}
