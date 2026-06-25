import {
  defineIntegrationProviderPackage,
  type ProviderManifestInput,
} from "@cognidesk/integration-kit";

export const zoomContactCenterProviderSdkDecision = {
  "checkedAt": "2026-06-25",
  "result": "no-suitable-contact-center-management-sdk",
  "defaultRestPolicy": "fail-closed-reviewed-contact-center-rest-adapter-with-typed-provider-client-override",
  "typedClientOverride": "ZoomContactCenterProviderClient",
  "checkedPackages": [
    {
      "package": "@zoom/rivet",
      "checkedVersion": "0.4.0",
      "license": "SEE LICENSE IN LICENSE.md",
      "result": "server-sdk-without-contact-center-management-namespace",
      "reason": "Official server-side API wrapper exports meetings/users/phone/etc., but no contact-center export or /contact_center engagement endpoints for this package surface."
    },
    {
      "package": "@zoom/appssdk",
      "checkedVersion": "0.16.38",
      "license": "MIT",
      "result": "embedded-zoom-apps-sdk-not-contact-center-management-client",
      "reason": "Browser Zoom Apps SDK, not server-side Contact Center management API client."
    },
    {
      "package": "@zoom/rtms",
      "checkedVersion": "1.1.0",
      "license": "MIT",
      "result": "media-streaming-sdk-not-contact-center-management-client",
      "reason": "Node wrapper for Zoom RTMS media streaming C SDK, not Contact Center REST management operations."
    },
    {
      "package": "@zoom/contact-center",
      "result": "not-published",
      "reason": "No public npm package exists under this likely official Contact Center SDK name."
    }
  ]
} as const;

export const zoomContactCenterOperationAliases = [
  "contact-center.handoff.request",
  "contact-center.contact.start",
  "contact-center.contact.read",
  "zoom.request",
] as const;

export const zoomContactCenterRestSupportSlice = {
  implementationStrategy: "provider-rest-adapter",
  adapterKind: "no-official-sdk-rest-adapter",
  providerSdkDecision: zoomContactCenterProviderSdkDecision,
  sdkDecision: "No maintained official server-side JavaScript SDK was verified for Zoom Contact Center management APIs; @zoom/appssdk is embedded Zoom Apps and @zoom/rtms is media-streaming, so this package uses reviewed REST operations with a providerClient host exception.",
  verifiedAt: "2026-06-25",
  runtimePolicy: {
    defaultClient: "built-in-provider-rest-adapter",
    reviewedRestOperations: ["Startworkitemengagement", "getEngagement"],
    extensionRequests: "built-in REST rejects unreviewed paths; injected providerClient.request may handle host-reviewed extensions after method and mutation-policy validation",
    failClosed: true,
    requestOptions: ["baseUrl", "accessToken", "authorizationHeader", "apiKey", "apiKeyHeaderName", "fetch", "signal", "timeoutMs", "retry"],
  },
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
      checksum: "sha256:3a3127360fbe7ef88d7398e62795b502fb1f3b2ebc507b3fbf0d3ba6645a963b",
    },
    {
      id: "getEngagement",
      alias: "contact-center.contact.read",
      method: "GET",
      path: "/contact_center/engagements/{engagementId}",
      source: "https://developers.zoom.us/api-hub/contact-center/methods/endpoints.json",
      checksum: "sha256:3a3127360fbe7ef88d7398e62795b502fb1f3b2ebc507b3fbf0d3ba6645a963b",
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
      "No maintained official server-side JavaScript SDK was verified for Zoom Contact Center management APIs.",
      "@zoom/appssdk is an embedded Zoom Apps SDK, @zoom/rtms is media-streaming, and the Contact Center SDK is a browser/client integration surface.",
      "Runtime calls use a built-in REST adapter for reviewed operation IDs only, with ZoomContactCenterProviderClient.request available as a host-client exception.",
    ],
    evidence: [
      { label: "Zoom Contact Center REST OpenAPI", url: "https://developers.zoom.us/api-hub/contact-center/methods/endpoints.json" },
      { label: "Zoom Contact Center Webhooks OpenAPI", url: "https://developers.zoom.us/api-hub/contact-center/events/webhooks.json" },
      { label: "Zoom Contact Center SDK for web", url: "https://developers.zoom.us/docs/contact-center/web/get-started/" },
      { label: "Zoom Apps SDK", url: "https://github.com/zoom/appssdk" },
      { label: "Zoom RTMS SDK", url: "https://github.com/zoom/rtms" },
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
    providerSdkDecision: zoomContactCenterProviderSdkDecision,
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
