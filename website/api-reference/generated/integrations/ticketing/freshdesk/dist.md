# integrations/ticketing/freshdesk/dist

## Interfaces

### FreshdeskTicketingClientOptions

#### Properties

##### apiKey?

```ts
optional apiKey?: string;
```

##### domain

```ts
domain: string;
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

### FreshdeskWebhookOptions

#### Properties

##### headerName?

```ts
optional headerName?: string;
```

##### webhookSecret?

```ts
optional webhookSecret?: string;
```

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

### createFreshdeskTicketingClient()

```ts
function createFreshdeskTicketingClient(options): {
  createNote: (ticketId, body) => Promise<JsonObject>;
  createReply: (ticketId, body) => Promise<JsonObject>;
  createTicket: (input) => Promise<JsonObject>;
  getAgent: (agentId) => Promise<JsonObject>;
  getContact: (contactId) => Promise<JsonObject>;
  getGroup: (groupId) => Promise<JsonObject>;
  getTicket: (ticketId) => Promise<JsonObject>;
  rawRequest: <T>(path, init?) => Promise<T>;
  readiness: () => Promise<JsonObject>;
  searchContacts: (query) => Promise<JsonObject>;
  searchTickets: (query) => Promise<JsonObject>;
  updateTicket: (ticketId, patch) => Promise<JsonObject>;
};
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`FreshdeskTicketingClientOptions`](#freshdeskticketingclientoptions) |

#### Returns

```ts
{
  createNote: (ticketId, body) => Promise<JsonObject>;
  createReply: (ticketId, body) => Promise<JsonObject>;
  createTicket: (input) => Promise<JsonObject>;
  getAgent: (agentId) => Promise<JsonObject>;
  getContact: (contactId) => Promise<JsonObject>;
  getGroup: (groupId) => Promise<JsonObject>;
  getTicket: (ticketId) => Promise<JsonObject>;
  rawRequest: <T>(path, init?) => Promise<T>;
  readiness: () => Promise<JsonObject>;
  searchContacts: (query) => Promise<JsonObject>;
  searchTickets: (query) => Promise<JsonObject>;
  updateTicket: (ticketId, patch) => Promise<JsonObject>;
}
```

| Name | Type |
| ------ | ------ |
| `createNote()` | (`ticketId`, `body`) => `Promise`\<[`JsonObject`](#jsonobject)\> |
| `createReply()` | (`ticketId`, `body`) => `Promise`\<[`JsonObject`](#jsonobject)\> |
| `createTicket()` | (`input`) => `Promise`\<[`JsonObject`](#jsonobject)\> |
| `getAgent()` | (`agentId`) => `Promise`\<[`JsonObject`](#jsonobject)\> |
| `getContact()` | (`contactId`) => `Promise`\<[`JsonObject`](#jsonobject)\> |
| `getGroup()` | (`groupId`) => `Promise`\<[`JsonObject`](#jsonobject)\> |
| `getTicket()` | (`ticketId`) => `Promise`\<[`JsonObject`](#jsonobject)\> |
| `rawRequest()` | \<`T`\>(`path`, `init?`) => `Promise`\<`T`\> |
| `readiness()` | () => `Promise`\<[`JsonObject`](#jsonobject)\> |
| `searchContacts()` | (`query`) => `Promise`\<[`JsonObject`](#jsonobject)\> |
| `searchTickets()` | (`query`) => `Promise`\<[`JsonObject`](#jsonobject)\> |
| `updateTicket()` | (`ticketId`, `patch`) => `Promise`\<[`JsonObject`](#jsonobject)\> |

***

### createFreshdeskTicketingIntegration()

```ts
function createFreshdeskTicketingIntegration(options): DefinedIntegration<{
  capabilities: [{
     capability: "receive";
     exposesSensitiveData: true;
     providerObjects: [{
        kind: "freshdeskWebhookEvent";
        label: "Freshdesk Webhook Event";
     }];
     requiresCredential: true;
   }, {
     capability: "create-provider-object";
     changesWorkflow: true;
     exposesSensitiveData: true;
     providerObjects: [{
        kind: "freshdeskTicket";
        label: "Freshdesk Ticket";
      }, {
        kind: "freshdeskContact";
        label: "Freshdesk Contact";
      }, {
        kind: "freshdeskConversation";
        label: "Freshdesk Ticket Conversation";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     capability: "read-provider-object";
     exposesSensitiveData: true;
     providerObjects: [{
        kind: "freshdeskTicket";
        label: "Freshdesk Ticket";
      }, {
        kind: "freshdeskContact";
        label: "Freshdesk Contact";
      }, {
        kind: "freshdeskAgent";
        label: "Freshdesk Agent";
      }, {
        kind: "freshdeskGroup";
        label: "Freshdesk Group";
     }];
     requiresCredential: true;
  }];
  category: "ticketing";
  channelAudiences: ["customer-facing", "internal-support", "mixed"];
  coverage: {
     evidence: [{
        label: "Freshdesk API v2 reference";
        url: "https://developers.freshdesk.com/api/";
      }, {
        label: "Freshworks API SDK announcement";
        url: "https://community.freshworks.dev/t/freshworks-api-sdk-for-node-js/5232";
     }];
     notes: ["SDK decision: Freshworks has beta or very early JavaScript packages, but no verified official maintained Freshdesk ticketing backend client suitable for this adapter.", "Coverage is limited to Freshdesk v2 tickets, contacts, conversations, replies, notes, handoff updates, agents, groups, current-agent readiness, and SDK-user shared-secret webhook validation."];
     scope: "provider-api-subset";
  };
  credentialRequirements: [{
     id: "freshdesk-domain";
     label: "Freshdesk domain";
     required: true;
   }, {
     id: "freshdesk-api-key";
     label: "Freshdesk API key";
     metadata: {
        privilegeGuidance: "Freshdesk API keys are governed by the authenticated agent's Freshdesk role and ticket permissions.";
        scopeKind: "internal-capability-labels";
     };
     required: true;
     scopes: ["read", "write"];
   }, {
     id: "freshdesk-webhook-secret";
     label: "Freshdesk webhook shared secret";
     required: false;
  }];
  directions: ["receive-only", "send-only", "bidirectional"];
  id: "ticketing.freshdesk";
  limitations: ["Ticket forms, required fields, statuses, products, groups, SLAs, automations, and agent permissions are SDK-user configuration."];
  maintainers: [{
     name: "Cognidesk";
     type: "official";
  }];
  metadata: {
     implementationStrategy: "direct-http-support-slice";
     issue: 35;
     sdkDecision: {
        candidates: readonly ["@freshworks/api-sdk", "@freshworks/freshdesk"];
        checkedAt: "2026-06-21";
        reason: "No verified official maintained Freshdesk ticketing backend SDK was found.";
        verdict: "not-adopted";
     };
     supportSlice: {
        allowlistedOperations: readonly ["tickets.create", "tickets.read", "tickets.update", "tickets.search", "reply.create", "note.create", "contacts.read", "contacts.search", "agents.read", "groups.read", "agents.me", "automation_webhook.parse"];
        source: "Freshdesk API v2";
     };
  };
  name: "Freshdesk Ticketing";
  operations: [{
     alias: "ticket.create";
     capability: "create-provider-object";
     changesWorkflow: true;
     exposesSensitiveData: true;
     providerObject: "ticket";
     providerOperation: "POST /api/v2/tickets";
     sideEffect: true;
   }, {
     alias: "ticket.read";
     capability: "read-provider-object";
     exposesSensitiveData: true;
     providerObject: "ticket";
     providerOperation: "GET /api/v2/tickets/{ticket_id}";
   }, {
     alias: "ticket.update";
     capability: "update-provider-object";
     changesWorkflow: true;
     exposesSensitiveData: true;
     providerObject: "ticket";
     providerOperation: "PUT /api/v2/tickets/{ticket_id}";
     sideEffect: true;
  }];
  packageName: "@cognidesk/integration-ticketing-freshdesk";
  privacyNotes: ["Freshdesk tickets, conversations, notes, contacts, assignments, tags, custom fields, and automation webhook payloads can contain customer data."];
  provider: "freshdesk";
  trustLevel: "official";
}, unknown, {
  customer.read: (input) => Promise<JsonObject>;
  customer.search: (input) => Promise<JsonObject>;
  freshdesk.agent.read: (input) => Promise<JsonObject>;
  freshdesk.group.read: (input) => Promise<JsonObject>;
  freshdesk.readiness: () => Promise<JsonObject>;
  freshdesk.webhook.parse: (input) => Promise<{
     event: {
        payload: JsonObject;
        provider: string;
     };
     verified: boolean;
  }>;
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
| `options` | [`FreshdeskTicketingClientOptions`](#freshdeskticketingclientoptions) |

#### Returns

[`DefinedIntegration`](../../../packages/integration-kit/dist.md#definedintegration)\<\{
  `capabilities`: \[\{
     `capability`: `"receive"`;
     `exposesSensitiveData`: `true`;
     `providerObjects`: \[\{
        `kind`: `"freshdeskWebhookEvent"`;
        `label`: `"Freshdesk Webhook Event"`;
     \}\];
     `requiresCredential`: `true`;
   \}, \{
     `capability`: `"create-provider-object"`;
     `changesWorkflow`: `true`;
     `exposesSensitiveData`: `true`;
     `providerObjects`: \[\{
        `kind`: `"freshdeskTicket"`;
        `label`: `"Freshdesk Ticket"`;
      \}, \{
        `kind`: `"freshdeskContact"`;
        `label`: `"Freshdesk Contact"`;
      \}, \{
        `kind`: `"freshdeskConversation"`;
        `label`: `"Freshdesk Ticket Conversation"`;
     \}\];
     `requiresCredential`: `true`;
     `sideEffect`: `true`;
   \}, \{
     `capability`: `"read-provider-object"`;
     `exposesSensitiveData`: `true`;
     `providerObjects`: \[\{
        `kind`: `"freshdeskTicket"`;
        `label`: `"Freshdesk Ticket"`;
      \}, \{
        `kind`: `"freshdeskContact"`;
        `label`: `"Freshdesk Contact"`;
      \}, \{
        `kind`: `"freshdeskAgent"`;
        `label`: `"Freshdesk Agent"`;
      \}, \{
        `kind`: `"freshdeskGroup"`;
        `label`: `"Freshdesk Group"`;
     \}\];
     `requiresCredential`: `true`;
  \}\];
  `category`: `"ticketing"`;
  `channelAudiences`: \[`"customer-facing"`, `"internal-support"`, `"mixed"`\];
  `coverage`: \{
     `evidence`: \[\{
        `label`: `"Freshdesk API v2 reference"`;
        `url`: `"https://developers.freshdesk.com/api/"`;
      \}, \{
        `label`: `"Freshworks API SDK announcement"`;
        `url`: `"https://community.freshworks.dev/t/freshworks-api-sdk-for-node-js/5232"`;
     \}\];
     `notes`: \[`"SDK decision: Freshworks has beta or very early JavaScript packages, but no verified official maintained Freshdesk ticketing backend client suitable for this adapter."`, `"Coverage is limited to Freshdesk v2 tickets, contacts, conversations, replies, notes, handoff updates, agents, groups, current-agent readiness, and SDK-user shared-secret webhook validation."`\];
     `scope`: `"provider-api-subset"`;
  \};
  `credentialRequirements`: \[\{
     `id`: `"freshdesk-domain"`;
     `label`: `"Freshdesk domain"`;
     `required`: `true`;
   \}, \{
     `id`: `"freshdesk-api-key"`;
     `label`: `"Freshdesk API key"`;
     `metadata`: \{
        `privilegeGuidance`: `"Freshdesk API keys are governed by the authenticated agent's Freshdesk role and ticket permissions."`;
        `scopeKind`: `"internal-capability-labels"`;
     \};
     `required`: `true`;
     `scopes`: \[`"read"`, `"write"`\];
   \}, \{
     `id`: `"freshdesk-webhook-secret"`;
     `label`: `"Freshdesk webhook shared secret"`;
     `required`: `false`;
  \}\];
  `directions`: \[`"receive-only"`, `"send-only"`, `"bidirectional"`\];
  `id`: `"ticketing.freshdesk"`;
  `limitations`: \[`"Ticket forms, required fields, statuses, products, groups, SLAs, automations, and agent permissions are SDK-user configuration."`\];
  `maintainers`: \[\{
     `name`: `"Cognidesk"`;
     `type`: `"official"`;
  \}\];
  `metadata`: \{
     `implementationStrategy`: `"direct-http-support-slice"`;
     `issue`: `35`;
     `sdkDecision`: \{
        `candidates`: readonly \[`"@freshworks/api-sdk"`, `"@freshworks/freshdesk"`\];
        `checkedAt`: `"2026-06-21"`;
        `reason`: `"No verified official maintained Freshdesk ticketing backend SDK was found."`;
        `verdict`: `"not-adopted"`;
     \};
     `supportSlice`: \{
        `allowlistedOperations`: readonly \[`"tickets.create"`, `"tickets.read"`, `"tickets.update"`, `"tickets.search"`, `"reply.create"`, `"note.create"`, `"contacts.read"`, `"contacts.search"`, `"agents.read"`, `"groups.read"`, `"agents.me"`, `"automation_webhook.parse"`\];
        `source`: `"Freshdesk API v2"`;
     \};
  \};
  `name`: `"Freshdesk Ticketing"`;
  `operations`: \[\{
     `alias`: `"ticket.create"`;
     `capability`: `"create-provider-object"`;
     `changesWorkflow`: `true`;
     `exposesSensitiveData`: `true`;
     `providerObject`: `"ticket"`;
     `providerOperation`: `"POST /api/v2/tickets"`;
     `sideEffect`: `true`;
   \}, \{
     `alias`: `"ticket.read"`;
     `capability`: `"read-provider-object"`;
     `exposesSensitiveData`: `true`;
     `providerObject`: `"ticket"`;
     `providerOperation`: `"GET /api/v2/tickets/{ticket_id}"`;
   \}, \{
     `alias`: `"ticket.update"`;
     `capability`: `"update-provider-object"`;
     `changesWorkflow`: `true`;
     `exposesSensitiveData`: `true`;
     `providerObject`: `"ticket"`;
     `providerOperation`: `"PUT /api/v2/tickets/{ticket_id}"`;
     `sideEffect`: `true`;
  \}\];
  `packageName`: `"@cognidesk/integration-ticketing-freshdesk"`;
  `privacyNotes`: \[`"Freshdesk tickets, conversations, notes, contacts, assignments, tags, custom fields, and automation webhook payloads can contain customer data."`\];
  `provider`: `"freshdesk"`;
  `trustLevel`: `"official"`;
\}, `unknown`, \{
  `customer.read`: (`input`) => `Promise`\<[`JsonObject`](#jsonobject)\>;
  `customer.search`: (`input`) => `Promise`\<[`JsonObject`](#jsonobject)\>;
  `freshdesk.agent.read`: (`input`) => `Promise`\<[`JsonObject`](#jsonobject)\>;
  `freshdesk.group.read`: (`input`) => `Promise`\<[`JsonObject`](#jsonobject)\>;
  `freshdesk.readiness`: () => `Promise`\<[`JsonObject`](#jsonobject)\>;
  `freshdesk.webhook.parse`: (`input`) => `Promise`\<\{
     `event`: \{
        `payload`: [`JsonObject`](#jsonobject);
        `provider`: `string`;
     \};
     `verified`: `boolean`;
  \}\>;
  `ticket.comment.create`: (`input`) => `Promise`\<[`JsonObject`](#jsonobject)\>;
  `ticket.create`: (`input`) => `Promise`\<[`JsonObject`](#jsonobject)\>;
  `ticket.internalNote.create`: (`input`) => `Promise`\<[`JsonObject`](#jsonobject)\>;
  `ticket.read`: (`input`) => `Promise`\<[`JsonObject`](#jsonobject)\>;
  `ticket.search`: (`input`) => `Promise`\<[`JsonObject`](#jsonobject)\>;
  `ticket.update`: (`input`) => `Promise`\<[`JsonObject`](#jsonobject)\>;
\}\>

***

### parseFreshdeskWebhookRequest()

```ts
function parseFreshdeskWebhookRequest(request, options?): Promise<{
  event: {
     payload: JsonObject;
     provider: string;
  };
  verified: boolean;
}>;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `request` | `Request` |
| `options?` | [`FreshdeskWebhookOptions`](#freshdeskwebhookoptions) |

#### Returns

`Promise`\<\{
  `event`: \{
     `payload`: [`JsonObject`](#jsonobject);
     `provider`: `string`;
  \};
  `verified`: `boolean`;
\}\>

***

### validateFreshdeskWebhookSecret()

```ts
function validateFreshdeskWebhookSecret(headers, options?): boolean;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `headers` | `Headers` |
| `options?` | [`FreshdeskWebhookOptions`](#freshdeskwebhookoptions) |

#### Returns

`boolean`

## References

### freshdeskTicketingProviderManifest

Re-exports [freshdeskTicketingProviderManifest](dist/manifest.md#freshdeskticketingprovidermanifest)
