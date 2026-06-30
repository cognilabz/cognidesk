# integrations/social/instagram/dist/manifest

## Variables

### instagramHostClientSupportSlice

```ts
const instagramHostClientSupportSlice: {
  allowedOperations: readonly [{
     alias: "instagram.message.send";
     id: "sendMessage";
     source: "provider-sdk";
     target: "facebookBusinessSdk.FacebookAdsApi.call";
   }, {
     alias: "instagram.conversations.list";
     id: "listConversations";
     source: "provider-sdk";
     target: "facebookBusinessSdk.FacebookAdsApi.call";
   }, {
     alias: "instagram.conversationMessages.list";
     id: "listConversationMessages";
     source: "provider-sdk";
     target: "facebookBusinessSdk.FacebookAdsApi.call";
   }, {
     alias: "instagram.message.read";
     id: "getMessage";
     source: "provider-sdk";
     target: "facebookBusinessSdk.FacebookAdsApi.call";
   }, {
     alias: "instagram.account.read";
     id: "getInstagramBusinessAccount";
     source: "provider-sdk";
     target: "facebookBusinessSdk.FacebookAdsApi.call";
   }, {
     alias: "instagram.page.read";
     id: "getPage";
     source: "provider-sdk";
     target: "facebookBusinessSdk.FacebookAdsApi.call";
  }];
  implementationStrategy: "provider-sdk-default-with-typed-domain-adapter";
  providerSdk: {
     license: "Platform License";
     package: "facebook-nodejs-business-sdk";
     runtimeCall: "FacebookAdsApi.call";
     runtimeEntry: "FacebookAdsApi";
     version: "24.0.1";
  };
  sdkDecision: "Meta's official facebook-nodejs-business-sdk@24.0.1 is provider-owned and exposes FacebookAdsApi.call(method, path, params). This package maps its strict Instagram Messaging support slice onto that SDK call surface by default; the package-owned REST adapter is retained only for explicit custom transport options such as fetch, graphApiBaseUrl, graphApiVersion, signal, timeoutMs, or retry.";
  verifiedAt: "2026-06-25";
};
```

#### Type Declaration

| Name | Type |
| ------ | ------ |
| <a id="property-allowedoperations"></a> `allowedOperations` | readonly \[\{ `alias`: `"instagram.message.send"`; `id`: `"sendMessage"`; `source`: `"provider-sdk"`; `target`: `"facebookBusinessSdk.FacebookAdsApi.call"`; \}, \{ `alias`: `"instagram.conversations.list"`; `id`: `"listConversations"`; `source`: `"provider-sdk"`; `target`: `"facebookBusinessSdk.FacebookAdsApi.call"`; \}, \{ `alias`: `"instagram.conversationMessages.list"`; `id`: `"listConversationMessages"`; `source`: `"provider-sdk"`; `target`: `"facebookBusinessSdk.FacebookAdsApi.call"`; \}, \{ `alias`: `"instagram.message.read"`; `id`: `"getMessage"`; `source`: `"provider-sdk"`; `target`: `"facebookBusinessSdk.FacebookAdsApi.call"`; \}, \{ `alias`: `"instagram.account.read"`; `id`: `"getInstagramBusinessAccount"`; `source`: `"provider-sdk"`; `target`: `"facebookBusinessSdk.FacebookAdsApi.call"`; \}, \{ `alias`: `"instagram.page.read"`; `id`: `"getPage"`; `source`: `"provider-sdk"`; `target`: `"facebookBusinessSdk.FacebookAdsApi.call"`; \}\] |
| <a id="property-implementationstrategy"></a> `implementationStrategy` | `"provider-sdk-default-with-typed-domain-adapter"` |
| <a id="property-providersdk"></a> `providerSdk` | \{ `license`: `"Platform License"`; `package`: `"facebook-nodejs-business-sdk"`; `runtimeCall`: `"FacebookAdsApi.call"`; `runtimeEntry`: `"FacebookAdsApi"`; `version`: `"24.0.1"`; \} |
| `providerSdk.license` | `"Platform License"` |
| `providerSdk.package` | `"facebook-nodejs-business-sdk"` |
| `providerSdk.runtimeCall` | `"FacebookAdsApi.call"` |
| `providerSdk.runtimeEntry` | `"FacebookAdsApi"` |
| `providerSdk.version` | `"24.0.1"` |
| <a id="property-sdkdecision"></a> `sdkDecision` | `"Meta's official facebook-nodejs-business-sdk@24.0.1 is provider-owned and exposes FacebookAdsApi.call(method, path, params). This package maps its strict Instagram Messaging support slice onto that SDK call surface by default; the package-owned REST adapter is retained only for explicit custom transport options such as fetch, graphApiBaseUrl, graphApiVersion, signal, timeoutMs, or retry."` |
| <a id="property-verifiedat"></a> `verifiedAt` | `"2026-06-25"` |

***

### instagramSocialProviderManifest

```ts
const instagramSocialProviderManifest: {
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
     description: "Validates and parses Meta webhook payloads after the SDK user's Page/app is subscribed to Instagram messaging webhook fields.";
     exposesSensitiveData: true;
     label: "Receive Instagram DM webhooks";
     providerObjects: readonly [{
        kind: "instagramWebhook";
        label: "Instagram Webhook";
      }, {
        kind: "instagramDirectMessage";
        label: "Instagram Direct Message";
      }, {
        kind: "instagramConversation";
        label: "Instagram Conversation";
     }];
     requiresCredential: true;
   }, {
     audiences: readonly ["customer-facing"];
     capability: "send";
     description: "Sends Instagram direct messages through the configured Meta SDK-backed Graph adapter or provider client inside policy windows selected by the SDK user.";
     exposesSensitiveData: true;
     label: "Send Instagram DM messages";
     providerObjects: readonly [{
        kind: "instagramDirectMessage";
        label: "Instagram Direct Message";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     audiences: readonly ["customer-facing", "mixed"];
     capability: "draft";
     description: "Builds Instagram messaging payloads for SDK-user-configured approval and routing workflows.";
     exposesSensitiveData: true;
     label: "Build Instagram DM payloads";
     providerObjects: readonly [{
        kind: "instagramMessageDraft";
        label: "Instagram Message Draft";
     }];
     requiresCredential: false;
   }, {
     audiences: readonly ["customer-facing", "mixed"];
     capability: "thread";
     description: "Associates provider conversation and message IDs with Cognidesk conversation policy selected by SDK users.";
     exposesSensitiveData: true;
     label: "Use Instagram conversations";
     providerObjects: readonly [{
        kind: "instagramConversation";
        label: "Instagram Conversation";
      }, {
        kind: "instagramDirectMessage";
        label: "Instagram Direct Message";
     }];
     requiresCredential: true;
   }, {
     audiences: readonly ["internal-support", "mixed"];
     capability: "read-provider-object";
     description: "Reads Instagram professional account, page, conversation, and message resources through the configured Meta SDK-backed Graph adapter or provider client.";
     exposesSensitiveData: true;
     label: "Read Instagram account and messages";
     providerObjects: readonly [{
        kind: "instagramAccount";
        label: "Instagram Account";
      }, {
        kind: "instagramPage";
        label: "Facebook Page";
      }, {
        kind: "instagramConversation";
        label: "Instagram Conversation";
      }, {
        kind: "instagramDirectMessage";
        label: "Instagram Direct Message";
     }];
     requiresCredential: true;
   }, {
     audiences: readonly ["internal-support", "mixed"];
     capability: "search-provider-object";
     description: "Lists Instagram conversations with SDK-user-supplied fields and pagination through the configured Meta SDK-backed Graph adapter or provider client.";
     exposesSensitiveData: true;
     label: "List Instagram conversations";
     providerObjects: readonly [{
        kind: "instagramConversation";
        label: "Instagram Conversation";
     }];
     requiresCredential: true;
   }, {
     audiences: readonly ["internal-support"];
     capability: "social.webhook-signature";
     description: "Validates X-Hub-Signature-256 using the SDK user's Meta app secret before parsing webhook JSON.";
     exposesSensitiveData: true;
     extension: true;
     label: "Validate Meta webhook signatures";
     providerObjects: readonly [{
        kind: "instagramSignedWebhook";
        label: "Instagram Signed Webhook";
     }];
     requiresCredential: true;
  }];
  category: "social";
  channelAudiences: readonly ["customer-facing", "mixed"];
  coverage: {
     evidence: readonly [{
        label: "Instagram Messaging overview";
        url: "https://developers.facebook.com/documentation/business-messaging/instagram-messaging/overview";
      }, {
        label: "Instagram Messaging send message";
        url: "https://developers.facebook.com/documentation/business-messaging/instagram-messaging/features/send-message";
      }, {
        label: "Instagram Messaging webhooks";
        url: "https://developers.facebook.com/documentation/business-messaging/instagram-messaging/webhooks";
      }, {
        label: "Instagram Messaging app review";
        url: "https://developers.facebook.com/documentation/business-messaging/instagram-messaging/app-review";
      }, {
        label: "Meta Business SDK for NodeJS";
        url: "https://github.com/facebook/facebook-nodejs-business-sdk";
     }];
     notes: readonly ["Coverage is limited to Instagram Messaging send payloads, conversations/messages reads, account/page reads, webhook challenge handling, and X-Hub-Signature-256 validation for SDK-user-owned support messaging.", "This package uses the Meta Business Messaging / Page access token model for Instagram Messaging; it does not implement the separate Instagram API with Instagram Login messaging surface.", "Runtime provider calls use Meta's facebook-nodejs-business-sdk when credentials are configured; hosts may inject an Instagram/Meta provider client override.", "The package does not implement the broader Instagram Platform for media publishing, comments/moderation, mentions, insights, content discovery, account management, or full Graph API coverage."];
     scope: "support-workflow-subset";
  };
  credentialRequirements: readonly [{
     description: "Server-side Page access token used by the Meta SDK-backed Graph adapter or an injected Instagram/Meta provider client.";
     id: "instagram-page-access-token";
     label: "Meta Page access token";
     metadata: {
        scopeKind: "provider-permission-labels";
     };
     required: true;
     scopes: readonly ["instagram_manage_messages", "instagram_basic", "pages_messaging", "pages_show_list", "pages_read_engagement", "pages_manage_metadata"];
   }, {
     description: "Facebook Page connected to the SDK user's Instagram professional account.";
     id: "instagram-page-id";
     label: "Facebook Page ID";
     required: true;
   }, {
     description: "Instagram professional account ID used for conversations, profile, and webhook ownership checks.";
     id: "instagram-business-account-id";
     label: "Instagram business account ID";
     required: true;
   }, {
     description: "Server-side app secret used to validate X-Hub-Signature-256 webhook deliveries.";
     id: "instagram-app-secret";
     label: "Meta app secret";
     required: true;
   }, {
     description: "SDK-user-owned token checked during Meta webhook endpoint verification.";
     id: "instagram-webhook-verify-token";
     label: "Webhook verify token";
     required: false;
   }, {
     description: "SDK-user-confirmed Page/app subscription to Instagram messaging webhook fields.";
     id: "instagram-page-webhook-subscription";
     label: "Instagram messaging webhook subscription";
     required: false;
   }, {
     description: "SDK-user-reviewed permissions granted to the Meta app and enforced by the configured Meta SDK-backed Graph adapter or provider client.";
     id: "instagram-permissions";
     label: "Instagram Graph permissions";
     metadata: {
        scopeKind: "provider-permission-labels";
     };
     required: true;
     scopes: readonly ["instagram_manage_messages", "instagram_basic", "pages_messaging", "pages_read_engagement", "pages_manage_metadata"];
  }];
  directions: readonly ["receive-only", "send-only", "bidirectional"];
  id: "social.instagram";
  limitations: readonly ["Available operations depend on the SDK user's Meta app review, Page ownership, Instagram professional account link, granted permissions, webhook field subscriptions, messaging windows, HUMAN_AGENT review, rate limits, and regional policy.", "Instagram does not inherit general Messenger message tags as safe defaults; SDK users must configure Instagram-specific outbound policy and HUMAN_AGENT review where needed.", "Consent, outbound-contact policy, conversation continuity across channels, human escalation, retention, redaction, and deletion behavior are SDK-user configuration.", "This package provides typed operation contracts, webhook primitives, and a Meta SDK-backed Graph adapter; providerClient injection remains available as an override."];
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
        implementedOperationCount: 6;
        machineReadableSpecStatus: "No official public complete Instagram Messaging/Graph OpenAPI spec or dedicated typed Instagram Messaging SDK surface was found during this audit.";
        operationCatalog: "docs/provider-coverage/instagram-messaging-graph-selected-api-2026-06-18.operations.json";
        selectedOperationCount: 6;
     };
     channelCoverage: {
        accountPageReadiness: "facebook-nodejs-business-sdk-call";
        commentsPublishingInsights: "not-covered";
        conversations: "facebook-nodejs-business-sdk-call";
        customTransportFallback: "package-owned-rest-adapter";
        directMessages: "facebook-nodejs-business-sdk-call";
        humanAgentWindow: "sdk-owned-policy";
        messageDetails: "facebook-nodejs-business-sdk-call";
        webhooks: "typed-challenge-verify-parse";
     };
     docs: readonly ["https://developers.facebook.com/documentation/business-messaging/instagram-messaging/features/send-message", "https://developers.facebook.com/documentation/business-messaging/instagram-messaging/overview", "https://developers.facebook.com/documentation/business-messaging/instagram-messaging/webhooks"];
     implementation: {
        allowedOperations: readonly [{
           alias: "instagram.message.send";
           id: "sendMessage";
           source: "provider-sdk";
           target: "facebookBusinessSdk.FacebookAdsApi.call";
         }, {
           alias: "instagram.conversations.list";
           id: "listConversations";
           source: "provider-sdk";
           target: "facebookBusinessSdk.FacebookAdsApi.call";
         }, {
           alias: "instagram.conversationMessages.list";
           id: "listConversationMessages";
           source: "provider-sdk";
           target: "facebookBusinessSdk.FacebookAdsApi.call";
         }, {
           alias: "instagram.message.read";
           id: "getMessage";
           source: "provider-sdk";
           target: "facebookBusinessSdk.FacebookAdsApi.call";
         }, {
           alias: "instagram.account.read";
           id: "getInstagramBusinessAccount";
           source: "provider-sdk";
           target: "facebookBusinessSdk.FacebookAdsApi.call";
         }, {
           alias: "instagram.page.read";
           id: "getPage";
           source: "provider-sdk";
           target: "facebookBusinessSdk.FacebookAdsApi.call";
        }];
        implementationStrategy: "provider-sdk-default-with-typed-domain-adapter";
        providerSdk: {
           license: "Platform License";
           package: "facebook-nodejs-business-sdk";
           runtimeCall: "FacebookAdsApi.call";
           runtimeEntry: "FacebookAdsApi";
           version: "24.0.1";
        };
        sdkDecision: "Meta's official facebook-nodejs-business-sdk@24.0.1 is provider-owned and exposes FacebookAdsApi.call(method, path, params). This package maps its strict Instagram Messaging support slice onto that SDK call surface by default; the package-owned REST adapter is retained only for explicit custom transport options such as fetch, graphApiBaseUrl, graphApiVersion, signal, timeoutMs, or retry.";
        verifiedAt: "2026-06-25";
     };
     providerClient: {
        customTransportFallbackPolicy: "package-owned-rest-adapter-for-fetch-base-version-signal-timeout-retry";
        defaultClientPolicy: "facebook-nodejs-business-sdk-when-configured";
        importPolicy: "provider-client-override-supported";
        interface: "InstagramMetaProviderClient";
        package: "facebook-nodejs-business-sdk-or-host-provided";
     };
  };
  name: "Instagram Direct Messages";
  operations: readonly [{
     alias: "instagram.webhook.parse";
     audiences: readonly ["customer-facing", "mixed"];
     capability: "receive";
     description: "Validate and parse an inbound Instagram Messaging webhook request.";
     exposesSensitiveData: true;
     extension: true;
     label: "Parse Instagram webhook";
     providerObject: "instagramWebhook";
     providerOperation: "parseInstagramWebhook";
     requiresCredential: true;
   }, {
     alias: "instagram.message.send";
     audiences: readonly ["customer-facing"];
     capability: "send";
     description: "Send an Instagram Messaging direct message through the configured Meta SDK-backed Graph adapter or provider client.";
     exposesSensitiveData: true;
     extension: true;
     externallyVisible: true;
     label: "Send Instagram message";
     providerObject: "instagramDirectMessage";
     providerOperation: "sendMessage";
     requiresApproval: true;
     requiresCredential: true;
     sideEffect: true;
   }, {
     alias: "instagram.draft.create";
     audiences: readonly ["customer-facing", "mixed"];
     capability: "draft";
     description: "Build an Instagram Messaging payload for SDK-user approval workflows.";
     exposesSensitiveData: true;
     extension: true;
     label: "Build Instagram message payload";
     providerObject: "instagramMessageDraft";
     providerOperation: "createInstagramTextMessage";
   }, {
     alias: "instagram.conversations.list";
     audiences: readonly ["internal-support", "mixed"];
     capability: "search-provider-object";
     description: "List Instagram conversations through the configured Meta SDK-backed Graph adapter or provider client.";
     exposesSensitiveData: true;
     extension: true;
     label: "List Instagram conversations";
     providerObject: "instagramConversation";
     providerOperation: "listConversations";
     requiresCredential: true;
   }, {
     alias: "instagram.conversationMessages.list";
     audiences: readonly ["internal-support", "mixed"];
     capability: "read-provider-object";
     description: "Read messages for an Instagram conversation through the configured Meta SDK-backed Graph adapter or provider client.";
     exposesSensitiveData: true;
     extension: true;
     label: "Read Instagram conversation messages";
     providerObject: "instagramDirectMessage";
     providerOperation: "listConversationMessages";
     requiresCredential: true;
   }, {
     alias: "instagram.message.read";
     audiences: readonly ["internal-support", "mixed"];
     capability: "read-provider-object";
     description: "Read an Instagram message by provider message ID through the configured Meta SDK-backed Graph adapter or provider client.";
     exposesSensitiveData: true;
     extension: true;
     label: "Read Instagram message";
     providerObject: "instagramDirectMessage";
     providerOperation: "getMessage";
     requiresCredential: true;
   }, {
     alias: "instagram.account.read";
     audiences: readonly ["internal-support", "mixed"];
     capability: "read-provider-object";
     description: "Read configured Instagram professional account metadata through the configured Meta SDK-backed Graph adapter or provider client.";
     exposesSensitiveData: true;
     extension: true;
     label: "Read Instagram account";
     providerObject: "instagramAccount";
     providerOperation: "getInstagramBusinessAccount";
     requiresCredential: true;
   }, {
     alias: "instagram.page.read";
     audiences: readonly ["internal-support", "mixed"];
     capability: "read-provider-object";
     description: "Read the Facebook Page connected to the Instagram professional account through the configured Meta SDK-backed Graph adapter or provider client.";
     extension: true;
     label: "Read connected Facebook Page";
     providerObject: "instagramPage";
     providerOperation: "getPage";
     requiresCredential: true;
   }, {
     alias: "instagram.webhook-signature";
     audiences: readonly ["internal-support"];
     capability: "social.webhook-signature";
     description: "Validate Meta X-Hub-Signature-256 for Instagram webhook delivery.";
     exposesSensitiveData: true;
     extension: true;
     label: "Validate Instagram webhook signature";
     providerObject: "instagramSignedWebhook";
     providerOperation: "validateInstagramWebhookSignature";
     requiresCredential: true;
  }];
  packageName: "@cognidesk/integration-social-instagram";
  privacyNotes: readonly ["Instagram profile identifiers, usernames, message text, attachments, reactions, read events, conversation IDs, and webhook payloads can contain customer data.", "Meta Page access tokens, app secrets, and webhook verify tokens stay server-side and are represented in Studio only as readiness state."];
  provider: "instagram";
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
| `capabilities` | readonly \[\{ `audiences`: readonly \[`"customer-facing"`, `"mixed"`\]; `capability`: `"receive"`; `description`: `"Validates and parses Meta webhook payloads after the SDK user's Page/app is subscribed to Instagram messaging webhook fields."`; `exposesSensitiveData`: `true`; `label`: `"Receive Instagram DM webhooks"`; `providerObjects`: readonly \[\{ `kind`: `"instagramWebhook"`; `label`: `"Instagram Webhook"`; \}, \{ `kind`: `"instagramDirectMessage"`; `label`: `"Instagram Direct Message"`; \}, \{ `kind`: `"instagramConversation"`; `label`: `"Instagram Conversation"`; \}\]; `requiresCredential`: `true`; \}, \{ `audiences`: readonly \[`"customer-facing"`\]; `capability`: `"send"`; `description`: `"Sends Instagram direct messages through the configured Meta SDK-backed Graph adapter or provider client inside policy windows selected by the SDK user."`; `exposesSensitiveData`: `true`; `label`: `"Send Instagram DM messages"`; `providerObjects`: readonly \[\{ `kind`: `"instagramDirectMessage"`; `label`: `"Instagram Direct Message"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `audiences`: readonly \[`"customer-facing"`, `"mixed"`\]; `capability`: `"draft"`; `description`: `"Builds Instagram messaging payloads for SDK-user-configured approval and routing workflows."`; `exposesSensitiveData`: `true`; `label`: `"Build Instagram DM payloads"`; `providerObjects`: readonly \[\{ `kind`: `"instagramMessageDraft"`; `label`: `"Instagram Message Draft"`; \}\]; `requiresCredential`: `false`; \}, \{ `audiences`: readonly \[`"customer-facing"`, `"mixed"`\]; `capability`: `"thread"`; `description`: `"Associates provider conversation and message IDs with Cognidesk conversation policy selected by SDK users."`; `exposesSensitiveData`: `true`; `label`: `"Use Instagram conversations"`; `providerObjects`: readonly \[\{ `kind`: `"instagramConversation"`; `label`: `"Instagram Conversation"`; \}, \{ `kind`: `"instagramDirectMessage"`; `label`: `"Instagram Direct Message"`; \}\]; `requiresCredential`: `true`; \}, \{ `audiences`: readonly \[`"internal-support"`, `"mixed"`\]; `capability`: `"read-provider-object"`; `description`: `"Reads Instagram professional account, page, conversation, and message resources through the configured Meta SDK-backed Graph adapter or provider client."`; `exposesSensitiveData`: `true`; `label`: `"Read Instagram account and messages"`; `providerObjects`: readonly \[\{ `kind`: `"instagramAccount"`; `label`: `"Instagram Account"`; \}, \{ `kind`: `"instagramPage"`; `label`: `"Facebook Page"`; \}, \{ `kind`: `"instagramConversation"`; `label`: `"Instagram Conversation"`; \}, \{ `kind`: `"instagramDirectMessage"`; `label`: `"Instagram Direct Message"`; \}\]; `requiresCredential`: `true`; \}, \{ `audiences`: readonly \[`"internal-support"`, `"mixed"`\]; `capability`: `"search-provider-object"`; `description`: `"Lists Instagram conversations with SDK-user-supplied fields and pagination through the configured Meta SDK-backed Graph adapter or provider client."`; `exposesSensitiveData`: `true`; `label`: `"List Instagram conversations"`; `providerObjects`: readonly \[\{ `kind`: `"instagramConversation"`; `label`: `"Instagram Conversation"`; \}\]; `requiresCredential`: `true`; \}, \{ `audiences`: readonly \[`"internal-support"`\]; `capability`: `"social.webhook-signature"`; `description`: `"Validates X-Hub-Signature-256 using the SDK user's Meta app secret before parsing webhook JSON."`; `exposesSensitiveData`: `true`; `extension`: `true`; `label`: `"Validate Meta webhook signatures"`; `providerObjects`: readonly \[\{ `kind`: `"instagramSignedWebhook"`; `label`: `"Instagram Signed Webhook"`; \}\]; `requiresCredential`: `true`; \}\] |
| `category` | `"social"` |
| `channelAudiences` | readonly \[`"customer-facing"`, `"mixed"`\] |
| `coverage` | \{ `evidence`: readonly \[\{ `label`: `"Instagram Messaging overview"`; `url`: `"https://developers.facebook.com/documentation/business-messaging/instagram-messaging/overview"`; \}, \{ `label`: `"Instagram Messaging send message"`; `url`: `"https://developers.facebook.com/documentation/business-messaging/instagram-messaging/features/send-message"`; \}, \{ `label`: `"Instagram Messaging webhooks"`; `url`: `"https://developers.facebook.com/documentation/business-messaging/instagram-messaging/webhooks"`; \}, \{ `label`: `"Instagram Messaging app review"`; `url`: `"https://developers.facebook.com/documentation/business-messaging/instagram-messaging/app-review"`; \}, \{ `label`: `"Meta Business SDK for NodeJS"`; `url`: `"https://github.com/facebook/facebook-nodejs-business-sdk"`; \}\]; `notes`: readonly \[`"Coverage is limited to Instagram Messaging send payloads, conversations/messages reads, account/page reads, webhook challenge handling, and X-Hub-Signature-256 validation for SDK-user-owned support messaging."`, `"This package uses the Meta Business Messaging / Page access token model for Instagram Messaging; it does not implement the separate Instagram API with Instagram Login messaging surface."`, `"Runtime provider calls use Meta's facebook-nodejs-business-sdk when credentials are configured; hosts may inject an Instagram/Meta provider client override."`, `"The package does not implement the broader Instagram Platform for media publishing, comments/moderation, mentions, insights, content discovery, account management, or full Graph API coverage."`\]; `scope`: `"support-workflow-subset"`; \} |
| `coverage.evidence` | readonly \[\{ `label`: `"Instagram Messaging overview"`; `url`: `"https://developers.facebook.com/documentation/business-messaging/instagram-messaging/overview"`; \}, \{ `label`: `"Instagram Messaging send message"`; `url`: `"https://developers.facebook.com/documentation/business-messaging/instagram-messaging/features/send-message"`; \}, \{ `label`: `"Instagram Messaging webhooks"`; `url`: `"https://developers.facebook.com/documentation/business-messaging/instagram-messaging/webhooks"`; \}, \{ `label`: `"Instagram Messaging app review"`; `url`: `"https://developers.facebook.com/documentation/business-messaging/instagram-messaging/app-review"`; \}, \{ `label`: `"Meta Business SDK for NodeJS"`; `url`: `"https://github.com/facebook/facebook-nodejs-business-sdk"`; \}\] |
| `coverage.notes` | readonly \[`"Coverage is limited to Instagram Messaging send payloads, conversations/messages reads, account/page reads, webhook challenge handling, and X-Hub-Signature-256 validation for SDK-user-owned support messaging."`, `"This package uses the Meta Business Messaging / Page access token model for Instagram Messaging; it does not implement the separate Instagram API with Instagram Login messaging surface."`, `"Runtime provider calls use Meta's facebook-nodejs-business-sdk when credentials are configured; hosts may inject an Instagram/Meta provider client override."`, `"The package does not implement the broader Instagram Platform for media publishing, comments/moderation, mentions, insights, content discovery, account management, or full Graph API coverage."`\] |
| `coverage.scope` | `"support-workflow-subset"` |
| `credentialRequirements` | readonly \[\{ `description`: `"Server-side Page access token used by the Meta SDK-backed Graph adapter or an injected Instagram/Meta provider client."`; `id`: `"instagram-page-access-token"`; `label`: `"Meta Page access token"`; `metadata`: \{ `scopeKind`: `"provider-permission-labels"`; \}; `required`: `true`; `scopes`: readonly \[`"instagram_manage_messages"`, `"instagram_basic"`, `"pages_messaging"`, `"pages_show_list"`, `"pages_read_engagement"`, `"pages_manage_metadata"`\]; \}, \{ `description`: `"Facebook Page connected to the SDK user's Instagram professional account."`; `id`: `"instagram-page-id"`; `label`: `"Facebook Page ID"`; `required`: `true`; \}, \{ `description`: `"Instagram professional account ID used for conversations, profile, and webhook ownership checks."`; `id`: `"instagram-business-account-id"`; `label`: `"Instagram business account ID"`; `required`: `true`; \}, \{ `description`: `"Server-side app secret used to validate X-Hub-Signature-256 webhook deliveries."`; `id`: `"instagram-app-secret"`; `label`: `"Meta app secret"`; `required`: `true`; \}, \{ `description`: `"SDK-user-owned token checked during Meta webhook endpoint verification."`; `id`: `"instagram-webhook-verify-token"`; `label`: `"Webhook verify token"`; `required`: `false`; \}, \{ `description`: `"SDK-user-confirmed Page/app subscription to Instagram messaging webhook fields."`; `id`: `"instagram-page-webhook-subscription"`; `label`: `"Instagram messaging webhook subscription"`; `required`: `false`; \}, \{ `description`: `"SDK-user-reviewed permissions granted to the Meta app and enforced by the configured Meta SDK-backed Graph adapter or provider client."`; `id`: `"instagram-permissions"`; `label`: `"Instagram Graph permissions"`; `metadata`: \{ `scopeKind`: `"provider-permission-labels"`; \}; `required`: `true`; `scopes`: readonly \[`"instagram_manage_messages"`, `"instagram_basic"`, `"pages_messaging"`, `"pages_read_engagement"`, `"pages_manage_metadata"`\]; \}\] |
| `directions` | readonly \[`"receive-only"`, `"send-only"`, `"bidirectional"`\] |
| `id` | `"social.instagram"` |
| `limitations` | readonly \[`"Available operations depend on the SDK user's Meta app review, Page ownership, Instagram professional account link, granted permissions, webhook field subscriptions, messaging windows, HUMAN_AGENT review, rate limits, and regional policy."`, `"Instagram does not inherit general Messenger message tags as safe defaults; SDK users must configure Instagram-specific outbound policy and HUMAN_AGENT review where needed."`, `"Consent, outbound-contact policy, conversation continuity across channels, human escalation, retention, redaction, and deletion behavior are SDK-user configuration."`, `"This package provides typed operation contracts, webhook primitives, and a Meta SDK-backed Graph adapter; providerClient injection remains available as an override."`\] |
| `maintainers` | readonly \[\{ `name`: `"Cognidesk"`; `type`: `"official"`; \}\] |
| `metadata` | \{ `apiCoverage`: \{ `checkedAt`: `"2026-06-25"`; `fullMetaGraphCoverage`: `false`; `fullProviderApi`: `false`; `generatedFromOfficialSpec`: `false`; `implementedOperationCount`: `6`; `machineReadableSpecStatus`: `"No official public complete Instagram Messaging/Graph OpenAPI spec or dedicated typed Instagram Messaging SDK surface was found during this audit."`; `operationCatalog`: `"docs/provider-coverage/instagram-messaging-graph-selected-api-2026-06-18.operations.json"`; `selectedOperationCount`: `6`; \}; `channelCoverage`: \{ `accountPageReadiness`: `"facebook-nodejs-business-sdk-call"`; `commentsPublishingInsights`: `"not-covered"`; `conversations`: `"facebook-nodejs-business-sdk-call"`; `customTransportFallback`: `"package-owned-rest-adapter"`; `directMessages`: `"facebook-nodejs-business-sdk-call"`; `humanAgentWindow`: `"sdk-owned-policy"`; `messageDetails`: `"facebook-nodejs-business-sdk-call"`; `webhooks`: `"typed-challenge-verify-parse"`; \}; `docs`: readonly \[`"https://developers.facebook.com/documentation/business-messaging/instagram-messaging/features/send-message"`, `"https://developers.facebook.com/documentation/business-messaging/instagram-messaging/overview"`, `"https://developers.facebook.com/documentation/business-messaging/instagram-messaging/webhooks"`\]; `implementation`: \{ `allowedOperations`: readonly \[\{ `alias`: `"instagram.message.send"`; `id`: `"sendMessage"`; `source`: `"provider-sdk"`; `target`: `"facebookBusinessSdk.FacebookAdsApi.call"`; \}, \{ `alias`: `"instagram.conversations.list"`; `id`: `"listConversations"`; `source`: `"provider-sdk"`; `target`: `"facebookBusinessSdk.FacebookAdsApi.call"`; \}, \{ `alias`: `"instagram.conversationMessages.list"`; `id`: `"listConversationMessages"`; `source`: `"provider-sdk"`; `target`: `"facebookBusinessSdk.FacebookAdsApi.call"`; \}, \{ `alias`: `"instagram.message.read"`; `id`: `"getMessage"`; `source`: `"provider-sdk"`; `target`: `"facebookBusinessSdk.FacebookAdsApi.call"`; \}, \{ `alias`: `"instagram.account.read"`; `id`: `"getInstagramBusinessAccount"`; `source`: `"provider-sdk"`; `target`: `"facebookBusinessSdk.FacebookAdsApi.call"`; \}, \{ `alias`: `"instagram.page.read"`; `id`: `"getPage"`; `source`: `"provider-sdk"`; `target`: `"facebookBusinessSdk.FacebookAdsApi.call"`; \}\]; `implementationStrategy`: `"provider-sdk-default-with-typed-domain-adapter"`; `providerSdk`: \{ `license`: `"Platform License"`; `package`: `"facebook-nodejs-business-sdk"`; `runtimeCall`: `"FacebookAdsApi.call"`; `runtimeEntry`: `"FacebookAdsApi"`; `version`: `"24.0.1"`; \}; `sdkDecision`: `"Meta's official facebook-nodejs-business-sdk@24.0.1 is provider-owned and exposes FacebookAdsApi.call(method, path, params). This package maps its strict Instagram Messaging support slice onto that SDK call surface by default; the package-owned REST adapter is retained only for explicit custom transport options such as fetch, graphApiBaseUrl, graphApiVersion, signal, timeoutMs, or retry."`; `verifiedAt`: `"2026-06-25"`; \}; `providerClient`: \{ `customTransportFallbackPolicy`: `"package-owned-rest-adapter-for-fetch-base-version-signal-timeout-retry"`; `defaultClientPolicy`: `"facebook-nodejs-business-sdk-when-configured"`; `importPolicy`: `"provider-client-override-supported"`; `interface`: `"InstagramMetaProviderClient"`; `package`: `"facebook-nodejs-business-sdk-or-host-provided"`; \}; \} |
| `metadata.apiCoverage` | \{ `checkedAt`: `"2026-06-25"`; `fullMetaGraphCoverage`: `false`; `fullProviderApi`: `false`; `generatedFromOfficialSpec`: `false`; `implementedOperationCount`: `6`; `machineReadableSpecStatus`: `"No official public complete Instagram Messaging/Graph OpenAPI spec or dedicated typed Instagram Messaging SDK surface was found during this audit."`; `operationCatalog`: `"docs/provider-coverage/instagram-messaging-graph-selected-api-2026-06-18.operations.json"`; `selectedOperationCount`: `6`; \} |
| `metadata.apiCoverage.checkedAt` | `"2026-06-25"` |
| `metadata.apiCoverage.fullMetaGraphCoverage` | `false` |
| `metadata.apiCoverage.fullProviderApi` | `false` |
| `metadata.apiCoverage.generatedFromOfficialSpec` | `false` |
| `metadata.apiCoverage.implementedOperationCount` | `6` |
| `metadata.apiCoverage.machineReadableSpecStatus` | `"No official public complete Instagram Messaging/Graph OpenAPI spec or dedicated typed Instagram Messaging SDK surface was found during this audit."` |
| `metadata.apiCoverage.operationCatalog` | `"docs/provider-coverage/instagram-messaging-graph-selected-api-2026-06-18.operations.json"` |
| `metadata.apiCoverage.selectedOperationCount` | `6` |
| `metadata.channelCoverage` | \{ `accountPageReadiness`: `"facebook-nodejs-business-sdk-call"`; `commentsPublishingInsights`: `"not-covered"`; `conversations`: `"facebook-nodejs-business-sdk-call"`; `customTransportFallback`: `"package-owned-rest-adapter"`; `directMessages`: `"facebook-nodejs-business-sdk-call"`; `humanAgentWindow`: `"sdk-owned-policy"`; `messageDetails`: `"facebook-nodejs-business-sdk-call"`; `webhooks`: `"typed-challenge-verify-parse"`; \} |
| `metadata.channelCoverage.accountPageReadiness` | `"facebook-nodejs-business-sdk-call"` |
| `metadata.channelCoverage.commentsPublishingInsights` | `"not-covered"` |
| `metadata.channelCoverage.conversations` | `"facebook-nodejs-business-sdk-call"` |
| `metadata.channelCoverage.customTransportFallback` | `"package-owned-rest-adapter"` |
| `metadata.channelCoverage.directMessages` | `"facebook-nodejs-business-sdk-call"` |
| `metadata.channelCoverage.humanAgentWindow` | `"sdk-owned-policy"` |
| `metadata.channelCoverage.messageDetails` | `"facebook-nodejs-business-sdk-call"` |
| `metadata.channelCoverage.webhooks` | `"typed-challenge-verify-parse"` |
| `metadata.docs` | readonly \[`"https://developers.facebook.com/documentation/business-messaging/instagram-messaging/features/send-message"`, `"https://developers.facebook.com/documentation/business-messaging/instagram-messaging/overview"`, `"https://developers.facebook.com/documentation/business-messaging/instagram-messaging/webhooks"`\] |
| `metadata.implementation` | \{ `allowedOperations`: readonly \[\{ `alias`: `"instagram.message.send"`; `id`: `"sendMessage"`; `source`: `"provider-sdk"`; `target`: `"facebookBusinessSdk.FacebookAdsApi.call"`; \}, \{ `alias`: `"instagram.conversations.list"`; `id`: `"listConversations"`; `source`: `"provider-sdk"`; `target`: `"facebookBusinessSdk.FacebookAdsApi.call"`; \}, \{ `alias`: `"instagram.conversationMessages.list"`; `id`: `"listConversationMessages"`; `source`: `"provider-sdk"`; `target`: `"facebookBusinessSdk.FacebookAdsApi.call"`; \}, \{ `alias`: `"instagram.message.read"`; `id`: `"getMessage"`; `source`: `"provider-sdk"`; `target`: `"facebookBusinessSdk.FacebookAdsApi.call"`; \}, \{ `alias`: `"instagram.account.read"`; `id`: `"getInstagramBusinessAccount"`; `source`: `"provider-sdk"`; `target`: `"facebookBusinessSdk.FacebookAdsApi.call"`; \}, \{ `alias`: `"instagram.page.read"`; `id`: `"getPage"`; `source`: `"provider-sdk"`; `target`: `"facebookBusinessSdk.FacebookAdsApi.call"`; \}\]; `implementationStrategy`: `"provider-sdk-default-with-typed-domain-adapter"`; `providerSdk`: \{ `license`: `"Platform License"`; `package`: `"facebook-nodejs-business-sdk"`; `runtimeCall`: `"FacebookAdsApi.call"`; `runtimeEntry`: `"FacebookAdsApi"`; `version`: `"24.0.1"`; \}; `sdkDecision`: `"Meta's official facebook-nodejs-business-sdk@24.0.1 is provider-owned and exposes FacebookAdsApi.call(method, path, params). This package maps its strict Instagram Messaging support slice onto that SDK call surface by default; the package-owned REST adapter is retained only for explicit custom transport options such as fetch, graphApiBaseUrl, graphApiVersion, signal, timeoutMs, or retry."`; `verifiedAt`: `"2026-06-25"`; \} |
| `metadata.implementation.allowedOperations` | readonly \[\{ `alias`: `"instagram.message.send"`; `id`: `"sendMessage"`; `source`: `"provider-sdk"`; `target`: `"facebookBusinessSdk.FacebookAdsApi.call"`; \}, \{ `alias`: `"instagram.conversations.list"`; `id`: `"listConversations"`; `source`: `"provider-sdk"`; `target`: `"facebookBusinessSdk.FacebookAdsApi.call"`; \}, \{ `alias`: `"instagram.conversationMessages.list"`; `id`: `"listConversationMessages"`; `source`: `"provider-sdk"`; `target`: `"facebookBusinessSdk.FacebookAdsApi.call"`; \}, \{ `alias`: `"instagram.message.read"`; `id`: `"getMessage"`; `source`: `"provider-sdk"`; `target`: `"facebookBusinessSdk.FacebookAdsApi.call"`; \}, \{ `alias`: `"instagram.account.read"`; `id`: `"getInstagramBusinessAccount"`; `source`: `"provider-sdk"`; `target`: `"facebookBusinessSdk.FacebookAdsApi.call"`; \}, \{ `alias`: `"instagram.page.read"`; `id`: `"getPage"`; `source`: `"provider-sdk"`; `target`: `"facebookBusinessSdk.FacebookAdsApi.call"`; \}\] |
| `metadata.implementation.implementationStrategy` | `"provider-sdk-default-with-typed-domain-adapter"` |
| `metadata.implementation.providerSdk` | \{ `license`: `"Platform License"`; `package`: `"facebook-nodejs-business-sdk"`; `runtimeCall`: `"FacebookAdsApi.call"`; `runtimeEntry`: `"FacebookAdsApi"`; `version`: `"24.0.1"`; \} |
| `metadata.implementation.providerSdk.license` | `"Platform License"` |
| `metadata.implementation.providerSdk.package` | `"facebook-nodejs-business-sdk"` |
| `metadata.implementation.providerSdk.runtimeCall` | `"FacebookAdsApi.call"` |
| `metadata.implementation.providerSdk.runtimeEntry` | `"FacebookAdsApi"` |
| `metadata.implementation.providerSdk.version` | `"24.0.1"` |
| `metadata.implementation.sdkDecision` | `"Meta's official facebook-nodejs-business-sdk@24.0.1 is provider-owned and exposes FacebookAdsApi.call(method, path, params). This package maps its strict Instagram Messaging support slice onto that SDK call surface by default; the package-owned REST adapter is retained only for explicit custom transport options such as fetch, graphApiBaseUrl, graphApiVersion, signal, timeoutMs, or retry."` |
| `metadata.implementation.verifiedAt` | `"2026-06-25"` |
| `metadata.providerClient` | \{ `customTransportFallbackPolicy`: `"package-owned-rest-adapter-for-fetch-base-version-signal-timeout-retry"`; `defaultClientPolicy`: `"facebook-nodejs-business-sdk-when-configured"`; `importPolicy`: `"provider-client-override-supported"`; `interface`: `"InstagramMetaProviderClient"`; `package`: `"facebook-nodejs-business-sdk-or-host-provided"`; \} |
| `metadata.providerClient.customTransportFallbackPolicy` | `"package-owned-rest-adapter-for-fetch-base-version-signal-timeout-retry"` |
| `metadata.providerClient.defaultClientPolicy` | `"facebook-nodejs-business-sdk-when-configured"` |
| `metadata.providerClient.importPolicy` | `"provider-client-override-supported"` |
| `metadata.providerClient.interface` | `"InstagramMetaProviderClient"` |
| `metadata.providerClient.package` | `"facebook-nodejs-business-sdk-or-host-provided"` |
| `name` | `"Instagram Direct Messages"` |
| `operations` | readonly \[\{ `alias`: `"instagram.webhook.parse"`; `audiences`: readonly \[`"customer-facing"`, `"mixed"`\]; `capability`: `"receive"`; `description`: `"Validate and parse an inbound Instagram Messaging webhook request."`; `exposesSensitiveData`: `true`; `extension`: `true`; `label`: `"Parse Instagram webhook"`; `providerObject`: `"instagramWebhook"`; `providerOperation`: `"parseInstagramWebhook"`; `requiresCredential`: `true`; \}, \{ `alias`: `"instagram.message.send"`; `audiences`: readonly \[`"customer-facing"`\]; `capability`: `"send"`; `description`: `"Send an Instagram Messaging direct message through the configured Meta SDK-backed Graph adapter or provider client."`; `exposesSensitiveData`: `true`; `extension`: `true`; `externallyVisible`: `true`; `label`: `"Send Instagram message"`; `providerObject`: `"instagramDirectMessage"`; `providerOperation`: `"sendMessage"`; `requiresApproval`: `true`; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `alias`: `"instagram.draft.create"`; `audiences`: readonly \[`"customer-facing"`, `"mixed"`\]; `capability`: `"draft"`; `description`: `"Build an Instagram Messaging payload for SDK-user approval workflows."`; `exposesSensitiveData`: `true`; `extension`: `true`; `label`: `"Build Instagram message payload"`; `providerObject`: `"instagramMessageDraft"`; `providerOperation`: `"createInstagramTextMessage"`; \}, \{ `alias`: `"instagram.conversations.list"`; `audiences`: readonly \[`"internal-support"`, `"mixed"`\]; `capability`: `"search-provider-object"`; `description`: `"List Instagram conversations through the configured Meta SDK-backed Graph adapter or provider client."`; `exposesSensitiveData`: `true`; `extension`: `true`; `label`: `"List Instagram conversations"`; `providerObject`: `"instagramConversation"`; `providerOperation`: `"listConversations"`; `requiresCredential`: `true`; \}, \{ `alias`: `"instagram.conversationMessages.list"`; `audiences`: readonly \[`"internal-support"`, `"mixed"`\]; `capability`: `"read-provider-object"`; `description`: `"Read messages for an Instagram conversation through the configured Meta SDK-backed Graph adapter or provider client."`; `exposesSensitiveData`: `true`; `extension`: `true`; `label`: `"Read Instagram conversation messages"`; `providerObject`: `"instagramDirectMessage"`; `providerOperation`: `"listConversationMessages"`; `requiresCredential`: `true`; \}, \{ `alias`: `"instagram.message.read"`; `audiences`: readonly \[`"internal-support"`, `"mixed"`\]; `capability`: `"read-provider-object"`; `description`: `"Read an Instagram message by provider message ID through the configured Meta SDK-backed Graph adapter or provider client."`; `exposesSensitiveData`: `true`; `extension`: `true`; `label`: `"Read Instagram message"`; `providerObject`: `"instagramDirectMessage"`; `providerOperation`: `"getMessage"`; `requiresCredential`: `true`; \}, \{ `alias`: `"instagram.account.read"`; `audiences`: readonly \[`"internal-support"`, `"mixed"`\]; `capability`: `"read-provider-object"`; `description`: `"Read configured Instagram professional account metadata through the configured Meta SDK-backed Graph adapter or provider client."`; `exposesSensitiveData`: `true`; `extension`: `true`; `label`: `"Read Instagram account"`; `providerObject`: `"instagramAccount"`; `providerOperation`: `"getInstagramBusinessAccount"`; `requiresCredential`: `true`; \}, \{ `alias`: `"instagram.page.read"`; `audiences`: readonly \[`"internal-support"`, `"mixed"`\]; `capability`: `"read-provider-object"`; `description`: `"Read the Facebook Page connected to the Instagram professional account through the configured Meta SDK-backed Graph adapter or provider client."`; `extension`: `true`; `label`: `"Read connected Facebook Page"`; `providerObject`: `"instagramPage"`; `providerOperation`: `"getPage"`; `requiresCredential`: `true`; \}, \{ `alias`: `"instagram.webhook-signature"`; `audiences`: readonly \[`"internal-support"`\]; `capability`: `"social.webhook-signature"`; `description`: `"Validate Meta X-Hub-Signature-256 for Instagram webhook delivery."`; `exposesSensitiveData`: `true`; `extension`: `true`; `label`: `"Validate Instagram webhook signature"`; `providerObject`: `"instagramSignedWebhook"`; `providerOperation`: `"validateInstagramWebhookSignature"`; `requiresCredential`: `true`; \}\] |
| `packageName` | `"@cognidesk/integration-social-instagram"` |
| `privacyNotes` | readonly \[`"Instagram profile identifiers, usernames, message text, attachments, reactions, read events, conversation IDs, and webhook payloads can contain customer data."`, `"Meta Page access tokens, app secrets, and webhook verify tokens stay server-side and are represented in Studio only as readiness state."`\] |
| `provider` | `"instagram"` |
| `trustLevel` | `"official"` |

***

### instagramSocialSupportSlice

```ts
const instagramSocialSupportSlice: {
  allowedOperations: readonly [{
     alias: "instagram.message.send";
     id: "sendMessage";
     source: "provider-sdk";
     target: "facebookBusinessSdk.FacebookAdsApi.call";
   }, {
     alias: "instagram.conversations.list";
     id: "listConversations";
     source: "provider-sdk";
     target: "facebookBusinessSdk.FacebookAdsApi.call";
   }, {
     alias: "instagram.conversationMessages.list";
     id: "listConversationMessages";
     source: "provider-sdk";
     target: "facebookBusinessSdk.FacebookAdsApi.call";
   }, {
     alias: "instagram.message.read";
     id: "getMessage";
     source: "provider-sdk";
     target: "facebookBusinessSdk.FacebookAdsApi.call";
   }, {
     alias: "instagram.account.read";
     id: "getInstagramBusinessAccount";
     source: "provider-sdk";
     target: "facebookBusinessSdk.FacebookAdsApi.call";
   }, {
     alias: "instagram.page.read";
     id: "getPage";
     source: "provider-sdk";
     target: "facebookBusinessSdk.FacebookAdsApi.call";
  }];
  implementationStrategy: "provider-sdk-default-with-typed-domain-adapter";
  providerSdk: {
     license: "Platform License";
     package: "facebook-nodejs-business-sdk";
     runtimeCall: "FacebookAdsApi.call";
     runtimeEntry: "FacebookAdsApi";
     version: "24.0.1";
  };
  sdkDecision: "Meta's official facebook-nodejs-business-sdk@24.0.1 is provider-owned and exposes FacebookAdsApi.call(method, path, params). This package maps its strict Instagram Messaging support slice onto that SDK call surface by default; the package-owned REST adapter is retained only for explicit custom transport options such as fetch, graphApiBaseUrl, graphApiVersion, signal, timeoutMs, or retry.";
  verifiedAt: "2026-06-25";
};
```

#### Type Declaration

| Name | Type |
| ------ | ------ |
| <a id="property-allowedoperations-1"></a> `allowedOperations` | readonly \[\{ `alias`: `"instagram.message.send"`; `id`: `"sendMessage"`; `source`: `"provider-sdk"`; `target`: `"facebookBusinessSdk.FacebookAdsApi.call"`; \}, \{ `alias`: `"instagram.conversations.list"`; `id`: `"listConversations"`; `source`: `"provider-sdk"`; `target`: `"facebookBusinessSdk.FacebookAdsApi.call"`; \}, \{ `alias`: `"instagram.conversationMessages.list"`; `id`: `"listConversationMessages"`; `source`: `"provider-sdk"`; `target`: `"facebookBusinessSdk.FacebookAdsApi.call"`; \}, \{ `alias`: `"instagram.message.read"`; `id`: `"getMessage"`; `source`: `"provider-sdk"`; `target`: `"facebookBusinessSdk.FacebookAdsApi.call"`; \}, \{ `alias`: `"instagram.account.read"`; `id`: `"getInstagramBusinessAccount"`; `source`: `"provider-sdk"`; `target`: `"facebookBusinessSdk.FacebookAdsApi.call"`; \}, \{ `alias`: `"instagram.page.read"`; `id`: `"getPage"`; `source`: `"provider-sdk"`; `target`: `"facebookBusinessSdk.FacebookAdsApi.call"`; \}\] |
| <a id="property-implementationstrategy-1"></a> `implementationStrategy` | `"provider-sdk-default-with-typed-domain-adapter"` |
| <a id="property-providersdk-1"></a> `providerSdk` | \{ `license`: `"Platform License"`; `package`: `"facebook-nodejs-business-sdk"`; `runtimeCall`: `"FacebookAdsApi.call"`; `runtimeEntry`: `"FacebookAdsApi"`; `version`: `"24.0.1"`; \} |
| `providerSdk.license` | `"Platform License"` |
| `providerSdk.package` | `"facebook-nodejs-business-sdk"` |
| `providerSdk.runtimeCall` | `"FacebookAdsApi.call"` |
| `providerSdk.runtimeEntry` | `"FacebookAdsApi"` |
| `providerSdk.version` | `"24.0.1"` |
| <a id="property-sdkdecision-1"></a> `sdkDecision` | `"Meta's official facebook-nodejs-business-sdk@24.0.1 is provider-owned and exposes FacebookAdsApi.call(method, path, params). This package maps its strict Instagram Messaging support slice onto that SDK call surface by default; the package-owned REST adapter is retained only for explicit custom transport options such as fetch, graphApiBaseUrl, graphApiVersion, signal, timeoutMs, or retry."` |
| <a id="property-verifiedat-1"></a> `verifiedAt` | `"2026-06-25"` |
