# integrations/ticketing/gorgias/dist

## Interfaces

### GorgiasTicketingClientOptions

#### Properties

##### accessToken?

```ts
optional accessToken?: string;
```

##### apiBaseUrl

```ts
apiBaseUrl: string;
```

##### apiKey?

```ts
optional apiKey?: string;
```

##### email?

```ts
optional email?: string;
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

### createGorgiasTicketingClient()

```ts
function createGorgiasTicketingClient(options): {
  createTicket: (payload) => Promise<JsonObject>;
  createTicketMessage: (ticketId, payload) => Promise<JsonObject>;
  getTicket: (ticketId) => Promise<JsonObject>;
  listMessages: (query?) => Promise<JsonObject>;
  listTickets: (query?) => Promise<JsonObject>;
  rawRequest: <T>(path, init?) => Promise<T>;
  readiness: () => Promise<JsonObject>;
  updateTicket: (ticketId, patch) => Promise<JsonObject>;
};
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`GorgiasTicketingClientOptions`](#gorgiasticketingclientoptions) |

#### Returns

```ts
{
  createTicket: (payload) => Promise<JsonObject>;
  createTicketMessage: (ticketId, payload) => Promise<JsonObject>;
  getTicket: (ticketId) => Promise<JsonObject>;
  listMessages: (query?) => Promise<JsonObject>;
  listTickets: (query?) => Promise<JsonObject>;
  rawRequest: <T>(path, init?) => Promise<T>;
  readiness: () => Promise<JsonObject>;
  updateTicket: (ticketId, patch) => Promise<JsonObject>;
}
```

| Name | Type |
| ------ | ------ |
| `createTicket()` | (`payload`) => `Promise`\<[`JsonObject`](#jsonobject)\> |
| `createTicketMessage()` | (`ticketId`, `payload`) => `Promise`\<[`JsonObject`](#jsonobject)\> |
| `getTicket()` | (`ticketId`) => `Promise`\<[`JsonObject`](#jsonobject)\> |
| `listMessages()` | (`query?`) => `Promise`\<[`JsonObject`](#jsonobject)\> |
| `listTickets()` | (`query?`) => `Promise`\<[`JsonObject`](#jsonobject)\> |
| `rawRequest()` | \<`T`\>(`path`, `init?`) => `Promise`\<`T`\> |
| `readiness()` | () => `Promise`\<[`JsonObject`](#jsonobject)\> |
| `updateTicket()` | (`ticketId`, `patch`) => `Promise`\<[`JsonObject`](#jsonobject)\> |

***

### createGorgiasTicketingIntegration()

```ts
function createGorgiasTicketingIntegration(options): DefinedIntegration<{
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
        label: "Gorgias Create ticket";
        url: "https://developers.gorgias.com/reference/create-ticket";
      }, {
        label: "Gorgias Create ticket message";
        url: "https://developers.gorgias.com/reference/create-ticket-message";
      }, {
        label: "Gorgias OAuth2 Scopes";
        url: "https://developers.gorgias.com/docs/oauth2-scopes";
     }];
     notes: ["SDK decision: no official maintained backend JavaScript REST client was verified for Gorgias.", "Coverage is limited to Gorgias ticket create/read/update/list operations, ticket-message create/list operations, and account readiness for Cognidesk support workflows.", "This package intentionally does not copy the old generated full Gorgias public API clone."];
     scope: "provider-api-subset";
  };
  credentialRequirements: [{
     id: "gorgias-api-base";
     label: "Gorgias API base URL";
     required: true;
   }, {
     id: "gorgias-api-access";
     label: "Gorgias API access";
     metadata: {
        scopeKind: "provider-oauth-scopes";
     };
     required: true;
     scopes: ["account:read", "tickets:read", "tickets:write"];
  }];
  directions: ["bidirectional"];
  id: "ticketing.gorgias";
  limitations: ["Domain URL, ticket channels, message channels, macros, Shopify context, automations, and visibility are SDK-user configuration."];
  maintainers: [{
     name: "Cognidesk";
     type: "official";
  }];
  metadata: {
     implementationStrategy: "direct-http-support-slice";
     issue: 35;
     sdkDecision: {
        candidates: readonly ["gorgias-client", "@friggframework/api-module-gorgias", "Gorgias REST docs"];
        checkedAt: "2026-06-21";
        reason: "No official maintained backend JavaScript REST client was verified.";
        verdict: "not-adopted";
     };
     supportSlice: {
        allowlistedOperations: readonly ["tickets.create", "tickets.read", "tickets.update", "tickets.list", "ticket_messages.create", "messages.list", "account.read"];
        source: "Gorgias public REST API";
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
| `options` | [`GorgiasTicketingClientOptions`](#gorgiasticketingclientoptions) |

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
        `label`: `"Gorgias Create ticket"`;
        `url`: `"https://developers.gorgias.com/reference/create-ticket"`;
      \}, \{
        `label`: `"Gorgias Create ticket message"`;
        `url`: `"https://developers.gorgias.com/reference/create-ticket-message"`;
      \}, \{
        `label`: `"Gorgias OAuth2 Scopes"`;
        `url`: `"https://developers.gorgias.com/docs/oauth2-scopes"`;
     \}\];
     `notes`: \[`"SDK decision: no official maintained backend JavaScript REST client was verified for Gorgias."`, `"Coverage is limited to Gorgias ticket create/read/update/list operations, ticket-message create/list operations, and account readiness for Cognidesk support workflows."`, `"This package intentionally does not copy the old generated full Gorgias public API clone."`\];
     `scope`: `"provider-api-subset"`;
  \};
  `credentialRequirements`: \[\{
     `id`: `"gorgias-api-base"`;
     `label`: `"Gorgias API base URL"`;
     `required`: `true`;
   \}, \{
     `id`: `"gorgias-api-access"`;
     `label`: `"Gorgias API access"`;
     `metadata`: \{
        `scopeKind`: `"provider-oauth-scopes"`;
     \};
     `required`: `true`;
     `scopes`: \[`"account:read"`, `"tickets:read"`, `"tickets:write"`\];
  \}\];
  `directions`: \[`"bidirectional"`\];
  `id`: `"ticketing.gorgias"`;
  `limitations`: \[`"Domain URL, ticket channels, message channels, macros, Shopify context, automations, and visibility are SDK-user configuration."`\];
  `maintainers`: \[\{
     `name`: `"Cognidesk"`;
     `type`: `"official"`;
  \}\];
  `metadata`: \{
     `implementationStrategy`: `"direct-http-support-slice"`;
     `issue`: `35`;
     `sdkDecision`: \{
        `candidates`: readonly \[`"gorgias-client"`, `"@friggframework/api-module-gorgias"`, `"Gorgias REST docs"`\];
        `checkedAt`: `"2026-06-21"`;
        `reason`: `"No official maintained backend JavaScript REST client was verified."`;
        `verdict`: `"not-adopted"`;
     \};
     `supportSlice`: \{
        `allowlistedOperations`: readonly \[`"tickets.create"`, `"tickets.read"`, `"tickets.update"`, `"tickets.list"`, `"ticket_messages.create"`, `"messages.list"`, `"account.read"`\];
        `source`: `"Gorgias public REST API"`;
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

## References

### gorgiasTicketingProviderManifest

Re-exports [gorgiasTicketingProviderManifest](dist/manifest.md#gorgiasticketingprovidermanifest)
