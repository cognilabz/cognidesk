import type { ProviderCredentialStatusInput } from "@cognidesk/core";
import { defineIntegrationProviderPackage as defineProviderPackage } from "../../provider-manifest.js";

export const dynamics365TicketingProviderManifest = defineProviderPackage({
  id: "ticketing.dynamics365",
  name: "Microsoft Dynamics 365 Customer Service",
  packageName: "@cognidesk/integrations",
  provider: "dynamics365",
  category: "ticketing",
  trustLevel: "official",
  directions: ["bidirectional"],
  channelAudiences: ["customer-facing", "internal-support", "mixed"],
  coverage: {
    scope: "support-workflow-subset",
    notes: [
      "Coverage is limited to Dataverse incident CRUD/search, selected metadata/readiness helpers, incident notes via annotations, queue AddToQueue, and queue/activity reads used by Cognidesk support workflows.",
      "Annotation note creation supports bounded inline annotation document fields (`filename`, `documentbody`, `mimetype`) on the Dataverse annotation record; this is not a complete file/attachment lifecycle.",
      "This is not full Microsoft Dataverse, Dynamics 365 Customer Service, activity, annotation attachment, relationship metadata, broader queue routing, or custom action API coverage.",
    ],
    evidence: [
      { label: "Microsoft Dataverse Web API overview", url: "https://learn.microsoft.com/en-us/power-apps/developer/data-platform/webapi/overview" },
      { label: "Dynamics 365 Customer Service incident table reference", url: "https://learn.microsoft.com/en-us/dynamics365/customer-service/develop/reference/entities/incident" },
      { label: "Dataverse EntityDefinitions metadata queries", url: "https://learn.microsoft.com/en-us/power-apps/developer/data-platform/webapi/query-metadata-web-api" },
      { label: "Dataverse WhoAmI Function", url: "https://learn.microsoft.com/en-us/power-apps/developer/data-platform/webapi/reference/whoami?view=dataverse-latest" },
      { label: "Dataverse Note/Annotation table reference", url: "https://learn.microsoft.com/en-us/power-apps/developer/data-platform/reference/entities/annotation" },
      { label: "Dataverse ActivityPointer table reference", url: "https://learn.microsoft.com/en-us/power-apps/developer/data-platform/reference/entities/activitypointer" },
      { label: "Dataverse queue EntityType reference", url: "https://learn.microsoft.com/en-us/power-apps/developer/data-platform/webapi/reference/queue" },
      { label: "Dataverse AddToQueue Action", url: "https://learn.microsoft.com/en-us/power-apps/developer/data-platform/webapi/reference/addtoqueue?view=dataverse-latest" },
      { label: "Dynamics 365 Omnichannel JavaScript API", url: "https://learn.microsoft.com/en-us/dynamics365/customer-service/develop/omnichannel-api-reference" },
      { label: "Dynamics 365 custom messaging channel table", url: "https://learn.microsoft.com/en-us/dynamics365/customer-service/develop/reference/entities/msdyn_occustommessagingchannel" },
      { label: "Dynamics 365 getConversations Omnichannel API", url: "https://learn.microsoft.com/en-us/dynamics365/customer-service/develop/reference/methods/getconversations" },
    ],
  },
  credentialRequirements: [
    { id: "dynamics365-instance", label: "Dynamics 365 Dataverse environment URL", required: true },
    {
      id: "dynamics365-api-access",
      label: "Dynamics 365 OAuth access",
      scopes: ["user_impersonation"],
      required: true,
      metadata: {
        scopeKind: "provider-oauth-scopes",
        privilegeGuidance: "Delegated clients request <environment-url>/user_impersonation; confidential clients commonly request <environment-url>/.default. Dataverse security roles still govern incident, annotation, queue, activity, and AddToQueue access.",
      },
    },
  ],
  capabilities: [
    {
      capability: "create-provider-object",
      label: "Create Dynamics cases",
      description: "Creates Dataverse incident records for SDK-user-configured customer-service handoff.",
      audiences: ["customer-facing", "internal-support", "mixed"],
      providerObjects: [{ kind: "dynamics365Incident", label: "Dynamics 365 Case", schemaName: "incident" }, { kind: "dynamics365Annotation", label: "Dynamics 365 Annotation", schemaName: "annotation" }],
      requiresCredential: true,
      sideEffect: true,
      exposesSensitiveData: true,
      changesWorkflow: true,
    },
    {
      capability: "read-provider-object",
      label: "Read Dynamics cases",
      description: "Reads Dataverse incident records and readiness metadata.",
      audiences: ["internal-support", "mixed"],
      providerObjects: [{ kind: "dynamics365Incident", label: "Dynamics 365 Case", schemaName: "incident" }, { kind: "dynamics365Annotation", label: "Dynamics 365 Annotation", schemaName: "annotation" }, { kind: "dynamics365Queue", label: "Dynamics 365 Queue", schemaName: "queue" }, { kind: "dynamics365Activity", label: "Dynamics 365 Activity", schemaName: "activitypointer" }],
      requiresCredential: true,
      exposesSensitiveData: true,
    },
    {
      capability: "update-provider-object",
      label: "Update Dynamics cases",
      description: "Updates Dataverse incident records such as status, title, description, owner, or custom fields.",
      audiences: ["internal-support", "mixed"],
      providerObjects: [{ kind: "dynamics365Incident", label: "Dynamics 365 Case", schemaName: "incident" }],
      requiresCredential: true,
      sideEffect: true,
      exposesSensitiveData: true,
      changesWorkflow: true,
    },
    {
      capability: "search-provider-object",
      label: "Search Dynamics cases",
      description: "Queries Dataverse incident records with SDK-user-supplied OData options.",
      audiences: ["internal-support", "mixed"],
      providerObjects: [{ kind: "dynamics365Incident", label: "Dynamics 365 Case", schemaName: "incident" }, { kind: "dynamics365Annotation", label: "Dynamics 365 Annotation", schemaName: "annotation" }, { kind: "dynamics365Queue", label: "Dynamics 365 Queue", schemaName: "queue" }, { kind: "dynamics365Activity", label: "Dynamics 365 Activity", schemaName: "activitypointer" }],
      requiresCredential: true,
      exposesSensitiveData: true,
    },
    {
      capability: "handoff",
      label: "Attach handoff to Dynamics",
      description: "Uses Dataverse incident, annotation, and selected queue operations in SDK-user-configured record handoff workflows; this does not imply native Omnichannel conversation transfer or live-work-item mutation.",
      audiences: ["customer-facing", "internal-support", "mixed"],
      providerObjects: [{ kind: "dynamics365Incident", label: "Dynamics 365 Case", schemaName: "incident" }, { kind: "dynamics365Annotation", label: "Dynamics 365 Annotation", schemaName: "annotation" }, { kind: "dynamics365Queue", label: "Dynamics 365 Queue", schemaName: "queue" }],
      requiresCredential: true,
      sideEffect: true,
      exposesSensitiveData: true,
      changesWorkflow: true,
    },
  ],
  privacyNotes: [
    "Dynamics cases can contain customer identity, support summaries, entitlements, queue and owner metadata, and internal notes.",
    "Dynamics OAuth credentials stay server-side and Studio receives only readiness.",
  ],
  limitations: [
    "Dataverse table customizations, required fields, queues, owners, security roles, and routing rules are SDK-user configuration.",
    "Unified Routing live-work-item mutation is provider-sensitive and must not be inferred from typed AddToQueue support.",
  ],
  metadata: {
    checkedProviderApiCoverage: {
      verifiedAt: "2026-06-18",
      sourceKind: "checked-endpoint-family-inventory",
      coverageArtifact: "docs/provider-coverage/dynamics365-checked-dataverse-customer-service-2026-06-18.inventory.json",
      familyCount: 4,
      implementedFamilyCount: 3,
      gapFamilyCount: 1,
      implementedOperationCount: 11,
      fullCoverageExportRequirement: "Full environment-specific Dataverse/Dynamics coverage requires the SDK user's $metadata/CSDL, EntityDefinitions, solution customizations, enabled Dynamics 365 Customer Service products, security roles, and custom action/function export.",
    },
    channelCoverage: {
      incidents: "typed-crud-search",
      annotationsCaseNotes: "typed-create-list",
      annotationInlineDocumentFields: "typed-selected",
      queueRouting: "typed-selected",
      queues: "typed-list",
      activities: "typed-list",
      metadataReadiness: "typed-selected",
      messagingApis: "provider-supported-not-typed",
      customMessagingChannels: "provider-supported-not-typed",
      omnichannelLiveChatWidget: "provider-supported-client-sdk-not-typed",
      linkToConversation: "provider-supported-client-sdk-not-typed",
      conversationsLiveWorkItems: "provider-supported-not-typed",
      transcriptAnnotations: "provider-supported-not-typed",
      ccaasConversationActions: "provider-supported-not-typed",
      unifiedRoutingLiveWorkItemMutation: "provider-supported-not-typed",
      annotationAttachmentLifecycle: "provider-supported-not-typed",
      relationshipMetadata: "not-covered",
      customActions: "not-covered",
    },
  },
  maintainers: [{ name: "Cognidesk", type: "official" }],
});

export type Dynamics365JsonPrimitive = string | number | boolean | null;
export type Dynamics365JsonValue =
  | Dynamics365JsonPrimitive
  | Dynamics365JsonObject
  | readonly Dynamics365JsonValue[];
export type Dynamics365ProviderExtensionValue = Dynamics365JsonValue | object | undefined;
export interface Dynamics365JsonObject {
  [key: string]: Dynamics365ProviderExtensionValue;
}
export type Dynamics365ProviderPayload = Dynamics365JsonObject | object;
export type Dynamics365ProviderQuery = Record<string, Dynamics365ProviderExtensionValue>;
export interface Dynamics365ProviderResponse extends Dynamics365JsonObject {}
export interface Dynamics365ProviderExtensionFields extends Dynamics365JsonObject {}

export interface Dynamics365TicketingClientOptions {
  instanceUrl: string;
  accessToken?: string;
  apiVersion?: string;
  fetch?: typeof fetch;
}

export interface Dynamics365CredentialStatusInput {
  instanceUrl?: string;
  apiAccessConfigured?: boolean;
}

export interface Dynamics365CaseInput {
  title: string;
  description?: string;
  customerId?: string;
  priorityCode?: number;
  additionalFields?: Dynamics365ProviderExtensionFields;
}

export interface Dynamics365SearchInput {
  select?: string[];
  filter?: string;
  top?: number;
  orderBy?: string;
}

export interface Dynamics365EntityDefinitionInput {
  logicalName: string;
  select?: string[];
}

export interface Dynamics365CreateCaseNoteInput {
  caseId: string;
  subject?: string;
  text: string;
  filename?: string;
  documentBody?: string;
  mimeType?: string;
  additionalFields?: Dynamics365ProviderExtensionFields;
}

export interface Dynamics365AddToQueueInput {
  queueId: string;
  targetEntitySetName?: string;
  targetId: string;
  sourceQueueId?: string;
  queueItemProperties?: Dynamics365JsonObject;
}

export interface Dynamics365TicketingClient {
  createCase(input: Dynamics365CaseInput): Promise<Dynamics365ProviderResponse>;
  getCase(caseId: string): Promise<Dynamics365ProviderResponse>;
  updateCase(caseId: string, patch: Dynamics365ProviderPayload): Promise<Dynamics365ProviderResponse>;
  searchCases(input?: Dynamics365SearchInput): Promise<Dynamics365ProviderResponse>;
  getEntityDefinition(input: Dynamics365EntityDefinitionInput): Promise<Dynamics365ProviderResponse>;
  createCaseNote(input: Dynamics365CreateCaseNoteInput): Promise<Dynamics365ProviderResponse>;
  listCaseNotes(caseId: string, input?: Dynamics365SearchInput): Promise<Dynamics365ProviderResponse>;
  addToQueue(input: Dynamics365AddToQueueInput): Promise<Dynamics365ProviderResponse>;
  listQueues(input?: Dynamics365SearchInput): Promise<Dynamics365ProviderResponse>;
  listActivities(input?: Dynamics365SearchInput): Promise<Dynamics365ProviderResponse>;
  readiness(): Promise<Dynamics365ProviderResponse>;
}

export interface Dynamics365LiveCheckOptions extends Dynamics365TicketingClientOptions {
  client?: Pick<Dynamics365TicketingClient, "readiness">;
}

export function createDynamics365TicketingClient(options: Dynamics365TicketingClientOptions): Dynamics365TicketingClient {
  const fetchImpl = options.fetch ?? fetch;
  return {
    async createCase(input) {
      return dynamicsRequest({
        options,
        fetch: fetchImpl,
        method: "POST",
        path: "/incidents",
        body: {
          title: input.title,
          ...(input.description ? { description: input.description } : {}),
          ...(input.customerId ? { "customerid_account@odata.bind": `/accounts(${input.customerId})` } : {}),
          ...(input.priorityCode !== undefined ? { prioritycode: input.priorityCode } : {}),
          ...(input.additionalFields ?? {}),
        },
      });
    },
    async getCase(caseId) {
      return dynamicsRequest({ options, fetch: fetchImpl, method: "GET", path: `/incidents(${encodeURIComponent(caseId)})` });
    },
    async updateCase(caseId, patch) {
      return dynamicsRequest({ options, fetch: fetchImpl, method: "PATCH", path: `/incidents(${encodeURIComponent(caseId)})`, body: patch });
    },
    async searchCases(input = {}) {
      const params = odataParams(input);
      return dynamicsRequest({ options, fetch: fetchImpl, method: "GET", path: `/incidents${params.size ? `?${params}` : ""}` });
    },
    async getEntityDefinition(input) {
      const escapedLogicalName = input.logicalName.replace(/'/g, "''");
      const params = new URLSearchParams();
      if (input.select?.length) params.set("$select", input.select.join(","));
      return dynamicsRequest({
        options,
        fetch: fetchImpl,
        method: "GET",
        path: `/EntityDefinitions(LogicalName='${escapedLogicalName}')${params.size ? `?${params}` : ""}`,
      });
    },
    async createCaseNote(input) {
      return dynamicsRequest({
        options,
        fetch: fetchImpl,
        method: "POST",
        path: "/annotations",
        body: {
          ...input.additionalFields,
          "objectid_incident@odata.bind": `/incidents(${input.caseId})`,
          notetext: input.text,
          ...(input.subject ? { subject: input.subject } : {}),
          ...(input.filename ? { filename: input.filename } : {}),
          ...(input.documentBody ? { documentbody: input.documentBody } : {}),
          ...(input.mimeType ? { mimetype: input.mimeType } : {}),
        },
      });
    },
    async listCaseNotes(caseId, input = {}) {
      const filter = `_objectid_value eq ${caseId}`;
      const params = odataParams({ ...input, filter: input.filter ? `(${filter}) and (${input.filter})` : filter });
      return dynamicsRequest({ options, fetch: fetchImpl, method: "GET", path: `/annotations${params.size ? `?${params}` : ""}` });
    },
    async addToQueue(input) {
      return dynamicsRequest({
        options,
        fetch: fetchImpl,
        method: "POST",
        path: `/queues(${encodeURIComponent(input.queueId)})/Microsoft.Dynamics.CRM.AddToQueue`,
        body: {
          Target: { "@odata.id": `${input.targetEntitySetName ?? "incidents"}(${input.targetId})` },
          ...(input.sourceQueueId ? { SourceQueue: { "@odata.id": `queues(${input.sourceQueueId})` } } : {}),
          ...(input.queueItemProperties ? { QueueItemProperties: input.queueItemProperties } : {}),
        },
      });
    },
    async listQueues(input = {}) {
      const params = odataParams(input);
      return dynamicsRequest({ options, fetch: fetchImpl, method: "GET", path: `/queues${params.size ? `?${params}` : ""}` });
    },
    async listActivities(input = {}) {
      const params = odataParams(input);
      return dynamicsRequest({ options, fetch: fetchImpl, method: "GET", path: `/activitypointers${params.size ? `?${params}` : ""}` });
    },
    async readiness() {
      return dynamicsRequest({ options, fetch: fetchImpl, method: "GET", path: "/WhoAmI()" });
    },
  };
}

export function dynamics365TicketingCredentialStatuses(input: Dynamics365CredentialStatusInput): ProviderCredentialStatusInput[] {
  return [
    {
      providerPackageId: dynamics365TicketingProviderManifest.id,
      requirementId: "dynamics365-instance",
      state: input.instanceUrl ? "configured" : "missing",
      message: input.instanceUrl ? "Dynamics 365 environment URL is configured." : "Dynamics 365 environment URL is required.",
    },
    {
      providerPackageId: dynamics365TicketingProviderManifest.id,
      requirementId: "dynamics365-api-access",
      state: input.apiAccessConfigured ? "configured" : "missing",
      scopes: ["user_impersonation"],
      message: input.apiAccessConfigured ? "Dynamics 365 OAuth access is configured." : "Dynamics 365 OAuth access is required.",
    },
  ];
}

export function createDynamics365TicketingLiveChecks(options: Dynamics365LiveCheckOptions) {
  return [{
    id: "whoami",
    description: "Dynamics 365 Dataverse Web API can call WhoAmI with supplied credentials.",
    requiredCredentialIds: ["dynamics365-instance", "dynamics365-api-access"],
    async run(context: { signal?: AbortSignal }) {
      const client = options.client ?? createDynamics365TicketingClient(options);
      const result = await client.readiness();
      if (context.signal?.aborted) throw new Error("Dynamics 365 readiness check aborted.");
      return { details: { ok: Boolean(result) } };
    },
  }];
}

async function dynamicsRequest(input: {
  options: Dynamics365TicketingClientOptions;
  fetch: typeof fetch;
  method: "GET" | "POST" | "PATCH";
  path: string;
  body?: Dynamics365ProviderPayload;
}) {
  const base = `${normalizeInstanceUrl(input.options.instanceUrl)}/api/data/${input.options.apiVersion ?? "v9.2"}`;
  const response = await input.fetch(`${base}${input.path}`, {
    method: input.method,
    headers: {
      accept: "application/json",
      "odata-version": "4.0",
      "odata-maxversion": "4.0",
      ...(input.body ? { "content-type": "application/json" } : {}),
      ...(input.options.accessToken ? { authorization: `Bearer ${input.options.accessToken}` } : {}),
    },
    ...(input.body ? { body: JSON.stringify(input.body) } : {}),
  });
  return parseResponse(response, "Dynamics 365");
}

function normalizeInstanceUrl(instanceUrl: string) {
  if (!instanceUrl) throw new Error("Dynamics 365 instanceUrl is required.");
  const url = new URL(instanceUrl);
  return `${url.protocol}//${url.host}`;
}

function odataParams(input: Dynamics365SearchInput) {
  const params = new URLSearchParams();
  if (input.select?.length) params.set("$select", input.select.join(","));
  if (input.filter) params.set("$filter", input.filter);
  if (input.top !== undefined) params.set("$top", String(input.top));
  if (input.orderBy) params.set("$orderby", input.orderBy);
  return params;
}

async function parseResponse(response: Response, provider: string) {
  const text = await response.text();
  const body = text ? JSON.parse(text) as Dynamics365JsonObject : {};
  if (!response.ok) throw new Error(typeof body.error === "object" && body.error && "message" in body.error ? String(body.error.message) : `${provider} API returned ${response.status}.`);
  return body;
}
