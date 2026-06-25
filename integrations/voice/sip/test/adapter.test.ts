import { createHmac } from "node:crypto";
import { describe, expect, it, vi } from "vitest";
import {
  buildSipAddress,
  createDrachtioSrfSipStackGateway,
  createSipVoiceClient,
  createSipVoiceLiveChecks,
  parseSipVoiceWebhook,
  sipVoiceCredentialStatuses,
  sipVoiceProviderManifest,
  validateSipWebhookSignature,
  type SipStackGateway,
  type SipVoiceConfig,
} from "../src/index.js";

describe("@cognidesk/integration-voice-sip", () => {
  it("exports an official provider manifest for generic SIP voice", () => {
    expect(sipVoiceProviderManifest).toMatchObject({
      id: "voice.sip",
      packageName: "@cognidesk/integration-voice-sip",
      category: "voice",
      provider: "sip",
      trustLevel: "official",
      directions: ["inbound-only", "outbound-only", "bidirectional"],
    });
    expect(sipVoiceProviderManifest.credentialRequirements.map((requirement: { id: string }) => requirement.id))
      .toEqual(expect.arrayContaining([
        "sip-registrar",
        "sip-proxy",
        "sip-domain",
        "sip-auth",
        "sip-tls",
        "sip-srtp",
        "sip-webhook-callback",
      ]));
    expect(sipVoiceProviderManifest.capabilities.map((capability: { capability: string }) => capability.capability))
      .toEqual(expect.arrayContaining([
        "receive",
        "send",
        "media",
        "transfer",
        "recording",
        "transcription",
        "sip.webhook-signature",
      ]));
    expect(sipVoiceProviderManifest.coverage).toMatchObject({
      scope: "local-protocol",
    });
    expect(sipVoiceProviderManifest.coverage.notes.join(" "))
      .toContain("drachtio-srf-backed gateway adapter");
    expect(sipVoiceProviderManifest.coverage.notes.join(" "))
      .toContain("Provider-specific SIP registration, inbound request/response acceptance");
    expect(sipVoiceProviderManifest.metadata).toMatchObject({
      implementation: {
        strategy: "protocol-runtime-sdk-gateway",
        providerSdkDecision: "provider-protocol-lib/drachtio-srf",
        providerSdkDependencies: ["drachtio-srf"],
      },
    });
  });

  it("reports Studio-visible readiness for SIP stack configuration", () => {
    const statuses = sipVoiceCredentialStatuses({
      registrarUri: "sip:registrar.example.com",
      proxyUri: "sip:sbc.example.com;transport=tls",
      domain: "example.com",
      authUsername: "agent-100",
      authPassword: "secret",
      tlsEnabled: true,
      mediaEncryption: "srtp",
      webhookCallbackUrl: "https://desk.example.com/sip/events",
      webhookHmacSecret: "webhook-secret",
    });

    expect(statuses).toHaveLength(7);
    expect(statuses.every((status) => status.providerPackageId === "voice.sip")).toBe(true);
    expect(statuses.every((status) => status.state === "configured")).toBe(true);
  });

  it("marks every SDK-owned SIP readiness dimension as missing when absent", () => {
    const statuses = sipVoiceCredentialStatuses({});

    expect(statuses.map((status) => [status.requirementId, status.state])).toEqual([
      ["sip-registrar", "missing"],
      ["sip-proxy", "missing"],
      ["sip-domain", "missing"],
      ["sip-auth", "missing"],
      ["sip-tls", "missing"],
      ["sip-srtp", "missing"],
      ["sip-webhook-callback", "missing"],
    ]);
  });

  it("delegates call control to the SDK user's SIP stack gateway", async () => {
    const calls: unknown[] = [];
    const gateway: SipStackGateway = {
      createOutboundCall(input, context) {
        calls.push({ input, config: context.config });
        return {
          callId: "call_1",
          providerCallId: "provider_call_1",
          state: "inviting",
          ...(input.offer ? { remoteDescription: input.offer } : {}),
        };
      },
      transferCall(input) {
        calls.push(input);
        return { callId: input.callId, state: "transferring" };
      },
      sendDtmf(input) {
        calls.push(input);
        return { callId: input.callId, state: "answered" };
      },
    };
    const client = createSipVoiceClient({ config: validConfig(), gateway });

    await expect(client.createOutboundCall({
      to: { uri: "sip:+431234@example.com", displayName: "Customer" },
      from: "sip:support@example.com",
      offer: { type: "offer", sdp: "v=0\r\nm=audio 49170 RTP/SAVP 0" },
    })).resolves.toMatchObject({
      callId: "call_1",
      state: "inviting",
      remoteDescription: { type: "offer" },
    });
    await expect(client.transferCall({ callId: "call_1", target: "sip:agent2@example.com" }))
      .resolves.toMatchObject({ state: "transferring" });
    await expect(client.sendDtmf({ callId: "call_1", digits: "123#" }))
      .resolves.toMatchObject({ state: "answered" });
    expect(calls).toHaveLength(3);
  });

  it("uses drachtio-srf for outbound SIP gateway call-control operations", async () => {
    const dialog = {
      sip: { callId: "drachtio-call-1", localTag: "ltag", remoteTag: "rtag" },
      destroy: vi.fn((_: unknown, callback: (error?: Error | null) => void) => callback(null)),
      request: vi.fn(async () => ({ statusCode: 202 })),
      modify: vi.fn(async () => "v=0\r\nm=audio 49172 RTP/SAVP 0"),
    };
    const srf = {
      createUAC: vi.fn(async () => dialog),
    };
    const gateway = createDrachtioSrfSipStackGateway({ srf: srf as never });
    const client = createSipVoiceClient({ config: validConfig(), gateway });

    await expect(gateway.checkReadiness?.({ config: validConfig() })).resolves.toMatchObject({
      ok: true,
      details: { sdkPackage: "drachtio-srf" },
    });
    await expect(client.createOutboundCall({
      to: "sip:customer@example.com",
      from: "sip:support@example.com",
      offer: { type: "offer", sdp: "v=0\r\nm=audio 49170 RTP/SAVP 0" },
    })).resolves.toMatchObject({
      callId: "drachtio-call-1",
      providerCallId: "drachtio-call-1",
      dialogId: "drachtio-call-1:ltag:rtag",
      state: "answered",
    });
    expect(srf.createUAC).toHaveBeenCalledWith("sip:customer@example.com", expect.objectContaining({
      auth: { username: "agent-100", password: "secret" },
      localSdp: "v=0\r\nm=audio 49170 RTP/SAVP 0",
    }));

    await expect(client.transferCall({ callId: "drachtio-call-1", target: "sip:agent2@example.com" }))
      .resolves.toMatchObject({ state: "transferring" });
    await expect(client.sendDtmf({ callId: "drachtio-call-1", digits: "123#" }))
      .resolves.toMatchObject({ state: "answered" });
    await expect(client.updateMediaSession({
      callId: "drachtio-call-1",
      offer: { type: "offer", sdp: "v=0\r\nm=audio 49172 RTP/SAVP 0" },
    })).resolves.toMatchObject({ localDescription: { contentType: "application/sdp" } });
    await expect(client.hangupCall({ callId: "drachtio-call-1" }))
      .resolves.toMatchObject({ state: "completed" });

    expect(dialog.request).toHaveBeenCalledTimes(2);
    expect(dialog.modify).toHaveBeenCalledWith("v=0\r\nm=audio 49172 RTP/SAVP 0", { noAck: false });
    expect(dialog.destroy).toHaveBeenCalled();
  });

  it("fails unsupported call control clearly instead of pretending to be a SIP stack", async () => {
    const client = createSipVoiceClient({ config: validConfig(), gateway: {} });

    await expect(client.hangupCall({ callId: "call_1", reason: "customer-ended" }))
      .rejects.toThrow("SIP stack gateway does not implement hangupCall");
  });

  it("fails SIP readiness closed when no local stack gateway is supplied", async () => {
    const client = createSipVoiceClient({ config: validConfig() });

    await expect(client.checkReadiness()).resolves.toMatchObject({
      ok: false,
      registrarReachable: false,
      registered: false,
      proxyReachable: false,
      missing: ["sip-stack-gateway"],
      details: {
        providerSdkDecision: "provider-protocol-lib/drachtio-srf",
        providerSdkDependencies: ["drachtio-srf"],
        gatewayRequired: true,
      },
    });
  });

  it("rejects live readiness without a gateway readiness implementation", async () => {
    const checks = createSipVoiceLiveChecks({ config: validConfig() });

    await expect(checks[0]?.run({})).rejects.toThrow("SIP readiness check failed: sip-stack-gateway");
  });

  it("runs live readiness through the configured gateway and exposes readiness details", async () => {
    const checks = createSipVoiceLiveChecks({
      config: validConfig(),
      gateway: {
        checkReadiness() {
          return {
            ok: true,
            registrarReachable: true,
            registered: true,
            proxyReachable: true,
            tlsReady: true,
            srtpReady: true,
            webhookReachable: true,
            details: { registrationExpiresInSeconds: 3600 },
          };
        },
      },
    });

    await expect(checks[0]?.run({})).resolves.toEqual({
      details: expect.objectContaining({
        registrarReachable: true,
        registered: true,
        registrationExpiresInSeconds: 3600,
      }),
    });
  });

  it("parses secured JSON call status callbacks with shared-secret and HMAC validation", async () => {
    const body = JSON.stringify({
      eventType: "call.status",
      callId: "sip-call-1",
      providerCallId: "dialog-1",
      status: "in-progress",
      direction: "inbound",
      from: "sip:customer@example.com",
      to: "sip:support@example.com",
    });
    const request = signedRequest(body, {
      sharedSecret: "shared-secret",
      hmacSecret: "hmac-secret",
    });

    await expect(parseSipVoiceWebhook(request, {
      sharedSecret: "shared-secret",
      hmacSecret: "hmac-secret",
    })).resolves.toMatchObject({
      type: "call.status",
      callId: "sip-call-1",
      providerCallId: "dialog-1",
      status: "answered",
      direction: "inbound",
    });
  });

  it("rejects invalid shared-secret or HMAC webhook validation", async () => {
    const body = JSON.stringify({ eventType: "call.status", callId: "sip-call-1" });

    await expect(parseSipVoiceWebhook(signedRequest(body, {
      sharedSecret: "wrong",
      hmacSecret: "hmac-secret",
    }), {
      sharedSecret: "shared-secret",
      hmacSecret: "hmac-secret",
    })).rejects.toThrow("shared-secret validation failed");

    await expect(parseSipVoiceWebhook(new Request("https://desk.example.com/sip/events", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-cognidesk-sip-secret": "shared-secret",
        "x-cognidesk-sip-signature": "sha256=bad",
      },
      body,
    }), {
      sharedSecret: "shared-secret",
      hmacSecret: "hmac-secret",
    })).rejects.toThrow("HMAC validation failed");
  });

  it("normalizes transfer, recording, and transcription callbacks", async () => {
    await expect(parseSipVoiceWebhook(jsonRequest({
      event: "transfer.completed",
      callId: "call_1",
      status: "completed",
      referTo: "sip:agent@example.com",
    }), { requireSignature: false })).resolves.toMatchObject({
      type: "call.transfer",
      transferStatus: "completed",
      target: "sip:agent@example.com",
    });

    await expect(parseSipVoiceWebhook(jsonRequest({
      event: "recording",
      callId: "call_1",
      recordingId: "rec_1",
      status: "stopped",
      url: "https://recordings.example.com/rec_1.wav",
      duration: "42",
    }), { requireSignature: false })).resolves.toMatchObject({
      type: "recording",
      recordingStatus: "completed",
      recordingUrl: "https://recordings.example.com/rec_1.wav",
      durationSeconds: 42,
    });

    await expect(parseSipVoiceWebhook(jsonRequest({
      event: "transcript.partial",
      callId: "call_1",
      transcriptionId: "tr_1",
      status: "interim",
      transcript: "I need help",
      speaker: "customer",
      confidence: "0.91",
      final: "false",
    }), { requireSignature: false })).resolves.toMatchObject({
      type: "transcription",
      transcriptionStatus: "partial",
      text: "I need help",
      speaker: "customer",
      confidence: 0.91,
      isFinal: false,
    });
  });

  it("formats SIP display-name addresses and validates standalone signatures", () => {
    const body = "event=recording&status=started";
    const signature = createHmac("sha256", "secret").update(body).digest("base64");

    expect(buildSipAddress({ uri: "sip:support@example.com", displayName: "Flight Support" }))
      .toBe("\"Flight Support\" <sip:support@example.com>");
    expect(validateSipWebhookSignature({ body, signature, secret: "secret" })).toBe(true);
    expect(validateSipWebhookSignature({ body, signature: "bad", secret: "secret" })).toBe(false);
  });
});

function validConfig(): SipVoiceConfig {
  return {
    registrarUri: "sip:registrar.example.com",
    proxyUri: "sip:sbc.example.com;transport=tls",
    domain: "example.com",
    authUsername: "agent-100",
    authPassword: "secret",
    transport: "tls",
    tlsEnabled: true,
    srtpEnabled: true,
    mediaEncryption: "srtp",
    webhookCallbackUrl: "https://desk.example.com/sip/events",
    webhookHmacSecret: "hmac-secret",
  };
}

function signedRequest(body: string, input: { sharedSecret: string; hmacSecret: string }) {
  const signature = createHmac("sha256", input.hmacSecret).update(body).digest("hex");
  return new Request("https://desk.example.com/sip/events", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "x-cognidesk-sip-secret": input.sharedSecret,
      "x-cognidesk-sip-signature": `sha256=${signature}`,
    },
    body,
  });
}

function jsonRequest(body: Record<string, unknown>) {
  return new Request("https://desk.example.com/sip/events", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(body),
  });
}
