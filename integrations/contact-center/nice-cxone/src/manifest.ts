import { defineIntegrationProviderPackage } from "@cognidesk/integration-kit";

export const niceCxoneRestSupportSlice = {
  implementationStrategy: "provider-rest-adapter",
  adapterKind: "no-official-sdk-rest-adapter",
  sdkDecision: "Maintained NICE @nice-devone SDKs exist but are UNLICENSED and focus on agent/browser/digital surfaces; this package provides a built-in REST adapter with providerClient override.",
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
      "Maintained NICE @nice-devone SDKs exist but are UNLICENSED and focus on agent/browser/digital surfaces.",
      "Runtime calls use a built-in REST adapter when baseUrl/API credentials are supplied, with NiceCxoneProviderClient available as an override.",
    ],
    evidence: [
      { label: "NICE CXone REST APIs", url: "https://developer.niceincontact.com/API" },
      { label: "NICE CXone Agent SDK", url: "https://github.com/nice-devone/nice-cxone-agent-sdk" },
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
    implementation: niceCxoneRestSupportSlice,
    manifestOnlySafe: true,
    providerRestAdapter: {
      strategy: "provider-rest-adapter",
      adapterKind: "no-official-sdk-rest-adapter",
      providerClientOverride: "NiceCxoneProviderClient",
    },
  },
  maintainers: [{ name: "Cognidesk", type: "official" }],
} as const;

export const niceCxoneProviderManifest = defineIntegrationProviderPackage(niceCxoneProviderManifestInput);
