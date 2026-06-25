import { defineIntegrationProviderPackage, type ProviderManifestInput } from "@cognidesk/integration-kit";

export const kustomerRejectedSdkPackages = [
  {
    packageName: "@kustomer/apps-server",
    checkedVersion: "3.0.5",
    license: "MIT",
    reason: "Official Apps Platform server SDK for building Kustomer apps, not a backend public REST ticketing client.",
  },
  {
    packageName: "@kustomer/apps-client",
    checkedVersion: "3.0.5",
    license: "MIT",
    reason: "Official Apps Platform client SDK for Kustomer app UI/runtime behavior, not backend support ticketing operations.",
  },
  {
    packageName: "@kustomer/apps-server-sdk",
    checkedVersion: "0.0.60",
    license: "not-declared",
    reason: "Legacy app-building SDK with limited app API helpers, not a maintained public REST ticketing client for this support surface.",
  },
  {
    packageName: "@kustomer/chat-react-native",
    checkedVersion: "5.3.4",
    license: "SEE LICENSE AT https://www.kustomer.com/legal/supplemental-terms/",
    reason: "React Native Chat SDK for customer-facing chat UI, not a server-side support ticketing REST client.",
  },
] as const;

export const kustomerSdkDecision = {
  candidates: kustomerRejectedSdkPackages.map((sdkPackage) => sdkPackage.packageName),
  checkedAt: "2026-06-25",
  verdict: "no-official-sdk-rest-adapter",
  result: "no-official-maintained-ticketing-rest-sdk",
  reason: "Kustomer's maintained JavaScript packages cover Apps Platform and Chat SDK runtimes, but do not provide a backend support/ticketing REST client for the conversation, message, customer draft, and readiness operations exposed by this package.",
  rejectedSdkPackages: kustomerRejectedSdkPackages,
} as const;

export const kustomerProviderRestAdapterException = {
  checkedAt: kustomerSdkDecision.checkedAt,
  result: kustomerSdkDecision.result,
  reason: kustomerSdkDecision.reason,
  defaultClientPolicy: "built-in-kustomer-rest-adapter-with-access-token",
  typedClientOverride: "KustomerTicketingProviderClient",
  rejectedSdkPackages: kustomerRejectedSdkPackages,
} as const;

export const kustomerHostClientSupportSlice = {
  implementationStrategy: "provider-rest-adapter",
  sdkDecision: kustomerSdkDecision,
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
      "The package declares an explicit REST-adapter exception because the checked Kustomer npm SDK packages do not provide a suitable backend support/ticketing REST client.",
      "Coverage is limited to Kustomer conversation create/read/update/list, message list/create, customer draft creation, and org readiness for support workflows.",
      "This package intentionally does not copy the old generated full Kustomer public API clone.",
    ],
    evidence: [
      { label: "Kustomer developer portal", url: "https://developer.kustomer.com/" },
      { label: "Kustomer REST APIs portal", url: "https://developer.kustomer.com/kustomer-api-docs/reference" },
      { label: "@kustomer/apps-server npm package", url: "https://www.npmjs.com/package/@kustomer/apps-server" },
      { label: "@kustomer/apps-server-sdk npm package", url: "https://www.npmjs.com/package/@kustomer/apps-server-sdk" },
      { label: "@kustomer/chat-react-native npm package", url: "https://www.npmjs.com/package/@kustomer/chat-react-native" },
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
    sdkDecision: kustomerSdkDecision,
    providerRestAdapterException: kustomerProviderRestAdapterException,
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
