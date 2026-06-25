import { defineIntegrationProviderPackage } from "@cognidesk/integration-kit";

export const nextivaSupportSlice = {
  implementationStrategy: "provider-rest-adapter",
  adapterKind: "no-official-sdk-rest-adapter",
  sdkDecision: "ncx-sdk is stale and needs API-fit review before adoption; this package provides a built-in REST adapter with providerClient override.",
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

export const nextivaProviderManifestInput = {
  id: "contact-center.nextiva",
  name: "Nextiva Contact Center",
  packageName: "@cognidesk/integration-contact-center-nextiva",
  provider: "nextiva",
  category: "contact-center",
  trustLevel: "official",
  directions: ["inbound-only", "outbound-only", "bidirectional"],
  channelAudiences: ["customer-facing", "internal-support", "mixed"],
  credentialRequirements: [
    { id: "nextiva-contact-center-api-base", label: "Nextiva Contact Center API base URL", required: true },
    { id: "nextiva-contact-center-api-access", label: "Nextiva Contact Center API access", required: true },
    { id: "nextiva-contact-center-routing", label: "Nextiva queue/campaign/routing configuration", required: false },
  ],
  coverage: {
    scope: "support-workflow-subset",
    notes: [
      "ncx-sdk is stale and needs API-fit review before adoption.",
      "Runtime calls use a built-in REST adapter when baseUrl/API credentials are supplied, with NextivaProviderClient available as an override.",
    ],
    evidence: [
      { label: "Nextiva Contact Center REST APIs", url: "https://www.nextiva.com/resources/learn/rest-apis" },
      { label: "Nextiva WorkItem Service", url: "https://developer.nextiva.com/nextiva/docs/workitem-service" },
      { label: "Nextiva ncx-sdk", url: "https://github.com/Nextiva/ncx-sdk" },
    ],
  },
  capabilities: [
    { capability: "handoff", providerObjects: [{ kind: "contactTransfer", label: "contactTransfer" }], requiresCredential: true, sideEffect: true, exposesSensitiveData: true },
    { capability: "read-provider-object", providerObjects: [{ kind: "contact", label: "contact" }], requiresCredential: true, sideEffect: false, exposesSensitiveData: true },
  ],
  operations: [
    { alias: "contact-center.handoff.request", capability: "handoff", providerObject: "contactTransfer" },
    { alias: "nextiva.request", capability: "read-provider-object", providerObject: "contact", extension: true },
  ],
  metadata: {
    implementation: nextivaSupportSlice,
    manifestOnlySafe: true,
    providerRestAdapter: {
      strategy: "provider-rest-adapter",
      adapterKind: "no-official-sdk-rest-adapter",
      providerClientOverride: "NextivaProviderClient",
    },
  },
  maintainers: [{ name: "Cognidesk", type: "official" }],
} as const;

export const nextivaProviderManifest = defineIntegrationProviderPackage(nextivaProviderManifestInput);
