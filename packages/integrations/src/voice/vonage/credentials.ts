import { createSign, randomUUID } from "node:crypto";
import type { ProviderCredentialStatusInput } from "@cognidesk/core";
import type {
  VonageCredentialStatusInput,
  VonageJwtOptions,
} from "./contracts.js";
import { vonageVoiceProviderManifest } from "./manifest.js";

export function vonageVoiceCredentialStatuses(input: VonageCredentialStatusInput): ProviderCredentialStatusInput[] {
  const applicationConfigured = Boolean(input.applicationId && input.privateKeyConfigured);
  return [
    {
      providerPackageId: vonageVoiceProviderManifest.id,
      requirementId: "vonage-application",
      state: applicationConfigured ? "configured" : "missing",
      message: applicationConfigured
        ? "Vonage application credentials are configured."
        : "Vonage Application ID and private key are required for Voice API JWT auth.",
    },
    {
      providerPackageId: vonageVoiceProviderManifest.id,
      requirementId: "vonage-api-key-secret",
      state: input.apiKeyConfigured ? "configured" : "missing",
      message: input.apiKeyConfigured
        ? "Vonage API key/secret is configured for Basic-authenticated operations."
        : "Vonage API key/secret is required for generated Application CRUD and Numbers API operations.",
    },
    {
      providerPackageId: vonageVoiceProviderManifest.id,
      requirementId: "vonage-voice-number",
      state: input.fromNumber ? "configured" : "missing",
      message: input.fromNumber
        ? "Vonage outbound voice number is configured."
        : "A voice-capable Vonage number or caller identity is required for outbound calls.",
    },
    {
      providerPackageId: vonageVoiceProviderManifest.id,
      requirementId: "vonage-webhook-signature-secret",
      state: input.webhookSignatureSecretConfigured ? "configured" : "missing",
      message: input.webhookSignatureSecretConfigured
        ? "Vonage webhook signature secret is configured."
        : "A webhook signature secret should be configured before accepting Voice API webhooks.",
    },
    {
      providerPackageId: vonageVoiceProviderManifest.id,
      requirementId: "vonage-voice-application-webhooks",
      state: input.answerUrlConfigured && input.eventUrlConfigured ? "configured" : "missing",
      message: input.answerUrlConfigured && input.eventUrlConfigured
        ? "Vonage Voice answer and event webhooks are configured."
        : "Vonage Voice answer_url and event_url must be configured before receive/outbound event workflows are enabled.",
    },
    {
      providerPackageId: vonageVoiceProviderManifest.id,
      requirementId: "vonage-fallback-answer-url",
      state: input.fallbackAnswerUrlConfigured ? "configured" : "not-required",
      message: input.fallbackAnswerUrlConfigured
        ? "Vonage fallback answer URL is configured."
        : "Vonage fallback answer URL is optional but recommended for webhook failure handling.",
    },
    {
      providerPackageId: vonageVoiceProviderManifest.id,
      requirementId: "vonage-signed-callbacks",
      state: input.signedCallbacksEnabled ? "configured" : input.webhookSignatureSecretConfigured ? "missing" : "not-required",
      message: input.signedCallbacksEnabled
        ? "Vonage signed callbacks are enabled for the Voice application."
        : input.webhookSignatureSecretConfigured
          ? "Vonage signed callbacks should be enabled when webhook signature verification is expected."
          : "Vonage signed callbacks are optional unless the SDK app requires signed webhook verification.",
    },
  ];
}

export function createVonageJwt(options: VonageJwtOptions): string {
  const now = Math.floor((options.now?.() ?? Date.now()) / 1000);
  const header = { alg: "RS256", typ: "JWT" };
  const payload = {
    application_id: options.applicationId,
    iat: now,
    exp: now + (options.ttlSeconds ?? 15 * 60),
    jti: options.jti ?? randomUUID(),
  };
  const signingInput = `${base64urlJson(header)}.${base64urlJson(payload)}`;
  const signature = createSign("RSA-SHA256").update(signingInput).sign(options.privateKey);
  return `${signingInput}.${base64url(signature)}`;
}

function base64urlJson(value: unknown): string {
  return base64url(Buffer.from(JSON.stringify(value)));
}

function base64url(value: Buffer): string {
  return value.toString("base64").replaceAll("+", "-").replaceAll("/", "_").replace(/=+$/, "");
}
