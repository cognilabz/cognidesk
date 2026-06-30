# integrations/ticketing/servicenow/dist

## Interfaces

### ServiceNowAddAttachmentOperationInput

#### Extends

- [`ServiceNowRecordIdentifierInput`](#servicenowrecordidentifierinput)

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

##### id?

```ts
optional id?: string;
```

###### Inherited from

[`ServiceNowRecordIdentifierInput`](#servicenowrecordidentifierinput).[`id`](#id-5)

##### sysId?

```ts
optional sysId?: string;
```

###### Inherited from

[`ServiceNowRecordIdentifierInput`](#servicenowrecordidentifierinput).[`sysId`](#sysid-5)

##### tableName?

```ts
optional tableName?: string;
```

###### Inherited from

[`ServiceNowRecordIdentifierInput`](#servicenowrecordidentifierinput).[`tableName`](#tablename-8)

##### tableSysId?

```ts
optional tableSysId?: string;
```

##### ticketId?

```ts
optional ticketId?: string;
```

###### Inherited from

[`ServiceNowRecordIdentifierInput`](#servicenowrecordidentifierinput).[`ticketId`](#ticketid-4)

***

### ServiceNowCreateCommentOperationInput

#### Extends

- [`ServiceNowRecordIdentifierInput`](#servicenowrecordidentifierinput)

#### Properties

##### body?

```ts
optional body?: string;
```

##### comment?

```ts
optional comment?: string;
```

##### id?

```ts
optional id?: string;
```

###### Inherited from

[`ServiceNowRecordIdentifierInput`](#servicenowrecordidentifierinput).[`id`](#id-5)

##### sysId?

```ts
optional sysId?: string;
```

###### Inherited from

[`ServiceNowRecordIdentifierInput`](#servicenowrecordidentifierinput).[`sysId`](#sysid-5)

##### tableName?

```ts
optional tableName?: string;
```

###### Inherited from

[`ServiceNowRecordIdentifierInput`](#servicenowrecordidentifierinput).[`tableName`](#tablename-8)

##### text?

```ts
optional text?: string;
```

##### ticketId?

```ts
optional ticketId?: string;
```

###### Inherited from

[`ServiceNowRecordIdentifierInput`](#servicenowrecordidentifierinput).[`ticketId`](#ticketid-4)

***

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

### ServiceNowCreateInternalNoteOperationInput

#### Extends

- [`ServiceNowRecordIdentifierInput`](#servicenowrecordidentifierinput)

#### Properties

##### body?

```ts
optional body?: string;
```

##### id?

```ts
optional id?: string;
```

###### Inherited from

[`ServiceNowRecordIdentifierInput`](#servicenowrecordidentifierinput).[`id`](#id-5)

##### note?

```ts
optional note?: string;
```

##### sysId?

```ts
optional sysId?: string;
```

###### Inherited from

[`ServiceNowRecordIdentifierInput`](#servicenowrecordidentifierinput).[`sysId`](#sysid-5)

##### tableName?

```ts
optional tableName?: string;
```

###### Inherited from

[`ServiceNowRecordIdentifierInput`](#servicenowrecordidentifierinput).[`tableName`](#tablename-8)

##### text?

```ts
optional text?: string;
```

##### ticketId?

```ts
optional ticketId?: string;
```

###### Inherited from

[`ServiceNowRecordIdentifierInput`](#servicenowrecordidentifierinput).[`ticketId`](#ticketid-4)

***

### ServiceNowCreateRecordOperationInput

#### Properties

##### fields?

```ts
optional fields?: ServiceNowProviderPayload;
```

##### record?

```ts
optional record?: ServiceNowProviderPayload;
```

##### tableName

```ts
tableName: string;
```

***

### ServiceNowCreateTicketOperationInput

#### Extends

- `Partial`\<[`ServiceNowCreateIncidentInput`](#servicenowcreateincidentinput)\>

#### Properties

##### additionalFields?

```ts
optional additionalFields?: ServiceNowProviderExtensionFields;
```

###### Inherited from

[`ServiceNowCreateIncidentInput`](#servicenowcreateincidentinput).[`additionalFields`](#additionalfields)

##### assignmentGroup?

```ts
optional assignmentGroup?: string;
```

###### Inherited from

[`ServiceNowCreateIncidentInput`](#servicenowcreateincidentinput).[`assignmentGroup`](#assignmentgroup)

##### callerId?

```ts
optional callerId?: string;
```

###### Inherited from

[`ServiceNowCreateIncidentInput`](#servicenowcreateincidentinput).[`callerId`](#callerid)

##### category?

```ts
optional category?: string;
```

###### Inherited from

[`ServiceNowCreateIncidentInput`](#servicenowcreateincidentinput).[`category`](#category)

##### contactType?

```ts
optional contactType?: string;
```

###### Inherited from

[`ServiceNowCreateIncidentInput`](#servicenowcreateincidentinput).[`contactType`](#contacttype)

##### description?

```ts
optional description?: string;
```

###### Inherited from

[`ServiceNowCreateIncidentInput`](#servicenowcreateincidentinput).[`description`](#description)

##### fields?

```ts
optional fields?: ServiceNowProviderExtensionFields;
```

##### impact?

```ts
optional impact?: string;
```

###### Inherited from

[`ServiceNowCreateIncidentInput`](#servicenowcreateincidentinput).[`impact`](#impact)

##### shortDescription?

```ts
optional shortDescription?: string;
```

###### Inherited from

[`ServiceNowCreateIncidentInput`](#servicenowcreateincidentinput).[`shortDescription`](#shortdescription)

##### subcategory?

```ts
optional subcategory?: string;
```

###### Inherited from

[`ServiceNowCreateIncidentInput`](#servicenowcreateincidentinput).[`subcategory`](#subcategory)

##### subject?

```ts
optional subject?: string;
```

##### title?

```ts
optional title?: string;
```

##### urgency?

```ts
optional urgency?: string;
```

###### Inherited from

[`ServiceNowCreateIncidentInput`](#servicenowcreateincidentinput).[`urgency`](#urgency)

***

### ServiceNowCredentialStatusInput

#### Properties

##### accessToken?

```ts
optional accessToken?: string;
```

##### baseUrl?

```ts
optional baseUrl?: string;
```

##### instance?

```ts
optional instance?: string;
```

##### instanceUrl?

```ts
optional instanceUrl?: string;
```

***

### ServiceNowImportSetOperationInput

#### Properties

##### fields?

```ts
optional fields?: ServiceNowProviderPayload;
```

##### record?

```ts
optional record?: ServiceNowProviderPayload;
```

##### stagingTableName?

```ts
optional stagingTableName?: string;
```

##### tableName?

```ts
optional tableName?: string;
```

***

### ServiceNowImportSetResultOperationInput

#### Properties

##### id?

```ts
optional id?: string;
```

##### stagingTableName?

```ts
optional stagingTableName?: string;
```

##### sysId?

```ts
optional sysId?: string;
```

##### tableName?

```ts
optional tableName?: string;
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

### ServiceNowListAttachmentsOperationInput

#### Extends

- [`ServiceNowRecordIdentifierInput`](#servicenowrecordidentifierinput).[`ServiceNowTableQuery`](#servicenowtablequery)

#### Properties

##### displayValue?

```ts
optional displayValue?: boolean | "all";
```

###### Inherited from

[`ServiceNowTableQuery`](#servicenowtablequery).[`displayValue`](#displayvalue-2)

##### excludeReferenceLink?

```ts
optional excludeReferenceLink?: boolean;
```

###### Inherited from

[`ServiceNowTableQuery`](#servicenowtablequery).[`excludeReferenceLink`](#excludereferencelink-2)

##### fields?

```ts
optional fields?: string[];
```

###### Inherited from

[`ServiceNowTableQuery`](#servicenowtablequery).[`fields`](#fields-5)

##### id?

```ts
optional id?: string;
```

###### Inherited from

[`ServiceNowRecordIdentifierInput`](#servicenowrecordidentifierinput).[`id`](#id-5)

##### limit?

```ts
optional limit?: number;
```

###### Inherited from

[`ServiceNowTableQuery`](#servicenowtablequery).[`limit`](#limit-2)

##### offset?

```ts
optional offset?: number;
```

###### Inherited from

[`ServiceNowTableQuery`](#servicenowtablequery).[`offset`](#offset-2)

##### query?

```ts
optional query?: string;
```

###### Inherited from

[`ServiceNowTableQuery`](#servicenowtablequery).[`query`](#query-2)

##### sysId?

```ts
optional sysId?: string;
```

###### Inherited from

[`ServiceNowRecordIdentifierInput`](#servicenowrecordidentifierinput).[`sysId`](#sysid-5)

##### tableName?

```ts
optional tableName?: string;
```

###### Inherited from

[`ServiceNowRecordIdentifierInput`](#servicenowrecordidentifierinput).[`tableName`](#tablename-8)

##### tableSysId?

```ts
optional tableSysId?: string;
```

##### ticketId?

```ts
optional ticketId?: string;
```

###### Inherited from

[`ServiceNowRecordIdentifierInput`](#servicenowrecordidentifierinput).[`ticketId`](#ticketid-4)

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

##### apiVersion?

```ts
optional apiVersion?: string;
```

###### Inherited from

[`ServiceNowTicketingClientOptions`](#servicenowticketingclientoptions).[`apiVersion`](#apiversion-1)

##### baseUrl?

```ts
optional baseUrl?: string;
```

###### Inherited from

[`ServiceNowTicketingClientOptions`](#servicenowticketingclientoptions).[`baseUrl`](#baseurl-2)

##### client?

```ts
optional client?: Pick<ServiceNowTicketingClient, "searchRecords">;
```

##### connector?

```ts
optional connector?: IConnector;
```

###### Inherited from

[`ServiceNowTicketingClientOptions`](#servicenowticketingclientoptions).[`connector`](#connector-1)

##### headers?

```ts
optional headers?: Record<string, string>;
```

###### Inherited from

[`ServiceNowTicketingClientOptions`](#servicenowticketingclientoptions).[`headers`](#headers-1)

##### instance?

```ts
optional instance?: string;
```

###### Inherited from

[`ServiceNowTicketingClientOptions`](#servicenowticketingclientoptions).[`instance`](#instance-2)

##### instanceUrl?

```ts
optional instanceUrl?: string;
```

###### Inherited from

[`ServiceNowTicketingClientOptions`](#servicenowticketingclientoptions).[`instanceUrl`](#instanceurl-2)

##### rawClient?

```ts
optional rawClient?: ServiceNowRawClient;
```

###### Inherited from

[`ServiceNowTicketingClientOptions`](#servicenowticketingclientoptions).[`rawClient`](#rawclient-2)

##### signal?

```ts
optional signal?: AbortSignal;
```

###### Inherited from

[`ServiceNowTicketingClientOptions`](#servicenowticketingclientoptions).[`signal`](#signal-1)

##### tableName?

```ts
optional tableName?: string;
```

##### timeoutMs?

```ts
optional timeoutMs?: number;
```

###### Inherited from

[`ServiceNowTicketingClientOptions`](#servicenowticketingclientoptions).[`timeoutMs`](#timeoutms-1)

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

### ServiceNowRawClient

#### Extended by

- [`ServiceNowTicketingClient`](#servicenowticketingclient)

#### Methods

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

### ServiceNowRecordIdentifierInput

#### Extended by

- [`ServiceNowAddAttachmentOperationInput`](#servicenowaddattachmentoperationinput)
- [`ServiceNowCreateCommentOperationInput`](#servicenowcreatecommentoperationinput)
- [`ServiceNowCreateInternalNoteOperationInput`](#servicenowcreateinternalnoteoperationinput)
- [`ServiceNowListAttachmentsOperationInput`](#servicenowlistattachmentsoperationinput)
- [`ServiceNowUpdateTicketOperationInput`](#servicenowupdateticketoperationinput)

#### Properties

##### id?

```ts
optional id?: string;
```

##### sysId?

```ts
optional sysId?: string;
```

##### tableName?

```ts
optional tableName?: string;
```

##### ticketId?

```ts
optional ticketId?: string;
```

***

### ServiceNowSearchRecordsOperationInput

#### Extends

- [`ServiceNowTableQuery`](#servicenowtablequery)

#### Properties

##### displayValue?

```ts
optional displayValue?: boolean | "all";
```

###### Inherited from

[`ServiceNowTableQuery`](#servicenowtablequery).[`displayValue`](#displayvalue-2)

##### excludeReferenceLink?

```ts
optional excludeReferenceLink?: boolean;
```

###### Inherited from

[`ServiceNowTableQuery`](#servicenowtablequery).[`excludeReferenceLink`](#excludereferencelink-2)

##### fields?

```ts
optional fields?: string[];
```

###### Inherited from

[`ServiceNowTableQuery`](#servicenowtablequery).[`fields`](#fields-5)

##### limit?

```ts
optional limit?: number;
```

###### Inherited from

[`ServiceNowTableQuery`](#servicenowtablequery).[`limit`](#limit-2)

##### offset?

```ts
optional offset?: number;
```

###### Inherited from

[`ServiceNowTableQuery`](#servicenowtablequery).[`offset`](#offset-2)

##### query?

```ts
optional query?: string;
```

###### Inherited from

[`ServiceNowTableQuery`](#servicenowtablequery).[`query`](#query-2)

##### tableName?

```ts
optional tableName?: string;
```

***

### ServiceNowTableQuery

#### Extended by

- [`ServiceNowListAttachmentsOperationInput`](#servicenowlistattachmentsoperationinput)
- [`ServiceNowSearchRecordsOperationInput`](#servicenowsearchrecordsoperationinput)

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

#### Extends

- [`ServiceNowRawClient`](#servicenowrawclient)

#### Properties

##### rawClient

```ts
rawClient: ServiceNowRawClient;
```

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

###### Inherited from

[`ServiceNowRawClient`](#servicenowrawclient).[`createRecord`](#createrecord)

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

###### Inherited from

[`ServiceNowRawClient`](#servicenowrawclient).[`getImportSetResult`](#getimportsetresult)

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

###### Inherited from

[`ServiceNowRawClient`](#servicenowrawclient).[`getRecord`](#getrecord)

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

###### Inherited from

[`ServiceNowRawClient`](#servicenowrawclient).[`importSet`](#importset)

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

###### Inherited from

[`ServiceNowRawClient`](#servicenowrawclient).[`listAttachments`](#listattachments)

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

###### Inherited from

[`ServiceNowRawClient`](#servicenowrawclient).[`searchRecords`](#searchrecords)

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

###### Inherited from

[`ServiceNowRawClient`](#servicenowrawclient).[`updateRecord`](#updaterecord)

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

###### Inherited from

[`ServiceNowRawClient`](#servicenowrawclient).[`uploadAttachment`](#uploadattachment)

***

### ServiceNowTicketingClientOptions

#### Extended by

- [`ServiceNowLiveCheckOptions`](#servicenowlivecheckoptions)
- [`ServiceNowTicketingIntegrationOptions`](#servicenowticketingintegrationoptions)

#### Properties

##### accessToken?

```ts
optional accessToken?: string;
```

##### apiVersion?

```ts
optional apiVersion?: string;
```

##### baseUrl?

```ts
optional baseUrl?: string;
```

##### connector?

```ts
optional connector?: IConnector;
```

##### headers?

```ts
optional headers?: Record<string, string>;
```

##### instance?

```ts
optional instance?: string;
```

##### instanceUrl?

```ts
optional instanceUrl?: string;
```

##### rawClient?

```ts
optional rawClient?: ServiceNowRawClient;
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

### ServiceNowTicketingIntegrationOptions

#### Extends

- [`ServiceNowTicketingClientOptions`](#servicenowticketingclientoptions)

#### Properties

##### accessToken?

```ts
optional accessToken?: string;
```

###### Inherited from

[`ServiceNowTicketingClientOptions`](#servicenowticketingclientoptions).[`accessToken`](#accesstoken-2)

##### apiVersion?

```ts
optional apiVersion?: string;
```

###### Inherited from

[`ServiceNowTicketingClientOptions`](#servicenowticketingclientoptions).[`apiVersion`](#apiversion-1)

##### baseUrl?

```ts
optional baseUrl?: string;
```

###### Inherited from

[`ServiceNowTicketingClientOptions`](#servicenowticketingclientoptions).[`baseUrl`](#baseurl-2)

##### connector?

```ts
optional connector?: IConnector;
```

###### Inherited from

[`ServiceNowTicketingClientOptions`](#servicenowticketingclientoptions).[`connector`](#connector-1)

##### headers?

```ts
optional headers?: Record<string, string>;
```

###### Inherited from

[`ServiceNowTicketingClientOptions`](#servicenowticketingclientoptions).[`headers`](#headers-1)

##### instance?

```ts
optional instance?: string;
```

###### Inherited from

[`ServiceNowTicketingClientOptions`](#servicenowticketingclientoptions).[`instance`](#instance-2)

##### instanceUrl?

```ts
optional instanceUrl?: string;
```

###### Inherited from

[`ServiceNowTicketingClientOptions`](#servicenowticketingclientoptions).[`instanceUrl`](#instanceurl-2)

##### rawClient?

```ts
optional rawClient?: ServiceNowRawClient;
```

###### Inherited from

[`ServiceNowTicketingClientOptions`](#servicenowticketingclientoptions).[`rawClient`](#rawclient-2)

##### signal?

```ts
optional signal?: AbortSignal;
```

###### Inherited from

[`ServiceNowTicketingClientOptions`](#servicenowticketingclientoptions).[`signal`](#signal-1)

##### ticketingClient?

```ts
optional ticketingClient?: ServiceNowTicketingClient;
```

##### timeoutMs?

```ts
optional timeoutMs?: number;
```

###### Inherited from

[`ServiceNowTicketingClientOptions`](#servicenowticketingclientoptions).[`timeoutMs`](#timeoutms-1)

***

### ServiceNowUpdateTicketOperationInput

#### Extends

- [`ServiceNowRecordIdentifierInput`](#servicenowrecordidentifierinput)

#### Properties

##### fields?

```ts
optional fields?: ServiceNowProviderPayload;
```

##### id?

```ts
optional id?: string;
```

###### Inherited from

[`ServiceNowRecordIdentifierInput`](#servicenowrecordidentifierinput).[`id`](#id-5)

##### patch?

```ts
optional patch?: ServiceNowProviderPayload;
```

##### sysId?

```ts
optional sysId?: string;
```

###### Inherited from

[`ServiceNowRecordIdentifierInput`](#servicenowrecordidentifierinput).[`sysId`](#sysid-5)

##### tableName?

```ts
optional tableName?: string;
```

###### Inherited from

[`ServiceNowRecordIdentifierInput`](#servicenowrecordidentifierinput).[`tableName`](#tablename-8)

##### ticketId?

```ts
optional ticketId?: string;
```

###### Inherited from

[`ServiceNowRecordIdentifierInput`](#servicenowrecordidentifierinput).[`ticketId`](#ticketid-4)

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

***

### ServiceNowTicketingOperationAlias

```ts
type ServiceNowTicketingOperationAlias = typeof serviceNowTicketingProviderOperations[number]["alias"];
```

## Variables

### serviceNowTicketingProviderOperations

```ts
const serviceNowTicketingProviderOperations: (
  | {
  alias: string;
  audiences: ("internal-support" | "mixed")[];
  capability: string;
  changesWorkflow: true;
  description: string;
  exposesSensitiveData: true;
  extension?: never;
  externallyVisible?: never;
  label: string;
  providerObject: string;
  providerOperation: string;
  requiresApproval?: never;
  requiresCredential: true;
  sideEffect: true;
}
  | {
  alias: string;
  audiences: ("internal-support" | "mixed")[];
  capability: string;
  changesWorkflow?: never;
  description: string;
  exposesSensitiveData: true;
  extension?: never;
  externallyVisible?: never;
  label: string;
  providerObject: string;
  providerOperation: string;
  requiresApproval?: never;
  requiresCredential: true;
  sideEffect?: never;
}
  | {
  alias: string;
  audiences: "mixed"[];
  capability: string;
  changesWorkflow: true;
  description: string;
  exposesSensitiveData: true;
  extension?: never;
  externallyVisible: true;
  label: string;
  providerObject: string;
  providerOperation: string;
  requiresApproval: true;
  requiresCredential: true;
  sideEffect: true;
}
  | {
  alias: string;
  audiences: ("internal-support" | "mixed")[];
  capability: string;
  changesWorkflow: true;
  description: string;
  exposesSensitiveData: true;
  extension?: never;
  externallyVisible: false;
  label: string;
  providerObject: string;
  providerOperation: string;
  requiresApproval?: never;
  requiresCredential: true;
  sideEffect: true;
}
  | {
  alias: string;
  audiences: ("internal-support" | "mixed")[];
  capability: string;
  changesWorkflow?: never;
  description: string;
  exposesSensitiveData: true;
  extension?: never;
  externallyVisible: true;
  label: string;
  providerObject: string;
  providerOperation: string;
  requiresApproval?: never;
  requiresCredential: true;
  sideEffect: true;
}
  | {
  alias: string;
  audiences: ("internal-support" | "mixed")[];
  capability: string;
  changesWorkflow: true;
  description: string;
  exposesSensitiveData: true;
  extension: true;
  externallyVisible?: never;
  label: string;
  providerObject: string;
  providerOperation: string;
  requiresApproval?: never;
  requiresCredential: true;
  sideEffect: true;
}
  | {
  alias: string;
  audiences: ("internal-support" | "mixed")[];
  capability: string;
  changesWorkflow?: never;
  description: string;
  exposesSensitiveData: true;
  extension: true;
  externallyVisible?: never;
  label: string;
  providerObject: string;
  providerOperation: string;
  requiresApproval?: never;
  requiresCredential: true;
  sideEffect?: never;
})[];
```

## Functions

### createServiceNowSdkConnector()

```ts
function createServiceNowSdkConnector(options): IConnector;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | `Pick`\<[`ServiceNowTicketingClientOptions`](#servicenowticketingclientoptions), `"accessToken"` \| `"baseUrl"` \| `"instance"` \| `"instanceUrl"`\> |

#### Returns

`IConnector`

***

### createServiceNowSdkConnectorRawClient()

```ts
function createServiceNowSdkConnectorRawClient(options): ServiceNowRawClient;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`ServiceNowTicketingClientOptions`](#servicenowticketingclientoptions) |

#### Returns

[`ServiceNowRawClient`](#servicenowrawclient)

***

### createServiceNowTicketingClient()

```ts
function createServiceNowTicketingClient(options?): ServiceNowTicketingClient;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options?` | [`ServiceNowTicketingClientOptions`](#servicenowticketingclientoptions) |

#### Returns

[`ServiceNowTicketingClient`](#servicenowticketingclient)

***

### createServiceNowTicketingIntegration()

```ts
function createServiceNowTicketingIntegration(options?): DefinedIntegration<{
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
  capabilities: readonly [{
     audiences: readonly ["internal-support", "mixed"];
     capability: "create-provider-object";
     changesWorkflow: true;
     description: "Creates SDK-user-selected ServiceNow Table API records such as incidents or cases; generic table names are SDK-owned schema plumbing, not generated per-table coverage.";
     label: "Create ServiceNow records";
     providerObjects: readonly [{
        kind: "servicenowRecord";
        label: "ServiceNow Record";
      }, {
        kind: "servicenowIncident";
        label: "ServiceNow Incident";
        schemaName: "incident";
      }, {
        kind: "servicenowAttachment";
        label: "ServiceNow Attachment";
      }, {
        kind: "servicenowImportSetRecord";
        label: "ServiceNow Import Set Record";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     audiences: readonly ["internal-support", "mixed"];
     capability: "read-provider-object";
     description: "Reads ServiceNow Table API records by table and sys_id.";
     exposesSensitiveData: true;
     label: "Read ServiceNow records";
     providerObjects: readonly [{
        kind: "servicenowRecord";
        label: "ServiceNow Record";
      }, {
        kind: "servicenowAttachment";
        label: "ServiceNow Attachment";
      }, {
        kind: "servicenowImportSetRecord";
        label: "ServiceNow Import Set Record";
     }];
     requiresCredential: true;
   }, {
     audiences: readonly ["internal-support", "mixed"];
     capability: "update-provider-object";
     changesWorkflow: true;
     description: "Updates ServiceNow Table API records such as incidents, comments, state, or assignment fields.";
     exposesSensitiveData: true;
     label: "Update ServiceNow records";
     providerObjects: readonly [{
        kind: "servicenowRecord";
        label: "ServiceNow Record";
      }, {
        kind: "servicenowIncident";
        label: "ServiceNow Incident";
        schemaName: "incident";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     audiences: readonly ["internal-support", "mixed"];
     capability: "search-provider-object";
     description: "Queries ServiceNow Table API records with SDK-user-supplied sysparm_query and field constraints.";
     exposesSensitiveData: true;
     label: "Search ServiceNow records";
     providerObjects: readonly [{
        kind: "servicenowRecord";
        label: "ServiceNow Record";
     }];
     requiresCredential: true;
   }, {
     audiences: readonly ["mixed"];
     capability: "send";
     changesWorkflow: true;
     description: "Posts customer-visible comments to ServiceNow incident records.";
     exposesSensitiveData: true;
     externallyVisible: true;
     label: "Send customer-visible updates";
     providerObjects: readonly [{
        kind: "servicenowIncident";
        label: "ServiceNow Incident";
        schemaName: "incident";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     audiences: readonly ["internal-support", "mixed"];
     capability: "draft";
     changesWorkflow: true;
     description: "Creates internal work notes on ServiceNow incident records.";
     exposesSensitiveData: true;
     externallyVisible: false;
     label: "Create internal notes";
     providerObjects: readonly [{
        kind: "servicenowIncident";
        label: "ServiceNow Incident";
        schemaName: "incident";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     audiences: readonly ["internal-support", "mixed"];
     capability: "attach";
     description: "Uploads attachments to ServiceNow records.";
     exposesSensitiveData: true;
     externallyVisible: true;
     label: "Attach files to ServiceNow records";
     providerObjects: readonly [{
        kind: "servicenowAttachment";
        label: "ServiceNow Attachment";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     audiences: readonly ["internal-support", "mixed"];
     capability: "handoff";
     changesWorkflow: true;
     description: "Provides Table API incident, attachment, and import-set operations used by SDK-user-configured record handoff workflows; this is not native Virtual Agent or Live Agent Chat transfer coverage.";
     label: "Attach record handoff to ServiceNow";
     providerObjects: readonly [{
        kind: "servicenowIncident";
        label: "ServiceNow Incident";
        schemaName: "incident";
      }, {
        kind: "servicenowAttachment";
        label: "ServiceNow Attachment";
      }, {
        kind: "servicenowImportSetRecord";
        label: "ServiceNow Import Set Record";
     }];
     requiresCredential: true;
     sideEffect: true;
  }];
  category: "ticketing";
  channelAudiences: readonly ["internal-support", "mixed"];
  coverage: {
     evidence: readonly [{
        label: "ServiceNow Table API";
        url: "https://www.servicenow.com/docs/r/washingtondc/api-reference/rest-apis/c_TableAPI.html";
      }, {
        label: "ServiceNow Attachment API";
        url: "https://www.servicenow.com/docs/r/washingtondc/api-reference/rest-apis/c_AttachmentAPI.html";
      }, {
        label: "ServiceNow Import Set API";
        url: "https://www.servicenow.com/docs/r/washingtondc/api-reference/rest-apis/c_ImportSetAPI.html";
      }, {
        label: "ServiceNow Virtual Agent API";
        url: "https://www.servicenow.com/docs/r/conversational-interfaces/virtual-agent/virtual-agent-api-landing-page.html";
      }, {
        label: "ServiceNow Virtual Agent Bot Integration API";
        url: "https://www.servicenow.com/docs/r/washingtondc/api-reference/rest-apis/bot-api.html";
      }, {
        label: "ServiceNow Virtual Agent API features";
        url: "https://www.servicenow.com/docs/r/yokohama/conversational-interfaces/virtual-agent/va-api-features.html";
     }];
     notes: readonly ["Coverage is limited to ServiceNow Table API record create/read/update/search, incident creation, Attachment API upload/list, Import Set insert/read, and readiness checks used by Cognidesk support workflows.", "Implementation uses the official @servicenow/sdk-api Connector when instanceUrl/baseUrl and OAuth bearer credentials are configured, with ServiceNowRawClient injection as an override for host-owned transports.", "Generic Table API helpers accept SDK-user-selected table names and fields, but they are not customer-specific generated schema coverage for arbitrary tables, custom fields, ACLs, business rules, or plugins.", "This is not full ServiceNow platform API coverage for Service Catalog/cart, journal-field semantics, attachment download/delete, transform-map lifecycle, scripted REST APIs, workflow APIs, or broader platform administration."];
     scope: "support-workflow-subset";
  };
  credentialRequirements: readonly [{
     description: "The SDK user's ServiceNow instance URL for the built-in official @servicenow/sdk-api Connector transport, for example https://example.service-now.com. Not required when the host injects a ServiceNowRawClient.";
     id: "servicenow-instance";
     label: "ServiceNow instance URL";
     metadata: {
        requiredWhen: "built-in-servicenow-sdk-connector";
     };
     required: false;
   }, {
     description: "Server-side OAuth bearer access for the built-in official @servicenow/sdk-api Connector transport; effective access is governed by ServiceNow roles, ACLs, table access, and any tenant REST API Auth Scopes. Use ServiceNowRawClient injection for other tenant-auth transports.";
     id: "servicenow-api-access";
     label: "ServiceNow API access";
     metadata: {
        privilegeGuidance: "The table_api value is Cognidesk capability guidance, not a universal ServiceNow OAuth scope. The credential must be authorized for Table API, Attachment API, Import Set API, and configured target tables.";
        requiredWhen: "built-in-servicenow-sdk-connector";
        scopeKind: "internal-capability-labels";
     };
     required: false;
     scopes: readonly ["table_api"];
   }, {
     description: "Optional ServiceNowRawClient override supplied by the host application. When configured, Cognidesk delegates operations to that client instead of constructing the built-in @servicenow/sdk-api Connector transport.";
     id: "servicenow-raw-client";
     label: "Host-provided ServiceNow raw client";
     metadata: {
        clientInterface: "ServiceNowRawClient";
        credentialKind: "host-client-override";
        satisfies: readonly ["servicenow-instance", "servicenow-api-access"];
     };
     required: false;
  }];
  directions: readonly ["bidirectional"];
  id: "ticketing.servicenow";
  limitations: readonly ["Available tables, fields, ACLs, business rules, and mandatory fields are owned by the SDK user's ServiceNow instance.", "Handoff timing, approval, field mapping, assignment, and customer visibility are SDK-user configuration."];
  maintainers: readonly [{
     name: "Cognidesk";
     type: "official";
  }];
  metadata: {
     channelCoverage: {
        arbitraryTableTyping: "not-covered";
        attachmentDownloadDelete: "provider-supported-not-implemented";
        attachments: "typed-upload-list";
        catalogWorkflowScriptedRest: "provider-supported-not-implemented";
        cccifCustomChatIntegration: "provider-supported-not-typed";
        connectConversationScopedApi: "provider-supported-not-typed";
        csmCaseApi: "provider-supported-not-typed";
        genericTableApi: "sdk-owned-classified-endpoint";
        importSets: "typed-json-create-read";
        incidents: "typed-create-comment-worknote";
        liveAgentTransfer: "provider-supported-not-typed";
        readinessSearch: "typed-search";
        tableRecords: "typed-json-create-read-update-search";
        taskTableRecords: "provider-supported-not-typed";
        virtualAgentApi: "provider-supported-not-typed";
        virtualAgentBotIntegrationApi: "provider-supported-not-typed";
     };
     checkedProviderApiCoverage: {
        coverageArtifact: "docs/provider-coverage/servicenow-checked-table-attachment-importset-2026-06-18.inventory.json";
        familyCount: 4;
        fullCoverageExportRequirement: "Full instance-specific ServiceNow coverage requires REST API Explorer/OpenAPI export for enabled APIs, table dictionary export, plugin/product inventory, ACL/role evidence, and scripted REST definitions from the SDK user's instance.";
        gapFamilyCount: 1;
        implementedFamilyCount: 3;
        implementedOperationCount: 11;
        sourceKind: "checked-endpoint-family-inventory";
        verifiedAt: "2026-06-18";
     };
     checkedProviderSdk: {
        checkedVersion: "4.8.0";
        license: "MIT";
        package: "@servicenow/sdk-api";
        reason: "OAuth default runtime uses Connector.fetch for create/read/update/attachment/import-set calls and Connector.queryTable for compatible table search calls. Non-OAuth tenant-auth transports must be supplied through ServiceNowRawClient injection instead of a package-owned REST fallback.";
        result: "used-as-runtime-connector";
     };
     implementation: {
        defaultClientPolicy: "use-official-servicenow-sdk-api-connector-for-oauth-runtime-transport; require ServiceNowRawClient injection for non-OAuth tenant-auth transports";
        manifestImport: "no-sdk-client-initialization";
        packageOwnedRestClient: false;
        rawClientEscapeHatch: "ServiceNowTicketingClient.rawClient";
        rawClientOverride: true;
        runtimePackage: "@cognidesk/integration-ticketing-servicenow";
        sdkPackage: "@servicenow/sdk-api";
        sdkRuntimeSurface: "Connector.fetch and Connector.queryTable";
        strategy: "official-sdk-connector";
     };
     sdkDecision: {
        checkedAt: "2026-06-25";
        checkedVersion: "4.8.0";
        license: "MIT";
        package: "@servicenow/sdk-api";
        reason: "The official ServiceNow SDK API exports Connector.fetch and Connector.queryTable as runtime instance transport. It does not provide a ticketing-specific Table/Attachment/Import Set client, so Cognidesk translates ticketing operations into the official connector transport and retains typed rawClient injection for host-owned clients.";
        result: "official-sdk-runtime-connector-not-ticketing-client";
     };
  };
  name: "ServiceNow Ticketing";
  operations: (
     | {
     alias: string;
     audiences: ("internal-support" | "mixed")[];
     capability: string;
     changesWorkflow: true;
     description: string;
     exposesSensitiveData: true;
     extension?: never;
     externallyVisible?: never;
     label: string;
     providerObject: string;
     providerOperation: string;
     requiresApproval?: never;
     requiresCredential: true;
     sideEffect: true;
   }
     | {
     alias: string;
     audiences: ("internal-support" | "mixed")[];
     capability: string;
     changesWorkflow?: never;
     description: string;
     exposesSensitiveData: true;
     extension?: never;
     externallyVisible?: never;
     label: string;
     providerObject: string;
     providerOperation: string;
     requiresApproval?: never;
     requiresCredential: true;
     sideEffect?: never;
   }
     | {
     alias: string;
     audiences: "mixed"[];
     capability: string;
     changesWorkflow: true;
     description: string;
     exposesSensitiveData: true;
     extension?: never;
     externallyVisible: true;
     label: string;
     providerObject: string;
     providerOperation: string;
     requiresApproval: true;
     requiresCredential: true;
     sideEffect: true;
   }
     | {
     alias: string;
     audiences: ("internal-support" | "mixed")[];
     capability: string;
     changesWorkflow: true;
     description: string;
     exposesSensitiveData: true;
     extension?: never;
     externallyVisible: false;
     label: string;
     providerObject: string;
     providerOperation: string;
     requiresApproval?: never;
     requiresCredential: true;
     sideEffect: true;
   }
     | {
     alias: string;
     audiences: ("internal-support" | "mixed")[];
     capability: string;
     changesWorkflow?: never;
     description: string;
     exposesSensitiveData: true;
     extension?: never;
     externallyVisible: true;
     label: string;
     providerObject: string;
     providerOperation: string;
     requiresApproval?: never;
     requiresCredential: true;
     sideEffect: true;
   }
     | {
     alias: string;
     audiences: ("internal-support" | "mixed")[];
     capability: string;
     changesWorkflow: true;
     description: string;
     exposesSensitiveData: true;
     extension: true;
     externallyVisible?: never;
     label: string;
     providerObject: string;
     providerOperation: string;
     requiresApproval?: never;
     requiresCredential: true;
     sideEffect: true;
   }
     | {
     alias: string;
     audiences: ("internal-support" | "mixed")[];
     capability: string;
     changesWorkflow?: never;
     description: string;
     exposesSensitiveData: true;
     extension: true;
     externallyVisible?: never;
     label: string;
     providerObject: string;
     providerOperation: string;
     requiresApproval?: never;
     requiresCredential: true;
     sideEffect?: never;
  })[];
  packageName: "@cognidesk/integration-ticketing-servicenow";
  privacyNotes: readonly ["ServiceNow records can contain customer data, support notes, internal assignment data, and attached workflow context.", "ServiceNow credentials stay server-side and are never exposed through Studio credential status."];
  provider: "servicenow";
  trustLevel: "official";
}, unknown, IntegrationOperationHandlers>;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options?` | [`ServiceNowTicketingIntegrationOptions`](#servicenowticketingintegrationoptions) |

#### Returns

[`DefinedIntegration`](../../../packages/integration-kit/dist.md#definedintegration)\<\{
  `capabilities`: \{
     `audiences?`: (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[];
     `capability`: `string`;
     `changesWorkflow?`: `boolean`;
     `description?`: `string`;
     `exposesSensitiveData?`: `boolean`;
     `extension?`: `boolean`;
     `label?`: `string`;
     `metadata?`: `Record`\<`string`, `unknown`\>;
     `providerObjects?`: \{
        `description?`: `string`;
        `kind`: `string`;
        `label?`: `string`;
        `metadata?`: `Record`\<`string`, `unknown`\>;
        `schemaName?`: `string`;
     \}[];
     `requiresCredential?`: `boolean`;
     `sideEffect?`: `boolean`;
  \}[];
  `category`: `string`;
  `channelAudiences`: (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[];
  `coverage`: \{
     `evidence`: \{
        `label`: `string`;
        `url?`: `string`;
     \}[];
     `notes`: `string`[];
     `scope`:   \| `"support-workflow-subset"`
        \| `"provider-api-subset"`
        \| `"connector-required"`
        \| `"local-protocol"`
        \| `"full-provider-api"`;
  \};
  `credentialRequirements`: \{
     `description?`: `string`;
     `id`: `string`;
     `label?`: `string`;
     `metadata?`: `Record`\<`string`, `unknown`\>;
     `required`: `boolean`;
     `scopes`: `string`[];
  \}[];
  `directions`: (
     \| `"receive-only"`
     \| `"send-only"`
     \| `"inbound-only"`
     \| `"outbound-only"`
    \| `"bidirectional"`)[];
  `id`: `string`;
  `limitations`: `string`[];
  `maintainers`: \{
     `name`: `string`;
     `type`: `"community"` \| `"official"` \| `"unknown"` \| `"partner"`;
     `url?`: `string`;
  \}[];
  `metadata?`: `Record`\<`string`, `unknown`\>;
  `name`: `string`;
  `operations`: \{
     `alias`: `string`;
     `audience?`: `"customer-facing"` \| `"internal-support"` \| `"mixed"`;
     `audiences?`: (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[];
     `capability`: `string`;
     `changesWorkflow?`: `boolean`;
     `description?`: `string`;
     `exposesSensitiveData?`: `boolean`;
     `extension`: `boolean`;
     `externallyVisible?`: `boolean`;
     `inputSchema?`: `unknown`;
     `inputSchemaName?`: `string`;
     `inputSchemaRef?`: `string`;
     `label?`: `string`;
     `metadata?`: `Record`\<`string`, `unknown`\>;
     `outputSchema?`: `unknown`;
     `outputSchemaName?`: `string`;
     `outputSchemaRef?`: `string`;
     `providerObject?`: `string`;
     `providerObjects?`: \{
        `description?`: `string`;
        `kind`: `string`;
        `label?`: `string`;
        `metadata?`: `Record`\<`string`, `unknown`\>;
        `schemaName?`: `string`;
     \}[];
     `providerOperation?`: `string`;
     `requiredPolicyIds?`: `string`[];
     `requiresApproval?`: `boolean`;
     `requiresCredential?`: `boolean`;
     `sideEffect?`: `boolean`;
  \}[];
  `packageName`: `string`;
  `privacyNotes`: `string`[];
  `provider`: `string`;
  `trustLevel`: `"community"` \| `"official"` \| `"verified"` \| `"experimental"`;
\} & \{
  `capabilities`: readonly \[\{
     `audiences`: readonly \[`"internal-support"`, `"mixed"`\];
     `capability`: `"create-provider-object"`;
     `changesWorkflow`: `true`;
     `description`: `"Creates SDK-user-selected ServiceNow Table API records such as incidents or cases; generic table names are SDK-owned schema plumbing, not generated per-table coverage."`;
     `label`: `"Create ServiceNow records"`;
     `providerObjects`: readonly \[\{
        `kind`: `"servicenowRecord"`;
        `label`: `"ServiceNow Record"`;
      \}, \{
        `kind`: `"servicenowIncident"`;
        `label`: `"ServiceNow Incident"`;
        `schemaName`: `"incident"`;
      \}, \{
        `kind`: `"servicenowAttachment"`;
        `label`: `"ServiceNow Attachment"`;
      \}, \{
        `kind`: `"servicenowImportSetRecord"`;
        `label`: `"ServiceNow Import Set Record"`;
     \}\];
     `requiresCredential`: `true`;
     `sideEffect`: `true`;
   \}, \{
     `audiences`: readonly \[`"internal-support"`, `"mixed"`\];
     `capability`: `"read-provider-object"`;
     `description`: `"Reads ServiceNow Table API records by table and sys_id."`;
     `exposesSensitiveData`: `true`;
     `label`: `"Read ServiceNow records"`;
     `providerObjects`: readonly \[\{
        `kind`: `"servicenowRecord"`;
        `label`: `"ServiceNow Record"`;
      \}, \{
        `kind`: `"servicenowAttachment"`;
        `label`: `"ServiceNow Attachment"`;
      \}, \{
        `kind`: `"servicenowImportSetRecord"`;
        `label`: `"ServiceNow Import Set Record"`;
     \}\];
     `requiresCredential`: `true`;
   \}, \{
     `audiences`: readonly \[`"internal-support"`, `"mixed"`\];
     `capability`: `"update-provider-object"`;
     `changesWorkflow`: `true`;
     `description`: `"Updates ServiceNow Table API records such as incidents, comments, state, or assignment fields."`;
     `exposesSensitiveData`: `true`;
     `label`: `"Update ServiceNow records"`;
     `providerObjects`: readonly \[\{
        `kind`: `"servicenowRecord"`;
        `label`: `"ServiceNow Record"`;
      \}, \{
        `kind`: `"servicenowIncident"`;
        `label`: `"ServiceNow Incident"`;
        `schemaName`: `"incident"`;
     \}\];
     `requiresCredential`: `true`;
     `sideEffect`: `true`;
   \}, \{
     `audiences`: readonly \[`"internal-support"`, `"mixed"`\];
     `capability`: `"search-provider-object"`;
     `description`: `"Queries ServiceNow Table API records with SDK-user-supplied sysparm_query and field constraints."`;
     `exposesSensitiveData`: `true`;
     `label`: `"Search ServiceNow records"`;
     `providerObjects`: readonly \[\{
        `kind`: `"servicenowRecord"`;
        `label`: `"ServiceNow Record"`;
     \}\];
     `requiresCredential`: `true`;
   \}, \{
     `audiences`: readonly \[`"mixed"`\];
     `capability`: `"send"`;
     `changesWorkflow`: `true`;
     `description`: `"Posts customer-visible comments to ServiceNow incident records."`;
     `exposesSensitiveData`: `true`;
     `externallyVisible`: `true`;
     `label`: `"Send customer-visible updates"`;
     `providerObjects`: readonly \[\{
        `kind`: `"servicenowIncident"`;
        `label`: `"ServiceNow Incident"`;
        `schemaName`: `"incident"`;
     \}\];
     `requiresCredential`: `true`;
     `sideEffect`: `true`;
   \}, \{
     `audiences`: readonly \[`"internal-support"`, `"mixed"`\];
     `capability`: `"draft"`;
     `changesWorkflow`: `true`;
     `description`: `"Creates internal work notes on ServiceNow incident records."`;
     `exposesSensitiveData`: `true`;
     `externallyVisible`: `false`;
     `label`: `"Create internal notes"`;
     `providerObjects`: readonly \[\{
        `kind`: `"servicenowIncident"`;
        `label`: `"ServiceNow Incident"`;
        `schemaName`: `"incident"`;
     \}\];
     `requiresCredential`: `true`;
     `sideEffect`: `true`;
   \}, \{
     `audiences`: readonly \[`"internal-support"`, `"mixed"`\];
     `capability`: `"attach"`;
     `description`: `"Uploads attachments to ServiceNow records."`;
     `exposesSensitiveData`: `true`;
     `externallyVisible`: `true`;
     `label`: `"Attach files to ServiceNow records"`;
     `providerObjects`: readonly \[\{
        `kind`: `"servicenowAttachment"`;
        `label`: `"ServiceNow Attachment"`;
     \}\];
     `requiresCredential`: `true`;
     `sideEffect`: `true`;
   \}, \{
     `audiences`: readonly \[`"internal-support"`, `"mixed"`\];
     `capability`: `"handoff"`;
     `changesWorkflow`: `true`;
     `description`: `"Provides Table API incident, attachment, and import-set operations used by SDK-user-configured record handoff workflows; this is not native Virtual Agent or Live Agent Chat transfer coverage."`;
     `label`: `"Attach record handoff to ServiceNow"`;
     `providerObjects`: readonly \[\{
        `kind`: `"servicenowIncident"`;
        `label`: `"ServiceNow Incident"`;
        `schemaName`: `"incident"`;
      \}, \{
        `kind`: `"servicenowAttachment"`;
        `label`: `"ServiceNow Attachment"`;
      \}, \{
        `kind`: `"servicenowImportSetRecord"`;
        `label`: `"ServiceNow Import Set Record"`;
     \}\];
     `requiresCredential`: `true`;
     `sideEffect`: `true`;
  \}\];
  `category`: `"ticketing"`;
  `channelAudiences`: readonly \[`"internal-support"`, `"mixed"`\];
  `coverage`: \{
     `evidence`: readonly \[\{
        `label`: `"ServiceNow Table API"`;
        `url`: `"https://www.servicenow.com/docs/r/washingtondc/api-reference/rest-apis/c_TableAPI.html"`;
      \}, \{
        `label`: `"ServiceNow Attachment API"`;
        `url`: `"https://www.servicenow.com/docs/r/washingtondc/api-reference/rest-apis/c_AttachmentAPI.html"`;
      \}, \{
        `label`: `"ServiceNow Import Set API"`;
        `url`: `"https://www.servicenow.com/docs/r/washingtondc/api-reference/rest-apis/c_ImportSetAPI.html"`;
      \}, \{
        `label`: `"ServiceNow Virtual Agent API"`;
        `url`: `"https://www.servicenow.com/docs/r/conversational-interfaces/virtual-agent/virtual-agent-api-landing-page.html"`;
      \}, \{
        `label`: `"ServiceNow Virtual Agent Bot Integration API"`;
        `url`: `"https://www.servicenow.com/docs/r/washingtondc/api-reference/rest-apis/bot-api.html"`;
      \}, \{
        `label`: `"ServiceNow Virtual Agent API features"`;
        `url`: `"https://www.servicenow.com/docs/r/yokohama/conversational-interfaces/virtual-agent/va-api-features.html"`;
     \}\];
     `notes`: readonly \[`"Coverage is limited to ServiceNow Table API record create/read/update/search, incident creation, Attachment API upload/list, Import Set insert/read, and readiness checks used by Cognidesk support workflows."`, `"Implementation uses the official @servicenow/sdk-api Connector when instanceUrl/baseUrl and OAuth bearer credentials are configured, with ServiceNowRawClient injection as an override for host-owned transports."`, `"Generic Table API helpers accept SDK-user-selected table names and fields, but they are not customer-specific generated schema coverage for arbitrary tables, custom fields, ACLs, business rules, or plugins."`, `"This is not full ServiceNow platform API coverage for Service Catalog/cart, journal-field semantics, attachment download/delete, transform-map lifecycle, scripted REST APIs, workflow APIs, or broader platform administration."`\];
     `scope`: `"support-workflow-subset"`;
  \};
  `credentialRequirements`: readonly \[\{
     `description`: `"The SDK user's ServiceNow instance URL for the built-in official @servicenow/sdk-api Connector transport, for example https://example.service-now.com. Not required when the host injects a ServiceNowRawClient."`;
     `id`: `"servicenow-instance"`;
     `label`: `"ServiceNow instance URL"`;
     `metadata`: \{
        `requiredWhen`: `"built-in-servicenow-sdk-connector"`;
     \};
     `required`: `false`;
   \}, \{
     `description`: `"Server-side OAuth bearer access for the built-in official @servicenow/sdk-api Connector transport; effective access is governed by ServiceNow roles, ACLs, table access, and any tenant REST API Auth Scopes. Use ServiceNowRawClient injection for other tenant-auth transports."`;
     `id`: `"servicenow-api-access"`;
     `label`: `"ServiceNow API access"`;
     `metadata`: \{
        `privilegeGuidance`: `"The table_api value is Cognidesk capability guidance, not a universal ServiceNow OAuth scope. The credential must be authorized for Table API, Attachment API, Import Set API, and configured target tables."`;
        `requiredWhen`: `"built-in-servicenow-sdk-connector"`;
        `scopeKind`: `"internal-capability-labels"`;
     \};
     `required`: `false`;
     `scopes`: readonly \[`"table_api"`\];
   \}, \{
     `description`: `"Optional ServiceNowRawClient override supplied by the host application. When configured, Cognidesk delegates operations to that client instead of constructing the built-in @servicenow/sdk-api Connector transport."`;
     `id`: `"servicenow-raw-client"`;
     `label`: `"Host-provided ServiceNow raw client"`;
     `metadata`: \{
        `clientInterface`: `"ServiceNowRawClient"`;
        `credentialKind`: `"host-client-override"`;
        `satisfies`: readonly \[`"servicenow-instance"`, `"servicenow-api-access"`\];
     \};
     `required`: `false`;
  \}\];
  `directions`: readonly \[`"bidirectional"`\];
  `id`: `"ticketing.servicenow"`;
  `limitations`: readonly \[`"Available tables, fields, ACLs, business rules, and mandatory fields are owned by the SDK user's ServiceNow instance."`, `"Handoff timing, approval, field mapping, assignment, and customer visibility are SDK-user configuration."`\];
  `maintainers`: readonly \[\{
     `name`: `"Cognidesk"`;
     `type`: `"official"`;
  \}\];
  `metadata`: \{
     `channelCoverage`: \{
        `arbitraryTableTyping`: `"not-covered"`;
        `attachmentDownloadDelete`: `"provider-supported-not-implemented"`;
        `attachments`: `"typed-upload-list"`;
        `catalogWorkflowScriptedRest`: `"provider-supported-not-implemented"`;
        `cccifCustomChatIntegration`: `"provider-supported-not-typed"`;
        `connectConversationScopedApi`: `"provider-supported-not-typed"`;
        `csmCaseApi`: `"provider-supported-not-typed"`;
        `genericTableApi`: `"sdk-owned-classified-endpoint"`;
        `importSets`: `"typed-json-create-read"`;
        `incidents`: `"typed-create-comment-worknote"`;
        `liveAgentTransfer`: `"provider-supported-not-typed"`;
        `readinessSearch`: `"typed-search"`;
        `tableRecords`: `"typed-json-create-read-update-search"`;
        `taskTableRecords`: `"provider-supported-not-typed"`;
        `virtualAgentApi`: `"provider-supported-not-typed"`;
        `virtualAgentBotIntegrationApi`: `"provider-supported-not-typed"`;
     \};
     `checkedProviderApiCoverage`: \{
        `coverageArtifact`: `"docs/provider-coverage/servicenow-checked-table-attachment-importset-2026-06-18.inventory.json"`;
        `familyCount`: `4`;
        `fullCoverageExportRequirement`: `"Full instance-specific ServiceNow coverage requires REST API Explorer/OpenAPI export for enabled APIs, table dictionary export, plugin/product inventory, ACL/role evidence, and scripted REST definitions from the SDK user's instance."`;
        `gapFamilyCount`: `1`;
        `implementedFamilyCount`: `3`;
        `implementedOperationCount`: `11`;
        `sourceKind`: `"checked-endpoint-family-inventory"`;
        `verifiedAt`: `"2026-06-18"`;
     \};
     `checkedProviderSdk`: \{
        `checkedVersion`: `"4.8.0"`;
        `license`: `"MIT"`;
        `package`: `"@servicenow/sdk-api"`;
        `reason`: `"OAuth default runtime uses Connector.fetch for create/read/update/attachment/import-set calls and Connector.queryTable for compatible table search calls. Non-OAuth tenant-auth transports must be supplied through ServiceNowRawClient injection instead of a package-owned REST fallback."`;
        `result`: `"used-as-runtime-connector"`;
     \};
     `implementation`: \{
        `defaultClientPolicy`: `"use-official-servicenow-sdk-api-connector-for-oauth-runtime-transport; require ServiceNowRawClient injection for non-OAuth tenant-auth transports"`;
        `manifestImport`: `"no-sdk-client-initialization"`;
        `packageOwnedRestClient`: `false`;
        `rawClientEscapeHatch`: `"ServiceNowTicketingClient.rawClient"`;
        `rawClientOverride`: `true`;
        `runtimePackage`: `"@cognidesk/integration-ticketing-servicenow"`;
        `sdkPackage`: `"@servicenow/sdk-api"`;
        `sdkRuntimeSurface`: `"Connector.fetch and Connector.queryTable"`;
        `strategy`: `"official-sdk-connector"`;
     \};
     `sdkDecision`: \{
        `checkedAt`: `"2026-06-25"`;
        `checkedVersion`: `"4.8.0"`;
        `license`: `"MIT"`;
        `package`: `"@servicenow/sdk-api"`;
        `reason`: `"The official ServiceNow SDK API exports Connector.fetch and Connector.queryTable as runtime instance transport. It does not provide a ticketing-specific Table/Attachment/Import Set client, so Cognidesk translates ticketing operations into the official connector transport and retains typed rawClient injection for host-owned clients."`;
        `result`: `"official-sdk-runtime-connector-not-ticketing-client"`;
     \};
  \};
  `name`: `"ServiceNow Ticketing"`;
  `operations`: (
     \| \{
     `alias`: `string`;
     `audiences`: (`"internal-support"` \| `"mixed"`)[];
     `capability`: `string`;
     `changesWorkflow`: `true`;
     `description`: `string`;
     `exposesSensitiveData`: `true`;
     `extension?`: `never`;
     `externallyVisible?`: `never`;
     `label`: `string`;
     `providerObject`: `string`;
     `providerOperation`: `string`;
     `requiresApproval?`: `never`;
     `requiresCredential`: `true`;
     `sideEffect`: `true`;
   \}
     \| \{
     `alias`: `string`;
     `audiences`: (`"internal-support"` \| `"mixed"`)[];
     `capability`: `string`;
     `changesWorkflow?`: `never`;
     `description`: `string`;
     `exposesSensitiveData`: `true`;
     `extension?`: `never`;
     `externallyVisible?`: `never`;
     `label`: `string`;
     `providerObject`: `string`;
     `providerOperation`: `string`;
     `requiresApproval?`: `never`;
     `requiresCredential`: `true`;
     `sideEffect?`: `never`;
   \}
     \| \{
     `alias`: `string`;
     `audiences`: `"mixed"`[];
     `capability`: `string`;
     `changesWorkflow`: `true`;
     `description`: `string`;
     `exposesSensitiveData`: `true`;
     `extension?`: `never`;
     `externallyVisible`: `true`;
     `label`: `string`;
     `providerObject`: `string`;
     `providerOperation`: `string`;
     `requiresApproval`: `true`;
     `requiresCredential`: `true`;
     `sideEffect`: `true`;
   \}
     \| \{
     `alias`: `string`;
     `audiences`: (`"internal-support"` \| `"mixed"`)[];
     `capability`: `string`;
     `changesWorkflow`: `true`;
     `description`: `string`;
     `exposesSensitiveData`: `true`;
     `extension?`: `never`;
     `externallyVisible`: `false`;
     `label`: `string`;
     `providerObject`: `string`;
     `providerOperation`: `string`;
     `requiresApproval?`: `never`;
     `requiresCredential`: `true`;
     `sideEffect`: `true`;
   \}
     \| \{
     `alias`: `string`;
     `audiences`: (`"internal-support"` \| `"mixed"`)[];
     `capability`: `string`;
     `changesWorkflow?`: `never`;
     `description`: `string`;
     `exposesSensitiveData`: `true`;
     `extension?`: `never`;
     `externallyVisible`: `true`;
     `label`: `string`;
     `providerObject`: `string`;
     `providerOperation`: `string`;
     `requiresApproval?`: `never`;
     `requiresCredential`: `true`;
     `sideEffect`: `true`;
   \}
     \| \{
     `alias`: `string`;
     `audiences`: (`"internal-support"` \| `"mixed"`)[];
     `capability`: `string`;
     `changesWorkflow`: `true`;
     `description`: `string`;
     `exposesSensitiveData`: `true`;
     `extension`: `true`;
     `externallyVisible?`: `never`;
     `label`: `string`;
     `providerObject`: `string`;
     `providerOperation`: `string`;
     `requiresApproval?`: `never`;
     `requiresCredential`: `true`;
     `sideEffect`: `true`;
   \}
     \| \{
     `alias`: `string`;
     `audiences`: (`"internal-support"` \| `"mixed"`)[];
     `capability`: `string`;
     `changesWorkflow?`: `never`;
     `description`: `string`;
     `exposesSensitiveData`: `true`;
     `extension`: `true`;
     `externallyVisible?`: `never`;
     `label`: `string`;
     `providerObject`: `string`;
     `providerOperation`: `string`;
     `requiresApproval?`: `never`;
     `requiresCredential`: `true`;
     `sideEffect?`: `never`;
  \})[];
  `packageName`: `"@cognidesk/integration-ticketing-servicenow"`;
  `privacyNotes`: readonly \[`"ServiceNow records can contain customer data, support notes, internal assignment data, and attached workflow context."`, `"ServiceNow credentials stay server-side and are never exposed through Studio credential status."`\];
  `provider`: `"servicenow"`;
  `trustLevel`: `"official"`;
\}, `unknown`, [`IntegrationOperationHandlers`](../../../packages/integration-kit/dist.md#integrationoperationhandlers)\>

***

### createServiceNowTicketingLiveChecks()

```ts
function createServiceNowTicketingLiveChecks(options?): {
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
| `options?` | [`ServiceNowLiveCheckOptions`](#servicenowlivecheckoptions) |

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

### createServiceNowTicketingOperationHandlers()

```ts
function createServiceNowTicketingOperationHandlers(options?): IntegrationOperationHandlers;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options?` | [`ServiceNowTicketingIntegrationOptions`](#servicenowticketingintegrationoptions) |

#### Returns

[`IntegrationOperationHandlers`](../../../packages/integration-kit/dist.md#integrationoperationhandlers)

***

### createUnconfiguredServiceNowRawClient()

```ts
function createUnconfiguredServiceNowRawClient(message?): ServiceNowRawClient;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `message?` | `string` |

#### Returns

[`ServiceNowRawClient`](#servicenowrawclient)

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
