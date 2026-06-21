import { defineIntegrationProviderPackage, type ProviderManifestInput } from "@cognidesk/integration-kit";

export const freshdeskTicketingProviderManifestInput = {
  id: "ticketing.freshdesk",
  name: "Freshdesk Ticketing",
  packageName: "@cognidesk/ticketing-freshdesk",
  provider: "freshdesk",
  category: "ticketing",
  trustLevel: "official",
  directions: ["receive-only", "send-only", "bidirectional"],
  channelAudiences: ["customer-facing", "internal-support", "mixed"],
  credentialRequirements: [
    { id: "freshdesk-domain", label: "Freshdesk domain", required: true },
    {
      id: "freshdesk-api-key",
      label: "Freshdesk API key",
      scopes: ["read", "write"],
      required: true,
      metadata: {
        scopeKind: "internal-capability-labels",
        privilegeGuidance: "Freshdesk API keys are governed by the authenticated agent's Freshdesk role and ticket permissions.",
      },
    },
    { id: "freshdesk-webhook-secret", label: "Freshdesk webhook shared secret", required: false },
  ],
  coverage: {
    scope: "provider-api-subset",
    notes: [
      "SDK decision: Freshworks has beta or very early JavaScript packages, but no verified official maintained Freshdesk ticketing backend client suitable for this adapter.",
      "Coverage is limited to Freshdesk v2 tickets, contacts, conversations, replies, notes, handoff updates, agents, groups, current-agent readiness, and SDK-user shared-secret webhook validation.",
    ],
    evidence: [
      { label: "Freshdesk API v2 reference", url: "https://developers.freshdesk.com/api/" },
      { label: "Freshworks API SDK announcement", url: "https://community.freshworks.dev/t/freshworks-api-sdk-for-node-js/5232" },
    ],
  },
  capabilities: [
    { capability: "receive", providerObjects: [{ kind: "freshdeskWebhookEvent", label: "Freshdesk Webhook Event" }], requiresCredential: true, exposesSensitiveData: true },
    { capability: "create-provider-object", providerObjects: [{ kind: "freshdeskTicket", label: "Freshdesk Ticket" }, { kind: "freshdeskContact", label: "Freshdesk Contact" }, { kind: "freshdeskConversation", label: "Freshdesk Ticket Conversation" }], requiresCredential: true, sideEffect: true, exposesSensitiveData: true, changesWorkflow: true },
    { capability: "read-provider-object", providerObjects: [{ kind: "freshdeskTicket", label: "Freshdesk Ticket" }, { kind: "freshdeskContact", label: "Freshdesk Contact" }, { kind: "freshdeskAgent", label: "Freshdesk Agent" }, { kind: "freshdeskGroup", label: "Freshdesk Group" }], requiresCredential: true, exposesSensitiveData: true },
    { capability: "update-provider-object", providerObjects: [{ kind: "freshdeskTicket", label: "Freshdesk Ticket" }, { kind: "freshdeskContact", label: "Freshdesk Contact" }], requiresCredential: true, sideEffect: true, exposesSensitiveData: true, changesWorkflow: true },
    { capability: "search-provider-object", providerObjects: [{ kind: "freshdeskTicket", label: "Freshdesk Ticket" }, { kind: "freshdeskContact", label: "Freshdesk Contact" }], requiresCredential: true, exposesSensitiveData: true },
    { capability: "handoff", providerObjects: [{ kind: "freshdeskTicket", label: "Freshdesk Ticket" }, { kind: "freshdeskConversation", label: "Freshdesk Ticket Conversation" }], requiresCredential: true, sideEffect: true, exposesSensitiveData: true, changesWorkflow: true },
  ],
  operations: [
    { alias: "ticket.create", capability: "create-provider-object", providerOperation: "POST /api/v2/tickets", providerObject: "ticket", sideEffect: true, exposesSensitiveData: true, changesWorkflow: true },
    { alias: "ticket.read", capability: "read-provider-object", providerOperation: "GET /api/v2/tickets/{ticket_id}", providerObject: "ticket", exposesSensitiveData: true },
    { alias: "ticket.update", capability: "update-provider-object", providerOperation: "PUT /api/v2/tickets/{ticket_id}", providerObject: "ticket", sideEffect: true, exposesSensitiveData: true, changesWorkflow: true },
    { alias: "ticket.search", capability: "search-provider-object", providerOperation: "GET /api/v2/search/tickets", providerObject: "ticket", exposesSensitiveData: true },
    { alias: "ticket.comment.create", capability: "send", providerOperation: "POST /api/v2/tickets/{ticket_id}/reply", providerObject: "ticketComment", sideEffect: true, externallyVisible: true, exposesSensitiveData: true },
    { alias: "ticket.internalNote.create", capability: "draft", providerOperation: "POST /api/v2/tickets/{ticket_id}/notes", providerObject: "internalNote", sideEffect: true, exposesSensitiveData: true },
    { alias: "customer.read", capability: "read-provider-object", providerOperation: "GET /api/v2/contacts/{contact_id}", providerObject: "customer", exposesSensitiveData: true },
    { alias: "customer.search", capability: "search-provider-object", providerOperation: "GET /api/v2/search/contacts", providerObject: "customer", exposesSensitiveData: true },
    { alias: "freshdesk.agent.read", capability: "read-provider-object", providerOperation: "GET /api/v2/agents/{agent_id}", providerObject: "freshdeskAgent", extension: true, exposesSensitiveData: true },
    { alias: "freshdesk.group.read", capability: "read-provider-object", providerOperation: "GET /api/v2/groups/{group_id}", providerObject: "freshdeskGroup", extension: true },
    { alias: "freshdesk.readiness", capability: "read-provider-object", providerOperation: "GET /api/v2/agents/me", providerObject: "freshdeskAgent", extension: true, exposesSensitiveData: true },
    { alias: "freshdesk.webhook.parse", capability: "receive", providerOperation: "SDK-user configured automation webhook", providerObject: "freshdeskWebhookEvent", extension: true, exposesSensitiveData: true },
  ],
  privacyNotes: ["Freshdesk tickets, conversations, notes, contacts, assignments, tags, custom fields, and automation webhook payloads can contain customer data."],
  limitations: ["Ticket forms, required fields, statuses, products, groups, SLAs, automations, and agent permissions are SDK-user configuration."],
  metadata: {
    issue: 35,
    implementationStrategy: "direct-http-support-slice",
    sdkDecision: {
      candidates: ["@freshworks/api-sdk", "@freshworks/freshdesk"],
      verdict: "not-adopted",
      reason: "No verified official maintained Freshdesk ticketing backend SDK was found.",
      checkedAt: "2026-06-21",
    },
    supportSlice: {
      source: "Freshdesk API v2",
      allowlistedOperations: ["tickets.create", "tickets.read", "tickets.update", "tickets.search", "reply.create", "note.create", "contacts.read", "contacts.search", "agents.read", "groups.read", "agents.me", "automation_webhook.parse"],
    },
  },
  maintainers: [{ name: "Cognidesk", type: "official" }],
} as const satisfies ProviderManifestInput;

export const freshdeskTicketingProviderManifest = defineIntegrationProviderPackage(freshdeskTicketingProviderManifestInput);
