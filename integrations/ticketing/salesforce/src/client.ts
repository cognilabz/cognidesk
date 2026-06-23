import jsforce from "jsforce";
import { defineIntegration, type IntegrationOperationHandlers } from "@cognidesk/integration-kit";
import { salesforceTicketingProviderManifest } from "./manifest.js";

export interface SalesforceTicketingClientOptions {
  instanceUrl?: string;
  accessToken?: string;
  rawClient?: any;
}

export interface SalesforceTicketingClient {
  rawClient: any;
  integration: ReturnType<typeof defineIntegration>;
}

export function createSalesforceTicketingClient(options: SalesforceTicketingClientOptions = {}): SalesforceTicketingClient {
  const rawClient = options.rawClient ?? new jsforce.Connection({
    ...(options.instanceUrl ? { instanceUrl: options.instanceUrl } : {}),
    ...(options.accessToken ? { accessToken: options.accessToken } : {}),
  });
  const operations = createSalesforceTicketingOperationHandlers(rawClient);
  return {
    rawClient,
    integration: defineIntegration({
      manifest: salesforceTicketingProviderManifest,
      operations,
    }),
  };
}

export function createSalesforceTicketingOperationHandlers(rawClient: any): IntegrationOperationHandlers {
  return {
    "ticket.read": (input: any) => rawClient.sobject("Case").retrieve(input.ticketId ?? input.id),
    "ticket.comment.create": (input: any) => rawClient.sobject("CaseComment").create({
      ParentId: input.ticketId ?? input.caseId,
      CommentBody: input.body ?? input.text ?? input.comment,
      IsPublished: input.isPublished ?? true,
      ...(input.fields ?? {}),
    }),
    "ticket.create": (input: any) => rawClient.sobject("Case").create(caseFields(input)),
    "ticket.update": (input: any) => rawClient.sobject("Case").update({
      Id: input.ticketId ?? input.id,
      ...caseFields(input.patch ?? input),
    }),
    "ticket.search": (input: any) => rawClient.query(input.soql ?? buildCaseSearchSoql(input)),
    "ticket.internalNote.create": (input: any) => rawClient.sobject("FeedItem").create({
      ParentId: input.ticketId ?? input.caseId,
      Body: input.body ?? input.text ?? input.note,
      Type: input.type ?? "TextPost",
      Visibility: input.visibility,
      ...(input.fields ?? {}),
    }),
    "salesforce.soql.query": (input: any) => rawClient.query(input.soql ?? input.query),
  };
}

function caseFields(input: any) {
  return {
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
  };
}

function buildCaseSearchSoql(input: any) {
  const limit = Number.isFinite(input.limit) ? Number(input.limit) : 25;
  if (input.where) {
    return `SELECT Id, CaseNumber, Subject, Status, Priority, Origin, CreatedDate, LastModifiedDate FROM Case WHERE ${input.where} LIMIT ${limit}`;
  }
  return `SELECT Id, CaseNumber, Subject, Status, Priority, Origin, CreatedDate, LastModifiedDate FROM Case ORDER BY LastModifiedDate DESC LIMIT ${limit}`;
}
