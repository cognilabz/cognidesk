import { defineIntegrationProviderPackage } from "@cognidesk/integration-kit";
import { intercomTicketingProviderOperations } from "./operations.js";

export const intercomTicketingProviderManifest = defineIntegrationProviderPackage({
  id: "ticketing.intercom",
  name: "Intercom",
  packageName: "@cognidesk/integration-ticketing-intercom",
  provider: "intercom",
  category: "ticketing",
  trustLevel: "official",
  directions: ["receive-only", "send-only", "bidirectional"],
  channelAudiences: ["customer-facing", "internal-support", "mixed"],
  operations: intercomTicketingProviderOperations,
  coverage: {
    scope: "support-workflow-subset",
    notes: [
      "Coverage is scoped to normalized ticket and conversation operations implemented by typed handlers.",
      "Implementation uses the maintained official intercom-client package pinned to 7.0.3; broader Intercom APIs remain available through rawClient.",
      "Generated Cognidesk full-provider API clones should be removed only after this package's replacement tests pass.",
    ],
    evidence: [
      { label: "Intercom Node client", url: "https://github.com/intercom/intercom-node" },
      { label: "Intercom Tickets API", url: "https://developers.intercom.com/docs/references/rest-api/api.intercom.io/tickets" },
      { label: "Intercom Conversations API", url: "https://developers.intercom.com/docs/references/rest-api/api.intercom.io/conversations" },
    ],
  },
  credentialRequirements: [
    {
      id: "intercom-access-token",
      label: "Intercom access token",
      description: "Server-side Intercom access token or OAuth bearer token.",
      scopes: ["read_conversations", "write_conversations", "read_tickets", "write_tickets"],
      required: true,
      metadata: { scopeKind: "provider-oauth-scopes" },
    },
  ],
  capabilities: [
    { capability: "read-provider-object", label: "Read Intercom tickets", audiences: ["customer-facing", "internal-support", "mixed"], providerObjects: [{ kind: "ticket", label: "Ticket" }, { kind: "conversationLink", label: "Conversation" }], requiresCredential: true, exposesSensitiveData: true },
    { capability: "send", label: "Create Intercom replies", audiences: ["customer-facing", "mixed"], providerObjects: [{ kind: "ticketComment", label: "Ticket Comment" }], requiresCredential: true, sideEffect: true, exposesSensitiveData: true, changesWorkflow: true },
    { capability: "create-provider-object", label: "Create Intercom tickets", audiences: ["customer-facing", "internal-support", "mixed"], providerObjects: [{ kind: "ticket", label: "Ticket" }], requiresCredential: true, sideEffect: true, exposesSensitiveData: true, changesWorkflow: true },
    { capability: "update-provider-object", label: "Update Intercom tickets", audiences: ["internal-support", "mixed"], providerObjects: [{ kind: "ticket", label: "Ticket" }], requiresCredential: true, sideEffect: true, exposesSensitiveData: true, changesWorkflow: true },
    { capability: "search-provider-object", label: "Search Intercom tickets", audiences: ["customer-facing", "internal-support", "mixed"], providerObjects: [{ kind: "ticket", label: "Ticket" }], requiresCredential: true, exposesSensitiveData: true },
    { capability: "draft", label: "Create Intercom internal notes", audiences: ["internal-support", "mixed"], providerObjects: [{ kind: "internalNote", label: "Internal Note" }], requiresCredential: true, sideEffect: true, exposesSensitiveData: true },
  ],
  privacyNotes: [
    "Intercom conversations, tickets, contacts, admins, teams, custom attributes, and assignment metadata can contain customer data and internal support context.",
  ],
  limitations: [
    "Ticket types, attributes, states, assignment targets, teammate availability, scopes, and public/private reply policy are SDK-user configuration.",
    "This package does not claim full Intercom REST API coverage; use rawClient for advanced official SDK methods.",
  ],
  metadata: {
    implementation: {
      strategy: "official-sdk",
      sdkPackage: "intercom-client",
      sdkVersionRange: "7.0.3",
      rawClientEscapeHatch: "IntercomTicketingClient.rawClient",
      manifestImport: "no-sdk-client-initialization",
      supplyChainNote: "7.0.3 is pinned; do not allow compromised 7.0.4.",
    },
    channelCoverage: {
      tickets: "typed-create-read-update-search",
      conversations: "typed-reply-read-extension",
      internalNotes: "typed-conversation-note",
      broaderIntercomApi: "provider-supported-raw-client",
    },
  },
  maintainers: [{ name: "Cognidesk", type: "official" }],
});
