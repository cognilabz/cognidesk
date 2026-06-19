import type { ProviderCredentialStatusInput } from "@cognidesk/core";
import { defineIntegrationProviderPackage as defineProviderPackage } from "../../provider-manifest.js";
import {
  createZoomContactCenterFullApiGeneratedClient,
  ZOOM_CONTACT_CENTER_FULL_API_GENERATED_FUNCTION_COUNT,
  type ZoomContactCenterFullApiGeneratedClient,
  type ZoomContactCenterGeneratedOperationCaller,
} from "./full-api-client.generated.js";
import {
  ZOOM_CONTACT_CENTER_FULL_API_OPERATION_BY_ID,
  ZOOM_CONTACT_CENTER_FULL_API_OPERATION_BY_UID,
  ZOOM_CONTACT_CENTER_FULL_API_OPERATION_COUNT,
  ZOOM_CONTACT_CENTER_FULL_API_PATH_COUNT,
  ZOOM_CONTACT_CENTER_FULL_API_SPEC_VERSION,
  ZOOM_CONTACT_CENTER_WEBHOOK_EVENT_BY_NAME,
  ZOOM_CONTACT_CENTER_WEBHOOK_EVENT_COUNT,
  type ZoomContactCenterFullApiOperationUid,
  type ZoomContactCenterWebhookEvent,
  type ZoomContactCenterWebhookEventName,
} from "./full-api-operations.generated.js";
export {
  createZoomContactCenterFullApiGeneratedClient,
  ZOOM_CONTACT_CENTER_FULL_API_GENERATED_FUNCTION_COUNT,
  ZOOM_CONTACT_CENTER_FULL_API_GENERATED_FUNCTION_NAMES,
  type ZoomContactCenterFullApiGeneratedClient,
  type ZoomContactCenterGeneratedOperationCaller,
} from "./full-api-client.generated.js";
export {
  ZOOM_CONTACT_CENTER_FULL_API_DOCS_SOURCE,
  ZOOM_CONTACT_CENTER_FULL_API_GENERATED_AT,
  ZOOM_CONTACT_CENTER_FULL_API_OPENAPI_VERSION,
  ZOOM_CONTACT_CENTER_FULL_API_OPERATION_BY_ID,
  ZOOM_CONTACT_CENTER_FULL_API_OPERATION_BY_UID,
  ZOOM_CONTACT_CENTER_FULL_API_OPERATION_COUNT,
  ZOOM_CONTACT_CENTER_FULL_API_OPERATIONS,
  ZOOM_CONTACT_CENTER_FULL_API_PATH_COUNT,
  ZOOM_CONTACT_CENTER_FULL_API_SPEC_SOURCE,
  ZOOM_CONTACT_CENTER_FULL_API_SPEC_VERSION,
  ZOOM_CONTACT_CENTER_WEBHOOK_DOCS_SOURCE,
  ZOOM_CONTACT_CENTER_WEBHOOK_EVENT_BY_NAME,
  ZOOM_CONTACT_CENTER_WEBHOOK_EVENT_COUNT,
  ZOOM_CONTACT_CENTER_WEBHOOK_EVENTS,
  ZOOM_CONTACT_CENTER_WEBHOOK_OPENAPI_VERSION,
  ZOOM_CONTACT_CENTER_WEBHOOK_SPEC_SOURCE,
  ZOOM_CONTACT_CENTER_WEBHOOK_SPEC_VERSION,
  type ZoomContactCenterFullApiOperation,
  type ZoomContactCenterFullApiOperationUid,
  type ZoomContactCenterWebhookEvent,
  type ZoomContactCenterWebhookEventName,
} from "./full-api-operations.generated.js";
export type * from "./full-api-schema-types.generated.js";

export const zoomContactCenterProviderManifest = defineProviderPackage({
  id: "contactCenter.zoom",
  name: "Zoom Contact Center",
  packageName: "@cognidesk/integrations",
  provider: "zoom",
  category: "contactCenter",
  trustLevel: "official",
  directions: ["inbound-only"],
  channelAudiences: ["customer-facing", "internal-support", "mixed"],
  credentialRequirements: [
    { id: "zoom-contact-center-account", label: "Zoom Contact Center account/API base", required: true },
    {
      id: "zoom-contact-center-api-access",
      label: "Zoom OAuth access",
      description: "OAuth access for the configured Zoom Contact Center endpoints; default readiness uses the queue-read scope.",
      scopes: ["contact_center_queue:read:admin"],
      required: true,
      metadata: { scopeKind: "provider-oauth-scopes" },
    },
    { id: "zoom-contact-center-routing", label: "Zoom queue/channel routing configuration", required: false },
  ],
  coverage: {
    scope: "full-provider-api",
    notes: [
      "Coverage includes generated per-operation functions for every operation in Zoom's official Contact Center REST OpenAPI spec: all 312 operations across 176 paths.",
      "Coverage also includes a generated catalog for all 124 Zoom Contact Center webhook event entries in the official Contact Center webhook OpenAPI spec.",
      "Typed configured-handoff and readiness helpers remain available, but native Zoom scheduled callback, engagement transfer, campaigns, messaging/SMS, queues, users, recordings, reports, settings, and other Contact Center families are now callable through generated fullApi functions.",
      "Zoom Contact Center documents granular OAuth scopes per endpoint; SDK users still own app scope selection, tenant entitlement, routing policy, outbound policy, event subscription setup, and webhook verification/ingestion infrastructure.",
    ],
    evidence: [
      { label: "Zoom Contact Center APIs", url: "https://developers.zoom.us/docs/api/contact-center/" },
      { label: "Zoom Contact Center REST OpenAPI", url: "https://developers.zoom.us/api-hub/contact-center/methods/endpoints.json" },
      { label: "Zoom Contact Center Webhooks", url: "https://developers.zoom.us/docs/api/contact-center/events/" },
      { label: "Zoom Contact Center Webhooks OpenAPI", url: "https://developers.zoom.us/api-hub/contact-center/events/webhooks.json" },
      { label: "Zoom API Reference", url: "https://developers.zoom.us/docs/api/" },
    ],
  },
  capabilities: [
    {
      capability: "handoff",
      label: "Create Zoom Contact Center handoff",
      description: "Creates SDK-configured Zoom Contact Center support-workflow requests without implying typed engagement transfer, scheduled callback, or outbound campaign support.",
      audiences: ["customer-facing", "internal-support", "mixed"],
      providerObjects: [{ kind: "zoomContactCenterHandoff", label: "Zoom Contact Center Handoff" }],
      requiresCredential: true,
      sideEffect: true,
      exposesSensitiveData: true,
      changesWorkflow: true,
    },
  ],
  privacyNotes: [
    "Zoom Contact Center handoffs can include customer identity, phone/email/message metadata, summaries, and queue routing context.",
    "Zoom OAuth credentials stay server-side and Studio only receives readiness.",
  ],
  limitations: [
    "Zoom queues, channels, campaign setup, contact eligibility, and outbound policy are SDK-user configuration.",
    "Generated functions expose the documented REST endpoints but do not decide which mutating operations are safe for a given tenant, channel, queue, or operator role.",
    "The generated webhook catalog names documented event entries; event subscription lifecycle, endpoint verification, replay handling, and signature policy remain SDK-user infrastructure.",
  ],
  metadata: {
    channelCoverage: {
      fullRestApiOperations: "generated-per-operation-functions",
      webhookEventCatalog: "generated-per-operation-functions",
      configuredHttpHandoff: "supported",
      scheduledCallback: "generated-per-operation-functions",
      engagementTransfer: "generated-per-operation-functions",
      outboundCampaigns: "generated-per-operation-functions",
      taskCoverage: "generated-per-operation-functions",
      nativeVoice: "generated-per-operation-functions",
      nativeVideo: "generated-per-operation-functions",
      nativeMessaging: "generated-per-operation-functions",
      nativeChat: "generated-per-operation-functions",
      nativeSms: "generated-per-operation-functions",
      nativeInAppChat: "generated-per-operation-functions",
      nativeEmail: "generated-per-operation-functions",
      nativeWorkItem: "generated-per-operation-functions",
      webhooksEvents: "generated-per-operation-functions",
    },
    fullProviderApiVerification: {
      provider: "zoom-contact-center-rest",
      apiVersion: ZOOM_CONTACT_CENTER_FULL_API_SPEC_VERSION,
      verifiedAt: "2026-06-18",
      coverageArtifact: "docs/provider-coverage/zoom-contact-center-full-api-2026-06-18.operations.json",
      operationCatalogArtifact: "docs/provider-coverage/zoom-contact-center-full-api-2026-06-18.operations.json",
      functionCatalogArtifact: "docs/provider-coverage/zoom-contact-center-full-api-2026-06-18.functions.json",
      documentedPathCount: ZOOM_CONTACT_CENTER_FULL_API_PATH_COUNT,
      documentedOperationCount: ZOOM_CONTACT_CENTER_FULL_API_OPERATION_COUNT,
      implementedOperationCount: ZOOM_CONTACT_CENTER_FULL_API_OPERATION_COUNT,
      unimplementedOperationCount: 0,
      generatedFunctionCount: ZOOM_CONTACT_CENTER_FULL_API_GENERATED_FUNCTION_COUNT,
      webhookEventCount: ZOOM_CONTACT_CENTER_WEBHOOK_EVENT_COUNT,
    },
  },
  maintainers: [{ name: "Cognidesk", type: "official" }],
});

export type ZoomJsonPrimitive = string | number | boolean | null;
export type ZoomJsonValue =
  | ZoomJsonPrimitive
  | ZoomJsonObject
  | readonly ZoomJsonValue[];
export type ZoomProviderExtensionValue = ZoomJsonValue | object | undefined;
export interface ZoomJsonObject {
  [key: string]: ZoomProviderExtensionValue;
}
export type ZoomProviderPayload = ZoomJsonObject | object;
export type ZoomProviderQuery = Record<string, ZoomProviderExtensionValue>;
export interface ZoomProviderResponse extends ZoomJsonObject {}
export interface ZoomProviderExtensionFields extends ZoomJsonObject {}

export interface ZoomContactCenterClientOptions {
  apiBaseUrl?: string;
  accessToken?: string;
  defaultHandoffPath?: string;
  readinessPath?: string;
  fetch?: typeof fetch;
}

export interface ZoomContactCenterCredentialStatusInput {
  apiBaseUrl?: string;
  apiAccessConfigured?: boolean;
  routingConfigured?: boolean;
}

export interface ZoomContactCenterHandoffInput {
  payload: ZoomProviderPayload;
  path?: string;
  idempotencyKey?: string | undefined;
}

export type ZoomContactCenterHttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export interface ZoomContactCenterResource {
  [key: string]: ZoomProviderExtensionValue;
}

export interface ZoomContactCenterOperationRequestInput {
  pathParams?: Record<string, string | number | boolean | undefined> | undefined;
  query?: URLSearchParams | Record<string, string | number | boolean | null | undefined | Array<string | number | boolean>>;
  headers?: Record<string, string> | undefined;
  json?: ZoomJsonObject | readonly ZoomJsonValue[] | undefined;
  form?: URLSearchParams | FormData | undefined;
  body?: BodyInit | undefined;
  signal?: AbortSignal | undefined;
}

export interface ZoomContactCenterClient {
  fullApi: ZoomContactCenterFullApiGeneratedClient;
  requestOperation: ZoomContactCenterGeneratedOperationCaller;
  getWebhookEvent(eventName: ZoomContactCenterWebhookEventName | string): ZoomContactCenterWebhookEvent | undefined;
  createHandoff(input: ZoomContactCenterHandoffInput): Promise<ZoomProviderResponse>;
  readiness(): Promise<ZoomProviderResponse>;
}

export interface ZoomContactCenterLiveCheckOptions extends ZoomContactCenterClientOptions {
  client?: Pick<ZoomContactCenterClient, "readiness">;
}

export function createZoomContactCenterClient(options: ZoomContactCenterClientOptions = {}): ZoomContactCenterClient {
  const fetchImpl = options.fetch ?? fetch;
  const requestOperation = (
    operationUidOrId: ZoomContactCenterFullApiOperationUid | string,
    input: ZoomContactCenterOperationRequestInput = {},
  ) => {
    const operation = ZOOM_CONTACT_CENTER_FULL_API_OPERATION_BY_UID.get(operationUidOrId)
      ?? ZOOM_CONTACT_CENTER_FULL_API_OPERATION_BY_ID.get(operationUidOrId);
    if (!operation) throw new Error(`Unknown Zoom Contact Center REST operation '${operationUidOrId}'.`);
    return zoomContactCenterOperationRequest({
      options,
      fetch: fetchImpl,
      operation,
      input,
    });
  };
  const fullApi = createZoomContactCenterFullApiGeneratedClient(requestOperation as ZoomContactCenterGeneratedOperationCaller);

  return {
    fullApi,
    requestOperation: requestOperation as ZoomContactCenterGeneratedOperationCaller,
    getWebhookEvent(eventName) {
      return ZOOM_CONTACT_CENTER_WEBHOOK_EVENT_BY_NAME.get(eventName);
    },
    async createHandoff(input) {
      const path = input.path ?? options.defaultHandoffPath;
      if (!path) throw new Error("Zoom Contact Center handoff path must be configured by the SDK app.");
      return zoomContactCenterRequest({
        options,
        fetch: fetchImpl,
        method: "POST",
        path,
        body: input.payload,
        idempotencyKey: input.idempotencyKey,
      });
    },
    async readiness() {
      return zoomContactCenterRequest({
        options,
        fetch: fetchImpl,
        method: "GET",
        path: options.readinessPath ?? "/v2/contact_center/queues",
      });
    },
  };
}

export function zoomContactCenterCredentialStatuses(input: ZoomContactCenterCredentialStatusInput): ProviderCredentialStatusInput[] {
  return [
    {
      providerPackageId: zoomContactCenterProviderManifest.id,
      requirementId: "zoom-contact-center-account",
      state: input.apiBaseUrl ? "configured" : "missing",
      message: input.apiBaseUrl ? "Zoom Contact Center API base URL is configured." : "Zoom Contact Center API base URL is required.",
    },
    {
      providerPackageId: zoomContactCenterProviderManifest.id,
      requirementId: "zoom-contact-center-api-access",
      state: input.apiAccessConfigured ? "configured" : "missing",
      scopes: ["contact_center_queue:read:admin"],
      message: input.apiAccessConfigured ? "Zoom Contact Center OAuth access is configured." : "Zoom Contact Center OAuth access is required.",
    },
    {
      providerPackageId: zoomContactCenterProviderManifest.id,
      requirementId: "zoom-contact-center-routing",
      state: input.routingConfigured ? "configured" : "missing",
      message: input.routingConfigured ? "Zoom Contact Center routing is configured." : "Zoom Contact Center routing must be configured by the SDK app.",
    },
  ];
}

export function createZoomContactCenterLiveChecks(options: ZoomContactCenterLiveCheckOptions) {
  return [{
    id: "readiness",
    description: "Zoom Contact Center API access can call the configured readiness endpoint.",
    requiredCredentialIds: ["zoom-contact-center-account", "zoom-contact-center-api-access"],
    async run(context: { signal?: AbortSignal }) {
      const client = options.client ?? createZoomContactCenterClient(options);
      const result = await client.readiness();
      if (context.signal?.aborted) throw new Error("Zoom Contact Center readiness check aborted.");
      return { details: { ok: Boolean(result) } };
    },
  }];
}

async function zoomContactCenterRequest(input: {
  options: ZoomContactCenterClientOptions;
  fetch: typeof fetch;
  method: "GET" | "POST";
  path: string;
  body?: ZoomProviderPayload;
  idempotencyKey?: string | undefined;
}) {
  const response = await input.fetch(providerUrl(input.options.apiBaseUrl ?? "https://api.zoom.us", input.path), {
    method: input.method,
    headers: {
      accept: "application/json",
      ...(input.body ? { "content-type": "application/json" } : {}),
      ...(input.options.accessToken ? { authorization: `Bearer ${input.options.accessToken}` } : {}),
      ...(input.idempotencyKey ? { "idempotency-key": input.idempotencyKey } : {}),
    },
    ...(input.body ? { body: JSON.stringify(input.body) } : {}),
  });
  return parseProviderResponse(response, "Zoom Contact Center");
}

async function zoomContactCenterOperationRequest<T>(input: {
  options: ZoomContactCenterClientOptions;
  fetch: typeof fetch;
  operation: {
    method: ZoomContactCenterHttpMethod;
    path: string;
  };
  input: ZoomContactCenterOperationRequestInput;
}) {
  const bodyParts = [input.input.json, input.input.form, input.input.body].filter((value) => value !== undefined);
  if (bodyParts.length > 1) {
    throw new Error("Only one of json, form, or body can be supplied for a Zoom Contact Center operation request.");
  }
  const url = zoomContactCenterOperationUrl(input.options.apiBaseUrl ?? "https://api.zoom.us", input.operation.path, {
    pathParams: input.input.pathParams,
    query: input.input.query,
  });
  const encodedBody = encodeZoomContactCenterBody(input.input);
  const response = await input.fetch(url.toString(), {
    method: input.operation.method,
    headers: {
      accept: "application/json",
      ...(input.options.accessToken ? { authorization: `Bearer ${input.options.accessToken}` } : {}),
      ...encodedBody.headers,
      ...input.input.headers,
    },
    ...(encodedBody.body !== undefined ? { body: encodedBody.body } : {}),
    ...(input.input.signal ? { signal: input.input.signal } : {}),
  });
  return parseProviderResponse(response, "Zoom Contact Center") as Promise<T>;
}

function zoomContactCenterOperationUrl(
  apiBaseUrl: string,
  pathTemplate: string,
  input: {
    pathParams?: ZoomContactCenterOperationRequestInput["pathParams"];
    query?: ZoomContactCenterOperationRequestInput["query"];
  },
) {
  const expandedPath = pathTemplate.replace(/\{([^}]+)\}/g, (_match, rawName: string) => {
    const value = input.pathParams?.[rawName];
    if (value === undefined) throw new Error(`Missing Zoom Contact Center path parameter '${rawName}'.`);
    return encodeURIComponent(String(value));
  });
  const base = zoomContactCenterV2Base(apiBaseUrl);
  const url = new URL(`${base}${expandedPath.startsWith("/") ? expandedPath : `/${expandedPath}`}`);
  const query = zoomQueryParams(input.query);
  for (const [key, value] of query) url.searchParams.append(key, value);
  return url;
}

function zoomContactCenterV2Base(apiBaseUrl: string) {
  const base = apiBaseUrl.replace(/\/+$/, "");
  return base.endsWith("/v2") ? base : `${base}/v2`;
}

function encodeZoomContactCenterBody(input: ZoomContactCenterOperationRequestInput): { body?: BodyInit; headers: Record<string, string> } {
  if (input.json !== undefined) {
    return { body: JSON.stringify(input.json), headers: { "content-type": "application/json" } };
  }
  if (input.form !== undefined) return { body: input.form, headers: {} };
  if (input.body !== undefined) return { body: input.body, headers: {} };
  return { headers: {} };
}

function zoomQueryParams(values?: ZoomContactCenterOperationRequestInput["query"]) {
  if (!values) return new URLSearchParams();
  if (values instanceof URLSearchParams) return values;
  const params = new URLSearchParams();
  for (const [key, value] of Object.entries(values)) {
    if (value === undefined || value === null) continue;
    if (Array.isArray(value)) {
      for (const item of value) params.append(key, String(item));
    } else {
      params.append(key, String(value));
    }
  }
  return params;
}

function providerUrl(baseUrl: string, path: string) {
  return new URL(path, baseUrl.replace(/\/+$/, "")).toString();
}

async function parseProviderResponse(response: Response, provider: string) {
  const text = await response.text();
  const body = text ? JSON.parse(text) as ZoomJsonObject : {};
  if (!response.ok) {
    throw new Error(typeof body.message === "string" ? body.message : `${provider} API returned ${response.status}.`);
  }
  return body;
}
