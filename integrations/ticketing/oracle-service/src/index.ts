import type { ProviderCredentialStatusInput } from "@cognidesk/core";
import {
  defineIntegration,
  providerJsonRequest,
  providerRequestUrl,
  type ProviderHttpMethod,
  type ProviderJsonRetryOptions,
  type ProviderQueryValue,
} from "@cognidesk/integration-kit";
import {
  ORACLE_SERVICE_DEFAULT_API_VERSION,
  oracleServiceTicketingProviderManifest,
} from "./manifest.js";

export {
  ORACLE_SERVICE_DEFAULT_API_VERSION,
  oracleServiceTicketingProviderManifest,
} from "./manifest.js";

export type OracleServiceJsonPrimitive = string | number | boolean | null;
export type OracleServiceJsonValue =
  | OracleServiceJsonPrimitive
  | OracleServiceJsonObject
  | readonly OracleServiceJsonValue[];
export type OracleServiceProviderExtensionValue = OracleServiceJsonValue | object | undefined;
export interface OracleServiceJsonObject {
  [key: string]: OracleServiceProviderExtensionValue;
}
export type OracleServiceProviderPayload = OracleServiceJsonObject | object;
export type OracleServiceProviderQuery = Record<string, OracleServiceProviderExtensionValue>;
export interface OracleServiceProviderResponse extends OracleServiceJsonObject {}
export interface OracleServiceProviderExtensionFields extends OracleServiceJsonObject {}

export interface OracleServiceTicketingClientOptions {
  providerClient?: OracleServiceTicketingProviderClient | undefined;
  baseUrl?: string;
  instanceUrl?: string;
  apiVersion?: string;
  accessToken?: string;
  username?: string;
  password?: string;
  auth?: OracleServiceAuthOptions;
  headers?: Record<string, string>;
  fetch?: typeof fetch;
  signal?: AbortSignal;
  timeoutMs?: number;
  retry?: number | ProviderJsonRetryOptions;
}

export type OracleServiceAuthOptions =
  | { type: "bearer"; accessToken: string }
  | { type: "basic"; username: string; password: string }
  | { type: "headers"; headers: Record<string, string> };

export interface OracleServiceProviderApiErrorResponseMetadata {
  statusText: string;
  headers: Record<string, string>;
  url: string;
  requestId?: string;
}

export interface OracleServiceProviderApiErrorInput {
  status: number;
  message: string;
  body: unknown;
  response: OracleServiceProviderApiErrorResponseMetadata;
}

export class OracleServiceProviderApiError extends Error {
  readonly provider = "oracle-service";
  readonly status: number;
  readonly body: unknown;
  readonly response: OracleServiceProviderApiErrorResponseMetadata;

  constructor(input: OracleServiceProviderApiErrorInput) {
    super(input.message);
    this.name = "OracleServiceProviderApiError";
    this.status = input.status;
    this.body = input.body;
    this.response = input.response;
  }
}

export interface OracleServiceCredentialStatusInput {
  providerClientConfigured?: boolean;
  baseUrl?: string;
  instanceUrl?: string;
  username?: string;
  password?: string;
  accessToken?: string;
  authConfigured?: boolean;
  apiAccessConfigured?: boolean;
  scopes?: string[];
}

export type OracleServiceRequestResource = OracleServiceProviderPayload & {
  SrId?: number;
  SrNumber?: string;
  Title?: string;
  ProblemDescription?: string;
  StatusCd?: string;
  SeverityCd?: string;
  QueueId?: number;
  AssigneeResourceId?: number;
};

export interface OracleServiceCreateRequestInput {
  title: string;
  problemDescription?: string;
  statusCode?: string;
  severityCode?: string;
  channelTypeCode?: string;
  categoryCode?: string;
  primaryContactPartyId?: number;
  accountPartyId?: number;
  queueId?: number;
  assigneeResourceId?: number;
  fields?: OracleServiceJsonObject;
}

export interface OracleServiceUpdateRequestInput {
  title?: string;
  problemDescription?: string;
  statusCode?: string;
  severityCode?: string;
  queueId?: number | null;
  assigneeResourceId?: number | null;
  resolveDescription?: string;
  fields?: OracleServiceJsonObject;
}

export interface OracleServiceSearchInput {
  q?: string;
  finder?: string;
  fields?: string[];
  expand?: string[];
  orderBy?: string;
  limit?: number;
  offset?: number;
  onlyData?: boolean;
}

export interface OracleServiceCreateMessageInput {
  srNumber: string;
  messageTypeCode: string;
  messageContent?: string;
  statusCode?: string;
  socialPrivateFlag?: boolean;
  sourceCode?: string;
  channelTypeCode?: string;
  fields?: OracleServiceJsonObject;
}

export interface OracleServiceSearchResult<T = OracleServiceRequestResource> {
  items: T[];
  count?: number;
  hasMore?: boolean;
  limit?: number;
  offset?: number;
}

export interface OracleServiceTicketingProviderClient {
  createServiceRequest(input: OracleServiceCreateRequestInput): Promise<OracleServiceRequestResource>;
  getServiceRequest(srNumber: string): Promise<OracleServiceRequestResource>;
  updateServiceRequest(srNumber: string, input: OracleServiceUpdateRequestInput): Promise<OracleServiceRequestResource>;
  createServiceRequestMessage(input: OracleServiceCreateMessageInput): Promise<OracleServiceProviderResponse>;
  searchServiceRequests(input?: OracleServiceSearchInput): Promise<OracleServiceSearchResult>;
  readiness(): Promise<OracleServiceSearchResult>;
}

export interface OracleServiceTicketingClient extends OracleServiceTicketingProviderClient {
  providerClient: OracleServiceTicketingProviderClient;
}

export interface OracleServiceLiveCheckOptions extends OracleServiceTicketingClientOptions {
  client?: Pick<OracleServiceTicketingClient, "readiness">;
}

export interface OracleServiceReadOperationInput {
  srNumber: string;
}

export interface OracleServiceUpdateOperationInput extends OracleServiceUpdateRequestInput {
  srNumber: string;
}

export interface OracleServiceTicketingIntegrationOptions extends OracleServiceTicketingClientOptions {
  instanceUrl?: string;
  username?: string;
  password?: string;
  accessToken?: string;
  client?: OracleServiceTicketingClient;
}

export function createOracleServiceTicketingClient(
  options: OracleServiceTicketingClientOptions = {},
): OracleServiceTicketingClient {
  const providerClient = requireOracleServiceTicketingProviderClient(
    options.providerClient
      ?? (hasOracleServiceRestConfiguration(options)
        ? createOracleServiceRestProviderClient(options)
        : createUnconfiguredOracleServiceTicketingProviderClient()),
  );
  return {
    providerClient,
    createServiceRequest(input) {
      return providerClient.createServiceRequest(input);
    },
    getServiceRequest(srNumber) {
      return providerClient.getServiceRequest(srNumber);
    },
    updateServiceRequest(srNumber, input) {
      return providerClient.updateServiceRequest(srNumber, input);
    },
    createServiceRequestMessage(input) {
      return providerClient.createServiceRequestMessage(input);
    },
    searchServiceRequests(input = {}) {
      return providerClient.searchServiceRequests(input);
    },
    readiness() {
      return providerClient.readiness();
    },
  };
}

export function createOracleServiceRestProviderClient(
  options: OracleServiceTicketingClientOptions,
): OracleServiceTicketingProviderClient {
  const baseUrl = normalizeBaseUrl(options.baseUrl ?? options.instanceUrl, "Oracle Service baseUrl or instanceUrl is required.");
  const apiVersion = options.apiVersion ?? ORACLE_SERVICE_DEFAULT_API_VERSION;
  const fetchImpl = options.fetch ?? fetch;
  const authHeaders = oracleServiceAuthHeaders(options);
  const collectionPath = `/crmRestApi/resources/${encodeURIComponent(apiVersion)}/serviceRequests`;

  const request = async <T>(
    method: ProviderHttpMethod,
    path: string,
    input: { query?: OracleServiceProviderQuery; body?: OracleServiceProviderPayload } = {},
  ): Promise<T> => {
    const query = providerQuery(input.query);
    try {
      return await providerJsonRequest<T>({
        baseUrl,
        path,
        method,
        query,
        body: input.body,
        headers: {
          ...authHeaders,
          ...(options.headers ?? {}),
        },
        fetch: fetchImpl,
        signal: options.signal,
        timeoutMs: options.timeoutMs,
        retry: options.retry,
        providerName: "Oracle Service",
      });
    } catch (error) {
      throw normalizeOracleServiceProviderJsonError(error, providerRequestUrl({ baseUrl, path, query }));
    }
  };

  return {
    createServiceRequest(input) {
      return request<OracleServiceRequestResource>("POST", collectionPath, {
        body: oracleServiceRequestCreateBody(input),
      });
    },
    getServiceRequest(srNumber) {
      return request<OracleServiceRequestResource>("GET", `${collectionPath}/${pathSegment(srNumber)}`);
    },
    updateServiceRequest(srNumber, input) {
      return request<OracleServiceRequestResource>("PATCH", `${collectionPath}/${pathSegment(srNumber)}`, {
        body: oracleServiceRequestUpdateBody(input),
      });
    },
    createServiceRequestMessage(input) {
      return request<OracleServiceProviderResponse>(
        "POST",
        `${collectionPath}/${pathSegment(input.srNumber)}/child/messages`,
        { body: oracleServiceRequestMessageBody(input) },
      );
    },
    searchServiceRequests(input = {}) {
      return request<OracleServiceSearchResult>("GET", collectionPath, {
        query: oracleServiceSearchQuery(input),
      });
    },
    readiness() {
      return request<OracleServiceSearchResult>("GET", collectionPath, {
        query: {
          fields: "SrId,SrNumber",
          limit: 1,
          onlyData: true,
        },
      });
    },
  };
}

export function createUnconfiguredOracleServiceTicketingProviderClient(): OracleServiceTicketingProviderClient {
  const fail = async (..._args: unknown[]): Promise<never> => {
    throw new Error(
      "Configure Oracle Service with a host-provided providerClient or with baseUrl/instanceUrl plus access credentials.",
    );
  };
  return {
    createServiceRequest: fail,
    getServiceRequest: fail,
    updateServiceRequest: fail,
    createServiceRequestMessage: fail,
    searchServiceRequests: fail,
    readiness: fail,
  };
}

export function oracleServiceTicketingCredentialStatuses(
  input: OracleServiceCredentialStatusInput,
): ProviderCredentialStatusInput[] {
  const hasProviderClient = Boolean(input.providerClientConfigured);
  const hasInstance = Boolean(input.baseUrl ?? input.instanceUrl ?? hasProviderClient);
  const hasBasic = Boolean(input.username && input.password);
  const hasBearer = Boolean(input.accessToken);
  const hasApiAccess = Boolean(input.apiAccessConfigured || input.authConfigured || hasBasic || hasBearer || hasProviderClient);
  return [
    {
      providerPackageId: oracleServiceTicketingProviderManifest.id,
      requirementId: "oracle-service-provider-client",
      state: hasProviderClient ? "configured" : "not-required",
      message: hasProviderClient
        ? "Host-provided Oracle Service provider client override is configured."
        : "No host-provided Oracle Service provider client override is configured; built-in REST adapter can be used.",
    },
    {
      providerPackageId: oracleServiceTicketingProviderManifest.id,
      requirementId: "oracle-service-instance",
      state: hasInstance ? "configured" : "missing",
      message: hasInstance
        ? "Oracle Fusion Service base URL is configured."
        : "Oracle Fusion Service baseUrl or instanceUrl is required unless a host provider client supplies it.",
    },
    {
      providerPackageId: oracleServiceTicketingProviderManifest.id,
      requirementId: "oracle-service-api-access",
      state: hasApiAccess ? "configured" : "missing",
      scopes: input.scopes ?? ["serviceRequests:read", "serviceRequests:write"],
      message: hasApiAccess
        ? "Oracle Fusion Service API access is configured."
        : "Oracle Fusion Service API access requires accessToken, basic auth, auth headers, or a host provider client.",
    },
  ];
}

export function createOracleServiceTicketingLiveChecks(options: OracleServiceLiveCheckOptions) {
  return [{
    id: "service-requests",
    description: "Oracle Service provider client can query serviceRequests readiness.",
    requiredCredentialIds: ["oracle-service-instance", "oracle-service-api-access"],
    async run(context: { signal?: AbortSignal }) {
      const client = options.client ?? createOracleServiceTicketingClient(options);
      const result = await client.readiness();
      if (context.signal?.aborted) throw new Error("Oracle Service live serviceRequests check aborted.");
      return { details: { sampleCount: result.items.length, hasMore: result.hasMore } };
    },
  }];
}

export function createOracleServiceTicketingOperationHandlers(client: OracleServiceTicketingClient) {
  return {
    "ticket.create": (input: OracleServiceCreateRequestInput) => client.createServiceRequest(input),
    "ticket.read": (input: OracleServiceReadOperationInput) => client.getServiceRequest(input.srNumber),
    "ticket.update": (input: OracleServiceUpdateOperationInput) => {
      const { srNumber, ...update } = input;
      return client.updateServiceRequest(srNumber, update);
    },
    "ticket.search": (input: OracleServiceSearchInput = {}) => client.searchServiceRequests(input),
    "oracle-service.serviceRequestMessage.create": (input: OracleServiceCreateMessageInput) =>
      client.createServiceRequestMessage(input),
  };
}

export function createOracleServiceTicketingIntegration(options: OracleServiceTicketingIntegrationOptions) {
  const client = options.client ?? createOracleServiceTicketingClient(options);
  return defineIntegration({
    manifest: oracleServiceTicketingProviderManifest,
    operations: createOracleServiceTicketingOperationHandlers(client),
    credentials: {
      instanceUrl: options.instanceUrl,
      username: options.username,
      accessToken: options.accessToken ? "configured" : undefined,
    },
    metadata: {
      implementationStrategy: "no-official-sdk-rest-adapter",
      providerClient: options.providerClient ? "OracleServiceTicketingProviderClient" : undefined,
    },
  });
}

function requireOracleServiceTicketingProviderClient(
  client: OracleServiceTicketingProviderClient,
): OracleServiceTicketingProviderClient {
  for (const method of [
    "createServiceRequest",
    "getServiceRequest",
    "updateServiceRequest",
    "createServiceRequestMessage",
    "searchServiceRequests",
    "readiness",
  ] as const) {
    if (typeof client[method] !== "function") {
      throw new Error(`Oracle Service providerClient must implement ${method}().`);
    }
  }
  return client;
}

function hasOracleServiceRestConfiguration(options: OracleServiceTicketingClientOptions) {
  return Boolean((options.baseUrl ?? options.instanceUrl) && hasOracleServiceAuthConfiguration(options));
}

function hasOracleServiceAuthConfiguration(options: OracleServiceTicketingClientOptions) {
  if (options.accessToken || (options.username && options.password)) return true;
  if (!options.auth) return false;
  if (options.auth.type === "bearer") return Boolean(options.auth.accessToken);
  if (options.auth.type === "basic") return Boolean(options.auth.username && options.auth.password);
  return Object.keys(options.auth.headers).length > 0;
}

function oracleServiceAuthHeaders(options: OracleServiceTicketingClientOptions): Record<string, string> {
  if (options.auth?.type === "headers") return options.auth.headers;
  if (options.auth?.type === "bearer") return { Authorization: `Bearer ${options.auth.accessToken}` };
  if (options.auth?.type === "basic") return { Authorization: basicAuthHeader(options.auth.username, options.auth.password) };
  if (options.accessToken) return { Authorization: `Bearer ${options.accessToken}` };
  if (options.username && options.password) return { Authorization: basicAuthHeader(options.username, options.password) };
  throw new Error("Oracle Service accessToken, username/password, or auth headers are required.");
}

function basicAuthHeader(username: string, password: string) {
  return `Basic ${Buffer.from(`${username}:${password}`).toString("base64")}`;
}

function normalizeBaseUrl(value: string | undefined, message: string) {
  if (!value) throw new Error(message);
  const url = new URL(value);
  return `${url.protocol}//${url.host}${url.pathname.replace(/\/+$/, "")}`;
}

function providerUrl(
  baseUrl: string,
  path: string,
  query: OracleServiceProviderQuery | undefined,
) {
  const url = new URL(`${baseUrl}${path.startsWith("/") ? "" : "/"}${path}`);
  if (query) appendQuery(url, query);
  return url.toString();
}

function appendQuery(url: URL, query: OracleServiceProviderQuery) {
  for (const [key, value] of Object.entries(query)) {
    if (value === undefined || value === null || value === "") continue;
    if (Array.isArray(value)) {
      for (const item of value) {
        if (item !== undefined && item !== null && item !== "") url.searchParams.append(key, String(item));
      }
      continue;
    }
    url.searchParams.set(key, String(value));
  }
}

function requestHeaders(
  authHeaders: Record<string, string>,
  extraHeaders: Record<string, string> | undefined,
  hasBody: boolean,
) {
  const headers = new Headers({
    Accept: "application/json",
    ...authHeaders,
    ...(extraHeaders ?? {}),
  });
  if (hasBody && !headers.has("Content-Type")) headers.set("Content-Type", "application/json");
  return headers;
}

function providerQuery(query: OracleServiceProviderQuery | undefined): Record<string, ProviderQueryValue> | undefined {
  return query as Record<string, ProviderQueryValue> | undefined;
}

function pathSegment(value: string | number | boolean) {
  return encodeURIComponent(String(value));
}

function oracleServiceSearchQuery(input: OracleServiceSearchInput): OracleServiceProviderQuery {
  return stripUndefined({
    q: input.q,
    finder: input.finder,
    fields: input.fields?.join(","),
    expand: input.expand?.join(","),
    orderBy: input.orderBy,
    limit: input.limit,
    offset: input.offset,
    onlyData: input.onlyData,
  });
}

function oracleServiceRequestCreateBody(input: OracleServiceCreateRequestInput): OracleServiceProviderPayload {
  return stripUndefined({
    Title: input.title,
    ProblemDescription: input.problemDescription,
    StatusCd: input.statusCode,
    SeverityCd: input.severityCode,
    ChannelTypeCd: input.channelTypeCode,
    CategoryCode: input.categoryCode,
    PrimaryContactPartyId: input.primaryContactPartyId,
    AccountPartyId: input.accountPartyId,
    QueueId: input.queueId,
    AssigneeResourceId: input.assigneeResourceId,
    ...(input.fields ?? {}),
  });
}

function oracleServiceRequestUpdateBody(input: OracleServiceUpdateRequestInput): OracleServiceProviderPayload {
  return stripUndefined({
    Title: input.title,
    ProblemDescription: input.problemDescription,
    StatusCd: input.statusCode,
    SeverityCd: input.severityCode,
    QueueId: input.queueId,
    AssigneeResourceId: input.assigneeResourceId,
    ResolveDescription: input.resolveDescription,
    ...(input.fields ?? {}),
  });
}

function oracleServiceRequestMessageBody(input: OracleServiceCreateMessageInput): OracleServiceProviderPayload {
  return stripUndefined({
    MessageTypeCd: input.messageTypeCode,
    MessageContent: input.messageContent,
    StatusCd: input.statusCode,
    SocialPrivateFlag: input.socialPrivateFlag,
    SourceCd: input.sourceCode,
    ChannelTypeCd: input.channelTypeCode,
    ...(input.fields ?? {}),
  });
}

function stripUndefined<T extends Record<string, unknown>>(input: T): T {
  return Object.fromEntries(Object.entries(input).filter(([, value]) => value !== undefined)) as T;
}

function normalizeOracleServiceProviderJsonError(error: unknown, url: string): unknown {
  if (error instanceof OracleServiceProviderApiError) return error;
  if (!isRecord(error) || typeof error.status !== "number") return error;
  const body = error.payload;
  return new OracleServiceProviderApiError({
    status: error.status,
    message: providerErrorMessage(body, `Oracle Service request returned HTTP ${error.status}.`),
    body,
    response: {
      statusText: typeof error.statusText === "string" ? error.statusText : "",
      headers: {},
      url,
    },
  });
}

async function parseOracleServiceResponse<T>(response: Response, url: string): Promise<T> {
  const body = await parseJsonResponseBody(response);
  if (response.ok) {
    return (body === undefined ? {} : body) as T;
  }
  const headers = headersToRecord(response.headers);
  const responseMetadata: OracleServiceProviderApiErrorResponseMetadata = {
    statusText: response.statusText,
    headers,
    url,
    ...requestIdMetadata(headers),
  };
  throw new OracleServiceProviderApiError({
    status: response.status,
    message: providerErrorMessage(body, `Oracle Service request returned HTTP ${response.status}.`),
    body,
    response: responseMetadata,
  });
}

async function parseJsonResponseBody(response: Response): Promise<unknown> {
  const text = await response.text();
  if (!text.trim()) return undefined;
  try {
    return JSON.parse(text);
  } catch {
    return text;
  }
}

function providerErrorMessage(body: unknown, fallback: string): string {
  if (typeof body === "string" && body.trim()) return body;
  if (!isRecord(body)) return fallback;
  const nestedError = isRecord(body.error) ? body.error : undefined;
  const firstDetail = Array.isArray(body["o:errorDetails"]) && isRecord(body["o:errorDetails"][0])
    ? body["o:errorDetails"][0]
    : undefined;
  for (const candidate of [
    body.message,
    body.detail,
    nestedError?.message,
    nestedError?.detail,
    firstDetail?.message,
    firstDetail?.detail,
    body.title,
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
  const requestId = headers["x-oracle-dms-ecid"]
    ?? headers["opc-request-id"]
    ?? headers["x-request-id"]
    ?? headers["request-id"];
  return requestId ? { requestId } : {};
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}
