# integrations/ticketing/zendesk/dist

## Interfaces

### JsonObject

#### Indexable

```ts
[key: string]: JsonValue
```

***

### ZendeskTicketingClient

#### Methods

##### createComment()

```ts
createComment(
   ticketId,
   comment,
publicComment?): Promise<JsonObject>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `ticketId` | `string` \| `number` |
| `comment` | [`JsonObject`](#jsonobject) |
| `publicComment?` | `boolean` |

###### Returns

`Promise`\<[`JsonObject`](#jsonobject)\>

##### createTicket()

```ts
createTicket(input): Promise<JsonObject>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`JsonObject`](#jsonobject) |

###### Returns

`Promise`\<[`JsonObject`](#jsonobject)\>

##### getOrganization()

```ts
getOrganization(organizationId): Promise<JsonObject>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `organizationId` | `string` \| `number` |

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

##### getUser()

```ts
getUser(userId): Promise<JsonObject>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `userId` | `string` \| `number` |

###### Returns

`Promise`\<[`JsonObject`](#jsonobject)\>

##### listWebhooks()

```ts
listWebhooks(): Promise<JsonValue>;
```

###### Returns

`Promise`\<[`JsonValue`](#jsonvalue)\>

##### rawRequest()

```ts
rawRequest<T>(path, init?): Promise<T>;
```

###### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | [`JsonValue`](#jsonvalue) |

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `path` | `string` |
| `init?` | `RequestInit` |

###### Returns

`Promise`\<`T`\>

##### readiness()

```ts
readiness(): Promise<JsonObject>;
```

###### Returns

`Promise`\<[`JsonObject`](#jsonobject)\>

##### searchTickets()

```ts
searchTickets(query): Promise<JsonObject>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `query` | `string` \| [`JsonObject`](#jsonobject) |

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

##### uploadFile()

```ts
uploadFile(input): Promise<JsonObject>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | \{ `contentType?`: `string`; `data`: `BodyInit`; `filename`: `string`; `token?`: `string`; \} |
| `input.contentType?` | `string` |
| `input.data` | `BodyInit` |
| `input.filename` | `string` |
| `input.token?` | `string` |

###### Returns

`Promise`\<[`JsonObject`](#jsonobject)\>

***

### ZendeskTicketingClientOptions

#### Properties

##### accessToken?

```ts
optional accessToken?: string;
```

##### apiBasePath?

```ts
optional apiBasePath?: string;
```

##### apiToken?

```ts
optional apiToken?: string;
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

##### instanceUrl

```ts
instanceUrl: string;
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

### createZendeskTicketingClient()

```ts
function createZendeskTicketingClient(options): ZendeskTicketingClient;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`ZendeskTicketingClientOptions`](#zendeskticketingclientoptions) |

#### Returns

[`ZendeskTicketingClient`](#zendeskticketingclient)

***

### createZendeskTicketingIntegration()

```ts
function createZendeskTicketingIntegration(options): DefinedIntegration<{
  capabilities: [{
     capability: "create-provider-object";
     changesWorkflow: true;
     exposesSensitiveData: true;
     providerObjects: [{
        kind: "zendeskTicket";
        label: "Zendesk Ticket";
      }, {
        kind: "zendeskTicketComment";
        label: "Zendesk Ticket Comment";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     capability: "read-provider-object";
     exposesSensitiveData: true;
     providerObjects: [{
        kind: "zendeskTicket";
        label: "Zendesk Ticket";
      }, {
        kind: "zendeskUser";
        label: "Zendesk User";
      }, {
        kind: "zendeskOrganization";
        label: "Zendesk Organization";
      }, {
        kind: "zendeskWebhook";
        label: "Zendesk Webhook";
     }];
     requiresCredential: true;
   }, {
     capability: "update-provider-object";
     changesWorkflow: true;
     exposesSensitiveData: true;
     providerObjects: [{
        kind: "zendeskTicket";
        label: "Zendesk Ticket";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     capability: "search-provider-object";
     exposesSensitiveData: true;
     providerObjects: [{
        kind: "zendeskTicket";
        label: "Zendesk Ticket";
     }];
     requiresCredential: true;
   }, {
     capability: "handoff";
     changesWorkflow: true;
     exposesSensitiveData: true;
     providerObjects: [{
        kind: "zendeskTicket";
        label: "Zendesk Ticket";
      }, {
        kind: "zendeskTicketComment";
        label: "Zendesk Ticket Comment";
     }];
     requiresCredential: true;
     sideEffect: true;
  }];
  category: "ticketing";
  channelAudiences: ["customer-facing", "internal-support", "mixed"];
  coverage: {
     evidence: [{
        label: "Zendesk Node.js API client docs";
        url: "https://developer.zendesk.com/documentation/ticketing/api-clients/nodejs/";
      }, {
        label: "Zendesk Support API OpenAPI";
        url: "https://developer.zendesk.com/zendesk/oas.yaml";
      }, {
        label: "Zendesk Support Tickets API";
        url: "https://developer.zendesk.com/api-reference/ticketing/tickets/tickets/";
      }, {
        label: "Zendesk Ticket Comments API";
        url: "https://developer.zendesk.com/api-reference/ticketing/tickets/ticket_comments/";
      }, {
        label: "Zendesk Upload Files API";
        url: "https://developer.zendesk.com/api-reference/ticketing/tickets/ticket-attachments/";
     }];
     notes: ["SDK decision: Zendesk documents node-zendesk but marks it not officially supported, so this package keeps a constrained Zendesk Support API slice instead of adopting it as an official SDK.", "Coverage is limited to ticket create/read/update/search, comments, uploads, users, organizations, webhooks list, current-user readiness, and raw request escape hatch operations used by Cognidesk support workflows.", "This package intentionally does not copy the old generated full Zendesk Support OpenAPI clone."];
     scope: "provider-api-subset";
  };
  credentialRequirements: [{
     id: "zendesk-instance";
     label: "Zendesk Support instance URL";
     required: true;
   }, {
     id: "zendesk-api-access";
     label: "Zendesk Support API access";
     metadata: {
        privilegeGuidance: "OAuth tokens use Zendesk read/write scopes. API-token credentials inherit the Zendesk user's role and Support permissions.";
        scopeKind: "mixed-auth-mode";
     };
     required: true;
     scopes: ["read", "write"];
  }];
  directions: ["bidirectional"];
  id: "ticketing.zendesk";
  limitations: ["Tenant fields, triggers, automations, macros, routing, requester identity, and outbound policy remain SDK-user configuration."];
  maintainers: [{
     name: "Cognidesk";
     type: "official";
  }];
  metadata: {
     implementationStrategy: "direct-http-support-slice";
     issue: 35;
     sdkDecision: {
        candidate: "node-zendesk";
        checkedAt: "2026-06-21";
        reason: "Zendesk's own docs mark node-zendesk as not officially supported.";
        verdict: "not-adopted";
     };
     supportSlice: {
        allowlistedOperations: readonly ["tickets.create", "tickets.read", "tickets.update", "search", "ticket_comments.create", "uploads.create", "users.read", "organizations.read", "webhooks.list", "users.me"];
        source: "Zendesk Support API";
     };
  };
  name: "Zendesk Support";
  operations: [{
     alias: "ticket.create";
     capability: "create-provider-object";
     changesWorkflow: true;
     exposesSensitiveData: true;
     providerObject: "ticket";
     providerOperation: "POST /api/v2/tickets.json";
     sideEffect: true;
   }, {
     alias: "ticket.read";
     capability: "read-provider-object";
     exposesSensitiveData: true;
     providerObject: "ticket";
     providerOperation: "GET /api/v2/tickets/{ticket_id}.json";
   }, {
     alias: "ticket.update";
     capability: "update-provider-object";
     changesWorkflow: true;
     exposesSensitiveData: true;
     providerObject: "ticket";
     providerOperation: "PUT /api/v2/tickets/{ticket_id}.json";
     sideEffect: true;
  }];
  packageName: "@cognidesk/integration-ticketing-zendesk";
  privacyNotes: ["Zendesk tickets can contain customer messages, requester details, internal comments, tags, and workflow metadata."];
  provider: "zendesk";
  trustLevel: "official";
}, unknown, {
  customer.read: (input) => Promise<JsonObject>;
  ticket.attachments.add: (input) => Promise<JsonObject>;
  ticket.comment.create: (input) => Promise<JsonObject>;
  ticket.create: (input) => Promise<JsonObject>;
  ticket.internalNote.create: (input) => Promise<JsonObject>;
  ticket.read: (input) => Promise<JsonObject>;
  ticket.search: (input) => Promise<JsonObject>;
  ticket.update: (input) => Promise<JsonObject>;
  zendesk.organization.read: (input) => Promise<JsonObject>;
  zendesk.readiness: () => Promise<JsonObject>;
  zendesk.webhook.list: () => Promise<JsonValue>;
}>;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`ZendeskTicketingClientOptions`](#zendeskticketingclientoptions) |

#### Returns

[`DefinedIntegration`](../../../packages/integration-kit/dist.md#definedintegration)\<\{
  `capabilities`: \[\{
     `capability`: `"create-provider-object"`;
     `changesWorkflow`: `true`;
     `exposesSensitiveData`: `true`;
     `providerObjects`: \[\{
        `kind`: `"zendeskTicket"`;
        `label`: `"Zendesk Ticket"`;
      \}, \{
        `kind`: `"zendeskTicketComment"`;
        `label`: `"Zendesk Ticket Comment"`;
     \}\];
     `requiresCredential`: `true`;
     `sideEffect`: `true`;
   \}, \{
     `capability`: `"read-provider-object"`;
     `exposesSensitiveData`: `true`;
     `providerObjects`: \[\{
        `kind`: `"zendeskTicket"`;
        `label`: `"Zendesk Ticket"`;
      \}, \{
        `kind`: `"zendeskUser"`;
        `label`: `"Zendesk User"`;
      \}, \{
        `kind`: `"zendeskOrganization"`;
        `label`: `"Zendesk Organization"`;
      \}, \{
        `kind`: `"zendeskWebhook"`;
        `label`: `"Zendesk Webhook"`;
     \}\];
     `requiresCredential`: `true`;
   \}, \{
     `capability`: `"update-provider-object"`;
     `changesWorkflow`: `true`;
     `exposesSensitiveData`: `true`;
     `providerObjects`: \[\{
        `kind`: `"zendeskTicket"`;
        `label`: `"Zendesk Ticket"`;
     \}\];
     `requiresCredential`: `true`;
     `sideEffect`: `true`;
   \}, \{
     `capability`: `"search-provider-object"`;
     `exposesSensitiveData`: `true`;
     `providerObjects`: \[\{
        `kind`: `"zendeskTicket"`;
        `label`: `"Zendesk Ticket"`;
     \}\];
     `requiresCredential`: `true`;
   \}, \{
     `capability`: `"handoff"`;
     `changesWorkflow`: `true`;
     `exposesSensitiveData`: `true`;
     `providerObjects`: \[\{
        `kind`: `"zendeskTicket"`;
        `label`: `"Zendesk Ticket"`;
      \}, \{
        `kind`: `"zendeskTicketComment"`;
        `label`: `"Zendesk Ticket Comment"`;
     \}\];
     `requiresCredential`: `true`;
     `sideEffect`: `true`;
  \}\];
  `category`: `"ticketing"`;
  `channelAudiences`: \[`"customer-facing"`, `"internal-support"`, `"mixed"`\];
  `coverage`: \{
     `evidence`: \[\{
        `label`: `"Zendesk Node.js API client docs"`;
        `url`: `"https://developer.zendesk.com/documentation/ticketing/api-clients/nodejs/"`;
      \}, \{
        `label`: `"Zendesk Support API OpenAPI"`;
        `url`: `"https://developer.zendesk.com/zendesk/oas.yaml"`;
      \}, \{
        `label`: `"Zendesk Support Tickets API"`;
        `url`: `"https://developer.zendesk.com/api-reference/ticketing/tickets/tickets/"`;
      \}, \{
        `label`: `"Zendesk Ticket Comments API"`;
        `url`: `"https://developer.zendesk.com/api-reference/ticketing/tickets/ticket_comments/"`;
      \}, \{
        `label`: `"Zendesk Upload Files API"`;
        `url`: `"https://developer.zendesk.com/api-reference/ticketing/tickets/ticket-attachments/"`;
     \}\];
     `notes`: \[`"SDK decision: Zendesk documents node-zendesk but marks it not officially supported, so this package keeps a constrained Zendesk Support API slice instead of adopting it as an official SDK."`, `"Coverage is limited to ticket create/read/update/search, comments, uploads, users, organizations, webhooks list, current-user readiness, and raw request escape hatch operations used by Cognidesk support workflows."`, `"This package intentionally does not copy the old generated full Zendesk Support OpenAPI clone."`\];
     `scope`: `"provider-api-subset"`;
  \};
  `credentialRequirements`: \[\{
     `id`: `"zendesk-instance"`;
     `label`: `"Zendesk Support instance URL"`;
     `required`: `true`;
   \}, \{
     `id`: `"zendesk-api-access"`;
     `label`: `"Zendesk Support API access"`;
     `metadata`: \{
        `privilegeGuidance`: `"OAuth tokens use Zendesk read/write scopes. API-token credentials inherit the Zendesk user's role and Support permissions."`;
        `scopeKind`: `"mixed-auth-mode"`;
     \};
     `required`: `true`;
     `scopes`: \[`"read"`, `"write"`\];
  \}\];
  `directions`: \[`"bidirectional"`\];
  `id`: `"ticketing.zendesk"`;
  `limitations`: \[`"Tenant fields, triggers, automations, macros, routing, requester identity, and outbound policy remain SDK-user configuration."`\];
  `maintainers`: \[\{
     `name`: `"Cognidesk"`;
     `type`: `"official"`;
  \}\];
  `metadata`: \{
     `implementationStrategy`: `"direct-http-support-slice"`;
     `issue`: `35`;
     `sdkDecision`: \{
        `candidate`: `"node-zendesk"`;
        `checkedAt`: `"2026-06-21"`;
        `reason`: `"Zendesk's own docs mark node-zendesk as not officially supported."`;
        `verdict`: `"not-adopted"`;
     \};
     `supportSlice`: \{
        `allowlistedOperations`: readonly \[`"tickets.create"`, `"tickets.read"`, `"tickets.update"`, `"search"`, `"ticket_comments.create"`, `"uploads.create"`, `"users.read"`, `"organizations.read"`, `"webhooks.list"`, `"users.me"`\];
        `source`: `"Zendesk Support API"`;
     \};
  \};
  `name`: `"Zendesk Support"`;
  `operations`: \[\{
     `alias`: `"ticket.create"`;
     `capability`: `"create-provider-object"`;
     `changesWorkflow`: `true`;
     `exposesSensitiveData`: `true`;
     `providerObject`: `"ticket"`;
     `providerOperation`: `"POST /api/v2/tickets.json"`;
     `sideEffect`: `true`;
   \}, \{
     `alias`: `"ticket.read"`;
     `capability`: `"read-provider-object"`;
     `exposesSensitiveData`: `true`;
     `providerObject`: `"ticket"`;
     `providerOperation`: `"GET /api/v2/tickets/{ticket_id}.json"`;
   \}, \{
     `alias`: `"ticket.update"`;
     `capability`: `"update-provider-object"`;
     `changesWorkflow`: `true`;
     `exposesSensitiveData`: `true`;
     `providerObject`: `"ticket"`;
     `providerOperation`: `"PUT /api/v2/tickets/{ticket_id}.json"`;
     `sideEffect`: `true`;
  \}\];
  `packageName`: `"@cognidesk/integration-ticketing-zendesk"`;
  `privacyNotes`: \[`"Zendesk tickets can contain customer messages, requester details, internal comments, tags, and workflow metadata."`\];
  `provider`: `"zendesk"`;
  `trustLevel`: `"official"`;
\}, `unknown`, \{
  `customer.read`: (`input`) => `Promise`\<[`JsonObject`](#jsonobject)\>;
  `ticket.attachments.add`: (`input`) => `Promise`\<[`JsonObject`](#jsonobject)\>;
  `ticket.comment.create`: (`input`) => `Promise`\<[`JsonObject`](#jsonobject)\>;
  `ticket.create`: (`input`) => `Promise`\<[`JsonObject`](#jsonobject)\>;
  `ticket.internalNote.create`: (`input`) => `Promise`\<[`JsonObject`](#jsonobject)\>;
  `ticket.read`: (`input`) => `Promise`\<[`JsonObject`](#jsonobject)\>;
  `ticket.search`: (`input`) => `Promise`\<[`JsonObject`](#jsonobject)\>;
  `ticket.update`: (`input`) => `Promise`\<[`JsonObject`](#jsonobject)\>;
  `zendesk.organization.read`: (`input`) => `Promise`\<[`JsonObject`](#jsonobject)\>;
  `zendesk.readiness`: () => `Promise`\<[`JsonObject`](#jsonobject)\>;
  `zendesk.webhook.list`: () => `Promise`\<[`JsonValue`](#jsonvalue)\>;
\}\>

## References

### zendeskTicketingProviderManifest

Re-exports [zendeskTicketingProviderManifest](dist/manifest.md#zendeskticketingprovidermanifest)
