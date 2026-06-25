import { defineIntegrationProviderPackage } from "@cognidesk/integration-kit";

export const talkdeskProviderSdkDecision = {
  "checkedAt": "2026-06-25",
  "result": "no-official-npm-rest-sdk",
  "defaultRestPolicy": "fail-closed-provider-rest-adapter-with-typed-provider-client-override",
  "typedClientOverride": "TalkdeskProviderClient",
  "checkedPackages": [
    {
      "package": "@talkdesk/td-sdk",
      "result": "not-published",
      "reason": "No public npm package exists under this likely official SDK name."
    },
    {
      "package": "@talkdesk/client-sdk",
      "result": "not-published",
      "reason": "No public npm package exists under this likely official SDK name."
    },
    {
      "package": "@talkdesk/app-connect",
      "result": "not-published",
      "reason": "No public npm package exists under this likely official SDK name."
    }
  ]
} as const;

export const talkdeskSupportSlice = {
  implementationStrategy: "provider-rest-adapter",
  adapterKind: "no-official-sdk-rest-adapter",
  providerSdkDecision: talkdeskProviderSdkDecision,
  sdkDecision: "No suitable official npm REST SDK was verified; this package provides a built-in REST adapter with providerClient override.",
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
      id: "calls-callback-post",
      alias: "contact-center.callback.schedule",
      method: "POST",
      path: "/calls/callback",
      source: "https://api-docs.talkdeskapp.com/public-api",
      checksum: "sha256:aa27c72eff1b281fdebab70da85cb4cd30f98c37dd0465207f7bab00438be491",
    },
    {
      id: "CreatingACase",
      alias: "contact-center.task.create",
      method: "POST",
      path: "/cm/core/va/cases",
      source: "https://api-docs.talkdeskapp.com/public-api",
      checksum: "sha256:aa27c72eff1b281fdebab70da85cb4cd30f98c37dd0465207f7bab00438be491",
    },
  ],
} as const;

export const talkdeskProviderManifestInput = {
  id: "contact-center.talkdesk",
  name: "Talkdesk",
  packageName: "@cognidesk/integration-contact-center-talkdesk",
  provider: "talkdesk",
  category: "contact-center",
  trustLevel: "official",
  directions: ["inbound-only", "outbound-only", "bidirectional"],
  channelAudiences: ["customer-facing", "internal-support", "mixed"],
  credentialRequirements: [
    { id: "talkdesk-api-root", label: "Talkdesk localized API root", required: true },
    { id: "talkdesk-api-access", label: "Talkdesk OAuth access", required: true },
    { id: "talkdesk-routing", label: "Talkdesk callback/case routing configuration", required: false },
  ],
  coverage: {
    scope: "support-workflow-subset",
    notes: [
      "No suitable official npm REST SDK was verified.",
      "Runtime calls use a built-in REST adapter when baseUrl/API credentials are supplied, with TalkdeskProviderClient available as an override.",
    ],
    evidence: [
      { label: "Talkdesk public OpenAPI bundle", url: "https://api-docs.talkdeskapp.com/public-api" },
      { label: "Talkdesk Callback API", url: "https://docs.talkdesk.com/docs/callback-api" },
    ],
  },
  capabilities: [
    { capability: "handoff", providerObjects: [{ kind: "contactTransfer", label: "contactTransfer" }], requiresCredential: true, sideEffect: true, exposesSensitiveData: true },
    { capability: "schedule", providerObjects: [{ kind: "callback", label: "callback" }], requiresCredential: true, sideEffect: true, exposesSensitiveData: true },
    { capability: "create-provider-object", providerObjects: [{ kind: "contact-center-task", label: "Contact Center Task" }], requiresCredential: true, sideEffect: true, exposesSensitiveData: true },
  ],
  operations: [
    { alias: "contact-center.handoff.request", capability: "handoff", providerObject: "contactTransfer" },
    { alias: "contact-center.callback.schedule", capability: "schedule", providerObject: "callback" },
    { alias: "contact-center.task.create", capability: "create-provider-object", providerObject: "contact-center-task" },
  ],
  metadata: {
    providerSdkDecision: talkdeskProviderSdkDecision,
    implementation: talkdeskSupportSlice,
    manifestOnlySafe: true,
    providerRestAdapter: {
      strategy: "provider-rest-adapter",
      adapterKind: "no-official-sdk-rest-adapter",
      providerClientOverride: "TalkdeskProviderClient",
    },
  },
  maintainers: [{ name: "Cognidesk", type: "official" }],
} as const;

export const talkdeskProviderManifest = defineIntegrationProviderPackage(talkdeskProviderManifestInput);
