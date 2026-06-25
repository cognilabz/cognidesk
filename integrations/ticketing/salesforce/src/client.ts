import jsforce from "jsforce";
import { defineIntegration, type IntegrationOperationHandlers } from "@cognidesk/integration-kit";
import { salesforceTicketingProviderManifest } from "./manifest.js";

export type SalesforceTicketingSdkClient = InstanceType<typeof jsforce.Connection>;

export interface SalesforceTicketingRawClient {
  sobject(name: string): {
    retrieve(id: string | string[]): Promise<unknown>;
    create(input: SalesforceProviderPayload | SalesforceProviderPayload[]): Promise<unknown>;
    update(input: SalesforceProviderPayload | SalesforceProviderPayload[]): Promise<unknown>;
  };
  query(soql: string): PromiseLike<unknown>;
}

export type SalesforceProviderPrimitive = string | number | boolean | null;
export type SalesforceProviderValue =
  | SalesforceProviderPrimitive
  | SalesforceProviderPayload
  | readonly SalesforceProviderValue[];
export interface SalesforceProviderPayload {
  [key: string]: SalesforceProviderValue | undefined;
}

export interface SalesforceTicketingClientOptions {
  instanceUrl?: string;
  accessToken?: string;
  rawClient?: SalesforceTicketingRawClient;
}

export interface SalesforceCaseInput {
  subject?: string;
  description?: string;
  status?: string;
  priority?: string;
  origin?: string;
  contactId?: string;
  accountId?: string;
  ownerId?: string;
  suppliedEmail?: string;
  suppliedName?: string;
  fields?: SalesforceProviderPayload;
}

export interface SalesforceReadCaseInput {
  ticketId?: string;
  id?: string;
}

export interface SalesforceUpdateCaseInput extends SalesforceCaseInput, SalesforceReadCaseInput {
  patch?: SalesforceCaseInput;
}

export interface SalesforceCaseCommentInput {
  ticketId?: string;
  caseId?: string;
  body?: string;
  text?: string;
  comment?: string;
  isPublished?: boolean;
  fields?: SalesforceProviderPayload;
}

export interface SalesforceCaseSearchInput {
  soql?: string;
  where?: string;
  limit?: number;
}

export interface SalesforceInternalNoteInput {
  ticketId?: string;
  caseId?: string;
  body?: string;
  text?: string;
  note?: string;
  type?: string;
  visibility?: string;
  fields?: SalesforceProviderPayload;
}

export interface SalesforceSoqlQueryInput {
  soql?: string;
  query?: string;
}

export interface SalesforceTicketingOperationsClient {
  getRawClient(): SalesforceTicketingRawClient;
  getCase(caseId: string): Promise<unknown>;
  createCase(input: SalesforceCaseInput): Promise<unknown>;
  updateCase(caseId: string, patch: SalesforceCaseInput): Promise<unknown>;
  searchCases(input?: SalesforceCaseSearchInput): Promise<unknown>;
  createCaseComment(input: SalesforceCaseCommentInput): Promise<unknown>;
  createInternalNote(input: SalesforceInternalNoteInput): Promise<unknown>;
  querySoql(soql: string): Promise<unknown>;
}

export interface SalesforceTicketingClient extends SalesforceTicketingOperationsClient {
  rawClient: SalesforceTicketingRawClient;
  integration: ReturnType<typeof defineIntegration>;
}

export function createSalesforceTicketingClient(options: SalesforceTicketingClientOptions = {}): SalesforceTicketingClient {
  const rawClient = options.rawClient ?? new jsforce.Connection({
    ...(options.instanceUrl ? { instanceUrl: options.instanceUrl } : {}),
    ...(options.accessToken ? { accessToken: options.accessToken } : {}),
  });
  const client = createSalesforceTicketingOperationsClient(rawClient);
  return {
    ...client,
    integration: defineIntegration({
      manifest: salesforceTicketingProviderManifest,
      operations: createSalesforceTicketingOperationHandlers(client),
    }),
  };
}

export function createSalesforceTicketingOperationsClient(
  rawClient: SalesforceTicketingRawClient,
): Omit<SalesforceTicketingClient, "integration"> {
  return {
    rawClient,
    getRawClient() {
      return rawClient;
    },
    getCase(caseId) {
      return rawClient.sobject("Case").retrieve(caseId);
    },
    createCase(input) {
      return rawClient.sobject("Case").create(caseFields(input));
    },
    updateCase(caseId, patch) {
      return rawClient.sobject("Case").update({
        Id: caseId,
        ...caseFields(patch),
      });
    },
    searchCases(input = {}) {
      return Promise.resolve(rawClient.query(input.soql ?? buildCaseSearchSoql(input)));
    },
    createCaseComment(input) {
      const parentId = input.ticketId ?? input.caseId;
      if (!parentId) throw new Error("Salesforce Case id is required.");
      const commentBody = input.body ?? input.text ?? input.comment;
      if (!commentBody) throw new Error("Salesforce CaseComment body is required.");
      return rawClient.sobject("CaseComment").create(stripUndefined({
        ParentId: parentId,
        CommentBody: commentBody,
        IsPublished: input.isPublished ?? true,
        ...(input.fields ?? {}),
      }));
    },
    createInternalNote(input) {
      const parentId = input.ticketId ?? input.caseId;
      if (!parentId) throw new Error("Salesforce Case id is required.");
      const body = input.body ?? input.text ?? input.note;
      if (!body) throw new Error("Salesforce internal note body is required.");
      return rawClient.sobject("FeedItem").create(stripUndefined({
        ParentId: parentId,
        Body: body,
        Type: input.type ?? "TextPost",
        Visibility: input.visibility,
        ...(input.fields ?? {}),
      }));
    },
    querySoql(soql) {
      return Promise.resolve(rawClient.query(soql));
    },
  };
}

export function createSalesforceTicketingOperationHandlers(
  clientOrRawClient: SalesforceTicketingOperationsClient | SalesforceTicketingRawClient,
): IntegrationOperationHandlers {
  const client = isSalesforceTicketingOperationsClient(clientOrRawClient)
    ? clientOrRawClient
    : createSalesforceTicketingOperationsClient(clientOrRawClient);
  return {
    "ticket.read": (input: SalesforceReadCaseInput) => client.getCase(caseInputId(input)),
    "ticket.comment.create": (input: SalesforceCaseCommentInput) => client.createCaseComment(input),
    "ticket.create": (input: SalesforceCaseInput) => client.createCase(input),
    "ticket.update": (input: SalesforceUpdateCaseInput) =>
      client.updateCase(caseInputId(input), input.patch ?? input),
    "ticket.search": (input: SalesforceCaseSearchInput = {}) => client.searchCases(input),
    "ticket.internalNote.create": (input: SalesforceInternalNoteInput) => client.createInternalNote(input),
    "salesforce.soql.query": (input: SalesforceSoqlQueryInput) => client.querySoql(soqlInput(input)),
  };
}

function isSalesforceTicketingOperationsClient(input: unknown): input is SalesforceTicketingOperationsClient {
  return typeof input === "object" && input !== null && "getCase" in input && "querySoql" in input;
}

function caseInputId(input: SalesforceReadCaseInput) {
  const caseId = input.ticketId ?? input.id;
  if (!caseId) throw new Error("Salesforce Case id is required.");
  return caseId;
}

function soqlInput(input: SalesforceSoqlQueryInput) {
  const soql = input.soql ?? input.query;
  if (!soql) throw new Error("Salesforce SOQL query is required.");
  return soql;
}

function caseFields(input: SalesforceCaseInput): SalesforceProviderPayload {
  return stripUndefined({
    Subject: input.subject,
    Description: input.description,
    Status: input.status,
    Priority: input.priority,
    Origin: input.origin,
    ContactId: input.contactId,
    AccountId: input.accountId,
    OwnerId: input.ownerId,
    SuppliedEmail: input.suppliedEmail,
    SuppliedName: input.suppliedName,
    ...(input.fields ?? {}),
  });
}

function buildCaseSearchSoql(input: SalesforceCaseSearchInput) {
  const requestedLimit = input.limit;
  const limit = typeof requestedLimit === "number" && Number.isInteger(requestedLimit) && requestedLimit > 0
    ? requestedLimit
    : 25;
  if (input.where) {
    return `SELECT Id, CaseNumber, Subject, Status, Priority, Origin, CreatedDate, LastModifiedDate FROM Case WHERE ${input.where} LIMIT ${limit}`;
  }
  return `SELECT Id, CaseNumber, Subject, Status, Priority, Origin, CreatedDate, LastModifiedDate FROM Case ORDER BY LastModifiedDate DESC LIMIT ${limit}`;
}

function stripUndefined(input: SalesforceProviderPayload): SalesforceProviderPayload {
  const output: SalesforceProviderPayload = {};
  for (const [key, value] of Object.entries(input)) {
    if (value !== undefined) output[key] = value;
  }
  return output;
}
