# integrations/ticketing/zoho-desk/dist

## Interfaces

### ZohoDeskCredentialStatusInput

#### Properties

##### apiAccessConfigured?

```ts
optional apiAccessConfigured?: boolean;
```

##### orgId?

```ts
optional orgId?: string;
```

***

### ZohoDeskJsonObject

#### Extended by

- [`ZohoDeskProviderExtensionFields`](#zohodeskproviderextensionfields)
- [`ZohoDeskProviderResponse`](#zohodeskproviderresponse)

#### Indexable

```ts
[key: string]: ZohoDeskProviderExtensionValue
```

***

### ZohoDeskJsonRetryOptions

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

***

### ZohoDeskLiveCheckOptions

#### Extends

- [`ZohoDeskTicketingClientOptions`](#zohodeskticketingclientoptions)

#### Properties

##### accessToken?

```ts
optional accessToken?: string;
```

###### Inherited from

[`ZohoDeskTicketingClientOptions`](#zohodeskticketingclientoptions).[`accessToken`](#accesstoken-1)

##### apiBaseUrl?

```ts
optional apiBaseUrl?: string;
```

###### Inherited from

[`ZohoDeskTicketingClientOptions`](#zohodeskticketingclientoptions).[`apiBaseUrl`](#apibaseurl-1)

##### client?

```ts
optional client?: Pick<ZohoDeskTicketingClient, "readiness">;
```

##### dataCenter?

```ts
optional dataCenter?: string;
```

###### Inherited from

[`ZohoDeskTicketingClientOptions`](#zohodeskticketingclientoptions).[`dataCenter`](#datacenter-1)

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

[`ZohoDeskTicketingClientOptions`](#zohodeskticketingclientoptions).[`fetch`](#fetch-1)

##### headers?

```ts
optional headers?: Record<string, string>;
```

###### Inherited from

[`ZohoDeskTicketingClientOptions`](#zohodeskticketingclientoptions).[`headers`](#headers-1)

##### orgId?

```ts
optional orgId?: string;
```

###### Inherited from

[`ZohoDeskTicketingClientOptions`](#zohodeskticketingclientoptions).[`orgId`](#orgid-2)

##### providerClient?

```ts
optional providerClient?: ZohoDeskProviderClient;
```

###### Inherited from

[`ZohoDeskTicketingClientOptions`](#zohodeskticketingclientoptions).[`providerClient`](#providerclient-2)

##### retry?

```ts
optional retry?: number | ZohoDeskJsonRetryOptions;
```

###### Inherited from

[`ZohoDeskTicketingClientOptions`](#zohodeskticketingclientoptions).[`retry`](#retry-1)

##### signal?

```ts
optional signal?: AbortSignal;
```

###### Inherited from

[`ZohoDeskTicketingClientOptions`](#zohodeskticketingclientoptions).[`signal`](#signal-1)

##### timeoutMs?

```ts
optional timeoutMs?: number;
```

###### Inherited from

[`ZohoDeskTicketingClientOptions`](#zohodeskticketingclientoptions).[`timeoutMs`](#timeoutms-1)

***

### ZohoDeskProviderClient

#### Methods

##### createTicket()

```ts
createTicket(input): Promise<ZohoDeskProviderResponse>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`ZohoDeskProviderPayload`](#zohodeskproviderpayload) |

###### Returns

`Promise`\<[`ZohoDeskProviderResponse`](#zohodeskproviderresponse)\>

##### createTicketComment()

```ts
createTicketComment(ticketId, body): Promise<ZohoDeskProviderResponse>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `ticketId` | `string` |
| `body` | [`ZohoDeskProviderPayload`](#zohodeskproviderpayload) |

###### Returns

`Promise`\<[`ZohoDeskProviderResponse`](#zohodeskproviderresponse)\>

##### getTicket()

```ts
getTicket(ticketId): Promise<ZohoDeskProviderResponse>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `ticketId` | `string` |

###### Returns

`Promise`\<[`ZohoDeskProviderResponse`](#zohodeskproviderresponse)\>

##### listTicketComments()

```ts
listTicketComments(ticketId, query?): Promise<ZohoDeskProviderResponse>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `ticketId` | `string` |
| `query?` | [`ZohoDeskProviderQuery`](#zohodeskproviderquery) |

###### Returns

`Promise`\<[`ZohoDeskProviderResponse`](#zohodeskproviderresponse)\>

##### listTickets()

```ts
listTickets(query?): Promise<ZohoDeskProviderResponse>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `query?` | [`ZohoDeskProviderQuery`](#zohodeskproviderquery) |

###### Returns

`Promise`\<[`ZohoDeskProviderResponse`](#zohodeskproviderresponse)\>

##### listTicketThreads()

```ts
listTicketThreads(ticketId, query?): Promise<ZohoDeskProviderResponse>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `ticketId` | `string` |
| `query?` | [`ZohoDeskProviderQuery`](#zohodeskproviderquery) |

###### Returns

`Promise`\<[`ZohoDeskProviderResponse`](#zohodeskproviderresponse)\>

##### readiness()

```ts
readiness(): Promise<ZohoDeskProviderResponse>;
```

###### Returns

`Promise`\<[`ZohoDeskProviderResponse`](#zohodeskproviderresponse)\>

##### sendTicketReply()

```ts
sendTicketReply(ticketId, body): Promise<ZohoDeskProviderResponse>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `ticketId` | `string` |
| `body` | [`ZohoDeskProviderPayload`](#zohodeskproviderpayload) |

###### Returns

`Promise`\<[`ZohoDeskProviderResponse`](#zohodeskproviderresponse)\>

##### updateTicket()

```ts
updateTicket(ticketId, patch): Promise<ZohoDeskProviderResponse>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `ticketId` | `string` |
| `patch` | [`ZohoDeskProviderPayload`](#zohodeskproviderpayload) |

###### Returns

`Promise`\<[`ZohoDeskProviderResponse`](#zohodeskproviderresponse)\>

***

### ZohoDeskProviderExtensionFields

#### Extends

- [`ZohoDeskJsonObject`](#zohodeskjsonobject)

#### Indexable

```ts
[key: string]: ZohoDeskProviderExtensionValue
```

***

### ZohoDeskProviderResponse

#### Extends

- [`ZohoDeskJsonObject`](#zohodeskjsonobject)

#### Indexable

```ts
[key: string]: ZohoDeskProviderExtensionValue
```

***

### ZohoDeskTicketingClient

#### Properties

##### providerClient

```ts
providerClient: ZohoDeskProviderClient;
```

#### Methods

##### createTicket()

```ts
createTicket(input): Promise<ZohoDeskProviderResponse>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`ZohoDeskTicketInput`](#zohodeskticketinput) |

###### Returns

`Promise`\<[`ZohoDeskProviderResponse`](#zohodeskproviderresponse)\>

##### createTicketComment()

```ts
createTicketComment(ticketId, body): Promise<ZohoDeskProviderResponse>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `ticketId` | `string` |
| `body` | [`ZohoDeskProviderPayload`](#zohodeskproviderpayload) |

###### Returns

`Promise`\<[`ZohoDeskProviderResponse`](#zohodeskproviderresponse)\>

##### getTicket()

```ts
getTicket(ticketId): Promise<ZohoDeskProviderResponse>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `ticketId` | `string` |

###### Returns

`Promise`\<[`ZohoDeskProviderResponse`](#zohodeskproviderresponse)\>

##### listTicketComments()

```ts
listTicketComments(ticketId, query?): Promise<ZohoDeskProviderResponse>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `ticketId` | `string` |
| `query?` | [`ZohoDeskProviderQuery`](#zohodeskproviderquery) |

###### Returns

`Promise`\<[`ZohoDeskProviderResponse`](#zohodeskproviderresponse)\>

##### listTickets()

```ts
listTickets(query?): Promise<ZohoDeskProviderResponse>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `query?` | [`ZohoDeskProviderQuery`](#zohodeskproviderquery) |

###### Returns

`Promise`\<[`ZohoDeskProviderResponse`](#zohodeskproviderresponse)\>

##### listTicketThreads()

```ts
listTicketThreads(ticketId, query?): Promise<ZohoDeskProviderResponse>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `ticketId` | `string` |
| `query?` | [`ZohoDeskProviderQuery`](#zohodeskproviderquery) |

###### Returns

`Promise`\<[`ZohoDeskProviderResponse`](#zohodeskproviderresponse)\>

##### readiness()

```ts
readiness(): Promise<ZohoDeskProviderResponse>;
```

###### Returns

`Promise`\<[`ZohoDeskProviderResponse`](#zohodeskproviderresponse)\>

##### sendTicketReply()

```ts
sendTicketReply(ticketId, body): Promise<ZohoDeskProviderResponse>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `ticketId` | `string` |
| `body` | [`ZohoDeskProviderPayload`](#zohodeskproviderpayload) |

###### Returns

`Promise`\<[`ZohoDeskProviderResponse`](#zohodeskproviderresponse)\>

##### updateTicket()

```ts
updateTicket(ticketId, patch): Promise<ZohoDeskProviderResponse>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `ticketId` | `string` |
| `patch` | [`ZohoDeskProviderPayload`](#zohodeskproviderpayload) |

###### Returns

`Promise`\<[`ZohoDeskProviderResponse`](#zohodeskproviderresponse)\>

***

### ZohoDeskTicketingClientOptions

#### Extended by

- [`ZohoDeskLiveCheckOptions`](#zohodesklivecheckoptions)

#### Properties

##### accessToken?

```ts
optional accessToken?: string;
```

##### apiBaseUrl?

```ts
optional apiBaseUrl?: string;
```

##### dataCenter?

```ts
optional dataCenter?: string;
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

##### headers?

```ts
optional headers?: Record<string, string>;
```

##### orgId?

```ts
optional orgId?: string;
```

##### providerClient?

```ts
optional providerClient?: ZohoDeskProviderClient;
```

##### retry?

```ts
optional retry?: number | ZohoDeskJsonRetryOptions;
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

### ZohoDeskTicketInput

#### Properties

##### additionalFields?

```ts
optional additionalFields?: ZohoDeskProviderExtensionFields;
```

##### contactId?

```ts
optional contactId?: string;
```

##### departmentId

```ts
departmentId: string;
```

##### description?

```ts
optional description?: string;
```

##### email?

```ts
optional email?: string;
```

##### priority?

```ts
optional priority?: string;
```

##### status?

```ts
optional status?: string;
```

##### subject

```ts
subject: string;
```

## Type Aliases

### ZohoDeskJsonPrimitive

```ts
type ZohoDeskJsonPrimitive = string | number | boolean | null;
```

***

### ZohoDeskJsonValue

```ts
type ZohoDeskJsonValue =
  | ZohoDeskJsonPrimitive
  | ZohoDeskJsonObject
  | readonly ZohoDeskJsonValue[];
```

***

### ZohoDeskProviderExtensionValue

```ts
type ZohoDeskProviderExtensionValue = ZohoDeskJsonValue | object | undefined;
```

***

### ZohoDeskProviderPayload

```ts
type ZohoDeskProviderPayload = ZohoDeskJsonObject | object;
```

***

### ZohoDeskProviderQuery

```ts
type ZohoDeskProviderQuery = Record<string, ZohoDeskProviderExtensionValue>;
```

## Functions

### createUnconfiguredZohoDeskProviderClient()

```ts
function createUnconfiguredZohoDeskProviderClient(): ZohoDeskProviderClient;
```

#### Returns

[`ZohoDeskProviderClient`](#zohodeskproviderclient)

***

### createZohoDeskRestProviderClient()

```ts
function createZohoDeskRestProviderClient(options): ZohoDeskProviderClient;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`ZohoDeskTicketingClientOptions`](#zohodeskticketingclientoptions) |

#### Returns

[`ZohoDeskProviderClient`](#zohodeskproviderclient)

***

### createZohoDeskTicketingClient()

```ts
function createZohoDeskTicketingClient(options?): ZohoDeskTicketingClient;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options?` | [`ZohoDeskTicketingClientOptions`](#zohodeskticketingclientoptions) |

#### Returns

[`ZohoDeskTicketingClient`](#zohodeskticketingclient)

***

### createZohoDeskTicketingLiveChecks()

```ts
function createZohoDeskTicketingLiveChecks(options?): {
  description: string;
  id: string;
  requiredCredentialIds: string[];
  run: Promise<{
     details: {
        ok: boolean;
     };
  }>;
}[];
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options?` | [`ZohoDeskLiveCheckOptions`](#zohodesklivecheckoptions) |

#### Returns

\{
  `description`: `string`;
  `id`: `string`;
  `requiredCredentialIds`: `string`[];
  `run`: `Promise`\<\{
     `details`: \{
        `ok`: `boolean`;
     \};
  \}\>;
\}[]

***

### zohoDeskApiBaseUrl()

```ts
function zohoDeskApiBaseUrl(options): string;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | `Pick`\<[`ZohoDeskTicketingClientOptions`](#zohodeskticketingclientoptions), `"apiBaseUrl"` \| `"dataCenter"`\> |

#### Returns

`string`

***

### zohoDeskTicketingCredentialStatuses()

```ts
function zohoDeskTicketingCredentialStatuses(input): {
  expiresAt?: string;
  message?: string;
  providerPackageId?: string;
  requirementId: string;
  scopes?: string[];
  state:   | "required"
     | "configured"
     | "permission-blocked"
     | "not-required"
     | "missing"
     | "expired"
     | "insufficient-scope"
     | "unavailable";
}[];
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`ZohoDeskCredentialStatusInput`](#zohodeskcredentialstatusinput) |

#### Returns

\{
  `expiresAt?`: `string`;
  `message?`: `string`;
  `providerPackageId?`: `string`;
  `requirementId`: `string`;
  `scopes?`: `string`[];
  `state`:   \| `"required"`
     \| `"configured"`
     \| `"permission-blocked"`
     \| `"not-required"`
     \| `"missing"`
     \| `"expired"`
     \| `"insufficient-scope"`
     \| `"unavailable"`;
\}[]

## References

### zohoDeskTicketingProviderManifest

Re-exports [zohoDeskTicketingProviderManifest](dist/manifest.md#zohodeskticketingprovidermanifest)
