# integrations/ticketing/gorgias/dist

## Interfaces

### GorgiasTicketingClientOptions

#### Extended by

- [`GorgiasTicketingIntegrationOptions`](#gorgiasticketingintegrationoptions)

#### Properties

##### accessToken?

```ts
optional accessToken?: string;
```

##### apiEmail?

```ts
optional apiEmail?: string;
```

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
optional providerClient?: GorgiasTicketingProviderClient;
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

### GorgiasTicketingIntegrationOptions

#### Extends

- [`GorgiasTicketingClientOptions`](#gorgiasticketingclientoptions)

#### Properties

##### accessToken?

```ts
optional accessToken?: string;
```

###### Inherited from

[`GorgiasTicketingClientOptions`](#gorgiasticketingclientoptions).[`accessToken`](#accesstoken)

##### apiEmail?

```ts
optional apiEmail?: string;
```

###### Inherited from

[`GorgiasTicketingClientOptions`](#gorgiasticketingclientoptions).[`apiEmail`](#apiemail)

##### apiKey?

```ts
optional apiKey?: string;
```

###### Inherited from

[`GorgiasTicketingClientOptions`](#gorgiasticketingclientoptions).[`apiKey`](#apikey)

##### apiUsername?

```ts
optional apiUsername?: string;
```

###### Inherited from

[`GorgiasTicketingClientOptions`](#gorgiasticketingclientoptions).[`apiUsername`](#apiusername)

##### baseUrl?

```ts
optional baseUrl?: string;
```

###### Inherited from

[`GorgiasTicketingClientOptions`](#gorgiasticketingclientoptions).[`baseUrl`](#baseurl)

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

[`GorgiasTicketingClientOptions`](#gorgiasticketingclientoptions).[`fetch`](#fetch)

##### providerClient?

```ts
optional providerClient?: GorgiasTicketingProviderClient;
```

###### Inherited from

[`GorgiasTicketingClientOptions`](#gorgiasticketingclientoptions).[`providerClient`](#providerclient)

##### retry?

```ts
optional retry?: number | ProviderJsonRetryOptions;
```

###### Inherited from

[`GorgiasTicketingClientOptions`](#gorgiasticketingclientoptions).[`retry`](#retry)

##### signal?

```ts
optional signal?: AbortSignal;
```

###### Inherited from

[`GorgiasTicketingClientOptions`](#gorgiasticketingclientoptions).[`signal`](#signal)

##### timeoutMs?

```ts
optional timeoutMs?: number;
```

###### Inherited from

[`GorgiasTicketingClientOptions`](#gorgiasticketingclientoptions).[`timeoutMs`](#timeoutms)

***

### GorgiasTicketingProviderClient

#### Properties

##### rawClient?

```ts
optional rawClient?: unknown;
```

#### Methods

##### createTicket()

```ts
createTicket(payload): Promise<JsonObject>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `payload` | [`JsonObject`](#jsonobject) |

###### Returns

`Promise`\<[`JsonObject`](#jsonobject)\>

##### createTicketMessage()

```ts
createTicketMessage(ticketId, payload): Promise<JsonObject>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `ticketId` | `string` \| `number` |
| `payload` | [`JsonObject`](#jsonobject) |

###### Returns

`Promise`\<[`JsonObject`](#jsonobject)\>

##### getTicket()

```ts
getTicket(ticketId): Promise<JsonObject>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `ticketId` | `string` \| `number` |

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

##### listTickets()

```ts
listTickets(query?): Promise<JsonObject>;
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

##### updateTicket()

```ts
updateTicket(ticketId, patch): Promise<JsonObject>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `ticketId` | `string` \| `number` |
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

## Variables

### createGorgiasIntegration

```ts
const createGorgiasIntegration: typeof createGorgiasTicketingIntegration;
```

***

### createGorgiasIntegrationOperationHandlers

```ts
const createGorgiasIntegrationOperationHandlers: typeof createGorgiasTicketingOperationHandlers;
```

## Functions

### createGorgiasTicketingClient()

```ts
function createGorgiasTicketingClient(options?): GorgiasTicketingProviderClient;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options?` | [`GorgiasTicketingClientOptions`](#gorgiasticketingclientoptions) |

#### Returns

[`GorgiasTicketingProviderClient`](#gorgiasticketingproviderclient)

***

### createGorgiasTicketingIntegration()

```ts
function createGorgiasTicketingIntegration(options?): DefinedIntegration<{
  capabilities: [{
     capability: "create-provider-object";
     changesWorkflow: true;
     exposesSensitiveData: true;
     providerObjects: [{
        kind: "gorgiasTicket";
        label: "Gorgias Ticket";
      }, {
        kind: "gorgiasMessage";
        label: "Gorgias Message";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     capability: "read-provider-object";
     exposesSensitiveData: true;
     providerObjects: [{
        kind: "gorgiasTicket";
        label: "Gorgias Ticket";
      }, {
        kind: "gorgiasMessage";
        label: "Gorgias Message";
     }];
     requiresCredential: true;
   }, {
     capability: "update-provider-object";
     changesWorkflow: true;
     exposesSensitiveData: true;
     providerObjects: [{
        kind: "gorgiasTicket";
        label: "Gorgias Ticket";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     capability: "search-provider-object";
     exposesSensitiveData: true;
     providerObjects: [{
        kind: "gorgiasTicket";
        label: "Gorgias Ticket";
      }, {
        kind: "gorgiasMessage";
        label: "Gorgias Message";
     }];
     requiresCredential: true;
   }, {
     capability: "handoff";
     changesWorkflow: true;
     exposesSensitiveData: true;
     providerObjects: [{
        kind: "gorgiasTicket";
        label: "Gorgias Ticket";
      }, {
        kind: "gorgiasMessage";
        label: "Gorgias Message";
     }];
     requiresCredential: true;
     sideEffect: true;
  }];
  category: "ticketing";
  channelAudiences: ["customer-facing", "internal-support", "mixed"];
  coverage: {
     evidence: [{
        label: "Gorgias developer docs";
        url: "https://developers.gorgias.com/";
      }, {
        label: "Gorgias REST API credentials";
        url: "https://docs.gorgias.com/en-US/rest-api-208286";
      }, {
        label: "Gorgias Create ticket";
        url: "https://developers.gorgias.com/reference/create-ticket";
      }, {
        label: "Gorgias Create ticket message";
        url: "https://developers.gorgias.com/reference/create-ticket-message";
      }, {
        label: "Gorgias OAuth2 Scopes";
        url: "https://developers.gorgias.com/docs/oauth2-scopes";
      }, {
        label: "gorgias-client package review";
        url: "https://www.npmjs.com/package/gorgias-client";
     }];
     notes: ["Runtime coverage is provided through the built-in Gorgias REST adapter when baseUrl and accessToken/apiKey are configured.", "A host-provided GorgiasTicketingProviderClient can still override the built-in REST adapter.", "Coverage is limited to delegated Gorgias ticket create/read/update/list operations, ticket-message create/list operations, and account readiness for Cognidesk support workflows.", "This package intentionally does not copy the old generated full Gorgias public API clone."];
     scope: "support-workflow-subset";
  };
  credentialRequirements: [{
     id: "gorgias-base-url";
     label: "Gorgias REST API base URL";
     required: true;
   }, {
     id: "gorgias-api-access";
     label: "Gorgias access token or API key";
     metadata: {
        authSchemes: readonly ["bearer", "basic-email-api-key"];
     };
     required: true;
   }, {
     id: "gorgias-api-username";
     label: "Gorgias API email or username for Basic auth";
     metadata: {
        requiredWhen: "using-basic-email-api-key";
     };
     required: false;
  }];
  directions: ["bidirectional"];
  id: "ticketing.gorgias";
  limitations: ["Domain URL, ticket channels, message channels, macros, Shopify context, automations, and visibility are SDK-user configuration.", "The REST adapter covers JSON operations; multipart or provider-specific advanced endpoints belong in an injected GorgiasTicketingProviderClient or rawRequest."];
  maintainers: [{
     name: "Cognidesk";
     type: "official";
  }];
  metadata: {
     delegatedSupportSurface: {
        allowlistedOperations: readonly ["tickets.create", "tickets.read", "tickets.update", "tickets.list", "ticket_messages.create", "messages.list", "account.read"];
        source: "Built-in Gorgias REST adapter";
     };
     implementation: {
        defaultBaseUrl: "none-account-base-url-required";
        defaultFetchClient: "runtime-fetch-or-configured-fetch";
        defaultHttpClient: "providerJsonRequest";
        manifestImport: "no-client-initialization";
        providerClientInterface: "GorgiasTicketingProviderClient";
        providerClientOverride: true;
        strategy: "provider-rest-adapter";
     };
     implementationStrategy: "provider-rest-adapter";
     issue: 35;
     providerClient: {
        defaultClient: "built-in-rest-adapter";
        importPolicy: "runtime-override";
        injectionPolicy: "optional-override";
        interface: "GorgiasTicketingProviderClient";
     };
     providerRestAdapterException: {
        allowlistedOperations: readonly ["POST /api/tickets", "GET /api/tickets/{ticket_id}", "PUT /api/tickets/{ticket_id}", "GET /api/tickets", "POST /api/tickets/{ticket_id}/messages", "GET /api/messages", "GET /api/account"];
        authSchemes: readonly ["bearer-oauth-access-token", "basic-email-or-username-api-key"];
        baseUrlPolicy: "required-account-subdomain-url; accepts https://{subdomain}.gorgias.com or the Gorgias Base API URL ending in /api";
        defaultClient: "built-in-rest-adapter";
        providerSdkDependencyPolicy: "do-not-add-third-party-gorgias-sdk-as-default-runtime-dependency";
        rawClientEscapeHatch: "GorgiasTicketingProviderClient.rawRequest";
        reason: "No official maintained Gorgias JavaScript/TypeScript runtime SDK was verified; this package owns a narrow REST adapter until a suitable provider SDK exists.";
        strict: true;
     };
     sdkDecision: "no-official-sdk-rest-adapter";
     sdkEvaluation: {
        checkedAt: "2026-06-25";
        officialBackendJavaScriptSdk: false;
        officialDocsSurface: "Gorgias documents REST API and OAuth/API-key authentication against each account subdomain; no official maintained npm JavaScript runtime SDK was verified.";
        result: "no-official-maintained-runtime-sdk";
        reviewedPackages: readonly [{
           package: "gorgias-client";
           reason: "Typed and recent, but maintained outside Gorgias and its public client is Basic-auth/subdomain oriented; it does not expose a Bearer OAuth default path or account-readiness resource for this package's runtime contract.";
           result: "not-used-as-package-default";
           version: "2.0.4";
         }, {
           package: "@friggframework/api-module-gorgias";
           reason: "Framework module rather than a standalone official Gorgias backend SDK for this runtime package.";
           result: "not-used-as-package-default";
           version: "0.10.1";
         }, {
           package: "@frontend-sdk/gorgias";
           reason: "Frontend/Shogun integration package, not a maintained Gorgias ticketing REST SDK.";
           result: "not-runtime-ticketing-sdk";
           version: "0.26.0";
         }, {
           package: "@pipedream/gorgias";
           reason: "Pipedream component package rather than a typed raw client suitable as this package's default runtime SDK.";
           result: "not-runtime-ticketing-sdk";
           version: "0.6.0";
        }];
     };
  };
  name: "Gorgias";
  operations: [{
     alias: "ticket.create";
     capability: "create-provider-object";
     changesWorkflow: true;
     exposesSensitiveData: true;
     providerObject: "ticket";
     providerOperation: "POST /api/tickets";
     sideEffect: true;
   }, {
     alias: "ticket.read";
     capability: "read-provider-object";
     exposesSensitiveData: true;
     providerObject: "ticket";
     providerOperation: "GET /api/tickets/{ticket_id}";
   }, {
     alias: "ticket.update";
     capability: "update-provider-object";
     changesWorkflow: true;
     exposesSensitiveData: true;
     providerObject: "ticket";
     providerOperation: "PUT /api/tickets/{ticket_id}";
     sideEffect: true;
  }];
  packageName: "@cognidesk/integration-ticketing-gorgias";
  privacyNotes: ["Gorgias tickets can include ecommerce context, customer identifiers, messages, notes, tags, and assignment metadata."];
  provider: "gorgias";
  trustLevel: "official";
}, unknown, {
  gorgias.message.list: (input?) => Promise<JsonObject>;
  gorgias.readiness: () => Promise<JsonObject>;
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
| `options?` | [`GorgiasTicketingIntegrationOptions`](#gorgiasticketingintegrationoptions) |

#### Returns

[`DefinedIntegration`](../../../packages/integration-kit/dist.md#definedintegration)\<\{
  `capabilities`: \[\{
     `capability`: `"create-provider-object"`;
     `changesWorkflow`: `true`;
     `exposesSensitiveData`: `true`;
     `providerObjects`: \[\{
        `kind`: `"gorgiasTicket"`;
        `label`: `"Gorgias Ticket"`;
      \}, \{
        `kind`: `"gorgiasMessage"`;
        `label`: `"Gorgias Message"`;
     \}\];
     `requiresCredential`: `true`;
     `sideEffect`: `true`;
   \}, \{
     `capability`: `"read-provider-object"`;
     `exposesSensitiveData`: `true`;
     `providerObjects`: \[\{
        `kind`: `"gorgiasTicket"`;
        `label`: `"Gorgias Ticket"`;
      \}, \{
        `kind`: `"gorgiasMessage"`;
        `label`: `"Gorgias Message"`;
     \}\];
     `requiresCredential`: `true`;
   \}, \{
     `capability`: `"update-provider-object"`;
     `changesWorkflow`: `true`;
     `exposesSensitiveData`: `true`;
     `providerObjects`: \[\{
        `kind`: `"gorgiasTicket"`;
        `label`: `"Gorgias Ticket"`;
     \}\];
     `requiresCredential`: `true`;
     `sideEffect`: `true`;
   \}, \{
     `capability`: `"search-provider-object"`;
     `exposesSensitiveData`: `true`;
     `providerObjects`: \[\{
        `kind`: `"gorgiasTicket"`;
        `label`: `"Gorgias Ticket"`;
      \}, \{
        `kind`: `"gorgiasMessage"`;
        `label`: `"Gorgias Message"`;
     \}\];
     `requiresCredential`: `true`;
   \}, \{
     `capability`: `"handoff"`;
     `changesWorkflow`: `true`;
     `exposesSensitiveData`: `true`;
     `providerObjects`: \[\{
        `kind`: `"gorgiasTicket"`;
        `label`: `"Gorgias Ticket"`;
      \}, \{
        `kind`: `"gorgiasMessage"`;
        `label`: `"Gorgias Message"`;
     \}\];
     `requiresCredential`: `true`;
     `sideEffect`: `true`;
  \}\];
  `category`: `"ticketing"`;
  `channelAudiences`: \[`"customer-facing"`, `"internal-support"`, `"mixed"`\];
  `coverage`: \{
     `evidence`: \[\{
        `label`: `"Gorgias developer docs"`;
        `url`: `"https://developers.gorgias.com/"`;
      \}, \{
        `label`: `"Gorgias REST API credentials"`;
        `url`: `"https://docs.gorgias.com/en-US/rest-api-208286"`;
      \}, \{
        `label`: `"Gorgias Create ticket"`;
        `url`: `"https://developers.gorgias.com/reference/create-ticket"`;
      \}, \{
        `label`: `"Gorgias Create ticket message"`;
        `url`: `"https://developers.gorgias.com/reference/create-ticket-message"`;
      \}, \{
        `label`: `"Gorgias OAuth2 Scopes"`;
        `url`: `"https://developers.gorgias.com/docs/oauth2-scopes"`;
      \}, \{
        `label`: `"gorgias-client package review"`;
        `url`: `"https://www.npmjs.com/package/gorgias-client"`;
     \}\];
     `notes`: \[`"Runtime coverage is provided through the built-in Gorgias REST adapter when baseUrl and accessToken/apiKey are configured."`, `"A host-provided GorgiasTicketingProviderClient can still override the built-in REST adapter."`, `"Coverage is limited to delegated Gorgias ticket create/read/update/list operations, ticket-message create/list operations, and account readiness for Cognidesk support workflows."`, `"This package intentionally does not copy the old generated full Gorgias public API clone."`\];
     `scope`: `"support-workflow-subset"`;
  \};
  `credentialRequirements`: \[\{
     `id`: `"gorgias-base-url"`;
     `label`: `"Gorgias REST API base URL"`;
     `required`: `true`;
   \}, \{
     `id`: `"gorgias-api-access"`;
     `label`: `"Gorgias access token or API key"`;
     `metadata`: \{
        `authSchemes`: readonly \[`"bearer"`, `"basic-email-api-key"`\];
     \};
     `required`: `true`;
   \}, \{
     `id`: `"gorgias-api-username"`;
     `label`: `"Gorgias API email or username for Basic auth"`;
     `metadata`: \{
        `requiredWhen`: `"using-basic-email-api-key"`;
     \};
     `required`: `false`;
  \}\];
  `directions`: \[`"bidirectional"`\];
  `id`: `"ticketing.gorgias"`;
  `limitations`: \[`"Domain URL, ticket channels, message channels, macros, Shopify context, automations, and visibility are SDK-user configuration."`, `"The REST adapter covers JSON operations; multipart or provider-specific advanced endpoints belong in an injected GorgiasTicketingProviderClient or rawRequest."`\];
  `maintainers`: \[\{
     `name`: `"Cognidesk"`;
     `type`: `"official"`;
  \}\];
  `metadata`: \{
     `delegatedSupportSurface`: \{
        `allowlistedOperations`: readonly \[`"tickets.create"`, `"tickets.read"`, `"tickets.update"`, `"tickets.list"`, `"ticket_messages.create"`, `"messages.list"`, `"account.read"`\];
        `source`: `"Built-in Gorgias REST adapter"`;
     \};
     `implementation`: \{
        `defaultBaseUrl`: `"none-account-base-url-required"`;
        `defaultFetchClient`: `"runtime-fetch-or-configured-fetch"`;
        `defaultHttpClient`: `"providerJsonRequest"`;
        `manifestImport`: `"no-client-initialization"`;
        `providerClientInterface`: `"GorgiasTicketingProviderClient"`;
        `providerClientOverride`: `true`;
        `strategy`: `"provider-rest-adapter"`;
     \};
     `implementationStrategy`: `"provider-rest-adapter"`;
     `issue`: `35`;
     `providerClient`: \{
        `defaultClient`: `"built-in-rest-adapter"`;
        `importPolicy`: `"runtime-override"`;
        `injectionPolicy`: `"optional-override"`;
        `interface`: `"GorgiasTicketingProviderClient"`;
     \};
     `providerRestAdapterException`: \{
        `allowlistedOperations`: readonly \[`"POST /api/tickets"`, `"GET /api/tickets/{ticket_id}"`, `"PUT /api/tickets/{ticket_id}"`, `"GET /api/tickets"`, `"POST /api/tickets/{ticket_id}/messages"`, `"GET /api/messages"`, `"GET /api/account"`\];
        `authSchemes`: readonly \[`"bearer-oauth-access-token"`, `"basic-email-or-username-api-key"`\];
        `baseUrlPolicy`: `"required-account-subdomain-url; accepts https://{subdomain}.gorgias.com or the Gorgias Base API URL ending in /api"`;
        `defaultClient`: `"built-in-rest-adapter"`;
        `providerSdkDependencyPolicy`: `"do-not-add-third-party-gorgias-sdk-as-default-runtime-dependency"`;
        `rawClientEscapeHatch`: `"GorgiasTicketingProviderClient.rawRequest"`;
        `reason`: `"No official maintained Gorgias JavaScript/TypeScript runtime SDK was verified; this package owns a narrow REST adapter until a suitable provider SDK exists."`;
        `strict`: `true`;
     \};
     `sdkDecision`: `"no-official-sdk-rest-adapter"`;
     `sdkEvaluation`: \{
        `checkedAt`: `"2026-06-25"`;
        `officialBackendJavaScriptSdk`: `false`;
        `officialDocsSurface`: `"Gorgias documents REST API and OAuth/API-key authentication against each account subdomain; no official maintained npm JavaScript runtime SDK was verified."`;
        `result`: `"no-official-maintained-runtime-sdk"`;
        `reviewedPackages`: readonly \[\{
           `package`: `"gorgias-client"`;
           `reason`: `"Typed and recent, but maintained outside Gorgias and its public client is Basic-auth/subdomain oriented; it does not expose a Bearer OAuth default path or account-readiness resource for this package's runtime contract."`;
           `result`: `"not-used-as-package-default"`;
           `version`: `"2.0.4"`;
         \}, \{
           `package`: `"@friggframework/api-module-gorgias"`;
           `reason`: `"Framework module rather than a standalone official Gorgias backend SDK for this runtime package."`;
           `result`: `"not-used-as-package-default"`;
           `version`: `"0.10.1"`;
         \}, \{
           `package`: `"@frontend-sdk/gorgias"`;
           `reason`: `"Frontend/Shogun integration package, not a maintained Gorgias ticketing REST SDK."`;
           `result`: `"not-runtime-ticketing-sdk"`;
           `version`: `"0.26.0"`;
         \}, \{
           `package`: `"@pipedream/gorgias"`;
           `reason`: `"Pipedream component package rather than a typed raw client suitable as this package's default runtime SDK."`;
           `result`: `"not-runtime-ticketing-sdk"`;
           `version`: `"0.6.0"`;
        \}\];
     \};
  \};
  `name`: `"Gorgias"`;
  `operations`: \[\{
     `alias`: `"ticket.create"`;
     `capability`: `"create-provider-object"`;
     `changesWorkflow`: `true`;
     `exposesSensitiveData`: `true`;
     `providerObject`: `"ticket"`;
     `providerOperation`: `"POST /api/tickets"`;
     `sideEffect`: `true`;
   \}, \{
     `alias`: `"ticket.read"`;
     `capability`: `"read-provider-object"`;
     `exposesSensitiveData`: `true`;
     `providerObject`: `"ticket"`;
     `providerOperation`: `"GET /api/tickets/{ticket_id}"`;
   \}, \{
     `alias`: `"ticket.update"`;
     `capability`: `"update-provider-object"`;
     `changesWorkflow`: `true`;
     `exposesSensitiveData`: `true`;
     `providerObject`: `"ticket"`;
     `providerOperation`: `"PUT /api/tickets/{ticket_id}"`;
     `sideEffect`: `true`;
  \}\];
  `packageName`: `"@cognidesk/integration-ticketing-gorgias"`;
  `privacyNotes`: \[`"Gorgias tickets can include ecommerce context, customer identifiers, messages, notes, tags, and assignment metadata."`\];
  `provider`: `"gorgias"`;
  `trustLevel`: `"official"`;
\}, `unknown`, \{
  `gorgias.message.list`: (`input?`) => `Promise`\<[`JsonObject`](#jsonobject)\>;
  `gorgias.readiness`: () => `Promise`\<[`JsonObject`](#jsonobject)\>;
  `ticket.comment.create`: (`input`) => `Promise`\<[`JsonObject`](#jsonobject)\>;
  `ticket.create`: (`input`) => `Promise`\<[`JsonObject`](#jsonobject)\>;
  `ticket.read`: (`input`) => `Promise`\<[`JsonObject`](#jsonobject)\>;
  `ticket.search`: (`input?`) => `Promise`\<[`JsonObject`](#jsonobject)\>;
  `ticket.update`: (`input`) => `Promise`\<[`JsonObject`](#jsonobject)\>;
\}\>

***

### createGorgiasTicketingOperationHandlers()

```ts
function createGorgiasTicketingOperationHandlers(options?): {
  gorgias.message.list: (input?) => Promise<JsonObject>;
  gorgias.readiness: () => Promise<JsonObject>;
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
| `options?` | [`GorgiasTicketingIntegrationOptions`](#gorgiasticketingintegrationoptions) |

#### Returns

```ts
{
  gorgias.message.list: (input?) => Promise<JsonObject>;
  gorgias.readiness: () => Promise<JsonObject>;
  ticket.comment.create: (input) => Promise<JsonObject>;
  ticket.create: (input) => Promise<JsonObject>;
  ticket.read: (input) => Promise<JsonObject>;
  ticket.search: (input?) => Promise<JsonObject>;
  ticket.update: (input) => Promise<JsonObject>;
}
```

| Name | Type |
| ------ | ------ |
| `gorgias.message.list()` | (`input?`) => `Promise`\<[`JsonObject`](#jsonobject)\> |
| `gorgias.readiness()` | () => `Promise`\<[`JsonObject`](#jsonobject)\> |
| `ticket.comment.create()` | (`input`) => `Promise`\<[`JsonObject`](#jsonobject)\> |
| `ticket.create()` | (`input`) => `Promise`\<[`JsonObject`](#jsonobject)\> |
| `ticket.read()` | (`input`) => `Promise`\<[`JsonObject`](#jsonobject)\> |
| `ticket.search()` | (`input?`) => `Promise`\<[`JsonObject`](#jsonobject)\> |
| `ticket.update()` | (`input`) => `Promise`\<[`JsonObject`](#jsonobject)\> |

## References

### gorgiasTicketingProviderManifest

Re-exports [gorgiasTicketingProviderManifest](dist/manifest.md#gorgiasticketingprovidermanifest)
