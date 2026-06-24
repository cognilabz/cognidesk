# integrations/ticketing/oracle-service/dist

## Interfaces

### OracleServiceCreateMessageInput

#### Properties

##### channelTypeCode?

```ts
optional channelTypeCode?: string;
```

##### fields?

```ts
optional fields?: OracleServiceJsonObject;
```

##### messageContent?

```ts
optional messageContent?: string;
```

##### messageTypeCode

```ts
messageTypeCode: string;
```

##### socialPrivateFlag?

```ts
optional socialPrivateFlag?: boolean;
```

##### sourceCode?

```ts
optional sourceCode?: string;
```

##### srNumber

```ts
srNumber: string;
```

##### statusCode?

```ts
optional statusCode?: string;
```

***

### OracleServiceCreateRequestInput

#### Properties

##### accountPartyId?

```ts
optional accountPartyId?: number;
```

##### assigneeResourceId?

```ts
optional assigneeResourceId?: number;
```

##### categoryCode?

```ts
optional categoryCode?: string;
```

##### channelTypeCode?

```ts
optional channelTypeCode?: string;
```

##### fields?

```ts
optional fields?: OracleServiceJsonObject;
```

##### primaryContactPartyId?

```ts
optional primaryContactPartyId?: number;
```

##### problemDescription?

```ts
optional problemDescription?: string;
```

##### queueId?

```ts
optional queueId?: number;
```

##### severityCode?

```ts
optional severityCode?: string;
```

##### statusCode?

```ts
optional statusCode?: string;
```

##### title

```ts
title: string;
```

***

### OracleServiceCredentialStatusInput

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

### OracleServiceJsonObject

#### Extended by

- [`OracleServiceProviderExtensionFields`](#oracleserviceproviderextensionfields)
- [`OracleServiceProviderResponse`](#oracleserviceproviderresponse)

#### Indexable

```ts
[key: string]: OracleServiceProviderExtensionValue
```

***

### OracleServiceLiveCheckOptions

#### Extends

- [`OracleServiceTicketingClientOptions`](#oracleserviceticketingclientoptions)

#### Properties

##### accessToken?

```ts
optional accessToken?: string;
```

###### Inherited from

[`OracleServiceTicketingClientOptions`](#oracleserviceticketingclientoptions).[`accessToken`](#accesstoken-2)

##### apiVersion?

```ts
optional apiVersion?: string;
```

###### Inherited from

[`OracleServiceTicketingClientOptions`](#oracleserviceticketingclientoptions).[`apiVersion`](#apiversion-1)

##### client?

```ts
optional client?: Pick<OracleServiceTicketingClient, "readiness">;
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

[`OracleServiceTicketingClientOptions`](#oracleserviceticketingclientoptions).[`fetch`](#fetch-1)

##### instanceUrl

```ts
instanceUrl: string;
```

###### Inherited from

[`OracleServiceTicketingClientOptions`](#oracleserviceticketingclientoptions).[`instanceUrl`](#instanceurl-2)

##### password?

```ts
optional password?: string;
```

###### Inherited from

[`OracleServiceTicketingClientOptions`](#oracleserviceticketingclientoptions).[`password`](#password-2)

##### username?

```ts
optional username?: string;
```

###### Inherited from

[`OracleServiceTicketingClientOptions`](#oracleserviceticketingclientoptions).[`username`](#username-2)

***

### OracleServiceProviderExtensionFields

#### Extends

- [`OracleServiceJsonObject`](#oracleservicejsonobject)

#### Indexable

```ts
[key: string]: OracleServiceProviderExtensionValue
```

***

### OracleServiceProviderResponse

#### Extends

- [`OracleServiceJsonObject`](#oracleservicejsonobject)

#### Indexable

```ts
[key: string]: OracleServiceProviderExtensionValue
```

***

### OracleServiceReadOperationInput

#### Properties

##### srNumber

```ts
srNumber: string;
```

***

### OracleServiceSearchInput

#### Properties

##### expand?

```ts
optional expand?: string[];
```

##### fields?

```ts
optional fields?: string[];
```

##### finder?

```ts
optional finder?: string;
```

##### limit?

```ts
optional limit?: number;
```

##### offset?

```ts
optional offset?: number;
```

##### onlyData?

```ts
optional onlyData?: boolean;
```

##### orderBy?

```ts
optional orderBy?: string;
```

##### q?

```ts
optional q?: string;
```

***

### OracleServiceSearchResult

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | [`OracleServiceRequestResource`](#oracleservicerequestresource) |

#### Properties

##### count?

```ts
optional count?: number;
```

##### hasMore?

```ts
optional hasMore?: boolean;
```

##### items

```ts
items: T[];
```

##### limit?

```ts
optional limit?: number;
```

##### offset?

```ts
optional offset?: number;
```

***

### OracleServiceTicketingClient

#### Methods

##### createServiceRequest()

```ts
createServiceRequest(input): Promise<OracleServiceRequestResource>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`OracleServiceCreateRequestInput`](#oracleservicecreaterequestinput) |

###### Returns

`Promise`\<[`OracleServiceRequestResource`](#oracleservicerequestresource)\>

##### createServiceRequestMessage()

```ts
createServiceRequestMessage(input): Promise<OracleServiceProviderResponse>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`OracleServiceCreateMessageInput`](#oracleservicecreatemessageinput) |

###### Returns

`Promise`\<[`OracleServiceProviderResponse`](#oracleserviceproviderresponse)\>

##### getServiceRequest()

```ts
getServiceRequest(srNumber): Promise<OracleServiceRequestResource>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `srNumber` | `string` |

###### Returns

`Promise`\<[`OracleServiceRequestResource`](#oracleservicerequestresource)\>

##### readiness()

```ts
readiness(): Promise<OracleServiceSearchResult<OracleServiceRequestResource>>;
```

###### Returns

`Promise`\<[`OracleServiceSearchResult`](#oracleservicesearchresult)\<[`OracleServiceRequestResource`](#oracleservicerequestresource)\>\>

##### searchServiceRequests()

```ts
searchServiceRequests(input?): Promise<OracleServiceSearchResult<OracleServiceRequestResource>>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input?` | [`OracleServiceSearchInput`](#oracleservicesearchinput) |

###### Returns

`Promise`\<[`OracleServiceSearchResult`](#oracleservicesearchresult)\<[`OracleServiceRequestResource`](#oracleservicerequestresource)\>\>

##### updateServiceRequest()

```ts
updateServiceRequest(srNumber, input): Promise<OracleServiceRequestResource>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `srNumber` | `string` |
| `input` | [`OracleServiceUpdateRequestInput`](#oracleserviceupdaterequestinput) |

###### Returns

`Promise`\<[`OracleServiceRequestResource`](#oracleservicerequestresource)\>

***

### OracleServiceTicketingClientOptions

#### Extended by

- [`OracleServiceLiveCheckOptions`](#oracleservicelivecheckoptions)
- [`OracleServiceTicketingIntegrationOptions`](#oracleserviceticketingintegrationoptions)

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

##### password?

```ts
optional password?: string;
```

##### username?

```ts
optional username?: string;
```

***

### OracleServiceTicketingIntegrationOptions

#### Extends

- [`OracleServiceTicketingClientOptions`](#oracleserviceticketingclientoptions)

#### Properties

##### accessToken?

```ts
optional accessToken?: string;
```

###### Inherited from

[`OracleServiceTicketingClientOptions`](#oracleserviceticketingclientoptions).[`accessToken`](#accesstoken-2)

##### apiVersion?

```ts
optional apiVersion?: string;
```

###### Inherited from

[`OracleServiceTicketingClientOptions`](#oracleserviceticketingclientoptions).[`apiVersion`](#apiversion-1)

##### client?

```ts
optional client?: OracleServiceTicketingClient;
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

[`OracleServiceTicketingClientOptions`](#oracleserviceticketingclientoptions).[`fetch`](#fetch-1)

##### instanceUrl

```ts
instanceUrl: string;
```

###### Inherited from

[`OracleServiceTicketingClientOptions`](#oracleserviceticketingclientoptions).[`instanceUrl`](#instanceurl-2)

##### password?

```ts
optional password?: string;
```

###### Inherited from

[`OracleServiceTicketingClientOptions`](#oracleserviceticketingclientoptions).[`password`](#password-2)

##### username?

```ts
optional username?: string;
```

###### Inherited from

[`OracleServiceTicketingClientOptions`](#oracleserviceticketingclientoptions).[`username`](#username-2)

***

### OracleServiceUpdateOperationInput

#### Extends

- [`OracleServiceUpdateRequestInput`](#oracleserviceupdaterequestinput)

#### Properties

##### assigneeResourceId?

```ts
optional assigneeResourceId?: number;
```

###### Inherited from

[`OracleServiceUpdateRequestInput`](#oracleserviceupdaterequestinput).[`assigneeResourceId`](#assigneeresourceid-2)

##### fields?

```ts
optional fields?: OracleServiceJsonObject;
```

###### Inherited from

[`OracleServiceUpdateRequestInput`](#oracleserviceupdaterequestinput).[`fields`](#fields-4)

##### problemDescription?

```ts
optional problemDescription?: string;
```

###### Inherited from

[`OracleServiceUpdateRequestInput`](#oracleserviceupdaterequestinput).[`problemDescription`](#problemdescription-2)

##### queueId?

```ts
optional queueId?: number;
```

###### Inherited from

[`OracleServiceUpdateRequestInput`](#oracleserviceupdaterequestinput).[`queueId`](#queueid-2)

##### resolveDescription?

```ts
optional resolveDescription?: string;
```

###### Inherited from

[`OracleServiceUpdateRequestInput`](#oracleserviceupdaterequestinput).[`resolveDescription`](#resolvedescription-1)

##### severityCode?

```ts
optional severityCode?: string;
```

###### Inherited from

[`OracleServiceUpdateRequestInput`](#oracleserviceupdaterequestinput).[`severityCode`](#severitycode-2)

##### srNumber

```ts
srNumber: string;
```

##### statusCode?

```ts
optional statusCode?: string;
```

###### Inherited from

[`OracleServiceUpdateRequestInput`](#oracleserviceupdaterequestinput).[`statusCode`](#statuscode-3)

##### title?

```ts
optional title?: string;
```

###### Inherited from

[`OracleServiceUpdateRequestInput`](#oracleserviceupdaterequestinput).[`title`](#title-2)

***

### OracleServiceUpdateRequestInput

#### Extended by

- [`OracleServiceUpdateOperationInput`](#oracleserviceupdateoperationinput)

#### Properties

##### assigneeResourceId?

```ts
optional assigneeResourceId?: number;
```

##### fields?

```ts
optional fields?: OracleServiceJsonObject;
```

##### problemDescription?

```ts
optional problemDescription?: string;
```

##### queueId?

```ts
optional queueId?: number;
```

##### resolveDescription?

```ts
optional resolveDescription?: string;
```

##### severityCode?

```ts
optional severityCode?: string;
```

##### statusCode?

```ts
optional statusCode?: string;
```

##### title?

```ts
optional title?: string;
```

## Type Aliases

### OracleServiceJsonPrimitive

```ts
type OracleServiceJsonPrimitive = string | number | boolean | null;
```

***

### OracleServiceJsonValue

```ts
type OracleServiceJsonValue =
  | OracleServiceJsonPrimitive
  | OracleServiceJsonObject
  | readonly OracleServiceJsonValue[];
```

***

### OracleServiceProviderExtensionValue

```ts
type OracleServiceProviderExtensionValue = OracleServiceJsonValue | object | undefined;
```

***

### OracleServiceProviderPayload

```ts
type OracleServiceProviderPayload = OracleServiceJsonObject | object;
```

***

### OracleServiceProviderQuery

```ts
type OracleServiceProviderQuery = Record<string, OracleServiceProviderExtensionValue>;
```

***

### OracleServiceRequestResource

```ts
type OracleServiceRequestResource = OracleServiceProviderPayload & {
  AssigneeResourceId?: number;
  ProblemDescription?: string;
  QueueId?: number;
  SeverityCd?: string;
  SrId?: number;
  SrNumber?: string;
  StatusCd?: string;
  Title?: string;
};
```

#### Type Declaration

| Name | Type |
| ------ | ------ |
| `AssigneeResourceId?` | `number` |
| `ProblemDescription?` | `string` |
| `QueueId?` | `number` |
| `SeverityCd?` | `string` |
| `SrId?` | `number` |
| `SrNumber?` | `string` |
| `StatusCd?` | `string` |
| `Title?` | `string` |

## Functions

### createOracleServiceTicketingClient()

```ts
function createOracleServiceTicketingClient(options): OracleServiceTicketingClient;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`OracleServiceTicketingClientOptions`](#oracleserviceticketingclientoptions) |

#### Returns

[`OracleServiceTicketingClient`](#oracleserviceticketingclient)

***

### createOracleServiceTicketingIntegration()

```ts
function createOracleServiceTicketingIntegration(options): DefinedIntegration<{
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
     description: "Creates Oracle Fusion Service serviceRequests records from SDK-user-selected support workflows.";
     exposesSensitiveData: true;
     label: "Create Oracle service requests";
     providerObjects: readonly [{
        kind: "oracleServiceRequest";
        label: "Oracle Service Request";
        schemaName: "serviceRequests";
      }, {
        kind: "oracleServiceRequestMessage";
        label: "Oracle Service Request Message";
        schemaName: "serviceRequests.child.messages";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     audiences: readonly ["customer-facing", "internal-support", "mixed"];
     capability: "read-provider-object";
     description: "Reads Oracle Fusion Service service request records by SrNumber.";
     exposesSensitiveData: true;
     label: "Read Oracle service requests";
     providerObjects: readonly [{
        kind: "oracleServiceRequest";
        label: "Oracle Service Request";
        schemaName: "serviceRequests";
     }];
     requiresCredential: true;
   }, {
     audiences: readonly ["internal-support", "mixed"];
     capability: "update-provider-object";
     changesWorkflow: true;
     description: "Updates Oracle Fusion Service service request status, queue, assignee, resolution, or custom fields.";
     exposesSensitiveData: true;
     label: "Update Oracle service requests";
     providerObjects: readonly [{
        kind: "oracleServiceRequest";
        label: "Oracle Service Request";
        schemaName: "serviceRequests";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     audiences: readonly ["customer-facing", "internal-support", "mixed"];
     capability: "search-provider-object";
     description: "Queries Oracle Fusion Service service requests with SDK-user-supplied q, finder, fields, and paging controls.";
     exposesSensitiveData: true;
     label: "Search Oracle service requests";
     providerObjects: readonly [{
        kind: "oracleServiceRequest";
        label: "Oracle Service Request";
        schemaName: "serviceRequests";
     }];
     requiresCredential: true;
   }, {
     audiences: readonly ["customer-facing", "internal-support", "mixed"];
     capability: "handoff";
     changesWorkflow: true;
     description: "Provides Oracle service request operations for SDK-user-configured human handoff workflows.";
     exposesSensitiveData: true;
     label: "Attach handoff to Oracle Service";
     providerObjects: readonly [{
        kind: "oracleServiceRequest";
        label: "Oracle Service Request";
        schemaName: "serviceRequests";
      }, {
        kind: "oracleServiceRequestMessage";
        label: "Oracle Service Request Message";
        schemaName: "serviceRequests.child.messages";
     }];
     requiresCredential: true;
     sideEffect: true;
  }];
  category: "ticketing";
  channelAudiences: readonly ["customer-facing", "internal-support", "mixed"];
  coverage: {
     evidence: readonly [{
        label: "Oracle Fusion Service serviceRequests overview";
        url: "https://docs.oracle.com/en/cloud/saas/sales/faaps/api-internal-service-requests.html";
      }, {
        label: "Oracle Fusion Service create service request";
        url: "https://docs.oracle.com/en/cloud/saas/sales/faaps/op-servicerequests-post.html";
      }, {
        label: "Oracle Fusion Service get all service requests";
        url: "https://docs.oracle.com/en/cloud/saas/sales/faaps/op-servicerequests-get.html";
      }, {
        label: "Oracle Fusion Service get service request";
        url: "https://docs.oracle.com/en/cloud/saas/sales/faaps/op-servicerequests-srnumber-get.html";
      }, {
        label: "Oracle Fusion Service update service request";
        url: "https://docs.oracle.com/en/cloud/saas/sales/faaps/op-servicerequests-srnumber-patch.html";
      }, {
        label: "Oracle Fusion Service create service request message";
        url: "https://docs.oracle.com/en/cloud/saas/sales/faaps/op-servicerequests-srnumber-child-messages-post.html";
     }];
     notes: readonly ["Coverage is typed for Oracle Fusion Service serviceRequests create, read by SrNumber, patch, collection search, child message creation, and readiness checks used by Cognidesk support workflows.", "This is not full Oracle Fusion Service API coverage; service request child resources such as activities, attachments, contacts, message attachment/channel-communication lifecycle, milestones, resources, smart actions, tags, LOV/metadata behavior, workflow rules, queues, privileges, and broader Fusion CX APIs remain outside this adapter."];
     scope: "support-workflow-subset";
  };
  credentialRequirements: readonly [{
     description: "The SDK user's Oracle Fusion Service host, for example https://example.fa.oraclecloud.com.";
     id: "oracle-service-instance";
     label: "Oracle Fusion Service instance URL";
     required: true;
   }, {
     description: "Server-side OAuth bearer access or Basic Auth credentials for Oracle Fusion Service REST APIs with service roles and privileges for serviceRequests and child messages.";
     id: "oracle-service-api-access";
     label: "Oracle Fusion Service REST API access";
     metadata: {
        privilegeGuidance: "These strings are Cognidesk capability labels, not official Oracle OAuth scope names. Oracle access depends on Fusion Service roles and privileges for service request read/create/update/search and message creation.";
        scopeKind: "internal-capability-labels";
     };
     required: true;
     scopes: readonly ["serviceRequests:read", "serviceRequests:write"];
  }];
  directions: readonly ["bidirectional"];
  id: "ticketing.oracle-service";
  limitations: readonly ["Oracle Service categories, required fields, queues, assignment rules, milestones, extensions, and privileges are owned by the SDK user's Fusion Service environment.", "SDK users own handoff timing, field mapping, customer identity matching, visibility, consent, notification policy, and retention before calling Oracle APIs."];
  maintainers: readonly [{
     name: "Cognidesk";
     type: "official";
  }];
  metadata: {
     channelCoverage: {
        activitiesContactsMilestones: "provider-supported-not-typed";
        attachments: "provider-supported-not-typed";
        queuesSmartActionsWorkflowRules: "not-covered";
        readinessSearch: "typed-search";
        serviceRequestMessages: "typed-create";
        serviceRequests: "typed-create-read-update-search";
     };
     checkedProviderApiCoverage: {
        checkedFamilyCount: 5;
        coverageArtifact: "docs/provider-coverage/oracle-service-checked-service-requests-2026-06-18.inventory.json";
        gapFamilyCount: 2;
        implementedFamilyCount: 3;
        implementedOperationCount: 5;
        sourceKind: "checked-endpoint-family-inventory";
        verifiedAt: "2026-06-18";
     };
     implementation: {
        strategy: "direct-http-support-slice";
     };
     implementationStrategy: {
        checkedAt: "2026-06-21";
        reason: "No suitable official JavaScript SDK was found for Oracle Fusion Service serviceRequests; oci-fusionapps targets OCI Fusion Apps Service resource management, not this REST surface.";
        rejectedLibraries: readonly [{
           integrity: "sha512-L0mF2w4tYeVBM1DXEDVuufuKysTQqhvS65GCN7meubjWzxUNMRDO9P/EM1ouSguyjJio7NeCr4hQWSP5AEe46Q==";
           packageName: "oci-fusionapps";
           reason: "Official Oracle-maintained OCI SDK package, but not a Fusion Service service request client.";
           version: "2.135.0";
        }];
        strategy: "direct-support-slice";
     };
     supportOperationSlice: {
        allowlistSha256: "5f3ff8ea4febec8a1f5e4c9d881124c9f215a7b97ebb3ae7a92d7e3f98b370f5";
        checkedAt: "2026-06-21";
        operations: readonly [{
           alias: "ticket.create";
           method: "POST";
           path: "/crmRestApi/resources/{apiVersion}/serviceRequests";
         }, {
           alias: "ticket.read";
           method: "GET";
           path: "/crmRestApi/resources/{apiVersion}/serviceRequests/{SrNumber}";
         }, {
           alias: "ticket.update";
           method: "PATCH";
           path: "/crmRestApi/resources/{apiVersion}/serviceRequests/{SrNumber}";
         }, {
           alias: "ticket.search";
           method: "GET";
           path: "/crmRestApi/resources/{apiVersion}/serviceRequests";
         }, {
           alias: "oracle-service.serviceRequestMessage.create";
           method: "POST";
           path: "/crmRestApi/resources/{apiVersion}/serviceRequests/{SrNumber}/child/messages";
        }];
        sourceKind: "official-docs-reviewed-slice";
        sourceVersion: "11.13.18.05";
     };
  };
  name: "Oracle Service";
  operations: readonly [{
     alias: "ticket.create";
     audiences: readonly ["customer-facing", "internal-support", "mixed"];
     capability: "create-provider-object";
     changesWorkflow: true;
     exposesSensitiveData: true;
     providerObject: "oracleServiceRequest";
     requiresCredential: true;
     sideEffect: true;
   }, {
     alias: "ticket.read";
     audiences: readonly ["customer-facing", "internal-support", "mixed"];
     capability: "read-provider-object";
     exposesSensitiveData: true;
     providerObject: "oracleServiceRequest";
     requiresCredential: true;
   }, {
     alias: "ticket.update";
     audiences: readonly ["internal-support", "mixed"];
     capability: "update-provider-object";
     changesWorkflow: true;
     exposesSensitiveData: true;
     providerObject: "oracleServiceRequest";
     requiresCredential: true;
     sideEffect: true;
   }, {
     alias: "ticket.search";
     audiences: readonly ["customer-facing", "internal-support", "mixed"];
     capability: "search-provider-object";
     exposesSensitiveData: true;
     providerObject: "oracleServiceRequest";
     requiresCredential: true;
   }, {
     alias: "oracle-service.serviceRequestMessage.create";
     audiences: readonly ["customer-facing", "internal-support", "mixed"];
     capability: "create-provider-object";
     changesWorkflow: true;
     exposesSensitiveData: true;
     extension: true;
     providerObject: "oracleServiceRequestMessage";
     requiresCredential: true;
     sideEffect: true;
  }];
  packageName: "@cognidesk/integration-ticketing-oracle-service";
  privacyNotes: readonly ["Oracle service requests can contain customer identity, problem descriptions, service profile data, queue and assignee details, and internal resolution notes.", "Oracle credentials stay server-side and are represented in Studio only as credential readiness and scope status."];
  provider: "oracle-service";
  trustLevel: "official";
}, OracleServiceTicketingIntegrationOptions, {
  oracle-service.serviceRequestMessage.create: (input) => Promise<OracleServiceProviderResponse>;
  ticket.create: (input) => Promise<OracleServiceRequestResource>;
  ticket.read: (input) => Promise<OracleServiceRequestResource>;
  ticket.search: (input?) => Promise<OracleServiceSearchResult<OracleServiceRequestResource>>;
  ticket.update: (input) => Promise<OracleServiceRequestResource>;
}>;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`OracleServiceTicketingIntegrationOptions`](#oracleserviceticketingintegrationoptions) |

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
     `description`: `"Creates Oracle Fusion Service serviceRequests records from SDK-user-selected support workflows."`;
     `exposesSensitiveData`: `true`;
     `label`: `"Create Oracle service requests"`;
     `providerObjects`: readonly \[\{
        `kind`: `"oracleServiceRequest"`;
        `label`: `"Oracle Service Request"`;
        `schemaName`: `"serviceRequests"`;
      \}, \{
        `kind`: `"oracleServiceRequestMessage"`;
        `label`: `"Oracle Service Request Message"`;
        `schemaName`: `"serviceRequests.child.messages"`;
     \}\];
     `requiresCredential`: `true`;
     `sideEffect`: `true`;
   \}, \{
     `audiences`: readonly \[`"customer-facing"`, `"internal-support"`, `"mixed"`\];
     `capability`: `"read-provider-object"`;
     `description`: `"Reads Oracle Fusion Service service request records by SrNumber."`;
     `exposesSensitiveData`: `true`;
     `label`: `"Read Oracle service requests"`;
     `providerObjects`: readonly \[\{
        `kind`: `"oracleServiceRequest"`;
        `label`: `"Oracle Service Request"`;
        `schemaName`: `"serviceRequests"`;
     \}\];
     `requiresCredential`: `true`;
   \}, \{
     `audiences`: readonly \[`"internal-support"`, `"mixed"`\];
     `capability`: `"update-provider-object"`;
     `changesWorkflow`: `true`;
     `description`: `"Updates Oracle Fusion Service service request status, queue, assignee, resolution, or custom fields."`;
     `exposesSensitiveData`: `true`;
     `label`: `"Update Oracle service requests"`;
     `providerObjects`: readonly \[\{
        `kind`: `"oracleServiceRequest"`;
        `label`: `"Oracle Service Request"`;
        `schemaName`: `"serviceRequests"`;
     \}\];
     `requiresCredential`: `true`;
     `sideEffect`: `true`;
   \}, \{
     `audiences`: readonly \[`"customer-facing"`, `"internal-support"`, `"mixed"`\];
     `capability`: `"search-provider-object"`;
     `description`: `"Queries Oracle Fusion Service service requests with SDK-user-supplied q, finder, fields, and paging controls."`;
     `exposesSensitiveData`: `true`;
     `label`: `"Search Oracle service requests"`;
     `providerObjects`: readonly \[\{
        `kind`: `"oracleServiceRequest"`;
        `label`: `"Oracle Service Request"`;
        `schemaName`: `"serviceRequests"`;
     \}\];
     `requiresCredential`: `true`;
   \}, \{
     `audiences`: readonly \[`"customer-facing"`, `"internal-support"`, `"mixed"`\];
     `capability`: `"handoff"`;
     `changesWorkflow`: `true`;
     `description`: `"Provides Oracle service request operations for SDK-user-configured human handoff workflows."`;
     `exposesSensitiveData`: `true`;
     `label`: `"Attach handoff to Oracle Service"`;
     `providerObjects`: readonly \[\{
        `kind`: `"oracleServiceRequest"`;
        `label`: `"Oracle Service Request"`;
        `schemaName`: `"serviceRequests"`;
      \}, \{
        `kind`: `"oracleServiceRequestMessage"`;
        `label`: `"Oracle Service Request Message"`;
        `schemaName`: `"serviceRequests.child.messages"`;
     \}\];
     `requiresCredential`: `true`;
     `sideEffect`: `true`;
  \}\];
  `category`: `"ticketing"`;
  `channelAudiences`: readonly \[`"customer-facing"`, `"internal-support"`, `"mixed"`\];
  `coverage`: \{
     `evidence`: readonly \[\{
        `label`: `"Oracle Fusion Service serviceRequests overview"`;
        `url`: `"https://docs.oracle.com/en/cloud/saas/sales/faaps/api-internal-service-requests.html"`;
      \}, \{
        `label`: `"Oracle Fusion Service create service request"`;
        `url`: `"https://docs.oracle.com/en/cloud/saas/sales/faaps/op-servicerequests-post.html"`;
      \}, \{
        `label`: `"Oracle Fusion Service get all service requests"`;
        `url`: `"https://docs.oracle.com/en/cloud/saas/sales/faaps/op-servicerequests-get.html"`;
      \}, \{
        `label`: `"Oracle Fusion Service get service request"`;
        `url`: `"https://docs.oracle.com/en/cloud/saas/sales/faaps/op-servicerequests-srnumber-get.html"`;
      \}, \{
        `label`: `"Oracle Fusion Service update service request"`;
        `url`: `"https://docs.oracle.com/en/cloud/saas/sales/faaps/op-servicerequests-srnumber-patch.html"`;
      \}, \{
        `label`: `"Oracle Fusion Service create service request message"`;
        `url`: `"https://docs.oracle.com/en/cloud/saas/sales/faaps/op-servicerequests-srnumber-child-messages-post.html"`;
     \}\];
     `notes`: readonly \[`"Coverage is typed for Oracle Fusion Service serviceRequests create, read by SrNumber, patch, collection search, child message creation, and readiness checks used by Cognidesk support workflows."`, `"This is not full Oracle Fusion Service API coverage; service request child resources such as activities, attachments, contacts, message attachment/channel-communication lifecycle, milestones, resources, smart actions, tags, LOV/metadata behavior, workflow rules, queues, privileges, and broader Fusion CX APIs remain outside this adapter."`\];
     `scope`: `"support-workflow-subset"`;
  \};
  `credentialRequirements`: readonly \[\{
     `description`: `"The SDK user's Oracle Fusion Service host, for example https://example.fa.oraclecloud.com."`;
     `id`: `"oracle-service-instance"`;
     `label`: `"Oracle Fusion Service instance URL"`;
     `required`: `true`;
   \}, \{
     `description`: `"Server-side OAuth bearer access or Basic Auth credentials for Oracle Fusion Service REST APIs with service roles and privileges for serviceRequests and child messages."`;
     `id`: `"oracle-service-api-access"`;
     `label`: `"Oracle Fusion Service REST API access"`;
     `metadata`: \{
        `privilegeGuidance`: `"These strings are Cognidesk capability labels, not official Oracle OAuth scope names. Oracle access depends on Fusion Service roles and privileges for service request read/create/update/search and message creation."`;
        `scopeKind`: `"internal-capability-labels"`;
     \};
     `required`: `true`;
     `scopes`: readonly \[`"serviceRequests:read"`, `"serviceRequests:write"`\];
  \}\];
  `directions`: readonly \[`"bidirectional"`\];
  `id`: `"ticketing.oracle-service"`;
  `limitations`: readonly \[`"Oracle Service categories, required fields, queues, assignment rules, milestones, extensions, and privileges are owned by the SDK user's Fusion Service environment."`, `"SDK users own handoff timing, field mapping, customer identity matching, visibility, consent, notification policy, and retention before calling Oracle APIs."`\];
  `maintainers`: readonly \[\{
     `name`: `"Cognidesk"`;
     `type`: `"official"`;
  \}\];
  `metadata`: \{
     `channelCoverage`: \{
        `activitiesContactsMilestones`: `"provider-supported-not-typed"`;
        `attachments`: `"provider-supported-not-typed"`;
        `queuesSmartActionsWorkflowRules`: `"not-covered"`;
        `readinessSearch`: `"typed-search"`;
        `serviceRequestMessages`: `"typed-create"`;
        `serviceRequests`: `"typed-create-read-update-search"`;
     \};
     `checkedProviderApiCoverage`: \{
        `checkedFamilyCount`: `5`;
        `coverageArtifact`: `"docs/provider-coverage/oracle-service-checked-service-requests-2026-06-18.inventory.json"`;
        `gapFamilyCount`: `2`;
        `implementedFamilyCount`: `3`;
        `implementedOperationCount`: `5`;
        `sourceKind`: `"checked-endpoint-family-inventory"`;
        `verifiedAt`: `"2026-06-18"`;
     \};
     `implementation`: \{
        `strategy`: `"direct-http-support-slice"`;
     \};
     `implementationStrategy`: \{
        `checkedAt`: `"2026-06-21"`;
        `reason`: `"No suitable official JavaScript SDK was found for Oracle Fusion Service serviceRequests; oci-fusionapps targets OCI Fusion Apps Service resource management, not this REST surface."`;
        `rejectedLibraries`: readonly \[\{
           `integrity`: `"sha512-L0mF2w4tYeVBM1DXEDVuufuKysTQqhvS65GCN7meubjWzxUNMRDO9P/EM1ouSguyjJio7NeCr4hQWSP5AEe46Q=="`;
           `packageName`: `"oci-fusionapps"`;
           `reason`: `"Official Oracle-maintained OCI SDK package, but not a Fusion Service service request client."`;
           `version`: `"2.135.0"`;
        \}\];
        `strategy`: `"direct-support-slice"`;
     \};
     `supportOperationSlice`: \{
        `allowlistSha256`: `"5f3ff8ea4febec8a1f5e4c9d881124c9f215a7b97ebb3ae7a92d7e3f98b370f5"`;
        `checkedAt`: `"2026-06-21"`;
        `operations`: readonly \[\{
           `alias`: `"ticket.create"`;
           `method`: `"POST"`;
           `path`: `"/crmRestApi/resources/{apiVersion}/serviceRequests"`;
         \}, \{
           `alias`: `"ticket.read"`;
           `method`: `"GET"`;
           `path`: `"/crmRestApi/resources/{apiVersion}/serviceRequests/{SrNumber}"`;
         \}, \{
           `alias`: `"ticket.update"`;
           `method`: `"PATCH"`;
           `path`: `"/crmRestApi/resources/{apiVersion}/serviceRequests/{SrNumber}"`;
         \}, \{
           `alias`: `"ticket.search"`;
           `method`: `"GET"`;
           `path`: `"/crmRestApi/resources/{apiVersion}/serviceRequests"`;
         \}, \{
           `alias`: `"oracle-service.serviceRequestMessage.create"`;
           `method`: `"POST"`;
           `path`: `"/crmRestApi/resources/{apiVersion}/serviceRequests/{SrNumber}/child/messages"`;
        \}\];
        `sourceKind`: `"official-docs-reviewed-slice"`;
        `sourceVersion`: `"11.13.18.05"`;
     \};
  \};
  `name`: `"Oracle Service"`;
  `operations`: readonly \[\{
     `alias`: `"ticket.create"`;
     `audiences`: readonly \[`"customer-facing"`, `"internal-support"`, `"mixed"`\];
     `capability`: `"create-provider-object"`;
     `changesWorkflow`: `true`;
     `exposesSensitiveData`: `true`;
     `providerObject`: `"oracleServiceRequest"`;
     `requiresCredential`: `true`;
     `sideEffect`: `true`;
   \}, \{
     `alias`: `"ticket.read"`;
     `audiences`: readonly \[`"customer-facing"`, `"internal-support"`, `"mixed"`\];
     `capability`: `"read-provider-object"`;
     `exposesSensitiveData`: `true`;
     `providerObject`: `"oracleServiceRequest"`;
     `requiresCredential`: `true`;
   \}, \{
     `alias`: `"ticket.update"`;
     `audiences`: readonly \[`"internal-support"`, `"mixed"`\];
     `capability`: `"update-provider-object"`;
     `changesWorkflow`: `true`;
     `exposesSensitiveData`: `true`;
     `providerObject`: `"oracleServiceRequest"`;
     `requiresCredential`: `true`;
     `sideEffect`: `true`;
   \}, \{
     `alias`: `"ticket.search"`;
     `audiences`: readonly \[`"customer-facing"`, `"internal-support"`, `"mixed"`\];
     `capability`: `"search-provider-object"`;
     `exposesSensitiveData`: `true`;
     `providerObject`: `"oracleServiceRequest"`;
     `requiresCredential`: `true`;
   \}, \{
     `alias`: `"oracle-service.serviceRequestMessage.create"`;
     `audiences`: readonly \[`"customer-facing"`, `"internal-support"`, `"mixed"`\];
     `capability`: `"create-provider-object"`;
     `changesWorkflow`: `true`;
     `exposesSensitiveData`: `true`;
     `extension`: `true`;
     `providerObject`: `"oracleServiceRequestMessage"`;
     `requiresCredential`: `true`;
     `sideEffect`: `true`;
  \}\];
  `packageName`: `"@cognidesk/integration-ticketing-oracle-service"`;
  `privacyNotes`: readonly \[`"Oracle service requests can contain customer identity, problem descriptions, service profile data, queue and assignee details, and internal resolution notes."`, `"Oracle credentials stay server-side and are represented in Studio only as credential readiness and scope status."`\];
  `provider`: `"oracle-service"`;
  `trustLevel`: `"official"`;
\}, [`OracleServiceTicketingIntegrationOptions`](#oracleserviceticketingintegrationoptions), \{
  `oracle-service.serviceRequestMessage.create`: (`input`) => `Promise`\<[`OracleServiceProviderResponse`](#oracleserviceproviderresponse)\>;
  `ticket.create`: (`input`) => `Promise`\<[`OracleServiceRequestResource`](#oracleservicerequestresource)\>;
  `ticket.read`: (`input`) => `Promise`\<[`OracleServiceRequestResource`](#oracleservicerequestresource)\>;
  `ticket.search`: (`input?`) => `Promise`\<[`OracleServiceSearchResult`](#oracleservicesearchresult)\<[`OracleServiceRequestResource`](#oracleservicerequestresource)\>\>;
  `ticket.update`: (`input`) => `Promise`\<[`OracleServiceRequestResource`](#oracleservicerequestresource)\>;
\}\>

***

### createOracleServiceTicketingLiveChecks()

```ts
function createOracleServiceTicketingLiveChecks(options): {
  description: string;
  id: string;
  requiredCredentialIds: string[];
  run: Promise<{
     details: {
        hasMore: boolean;
        sampleCount: number;
     };
  }>;
}[];
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`OracleServiceLiveCheckOptions`](#oracleservicelivecheckoptions) |

#### Returns

\{
  `description`: `string`;
  `id`: `string`;
  `requiredCredentialIds`: `string`[];
  `run`: `Promise`\<\{
     `details`: \{
        `hasMore`: `boolean`;
        `sampleCount`: `number`;
     \};
  \}\>;
\}[]

***

### createOracleServiceTicketingOperationHandlers()

```ts
function createOracleServiceTicketingOperationHandlers(client): {
  oracle-service.serviceRequestMessage.create: (input) => Promise<OracleServiceProviderResponse>;
  ticket.create: (input) => Promise<OracleServiceRequestResource>;
  ticket.read: (input) => Promise<OracleServiceRequestResource>;
  ticket.search: (input?) => Promise<OracleServiceSearchResult<OracleServiceRequestResource>>;
  ticket.update: (input) => Promise<OracleServiceRequestResource>;
};
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `client` | [`OracleServiceTicketingClient`](#oracleserviceticketingclient) |

#### Returns

```ts
{
  oracle-service.serviceRequestMessage.create: (input) => Promise<OracleServiceProviderResponse>;
  ticket.create: (input) => Promise<OracleServiceRequestResource>;
  ticket.read: (input) => Promise<OracleServiceRequestResource>;
  ticket.search: (input?) => Promise<OracleServiceSearchResult<OracleServiceRequestResource>>;
  ticket.update: (input) => Promise<OracleServiceRequestResource>;
}
```

| Name | Type |
| ------ | ------ |
| `oracle-service.serviceRequestMessage.create()` | (`input`) => `Promise`\<[`OracleServiceProviderResponse`](#oracleserviceproviderresponse)\> |
| `ticket.create()` | (`input`) => `Promise`\<[`OracleServiceRequestResource`](#oracleservicerequestresource)\> |
| `ticket.read()` | (`input`) => `Promise`\<[`OracleServiceRequestResource`](#oracleservicerequestresource)\> |
| `ticket.search()` | (`input?`) => `Promise`\<[`OracleServiceSearchResult`](#oracleservicesearchresult)\<[`OracleServiceRequestResource`](#oracleservicerequestresource)\>\> |
| `ticket.update()` | (`input`) => `Promise`\<[`OracleServiceRequestResource`](#oracleservicerequestresource)\> |

***

### oracleServiceTicketingCredentialStatuses()

```ts
function oracleServiceTicketingCredentialStatuses(input): {
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
| `input` | [`OracleServiceCredentialStatusInput`](#oracleservicecredentialstatusinput) |

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

### oracleServiceTicketingProviderManifest

Re-exports [oracleServiceTicketingProviderManifest](dist/manifest.md#oracleserviceticketingprovidermanifest)
