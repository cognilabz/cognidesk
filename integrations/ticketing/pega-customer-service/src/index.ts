import type { ProviderCredentialStatusInput } from "@cognidesk/core";
import { defineIntegration } from "@cognidesk/integration-kit";
import { pegaCustomerServiceTicketingProviderManifest } from "./manifest.js";

export { pegaCustomerServiceTicketingProviderManifest } from "./manifest.js";

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
  instanceUrl: string;
  username?: string;
  password?: string;
  accessToken?: string;
  apiBasePath?: string;
  fetch?: typeof fetch;
}

export interface PegaCustomerServiceCredentialStatusInput {
  instanceUrl?: string;
  username?: string;
  password?: string;
  accessToken?: string;
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

export interface PegaCustomerServiceTicketingClient {
  createCase(input: PegaCreateCaseInput): Promise<PegaCaseResource>;
  getCase(caseId: string): Promise<PegaCaseResource>;
  updateCase(caseId: string, input: PegaUpdateCaseInput): Promise<PegaCaseResource>;
  performAssignmentAction(input: PegaAssignmentActionInput): Promise<PegaCustomerServiceProviderResponse>;
  searchCases(input?: PegaSearchCasesInput): Promise<PegaCasesResult>;
  listCaseTypes(): Promise<PegaCaseTypeResource[]>;
  readiness(): Promise<PegaCaseTypeResource[]>;
}

export interface PegaCustomerServiceLiveCheckOptions extends PegaCustomerServiceTicketingClientOptions {
  client?: Pick<PegaCustomerServiceTicketingClient, "readiness">;
}

export interface PegaReadCaseOperationInput {
  caseId: string;
}

export interface PegaUpdateCaseOperationInput extends PegaUpdateCaseInput {
  caseId: string;
}

export interface PegaCustomerServiceTicketingIntegrationOptions extends PegaCustomerServiceTicketingClientOptions {
  client?: PegaCustomerServiceTicketingClient;
}

export function createPegaCustomerServiceTicketingClient(
  options: PegaCustomerServiceTicketingClientOptions,
): PegaCustomerServiceTicketingClient {
  const fetchImpl = options.fetch ?? fetch;
  return {
    async createCase(input) {
      return pegaRequest<PegaCaseResource>({
        options,
        fetch: fetchImpl,
        method: "POST",
        path: "/cases",
        body: createCaseBody(input),
      });
    },
    async getCase(caseId) {
      return pegaRequest<PegaCaseResource>({
        options,
        fetch: fetchImpl,
        method: "GET",
        path: `/cases/${encodeURIComponent(caseId)}`,
      });
    },
    async updateCase(caseId, input) {
      return pegaRequest<PegaCaseResource>({
        options,
        fetch: fetchImpl,
        method: "PUT",
        path: `/cases/${encodeURIComponent(caseId)}`,
        body: updateCaseBody(input),
      });
    },
    async performAssignmentAction(input) {
      return pegaRequest<PegaCustomerServiceJsonObject>({
        options,
        fetch: fetchImpl,
        method: "PATCH",
        path: `/assignments/${encodeURIComponent(input.assignmentId)}/actions/${encodeURIComponent(input.actionId)}`,
        body: assignmentActionBody(input),
        ...(input.eTag ? { headers: { "if-match": input.eTag } } : {}),
      });
    },
    async searchCases(input = {}) {
      const response = await pegaRequest<PegaCasesApiResponse<PegaCaseResource>>({
        options,
        fetch: fetchImpl,
        method: "GET",
        path: `/cases${pegaCasesQuery(input)}`,
      });
      return {
        cases: response.cases ?? response.data ?? [],
        ...(response.count !== undefined ? { count: response.count } : {}),
      };
    },
    async listCaseTypes() {
      const response = await pegaRequest<PegaCaseTypesApiResponse>({
        options,
        fetch: fetchImpl,
        method: "GET",
        path: "/casetypes",
      });
      return response.caseTypes ?? response.data ?? [];
    },
    async readiness() {
      return this.listCaseTypes();
    },
  };
}

export function pegaCustomerServiceTicketingCredentialStatuses(
  input: PegaCustomerServiceCredentialStatusInput,
): ProviderCredentialStatusInput[] {
  const hasBasic = Boolean(input.username && input.password);
  const hasBearer = Boolean(input.accessToken);
  return [
    {
      providerPackageId: pegaCustomerServiceTicketingProviderManifest.id,
      requirementId: "pega-customer-service-instance",
      state: input.instanceUrl ? "configured" : "missing",
      message: input.instanceUrl
        ? "Pega Customer Service instance URL is configured."
        : "A Pega Customer Service instance URL is required.",
    },
    {
      providerPackageId: pegaCustomerServiceTicketingProviderManifest.id,
      requirementId: "pega-customer-service-api-access",
      state: hasBasic || hasBearer ? "configured" : "missing",
      scopes: input.scopes ?? ["cases:read", "cases:write", "casetypes:read"],
      message: hasBasic || hasBearer
        ? "Pega DX API access is configured."
        : "Pega DX API OAuth bearer access or Basic Auth credentials are required.",
    },
  ];
}

export function createPegaCustomerServiceTicketingLiveChecks(options: PegaCustomerServiceLiveCheckOptions) {
  return [{
    id: "case-types",
    description: "Pega DX API case types endpoint can be queried with the configured credentials.",
    requiredCredentialIds: ["pega-customer-service-instance", "pega-customer-service-api-access"],
    async run(context: { signal?: AbortSignal }) {
      const client = options.client ?? createPegaCustomerServiceTicketingClient(options);
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
  options: PegaCustomerServiceTicketingIntegrationOptions,
) {
  const client = options.client ?? createPegaCustomerServiceTicketingClient(options);
  return defineIntegration({
    manifest: pegaCustomerServiceTicketingProviderManifest,
    operations: createPegaCustomerServiceTicketingOperationHandlers(client),
    credentials: options,
  });
}

function createCaseBody(input: PegaCreateCaseInput) {
  return stripUndefined({
    caseTypeID: input.caseTypeId,
    processID: input.processId,
    parentCaseID: input.parentCaseId,
    content: input.content,
    pageInstructions: input.pageInstructions,
    ...(input.fields ?? {}),
  });
}

function updateCaseBody(input: PegaUpdateCaseInput) {
  return stripUndefined({
    content: input.content,
    pageInstructions: input.pageInstructions,
    ...(input.fields ?? {}),
  });
}

function assignmentActionBody(input: PegaAssignmentActionInput) {
  return stripUndefined({
    content: input.content,
    pageInstructions: input.pageInstructions,
    ...(input.fields ?? {}),
  });
}

function pegaCasesQuery(input: PegaSearchCasesInput) {
  const params = new URLSearchParams();
  if (input.caseTypeId) params.set("caseTypeID", input.caseTypeId);
  if (input.status) params.set("status", input.status);
  if (input.assignmentId) params.set("assignmentID", input.assignmentId);
  if (input.page !== undefined) params.set("page", String(input.page));
  if (input.pageSize !== undefined) params.set("pageSize", String(input.pageSize));
  for (const [key, value] of Object.entries(input.fields ?? {})) {
    params.set(key, String(value));
  }
  return params.size ? `?${params}` : "";
}

async function pegaRequest<T>(input: {
  options: PegaCustomerServiceTicketingClientOptions;
  fetch: typeof fetch;
  method: "GET" | "POST" | "PUT" | "PATCH";
  path: string;
  body?: PegaCustomerServiceProviderPayload;
  headers?: Record<string, string>;
}): Promise<T> {
  const baseUrl = `${normalizeInstanceUrl(input.options.instanceUrl)}${input.options.apiBasePath ?? "/api/v1"}`;
  const response = await input.fetch(`${baseUrl}${input.path}`, {
    method: input.method,
    headers: {
      accept: "application/json",
      ...(input.body ? { "content-type": "application/json" } : {}),
      ...(input.headers ?? {}),
      ...authHeaders(input.options),
    },
    ...(input.body ? { body: JSON.stringify(input.body) } : {}),
  });
  const text = await response.text();
  const body = text ? JSON.parse(text) as T & PegaErrorResponse : {} as T & PegaErrorResponse;
  if (!response.ok) throw new Error(pegaErrorMessage(body, response.status));
  return body as T;
}

function normalizeInstanceUrl(instanceUrl: string) {
  if (!instanceUrl) throw new Error("Pega Customer Service instanceUrl is required.");
  const withProtocol = /^https?:\/\//i.test(instanceUrl) ? instanceUrl : `https://${instanceUrl}`;
  const url = new URL(withProtocol);
  return `${url.protocol}//${url.host}${url.pathname.replace(/\/+$/, "")}`;
}

function authHeaders(options: PegaCustomerServiceTicketingClientOptions) {
  if (options.accessToken) return { authorization: `Bearer ${options.accessToken}` };
  if (options.username && options.password) {
    return {
      authorization: `Basic ${Buffer.from(`${options.username}:${options.password}`).toString("base64")}`,
    };
  }
  throw new Error("Pega Customer Service API access requires either accessToken or username and password.");
}

interface PegaCasesApiResponse<T> {
  cases?: T[];
  data?: T[];
  count?: number;
}

interface PegaCaseTypesApiResponse {
  caseTypes?: PegaCaseTypeResource[];
  data?: PegaCaseTypeResource[];
}

interface PegaErrorResponse {
  message?: string;
  error?: string;
  errors?: Array<{ message?: string; ValidationMessage?: string; ID?: string }>;
}

function pegaErrorMessage(body: PegaErrorResponse, status: number) {
  const firstError = body.errors?.[0];
  return firstError?.ValidationMessage
    ?? firstError?.message
    ?? firstError?.ID
    ?? body.message
    ?? body.error
    ?? `Pega Customer Service API returned ${status}.`;
}

function stripUndefined<T extends PegaCustomerServiceJsonObject>(input: T): T {
  return Object.fromEntries(Object.entries(input).filter(([, value]) => value !== undefined)) as T;
}
