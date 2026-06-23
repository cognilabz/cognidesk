import { defineIntegrationProviderPackage, type ProviderManifestInput } from "@cognidesk/integration-kit";

export const gorgiasTicketingProviderManifestInput = {
  id: "ticketing.gorgias",
  name: "Gorgias",
  packageName: "@cognidesk/integration-ticketing-gorgias",
  provider: "gorgias",
  category: "ticketing",
  trustLevel: "official",
  directions: ["bidirectional"],
  channelAudiences: ["customer-facing", "internal-support", "mixed"],
  credentialRequirements: [
    { id: "gorgias-api-base", label: "Gorgias API base URL", required: true },
    { id: "gorgias-api-access", label: "Gorgias API access", scopes: ["account:read", "tickets:read", "tickets:write"], required: true, metadata: { scopeKind: "provider-oauth-scopes" } },
  ],
  coverage: {
    scope: "provider-api-subset",
    notes: [
      "SDK decision: no official maintained backend JavaScript REST client was verified for Gorgias.",
      "Coverage is limited to Gorgias ticket create/read/update/list operations, ticket-message create/list operations, and account readiness for Cognidesk support workflows.",
      "This package intentionally does not copy the old generated full Gorgias public API clone.",
    ],
    evidence: [
      { label: "Gorgias developer docs", url: "https://developers.gorgias.com/" },
      { label: "Gorgias Create ticket", url: "https://developers.gorgias.com/reference/create-ticket" },
      { label: "Gorgias Create ticket message", url: "https://developers.gorgias.com/reference/create-ticket-message" },
      { label: "Gorgias OAuth2 Scopes", url: "https://developers.gorgias.com/docs/oauth2-scopes" },
    ],
  },
  capabilities: [
    { capability: "create-provider-object", providerObjects: [{ kind: "gorgiasTicket", label: "Gorgias Ticket" }, { kind: "gorgiasMessage", label: "Gorgias Message" }], requiresCredential: true, sideEffect: true, exposesSensitiveData: true, changesWorkflow: true },
    { capability: "read-provider-object", providerObjects: [{ kind: "gorgiasTicket", label: "Gorgias Ticket" }, { kind: "gorgiasMessage", label: "Gorgias Message" }], requiresCredential: true, exposesSensitiveData: true },
    { capability: "update-provider-object", providerObjects: [{ kind: "gorgiasTicket", label: "Gorgias Ticket" }], requiresCredential: true, sideEffect: true, exposesSensitiveData: true, changesWorkflow: true },
    { capability: "search-provider-object", providerObjects: [{ kind: "gorgiasTicket", label: "Gorgias Ticket" }, { kind: "gorgiasMessage", label: "Gorgias Message" }], requiresCredential: true, exposesSensitiveData: true },
    { capability: "handoff", providerObjects: [{ kind: "gorgiasTicket", label: "Gorgias Ticket" }, { kind: "gorgiasMessage", label: "Gorgias Message" }], requiresCredential: true, sideEffect: true, exposesSensitiveData: true, changesWorkflow: true },
  ],
  operations: [
    { alias: "ticket.create", capability: "create-provider-object", providerOperation: "POST /api/tickets", providerObject: "ticket", sideEffect: true, exposesSensitiveData: true, changesWorkflow: true },
    { alias: "ticket.read", capability: "read-provider-object", providerOperation: "GET /api/tickets/{ticket_id}", providerObject: "ticket", exposesSensitiveData: true },
    { alias: "ticket.update", capability: "update-provider-object", providerOperation: "PUT /api/tickets/{ticket_id}", providerObject: "ticket", sideEffect: true, exposesSensitiveData: true, changesWorkflow: true },
    { alias: "ticket.search", capability: "search-provider-object", providerOperation: "GET /api/tickets", providerObject: "ticket", exposesSensitiveData: true },
    { alias: "ticket.comment.create", capability: "send", providerOperation: "POST /api/tickets/{ticket_id}/messages", providerObject: "ticketComment", sideEffect: true, externallyVisible: true, exposesSensitiveData: true },
    { alias: "gorgias.message.list", capability: "read-provider-object", providerOperation: "GET /api/messages", providerObject: "gorgiasMessage", extension: true, exposesSensitiveData: true },
    { alias: "gorgias.readiness", capability: "read-provider-object", providerOperation: "GET /api/account", providerObject: "gorgiasAccount", extension: true, exposesSensitiveData: true },
  ],
  privacyNotes: ["Gorgias tickets can include ecommerce context, customer identifiers, messages, notes, tags, and assignment metadata."],
  limitations: ["Domain URL, ticket channels, message channels, macros, Shopify context, automations, and visibility are SDK-user configuration."],
  metadata: {
    issue: 35,
    implementationStrategy: "direct-http-support-slice",
    sdkDecision: {
      candidates: ["gorgias-client", "@friggframework/api-module-gorgias", "Gorgias REST docs"],
      verdict: "not-adopted",
      reason: "No official maintained backend JavaScript REST client was verified.",
      checkedAt: "2026-06-21",
    },
    supportSlice: {
      source: "Gorgias public REST API",
      allowlistedOperations: ["tickets.create", "tickets.read", "tickets.update", "tickets.list", "ticket_messages.create", "messages.list", "account.read"],
    },
  },
  maintainers: [{ name: "Cognidesk", type: "official" }],
} as const satisfies ProviderManifestInput;

export const gorgiasTicketingProviderManifest = defineIntegrationProviderPackage(gorgiasTicketingProviderManifestInput);
