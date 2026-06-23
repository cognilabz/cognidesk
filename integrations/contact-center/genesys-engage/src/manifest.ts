import { defineIntegrationProviderPackage } from "@cognidesk/integration-kit";

export const genesysEngageSupportSlice = {
  implementationStrategy: "generated-support-slice",
  sdkDecision: "No viable GMS Chat API v2 or Engage Callback JavaScript SDK was verified; the package keeps selected GMS support operations.",
  verifiedAt: "2026-06-21",
  allowedOperations: [
  {
    id: "createCallback",
    alias: "contact-center.callback.schedule",
    method: "POST",
    path: "/genesys/1/service/callback/{serviceName}",
    source: "https://docs.genesys.com/Documentation/GMS/latest/API/CallbackServicesAPI",
    checksum: "not-available-html-doc"
  },
  {
    id: "requestChat",
    alias: "contact-center.contact.start",
    method: "POST",
    path: "/genesys/2/chat/{serviceName}",
    source: "https://docs.genesys.com/Documentation/GMS/latest/API/ChatAPIv2",
    checksum: "not-available-html-doc"
  },
  {
    id: "sendChatMessage",
    alias: "genesys-engage.chat.send",
    method: "POST",
    path: "/genesys/2/chat/{serviceName}/{chatId}/send",
    source: "https://docs.genesys.com/Documentation/GMS/latest/API/ChatAPIv2",
    checksum: "not-available-html-doc"
  }
],
} as const;

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
    notes: ["No viable GMS Chat API v2 or Engage Callback JavaScript SDK was verified; the package keeps selected GMS support operations."],
    evidence: [
      { label: "Genesys GMS Callback Services API", url: "https://docs.genesys.com/Documentation/GMS/latest/API/CallbackServicesAPI" },
      { label: "Genesys GMS Chat API v2", url: "https://docs.genesys.com/Documentation/GMS/latest/API/ChatAPIv2" },
    ],
  },
  capabilities: [
    { capability: "handoff", providerObjects: [{ kind: "contactTransfer", label: "contactTransfer" }], requiresCredential: true, sideEffect: true, exposesSensitiveData: true },
    { capability: "schedule", providerObjects: [{ kind: "callback", label: "callback" }], requiresCredential: true, sideEffect: true, exposesSensitiveData: true },
    { capability: "send", providerObjects: [{ kind: "contact", label: "contact" }], requiresCredential: true, sideEffect: true, exposesSensitiveData: true },
    { capability: "send", providerObjects: [{ kind: "contact", label: "contact" }], requiresCredential: true, sideEffect: true, exposesSensitiveData: true },
  ],
  operations: [
    { alias: "contact-center.handoff.request", capability: "handoff", providerObject: "contactTransfer" },
    { alias: "contact-center.callback.schedule", capability: "schedule", providerObject: "callback" },
    { alias: "contact-center.contact.start", capability: "send", providerObject: "contact" },
    { alias: "genesys-engage.chat.send", capability: "send", providerObject: "contact", extension: true },
  ],
  metadata: {
    implementation: genesysEngageSupportSlice,
    manifestOnlySafe: true,
  },
  maintainers: [{ name: "Cognidesk", type: "official" }],
} as const;

export const genesysEngageProviderManifest = defineIntegrationProviderPackage(genesysEngageProviderManifestInput);
