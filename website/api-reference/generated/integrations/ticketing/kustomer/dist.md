# integrations/ticketing/kustomer/dist

## Interfaces

### JsonObject

#### Extended by

- [`KustomerCreateCustomerDraftInput`](#kustomercreatecustomerdraftinput)
- [`KustomerCreateMessageInput`](#kustomercreatemessageinput)
- [`KustomerListConversationsInput`](#kustomerlistconversationsinput)
- [`KustomerListMessagesInput`](#kustomerlistmessagesinput)
- [`KustomerReadConversationInput`](#kustomerreadconversationinput)
- [`KustomerUpdateConversationInput`](#kustomerupdateconversationinput)

#### Indexable

```ts
[key: string]: JsonValue
```

***

### KustomerCreateCustomerDraftInput

#### Extends

- [`JsonObject`](#jsonobject)

#### Indexable

```ts
[key: string]: JsonValue
```

#### Properties

##### customerId

```ts
customerId: string;
```

##### draft

```ts
draft: JsonObject;
```

##### query?

```ts
optional query?: JsonObject;
```

***

### KustomerCreateMessageInput

#### Extends

- [`JsonObject`](#jsonobject)

#### Indexable

```ts
[key: string]: JsonValue
```

#### Properties

##### message

```ts
message: JsonObject;
```

***

### KustomerListConversationsInput

#### Extends

- [`JsonObject`](#jsonobject)

#### Indexable

```ts
[key: string]: JsonValue
```

#### Properties

##### query?

```ts
optional query?: JsonObject;
```

***

### KustomerListMessagesInput

#### Extends

- [`JsonObject`](#jsonobject)

#### Indexable

```ts
[key: string]: JsonValue
```

#### Properties

##### query?

```ts
optional query?: JsonObject;
```

***

### KustomerReadConversationInput

#### Extends

- [`JsonObject`](#jsonobject)

#### Indexable

```ts
[key: string]: JsonValue
```

#### Properties

##### conversationId

```ts
conversationId: string;
```

***

### KustomerTicketingClientOptions

#### Extended by

- [`KustomerTicketingIntegrationOptions`](#kustomerticketingintegrationoptions)

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
optional providerClient?: KustomerTicketingProviderClient;
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

### KustomerTicketingIntegrationOptions

#### Extends

- [`KustomerTicketingClientOptions`](#kustomerticketingclientoptions)

#### Properties

##### accessToken?

```ts
optional accessToken?: string;
```

###### Inherited from

[`KustomerTicketingClientOptions`](#kustomerticketingclientoptions).[`accessToken`](#accesstoken)

##### apiKey?

```ts
optional apiKey?: string;
```

###### Inherited from

[`KustomerTicketingClientOptions`](#kustomerticketingclientoptions).[`apiKey`](#apikey)

##### baseUrl?

```ts
optional baseUrl?: string;
```

###### Inherited from

[`KustomerTicketingClientOptions`](#kustomerticketingclientoptions).[`baseUrl`](#baseurl)

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

[`KustomerTicketingClientOptions`](#kustomerticketingclientoptions).[`fetch`](#fetch)

##### providerClient?

```ts
optional providerClient?: KustomerTicketingProviderClient;
```

###### Inherited from

[`KustomerTicketingClientOptions`](#kustomerticketingclientoptions).[`providerClient`](#providerclient)

##### retry?

```ts
optional retry?: number | ProviderJsonRetryOptions;
```

###### Inherited from

[`KustomerTicketingClientOptions`](#kustomerticketingclientoptions).[`retry`](#retry)

##### signal?

```ts
optional signal?: AbortSignal;
```

###### Inherited from

[`KustomerTicketingClientOptions`](#kustomerticketingclientoptions).[`signal`](#signal)

##### timeoutMs?

```ts
optional timeoutMs?: number;
```

###### Inherited from

[`KustomerTicketingClientOptions`](#kustomerticketingclientoptions).[`timeoutMs`](#timeoutms)

***

### KustomerTicketingProviderClient

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

##### createCustomerDraft()

```ts
createCustomerDraft(
   customerId,
   payload,
query?): Promise<JsonObject>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `customerId` | `string` |
| `payload` | [`JsonObject`](#jsonobject) |
| `query?` | [`JsonObject`](#jsonobject) |

###### Returns

`Promise`\<[`JsonObject`](#jsonobject)\>

##### createMessage()

```ts
createMessage(payload): Promise<JsonObject>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
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

##### listMessages()

```ts
listMessages(query?): Promise<JsonObject>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
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

### KustomerUpdateConversationInput

#### Extends

- [`JsonObject`](#jsonobject)

#### Indexable

```ts
[key: string]: JsonValue
```

#### Properties

##### conversationId

```ts
conversationId: string;
```

##### patch

```ts
patch: JsonObject;
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

***

### KustomerCreateConversationInput

```ts
type KustomerCreateConversationInput = JsonObject;
```

## Variables

### createKustomerIntegration

```ts
const createKustomerIntegration: typeof createKustomerTicketingIntegration;
```

***

### createKustomerIntegrationOperationHandlers

```ts
const createKustomerIntegrationOperationHandlers: typeof createKustomerTicketingOperationHandlers;
```

## Functions

### createKustomerTicketingClient()

```ts
function createKustomerTicketingClient(options?): KustomerTicketingProviderClient;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options?` | [`KustomerTicketingClientOptions`](#kustomerticketingclientoptions) |

#### Returns

[`KustomerTicketingProviderClient`](#kustomerticketingproviderclient)

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
        label: "@kustomer/apps-server npm package";
        url: "https://www.npmjs.com/package/@kustomer/apps-server";
      }, {
        label: "@kustomer/apps-server-sdk npm package";
        url: "https://www.npmjs.com/package/@kustomer/apps-server-sdk";
     }];
     notes: ["Kustomer's developer surface separates REST APIs for backend systems from Apps Platform and Chat SDK packages.", "Support workflow calls use the built-in Kustomer REST adapter when baseUrl and accessToken/apiKey are configured.", "A host-provided KustomerTicketingProviderClient can still override the built-in REST adapter.", "The package declares an explicit REST-adapter exception because the checked Kustomer npm SDK packages do not provide a suitable backend support/ticketing REST client.", "Coverage is limited to Kustomer conversation create/read/update/list, message list/create, customer draft creation, and org readiness for support workflows.", "This package intentionally does not copy the old generated full Kustomer public API clone."];
     scope: "support-workflow-subset";
  };
  credentialRequirements: [{
     id: "kustomer-base-url";
     label: "Kustomer API base URL";
     required: false;
   }, {
     id: "kustomer-api-access";
     label: "Kustomer API access token or API key";
     metadata: {
        defaultClientPolicy: "built-in-rest-adapter";
     };
     required: true;
   }, {
     id: "kustomer-api-permissions";
     label: "Kustomer API permissions";
     metadata: {
        privilegeGuidance: "Kustomer API keys are governed by roles and API permissions; these strings are provider permission labels, not OAuth scopes.";
        scopeKind: "provider-permission-labels";
     };
     required: true;
     scopes: ["org.user.conversation.read", "org.user.conversation.write", "org.permission.conversation.create", "org.user.message.read", "org.user.message.write", "org.permission.message.create", "org.permission.draft.create", "org.admin.user.read"];
  }];
  directions: ["bidirectional"];
  id: "ticketing.kustomer";
  limitations: ["REST-adapter or host-client configuration owns auth, tenancy, pagination, retries, rate limits, and provider response normalization policy.", "Conversation model, queues, teams, custom objects, and message visibility are host-client configuration."];
  maintainers: [{
     name: "Cognidesk";
     type: "official";
  }];
  metadata: {
     implementation: {
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
           alias: "kustomer.message.list";
           id: "messages.list";
           source: "provider-rest-adapter";
           target: "restAdapter.listMessages";
         }, {
           alias: "ticket.comment.create";
           id: "messages.create";
           source: "provider-rest-adapter";
           target: "restAdapter.createMessage";
         }, {
           alias: "kustomer.customerDraft.create";
           id: "customer_drafts.create";
           source: "provider-rest-adapter";
           target: "restAdapter.createCustomerDraft";
         }, {
           alias: "kustomer.readiness";
           id: "readiness";
           source: "provider-rest-adapter";
           target: "restAdapter.readiness";
        }];
        implementationStrategy: "provider-rest-adapter";
        sdkDecision: {
           candidates: (
              | "@kustomer/apps-server"
              | "@kustomer/apps-client"
              | "@kustomer/apps-server-sdk"
             | "@kustomer/chat-react-native")[];
           checkedAt: "2026-06-25";
           reason: "Kustomer's maintained JavaScript packages cover Apps Platform and Chat SDK runtimes, but do not provide a backend support/ticketing REST client for the conversation, message, customer draft, and readiness operations exposed by this package.";
           rejectedSdkPackages: readonly [{
              checkedVersion: "3.0.5";
              license: "MIT";
              packageName: "@kustomer/apps-server";
              reason: "Official Apps Platform server SDK for building Kustomer apps, not a backend public REST ticketing client.";
            }, {
              checkedVersion: "3.0.5";
              license: "MIT";
              packageName: "@kustomer/apps-client";
              reason: "Official Apps Platform client SDK for Kustomer app UI/runtime behavior, not backend support ticketing operations.";
            }, {
              checkedVersion: "0.0.60";
              license: "not-declared";
              packageName: "@kustomer/apps-server-sdk";
              reason: "Legacy app-building SDK with limited app API helpers, not a maintained public REST ticketing client for this support surface.";
            }, {
              checkedVersion: "5.3.4";
              license: "SEE LICENSE AT https://www.kustomer.com/legal/supplemental-terms/";
              packageName: "@kustomer/chat-react-native";
              reason: "React Native Chat SDK for customer-facing chat UI, not a server-side support ticketing REST client.";
           }];
           result: "no-official-maintained-ticketing-rest-sdk";
           verdict: "no-official-sdk-rest-adapter";
        };
     };
     implementationStrategy: "provider-rest-adapter";
     issue: 35;
     manifestOnlySafe: true;
     providerClient: {
        defaultClientPolicy: "built-in-rest-adapter";
        importPolicy: "runtime-override";
        interface: "KustomerTicketingProviderClient";
        package: "optional-override";
     };
     providerRestAdapterException: {
        checkedAt: "2026-06-25";
        defaultClientPolicy: "built-in-kustomer-rest-adapter-with-access-token";
        reason: "Kustomer's maintained JavaScript packages cover Apps Platform and Chat SDK runtimes, but do not provide a backend support/ticketing REST client for the conversation, message, customer draft, and readiness operations exposed by this package.";
        rejectedSdkPackages: readonly [{
           checkedVersion: "3.0.5";
           license: "MIT";
           packageName: "@kustomer/apps-server";
           reason: "Official Apps Platform server SDK for building Kustomer apps, not a backend public REST ticketing client.";
         }, {
           checkedVersion: "3.0.5";
           license: "MIT";
           packageName: "@kustomer/apps-client";
           reason: "Official Apps Platform client SDK for Kustomer app UI/runtime behavior, not backend support ticketing operations.";
         }, {
           checkedVersion: "0.0.60";
           license: "not-declared";
           packageName: "@kustomer/apps-server-sdk";
           reason: "Legacy app-building SDK with limited app API helpers, not a maintained public REST ticketing client for this support surface.";
         }, {
           checkedVersion: "5.3.4";
           license: "SEE LICENSE AT https://www.kustomer.com/legal/supplemental-terms/";
           packageName: "@kustomer/chat-react-native";
           reason: "React Native Chat SDK for customer-facing chat UI, not a server-side support ticketing REST client.";
        }];
        result: "no-official-maintained-ticketing-rest-sdk";
        typedClientOverride: "KustomerTicketingProviderClient";
     };
     sdkDecision: {
        candidates: (
           | "@kustomer/apps-server"
           | "@kustomer/apps-client"
           | "@kustomer/apps-server-sdk"
          | "@kustomer/chat-react-native")[];
        checkedAt: "2026-06-25";
        reason: "Kustomer's maintained JavaScript packages cover Apps Platform and Chat SDK runtimes, but do not provide a backend support/ticketing REST client for the conversation, message, customer draft, and readiness operations exposed by this package.";
        rejectedSdkPackages: readonly [{
           checkedVersion: "3.0.5";
           license: "MIT";
           packageName: "@kustomer/apps-server";
           reason: "Official Apps Platform server SDK for building Kustomer apps, not a backend public REST ticketing client.";
         }, {
           checkedVersion: "3.0.5";
           license: "MIT";
           packageName: "@kustomer/apps-client";
           reason: "Official Apps Platform client SDK for Kustomer app UI/runtime behavior, not backend support ticketing operations.";
         }, {
           checkedVersion: "0.0.60";
           license: "not-declared";
           packageName: "@kustomer/apps-server-sdk";
           reason: "Legacy app-building SDK with limited app API helpers, not a maintained public REST ticketing client for this support surface.";
         }, {
           checkedVersion: "5.3.4";
           license: "SEE LICENSE AT https://www.kustomer.com/legal/supplemental-terms/";
           packageName: "@kustomer/chat-react-native";
           reason: "React Native Chat SDK for customer-facing chat UI, not a server-side support ticketing REST client.";
        }];
        result: "no-official-maintained-ticketing-rest-sdk";
        verdict: "no-official-sdk-rest-adapter";
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
| `options?` | [`KustomerTicketingIntegrationOptions`](#kustomerticketingintegrationoptions) |

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
        `label`: `"@kustomer/apps-server npm package"`;
        `url`: `"https://www.npmjs.com/package/@kustomer/apps-server"`;
      \}, \{
        `label`: `"@kustomer/apps-server-sdk npm package"`;
        `url`: `"https://www.npmjs.com/package/@kustomer/apps-server-sdk"`;
     \}\];
     `notes`: \[`"Kustomer's developer surface separates REST APIs for backend systems from Apps Platform and Chat SDK packages."`, `"Support workflow calls use the built-in Kustomer REST adapter when baseUrl and accessToken/apiKey are configured."`, `"A host-provided KustomerTicketingProviderClient can still override the built-in REST adapter."`, `"The package declares an explicit REST-adapter exception because the checked Kustomer npm SDK packages do not provide a suitable backend support/ticketing REST client."`, `"Coverage is limited to Kustomer conversation create/read/update/list, message list/create, customer draft creation, and org readiness for support workflows."`, `"This package intentionally does not copy the old generated full Kustomer public API clone."`\];
     `scope`: `"support-workflow-subset"`;
  \};
  `credentialRequirements`: \[\{
     `id`: `"kustomer-base-url"`;
     `label`: `"Kustomer API base URL"`;
     `required`: `false`;
   \}, \{
     `id`: `"kustomer-api-access"`;
     `label`: `"Kustomer API access token or API key"`;
     `metadata`: \{
        `defaultClientPolicy`: `"built-in-rest-adapter"`;
     \};
     `required`: `true`;
   \}, \{
     `id`: `"kustomer-api-permissions"`;
     `label`: `"Kustomer API permissions"`;
     `metadata`: \{
        `privilegeGuidance`: `"Kustomer API keys are governed by roles and API permissions; these strings are provider permission labels, not OAuth scopes."`;
        `scopeKind`: `"provider-permission-labels"`;
     \};
     `required`: `true`;
     `scopes`: \[`"org.user.conversation.read"`, `"org.user.conversation.write"`, `"org.permission.conversation.create"`, `"org.user.message.read"`, `"org.user.message.write"`, `"org.permission.message.create"`, `"org.permission.draft.create"`, `"org.admin.user.read"`\];
  \}\];
  `directions`: \[`"bidirectional"`\];
  `id`: `"ticketing.kustomer"`;
  `limitations`: \[`"REST-adapter or host-client configuration owns auth, tenancy, pagination, retries, rate limits, and provider response normalization policy."`, `"Conversation model, queues, teams, custom objects, and message visibility are host-client configuration."`\];
  `maintainers`: \[\{
     `name`: `"Cognidesk"`;
     `type`: `"official"`;
  \}\];
  `metadata`: \{
     `implementation`: \{
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
           `alias`: `"kustomer.message.list"`;
           `id`: `"messages.list"`;
           `source`: `"provider-rest-adapter"`;
           `target`: `"restAdapter.listMessages"`;
         \}, \{
           `alias`: `"ticket.comment.create"`;
           `id`: `"messages.create"`;
           `source`: `"provider-rest-adapter"`;
           `target`: `"restAdapter.createMessage"`;
         \}, \{
           `alias`: `"kustomer.customerDraft.create"`;
           `id`: `"customer_drafts.create"`;
           `source`: `"provider-rest-adapter"`;
           `target`: `"restAdapter.createCustomerDraft"`;
         \}, \{
           `alias`: `"kustomer.readiness"`;
           `id`: `"readiness"`;
           `source`: `"provider-rest-adapter"`;
           `target`: `"restAdapter.readiness"`;
        \}\];
        `implementationStrategy`: `"provider-rest-adapter"`;
        `sdkDecision`: \{
           `candidates`: (
              \| `"@kustomer/apps-server"`
              \| `"@kustomer/apps-client"`
              \| `"@kustomer/apps-server-sdk"`
             \| `"@kustomer/chat-react-native"`)[];
           `checkedAt`: `"2026-06-25"`;
           `reason`: `"Kustomer's maintained JavaScript packages cover Apps Platform and Chat SDK runtimes, but do not provide a backend support/ticketing REST client for the conversation, message, customer draft, and readiness operations exposed by this package."`;
           `rejectedSdkPackages`: readonly \[\{
              `checkedVersion`: `"3.0.5"`;
              `license`: `"MIT"`;
              `packageName`: `"@kustomer/apps-server"`;
              `reason`: `"Official Apps Platform server SDK for building Kustomer apps, not a backend public REST ticketing client."`;
            \}, \{
              `checkedVersion`: `"3.0.5"`;
              `license`: `"MIT"`;
              `packageName`: `"@kustomer/apps-client"`;
              `reason`: `"Official Apps Platform client SDK for Kustomer app UI/runtime behavior, not backend support ticketing operations."`;
            \}, \{
              `checkedVersion`: `"0.0.60"`;
              `license`: `"not-declared"`;
              `packageName`: `"@kustomer/apps-server-sdk"`;
              `reason`: `"Legacy app-building SDK with limited app API helpers, not a maintained public REST ticketing client for this support surface."`;
            \}, \{
              `checkedVersion`: `"5.3.4"`;
              `license`: `"SEE LICENSE AT https://www.kustomer.com/legal/supplemental-terms/"`;
              `packageName`: `"@kustomer/chat-react-native"`;
              `reason`: `"React Native Chat SDK for customer-facing chat UI, not a server-side support ticketing REST client."`;
           \}\];
           `result`: `"no-official-maintained-ticketing-rest-sdk"`;
           `verdict`: `"no-official-sdk-rest-adapter"`;
        \};
     \};
     `implementationStrategy`: `"provider-rest-adapter"`;
     `issue`: `35`;
     `manifestOnlySafe`: `true`;
     `providerClient`: \{
        `defaultClientPolicy`: `"built-in-rest-adapter"`;
        `importPolicy`: `"runtime-override"`;
        `interface`: `"KustomerTicketingProviderClient"`;
        `package`: `"optional-override"`;
     \};
     `providerRestAdapterException`: \{
        `checkedAt`: `"2026-06-25"`;
        `defaultClientPolicy`: `"built-in-kustomer-rest-adapter-with-access-token"`;
        `reason`: `"Kustomer's maintained JavaScript packages cover Apps Platform and Chat SDK runtimes, but do not provide a backend support/ticketing REST client for the conversation, message, customer draft, and readiness operations exposed by this package."`;
        `rejectedSdkPackages`: readonly \[\{
           `checkedVersion`: `"3.0.5"`;
           `license`: `"MIT"`;
           `packageName`: `"@kustomer/apps-server"`;
           `reason`: `"Official Apps Platform server SDK for building Kustomer apps, not a backend public REST ticketing client."`;
         \}, \{
           `checkedVersion`: `"3.0.5"`;
           `license`: `"MIT"`;
           `packageName`: `"@kustomer/apps-client"`;
           `reason`: `"Official Apps Platform client SDK for Kustomer app UI/runtime behavior, not backend support ticketing operations."`;
         \}, \{
           `checkedVersion`: `"0.0.60"`;
           `license`: `"not-declared"`;
           `packageName`: `"@kustomer/apps-server-sdk"`;
           `reason`: `"Legacy app-building SDK with limited app API helpers, not a maintained public REST ticketing client for this support surface."`;
         \}, \{
           `checkedVersion`: `"5.3.4"`;
           `license`: `"SEE LICENSE AT https://www.kustomer.com/legal/supplemental-terms/"`;
           `packageName`: `"@kustomer/chat-react-native"`;
           `reason`: `"React Native Chat SDK for customer-facing chat UI, not a server-side support ticketing REST client."`;
        \}\];
        `result`: `"no-official-maintained-ticketing-rest-sdk"`;
        `typedClientOverride`: `"KustomerTicketingProviderClient"`;
     \};
     `sdkDecision`: \{
        `candidates`: (
           \| `"@kustomer/apps-server"`
           \| `"@kustomer/apps-client"`
           \| `"@kustomer/apps-server-sdk"`
          \| `"@kustomer/chat-react-native"`)[];
        `checkedAt`: `"2026-06-25"`;
        `reason`: `"Kustomer's maintained JavaScript packages cover Apps Platform and Chat SDK runtimes, but do not provide a backend support/ticketing REST client for the conversation, message, customer draft, and readiness operations exposed by this package."`;
        `rejectedSdkPackages`: readonly \[\{
           `checkedVersion`: `"3.0.5"`;
           `license`: `"MIT"`;
           `packageName`: `"@kustomer/apps-server"`;
           `reason`: `"Official Apps Platform server SDK for building Kustomer apps, not a backend public REST ticketing client."`;
         \}, \{
           `checkedVersion`: `"3.0.5"`;
           `license`: `"MIT"`;
           `packageName`: `"@kustomer/apps-client"`;
           `reason`: `"Official Apps Platform client SDK for Kustomer app UI/runtime behavior, not backend support ticketing operations."`;
         \}, \{
           `checkedVersion`: `"0.0.60"`;
           `license`: `"not-declared"`;
           `packageName`: `"@kustomer/apps-server-sdk"`;
           `reason`: `"Legacy app-building SDK with limited app API helpers, not a maintained public REST ticketing client for this support surface."`;
         \}, \{
           `checkedVersion`: `"5.3.4"`;
           `license`: `"SEE LICENSE AT https://www.kustomer.com/legal/supplemental-terms/"`;
           `packageName`: `"@kustomer/chat-react-native"`;
           `reason`: `"React Native Chat SDK for customer-facing chat UI, not a server-side support ticketing REST client."`;
        \}\];
        `result`: `"no-official-maintained-ticketing-rest-sdk"`;
        `verdict`: `"no-official-sdk-rest-adapter"`;
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

***

### createKustomerTicketingOperationHandlers()

```ts
function createKustomerTicketingOperationHandlers(options?): {
  kustomer.customerDraft.create: (input) => Promise<JsonObject>;
  kustomer.message.list: (input?) => Promise<JsonObject>;
  kustomer.readiness: () => Promise<JsonObject>;
  ticket.comment.create: (input) => Promise<JsonObject>;
  ticket.create: (input) => Promise<JsonObject>;
  ticket.read: (input) => Promise<JsonObject>;
  ticket.search: (input?) => Promise<JsonObject>;
  ticket.update: (input) => Promise<JsonObject>;
};
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options?` | [`KustomerTicketingIntegrationOptions`](#kustomerticketingintegrationoptions) |

#### Returns

```ts
{
  kustomer.customerDraft.create: (input) => Promise<JsonObject>;
  kustomer.message.list: (input?) => Promise<JsonObject>;
  kustomer.readiness: () => Promise<JsonObject>;
  ticket.comment.create: (input) => Promise<JsonObject>;
  ticket.create: (input) => Promise<JsonObject>;
  ticket.read: (input) => Promise<JsonObject>;
  ticket.search: (input?) => Promise<JsonObject>;
  ticket.update: (input) => Promise<JsonObject>;
}
```

| Name | Type |
| ------ | ------ |
| `kustomer.customerDraft.create()` | (`input`) => `Promise`\<[`JsonObject`](#jsonobject)\> |
| `kustomer.message.list()` | (`input?`) => `Promise`\<[`JsonObject`](#jsonobject)\> |
| `kustomer.readiness()` | () => `Promise`\<[`JsonObject`](#jsonobject)\> |
| `ticket.comment.create()` | (`input`) => `Promise`\<[`JsonObject`](#jsonobject)\> |
| `ticket.create()` | (`input`) => `Promise`\<[`JsonObject`](#jsonobject)\> |
| `ticket.read()` | (`input`) => `Promise`\<[`JsonObject`](#jsonobject)\> |
| `ticket.search()` | (`input?`) => `Promise`\<[`JsonObject`](#jsonobject)\> |
| `ticket.update()` | (`input`) => `Promise`\<[`JsonObject`](#jsonobject)\> |

## References

### kustomerTicketingProviderManifest

Re-exports [kustomerTicketingProviderManifest](dist/manifest.md#kustomerticketingprovidermanifest)
