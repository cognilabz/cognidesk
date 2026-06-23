# integrations/contact-center/genesys-cloud/dist/manifest

## Variables

### genesysCloudContactCenterManifest

```ts
const genesysCloudContactCenterManifest: {
  capabilities: {
     audiences?: ("customer-facing" | "internal-support" | "mixed")[];
     capability: string;
     changesWorkflow?: boolean;
     description?: string;
     exposesSensitiveData?: boolean;
     extension?: boolean;
     label?: string;
     metadata?: Record<string, unknown>;
     providerObjects?: {
        description?: string;
        kind: string;
        label?: string;
        metadata?: Record<string, unknown>;
        schemaName?: string;
     }[];
     requiresCredential?: boolean;
     sideEffect?: boolean;
  }[];
  category: string;
  channelAudiences: ("customer-facing" | "internal-support" | "mixed")[];
  coverage: {
     evidence: {
        label: string;
        url?: string;
     }[];
     notes: string[];
     scope:   | "support-workflow-subset"
        | "provider-api-subset"
        | "connector-required"
        | "local-protocol"
        | "full-provider-api";
  };
  credentialRequirements: {
     description?: string;
     id: string;
     label?: string;
     metadata?: Record<string, unknown>;
     required: boolean;
     scopes: string[];
  }[];
  directions: (
     | "receive-only"
     | "send-only"
     | "inbound-only"
     | "outbound-only"
    | "bidirectional")[];
  id: string;
  limitations: string[];
  maintainers: {
     name: string;
     type: "community" | "official" | "unknown" | "partner";
     url?: string;
  }[];
  metadata?: Record<string, unknown>;
  name: string;
  operations: {
     alias: string;
     audience?: "customer-facing" | "internal-support" | "mixed";
     audiences?: ("customer-facing" | "internal-support" | "mixed")[];
     capability: string;
     changesWorkflow?: boolean;
     description?: string;
     exposesSensitiveData?: boolean;
     extension: boolean;
     externallyVisible?: boolean;
     inputSchema?: unknown;
     inputSchemaName?: string;
     inputSchemaRef?: string;
     label?: string;
     metadata?: Record<string, unknown>;
     outputSchema?: unknown;
     outputSchemaName?: string;
     outputSchemaRef?: string;
     providerObject?: string;
     providerObjects?: {
        description?: string;
        kind: string;
        label?: string;
        metadata?: Record<string, unknown>;
        schemaName?: string;
     }[];
     providerOperation?: string;
     requiredPolicyIds?: string[];
     requiresApproval?: boolean;
     requiresCredential?: boolean;
     sideEffect?: boolean;
  }[];
  packageName: string;
  privacyNotes: string[];
  provider: string;
  trustLevel: "community" | "official" | "verified" | "experimental";
} & {
  capabilities: [{
     capability: "handoff";
     changesWorkflow: true;
     exposesSensitiveData: true;
     label: "Create Genesys Cloud callback or Open Messaging ingress";
     providerObjects: [{
        kind: "genesysCloudCallback";
        label: "Genesys Cloud Callback";
      }, {
        kind: "genesysCloudOpenMessage";
        label: "Genesys Cloud Open Messaging inbound message/event/receipt";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     capability: "contact-center.open-messaging-ingress";
     changesWorkflow: true;
     exposesSensitiveData: true;
     extension: true;
     label: "Deliver Genesys Cloud Open Messaging ingress";
     providerObjects: [{
        kind: "genesysCloudOpenMessage";
        label: "Genesys Cloud Open Messaging inbound message/event/receipt";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     capability: "schedule";
     changesWorkflow: true;
     exposesSensitiveData: true;
     label: "Create Genesys Cloud callbacks";
     providerObjects: [{
        kind: "genesysCloudCallback";
        label: "Genesys Cloud Callback";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     capability: "read-provider-object";
     exposesSensitiveData: true;
     label: "Read Genesys Cloud conversations and queues";
     providerObjects: [{
        kind: "genesysCloudConversation";
        label: "Genesys Cloud Conversation";
      }, {
        kind: "genesysCloudQueue";
        label: "Genesys Cloud Queue";
     }];
     requiresCredential: true;
  }];
  category: "contact-center";
  channelAudiences: ["customer-facing", "internal-support", "mixed"];
  coverage: {
     evidence: [{
        label: "Genesys Cloud JavaScript SDK";
        url: "https://github.com/MyPureCloud/platform-client-sdk-javascript";
      }, {
        label: "Genesys Cloud Developer Center";
        url: "https://developer.genesys.cloud/";
      }, {
        label: "Genesys Cloud Open Messaging";
        url: "https://help.genesys.cloud/articles/configure-an-open-messaging-integration/";
     }];
     notes: ["Runtime uses the official purecloud-platform-client-v2 SDK for normalized Genesys Cloud support workflows.", "The raw Genesys SDK ApiClient is exposed as an escape hatch for provider-specific operations.", "Open Messaging webhook signature verification stays local because it protects the Cognidesk webhook boundary.", "The previous generated full Swagger clone is not carried forward as a Cognidesk-owned API surface."];
     scope: "support-workflow-subset";
  };
  credentialRequirements: [{
     id: "genesys-cloud-region";
     label: "Genesys Cloud API region/base URL";
     required: true;
   }, {
     id: "genesys-cloud-api-access";
     label: "Genesys Cloud OAuth access";
     metadata: {
        privilegeGuidance: "Genesys Cloud permissions are configured through OAuth clients and org roles.";
        scopeKind: "provider-permission-labels";
     };
     required: true;
     scopes: ["conversation:callback:create", "routing:queue:view", "user:me:view"];
   }, {
     id: "genesys-cloud-open-messaging";
     label: "Genesys Cloud Open Messaging integration and webhook secret";
     metadata: {
        scopeKind: "provider-permission-labels";
     };
     required: false;
     scopes: ["Messaging > Integration > All"];
   }, {
     id: "genesys-cloud-routing";
     label: "Genesys Cloud queue, callback, or digital messaging routing configuration";
     required: false;
  }];
  directions: ["inbound-only", "outbound-only", "bidirectional"];
  id: "contact-center.genesys-cloud";
  limitations: ["Genesys regions, OAuth permissions, Architect flows, queues, callbacks, digital integrations, and outbound policy remain SDK-user configuration.", "Raw SDK access is available for escape-hatch use, but raw SDK breadth is not declared as normalized Cognidesk adapter coverage."];
  maintainers: [{
     name: "Cognidesk";
     type: "official";
  }];
  metadata: {
     channelCoverage: {
        callback: "sdk-normalized";
        conversations: "sdk-normalized";
        messengerJavascriptSdk: "provider-supported-customer-site-not-typed";
        openMessagingInboundApi: "sdk-normalized";
        openMessagingOutboundWebhookSignature: "typed-verify-only";
        queues: "sdk-normalized";
        rawGenesysCloudSdkClient: "escape-hatch";
     };
     implementation: {
        sdkPackage: "purecloud-platform-client-v2";
        sdkPackages: readonly ["purecloud-platform-client-v2"];
        strategy: "official-sdk";
     };
  };
  name: "Genesys Cloud CX";
  operations: [{
     alias: "contact-center.handoff.request";
     capability: "handoff";
     changesWorkflow: true;
     exposesSensitiveData: true;
     providerObject: "contactTransfer";
     providerOperation: "sdk-configured-request";
     sideEffect: true;
   }, {
     alias: "contact-center.callback.schedule";
     capability: "schedule";
     changesWorkflow: true;
     exposesSensitiveData: true;
     providerObject: "callback";
     providerOperation: "POST /api/v2/conversations/callbacks";
     sideEffect: true;
   }, {
     alias: "contact-center.contact.read";
     capability: "read-provider-object";
     exposesSensitiveData: true;
     providerObject: "contact";
     providerOperation: "GET /api/v2/conversations/{conversationId}";
   }, {
     alias: "contact-center.queue.list";
     capability: "read-provider-object";
     providerObject: "queue";
     providerOperation: "GET /api/v2/routing/queues";
   }, {
     alias: "genesys-cloud.openMessaging.message.create";
     capability: "contact-center.open-messaging-ingress";
     changesWorkflow: true;
     exposesSensitiveData: true;
     extension: true;
     providerObject: "genesysCloudOpenMessage";
     providerOperation: "POST /api/v2/conversations/messages/{integrationId}/inbound/open/message";
     sideEffect: true;
  }];
  packageName: "@cognidesk/integration-contact-center-genesys-cloud";
  privacyNotes: ["Callbacks and Open Messaging ingress can include customer phone numbers, identity, channel metadata, message content, and routing data.", "OAuth tokens stay inside the SDK user's runtime configuration."];
  provider: "genesys-cloud";
  trustLevel: "official";
};
```

#### Type Declaration

| Name | Type |
| ------ | ------ |
| `capabilities` | \{ `audiences?`: (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[]; `capability`: `string`; `changesWorkflow?`: `boolean`; `description?`: `string`; `exposesSensitiveData?`: `boolean`; `extension?`: `boolean`; `label?`: `string`; `metadata?`: `Record`\<`string`, `unknown`\>; `providerObjects?`: \{ `description?`: `string`; `kind`: `string`; `label?`: `string`; `metadata?`: `Record`\<`string`, `unknown`\>; `schemaName?`: `string`; \}[]; `requiresCredential?`: `boolean`; `sideEffect?`: `boolean`; \}[] |
| `category` | `string` |
| `channelAudiences` | (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[] |
| `coverage` | \{ `evidence`: \{ `label`: `string`; `url?`: `string`; \}[]; `notes`: `string`[]; `scope`: \| `"support-workflow-subset"` \| `"provider-api-subset"` \| `"connector-required"` \| `"local-protocol"` \| `"full-provider-api"`; \} |
| `coverage.evidence` | \{ `label`: `string`; `url?`: `string`; \}[] |
| `coverage.notes` | `string`[] |
| `coverage.scope` | \| `"support-workflow-subset"` \| `"provider-api-subset"` \| `"connector-required"` \| `"local-protocol"` \| `"full-provider-api"` |
| `credentialRequirements` | \{ `description?`: `string`; `id`: `string`; `label?`: `string`; `metadata?`: `Record`\<`string`, `unknown`\>; `required`: `boolean`; `scopes`: `string`[]; \}[] |
| `directions` | ( \| `"receive-only"` \| `"send-only"` \| `"inbound-only"` \| `"outbound-only"` \| `"bidirectional"`)[] |
| `id` | `string` |
| `limitations` | `string`[] |
| `maintainers` | \{ `name`: `string`; `type`: `"community"` \| `"official"` \| `"unknown"` \| `"partner"`; `url?`: `string`; \}[] |
| `metadata?` | `Record`\<`string`, `unknown`\> |
| `name` | `string` |
| `operations` | \{ `alias`: `string`; `audience?`: `"customer-facing"` \| `"internal-support"` \| `"mixed"`; `audiences?`: (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[]; `capability`: `string`; `changesWorkflow?`: `boolean`; `description?`: `string`; `exposesSensitiveData?`: `boolean`; `extension`: `boolean`; `externallyVisible?`: `boolean`; `inputSchema?`: `unknown`; `inputSchemaName?`: `string`; `inputSchemaRef?`: `string`; `label?`: `string`; `metadata?`: `Record`\<`string`, `unknown`\>; `outputSchema?`: `unknown`; `outputSchemaName?`: `string`; `outputSchemaRef?`: `string`; `providerObject?`: `string`; `providerObjects?`: \{ `description?`: `string`; `kind`: `string`; `label?`: `string`; `metadata?`: `Record`\<`string`, `unknown`\>; `schemaName?`: `string`; \}[]; `providerOperation?`: `string`; `requiredPolicyIds?`: `string`[]; `requiresApproval?`: `boolean`; `requiresCredential?`: `boolean`; `sideEffect?`: `boolean`; \}[] |
| `packageName` | `string` |
| `privacyNotes` | `string`[] |
| `provider` | `string` |
| `trustLevel` | `"community"` \| `"official"` \| `"verified"` \| `"experimental"` |

#### Type Declaration

| Name | Type |
| ------ | ------ |
| `capabilities` | \[\{ `capability`: `"handoff"`; `changesWorkflow`: `true`; `exposesSensitiveData`: `true`; `label`: `"Create Genesys Cloud callback or Open Messaging ingress"`; `providerObjects`: \[\{ `kind`: `"genesysCloudCallback"`; `label`: `"Genesys Cloud Callback"`; \}, \{ `kind`: `"genesysCloudOpenMessage"`; `label`: `"Genesys Cloud Open Messaging inbound message/event/receipt"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `capability`: `"contact-center.open-messaging-ingress"`; `changesWorkflow`: `true`; `exposesSensitiveData`: `true`; `extension`: `true`; `label`: `"Deliver Genesys Cloud Open Messaging ingress"`; `providerObjects`: \[\{ `kind`: `"genesysCloudOpenMessage"`; `label`: `"Genesys Cloud Open Messaging inbound message/event/receipt"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `capability`: `"schedule"`; `changesWorkflow`: `true`; `exposesSensitiveData`: `true`; `label`: `"Create Genesys Cloud callbacks"`; `providerObjects`: \[\{ `kind`: `"genesysCloudCallback"`; `label`: `"Genesys Cloud Callback"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `label`: `"Read Genesys Cloud conversations and queues"`; `providerObjects`: \[\{ `kind`: `"genesysCloudConversation"`; `label`: `"Genesys Cloud Conversation"`; \}, \{ `kind`: `"genesysCloudQueue"`; `label`: `"Genesys Cloud Queue"`; \}\]; `requiresCredential`: `true`; \}\] |
| `category` | `"contact-center"` |
| `channelAudiences` | \[`"customer-facing"`, `"internal-support"`, `"mixed"`\] |
| `coverage` | \{ `evidence`: \[\{ `label`: `"Genesys Cloud JavaScript SDK"`; `url`: `"https://github.com/MyPureCloud/platform-client-sdk-javascript"`; \}, \{ `label`: `"Genesys Cloud Developer Center"`; `url`: `"https://developer.genesys.cloud/"`; \}, \{ `label`: `"Genesys Cloud Open Messaging"`; `url`: `"https://help.genesys.cloud/articles/configure-an-open-messaging-integration/"`; \}\]; `notes`: \[`"Runtime uses the official purecloud-platform-client-v2 SDK for normalized Genesys Cloud support workflows."`, `"The raw Genesys SDK ApiClient is exposed as an escape hatch for provider-specific operations."`, `"Open Messaging webhook signature verification stays local because it protects the Cognidesk webhook boundary."`, `"The previous generated full Swagger clone is not carried forward as a Cognidesk-owned API surface."`\]; `scope`: `"support-workflow-subset"`; \} |
| `coverage.evidence` | \[\{ `label`: `"Genesys Cloud JavaScript SDK"`; `url`: `"https://github.com/MyPureCloud/platform-client-sdk-javascript"`; \}, \{ `label`: `"Genesys Cloud Developer Center"`; `url`: `"https://developer.genesys.cloud/"`; \}, \{ `label`: `"Genesys Cloud Open Messaging"`; `url`: `"https://help.genesys.cloud/articles/configure-an-open-messaging-integration/"`; \}\] |
| `coverage.notes` | \[`"Runtime uses the official purecloud-platform-client-v2 SDK for normalized Genesys Cloud support workflows."`, `"The raw Genesys SDK ApiClient is exposed as an escape hatch for provider-specific operations."`, `"Open Messaging webhook signature verification stays local because it protects the Cognidesk webhook boundary."`, `"The previous generated full Swagger clone is not carried forward as a Cognidesk-owned API surface."`\] |
| `coverage.scope` | `"support-workflow-subset"` |
| `credentialRequirements` | \[\{ `id`: `"genesys-cloud-region"`; `label`: `"Genesys Cloud API region/base URL"`; `required`: `true`; \}, \{ `id`: `"genesys-cloud-api-access"`; `label`: `"Genesys Cloud OAuth access"`; `metadata`: \{ `privilegeGuidance`: `"Genesys Cloud permissions are configured through OAuth clients and org roles."`; `scopeKind`: `"provider-permission-labels"`; \}; `required`: `true`; `scopes`: \[`"conversation:callback:create"`, `"routing:queue:view"`, `"user:me:view"`\]; \}, \{ `id`: `"genesys-cloud-open-messaging"`; `label`: `"Genesys Cloud Open Messaging integration and webhook secret"`; `metadata`: \{ `scopeKind`: `"provider-permission-labels"`; \}; `required`: `false`; `scopes`: \[`"Messaging > Integration > All"`\]; \}, \{ `id`: `"genesys-cloud-routing"`; `label`: `"Genesys Cloud queue, callback, or digital messaging routing configuration"`; `required`: `false`; \}\] |
| `directions` | \[`"inbound-only"`, `"outbound-only"`, `"bidirectional"`\] |
| `id` | `"contact-center.genesys-cloud"` |
| `limitations` | \[`"Genesys regions, OAuth permissions, Architect flows, queues, callbacks, digital integrations, and outbound policy remain SDK-user configuration."`, `"Raw SDK access is available for escape-hatch use, but raw SDK breadth is not declared as normalized Cognidesk adapter coverage."`\] |
| `maintainers` | \[\{ `name`: `"Cognidesk"`; `type`: `"official"`; \}\] |
| `metadata` | \{ `channelCoverage`: \{ `callback`: `"sdk-normalized"`; `conversations`: `"sdk-normalized"`; `messengerJavascriptSdk`: `"provider-supported-customer-site-not-typed"`; `openMessagingInboundApi`: `"sdk-normalized"`; `openMessagingOutboundWebhookSignature`: `"typed-verify-only"`; `queues`: `"sdk-normalized"`; `rawGenesysCloudSdkClient`: `"escape-hatch"`; \}; `implementation`: \{ `sdkPackage`: `"purecloud-platform-client-v2"`; `sdkPackages`: readonly \[`"purecloud-platform-client-v2"`\]; `strategy`: `"official-sdk"`; \}; \} |
| `metadata.channelCoverage` | \{ `callback`: `"sdk-normalized"`; `conversations`: `"sdk-normalized"`; `messengerJavascriptSdk`: `"provider-supported-customer-site-not-typed"`; `openMessagingInboundApi`: `"sdk-normalized"`; `openMessagingOutboundWebhookSignature`: `"typed-verify-only"`; `queues`: `"sdk-normalized"`; `rawGenesysCloudSdkClient`: `"escape-hatch"`; \} |
| `metadata.channelCoverage.callback` | `"sdk-normalized"` |
| `metadata.channelCoverage.conversations` | `"sdk-normalized"` |
| `metadata.channelCoverage.messengerJavascriptSdk` | `"provider-supported-customer-site-not-typed"` |
| `metadata.channelCoverage.openMessagingInboundApi` | `"sdk-normalized"` |
| `metadata.channelCoverage.openMessagingOutboundWebhookSignature` | `"typed-verify-only"` |
| `metadata.channelCoverage.queues` | `"sdk-normalized"` |
| `metadata.channelCoverage.rawGenesysCloudSdkClient` | `"escape-hatch"` |
| `metadata.implementation` | \{ `sdkPackage`: `"purecloud-platform-client-v2"`; `sdkPackages`: readonly \[`"purecloud-platform-client-v2"`\]; `strategy`: `"official-sdk"`; \} |
| `metadata.implementation.sdkPackage` | `"purecloud-platform-client-v2"` |
| `metadata.implementation.sdkPackages` | readonly \[`"purecloud-platform-client-v2"`\] |
| `metadata.implementation.strategy` | `"official-sdk"` |
| `name` | `"Genesys Cloud CX"` |
| `operations` | \[\{ `alias`: `"contact-center.handoff.request"`; `capability`: `"handoff"`; `changesWorkflow`: `true`; `exposesSensitiveData`: `true`; `providerObject`: `"contactTransfer"`; `providerOperation`: `"sdk-configured-request"`; `sideEffect`: `true`; \}, \{ `alias`: `"contact-center.callback.schedule"`; `capability`: `"schedule"`; `changesWorkflow`: `true`; `exposesSensitiveData`: `true`; `providerObject`: `"callback"`; `providerOperation`: `"POST /api/v2/conversations/callbacks"`; `sideEffect`: `true`; \}, \{ `alias`: `"contact-center.contact.read"`; `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `providerObject`: `"contact"`; `providerOperation`: `"GET /api/v2/conversations/{conversationId}"`; \}, \{ `alias`: `"contact-center.queue.list"`; `capability`: `"read-provider-object"`; `providerObject`: `"queue"`; `providerOperation`: `"GET /api/v2/routing/queues"`; \}, \{ `alias`: `"genesys-cloud.openMessaging.message.create"`; `capability`: `"contact-center.open-messaging-ingress"`; `changesWorkflow`: `true`; `exposesSensitiveData`: `true`; `extension`: `true`; `providerObject`: `"genesysCloudOpenMessage"`; `providerOperation`: `"POST /api/v2/conversations/messages/{integrationId}/inbound/open/message"`; `sideEffect`: `true`; \}\] |
| `packageName` | `"@cognidesk/integration-contact-center-genesys-cloud"` |
| `privacyNotes` | \[`"Callbacks and Open Messaging ingress can include customer phone numbers, identity, channel metadata, message content, and routing data."`, `"OAuth tokens stay inside the SDK user's runtime configuration."`\] |
| `provider` | `"genesys-cloud"` |
| `trustLevel` | `"official"` |

***

### genesysCloudContactCenterManifestInput

```ts
const genesysCloudContactCenterManifestInput: {
  capabilities: [{
     capability: "handoff";
     changesWorkflow: true;
     exposesSensitiveData: true;
     label: "Create Genesys Cloud callback or Open Messaging ingress";
     providerObjects: [{
        kind: "genesysCloudCallback";
        label: "Genesys Cloud Callback";
      }, {
        kind: "genesysCloudOpenMessage";
        label: "Genesys Cloud Open Messaging inbound message/event/receipt";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     capability: "contact-center.open-messaging-ingress";
     changesWorkflow: true;
     exposesSensitiveData: true;
     extension: true;
     label: "Deliver Genesys Cloud Open Messaging ingress";
     providerObjects: [{
        kind: "genesysCloudOpenMessage";
        label: "Genesys Cloud Open Messaging inbound message/event/receipt";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     capability: "schedule";
     changesWorkflow: true;
     exposesSensitiveData: true;
     label: "Create Genesys Cloud callbacks";
     providerObjects: [{
        kind: "genesysCloudCallback";
        label: "Genesys Cloud Callback";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     capability: "read-provider-object";
     exposesSensitiveData: true;
     label: "Read Genesys Cloud conversations and queues";
     providerObjects: [{
        kind: "genesysCloudConversation";
        label: "Genesys Cloud Conversation";
      }, {
        kind: "genesysCloudQueue";
        label: "Genesys Cloud Queue";
     }];
     requiresCredential: true;
  }];
  category: "contact-center";
  channelAudiences: ["customer-facing", "internal-support", "mixed"];
  coverage: {
     evidence: [{
        label: "Genesys Cloud JavaScript SDK";
        url: "https://github.com/MyPureCloud/platform-client-sdk-javascript";
      }, {
        label: "Genesys Cloud Developer Center";
        url: "https://developer.genesys.cloud/";
      }, {
        label: "Genesys Cloud Open Messaging";
        url: "https://help.genesys.cloud/articles/configure-an-open-messaging-integration/";
     }];
     notes: ["Runtime uses the official purecloud-platform-client-v2 SDK for normalized Genesys Cloud support workflows.", "The raw Genesys SDK ApiClient is exposed as an escape hatch for provider-specific operations.", "Open Messaging webhook signature verification stays local because it protects the Cognidesk webhook boundary.", "The previous generated full Swagger clone is not carried forward as a Cognidesk-owned API surface."];
     scope: "support-workflow-subset";
  };
  credentialRequirements: [{
     id: "genesys-cloud-region";
     label: "Genesys Cloud API region/base URL";
     required: true;
   }, {
     id: "genesys-cloud-api-access";
     label: "Genesys Cloud OAuth access";
     metadata: {
        privilegeGuidance: "Genesys Cloud permissions are configured through OAuth clients and org roles.";
        scopeKind: "provider-permission-labels";
     };
     required: true;
     scopes: ["conversation:callback:create", "routing:queue:view", "user:me:view"];
   }, {
     id: "genesys-cloud-open-messaging";
     label: "Genesys Cloud Open Messaging integration and webhook secret";
     metadata: {
        scopeKind: "provider-permission-labels";
     };
     required: false;
     scopes: ["Messaging > Integration > All"];
   }, {
     id: "genesys-cloud-routing";
     label: "Genesys Cloud queue, callback, or digital messaging routing configuration";
     required: false;
  }];
  directions: ["inbound-only", "outbound-only", "bidirectional"];
  id: "contact-center.genesys-cloud";
  limitations: ["Genesys regions, OAuth permissions, Architect flows, queues, callbacks, digital integrations, and outbound policy remain SDK-user configuration.", "Raw SDK access is available for escape-hatch use, but raw SDK breadth is not declared as normalized Cognidesk adapter coverage."];
  maintainers: [{
     name: "Cognidesk";
     type: "official";
  }];
  metadata: {
     channelCoverage: {
        callback: "sdk-normalized";
        conversations: "sdk-normalized";
        messengerJavascriptSdk: "provider-supported-customer-site-not-typed";
        openMessagingInboundApi: "sdk-normalized";
        openMessagingOutboundWebhookSignature: "typed-verify-only";
        queues: "sdk-normalized";
        rawGenesysCloudSdkClient: "escape-hatch";
     };
     implementation: {
        sdkPackage: "purecloud-platform-client-v2";
        sdkPackages: readonly ["purecloud-platform-client-v2"];
        strategy: "official-sdk";
     };
  };
  name: "Genesys Cloud CX";
  operations: [{
     alias: "contact-center.handoff.request";
     capability: "handoff";
     changesWorkflow: true;
     exposesSensitiveData: true;
     providerObject: "contactTransfer";
     providerOperation: "sdk-configured-request";
     sideEffect: true;
   }, {
     alias: "contact-center.callback.schedule";
     capability: "schedule";
     changesWorkflow: true;
     exposesSensitiveData: true;
     providerObject: "callback";
     providerOperation: "POST /api/v2/conversations/callbacks";
     sideEffect: true;
   }, {
     alias: "contact-center.contact.read";
     capability: "read-provider-object";
     exposesSensitiveData: true;
     providerObject: "contact";
     providerOperation: "GET /api/v2/conversations/{conversationId}";
   }, {
     alias: "contact-center.queue.list";
     capability: "read-provider-object";
     providerObject: "queue";
     providerOperation: "GET /api/v2/routing/queues";
   }, {
     alias: "genesys-cloud.openMessaging.message.create";
     capability: "contact-center.open-messaging-ingress";
     changesWorkflow: true;
     exposesSensitiveData: true;
     extension: true;
     providerObject: "genesysCloudOpenMessage";
     providerOperation: "POST /api/v2/conversations/messages/{integrationId}/inbound/open/message";
     sideEffect: true;
  }];
  packageName: "@cognidesk/integration-contact-center-genesys-cloud";
  privacyNotes: ["Callbacks and Open Messaging ingress can include customer phone numbers, identity, channel metadata, message content, and routing data.", "OAuth tokens stay inside the SDK user's runtime configuration."];
  provider: "genesys-cloud";
  trustLevel: "official";
};
```

#### Type Declaration

| Name | Type |
| ------ | ------ |
| <a id="property-capabilities"></a> `capabilities` | \[\{ `capability`: `"handoff"`; `changesWorkflow`: `true`; `exposesSensitiveData`: `true`; `label`: `"Create Genesys Cloud callback or Open Messaging ingress"`; `providerObjects`: \[\{ `kind`: `"genesysCloudCallback"`; `label`: `"Genesys Cloud Callback"`; \}, \{ `kind`: `"genesysCloudOpenMessage"`; `label`: `"Genesys Cloud Open Messaging inbound message/event/receipt"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `capability`: `"contact-center.open-messaging-ingress"`; `changesWorkflow`: `true`; `exposesSensitiveData`: `true`; `extension`: `true`; `label`: `"Deliver Genesys Cloud Open Messaging ingress"`; `providerObjects`: \[\{ `kind`: `"genesysCloudOpenMessage"`; `label`: `"Genesys Cloud Open Messaging inbound message/event/receipt"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `capability`: `"schedule"`; `changesWorkflow`: `true`; `exposesSensitiveData`: `true`; `label`: `"Create Genesys Cloud callbacks"`; `providerObjects`: \[\{ `kind`: `"genesysCloudCallback"`; `label`: `"Genesys Cloud Callback"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `label`: `"Read Genesys Cloud conversations and queues"`; `providerObjects`: \[\{ `kind`: `"genesysCloudConversation"`; `label`: `"Genesys Cloud Conversation"`; \}, \{ `kind`: `"genesysCloudQueue"`; `label`: `"Genesys Cloud Queue"`; \}\]; `requiresCredential`: `true`; \}\] |
| <a id="property-category"></a> `category` | `"contact-center"` |
| <a id="property-channelaudiences"></a> `channelAudiences` | \[`"customer-facing"`, `"internal-support"`, `"mixed"`\] |
| <a id="property-coverage"></a> `coverage` | \{ `evidence`: \[\{ `label`: `"Genesys Cloud JavaScript SDK"`; `url`: `"https://github.com/MyPureCloud/platform-client-sdk-javascript"`; \}, \{ `label`: `"Genesys Cloud Developer Center"`; `url`: `"https://developer.genesys.cloud/"`; \}, \{ `label`: `"Genesys Cloud Open Messaging"`; `url`: `"https://help.genesys.cloud/articles/configure-an-open-messaging-integration/"`; \}\]; `notes`: \[`"Runtime uses the official purecloud-platform-client-v2 SDK for normalized Genesys Cloud support workflows."`, `"The raw Genesys SDK ApiClient is exposed as an escape hatch for provider-specific operations."`, `"Open Messaging webhook signature verification stays local because it protects the Cognidesk webhook boundary."`, `"The previous generated full Swagger clone is not carried forward as a Cognidesk-owned API surface."`\]; `scope`: `"support-workflow-subset"`; \} |
| `coverage.evidence` | \[\{ `label`: `"Genesys Cloud JavaScript SDK"`; `url`: `"https://github.com/MyPureCloud/platform-client-sdk-javascript"`; \}, \{ `label`: `"Genesys Cloud Developer Center"`; `url`: `"https://developer.genesys.cloud/"`; \}, \{ `label`: `"Genesys Cloud Open Messaging"`; `url`: `"https://help.genesys.cloud/articles/configure-an-open-messaging-integration/"`; \}\] |
| `coverage.notes` | \[`"Runtime uses the official purecloud-platform-client-v2 SDK for normalized Genesys Cloud support workflows."`, `"The raw Genesys SDK ApiClient is exposed as an escape hatch for provider-specific operations."`, `"Open Messaging webhook signature verification stays local because it protects the Cognidesk webhook boundary."`, `"The previous generated full Swagger clone is not carried forward as a Cognidesk-owned API surface."`\] |
| `coverage.scope` | `"support-workflow-subset"` |
| <a id="property-credentialrequirements"></a> `credentialRequirements` | \[\{ `id`: `"genesys-cloud-region"`; `label`: `"Genesys Cloud API region/base URL"`; `required`: `true`; \}, \{ `id`: `"genesys-cloud-api-access"`; `label`: `"Genesys Cloud OAuth access"`; `metadata`: \{ `privilegeGuidance`: `"Genesys Cloud permissions are configured through OAuth clients and org roles."`; `scopeKind`: `"provider-permission-labels"`; \}; `required`: `true`; `scopes`: \[`"conversation:callback:create"`, `"routing:queue:view"`, `"user:me:view"`\]; \}, \{ `id`: `"genesys-cloud-open-messaging"`; `label`: `"Genesys Cloud Open Messaging integration and webhook secret"`; `metadata`: \{ `scopeKind`: `"provider-permission-labels"`; \}; `required`: `false`; `scopes`: \[`"Messaging > Integration > All"`\]; \}, \{ `id`: `"genesys-cloud-routing"`; `label`: `"Genesys Cloud queue, callback, or digital messaging routing configuration"`; `required`: `false`; \}\] |
| <a id="property-directions"></a> `directions` | \[`"inbound-only"`, `"outbound-only"`, `"bidirectional"`\] |
| <a id="property-id"></a> `id` | `"contact-center.genesys-cloud"` |
| <a id="property-limitations"></a> `limitations` | \[`"Genesys regions, OAuth permissions, Architect flows, queues, callbacks, digital integrations, and outbound policy remain SDK-user configuration."`, `"Raw SDK access is available for escape-hatch use, but raw SDK breadth is not declared as normalized Cognidesk adapter coverage."`\] |
| <a id="property-maintainers"></a> `maintainers` | \[\{ `name`: `"Cognidesk"`; `type`: `"official"`; \}\] |
| <a id="property-metadata"></a> `metadata` | \{ `channelCoverage`: \{ `callback`: `"sdk-normalized"`; `conversations`: `"sdk-normalized"`; `messengerJavascriptSdk`: `"provider-supported-customer-site-not-typed"`; `openMessagingInboundApi`: `"sdk-normalized"`; `openMessagingOutboundWebhookSignature`: `"typed-verify-only"`; `queues`: `"sdk-normalized"`; `rawGenesysCloudSdkClient`: `"escape-hatch"`; \}; `implementation`: \{ `sdkPackage`: `"purecloud-platform-client-v2"`; `sdkPackages`: readonly \[`"purecloud-platform-client-v2"`\]; `strategy`: `"official-sdk"`; \}; \} |
| `metadata.channelCoverage` | \{ `callback`: `"sdk-normalized"`; `conversations`: `"sdk-normalized"`; `messengerJavascriptSdk`: `"provider-supported-customer-site-not-typed"`; `openMessagingInboundApi`: `"sdk-normalized"`; `openMessagingOutboundWebhookSignature`: `"typed-verify-only"`; `queues`: `"sdk-normalized"`; `rawGenesysCloudSdkClient`: `"escape-hatch"`; \} |
| `metadata.channelCoverage.callback` | `"sdk-normalized"` |
| `metadata.channelCoverage.conversations` | `"sdk-normalized"` |
| `metadata.channelCoverage.messengerJavascriptSdk` | `"provider-supported-customer-site-not-typed"` |
| `metadata.channelCoverage.openMessagingInboundApi` | `"sdk-normalized"` |
| `metadata.channelCoverage.openMessagingOutboundWebhookSignature` | `"typed-verify-only"` |
| `metadata.channelCoverage.queues` | `"sdk-normalized"` |
| `metadata.channelCoverage.rawGenesysCloudSdkClient` | `"escape-hatch"` |
| `metadata.implementation` | \{ `sdkPackage`: `"purecloud-platform-client-v2"`; `sdkPackages`: readonly \[`"purecloud-platform-client-v2"`\]; `strategy`: `"official-sdk"`; \} |
| `metadata.implementation.sdkPackage` | `"purecloud-platform-client-v2"` |
| `metadata.implementation.sdkPackages` | readonly \[`"purecloud-platform-client-v2"`\] |
| `metadata.implementation.strategy` | `"official-sdk"` |
| <a id="property-name"></a> `name` | `"Genesys Cloud CX"` |
| <a id="property-operations"></a> `operations` | \[\{ `alias`: `"contact-center.handoff.request"`; `capability`: `"handoff"`; `changesWorkflow`: `true`; `exposesSensitiveData`: `true`; `providerObject`: `"contactTransfer"`; `providerOperation`: `"sdk-configured-request"`; `sideEffect`: `true`; \}, \{ `alias`: `"contact-center.callback.schedule"`; `capability`: `"schedule"`; `changesWorkflow`: `true`; `exposesSensitiveData`: `true`; `providerObject`: `"callback"`; `providerOperation`: `"POST /api/v2/conversations/callbacks"`; `sideEffect`: `true`; \}, \{ `alias`: `"contact-center.contact.read"`; `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `providerObject`: `"contact"`; `providerOperation`: `"GET /api/v2/conversations/{conversationId}"`; \}, \{ `alias`: `"contact-center.queue.list"`; `capability`: `"read-provider-object"`; `providerObject`: `"queue"`; `providerOperation`: `"GET /api/v2/routing/queues"`; \}, \{ `alias`: `"genesys-cloud.openMessaging.message.create"`; `capability`: `"contact-center.open-messaging-ingress"`; `changesWorkflow`: `true`; `exposesSensitiveData`: `true`; `extension`: `true`; `providerObject`: `"genesysCloudOpenMessage"`; `providerOperation`: `"POST /api/v2/conversations/messages/{integrationId}/inbound/open/message"`; `sideEffect`: `true`; \}\] |
| <a id="property-packagename"></a> `packageName` | `"@cognidesk/integration-contact-center-genesys-cloud"` |
| <a id="property-privacynotes"></a> `privacyNotes` | \[`"Callbacks and Open Messaging ingress can include customer phone numbers, identity, channel metadata, message content, and routing data."`, `"OAuth tokens stay inside the SDK user's runtime configuration."`\] |
| <a id="property-provider"></a> `provider` | `"genesys-cloud"` |
| <a id="property-trustlevel"></a> `trustLevel` | `"official"` |
