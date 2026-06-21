import { defineIntegrationProviderPackage } from "@cognidesk/integration-kit";
import { hubSpotTicketingProviderOperations } from "./operations.js";

export const hubSpotTicketingProviderManifest = defineIntegrationProviderPackage({
  id: "ticketing.hubspot",
  name: "HubSpot Service Hub",
  packageName: "@cognidesk/ticketing-hubspot",
  provider: "hubspot",
  category: "ticketing",
  trustLevel: "official",
  directions: ["receive-only", "send-only", "bidirectional"],
  channelAudiences: ["customer-facing", "internal-support", "mixed"],
  operations: hubSpotTicketingProviderOperations,
  coverage: {
    scope: "support-workflow-subset",
    notes: [
      "Coverage is scoped to normalized ticketing support operations implemented by typed handlers.",
      "Implementation uses the maintained official @hubspot/api-client package; broader HubSpot APIs remain available through the rawClient escape hatch.",
      "Generated Cognidesk full-provider API clones should be removed only after this package's replacement tests pass.",
    ],
    evidence: [
      { label: "HubSpot Node client", url: "https://github.com/HubSpot/hubspot-api-nodejs" },
      { label: "HubSpot CRM Tickets API guide", url: "https://developers.hubspot.com/docs/api-reference/legacy/crm/objects/tickets/guide" },
      { label: "HubSpot CRM Notes API guide", url: "https://developers.hubspot.com/docs/api-reference/legacy/crm/activities/notes/guide" },
      { label: "HubSpot CRM search guide", url: "https://developers.hubspot.com/docs/api-reference/latest/crm/search-the-crm" },
    ],
  },
  credentialRequirements: [
    {
      id: "hubspot-private-app-token",
      label: "HubSpot private app token",
      description: "Server-side private app access token or OAuth bearer token for HubSpot CRM APIs.",
      scopes: ["tickets", "crm.objects.contacts.read", "crm.objects.contacts.write", "crm.objects.owners.read"],
      required: true,
      metadata: { scopeKind: "provider-oauth-scopes" },
    },
  ],
  capabilities: [
    { capability: "read-provider-object", label: "Read HubSpot tickets", audiences: ["customer-facing", "internal-support", "mixed"], providerObjects: [{ kind: "ticket", label: "Ticket" }], requiresCredential: true, exposesSensitiveData: true },
    { capability: "send", label: "Create HubSpot ticket comments", audiences: ["customer-facing", "mixed"], providerObjects: [{ kind: "ticketComment", label: "Ticket Comment" }], requiresCredential: true, sideEffect: true, exposesSensitiveData: true, changesWorkflow: true },
    { capability: "create-provider-object", label: "Create HubSpot tickets", audiences: ["customer-facing", "internal-support", "mixed"], providerObjects: [{ kind: "ticket", label: "Ticket" }], requiresCredential: true, sideEffect: true, exposesSensitiveData: true, changesWorkflow: true },
    { capability: "update-provider-object", label: "Update HubSpot tickets", audiences: ["internal-support", "mixed"], providerObjects: [{ kind: "ticket", label: "Ticket" }], requiresCredential: true, sideEffect: true, exposesSensitiveData: true, changesWorkflow: true },
    { capability: "search-provider-object", label: "Search HubSpot tickets", audiences: ["customer-facing", "internal-support", "mixed"], providerObjects: [{ kind: "ticket", label: "Ticket" }], requiresCredential: true, exposesSensitiveData: true },
    { capability: "draft", label: "Create HubSpot internal notes", audiences: ["internal-support", "mixed"], providerObjects: [{ kind: "internalNote", label: "Internal Note" }], requiresCredential: true, sideEffect: true, exposesSensitiveData: true },
    { capability: "link-provider-object", label: "Create HubSpot associations", audiences: ["internal-support", "mixed"], providerObjects: [{ kind: "conversationLink", label: "Conversation Link" }], requiresCredential: true, sideEffect: true, changesWorkflow: true, extension: true },
  ],
  privacyNotes: [
    "HubSpot tickets, notes, contacts, companies, associations, owners, and custom properties can contain customer data and internal support context.",
  ],
  limitations: [
    "Ticket pipelines, stages, owners, custom properties, association labels, scopes, and portal-specific workflow policy are SDK-user configuration.",
    "This package does not claim full HubSpot API coverage; use rawClient for advanced official SDK methods.",
  ],
  metadata: {
    implementation: {
      strategy: "official-sdk",
      sdkPackage: "@hubspot/api-client",
      sdkVersionRange: "^13.5.0",
      rawClientEscapeHatch: "HubSpotTicketingClient.rawClient",
      manifestImport: "no-sdk-client-initialization",
    },
    channelCoverage: {
      tickets: "typed-create-read-update-search",
      comments: "typed-note-create",
      internalNotes: "typed-note-create",
      associations: "typed-extension",
      broaderHubSpotApi: "provider-supported-raw-client",
    },
  },
  maintainers: [{ name: "Cognidesk", type: "official" }],
});
