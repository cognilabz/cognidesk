import { createHash, createHmac } from "node:crypto";
import { readFile } from "node:fs/promises";
import { describe, expect, it, vi } from "vitest";
import {
  createVonageVoiceIntegration,
  createVonageVoiceClient,
  createVonageVoiceOperationHandlers,
  createVonageWebSocketNcco,
  parseVonageWebhook,
  type VonageRawClient,
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
    expect(vonageVoiceProviderManifest.operations.find((operation: { alias: string }) =>
      operation.alias === "voice.call.transfer"))
      .toMatchObject({ providerOperation: "transferCallWithURL" });
    expect(Object.keys(createVonageVoiceOperationHandlers({
      applicationId: "app-id",
      voiceClient: createVonageVoiceClient({
        applicationId: "app-id",
        rawClient: fakeVonageRawClient(),
      }),
    }))).toEqual([
      "voice.call.answer",
      "voice.call.start",
      "voice.call.transfer",
    ]);
    expect(createVonageVoiceIntegration({
      applicationId: "app-id",
      voiceClient: createVonageVoiceClient({
        applicationId: "app-id",
        rawClient: fakeVonageRawClient(),
      }),
    }).manifest.id).toBe("voice.vonage");
    await expect(readFile(new URL("../src/manifest.ts", import.meta.url), "utf8"))
      .resolves.not.toMatch(/from\s+["']@vonage\/server-sdk["']/);
  });

  it("uses injected Vonage SDK clients for voice calls", async () => {
    const rawClient = fakeVonageRawClient((input) => {
      expect(input).toMatchObject({
        to: [{ type: "phone", number: "15550100" }],
        event_url: ["https://example.test/events"],
      });
    });
    const client = createVonageVoiceClient({
      applicationId: "app-id",
      jwt: "jwt",
      defaultEventUrl: ["https://example.test/events"],
      rawClient,
    });

    await expect(client.createOutboundCall({
      to: [{ type: "phone", number: "15550100" }],
      from: { type: "phone", number: "15550999" },
      answerUrl: ["https://example.test/answer"],
    })).resolves.toMatchObject({ uuid: "call-1" });
    await expect(client.fetchCall("call-1")).resolves.toMatchObject({ status: "answered" });
    await expect(client.transferCall("call-1", {
      action: "transfer",
      destination: { type: "url", url: ["https://example.test/transfer"] },
    })).resolves.toMatchObject({ uuid: "call-1", transferUrl: "https://example.test/transfer" });
    await expect(client.transferCall("call-1", {
      action: "transfer",
      destination: { type: "ncco", ncco: [{ action: "talk", text: "Transferred" }] },
    })).resolves.toMatchObject({ uuid: "call-1", ncco: [{ action: "talk", text: "Transferred" }] });
    await expect(client.getRawClient()).resolves.toBe(rawClient);
  });

  it("creates @vonage/server-sdk raw clients when no client is injected", async () => {
    const constructed: unknown[] = [];
    const sdkCalls: unknown[] = [];
    const voice = {
      async createOutboundCall(input: Record<string, unknown>) {
        sdkCalls.push(input);
        return { uuid: "sdk-call", status: "started" };
      },
      async getCall(uuid: string) {
        return { uuid, status: "answered" };
      },
      async transferCallWithURL(uuid: string, url: string) {
        sdkCalls.push({ uuid, url });
      },
    };
    class FakeVonage {
      voice = voice;
      constructor(credentials: unknown) {
        constructed.push(credentials);
      }
    }
    vi.doMock("@vonage/server-sdk", () => ({ Vonage: FakeVonage }));
    try {
      const client = createVonageVoiceClient({
        applicationId: "app-id",
        privateKey: "private-key",
        defaultEventUrl: ["https://example.test/events"],
      });

      await expect(client.createOutboundCall({
        to: [{ type: "phone", number: "15550100" }],
        answerUrl: ["https://example.test/answer"],
      })).resolves.toMatchObject({ uuid: "sdk-call" });
      await expect(client.fetchCall("sdk-call")).resolves.toMatchObject({ status: "answered" });
      await expect(client.transferCall("sdk-call", {
        action: "transfer",
        destination: { type: "url", url: ["https://example.test/transfer"] },
      })).resolves.toBeUndefined();
      await expect(client.getRawClient()).resolves.toBeInstanceOf(FakeVonage);
    } finally {
      vi.doUnmock("@vonage/server-sdk");
    }

    expect(constructed).toEqual([{ applicationId: "app-id", privateKey: "private-key" }]);
    expect(sdkCalls).toEqual([
      {
        to: [{ type: "phone", number: "15550100" }],
        answer_url: ["https://example.test/answer"],
        event_url: ["https://example.test/events"],
      },
      { uuid: "sdk-call", url: "https://example.test/transfer" },
    ]);
  });

  it("creates operation handlers around an SDK-backed Vonage client", async () => {
    const handlers = createVonageVoiceOperationHandlers({
      applicationId: "app-id",
      voiceClient: createVonageVoiceClient({
        applicationId: "app-id",
        rawClient: fakeVonageRawClient(),
      }),
    });

    await expect(handlers["voice.call.start"]({
      to: [{ type: "phone", number: "15550100" }],
      answerUrl: ["https://example.test/answer"],
      eventUrl: ["https://example.test/events"],
    })).resolves.toMatchObject({ uuid: "call-1" });
    await expect(handlers["voice.call.transfer"]({
      uuid: "call-1",
      transfer: {
        action: "transfer",
        destination: { type: "url", url: ["https://example.test/transfer"] },
      },
    })).resolves.toMatchObject({ transferUrl: "https://example.test/transfer" });
  });

  it("preserves NCCO and outbound-call fail-closed constraints", async () => {
    expect(createVonageWebSocketNcco({ websocketUrl: "wss://example.test/voice" }))
      .toEqual([{ action: "connect", endpoint: [{ type: "websocket", uri: "wss://example.test/voice" }] }]);
    const client = createVonageVoiceClient({
      applicationId: "app-id",
      jwt: "jwt",
      rawClient: fakeVonageRawClient(),
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

function fakeVonageRawClient(onCreate?: (input: Record<string, unknown>) => void): VonageRawClient {
  return {
    voice: {
      async createOutboundCall(input) {
        onCreate?.(input);
        return { uuid: "call-1", status: "started" };
      },
      async getCall(uuid) {
        return { uuid, status: "answered" };
      },
      async transferCallWithURL(uuid, url) {
        return { uuid, transferUrl: url };
      },
      async transferCallWithNCCO(uuid, ncco) {
        return { uuid, ncco };
      },
    },
  };
}

function base64url(value: string) {
  return Buffer.from(value).toString("base64url");
}
