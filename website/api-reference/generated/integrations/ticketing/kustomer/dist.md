# integrations/ticketing/kustomer/dist

## Interfaces

### JsonObject

#### Indexable

```ts
[key: string]: JsonValue
```

***

### KustomerTicketingClientOptions

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

### createKustomerTicketingClient()

```ts
function createKustomerTicketingClient(options?): {
  createConversation: (payload) => Promise<JsonObject>;
  getConversation: (conversationId) => Promise<JsonObject>;
  listConversations: (query?) => Promise<JsonObject>;
  listMessages: (query?) => Promise<JsonObject>;
  rawRequest: <T>(path, init?) => Promise<T>;
  readiness: () => Promise<JsonObject>;
  updateConversation: (conversationId, patch) => Promise<JsonObject>;
  createCustomerDraft: Promise<JsonObject>;
  createMessage: Promise<JsonObject>;
};
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options?` | [`KustomerTicketingClientOptions`](#kustomerticketingclientoptions) |

#### Returns

```ts
{
  createConversation: (payload) => Promise<JsonObject>;
  getConversation: (conversationId) => Promise<JsonObject>;
  listConversations: (query?) => Promise<JsonObject>;
  listMessages: (query?) => Promise<JsonObject>;
  rawRequest: <T>(path, init?) => Promise<T>;
  readiness: () => Promise<JsonObject>;
  updateConversation: (conversationId, patch) => Promise<JsonObject>;
  createCustomerDraft: Promise<JsonObject>;
  createMessage: Promise<JsonObject>;
}
```

| Name | Type |
| ------ | ------ |
| `createConversation()` | (`payload`) => `Promise`\<[`JsonObject`](#jsonobject)\> |
| `getConversation()` | (`conversationId`) => `Promise`\<[`JsonObject`](#jsonobject)\> |
| `listConversations()` | (`query?`) => `Promise`\<[`JsonObject`](#jsonobject)\> |
| `listMessages()` | (`query?`) => `Promise`\<[`JsonObject`](#jsonobject)\> |
| `rawRequest()` | \<`T`\>(`path`, `init?`) => `Promise`\<`T`\> |
| `readiness()` | () => `Promise`\<[`JsonObject`](#jsonobject)\> |
| `updateConversation()` | (`conversationId`, `patch`) => `Promise`\<[`JsonObject`](#jsonobject)\> |
| `createCustomerDraft()` | ( `customerId`, `payload`, `query?`) => `Promise`\<[`JsonObject`](#jsonobject)\> |
| `createMessage()` | (`payload`) => `Promise`\<[`JsonObject`](#jsonobject)\> |

***

### createKustomerTicketingIntegration()

```ts
function createKustomerTicketingIntegration(options?): DefinedIntegration<{
  capabilities: [{
     capability: "create-provider-object";
     changesWorkflow: true;
     exposesSensitiveData: true;
     providerObjects: [{
        kind: "kustomerConversation";
        label: "Kustomer Conversation";
      }, {
        kind: "kustomerMessage";
        label: "Kustomer Message";
      }, {
        kind: "kustomerDraft";
        label: "Kustomer Draft";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     capability: "read-provider-object";
     exposesSensitiveData: true;
     providerObjects: [{
        kind: "kustomerConversation";
        label: "Kustomer Conversation";
      }, {
        kind: "kustomerMessage";
        label: "Kustomer Message";
     }];
     requiresCredential: true;
   }, {
     capability: "update-provider-object";
     changesWorkflow: true;
     exposesSensitiveData: true;
     providerObjects: [{
        kind: "kustomerConversation";
        label: "Kustomer Conversation";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     capability: "search-provider-object";
     exposesSensitiveData: true;
     providerObjects: [{
        kind: "kustomerConversation";
        label: "Kustomer Conversation";
     }];
     requiresCredential: true;
   }, {
     capability: "handoff";
     changesWorkflow: true;
     exposesSensitiveData: true;
     providerObjects: [{
        kind: "kustomerConversation";
        label: "Kustomer Conversation";
      }, {
        kind: "kustomerMessage";
        label: "Kustomer Message";
      }, {
        kind: "kustomerDraft";
        label: "Kustomer Draft";
     }];
     requiresCredential: true;
     sideEffect: true;
  }];
  category: "ticketing";
  channelAudiences: ["customer-facing", "internal-support", "mixed"];
  coverage: {
     evidence: [{
        label: "Kustomer developer portal";
        url: "https://developer.kustomer.com/";
      }, {
        label: "Kustomer REST APIs portal";
        url: "https://developer.kustomer.com/kustomer-api-docs/reference";
      }, {
        label: "Kustomer API keys";
        url: "https://help.kustomer.com/api-keys-SJs5YTIWX";
      }, {
        label: "Kustomer create message";
        url: "https://developer.kustomer.com/kustomer-api-docs/reference/createmessage";
     }];
     notes: ["SDK decision: Kustomer app/chat SDKs target Apps or Chat runtimes, not backend REST ticketing operations.", "Coverage is limited to Kustomer conversation create/read/update/list, message list/create, customer draft creation, and org readiness for support workflows.", "This package intentionally does not copy the old generated full Kustomer public API clone."];
     scope: "support-workflow-subset";
  };
  credentialRequirements: [{
     id: "kustomer-api-access";
     label: "Kustomer API access";
     metadata: {
        privilegeGuidance: "Kustomer API keys are governed by roles and API permissions; these strings are provider permission labels, not OAuth scopes.";
        scopeKind: "provider-permission-labels";
     };
     required: true;
     scopes: ["org.user.conversation.read", "org.user.conversation.write", "org.permission.conversation.create", "org.user.message.read", "org.user.message.write", "org.permission.message.create", "org.permission.draft.create"];
  }];
  directions: ["bidirectional"];
  id: "ticketing.kustomer";
  limitations: ["Conversation model, queues, teams, custom objects, and message visibility are SDK-user configuration."];
  maintainers: [{
     name: "Cognidesk";
     type: "official";
  }];
  metadata: {
     implementationStrategy: "direct-http-support-slice";
     issue: 35;
     sdkDecision: {
        candidates: readonly ["@kustomer/apps-client", "@kustomer/apps-server-sdk", "@kustomer/chat-react-native"];
        checkedAt: "2026-06-21";
        reason: "Kustomer SDK packages target app/chat runtimes rather than backend REST ticketing operations.";
        verdict: "not-adopted";
     };
     supportSlice: {
        allowlistedOperations: readonly ["conversations.create", "conversations.read", "conversations.update", "conversations.list", "messages.list", "messages.create", "customer_drafts.create"];
        source: "Kustomer REST API";
     };
  };
  name: "Kustomer";
  operations: [{
     alias: "ticket.create";
     capability: "create-provider-object";
     changesWorkflow: true;
     exposesSensitiveData: true;
     providerObject: "ticket";
     providerOperation: "POST /v1/conversations";
     sideEffect: true;
   }, {
     alias: "ticket.read";
     capability: "read-provider-object";
     exposesSensitiveData: true;
     providerObject: "ticket";
     providerOperation: "GET /v1/conversations/{conversation_id}";
   }, {
     alias: "ticket.update";
     capability: "update-provider-object";
     changesWorkflow: true;
     exposesSensitiveData: true;
     providerObject: "ticket";
     providerOperation: "PATCH /v1/conversations/{conversation_id}";
     sideEffect: true;
  }];
  packageName: "@cognidesk/integration-ticketing-kustomer";
  privacyNotes: ["Kustomer conversations can include customer timeline data, messages, notes, tags, queue status, and custom objects."];
  provider: "kustomer";
  trustLevel: "official";
}, unknown, {
  kustomer.customerDraft.create: (input) => Promise<JsonObject>;
  kustomer.message.list: (input?) => Promise<JsonObject>;
  kustomer.readiness: () => Promise<JsonObject>;
  ticket.comment.create: (input) => Promise<JsonObject>;
  ticket.create: (input) => Promise<JsonObject>;
  ticket.read: (input) => Promise<JsonObject>;
  ticket.search: (input?) => Promise<JsonObject>;
  ticket.update: (input) => Promise<JsonObject>;
}>;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options?` | [`KustomerTicketingClientOptions`](#kustomerticketingclientoptions) |

#### Returns

[`DefinedIntegration`](../../../packages/integration-kit/dist.md#definedintegration)\<\{
  `capabilities`: \[\{
     `capability`: `"create-provider-object"`;
     `changesWorkflow`: `true`;
     `exposesSensitiveData`: `true`;
     `providerObjects`: \[\{
        `kind`: `"kustomerConversation"`;
        `label`: `"Kustomer Conversation"`;
      \}, \{
        `kind`: `"kustomerMessage"`;
        `label`: `"Kustomer Message"`;
      \}, \{
        `kind`: `"kustomerDraft"`;
        `label`: `"Kustomer Draft"`;
     \}\];
     `requiresCredential`: `true`;
     `sideEffect`: `true`;
   \}, \{
     `capability`: `"read-provider-object"`;
     `exposesSensitiveData`: `true`;
     `providerObjects`: \[\{
        `kind`: `"kustomerConversation"`;
        `label`: `"Kustomer Conversation"`;
      \}, \{
        `kind`: `"kustomerMessage"`;
        `label`: `"Kustomer Message"`;
     \}\];
     `requiresCredential`: `true`;
   \}, \{
     `capability`: `"update-provider-object"`;
     `changesWorkflow`: `true`;
     `exposesSensitiveData`: `true`;
     `providerObjects`: \[\{
        `kind`: `"kustomerConversation"`;
        `label`: `"Kustomer Conversation"`;
     \}\];
     `requiresCredential`: `true`;
     `sideEffect`: `true`;
   \}, \{
     `capability`: `"search-provider-object"`;
     `exposesSensitiveData`: `true`;
     `providerObjects`: \[\{
        `kind`: `"kustomerConversation"`;
        `label`: `"Kustomer Conversation"`;
     \}\];
     `requiresCredential`: `true`;
   \}, \{
     `capability`: `"handoff"`;
     `changesWorkflow`: `true`;
     `exposesSensitiveData`: `true`;
     `providerObjects`: \[\{
        `kind`: `"kustomerConversation"`;
        `label`: `"Kustomer Conversation"`;
      \}, \{
        `kind`: `"kustomerMessage"`;
        `label`: `"Kustomer Message"`;
      \}, \{
        `kind`: `"kustomerDraft"`;
        `label`: `"Kustomer Draft"`;
     \}\];
     `requiresCredential`: `true`;
     `sideEffect`: `true`;
  \}\];
  `category`: `"ticketing"`;
  `channelAudiences`: \[`"customer-facing"`, `"internal-support"`, `"mixed"`\];
  `coverage`: \{
     `evidence`: \[\{
        `label`: `"Kustomer developer portal"`;
        `url`: `"https://developer.kustomer.com/"`;
      \}, \{
        `label`: `"Kustomer REST APIs portal"`;
        `url`: `"https://developer.kustomer.com/kustomer-api-docs/reference"`;
      \}, \{
        `label`: `"Kustomer API keys"`;
        `url`: `"https://help.kustomer.com/api-keys-SJs5YTIWX"`;
      \}, \{
        `label`: `"Kustomer create message"`;
        `url`: `"https://developer.kustomer.com/kustomer-api-docs/reference/createmessage"`;
     \}\];
     `notes`: \[`"SDK decision: Kustomer app/chat SDKs target Apps or Chat runtimes, not backend REST ticketing operations."`, `"Coverage is limited to Kustomer conversation create/read/update/list, message list/create, customer draft creation, and org readiness for support workflows."`, `"This package intentionally does not copy the old generated full Kustomer public API clone."`\];
     `scope`: `"support-workflow-subset"`;
  \};
  `credentialRequirements`: \[\{
     `id`: `"kustomer-api-access"`;
     `label`: `"Kustomer API access"`;
     `metadata`: \{
        `privilegeGuidance`: `"Kustomer API keys are governed by roles and API permissions; these strings are provider permission labels, not OAuth scopes."`;
        `scopeKind`: `"provider-permission-labels"`;
     \};
     `required`: `true`;
     `scopes`: \[`"org.user.conversation.read"`, `"org.user.conversation.write"`, `"org.permission.conversation.create"`, `"org.user.message.read"`, `"org.user.message.write"`, `"org.permission.message.create"`, `"org.permission.draft.create"`\];
  \}\];
  `directions`: \[`"bidirectional"`\];
  `id`: `"ticketing.kustomer"`;
  `limitations`: \[`"Conversation model, queues, teams, custom objects, and message visibility are SDK-user configuration."`\];
  `maintainers`: \[\{
     `name`: `"Cognidesk"`;
     `type`: `"official"`;
  \}\];
  `metadata`: \{
     `implementationStrategy`: `"direct-http-support-slice"`;
     `issue`: `35`;
     `sdkDecision`: \{
        `candidates`: readonly \[`"@kustomer/apps-client"`, `"@kustomer/apps-server-sdk"`, `"@kustomer/chat-react-native"`\];
        `checkedAt`: `"2026-06-21"`;
        `reason`: `"Kustomer SDK packages target app/chat runtimes rather than backend REST ticketing operations."`;
        `verdict`: `"not-adopted"`;
     \};
     `supportSlice`: \{
        `allowlistedOperations`: readonly \[`"conversations.create"`, `"conversations.read"`, `"conversations.update"`, `"conversations.list"`, `"messages.list"`, `"messages.create"`, `"customer_drafts.create"`\];
        `source`: `"Kustomer REST API"`;
     \};
  \};
  `name`: `"Kustomer"`;
  `operations`: \[\{
     `alias`: `"ticket.create"`;
     `capability`: `"create-provider-object"`;
     `changesWorkflow`: `true`;
     `exposesSensitiveData`: `true`;
     `providerObject`: `"ticket"`;
     `providerOperation`: `"POST /v1/conversations"`;
     `sideEffect`: `true`;
   \}, \{
     `alias`: `"ticket.read"`;
     `capability`: `"read-provider-object"`;
     `exposesSensitiveData`: `true`;
     `providerObject`: `"ticket"`;
     `providerOperation`: `"GET /v1/conversations/{conversation_id}"`;
   \}, \{
     `alias`: `"ticket.update"`;
     `capability`: `"update-provider-object"`;
     `changesWorkflow`: `true`;
     `exposesSensitiveData`: `true`;
     `providerObject`: `"ticket"`;
     `providerOperation`: `"PATCH /v1/conversations/{conversation_id}"`;
     `sideEffect`: `true`;
  \}\];
  `packageName`: `"@cognidesk/integration-ticketing-kustomer"`;
  `privacyNotes`: \[`"Kustomer conversations can include customer timeline data, messages, notes, tags, queue status, and custom objects."`\];
  `provider`: `"kustomer"`;
  `trustLevel`: `"official"`;
\}, `unknown`, \{
  `kustomer.customerDraft.create`: (`input`) => `Promise`\<[`JsonObject`](#jsonobject)\>;
  `kustomer.message.list`: (`input?`) => `Promise`\<[`JsonObject`](#jsonobject)\>;
  `kustomer.readiness`: () => `Promise`\<[`JsonObject`](#jsonobject)\>;
  `ticket.comment.create`: (`input`) => `Promise`\<[`JsonObject`](#jsonobject)\>;
  `ticket.create`: (`input`) => `Promise`\<[`JsonObject`](#jsonobject)\>;
  `ticket.read`: (`input`) => `Promise`\<[`JsonObject`](#jsonobject)\>;
  `ticket.search`: (`input?`) => `Promise`\<[`JsonObject`](#jsonobject)\>;
  `ticket.update`: (`input`) => `Promise`\<[`JsonObject`](#jsonobject)\>;
\}\>

## References

### kustomerTicketingProviderManifest

Re-exports [kustomerTicketingProviderManifest](dist/manifest.md#kustomerticketingprovidermanifest)
