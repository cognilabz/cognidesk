import { defineIntegrationProviderPackage } from "@cognidesk/integration-kit";

export const genesysEngageProviderSdkDecision = {
  "checkedAt": "2026-06-25",
  "result": "official-engagement-sdk-for-callbacks-gms-chat-rest-adapter",
  "defaultRestPolicy": "official-engagement-client-sdk-for-callbacks-with-fail-closed-gms-chat-rest-adapter-and-typed-provider-client-override",
  "typedClientOverride": "GenesysEngageProviderClient",
  "checkedPackages": [
    {
      "package": "engagement-client-js",
      "checkedVersion": "9.0.83",
      "license": "MIT",
      "result": "accepted-callback-runtime-sdk",
      "reason": "Official PureEngage Engagement client exposes CallbacksApi.bookCallbackExternal, which backs Cognidesk contact-center.callback.schedule. It does not expose GMS Chat API v2, so chat operations stay on the reviewed REST adapter."
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
  implementationStrategy: "official-sdk-and-provider-rest-adapter",
  adapterKind: "official-engagement-sdk-plus-gms-rest-adapter",
  providerSdkDecision: genesysEngageProviderSdkDecision,
  sdkDecision: "engagement-client-js is used for callback scheduling through CallbacksApi.bookCallbackExternal. GMS Chat API v2 has no matching maintained backend/runtime SDK in the checked packages, so chat operations use the built-in reviewed REST adapter with providerClient override.",
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
      path: "/callback/create",
      source: "engagement-client-js CallbacksApi.bookCallbackExternal",
      sdkPackage: "engagement-client-js",
      sdkMethod: "CallbacksApi.bookCallbackExternal",
      checksum: "provider-sdk-generated-swagger-client",
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
      "Runtime callback scheduling uses the official PureEngage engagement-client-js generated SDK through CallbacksApi.bookCallbackExternal.",
      "No matching maintained backend/runtime SDK was verified for GMS Chat API v2, so chat operations use the reviewed REST adapter.",
      "GenesysEngageProviderClient remains available as a typed host override for tenant-specific surfaces and handoff routing.",
    ],
    evidence: [
      { label: "Genesys GMS Callback Services API", url: "https://docs.genesys.com/Documentation/GMS/latest/API/CallbackServicesAPI" },
      { label: "Genesys GMS Chat API v2", url: "https://docs.genesys.com/Documentation/GMS/latest/API/ChatAPIv2" },
      { label: "PureEngage engagement-client-js", url: "https://www.npmjs.com/package/engagement-client-js" },
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
      strategy: "official-sdk-and-provider-rest-adapter",
      adapterKind: "official-engagement-sdk-plus-gms-rest-adapter",
      providerClientOverride: "GenesysEngageProviderClient",
    },
  },
  maintainers: [{ name: "Cognidesk", type: "official" }],
} as const;

export const genesysEngageProviderManifest = defineIntegrationProviderPackage(genesysEngageProviderManifestInput);
