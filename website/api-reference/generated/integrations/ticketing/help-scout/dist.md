# integrations/ticketing/help-scout/dist

## Interfaces

### HelpScoutTicketingClientOptions

#### Extended by

- [`HelpScoutTicketingIntegrationOptions`](#helpscoutticketingintegrationoptions)

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
optional providerClient?: HelpScoutTicketingProviderClient;
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

### HelpScoutTicketingIntegrationOptions

#### Extends

- [`HelpScoutTicketingClientOptions`](#helpscoutticketingclientoptions)

#### Properties

##### accessToken?

```ts
optional accessToken?: string;
```

###### Inherited from

[`HelpScoutTicketingClientOptions`](#helpscoutticketingclientoptions).[`accessToken`](#accesstoken)

##### apiKey?

```ts
optional apiKey?: string;
```

###### Inherited from

[`HelpScoutTicketingClientOptions`](#helpscoutticketingclientoptions).[`apiKey`](#apikey)

##### baseUrl?

```ts
optional baseUrl?: string;
```

###### Inherited from

[`HelpScoutTicketingClientOptions`](#helpscoutticketingclientoptions).[`baseUrl`](#baseurl)

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

[`HelpScoutTicketingClientOptions`](#helpscoutticketingclientoptions).[`fetch`](#fetch)

##### providerClient?

```ts
optional providerClient?: HelpScoutTicketingProviderClient;
```

###### Inherited from

[`HelpScoutTicketingClientOptions`](#helpscoutticketingclientoptions).[`providerClient`](#providerclient)

##### retry?

```ts
optional retry?: number | ProviderJsonRetryOptions;
```

###### Inherited from

[`HelpScoutTicketingClientOptions`](#helpscoutticketingclientoptions).[`retry`](#retry)

##### signal?

```ts
optional signal?: AbortSignal;
```

###### Inherited from

[`HelpScoutTicketingClientOptions`](#helpscoutticketingclientoptions).[`signal`](#signal)

##### timeoutMs?

```ts
optional timeoutMs?: number;
```

###### Inherited from

[`HelpScoutTicketingClientOptions`](#helpscoutticketingclientoptions).[`timeoutMs`](#timeoutms)

***

### HelpScoutTicketingProviderClient

#### Properties

##### rawClient?

```ts
optional rawClient?: unknown;
```

#### Methods

##### createConversation()

```ts
createConversation(payload): Promise<JsonObject>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `payload` | [`JsonObject`](#jsonobject) |

###### Returns

`Promise`\<[`JsonObject`](#jsonobject)\>

##### createNote()

```ts
createNote(conversationId, payload): Promise<JsonObject>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `conversationId` | `string` \| `number` |
| `payload` | [`JsonObject`](#jsonobject) |

###### Returns

`Promise`\<[`JsonObject`](#jsonobject)\>

##### createReply()

```ts
createReply(conversationId, payload): Promise<JsonObject>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `conversationId` | `string` \| `number` |
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
| `conversationId` | `string` \| `number` |

###### Returns

`Promise`\<[`JsonObject`](#jsonobject)\>

##### listConversations()

```ts
listConversations(query?): Promise<JsonObject>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `query?` | [`JsonObject`](#jsonobject) |

###### Returns

`Promise`\<[`JsonObject`](#jsonobject)\>

##### listThreads()

```ts
listThreads(conversationId): Promise<JsonObject>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `conversationId` | `string` \| `number` |

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

##### updateConversation()

```ts
updateConversation(conversationId, patch): Promise<JsonObject>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `conversationId` | `string` \| `number` |
| `patch` | [`JsonObject`](#jsonobject) \| [`JsonObject`](#jsonobject)[] |

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

### createHelpScoutTicketingClient()

```ts
function createHelpScoutTicketingClient(options?): HelpScoutTicketingProviderClient;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options?` | [`HelpScoutTicketingClientOptions`](#helpscoutticketingclientoptions) |

#### Returns

[`HelpScoutTicketingProviderClient`](#helpscoutticketingproviderclient)

***

### createHelpScoutTicketingIntegration()

```ts
function createHelpScoutTicketingIntegration(options?): DefinedIntegration<{
  capabilities: [{
     capability: "create-provider-object";
     changesWorkflow: true;
     exposesSensitiveData: true;
     providerObjects: [{
        kind: "helpScoutConversation";
        label: "Help Scout Conversation";
      }, {
        kind: "helpScoutReplyThread";
        label: "Help Scout Reply Thread";
      }, {
        kind: "helpScoutNoteThread";
        label: "Help Scout Note Thread";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     capability: "read-provider-object";
     exposesSensitiveData: true;
     providerObjects: [{
        kind: "helpScoutConversation";
        label: "Help Scout Conversation";
     }];
     requiresCredential: true;
   }, {
     capability: "update-provider-object";
     changesWorkflow: true;
     exposesSensitiveData: true;
     providerObjects: [{
        kind: "helpScoutConversation";
        label: "Help Scout Conversation";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     capability: "search-provider-object";
     exposesSensitiveData: true;
     providerObjects: [{
        kind: "helpScoutConversation";
        label: "Help Scout Conversation";
     }];
     requiresCredential: true;
   }, {
     capability: "handoff";
     changesWorkflow: true;
     exposesSensitiveData: true;
     providerObjects: [{
        kind: "helpScoutConversation";
        label: "Help Scout Conversation";
      }, {
        kind: "helpScoutReplyThread";
        label: "Help Scout Reply Thread";
      }, {
        kind: "helpScoutNoteThread";
        label: "Help Scout Note Thread";
     }];
     requiresCredential: true;
     sideEffect: true;
  }];
  category: "ticketing";
  channelAudiences: ["customer-facing", "internal-support", "mixed"];
  coverage: {
     evidence: [{
        label: "Help Scout Inbox API";
        url: "https://developer.helpscout.com/mailbox-api/";
      }, {
        label: "Help Scout JavaScript SDK";
        url: "https://developer.helpscout.com/apps/javascript-sdk/";
      }, {
        label: "Help Scout open-source clients";
        url: "https://developer.helpscout.com/open-source/";
     }];
     notes: ["No official maintained backend JavaScript Inbox API client was verified; Help Scout's official Inbox SDK is PHP, and the official JavaScript SDK is for Apps UI context.", "Coverage is implemented by the built-in Help Scout REST adapter for conversation create/read/list/update, thread list, reply/note thread creation, and mailbox-list readiness.", "A host-provided HelpScoutTicketingProviderClient can still override the built-in REST adapter."];
     scope: "support-workflow-subset";
  };
  credentialRequirements: [{
     id: "help-scout-base-url";
     label: "Help Scout API base URL";
     required: false;
   }, {
     id: "help-scout-api-access";
     label: "Help Scout OAuth access token or API key";
     required: true;
  }];
  directions: ["bidirectional"];
  id: "ticketing.help-scout";
  limitations: ["Mailbox IDs, thread types, assignment, workflow rules, and customer visibility are SDK-user configuration."];
  maintainers: [{
     name: "Cognidesk";
     type: "official";
  }];
  metadata: {
     implementation: {
        adapterKind: "no-official-sdk-rest-adapter";
        allowedOperations: readonly [{
           alias: "ticket.create";
           id: "conversations.create";
           source: "provider-rest-adapter";
           target: "restAdapter.createConversation";
         }, {
           alias: "ticket.read";
           id: "conversations.read";
           source: "provider-rest-adapter";
           target: "restAdapter.getConversation";
         }, {
           alias: "ticket.update";
           id: "conversations.update";
           source: "provider-rest-adapter";
           target: "restAdapter.updateConversation";
         }, {
           alias: "ticket.search";
           id: "conversations.list";
           source: "provider-rest-adapter";
           target: "restAdapter.listConversations";
         }, {
           alias: "ticket.comment.create";
           id: "reply.create";
           source: "provider-rest-adapter";
           target: "restAdapter.createReply";
         }, {
           alias: "ticket.internalNote.create";
           id: "note.create";
           source: "provider-rest-adapter";
           target: "restAdapter.createNote";
         }, {
           alias: "help-scout.thread.list";
           id: "threads.list";
           source: "provider-rest-adapter";
           target: "restAdapter.listThreads";
         }, {
           alias: "help-scout.readiness";
           id: "mailboxes.list";
           source: "provider-rest-adapter";
           target: "restAdapter.readiness";
        }];
        defaultHttpClient: "providerJsonRequest";
        packageOwnedRestClient: true;
        providerClientOverride: true;
        providerSdkDecision: "no-official-sdk-rest-adapter";
        sdkEvaluation: {
           candidates: readonly [{
              checkedVersion: "0.10.0";
              package: "@helpscout/javascript-sdk";
              reason: "Official Help Scout JavaScript SDK is for Apps UI context, contextual data, and interface actions rather than backend Inbox API ticketing operations.";
              result: "not-runtime-inbox-api-client";
            }, {
              checkedVersion: "0.0.1";
              package: "helpscout";
              reason: "Community Node wrapper; not listed by Help Scout as an official supported Inbox API client.";
              result: "rejected-unofficial-legacy";
            }, {
              checkedVersion: "0.0.2";
              package: "helpscout-v2";
              reason: "Community Help Scout API v2 wrapper; not an official or maintained provider runtime SDK.";
              result: "rejected-unofficial";
            }, {
              checkedVersion: "0.1.2";
              package: "@bufferapp/helpscout";
              reason: "Third-party/legacy Node wrapper; not an official Help Scout-maintained runtime SDK.";
              result: "rejected-unofficial-legacy";
           }];
           checkedAt: "2026-06-25";
           requiredRuntimeSurface: "server-side Help Scout Inbox API 2.0 ticketing client";
           result: "no-official-maintained-runtime-sdk";
        };
        strategy: "provider-rest-adapter";
        verifiedAt: "2026-06-25";
     };
     issue: 35;
     manifestOnlySafe: true;
     providerClient: {
        defaultClientPolicy: "built-in-rest-adapter";
        importPolicy: "runtime-override";
        interface: "HelpScoutTicketingProviderClient";
        package: "host-provided";
     };
     providerRestAdapterException: {
        adapterKind: "no-official-sdk-rest-adapter";
        allowedDefaultRuntime: "built-in-help-scout-inbox-rest-adapter";
        guardrails: readonly ["Do not add @helpscout/javascript-sdk as a runtime dependency for Inbox API ticketing; it is an Apps UI SDK.", "Only the allowlisted Help Scout Inbox API operations in metadata.implementation.allowedOperations are package-owned.", "Use a host-injected HelpScoutTicketingProviderClient for unsupported operations or for any future official maintained backend SDK."];
        hostSdkPath: "HelpScoutTicketingProviderClient";
        status: "accepted";
     };
     sdkDecision: "no-official-sdk-rest-adapter";
  };
  name: "Help Scout";
  operations: [{
     alias: "ticket.create";
     capability: "create-provider-object";
     changesWorkflow: true;
     exposesSensitiveData: true;
     providerObject: "ticket";
     providerOperation: "POST /v2/conversations";
     sideEffect: true;
   }, {
     alias: "ticket.read";
     capability: "read-provider-object";
     exposesSensitiveData: true;
     providerObject: "ticket";
     providerOperation: "GET /v2/conversations/{conversation_id}";
   }, {
     alias: "ticket.update";
     capability: "update-provider-object";
     changesWorkflow: true;
     exposesSensitiveData: true;
     providerObject: "ticket";
     providerOperation: "PATCH /v2/conversations/{conversation_id}";
     sideEffect: true;
  }];
  packageName: "@cognidesk/integration-ticketing-help-scout";
  privacyNotes: ["Help Scout conversations can include customer identity, mailbox threads, notes, tags, custom fields, and assignments."];
  provider: "help-scout";
  trustLevel: "official";
}, unknown, {
  help-scout.readiness: () => Promise<JsonObject>;
  help-scout.thread.list: (input) => Promise<JsonObject>;
  ticket.comment.create: (input) => Promise<JsonObject>;
  ticket.create: (input) => Promise<JsonObject>;
  ticket.internalNote.create: (input) => Promise<JsonObject>;
  ticket.read: (input) => Promise<JsonObject>;
  ticket.search: (input?) => Promise<JsonObject>;
  ticket.update: (input) => Promise<JsonObject>;
}>;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options?` | [`HelpScoutTicketingIntegrationOptions`](#helpscoutticketingintegrationoptions) |

#### Returns

[`DefinedIntegration`](../../../packages/integration-kit/dist.md#definedintegration)\<\{
  `capabilities`: \[\{
     `capability`: `"create-provider-object"`;
     `changesWorkflow`: `true`;
     `exposesSensitiveData`: `true`;
     `providerObjects`: \[\{
        `kind`: `"helpScoutConversation"`;
        `label`: `"Help Scout Conversation"`;
      \}, \{
        `kind`: `"helpScoutReplyThread"`;
        `label`: `"Help Scout Reply Thread"`;
      \}, \{
        `kind`: `"helpScoutNoteThread"`;
        `label`: `"Help Scout Note Thread"`;
     \}\];
     `requiresCredential`: `true`;
     `sideEffect`: `true`;
   \}, \{
     `capability`: `"read-provider-object"`;
     `exposesSensitiveData`: `true`;
     `providerObjects`: \[\{
        `kind`: `"helpScoutConversation"`;
        `label`: `"Help Scout Conversation"`;
     \}\];
     `requiresCredential`: `true`;
   \}, \{
     `capability`: `"update-provider-object"`;
     `changesWorkflow`: `true`;
     `exposesSensitiveData`: `true`;
     `providerObjects`: \[\{
        `kind`: `"helpScoutConversation"`;
        `label`: `"Help Scout Conversation"`;
     \}\];
     `requiresCredential`: `true`;
     `sideEffect`: `true`;
   \}, \{
     `capability`: `"search-provider-object"`;
     `exposesSensitiveData`: `true`;
     `providerObjects`: \[\{
        `kind`: `"helpScoutConversation"`;
        `label`: `"Help Scout Conversation"`;
     \}\];
     `requiresCredential`: `true`;
   \}, \{
     `capability`: `"handoff"`;
     `changesWorkflow`: `true`;
     `exposesSensitiveData`: `true`;
     `providerObjects`: \[\{
        `kind`: `"helpScoutConversation"`;
        `label`: `"Help Scout Conversation"`;
      \}, \{
        `kind`: `"helpScoutReplyThread"`;
        `label`: `"Help Scout Reply Thread"`;
      \}, \{
        `kind`: `"helpScoutNoteThread"`;
        `label`: `"Help Scout Note Thread"`;
     \}\];
     `requiresCredential`: `true`;
     `sideEffect`: `true`;
  \}\];
  `category`: `"ticketing"`;
  `channelAudiences`: \[`"customer-facing"`, `"internal-support"`, `"mixed"`\];
  `coverage`: \{
     `evidence`: \[\{
        `label`: `"Help Scout Inbox API"`;
        `url`: `"https://developer.helpscout.com/mailbox-api/"`;
      \}, \{
        `label`: `"Help Scout JavaScript SDK"`;
        `url`: `"https://developer.helpscout.com/apps/javascript-sdk/"`;
      \}, \{
        `label`: `"Help Scout open-source clients"`;
        `url`: `"https://developer.helpscout.com/open-source/"`;
     \}\];
     `notes`: \[`"No official maintained backend JavaScript Inbox API client was verified; Help Scout's official Inbox SDK is PHP, and the official JavaScript SDK is for Apps UI context."`, `"Coverage is implemented by the built-in Help Scout REST adapter for conversation create/read/list/update, thread list, reply/note thread creation, and mailbox-list readiness."`, `"A host-provided HelpScoutTicketingProviderClient can still override the built-in REST adapter."`\];
     `scope`: `"support-workflow-subset"`;
  \};
  `credentialRequirements`: \[\{
     `id`: `"help-scout-base-url"`;
     `label`: `"Help Scout API base URL"`;
     `required`: `false`;
   \}, \{
     `id`: `"help-scout-api-access"`;
     `label`: `"Help Scout OAuth access token or API key"`;
     `required`: `true`;
  \}\];
  `directions`: \[`"bidirectional"`\];
  `id`: `"ticketing.help-scout"`;
  `limitations`: \[`"Mailbox IDs, thread types, assignment, workflow rules, and customer visibility are SDK-user configuration."`\];
  `maintainers`: \[\{
     `name`: `"Cognidesk"`;
     `type`: `"official"`;
  \}\];
  `metadata`: \{
     `implementation`: \{
        `adapterKind`: `"no-official-sdk-rest-adapter"`;
        `allowedOperations`: readonly \[\{
           `alias`: `"ticket.create"`;
           `id`: `"conversations.create"`;
           `source`: `"provider-rest-adapter"`;
           `target`: `"restAdapter.createConversation"`;
         \}, \{
           `alias`: `"ticket.read"`;
           `id`: `"conversations.read"`;
           `source`: `"provider-rest-adapter"`;
           `target`: `"restAdapter.getConversation"`;
         \}, \{
           `alias`: `"ticket.update"`;
           `id`: `"conversations.update"`;
           `source`: `"provider-rest-adapter"`;
           `target`: `"restAdapter.updateConversation"`;
         \}, \{
           `alias`: `"ticket.search"`;
           `id`: `"conversations.list"`;
           `source`: `"provider-rest-adapter"`;
           `target`: `"restAdapter.listConversations"`;
         \}, \{
           `alias`: `"ticket.comment.create"`;
           `id`: `"reply.create"`;
           `source`: `"provider-rest-adapter"`;
           `target`: `"restAdapter.createReply"`;
         \}, \{
           `alias`: `"ticket.internalNote.create"`;
           `id`: `"note.create"`;
           `source`: `"provider-rest-adapter"`;
           `target`: `"restAdapter.createNote"`;
         \}, \{
           `alias`: `"help-scout.thread.list"`;
           `id`: `"threads.list"`;
           `source`: `"provider-rest-adapter"`;
           `target`: `"restAdapter.listThreads"`;
         \}, \{
           `alias`: `"help-scout.readiness"`;
           `id`: `"mailboxes.list"`;
           `source`: `"provider-rest-adapter"`;
           `target`: `"restAdapter.readiness"`;
        \}\];
        `defaultHttpClient`: `"providerJsonRequest"`;
        `packageOwnedRestClient`: `true`;
        `providerClientOverride`: `true`;
        `providerSdkDecision`: `"no-official-sdk-rest-adapter"`;
        `sdkEvaluation`: \{
           `candidates`: readonly \[\{
              `checkedVersion`: `"0.10.0"`;
              `package`: `"@helpscout/javascript-sdk"`;
              `reason`: `"Official Help Scout JavaScript SDK is for Apps UI context, contextual data, and interface actions rather than backend Inbox API ticketing operations."`;
              `result`: `"not-runtime-inbox-api-client"`;
            \}, \{
              `checkedVersion`: `"0.0.1"`;
              `package`: `"helpscout"`;
              `reason`: `"Community Node wrapper; not listed by Help Scout as an official supported Inbox API client."`;
              `result`: `"rejected-unofficial-legacy"`;
            \}, \{
              `checkedVersion`: `"0.0.2"`;
              `package`: `"helpscout-v2"`;
              `reason`: `"Community Help Scout API v2 wrapper; not an official or maintained provider runtime SDK."`;
              `result`: `"rejected-unofficial"`;
            \}, \{
              `checkedVersion`: `"0.1.2"`;
              `package`: `"@bufferapp/helpscout"`;
              `reason`: `"Third-party/legacy Node wrapper; not an official Help Scout-maintained runtime SDK."`;
              `result`: `"rejected-unofficial-legacy"`;
           \}\];
           `checkedAt`: `"2026-06-25"`;
           `requiredRuntimeSurface`: `"server-side Help Scout Inbox API 2.0 ticketing client"`;
           `result`: `"no-official-maintained-runtime-sdk"`;
        \};
        `strategy`: `"provider-rest-adapter"`;
        `verifiedAt`: `"2026-06-25"`;
     \};
     `issue`: `35`;
     `manifestOnlySafe`: `true`;
     `providerClient`: \{
        `defaultClientPolicy`: `"built-in-rest-adapter"`;
        `importPolicy`: `"runtime-override"`;
        `interface`: `"HelpScoutTicketingProviderClient"`;
        `package`: `"host-provided"`;
     \};
     `providerRestAdapterException`: \{
        `adapterKind`: `"no-official-sdk-rest-adapter"`;
        `allowedDefaultRuntime`: `"built-in-help-scout-inbox-rest-adapter"`;
        `guardrails`: readonly \[`"Do not add @helpscout/javascript-sdk as a runtime dependency for Inbox API ticketing; it is an Apps UI SDK."`, `"Only the allowlisted Help Scout Inbox API operations in metadata.implementation.allowedOperations are package-owned."`, `"Use a host-injected HelpScoutTicketingProviderClient for unsupported operations or for any future official maintained backend SDK."`\];
        `hostSdkPath`: `"HelpScoutTicketingProviderClient"`;
        `status`: `"accepted"`;
     \};
     `sdkDecision`: `"no-official-sdk-rest-adapter"`;
  \};
  `name`: `"Help Scout"`;
  `operations`: \[\{
     `alias`: `"ticket.create"`;
     `capability`: `"create-provider-object"`;
     `changesWorkflow`: `true`;
     `exposesSensitiveData`: `true`;
     `providerObject`: `"ticket"`;
     `providerOperation`: `"POST /v2/conversations"`;
     `sideEffect`: `true`;
   \}, \{
     `alias`: `"ticket.read"`;
     `capability`: `"read-provider-object"`;
     `exposesSensitiveData`: `true`;
     `providerObject`: `"ticket"`;
     `providerOperation`: `"GET /v2/conversations/{conversation_id}"`;
   \}, \{
     `alias`: `"ticket.update"`;
     `capability`: `"update-provider-object"`;
     `changesWorkflow`: `true`;
     `exposesSensitiveData`: `true`;
     `providerObject`: `"ticket"`;
     `providerOperation`: `"PATCH /v2/conversations/{conversation_id}"`;
     `sideEffect`: `true`;
  \}\];
  `packageName`: `"@cognidesk/integration-ticketing-help-scout"`;
  `privacyNotes`: \[`"Help Scout conversations can include customer identity, mailbox threads, notes, tags, custom fields, and assignments."`\];
  `provider`: `"help-scout"`;
  `trustLevel`: `"official"`;
\}, `unknown`, \{
  `help-scout.readiness`: () => `Promise`\<[`JsonObject`](#jsonobject)\>;
  `help-scout.thread.list`: (`input`) => `Promise`\<[`JsonObject`](#jsonobject)\>;
  `ticket.comment.create`: (`input`) => `Promise`\<[`JsonObject`](#jsonobject)\>;
  `ticket.create`: (`input`) => `Promise`\<[`JsonObject`](#jsonobject)\>;
  `ticket.internalNote.create`: (`input`) => `Promise`\<[`JsonObject`](#jsonobject)\>;
  `ticket.read`: (`input`) => `Promise`\<[`JsonObject`](#jsonobject)\>;
  `ticket.search`: (`input?`) => `Promise`\<[`JsonObject`](#jsonobject)\>;
  `ticket.update`: (`input`) => `Promise`\<[`JsonObject`](#jsonobject)\>;
\}\>

***

### createHelpScoutTicketingOperationHandlers()

```ts
function createHelpScoutTicketingOperationHandlers(options?): {
  help-scout.readiness: () => Promise<JsonObject>;
  help-scout.thread.list: (input) => Promise<JsonObject>;
  ticket.comment.create: (input) => Promise<JsonObject>;
  ticket.create: (input) => Promise<JsonObject>;
  ticket.internalNote.create: (input) => Promise<JsonObject>;
  ticket.read: (input) => Promise<JsonObject>;
  ticket.search: (input?) => Promise<JsonObject>;
  ticket.update: (input) => Promise<JsonObject>;
};
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options?` | [`HelpScoutTicketingIntegrationOptions`](#helpscoutticketingintegrationoptions) |

#### Returns

```ts
{
  help-scout.readiness: () => Promise<JsonObject>;
  help-scout.thread.list: (input) => Promise<JsonObject>;
  ticket.comment.create: (input) => Promise<JsonObject>;
  ticket.create: (input) => Promise<JsonObject>;
  ticket.internalNote.create: (input) => Promise<JsonObject>;
  ticket.read: (input) => Promise<JsonObject>;
  ticket.search: (input?) => Promise<JsonObject>;
  ticket.update: (input) => Promise<JsonObject>;
}
```

| Name | Type |
| ------ | ------ |
| `help-scout.readiness()` | () => `Promise`\<[`JsonObject`](#jsonobject)\> |
| `help-scout.thread.list()` | (`input`) => `Promise`\<[`JsonObject`](#jsonobject)\> |
| `ticket.comment.create()` | (`input`) => `Promise`\<[`JsonObject`](#jsonobject)\> |
| `ticket.create()` | (`input`) => `Promise`\<[`JsonObject`](#jsonobject)\> |
| `ticket.internalNote.create()` | (`input`) => `Promise`\<[`JsonObject`](#jsonobject)\> |
| `ticket.read()` | (`input`) => `Promise`\<[`JsonObject`](#jsonobject)\> |
| `ticket.search()` | (`input?`) => `Promise`\<[`JsonObject`](#jsonobject)\> |
| `ticket.update()` | (`input`) => `Promise`\<[`JsonObject`](#jsonobject)\> |

## References

### helpScoutTicketingProviderManifest

Re-exports [helpScoutTicketingProviderManifest](dist/manifest.md#helpscoutticketingprovidermanifest)
