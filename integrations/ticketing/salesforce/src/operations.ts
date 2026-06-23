import type { ProviderOperationDeclarationInput } from "@cognidesk/core";

export const salesforceTicketingProviderOperations: ProviderOperationDeclarationInput[] = [
  { alias: "ticket.read", providerOperation: "sobject(Case).retrieve", capability: "read-provider-object", label: "Read Salesforce Case", providerObject: "ticket", exposesSensitiveData: true },
  { alias: "ticket.comment.create", providerOperation: "sobject(CaseComment).create", capability: "send", label: "Create Salesforce CaseComment", providerObject: "ticketComment", sideEffect: true, externallyVisible: true, requiresApproval: true, exposesSensitiveData: true },
  { alias: "ticket.create", providerOperation: "sobject(Case).create", capability: "create-provider-object", label: "Create Salesforce Case", providerObject: "ticket", sideEffect: true, changesWorkflow: true, exposesSensitiveData: true },
  { alias: "ticket.update", providerOperation: "sobject(Case).update", capability: "update-provider-object", label: "Update Salesforce Case", providerObject: "ticket", sideEffect: true, changesWorkflow: true, exposesSensitiveData: true },
  { alias: "ticket.search", providerOperation: "query", capability: "search-provider-object", label: "Search Salesforce Cases", providerObject: "ticket", exposesSensitiveData: true },
  { alias: "ticket.internalNote.create", providerOperation: "sobject(FeedItem).create", capability: "draft", label: "Create Salesforce internal FeedItem", providerObject: "internalNote", sideEffect: true, exposesSensitiveData: true },
  { alias: "salesforce.soql.query", providerOperation: "query", capability: "search-provider-object", label: "Run SDK-user SOQL query", providerObject: "ticket", exposesSensitiveData: true, extension: true },
] satisfies ProviderOperationDeclarationInput[];

export type SalesforceTicketingOperationAlias = string;
