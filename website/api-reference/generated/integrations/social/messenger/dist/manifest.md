# integrations/social/messenger/dist/manifest

## Variables

### messengerSocialOperationAliases

```ts
const messengerSocialOperationAliases: readonly ["messenger.webhook.parse", "messenger.message.send", "messenger.senderAction.send", "messenger.attachment.upload", "messenger.conversations.list", "messenger.conversationMessages.list", "messenger.page.read", "messenger.webhook-signature"];
```

***

### messengerSocialProviderClientSupportSlice

```ts
const messengerSocialProviderClientSupportSlice: {
  allowedOperations: readonly [{
     alias: "messenger.webhook.parse";
     checksum: "not-applicable-local-helper";
     id: "parseMessengerWebhook";
     source: "local-webhook-parser";
     target: "package.webhooks.parseMessengerWebhook";
   }, {
     alias: "messenger.message.send";
     checksum: "not-applicable-rest-adapter";
     id: "sendMessage";
     source: "provider-sdk";
     target: "facebookBusinessSdk.FacebookAdsApi.call";
   }, {
     alias: "messenger.senderAction.send";
     checksum: "not-applicable-rest-adapter";
     id: "sendSenderAction";
     source: "provider-sdk";
     target: "facebookBusinessSdk.FacebookAdsApi.call";
   }, {
     alias: "messenger.attachment.upload";
     checksum: "not-applicable-rest-adapter";
     id: "uploadAttachment";
     source: "provider-sdk";
     target: "facebookBusinessSdk.FacebookAdsApi.call";
   }, {
     alias: "messenger.conversations.list";
     checksum: "not-applicable-rest-adapter";
     id: "listConversations";
     source: "provider-sdk";
     target: "facebookBusinessSdk.FacebookAdsApi.call";
   }, {
     alias: "messenger.conversationMessages.list";
     checksum: "not-applicable-rest-adapter";
     id: "getConversationMessages";
     source: "provider-sdk";
     target: "facebookBusinessSdk.FacebookAdsApi.call";
   }, {
     alias: "messenger.page.read";
     checksum: "not-applicable-rest-adapter";
     id: "getPage";
     source: "provider-sdk";
     target: "facebookBusinessSdk.FacebookAdsApi.call";
   }, {
     alias: "messenger.webhook-signature";
     checksum: "not-applicable-local-helper";
     id: "validateMessengerWebhookSignature";
     source: "local-signature-helper";
     target: "package.webhooks.validateMessengerWebhookSignature";
  }];
  implementationStrategy: "provider-sdk-default-with-typed-domain-adapter";
  providerSdk: {
     license: "Platform License";
     package: "facebook-nodejs-business-sdk";
     runtimeCall: "FacebookAdsApi.call";
     runtimeEntry: "FacebookAdsApi";
     version: "24.0.1";
  };
  sdkDecision: "Meta's maintained facebook-nodejs-business-sdk@24.0.1 is provider-owned and exposes FacebookAdsApi.call(method, path, params). This package maps its strict Messenger support slice onto that SDK call surface by default; the package-owned REST adapter is retained only for explicit custom transport options such as fetch, graphApiBaseUrl, graphApiVersion, signal, timeoutMs, or retry.";
  verifiedAt: "2026-06-25";
};
```

#### Type Declaration

| Name | Type |
| ------ | ------ |
| <a id="property-allowedoperations"></a> `allowedOperations` | readonly \[\{ `alias`: `"messenger.webhook.parse"`; `checksum`: `"not-applicable-local-helper"`; `id`: `"parseMessengerWebhook"`; `source`: `"local-webhook-parser"`; `target`: `"package.webhooks.parseMessengerWebhook"`; \}, \{ `alias`: `"messenger.message.send"`; `checksum`: `"not-applicable-rest-adapter"`; `id`: `"sendMessage"`; `source`: `"provider-sdk"`; `target`: `"facebookBusinessSdk.FacebookAdsApi.call"`; \}, \{ `alias`: `"messenger.senderAction.send"`; `checksum`: `"not-applicable-rest-adapter"`; `id`: `"sendSenderAction"`; `source`: `"provider-sdk"`; `target`: `"facebookBusinessSdk.FacebookAdsApi.call"`; \}, \{ `alias`: `"messenger.attachment.upload"`; `checksum`: `"not-applicable-rest-adapter"`; `id`: `"uploadAttachment"`; `source`: `"provider-sdk"`; `target`: `"facebookBusinessSdk.FacebookAdsApi.call"`; \}, \{ `alias`: `"messenger.conversations.list"`; `checksum`: `"not-applicable-rest-adapter"`; `id`: `"listConversations"`; `source`: `"provider-sdk"`; `target`: `"facebookBusinessSdk.FacebookAdsApi.call"`; \}, \{ `alias`: `"messenger.conversationMessages.list"`; `checksum`: `"not-applicable-rest-adapter"`; `id`: `"getConversationMessages"`; `source`: `"provider-sdk"`; `target`: `"facebookBusinessSdk.FacebookAdsApi.call"`; \}, \{ `alias`: `"messenger.page.read"`; `checksum`: `"not-applicable-rest-adapter"`; `id`: `"getPage"`; `source`: `"provider-sdk"`; `target`: `"facebookBusinessSdk.FacebookAdsApi.call"`; \}, \{ `alias`: `"messenger.webhook-signature"`; `checksum`: `"not-applicable-local-helper"`; `id`: `"validateMessengerWebhookSignature"`; `source`: `"local-signature-helper"`; `target`: `"package.webhooks.validateMessengerWebhookSignature"`; \}\] |
| <a id="property-implementationstrategy"></a> `implementationStrategy` | `"provider-sdk-default-with-typed-domain-adapter"` |
| <a id="property-providersdk"></a> `providerSdk` | \{ `license`: `"Platform License"`; `package`: `"facebook-nodejs-business-sdk"`; `runtimeCall`: `"FacebookAdsApi.call"`; `runtimeEntry`: `"FacebookAdsApi"`; `version`: `"24.0.1"`; \} |
| `providerSdk.license` | `"Platform License"` |
| `providerSdk.package` | `"facebook-nodejs-business-sdk"` |
| `providerSdk.runtimeCall` | `"FacebookAdsApi.call"` |
| `providerSdk.runtimeEntry` | `"FacebookAdsApi"` |
| `providerSdk.version` | `"24.0.1"` |
| <a id="property-sdkdecision"></a> `sdkDecision` | `"Meta's maintained facebook-nodejs-business-sdk@24.0.1 is provider-owned and exposes FacebookAdsApi.call(method, path, params). This package maps its strict Messenger support slice onto that SDK call surface by default; the package-owned REST adapter is retained only for explicit custom transport options such as fetch, graphApiBaseUrl, graphApiVersion, signal, timeoutMs, or retry."` |
| <a id="property-verifiedat"></a> `verifiedAt` | `"2026-06-25"` |

***

### messengerSocialProviderManifest

```ts
const messengerSocialProviderManifest: {
  capabilities: {
     audiences?: ("customer-facing" | "mixed" | "internal-support")[];
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
  channelAudiences: ("customer-facing" | "mixed" | "internal-support")[];
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
     | "bidirectional"
     | "inbound-only"
    | "outbound-only")[];
  id: string;
  limitations: string[];
  maintainers: {
     name: string;
     type: "official" | "community" | "unknown" | "partner";
     url?: string;
  }[];
  metadata?: Record<string, unknown>;
  name: string;
  operations: {
     alias: string;
     audience?: "customer-facing" | "mixed" | "internal-support";
     audiences?: ("customer-facing" | "mixed" | "internal-support")[];
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
  trustLevel: "official" | "community" | "verified" | "experimental";
} & {
  capabilities: readonly [{
     audiences: readonly ["customer-facing", "mixed"];
     capability: "receive";
     description: "Validates and parses Messenger Platform webhook payloads after the SDK user's Page is subscribed to the messages webhook.";
     exposesSensitiveData: true;
     label: "Receive Messenger webhooks";
     providerObjects: readonly [{
        kind: "messengerWebhook";
        label: "Messenger Webhook";
      }, {
        kind: "messengerMessage";
        label: "Messenger Message";
     }];
     requiresCredential: true;
   }, {
     audiences: readonly ["customer-facing"];
     capability: "send";
     description: "Sends Messenger Platform messages inside Meta's 24-hour standard messaging window or with SDK-user-approved MESSAGE_TAG non-promotional policy where permitted.";
     exposesSensitiveData: true;
     label: "Send Messenger messages";
     providerObjects: readonly [{
        kind: "messengerMessage";
        label: "Messenger Message";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     audiences: readonly ["customer-facing", "mixed"];
     capability: "draft";
     description: "Builds text, attachment, quick reply, sender action, and tag payloads for SDK-user approval workflows.";
     exposesSensitiveData: true;
     label: "Build Messenger payloads";
     providerObjects: readonly [{
        kind: "messengerDraft";
        label: "Messenger Draft";
     }];
   }, {
     audiences: readonly ["customer-facing", "mixed"];
     capability: "thread";
     description: "Reads Messenger conversation and message metadata through the configured Meta SDK-backed Graph adapter or provider client with SDK-user-governed access and retention.";
     exposesSensitiveData: true;
     label: "Use Messenger conversations";
     providerObjects: readonly [{
        kind: "messengerConversation";
        label: "Messenger Conversation";
      }, {
        kind: "messengerMessage";
        label: "Messenger Message";
      }, {
        kind: "messengerPage";
        label: "Messenger Page";
     }];
     requiresCredential: true;
   }, {
     audiences: readonly ["customer-facing", "mixed"];
     capability: "read-provider-object";
     description: "Reads Messenger conversation messages and metadata through the configured Meta SDK-backed Graph adapter or provider client.";
     exposesSensitiveData: true;
     label: "Read Messenger conversations";
     providerObjects: readonly [{
        kind: "messengerConversation";
        label: "Messenger Conversation";
      }, {
        kind: "messengerMessage";
        label: "Messenger Message";
     }];
     requiresCredential: true;
   }, {
     audiences: readonly ["customer-facing", "mixed"];
     capability: "search-provider-object";
     description: "Lists Messenger Page conversations through the configured Meta SDK-backed Graph adapter or provider client with SDK-user-supplied filters such as user ID, fields, limits, and cursors.";
     exposesSensitiveData: true;
     label: "List Messenger conversations";
     providerObjects: readonly [{
        kind: "messengerConversation";
        label: "Messenger Conversation";
     }];
     requiresCredential: true;
   }, {
     audiences: readonly ["customer-facing", "mixed"];
     capability: "media";
     description: "Sends attachment payloads and exposes inbound attachment metadata under SDK-user media policy.";
     exposesSensitiveData: true;
     label: "Use Messenger attachments";
     providerObjects: readonly [{
        kind: "messengerAttachment";
        label: "Messenger Attachment";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     audiences: readonly ["internal-support"];
     capability: "social.webhook-signature";
     description: "Validates X-Hub-Signature-256 webhook signatures with the SDK user's Meta app secret.";
     exposesSensitiveData: true;
     extension: true;
     label: "Validate Meta webhook signatures";
     providerObjects: readonly [{
        kind: "messengerSignedWebhook";
        label: "Messenger Signed Webhook";
     }];
     requiresCredential: true;
  }];
  category: "social";
  channelAudiences: readonly ["customer-facing", "mixed"];
  coverage: {
     evidence: readonly [{
        label: "Messenger webhooks";
        url: "https://developers.facebook.com/documentation/business-messaging/messenger-platform/webhooks";
      }, {
        label: "Page subscribed apps";
        url: "https://developers.facebook.com/docs/graph-api/reference/page/subscribed_apps/";
      }, {
        label: "Messenger Send API";
        url: "https://developers.facebook.com/docs/messenger-platform/send-messages/message-tags";
      }, {
        label: "Messenger sender actions";
        url: "https://developers.facebook.com/docs/messenger-platform/send-messages/sender-actions";
      }, {
        label: "Messenger attachment upload";
        url: "https://developers.facebook.com/docs/messenger-platform/reference/attachment-upload-api";
      }, {
        label: "Messenger conversation routing";
        url: "https://developers.facebook.com/documentation/business-messaging/messenger-platform/conversation-routing";
      }, {
        label: "Meta Business SDK for NodeJS";
        url: "https://github.com/facebook/facebook-nodejs-business-sdk";
     }];
     notes: readonly ["Coverage is typed for selected Messenger Platform support workflows: Page messages send, text payloads, sender actions, attachment payload/upload helpers, conversation/message reads, Page readiness, webhook challenge handling, and X-Hub-Signature-256 validation.", "Runtime provider operations use Meta's facebook-nodejs-business-sdk when credentials are configured; hosts may inject a Messenger/Meta provider client override.", "Meta's current Messenger routing surface is Conversation Routing; deprecated Handover Protocol thread-control helpers are not advertised as a current handoff capability by this package.", "This is not full Messenger Platform coverage; Messenger profile, persistent menu, personas, discovery and engagement tools, account linking, NLP, analytics, marketing messages, conversation routing configuration, and broader Page/Graph administration remain outside this adapter."];
     scope: "support-workflow-subset";
  };
  credentialRequirements: readonly [{
     description: "Optional SDK-user-owned provider client implementing MessengerSocialProviderClient for Messenger Platform and selected Meta Graph operations.";
     id: "messenger-provider-client";
     label: "Messenger/Meta provider client override";
     metadata: {
        defaultClientPolicy: "facebook-nodejs-business-sdk-when-configured";
        importPolicy: "provider-client-override-supported";
        interface: "MessengerSocialProviderClient";
     };
     required: false;
   }, {
     description: "Server-side Meta Page access token used by the Meta SDK-backed Graph adapter or an injected Messenger/Meta provider client.";
     id: "messenger-page-access-token";
     label: "Messenger Page access token";
     metadata: {
        scopeKind: "provider-permission-labels";
     };
     required: true;
     scopes: readonly ["pages_messaging", "pages_show_list", "pages_read_engagement", "pages_manage_metadata"];
   }, {
     description: "Page ID that owns the Messenger inbox and conversation graph.";
     id: "messenger-page-id";
     label: "Facebook Page ID";
     required: true;
   }, {
     description: "Server-side app secret used to validate X-Hub-Signature-256 webhook deliveries.";
     id: "messenger-app-secret";
     label: "Meta app secret";
     required: true;
   }, {
     description: "SDK-user-owned token checked during Meta webhook endpoint verification.";
     id: "messenger-webhook-verify-token";
     label: "Webhook verify token";
     required: false;
   }, {
     description: "SDK-user-confirmed Page subscribed_apps configuration for Messenger messages webhooks.";
     id: "messenger-page-webhook-subscription";
     label: "Messenger Page messages webhook subscription";
     required: false;
  }];
  directions: readonly ["receive-only", "send-only", "bidirectional"];
  id: "social.messenger";
  limitations: readonly ["Available operations depend on the SDK user's Meta app mode, Page connection, permissions, Page access token, webhook subscriptions, and messaging window rules.", "Meta no longer supports Handover Protocol as the normal Messenger routing model; SDK users should configure Conversation Routing outside this adapter, and the thread-control client methods are deprecated provider escape hatches only.", "Consent, outbound-contact policy, human escalation, attachment retention, redaction, and deletion behavior remain SDK-user configuration.", "This package provides Messenger payload/webhook helpers and does not choose default automation, promotional messaging, retry, HTTP transport, or rate-limit policy."];
  maintainers: readonly [{
     name: "Cognidesk";
     type: "official";
  }];
  metadata: {
     apiCoverage: {
        checkedAt: "2026-06-25";
        fullMetaGraphCoverage: false;
        fullProviderApi: false;
        generatedFromOfficialSpec: false;
        implementedOperationCount: 8;
        machineReadableSpecStatus: "No official public complete Messenger Platform/Graph OpenAPI spec was found in facebook/openapi during this audit.";
        operationCatalog: "docs/provider-coverage/messenger-platform-graph-selected-api-2026-06-18.operations.json";
        selectedOperationCount: 8;
     };
     channelCoverage: {
        attachments: "facebook-nodejs-business-sdk-call";
        conversationRouting: "provider-supported-not-typed";
        conversations: "facebook-nodejs-business-sdk-call";
        customTransportFallback: "package-owned-rest-adapter";
        handoverProtocolThreadControl: "provider-supported-deprecated-typed-thread-control";
        messages: "facebook-nodejs-business-sdk-call";
        pageReadiness: "facebook-nodejs-business-sdk-call";
        senderActions: "facebook-nodejs-business-sdk-call";
        webhooks: "typed-challenge-verify-parse";
     };
     docs: "https://developers.facebook.com/docs/messenger-platform";
     implementation: {
        allowedOperations: readonly [{
           alias: "messenger.webhook.parse";
           checksum: "not-applicable-local-helper";
           id: "parseMessengerWebhook";
           source: "local-webhook-parser";
           target: "package.webhooks.parseMessengerWebhook";
         }, {
           alias: "messenger.message.send";
           checksum: "not-applicable-rest-adapter";
           id: "sendMessage";
           source: "provider-sdk";
           target: "facebookBusinessSdk.FacebookAdsApi.call";
         }, {
           alias: "messenger.senderAction.send";
           checksum: "not-applicable-rest-adapter";
           id: "sendSenderAction";
           source: "provider-sdk";
           target: "facebookBusinessSdk.FacebookAdsApi.call";
         }, {
           alias: "messenger.attachment.upload";
           checksum: "not-applicable-rest-adapter";
           id: "uploadAttachment";
           source: "provider-sdk";
           target: "facebookBusinessSdk.FacebookAdsApi.call";
         }, {
           alias: "messenger.conversations.list";
           checksum: "not-applicable-rest-adapter";
           id: "listConversations";
           source: "provider-sdk";
           target: "facebookBusinessSdk.FacebookAdsApi.call";
         }, {
           alias: "messenger.conversationMessages.list";
           checksum: "not-applicable-rest-adapter";
           id: "getConversationMessages";
           source: "provider-sdk";
           target: "facebookBusinessSdk.FacebookAdsApi.call";
         }, {
           alias: "messenger.page.read";
           checksum: "not-applicable-rest-adapter";
           id: "getPage";
           source: "provider-sdk";
           target: "facebookBusinessSdk.FacebookAdsApi.call";
         }, {
           alias: "messenger.webhook-signature";
           checksum: "not-applicable-local-helper";
           id: "validateMessengerWebhookSignature";
           source: "local-signature-helper";
           target: "package.webhooks.validateMessengerWebhookSignature";
        }];
        implementationStrategy: "provider-sdk-default-with-typed-domain-adapter";
        providerSdk: {
           license: "Platform License";
           package: "facebook-nodejs-business-sdk";
           runtimeCall: "FacebookAdsApi.call";
           runtimeEntry: "FacebookAdsApi";
           version: "24.0.1";
        };
        sdkDecision: "Meta's maintained facebook-nodejs-business-sdk@24.0.1 is provider-owned and exposes FacebookAdsApi.call(method, path, params). This package maps its strict Messenger support slice onto that SDK call surface by default; the package-owned REST adapter is retained only for explicit custom transport options such as fetch, graphApiBaseUrl, graphApiVersion, signal, timeoutMs, or retry.";
        verifiedAt: "2026-06-25";
     };
     manifestOnlySafe: true;
     providerClient: {
        customTransportFallbackPolicy: "package-owned-rest-adapter-for-fetch-base-version-signal-timeout-retry";
        defaultClientPolicy: "facebook-nodejs-business-sdk-when-configured";
        importPolicy: "provider-client-override-supported";
        interface: "MessengerSocialProviderClient";
        package: "facebook-nodejs-business-sdk-or-host-provided";
     };
  };
  name: "Facebook Messenger";
  operations: readonly [{
     alias: "messenger.webhook.parse";
     audiences: readonly ["customer-facing", "mixed"];
     capability: "receive";
     description: "Validate and parse an inbound Messenger webhook request.";
     exposesSensitiveData: true;
     extension: true;
     label: "Parse Messenger webhook";
     providerObject: "messengerWebhook";
     providerOperation: "parseMessengerWebhook";
     requiresCredential: true;
   }, {
     alias: "messenger.message.send";
     audiences: readonly ["customer-facing"];
     capability: "send";
     description: "Send a Messenger Platform message through the configured Page.";
     exposesSensitiveData: true;
     extension: true;
     externallyVisible: true;
     label: "Send Messenger message";
     providerObject: "messengerMessage";
     providerOperation: "sendMessage";
     requiresApproval: true;
     requiresCredential: true;
     sideEffect: true;
   }, {
     alias: "messenger.senderAction.send";
     audiences: readonly ["customer-facing"];
     capability: "send";
     description: "Send Messenger sender actions such as typing indicators or mark-seen.";
     extension: true;
     externallyVisible: true;
     label: "Send Messenger sender action";
     providerObject: "messengerConversation";
     providerOperation: "sendSenderAction";
     requiresCredential: true;
     sideEffect: true;
   }, {
     alias: "messenger.attachment.upload";
     audiences: readonly ["customer-facing", "mixed"];
     capability: "media";
     description: "Upload reusable attachment payloads for Messenger sends.";
     exposesSensitiveData: true;
     extension: true;
     externallyVisible: true;
     label: "Upload Messenger attachment";
     providerObject: "messengerAttachment";
     providerOperation: "uploadAttachment";
     requiresApproval: true;
     requiresCredential: true;
     sideEffect: true;
   }, {
     alias: "messenger.conversations.list";
     audiences: readonly ["customer-facing", "mixed"];
     capability: "search-provider-object";
     description: "List Messenger Page conversations with SDK-user-supplied filters.";
     exposesSensitiveData: true;
     extension: true;
     label: "List Messenger conversations";
     providerObject: "messengerConversation";
     providerOperation: "listConversations";
     requiresCredential: true;
   }, {
     alias: "messenger.conversationMessages.list";
     audiences: readonly ["customer-facing", "mixed"];
     capability: "read-provider-object";
     description: "Read messages for a Messenger conversation.";
     exposesSensitiveData: true;
     extension: true;
     label: "Read Messenger conversation messages";
     providerObject: "messengerMessage";
     providerOperation: "getConversationMessages";
     requiresCredential: true;
   }, {
     alias: "messenger.page.read";
     audiences: readonly ["internal-support", "mixed"];
     capability: "read-provider-object";
     description: "Read configured Facebook Page metadata for readiness diagnostics.";
     extension: true;
     label: "Read Messenger Page";
     providerObject: "messengerPage";
     providerOperation: "getPage";
     requiresCredential: true;
   }, {
     alias: "messenger.webhook-signature";
     audiences: readonly ["internal-support"];
     capability: "social.webhook-signature";
     description: "Validate Meta X-Hub-Signature-256 for Messenger webhook delivery.";
     exposesSensitiveData: true;
     extension: true;
     label: "Validate Messenger webhook signature";
     providerObject: "messengerSignedWebhook";
     providerOperation: "validateMessengerWebhookSignature";
     requiresCredential: true;
  }];
  packageName: "@cognidesk/integration-social-messenger";
  privacyNotes: readonly ["Messenger PSIDs, profile names, message text, attachments, conversation metadata, and webhook payloads can contain customer data.", "Meta Page access tokens, app secrets, and webhook verify tokens stay server-side and are represented in Studio only as readiness state."];
  provider: "messenger";
  trustLevel: "official";
};
```

#### Type Declaration

| Name | Type |
| ------ | ------ |
| `capabilities` | \{ `audiences?`: (`"customer-facing"` \| `"mixed"` \| `"internal-support"`)[]; `capability`: `string`; `changesWorkflow?`: `boolean`; `description?`: `string`; `exposesSensitiveData?`: `boolean`; `extension?`: `boolean`; `label?`: `string`; `metadata?`: `Record`\<`string`, `unknown`\>; `providerObjects?`: \{ `description?`: `string`; `kind`: `string`; `label?`: `string`; `metadata?`: `Record`\<`string`, `unknown`\>; `schemaName?`: `string`; \}[]; `requiresCredential?`: `boolean`; `sideEffect?`: `boolean`; \}[] |
| `category` | `string` |
| `channelAudiences` | (`"customer-facing"` \| `"mixed"` \| `"internal-support"`)[] |
| `coverage` | \{ `evidence`: \{ `label`: `string`; `url?`: `string`; \}[]; `notes`: `string`[]; `scope`: \| `"support-workflow-subset"` \| `"provider-api-subset"` \| `"connector-required"` \| `"local-protocol"` \| `"full-provider-api"`; \} |
| `coverage.evidence` | \{ `label`: `string`; `url?`: `string`; \}[] |
| `coverage.notes` | `string`[] |
| `coverage.scope` | \| `"support-workflow-subset"` \| `"provider-api-subset"` \| `"connector-required"` \| `"local-protocol"` \| `"full-provider-api"` |
| `credentialRequirements` | \{ `description?`: `string`; `id`: `string`; `label?`: `string`; `metadata?`: `Record`\<`string`, `unknown`\>; `required`: `boolean`; `scopes`: `string`[]; \}[] |
| `directions` | ( \| `"receive-only"` \| `"send-only"` \| `"bidirectional"` \| `"inbound-only"` \| `"outbound-only"`)[] |
| `id` | `string` |
| `limitations` | `string`[] |
| `maintainers` | \{ `name`: `string`; `type`: `"official"` \| `"community"` \| `"unknown"` \| `"partner"`; `url?`: `string`; \}[] |
| `metadata?` | `Record`\<`string`, `unknown`\> |
| `name` | `string` |
| `operations` | \{ `alias`: `string`; `audience?`: `"customer-facing"` \| `"mixed"` \| `"internal-support"`; `audiences?`: (`"customer-facing"` \| `"mixed"` \| `"internal-support"`)[]; `capability`: `string`; `changesWorkflow?`: `boolean`; `description?`: `string`; `exposesSensitiveData?`: `boolean`; `extension`: `boolean`; `externallyVisible?`: `boolean`; `inputSchema?`: `unknown`; `inputSchemaName?`: `string`; `inputSchemaRef?`: `string`; `label?`: `string`; `metadata?`: `Record`\<`string`, `unknown`\>; `outputSchema?`: `unknown`; `outputSchemaName?`: `string`; `outputSchemaRef?`: `string`; `providerObject?`: `string`; `providerObjects?`: \{ `description?`: `string`; `kind`: `string`; `label?`: `string`; `metadata?`: `Record`\<`string`, `unknown`\>; `schemaName?`: `string`; \}[]; `providerOperation?`: `string`; `requiredPolicyIds?`: `string`[]; `requiresApproval?`: `boolean`; `requiresCredential?`: `boolean`; `sideEffect?`: `boolean`; \}[] |
| `packageName` | `string` |
| `privacyNotes` | `string`[] |
| `provider` | `string` |
| `trustLevel` | `"official"` \| `"community"` \| `"verified"` \| `"experimental"` |

#### Type Declaration

| Name | Type |
| ------ | ------ |
| `capabilities` | readonly \[\{ `audiences`: readonly \[`"customer-facing"`, `"mixed"`\]; `capability`: `"receive"`; `description`: `"Validates and parses Messenger Platform webhook payloads after the SDK user's Page is subscribed to the messages webhook."`; `exposesSensitiveData`: `true`; `label`: `"Receive Messenger webhooks"`; `providerObjects`: readonly \[\{ `kind`: `"messengerWebhook"`; `label`: `"Messenger Webhook"`; \}, \{ `kind`: `"messengerMessage"`; `label`: `"Messenger Message"`; \}\]; `requiresCredential`: `true`; \}, \{ `audiences`: readonly \[`"customer-facing"`\]; `capability`: `"send"`; `description`: `"Sends Messenger Platform messages inside Meta's 24-hour standard messaging window or with SDK-user-approved MESSAGE_TAG non-promotional policy where permitted."`; `exposesSensitiveData`: `true`; `label`: `"Send Messenger messages"`; `providerObjects`: readonly \[\{ `kind`: `"messengerMessage"`; `label`: `"Messenger Message"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `audiences`: readonly \[`"customer-facing"`, `"mixed"`\]; `capability`: `"draft"`; `description`: `"Builds text, attachment, quick reply, sender action, and tag payloads for SDK-user approval workflows."`; `exposesSensitiveData`: `true`; `label`: `"Build Messenger payloads"`; `providerObjects`: readonly \[\{ `kind`: `"messengerDraft"`; `label`: `"Messenger Draft"`; \}\]; \}, \{ `audiences`: readonly \[`"customer-facing"`, `"mixed"`\]; `capability`: `"thread"`; `description`: `"Reads Messenger conversation and message metadata through the configured Meta SDK-backed Graph adapter or provider client with SDK-user-governed access and retention."`; `exposesSensitiveData`: `true`; `label`: `"Use Messenger conversations"`; `providerObjects`: readonly \[\{ `kind`: `"messengerConversation"`; `label`: `"Messenger Conversation"`; \}, \{ `kind`: `"messengerMessage"`; `label`: `"Messenger Message"`; \}, \{ `kind`: `"messengerPage"`; `label`: `"Messenger Page"`; \}\]; `requiresCredential`: `true`; \}, \{ `audiences`: readonly \[`"customer-facing"`, `"mixed"`\]; `capability`: `"read-provider-object"`; `description`: `"Reads Messenger conversation messages and metadata through the configured Meta SDK-backed Graph adapter or provider client."`; `exposesSensitiveData`: `true`; `label`: `"Read Messenger conversations"`; `providerObjects`: readonly \[\{ `kind`: `"messengerConversation"`; `label`: `"Messenger Conversation"`; \}, \{ `kind`: `"messengerMessage"`; `label`: `"Messenger Message"`; \}\]; `requiresCredential`: `true`; \}, \{ `audiences`: readonly \[`"customer-facing"`, `"mixed"`\]; `capability`: `"search-provider-object"`; `description`: `"Lists Messenger Page conversations through the configured Meta SDK-backed Graph adapter or provider client with SDK-user-supplied filters such as user ID, fields, limits, and cursors."`; `exposesSensitiveData`: `true`; `label`: `"List Messenger conversations"`; `providerObjects`: readonly \[\{ `kind`: `"messengerConversation"`; `label`: `"Messenger Conversation"`; \}\]; `requiresCredential`: `true`; \}, \{ `audiences`: readonly \[`"customer-facing"`, `"mixed"`\]; `capability`: `"media"`; `description`: `"Sends attachment payloads and exposes inbound attachment metadata under SDK-user media policy."`; `exposesSensitiveData`: `true`; `label`: `"Use Messenger attachments"`; `providerObjects`: readonly \[\{ `kind`: `"messengerAttachment"`; `label`: `"Messenger Attachment"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `audiences`: readonly \[`"internal-support"`\]; `capability`: `"social.webhook-signature"`; `description`: `"Validates X-Hub-Signature-256 webhook signatures with the SDK user's Meta app secret."`; `exposesSensitiveData`: `true`; `extension`: `true`; `label`: `"Validate Meta webhook signatures"`; `providerObjects`: readonly \[\{ `kind`: `"messengerSignedWebhook"`; `label`: `"Messenger Signed Webhook"`; \}\]; `requiresCredential`: `true`; \}\] |
| `category` | `"social"` |
| `channelAudiences` | readonly \[`"customer-facing"`, `"mixed"`\] |
| `coverage` | \{ `evidence`: readonly \[\{ `label`: `"Messenger webhooks"`; `url`: `"https://developers.facebook.com/documentation/business-messaging/messenger-platform/webhooks"`; \}, \{ `label`: `"Page subscribed apps"`; `url`: `"https://developers.facebook.com/docs/graph-api/reference/page/subscribed_apps/"`; \}, \{ `label`: `"Messenger Send API"`; `url`: `"https://developers.facebook.com/docs/messenger-platform/send-messages/message-tags"`; \}, \{ `label`: `"Messenger sender actions"`; `url`: `"https://developers.facebook.com/docs/messenger-platform/send-messages/sender-actions"`; \}, \{ `label`: `"Messenger attachment upload"`; `url`: `"https://developers.facebook.com/docs/messenger-platform/reference/attachment-upload-api"`; \}, \{ `label`: `"Messenger conversation routing"`; `url`: `"https://developers.facebook.com/documentation/business-messaging/messenger-platform/conversation-routing"`; \}, \{ `label`: `"Meta Business SDK for NodeJS"`; `url`: `"https://github.com/facebook/facebook-nodejs-business-sdk"`; \}\]; `notes`: readonly \[`"Coverage is typed for selected Messenger Platform support workflows: Page messages send, text payloads, sender actions, attachment payload/upload helpers, conversation/message reads, Page readiness, webhook challenge handling, and X-Hub-Signature-256 validation."`, `"Runtime provider operations use Meta's facebook-nodejs-business-sdk when credentials are configured; hosts may inject a Messenger/Meta provider client override."`, `"Meta's current Messenger routing surface is Conversation Routing; deprecated Handover Protocol thread-control helpers are not advertised as a current handoff capability by this package."`, `"This is not full Messenger Platform coverage; Messenger profile, persistent menu, personas, discovery and engagement tools, account linking, NLP, analytics, marketing messages, conversation routing configuration, and broader Page/Graph administration remain outside this adapter."`\]; `scope`: `"support-workflow-subset"`; \} |
| `coverage.evidence` | readonly \[\{ `label`: `"Messenger webhooks"`; `url`: `"https://developers.facebook.com/documentation/business-messaging/messenger-platform/webhooks"`; \}, \{ `label`: `"Page subscribed apps"`; `url`: `"https://developers.facebook.com/docs/graph-api/reference/page/subscribed_apps/"`; \}, \{ `label`: `"Messenger Send API"`; `url`: `"https://developers.facebook.com/docs/messenger-platform/send-messages/message-tags"`; \}, \{ `label`: `"Messenger sender actions"`; `url`: `"https://developers.facebook.com/docs/messenger-platform/send-messages/sender-actions"`; \}, \{ `label`: `"Messenger attachment upload"`; `url`: `"https://developers.facebook.com/docs/messenger-platform/reference/attachment-upload-api"`; \}, \{ `label`: `"Messenger conversation routing"`; `url`: `"https://developers.facebook.com/documentation/business-messaging/messenger-platform/conversation-routing"`; \}, \{ `label`: `"Meta Business SDK for NodeJS"`; `url`: `"https://github.com/facebook/facebook-nodejs-business-sdk"`; \}\] |
| `coverage.notes` | readonly \[`"Coverage is typed for selected Messenger Platform support workflows: Page messages send, text payloads, sender actions, attachment payload/upload helpers, conversation/message reads, Page readiness, webhook challenge handling, and X-Hub-Signature-256 validation."`, `"Runtime provider operations use Meta's facebook-nodejs-business-sdk when credentials are configured; hosts may inject a Messenger/Meta provider client override."`, `"Meta's current Messenger routing surface is Conversation Routing; deprecated Handover Protocol thread-control helpers are not advertised as a current handoff capability by this package."`, `"This is not full Messenger Platform coverage; Messenger profile, persistent menu, personas, discovery and engagement tools, account linking, NLP, analytics, marketing messages, conversation routing configuration, and broader Page/Graph administration remain outside this adapter."`\] |
| `coverage.scope` | `"support-workflow-subset"` |
| `credentialRequirements` | readonly \[\{ `description`: `"Optional SDK-user-owned provider client implementing MessengerSocialProviderClient for Messenger Platform and selected Meta Graph operations."`; `id`: `"messenger-provider-client"`; `label`: `"Messenger/Meta provider client override"`; `metadata`: \{ `defaultClientPolicy`: `"facebook-nodejs-business-sdk-when-configured"`; `importPolicy`: `"provider-client-override-supported"`; `interface`: `"MessengerSocialProviderClient"`; \}; `required`: `false`; \}, \{ `description`: `"Server-side Meta Page access token used by the Meta SDK-backed Graph adapter or an injected Messenger/Meta provider client."`; `id`: `"messenger-page-access-token"`; `label`: `"Messenger Page access token"`; `metadata`: \{ `scopeKind`: `"provider-permission-labels"`; \}; `required`: `true`; `scopes`: readonly \[`"pages_messaging"`, `"pages_show_list"`, `"pages_read_engagement"`, `"pages_manage_metadata"`\]; \}, \{ `description`: `"Page ID that owns the Messenger inbox and conversation graph."`; `id`: `"messenger-page-id"`; `label`: `"Facebook Page ID"`; `required`: `true`; \}, \{ `description`: `"Server-side app secret used to validate X-Hub-Signature-256 webhook deliveries."`; `id`: `"messenger-app-secret"`; `label`: `"Meta app secret"`; `required`: `true`; \}, \{ `description`: `"SDK-user-owned token checked during Meta webhook endpoint verification."`; `id`: `"messenger-webhook-verify-token"`; `label`: `"Webhook verify token"`; `required`: `false`; \}, \{ `description`: `"SDK-user-confirmed Page subscribed_apps configuration for Messenger messages webhooks."`; `id`: `"messenger-page-webhook-subscription"`; `label`: `"Messenger Page messages webhook subscription"`; `required`: `false`; \}\] |
| `directions` | readonly \[`"receive-only"`, `"send-only"`, `"bidirectional"`\] |
| `id` | `"social.messenger"` |
| `limitations` | readonly \[`"Available operations depend on the SDK user's Meta app mode, Page connection, permissions, Page access token, webhook subscriptions, and messaging window rules."`, `"Meta no longer supports Handover Protocol as the normal Messenger routing model; SDK users should configure Conversation Routing outside this adapter, and the thread-control client methods are deprecated provider escape hatches only."`, `"Consent, outbound-contact policy, human escalation, attachment retention, redaction, and deletion behavior remain SDK-user configuration."`, `"This package provides Messenger payload/webhook helpers and does not choose default automation, promotional messaging, retry, HTTP transport, or rate-limit policy."`\] |
| `maintainers` | readonly \[\{ `name`: `"Cognidesk"`; `type`: `"official"`; \}\] |
| `metadata` | \{ `apiCoverage`: \{ `checkedAt`: `"2026-06-25"`; `fullMetaGraphCoverage`: `false`; `fullProviderApi`: `false`; `generatedFromOfficialSpec`: `false`; `implementedOperationCount`: `8`; `machineReadableSpecStatus`: `"No official public complete Messenger Platform/Graph OpenAPI spec was found in facebook/openapi during this audit."`; `operationCatalog`: `"docs/provider-coverage/messenger-platform-graph-selected-api-2026-06-18.operations.json"`; `selectedOperationCount`: `8`; \}; `channelCoverage`: \{ `attachments`: `"facebook-nodejs-business-sdk-call"`; `conversationRouting`: `"provider-supported-not-typed"`; `conversations`: `"facebook-nodejs-business-sdk-call"`; `customTransportFallback`: `"package-owned-rest-adapter"`; `handoverProtocolThreadControl`: `"provider-supported-deprecated-typed-thread-control"`; `messages`: `"facebook-nodejs-business-sdk-call"`; `pageReadiness`: `"facebook-nodejs-business-sdk-call"`; `senderActions`: `"facebook-nodejs-business-sdk-call"`; `webhooks`: `"typed-challenge-verify-parse"`; \}; `docs`: `"https://developers.facebook.com/docs/messenger-platform"`; `implementation`: \{ `allowedOperations`: readonly \[\{ `alias`: `"messenger.webhook.parse"`; `checksum`: `"not-applicable-local-helper"`; `id`: `"parseMessengerWebhook"`; `source`: `"local-webhook-parser"`; `target`: `"package.webhooks.parseMessengerWebhook"`; \}, \{ `alias`: `"messenger.message.send"`; `checksum`: `"not-applicable-rest-adapter"`; `id`: `"sendMessage"`; `source`: `"provider-sdk"`; `target`: `"facebookBusinessSdk.FacebookAdsApi.call"`; \}, \{ `alias`: `"messenger.senderAction.send"`; `checksum`: `"not-applicable-rest-adapter"`; `id`: `"sendSenderAction"`; `source`: `"provider-sdk"`; `target`: `"facebookBusinessSdk.FacebookAdsApi.call"`; \}, \{ `alias`: `"messenger.attachment.upload"`; `checksum`: `"not-applicable-rest-adapter"`; `id`: `"uploadAttachment"`; `source`: `"provider-sdk"`; `target`: `"facebookBusinessSdk.FacebookAdsApi.call"`; \}, \{ `alias`: `"messenger.conversations.list"`; `checksum`: `"not-applicable-rest-adapter"`; `id`: `"listConversations"`; `source`: `"provider-sdk"`; `target`: `"facebookBusinessSdk.FacebookAdsApi.call"`; \}, \{ `alias`: `"messenger.conversationMessages.list"`; `checksum`: `"not-applicable-rest-adapter"`; `id`: `"getConversationMessages"`; `source`: `"provider-sdk"`; `target`: `"facebookBusinessSdk.FacebookAdsApi.call"`; \}, \{ `alias`: `"messenger.page.read"`; `checksum`: `"not-applicable-rest-adapter"`; `id`: `"getPage"`; `source`: `"provider-sdk"`; `target`: `"facebookBusinessSdk.FacebookAdsApi.call"`; \}, \{ `alias`: `"messenger.webhook-signature"`; `checksum`: `"not-applicable-local-helper"`; `id`: `"validateMessengerWebhookSignature"`; `source`: `"local-signature-helper"`; `target`: `"package.webhooks.validateMessengerWebhookSignature"`; \}\]; `implementationStrategy`: `"provider-sdk-default-with-typed-domain-adapter"`; `providerSdk`: \{ `license`: `"Platform License"`; `package`: `"facebook-nodejs-business-sdk"`; `runtimeCall`: `"FacebookAdsApi.call"`; `runtimeEntry`: `"FacebookAdsApi"`; `version`: `"24.0.1"`; \}; `sdkDecision`: `"Meta's maintained facebook-nodejs-business-sdk@24.0.1 is provider-owned and exposes FacebookAdsApi.call(method, path, params). This package maps its strict Messenger support slice onto that SDK call surface by default; the package-owned REST adapter is retained only for explicit custom transport options such as fetch, graphApiBaseUrl, graphApiVersion, signal, timeoutMs, or retry."`; `verifiedAt`: `"2026-06-25"`; \}; `manifestOnlySafe`: `true`; `providerClient`: \{ `customTransportFallbackPolicy`: `"package-owned-rest-adapter-for-fetch-base-version-signal-timeout-retry"`; `defaultClientPolicy`: `"facebook-nodejs-business-sdk-when-configured"`; `importPolicy`: `"provider-client-override-supported"`; `interface`: `"MessengerSocialProviderClient"`; `package`: `"facebook-nodejs-business-sdk-or-host-provided"`; \}; \} |
| `metadata.apiCoverage` | \{ `checkedAt`: `"2026-06-25"`; `fullMetaGraphCoverage`: `false`; `fullProviderApi`: `false`; `generatedFromOfficialSpec`: `false`; `implementedOperationCount`: `8`; `machineReadableSpecStatus`: `"No official public complete Messenger Platform/Graph OpenAPI spec was found in facebook/openapi during this audit."`; `operationCatalog`: `"docs/provider-coverage/messenger-platform-graph-selected-api-2026-06-18.operations.json"`; `selectedOperationCount`: `8`; \} |
| `metadata.apiCoverage.checkedAt` | `"2026-06-25"` |
| `metadata.apiCoverage.fullMetaGraphCoverage` | `false` |
| `metadata.apiCoverage.fullProviderApi` | `false` |
| `metadata.apiCoverage.generatedFromOfficialSpec` | `false` |
| `metadata.apiCoverage.implementedOperationCount` | `8` |
| `metadata.apiCoverage.machineReadableSpecStatus` | `"No official public complete Messenger Platform/Graph OpenAPI spec was found in facebook/openapi during this audit."` |
| `metadata.apiCoverage.operationCatalog` | `"docs/provider-coverage/messenger-platform-graph-selected-api-2026-06-18.operations.json"` |
| `metadata.apiCoverage.selectedOperationCount` | `8` |
| `metadata.channelCoverage` | \{ `attachments`: `"facebook-nodejs-business-sdk-call"`; `conversationRouting`: `"provider-supported-not-typed"`; `conversations`: `"facebook-nodejs-business-sdk-call"`; `customTransportFallback`: `"package-owned-rest-adapter"`; `handoverProtocolThreadControl`: `"provider-supported-deprecated-typed-thread-control"`; `messages`: `"facebook-nodejs-business-sdk-call"`; `pageReadiness`: `"facebook-nodejs-business-sdk-call"`; `senderActions`: `"facebook-nodejs-business-sdk-call"`; `webhooks`: `"typed-challenge-verify-parse"`; \} |
| `metadata.channelCoverage.attachments` | `"facebook-nodejs-business-sdk-call"` |
| `metadata.channelCoverage.conversationRouting` | `"provider-supported-not-typed"` |
| `metadata.channelCoverage.conversations` | `"facebook-nodejs-business-sdk-call"` |
| `metadata.channelCoverage.customTransportFallback` | `"package-owned-rest-adapter"` |
| `metadata.channelCoverage.handoverProtocolThreadControl` | `"provider-supported-deprecated-typed-thread-control"` |
| `metadata.channelCoverage.messages` | `"facebook-nodejs-business-sdk-call"` |
| `metadata.channelCoverage.pageReadiness` | `"facebook-nodejs-business-sdk-call"` |
| `metadata.channelCoverage.senderActions` | `"facebook-nodejs-business-sdk-call"` |
| `metadata.channelCoverage.webhooks` | `"typed-challenge-verify-parse"` |
| `metadata.docs` | `"https://developers.facebook.com/docs/messenger-platform"` |
| `metadata.implementation` | \{ `allowedOperations`: readonly \[\{ `alias`: `"messenger.webhook.parse"`; `checksum`: `"not-applicable-local-helper"`; `id`: `"parseMessengerWebhook"`; `source`: `"local-webhook-parser"`; `target`: `"package.webhooks.parseMessengerWebhook"`; \}, \{ `alias`: `"messenger.message.send"`; `checksum`: `"not-applicable-rest-adapter"`; `id`: `"sendMessage"`; `source`: `"provider-sdk"`; `target`: `"facebookBusinessSdk.FacebookAdsApi.call"`; \}, \{ `alias`: `"messenger.senderAction.send"`; `checksum`: `"not-applicable-rest-adapter"`; `id`: `"sendSenderAction"`; `source`: `"provider-sdk"`; `target`: `"facebookBusinessSdk.FacebookAdsApi.call"`; \}, \{ `alias`: `"messenger.attachment.upload"`; `checksum`: `"not-applicable-rest-adapter"`; `id`: `"uploadAttachment"`; `source`: `"provider-sdk"`; `target`: `"facebookBusinessSdk.FacebookAdsApi.call"`; \}, \{ `alias`: `"messenger.conversations.list"`; `checksum`: `"not-applicable-rest-adapter"`; `id`: `"listConversations"`; `source`: `"provider-sdk"`; `target`: `"facebookBusinessSdk.FacebookAdsApi.call"`; \}, \{ `alias`: `"messenger.conversationMessages.list"`; `checksum`: `"not-applicable-rest-adapter"`; `id`: `"getConversationMessages"`; `source`: `"provider-sdk"`; `target`: `"facebookBusinessSdk.FacebookAdsApi.call"`; \}, \{ `alias`: `"messenger.page.read"`; `checksum`: `"not-applicable-rest-adapter"`; `id`: `"getPage"`; `source`: `"provider-sdk"`; `target`: `"facebookBusinessSdk.FacebookAdsApi.call"`; \}, \{ `alias`: `"messenger.webhook-signature"`; `checksum`: `"not-applicable-local-helper"`; `id`: `"validateMessengerWebhookSignature"`; `source`: `"local-signature-helper"`; `target`: `"package.webhooks.validateMessengerWebhookSignature"`; \}\]; `implementationStrategy`: `"provider-sdk-default-with-typed-domain-adapter"`; `providerSdk`: \{ `license`: `"Platform License"`; `package`: `"facebook-nodejs-business-sdk"`; `runtimeCall`: `"FacebookAdsApi.call"`; `runtimeEntry`: `"FacebookAdsApi"`; `version`: `"24.0.1"`; \}; `sdkDecision`: `"Meta's maintained facebook-nodejs-business-sdk@24.0.1 is provider-owned and exposes FacebookAdsApi.call(method, path, params). This package maps its strict Messenger support slice onto that SDK call surface by default; the package-owned REST adapter is retained only for explicit custom transport options such as fetch, graphApiBaseUrl, graphApiVersion, signal, timeoutMs, or retry."`; `verifiedAt`: `"2026-06-25"`; \} |
| `metadata.implementation.allowedOperations` | readonly \[\{ `alias`: `"messenger.webhook.parse"`; `checksum`: `"not-applicable-local-helper"`; `id`: `"parseMessengerWebhook"`; `source`: `"local-webhook-parser"`; `target`: `"package.webhooks.parseMessengerWebhook"`; \}, \{ `alias`: `"messenger.message.send"`; `checksum`: `"not-applicable-rest-adapter"`; `id`: `"sendMessage"`; `source`: `"provider-sdk"`; `target`: `"facebookBusinessSdk.FacebookAdsApi.call"`; \}, \{ `alias`: `"messenger.senderAction.send"`; `checksum`: `"not-applicable-rest-adapter"`; `id`: `"sendSenderAction"`; `source`: `"provider-sdk"`; `target`: `"facebookBusinessSdk.FacebookAdsApi.call"`; \}, \{ `alias`: `"messenger.attachment.upload"`; `checksum`: `"not-applicable-rest-adapter"`; `id`: `"uploadAttachment"`; `source`: `"provider-sdk"`; `target`: `"facebookBusinessSdk.FacebookAdsApi.call"`; \}, \{ `alias`: `"messenger.conversations.list"`; `checksum`: `"not-applicable-rest-adapter"`; `id`: `"listConversations"`; `source`: `"provider-sdk"`; `target`: `"facebookBusinessSdk.FacebookAdsApi.call"`; \}, \{ `alias`: `"messenger.conversationMessages.list"`; `checksum`: `"not-applicable-rest-adapter"`; `id`: `"getConversationMessages"`; `source`: `"provider-sdk"`; `target`: `"facebookBusinessSdk.FacebookAdsApi.call"`; \}, \{ `alias`: `"messenger.page.read"`; `checksum`: `"not-applicable-rest-adapter"`; `id`: `"getPage"`; `source`: `"provider-sdk"`; `target`: `"facebookBusinessSdk.FacebookAdsApi.call"`; \}, \{ `alias`: `"messenger.webhook-signature"`; `checksum`: `"not-applicable-local-helper"`; `id`: `"validateMessengerWebhookSignature"`; `source`: `"local-signature-helper"`; `target`: `"package.webhooks.validateMessengerWebhookSignature"`; \}\] |
| `metadata.implementation.implementationStrategy` | `"provider-sdk-default-with-typed-domain-adapter"` |
| `metadata.implementation.providerSdk` | \{ `license`: `"Platform License"`; `package`: `"facebook-nodejs-business-sdk"`; `runtimeCall`: `"FacebookAdsApi.call"`; `runtimeEntry`: `"FacebookAdsApi"`; `version`: `"24.0.1"`; \} |
| `metadata.implementation.providerSdk.license` | `"Platform License"` |
| `metadata.implementation.providerSdk.package` | `"facebook-nodejs-business-sdk"` |
| `metadata.implementation.providerSdk.runtimeCall` | `"FacebookAdsApi.call"` |
| `metadata.implementation.providerSdk.runtimeEntry` | `"FacebookAdsApi"` |
| `metadata.implementation.providerSdk.version` | `"24.0.1"` |
| `metadata.implementation.sdkDecision` | `"Meta's maintained facebook-nodejs-business-sdk@24.0.1 is provider-owned and exposes FacebookAdsApi.call(method, path, params). This package maps its strict Messenger support slice onto that SDK call surface by default; the package-owned REST adapter is retained only for explicit custom transport options such as fetch, graphApiBaseUrl, graphApiVersion, signal, timeoutMs, or retry."` |
| `metadata.implementation.verifiedAt` | `"2026-06-25"` |
| `metadata.manifestOnlySafe` | `true` |
| `metadata.providerClient` | \{ `customTransportFallbackPolicy`: `"package-owned-rest-adapter-for-fetch-base-version-signal-timeout-retry"`; `defaultClientPolicy`: `"facebook-nodejs-business-sdk-when-configured"`; `importPolicy`: `"provider-client-override-supported"`; `interface`: `"MessengerSocialProviderClient"`; `package`: `"facebook-nodejs-business-sdk-or-host-provided"`; \} |
| `metadata.providerClient.customTransportFallbackPolicy` | `"package-owned-rest-adapter-for-fetch-base-version-signal-timeout-retry"` |
| `metadata.providerClient.defaultClientPolicy` | `"facebook-nodejs-business-sdk-when-configured"` |
| `metadata.providerClient.importPolicy` | `"provider-client-override-supported"` |
| `metadata.providerClient.interface` | `"MessengerSocialProviderClient"` |
| `metadata.providerClient.package` | `"facebook-nodejs-business-sdk-or-host-provided"` |
| `name` | `"Facebook Messenger"` |
| `operations` | readonly \[\{ `alias`: `"messenger.webhook.parse"`; `audiences`: readonly \[`"customer-facing"`, `"mixed"`\]; `capability`: `"receive"`; `description`: `"Validate and parse an inbound Messenger webhook request."`; `exposesSensitiveData`: `true`; `extension`: `true`; `label`: `"Parse Messenger webhook"`; `providerObject`: `"messengerWebhook"`; `providerOperation`: `"parseMessengerWebhook"`; `requiresCredential`: `true`; \}, \{ `alias`: `"messenger.message.send"`; `audiences`: readonly \[`"customer-facing"`\]; `capability`: `"send"`; `description`: `"Send a Messenger Platform message through the configured Page."`; `exposesSensitiveData`: `true`; `extension`: `true`; `externallyVisible`: `true`; `label`: `"Send Messenger message"`; `providerObject`: `"messengerMessage"`; `providerOperation`: `"sendMessage"`; `requiresApproval`: `true`; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `alias`: `"messenger.senderAction.send"`; `audiences`: readonly \[`"customer-facing"`\]; `capability`: `"send"`; `description`: `"Send Messenger sender actions such as typing indicators or mark-seen."`; `extension`: `true`; `externallyVisible`: `true`; `label`: `"Send Messenger sender action"`; `providerObject`: `"messengerConversation"`; `providerOperation`: `"sendSenderAction"`; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `alias`: `"messenger.attachment.upload"`; `audiences`: readonly \[`"customer-facing"`, `"mixed"`\]; `capability`: `"media"`; `description`: `"Upload reusable attachment payloads for Messenger sends."`; `exposesSensitiveData`: `true`; `extension`: `true`; `externallyVisible`: `true`; `label`: `"Upload Messenger attachment"`; `providerObject`: `"messengerAttachment"`; `providerOperation`: `"uploadAttachment"`; `requiresApproval`: `true`; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `alias`: `"messenger.conversations.list"`; `audiences`: readonly \[`"customer-facing"`, `"mixed"`\]; `capability`: `"search-provider-object"`; `description`: `"List Messenger Page conversations with SDK-user-supplied filters."`; `exposesSensitiveData`: `true`; `extension`: `true`; `label`: `"List Messenger conversations"`; `providerObject`: `"messengerConversation"`; `providerOperation`: `"listConversations"`; `requiresCredential`: `true`; \}, \{ `alias`: `"messenger.conversationMessages.list"`; `audiences`: readonly \[`"customer-facing"`, `"mixed"`\]; `capability`: `"read-provider-object"`; `description`: `"Read messages for a Messenger conversation."`; `exposesSensitiveData`: `true`; `extension`: `true`; `label`: `"Read Messenger conversation messages"`; `providerObject`: `"messengerMessage"`; `providerOperation`: `"getConversationMessages"`; `requiresCredential`: `true`; \}, \{ `alias`: `"messenger.page.read"`; `audiences`: readonly \[`"internal-support"`, `"mixed"`\]; `capability`: `"read-provider-object"`; `description`: `"Read configured Facebook Page metadata for readiness diagnostics."`; `extension`: `true`; `label`: `"Read Messenger Page"`; `providerObject`: `"messengerPage"`; `providerOperation`: `"getPage"`; `requiresCredential`: `true`; \}, \{ `alias`: `"messenger.webhook-signature"`; `audiences`: readonly \[`"internal-support"`\]; `capability`: `"social.webhook-signature"`; `description`: `"Validate Meta X-Hub-Signature-256 for Messenger webhook delivery."`; `exposesSensitiveData`: `true`; `extension`: `true`; `label`: `"Validate Messenger webhook signature"`; `providerObject`: `"messengerSignedWebhook"`; `providerOperation`: `"validateMessengerWebhookSignature"`; `requiresCredential`: `true`; \}\] |
| `packageName` | `"@cognidesk/integration-social-messenger"` |
| `privacyNotes` | readonly \[`"Messenger PSIDs, profile names, message text, attachments, conversation metadata, and webhook payloads can contain customer data."`, `"Meta Page access tokens, app secrets, and webhook verify tokens stay server-side and are represented in Studio only as readiness state."`\] |
| `provider` | `"messenger"` |
| `trustLevel` | `"official"` |

***

### messengerSocialSupportSlice

```ts
const messengerSocialSupportSlice: {
  allowedOperations: readonly [{
     alias: "messenger.webhook.parse";
     checksum: "not-applicable-local-helper";
     id: "parseMessengerWebhook";
     source: "local-webhook-parser";
     target: "package.webhooks.parseMessengerWebhook";
   }, {
     alias: "messenger.message.send";
     checksum: "not-applicable-rest-adapter";
     id: "sendMessage";
     source: "provider-sdk";
     target: "facebookBusinessSdk.FacebookAdsApi.call";
   }, {
     alias: "messenger.senderAction.send";
     checksum: "not-applicable-rest-adapter";
     id: "sendSenderAction";
     source: "provider-sdk";
     target: "facebookBusinessSdk.FacebookAdsApi.call";
   }, {
     alias: "messenger.attachment.upload";
     checksum: "not-applicable-rest-adapter";
     id: "uploadAttachment";
     source: "provider-sdk";
     target: "facebookBusinessSdk.FacebookAdsApi.call";
   }, {
     alias: "messenger.conversations.list";
     checksum: "not-applicable-rest-adapter";
     id: "listConversations";
     source: "provider-sdk";
     target: "facebookBusinessSdk.FacebookAdsApi.call";
   }, {
     alias: "messenger.conversationMessages.list";
     checksum: "not-applicable-rest-adapter";
     id: "getConversationMessages";
     source: "provider-sdk";
     target: "facebookBusinessSdk.FacebookAdsApi.call";
   }, {
     alias: "messenger.page.read";
     checksum: "not-applicable-rest-adapter";
     id: "getPage";
     source: "provider-sdk";
     target: "facebookBusinessSdk.FacebookAdsApi.call";
   }, {
     alias: "messenger.webhook-signature";
     checksum: "not-applicable-local-helper";
     id: "validateMessengerWebhookSignature";
     source: "local-signature-helper";
     target: "package.webhooks.validateMessengerWebhookSignature";
  }];
  implementationStrategy: "provider-sdk-default-with-typed-domain-adapter";
  providerSdk: {
     license: "Platform License";
     package: "facebook-nodejs-business-sdk";
     runtimeCall: "FacebookAdsApi.call";
     runtimeEntry: "FacebookAdsApi";
     version: "24.0.1";
  };
  sdkDecision: "Meta's maintained facebook-nodejs-business-sdk@24.0.1 is provider-owned and exposes FacebookAdsApi.call(method, path, params). This package maps its strict Messenger support slice onto that SDK call surface by default; the package-owned REST adapter is retained only for explicit custom transport options such as fetch, graphApiBaseUrl, graphApiVersion, signal, timeoutMs, or retry.";
  verifiedAt: "2026-06-25";
};
```

#### Type Declaration

| Name | Type |
| ------ | ------ |
| <a id="property-allowedoperations-1"></a> `allowedOperations` | readonly \[\{ `alias`: `"messenger.webhook.parse"`; `checksum`: `"not-applicable-local-helper"`; `id`: `"parseMessengerWebhook"`; `source`: `"local-webhook-parser"`; `target`: `"package.webhooks.parseMessengerWebhook"`; \}, \{ `alias`: `"messenger.message.send"`; `checksum`: `"not-applicable-rest-adapter"`; `id`: `"sendMessage"`; `source`: `"provider-sdk"`; `target`: `"facebookBusinessSdk.FacebookAdsApi.call"`; \}, \{ `alias`: `"messenger.senderAction.send"`; `checksum`: `"not-applicable-rest-adapter"`; `id`: `"sendSenderAction"`; `source`: `"provider-sdk"`; `target`: `"facebookBusinessSdk.FacebookAdsApi.call"`; \}, \{ `alias`: `"messenger.attachment.upload"`; `checksum`: `"not-applicable-rest-adapter"`; `id`: `"uploadAttachment"`; `source`: `"provider-sdk"`; `target`: `"facebookBusinessSdk.FacebookAdsApi.call"`; \}, \{ `alias`: `"messenger.conversations.list"`; `checksum`: `"not-applicable-rest-adapter"`; `id`: `"listConversations"`; `source`: `"provider-sdk"`; `target`: `"facebookBusinessSdk.FacebookAdsApi.call"`; \}, \{ `alias`: `"messenger.conversationMessages.list"`; `checksum`: `"not-applicable-rest-adapter"`; `id`: `"getConversationMessages"`; `source`: `"provider-sdk"`; `target`: `"facebookBusinessSdk.FacebookAdsApi.call"`; \}, \{ `alias`: `"messenger.page.read"`; `checksum`: `"not-applicable-rest-adapter"`; `id`: `"getPage"`; `source`: `"provider-sdk"`; `target`: `"facebookBusinessSdk.FacebookAdsApi.call"`; \}, \{ `alias`: `"messenger.webhook-signature"`; `checksum`: `"not-applicable-local-helper"`; `id`: `"validateMessengerWebhookSignature"`; `source`: `"local-signature-helper"`; `target`: `"package.webhooks.validateMessengerWebhookSignature"`; \}\] |
| <a id="property-implementationstrategy-1"></a> `implementationStrategy` | `"provider-sdk-default-with-typed-domain-adapter"` |
| <a id="property-providersdk-1"></a> `providerSdk` | \{ `license`: `"Platform License"`; `package`: `"facebook-nodejs-business-sdk"`; `runtimeCall`: `"FacebookAdsApi.call"`; `runtimeEntry`: `"FacebookAdsApi"`; `version`: `"24.0.1"`; \} |
| `providerSdk.license` | `"Platform License"` |
| `providerSdk.package` | `"facebook-nodejs-business-sdk"` |
| `providerSdk.runtimeCall` | `"FacebookAdsApi.call"` |
| `providerSdk.runtimeEntry` | `"FacebookAdsApi"` |
| `providerSdk.version` | `"24.0.1"` |
| <a id="property-sdkdecision-1"></a> `sdkDecision` | `"Meta's maintained facebook-nodejs-business-sdk@24.0.1 is provider-owned and exposes FacebookAdsApi.call(method, path, params). This package maps its strict Messenger support slice onto that SDK call surface by default; the package-owned REST adapter is retained only for explicit custom transport options such as fetch, graphApiBaseUrl, graphApiVersion, signal, timeoutMs, or retry."` |
| <a id="property-verifiedat-1"></a> `verifiedAt` | `"2026-06-25"` |
