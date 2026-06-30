# integrations/ticketing/salesforce/dist

## Interfaces

### SalesforceCaseCommentInput

#### Properties

##### body?

```ts
optional body?: string;
```

##### caseId?

```ts
optional caseId?: string;
```

##### comment?

```ts
optional comment?: string;
```

##### fields?

```ts
optional fields?: SalesforceProviderPayload;
```

##### isPublished?

```ts
optional isPublished?: boolean;
```

##### text?

```ts
optional text?: string;
```

##### ticketId?

```ts
optional ticketId?: string;
```

***

### SalesforceCaseInput

#### Extended by

- [`SalesforceUpdateCaseInput`](#salesforceupdatecaseinput)

#### Properties

##### accountId?

```ts
optional accountId?: string;
```

##### contactId?

```ts
optional contactId?: string;
```

##### description?

```ts
optional description?: string;
```

##### fields?

```ts
optional fields?: SalesforceProviderPayload;
```

##### origin?

```ts
optional origin?: string;
```

##### ownerId?

```ts
optional ownerId?: string;
```

##### priority?

```ts
optional priority?: string;
```

##### status?

```ts
optional status?: string;
```

##### subject?

```ts
optional subject?: string;
```

##### suppliedEmail?

```ts
optional suppliedEmail?: string;
```

##### suppliedName?

```ts
optional suppliedName?: string;
```

***

### SalesforceCaseSearchInput

#### Properties

##### limit?

```ts
optional limit?: number;
```

##### where?

```ts
optional where?: string;
```

***

### SalesforceInternalNoteInput

#### Properties

##### body?

```ts
optional body?: string;
```

##### caseId?

```ts
optional caseId?: string;
```

##### fields?

```ts
optional fields?: SalesforceProviderPayload;
```

##### note?

```ts
optional note?: string;
```

##### text?

```ts
optional text?: string;
```

##### ticketId?

```ts
optional ticketId?: string;
```

##### type?

```ts
optional type?: string;
```

##### visibility?

```ts
optional visibility?: string;
```

***

### SalesforceProviderPayload

#### Indexable

```ts
[key: string]: SalesforceProviderValue
```

***

### SalesforceReadCaseInput

#### Extended by

- [`SalesforceUpdateCaseInput`](#salesforceupdatecaseinput)

#### Properties

##### id?

```ts
optional id?: string;
```

##### ticketId?

```ts
optional ticketId?: string;
```

***

### SalesforceSoqlQueryInput

#### Properties

##### query?

```ts
optional query?: string;
```

##### soql?

```ts
optional soql?: string;
```

***

### SalesforceTicketingClient

#### Extends

- [`SalesforceTicketingOperationsClient`](#salesforceticketingoperationsclient)

#### Properties

##### integration

```ts
integration: DefinedIntegration<ProviderManifestAuthorInput>;
```

##### rawClient

```ts
rawClient: SalesforceTicketingRawClient;
```

#### Methods

##### createCase()

```ts
createCase(input): Promise<unknown>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`SalesforceCaseInput`](#salesforcecaseinput) |

###### Returns

`Promise`\<`unknown`\>

###### Inherited from

[`SalesforceTicketingOperationsClient`](#salesforceticketingoperationsclient).[`createCase`](#createcase-1)

##### createCaseComment()

```ts
createCaseComment(input): Promise<unknown>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`SalesforceCaseCommentInput`](#salesforcecasecommentinput) |

###### Returns

`Promise`\<`unknown`\>

###### Inherited from

[`SalesforceTicketingOperationsClient`](#salesforceticketingoperationsclient).[`createCaseComment`](#createcasecomment-1)

##### createInternalNote()

```ts
createInternalNote(input): Promise<unknown>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`SalesforceInternalNoteInput`](#salesforceinternalnoteinput) |

###### Returns

`Promise`\<`unknown`\>

###### Inherited from

[`SalesforceTicketingOperationsClient`](#salesforceticketingoperationsclient).[`createInternalNote`](#createinternalnote-1)

##### getCase()

```ts
getCase(caseId): Promise<unknown>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `caseId` | `string` |

###### Returns

`Promise`\<`unknown`\>

###### Inherited from

[`SalesforceTicketingOperationsClient`](#salesforceticketingoperationsclient).[`getCase`](#getcase-1)

##### getRawClient()

```ts
getRawClient(): SalesforceTicketingRawClient;
```

###### Returns

[`SalesforceTicketingRawClient`](#salesforceticketingrawclient)

###### Inherited from

[`SalesforceTicketingOperationsClient`](#salesforceticketingoperationsclient).[`getRawClient`](#getrawclient-1)

##### querySoql()

```ts
querySoql(soql): Promise<unknown>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `soql` | `string` |

###### Returns

`Promise`\<`unknown`\>

###### Inherited from

[`SalesforceTicketingOperationsClient`](#salesforceticketingoperationsclient).[`querySoql`](#querysoql-1)

##### searchCases()

```ts
searchCases(input?): Promise<unknown>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input?` | [`SalesforceCaseSearchInput`](#salesforcecasesearchinput) |

###### Returns

`Promise`\<`unknown`\>

###### Inherited from

[`SalesforceTicketingOperationsClient`](#salesforceticketingoperationsclient).[`searchCases`](#searchcases-1)

##### updateCase()

```ts
updateCase(caseId, patch): Promise<unknown>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `caseId` | `string` |
| `patch` | [`SalesforceCaseInput`](#salesforcecaseinput) |

###### Returns

`Promise`\<`unknown`\>

###### Inherited from

[`SalesforceTicketingOperationsClient`](#salesforceticketingoperationsclient).[`updateCase`](#updatecase-1)

***

### SalesforceTicketingClientOptions

#### Properties

##### accessToken?

```ts
optional accessToken?: string;
```

##### instanceUrl?

```ts
optional instanceUrl?: string;
```

##### rawClient?

```ts
optional rawClient?: SalesforceTicketingRawClient;
```

***

### SalesforceTicketingOperationsClient

#### Extended by

- [`SalesforceTicketingClient`](#salesforceticketingclient)

#### Methods

##### createCase()

```ts
createCase(input): Promise<unknown>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`SalesforceCaseInput`](#salesforcecaseinput) |

###### Returns

`Promise`\<`unknown`\>

##### createCaseComment()

```ts
createCaseComment(input): Promise<unknown>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`SalesforceCaseCommentInput`](#salesforcecasecommentinput) |

###### Returns

`Promise`\<`unknown`\>

##### createInternalNote()

```ts
createInternalNote(input): Promise<unknown>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`SalesforceInternalNoteInput`](#salesforceinternalnoteinput) |

###### Returns

`Promise`\<`unknown`\>

##### getCase()

```ts
getCase(caseId): Promise<unknown>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `caseId` | `string` |

###### Returns

`Promise`\<`unknown`\>

##### getRawClient()

```ts
getRawClient(): SalesforceTicketingRawClient;
```

###### Returns

[`SalesforceTicketingRawClient`](#salesforceticketingrawclient)

##### querySoql()

```ts
querySoql(soql): Promise<unknown>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `soql` | `string` |

###### Returns

`Promise`\<`unknown`\>

##### searchCases()

```ts
searchCases(input?): Promise<unknown>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input?` | [`SalesforceCaseSearchInput`](#salesforcecasesearchinput) |

###### Returns

`Promise`\<`unknown`\>

##### updateCase()

```ts
updateCase(caseId, patch): Promise<unknown>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `caseId` | `string` |
| `patch` | [`SalesforceCaseInput`](#salesforcecaseinput) |

###### Returns

`Promise`\<`unknown`\>

***

### SalesforceTicketingRawClient

#### Methods

##### query()

```ts
query(soql): PromiseLike<unknown>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `soql` | `string` |

###### Returns

`PromiseLike`\<`unknown`\>

##### sobject()

```ts
sobject(name): {
  create: Promise<unknown>;
  retrieve: Promise<unknown>;
  update: Promise<unknown>;
};
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |

###### Returns

```ts
{
  create: Promise<unknown>;
  retrieve: Promise<unknown>;
  update: Promise<unknown>;
}
```

| Name | Type |
| ------ | ------ |
| `create()` | (`input`) => `Promise`\<`unknown`\> |
| `retrieve()` | (`id`) => `Promise`\<`unknown`\> |
| `update()` | (`input`) => `Promise`\<`unknown`\> |

***

### SalesforceUpdateCaseInput

#### Extends

- [`SalesforceCaseInput`](#salesforcecaseinput).[`SalesforceReadCaseInput`](#salesforcereadcaseinput)

#### Properties

##### accountId?

```ts
optional accountId?: string;
```

###### Inherited from

[`SalesforceCaseInput`](#salesforcecaseinput).[`accountId`](#accountid)

##### contactId?

```ts
optional contactId?: string;
```

###### Inherited from

[`SalesforceCaseInput`](#salesforcecaseinput).[`contactId`](#contactid)

##### description?

```ts
optional description?: string;
```

###### Inherited from

[`SalesforceCaseInput`](#salesforcecaseinput).[`description`](#description)

##### fields?

```ts
optional fields?: SalesforceProviderPayload;
```

###### Inherited from

[`SalesforceCaseInput`](#salesforcecaseinput).[`fields`](#fields-1)

##### id?

```ts
optional id?: string;
```

###### Inherited from

[`SalesforceReadCaseInput`](#salesforcereadcaseinput).[`id`](#id)

##### origin?

```ts
optional origin?: string;
```

###### Inherited from

[`SalesforceCaseInput`](#salesforcecaseinput).[`origin`](#origin)

##### ownerId?

```ts
optional ownerId?: string;
```

###### Inherited from

[`SalesforceCaseInput`](#salesforcecaseinput).[`ownerId`](#ownerid)

##### patch?

```ts
optional patch?: SalesforceCaseInput;
```

##### priority?

```ts
optional priority?: string;
```

###### Inherited from

[`SalesforceCaseInput`](#salesforcecaseinput).[`priority`](#priority)

##### status?

```ts
optional status?: string;
```

###### Inherited from

[`SalesforceCaseInput`](#salesforcecaseinput).[`status`](#status)

##### subject?

```ts
optional subject?: string;
```

###### Inherited from

[`SalesforceCaseInput`](#salesforcecaseinput).[`subject`](#subject)

##### suppliedEmail?

```ts
optional suppliedEmail?: string;
```

###### Inherited from

[`SalesforceCaseInput`](#salesforcecaseinput).[`suppliedEmail`](#suppliedemail)

##### suppliedName?

```ts
optional suppliedName?: string;
```

###### Inherited from

[`SalesforceCaseInput`](#salesforcecaseinput).[`suppliedName`](#suppliedname)

##### ticketId?

```ts
optional ticketId?: string;
```

###### Inherited from

[`SalesforceReadCaseInput`](#salesforcereadcaseinput).[`ticketId`](#ticketid-2)

## Type Aliases

### SalesforceProviderPrimitive

```ts
type SalesforceProviderPrimitive = string | number | boolean | null;
```

***

### SalesforceProviderValue

```ts
type SalesforceProviderValue =
  | SalesforceProviderPrimitive
  | SalesforceProviderPayload
  | readonly SalesforceProviderValue[];
```

***

### SalesforceTicketingOperationAlias

```ts
type SalesforceTicketingOperationAlias = string;
```

***

### SalesforceTicketingSdkClient

```ts
type SalesforceTicketingSdkClient = InstanceType<typeof jsforce.Connection>;
```

## Variables

### salesforceTicketingProviderOperations

```ts
const salesforceTicketingProviderOperations: ProviderOperationDeclarationInput[];
```

## Functions

### createSalesforceTicketingClient()

```ts
function createSalesforceTicketingClient(options?): SalesforceTicketingClient;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options?` | [`SalesforceTicketingClientOptions`](#salesforceticketingclientoptions) |

#### Returns

[`SalesforceTicketingClient`](#salesforceticketingclient)

***

### createSalesforceTicketingOperationHandlers()

```ts
function createSalesforceTicketingOperationHandlers(clientOrRawClient): IntegrationOperationHandlers;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `clientOrRawClient` | \| [`SalesforceTicketingOperationsClient`](#salesforceticketingoperationsclient) \| [`SalesforceTicketingRawClient`](#salesforceticketingrawclient) |

#### Returns

[`IntegrationOperationHandlers`](../../../packages/integration-kit/dist.md#integrationoperationhandlers)

***

### createSalesforceTicketingOperationsClient()

```ts
function createSalesforceTicketingOperationsClient(rawClient): Omit<SalesforceTicketingClient, "integration">;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `rawClient` | [`SalesforceTicketingRawClient`](#salesforceticketingrawclient) |

#### Returns

`Omit`\<[`SalesforceTicketingClient`](#salesforceticketingclient), `"integration"`\>

## References

### salesforceTicketingProviderManifest

Re-exports [salesforceTicketingProviderManifest](dist/manifest.md#salesforceticketingprovidermanifest)
