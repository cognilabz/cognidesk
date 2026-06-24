# integrations/review/appstore/dist/manifest

## Variables

### appStoreConnectReviewedOperationAllowlist

```ts
const appStoreConnectReviewedOperationAllowlist: readonly [{
  aliases: readonly ["appstore.reviews.list"];
  clientMethods: readonly ["listReviews"];
  method: "GET";
  path: "/v1/apps/{id}/customerReviews";
}, {
  aliases: readonly ["appstore.reviews.page"];
  clientMethods: readonly ["listReviewsPage"];
  method: "GET";
  path: "/v1/apps/{id}/customerReviews";
  source: "links.next for the configured app customerReviews collection";
}, {
  aliases: readonly ["appstore.reviews.get"];
  clientMethods: readonly ["getReview"];
  method: "GET";
  path: "/v1/customerReviews/{id}";
}, {
  aliases: readonly ["appstore.reviewResponses.createOrUpdate"];
  clientMethods: readonly ["createOrUpdateReviewResponse"];
  method: "POST";
  path: "/v1/customerReviewResponses";
}, {
  aliases: readonly ["appstore.reviewResponses.delete"];
  clientMethods: readonly ["deleteReviewResponse"];
  method: "DELETE";
  path: "/v1/customerReviewResponses/{id}";
}, {
  aliases: readonly [];
  clientMethods: readonly ["getApp", "rawClient.request"];
  method: "GET";
  path: "/v1/apps/{id}";
  purpose: "configured app check and reviewed raw-client escape hatch";
}];
```

***

### appStoreReviewsProviderManifest

```ts
const appStoreReviewsProviderManifest: {
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
  channelAudiences?: ("customer-facing" | "mixed" | "internal-support")[];
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
     audience?: "customer-facing" | "mixed" | "internal-support";
     audiences?: ("customer-facing" | "mixed" | "internal-support")[];
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
| `capabilities` | \{ `audiences?`: (`"customer-facing"` \| `"mixed"` \| `"internal-support"`)[]; `capability`: `string`; `changesWorkflow?`: `boolean`; `description?`: `string`; `exposesSensitiveData?`: `boolean`; `extension?`: `boolean`; `label?`: `string`; `metadata?`: `Record`\<`string`, `unknown`\>; `providerObjects?`: \{ `description?`: `string`; `kind`: `string`; `label?`: `string`; `metadata?`: `Record`\<`string`, `unknown`\>; `schemaName?`: `string`; \}[]; `requiresCredential?`: `boolean`; `sideEffect?`: `boolean`; \}[] |
| `category` | `string` |
| `channelAudiences?` | (`"customer-facing"` \| `"mixed"` \| `"internal-support"`)[] |
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
| `operations?` | \{ `alias`: `string`; `audience?`: `"customer-facing"` \| `"mixed"` \| `"internal-support"`; `audiences?`: (`"customer-facing"` \| `"mixed"` \| `"internal-support"`)[]; `capability`: `string`; `changesWorkflow?`: `boolean`; `description?`: `string`; `exposesSensitiveData?`: `boolean`; `extension?`: `boolean`; `externallyVisible?`: `boolean`; `inputSchema?`: `unknown`; `inputSchemaName?`: `string`; `inputSchemaRef?`: `string`; `label?`: `string`; `metadata?`: `Record`\<`string`, `unknown`\>; `outputSchema?`: `unknown`; `outputSchemaName?`: `string`; `outputSchemaRef?`: `string`; `providerObject?`: `string`; `providerObjects?`: \{ `description?`: `string`; `kind`: `string`; `label?`: `string`; `metadata?`: `Record`\<`string`, `unknown`\>; `schemaName?`: `string`; \}[]; `providerOperation?`: `string`; `requiredPolicyIds?`: `string`[]; `requiresApproval?`: `boolean`; `requiresCredential?`: `boolean`; `sideEffect?`: `boolean`; \}[] |
| `packageName` | `string` |
| `privacyNotes?` | `string`[] |
| `provider` | `string` |
| `trustLevel?` | `"official"` \| `"community"` \| `"verified"` \| `"experimental"` |

***

### appStoreReviewsProviderManifestInput

```ts
const appStoreReviewsProviderManifestInput: {
  capabilities: readonly [{
     audiences: readonly ["customer-facing", "mixed"];
     capability: "receive";
     description: "Reads App Store Connect customer reviews as support signals for SDK-user-configured review workflows.";
     exposesSensitiveData: true;
     label: "Read App Store reviews";
     providerObjects: readonly [{
        kind: "appStoreCustomerReview";
        label: "App Store Customer Review";
     }];
     requiresCredential: true;
   }, {
     audiences: readonly ["customer-facing", "mixed"];
     capability: "draft";
     description: "Builds App Store review response payloads for SDK-user approval workflows.";
     exposesSensitiveData: true;
     label: "Draft review responses";
     providerObjects: readonly [{
        kind: "appStoreReviewResponseDraft";
        label: "App Store Review Response Draft";
     }];
   }, {
     audiences: readonly ["customer-facing"];
     capability: "send";
     description: "Creates or updates App Store Connect customer review responses when SDK-user policy allows public replies.";
     exposesSensitiveData: true;
     label: "Publish review responses";
     providerObjects: readonly [{
        kind: "appStoreCustomerReviewResponse";
        label: "App Store Customer Review Response";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     audiences: readonly ["internal-support", "mixed"];
     capability: "read-provider-object";
     description: "Reads App Store review details, included relationships, and existing response resources.";
     exposesSensitiveData: true;
     label: "Read review records";
     providerObjects: readonly [{
        kind: "appStoreCustomerReview";
        label: "App Store Customer Review";
     }];
     requiresCredential: true;
   }, {
     audiences: readonly ["internal-support", "mixed"];
     capability: "search-provider-object";
     description: "Lists App Store reviews with SDK-user-selected filters, includes, pagination, sorting, and locale constraints.";
     exposesSensitiveData: true;
     label: "List and filter reviews";
     providerObjects: readonly [{
        kind: "appStoreCustomerReview";
        label: "App Store Customer Review";
     }];
     requiresCredential: true;
   }, {
     audiences: readonly ["internal-support", "mixed"];
     capability: "delete-provider-object";
     changesWorkflow: true;
     description: "Deletes existing App Store customer review responses according to SDK-user approval policy.";
     exposesSensitiveData: true;
     label: "Delete review responses";
     providerObjects: readonly [{
        kind: "appStoreCustomerReviewResponse";
        label: "App Store Customer Review Response";
     }];
     requiresCredential: true;
     sideEffect: true;
  }];
  category: "review";
  channelAudiences: readonly ["customer-facing", "mixed"];
  coverage: {
     evidence: readonly [{
        label: "App Store Connect API overview";
        url: "https://developer.apple.com/documentation/appstoreconnectapi";
      }, {
        label: "App Store Connect OpenAPI specification (openapi.oas.json sha256:352ccca83f6460761bc513b87ed667974afb1347649d49b7cd98cd9041236bec)";
        url: "https://developer.apple.com/sample-code/app-store-connect/app-store-connect-openapi-specification.zip";
      }, {
        label: "App Store Connect JWT tokens";
        url: "https://developer.apple.com/documentation/appstoreconnectapi/generating-tokens-for-api-requests";
      }, {
        label: "Apple App Store Server Node.js Library";
        url: "https://github.com/apple/app-store-server-library-node";
     }];
     notes: readonly ["Cognidesk adapter coverage is scoped to App Store Connect customer review list/read/response workflows.", "No official Apple JavaScript or TypeScript SDK for App Store Connect customer reviews was found on 2026-06-21; this package uses a constrained direct REST support slice with ES256 JWT auth.", "Apple's official @apple/app-store-server-library Node package targets App Store Server APIs, not App Store Connect customer review resources."];
     scope: "support-workflow-subset";
  };
  credentialRequirements: readonly [{
     description: "Issuer ID, key ID, and private key used to mint ES256 JWTs for App Store Connect API calls.";
     id: "appstore-api-key";
     label: "App Store Connect API key";
     required: true;
   }, {
     description: "App Store Connect app resource ID whose customer reviews are visible to the SDK user.";
     id: "appstore-app-id";
     label: "App Store Connect app ID";
     required: true;
   }, {
     description: "SDK-user policy controlling which review replies may be drafted, published, updated, or removed.";
     id: "appstore-review-response-policy";
     label: "Review response policy";
     required: false;
  }];
  directions: readonly ["receive-only", "send-only", "bidirectional"];
  id: "review.appstore";
  limitations: readonly ["The SDK user decides review triage, sentiment classification, public-response approval, localization, escalation, and retention policy.", "Customer review listing is paged by App Store Connect response links; callers should follow `links.next` through the bounded `listReviewsPage` helper.", "Creating a customer review response uses Apple's create-or-update endpoint; SDK-user policy must treat the first public reply and later edits as externally visible actions.", "App Store Connect API availability, rate limits, review visibility, and response moderation are controlled by Apple and the SDK user's account permissions."];
  maintainers: readonly [{
     name: "Cognidesk";
     type: "official";
  }];
  metadata: {
     adapterCoverage: {
        normalizedOperations: readonly ["appstore.reviews.list", "appstore.reviews.page", "appstore.reviews.get", "appstore.reviewResponses.createOrUpdate", "appstore.reviewResponses.delete"];
     };
     implementation: {
        officialJsSdkAvailable: false;
        rawClientExport: "AppStoreReviewsClient.rawClient.request";
        runtimePackage: "@cognidesk/integration-review-appstore/runtime";
        strategy: "direct-http-support-slice";
        verifiedAt: "2026-06-21";
     };
     reviewedSource: {
        archiveChecksum: "sha256:18d2e448db9ebac9f6fb183e786342f67dfaa0c515995d782694a776e26c2dfd";
        artifact: "openapi.oas.json";
        checksum: "sha256:352ccca83f6460761bc513b87ed667974afb1347649d49b7cd98cd9041236bec";
        operationAllowlist: readonly [{
           aliases: readonly ["appstore.reviews.list"];
           clientMethods: readonly ["listReviews"];
           method: "GET";
           path: "/v1/apps/{id}/customerReviews";
         }, {
           aliases: readonly ["appstore.reviews.page"];
           clientMethods: readonly ["listReviewsPage"];
           method: "GET";
           path: "/v1/apps/{id}/customerReviews";
           source: "links.next for the configured app customerReviews collection";
         }, {
           aliases: readonly ["appstore.reviews.get"];
           clientMethods: readonly ["getReview"];
           method: "GET";
           path: "/v1/customerReviews/{id}";
         }, {
           aliases: readonly ["appstore.reviewResponses.createOrUpdate"];
           clientMethods: readonly ["createOrUpdateReviewResponse"];
           method: "POST";
           path: "/v1/customerReviewResponses";
         }, {
           aliases: readonly ["appstore.reviewResponses.delete"];
           clientMethods: readonly ["deleteReviewResponse"];
           method: "DELETE";
           path: "/v1/customerReviewResponses/{id}";
         }, {
           aliases: readonly [];
           clientMethods: readonly ["getApp", "rawClient.request"];
           method: "GET";
           path: "/v1/apps/{id}";
           purpose: "configured app check and reviewed raw-client escape hatch";
        }];
        reviewedAt: "2026-06-21";
        selectedOperations: readonly ["GET /v1/apps/{id}/customerReviews", "GET /v1/customerReviews/{id}", "POST /v1/customerReviewResponses", "DELETE /v1/customerReviewResponses/{id}", "GET /v1/apps/{id}"];
        source: "Apple App Store Connect OpenAPI specification";
        sourceUrl: "https://developer.apple.com/sample-code/app-store-connect/app-store-connect-openapi-specification.zip";
        version: "4.4";
     };
  };
  name: "App Store Reviews";
  operations: readonly [{
     alias: "appstore.reviews.list";
     capability: "search-provider-object";
     exposesSensitiveData: true;
     label: "List App Store reviews";
     providerObject: "appStoreCustomerReview";
     providerOperation: "GET /v1/apps/{id}/customerReviews";
     requiresCredential: true;
   }, {
     alias: "appstore.reviews.page";
     capability: "search-provider-object";
     exposesSensitiveData: true;
     label: "Follow App Store review page";
     providerObject: "appStoreCustomerReview";
     providerOperation: "links.next for /v1/apps/{id}/customerReviews";
     requiresCredential: true;
   }, {
     alias: "appstore.reviews.get";
     capability: "read-provider-object";
     exposesSensitiveData: true;
     label: "Get App Store review";
     providerObject: "appStoreCustomerReview";
     providerOperation: "GET /v1/customerReviews/{id}";
     requiresCredential: true;
   }, {
     alias: "appstore.reviewResponses.createOrUpdate";
     capability: "send";
     exposesSensitiveData: true;
     externallyVisible: true;
     label: "Create or update App Store review response";
     providerObject: "appStoreCustomerReviewResponse";
     providerOperation: "POST /v1/customerReviewResponses";
     requiresApproval: true;
     requiresCredential: true;
     sideEffect: true;
   }, {
     alias: "appstore.reviewResponses.delete";
     capability: "delete-provider-object";
     exposesSensitiveData: true;
     externallyVisible: true;
     label: "Delete App Store review response";
     providerObject: "appStoreCustomerReviewResponse";
     providerOperation: "DELETE /v1/customerReviewResponses/{id}";
     requiresApproval: true;
     requiresCredential: true;
     sideEffect: true;
  }];
  packageName: "@cognidesk/integration-review-appstore";
  privacyNotes: readonly ["App Store review text, ratings, reviewer nicknames, territories, app versions, and public response text can contain customer data.", "App Store Connect private keys stay server-side and are represented in Studio only as readiness state."];
  provider: "appstore";
  trustLevel: "official";
};
```

#### Type Declaration

| Name | Type |
| ------ | ------ |
| <a id="property-capabilities"></a> `capabilities` | readonly \[\{ `audiences`: readonly \[`"customer-facing"`, `"mixed"`\]; `capability`: `"receive"`; `description`: `"Reads App Store Connect customer reviews as support signals for SDK-user-configured review workflows."`; `exposesSensitiveData`: `true`; `label`: `"Read App Store reviews"`; `providerObjects`: readonly \[\{ `kind`: `"appStoreCustomerReview"`; `label`: `"App Store Customer Review"`; \}\]; `requiresCredential`: `true`; \}, \{ `audiences`: readonly \[`"customer-facing"`, `"mixed"`\]; `capability`: `"draft"`; `description`: `"Builds App Store review response payloads for SDK-user approval workflows."`; `exposesSensitiveData`: `true`; `label`: `"Draft review responses"`; `providerObjects`: readonly \[\{ `kind`: `"appStoreReviewResponseDraft"`; `label`: `"App Store Review Response Draft"`; \}\]; \}, \{ `audiences`: readonly \[`"customer-facing"`\]; `capability`: `"send"`; `description`: `"Creates or updates App Store Connect customer review responses when SDK-user policy allows public replies."`; `exposesSensitiveData`: `true`; `label`: `"Publish review responses"`; `providerObjects`: readonly \[\{ `kind`: `"appStoreCustomerReviewResponse"`; `label`: `"App Store Customer Review Response"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `audiences`: readonly \[`"internal-support"`, `"mixed"`\]; `capability`: `"read-provider-object"`; `description`: `"Reads App Store review details, included relationships, and existing response resources."`; `exposesSensitiveData`: `true`; `label`: `"Read review records"`; `providerObjects`: readonly \[\{ `kind`: `"appStoreCustomerReview"`; `label`: `"App Store Customer Review"`; \}\]; `requiresCredential`: `true`; \}, \{ `audiences`: readonly \[`"internal-support"`, `"mixed"`\]; `capability`: `"search-provider-object"`; `description`: `"Lists App Store reviews with SDK-user-selected filters, includes, pagination, sorting, and locale constraints."`; `exposesSensitiveData`: `true`; `label`: `"List and filter reviews"`; `providerObjects`: readonly \[\{ `kind`: `"appStoreCustomerReview"`; `label`: `"App Store Customer Review"`; \}\]; `requiresCredential`: `true`; \}, \{ `audiences`: readonly \[`"internal-support"`, `"mixed"`\]; `capability`: `"delete-provider-object"`; `changesWorkflow`: `true`; `description`: `"Deletes existing App Store customer review responses according to SDK-user approval policy."`; `exposesSensitiveData`: `true`; `label`: `"Delete review responses"`; `providerObjects`: readonly \[\{ `kind`: `"appStoreCustomerReviewResponse"`; `label`: `"App Store Customer Review Response"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}\] |
| <a id="property-category"></a> `category` | `"review"` |
| <a id="property-channelaudiences"></a> `channelAudiences` | readonly \[`"customer-facing"`, `"mixed"`\] |
| <a id="property-coverage"></a> `coverage` | \{ `evidence`: readonly \[\{ `label`: `"App Store Connect API overview"`; `url`: `"https://developer.apple.com/documentation/appstoreconnectapi"`; \}, \{ `label`: `"App Store Connect OpenAPI specification (openapi.oas.json sha256:352ccca83f6460761bc513b87ed667974afb1347649d49b7cd98cd9041236bec)"`; `url`: `"https://developer.apple.com/sample-code/app-store-connect/app-store-connect-openapi-specification.zip"`; \}, \{ `label`: `"App Store Connect JWT tokens"`; `url`: `"https://developer.apple.com/documentation/appstoreconnectapi/generating-tokens-for-api-requests"`; \}, \{ `label`: `"Apple App Store Server Node.js Library"`; `url`: `"https://github.com/apple/app-store-server-library-node"`; \}\]; `notes`: readonly \[`"Cognidesk adapter coverage is scoped to App Store Connect customer review list/read/response workflows."`, `"No official Apple JavaScript or TypeScript SDK for App Store Connect customer reviews was found on 2026-06-21; this package uses a constrained direct REST support slice with ES256 JWT auth."`, `"Apple's official @apple/app-store-server-library Node package targets App Store Server APIs, not App Store Connect customer review resources."`\]; `scope`: `"support-workflow-subset"`; \} |
| `coverage.evidence` | readonly \[\{ `label`: `"App Store Connect API overview"`; `url`: `"https://developer.apple.com/documentation/appstoreconnectapi"`; \}, \{ `label`: `"App Store Connect OpenAPI specification (openapi.oas.json sha256:352ccca83f6460761bc513b87ed667974afb1347649d49b7cd98cd9041236bec)"`; `url`: `"https://developer.apple.com/sample-code/app-store-connect/app-store-connect-openapi-specification.zip"`; \}, \{ `label`: `"App Store Connect JWT tokens"`; `url`: `"https://developer.apple.com/documentation/appstoreconnectapi/generating-tokens-for-api-requests"`; \}, \{ `label`: `"Apple App Store Server Node.js Library"`; `url`: `"https://github.com/apple/app-store-server-library-node"`; \}\] |
| `coverage.notes` | readonly \[`"Cognidesk adapter coverage is scoped to App Store Connect customer review list/read/response workflows."`, `"No official Apple JavaScript or TypeScript SDK for App Store Connect customer reviews was found on 2026-06-21; this package uses a constrained direct REST support slice with ES256 JWT auth."`, `"Apple's official @apple/app-store-server-library Node package targets App Store Server APIs, not App Store Connect customer review resources."`\] |
| `coverage.scope` | `"support-workflow-subset"` |
| <a id="property-credentialrequirements"></a> `credentialRequirements` | readonly \[\{ `description`: `"Issuer ID, key ID, and private key used to mint ES256 JWTs for App Store Connect API calls."`; `id`: `"appstore-api-key"`; `label`: `"App Store Connect API key"`; `required`: `true`; \}, \{ `description`: `"App Store Connect app resource ID whose customer reviews are visible to the SDK user."`; `id`: `"appstore-app-id"`; `label`: `"App Store Connect app ID"`; `required`: `true`; \}, \{ `description`: `"SDK-user policy controlling which review replies may be drafted, published, updated, or removed."`; `id`: `"appstore-review-response-policy"`; `label`: `"Review response policy"`; `required`: `false`; \}\] |
| <a id="property-directions"></a> `directions` | readonly \[`"receive-only"`, `"send-only"`, `"bidirectional"`\] |
| <a id="property-id"></a> `id` | `"review.appstore"` |
| <a id="property-limitations"></a> `limitations` | readonly \[`"The SDK user decides review triage, sentiment classification, public-response approval, localization, escalation, and retention policy."`, `` "Customer review listing is paged by App Store Connect response links; callers should follow `links.next` through the bounded `listReviewsPage` helper." ``, `"Creating a customer review response uses Apple's create-or-update endpoint; SDK-user policy must treat the first public reply and later edits as externally visible actions."`, `"App Store Connect API availability, rate limits, review visibility, and response moderation are controlled by Apple and the SDK user's account permissions."`\] |
| <a id="property-maintainers"></a> `maintainers` | readonly \[\{ `name`: `"Cognidesk"`; `type`: `"official"`; \}\] |
| <a id="property-metadata"></a> `metadata` | \{ `adapterCoverage`: \{ `normalizedOperations`: readonly \[`"appstore.reviews.list"`, `"appstore.reviews.page"`, `"appstore.reviews.get"`, `"appstore.reviewResponses.createOrUpdate"`, `"appstore.reviewResponses.delete"`\]; \}; `implementation`: \{ `officialJsSdkAvailable`: `false`; `rawClientExport`: `"AppStoreReviewsClient.rawClient.request"`; `runtimePackage`: `"@cognidesk/integration-review-appstore/runtime"`; `strategy`: `"direct-http-support-slice"`; `verifiedAt`: `"2026-06-21"`; \}; `reviewedSource`: \{ `archiveChecksum`: `"sha256:18d2e448db9ebac9f6fb183e786342f67dfaa0c515995d782694a776e26c2dfd"`; `artifact`: `"openapi.oas.json"`; `checksum`: `"sha256:352ccca83f6460761bc513b87ed667974afb1347649d49b7cd98cd9041236bec"`; `operationAllowlist`: readonly \[\{ `aliases`: readonly \[`"appstore.reviews.list"`\]; `clientMethods`: readonly \[`"listReviews"`\]; `method`: `"GET"`; `path`: `"/v1/apps/{id}/customerReviews"`; \}, \{ `aliases`: readonly \[`"appstore.reviews.page"`\]; `clientMethods`: readonly \[`"listReviewsPage"`\]; `method`: `"GET"`; `path`: `"/v1/apps/{id}/customerReviews"`; `source`: `"links.next for the configured app customerReviews collection"`; \}, \{ `aliases`: readonly \[`"appstore.reviews.get"`\]; `clientMethods`: readonly \[`"getReview"`\]; `method`: `"GET"`; `path`: `"/v1/customerReviews/{id}"`; \}, \{ `aliases`: readonly \[`"appstore.reviewResponses.createOrUpdate"`\]; `clientMethods`: readonly \[`"createOrUpdateReviewResponse"`\]; `method`: `"POST"`; `path`: `"/v1/customerReviewResponses"`; \}, \{ `aliases`: readonly \[`"appstore.reviewResponses.delete"`\]; `clientMethods`: readonly \[`"deleteReviewResponse"`\]; `method`: `"DELETE"`; `path`: `"/v1/customerReviewResponses/{id}"`; \}, \{ `aliases`: readonly \[\]; `clientMethods`: readonly \[`"getApp"`, `"rawClient.request"`\]; `method`: `"GET"`; `path`: `"/v1/apps/{id}"`; `purpose`: `"configured app check and reviewed raw-client escape hatch"`; \}\]; `reviewedAt`: `"2026-06-21"`; `selectedOperations`: readonly \[`"GET /v1/apps/{id}/customerReviews"`, `"GET /v1/customerReviews/{id}"`, `"POST /v1/customerReviewResponses"`, `"DELETE /v1/customerReviewResponses/{id}"`, `"GET /v1/apps/{id}"`\]; `source`: `"Apple App Store Connect OpenAPI specification"`; `sourceUrl`: `"https://developer.apple.com/sample-code/app-store-connect/app-store-connect-openapi-specification.zip"`; `version`: `"4.4"`; \}; \} |
| `metadata.adapterCoverage` | \{ `normalizedOperations`: readonly \[`"appstore.reviews.list"`, `"appstore.reviews.page"`, `"appstore.reviews.get"`, `"appstore.reviewResponses.createOrUpdate"`, `"appstore.reviewResponses.delete"`\]; \} |
| `metadata.adapterCoverage.normalizedOperations` | readonly \[`"appstore.reviews.list"`, `"appstore.reviews.page"`, `"appstore.reviews.get"`, `"appstore.reviewResponses.createOrUpdate"`, `"appstore.reviewResponses.delete"`\] |
| `metadata.implementation` | \{ `officialJsSdkAvailable`: `false`; `rawClientExport`: `"AppStoreReviewsClient.rawClient.request"`; `runtimePackage`: `"@cognidesk/integration-review-appstore/runtime"`; `strategy`: `"direct-http-support-slice"`; `verifiedAt`: `"2026-06-21"`; \} |
| `metadata.implementation.officialJsSdkAvailable` | `false` |
| `metadata.implementation.rawClientExport` | `"AppStoreReviewsClient.rawClient.request"` |
| `metadata.implementation.runtimePackage` | `"@cognidesk/integration-review-appstore/runtime"` |
| `metadata.implementation.strategy` | `"direct-http-support-slice"` |
| `metadata.implementation.verifiedAt` | `"2026-06-21"` |
| `metadata.reviewedSource` | \{ `archiveChecksum`: `"sha256:18d2e448db9ebac9f6fb183e786342f67dfaa0c515995d782694a776e26c2dfd"`; `artifact`: `"openapi.oas.json"`; `checksum`: `"sha256:352ccca83f6460761bc513b87ed667974afb1347649d49b7cd98cd9041236bec"`; `operationAllowlist`: readonly \[\{ `aliases`: readonly \[`"appstore.reviews.list"`\]; `clientMethods`: readonly \[`"listReviews"`\]; `method`: `"GET"`; `path`: `"/v1/apps/{id}/customerReviews"`; \}, \{ `aliases`: readonly \[`"appstore.reviews.page"`\]; `clientMethods`: readonly \[`"listReviewsPage"`\]; `method`: `"GET"`; `path`: `"/v1/apps/{id}/customerReviews"`; `source`: `"links.next for the configured app customerReviews collection"`; \}, \{ `aliases`: readonly \[`"appstore.reviews.get"`\]; `clientMethods`: readonly \[`"getReview"`\]; `method`: `"GET"`; `path`: `"/v1/customerReviews/{id}"`; \}, \{ `aliases`: readonly \[`"appstore.reviewResponses.createOrUpdate"`\]; `clientMethods`: readonly \[`"createOrUpdateReviewResponse"`\]; `method`: `"POST"`; `path`: `"/v1/customerReviewResponses"`; \}, \{ `aliases`: readonly \[`"appstore.reviewResponses.delete"`\]; `clientMethods`: readonly \[`"deleteReviewResponse"`\]; `method`: `"DELETE"`; `path`: `"/v1/customerReviewResponses/{id}"`; \}, \{ `aliases`: readonly \[\]; `clientMethods`: readonly \[`"getApp"`, `"rawClient.request"`\]; `method`: `"GET"`; `path`: `"/v1/apps/{id}"`; `purpose`: `"configured app check and reviewed raw-client escape hatch"`; \}\]; `reviewedAt`: `"2026-06-21"`; `selectedOperations`: readonly \[`"GET /v1/apps/{id}/customerReviews"`, `"GET /v1/customerReviews/{id}"`, `"POST /v1/customerReviewResponses"`, `"DELETE /v1/customerReviewResponses/{id}"`, `"GET /v1/apps/{id}"`\]; `source`: `"Apple App Store Connect OpenAPI specification"`; `sourceUrl`: `"https://developer.apple.com/sample-code/app-store-connect/app-store-connect-openapi-specification.zip"`; `version`: `"4.4"`; \} |
| `metadata.reviewedSource.archiveChecksum` | `"sha256:18d2e448db9ebac9f6fb183e786342f67dfaa0c515995d782694a776e26c2dfd"` |
| `metadata.reviewedSource.artifact` | `"openapi.oas.json"` |
| `metadata.reviewedSource.checksum` | `"sha256:352ccca83f6460761bc513b87ed667974afb1347649d49b7cd98cd9041236bec"` |
| `metadata.reviewedSource.operationAllowlist` | readonly \[\{ `aliases`: readonly \[`"appstore.reviews.list"`\]; `clientMethods`: readonly \[`"listReviews"`\]; `method`: `"GET"`; `path`: `"/v1/apps/{id}/customerReviews"`; \}, \{ `aliases`: readonly \[`"appstore.reviews.page"`\]; `clientMethods`: readonly \[`"listReviewsPage"`\]; `method`: `"GET"`; `path`: `"/v1/apps/{id}/customerReviews"`; `source`: `"links.next for the configured app customerReviews collection"`; \}, \{ `aliases`: readonly \[`"appstore.reviews.get"`\]; `clientMethods`: readonly \[`"getReview"`\]; `method`: `"GET"`; `path`: `"/v1/customerReviews/{id}"`; \}, \{ `aliases`: readonly \[`"appstore.reviewResponses.createOrUpdate"`\]; `clientMethods`: readonly \[`"createOrUpdateReviewResponse"`\]; `method`: `"POST"`; `path`: `"/v1/customerReviewResponses"`; \}, \{ `aliases`: readonly \[`"appstore.reviewResponses.delete"`\]; `clientMethods`: readonly \[`"deleteReviewResponse"`\]; `method`: `"DELETE"`; `path`: `"/v1/customerReviewResponses/{id}"`; \}, \{ `aliases`: readonly \[\]; `clientMethods`: readonly \[`"getApp"`, `"rawClient.request"`\]; `method`: `"GET"`; `path`: `"/v1/apps/{id}"`; `purpose`: `"configured app check and reviewed raw-client escape hatch"`; \}\] |
| `metadata.reviewedSource.reviewedAt` | `"2026-06-21"` |
| `metadata.reviewedSource.selectedOperations` | readonly \[`"GET /v1/apps/{id}/customerReviews"`, `"GET /v1/customerReviews/{id}"`, `"POST /v1/customerReviewResponses"`, `"DELETE /v1/customerReviewResponses/{id}"`, `"GET /v1/apps/{id}"`\] |
| `metadata.reviewedSource.source` | `"Apple App Store Connect OpenAPI specification"` |
| `metadata.reviewedSource.sourceUrl` | `"https://developer.apple.com/sample-code/app-store-connect/app-store-connect-openapi-specification.zip"` |
| `metadata.reviewedSource.version` | `"4.4"` |
| <a id="property-name"></a> `name` | `"App Store Reviews"` |
| <a id="property-operations"></a> `operations` | readonly \[\{ `alias`: `"appstore.reviews.list"`; `capability`: `"search-provider-object"`; `exposesSensitiveData`: `true`; `label`: `"List App Store reviews"`; `providerObject`: `"appStoreCustomerReview"`; `providerOperation`: `"GET /v1/apps/{id}/customerReviews"`; `requiresCredential`: `true`; \}, \{ `alias`: `"appstore.reviews.page"`; `capability`: `"search-provider-object"`; `exposesSensitiveData`: `true`; `label`: `"Follow App Store review page"`; `providerObject`: `"appStoreCustomerReview"`; `providerOperation`: `"links.next for /v1/apps/{id}/customerReviews"`; `requiresCredential`: `true`; \}, \{ `alias`: `"appstore.reviews.get"`; `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `label`: `"Get App Store review"`; `providerObject`: `"appStoreCustomerReview"`; `providerOperation`: `"GET /v1/customerReviews/{id}"`; `requiresCredential`: `true`; \}, \{ `alias`: `"appstore.reviewResponses.createOrUpdate"`; `capability`: `"send"`; `exposesSensitiveData`: `true`; `externallyVisible`: `true`; `label`: `"Create or update App Store review response"`; `providerObject`: `"appStoreCustomerReviewResponse"`; `providerOperation`: `"POST /v1/customerReviewResponses"`; `requiresApproval`: `true`; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `alias`: `"appstore.reviewResponses.delete"`; `capability`: `"delete-provider-object"`; `exposesSensitiveData`: `true`; `externallyVisible`: `true`; `label`: `"Delete App Store review response"`; `providerObject`: `"appStoreCustomerReviewResponse"`; `providerOperation`: `"DELETE /v1/customerReviewResponses/{id}"`; `requiresApproval`: `true`; `requiresCredential`: `true`; `sideEffect`: `true`; \}\] |
| <a id="property-packagename"></a> `packageName` | `"@cognidesk/integration-review-appstore"` |
| <a id="property-privacynotes"></a> `privacyNotes` | readonly \[`"App Store review text, ratings, reviewer nicknames, territories, app versions, and public response text can contain customer data."`, `"App Store Connect private keys stay server-side and are represented in Studio only as readiness state."`\] |
| <a id="property-provider"></a> `provider` | `"appstore"` |
| <a id="property-trustlevel"></a> `trustLevel` | `"official"` |
