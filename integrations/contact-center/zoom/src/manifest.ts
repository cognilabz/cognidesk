import {
  defineIntegrationProviderPackage,
  type ProviderManifestInput,
} from "@cognidesk/integration-kit";

export const zoomContactCenterOperationAliases = [
  "contact-center.handoff.request",
  "contact-center.contact.start",
  "contact-center.contact.read",
  "zoom.request",
] as const;

export const zoomContactCenterRestSupportSlice = {
  implementationStrategy: "provider-rest-adapter",
  adapterKind: "no-official-sdk-rest-adapter",
  sdkDecision: "@zoom/appssdk is an embedded Zoom Apps SDK, not a Contact Center server SDK; this package provides a built-in REST adapter with providerClient override.",
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
    {
      id: "Startworkitemengagement",
      alias: "contact-center.contact.start",
      method: "POST",
      path: "/contact_center/engagement",
      source: "https://developers.zoom.us/api-hub/contact-center/methods/endpoints.json",
      checksum: "sha256:56456cf010ca13ab7edefa0212372d191e10192dfd4cd8f0c5ffb50fa5d2c1c7",
    },
    {
      id: "getEngagement",
      alias: "contact-center.contact.read",
      method: "GET",
      path: "/contact_center/engagements/{engagementId}",
      source: "https://developers.zoom.us/api-hub/contact-center/methods/endpoints.json",
      checksum: "sha256:56456cf010ca13ab7edefa0212372d191e10192dfd4cd8f0c5ffb50fa5d2c1c7",
    },
    {
      id: "providerExtensionRequest",
      alias: "zoom.request",
      method: "GET",
      path: "host-configured",
      source: "provider-rest-adapter",
      checksum: "not-applicable-host-configured",
    },
  ],
} as const;

export const zoomContactCenterSupportSlice = zoomContactCenterRestSupportSlice;

export const zoomContactCenterProviderManifestInput = {
  id: "contact-center.zoom",
  name: "Zoom Contact Center",
  packageName: "@cognidesk/integration-contact-center-zoom",
  provider: "zoom",
  category: "contact-center",
  trustLevel: "official",
  directions: ["inbound-only", "outbound-only", "bidirectional"],
  channelAudiences: ["customer-facing", "internal-support", "mixed"],
  credentialRequirements: [
    { id: "zoom-contact-center-api-base", label: "Zoom Contact Center API base URL", required: true },
    { id: "zoom-contact-center-api-access", label: "Zoom OAuth/API access", required: true },
    { id: "zoom-contact-center-routing", label: "Zoom queue/channel routing configuration", required: false },
  ],
  coverage: {
    scope: "support-workflow-subset",
    notes: [
      "@zoom/appssdk is an embedded Zoom Apps SDK, not a Contact Center server SDK.",
      "Runtime calls use a built-in REST adapter when baseUrl/API credentials are supplied, with ZoomContactCenterProviderClient available as an override.",
    ],
    evidence: [
      { label: "Zoom Contact Center REST OpenAPI", url: "https://developers.zoom.us/api-hub/contact-center/methods/endpoints.json" },
      { label: "Zoom Contact Center Webhooks OpenAPI", url: "https://developers.zoom.us/api-hub/contact-center/events/webhooks.json" },
      { label: "Zoom Apps SDK", url: "https://github.com/zoom/appssdk" },
    ],
  },
  capabilities: [
    { capability: "handoff", providerObjects: [{ kind: "contactTransfer", label: "contactTransfer" }], requiresCredential: true, sideEffect: true, exposesSensitiveData: true },
    { capability: "send", providerObjects: [{ kind: "contact", label: "contact" }], requiresCredential: true, sideEffect: true, exposesSensitiveData: true },
    { capability: "read-provider-object", providerObjects: [{ kind: "contact", label: "contact" }], requiresCredential: true, sideEffect: false, exposesSensitiveData: true },
  ],
  operations: [
    { alias: "contact-center.handoff.request", capability: "handoff", providerObject: "contactTransfer" },
    { alias: "contact-center.contact.start", capability: "send", providerObject: "contact" },
    { alias: "contact-center.contact.read", capability: "read-provider-object", providerObject: "contact" },
    { alias: "zoom.request", capability: "read-provider-object", providerObject: "contact", extension: true },
  ],
  metadata: {
    implementation: zoomContactCenterRestSupportSlice,
    manifestOnlySafe: true,
    providerRestAdapter: {
      strategy: "provider-rest-adapter",
      adapterKind: "no-official-sdk-rest-adapter",
      providerClientOverride: "ZoomContactCenterProviderClient",
    },
  },
  maintainers: [{ name: "Cognidesk", type: "official" }],
} as const satisfies ProviderManifestInput;

export const zoomContactCenterProviderManifest = defineIntegrationProviderPackage(zoomContactCenterProviderManifestInput);
