import { defineIntegrationProviderPackage } from "@cognidesk/integration-kit";

export const talkdeskSupportSlice = {
  implementationStrategy: "generated-support-slice",
  sdkDecision: "No viable official npm REST SDK was verified; this package keeps selected official OpenAPI operations for callback and case creation.",
  verifiedAt: "2026-06-21",
  allowedOperations: [
  {
    id: "calls-callback-post",
    alias: "contact-center.callback.schedule",
    method: "POST",
    path: "/calls/callback",
    source: "https://api-docs.talkdeskapp.com/public-api",
    checksum: "sha256:aa27c72eff1b281fdebab70da85cb4cd30f98c37dd0465207f7bab00438be491"
  },
  {
    id: "CreatingACase",
    alias: "contact-center.task.create",
    method: "POST",
    path: "/cm/core/va/cases",
    source: "https://api-docs.talkdeskapp.com/public-api",
    checksum: "sha256:aa27c72eff1b281fdebab70da85cb4cd30f98c37dd0465207f7bab00438be491"
  }
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
    notes: ["No viable official npm REST SDK was verified; this package keeps selected official OpenAPI operations for callback and case creation."],
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
    implementation: talkdeskSupportSlice,
    manifestOnlySafe: true,
  },
  maintainers: [{ name: "Cognidesk", type: "official" }],
} as const;

export const talkdeskProviderManifest = defineIntegrationProviderPackage(talkdeskProviderManifestInput);
