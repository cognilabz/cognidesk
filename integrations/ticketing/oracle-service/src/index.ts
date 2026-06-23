import type { ProviderCredentialStatusInput } from "@cognidesk/core";
import { defineIntegration } from "@cognidesk/integration-kit";
import {
  ORACLE_SERVICE_DEFAULT_API_VERSION,
  oracleServiceTicketingProviderManifest,
} from "./manifest.js";

export { oracleServiceTicketingProviderManifest } from "./manifest.js";

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

export interface OracleServiceReadOperationInput {
  srNumber: string;
}

export interface OracleServiceUpdateOperationInput extends OracleServiceUpdateRequestInput {
  srNumber: string;
}

export interface OracleServiceTicketingIntegrationOptions extends OracleServiceTicketingClientOptions {
  client?: OracleServiceTicketingClient;
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
    credentials: options,
  });
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
