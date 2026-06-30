# integrations/ticketing/sap-service-cloud/dist

## Classes

### SapServiceCloudProviderApiError

#### Extends

- `Error`

#### Constructors

##### Constructor

```ts
new SapServiceCloudProviderApiError(input): SapServiceCloudProviderApiError;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`SapServiceCloudProviderApiErrorInput`](#sapservicecloudproviderapierrorinput) |

###### Returns

[`SapServiceCloudProviderApiError`](#sapservicecloudproviderapierror)

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
readonly provider: "sap-service-cloud" = "sap-service-cloud";
```

##### response

```ts
readonly response: SapServiceCloudProviderApiErrorResponseMetadata;
```

##### status

```ts
readonly status: number;
```

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

##### password?

```ts
optional password?: string;
```

##### providerClient?

```ts
optional providerClient?: SapServiceCloudTicketingProviderClient;
```

##### providerClientConfigured?

```ts
optional providerClientConfigured?: boolean;
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

##### auth?

```ts
optional auth?: SapServiceCloudAuthOptions;
```

###### Inherited from

[`SapServiceCloudTicketingClientOptions`](#sapservicecloudticketingclientoptions).[`auth`](#auth-1)

##### baseUrl?

```ts
optional baseUrl?: string;
```

###### Inherited from

[`SapServiceCloudTicketingClientOptions`](#sapservicecloudticketingclientoptions).[`baseUrl`](#baseurl-2)

##### client?

```ts
optional client?: Pick<SapServiceCloudTicketingClient, "readiness">;
```

##### csrfToken?

```ts
optional csrfToken?: string;
```

###### Inherited from

[`SapServiceCloudTicketingClientOptions`](#sapservicecloudticketingclientoptions).[`csrfToken`](#csrftoken-1)

##### headers?

```ts
optional headers?: Record<string, string>;
```

###### Inherited from

[`SapServiceCloudTicketingClientOptions`](#sapservicecloudticketingclientoptions).[`headers`](#headers-2)

##### odataBasePath?

```ts
optional odataBasePath?: string;
```

###### Inherited from

[`SapServiceCloudTicketingClientOptions`](#sapservicecloudticketingclientoptions).[`odataBasePath`](#odatabasepath-1)

##### password?

```ts
optional password?: string;
```

###### Inherited from

[`SapServiceCloudTicketingClientOptions`](#sapservicecloudticketingclientoptions).[`password`](#password-2)

##### providerClient?

```ts
optional providerClient?: SapServiceCloudTicketingProviderClient;
```

###### Inherited from

[`SapServiceCloudTicketingClientOptions`](#sapservicecloudticketingclientoptions).[`providerClient`](#providerclient-2)

##### signal?

```ts
optional signal?: AbortSignal;
```

###### Inherited from

[`SapServiceCloudTicketingClientOptions`](#sapservicecloudticketingclientoptions).[`signal`](#signal-1)

##### timeoutMs?

```ts
optional timeoutMs?: number;
```

###### Inherited from

[`SapServiceCloudTicketingClientOptions`](#sapservicecloudticketingclientoptions).[`timeoutMs`](#timeoutms-1)

##### username?

```ts
optional username?: string;
```

###### Inherited from

[`SapServiceCloudTicketingClientOptions`](#sapservicecloudticketingclientoptions).[`username`](#username-2)

***

### SapServiceCloudProviderApiErrorInput

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
response: SapServiceCloudProviderApiErrorResponseMetadata;
```

##### status

```ts
status: number;
```

***

### SapServiceCloudProviderApiErrorResponseMetadata

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

### SapServiceCloudTicketingClientOptions

#### Extended by

- [`SapServiceCloudLiveCheckOptions`](#sapservicecloudlivecheckoptions)
- [`SapServiceCloudTicketingIntegrationOptions`](#sapservicecloudticketingintegrationoptions)

#### Properties

##### accessToken?

```ts
optional accessToken?: string;
```

##### auth?

```ts
optional auth?: SapServiceCloudAuthOptions;
```

##### baseUrl?

```ts
optional baseUrl?: string;
```

##### csrfToken?

```ts
optional csrfToken?: string;
```

##### headers?

```ts
optional headers?: Record<string, string>;
```

##### odataBasePath?

```ts
optional odataBasePath?: string;
```

##### password?

```ts
optional password?: string;
```

##### providerClient?

```ts
optional providerClient?: SapServiceCloudTicketingProviderClient;
```

##### signal?

```ts
optional signal?: AbortSignal;
```

##### timeoutMs?

```ts
optional timeoutMs?: number;
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

##### auth?

```ts
optional auth?: SapServiceCloudAuthOptions;
```

###### Inherited from

[`SapServiceCloudTicketingClientOptions`](#sapservicecloudticketingclientoptions).[`auth`](#auth-1)

##### baseUrl?

```ts
optional baseUrl?: string;
```

###### Inherited from

[`SapServiceCloudTicketingClientOptions`](#sapservicecloudticketingclientoptions).[`baseUrl`](#baseurl-2)

##### client?

```ts
optional client?: SapServiceCloudTicketingProviderClient;
```

##### csrfToken?

```ts
optional csrfToken?: string;
```

###### Inherited from

[`SapServiceCloudTicketingClientOptions`](#sapservicecloudticketingclientoptions).[`csrfToken`](#csrftoken-1)

##### headers?

```ts
optional headers?: Record<string, string>;
```

###### Inherited from

[`SapServiceCloudTicketingClientOptions`](#sapservicecloudticketingclientoptions).[`headers`](#headers-2)

##### odataBasePath?

```ts
optional odataBasePath?: string;
```

###### Inherited from

[`SapServiceCloudTicketingClientOptions`](#sapservicecloudticketingclientoptions).[`odataBasePath`](#odatabasepath-1)

##### password?

```ts
optional password?: string;
```

###### Inherited from

[`SapServiceCloudTicketingClientOptions`](#sapservicecloudticketingclientoptions).[`password`](#password-2)

##### providerClient?

```ts
optional providerClient?: SapServiceCloudTicketingProviderClient;
```

###### Inherited from

[`SapServiceCloudTicketingClientOptions`](#sapservicecloudticketingclientoptions).[`providerClient`](#providerclient-2)

##### signal?

```ts
optional signal?: AbortSignal;
```

###### Inherited from

[`SapServiceCloudTicketingClientOptions`](#sapservicecloudticketingclientoptions).[`signal`](#signal-1)

##### timeoutMs?

```ts
optional timeoutMs?: number;
```

###### Inherited from

[`SapServiceCloudTicketingClientOptions`](#sapservicecloudticketingclientoptions).[`timeoutMs`](#timeoutms-1)

##### username?

```ts
optional username?: string;
```

###### Inherited from

[`SapServiceCloudTicketingClientOptions`](#sapservicecloudticketingclientoptions).[`username`](#username-2)

***

### SapServiceCloudTicketingProviderClient

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

### SapServiceCloudAuthOptions

```ts
type SapServiceCloudAuthOptions =
  | {
  accessToken: string;
  type: "bearer";
}
  | {
  password: string;
  type: "basic";
  username: string;
}
  | {
  headers: Record<string, string>;
  type: "headers";
};
```

***

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

### SapServiceCloudSdkHttpDestination

```ts
type SapServiceCloudSdkHttpDestination = Parameters<typeof executeHttpRequest>[0];
```

***

### SapServiceCloudTicketingClient

```ts
type SapServiceCloudTicketingClient = SapServiceCloudTicketingProviderClient;
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

### createSapServiceCloudODataProviderClient()

```ts
function createSapServiceCloudODataProviderClient(options): SapServiceCloudTicketingProviderClient;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`SapServiceCloudTicketingClientOptions`](#sapservicecloudticketingclientoptions) |

#### Returns

[`SapServiceCloudTicketingProviderClient`](#sapservicecloudticketingproviderclient)

***

### createSapServiceCloudTicketingClient()

```ts
function createSapServiceCloudTicketingClient(options?): SapServiceCloudTicketingProviderClient;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options?` | [`SapServiceCloudTicketingClientOptions`](#sapservicecloudticketingclientoptions) |

#### Returns

[`SapServiceCloudTicketingProviderClient`](#sapservicecloudticketingproviderclient)

***

### createSapServiceCloudTicketingIntegration()

```ts
function createSapServiceCloudTicketingIntegration(options?): DefinedIntegration<{
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
     description: "Creates or updates SAP Service Cloud ServiceRequestCollection records through the built-in OData adapter or host provider client as SDK-configured support handoff targets.";
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
     description: "Creates SAP Service Cloud ServiceRequestCollection tickets through the built-in OData adapter or host provider client from SDK-user-selected workflows.";
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
     description: "Updates SAP Service Cloud ticket fields, statuses, priorities, or SDK-user custom fields through the built-in OData adapter or host provider client.";
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
     description: "Queries SAP Service Cloud ServiceRequestCollection with SDK-user-supplied OData query controls.";
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
     notes: readonly ["Runtime coverage uses the built-in SAP Service Cloud OData adapter backed by the official SAP Cloud SDK HTTP client for selected ServiceRequestCollection create, read by ObjectID, update, search, and readiness workflows when baseUrl plus access credentials are provided.", "A host-injected SapServiceCloudTicketingProviderClient remains available as an override for SDK-user-owned generated clients, destination handling, authentication, retries, or endpoint policy.", "This is not full SAP Service Cloud API coverage; notes, descriptions, attachments, involved parties, service categories, code-list discovery, custom OData services, communication arrangements, workflow actions, v2 migration policy, and broader SAP Cloud for Customer APIs remain outside this adapter."];
     scope: "support-workflow-subset";
  };
  credentialRequirements: readonly [{
     description: "Optional SapServiceCloudTicketingProviderClient override that encapsulates SAP Service Cloud tenant routing, generated SDK/provider runtime, authentication, retries, and endpoint policy.";
     id: "sap-service-cloud-provider-client";
     label: "Optional SAP Service Cloud provider client override";
     metadata: {
        credentialOwnership: "host-managed-override";
        defaultClientPolicy: "built-in-odata-adapter-backed-by-sap-cloud-sdk-http-client";
        injectionInterface: "SapServiceCloudTicketingProviderClient";
     };
     required: false;
   }, {
     description: "SAP Service Cloud tenant base URL used by the built-in OData adapter, or supplied by a host provider client override.";
     id: "sap-service-cloud-instance";
     label: "SAP Service Cloud base URL";
     metadata: {
        requiredWhen: "built-in-odata-adapter-backed-by-sap-cloud-sdk-http-client";
     };
     required: false;
   }, {
     description: "Server-side SAP Service Cloud access supplied as accessToken, basic auth, auth headers, or encapsulated in a host provider client override.";
     id: "sap-service-cloud-api-access";
     label: "SAP Service Cloud API access";
     metadata: {
        privilegeGuidance: "These strings are Cognidesk capability labels for ServiceRequestCollection access, not official SAP OAuth scope names. SAP authorization depends on the host client's communication arrangements, destination/auth configuration, business user permissions, and exposed services.";
        requiredWhen: "built-in-odata-adapter-backed-by-sap-cloud-sdk-http-client";
        scopeKind: "internal-capability-labels";
     };
     required: false;
     scopes: readonly ["ServiceRequestCollection:read", "ServiceRequestCollection:write"];
  }];
  directions: readonly ["bidirectional"];
  id: "ticketing.sap-service-cloud";
  limitations: readonly ["SAP tenant exposure, communication arrangements, required fields, statuses, code lists, workflow rules, and extensions are SDK-user host-client configuration.", "The built-in adapter covers selected ServiceRequestCollection OData operations only; hosts can still inject a SapServiceCloudTicketingProviderClient for generated clients, destinations, custom auth, CSRF preflights, or retry policy.", "SDK users own escalation timing, customer matching, field mapping, reply visibility, retention, and notification policy before calling SAP APIs."];
  maintainers: readonly [{
     name: "Cognidesk";
     type: "official";
  }];
  metadata: {
     channelCoverage: {
        attachmentFolder: "provider-supported-not-typed";
        csrfToken: "typed-optional-header-supported-host-owned-prefetch";
        notesInvolvedPartiesCodeLists: "provider-supported-not-typed";
        readinessSearch: "typed-odata-adapter-readiness";
        serviceRequests: "typed-odata-adapter-create-read-update-search";
        workflowRulesCommunicationArrangements: "not-covered";
     };
     checkedProviderApiCoverage: {
        checkedFamilyCount: 3;
        coverageArtifact: "docs/provider-coverage/sap-service-cloud-checked-c4c-odata-2026-06-18.inventory.json";
        gapFamilyCount: 1;
        implementedFamilyCount: 2;
        implementedOperationCount: 4;
        sourceKind: "checked-endpoint-family-inventory";
        verifiedAt: "2026-06-18";
     };
     checkedProviderSdk: {
        candidates: readonly [{
           checkedVersion: "4.7.0";
           license: "Apache-2.0";
           package: "@sap-cloud-sdk/http-client";
           reason: "Official SAP Cloud SDK HTTP client provides executeHttpRequest and typed request/response surfaces suitable for the package's existing ServiceRequestCollection OData mapping.";
           result: "accepted-runtime-http-client";
         }, {
           checkedVersion: "4.7.0";
           license: "Apache-2.0";
           package: "@sap-cloud-sdk/odata-v2";
           reason: "Official generic SAP Cloud SDK OData v2 runtime; requires generated service client metadata and host destination/auth setup rather than providing a SAP Service Cloud ServiceRequestCollection client.";
           result: "not-generated-client-in-this-package";
         }, {
           checkedVersion: "4.7.0";
           license: "Apache-2.0";
           package: "@sap-cloud-sdk/generator";
           reason: "Official generator for EDMX-based clients; this package does not own or redistribute tenant/version-specific SAP Service Cloud metadata.";
           result: "not-runtime-client";
        }];
        checkedAt: "2026-06-25";
        reason: "SAP Cloud SDK for JavaScript is official and current. No generated ServiceRequestCollection client is bundled here, so this package owns the typed OData path/body mapping while delegating runtime HTTP execution to @sap-cloud-sdk/http-client.";
        sources: readonly ["https://sap.github.io/cloud-sdk/docs/js/overview", "https://sap.github.io/cloud-sdk/docs/js/features/odata/overview", "https://sap.github.io/cloud-sdk/docs/js/features/odata/generate-client", "https://www.npmjs.com/package/@sap-cloud-sdk/http-client", "https://www.npmjs.com/package/@sap-cloud-sdk/odata-v2"];
        verdict: "sdk-backed-generic-odata-http-client";
     };
     implementation: {
        adapterKind: "sap-cloud-sdk-http-client-odata-adapter";
        defaultFetchClient: "none-provider-client-override-only";
        defaultHttpClient: "executeHttpRequest";
        manifestImport: "no-client-initialization";
        packageOwnedODataMapping: true;
        packageOwnedRestClient: false;
        providerClientInterface: "SapServiceCloudTicketingProviderClient";
        providerClientOverride: true;
        providerSdkPackage: "@sap-cloud-sdk/http-client";
        strategy: "provider-sdk-http-client-odata-adapter";
     };
     implementationStrategy: "sap-cloud-sdk-http-client-odata-adapter";
     providerClient: {
        defaultClient: "built-in-odata-adapter-backed-by-sap-cloud-sdk-http-client";
        importPolicy: "optional-host-override";
        injectionPolicy: "optional-runtime-override";
        interface: "SapServiceCloudTicketingProviderClient";
     };
     providerRestAdapterSupportSurface: {
        adapterKind: "sap-cloud-sdk-http-client-odata-adapter";
        operations: readonly [{
           alias: "ticket.create";
           providerClientMethod: "createServiceRequest";
         }, {
           alias: "ticket.read";
           providerClientMethod: "getServiceRequest";
         }, {
           alias: "ticket.update";
           providerClientMethod: "updateServiceRequest";
         }, {
           alias: "ticket.search";
           providerClientMethod: "searchServiceRequests";
        }];
        source: "Built-in SAP Service Cloud OData mapping executed through SAP Cloud SDK HTTP client";
     };
     providerSdkRuntime: {
        checkedVersion: "4.7.0";
        compatibilityFallback: "Explicit host fetch or retry options keep the legacy integration-kit JSON transport for callers that require fetch injection or integration-kit retry semantics.";
        defaultRuntime: "SAP Cloud SDK HTTP client executes the package-owned ServiceRequestCollection OData mapping.";
        importedRuntimeFunction: "executeHttpRequest";
        importedRuntimeTypes: readonly ["HttpRequestConfig", "HttpResponse", "Method"];
        license: "Apache-2.0";
        package: "@sap-cloud-sdk/http-client";
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
}, unknown, {
  ticket.create: (input) => Promise<SapServiceRequestResource>;
  ticket.read: (input) => Promise<SapServiceRequestResource>;
  ticket.search: (input?) => Promise<SapServiceSearchResult<SapServiceRequestResource>>;
  ticket.update: (input) => Promise<SapServiceRequestResource>;
}>;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options?` | [`SapServiceCloudTicketingIntegrationOptions`](#sapservicecloudticketingintegrationoptions) |

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
     `description`: `"Creates or updates SAP Service Cloud ServiceRequestCollection records through the built-in OData adapter or host provider client as SDK-configured support handoff targets."`;
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
     `description`: `"Creates SAP Service Cloud ServiceRequestCollection tickets through the built-in OData adapter or host provider client from SDK-user-selected workflows."`;
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
     `description`: `"Updates SAP Service Cloud ticket fields, statuses, priorities, or SDK-user custom fields through the built-in OData adapter or host provider client."`;
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
     `description`: `"Queries SAP Service Cloud ServiceRequestCollection with SDK-user-supplied OData query controls."`;
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
     `notes`: readonly \[`"Runtime coverage uses the built-in SAP Service Cloud OData adapter backed by the official SAP Cloud SDK HTTP client for selected ServiceRequestCollection create, read by ObjectID, update, search, and readiness workflows when baseUrl plus access credentials are provided."`, `"A host-injected SapServiceCloudTicketingProviderClient remains available as an override for SDK-user-owned generated clients, destination handling, authentication, retries, or endpoint policy."`, `"This is not full SAP Service Cloud API coverage; notes, descriptions, attachments, involved parties, service categories, code-list discovery, custom OData services, communication arrangements, workflow actions, v2 migration policy, and broader SAP Cloud for Customer APIs remain outside this adapter."`\];
     `scope`: `"support-workflow-subset"`;
  \};
  `credentialRequirements`: readonly \[\{
     `description`: `"Optional SapServiceCloudTicketingProviderClient override that encapsulates SAP Service Cloud tenant routing, generated SDK/provider runtime, authentication, retries, and endpoint policy."`;
     `id`: `"sap-service-cloud-provider-client"`;
     `label`: `"Optional SAP Service Cloud provider client override"`;
     `metadata`: \{
        `credentialOwnership`: `"host-managed-override"`;
        `defaultClientPolicy`: `"built-in-odata-adapter-backed-by-sap-cloud-sdk-http-client"`;
        `injectionInterface`: `"SapServiceCloudTicketingProviderClient"`;
     \};
     `required`: `false`;
   \}, \{
     `description`: `"SAP Service Cloud tenant base URL used by the built-in OData adapter, or supplied by a host provider client override."`;
     `id`: `"sap-service-cloud-instance"`;
     `label`: `"SAP Service Cloud base URL"`;
     `metadata`: \{
        `requiredWhen`: `"built-in-odata-adapter-backed-by-sap-cloud-sdk-http-client"`;
     \};
     `required`: `false`;
   \}, \{
     `description`: `"Server-side SAP Service Cloud access supplied as accessToken, basic auth, auth headers, or encapsulated in a host provider client override."`;
     `id`: `"sap-service-cloud-api-access"`;
     `label`: `"SAP Service Cloud API access"`;
     `metadata`: \{
        `privilegeGuidance`: `"These strings are Cognidesk capability labels for ServiceRequestCollection access, not official SAP OAuth scope names. SAP authorization depends on the host client's communication arrangements, destination/auth configuration, business user permissions, and exposed services."`;
        `requiredWhen`: `"built-in-odata-adapter-backed-by-sap-cloud-sdk-http-client"`;
        `scopeKind`: `"internal-capability-labels"`;
     \};
     `required`: `false`;
     `scopes`: readonly \[`"ServiceRequestCollection:read"`, `"ServiceRequestCollection:write"`\];
  \}\];
  `directions`: readonly \[`"bidirectional"`\];
  `id`: `"ticketing.sap-service-cloud"`;
  `limitations`: readonly \[`"SAP tenant exposure, communication arrangements, required fields, statuses, code lists, workflow rules, and extensions are SDK-user host-client configuration."`, `"The built-in adapter covers selected ServiceRequestCollection OData operations only; hosts can still inject a SapServiceCloudTicketingProviderClient for generated clients, destinations, custom auth, CSRF preflights, or retry policy."`, `"SDK users own escalation timing, customer matching, field mapping, reply visibility, retention, and notification policy before calling SAP APIs."`\];
  `maintainers`: readonly \[\{
     `name`: `"Cognidesk"`;
     `type`: `"official"`;
  \}\];
  `metadata`: \{
     `channelCoverage`: \{
        `attachmentFolder`: `"provider-supported-not-typed"`;
        `csrfToken`: `"typed-optional-header-supported-host-owned-prefetch"`;
        `notesInvolvedPartiesCodeLists`: `"provider-supported-not-typed"`;
        `readinessSearch`: `"typed-odata-adapter-readiness"`;
        `serviceRequests`: `"typed-odata-adapter-create-read-update-search"`;
        `workflowRulesCommunicationArrangements`: `"not-covered"`;
     \};
     `checkedProviderApiCoverage`: \{
        `checkedFamilyCount`: `3`;
        `coverageArtifact`: `"docs/provider-coverage/sap-service-cloud-checked-c4c-odata-2026-06-18.inventory.json"`;
        `gapFamilyCount`: `1`;
        `implementedFamilyCount`: `2`;
        `implementedOperationCount`: `4`;
        `sourceKind`: `"checked-endpoint-family-inventory"`;
        `verifiedAt`: `"2026-06-18"`;
     \};
     `checkedProviderSdk`: \{
        `candidates`: readonly \[\{
           `checkedVersion`: `"4.7.0"`;
           `license`: `"Apache-2.0"`;
           `package`: `"@sap-cloud-sdk/http-client"`;
           `reason`: `"Official SAP Cloud SDK HTTP client provides executeHttpRequest and typed request/response surfaces suitable for the package's existing ServiceRequestCollection OData mapping."`;
           `result`: `"accepted-runtime-http-client"`;
         \}, \{
           `checkedVersion`: `"4.7.0"`;
           `license`: `"Apache-2.0"`;
           `package`: `"@sap-cloud-sdk/odata-v2"`;
           `reason`: `"Official generic SAP Cloud SDK OData v2 runtime; requires generated service client metadata and host destination/auth setup rather than providing a SAP Service Cloud ServiceRequestCollection client."`;
           `result`: `"not-generated-client-in-this-package"`;
         \}, \{
           `checkedVersion`: `"4.7.0"`;
           `license`: `"Apache-2.0"`;
           `package`: `"@sap-cloud-sdk/generator"`;
           `reason`: `"Official generator for EDMX-based clients; this package does not own or redistribute tenant/version-specific SAP Service Cloud metadata."`;
           `result`: `"not-runtime-client"`;
        \}\];
        `checkedAt`: `"2026-06-25"`;
        `reason`: `"SAP Cloud SDK for JavaScript is official and current. No generated ServiceRequestCollection client is bundled here, so this package owns the typed OData path/body mapping while delegating runtime HTTP execution to @sap-cloud-sdk/http-client."`;
        `sources`: readonly \[`"https://sap.github.io/cloud-sdk/docs/js/overview"`, `"https://sap.github.io/cloud-sdk/docs/js/features/odata/overview"`, `"https://sap.github.io/cloud-sdk/docs/js/features/odata/generate-client"`, `"https://www.npmjs.com/package/@sap-cloud-sdk/http-client"`, `"https://www.npmjs.com/package/@sap-cloud-sdk/odata-v2"`\];
        `verdict`: `"sdk-backed-generic-odata-http-client"`;
     \};
     `implementation`: \{
        `adapterKind`: `"sap-cloud-sdk-http-client-odata-adapter"`;
        `defaultFetchClient`: `"none-provider-client-override-only"`;
        `defaultHttpClient`: `"executeHttpRequest"`;
        `manifestImport`: `"no-client-initialization"`;
        `packageOwnedODataMapping`: `true`;
        `packageOwnedRestClient`: `false`;
        `providerClientInterface`: `"SapServiceCloudTicketingProviderClient"`;
        `providerClientOverride`: `true`;
        `providerSdkPackage`: `"@sap-cloud-sdk/http-client"`;
        `strategy`: `"provider-sdk-http-client-odata-adapter"`;
     \};
     `implementationStrategy`: `"sap-cloud-sdk-http-client-odata-adapter"`;
     `providerClient`: \{
        `defaultClient`: `"built-in-odata-adapter-backed-by-sap-cloud-sdk-http-client"`;
        `importPolicy`: `"optional-host-override"`;
        `injectionPolicy`: `"optional-runtime-override"`;
        `interface`: `"SapServiceCloudTicketingProviderClient"`;
     \};
     `providerRestAdapterSupportSurface`: \{
        `adapterKind`: `"sap-cloud-sdk-http-client-odata-adapter"`;
        `operations`: readonly \[\{
           `alias`: `"ticket.create"`;
           `providerClientMethod`: `"createServiceRequest"`;
         \}, \{
           `alias`: `"ticket.read"`;
           `providerClientMethod`: `"getServiceRequest"`;
         \}, \{
           `alias`: `"ticket.update"`;
           `providerClientMethod`: `"updateServiceRequest"`;
         \}, \{
           `alias`: `"ticket.search"`;
           `providerClientMethod`: `"searchServiceRequests"`;
        \}\];
        `source`: `"Built-in SAP Service Cloud OData mapping executed through SAP Cloud SDK HTTP client"`;
     \};
     `providerSdkRuntime`: \{
        `checkedVersion`: `"4.7.0"`;
        `compatibilityFallback`: `"Explicit host fetch or retry options keep the legacy integration-kit JSON transport for callers that require fetch injection or integration-kit retry semantics."`;
        `defaultRuntime`: `"SAP Cloud SDK HTTP client executes the package-owned ServiceRequestCollection OData mapping."`;
        `importedRuntimeFunction`: `"executeHttpRequest"`;
        `importedRuntimeTypes`: readonly \[`"HttpRequestConfig"`, `"HttpResponse"`, `"Method"`\];
        `license`: `"Apache-2.0"`;
        `package`: `"@sap-cloud-sdk/http-client"`;
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
\}, `unknown`, \{
  `ticket.create`: (`input`) => `Promise`\<[`SapServiceRequestResource`](#sapservicerequestresource)\>;
  `ticket.read`: (`input`) => `Promise`\<[`SapServiceRequestResource`](#sapservicerequestresource)\>;
  `ticket.search`: (`input?`) => `Promise`\<[`SapServiceSearchResult`](#sapservicesearchresult)\<[`SapServiceRequestResource`](#sapservicerequestresource)\>\>;
  `ticket.update`: (`input`) => `Promise`\<[`SapServiceRequestResource`](#sapservicerequestresource)\>;
\}\>

***

### createSapServiceCloudTicketingLiveChecks()

```ts
function createSapServiceCloudTicketingLiveChecks(options?): {
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
| `options?` | [`SapServiceCloudLiveCheckOptions`](#sapservicecloudlivecheckoptions) |

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
| `client` | [`SapServiceCloudTicketingProviderClient`](#sapservicecloudticketingproviderclient) |

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

### createUnconfiguredSapServiceCloudProviderClient()

```ts
function createUnconfiguredSapServiceCloudProviderClient(): SapServiceCloudTicketingProviderClient;
```

#### Returns

[`SapServiceCloudTicketingProviderClient`](#sapservicecloudticketingproviderclient)

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
