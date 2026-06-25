import {
  defineIntegrationProviderPackage,
  type ProviderManifestInput,
} from "@cognidesk/integration-kit";

export const ringCentralContactCenterManifestInput = {
  id: "contact-center.ringcentral",
  name: "RingCentral RingCX",
  packageName: "@cognidesk/integration-contact-center-ringcentral",
  provider: "ringcentral",
  category: "contact-center",
  trustLevel: "official",
  directions: ["inbound-only", "outbound-only", "bidirectional"],
  channelAudiences: ["customer-facing", "internal-support", "mixed"],
  credentialRequirements: [
    { id: "ringcentral-api-base", label: "RingCentral API base URL", required: true },
    {
      id: "ringcentral-api-access",
      label: "RingCentral API access",
      description: "RingCentral SDK OAuth access or an injected SDK platform client.",
      required: true,
      metadata: {
        scopeKind: "mixed-auth-mode",
        privilegeGuidance: "RingCX deployments may still require product-specific permissions beyond RingCentral OAuth token possession.",
      },
    },
    { id: "ringcentral-ringcx-routing", label: "RingCX handoff/readiness routing configuration", required: false },
  ],
  coverage: {
    scope: "support-workflow-subset",
    notes: [
      "Runtime uses @ringcentral/sdk for authentication and SDK-dispatched contact-center operations.",
      "The official SDK does not currently prove typed coverage for every current RingCX Voice and Engage Digital OpenAPI operation.",
      "Normalized Cognidesk coverage is limited to SDK-configured handoff/readiness through an injected SDK-backed client.",
      "Provider-package-local reviewed RingCX slices can be added later for operations not covered cleanly by @ringcentral/sdk.",
    ],
    evidence: [
      { label: "RingCentral JavaScript SDK", url: "https://github.com/ringcentral/ringcentral-js" },
      { label: "RingCX Voice APIs", url: "https://developers.ringcentral.com/engage-voice-api" },
      { label: "RingCX Digital APIs", url: "https://developers.ringcentral.com/engage-digital-api" },
    ],
  },
  capabilities: [
    {
      capability: "handoff",
      label: "Create RingCX handoff",
      providerObjects: [{ kind: "ringcxHandoff", label: "RingCX Handoff" }],
      requiresCredential: true,
      sideEffect: true,
      exposesSensitiveData: true,
      changesWorkflow: true,
    },
    {
      capability: "read-provider-object",
      label: "Check RingCentral readiness",
      providerObjects: [{ kind: "ringcentralReadiness", label: "RingCentral Readiness" }],
      requiresCredential: true,
      exposesSensitiveData: true,
    },
  ],
  operations: [
    {
      alias: "contact-center.handoff.request",
      capability: "handoff",
      providerOperation: "sdk-client-handoff-create",
      providerObject: "contactTransfer",
      sideEffect: true,
      exposesSensitiveData: true,
      changesWorkflow: true,
    },
    {
      alias: "contact-center.handoff.status.read",
      capability: "handoff",
      providerOperation: "sdk-client-readiness-read",
      providerObject: "contactTransfer",
      exposesSensitiveData: true,
    },
  ],
  privacyNotes: [
    "RingCX handoffs can include customer identifiers, queue/campaign metadata, and conversation summaries.",
    "RingCentral OAuth credentials stay inside the SDK user's runtime configuration.",
  ],
  limitations: [
    "RingCX API product, regional endpoint, queue/campaign IDs, and outbound eligibility are SDK-user configuration.",
    "Legacy RingCX Voice APIs, product-private endpoints, Channel SDK runtime, web/mobile widgets, and broader RingCentral platform APIs remain separate surfaces.",
  ],
  metadata: {
    implementation: {
      strategy: "official-sdk-backed-client-plus-reviewed-slices",
      sdkPackage: "@ringcentral/sdk",
      sdkPackages: ["@ringcentral/sdk"],
    },
    channelCoverage: {
      configuredHttpHandoff: "sdk-dispatched",
      configuredReadiness: "sdk-dispatched",
      sdkBackedClient: "injected-client",
      currentVoiceRestApiOperations: "provider-supported-not-typed",
      digitalRestApiOperations: "provider-supported-not-typed",
      channelSdkMessaging: "provider-supported-sdk-runtime-not-typed",
    },
  },
  maintainers: [{ name: "Cognidesk", type: "official" }],
} as const satisfies ProviderManifestInput;

export const ringCentralContactCenterManifest = defineIntegrationProviderPackage(ringCentralContactCenterManifestInput);
