import type { ProviderCredentialStatusInput } from "@cognidesk/core";
import { defineIntegrationProviderPackage as defineProviderPackage } from "../../provider-manifest.js";

export const aircallContactCenterProviderManifest = defineProviderPackage({
  id: "contactCenter.aircall",
  name: "Aircall",
  packageName: "@cognidesk/integrations",
  provider: "aircall",
  category: "contactCenter",
  trustLevel: "official",
  directions: ["inbound-only", "outbound-only", "bidirectional"],
  channelAudiences: ["customer-facing", "internal-support", "mixed"],
  credentialRequirements: [
    { id: "aircall-api-base", label: "Aircall Public API base URL", required: true },
    {
      id: "aircall-api-access",
      label: "Aircall API access",
      scopes: ["public_api"],
      required: true,
      metadata: {
        scopeKind: "mixed-auth-mode",
        privilegeGuidance: "OAuth apps use the Aircall public_api scope; API ID/token credentials are governed by the Aircall account/API key permissions rather than OAuth scopes.",
      },
    },
    { id: "aircall-routing", label: "Aircall number/team/routing configuration", required: false },
  ],
  coverage: {
    scope: "support-workflow-subset",
    notes: [
      "Coverage is limited to a constructor-configured SDK-owned Aircall workflow path and the documented Aircall `/v1/ping` readiness check; this is not typed outbound callback/call, message, webhook, or transfer coverage.",
      "No official public OpenAPI/Swagger specification was found during the 2026-06-18 Aircall audit; the checked inventory is `docs/provider-coverage/aircall-public-api-2026-06-18.checked-inventory.json`, and the public HTML API reference is treated as official evidence but not as a generated full-provider proof.",
      "The package does not implement the broader Aircall Public API for OAuth token exchange, users v1/v2, teams, calls, transfers, comments, tags, archive/unarchive, recording pause/resume/delete, dialer campaigns, numbers, SMS/MMS, WhatsApp, group messaging, contacts, company/integration resources, webhooks and webhook events, analytics exports, conversation intelligence, realtime transcription, call evaluations, or AI Voice Agent outbound calls.",
    ],
    evidence: [
      { label: "Aircall API References", url: "https://developer.aircall.io/api-references/" },
      { label: "Aircall Webhooks Guide", url: "https://developer.aircall.io/tutorials/webhooks-guide/" },
      { label: "Aircall SMS webhook tutorial", url: "https://developer.aircall.io/tutorials/logging-sms-events-with-aircall-webhooks" },
    ],
  },
  capabilities: [
    {
      capability: "handoff",
      label: "Create Aircall handoff context",
      description: "POSTs SDK-configured human-handoff context to the SDK-owned Aircall workflow path chosen by the SDK app without claiming a native Aircall handoff endpoint or typed Aircall object coverage.",
      audiences: ["customer-facing", "internal-support", "mixed"],
      providerObjects: [{ kind: "aircallConfiguredRequest", label: "Aircall Configured Request" }],
      requiresCredential: true,
      sideEffect: true,
      exposesSensitiveData: true,
      changesWorkflow: true,
    },
  ],
  privacyNotes: [
    "Aircall records can include phone numbers, contacts, call metadata, tags, comments, and routing context.",
    "Aircall API credentials stay server-side and Studio only sees readiness.",
  ],
  limitations: [
    "Aircall number ownership, callback workflows, routing, recording, transfer, messaging, webhook, and outbound consent remain SDK-user configuration.",
    "Per-conversation handoff calls cannot override the configured Aircall path; implement typed methods before enabling consequential Aircall actions such as transfer, outbound call, recording deletion, or message send.",
  ],
  metadata: {
    checkedInventoryArtifact: "docs/provider-coverage/aircall-public-api-2026-06-18.checked-inventory.json",
    checkedProviderSupportedNotTypedFamilies: 25,
    officialPublicOpenApiSpec: "not-found",
    channelCoverage: {
      configuredHttpHandoff: "supported",
      publicOpenApiSpec: "not-covered",
      publicHtmlApiReference: "provider-supported-not-typed",
      oauthTokenExchange: "provider-supported-not-typed",
      nativeInboundVoice: "provider-supported-not-typed",
      outboundCall: "provider-supported-not-typed",
      aiVoiceAgentOutboundCall: "provider-supported-not-typed",
      callback: "provider-supported-not-typed",
      transfer: "provider-supported-not-typed",
      callComments: "provider-supported-not-typed",
      callTags: "provider-supported-not-typed",
      callArchive: "provider-supported-not-typed",
      callRecordingControls: "provider-supported-not-typed",
      messaging: "provider-supported-not-typed",
      smsAgentConversation: "provider-supported-not-typed",
      groupMessaging: "provider-supported-not-typed",
      whatsappAgentConversation: "provider-supported-not-typed",
      messageWebhooks: "provider-supported-not-typed",
      contacts: "provider-supported-not-typed",
      usersV1: "provider-supported-not-typed",
      usersV2: "provider-supported-not-typed",
      teams: "provider-supported-not-typed",
      numbers: "provider-supported-not-typed",
      dialerCampaigns: "provider-supported-not-typed",
      tags: "provider-supported-not-typed",
      companyAndIntegration: "provider-supported-not-typed",
      recordings: "provider-supported-not-typed",
      webhooks: "provider-supported-not-typed",
      webhookEvents: "provider-supported-not-typed",
      analyticsExports: "provider-supported-not-typed",
      conversationIntelligence: "provider-supported-not-typed",
      realtimeTranscription: "provider-supported-not-typed",
      callEvaluations: "provider-supported-not-typed",
    },
  },
  maintainers: [{ name: "Cognidesk", type: "official" }],
});

export type AircallJsonPrimitive = string | number | boolean | null;
export type AircallJsonValue =
  | AircallJsonPrimitive
  | AircallJsonObject
  | readonly AircallJsonValue[];
export type AircallProviderExtensionValue = AircallJsonValue | object | undefined;
export interface AircallJsonObject {
  [key: string]: AircallProviderExtensionValue;
}
export type AircallProviderPayload = AircallJsonObject | object;
export type AircallProviderQuery = Record<string, AircallProviderExtensionValue>;
export interface AircallProviderResponse extends AircallJsonObject {}
export interface AircallProviderExtensionFields extends AircallJsonObject {}

export interface AircallContactCenterClientOptions {
  apiBaseUrl?: string;
  apiId?: string;
  apiToken?: string;
  accessToken?: string;
  defaultHandoffPath?: string;
  readinessPath?: string;
  fetch?: typeof fetch;
}

export interface AircallCredentialStatusInput {
  apiBaseUrl?: string;
  apiAccessConfigured?: boolean;
  routingConfigured?: boolean;
}

export interface AircallHandoffInput {
  payload: AircallConfiguredRequestPayload;
  idempotencyKey?: string | undefined;
}

export interface AircallConfiguredRequestPayload {
  [key: string]: AircallProviderExtensionValue;
}

export interface AircallConfiguredRequestResponse {
  [key: string]: AircallProviderExtensionValue;
}

export interface AircallPingResponse {
  ping: "pong";
}

export type AircallReadinessResponse = AircallPingResponse | AircallConfiguredRequestResponse;

export interface AircallContactCenterClient {
  createHandoff(input: AircallHandoffInput): Promise<AircallConfiguredRequestResponse>;
  readiness(): Promise<AircallReadinessResponse>;
}

export interface AircallLiveCheckOptions extends AircallContactCenterClientOptions {
  client?: Pick<AircallContactCenterClient, "readiness">;
}

export function createAircallContactCenterClient(options: AircallContactCenterClientOptions = {}): AircallContactCenterClient {
  const fetchImpl = options.fetch ?? fetch;
  return {
    async createHandoff(input) {
      return aircallRequest({
        options,
        fetch: fetchImpl,
        method: "POST",
        path: configuredPath(options.defaultHandoffPath, "Aircall handoff path"),
        body: input.payload,
        idempotencyKey: input.idempotencyKey,
      });
    },
    async readiness() {
      return aircallRequest({
        options,
        fetch: fetchImpl,
        method: "GET",
        path: options.readinessPath ?? "/v1/ping",
      });
    },
  };
}

function configuredPath(path: string | undefined, label: string) {
  if (!path) {
    throw new Error(`${label} must be configured by the SDK app; no official default path is assumed.`);
  }
  return path;
}

export function aircallContactCenterCredentialStatuses(input: AircallCredentialStatusInput): ProviderCredentialStatusInput[] {
  return [
    {
      providerPackageId: aircallContactCenterProviderManifest.id,
      requirementId: "aircall-api-base",
      state: input.apiBaseUrl ? "configured" : "missing",
      message: input.apiBaseUrl ? "Aircall API base URL is configured." : "Aircall API base URL is required.",
    },
    {
      providerPackageId: aircallContactCenterProviderManifest.id,
      requirementId: "aircall-api-access",
      state: input.apiAccessConfigured ? "configured" : "missing",
      scopes: ["public_api"],
      message: input.apiAccessConfigured ? "Aircall API access is configured." : "Aircall API access is required.",
    },
    {
      providerPackageId: aircallContactCenterProviderManifest.id,
      requirementId: "aircall-routing",
      state: input.routingConfigured ? "configured" : "missing",
      message: input.routingConfigured ? "Aircall routing is configured." : "Aircall routing must be configured by the SDK app.",
    },
  ];
}

export function createAircallContactCenterLiveChecks(options: AircallLiveCheckOptions) {
  return [{
    id: "readiness",
    description: "Aircall API access can call the documented ping readiness endpoint or a configured readiness path.",
    requiredCredentialIds: ["aircall-api-base", "aircall-api-access"],
    async run(context: { signal?: AbortSignal }) {
      const client = options.client ?? createAircallContactCenterClient(options);
      const result = await client.readiness();
      if (context.signal?.aborted) throw new Error("Aircall readiness check aborted.");
      return { details: { ok: Boolean(result) } };
    },
  }];
}

async function aircallRequest(input: {
  options: AircallContactCenterClientOptions;
  fetch: typeof fetch;
  method: "GET" | "POST";
  path: string;
  body?: AircallProviderPayload;
  idempotencyKey?: string | undefined;
}) {
  const response = await input.fetch(providerUrl(input.options.apiBaseUrl ?? "https://api.aircall.io", input.path), {
    method: input.method,
    headers: {
      accept: "application/json",
      ...(input.body ? { "content-type": "application/json" } : {}),
      ...aircallAuthHeaders(input.options),
      ...(input.idempotencyKey ? { "idempotency-key": input.idempotencyKey } : {}),
    },
    ...(input.body ? { body: JSON.stringify(input.body) } : {}),
  });
  return parseProviderResponse(response, "Aircall");
}

function aircallAuthHeaders(options: AircallContactCenterClientOptions) {
  if (options.accessToken) return { authorization: `Bearer ${options.accessToken}` };
  if (options.apiId && options.apiToken) {
    return { authorization: `Basic ${Buffer.from(`${options.apiId}:${options.apiToken}`).toString("base64")}` };
  }
  return {};
}

function providerUrl(baseUrl: string, path: string) {
  return new URL(path, baseUrl.replace(/\/+$/, "")).toString();
}

async function parseProviderResponse(response: Response, provider: string) {
  const text = await response.text();
  const body = text ? JSON.parse(text) as AircallJsonObject : {};
  if (!response.ok) {
    const message = typeof body.message === "string"
      ? body.message
      : typeof body.troubleshoot === "string"
        ? body.troubleshoot
        : typeof body.error === "string"
          ? body.error
          : `${provider} API returned ${response.status}.`;
    throw new Error(message);
  }
  return body;
}
