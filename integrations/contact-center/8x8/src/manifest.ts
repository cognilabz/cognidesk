import { defineIntegrationProviderPackage } from "@cognidesk/integration-kit";

export const eightByEightProviderSdkDecision = {
  "checkedAt": "2026-06-25",
  "result": "no-suitable-server-side-contact-center-sdk",
  "defaultRestPolicy": "fail-closed-built-in-rest-adapter-with-typed-raw-client-override",
  "typedClientOverride": "EightByEightRawClient",
  "checkedPackages": [
    {
      "package": "@8x8/pui-partner-comm",
      "checkedVersion": "0.15.0",
      "license": "SEE LICENSE IN LICENSE.md",
      "result": "browser-partner-iframe-sdk-not-contact-center-api-client",
      "reason": "Official package is for 8x8 platform-ui partner iframe communication and does not expose server-side Contact Center REST operations."
    }
  ]
} as const;

export const eightByEightSupportSlice = {
  implementationStrategy: "provider-rest-adapter",
  adapterKind: "no-official-sdk-rest-adapter",
  providerSdkDecision: eightByEightProviderSdkDecision,
  sdkDecision: "No suitable official server-side JavaScript Contact Center SDK was verified. The official @8x8/pui-partner-comm SDK is for iframe partner integrations, so this package provides a fail-closed REST adapter with a rawClient override.",
  verifiedAt: "2026-06-25",
  runtimePolicy: {
    defaultClient: "built-in-provider-rest-adapter",
    override: "createEightByEightClient({ rawClient })",
    requestOptions: ["baseUrl", "accessToken", "authorizationHeader", "apiKey", "apiKeyHeaderName", "fetch", "signal", "timeoutMs", "retry"],
    failClosed: true,
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
      id: "placePhoneCall",
      alias: "contact-center.contact.start",
      method: "POST",
      path: "/tenants/{tenantId}/calls",
      source: "https://raw.githubusercontent.com/8x8Cloud/public-developer-docs/master/docs_oas/actions-events/contact_center_call_api.json",
      checksum: "sha256:87445b35060c46e8e70b23636c77d33a1ff2558eb526aefb45447752132cfe62",
    },
    {
      id: "deletePhoneInteraction",
      alias: "contact-center.contact.end",
      method: "DELETE",
      path: "/tenants/{tenantId}/calls/{interactionId}",
      source: "https://raw.githubusercontent.com/8x8Cloud/public-developer-docs/master/docs_oas/actions-events/contact_center_call_api.json",
      checksum: "sha256:87445b35060c46e8e70b23636c77d33a1ff2558eb526aefb45447752132cfe62",
    },
    {
      id: "setagentstatus",
      alias: "contact-center.agent.status.update",
      method: "PUT",
      path: "/tenants/{tenantId}/agentstatus/agents/{agentId}",
      source: "https://raw.githubusercontent.com/8x8Cloud/public-developer-docs/master/docs_oas/actions-events/contact_center_agent_status_api.json",
      checksum: "sha256:89ba77f48f7a471fb21c34dfb0c7170c1a90b7ea08da8de65981049ade09c2ae",
    },
  ],
} as const;

export const eightByEightProviderManifestInput = {
  id: "contact-center.8x8",
  name: "8x8 Contact Center",
  packageName: "@cognidesk/integration-contact-center-8x8",
  provider: "8x8",
  category: "contact-center",
  trustLevel: "official",
  directions: ["inbound-only", "outbound-only", "bidirectional"],
  channelAudiences: ["customer-facing", "internal-support", "mixed"],
  credentialRequirements: [
    { id: "8x8-contact-center-api-base", label: "8x8 Contact Center API base URL", required: true },
    { id: "8x8-contact-center-api-access", label: "8x8 Contact Center API access", required: true },
    { id: "8x8-contact-center-routing", label: "8x8 queue/campaign routing configuration", required: false },
  ],
  coverage: {
    scope: "support-workflow-subset",
    notes: [
      "No suitable official server-side JavaScript Contact Center SDK was verified.",
      "The official @8x8/pui-partner-comm package is a partner iframe communication SDK, not a backend Contact Center API client.",
      "The runtime constructs a fail-closed built-in REST adapter from baseUrl/API credentials and keeps rawClient available as an override.",
      "OpenAPI operation IDs are retained as the reviewed path allowlist for package-owned REST calls.",
    ],
    evidence: [
      { label: "8x8 Contact Center Call API OpenAPI", url: "https://raw.githubusercontent.com/8x8Cloud/public-developer-docs/master/docs_oas/actions-events/contact_center_call_api.json" },
      { label: "8x8 Contact Center Agent Status OpenAPI", url: "https://raw.githubusercontent.com/8x8Cloud/public-developer-docs/master/docs_oas/actions-events/contact_center_agent_status_api.json" },
      { label: "8x8 Partner SDK", url: "https://developer.8x8.com/tech-partner/docs/partner-sdk-integration-guide" },
    ],
  },
  capabilities: [
    { capability: "handoff", providerObjects: [{ kind: "contactTransfer", label: "contactTransfer" }], requiresCredential: true, sideEffect: true, exposesSensitiveData: true },
    { capability: "send", providerObjects: [{ kind: "contact", label: "contact" }], requiresCredential: true, sideEffect: true, exposesSensitiveData: true },
    { capability: "update-provider-object", providerObjects: [{ kind: "contact", label: "contact" }], requiresCredential: true, sideEffect: true, exposesSensitiveData: true },
    { capability: "update-provider-object", providerObjects: [{ kind: "agent", label: "agent" }], requiresCredential: true, sideEffect: true, exposesSensitiveData: true },
  ],
  operations: [
    { alias: "contact-center.handoff.request", capability: "handoff", providerObject: "contactTransfer" },
    { alias: "contact-center.contact.start", capability: "send", providerObject: "contact" },
    { alias: "contact-center.contact.end", capability: "update-provider-object", providerObject: "contact" },
    { alias: "contact-center.agent.status.update", capability: "update-provider-object", providerObject: "agent" },
  ],
  metadata: {
    providerSdkDecision: eightByEightProviderSdkDecision,
    implementation: eightByEightSupportSlice,
    manifestOnlySafe: true,
    providerRestAdapter: {
      strategy: "provider-rest-adapter",
      adapterKind: "no-official-sdk-rest-adapter",
      rawClientOverride: "EightByEightClient.rawClient",
      failClosed: true,
    },
  },
  maintainers: [{ name: "Cognidesk", type: "official" }],
} as const;

export const eightByEightProviderManifest = defineIntegrationProviderPackage(eightByEightProviderManifestInput);
