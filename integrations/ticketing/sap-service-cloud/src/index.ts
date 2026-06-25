import type { ProviderCredentialStatusInput } from "@cognidesk/core";
import {
  executeHttpRequest,
  type HttpRequestConfig,
  type HttpResponse,
  type Method,
} from "@sap-cloud-sdk/http-client";
import {
  defineIntegration,
  providerRequestUrl,
  type ProviderHttpMethod,
  type ProviderQueryValue,
} from "@cognidesk/integration-kit";
import { sapServiceCloudTicketingProviderManifest } from "./manifest.js";

export { sapServiceCloudTicketingProviderManifest } from "./manifest.js";

export type SapServiceCloudJsonPrimitive = string | number | boolean | null;
export type SapServiceCloudJsonValue =
  | SapServiceCloudJsonPrimitive
  | SapServiceCloudJsonObject
  | readonly SapServiceCloudJsonValue[];
export type SapServiceCloudProviderExtensionValue = SapServiceCloudJsonValue | object | undefined;
export interface SapServiceCloudJsonObject {
  [key: string]: SapServiceCloudProviderExtensionValue;
}
export type SapServiceCloudProviderPayload = SapServiceCloudJsonObject | object;
export type SapServiceCloudProviderQuery = Record<string, SapServiceCloudProviderExtensionValue>;
export interface SapServiceCloudProviderResponse extends SapServiceCloudJsonObject {}
export interface SapServiceCloudProviderExtensionFields extends SapServiceCloudJsonObject {}

export interface SapServiceCloudTicketingClientOptions {
  providerClient?: SapServiceCloudTicketingProviderClient;
  baseUrl?: string;
  accessToken?: string;
  username?: string;
  password?: string;
  auth?: SapServiceCloudAuthOptions;
  odataBasePath?: string;
  csrfToken?: string;
  headers?: Record<string, string>;
  signal?: AbortSignal;
  timeoutMs?: number;
}

export type SapServiceCloudAuthOptions =
  | { type: "bearer"; accessToken: string }
  | { type: "basic"; username: string; password: string }
  | { type: "headers"; headers: Record<string, string> };

export interface SapServiceCloudProviderApiErrorResponseMetadata {
  statusText: string;
  headers: Record<string, string>;
  url: string;
  requestId?: string;
}

export interface SapServiceCloudProviderApiErrorInput {
  status: number;
  message: string;
  body: unknown;
  response: SapServiceCloudProviderApiErrorResponseMetadata;
}

export class SapServiceCloudProviderApiError extends Error {
  readonly provider = "sap-service-cloud";
  readonly status: number;
  readonly body: unknown;
  readonly response: SapServiceCloudProviderApiErrorResponseMetadata;

  constructor(input: SapServiceCloudProviderApiErrorInput) {
    super(input.message);
    this.name = "SapServiceCloudProviderApiError";
    this.status = input.status;
    this.body = input.body;
    this.response = input.response;
  }
}

export interface SapServiceCloudCredentialStatusInput {
  providerClient?: SapServiceCloudTicketingProviderClient;
  providerClientConfigured?: boolean;
  baseUrl?: string;
  accessToken?: string;
  username?: string;
  password?: string;
  authConfigured?: boolean;
  apiAccessConfigured?: boolean;
  scopes?: string[];
}

export type SapServiceRequestResource = SapServiceCloudProviderPayload & {
  ObjectID?: string;
  ID?: string;
  Name?: string;
  BuyerPartyName?: string;
  ProcessingTypeCode?: string;
  ServicePriorityCode?: string;
  StatusCode?: string;
};

export interface SapServiceCreateRequestInput {
  name: string;
  processingTypeCode?: string;
  servicePriorityCode?: string;
  objectServiceIssueCategoryId?: string;
  buyerPartyId?: string;
  buyerPartyName?: string;
  fields?: SapServiceCloudJsonObject;
}

export interface SapServiceUpdateRequestInput {
  name?: string;
  servicePriorityCode?: string;
  objectServiceIssueCategoryId?: string;
  statusCode?: string;
  fields?: SapServiceCloudJsonObject;
}

export interface SapServiceSearchInput {
  filter?: string;
  select?: string[];
  expand?: string[];
  orderBy?: string;
  top?: number;
  skip?: number;
  inlineCount?: "allpages" | "none";
}

export interface SapServiceSearchResult<T = SapServiceRequestResource> {
  results: T[];
  count?: string;
}

export interface SapServiceCloudTicketingProviderClient {
  createServiceRequest(input: SapServiceCreateRequestInput): Promise<SapServiceRequestResource>;
  getServiceRequest(objectId: string): Promise<SapServiceRequestResource>;
  updateServiceRequest(objectId: string, input: SapServiceUpdateRequestInput, etag?: string): Promise<SapServiceRequestResource>;
  searchServiceRequests(input?: SapServiceSearchInput): Promise<SapServiceSearchResult>;
  readiness(): Promise<SapServiceSearchResult>;
}

export type SapServiceCloudTicketingClient = SapServiceCloudTicketingProviderClient;
export type SapServiceCloudSdkHttpDestination = Parameters<typeof executeHttpRequest>[0];

export interface SapServiceCloudLiveCheckOptions extends SapServiceCloudTicketingClientOptions {
  client?: Pick<SapServiceCloudTicketingClient, "readiness">;
}

export interface SapReadServiceRequestOperationInput {
  objectId: string;
}

export interface SapUpdateServiceRequestOperationInput extends SapServiceUpdateRequestInput {
  objectId: string;
  etag?: string;
}

export interface SapServiceCloudTicketingIntegrationOptions extends SapServiceCloudTicketingClientOptions {
  client?: SapServiceCloudTicketingClient;
}

export function createSapServiceCloudTicketingClient(
  options: SapServiceCloudTicketingClientOptions = {},
): SapServiceCloudTicketingClient {
  return requireSapServiceCloudProviderClient(
    options.providerClient
      ?? (hasSapServiceCloudRestConfiguration(options)
        ? createSapServiceCloudODataProviderClient(options)
        : createUnconfiguredSapServiceCloudProviderClient()),
  );
}

export function createSapServiceCloudODataProviderClient(
  options: SapServiceCloudTicketingClientOptions,
): SapServiceCloudTicketingProviderClient {
  const baseUrl = normalizeBaseUrl(options.baseUrl, "SAP Service Cloud baseUrl is required.");
  const odataBasePath = normalizeApiBasePath(options.odataBasePath ?? "/sap/c4c/odata/v1/c4codataapi");
  const authHeaders = sapServiceCloudAuthHeaders(options);
  const serviceRequestsPath = `${odataBasePath}/ServiceRequestCollection`;
  const sdkDestination: SapServiceCloudSdkHttpDestination = { url: baseUrl };

  const request = async <T>(
    method: ProviderHttpMethod,
    path: string,
    input: {
      query?: SapServiceCloudProviderQuery;
      body?: SapServiceCloudProviderPayload;
      headers?: Record<string, string>;
    } = {},
  ): Promise<T> => {
    const query = providerQuery(input.query);
    const headers = {
      ...authHeaders,
      ...(options.csrfToken ? { "x-csrf-token": options.csrfToken } : {}),
      ...(options.headers ?? {}),
      ...(input.headers ?? {}),
    };
    try {
      const requestConfig: HttpRequestConfig = {
        method: method as Method,
        url: path,
        headers,
        ...(query !== undefined ? { params: query } : {}),
        ...(input.body !== undefined ? { data: input.body } : {}),
        ...(options.signal !== undefined ? { signal: options.signal } : {}),
        ...(options.timeoutMs !== undefined ? { timeout: options.timeoutMs } : {}),
      };
      return await sapCloudSdkHttpRequest<T>({
        destination: sdkDestination,
        requestConfig,
      });
    } catch (error) {
      throw normalizeSapServiceCloudProviderJsonError(error, providerRequestUrl({ baseUrl, path, query }));
    }
  };

  return {
    async createServiceRequest(input) {
      return sapODataEntity(await request<unknown>("POST", serviceRequestsPath, {
        body: sapServiceRequestCreateBody(input),
      })) as SapServiceRequestResource;
    },
    async getServiceRequest(objectId) {
      return sapODataEntity(await request<unknown>("GET", `${serviceRequestsPath}(${odataStringKey(objectId)})`)) as SapServiceRequestResource;
    },
    async updateServiceRequest(objectId, input, etag) {
      return sapODataEntity(await request<unknown>(
        "PATCH",
        `${serviceRequestsPath}(${odataStringKey(objectId)})`,
        {
          body: sapServiceRequestUpdateBody(input),
          ...(etag ? { headers: { "If-Match": etag } } : {}),
        },
      )) as SapServiceRequestResource;
    },
    async searchServiceRequests(input = {}) {
      return sapServiceSearchResult(await request<unknown>("GET", serviceRequestsPath, {
        query: sapServiceSearchQuery(input),
      }));
    },
    readiness() {
      return this.searchServiceRequests({
        select: ["ObjectID", "ID", "Name"],
        top: 1,
        inlineCount: "none",
      });
    },
  };
}

interface SapCloudSdkHttpRequestInput {
  destination: SapServiceCloudSdkHttpDestination;
  requestConfig: HttpRequestConfig;
}

async function sapCloudSdkHttpRequest<T>({ destination, requestConfig }: SapCloudSdkHttpRequestInput): Promise<T> {
  const response: HttpResponse = await executeHttpRequest(destination, requestConfig, { fetchCsrfToken: false });
  return response.data as T;
}

export function sapServiceCloudTicketingCredentialStatuses(
  input: SapServiceCloudCredentialStatusInput,
): ProviderCredentialStatusInput[] {
  const hasProviderClient = Boolean(input.providerClient ?? input.providerClientConfigured);
  const hasBaseUrl = Boolean(input.baseUrl ?? hasProviderClient);
  const hasBasic = Boolean(input.username && input.password);
  const hasBearer = Boolean(input.accessToken);
  const hasApiAccess = Boolean(input.apiAccessConfigured || input.authConfigured || hasBasic || hasBearer || hasProviderClient);
  return [
    {
      providerPackageId: sapServiceCloudTicketingProviderManifest.id,
      requirementId: "sap-service-cloud-provider-client",
      state: hasProviderClient ? "configured" : "not-required",
      message: hasProviderClient
        ? "Host-injected SAP Service Cloud provider client override is configured."
        : "No SAP Service Cloud provider client override is configured; built-in OData adapter can be used.",
    },
    {
      providerPackageId: sapServiceCloudTicketingProviderManifest.id,
      requirementId: "sap-service-cloud-instance",
      state: hasBaseUrl ? "configured" : "missing",
      message: hasBaseUrl
        ? "SAP Service Cloud base URL is configured."
        : "SAP Service Cloud baseUrl is required unless a host provider client supplies it.",
    },
    {
      providerPackageId: sapServiceCloudTicketingProviderManifest.id,
      requirementId: "sap-service-cloud-api-access",
      state: hasApiAccess ? "configured" : "missing",
      scopes: input.scopes ?? ["ServiceRequestCollection:read", "ServiceRequestCollection:write"],
      message: hasApiAccess
        ? "SAP Service Cloud API access is configured."
        : "SAP Service Cloud API access requires accessToken, basic auth, auth headers, or a host provider client.",
    },
  ];
}

export function createSapServiceCloudTicketingLiveChecks(options: SapServiceCloudLiveCheckOptions = {}) {
  return [{
    id: "service-request-collection",
    description: "SAP Service Cloud provider client can read ServiceRequestCollection readiness.",
    requiredCredentialIds: ["sap-service-cloud-instance", "sap-service-cloud-api-access"],
    async run(context: { signal?: AbortSignal }) {
      const client = options.client ?? createSapServiceCloudTicketingClient(options);
      const result = await client.readiness();
      if (context.signal?.aborted) throw new Error("SAP Service Cloud live ServiceRequestCollection check aborted.");
      return { details: { sampleCount: result.results.length, count: result.count } };
    },
  }];
}

export function createSapServiceCloudTicketingOperationHandlers(client: SapServiceCloudTicketingClient) {
  return {
    "ticket.create": (input: SapServiceCreateRequestInput) => client.createServiceRequest(input),
    "ticket.read": (input: SapReadServiceRequestOperationInput) => client.getServiceRequest(input.objectId),
    "ticket.update": (input: SapUpdateServiceRequestOperationInput) => {
      const { objectId, etag, ...update } = input;
      return client.updateServiceRequest(objectId, update, etag);
    },
    "ticket.search": (input: SapServiceSearchInput = {}) => client.searchServiceRequests(input),
  };
}

export function createSapServiceCloudTicketingIntegration(options: SapServiceCloudTicketingIntegrationOptions = {}) {
  const client = options.client
    ? requireSapServiceCloudProviderClient(options.client)
    : createSapServiceCloudTicketingClient(options);
  return defineIntegration({
    manifest: sapServiceCloudTicketingProviderManifest,
    operations: createSapServiceCloudTicketingOperationHandlers(client),
  });
}

export function createUnconfiguredSapServiceCloudProviderClient(): SapServiceCloudTicketingProviderClient {
  const fail = async (): Promise<never> => {
    throw new Error(
      "Configure SAP Service Cloud with a host-injected providerClient or with baseUrl plus accessToken, basic auth, or auth headers.",
    );
  };
  return {
    createServiceRequest: fail,
    getServiceRequest: fail,
    updateServiceRequest: fail,
    searchServiceRequests: fail,
    readiness: fail,
  };
}

function requireSapServiceCloudProviderClient(
  client: SapServiceCloudTicketingProviderClient,
): SapServiceCloudTicketingProviderClient {
  for (const method of requiredProviderClientMethods) {
    if (typeof client[method] !== "function") {
      throw new Error(`SapServiceCloudTicketingProviderClient must implement ${method}().`);
    }
  }
  return client;
}

const requiredProviderClientMethods = [
  "createServiceRequest",
  "getServiceRequest",
  "updateServiceRequest",
  "searchServiceRequests",
  "readiness",
] as const;

function hasSapServiceCloudRestConfiguration(options: SapServiceCloudTicketingClientOptions) {
  return Boolean(options.baseUrl && hasSapServiceCloudAuthConfiguration(options));
}

function hasSapServiceCloudAuthConfiguration(options: SapServiceCloudTicketingClientOptions) {
  if (options.accessToken || (options.username && options.password)) return true;
  if (!options.auth) return false;
  if (options.auth.type === "bearer") return Boolean(options.auth.accessToken);
  if (options.auth.type === "basic") return Boolean(options.auth.username && options.auth.password);
  return Object.keys(options.auth.headers).length > 0;
}

function sapServiceCloudAuthHeaders(options: SapServiceCloudTicketingClientOptions): Record<string, string> {
  if (options.auth?.type === "headers") return options.auth.headers;
  if (options.auth?.type === "bearer") return { Authorization: `Bearer ${options.auth.accessToken}` };
  if (options.auth?.type === "basic") return { Authorization: basicAuthHeader(options.auth.username, options.auth.password) };
  if (options.accessToken) return { Authorization: `Bearer ${options.accessToken}` };
  if (options.username && options.password) return { Authorization: basicAuthHeader(options.username, options.password) };
  throw new Error("SAP Service Cloud accessToken, username/password, or auth headers are required.");
}

function basicAuthHeader(username: string, password: string) {
  return `Basic ${Buffer.from(`${username}:${password}`).toString("base64")}`;
}

function normalizeBaseUrl(value: string | undefined, message: string) {
  if (!value) throw new Error(message);
  const url = new URL(value);
  return `${url.protocol}//${url.host}${url.pathname.replace(/\/+$/, "")}`;
}

function normalizeApiBasePath(value: string) {
  return `/${value.replace(/^\/+/, "").replace(/\/+$/, "")}`;
}

function providerQuery(query: SapServiceCloudProviderQuery | undefined): Record<string, ProviderQueryValue> | undefined {
  return query as Record<string, ProviderQueryValue> | undefined;
}

function odataStringKey(value: string) {
  return `'${encodeURIComponent(value.replace(/'/g, "''"))}'`;
}

function sapServiceSearchQuery(input: SapServiceSearchInput): SapServiceCloudProviderQuery {
  return stripUndefined({
    "$filter": input.filter,
    "$select": input.select?.join(","),
    "$expand": input.expand?.join(","),
    "$orderby": input.orderBy,
    "$top": input.top,
    "$skip": input.skip,
    "$inlinecount": input.inlineCount,
  });
}

function sapServiceRequestCreateBody(input: SapServiceCreateRequestInput): SapServiceCloudProviderPayload {
  return stripUndefined({
    Name: input.name,
    ProcessingTypeCode: input.processingTypeCode,
    ServicePriorityCode: input.servicePriorityCode,
    ObjectServiceIssueCategoryID: input.objectServiceIssueCategoryId,
    BuyerPartyID: input.buyerPartyId,
    BuyerPartyName: input.buyerPartyName,
    ...(input.fields ?? {}),
  });
}

function sapServiceRequestUpdateBody(input: SapServiceUpdateRequestInput): SapServiceCloudProviderPayload {
  return stripUndefined({
    Name: input.name,
    ServicePriorityCode: input.servicePriorityCode,
    ObjectServiceIssueCategoryID: input.objectServiceIssueCategoryId,
    StatusCode: input.statusCode,
    ...(input.fields ?? {}),
  });
}

function stripUndefined<T extends Record<string, unknown>>(input: T): T {
  return Object.fromEntries(Object.entries(input).filter(([, value]) => value !== undefined)) as T;
}

function normalizeSapServiceCloudProviderJsonError(error: unknown, url: string): unknown {
  if (error instanceof SapServiceCloudProviderApiError) return error;
  const sdkResponse = sapCloudSdkErrorResponse(error);
  if (sdkResponse) {
    const headers = headersLikeToRecord(sdkResponse.headers);
    return new SapServiceCloudProviderApiError({
      status: sdkResponse.status,
      message: providerErrorMessage(sdkResponse.data, `SAP Service Cloud request returned HTTP ${sdkResponse.status}.`),
      body: sdkResponse.data,
      response: {
        statusText: sdkResponse.statusText,
        headers,
        url,
        ...requestIdMetadata(headers),
      },
    });
  }
  if (!isRecord(error) || typeof error.status !== "number") return error;
  const body = error.payload;
  return new SapServiceCloudProviderApiError({
    status: error.status,
    message: providerErrorMessage(body, `SAP Service Cloud request returned HTTP ${error.status}.`),
    body,
    response: {
      statusText: typeof error.statusText === "string" ? error.statusText : "",
      headers: {},
      url,
    },
  });
}

function sapCloudSdkErrorResponse(error: unknown): {
  status: number;
  statusText: string;
  headers: unknown;
  data: unknown;
} | undefined {
  if (!isRecord(error) || !isRecord(error.response)) return undefined;
  const response = error.response;
  if (typeof response.status !== "number") return undefined;
  return {
    status: response.status,
    statusText: typeof response.statusText === "string" ? response.statusText : "",
    headers: response.headers,
    data: response.data,
  };
}

function headersLikeToRecord(headers: unknown): Record<string, string> {
  if (headers instanceof Headers) return headersToRecord(headers);
  const maybeJson = isRecord(headers) && typeof headers.toJSON === "function"
    ? headers.toJSON()
    : headers;
  if (!isRecord(maybeJson)) return {};
  const record: Record<string, string> = {};
  for (const [key, value] of Object.entries(maybeJson)) {
    if (value === undefined || value === null) continue;
    record[key.toLowerCase()] = String(value);
  }
  return record;
}

function sapODataEntity(value: unknown): unknown {
  if (!isRecord(value)) return value;
  const d = isRecord(value.d) ? value.d : undefined;
  if (d && !Array.isArray(d.results)) return d;
  return value;
}

function sapServiceSearchResult(value: unknown): SapServiceSearchResult {
  const body = isRecord(value) ? value : {};
  const d = isRecord(body.d) ? body.d : undefined;
  const source = d ?? body;
  const results = Array.isArray(source.results)
    ? source.results
    : Array.isArray(source.value)
      ? source.value
      : [];
  const count = typeof source.__count === "string"
    ? source.__count
    : typeof source.count === "string"
      ? source.count
      : typeof source["@odata.count"] === "number"
        ? String(source["@odata.count"])
        : undefined;
  return {
    results: results as SapServiceRequestResource[],
    ...(count !== undefined ? { count } : {}),
  };
}

function providerErrorMessage(body: unknown, fallback: string): string {
  if (typeof body === "string" && body.trim()) return body;
  if (!isRecord(body)) return fallback;
  const error = isRecord(body.error) ? body.error : undefined;
  const errorMessage = isRecord(error?.message) ? error.message : undefined;
  for (const candidate of [
    body.message,
    errorMessage?.value,
    error?.message,
    error?.code,
  ]) {
    if (typeof candidate === "string" && candidate.trim()) return candidate;
  }
  return fallback;
}

function headersToRecord(headers: Headers) {
  const record: Record<string, string> = {};
  headers.forEach((value, key) => {
    record[key.toLowerCase()] = value;
  });
  return record;
}

function requestIdMetadata(headers: Record<string, string>) {
  const requestId = headers["x-correlationid"]
    ?? headers["x-correlation-id"]
    ?? headers["sap-message-id"]
    ?? headers["x-request-id"]
    ?? headers["request-id"];
  return requestId ? { requestId } : {};
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}
