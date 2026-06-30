# integrations/ticketing/zendesk/dist

## Interfaces

### JsonObject

#### Indexable

```ts
[key: string]: JsonValue
```

***

### ZendeskSdkResource

#### Methods

##### \_rawRequest()?

```ts
optional _rawRequest(
   method,
   path,
body?): Promise<unknown>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `method` | `string` |
| `path` | `string` |
| `body?` | `unknown` |

###### Returns

`Promise`\<`unknown`\>

##### create()?

```ts
optional create(input): Promise<unknown>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`ZendeskTicketingProviderPayload`](#zendeskticketingproviderpayload) |

###### Returns

`Promise`\<`unknown`\>

##### list()?

```ts
optional list(): Promise<unknown>;
```

###### Returns

`Promise`\<`unknown`\>

##### me()?

```ts
optional me(): Promise<unknown>;
```

###### Returns

`Promise`\<`unknown`\>

##### query()?

```ts
optional query(query): Promise<unknown>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `query` | `string` |

###### Returns

`Promise`\<`unknown`\>

##### show()?

```ts
optional show(id): Promise<unknown>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `number` |

###### Returns

`Promise`\<`unknown`\>

##### update()?

```ts
optional update(id, input): Promise<unknown>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `number` |
| `input` | [`ZendeskTicketingProviderPayload`](#zendeskticketingproviderpayload) |

###### Returns

`Promise`\<`unknown`\>

##### upload()?

```ts
optional upload(data, options): Promise<unknown>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | `Buffer`\<`ArrayBufferLike`\> \| `BodyInit` \| `ReadableStream` |
| `options` | [`ZendeskUploadOptions`](#zendeskuploadoptions) |

###### Returns

`Promise`\<`unknown`\>

***

### ZendeskSdkResponse

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | [`ZendeskTicketingProviderPayload`](#zendeskticketingproviderpayload) |

#### Indexable

```ts
[key: string]: unknown
```

#### Properties

##### response?

```ts
optional response?: unknown;
```

##### result?

```ts
optional result?: T;
```

***

### ZendeskTicketAttachmentInput

#### Extends

- [`ZendeskUploadFileInput`](#zendeskuploadfileinput)

#### Properties

##### binary?

```ts
optional binary?: boolean;
```

###### Inherited from

[`ZendeskUploadFileInput`](#zendeskuploadfileinput).[`binary`](#binary-1)

##### comment?

```ts
optional comment?: JsonObject;
```

##### contentType?

```ts
optional contentType?: string;
```

###### Inherited from

[`ZendeskUploadFileInput`](#zendeskuploadfileinput).[`contentType`](#contenttype-1)

##### data

```ts
data: Buffer<ArrayBufferLike> | BodyInit | ReadableStream;
```

###### Inherited from

[`ZendeskUploadFileInput`](#zendeskuploadfileinput).[`data`](#data-1)

##### filename

```ts
filename: string;
```

###### Inherited from

[`ZendeskUploadFileInput`](#zendeskuploadfileinput).[`filename`](#filename-1)

##### public?

```ts
optional public?: boolean;
```

##### ticketId

```ts
ticketId: string | number;
```

##### token?

```ts
optional token?: string;
```

###### Inherited from

[`ZendeskUploadFileInput`](#zendeskuploadfileinput).[`token`](#token-1)

***

### ZendeskTicketingClient

#### Properties

##### rawClient

```ts
rawClient: ZendeskTicketingRawClient;
```

#### Methods

##### addTicketAttachment()

```ts
addTicketAttachment(input): Promise<JsonObject>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`ZendeskTicketAttachmentInput`](#zendeskticketattachmentinput) |

###### Returns

`Promise`\<[`JsonObject`](#jsonobject)\>

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

##### getRawClient()

```ts
getRawClient(): ZendeskTicketingRawClient;
```

###### Returns

[`ZendeskTicketingRawClient`](#zendeskticketingrawclient)

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
listWebhooks(): Promise<ZendeskTicketingProviderPayload>;
```

###### Returns

`Promise`\<[`ZendeskTicketingProviderPayload`](#zendeskticketingproviderpayload)\>

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
searchTickets(query): Promise<ZendeskTicketingProviderPayload>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `query` | `string` \| [`JsonObject`](#jsonobject) |

###### Returns

`Promise`\<[`ZendeskTicketingProviderPayload`](#zendeskticketingproviderpayload)\>

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
| `input` | [`ZendeskUploadFileInput`](#zendeskuploadfileinput) |

###### Returns

`Promise`\<[`JsonObject`](#jsonobject)\>

***

### ZendeskTicketingClientOptions

#### Extended by

- [`ZendeskTicketingIntegrationOptions`](#zendeskticketingintegrationoptions)

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

##### createSdkClient?

```ts
optional createSdkClient?: (options) => ZendeskTicketingRawClient;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | `ZendeskClientOptions` |

###### Returns

[`ZendeskTicketingRawClient`](#zendeskticketingrawclient)

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

##### rawClient?

```ts
optional rawClient?: ZendeskTicketingRawClient;
```

##### sdkOptions?

```ts
optional sdkOptions?: Partial<ZendeskClientOptions>;
```

***

### ZendeskTicketingIntegrationOptions

#### Extends

- [`ZendeskTicketingClientOptions`](#zendeskticketingclientoptions)

#### Properties

##### accessToken?

```ts
optional accessToken?: string;
```

###### Inherited from

[`ZendeskTicketingClientOptions`](#zendeskticketingclientoptions).[`accessToken`](#accesstoken)

##### apiBasePath?

```ts
optional apiBasePath?: string;
```

###### Inherited from

[`ZendeskTicketingClientOptions`](#zendeskticketingclientoptions).[`apiBasePath`](#apibasepath)

##### apiToken?

```ts
optional apiToken?: string;
```

###### Inherited from

[`ZendeskTicketingClientOptions`](#zendeskticketingclientoptions).[`apiToken`](#apitoken)

##### createSdkClient?

```ts
optional createSdkClient?: (options) => ZendeskTicketingRawClient;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | `ZendeskClientOptions` |

###### Returns

[`ZendeskTicketingRawClient`](#zendeskticketingrawclient)

###### Inherited from

[`ZendeskTicketingClientOptions`](#zendeskticketingclientoptions).[`createSdkClient`](#createsdkclient)

##### email?

```ts
optional email?: string;
```

###### Inherited from

[`ZendeskTicketingClientOptions`](#zendeskticketingclientoptions).[`email`](#email)

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

[`ZendeskTicketingClientOptions`](#zendeskticketingclientoptions).[`fetch`](#fetch)

##### instanceUrl

```ts
instanceUrl: string;
```

###### Inherited from

[`ZendeskTicketingClientOptions`](#zendeskticketingclientoptions).[`instanceUrl`](#instanceurl)

##### rawClient?

```ts
optional rawClient?: ZendeskTicketingRawClient;
```

###### Inherited from

[`ZendeskTicketingClientOptions`](#zendeskticketingclientoptions).[`rawClient`](#rawclient-1)

##### sdkOptions?

```ts
optional sdkOptions?: Partial<ZendeskClientOptions>;
```

###### Inherited from

[`ZendeskTicketingClientOptions`](#zendeskticketingclientoptions).[`sdkOptions`](#sdkoptions)

##### ticketingClient?

```ts
optional ticketingClient?: ZendeskTicketingClient;
```

***

### ZendeskTicketingRawClient

#### Properties

##### attachments

```ts
attachments: ZendeskSdkResource;
```

##### organizations

```ts
organizations: ZendeskSdkResource;
```

##### search

```ts
search: ZendeskSdkResource;
```

##### tickets

```ts
tickets: ZendeskSdkResource;
```

##### users

```ts
users: ZendeskSdkResource;
```

##### webhooks

```ts
webhooks: ZendeskSdkResource;
```

***

### ZendeskUploadFileInput

#### Extended by

- [`ZendeskTicketAttachmentInput`](#zendeskticketattachmentinput)

#### Properties

##### binary?

```ts
optional binary?: boolean;
```

##### contentType?

```ts
optional contentType?: string;
```

##### data

```ts
data: Buffer<ArrayBufferLike> | BodyInit | ReadableStream;
```

##### filename

```ts
filename: string;
```

##### token?

```ts
optional token?: string;
```

***

### ZendeskUploadOptions

#### Properties

##### binary

```ts
binary: boolean;
```

##### filename

```ts
filename: string;
```

##### token?

```ts
optional token?: string;
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

### ZendeskTicketingIntegration

```ts
type ZendeskTicketingIntegration = ReturnType<typeof createZendeskTicketingIntegration>;
```

***

### ZendeskTicketingProviderPayload

```ts
type ZendeskTicketingProviderPayload = JsonObject | object;
```

## Variables

### createZendeskIntegration

```ts
const createZendeskIntegration: typeof createZendeskTicketingIntegration;
```

***

### createZendeskIntegrationOperationHandlers

```ts
const createZendeskIntegrationOperationHandlers: typeof createZendeskTicketingOperationHandlers;
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
function createZendeskTicketingIntegration(options): {
  bindingReport: OperationBindingReport;
  client: ZendeskTicketingClient;
  getRawClient: () => ZendeskTicketingRawClient;
  manifest: {
     capabilities: {
        audiences?: ("customer-facing" | "internal-support" | "mixed")[];
        capability: string;
        changesWorkflow?: boolean;
        description?: string;
        exposesSensitiveData?: boolean;
        extension?: boolean;
        label?: string;
        metadata?: Record<string, unknown>;
        providerObjects?: {
           description?: string;
           kind: string;
           label?: string;
           metadata?: Record<string, unknown>;
           schemaName?: string;
        }[];
        requiresCredential?: boolean;
        sideEffect?: boolean;
     }[];
     category: string;
     channelAudiences: ("customer-facing" | "internal-support" | "mixed")[];
     coverage: {
        evidence: {
           label: string;
           url?: string;
        }[];
        notes: string[];
        scope:   | "support-workflow-subset"
           | "provider-api-subset"
           | "connector-required"
           | "local-protocol"
           | "full-provider-api";
     };
     credentialRequirements: {
        description?: string;
        id: string;
        label?: string;
        metadata?: Record<string, unknown>;
        required: boolean;
        scopes: string[];
     }[];
     directions: (
        | "receive-only"
        | "send-only"
        | "inbound-only"
        | "outbound-only"
       | "bidirectional")[];
     id: string;
     limitations: string[];
     maintainers: {
        name: string;
        type: "community" | "official" | "unknown" | "partner";
        url?: string;
     }[];
     metadata?: Record<string, unknown>;
     name: string;
     operations: {
        alias: string;
        audience?: "customer-facing" | "internal-support" | "mixed";
        audiences?: ("customer-facing" | "internal-support" | "mixed")[];
        capability: string;
        changesWorkflow?: boolean;
        description?: string;
        exposesSensitiveData?: boolean;
        extension: boolean;
        externallyVisible?: boolean;
        inputSchema?: unknown;
        inputSchemaName?: string;
        inputSchemaRef?: string;
        label?: string;
        metadata?: Record<string, unknown>;
        outputSchema?: unknown;
        outputSchemaName?: string;
        outputSchemaRef?: string;
        providerObject?: string;
        providerObjects?: {
           description?: string;
           kind: string;
           label?: string;
           metadata?: Record<string, unknown>;
           schemaName?: string;
        }[];
        providerOperation?: string;
        requiredPolicyIds?: string[];
        requiresApproval?: boolean;
        requiresCredential?: boolean;
        sideEffect?: boolean;
     }[];
     packageName: string;
     privacyNotes: string[];
     provider: string;
     trustLevel: "community" | "official" | "verified" | "experimental";
   } & {
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
     }];
     category: "ticketing";
     channelAudiences: ["customer-facing", "internal-support", "mixed"];
     coverage: {
        evidence: [{
           label: "node-zendesk package";
           url: "https://www.npmjs.com/package/node-zendesk";
         }, {
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
        notes: ["Coverage is a Cognidesk support workflow adapter backed by the node-zendesk provider SDK.", "Typed operations cover ticket create/read/update/search, public comments, internal notes, upload-and-attach, users, organizations, webhooks list, current-user readiness, and a node-zendesk rawClient escape hatch for SDK-user-owned advanced methods.", "This package intentionally does not copy the old generated full Zendesk Support OpenAPI clone."];
        scope: "support-workflow-subset";
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
        channelCoverage: {
           broaderZendeskApi: "provider-sdk-raw-client";
           comments: "sdk-backed-ticket-update-comment";
           organizations: "sdk-backed-read";
           tickets: "sdk-backed-create-read-update-search";
           uploads: "sdk-backed-attachments-upload-and-ticket-comment-association";
           users: "sdk-backed-read-current-user";
           webhooks: "sdk-backed-list";
        };
        implementation: {
           manifestImport: "no-sdk-client-initialization";
           rawClientEscapeHatch: "ZendeskTicketingClient.rawClient / getRawClient()";
           sdkPackage: "node-zendesk";
           sdkVersionRange: "^6.0.1";
           strategy: "provider-sdk-backed-client";
        };
        implementationStrategy: "node-zendesk-sdk-backed-support-workflow-subset";
        integrationEntryPoints: {
           manifest: "@cognidesk/integration-ticketing-zendesk/manifest";
           runtime: "@cognidesk/integration-ticketing-zendesk/runtime";
        };
        integrationName: "Zendesk Integration";
        integrationPackageName: "@cognidesk/integration-ticketing-zendesk";
        issue: 35;
        providerClient: {
           importPolicy: "runtime-entrypoint-only";
           package: "node-zendesk";
           versionRange: "^6.0.1";
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
  };
  metadata?: Record<string, unknown>;
  operationAliases: (
     | "ticket.read"
     | "ticket.comment.create"
     | "ticket.create"
     | "ticket.update"
     | "ticket.search"
     | "ticket.internalNote.create"
     | "ticket.attachments.add"
     | "customer.read"
     | "zendesk.organization.read"
     | "zendesk.webhook.list"
    | "zendesk.readiness")[];
  operations: {
     customer.read: (input, _context) => Promise<JsonObject>;
     ticket.attachments.add: (input, _context) => Promise<JsonObject>;
     ticket.comment.create: (input, _context) => Promise<JsonObject>;
     ticket.create: (input, _context) => Promise<JsonObject>;
     ticket.internalNote.create: (input, _context) => Promise<JsonObject>;
     ticket.read: (input, _context) => Promise<JsonObject>;
     ticket.search: (input, _context) => Promise<ZendeskTicketingProviderPayload>;
     ticket.update: (input, _context) => Promise<JsonObject>;
     zendesk.organization.read: (input, _context) => Promise<JsonObject>;
     zendesk.readiness: () => Promise<JsonObject>;
     zendesk.webhook.list: () => Promise<ZendeskTicketingProviderPayload>;
  };
  getOperationHandler: {
     customer.read: (input, _context) => Promise<JsonObject>;
     ticket.attachments.add: (input, _context) => Promise<JsonObject>;
     ticket.comment.create: (input, _context) => Promise<JsonObject>;
     ticket.create: (input, _context) => Promise<JsonObject>;
     ticket.internalNote.create: (input, _context) => Promise<JsonObject>;
     ticket.read: (input, _context) => Promise<JsonObject>;
     ticket.search: (input, _context) => Promise<ZendeskTicketingProviderPayload>;
     ticket.update: (input, _context) => Promise<JsonObject>;
     zendesk.organization.read: (input, _context) => Promise<JsonObject>;
     zendesk.readiness: () => Promise<JsonObject>;
     zendesk.webhook.list: () => Promise<ZendeskTicketingProviderPayload>;
  }[Alias];
  requireOperationHandler: {
     customer.read: (input, _context) => Promise<JsonObject>;
     ticket.attachments.add: (input, _context) => Promise<JsonObject>;
     ticket.comment.create: (input, _context) => Promise<JsonObject>;
     ticket.create: (input, _context) => Promise<JsonObject>;
     ticket.internalNote.create: (input, _context) => Promise<JsonObject>;
     ticket.read: (input, _context) => Promise<JsonObject>;
     ticket.search: (input, _context) => Promise<ZendeskTicketingProviderPayload>;
     ticket.update: (input, _context) => Promise<JsonObject>;
     zendesk.organization.read: (input, _context) => Promise<JsonObject>;
     zendesk.readiness: () => Promise<JsonObject>;
     zendesk.webhook.list: () => Promise<ZendeskTicketingProviderPayload>;
  }[Alias];
  run: Promise<Awaited<ReturnType<{
     customer.read: (input, _context) => Promise<JsonObject>;
     ticket.attachments.add: (input, _context) => Promise<JsonObject>;
     ticket.comment.create: (input, _context) => Promise<JsonObject>;
     ticket.create: (input, _context) => Promise<JsonObject>;
     ticket.internalNote.create: (input, _context) => Promise<JsonObject>;
     ticket.read: (input, _context) => Promise<JsonObject>;
     ticket.search: (input, _context) => Promise<ZendeskTicketingProviderPayload>;
     ticket.update: (input, _context) => Promise<JsonObject>;
     zendesk.organization.read: (input, _context) => Promise<JsonObject>;
     zendesk.readiness: () => Promise<JsonObject>;
     zendesk.webhook.list: () => Promise<ZendeskTicketingProviderPayload>;
  }[Alias]>>>;
};
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`ZendeskTicketingIntegrationOptions`](#zendeskticketingintegrationoptions) |

#### Returns

```ts
{
  bindingReport: OperationBindingReport;
  client: ZendeskTicketingClient;
  getRawClient: () => ZendeskTicketingRawClient;
  manifest: {
     capabilities: {
        audiences?: ("customer-facing" | "internal-support" | "mixed")[];
        capability: string;
        changesWorkflow?: boolean;
        description?: string;
        exposesSensitiveData?: boolean;
        extension?: boolean;
        label?: string;
        metadata?: Record<string, unknown>;
        providerObjects?: {
           description?: string;
           kind: string;
           label?: string;
           metadata?: Record<string, unknown>;
           schemaName?: string;
        }[];
        requiresCredential?: boolean;
        sideEffect?: boolean;
     }[];
     category: string;
     channelAudiences: ("customer-facing" | "internal-support" | "mixed")[];
     coverage: {
        evidence: {
           label: string;
           url?: string;
        }[];
        notes: string[];
        scope:   | "support-workflow-subset"
           | "provider-api-subset"
           | "connector-required"
           | "local-protocol"
           | "full-provider-api";
     };
     credentialRequirements: {
        description?: string;
        id: string;
        label?: string;
        metadata?: Record<string, unknown>;
        required: boolean;
        scopes: string[];
     }[];
     directions: (
        | "receive-only"
        | "send-only"
        | "inbound-only"
        | "outbound-only"
       | "bidirectional")[];
     id: string;
     limitations: string[];
     maintainers: {
        name: string;
        type: "community" | "official" | "unknown" | "partner";
        url?: string;
     }[];
     metadata?: Record<string, unknown>;
     name: string;
     operations: {
        alias: string;
        audience?: "customer-facing" | "internal-support" | "mixed";
        audiences?: ("customer-facing" | "internal-support" | "mixed")[];
        capability: string;
        changesWorkflow?: boolean;
        description?: string;
        exposesSensitiveData?: boolean;
        extension: boolean;
        externallyVisible?: boolean;
        inputSchema?: unknown;
        inputSchemaName?: string;
        inputSchemaRef?: string;
        label?: string;
        metadata?: Record<string, unknown>;
        outputSchema?: unknown;
        outputSchemaName?: string;
        outputSchemaRef?: string;
        providerObject?: string;
        providerObjects?: {
           description?: string;
           kind: string;
           label?: string;
           metadata?: Record<string, unknown>;
           schemaName?: string;
        }[];
        providerOperation?: string;
        requiredPolicyIds?: string[];
        requiresApproval?: boolean;
        requiresCredential?: boolean;
        sideEffect?: boolean;
     }[];
     packageName: string;
     privacyNotes: string[];
     provider: string;
     trustLevel: "community" | "official" | "verified" | "experimental";
   } & {
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
     }];
     category: "ticketing";
     channelAudiences: ["customer-facing", "internal-support", "mixed"];
     coverage: {
        evidence: [{
           label: "node-zendesk package";
           url: "https://www.npmjs.com/package/node-zendesk";
         }, {
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
        notes: ["Coverage is a Cognidesk support workflow adapter backed by the node-zendesk provider SDK.", "Typed operations cover ticket create/read/update/search, public comments, internal notes, upload-and-attach, users, organizations, webhooks list, current-user readiness, and a node-zendesk rawClient escape hatch for SDK-user-owned advanced methods.", "This package intentionally does not copy the old generated full Zendesk Support OpenAPI clone."];
        scope: "support-workflow-subset";
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
        channelCoverage: {
           broaderZendeskApi: "provider-sdk-raw-client";
           comments: "sdk-backed-ticket-update-comment";
           organizations: "sdk-backed-read";
           tickets: "sdk-backed-create-read-update-search";
           uploads: "sdk-backed-attachments-upload-and-ticket-comment-association";
           users: "sdk-backed-read-current-user";
           webhooks: "sdk-backed-list";
        };
        implementation: {
           manifestImport: "no-sdk-client-initialization";
           rawClientEscapeHatch: "ZendeskTicketingClient.rawClient / getRawClient()";
           sdkPackage: "node-zendesk";
           sdkVersionRange: "^6.0.1";
           strategy: "provider-sdk-backed-client";
        };
        implementationStrategy: "node-zendesk-sdk-backed-support-workflow-subset";
        integrationEntryPoints: {
           manifest: "@cognidesk/integration-ticketing-zendesk/manifest";
           runtime: "@cognidesk/integration-ticketing-zendesk/runtime";
        };
        integrationName: "Zendesk Integration";
        integrationPackageName: "@cognidesk/integration-ticketing-zendesk";
        issue: 35;
        providerClient: {
           importPolicy: "runtime-entrypoint-only";
           package: "node-zendesk";
           versionRange: "^6.0.1";
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
  };
  metadata?: Record<string, unknown>;
  operationAliases: (
     | "ticket.read"
     | "ticket.comment.create"
     | "ticket.create"
     | "ticket.update"
     | "ticket.search"
     | "ticket.internalNote.create"
     | "ticket.attachments.add"
     | "customer.read"
     | "zendesk.organization.read"
     | "zendesk.webhook.list"
    | "zendesk.readiness")[];
  operations: {
     customer.read: (input, _context) => Promise<JsonObject>;
     ticket.attachments.add: (input, _context) => Promise<JsonObject>;
     ticket.comment.create: (input, _context) => Promise<JsonObject>;
     ticket.create: (input, _context) => Promise<JsonObject>;
     ticket.internalNote.create: (input, _context) => Promise<JsonObject>;
     ticket.read: (input, _context) => Promise<JsonObject>;
     ticket.search: (input, _context) => Promise<ZendeskTicketingProviderPayload>;
     ticket.update: (input, _context) => Promise<JsonObject>;
     zendesk.organization.read: (input, _context) => Promise<JsonObject>;
     zendesk.readiness: () => Promise<JsonObject>;
     zendesk.webhook.list: () => Promise<ZendeskTicketingProviderPayload>;
  };
  getOperationHandler: {
     customer.read: (input, _context) => Promise<JsonObject>;
     ticket.attachments.add: (input, _context) => Promise<JsonObject>;
     ticket.comment.create: (input, _context) => Promise<JsonObject>;
     ticket.create: (input, _context) => Promise<JsonObject>;
     ticket.internalNote.create: (input, _context) => Promise<JsonObject>;
     ticket.read: (input, _context) => Promise<JsonObject>;
     ticket.search: (input, _context) => Promise<ZendeskTicketingProviderPayload>;
     ticket.update: (input, _context) => Promise<JsonObject>;
     zendesk.organization.read: (input, _context) => Promise<JsonObject>;
     zendesk.readiness: () => Promise<JsonObject>;
     zendesk.webhook.list: () => Promise<ZendeskTicketingProviderPayload>;
  }[Alias];
  requireOperationHandler: {
     customer.read: (input, _context) => Promise<JsonObject>;
     ticket.attachments.add: (input, _context) => Promise<JsonObject>;
     ticket.comment.create: (input, _context) => Promise<JsonObject>;
     ticket.create: (input, _context) => Promise<JsonObject>;
     ticket.internalNote.create: (input, _context) => Promise<JsonObject>;
     ticket.read: (input, _context) => Promise<JsonObject>;
     ticket.search: (input, _context) => Promise<ZendeskTicketingProviderPayload>;
     ticket.update: (input, _context) => Promise<JsonObject>;
     zendesk.organization.read: (input, _context) => Promise<JsonObject>;
     zendesk.readiness: () => Promise<JsonObject>;
     zendesk.webhook.list: () => Promise<ZendeskTicketingProviderPayload>;
  }[Alias];
  run: Promise<Awaited<ReturnType<{
     customer.read: (input, _context) => Promise<JsonObject>;
     ticket.attachments.add: (input, _context) => Promise<JsonObject>;
     ticket.comment.create: (input, _context) => Promise<JsonObject>;
     ticket.create: (input, _context) => Promise<JsonObject>;
     ticket.internalNote.create: (input, _context) => Promise<JsonObject>;
     ticket.read: (input, _context) => Promise<JsonObject>;
     ticket.search: (input, _context) => Promise<ZendeskTicketingProviderPayload>;
     ticket.update: (input, _context) => Promise<JsonObject>;
     zendesk.organization.read: (input, _context) => Promise<JsonObject>;
     zendesk.readiness: () => Promise<JsonObject>;
     zendesk.webhook.list: () => Promise<ZendeskTicketingProviderPayload>;
  }[Alias]>>>;
}
```

| Name | Type |
| ------ | ------ |
| `bindingReport` | [`OperationBindingReport`](../../../packages/integration-kit/dist.md#operationbindingreport) |
| `client` | [`ZendeskTicketingClient`](#zendeskticketingclient) |
| `getRawClient()` | () => [`ZendeskTicketingRawClient`](#zendeskticketingrawclient) |
| `manifest` | \{ `capabilities`: \{ `audiences?`: (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[]; `capability`: `string`; `changesWorkflow?`: `boolean`; `description?`: `string`; `exposesSensitiveData?`: `boolean`; `extension?`: `boolean`; `label?`: `string`; `metadata?`: `Record`\<`string`, `unknown`\>; `providerObjects?`: \{ `description?`: `string`; `kind`: `string`; `label?`: `string`; `metadata?`: `Record`\<`string`, `unknown`\>; `schemaName?`: `string`; \}[]; `requiresCredential?`: `boolean`; `sideEffect?`: `boolean`; \}[]; `category`: `string`; `channelAudiences`: (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[]; `coverage`: \{ `evidence`: \{ `label`: `string`; `url?`: `string`; \}[]; `notes`: `string`[]; `scope`: \| `"support-workflow-subset"` \| `"provider-api-subset"` \| `"connector-required"` \| `"local-protocol"` \| `"full-provider-api"`; \}; `credentialRequirements`: \{ `description?`: `string`; `id`: `string`; `label?`: `string`; `metadata?`: `Record`\<`string`, `unknown`\>; `required`: `boolean`; `scopes`: `string`[]; \}[]; `directions`: ( \| `"receive-only"` \| `"send-only"` \| `"inbound-only"` \| `"outbound-only"` \| `"bidirectional"`)[]; `id`: `string`; `limitations`: `string`[]; `maintainers`: \{ `name`: `string`; `type`: `"community"` \| `"official"` \| `"unknown"` \| `"partner"`; `url?`: `string`; \}[]; `metadata?`: `Record`\<`string`, `unknown`\>; `name`: `string`; `operations`: \{ `alias`: `string`; `audience?`: `"customer-facing"` \| `"internal-support"` \| `"mixed"`; `audiences?`: (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[]; `capability`: `string`; `changesWorkflow?`: `boolean`; `description?`: `string`; `exposesSensitiveData?`: `boolean`; `extension`: `boolean`; `externallyVisible?`: `boolean`; `inputSchema?`: `unknown`; `inputSchemaName?`: `string`; `inputSchemaRef?`: `string`; `label?`: `string`; `metadata?`: `Record`\<`string`, `unknown`\>; `outputSchema?`: `unknown`; `outputSchemaName?`: `string`; `outputSchemaRef?`: `string`; `providerObject?`: `string`; `providerObjects?`: \{ `description?`: `string`; `kind`: `string`; `label?`: `string`; `metadata?`: `Record`\<`string`, `unknown`\>; `schemaName?`: `string`; \}[]; `providerOperation?`: `string`; `requiredPolicyIds?`: `string`[]; `requiresApproval?`: `boolean`; `requiresCredential?`: `boolean`; `sideEffect?`: `boolean`; \}[]; `packageName`: `string`; `privacyNotes`: `string`[]; `provider`: `string`; `trustLevel`: `"community"` \| `"official"` \| `"verified"` \| `"experimental"`; \} & \{ `capabilities`: \[\{ `capability`: `"create-provider-object"`; `changesWorkflow`: `true`; `exposesSensitiveData`: `true`; `providerObjects`: \[\{ `kind`: `"zendeskTicket"`; `label`: `"Zendesk Ticket"`; \}, \{ `kind`: `"zendeskTicketComment"`; `label`: `"Zendesk Ticket Comment"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `providerObjects`: \[\{ `kind`: `"zendeskTicket"`; `label`: `"Zendesk Ticket"`; \}, \{ `kind`: `"zendeskUser"`; `label`: `"Zendesk User"`; \}, \{ `kind`: `"zendeskOrganization"`; `label`: `"Zendesk Organization"`; \}, \{ `kind`: `"zendeskWebhook"`; `label`: `"Zendesk Webhook"`; \}\]; `requiresCredential`: `true`; \}, \{ `capability`: `"update-provider-object"`; `changesWorkflow`: `true`; `exposesSensitiveData`: `true`; `providerObjects`: \[\{ `kind`: `"zendeskTicket"`; `label`: `"Zendesk Ticket"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}\]; `category`: `"ticketing"`; `channelAudiences`: \[`"customer-facing"`, `"internal-support"`, `"mixed"`\]; `coverage`: \{ `evidence`: \[\{ `label`: `"node-zendesk package"`; `url`: `"https://www.npmjs.com/package/node-zendesk"`; \}, \{ `label`: `"Zendesk Node.js API client docs"`; `url`: `"https://developer.zendesk.com/documentation/ticketing/api-clients/nodejs/"`; \}, \{ `label`: `"Zendesk Support API OpenAPI"`; `url`: `"https://developer.zendesk.com/zendesk/oas.yaml"`; \}, \{ `label`: `"Zendesk Support Tickets API"`; `url`: `"https://developer.zendesk.com/api-reference/ticketing/tickets/tickets/"`; \}, \{ `label`: `"Zendesk Ticket Comments API"`; `url`: `"https://developer.zendesk.com/api-reference/ticketing/tickets/ticket_comments/"`; \}, \{ `label`: `"Zendesk Upload Files API"`; `url`: `"https://developer.zendesk.com/api-reference/ticketing/tickets/ticket-attachments/"`; \}\]; `notes`: \[`"Coverage is a Cognidesk support workflow adapter backed by the node-zendesk provider SDK."`, `"Typed operations cover ticket create/read/update/search, public comments, internal notes, upload-and-attach, users, organizations, webhooks list, current-user readiness, and a node-zendesk rawClient escape hatch for SDK-user-owned advanced methods."`, `"This package intentionally does not copy the old generated full Zendesk Support OpenAPI clone."`\]; `scope`: `"support-workflow-subset"`; \}; `credentialRequirements`: \[\{ `id`: `"zendesk-instance"`; `label`: `"Zendesk Support instance URL"`; `required`: `true`; \}, \{ `id`: `"zendesk-api-access"`; `label`: `"Zendesk Support API access"`; `metadata`: \{ `privilegeGuidance`: `"OAuth tokens use Zendesk read/write scopes. API-token credentials inherit the Zendesk user's role and Support permissions."`; `scopeKind`: `"mixed-auth-mode"`; \}; `required`: `true`; `scopes`: \[`"read"`, `"write"`\]; \}\]; `directions`: \[`"bidirectional"`\]; `id`: `"ticketing.zendesk"`; `limitations`: \[`"Tenant fields, triggers, automations, macros, routing, requester identity, and outbound policy remain SDK-user configuration."`\]; `maintainers`: \[\{ `name`: `"Cognidesk"`; `type`: `"official"`; \}\]; `metadata`: \{ `channelCoverage`: \{ `broaderZendeskApi`: `"provider-sdk-raw-client"`; `comments`: `"sdk-backed-ticket-update-comment"`; `organizations`: `"sdk-backed-read"`; `tickets`: `"sdk-backed-create-read-update-search"`; `uploads`: `"sdk-backed-attachments-upload-and-ticket-comment-association"`; `users`: `"sdk-backed-read-current-user"`; `webhooks`: `"sdk-backed-list"`; \}; `implementation`: \{ `manifestImport`: `"no-sdk-client-initialization"`; `rawClientEscapeHatch`: `"ZendeskTicketingClient.rawClient / getRawClient()"`; `sdkPackage`: `"node-zendesk"`; `sdkVersionRange`: `"^6.0.1"`; `strategy`: `"provider-sdk-backed-client"`; \}; `implementationStrategy`: `"node-zendesk-sdk-backed-support-workflow-subset"`; `integrationEntryPoints`: \{ `manifest`: `"@cognidesk/integration-ticketing-zendesk/manifest"`; `runtime`: `"@cognidesk/integration-ticketing-zendesk/runtime"`; \}; `integrationName`: `"Zendesk Integration"`; `integrationPackageName`: `"@cognidesk/integration-ticketing-zendesk"`; `issue`: `35`; `providerClient`: \{ `importPolicy`: `"runtime-entrypoint-only"`; `package`: `"node-zendesk"`; `versionRange`: `"^6.0.1"`; \}; \}; `name`: `"Zendesk Support"`; `operations`: \[\{ `alias`: `"ticket.create"`; `capability`: `"create-provider-object"`; `changesWorkflow`: `true`; `exposesSensitiveData`: `true`; `providerObject`: `"ticket"`; `providerOperation`: `"POST /api/v2/tickets.json"`; `sideEffect`: `true`; \}, \{ `alias`: `"ticket.read"`; `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `providerObject`: `"ticket"`; `providerOperation`: `"GET /api/v2/tickets/{ticket_id}.json"`; \}, \{ `alias`: `"ticket.update"`; `capability`: `"update-provider-object"`; `changesWorkflow`: `true`; `exposesSensitiveData`: `true`; `providerObject`: `"ticket"`; `providerOperation`: `"PUT /api/v2/tickets/{ticket_id}.json"`; `sideEffect`: `true`; \}\]; `packageName`: `"@cognidesk/integration-ticketing-zendesk"`; `privacyNotes`: \[`"Zendesk tickets can contain customer messages, requester details, internal comments, tags, and workflow metadata."`\]; `provider`: `"zendesk"`; `trustLevel`: `"official"`; \} |
| `metadata?` | `Record`\<`string`, `unknown`\> |
| `operationAliases` | ( \| `"ticket.read"` \| `"ticket.comment.create"` \| `"ticket.create"` \| `"ticket.update"` \| `"ticket.search"` \| `"ticket.internalNote.create"` \| `"ticket.attachments.add"` \| `"customer.read"` \| `"zendesk.organization.read"` \| `"zendesk.webhook.list"` \| `"zendesk.readiness"`)[] |
| `operations` | \{ `customer.read`: (`input`, `_context`) => `Promise`\<[`JsonObject`](#jsonobject)\>; `ticket.attachments.add`: (`input`, `_context`) => `Promise`\<[`JsonObject`](#jsonobject)\>; `ticket.comment.create`: (`input`, `_context`) => `Promise`\<[`JsonObject`](#jsonobject)\>; `ticket.create`: (`input`, `_context`) => `Promise`\<[`JsonObject`](#jsonobject)\>; `ticket.internalNote.create`: (`input`, `_context`) => `Promise`\<[`JsonObject`](#jsonobject)\>; `ticket.read`: (`input`, `_context`) => `Promise`\<[`JsonObject`](#jsonobject)\>; `ticket.search`: (`input`, `_context`) => `Promise`\<[`ZendeskTicketingProviderPayload`](#zendeskticketingproviderpayload)\>; `ticket.update`: (`input`, `_context`) => `Promise`\<[`JsonObject`](#jsonobject)\>; `zendesk.organization.read`: (`input`, `_context`) => `Promise`\<[`JsonObject`](#jsonobject)\>; `zendesk.readiness`: () => `Promise`\<[`JsonObject`](#jsonobject)\>; `zendesk.webhook.list`: () => `Promise`\<[`ZendeskTicketingProviderPayload`](#zendeskticketingproviderpayload)\>; \} |
| `operations.customer.read()` | (`input`, `_context`) => `Promise`\<[`JsonObject`](#jsonobject)\> |
| `operations.ticket.attachments.add()` | (`input`, `_context`) => `Promise`\<[`JsonObject`](#jsonobject)\> |
| `operations.ticket.comment.create()` | (`input`, `_context`) => `Promise`\<[`JsonObject`](#jsonobject)\> |
| `operations.ticket.create()` | (`input`, `_context`) => `Promise`\<[`JsonObject`](#jsonobject)\> |
| `operations.ticket.internalNote.create()` | (`input`, `_context`) => `Promise`\<[`JsonObject`](#jsonobject)\> |
| `operations.ticket.read()` | (`input`, `_context`) => `Promise`\<[`JsonObject`](#jsonobject)\> |
| `operations.ticket.search()` | (`input`, `_context`) => `Promise`\<[`ZendeskTicketingProviderPayload`](#zendeskticketingproviderpayload)\> |
| `operations.ticket.update()` | (`input`, `_context`) => `Promise`\<[`JsonObject`](#jsonobject)\> |
| `operations.zendesk.organization.read()` | (`input`, `_context`) => `Promise`\<[`JsonObject`](#jsonobject)\> |
| `operations.zendesk.readiness()` | () => `Promise`\<[`JsonObject`](#jsonobject)\> |
| `operations.zendesk.webhook.list()` | () => `Promise`\<[`ZendeskTicketingProviderPayload`](#zendeskticketingproviderpayload)\> |
| `getOperationHandler()` | (`alias`) => \{ `customer.read`: (`input`, `_context`) => `Promise`\<[`JsonObject`](#jsonobject)\>; `ticket.attachments.add`: (`input`, `_context`) => `Promise`\<[`JsonObject`](#jsonobject)\>; `ticket.comment.create`: (`input`, `_context`) => `Promise`\<[`JsonObject`](#jsonobject)\>; `ticket.create`: (`input`, `_context`) => `Promise`\<[`JsonObject`](#jsonobject)\>; `ticket.internalNote.create`: (`input`, `_context`) => `Promise`\<[`JsonObject`](#jsonobject)\>; `ticket.read`: (`input`, `_context`) => `Promise`\<[`JsonObject`](#jsonobject)\>; `ticket.search`: (`input`, `_context`) => `Promise`\<[`ZendeskTicketingProviderPayload`](#zendeskticketingproviderpayload)\>; `ticket.update`: (`input`, `_context`) => `Promise`\<[`JsonObject`](#jsonobject)\>; `zendesk.organization.read`: (`input`, `_context`) => `Promise`\<[`JsonObject`](#jsonobject)\>; `zendesk.readiness`: () => `Promise`\<[`JsonObject`](#jsonobject)\>; `zendesk.webhook.list`: () => `Promise`\<[`ZendeskTicketingProviderPayload`](#zendeskticketingproviderpayload)\>; \}\[`Alias`\] |
| `requireOperationHandler()` | (`alias`) => \{ `customer.read`: (`input`, `_context`) => `Promise`\<[`JsonObject`](#jsonobject)\>; `ticket.attachments.add`: (`input`, `_context`) => `Promise`\<[`JsonObject`](#jsonobject)\>; `ticket.comment.create`: (`input`, `_context`) => `Promise`\<[`JsonObject`](#jsonobject)\>; `ticket.create`: (`input`, `_context`) => `Promise`\<[`JsonObject`](#jsonobject)\>; `ticket.internalNote.create`: (`input`, `_context`) => `Promise`\<[`JsonObject`](#jsonobject)\>; `ticket.read`: (`input`, `_context`) => `Promise`\<[`JsonObject`](#jsonobject)\>; `ticket.search`: (`input`, `_context`) => `Promise`\<[`ZendeskTicketingProviderPayload`](#zendeskticketingproviderpayload)\>; `ticket.update`: (`input`, `_context`) => `Promise`\<[`JsonObject`](#jsonobject)\>; `zendesk.organization.read`: (`input`, `_context`) => `Promise`\<[`JsonObject`](#jsonobject)\>; `zendesk.readiness`: () => `Promise`\<[`JsonObject`](#jsonobject)\>; `zendesk.webhook.list`: () => `Promise`\<[`ZendeskTicketingProviderPayload`](#zendeskticketingproviderpayload)\>; \}\[`Alias`\] |
| `run()` | ( `alias`, `input`, `context?`) => `Promise`\<`Awaited`\<`ReturnType`\<\{ `customer.read`: (`input`, `_context`) => `Promise`\<[`JsonObject`](#jsonobject)\>; `ticket.attachments.add`: (`input`, `_context`) => `Promise`\<[`JsonObject`](#jsonobject)\>; `ticket.comment.create`: (`input`, `_context`) => `Promise`\<[`JsonObject`](#jsonobject)\>; `ticket.create`: (`input`, `_context`) => `Promise`\<[`JsonObject`](#jsonobject)\>; `ticket.internalNote.create`: (`input`, `_context`) => `Promise`\<[`JsonObject`](#jsonobject)\>; `ticket.read`: (`input`, `_context`) => `Promise`\<[`JsonObject`](#jsonobject)\>; `ticket.search`: (`input`, `_context`) => `Promise`\<[`ZendeskTicketingProviderPayload`](#zendeskticketingproviderpayload)\>; `ticket.update`: (`input`, `_context`) => `Promise`\<[`JsonObject`](#jsonobject)\>; `zendesk.organization.read`: (`input`, `_context`) => `Promise`\<[`JsonObject`](#jsonobject)\>; `zendesk.readiness`: () => `Promise`\<[`JsonObject`](#jsonobject)\>; `zendesk.webhook.list`: () => `Promise`\<[`ZendeskTicketingProviderPayload`](#zendeskticketingproviderpayload)\>; \}\[`Alias`\]\>\>\> |

***

### createZendeskTicketingOperationHandlers()

```ts
function createZendeskTicketingOperationHandlers(options): {
  customer.read: (input, _context) => Promise<JsonObject>;
  ticket.attachments.add: (input, _context) => Promise<JsonObject>;
  ticket.comment.create: (input, _context) => Promise<JsonObject>;
  ticket.create: (input, _context) => Promise<JsonObject>;
  ticket.internalNote.create: (input, _context) => Promise<JsonObject>;
  ticket.read: (input, _context) => Promise<JsonObject>;
  ticket.search: (input, _context) => Promise<ZendeskTicketingProviderPayload>;
  ticket.update: (input, _context) => Promise<JsonObject>;
  zendesk.organization.read: (input, _context) => Promise<JsonObject>;
  zendesk.readiness: () => Promise<JsonObject>;
  zendesk.webhook.list: () => Promise<ZendeskTicketingProviderPayload>;
};
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`ZendeskTicketingIntegrationOptions`](#zendeskticketingintegrationoptions) |

#### Returns

```ts
{
  customer.read: (input, _context) => Promise<JsonObject>;
  ticket.attachments.add: (input, _context) => Promise<JsonObject>;
  ticket.comment.create: (input, _context) => Promise<JsonObject>;
  ticket.create: (input, _context) => Promise<JsonObject>;
  ticket.internalNote.create: (input, _context) => Promise<JsonObject>;
  ticket.read: (input, _context) => Promise<JsonObject>;
  ticket.search: (input, _context) => Promise<ZendeskTicketingProviderPayload>;
  ticket.update: (input, _context) => Promise<JsonObject>;
  zendesk.organization.read: (input, _context) => Promise<JsonObject>;
  zendesk.readiness: () => Promise<JsonObject>;
  zendesk.webhook.list: () => Promise<ZendeskTicketingProviderPayload>;
}
```

| Name | Type |
| ------ | ------ |
| `customer.read()` | (`input`, `_context`) => `Promise`\<[`JsonObject`](#jsonobject)\> |
| `ticket.attachments.add()` | (`input`, `_context`) => `Promise`\<[`JsonObject`](#jsonobject)\> |
| `ticket.comment.create()` | (`input`, `_context`) => `Promise`\<[`JsonObject`](#jsonobject)\> |
| `ticket.create()` | (`input`, `_context`) => `Promise`\<[`JsonObject`](#jsonobject)\> |
| `ticket.internalNote.create()` | (`input`, `_context`) => `Promise`\<[`JsonObject`](#jsonobject)\> |
| `ticket.read()` | (`input`, `_context`) => `Promise`\<[`JsonObject`](#jsonobject)\> |
| `ticket.search()` | (`input`, `_context`) => `Promise`\<[`ZendeskTicketingProviderPayload`](#zendeskticketingproviderpayload)\> |
| `ticket.update()` | (`input`, `_context`) => `Promise`\<[`JsonObject`](#jsonobject)\> |
| `zendesk.organization.read()` | (`input`, `_context`) => `Promise`\<[`JsonObject`](#jsonobject)\> |
| `zendesk.readiness()` | () => `Promise`\<[`JsonObject`](#jsonobject)\> |
| `zendesk.webhook.list()` | () => `Promise`\<[`ZendeskTicketingProviderPayload`](#zendeskticketingproviderpayload)\> |

***

### zendeskEndpointUri()

```ts
function zendeskEndpointUri(options): string;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | `Pick`\<[`ZendeskTicketingClientOptions`](#zendeskticketingclientoptions), `"instanceUrl"` \| `"apiBasePath"`\> |

#### Returns

`string`

***

### zendeskSdkOptions()

```ts
function zendeskSdkOptions(options, endpointUri?): ZendeskClientOptions;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`ZendeskTicketingClientOptions`](#zendeskticketingclientoptions) |
| `endpointUri?` | `string` |

#### Returns

`ZendeskClientOptions`

## References

### zendeskTicketingOperationAliases

Re-exports [zendeskTicketingOperationAliases](dist/manifest.md#zendeskticketingoperationaliases)

***

### zendeskTicketingProviderManifest

Re-exports [zendeskTicketingProviderManifest](dist/manifest.md#zendeskticketingprovidermanifest)

***

### zendeskTicketingProviderManifestInput

Re-exports [zendeskTicketingProviderManifestInput](dist/manifest.md#zendeskticketingprovidermanifestinput)
