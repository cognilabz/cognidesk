import { defineIntegrationProviderPackage } from "@cognidesk/integration-kit";

export const aircallSupportSlice = {
  implementationStrategy: "direct-http-support-slice",
  sdkDecision: "aircall-everywhere is a maintained Workspace iframe SDK, not a server-side Public API client; this package keeps only configured-path support workflow calls.",
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

export const aircallProviderManifestInput = {
  id: "contactCenter.aircall",
  name: "Aircall",
  packageName: "@cognidesk/contact-center-aircall",
  provider: "aircall",
  category: "contactCenter",
  trustLevel: "official",
  directions: ["inbound-only", "outbound-only", "bidirectional"],
  channelAudiences: ["customer-facing", "internal-support", "mixed"],
  credentialRequirements: [
    { id: "aircall-api-base", label: "Aircall Public API base URL", required: true },
    { id: "aircall-api-access", label: "Aircall API access", required: true },
    { id: "aircall-routing", label: "Aircall number/team/routing configuration", required: false },
  ],
  coverage: {
    scope: "support-workflow-subset",
    notes: ["aircall-everywhere is a maintained Workspace iframe SDK, not a server-side Public API client; this package keeps only configured-path support workflow calls."],
    evidence: [
      { label: "Aircall API References", url: "https://developer.aircall.io/api-references/" },
      { label: "Aircall Everywhere SDK", url: "https://github.com/aircall/aircall-everywhere" },
    ],
  },
  capabilities: [
    { capability: "handoff", providerObjects: [{ kind: "contactTransfer", label: "contactTransfer" }], requiresCredential: true, sideEffect: true, exposesSensitiveData: true },
  ],
  operations: [
    { alias: "contactCenter.handoff.request", capability: "handoff", providerObject: "contactTransfer" },
  ],
  metadata: {
    implementation: aircallSupportSlice,
    manifestOnlySafe: true,
  },
  maintainers: [{ name: "Cognidesk", type: "official" }],
} as const;

export const aircallProviderManifest = defineIntegrationProviderPackage(aircallProviderManifestInput);
