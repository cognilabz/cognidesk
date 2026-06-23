# integrations/social/tiktok/dist

## Interfaces

### ParseTikTokWebhookOptions

#### Properties

##### clientSecret?

```ts
optional clientSecret?: string;
```

##### nowSeconds?

```ts
optional nowSeconds?: number;
```

##### requireSignature?

```ts
optional requireSignature?: boolean;
```

##### toleranceSeconds?

```ts
optional toleranceSeconds?: number;
```

***

### TikTokApiResponse

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` *extends* [`TikTokSocialProviderExtensionValue`](#tiktoksocialproviderextensionvalue) | [`TikTokSocialJsonObject`](#tiktoksocialjsonobject) |

#### Indexable

```ts
[key: string]: TikTokSocialProviderExtensionValue
```

#### Properties

##### data?

```ts
optional data?: T;
```

##### error?

```ts
optional error?: {
  code?: string;
  log_id?: string;
  message?: string;
};
```

###### code?

```ts
optional code?: string;
```

###### log\_id?

```ts
optional log_id?: string;
```

###### message?

```ts
optional message?: string;
```

***

### TikTokBusinessCommentListInput

#### Properties

##### businessId?

```ts
optional businessId?: string;
```

##### cursor?

```ts
optional cursor?: number;
```

##### fields?

```ts
optional fields?: string[];
```

##### pageSize?

```ts
optional pageSize?: number;
```

##### status?

```ts
optional status?: string;
```

##### videoId

```ts
videoId: string;
```

***

### TikTokBusinessVideoListInput

#### Properties

##### businessId?

```ts
optional businessId?: string;
```

##### fields?

```ts
optional fields?: string[];
```

##### filters?

```ts
optional filters?: TikTokSocialJsonObject;
```

***

### TikTokComment

#### Indexable

```ts
[key: string]: TikTokSocialProviderExtensionValue
```

#### Properties

##### create\_time?

```ts
optional create_time?: number;
```

##### id?

```ts
optional id?: string;
```

##### like\_count?

```ts
optional like_count?: number;
```

##### parent\_comment\_id?

```ts
optional parent_comment_id?: string;
```

##### reply\_count?

```ts
optional reply_count?: number;
```

##### text?

```ts
optional text?: string;
```

##### video\_id?

```ts
optional video_id?: string;
```

***

### TikTokCommentList

#### Indexable

```ts
[key: string]: TikTokSocialProviderExtensionValue
```

#### Properties

##### comments?

```ts
optional comments?: TikTokComment[];
```

##### cursor?

```ts
optional cursor?: number;
```

##### has\_more?

```ts
optional has_more?: boolean;
```

***

### TikTokCommentReplyInput

#### Properties

##### additionalFields?

```ts
optional additionalFields?: TikTokSocialProviderExtensionFields;
```

##### businessId?

```ts
optional businessId?: string;
```

##### commentId

```ts
commentId: string;
```

##### text

```ts
text: string;
```

##### videoId

```ts
videoId: string;
```

***

### TikTokCredentialStatusInput

#### Properties

##### accessToken?

```ts
optional accessToken?: string;
```

##### businessId?

```ts
optional businessId?: string;
```

##### clientKey?

```ts
optional clientKey?: string;
```

##### clientSecret?

```ts
optional clientSecret?: string;
```

##### expiresAt?

```ts
optional expiresAt?: string;
```

##### openId?

```ts
optional openId?: string;
```

##### scopes?

```ts
optional scopes?: string[];
```

##### webhookConfigured?

```ts
optional webhookConfigured?: boolean;
```

##### webhookSignatureSecret?

```ts
optional webhookSignatureSecret?: string;
```

***

### TikTokGeneralDmSupport

#### Properties

##### alternatives

```ts
alternatives: string[];
```

##### reason

```ts
reason: string;
```

##### supported

```ts
supported: false;
```

***

### TikTokLiveCheckOptions

#### Extends

- [`TikTokSocialClientOptions`](#tiktoksocialclientoptions)

#### Properties

##### accessToken

```ts
accessToken: string;
```

###### Inherited from

[`TikTokSocialClientOptions`](#tiktoksocialclientoptions).[`accessToken`](#accesstoken-2)

##### businessApiBaseUrl?

```ts
optional businessApiBaseUrl?: string;
```

###### Inherited from

[`TikTokSocialClientOptions`](#tiktoksocialclientoptions).[`businessApiBaseUrl`](#businessapibaseurl-1)

##### businessApiVersion?

```ts
optional businessApiVersion?: string;
```

###### Inherited from

[`TikTokSocialClientOptions`](#tiktoksocialclientoptions).[`businessApiVersion`](#businessapiversion-1)

##### businessId?

```ts
optional businessId?: string;
```

###### Inherited from

[`TikTokSocialClientOptions`](#tiktoksocialclientoptions).[`businessId`](#businessid-5)

##### client?

```ts
optional client?: Pick<TikTokSocialClient, "getUserInfo" | "listVideos">;
```

##### clientKey?

```ts
optional clientKey?: string;
```

###### Inherited from

[`TikTokSocialClientOptions`](#tiktoksocialclientoptions).[`clientKey`](#clientkey-2)

##### clientSecret?

```ts
optional clientSecret?: string;
```

###### Inherited from

[`TikTokSocialClientOptions`](#tiktoksocialclientoptions).[`clientSecret`](#clientsecret-3)

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

[`TikTokSocialClientOptions`](#tiktoksocialclientoptions).[`fetch`](#fetch-1)

##### openApiBaseUrl?

```ts
optional openApiBaseUrl?: string;
```

###### Inherited from

[`TikTokSocialClientOptions`](#tiktoksocialclientoptions).[`openApiBaseUrl`](#openapibaseurl-1)

##### openId?

```ts
optional openId?: string;
```

###### Inherited from

[`TikTokSocialClientOptions`](#tiktoksocialclientoptions).[`openId`](#openid-2)

***

### TikTokPostStatusInput

#### Properties

##### publishId

```ts
publishId: string;
```

***

### TikTokResearchCommentListInput

#### Properties

##### commentId?

```ts
optional commentId?: string;
```

##### cursor?

```ts
optional cursor?: number;
```

##### fields?

```ts
optional fields?: string[];
```

##### maxCount?

```ts
optional maxCount?: number;
```

##### videoId?

```ts
optional videoId?: string;
```

***

### TikTokSelectedOperation

#### Properties

##### api

```ts
api:
  | "tiktok-open.v2.display"
  | "tiktok-open.v2.content-posting"
  | "tiktok-open.v2.research"
  | "tiktok-business.v1.3";
```

##### functionName

```ts
functionName: string;
```

##### method

```ts
method: "GET" | "POST";
```

##### path

```ts
path: string;
```

##### sourceUrl

```ts
sourceUrl: string;
```

##### uid

```ts
uid: string;
```

***

### TikTokSignatureParts

#### Properties

##### signature?

```ts
optional signature?: string;
```

##### timestamp?

```ts
optional timestamp?: number;
```

***

### TikTokSignedWebhook

#### Properties

##### contentType?

```ts
optional contentType?: string;
```

##### payload

```ts
payload: TikTokWebhookPayload;
```

##### rawBody

```ts
rawBody: string;
```

##### signature?

```ts
optional signature?: string;
```

##### timestamp?

```ts
optional timestamp?: number;
```

***

### TikTokSocialClient

#### Methods

##### createBusinessComment()

```ts
createBusinessComment(input): Promise<TikTokApiResponse<TikTokSocialJsonObject>>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | `Omit`\<[`TikTokCommentReplyInput`](#tiktokcommentreplyinput), `"commentId"`\> |

###### Returns

`Promise`\<[`TikTokApiResponse`](#tiktokapiresponse)\<[`TikTokSocialJsonObject`](#tiktoksocialjsonobject)\>\>

##### fetchPostStatus()

```ts
fetchPostStatus(input): Promise<TikTokApiResponse<TikTokSocialJsonObject>>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`TikTokPostStatusInput`](#tiktokpoststatusinput) |

###### Returns

`Promise`\<[`TikTokApiResponse`](#tiktokapiresponse)\<[`TikTokSocialJsonObject`](#tiktoksocialjsonobject)\>\>

##### getUserInfo()

```ts
getUserInfo(fields?): Promise<TikTokApiResponse<TikTokUserInfo>>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `fields?` | `string`[] |

###### Returns

`Promise`\<[`TikTokApiResponse`](#tiktokapiresponse)\<[`TikTokUserInfo`](#tiktokuserinfo)\>\>

##### listBusinessComments()

```ts
listBusinessComments(input): Promise<TikTokApiResponse<TikTokCommentList>>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`TikTokBusinessCommentListInput`](#tiktokbusinesscommentlistinput) |

###### Returns

`Promise`\<[`TikTokApiResponse`](#tiktokapiresponse)\<[`TikTokCommentList`](#tiktokcommentlist)\>\>

##### listBusinessVideos()

```ts
listBusinessVideos(input?): Promise<TikTokApiResponse<TikTokSocialJsonObject>>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input?` | [`TikTokBusinessVideoListInput`](#tiktokbusinessvideolistinput) |

###### Returns

`Promise`\<[`TikTokApiResponse`](#tiktokapiresponse)\<[`TikTokSocialJsonObject`](#tiktoksocialjsonobject)\>\>

##### listVideos()

```ts
listVideos(input?): Promise<TikTokApiResponse<TikTokVideoList>>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input?` | [`TikTokVideoListInput`](#tiktokvideolistinput) |

###### Returns

`Promise`\<[`TikTokApiResponse`](#tiktokapiresponse)\<[`TikTokVideoList`](#tiktokvideolist)\>\>

##### queryResearchVideoComments()

```ts
queryResearchVideoComments(input): Promise<TikTokApiResponse<TikTokCommentList>>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`TikTokResearchCommentListInput`](#tiktokresearchcommentlistinput) |

###### Returns

`Promise`\<[`TikTokApiResponse`](#tiktokapiresponse)\<[`TikTokCommentList`](#tiktokcommentlist)\>\>

##### replyToBusinessComment()

```ts
replyToBusinessComment(input): Promise<TikTokApiResponse<TikTokSocialJsonObject>>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`TikTokCommentReplyInput`](#tiktokcommentreplyinput) |

###### Returns

`Promise`\<[`TikTokApiResponse`](#tiktokapiresponse)\<[`TikTokSocialJsonObject`](#tiktoksocialjsonobject)\>\>

***

### TikTokSocialClientOptions

#### Extended by

- [`TikTokLiveCheckOptions`](#tiktoklivecheckoptions)

#### Properties

##### accessToken

```ts
accessToken: string;
```

##### businessApiBaseUrl?

```ts
optional businessApiBaseUrl?: string;
```

##### businessApiVersion?

```ts
optional businessApiVersion?: string;
```

##### businessId?

```ts
optional businessId?: string;
```

##### clientKey?

```ts
optional clientKey?: string;
```

##### clientSecret?

```ts
optional clientSecret?: string;
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

##### openApiBaseUrl?

```ts
optional openApiBaseUrl?: string;
```

##### openId?

```ts
optional openId?: string;
```

***

### TikTokSocialJsonObject

#### Extended by

- [`TikTokSocialProviderExtensionFields`](#tiktoksocialproviderextensionfields)
- [`TikTokSocialProviderResponse`](#tiktoksocialproviderresponse)

#### Indexable

```ts
[key: string]: TikTokSocialProviderExtensionValue
```

***

### TikTokSocialProviderExtensionFields

#### Extends

- [`TikTokSocialJsonObject`](#tiktoksocialjsonobject)

#### Indexable

```ts
[key: string]: TikTokSocialProviderExtensionValue
```

***

### TikTokSocialProviderResponse

#### Extends

- [`TikTokSocialJsonObject`](#tiktoksocialjsonobject)

#### Indexable

```ts
[key: string]: TikTokSocialProviderExtensionValue
```

***

### TikTokUserInfo

#### Indexable

```ts
[key: string]: TikTokSocialProviderExtensionValue
```

#### Properties

##### user?

```ts
optional user?: {
[key: string]: TikTokSocialProviderExtensionValue;
  avatar_large_url?: string;
  avatar_url?: string;
  avatar_url_100?: string;
  bio_description?: string;
  display_name?: string;
  follower_count?: number;
  following_count?: number;
  is_verified?: boolean;
  likes_count?: number;
  open_id?: string;
  profile_deep_link?: string;
  union_id?: string;
  username?: string;
  video_count?: number;
};
```

###### Index Signature

```ts
[key: string]: TikTokSocialProviderExtensionValue
```

###### avatar\_large\_url?

```ts
optional avatar_large_url?: string;
```

###### avatar\_url?

```ts
optional avatar_url?: string;
```

###### avatar\_url\_100?

```ts
optional avatar_url_100?: string;
```

###### bio\_description?

```ts
optional bio_description?: string;
```

###### display\_name?

```ts
optional display_name?: string;
```

###### follower\_count?

```ts
optional follower_count?: number;
```

###### following\_count?

```ts
optional following_count?: number;
```

###### is\_verified?

```ts
optional is_verified?: boolean;
```

###### likes\_count?

```ts
optional likes_count?: number;
```

###### open\_id?

```ts
optional open_id?: string;
```

###### profile\_deep\_link?

```ts
optional profile_deep_link?: string;
```

###### union\_id?

```ts
optional union_id?: string;
```

###### username?

```ts
optional username?: string;
```

###### video\_count?

```ts
optional video_count?: number;
```

***

### TikTokVideo

#### Indexable

```ts
[key: string]: TikTokSocialProviderExtensionValue
```

#### Properties

##### comment\_count?

```ts
optional comment_count?: number;
```

##### cover\_image\_url?

```ts
optional cover_image_url?: string;
```

##### create\_time?

```ts
optional create_time?: number;
```

##### duration?

```ts
optional duration?: number;
```

##### embed\_html?

```ts
optional embed_html?: string;
```

##### embed\_link?

```ts
optional embed_link?: string;
```

##### height?

```ts
optional height?: number;
```

##### id?

```ts
optional id?: string;
```

##### like\_count?

```ts
optional like_count?: number;
```

##### share\_count?

```ts
optional share_count?: number;
```

##### share\_url?

```ts
optional share_url?: string;
```

##### title?

```ts
optional title?: string;
```

##### video\_description?

```ts
optional video_description?: string;
```

##### view\_count?

```ts
optional view_count?: number;
```

##### width?

```ts
optional width?: number;
```

***

### TikTokVideoList

#### Indexable

```ts
[key: string]: TikTokSocialProviderExtensionValue
```

#### Properties

##### cursor?

```ts
optional cursor?: number;
```

##### has\_more?

```ts
optional has_more?: boolean;
```

##### video\_list?

```ts
optional video_list?: TikTokVideo[];
```

##### videos?

```ts
optional videos?: TikTokVideo[];
```

***

### TikTokVideoListInput

#### Properties

##### cursor?

```ts
optional cursor?: number;
```

##### fields?

```ts
optional fields?: string[];
```

##### maxCount?

```ts
optional maxCount?: number;
```

***

### TikTokWebhookPayload

#### Indexable

```ts
[key: string]: TikTokSocialProviderExtensionValue
```

#### Properties

##### client\_key?

```ts
optional client_key?: string;
```

##### create\_time?

```ts
optional create_time?: number;
```

##### data?

```ts
optional data?: TikTokSocialJsonObject;
```

##### event?

```ts
optional event?: string;
```

##### event\_id?

```ts
optional event_id?: string;
```

##### event\_name?

```ts
optional event_name?: string;
```

##### user\_open\_id?

```ts
optional user_open_id?: string;
```

***

### ValidateTikTokWebhookSignatureInput

#### Properties

##### clientSecret

```ts
clientSecret: string;
```

##### nowSeconds?

```ts
optional nowSeconds?: number;
```

##### rawBody

```ts
rawBody: string | Buffer<ArrayBufferLike>;
```

##### signatureHeader

```ts
signatureHeader: string;
```

##### toleranceSeconds?

```ts
optional toleranceSeconds?: number;
```

## Type Aliases

### TikTokSocialJsonPrimitive

```ts
type TikTokSocialJsonPrimitive = string | number | boolean | null;
```

***

### TikTokSocialJsonValue

```ts
type TikTokSocialJsonValue =
  | TikTokSocialJsonPrimitive
  | TikTokSocialJsonObject
  | readonly TikTokSocialJsonValue[];
```

***

### TikTokSocialProviderExtensionValue

```ts
type TikTokSocialProviderExtensionValue = TikTokSocialJsonValue | object | undefined;
```

***

### TikTokSocialProviderPayload

```ts
type TikTokSocialProviderPayload = TikTokSocialJsonObject | object;
```

***

### TikTokSocialProviderQuery

```ts
type TikTokSocialProviderQuery = Record<string, TikTokSocialProviderExtensionValue>;
```

## Variables

### TIKTOK\_DIRECT\_SLICE\_METADATA

```ts
const TIKTOK_DIRECT_SLICE_METADATA: {
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
```

#### Type Declaration

| Name | Type |
| ------ | ------ |
| <a id="property-allowlistchecksum"></a> `allowlistChecksum` | `string` |
| <a id="property-allowlistchecksumalgorithm"></a> `allowlistChecksumAlgorithm` | `"sha256"` |
| <a id="property-apicoverage"></a> `apiCoverage` | \{ `checkedAt`: `"2026-06-21"`; `operationCatalog`: `"package:src/selected-operations.ts"`; \} |
| `apiCoverage.checkedAt` | `"2026-06-21"` |
| `apiCoverage.operationCatalog` | `"package:src/selected-operations.ts"` |
| <a id="property-checkedat"></a> `checkedAt` | `"2026-06-21"` |
| <a id="property-sdkdecision"></a> `sdkDecision` | \{ `notes`: readonly \[`"No official maintained JavaScript/TypeScript SDK was found for the mixed Display API, Research API, Content Posting status, webhook, and Business comment surface."`, `"tiktok-business-api-sdk-official@1.1.3 is a broad Swagger Codegen Business API bundle; it does not cover TikTok Developers Open API, Research API, Content Posting status, or webhooks, and its comment endpoints do not match this adapter's selected /business/comment/* paths."`\]; `viableOfficialSdk`: `false`; \} |
| `sdkDecision.notes` | readonly \[`"No official maintained JavaScript/TypeScript SDK was found for the mixed Display API, Research API, Content Posting status, webhook, and Business comment surface."`, `"tiktok-business-api-sdk-official@1.1.3 is a broad Swagger Codegen Business API bundle; it does not cover TikTok Developers Open API, Research API, Content Posting status, or webhooks, and its comment endpoints do not match this adapter's selected /business/comment/* paths."`\] |
| `sdkDecision.viableOfficialSdk` | `false` |
| <a id="property-selectedoperations"></a> `selectedOperations` | ( \| \{ `api`: `"tiktok-open.v2.display"`; `functionName`: `string`; `method`: `"GET"`; `path`: `string`; `sourceUrl`: `string`; `uid`: `string`; \} \| \{ `api`: `"tiktok-open.v2.display"`; `functionName`: `string`; `method`: `"POST"`; `path`: `string`; `sourceUrl`: `string`; `uid`: `string`; \} \| \{ `api`: `"tiktok-open.v2.content-posting"`; `functionName`: `string`; `method`: `"POST"`; `path`: `string`; `sourceUrl`: `string`; `uid`: `string`; \} \| \{ `api`: `"tiktok-open.v2.research"`; `functionName`: `string`; `method`: `"POST"`; `path`: `string`; `sourceUrl`: `string`; `uid`: `string`; \} \| \{ `api`: `"tiktok-business.v1.3"`; `functionName`: `string`; `method`: `"GET"`; `path`: `string`; `sourceUrl`: `string`; `uid`: `string`; \} \| \{ `api`: `"tiktok-business.v1.3"`; `functionName`: `string`; `method`: `"POST"`; `path`: `string`; `sourceUrl`: `string`; `uid`: `string`; \})[] |
| <a id="property-source"></a> `source` | `"official TikTok Developers and TikTok Business API docs"` |
| <a id="property-sourceversion"></a> `sourceVersion` | `"TikTok Open API v2 + Business API v1.3 public docs checked 2026-06-21"` |
| <a id="property-strategy"></a> `strategy` | `"direct-http-support-slice"` |

***

### TIKTOK\_SELECTED\_OPERATION\_COUNT

```ts
const TIKTOK_SELECTED_OPERATION_COUNT: number;
```

***

### TIKTOK\_SELECTED\_OPERATIONS

```ts
const TIKTOK_SELECTED_OPERATIONS: (
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
```

## Functions

### createTikTokBusinessCommentReply()

```ts
function createTikTokBusinessCommentReply(input, defaultBusinessId?): {
[k: string]: TikTokSocialProviderExtensionValue;
};
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`TikTokCommentReplyInput`](#tiktokcommentreplyinput) |
| `defaultBusinessId?` | `string` |

#### Returns

```ts
{
[k: string]: TikTokSocialProviderExtensionValue;
}
```

***

### createTikTokSocialClient()

```ts
function createTikTokSocialClient(options): TikTokSocialClient;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`TikTokSocialClientOptions`](#tiktoksocialclientoptions) |

#### Returns

[`TikTokSocialClient`](#tiktoksocialclient)

***

### createTikTokSocialLiveChecks()

```ts
function createTikTokSocialLiveChecks(options): {
  description: string;
  id: string;
  requiredCredentialIds: string[];
  run: Promise<{
     details: {
        displayName: string;
        openId: string;
        username: string;
     };
  }>;
}[];
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`TikTokLiveCheckOptions`](#tiktoklivecheckoptions) |

#### Returns

\{
  `description`: `string`;
  `id`: `string`;
  `requiredCredentialIds`: `string`[];
  `run`: `Promise`\<\{
     `details`: \{
        `displayName`: `string`;
        `openId`: `string`;
        `username`: `string`;
     \};
  \}\>;
\}[]

***

### getTikTokGeneralDmSupport()

```ts
function getTikTokGeneralDmSupport(): TikTokGeneralDmSupport;
```

#### Returns

[`TikTokGeneralDmSupport`](#tiktokgeneraldmsupport)

***

### parseTikTokSignatureHeader()

```ts
function parseTikTokSignatureHeader(header): TikTokSignatureParts;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `header` | `string` |

#### Returns

[`TikTokSignatureParts`](#tiktoksignatureparts)

***

### parseTikTokWebhook()

```ts
function parseTikTokWebhook(request, options?): Promise<TikTokSignedWebhook>;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `request` | `Request` |
| `options?` | [`ParseTikTokWebhookOptions`](#parsetiktokwebhookoptions) |

#### Returns

`Promise`\<[`TikTokSignedWebhook`](#tiktoksignedwebhook)\>

***

### tiktokSocialCredentialStatuses()

```ts
function tiktokSocialCredentialStatuses(input): {
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
| `input` | [`TikTokCredentialStatusInput`](#tiktokcredentialstatusinput) |

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

### validateTikTokWebhookSignature()

```ts
function validateTikTokWebhookSignature(input): boolean;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`ValidateTikTokWebhookSignatureInput`](#validatetiktokwebhooksignatureinput) |

#### Returns

`boolean`

## References

### tiktokSocialProviderManifest

Re-exports [tiktokSocialProviderManifest](dist/manifest.md#tiktoksocialprovidermanifest)
