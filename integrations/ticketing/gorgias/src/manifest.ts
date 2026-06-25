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
    {
      id: "gorgias-base-url",
      label: "Gorgias REST API base URL",
      required: true,
    },
    {
      id: "gorgias-api-access",
      label: "Gorgias access token or API key",
      required: true,
      metadata: { authSchemes: ["bearer", "basic-email-api-key"] },
    },
  ],
  coverage: {
    scope: "support-workflow-subset",
    notes: [
      "Runtime coverage is provided through the built-in Gorgias REST adapter when baseUrl and accessToken/apiKey are configured.",
      "A host-provided GorgiasTicketingProviderClient can still override the built-in REST adapter.",
      "Coverage is limited to delegated Gorgias ticket create/read/update/list operations, ticket-message create/list operations, and account readiness for Cognidesk support workflows.",
      "This package intentionally does not copy the old generated full Gorgias public API clone.",
    ],
    evidence: [
      { label: "Gorgias developer docs", url: "https://developers.gorgias.com/" },
      { label: "Gorgias REST API credentials", url: "https://docs.gorgias.com/en-US/rest-api-208286" },
      { label: "Gorgias Create ticket", url: "https://developers.gorgias.com/reference/create-ticket" },
      { label: "Gorgias Create ticket message", url: "https://developers.gorgias.com/reference/create-ticket-message" },
      { label: "Gorgias OAuth2 Scopes", url: "https://developers.gorgias.com/docs/oauth2-scopes" },
      { label: "gorgias-client package review", url: "https://www.npmjs.com/package/gorgias-client" },
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
  limitations: [
    "Domain URL, ticket channels, message channels, macros, Shopify context, automations, and visibility are SDK-user configuration.",
    "The REST adapter covers JSON operations; multipart or provider-specific advanced endpoints belong in an injected GorgiasTicketingProviderClient or rawRequest.",
  ],
  metadata: {
    issue: 35,
    implementationStrategy: "provider-rest-adapter",
    sdkDecision: "no-official-sdk-rest-adapter",
    implementation: {
      strategy: "provider-rest-adapter",
      providerClientInterface: "GorgiasTicketingProviderClient",
      defaultHttpClient: "providerJsonRequest",
      defaultFetchClient: "runtime-fetch-or-configured-fetch",
      providerClientOverride: true,
      manifestImport: "no-client-initialization",
    },
    providerClient: {
      interface: "GorgiasTicketingProviderClient",
      injectionPolicy: "optional-override",
      importPolicy: "runtime-override",
      defaultClient: "built-in-rest-adapter",
    },
    sdkEvaluation: {
      checkedAt: "2026-06-25",
      officialBackendJavaScriptSdk: "not-verified",
      reviewedPackages: [
        {
          package: "gorgias-client",
          version: "2.0.4",
          result: "not-used-as-package-default",
          reason: "Unofficial package; its public GorgiasClient constructs a FetchHttpClient and does not expose constructor-level HTTP client injection.",
        },
        {
          package: "@friggframework/api-module-gorgias",
          version: "0.10.1",
          result: "not-used-as-package-default",
          reason: "Framework module rather than a standalone official Gorgias backend SDK for this runtime package.",
        },
      ],
    },
    delegatedSupportSurface: {
      source: "Built-in Gorgias REST adapter",
      allowlistedOperations: ["tickets.create", "tickets.read", "tickets.update", "tickets.list", "ticket_messages.create", "messages.list", "account.read"],
    },
  },
  maintainers: [{ name: "Cognidesk", type: "official" }],
} as const satisfies ProviderManifestInput;

export const gorgiasTicketingProviderManifest = defineIntegrationProviderPackage(gorgiasTicketingProviderManifestInput);
