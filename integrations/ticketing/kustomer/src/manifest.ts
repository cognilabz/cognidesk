import { defineIntegrationProviderPackage, type ProviderManifestInput } from "@cognidesk/integration-kit";

export const kustomerTicketingProviderManifestInput = {
  id: "ticketing.kustomer",
  name: "Kustomer",
  packageName: "@cognidesk/integration-ticketing-kustomer",
  provider: "kustomer",
  category: "ticketing",
  trustLevel: "official",
  directions: ["bidirectional"],
  channelAudiences: ["customer-facing", "internal-support", "mixed"],
  credentialRequirements: [{
    id: "kustomer-api-access",
    label: "Kustomer API access",
    scopes: ["org.user.conversation.read", "org.user.conversation.write", "org.permission.conversation.create", "org.user.message.read", "org.user.message.write", "org.permission.message.create", "org.permission.draft.create"],
    required: true,
    metadata: {
      scopeKind: "provider-permission-labels",
      privilegeGuidance: "Kustomer API keys are governed by roles and API permissions; these strings are provider permission labels, not OAuth scopes.",
    },
  }],
  coverage: {
    scope: "support-workflow-subset",
    notes: [
      "SDK decision: Kustomer app/chat SDKs target Apps or Chat runtimes, not backend REST ticketing operations.",
      "Coverage is limited to Kustomer conversation create/read/update/list, message list/create, customer draft creation, and org readiness for support workflows.",
      "This package intentionally does not copy the old generated full Kustomer public API clone.",
    ],
    evidence: [
      { label: "Kustomer developer portal", url: "https://developer.kustomer.com/" },
      { label: "Kustomer REST APIs portal", url: "https://developer.kustomer.com/kustomer-api-docs/reference" },
      { label: "Kustomer API keys", url: "https://help.kustomer.com/api-keys-SJs5YTIWX" },
      { label: "Kustomer create message", url: "https://developer.kustomer.com/kustomer-api-docs/reference/createmessage" },
    ],
  },
  capabilities: [
    { capability: "create-provider-object", providerObjects: [{ kind: "kustomerConversation", label: "Kustomer Conversation" }, { kind: "kustomerMessage", label: "Kustomer Message" }, { kind: "kustomerDraft", label: "Kustomer Draft" }], requiresCredential: true, sideEffect: true, exposesSensitiveData: true, changesWorkflow: true },
    { capability: "read-provider-object", providerObjects: [{ kind: "kustomerConversation", label: "Kustomer Conversation" }, { kind: "kustomerMessage", label: "Kustomer Message" }], requiresCredential: true, exposesSensitiveData: true },
    { capability: "update-provider-object", providerObjects: [{ kind: "kustomerConversation", label: "Kustomer Conversation" }], requiresCredential: true, sideEffect: true, exposesSensitiveData: true, changesWorkflow: true },
    { capability: "search-provider-object", providerObjects: [{ kind: "kustomerConversation", label: "Kustomer Conversation" }], requiresCredential: true, exposesSensitiveData: true },
    { capability: "handoff", providerObjects: [{ kind: "kustomerConversation", label: "Kustomer Conversation" }, { kind: "kustomerMessage", label: "Kustomer Message" }, { kind: "kustomerDraft", label: "Kustomer Draft" }], requiresCredential: true, sideEffect: true, exposesSensitiveData: true, changesWorkflow: true },
  ],
  operations: [
    { alias: "ticket.create", capability: "create-provider-object", providerOperation: "POST /v1/conversations", providerObject: "ticket", sideEffect: true, exposesSensitiveData: true, changesWorkflow: true },
    { alias: "ticket.read", capability: "read-provider-object", providerOperation: "GET /v1/conversations/{conversation_id}", providerObject: "ticket", exposesSensitiveData: true },
    { alias: "ticket.update", capability: "update-provider-object", providerOperation: "PATCH /v1/conversations/{conversation_id}", providerObject: "ticket", sideEffect: true, exposesSensitiveData: true, changesWorkflow: true },
    { alias: "ticket.search", capability: "search-provider-object", providerOperation: "GET /v1/conversations", providerObject: "ticket", exposesSensitiveData: true },
    { alias: "ticket.comment.create", capability: "send", providerOperation: "POST /v1/messages", providerObject: "ticketComment", sideEffect: true, externallyVisible: true, exposesSensitiveData: true },
    { alias: "kustomer.message.list", capability: "read-provider-object", providerOperation: "GET /v1/messages", providerObject: "kustomerMessage", extension: true, exposesSensitiveData: true },
    { alias: "kustomer.customerDraft.create", capability: "draft", providerOperation: "POST /v1/customers/{customer_id}/drafts", providerObject: "kustomerDraft", extension: true, sideEffect: true, exposesSensitiveData: true },
    { alias: "kustomer.readiness", capability: "read-provider-object", providerOperation: "GET /v1/messages", providerObject: "kustomerOrg", extension: true, exposesSensitiveData: true },
  ],
  privacyNotes: ["Kustomer conversations can include customer timeline data, messages, notes, tags, queue status, and custom objects."],
  limitations: ["Conversation model, queues, teams, custom objects, and message visibility are SDK-user configuration."],
  metadata: {
    issue: 35,
    implementationStrategy: "direct-http-support-slice",
    sdkDecision: {
      candidates: ["@kustomer/apps-client", "@kustomer/apps-server-sdk", "@kustomer/chat-react-native"],
      verdict: "not-adopted",
      reason: "Kustomer SDK packages target app/chat runtimes rather than backend REST ticketing operations.",
      checkedAt: "2026-06-21",
    },
    supportSlice: {
      source: "Kustomer REST API",
      allowlistedOperations: ["conversations.create", "conversations.read", "conversations.update", "conversations.list", "messages.list", "messages.create", "customer_drafts.create"],
    },
  },
  maintainers: [{ name: "Cognidesk", type: "official" }],
} as const satisfies ProviderManifestInput;

export const kustomerTicketingProviderManifest = defineIntegrationProviderPackage(kustomerTicketingProviderManifestInput);
