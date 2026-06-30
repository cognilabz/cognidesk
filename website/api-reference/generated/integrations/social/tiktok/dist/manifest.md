# integrations/social/tiktok/dist/manifest

## Variables

### tiktokSocialProviderManifest

```ts
const tiktokSocialProviderManifest: {
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
     description: "Validates TikTok-Signature and parses TikTok event payloads for SDK-user-owned support workflows.";
     exposesSensitiveData: true;
     label: "Receive TikTok webhooks";
     providerObjects: readonly [{
        kind: "tiktokWebhook";
        label: "TikTok Webhook";
      }, {
        kind: "tiktokEvent";
        label: "TikTok Event";
     }];
     requiresCredential: true;
   }, {
     audiences: readonly ["customer-facing", "mixed"];
     capability: "draft";
     description: "Builds TikTok Business comment reply payloads without deciding outbound or moderation policy.";
     exposesSensitiveData: true;
     label: "Build TikTok comment replies";
     providerObjects: readonly [{
        kind: "tiktokCommentReplyDraft";
        label: "TikTok Comment Reply Draft";
     }];
   }, {
     audiences: readonly ["customer-facing", "mixed"];
     capability: "thread";
     description: "Associates TikTok videos, comments, replies, and webhook IDs with Cognidesk conversation policy selected by SDK users.";
     exposesSensitiveData: true;
     label: "Use TikTok comments as threads";
     providerObjects: readonly [{
        kind: "tiktokVideo";
        label: "TikTok Video";
      }, {
        kind: "tiktokComment";
        label: "TikTok Comment";
     }];
     requiresCredential: true;
   }, {
     audiences: readonly ["internal-support", "mixed"];
     capability: "read-provider-object";
     description: "Reads TikTok Display API profile/videos, Research API comments, and Business API comment resources through the configured REST adapter or provider client where approved.";
     exposesSensitiveData: true;
     label: "Read TikTok profile, videos, and comments";
     providerObjects: readonly [{
        kind: "tiktokUser";
        label: "TikTok User";
      }, {
        kind: "tiktokVideo";
        label: "TikTok Video";
      }, {
        kind: "tiktokComment";
        label: "TikTok Comment";
     }];
     requiresCredential: true;
   }, {
     audiences: readonly ["internal-support", "mixed"];
     capability: "search-provider-object";
     description: "Lists approved TikTok videos and comments with SDK-user-supplied fields and pagination through the configured REST adapter or provider client.";
     exposesSensitiveData: true;
     label: "List TikTok videos and comments";
     providerObjects: readonly [{
        kind: "tiktokVideo";
        label: "TikTok Video";
      }, {
        kind: "tiktokComment";
        label: "TikTok Comment";
     }];
     requiresCredential: true;
   }, {
     audiences: readonly ["customer-facing"];
     capability: "social.comment-reply";
     description: "Calls TikTok Business API comment reply primitives through the configured REST adapter or provider client only when the SDK user has the relevant Business account and approvals.";
     exposesSensitiveData: true;
     extension: true;
     label: "Reply to TikTok Business comments";
     providerObjects: readonly [{
        kind: "tiktokComment";
        label: "TikTok Comment";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     audiences: readonly ["internal-support"];
     capability: "social.webhook-signature";
     description: "Validates the TikTok-Signature header using HMAC-SHA256 over timestamp and raw body.";
     exposesSensitiveData: true;
     extension: true;
     label: "Validate TikTok webhook signatures";
     providerObjects: readonly [{
        kind: "tiktokSignedWebhook";
        label: "TikTok Signed Webhook";
     }];
     requiresCredential: true;
  }];
  category: "social";
  channelAudiences: readonly ["customer-facing", "mixed"];
  coverage: {
     evidence: readonly [{
        label: "TikTok Display API get started";
        url: "https://developers.tiktok.com/doc/display-api-get-started/";
      }, {
        label: "TikTok user info API";
        url: "https://developers.tiktok.com/doc/tiktok-api-v2-get-user-info";
      }, {
        label: "TikTok video list API";
        url: "https://developers.tiktok.com/doc/tiktok-api-v2-video-list";
      }, {
        label: "TikTok Research video comments API";
        url: "https://developers.tiktok.com/doc/research-api-specs-query-video-comments";
      }, {
        label: "TikTok webhooks overview";
        url: "https://developers.tiktok.com/doc/webhooks-overview/";
      }, {
        label: "TikTok webhook signature verification";
        url: "https://developers.tiktok.com/doc/webhooks-verification";
      }, {
        label: "TikTok Content Posting status API";
        url: "https://developers.tiktok.com/doc/content-posting-api-reference-get-video-status";
     }];
     notes: readonly ["Coverage is limited to selected TikTok Display API user/video reads, Research API comment reads, Business API comment operations, posting-status reads, and webhook signature parsing for SDK-user-owned support/review workflows.", "Runtime provider calls use the built-in REST adapter when credentials are configured; hosts may inject a TikTok provider client override.", "The package does not implement a general TikTok direct-message inbox and does not cover the full TikTok product surface for Content Posting, Share Kit, Commercial Content, Data Portability, Shop, analytics, tester/launch, or full Business Center administration."];
     scope: "support-workflow-subset";
  };
  credentialRequirements: readonly [{
     description: "TikTok for Developers app client key owned and configured by the SDK user.";
     id: "tiktok-client-key";
     label: "TikTok client key";
     required: true;
   }, {
     description: "Server-side TikTok app secret used for OAuth and webhook signature validation.";
     id: "tiktok-client-secret";
     label: "TikTok client secret";
     required: true;
   }, {
     description: "User or client access token used by the built-in TikTok REST adapter or an injected TikTok provider client for approved TikTok APIs.";
     id: "tiktok-access-token";
     label: "TikTok access token";
     metadata: {
        scopeKind: "provider-oauth-scopes";
     };
     required: true;
     scopes: readonly ["user.info.basic", "user.info.profile", "video.list"];
   }, {
     description: "Authorized user's open_id and/or TikTok Business account ID used to scope profile, video, and comment operations.";
     id: "tiktok-account-id";
     label: "TikTok Open ID or business account ID";
     required: true;
   }, {
     description: "TikTok-Signature validation with the SDK user's client secret before webhook JSON is processed.";
     id: "tiktok-webhook-signature";
     label: "Webhook signature validation";
     required: true;
   }, {
     description: "SDK-user-confirmed HTTPS callback URL registration for enabled TikTok webhook products.";
     id: "tiktok-webhook-callback";
     label: "TikTok webhook callback URL registration";
     required: true;
   }, {
     description: "SDK-user-reviewed Login Kit, Display API, Research API, and/or Business API scopes needed for enabled support features; content upload/publish scopes are not used by this adapter.";
     id: "tiktok-scopes";
     label: "TikTok scopes and product approvals";
     metadata: {
        oauthScopes: readonly ["user.info.basic", "user.info.profile", "user.info.stats", "video.list", "research.data.basic"];
        privilegeGuidance: "TikTok Business API comment operations require separate Business API account/product approval; these OAuth scopes do not grant Business comment access by themselves.";
        scopeKind: "mixed-auth-mode";
     };
     required: true;
     scopes: readonly ["user.info.basic", "user.info.profile", "user.info.stats", "video.list", "research.data.basic"];
  }];
  directions: readonly ["receive-only", "send-only", "bidirectional"];
  id: "social.tiktok";
  limitations: readonly ["TikTok's public developer APIs do not expose a general customer-service direct-message inbox; this package intentionally does not provide a generic DM send/read client.", "Comment reply operations require TikTok API for Business account access and approvals; Display API and Research API access are separate TikTok products with separate scopes and eligibility.", "Available operations depend on the SDK user's app review, regional availability, callback URL registration, scopes, product approvals, rate limits, Business account ownership, and TikTok platform policy.", "TikTok direct-message lead APIs are Business lead surfaces, not a generic customer-service DM inbox for this adapter.", "Provider API calls use the built-in REST adapter when accessToken is configured; providerClient injection remains available as an override.", "Consent, outbound-contact policy, conversation continuity, human escalation, moderation, retention, redaction, and deletion behavior are SDK-user configuration."];
  maintainers: readonly [{
     name: "Cognidesk";
     type: "official";
  }];
  metadata: {
     apiCoverage: {
        checkedAt: "2026-06-25";
        fullProviderApi: false;
        fullTikTokPlatformCoverage: false;
        generatedFromOfficialSpec: false;
        implementedOperationCount: number;
        machineReadableSpecStatus: "No official public complete TikTok Developers/Business OpenAPI spec was found for this mixed selected surface during this audit.";
        operationCatalog: "package:src/selected-operations.ts";
        selectedOperationCount: number;
     };
     channelCoverage: {
        businessComments: "provider-rest-adapter-list-create-reply";
        contentPostingCreate: "not-covered";
        contentPostingStatus: "provider-rest-adapter-read";
        directMessages: "not-covered";
        displayProfileVideos: "provider-rest-adapter-read-list";
        researchVideoComments: "provider-rest-adapter-query";
        shopAnalyticsCommercialContent: "provider-supported-not-typed";
        webhooks: "typed-verify-parse";
     };
     docs: readonly ["https://developers.tiktok.com/doc/tiktok-api-v2-get-user-info", "https://developers.tiktok.com/doc/tiktok-api-v2-video-list", "https://developers.tiktok.com/doc/research-api-specs-query-video-comments", "https://developers.tiktok.com/doc/webhooks-overview", "https://developers.tiktok.com/doc/webhooks-verification", "https://business-api.tiktok.com/portal/docs/reply-to-a-comment/v1.3"];
     implementation: {
        allowedOperations: {
           alias: string;
           id: string;
           providerApi:   | "tiktok-open.v2.display"
              | "tiktok-open.v2.content-posting"
              | "tiktok-open.v2.research"
              | "tiktok-business.v1.3";
           providerPath: string;
           source: string;
           sourceUrl: string;
           target: string;
        }[];
        apiCoverage: {
           checkedAt: "2026-06-25";
           operationCatalog: "package:src/selected-operations.ts";
        };
        checkedAt: "2026-06-25";
        implementationStrategy: "no-official-sdk-rest-adapter";
        providerRestAdapterException: {
           checkedAt: "2026-06-25";
           checkedVersion: "1.1.3";
           defaultClientPolicy: "built-in-tiktok-rest-adapter";
           license: "Unlicense";
           reason: "The official JavaScript SDK only targets TikTok Business API generated clients. Its CommentsApi exposes the Business comment list/post surface, but it does not cover TikTok Developers Open API Display reads, Research API comment reads, Content Posting status reads, webhook verification, or the full mixed selected support surface required by this package.";
           result: "sdk-not-suitable-for-mixed-social-surface";
           sdkPackage: "tiktok-business-api-sdk-official";
           typedClientOverride: "TikTokSocialProviderClient";
        };
        sdkDecision: {
           auditedPackages: readonly [{
              package: "tiktok-business-api-sdk-official";
              reason: "CommentsApi covers a Business comment surface, but the package does not expose the full mixed TikTok Developers/Business support surface selected by this adapter.";
              source: "npm + tiktok/tiktok-business-api-sdk";
              status: "not-suitable";
              version: "1.1.3";
           }];
           notes: readonly ["TikTok OpenSDK is an official mobile Login/Share Kit, not a server-side JavaScript/TypeScript client for this selected support surface.", "The official TikTok Business API SDK is a broad Business API package with comment helpers, but it does not cover TikTok Developers Open API Display, Research API, Content Posting status, or webhook verification for this mixed adapter surface.", "This package therefore ships a built-in REST adapter for the selected operations and still accepts an injected TikTok provider client override."];
           viableOfficialSdk: false;
        };
        selectedOperationChecksum: string;
        selectedOperationChecksumAlgorithm: "sha256";
        selectedOperations: (
           | {
           api: "tiktok-open.v2.display";
           functionName: string;
           method: "GET";
           path: string;
           sourceUrl: string;
           uid: string;
         }
           | {
           api: "tiktok-open.v2.display";
           functionName: string;
           method: "POST";
           path: string;
           sourceUrl: string;
           uid: string;
         }
           | {
           api: "tiktok-open.v2.content-posting";
           functionName: string;
           method: "POST";
           path: string;
           sourceUrl: string;
           uid: string;
         }
           | {
           api: "tiktok-open.v2.research";
           functionName: string;
           method: "POST";
           path: string;
           sourceUrl: string;
           uid: string;
         }
           | {
           api: "tiktok-business.v1.3";
           functionName: string;
           method: "GET";
           path: string;
           sourceUrl: string;
           uid: string;
         }
           | {
           api: "tiktok-business.v1.3";
           functionName: string;
           method: "POST";
           path: string;
           sourceUrl: string;
           uid: string;
        })[];
        source: "official TikTok Developers and TikTok Business API docs";
        sourceVersion: "TikTok Open API v2 + Business API v1.3 public docs checked 2026-06-25";
     };
     providerClient: {
        defaultClientPolicy: "provider-rest-adapter-when-configured";
        importPolicy: "provider-client-override-supported";
        interface: "TikTokSocialProviderClient";
        package: "built-in-or-host-provided";
     };
     providerRestAdapterException: {
        checkedAt: "2026-06-25";
        checkedVersion: "1.1.3";
        defaultClientPolicy: "built-in-tiktok-rest-adapter";
        license: "Unlicense";
        reason: "The official JavaScript SDK only targets TikTok Business API generated clients. Its CommentsApi exposes the Business comment list/post surface, but it does not cover TikTok Developers Open API Display reads, Research API comment reads, Content Posting status reads, webhook verification, or the full mixed selected support surface required by this package.";
        result: "sdk-not-suitable-for-mixed-social-surface";
        sdkPackage: "tiktok-business-api-sdk-official";
        typedClientOverride: "TikTokSocialProviderClient";
     };
  };
  name: "TikTok Social";
  packageName: "@cognidesk/integration-social-tiktok";
  privacyNotes: readonly ["TikTok open IDs, usernames, profile metadata, video IDs, captions, comments, replies, webhook IDs, and event payloads can contain customer data.", "Client secrets, access tokens, business account IDs, and webhook validation settings stay server-side and are represented in Studio only as readiness state."];
  provider: "tiktok";
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
| `capabilities` | readonly \[\{ `audiences`: readonly \[`"customer-facing"`, `"mixed"`\]; `capability`: `"receive"`; `description`: `"Validates TikTok-Signature and parses TikTok event payloads for SDK-user-owned support workflows."`; `exposesSensitiveData`: `true`; `label`: `"Receive TikTok webhooks"`; `providerObjects`: readonly \[\{ `kind`: `"tiktokWebhook"`; `label`: `"TikTok Webhook"`; \}, \{ `kind`: `"tiktokEvent"`; `label`: `"TikTok Event"`; \}\]; `requiresCredential`: `true`; \}, \{ `audiences`: readonly \[`"customer-facing"`, `"mixed"`\]; `capability`: `"draft"`; `description`: `"Builds TikTok Business comment reply payloads without deciding outbound or moderation policy."`; `exposesSensitiveData`: `true`; `label`: `"Build TikTok comment replies"`; `providerObjects`: readonly \[\{ `kind`: `"tiktokCommentReplyDraft"`; `label`: `"TikTok Comment Reply Draft"`; \}\]; \}, \{ `audiences`: readonly \[`"customer-facing"`, `"mixed"`\]; `capability`: `"thread"`; `description`: `"Associates TikTok videos, comments, replies, and webhook IDs with Cognidesk conversation policy selected by SDK users."`; `exposesSensitiveData`: `true`; `label`: `"Use TikTok comments as threads"`; `providerObjects`: readonly \[\{ `kind`: `"tiktokVideo"`; `label`: `"TikTok Video"`; \}, \{ `kind`: `"tiktokComment"`; `label`: `"TikTok Comment"`; \}\]; `requiresCredential`: `true`; \}, \{ `audiences`: readonly \[`"internal-support"`, `"mixed"`\]; `capability`: `"read-provider-object"`; `description`: `"Reads TikTok Display API profile/videos, Research API comments, and Business API comment resources through the configured REST adapter or provider client where approved."`; `exposesSensitiveData`: `true`; `label`: `"Read TikTok profile, videos, and comments"`; `providerObjects`: readonly \[\{ `kind`: `"tiktokUser"`; `label`: `"TikTok User"`; \}, \{ `kind`: `"tiktokVideo"`; `label`: `"TikTok Video"`; \}, \{ `kind`: `"tiktokComment"`; `label`: `"TikTok Comment"`; \}\]; `requiresCredential`: `true`; \}, \{ `audiences`: readonly \[`"internal-support"`, `"mixed"`\]; `capability`: `"search-provider-object"`; `description`: `"Lists approved TikTok videos and comments with SDK-user-supplied fields and pagination through the configured REST adapter or provider client."`; `exposesSensitiveData`: `true`; `label`: `"List TikTok videos and comments"`; `providerObjects`: readonly \[\{ `kind`: `"tiktokVideo"`; `label`: `"TikTok Video"`; \}, \{ `kind`: `"tiktokComment"`; `label`: `"TikTok Comment"`; \}\]; `requiresCredential`: `true`; \}, \{ `audiences`: readonly \[`"customer-facing"`\]; `capability`: `"social.comment-reply"`; `description`: `"Calls TikTok Business API comment reply primitives through the configured REST adapter or provider client only when the SDK user has the relevant Business account and approvals."`; `exposesSensitiveData`: `true`; `extension`: `true`; `label`: `"Reply to TikTok Business comments"`; `providerObjects`: readonly \[\{ `kind`: `"tiktokComment"`; `label`: `"TikTok Comment"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `audiences`: readonly \[`"internal-support"`\]; `capability`: `"social.webhook-signature"`; `description`: `"Validates the TikTok-Signature header using HMAC-SHA256 over timestamp and raw body."`; `exposesSensitiveData`: `true`; `extension`: `true`; `label`: `"Validate TikTok webhook signatures"`; `providerObjects`: readonly \[\{ `kind`: `"tiktokSignedWebhook"`; `label`: `"TikTok Signed Webhook"`; \}\]; `requiresCredential`: `true`; \}\] |
| `category` | `"social"` |
| `channelAudiences` | readonly \[`"customer-facing"`, `"mixed"`\] |
| `coverage` | \{ `evidence`: readonly \[\{ `label`: `"TikTok Display API get started"`; `url`: `"https://developers.tiktok.com/doc/display-api-get-started/"`; \}, \{ `label`: `"TikTok user info API"`; `url`: `"https://developers.tiktok.com/doc/tiktok-api-v2-get-user-info"`; \}, \{ `label`: `"TikTok video list API"`; `url`: `"https://developers.tiktok.com/doc/tiktok-api-v2-video-list"`; \}, \{ `label`: `"TikTok Research video comments API"`; `url`: `"https://developers.tiktok.com/doc/research-api-specs-query-video-comments"`; \}, \{ `label`: `"TikTok webhooks overview"`; `url`: `"https://developers.tiktok.com/doc/webhooks-overview/"`; \}, \{ `label`: `"TikTok webhook signature verification"`; `url`: `"https://developers.tiktok.com/doc/webhooks-verification"`; \}, \{ `label`: `"TikTok Content Posting status API"`; `url`: `"https://developers.tiktok.com/doc/content-posting-api-reference-get-video-status"`; \}\]; `notes`: readonly \[`"Coverage is limited to selected TikTok Display API user/video reads, Research API comment reads, Business API comment operations, posting-status reads, and webhook signature parsing for SDK-user-owned support/review workflows."`, `"Runtime provider calls use the built-in REST adapter when credentials are configured; hosts may inject a TikTok provider client override."`, `"The package does not implement a general TikTok direct-message inbox and does not cover the full TikTok product surface for Content Posting, Share Kit, Commercial Content, Data Portability, Shop, analytics, tester/launch, or full Business Center administration."`\]; `scope`: `"support-workflow-subset"`; \} |
| `coverage.evidence` | readonly \[\{ `label`: `"TikTok Display API get started"`; `url`: `"https://developers.tiktok.com/doc/display-api-get-started/"`; \}, \{ `label`: `"TikTok user info API"`; `url`: `"https://developers.tiktok.com/doc/tiktok-api-v2-get-user-info"`; \}, \{ `label`: `"TikTok video list API"`; `url`: `"https://developers.tiktok.com/doc/tiktok-api-v2-video-list"`; \}, \{ `label`: `"TikTok Research video comments API"`; `url`: `"https://developers.tiktok.com/doc/research-api-specs-query-video-comments"`; \}, \{ `label`: `"TikTok webhooks overview"`; `url`: `"https://developers.tiktok.com/doc/webhooks-overview/"`; \}, \{ `label`: `"TikTok webhook signature verification"`; `url`: `"https://developers.tiktok.com/doc/webhooks-verification"`; \}, \{ `label`: `"TikTok Content Posting status API"`; `url`: `"https://developers.tiktok.com/doc/content-posting-api-reference-get-video-status"`; \}\] |
| `coverage.notes` | readonly \[`"Coverage is limited to selected TikTok Display API user/video reads, Research API comment reads, Business API comment operations, posting-status reads, and webhook signature parsing for SDK-user-owned support/review workflows."`, `"Runtime provider calls use the built-in REST adapter when credentials are configured; hosts may inject a TikTok provider client override."`, `"The package does not implement a general TikTok direct-message inbox and does not cover the full TikTok product surface for Content Posting, Share Kit, Commercial Content, Data Portability, Shop, analytics, tester/launch, or full Business Center administration."`\] |
| `coverage.scope` | `"support-workflow-subset"` |
| `credentialRequirements` | readonly \[\{ `description`: `"TikTok for Developers app client key owned and configured by the SDK user."`; `id`: `"tiktok-client-key"`; `label`: `"TikTok client key"`; `required`: `true`; \}, \{ `description`: `"Server-side TikTok app secret used for OAuth and webhook signature validation."`; `id`: `"tiktok-client-secret"`; `label`: `"TikTok client secret"`; `required`: `true`; \}, \{ `description`: `"User or client access token used by the built-in TikTok REST adapter or an injected TikTok provider client for approved TikTok APIs."`; `id`: `"tiktok-access-token"`; `label`: `"TikTok access token"`; `metadata`: \{ `scopeKind`: `"provider-oauth-scopes"`; \}; `required`: `true`; `scopes`: readonly \[`"user.info.basic"`, `"user.info.profile"`, `"video.list"`\]; \}, \{ `description`: `"Authorized user's open_id and/or TikTok Business account ID used to scope profile, video, and comment operations."`; `id`: `"tiktok-account-id"`; `label`: `"TikTok Open ID or business account ID"`; `required`: `true`; \}, \{ `description`: `"TikTok-Signature validation with the SDK user's client secret before webhook JSON is processed."`; `id`: `"tiktok-webhook-signature"`; `label`: `"Webhook signature validation"`; `required`: `true`; \}, \{ `description`: `"SDK-user-confirmed HTTPS callback URL registration for enabled TikTok webhook products."`; `id`: `"tiktok-webhook-callback"`; `label`: `"TikTok webhook callback URL registration"`; `required`: `true`; \}, \{ `description`: `"SDK-user-reviewed Login Kit, Display API, Research API, and/or Business API scopes needed for enabled support features; content upload/publish scopes are not used by this adapter."`; `id`: `"tiktok-scopes"`; `label`: `"TikTok scopes and product approvals"`; `metadata`: \{ `oauthScopes`: readonly \[`"user.info.basic"`, `"user.info.profile"`, `"user.info.stats"`, `"video.list"`, `"research.data.basic"`\]; `privilegeGuidance`: `"TikTok Business API comment operations require separate Business API account/product approval; these OAuth scopes do not grant Business comment access by themselves."`; `scopeKind`: `"mixed-auth-mode"`; \}; `required`: `true`; `scopes`: readonly \[`"user.info.basic"`, `"user.info.profile"`, `"user.info.stats"`, `"video.list"`, `"research.data.basic"`\]; \}\] |
| `directions` | readonly \[`"receive-only"`, `"send-only"`, `"bidirectional"`\] |
| `id` | `"social.tiktok"` |
| `limitations` | readonly \[`"TikTok's public developer APIs do not expose a general customer-service direct-message inbox; this package intentionally does not provide a generic DM send/read client."`, `"Comment reply operations require TikTok API for Business account access and approvals; Display API and Research API access are separate TikTok products with separate scopes and eligibility."`, `"Available operations depend on the SDK user's app review, regional availability, callback URL registration, scopes, product approvals, rate limits, Business account ownership, and TikTok platform policy."`, `"TikTok direct-message lead APIs are Business lead surfaces, not a generic customer-service DM inbox for this adapter."`, `"Provider API calls use the built-in REST adapter when accessToken is configured; providerClient injection remains available as an override."`, `"Consent, outbound-contact policy, conversation continuity, human escalation, moderation, retention, redaction, and deletion behavior are SDK-user configuration."`\] |
| `maintainers` | readonly \[\{ `name`: `"Cognidesk"`; `type`: `"official"`; \}\] |
| `metadata` | \{ `apiCoverage`: \{ `checkedAt`: `"2026-06-25"`; `fullProviderApi`: `false`; `fullTikTokPlatformCoverage`: `false`; `generatedFromOfficialSpec`: `false`; `implementedOperationCount`: `number`; `machineReadableSpecStatus`: `"No official public complete TikTok Developers/Business OpenAPI spec was found for this mixed selected surface during this audit."`; `operationCatalog`: `"package:src/selected-operations.ts"`; `selectedOperationCount`: `number`; \}; `channelCoverage`: \{ `businessComments`: `"provider-rest-adapter-list-create-reply"`; `contentPostingCreate`: `"not-covered"`; `contentPostingStatus`: `"provider-rest-adapter-read"`; `directMessages`: `"not-covered"`; `displayProfileVideos`: `"provider-rest-adapter-read-list"`; `researchVideoComments`: `"provider-rest-adapter-query"`; `shopAnalyticsCommercialContent`: `"provider-supported-not-typed"`; `webhooks`: `"typed-verify-parse"`; \}; `docs`: readonly \[`"https://developers.tiktok.com/doc/tiktok-api-v2-get-user-info"`, `"https://developers.tiktok.com/doc/tiktok-api-v2-video-list"`, `"https://developers.tiktok.com/doc/research-api-specs-query-video-comments"`, `"https://developers.tiktok.com/doc/webhooks-overview"`, `"https://developers.tiktok.com/doc/webhooks-verification"`, `"https://business-api.tiktok.com/portal/docs/reply-to-a-comment/v1.3"`\]; `implementation`: \{ `allowedOperations`: \{ `alias`: `string`; `id`: `string`; `providerApi`: \| `"tiktok-open.v2.display"` \| `"tiktok-open.v2.content-posting"` \| `"tiktok-open.v2.research"` \| `"tiktok-business.v1.3"`; `providerPath`: `string`; `source`: `string`; `sourceUrl`: `string`; `target`: `string`; \}[]; `apiCoverage`: \{ `checkedAt`: `"2026-06-25"`; `operationCatalog`: `"package:src/selected-operations.ts"`; \}; `checkedAt`: `"2026-06-25"`; `implementationStrategy`: `"no-official-sdk-rest-adapter"`; `providerRestAdapterException`: \{ `checkedAt`: `"2026-06-25"`; `checkedVersion`: `"1.1.3"`; `defaultClientPolicy`: `"built-in-tiktok-rest-adapter"`; `license`: `"Unlicense"`; `reason`: `"The official JavaScript SDK only targets TikTok Business API generated clients. Its CommentsApi exposes the Business comment list/post surface, but it does not cover TikTok Developers Open API Display reads, Research API comment reads, Content Posting status reads, webhook verification, or the full mixed selected support surface required by this package."`; `result`: `"sdk-not-suitable-for-mixed-social-surface"`; `sdkPackage`: `"tiktok-business-api-sdk-official"`; `typedClientOverride`: `"TikTokSocialProviderClient"`; \}; `sdkDecision`: \{ `auditedPackages`: readonly \[\{ `package`: `"tiktok-business-api-sdk-official"`; `reason`: `"CommentsApi covers a Business comment surface, but the package does not expose the full mixed TikTok Developers/Business support surface selected by this adapter."`; `source`: `"npm + tiktok/tiktok-business-api-sdk"`; `status`: `"not-suitable"`; `version`: `"1.1.3"`; \}\]; `notes`: readonly \[`"TikTok OpenSDK is an official mobile Login/Share Kit, not a server-side JavaScript/TypeScript client for this selected support surface."`, `"The official TikTok Business API SDK is a broad Business API package with comment helpers, but it does not cover TikTok Developers Open API Display, Research API, Content Posting status, or webhook verification for this mixed adapter surface."`, `"This package therefore ships a built-in REST adapter for the selected operations and still accepts an injected TikTok provider client override."`\]; `viableOfficialSdk`: `false`; \}; `selectedOperationChecksum`: `string`; `selectedOperationChecksumAlgorithm`: `"sha256"`; `selectedOperations`: ( \| \{ `api`: `"tiktok-open.v2.display"`; `functionName`: `string`; `method`: `"GET"`; `path`: `string`; `sourceUrl`: `string`; `uid`: `string`; \} \| \{ `api`: `"tiktok-open.v2.display"`; `functionName`: `string`; `method`: `"POST"`; `path`: `string`; `sourceUrl`: `string`; `uid`: `string`; \} \| \{ `api`: `"tiktok-open.v2.content-posting"`; `functionName`: `string`; `method`: `"POST"`; `path`: `string`; `sourceUrl`: `string`; `uid`: `string`; \} \| \{ `api`: `"tiktok-open.v2.research"`; `functionName`: `string`; `method`: `"POST"`; `path`: `string`; `sourceUrl`: `string`; `uid`: `string`; \} \| \{ `api`: `"tiktok-business.v1.3"`; `functionName`: `string`; `method`: `"GET"`; `path`: `string`; `sourceUrl`: `string`; `uid`: `string`; \} \| \{ `api`: `"tiktok-business.v1.3"`; `functionName`: `string`; `method`: `"POST"`; `path`: `string`; `sourceUrl`: `string`; `uid`: `string`; \})[]; `source`: `"official TikTok Developers and TikTok Business API docs"`; `sourceVersion`: `"TikTok Open API v2 + Business API v1.3 public docs checked 2026-06-25"`; \}; `providerClient`: \{ `defaultClientPolicy`: `"provider-rest-adapter-when-configured"`; `importPolicy`: `"provider-client-override-supported"`; `interface`: `"TikTokSocialProviderClient"`; `package`: `"built-in-or-host-provided"`; \}; `providerRestAdapterException`: \{ `checkedAt`: `"2026-06-25"`; `checkedVersion`: `"1.1.3"`; `defaultClientPolicy`: `"built-in-tiktok-rest-adapter"`; `license`: `"Unlicense"`; `reason`: `"The official JavaScript SDK only targets TikTok Business API generated clients. Its CommentsApi exposes the Business comment list/post surface, but it does not cover TikTok Developers Open API Display reads, Research API comment reads, Content Posting status reads, webhook verification, or the full mixed selected support surface required by this package."`; `result`: `"sdk-not-suitable-for-mixed-social-surface"`; `sdkPackage`: `"tiktok-business-api-sdk-official"`; `typedClientOverride`: `"TikTokSocialProviderClient"`; \}; \} |
| `metadata.apiCoverage` | \{ `checkedAt`: `"2026-06-25"`; `fullProviderApi`: `false`; `fullTikTokPlatformCoverage`: `false`; `generatedFromOfficialSpec`: `false`; `implementedOperationCount`: `number`; `machineReadableSpecStatus`: `"No official public complete TikTok Developers/Business OpenAPI spec was found for this mixed selected surface during this audit."`; `operationCatalog`: `"package:src/selected-operations.ts"`; `selectedOperationCount`: `number`; \} |
| `metadata.apiCoverage.checkedAt` | `"2026-06-25"` |
| `metadata.apiCoverage.fullProviderApi` | `false` |
| `metadata.apiCoverage.fullTikTokPlatformCoverage` | `false` |
| `metadata.apiCoverage.generatedFromOfficialSpec` | `false` |
| `metadata.apiCoverage.implementedOperationCount` | `number` |
| `metadata.apiCoverage.machineReadableSpecStatus` | `"No official public complete TikTok Developers/Business OpenAPI spec was found for this mixed selected surface during this audit."` |
| `metadata.apiCoverage.operationCatalog` | `"package:src/selected-operations.ts"` |
| `metadata.apiCoverage.selectedOperationCount` | `number` |
| `metadata.channelCoverage` | \{ `businessComments`: `"provider-rest-adapter-list-create-reply"`; `contentPostingCreate`: `"not-covered"`; `contentPostingStatus`: `"provider-rest-adapter-read"`; `directMessages`: `"not-covered"`; `displayProfileVideos`: `"provider-rest-adapter-read-list"`; `researchVideoComments`: `"provider-rest-adapter-query"`; `shopAnalyticsCommercialContent`: `"provider-supported-not-typed"`; `webhooks`: `"typed-verify-parse"`; \} |
| `metadata.channelCoverage.businessComments` | `"provider-rest-adapter-list-create-reply"` |
| `metadata.channelCoverage.contentPostingCreate` | `"not-covered"` |
| `metadata.channelCoverage.contentPostingStatus` | `"provider-rest-adapter-read"` |
| `metadata.channelCoverage.directMessages` | `"not-covered"` |
| `metadata.channelCoverage.displayProfileVideos` | `"provider-rest-adapter-read-list"` |
| `metadata.channelCoverage.researchVideoComments` | `"provider-rest-adapter-query"` |
| `metadata.channelCoverage.shopAnalyticsCommercialContent` | `"provider-supported-not-typed"` |
| `metadata.channelCoverage.webhooks` | `"typed-verify-parse"` |
| `metadata.docs` | readonly \[`"https://developers.tiktok.com/doc/tiktok-api-v2-get-user-info"`, `"https://developers.tiktok.com/doc/tiktok-api-v2-video-list"`, `"https://developers.tiktok.com/doc/research-api-specs-query-video-comments"`, `"https://developers.tiktok.com/doc/webhooks-overview"`, `"https://developers.tiktok.com/doc/webhooks-verification"`, `"https://business-api.tiktok.com/portal/docs/reply-to-a-comment/v1.3"`\] |
| `metadata.implementation` | \{ `allowedOperations`: \{ `alias`: `string`; `id`: `string`; `providerApi`: \| `"tiktok-open.v2.display"` \| `"tiktok-open.v2.content-posting"` \| `"tiktok-open.v2.research"` \| `"tiktok-business.v1.3"`; `providerPath`: `string`; `source`: `string`; `sourceUrl`: `string`; `target`: `string`; \}[]; `apiCoverage`: \{ `checkedAt`: `"2026-06-25"`; `operationCatalog`: `"package:src/selected-operations.ts"`; \}; `checkedAt`: `"2026-06-25"`; `implementationStrategy`: `"no-official-sdk-rest-adapter"`; `providerRestAdapterException`: \{ `checkedAt`: `"2026-06-25"`; `checkedVersion`: `"1.1.3"`; `defaultClientPolicy`: `"built-in-tiktok-rest-adapter"`; `license`: `"Unlicense"`; `reason`: `"The official JavaScript SDK only targets TikTok Business API generated clients. Its CommentsApi exposes the Business comment list/post surface, but it does not cover TikTok Developers Open API Display reads, Research API comment reads, Content Posting status reads, webhook verification, or the full mixed selected support surface required by this package."`; `result`: `"sdk-not-suitable-for-mixed-social-surface"`; `sdkPackage`: `"tiktok-business-api-sdk-official"`; `typedClientOverride`: `"TikTokSocialProviderClient"`; \}; `sdkDecision`: \{ `auditedPackages`: readonly \[\{ `package`: `"tiktok-business-api-sdk-official"`; `reason`: `"CommentsApi covers a Business comment surface, but the package does not expose the full mixed TikTok Developers/Business support surface selected by this adapter."`; `source`: `"npm + tiktok/tiktok-business-api-sdk"`; `status`: `"not-suitable"`; `version`: `"1.1.3"`; \}\]; `notes`: readonly \[`"TikTok OpenSDK is an official mobile Login/Share Kit, not a server-side JavaScript/TypeScript client for this selected support surface."`, `"The official TikTok Business API SDK is a broad Business API package with comment helpers, but it does not cover TikTok Developers Open API Display, Research API, Content Posting status, or webhook verification for this mixed adapter surface."`, `"This package therefore ships a built-in REST adapter for the selected operations and still accepts an injected TikTok provider client override."`\]; `viableOfficialSdk`: `false`; \}; `selectedOperationChecksum`: `string`; `selectedOperationChecksumAlgorithm`: `"sha256"`; `selectedOperations`: ( \| \{ `api`: `"tiktok-open.v2.display"`; `functionName`: `string`; `method`: `"GET"`; `path`: `string`; `sourceUrl`: `string`; `uid`: `string`; \} \| \{ `api`: `"tiktok-open.v2.display"`; `functionName`: `string`; `method`: `"POST"`; `path`: `string`; `sourceUrl`: `string`; `uid`: `string`; \} \| \{ `api`: `"tiktok-open.v2.content-posting"`; `functionName`: `string`; `method`: `"POST"`; `path`: `string`; `sourceUrl`: `string`; `uid`: `string`; \} \| \{ `api`: `"tiktok-open.v2.research"`; `functionName`: `string`; `method`: `"POST"`; `path`: `string`; `sourceUrl`: `string`; `uid`: `string`; \} \| \{ `api`: `"tiktok-business.v1.3"`; `functionName`: `string`; `method`: `"GET"`; `path`: `string`; `sourceUrl`: `string`; `uid`: `string`; \} \| \{ `api`: `"tiktok-business.v1.3"`; `functionName`: `string`; `method`: `"POST"`; `path`: `string`; `sourceUrl`: `string`; `uid`: `string`; \})[]; `source`: `"official TikTok Developers and TikTok Business API docs"`; `sourceVersion`: `"TikTok Open API v2 + Business API v1.3 public docs checked 2026-06-25"`; \} |
| `metadata.implementation.allowedOperations` | \{ `alias`: `string`; `id`: `string`; `providerApi`: \| `"tiktok-open.v2.display"` \| `"tiktok-open.v2.content-posting"` \| `"tiktok-open.v2.research"` \| `"tiktok-business.v1.3"`; `providerPath`: `string`; `source`: `string`; `sourceUrl`: `string`; `target`: `string`; \}[] |
| `metadata.implementation.apiCoverage` | \{ `checkedAt`: `"2026-06-25"`; `operationCatalog`: `"package:src/selected-operations.ts"`; \} |
| `metadata.implementation.apiCoverage.checkedAt` | `"2026-06-25"` |
| `metadata.implementation.apiCoverage.operationCatalog` | `"package:src/selected-operations.ts"` |
| `metadata.implementation.checkedAt` | `"2026-06-25"` |
| `metadata.implementation.implementationStrategy` | `"no-official-sdk-rest-adapter"` |
| `metadata.implementation.providerRestAdapterException` | \{ `checkedAt`: `"2026-06-25"`; `checkedVersion`: `"1.1.3"`; `defaultClientPolicy`: `"built-in-tiktok-rest-adapter"`; `license`: `"Unlicense"`; `reason`: `"The official JavaScript SDK only targets TikTok Business API generated clients. Its CommentsApi exposes the Business comment list/post surface, but it does not cover TikTok Developers Open API Display reads, Research API comment reads, Content Posting status reads, webhook verification, or the full mixed selected support surface required by this package."`; `result`: `"sdk-not-suitable-for-mixed-social-surface"`; `sdkPackage`: `"tiktok-business-api-sdk-official"`; `typedClientOverride`: `"TikTokSocialProviderClient"`; \} |
| `metadata.implementation.providerRestAdapterException.checkedAt` | `"2026-06-25"` |
| `metadata.implementation.providerRestAdapterException.checkedVersion` | `"1.1.3"` |
| `metadata.implementation.providerRestAdapterException.defaultClientPolicy` | `"built-in-tiktok-rest-adapter"` |
| `metadata.implementation.providerRestAdapterException.license` | `"Unlicense"` |
| `metadata.implementation.providerRestAdapterException.reason` | `"The official JavaScript SDK only targets TikTok Business API generated clients. Its CommentsApi exposes the Business comment list/post surface, but it does not cover TikTok Developers Open API Display reads, Research API comment reads, Content Posting status reads, webhook verification, or the full mixed selected support surface required by this package."` |
| `metadata.implementation.providerRestAdapterException.result` | `"sdk-not-suitable-for-mixed-social-surface"` |
| `metadata.implementation.providerRestAdapterException.sdkPackage` | `"tiktok-business-api-sdk-official"` |
| `metadata.implementation.providerRestAdapterException.typedClientOverride` | `"TikTokSocialProviderClient"` |
| `metadata.implementation.sdkDecision` | \{ `auditedPackages`: readonly \[\{ `package`: `"tiktok-business-api-sdk-official"`; `reason`: `"CommentsApi covers a Business comment surface, but the package does not expose the full mixed TikTok Developers/Business support surface selected by this adapter."`; `source`: `"npm + tiktok/tiktok-business-api-sdk"`; `status`: `"not-suitable"`; `version`: `"1.1.3"`; \}\]; `notes`: readonly \[`"TikTok OpenSDK is an official mobile Login/Share Kit, not a server-side JavaScript/TypeScript client for this selected support surface."`, `"The official TikTok Business API SDK is a broad Business API package with comment helpers, but it does not cover TikTok Developers Open API Display, Research API, Content Posting status, or webhook verification for this mixed adapter surface."`, `"This package therefore ships a built-in REST adapter for the selected operations and still accepts an injected TikTok provider client override."`\]; `viableOfficialSdk`: `false`; \} |
| `metadata.implementation.sdkDecision.auditedPackages` | readonly \[\{ `package`: `"tiktok-business-api-sdk-official"`; `reason`: `"CommentsApi covers a Business comment surface, but the package does not expose the full mixed TikTok Developers/Business support surface selected by this adapter."`; `source`: `"npm + tiktok/tiktok-business-api-sdk"`; `status`: `"not-suitable"`; `version`: `"1.1.3"`; \}\] |
| `metadata.implementation.sdkDecision.notes` | readonly \[`"TikTok OpenSDK is an official mobile Login/Share Kit, not a server-side JavaScript/TypeScript client for this selected support surface."`, `"The official TikTok Business API SDK is a broad Business API package with comment helpers, but it does not cover TikTok Developers Open API Display, Research API, Content Posting status, or webhook verification for this mixed adapter surface."`, `"This package therefore ships a built-in REST adapter for the selected operations and still accepts an injected TikTok provider client override."`\] |
| `metadata.implementation.sdkDecision.viableOfficialSdk` | `false` |
| `metadata.implementation.selectedOperationChecksum` | `string` |
| `metadata.implementation.selectedOperationChecksumAlgorithm` | `"sha256"` |
| `metadata.implementation.selectedOperations` | ( \| \{ `api`: `"tiktok-open.v2.display"`; `functionName`: `string`; `method`: `"GET"`; `path`: `string`; `sourceUrl`: `string`; `uid`: `string`; \} \| \{ `api`: `"tiktok-open.v2.display"`; `functionName`: `string`; `method`: `"POST"`; `path`: `string`; `sourceUrl`: `string`; `uid`: `string`; \} \| \{ `api`: `"tiktok-open.v2.content-posting"`; `functionName`: `string`; `method`: `"POST"`; `path`: `string`; `sourceUrl`: `string`; `uid`: `string`; \} \| \{ `api`: `"tiktok-open.v2.research"`; `functionName`: `string`; `method`: `"POST"`; `path`: `string`; `sourceUrl`: `string`; `uid`: `string`; \} \| \{ `api`: `"tiktok-business.v1.3"`; `functionName`: `string`; `method`: `"GET"`; `path`: `string`; `sourceUrl`: `string`; `uid`: `string`; \} \| \{ `api`: `"tiktok-business.v1.3"`; `functionName`: `string`; `method`: `"POST"`; `path`: `string`; `sourceUrl`: `string`; `uid`: `string`; \})[] |
| `metadata.implementation.source` | `"official TikTok Developers and TikTok Business API docs"` |
| `metadata.implementation.sourceVersion` | `"TikTok Open API v2 + Business API v1.3 public docs checked 2026-06-25"` |
| `metadata.providerClient` | \{ `defaultClientPolicy`: `"provider-rest-adapter-when-configured"`; `importPolicy`: `"provider-client-override-supported"`; `interface`: `"TikTokSocialProviderClient"`; `package`: `"built-in-or-host-provided"`; \} |
| `metadata.providerClient.defaultClientPolicy` | `"provider-rest-adapter-when-configured"` |
| `metadata.providerClient.importPolicy` | `"provider-client-override-supported"` |
| `metadata.providerClient.interface` | `"TikTokSocialProviderClient"` |
| `metadata.providerClient.package` | `"built-in-or-host-provided"` |
| `metadata.providerRestAdapterException` | \{ `checkedAt`: `"2026-06-25"`; `checkedVersion`: `"1.1.3"`; `defaultClientPolicy`: `"built-in-tiktok-rest-adapter"`; `license`: `"Unlicense"`; `reason`: `"The official JavaScript SDK only targets TikTok Business API generated clients. Its CommentsApi exposes the Business comment list/post surface, but it does not cover TikTok Developers Open API Display reads, Research API comment reads, Content Posting status reads, webhook verification, or the full mixed selected support surface required by this package."`; `result`: `"sdk-not-suitable-for-mixed-social-surface"`; `sdkPackage`: `"tiktok-business-api-sdk-official"`; `typedClientOverride`: `"TikTokSocialProviderClient"`; \} |
| `metadata.providerRestAdapterException.checkedAt` | `"2026-06-25"` |
| `metadata.providerRestAdapterException.checkedVersion` | `"1.1.3"` |
| `metadata.providerRestAdapterException.defaultClientPolicy` | `"built-in-tiktok-rest-adapter"` |
| `metadata.providerRestAdapterException.license` | `"Unlicense"` |
| `metadata.providerRestAdapterException.reason` | `"The official JavaScript SDK only targets TikTok Business API generated clients. Its CommentsApi exposes the Business comment list/post surface, but it does not cover TikTok Developers Open API Display reads, Research API comment reads, Content Posting status reads, webhook verification, or the full mixed selected support surface required by this package."` |
| `metadata.providerRestAdapterException.result` | `"sdk-not-suitable-for-mixed-social-surface"` |
| `metadata.providerRestAdapterException.sdkPackage` | `"tiktok-business-api-sdk-official"` |
| `metadata.providerRestAdapterException.typedClientOverride` | `"TikTokSocialProviderClient"` |
| `name` | `"TikTok Social"` |
| `packageName` | `"@cognidesk/integration-social-tiktok"` |
| `privacyNotes` | readonly \[`"TikTok open IDs, usernames, profile metadata, video IDs, captions, comments, replies, webhook IDs, and event payloads can contain customer data."`, `"Client secrets, access tokens, business account IDs, and webhook validation settings stay server-side and are represented in Studio only as readiness state."`\] |
| `provider` | `"tiktok"` |
| `trustLevel` | `"official"` |
