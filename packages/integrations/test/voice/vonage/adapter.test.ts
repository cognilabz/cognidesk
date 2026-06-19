import { createHash, createHmac } from "node:crypto";
import { describe, expect, it, vi } from "vitest";
import { runProviderConformance } from "@cognidesk/test-harness";
import {
  VONAGE_VOICE_FULL_API_GENERATED_FUNCTION_COUNT,
  VONAGE_VOICE_FULL_API_OPERATION_COUNT,
  VONAGE_VOICE_FULL_API_PATH_COUNT,
  createVonageVoiceClient,
  createVonageVoiceLiveChecks,
  createVonageWebSocketNcco,
  parseVonageWebhook,
  verifyVonageWebhookJwt,
  vonageVoiceCredentialStatuses,
  vonageVoiceProviderManifest,
} from "../../../src/voice/vonage/index.js";

describe("@cognidesk/integrations", () => {
  it("exports an official provider manifest for Vonage Voice", () => {
    expect(vonageVoiceProviderManifest).toMatchObject({
      id: "voice.vonage",
      packageName: "@cognidesk/integrations",
      category: "voice",
      provider: "vonage",
      trustLevel: "official",
    });
    expect(vonageVoiceProviderManifest.capabilities.map((capability) => capability.capability))
      .toEqual(expect.arrayContaining([
        "receive",
        "send",
        "media",
        "transfer",
        "voice.webhook-signature",
      ]));
    expect(vonageVoiceProviderManifest.coverage).toMatchObject({
      scope: "full-provider-api",
    });
    expect(vonageVoiceProviderManifest.coverage.notes.join(" "))
      .toContain("every operation in the official Vonage Voice v1, Voice v2, Application v2, Conversation v1, and Numbers OpenAPI specs");
    expect(vonageVoiceProviderManifest.coverage.notes.join(" "))
      .toContain("Voice v2 outbound app/IP calls");
    expect(vonageVoiceProviderManifest.capabilities.find((capability) => capability.capability === "media")?.description)
      .toContain("generated fullApi functions expose the separate Voice v2 app/IP outbound-call endpoint");
    expect(vonageVoiceProviderManifest.coverage.evidence.map((entry) => entry.url)).toEqual(expect.arrayContaining([
      "https://developer.vonage.com/api/v1/developer/api/file/voice?format=json&vendorId=vonage",
      "https://developer.vonage.com/api/v1/developer/api/file/voice.v2?format=json&vendorId=vonage",
      "https://developer.vonage.com/api/v1/developer/api/file/application.v2?format=json&vendorId=vonage",
      "https://developer.vonage.com/api/v1/developer/api/file/conversation?format=json&vendorId=vonage",
      "https://developer.vonage.com/api/v1/developer/api/file/numbers?format=json&vendorId=vonage",
      "https://developer.vonage.com/en/voice/voice-api/webhook-reference",
      "https://developer.vonage.com/en/application/technical-details",
      "https://developer.vonage.com/en/voice/voice-api/concepts/call-flow",
      "https://developer.vonage.com/en/voice/voice-api/concepts/endpoints",
    ]));
    expect(vonageVoiceProviderManifest.metadata?.fullProviderApiVerification).toMatchObject({
      provider: "vonage-voice-rest-bundle",
      apiVersion: "vonage-voice-bundle-2026-06-18",
      documentedPathCount: 27,
      documentedOperationCount: 47,
      implementedOperationCount: 47,
      unimplementedOperationCount: 0,
      generatedFunctionCount: 47,
    });
    expect(VONAGE_VOICE_FULL_API_PATH_COUNT).toBe(27);
    expect(VONAGE_VOICE_FULL_API_OPERATION_COUNT).toBe(47);
    expect(VONAGE_VOICE_FULL_API_GENERATED_FUNCTION_COUNT).toBe(47);
  });

  it("creates outbound calls through the Vonage Voice API", async () => {
    const fetchMock = vi.fn(async () =>
      new Response(JSON.stringify({
        uuid: "call-uuid",
        status: "started",
        direction: "outbound",
      }), { status: 201 })
    );
    const client = createVonageVoiceClient({
      applicationId: "app-id",
      jwtFactory: () => "jwt-token",
      fetch: fetchMock as unknown as typeof fetch,
    });

    const call = await client.createOutboundCall({
      to: [{ type: "phone", number: "15550100" }],
      from: { type: "phone", number: "15550999" },
      answerUrl: ["https://example.test/vonage/answer"],
      eventUrl: ["https://example.test/vonage/events"],
      answerMethod: "POST",
    });

    expect(call.uuid).toBe("call-uuid");
    expect(fetchMock).toHaveBeenCalledWith(
      "https://api.nexmo.com/v1/calls",
      expect.objectContaining({
        method: "POST",
        headers: expect.objectContaining({
          authorization: "Bearer jwt-token",
          "content-type": "application/json",
        }),
      }),
    );
    const request = (fetchMock.mock.calls[0] as unknown[])[1] as { body: string };
    expect(JSON.parse(request.body)).toMatchObject({
      to: [{ type: "phone", number: "15550100" }],
      from: { type: "phone", number: "15550999" },
      answer_url: ["https://example.test/vonage/answer"],
      event_url: ["https://example.test/vonage/events"],
      answer_method: "POST",
    });
  });

  it("creates outbound calls with embedded NCCO and rejects unobservable calls", async () => {
    const fetchMock = vi.fn(async () =>
      new Response(JSON.stringify({ uuid: "call-uuid", status: "started" }), { status: 201 })
    );
    const client = createVonageVoiceClient({
      applicationId: "app-id",
      jwtFactory: () => "jwt-token",
      defaultEventUrl: ["https://example.test/vonage/events"],
      fetch: fetchMock as unknown as typeof fetch,
    });

    await expect(client.createOutboundCall({
      to: [{ type: "phone", number: "15550100" }],
      from: { type: "phone", number: "15550999" },
      ncco: [{ action: "talk", text: "Connecting you now." }],
      randomFromNumber: false,
      advancedMachineDetection: { behavior: "continue" },
    })).resolves.toMatchObject({ uuid: "call-uuid" });

    const request = (fetchMock.mock.calls[0] as unknown[])[1] as { body: string };
    expect(JSON.parse(request.body)).toMatchObject({
      ncco: [{ action: "talk", text: "Connecting you now." }],
      event_url: ["https://example.test/vonage/events"],
      random_from_number: false,
      advanced_machine_detection: { behavior: "continue" },
    });
    await client.createOutboundCall({
      to: [{ type: "phone", number: "15550100" }],
      ncco: [{ action: "talk", text: "Connecting you now." }],
      randomFromNumber: true,
    });
    const randomRequest = (fetchMock.mock.calls[1] as unknown[])[1] as { body: string };
    expect(JSON.parse(randomRequest.body)).toMatchObject({
      random_from_number: true,
    });
    expect(JSON.parse(randomRequest.body)).not.toHaveProperty("from");
    await expect(client.createOutboundCall({
      to: [{ type: "phone", number: "15550100" }],
      from: { type: "phone", number: "15550999" },
      ncco: [{ action: "talk", text: "Connecting you now." }],
      randomFromNumber: true,
    })).rejects.toThrow("cannot combine from with randomFromNumber");

    const clientWithoutEventDefaults = createVonageVoiceClient({
      applicationId: "app-id",
      jwtFactory: () => "jwt-token",
      fetch: vi.fn() as unknown as typeof fetch,
    });
    await expect(clientWithoutEventDefaults.createOutboundCall({
      to: [{ type: "phone", number: "15550100" }],
      from: { type: "phone", number: "15550999" },
      answerUrl: ["https://example.test/vonage/answer"],
    })).rejects.toThrow("require eventUrl or defaultEventUrl");
  });

  it("rejects app endpoints on the v1 outbound call client", async () => {
    const client = createVonageVoiceClient({
      applicationId: "app-id",
      jwtFactory: () => "jwt-token",
      fetch: vi.fn() as unknown as typeof fetch,
    });

    await expect(client.createOutboundCall({
      to: [{ type: "app", user: "agent-1" }],
      from: { type: "phone", number: "15550999" },
      answerUrl: ["https://example.test/vonage/answer"],
      eventUrl: ["https://example.test/vonage/events"],
    })).rejects.toThrow("Voice v2 /calls API");
  });

  it("updates active calls with the documented transfer action", async () => {
    const fetchMock = vi.fn(async () => new Response(JSON.stringify({ message: "ok" }), { status: 200 }));
    const client = createVonageVoiceClient({
      applicationId: "app-id",
      jwtFactory: () => "jwt-token",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await client.updateCall("call-uuid", {
      action: "transfer",
      destination: { type: "url", url: ["https://example.test/vonage/transfer"] },
    });

    expect(fetchMock).toHaveBeenCalledWith(
      "https://api.nexmo.com/v1/calls/call-uuid",
      expect.objectContaining({ method: "PUT" }),
    );
    const request = (fetchMock.mock.calls[0] as unknown[])[1] as { body: string };
    expect(JSON.parse(request.body)).toEqual({
      action: "transfer",
      destination: { type: "url", url: ["https://example.test/vonage/transfer"] },
    });
  });

  it("rejects unsupported Vonage call-control actions before calling the API", async () => {
    const fetchMock = vi.fn(async () => new Response(JSON.stringify({ message: "ok" }), { status: 200 }));
    const client = createVonageVoiceClient({
      applicationId: "app-id",
      jwtFactory: () => "jwt-token",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await expect(client.updateCall("call-uuid", { action: "hangup" } as never))
      .rejects.toThrow("supports only the documented transfer action");
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("exposes every Vonage voice REST bundle operation through generated functions", async () => {
    const fetchMock = vi.fn(async (url: string) =>
      new Response(JSON.stringify({ ok: true, url }), { status: 200 })
    );
    const client = createVonageVoiceClient({
      applicationId: "app-id",
      apiKey: "api-key",
      apiSecret: "api-secret",
      jwtFactory: () => "jwt-token",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await expect(client.fullApi.VoiceV1StartTalk({
      pathParams: { uuid: "call-uuid" },
      json: { text: "Please hold." },
    })).resolves.toMatchObject({ ok: true });
    await expect(client.fullApi.VoiceV2CreateCall({
      json: { to: [{ type: "app", user: "agent-1" }], from: { type: "app", user: "agent-2" } },
    })).resolves.toMatchObject({ ok: true });
    await expect(client.fullApi.ConversationV1CreateEvent({
      pathParams: { conversation_id: "conv-123" },
      json: { type: "text", body: { text: "Hello" } },
    })).resolves.toMatchObject({ ok: true });
    await expect(client.fullApi.ApplicationV2ListApplication({
      query: { page_size: 10 },
    })).resolves.toMatchObject({ ok: true });
    await expect(client.requestOperation("numbers:updateANumber", {
      body: { country: "US", msisdn: "15550100", app_id: "app-id" },
    })).resolves.toMatchObject({ ok: true });

    expect(fetchMock.mock.calls.map((call) => call[0])).toEqual([
      "https://api.nexmo.com/v1/calls/call-uuid/talk",
      "https://api.nexmo.com/v2/calls",
      "https://api.nexmo.com/v1/conversations/conv-123/events",
      "https://api.nexmo.com/v2/applications?page_size=10",
      "https://rest.nexmo.com/number/update",
    ]);
    expect((fetchMock.mock.calls[0] as unknown[])[1]).toMatchObject({
      method: "PUT",
      headers: expect.objectContaining({
        authorization: "Bearer jwt-token",
        "content-type": "application/json",
      }),
      body: JSON.stringify({ text: "Please hold." }),
    });
    expect((fetchMock.mock.calls[3] as unknown[])[1]).toMatchObject({
      method: "GET",
      headers: expect.objectContaining({
        authorization: "Basic YXBpLWtleTphcGktc2VjcmV0",
      }),
    });
    expect((fetchMock.mock.calls[4] as unknown[])[1]).toMatchObject({
      method: "POST",
      headers: expect.objectContaining({
        authorization: "Basic YXBpLWtleTphcGktc2VjcmV0",
      }),
    });
  });

  it("fails closed for unknown generated operations, missing path params, and missing Basic credentials", async () => {
    const client = createVonageVoiceClient({
      applicationId: "app-id",
      jwtFactory: () => "jwt-token",
      fetch: vi.fn(async () => new Response("{}", { status: 200 })) as unknown as typeof fetch,
    });

    // @ts-expect-error Missing path params intentionally exercises runtime validation.
    await expect(client.fullApi.VoiceV1GetCall()).rejects.toThrow("Missing Vonage path parameter 'uuid'");
    // @ts-expect-error Invalid operation id intentionally exercises runtime validation.
    await expect(client.requestOperation("not-real-operation")).rejects.toThrow("Unknown Vonage Voice REST operation");
    await expect(client.fullApi.NumbersGetOwnedNumbers()).rejects.toThrow("Vonage apiKey and apiSecret are required");
  });

  it("builds NCCO WebSocket connect actions", () => {
    expect(createVonageWebSocketNcco({
      websocketUrl: "wss://voice.example.test/vonage",
      headers: { "x-conversation-id": "conversation_1" },
      eventUrl: ["https://example.test/vonage/events"],
    })).toEqual([{
      action: "connect",
      endpoint: [{
        type: "websocket",
        uri: "wss://voice.example.test/vonage",
        "content-type": "audio/l16;rate=16000",
        headers: { "x-conversation-id": "conversation_1" },
      }],
      eventUrl: ["https://example.test/vonage/events"],
    }]);
  });

  it("verifies and parses Vonage signed webhook JWTs", async () => {
    const secret = "signature-secret";
    const rawBody = JSON.stringify({ uuid: "call-uuid", status: "completed" });
    const token = signedWebhookJwt({
      application_id: "app-id",
      api_key: "vonage-api-key",
      iat: 1780000000,
      exp: 1780000060,
      payload_hash: createHash("sha256").update(rawBody).digest("hex"),
    }, secret);
    expect(verifyVonageWebhookJwt(token, secret, "vonage-api-key", { now: () => 1780000001 }))
      .toMatchObject({ application_id: "app-id" });
    expect(verifyVonageWebhookJwt(token, secret, "wrong-api-key")).toBeUndefined();

    const request = new Request("https://example.test/vonage/events", {
      method: "POST",
      headers: {
        authorization: `Bearer ${token}`,
        "content-type": "application/json",
      },
      body: rawBody,
    });
    const webhook = await parseVonageWebhook(request, {
      kind: "event",
      signatureSecret: secret,
      expectedApiKey: "vonage-api-key",
      requireSignature: true,
      verifyPayloadHash: true,
      now: () => 1780000001,
    });

    expect(webhook).toMatchObject({
      kind: "event",
      verified: true,
      body: { uuid: "call-uuid", status: "completed" },
      jwtClaims: { application_id: "app-id" },
    });
  });

  it("rejects expired and not-yet-valid Vonage signed webhook JWTs", async () => {
    const secret = "signature-secret";
    const rawBody = JSON.stringify({ uuid: "call-uuid", status: "completed" });
    const expiredToken = signedWebhookJwt({
      application_id: "app-id",
      api_key: "vonage-api-key",
      iat: 1,
      exp: 2,
      payload_hash: createHash("sha256").update(rawBody).digest("hex"),
    }, secret);

    expect(verifyVonageWebhookJwt(expiredToken, secret, "vonage-api-key", { now: () => 1780000000 }))
      .toBeUndefined();
    await expect(parseVonageWebhook(new Request("https://example.test/vonage/events", {
      method: "POST",
      headers: {
        authorization: `Bearer ${expiredToken}`,
        "content-type": "application/json",
      },
      body: rawBody,
    }), {
      signatureSecret: secret,
      expectedApiKey: "vonage-api-key",
      requireSignature: true,
      now: () => 1780000000,
    })).rejects.toThrow("Vonage webhook signature verification failed.");

    const notYetValidToken = signedWebhookJwt({
      application_id: "app-id",
      api_key: "vonage-api-key",
      iat: 1780000000,
      nbf: 1780000100,
      exp: 1780000200,
    }, secret);

    expect(verifyVonageWebhookJwt(notYetValidToken, secret, "vonage-api-key", { now: () => 1780000000 }))
      .toBeUndefined();
  });

  it("applies configured clock skew to Vonage webhook JWT time validation", () => {
    const secret = "signature-secret";
    const recentlyExpiredToken = signedWebhookJwt({
      application_id: "app-id",
      api_key: "vonage-api-key",
      exp: 1780000000,
    }, secret);
    const almostValidToken = signedWebhookJwt({
      application_id: "app-id",
      api_key: "vonage-api-key",
      nbf: 1780000010,
      exp: 1780000100,
    }, secret);

    expect(verifyVonageWebhookJwt(recentlyExpiredToken, secret, "vonage-api-key", {
      now: () => 1780000005,
      clockSkewSeconds: 10,
    })).toMatchObject({ application_id: "app-id" });
    expect(verifyVonageWebhookJwt(almostValidToken, secret, "vonage-api-key", {
      now: () => 1780000000,
      clockSkewSeconds: 10,
    })).toMatchObject({ application_id: "app-id" });
  });

  it("parses default GET answer and event webhooks from query parameters", async () => {
    const answer = await parseVonageWebhook(new Request(
      "https://example.test/vonage/answer?from=15550100&to=15550999&uuid=call-uuid",
      { method: "GET" },
    ), { kind: "answer", requireSignature: false });
    const event = await parseVonageWebhook(new Request(
      "https://example.test/vonage/events?uuid=call-uuid&status=completed",
      { method: "GET" },
    ), { requireSignature: false });

    expect(answer).toMatchObject({
      kind: "answer",
      body: { from: "15550100", to: "15550999", uuid: "call-uuid" },
    });
    expect(event).toMatchObject({
      kind: "event",
      body: { uuid: "call-uuid", status: "completed" },
    });
  });

  it("parses Vonage fallback webhook payloads without misclassifying them as events", async () => {
    const fallback = await parseVonageWebhook(new Request("https://example.test/vonage/fallback", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        reason: "invalid_json",
        uuid: "call-uuid",
        original_request: { type: "answer", url: "https://example.test/vonage/answer" },
      }),
    }), { requireSignature: false });

    expect(fallback).toMatchObject({
      kind: "fallback",
      body: { reason: "invalid_json", uuid: "call-uuid" },
      originalRequest: { type: "answer" },
    });
  });

  it("fails closed when Vonage signed webhook payload_hash verification is required", async () => {
    const secret = "signature-secret";
    const token = signedWebhookJwt({
      application_id: "app-id",
      iat: 1780000000,
      exp: 1780000060,
      payload_hash: createHash("sha256").update("different-payload").digest("hex"),
    }, secret);
    const request = new Request("https://example.test/vonage/events", {
      method: "POST",
      headers: {
        authorization: `Bearer ${token}`,
        "content-type": "application/json",
      },
      body: JSON.stringify({ uuid: "call-uuid", status: "completed" }),
    });

    await expect(parseVonageWebhook(request, {
      signatureSecret: secret,
      requireSignature: true,
      verifyPayloadHash: true,
      now: () => 1780000001,
    })).rejects.toThrow("Vonage webhook payload hash verification failed.");
  });

  it("fails closed when signed webhook verification is required", async () => {
    const request = new Request("https://example.test/vonage/events", {
      method: "POST",
      headers: {
        authorization: "Bearer invalid",
        "content-type": "application/json",
      },
      body: JSON.stringify({ uuid: "call-uuid", status: "failed" }),
    });

    await expect(parseVonageWebhook(request, {
      signatureSecret: "signature-secret",
      requireSignature: true,
    })).rejects.toThrow("Vonage webhook signature verification failed.");
  });

  it("reports live conformance as credential-blocked until Vonage credentials are configured", async () => {
    const result = await runProviderConformance({
      manifest: vonageVoiceProviderManifest,
      channels: [{
        id: "voice",
        channel: "voice",
        providerPackageIds: [vonageVoiceProviderManifest.id],
        enabledCapabilities: ["receive", "send", "media", "transfer"],
      }],
      credentialStatuses: vonageVoiceCredentialStatuses({}),
      live: {
        enabled: true,
        checks: createVonageVoiceLiveChecks({
          applicationId: "missing",
          jwtFactory: () => "not-used",
        }),
      },
    });

    expect(result.status).toBe("credential-blocked");
    expect(result.checks.some((check) =>
      check.id === "provider.live.call-control" && check.status === "credential-blocked"
    )).toBe(true);
  });

  it("passes conformance when Vonage readiness is configured", async () => {
    const result = await runProviderConformance({
      manifest: vonageVoiceProviderManifest,
      channels: [{
        id: "voice",
        channel: "voice",
        providerPackageIds: [vonageVoiceProviderManifest.id],
        enabledCapabilities: ["receive", "send", "media", "transfer"],
      }],
      credentialStatuses: vonageVoiceCredentialStatuses({
        applicationId: "app-id",
        privateKeyConfigured: true,
        apiKeyConfigured: true,
        fromNumber: "15550999",
        webhookSignatureSecretConfigured: true,
        answerUrlConfigured: true,
        eventUrlConfigured: true,
        fallbackAnswerUrlConfigured: true,
        signedCallbacksEnabled: true,
      }),
      live: {
        enabled: true,
        checks: createVonageVoiceLiveChecks({
          applicationId: "app-id",
          jwtFactory: () => "jwt-token",
        }),
      },
    });

    expect(result.status).toBe("passed");
    expect(result.checks).toContainEqual(expect.objectContaining({
      id: "provider.live.call-control",
      status: "passed",
    }));
  });
});

function signedWebhookJwt(payload: Record<string, unknown>, secret: string) {
  const header = encode({ alg: "HS256", typ: "JWT" });
  const body = encode(payload);
  const signature = createHmac("sha256", secret).update(`${header}.${body}`).digest("base64url");
  return `${header}.${body}.${signature}`;
}

function encode(value: unknown) {
  return Buffer.from(JSON.stringify(value)).toString("base64url");
}
