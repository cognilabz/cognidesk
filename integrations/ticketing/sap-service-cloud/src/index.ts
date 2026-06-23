import type { ProviderCredentialStatusInput } from "@cognidesk/core";
import { defineIntegration } from "@cognidesk/integration-kit";
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
  tenantUrl: string;
  username?: string;
  password?: string;
  accessToken?: string;
  odataPath?: string;
  fetchCsrfToken?: boolean;
  fetch?: typeof fetch;
}

export interface SapServiceCloudCredentialStatusInput {
  tenantUrl?: string;
  username?: string;
  password?: string;
  accessToken?: string;
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

export interface SapServiceCloudTicketingClient {
  createServiceRequest(input: SapServiceCreateRequestInput): Promise<SapServiceRequestResource>;
  getServiceRequest(objectId: string): Promise<SapServiceRequestResource>;
  updateServiceRequest(objectId: string, input: SapServiceUpdateRequestInput, etag?: string): Promise<SapServiceRequestResource>;
  searchServiceRequests(input?: SapServiceSearchInput): Promise<SapServiceSearchResult>;
  readiness(): Promise<SapServiceSearchResult>;
}

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
  options: SapServiceCloudTicketingClientOptions,
): SapServiceCloudTicketingClient {
  const fetchImpl = options.fetch ?? fetch;
  return {
    async createServiceRequest(input) {
      const response = await sapServiceCloudRequest<SapODataEntityResponse<SapServiceRequestResource>>({
        options,
        fetch: fetchImpl,
        method: "POST",
        path: "/ServiceRequestCollection",
        body: createServiceRequestBody(input),
        csrf: options.fetchCsrfToken ?? true,
      });
      return unwrapEntity(response);
    },
    async getServiceRequest(objectId) {
      const response = await sapServiceCloudRequest<SapODataEntityResponse<SapServiceRequestResource>>({
        options,
        fetch: fetchImpl,
        method: "GET",
        path: `/ServiceRequestCollection('${encodeURIComponent(objectId)}')`,
      });
      return unwrapEntity(response);
    },
    async updateServiceRequest(objectId, input, etag) {
      const response = await sapServiceCloudRequest<SapODataEntityResponse<SapServiceRequestResource>>({
        options,
        fetch: fetchImpl,
        method: "PATCH",
        path: `/ServiceRequestCollection('${encodeURIComponent(objectId)}')`,
        body: updateServiceRequestBody(input),
        csrf: options.fetchCsrfToken ?? true,
        ...(etag ? { etag } : {}),
      });
      return unwrapEntity(response);
    },
    async searchServiceRequests(input = {}) {
      const response = await sapServiceCloudRequest<SapODataCollectionResponse<SapServiceRequestResource>>({
        options,
        fetch: fetchImpl,
        method: "GET",
        path: `/ServiceRequestCollection${sapODataQuery(input)}`,
      });
      return unwrapCollection(response);
    },
    async readiness() {
      return this.searchServiceRequests({
        top: 1,
        select: ["ObjectID", "ID", "Name", "StatusCode"],
      });
    },
  };
}

export function sapServiceCloudTicketingCredentialStatuses(
  input: SapServiceCloudCredentialStatusInput,
): ProviderCredentialStatusInput[] {
  const hasBasic = Boolean(input.username && input.password);
  const hasBearer = Boolean(input.accessToken);
  return [
    {
      providerPackageId: sapServiceCloudTicketingProviderManifest.id,
      requirementId: "sap-service-cloud-tenant",
      state: input.tenantUrl ? "configured" : "missing",
      message: input.tenantUrl
        ? "SAP Service Cloud tenant URL is configured."
        : "An SAP Service Cloud tenant URL is required.",
    },
    {
      providerPackageId: sapServiceCloudTicketingProviderManifest.id,
      requirementId: "sap-service-cloud-api-access",
      state: hasBasic || hasBearer ? "configured" : "missing",
      scopes: input.scopes ?? ["ServiceRequestCollection:read", "ServiceRequestCollection:write"],
      message: hasBasic || hasBearer
        ? "SAP Service Cloud OData API access is configured."
        : "SAP Service Cloud OAuth bearer access or Basic Auth credentials are required.",
    },
  ];
}

export function createSapServiceCloudTicketingLiveChecks(options: SapServiceCloudLiveCheckOptions) {
  return [{
    id: "service-request-collection",
    description: "SAP Service Cloud OData ServiceRequestCollection can be queried with the configured credentials.",
    requiredCredentialIds: ["sap-service-cloud-tenant", "sap-service-cloud-api-access"],
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

export function createSapServiceCloudTicketingIntegration(options: SapServiceCloudTicketingIntegrationOptions) {
  const client = options.client ?? createSapServiceCloudTicketingClient(options);
  return defineIntegration({
    manifest: sapServiceCloudTicketingProviderManifest,
    operations: createSapServiceCloudTicketingOperationHandlers(client),
    credentials: options,
  });
}

function createServiceRequestBody(input: SapServiceCreateRequestInput) {
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

function updateServiceRequestBody(input: SapServiceUpdateRequestInput) {
  return stripUndefined({
    Name: input.name,
    ServicePriorityCode: input.servicePriorityCode,
    ObjectServiceIssueCategoryID: input.objectServiceIssueCategoryId,
    StatusCode: input.statusCode,
    ...(input.fields ?? {}),
  });
}

function sapODataQuery(input: SapServiceSearchInput) {
  const params = new URLSearchParams();
  params.set("$format", "json");
  if (input.filter) params.set("$filter", input.filter);
  if (input.select?.length) params.set("$select", input.select.join(","));
  if (input.expand?.length) params.set("$expand", input.expand.join(","));
  if (input.orderBy) params.set("$orderby", input.orderBy);
  if (input.top !== undefined) params.set("$top", String(input.top));
  if (input.skip !== undefined) params.set("$skip", String(input.skip));
  if (input.inlineCount) params.set("$inlinecount", input.inlineCount);
  return `?${params}`;
}

async function sapServiceCloudRequest<T>(input: {
  options: SapServiceCloudTicketingClientOptions;
  fetch: typeof fetch;
  method: "GET" | "POST" | "PATCH";
  path: string;
  body?: SapServiceCloudProviderPayload;
  csrf?: boolean;
  etag?: string;
}): Promise<T> {
  const baseUrl = `${normalizeTenantUrl(input.options.tenantUrl)}${input.options.odataPath ?? "/sap/c4c/odata/v1/c4codataapi"}`;
  const csrfHeaders = input.csrf ? await getSapCsrfHeaders(input.options, input.fetch, baseUrl) : {};
  const response = await input.fetch(`${baseUrl}${input.path}`, {
    method: input.method,
    headers: {
      accept: "application/json",
      ...(input.body ? { "content-type": "application/json" } : {}),
      ...(input.etag ? { "if-match": input.etag } : {}),
      ...authHeaders(input.options),
      ...csrfHeaders,
    },
    ...(input.body ? { body: JSON.stringify(input.body) } : {}),
  });
  const text = await response.text();
  const body = text ? JSON.parse(text) as T & SapODataErrorResponse : {} as T & SapODataErrorResponse;
  if (!response.ok) throw new Error(sapErrorMessage(body, response.status));
  return body as T;
}

async function getSapCsrfHeaders(
  options: SapServiceCloudTicketingClientOptions,
  fetchImpl: typeof fetch,
  baseUrl: string,
) {
  const response = await fetchImpl(`${baseUrl}/$metadata`, {
    method: "GET",
    headers: {
      accept: "application/xml",
      "x-csrf-token": "Fetch",
      ...authHeaders(options),
    },
  });
  if (!response.ok) return {};
  const token = response.headers.get("x-csrf-token");
  const cookie = response.headers.get("set-cookie");
  return {
    ...(token ? { "x-csrf-token": token } : {}),
    ...(cookie ? { cookie } : {}),
  };
}

function normalizeTenantUrl(tenantUrl: string) {
  if (!tenantUrl) throw new Error("SAP Service Cloud tenantUrl is required.");
  const withProtocol = /^https?:\/\//i.test(tenantUrl) ? tenantUrl : `https://${tenantUrl}`;
  const url = new URL(withProtocol);
  return `${url.protocol}//${url.host}`;
}

function authHeaders(options: SapServiceCloudTicketingClientOptions) {
  if (options.accessToken) return { authorization: `Bearer ${options.accessToken}` };
  if (options.username && options.password) {
    return {
      authorization: `Basic ${Buffer.from(`${options.username}:${options.password}`).toString("base64")}`,
    };
  }
  throw new Error("SAP Service Cloud API access requires either accessToken or username and password.");
}

interface SapODataEntityResponse<T> {
  d?: T;
}

interface SapODataCollectionResponse<T> {
  d?: {
    __count?: string;
    results?: T[];
  };
}

interface SapODataErrorResponse {
  error?: {
    message?: string | { value?: string };
  };
}

function unwrapEntity<T>(response: SapODataEntityResponse<T>): T {
  return response.d ?? {} as T;
}

function unwrapCollection<T>(response: SapODataCollectionResponse<T>): SapServiceSearchResult<T> {
  return {
    results: response.d?.results ?? [],
    ...(response.d?.__count !== undefined ? { count: response.d.__count } : {}),
  };
}

function sapErrorMessage(body: SapODataErrorResponse, status: number) {
  const message = body.error?.message;
  if (typeof message === "string") return message;
  return message?.value ?? `SAP Service Cloud OData API returned ${status}.`;
}

function stripUndefined<T extends SapServiceCloudJsonObject>(input: T): T {
  return Object.fromEntries(Object.entries(input).filter(([, value]) => value !== undefined)) as T;
}
