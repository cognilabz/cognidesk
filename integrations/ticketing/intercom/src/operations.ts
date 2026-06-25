import type { ProviderOperationDeclarationInput } from "@cognidesk/core";

export const intercomTicketingProviderOperations: ProviderOperationDeclarationInput[] = [
  { alias: "ticket.read", providerOperation: "tickets.get", capability: "read-provider-object", label: "Read Intercom ticket", providerObject: "ticket", exposesSensitiveData: true },
  { alias: "ticket.comment.create", providerOperation: "tickets.reply", capability: "send", label: "Create Intercom public ticket reply", providerObject: "ticketComment", sideEffect: true, externallyVisible: true, requiresApproval: true, exposesSensitiveData: true },
  { alias: "ticket.create", providerOperation: "tickets.create", capability: "create-provider-object", label: "Create Intercom ticket", providerObject: "ticket", sideEffect: true, changesWorkflow: true, exposesSensitiveData: true },
  { alias: "ticket.update", providerOperation: "tickets.update", capability: "update-provider-object", label: "Update Intercom ticket", providerObject: "ticket", sideEffect: true, changesWorkflow: true, exposesSensitiveData: true },
  { alias: "ticket.search", providerOperation: "tickets.search", capability: "search-provider-object", label: "Search Intercom tickets", providerObject: "ticket", exposesSensitiveData: true },
  { alias: "ticket.internalNote.create", providerOperation: "tickets.reply", capability: "draft", label: "Create Intercom internal ticket note", providerObject: "internalNote", sideEffect: true, exposesSensitiveData: true },
  { alias: "intercom.conversation.read", providerOperation: "conversations.find", capability: "read-provider-object", label: "Read Intercom conversation", providerObject: "conversationLink", exposesSensitiveData: true, extension: true },
] satisfies ProviderOperationDeclarationInput[];

export type IntercomTicketingOperationAlias = string;
