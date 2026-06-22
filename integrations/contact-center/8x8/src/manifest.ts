import { defineIntegrationProviderPackage } from "@cognidesk/integration-kit";

export const eightByEightSupportSlice = {
  implementationStrategy: "generated-support-slice",
  sdkDecision: "No viable official server-side JavaScript Contact Center SDK was verified; the package keeps selected official OpenAPI support operations instead of a full provider clone.",
  verifiedAt: "2026-06-21",
  allowedOperations: [
  {
    id: "placePhoneCall",
    alias: "contactCenter.contact.start",
    method: "POST",
    path: "/tenants/{tenantId}/calls",
    source: "https://raw.githubusercontent.com/8x8Cloud/public-developer-docs/master/docs_oas/actions-events/contact_center_call_api.json",
    checksum: "sha256:87445b35060c46e8e70b23636c77d33a1ff2558eb526aefb45447752132cfe62"
  },
  {
    id: "deletePhoneInteraction",
    alias: "contactCenter.contact.end",
    method: "DELETE",
    path: "/tenants/{tenantId}/calls/{interactionId}",
    source: "https://raw.githubusercontent.com/8x8Cloud/public-developer-docs/master/docs_oas/actions-events/contact_center_call_api.json",
    checksum: "sha256:87445b35060c46e8e70b23636c77d33a1ff2558eb526aefb45447752132cfe62"
  },
  {
    id: "setagentstatus",
    alias: "contactCenter.agent.status.update",
    method: "PUT",
    path: "/tenants/{tenantId}/agentstatus/agents/{agentId}",
    source: "https://raw.githubusercontent.com/8x8Cloud/public-developer-docs/master/docs_oas/actions-events/contact_center_agent_status_api.json",
    checksum: "sha256:89ba77f48f7a471fb21c34dfb0c7170c1a90b7ea08da8de65981049ade09c2ae"
  }
],
} as const;

export const eightByEightProviderManifestInput = {
  id: "contactCenter.8x8",
  name: "8x8 Contact Center",
  packageName: "@cognidesk/integration-contact-center-8x8",
  provider: "8x8",
  category: "contactCenter",
  trustLevel: "official",
  directions: ["inbound-only", "outbound-only", "bidirectional"],
  channelAudiences: ["customer-facing", "internal-support", "mixed"],
  credentialRequirements: [
    { id: "8x8-contact-center-api-base", label: "8x8 Contact Center API base URL", required: true },
    { id: "8x8-contact-center-api-access", label: "8x8 Contact Center API access", required: true },
    { id: "8x8-contact-center-routing", label: "8x8 queue/campaign routing configuration", required: false },
  ],
  coverage: {
    scope: "support-workflow-subset",
    notes: ["No viable official server-side JavaScript Contact Center SDK was verified; the package keeps selected official OpenAPI support operations instead of a full provider clone."],
    evidence: [
      { label: "8x8 Contact Center Call API OpenAPI", url: "https://raw.githubusercontent.com/8x8Cloud/public-developer-docs/master/docs_oas/actions-events/contact_center_call_api.json" },
      { label: "8x8 Contact Center Agent Status OpenAPI", url: "https://raw.githubusercontent.com/8x8Cloud/public-developer-docs/master/docs_oas/actions-events/contact_center_agent_status_api.json" },
    ],
  },
  capabilities: [
    { capability: "handoff", providerObjects: [{ kind: "contactTransfer", label: "contactTransfer" }], requiresCredential: true, sideEffect: true, exposesSensitiveData: true },
    { capability: "send", providerObjects: [{ kind: "contact", label: "contact" }], requiresCredential: true, sideEffect: true, exposesSensitiveData: true },
    { capability: "update-provider-object", providerObjects: [{ kind: "contact", label: "contact" }], requiresCredential: true, sideEffect: true, exposesSensitiveData: true },
    { capability: "update-provider-object", providerObjects: [{ kind: "agent", label: "agent" }], requiresCredential: true, sideEffect: true, exposesSensitiveData: true },
  ],
  operations: [
    { alias: "contactCenter.handoff.request", capability: "handoff", providerObject: "contactTransfer" },
    { alias: "contactCenter.contact.start", capability: "send", providerObject: "contact" },
    { alias: "contactCenter.contact.end", capability: "update-provider-object", providerObject: "contact" },
    { alias: "contactCenter.agent.status.update", capability: "update-provider-object", providerObject: "agent" },
  ],
  metadata: {
    implementation: eightByEightSupportSlice,
    manifestOnlySafe: true,
  },
  maintainers: [{ name: "Cognidesk", type: "official" }],
} as const;

export const eightByEightProviderManifest = defineIntegrationProviderPackage(eightByEightProviderManifestInput);
