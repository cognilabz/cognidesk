import { defineIntegrationProviderPackage } from "@cognidesk/integration-kit";

export const genesysPureConnectProviderSdkDecision = {
  "checkedAt": "2026-06-25",
  "result": "no-maintained-official-pureconnect-icws-npm-sdk",
  "defaultRestPolicy": "fail-closed-icws-rest-adapter-with-typed-provider-client-override",
  "typedClientOverride": "GenesysPureConnectProviderClient",
  "checkedPackages": [
    {
      "package": "genesys-pureconnect",
      "result": "not-published",
      "reason": "No npm package with this official PureConnect runtime SDK name was found."
    },
    {
      "package": "pureconnect",
      "result": "not-published",
      "reason": "No npm package with this official PureConnect runtime SDK name was found."
    },
    {
      "package": "machinepack-ic",
      "checkedVersion": "0.1.0",
      "license": "MIT",
      "result": "third-party-unmaintained-icws-package",
      "reason": "Third-party ICWS wrapper, not an official maintained Genesys PureConnect runtime SDK."
    },
    {
      "package": "purecloud-platform-client-v2",
      "checkedVersion": "255.1.0",
      "license": "MIT",
      "result": "genesys-cloud-sdk-not-pureconnect-icws",
      "reason": "Maintained SDK targets Genesys Cloud Platform APIs, not PureConnect ICWS."
    }
  ]
} as const;

export const genesysPureConnectSupportSlice = {
  implementationStrategy: "provider-rest-adapter",
  adapterKind: "no-official-sdk-rest-adapter",
  providerSdkDecision: genesysPureConnectProviderSdkDecision,
  sdkDecision: "No maintained Genesys PureConnect ICWS npm runtime SDK was verified; the official ICWS SDK page describes a REST API/docs, so this package provides a typed REST adapter with providerClient override.",
  verifiedAt: "2026-06-25",
  sdkAudit: {
    registry: "npm",
    maintainedRuntimeSdk: false,
    checkedPackages: [
      { name: "genesys-pureconnect", result: "not-published" },
      { name: "pureconnect", result: "not-published" },
      { name: "purecloud-platform-client-v2", result: "maintained-genesys-cloud-sdk-not-pureconnect-icws" },
      { name: "machinepack-ic", result: "third-party-unmaintained-icws-package", latest: "0.1.0", publishedAt: "2015-08-11" },
    ],
  },
  allowedOperations: [
    {
      id: "createConnection",
      alias: "genesys-pureconnect.icws.connect",
      method: "POST",
      path: "/icws/connection",
      source: "https://help.genesys.com/developer/cic/docs/icws/webhelp/icws/connection/index.htm",
      checksum: "not-available-html-doc",
    },
    {
      id: "sessionRequest",
      alias: "genesys-pureconnect.icws.request",
      method: "GET",
      path: "host-configured-icws-session-path",
      source: "host-configured",
      checksum: "not-applicable-host-configured",
      requiresHostReviewedPath: true,
    },
  ],
} as const;

export const genesysPureConnectProviderManifestInput = {
  id: "contact-center.genesys-pureconnect",
  name: "Genesys PureConnect / ICWS",
  packageName: "@cognidesk/integration-contact-center-genesys-pureconnect",
  provider: "genesys-pureconnect",
  category: "contact-center",
  trustLevel: "official",
  directions: ["inbound-only", "outbound-only", "bidirectional"],
  channelAudiences: ["customer-facing", "internal-support", "mixed"],
  credentialRequirements: [
    { id: "genesys-pureconnect-icws-base-url", label: "PureConnect ICWS base URL", required: true },
    { id: "genesys-pureconnect-session", label: "PureConnect ICWS session/authentication", required: false },
    { id: "genesys-pureconnect-routing", label: "PureConnect Interaction Web Tools routing configuration", required: false },
  ],
  coverage: {
    scope: "support-workflow-subset",
    notes: [
      "No maintained Genesys PureConnect ICWS npm runtime SDK was verified.",
      "Official PureConnect ICWS SDK documentation describes a REST API and API documentation rather than a maintained npm runtime client.",
      "Runtime calls use a typed REST adapter for reviewed endpoints when baseUrl/API credentials are supplied, with GenesysPureConnectProviderClient available as a host-client override.",
      "Host-configured ICWS session paths require explicit hostReviewedPath=true and a host policy classification before requests are dispatched.",
    ],
    evidence: [
      { label: "PureConnect ICWS connection", url: "https://help.genesys.com/developer/cic/docs/icws/webhelp/icws/connection/index.htm" },
      { label: "PureConnect ICWS interactions", url: "https://help.genesys.com/developer/cic/docs/icws/webhelp/icws/%28sessionId%29/interactions/Interactions.htm" },
      { label: "PureConnect ICWS SDK", url: "https://help.genesys.com/pureconnect/mergedprojects/wh_tr/mergedprojects/wh_tr_installation_and_configuration/desktop/interaction_center_web_services_icws_sdk.htm" },
      { label: "NPM ICWS candidate machinepack-ic", url: "https://www.npmjs.com/package/machinepack-ic" },
    ],
  },
  capabilities: [
    { capability: "handoff", providerObjects: [{ kind: "contactTransfer", label: "contactTransfer" }], requiresCredential: true, sideEffect: true, exposesSensitiveData: true },
    { capability: "create-provider-object", providerObjects: [{ kind: "contact", label: "contact" }], requiresCredential: true, sideEffect: true, exposesSensitiveData: true },
    { capability: "read-provider-object", providerObjects: [{ kind: "contact", label: "contact" }], requiresCredential: true, sideEffect: false, exposesSensitiveData: true },
  ],
  operations: [
    { alias: "contact-center.handoff.request", capability: "handoff", providerObject: "contactTransfer" },
    { alias: "genesys-pureconnect.icws.connect", capability: "create-provider-object", providerObject: "contact", extension: true },
    { alias: "genesys-pureconnect.icws.request", capability: "read-provider-object", providerObject: "contact", extension: true },
  ],
  metadata: {
    providerSdkDecision: genesysPureConnectProviderSdkDecision,
    implementation: genesysPureConnectSupportSlice,
    manifestOnlySafe: true,
    providerRestAdapter: {
      strategy: "provider-rest-adapter",
      adapterKind: "no-official-sdk-rest-adapter",
      providerClientOverride: "GenesysPureConnectProviderClient",
    },
  },
  maintainers: [{ name: "Cognidesk", type: "official" }],
} as const;

export const genesysPureConnectProviderManifest = defineIntegrationProviderPackage(genesysPureConnectProviderManifestInput);
