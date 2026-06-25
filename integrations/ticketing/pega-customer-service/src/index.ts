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
  pegaCustomerServiceTicketingProviderManifest,
  pegaCustomerServiceTicketingProviderManifestInput,
} from "./manifest.js";

export {
  pegaCustomerServiceTicketingProviderManifest,
  pegaCustomerServiceTicketingProviderManifestInput,
} from "./manifest.js";

export type PegaCustomerServiceJsonPrimitive = string | number | boolean | null;
export type PegaCustomerServiceJsonValue =
  | PegaCustomerServiceJsonPrimitive
  | PegaCustomerServiceJsonObject
  | readonly PegaCustomerServiceJsonValue[];
export type PegaCustomerServiceProviderExtensionValue = PegaCustomerServiceJsonValue | object | undefined;
export interface PegaCustomerServiceJsonObject {
  [key: string]: PegaCustomerServiceProviderExtensionValue;
}
export type PegaCustomerServiceProviderPayload = PegaCustomerServiceJsonObject | object;
export type PegaCustomerServiceProviderQuery = Record<string, PegaCustomerServiceProviderExtensionValue>;
export interface PegaCustomerServiceProviderResponse extends PegaCustomerServiceJsonObject {}
export interface PegaCustomerServiceProviderExtensionFields extends PegaCustomerServiceJsonObject {}

export interface PegaCustomerServiceTicketingClientOptions {
  providerClient?: PegaCustomerServiceProviderClient;
  client?: PegaCustomerServiceProviderClient;
  baseUrl?: string;
  accessToken?: string;
  auth?: PegaCustomerServiceAuthOptions;
  apiBasePath?: string;
  headers?: Record<string, string>;
  fetch?: typeof fetch;
  signal?: AbortSignal;
  timeoutMs?: number;
  retry?: number | ProviderJsonRetryOptions;
}

export type PegaCustomerServiceAuthOptions =
  | { type: "bearer"; accessToken: string }
  | { type: "headers"; headers: Record<string, string> };

export interface PegaCustomerServiceProviderApiErrorResponseMetadata {
  statusText: string;
  headers: Record<string, string>;
  url: string;
  requestId?: string;
}

export interface PegaCustomerServiceProviderApiErrorInput {
  status: number;
  message: string;
  body: unknown;
  response: PegaCustomerServiceProviderApiErrorResponseMetadata;
}

export class PegaCustomerServiceProviderApiError extends Error {
  readonly provider = "pega-customer-service";
  readonly status: number;
  readonly body: unknown;
  readonly response: PegaCustomerServiceProviderApiErrorResponseMetadata;

  constructor(input: PegaCustomerServiceProviderApiErrorInput) {
    super(input.message);
    this.name = "PegaCustomerServiceProviderApiError";
    this.status = input.status;
    this.body = input.body;
    this.response = input.response;
  }
}

export interface PegaCustomerServiceCredentialStatusInput {
  providerClient?: unknown;
  client?: unknown;
  hostProviderClientConfigured?: boolean;
  baseUrl?: string;
  accessToken?: string;
  authConfigured?: boolean;
  apiAccessConfigured?: boolean;
  scopes?: string[];
}

export type PegaCaseResource = PegaCustomerServiceProviderPayload & {
  ID?: string;
  caseID?: string;
  name?: string;
  status?: string;
  stage?: string;
  caseTypeID?: string;
};

export type PegaCaseTypeResource = PegaCustomerServiceProviderPayload & {
  ID?: string;
  name?: string;
  startingProcesses?: Array<PegaCustomerServiceJsonObject>;
};

export interface PegaCreateCaseInput {
  caseTypeId: string;
  processId?: string;
  parentCaseId?: string;
  content?: PegaCustomerServiceJsonObject;
  pageInstructions?: PegaCustomerServiceJsonValue[];
  fields?: PegaCustomerServiceJsonObject;
}

export interface PegaUpdateCaseInput {
  content?: PegaCustomerServiceJsonObject;
  pageInstructions?: PegaCustomerServiceJsonValue[];
  fields?: PegaCustomerServiceJsonObject;
}

export interface PegaAssignmentActionInput {
  assignmentId: string;
  actionId: string;
  eTag?: string;
  content?: PegaCustomerServiceJsonObject;
  pageInstructions?: PegaCustomerServiceJsonValue[];
  fields?: PegaCustomerServiceJsonObject;
}

export interface PegaSearchCasesInput {
  caseTypeId?: string;
  status?: string;
  assignmentId?: string;
  page?: number;
  pageSize?: number;
  fields?: Record<string, string | number | boolean>;
}

export interface PegaCasesResult<T = PegaCaseResource> {
  cases: T[];
  count?: number;
}

export interface PegaCustomerServiceProviderClient {
  createCase(input: PegaCreateCaseInput): Promise<PegaCaseResource>;
  getCase(caseId: string): Promise<PegaCaseResource>;
  updateCase(caseId: string, input: PegaUpdateCaseInput): Promise<PegaCaseResource>;
  performAssignmentAction(input: PegaAssignmentActionInput): Promise<PegaCustomerServiceProviderResponse>;
  searchCases(input?: PegaSearchCasesInput): Promise<PegaCasesResult>;
  listCaseTypes(): Promise<PegaCaseTypeResource[]>;
  readiness(): Promise<PegaCaseTypeResource[]>;
}

export interface PegaCustomerServiceTicketingClient extends PegaCustomerServiceProviderClient {}

export interface PegaCustomerServiceLiveCheckOptions {
  providerClient?: Pick<PegaCustomerServiceProviderClient, "readiness">;
  client?: Pick<PegaCustomerServiceProviderClient, "readiness">;
  baseUrl?: string;
  accessToken?: string;
  auth?: PegaCustomerServiceAuthOptions;
  apiBasePath?: string;
  headers?: Record<string, string>;
  fetch?: typeof fetch;
  signal?: AbortSignal;
  timeoutMs?: number;
  retry?: number | ProviderJsonRetryOptions;
}

export interface PegaReadCaseOperationInput {
  caseId: string;
}

export interface PegaUpdateCaseOperationInput extends PegaUpdateCaseInput {
  caseId: string;
}

export interface PegaCustomerServiceTicketingIntegrationOptions extends PegaCustomerServiceTicketingClientOptions {}

export function createPegaCustomerServiceTicketingClient(
  options: PegaCustomerServiceTicketingClientOptions = {},
): PegaCustomerServiceTicketingClient {
  return requirePegaCustomerServiceProviderClient(
    options.providerClient
      ?? options.client
      ?? (hasPegaCustomerServiceRestConfiguration(options)
        ? createPegaCustomerServiceRestProviderClient(options)
        : createMissingPegaCustomerServiceProviderClient()),
  );
}

export function createPegaCustomerServiceRestProviderClient(
  options: PegaCustomerServiceTicketingClientOptions,
): PegaCustomerServiceTicketingClient {
  const baseUrl = normalizeBaseUrl(options.baseUrl, "Pega Customer Service baseUrl is required.");
  const apiBasePath = normalizeApiBasePath(options.apiBasePath ?? "/api/application/v2");
  const fetchImpl = options.fetch ?? fetch;
  const authHeaders = pegaCustomerServiceAuthHeaders(options);

  const request = async <T>(
    method: ProviderHttpMethod,
    path: string,
    input: {
      query?: PegaCustomerServiceProviderQuery;
      body?: PegaCustomerServiceProviderPayload;
      headers?: Record<string, string>;
    } = {},
  ): Promise<T> => {
    const requestPath = `${apiBasePath}${path}`;
    const query = providerQuery(input.query);
    try {
      return await providerJsonRequest<T>({
        baseUrl,
        path: requestPath,
        method,
        query,
        body: input.body,
        headers: {
          ...authHeaders,
          ...(options.headers ?? {}),
          ...(input.headers ?? {}),
        },
        fetch: fetchImpl,
        signal: options.signal,
        timeoutMs: options.timeoutMs,
        retry: options.retry,
        providerName: "Pega Customer Service",
      });
    } catch (error) {
      throw normalizePegaCustomerServiceProviderJsonError(
        error,
        providerRequestUrl({ baseUrl, path: requestPath, query }),
      );
    }
  };

  return {
    async createCase(input) {
      return unwrapPegaResource(await request<unknown>("POST", "/cases", {
        body: pegaCreateCaseBody(input),
      })) as PegaCaseResource;
    },
    async getCase(caseId) {
      return unwrapPegaResource(await request<unknown>("GET", `/cases/${pathSegment(caseId)}`)) as PegaCaseResource;
    },
    async updateCase(caseId, input) {
      return unwrapPegaResource(await request<unknown>("PUT", `/cases/${pathSegment(caseId)}`, {
        body: pegaUpdateCaseBody(input),
      })) as PegaCaseResource;
    },
    async performAssignmentAction(input) {
      return unwrapPegaResource(await request<unknown>(
        "PATCH",
        `/assignments/${pathSegment(input.assignmentId)}/actions/${pathSegment(input.actionId)}`,
        {
          body: pegaAssignmentActionBody(input),
          ...(input.eTag ? { headers: { "If-Match": input.eTag } } : {}),
        },
      )) as PegaCustomerServiceProviderResponse;
    },
    async searchCases(input = {}) {
      return pegaCasesResult(await request<unknown>("GET", "/cases", {
        query: pegaSearchCasesQuery(input),
      }));
    },
    async listCaseTypes() {
      return pegaCaseTypes(await request<unknown>("GET", "/casetypes"));
    },
    readiness() {
      return this.listCaseTypes();
    },
  };
}

export function pegaCustomerServiceTicketingCredentialStatuses(
  input: PegaCustomerServiceCredentialStatusInput,
): ProviderCredentialStatusInput[] {
  const hasProviderClient = Boolean(input.providerClient ?? input.client ?? input.hostProviderClientConfigured);
  const hasBaseUrl = Boolean(input.baseUrl ?? hasProviderClient);
  const hasApiAccess = Boolean(input.apiAccessConfigured || input.authConfigured || input.accessToken || hasProviderClient);
  return [
    {
      providerPackageId: pegaCustomerServiceTicketingProviderManifest.id,
      requirementId: "pega-customer-service-provider-client",
      state: hasProviderClient ? "configured" : "not-required",
      message: hasProviderClient
        ? "Host-injected Pega Customer Service provider client override is configured."
        : "No Pega provider client override is configured; built-in DX REST adapter can be used.",
    },
    {
      providerPackageId: pegaCustomerServiceTicketingProviderManifest.id,
      requirementId: "pega-customer-service-instance",
      state: hasBaseUrl ? "configured" : "missing",
      message: hasBaseUrl
        ? "Pega Customer Service base URL is configured."
        : "Pega Customer Service baseUrl is required unless a host provider client supplies it.",
    },
    {
      providerPackageId: pegaCustomerServiceTicketingProviderManifest.id,
      requirementId: "pega-customer-service-api-access",
      state: hasApiAccess ? "configured" : "missing",
      scopes: input.scopes ?? ["cases:read", "cases:write", "assignments:write"],
      message: hasApiAccess
        ? "Pega Customer Service DX API access is configured."
        : "Pega Customer Service DX API access requires accessToken, auth headers, or a host provider client.",
    },
  ];
}

export function createPegaCustomerServiceTicketingLiveChecks(options: PegaCustomerServiceLiveCheckOptions = {}) {
  return [{
    id: "case-types",
    description: "Pega Customer Service provider client can report case-type readiness.",
    requiredCredentialIds: ["pega-customer-service-instance", "pega-customer-service-api-access"],
    async run(context: { signal?: AbortSignal }) {
      const { providerClient: _providerClient, client: _client, ...restOptions } = options;
      const client = options.providerClient ?? options.client ?? createPegaCustomerServiceTicketingClient(restOptions);
      const caseTypes = await client.readiness();
      if (context.signal?.aborted) throw new Error("Pega Customer Service live case-types check aborted.");
      return { details: { caseTypeCount: caseTypes.length } };
    },
  }];
}

export function createPegaCustomerServiceTicketingOperationHandlers(client: PegaCustomerServiceTicketingClient) {
  return {
    "ticket.create": (input: PegaCreateCaseInput) => client.createCase(input),
    "ticket.read": (input: PegaReadCaseOperationInput) => client.getCase(input.caseId),
    "ticket.update": (input: PegaUpdateCaseOperationInput) => {
      const { caseId, ...update } = input;
      return client.updateCase(caseId, update);
    },
    "ticket.search": (input: PegaSearchCasesInput = {}) => client.searchCases(input),
    "pega-customer-service.caseTypes.list": () => client.listCaseTypes(),
    "pega-customer-service.assignmentAction.submit": (input: PegaAssignmentActionInput) =>
      client.performAssignmentAction(input),
  };
}

export function createPegaCustomerServiceTicketingIntegration(
  options: PegaCustomerServiceTicketingIntegrationOptions = {},
) {
  const client = createPegaCustomerServiceTicketingClient(options);
  return defineIntegration({
    manifest: pegaCustomerServiceTicketingProviderManifestInput,
    metadata: { manifest: pegaCustomerServiceTicketingProviderManifest },
    operations: createPegaCustomerServiceTicketingOperationHandlers(client),
    credentials: pegaCustomerServiceIntegrationCredentials(options),
  });
}

function createMissingPegaCustomerServiceProviderClient(): PegaCustomerServiceTicketingClient {
  const missingClient = async (): Promise<never> => {
    throw new Error(
      "Configure Pega Customer Service with a host-injected providerClient or with baseUrl plus accessToken/auth headers.",
    );
  };
  return {
    createCase: missingClient,
    getCase: missingClient,
    updateCase: missingClient,
    performAssignmentAction: missingClient,
    searchCases: missingClient,
    listCaseTypes: missingClient,
    readiness: missingClient,
  };
}

function requirePegaCustomerServiceProviderClient(
  client: PegaCustomerServiceProviderClient,
): PegaCustomerServiceProviderClient {
  for (const method of [
    "createCase",
    "getCase",
    "updateCase",
    "performAssignmentAction",
    "searchCases",
    "listCaseTypes",
    "readiness",
  ] as const) {
    if (typeof client[method] !== "function") {
      throw new Error(`PegaCustomerServiceProviderClient must implement ${method}().`);
    }
  }
  return client;
}

function pegaCustomerServiceIntegrationCredentials(
  options: PegaCustomerServiceTicketingIntegrationOptions,
): PegaCustomerServiceJsonObject {
  return stripUndefined({
    providerClientConfigured: Boolean(options.providerClient ?? options.client) || undefined,
    baseUrl: options.baseUrl,
    apiBasePath: options.apiBasePath,
    apiAccessConfigured: hasPegaCustomerServiceAuthConfiguration(options) || undefined,
    fetchConfigured: options.fetch ? true : undefined,
    signalConfigured: options.signal ? true : undefined,
    timeoutMs: options.timeoutMs,
    retry: options.retry,
    headersConfigured: options.headers ? true : undefined,
  });
}

function hasPegaCustomerServiceRestConfiguration(options: PegaCustomerServiceTicketingClientOptions) {
  return Boolean(options.baseUrl && hasPegaCustomerServiceAuthConfiguration(options));
}

function hasPegaCustomerServiceAuthConfiguration(options: PegaCustomerServiceTicketingClientOptions) {
  if (options.accessToken) return true;
  if (!options.auth) return false;
  if (options.auth.type === "bearer") return Boolean(options.auth.accessToken);
  return Object.keys(options.auth.headers).length > 0;
}

function pegaCustomerServiceAuthHeaders(options: PegaCustomerServiceTicketingClientOptions): Record<string, string> {
  if (options.auth?.type === "headers") return options.auth.headers;
  if (options.auth?.type === "bearer") return { Authorization: `Bearer ${options.auth.accessToken}` };
  if (options.accessToken) return { Authorization: `Bearer ${options.accessToken}` };
  throw new Error("Pega Customer Service accessToken or auth headers are required.");
}

function normalizeBaseUrl(value: string | undefined, message: string) {
  if (!value) throw new Error(message);
  const url = new URL(value);
  return `${url.protocol}//${url.host}${url.pathname.replace(/\/+$/, "")}`;
}

function normalizeApiBasePath(value: string) {
  return `/${value.replace(/^\/+/, "").replace(/\/+$/, "")}`;
}

function providerUrl(
  baseUrl: string,
  path: string,
  query: PegaCustomerServiceProviderQuery | undefined,
) {
  const url = new URL(`${baseUrl}${path.startsWith("/") ? "" : "/"}${path}`);
  if (query) appendQuery(url, query);
  return url.toString();
}

function appendQuery(url: URL, query: PegaCustomerServiceProviderQuery) {
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
  optionHeaders: Record<string, string> | undefined,
  requestSpecificHeaders: Record<string, string> | undefined,
  hasBody: boolean,
) {
  const headers = new Headers({
    Accept: "application/json",
    ...authHeaders,
    ...(optionHeaders ?? {}),
    ...(requestSpecificHeaders ?? {}),
  });
  if (hasBody && !headers.has("Content-Type")) headers.set("Content-Type", "application/json");
  return headers;
}

function providerQuery(query: PegaCustomerServiceProviderQuery | undefined): Record<string, ProviderQueryValue> | undefined {
  return query as Record<string, ProviderQueryValue> | undefined;
}

function pathSegment(value: string | number | boolean) {
  return encodeURIComponent(String(value));
}

function pegaCreateCaseBody(input: PegaCreateCaseInput): PegaCustomerServiceProviderPayload {
  return stripUndefined({
    caseTypeID: input.caseTypeId,
    processID: input.processId,
    parentCaseID: input.parentCaseId,
    content: input.content,
    pageInstructions: input.pageInstructions,
    ...(input.fields ?? {}),
  });
}

function pegaUpdateCaseBody(input: PegaUpdateCaseInput): PegaCustomerServiceProviderPayload {
  return stripUndefined({
    content: input.content,
    pageInstructions: input.pageInstructions,
    ...(input.fields ?? {}),
  });
}

function pegaAssignmentActionBody(input: PegaAssignmentActionInput): PegaCustomerServiceProviderPayload {
  return stripUndefined({
    content: input.content,
    pageInstructions: input.pageInstructions,
    ...(input.fields ?? {}),
  });
}

function pegaSearchCasesQuery(input: PegaSearchCasesInput): PegaCustomerServiceProviderQuery {
  return stripUndefined({
    caseTypeID: input.caseTypeId,
    status: input.status,
    assignmentID: input.assignmentId,
    page: input.page,
    pageSize: input.pageSize,
    ...(input.fields ?? {}),
  });
}

function stripUndefined<T extends Record<string, unknown>>(input: T): T {
  return Object.fromEntries(Object.entries(input).filter(([, value]) => value !== undefined)) as T;
}

async function parsePegaCustomerServiceResponse<T>(response: Response, url: string): Promise<T> {
  const body = await parseJsonResponseBody(response);
  if (response.ok) {
    return (body === undefined ? {} : body) as T;
  }
  const headers = headersToRecord(response.headers);
  const responseMetadata: PegaCustomerServiceProviderApiErrorResponseMetadata = {
    statusText: response.statusText,
    headers,
    url,
    ...requestIdMetadata(headers),
  };
  throw new PegaCustomerServiceProviderApiError({
    status: response.status,
    message: providerErrorMessage(body, `Pega Customer Service request returned HTTP ${response.status}.`),
    body,
    response: responseMetadata,
  });
}

function normalizePegaCustomerServiceProviderJsonError(error: unknown, url: string): unknown {
  if (error instanceof PegaCustomerServiceProviderApiError) return error;
  if (!isRecord(error) || typeof error.status !== "number") return error;
  const body = error.payload;
  return new PegaCustomerServiceProviderApiError({
    status: error.status,
    message: providerErrorMessage(body, `Pega Customer Service request returned HTTP ${error.status}.`),
    body,
    response: {
      statusText: typeof error.statusText === "string" ? error.statusText : "",
      headers: {},
      url,
    },
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

function unwrapPegaResource(value: unknown): unknown {
  if (!isRecord(value)) return value;
  if ("data" in value) return value.data;
  return value;
}

function pegaCasesResult(value: unknown): PegaCasesResult {
  const unwrapped = unwrapPegaResource(value);
  if (Array.isArray(unwrapped)) return { cases: unwrapped as PegaCaseResource[] };
  if (!isRecord(unwrapped)) return { cases: [] };
  const cases = Array.isArray(unwrapped.cases)
    ? unwrapped.cases
    : Array.isArray(unwrapped.data)
      ? unwrapped.data
      : Array.isArray(unwrapped.results)
        ? unwrapped.results
        : [];
  const count = typeof unwrapped.count === "number" ? unwrapped.count : undefined;
  return {
    cases: cases as PegaCaseResource[],
    ...(count !== undefined ? { count } : {}),
  };
}

function pegaCaseTypes(value: unknown): PegaCaseTypeResource[] {
  const unwrapped = unwrapPegaResource(value);
  if (Array.isArray(unwrapped)) return unwrapped as PegaCaseTypeResource[];
  if (!isRecord(unwrapped)) return [];
  if (Array.isArray(unwrapped.caseTypes)) return unwrapped.caseTypes as PegaCaseTypeResource[];
  if (Array.isArray(unwrapped.casetypes)) return unwrapped.casetypes as PegaCaseTypeResource[];
  if (Array.isArray(unwrapped.data)) return unwrapped.data as PegaCaseTypeResource[];
  return [];
}

function providerErrorMessage(body: unknown, fallback: string): string {
  if (typeof body === "string" && body.trim()) return body;
  if (!isRecord(body)) return fallback;
  const nestedError = isRecord(body.error) ? body.error : undefined;
  const firstError = Array.isArray(body.errors) && isRecord(body.errors[0]) ? body.errors[0] : undefined;
  for (const candidate of [
    body.message,
    body.error_description,
    nestedError?.message,
    nestedError?.error_description,
    firstError?.message,
    firstError?.localizedValue,
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
  const requestId = headers["x-request-id"]
    ?? headers["request-id"]
    ?? headers["correlation-id"]
    ?? headers["x-correlation-id"];
  return requestId ? { requestId } : {};
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}
