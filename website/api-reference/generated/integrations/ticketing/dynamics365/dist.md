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
optional client?: Pick<Dynamics365TicketingOperationsClient, "readiness">;
```

##### instanceUrl?

```ts
optional instanceUrl?: string;
```

###### Inherited from

[`Dynamics365TicketingClientOptions`](#dynamics365ticketingclientoptions).[`instanceUrl`](#instanceurl-2)

##### rawClient?

```ts
optional rawClient?: DynamicsWebApi;
```

###### Inherited from

[`Dynamics365TicketingClientOptions`](#dynamics365ticketingclientoptions).[`rawClient`](#rawclient-2)

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

#### Extends

- [`Dynamics365TicketingOperationsClient`](#dynamics365ticketingoperationsclient)

#### Properties

##### integration

```ts
integration: DefinedIntegration<ProviderManifestAuthorInput>;
```

##### rawClient

```ts
rawClient: DynamicsWebApi;
```

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

###### Inherited from

[`Dynamics365TicketingOperationsClient`](#dynamics365ticketingoperationsclient).[`addToQueue`](#addtoqueue-1)

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

###### Inherited from

[`Dynamics365TicketingOperationsClient`](#dynamics365ticketingoperationsclient).[`createCase`](#createcase-1)

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

###### Inherited from

[`Dynamics365TicketingOperationsClient`](#dynamics365ticketingoperationsclient).[`createCaseNote`](#createcasenote-1)

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

###### Inherited from

[`Dynamics365TicketingOperationsClient`](#dynamics365ticketingoperationsclient).[`getCase`](#getcase-1)

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

###### Inherited from

[`Dynamics365TicketingOperationsClient`](#dynamics365ticketingoperationsclient).[`getEntityDefinition`](#getentitydefinition-1)

##### getRawClient()

```ts
getRawClient(): DynamicsWebApi;
```

###### Returns

`DynamicsWebApi`

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

###### Inherited from

[`Dynamics365TicketingOperationsClient`](#dynamics365ticketingoperationsclient).[`listActivities`](#listactivities-1)

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

###### Inherited from

[`Dynamics365TicketingOperationsClient`](#dynamics365ticketingoperationsclient).[`listCaseNotes`](#listcasenotes-1)

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

###### Inherited from

[`Dynamics365TicketingOperationsClient`](#dynamics365ticketingoperationsclient).[`listQueues`](#listqueues-1)

##### readiness()

```ts
readiness(): Promise<Dynamics365ProviderResponse>;
```

###### Returns

`Promise`\<[`Dynamics365ProviderResponse`](#dynamics365providerresponse)\>

###### Inherited from

[`Dynamics365TicketingOperationsClient`](#dynamics365ticketingoperationsclient).[`readiness`](#readiness-1)

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

###### Inherited from

[`Dynamics365TicketingOperationsClient`](#dynamics365ticketingoperationsclient).[`searchCases`](#searchcases-1)

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

###### Inherited from

[`Dynamics365TicketingOperationsClient`](#dynamics365ticketingoperationsclient).[`updateCase`](#updatecase-1)

***

### Dynamics365TicketingClientOptions

#### Extended by

- [`Dynamics365LiveCheckOptions`](#dynamics365livecheckoptions)
- [`Dynamics365TicketingIntegrationOptions`](#dynamics365ticketingintegrationoptions)

#### Properties

##### accessToken?

```ts
optional accessToken?: string;
```

##### apiVersion?

```ts
optional apiVersion?: string;
```

##### instanceUrl?

```ts
optional instanceUrl?: string;
```

##### rawClient?

```ts
optional rawClient?: DynamicsWebApi;
```

***

### Dynamics365TicketingIntegrationOptions

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
optional client?: Dynamics365TicketingOperationsClient;
```

##### instanceUrl?

```ts
optional instanceUrl?: string;
```

###### Inherited from

[`Dynamics365TicketingClientOptions`](#dynamics365ticketingclientoptions).[`instanceUrl`](#instanceurl-2)

##### rawClient?

```ts
optional rawClient?: DynamicsWebApi;
```

###### Inherited from

[`Dynamics365TicketingClientOptions`](#dynamics365ticketingclientoptions).[`rawClient`](#rawclient-2)

***

### Dynamics365TicketingOperationsClient

#### Extended by

- [`Dynamics365TicketingClient`](#dynamics365ticketingclient)

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

***

### Dynamics365RawClient

```ts
type Dynamics365RawClient = DynamicsWebApi;
```

***

### Dynamics365TicketingOperationAlias

```ts
type Dynamics365TicketingOperationAlias = string;
```

## Variables

### dynamics365TicketingProviderOperations

```ts
const dynamics365TicketingProviderOperations: ProviderOperationDeclarationInput[];
```

## Functions

### createDynamics365RawClient()

```ts
function createDynamics365RawClient(options): DynamicsWebApi;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`Dynamics365TicketingClientOptions`](#dynamics365ticketingclientoptions) |

#### Returns

`DynamicsWebApi`

***

### createDynamics365TicketingClient()

```ts
function createDynamics365TicketingClient(options?): Dynamics365TicketingClient;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options?` | [`Dynamics365TicketingClientOptions`](#dynamics365ticketingclientoptions) |

#### Returns

[`Dynamics365TicketingClient`](#dynamics365ticketingclient)

***

### createDynamics365TicketingIntegration()

```ts
function createDynamics365TicketingIntegration(options?): DefinedIntegration<{
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
     audiences: readonly ["customer-facing", "internal-support", "mixed"];
     capability: "create-provider-object";
     changesWorkflow: true;
     description: "Creates Dataverse incident records for SDK-user-configured customer-service handoff.";
     exposesSensitiveData: true;
     label: "Create Dynamics cases";
     providerObjects: readonly [{
        kind: "dynamics365Incident";
        label: "Dynamics 365 Case";
        schemaName: "incident";
      }, {
        kind: "dynamics365Annotation";
        label: "Dynamics 365 Annotation";
        schemaName: "annotation";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     audiences: readonly ["internal-support", "mixed"];
     capability: "draft";
     description: "Creates Dataverse annotation records for internal support handoff context.";
     exposesSensitiveData: true;
     label: "Create Dynamics internal notes";
     providerObjects: readonly [{
        kind: "internalNote";
        label: "Internal Note";
        schemaName: "annotation";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     audiences: readonly ["internal-support", "mixed"];
     capability: "read-provider-object";
     description: "Reads Dataverse incident records and readiness metadata.";
     exposesSensitiveData: true;
     label: "Read Dynamics cases";
     providerObjects: readonly [{
        kind: "dynamics365Incident";
        label: "Dynamics 365 Case";
        schemaName: "incident";
      }, {
        kind: "dynamics365Annotation";
        label: "Dynamics 365 Annotation";
        schemaName: "annotation";
      }, {
        kind: "dynamics365Queue";
        label: "Dynamics 365 Queue";
        schemaName: "queue";
      }, {
        kind: "dynamics365Activity";
        label: "Dynamics 365 Activity";
        schemaName: "activitypointer";
      }, {
        kind: "dynamics365EntityDefinition";
        label: "Dynamics 365 Entity Definition";
        schemaName: "EntityDefinition";
      }, {
        kind: "dynamics365WhoAmI";
        label: "Dynamics 365 WhoAmI";
        schemaName: "WhoAmI";
     }];
     requiresCredential: true;
   }, {
     audiences: readonly ["internal-support", "mixed"];
     capability: "update-provider-object";
     changesWorkflow: true;
     description: "Updates Dataverse incident records such as status, title, description, owner, or custom fields.";
     exposesSensitiveData: true;
     label: "Update Dynamics cases";
     providerObjects: readonly [{
        kind: "dynamics365Incident";
        label: "Dynamics 365 Case";
        schemaName: "incident";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     audiences: readonly ["internal-support", "mixed"];
     capability: "search-provider-object";
     description: "Queries Dataverse incident records with SDK-user-supplied OData options.";
     exposesSensitiveData: true;
     label: "Search Dynamics cases";
     providerObjects: readonly [{
        kind: "dynamics365Incident";
        label: "Dynamics 365 Case";
        schemaName: "incident";
      }, {
        kind: "dynamics365Annotation";
        label: "Dynamics 365 Annotation";
        schemaName: "annotation";
      }, {
        kind: "dynamics365Queue";
        label: "Dynamics 365 Queue";
        schemaName: "queue";
      }, {
        kind: "dynamics365Activity";
        label: "Dynamics 365 Activity";
        schemaName: "activitypointer";
     }];
     requiresCredential: true;
   }, {
     audiences: readonly ["customer-facing", "internal-support", "mixed"];
     capability: "handoff";
     changesWorkflow: true;
     description: "Uses Dataverse incident, annotation, and selected queue operations in SDK-user-configured record handoff workflows; this does not imply native Omnichannel conversation transfer or live-work-item mutation.";
     exposesSensitiveData: true;
     label: "Attach handoff to Dynamics";
     providerObjects: readonly [{
        kind: "dynamics365Incident";
        label: "Dynamics 365 Case";
        schemaName: "incident";
      }, {
        kind: "dynamics365Annotation";
        label: "Dynamics 365 Annotation";
        schemaName: "annotation";
      }, {
        kind: "dynamics365Queue";
        label: "Dynamics 365 Queue";
        schemaName: "queue";
     }];
     requiresCredential: true;
     sideEffect: true;
  }];
  category: "ticketing";
  channelAudiences: readonly ["customer-facing", "internal-support", "mixed"];
  coverage: {
     evidence: readonly [{
        label: "Microsoft Dataverse Web API overview";
        url: "https://learn.microsoft.com/en-us/power-apps/developer/data-platform/webapi/overview";
      }, {
        label: "dynamics-web-api Dataverse helper";
        url: "https://github.com/AleksandrRogov/DynamicsWebApi";
      }, {
        label: "Dynamics 365 Customer Service incident table reference";
        url: "https://learn.microsoft.com/en-us/dynamics365/customer-service/develop/reference/entities/incident";
      }, {
        label: "Dataverse EntityDefinitions metadata queries";
        url: "https://learn.microsoft.com/en-us/power-apps/developer/data-platform/webapi/query-metadata-web-api";
      }, {
        label: "Dataverse WhoAmI Function";
        url: "https://learn.microsoft.com/en-us/power-apps/developer/data-platform/webapi/reference/whoami?view=dataverse-latest";
      }, {
        label: "Dataverse Note/Annotation table reference";
        url: "https://learn.microsoft.com/en-us/power-apps/developer/data-platform/reference/entities/annotation";
      }, {
        label: "Dataverse ActivityPointer table reference";
        url: "https://learn.microsoft.com/en-us/power-apps/developer/data-platform/reference/entities/activitypointer";
      }, {
        label: "Dataverse queue EntityType reference";
        url: "https://learn.microsoft.com/en-us/power-apps/developer/data-platform/webapi/reference/queue";
      }, {
        label: "Dataverse AddToQueue Action";
        url: "https://learn.microsoft.com/en-us/power-apps/developer/data-platform/webapi/reference/addtoqueue?view=dataverse-latest";
      }, {
        label: "Dynamics 365 Omnichannel JavaScript API";
        url: "https://learn.microsoft.com/en-us/dynamics365/customer-service/develop/omnichannel-api-reference";
      }, {
        label: "Dynamics 365 custom messaging channel table";
        url: "https://learn.microsoft.com/en-us/dynamics365/customer-service/develop/reference/entities/msdyn_occustommessagingchannel";
      }, {
        label: "Dynamics 365 getConversations Omnichannel API";
        url: "https://learn.microsoft.com/en-us/dynamics365/customer-service/develop/reference/methods/getconversations";
     }];
     notes: readonly ["Coverage is limited to Dataverse incident CRUD/search, selected metadata/readiness helpers, incident notes via annotations, queue AddToQueue, and queue/activity reads used by Cognidesk support workflows.", "Implementation uses dynamics-web-api 2.5.0; broader Dataverse Web API capabilities remain available through the rawClient escape hatch but are not Cognidesk adapter coverage.", "Annotation note creation supports bounded inline annotation document fields (`filename`, `documentbody`, `mimetype`) on the Dataverse annotation record; this is not a complete file/attachment lifecycle.", "This is not full Microsoft Dataverse, Dynamics 365 Customer Service, activity, annotation attachment, relationship metadata, broader queue routing, or custom action API coverage."];
     scope: "support-workflow-subset";
  };
  credentialRequirements: readonly [{
     id: "dynamics365-instance";
     label: "Dynamics 365 Dataverse environment URL";
     required: true;
   }, {
     id: "dynamics365-api-access";
     label: "Dynamics 365 OAuth access";
     metadata: {
        privilegeGuidance: "Delegated clients request <environment-url>/user_impersonation; confidential clients commonly request <environment-url>/.default. Dataverse security roles still govern incident, annotation, queue, activity, and AddToQueue access.";
        scopeKind: "provider-oauth-scopes";
     };
     required: true;
     scopes: readonly ["user_impersonation"];
  }];
  directions: readonly ["bidirectional"];
  id: "ticketing.dynamics365";
  limitations: readonly ["Dataverse table customizations, required fields, queues, owners, security roles, and routing rules are SDK-user configuration.", "Unified Routing live-work-item mutation is provider-sensitive and must not be inferred from typed AddToQueue support."];
  maintainers: readonly [{
     name: "Cognidesk";
     type: "official";
  }];
  metadata: {
     channelCoverage: {
        activities: "typed-list";
        annotationAttachmentLifecycle: "provider-supported-not-typed";
        annotationInlineDocumentFields: "typed-selected";
        annotationsCaseNotes: "typed-create-list";
        broaderDataverseApi: "provider-supported-raw-client";
        ccaasConversationActions: "provider-supported-not-typed";
        conversationsLiveWorkItems: "provider-supported-not-typed";
        customActions: "not-covered";
        customMessagingChannels: "provider-supported-not-typed";
        incidents: "typed-crud-search";
        linkToConversation: "provider-supported-client-sdk-not-typed";
        messagingApis: "provider-supported-not-typed";
        metadataReadiness: "typed-selected";
        omnichannelLiveChatWidget: "provider-supported-client-sdk-not-typed";
        queueRouting: "typed-selected";
        queues: "typed-list";
        relationshipMetadata: "not-covered";
        transcriptAnnotations: "provider-supported-not-typed";
        unifiedRoutingLiveWorkItemMutation: "provider-supported-not-typed";
     };
     checkedProviderApiCoverage: {
        coverageArtifact: "docs/provider-coverage/dynamics365-checked-dataverse-customer-service-2026-06-18.inventory.json";
        familyCount: 4;
        fullCoverageExportRequirement: "Full environment-specific Dataverse/Dynamics coverage requires the SDK user's $metadata/CSDL, EntityDefinitions, solution customizations, enabled Dynamics 365 Customer Service products, security roles, and custom action/function export.";
        gapFamilyCount: 1;
        implementedFamilyCount: 3;
        implementedOperationCount: 11;
        sourceKind: "checked-endpoint-family-inventory";
        verifiedAt: "2026-06-18";
     };
     implementation: {
        manifestImport: "no-sdk-client-initialization";
        rawClientEscapeHatch: "Dynamics365TicketingClient.rawClient/getRawClient()";
        runtimePackage: "@cognidesk/integration-ticketing-dynamics365";
        sdkPackage: "dynamics-web-api";
        sdkVersionRange: "2.5.0";
        strategy: "sdk-backed";
     };
  };
  name: "Microsoft Dynamics 365 Customer Service";
  operations: {
     alias: string;
     audience?: "customer-facing" | "internal-support" | "mixed";
     audiences?: ("customer-facing" | "internal-support" | "mixed")[];
     capability: string;
     changesWorkflow?: boolean;
     description?: string;
     exposesSensitiveData?: boolean;
     extension?: boolean;
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
  packageName: "@cognidesk/integration-ticketing-dynamics365";
  privacyNotes: readonly ["Dynamics cases can contain customer identity, support summaries, entitlements, queue and owner metadata, and internal notes.", "Dynamics OAuth credentials stay server-side and Studio receives only readiness."];
  provider: "dynamics365";
  trustLevel: "official";
}, Dynamics365JsonObject, IntegrationOperationHandlers>;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options?` | [`Dynamics365TicketingIntegrationOptions`](#dynamics365ticketingintegrationoptions) |

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
     `audiences`: readonly \[`"customer-facing"`, `"internal-support"`, `"mixed"`\];
     `capability`: `"create-provider-object"`;
     `changesWorkflow`: `true`;
     `description`: `"Creates Dataverse incident records for SDK-user-configured customer-service handoff."`;
     `exposesSensitiveData`: `true`;
     `label`: `"Create Dynamics cases"`;
     `providerObjects`: readonly \[\{
        `kind`: `"dynamics365Incident"`;
        `label`: `"Dynamics 365 Case"`;
        `schemaName`: `"incident"`;
      \}, \{
        `kind`: `"dynamics365Annotation"`;
        `label`: `"Dynamics 365 Annotation"`;
        `schemaName`: `"annotation"`;
     \}\];
     `requiresCredential`: `true`;
     `sideEffect`: `true`;
   \}, \{
     `audiences`: readonly \[`"internal-support"`, `"mixed"`\];
     `capability`: `"draft"`;
     `description`: `"Creates Dataverse annotation records for internal support handoff context."`;
     `exposesSensitiveData`: `true`;
     `label`: `"Create Dynamics internal notes"`;
     `providerObjects`: readonly \[\{
        `kind`: `"internalNote"`;
        `label`: `"Internal Note"`;
        `schemaName`: `"annotation"`;
     \}\];
     `requiresCredential`: `true`;
     `sideEffect`: `true`;
   \}, \{
     `audiences`: readonly \[`"internal-support"`, `"mixed"`\];
     `capability`: `"read-provider-object"`;
     `description`: `"Reads Dataverse incident records and readiness metadata."`;
     `exposesSensitiveData`: `true`;
     `label`: `"Read Dynamics cases"`;
     `providerObjects`: readonly \[\{
        `kind`: `"dynamics365Incident"`;
        `label`: `"Dynamics 365 Case"`;
        `schemaName`: `"incident"`;
      \}, \{
        `kind`: `"dynamics365Annotation"`;
        `label`: `"Dynamics 365 Annotation"`;
        `schemaName`: `"annotation"`;
      \}, \{
        `kind`: `"dynamics365Queue"`;
        `label`: `"Dynamics 365 Queue"`;
        `schemaName`: `"queue"`;
      \}, \{
        `kind`: `"dynamics365Activity"`;
        `label`: `"Dynamics 365 Activity"`;
        `schemaName`: `"activitypointer"`;
      \}, \{
        `kind`: `"dynamics365EntityDefinition"`;
        `label`: `"Dynamics 365 Entity Definition"`;
        `schemaName`: `"EntityDefinition"`;
      \}, \{
        `kind`: `"dynamics365WhoAmI"`;
        `label`: `"Dynamics 365 WhoAmI"`;
        `schemaName`: `"WhoAmI"`;
     \}\];
     `requiresCredential`: `true`;
   \}, \{
     `audiences`: readonly \[`"internal-support"`, `"mixed"`\];
     `capability`: `"update-provider-object"`;
     `changesWorkflow`: `true`;
     `description`: `"Updates Dataverse incident records such as status, title, description, owner, or custom fields."`;
     `exposesSensitiveData`: `true`;
     `label`: `"Update Dynamics cases"`;
     `providerObjects`: readonly \[\{
        `kind`: `"dynamics365Incident"`;
        `label`: `"Dynamics 365 Case"`;
        `schemaName`: `"incident"`;
     \}\];
     `requiresCredential`: `true`;
     `sideEffect`: `true`;
   \}, \{
     `audiences`: readonly \[`"internal-support"`, `"mixed"`\];
     `capability`: `"search-provider-object"`;
     `description`: `"Queries Dataverse incident records with SDK-user-supplied OData options."`;
     `exposesSensitiveData`: `true`;
     `label`: `"Search Dynamics cases"`;
     `providerObjects`: readonly \[\{
        `kind`: `"dynamics365Incident"`;
        `label`: `"Dynamics 365 Case"`;
        `schemaName`: `"incident"`;
      \}, \{
        `kind`: `"dynamics365Annotation"`;
        `label`: `"Dynamics 365 Annotation"`;
        `schemaName`: `"annotation"`;
      \}, \{
        `kind`: `"dynamics365Queue"`;
        `label`: `"Dynamics 365 Queue"`;
        `schemaName`: `"queue"`;
      \}, \{
        `kind`: `"dynamics365Activity"`;
        `label`: `"Dynamics 365 Activity"`;
        `schemaName`: `"activitypointer"`;
     \}\];
     `requiresCredential`: `true`;
   \}, \{
     `audiences`: readonly \[`"customer-facing"`, `"internal-support"`, `"mixed"`\];
     `capability`: `"handoff"`;
     `changesWorkflow`: `true`;
     `description`: `"Uses Dataverse incident, annotation, and selected queue operations in SDK-user-configured record handoff workflows; this does not imply native Omnichannel conversation transfer or live-work-item mutation."`;
     `exposesSensitiveData`: `true`;
     `label`: `"Attach handoff to Dynamics"`;
     `providerObjects`: readonly \[\{
        `kind`: `"dynamics365Incident"`;
        `label`: `"Dynamics 365 Case"`;
        `schemaName`: `"incident"`;
      \}, \{
        `kind`: `"dynamics365Annotation"`;
        `label`: `"Dynamics 365 Annotation"`;
        `schemaName`: `"annotation"`;
      \}, \{
        `kind`: `"dynamics365Queue"`;
        `label`: `"Dynamics 365 Queue"`;
        `schemaName`: `"queue"`;
     \}\];
     `requiresCredential`: `true`;
     `sideEffect`: `true`;
  \}\];
  `category`: `"ticketing"`;
  `channelAudiences`: readonly \[`"customer-facing"`, `"internal-support"`, `"mixed"`\];
  `coverage`: \{
     `evidence`: readonly \[\{
        `label`: `"Microsoft Dataverse Web API overview"`;
        `url`: `"https://learn.microsoft.com/en-us/power-apps/developer/data-platform/webapi/overview"`;
      \}, \{
        `label`: `"dynamics-web-api Dataverse helper"`;
        `url`: `"https://github.com/AleksandrRogov/DynamicsWebApi"`;
      \}, \{
        `label`: `"Dynamics 365 Customer Service incident table reference"`;
        `url`: `"https://learn.microsoft.com/en-us/dynamics365/customer-service/develop/reference/entities/incident"`;
      \}, \{
        `label`: `"Dataverse EntityDefinitions metadata queries"`;
        `url`: `"https://learn.microsoft.com/en-us/power-apps/developer/data-platform/webapi/query-metadata-web-api"`;
      \}, \{
        `label`: `"Dataverse WhoAmI Function"`;
        `url`: `"https://learn.microsoft.com/en-us/power-apps/developer/data-platform/webapi/reference/whoami?view=dataverse-latest"`;
      \}, \{
        `label`: `"Dataverse Note/Annotation table reference"`;
        `url`: `"https://learn.microsoft.com/en-us/power-apps/developer/data-platform/reference/entities/annotation"`;
      \}, \{
        `label`: `"Dataverse ActivityPointer table reference"`;
        `url`: `"https://learn.microsoft.com/en-us/power-apps/developer/data-platform/reference/entities/activitypointer"`;
      \}, \{
        `label`: `"Dataverse queue EntityType reference"`;
        `url`: `"https://learn.microsoft.com/en-us/power-apps/developer/data-platform/webapi/reference/queue"`;
      \}, \{
        `label`: `"Dataverse AddToQueue Action"`;
        `url`: `"https://learn.microsoft.com/en-us/power-apps/developer/data-platform/webapi/reference/addtoqueue?view=dataverse-latest"`;
      \}, \{
        `label`: `"Dynamics 365 Omnichannel JavaScript API"`;
        `url`: `"https://learn.microsoft.com/en-us/dynamics365/customer-service/develop/omnichannel-api-reference"`;
      \}, \{
        `label`: `"Dynamics 365 custom messaging channel table"`;
        `url`: `"https://learn.microsoft.com/en-us/dynamics365/customer-service/develop/reference/entities/msdyn_occustommessagingchannel"`;
      \}, \{
        `label`: `"Dynamics 365 getConversations Omnichannel API"`;
        `url`: `"https://learn.microsoft.com/en-us/dynamics365/customer-service/develop/reference/methods/getconversations"`;
     \}\];
     `notes`: readonly \[`"Coverage is limited to Dataverse incident CRUD/search, selected metadata/readiness helpers, incident notes via annotations, queue AddToQueue, and queue/activity reads used by Cognidesk support workflows."`, `"Implementation uses dynamics-web-api 2.5.0; broader Dataverse Web API capabilities remain available through the rawClient escape hatch but are not Cognidesk adapter coverage."`, `` "Annotation note creation supports bounded inline annotation document fields (`filename`, `documentbody`, `mimetype`) on the Dataverse annotation record; this is not a complete file/attachment lifecycle." ``, `"This is not full Microsoft Dataverse, Dynamics 365 Customer Service, activity, annotation attachment, relationship metadata, broader queue routing, or custom action API coverage."`\];
     `scope`: `"support-workflow-subset"`;
  \};
  `credentialRequirements`: readonly \[\{
     `id`: `"dynamics365-instance"`;
     `label`: `"Dynamics 365 Dataverse environment URL"`;
     `required`: `true`;
   \}, \{
     `id`: `"dynamics365-api-access"`;
     `label`: `"Dynamics 365 OAuth access"`;
     `metadata`: \{
        `privilegeGuidance`: `"Delegated clients request <environment-url>/user_impersonation; confidential clients commonly request <environment-url>/.default. Dataverse security roles still govern incident, annotation, queue, activity, and AddToQueue access."`;
        `scopeKind`: `"provider-oauth-scopes"`;
     \};
     `required`: `true`;
     `scopes`: readonly \[`"user_impersonation"`\];
  \}\];
  `directions`: readonly \[`"bidirectional"`\];
  `id`: `"ticketing.dynamics365"`;
  `limitations`: readonly \[`"Dataverse table customizations, required fields, queues, owners, security roles, and routing rules are SDK-user configuration."`, `"Unified Routing live-work-item mutation is provider-sensitive and must not be inferred from typed AddToQueue support."`\];
  `maintainers`: readonly \[\{
     `name`: `"Cognidesk"`;
     `type`: `"official"`;
  \}\];
  `metadata`: \{
     `channelCoverage`: \{
        `activities`: `"typed-list"`;
        `annotationAttachmentLifecycle`: `"provider-supported-not-typed"`;
        `annotationInlineDocumentFields`: `"typed-selected"`;
        `annotationsCaseNotes`: `"typed-create-list"`;
        `broaderDataverseApi`: `"provider-supported-raw-client"`;
        `ccaasConversationActions`: `"provider-supported-not-typed"`;
        `conversationsLiveWorkItems`: `"provider-supported-not-typed"`;
        `customActions`: `"not-covered"`;
        `customMessagingChannels`: `"provider-supported-not-typed"`;
        `incidents`: `"typed-crud-search"`;
        `linkToConversation`: `"provider-supported-client-sdk-not-typed"`;
        `messagingApis`: `"provider-supported-not-typed"`;
        `metadataReadiness`: `"typed-selected"`;
        `omnichannelLiveChatWidget`: `"provider-supported-client-sdk-not-typed"`;
        `queueRouting`: `"typed-selected"`;
        `queues`: `"typed-list"`;
        `relationshipMetadata`: `"not-covered"`;
        `transcriptAnnotations`: `"provider-supported-not-typed"`;
        `unifiedRoutingLiveWorkItemMutation`: `"provider-supported-not-typed"`;
     \};
     `checkedProviderApiCoverage`: \{
        `coverageArtifact`: `"docs/provider-coverage/dynamics365-checked-dataverse-customer-service-2026-06-18.inventory.json"`;
        `familyCount`: `4`;
        `fullCoverageExportRequirement`: `"Full environment-specific Dataverse/Dynamics coverage requires the SDK user's $metadata/CSDL, EntityDefinitions, solution customizations, enabled Dynamics 365 Customer Service products, security roles, and custom action/function export."`;
        `gapFamilyCount`: `1`;
        `implementedFamilyCount`: `3`;
        `implementedOperationCount`: `11`;
        `sourceKind`: `"checked-endpoint-family-inventory"`;
        `verifiedAt`: `"2026-06-18"`;
     \};
     `implementation`: \{
        `manifestImport`: `"no-sdk-client-initialization"`;
        `rawClientEscapeHatch`: `"Dynamics365TicketingClient.rawClient/getRawClient()"`;
        `runtimePackage`: `"@cognidesk/integration-ticketing-dynamics365"`;
        `sdkPackage`: `"dynamics-web-api"`;
        `sdkVersionRange`: `"2.5.0"`;
        `strategy`: `"sdk-backed"`;
     \};
  \};
  `name`: `"Microsoft Dynamics 365 Customer Service"`;
  `operations`: \{
     `alias`: `string`;
     `audience?`: `"customer-facing"` \| `"internal-support"` \| `"mixed"`;
     `audiences?`: (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[];
     `capability`: `string`;
     `changesWorkflow?`: `boolean`;
     `description?`: `string`;
     `exposesSensitiveData?`: `boolean`;
     `extension?`: `boolean`;
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
  `packageName`: `"@cognidesk/integration-ticketing-dynamics365"`;
  `privacyNotes`: readonly \[`"Dynamics cases can contain customer identity, support summaries, entitlements, queue and owner metadata, and internal notes."`, `"Dynamics OAuth credentials stay server-side and Studio receives only readiness."`\];
  `provider`: `"dynamics365"`;
  `trustLevel`: `"official"`;
\}, [`Dynamics365JsonObject`](#dynamics365jsonobject), [`IntegrationOperationHandlers`](../../../packages/integration-kit/dist.md#integrationoperationhandlers)\>

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

### createDynamics365TicketingOperationHandlers()

```ts
function createDynamics365TicketingOperationHandlers(client): IntegrationOperationHandlers;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `client` | [`Dynamics365TicketingOperationsClient`](#dynamics365ticketingoperationsclient) |

#### Returns

[`IntegrationOperationHandlers`](../../../packages/integration-kit/dist.md#integrationoperationhandlers)

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
