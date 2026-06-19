import type { ProviderCredentialStatusInput } from "@cognidesk/core";
import { defineIntegrationProviderPackage as defineProviderPackage } from "../../provider-manifest.js";

export const sapServiceCloudTicketingProviderManifest = defineProviderPackage({
  id: "ticketing.sap-service-cloud",
  name: "SAP Service Cloud",
  packageName: "@cognidesk/integrations",
  provider: "sap-service-cloud",
  category: "ticketing",
  trustLevel: "official",
  directions: ["bidirectional"],
  channelAudiences: ["customer-facing", "internal-support", "mixed"],
  coverage: {
    scope: "support-workflow-subset",
    notes: [
      "Coverage is typed for SAP Cloud for Customer OData ServiceRequestCollection create, read by ObjectID, patch, collection query, CSRF token preflight, and readiness checks used by Cognidesk support workflows.",
      "This is not full SAP Service Cloud API coverage; notes, descriptions, attachments, involved parties, service categories, code-list discovery, custom OData services, communication arrangements, workflow actions, v2 migration policy, and broader SAP Cloud for Customer APIs remain outside this adapter.",
    ],
    evidence: [
      { label: "SAP Cloud for Customer OData API", url: "https://help.sap.com/docs/sap-cloud-for-customer/odata-services/sap-cloud-for-customer-odata-api" },
      { label: "SAP Cloud for Customer OData API overview", url: "https://help.sap.com/docs/sap-cloud-for-customer/1364b70b9cbb417ea5e2d80e966d4f49/6c0a463cc9ca450cbd01a9a5057ce682.html" },
      { label: "SAP Cloud for Customer OData API v2 Reference", url: "https://help.sap.com/docs/r/1364b70b9cbb417ea5e2d80e966d4f49/LATEST/en-US/6cb5cd1ebe1c49d8b99c22afa29aa5d4.html" },
      { label: "SAP Cloud for Customer OData Services PDF", url: "https://help.sap.com/doc/77979cd206da4b7f9bd264b390d373fc/CLOUD/en-US/OData_Services.pdf" },
    ],
  },
  credentialRequirements: [
    {
      id: "sap-service-cloud-tenant",
      label: "SAP Service Cloud tenant URL",
      description: "The SDK user's SAP Cloud for Customer or SAP Service Cloud tenant URL.",
      required: true,
    },
    {
      id: "sap-service-cloud-api-access",
      label: "SAP Service Cloud OData API access",
      description: "Server-side Basic Auth, communication user/arrangement, or OAuth bearer access authorized for the SAP Cloud for Customer OData API.",
      scopes: ["ServiceRequestCollection:read", "ServiceRequestCollection:write"],
      required: true,
      metadata: {
        scopeKind: "internal-capability-labels",
        privilegeGuidance: "These strings are Cognidesk capability labels for ServiceRequestCollection access, not official SAP OAuth scope names. SAP authorization depends on communication arrangements, business user permissions, and exposed OData services.",
      },
    },
  ],
  capabilities: [
    {
      capability: "handoff",
      label: "Create SAP Service Cloud handoff",
      description: "Creates or updates SAP Service Cloud ServiceRequestCollection records as SDK-configured support handoff targets.",
      audiences: ["customer-facing", "internal-support", "mixed"],
      providerObjects: [{ kind: "sapServiceRequest", label: "SAP Service Request", schemaName: "ServiceRequestCollection" }],
      requiresCredential: true,
      sideEffect: true,
      exposesSensitiveData: true,
      changesWorkflow: true,
    },
    {
      capability: "create-provider-object",
      label: "Create SAP service requests",
      description: "Creates SAP Service Cloud ServiceRequestCollection tickets from SDK-user-selected workflows.",
      audiences: ["customer-facing", "internal-support", "mixed"],
      providerObjects: [{ kind: "sapServiceRequest", label: "SAP Service Request", schemaName: "ServiceRequestCollection" }],
      requiresCredential: true,
      sideEffect: true,
      exposesSensitiveData: true,
      changesWorkflow: true,
    },
    {
      capability: "read-provider-object",
      label: "Read SAP service requests",
      description: "Reads SAP Service Cloud service requests by ObjectID.",
      audiences: ["customer-facing", "internal-support", "mixed"],
      providerObjects: [{ kind: "sapServiceRequest", label: "SAP Service Request", schemaName: "ServiceRequestCollection" }],
      requiresCredential: true,
      exposesSensitiveData: true,
    },
    {
      capability: "update-provider-object",
      label: "Update SAP service requests",
      description: "Updates SAP Service Cloud ticket fields, statuses, priorities, or SDK-user custom fields.",
      audiences: ["internal-support", "mixed"],
      providerObjects: [{ kind: "sapServiceRequest", label: "SAP Service Request", schemaName: "ServiceRequestCollection" }],
      requiresCredential: true,
      sideEffect: true,
      exposesSensitiveData: true,
      changesWorkflow: true,
    },
    {
      capability: "search-provider-object",
      label: "Search SAP service requests",
      description: "Queries SAP Service Cloud ServiceRequestCollection with SDK-user-supplied OData filters and projections.",
      audiences: ["customer-facing", "internal-support", "mixed"],
      providerObjects: [{ kind: "sapServiceRequest", label: "SAP Service Request", schemaName: "ServiceRequestCollection" }],
      requiresCredential: true,
      exposesSensitiveData: true,
    },
  ],
  privacyNotes: [
    "SAP service requests can contain customer account/contact details, ticket descriptions, categories, priorities, involved parties, notes, and internal routing data.",
    "SAP API credentials stay server-side and Studio receives only readiness and scope status.",
  ],
  limitations: [
    "SAP tenant OData exposure, communication arrangements, required fields, statuses, code lists, workflow rules, and extensions are SDK-user configuration.",
    "SDK users own escalation timing, customer matching, field mapping, reply visibility, retention, and notification policy before calling SAP APIs.",
  ],
  metadata: {
    checkedProviderApiCoverage: {
      verifiedAt: "2026-06-18",
      sourceKind: "checked-endpoint-family-inventory",
      coverageArtifact: "docs/provider-coverage/sap-service-cloud-checked-c4c-odata-2026-06-18.inventory.json",
      checkedFamilyCount: 3,
      implementedFamilyCount: 2,
      gapFamilyCount: 1,
      implementedOperationCount: 5,
    },
    channelCoverage: {
      serviceRequests: "typed-create-read-update-search",
      csrfToken: "typed-selected",
      readinessSearch: "typed-search",
      attachmentFolder: "provider-supported-not-typed",
      notesInvolvedPartiesCodeLists: "provider-supported-not-typed",
      workflowRulesCommunicationArrangements: "not-covered",
    },
  },
  maintainers: [{ name: "Cognidesk", type: "official" }],
});

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
