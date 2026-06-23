import { defineIntegrationProviderPackage, type ProviderManifestInput } from "@cognidesk/integration-kit";

export const helpScoutTicketingProviderManifestInput = {
  id: "ticketing.help-scout",
  name: "Help Scout",
  packageName: "@cognidesk/integration-ticketing-help-scout",
  provider: "help-scout",
  category: "ticketing",
  trustLevel: "official",
  directions: ["bidirectional"],
  channelAudiences: ["customer-facing", "internal-support", "mixed"],
  credentialRequirements: [{ id: "help-scout-api-access", label: "Help Scout OAuth access", required: true }],
  coverage: {
    scope: "support-workflow-subset",
    notes: [
      "SDK decision: Help Scout's official JavaScript SDK is for Apps UI context, not a backend Inbox API client.",
      "Coverage is limited to Help Scout Inbox API conversation create/read/list/update, thread list, reply/note thread creation, and mailbox-list readiness.",
    ],
    evidence: [
      { label: "Help Scout JavaScript SDK", url: "https://developer.helpscout.com/apps/javascript-sdk/" },
      { label: "Help Scout open-source clients", url: "https://developer.helpscout.com/open-source/" },
      { label: "Help Scout Inbox API", url: "https://developer.helpscout.com/mailbox-api/" },
    ],
  },
  capabilities: [
    { capability: "create-provider-object", providerObjects: [{ kind: "helpScoutConversation", label: "Help Scout Conversation" }, { kind: "helpScoutReplyThread", label: "Help Scout Reply Thread" }, { kind: "helpScoutNoteThread", label: "Help Scout Note Thread" }], requiresCredential: true, sideEffect: true, exposesSensitiveData: true, changesWorkflow: true },
    { capability: "read-provider-object", providerObjects: [{ kind: "helpScoutConversation", label: "Help Scout Conversation" }], requiresCredential: true, exposesSensitiveData: true },
    { capability: "update-provider-object", providerObjects: [{ kind: "helpScoutConversation", label: "Help Scout Conversation" }], requiresCredential: true, sideEffect: true, exposesSensitiveData: true, changesWorkflow: true },
    { capability: "search-provider-object", providerObjects: [{ kind: "helpScoutConversation", label: "Help Scout Conversation" }], requiresCredential: true, exposesSensitiveData: true },
    { capability: "handoff", providerObjects: [{ kind: "helpScoutConversation", label: "Help Scout Conversation" }, { kind: "helpScoutReplyThread", label: "Help Scout Reply Thread" }, { kind: "helpScoutNoteThread", label: "Help Scout Note Thread" }], requiresCredential: true, sideEffect: true, exposesSensitiveData: true, changesWorkflow: true },
  ],
  operations: [
    { alias: "ticket.create", capability: "create-provider-object", providerOperation: "POST /v2/conversations", providerObject: "ticket", sideEffect: true, exposesSensitiveData: true, changesWorkflow: true },
    { alias: "ticket.read", capability: "read-provider-object", providerOperation: "GET /v2/conversations/{conversation_id}", providerObject: "ticket", exposesSensitiveData: true },
    { alias: "ticket.update", capability: "update-provider-object", providerOperation: "PATCH /v2/conversations/{conversation_id}", providerObject: "ticket", sideEffect: true, exposesSensitiveData: true, changesWorkflow: true },
    { alias: "ticket.search", capability: "search-provider-object", providerOperation: "GET /v2/conversations", providerObject: "ticket", exposesSensitiveData: true },
    { alias: "ticket.comment.create", capability: "send", providerOperation: "POST /v2/conversations/{conversation_id}/reply", providerObject: "ticketComment", sideEffect: true, externallyVisible: true, exposesSensitiveData: true },
    { alias: "ticket.internalNote.create", capability: "draft", providerOperation: "POST /v2/conversations/{conversation_id}/notes", providerObject: "internalNote", sideEffect: true, exposesSensitiveData: true },
    { alias: "help-scout.thread.list", capability: "read-provider-object", providerOperation: "GET /v2/conversations/{conversation_id}/threads", providerObject: "helpScoutThread", extension: true, exposesSensitiveData: true },
    { alias: "help-scout.readiness", capability: "read-provider-object", providerOperation: "GET /v2/mailboxes", providerObject: "helpScoutMailbox", extension: true, exposesSensitiveData: true },
  ],
  privacyNotes: ["Help Scout conversations can include customer identity, mailbox threads, notes, tags, custom fields, and assignments."],
  limitations: ["Mailbox IDs, thread types, assignment, workflow rules, and customer visibility are SDK-user configuration."],
  metadata: {
    issue: 35,
    implementationStrategy: "direct-http-support-slice",
    sdkDecision: {
      candidates: ["@helpscout/javascript-sdk"],
      verdict: "not-adopted",
      reason: "The official JavaScript SDK targets Help Scout Apps UI, not backend Inbox API operations.",
      checkedAt: "2026-06-21",
    },
    supportSlice: {
      source: "Help Scout Inbox API",
      allowlistedOperations: ["conversations.create", "conversations.read", "conversations.update", "conversations.list", "threads.list", "reply.create", "note.create", "mailboxes.list"],
    },
  },
  maintainers: [{ name: "Cognidesk", type: "official" }],
} as const satisfies ProviderManifestInput;

export const helpScoutTicketingProviderManifest = defineIntegrationProviderPackage(helpScoutTicketingProviderManifestInput);
