import { defineIntegrationProviderPackage, type ProviderManifestInput } from "@cognidesk/integration-kit";

export const kustomerHostClientSupportSlice = {
  implementationStrategy: "provider-rest-adapter",
  sdkDecision: {
    candidates: ["@kustomer/apps-server", "@kustomer/apps-client", "@kustomer/apps-server-sdk", "@kustomer/chat-react-native"],
    verdict: "no-official-sdk-rest-adapter",
    reason: "Kustomer's maintained JavaScript SDK packages target Apps Platform or Chat runtimes; no official package was verified that fully covers backend public REST ticketing operations for conversations, messages, and customer drafts.",
    checkedAt: "2026-06-25",
  },
  allowedOperations: [
    { id: "conversations.create", alias: "ticket.create", target: "restAdapter.createConversation", source: "provider-rest-adapter" },
    { id: "conversations.read", alias: "ticket.read", target: "restAdapter.getConversation", source: "provider-rest-adapter" },
    { id: "conversations.update", alias: "ticket.update", target: "restAdapter.updateConversation", source: "provider-rest-adapter" },
    { id: "conversations.list", alias: "ticket.search", target: "restAdapter.listConversations", source: "provider-rest-adapter" },
    { id: "messages.list", alias: "kustomer.message.list", target: "restAdapter.listMessages", source: "provider-rest-adapter" },
    { id: "messages.create", alias: "ticket.comment.create", target: "restAdapter.createMessage", source: "provider-rest-adapter" },
    { id: "customer_drafts.create", alias: "kustomer.customerDraft.create", target: "restAdapter.createCustomerDraft", source: "provider-rest-adapter" },
    { id: "readiness", alias: "kustomer.readiness", target: "restAdapter.readiness", source: "provider-rest-adapter" },
  ],
} as const;

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
    id: "kustomer-base-url",
    label: "Kustomer API base URL",
    required: false,
  }, {
    id: "kustomer-api-access",
    label: "Kustomer API access token or API key",
    required: true,
    metadata: {
      defaultClientPolicy: "built-in-rest-adapter",
    },
  }, {
    id: "kustomer-api-permissions",
    label: "Kustomer API permissions",
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
      "Kustomer's developer surface separates REST APIs for backend systems from Apps Platform and Chat SDK packages.",
      "Support workflow calls use the built-in Kustomer REST adapter when baseUrl and accessToken/apiKey are configured.",
      "A host-provided KustomerTicketingProviderClient can still override the built-in REST adapter.",
      "Coverage is limited to Kustomer conversation create/read/update/list, message list/create, customer draft creation, and org readiness for support workflows.",
      "This package intentionally does not copy the old generated full Kustomer public API clone.",
    ],
    evidence: [
      { label: "Kustomer developer portal", url: "https://developer.kustomer.com/" },
      { label: "Kustomer REST APIs portal", url: "https://developer.kustomer.com/kustomer-api-docs/reference" },
      { label: "@kustomer/apps-server npm package", url: "https://www.npmjs.com/package/@kustomer/apps-server" },
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
  limitations: ["SDK user configuration owns auth, tenancy, pagination, retries, rate limits, and provider response normalization policy.", "Conversation model, queues, teams, custom objects, and message visibility are SDK-user configuration."],
  metadata: {
    issue: 35,
    implementation: kustomerHostClientSupportSlice,
    manifestOnlySafe: true,
    implementationStrategy: "provider-rest-adapter",
    sdkDecision: "no-official-sdk-rest-adapter",
    providerClient: {
      package: "optional-override",
      interface: "KustomerTicketingProviderClient",
      importPolicy: "runtime-override",
      defaultClientPolicy: "built-in-rest-adapter",
    },
  },
  maintainers: [{ name: "Cognidesk", type: "official" }],
} as const satisfies ProviderManifestInput;

export const kustomerTicketingProviderManifest = defineIntegrationProviderPackage(kustomerTicketingProviderManifestInput);
