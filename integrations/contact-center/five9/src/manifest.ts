import { defineIntegrationProviderPackage } from "@cognidesk/integration-kit";

export const five9RestSupportSlice = {
  implementationStrategy: "provider-rest-adapter",
  adapterKind: "no-official-sdk-rest-adapter",
  sdkDecision: "No suitable official server-side JavaScript SDK was verified; npm five9 is third-party and stale, while Five9 CRM SDK is browser/ADT-oriented.",
  verifiedAt: "2026-06-25",
  allowedOperations: [
    {
      id: "configuredHandoff",
      alias: "contact-center.handoff.request",
      method: "POST",
      path: "host-configured",
      source: "provider-rest-adapter",
      checksum: "not-applicable-host-configured",
    },
  ],
} as const;

export const five9ProviderManifestInput = {
  id: "contact-center.five9",
  name: "Five9",
  packageName: "@cognidesk/integration-contact-center-five9",
  provider: "five9",
  category: "contact-center",
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
    notes: [
      "No suitable official server-side JavaScript SDK was verified.",
      "Runtime calls use a built-in REST adapter when baseUrl/API credentials are supplied, with Five9RawClient available as an override.",
    ],
    evidence: [
      { label: "Five9 Contact Center APIs and SDKs", url: "https://www.five9.com/products/capabilities/call-center-apis-and-sdks" },
      { label: "Five9 CRM SDK", url: "https://documentation.five9.com/bundle/crmsdk/page/index.html" },
    ],
  },
  capabilities: [
    { capability: "handoff", providerObjects: [{ kind: "contactTransfer", label: "contactTransfer" }], requiresCredential: true, sideEffect: true, exposesSensitiveData: true },
  ],
  operations: [
    { alias: "contact-center.handoff.request", capability: "handoff", providerObject: "contactTransfer" },
  ],
  metadata: {
    implementation: five9RestSupportSlice,
    providerRestAdapter: {
      strategy: "provider-rest-adapter",
      adapterKind: "no-official-sdk-rest-adapter",
      rawClientOverride: "Five9RawClient",
    },
  },
  maintainers: [{ name: "Cognidesk", type: "official" }],
} as const;

export const five9ProviderManifest = defineIntegrationProviderPackage(five9ProviderManifestInput);
