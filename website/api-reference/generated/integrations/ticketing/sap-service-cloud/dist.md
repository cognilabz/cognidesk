# integrations/ticketing/sap-service-cloud/dist

## Interfaces

### SapReadServiceRequestOperationInput

#### Properties

##### objectId

```ts
objectId: string;
```

***

### SapServiceCloudCredentialStatusInput

#### Properties

##### accessToken?

```ts
optional accessToken?: string;
```

##### password?

```ts
optional password?: string;
```

##### scopes?

```ts
optional scopes?: string[];
```

##### tenantUrl?

```ts
optional tenantUrl?: string;
```

##### username?

```ts
optional username?: string;
```

***

### SapServiceCloudJsonObject

#### Extended by

- [`SapServiceCloudProviderExtensionFields`](#sapservicecloudproviderextensionfields)
- [`SapServiceCloudProviderResponse`](#sapservicecloudproviderresponse)

#### Indexable

```ts
[key: string]: SapServiceCloudProviderExtensionValue
```

***

### SapServiceCloudLiveCheckOptions

#### Extends

- [`SapServiceCloudTicketingClientOptions`](#sapservicecloudticketingclientoptions)

#### Properties

##### accessToken?

```ts
optional accessToken?: string;
```

###### Inherited from

[`SapServiceCloudTicketingClientOptions`](#sapservicecloudticketingclientoptions).[`accessToken`](#accesstoken-2)

##### client?

```ts
optional client?: Pick<SapServiceCloudTicketingClient, "readiness">;
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

[`SapServiceCloudTicketingClientOptions`](#sapservicecloudticketingclientoptions).[`fetch`](#fetch-1)

##### fetchCsrfToken?

```ts
optional fetchCsrfToken?: boolean;
```

###### Inherited from

[`SapServiceCloudTicketingClientOptions`](#sapservicecloudticketingclientoptions).[`fetchCsrfToken`](#fetchcsrftoken-1)

##### odataPath?

```ts
optional odataPath?: string;
```

###### Inherited from

[`SapServiceCloudTicketingClientOptions`](#sapservicecloudticketingclientoptions).[`odataPath`](#odatapath-1)

##### password?

```ts
optional password?: string;
```

###### Inherited from

[`SapServiceCloudTicketingClientOptions`](#sapservicecloudticketingclientoptions).[`password`](#password-2)

##### tenantUrl

```ts
tenantUrl: string;
```

###### Inherited from

[`SapServiceCloudTicketingClientOptions`](#sapservicecloudticketingclientoptions).[`tenantUrl`](#tenanturl-2)

##### username?

```ts
optional username?: string;
```

###### Inherited from

[`SapServiceCloudTicketingClientOptions`](#sapservicecloudticketingclientoptions).[`username`](#username-2)

***

### SapServiceCloudProviderExtensionFields

#### Extends

- [`SapServiceCloudJsonObject`](#sapservicecloudjsonobject)

#### Indexable

```ts
[key: string]: SapServiceCloudProviderExtensionValue
```

***

### SapServiceCloudProviderResponse

#### Extends

- [`SapServiceCloudJsonObject`](#sapservicecloudjsonobject)

#### Indexable

```ts
[key: string]: SapServiceCloudProviderExtensionValue
```

***

### SapServiceCloudTicketingClient

#### Methods

##### createServiceRequest()

```ts
createServiceRequest(input): Promise<SapServiceRequestResource>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`SapServiceCreateRequestInput`](#sapservicecreaterequestinput) |

###### Returns

`Promise`\<[`SapServiceRequestResource`](#sapservicerequestresource)\>

##### getServiceRequest()

```ts
getServiceRequest(objectId): Promise<SapServiceRequestResource>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `objectId` | `string` |

###### Returns

`Promise`\<[`SapServiceRequestResource`](#sapservicerequestresource)\>

##### readiness()

```ts
readiness(): Promise<SapServiceSearchResult<SapServiceRequestResource>>;
```

###### Returns

`Promise`\<[`SapServiceSearchResult`](#sapservicesearchresult)\<[`SapServiceRequestResource`](#sapservicerequestresource)\>\>

##### searchServiceRequests()

```ts
searchServiceRequests(input?): Promise<SapServiceSearchResult<SapServiceRequestResource>>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input?` | [`SapServiceSearchInput`](#sapservicesearchinput) |

###### Returns

`Promise`\<[`SapServiceSearchResult`](#sapservicesearchresult)\<[`SapServiceRequestResource`](#sapservicerequestresource)\>\>

##### updateServiceRequest()

```ts
updateServiceRequest(
   objectId,
   input,
etag?): Promise<SapServiceRequestResource>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `objectId` | `string` |
| `input` | [`SapServiceUpdateRequestInput`](#sapserviceupdaterequestinput) |
| `etag?` | `string` |

###### Returns

`Promise`\<[`SapServiceRequestResource`](#sapservicerequestresource)\>

***

### SapServiceCloudTicketingClientOptions

#### Extended by

- [`SapServiceCloudLiveCheckOptions`](#sapservicecloudlivecheckoptions)
- [`SapServiceCloudTicketingIntegrationOptions`](#sapservicecloudticketingintegrationoptions)

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

##### fetchCsrfToken?

```ts
optional fetchCsrfToken?: boolean;
```

##### odataPath?

```ts
optional odataPath?: string;
```

##### password?

```ts
optional password?: string;
```

##### tenantUrl

```ts
tenantUrl: string;
```

##### username?

```ts
optional username?: string;
```

***

### SapServiceCloudTicketingIntegrationOptions

#### Extends

- [`SapServiceCloudTicketingClientOptions`](#sapservicecloudticketingclientoptions)

#### Properties

##### accessToken?

```ts
optional accessToken?: string;
```

###### Inherited from

[`SapServiceCloudTicketingClientOptions`](#sapservicecloudticketingclientoptions).[`accessToken`](#accesstoken-2)

##### client?

```ts
optional client?: SapServiceCloudTicketingClient;
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

[`SapServiceCloudTicketingClientOptions`](#sapservicecloudticketingclientoptions).[`fetch`](#fetch-1)

##### fetchCsrfToken?

```ts
optional fetchCsrfToken?: boolean;
```

###### Inherited from

[`SapServiceCloudTicketingClientOptions`](#sapservicecloudticketingclientoptions).[`fetchCsrfToken`](#fetchcsrftoken-1)

##### odataPath?

```ts
optional odataPath?: string;
```

###### Inherited from

[`SapServiceCloudTicketingClientOptions`](#sapservicecloudticketingclientoptions).[`odataPath`](#odatapath-1)

##### password?

```ts
optional password?: string;
```

###### Inherited from

[`SapServiceCloudTicketingClientOptions`](#sapservicecloudticketingclientoptions).[`password`](#password-2)

##### tenantUrl

```ts
tenantUrl: string;
```

###### Inherited from

[`SapServiceCloudTicketingClientOptions`](#sapservicecloudticketingclientoptions).[`tenantUrl`](#tenanturl-2)

##### username?

```ts
optional username?: string;
```

###### Inherited from

[`SapServiceCloudTicketingClientOptions`](#sapservicecloudticketingclientoptions).[`username`](#username-2)

***

### SapServiceCreateRequestInput

#### Properties

##### buyerPartyId?

```ts
optional buyerPartyId?: string;
```

##### buyerPartyName?

```ts
optional buyerPartyName?: string;
```

##### fields?

```ts
optional fields?: SapServiceCloudJsonObject;
```

##### name

```ts
name: string;
```

##### objectServiceIssueCategoryId?

```ts
optional objectServiceIssueCategoryId?: string;
```

##### processingTypeCode?

```ts
optional processingTypeCode?: string;
```

##### servicePriorityCode?

```ts
optional servicePriorityCode?: string;
```

***

### SapServiceSearchInput

#### Properties

##### expand?

```ts
optional expand?: string[];
```

##### filter?

```ts
optional filter?: string;
```

##### inlineCount?

```ts
optional inlineCount?: "none" | "allpages";
```

##### orderBy?

```ts
optional orderBy?: string;
```

##### select?

```ts
optional select?: string[];
```

##### skip?

```ts
optional skip?: number;
```

##### top?

```ts
optional top?: number;
```

***

### SapServiceSearchResult

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | [`SapServiceRequestResource`](#sapservicerequestresource) |

#### Properties

##### count?

```ts
optional count?: string;
```

##### results

```ts
results: T[];
```

***

### SapServiceUpdateRequestInput

#### Extended by

- [`SapUpdateServiceRequestOperationInput`](#sapupdateservicerequestoperationinput)

#### Properties

##### fields?

```ts
optional fields?: SapServiceCloudJsonObject;
```

##### name?

```ts
optional name?: string;
```

##### objectServiceIssueCategoryId?

```ts
optional objectServiceIssueCategoryId?: string;
```

##### servicePriorityCode?

```ts
optional servicePriorityCode?: string;
```

##### statusCode?

```ts
optional statusCode?: string;
```

***

### SapUpdateServiceRequestOperationInput

#### Extends

- [`SapServiceUpdateRequestInput`](#sapserviceupdaterequestinput)

#### Properties

##### etag?

```ts
optional etag?: string;
```

##### fields?

```ts
optional fields?: SapServiceCloudJsonObject;
```

###### Inherited from

[`SapServiceUpdateRequestInput`](#sapserviceupdaterequestinput).[`fields`](#fields-1)

##### name?

```ts
optional name?: string;
```

###### Inherited from

[`SapServiceUpdateRequestInput`](#sapserviceupdaterequestinput).[`name`](#name-1)

##### objectId

```ts
objectId: string;
```

##### objectServiceIssueCategoryId?

```ts
optional objectServiceIssueCategoryId?: string;
```

###### Inherited from

[`SapServiceUpdateRequestInput`](#sapserviceupdaterequestinput).[`objectServiceIssueCategoryId`](#objectserviceissuecategoryid-1)

##### servicePriorityCode?

```ts
optional servicePriorityCode?: string;
```

###### Inherited from

[`SapServiceUpdateRequestInput`](#sapserviceupdaterequestinput).[`servicePriorityCode`](#serviceprioritycode-1)

##### statusCode?

```ts
optional statusCode?: string;
```

###### Inherited from

[`SapServiceUpdateRequestInput`](#sapserviceupdaterequestinput).[`statusCode`](#statuscode)

## Type Aliases

### SapServiceCloudJsonPrimitive

```ts
type SapServiceCloudJsonPrimitive = string | number | boolean | null;
```

***

### SapServiceCloudJsonValue

```ts
type SapServiceCloudJsonValue =
  | SapServiceCloudJsonPrimitive
  | SapServiceCloudJsonObject
  | readonly SapServiceCloudJsonValue[];
```

***

### SapServiceCloudProviderExtensionValue

```ts
type SapServiceCloudProviderExtensionValue =
  | SapServiceCloudJsonValue
  | object
  | undefined;
```

***

### SapServiceCloudProviderPayload

```ts
type SapServiceCloudProviderPayload = SapServiceCloudJsonObject | object;
```

***

### SapServiceCloudProviderQuery

```ts
type SapServiceCloudProviderQuery = Record<string, SapServiceCloudProviderExtensionValue>;
```

***

### SapServiceRequestResource

```ts
type SapServiceRequestResource = SapServiceCloudProviderPayload & {
  BuyerPartyName?: string;
  ID?: string;
  Name?: string;
  ObjectID?: string;
  ProcessingTypeCode?: string;
  ServicePriorityCode?: string;
  StatusCode?: string;
};
```

#### Type Declaration

| Name | Type |
| ------ | ------ |
| `BuyerPartyName?` | `string` |
| `ID?` | `string` |
| `Name?` | `string` |
| `ObjectID?` | `string` |
| `ProcessingTypeCode?` | `string` |
| `ServicePriorityCode?` | `string` |
| `StatusCode?` | `string` |

## Functions

### createSapServiceCloudTicketingClient()

```ts
function createSapServiceCloudTicketingClient(options): SapServiceCloudTicketingClient;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`SapServiceCloudTicketingClientOptions`](#sapservicecloudticketingclientoptions) |

#### Returns

[`SapServiceCloudTicketingClient`](#sapservicecloudticketingclient)

***

### createSapServiceCloudTicketingIntegration()

```ts
function createSapServiceCloudTicketingIntegration(options): DefinedIntegration<{
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
     capability: "handoff";
     changesWorkflow: true;
     description: "Creates or updates SAP Service Cloud ServiceRequestCollection records as SDK-configured support handoff targets.";
     exposesSensitiveData: true;
     label: "Create SAP Service Cloud handoff";
     providerObjects: readonly [{
        kind: "sapServiceRequest";
        label: "SAP Service Request";
        schemaName: "ServiceRequestCollection";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     audiences: readonly ["customer-facing", "internal-support", "mixed"];
     capability: "create-provider-object";
     changesWorkflow: true;
     description: "Creates SAP Service Cloud ServiceRequestCollection tickets from SDK-user-selected workflows.";
     exposesSensitiveData: true;
     label: "Create SAP service requests";
     providerObjects: readonly [{
        kind: "sapServiceRequest";
        label: "SAP Service Request";
        schemaName: "ServiceRequestCollection";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     audiences: readonly ["customer-facing", "internal-support", "mixed"];
     capability: "read-provider-object";
     description: "Reads SAP Service Cloud service requests by ObjectID.";
     exposesSensitiveData: true;
     label: "Read SAP service requests";
     providerObjects: readonly [{
        kind: "sapServiceRequest";
        label: "SAP Service Request";
        schemaName: "ServiceRequestCollection";
     }];
     requiresCredential: true;
   }, {
     audiences: readonly ["internal-support", "mixed"];
     capability: "update-provider-object";
     changesWorkflow: true;
     description: "Updates SAP Service Cloud ticket fields, statuses, priorities, or SDK-user custom fields.";
     exposesSensitiveData: true;
     label: "Update SAP service requests";
     providerObjects: readonly [{
        kind: "sapServiceRequest";
        label: "SAP Service Request";
        schemaName: "ServiceRequestCollection";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     audiences: readonly ["customer-facing", "internal-support", "mixed"];
     capability: "search-provider-object";
     description: "Queries SAP Service Cloud ServiceRequestCollection with SDK-user-supplied OData filters and projections.";
     exposesSensitiveData: true;
     label: "Search SAP service requests";
     providerObjects: readonly [{
        kind: "sapServiceRequest";
        label: "SAP Service Request";
        schemaName: "ServiceRequestCollection";
     }];
     requiresCredential: true;
  }];
  category: "ticketing";
  channelAudiences: readonly ["customer-facing", "internal-support", "mixed"];
  coverage: {
     evidence: readonly [{
        label: "SAP Cloud for Customer OData API";
        url: "https://help.sap.com/docs/sap-cloud-for-customer/odata-services/sap-cloud-for-customer-odata-api";
      }, {
        label: "SAP Cloud for Customer OData API overview";
        url: "https://help.sap.com/docs/sap-cloud-for-customer/1364b70b9cbb417ea5e2d80e966d4f49/6c0a463cc9ca450cbd01a9a5057ce682.html";
      }, {
        label: "SAP Cloud for Customer OData API v2 Reference";
        url: "https://help.sap.com/docs/r/1364b70b9cbb417ea5e2d80e966d4f49/LATEST/en-US/6cb5cd1ebe1c49d8b99c22afa29aa5d4.html";
      }, {
        label: "SAP Cloud for Customer OData Services PDF";
        url: "https://help.sap.com/doc/77979cd206da4b7f9bd264b390d373fc/CLOUD/en-US/OData_Services.pdf";
     }];
     notes: readonly ["Coverage is typed for SAP Cloud for Customer OData ServiceRequestCollection create, read by ObjectID, patch, collection query, CSRF token preflight, and readiness checks used by Cognidesk support workflows.", "This is not full SAP Service Cloud API coverage; notes, descriptions, attachments, involved parties, service categories, code-list discovery, custom OData services, communication arrangements, workflow actions, v2 migration policy, and broader SAP Cloud for Customer APIs remain outside this adapter."];
     scope: "support-workflow-subset";
  };
  credentialRequirements: readonly [{
     description: "The SDK user's SAP Cloud for Customer or SAP Service Cloud tenant URL.";
     id: "sap-service-cloud-tenant";
     label: "SAP Service Cloud tenant URL";
     required: true;
   }, {
     description: "Server-side Basic Auth, communication user/arrangement, or OAuth bearer access authorized for the SAP Cloud for Customer OData API.";
     id: "sap-service-cloud-api-access";
     label: "SAP Service Cloud OData API access";
     metadata: {
        privilegeGuidance: "These strings are Cognidesk capability labels for ServiceRequestCollection access, not official SAP OAuth scope names. SAP authorization depends on communication arrangements, business user permissions, and exposed OData services.";
        scopeKind: "internal-capability-labels";
     };
     required: true;
     scopes: readonly ["ServiceRequestCollection:read", "ServiceRequestCollection:write"];
  }];
  directions: readonly ["bidirectional"];
  id: "ticketing.sap-service-cloud";
  limitations: readonly ["SAP tenant OData exposure, communication arrangements, required fields, statuses, code lists, workflow rules, and extensions are SDK-user configuration.", "SDK users own escalation timing, customer matching, field mapping, reply visibility, retention, and notification policy before calling SAP APIs."];
  maintainers: readonly [{
     name: "Cognidesk";
     type: "official";
  }];
  metadata: {
     channelCoverage: {
        attachmentFolder: "provider-supported-not-typed";
        csrfToken: "typed-selected";
        notesInvolvedPartiesCodeLists: "provider-supported-not-typed";
        readinessSearch: "typed-search";
        serviceRequests: "typed-create-read-update-search";
        workflowRulesCommunicationArrangements: "not-covered";
     };
     checkedProviderApiCoverage: {
        checkedFamilyCount: 3;
        coverageArtifact: "docs/provider-coverage/sap-service-cloud-checked-c4c-odata-2026-06-18.inventory.json";
        gapFamilyCount: 1;
        implementedFamilyCount: 2;
        implementedOperationCount: 5;
        sourceKind: "checked-endpoint-family-inventory";
        verifiedAt: "2026-06-18";
     };
     implementation: {
        strategy: "direct-http-support-slice";
     };
     implementationStrategy: {
        checkedAt: "2026-06-21";
        reason: "SAP Cloud SDK for JavaScript is maintained and viable for OData v2/generator/HTTP transport, but this package keeps the reviewed ServiceRequestCollection slice until a redistributable EDMX/source artifact can be pinned.";
        strategy: "sdk-viable-reviewed-support-slice";
        viableLibraries: readonly [{
           integrity: "sha512-/t1ncLEnm3yTzHRkIgpNcUMGHk7jvQ1nSHrb7YgvgU+/Q2P5Au8llPEH/zudXZ8Bd3k9Qdrfdq/hl+w+YWkBIg==";
           packageName: "@sap-cloud-sdk/odata-v2";
           version: "4.7.0";
         }, {
           integrity: "sha512-aW17rUVIZl5RA3WoTTErBwwWCX5A3AresM13Vs7fKEc3Z52919KTlH+7Cpf/9qJrNDQUZU6RzCw+bHd5gs8wHA==";
           packageName: "@sap-cloud-sdk/generator";
           version: "4.7.0";
         }, {
           integrity: "sha512-7+S6ru7SrnyKA2MGimX09oix0EVwmPGcCAz0TRwFZVnglU+VTRmZ8QdcwcVTR26E9YhkR4OVl6EK7jb2Z0OxfQ==";
           packageName: "@sap-cloud-sdk/http-client";
           version: "4.7.0";
        }];
     };
     supportOperationSlice: {
        allowlistSha256: "0878a63145c55ce016d71a56643a963adc9fe945c7d0a029286d567e5027f30f";
        checkedAt: "2026-06-21";
        operations: readonly [{
           alias: "ticket.create";
           method: "POST";
           path: "{odataPath}/ServiceRequestCollection";
         }, {
           alias: "ticket.read";
           method: "GET";
           path: "{odataPath}/ServiceRequestCollection('{ObjectID}')";
         }, {
           alias: "ticket.update";
           method: "PATCH";
           path: "{odataPath}/ServiceRequestCollection('{ObjectID}')";
         }, {
           alias: "ticket.search";
           method: "GET";
           path: "{odataPath}/ServiceRequestCollection";
        }];
        sourceKind: "official-docs-reviewed-slice";
        sourceVersion: "/sap/c4c/odata/v1/c4codataapi";
     };
  };
  name: "SAP Service Cloud";
  operations: readonly [{
     alias: "ticket.create";
     audiences: readonly ["customer-facing", "internal-support", "mixed"];
     capability: "create-provider-object";
     changesWorkflow: true;
     exposesSensitiveData: true;
     providerObject: "sapServiceRequest";
     requiresCredential: true;
     sideEffect: true;
   }, {
     alias: "ticket.read";
     audiences: readonly ["customer-facing", "internal-support", "mixed"];
     capability: "read-provider-object";
     exposesSensitiveData: true;
     providerObject: "sapServiceRequest";
     requiresCredential: true;
   }, {
     alias: "ticket.update";
     audiences: readonly ["internal-support", "mixed"];
     capability: "update-provider-object";
     changesWorkflow: true;
     exposesSensitiveData: true;
     providerObject: "sapServiceRequest";
     requiresCredential: true;
     sideEffect: true;
   }, {
     alias: "ticket.search";
     audiences: readonly ["customer-facing", "internal-support", "mixed"];
     capability: "search-provider-object";
     exposesSensitiveData: true;
     providerObject: "sapServiceRequest";
     requiresCredential: true;
  }];
  packageName: "@cognidesk/integration-ticketing-sap-service-cloud";
  privacyNotes: readonly ["SAP service requests can contain customer account/contact details, ticket descriptions, categories, priorities, involved parties, notes, and internal routing data.", "SAP API credentials stay server-side and Studio receives only readiness and scope status."];
  provider: "sap-service-cloud";
  trustLevel: "official";
}, SapServiceCloudTicketingIntegrationOptions, {
  ticket.create: (input) => Promise<SapServiceRequestResource>;
  ticket.read: (input) => Promise<SapServiceRequestResource>;
  ticket.search: (input?) => Promise<SapServiceSearchResult<SapServiceRequestResource>>;
  ticket.update: (input) => Promise<SapServiceRequestResource>;
}>;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`SapServiceCloudTicketingIntegrationOptions`](#sapservicecloudticketingintegrationoptions) |

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
     `capability`: `"handoff"`;
     `changesWorkflow`: `true`;
     `description`: `"Creates or updates SAP Service Cloud ServiceRequestCollection records as SDK-configured support handoff targets."`;
     `exposesSensitiveData`: `true`;
     `label`: `"Create SAP Service Cloud handoff"`;
     `providerObjects`: readonly \[\{
        `kind`: `"sapServiceRequest"`;
        `label`: `"SAP Service Request"`;
        `schemaName`: `"ServiceRequestCollection"`;
     \}\];
     `requiresCredential`: `true`;
     `sideEffect`: `true`;
   \}, \{
     `audiences`: readonly \[`"customer-facing"`, `"internal-support"`, `"mixed"`\];
     `capability`: `"create-provider-object"`;
     `changesWorkflow`: `true`;
     `description`: `"Creates SAP Service Cloud ServiceRequestCollection tickets from SDK-user-selected workflows."`;
     `exposesSensitiveData`: `true`;
     `label`: `"Create SAP service requests"`;
     `providerObjects`: readonly \[\{
        `kind`: `"sapServiceRequest"`;
        `label`: `"SAP Service Request"`;
        `schemaName`: `"ServiceRequestCollection"`;
     \}\];
     `requiresCredential`: `true`;
     `sideEffect`: `true`;
   \}, \{
     `audiences`: readonly \[`"customer-facing"`, `"internal-support"`, `"mixed"`\];
     `capability`: `"read-provider-object"`;
     `description`: `"Reads SAP Service Cloud service requests by ObjectID."`;
     `exposesSensitiveData`: `true`;
     `label`: `"Read SAP service requests"`;
     `providerObjects`: readonly \[\{
        `kind`: `"sapServiceRequest"`;
        `label`: `"SAP Service Request"`;
        `schemaName`: `"ServiceRequestCollection"`;
     \}\];
     `requiresCredential`: `true`;
   \}, \{
     `audiences`: readonly \[`"internal-support"`, `"mixed"`\];
     `capability`: `"update-provider-object"`;
     `changesWorkflow`: `true`;
     `description`: `"Updates SAP Service Cloud ticket fields, statuses, priorities, or SDK-user custom fields."`;
     `exposesSensitiveData`: `true`;
     `label`: `"Update SAP service requests"`;
     `providerObjects`: readonly \[\{
        `kind`: `"sapServiceRequest"`;
        `label`: `"SAP Service Request"`;
        `schemaName`: `"ServiceRequestCollection"`;
     \}\];
     `requiresCredential`: `true`;
     `sideEffect`: `true`;
   \}, \{
     `audiences`: readonly \[`"customer-facing"`, `"internal-support"`, `"mixed"`\];
     `capability`: `"search-provider-object"`;
     `description`: `"Queries SAP Service Cloud ServiceRequestCollection with SDK-user-supplied OData filters and projections."`;
     `exposesSensitiveData`: `true`;
     `label`: `"Search SAP service requests"`;
     `providerObjects`: readonly \[\{
        `kind`: `"sapServiceRequest"`;
        `label`: `"SAP Service Request"`;
        `schemaName`: `"ServiceRequestCollection"`;
     \}\];
     `requiresCredential`: `true`;
  \}\];
  `category`: `"ticketing"`;
  `channelAudiences`: readonly \[`"customer-facing"`, `"internal-support"`, `"mixed"`\];
  `coverage`: \{
     `evidence`: readonly \[\{
        `label`: `"SAP Cloud for Customer OData API"`;
        `url`: `"https://help.sap.com/docs/sap-cloud-for-customer/odata-services/sap-cloud-for-customer-odata-api"`;
      \}, \{
        `label`: `"SAP Cloud for Customer OData API overview"`;
        `url`: `"https://help.sap.com/docs/sap-cloud-for-customer/1364b70b9cbb417ea5e2d80e966d4f49/6c0a463cc9ca450cbd01a9a5057ce682.html"`;
      \}, \{
        `label`: `"SAP Cloud for Customer OData API v2 Reference"`;
        `url`: `"https://help.sap.com/docs/r/1364b70b9cbb417ea5e2d80e966d4f49/LATEST/en-US/6cb5cd1ebe1c49d8b99c22afa29aa5d4.html"`;
      \}, \{
        `label`: `"SAP Cloud for Customer OData Services PDF"`;
        `url`: `"https://help.sap.com/doc/77979cd206da4b7f9bd264b390d373fc/CLOUD/en-US/OData_Services.pdf"`;
     \}\];
     `notes`: readonly \[`"Coverage is typed for SAP Cloud for Customer OData ServiceRequestCollection create, read by ObjectID, patch, collection query, CSRF token preflight, and readiness checks used by Cognidesk support workflows."`, `"This is not full SAP Service Cloud API coverage; notes, descriptions, attachments, involved parties, service categories, code-list discovery, custom OData services, communication arrangements, workflow actions, v2 migration policy, and broader SAP Cloud for Customer APIs remain outside this adapter."`\];
     `scope`: `"support-workflow-subset"`;
  \};
  `credentialRequirements`: readonly \[\{
     `description`: `"The SDK user's SAP Cloud for Customer or SAP Service Cloud tenant URL."`;
     `id`: `"sap-service-cloud-tenant"`;
     `label`: `"SAP Service Cloud tenant URL"`;
     `required`: `true`;
   \}, \{
     `description`: `"Server-side Basic Auth, communication user/arrangement, or OAuth bearer access authorized for the SAP Cloud for Customer OData API."`;
     `id`: `"sap-service-cloud-api-access"`;
     `label`: `"SAP Service Cloud OData API access"`;
     `metadata`: \{
        `privilegeGuidance`: `"These strings are Cognidesk capability labels for ServiceRequestCollection access, not official SAP OAuth scope names. SAP authorization depends on communication arrangements, business user permissions, and exposed OData services."`;
        `scopeKind`: `"internal-capability-labels"`;
     \};
     `required`: `true`;
     `scopes`: readonly \[`"ServiceRequestCollection:read"`, `"ServiceRequestCollection:write"`\];
  \}\];
  `directions`: readonly \[`"bidirectional"`\];
  `id`: `"ticketing.sap-service-cloud"`;
  `limitations`: readonly \[`"SAP tenant OData exposure, communication arrangements, required fields, statuses, code lists, workflow rules, and extensions are SDK-user configuration."`, `"SDK users own escalation timing, customer matching, field mapping, reply visibility, retention, and notification policy before calling SAP APIs."`\];
  `maintainers`: readonly \[\{
     `name`: `"Cognidesk"`;
     `type`: `"official"`;
  \}\];
  `metadata`: \{
     `channelCoverage`: \{
        `attachmentFolder`: `"provider-supported-not-typed"`;
        `csrfToken`: `"typed-selected"`;
        `notesInvolvedPartiesCodeLists`: `"provider-supported-not-typed"`;
        `readinessSearch`: `"typed-search"`;
        `serviceRequests`: `"typed-create-read-update-search"`;
        `workflowRulesCommunicationArrangements`: `"not-covered"`;
     \};
     `checkedProviderApiCoverage`: \{
        `checkedFamilyCount`: `3`;
        `coverageArtifact`: `"docs/provider-coverage/sap-service-cloud-checked-c4c-odata-2026-06-18.inventory.json"`;
        `gapFamilyCount`: `1`;
        `implementedFamilyCount`: `2`;
        `implementedOperationCount`: `5`;
        `sourceKind`: `"checked-endpoint-family-inventory"`;
        `verifiedAt`: `"2026-06-18"`;
     \};
     `implementation`: \{
        `strategy`: `"direct-http-support-slice"`;
     \};
     `implementationStrategy`: \{
        `checkedAt`: `"2026-06-21"`;
        `reason`: `"SAP Cloud SDK for JavaScript is maintained and viable for OData v2/generator/HTTP transport, but this package keeps the reviewed ServiceRequestCollection slice until a redistributable EDMX/source artifact can be pinned."`;
        `strategy`: `"sdk-viable-reviewed-support-slice"`;
        `viableLibraries`: readonly \[\{
           `integrity`: `"sha512-/t1ncLEnm3yTzHRkIgpNcUMGHk7jvQ1nSHrb7YgvgU+/Q2P5Au8llPEH/zudXZ8Bd3k9Qdrfdq/hl+w+YWkBIg=="`;
           `packageName`: `"@sap-cloud-sdk/odata-v2"`;
           `version`: `"4.7.0"`;
         \}, \{
           `integrity`: `"sha512-aW17rUVIZl5RA3WoTTErBwwWCX5A3AresM13Vs7fKEc3Z52919KTlH+7Cpf/9qJrNDQUZU6RzCw+bHd5gs8wHA=="`;
           `packageName`: `"@sap-cloud-sdk/generator"`;
           `version`: `"4.7.0"`;
         \}, \{
           `integrity`: `"sha512-7+S6ru7SrnyKA2MGimX09oix0EVwmPGcCAz0TRwFZVnglU+VTRmZ8QdcwcVTR26E9YhkR4OVl6EK7jb2Z0OxfQ=="`;
           `packageName`: `"@sap-cloud-sdk/http-client"`;
           `version`: `"4.7.0"`;
        \}\];
     \};
     `supportOperationSlice`: \{
        `allowlistSha256`: `"0878a63145c55ce016d71a56643a963adc9fe945c7d0a029286d567e5027f30f"`;
        `checkedAt`: `"2026-06-21"`;
        `operations`: readonly \[\{
           `alias`: `"ticket.create"`;
           `method`: `"POST"`;
           `path`: `"{odataPath}/ServiceRequestCollection"`;
         \}, \{
           `alias`: `"ticket.read"`;
           `method`: `"GET"`;
           `path`: `"{odataPath}/ServiceRequestCollection('{ObjectID}')"`;
         \}, \{
           `alias`: `"ticket.update"`;
           `method`: `"PATCH"`;
           `path`: `"{odataPath}/ServiceRequestCollection('{ObjectID}')"`;
         \}, \{
           `alias`: `"ticket.search"`;
           `method`: `"GET"`;
           `path`: `"{odataPath}/ServiceRequestCollection"`;
        \}\];
        `sourceKind`: `"official-docs-reviewed-slice"`;
        `sourceVersion`: `"/sap/c4c/odata/v1/c4codataapi"`;
     \};
  \};
  `name`: `"SAP Service Cloud"`;
  `operations`: readonly \[\{
     `alias`: `"ticket.create"`;
     `audiences`: readonly \[`"customer-facing"`, `"internal-support"`, `"mixed"`\];
     `capability`: `"create-provider-object"`;
     `changesWorkflow`: `true`;
     `exposesSensitiveData`: `true`;
     `providerObject`: `"sapServiceRequest"`;
     `requiresCredential`: `true`;
     `sideEffect`: `true`;
   \}, \{
     `alias`: `"ticket.read"`;
     `audiences`: readonly \[`"customer-facing"`, `"internal-support"`, `"mixed"`\];
     `capability`: `"read-provider-object"`;
     `exposesSensitiveData`: `true`;
     `providerObject`: `"sapServiceRequest"`;
     `requiresCredential`: `true`;
   \}, \{
     `alias`: `"ticket.update"`;
     `audiences`: readonly \[`"internal-support"`, `"mixed"`\];
     `capability`: `"update-provider-object"`;
     `changesWorkflow`: `true`;
     `exposesSensitiveData`: `true`;
     `providerObject`: `"sapServiceRequest"`;
     `requiresCredential`: `true`;
     `sideEffect`: `true`;
   \}, \{
     `alias`: `"ticket.search"`;
     `audiences`: readonly \[`"customer-facing"`, `"internal-support"`, `"mixed"`\];
     `capability`: `"search-provider-object"`;
     `exposesSensitiveData`: `true`;
     `providerObject`: `"sapServiceRequest"`;
     `requiresCredential`: `true`;
  \}\];
  `packageName`: `"@cognidesk/integration-ticketing-sap-service-cloud"`;
  `privacyNotes`: readonly \[`"SAP service requests can contain customer account/contact details, ticket descriptions, categories, priorities, involved parties, notes, and internal routing data."`, `"SAP API credentials stay server-side and Studio receives only readiness and scope status."`\];
  `provider`: `"sap-service-cloud"`;
  `trustLevel`: `"official"`;
\}, [`SapServiceCloudTicketingIntegrationOptions`](#sapservicecloudticketingintegrationoptions), \{
  `ticket.create`: (`input`) => `Promise`\<[`SapServiceRequestResource`](#sapservicerequestresource)\>;
  `ticket.read`: (`input`) => `Promise`\<[`SapServiceRequestResource`](#sapservicerequestresource)\>;
  `ticket.search`: (`input?`) => `Promise`\<[`SapServiceSearchResult`](#sapservicesearchresult)\<[`SapServiceRequestResource`](#sapservicerequestresource)\>\>;
  `ticket.update`: (`input`) => `Promise`\<[`SapServiceRequestResource`](#sapservicerequestresource)\>;
\}\>

***

### createSapServiceCloudTicketingLiveChecks()

```ts
function createSapServiceCloudTicketingLiveChecks(options): {
  description: string;
  id: string;
  requiredCredentialIds: string[];
  run: Promise<{
     details: {
        count: string;
        sampleCount: number;
     };
  }>;
}[];
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`SapServiceCloudLiveCheckOptions`](#sapservicecloudlivecheckoptions) |

#### Returns

\{
  `description`: `string`;
  `id`: `string`;
  `requiredCredentialIds`: `string`[];
  `run`: `Promise`\<\{
     `details`: \{
        `count`: `string`;
        `sampleCount`: `number`;
     \};
  \}\>;
\}[]

***

### createSapServiceCloudTicketingOperationHandlers()

```ts
function createSapServiceCloudTicketingOperationHandlers(client): {
  ticket.create: (input) => Promise<SapServiceRequestResource>;
  ticket.read: (input) => Promise<SapServiceRequestResource>;
  ticket.search: (input?) => Promise<SapServiceSearchResult<SapServiceRequestResource>>;
  ticket.update: (input) => Promise<SapServiceRequestResource>;
};
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `client` | [`SapServiceCloudTicketingClient`](#sapservicecloudticketingclient) |

#### Returns

```ts
{
  ticket.create: (input) => Promise<SapServiceRequestResource>;
  ticket.read: (input) => Promise<SapServiceRequestResource>;
  ticket.search: (input?) => Promise<SapServiceSearchResult<SapServiceRequestResource>>;
  ticket.update: (input) => Promise<SapServiceRequestResource>;
}
```

| Name | Type |
| ------ | ------ |
| `ticket.create()` | (`input`) => `Promise`\<[`SapServiceRequestResource`](#sapservicerequestresource)\> |
| `ticket.read()` | (`input`) => `Promise`\<[`SapServiceRequestResource`](#sapservicerequestresource)\> |
| `ticket.search()` | (`input?`) => `Promise`\<[`SapServiceSearchResult`](#sapservicesearchresult)\<[`SapServiceRequestResource`](#sapservicerequestresource)\>\> |
| `ticket.update()` | (`input`) => `Promise`\<[`SapServiceRequestResource`](#sapservicerequestresource)\> |

***

### sapServiceCloudTicketingCredentialStatuses()

```ts
function sapServiceCloudTicketingCredentialStatuses(input): {
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
| `input` | [`SapServiceCloudCredentialStatusInput`](#sapservicecloudcredentialstatusinput) |

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

### sapServiceCloudTicketingProviderManifest

Re-exports [sapServiceCloudTicketingProviderManifest](dist/manifest.md#sapservicecloudticketingprovidermanifest)
