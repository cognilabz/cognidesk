import { defineIntegrationProviderPackage } from "@cognidesk/integration-kit";

export const nextivaProviderSdkDecision = {
  "checkedAt": "2026-06-25",
  "result": "no-suitable-server-side-sdk",
  "defaultRestPolicy": "fail-closed-provider-rest-adapter-with-typed-provider-client-override",
  "typedClientOverride": "NextivaProviderClient",
  "checkedPackages": [
    {
      "package": "ncx-sdk",
      "checkedVersion": "1.5.8",
      "license": "MIT",
      "result": "not-used-as-runtime-rest-client",
      "reason": "Session/frontend-oriented client with broad any-typed services and socket/session initialization, not a strict server-side REST client for Cognidesk handoff operations."
    },
    {
      "package": "ncx-web-sdk",
      "checkedVersion": "0.0.1-dev.6",
      "license": "UNLICENSED",
      "result": "not-used-as-runtime-rest-client",
      "reason": "Dev-tagged browser Web SDK with browser telephony/UI peer surface and no suitable redistributable server-side runtime contract."
    },
    {
      "package": "ncx-react-sdk",
      "checkedVersion": "0.0.1-dev.10",
      "license": "UNLICENSED",
      "result": "not-used-as-runtime-rest-client",
      "reason": "React frontend SDK is not appropriate for this provider runtime package."
    }
  ]
} as const;

export const nextivaSupportSlice = {
  implementationStrategy: "provider-rest-adapter",
  adapterKind: "no-suitable-runtime-sdk-rest-adapter",
  providerSdkDecision: nextivaProviderSdkDecision,
  packageOwnedRestClient: true,
  hostClientOverride: true,
  hostClientEscapeHatch: "NextivaClientOptions.providerClient",
  sdkDecision: {
    checkedAt: "2026-06-25",
    result: "no-suitable-server-side-sdk",
    checkedPackages: [
      {
        package: "ncx-sdk",
        checkedVersion: "1.5.8",
        license: "MIT",
        result: "not-used-as-runtime-rest-client",
        reason: "Public package is a session/frontend-oriented client with broad any-typed WorkitemsService methods and socket/session initialization, not a strict server-side REST client for Cognidesk handoff operations.",
      },
      {
        package: "ncx-web-sdk",
        checkedVersion: "0.0.1-dev.6",
        license: "UNLICENSED",
        result: "not-used-as-runtime-rest-client",
        reason: "Public npm package is a dev-tagged browser Web SDK with peer dependencies for browser telephony/UI runtime and a tiny exported type surface; the scoped package documented by Nextiva was not available on the public npm registry during this check.",
      },
      {
        package: "ncx-react-sdk",
        checkedVersion: "0.0.1-dev.10",
        license: "UNLICENSED",
        result: "not-used-as-runtime-rest-client",
        reason: "React frontend SDK depends on React and NCX core dev packages, so it is not appropriate for this provider runtime package.",
      },
    ],
  },
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
  ],
} as const;

export const nextivaProviderManifestInput = {
  id: "contact-center.nextiva",
  name: "Nextiva Contact Center",
  packageName: "@cognidesk/integration-contact-center-nextiva",
  provider: "nextiva",
  category: "contact-center",
  trustLevel: "official",
  directions: ["inbound-only", "outbound-only", "bidirectional"],
  channelAudiences: ["customer-facing", "internal-support", "mixed"],
  credentialRequirements: [
    { id: "nextiva-contact-center-api-base", label: "Nextiva Contact Center API base URL", required: true },
    { id: "nextiva-contact-center-api-access", label: "Nextiva Contact Center API access", required: true },
    { id: "nextiva-contact-center-routing", label: "Nextiva queue/campaign/routing configuration", required: false },
  ],
  coverage: {
    scope: "support-workflow-subset",
    notes: [
      "No suitable public server-side Nextiva JavaScript SDK was verified for this provider runtime.",
      "Runtime calls use a strict typed REST adapter when baseUrl/API credentials are supplied, with NextivaProviderClient available as a host-client override.",
      "Nextiva's current SDK documentation describes frontend SDKs; public npm packages checked for NCX were frontend/session-oriented, dev/unlicensed, unavailable under documented scoped names, or too loosely typed for package-owned server runtime calls.",
    ],
    evidence: [
      { label: "Nextiva Contact Center REST APIs", url: "https://www.nextiva.com/resources/learn/rest-apis" },
      { label: "Nextiva WorkItem Service", url: "https://developer.nextiva.com/nextiva/docs/workitem-service" },
      { label: "Nextiva Frontend SDKs", url: "https://developer.nextiva.com/nextiva/docs/overview-of-sdks" },
      { label: "Nextiva SDK Installation", url: "https://developer.nextiva.com/nextiva/docs/sdk-installation" },
      { label: "Nextiva ncx-sdk", url: "https://github.com/Nextiva/ncx-sdk" },
      { label: "Nextiva ncx-web-sdk", url: "https://github.com/Nextiva/ncx-web-sdk" },
    ],
  },
  capabilities: [
    { capability: "handoff", providerObjects: [{ kind: "contactTransfer", label: "contactTransfer" }], requiresCredential: true, sideEffect: true, exposesSensitiveData: true },
    { capability: "read-provider-object", providerObjects: [{ kind: "contact", label: "contact" }], requiresCredential: true, sideEffect: false, exposesSensitiveData: true },
  ],
  operations: [
    { alias: "contact-center.handoff.request", capability: "handoff", providerObject: "contactTransfer" },
    { alias: "nextiva.request", capability: "read-provider-object", providerObject: "contact", extension: true },
  ],
  metadata: {
    providerSdkDecision: nextivaProviderSdkDecision,
    implementation: nextivaSupportSlice,
    manifestOnlySafe: true,
    providerRestAdapter: {
      strategy: "provider-rest-adapter",
      adapterKind: "no-suitable-runtime-sdk-rest-adapter",
      providerClientOverride: "NextivaProviderClient",
      packageOwnedRestClient: true,
      requestValidation: "json-path-query-header-validated",
    },
  },
  maintainers: [{ name: "Cognidesk", type: "official" }],
} as const;

export const nextivaProviderManifest = defineIntegrationProviderPackage(nextivaProviderManifestInput);
