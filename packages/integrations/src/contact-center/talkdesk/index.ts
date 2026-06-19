import type { ProviderCredentialStatusInput } from "@cognidesk/core";
import { defineIntegrationProviderPackage as defineProviderPackage } from "../../provider-manifest.js";
import {
  createTalkdeskFullApiGeneratedClient,
  TALKDESK_FULL_API_GENERATED_FUNCTION_COUNT,
  type TalkdeskFullApiGeneratedClient,
  type TalkdeskGeneratedOperationCaller,
} from "./full-api-client.generated.js";
import {
  TALKDESK_FULL_API_OPERATION_BY_ID,
  TALKDESK_FULL_API_OPERATION_COUNT,
  TALKDESK_FULL_API_PATH_COUNT,
  TALKDESK_FULL_API_SPEC_VERSION,
  type TalkdeskFullApiOperationId,
} from "./full-api-operations.generated.js";
export {
  createTalkdeskFullApiGeneratedClient,
  TALKDESK_FULL_API_GENERATED_FUNCTION_COUNT,
  TALKDESK_FULL_API_GENERATED_FUNCTION_NAMES,
  type TalkdeskFullApiGeneratedClient,
  type TalkdeskGeneratedOperationCaller,
} from "./full-api-client.generated.js";
export {
  TALKDESK_FULL_API_GENERATED_AT,
  TALKDESK_FULL_API_OPENAPI_VERSION,
  TALKDESK_FULL_API_OPERATION_BY_ID,
  TALKDESK_FULL_API_OPERATION_COUNT,
  TALKDESK_FULL_API_OPERATIONS,
  TALKDESK_FULL_API_PATH_COUNT,
  TALKDESK_FULL_API_SPEC_SOURCE,
  TALKDESK_FULL_API_SPEC_VERSION,
  type TalkdeskFullApiOperation,
  type TalkdeskFullApiOperationId,
} from "./full-api-operations.generated.js";
export type * from "./full-api-schema-types.generated.js";

export const talkdeskContactCenterProviderManifest = defineProviderPackage({
  id: "contactCenter.talkdesk",
  name: "Talkdesk",
  packageName: "@cognidesk/integrations",
  provider: "talkdesk",
  category: "contactCenter",
  trustLevel: "official",
  directions: ["inbound-only", "outbound-only", "bidirectional"],
  channelAudiences: ["customer-facing", "internal-support", "mixed"],
  credentialRequirements: [
    { id: "talkdesk-api-root", label: "Talkdesk localized API root", required: true },
    {
      id: "talkdesk-api-access",
      label: "Talkdesk OAuth access",
      scopes: ["callback:write", "cases-public:write"],
      required: true,
      metadata: { scopeKind: "provider-oauth-scopes" },
    },
    { id: "talkdesk-routing", label: "Talkdesk callback/case routing configuration", required: false },
  ],
  coverage: {
    scope: "full-provider-api",
    notes: [
      "Coverage includes generated per-operation functions for every operation in Talkdesk's official public OpenAPI bundle.",
      "Typed convenience helpers remain available for the documented Talkdesk direct callback endpoint, a case creation request helper with caller-supplied payload, SDK-configured handoff/readiness paths, and OAuth bearer authentication.",
      "Generated functions cover Talkdesk's broader APIs for Digital Connect conversations/messages, users, contacts, calls, recordings, reports, attributes, campaigns, queues, flows, record lists, prompts, WFM, advanced dialer objects, and FSI surfaces; SDK users still own OAuth scopes, regional API roots, feature entitlements, and payload policy.",
    ],
    evidence: [
      { label: "Talkdesk public OpenAPI bundle", url: "https://api-docs.talkdeskapp.com/public-api" },
      { label: "Talkdesk API Endpoints", url: "https://docs.talkdesk.com/reference/api-reference" },
      { label: "Talkdesk Contact Center API Overview", url: "https://docs.talkdesk.com/docs/contact-center-overview" },
      { label: "Talkdesk Callback API", url: "https://docs.talkdesk.com/docs/callback-api" },
      { label: "Talkdesk New Direct Callback", url: "https://docs.talkdesk.com/reference/callscallback" },
      { label: "Talkdesk Create a New Case", url: "https://docs.talkdesk.com/reference/create-a-new-case" },
      { label: "Talkdesk Digital Connect API", url: "https://docs.talkdesk.com/docs/digital-connect-api" },
    ],
  },
  capabilities: [
    {
      capability: "handoff",
      label: "Create Talkdesk handoff",
      description: "Creates SDK-configured Talkdesk support-workflow requests, typed direct-callback requests, or caller-supplied case creation requests without implying Digital Connect conversation or transfer support.",
      audiences: ["customer-facing", "internal-support", "mixed"],
      providerObjects: [{ kind: "talkdeskHandoff", label: "Talkdesk Handoff" }],
      requiresCredential: true,
      sideEffect: true,
      exposesSensitiveData: true,
      changesWorkflow: true,
    },
    {
      capability: "send",
      label: "Request outbound callback",
      description: "Creates documented Talkdesk direct callback requests only when the configured Talkdesk account and SDK policy allow it.",
      audiences: ["customer-facing"],
      providerObjects: [{ kind: "talkdeskCallback", label: "Talkdesk Callback" }],
      requiresCredential: true,
      sideEffect: true,
      exposesSensitiveData: true,
    },
    {
      capability: "create-provider-object",
      label: "Create Talkdesk cases",
      description: "Creates Talkdesk Case API cases through the documented `/cm/core/va/cases` endpoint with SDK-user-supplied payloads.",
      audiences: ["customer-facing", "internal-support", "mixed"],
      providerObjects: [{ kind: "talkdeskCase", label: "Talkdesk Case" }],
      requiresCredential: true,
      sideEffect: true,
      exposesSensitiveData: true,
      changesWorkflow: true,
    },
  ],
  privacyNotes: [
    "Talkdesk handoffs can include caller identity, phone numbers, notes, cases, and queue assignment metadata.",
    "Talkdesk OAuth credentials stay server-side and Studio receives readiness only.",
  ],
  limitations: [
    "Talkdesk API access, scopes, localized API root, callback availability, and destination mapping are SDK-user configuration.",
    "The package accepts SDK-supplied paths so customers can target the Talkdesk API surface enabled for their account.",
    "Generated functions expose Talkdesk Digital Connect, Contacts, FSI, and transfer operations where present in the public OpenAPI bundle; SDK users still own scopes, entitlement, and payload policy.",
    "Typed convenience helpers are intentionally limited to direct callback, case creation, configured handoff, and readiness.",
  ],
  metadata: {
    channelCoverage: {
      configuredHttpHandoff: "supported",
      directCallback: "typed-create",
      caseCreation: "typed-helper",
      fullPublicApiOperations: "generated-per-operation-functions",
      digitalConnectConversations: "generated-full-surface",
      digitalConnectMessages: "generated-full-surface",
      transfer: "generated-full-surface-where-present-in-public-openapi",
      smsSocialDigital: "generated-full-surface-where-present-in-public-openapi",
    },
    fullProviderApiVerification: {
      provider: "talkdesk",
      apiVersion: TALKDESK_FULL_API_SPEC_VERSION,
      verifiedAt: "2026-06-17",
      coverageArtifact: "docs/provider-coverage/talkdesk-full-api-2026-06-17.operations.json",
      operationCatalogArtifact: "docs/provider-coverage/talkdesk-full-api-2026-06-17.operations.json",
      functionCatalogArtifact: "docs/provider-coverage/talkdesk-full-api-2026-06-17.functions.json",
      documentedPathCount: TALKDESK_FULL_API_PATH_COUNT,
      documentedOperationCount: TALKDESK_FULL_API_OPERATION_COUNT,
      implementedOperationCount: TALKDESK_FULL_API_OPERATION_COUNT,
      unimplementedOperationCount: 0,
      generatedFunctionCount: TALKDESK_FULL_API_GENERATED_FUNCTION_COUNT,
    },
  },
  maintainers: [{ name: "Cognidesk", type: "official" }],
});

export type TalkdeskJsonPrimitive = string | number | boolean | null;
export type TalkdeskJsonValue =
  | TalkdeskJsonPrimitive
  | TalkdeskJsonObject
  | readonly TalkdeskJsonValue[];
export type TalkdeskProviderExtensionValue = TalkdeskJsonValue | object | undefined;
export interface TalkdeskJsonObject {
  [key: string]: TalkdeskProviderExtensionValue;
}
export type TalkdeskProviderPayload = TalkdeskJsonObject | object;
export type TalkdeskProviderQuery = Record<string, TalkdeskProviderExtensionValue>;
export interface TalkdeskProviderResponse extends TalkdeskJsonObject {}
export interface TalkdeskProviderExtensionFields extends TalkdeskJsonObject {}

export interface TalkdeskContactCenterClientOptions {
  apiBaseUrl: string;
  accessToken?: string;
  defaultHandoffPath?: string;
  readinessPath?: string;
  fetch?: typeof fetch;
}

export interface TalkdeskCredentialStatusInput {
  apiBaseUrl?: string;
  apiAccessConfigured?: boolean;
  routingConfigured?: boolean;
}

export interface TalkdeskHandoffInput {
  payload: TalkdeskProviderPayload;
  path?: string;
  idempotencyKey?: string | undefined;
}

export type TalkdeskDirectCallbackInput = TalkdeskProviderPayload & {
  talkdesk_phone_number: string;
  contact_phone_number: string;
};

export type TalkdeskHttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE" | "OPTIONS";

export interface TalkdeskResource {
  [key: string]: TalkdeskProviderExtensionValue;
}

export interface TalkdeskOperationRequestInput {
  pathParams?: Record<string, string | number | boolean | undefined> | undefined;
  query?: TalkdeskProviderQuery | undefined;
  body?: TalkdeskProviderPayload | undefined;
  headers?: Record<string, string> | undefined;
  idempotencyKey?: string | undefined;
}

export interface TalkdeskContactCenterClient {
  fullApi: TalkdeskFullApiGeneratedClient;
  requestOperation: TalkdeskGeneratedOperationCaller;
  createHandoff(input: TalkdeskHandoffInput): Promise<TalkdeskProviderResponse>;
  createDirectCallback(payload: TalkdeskDirectCallbackInput): Promise<TalkdeskProviderResponse>;
  createCase(payload: TalkdeskProviderPayload): Promise<TalkdeskProviderResponse>;
  readiness(): Promise<TalkdeskProviderResponse>;
}

export interface TalkdeskLiveCheckOptions extends TalkdeskContactCenterClientOptions {
  client?: Pick<TalkdeskContactCenterClient, "readiness">;
}

export function createTalkdeskContactCenterClient(options: TalkdeskContactCenterClientOptions): TalkdeskContactCenterClient {
  const fetchImpl = options.fetch ?? fetch;
  const request = <T = TalkdeskResource>(
    method: TalkdeskHttpMethod,
    path: string,
    input: TalkdeskOperationRequestInput = {},
  ) => talkdeskRequest<T>({
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
    operationId: TalkdeskFullApiOperationId | string,
    input: TalkdeskOperationRequestInput = {},
  ) => {
    const operation = TALKDESK_FULL_API_OPERATION_BY_ID.get(operationId);
    if (!operation) throw new Error(`Unknown Talkdesk OpenAPI operation '${operationId}'.`);
    return request(operation.method, operation.path, input);
  };
  const fullApi = createTalkdeskFullApiGeneratedClient(requestOperation as TalkdeskGeneratedOperationCaller);

  return {
    fullApi,
    requestOperation: requestOperation as TalkdeskGeneratedOperationCaller,
    async createHandoff(input) {
      const path = input.path ?? options.defaultHandoffPath;
      if (!path) throw new Error("Talkdesk handoff path must be configured by the SDK app.");
      return talkdeskRequest({
        options,
        fetch: fetchImpl,
        method: "POST",
        path,
        body: input.payload,
        idempotencyKey: input.idempotencyKey,
      });
    },
    async createDirectCallback(payload) {
      if (!payload.talkdesk_phone_number || !payload.contact_phone_number) {
        throw new Error("Talkdesk direct callback requires documented talkdesk_phone_number and contact_phone_number fields.");
      }
      return talkdeskRequest({
        options,
        fetch: fetchImpl,
        method: "POST",
        path: "/calls/callback",
        body: payload,
      });
    },
    async createCase(payload) {
      return talkdeskRequest({
        options,
        fetch: fetchImpl,
        method: "POST",
        path: "/cm/core/va/cases",
        body: payload,
      });
    },
    async readiness() {
      if (!options.readinessPath) {
        throw new Error("Talkdesk readiness path must be configured by the SDK app; no official default path is assumed.");
      }
      return talkdeskRequest({
        options,
        fetch: fetchImpl,
        method: "GET",
        path: options.readinessPath,
      });
    },
  };
}

export function talkdeskContactCenterCredentialStatuses(input: TalkdeskCredentialStatusInput): ProviderCredentialStatusInput[] {
  return [
    {
      providerPackageId: talkdeskContactCenterProviderManifest.id,
      requirementId: "talkdesk-api-root",
      state: input.apiBaseUrl ? "configured" : "missing",
      message: input.apiBaseUrl ? "Talkdesk API root is configured." : "Talkdesk localized API root is required.",
    },
    {
      providerPackageId: talkdeskContactCenterProviderManifest.id,
      requirementId: "talkdesk-api-access",
      state: input.apiAccessConfigured ? "configured" : "missing",
      scopes: ["callback:write", "cases-public:write"],
      message: input.apiAccessConfigured ? "Talkdesk OAuth access is configured." : "Talkdesk OAuth access is required.",
    },
    {
      providerPackageId: talkdeskContactCenterProviderManifest.id,
      requirementId: "talkdesk-routing",
      state: input.routingConfigured ? "configured" : "missing",
      message: input.routingConfigured
        ? "Talkdesk routing is configured by the SDK app."
        : "Talkdesk callback/case routing must be provided before handoff is enabled.",
    },
  ];
}

export function createTalkdeskContactCenterLiveChecks(options: TalkdeskLiveCheckOptions) {
  return [{
    id: "readiness",
    description: "Talkdesk API access can call the configured readiness endpoint.",
    requiredCredentialIds: ["talkdesk-api-root", "talkdesk-api-access"],
    async run(context: { signal?: AbortSignal }) {
      const client = options.client ?? createTalkdeskContactCenterClient(options);
      const result = await client.readiness();
      if (context.signal?.aborted) throw new Error("Talkdesk readiness check aborted.");
      return { details: { ok: Boolean(result) } };
    },
  }];
}

async function talkdeskRequest<T = TalkdeskResource>(input: {
  options: TalkdeskContactCenterClientOptions;
  fetch: typeof fetch;
  method: TalkdeskHttpMethod;
  path: string;
  pathParams?: Record<string, string | number | boolean | undefined> | undefined;
  query?: TalkdeskProviderQuery | undefined;
  body?: TalkdeskProviderPayload | undefined;
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
      ...input.headers,
    },
    ...(body ? { body } : {}),
  });
  return parseProviderResponse<T>(response, "Talkdesk");
}

function providerUrl(
  baseUrl: string,
  path: string,
  pathParams: Record<string, string | number | boolean | undefined> = {},
  query?: TalkdeskProviderQuery,
) {
  if (!baseUrl) throw new Error("Talkdesk apiBaseUrl is required.");
  const resolvedPath = path.replace(/\{([^}]+)\}/g, (_match, key: string) => {
    const value = pathParams[key];
    if (value === undefined) throw new Error(`Missing Talkdesk path parameter '${key}'.`);
    return encodeURIComponent(String(value));
  });
  const url = new URL(resolvedPath, baseUrl.replace(/\/+$/, ""));
  appendQuery(url.searchParams, query);
  return url.toString();
}

function appendQuery(params: URLSearchParams, query?: TalkdeskProviderQuery) {
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

async function parseProviderResponse<T = TalkdeskResource>(response: Response, provider: string): Promise<T> {
  const text = await response.text();
  const body = text ? JSON.parse(text) as TalkdeskJsonObject : {};
  if (!response.ok) {
    throw new Error(typeof body.message === "string" ? body.message : `${provider} API returned ${response.status}.`);
  }
  return body as T;
}
