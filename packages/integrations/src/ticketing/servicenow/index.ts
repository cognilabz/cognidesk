import type { ProviderCredentialStatusInput } from "@cognidesk/core";
import { defineIntegrationProviderPackage as defineProviderPackage } from "../../provider-manifest.js";

export const serviceNowTicketingProviderManifest = defineProviderPackage({
  id: "ticketing.servicenow",
  name: "ServiceNow Ticketing",
  packageName: "@cognidesk/integrations",
  provider: "servicenow",
  category: "ticketing",
  trustLevel: "official",
  directions: ["bidirectional"],
  channelAudiences: ["internal-support", "mixed"],
  coverage: {
    scope: "support-workflow-subset",
    notes: [
      "Coverage is limited to ServiceNow Table API record create/read/update/search, incident creation, Attachment API upload/list, Import Set insert/read, and readiness checks used by Cognidesk support workflows.",
      "Generic Table API helpers accept SDK-user-selected table names and fields, but they are not customer-specific generated schema coverage for arbitrary tables, custom fields, ACLs, business rules, or plugins.",
      "This is not full ServiceNow platform API coverage for Service Catalog/cart, journal-field semantics, attachment download/delete, transform-map lifecycle, scripted REST APIs, workflow APIs, or broader platform administration.",
    ],
    evidence: [
      { label: "ServiceNow Table API", url: "https://www.servicenow.com/docs/r/washingtondc/api-reference/rest-apis/c_TableAPI.html" },
      { label: "ServiceNow Attachment API", url: "https://www.servicenow.com/docs/r/washingtondc/api-reference/rest-apis/c_AttachmentAPI.html" },
      { label: "ServiceNow Import Set API", url: "https://www.servicenow.com/docs/r/washingtondc/api-reference/rest-apis/c_ImportSetAPI.html" },
      { label: "ServiceNow Virtual Agent API", url: "https://www.servicenow.com/docs/r/conversational-interfaces/virtual-agent/virtual-agent-api-landing-page.html" },
      { label: "ServiceNow Virtual Agent Bot Integration API", url: "https://www.servicenow.com/docs/r/washingtondc/api-reference/rest-apis/bot-api.html" },
      { label: "ServiceNow Virtual Agent API features", url: "https://www.servicenow.com/docs/r/yokohama/conversational-interfaces/virtual-agent/va-api-features.html" },
    ],
  },
  credentialRequirements: [
    {
      id: "servicenow-instance",
      label: "ServiceNow instance URL",
      description: "The SDK user's ServiceNow instance URL, for example https://example.service-now.com.",
      required: true,
    },
    {
      id: "servicenow-api-access",
      label: "ServiceNow API access",
      description: "Server-side Basic Auth or OAuth bearer access for ServiceNow REST APIs; effective access is governed by ServiceNow roles, ACLs, table access, and any tenant REST API Auth Scopes.",
      scopes: ["table_api"],
      required: true,
      metadata: {
        scopeKind: "internal-capability-labels",
        privilegeGuidance: "The table_api value is Cognidesk capability guidance, not a universal ServiceNow OAuth scope. The credential must be authorized for Table API, Attachment API, Import Set API, and configured target tables.",
      },
    },
  ],
  capabilities: [
    {
      capability: "create-provider-object",
      label: "Create ServiceNow records",
      description: "Creates SDK-user-selected ServiceNow Table API records such as incidents or cases; generic table names are SDK-owned schema plumbing, not generated per-table coverage.",
      audiences: ["internal-support", "mixed"],
      providerObjects: [
        { kind: "servicenowRecord", label: "ServiceNow Record" },
        { kind: "servicenowIncident", label: "ServiceNow Incident", schemaName: "incident" },
        { kind: "servicenowAttachment", label: "ServiceNow Attachment" },
        { kind: "servicenowImportSetRecord", label: "ServiceNow Import Set Record" },
      ],
      requiresCredential: true,
      sideEffect: true,
      changesWorkflow: true,
    },
    {
      capability: "read-provider-object",
      label: "Read ServiceNow records",
      description: "Reads ServiceNow Table API records by table and sys_id.",
      audiences: ["internal-support", "mixed"],
      providerObjects: [{ kind: "servicenowRecord", label: "ServiceNow Record" }, { kind: "servicenowAttachment", label: "ServiceNow Attachment" }, { kind: "servicenowImportSetRecord", label: "ServiceNow Import Set Record" }],
      requiresCredential: true,
      exposesSensitiveData: true,
    },
    {
      capability: "update-provider-object",
      label: "Update ServiceNow records",
      description: "Updates ServiceNow Table API records such as incidents, comments, state, or assignment fields.",
      audiences: ["internal-support", "mixed"],
      providerObjects: [{ kind: "servicenowRecord", label: "ServiceNow Record" }, { kind: "servicenowIncident", label: "ServiceNow Incident", schemaName: "incident" }],
      requiresCredential: true,
      sideEffect: true,
      exposesSensitiveData: true,
      changesWorkflow: true,
    },
    {
      capability: "search-provider-object",
      label: "Search ServiceNow records",
      description: "Queries ServiceNow Table API records with SDK-user-supplied sysparm_query and field constraints.",
      audiences: ["internal-support", "mixed"],
      providerObjects: [{ kind: "servicenowRecord", label: "ServiceNow Record" }],
      requiresCredential: true,
      exposesSensitiveData: true,
    },
    {
      capability: "handoff",
      label: "Attach record handoff to ServiceNow",
      description: "Provides Table API incident, attachment, and import-set operations used by SDK-user-configured record handoff workflows; this is not native Virtual Agent or Live Agent Chat transfer coverage.",
      audiences: ["internal-support", "mixed"],
      providerObjects: [{ kind: "servicenowIncident", label: "ServiceNow Incident", schemaName: "incident" }, { kind: "servicenowAttachment", label: "ServiceNow Attachment" }, { kind: "servicenowImportSetRecord", label: "ServiceNow Import Set Record" }],
      requiresCredential: true,
      sideEffect: true,
      changesWorkflow: true,
    },
  ],
  privacyNotes: [
    "ServiceNow records can contain customer data, support notes, internal assignment data, and attached workflow context.",
    "ServiceNow credentials stay server-side and are never exposed through Studio credential status.",
  ],
  limitations: [
    "Available tables, fields, ACLs, business rules, and mandatory fields are owned by the SDK user's ServiceNow instance.",
    "Handoff timing, approval, field mapping, assignment, and customer visibility are SDK-user configuration.",
  ],
  metadata: {
    checkedProviderApiCoverage: {
      verifiedAt: "2026-06-18",
      sourceKind: "checked-endpoint-family-inventory",
      coverageArtifact: "docs/provider-coverage/servicenow-checked-table-attachment-importset-2026-06-18.inventory.json",
      familyCount: 4,
      implementedFamilyCount: 3,
      gapFamilyCount: 1,
      implementedOperationCount: 11,
      fullCoverageExportRequirement: "Full instance-specific ServiceNow coverage requires REST API Explorer/OpenAPI export for enabled APIs, table dictionary export, plugin/product inventory, ACL/role evidence, and scripted REST definitions from the SDK user's instance.",
    },
    channelCoverage: {
      tableRecords: "typed-json-create-read-update-search",
      genericTableApi: "sdk-owned-classified-endpoint",
      incidents: "typed-create-comment-worknote",
      attachments: "typed-upload-list",
      importSets: "typed-json-create-read",
      readinessSearch: "typed-search",
      csmCaseApi: "provider-supported-not-typed",
      virtualAgentApi: "provider-supported-not-typed",
      virtualAgentBotIntegrationApi: "provider-supported-not-typed",
      liveAgentTransfer: "provider-supported-not-typed",
      connectConversationScopedApi: "provider-supported-not-typed",
      taskTableRecords: "provider-supported-not-typed",
      cccifCustomChatIntegration: "provider-supported-not-typed",
      catalogWorkflowScriptedRest: "provider-supported-not-implemented",
      attachmentDownloadDelete: "provider-supported-not-implemented",
      arbitraryTableTyping: "not-covered",
    },
  },
  maintainers: [{ name: "Cognidesk", type: "official" }],
});

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
  instanceUrl: string;
  username?: string;
  password?: string;
  accessToken?: string;
  fetch?: typeof fetch;
}

export interface ServiceNowCredentialStatusInput {
  instanceUrl?: string;
  username?: string;
  password?: string;
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

export interface ServiceNowTicketingClient {
  createRecord<T extends ServiceNowRecord = ServiceNowRecord>(
    tableName: string,
    record: ServiceNowProviderPayload,
  ): Promise<T>;
  createIncident(input: ServiceNowCreateIncidentInput): Promise<ServiceNowRecord>;
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
  addIncidentWorkNote(sysId: string, note: string): Promise<ServiceNowRecord>;
  addIncidentComment(sysId: string, comment: string): Promise<ServiceNowRecord>;
  searchRecords<T extends ServiceNowRecord = ServiceNowRecord>(
    tableName: string,
    query?: ServiceNowTableQuery,
  ): Promise<T[]>;
  uploadAttachment(input: ServiceNowUploadAttachmentInput): Promise<ServiceNowProviderResponse>;
  listAttachments(query?: ServiceNowTableQuery): Promise<ServiceNowJsonObject[]>;
  importSet(stagingTableName: string, record: ServiceNowProviderPayload): Promise<ServiceNowProviderResponse>;
  getImportSetResult(stagingTableName: string, sysId: string): Promise<ServiceNowProviderResponse>;
}

export interface ServiceNowLiveCheckOptions extends ServiceNowTicketingClientOptions {
  client?: Pick<ServiceNowTicketingClient, "searchRecords">;
  tableName?: string;
}

export function createServiceNowTicketingClient(
  options: ServiceNowTicketingClientOptions,
): ServiceNowTicketingClient {
  const baseUrl = normalizeInstanceUrl(options.instanceUrl);
  const fetchImpl = options.fetch ?? fetch;

  return {
    async createRecord(tableName, record) {
      return serviceNowRequest({
        url: tableUrl(baseUrl, tableName),
        method: "POST",
        body: record,
        options,
        fetch: fetchImpl,
      });
    },
    async createIncident(input) {
      return this.createRecord("incident", {
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
      });
    },
    async getRecord(tableName, sysId, query) {
      const url = tableRecordUrl(baseUrl, tableName, sysId);
      applyTableQuery(url, query);
      return serviceNowRequest({
        url,
        method: "GET",
        options,
        fetch: fetchImpl,
      });
    },
    async updateRecord(tableName, sysId, patch) {
      return serviceNowRequest({
        url: tableRecordUrl(baseUrl, tableName, sysId),
        method: "PATCH",
        body: patch,
        options,
        fetch: fetchImpl,
      });
    },
    async addIncidentWorkNote(sysId, note) {
      return this.updateRecord("incident", sysId, { work_notes: note });
    },
    async addIncidentComment(sysId, comment) {
      return this.updateRecord("incident", sysId, { comments: comment });
    },
    async searchRecords(tableName, query = {}) {
      const url = tableUrl(baseUrl, tableName);
      applyTableQuery(url, query);
      return serviceNowRequest({
        url,
        method: "GET",
        options,
        fetch: fetchImpl,
        expectArray: true,
      });
    },
    async uploadAttachment(input) {
      const url = attachmentFileUrl(baseUrl, input);
      return serviceNowRequest({
        url,
        method: "POST",
        rawBody: input.data,
        contentType: input.contentType ?? "application/octet-stream",
        options,
        fetch: fetchImpl,
      });
    },
    async listAttachments(query = {}) {
      const url = new URL("/api/now/attachment", baseUrl);
      applyTableQuery(url, query);
      return serviceNowRequest({
        url,
        method: "GET",
        options,
        fetch: fetchImpl,
        expectArray: true,
      });
    },
    async importSet(stagingTableName, record) {
      return serviceNowRequest({
        url: importSetUrl(baseUrl, stagingTableName),
        method: "POST",
        body: record,
        options,
        fetch: fetchImpl,
      });
    },
    async getImportSetResult(stagingTableName, sysId) {
      return serviceNowRequest({
        url: new URL(`${importSetUrl(baseUrl, stagingTableName).pathname}/${encodeURIComponent(sysId)}`, baseUrl),
        method: "GET",
        options,
        fetch: fetchImpl,
      });
    },
  };
}

export function serviceNowTicketingCredentialStatuses(
  input: ServiceNowCredentialStatusInput,
): ProviderCredentialStatusInput[] {
  const hasBasic = Boolean(input.username && input.password);
  const hasBearer = Boolean(input.accessToken);
  return [
    {
      providerPackageId: serviceNowTicketingProviderManifest.id,
      requirementId: "servicenow-instance",
      state: input.instanceUrl ? "configured" : "missing",
      message: input.instanceUrl
        ? "ServiceNow instance URL is configured."
        : "A ServiceNow instance URL is required.",
    },
    {
      providerPackageId: serviceNowTicketingProviderManifest.id,
      requirementId: "servicenow-api-access",
      state: hasBasic || hasBearer ? "configured" : "missing",
      scopes: ["table_api"],
      message: hasBasic || hasBearer
        ? "ServiceNow API access is configured."
        : "ServiceNow Basic Auth credentials or an OAuth bearer token are required.",
    },
  ];
}

export function createServiceNowTicketingLiveChecks(options: ServiceNowLiveCheckOptions) {
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

function normalizeInstanceUrl(instanceUrl: string) {
  if (!instanceUrl) throw new Error("ServiceNow instanceUrl is required.");
  const url = new URL(instanceUrl);
  return `${url.protocol}//${url.host}`;
}

function tableUrl(baseUrl: string, tableName: string) {
  return new URL(`/api/now/table/${encodeURIComponent(tableName)}`, baseUrl);
}

function tableRecordUrl(baseUrl: string, tableName: string, sysId: string) {
  return new URL(`/api/now/table/${encodeURIComponent(tableName)}/${encodeURIComponent(sysId)}`, baseUrl);
}

function attachmentFileUrl(baseUrl: string, input: ServiceNowUploadAttachmentInput) {
  const url = new URL("/api/now/attachment/file", baseUrl);
  url.searchParams.set("table_name", input.tableName);
  url.searchParams.set("table_sys_id", input.tableSysId);
  url.searchParams.set("file_name", input.fileName);
  return url;
}

function importSetUrl(baseUrl: string, stagingTableName: string) {
  return new URL(`/api/now/import/${encodeURIComponent(stagingTableName)}`, baseUrl);
}

function applyTableQuery(url: URL, query: Partial<ServiceNowTableQuery> = {}) {
  if (query.query) url.searchParams.set("sysparm_query", query.query);
  if (query.fields?.length) url.searchParams.set("sysparm_fields", query.fields.join(","));
  if (query.limit !== undefined) url.searchParams.set("sysparm_limit", String(query.limit));
  if (query.offset !== undefined) url.searchParams.set("sysparm_offset", String(query.offset));
  if (query.displayValue !== undefined) url.searchParams.set("sysparm_display_value", String(query.displayValue));
  if (query.excludeReferenceLink !== undefined) {
    url.searchParams.set("sysparm_exclude_reference_link", String(query.excludeReferenceLink));
  }
}

async function serviceNowRequest<T>(input: {
  url: URL;
  method: "GET" | "POST" | "PATCH";
  options: ServiceNowTicketingClientOptions;
  fetch: typeof fetch;
  body?: ServiceNowProviderPayload;
  rawBody?: BodyInit;
  contentType?: string;
  expectArray?: boolean;
}): Promise<T> {
  const response = await input.fetch(input.url.toString(), {
    method: input.method,
    headers: {
      accept: "application/json",
      ...(input.body ? { "content-type": "application/json" } : {}),
      ...(input.rawBody && input.contentType ? { "content-type": input.contentType } : {}),
      ...authHeaders(input.options),
    },
    ...(input.body ? { body: JSON.stringify(input.body) } : {}),
    ...(input.rawBody ? { body: input.rawBody } : {}),
  });
  const text = await response.text();
  const body = text ? JSON.parse(text) as {
    result?: unknown;
    error?: { message?: string; detail?: string };
  } : {};
  if (!response.ok) {
    throw new Error(body.error?.message ?? body.error?.detail ?? `ServiceNow Table API returned ${response.status}.`);
  }
  const result = body.result ?? (input.expectArray ? [] : {});
  return result as T;
}

function authHeaders(options: ServiceNowTicketingClientOptions) {
  if (options.accessToken) return { authorization: `Bearer ${options.accessToken}` };
  if (options.username && options.password) {
    return {
      authorization: `Basic ${Buffer.from(`${options.username}:${options.password}`).toString("base64")}`,
    };
  }
  throw new Error("ServiceNow API access requires either accessToken or username and password.");
}
