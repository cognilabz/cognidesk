import type { ProviderCredentialStatusInput } from "@cognidesk/core";
import { defineIntegrationProviderPackage as defineProviderPackage } from "../../provider-manifest.js";
import {
  createNiceCxoneFullApiGeneratedClient,
  NICE_CXONE_FULL_API_GENERATED_FUNCTION_COUNT,
  type NiceCxoneFullApiGeneratedClient,
  type NiceCxoneGeneratedOperationCaller,
} from "./full-api-client.generated.js";
import {
  NICE_CXONE_FULL_API_OPERATION_BY_ID,
  NICE_CXONE_FULL_API_OPERATION_BY_UID,
  NICE_CXONE_FULL_API_OPERATION_COUNT,
  NICE_CXONE_FULL_API_PATH_COUNT,
  NICE_CXONE_FULL_API_SPEC_COUNT,
  NICE_CXONE_FULL_API_SPEC_VERSION,
  type NiceCxoneFullApiOperationUid,
} from "./full-api-operations.generated.js";
export {
  createNiceCxoneFullApiGeneratedClient,
  NICE_CXONE_FULL_API_GENERATED_FUNCTION_COUNT,
  NICE_CXONE_FULL_API_GENERATED_FUNCTION_NAMES,
  type NiceCxoneFullApiGeneratedClient,
  type NiceCxoneGeneratedOperationCaller,
} from "./full-api-client.generated.js";
export {
  NICE_CXONE_FULL_API_GENERATED_AT,
  NICE_CXONE_FULL_API_OPERATION_BY_ID,
  NICE_CXONE_FULL_API_OPERATION_BY_UID,
  NICE_CXONE_FULL_API_OPERATION_COUNT,
  NICE_CXONE_FULL_API_OPERATIONS,
  NICE_CXONE_FULL_API_PATH_COUNT,
  NICE_CXONE_FULL_API_SPEC_COUNT,
  NICE_CXONE_FULL_API_SPECS,
  NICE_CXONE_FULL_API_SPEC_SOURCE,
  NICE_CXONE_FULL_API_SPEC_VERSION,
  type NiceCxoneFullApiOperation,
  type NiceCxoneFullApiOperationUid,
  type NiceCxoneFullApiSpec,
} from "./full-api-operations.generated.js";
export type * from "./full-api-schema-types.generated.js";

export const niceCxoneContactCenterProviderManifest = defineProviderPackage({
  id: "contactCenter.nice-cxone",
  name: "NICE CXone",
  packageName: "@cognidesk/integrations",
  provider: "nice-cxone",
  category: "contactCenter",
  trustLevel: "official",
  directions: ["inbound-only", "outbound-only", "bidirectional"],
  channelAudiences: ["customer-facing", "internal-support", "mixed"],
  credentialRequirements: [
    { id: "nice-cxone-api-base", label: "NICE CXone API base URL", required: true },
    { id: "nice-cxone-api-access", label: "NICE CXone API access", description: "Endpoint-specific NICE CXone API token/permissions configured by the SDK app; generated functions expose the public OpenAPI catalog, while entitlements remain tenant/configuration-specific.", required: true },
    { id: "nice-cxone-routing", label: "NICE CXone skill/queue routing configuration", required: false },
  ],
  coverage: {
    scope: "full-provider-api",
    notes: [
      "Coverage includes generated per-operation functions for every operation in NICE CXone's public OpenAPI catalog reachable from the official API documentation pages.",
      "Generated functions cover Admin, Agent, Patron, Real-Time Data, Reporting, Data Extraction, Media Playback, Digital Engagement, Business Data, WFM, Recording, Interaction Analytics, Privacy, Data Policy, Authentication, and UserHub/CXone APIs.",
      "Typed convenience helpers remain available for SDK-configured handoff and readiness paths; SDK users still own business unit routing, OAuth/token permissions, product entitlements, regional API roots, and payload policy.",
    ],
    evidence: [
      { label: "NICE CXone REST APIs", url: "https://developer.niceincontact.com/API" },
      { label: "NICE CXone Patron API", url: "https://developer.niceincontact.com/API/PatronAPI" },
      { label: "NICE CXone Agent API", url: "https://developer.niceincontact.com/API/AgentAPI" },
      { label: "NICE CXone Digital Engagement API", url: "https://developer.niceincontact.com/API/DigitalEngagementAPI" },
      { label: "NICE CXone Admin API", url: "https://developer.niceincontact.com/API/AdminAPI" },
      { label: "NICE CXone Reporting API", url: "https://developer.niceincontact.com/API/ReportingAPI" },
      { label: "NICE CXone Media Playback API", url: "https://developer.niceincontact.com/API/MediaPlaybackAPI" },
      { label: "NICE CXone Recording API", url: "https://developer.niceincontact.com/API/RecordingAPI" },
    ],
  },
  capabilities: [
    {
      capability: "handoff",
      label: "Create NICE CXone handoff",
      description: "Creates SDK-configured NICE CXone support-workflow requests; generated public OpenAPI functions are available separately for provider-native Patron, Agent, Digital Engagement, and administrative actions.",
      audiences: ["customer-facing", "internal-support", "mixed"],
      providerObjects: [{ kind: "niceCxoneConfiguredRequest", label: "NICE CXone configured request" }],
      requiresCredential: true,
      sideEffect: true,
      exposesSensitiveData: true,
      changesWorkflow: true,
    },
  ],
  privacyNotes: [
    "NICE CXone handoffs can include customer identifiers, phone numbers, skill routing, summaries, and analytics metadata.",
    "CXone credentials stay server-side and Studio receives only readiness.",
  ],
  limitations: [
    "CXone API domains, business units, skills, points of contact, WFM/QM access, and outbound eligibility are SDK-user configuration.",
    "Generated functions expose NICE CXone's public OpenAPI catalog, but API availability still depends on the SDK user's region, tenant, products, business unit, skills, security profile, scopes, and feature entitlements.",
    "Per-conversation handoff calls cannot override the configured NICE CXone path; use the generated public OpenAPI functions for consequential Patron, Agent, Digital Engagement, outbound, transfer, recording, or analytics actions.",
  ],
  metadata: {
    channelCoverage: {
      configuredHttpHandoff: "supported",
      fullPublicApiOperations: "generated-per-operation-functions",
      patronCallback: "generated-full-surface",
      patronLiveChat: "generated-full-surface",
      patronWorkItem: "generated-full-surface",
      digitalEngagement: "generated-full-surface",
      agentPhoneChatEmailSmsWorkItems: "generated-full-surface",
      agentStatus: "generated-full-surface",
      email: "generated-full-surface",
      sms: "generated-full-surface",
      outboundDialing: "generated-full-surface",
      transfer: "generated-full-surface-where-present-in-public-openapi",
      recordingMediaPlayback: "generated-full-surface",
      recordings: "generated-full-surface",
      realtimeReportingDataExtraction: "generated-full-surface",
      realtimeMetrics: "generated-full-surface",
      reporting: "generated-full-surface",
      dataExtraction: "generated-full-surface",
      adminSkillAgentObjects: "generated-full-surface",
      events: "generated-full-surface-where-present-in-public-openapi",
    },
    fullProviderApiVerification: {
      provider: "nice-cxone-public-openapi",
      apiVersion: NICE_CXONE_FULL_API_SPEC_VERSION,
      verifiedAt: "2026-06-18",
      coverageArtifact: "docs/provider-coverage/nice-cxone-full-api-2026-06-18.operations.json",
      operationCatalogArtifact: "docs/provider-coverage/nice-cxone-full-api-2026-06-18.operations.json",
      functionCatalogArtifact: "docs/provider-coverage/nice-cxone-full-api-2026-06-18.functions.json",
      documentedSpecCount: NICE_CXONE_FULL_API_SPEC_COUNT,
      documentedPathCount: NICE_CXONE_FULL_API_PATH_COUNT,
      documentedOperationCount: NICE_CXONE_FULL_API_OPERATION_COUNT,
      implementedOperationCount: NICE_CXONE_FULL_API_OPERATION_COUNT,
      unimplementedOperationCount: 0,
      generatedFunctionCount: NICE_CXONE_FULL_API_GENERATED_FUNCTION_COUNT,
    },
  },
  maintainers: [{ name: "Cognidesk", type: "official" }],
});

export type NiceCxoneJsonPrimitive = string | number | boolean | null;
export type NiceCxoneJsonValue =
  | NiceCxoneJsonPrimitive
  | NiceCxoneJsonObject
  | readonly NiceCxoneJsonValue[];
export type NiceCxoneProviderExtensionValue = NiceCxoneJsonValue | object | undefined;
export interface NiceCxoneJsonObject {
  [key: string]: NiceCxoneProviderExtensionValue;
}
export type NiceCxoneProviderPayload = NiceCxoneJsonObject | object;
export type NiceCxoneProviderQuery = Record<string, NiceCxoneProviderExtensionValue>;
export interface NiceCxoneProviderResponse extends NiceCxoneJsonObject {}
export interface NiceCxoneProviderExtensionFields extends NiceCxoneJsonObject {}

export interface NiceCxoneContactCenterClientOptions {
  apiBaseUrl: string;
  accessToken?: string;
  defaultHandoffPath?: string;
  readinessPath?: string;
  fetch?: typeof fetch;
}

export type NiceCxoneHttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export interface NiceCxoneResource {
  [key: string]: NiceCxoneProviderExtensionValue;
}

export interface NiceCxoneOperationRequestInput {
  pathParams?: Record<string, string | number | boolean | undefined> | undefined;
  query?: NiceCxoneProviderQuery | undefined;
  body?: NiceCxoneProviderPayload | undefined;
  headers?: Record<string, string> | undefined;
  idempotencyKey?: string | undefined;
}

export interface NiceCxoneCredentialStatusInput {
  apiBaseUrl?: string;
  apiAccessConfigured?: boolean;
  routingConfigured?: boolean;
}

export interface NiceCxoneHandoffInput {
  payload: NiceCxoneProviderPayload;
  idempotencyKey?: string | undefined;
}

export interface NiceCxoneContactCenterClient {
  fullApi: NiceCxoneFullApiGeneratedClient;
  requestOperation: NiceCxoneGeneratedOperationCaller;
  createHandoff(input: NiceCxoneHandoffInput): Promise<NiceCxoneProviderResponse>;
  readiness(): Promise<NiceCxoneProviderResponse>;
}

export interface NiceCxoneLiveCheckOptions extends NiceCxoneContactCenterClientOptions {
  client?: Pick<NiceCxoneContactCenterClient, "readiness">;
}

export function createNiceCxoneContactCenterClient(options: NiceCxoneContactCenterClientOptions): NiceCxoneContactCenterClient {
  const fetchImpl = options.fetch ?? fetch;
  const request = <T = NiceCxoneResource>(
    method: NiceCxoneHttpMethod,
    path: string,
    input: NiceCxoneOperationRequestInput = {},
  ) => niceCxoneRequest<T>({
    options,
    fetch: fetchImpl,
    method,
    path,
    pathParams: input.pathParams,
    query: input.query,
    body: input.body,
    headers: input.headers,
    idempotencyKey: input.idempotencyKey,
  });
  const requestOperation = async (
    operationUidOrId: NiceCxoneFullApiOperationUid | string,
    input: NiceCxoneOperationRequestInput = {},
  ) => {
    const operation = NICE_CXONE_FULL_API_OPERATION_BY_UID.get(operationUidOrId)
      ?? NICE_CXONE_FULL_API_OPERATION_BY_ID.get(operationUidOrId);
    if (!operation) throw new Error(`Unknown NICE CXone OpenAPI operation '${operationUidOrId}'.`);
    return request(operation.method, operation.path, input);
  };
  const fullApi = createNiceCxoneFullApiGeneratedClient(requestOperation as NiceCxoneGeneratedOperationCaller);

  return {
    fullApi,
    requestOperation: requestOperation as NiceCxoneGeneratedOperationCaller,
    async createHandoff(input) {
      return niceCxoneRequest({
        options,
        fetch: fetchImpl,
        method: "POST",
        path: configuredPath(options.defaultHandoffPath, "NICE CXone handoff path"),
        body: input.payload,
        idempotencyKey: input.idempotencyKey,
      });
    },
    async readiness() {
      return niceCxoneRequest({
        options,
        fetch: fetchImpl,
        method: "GET",
        path: configuredPath(options.readinessPath, "NICE CXone readiness path"),
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

export function niceCxoneContactCenterCredentialStatuses(input: NiceCxoneCredentialStatusInput): ProviderCredentialStatusInput[] {
  return [
    {
      providerPackageId: niceCxoneContactCenterProviderManifest.id,
      requirementId: "nice-cxone-api-base",
      state: input.apiBaseUrl ? "configured" : "missing",
      message: input.apiBaseUrl ? "NICE CXone API base URL is configured." : "NICE CXone API base URL is required.",
    },
    {
      providerPackageId: niceCxoneContactCenterProviderManifest.id,
      requirementId: "nice-cxone-api-access",
      state: input.apiAccessConfigured ? "configured" : "missing",
      message: input.apiAccessConfigured ? "NICE CXone API access is configured." : "NICE CXone API access is required.",
    },
    {
      providerPackageId: niceCxoneContactCenterProviderManifest.id,
      requirementId: "nice-cxone-routing",
      state: input.routingConfigured ? "configured" : "missing",
      message: input.routingConfigured ? "NICE CXone routing is configured." : "NICE CXone routing must be configured by the SDK app.",
    },
  ];
}

export function createNiceCxoneContactCenterLiveChecks(options: NiceCxoneLiveCheckOptions) {
  return [{
    id: "readiness",
    description: "NICE CXone API access can call the configured readiness endpoint.",
    requiredCredentialIds: ["nice-cxone-api-base", "nice-cxone-api-access"],
    async run(context: { signal?: AbortSignal }) {
      const client = options.client ?? createNiceCxoneContactCenterClient(options);
      const result = await client.readiness();
      if (context.signal?.aborted) throw new Error("NICE CXone readiness check aborted.");
      return { details: { ok: Boolean(result) } };
    },
  }];
}

async function niceCxoneRequest<T = NiceCxoneResource>(input: {
  options: NiceCxoneContactCenterClientOptions;
  fetch: typeof fetch;
  method: NiceCxoneHttpMethod;
  path: string;
  pathParams?: Record<string, string | number | boolean | undefined> | undefined;
  query?: NiceCxoneProviderQuery | undefined;
  body?: NiceCxoneProviderPayload | undefined;
  headers?: Record<string, string> | undefined;
  idempotencyKey?: string | undefined;
}): Promise<T> {
  const body = input.body === undefined ? undefined : JSON.stringify(input.body);
  const response = await input.fetch(providerUrl(input.options.apiBaseUrl, input.path, input.pathParams, input.query), {
    method: input.method,
    headers: {
      accept: "application/json",
      ...(body ? { "content-type": "application/json" } : {}),
      ...(input.options.accessToken ? { authorization: `Bearer ${input.options.accessToken}` } : {}),
      ...(input.idempotencyKey ? { "idempotency-key": input.idempotencyKey } : {}),
      ...(input.headers ?? {}),
    },
    ...(body ? { body } : {}),
  });
  return parseProviderResponse<T>(response, "NICE CXone");
}

function providerUrl(
  baseUrl: string,
  path: string,
  pathParams: Record<string, string | number | boolean | undefined> = {},
  query?: NiceCxoneProviderQuery,
) {
  if (!baseUrl) throw new Error("NICE CXone apiBaseUrl is required.");
  const resolvedPath = path.replace(/\{([^}]+)\}/g, (_match, key: string) => {
    const value = pathParams[key];
    if (value === undefined) throw new Error(`Missing NICE CXone path parameter '${key}'.`);
    return encodeURIComponent(String(value));
  });
  const url = new URL(resolvedPath, baseUrl.replace(/\/+$/, ""));
  appendQuery(url.searchParams, query);
  return url.toString();
}

function appendQuery(params: URLSearchParams, query?: NiceCxoneProviderQuery) {
  for (const [key, value] of Object.entries(query ?? {})) {
    if (value === undefined || value === null || value === "") continue;
    if (Array.isArray(value)) {
      for (const item of value) {
        if (item !== undefined && item !== null && item !== "") params.append(key, String(item));
      }
      continue;
    }
    params.set(key, String(value));
  }
}

async function parseProviderResponse<T = NiceCxoneResource>(response: Response, provider: string): Promise<T> {
  const text = await response.text();
  const body = text ? JSON.parse(text) as NiceCxoneJsonObject : {};
  if (!response.ok) {
    throw new Error(typeof body.message === "string" ? body.message : `${provider} API returned ${response.status}.`);
  }
  return body as T;
}
