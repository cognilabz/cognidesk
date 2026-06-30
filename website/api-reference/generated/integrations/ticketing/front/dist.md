# integrations/ticketing/front/dist

## Interfaces

### FrontTicketingClientOptions

#### Extended by

- [`FrontTicketingIntegrationOptions`](#frontticketingintegrationoptions)

#### Properties

##### accessToken?

```ts
optional accessToken?: string;
```

##### apiKey?

```ts
optional apiKey?: string;
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

##### providerClient?

```ts
optional providerClient?: FrontTicketingProviderClient;
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

### FrontTicketingIntegrationOptions

#### Extends

- [`FrontTicketingClientOptions`](#frontticketingclientoptions)

#### Properties

##### accessToken?

```ts
optional accessToken?: string;
```

###### Inherited from

[`FrontTicketingClientOptions`](#frontticketingclientoptions).[`accessToken`](#accesstoken)

##### apiKey?

```ts
optional apiKey?: string;
```

###### Inherited from

[`FrontTicketingClientOptions`](#frontticketingclientoptions).[`apiKey`](#apikey)

##### baseUrl?

```ts
optional baseUrl?: string;
```

###### Inherited from

[`FrontTicketingClientOptions`](#frontticketingclientoptions).[`baseUrl`](#baseurl)

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

[`FrontTicketingClientOptions`](#frontticketingclientoptions).[`fetch`](#fetch)

##### providerClient?

```ts
optional providerClient?: FrontTicketingProviderClient;
```

###### Inherited from

[`FrontTicketingClientOptions`](#frontticketingclientoptions).[`providerClient`](#providerclient)

##### retry?

```ts
optional retry?: number | ProviderJsonRetryOptions;
```

###### Inherited from

[`FrontTicketingClientOptions`](#frontticketingclientoptions).[`retry`](#retry)

##### signal?

```ts
optional signal?: AbortSignal;
```

###### Inherited from

[`FrontTicketingClientOptions`](#frontticketingclientoptions).[`signal`](#signal)

##### timeoutMs?

```ts
optional timeoutMs?: number;
```

###### Inherited from

[`FrontTicketingClientOptions`](#frontticketingclientoptions).[`timeoutMs`](#timeoutms)

***

### FrontTicketingProviderClient

#### Properties

##### rawClient?

```ts
optional rawClient?: unknown;
```

#### Methods

##### addComment()

```ts
addComment(conversationId, payload): Promise<JsonObject>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `conversationId` | `string` |
| `payload` | [`JsonObject`](#jsonobject) |

###### Returns

`Promise`\<[`JsonObject`](#jsonobject)\>

##### createMessage()

```ts
createMessage(channelId, payload): Promise<JsonObject>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `channelId` | `string` |
| `payload` | [`JsonObject`](#jsonobject) |

###### Returns

`Promise`\<[`JsonObject`](#jsonobject)\>

##### getConversation()

```ts
getConversation(conversationId): Promise<JsonObject>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `conversationId` | `string` |

###### Returns

`Promise`\<[`JsonObject`](#jsonobject)\>

##### listComments()

```ts
listComments(conversationId): Promise<JsonObject>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `conversationId` | `string` |

###### Returns

`Promise`\<[`JsonObject`](#jsonobject)\>

##### listMessages()

```ts
listMessages(conversationId, query?): Promise<JsonObject>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `conversationId` | `string` |
| `query?` | [`JsonObject`](#jsonobject) |

###### Returns

`Promise`\<[`JsonObject`](#jsonobject)\>

##### rawRequest()?

```ts
optional rawRequest<T>(operation, input?): Promise<T>;
```

###### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | [`JsonValue`](#jsonvalue) |

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `operation` | `string` |
| `input?` | `unknown` |

###### Returns

`Promise`\<`T`\>

##### readiness()

```ts
readiness(): Promise<JsonObject>;
```

###### Returns

`Promise`\<[`JsonObject`](#jsonobject)\>

##### replyToConversation()

```ts
replyToConversation(conversationId, payload): Promise<JsonObject>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `conversationId` | `string` |
| `payload` | [`JsonObject`](#jsonobject) |

###### Returns

`Promise`\<[`JsonObject`](#jsonobject)\>

##### searchConversations()

```ts
searchConversations(query, options?): Promise<JsonObject>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `query` | `string` |
| `options?` | [`JsonObject`](#jsonobject) |

###### Returns

`Promise`\<[`JsonObject`](#jsonobject)\>

##### updateConversation()

```ts
updateConversation(conversationId, patch): Promise<JsonObject>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `conversationId` | `string` |
| `patch` | [`JsonObject`](#jsonobject) |

###### Returns

`Promise`\<[`JsonObject`](#jsonobject)\>

***

### JsonObject

#### Indexable

```ts
[key: string]: JsonValue
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

### JsonPrimitive

```ts
type JsonPrimitive = string | number | boolean | null;
```

***

### JsonValue

```ts
type JsonValue =
  | JsonPrimitive
  | JsonObject
  | JsonValue[];
```

## Functions

### createFrontTicketingClient()

```ts
function createFrontTicketingClient(options?): FrontTicketingProviderClient;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options?` | [`FrontTicketingClientOptions`](#frontticketingclientoptions) |

#### Returns

[`FrontTicketingProviderClient`](#frontticketingproviderclient)

***

### createFrontTicketingIntegration()

```ts
function createFrontTicketingIntegration(options?): DefinedIntegration<{
  capabilities: [{
     capability: "create-provider-object";
     changesWorkflow: true;
     exposesSensitiveData: true;
     providerObjects: [{
        kind: "frontConversation";
        label: "Front Conversation";
      }, {
        kind: "frontMessage";
        label: "Front Message";
      }, {
        kind: "frontComment";
        label: "Front Comment";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     capability: "read-provider-object";
     exposesSensitiveData: true;
     providerObjects: [{
        kind: "frontConversation";
        label: "Front Conversation";
      }, {
        kind: "frontMessage";
        label: "Front Message";
      }, {
        kind: "frontComment";
        label: "Front Comment";
     }];
     requiresCredential: true;
   }, {
     capability: "update-provider-object";
     changesWorkflow: true;
     exposesSensitiveData: true;
     providerObjects: [{
        kind: "frontConversation";
        label: "Front Conversation";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     capability: "search-provider-object";
     exposesSensitiveData: true;
     providerObjects: [{
        kind: "frontConversation";
        label: "Front Conversation";
     }];
     requiresCredential: true;
   }, {
     capability: "handoff";
     changesWorkflow: true;
     exposesSensitiveData: true;
     providerObjects: [{
        kind: "frontConversation";
        label: "Front Conversation";
      }, {
        kind: "frontMessage";
        label: "Front Message";
      }, {
        kind: "frontComment";
        label: "Front Comment";
     }];
     requiresCredential: true;
     sideEffect: true;
  }];
  category: "ticketing";
  channelAudiences: ["customer-facing", "internal-support", "mixed"];
  coverage: {
     evidence: [{
        label: "Front Core API overview";
        url: "https://dev.frontapp.com/docs/core-api-overview";
      }, {
        label: "Front API overview";
        url: "https://help.front.com/en/articles/2482";
      }, {
        label: "Front Create message";
        url: "https://dev.frontapp.com/reference/create-message";
      }, {
        label: "Front Create conversation reply";
        url: "https://dev.frontapp.com/reference/create-message-reply";
     }];
     notes: ["Runtime calls use the built-in Front REST adapter by default because no viable maintained backend Core/Channel API JavaScript client was verified.", "Coverage is limited to selected Front conversation, message, comment, search, update, and teammate readiness operations for support workflows.", "A host-provided FrontTicketingProviderClient can still override the built-in REST adapter.", "This package intentionally does not copy the old generated full Front Core/Channel API clone."];
     scope: "support-workflow-subset";
  };
  credentialRequirements: [{
     id: "front-base-url";
     label: "Front API base URL";
     metadata: {
        defaultValue: "https://api2.frontapp.com";
        requiredWhen: "using-built-in-rest-adapter";
     };
     required: false;
   }, {
     id: "front-api-access";
     label: "Front API access token or API key";
     metadata: {
        requiredWhen: "using-built-in-rest-adapter";
        scopeKind: "provider-oauth-scopes";
     };
     required: false;
     scopes: ["conversations:read", "conversations:write", "messages:send", "messages:read", "comments:write", "comments:read", "teammates:read"];
  }];
  directions: ["bidirectional"];
  id: "ticketing.front";
  limitations: ["Inbox IDs, channel IDs, teammate assignment, tags, message visibility, credentials, retries, pagination, and API base URL selection are SDK-user configuration. Multipart attachments are rejected by JSON operation helpers and require SDK-user direct multipart handling."];
  maintainers: [{
     name: "Cognidesk";
     type: "official";
  }];
  metadata: {
     checkedProviderSdk: {
        candidates: readonly [{
           checkedVersion: "0.8.2";
           package: "front-sdk";
           reason: "The npm package is deprecated and reports that its GitHub repository has been archived.";
           result: "rejected-deprecated-archived";
         }, {
           checkedVersion: "1.10.0";
           package: "@frontapp/plugin-sdk";
           reason: "The package is the Front UI/plugin SDK, not a backend Core/Channel API client for support ticketing operations.";
           result: "not-runtime-core-api-client";
         }, {
           checkedVersion: "1.2.1";
           package: "front-chat-sdk";
           reason: "The package targets Front Chat SDK use cases rather than Core/Channel API ticketing operations.";
           result: "not-ticketing-core-api-client";
         }, {
           checkedVersion: "1.0.0-20260530.2-dev.646adf4";
           package: "@utdk/front";
           reason: "The package is a third-party generated preview from Front's OpenAPI spec; the packed types expose an empty FrontClient and its source imports ../client.js outside the package contents, so it is not a viable maintained typed runtime client dependency.";
           result: "rejected-generated-preview-incomplete-runtime-client";
        }];
        checkedAt: "2026-06-25";
     };
     frontCoreChannelCoverage: {
        allowlistedOperations: readonly ["messages.create", "conversations.reply", "conversations.read", "conversations.update", "conversations.search", "conversation_messages.list", "comments.create", "comments.list", "teammates.list"];
        source: "Built-in Front Core and Channel REST adapter";
     };
     implementation: {
        manifestImport: "no-sdk-client-initialization";
        packageOwnedRestClient: true;
        providerClientInterface: "FrontTicketingProviderClient";
        providerClientOverride: true;
        runtimePackage: "@cognidesk/integration-ticketing-front";
        strategy: "provider-rest-adapter";
     };
     implementationStrategy: "provider-rest-adapter";
     issue: 35;
     sdkDecision: "no-official-sdk-rest-adapter";
  };
  name: "Front";
  operations: [{
     alias: "ticket.create";
     capability: "create-provider-object";
     changesWorkflow: true;
     exposesSensitiveData: true;
     externallyVisible: true;
     providerObject: "ticket";
     providerOperation: "POST /channels/{channel_id}/messages";
     sideEffect: true;
   }, {
     alias: "ticket.read";
     capability: "read-provider-object";
     exposesSensitiveData: true;
     providerObject: "ticket";
     providerOperation: "GET /conversations/{conversation_id}";
   }, {
     alias: "ticket.update";
     capability: "update-provider-object";
     changesWorkflow: true;
     exposesSensitiveData: true;
     providerObject: "ticket";
     providerOperation: "PATCH /conversations/{conversation_id}";
     sideEffect: true;
  }];
  packageName: "@cognidesk/integration-ticketing-front";
  privacyNotes: ["Front conversations can contain customer messages, teammate comments, inbox routing, tags, links, and assignment context."];
  provider: "front";
  trustLevel: "official";
}, unknown, {
  front.comment.list: (input) => Promise<JsonObject>;
  front.message.list: (input) => Promise<JsonObject>;
  front.readiness: () => Promise<JsonObject>;
  ticket.comment.create: (input) => Promise<JsonObject>;
  ticket.create: (input) => Promise<JsonObject>;
  ticket.internalNote.create: (input) => Promise<JsonObject>;
  ticket.read: (input) => Promise<JsonObject>;
  ticket.search: (input) => Promise<JsonObject>;
  ticket.update: (input) => Promise<JsonObject>;
}>;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options?` | [`FrontTicketingIntegrationOptions`](#frontticketingintegrationoptions) |

#### Returns

[`DefinedIntegration`](../../../packages/integration-kit/dist.md#definedintegration)\<\{
  `capabilities`: \[\{
     `capability`: `"create-provider-object"`;
     `changesWorkflow`: `true`;
     `exposesSensitiveData`: `true`;
     `providerObjects`: \[\{
        `kind`: `"frontConversation"`;
        `label`: `"Front Conversation"`;
      \}, \{
        `kind`: `"frontMessage"`;
        `label`: `"Front Message"`;
      \}, \{
        `kind`: `"frontComment"`;
        `label`: `"Front Comment"`;
     \}\];
     `requiresCredential`: `true`;
     `sideEffect`: `true`;
   \}, \{
     `capability`: `"read-provider-object"`;
     `exposesSensitiveData`: `true`;
     `providerObjects`: \[\{
        `kind`: `"frontConversation"`;
        `label`: `"Front Conversation"`;
      \}, \{
        `kind`: `"frontMessage"`;
        `label`: `"Front Message"`;
      \}, \{
        `kind`: `"frontComment"`;
        `label`: `"Front Comment"`;
     \}\];
     `requiresCredential`: `true`;
   \}, \{
     `capability`: `"update-provider-object"`;
     `changesWorkflow`: `true`;
     `exposesSensitiveData`: `true`;
     `providerObjects`: \[\{
        `kind`: `"frontConversation"`;
        `label`: `"Front Conversation"`;
     \}\];
     `requiresCredential`: `true`;
     `sideEffect`: `true`;
   \}, \{
     `capability`: `"search-provider-object"`;
     `exposesSensitiveData`: `true`;
     `providerObjects`: \[\{
        `kind`: `"frontConversation"`;
        `label`: `"Front Conversation"`;
     \}\];
     `requiresCredential`: `true`;
   \}, \{
     `capability`: `"handoff"`;
     `changesWorkflow`: `true`;
     `exposesSensitiveData`: `true`;
     `providerObjects`: \[\{
        `kind`: `"frontConversation"`;
        `label`: `"Front Conversation"`;
      \}, \{
        `kind`: `"frontMessage"`;
        `label`: `"Front Message"`;
      \}, \{
        `kind`: `"frontComment"`;
        `label`: `"Front Comment"`;
     \}\];
     `requiresCredential`: `true`;
     `sideEffect`: `true`;
  \}\];
  `category`: `"ticketing"`;
  `channelAudiences`: \[`"customer-facing"`, `"internal-support"`, `"mixed"`\];
  `coverage`: \{
     `evidence`: \[\{
        `label`: `"Front Core API overview"`;
        `url`: `"https://dev.frontapp.com/docs/core-api-overview"`;
      \}, \{
        `label`: `"Front API overview"`;
        `url`: `"https://help.front.com/en/articles/2482"`;
      \}, \{
        `label`: `"Front Create message"`;
        `url`: `"https://dev.frontapp.com/reference/create-message"`;
      \}, \{
        `label`: `"Front Create conversation reply"`;
        `url`: `"https://dev.frontapp.com/reference/create-message-reply"`;
     \}\];
     `notes`: \[`"Runtime calls use the built-in Front REST adapter by default because no viable maintained backend Core/Channel API JavaScript client was verified."`, `"Coverage is limited to selected Front conversation, message, comment, search, update, and teammate readiness operations for support workflows."`, `"A host-provided FrontTicketingProviderClient can still override the built-in REST adapter."`, `"This package intentionally does not copy the old generated full Front Core/Channel API clone."`\];
     `scope`: `"support-workflow-subset"`;
  \};
  `credentialRequirements`: \[\{
     `id`: `"front-base-url"`;
     `label`: `"Front API base URL"`;
     `metadata`: \{
        `defaultValue`: `"https://api2.frontapp.com"`;
        `requiredWhen`: `"using-built-in-rest-adapter"`;
     \};
     `required`: `false`;
   \}, \{
     `id`: `"front-api-access"`;
     `label`: `"Front API access token or API key"`;
     `metadata`: \{
        `requiredWhen`: `"using-built-in-rest-adapter"`;
        `scopeKind`: `"provider-oauth-scopes"`;
     \};
     `required`: `false`;
     `scopes`: \[`"conversations:read"`, `"conversations:write"`, `"messages:send"`, `"messages:read"`, `"comments:write"`, `"comments:read"`, `"teammates:read"`\];
  \}\];
  `directions`: \[`"bidirectional"`\];
  `id`: `"ticketing.front"`;
  `limitations`: \[`"Inbox IDs, channel IDs, teammate assignment, tags, message visibility, credentials, retries, pagination, and API base URL selection are SDK-user configuration. Multipart attachments are rejected by JSON operation helpers and require SDK-user direct multipart handling."`\];
  `maintainers`: \[\{
     `name`: `"Cognidesk"`;
     `type`: `"official"`;
  \}\];
  `metadata`: \{
     `checkedProviderSdk`: \{
        `candidates`: readonly \[\{
           `checkedVersion`: `"0.8.2"`;
           `package`: `"front-sdk"`;
           `reason`: `"The npm package is deprecated and reports that its GitHub repository has been archived."`;
           `result`: `"rejected-deprecated-archived"`;
         \}, \{
           `checkedVersion`: `"1.10.0"`;
           `package`: `"@frontapp/plugin-sdk"`;
           `reason`: `"The package is the Front UI/plugin SDK, not a backend Core/Channel API client for support ticketing operations."`;
           `result`: `"not-runtime-core-api-client"`;
         \}, \{
           `checkedVersion`: `"1.2.1"`;
           `package`: `"front-chat-sdk"`;
           `reason`: `"The package targets Front Chat SDK use cases rather than Core/Channel API ticketing operations."`;
           `result`: `"not-ticketing-core-api-client"`;
         \}, \{
           `checkedVersion`: `"1.0.0-20260530.2-dev.646adf4"`;
           `package`: `"@utdk/front"`;
           `reason`: `"The package is a third-party generated preview from Front's OpenAPI spec; the packed types expose an empty FrontClient and its source imports ../client.js outside the package contents, so it is not a viable maintained typed runtime client dependency."`;
           `result`: `"rejected-generated-preview-incomplete-runtime-client"`;
        \}\];
        `checkedAt`: `"2026-06-25"`;
     \};
     `frontCoreChannelCoverage`: \{
        `allowlistedOperations`: readonly \[`"messages.create"`, `"conversations.reply"`, `"conversations.read"`, `"conversations.update"`, `"conversations.search"`, `"conversation_messages.list"`, `"comments.create"`, `"comments.list"`, `"teammates.list"`\];
        `source`: `"Built-in Front Core and Channel REST adapter"`;
     \};
     `implementation`: \{
        `manifestImport`: `"no-sdk-client-initialization"`;
        `packageOwnedRestClient`: `true`;
        `providerClientInterface`: `"FrontTicketingProviderClient"`;
        `providerClientOverride`: `true`;
        `runtimePackage`: `"@cognidesk/integration-ticketing-front"`;
        `strategy`: `"provider-rest-adapter"`;
     \};
     `implementationStrategy`: `"provider-rest-adapter"`;
     `issue`: `35`;
     `sdkDecision`: `"no-official-sdk-rest-adapter"`;
  \};
  `name`: `"Front"`;
  `operations`: \[\{
     `alias`: `"ticket.create"`;
     `capability`: `"create-provider-object"`;
     `changesWorkflow`: `true`;
     `exposesSensitiveData`: `true`;
     `externallyVisible`: `true`;
     `providerObject`: `"ticket"`;
     `providerOperation`: `"POST /channels/{channel_id}/messages"`;
     `sideEffect`: `true`;
   \}, \{
     `alias`: `"ticket.read"`;
     `capability`: `"read-provider-object"`;
     `exposesSensitiveData`: `true`;
     `providerObject`: `"ticket"`;
     `providerOperation`: `"GET /conversations/{conversation_id}"`;
   \}, \{
     `alias`: `"ticket.update"`;
     `capability`: `"update-provider-object"`;
     `changesWorkflow`: `true`;
     `exposesSensitiveData`: `true`;
     `providerObject`: `"ticket"`;
     `providerOperation`: `"PATCH /conversations/{conversation_id}"`;
     `sideEffect`: `true`;
  \}\];
  `packageName`: `"@cognidesk/integration-ticketing-front"`;
  `privacyNotes`: \[`"Front conversations can contain customer messages, teammate comments, inbox routing, tags, links, and assignment context."`\];
  `provider`: `"front"`;
  `trustLevel`: `"official"`;
\}, `unknown`, \{
  `front.comment.list`: (`input`) => `Promise`\<[`JsonObject`](#jsonobject)\>;
  `front.message.list`: (`input`) => `Promise`\<[`JsonObject`](#jsonobject)\>;
  `front.readiness`: () => `Promise`\<[`JsonObject`](#jsonobject)\>;
  `ticket.comment.create`: (`input`) => `Promise`\<[`JsonObject`](#jsonobject)\>;
  `ticket.create`: (`input`) => `Promise`\<[`JsonObject`](#jsonobject)\>;
  `ticket.internalNote.create`: (`input`) => `Promise`\<[`JsonObject`](#jsonobject)\>;
  `ticket.read`: (`input`) => `Promise`\<[`JsonObject`](#jsonobject)\>;
  `ticket.search`: (`input`) => `Promise`\<[`JsonObject`](#jsonobject)\>;
  `ticket.update`: (`input`) => `Promise`\<[`JsonObject`](#jsonobject)\>;
\}\>

***

### createFrontTicketingOperationHandlers()

```ts
function createFrontTicketingOperationHandlers(options?): {
  front.comment.list: (input) => Promise<JsonObject>;
  front.message.list: (input) => Promise<JsonObject>;
  front.readiness: () => Promise<JsonObject>;
  ticket.comment.create: (input) => Promise<JsonObject>;
  ticket.create: (input) => Promise<JsonObject>;
  ticket.internalNote.create: (input) => Promise<JsonObject>;
  ticket.read: (input) => Promise<JsonObject>;
  ticket.search: (input) => Promise<JsonObject>;
  ticket.update: (input) => Promise<JsonObject>;
};
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options?` | [`FrontTicketingIntegrationOptions`](#frontticketingintegrationoptions) |

#### Returns

```ts
{
  front.comment.list: (input) => Promise<JsonObject>;
  front.message.list: (input) => Promise<JsonObject>;
  front.readiness: () => Promise<JsonObject>;
  ticket.comment.create: (input) => Promise<JsonObject>;
  ticket.create: (input) => Promise<JsonObject>;
  ticket.internalNote.create: (input) => Promise<JsonObject>;
  ticket.read: (input) => Promise<JsonObject>;
  ticket.search: (input) => Promise<JsonObject>;
  ticket.update: (input) => Promise<JsonObject>;
}
```

| Name | Type |
| ------ | ------ |
| `front.comment.list()` | (`input`) => `Promise`\<[`JsonObject`](#jsonobject)\> |
| `front.message.list()` | (`input`) => `Promise`\<[`JsonObject`](#jsonobject)\> |
| `front.readiness()` | () => `Promise`\<[`JsonObject`](#jsonobject)\> |
| `ticket.comment.create()` | (`input`) => `Promise`\<[`JsonObject`](#jsonobject)\> |
| `ticket.create()` | (`input`) => `Promise`\<[`JsonObject`](#jsonobject)\> |
| `ticket.internalNote.create()` | (`input`) => `Promise`\<[`JsonObject`](#jsonobject)\> |
| `ticket.read()` | (`input`) => `Promise`\<[`JsonObject`](#jsonobject)\> |
| `ticket.search()` | (`input`) => `Promise`\<[`JsonObject`](#jsonobject)\> |
| `ticket.update()` | (`input`) => `Promise`\<[`JsonObject`](#jsonobject)\> |

## References

### frontTicketingProviderManifest

Re-exports [frontTicketingProviderManifest](dist/manifest.md#frontticketingprovidermanifest)
