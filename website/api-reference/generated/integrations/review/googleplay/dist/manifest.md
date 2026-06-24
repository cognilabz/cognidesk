# integrations/review/googleplay/dist/manifest

## Variables

### googlePlayReviewsProviderManifest

```ts
const googlePlayReviewsProviderManifest: {
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
  channelAudiences?: ("customer-facing" | "internal-support" | "mixed")[];
  coverage?: {
     evidence?: {
        label: string;
        url?: string;
     }[];
     notes?: string[];
     scope?:   | "support-workflow-subset"
        | "provider-api-subset"
        | "connector-required"
        | "local-protocol"
        | "full-provider-api";
  };
  credentialRequirements?: {
     description?: string;
     id: string;
     label?: string;
     metadata?: Record<string, unknown>;
     required?: boolean;
     scopes?: string[];
  }[];
  directions: (
     | "receive-only"
     | "send-only"
     | "bidirectional"
     | "inbound-only"
    | "outbound-only")[];
  id: string;
  limitations?: string[];
  maintainers?: {
     name: string;
     type?: "official" | "community" | "unknown" | "partner";
     url?: string;
  }[];
  metadata?: Record<string, unknown>;
  name: string;
  operations?: {
     alias: string;
     audience?: "customer-facing" | "internal-support" | "mixed";
     audiences?: ("customer-facing" | "internal-support" | "mixed")[];
     capability: string;
     changesWorkflow?: boolean;
     description?: string;
     exposesSensitiveData?: boolean;
     extension?: boolean;
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
  privacyNotes?: string[];
  provider: string;
  trustLevel?: "official" | "community" | "verified" | "experimental";
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
| `capabilities` | \{ `audiences?`: (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[]; `capability`: `string`; `changesWorkflow?`: `boolean`; `description?`: `string`; `exposesSensitiveData?`: `boolean`; `extension?`: `boolean`; `label?`: `string`; `metadata?`: `Record`\<`string`, `unknown`\>; `providerObjects?`: \{ `description?`: `string`; `kind`: `string`; `label?`: `string`; `metadata?`: `Record`\<`string`, `unknown`\>; `schemaName?`: `string`; \}[]; `requiresCredential?`: `boolean`; `sideEffect?`: `boolean`; \}[] |
| `category` | `string` |
| `channelAudiences?` | (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[] |
| `coverage?` | \{ `evidence?`: \{ `label`: `string`; `url?`: `string`; \}[]; `notes?`: `string`[]; `scope?`: \| `"support-workflow-subset"` \| `"provider-api-subset"` \| `"connector-required"` \| `"local-protocol"` \| `"full-provider-api"`; \} |
| `coverage.evidence?` | \{ `label`: `string`; `url?`: `string`; \}[] |
| `coverage.notes?` | `string`[] |
| `coverage.scope?` | \| `"support-workflow-subset"` \| `"provider-api-subset"` \| `"connector-required"` \| `"local-protocol"` \| `"full-provider-api"` |
| `credentialRequirements?` | \{ `description?`: `string`; `id`: `string`; `label?`: `string`; `metadata?`: `Record`\<`string`, `unknown`\>; `required?`: `boolean`; `scopes?`: `string`[]; \}[] |
| `directions` | ( \| `"receive-only"` \| `"send-only"` \| `"bidirectional"` \| `"inbound-only"` \| `"outbound-only"`)[] |
| `id` | `string` |
| `limitations?` | `string`[] |
| `maintainers?` | \{ `name`: `string`; `type?`: `"official"` \| `"community"` \| `"unknown"` \| `"partner"`; `url?`: `string`; \}[] |
| `metadata?` | `Record`\<`string`, `unknown`\> |
| `name` | `string` |
| `operations?` | \{ `alias`: `string`; `audience?`: `"customer-facing"` \| `"internal-support"` \| `"mixed"`; `audiences?`: (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[]; `capability`: `string`; `changesWorkflow?`: `boolean`; `description?`: `string`; `exposesSensitiveData?`: `boolean`; `extension?`: `boolean`; `externallyVisible?`: `boolean`; `inputSchema?`: `unknown`; `inputSchemaName?`: `string`; `inputSchemaRef?`: `string`; `label?`: `string`; `metadata?`: `Record`\<`string`, `unknown`\>; `outputSchema?`: `unknown`; `outputSchemaName?`: `string`; `outputSchemaRef?`: `string`; `providerObject?`: `string`; `providerObjects?`: \{ `description?`: `string`; `kind`: `string`; `label?`: `string`; `metadata?`: `Record`\<`string`, `unknown`\>; `schemaName?`: `string`; \}[]; `providerOperation?`: `string`; `requiredPolicyIds?`: `string`[]; `requiresApproval?`: `boolean`; `requiresCredential?`: `boolean`; `sideEffect?`: `boolean`; \}[] |
| `packageName` | `string` |
| `privacyNotes?` | `string`[] |
| `provider` | `string` |
| `trustLevel?` | `"official"` \| `"community"` \| `"verified"` \| `"experimental"` |

***

### googlePlayReviewsProviderManifestInput

```ts
const googlePlayReviewsProviderManifestInput: {
  capabilities: readonly [{
     audiences: readonly ["customer-facing", "internal-support", "mixed"];
     capability: "read-provider-object";
     description: "Lists recent reviews and reads individual Android app reviews through the official Android Publisher client.";
     exposesSensitiveData: true;
     label: "Read Google Play reviews";
     providerObjects: readonly [{
        kind: "googlePlayReview";
        label: "Google Play Review";
        schemaName: "Review";
     }];
     requiresCredential: true;
   }, {
     audiences: readonly ["customer-facing", "internal-support", "mixed"];
     capability: "search-provider-object";
     description: "Uses Android Publisher review pagination and translation parameters controlled by SDK-user policy.";
     exposesSensitiveData: true;
     label: "Page through Google Play reviews";
     providerObjects: readonly [{
        kind: "googlePlayReview";
        label: "Google Play Review";
        schemaName: "Review";
     }];
     requiresCredential: true;
   }, {
     audiences: readonly ["customer-facing"];
     capability: "send";
     changesWorkflow: true;
     description: "Replies to or updates an existing developer reply for a review when SDK-user policy and Play permissions allow it.";
     exposesSensitiveData: true;
     label: "Reply to Google Play reviews";
     providerObjects: readonly [{
        kind: "googlePlayReview";
        label: "Google Play Review";
        schemaName: "Review";
      }, {
        kind: "googlePlayDeveloperReply";
        label: "Google Play Developer Reply";
        schemaName: "ReviewsReplyResponse";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     audiences: readonly ["customer-facing", "internal-support", "mixed"];
     capability: "draft";
     description: "Builds reply payloads for SDK-user-configured approval, moderation, locale, and consent flows.";
     exposesSensitiveData: true;
     label: "Prepare Google Play review replies";
     providerObjects: readonly [{
        kind: "googlePlayDeveloperReplyDraft";
        label: "Google Play Developer Reply Draft";
     }];
  }];
  category: "review";
  channelAudiences: readonly ["customer-facing", "internal-support", "mixed"];
  coverage: {
     evidence: readonly [{
        label: "Google Play Android Publisher API";
        url: "https://developers.google.com/android-publisher/api-ref/rest";
      }, {
        label: "Google Play Android Publisher reviews resource";
        url: "https://developers.google.com/android-publisher/api-ref/rest/v3/reviews";
      }, {
        label: "Google APIs Node.js client";
        url: "https://googleapis.dev/nodejs/googleapis/latest/";
      }, {
        label: "@googleapis/androidpublisher package";
        url: "https://www.npmjs.com/package/@googleapis/androidpublisher";
     }];
     notes: readonly ["Cognidesk adapter coverage is scoped to Google Play review list/read/reply workflows.", "Provider-client coverage is supplied by the official @googleapis/androidpublisher Android Publisher v3 client exposed as a raw-client escape hatch.", "The SDK user owns Play Console permissions, package ownership, review polling policy, review reply approval, localization, consent, redaction, and retention decisions."];
     scope: "support-workflow-subset";
  };
  credentialRequirements: readonly [{
     description: "SDK-user-owned Google service account with Google Play Console Reply to reviews permission.";
     id: "googleplay-service-account";
     label: "Google Play service account";
     metadata: {
        scopeKind: "provider-oauth-scopes";
     };
     required: false;
     scopes: readonly ["https://www.googleapis.com/auth/androidpublisher"];
   }, {
     description: "Server-side Google auth client, OAuth access token, token supplier, or service-account auth for Android Publisher API requests.";
     id: "googleplay-access-token";
     label: "Google Play API auth";
     metadata: {
        scopeKind: "provider-oauth-scopes";
     };
     required: true;
     scopes: readonly ["https://www.googleapis.com/auth/androidpublisher"];
   }, {
     description: "Fully-qualified Android application package name such as com.example.app.";
     id: "googleplay-package-name";
     label: "Android package name";
     required: true;
  }];
  directions: readonly ["receive-only", "send-only", "bidirectional"];
  id: "review.googleplay";
  limitations: readonly ["The Google Play Reply to Reviews API exposes production app reviews with comments; rating-only feedback and non-production feedback are not exposed through this API.", "Developer replies are limited to 350 characters by the Android Publisher Reply to Reviews API.", "Google Play review API quotas, Reply to reviews permission, package ownership, translation behavior, reply moderation, and reply timing are owned by the SDK user's Play Console setup."];
  maintainers: readonly [{
     name: "Cognidesk";
     type: "official";
  }];
  metadata: {
     adapterCoverage: {
        normalizedOperations: readonly ["googleplay.reviews.list", "googleplay.reviews.get", "googleplay.reviews.reply"];
     };
     implementation: {
        rawClientExport: "GooglePlayReviewsClient.rawClient";
        runtimePackage: "@cognidesk/integration-review-googleplay/runtime";
        sdkPackage: "@googleapis/androidpublisher";
        sdkVersionRange: "^36.0.0";
        strategy: "official-sdk";
     };
     providerClientCoverage: {
        notes: "Advanced Android Publisher API access is available through the official SDK raw client, not re-exported as Cognidesk-owned full API functions.";
        strategy: "official-sdk-raw-client";
     };
  };
  name: "Google Play Reviews";
  operations: readonly [{
     alias: "googleplay.reviews.list";
     capability: "search-provider-object";
     exposesSensitiveData: true;
     label: "List Google Play reviews";
     providerObject: "googlePlayReview";
     providerOperation: "androidpublisher.reviews.list";
     requiresCredential: true;
   }, {
     alias: "googleplay.reviews.get";
     capability: "read-provider-object";
     exposesSensitiveData: true;
     label: "Get Google Play review";
     providerObject: "googlePlayReview";
     providerOperation: "androidpublisher.reviews.get";
     requiresCredential: true;
   }, {
     alias: "googleplay.reviews.reply";
     capability: "send";
     exposesSensitiveData: true;
     externallyVisible: true;
     label: "Reply to Google Play review";
     providerObject: "googlePlayDeveloperReply";
     providerOperation: "androidpublisher.reviews.reply";
     requiresApproval: true;
     requiresCredential: true;
     sideEffect: true;
  }];
  packageName: "@cognidesk/integration-review-googleplay";
  privacyNotes: readonly ["Google Play review text, author names, device metadata, ratings, language, app version, and developer replies can contain customer data.", "OAuth tokens and service-account material stay server-side and are represented in Studio only as readiness state."];
  provider: "googleplay";
  trustLevel: "official";
};
```

#### Type Declaration

| Name | Type |
| ------ | ------ |
| <a id="property-capabilities"></a> `capabilities` | readonly \[\{ `audiences`: readonly \[`"customer-facing"`, `"internal-support"`, `"mixed"`\]; `capability`: `"read-provider-object"`; `description`: `"Lists recent reviews and reads individual Android app reviews through the official Android Publisher client."`; `exposesSensitiveData`: `true`; `label`: `"Read Google Play reviews"`; `providerObjects`: readonly \[\{ `kind`: `"googlePlayReview"`; `label`: `"Google Play Review"`; `schemaName`: `"Review"`; \}\]; `requiresCredential`: `true`; \}, \{ `audiences`: readonly \[`"customer-facing"`, `"internal-support"`, `"mixed"`\]; `capability`: `"search-provider-object"`; `description`: `"Uses Android Publisher review pagination and translation parameters controlled by SDK-user policy."`; `exposesSensitiveData`: `true`; `label`: `"Page through Google Play reviews"`; `providerObjects`: readonly \[\{ `kind`: `"googlePlayReview"`; `label`: `"Google Play Review"`; `schemaName`: `"Review"`; \}\]; `requiresCredential`: `true`; \}, \{ `audiences`: readonly \[`"customer-facing"`\]; `capability`: `"send"`; `changesWorkflow`: `true`; `description`: `"Replies to or updates an existing developer reply for a review when SDK-user policy and Play permissions allow it."`; `exposesSensitiveData`: `true`; `label`: `"Reply to Google Play reviews"`; `providerObjects`: readonly \[\{ `kind`: `"googlePlayReview"`; `label`: `"Google Play Review"`; `schemaName`: `"Review"`; \}, \{ `kind`: `"googlePlayDeveloperReply"`; `label`: `"Google Play Developer Reply"`; `schemaName`: `"ReviewsReplyResponse"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `audiences`: readonly \[`"customer-facing"`, `"internal-support"`, `"mixed"`\]; `capability`: `"draft"`; `description`: `"Builds reply payloads for SDK-user-configured approval, moderation, locale, and consent flows."`; `exposesSensitiveData`: `true`; `label`: `"Prepare Google Play review replies"`; `providerObjects`: readonly \[\{ `kind`: `"googlePlayDeveloperReplyDraft"`; `label`: `"Google Play Developer Reply Draft"`; \}\]; \}\] |
| <a id="property-category"></a> `category` | `"review"` |
| <a id="property-channelaudiences"></a> `channelAudiences` | readonly \[`"customer-facing"`, `"internal-support"`, `"mixed"`\] |
| <a id="property-coverage"></a> `coverage` | \{ `evidence`: readonly \[\{ `label`: `"Google Play Android Publisher API"`; `url`: `"https://developers.google.com/android-publisher/api-ref/rest"`; \}, \{ `label`: `"Google Play Android Publisher reviews resource"`; `url`: `"https://developers.google.com/android-publisher/api-ref/rest/v3/reviews"`; \}, \{ `label`: `"Google APIs Node.js client"`; `url`: `"https://googleapis.dev/nodejs/googleapis/latest/"`; \}, \{ `label`: `"@googleapis/androidpublisher package"`; `url`: `"https://www.npmjs.com/package/@googleapis/androidpublisher"`; \}\]; `notes`: readonly \[`"Cognidesk adapter coverage is scoped to Google Play review list/read/reply workflows."`, `"Provider-client coverage is supplied by the official @googleapis/androidpublisher Android Publisher v3 client exposed as a raw-client escape hatch."`, `"The SDK user owns Play Console permissions, package ownership, review polling policy, review reply approval, localization, consent, redaction, and retention decisions."`\]; `scope`: `"support-workflow-subset"`; \} |
| `coverage.evidence` | readonly \[\{ `label`: `"Google Play Android Publisher API"`; `url`: `"https://developers.google.com/android-publisher/api-ref/rest"`; \}, \{ `label`: `"Google Play Android Publisher reviews resource"`; `url`: `"https://developers.google.com/android-publisher/api-ref/rest/v3/reviews"`; \}, \{ `label`: `"Google APIs Node.js client"`; `url`: `"https://googleapis.dev/nodejs/googleapis/latest/"`; \}, \{ `label`: `"@googleapis/androidpublisher package"`; `url`: `"https://www.npmjs.com/package/@googleapis/androidpublisher"`; \}\] |
| `coverage.notes` | readonly \[`"Cognidesk adapter coverage is scoped to Google Play review list/read/reply workflows."`, `"Provider-client coverage is supplied by the official @googleapis/androidpublisher Android Publisher v3 client exposed as a raw-client escape hatch."`, `"The SDK user owns Play Console permissions, package ownership, review polling policy, review reply approval, localization, consent, redaction, and retention decisions."`\] |
| `coverage.scope` | `"support-workflow-subset"` |
| <a id="property-credentialrequirements"></a> `credentialRequirements` | readonly \[\{ `description`: `"SDK-user-owned Google service account with Google Play Console Reply to reviews permission."`; `id`: `"googleplay-service-account"`; `label`: `"Google Play service account"`; `metadata`: \{ `scopeKind`: `"provider-oauth-scopes"`; \}; `required`: `false`; `scopes`: readonly \[`"https://www.googleapis.com/auth/androidpublisher"`\]; \}, \{ `description`: `"Server-side Google auth client, OAuth access token, token supplier, or service-account auth for Android Publisher API requests."`; `id`: `"googleplay-access-token"`; `label`: `"Google Play API auth"`; `metadata`: \{ `scopeKind`: `"provider-oauth-scopes"`; \}; `required`: `true`; `scopes`: readonly \[`"https://www.googleapis.com/auth/androidpublisher"`\]; \}, \{ `description`: `"Fully-qualified Android application package name such as com.example.app."`; `id`: `"googleplay-package-name"`; `label`: `"Android package name"`; `required`: `true`; \}\] |
| <a id="property-directions"></a> `directions` | readonly \[`"receive-only"`, `"send-only"`, `"bidirectional"`\] |
| <a id="property-id"></a> `id` | `"review.googleplay"` |
| <a id="property-limitations"></a> `limitations` | readonly \[`"The Google Play Reply to Reviews API exposes production app reviews with comments; rating-only feedback and non-production feedback are not exposed through this API."`, `"Developer replies are limited to 350 characters by the Android Publisher Reply to Reviews API."`, `"Google Play review API quotas, Reply to reviews permission, package ownership, translation behavior, reply moderation, and reply timing are owned by the SDK user's Play Console setup."`\] |
| <a id="property-maintainers"></a> `maintainers` | readonly \[\{ `name`: `"Cognidesk"`; `type`: `"official"`; \}\] |
| <a id="property-metadata"></a> `metadata` | \{ `adapterCoverage`: \{ `normalizedOperations`: readonly \[`"googleplay.reviews.list"`, `"googleplay.reviews.get"`, `"googleplay.reviews.reply"`\]; \}; `implementation`: \{ `rawClientExport`: `"GooglePlayReviewsClient.rawClient"`; `runtimePackage`: `"@cognidesk/integration-review-googleplay/runtime"`; `sdkPackage`: `"@googleapis/androidpublisher"`; `sdkVersionRange`: `"^36.0.0"`; `strategy`: `"official-sdk"`; \}; `providerClientCoverage`: \{ `notes`: `"Advanced Android Publisher API access is available through the official SDK raw client, not re-exported as Cognidesk-owned full API functions."`; `strategy`: `"official-sdk-raw-client"`; \}; \} |
| `metadata.adapterCoverage` | \{ `normalizedOperations`: readonly \[`"googleplay.reviews.list"`, `"googleplay.reviews.get"`, `"googleplay.reviews.reply"`\]; \} |
| `metadata.adapterCoverage.normalizedOperations` | readonly \[`"googleplay.reviews.list"`, `"googleplay.reviews.get"`, `"googleplay.reviews.reply"`\] |
| `metadata.implementation` | \{ `rawClientExport`: `"GooglePlayReviewsClient.rawClient"`; `runtimePackage`: `"@cognidesk/integration-review-googleplay/runtime"`; `sdkPackage`: `"@googleapis/androidpublisher"`; `sdkVersionRange`: `"^36.0.0"`; `strategy`: `"official-sdk"`; \} |
| `metadata.implementation.rawClientExport` | `"GooglePlayReviewsClient.rawClient"` |
| `metadata.implementation.runtimePackage` | `"@cognidesk/integration-review-googleplay/runtime"` |
| `metadata.implementation.sdkPackage` | `"@googleapis/androidpublisher"` |
| `metadata.implementation.sdkVersionRange` | `"^36.0.0"` |
| `metadata.implementation.strategy` | `"official-sdk"` |
| `metadata.providerClientCoverage` | \{ `notes`: `"Advanced Android Publisher API access is available through the official SDK raw client, not re-exported as Cognidesk-owned full API functions."`; `strategy`: `"official-sdk-raw-client"`; \} |
| `metadata.providerClientCoverage.notes` | `"Advanced Android Publisher API access is available through the official SDK raw client, not re-exported as Cognidesk-owned full API functions."` |
| `metadata.providerClientCoverage.strategy` | `"official-sdk-raw-client"` |
| <a id="property-name"></a> `name` | `"Google Play Reviews"` |
| <a id="property-operations"></a> `operations` | readonly \[\{ `alias`: `"googleplay.reviews.list"`; `capability`: `"search-provider-object"`; `exposesSensitiveData`: `true`; `label`: `"List Google Play reviews"`; `providerObject`: `"googlePlayReview"`; `providerOperation`: `"androidpublisher.reviews.list"`; `requiresCredential`: `true`; \}, \{ `alias`: `"googleplay.reviews.get"`; `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `label`: `"Get Google Play review"`; `providerObject`: `"googlePlayReview"`; `providerOperation`: `"androidpublisher.reviews.get"`; `requiresCredential`: `true`; \}, \{ `alias`: `"googleplay.reviews.reply"`; `capability`: `"send"`; `exposesSensitiveData`: `true`; `externallyVisible`: `true`; `label`: `"Reply to Google Play review"`; `providerObject`: `"googlePlayDeveloperReply"`; `providerOperation`: `"androidpublisher.reviews.reply"`; `requiresApproval`: `true`; `requiresCredential`: `true`; `sideEffect`: `true`; \}\] |
| <a id="property-packagename"></a> `packageName` | `"@cognidesk/integration-review-googleplay"` |
| <a id="property-privacynotes"></a> `privacyNotes` | readonly \[`"Google Play review text, author names, device metadata, ratings, language, app version, and developer replies can contain customer data."`, `"OAuth tokens and service-account material stay server-side and are represented in Studio only as readiness state."`\] |
| <a id="property-provider"></a> `provider` | `"googleplay"` |
| <a id="property-trustlevel"></a> `trustLevel` | `"official"` |
