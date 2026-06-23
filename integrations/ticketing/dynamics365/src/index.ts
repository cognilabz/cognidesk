import type { ProviderCredentialStatusInput } from "@cognidesk/core";
import { dynamics365TicketingProviderManifest } from "./manifest.js";

export { dynamics365TicketingProviderManifest } from "./manifest.js";

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
