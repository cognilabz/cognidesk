# integrations/ticketing/pega-customer-service/dist

## Classes

### PegaCustomerServiceProviderApiError

#### Extends

- `Error`

#### Constructors

##### Constructor

```ts
new PegaCustomerServiceProviderApiError(input): PegaCustomerServiceProviderApiError;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`PegaCustomerServiceProviderApiErrorInput`](#pegacustomerserviceproviderapierrorinput) |

###### Returns

[`PegaCustomerServiceProviderApiError`](#pegacustomerserviceproviderapierror)

###### Overrides

```ts
Error.constructor
```

#### Properties

##### body

```ts
readonly body: unknown;
```

##### provider

```ts
readonly provider: "pega-customer-service" = "pega-customer-service";
```

##### response

```ts
readonly response: PegaCustomerServiceProviderApiErrorResponseMetadata;
```

##### status

```ts
readonly status: number;
```

## Interfaces

### PegaAssignmentActionInput

#### Properties

##### actionId

```ts
actionId: string;
```

##### assignmentId

```ts
assignmentId: string;
```

##### content?

```ts
optional content?: PegaCustomerServiceJsonObject;
```

##### eTag?

```ts
optional eTag?: string;
```

##### fields?

```ts
optional fields?: PegaCustomerServiceJsonObject;
```

##### pageInstructions?

```ts
optional pageInstructions?: PegaCustomerServiceJsonValue[];
```

***

### PegaCasesResult

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | [`PegaCaseResource`](#pegacaseresource) |

#### Properties

##### cases

```ts
cases: T[];
```

##### count?

```ts
optional count?: number;
```

***

### PegaCreateCaseInput

#### Properties

##### caseTypeId

```ts
caseTypeId: string;
```

##### content?

```ts
optional content?: PegaCustomerServiceJsonObject;
```

##### fields?

```ts
optional fields?: PegaCustomerServiceJsonObject;
```

##### pageInstructions?

```ts
optional pageInstructions?: PegaCustomerServiceJsonValue[];
```

##### parentCaseId?

```ts
optional parentCaseId?: string;
```

##### processId?

```ts
optional processId?: string;
```

***

### PegaCustomerServiceCredentialStatusInput

#### Properties

##### accessToken?

```ts
optional accessToken?: string;
```

##### apiAccessConfigured?

```ts
optional apiAccessConfigured?: boolean;
```

##### authConfigured?

```ts
optional authConfigured?: boolean;
```

##### baseUrl?

```ts
optional baseUrl?: string;
```

##### client?

```ts
optional client?: unknown;
```

##### hostProviderClientConfigured?

```ts
optional hostProviderClientConfigured?: boolean;
```

##### providerClient?

```ts
optional providerClient?: unknown;
```

##### scopes?

```ts
optional scopes?: string[];
```

***

### PegaCustomerServiceJsonObject

#### Extended by

- [`PegaCustomerServiceProviderExtensionFields`](#pegacustomerserviceproviderextensionfields)
- [`PegaCustomerServiceProviderResponse`](#pegacustomerserviceproviderresponse)

#### Indexable

```ts
[key: string]: PegaCustomerServiceProviderExtensionValue
```

***

### PegaCustomerServiceLiveCheckOptions

#### Properties

##### accessToken?

```ts
optional accessToken?: string;
```

##### apiBasePath?

```ts
optional apiBasePath?: string;
```

##### auth?

```ts
optional auth?: PegaCustomerServiceAuthOptions;
```

##### baseUrl?

```ts
optional baseUrl?: string;
```

##### client?

```ts
optional client?: Pick<PegaCustomerServiceProviderClient, "readiness">;
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

##### providerClient?

```ts
optional providerClient?: Pick<PegaCustomerServiceProviderClient, "readiness">;
```

##### retry?

```ts
optional retry?:
  | number
  | ProviderJsonRetryOptions;
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

### PegaCustomerServiceProviderApiErrorInput

#### Properties

##### body

```ts
body: unknown;
```

##### message

```ts
message: string;
```

##### response

```ts
response: PegaCustomerServiceProviderApiErrorResponseMetadata;
```

##### status

```ts
status: number;
```

***

### PegaCustomerServiceProviderApiErrorResponseMetadata

#### Properties

##### headers

```ts
headers: Record<string, string>;
```

##### requestId?

```ts
optional requestId?: string;
```

##### statusText

```ts
statusText: string;
```

##### url

```ts
url: string;
```

***

### PegaCustomerServiceProviderClient

#### Extended by

- [`PegaCustomerServiceTicketingClient`](#pegacustomerserviceticketingclient)

#### Methods

##### createCase()

```ts
createCase(input): Promise<PegaCaseResource>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`PegaCreateCaseInput`](#pegacreatecaseinput) |

###### Returns

`Promise`\<[`PegaCaseResource`](#pegacaseresource)\>

##### getCase()

```ts
getCase(caseId): Promise<PegaCaseResource>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `caseId` | `string` |

###### Returns

`Promise`\<[`PegaCaseResource`](#pegacaseresource)\>

##### listCaseTypes()

```ts
listCaseTypes(): Promise<PegaCaseTypeResource[]>;
```

###### Returns

`Promise`\<[`PegaCaseTypeResource`](#pegacasetyperesource)[]\>

##### performAssignmentAction()

```ts
performAssignmentAction(input): Promise<PegaCustomerServiceProviderResponse>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`PegaAssignmentActionInput`](#pegaassignmentactioninput) |

###### Returns

`Promise`\<[`PegaCustomerServiceProviderResponse`](#pegacustomerserviceproviderresponse)\>

##### readiness()

```ts
readiness(): Promise<PegaCaseTypeResource[]>;
```

###### Returns

`Promise`\<[`PegaCaseTypeResource`](#pegacasetyperesource)[]\>

##### searchCases()

```ts
searchCases(input?): Promise<PegaCasesResult<PegaCaseResource>>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input?` | [`PegaSearchCasesInput`](#pegasearchcasesinput) |

###### Returns

`Promise`\<[`PegaCasesResult`](#pegacasesresult)\<[`PegaCaseResource`](#pegacaseresource)\>\>

##### updateCase()

```ts
updateCase(caseId, input): Promise<PegaCaseResource>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `caseId` | `string` |
| `input` | [`PegaUpdateCaseInput`](#pegaupdatecaseinput) |

###### Returns

`Promise`\<[`PegaCaseResource`](#pegacaseresource)\>

***

### PegaCustomerServiceProviderExtensionFields

#### Extends

- [`PegaCustomerServiceJsonObject`](#pegacustomerservicejsonobject)

#### Indexable

```ts
[key: string]: PegaCustomerServiceProviderExtensionValue
```

***

### PegaCustomerServiceProviderResponse

#### Extends

- [`PegaCustomerServiceJsonObject`](#pegacustomerservicejsonobject)

#### Indexable

```ts
[key: string]: PegaCustomerServiceProviderExtensionValue
```

***

### PegaCustomerServiceTicketingClient

#### Extends

- [`PegaCustomerServiceProviderClient`](#pegacustomerserviceproviderclient)

#### Methods

##### createCase()

```ts
createCase(input): Promise<PegaCaseResource>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`PegaCreateCaseInput`](#pegacreatecaseinput) |

###### Returns

`Promise`\<[`PegaCaseResource`](#pegacaseresource)\>

###### Inherited from

[`PegaCustomerServiceProviderClient`](#pegacustomerserviceproviderclient).[`createCase`](#createcase)

##### getCase()

```ts
getCase(caseId): Promise<PegaCaseResource>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `caseId` | `string` |

###### Returns

`Promise`\<[`PegaCaseResource`](#pegacaseresource)\>

###### Inherited from

[`PegaCustomerServiceProviderClient`](#pegacustomerserviceproviderclient).[`getCase`](#getcase)

##### listCaseTypes()

```ts
listCaseTypes(): Promise<PegaCaseTypeResource[]>;
```

###### Returns

`Promise`\<[`PegaCaseTypeResource`](#pegacasetyperesource)[]\>

###### Inherited from

[`PegaCustomerServiceProviderClient`](#pegacustomerserviceproviderclient).[`listCaseTypes`](#listcasetypes)

##### performAssignmentAction()

```ts
performAssignmentAction(input): Promise<PegaCustomerServiceProviderResponse>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`PegaAssignmentActionInput`](#pegaassignmentactioninput) |

###### Returns

`Promise`\<[`PegaCustomerServiceProviderResponse`](#pegacustomerserviceproviderresponse)\>

###### Inherited from

[`PegaCustomerServiceProviderClient`](#pegacustomerserviceproviderclient).[`performAssignmentAction`](#performassignmentaction)

##### readiness()

```ts
readiness(): Promise<PegaCaseTypeResource[]>;
```

###### Returns

`Promise`\<[`PegaCaseTypeResource`](#pegacasetyperesource)[]\>

###### Inherited from

[`PegaCustomerServiceProviderClient`](#pegacustomerserviceproviderclient).[`readiness`](#readiness)

##### searchCases()

```ts
searchCases(input?): Promise<PegaCasesResult<PegaCaseResource>>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input?` | [`PegaSearchCasesInput`](#pegasearchcasesinput) |

###### Returns

`Promise`\<[`PegaCasesResult`](#pegacasesresult)\<[`PegaCaseResource`](#pegacaseresource)\>\>

###### Inherited from

[`PegaCustomerServiceProviderClient`](#pegacustomerserviceproviderclient).[`searchCases`](#searchcases)

##### updateCase()

```ts
updateCase(caseId, input): Promise<PegaCaseResource>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `caseId` | `string` |
| `input` | [`PegaUpdateCaseInput`](#pegaupdatecaseinput) |

###### Returns

`Promise`\<[`PegaCaseResource`](#pegacaseresource)\>

###### Inherited from

[`PegaCustomerServiceProviderClient`](#pegacustomerserviceproviderclient).[`updateCase`](#updatecase)

***

### PegaCustomerServiceTicketingClientOptions

#### Extended by

- [`PegaCustomerServiceTicketingIntegrationOptions`](#pegacustomerserviceticketingintegrationoptions)

#### Properties

##### accessToken?

```ts
optional accessToken?: string;
```

##### apiBasePath?

```ts
optional apiBasePath?: string;
```

##### auth?

```ts
optional auth?: PegaCustomerServiceAuthOptions;
```

##### baseUrl?

```ts
optional baseUrl?: string;
```

##### client?

```ts
optional client?: PegaCustomerServiceProviderClient;
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

##### providerClient?

```ts
optional providerClient?: PegaCustomerServiceProviderClient;
```

##### retry?

```ts
optional retry?:
  | number
  | ProviderJsonRetryOptions;
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

### PegaCustomerServiceTicketingIntegrationOptions

#### Extends

- [`PegaCustomerServiceTicketingClientOptions`](#pegacustomerserviceticketingclientoptions)

#### Properties

##### accessToken?

```ts
optional accessToken?: string;
```

###### Inherited from

[`PegaCustomerServiceTicketingClientOptions`](#pegacustomerserviceticketingclientoptions).[`accessToken`](#accesstoken-2)

##### apiBasePath?

```ts
optional apiBasePath?: string;
```

###### Inherited from

[`PegaCustomerServiceTicketingClientOptions`](#pegacustomerserviceticketingclientoptions).[`apiBasePath`](#apibasepath-1)

##### auth?

```ts
optional auth?: PegaCustomerServiceAuthOptions;
```

###### Inherited from

[`PegaCustomerServiceTicketingClientOptions`](#pegacustomerserviceticketingclientoptions).[`auth`](#auth-1)

##### baseUrl?

```ts
optional baseUrl?: string;
```

###### Inherited from

[`PegaCustomerServiceTicketingClientOptions`](#pegacustomerserviceticketingclientoptions).[`baseUrl`](#baseurl-2)

##### client?

```ts
optional client?: PegaCustomerServiceProviderClient;
```

###### Inherited from

[`PegaCustomerServiceTicketingClientOptions`](#pegacustomerserviceticketingclientoptions).[`client`](#client-2)

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

[`PegaCustomerServiceTicketingClientOptions`](#pegacustomerserviceticketingclientoptions).[`fetch`](#fetch-1)

##### headers?

```ts
optional headers?: Record<string, string>;
```

###### Inherited from

[`PegaCustomerServiceTicketingClientOptions`](#pegacustomerserviceticketingclientoptions).[`headers`](#headers-2)

##### providerClient?

```ts
optional providerClient?: PegaCustomerServiceProviderClient;
```

###### Inherited from

[`PegaCustomerServiceTicketingClientOptions`](#pegacustomerserviceticketingclientoptions).[`providerClient`](#providerclient-2)

##### retry?

```ts
optional retry?:
  | number
  | ProviderJsonRetryOptions;
```

###### Inherited from

[`PegaCustomerServiceTicketingClientOptions`](#pegacustomerserviceticketingclientoptions).[`retry`](#retry-1)

##### signal?

```ts
optional signal?: AbortSignal;
```

###### Inherited from

[`PegaCustomerServiceTicketingClientOptions`](#pegacustomerserviceticketingclientoptions).[`signal`](#signal-1)

##### timeoutMs?

```ts
optional timeoutMs?: number;
```

###### Inherited from

[`PegaCustomerServiceTicketingClientOptions`](#pegacustomerserviceticketingclientoptions).[`timeoutMs`](#timeoutms-1)

***

### PegaReadCaseOperationInput

#### Properties

##### caseId

```ts
caseId: string;
```

***

### PegaSearchCasesInput

#### Properties

##### assignmentId?

```ts
optional assignmentId?: string;
```

##### caseTypeId?

```ts
optional caseTypeId?: string;
```

##### fields?

```ts
optional fields?: Record<string, string | number | boolean>;
```

##### page?

```ts
optional page?: number;
```

##### pageSize?

```ts
optional pageSize?: number;
```

##### status?

```ts
optional status?: string;
```

***

### PegaUpdateCaseInput

#### Extended by

- [`PegaUpdateCaseOperationInput`](#pegaupdatecaseoperationinput)

#### Properties

##### content?

```ts
optional content?: PegaCustomerServiceJsonObject;
```

##### fields?

```ts
optional fields?: PegaCustomerServiceJsonObject;
```

##### pageInstructions?

```ts
optional pageInstructions?: PegaCustomerServiceJsonValue[];
```

***

### PegaUpdateCaseOperationInput

#### Extends

- [`PegaUpdateCaseInput`](#pegaupdatecaseinput)

#### Properties

##### caseId

```ts
caseId: string;
```

##### content?

```ts
optional content?: PegaCustomerServiceJsonObject;
```

###### Inherited from

[`PegaUpdateCaseInput`](#pegaupdatecaseinput).[`content`](#content-2)

##### fields?

```ts
optional fields?: PegaCustomerServiceJsonObject;
```

###### Inherited from

[`PegaUpdateCaseInput`](#pegaupdatecaseinput).[`fields`](#fields-3)

##### pageInstructions?

```ts
optional pageInstructions?: PegaCustomerServiceJsonValue[];
```

###### Inherited from

[`PegaUpdateCaseInput`](#pegaupdatecaseinput).[`pageInstructions`](#pageinstructions-2)

## Type Aliases

### PegaCaseResource

```ts
type PegaCaseResource = PegaCustomerServiceProviderPayload & {
  caseID?: string;
  caseTypeID?: string;
  ID?: string;
  name?: string;
  stage?: string;
  status?: string;
};
```

#### Type Declaration

| Name | Type |
| ------ | ------ |
| `caseID?` | `string` |
| `caseTypeID?` | `string` |
| `ID?` | `string` |
| `name?` | `string` |
| `stage?` | `string` |
| `status?` | `string` |

***

### PegaCaseTypeResource

```ts
type PegaCaseTypeResource = PegaCustomerServiceProviderPayload & {
  ID?: string;
  name?: string;
  startingProcesses?: PegaCustomerServiceJsonObject[];
};
```

#### Type Declaration

| Name | Type |
| ------ | ------ |
| `ID?` | `string` |
| `name?` | `string` |
| `startingProcesses?` | [`PegaCustomerServiceJsonObject`](#pegacustomerservicejsonobject)[] |

***

### PegaCustomerServiceAuthOptions

```ts
type PegaCustomerServiceAuthOptions =
  | {
  accessToken: string;
  type: "bearer";
}
  | {
  headers: Record<string, string>;
  type: "headers";
};
```

***

### PegaCustomerServiceJsonPrimitive

```ts
type PegaCustomerServiceJsonPrimitive = string | number | boolean | null;
```

***

### PegaCustomerServiceJsonValue

```ts
type PegaCustomerServiceJsonValue =
  | PegaCustomerServiceJsonPrimitive
  | PegaCustomerServiceJsonObject
  | readonly PegaCustomerServiceJsonValue[];
```

***

### PegaCustomerServiceProviderExtensionValue

```ts
type PegaCustomerServiceProviderExtensionValue =
  | PegaCustomerServiceJsonValue
  | object
  | undefined;
```

***

### PegaCustomerServiceProviderPayload

```ts
type PegaCustomerServiceProviderPayload =
  | PegaCustomerServiceJsonObject
  | object;
```

***

### PegaCustomerServiceProviderQuery

```ts
type PegaCustomerServiceProviderQuery = Record<string, PegaCustomerServiceProviderExtensionValue>;
```

## Functions

### createPegaCustomerServiceRestProviderClient()

```ts
function createPegaCustomerServiceRestProviderClient(options): PegaCustomerServiceTicketingClient;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`PegaCustomerServiceTicketingClientOptions`](#pegacustomerserviceticketingclientoptions) |

#### Returns

[`PegaCustomerServiceTicketingClient`](#pegacustomerserviceticketingclient)

***

### createPegaCustomerServiceTicketingClient()

```ts
function createPegaCustomerServiceTicketingClient(options?): PegaCustomerServiceTicketingClient;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options?` | [`PegaCustomerServiceTicketingClientOptions`](#pegacustomerserviceticketingclientoptions) |

#### Returns

[`PegaCustomerServiceTicketingClient`](#pegacustomerserviceticketingclient)

***

### createPegaCustomerServiceTicketingIntegration()

```ts
function createPegaCustomerServiceTicketingIntegration(options?): DefinedIntegration<{
  capabilities: [{
     audiences: ["customer-facing", "internal-support", "mixed"];
     capability: "create-provider-object";
     changesWorkflow: true;
     description: "Creates Pega Customer Service cases through the built-in DX REST adapter or provider client override from SDK-user-selected workflows.";
     exposesSensitiveData: true;
     label: "Create Pega cases";
     providerObjects: [{
        kind: "pegaCase";
        label: "Pega Case";
        schemaName: "Pega-API-CaseManagement-Case";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     audiences: ["customer-facing", "internal-support", "mixed"];
     capability: "read-provider-object";
     description: "Reads Pega cases and case type metadata through the built-in DX REST adapter or provider client override.";
     exposesSensitiveData: true;
     label: "Read Pega cases";
     providerObjects: [{
        kind: "pegaCase";
        label: "Pega Case";
        schemaName: "Pega-API-CaseManagement-Case";
      }, {
        kind: "pegaCaseType";
        label: "Pega Case Type";
        schemaName: "Pega-API-CaseManagement-CaseType";
     }];
     requiresCredential: true;
   }, {
     audiences: ["internal-support", "mixed"];
     capability: "update-provider-object";
     changesWorkflow: true;
     description: "Updates Pega cases with SDK-user-supplied case data through the built-in DX REST adapter or provider client override.";
     exposesSensitiveData: true;
     label: "Update Pega cases";
     providerObjects: [{
        kind: "pegaCase";
        label: "Pega Case";
        schemaName: "Pega-API-CaseManagement-Case";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     audiences: ["customer-facing", "internal-support", "mixed"];
     capability: "search-provider-object";
     description: "Queries Pega cases with SDK-user-supplied case type, status, assignment, and pagination controls.";
     exposesSensitiveData: true;
     label: "Search Pega cases";
     providerObjects: [{
        kind: "pegaCase";
        label: "Pega Case";
        schemaName: "Pega-API-CaseManagement-Case";
     }];
     requiresCredential: true;
   }, {
     audiences: ["customer-facing", "internal-support", "mixed"];
     capability: "handoff";
     changesWorkflow: true;
     description: "Submits SDK-user-configured Pega DX assignment actions or case operations for human handoff workflows.";
     exposesSensitiveData: true;
     label: "Run Pega case handoff action";
     providerObjects: [{
        kind: "pegaCase";
        label: "Pega Case";
        schemaName: "Pega-API-CaseManagement-Case";
      }, {
        kind: "pegaAssignmentAction";
        label: "Pega Assignment Action";
        schemaName: "Pega-API-CaseManagement-AssignmentAction";
     }];
     requiresCredential: true;
     sideEffect: true;
  }];
  category: "ticketing";
  channelAudiences: ["customer-facing", "internal-support", "mixed"];
  coverage: {
     evidence: [{
        label: "Pega DX API overview";
        url: "https://docs.pega.com/bundle/dx-api/page/platform/dx-api/dx-api-overview.html";
      }, {
        label: "Pega DX API cases endpoints";
        url: "https://docs.pega.com/bundle/dx-api/page/platform/dx-api/managing-cases-dx-api.html";
      }, {
        label: "Pega DX API POST /cases";
        url: "https://docs.pega.com/bundle/dx-api/page/platform/dx-api/endpoint-post-cases.html";
      }, {
        label: "Pega DX API GET /cases";
        url: "https://docs.pega.com/bundle/dx-api/page/platform/dx-api/endpoint-get-cases.html";
     }];
     notes: ["Runtime coverage uses the built-in Pega DX REST adapter when baseUrl plus access credentials are provided; a host-injected PegaCustomerServiceProviderClient remains available as an override.", "Coverage is typed for Pega Customer Service case creation, case read/update, case search/listing, case-type listing, assignment action submission, and readiness checks used by Cognidesk support workflows.", "This is not full Pega Customer Service or Pega Platform API coverage; broader assignments/actions lifecycle, stages/process navigation, attachments, data views/pages, bulk actions, views, refresh/validation flows, security rules, and broader application administration remain outside this adapter."];
     scope: "support-workflow-subset";
  };
  credentialRequirements: [{
     description: "Optional host runtime override implementing PegaCustomerServiceProviderClient. When omitted, the package uses its built-in Pega DX REST adapter.";
     id: "pega-customer-service-provider-client";
     label: "Optional Pega Customer Service provider client override";
     metadata: {
        credentialOwnership: "host-managed-override";
        defaultClientPolicy: "built-in-dx-rest-adapter";
        defaultFetchClient: "built-in-provider-rest-adapter";
        defaultHttpClient: "built-in-fetch";
        injectionInterface: "PegaCustomerServiceProviderClient";
     };
     required: false;
   }, {
     description: "Pega application base URL used by the built-in DX REST adapter, or supplied by a host provider client override.";
     id: "pega-customer-service-instance";
     label: "Pega Customer Service base URL";
     metadata: {
        requiredWhen: "built-in-dx-rest-adapter";
     };
     required: false;
   }, {
     description: "Server-side Pega DX API access supplied as accessToken, auth headers, or encapsulated in a host provider client override.";
     id: "pega-customer-service-api-access";
     label: "Pega Customer Service DX API access";
     metadata: {
        privilegeGuidance: "These strings are Cognidesk capability labels, not official Pega OAuth scope names. Pega access depends on application OAuth/client configuration, roles, privileges, and case security.";
        requiredWhen: "built-in-dx-rest-adapter";
        scopeKind: "internal-capability-labels";
     };
     required: false;
     scopes: ["cases:read", "cases:write", "assignments:write"];
  }];
  directions: ["bidirectional"];
  id: "ticketing.pega-customer-service";
  limitations: ["The built-in adapter covers selected Pega DX case and assignment-action operations only; hosts can still inject a PegaCustomerServiceProviderClient for custom authentication, retries, or endpoint policy.", "Case types, starting processes, field requirements, assignment routing, security rules, data pages, and stage transitions are owned by the SDK user's Pega application and injected provider client.", "SDK users own case-type selection, field mapping, handoff timing, customer identity matching, notification policy, and retention before invoking Pega provider operations."];
  maintainers: [{
     name: "Cognidesk";
     type: "official";
  }];
  metadata: {
     channelCoverage: {
        assignmentActions: "typed-rest-adapter-submit";
        attachmentsDataPages: "provider-supported-not-typed";
        broaderCaseManagementAdmin: "not-covered";
        cases: "typed-rest-adapter-create-read-update-search";
        caseTypes: "typed-rest-adapter-list";
        readiness: "typed-rest-adapter-list";
        stageLifecycleActions: "provider-supported-not-typed";
     };
     checkedProviderApiCoverage: {
        checkedFamilyCount: 4;
        coverageArtifact: "docs/provider-coverage/pega-customer-service-checked-dx-api-2026-06-18.inventory.json";
        gapFamilyCount: 1;
        implementationOwnership: "built-in-provider-rest-adapter";
        implementedFamilyCount: 3;
        implementedOperationCount: 6;
        sourceKind: "checked-endpoint-family-inventory";
        verifiedAt: "2026-06-18";
     };
     implementation: {
        adapterKind: "no-official-sdk-rest-adapter";
        defaultFetchClient: "built-in-provider-rest-adapter";
        defaultHttpClient: "built-in-fetch";
        manifestImport: "no-client-initialization";
        providerClientInterface: "PegaCustomerServiceProviderClient";
        providerClientOverride: true;
        strategy: "provider-rest-adapter";
     };
     implementationStrategy: {
        checkedAt: "2026-06-25";
        reason: "No suitable official server-side JavaScript SDK was found for Pega Customer Service case operations; current Pega JavaScript SDK surfaces are Constellation UI/client orchestration assets, while DX API remains documented as REST endpoints.";
        rejectedLibraries: readonly [{
           packageName: "@pega/constellationjs";
           reason: "Pega-maintained package, but it delivers ConstellationJS engine files rather than a server-side Customer Service case client.";
           result: "not-used-as-package-default";
         }, {
           packageName: "@pega/auth";
           reason: "Pega-maintained OAuth client infrastructure for Infinity and Launchpad, but not a typed Customer Service or DX case operations client.";
           result: "not-used-as-package-default";
         }, {
           packageName: "pegasystems/react-sdk";
           reason: "Pega-maintained React SDK for Constellation DX components and alternative UI integration, not a backend ticketing provider client for Cognidesk operations.";
           result: "not-used-as-package-default";
        }];
        strategy: "no-official-sdk-rest-adapter";
     };
     providerClient: {
        defaultClient: "built-in-dx-rest-adapter";
        importPolicy: "optional-host-override";
        injectionPolicy: "optional-runtime-override";
        interface: "PegaCustomerServiceProviderClient";
     };
     providerRestAdapterSupportSurface: {
        adapterKind: "no-official-sdk-rest-adapter";
        checkedAt: "2026-06-25";
        operations: readonly [{
           alias: "ticket.create";
           providerClientMethod: "createCase";
         }, {
           alias: "ticket.read";
           providerClientMethod: "getCase";
         }, {
           alias: "ticket.update";
           providerClientMethod: "updateCase";
         }, {
           alias: "ticket.search";
           providerClientMethod: "searchCases";
         }, {
           alias: "pega-customer-service.caseTypes.list";
           providerClientMethod: "listCaseTypes";
         }, {
           alias: "pega-customer-service.assignmentAction.submit";
           providerClientMethod: "performAssignmentAction";
        }];
        source: "Built-in Pega DX REST adapter";
     };
  };
  name: "Pega Customer Service";
  operations: [{
     alias: "ticket.create";
     audiences: ["customer-facing", "internal-support", "mixed"];
     capability: "create-provider-object";
     changesWorkflow: true;
     exposesSensitiveData: true;
     providerObject: "pegaCase";
     requiresCredential: true;
     sideEffect: true;
   }, {
     alias: "ticket.read";
     audiences: ["customer-facing", "internal-support", "mixed"];
     capability: "read-provider-object";
     exposesSensitiveData: true;
     providerObject: "pegaCase";
     requiresCredential: true;
   }, {
     alias: "ticket.update";
     audiences: ["internal-support", "mixed"];
     capability: "update-provider-object";
     changesWorkflow: true;
     exposesSensitiveData: true;
     providerObject: "pegaCase";
     requiresCredential: true;
     sideEffect: true;
  }];
  packageName: "@cognidesk/integration-ticketing-pega-customer-service";
  privacyNotes: ["Pega cases can contain customer identity, interaction details, assignments, statuses, case data, attachments metadata, and internal workflow context.", "Pega API credentials stay server-side and Studio receives only readiness and scope status."];
  provider: "pega-customer-service";
  trustLevel: "official";
}, PegaCustomerServiceJsonObject, {
  pega-customer-service.assignmentAction.submit: (input) => Promise<PegaCustomerServiceProviderResponse>;
  pega-customer-service.caseTypes.list: () => Promise<PegaCaseTypeResource[]>;
  ticket.create: (input) => Promise<PegaCaseResource>;
  ticket.read: (input) => Promise<PegaCaseResource>;
  ticket.search: (input?) => Promise<PegaCasesResult<PegaCaseResource>>;
  ticket.update: (input) => Promise<PegaCaseResource>;
}>;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options?` | [`PegaCustomerServiceTicketingIntegrationOptions`](#pegacustomerserviceticketingintegrationoptions) |

#### Returns

[`DefinedIntegration`](../../../packages/integration-kit/dist.md#definedintegration)\<\{
  `capabilities`: \[\{
     `audiences`: \[`"customer-facing"`, `"internal-support"`, `"mixed"`\];
     `capability`: `"create-provider-object"`;
     `changesWorkflow`: `true`;
     `description`: `"Creates Pega Customer Service cases through the built-in DX REST adapter or provider client override from SDK-user-selected workflows."`;
     `exposesSensitiveData`: `true`;
     `label`: `"Create Pega cases"`;
     `providerObjects`: \[\{
        `kind`: `"pegaCase"`;
        `label`: `"Pega Case"`;
        `schemaName`: `"Pega-API-CaseManagement-Case"`;
     \}\];
     `requiresCredential`: `true`;
     `sideEffect`: `true`;
   \}, \{
     `audiences`: \[`"customer-facing"`, `"internal-support"`, `"mixed"`\];
     `capability`: `"read-provider-object"`;
     `description`: `"Reads Pega cases and case type metadata through the built-in DX REST adapter or provider client override."`;
     `exposesSensitiveData`: `true`;
     `label`: `"Read Pega cases"`;
     `providerObjects`: \[\{
        `kind`: `"pegaCase"`;
        `label`: `"Pega Case"`;
        `schemaName`: `"Pega-API-CaseManagement-Case"`;
      \}, \{
        `kind`: `"pegaCaseType"`;
        `label`: `"Pega Case Type"`;
        `schemaName`: `"Pega-API-CaseManagement-CaseType"`;
     \}\];
     `requiresCredential`: `true`;
   \}, \{
     `audiences`: \[`"internal-support"`, `"mixed"`\];
     `capability`: `"update-provider-object"`;
     `changesWorkflow`: `true`;
     `description`: `"Updates Pega cases with SDK-user-supplied case data through the built-in DX REST adapter or provider client override."`;
     `exposesSensitiveData`: `true`;
     `label`: `"Update Pega cases"`;
     `providerObjects`: \[\{
        `kind`: `"pegaCase"`;
        `label`: `"Pega Case"`;
        `schemaName`: `"Pega-API-CaseManagement-Case"`;
     \}\];
     `requiresCredential`: `true`;
     `sideEffect`: `true`;
   \}, \{
     `audiences`: \[`"customer-facing"`, `"internal-support"`, `"mixed"`\];
     `capability`: `"search-provider-object"`;
     `description`: `"Queries Pega cases with SDK-user-supplied case type, status, assignment, and pagination controls."`;
     `exposesSensitiveData`: `true`;
     `label`: `"Search Pega cases"`;
     `providerObjects`: \[\{
        `kind`: `"pegaCase"`;
        `label`: `"Pega Case"`;
        `schemaName`: `"Pega-API-CaseManagement-Case"`;
     \}\];
     `requiresCredential`: `true`;
   \}, \{
     `audiences`: \[`"customer-facing"`, `"internal-support"`, `"mixed"`\];
     `capability`: `"handoff"`;
     `changesWorkflow`: `true`;
     `description`: `"Submits SDK-user-configured Pega DX assignment actions or case operations for human handoff workflows."`;
     `exposesSensitiveData`: `true`;
     `label`: `"Run Pega case handoff action"`;
     `providerObjects`: \[\{
        `kind`: `"pegaCase"`;
        `label`: `"Pega Case"`;
        `schemaName`: `"Pega-API-CaseManagement-Case"`;
      \}, \{
        `kind`: `"pegaAssignmentAction"`;
        `label`: `"Pega Assignment Action"`;
        `schemaName`: `"Pega-API-CaseManagement-AssignmentAction"`;
     \}\];
     `requiresCredential`: `true`;
     `sideEffect`: `true`;
  \}\];
  `category`: `"ticketing"`;
  `channelAudiences`: \[`"customer-facing"`, `"internal-support"`, `"mixed"`\];
  `coverage`: \{
     `evidence`: \[\{
        `label`: `"Pega DX API overview"`;
        `url`: `"https://docs.pega.com/bundle/dx-api/page/platform/dx-api/dx-api-overview.html"`;
      \}, \{
        `label`: `"Pega DX API cases endpoints"`;
        `url`: `"https://docs.pega.com/bundle/dx-api/page/platform/dx-api/managing-cases-dx-api.html"`;
      \}, \{
        `label`: `"Pega DX API POST /cases"`;
        `url`: `"https://docs.pega.com/bundle/dx-api/page/platform/dx-api/endpoint-post-cases.html"`;
      \}, \{
        `label`: `"Pega DX API GET /cases"`;
        `url`: `"https://docs.pega.com/bundle/dx-api/page/platform/dx-api/endpoint-get-cases.html"`;
     \}\];
     `notes`: \[`"Runtime coverage uses the built-in Pega DX REST adapter when baseUrl plus access credentials are provided; a host-injected PegaCustomerServiceProviderClient remains available as an override."`, `"Coverage is typed for Pega Customer Service case creation, case read/update, case search/listing, case-type listing, assignment action submission, and readiness checks used by Cognidesk support workflows."`, `"This is not full Pega Customer Service or Pega Platform API coverage; broader assignments/actions lifecycle, stages/process navigation, attachments, data views/pages, bulk actions, views, refresh/validation flows, security rules, and broader application administration remain outside this adapter."`\];
     `scope`: `"support-workflow-subset"`;
  \};
  `credentialRequirements`: \[\{
     `description`: `"Optional host runtime override implementing PegaCustomerServiceProviderClient. When omitted, the package uses its built-in Pega DX REST adapter."`;
     `id`: `"pega-customer-service-provider-client"`;
     `label`: `"Optional Pega Customer Service provider client override"`;
     `metadata`: \{
        `credentialOwnership`: `"host-managed-override"`;
        `defaultClientPolicy`: `"built-in-dx-rest-adapter"`;
        `defaultFetchClient`: `"built-in-provider-rest-adapter"`;
        `defaultHttpClient`: `"built-in-fetch"`;
        `injectionInterface`: `"PegaCustomerServiceProviderClient"`;
     \};
     `required`: `false`;
   \}, \{
     `description`: `"Pega application base URL used by the built-in DX REST adapter, or supplied by a host provider client override."`;
     `id`: `"pega-customer-service-instance"`;
     `label`: `"Pega Customer Service base URL"`;
     `metadata`: \{
        `requiredWhen`: `"built-in-dx-rest-adapter"`;
     \};
     `required`: `false`;
   \}, \{
     `description`: `"Server-side Pega DX API access supplied as accessToken, auth headers, or encapsulated in a host provider client override."`;
     `id`: `"pega-customer-service-api-access"`;
     `label`: `"Pega Customer Service DX API access"`;
     `metadata`: \{
        `privilegeGuidance`: `"These strings are Cognidesk capability labels, not official Pega OAuth scope names. Pega access depends on application OAuth/client configuration, roles, privileges, and case security."`;
        `requiredWhen`: `"built-in-dx-rest-adapter"`;
        `scopeKind`: `"internal-capability-labels"`;
     \};
     `required`: `false`;
     `scopes`: \[`"cases:read"`, `"cases:write"`, `"assignments:write"`\];
  \}\];
  `directions`: \[`"bidirectional"`\];
  `id`: `"ticketing.pega-customer-service"`;
  `limitations`: \[`"The built-in adapter covers selected Pega DX case and assignment-action operations only; hosts can still inject a PegaCustomerServiceProviderClient for custom authentication, retries, or endpoint policy."`, `"Case types, starting processes, field requirements, assignment routing, security rules, data pages, and stage transitions are owned by the SDK user's Pega application and injected provider client."`, `"SDK users own case-type selection, field mapping, handoff timing, customer identity matching, notification policy, and retention before invoking Pega provider operations."`\];
  `maintainers`: \[\{
     `name`: `"Cognidesk"`;
     `type`: `"official"`;
  \}\];
  `metadata`: \{
     `channelCoverage`: \{
        `assignmentActions`: `"typed-rest-adapter-submit"`;
        `attachmentsDataPages`: `"provider-supported-not-typed"`;
        `broaderCaseManagementAdmin`: `"not-covered"`;
        `cases`: `"typed-rest-adapter-create-read-update-search"`;
        `caseTypes`: `"typed-rest-adapter-list"`;
        `readiness`: `"typed-rest-adapter-list"`;
        `stageLifecycleActions`: `"provider-supported-not-typed"`;
     \};
     `checkedProviderApiCoverage`: \{
        `checkedFamilyCount`: `4`;
        `coverageArtifact`: `"docs/provider-coverage/pega-customer-service-checked-dx-api-2026-06-18.inventory.json"`;
        `gapFamilyCount`: `1`;
        `implementationOwnership`: `"built-in-provider-rest-adapter"`;
        `implementedFamilyCount`: `3`;
        `implementedOperationCount`: `6`;
        `sourceKind`: `"checked-endpoint-family-inventory"`;
        `verifiedAt`: `"2026-06-18"`;
     \};
     `implementation`: \{
        `adapterKind`: `"no-official-sdk-rest-adapter"`;
        `defaultFetchClient`: `"built-in-provider-rest-adapter"`;
        `defaultHttpClient`: `"built-in-fetch"`;
        `manifestImport`: `"no-client-initialization"`;
        `providerClientInterface`: `"PegaCustomerServiceProviderClient"`;
        `providerClientOverride`: `true`;
        `strategy`: `"provider-rest-adapter"`;
     \};
     `implementationStrategy`: \{
        `checkedAt`: `"2026-06-25"`;
        `reason`: `"No suitable official server-side JavaScript SDK was found for Pega Customer Service case operations; current Pega JavaScript SDK surfaces are Constellation UI/client orchestration assets, while DX API remains documented as REST endpoints."`;
        `rejectedLibraries`: readonly \[\{
           `packageName`: `"@pega/constellationjs"`;
           `reason`: `"Pega-maintained package, but it delivers ConstellationJS engine files rather than a server-side Customer Service case client."`;
           `result`: `"not-used-as-package-default"`;
         \}, \{
           `packageName`: `"@pega/auth"`;
           `reason`: `"Pega-maintained OAuth client infrastructure for Infinity and Launchpad, but not a typed Customer Service or DX case operations client."`;
           `result`: `"not-used-as-package-default"`;
         \}, \{
           `packageName`: `"pegasystems/react-sdk"`;
           `reason`: `"Pega-maintained React SDK for Constellation DX components and alternative UI integration, not a backend ticketing provider client for Cognidesk operations."`;
           `result`: `"not-used-as-package-default"`;
        \}\];
        `strategy`: `"no-official-sdk-rest-adapter"`;
     \};
     `providerClient`: \{
        `defaultClient`: `"built-in-dx-rest-adapter"`;
        `importPolicy`: `"optional-host-override"`;
        `injectionPolicy`: `"optional-runtime-override"`;
        `interface`: `"PegaCustomerServiceProviderClient"`;
     \};
     `providerRestAdapterSupportSurface`: \{
        `adapterKind`: `"no-official-sdk-rest-adapter"`;
        `checkedAt`: `"2026-06-25"`;
        `operations`: readonly \[\{
           `alias`: `"ticket.create"`;
           `providerClientMethod`: `"createCase"`;
         \}, \{
           `alias`: `"ticket.read"`;
           `providerClientMethod`: `"getCase"`;
         \}, \{
           `alias`: `"ticket.update"`;
           `providerClientMethod`: `"updateCase"`;
         \}, \{
           `alias`: `"ticket.search"`;
           `providerClientMethod`: `"searchCases"`;
         \}, \{
           `alias`: `"pega-customer-service.caseTypes.list"`;
           `providerClientMethod`: `"listCaseTypes"`;
         \}, \{
           `alias`: `"pega-customer-service.assignmentAction.submit"`;
           `providerClientMethod`: `"performAssignmentAction"`;
        \}\];
        `source`: `"Built-in Pega DX REST adapter"`;
     \};
  \};
  `name`: `"Pega Customer Service"`;
  `operations`: \[\{
     `alias`: `"ticket.create"`;
     `audiences`: \[`"customer-facing"`, `"internal-support"`, `"mixed"`\];
     `capability`: `"create-provider-object"`;
     `changesWorkflow`: `true`;
     `exposesSensitiveData`: `true`;
     `providerObject`: `"pegaCase"`;
     `requiresCredential`: `true`;
     `sideEffect`: `true`;
   \}, \{
     `alias`: `"ticket.read"`;
     `audiences`: \[`"customer-facing"`, `"internal-support"`, `"mixed"`\];
     `capability`: `"read-provider-object"`;
     `exposesSensitiveData`: `true`;
     `providerObject`: `"pegaCase"`;
     `requiresCredential`: `true`;
   \}, \{
     `alias`: `"ticket.update"`;
     `audiences`: \[`"internal-support"`, `"mixed"`\];
     `capability`: `"update-provider-object"`;
     `changesWorkflow`: `true`;
     `exposesSensitiveData`: `true`;
     `providerObject`: `"pegaCase"`;
     `requiresCredential`: `true`;
     `sideEffect`: `true`;
  \}\];
  `packageName`: `"@cognidesk/integration-ticketing-pega-customer-service"`;
  `privacyNotes`: \[`"Pega cases can contain customer identity, interaction details, assignments, statuses, case data, attachments metadata, and internal workflow context."`, `"Pega API credentials stay server-side and Studio receives only readiness and scope status."`\];
  `provider`: `"pega-customer-service"`;
  `trustLevel`: `"official"`;
\}, [`PegaCustomerServiceJsonObject`](#pegacustomerservicejsonobject), \{
  `pega-customer-service.assignmentAction.submit`: (`input`) => `Promise`\<[`PegaCustomerServiceProviderResponse`](#pegacustomerserviceproviderresponse)\>;
  `pega-customer-service.caseTypes.list`: () => `Promise`\<[`PegaCaseTypeResource`](#pegacasetyperesource)[]\>;
  `ticket.create`: (`input`) => `Promise`\<[`PegaCaseResource`](#pegacaseresource)\>;
  `ticket.read`: (`input`) => `Promise`\<[`PegaCaseResource`](#pegacaseresource)\>;
  `ticket.search`: (`input?`) => `Promise`\<[`PegaCasesResult`](#pegacasesresult)\<[`PegaCaseResource`](#pegacaseresource)\>\>;
  `ticket.update`: (`input`) => `Promise`\<[`PegaCaseResource`](#pegacaseresource)\>;
\}\>

***

### createPegaCustomerServiceTicketingLiveChecks()

```ts
function createPegaCustomerServiceTicketingLiveChecks(options?): {
  description: string;
  id: string;
  requiredCredentialIds: string[];
  run: Promise<{
     details: {
        caseTypeCount: number;
     };
  }>;
}[];
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options?` | [`PegaCustomerServiceLiveCheckOptions`](#pegacustomerservicelivecheckoptions) |

#### Returns

\{
  `description`: `string`;
  `id`: `string`;
  `requiredCredentialIds`: `string`[];
  `run`: `Promise`\<\{
     `details`: \{
        `caseTypeCount`: `number`;
     \};
  \}\>;
\}[]

***

### createPegaCustomerServiceTicketingOperationHandlers()

```ts
function createPegaCustomerServiceTicketingOperationHandlers(client): {
  pega-customer-service.assignmentAction.submit: (input) => Promise<PegaCustomerServiceProviderResponse>;
  pega-customer-service.caseTypes.list: () => Promise<PegaCaseTypeResource[]>;
  ticket.create: (input) => Promise<PegaCaseResource>;
  ticket.read: (input) => Promise<PegaCaseResource>;
  ticket.search: (input?) => Promise<PegaCasesResult<PegaCaseResource>>;
  ticket.update: (input) => Promise<PegaCaseResource>;
};
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `client` | [`PegaCustomerServiceTicketingClient`](#pegacustomerserviceticketingclient) |

#### Returns

```ts
{
  pega-customer-service.assignmentAction.submit: (input) => Promise<PegaCustomerServiceProviderResponse>;
  pega-customer-service.caseTypes.list: () => Promise<PegaCaseTypeResource[]>;
  ticket.create: (input) => Promise<PegaCaseResource>;
  ticket.read: (input) => Promise<PegaCaseResource>;
  ticket.search: (input?) => Promise<PegaCasesResult<PegaCaseResource>>;
  ticket.update: (input) => Promise<PegaCaseResource>;
}
```

| Name | Type |
| ------ | ------ |
| `pega-customer-service.assignmentAction.submit()` | (`input`) => `Promise`\<[`PegaCustomerServiceProviderResponse`](#pegacustomerserviceproviderresponse)\> |
| `pega-customer-service.caseTypes.list()` | () => `Promise`\<[`PegaCaseTypeResource`](#pegacasetyperesource)[]\> |
| `ticket.create()` | (`input`) => `Promise`\<[`PegaCaseResource`](#pegacaseresource)\> |
| `ticket.read()` | (`input`) => `Promise`\<[`PegaCaseResource`](#pegacaseresource)\> |
| `ticket.search()` | (`input?`) => `Promise`\<[`PegaCasesResult`](#pegacasesresult)\<[`PegaCaseResource`](#pegacaseresource)\>\> |
| `ticket.update()` | (`input`) => `Promise`\<[`PegaCaseResource`](#pegacaseresource)\> |

***

### pegaCustomerServiceTicketingCredentialStatuses()

```ts
function pegaCustomerServiceTicketingCredentialStatuses(input): {
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
| `input` | [`PegaCustomerServiceCredentialStatusInput`](#pegacustomerservicecredentialstatusinput) |

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

### pegaCustomerServiceTicketingProviderManifest

Re-exports [pegaCustomerServiceTicketingProviderManifest](dist/manifest.md#pegacustomerserviceticketingprovidermanifest)

***

### pegaCustomerServiceTicketingProviderManifestInput

Re-exports [pegaCustomerServiceTicketingProviderManifestInput](dist/manifest.md#pegacustomerserviceticketingprovidermanifestinput)
