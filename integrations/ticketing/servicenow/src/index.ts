import type { ProviderCredentialStatusInput } from "@cognidesk/core";
import {
  Connector as ServiceNowSdkConnectorClass,
  type Credential as ServiceNowSdkCredential,
  type IConnector as ServiceNowSdkConnector,
  type QueryDisplayValue as ServiceNowSdkQueryDisplayValue,
} from "@servicenow/sdk-api";
import {
  defineIntegration,
  type IntegrationOperationHandlers,
  type ProviderHttpMethod,
  type ProviderQueryValue,
} from "@cognidesk/integration-kit";
import { serviceNowTicketingProviderManifest } from "./manifest.js";

export { serviceNowTicketingProviderManifest } from "./manifest.js";
export { serviceNowTicketingProviderOperations } from "./operations.js";
export type { ServiceNowTicketingOperationAlias } from "./operations.js";

export type ServiceNowJsonPrimitive = string | number | boolean | null;
export type ServiceNowJsonValue =
  | ServiceNowJsonPrimitive
  | ServiceNowJsonObject
  | readonly ServiceNowJsonValue[];
export type ServiceNowProviderExtensionValue = ServiceNowJsonValue | object | undefined;
export interface ServiceNowJsonObject {
  [key: string]: ServiceNowProviderExtensionValue;
}
export type ServiceNowProviderPayload = ServiceNowJsonObject | object;
export type ServiceNowProviderQuery = Record<string, ServiceNowProviderExtensionValue>;
export interface ServiceNowProviderResponse extends ServiceNowJsonObject {}
export interface ServiceNowProviderExtensionFields extends ServiceNowJsonObject {}

export interface ServiceNowTicketingClientOptions {
  rawClient?: ServiceNowRawClient;
  connector?: ServiceNowSdkConnector;
  instance?: string;
  instanceUrl?: string;
  baseUrl?: string;
  apiVersion?: string;
  accessToken?: string;
  signal?: AbortSignal;
  timeoutMs?: number;
  headers?: Record<string, string>;
}

export interface ServiceNowCredentialStatusInput {
  instance?: string;
  instanceUrl?: string;
  baseUrl?: string;
  accessToken?: string;
}

export interface ServiceNowRecord {
  sys_id?: string;
  number?: string;
  short_description?: string;
  state?: string;
  [key: string]: ServiceNowProviderExtensionValue;
}

export interface ServiceNowTableQuery {
  query?: string;
  fields?: string[];
  limit?: number;
  offset?: number;
  displayValue?: boolean | "all";
  excludeReferenceLink?: boolean;
}

export interface ServiceNowCreateIncidentInput {
  shortDescription: string;
  description?: string;
  callerId?: string;
  contactType?: string;
  urgency?: string;
  impact?: string;
  category?: string;
  subcategory?: string;
  assignmentGroup?: string;
  additionalFields?: ServiceNowProviderExtensionFields;
}

export interface ServiceNowUploadAttachmentInput {
  tableName: string;
  tableSysId: string;
  fileName: string;
  contentType?: string;
  data: BodyInit;
}

export interface ServiceNowRawClient {
  createRecord<T extends ServiceNowRecord = ServiceNowRecord>(
    tableName: string,
    record: ServiceNowProviderPayload,
  ): Promise<T>;
  getRecord<T extends ServiceNowRecord = ServiceNowRecord>(
    tableName: string,
    sysId: string,
    query?: Omit<ServiceNowTableQuery, "query" | "limit" | "offset">,
  ): Promise<T>;
  updateRecord<T extends ServiceNowRecord = ServiceNowRecord>(
    tableName: string,
    sysId: string,
    patch: ServiceNowProviderPayload,
  ): Promise<T>;
  searchRecords<T extends ServiceNowRecord = ServiceNowRecord>(
    tableName: string,
    query?: ServiceNowTableQuery,
  ): Promise<T[]>;
  uploadAttachment(input: ServiceNowUploadAttachmentInput): Promise<ServiceNowProviderResponse>;
  listAttachments(query?: ServiceNowTableQuery): Promise<ServiceNowJsonObject[]>;
  importSet(stagingTableName: string, record: ServiceNowProviderPayload): Promise<ServiceNowProviderResponse>;
  getImportSetResult(stagingTableName: string, sysId: string): Promise<ServiceNowProviderResponse>;
}

export interface ServiceNowTicketingClient extends ServiceNowRawClient {
  rawClient: ServiceNowRawClient;
  createIncident(input: ServiceNowCreateIncidentInput): Promise<ServiceNowRecord>;
  addIncidentWorkNote(sysId: string, note: string): Promise<ServiceNowRecord>;
  addIncidentComment(sysId: string, comment: string): Promise<ServiceNowRecord>;
}

export interface ServiceNowLiveCheckOptions extends ServiceNowTicketingClientOptions {
  client?: Pick<ServiceNowTicketingClient, "searchRecords">;
  tableName?: string;
}

export interface ServiceNowTicketingIntegrationOptions extends ServiceNowTicketingClientOptions {
  ticketingClient?: ServiceNowTicketingClient;
}

export interface ServiceNowRecordIdentifierInput {
  tableName?: string;
  sysId?: string;
  ticketId?: string;
  id?: string;
}

export interface ServiceNowCreateTicketOperationInput extends Partial<ServiceNowCreateIncidentInput> {
  subject?: string;
  title?: string;
  fields?: ServiceNowProviderExtensionFields;
}

export interface ServiceNowUpdateTicketOperationInput extends ServiceNowRecordIdentifierInput {
  patch?: ServiceNowProviderPayload;
  fields?: ServiceNowProviderPayload;
}

export interface ServiceNowSearchRecordsOperationInput extends ServiceNowTableQuery {
  tableName?: string;
}

export interface ServiceNowCreateCommentOperationInput extends ServiceNowRecordIdentifierInput {
  comment?: string;
  body?: string;
  text?: string;
}

export interface ServiceNowCreateInternalNoteOperationInput extends ServiceNowRecordIdentifierInput {
  note?: string;
  body?: string;
  text?: string;
}

export interface ServiceNowAddAttachmentOperationInput extends ServiceNowRecordIdentifierInput {
  tableSysId?: string;
  fileName: string;
  contentType?: string;
  data: BodyInit;
}

export interface ServiceNowListAttachmentsOperationInput extends ServiceNowRecordIdentifierInput, ServiceNowTableQuery {
  tableSysId?: string;
}

export interface ServiceNowCreateRecordOperationInput {
  tableName: string;
  record?: ServiceNowProviderPayload;
  fields?: ServiceNowProviderPayload;
}

export interface ServiceNowImportSetOperationInput {
  stagingTableName?: string;
  tableName?: string;
  record?: ServiceNowProviderPayload;
  fields?: ServiceNowProviderPayload;
}

export interface ServiceNowImportSetResultOperationInput {
  stagingTableName?: string;
  tableName?: string;
  sysId?: string;
  id?: string;
}

export function createServiceNowTicketingClient(
  options: ServiceNowTicketingClientOptions = {},
): ServiceNowTicketingClient {
  const rawClient = options.rawClient ?? createDefaultServiceNowRawClient(options);

  return {
    rawClient,
    createRecord: (tableName, record) => rawClient.createRecord(tableName, record),
    getRecord: (tableName, sysId, query) => rawClient.getRecord(tableName, sysId, query),
    updateRecord: (tableName, sysId, patch) => rawClient.updateRecord(tableName, sysId, patch),
    searchRecords: (tableName, query) => rawClient.searchRecords(tableName, query),
    uploadAttachment: (input) => rawClient.uploadAttachment(input),
    listAttachments: (query) => rawClient.listAttachments(query),
    importSet: (stagingTableName, record) => rawClient.importSet(stagingTableName, record),
    getImportSetResult: (stagingTableName, sysId) => rawClient.getImportSetResult(stagingTableName, sysId),
    async createIncident(input) {
      return rawClient.createRecord("incident", serviceNowIncidentRecord(input));
    },
    async addIncidentWorkNote(sysId, note) {
      return rawClient.updateRecord("incident", sysId, { work_notes: note });
    },
    async addIncidentComment(sysId, comment) {
      return rawClient.updateRecord("incident", sysId, { comments: comment });
    },
  };
}

export function createServiceNowTicketingOperationHandlers(
  options: ServiceNowTicketingIntegrationOptions = {},
): IntegrationOperationHandlers {
  const client = options.ticketingClient ?? createServiceNowTicketingClient(options);

  return {
    "ticket.create": (input: ServiceNowCreateTicketOperationInput) =>
      client.createIncident(serviceNowCreateIncidentInput(input)),
    "ticket.read": (input: ServiceNowRecordIdentifierInput & {
      query?: Omit<ServiceNowTableQuery, "query" | "limit" | "offset">;
    }) => client.getRecord(serviceNowTableName(input.tableName, "ticket.read"), serviceNowRecordId(input, "ticket.read"), input.query),
    "ticket.update": (input: ServiceNowUpdateTicketOperationInput) =>
      client.updateRecord(serviceNowTableName(input.tableName, "ticket.update"), serviceNowRecordId(input, "ticket.update"), serviceNowPatch(input)),
    "ticket.search": (input: ServiceNowSearchRecordsOperationInput = {}) =>
      client.searchRecords(serviceNowTableName(input.tableName, "ticket.search"), serviceNowSearchQuery(input)),
    "ticket.comment.create": (input: ServiceNowCreateCommentOperationInput) =>
      client.addIncidentComment(serviceNowRecordId(input, "ticket.comment.create"), serviceNowCommentText(input)),
    "ticket.internalNote.create": (input: ServiceNowCreateInternalNoteOperationInput) =>
      client.addIncidentWorkNote(serviceNowRecordId(input, "ticket.internalNote.create"), serviceNowInternalNoteText(input)),
    "ticket.attachments.add": (input: ServiceNowAddAttachmentOperationInput) =>
      client.uploadAttachment(serviceNowAttachmentInput(input)),
    "ticket.attachments.list": (input: ServiceNowListAttachmentsOperationInput = {}) =>
      client.listAttachments(serviceNowAttachmentListQuery(input)),
    "servicenow.record.create": (input: ServiceNowCreateRecordOperationInput) =>
      client.createRecord(serviceNowTableName(input.tableName, "servicenow.record.create"), serviceNowPayload(input, "servicenow.record.create")),
    "servicenow.importSet.insert": (input: ServiceNowImportSetOperationInput) =>
      client.importSet(serviceNowStagingTableName(input), serviceNowPayload(input, "servicenow.importSet.insert")),
    "servicenow.importSet.result.read": (input: ServiceNowImportSetResultOperationInput) =>
      client.getImportSetResult(serviceNowStagingTableName(input), serviceNowRecordId(input, "servicenow.importSet.result.read")),
  };
}

export function createServiceNowTicketingIntegration(options: ServiceNowTicketingIntegrationOptions = {}) {
  return defineIntegration({
    manifest: serviceNowTicketingProviderManifest,
    operations: createServiceNowTicketingOperationHandlers(options),
  });
}

export function serviceNowTicketingCredentialStatuses(
  input: ServiceNowCredentialStatusInput,
): ProviderCredentialStatusInput[] {
  const hasBearer = Boolean(input.accessToken);
  const hasInstance = Boolean(input.instanceUrl ?? input.instance ?? input.baseUrl);
  return [
    {
      providerPackageId: serviceNowTicketingProviderManifest.id,
      requirementId: "servicenow-instance",
      state: hasInstance ? "configured" : "missing",
      message: hasInstance
        ? "ServiceNow instance URL or API base URL is configured."
        : "A ServiceNow instance URL or API base URL is required.",
    },
    {
      providerPackageId: serviceNowTicketingProviderManifest.id,
      requirementId: "servicenow-api-access",
      state: hasBearer ? "configured" : "missing",
      scopes: ["table_api"],
      message: hasBearer
        ? "ServiceNow OAuth bearer access is configured for the official SDK connector."
        : "A ServiceNow OAuth bearer token is required for the built-in official SDK connector; use ServiceNowRawClient injection for other tenant-auth transports.",
    },
  ];
}

export function createServiceNowTicketingLiveChecks(options: ServiceNowLiveCheckOptions = {}) {
  return [{
    id: "table-api",
    description: "ServiceNow Table API can query the configured table with the supplied API credentials.",
    requiredCredentialIds: ["servicenow-instance", "servicenow-api-access"],
    async run(context: { signal?: AbortSignal }) {
      const client = options.client ?? createServiceNowTicketingClient(options);
      const records = await client.searchRecords(options.tableName ?? "incident", {
        limit: 1,
        fields: ["sys_id", "number"],
        excludeReferenceLink: true,
      });
      if (context.signal?.aborted) throw new Error("ServiceNow live Table API check aborted.");
      return {
        details: {
          tableName: options.tableName ?? "incident",
          sampleCount: records.length,
        },
      };
    },
  }];
}

function serviceNowCreateIncidentInput(input: ServiceNowCreateTicketOperationInput): ServiceNowCreateIncidentInput {
  const shortDescription = input.shortDescription ?? input.subject ?? input.title;
  if (!shortDescription) {
    throw new Error("ServiceNow ticket.create requires shortDescription, subject, or title.");
  }
  const additionalFields = {
    ...(input.additionalFields ?? {}),
    ...(input.fields ?? {}),
  };
  return {
    shortDescription,
    ...(input.description ? { description: input.description } : {}),
    ...(input.callerId ? { callerId: input.callerId } : {}),
    ...(input.contactType ? { contactType: input.contactType } : {}),
    ...(input.urgency ? { urgency: input.urgency } : {}),
    ...(input.impact ? { impact: input.impact } : {}),
    ...(input.category ? { category: input.category } : {}),
    ...(input.subcategory ? { subcategory: input.subcategory } : {}),
    ...(input.assignmentGroup ? { assignmentGroup: input.assignmentGroup } : {}),
    ...(Object.keys(additionalFields).length > 0 ? { additionalFields } : {}),
  };
}

function serviceNowIncidentRecord(input: ServiceNowCreateIncidentInput): ServiceNowProviderPayload {
  return {
    short_description: input.shortDescription,
    ...(input.description ? { description: input.description } : {}),
    ...(input.callerId ? { caller_id: input.callerId } : {}),
    ...(input.contactType ? { contact_type: input.contactType } : {}),
    ...(input.urgency ? { urgency: input.urgency } : {}),
    ...(input.impact ? { impact: input.impact } : {}),
    ...(input.category ? { category: input.category } : {}),
    ...(input.subcategory ? { subcategory: input.subcategory } : {}),
    ...(input.assignmentGroup ? { assignment_group: input.assignmentGroup } : {}),
    ...(input.additionalFields ?? {}),
  };
}

function serviceNowRecordId(
  input: { sysId?: string; ticketId?: string; id?: string },
  operation: string,
): string {
  const sysId = input.sysId ?? input.ticketId ?? input.id;
  if (!sysId) throw new Error(`ServiceNow ${operation} requires sysId, ticketId, or id.`);
  return sysId;
}

function serviceNowTableName(value: string | undefined, operation: string): string {
  const tableName = value?.trim() || "incident";
  if (!/^[A-Za-z][A-Za-z0-9_]*$/.test(tableName)) {
    throw new Error(`ServiceNow ${operation} requires a valid tableName.`);
  }
  return tableName;
}

function serviceNowPatch(input: ServiceNowUpdateTicketOperationInput): ServiceNowProviderPayload {
  const patch = input.patch ?? input.fields;
  if (!patch) throw new Error("ServiceNow ticket.update requires patch or fields.");
  return patch;
}

function serviceNowPayload(
  input: { record?: ServiceNowProviderPayload; fields?: ServiceNowProviderPayload },
  operation: string,
): ServiceNowProviderPayload {
  const payload = input.record ?? input.fields;
  if (!payload) throw new Error(`ServiceNow ${operation} requires record or fields.`);
  return payload;
}

function serviceNowSearchQuery(input: ServiceNowSearchRecordsOperationInput): ServiceNowTableQuery {
  const { tableName: _tableName, ...query } = input;
  return query;
}

function serviceNowCommentText(input: ServiceNowCreateCommentOperationInput): string {
  const comment = input.comment ?? input.body ?? input.text;
  if (!comment) throw new Error("ServiceNow ticket.comment.create requires comment, body, or text.");
  return comment;
}

function serviceNowInternalNoteText(input: ServiceNowCreateInternalNoteOperationInput): string {
  const note = input.note ?? input.body ?? input.text;
  if (!note) throw new Error("ServiceNow ticket.internalNote.create requires note, body, or text.");
  return note;
}

function serviceNowAttachmentInput(input: ServiceNowAddAttachmentOperationInput): ServiceNowUploadAttachmentInput {
  return {
    tableName: serviceNowTableName(input.tableName, "ticket.attachments.add"),
    tableSysId: input.tableSysId ?? serviceNowRecordId(input, "ticket.attachments.add"),
    fileName: serviceNowRequiredString(input.fileName, "ticket.attachments.add fileName"),
    data: input.data,
    ...(input.contentType ? { contentType: input.contentType } : {}),
  };
}

function serviceNowAttachmentListQuery(input: ServiceNowListAttachmentsOperationInput): ServiceNowTableQuery {
  const {
    tableName,
    tableSysId,
    sysId,
    ticketId,
    id,
    query,
    ...tableQuery
  } = input;
  const scopedSysId = tableSysId ?? sysId ?? ticketId ?? id;
  const scopedQuery = scopedSysId
    ? [
        query,
        serviceNowEncodedQueryTerm("table_name", serviceNowTableName(tableName, "ticket.attachments.list")),
        serviceNowEncodedQueryTerm("table_sys_id", scopedSysId),
      ].filter(Boolean).join("^")
    : query;
  return {
    ...tableQuery,
    ...(scopedQuery ? { query: scopedQuery } : {}),
  };
}

function serviceNowEncodedQueryTerm(field: string, value: string): string {
  if (/[=^]/.test(value)) {
    throw new Error(`ServiceNow encoded query value for ${field} cannot contain '=' or '^'.`);
  }
  return `${field}=${value}`;
}

function serviceNowStagingTableName(input: { stagingTableName?: string; tableName?: string }): string {
  const stagingTableName = input.stagingTableName ?? input.tableName;
  if (!stagingTableName) throw new Error("ServiceNow Import Set operation requires stagingTableName or tableName.");
  return serviceNowTableName(stagingTableName, "Import Set operation");
}

function serviceNowRequiredString(value: string | undefined, label: string): string {
  if (typeof value === "string" && value.trim().length > 0) return value;
  throw new Error(`ServiceNow ${label} is required.`);
}

export function createServiceNowSdkConnector(
  options: Pick<ServiceNowTicketingClientOptions, "accessToken" | "baseUrl" | "instance" | "instanceUrl">,
): ServiceNowSdkConnector {
  if (!options.accessToken) {
    throw new Error("ServiceNow SDK connector requires accessToken.");
  }
  const credential: ServiceNowSdkCredential = {
    instanceUrl: serviceNowInstanceOriginUrl(options),
    type: "oauth",
    token: options.accessToken,
  };
  return new ServiceNowSdkConnectorClass(credential);
}

export function createServiceNowSdkConnectorRawClient(
  options: ServiceNowTicketingClientOptions,
): ServiceNowRawClient {
  const connector = options.connector ?? createServiceNowSdkConnector(options);
  const apiRoot = serviceNowConnectorApiRoot(options);

  const request = (method: ProviderHttpMethod, path: string, input?: {
    body?: ServiceNowProviderPayload;
    query?: Record<string, ProviderQueryValue>;
  }) => serviceNowConnectorJsonRequest(connector, {
    method,
    path: `${apiRoot}/${path}`,
    ...(options.headers ? { headers: options.headers } : {}),
    ...(input?.body !== undefined ? { body: input.body } : {}),
    ...(input?.query !== undefined ? { query: input.query } : {}),
    ...(options.signal ? { signal: options.signal } : {}),
    ...(options.timeoutMs !== undefined ? { timeoutMs: options.timeoutMs } : {}),
  });

  return {
    async createRecord<T extends ServiceNowRecord = ServiceNowRecord>(
      tableName: string,
      record: ServiceNowProviderPayload,
    ): Promise<T> {
      return serviceNowResult(await request("POST", `table/${pathSegment(tableName)}`, { body: record })) as T;
    },
    async getRecord<T extends ServiceNowRecord = ServiceNowRecord>(
      tableName: string,
      sysId: string,
      query?: Omit<ServiceNowTableQuery, "query" | "limit" | "offset">,
    ): Promise<T> {
      return serviceNowResult(await request("GET", `table/${pathSegment(tableName)}/${pathSegment(sysId)}`, {
        query: serviceNowTableQueryParams(query),
      })) as T;
    },
    async updateRecord<T extends ServiceNowRecord = ServiceNowRecord>(
      tableName: string,
      sysId: string,
      patch: ServiceNowProviderPayload,
    ): Promise<T> {
      return serviceNowResult(await request("PATCH", `table/${pathSegment(tableName)}/${pathSegment(sysId)}`, { body: patch })) as T;
    },
    async searchRecords<T extends ServiceNowRecord = ServiceNowRecord>(
      tableName: string,
      query?: ServiceNowTableQuery,
    ): Promise<T[]> {
      if (canUseServiceNowSdkQueryTable(options, connector)) {
        const result = await connector.queryTable({
          table: tableName,
          encodedQuery: query?.query ?? "",
          ...(query?.limit !== undefined ? { limit: query.limit } : {}),
          ...(query?.offset !== undefined ? { offset: query.offset } : {}),
          ...(query?.fields?.length ? { fields: query.fields.join(",") } : {}),
          ...(query?.displayValue !== undefined ? { displayValue: serviceNowSdkDisplayValue(query.displayValue) } : {}),
          ...(query?.excludeReferenceLink !== undefined ? { excludeReferenceLink: query.excludeReferenceLink } : {}),
          ...(options.timeoutMs !== undefined ? { timeoutMs: options.timeoutMs } : {}),
        });
        return result.records as T[];
      }
      const result = serviceNowResult(await request("GET", `table/${pathSegment(tableName)}`, {
        query: serviceNowTableQueryParams(query),
      }));
      return (Array.isArray(result) ? result : []) as T[];
    },
    async uploadAttachment(input) {
      return asServiceNowObject(serviceNowResult(await serviceNowConnectorRawRequest(connector, {
        path: `${apiRoot}/attachment/file`,
        method: "POST",
        ...(options.headers ? { headers: options.headers } : {}),
        body: input.data,
        contentType: input.contentType ?? "application/octet-stream",
        query: {
          table_name: input.tableName,
          table_sys_id: input.tableSysId,
          file_name: input.fileName,
        },
        ...(options.signal ? { signal: options.signal } : {}),
        ...(options.timeoutMs !== undefined ? { timeoutMs: options.timeoutMs } : {}),
      })));
    },
    async listAttachments(query) {
      const result = serviceNowResult(await request("GET", "attachment", {
        query: serviceNowTableQueryParams(query),
      }));
      return (Array.isArray(result) ? result : []) as ServiceNowJsonObject[];
    },
    async importSet(stagingTableName, record) {
      return asServiceNowObject(serviceNowResult(await request("POST", `import/${pathSegment(stagingTableName)}`, { body: record })));
    },
    async getImportSetResult(stagingTableName, sysId) {
      return asServiceNowObject(serviceNowResult(await request("GET", `import/${pathSegment(stagingTableName)}/${pathSegment(sysId)}`)));
    },
  };
}

export function createUnconfiguredServiceNowRawClient(
  message = "ServiceNow integration requires an injected ServiceNowRawClient, an injected ServiceNow SDK connector, or accessToken with instanceUrl/baseUrl for the built-in @servicenow/sdk-api Connector.",
): ServiceNowRawClient {
  const fail = async (): Promise<never> => {
    throw new Error(message);
  };
  return {
    createRecord: fail,
    getRecord: fail,
    updateRecord: fail,
    searchRecords: fail,
    uploadAttachment: fail,
    listAttachments: fail,
    importSet: fail,
    getImportSetResult: fail,
  };
}

function serviceNowInstanceOriginUrl(options: Pick<ServiceNowTicketingClientOptions, "baseUrl" | "instance" | "instanceUrl">): URL {
  const input = options.instanceUrl ?? options.instance ?? options.baseUrl;
  if (!input) {
    throw new Error("ServiceNow SDK connector requires instanceUrl or baseUrl.");
  }
  const url = new URL(/^https?:\/\//i.test(input) ? input : `https://${input}`);
  return new URL(`${url.origin}/`);
}

function serviceNowConnectorApiRoot(options: Pick<ServiceNowTicketingClientOptions, "baseUrl" | "apiVersion">): string {
  if (options.baseUrl) {
    const baseUrl = new URL(/^https?:\/\//i.test(options.baseUrl) ? options.baseUrl : `https://${options.baseUrl}`);
    const pathname = baseUrl.pathname.replace(/\/+$/, "");
    if (pathname && pathname !== "/") return pathname;
  }
  return `/api/now${serviceNowApiVersionPath(options.apiVersion)}`;
}

class ServiceNowRestError extends Error {
  readonly status: number;
  readonly statusText: string;
  readonly payload: unknown;

  constructor(response: Response, payload: unknown) {
    super(`ServiceNow request failed with ${response.status}.`);
    this.name = "ServiceNowRestError";
    this.status = response.status;
    this.statusText = response.statusText;
    this.payload = payload;
  }
}

async function serviceNowConnectorJsonRequest(
  connector: ServiceNowSdkConnector,
  input: {
    method: ProviderHttpMethod;
    path: string;
    headers?: Record<string, string>;
    body?: ServiceNowProviderPayload;
    query?: Record<string, ProviderQueryValue>;
    signal?: AbortSignal;
    timeoutMs?: number;
  },
): Promise<unknown> {
  return serviceNowConnectorRawRequest(connector, {
    method: input.method,
    path: input.path,
    ...(input.headers ? { headers: input.headers } : {}),
    ...(input.body !== undefined ? { body: JSON.stringify(input.body), contentType: "application/json" } : {}),
    ...(input.query ? { query: input.query } : {}),
    ...(input.signal ? { signal: input.signal } : {}),
    ...(input.timeoutMs !== undefined ? { timeoutMs: input.timeoutMs } : {}),
  });
}

async function serviceNowConnectorRawRequest(
  connector: ServiceNowSdkConnector,
  input: {
    method: ProviderHttpMethod;
    path: string;
    headers?: Record<string, string>;
    body?: BodyInit;
    contentType?: string;
    query?: Record<string, ProviderQueryValue>;
    signal?: AbortSignal;
    timeoutMs?: number;
  },
): Promise<unknown> {
  const { signal, cleanup } = serviceNowAbortSignal(input.signal, input.timeoutMs);
  try {
    const response = await connector.fetch(input.path, {
      method: input.method,
      headers: serviceNowConnectorHeaders({
        ...(input.contentType ? { contentType: input.contentType } : {}),
        ...(input.headers ? { headers: input.headers } : {}),
      }),
      ...(input.body !== undefined ? { body: input.body } : {}),
      ...(signal ? { signal } : {}),
    }, serviceNowSearchParams(input.query));
    const payload = await parseServiceNowResponseBody(response);
    if (!response.ok) {
      throw new ServiceNowRestError(response, payload);
    }
    return payload;
  } finally {
    cleanup();
  }
}

function createDefaultServiceNowRawClient(options: ServiceNowTicketingClientOptions): ServiceNowRawClient {
  if (options.connector || ((options.baseUrl || options.instanceUrl || options.instance) && options.accessToken)) {
    return createServiceNowSdkConnectorRawClient(options);
  }
  return createUnconfiguredServiceNowRawClient();
}

function serviceNowConnectorHeaders(input: {
  headers?: Record<string, string>;
  contentType?: string;
}): Record<string, string> {
  return {
    Accept: "application/json",
    ...(input.contentType ? { "Content-Type": input.contentType } : {}),
    ...(input.headers ?? {}),
  };
}

function serviceNowTableQueryParams(query?: ServiceNowTableQuery): Record<string, ProviderQueryValue> {
  const params: Record<string, ProviderQueryValue> = {};
  if (!query) return params;
  if (query.query !== undefined) params.sysparm_query = query.query;
  if (query.fields?.length) params.sysparm_fields = query.fields.join(",");
  if (query.limit !== undefined) params.sysparm_limit = query.limit;
  if (query.offset !== undefined) params.sysparm_offset = query.offset;
  if (query.displayValue !== undefined) params.sysparm_display_value = String(query.displayValue);
  if (query.excludeReferenceLink !== undefined) params.sysparm_exclude_reference_link = query.excludeReferenceLink;
  return params;
}

function serviceNowSearchParams(query?: Record<string, ProviderQueryValue>): URLSearchParams | undefined {
  if (!query) return undefined;
  const params = new URLSearchParams();
  for (const [key, value] of Object.entries(query)) {
    appendServiceNowSearchParam(params, key, value);
  }
  return params;
}

function appendServiceNowSearchParam(params: URLSearchParams, key: string, value: ProviderQueryValue): void {
  if (value === undefined || value === null) return;
  if (Array.isArray(value)) {
    for (const item of value) appendServiceNowSearchParam(params, key, item as ProviderQueryValue);
    return;
  }
  params.append(key, String(value));
}

function canUseServiceNowSdkQueryTable(
  options: ServiceNowTicketingClientOptions,
  connector: ServiceNowSdkConnector,
): connector is ServiceNowSdkConnector & { queryTable: ServiceNowSdkConnector["queryTable"] } {
  return typeof connector.queryTable === "function"
    && serviceNowConnectorApiRoot(options) === "/api/now"
    && options.headers === undefined
    && options.signal === undefined;
}

function serviceNowSdkDisplayValue(displayValue: boolean | "all"): ServiceNowSdkQueryDisplayValue {
  if (displayValue === "all") return "all";
  return displayValue ? "true" : "false";
}

function serviceNowAbortSignal(
  signal: AbortSignal | undefined,
  timeoutMs: number | undefined,
): { signal?: AbortSignal; cleanup(): void } {
  if (timeoutMs === undefined) return { ...(signal ? { signal } : {}), cleanup() {} };
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);
  const abort = () => controller.abort();
  if (signal?.aborted) {
    controller.abort();
  } else {
    signal?.addEventListener("abort", abort, { once: true });
  }
  return {
    signal: controller.signal,
    cleanup() {
      clearTimeout(timeout);
      signal?.removeEventListener("abort", abort);
    },
  };
}

async function parseServiceNowResponseBody(response: Response): Promise<unknown> {
  if (response.status === 204) return {};
  const text = await response.text();
  if (!text) return {};
  try {
    return JSON.parse(text);
  } catch {
    return { rawBody: text };
  }
}

function serviceNowResult(value: unknown): unknown {
  if (typeof value === "object" && value !== null && "result" in value) {
    return (value as { result?: unknown }).result;
  }
  return value;
}

function asServiceNowObject(value: unknown): ServiceNowProviderResponse {
  if (typeof value === "object" && value !== null && !Array.isArray(value)) {
    return value as ServiceNowProviderResponse;
  }
  return { data: value as ServiceNowJsonValue };
}

function serviceNowApiVersionPath(apiVersion: string | undefined): string {
  return apiVersion ? `/${pathSegment(apiVersion)}` : "";
}

function pathSegment(value: string | number): string {
  return encodeURIComponent(String(value));
}
