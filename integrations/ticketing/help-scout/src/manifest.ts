import { defineIntegrationProviderPackage, type ProviderManifestInput } from "@cognidesk/integration-kit";

export const helpScoutHostClientSupportSlice = {
  strategy: "provider-rest-adapter",
  adapterKind: "no-official-sdk-rest-adapter",
  defaultHttpClient: "providerJsonRequest",
  packageOwnedRestClient: true,
  providerClientOverride: true,
  providerSdkDecision: "no-official-sdk-rest-adapter",
  verifiedAt: "2026-06-25",
  sdkEvaluation: {
    checkedAt: "2026-06-25",
    result: "no-official-maintained-runtime-sdk",
    requiredRuntimeSurface: "server-side Help Scout Inbox API 2.0 ticketing client",
    candidates: [
      {
        package: "@helpscout/javascript-sdk",
        checkedVersion: "0.10.0",
        result: "not-runtime-inbox-api-client",
        reason: "Official Help Scout JavaScript SDK is for Apps UI context, contextual data, and interface actions rather than backend Inbox API ticketing operations.",
      },
      {
        package: "helpscout",
        checkedVersion: "0.0.1",
        result: "rejected-unofficial-legacy",
        reason: "Community Node wrapper; not listed by Help Scout as an official supported Inbox API client.",
      },
      {
        package: "helpscout-v2",
        checkedVersion: "0.0.2",
        result: "rejected-unofficial",
        reason: "Community Help Scout API v2 wrapper; not an official or maintained provider runtime SDK.",
      },
      {
        package: "@bufferapp/helpscout",
        checkedVersion: "0.1.2",
        result: "rejected-unofficial-legacy",
        reason: "Third-party/legacy Node wrapper; not an official Help Scout-maintained runtime SDK.",
      },
    ],
  },
  allowedOperations: [
    { id: "conversations.create", alias: "ticket.create", target: "restAdapter.createConversation", source: "provider-rest-adapter" },
    { id: "conversations.read", alias: "ticket.read", target: "restAdapter.getConversation", source: "provider-rest-adapter" },
    { id: "conversations.update", alias: "ticket.update", target: "restAdapter.updateConversation", source: "provider-rest-adapter" },
    { id: "conversations.list", alias: "ticket.search", target: "restAdapter.listConversations", source: "provider-rest-adapter" },
    { id: "reply.create", alias: "ticket.comment.create", target: "restAdapter.createReply", source: "provider-rest-adapter" },
    { id: "note.create", alias: "ticket.internalNote.create", target: "restAdapter.createNote", source: "provider-rest-adapter" },
    { id: "threads.list", alias: "help-scout.thread.list", target: "restAdapter.listThreads", source: "provider-rest-adapter" },
    { id: "mailboxes.list", alias: "help-scout.readiness", target: "restAdapter.readiness", source: "provider-rest-adapter" },
  ],
} as const;

export const helpScoutSupportSlice = helpScoutHostClientSupportSlice;

export const helpScoutTicketingProviderManifestInput = {
  id: "ticketing.help-scout",
  name: "Help Scout",
  packageName: "@cognidesk/integration-ticketing-help-scout",
  provider: "help-scout",
  category: "ticketing",
  trustLevel: "official",
  directions: ["bidirectional"],
  channelAudiences: ["customer-facing", "internal-support", "mixed"],
  credentialRequirements: [
    { id: "help-scout-base-url", label: "Help Scout API base URL", required: false },
    { id: "help-scout-api-access", label: "Help Scout OAuth access token or API key", required: true },
  ],
  coverage: {
    scope: "support-workflow-subset",
    notes: [
      "No official maintained backend JavaScript Inbox API client was verified; Help Scout's official Inbox SDK is PHP, and the official JavaScript SDK is for Apps UI context.",
      "Coverage is implemented by the built-in Help Scout REST adapter for conversation create/read/list/update, thread list, reply/note thread creation, and mailbox-list readiness.",
      "A host-provided HelpScoutTicketingProviderClient can still override the built-in REST adapter.",
    ],
    evidence: [
      { label: "Help Scout Inbox API", url: "https://developer.helpscout.com/mailbox-api/" },
      { label: "Help Scout JavaScript SDK", url: "https://developer.helpscout.com/apps/javascript-sdk/" },
      { label: "Help Scout open-source clients", url: "https://developer.helpscout.com/open-source/" },
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
    implementation: helpScoutHostClientSupportSlice,
    manifestOnlySafe: true,
    sdkDecision: "no-official-sdk-rest-adapter",
    providerRestAdapterException: {
      status: "accepted",
      adapterKind: "no-official-sdk-rest-adapter",
      allowedDefaultRuntime: "built-in-help-scout-inbox-rest-adapter",
      hostSdkPath: "HelpScoutTicketingProviderClient",
      guardrails: [
        "Do not add @helpscout/javascript-sdk as a runtime dependency for Inbox API ticketing; it is an Apps UI SDK.",
        "Only the allowlisted Help Scout Inbox API operations in metadata.implementation.allowedOperations are package-owned.",
        "Use a host-injected HelpScoutTicketingProviderClient for unsupported operations or for any future official maintained backend SDK.",
      ],
    },
    providerClient: {
      package: "host-provided",
      interface: "HelpScoutTicketingProviderClient",
      importPolicy: "runtime-override",
      defaultClientPolicy: "built-in-rest-adapter",
    },
  },
  maintainers: [{ name: "Cognidesk", type: "official" }],
} as const satisfies ProviderManifestInput;

export const helpScoutTicketingProviderManifest = defineIntegrationProviderPackage(helpScoutTicketingProviderManifestInput);
