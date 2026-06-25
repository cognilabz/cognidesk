import { defineIntegrationProviderPackage } from "@cognidesk/integration-kit";

export const niceCxoneProviderSdkDecision = {
  "checkedAt": "2026-06-25",
  "result": "no-redistributable-server-side-cxone-sdk",
  "defaultRestPolicy": "fail-closed-provider-rest-adapter-with-typed-provider-client-override",
  "typedClientOverride": "NiceCxoneProviderClient",
  "checkedPackages": [
    {
      "package": "@nice-devone/acd-sdk",
      "checkedVersion": "26.2.1",
      "license": "UNLICENSED",
      "result": "official-sdk-not-redistributable-server-rest-client",
      "reason": "Closest ACD package is unlicensed and documented for CXone Agent/app-bundler use rather than a redistributable server-side REST client."
    },
    {
      "package": "@nice-devone/agent-sdk",
      "checkedVersion": "26.2.1",
      "license": "UNLICENSED",
      "result": "agent-app-sdk-not-server-rest-client",
      "reason": "Agent SDK is unlicensed and coupled to CXone Agent/browser app runtime."
    },
    {
      "package": "@nice-devone/nice-cxone-chat-web-sdk",
      "checkedVersion": "3.3.0",
      "license": "UNLICENSED",
      "result": "browser-dfo-chat-sdk-not-contact-center-server-client",
      "reason": "Web SDK targets browser DFO chat rather than package-owned Contact Center server operations."
    }
  ]
} as const;

export const niceCxoneRestSupportSlice = {
  implementationStrategy: "provider-rest-adapter",
  adapterKind: "no-official-sdk-rest-adapter",
  providerSdkDecision: niceCxoneProviderSdkDecision,
  sdkDecision: "Maintained NICE @nice-devone SDK packages exist, but the closest ACD runtime package is UNLICENSED and designed for CXone Agent/app-bundler use rather than a redistributable server-side REST client; this package provides a fail-closed built-in REST adapter with providerClient override.",
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
      id: "scheduleACallback",
      alias: "contact-center.callback.schedule",
      method: "POST",
      path: "/promise",
      source: "https://developer.niceincontact.com/content/apis/patron/patron-callback-api-docs",
      checksum: "sha256:076fb5602cd1e76f13d38bb2172547e9d2f91877447c3088ff14e849bac2099a-local-generated-operation-catalog",
    },
    {
      id: "startChatSession",
      alias: "contact-center.contact.start",
      method: "POST",
      path: "/contacts/chats",
      source: "https://developer.niceincontact.com/content/apis/patron/patron-chatrequests-api-docs",
      checksum: "sha256:076fb5602cd1e76f13d38bb2172547e9d2f91877447c3088ff14e849bac2099a-local-generated-operation-catalog",
    },
    {
      id: "endChat",
      alias: "contact-center.contact.end",
      method: "DELETE",
      path: "/contacts/chats/{chatSession}",
      source: "https://developer.niceincontact.com/content/apis/patron/patron-chatrequests-api-docs",
      checksum: "sha256:076fb5602cd1e76f13d38bb2172547e9d2f91877447c3088ff14e849bac2099a-local-generated-operation-catalog",
    },
    {
      id: "providerExtensionRequest",
      alias: "nice-cxone.request",
      method: "GET",
      path: "host-configured",
      source: "provider-rest-adapter",
      checksum: "not-applicable-host-configured",
    },
  ],
} as const;

export const niceCxoneSupportSlice = niceCxoneRestSupportSlice;

export const niceCxoneProviderManifestInput = {
  id: "contact-center.nice-cxone",
  name: "NICE CXone",
  packageName: "@cognidesk/integration-contact-center-nice-cxone",
  provider: "nice-cxone",
  category: "contact-center",
  trustLevel: "official",
  directions: ["inbound-only", "outbound-only", "bidirectional"],
  channelAudiences: ["customer-facing", "internal-support", "mixed"],
  credentialRequirements: [
    { id: "nice-cxone-api-base", label: "NICE CXone API base URL", required: true },
    { id: "nice-cxone-api-access", label: "NICE CXone API access", required: true },
    { id: "nice-cxone-routing", label: "NICE CXone skill/queue routing configuration", required: false },
  ],
  coverage: {
    scope: "support-workflow-subset",
    notes: [
      "Maintained NICE @nice-devone SDK packages exist, but the closest ACD runtime package is UNLICENSED and documented for CXone Agent/app-bundler use.",
      "Runtime calls use a fail-closed built-in REST adapter when baseUrl/API credentials are supplied, with NiceCxoneProviderClient available as a typed host override.",
    ],
    evidence: [
      { label: "NICE CXone REST APIs", url: "https://developer.niceincontact.com/API" },
      { label: "NICE CXone ACD SDK package", url: "https://www.npmjs.com/package/@nice-devone/acd-sdk" },
      { label: "NICE CXone Agent SDK repository", url: "https://github.com/nice-devone/nice-cxone-agent-sdk" },
    ],
  },
  capabilities: [
    { capability: "handoff", providerObjects: [{ kind: "contactTransfer", label: "contactTransfer" }], requiresCredential: true, sideEffect: true, exposesSensitiveData: true },
    { capability: "schedule", providerObjects: [{ kind: "callback", label: "callback" }], requiresCredential: true, sideEffect: true, exposesSensitiveData: true },
    { capability: "send", providerObjects: [{ kind: "contact", label: "contact" }], requiresCredential: true, sideEffect: true, exposesSensitiveData: true },
    { capability: "update-provider-object", providerObjects: [{ kind: "contact", label: "contact" }], requiresCredential: true, sideEffect: true, exposesSensitiveData: true },
    { capability: "read-provider-object", providerObjects: [{ kind: "contact", label: "contact" }], requiresCredential: true, sideEffect: false, exposesSensitiveData: true },
  ],
  operations: [
    { alias: "contact-center.handoff.request", capability: "handoff", providerObject: "contactTransfer" },
    { alias: "contact-center.callback.schedule", capability: "schedule", providerObject: "callback" },
    { alias: "contact-center.contact.start", capability: "send", providerObject: "contact" },
    { alias: "contact-center.contact.end", capability: "update-provider-object", providerObject: "contact" },
    { alias: "nice-cxone.request", capability: "read-provider-object", providerObject: "contact", extension: true },
  ],
  metadata: {
    providerSdkDecision: niceCxoneProviderSdkDecision,
    implementation: niceCxoneRestSupportSlice,
    manifestOnlySafe: true,
    sdkDecision: {
      checkedAt: "2026-06-25",
      package: "@nice-devone/acd-sdk",
      checkedVersion: "26.2.1",
      license: "UNLICENSED",
      result: "official-sdk-not-redistributable-server-rest-client",
      reason: "@nice-devone/acd-sdk is the closest NICE CXone ACD npm package, but it is published as UNLICENSED and documented for CXone Agent/app-bundler use with browser and agent SDK dependencies.",
    },
    providerRestAdapter: {
      strategy: "provider-rest-adapter",
      adapterKind: "no-official-sdk-rest-adapter",
      providerClientOverride: "NiceCxoneProviderClient",
      packageOwnedRestClient: true,
      hostClientOverride: true,
      hostClientEscapeHatch: "NiceCxoneClient.providerClient",
      failureMode: "fail-closed",
      reviewedOperationAllowlist: true,
    },
  },
  maintainers: [{ name: "Cognidesk", type: "official" }],
} as const;

export const niceCxoneProviderManifest = defineIntegrationProviderPackage(niceCxoneProviderManifestInput);
