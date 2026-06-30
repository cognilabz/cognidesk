# integrations/ticketing/freshdesk/dist

## Interfaces

### FreshdeskJsonObject

#### Indexable

```ts
[key: string]: FreshdeskJsonValue
```

***

### FreshdeskTicketingClient

#### Extends

- [`FreshdeskTicketingProviderClient`](#freshdeskticketingproviderclient)

#### Properties

##### providerClient

```ts
providerClient: FreshdeskTicketingProviderClient;
```

#### Methods

##### createNote()

```ts
createNote(ticketId, body): Promise<FreshdeskJsonObject>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `ticketId` | `string` \| `number` |
| `body` | [`FreshdeskJsonObject`](#freshdeskjsonobject) |

###### Returns

`Promise`\<[`FreshdeskJsonObject`](#freshdeskjsonobject)\>

###### Inherited from

[`FreshdeskTicketingProviderClient`](#freshdeskticketingproviderclient).[`createNote`](#createnote-1)

##### createReply()

```ts
createReply(ticketId, body): Promise<FreshdeskJsonObject>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `ticketId` | `string` \| `number` |
| `body` | [`FreshdeskJsonObject`](#freshdeskjsonobject) |

###### Returns

`Promise`\<[`FreshdeskJsonObject`](#freshdeskjsonobject)\>

###### Inherited from

[`FreshdeskTicketingProviderClient`](#freshdeskticketingproviderclient).[`createReply`](#createreply-1)

##### createTicket()

```ts
createTicket(input): Promise<FreshdeskJsonObject>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`FreshdeskJsonObject`](#freshdeskjsonobject) |

###### Returns

`Promise`\<[`FreshdeskJsonObject`](#freshdeskjsonobject)\>

###### Inherited from

[`FreshdeskTicketingProviderClient`](#freshdeskticketingproviderclient).[`createTicket`](#createticket-1)

##### getAgent()

```ts
getAgent(agentId): Promise<FreshdeskJsonObject>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `agentId` | `string` \| `number` |

###### Returns

`Promise`\<[`FreshdeskJsonObject`](#freshdeskjsonobject)\>

###### Inherited from

[`FreshdeskTicketingProviderClient`](#freshdeskticketingproviderclient).[`getAgent`](#getagent-1)

##### getContact()

```ts
getContact(contactId): Promise<FreshdeskJsonObject>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `contactId` | `string` \| `number` |

###### Returns

`Promise`\<[`FreshdeskJsonObject`](#freshdeskjsonobject)\>

###### Inherited from

[`FreshdeskTicketingProviderClient`](#freshdeskticketingproviderclient).[`getContact`](#getcontact-1)

##### getGroup()

```ts
getGroup(groupId): Promise<FreshdeskJsonObject>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `groupId` | `string` \| `number` |

###### Returns

`Promise`\<[`FreshdeskJsonObject`](#freshdeskjsonobject)\>

###### Inherited from

[`FreshdeskTicketingProviderClient`](#freshdeskticketingproviderclient).[`getGroup`](#getgroup-1)

##### getTicket()

```ts
getTicket(ticketId): Promise<FreshdeskJsonObject>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `ticketId` | `string` \| `number` |

###### Returns

`Promise`\<[`FreshdeskJsonObject`](#freshdeskjsonobject)\>

###### Inherited from

[`FreshdeskTicketingProviderClient`](#freshdeskticketingproviderclient).[`getTicket`](#getticket-1)

##### readiness()

```ts
readiness(): Promise<FreshdeskJsonObject>;
```

###### Returns

`Promise`\<[`FreshdeskJsonObject`](#freshdeskjsonobject)\>

###### Inherited from

[`FreshdeskTicketingProviderClient`](#freshdeskticketingproviderclient).[`readiness`](#readiness-1)

##### searchContacts()

```ts
searchContacts(query): Promise<FreshdeskJsonObject>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `query` | `string` \| [`FreshdeskJsonObject`](#freshdeskjsonobject) |

###### Returns

`Promise`\<[`FreshdeskJsonObject`](#freshdeskjsonobject)\>

###### Inherited from

[`FreshdeskTicketingProviderClient`](#freshdeskticketingproviderclient).[`searchContacts`](#searchcontacts-1)

##### searchTickets()

```ts
searchTickets(query): Promise<FreshdeskJsonObject>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `query` | `string` \| [`FreshdeskJsonObject`](#freshdeskjsonobject) |

###### Returns

`Promise`\<[`FreshdeskJsonObject`](#freshdeskjsonobject)\>

###### Inherited from

[`FreshdeskTicketingProviderClient`](#freshdeskticketingproviderclient).[`searchTickets`](#searchtickets-1)

##### updateTicket()

```ts
updateTicket(ticketId, patch): Promise<FreshdeskJsonObject>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `ticketId` | `string` \| `number` |
| `patch` | [`FreshdeskJsonObject`](#freshdeskjsonobject) |

###### Returns

`Promise`\<[`FreshdeskJsonObject`](#freshdeskjsonobject)\>

###### Inherited from

[`FreshdeskTicketingProviderClient`](#freshdeskticketingproviderclient).[`updateTicket`](#updateticket-1)

***

### FreshdeskTicketingClientOptions

#### Properties

##### apiKey?

```ts
optional apiKey?: string;
```

##### domain?

```ts
optional domain?: string;
```

##### providerClient?

```ts
optional providerClient?: FreshdeskTicketingProviderClient;
```

***

### FreshdeskTicketingProviderClient

#### Extended by

- [`FreshdeskTicketingClient`](#freshdeskticketingclient)

#### Methods

##### createNote()

```ts
createNote(ticketId, body): Promise<FreshdeskJsonObject>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `ticketId` | `string` \| `number` |
| `body` | [`FreshdeskJsonObject`](#freshdeskjsonobject) |

###### Returns

`Promise`\<[`FreshdeskJsonObject`](#freshdeskjsonobject)\>

##### createReply()

```ts
createReply(ticketId, body): Promise<FreshdeskJsonObject>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `ticketId` | `string` \| `number` |
| `body` | [`FreshdeskJsonObject`](#freshdeskjsonobject) |

###### Returns

`Promise`\<[`FreshdeskJsonObject`](#freshdeskjsonobject)\>

##### createTicket()

```ts
createTicket(input): Promise<FreshdeskJsonObject>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`FreshdeskJsonObject`](#freshdeskjsonobject) |

###### Returns

`Promise`\<[`FreshdeskJsonObject`](#freshdeskjsonobject)\>

##### getAgent()

```ts
getAgent(agentId): Promise<FreshdeskJsonObject>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `agentId` | `string` \| `number` |

###### Returns

`Promise`\<[`FreshdeskJsonObject`](#freshdeskjsonobject)\>

##### getContact()

```ts
getContact(contactId): Promise<FreshdeskJsonObject>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `contactId` | `string` \| `number` |

###### Returns

`Promise`\<[`FreshdeskJsonObject`](#freshdeskjsonobject)\>

##### getGroup()

```ts
getGroup(groupId): Promise<FreshdeskJsonObject>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `groupId` | `string` \| `number` |

###### Returns

`Promise`\<[`FreshdeskJsonObject`](#freshdeskjsonobject)\>

##### getTicket()

```ts
getTicket(ticketId): Promise<FreshdeskJsonObject>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `ticketId` | `string` \| `number` |

###### Returns

`Promise`\<[`FreshdeskJsonObject`](#freshdeskjsonobject)\>

##### readiness()

```ts
readiness(): Promise<FreshdeskJsonObject>;
```

###### Returns

`Promise`\<[`FreshdeskJsonObject`](#freshdeskjsonobject)\>

##### searchContacts()

```ts
searchContacts(query): Promise<FreshdeskJsonObject>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `query` | `string` \| [`FreshdeskJsonObject`](#freshdeskjsonobject) |

###### Returns

`Promise`\<[`FreshdeskJsonObject`](#freshdeskjsonobject)\>

##### searchTickets()

```ts
searchTickets(query): Promise<FreshdeskJsonObject>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `query` | `string` \| [`FreshdeskJsonObject`](#freshdeskjsonobject) |

###### Returns

`Promise`\<[`FreshdeskJsonObject`](#freshdeskjsonobject)\>

##### updateTicket()

```ts
updateTicket(ticketId, patch): Promise<FreshdeskJsonObject>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `ticketId` | `string` \| `number` |
| `patch` | [`FreshdeskJsonObject`](#freshdeskjsonobject) |

###### Returns

`Promise`\<[`FreshdeskJsonObject`](#freshdeskjsonobject)\>

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

## Type Aliases

### FreshdeskJsonPrimitive

```ts
type FreshdeskJsonPrimitive = string | number | boolean | null;
```

***

### FreshdeskJsonValue

```ts
type FreshdeskJsonValue =
  | FreshdeskJsonPrimitive
  | FreshdeskJsonObject
  | FreshdeskJsonValue[];
```

***

### FreshdeskProviderPayload

```ts
type FreshdeskProviderPayload = FreshdeskJsonObject;
```

***

### JsonObject

```ts
type JsonObject = FreshdeskJsonObject;
```

***

### JsonPrimitive

```ts
type JsonPrimitive = FreshdeskJsonPrimitive;
```

***

### JsonValue

```ts
type JsonValue = FreshdeskJsonValue;
```

## Variables

### createFreshdeskIntegration

```ts
const createFreshdeskIntegration: typeof createFreshdeskTicketingIntegration;
```

***

### createFreshdeskIntegrationOperationHandlers

```ts
const createFreshdeskIntegrationOperationHandlers: typeof createFreshdeskTicketingIntegrationOperationHandlers;
```

## Functions

### createFreshdeskTicketingClient()

```ts
function createFreshdeskTicketingClient(options?): FreshdeskTicketingClient;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options?` | [`FreshdeskTicketingClientOptions`](#freshdeskticketingclientoptions) |

#### Returns

[`FreshdeskTicketingClient`](#freshdeskticketingclient)

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
        label: "Freshworks Freshdesk SDK";
        url: "https://www.npmjs.com/package/@freshworks/freshdesk";
      }, {
        label: "Freshworks API SDK";
        url: "https://www.npmjs.com/package/@freshworks/api-sdk";
      }, {
        label: "Freshworks API SDK repository";
        url: "https://github.com/freshworks/freshworks-api-sdk";
      }, {
        label: "Freshworks API SDK announcement";
        url: "https://community.freshworks.dev/t/freshworks-api-sdk-for-node-js/5232";
     }];
     notes: ["Implementation uses the official @freshworks/freshdesk JavaScript SDK by default when domain and apiKey are configured.", "Operations not exposed by the official SDK, such as agents, groups, and current-agent readiness, require an injected FreshdeskTicketingProviderClient instead of a package-owned REST fallback.", "Coverage is limited to Freshdesk v2 tickets, contacts, conversations, replies, notes, handoff updates, agents, groups, current-agent readiness, and SDK-user shared-secret webhook validation."];
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
     freshdeskV2Coverage: {
        allowlistedOperations: readonly ["tickets.create", "tickets.read", "tickets.update", "tickets.search", "reply.create", "note.create", "contacts.read", "contacts.search", "agents.read", "groups.read", "agents.me", "automation_webhook.parse"];
        source: "Freshdesk API v2";
     };
     implementation: {
        defaultClientPolicy: "use-official-freshworks-freshdesk-sdk-when-domain-and-apiKey-are-configured";
        delegatedOperationTarget: "official Freshdesk SDK for covered operations or injected Freshdesk provider client for SDK gaps";
        packageOwnedRestClient: false;
        packageOwnedRestFallback: false;
        providerClient: "FreshdeskTicketingProviderClient";
        providerClientInterface: "FreshdeskTicketingProviderClient";
        providerClientOverride: true;
        providerSdkPackage: "@freshworks/freshdesk";
        rawClientEscapeHatch: "FreshdeskTicketingClient.providerClient";
        rawClientOverride: true;
        runtimePackage: "@cognidesk/integration-ticketing-freshdesk";
        sdkDecision: {
           checkedAt: "2026-06-25";
           checkedVersion: "0.0.1";
           license: "freshdesk";
           notes: readonly ["@freshworks/freshdesk 0.0.1 exposes tickets.createTicket/getTicket/updateTicket/searchTicket/replyTicket/addNotes and contacts.getContact/searchContacts.", "The package does not expose agents/groups/readiness helpers; those operations fail closed unless a host FreshdeskTicketingProviderClient is injected."];
           package: "@freshworks/freshdesk";
           packageChecked: "@freshworks/freshdesk";
           reason: "@freshworks/freshdesk exposes Freshdesk tickets, contacts, and conversations runtime clients. Agents, groups, and current-agent readiness are not exposed by that package and require FreshdeskTicketingProviderClient injection.";
           result: "accepted-runtime-sdk";
        };
        strategy: "provider-sdk-adapter";
     };
     issue: 35;
     sdkDecision: {
        checkedAt: "2026-06-25";
        checkedVersion: "0.0.1";
        license: "freshdesk";
        package: "@freshworks/freshdesk";
        reason: "@freshworks/freshdesk is the official Freshdesk JavaScript SDK and is used for the ticket/contact operations it exposes.";
        result: "accepted-runtime-sdk";
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
  customer.read: (input, _context) => Promise<FreshdeskJsonObject>;
  customer.search: (input, _context) => Promise<FreshdeskJsonObject>;
  freshdesk.agent.read: (input, _context) => Promise<FreshdeskJsonObject>;
  freshdesk.group.read: (input, _context) => Promise<FreshdeskJsonObject>;
  freshdesk.readiness: () => Promise<FreshdeskJsonObject>;
  freshdesk.webhook.parse: (input) => Promise<{
     event: {
        payload: FreshdeskJsonObject;
        provider: string;
     };
     verified: boolean;
  }>;
  ticket.comment.create: (input, _context) => Promise<FreshdeskJsonObject>;
  ticket.create: (input, _context) => Promise<FreshdeskJsonObject>;
  ticket.internalNote.create: (input, _context) => Promise<FreshdeskJsonObject>;
  ticket.read: (input, _context) => Promise<FreshdeskJsonObject>;
  ticket.search: (input, _context) => Promise<FreshdeskJsonObject>;
  ticket.update: (input, _context) => Promise<FreshdeskJsonObject>;
}>;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | `FreshdeskTicketingIntegrationOptions` |

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
        `label`: `"Freshworks Freshdesk SDK"`;
        `url`: `"https://www.npmjs.com/package/@freshworks/freshdesk"`;
      \}, \{
        `label`: `"Freshworks API SDK"`;
        `url`: `"https://www.npmjs.com/package/@freshworks/api-sdk"`;
      \}, \{
        `label`: `"Freshworks API SDK repository"`;
        `url`: `"https://github.com/freshworks/freshworks-api-sdk"`;
      \}, \{
        `label`: `"Freshworks API SDK announcement"`;
        `url`: `"https://community.freshworks.dev/t/freshworks-api-sdk-for-node-js/5232"`;
     \}\];
     `notes`: \[`"Implementation uses the official @freshworks/freshdesk JavaScript SDK by default when domain and apiKey are configured."`, `"Operations not exposed by the official SDK, such as agents, groups, and current-agent readiness, require an injected FreshdeskTicketingProviderClient instead of a package-owned REST fallback."`, `"Coverage is limited to Freshdesk v2 tickets, contacts, conversations, replies, notes, handoff updates, agents, groups, current-agent readiness, and SDK-user shared-secret webhook validation."`\];
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
     `freshdeskV2Coverage`: \{
        `allowlistedOperations`: readonly \[`"tickets.create"`, `"tickets.read"`, `"tickets.update"`, `"tickets.search"`, `"reply.create"`, `"note.create"`, `"contacts.read"`, `"contacts.search"`, `"agents.read"`, `"groups.read"`, `"agents.me"`, `"automation_webhook.parse"`\];
        `source`: `"Freshdesk API v2"`;
     \};
     `implementation`: \{
        `defaultClientPolicy`: `"use-official-freshworks-freshdesk-sdk-when-domain-and-apiKey-are-configured"`;
        `delegatedOperationTarget`: `"official Freshdesk SDK for covered operations or injected Freshdesk provider client for SDK gaps"`;
        `packageOwnedRestClient`: `false`;
        `packageOwnedRestFallback`: `false`;
        `providerClient`: `"FreshdeskTicketingProviderClient"`;
        `providerClientInterface`: `"FreshdeskTicketingProviderClient"`;
        `providerClientOverride`: `true`;
        `providerSdkPackage`: `"@freshworks/freshdesk"`;
        `rawClientEscapeHatch`: `"FreshdeskTicketingClient.providerClient"`;
        `rawClientOverride`: `true`;
        `runtimePackage`: `"@cognidesk/integration-ticketing-freshdesk"`;
        `sdkDecision`: \{
           `checkedAt`: `"2026-06-25"`;
           `checkedVersion`: `"0.0.1"`;
           `license`: `"freshdesk"`;
           `notes`: readonly \[`"@freshworks/freshdesk 0.0.1 exposes tickets.createTicket/getTicket/updateTicket/searchTicket/replyTicket/addNotes and contacts.getContact/searchContacts."`, `"The package does not expose agents/groups/readiness helpers; those operations fail closed unless a host FreshdeskTicketingProviderClient is injected."`\];
           `package`: `"@freshworks/freshdesk"`;
           `packageChecked`: `"@freshworks/freshdesk"`;
           `reason`: `"@freshworks/freshdesk exposes Freshdesk tickets, contacts, and conversations runtime clients. Agents, groups, and current-agent readiness are not exposed by that package and require FreshdeskTicketingProviderClient injection."`;
           `result`: `"accepted-runtime-sdk"`;
        \};
        `strategy`: `"provider-sdk-adapter"`;
     \};
     `issue`: `35`;
     `sdkDecision`: \{
        `checkedAt`: `"2026-06-25"`;
        `checkedVersion`: `"0.0.1"`;
        `license`: `"freshdesk"`;
        `package`: `"@freshworks/freshdesk"`;
        `reason`: `"@freshworks/freshdesk is the official Freshdesk JavaScript SDK and is used for the ticket/contact operations it exposes."`;
        `result`: `"accepted-runtime-sdk"`;
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
  `customer.read`: (`input`, `_context`) => `Promise`\<[`FreshdeskJsonObject`](#freshdeskjsonobject)\>;
  `customer.search`: (`input`, `_context`) => `Promise`\<[`FreshdeskJsonObject`](#freshdeskjsonobject)\>;
  `freshdesk.agent.read`: (`input`, `_context`) => `Promise`\<[`FreshdeskJsonObject`](#freshdeskjsonobject)\>;
  `freshdesk.group.read`: (`input`, `_context`) => `Promise`\<[`FreshdeskJsonObject`](#freshdeskjsonobject)\>;
  `freshdesk.readiness`: () => `Promise`\<[`FreshdeskJsonObject`](#freshdeskjsonobject)\>;
  `freshdesk.webhook.parse`: (`input`) => `Promise`\<\{
     `event`: \{
        `payload`: [`FreshdeskJsonObject`](#freshdeskjsonobject);
        `provider`: `string`;
     \};
     `verified`: `boolean`;
  \}\>;
  `ticket.comment.create`: (`input`, `_context`) => `Promise`\<[`FreshdeskJsonObject`](#freshdeskjsonobject)\>;
  `ticket.create`: (`input`, `_context`) => `Promise`\<[`FreshdeskJsonObject`](#freshdeskjsonobject)\>;
  `ticket.internalNote.create`: (`input`, `_context`) => `Promise`\<[`FreshdeskJsonObject`](#freshdeskjsonobject)\>;
  `ticket.read`: (`input`, `_context`) => `Promise`\<[`FreshdeskJsonObject`](#freshdeskjsonobject)\>;
  `ticket.search`: (`input`, `_context`) => `Promise`\<[`FreshdeskJsonObject`](#freshdeskjsonobject)\>;
  `ticket.update`: (`input`, `_context`) => `Promise`\<[`FreshdeskJsonObject`](#freshdeskjsonobject)\>;
\}\>

***

### createFreshdeskTicketingIntegrationOperationHandlers()

```ts
function createFreshdeskTicketingIntegrationOperationHandlers(options): {
  customer.read: (input, _context) => Promise<FreshdeskJsonObject>;
  customer.search: (input, _context) => Promise<FreshdeskJsonObject>;
  freshdesk.agent.read: (input, _context) => Promise<FreshdeskJsonObject>;
  freshdesk.group.read: (input, _context) => Promise<FreshdeskJsonObject>;
  freshdesk.readiness: () => Promise<FreshdeskJsonObject>;
  freshdesk.webhook.parse: (input) => Promise<{
     event: {
        payload: FreshdeskJsonObject;
        provider: string;
     };
     verified: boolean;
  }>;
  ticket.comment.create: (input, _context) => Promise<FreshdeskJsonObject>;
  ticket.create: (input, _context) => Promise<FreshdeskJsonObject>;
  ticket.internalNote.create: (input, _context) => Promise<FreshdeskJsonObject>;
  ticket.read: (input, _context) => Promise<FreshdeskJsonObject>;
  ticket.search: (input, _context) => Promise<FreshdeskJsonObject>;
  ticket.update: (input, _context) => Promise<FreshdeskJsonObject>;
};
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | `FreshdeskTicketingIntegrationOptions` |

#### Returns

```ts
{
  customer.read: (input, _context) => Promise<FreshdeskJsonObject>;
  customer.search: (input, _context) => Promise<FreshdeskJsonObject>;
  freshdesk.agent.read: (input, _context) => Promise<FreshdeskJsonObject>;
  freshdesk.group.read: (input, _context) => Promise<FreshdeskJsonObject>;
  freshdesk.readiness: () => Promise<FreshdeskJsonObject>;
  freshdesk.webhook.parse: (input) => Promise<{
     event: {
        payload: FreshdeskJsonObject;
        provider: string;
     };
     verified: boolean;
  }>;
  ticket.comment.create: (input, _context) => Promise<FreshdeskJsonObject>;
  ticket.create: (input, _context) => Promise<FreshdeskJsonObject>;
  ticket.internalNote.create: (input, _context) => Promise<FreshdeskJsonObject>;
  ticket.read: (input, _context) => Promise<FreshdeskJsonObject>;
  ticket.search: (input, _context) => Promise<FreshdeskJsonObject>;
  ticket.update: (input, _context) => Promise<FreshdeskJsonObject>;
}
```

| Name | Type |
| ------ | ------ |
| `customer.read()` | (`input`, `_context`) => `Promise`\<[`FreshdeskJsonObject`](#freshdeskjsonobject)\> |
| `customer.search()` | (`input`, `_context`) => `Promise`\<[`FreshdeskJsonObject`](#freshdeskjsonobject)\> |
| `freshdesk.agent.read()` | (`input`, `_context`) => `Promise`\<[`FreshdeskJsonObject`](#freshdeskjsonobject)\> |
| `freshdesk.group.read()` | (`input`, `_context`) => `Promise`\<[`FreshdeskJsonObject`](#freshdeskjsonobject)\> |
| `freshdesk.readiness()` | () => `Promise`\<[`FreshdeskJsonObject`](#freshdeskjsonobject)\> |
| `freshdesk.webhook.parse()` | (`input`) => `Promise`\<\{ `event`: \{ `payload`: [`FreshdeskJsonObject`](#freshdeskjsonobject); `provider`: `string`; \}; `verified`: `boolean`; \}\> |
| `ticket.comment.create()` | (`input`, `_context`) => `Promise`\<[`FreshdeskJsonObject`](#freshdeskjsonobject)\> |
| `ticket.create()` | (`input`, `_context`) => `Promise`\<[`FreshdeskJsonObject`](#freshdeskjsonobject)\> |
| `ticket.internalNote.create()` | (`input`, `_context`) => `Promise`\<[`FreshdeskJsonObject`](#freshdeskjsonobject)\> |
| `ticket.read()` | (`input`, `_context`) => `Promise`\<[`FreshdeskJsonObject`](#freshdeskjsonobject)\> |
| `ticket.search()` | (`input`, `_context`) => `Promise`\<[`FreshdeskJsonObject`](#freshdeskjsonobject)\> |
| `ticket.update()` | (`input`, `_context`) => `Promise`\<[`FreshdeskJsonObject`](#freshdeskjsonobject)\> |

***

### createFreshdeskUnavailableClient()

```ts
function createFreshdeskUnavailableClient(message?): FreshdeskTicketingProviderClient;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `message?` | `string` |

#### Returns

[`FreshdeskTicketingProviderClient`](#freshdeskticketingproviderclient)

***

### createFreshworksFreshdeskProviderClient()

```ts
function createFreshworksFreshdeskProviderClient(options): FreshdeskTicketingProviderClient;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`FreshdeskTicketingClientOptions`](#freshdeskticketingclientoptions) |

#### Returns

[`FreshdeskTicketingProviderClient`](#freshdeskticketingproviderclient)

***

### createFreshworksFreshdeskSdkProviderClient()

```ts
function createFreshworksFreshdeskSdkProviderClient(sdkClient): FreshdeskTicketingProviderClient;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `sdkClient` | `FreshdeskSdkClient` |

#### Returns

[`FreshdeskTicketingProviderClient`](#freshdeskticketingproviderclient)

***

### parseFreshdeskWebhookRequest()

```ts
function parseFreshdeskWebhookRequest(request, options?): Promise<{
  event: {
     payload: FreshdeskJsonObject;
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
     `payload`: [`FreshdeskJsonObject`](#freshdeskjsonobject);
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
