import { describe, expect, it } from "vitest";
import { runProviderConformance } from "@cognidesk/test-harness";
import {
  cobrowsingCredentialStatuses,
  cognideskCobrowsingProviderManifest,
  createCobrowsingSessionClient,
  createCobrowsingSessionToken,
  createInMemoryCobrowsingSessionStore,
  normalizeCobrowsingEvent,
  parseCobrowsingSignatureHeader,
  parseCobrowsingWebhookRequest,
  signCobrowsingWebhook,
  validateCobrowsingSessionToken,
  validateCobrowsingSignedRequest,
  type CobrowsingSecurityPolicy,
} from "../../../src/cobrowsing/cognidesk/index.js";

const policy: CobrowsingSecurityPolicy = {
  allowedOrigins: ["https://app.example.com"],
  consent: { mode: "required", evidenceRequired: true },
  recording: { mode: "disabled" },
  redaction: { enabled: true, selectors: ["[data-private]"], fieldNames: ["ssn"] },
};

describe("@cognidesk/integrations", () => {
  it("exports an official Cognidesk cobrowsing provider manifest", () => {
    expect(cognideskCobrowsingProviderManifest).toMatchObject({
      id: "cobrowsing.cognidesk",
      packageName: "@cognidesk/integrations",
      category: "cobrowsing",
      provider: "cognidesk",
      trustLevel: "official",
    });
    expect(cognideskCobrowsingProviderManifest.capabilities.map((capability: { capability: string }) => capability.capability))
      .toEqual(expect.arrayContaining([
        "create-provider-object",
        "read-provider-object",
        "update-provider-object",
        "receive",
        "cobrowsing.validate-session-token",
        "cobrowsing.verify-signed-event",
      ]));
    expect(cognideskCobrowsingProviderManifest.limitations.join(" ")).toContain("does not implement browser remoting");
    expect(cognideskCobrowsingProviderManifest.coverage).toMatchObject({
      scope: "local-protocol",
    });
    expect(cognideskCobrowsingProviderManifest.coverage.notes.join(" "))
      .toContain("does not implement an external cobrowsing provider API");
    expect(cognideskCobrowsingProviderManifest.coverage.evidence.map((evidence) => evidence.label))
      .toEqual(expect.arrayContaining([
        "Cognidesk cobrowsing local protocol module",
        "CONTEXT.md Built-In Adapter definition",
      ]));
  });

  it("reports SDK-user-owned readiness without exposing secrets", () => {
    expect(cobrowsingCredentialStatuses({
      sessionStoreConfigured: true,
      sessionTokenSigningConfigured: true,
      consentPolicyConfigured: true,
      recordingPolicyConfigured: true,
      redactionPolicyConfigured: true,
      allowedOrigins: ["https://app.example.com"],
      webhookVerifierConfigured: true,
      scopes: ["sessions:create", "sessions:update"],
    })).toEqual(expect.arrayContaining([
      expect.objectContaining({
        requirementId: "cobrowsing-session-store",
        state: "configured",
      }),
      expect.objectContaining({
        requirementId: "cobrowsing-recording-redaction-policy",
        state: "configured",
      }),
      expect.objectContaining({
        requirementId: "cobrowsing-allowed-origins",
        state: "configured",
      }),
    ]));
  });

  it("creates, joins, and ends cobrowsing sessions through the SDK-owned store", async () => {
    const store = createInMemoryCobrowsingSessionStore();
    const client = createCobrowsingSessionClient({
      store,
      policy,
      sessionTokenSharedSecret: "session-signing-material",
      now: () => new Date("2026-06-17T12:00:00.000Z"),
      idFactory: () => "session_123",
    });
    const token = createCobrowsingSessionToken({
      sharedSecret: "session-signing-material",
      claims: {
        sessionId: "session_123",
        origin: "https://app.example.com",
        participantId: "agent_123",
        role: "agent",
        issuedAt: 0,
        expiresAt: 9_999_999_999,
      },
    });

    await expect(client.createSession({
      origin: "https://app.example.com",
      conversationId: "conversation_123",
      customerId: "customer_123",
    })).resolves.toMatchObject({
      id: "session_123",
      status: "created",
      consent: { mode: "required" },
      redaction: { enabled: true },
    });
    await expect(client.joinSession({
      sessionId: "session_123",
      participantId: "agent_123",
      role: "agent",
      origin: "https://app.example.com",
      sessionToken: token,
    })).resolves.toMatchObject({
      status: "joined",
      participants: [expect.objectContaining({ id: "agent_123", role: "agent" })],
    });
    await expect(client.endSession({
      sessionId: "session_123",
      endedBy: "agent_123",
      reason: "resolved",
    })).resolves.toMatchObject({
      status: "ended",
      endedBy: "agent_123",
      endReason: "resolved",
    });
  });

  it("validates signed session tokens and fails closed for tampering, expiry, and origin mismatch", () => {
    const token = createCobrowsingSessionToken({
      sharedSecret: "session-signing-material",
      claims: {
        sessionId: "session_123",
        origin: "https://app.example.com/path",
        audience: "cognidesk-cobrowsing",
        issuedAt: 1_781_695_200,
        expiresAt: 1_781_695_500,
      },
    });

    expect(validateCobrowsingSessionToken({
      sharedSecret: "session-signing-material",
      token,
      expectedSessionId: "session_123",
      expectedAudience: "cognidesk-cobrowsing",
      allowedOrigins: ["https://app.example.com"],
      nowSeconds: 1_781_695_300,
    })).toMatchObject({ valid: true });
    expect(validateCobrowsingSessionToken({
      sharedSecret: "session-signing-material",
      token: `${token.slice(0, -1)}x`,
      nowSeconds: 1_781_695_300,
    })).toEqual({ valid: false, reason: "invalid-signature" });
    expect(validateCobrowsingSessionToken({
      sharedSecret: "session-signing-material",
      token,
      nowSeconds: 1_781_695_501,
    })).toEqual({ valid: false, reason: "expired" });
    expect(validateCobrowsingSessionToken({
      sharedSecret: "session-signing-material",
      token,
      allowedOrigins: ["https://other.example.com"],
      nowSeconds: 1_781_695_300,
    })).toEqual({ valid: false, reason: "origin-not-allowed" });
  });

  it("normalizes session, control, and redaction events", () => {
    expect(normalizeCobrowsingEvent({
      id: "event_1",
      type: "session.joined",
      createdAt: "2026-06-17T12:00:00.000Z",
      data: {
        sessionId: "session_123",
        participantId: "customer_123",
        role: "customer",
        origin: "https://app.example.com",
      },
    })).toMatchObject({
      id: "event_1",
      type: "cobrowse.session.joined",
      sessionId: "session_123",
      participantId: "customer_123",
      role: "customer",
    });
    expect(normalizeCobrowsingEvent({
      type: "control.requested",
      data: { sessionId: "session_123", controlRequestId: "control_123" },
    })).toMatchObject({
      type: "cobrowse.control.requested",
      controlRequestId: "control_123",
    });
    expect(normalizeCobrowsingEvent({
      type: "redaction.cleared",
      data: { sessionId: "session_123", redactionRuleId: "rule_123" },
    })).toMatchObject({
      type: "cobrowse.redaction.cleared",
      redactionRuleId: "rule_123",
    });
  });

  it("verifies and parses signed cobrowsing webhook/session events", async () => {
    const sharedSecret = "webhook-shared-secret";
    const timestamp = 1_781_695_200;
    const body = JSON.stringify({
      id: "event_123",
      type: "session.started",
      createdAt: "2026-06-17T12:00:00.000Z",
      data: { sessionId: "session_123", origin: "https://app.example.com" },
    });
    const signatureHeader = signCobrowsingWebhook({ sharedSecret, timestamp, body });
    const request = new Request("https://example.test/cobrowsing/events", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "cognidesk-signature": signatureHeader,
      },
      body,
    });

    expect(parseCobrowsingSignatureHeader(signatureHeader)).toMatchObject({ timestamp: String(timestamp) });
    expect(validateCobrowsingSignedRequest({
      sharedSecret,
      rawBody: body,
      signatureHeader,
      nowSeconds: timestamp,
    })).toBe(true);

    await expect(parseCobrowsingWebhookRequest(request, {
      sharedSecret,
      nowSeconds: timestamp,
    })).resolves.toMatchObject({
      verified: true,
      event: {
        type: "cobrowse.session.started",
        sessionId: "session_123",
      },
    });
  });

  it("rejects unsigned, stale, and tampered cobrowsing webhook/session events", async () => {
    const sharedSecret = "webhook-shared-secret";
    const timestamp = 1_781_695_200;
    const body = JSON.stringify({ type: "session.ended", data: { sessionId: "session_123" } });
    const signatureHeader = signCobrowsingWebhook({ sharedSecret, timestamp, body });
    const unsigned = new Request("https://example.test/cobrowsing/events", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body,
    });

    await expect(parseCobrowsingWebhookRequest(unsigned, { sharedSecret, nowSeconds: timestamp }))
      .rejects.toThrow("Cobrowsing webhook signature validation failed.");
    expect(validateCobrowsingSignedRequest({
      sharedSecret,
      rawBody: body,
      signatureHeader,
      nowSeconds: timestamp + 301,
    })).toBe(false);
    expect(validateCobrowsingSignedRequest({
      sharedSecret,
      rawBody: JSON.stringify({ type: "session.started", data: { sessionId: "session_123" } }),
      signatureHeader,
      nowSeconds: timestamp,
    })).toBe(false);
  });

  it("passes provider conformance when SDK-owned readiness is configured", async () => {
    const result = await runProviderConformance({
      manifest: cognideskCobrowsingProviderManifest,
      expectedPackageName: "@cognidesk/integrations",
      channels: [{
        id: "cobrowsing",
        channel: "cobrowsing",
        providerPackageIds: [cognideskCobrowsingProviderManifest.id],
        enabledCapabilities: ["create-provider-object", "read-provider-object", "update-provider-object", "receive"],
      }],
      credentialStatuses: cobrowsingCredentialStatuses({
        sessionStoreConfigured: true,
        sessionTokenSigningConfigured: true,
        consentPolicyConfigured: true,
        recordingPolicyConfigured: true,
        redactionPolicyConfigured: true,
        allowedOrigins: ["https://app.example.com"],
        webhookVerifierConfigured: true,
      }),
    });

    expect(result.status).toBe("passed");
    expect(result.checks).toContainEqual(expect.objectContaining({
      id: "provider.policy_fail_closed",
      status: "passed",
    }));
  });
});
