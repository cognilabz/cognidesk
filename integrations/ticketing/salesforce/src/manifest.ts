import { defineIntegrationProviderPackage } from "@cognidesk/integration-kit";
import { salesforceTicketingProviderOperations } from "./operations.js";

export const salesforceTicketingProviderManifest = defineIntegrationProviderPackage({
  id: "ticketing.salesforce",
  name: "Salesforce Service Cloud",
  packageName: "@cognidesk/integration-ticketing-salesforce",
  provider: "salesforce",
  category: "ticketing",
  trustLevel: "official",
  directions: ["receive-only", "send-only", "bidirectional"],
  channelAudiences: ["customer-facing", "internal-support", "mixed"],
  operations: salesforceTicketingProviderOperations,
  coverage: {
    scope: "provider-api-subset",
    notes: [
      "Coverage is scoped to Service Cloud Case support workflows implemented by typed handlers.",
      "Implementation uses maintained jsforce v3. Broader Salesforce APIs and org-specific sObjects remain accessible through rawClient, but are not Cognidesk adapter coverage.",
      "Generated or direct raw Salesforce slices should stay scoped to reviewed Service Cloud support workflows.",
    ],
    evidence: [
      { label: "JSforce", url: "https://github.com/jsforce/jsforce" },
      { label: "Salesforce REST API resources", url: "https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_list.htm" },
      { label: "Salesforce Case object reference", url: "https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_case.htm" },
      { label: "Salesforce CaseComment object reference", url: "https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_casecomment.htm" },
      { label: "Salesforce FeedItem object reference", url: "https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_feeditem.htm" },
    ],
  },
  credentialRequirements: [
    { id: "salesforce-instance", label: "Salesforce instance URL", required: true },
    {
      id: "salesforce-oauth-access",
      label: "Salesforce OAuth access token",
      scopes: ["api", "refresh_token", "openid"],
      required: true,
      metadata: { scopeKind: "provider-oauth-scopes" },
    },
  ],
  capabilities: [
    { capability: "read-provider-object", label: "Read Salesforce Cases", audiences: ["customer-facing", "internal-support", "mixed"], providerObjects: [{ kind: "ticket", label: "Case", schemaName: "Case" }], requiresCredential: true, exposesSensitiveData: true },
    { capability: "send", label: "Create Salesforce CaseComments", audiences: ["customer-facing", "mixed"], providerObjects: [{ kind: "ticketComment", label: "CaseComment", schemaName: "CaseComment" }], requiresCredential: true, sideEffect: true, exposesSensitiveData: true, changesWorkflow: true },
    { capability: "create-provider-object", label: "Create Salesforce Cases", audiences: ["customer-facing", "internal-support", "mixed"], providerObjects: [{ kind: "ticket", label: "Case", schemaName: "Case" }], requiresCredential: true, sideEffect: true, exposesSensitiveData: true, changesWorkflow: true },
    { capability: "update-provider-object", label: "Update Salesforce Cases", audiences: ["internal-support", "mixed"], providerObjects: [{ kind: "ticket", label: "Case", schemaName: "Case" }], requiresCredential: true, sideEffect: true, exposesSensitiveData: true, changesWorkflow: true },
    { capability: "search-provider-object", label: "Search Salesforce Cases", audiences: ["customer-facing", "internal-support", "mixed"], providerObjects: [{ kind: "ticket", label: "Case", schemaName: "Case" }], requiresCredential: true, exposesSensitiveData: true },
    { capability: "draft", label: "Create Salesforce internal feed items", audiences: ["internal-support", "mixed"], providerObjects: [{ kind: "internalNote", label: "FeedItem", schemaName: "FeedItem" }], requiresCredential: true, sideEffect: true, exposesSensitiveData: true },
  ],
  privacyNotes: [
    "Salesforce cases, comments, feed items, contacts, accounts, platform events, and custom fields can contain customer data and internal support context.",
  ],
  limitations: [
    "Record types, required fields, queues, owners, assignment rules, Flow automation, field-level security, and Service Cloud licenses are SDK-user configuration.",
    "Generic SOQL remains an SDK-user-owned escape hatch and does not imply full Salesforce, metadata, Bulk, Pub/Sub, Streaming, or org-specific sObject coverage.",
  ],
  metadata: {
    implementation: {
      strategy: "maintained-library",
      sdkPackage: "jsforce",
      sdkVersionRange: "^3.10.16",
      rawClientEscapeHatch: "SalesforceTicketingClient.rawClient",
      manifestImport: "no-sdk-client-initialization",
    },
    channelCoverage: {
      cases: "typed-create-read-update-search",
      caseComments: "typed-create",
      feedItems: "typed-internal-note-create",
      soql: "sdk-owned-extension",
      broaderSalesforceApi: "provider-supported-raw-client",
    },
  },
  maintainers: [{ name: "Cognidesk", type: "official" }],
});
