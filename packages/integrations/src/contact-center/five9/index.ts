import type { ProviderCredentialStatusInput } from "@cognidesk/core";
import { defineIntegrationProviderPackage as defineProviderPackage } from "../../provider-manifest.js";

export const five9ContactCenterProviderManifest = defineProviderPackage({
  id: "contactCenter.five9",
  name: "Five9",
  packageName: "@cognidesk/integrations",
  provider: "five9",
  category: "contactCenter",
  trustLevel: "official",
  directions: ["inbound-only", "outbound-only", "bidirectional"],
  channelAudiences: ["customer-facing", "internal-support", "mixed"],
  credentialRequirements: [
    { id: "five9-api-base", label: "Five9 API base URL", required: true },
    { id: "five9-api-access", label: "Five9 API access", description: "Endpoint-specific Five9 API access configured by the SDK app; this package does not assume OAuth-style scope names for generic configured paths.", required: true },
    { id: "five9-routing", label: "Five9 skill/campaign routing configuration", required: false },
  ],
  coverage: {
    scope: "support-workflow-subset",
    notes: [
      "Coverage is limited to SDK-configured handoff and readiness request paths; this is not typed outbound dialing or transfer coverage.",
      "No official public OpenAPI/Swagger inventory was found during the 2026-06-18 Five9 audit; the checked inventory is `docs/provider-coverage/five9-contact-center-api-2026-06-18.checked-inventory.json`, and detailed endpoint documentation appears to require Five9 developer-program or customer-doc access.",
      "The package does not implement Five9's broader APIs for CTI Web Services, Configuration Web Services, Reporting Web Services, Statistics Web Services, Web2Campaign, CRM SDK, Web Connectors, agent, supervisor, administrator, campaigns, lists, recordings, skills, digital engagement, chat, email, SMS, social, video, or CRM objects.",
    ],
    evidence: [
      { label: "Five9 Contact Center APIs and SDKs", url: "https://www.five9.com/products/capabilities/call-center-apis-and-sdks" },
      { label: "Five9 development program", url: "https://www.five9.com/development" },
      { label: "Five9 campaigns documentation", url: "https://documentation.five9.com/bundle/studio-combo/page/studio-build/campaigns/_ch-studio-campaigns.htm" },
    ],
  },
  capabilities: [
    {
      capability: "handoff",
      label: "Create Five9 handoff",
      description: "POSTs to an SDK-configured Five9 support-workflow path without claiming typed contact, callback, CRM, campaign, outbound, or transfer coverage.",
      audiences: ["customer-facing", "internal-support", "mixed"],
      providerObjects: [{ kind: "five9ConfiguredRequest", label: "Five9 Configured Request" }],
      requiresCredential: true,
      sideEffect: true,
      exposesSensitiveData: true,
      changesWorkflow: true,
    },
  ],
  privacyNotes: [
    "Five9 handoffs can include phone numbers, CRM context, campaign membership, queue/skill metadata, and summaries.",
    "Five9 credentials stay server-side and Studio receives only readiness.",
  ],
  limitations: [
    "Five9 domain, API product, skills, campaigns, CRM object mapping, and outbound eligibility are SDK-user configuration.",
    "Per-conversation handoff calls cannot override the configured Five9 path; implement typed methods before enabling consequential Five9 campaign, outbound, transfer, recording, or CRM actions.",
  ],
  metadata: {
    checkedInventoryArtifact: "docs/provider-coverage/five9-contact-center-api-2026-06-18.checked-inventory.json",
    checkedProviderSupportedNotTypedFamilies: 17,
    officialPublicOpenApiSpec: "not-found",
    officialPublicWebhookCatalog: "not-found",
    channelCoverage: {
      configuredHttpHandoff: "supported",
      publicOpenApiSpec: "not-covered",
      developerProgramDocs: "provider-supported-not-typed",
      ctiWebServices: "provider-supported-not-typed",
      configurationWebServices: "provider-supported-not-typed",
      reportingWebServices: "provider-supported-not-typed",
      statisticsWebServices: "provider-supported-not-typed",
      web2Campaign: "provider-supported-not-typed",
      crmSdk: "provider-supported-not-typed",
      webConnectors: "provider-supported-not-typed",
      nativeInboundVoice: "provider-supported-not-typed",
      outboundDialing: "provider-supported-not-typed",
      callback: "provider-supported-not-typed",
      chat: "provider-supported-not-typed",
      digitalEngagement: "provider-supported-not-typed",
      email: "provider-supported-not-typed",
      sms: "provider-supported-not-typed",
      socialMessaging: "provider-supported-not-typed",
      video: "provider-supported-not-typed",
      campaignActions: "provider-supported-not-typed",
      transfer: "provider-supported-not-typed",
      crmObjects: "provider-supported-not-typed",
      recordings: "provider-supported-not-typed",
    },
  },
  maintainers: [{ name: "Cognidesk", type: "official" }],
});

export type Five9JsonPrimitive = string | number | boolean | null;
export type Five9JsonValue =
  | Five9JsonPrimitive
  | Five9JsonObject
  | readonly Five9JsonValue[];
export type Five9ProviderExtensionValue = Five9JsonValue | object | undefined;
export interface Five9JsonObject {
  [key: string]: Five9ProviderExtensionValue;
}
export type Five9ProviderPayload = Five9JsonObject | object;
export type Five9ProviderQuery = Record<string, Five9ProviderExtensionValue>;
export interface Five9ProviderResponse extends Five9JsonObject {}
export interface Five9ProviderExtensionFields extends Five9JsonObject {}

export interface Five9ContactCenterClientOptions {
  apiBaseUrl: string;
  accessToken?: string;
  authorizationHeader?: string;
  defaultHandoffPath?: string;
  readinessPath?: string;
  fetch?: typeof fetch;
}

export interface Five9CredentialStatusInput {
  apiBaseUrl?: string;
  apiAccessConfigured?: boolean;
  routingConfigured?: boolean;
}

export interface Five9HandoffInput {
  payload: Five9ConfiguredRequestPayload;
  idempotencyKey?: string | undefined;
}

export interface Five9ConfiguredRequestPayload {
  [key: string]: Five9ProviderExtensionValue;
}

export interface Five9ConfiguredRequestResponse {
  [key: string]: Five9ProviderExtensionValue;
}

export interface Five9ContactCenterClient {
  createHandoff(input: Five9HandoffInput): Promise<Five9ConfiguredRequestResponse>;
  readiness(): Promise<Five9ConfiguredRequestResponse>;
}

export interface Five9LiveCheckOptions extends Five9ContactCenterClientOptions {
  client?: Pick<Five9ContactCenterClient, "readiness">;
}

export function createFive9ContactCenterClient(options: Five9ContactCenterClientOptions): Five9ContactCenterClient {
  const fetchImpl = options.fetch ?? fetch;
  return {
    async createHandoff(input) {
      return five9Request({
        options,
        fetch: fetchImpl,
        method: "POST",
        path: configuredPath(options.defaultHandoffPath, "Five9 handoff path"),
        body: input.payload,
        idempotencyKey: input.idempotencyKey,
      });
    },
    async readiness() {
      return five9Request({
        options,
        fetch: fetchImpl,
        method: "GET",
        path: configuredPath(options.readinessPath, "Five9 readiness path"),
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

export function five9ContactCenterCredentialStatuses(input: Five9CredentialStatusInput): ProviderCredentialStatusInput[] {
  return [
    {
      providerPackageId: five9ContactCenterProviderManifest.id,
      requirementId: "five9-api-base",
      state: input.apiBaseUrl ? "configured" : "missing",
      message: input.apiBaseUrl ? "Five9 API base URL is configured." : "Five9 API base URL is required.",
    },
    {
      providerPackageId: five9ContactCenterProviderManifest.id,
      requirementId: "five9-api-access",
      state: input.apiAccessConfigured ? "configured" : "missing",
      message: input.apiAccessConfigured ? "Five9 API access is configured." : "Five9 API access is required.",
    },
    {
      providerPackageId: five9ContactCenterProviderManifest.id,
      requirementId: "five9-routing",
      state: input.routingConfigured ? "configured" : "missing",
      message: input.routingConfigured ? "Five9 routing is configured." : "Five9 routing must be configured by the SDK app.",
    },
  ];
}

export function createFive9ContactCenterLiveChecks(options: Five9LiveCheckOptions) {
  return [{
    id: "readiness",
    description: "Five9 API access can call the configured readiness endpoint.",
    requiredCredentialIds: ["five9-api-base", "five9-api-access"],
    async run(context: { signal?: AbortSignal }) {
      const client = options.client ?? createFive9ContactCenterClient(options);
      const result = await client.readiness();
      if (context.signal?.aborted) throw new Error("Five9 readiness check aborted.");
      return { details: { ok: Boolean(result) } };
    },
  }];
}

async function five9Request(input: {
  options: Five9ContactCenterClientOptions;
  fetch: typeof fetch;
  method: "GET" | "POST";
  path: string;
  body?: Five9ProviderPayload;
  idempotencyKey?: string | undefined;
}) {
  const response = await input.fetch(providerUrl(input.options.apiBaseUrl, input.path), {
    method: input.method,
    headers: {
      accept: "application/json",
      ...(input.body ? { "content-type": "application/json" } : {}),
      ...five9AuthHeaders(input.options),
      ...(input.idempotencyKey ? { "idempotency-key": input.idempotencyKey } : {}),
    },
    ...(input.body ? { body: JSON.stringify(input.body) } : {}),
  });
  return parseProviderResponse(response, "Five9");
}

function five9AuthHeaders(options: Five9ContactCenterClientOptions) {
  if (options.authorizationHeader) return { authorization: options.authorizationHeader };
  if (options.accessToken) return { authorization: `Bearer ${options.accessToken}` };
  return {};
}

function providerUrl(baseUrl: string, path: string) {
  if (!baseUrl) throw new Error("Five9 apiBaseUrl is required.");
  return new URL(path, baseUrl.replace(/\/+$/, "")).toString();
}

async function parseProviderResponse(response: Response, provider: string) {
  const text = await response.text();
  const body = text ? JSON.parse(text) as Five9JsonObject : {};
  if (!response.ok) {
    throw new Error(typeof body.message === "string" ? body.message : `${provider} API returned ${response.status}.`);
  }
  return body;
}
