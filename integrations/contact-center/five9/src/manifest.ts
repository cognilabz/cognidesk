import { defineIntegrationProviderPackage } from "@cognidesk/integration-kit";

export const five9SupportSlice = {
  implementationStrategy: "direct-http-support-slice",
  sdkDecision: "No viable official server-side JavaScript SDK was verified; npm five9 is third-party and stale, while Five9 CRM SDK is browser/ADT-oriented.",
  verifiedAt: "2026-06-21",
  allowedOperations: [
  {
    id: "configuredHandoff",
    alias: "contactCenter.handoff.request",
    method: "POST",
    path: "host-configured",
    source: "host-configured",
    checksum: "not-applicable-host-configured"
  }
],
} as const;

export const five9ProviderManifestInput = {
  id: "contactCenter.five9",
  name: "Five9",
  packageName: "@cognidesk/integration-contact-center-five9",
  provider: "five9",
  category: "contactCenter",
  trustLevel: "official",
  directions: ["inbound-only", "outbound-only", "bidirectional"],
  channelAudiences: ["customer-facing", "internal-support", "mixed"],
  credentialRequirements: [
    { id: "five9-api-base", label: "Five9 API base URL", required: true },
    { id: "five9-api-access", label: "Five9 API access", required: true },
    { id: "five9-routing", label: "Five9 skill/campaign routing configuration", required: false },
  ],
  coverage: {
    scope: "support-workflow-subset",
    notes: ["No viable official server-side JavaScript SDK was verified; npm five9 is third-party and stale, while Five9 CRM SDK is browser/ADT-oriented."],
    evidence: [
      { label: "Five9 Contact Center APIs and SDKs", url: "https://www.five9.com/products/capabilities/call-center-apis-and-sdks" },
      { label: "Five9 development program", url: "https://www.five9.com/development" },
    ],
  },
  capabilities: [
    { capability: "handoff", providerObjects: [{ kind: "contactTransfer", label: "contactTransfer" }], requiresCredential: true, sideEffect: true, exposesSensitiveData: true },
  ],
  operations: [
    { alias: "contactCenter.handoff.request", capability: "handoff", providerObject: "contactTransfer" },
  ],
  metadata: {
    implementation: five9SupportSlice,
    manifestOnlySafe: true,
  },
  maintainers: [{ name: "Cognidesk", type: "official" }],
} as const;

export const five9ProviderManifest = defineIntegrationProviderPackage(five9ProviderManifestInput);
