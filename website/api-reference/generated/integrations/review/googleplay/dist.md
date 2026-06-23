# integrations/review/googleplay/dist

## Interfaces

### GooglePlayReviewReplyInput

#### Properties

##### packageName?

```ts
optional packageName?: string;
```

##### replyText

```ts
replyText: string;
```

***

### GooglePlayReviewsClient

#### Properties

##### rawClient

```ts
rawClient: Pick<GooglePlayAndroidPublisherClient, "reviews">;
```

#### Methods

##### getReview()

```ts
getReview(reviewId, input?): Promise<Schema$Review>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `reviewId` | `string` |
| `input?` | [`GooglePlayReviewsGetInput`](#googleplayreviewsgetinput) |

###### Returns

`Promise`\<`Schema$Review`\>

##### listReviews()

```ts
listReviews(input?): Promise<Schema$ReviewsListResponse>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input?` | [`GooglePlayReviewsListInput`](#googleplayreviewslistinput) |

###### Returns

`Promise`\<`Schema$ReviewsListResponse`\>

##### replyToReview()

```ts
replyToReview(reviewId, input): Promise<Schema$ReviewsReplyResponse>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `reviewId` | `string` |
| `input` | [`GooglePlayReviewReplyInput`](#googleplayreviewreplyinput) |

###### Returns

`Promise`\<`Schema$ReviewsReplyResponse`\>

***

### GooglePlayReviewsClientOptions

#### Extended by

- [`GooglePlayReviewsLiveCheckOptions`](#googleplayreviewslivecheckoptions)

#### Properties

##### accessToken?

```ts
optional accessToken?: string;
```

##### auth?

```ts
optional auth?: GooglePlaySdkAuth;
```

##### getAccessToken?

```ts
optional getAccessToken?: () => string | Promise<string>;
```

###### Returns

`string` \| `Promise`\<`string`\>

##### packageName

```ts
packageName: string;
```

##### rawClient?

```ts
optional rawClient?: Pick<GooglePlayAndroidPublisherClient, "reviews">;
```

##### scopes?

```ts
optional scopes?: string[];
```

##### serviceAccount?

```ts
optional serviceAccount?: GooglePlayServiceAccountCredentials;
```

***

### GooglePlayReviewsCredentialStatusInput

#### Properties

##### accessTokenConfigured?

```ts
optional accessTokenConfigured?: boolean;
```

##### expiresAt?

```ts
optional expiresAt?: string;
```

##### packageName?

```ts
optional packageName?: string;
```

##### scopes?

```ts
optional scopes?: string[];
```

##### serviceAccountConfigured?

```ts
optional serviceAccountConfigured?: boolean;
```

##### tokenSupplierConfigured?

```ts
optional tokenSupplierConfigured?: boolean;
```

***

### GooglePlayReviewsGetInput

#### Properties

##### packageName?

```ts
optional packageName?: string;
```

##### translationLanguage?

```ts
optional translationLanguage?: string;
```

***

### GooglePlayReviewsListInput

#### Properties

##### maxResults?

```ts
optional maxResults?: number;
```

##### packageName?

```ts
optional packageName?: string;
```

##### startIndex?

```ts
optional startIndex?: number;
```

##### token?

```ts
optional token?: string;
```

##### translationLanguage?

```ts
optional translationLanguage?: string;
```

***

### GooglePlayReviewsLiveCheckOptions

#### Extends

- [`GooglePlayReviewsClientOptions`](#googleplayreviewsclientoptions)

#### Properties

##### accessToken?

```ts
optional accessToken?: string;
```

###### Inherited from

[`GooglePlayReviewsClientOptions`](#googleplayreviewsclientoptions).[`accessToken`](#accesstoken)

##### auth?

```ts
optional auth?: GooglePlaySdkAuth;
```

###### Inherited from

[`GooglePlayReviewsClientOptions`](#googleplayreviewsclientoptions).[`auth`](#auth)

##### client?

```ts
optional client?: Pick<GooglePlayReviewsClient, "listReviews">;
```

##### getAccessToken?

```ts
optional getAccessToken?: () => string | Promise<string>;
```

###### Returns

`string` \| `Promise`\<`string`\>

###### Inherited from

[`GooglePlayReviewsClientOptions`](#googleplayreviewsclientoptions).[`getAccessToken`](#getaccesstoken)

##### packageName

```ts
packageName: string;
```

###### Inherited from

[`GooglePlayReviewsClientOptions`](#googleplayreviewsclientoptions).[`packageName`](#packagename-1)

##### rawClient?

```ts
optional rawClient?: Pick<GooglePlayAndroidPublisherClient, "reviews">;
```

###### Inherited from

[`GooglePlayReviewsClientOptions`](#googleplayreviewsclientoptions).[`rawClient`](#rawclient-1)

##### scopes?

```ts
optional scopes?: string[];
```

###### Inherited from

[`GooglePlayReviewsClientOptions`](#googleplayreviewsclientoptions).[`scopes`](#scopes)

##### serviceAccount?

```ts
optional serviceAccount?: GooglePlayServiceAccountCredentials;
```

###### Inherited from

[`GooglePlayReviewsClientOptions`](#googleplayreviewsclientoptions).[`serviceAccount`](#serviceaccount)

***

### GooglePlayServiceAccountCredentials

#### Properties

##### clientEmail

```ts
clientEmail: string;
```

##### privateKey

```ts
privateKey: string;
```

##### privateKeyId?

```ts
optional privateKeyId?: string;
```

##### scopes?

```ts
optional scopes?: string[];
```

##### subject?

```ts
optional subject?: string;
```

## Type Aliases

### GooglePlayAndroidPublisherClient

```ts
type GooglePlayAndroidPublisherClient = androidpublisher_v3.Androidpublisher;
```

***

### GooglePlayReview

```ts
type GooglePlayReview = androidpublisher_v3.Schema$Review;
```

***

### GooglePlayReviewReplyResponse

```ts
type GooglePlayReviewReplyResponse = androidpublisher_v3.Schema$ReviewsReplyResponse;
```

***

### GooglePlayReviewsListResponse

```ts
type GooglePlayReviewsListResponse = androidpublisher_v3.Schema$ReviewsListResponse;
```

***

### GooglePlaySdkAuth

```ts
type GooglePlaySdkAuth = Exclude<NonNullable<androidpublisher_v3.Params$Resource$Reviews$List["auth"]>, string>;
```

## Variables

### googlePlayReviewsIntegration

```ts
const googlePlayReviewsIntegration: DefinedIntegration<{
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
}, unknown, never>;
```

## Functions

### createGooglePlayReviewsClient()

```ts
function createGooglePlayReviewsClient(options): GooglePlayReviewsClient;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`GooglePlayReviewsClientOptions`](#googleplayreviewsclientoptions) |

#### Returns

[`GooglePlayReviewsClient`](#googleplayreviewsclient)

***

### createGooglePlayReviewsLiveChecks()

```ts
function createGooglePlayReviewsLiveChecks(options): {
  description: string;
  id: string;
  requiredCredentialIds: string[];
  run: Promise<{
     details: {
        hasNextPage: boolean;
        reviewCount: number;
     };
  }>;
}[];
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`GooglePlayReviewsLiveCheckOptions`](#googleplayreviewslivecheckoptions) |

#### Returns

\{
  `description`: `string`;
  `id`: `string`;
  `requiredCredentialIds`: `string`[];
  `run`: `Promise`\<\{
     `details`: \{
        `hasNextPage`: `boolean`;
        `reviewCount`: `number`;
     \};
  \}\>;
\}[]

***

### googlePlayReviewsCredentialStatuses()

```ts
function googlePlayReviewsCredentialStatuses(input): {
  expiresAt?: string;
  message?: string;
  providerPackageId?: string;
  requirementId: string;
  scopes?: string[];
  state:   | "required"
     | "configured"
     | "permission-blocked"
     | "not-required"
     | "missing"
     | "expired"
     | "insufficient-scope"
     | "unavailable";
}[];
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`GooglePlayReviewsCredentialStatusInput`](#googleplayreviewscredentialstatusinput) |

#### Returns

\{
  `expiresAt?`: `string`;
  `message?`: `string`;
  `providerPackageId?`: `string`;
  `requirementId`: `string`;
  `scopes?`: `string`[];
  `state`:   \| `"required"`
     \| `"configured"`
     \| `"permission-blocked"`
     \| `"not-required"`
     \| `"missing"`
     \| `"expired"`
     \| `"insufficient-scope"`
     \| `"unavailable"`;
\}[]

## References

### googlePlayReviewsProviderManifest

Re-exports [googlePlayReviewsProviderManifest](dist/manifest.md#googleplayreviewsprovidermanifest)

***

### googlePlayReviewsProviderManifestInput

Re-exports [googlePlayReviewsProviderManifestInput](dist/manifest.md#googleplayreviewsprovidermanifestinput)
