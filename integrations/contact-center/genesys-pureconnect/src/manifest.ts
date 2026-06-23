import { defineIntegrationProviderPackage } from "@cognidesk/integration-kit";

export const genesysPureConnectSupportSlice = {
  implementationStrategy: "generated-support-slice",
  sdkDecision: "No viable official JavaScript SDK was verified for PureConnect ICWS or Interaction Web Tools; the package keeps selected ICWS support operations.",
  verifiedAt: "2026-06-21",
  allowedOperations: [
  {
    id: "createConnection",
    alias: "genesys-pureconnect.icws.connect",
    method: "POST",
    path: "/icws/connection",
    source: "https://help.genesys.com/developer/cic/docs/icws/webhelp/icws/connection/index.htm",
    checksum: "not-available-html-doc"
  },
  {
    id: "sessionRequest",
    alias: "genesys-pureconnect.icws.request",
    method: "GET",
    path: "host-configured-icws-session-path",
    source: "host-configured",
    checksum: "not-applicable-host-configured"
  }
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
    notes: ["No viable official JavaScript SDK was verified for PureConnect ICWS or Interaction Web Tools; the package keeps selected ICWS support operations."],
    evidence: [
      { label: "PureConnect ICWS connection", url: "https://help.genesys.com/developer/cic/docs/icws/webhelp/icws/connection/index.htm" },
      { label: "PureConnect ICWS interactions", url: "https://help.genesys.com/staging/developer/root/cic/docs/icws/webhelp/icws/%28sessionId%29/interactions/Interactions.htm" },
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
    implementation: genesysPureConnectSupportSlice,
    manifestOnlySafe: true,
  },
  maintainers: [{ name: "Cognidesk", type: "official" }],
} as const;

export const genesysPureConnectProviderManifest = defineIntegrationProviderPackage(genesysPureConnectProviderManifestInput);
