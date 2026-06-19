import type { ProviderCredentialStatusInput } from "@cognidesk/core";
import { defineIntegrationProviderPackage as defineProviderPackage } from "../../provider-manifest.js";
import {
  createRingCentralDigitalApiGeneratedClient,
  RINGCENTRAL_DIGITAL_API_GENERATED_FUNCTION_COUNT,
  type RingCentralDigitalApiGeneratedClient,
  type RingCentralDigitalGeneratedOperationCaller,
} from "./digital-api-client.generated.js";
import {
  RINGCENTRAL_DIGITAL_API_OPERATION_BY_ID,
  RINGCENTRAL_DIGITAL_API_OPERATION_BY_UID,
  RINGCENTRAL_DIGITAL_API_OPERATION_COUNT,
  RINGCENTRAL_DIGITAL_API_PATH_COUNT,
  RINGCENTRAL_DIGITAL_API_SPEC_VERSION,
  type RingCentralDigitalApiOperationId,
  type RingCentralDigitalApiOperationUid,
} from "./digital-api-operations.generated.js";
import {
  createRingCentralVoiceApiGeneratedClient,
  RINGCENTRAL_VOICE_API_GENERATED_FUNCTION_COUNT,
  type RingCentralVoiceApiGeneratedClient,
  type RingCentralVoiceGeneratedOperationCaller,
} from "./voice-api-client.generated.js";
import {
  RINGCENTRAL_VOICE_API_OPERATION_BY_ID,
  RINGCENTRAL_VOICE_API_OPERATION_BY_UID,
  RINGCENTRAL_VOICE_API_OPERATION_COUNT,
  RINGCENTRAL_VOICE_API_PATH_COUNT,
  RINGCENTRAL_VOICE_API_SPEC_VERSION,
  type RingCentralVoiceApiOperationId,
  type RingCentralVoiceApiOperationUid,
} from "./voice-api-operations.generated.js";
export {
  createRingCentralDigitalApiGeneratedClient,
  RINGCENTRAL_DIGITAL_API_GENERATED_FUNCTION_COUNT,
  RINGCENTRAL_DIGITAL_API_GENERATED_FUNCTION_NAMES,
  type RingCentralDigitalApiGeneratedClient,
  type RingCentralDigitalGeneratedOperationCaller,
} from "./digital-api-client.generated.js";
export {
  RINGCENTRAL_DIGITAL_API_DOCS_SOURCE,
  RINGCENTRAL_DIGITAL_API_GENERATED_AT,
  RINGCENTRAL_DIGITAL_API_OPENAPI_VERSION,
  RINGCENTRAL_DIGITAL_API_OPERATION_BY_ID,
  RINGCENTRAL_DIGITAL_API_OPERATION_BY_UID,
  RINGCENTRAL_DIGITAL_API_OPERATION_COUNT,
  RINGCENTRAL_DIGITAL_API_OPERATIONS,
  RINGCENTRAL_DIGITAL_API_PATH_COUNT,
  RINGCENTRAL_DIGITAL_API_REPO_SOURCE,
  RINGCENTRAL_DIGITAL_API_SPEC_SOURCE,
  RINGCENTRAL_DIGITAL_API_SPEC_VERSION,
  type RingCentralDigitalApiOperation,
  type RingCentralDigitalApiOperationId,
  type RingCentralDigitalApiOperationUid,
} from "./digital-api-operations.generated.js";
export {
  createRingCentralVoiceApiGeneratedClient,
  RINGCENTRAL_VOICE_API_GENERATED_FUNCTION_COUNT,
  RINGCENTRAL_VOICE_API_GENERATED_FUNCTION_NAMES,
  type RingCentralVoiceApiGeneratedClient,
  type RingCentralVoiceGeneratedOperationCaller,
} from "./voice-api-client.generated.js";
export {
  RINGCENTRAL_VOICE_API_DOCS_SOURCE,
  RINGCENTRAL_VOICE_API_GENERATED_AT,
  RINGCENTRAL_VOICE_API_OPENAPI_VERSION,
  RINGCENTRAL_VOICE_API_OPERATION_BY_ID,
  RINGCENTRAL_VOICE_API_OPERATION_BY_UID,
  RINGCENTRAL_VOICE_API_OPERATION_COUNT,
  RINGCENTRAL_VOICE_API_OPERATIONS,
  RINGCENTRAL_VOICE_API_PATH_COUNT,
  RINGCENTRAL_VOICE_API_REPO_SOURCE,
  RINGCENTRAL_VOICE_API_SPEC_SOURCE,
  RINGCENTRAL_VOICE_API_SPEC_VERSION,
  type RingCentralVoiceApiOperation,
  type RingCentralVoiceApiOperationId,
  type RingCentralVoiceApiOperationUid,
} from "./voice-api-operations.generated.js";
export type * from "./digital-api-schema-types.generated.js";
export type * from "./voice-api-schema-types.generated.js";

export const ringCentralContactCenterProviderManifest = defineProviderPackage({
  id: "contactCenter.ringcentral",
  name: "RingCentral RingCX",
  packageName: "@cognidesk/integrations",
  provider: "ringcentral",
  category: "contactCenter",
  trustLevel: "official",
  directions: ["inbound-only", "outbound-only", "bidirectional"],
  channelAudiences: ["customer-facing", "internal-support", "mixed"],
  credentialRequirements: [
    { id: "ringcentral-ringcx-api-base", label: "RingCX API base URL", required: true },
    {
      id: "ringcentral-ringcx-api-access",
      label: "RingCX API access",
      description: "RingCX access token or RingCentral OAuth token plus user/platform permissions configured by the SDK app; this package does not invent a generic `ringcx` OAuth scope.",
      required: true,
      metadata: {
        scopeKind: "mixed-auth-mode",
        privilegeGuidance: "RingCX deployments can use RingCentral OAuth scopes plus RingCX product permissions, or product-specific bearer/token modes for legacy/current APIs.",
      },
    },
    { id: "ringcentral-ringcx-routing", label: "RingCX queue/campaign routing configuration", required: false },
  ],
  coverage: {
    scope: "provider-api-subset",
    notes: [
      "Coverage includes generated per-operation functions for the current official RingCentral RingCX Voice OpenAPI spec and the official RingCentral Engage Digital OpenAPI spec.",
      "Generated current Voice functions cover active calls, agents, agent groups, campaigns, dial groups, leads, lists, recordings, reports, requeue shortcuts, skills, teams, web services, and related current RingCX Voice REST operations.",
      "Generated Digital functions cover events/webhooks, attachments, bots, content, identities, interventions, threads, sources, tasks, users, user capacities, teams, channels, topologies, and provisioning/routing resources from the Engage Digital REST spec.",
      "Existing SDK-configured handoff and readiness helpers remain available, but the package still does not claim legacy RingCX Voice, broader RingCentral platform, Channel SDK runtime, or customer-site widget coverage.",
    ],
    evidence: [
      { label: "RingCX Voice APIs", url: "https://developers.ringcentral.com/engage-voice-api" },
      { label: "RingCX Voice OpenAPI", url: "https://raw.githubusercontent.com/ringcentral/engage-voice-api-docs/main/specs/engage-voice_openapi3.json" },
      { label: "RingCX Voice API docs repository", url: "https://github.com/ringcentral/engage-voice-api-docs" },
      { label: "RingCX Digital APIs", url: "https://developers.ringcentral.com/engage-digital-api" },
      { label: "RingCX Digital OpenAPI", url: "https://raw.githubusercontent.com/ringcentral/engage-digital-api-docs/master/specs/engage-digital_openapi3.yaml" },
      { label: "RingCX Digital API docs repository", url: "https://github.com/ringcentral/engage-digital-api-docs" },
      { label: "RingCX authentication modes", url: "https://developers.ringcentral.com/engage/voice/guide/authentication" },
      { label: "RingCX Digital messaging source permissions", url: "https://developers.ringcentral.com/engage/digital/guide/interactions/web-messaging/source" },
      { label: "RingCX Channel SDK quick start", url: "https://developers.ringcentral.com/engage/digital/guide/sdks/source-sdk/quick-start" },
    ],
  },
  capabilities: [
    {
      capability: "handoff",
      label: "Create RingCX handoff",
      description: "Creates SDK-configured RingCX support-workflow requests; current RingCX Voice and Engage Digital REST operations are exposed separately through generated voiceApi and digitalApi functions.",
      audiences: ["customer-facing", "internal-support", "mixed"],
      providerObjects: [{ kind: "ringcxHandoff", label: "RingCX Handoff" }],
      requiresCredential: true,
      sideEffect: true,
      exposesSensitiveData: true,
      changesWorkflow: true,
    },
  ],
  privacyNotes: [
    "RingCX handoffs can include customer identifiers, leads, active calls, queue metadata, and conversation summaries.",
    "RingCentral credentials stay server-side and Studio receives only readiness.",
  ],
  limitations: [
    "RingCX API product, regional endpoint, queue/campaign IDs, and outbound eligibility are SDK-user configuration.",
    "Generated functions expose the current RingCX Voice and Engage Digital REST specs, but SDK users still own account/region host selection, permissions, entitlement, safe mutating-operation policy, and payload validation.",
    "Legacy RingCX Voice OpenAPI specs, product-specific private endpoints, the Engage Digital Channel SDK runtime, web/mobile widgets, and broader RingCentral platform APIs remain separate surfaces.",
    "Per-conversation handoff calls cannot override the configured RingCX path; use generated voiceApi or digitalApi functions for consequential lead, campaign, active-call, digital, outbound, transfer, recording, bot, or task actions.",
  ],
  metadata: {
    authModes: {
      currentRingCx: "authorization-bearer",
      legacyEngageVoice: "x-auth-token",
      explicitAuthorizationHeader: "supported",
    },
    channelCoverage: {
      configuredHttpHandoff: "supported",
      currentVoiceRestApiOperations: "generated-per-operation-functions",
      currentVoiceLeadCampaignActiveCall: "generated-current-openapi-surface",
      currentVoiceOutboundDialing: "generated-current-openapi-surface",
      currentVoiceRecording: "generated-current-openapi-surface",
      currentVoiceTransfer: "generated-current-openapi-surface-where-present-in-current-openapi",
      digitalRestApiOperations: "generated-per-operation-functions",
      digitalCasesMessaging: "generated-digital-openapi-surface",
      digitalTasksThreadsInterventions: "generated-digital-openapi-surface",
      digitalWebhooksEvents: "generated-digital-openapi-surface",
      liveWebChat: "provider-supported-customer-site-not-typed",
      mobileMessaging: "provider-supported-customer-site-not-typed",
      channelSdkMessaging: "provider-supported-sdk-runtime-not-typed",
      smsEmailSocial: "generated-digital-openapi-surface-where-present",
      legacyVoiceRestApiOperations: "provider-supported-not-typed",
    },
    generatedProviderApiSlices: {
      ringCxVoiceCurrent: {
        provider: "ringcentral-ringcx-voice-current",
        apiVersion: RINGCENTRAL_VOICE_API_SPEC_VERSION,
        verifiedAt: "2026-06-18",
        coverageArtifact: "docs/provider-coverage/ringcentral-voice-api-2026-06-18.operations.json",
        operationCatalogArtifact: "docs/provider-coverage/ringcentral-voice-api-2026-06-18.operations.json",
        functionCatalogArtifact: "docs/provider-coverage/ringcentral-voice-api-2026-06-18.functions.json",
        documentedPathCount: RINGCENTRAL_VOICE_API_PATH_COUNT,
        documentedOperationCount: RINGCENTRAL_VOICE_API_OPERATION_COUNT,
        implementedOperationCount: RINGCENTRAL_VOICE_API_OPERATION_COUNT,
        generatedFunctionCount: RINGCENTRAL_VOICE_API_GENERATED_FUNCTION_COUNT,
      },
      engageDigital: {
        provider: "ringcentral-engage-digital",
        apiVersion: RINGCENTRAL_DIGITAL_API_SPEC_VERSION,
        verifiedAt: "2026-06-18",
        coverageArtifact: "docs/provider-coverage/ringcentral-digital-api-2026-06-18.operations.json",
        operationCatalogArtifact: "docs/provider-coverage/ringcentral-digital-api-2026-06-18.operations.json",
        functionCatalogArtifact: "docs/provider-coverage/ringcentral-digital-api-2026-06-18.functions.json",
        documentedPathCount: RINGCENTRAL_DIGITAL_API_PATH_COUNT,
        documentedOperationCount: RINGCENTRAL_DIGITAL_API_OPERATION_COUNT,
        implementedOperationCount: RINGCENTRAL_DIGITAL_API_OPERATION_COUNT,
        generatedFunctionCount: RINGCENTRAL_DIGITAL_API_GENERATED_FUNCTION_COUNT,
      },
    },
  },
  maintainers: [{ name: "Cognidesk", type: "official" }],
});

export type RingCentralJsonPrimitive = string | number | boolean | null;
export type RingCentralJsonValue =
  | RingCentralJsonPrimitive
  | RingCentralJsonObject
  | readonly RingCentralJsonValue[];
export type RingCentralProviderExtensionValue = RingCentralJsonValue | object | undefined;
export interface RingCentralJsonObject {
  [key: string]: RingCentralProviderExtensionValue;
}
export type RingCentralProviderPayload = RingCentralJsonObject | object;
export type RingCentralProviderQuery = Record<string, RingCentralProviderExtensionValue>;
export interface RingCentralProviderResponse extends RingCentralJsonObject {}
export interface RingCentralProviderExtensionFields extends RingCentralJsonObject {}

export interface RingCentralContactCenterClientOptions {
  apiBaseUrl: string;
  accessToken?: string;
  authorizationHeader?: string;
  legacyAuthToken?: string;
  defaultHandoffPath?: string;
  readinessPath?: string;
  fetch?: typeof fetch;
}

export interface RingCentralCredentialStatusInput {
  apiBaseUrl?: string;
  apiAccessConfigured?: boolean;
  routingConfigured?: boolean;
}

export interface RingCentralHandoffInput {
  payload: RingCentralProviderPayload;
  idempotencyKey?: string | undefined;
}

export type RingCentralHttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE" | "HEAD" | "OPTIONS";

export interface RingCentralResource {
  [key: string]: RingCentralProviderExtensionValue;
}

export interface RingCentralOperationRequestInput {
  pathParams?: Record<string, string | number | boolean | undefined> | undefined;
  query?: RingCentralProviderQuery | undefined;
  body?: RingCentralProviderPayload | undefined;
  headers?: Record<string, string> | undefined;
  idempotencyKey?: string | undefined;
  signal?: AbortSignal | undefined;
}

export interface RingCentralContactCenterClient {
  voiceApi: RingCentralVoiceApiGeneratedClient;
  digitalApi: RingCentralDigitalApiGeneratedClient;
  requestVoiceOperation: RingCentralVoiceGeneratedOperationCaller;
  requestDigitalOperation: RingCentralDigitalGeneratedOperationCaller;
  createHandoff(input: RingCentralHandoffInput): Promise<RingCentralProviderResponse>;
  readiness(): Promise<RingCentralProviderResponse>;
}

export interface RingCentralLiveCheckOptions extends RingCentralContactCenterClientOptions {
  client?: Pick<RingCentralContactCenterClient, "readiness">;
}

export function createRingCentralContactCenterClient(options: RingCentralContactCenterClientOptions): RingCentralContactCenterClient {
  const fetchImpl = options.fetch ?? fetch;
  const requestVoiceOperationImpl = (
    operationUidOrId: RingCentralVoiceApiOperationUid | RingCentralVoiceApiOperationId,
    input: RingCentralOperationRequestInput = {},
  ) => {
    const operation = RINGCENTRAL_VOICE_API_OPERATION_BY_UID.get(operationUidOrId)
      ?? RINGCENTRAL_VOICE_API_OPERATION_BY_ID.get(operationUidOrId);
    if (!operation) throw new Error(`Unknown RingCentral RingCX Voice operation '${operationUidOrId}'.`);
    return ringCentralRequest({
      options,
      fetch: fetchImpl,
      method: operation.method,
      path: operation.path,
      input,
    });
  };
  const requestDigitalOperationImpl = (
    operationUidOrId: RingCentralDigitalApiOperationUid | RingCentralDigitalApiOperationId,
    input: RingCentralOperationRequestInput = {},
  ) => {
    const operation = RINGCENTRAL_DIGITAL_API_OPERATION_BY_UID.get(operationUidOrId)
      ?? RINGCENTRAL_DIGITAL_API_OPERATION_BY_ID.get(operationUidOrId);
    if (!operation) throw new Error(`Unknown RingCentral Engage Digital operation '${operationUidOrId}'.`);
    return ringCentralRequest({
      options,
      fetch: fetchImpl,
      method: operation.method,
      path: operation.path,
      input,
    });
  };
  const requestVoiceOperation = requestVoiceOperationImpl as RingCentralVoiceGeneratedOperationCaller;
  const requestDigitalOperation = requestDigitalOperationImpl as RingCentralDigitalGeneratedOperationCaller;
  const voiceApi = createRingCentralVoiceApiGeneratedClient(requestVoiceOperation);
  const digitalApi = createRingCentralDigitalApiGeneratedClient(requestDigitalOperation);
  return {
    voiceApi,
    digitalApi,
    requestVoiceOperation,
    requestDigitalOperation,
    async createHandoff(input) {
      return ringCentralRequest({
        options,
        fetch: fetchImpl,
        method: "POST",
        path: configuredPath(options.defaultHandoffPath, "RingCX handoff path"),
        input: {
          body: input.payload,
          idempotencyKey: input.idempotencyKey,
        },
      });
    },
    async readiness() {
      return ringCentralRequest({
        options,
        fetch: fetchImpl,
        method: "GET",
        path: configuredPath(options.readinessPath, "RingCX readiness path"),
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

export function ringCentralContactCenterCredentialStatuses(input: RingCentralCredentialStatusInput): ProviderCredentialStatusInput[] {
  return [
    {
      providerPackageId: ringCentralContactCenterProviderManifest.id,
      requirementId: "ringcentral-ringcx-api-base",
      state: input.apiBaseUrl ? "configured" : "missing",
      message: input.apiBaseUrl ? "RingCX API base URL is configured." : "RingCX API base URL is required.",
    },
    {
      providerPackageId: ringCentralContactCenterProviderManifest.id,
      requirementId: "ringcentral-ringcx-api-access",
      state: input.apiAccessConfigured ? "configured" : "missing",
      message: input.apiAccessConfigured ? "RingCX API access is configured." : "RingCX API access is required.",
    },
    {
      providerPackageId: ringCentralContactCenterProviderManifest.id,
      requirementId: "ringcentral-ringcx-routing",
      state: input.routingConfigured ? "configured" : "missing",
      message: input.routingConfigured ? "RingCX routing is configured." : "RingCX routing must be configured by the SDK app.",
    },
  ];
}

export function createRingCentralContactCenterLiveChecks(options: RingCentralLiveCheckOptions) {
  return [{
    id: "readiness",
    description: "RingCX API access can call the configured readiness endpoint.",
    requiredCredentialIds: ["ringcentral-ringcx-api-base", "ringcentral-ringcx-api-access"],
    async run(context: { signal?: AbortSignal }) {
      const client = options.client ?? createRingCentralContactCenterClient(options);
      const result = await client.readiness();
      if (context.signal?.aborted) throw new Error("RingCX readiness check aborted.");
      return { details: { ok: Boolean(result) } };
    },
  }];
}

async function ringCentralRequest<T = RingCentralResource>(input: {
  options: RingCentralContactCenterClientOptions;
  fetch: typeof fetch;
  method: RingCentralHttpMethod;
  path: string;
  input?: RingCentralOperationRequestInput | undefined;
}): Promise<T> {
  const body = encodeRingCentralBody(input.input?.body);
  const response = await input.fetch(providerUrl(input.options.apiBaseUrl, ringCentralOperationPath(input.path, input.input?.pathParams ?? {}), input.input?.query), {
    method: input.method,
    headers: {
      accept: "application/json",
      ...(body !== undefined ? { "content-type": "application/json" } : {}),
      ...input.input?.headers,
      ...ringCentralAuthHeaders(input.options),
      ...(input.input?.idempotencyKey ? { "idempotency-key": input.input.idempotencyKey } : {}),
    },
    ...(body !== undefined ? { body } : {}),
    ...(input.input?.signal ? { signal: input.input.signal } : {}),
  });
  return parseProviderResponse<T>(response, "RingCX");
}

function providerUrl(baseUrl: string, path: string, query?: RingCentralProviderQuery) {
  if (!baseUrl) throw new Error("RingCX apiBaseUrl is required.");
  const url = new URL(path.replace(/^\/+/, ""), `${baseUrl.replace(/\/+$/, "")}/`);
  appendRingCentralQuery(url.searchParams, query);
  return url.toString();
}

function ringCentralOperationPath(pathTemplate: string, pathParams: Record<string, string | number | boolean | undefined>) {
  return pathTemplate.replace(/\{([^}]+)\}/g, (_match, key: string) => {
    const value = pathParams[key];
    if (value === undefined) throw new Error(`Missing RingCentral path parameter '${key}'.`);
    return encodeURIComponent(String(value));
  });
}

function appendRingCentralQuery(params: URLSearchParams, query?: RingCentralProviderQuery) {
  for (const [key, value] of Object.entries(query ?? {})) {
    if (value === undefined || value === null) continue;
    if (Array.isArray(value)) {
      for (const item of value) {
        if (item !== undefined && item !== null) params.append(key, String(item));
      }
      continue;
    }
    params.set(key, String(value));
  }
}

function encodeRingCentralBody(body: unknown) {
  if (body === undefined) return undefined;
  if (typeof body === "string" || body instanceof Blob || body instanceof FormData || body instanceof URLSearchParams) return body;
  return JSON.stringify(body);
}

function ringCentralAuthHeaders(options: RingCentralContactCenterClientOptions) {
  if (options.authorizationHeader) {
    return { authorization: options.authorizationHeader };
  }
  if (options.legacyAuthToken) {
    return { "x-auth-token": options.legacyAuthToken };
  }
  if (isLegacyRingCentralBaseUrl(options.apiBaseUrl)) {
    throw new Error("Legacy RingCX hosts require legacyAuthToken or authorizationHeader; bearer accessToken is only valid for the current RingCX API.");
  }
  return options.accessToken ? { authorization: `Bearer ${options.accessToken}` } : {};
}

function isLegacyRingCentralBaseUrl(baseUrl: string) {
  try {
    const host = new URL(baseUrl).hostname.toLowerCase();
    return host === "portal.vacd.biz" || host === "portal.virtualacd.biz";
  } catch {
    return false;
  }
}

async function parseProviderResponse<T = RingCentralJsonObject>(response: Response, provider: string): Promise<T> {
  const text = await response.text();
  const body = text ? JSON.parse(text) as RingCentralJsonObject : {};
  if (!response.ok) {
    throw new Error(typeof body.message === "string" ? body.message : `${provider} API returned ${response.status}.`);
  }
  return body as T;
}
