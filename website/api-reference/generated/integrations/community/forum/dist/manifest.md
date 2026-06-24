# integrations/community/forum/dist/manifest

## Variables

### forumCommunityProviderManifest

```ts
const forumCommunityProviderManifest: {
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
     | "bidirectional"
     | "inbound-only"
    | "outbound-only")[];
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
  capabilities: readonly [{
     audiences: readonly ["customer-facing", "mixed"];
     capability: "receive";
     description: "Validates and parses forum webhook events for SDK-user-owned public community support workflows.";
     exposesSensitiveData: true;
     label: "Receive forum webhooks";
     providerObjects: readonly [{
        kind: "forumWebhook";
        label: "Forum Webhook";
     }];
     requiresCredential: true;
   }, {
     audiences: readonly ["customer-facing", "mixed"];
     capability: "send";
     changesWorkflow: true;
     description: "Creates public forum replies when SDK-user policy permits public response automation.";
     exposesSensitiveData: true;
     label: "Create forum replies";
     providerObjects: readonly [{
        kind: "forumPost";
        label: "Forum Post";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     audiences: readonly ["customer-facing", "internal-support", "mixed"];
     capability: "draft";
     description: "Builds topic and reply payloads for SDK-user approval workflows.";
     exposesSensitiveData: true;
     label: "Draft forum posts";
     providerObjects: readonly [{
        kind: "forumPostDraft";
        label: "Forum Post Draft";
     }];
   }, {
     audiences: readonly ["customer-facing", "mixed"];
     capability: "thread";
     description: "Reads forum topics, posts, latest topics, and search results as community support threads.";
     exposesSensitiveData: true;
     label: "Use forum topics";
     providerObjects: readonly [{
        kind: "forumTopic";
        label: "Forum Topic";
     }];
     requiresCredential: true;
   }, {
     audiences: readonly ["customer-facing", "mixed"];
     capability: "create-provider-object";
     changesWorkflow: true;
     description: "Creates SDK-user-approved forum topics for support announcements or escalated community cases.";
     exposesSensitiveData: true;
     label: "Create forum topics";
     providerObjects: readonly [{
        kind: "forumTopic";
        label: "Forum Topic";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     audiences: readonly ["internal-support", "mixed"];
     capability: "read-provider-object";
     description: "Reads forum topics, posts, and the current API user readiness record through the configured forum API.";
     exposesSensitiveData: true;
     label: "Read forum topics and posts";
     providerObjects: readonly [{
        kind: "forumTopic";
        label: "Forum Topic";
      }, {
        kind: "forumPost";
        label: "Forum Post";
     }];
     requiresCredential: true;
   }, {
     audiences: readonly ["internal-support", "mixed"];
     capability: "search-provider-object";
     description: "Searches forum topics and posts with SDK-user-selected query and pagination controls.";
     exposesSensitiveData: true;
     label: "Search forum content";
     providerObjects: readonly [{
        kind: "forumSearchResult";
        label: "Forum Search Result";
     }];
     requiresCredential: true;
   }, {
     audiences: readonly ["internal-support"];
     capability: "community.webhook-signature";
     description: "Validates Discourse-style X-Discourse-Event-Signature HMAC-SHA256 webhook signatures.";
     exposesSensitiveData: true;
     extension: true;
     label: "Validate forum webhook signatures";
     providerObjects: readonly [{
        kind: "forumSignedWebhook";
        label: "Forum Signed Webhook";
     }];
     requiresCredential: true;
  }];
  category: "community";
  channelAudiences: readonly ["customer-facing", "internal-support", "mixed"];
  coverage: {
     evidence: readonly [{
        label: "Discourse API docs";
        url: "https://docs.discourse.org/";
      }, {
        label: "Discourse webhook configuration and signature";
        url: "https://meta.discourse.org/t/configure-webhooks-that-trigger-on-discourse-events-to-integrate-with-external-services/49045";
     }];
     notes: readonly ["Coverage is limited to Discourse-compatible topic/reply creation through posts, topic/post reads, search/latest/current-user reads, and X-Discourse-Event-Signature webhook validation.", "The package does not implement broader Discourse administration for categories, tags, users/groups, moderation actions, uploads, badges, notifications, private messages, plugin endpoints, site settings, or non-Discourse forum APIs."];
     scope: "support-workflow-subset";
  };
  credentialRequirements: readonly [{
     description: "SDK-user-selected forum origin, such as a Discourse community URL.";
     id: "forum-base-url";
     label: "Forum base URL";
     required: true;
   }, {
     description: "Server-side forum API key used for topic, post, search, and user readiness calls.";
     id: "forum-api-key";
     label: "Forum API key";
     required: true;
   }, {
     description: "Forum API username that owns SDK-user-selected moderation and posting permissions.";
     id: "forum-api-username";
     label: "Forum API username";
     required: true;
   }, {
     description: "Shared secret used to verify signed forum webhooks before accepting public community events.";
     id: "forum-webhook-secret";
     label: "Forum webhook secret";
     required: false;
  }];
  directions: readonly ["receive-only", "send-only", "bidirectional"];
  id: "community.forum";
  limitations: readonly ["The SDK user chooses which forum implementation, categories, tags, moderation actions, public reply approval, and retention policies are active.", "This package uses Discourse-compatible REST and webhook conventions as the concrete forum foundation; other forum implementations can wrap the same manifest pattern.", "Discourse rate limits and throttling are configurable by site administrators; SDK users own 429 handling, retry, and backoff policy."];
  maintainers: readonly [{
     name: "Cognidesk";
     type: "official";
  }];
  metadata: {
     apiCoverage: {
        docsOnlyOperationCount: 1;
        fullProviderApi: false;
        generatedFromOfficialSpec: false;
        implementedOperationCount: 6;
        officialSpec: "https://docs.discourse.org/openapi.json";
        operationCatalog: "docs/provider-coverage/discourse-selected-api-2026-06-18.operations.json";
        selectedOperationCount: 5;
        sourceOperationCount: 93;
        sourcePathCount: 79;
     };
     channelCoverage: {
        categoriesTagsUsersGroupsModerationUploadsBadgesPrivateMessages: "provider-supported-not-typed";
        currentUser: "typed-read";
        nonDiscourseForumApis: "not-covered";
        posts: "typed-create-read";
        search: "typed-search";
        topics: "typed-create-read-latest";
        webhooks: "typed-validate-parse";
     };
     concreteProvider: "discourse";
     docs: "https://docs.discourse.org/";
     supportedForumApi: "discourse-compatible-rest-and-webhooks";
  };
  name: "Discourse Forum";
  operations: readonly [{
     alias: "forum.topic.create";
     capability: "create-provider-object";
     changesWorkflow: true;
     exposesSensitiveData: true;
     extension: true;
     label: "Create forum topic";
     providerObject: "forumTopic";
     requiresCredential: true;
     sideEffect: true;
   }, {
     alias: "forum.reply.create";
     capability: "send";
     changesWorkflow: true;
     exposesSensitiveData: true;
     extension: true;
     label: "Create forum reply";
     providerObject: "forumPost";
     requiresCredential: true;
     sideEffect: true;
   }, {
     alias: "forum.topic.read";
     capability: "read-provider-object";
     exposesSensitiveData: true;
     extension: true;
     label: "Read forum topic";
     providerObject: "forumTopic";
     requiresCredential: true;
   }, {
     alias: "forum.post.read";
     capability: "read-provider-object";
     exposesSensitiveData: true;
     extension: true;
     label: "Read forum post";
     providerObject: "forumPost";
     requiresCredential: true;
   }, {
     alias: "forum.search";
     capability: "search-provider-object";
     exposesSensitiveData: true;
     extension: true;
     label: "Search forum";
     providerObject: "forumSearchResult";
     requiresCredential: true;
   }, {
     alias: "forum.webhook.parse";
     capability: "community.webhook-signature";
     exposesSensitiveData: true;
     extension: true;
     label: "Parse forum webhook";
     providerObject: "forumSignedWebhook";
     requiresCredential: true;
  }];
  packageName: "@cognidesk/integration-community-forum";
  privacyNotes: readonly ["Forum posts, topic titles, usernames, and category/tag labels present in returned topics, posts, search results, or webhook payloads can contain customer data.", "Forum API keys and webhook secrets stay server-side and are represented in Studio only as readiness state."];
  provider: "forum";
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
| `directions` | ( \| `"receive-only"` \| `"send-only"` \| `"bidirectional"` \| `"inbound-only"` \| `"outbound-only"`)[] |
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
| `capabilities` | readonly \[\{ `audiences`: readonly \[`"customer-facing"`, `"mixed"`\]; `capability`: `"receive"`; `description`: `"Validates and parses forum webhook events for SDK-user-owned public community support workflows."`; `exposesSensitiveData`: `true`; `label`: `"Receive forum webhooks"`; `providerObjects`: readonly \[\{ `kind`: `"forumWebhook"`; `label`: `"Forum Webhook"`; \}\]; `requiresCredential`: `true`; \}, \{ `audiences`: readonly \[`"customer-facing"`, `"mixed"`\]; `capability`: `"send"`; `changesWorkflow`: `true`; `description`: `"Creates public forum replies when SDK-user policy permits public response automation."`; `exposesSensitiveData`: `true`; `label`: `"Create forum replies"`; `providerObjects`: readonly \[\{ `kind`: `"forumPost"`; `label`: `"Forum Post"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `audiences`: readonly \[`"customer-facing"`, `"internal-support"`, `"mixed"`\]; `capability`: `"draft"`; `description`: `"Builds topic and reply payloads for SDK-user approval workflows."`; `exposesSensitiveData`: `true`; `label`: `"Draft forum posts"`; `providerObjects`: readonly \[\{ `kind`: `"forumPostDraft"`; `label`: `"Forum Post Draft"`; \}\]; \}, \{ `audiences`: readonly \[`"customer-facing"`, `"mixed"`\]; `capability`: `"thread"`; `description`: `"Reads forum topics, posts, latest topics, and search results as community support threads."`; `exposesSensitiveData`: `true`; `label`: `"Use forum topics"`; `providerObjects`: readonly \[\{ `kind`: `"forumTopic"`; `label`: `"Forum Topic"`; \}\]; `requiresCredential`: `true`; \}, \{ `audiences`: readonly \[`"customer-facing"`, `"mixed"`\]; `capability`: `"create-provider-object"`; `changesWorkflow`: `true`; `description`: `"Creates SDK-user-approved forum topics for support announcements or escalated community cases."`; `exposesSensitiveData`: `true`; `label`: `"Create forum topics"`; `providerObjects`: readonly \[\{ `kind`: `"forumTopic"`; `label`: `"Forum Topic"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `audiences`: readonly \[`"internal-support"`, `"mixed"`\]; `capability`: `"read-provider-object"`; `description`: `"Reads forum topics, posts, and the current API user readiness record through the configured forum API."`; `exposesSensitiveData`: `true`; `label`: `"Read forum topics and posts"`; `providerObjects`: readonly \[\{ `kind`: `"forumTopic"`; `label`: `"Forum Topic"`; \}, \{ `kind`: `"forumPost"`; `label`: `"Forum Post"`; \}\]; `requiresCredential`: `true`; \}, \{ `audiences`: readonly \[`"internal-support"`, `"mixed"`\]; `capability`: `"search-provider-object"`; `description`: `"Searches forum topics and posts with SDK-user-selected query and pagination controls."`; `exposesSensitiveData`: `true`; `label`: `"Search forum content"`; `providerObjects`: readonly \[\{ `kind`: `"forumSearchResult"`; `label`: `"Forum Search Result"`; \}\]; `requiresCredential`: `true`; \}, \{ `audiences`: readonly \[`"internal-support"`\]; `capability`: `"community.webhook-signature"`; `description`: `"Validates Discourse-style X-Discourse-Event-Signature HMAC-SHA256 webhook signatures."`; `exposesSensitiveData`: `true`; `extension`: `true`; `label`: `"Validate forum webhook signatures"`; `providerObjects`: readonly \[\{ `kind`: `"forumSignedWebhook"`; `label`: `"Forum Signed Webhook"`; \}\]; `requiresCredential`: `true`; \}\] |
| `category` | `"community"` |
| `channelAudiences` | readonly \[`"customer-facing"`, `"internal-support"`, `"mixed"`\] |
| `coverage` | \{ `evidence`: readonly \[\{ `label`: `"Discourse API docs"`; `url`: `"https://docs.discourse.org/"`; \}, \{ `label`: `"Discourse webhook configuration and signature"`; `url`: `"https://meta.discourse.org/t/configure-webhooks-that-trigger-on-discourse-events-to-integrate-with-external-services/49045"`; \}\]; `notes`: readonly \[`"Coverage is limited to Discourse-compatible topic/reply creation through posts, topic/post reads, search/latest/current-user reads, and X-Discourse-Event-Signature webhook validation."`, `"The package does not implement broader Discourse administration for categories, tags, users/groups, moderation actions, uploads, badges, notifications, private messages, plugin endpoints, site settings, or non-Discourse forum APIs."`\]; `scope`: `"support-workflow-subset"`; \} |
| `coverage.evidence` | readonly \[\{ `label`: `"Discourse API docs"`; `url`: `"https://docs.discourse.org/"`; \}, \{ `label`: `"Discourse webhook configuration and signature"`; `url`: `"https://meta.discourse.org/t/configure-webhooks-that-trigger-on-discourse-events-to-integrate-with-external-services/49045"`; \}\] |
| `coverage.notes` | readonly \[`"Coverage is limited to Discourse-compatible topic/reply creation through posts, topic/post reads, search/latest/current-user reads, and X-Discourse-Event-Signature webhook validation."`, `"The package does not implement broader Discourse administration for categories, tags, users/groups, moderation actions, uploads, badges, notifications, private messages, plugin endpoints, site settings, or non-Discourse forum APIs."`\] |
| `coverage.scope` | `"support-workflow-subset"` |
| `credentialRequirements` | readonly \[\{ `description`: `"SDK-user-selected forum origin, such as a Discourse community URL."`; `id`: `"forum-base-url"`; `label`: `"Forum base URL"`; `required`: `true`; \}, \{ `description`: `"Server-side forum API key used for topic, post, search, and user readiness calls."`; `id`: `"forum-api-key"`; `label`: `"Forum API key"`; `required`: `true`; \}, \{ `description`: `"Forum API username that owns SDK-user-selected moderation and posting permissions."`; `id`: `"forum-api-username"`; `label`: `"Forum API username"`; `required`: `true`; \}, \{ `description`: `"Shared secret used to verify signed forum webhooks before accepting public community events."`; `id`: `"forum-webhook-secret"`; `label`: `"Forum webhook secret"`; `required`: `false`; \}\] |
| `directions` | readonly \[`"receive-only"`, `"send-only"`, `"bidirectional"`\] |
| `id` | `"community.forum"` |
| `limitations` | readonly \[`"The SDK user chooses which forum implementation, categories, tags, moderation actions, public reply approval, and retention policies are active."`, `"This package uses Discourse-compatible REST and webhook conventions as the concrete forum foundation; other forum implementations can wrap the same manifest pattern."`, `"Discourse rate limits and throttling are configurable by site administrators; SDK users own 429 handling, retry, and backoff policy."`\] |
| `maintainers` | readonly \[\{ `name`: `"Cognidesk"`; `type`: `"official"`; \}\] |
| `metadata` | \{ `apiCoverage`: \{ `docsOnlyOperationCount`: `1`; `fullProviderApi`: `false`; `generatedFromOfficialSpec`: `false`; `implementedOperationCount`: `6`; `officialSpec`: `"https://docs.discourse.org/openapi.json"`; `operationCatalog`: `"docs/provider-coverage/discourse-selected-api-2026-06-18.operations.json"`; `selectedOperationCount`: `5`; `sourceOperationCount`: `93`; `sourcePathCount`: `79`; \}; `channelCoverage`: \{ `categoriesTagsUsersGroupsModerationUploadsBadgesPrivateMessages`: `"provider-supported-not-typed"`; `currentUser`: `"typed-read"`; `nonDiscourseForumApis`: `"not-covered"`; `posts`: `"typed-create-read"`; `search`: `"typed-search"`; `topics`: `"typed-create-read-latest"`; `webhooks`: `"typed-validate-parse"`; \}; `concreteProvider`: `"discourse"`; `docs`: `"https://docs.discourse.org/"`; `supportedForumApi`: `"discourse-compatible-rest-and-webhooks"`; \} |
| `metadata.apiCoverage` | \{ `docsOnlyOperationCount`: `1`; `fullProviderApi`: `false`; `generatedFromOfficialSpec`: `false`; `implementedOperationCount`: `6`; `officialSpec`: `"https://docs.discourse.org/openapi.json"`; `operationCatalog`: `"docs/provider-coverage/discourse-selected-api-2026-06-18.operations.json"`; `selectedOperationCount`: `5`; `sourceOperationCount`: `93`; `sourcePathCount`: `79`; \} |
| `metadata.apiCoverage.docsOnlyOperationCount` | `1` |
| `metadata.apiCoverage.fullProviderApi` | `false` |
| `metadata.apiCoverage.generatedFromOfficialSpec` | `false` |
| `metadata.apiCoverage.implementedOperationCount` | `6` |
| `metadata.apiCoverage.officialSpec` | `"https://docs.discourse.org/openapi.json"` |
| `metadata.apiCoverage.operationCatalog` | `"docs/provider-coverage/discourse-selected-api-2026-06-18.operations.json"` |
| `metadata.apiCoverage.selectedOperationCount` | `5` |
| `metadata.apiCoverage.sourceOperationCount` | `93` |
| `metadata.apiCoverage.sourcePathCount` | `79` |
| `metadata.channelCoverage` | \{ `categoriesTagsUsersGroupsModerationUploadsBadgesPrivateMessages`: `"provider-supported-not-typed"`; `currentUser`: `"typed-read"`; `nonDiscourseForumApis`: `"not-covered"`; `posts`: `"typed-create-read"`; `search`: `"typed-search"`; `topics`: `"typed-create-read-latest"`; `webhooks`: `"typed-validate-parse"`; \} |
| `metadata.channelCoverage.categoriesTagsUsersGroupsModerationUploadsBadgesPrivateMessages` | `"provider-supported-not-typed"` |
| `metadata.channelCoverage.currentUser` | `"typed-read"` |
| `metadata.channelCoverage.nonDiscourseForumApis` | `"not-covered"` |
| `metadata.channelCoverage.posts` | `"typed-create-read"` |
| `metadata.channelCoverage.search` | `"typed-search"` |
| `metadata.channelCoverage.topics` | `"typed-create-read-latest"` |
| `metadata.channelCoverage.webhooks` | `"typed-validate-parse"` |
| `metadata.concreteProvider` | `"discourse"` |
| `metadata.docs` | `"https://docs.discourse.org/"` |
| `metadata.supportedForumApi` | `"discourse-compatible-rest-and-webhooks"` |
| `name` | `"Discourse Forum"` |
| `operations` | readonly \[\{ `alias`: `"forum.topic.create"`; `capability`: `"create-provider-object"`; `changesWorkflow`: `true`; `exposesSensitiveData`: `true`; `extension`: `true`; `label`: `"Create forum topic"`; `providerObject`: `"forumTopic"`; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `alias`: `"forum.reply.create"`; `capability`: `"send"`; `changesWorkflow`: `true`; `exposesSensitiveData`: `true`; `extension`: `true`; `label`: `"Create forum reply"`; `providerObject`: `"forumPost"`; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `alias`: `"forum.topic.read"`; `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `extension`: `true`; `label`: `"Read forum topic"`; `providerObject`: `"forumTopic"`; `requiresCredential`: `true`; \}, \{ `alias`: `"forum.post.read"`; `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `extension`: `true`; `label`: `"Read forum post"`; `providerObject`: `"forumPost"`; `requiresCredential`: `true`; \}, \{ `alias`: `"forum.search"`; `capability`: `"search-provider-object"`; `exposesSensitiveData`: `true`; `extension`: `true`; `label`: `"Search forum"`; `providerObject`: `"forumSearchResult"`; `requiresCredential`: `true`; \}, \{ `alias`: `"forum.webhook.parse"`; `capability`: `"community.webhook-signature"`; `exposesSensitiveData`: `true`; `extension`: `true`; `label`: `"Parse forum webhook"`; `providerObject`: `"forumSignedWebhook"`; `requiresCredential`: `true`; \}\] |
| `packageName` | `"@cognidesk/integration-community-forum"` |
| `privacyNotes` | readonly \[`"Forum posts, topic titles, usernames, and category/tag labels present in returned topics, posts, search results, or webhook payloads can contain customer data."`, `"Forum API keys and webhook secrets stay server-side and are represented in Studio only as readiness state."`\] |
| `provider` | `"forum"` |
| `trustLevel` | `"official"` |
