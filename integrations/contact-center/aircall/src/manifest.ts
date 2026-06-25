import {
  defineIntegrationProviderPackage,
  type ProviderManifestInput,
} from "@cognidesk/integration-kit";

export const aircallOperationAliases = [
  "contact-center.handoff.request",
] as const;

export const aircallRestSupportSlice = {
  implementationStrategy: "provider-rest-adapter",
  adapterKind: "no-official-sdk-rest-adapter",
  sdkDecision: "aircall-everywhere is a maintained Workspace iframe SDK, not a server-side Public API client; this package provides a built-in REST adapter with rawClient override.",
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

export const aircallSupportSlice = aircallRestSupportSlice;

export const aircallProviderManifestInput = {
  id: "contact-center.aircall",
  name: "Aircall",
  packageName: "@cognidesk/integration-contact-center-aircall",
  provider: "aircall",
  category: "contact-center",
  trustLevel: "official",
  directions: ["inbound-only", "outbound-only", "bidirectional"],
  channelAudiences: ["customer-facing", "internal-support", "mixed"],
  credentialRequirements: [
    { id: "aircall-api-base", label: "Aircall API base URL", required: true },
    { id: "aircall-api-access", label: "Aircall API access", required: true },
    { id: "aircall-routing", label: "Aircall number/team/routing configuration", required: false },
  ],
  coverage: {
    scope: "support-workflow-subset",
    notes: [
      "aircall-everywhere is a maintained Workspace iframe SDK, not a server-side Public API client.",
      "Runtime calls use a built-in REST adapter when baseUrl/API credentials are supplied, with AircallRawClient available as an override.",
    ],
    evidence: [
      { label: "Aircall API References", url: "https://developer.aircall.io/api-references/" },
      { label: "Aircall Everywhere SDK", url: "https://github.com/aircall/aircall-everywhere" },
    ],
  },
  capabilities: [
    { capability: "handoff", providerObjects: [{ kind: "contactTransfer", label: "contactTransfer" }], requiresCredential: true, sideEffect: true, exposesSensitiveData: true },
  ],
  operations: [
    { alias: "contact-center.handoff.request", capability: "handoff", providerObject: "contactTransfer" },
  ],
  metadata: {
    implementation: aircallRestSupportSlice,
    manifestOnlySafe: true,
    providerRestAdapter: {
      strategy: "provider-rest-adapter",
      adapterKind: "no-official-sdk-rest-adapter",
      rawClientOverride: "AircallRawClient",
    },
  },
  maintainers: [{ name: "Cognidesk", type: "official" }],
} as const satisfies ProviderManifestInput;

export const aircallProviderManifest = defineIntegrationProviderPackage(aircallProviderManifestInput);
