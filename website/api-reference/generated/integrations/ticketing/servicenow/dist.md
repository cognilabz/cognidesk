# integrations/ticketing/servicenow/dist

## Interfaces

### ServiceNowCreateIncidentInput

#### Properties

##### additionalFields?

```ts
optional additionalFields?: ServiceNowProviderExtensionFields;
```

##### assignmentGroup?

```ts
optional assignmentGroup?: string;
```

##### callerId?

```ts
optional callerId?: string;
```

##### category?

```ts
optional category?: string;
```

##### contactType?

```ts
optional contactType?: string;
```

##### description?

```ts
optional description?: string;
```

##### impact?

```ts
optional impact?: string;
```

##### shortDescription

```ts
shortDescription: string;
```

##### subcategory?

```ts
optional subcategory?: string;
```

##### urgency?

```ts
optional urgency?: string;
```

***

### ServiceNowCredentialStatusInput

#### Properties

##### accessToken?

```ts
optional accessToken?: string;
```

##### instanceUrl?

```ts
optional instanceUrl?: string;
```

##### password?

```ts
optional password?: string;
```

##### username?

```ts
optional username?: string;
```

***

### ServiceNowJsonObject

#### Extended by

- [`ServiceNowProviderExtensionFields`](#servicenowproviderextensionfields)
- [`ServiceNowProviderResponse`](#servicenowproviderresponse)

#### Indexable

```ts
[key: string]: ServiceNowProviderExtensionValue
```

***

### ServiceNowLiveCheckOptions

#### Extends

- [`ServiceNowTicketingClientOptions`](#servicenowticketingclientoptions)

#### Properties

##### accessToken?

```ts
optional accessToken?: string;
```

###### Inherited from

[`ServiceNowTicketingClientOptions`](#servicenowticketingclientoptions).[`accessToken`](#accesstoken-2)

##### client?

```ts
optional client?: Pick<ServiceNowTicketingClient, "searchRecords">;
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

[`ServiceNowTicketingClientOptions`](#servicenowticketingclientoptions).[`fetch`](#fetch-1)

##### instanceUrl

```ts
instanceUrl: string;
```

###### Inherited from

[`ServiceNowTicketingClientOptions`](#servicenowticketingclientoptions).[`instanceUrl`](#instanceurl-2)

##### password?

```ts
optional password?: string;
```

###### Inherited from

[`ServiceNowTicketingClientOptions`](#servicenowticketingclientoptions).[`password`](#password-2)

##### tableName?

```ts
optional tableName?: string;
```

##### username?

```ts
optional username?: string;
```

###### Inherited from

[`ServiceNowTicketingClientOptions`](#servicenowticketingclientoptions).[`username`](#username-2)

***

### ServiceNowProviderExtensionFields

#### Extends

- [`ServiceNowJsonObject`](#servicenowjsonobject)

#### Indexable

```ts
[key: string]: ServiceNowProviderExtensionValue
```

***

### ServiceNowProviderResponse

#### Extends

- [`ServiceNowJsonObject`](#servicenowjsonobject)

#### Indexable

```ts
[key: string]: ServiceNowProviderExtensionValue
```

***

### ServiceNowRecord

#### Indexable

```ts
[key: string]: ServiceNowProviderExtensionValue
```

#### Properties

##### number?

```ts
optional number?: string;
```

##### short\_description?

```ts
optional short_description?: string;
```

##### state?

```ts
optional state?: string;
```

##### sys\_id?

```ts
optional sys_id?: string;
```

***

### ServiceNowTableQuery

#### Properties

##### displayValue?

```ts
optional displayValue?: boolean | "all";
```

##### excludeReferenceLink?

```ts
optional excludeReferenceLink?: boolean;
```

##### fields?

```ts
optional fields?: string[];
```

##### limit?

```ts
optional limit?: number;
```

##### offset?

```ts
optional offset?: number;
```

##### query?

```ts
optional query?: string;
```

***

### ServiceNowTicketingClient

#### Methods

##### addIncidentComment()

```ts
addIncidentComment(sysId, comment): Promise<ServiceNowRecord>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `sysId` | `string` |
| `comment` | `string` |

###### Returns

`Promise`\<[`ServiceNowRecord`](#servicenowrecord)\>

##### addIncidentWorkNote()

```ts
addIncidentWorkNote(sysId, note): Promise<ServiceNowRecord>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `sysId` | `string` |
| `note` | `string` |

###### Returns

`Promise`\<[`ServiceNowRecord`](#servicenowrecord)\>

##### createIncident()

```ts
createIncident(input): Promise<ServiceNowRecord>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`ServiceNowCreateIncidentInput`](#servicenowcreateincidentinput) |

###### Returns

`Promise`\<[`ServiceNowRecord`](#servicenowrecord)\>

##### createRecord()

```ts
createRecord<T>(tableName, record): Promise<T>;
```

###### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` *extends* [`ServiceNowRecord`](#servicenowrecord) | [`ServiceNowRecord`](#servicenowrecord) |

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `tableName` | `string` |
| `record` | [`ServiceNowProviderPayload`](#servicenowproviderpayload) |

###### Returns

`Promise`\<`T`\>

##### getImportSetResult()

```ts
getImportSetResult(stagingTableName, sysId): Promise<ServiceNowProviderResponse>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `stagingTableName` | `string` |
| `sysId` | `string` |

###### Returns

`Promise`\<[`ServiceNowProviderResponse`](#servicenowproviderresponse)\>

##### getRecord()

```ts
getRecord<T>(
   tableName,
   sysId,
query?): Promise<T>;
```

###### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` *extends* [`ServiceNowRecord`](#servicenowrecord) | [`ServiceNowRecord`](#servicenowrecord) |

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `tableName` | `string` |
| `sysId` | `string` |
| `query?` | `Omit`\<[`ServiceNowTableQuery`](#servicenowtablequery), `"query"` \| `"limit"` \| `"offset"`\> |

###### Returns

`Promise`\<`T`\>

##### importSet()

```ts
importSet(stagingTableName, record): Promise<ServiceNowProviderResponse>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `stagingTableName` | `string` |
| `record` | [`ServiceNowProviderPayload`](#servicenowproviderpayload) |

###### Returns

`Promise`\<[`ServiceNowProviderResponse`](#servicenowproviderresponse)\>

##### listAttachments()

```ts
listAttachments(query?): Promise<ServiceNowJsonObject[]>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `query?` | [`ServiceNowTableQuery`](#servicenowtablequery) |

###### Returns

`Promise`\<[`ServiceNowJsonObject`](#servicenowjsonobject)[]\>

##### searchRecords()

```ts
searchRecords<T>(tableName, query?): Promise<T[]>;
```

###### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` *extends* [`ServiceNowRecord`](#servicenowrecord) | [`ServiceNowRecord`](#servicenowrecord) |

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `tableName` | `string` |
| `query?` | [`ServiceNowTableQuery`](#servicenowtablequery) |

###### Returns

`Promise`\<`T`[]\>

##### updateRecord()

```ts
updateRecord<T>(
   tableName,
   sysId,
patch): Promise<T>;
```

###### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` *extends* [`ServiceNowRecord`](#servicenowrecord) | [`ServiceNowRecord`](#servicenowrecord) |

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `tableName` | `string` |
| `sysId` | `string` |
| `patch` | [`ServiceNowProviderPayload`](#servicenowproviderpayload) |

###### Returns

`Promise`\<`T`\>

##### uploadAttachment()

```ts
uploadAttachment(input): Promise<ServiceNowProviderResponse>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`ServiceNowUploadAttachmentInput`](#servicenowuploadattachmentinput) |

###### Returns

`Promise`\<[`ServiceNowProviderResponse`](#servicenowproviderresponse)\>

***

### ServiceNowTicketingClientOptions

#### Extended by

- [`ServiceNowLiveCheckOptions`](#servicenowlivecheckoptions)

#### Properties

##### accessToken?

```ts
optional accessToken?: string;
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

##### password?

```ts
optional password?: string;
```

##### username?

```ts
optional username?: string;
```

***

### ServiceNowUploadAttachmentInput

#### Properties

##### contentType?

```ts
optional contentType?: string;
```

##### data

```ts
data: BodyInit;
```

##### fileName

```ts
fileName: string;
```

##### tableName

```ts
tableName: string;
```

##### tableSysId

```ts
tableSysId: string;
```

## Type Aliases

### ServiceNowJsonPrimitive

```ts
type ServiceNowJsonPrimitive = string | number | boolean | null;
```

***

### ServiceNowJsonValue

```ts
type ServiceNowJsonValue =
  | ServiceNowJsonPrimitive
  | ServiceNowJsonObject
  | readonly ServiceNowJsonValue[];
```

***

### ServiceNowProviderExtensionValue

```ts
type ServiceNowProviderExtensionValue = ServiceNowJsonValue | object | undefined;
```

***

### ServiceNowProviderPayload

```ts
type ServiceNowProviderPayload = ServiceNowJsonObject | object;
```

***

### ServiceNowProviderQuery

```ts
type ServiceNowProviderQuery = Record<string, ServiceNowProviderExtensionValue>;
```

## Functions

### createServiceNowTicketingClient()

```ts
function createServiceNowTicketingClient(options): ServiceNowTicketingClient;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`ServiceNowTicketingClientOptions`](#servicenowticketingclientoptions) |

#### Returns

[`ServiceNowTicketingClient`](#servicenowticketingclient)

***

### createServiceNowTicketingLiveChecks()

```ts
function createServiceNowTicketingLiveChecks(options): {
  description: string;
  id: string;
  requiredCredentialIds: string[];
  run: Promise<{
     details: {
        sampleCount: number;
        tableName: string;
     };
  }>;
}[];
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`ServiceNowLiveCheckOptions`](#servicenowlivecheckoptions) |

#### Returns

\{
  `description`: `string`;
  `id`: `string`;
  `requiredCredentialIds`: `string`[];
  `run`: `Promise`\<\{
     `details`: \{
        `sampleCount`: `number`;
        `tableName`: `string`;
     \};
  \}\>;
\}[]

***

### serviceNowTicketingCredentialStatuses()

```ts
function serviceNowTicketingCredentialStatuses(input): {
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
| `input` | [`ServiceNowCredentialStatusInput`](#servicenowcredentialstatusinput) |

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

### serviceNowTicketingProviderManifest

Re-exports [serviceNowTicketingProviderManifest](dist/manifest.md#servicenowticketingprovidermanifest)
