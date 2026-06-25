import { defineIntegrationProviderPackage } from "@cognidesk/integration-kit";

export const genesysEngageProviderSdkDecision = {
  "checkedAt": "2026-06-25",
  "result": "no-suitable-genesys-engage-gms-runtime-sdk",
  "defaultRestPolicy": "fail-closed-gms-rest-adapter-with-typed-provider-client-override",
  "typedClientOverride": "GenesysEngageProviderClient",
  "checkedPackages": [
    {
      "package": "engagement-client-js",
      "checkedVersion": "9.0.83",
      "license": "MIT",
      "result": "pureengage-engagement-api-not-gms-chat-callback-client",
      "reason": "Official PureEngage Engagement client is a different API surface and does not expose the package-owned GMS Chat API v2 or Callback Services operations."
    },
    {
      "package": "genesys-workspace-client-js",
      "checkedVersion": "9.0.95",
      "license": "MIT",
      "result": "workspace-web-edition-api-not-gms-runtime-client",
      "reason": "Workspace Web Edition client targets workspace voice/call controls rather than GMS Chat API v2 and GMS callback endpoints."
    },
    {
      "package": "purecloud-platform-client-v2",
      "checkedVersion": "255.1.0",
      "license": "MIT",
      "result": "genesys-cloud-sdk-not-genesys-engage-gms",
      "reason": "Maintained SDK targets Genesys Cloud Platform APIs, not Genesys Engage GMS Chat/Callback endpoints."
    }
  ]
} as const;

export const genesysEngageRestSupportSlice = {
  implementationStrategy: "provider-rest-adapter",
  adapterKind: "no-official-sdk-rest-adapter",
  providerSdkDecision: genesysEngageProviderSdkDecision,
  sdkDecision: "No suitable maintained backend/runtime JavaScript SDK was verified for GMS Chat API v2 or Callback Services; Genesys Cloud and PureEngage Engagement SDKs target different APIs, so this package provides a built-in REST adapter with providerClient override.",
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
      id: "createCallback",
      alias: "contact-center.callback.schedule",
      method: "POST",
      path: "/genesys/1/service/callback/{serviceName}",
      source: "https://docs.genesys.com/Documentation/GMS/latest/API/CallbackServicesAPI",
      checksum: "not-available-html-doc",
    },
    {
      id: "requestChat",
      alias: "contact-center.contact.start",
      method: "POST",
      path: "/genesys/2/chat/{serviceName}",
      source: "https://docs.genesys.com/Documentation/GMS/latest/API/ChatAPIv2",
      checksum: "not-available-html-doc",
    },
    {
      id: "sendChatMessage",
      alias: "genesys-engage.chat.send",
      method: "POST",
      path: "/genesys/2/chat/{serviceName}/{chatId}/send",
      source: "https://docs.genesys.com/Documentation/GMS/latest/API/ChatAPIv2",
      checksum: "not-available-html-doc",
    },
    {
      id: "providerExtensionRequest",
      alias: "genesys-engage.gms.request",
      method: "GET",
      path: "host-configured",
      source: "provider-rest-adapter",
      checksum: "not-applicable-host-configured",
    },
  ],
} as const;

export const genesysEngageSupportSlice = genesysEngageRestSupportSlice;

export const genesysEngageProviderManifestInput = {
  id: "contact-center.genesys-engage",
  name: "Genesys Engage / GMS",
  packageName: "@cognidesk/integration-contact-center-genesys-engage",
  provider: "genesys-engage",
  category: "contact-center",
  trustLevel: "official",
  directions: ["inbound-only", "outbound-only", "bidirectional"],
  channelAudiences: ["customer-facing", "internal-support", "mixed"],
  credentialRequirements: [
    { id: "genesys-engage-gms-base-url", label: "Genesys Mobile Services base URL", required: true },
    { id: "genesys-engage-auth", label: "Genesys Engage/GMS authentication", required: false },
    { id: "genesys-engage-routing", label: "Genesys Engage callback, chat, and routing configuration", required: false },
  ],
  coverage: {
    scope: "support-workflow-subset",
    notes: [
      "No suitable maintained backend/runtime JavaScript SDK was verified for GMS Chat API v2 or Callback Services.",
      "The maintained Genesys Cloud Platform SDK targets Genesys Cloud, while the PureEngage Engagement Node client targets the Engagement API surface rather than GMS Chat API v2 or GMS Callback Services.",
      "Runtime calls use a built-in REST adapter when baseUrl/API credentials are supplied, with GenesysEngageProviderClient available as an override.",
    ],
    evidence: [
      { label: "Genesys GMS Callback Services API", url: "https://docs.genesys.com/Documentation/GMS/latest/API/CallbackServicesAPI" },
      { label: "Genesys GMS Chat API v2", url: "https://docs.genesys.com/Documentation/GMS/latest/API/ChatAPIv2" },
      { label: "Genesys Cloud Platform SDK for JavaScript", url: "https://github.com/MyPureCloud/platform-client-sdk-javascript" },
      { label: "PureEngage Engagement Client Library", url: "https://developer.genesyscloud.com/client-libraries/engagement/js/index.html" },
    ],
  },
  capabilities: [
    { capability: "handoff", providerObjects: [{ kind: "contactTransfer", label: "contactTransfer" }], requiresCredential: true, sideEffect: true, exposesSensitiveData: true },
    { capability: "schedule", providerObjects: [{ kind: "callback", label: "callback" }], requiresCredential: true, sideEffect: true, exposesSensitiveData: true },
    { capability: "send", providerObjects: [{ kind: "contact", label: "contact" }], requiresCredential: true, sideEffect: true, exposesSensitiveData: true },
    { capability: "read-provider-object", providerObjects: [{ kind: "contact", label: "contact" }], requiresCredential: true, sideEffect: false, exposesSensitiveData: true },
  ],
  operations: [
    { alias: "contact-center.handoff.request", capability: "handoff", providerObject: "contactTransfer" },
    { alias: "contact-center.callback.schedule", capability: "schedule", providerObject: "callback" },
    { alias: "contact-center.contact.start", capability: "send", providerObject: "contact" },
    { alias: "genesys-engage.chat.send", capability: "send", providerObject: "contact", extension: true },
    { alias: "genesys-engage.gms.request", capability: "read-provider-object", providerObject: "contact", extension: true },
  ],
  metadata: {
    providerSdkDecision: genesysEngageProviderSdkDecision,
    implementation: genesysEngageRestSupportSlice,
    manifestOnlySafe: true,
    providerRestAdapter: {
      strategy: "provider-rest-adapter",
      adapterKind: "no-official-sdk-rest-adapter",
      providerClientOverride: "GenesysEngageProviderClient",
    },
  },
  maintainers: [{ name: "Cognidesk", type: "official" }],
} as const;

export const genesysEngageProviderManifest = defineIntegrationProviderPackage(genesysEngageProviderManifestInput);
