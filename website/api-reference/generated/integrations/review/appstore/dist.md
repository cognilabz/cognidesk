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

##### accessToken?

```ts
optional accessToken?: string;
```

###### Inherited from

[`AppStoreReviewsClientOptions`](#appstorereviewsclientoptions).[`accessToken`](#accesstoken-1)

##### appId

```ts
appId: string;
```

###### Inherited from

[`AppStoreReviewsClientOptions`](#appstorereviewsclientoptions).[`appId`](#appid-2)

##### baseUrl?

```ts
optional baseUrl?: string;
```

###### Inherited from

[`AppStoreReviewsClientOptions`](#appstorereviewsclientoptions).[`baseUrl`](#baseurl-1)

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

##### getJwt?

```ts
optional getJwt?: () => string | Promise<string>;
```

###### Returns

`string` \| `Promise`\<`string`\>

###### Inherited from

[`AppStoreReviewsClientOptions`](#appstorereviewsclientoptions).[`getJwt`](#getjwt-1)

##### issuerId?

```ts
optional issuerId?: string;
```

###### Inherited from

[`AppStoreReviewsClientOptions`](#appstorereviewsclientoptions).[`issuerId`](#issuerid-3)

##### keyId?

```ts
optional keyId?: string;
```

###### Inherited from

[`AppStoreReviewsClientOptions`](#appstorereviewsclientoptions).[`keyId`](#keyid-3)

##### privateKey?

```ts
optional privateKey?: string;
```

###### Inherited from

[`AppStoreReviewsClientOptions`](#appstorereviewsclientoptions).[`privateKey`](#privatekey-2)

##### providerClient?

```ts
optional providerClient?: AppStoreReviewsProviderClient;
```

###### Inherited from

[`AppStoreReviewsClientOptions`](#appstorereviewsclientoptions).[`providerClient`](#providerclient-2)

##### retry?

```ts
optional retry?:
  | number
  | ProviderJsonRetryOptions;
```

###### Inherited from

[`AppStoreReviewsClientOptions`](#appstorereviewsclientoptions).[`retry`](#retry-1)

##### sdkClient?

```ts
optional sdkClient?: Client;
```

###### Inherited from

[`AppStoreReviewsClientOptions`](#appstorereviewsclientoptions).[`sdkClient`](#sdkclient-1)

##### signal?

```ts
optional signal?: AbortSignal;
```

###### Inherited from

[`AppStoreReviewsClientOptions`](#appstorereviewsclientoptions).[`signal`](#signal-1)

##### timeoutMs?

```ts
optional timeoutMs?: number;
```

###### Inherited from

[`AppStoreReviewsClientOptions`](#appstorereviewsclientoptions).[`timeoutMs`](#timeoutms-1)

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

#### Extends

- [`AppStoreReviewsProviderClient`](#appstorereviewsproviderclient)

#### Properties

##### providerClient

```ts
providerClient: AppStoreReviewsProviderClient;
```

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

###### Inherited from

[`AppStoreReviewsProviderClient`](#appstorereviewsproviderclient).[`createOrUpdateReviewResponse`](#createorupdatereviewresponse-1)

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

###### Inherited from

[`AppStoreReviewsProviderClient`](#appstorereviewsproviderclient).[`deleteReviewResponse`](#deletereviewresponse-1)

##### getApp()

```ts
getApp(): Promise<AppStoreAppResponse>;
```

###### Returns

`Promise`\<[`AppStoreAppResponse`](#appstoreappresponse)\>

###### Inherited from

[`AppStoreReviewsProviderClient`](#appstorereviewsproviderclient).[`getApp`](#getapp-1)

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

###### Inherited from

[`AppStoreReviewsProviderClient`](#appstorereviewsproviderclient).[`getReview`](#getreview-1)

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

###### Inherited from

[`AppStoreReviewsProviderClient`](#appstorereviewsproviderclient).[`listReviews`](#listreviews-1)

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

###### Inherited from

[`AppStoreReviewsProviderClient`](#appstorereviewsproviderclient).[`listReviewsPage`](#listreviewspage-1)

***

### AppStoreReviewsClientOptions

#### Extended by

- [`AppStoreLiveCheckOptions`](#appstorelivecheckoptions)

#### Properties

##### accessToken?

```ts
optional accessToken?: string;
```

##### appId

```ts
appId: string;
```

##### baseUrl?

```ts
optional baseUrl?: string;
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

##### getJwt?

```ts
optional getJwt?: () => string | Promise<string>;
```

###### Returns

`string` \| `Promise`\<`string`\>

##### issuerId?

```ts
optional issuerId?: string;
```

##### keyId?

```ts
optional keyId?: string;
```

##### privateKey?

```ts
optional privateKey?: string;
```

##### providerClient?

```ts
optional providerClient?: AppStoreReviewsProviderClient;
```

##### retry?

```ts
optional retry?:
  | number
  | ProviderJsonRetryOptions;
```

##### sdkClient?

```ts
optional sdkClient?: Client;
```

##### signal?

```ts
optional signal?: AbortSignal;
```

##### timeoutMs?

```ts
optional timeoutMs?: number;
```

***

### AppStoreReviewsJsonObject

#### Indexable

```ts
[key: string]: AppStoreReviewsProviderExtensionValue
```

***

### AppStoreReviewsProviderClient

#### Extended by

- [`AppStoreReviewsClient`](#appstorereviewsclient)

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
type AppStoreReviewsProviderQuery = Record<string, ProviderQueryValue>;
```

## Variables

### appStoreReviewOperations

```ts
const appStoreReviewOperations: typeof createAppStoreReviewsOperationHandlers;
```

***

### appStoreReviewsIntegration

```ts
const appStoreReviewsIntegration: {
  bindingReport: {
     extraHandlerAliases: never[];
     invalidExtensionOperationAliases: never[];
     missingHandlerAliases: string[];
  };
  manifest: {
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
           metadata?: Record<..., ...>;
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
  operationAliases: never[];
  operations: {
  };
};
```

#### Type Declaration

| Name | Type |
| ------ | ------ |
| <a id="property-bindingreport"></a> `bindingReport` | \{ `extraHandlerAliases`: `never`[]; `invalidExtensionOperationAliases`: `never`[]; `missingHandlerAliases`: `string`[]; \} |
| `bindingReport.extraHandlerAliases` | `never`[] |
| `bindingReport.invalidExtensionOperationAliases` | `never`[] |
| `bindingReport.missingHandlerAliases` | `string`[] |
| <a id="property-manifest"></a> `manifest` | \{ `capabilities`: \{ `audiences?`: (`"customer-facing"` \| `"mixed"` \| `"internal-support"`)[]; `capability`: `string`; `changesWorkflow?`: `boolean`; `description?`: `string`; `exposesSensitiveData?`: `boolean`; `extension?`: `boolean`; `label?`: `string`; `metadata?`: `Record`\<`string`, `unknown`\>; `providerObjects?`: \{ `description?`: `string`; `kind`: `string`; `label?`: `string`; `metadata?`: `Record`\<`string`, `unknown`\>; `schemaName?`: `string`; \}[]; `requiresCredential?`: `boolean`; `sideEffect?`: `boolean`; \}[]; `category`: `string`; `channelAudiences`: (`"customer-facing"` \| `"mixed"` \| `"internal-support"`)[]; `coverage`: \{ `evidence`: \{ `label`: `string`; `url?`: `string`; \}[]; `notes`: `string`[]; `scope`: \| `"support-workflow-subset"` \| `"provider-api-subset"` \| `"connector-required"` \| `"local-protocol"` \| `"full-provider-api"`; \}; `credentialRequirements`: \{ `description?`: `string`; `id`: `string`; `label?`: `string`; `metadata?`: `Record`\<`string`, `unknown`\>; `required`: `boolean`; `scopes`: `string`[]; \}[]; `directions`: ( \| `"receive-only"` \| `"send-only"` \| `"bidirectional"` \| `"inbound-only"` \| `"outbound-only"`)[]; `id`: `string`; `limitations`: `string`[]; `maintainers`: \{ `name`: `string`; `type`: `"official"` \| `"community"` \| `"unknown"` \| `"partner"`; `url?`: `string`; \}[]; `metadata?`: `Record`\<`string`, `unknown`\>; `name`: `string`; `operations`: \{ `alias`: `string`; `audience?`: `"customer-facing"` \| `"mixed"` \| `"internal-support"`; `audiences?`: (`"customer-facing"` \| `"mixed"` \| `"internal-support"`)[]; `capability`: `string`; `changesWorkflow?`: `boolean`; `description?`: `string`; `exposesSensitiveData?`: `boolean`; `extension`: `boolean`; `externallyVisible?`: `boolean`; `inputSchema?`: `unknown`; `inputSchemaName?`: `string`; `inputSchemaRef?`: `string`; `label?`: `string`; `metadata?`: `Record`\<`string`, `unknown`\>; `outputSchema?`: `unknown`; `outputSchemaName?`: `string`; `outputSchemaRef?`: `string`; `providerObject?`: `string`; `providerObjects?`: \{ `description?`: `string`; `kind`: `string`; `label?`: `string`; `metadata?`: `Record`\<`string`, `unknown`\>; `schemaName?`: `string`; \}[]; `providerOperation?`: `string`; `requiredPolicyIds?`: `string`[]; `requiresApproval?`: `boolean`; `requiresCredential?`: `boolean`; `sideEffect?`: `boolean`; \}[]; `packageName`: `string`; `privacyNotes`: `string`[]; `provider`: `string`; `trustLevel`: `"official"` \| `"community"` \| `"verified"` \| `"experimental"`; \} & \{ `capabilities`: \{ `audiences?`: (`"customer-facing"` \| `"mixed"` \| `"internal-support"`)[]; `capability`: `string`; `changesWorkflow?`: `boolean`; `description?`: `string`; `exposesSensitiveData?`: `boolean`; `extension?`: `boolean`; `label?`: `string`; `metadata?`: `Record`\<`string`, `unknown`\>; `providerObjects?`: \{ `description?`: `string`; `kind`: `string`; `label?`: `string`; `metadata?`: `Record`\<`string`, `unknown`\>; `schemaName?`: `string`; \}[]; `requiresCredential?`: `boolean`; `sideEffect?`: `boolean`; \}[]; `category`: `string`; `channelAudiences?`: (`"customer-facing"` \| `"mixed"` \| `"internal-support"`)[]; `coverage?`: \{ `evidence?`: \{ `label`: `string`; `url?`: `string`; \}[]; `notes?`: `string`[]; `scope?`: \| `"support-workflow-subset"` \| `"provider-api-subset"` \| `"connector-required"` \| `"local-protocol"` \| `"full-provider-api"`; \}; `credentialRequirements?`: \{ `description?`: `string`; `id`: `string`; `label?`: `string`; `metadata?`: `Record`\<`string`, `unknown`\>; `required?`: `boolean`; `scopes?`: `string`[]; \}[]; `directions`: ( \| `"receive-only"` \| `"send-only"` \| `"bidirectional"` \| `"inbound-only"` \| `"outbound-only"`)[]; `id`: `string`; `limitations?`: `string`[]; `maintainers?`: \{ `name`: `string`; `type?`: `"official"` \| `"community"` \| `"unknown"` \| `"partner"`; `url?`: `string`; \}[]; `metadata?`: `Record`\<`string`, `unknown`\>; `name`: `string`; `operations?`: \{ `alias`: `string`; `audience?`: `"customer-facing"` \| `"mixed"` \| `"internal-support"`; `audiences?`: (`"customer-facing"` \| `"mixed"` \| `"internal-support"`)[]; `capability`: `string`; `changesWorkflow?`: `boolean`; `description?`: `string`; `exposesSensitiveData?`: `boolean`; `extension?`: `boolean`; `externallyVisible?`: `boolean`; `inputSchema?`: `unknown`; `inputSchemaName?`: `string`; `inputSchemaRef?`: `string`; `label?`: `string`; `metadata?`: `Record`\<`string`, `unknown`\>; `outputSchema?`: `unknown`; `outputSchemaName?`: `string`; `outputSchemaRef?`: `string`; `providerObject?`: `string`; `providerObjects?`: \{ `description?`: `string`; `kind`: `string`; `label?`: `string`; `metadata?`: `Record`\<..., ...\>; `schemaName?`: `string`; \}[]; `providerOperation?`: `string`; `requiredPolicyIds?`: `string`[]; `requiresApproval?`: `boolean`; `requiresCredential?`: `boolean`; `sideEffect?`: `boolean`; \}[]; `packageName`: `string`; `privacyNotes?`: `string`[]; `provider`: `string`; `trustLevel?`: `"official"` \| `"community"` \| `"verified"` \| `"experimental"`; \} |
| <a id="property-operationaliases"></a> `operationAliases` | `never`[] |
| <a id="property-operations"></a> `operations` | \{ \} |

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

### createAppStoreConnectRestProviderClient()

```ts
function createAppStoreConnectRestProviderClient(options): AppStoreReviewsProviderClient;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | `Omit`\<[`AppStoreReviewsClientOptions`](#appstorereviewsclientoptions), `"providerClient"`\> |

#### Returns

[`AppStoreReviewsProviderClient`](#appstorereviewsproviderclient)

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

### createAppStoreReviewsIntegration()

```ts
function createAppStoreReviewsIntegration(options): DefinedIntegration<{
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
     | "inbound-only"
     | "outbound-only"
    | "bidirectional")[];
  id: string;
  limitations?: string[];
  maintainers?: {
     name: string;
     type?: "community" | "official" | "unknown" | "partner";
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
  trustLevel?: "community" | "official" | "verified" | "experimental";
}, unknown, {
  appstore.reviewResponses.createOrUpdate: (input) => Promise<AppStoreCustomerReviewResponseDocument>;
  appstore.reviewResponses.delete: (input) => Promise<void>;
  appstore.reviews.get: (input) => Promise<AppStoreReviewResponse>;
  appstore.reviews.list: (input) => Promise<AppStoreReviewsListResponse>;
  appstore.reviews.page: (input) => Promise<AppStoreReviewsListResponse>;
}>;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`AppStoreReviewsClientOptions`](#appstorereviewsclientoptions) |

#### Returns

[`DefinedIntegration`](../../../packages/integration-kit/dist.md#definedintegration)\<\{
  `capabilities`: \{
     `audiences?`: (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[];
     `capability`: `string`;
     `changesWorkflow?`: `boolean`;
     `description?`: `string`;
     `exposesSensitiveData?`: `boolean`;
     `extension?`: `boolean`;
     `label?`: `string`;
     `metadata?`: `Record`\<`string`, `unknown`\>;
     `providerObjects?`: \{
        `description?`: `string`;
        `kind`: `string`;
        `label?`: `string`;
        `metadata?`: `Record`\<`string`, `unknown`\>;
        `schemaName?`: `string`;
     \}[];
     `requiresCredential?`: `boolean`;
     `sideEffect?`: `boolean`;
  \}[];
  `category`: `string`;
  `channelAudiences?`: (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[];
  `coverage?`: \{
     `evidence?`: \{
        `label`: `string`;
        `url?`: `string`;
     \}[];
     `notes?`: `string`[];
     `scope?`:   \| `"support-workflow-subset"`
        \| `"provider-api-subset"`
        \| `"connector-required"`
        \| `"local-protocol"`
        \| `"full-provider-api"`;
  \};
  `credentialRequirements?`: \{
     `description?`: `string`;
     `id`: `string`;
     `label?`: `string`;
     `metadata?`: `Record`\<`string`, `unknown`\>;
     `required?`: `boolean`;
     `scopes?`: `string`[];
  \}[];
  `directions`: (
     \| `"receive-only"`
     \| `"send-only"`
     \| `"inbound-only"`
     \| `"outbound-only"`
    \| `"bidirectional"`)[];
  `id`: `string`;
  `limitations?`: `string`[];
  `maintainers?`: \{
     `name`: `string`;
     `type?`: `"community"` \| `"official"` \| `"unknown"` \| `"partner"`;
     `url?`: `string`;
  \}[];
  `metadata?`: `Record`\<`string`, `unknown`\>;
  `name`: `string`;
  `operations?`: \{
     `alias`: `string`;
     `audience?`: `"customer-facing"` \| `"internal-support"` \| `"mixed"`;
     `audiences?`: (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[];
     `capability`: `string`;
     `changesWorkflow?`: `boolean`;
     `description?`: `string`;
     `exposesSensitiveData?`: `boolean`;
     `extension?`: `boolean`;
     `externallyVisible?`: `boolean`;
     `inputSchema?`: `unknown`;
     `inputSchemaName?`: `string`;
     `inputSchemaRef?`: `string`;
     `label?`: `string`;
     `metadata?`: `Record`\<`string`, `unknown`\>;
     `outputSchema?`: `unknown`;
     `outputSchemaName?`: `string`;
     `outputSchemaRef?`: `string`;
     `providerObject?`: `string`;
     `providerObjects?`: \{
        `description?`: `string`;
        `kind`: `string`;
        `label?`: `string`;
        `metadata?`: `Record`\<`string`, `unknown`\>;
        `schemaName?`: `string`;
     \}[];
     `providerOperation?`: `string`;
     `requiredPolicyIds?`: `string`[];
     `requiresApproval?`: `boolean`;
     `requiresCredential?`: `boolean`;
     `sideEffect?`: `boolean`;
  \}[];
  `packageName`: `string`;
  `privacyNotes?`: `string`[];
  `provider`: `string`;
  `trustLevel?`: `"community"` \| `"official"` \| `"verified"` \| `"experimental"`;
\}, `unknown`, \{
  `appstore.reviewResponses.createOrUpdate`: (`input`) => `Promise`\<[`AppStoreCustomerReviewResponseDocument`](#appstorecustomerreviewresponsedocument)\>;
  `appstore.reviewResponses.delete`: (`input`) => `Promise`\<`void`\>;
  `appstore.reviews.get`: (`input`) => `Promise`\<[`AppStoreReviewResponse`](#appstorereviewresponse)\>;
  `appstore.reviews.list`: (`input`) => `Promise`\<[`AppStoreReviewsListResponse`](#appstorereviewslistresponse)\>;
  `appstore.reviews.page`: (`input`) => `Promise`\<[`AppStoreReviewsListResponse`](#appstorereviewslistresponse)\>;
\}\>

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

### createAppStoreReviewsOperationHandlers()

```ts
function createAppStoreReviewsOperationHandlers(options): {
  appstore.reviewResponses.createOrUpdate: (input) => Promise<AppStoreCustomerReviewResponseDocument>;
  appstore.reviewResponses.delete: (input) => Promise<void>;
  appstore.reviews.get: (input) => Promise<AppStoreReviewResponse>;
  appstore.reviews.list: (input) => Promise<AppStoreReviewsListResponse>;
  appstore.reviews.page: (input) => Promise<AppStoreReviewsListResponse>;
};
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`AppStoreReviewsClientOptions`](#appstorereviewsclientoptions) |

#### Returns

```ts
{
  appstore.reviewResponses.createOrUpdate: (input) => Promise<AppStoreCustomerReviewResponseDocument>;
  appstore.reviewResponses.delete: (input) => Promise<void>;
  appstore.reviews.get: (input) => Promise<AppStoreReviewResponse>;
  appstore.reviews.list: (input) => Promise<AppStoreReviewsListResponse>;
  appstore.reviews.page: (input) => Promise<AppStoreReviewsListResponse>;
}
```

| Name | Type |
| ------ | ------ |
| `appstore.reviewResponses.createOrUpdate()` | (`input`) => `Promise`\<[`AppStoreCustomerReviewResponseDocument`](#appstorecustomerreviewresponsedocument)\> |
| `appstore.reviewResponses.delete()` | (`input`) => `Promise`\<`void`\> |
| `appstore.reviews.get()` | (`input`) => `Promise`\<[`AppStoreReviewResponse`](#appstorereviewresponse)\> |
| `appstore.reviews.list()` | (`input`) => `Promise`\<[`AppStoreReviewsListResponse`](#appstorereviewslistresponse)\> |
| `appstore.reviews.page()` | (`input`) => `Promise`\<[`AppStoreReviewsListResponse`](#appstorereviewslistresponse)\> |

***

### createUnconfiguredAppStoreProviderClient()

```ts
function createUnconfiguredAppStoreProviderClient(): AppStoreReviewsProviderClient;
```

#### Returns

[`AppStoreReviewsProviderClient`](#appstorereviewsproviderclient)

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
