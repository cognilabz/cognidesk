# integrations/review/appstore/dist

## Interfaces

### AppStoreAppAttributes

#### Indexable

```ts
[providerField: string]: AppStoreReviewsProviderExtensionValue
```

#### Properties

##### bundleId?

```ts
optional bundleId?: string;
```

##### name?

```ts
optional name?: string;
```

##### primaryLocale?

```ts
optional primaryLocale?: string;
```

##### sku?

```ts
optional sku?: string;
```

***

### AppStoreCredentialStatusInput

#### Properties

##### appId?

```ts
optional appId?: string;
```

##### expiresAt?

```ts
optional expiresAt?: string;
```

##### issuerId?

```ts
optional issuerId?: string;
```

##### keyId?

```ts
optional keyId?: string;
```

##### privateKeyConfigured?

```ts
optional privateKeyConfigured?: boolean;
```

##### responsePolicyConfigured?

```ts
optional responsePolicyConfigured?: boolean;
```

***

### AppStoreCustomerReviewAttributes

#### Indexable

```ts
[providerField: string]: AppStoreReviewsProviderExtensionValue
```

#### Properties

##### appVersionString?

```ts
optional appVersionString?: string;
```

##### body?

```ts
optional body?: string;
```

##### createdDate?

```ts
optional createdDate?: string;
```

##### rating?

```ts
optional rating?: number;
```

##### reviewerNickname?

```ts
optional reviewerNickname?: string;
```

##### territory?

```ts
optional territory?: string;
```

##### title?

```ts
optional title?: string;
```

***

### AppStoreCustomerReviewRelationships

#### Indexable

```ts
[providerField: string]: AppStoreReviewsProviderExtensionValue
```

#### Properties

##### response?

```ts
optional response?: {
  data?: AppStoreRelationshipData<"customerReviewResponses">;
  links?: AppStoreRelationshipLinks;
};
```

###### data?

```ts
optional data?: AppStoreRelationshipData<"customerReviewResponses">;
```

###### links?

```ts
optional links?: AppStoreRelationshipLinks;
```

***

### AppStoreCustomerReviewResponseAttributes

#### Indexable

```ts
[providerField: string]: AppStoreReviewsProviderExtensionValue
```

#### Properties

##### lastModifiedDate?

```ts
optional lastModifiedDate?: string;
```

##### responseBody?

```ts
optional responseBody?: string;
```

##### state?

```ts
optional state?: string;
```

***

### AppStoreCustomerReviewResponseRelationships

#### Indexable

```ts
[providerField: string]: AppStoreReviewsProviderExtensionValue
```

#### Properties

##### review?

```ts
optional review?: {
  data?: AppStoreRelationshipData<"customerReviews">;
  links?: AppStoreRelationshipLinks;
};
```

###### data?

```ts
optional data?: AppStoreRelationshipData<"customerReviews">;
```

###### links?

```ts
optional links?: AppStoreRelationshipLinks;
```

***

### AppStoreJsonApiResource

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TType` *extends* `string` | `string` |
| `TAttributes` *extends* `object` | [`AppStoreReviewsJsonObject`](#appstorereviewsjsonobject) |
| `TRelationships` *extends* `object` | [`AppStoreReviewsJsonObject`](#appstorereviewsjsonobject) |

#### Properties

##### attributes?

```ts
optional attributes?: TAttributes;
```

##### id

```ts
id: string;
```

##### links?

```ts
optional links?: {
  self?: string;
} & AppStoreReviewsJsonObject;
```

###### Type Declaration

###### self?

```ts
optional self?: string;
```

##### relationships?

```ts
optional relationships?: TRelationships;
```

##### type

```ts
type: TType;
```

***

### AppStoreJwtOptions

#### Properties

##### audience?

```ts
optional audience?: string;
```

##### issuerId

```ts
issuerId: string;
```

##### jti?

```ts
optional jti?: string;
```

##### keyId

```ts
keyId: string;
```

##### now?

```ts
optional now?: () => number;
```

###### Returns

`number`

##### privateKey

```ts
privateKey: string;
```

##### ttlSeconds?

```ts
optional ttlSeconds?: number;
```

***

### AppStoreListReviewsInput

#### Properties

##### cursor?

```ts
optional cursor?: string;
```

##### fields?

```ts
optional fields?: Partial<Record<AppStoreReviewFieldResource, string[]>>;
```

##### filter?

```ts
optional filter?: Partial<Record<AppStoreReviewFilter, string | string[]>>;
```

##### include?

```ts
optional include?: AppStoreReviewInclude[];
```

##### limit?

```ts
optional limit?: number;
```

##### sort?

```ts
optional sort?:
  | string & {
}
  | "createdDate"
  | "-createdDate"
  | "rating"
  | "-rating";
```

***

### AppStoreLiveCheckOptions

#### Extends

- [`AppStoreReviewsClientOptions`](#appstorereviewsclientoptions)

#### Properties

##### apiBaseUrl?

```ts
optional apiBaseUrl?: string;
```

###### Inherited from

[`AppStoreReviewsClientOptions`](#appstorereviewsclientoptions).[`apiBaseUrl`](#apibaseurl-1)

##### appId

```ts
appId: string;
```

###### Inherited from

[`AppStoreReviewsClientOptions`](#appstorereviewsclientoptions).[`appId`](#appid-2)

##### client?

```ts
optional client?: Pick<AppStoreReviewsClient, "getApp">;
```

##### fetch?

```ts
optional fetch?: {
  (input, init?): Promise<Response>;
  (input, init?): Promise<Response>;
};
```

###### Call Signature

```ts
(input, init?): Promise<Response>;
```

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/fetch)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | `URL` \| `RequestInfo` |
| `init?` | `RequestInit` |

###### Returns

`Promise`\<`Response`\>

###### Call Signature

```ts
(input, init?): Promise<Response>;
```

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/fetch)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | `string` \| `Request` \| `URL` |
| `init?` | `RequestInit` |

###### Returns

`Promise`\<`Response`\>

###### Inherited from

[`AppStoreReviewsClientOptions`](#appstorereviewsclientoptions).[`fetch`](#fetch-1)

##### issuerId

```ts
issuerId: string;
```

###### Inherited from

[`AppStoreReviewsClientOptions`](#appstorereviewsclientoptions).[`issuerId`](#issuerid-3)

##### jwtFactory?

```ts
optional jwtFactory?: () => string | Promise<string>;
```

###### Returns

`string` \| `Promise`\<`string`\>

###### Inherited from

[`AppStoreReviewsClientOptions`](#appstorereviewsclientoptions).[`jwtFactory`](#jwtfactory-1)

##### keyId

```ts
keyId: string;
```

###### Inherited from

[`AppStoreReviewsClientOptions`](#appstorereviewsclientoptions).[`keyId`](#keyid-3)

##### privateKey?

```ts
optional privateKey?: string;
```

###### Inherited from

[`AppStoreReviewsClientOptions`](#appstorereviewsclientoptions).[`privateKey`](#privatekey-2)

***

### AppStorePagedDocumentLinks

#### Properties

##### first?

```ts
optional first?: string;
```

##### next?

```ts
optional next?: string;
```

##### self?

```ts
optional self?: string;
```

***

### AppStoreRawRequestInput

#### Properties

##### body?

```ts
optional body?: AppStoreReviewsProviderPayload;
```

##### method

```ts
method: AppStoreHttpMethod;
```

##### path

```ts
path: string;
```

##### query?

```ts
optional query?: AppStoreReviewsProviderQuery;
```

***

### AppStoreRelationshipData

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TType` *extends* `string` | `string` |

#### Properties

##### id

```ts
id: string;
```

##### type

```ts
type: TType;
```

***

### AppStoreRelationshipLinks

#### Properties

##### related?

```ts
optional related?: string;
```

##### self?

```ts
optional self?: string;
```

***

### AppStoreResourceDocument

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TData` *extends* [`AppStoreReviewsProviderExtensionValue`](#appstorereviewsproviderextensionvalue) | \| [`AppStoreJsonApiResource`](#appstorejsonapiresource) \| [`AppStoreJsonApiResource`](#appstorejsonapiresource)[] \| `undefined` |
| `TIncluded` *extends* [`AppStoreReviewsProviderExtensionValue`](#appstorereviewsproviderextensionvalue) | [`AppStoreJsonApiResource`](#appstorejsonapiresource) |

#### Indexable

```ts
[providerField: string]: AppStoreReviewsProviderExtensionValue
```

#### Properties

##### data?

```ts
optional data?: TData;
```

##### included?

```ts
optional included?: TIncluded[];
```

##### links?

```ts
optional links?: AppStorePagedDocumentLinks & AppStoreReviewsJsonObject;
```

##### meta?

```ts
optional meta?: AppStoreReviewsJsonObject;
```

***

### AppStoreReviewResponseInput

#### Properties

##### responseBody

```ts
responseBody: string;
```

##### reviewId

```ts
reviewId: string;
```

***

### AppStoreReviewsClient

#### Properties

##### rawClient

```ts
rawClient: {
  request: Promise<T>;
};
```

###### request()

```ts
request<T>(input): Promise<T>;
```

###### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | [`AppStoreReviewsJsonObject`](#appstorereviewsjsonobject) |

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`AppStoreRawRequestInput`](#appstorerawrequestinput) |

###### Returns

`Promise`\<`T`\>

#### Methods

##### createOrUpdateReviewResponse()

```ts
createOrUpdateReviewResponse(input): Promise<AppStoreCustomerReviewResponseDocument>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`AppStoreReviewResponseInput`](#appstorereviewresponseinput) |

###### Returns

`Promise`\<[`AppStoreCustomerReviewResponseDocument`](#appstorecustomerreviewresponsedocument)\>

##### deleteReviewResponse()

```ts
deleteReviewResponse(responseId): Promise<void>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `responseId` | `string` |

###### Returns

`Promise`\<`void`\>

##### getApp()

```ts
getApp(): Promise<AppStoreAppResponse>;
```

###### Returns

`Promise`\<[`AppStoreAppResponse`](#appstoreappresponse)\>

##### getReview()

```ts
getReview(reviewId, input?): Promise<AppStoreReviewResponse>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `reviewId` | `string` |
| `input?` | `Pick`\<[`AppStoreListReviewsInput`](#appstorelistreviewsinput), `"include"` \| `"fields"`\> |

###### Returns

`Promise`\<[`AppStoreReviewResponse`](#appstorereviewresponse)\>

##### listReviews()

```ts
listReviews(input?): Promise<AppStoreReviewsListResponse>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input?` | [`AppStoreListReviewsInput`](#appstorelistreviewsinput) |

###### Returns

`Promise`\<[`AppStoreReviewsListResponse`](#appstorereviewslistresponse)\>

##### listReviewsPage()

```ts
listReviewsPage(pageUrl): Promise<AppStoreReviewsListResponse>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `pageUrl` | `string` |

###### Returns

`Promise`\<[`AppStoreReviewsListResponse`](#appstorereviewslistresponse)\>

***

### AppStoreReviewsClientOptions

#### Extended by

- [`AppStoreLiveCheckOptions`](#appstorelivecheckoptions)

#### Properties

##### apiBaseUrl?

```ts
optional apiBaseUrl?: string;
```

##### appId

```ts
appId: string;
```

##### fetch?

```ts
optional fetch?: {
  (input, init?): Promise<Response>;
  (input, init?): Promise<Response>;
};
```

###### Call Signature

```ts
(input, init?): Promise<Response>;
```

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/fetch)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | `URL` \| `RequestInfo` |
| `init?` | `RequestInit` |

###### Returns

`Promise`\<`Response`\>

###### Call Signature

```ts
(input, init?): Promise<Response>;
```

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/fetch)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | `string` \| `Request` \| `URL` |
| `init?` | `RequestInit` |

###### Returns

`Promise`\<`Response`\>

##### issuerId

```ts
issuerId: string;
```

##### jwtFactory?

```ts
optional jwtFactory?: () => string | Promise<string>;
```

###### Returns

`string` \| `Promise`\<`string`\>

##### keyId

```ts
keyId: string;
```

##### privateKey?

```ts
optional privateKey?: string;
```

***

### AppStoreReviewsJsonObject

#### Indexable

```ts
[key: string]: AppStoreReviewsProviderExtensionValue
```

## Type Aliases

### AppStoreAppResource

```ts
type AppStoreAppResource = AppStoreJsonApiResource<"apps", AppStoreAppAttributes>;
```

***

### AppStoreAppResponse

```ts
type AppStoreAppResponse = AppStoreResourceDocument<AppStoreAppResource>;
```

***

### AppStoreCustomerReviewResource

```ts
type AppStoreCustomerReviewResource = AppStoreJsonApiResource<"customerReviews", AppStoreCustomerReviewAttributes, AppStoreCustomerReviewRelationships>;
```

***

### AppStoreCustomerReviewResponseDocument

```ts
type AppStoreCustomerReviewResponseDocument = AppStoreResourceDocument<AppStoreCustomerReviewResponseResource>;
```

***

### AppStoreCustomerReviewResponseResource

```ts
type AppStoreCustomerReviewResponseResource = AppStoreJsonApiResource<"customerReviewResponses", AppStoreCustomerReviewResponseAttributes, AppStoreCustomerReviewResponseRelationships>;
```

***

### AppStoreHttpMethod

```ts
type AppStoreHttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
```

***

### AppStoreReviewFieldResource

```ts
type AppStoreReviewFieldResource =
  | "apps"
  | "customerReviews"
  | "customerReviewResponses"
  | string & {
};
```

***

### AppStoreReviewFilter

```ts
type AppStoreReviewFilter =
  | "rating"
  | "territory"
  | "existsPublishedResponse"
  | string & {
};
```

***

### AppStoreReviewInclude

```ts
type AppStoreReviewInclude =
  | "response"
  | string & {
};
```

***

### AppStoreReviewResponse

```ts
type AppStoreReviewResponse = AppStoreResourceDocument<AppStoreCustomerReviewResource, AppStoreCustomerReviewResponseResource>;
```

***

### AppStoreReviewsJsonPrimitive

```ts
type AppStoreReviewsJsonPrimitive = string | number | boolean | null;
```

***

### AppStoreReviewsJsonValue

```ts
type AppStoreReviewsJsonValue =
  | AppStoreReviewsJsonPrimitive
  | AppStoreReviewsJsonObject
  | readonly AppStoreReviewsJsonValue[];
```

***

### AppStoreReviewsListResponse

```ts
type AppStoreReviewsListResponse = AppStoreResourceDocument<AppStoreCustomerReviewResource[], AppStoreCustomerReviewResponseResource>;
```

***

### AppStoreReviewsProviderExtensionValue

```ts
type AppStoreReviewsProviderExtensionValue =
  | AppStoreReviewsJsonValue
  | object
  | undefined;
```

***

### AppStoreReviewsProviderPayload

```ts
type AppStoreReviewsProviderPayload = AppStoreReviewsJsonObject | object;
```

***

### AppStoreReviewsProviderQuery

```ts
type AppStoreReviewsProviderQuery = Record<string, AppStoreReviewsProviderExtensionValue>;
```

## Variables

### appStoreReviewsIntegration

```ts
const appStoreReviewsIntegration: DefinedIntegration<{
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
}, unknown, never>;
```

## Functions

### applyListQuery()

```ts
function applyListQuery(url, input): void;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `url` | `URL` |
| `input` | \| [`AppStoreListReviewsInput`](#appstorelistreviewsinput) \| `Pick`\<[`AppStoreListReviewsInput`](#appstorelistreviewsinput), `"fields"` \| `"include"`\> |

#### Returns

`void`

***

### appStoreOperationUrl()

```ts
function appStoreOperationUrl(
   apiBaseUrl,
   path,
   pathParams?,
   query?): string;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `apiBaseUrl` | `string` |
| `path` | `string` |
| `pathParams?` | `Record`\<`string`, `string` \| `number` \| `boolean` \| `undefined`\> |
| `query?` | [`AppStoreReviewsProviderQuery`](#appstorereviewsproviderquery) |

#### Returns

`string`

***

### appStoreRequest()

```ts
function appStoreRequest<T>(input): Promise<T>;
```

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | \{ `body?`: [`AppStoreReviewsProviderPayload`](#appstorereviewsproviderpayload); `fetch`: \{ (`input`, `init?`): `Promise`\<`Response`\>; (`input`, `init?`): `Promise`\<`Response`\>; \}; `method`: [`AppStoreHttpMethod`](#appstorehttpmethod); `options`: [`AppStoreReviewsClientOptions`](#appstorereviewsclientoptions); `url`: `string`; \} |
| `input.body?` | [`AppStoreReviewsProviderPayload`](#appstorereviewsproviderpayload) |
| `input.fetch` | \{ (`input`, `init?`): `Promise`\<`Response`\>; (`input`, `init?`): `Promise`\<`Response`\>; \} |
| `input.method` | [`AppStoreHttpMethod`](#appstorehttpmethod) |
| `input.options` | [`AppStoreReviewsClientOptions`](#appstorereviewsclientoptions) |
| `input.url` | `string` |

#### Returns

`Promise`\<`T`\>

***

### appStoreReviewsCredentialStatuses()

```ts
function appStoreReviewsCredentialStatuses(input): {
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
| `input` | [`AppStoreCredentialStatusInput`](#appstorecredentialstatusinput) |

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

***

### createAppStoreConnectJwt()

```ts
function createAppStoreConnectJwt(options): string;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`AppStoreJwtOptions`](#appstorejwtoptions) |

#### Returns

`string`

***

### createAppStoreReviewsClient()

```ts
function createAppStoreReviewsClient(options): AppStoreReviewsClient;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`AppStoreReviewsClientOptions`](#appstorereviewsclientoptions) |

#### Returns

[`AppStoreReviewsClient`](#appstorereviewsclient)

***

### createAppStoreReviewsLiveChecks()

```ts
function createAppStoreReviewsLiveChecks(options): {
  description: string;
  id: string;
  requiredCredentialIds: string[];
  run: Promise<{
     details: {
        bundleId: string;
        id: string;
        name: string;
     };
  }>;
}[];
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`AppStoreLiveCheckOptions`](#appstorelivecheckoptions) |

#### Returns

\{
  `description`: `string`;
  `id`: `string`;
  `requiredCredentialIds`: `string`[];
  `run`: `Promise`\<\{
     `details`: \{
        `bundleId`: `string`;
        `id`: `string`;
        `name`: `string`;
     \};
  \}\>;
\}[]

***

### normalizeAppStoreReviewsPageUrl()

```ts
function normalizeAppStoreReviewsPageUrl(
   pageUrl,
   apiBaseUrl,
   appId): string;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `pageUrl` | `string` |
| `apiBaseUrl` | `string` |
| `appId` | `string` |

#### Returns

`string`

## References

### appStoreConnectReviewedOperationAllowlist

Re-exports [appStoreConnectReviewedOperationAllowlist](dist/manifest.md#appstoreconnectreviewedoperationallowlist)

***

### appStoreReviewsProviderManifest

Re-exports [appStoreReviewsProviderManifest](dist/manifest.md#appstorereviewsprovidermanifest)

***

### appStoreReviewsProviderManifestInput

Re-exports [appStoreReviewsProviderManifestInput](dist/manifest.md#appstorereviewsprovidermanifestinput)
