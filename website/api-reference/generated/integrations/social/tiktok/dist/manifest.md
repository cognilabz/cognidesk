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
     description: "Reads TikTok Display API profile/video data, Research API video comments, and Business API comment resources where approved.";
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
     description: "Lists approved TikTok video and comment resources with SDK-user-supplied fields and pagination.";
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
     description: "Uses TikTok Business API comment reply primitives only when the SDK user has the relevant Business account and approvals.";
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
     notes: readonly ["Coverage is limited to selected TikTok Display API user/video reads, Research API comment reads, Business API comment operations, posting-status reads, and webhook signature parsing for SDK-user-owned support/review workflows.", "The package does not implement a general TikTok direct-message inbox and does not cover the full TikTok product surface for Content Posting, Share Kit, Commercial Content, Data Portability, Shop, analytics, tester/launch, or full Business Center administration."];
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
     description: "User or client access token supplied by SDK configuration for approved TikTok APIs.";
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
  limitations: readonly ["TikTok's public developer APIs do not expose a general customer-service direct-message inbox; this package intentionally does not provide a generic DM send/read client.", "Comment reply operations require TikTok API for Business account access and approvals; Display API and Research API access are separate TikTok products with separate scopes and eligibility.", "Available operations depend on the SDK user's app review, regional availability, callback URL registration, scopes, product approvals, rate limits, Business account ownership, and TikTok platform policy.", "TikTok direct-message lead APIs are Business lead surfaces, not a generic customer-service DM inbox for this adapter.", "Consent, outbound-contact policy, conversation continuity, human escalation, moderation, retention, redaction, and deletion behavior are SDK-user configuration."];
  maintainers: readonly [{
     name: "Cognidesk";
     type: "official";
  }];
  metadata: {
     apiCoverage: {
        checkedAt: "2026-06-21";
        fullProviderApi: false;
        fullTikTokPlatformCoverage: false;
        generatedFromOfficialSpec: false;
        implementedOperationCount: number;
        machineReadableSpecStatus: "No official public complete TikTok Developers/Business OpenAPI spec was found for this mixed selected surface during this audit.";
        operationCatalog: "package:src/selected-operations.ts";
        selectedOperationCount: number;
     };
     channelCoverage: {
        businessComments: "typed-list-create-reply";
        contentPostingCreate: "not-covered";
        contentPostingStatus: "typed-read";
        directMessages: "not-covered";
        displayProfileVideos: "typed-read-list";
        researchVideoComments: "typed-query";
        shopAnalyticsCommercialContent: "provider-supported-not-typed";
        webhooks: "typed-verify-parse";
     };
     docs: readonly ["https://developers.tiktok.com/doc/tiktok-api-v2-get-user-info", "https://developers.tiktok.com/doc/tiktok-api-v2-video-list", "https://developers.tiktok.com/doc/research-api-specs-query-video-comments", "https://developers.tiktok.com/doc/webhooks-overview", "https://developers.tiktok.com/doc/webhooks-verification", "https://business-api.tiktok.com/portal/docs/reply-to-a-comment/v1.3"];
     implementation: {
        allowlistChecksum: string;
        allowlistChecksumAlgorithm: "sha256";
        apiCoverage: {
           checkedAt: "2026-06-21";
           operationCatalog: "package:src/selected-operations.ts";
        };
        checkedAt: "2026-06-21";
        sdkDecision: {
           notes: readonly ["No official maintained JavaScript/TypeScript SDK was found for the mixed Display API, Research API, Content Posting status, webhook, and Business comment surface.", "tiktok-business-api-sdk-official@1.1.3 is a broad Swagger Codegen Business API bundle; it does not cover TikTok Developers Open API, Research API, Content Posting status, or webhooks, and its comment endpoints do not match this adapter's selected /business/comment/* paths."];
           viableOfficialSdk: false;
        };
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
        sourceVersion: "TikTok Open API v2 + Business API v1.3 public docs checked 2026-06-21";
        strategy: "direct-http-support-slice";
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
| `capabilities` | readonly \[\{ `audiences`: readonly \[`"customer-facing"`, `"mixed"`\]; `capability`: `"receive"`; `description`: `"Validates TikTok-Signature and parses TikTok event payloads for SDK-user-owned support workflows."`; `exposesSensitiveData`: `true`; `label`: `"Receive TikTok webhooks"`; `providerObjects`: readonly \[\{ `kind`: `"tiktokWebhook"`; `label`: `"TikTok Webhook"`; \}, \{ `kind`: `"tiktokEvent"`; `label`: `"TikTok Event"`; \}\]; `requiresCredential`: `true`; \}, \{ `audiences`: readonly \[`"customer-facing"`, `"mixed"`\]; `capability`: `"draft"`; `description`: `"Builds TikTok Business comment reply payloads without deciding outbound or moderation policy."`; `exposesSensitiveData`: `true`; `label`: `"Build TikTok comment replies"`; `providerObjects`: readonly \[\{ `kind`: `"tiktokCommentReplyDraft"`; `label`: `"TikTok Comment Reply Draft"`; \}\]; \}, \{ `audiences`: readonly \[`"customer-facing"`, `"mixed"`\]; `capability`: `"thread"`; `description`: `"Associates TikTok videos, comments, replies, and webhook IDs with Cognidesk conversation policy selected by SDK users."`; `exposesSensitiveData`: `true`; `label`: `"Use TikTok comments as threads"`; `providerObjects`: readonly \[\{ `kind`: `"tiktokVideo"`; `label`: `"TikTok Video"`; \}, \{ `kind`: `"tiktokComment"`; `label`: `"TikTok Comment"`; \}\]; `requiresCredential`: `true`; \}, \{ `audiences`: readonly \[`"internal-support"`, `"mixed"`\]; `capability`: `"read-provider-object"`; `description`: `"Reads TikTok Display API profile/video data, Research API video comments, and Business API comment resources where approved."`; `exposesSensitiveData`: `true`; `label`: `"Read TikTok profile, videos, and comments"`; `providerObjects`: readonly \[\{ `kind`: `"tiktokUser"`; `label`: `"TikTok User"`; \}, \{ `kind`: `"tiktokVideo"`; `label`: `"TikTok Video"`; \}, \{ `kind`: `"tiktokComment"`; `label`: `"TikTok Comment"`; \}\]; `requiresCredential`: `true`; \}, \{ `audiences`: readonly \[`"internal-support"`, `"mixed"`\]; `capability`: `"search-provider-object"`; `description`: `"Lists approved TikTok video and comment resources with SDK-user-supplied fields and pagination."`; `exposesSensitiveData`: `true`; `label`: `"List TikTok videos and comments"`; `providerObjects`: readonly \[\{ `kind`: `"tiktokVideo"`; `label`: `"TikTok Video"`; \}, \{ `kind`: `"tiktokComment"`; `label`: `"TikTok Comment"`; \}\]; `requiresCredential`: `true`; \}, \{ `audiences`: readonly \[`"customer-facing"`\]; `capability`: `"social.comment-reply"`; `description`: `"Uses TikTok Business API comment reply primitives only when the SDK user has the relevant Business account and approvals."`; `exposesSensitiveData`: `true`; `extension`: `true`; `label`: `"Reply to TikTok Business comments"`; `providerObjects`: readonly \[\{ `kind`: `"tiktokComment"`; `label`: `"TikTok Comment"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `audiences`: readonly \[`"internal-support"`\]; `capability`: `"social.webhook-signature"`; `description`: `"Validates the TikTok-Signature header using HMAC-SHA256 over timestamp and raw body."`; `exposesSensitiveData`: `true`; `extension`: `true`; `label`: `"Validate TikTok webhook signatures"`; `providerObjects`: readonly \[\{ `kind`: `"tiktokSignedWebhook"`; `label`: `"TikTok Signed Webhook"`; \}\]; `requiresCredential`: `true`; \}\] |
| `category` | `"social"` |
| `channelAudiences` | readonly \[`"customer-facing"`, `"mixed"`\] |
| `coverage` | \{ `evidence`: readonly \[\{ `label`: `"TikTok Display API get started"`; `url`: `"https://developers.tiktok.com/doc/display-api-get-started/"`; \}, \{ `label`: `"TikTok user info API"`; `url`: `"https://developers.tiktok.com/doc/tiktok-api-v2-get-user-info"`; \}, \{ `label`: `"TikTok video list API"`; `url`: `"https://developers.tiktok.com/doc/tiktok-api-v2-video-list"`; \}, \{ `label`: `"TikTok Research video comments API"`; `url`: `"https://developers.tiktok.com/doc/research-api-specs-query-video-comments"`; \}, \{ `label`: `"TikTok webhooks overview"`; `url`: `"https://developers.tiktok.com/doc/webhooks-overview/"`; \}, \{ `label`: `"TikTok webhook signature verification"`; `url`: `"https://developers.tiktok.com/doc/webhooks-verification"`; \}, \{ `label`: `"TikTok Content Posting status API"`; `url`: `"https://developers.tiktok.com/doc/content-posting-api-reference-get-video-status"`; \}\]; `notes`: readonly \[`"Coverage is limited to selected TikTok Display API user/video reads, Research API comment reads, Business API comment operations, posting-status reads, and webhook signature parsing for SDK-user-owned support/review workflows."`, `"The package does not implement a general TikTok direct-message inbox and does not cover the full TikTok product surface for Content Posting, Share Kit, Commercial Content, Data Portability, Shop, analytics, tester/launch, or full Business Center administration."`\]; `scope`: `"support-workflow-subset"`; \} |
| `coverage.evidence` | readonly \[\{ `label`: `"TikTok Display API get started"`; `url`: `"https://developers.tiktok.com/doc/display-api-get-started/"`; \}, \{ `label`: `"TikTok user info API"`; `url`: `"https://developers.tiktok.com/doc/tiktok-api-v2-get-user-info"`; \}, \{ `label`: `"TikTok video list API"`; `url`: `"https://developers.tiktok.com/doc/tiktok-api-v2-video-list"`; \}, \{ `label`: `"TikTok Research video comments API"`; `url`: `"https://developers.tiktok.com/doc/research-api-specs-query-video-comments"`; \}, \{ `label`: `"TikTok webhooks overview"`; `url`: `"https://developers.tiktok.com/doc/webhooks-overview/"`; \}, \{ `label`: `"TikTok webhook signature verification"`; `url`: `"https://developers.tiktok.com/doc/webhooks-verification"`; \}, \{ `label`: `"TikTok Content Posting status API"`; `url`: `"https://developers.tiktok.com/doc/content-posting-api-reference-get-video-status"`; \}\] |
| `coverage.notes` | readonly \[`"Coverage is limited to selected TikTok Display API user/video reads, Research API comment reads, Business API comment operations, posting-status reads, and webhook signature parsing for SDK-user-owned support/review workflows."`, `"The package does not implement a general TikTok direct-message inbox and does not cover the full TikTok product surface for Content Posting, Share Kit, Commercial Content, Data Portability, Shop, analytics, tester/launch, or full Business Center administration."`\] |
| `coverage.scope` | `"support-workflow-subset"` |
| `credentialRequirements` | readonly \[\{ `description`: `"TikTok for Developers app client key owned and configured by the SDK user."`; `id`: `"tiktok-client-key"`; `label`: `"TikTok client key"`; `required`: `true`; \}, \{ `description`: `"Server-side TikTok app secret used for OAuth and webhook signature validation."`; `id`: `"tiktok-client-secret"`; `label`: `"TikTok client secret"`; `required`: `true`; \}, \{ `description`: `"User or client access token supplied by SDK configuration for approved TikTok APIs."`; `id`: `"tiktok-access-token"`; `label`: `"TikTok access token"`; `metadata`: \{ `scopeKind`: `"provider-oauth-scopes"`; \}; `required`: `true`; `scopes`: readonly \[`"user.info.basic"`, `"user.info.profile"`, `"video.list"`\]; \}, \{ `description`: `"Authorized user's open_id and/or TikTok Business account ID used to scope profile, video, and comment operations."`; `id`: `"tiktok-account-id"`; `label`: `"TikTok Open ID or business account ID"`; `required`: `true`; \}, \{ `description`: `"TikTok-Signature validation with the SDK user's client secret before webhook JSON is processed."`; `id`: `"tiktok-webhook-signature"`; `label`: `"Webhook signature validation"`; `required`: `true`; \}, \{ `description`: `"SDK-user-confirmed HTTPS callback URL registration for enabled TikTok webhook products."`; `id`: `"tiktok-webhook-callback"`; `label`: `"TikTok webhook callback URL registration"`; `required`: `true`; \}, \{ `description`: `"SDK-user-reviewed Login Kit, Display API, Research API, and/or Business API scopes needed for enabled support features; content upload/publish scopes are not used by this adapter."`; `id`: `"tiktok-scopes"`; `label`: `"TikTok scopes and product approvals"`; `metadata`: \{ `oauthScopes`: readonly \[`"user.info.basic"`, `"user.info.profile"`, `"user.info.stats"`, `"video.list"`, `"research.data.basic"`\]; `privilegeGuidance`: `"TikTok Business API comment operations require separate Business API account/product approval; these OAuth scopes do not grant Business comment access by themselves."`; `scopeKind`: `"mixed-auth-mode"`; \}; `required`: `true`; `scopes`: readonly \[`"user.info.basic"`, `"user.info.profile"`, `"user.info.stats"`, `"video.list"`, `"research.data.basic"`\]; \}\] |
| `directions` | readonly \[`"receive-only"`, `"send-only"`, `"bidirectional"`\] |
| `id` | `"social.tiktok"` |
| `limitations` | readonly \[`"TikTok's public developer APIs do not expose a general customer-service direct-message inbox; this package intentionally does not provide a generic DM send/read client."`, `"Comment reply operations require TikTok API for Business account access and approvals; Display API and Research API access are separate TikTok products with separate scopes and eligibility."`, `"Available operations depend on the SDK user's app review, regional availability, callback URL registration, scopes, product approvals, rate limits, Business account ownership, and TikTok platform policy."`, `"TikTok direct-message lead APIs are Business lead surfaces, not a generic customer-service DM inbox for this adapter."`, `"Consent, outbound-contact policy, conversation continuity, human escalation, moderation, retention, redaction, and deletion behavior are SDK-user configuration."`\] |
| `maintainers` | readonly \[\{ `name`: `"Cognidesk"`; `type`: `"official"`; \}\] |
| `metadata` | \{ `apiCoverage`: \{ `checkedAt`: `"2026-06-21"`; `fullProviderApi`: `false`; `fullTikTokPlatformCoverage`: `false`; `generatedFromOfficialSpec`: `false`; `implementedOperationCount`: `number`; `machineReadableSpecStatus`: `"No official public complete TikTok Developers/Business OpenAPI spec was found for this mixed selected surface during this audit."`; `operationCatalog`: `"package:src/selected-operations.ts"`; `selectedOperationCount`: `number`; \}; `channelCoverage`: \{ `businessComments`: `"typed-list-create-reply"`; `contentPostingCreate`: `"not-covered"`; `contentPostingStatus`: `"typed-read"`; `directMessages`: `"not-covered"`; `displayProfileVideos`: `"typed-read-list"`; `researchVideoComments`: `"typed-query"`; `shopAnalyticsCommercialContent`: `"provider-supported-not-typed"`; `webhooks`: `"typed-verify-parse"`; \}; `docs`: readonly \[`"https://developers.tiktok.com/doc/tiktok-api-v2-get-user-info"`, `"https://developers.tiktok.com/doc/tiktok-api-v2-video-list"`, `"https://developers.tiktok.com/doc/research-api-specs-query-video-comments"`, `"https://developers.tiktok.com/doc/webhooks-overview"`, `"https://developers.tiktok.com/doc/webhooks-verification"`, `"https://business-api.tiktok.com/portal/docs/reply-to-a-comment/v1.3"`\]; `implementation`: \{ `allowlistChecksum`: `string`; `allowlistChecksumAlgorithm`: `"sha256"`; `apiCoverage`: \{ `checkedAt`: `"2026-06-21"`; `operationCatalog`: `"package:src/selected-operations.ts"`; \}; `checkedAt`: `"2026-06-21"`; `sdkDecision`: \{ `notes`: readonly \[`"No official maintained JavaScript/TypeScript SDK was found for the mixed Display API, Research API, Content Posting status, webhook, and Business comment surface."`, `"tiktok-business-api-sdk-official@1.1.3 is a broad Swagger Codegen Business API bundle; it does not cover TikTok Developers Open API, Research API, Content Posting status, or webhooks, and its comment endpoints do not match this adapter's selected /business/comment/* paths."`\]; `viableOfficialSdk`: `false`; \}; `selectedOperations`: ( \| \{ `api`: `"tiktok-open.v2.display"`; `functionName`: `string`; `method`: `"GET"`; `path`: `string`; `sourceUrl`: `string`; `uid`: `string`; \} \| \{ `api`: `"tiktok-open.v2.display"`; `functionName`: `string`; `method`: `"POST"`; `path`: `string`; `sourceUrl`: `string`; `uid`: `string`; \} \| \{ `api`: `"tiktok-open.v2.content-posting"`; `functionName`: `string`; `method`: `"POST"`; `path`: `string`; `sourceUrl`: `string`; `uid`: `string`; \} \| \{ `api`: `"tiktok-open.v2.research"`; `functionName`: `string`; `method`: `"POST"`; `path`: `string`; `sourceUrl`: `string`; `uid`: `string`; \} \| \{ `api`: `"tiktok-business.v1.3"`; `functionName`: `string`; `method`: `"GET"`; `path`: `string`; `sourceUrl`: `string`; `uid`: `string`; \} \| \{ `api`: `"tiktok-business.v1.3"`; `functionName`: `string`; `method`: `"POST"`; `path`: `string`; `sourceUrl`: `string`; `uid`: `string`; \})[]; `source`: `"official TikTok Developers and TikTok Business API docs"`; `sourceVersion`: `"TikTok Open API v2 + Business API v1.3 public docs checked 2026-06-21"`; `strategy`: `"direct-http-support-slice"`; \}; \} |
| `metadata.apiCoverage` | \{ `checkedAt`: `"2026-06-21"`; `fullProviderApi`: `false`; `fullTikTokPlatformCoverage`: `false`; `generatedFromOfficialSpec`: `false`; `implementedOperationCount`: `number`; `machineReadableSpecStatus`: `"No official public complete TikTok Developers/Business OpenAPI spec was found for this mixed selected surface during this audit."`; `operationCatalog`: `"package:src/selected-operations.ts"`; `selectedOperationCount`: `number`; \} |
| `metadata.apiCoverage.checkedAt` | `"2026-06-21"` |
| `metadata.apiCoverage.fullProviderApi` | `false` |
| `metadata.apiCoverage.fullTikTokPlatformCoverage` | `false` |
| `metadata.apiCoverage.generatedFromOfficialSpec` | `false` |
| `metadata.apiCoverage.implementedOperationCount` | `number` |
| `metadata.apiCoverage.machineReadableSpecStatus` | `"No official public complete TikTok Developers/Business OpenAPI spec was found for this mixed selected surface during this audit."` |
| `metadata.apiCoverage.operationCatalog` | `"package:src/selected-operations.ts"` |
| `metadata.apiCoverage.selectedOperationCount` | `number` |
| `metadata.channelCoverage` | \{ `businessComments`: `"typed-list-create-reply"`; `contentPostingCreate`: `"not-covered"`; `contentPostingStatus`: `"typed-read"`; `directMessages`: `"not-covered"`; `displayProfileVideos`: `"typed-read-list"`; `researchVideoComments`: `"typed-query"`; `shopAnalyticsCommercialContent`: `"provider-supported-not-typed"`; `webhooks`: `"typed-verify-parse"`; \} |
| `metadata.channelCoverage.businessComments` | `"typed-list-create-reply"` |
| `metadata.channelCoverage.contentPostingCreate` | `"not-covered"` |
| `metadata.channelCoverage.contentPostingStatus` | `"typed-read"` |
| `metadata.channelCoverage.directMessages` | `"not-covered"` |
| `metadata.channelCoverage.displayProfileVideos` | `"typed-read-list"` |
| `metadata.channelCoverage.researchVideoComments` | `"typed-query"` |
| `metadata.channelCoverage.shopAnalyticsCommercialContent` | `"provider-supported-not-typed"` |
| `metadata.channelCoverage.webhooks` | `"typed-verify-parse"` |
| `metadata.docs` | readonly \[`"https://developers.tiktok.com/doc/tiktok-api-v2-get-user-info"`, `"https://developers.tiktok.com/doc/tiktok-api-v2-video-list"`, `"https://developers.tiktok.com/doc/research-api-specs-query-video-comments"`, `"https://developers.tiktok.com/doc/webhooks-overview"`, `"https://developers.tiktok.com/doc/webhooks-verification"`, `"https://business-api.tiktok.com/portal/docs/reply-to-a-comment/v1.3"`\] |
| `metadata.implementation` | \{ `allowlistChecksum`: `string`; `allowlistChecksumAlgorithm`: `"sha256"`; `apiCoverage`: \{ `checkedAt`: `"2026-06-21"`; `operationCatalog`: `"package:src/selected-operations.ts"`; \}; `checkedAt`: `"2026-06-21"`; `sdkDecision`: \{ `notes`: readonly \[`"No official maintained JavaScript/TypeScript SDK was found for the mixed Display API, Research API, Content Posting status, webhook, and Business comment surface."`, `"tiktok-business-api-sdk-official@1.1.3 is a broad Swagger Codegen Business API bundle; it does not cover TikTok Developers Open API, Research API, Content Posting status, or webhooks, and its comment endpoints do not match this adapter's selected /business/comment/* paths."`\]; `viableOfficialSdk`: `false`; \}; `selectedOperations`: ( \| \{ `api`: `"tiktok-open.v2.display"`; `functionName`: `string`; `method`: `"GET"`; `path`: `string`; `sourceUrl`: `string`; `uid`: `string`; \} \| \{ `api`: `"tiktok-open.v2.display"`; `functionName`: `string`; `method`: `"POST"`; `path`: `string`; `sourceUrl`: `string`; `uid`: `string`; \} \| \{ `api`: `"tiktok-open.v2.content-posting"`; `functionName`: `string`; `method`: `"POST"`; `path`: `string`; `sourceUrl`: `string`; `uid`: `string`; \} \| \{ `api`: `"tiktok-open.v2.research"`; `functionName`: `string`; `method`: `"POST"`; `path`: `string`; `sourceUrl`: `string`; `uid`: `string`; \} \| \{ `api`: `"tiktok-business.v1.3"`; `functionName`: `string`; `method`: `"GET"`; `path`: `string`; `sourceUrl`: `string`; `uid`: `string`; \} \| \{ `api`: `"tiktok-business.v1.3"`; `functionName`: `string`; `method`: `"POST"`; `path`: `string`; `sourceUrl`: `string`; `uid`: `string`; \})[]; `source`: `"official TikTok Developers and TikTok Business API docs"`; `sourceVersion`: `"TikTok Open API v2 + Business API v1.3 public docs checked 2026-06-21"`; `strategy`: `"direct-http-support-slice"`; \} |
| `metadata.implementation.allowlistChecksum` | `string` |
| `metadata.implementation.allowlistChecksumAlgorithm` | `"sha256"` |
| `metadata.implementation.apiCoverage` | \{ `checkedAt`: `"2026-06-21"`; `operationCatalog`: `"package:src/selected-operations.ts"`; \} |
| `metadata.implementation.apiCoverage.checkedAt` | `"2026-06-21"` |
| `metadata.implementation.apiCoverage.operationCatalog` | `"package:src/selected-operations.ts"` |
| `metadata.implementation.checkedAt` | `"2026-06-21"` |
| `metadata.implementation.sdkDecision` | \{ `notes`: readonly \[`"No official maintained JavaScript/TypeScript SDK was found for the mixed Display API, Research API, Content Posting status, webhook, and Business comment surface."`, `"tiktok-business-api-sdk-official@1.1.3 is a broad Swagger Codegen Business API bundle; it does not cover TikTok Developers Open API, Research API, Content Posting status, or webhooks, and its comment endpoints do not match this adapter's selected /business/comment/* paths."`\]; `viableOfficialSdk`: `false`; \} |
| `metadata.implementation.sdkDecision.notes` | readonly \[`"No official maintained JavaScript/TypeScript SDK was found for the mixed Display API, Research API, Content Posting status, webhook, and Business comment surface."`, `"tiktok-business-api-sdk-official@1.1.3 is a broad Swagger Codegen Business API bundle; it does not cover TikTok Developers Open API, Research API, Content Posting status, or webhooks, and its comment endpoints do not match this adapter's selected /business/comment/* paths."`\] |
| `metadata.implementation.sdkDecision.viableOfficialSdk` | `false` |
| `metadata.implementation.selectedOperations` | ( \| \{ `api`: `"tiktok-open.v2.display"`; `functionName`: `string`; `method`: `"GET"`; `path`: `string`; `sourceUrl`: `string`; `uid`: `string`; \} \| \{ `api`: `"tiktok-open.v2.display"`; `functionName`: `string`; `method`: `"POST"`; `path`: `string`; `sourceUrl`: `string`; `uid`: `string`; \} \| \{ `api`: `"tiktok-open.v2.content-posting"`; `functionName`: `string`; `method`: `"POST"`; `path`: `string`; `sourceUrl`: `string`; `uid`: `string`; \} \| \{ `api`: `"tiktok-open.v2.research"`; `functionName`: `string`; `method`: `"POST"`; `path`: `string`; `sourceUrl`: `string`; `uid`: `string`; \} \| \{ `api`: `"tiktok-business.v1.3"`; `functionName`: `string`; `method`: `"GET"`; `path`: `string`; `sourceUrl`: `string`; `uid`: `string`; \} \| \{ `api`: `"tiktok-business.v1.3"`; `functionName`: `string`; `method`: `"POST"`; `path`: `string`; `sourceUrl`: `string`; `uid`: `string`; \})[] |
| `metadata.implementation.source` | `"official TikTok Developers and TikTok Business API docs"` |
| `metadata.implementation.sourceVersion` | `"TikTok Open API v2 + Business API v1.3 public docs checked 2026-06-21"` |
| `metadata.implementation.strategy` | `"direct-http-support-slice"` |
| `name` | `"TikTok Social"` |
| `packageName` | `"@cognidesk/integration-social-tiktok"` |
| `privacyNotes` | readonly \[`"TikTok open IDs, usernames, profile metadata, video IDs, captions, comments, replies, webhook IDs, and event payloads can contain customer data."`, `"Client secrets, access tokens, business account IDs, and webhook validation settings stay server-side and are represented in Studio only as readiness state."`\] |
| `provider` | `"tiktok"` |
| `trustLevel` | `"official"` |
