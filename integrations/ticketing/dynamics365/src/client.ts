import { DynamicsWebApi } from "dynamics-web-api";
import type { ProviderCredentialStatusInput } from "@cognidesk/core";
import {
  defineIntegration,
  type IntegrationOperationContext,
  type IntegrationOperationHandlers,
} from "@cognidesk/integration-kit";
import { dynamics365TicketingProviderManifest } from "./manifest.js";

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

export type Dynamics365RawClient = DynamicsWebApi;

export interface Dynamics365TicketingClientOptions {
  instanceUrl?: string;
  accessToken?: string;
  apiVersion?: string;
  rawClient?: Dynamics365RawClient;
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

export interface Dynamics365TicketingOperationsClient {
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

export interface Dynamics365TicketingClient extends Dynamics365TicketingOperationsClient {
  rawClient: Dynamics365RawClient;
  getRawClient(): Dynamics365RawClient;
  integration: ReturnType<typeof defineIntegration>;
}

export interface Dynamics365TicketingIntegrationOptions extends Dynamics365TicketingClientOptions {
  client?: Dynamics365TicketingOperationsClient;
}

export interface Dynamics365LiveCheckOptions extends Dynamics365TicketingClientOptions {
  client?: Pick<Dynamics365TicketingOperationsClient, "readiness">;
}

export function createDynamics365TicketingClient(
  options: Dynamics365TicketingClientOptions = {},
): Dynamics365TicketingClient {
  const rawClient = options.rawClient ?? createDynamics365RawClient(options);
  const client = {
    rawClient,
    getRawClient() {
      return rawClient;
    },
    async createCase(input) {
      const customerId = input.customerId
        ? dataverseGuid(input.customerId, "customerId")
        : undefined;
      return rawClient.create({
        collection: "incidents",
        data: stripUndefined({
          title: input.title,
          description: input.description,
          ...(customerId ? { "customerid_account@odata.bind": `/accounts(${customerId})` } : {}),
          prioritycode: input.priorityCode,
          ...(input.additionalFields ?? {}),
        }),
      }) as Promise<Dynamics365ProviderResponse>;
    },
    async getCase(caseId) {
      return rawClient.retrieve({
        collection: "incidents",
        key: caseId,
      }) as Promise<Dynamics365ProviderResponse>;
    },
    async updateCase(caseId, patch) {
      const result = await rawClient.update({
        collection: "incidents",
        key: caseId,
        data: patch,
      });
      return (result ?? {}) as Dynamics365ProviderResponse;
    },
    async searchCases(input = {}) {
      return rawClient.retrieveMultiple({
        collection: "incidents",
        ...searchRequest(input),
      }) as unknown as Promise<Dynamics365ProviderResponse>;
    },
    async getEntityDefinition(input) {
      return rawClient.retrieveEntity({
        key: `LogicalName='${input.logicalName.replace(/'/g, "''")}'`,
        ...(input.select?.length ? { select: input.select } : {}),
      }) as Promise<Dynamics365ProviderResponse>;
    },
    async createCaseNote(input) {
      const caseId = dataverseGuid(input.caseId, "caseId");
      return rawClient.create({
        collection: "annotations",
        data: stripUndefined({
          ...(input.additionalFields ?? {}),
          "objectid_incident@odata.bind": `/incidents(${caseId})`,
          notetext: input.text,
          subject: input.subject,
          filename: input.filename,
          documentbody: input.documentBody,
          mimetype: input.mimeType,
        }),
      }) as Promise<Dynamics365ProviderResponse>;
    },
    async listCaseNotes(caseId, input = {}) {
      const normalizedCaseId = dataverseGuid(caseId, "caseId");
      const filter = `_objectid_value eq ${normalizedCaseId}`;
      return rawClient.retrieveMultiple({
        collection: "annotations",
        ...searchRequest({
          ...input,
          filter: input.filter ? `(${filter}) and (${input.filter})` : filter,
        }),
      }) as unknown as Promise<Dynamics365ProviderResponse>;
    },
    async addToQueue(input) {
      const queueId = dataverseGuid(input.queueId, "queueId");
      const targetId = dataverseGuid(input.targetId, "targetId");
      const sourceQueueId = input.sourceQueueId
        ? dataverseGuid(input.sourceQueueId, "sourceQueueId")
        : undefined;
      const targetEntitySetName = dataverseEntitySetName(input.targetEntitySetName ?? "incidents", "targetEntitySetName");
      return rawClient.callAction({
        collection: "queues",
        key: queueId,
        actionName: "Microsoft.Dynamics.CRM.AddToQueue",
        action: stripUndefined({
          Target: { "@odata.id": `${targetEntitySetName}(${targetId})` },
          ...(sourceQueueId ? { SourceQueue: { "@odata.id": `queues(${sourceQueueId})` } } : {}),
          ...(input.queueItemProperties ? { QueueItemProperties: input.queueItemProperties } : {}),
        }),
      }) as Promise<Dynamics365ProviderResponse>;
    },
    async listQueues(input = {}) {
      return rawClient.retrieveMultiple({
        collection: "queues",
        ...searchRequest(input),
      }) as unknown as Promise<Dynamics365ProviderResponse>;
    },
    async listActivities(input = {}) {
      return rawClient.retrieveMultiple({
        collection: "activitypointers",
        ...searchRequest(input),
      }) as unknown as Promise<Dynamics365ProviderResponse>;
    },
    async readiness() {
      return rawClient.callFunction("WhoAmI") as Promise<Dynamics365ProviderResponse>;
    },
  } satisfies Omit<Dynamics365TicketingClient, "integration">;

  return {
    ...client,
    integration: defineIntegration({
      manifest: dynamics365TicketingProviderManifest,
      operations: createDynamics365TicketingOperationHandlers(client),
    }),
  };
}

export function createDynamics365TicketingIntegration(options: Dynamics365TicketingIntegrationOptions = {}) {
  const client = options.client ?? createDynamics365TicketingClient(options);
  return defineIntegration({
    manifest: dynamics365TicketingProviderManifest,
    operations: createDynamics365TicketingOperationHandlers(client),
    credentials: dynamics365IntegrationCredentials(options),
  });
}

export function createDynamics365TicketingOperationHandlers(
  client: Dynamics365TicketingOperationsClient,
): IntegrationOperationHandlers {
  return {
    "ticket.create": (input: Dynamics365CaseInput, _context: IntegrationOperationContext) =>
      client.createCase(input),
    "ticket.read": (input: Dynamics365ReadOperationInput) =>
      client.getCase(caseInputId(input)),
    "ticket.update": (input: Dynamics365UpdateOperationInput) =>
      client.updateCase(caseInputId(input), updatePatch(input)),
    "ticket.search": (input: Dynamics365SearchInput = {}) =>
      client.searchCases(input),
    "ticket.internalNote.create": (input: Dynamics365CaseNoteOperationInput) =>
      client.createCaseNote(caseNoteInput(input)),
    "dynamics365.entity-definition.read": (input: Dynamics365EntityDefinitionInput) =>
      client.getEntityDefinition(input),
    "dynamics365.case-note.create": (input: Dynamics365CreateCaseNoteInput) =>
      client.createCaseNote(input),
    "dynamics365.case-notes.list": (input: Dynamics365ListCaseNotesOperationInput) =>
      client.listCaseNotes(caseInputId(input), input.query ?? searchFields(input)),
    "dynamics365.queue.addToQueue": (input: Dynamics365AddToQueueInput) =>
      client.addToQueue(input),
    "dynamics365.queues.list": (input: Dynamics365SearchInput = {}) =>
      client.listQueues(input),
    "dynamics365.activities.list": (input: Dynamics365SearchInput = {}) =>
      client.listActivities(input),
    "dynamics365.whoami": () => client.readiness(),
  };
}

export function dynamics365TicketingCredentialStatuses(
  input: Dynamics365CredentialStatusInput,
): ProviderCredentialStatusInput[] {
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

interface Dynamics365ReadOperationInput {
  ticketId?: string;
  caseId?: string;
  id?: string;
}

interface Dynamics365UpdateOperationInput extends Dynamics365ReadOperationInput {
  patch?: Dynamics365ProviderPayload;
  body?: Dynamics365ProviderPayload;
  fields?: Dynamics365ProviderPayload;
}

interface Dynamics365CaseNoteOperationInput extends Dynamics365ReadOperationInput {
  subject?: string;
  text?: string;
  body?: string;
  note?: string;
  comment?: string;
  filename?: string;
  documentBody?: string;
  mimeType?: string;
  additionalFields?: Dynamics365ProviderExtensionFields;
  fields?: Dynamics365ProviderExtensionFields;
}

interface Dynamics365ListCaseNotesOperationInput extends Dynamics365ReadOperationInput, Dynamics365SearchInput {
  query?: Dynamics365SearchInput;
}

export function createDynamics365RawClient(options: Dynamics365TicketingClientOptions): Dynamics365RawClient {
  return new DynamicsWebApi({
    serverUrl: normalizeInstanceUrl(options.instanceUrl),
    propagateErrors: true,
    ...(options.accessToken ? { onTokenRefresh: async () => options.accessToken ?? null } : {}),
    ...(options.apiVersion ? { dataApi: { version: normalizeApiVersion(options.apiVersion), path: "data" } } : {}),
  });
}

function normalizeInstanceUrl(instanceUrl?: string) {
  if (!instanceUrl) throw new Error("Dynamics 365 instanceUrl is required.");
  const url = new URL(instanceUrl);
  return `${url.protocol}//${url.host}/`;
}

function normalizeApiVersion(apiVersion: string) {
  return apiVersion.replace(/^v/i, "");
}

function searchRequest(input: Dynamics365SearchInput) {
  const request: {
    select?: string[];
    filter?: string;
    top?: number;
    orderBy?: string[];
  } = {};
  if (input.select?.length) request.select = input.select;
  if (input.filter) request.filter = input.filter;
  if (input.top !== undefined) request.top = input.top;
  if (input.orderBy) request.orderBy = [input.orderBy];
  return request;
}

function caseInputId(input: Dynamics365ReadOperationInput) {
  const id = input.ticketId ?? input.caseId ?? input.id;
  if (!id) throw new Error("Dynamics 365 case id is required.");
  return id;
}

function updatePatch(input: Dynamics365UpdateOperationInput) {
  if (input.patch) return input.patch;
  if (input.body) return input.body;
  if (input.fields) return input.fields;
  const { ticketId: _ticketId, caseId: _caseId, id: _id, ...patch } = input;
  if (Object.keys(patch).length === 0) {
    throw new Error("Dynamics 365 ticket.update requires patch, body, or fields.");
  }
  return patch;
}

function caseNoteInput(input: Dynamics365CaseNoteOperationInput): Dynamics365CreateCaseNoteInput {
  const text = input.text ?? input.body ?? input.note ?? input.comment;
  if (!text) throw new Error("Dynamics 365 case note text is required.");
  return {
    caseId: caseInputId(input),
    text,
    ...(input.subject ? { subject: input.subject } : {}),
    ...(input.filename ? { filename: input.filename } : {}),
    ...(input.documentBody ? { documentBody: input.documentBody } : {}),
    ...(input.mimeType ? { mimeType: input.mimeType } : {}),
    ...(input.additionalFields ?? input.fields ? { additionalFields: input.additionalFields ?? input.fields } : {}),
  };
}

function searchFields(input: Dynamics365ListCaseNotesOperationInput): Dynamics365SearchInput {
  return {
    ...(input.select ? { select: input.select } : {}),
    ...(input.filter ? { filter: input.filter } : {}),
    ...(input.top !== undefined ? { top: input.top } : {}),
    ...(input.orderBy ? { orderBy: input.orderBy } : {}),
  };
}

function dynamics365IntegrationCredentials(
  options: Dynamics365TicketingIntegrationOptions,
): Dynamics365JsonObject {
  return stripUndefined({
    clientConfigured: options.client ? true : undefined,
    rawClientConfigured: options.rawClient ? true : undefined,
    instanceUrl: options.instanceUrl,
    apiVersion: options.apiVersion,
    apiAccessConfigured: options.accessToken ? true : undefined,
  });
}

function dataverseGuid(value: string, label: string): string {
  const trimmed = value.trim();
  const match = trimmed.match(/^\{?([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-5][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})\}?$/);
  if (!match) throw new Error(`Dynamics 365 ${label} must be a GUID.`);
  return match[1]!;
}

function dataverseEntitySetName(value: string, label: string): string {
  const trimmed = value.trim();
  if (!/^[A-Za-z][A-Za-z0-9_]*$/.test(trimmed)) {
    throw new Error(`Dynamics 365 ${label} must be a Dataverse entity-set name.`);
  }
  return trimmed;
}

function stripUndefined<T extends Record<string, unknown>>(input: T): T {
  return Object.fromEntries(Object.entries(input).filter(([, value]) => value !== undefined)) as T;
}
