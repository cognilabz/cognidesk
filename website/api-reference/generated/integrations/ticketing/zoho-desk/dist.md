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

##### orgId

```ts
orgId: string;
```

###### Inherited from

[`ZohoDeskTicketingClientOptions`](#zohodeskticketingclientoptions).[`orgId`](#orgid-2)

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
| `query?` | `Record`\<`string`, `string` \| `number` \| `boolean`\> |

###### Returns

`Promise`\<[`ZohoDeskProviderResponse`](#zohodeskproviderresponse)\>

##### listTickets()

```ts
listTickets(query?): Promise<ZohoDeskProviderResponse>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `query?` | `Record`\<`string`, `string` \| `number` \| `boolean`\> |

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
| `query?` | `Record`\<`string`, `string` \| `number` \| `boolean`\> |

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

##### orgId

```ts
orgId: string;
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

### createZohoDeskTicketingClient()

```ts
function createZohoDeskTicketingClient(options): ZohoDeskTicketingClient;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`ZohoDeskTicketingClientOptions`](#zohodeskticketingclientoptions) |

#### Returns

[`ZohoDeskTicketingClient`](#zohodeskticketingclient)

***

### createZohoDeskTicketingLiveChecks()

```ts
function createZohoDeskTicketingLiveChecks(options): {
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
| `options` | [`ZohoDeskLiveCheckOptions`](#zohodesklivecheckoptions) |

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
