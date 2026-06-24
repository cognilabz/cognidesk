# integrations/ticketing/pega-customer-service/dist

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

##### instanceUrl?

```ts
optional instanceUrl?: string;
```

##### password?

```ts
optional password?: string;
```

##### scopes?

```ts
optional scopes?: string[];
```

##### username?

```ts
optional username?: string;
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

##### client?

```ts
optional client?: Pick<PegaCustomerServiceTicketingClient, "readiness">;
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

[`PegaCustomerServiceTicketingClientOptions`](#pegacustomerserviceticketingclientoptions).[`fetch`](#fetch-1)

##### instanceUrl

```ts
instanceUrl: string;
```

###### Inherited from

[`PegaCustomerServiceTicketingClientOptions`](#pegacustomerserviceticketingclientoptions).[`instanceUrl`](#instanceurl-2)

##### password?

```ts
optional password?: string;
```

###### Inherited from

[`PegaCustomerServiceTicketingClientOptions`](#pegacustomerserviceticketingclientoptions).[`password`](#password-2)

##### username?

```ts
optional username?: string;
```

###### Inherited from

[`PegaCustomerServiceTicketingClientOptions`](#pegacustomerserviceticketingclientoptions).[`username`](#username-2)

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

### PegaCustomerServiceTicketingClientOptions

#### Extended by

- [`PegaCustomerServiceLiveCheckOptions`](#pegacustomerservicelivecheckoptions)
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

##### client?

```ts
optional client?: PegaCustomerServiceTicketingClient;
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

[`PegaCustomerServiceTicketingClientOptions`](#pegacustomerserviceticketingclientoptions).[`fetch`](#fetch-1)

##### instanceUrl

```ts
instanceUrl: string;
```

###### Inherited from

[`PegaCustomerServiceTicketingClientOptions`](#pegacustomerserviceticketingclientoptions).[`instanceUrl`](#instanceurl-2)

##### password?

```ts
optional password?: string;
```

###### Inherited from

[`PegaCustomerServiceTicketingClientOptions`](#pegacustomerserviceticketingclientoptions).[`password`](#password-2)

##### username?

```ts
optional username?: string;
```

###### Inherited from

[`PegaCustomerServiceTicketingClientOptions`](#pegacustomerserviceticketingclientoptions).[`username`](#username-2)

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

### createPegaCustomerServiceTicketingClient()

```ts
function createPegaCustomerServiceTicketingClient(options): PegaCustomerServiceTicketingClient;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`PegaCustomerServiceTicketingClientOptions`](#pegacustomerserviceticketingclientoptions) |

#### Returns

[`PegaCustomerServiceTicketingClient`](#pegacustomerserviceticketingclient)

***

### createPegaCustomerServiceTicketingIntegration()

```ts
function createPegaCustomerServiceTicketingIntegration(options): DefinedIntegration<{
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
     description: "Creates Pega Customer Service cases with the Pega DX API from SDK-user-selected workflows.";
     exposesSensitiveData: true;
     label: "Create Pega cases";
     providerObjects: readonly [{
        kind: "pegaCase";
        label: "Pega Case";
        schemaName: "Pega-API-CaseManagement-Case";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     audiences: readonly ["customer-facing", "internal-support", "mixed"];
     capability: "read-provider-object";
     description: "Reads Pega cases and case type metadata through the Pega DX API.";
     exposesSensitiveData: true;
     label: "Read Pega cases";
     providerObjects: readonly [{
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
     audiences: readonly ["internal-support", "mixed"];
     capability: "update-provider-object";
     changesWorkflow: true;
     description: "Updates Pega cases with SDK-user-supplied case data through the Pega DX API.";
     exposesSensitiveData: true;
     label: "Update Pega cases";
     providerObjects: readonly [{
        kind: "pegaCase";
        label: "Pega Case";
        schemaName: "Pega-API-CaseManagement-Case";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     audiences: readonly ["customer-facing", "internal-support", "mixed"];
     capability: "search-provider-object";
     description: "Queries Pega cases with SDK-user-supplied case type, status, assignment, and pagination controls.";
     exposesSensitiveData: true;
     label: "Search Pega cases";
     providerObjects: readonly [{
        kind: "pegaCase";
        label: "Pega Case";
        schemaName: "Pega-API-CaseManagement-Case";
     }];
     requiresCredential: true;
   }, {
     audiences: readonly ["customer-facing", "internal-support", "mixed"];
     capability: "handoff";
     changesWorkflow: true;
     description: "Submits SDK-user-configured Pega DX assignment actions or case operations for human handoff workflows.";
     exposesSensitiveData: true;
     label: "Run Pega case handoff action";
     providerObjects: readonly [{
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
  channelAudiences: readonly ["customer-facing", "internal-support", "mixed"];
  coverage: {
     evidence: readonly [{
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
      }, {
        label: "Pega DX API GET /cases/{ID}";
        url: "https://docs.pega.com/bundle/dx-api/page/platform/dx-api/endpoint-get-cases-id.html";
      }, {
        label: "Pega DX API PUT /cases/{ID}";
        url: "https://docs.pega.com/bundle/dx-api/page/platform/dx-api/endpoint-put-cases-id.html";
      }, {
        label: "Pega DX API GET /casetypes";
        url: "https://docs.pega.com/bundle/dx-api/page/platform/dx-api/endpoint-get-casetypes_0.html";
      }, {
        label: "Pega DX API PATCH /assignments/{assignmentID}/actions/{actionID}";
        url: "https://docs.pega.com/bundle/dx-api/page/platform/dx-api/endpoint-patch-assignments-assignmentid-actions-actionid.html";
     }];
     notes: readonly ["Coverage is typed for Pega DX API case creation, case read/update, case search/listing, case-type listing, assignment action submission, and readiness checks used by Cognidesk support workflows.", "This is not full Pega Customer Service or Pega Platform API coverage; broader assignments/actions lifecycle, stages/process navigation, attachments, data views/pages, bulk actions, views, refresh/validation flows, security rules, and broader application administration remain outside this adapter."];
     scope: "support-workflow-subset";
  };
  credentialRequirements: readonly [{
     description: "The SDK user's Pega Platform or Pega Customer Service application URL.";
     id: "pega-customer-service-instance";
     label: "Pega Customer Service instance URL";
     required: true;
   }, {
     description: "Server-side OAuth bearer access or Basic Auth credentials for Pega DX API endpoints with operator/client privileges for cases, case types, and assignment actions.";
     id: "pega-customer-service-api-access";
     label: "Pega DX API access";
     metadata: {
        privilegeGuidance: "These strings are Cognidesk capability labels, not proven official Pega OAuth scopes. Pega access depends on the operator/client access group and privileges for case list/read/create/update, case type read, and assignment action submission.";
        scopeKind: "internal-capability-labels";
     };
     required: true;
     scopes: readonly ["cases:read", "cases:write", "casetypes:read"];
  }];
  directions: readonly ["bidirectional"];
  id: "ticketing.pega-customer-service";
  limitations: readonly ["Case types, starting processes, field requirements, assignment routing, security rules, data pages, and stage transitions are owned by the SDK user's Pega application.", "SDK users own case-type selection, field mapping, handoff timing, customer identity matching, notification policy, and retention before calling Pega APIs."];
  maintainers: readonly [{
     name: "Cognidesk";
     type: "official";
  }];
  metadata: {
     channelCoverage: {
        assignmentActions: "typed-submit";
        attachmentsDataPages: "provider-supported-not-typed";
        broaderCaseManagementAdmin: "not-covered";
        cases: "typed-create-read-update-search";
        caseTypes: "typed-list";
        readiness: "typed-list";
        stageLifecycleActions: "provider-supported-not-typed";
     };
     checkedProviderApiCoverage: {
        checkedFamilyCount: 4;
        coverageArtifact: "docs/provider-coverage/pega-customer-service-checked-dx-api-2026-06-18.inventory.json";
        gapFamilyCount: 1;
        implementedFamilyCount: 3;
        implementedOperationCount: 6;
        sourceKind: "checked-endpoint-family-inventory";
        verifiedAt: "2026-06-18";
     };
     implementation: {
        strategy: "direct-http-support-slice";
     };
     implementationStrategy: {
        checkedAt: "2026-06-21";
        reason: "No suitable maintained server-side JavaScript SDK was found for Pega Customer Service/DX API case operations; current Pega JavaScript packages are Constellation UI/client orchestration assets.";
        rejectedLibraries: readonly [{
           integrity: "sha512-dPPo+e/ADjMwabHfQ5s9DX2P8IeJiSg6NPXFRLFkFZm1OFbkDevf3YoSpf5/XzWD3IqcBo0dx8NzV7tLjp4EJw==";
           packageName: "@pega/constellationjs";
           reason: "Pega-maintained package, but it provides ConstellationJS engine files rather than a server-side DX API case client.";
           version: "25.1.3";
        }];
        strategy: "direct-support-slice";
     };
     supportOperationSlice: {
        allowlistSha256: "6b4e3eb1f0a9b371002d8a3be22827c473680c7ce1335a0faf9d990e94cd32fd";
        checkedAt: "2026-06-21";
        operations: readonly [{
           alias: "ticket.create";
           method: "POST";
           path: "{apiBasePath}/cases";
         }, {
           alias: "ticket.read";
           method: "GET";
           path: "{apiBasePath}/cases/{ID}";
         }, {
           alias: "ticket.update";
           method: "PUT";
           path: "{apiBasePath}/cases/{ID}";
         }, {
           alias: "ticket.search";
           method: "GET";
           path: "{apiBasePath}/cases";
         }, {
           alias: "pega-customer-service.caseTypes.list";
           method: "GET";
           path: "{apiBasePath}/casetypes";
         }, {
           alias: "pega-customer-service.assignmentAction.submit";
           method: "PATCH";
           path: "{apiBasePath}/assignments/{assignmentID}/actions/{actionID}";
        }];
        sourceKind: "official-docs-reviewed-slice";
        sourceVersion: "/api/v1";
     };
  };
  name: "Pega Customer Service";
  operations: readonly [{
     alias: "ticket.create";
     audiences: readonly ["customer-facing", "internal-support", "mixed"];
     capability: "create-provider-object";
     changesWorkflow: true;
     exposesSensitiveData: true;
     providerObject: "pegaCase";
     requiresCredential: true;
     sideEffect: true;
   }, {
     alias: "ticket.read";
     audiences: readonly ["customer-facing", "internal-support", "mixed"];
     capability: "read-provider-object";
     exposesSensitiveData: true;
     providerObject: "pegaCase";
     requiresCredential: true;
   }, {
     alias: "ticket.update";
     audiences: readonly ["internal-support", "mixed"];
     capability: "update-provider-object";
     changesWorkflow: true;
     exposesSensitiveData: true;
     providerObject: "pegaCase";
     requiresCredential: true;
     sideEffect: true;
   }, {
     alias: "ticket.search";
     audiences: readonly ["customer-facing", "internal-support", "mixed"];
     capability: "search-provider-object";
     exposesSensitiveData: true;
     providerObject: "pegaCase";
     requiresCredential: true;
   }, {
     alias: "pega-customer-service.caseTypes.list";
     audiences: readonly ["internal-support", "mixed"];
     capability: "read-provider-object";
     exposesSensitiveData: true;
     extension: true;
     providerObject: "pegaCaseType";
     requiresCredential: true;
   }, {
     alias: "pega-customer-service.assignmentAction.submit";
     audiences: readonly ["internal-support", "mixed"];
     capability: "handoff";
     changesWorkflow: true;
     exposesSensitiveData: true;
     extension: true;
     providerObject: "pegaAssignmentAction";
     requiresCredential: true;
     sideEffect: true;
  }];
  packageName: "@cognidesk/integration-ticketing-pega-customer-service";
  privacyNotes: readonly ["Pega cases can contain customer identity, interaction details, assignments, statuses, case data, attachments metadata, and internal workflow context.", "Pega API credentials stay server-side and Studio receives only readiness and scope status."];
  provider: "pega-customer-service";
  trustLevel: "official";
}, PegaCustomerServiceTicketingIntegrationOptions, {
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
| `options` | [`PegaCustomerServiceTicketingIntegrationOptions`](#pegacustomerserviceticketingintegrationoptions) |

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
     `description`: `"Creates Pega Customer Service cases with the Pega DX API from SDK-user-selected workflows."`;
     `exposesSensitiveData`: `true`;
     `label`: `"Create Pega cases"`;
     `providerObjects`: readonly \[\{
        `kind`: `"pegaCase"`;
        `label`: `"Pega Case"`;
        `schemaName`: `"Pega-API-CaseManagement-Case"`;
     \}\];
     `requiresCredential`: `true`;
     `sideEffect`: `true`;
   \}, \{
     `audiences`: readonly \[`"customer-facing"`, `"internal-support"`, `"mixed"`\];
     `capability`: `"read-provider-object"`;
     `description`: `"Reads Pega cases and case type metadata through the Pega DX API."`;
     `exposesSensitiveData`: `true`;
     `label`: `"Read Pega cases"`;
     `providerObjects`: readonly \[\{
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
     `audiences`: readonly \[`"internal-support"`, `"mixed"`\];
     `capability`: `"update-provider-object"`;
     `changesWorkflow`: `true`;
     `description`: `"Updates Pega cases with SDK-user-supplied case data through the Pega DX API."`;
     `exposesSensitiveData`: `true`;
     `label`: `"Update Pega cases"`;
     `providerObjects`: readonly \[\{
        `kind`: `"pegaCase"`;
        `label`: `"Pega Case"`;
        `schemaName`: `"Pega-API-CaseManagement-Case"`;
     \}\];
     `requiresCredential`: `true`;
     `sideEffect`: `true`;
   \}, \{
     `audiences`: readonly \[`"customer-facing"`, `"internal-support"`, `"mixed"`\];
     `capability`: `"search-provider-object"`;
     `description`: `"Queries Pega cases with SDK-user-supplied case type, status, assignment, and pagination controls."`;
     `exposesSensitiveData`: `true`;
     `label`: `"Search Pega cases"`;
     `providerObjects`: readonly \[\{
        `kind`: `"pegaCase"`;
        `label`: `"Pega Case"`;
        `schemaName`: `"Pega-API-CaseManagement-Case"`;
     \}\];
     `requiresCredential`: `true`;
   \}, \{
     `audiences`: readonly \[`"customer-facing"`, `"internal-support"`, `"mixed"`\];
     `capability`: `"handoff"`;
     `changesWorkflow`: `true`;
     `description`: `"Submits SDK-user-configured Pega DX assignment actions or case operations for human handoff workflows."`;
     `exposesSensitiveData`: `true`;
     `label`: `"Run Pega case handoff action"`;
     `providerObjects`: readonly \[\{
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
  `channelAudiences`: readonly \[`"customer-facing"`, `"internal-support"`, `"mixed"`\];
  `coverage`: \{
     `evidence`: readonly \[\{
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
      \}, \{
        `label`: `"Pega DX API GET /cases/{ID}"`;
        `url`: `"https://docs.pega.com/bundle/dx-api/page/platform/dx-api/endpoint-get-cases-id.html"`;
      \}, \{
        `label`: `"Pega DX API PUT /cases/{ID}"`;
        `url`: `"https://docs.pega.com/bundle/dx-api/page/platform/dx-api/endpoint-put-cases-id.html"`;
      \}, \{
        `label`: `"Pega DX API GET /casetypes"`;
        `url`: `"https://docs.pega.com/bundle/dx-api/page/platform/dx-api/endpoint-get-casetypes_0.html"`;
      \}, \{
        `label`: `"Pega DX API PATCH /assignments/{assignmentID}/actions/{actionID}"`;
        `url`: `"https://docs.pega.com/bundle/dx-api/page/platform/dx-api/endpoint-patch-assignments-assignmentid-actions-actionid.html"`;
     \}\];
     `notes`: readonly \[`"Coverage is typed for Pega DX API case creation, case read/update, case search/listing, case-type listing, assignment action submission, and readiness checks used by Cognidesk support workflows."`, `"This is not full Pega Customer Service or Pega Platform API coverage; broader assignments/actions lifecycle, stages/process navigation, attachments, data views/pages, bulk actions, views, refresh/validation flows, security rules, and broader application administration remain outside this adapter."`\];
     `scope`: `"support-workflow-subset"`;
  \};
  `credentialRequirements`: readonly \[\{
     `description`: `"The SDK user's Pega Platform or Pega Customer Service application URL."`;
     `id`: `"pega-customer-service-instance"`;
     `label`: `"Pega Customer Service instance URL"`;
     `required`: `true`;
   \}, \{
     `description`: `"Server-side OAuth bearer access or Basic Auth credentials for Pega DX API endpoints with operator/client privileges for cases, case types, and assignment actions."`;
     `id`: `"pega-customer-service-api-access"`;
     `label`: `"Pega DX API access"`;
     `metadata`: \{
        `privilegeGuidance`: `"These strings are Cognidesk capability labels, not proven official Pega OAuth scopes. Pega access depends on the operator/client access group and privileges for case list/read/create/update, case type read, and assignment action submission."`;
        `scopeKind`: `"internal-capability-labels"`;
     \};
     `required`: `true`;
     `scopes`: readonly \[`"cases:read"`, `"cases:write"`, `"casetypes:read"`\];
  \}\];
  `directions`: readonly \[`"bidirectional"`\];
  `id`: `"ticketing.pega-customer-service"`;
  `limitations`: readonly \[`"Case types, starting processes, field requirements, assignment routing, security rules, data pages, and stage transitions are owned by the SDK user's Pega application."`, `"SDK users own case-type selection, field mapping, handoff timing, customer identity matching, notification policy, and retention before calling Pega APIs."`\];
  `maintainers`: readonly \[\{
     `name`: `"Cognidesk"`;
     `type`: `"official"`;
  \}\];
  `metadata`: \{
     `channelCoverage`: \{
        `assignmentActions`: `"typed-submit"`;
        `attachmentsDataPages`: `"provider-supported-not-typed"`;
        `broaderCaseManagementAdmin`: `"not-covered"`;
        `cases`: `"typed-create-read-update-search"`;
        `caseTypes`: `"typed-list"`;
        `readiness`: `"typed-list"`;
        `stageLifecycleActions`: `"provider-supported-not-typed"`;
     \};
     `checkedProviderApiCoverage`: \{
        `checkedFamilyCount`: `4`;
        `coverageArtifact`: `"docs/provider-coverage/pega-customer-service-checked-dx-api-2026-06-18.inventory.json"`;
        `gapFamilyCount`: `1`;
        `implementedFamilyCount`: `3`;
        `implementedOperationCount`: `6`;
        `sourceKind`: `"checked-endpoint-family-inventory"`;
        `verifiedAt`: `"2026-06-18"`;
     \};
     `implementation`: \{
        `strategy`: `"direct-http-support-slice"`;
     \};
     `implementationStrategy`: \{
        `checkedAt`: `"2026-06-21"`;
        `reason`: `"No suitable maintained server-side JavaScript SDK was found for Pega Customer Service/DX API case operations; current Pega JavaScript packages are Constellation UI/client orchestration assets."`;
        `rejectedLibraries`: readonly \[\{
           `integrity`: `"sha512-dPPo+e/ADjMwabHfQ5s9DX2P8IeJiSg6NPXFRLFkFZm1OFbkDevf3YoSpf5/XzWD3IqcBo0dx8NzV7tLjp4EJw=="`;
           `packageName`: `"@pega/constellationjs"`;
           `reason`: `"Pega-maintained package, but it provides ConstellationJS engine files rather than a server-side DX API case client."`;
           `version`: `"25.1.3"`;
        \}\];
        `strategy`: `"direct-support-slice"`;
     \};
     `supportOperationSlice`: \{
        `allowlistSha256`: `"6b4e3eb1f0a9b371002d8a3be22827c473680c7ce1335a0faf9d990e94cd32fd"`;
        `checkedAt`: `"2026-06-21"`;
        `operations`: readonly \[\{
           `alias`: `"ticket.create"`;
           `method`: `"POST"`;
           `path`: `"{apiBasePath}/cases"`;
         \}, \{
           `alias`: `"ticket.read"`;
           `method`: `"GET"`;
           `path`: `"{apiBasePath}/cases/{ID}"`;
         \}, \{
           `alias`: `"ticket.update"`;
           `method`: `"PUT"`;
           `path`: `"{apiBasePath}/cases/{ID}"`;
         \}, \{
           `alias`: `"ticket.search"`;
           `method`: `"GET"`;
           `path`: `"{apiBasePath}/cases"`;
         \}, \{
           `alias`: `"pega-customer-service.caseTypes.list"`;
           `method`: `"GET"`;
           `path`: `"{apiBasePath}/casetypes"`;
         \}, \{
           `alias`: `"pega-customer-service.assignmentAction.submit"`;
           `method`: `"PATCH"`;
           `path`: `"{apiBasePath}/assignments/{assignmentID}/actions/{actionID}"`;
        \}\];
        `sourceKind`: `"official-docs-reviewed-slice"`;
        `sourceVersion`: `"/api/v1"`;
     \};
  \};
  `name`: `"Pega Customer Service"`;
  `operations`: readonly \[\{
     `alias`: `"ticket.create"`;
     `audiences`: readonly \[`"customer-facing"`, `"internal-support"`, `"mixed"`\];
     `capability`: `"create-provider-object"`;
     `changesWorkflow`: `true`;
     `exposesSensitiveData`: `true`;
     `providerObject`: `"pegaCase"`;
     `requiresCredential`: `true`;
     `sideEffect`: `true`;
   \}, \{
     `alias`: `"ticket.read"`;
     `audiences`: readonly \[`"customer-facing"`, `"internal-support"`, `"mixed"`\];
     `capability`: `"read-provider-object"`;
     `exposesSensitiveData`: `true`;
     `providerObject`: `"pegaCase"`;
     `requiresCredential`: `true`;
   \}, \{
     `alias`: `"ticket.update"`;
     `audiences`: readonly \[`"internal-support"`, `"mixed"`\];
     `capability`: `"update-provider-object"`;
     `changesWorkflow`: `true`;
     `exposesSensitiveData`: `true`;
     `providerObject`: `"pegaCase"`;
     `requiresCredential`: `true`;
     `sideEffect`: `true`;
   \}, \{
     `alias`: `"ticket.search"`;
     `audiences`: readonly \[`"customer-facing"`, `"internal-support"`, `"mixed"`\];
     `capability`: `"search-provider-object"`;
     `exposesSensitiveData`: `true`;
     `providerObject`: `"pegaCase"`;
     `requiresCredential`: `true`;
   \}, \{
     `alias`: `"pega-customer-service.caseTypes.list"`;
     `audiences`: readonly \[`"internal-support"`, `"mixed"`\];
     `capability`: `"read-provider-object"`;
     `exposesSensitiveData`: `true`;
     `extension`: `true`;
     `providerObject`: `"pegaCaseType"`;
     `requiresCredential`: `true`;
   \}, \{
     `alias`: `"pega-customer-service.assignmentAction.submit"`;
     `audiences`: readonly \[`"internal-support"`, `"mixed"`\];
     `capability`: `"handoff"`;
     `changesWorkflow`: `true`;
     `exposesSensitiveData`: `true`;
     `extension`: `true`;
     `providerObject`: `"pegaAssignmentAction"`;
     `requiresCredential`: `true`;
     `sideEffect`: `true`;
  \}\];
  `packageName`: `"@cognidesk/integration-ticketing-pega-customer-service"`;
  `privacyNotes`: readonly \[`"Pega cases can contain customer identity, interaction details, assignments, statuses, case data, attachments metadata, and internal workflow context."`, `"Pega API credentials stay server-side and Studio receives only readiness and scope status."`\];
  `provider`: `"pega-customer-service"`;
  `trustLevel`: `"official"`;
\}, [`PegaCustomerServiceTicketingIntegrationOptions`](#pegacustomerserviceticketingintegrationoptions), \{
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
function createPegaCustomerServiceTicketingLiveChecks(options): {
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
| `options` | [`PegaCustomerServiceLiveCheckOptions`](#pegacustomerservicelivecheckoptions) |

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
