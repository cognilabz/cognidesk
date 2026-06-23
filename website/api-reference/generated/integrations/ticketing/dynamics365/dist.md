# integrations/ticketing/dynamics365/dist

## Interfaces

### Dynamics365AddToQueueInput

#### Properties

##### queueId

```ts
queueId: string;
```

##### queueItemProperties?

```ts
optional queueItemProperties?: Dynamics365JsonObject;
```

##### sourceQueueId?

```ts
optional sourceQueueId?: string;
```

##### targetEntitySetName?

```ts
optional targetEntitySetName?: string;
```

##### targetId

```ts
targetId: string;
```

***

### Dynamics365CaseInput

#### Properties

##### additionalFields?

```ts
optional additionalFields?: Dynamics365ProviderExtensionFields;
```

##### customerId?

```ts
optional customerId?: string;
```

##### description?

```ts
optional description?: string;
```

##### priorityCode?

```ts
optional priorityCode?: number;
```

##### title

```ts
title: string;
```

***

### Dynamics365CreateCaseNoteInput

#### Properties

##### additionalFields?

```ts
optional additionalFields?: Dynamics365ProviderExtensionFields;
```

##### caseId

```ts
caseId: string;
```

##### documentBody?

```ts
optional documentBody?: string;
```

##### filename?

```ts
optional filename?: string;
```

##### mimeType?

```ts
optional mimeType?: string;
```

##### subject?

```ts
optional subject?: string;
```

##### text

```ts
text: string;
```

***

### Dynamics365CredentialStatusInput

#### Properties

##### apiAccessConfigured?

```ts
optional apiAccessConfigured?: boolean;
```

##### instanceUrl?

```ts
optional instanceUrl?: string;
```

***

### Dynamics365EntityDefinitionInput

#### Properties

##### logicalName

```ts
logicalName: string;
```

##### select?

```ts
optional select?: string[];
```

***

### Dynamics365JsonObject

#### Extended by

- [`Dynamics365ProviderExtensionFields`](#dynamics365providerextensionfields)
- [`Dynamics365ProviderResponse`](#dynamics365providerresponse)

#### Indexable

```ts
[key: string]: Dynamics365ProviderExtensionValue
```

***

### Dynamics365LiveCheckOptions

#### Extends

- [`Dynamics365TicketingClientOptions`](#dynamics365ticketingclientoptions)

#### Properties

##### accessToken?

```ts
optional accessToken?: string;
```

###### Inherited from

[`Dynamics365TicketingClientOptions`](#dynamics365ticketingclientoptions).[`accessToken`](#accesstoken-1)

##### apiVersion?

```ts
optional apiVersion?: string;
```

###### Inherited from

[`Dynamics365TicketingClientOptions`](#dynamics365ticketingclientoptions).[`apiVersion`](#apiversion-1)

##### client?

```ts
optional client?: Pick<Dynamics365TicketingClient, "readiness">;
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

[`Dynamics365TicketingClientOptions`](#dynamics365ticketingclientoptions).[`fetch`](#fetch-1)

##### instanceUrl

```ts
instanceUrl: string;
```

###### Inherited from

[`Dynamics365TicketingClientOptions`](#dynamics365ticketingclientoptions).[`instanceUrl`](#instanceurl-2)

***

### Dynamics365ProviderExtensionFields

#### Extends

- [`Dynamics365JsonObject`](#dynamics365jsonobject)

#### Indexable

```ts
[key: string]: Dynamics365ProviderExtensionValue
```

***

### Dynamics365ProviderResponse

#### Extends

- [`Dynamics365JsonObject`](#dynamics365jsonobject)

#### Indexable

```ts
[key: string]: Dynamics365ProviderExtensionValue
```

***

### Dynamics365SearchInput

#### Properties

##### filter?

```ts
optional filter?: string;
```

##### orderBy?

```ts
optional orderBy?: string;
```

##### select?

```ts
optional select?: string[];
```

##### top?

```ts
optional top?: number;
```

***

### Dynamics365TicketingClient

#### Methods

##### addToQueue()

```ts
addToQueue(input): Promise<Dynamics365ProviderResponse>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`Dynamics365AddToQueueInput`](#dynamics365addtoqueueinput) |

###### Returns

`Promise`\<[`Dynamics365ProviderResponse`](#dynamics365providerresponse)\>

##### createCase()

```ts
createCase(input): Promise<Dynamics365ProviderResponse>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`Dynamics365CaseInput`](#dynamics365caseinput) |

###### Returns

`Promise`\<[`Dynamics365ProviderResponse`](#dynamics365providerresponse)\>

##### createCaseNote()

```ts
createCaseNote(input): Promise<Dynamics365ProviderResponse>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`Dynamics365CreateCaseNoteInput`](#dynamics365createcasenoteinput) |

###### Returns

`Promise`\<[`Dynamics365ProviderResponse`](#dynamics365providerresponse)\>

##### getCase()

```ts
getCase(caseId): Promise<Dynamics365ProviderResponse>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `caseId` | `string` |

###### Returns

`Promise`\<[`Dynamics365ProviderResponse`](#dynamics365providerresponse)\>

##### getEntityDefinition()

```ts
getEntityDefinition(input): Promise<Dynamics365ProviderResponse>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`Dynamics365EntityDefinitionInput`](#dynamics365entitydefinitioninput) |

###### Returns

`Promise`\<[`Dynamics365ProviderResponse`](#dynamics365providerresponse)\>

##### listActivities()

```ts
listActivities(input?): Promise<Dynamics365ProviderResponse>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input?` | [`Dynamics365SearchInput`](#dynamics365searchinput) |

###### Returns

`Promise`\<[`Dynamics365ProviderResponse`](#dynamics365providerresponse)\>

##### listCaseNotes()

```ts
listCaseNotes(caseId, input?): Promise<Dynamics365ProviderResponse>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `caseId` | `string` |
| `input?` | [`Dynamics365SearchInput`](#dynamics365searchinput) |

###### Returns

`Promise`\<[`Dynamics365ProviderResponse`](#dynamics365providerresponse)\>

##### listQueues()

```ts
listQueues(input?): Promise<Dynamics365ProviderResponse>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input?` | [`Dynamics365SearchInput`](#dynamics365searchinput) |

###### Returns

`Promise`\<[`Dynamics365ProviderResponse`](#dynamics365providerresponse)\>

##### readiness()

```ts
readiness(): Promise<Dynamics365ProviderResponse>;
```

###### Returns

`Promise`\<[`Dynamics365ProviderResponse`](#dynamics365providerresponse)\>

##### searchCases()

```ts
searchCases(input?): Promise<Dynamics365ProviderResponse>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input?` | [`Dynamics365SearchInput`](#dynamics365searchinput) |

###### Returns

`Promise`\<[`Dynamics365ProviderResponse`](#dynamics365providerresponse)\>

##### updateCase()

```ts
updateCase(caseId, patch): Promise<Dynamics365ProviderResponse>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `caseId` | `string` |
| `patch` | [`Dynamics365ProviderPayload`](#dynamics365providerpayload) |

###### Returns

`Promise`\<[`Dynamics365ProviderResponse`](#dynamics365providerresponse)\>

***

### Dynamics365TicketingClientOptions

#### Extended by

- [`Dynamics365LiveCheckOptions`](#dynamics365livecheckoptions)

#### Properties

##### accessToken?

```ts
optional accessToken?: string;
```

##### apiVersion?

```ts
optional apiVersion?: string;
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

### Dynamics365JsonPrimitive

```ts
type Dynamics365JsonPrimitive = string | number | boolean | null;
```

***

### Dynamics365JsonValue

```ts
type Dynamics365JsonValue =
  | Dynamics365JsonPrimitive
  | Dynamics365JsonObject
  | readonly Dynamics365JsonValue[];
```

***

### Dynamics365ProviderExtensionValue

```ts
type Dynamics365ProviderExtensionValue = Dynamics365JsonValue | object | undefined;
```

***

### Dynamics365ProviderPayload

```ts
type Dynamics365ProviderPayload = Dynamics365JsonObject | object;
```

***

### Dynamics365ProviderQuery

```ts
type Dynamics365ProviderQuery = Record<string, Dynamics365ProviderExtensionValue>;
```

## Functions

### createDynamics365TicketingClient()

```ts
function createDynamics365TicketingClient(options): Dynamics365TicketingClient;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`Dynamics365TicketingClientOptions`](#dynamics365ticketingclientoptions) |

#### Returns

[`Dynamics365TicketingClient`](#dynamics365ticketingclient)

***

### createDynamics365TicketingLiveChecks()

```ts
function createDynamics365TicketingLiveChecks(options): {
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
| `options` | [`Dynamics365LiveCheckOptions`](#dynamics365livecheckoptions) |

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

### dynamics365TicketingCredentialStatuses()

```ts
function dynamics365TicketingCredentialStatuses(input): {
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
| `input` | [`Dynamics365CredentialStatusInput`](#dynamics365credentialstatusinput) |

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

### dynamics365TicketingProviderManifest

Re-exports [dynamics365TicketingProviderManifest](dist/manifest.md#dynamics365ticketingprovidermanifest)
