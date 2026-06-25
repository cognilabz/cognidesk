import { defineIntegrationProviderPackage } from "@cognidesk/integration-kit";

export const five9ProviderSdkDecision = {
  "checkedAt": "2026-06-25",
  "result": "no-suitable-official-server-side-sdk",
  "defaultRestPolicy": "fail-closed-configured-rest-adapter-with-typed-provider-client-override",
  "typedClientOverride": "Five9ProviderClient",
  "checkedPackages": [
    {
      "package": "five9",
      "checkedVersion": "0.1.3",
      "result": "third-party-stale-node-module",
      "reason": "Third-party package last published years ago, not an official maintained Five9 runtime SDK."
    },
    {
      "package": "uniphore-five9-messaging-api-client-library",
      "checkedVersion": "7.2.0",
      "license": "ISC",
      "result": "third-party-messaging-specific-client",
      "reason": "Uniphore-maintained messaging client, not an official Five9 contact-center runtime SDK for the declared handoff surface."
    },
    {
      "package": "Five9 CRM SDK",
      "result": "browser-agent-desktop-cdn-sdk-not-node-runtime",
      "reason": "Five9 JavaScript CRM SDK is loaded from Five9 CDN for browser pages integrated with Agent Desktop Toolkit."
    }
  ]
} as const;

export const five9CheckedProviderSdk = {
  checkedAt: "2026-06-25",
  verdict: "no-official-sdk-rest-adapter",
  officialRuntimeSdkAvailable: false,
  candidates: [
    {
      package: "five9",
      checkedVersion: "0.1.3",
      result: "third-party-stale",
      reason: "The npm package is a third-party Node module last published in 2017, not an official maintained Five9 backend SDK.",
      source: "https://www.npmjs.com/package/five9",
    },
    {
      package: "uniphore-five9-messaging-api-client-library",
      checkedVersion: "7.2.0",
      result: "third-party-messaging-specific",
      reason: "The npm package is maintained by Uniphore and targets a messaging API client surface rather than an official Five9 contact-center runtime SDK.",
      source: "https://www.npmjs.com/package/uniphore-five9-messaging-api-client-library",
    },
    {
      package: "Five9 CRM SDK",
      result: "not-backend-runtime-sdk",
      reason: "Five9's JavaScript CRM SDK is loaded from Five9's CDN and integrates browser pages with Agent Desktop Toolkit through window.Five9.CrmSdk.",
      source: "https://cdn.prod.us.five9.net/stable/crm-sdk-lib/doc/index.html",
    },
  ],
} as const;

export const five9RestSupportSlice = {
  implementationStrategy: "provider-rest-adapter",
  adapterKind: "no-official-sdk-rest-adapter",
  providerSdkDecision: five9ProviderSdkDecision,
  sdkDecision: "No suitable official backend JavaScript/TypeScript SDK was verified; five9@0.1.3 is third-party and stale, Uniphore's package is third-party and messaging-specific, and Five9 CRM SDK is browser/ADT-oriented.",
  verifiedAt: "2026-06-25",
  providerClientInterface: "Five9ProviderClient",
  defaultClientPolicy: "configured-rest-default-with-host-client-override",
  officialRuntimeSdkAvailable: false,
  failClosedWithoutHostConfig: true,
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

export const five9ProviderManifestInput = {
  id: "contact-center.five9",
  name: "Five9",
  packageName: "@cognidesk/integration-contact-center-five9",
  provider: "five9",
  category: "contact-center",
  trustLevel: "official",
  directions: ["inbound-only", "outbound-only", "bidirectional"],
  channelAudiences: ["customer-facing", "internal-support", "mixed"],
  credentialRequirements: [
    { id: "five9-api-base", label: "Five9 API base URL", required: true },
    { id: "five9-api-access", label: "Five9 API access", required: true },
    { id: "five9-routing", label: "Five9 skill/campaign routing configuration", required: false },
  ],
  coverage: {
    scope: "support-workflow-subset",
    notes: [
      "No suitable official backend JavaScript/TypeScript SDK was verified.",
      "Runtime calls use a built-in REST adapter only when baseUrl/API credentials and host-configured operation paths are supplied, with Five9ProviderClient available as a typed host-client override.",
    ],
    evidence: [
      { label: "Five9 Contact Center APIs and SDKs", url: "https://www.five9.com/products/capabilities/call-center-apis-and-sdks" },
      { label: "Five9 CRM SDK JSDoc", url: "https://cdn.prod.us.five9.net/stable/crm-sdk-lib/doc/index.html" },
      { label: "npm five9 package", url: "https://www.npmjs.com/package/five9" },
    ],
  },
  capabilities: [
    { capability: "handoff", providerObjects: [{ kind: "contactTransfer", label: "contactTransfer" }], requiresCredential: true, sideEffect: true, exposesSensitiveData: true },
  ],
  operations: [
    { alias: "contact-center.handoff.request", capability: "handoff", providerObject: "contactTransfer" },
  ],
  metadata: {
    providerSdkDecision: five9ProviderSdkDecision,
    implementation: five9RestSupportSlice,
    manifestOnlySafe: true,
    providerClient: {
      package: "built-in-provider-rest-adapter",
      interface: "Five9ProviderClient",
      rawClientAlias: "Five9RawClient",
      importPolicy: "runtime-entrypoint-only",
      defaultClientPolicy: "configured-rest-default-with-host-client-override",
      sdkDecision: {
        checkedAt: "2026-06-25",
        result: "no-official-sdk-rest-adapter",
      },
    },
    providerRestAdapter: {
      strategy: "provider-rest-adapter",
      adapterKind: "no-official-sdk-rest-adapter",
      providerClientOverride: "Five9ProviderClient",
      rawClientOverride: "Five9RawClient",
      defaultClientPolicy: "configured-rest-default-with-host-client-override",
      failClosedWithoutBaseUrl: true,
      failClosedWithoutConfiguredPath: true,
    },
    providerRestAdapterException: {
      status: "accepted",
      reviewedAt: "2026-06-25",
      adapterKind: "no-official-sdk-rest-adapter",
      reason: "No maintained official Five9 Node/TypeScript backend runtime SDK was verified for the declared contact-center handoff workflow; documented Five9 JavaScript SDK surfaces are browser/ADT-oriented.",
      allowedDefaultRuntime: "built-in-rest-adapter",
      hostSdkPath: "Five9ProviderClient",
      failClosed: true,
      guardrails: [
        "Keep Five9 calls behind Five9ProviderClient or the built-in REST adapter until an official maintained Node/TypeScript Five9 runtime SDK exists.",
        "Require baseUrl and host-configured operation paths before the built-in REST adapter can call fetch.",
        "If an official maintained runtime SDK is adopted later, switch implementationStrategy away from provider-rest-adapter and declare cognidesk.providerSdkDependencies.",
      ],
    },
    checkedProviderSdk: five9CheckedProviderSdk,
  },
  maintainers: [{ name: "Cognidesk", type: "official" }],
} as const;

export const five9ProviderManifest = defineIntegrationProviderPackage(five9ProviderManifestInput);
