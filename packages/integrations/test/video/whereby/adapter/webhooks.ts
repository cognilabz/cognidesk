import {
  createWherebySignatureDigest,
  expect,
  it,
  parseWherebySignatureHeader,
  parseWherebyWebhookRequest,
  signWhereby,
  validateWherebyWebhookSignature,
} from "./helpers.js";

export function registerWherebyWebhookTests() {
  it("validates Whereby webhook signatures and parses events", async () => {
    const webhookSigningSecret = "whereby-webhook-secret";
    const timestamp = 1_710_000_000;
    const body = JSON.stringify({
      id: "event_123",
      apiVersion: "1.0",
      createdAt: "2026-06-17T12:00:00.000Z",
      type: "room.client.joined",
      data: {
        meetingId: "meeting_123",
        roomName: "/support-abc",
        subdomain: "example",
        participantId: "participant_123",
        displayName: "Customer",
      },
    });
    const signatureHeader = signWhereby({ webhookSigningSecret, timestamp, body });
    const request = new Request("https://example.test/whereby/webhooks", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "whereby-signature": signatureHeader,
      },
      body,
    });

    expect(parseWherebySignatureHeader(signatureHeader)).toEqual({
      timestamp: String(timestamp),
      signature: createWherebySignatureDigest({ webhookSigningSecret, timestamp, body }),
    });
    expect(validateWherebyWebhookSignature({
      webhookSigningSecret,
      rawBody: body,
      signatureHeader,
      nowSeconds: timestamp,
    })).toBe(true);

    const parsed = await parseWherebyWebhookRequest(request, {
      webhookSigningSecret,
      nowSeconds: timestamp,
    });
    expect(parsed.verified).toBe(true);
    expect(parsed.eventType).toBe("room.client.joined");
    expect(parsed.data).toMatchObject({ meetingId: "meeting_123" });
  });

  it("rejects stale or tampered Whereby webhook signatures", () => {
    const webhookSigningSecret = "whereby-webhook-secret";
    const timestamp = 1_710_000_000;
    const body = JSON.stringify({ id: "event_123", type: "room.session.started", data: { meetingId: "meeting_123" } });
    const signatureHeader = signWhereby({ webhookSigningSecret, timestamp, body });

    expect(validateWherebyWebhookSignature({
      webhookSigningSecret,
      rawBody: body,
      signatureHeader,
      nowSeconds: timestamp + 301,
    })).toBe(false);
    expect(validateWherebyWebhookSignature({
      webhookSigningSecret,
      rawBody: JSON.stringify({ id: "event_123", type: "room.session.ended" }),
      signatureHeader,
      nowSeconds: timestamp,
    })).toBe(false);
  });

  it("fails closed by default when Whereby webhook verification is not configured", async () => {
    const request = new Request("https://example.test/whereby/webhooks", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ id: "event_123", type: "room.session.started", data: { meetingId: "meeting_123" } }),
    });

    await expect(parseWherebyWebhookRequest(request))
      .rejects.toThrow("Whereby webhook signature validation failed");
  });

  it("parses Whereby webhooks without verification only when explicitly requested", async () => {
    const request = new Request("https://example.test/whereby/webhooks", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ id: "event_123", type: "room.session.started", data: { meetingId: "meeting_123" } }),
    });

    await expect(parseWherebyWebhookRequest(request, { requireSignature: false }))
      .resolves.toMatchObject({ verified: false, eventType: "room.session.started" });
  });

  it("supports SDK-provided webhook verification hooks and fails closed when required", async () => {
    const body = JSON.stringify({ id: "event_123", type: "recording.finished", data: { recordingId: "rec_123" } });
    const request = new Request("https://example.test/whereby/webhooks", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body,
    });
    await expect(parseWherebyWebhookRequest(request.clone(), {
      requireSignature: true,
      verifier: async () => false,
    })).rejects.toThrow("Whereby webhook signature validation failed.");

    const parsed = await parseWherebyWebhookRequest(request, {
      requireSignature: true,
      verifier: async ({ rawBody }) => rawBody === body,
    });
    expect(parsed.verified).toBe(true);
    expect(parsed.eventType).toBe("recording.finished");
  });
}
