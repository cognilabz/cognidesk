import {
  defineIntegrationProviderPackage,
  type ProviderManifestInput,
} from "@cognidesk/integration-kit";

export const genesysCloudContactCenterManifestInput = {
  id: "contact-center.genesys-cloud",
  name: "Genesys Cloud CX",
  packageName: "@cognidesk/integration-contact-center-genesys-cloud",
  provider: "genesys-cloud",
  category: "contact-center",
  trustLevel: "official",
  directions: ["inbound-only", "outbound-only", "bidirectional"],
  channelAudiences: ["customer-facing", "internal-support", "mixed"],
  credentialRequirements: [
    { id: "genesys-cloud-region", label: "Genesys Cloud API region/base URL", required: true },
    {
      id: "genesys-cloud-api-access",
      label: "Genesys Cloud OAuth access",
      scopes: ["conversation:callback:create", "routing:queue:view", "user:me:view"],
      required: true,
      metadata: {
        scopeKind: "provider-permission-labels",
        privilegeGuidance: "Genesys Cloud permissions are configured through OAuth clients and org roles.",
      },
    },
    {
      id: "genesys-cloud-open-messaging",
      label: "Genesys Cloud Open Messaging integration and webhook secret",
      scopes: ["Messaging > Integration > All"],
      required: false,
      metadata: {
        scopeKind: "provider-permission-labels",
      },
    },
    {
      id: "genesys-cloud-routing",
      label: "Genesys Cloud queue, callback, or digital messaging routing configuration",
      required: false,
    },
  ],
  coverage: {
    scope: "support-workflow-subset",
    notes: [
      "Runtime uses the official purecloud-platform-client-v2 SDK for normalized Genesys Cloud support workflows.",
      "The raw Genesys SDK ApiClient is exposed as an escape hatch for provider-specific operations.",
      "Open Messaging webhook signature verification stays local because it protects the Cognidesk webhook boundary.",
      "The previous generated full Swagger clone is not carried forward as a Cognidesk-owned API surface.",
    ],
    evidence: [
      { label: "Genesys Cloud JavaScript SDK", url: "https://github.com/MyPureCloud/platform-client-sdk-javascript" },
      { label: "Genesys Cloud Developer Center", url: "https://developer.genesys.cloud/" },
      { label: "Genesys Cloud Open Messaging", url: "https://help.genesys.cloud/articles/configure-an-open-messaging-integration/" },
    ],
  },
  capabilities: [
    {
      capability: "handoff",
      label: "Create Genesys Cloud callback or Open Messaging ingress",
      providerObjects: [
        { kind: "genesysCloudCallback", label: "Genesys Cloud Callback" },
        { kind: "genesysCloudOpenMessage", label: "Genesys Cloud Open Messaging inbound message/event/receipt" },
      ],
      requiresCredential: true,
      sideEffect: true,
      exposesSensitiveData: true,
      changesWorkflow: true,
    },
    {
      capability: "contact-center.open-messaging-ingress",
      label: "Deliver Genesys Cloud Open Messaging ingress",
      providerObjects: [{ kind: "genesysCloudOpenMessage", label: "Genesys Cloud Open Messaging inbound message/event/receipt" }],
      requiresCredential: true,
      sideEffect: true,
      exposesSensitiveData: true,
      changesWorkflow: true,
      extension: true,
    },
    {
      capability: "schedule",
      label: "Create Genesys Cloud callbacks",
      providerObjects: [{ kind: "genesysCloudCallback", label: "Genesys Cloud Callback" }],
      requiresCredential: true,
      sideEffect: true,
      exposesSensitiveData: true,
      changesWorkflow: true,
    },
    {
      capability: "read-provider-object",
      label: "Read Genesys Cloud conversations and queues",
      providerObjects: [
        { kind: "genesysCloudConversation", label: "Genesys Cloud Conversation" },
        { kind: "genesysCloudQueue", label: "Genesys Cloud Queue" },
      ],
      requiresCredential: true,
      exposesSensitiveData: true,
    },
  ],
  operations: [
    {
      alias: "contact-center.handoff.request",
      capability: "handoff",
      providerOperation: "sdk-configured-request",
      providerObject: "contactTransfer",
      sideEffect: true,
      exposesSensitiveData: true,
      changesWorkflow: true,
    },
    {
      alias: "contact-center.callback.schedule",
      capability: "schedule",
      providerOperation: "POST /api/v2/conversations/callbacks",
      providerObject: "callback",
      sideEffect: true,
      exposesSensitiveData: true,
      changesWorkflow: true,
    },
    {
      alias: "contact-center.contact.read",
      capability: "read-provider-object",
      providerOperation: "GET /api/v2/conversations/{conversationId}",
      providerObject: "contact",
      exposesSensitiveData: true,
    },
    {
      alias: "contact-center.queue.list",
      capability: "read-provider-object",
      providerOperation: "GET /api/v2/routing/queues",
      providerObject: "queue",
    },
    {
      alias: "genesys-cloud.openMessaging.message.create",
      capability: "contact-center.open-messaging-ingress",
      providerOperation: "POST /api/v2/conversations/messages/{integrationId}/inbound/open/message",
      providerObject: "genesysCloudOpenMessage",
      extension: true,
      sideEffect: true,
      exposesSensitiveData: true,
      changesWorkflow: true,
    },
  ],
  privacyNotes: [
    "Callbacks and Open Messaging ingress can include customer phone numbers, identity, channel metadata, message content, and routing data.",
    "OAuth tokens stay inside the SDK user's runtime configuration.",
  ],
  limitations: [
    "Genesys regions, OAuth permissions, Architect flows, queues, callbacks, digital integrations, and outbound policy remain SDK-user configuration.",
    "Raw SDK access is available for escape-hatch use, but raw SDK breadth is not declared as normalized Cognidesk adapter coverage.",
  ],
  metadata: {
    implementation: {
      strategy: "official-sdk",
      sdkPackage: "purecloud-platform-client-v2",
      sdkPackages: ["purecloud-platform-client-v2"],
    },
    channelCoverage: {
      callback: "sdk-normalized",
      openMessagingInboundApi: "sdk-normalized",
      openMessagingOutboundWebhookSignature: "typed-verify-only",
      conversations: "sdk-normalized",
      queues: "sdk-normalized",
      rawGenesysCloudSdkClient: "escape-hatch",
      messengerJavascriptSdk: "provider-supported-customer-site-not-typed",
    },
  },
  maintainers: [{ name: "Cognidesk", type: "official" }],
} as const satisfies ProviderManifestInput;

export const genesysCloudContactCenterManifest = defineIntegrationProviderPackage(genesysCloudContactCenterManifestInput);
