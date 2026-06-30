# integrations/ticketing/oracle-service/dist

## Classes

### OracleServiceProviderApiError

#### Extends

- `Error`

#### Constructors

##### Constructor

```ts
new OracleServiceProviderApiError(input): OracleServiceProviderApiError;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`OracleServiceProviderApiErrorInput`](#oracleserviceproviderapierrorinput) |

###### Returns

[`OracleServiceProviderApiError`](#oracleserviceproviderapierror)

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
readonly provider: "oracle-service" = "oracle-service";
```

##### response

```ts
readonly response: OracleServiceProviderApiErrorResponseMetadata;
```

##### status

```ts
readonly status: number;
```

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

##### instanceUrl?

```ts
optional instanceUrl?: string;
```

##### password?

```ts
optional password?: string;
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

##### auth?

```ts
optional auth?: OracleServiceAuthOptions;
```

###### Inherited from

[`OracleServiceTicketingClientOptions`](#oracleserviceticketingclientoptions).[`auth`](#auth-1)

##### baseUrl?

```ts
optional baseUrl?: string;
```

###### Inherited from

[`OracleServiceTicketingClientOptions`](#oracleserviceticketingclientoptions).[`baseUrl`](#baseurl-2)

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

##### headers?

```ts
optional headers?: Record<string, string>;
```

###### Inherited from

[`OracleServiceTicketingClientOptions`](#oracleserviceticketingclientoptions).[`headers`](#headers-2)

##### instanceUrl?

```ts
optional instanceUrl?: string;
```

###### Inherited from

[`OracleServiceTicketingClientOptions`](#oracleserviceticketingclientoptions).[`instanceUrl`](#instanceurl-2)

##### password?

```ts
optional password?: string;
```

###### Inherited from

[`OracleServiceTicketingClientOptions`](#oracleserviceticketingclientoptions).[`password`](#password-2)

##### providerClient?

```ts
optional providerClient?: OracleServiceTicketingProviderClient;
```

###### Inherited from

[`OracleServiceTicketingClientOptions`](#oracleserviceticketingclientoptions).[`providerClient`](#providerclient-2)

##### retry?

```ts
optional retry?:
  | number
  | ProviderJsonRetryOptions;
```

###### Inherited from

[`OracleServiceTicketingClientOptions`](#oracleserviceticketingclientoptions).[`retry`](#retry-1)

##### signal?

```ts
optional signal?: AbortSignal;
```

###### Inherited from

[`OracleServiceTicketingClientOptions`](#oracleserviceticketingclientoptions).[`signal`](#signal-1)

##### timeoutMs?

```ts
optional timeoutMs?: number;
```

###### Inherited from

[`OracleServiceTicketingClientOptions`](#oracleserviceticketingclientoptions).[`timeoutMs`](#timeoutms-1)

##### username?

```ts
optional username?: string;
```

###### Inherited from

[`OracleServiceTicketingClientOptions`](#oracleserviceticketingclientoptions).[`username`](#username-2)

***

### OracleServiceProviderApiErrorInput

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
response: OracleServiceProviderApiErrorResponseMetadata;
```

##### status

```ts
status: number;
```

***

### OracleServiceProviderApiErrorResponseMetadata

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

#### Extends

- [`OracleServiceTicketingProviderClient`](#oracleserviceticketingproviderclient)

#### Properties

##### providerClient

```ts
providerClient: OracleServiceTicketingProviderClient;
```

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

###### Inherited from

[`OracleServiceTicketingProviderClient`](#oracleserviceticketingproviderclient).[`createServiceRequest`](#createservicerequest-1)

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

###### Inherited from

[`OracleServiceTicketingProviderClient`](#oracleserviceticketingproviderclient).[`createServiceRequestMessage`](#createservicerequestmessage-1)

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

###### Inherited from

[`OracleServiceTicketingProviderClient`](#oracleserviceticketingproviderclient).[`getServiceRequest`](#getservicerequest-1)

##### readiness()

```ts
readiness(): Promise<OracleServiceSearchResult<OracleServiceRequestResource>>;
```

###### Returns

`Promise`\<[`OracleServiceSearchResult`](#oracleservicesearchresult)\<[`OracleServiceRequestResource`](#oracleservicerequestresource)\>\>

###### Inherited from

[`OracleServiceTicketingProviderClient`](#oracleserviceticketingproviderclient).[`readiness`](#readiness-1)

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

###### Inherited from

[`OracleServiceTicketingProviderClient`](#oracleserviceticketingproviderclient).[`searchServiceRequests`](#searchservicerequests-1)

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

###### Inherited from

[`OracleServiceTicketingProviderClient`](#oracleserviceticketingproviderclient).[`updateServiceRequest`](#updateservicerequest-1)

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

##### auth?

```ts
optional auth?: OracleServiceAuthOptions;
```

##### baseUrl?

```ts
optional baseUrl?: string;
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

##### instanceUrl?

```ts
optional instanceUrl?: string;
```

##### password?

```ts
optional password?: string;
```

##### providerClient?

```ts
optional providerClient?: OracleServiceTicketingProviderClient;
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

###### Overrides

[`OracleServiceTicketingClientOptions`](#oracleserviceticketingclientoptions).[`accessToken`](#accesstoken-2)

##### apiVersion?

```ts
optional apiVersion?: string;
```

###### Inherited from

[`OracleServiceTicketingClientOptions`](#oracleserviceticketingclientoptions).[`apiVersion`](#apiversion-1)

##### auth?

```ts
optional auth?: OracleServiceAuthOptions;
```

###### Inherited from

[`OracleServiceTicketingClientOptions`](#oracleserviceticketingclientoptions).[`auth`](#auth-1)

##### baseUrl?

```ts
optional baseUrl?: string;
```

###### Inherited from

[`OracleServiceTicketingClientOptions`](#oracleserviceticketingclientoptions).[`baseUrl`](#baseurl-2)

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

##### headers?

```ts
optional headers?: Record<string, string>;
```

###### Inherited from

[`OracleServiceTicketingClientOptions`](#oracleserviceticketingclientoptions).[`headers`](#headers-2)

##### instanceUrl?

```ts
optional instanceUrl?: string;
```

###### Overrides

[`OracleServiceTicketingClientOptions`](#oracleserviceticketingclientoptions).[`instanceUrl`](#instanceurl-2)

##### password?

```ts
optional password?: string;
```

###### Overrides

[`OracleServiceTicketingClientOptions`](#oracleserviceticketingclientoptions).[`password`](#password-2)

##### providerClient?

```ts
optional providerClient?: OracleServiceTicketingProviderClient;
```

###### Inherited from

[`OracleServiceTicketingClientOptions`](#oracleserviceticketingclientoptions).[`providerClient`](#providerclient-2)

##### retry?

```ts
optional retry?:
  | number
  | ProviderJsonRetryOptions;
```

###### Inherited from

[`OracleServiceTicketingClientOptions`](#oracleserviceticketingclientoptions).[`retry`](#retry-1)

##### signal?

```ts
optional signal?: AbortSignal;
```

###### Inherited from

[`OracleServiceTicketingClientOptions`](#oracleserviceticketingclientoptions).[`signal`](#signal-1)

##### timeoutMs?

```ts
optional timeoutMs?: number;
```

###### Inherited from

[`OracleServiceTicketingClientOptions`](#oracleserviceticketingclientoptions).[`timeoutMs`](#timeoutms-1)

##### username?

```ts
optional username?: string;
```

###### Overrides

[`OracleServiceTicketingClientOptions`](#oracleserviceticketingclientoptions).[`username`](#username-2)

***

### OracleServiceTicketingProviderClient

#### Extended by

- [`OracleServiceTicketingClient`](#oracleserviceticketingclient)

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

### OracleServiceAuthOptions

```ts
type OracleServiceAuthOptions =
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

### createOracleServiceRestProviderClient()

```ts
function createOracleServiceRestProviderClient(options): OracleServiceTicketingProviderClient;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`OracleServiceTicketingClientOptions`](#oracleserviceticketingclientoptions) |

#### Returns

[`OracleServiceTicketingProviderClient`](#oracleserviceticketingproviderclient)

***

### createOracleServiceTicketingClient()

```ts
function createOracleServiceTicketingClient(options?): OracleServiceTicketingClient;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options?` | [`OracleServiceTicketingClientOptions`](#oracleserviceticketingclientoptions) |

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
     notes: readonly ["Coverage is typed for Oracle Fusion Service serviceRequests create, read by SrNumber, patch, collection search, child message creation, and readiness checks used by Cognidesk support workflows.", "Runtime provider operations use the built-in Oracle Fusion Service REST adapter when baseUrl/instanceUrl plus access credentials are provided; a host-injected OracleServiceTicketingProviderClient remains available as an override.", "This is not full Oracle Fusion Service API coverage; service request child resources such as activities, attachments, contacts, message attachment/channel-communication lifecycle, milestones, resources, smart actions, tags, LOV/metadata behavior, workflow rules, queues, privileges, and broader Fusion CX APIs remain outside this adapter."];
     scope: "support-workflow-subset";
  };
  credentialRequirements: readonly [{
     description: "Optional SDK-user-owned provider client implementing OracleServiceTicketingProviderClient. When omitted, the package uses its built-in Oracle Fusion Service REST adapter.";
     id: "oracle-service-provider-client";
     label: "Optional host-provided Oracle Service provider client";
     metadata: {
        defaultClientPolicy: "built-in-provider-rest-adapter";
        importPolicy: "optional-host-override";
        interface: "OracleServiceTicketingProviderClient";
     };
     required: false;
   }, {
     description: "The Oracle Fusion Service base URL, for example https://example.fa.oraclecloud.com, used by the built-in REST adapter or supplied by a host provider client override.";
     id: "oracle-service-instance";
     label: "Oracle Fusion Service instance URL";
     metadata: {
        requiredWhen: "built-in-provider-rest-adapter";
     };
     required: false;
   }, {
     description: "Server-side Oracle Fusion Service access for serviceRequests and child messages, supplied as accessToken, basic auth, auth headers, or encapsulated in a host provider client.";
     id: "oracle-service-api-access";
     label: "Oracle Fusion Service API access";
     metadata: {
        privilegeGuidance: "These strings are Cognidesk capability labels, not official Oracle OAuth scope names. Oracle access depends on Fusion Service roles and privileges for service request read/create/update/search and message creation.";
        requiredWhen: "built-in-provider-rest-adapter";
        scopeKind: "internal-capability-labels";
     };
     required: false;
     scopes: readonly ["serviceRequests:read", "serviceRequests:write"];
  }];
  directions: readonly ["bidirectional"];
  id: "ticketing.oracle-service";
  limitations: readonly ["Oracle Service categories, required fields, queues, assignment rules, milestones, extensions, and privileges are owned by the SDK user's Fusion Service environment.", "SDK users own handoff timing, field mapping, customer identity matching, visibility, consent, notification policy, retry/rate-limit behavior, and retention before calling Oracle APIs.", "The built-in adapter covers selected serviceRequests REST operations only; hosts can still inject an approved Oracle Service provider client for custom authentication, retries, or API-version policy."];
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
        adapterKind: "no-official-sdk-rest-adapter";
        apiVersion: "11.13.18.05";
        defaultClient: "built-in-oracle-fusion-service-rest-adapter";
        providerClientOverride: true;
        strategy: "provider-rest-adapter";
     };
     implementationStrategy: {
        checkedAt: "2026-06-25";
        exception: "provider-rest-adapter";
        reason: "No suitable maintained npm runtime SDK was verified for Oracle Fusion Service serviceRequests or Oracle Service Cloud/B2C Service incidents; Oracle documents these ticketing surfaces as REST APIs, while the official OCI TypeScript/JavaScript SDK manages OCI resources including Fusion Apps as a Service rather than service request records.";
        rejectedLibraries: readonly [{
           packageName: "oci-fusionapps";
           reason: "Oracle-maintained OCI SDK package for Fusion Apps Service administration, not a typed Oracle Fusion Service serviceRequests or B2C Service incident data client.";
           result: "not-used-as-runtime-ticketing-sdk";
           source: "npm";
           version: "2.135.1";
         }, {
           packageName: "oci-sdk";
           reason: "Oracle-maintained OCI SDK aggregate, but it does not expose the Oracle Fusion Service serviceRequests or Oracle B2C Service incident ticketing runtime surface used by this package.";
           result: "not-used-as-runtime-ticketing-sdk";
           source: "npm";
           version: "2.135.1";
         }, {
           packageName: "osvc_node";
           reason: "Unofficial Oracle Service Cloud REST wrapper last published years ago, not a maintained Oracle runtime SDK suitable for Cognidesk provider-client ownership.";
           result: "rejected-unofficial-stale-wrapper";
           source: "npm";
           version: "1.0.0";
        }];
        result: "no-suitable-maintained-runtime-provider-sdk";
        strategy: "no-official-sdk-rest-adapter";
     };
     providerClient: {
        defaultClientPolicy: "built-in-provider-rest-adapter";
        importPolicy: "optional-host-override";
        interface: "OracleServiceTicketingProviderClient";
        operationTargets: readonly [{
           alias: "ticket.create";
           target: "providerClient.createServiceRequest";
         }, {
           alias: "ticket.read";
           target: "providerClient.getServiceRequest";
         }, {
           alias: "ticket.update";
           target: "providerClient.updateServiceRequest";
         }, {
           alias: "ticket.search";
           target: "providerClient.searchServiceRequests";
         }, {
           alias: "oracle-service.serviceRequestMessage.create";
           target: "providerClient.createServiceRequestMessage";
        }];
        package: "optional-host-provided";
     };
     providerRestAdapterOperationSlice: {
        adapterKind: "no-official-sdk-rest-adapter";
        checkedAt: "2026-06-25";
        operations: readonly [{
           alias: "ticket.create";
           target: "providerClient.createServiceRequest";
         }, {
           alias: "ticket.read";
           target: "providerClient.getServiceRequest";
         }, {
           alias: "ticket.update";
           target: "providerClient.updateServiceRequest";
         }, {
           alias: "ticket.search";
           target: "providerClient.searchServiceRequests";
         }, {
           alias: "oracle-service.serviceRequestMessage.create";
           target: "providerClient.createServiceRequestMessage";
        }];
        sourceKind: "provider-rest-adapter";
        sourceVersion: "11.13.18.05";
     };
     sdkDecision: {
        acceptedRuntimeProviderSdk: null;
        checkedAt: "2026-06-25";
        checkedSources: readonly ["Oracle Fusion Service serviceRequests REST API documentation", "Oracle B2C Service incidents REST API documentation", "npm registry package metadata and search results"];
        providerRestAdapterException: true;
        rejectedLibraries: readonly [{
           packageName: "oci-fusionapps";
           reason: "Oracle-maintained OCI SDK package for Fusion Apps Service administration, not a typed Oracle Fusion Service serviceRequests or B2C Service incident data client.";
           result: "not-used-as-runtime-ticketing-sdk";
           source: "npm";
           version: "2.135.1";
         }, {
           packageName: "oci-sdk";
           reason: "Oracle-maintained OCI SDK aggregate, but it does not expose the Oracle Fusion Service serviceRequests or Oracle B2C Service incident ticketing runtime surface used by this package.";
           result: "not-used-as-runtime-ticketing-sdk";
           source: "npm";
           version: "2.135.1";
         }, {
           packageName: "osvc_node";
           reason: "Unofficial Oracle Service Cloud REST wrapper last published years ago, not a maintained Oracle runtime SDK suitable for Cognidesk provider-client ownership.";
           result: "rejected-unofficial-stale-wrapper";
           source: "npm";
           version: "1.0.0";
        }];
        result: "provider-rest-adapter-exception";
        viableMaintainedRuntimeProviderSdk: false;
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
}, {
  accessToken: string;
  authConfigured: true;
  baseUrl: string;
  basicAuthConfigured: boolean;
  headersConfigured: boolean;
  instanceUrl: string;
  providerClientConfigured: true;
}, {
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
     `notes`: readonly \[`"Coverage is typed for Oracle Fusion Service serviceRequests create, read by SrNumber, patch, collection search, child message creation, and readiness checks used by Cognidesk support workflows."`, `"Runtime provider operations use the built-in Oracle Fusion Service REST adapter when baseUrl/instanceUrl plus access credentials are provided; a host-injected OracleServiceTicketingProviderClient remains available as an override."`, `"This is not full Oracle Fusion Service API coverage; service request child resources such as activities, attachments, contacts, message attachment/channel-communication lifecycle, milestones, resources, smart actions, tags, LOV/metadata behavior, workflow rules, queues, privileges, and broader Fusion CX APIs remain outside this adapter."`\];
     `scope`: `"support-workflow-subset"`;
  \};
  `credentialRequirements`: readonly \[\{
     `description`: `"Optional SDK-user-owned provider client implementing OracleServiceTicketingProviderClient. When omitted, the package uses its built-in Oracle Fusion Service REST adapter."`;
     `id`: `"oracle-service-provider-client"`;
     `label`: `"Optional host-provided Oracle Service provider client"`;
     `metadata`: \{
        `defaultClientPolicy`: `"built-in-provider-rest-adapter"`;
        `importPolicy`: `"optional-host-override"`;
        `interface`: `"OracleServiceTicketingProviderClient"`;
     \};
     `required`: `false`;
   \}, \{
     `description`: `"The Oracle Fusion Service base URL, for example https://example.fa.oraclecloud.com, used by the built-in REST adapter or supplied by a host provider client override."`;
     `id`: `"oracle-service-instance"`;
     `label`: `"Oracle Fusion Service instance URL"`;
     `metadata`: \{
        `requiredWhen`: `"built-in-provider-rest-adapter"`;
     \};
     `required`: `false`;
   \}, \{
     `description`: `"Server-side Oracle Fusion Service access for serviceRequests and child messages, supplied as accessToken, basic auth, auth headers, or encapsulated in a host provider client."`;
     `id`: `"oracle-service-api-access"`;
     `label`: `"Oracle Fusion Service API access"`;
     `metadata`: \{
        `privilegeGuidance`: `"These strings are Cognidesk capability labels, not official Oracle OAuth scope names. Oracle access depends on Fusion Service roles and privileges for service request read/create/update/search and message creation."`;
        `requiredWhen`: `"built-in-provider-rest-adapter"`;
        `scopeKind`: `"internal-capability-labels"`;
     \};
     `required`: `false`;
     `scopes`: readonly \[`"serviceRequests:read"`, `"serviceRequests:write"`\];
  \}\];
  `directions`: readonly \[`"bidirectional"`\];
  `id`: `"ticketing.oracle-service"`;
  `limitations`: readonly \[`"Oracle Service categories, required fields, queues, assignment rules, milestones, extensions, and privileges are owned by the SDK user's Fusion Service environment."`, `"SDK users own handoff timing, field mapping, customer identity matching, visibility, consent, notification policy, retry/rate-limit behavior, and retention before calling Oracle APIs."`, `"The built-in adapter covers selected serviceRequests REST operations only; hosts can still inject an approved Oracle Service provider client for custom authentication, retries, or API-version policy."`\];
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
        `adapterKind`: `"no-official-sdk-rest-adapter"`;
        `apiVersion`: `"11.13.18.05"`;
        `defaultClient`: `"built-in-oracle-fusion-service-rest-adapter"`;
        `providerClientOverride`: `true`;
        `strategy`: `"provider-rest-adapter"`;
     \};
     `implementationStrategy`: \{
        `checkedAt`: `"2026-06-25"`;
        `exception`: `"provider-rest-adapter"`;
        `reason`: `"No suitable maintained npm runtime SDK was verified for Oracle Fusion Service serviceRequests or Oracle Service Cloud/B2C Service incidents; Oracle documents these ticketing surfaces as REST APIs, while the official OCI TypeScript/JavaScript SDK manages OCI resources including Fusion Apps as a Service rather than service request records."`;
        `rejectedLibraries`: readonly \[\{
           `packageName`: `"oci-fusionapps"`;
           `reason`: `"Oracle-maintained OCI SDK package for Fusion Apps Service administration, not a typed Oracle Fusion Service serviceRequests or B2C Service incident data client."`;
           `result`: `"not-used-as-runtime-ticketing-sdk"`;
           `source`: `"npm"`;
           `version`: `"2.135.1"`;
         \}, \{
           `packageName`: `"oci-sdk"`;
           `reason`: `"Oracle-maintained OCI SDK aggregate, but it does not expose the Oracle Fusion Service serviceRequests or Oracle B2C Service incident ticketing runtime surface used by this package."`;
           `result`: `"not-used-as-runtime-ticketing-sdk"`;
           `source`: `"npm"`;
           `version`: `"2.135.1"`;
         \}, \{
           `packageName`: `"osvc_node"`;
           `reason`: `"Unofficial Oracle Service Cloud REST wrapper last published years ago, not a maintained Oracle runtime SDK suitable for Cognidesk provider-client ownership."`;
           `result`: `"rejected-unofficial-stale-wrapper"`;
           `source`: `"npm"`;
           `version`: `"1.0.0"`;
        \}\];
        `result`: `"no-suitable-maintained-runtime-provider-sdk"`;
        `strategy`: `"no-official-sdk-rest-adapter"`;
     \};
     `providerClient`: \{
        `defaultClientPolicy`: `"built-in-provider-rest-adapter"`;
        `importPolicy`: `"optional-host-override"`;
        `interface`: `"OracleServiceTicketingProviderClient"`;
        `operationTargets`: readonly \[\{
           `alias`: `"ticket.create"`;
           `target`: `"providerClient.createServiceRequest"`;
         \}, \{
           `alias`: `"ticket.read"`;
           `target`: `"providerClient.getServiceRequest"`;
         \}, \{
           `alias`: `"ticket.update"`;
           `target`: `"providerClient.updateServiceRequest"`;
         \}, \{
           `alias`: `"ticket.search"`;
           `target`: `"providerClient.searchServiceRequests"`;
         \}, \{
           `alias`: `"oracle-service.serviceRequestMessage.create"`;
           `target`: `"providerClient.createServiceRequestMessage"`;
        \}\];
        `package`: `"optional-host-provided"`;
     \};
     `providerRestAdapterOperationSlice`: \{
        `adapterKind`: `"no-official-sdk-rest-adapter"`;
        `checkedAt`: `"2026-06-25"`;
        `operations`: readonly \[\{
           `alias`: `"ticket.create"`;
           `target`: `"providerClient.createServiceRequest"`;
         \}, \{
           `alias`: `"ticket.read"`;
           `target`: `"providerClient.getServiceRequest"`;
         \}, \{
           `alias`: `"ticket.update"`;
           `target`: `"providerClient.updateServiceRequest"`;
         \}, \{
           `alias`: `"ticket.search"`;
           `target`: `"providerClient.searchServiceRequests"`;
         \}, \{
           `alias`: `"oracle-service.serviceRequestMessage.create"`;
           `target`: `"providerClient.createServiceRequestMessage"`;
        \}\];
        `sourceKind`: `"provider-rest-adapter"`;
        `sourceVersion`: `"11.13.18.05"`;
     \};
     `sdkDecision`: \{
        `acceptedRuntimeProviderSdk`: `null`;
        `checkedAt`: `"2026-06-25"`;
        `checkedSources`: readonly \[`"Oracle Fusion Service serviceRequests REST API documentation"`, `"Oracle B2C Service incidents REST API documentation"`, `"npm registry package metadata and search results"`\];
        `providerRestAdapterException`: `true`;
        `rejectedLibraries`: readonly \[\{
           `packageName`: `"oci-fusionapps"`;
           `reason`: `"Oracle-maintained OCI SDK package for Fusion Apps Service administration, not a typed Oracle Fusion Service serviceRequests or B2C Service incident data client."`;
           `result`: `"not-used-as-runtime-ticketing-sdk"`;
           `source`: `"npm"`;
           `version`: `"2.135.1"`;
         \}, \{
           `packageName`: `"oci-sdk"`;
           `reason`: `"Oracle-maintained OCI SDK aggregate, but it does not expose the Oracle Fusion Service serviceRequests or Oracle B2C Service incident ticketing runtime surface used by this package."`;
           `result`: `"not-used-as-runtime-ticketing-sdk"`;
           `source`: `"npm"`;
           `version`: `"2.135.1"`;
         \}, \{
           `packageName`: `"osvc_node"`;
           `reason`: `"Unofficial Oracle Service Cloud REST wrapper last published years ago, not a maintained Oracle runtime SDK suitable for Cognidesk provider-client ownership."`;
           `result`: `"rejected-unofficial-stale-wrapper"`;
           `source`: `"npm"`;
           `version`: `"1.0.0"`;
        \}\];
        `result`: `"provider-rest-adapter-exception"`;
        `viableMaintainedRuntimeProviderSdk`: `false`;
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
\}, \{
  `accessToken`: `string`;
  `authConfigured`: `true`;
  `baseUrl`: `string`;
  `basicAuthConfigured`: `boolean`;
  `headersConfigured`: `boolean`;
  `instanceUrl`: `string`;
  `providerClientConfigured`: `true`;
\}, \{
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

### createUnconfiguredOracleServiceTicketingProviderClient()

```ts
function createUnconfiguredOracleServiceTicketingProviderClient(): OracleServiceTicketingProviderClient;
```

#### Returns

[`OracleServiceTicketingProviderClient`](#oracleserviceticketingproviderclient)

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

### ORACLE\_SERVICE\_DEFAULT\_API\_VERSION

Re-exports [ORACLE_SERVICE_DEFAULT_API_VERSION](dist/manifest.md#oracle_service_default_api_version)

***

### oracleServiceTicketingProviderManifest

Re-exports [oracleServiceTicketingProviderManifest](dist/manifest.md#oracleserviceticketingprovidermanifest)
