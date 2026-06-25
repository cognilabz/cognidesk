import { defineIntegrationProviderPackage, type ProviderManifestInput } from "@cognidesk/integration-kit";

export const frontTicketingProviderManifestInput = {
  id: "ticketing.front",
  name: "Front",
  packageName: "@cognidesk/integration-ticketing-front",
  provider: "front",
  category: "ticketing",
  trustLevel: "official",
  directions: ["bidirectional"],
  channelAudiences: ["customer-facing", "internal-support", "mixed"],
  credentialRequirements: [
    { id: "front-base-url", label: "Front API base URL", required: false },
    {
      id: "front-api-access",
      label: "Front API access token or API key",
      scopes: ["conversations:read", "conversations:write", "messages:send", "messages:read", "comments:write", "comments:read", "teammates:read"],
      required: true,
      metadata: { scopeKind: "provider-oauth-scopes" },
    },
  ],
  coverage: {
    scope: "support-workflow-subset",
    notes: [
      "Runtime calls use the built-in Front REST adapter by default because no viable maintained backend Core/Channel API JavaScript client was verified.",
      "Coverage is limited to selected Front conversation, message, comment, search, update, and teammate readiness operations for support workflows.",
      "A host-provided FrontTicketingProviderClient can still override the built-in REST adapter.",
      "This package intentionally does not copy the old generated full Front Core/Channel API clone.",
    ],
    evidence: [
      { label: "Front Core API overview", url: "https://dev.frontapp.com/docs/core-api-overview" },
      { label: "Front API overview", url: "https://help.front.com/en/articles/2482" },
      { label: "Front Create message", url: "https://dev.frontapp.com/reference/create-message" },
      { label: "Front Create conversation reply", url: "https://dev.frontapp.com/reference/create-message-reply" },
    ],
  },
  capabilities: [
    { capability: "create-provider-object", providerObjects: [{ kind: "frontConversation", label: "Front Conversation" }, { kind: "frontMessage", label: "Front Message" }, { kind: "frontComment", label: "Front Comment" }], requiresCredential: true, sideEffect: true, exposesSensitiveData: true, changesWorkflow: true },
    { capability: "read-provider-object", providerObjects: [{ kind: "frontConversation", label: "Front Conversation" }, { kind: "frontMessage", label: "Front Message" }, { kind: "frontComment", label: "Front Comment" }], requiresCredential: true, exposesSensitiveData: true },
    { capability: "update-provider-object", providerObjects: [{ kind: "frontConversation", label: "Front Conversation" }], requiresCredential: true, sideEffect: true, exposesSensitiveData: true, changesWorkflow: true },
    { capability: "search-provider-object", providerObjects: [{ kind: "frontConversation", label: "Front Conversation" }], requiresCredential: true, exposesSensitiveData: true },
    { capability: "handoff", providerObjects: [{ kind: "frontConversation", label: "Front Conversation" }, { kind: "frontMessage", label: "Front Message" }, { kind: "frontComment", label: "Front Comment" }], requiresCredential: true, sideEffect: true, exposesSensitiveData: true, changesWorkflow: true },
  ],
  operations: [
    { alias: "ticket.create", capability: "create-provider-object", providerOperation: "POST /channels/{channel_id}/messages", providerObject: "ticket", sideEffect: true, externallyVisible: true, exposesSensitiveData: true, changesWorkflow: true },
    { alias: "ticket.read", capability: "read-provider-object", providerOperation: "GET /conversations/{conversation_id}", providerObject: "ticket", exposesSensitiveData: true },
    { alias: "ticket.update", capability: "update-provider-object", providerOperation: "PATCH /conversations/{conversation_id}", providerObject: "ticket", sideEffect: true, exposesSensitiveData: true, changesWorkflow: true },
    { alias: "ticket.search", capability: "search-provider-object", providerOperation: "GET /conversations/search/{query}", providerObject: "ticket", exposesSensitiveData: true },
    { alias: "ticket.comment.create", capability: "send", providerOperation: "POST /conversations/{conversation_id}/messages", providerObject: "ticketComment", sideEffect: true, externallyVisible: true, exposesSensitiveData: true },
    { alias: "ticket.internalNote.create", capability: "draft", providerOperation: "POST /conversations/{conversation_id}/comments", providerObject: "internalNote", sideEffect: true, exposesSensitiveData: true },
    { alias: "front.message.list", capability: "read-provider-object", providerOperation: "GET /conversations/{conversation_id}/messages", providerObject: "frontMessage", extension: true, exposesSensitiveData: true },
    { alias: "front.comment.list", capability: "read-provider-object", providerOperation: "GET /conversations/{conversation_id}/comments", providerObject: "frontComment", extension: true, exposesSensitiveData: true },
    { alias: "front.readiness", capability: "read-provider-object", providerOperation: "GET /teammates", providerObject: "frontTeammate", extension: true, exposesSensitiveData: true },
  ],
  privacyNotes: ["Front conversations can contain customer messages, teammate comments, inbox routing, tags, links, and assignment context."],
  limitations: ["Inbox IDs, channel IDs, teammate assignment, tags, message visibility, credentials, retries, pagination, and API base URL selection are SDK-user configuration. Multipart attachments are rejected by JSON operation helpers and require SDK-user direct multipart handling."],
  metadata: {
    issue: 35,
    implementationStrategy: "provider-rest-adapter",
    sdkDecision: "no-official-sdk-rest-adapter",
    implementation: {
      strategy: "provider-rest-adapter",
      runtimePackage: "@cognidesk/integration-ticketing-front",
      providerClientInterface: "FrontTicketingProviderClient",
      manifestImport: "no-sdk-client-initialization",
      packageOwnedRestClient: true,
      providerClientOverride: true,
    },
    checkedProviderSdk: {
      checkedAt: "2026-06-25",
      candidates: [
        {
          package: "front-sdk",
          checkedVersion: "0.8.2",
          result: "rejected-deprecated-archived",
          reason: "The npm package is deprecated and reports that its GitHub repository has been archived.",
        },
        {
          package: "@frontapp/plugin-sdk",
          checkedVersion: "1.10.0",
          result: "not-runtime-core-api-client",
          reason: "The package is the Front UI/plugin SDK, not a backend Core/Channel API client for support ticketing operations.",
        },
        {
          package: "front-chat-sdk",
          checkedVersion: "1.2.1",
          result: "not-ticketing-core-api-client",
          reason: "The package targets Front Chat SDK use cases rather than Core/Channel API ticketing operations.",
        },
        {
          package: "@utdk/front",
          checkedVersion: "1.0.0-20260530.2-dev.646adf4",
          result: "rejected-generated-preview-incomplete-runtime-client",
          reason: "The package is a third-party generated preview from Front's OpenAPI spec; the packed types expose an empty FrontClient and its source imports ../client.js outside the package contents, so it is not a viable maintained typed runtime client dependency.",
        },
      ],
    },
    frontCoreChannelCoverage: {
      source: "Built-in Front Core and Channel REST adapter",
      allowlistedOperations: ["messages.create", "conversations.reply", "conversations.read", "conversations.update", "conversations.search", "conversation_messages.list", "comments.create", "comments.list", "teammates.list"],
    },
  },
  maintainers: [{ name: "Cognidesk", type: "official" }],
} as const satisfies ProviderManifestInput;

export const frontTicketingProviderManifest = defineIntegrationProviderPackage(frontTicketingProviderManifestInput);
