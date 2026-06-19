import type { ProviderCredentialStatusInput } from "@cognidesk/core";
import { defineIntegrationProviderPackage as defineProviderPackage } from "../../provider-manifest.js";

export const nextivaContactCenterProviderManifest = defineProviderPackage({
  id: "contactCenter.nextiva",
  name: "Nextiva Contact Center",
  packageName: "@cognidesk/integrations",
  provider: "nextiva",
  category: "contactCenter",
  trustLevel: "official",
  directions: ["inbound-only", "outbound-only", "bidirectional"],
  channelAudiences: ["customer-facing", "internal-support", "mixed"],
  credentialRequirements: [
    { id: "nextiva-contact-center-api-base", label: "Nextiva Contact Center API base URL", required: true },
    {
      id: "nextiva-contact-center-api-access",
      label: "Nextiva Contact Center API access",
      description: "Endpoint-specific Nextiva API access configured by the SDK app; this package does not assume an OAuth scope for generic configured paths.",
      required: true,
      metadata: {
        scopeKind: "provider-role-or-privilege-guidance",
        privilegeGuidance: "Nextiva Contact Center access is governed by tenant/API/SDK authority and configured entity/action permissions rather than a universal OAuth scope list.",
      },
    },
    { id: "nextiva-contact-center-authorities", label: "Nextiva action/entity permissions for configured paths", description: "Host-owned Nextiva permissions for configured workitem, callback, campaign, outbound, and transfer actions.", required: false },
    { id: "nextiva-contact-center-routing", label: "Nextiva queue/campaign/routing configuration", required: false },
  ],
  coverage: {
    scope: "support-workflow-subset",
    notes: [
      "Coverage is limited to SDK-configured handoff/readiness requests plus a generic authenticated request helper for SDK-user-owned Nextiva endpoints; this is not typed outbound or transfer coverage.",
      "No official public OpenAPI/Swagger inventory was found during the 2026-06-18 Nextiva audit; the checked inventory is `docs/provider-coverage/nextiva-contact-center-api-2026-06-18.checked-inventory.json`, and public docs describe service families and SDK methods rather than a complete generated operation catalog.",
      "The generic request helper is not evidence of full Nextiva Contact Center API coverage; typed user/session/ACD services, queues, campaigns, users, workitems, call control, transfers to agent/inbox/external destinations, callbacks/callback administration, reports, recordings, conversations, email response, conference, DTMF, surveys, tenant authority/entity permissions, and channel APIs are not implemented here.",
      "Configured Nextiva paths may perform arbitrary Nextiva-side mutations and must be classified, permission-gated, and policy-gated by the host SDK app before operators can trigger them.",
    ],
    evidence: [
      { label: "Nextiva Contact Center REST APIs", url: "https://www.nextiva.com/resources/learn/rest-apis" },
      { label: "Nextiva User Service", url: "https://developer.nextiva.com/nextiva/docs/user-service" },
      { label: "Nextiva ACD Service", url: "https://developer.nextiva.com/nextiva/docs/acd-service" },
      { label: "Nextiva WorkItem Service", url: "https://developer.nextiva.com/nextiva/docs/workitem-service" },
      { label: "Nextiva Conversation Service", url: "https://developer.nextiva.com/nextiva/docs/conversation-service" },
      { label: "Nextiva Contact Center Admin Guide", url: "https://www.nextiva.com/support/wp-content/uploads/sites/3/2024/06/NCC-Admin-Guide_v1.2.pdf" },
    ],
  },
  capabilities: [
    {
      capability: "handoff",
      label: "Create Nextiva handoff",
      description: "Creates SDK-configured Nextiva contact-center handoff requests.",
      audiences: ["customer-facing", "internal-support", "mixed"],
      providerObjects: [{ kind: "nextivaHandoff", label: "Nextiva Handoff" }],
      requiresCredential: true,
      sideEffect: true,
      exposesSensitiveData: true,
      changesWorkflow: true,
    },
    {
      capability: "nextiva.request",
      label: "Call SDK-configured Nextiva endpoint",
      description: "Executes an SDK-user-configured authenticated Nextiva request helper without implying typed endpoint coverage; the host app must classify and gate mutating Nextiva actions.",
      audiences: ["internal-support", "mixed"],
      providerObjects: [{ kind: "nextivaConfiguredRequest", label: "Nextiva Configured Request" }],
      requiresCredential: true,
      sideEffect: true,
      exposesSensitiveData: true,
      changesWorkflow: true,
      extension: true,
    },
  ],
  privacyNotes: [
    "Nextiva handoffs can include customer identifiers, phone numbers, active workitems, queue metadata, and conversation summaries.",
    "Nextiva API credentials stay server-side and Studio receives only readiness.",
  ],
  limitations: [
    "Nextiva tenant endpoint, queue/campaign IDs, custom API object paths, and outbound eligibility are SDK-user configuration.",
    "The generic request helper is an escape hatch for SDK-user-owned endpoints and does not satisfy typed handoff, send, or transfer coverage.",
    "Per-conversation handoff calls cannot override the configured Nextiva handoff path; use the explicit `request()` helper for SDK-owned custom endpoints.",
    "Nextiva callbacks/callback administration, workitem mutations, outbound dialing/messaging, campaign operations, call-control transfer, and authority/entity permissions are host-owned configuration and are not typed by this package.",
  ],
  metadata: {
    checkedInventoryArtifact: "docs/provider-coverage/nextiva-contact-center-api-2026-06-18.checked-inventory.json",
    checkedProviderSupportedNotTypedFamilies: 12,
    officialPublicOpenApiSpec: "not-found",
    channelCoverage: {
      configuredHttpHandoff: "supported",
      genericRequest: "sdk-owned-classified-endpoint",
      publicOpenApiSpec: "not-covered",
      publicServiceDocs: "provider-supported-not-typed",
      userSessionAcdService: "provider-supported-not-typed",
      acdOfferLifecycle: "provider-supported-not-typed",
      workItems: "provider-supported-not-typed",
      voiceWorkitems: "provider-supported-not-typed",
      chatWorkitems: "provider-supported-not-typed",
      emailWorkitems: "provider-supported-not-typed",
      workitemCallControl: "provider-supported-not-typed",
      workitemTransferAgentInboxExternal: "provider-supported-not-typed",
      workitemEmailResponse: "provider-supported-not-typed",
      conferenceRecordingDtmf: "provider-supported-not-typed",
      conversationFetchCreateSend: "provider-supported-not-typed",
      surveys: "provider-supported-not-typed",
      callbacks: "provider-supported-not-typed",
      outboundDialingMessaging: "provider-supported-not-typed",
      campaigns: "provider-supported-not-typed",
      transfer: "provider-supported-not-typed",
    },
  },
  maintainers: [{ name: "Cognidesk", type: "official" }],
});

export type NextivaHttpMethod = "GET" | "POST" | "PATCH" | "PUT" | "DELETE";

export type NextivaQueryValue = string | number | boolean | null | undefined;

export type NextivaJsonPrimitive = string | number | boolean | null;
export type NextivaJsonValue =
  | NextivaJsonPrimitive
  | NextivaJsonObject
  | readonly NextivaJsonValue[];
export type NextivaProviderExtensionValue = NextivaJsonValue | object | undefined;
export interface NextivaJsonObject {
  [key: string]: NextivaProviderExtensionValue;
}
export type NextivaProviderPayload = NextivaJsonObject | object;
export type NextivaProviderQuery = Record<string, NextivaProviderExtensionValue>;
export interface NextivaProviderResponse extends NextivaJsonObject {}
export interface NextivaProviderExtensionFields extends NextivaJsonObject {}

export interface NextivaContactCenterClientOptions {
  apiBaseUrl: string;
  accessToken?: string;
  apiKey?: string;
  apiKeyHeaderName?: string;
  defaultHandoffPath?: string;
  readinessPath?: string;
  fetch?: typeof fetch;
}

export interface NextivaCredentialStatusInput {
  apiBaseUrl?: string;
  apiAccessConfigured?: boolean;
  authoritiesConfigured?: boolean;
  routingConfigured?: boolean;
}

export interface NextivaRequestInput {
  method?: NextivaHttpMethod;
  path: string;
  query?: Record<string, NextivaQueryValue>;
  body?: NextivaProviderPayload;
  idempotencyKey?: string | undefined;
  headers?: Record<string, string | undefined>;
  allowMutation?: boolean;
  classification?: string;
}

export interface NextivaHandoffInput {
  payload: NextivaProviderPayload;
  query?: Record<string, NextivaQueryValue>;
  idempotencyKey?: string | undefined;
}

export interface NextivaContactCenterClient {
  createHandoff(input: NextivaHandoffInput): Promise<NextivaProviderResponse>;
  readiness(): Promise<NextivaProviderResponse>;
  request(input: NextivaRequestInput): Promise<NextivaJsonObject>;
}

export interface NextivaLiveCheckOptions extends NextivaContactCenterClientOptions {
  client?: Pick<NextivaContactCenterClient, "readiness">;
}

export function createNextivaContactCenterClient(options: NextivaContactCenterClientOptions): NextivaContactCenterClient {
  const fetchImpl = options.fetch ?? fetch;
  return {
    async createHandoff(input) {
      return nextivaRequest({
        options,
        fetch: fetchImpl,
        method: "POST",
        path: configuredPath(options.defaultHandoffPath, "Nextiva handoff path"),
        query: input.query,
        body: input.payload,
        idempotencyKey: input.idempotencyKey,
        allowMutation: true,
        classification: "sdk-configured-handoff",
      });
    },
    async readiness() {
      return nextivaRequest({
        options,
        fetch: fetchImpl,
        method: "GET",
        path: configuredPath(options.readinessPath, "Nextiva readiness path"),
      });
    },
    async request(input: NextivaRequestInput) {
      return nextivaRequest({
        options,
        fetch: fetchImpl,
        method: input.method ?? "GET",
        path: input.path,
        query: input.query,
        body: input.body,
        idempotencyKey: input.idempotencyKey,
        headers: input.headers,
        allowMutation: input.allowMutation,
        classification: input.classification,
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

export function nextivaContactCenterCredentialStatuses(input: NextivaCredentialStatusInput): ProviderCredentialStatusInput[] {
  return [
    {
      providerPackageId: nextivaContactCenterProviderManifest.id,
      requirementId: "nextiva-contact-center-api-base",
      state: input.apiBaseUrl ? "configured" : "missing",
      message: input.apiBaseUrl ? "Nextiva Contact Center API base URL is configured." : "Nextiva Contact Center API base URL is required.",
    },
    {
      providerPackageId: nextivaContactCenterProviderManifest.id,
      requirementId: "nextiva-contact-center-api-access",
      state: input.apiAccessConfigured ? "configured" : "missing",
      message: input.apiAccessConfigured ? "Nextiva Contact Center API access is configured." : "Nextiva Contact Center API access is required.",
    },
    {
      providerPackageId: nextivaContactCenterProviderManifest.id,
      requirementId: "nextiva-contact-center-authorities",
      state: input.authoritiesConfigured ? "configured" : "missing",
      message: input.authoritiesConfigured
        ? "Nextiva action/entity permissions for configured paths are documented by the SDK app."
        : "Nextiva action/entity permissions for configured paths must be owned by SDK configuration.",
    },
    {
      providerPackageId: nextivaContactCenterProviderManifest.id,
      requirementId: "nextiva-contact-center-routing",
      state: input.routingConfigured ? "configured" : "missing",
      message: input.routingConfigured ? "Nextiva routing is configured." : "Nextiva routing must be configured by the SDK app.",
    },
  ];
}

export function createNextivaContactCenterLiveChecks(options: NextivaLiveCheckOptions) {
  return [{
    id: "readiness",
    description: "Nextiva Contact Center API access can call the configured readiness endpoint.",
    requiredCredentialIds: ["nextiva-contact-center-api-base", "nextiva-contact-center-api-access"],
    async run(context: { signal?: AbortSignal }) {
      const client = options.client ?? createNextivaContactCenterClient(options);
      const result = await client.readiness();
      if (context.signal?.aborted) throw new Error("Nextiva readiness check aborted.");
      return { details: { ok: Boolean(result) } };
    },
  }];
}

async function nextivaRequest<TResponse extends NextivaJsonObject = NextivaJsonObject>(input: {
  options: NextivaContactCenterClientOptions;
  fetch: typeof fetch;
  method: NextivaHttpMethod;
  path: string;
  query?: Record<string, NextivaQueryValue> | undefined;
  body?: NextivaProviderPayload | undefined;
  idempotencyKey?: string | undefined;
  headers?: Record<string, string | undefined> | undefined;
  allowMutation?: boolean | undefined;
  classification?: string | undefined;
}): Promise<TResponse> {
  assertNextivaMutationAllowed(input.method, input.allowMutation, input.classification);
  const response = await input.fetch(providerUrl(input.options.apiBaseUrl, input.path, input.query), {
    method: input.method,
    headers: {
      accept: "application/json",
      ...(input.body ? { "content-type": "application/json" } : {}),
      ...nextivaAuthHeaders(input.options),
      ...(input.idempotencyKey ? { "idempotency-key": input.idempotencyKey } : {}),
      ...definedHeaders(input.headers),
    },
    ...(input.body ? { body: JSON.stringify(input.body) } : {}),
  });
  return parseProviderResponse<TResponse>(response, "Nextiva");
}

function assertNextivaMutationAllowed(method: NextivaHttpMethod, allowMutation?: boolean, classification?: string) {
  if (method === "GET") return;
  if (allowMutation !== true || !classification?.trim()) {
    throw new Error("Nextiva mutating request() calls require allowMutation=true and a host-owned policy classification.");
  }
}

function nextivaAuthHeaders(options: NextivaContactCenterClientOptions) {
  if (options.accessToken) return { authorization: `Bearer ${options.accessToken}` };
  if (options.apiKey) return { [options.apiKeyHeaderName ?? "x-api-key"]: options.apiKey };
  return {};
}

function definedHeaders(headers: Record<string, string | undefined> = {}) {
  return Object.fromEntries(Object.entries(headers).filter((entry): entry is [string, string] => typeof entry[1] === "string"));
}

function providerUrl(baseUrl: string, path: string, query: Record<string, NextivaQueryValue> = {}) {
  if (!baseUrl) throw new Error("Nextiva apiBaseUrl is required.");
  const url = new URL(path, baseUrl.replace(/\/+$/, ""));
  for (const [key, value] of Object.entries(query)) {
    if (value !== undefined && value !== null) url.searchParams.set(key, String(value));
  }
  return url.toString();
}

async function parseProviderResponse<TResponse extends NextivaJsonObject>(response: Response, provider: string): Promise<TResponse> {
  const text = await response.text();
  const body = parseResponseBody(text);
  if (!response.ok) {
    throw new Error(providerErrorMessage(body, provider, response.status));
  }
  return body as TResponse;
}

function parseResponseBody(text: string): NextivaJsonObject {
  if (!text) return {};
  try {
    const parsed = JSON.parse(text) as unknown;
    return isRecord(parsed) ? parsed : { value: parsed as NextivaProviderExtensionValue };
  } catch {
    return { value: text };
  }
}

function providerErrorMessage(body: NextivaJsonObject, provider: string, status: number) {
  if (typeof body.message === "string") return body.message;
  if (typeof body.error === "string") return body.error;
  return `${provider} API returned ${status}.`;
}

function isRecord(value: unknown): value is NextivaJsonObject {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}
