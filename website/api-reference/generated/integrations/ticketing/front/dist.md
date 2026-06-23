# integrations/ticketing/front/dist

## Interfaces

### FrontTicketingClientOptions

#### Properties

##### accessToken?

```ts
optional accessToken?: string;
```

##### apiBaseUrl?

```ts
optional apiBaseUrl?: string;
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

***

### JsonObject

#### Indexable

```ts
[key: string]: JsonValue
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
function createFrontTicketingClient(options?): {
  getConversation: (conversationId) => Promise<JsonObject>;
  listComments: (conversationId) => Promise<JsonObject>;
  listMessages: (conversationId, query?) => Promise<JsonObject>;
  rawRequest: <T>(path, init?) => Promise<T>;
  readiness: () => Promise<JsonObject>;
  searchConversations: (query, options?) => Promise<JsonObject>;
  updateConversation: (conversationId, patch) => Promise<JsonObject>;
  addComment: Promise<JsonObject>;
  createMessage: Promise<JsonObject>;
  replyToConversation: Promise<JsonObject>;
};
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options?` | [`FrontTicketingClientOptions`](#frontticketingclientoptions) |

#### Returns

```ts
{
  getConversation: (conversationId) => Promise<JsonObject>;
  listComments: (conversationId) => Promise<JsonObject>;
  listMessages: (conversationId, query?) => Promise<JsonObject>;
  rawRequest: <T>(path, init?) => Promise<T>;
  readiness: () => Promise<JsonObject>;
  searchConversations: (query, options?) => Promise<JsonObject>;
  updateConversation: (conversationId, patch) => Promise<JsonObject>;
  addComment: Promise<JsonObject>;
  createMessage: Promise<JsonObject>;
  replyToConversation: Promise<JsonObject>;
}
```

| Name | Type |
| ------ | ------ |
| `getConversation()` | (`conversationId`) => `Promise`\<[`JsonObject`](#jsonobject)\> |
| `listComments()` | (`conversationId`) => `Promise`\<[`JsonObject`](#jsonobject)\> |
| `listMessages()` | (`conversationId`, `query?`) => `Promise`\<[`JsonObject`](#jsonobject)\> |
| `rawRequest()` | \<`T`\>(`path`, `init?`) => `Promise`\<`T`\> |
| `readiness()` | () => `Promise`\<[`JsonObject`](#jsonobject)\> |
| `searchConversations()` | (`query`, `options?`) => `Promise`\<[`JsonObject`](#jsonobject)\> |
| `updateConversation()` | (`conversationId`, `patch`) => `Promise`\<[`JsonObject`](#jsonobject)\> |
| `addComment()` | (`conversationId`, `payload`) => `Promise`\<[`JsonObject`](#jsonobject)\> |
| `createMessage()` | (`channelId`, `payload`) => `Promise`\<[`JsonObject`](#jsonobject)\> |
| `replyToConversation()` | (`conversationId`, `payload`) => `Promise`\<[`JsonObject`](#jsonobject)\> |

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
     notes: ["SDK decision: no viable official maintained backend JavaScript client was verified. The deprecated front-sdk package is not adopted.", "Coverage is limited to selected Front Core/Channel API conversation, message, comment, search, update, and teammate readiness operations for support workflows.", "This package intentionally does not copy the old generated full Front Core/Channel API clone."];
     scope: "provider-api-subset";
  };
  credentialRequirements: [{
     id: "front-api-access";
     label: "Front API token";
     metadata: {
        scopeKind: "provider-oauth-scopes";
     };
     required: true;
     scopes: ["conversations:read", "conversations:write", "messages:send", "messages:read", "comments:write", "comments:read", "teammates:read"];
  }];
  directions: ["bidirectional"];
  id: "ticketing.front";
  limitations: ["Inbox IDs, channel IDs, teammate assignment, tags, and message visibility are SDK-user configuration. Multipart attachments are rejected by JSON helpers and require SDK-user direct multipart handling."];
  maintainers: [{
     name: "Cognidesk";
     type: "official";
  }];
  metadata: {
     implementationStrategy: "direct-http-support-slice";
     issue: 35;
     sdkDecision: {
        candidates: readonly ["front-sdk", "Front Plugin SDK"];
        checkedAt: "2026-06-21";
        reason: "front-sdk is deprecated and the official Plugin SDK is not a backend Core API client.";
        verdict: "not-adopted";
     };
     supportSlice: {
        allowlistedOperations: readonly ["messages.create", "conversations.reply", "conversations.read", "conversations.update", "conversations.search", "conversation_messages.list", "comments.create", "comments.list", "teammates.list"];
        source: "Front Core and Channel APIs";
     };
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
| `options?` | [`FrontTicketingClientOptions`](#frontticketingclientoptions) |

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
     `notes`: \[`"SDK decision: no viable official maintained backend JavaScript client was verified. The deprecated front-sdk package is not adopted."`, `"Coverage is limited to selected Front Core/Channel API conversation, message, comment, search, update, and teammate readiness operations for support workflows."`, `"This package intentionally does not copy the old generated full Front Core/Channel API clone."`\];
     `scope`: `"provider-api-subset"`;
  \};
  `credentialRequirements`: \[\{
     `id`: `"front-api-access"`;
     `label`: `"Front API token"`;
     `metadata`: \{
        `scopeKind`: `"provider-oauth-scopes"`;
     \};
     `required`: `true`;
     `scopes`: \[`"conversations:read"`, `"conversations:write"`, `"messages:send"`, `"messages:read"`, `"comments:write"`, `"comments:read"`, `"teammates:read"`\];
  \}\];
  `directions`: \[`"bidirectional"`\];
  `id`: `"ticketing.front"`;
  `limitations`: \[`"Inbox IDs, channel IDs, teammate assignment, tags, and message visibility are SDK-user configuration. Multipart attachments are rejected by JSON helpers and require SDK-user direct multipart handling."`\];
  `maintainers`: \[\{
     `name`: `"Cognidesk"`;
     `type`: `"official"`;
  \}\];
  `metadata`: \{
     `implementationStrategy`: `"direct-http-support-slice"`;
     `issue`: `35`;
     `sdkDecision`: \{
        `candidates`: readonly \[`"front-sdk"`, `"Front Plugin SDK"`\];
        `checkedAt`: `"2026-06-21"`;
        `reason`: `"front-sdk is deprecated and the official Plugin SDK is not a backend Core API client."`;
        `verdict`: `"not-adopted"`;
     \};
     `supportSlice`: \{
        `allowlistedOperations`: readonly \[`"messages.create"`, `"conversations.reply"`, `"conversations.read"`, `"conversations.update"`, `"conversations.search"`, `"conversation_messages.list"`, `"comments.create"`, `"comments.list"`, `"teammates.list"`\];
        `source`: `"Front Core and Channel APIs"`;
     \};
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

## References

### frontTicketingProviderManifest

Re-exports [frontTicketingProviderManifest](dist/manifest.md#frontticketingprovidermanifest)
