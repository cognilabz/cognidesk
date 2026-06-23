import type { ProviderOperationDeclarationInput } from "@cognidesk/core";

export const intercomTicketingProviderOperations: ProviderOperationDeclarationInput[] = [
  { alias: "ticket.read", providerOperation: "tickets.retrieve", capability: "read-provider-object", label: "Read Intercom ticket", providerObject: "ticket", exposesSensitiveData: true },
  { alias: "ticket.comment.create", providerOperation: "conversations.reply", capability: "send", label: "Create Intercom public reply", providerObject: "ticketComment", sideEffect: true, externallyVisible: true, requiresApproval: true, exposesSensitiveData: true },
  { alias: "ticket.create", providerOperation: "tickets.create", capability: "create-provider-object", label: "Create Intercom ticket", providerObject: "ticket", sideEffect: true, changesWorkflow: true, exposesSensitiveData: true },
  { alias: "ticket.update", providerOperation: "tickets.update", capability: "update-provider-object", label: "Update Intercom ticket", providerObject: "ticket", sideEffect: true, changesWorkflow: true, exposesSensitiveData: true },
  { alias: "ticket.search", providerOperation: "tickets.search", capability: "search-provider-object", label: "Search Intercom tickets", providerObject: "ticket", exposesSensitiveData: true },
  { alias: "ticket.internalNote.create", providerOperation: "conversations.reply", capability: "draft", label: "Create Intercom internal note", providerObject: "internalNote", sideEffect: true, exposesSensitiveData: true },
  { alias: "intercom.conversation.read", providerOperation: "conversations.retrieve", capability: "read-provider-object", label: "Read Intercom conversation", providerObject: "conversationLink", exposesSensitiveData: true, extension: true },
] satisfies ProviderOperationDeclarationInput[];

export type IntercomTicketingOperationAlias = string;
