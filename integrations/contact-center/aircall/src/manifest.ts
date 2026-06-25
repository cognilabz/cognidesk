import {
  defineIntegrationProviderPackage,
  type ProviderManifestInput,
} from "@cognidesk/integration-kit";

export const aircallProviderSdkDecision = {
  "checkedAt": "2026-06-25",
  "result": "no-suitable-server-side-public-api-sdk",
  "defaultRestPolicy": "fail-closed-aircall-public-api-rest-adapter-with-typed-raw-client-override",
  "typedClientOverride": "AircallRawClient",
  "checkedPackages": [
    {
      "package": "aircall-everywhere",
      "checkedVersion": "2.0.6",
      "license": "ISC",
      "result": "browser-workspace-iframe-sdk-not-public-api-client",
      "reason": "Maintained official package embeds and communicates with Aircall Workspace in a browser; it does not expose server-side Public API transfer operations."
    }
  ]
} as const;

export const aircallOperationAliases = [
  "contact-center.handoff.request",
] as const;

export const aircallRestSupportSlice = {
  implementationStrategy: "no-official-sdk-rest-adapter",
  adapterKind: "aircall-public-api-rest-adapter",
  providerSdkDecision: aircallProviderSdkDecision,
  sdkDecision: "No maintained official backend/runtime SDK was found. aircall-everywhere is maintained, but it embeds the Workspace iframe in a browser; runtime support uses Aircall Public API REST with a strict rawClient override.",
  verifiedAt: "2026-06-25",
  defaultBaseUrl: "https://api.aircall.io/v1",
  failClosed: "Built-in REST calls require Aircall credentials and documented transfer inputs before fetch; rawClient overrides must implement transferCall().",
  allowedOperations: [
    {
      id: "transferCall",
      alias: "contact-center.handoff.request",
      method: "POST",
      path: "/calls/{callId}/transfers",
      source: "provider-rest-adapter",
      checksum: "aircall-public-api-transfer-call-2026-06-25",
    },
  ],
} as const;

export const aircallSupportSlice = aircallRestSupportSlice;

export const aircallProviderManifestInput = {
  id: "contact-center.aircall",
  name: "Aircall",
  packageName: "@cognidesk/integration-contact-center-aircall",
  provider: "aircall",
  category: "contact-center",
  trustLevel: "official",
  directions: ["inbound-only", "outbound-only", "bidirectional"],
  channelAudiences: ["customer-facing", "internal-support", "mixed"],
  credentialRequirements: [
    { id: "aircall-api-base", label: "Aircall Public API base URL", required: false },
    { id: "aircall-api-access", label: "Aircall OAuth bearer token or Basic authorization header", required: true },
    { id: "aircall-routing", label: "Aircall number/team/routing configuration", required: false },
  ],
  coverage: {
    scope: "support-workflow-subset",
    notes: [
      "aircall-everywhere is a maintained Workspace iframe SDK, not a server-side Public API client.",
      "Runtime calls use Aircall Public API REST for documented call transfer and ping endpoints, with AircallRawClient available as the host-client override.",
    ],
    evidence: [
      { label: "Aircall API References", url: "https://developer.aircall.io/api-references/" },
      { label: "Aircall Everywhere SDK", url: "https://github.com/aircall/aircall-everywhere" },
      { label: "aircall-everywhere npm package", url: "https://www.npmjs.com/package/aircall-everywhere" },
    ],
  },
  capabilities: [
    { capability: "handoff", providerObjects: [{ kind: "callTransfer", label: "Aircall call transfer" }], requiresCredential: true, sideEffect: true, exposesSensitiveData: true },
  ],
  operations: [
    { alias: "contact-center.handoff.request", capability: "handoff", providerObject: "callTransfer" },
  ],
  metadata: {
    providerSdkDecision: aircallProviderSdkDecision,
    implementation: aircallRestSupportSlice,
    manifestOnlySafe: true,
    providerRestAdapter: {
      strategy: "no-official-sdk-rest-adapter",
      adapterKind: "aircall-public-api-rest-adapter",
      defaultBaseUrl: "https://api.aircall.io/v1",
      defaultClientPolicy: "provider-rest-adapter-when-configured",
      failClosed: true,
      rawClientOverride: "AircallRawClient",
    },
  },
  maintainers: [{ name: "Cognidesk", type: "official" }],
} as const satisfies ProviderManifestInput;

export const aircallProviderManifest = defineIntegrationProviderPackage(aircallProviderManifestInput);
