import type { ProviderCredentialStatusInput } from "@cognidesk/core";
import { defineIntegrationProviderPackage as defineProviderPackage } from "../../provider-manifest.js";

export const ORACLE_SERVICE_DEFAULT_API_VERSION = "11.13.18.05";

export const oracleServiceTicketingProviderManifest = defineProviderPackage({
  id: "ticketing.oracle-service",
  name: "Oracle Service",
  packageName: "@cognidesk/integrations",
  provider: "oracle-service",
  category: "ticketing",
  trustLevel: "official",
  directions: ["bidirectional"],
  channelAudiences: ["customer-facing", "internal-support", "mixed"],
  coverage: {
    scope: "support-workflow-subset",
    notes: [
      "Coverage is typed for Oracle Fusion Service serviceRequests create, read by SrNumber, patch, collection search, child message creation, and readiness checks used by Cognidesk support workflows.",
      "This is not full Oracle Fusion Service API coverage; service request child resources such as activities, attachments, contacts, message attachment/channel-communication lifecycle, milestones, resources, smart actions, tags, LOV/metadata behavior, workflow rules, queues, privileges, and broader Fusion CX APIs remain outside this adapter.",
    ],
    evidence: [
      { label: "Oracle Fusion Service serviceRequests overview", url: "https://docs.oracle.com/en/cloud/saas/sales/faaps/api-internal-service-requests.html" },
      { label: "Oracle Fusion Service create service request", url: "https://docs.oracle.com/en/cloud/saas/sales/faaps/op-servicerequests-post.html" },
      { label: "Oracle Fusion Service get all service requests", url: "https://docs.oracle.com/en/cloud/saas/sales/faaps/op-servicerequests-get.html" },
      { label: "Oracle Fusion Service get service request", url: "https://docs.oracle.com/en/cloud/saas/sales/faaps/op-servicerequests-srnumber-get.html" },
      { label: "Oracle Fusion Service update service request", url: "https://docs.oracle.com/en/cloud/saas/sales/faaps/op-servicerequests-srnumber-patch.html" },
      { label: "Oracle Fusion Service create service request message", url: "https://docs.oracle.com/en/cloud/saas/sales/faaps/op-servicerequests-srnumber-child-messages-post.html" },
    ],
  },
  credentialRequirements: [
    {
      id: "oracle-service-instance",
      label: "Oracle Fusion Service instance URL",
      description: "The SDK user's Oracle Fusion Service host, for example https://example.fa.oraclecloud.com.",
      required: true,
    },
    {
      id: "oracle-service-api-access",
      label: "Oracle Fusion Service REST API access",
      description: "Server-side OAuth bearer access or Basic Auth credentials for Oracle Fusion Service REST APIs with service roles and privileges for serviceRequests and child messages.",
      scopes: ["serviceRequests:read", "serviceRequests:write"],
      required: true,
      metadata: {
        scopeKind: "internal-capability-labels",
        privilegeGuidance: "These strings are Cognidesk capability labels, not official Oracle OAuth scope names. Oracle access depends on Fusion Service roles and privileges for service request read/create/update/search and message creation.",
      },
    },
  ],
  capabilities: [
    {
      capability: "create-provider-object",
      label: "Create Oracle service requests",
      description: "Creates Oracle Fusion Service serviceRequests records from SDK-user-selected support workflows.",
      audiences: ["customer-facing", "internal-support", "mixed"],
      providerObjects: [
        { kind: "oracleServiceRequest", label: "Oracle Service Request", schemaName: "serviceRequests" },
        { kind: "oracleServiceRequestMessage", label: "Oracle Service Request Message", schemaName: "serviceRequests.child.messages" },
      ],
      requiresCredential: true,
      sideEffect: true,
      exposesSensitiveData: true,
      changesWorkflow: true,
    },
    {
      capability: "read-provider-object",
      label: "Read Oracle service requests",
      description: "Reads Oracle Fusion Service service request records by SrNumber.",
      audiences: ["customer-facing", "internal-support", "mixed"],
      providerObjects: [{ kind: "oracleServiceRequest", label: "Oracle Service Request", schemaName: "serviceRequests" }],
      requiresCredential: true,
      exposesSensitiveData: true,
    },
    {
      capability: "update-provider-object",
      label: "Update Oracle service requests",
      description: "Updates Oracle Fusion Service service request status, queue, assignee, resolution, or custom fields.",
      audiences: ["internal-support", "mixed"],
      providerObjects: [{ kind: "oracleServiceRequest", label: "Oracle Service Request", schemaName: "serviceRequests" }],
      requiresCredential: true,
      sideEffect: true,
      exposesSensitiveData: true,
      changesWorkflow: true,
    },
    {
      capability: "search-provider-object",
      label: "Search Oracle service requests",
      description: "Queries Oracle Fusion Service service requests with SDK-user-supplied q, finder, fields, and paging controls.",
      audiences: ["customer-facing", "internal-support", "mixed"],
      providerObjects: [{ kind: "oracleServiceRequest", label: "Oracle Service Request", schemaName: "serviceRequests" }],
      requiresCredential: true,
      exposesSensitiveData: true,
    },
    {
      capability: "handoff",
      label: "Attach handoff to Oracle Service",
      description: "Provides Oracle service request operations for SDK-user-configured human handoff workflows.",
      audiences: ["customer-facing", "internal-support", "mixed"],
      providerObjects: [
        { kind: "oracleServiceRequest", label: "Oracle Service Request", schemaName: "serviceRequests" },
        { kind: "oracleServiceRequestMessage", label: "Oracle Service Request Message", schemaName: "serviceRequests.child.messages" },
      ],
      requiresCredential: true,
      sideEffect: true,
      exposesSensitiveData: true,
      changesWorkflow: true,
    },
  ],
  privacyNotes: [
    "Oracle service requests can contain customer identity, problem descriptions, service profile data, queue and assignee details, and internal resolution notes.",
    "Oracle credentials stay server-side and are represented in Studio only as credential readiness and scope status.",
  ],
  limitations: [
    "Oracle Service categories, required fields, queues, assignment rules, milestones, extensions, and privileges are owned by the SDK user's Fusion Service environment.",
    "SDK users own handoff timing, field mapping, customer identity matching, visibility, consent, notification policy, and retention before calling Oracle APIs.",
  ],
  metadata: {
    checkedProviderApiCoverage: {
      verifiedAt: "2026-06-18",
      sourceKind: "checked-endpoint-family-inventory",
      coverageArtifact: "docs/provider-coverage/oracle-service-checked-service-requests-2026-06-18.inventory.json",
      checkedFamilyCount: 5,
      implementedFamilyCount: 3,
      gapFamilyCount: 2,
      implementedOperationCount: 5,
    },
    channelCoverage: {
      serviceRequests: "typed-create-read-update-search",
      serviceRequestMessages: "typed-create",
      readinessSearch: "typed-search",
      attachments: "provider-supported-not-typed",
      activitiesContactsMilestones: "provider-supported-not-typed",
      queuesSmartActionsWorkflowRules: "not-covered",
    },
  },
  maintainers: [{ name: "Cognidesk", type: "official" }],
});

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
  instanceUrl: string;
  username?: string;
  password?: string;
  accessToken?: string;
  apiVersion?: string;
  fetch?: typeof fetch;
}

export interface OracleServiceCredentialStatusInput {
  instanceUrl?: string;
  username?: string;
  password?: string;
  accessToken?: string;
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

export interface OracleServiceTicketingClient {
  createServiceRequest(input: OracleServiceCreateRequestInput): Promise<OracleServiceRequestResource>;
  getServiceRequest(srNumber: string): Promise<OracleServiceRequestResource>;
  updateServiceRequest(srNumber: string, input: OracleServiceUpdateRequestInput): Promise<OracleServiceRequestResource>;
  createServiceRequestMessage(input: OracleServiceCreateMessageInput): Promise<OracleServiceProviderResponse>;
  searchServiceRequests(input?: OracleServiceSearchInput): Promise<OracleServiceSearchResult>;
  readiness(): Promise<OracleServiceSearchResult>;
}

export interface OracleServiceLiveCheckOptions extends OracleServiceTicketingClientOptions {
  client?: Pick<OracleServiceTicketingClient, "readiness">;
}

export function createOracleServiceTicketingClient(
  options: OracleServiceTicketingClientOptions,
): OracleServiceTicketingClient {
  const fetchImpl = options.fetch ?? fetch;
  return {
    async createServiceRequest(input) {
      return oracleServiceRequest<OracleServiceRequestResource>({
        options,
        fetch: fetchImpl,
        method: "POST",
        path: "/serviceRequests",
        body: createServiceRequestBody(input),
      });
    },
    async getServiceRequest(srNumber) {
      return oracleServiceRequest<OracleServiceRequestResource>({
        options,
        fetch: fetchImpl,
        method: "GET",
        path: `/serviceRequests/${encodeURIComponent(srNumber)}`,
      });
    },
    async updateServiceRequest(srNumber, input) {
      return oracleServiceRequest<OracleServiceRequestResource>({
        options,
        fetch: fetchImpl,
        method: "PATCH",
        path: `/serviceRequests/${encodeURIComponent(srNumber)}`,
        body: updateServiceRequestBody(input),
      });
    },
    async createServiceRequestMessage(input) {
      return oracleServiceRequest<OracleServiceJsonObject>({
        options,
        fetch: fetchImpl,
        method: "POST",
        path: `/serviceRequests/${encodeURIComponent(input.srNumber)}/child/messages`,
        body: {
          MessageTypeCd: input.messageTypeCode,
          ...(input.messageContent ? { MessageContent: input.messageContent } : {}),
          ...(input.statusCode ? { StatusCd: input.statusCode } : {}),
          ...(input.socialPrivateFlag !== undefined ? { SocialPrivateFlag: input.socialPrivateFlag } : {}),
          ...(input.sourceCode ? { SourceCd: input.sourceCode } : {}),
          ...(input.channelTypeCode ? { ChannelTypeCd: input.channelTypeCode } : {}),
          ...(input.fields ?? {}),
        },
      });
    },
    async searchServiceRequests(input = {}) {
      return oracleServiceRequest<OracleServiceSearchResult>({
        options,
        fetch: fetchImpl,
        method: "GET",
        path: `/serviceRequests${oracleQuery(input)}`,
      });
    },
    async readiness() {
      return this.searchServiceRequests({
        limit: 1,
        fields: ["SrId", "SrNumber", "Title", "StatusCd"],
        onlyData: true,
      });
    },
  };
}

export function oracleServiceTicketingCredentialStatuses(
  input: OracleServiceCredentialStatusInput,
): ProviderCredentialStatusInput[] {
  const hasBasic = Boolean(input.username && input.password);
  const hasBearer = Boolean(input.accessToken);
  return [
    {
      providerPackageId: oracleServiceTicketingProviderManifest.id,
      requirementId: "oracle-service-instance",
      state: input.instanceUrl ? "configured" : "missing",
      message: input.instanceUrl
        ? "Oracle Fusion Service instance URL is configured."
        : "An Oracle Fusion Service instance URL is required.",
    },
    {
      providerPackageId: oracleServiceTicketingProviderManifest.id,
      requirementId: "oracle-service-api-access",
      state: hasBasic || hasBearer ? "configured" : "missing",
      scopes: input.scopes ?? ["serviceRequests:read", "serviceRequests:write"],
      message: hasBasic || hasBearer
        ? "Oracle Fusion Service REST API access is configured."
        : "Oracle Fusion Service OAuth bearer access or Basic Auth credentials are required.",
    },
  ];
}

export function createOracleServiceTicketingLiveChecks(options: OracleServiceLiveCheckOptions) {
  return [{
    id: "service-requests",
    description: "Oracle Fusion Service serviceRequests endpoint can be queried with the configured credentials.",
    requiredCredentialIds: ["oracle-service-instance", "oracle-service-api-access"],
    async run(context: { signal?: AbortSignal }) {
      const client = options.client ?? createOracleServiceTicketingClient(options);
      const result = await client.readiness();
      if (context.signal?.aborted) throw new Error("Oracle Service live serviceRequests check aborted.");
      return { details: { sampleCount: result.items.length, hasMore: result.hasMore } };
    },
  }];
}

function createServiceRequestBody(input: OracleServiceCreateRequestInput) {
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

function updateServiceRequestBody(input: OracleServiceUpdateRequestInput) {
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

function oracleQuery(input: OracleServiceSearchInput) {
  const params = new URLSearchParams();
  if (input.q) params.set("q", input.q);
  if (input.finder) params.set("finder", input.finder);
  if (input.fields?.length) params.set("fields", input.fields.join(","));
  if (input.expand?.length) params.set("expand", input.expand.join(","));
  if (input.orderBy) params.set("orderBy", input.orderBy);
  if (input.limit !== undefined) params.set("limit", String(input.limit));
  if (input.offset !== undefined) params.set("offset", String(input.offset));
  if (input.onlyData !== undefined) params.set("onlyData", String(input.onlyData));
  return params.size ? `?${params}` : "";
}

async function oracleServiceRequest<T>(input: {
  options: OracleServiceTicketingClientOptions;
  fetch: typeof fetch;
  method: "GET" | "POST" | "PATCH";
  path: string;
  body?: OracleServiceProviderPayload;
}): Promise<T> {
  const baseUrl = `${normalizeInstanceUrl(input.options.instanceUrl)}/crmRestApi/resources/${
    input.options.apiVersion ?? ORACLE_SERVICE_DEFAULT_API_VERSION
  }`;
  const response = await input.fetch(`${baseUrl}${input.path}`, {
    method: input.method,
    headers: {
      accept: "application/json",
      ...(input.body ? { "content-type": "application/vnd.oracle.adf.resourceitem+json" } : {}),
      ...authHeaders(input.options),
    },
    ...(input.body ? { body: JSON.stringify(input.body) } : {}),
  });
  const text = await response.text();
  const body = text ? JSON.parse(text) as T & OracleServiceErrorResponse : {} as T & OracleServiceErrorResponse;
  if (!response.ok) throw new Error(oracleServiceErrorMessage(body, response.status));
  return body as T;
}

function normalizeInstanceUrl(instanceUrl: string) {
  if (!instanceUrl) throw new Error("Oracle Service instanceUrl is required.");
  const url = new URL(instanceUrl);
  return `${url.protocol}//${url.host}`;
}

function authHeaders(options: OracleServiceTicketingClientOptions) {
  if (options.accessToken) return { authorization: `Bearer ${options.accessToken}` };
  if (options.username && options.password) {
    return {
      authorization: `Basic ${Buffer.from(`${options.username}:${options.password}`).toString("base64")}`,
    };
  }
  throw new Error("Oracle Service API access requires either accessToken or username and password.");
}

interface OracleServiceErrorResponse {
  title?: string;
  detail?: string;
  "o:errorDetails"?: Array<{ title?: string; detail?: string }>;
}

function oracleServiceErrorMessage(body: OracleServiceErrorResponse, status: number) {
  const firstDetail = body["o:errorDetails"]?.[0];
  return firstDetail?.detail
    ?? firstDetail?.title
    ?? body.detail
    ?? body.title
    ?? `Oracle Service API returned ${status}.`;
}

function stripUndefined<T extends OracleServiceJsonObject>(input: T): T {
  return Object.fromEntries(Object.entries(input).filter(([, value]) => value !== undefined)) as T;
}
