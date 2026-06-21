import { defineIntegrationProviderPackage } from "@cognidesk/integration-kit";

export const zoomContactCenterSupportSlice = {
  implementationStrategy: "generated-support-slice",
  sdkDecision: "@zoom/appssdk is an embedded Zoom Apps SDK, not a Contact Center REST client; this package keeps selected official Contact Center REST/webhook operations.",
  verifiedAt: "2026-06-21",
  allowedOperations: [
  {
    id: "Startworkitemengagement",
    alias: "contactCenter.contact.start",
    method: "POST",
    path: "/contact_center/engagement",
    source: "https://developers.zoom.us/api-hub/contact-center/methods/endpoints.json",
    checksum: "sha256:56456cf010ca13ab7edefa0212372d191e10192dfd4cd8f0c5ffb50fa5d2c1c7"
  },
  {
    id: "getEngagement",
    alias: "contactCenter.contact.read",
    method: "GET",
    path: "/contact_center/engagements/{engagementId}",
    source: "https://developers.zoom.us/api-hub/contact-center/methods/endpoints.json",
    checksum: "sha256:56456cf010ca13ab7edefa0212372d191e10192dfd4cd8f0c5ffb50fa5d2c1c7"
  }
],
} as const;

export const zoomContactCenterProviderManifestInput = {
  id: "contactCenter.zoom",
  name: "Zoom Contact Center",
  packageName: "@cognidesk/contact-center-zoom",
  provider: "zoom",
  category: "contactCenter",
  trustLevel: "official",
  directions: ["inbound-only", "outbound-only", "bidirectional"],
  channelAudiences: ["customer-facing", "internal-support", "mixed"],
  credentialRequirements: [
    { id: "zoom-contact-center-account", label: "Zoom Contact Center account/API base", required: true },
    { id: "zoom-contact-center-api-access", label: "Zoom OAuth access", required: true },
    { id: "zoom-contact-center-routing", label: "Zoom queue/channel routing configuration", required: false },
  ],
  coverage: {
    scope: "support-workflow-subset",
    notes: ["@zoom/appssdk is an embedded Zoom Apps SDK, not a Contact Center REST client; this package keeps selected official Contact Center REST/webhook operations."],
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
    { capability: "read-provider-object", providerObjects: [{ kind: "contact", label: "contact" }], requiresCredential: true, sideEffect: false, exposesSensitiveData: true },
  ],
  operations: [
    { alias: "contactCenter.handoff.request", capability: "handoff", providerObject: "contactTransfer" },
    { alias: "contactCenter.contact.start", capability: "send", providerObject: "contact" },
    { alias: "contactCenter.contact.read", capability: "read-provider-object", providerObject: "contact" },
    { alias: "zoom.request", capability: "read-provider-object", providerObject: "contact", extension: true },
  ],
  metadata: {
    implementation: zoomContactCenterSupportSlice,
    manifestOnlySafe: true,
  },
  maintainers: [{ name: "Cognidesk", type: "official" }],
} as const;

export const zoomContactCenterProviderManifest = defineIntegrationProviderPackage(zoomContactCenterProviderManifestInput);
