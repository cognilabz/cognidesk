import { defineIntegrationProviderPackage, type ProviderManifestInput } from "@cognidesk/integration-kit";

export const zendeskTicketingProviderManifestInput = {
  id: "ticketing.zendesk",
  name: "Zendesk Support",
  packageName: "@cognidesk/integration-ticketing-zendesk",
  provider: "zendesk",
  category: "ticketing",
  trustLevel: "official",
  directions: ["bidirectional"],
  channelAudiences: ["customer-facing", "internal-support", "mixed"],
  credentialRequirements: [
    { id: "zendesk-instance", label: "Zendesk Support instance URL", required: true },
    {
      id: "zendesk-api-access",
      label: "Zendesk Support API access",
      scopes: ["read", "write"],
      required: true,
      metadata: {
        scopeKind: "mixed-auth-mode",
        privilegeGuidance: "OAuth tokens use Zendesk read/write scopes. API-token credentials inherit the Zendesk user's role and Support permissions.",
      },
    },
  ],
  coverage: {
    scope: "provider-api-subset",
    notes: [
      "SDK decision: Zendesk documents node-zendesk but marks it not officially supported, so this package keeps a constrained Zendesk Support API slice instead of adopting it as an official SDK.",
      "Coverage is limited to ticket create/read/update/search, comments, uploads, users, organizations, webhooks list, current-user readiness, and raw request escape hatch operations used by Cognidesk support workflows.",
      "This package intentionally does not copy the old generated full Zendesk Support OpenAPI clone.",
    ],
    evidence: [
      { label: "Zendesk Node.js API client docs", url: "https://developer.zendesk.com/documentation/ticketing/api-clients/nodejs/" },
      { label: "Zendesk Support API OpenAPI", url: "https://developer.zendesk.com/zendesk/oas.yaml" },
      { label: "Zendesk Support Tickets API", url: "https://developer.zendesk.com/api-reference/ticketing/tickets/tickets/" },
      { label: "Zendesk Ticket Comments API", url: "https://developer.zendesk.com/api-reference/ticketing/tickets/ticket_comments/" },
      { label: "Zendesk Upload Files API", url: "https://developer.zendesk.com/api-reference/ticketing/tickets/ticket-attachments/" },
    ],
  },
  capabilities: [
    { capability: "create-provider-object", providerObjects: [{ kind: "zendeskTicket", label: "Zendesk Ticket" }, { kind: "zendeskTicketComment", label: "Zendesk Ticket Comment" }], requiresCredential: true, sideEffect: true, exposesSensitiveData: true, changesWorkflow: true },
    { capability: "read-provider-object", providerObjects: [{ kind: "zendeskTicket", label: "Zendesk Ticket" }, { kind: "zendeskUser", label: "Zendesk User" }, { kind: "zendeskOrganization", label: "Zendesk Organization" }, { kind: "zendeskWebhook", label: "Zendesk Webhook" }], requiresCredential: true, exposesSensitiveData: true },
    { capability: "update-provider-object", providerObjects: [{ kind: "zendeskTicket", label: "Zendesk Ticket" }], requiresCredential: true, sideEffect: true, exposesSensitiveData: true, changesWorkflow: true },
    { capability: "search-provider-object", providerObjects: [{ kind: "zendeskTicket", label: "Zendesk Ticket" }], requiresCredential: true, exposesSensitiveData: true },
    { capability: "handoff", providerObjects: [{ kind: "zendeskTicket", label: "Zendesk Ticket" }, { kind: "zendeskTicketComment", label: "Zendesk Ticket Comment" }], requiresCredential: true, sideEffect: true, exposesSensitiveData: true, changesWorkflow: true },
  ],
  operations: [
    { alias: "ticket.create", capability: "create-provider-object", providerOperation: "POST /api/v2/tickets.json", providerObject: "ticket", sideEffect: true, exposesSensitiveData: true, changesWorkflow: true },
    { alias: "ticket.read", capability: "read-provider-object", providerOperation: "GET /api/v2/tickets/{ticket_id}.json", providerObject: "ticket", exposesSensitiveData: true },
    { alias: "ticket.update", capability: "update-provider-object", providerOperation: "PUT /api/v2/tickets/{ticket_id}.json", providerObject: "ticket", sideEffect: true, exposesSensitiveData: true, changesWorkflow: true },
    { alias: "ticket.search", capability: "search-provider-object", providerOperation: "GET /api/v2/search.json", providerObject: "ticket", exposesSensitiveData: true },
    { alias: "ticket.comment.create", capability: "send", providerOperation: "PUT /api/v2/tickets/{ticket_id}.json", providerObject: "ticketComment", sideEffect: true, externallyVisible: true, exposesSensitiveData: true },
    { alias: "ticket.internalNote.create", capability: "draft", providerOperation: "PUT /api/v2/tickets/{ticket_id}.json", providerObject: "internalNote", sideEffect: true, exposesSensitiveData: true },
    { alias: "ticket.attachments.add", capability: "attach", providerOperation: "POST /api/v2/uploads.json", providerObject: "attachment", sideEffect: true, exposesSensitiveData: true },
    { alias: "customer.read", capability: "read-provider-object", providerOperation: "GET /api/v2/users/{user_id}.json", providerObject: "customer", exposesSensitiveData: true },
    { alias: "zendesk.organization.read", capability: "read-provider-object", providerOperation: "GET /api/v2/organizations/{organization_id}.json", providerObject: "zendeskOrganization", extension: true, exposesSensitiveData: true },
    { alias: "zendesk.webhook.list", capability: "search-provider-object", providerOperation: "GET /api/v2/webhooks", providerObject: "zendeskWebhook", extension: true, exposesSensitiveData: true },
    { alias: "zendesk.readiness", capability: "read-provider-object", providerOperation: "GET /api/v2/users/me.json", providerObject: "zendeskCurrentUser", extension: true, exposesSensitiveData: true },
  ],
  privacyNotes: ["Zendesk tickets can contain customer messages, requester details, internal comments, tags, and workflow metadata."],
  limitations: ["Tenant fields, triggers, automations, macros, routing, requester identity, and outbound policy remain SDK-user configuration."],
  metadata: {
    issue: 35,
    implementationStrategy: "direct-http-support-slice",
    sdkDecision: {
      candidate: "node-zendesk",
      verdict: "not-adopted",
      reason: "Zendesk's own docs mark node-zendesk as not officially supported.",
      checkedAt: "2026-06-21",
    },
    supportSlice: {
      source: "Zendesk Support API",
      allowlistedOperations: ["tickets.create", "tickets.read", "tickets.update", "search", "ticket_comments.create", "uploads.create", "users.read", "organizations.read", "webhooks.list", "users.me"],
    },
  },
  maintainers: [{ name: "Cognidesk", type: "official" }],
} as const satisfies ProviderManifestInput;

export const zendeskTicketingProviderManifest = defineIntegrationProviderPackage(zendeskTicketingProviderManifestInput);
