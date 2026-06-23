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
  credentialRequirements: [{
    id: "front-api-access",
    label: "Front API token",
    scopes: ["conversations:read", "conversations:write", "messages:send", "messages:read", "comments:write", "comments:read", "teammates:read"],
    required: true,
    metadata: { scopeKind: "provider-oauth-scopes" },
  }],
  coverage: {
    scope: "provider-api-subset",
    notes: [
      "SDK decision: no viable official maintained backend JavaScript client was verified. The deprecated front-sdk package is not adopted.",
      "Coverage is limited to selected Front Core/Channel API conversation, message, comment, search, update, and teammate readiness operations for support workflows.",
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
  limitations: ["Inbox IDs, channel IDs, teammate assignment, tags, and message visibility are SDK-user configuration. Multipart attachments are rejected by JSON helpers and require SDK-user direct multipart handling."],
  metadata: {
    issue: 35,
    implementationStrategy: "direct-http-support-slice",
    sdkDecision: {
      candidates: ["front-sdk", "Front Plugin SDK"],
      verdict: "not-adopted",
      reason: "front-sdk is deprecated and the official Plugin SDK is not a backend Core API client.",
      checkedAt: "2026-06-21",
    },
    supportSlice: {
      source: "Front Core and Channel APIs",
      allowlistedOperations: ["messages.create", "conversations.reply", "conversations.read", "conversations.update", "conversations.search", "conversation_messages.list", "comments.create", "comments.list", "teammates.list"],
    },
  },
  maintainers: [{ name: "Cognidesk", type: "official" }],
} as const satisfies ProviderManifestInput;

export const frontTicketingProviderManifest = defineIntegrationProviderPackage(frontTicketingProviderManifestInput);
