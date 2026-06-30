# integrations/community/forum/dist

## Interfaces

### ForumCommunityClient

#### Methods

##### createReply()

```ts
createReply(input): Promise<ForumCommunityProviderResponse>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`ForumCreateReplyInput`](#forumcreatereplyinput) |

###### Returns

`Promise`\<[`ForumCommunityProviderResponse`](#forumcommunityproviderresponse)\>

##### createTopic()

```ts
createTopic(input): Promise<ForumCommunityProviderResponse>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`ForumCreateTopicInput`](#forumcreatetopicinput) |

###### Returns

`Promise`\<[`ForumCommunityProviderResponse`](#forumcommunityproviderresponse)\>

##### getCurrentUser()

```ts
getCurrentUser(): Promise<ForumCommunityProviderResponse>;
```

###### Returns

`Promise`\<[`ForumCommunityProviderResponse`](#forumcommunityproviderresponse)\>

##### getPost()

```ts
getPost(postId): Promise<ForumCommunityProviderResponse>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `postId` | `number` |

###### Returns

`Promise`\<[`ForumCommunityProviderResponse`](#forumcommunityproviderresponse)\>

##### getTopic()

```ts
getTopic(topicId): Promise<ForumCommunityProviderResponse>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `topicId` | `number` |

###### Returns

`Promise`\<[`ForumCommunityProviderResponse`](#forumcommunityproviderresponse)\>

##### latest()

```ts
latest(): Promise<ForumCommunityProviderResponse>;
```

###### Returns

`Promise`\<[`ForumCommunityProviderResponse`](#forumcommunityproviderresponse)\>

##### search()

```ts
search(input): Promise<ForumCommunityProviderResponse>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`ForumSearchInput`](#forumsearchinput) |

###### Returns

`Promise`\<[`ForumCommunityProviderResponse`](#forumcommunityproviderresponse)\>

***

### ForumCommunityClientOptions

#### Extended by

- [`ForumCommunityIntegrationOptions`](#forumcommunityintegrationoptions)

#### Properties

##### apiKey?

```ts
optional apiKey?: string;
```

##### apiUsername?

```ts
optional apiUsername?: string;
```

##### baseUrl?

```ts
optional baseUrl?: string;
```

##### client?

```ts
optional client?: ForumCommunityClient;
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

##### providerClient?

```ts
optional providerClient?: ForumCommunityClient;
```

##### retry?

```ts
optional retry?: number | ProviderJsonRetryOptions;
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

### ForumCommunityIntegrationOptions

#### Extends

- [`ForumCommunityClientOptions`](#forumcommunityclientoptions)

#### Properties

##### apiKey?

```ts
optional apiKey?: string;
```

###### Inherited from

[`ForumCommunityClientOptions`](#forumcommunityclientoptions).[`apiKey`](#apikey)

##### apiUsername?

```ts
optional apiUsername?: string;
```

###### Inherited from

[`ForumCommunityClientOptions`](#forumcommunityclientoptions).[`apiUsername`](#apiusername)

##### baseUrl?

```ts
optional baseUrl?: string;
```

###### Inherited from

[`ForumCommunityClientOptions`](#forumcommunityclientoptions).[`baseUrl`](#baseurl)

##### client?

```ts
optional client?: ForumCommunityClient;
```

###### Inherited from

[`ForumCommunityClientOptions`](#forumcommunityclientoptions).[`client`](#client)

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

[`ForumCommunityClientOptions`](#forumcommunityclientoptions).[`fetch`](#fetch)

##### providerClient?

```ts
optional providerClient?: ForumCommunityClient;
```

###### Inherited from

[`ForumCommunityClientOptions`](#forumcommunityclientoptions).[`providerClient`](#providerclient)

##### retry?

```ts
optional retry?: number | ProviderJsonRetryOptions;
```

###### Inherited from

[`ForumCommunityClientOptions`](#forumcommunityclientoptions).[`retry`](#retry)

##### signal?

```ts
optional signal?: AbortSignal;
```

###### Inherited from

[`ForumCommunityClientOptions`](#forumcommunityclientoptions).[`signal`](#signal)

##### timeoutMs?

```ts
optional timeoutMs?: number;
```

###### Inherited from

[`ForumCommunityClientOptions`](#forumcommunityclientoptions).[`timeoutMs`](#timeoutms)

##### unavailableReason?

```ts
optional unavailableReason?: string;
```

***

### ForumCommunityJsonObject

#### Extended by

- [`ForumCommunityProviderExtensionFields`](#forumcommunityproviderextensionfields)
- [`ForumCommunityProviderResponse`](#forumcommunityproviderresponse)

#### Indexable

```ts
[key: string]: ForumCommunityProviderExtensionValue
```

***

### ForumCommunityProviderExtensionFields

#### Extends

- [`ForumCommunityJsonObject`](#forumcommunityjsonobject)

#### Indexable

```ts
[key: string]: ForumCommunityProviderExtensionValue
```

***

### ForumCommunityProviderResponse

#### Extends

- [`ForumCommunityJsonObject`](#forumcommunityjsonobject)

#### Indexable

```ts
[key: string]: ForumCommunityProviderExtensionValue
```

***

### ForumCreateReplyInput

#### Properties

##### raw

```ts
raw: string;
```

##### replyToPostNumber?

```ts
optional replyToPostNumber?: number;
```

##### topicId

```ts
topicId: number;
```

***

### ForumCreateTopicInput

#### Properties

##### archetype?

```ts
optional archetype?: string;
```

##### category?

```ts
optional category?: number;
```

##### createdAt?

```ts
optional createdAt?: string;
```

##### raw

```ts
raw: string;
```

##### tags?

```ts
optional tags?: string[];
```

##### title

```ts
title: string;
```

***

### ForumCredentialStatusInput

#### Properties

##### apiKeyConfigured?

```ts
optional apiKeyConfigured?: boolean;
```

##### apiUsername?

```ts
optional apiUsername?: string;
```

##### baseUrl?

```ts
optional baseUrl?: string;
```

##### scopes?

```ts
optional scopes?: string[];
```

##### webhookSecretConfigured?

```ts
optional webhookSecretConfigured?: boolean;
```

***

### ForumLiveCheckOptions

#### Properties

##### client?

```ts
optional client?: Pick<ForumCommunityClient, "getCurrentUser" | "latest">;
```

##### unavailableReason?

```ts
optional unavailableReason?: string;
```

***

### ForumSearchInput

#### Properties

##### page?

```ts
optional page?: number;
```

##### query

```ts
query: string;
```

***

### ForumWebhookPayload

#### Indexable

```ts
[key: string]: ForumCommunityProviderExtensionValue
```

#### Properties

##### event?

```ts
optional event?: string;
```

##### eventType?

```ts
optional eventType?: string;
```

##### post?

```ts
optional post?: ForumCommunityJsonObject;
```

##### topic?

```ts
optional topic?: ForumCommunityJsonObject;
```

##### user?

```ts
optional user?: ForumCommunityJsonObject;
```

***

### ParseForumWebhookOperationInput

#### Properties

##### options?

```ts
optional options?: ParseForumWebhookOptions;
```

##### request

```ts
request: Request;
```

***

### ParseForumWebhookOptions

#### Properties

##### rawBody?

```ts
optional rawBody?: string;
```

##### requireSignature?

```ts
optional requireSignature?: boolean;
```

##### secret?

```ts
optional secret?: string;
```

***

### ProviderJsonRetryOptions

#### Properties

##### attempts?

```ts
optional attempts?: number;
```

##### baseDelayMs?

```ts
optional baseDelayMs?: number;
```

##### maxDelayMs?

```ts
optional maxDelayMs?: number;
```

##### statusCodes?

```ts
optional statusCodes?: readonly number[];
```

## Type Aliases

### ForumCommunityJsonPrimitive

```ts
type ForumCommunityJsonPrimitive = string | number | boolean | null;
```

***

### ForumCommunityJsonValue

```ts
type ForumCommunityJsonValue =
  | ForumCommunityJsonPrimitive
  | ForumCommunityJsonObject
  | readonly ForumCommunityJsonValue[];
```

***

### ForumCommunityProviderClient

```ts
type ForumCommunityProviderClient = ForumCommunityClient;
```

***

### ForumCommunityProviderExtensionValue

```ts
type ForumCommunityProviderExtensionValue =
  | ForumCommunityJsonValue
  | object
  | undefined;
```

***

### ForumCommunityProviderPayload

```ts
type ForumCommunityProviderPayload = ForumCommunityJsonObject | object;
```

***

### ForumCommunityProviderQuery

```ts
type ForumCommunityProviderQuery = Record<string, ForumCommunityProviderExtensionValue>;
```

## Functions

### createForumCommunityClient()

```ts
function createForumCommunityClient(options?): ForumCommunityClient;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options?` | [`ForumCommunityClientOptions`](#forumcommunityclientoptions) |

#### Returns

[`ForumCommunityClient`](#forumcommunityclient)

***

### createForumCommunityIntegration()

```ts
function createForumCommunityIntegration(options?): DefinedIntegration<never, unknown, never>;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options?` | [`ForumCommunityIntegrationOptions`](#forumcommunityintegrationoptions) |

#### Returns

[`DefinedIntegration`](../../../packages/integration-kit/dist.md#definedintegration)\<`never`, `unknown`, `never`\>

***

### createForumCommunityLiveChecks()

```ts
function createForumCommunityLiveChecks(options?): {
  description: string;
  id: string;
  requiredCredentialIds: string[];
  run: Promise<{
     details: {
        id: number;
        username: string;
     };
  }>;
}[];
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options?` | [`ForumLiveCheckOptions`](#forumlivecheckoptions) |

#### Returns

\{
  `description`: `string`;
  `id`: `string`;
  `requiredCredentialIds`: `string`[];
  `run`: `Promise`\<\{
     `details`: \{
        `id`: `number`;
        `username`: `string`;
     \};
  \}\>;
\}[]

***

### createForumCommunityUnavailableClient()

```ts
function createForumCommunityUnavailableClient(reason?): ForumCommunityClient;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `reason?` | `string` |

#### Returns

[`ForumCommunityClient`](#forumcommunityclient)

***

### forumCommunityCredentialStatuses()

```ts
function forumCommunityCredentialStatuses(input): {
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
| `input` | [`ForumCredentialStatusInput`](#forumcredentialstatusinput) |

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

### parseForumWebhook()

```ts
function parseForumWebhook(request, options?): Promise<ForumWebhookPayload>;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `request` | `Request` |
| `options?` | [`ParseForumWebhookOptions`](#parseforumwebhookoptions) |

#### Returns

`Promise`\<[`ForumWebhookPayload`](#forumwebhookpayload)\>

***

### validateForumWebhookSignature()

```ts
function validateForumWebhookSignature(input): boolean;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | \{ `rawBody`: `string`; `secret`: `string`; `signature`: `string`; \} |
| `input.rawBody` | `string` |
| `input.secret` | `string` |
| `input.signature` | `string` |

#### Returns

`boolean`

## References

### forumCommunityProviderManifest

Re-exports [forumCommunityProviderManifest](dist/manifest.md#forumcommunityprovidermanifest)
