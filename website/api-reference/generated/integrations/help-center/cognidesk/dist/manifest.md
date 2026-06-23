# integrations/help-center/cognidesk/dist/manifest

## Variables

### cognideskHelpCenterProviderManifest

```ts
const cognideskHelpCenterProviderManifest: {
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
     scope:   | "local-protocol"
        | "support-workflow-subset"
        | "provider-api-subset"
        | "connector-required"
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
     | "inbound-only"
     | "send-only"
     | "outbound-only"
    | "bidirectional")[];
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
  trustLevel: "official" | "community" | "verified" | "experimental";
} & {
  capabilities: readonly [{
     audiences: readonly ["customer-facing", "internal-support", "mixed"];
     capability: "read-provider-object";
     description: "Fetches articles from SDK-user-configured local or generic HTTP help center sources.";
     exposesSensitiveData: true;
     label: "Fetch help center articles";
     providerObjects: readonly [{
        kind: "help-center-article";
        label: "Help Center Article";
     }];
     requiresCredential: true;
   }, {
     audiences: readonly ["customer-facing", "internal-support", "mixed"];
     capability: "search-provider-object";
     description: "Searches configured help center article sources using explicit source search parameters.";
     exposesSensitiveData: true;
     label: "Search help center articles";
     providerObjects: readonly [{
        kind: "help-center-article";
        label: "Help Center Article";
     }];
     requiresCredential: true;
   }, {
     audiences: readonly ["internal-support", "mixed"];
     capability: "receive";
     description: "Validates signed content webhooks and normalizes article ingestion events.";
     exposesSensitiveData: true;
     label: "Receive help center content events";
     providerObjects: readonly [{
        kind: "help-center-webhook";
        label: "Help Center Webhook";
     }];
     requiresCredential: true;
   }, {
     audiences: readonly ["internal-support"];
     capability: "help-center.webhook-signature";
     description: "Validates HMAC-SHA256 signatures for generic help center content webhooks.";
     exposesSensitiveData: true;
     extension: true;
     label: "Validate help center webhook signatures";
     providerObjects: readonly [{
        kind: "signed-help-center-webhook";
        label: "Signed Help Center Webhook";
     }];
     requiresCredential: true;
  }];
  category: "help-center";
  channelAudiences: readonly ["customer-facing", "internal-support", "mixed"];
  coverage: {
     evidence: readonly [];
     notes: readonly ["Coverage is limited to Cognidesk local or generic HTTP help-center source search/fetch/readiness plus Cognidesk HMAC webhook normalization.", "The package does not implement a named external help-center provider API for article/category/section/versioning/locale/permission/webhook administration; SDK users must wrap provider-specific APIs behind the configured source endpoints."];
     scope: "local-protocol";
  };
  credentialRequirements: readonly [{
     description: "SDK-user-configured local or HTTP help center content source.";
     id: "help-center-source";
     label: "Help center source";
     required: true;
   }, {
     description: "Shared HMAC secret used to verify help center content webhooks.";
     id: "help-center-webhook-secret";
     label: "Help center webhook secret";
     required: false;
  }];
  directions: readonly ["receive-only", "inbound-only"];
  id: "help-center.cognidesk";
  limitations: readonly ["Source selection, article visibility, indexing cadence, ranking, retention, locale fallback, and answer policy are owned by SDK user configuration.", "Local search is explicit lexical filtering; semantic ranking belongs in a configured search provider or evaluator."];
  maintainers: readonly [{
     name: "Cognidesk";
     type: "official";
  }];
  metadata: {
     channelCoverage: {
        articles: "typed-read-search";
        contentWebhooks: "typed-validate-parse";
        providerSpecificAdminLocalePermissionVersioning: "not-covered";
        readiness: "typed-readiness";
     };
  };
  name: "Cognidesk Help Center";
  operations: readonly [{
     alias: "cognidesk.help-center.article.search";
     capability: "search-provider-object";
     exposesSensitiveData: true;
     extension: true;
     label: "Search help center articles";
     providerObject: "help-center-article";
     requiresCredential: true;
   }, {
     alias: "cognidesk.help-center.article.fetch";
     capability: "read-provider-object";
     exposesSensitiveData: true;
     extension: true;
     label: "Fetch help center article";
     providerObject: "help-center-article";
     requiresCredential: true;
   }, {
     alias: "cognidesk.help-center.webhook.parse";
     capability: "help-center.webhook-signature";
     exposesSensitiveData: true;
     extension: true;
     label: "Parse help center webhook";
     providerObject: "signed-help-center-webhook";
     requiresCredential: true;
  }];
  packageName: "@cognidesk/integration-help-center-cognidesk";
  privacyNotes: readonly ["Help center content can include public support guidance, draft metadata, author data, locale data, and SDK-user-defined source metadata.", "HTTP headers, access tokens, and webhook secrets stay server-side and are represented in Studio only as readiness state."];
  provider: "cognidesk";
  trustLevel: "official";
};
```

#### Type Declaration

| Name | Type |
| ------ | ------ |
| `capabilities` | \{ `audiences?`: (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[]; `capability`: `string`; `changesWorkflow?`: `boolean`; `description?`: `string`; `exposesSensitiveData?`: `boolean`; `extension?`: `boolean`; `label?`: `string`; `metadata?`: `Record`\<`string`, `unknown`\>; `providerObjects?`: \{ `description?`: `string`; `kind`: `string`; `label?`: `string`; `metadata?`: `Record`\<`string`, `unknown`\>; `schemaName?`: `string`; \}[]; `requiresCredential?`: `boolean`; `sideEffect?`: `boolean`; \}[] |
| `category` | `string` |
| `channelAudiences` | (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[] |
| `coverage` | \{ `evidence`: \{ `label`: `string`; `url?`: `string`; \}[]; `notes`: `string`[]; `scope`: \| `"local-protocol"` \| `"support-workflow-subset"` \| `"provider-api-subset"` \| `"connector-required"` \| `"full-provider-api"`; \} |
| `coverage.evidence` | \{ `label`: `string`; `url?`: `string`; \}[] |
| `coverage.notes` | `string`[] |
| `coverage.scope` | \| `"local-protocol"` \| `"support-workflow-subset"` \| `"provider-api-subset"` \| `"connector-required"` \| `"full-provider-api"` |
| `credentialRequirements` | \{ `description?`: `string`; `id`: `string`; `label?`: `string`; `metadata?`: `Record`\<`string`, `unknown`\>; `required`: `boolean`; `scopes`: `string`[]; \}[] |
| `directions` | ( \| `"receive-only"` \| `"inbound-only"` \| `"send-only"` \| `"outbound-only"` \| `"bidirectional"`)[] |
| `id` | `string` |
| `limitations` | `string`[] |
| `maintainers` | \{ `name`: `string`; `type`: `"official"` \| `"community"` \| `"unknown"` \| `"partner"`; `url?`: `string`; \}[] |
| `metadata?` | `Record`\<`string`, `unknown`\> |
| `name` | `string` |
| `operations` | \{ `alias`: `string`; `audience?`: `"customer-facing"` \| `"internal-support"` \| `"mixed"`; `audiences?`: (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[]; `capability`: `string`; `changesWorkflow?`: `boolean`; `description?`: `string`; `exposesSensitiveData?`: `boolean`; `extension`: `boolean`; `externallyVisible?`: `boolean`; `inputSchema?`: `unknown`; `inputSchemaName?`: `string`; `inputSchemaRef?`: `string`; `label?`: `string`; `metadata?`: `Record`\<`string`, `unknown`\>; `outputSchema?`: `unknown`; `outputSchemaName?`: `string`; `outputSchemaRef?`: `string`; `providerObject?`: `string`; `providerObjects?`: \{ `description?`: `string`; `kind`: `string`; `label?`: `string`; `metadata?`: `Record`\<`string`, `unknown`\>; `schemaName?`: `string`; \}[]; `providerOperation?`: `string`; `requiredPolicyIds?`: `string`[]; `requiresApproval?`: `boolean`; `requiresCredential?`: `boolean`; `sideEffect?`: `boolean`; \}[] |
| `packageName` | `string` |
| `privacyNotes` | `string`[] |
| `provider` | `string` |
| `trustLevel` | `"official"` \| `"community"` \| `"verified"` \| `"experimental"` |

#### Type Declaration

| Name | Type |
| ------ | ------ |
| `capabilities` | readonly \[\{ `audiences`: readonly \[`"customer-facing"`, `"internal-support"`, `"mixed"`\]; `capability`: `"read-provider-object"`; `description`: `"Fetches articles from SDK-user-configured local or generic HTTP help center sources."`; `exposesSensitiveData`: `true`; `label`: `"Fetch help center articles"`; `providerObjects`: readonly \[\{ `kind`: `"help-center-article"`; `label`: `"Help Center Article"`; \}\]; `requiresCredential`: `true`; \}, \{ `audiences`: readonly \[`"customer-facing"`, `"internal-support"`, `"mixed"`\]; `capability`: `"search-provider-object"`; `description`: `"Searches configured help center article sources using explicit source search parameters."`; `exposesSensitiveData`: `true`; `label`: `"Search help center articles"`; `providerObjects`: readonly \[\{ `kind`: `"help-center-article"`; `label`: `"Help Center Article"`; \}\]; `requiresCredential`: `true`; \}, \{ `audiences`: readonly \[`"internal-support"`, `"mixed"`\]; `capability`: `"receive"`; `description`: `"Validates signed content webhooks and normalizes article ingestion events."`; `exposesSensitiveData`: `true`; `label`: `"Receive help center content events"`; `providerObjects`: readonly \[\{ `kind`: `"help-center-webhook"`; `label`: `"Help Center Webhook"`; \}\]; `requiresCredential`: `true`; \}, \{ `audiences`: readonly \[`"internal-support"`\]; `capability`: `"help-center.webhook-signature"`; `description`: `"Validates HMAC-SHA256 signatures for generic help center content webhooks."`; `exposesSensitiveData`: `true`; `extension`: `true`; `label`: `"Validate help center webhook signatures"`; `providerObjects`: readonly \[\{ `kind`: `"signed-help-center-webhook"`; `label`: `"Signed Help Center Webhook"`; \}\]; `requiresCredential`: `true`; \}\] |
| `category` | `"help-center"` |
| `channelAudiences` | readonly \[`"customer-facing"`, `"internal-support"`, `"mixed"`\] |
| `coverage` | \{ `evidence`: readonly \[\]; `notes`: readonly \[`"Coverage is limited to Cognidesk local or generic HTTP help-center source search/fetch/readiness plus Cognidesk HMAC webhook normalization."`, `"The package does not implement a named external help-center provider API for article/category/section/versioning/locale/permission/webhook administration; SDK users must wrap provider-specific APIs behind the configured source endpoints."`\]; `scope`: `"local-protocol"`; \} |
| `coverage.evidence` | readonly \[\] |
| `coverage.notes` | readonly \[`"Coverage is limited to Cognidesk local or generic HTTP help-center source search/fetch/readiness plus Cognidesk HMAC webhook normalization."`, `"The package does not implement a named external help-center provider API for article/category/section/versioning/locale/permission/webhook administration; SDK users must wrap provider-specific APIs behind the configured source endpoints."`\] |
| `coverage.scope` | `"local-protocol"` |
| `credentialRequirements` | readonly \[\{ `description`: `"SDK-user-configured local or HTTP help center content source."`; `id`: `"help-center-source"`; `label`: `"Help center source"`; `required`: `true`; \}, \{ `description`: `"Shared HMAC secret used to verify help center content webhooks."`; `id`: `"help-center-webhook-secret"`; `label`: `"Help center webhook secret"`; `required`: `false`; \}\] |
| `directions` | readonly \[`"receive-only"`, `"inbound-only"`\] |
| `id` | `"help-center.cognidesk"` |
| `limitations` | readonly \[`"Source selection, article visibility, indexing cadence, ranking, retention, locale fallback, and answer policy are owned by SDK user configuration."`, `"Local search is explicit lexical filtering; semantic ranking belongs in a configured search provider or evaluator."`\] |
| `maintainers` | readonly \[\{ `name`: `"Cognidesk"`; `type`: `"official"`; \}\] |
| `metadata` | \{ `channelCoverage`: \{ `articles`: `"typed-read-search"`; `contentWebhooks`: `"typed-validate-parse"`; `providerSpecificAdminLocalePermissionVersioning`: `"not-covered"`; `readiness`: `"typed-readiness"`; \}; \} |
| `metadata.channelCoverage` | \{ `articles`: `"typed-read-search"`; `contentWebhooks`: `"typed-validate-parse"`; `providerSpecificAdminLocalePermissionVersioning`: `"not-covered"`; `readiness`: `"typed-readiness"`; \} |
| `metadata.channelCoverage.articles` | `"typed-read-search"` |
| `metadata.channelCoverage.contentWebhooks` | `"typed-validate-parse"` |
| `metadata.channelCoverage.providerSpecificAdminLocalePermissionVersioning` | `"not-covered"` |
| `metadata.channelCoverage.readiness` | `"typed-readiness"` |
| `name` | `"Cognidesk Help Center"` |
| `operations` | readonly \[\{ `alias`: `"cognidesk.help-center.article.search"`; `capability`: `"search-provider-object"`; `exposesSensitiveData`: `true`; `extension`: `true`; `label`: `"Search help center articles"`; `providerObject`: `"help-center-article"`; `requiresCredential`: `true`; \}, \{ `alias`: `"cognidesk.help-center.article.fetch"`; `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `extension`: `true`; `label`: `"Fetch help center article"`; `providerObject`: `"help-center-article"`; `requiresCredential`: `true`; \}, \{ `alias`: `"cognidesk.help-center.webhook.parse"`; `capability`: `"help-center.webhook-signature"`; `exposesSensitiveData`: `true`; `extension`: `true`; `label`: `"Parse help center webhook"`; `providerObject`: `"signed-help-center-webhook"`; `requiresCredential`: `true`; \}\] |
| `packageName` | `"@cognidesk/integration-help-center-cognidesk"` |
| `privacyNotes` | readonly \[`"Help center content can include public support guidance, draft metadata, author data, locale data, and SDK-user-defined source metadata."`, `"HTTP headers, access tokens, and webhook secrets stay server-side and are represented in Studio only as readiness state."`\] |
| `provider` | `"cognidesk"` |
| `trustLevel` | `"official"` |
