# integrations/contact-center/8x8/dist

## Interfaces

### ConfiguredHandoffInput

#### Properties

##### idempotencyKey?

```ts
optional idempotencyKey?: string;
```

##### payload?

```ts
optional payload?: EightByEightProviderPayload;
```

##### query?

```ts
optional query?: Record<string, ProviderQueryValue>;
```

##### routing?

```ts
optional routing?: EightByEightProviderPayload;
```

***

### EightByEightAgentStatusRequest

#### Extended by

- [`EightByEightUpdateAgentStatusInput`](#eightbyeightupdateagentstatusinput)

#### Properties

##### agent-status

```ts
agent-status: EightByEightAgentStatus;
```

##### status-code-item-id?

```ts
optional status-code-item-id?: number;
```

##### status-code-item-short-code?

```ts
optional status-code-item-short-code?: string;
```

##### status-code-list-id?

```ts
optional status-code-list-id?: number;
```

***

### EightByEightClient

#### Properties

##### rawClient

```ts
rawClient: EightByEightRawClient;
```

#### Methods

##### createHandoff()

```ts
createHandoff(input?): Promise<ProviderJsonObject>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input?` | [`ConfiguredHandoffInput`](#configuredhandoffinput) |

###### Returns

`Promise`\<[`ProviderJsonObject`](#providerjsonobject)\>

##### endContact()

```ts
endContact(input): Promise<ProviderJsonObject>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`EightByEightEndContactInput`](#eightbyeightendcontactinput) |

###### Returns

`Promise`\<[`ProviderJsonObject`](#providerjsonobject)\>

##### readiness()

```ts
readiness(input?): Promise<ProviderJsonObject>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input?` | [`EightByEightReadinessInput`](#eightbyeightreadinessinput) |

###### Returns

`Promise`\<[`ProviderJsonObject`](#providerjsonobject)\>

##### startContact()

```ts
startContact(input): Promise<ProviderJsonObject>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`EightByEightStartContactInput`](#eightbyeightstartcontactinput) |

###### Returns

`Promise`\<[`ProviderJsonObject`](#providerjsonobject)\>

##### updateAgentStatus()

```ts
updateAgentStatus(input): Promise<ProviderJsonObject>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`EightByEightUpdateAgentStatusInput`](#eightbyeightupdateagentstatusinput) |

###### Returns

`Promise`\<[`ProviderJsonObject`](#providerjsonobject)\>

***

### EightByEightClientOptions

#### Extended by

- [`EightByEightIntegrationOptions`](#eightbyeightintegrationoptions)

#### Properties

##### accessToken?

```ts
optional accessToken?: string;
```

##### apiBaseUrl?

```ts
optional apiBaseUrl?: string;
```

##### apiKey?

```ts
optional apiKey?: string;
```

##### apiKeyHeaderName?

```ts
optional apiKeyHeaderName?: string;
```

##### authorizationHeader?

```ts
optional authorizationHeader?: string;
```

##### baseUrl?

```ts
optional baseUrl?: string;
```

##### defaultHandoffPath?

```ts
optional defaultHandoffPath?: string;
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

##### rawClient?

```ts
optional rawClient?: EightByEightRawClient;
```

##### readinessPath?

```ts
optional readinessPath?: string;
```

##### retry?

```ts
optional retry?: number | ProviderRestRetryOptions;
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

### EightByEightEndContactInput

#### Properties

##### endPostProcessing?

```ts
optional endPostProcessing?: boolean;
```

##### idempotencyKey?

```ts
optional idempotencyKey?: string;
```

##### interactionId

```ts
interactionId: string;
```

##### tenantId

```ts
tenantId: string;
```

***

### EightByEightIntegrationOptions

#### Extends

- [`EightByEightClientOptions`](#eightbyeightclientoptions)

#### Properties

##### accessToken?

```ts
optional accessToken?: string;
```

###### Inherited from

[`EightByEightClientOptions`](#eightbyeightclientoptions).[`accessToken`](#accesstoken)

##### apiBaseUrl?

```ts
optional apiBaseUrl?: string;
```

###### Inherited from

[`EightByEightClientOptions`](#eightbyeightclientoptions).[`apiBaseUrl`](#apibaseurl)

##### apiKey?

```ts
optional apiKey?: string;
```

###### Inherited from

[`EightByEightClientOptions`](#eightbyeightclientoptions).[`apiKey`](#apikey)

##### apiKeyHeaderName?

```ts
optional apiKeyHeaderName?: string;
```

###### Inherited from

[`EightByEightClientOptions`](#eightbyeightclientoptions).[`apiKeyHeaderName`](#apikeyheadername)

##### authorizationHeader?

```ts
optional authorizationHeader?: string;
```

###### Inherited from

[`EightByEightClientOptions`](#eightbyeightclientoptions).[`authorizationHeader`](#authorizationheader)

##### baseUrl?

```ts
optional baseUrl?: string;
```

###### Inherited from

[`EightByEightClientOptions`](#eightbyeightclientoptions).[`baseUrl`](#baseurl)

##### client?

```ts
optional client?: EightByEightClient;
```

##### defaultHandoffPath?

```ts
optional defaultHandoffPath?: string;
```

###### Inherited from

[`EightByEightClientOptions`](#eightbyeightclientoptions).[`defaultHandoffPath`](#defaulthandoffpath)

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

[`EightByEightClientOptions`](#eightbyeightclientoptions).[`fetch`](#fetch)

##### rawClient?

```ts
optional rawClient?: EightByEightRawClient;
```

###### Inherited from

[`EightByEightClientOptions`](#eightbyeightclientoptions).[`rawClient`](#rawclient-1)

##### readinessPath?

```ts
optional readinessPath?: string;
```

###### Inherited from

[`EightByEightClientOptions`](#eightbyeightclientoptions).[`readinessPath`](#readinesspath)

##### retry?

```ts
optional retry?: number | ProviderRestRetryOptions;
```

###### Inherited from

[`EightByEightClientOptions`](#eightbyeightclientoptions).[`retry`](#retry)

##### signal?

```ts
optional signal?: AbortSignal;
```

###### Inherited from

[`EightByEightClientOptions`](#eightbyeightclientoptions).[`signal`](#signal)

##### timeoutMs?

```ts
optional timeoutMs?: number;
```

###### Inherited from

[`EightByEightClientOptions`](#eightbyeightclientoptions).[`timeoutMs`](#timeoutms)

***

### EightByEightPhoneInteraction

#### Extended by

- [`EightByEightStartContactInput`](#eightbyeightstartcontactinput)

#### Properties

##### agentId

```ts
agentId: string;
```

##### callerId

```ts
callerId: EightByEightPhoneNumberValue;
```

##### ctlUserData?

```ts
optional ctlUserData?: readonly EightByEightUserParam[];
```

##### dialplanId?

```ts
optional dialplanId?: EightByEightPhoneNumberValue;
```

##### extTransactionData?

```ts
optional extTransactionData?: readonly EightByEightUserParam[];
```

##### forceCall?

```ts
optional forceCall?: boolean;
```

##### number

```ts
number: EightByEightPhoneNumberValue;
```

##### prefix

```ts
prefix: EightByEightPhoneNumberValue;
```

##### queueId?

```ts
optional queueId?: EightByEightPhoneNumberValue;
```

***

### EightByEightRawClient

#### Methods

##### createHandoff()

```ts
createHandoff(input?): Promise<ProviderJsonObject>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input?` | [`ConfiguredHandoffInput`](#configuredhandoffinput) |

###### Returns

`Promise`\<[`ProviderJsonObject`](#providerjsonobject)\>

##### endContact()

```ts
endContact(input): Promise<ProviderJsonObject>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`EightByEightEndContactInput`](#eightbyeightendcontactinput) |

###### Returns

`Promise`\<[`ProviderJsonObject`](#providerjsonobject)\>

##### readiness()?

```ts
optional readiness(input?): Promise<ProviderJsonObject>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input?` | [`EightByEightReadinessInput`](#eightbyeightreadinessinput) |

###### Returns

`Promise`\<[`ProviderJsonObject`](#providerjsonobject)\>

##### startContact()

```ts
startContact(input): Promise<ProviderJsonObject>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`EightByEightStartContactInput`](#eightbyeightstartcontactinput) |

###### Returns

`Promise`\<[`ProviderJsonObject`](#providerjsonobject)\>

##### updateAgentStatus()

```ts
updateAgentStatus(input): Promise<ProviderJsonObject>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`EightByEightUpdateAgentStatusInput`](#eightbyeightupdateagentstatusinput) |

###### Returns

`Promise`\<[`ProviderJsonObject`](#providerjsonobject)\>

***

### EightByEightReadinessInput

#### Properties

##### metadata?

```ts
optional metadata?: EightByEightProviderPayload;
```

##### probe?

```ts
optional probe?: string;
```

***

### EightByEightStartContactInput

#### Extends

- [`EightByEightPhoneInteraction`](#eightbyeightphoneinteraction)

#### Properties

##### agentId

```ts
agentId: string;
```

###### Inherited from

[`EightByEightPhoneInteraction`](#eightbyeightphoneinteraction).[`agentId`](#agentid)

##### callerId

```ts
callerId: EightByEightPhoneNumberValue;
```

###### Inherited from

[`EightByEightPhoneInteraction`](#eightbyeightphoneinteraction).[`callerId`](#callerid)

##### ctlUserData?

```ts
optional ctlUserData?: readonly EightByEightUserParam[];
```

###### Inherited from

[`EightByEightPhoneInteraction`](#eightbyeightphoneinteraction).[`ctlUserData`](#ctluserdata)

##### dialplanId?

```ts
optional dialplanId?: EightByEightPhoneNumberValue;
```

###### Inherited from

[`EightByEightPhoneInteraction`](#eightbyeightphoneinteraction).[`dialplanId`](#dialplanid)

##### extTransactionData?

```ts
optional extTransactionData?: readonly EightByEightUserParam[];
```

###### Inherited from

[`EightByEightPhoneInteraction`](#eightbyeightphoneinteraction).[`extTransactionData`](#exttransactiondata)

##### forceCall?

```ts
optional forceCall?: boolean;
```

###### Inherited from

[`EightByEightPhoneInteraction`](#eightbyeightphoneinteraction).[`forceCall`](#forcecall)

##### idempotencyKey?

```ts
optional idempotencyKey?: string;
```

##### number

```ts
number: EightByEightPhoneNumberValue;
```

###### Inherited from

[`EightByEightPhoneInteraction`](#eightbyeightphoneinteraction).[`number`](#number)

##### prefix

```ts
prefix: EightByEightPhoneNumberValue;
```

###### Inherited from

[`EightByEightPhoneInteraction`](#eightbyeightphoneinteraction).[`prefix`](#prefix)

##### queueId?

```ts
optional queueId?: EightByEightPhoneNumberValue;
```

###### Inherited from

[`EightByEightPhoneInteraction`](#eightbyeightphoneinteraction).[`queueId`](#queueid)

##### tenantId

```ts
tenantId: string;
```

***

### EightByEightUpdateAgentStatusInput

#### Extends

- [`EightByEightAgentStatusRequest`](#eightbyeightagentstatusrequest)

#### Properties

##### agent-status

```ts
agent-status: EightByEightAgentStatus;
```

###### Inherited from

[`EightByEightAgentStatusRequest`](#eightbyeightagentstatusrequest).[`agent-status`](#agent-status)

##### agentId

```ts
agentId: string;
```

##### idempotencyKey?

```ts
optional idempotencyKey?: string;
```

##### status-code-item-id?

```ts
optional status-code-item-id?: number;
```

###### Inherited from

[`EightByEightAgentStatusRequest`](#eightbyeightagentstatusrequest).[`status-code-item-id`](#status-code-item-id)

##### status-code-item-short-code?

```ts
optional status-code-item-short-code?: string;
```

###### Inherited from

[`EightByEightAgentStatusRequest`](#eightbyeightagentstatusrequest).[`status-code-item-short-code`](#status-code-item-short-code)

##### status-code-list-id?

```ts
optional status-code-list-id?: number;
```

###### Inherited from

[`EightByEightAgentStatusRequest`](#eightbyeightagentstatusrequest).[`status-code-list-id`](#status-code-list-id)

##### tenantId

```ts
tenantId: string;
```

***

### EightByEightUserParam

#### Properties

##### name

```ts
name: string;
```

##### value

```ts
value: string;
```

***

### ProviderRestRetryOptions

#### Properties

##### attempts?

```ts
optional attempts?: number;
```

##### baseDelayMs?

```ts
optional baseDelayMs?: number;
```

##### maxDelayMs?

```ts
optional maxDelayMs?: number;
```

##### statusCodes?

```ts
optional statusCodes?: readonly number[];
```

## Type Aliases

### EightByEightAgentStatus

```ts
type EightByEightAgentStatus = 1 | 3 | 4 | 5;
```

***

### EightByEightPhoneNumberValue

```ts
type EightByEightPhoneNumberValue = string | number;
```

***

### EightByEightProviderPayload

```ts
type EightByEightProviderPayload = ProviderJsonObject | object | undefined;
```

***

### ProviderJsonObject

```ts
type ProviderJsonObject = Record<string, unknown>;
```

## Functions

### createEightByEightClient()

```ts
function createEightByEightClient(options?): EightByEightClient;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options?` | [`EightByEightClientOptions`](#eightbyeightclientoptions) |

#### Returns

[`EightByEightClient`](#eightbyeightclient)

***

### createEightByEightIntegration()

```ts
function createEightByEightIntegration(options?): DefinedIntegration<{
  capabilities: readonly [{
     capability: "handoff";
     exposesSensitiveData: true;
     providerObjects: readonly [{
        kind: "contactTransfer";
        label: "contactTransfer";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     capability: "send";
     exposesSensitiveData: true;
     providerObjects: readonly [{
        kind: "contact";
        label: "contact";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     capability: "update-provider-object";
     exposesSensitiveData: true;
     providerObjects: readonly [{
        kind: "contact";
        label: "contact";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     capability: "update-provider-object";
     exposesSensitiveData: true;
     providerObjects: readonly [{
        kind: "agent";
        label: "agent";
     }];
     requiresCredential: true;
     sideEffect: true;
  }];
  category: "contact-center";
  channelAudiences: readonly ["customer-facing", "internal-support", "mixed"];
  coverage: {
     evidence: readonly [{
        label: "8x8 Contact Center Call API OpenAPI";
        url: "https://raw.githubusercontent.com/8x8Cloud/public-developer-docs/master/docs_oas/actions-events/contact_center_call_api.json";
      }, {
        label: "8x8 Contact Center Agent Status OpenAPI";
        url: "https://raw.githubusercontent.com/8x8Cloud/public-developer-docs/master/docs_oas/actions-events/contact_center_agent_status_api.json";
      }, {
        label: "8x8 Partner SDK";
        url: "https://developer.8x8.com/tech-partner/docs/partner-sdk-integration-guide";
     }];
     notes: readonly ["No suitable official server-side JavaScript Contact Center SDK was verified.", "The official @8x8/pui-partner-comm package is a partner iframe communication SDK, not a backend Contact Center API client.", "The runtime constructs a fail-closed built-in REST adapter from baseUrl/API credentials and keeps rawClient available as an override.", "OpenAPI operation IDs are retained as the reviewed path allowlist for package-owned REST calls."];
     scope: "support-workflow-subset";
  };
  credentialRequirements: readonly [{
     id: "8x8-contact-center-api-base";
     label: "8x8 Contact Center API base URL";
     required: true;
   }, {
     id: "8x8-contact-center-api-access";
     label: "8x8 Contact Center API access";
     required: true;
   }, {
     id: "8x8-contact-center-routing";
     label: "8x8 queue/campaign routing configuration";
     required: false;
  }];
  directions: readonly ["inbound-only", "outbound-only", "bidirectional"];
  id: "contact-center.8x8";
  maintainers: readonly [{
     name: "Cognidesk";
     type: "official";
  }];
  metadata: {
     implementation: {
        adapterKind: "no-official-sdk-rest-adapter";
        allowedOperations: readonly [{
           alias: "contact-center.handoff.request";
           checksum: "not-applicable-host-configured";
           id: "configuredHandoff";
           method: "POST";
           path: "host-configured";
           source: "provider-rest-adapter";
         }, {
           alias: "contact-center.contact.start";
           checksum: "sha256:87445b35060c46e8e70b23636c77d33a1ff2558eb526aefb45447752132cfe62";
           id: "placePhoneCall";
           method: "POST";
           path: "/tenants/{tenantId}/calls";
           source: "https://raw.githubusercontent.com/8x8Cloud/public-developer-docs/master/docs_oas/actions-events/contact_center_call_api.json";
         }, {
           alias: "contact-center.contact.end";
           checksum: "sha256:87445b35060c46e8e70b23636c77d33a1ff2558eb526aefb45447752132cfe62";
           id: "deletePhoneInteraction";
           method: "DELETE";
           path: "/tenants/{tenantId}/calls/{interactionId}";
           source: "https://raw.githubusercontent.com/8x8Cloud/public-developer-docs/master/docs_oas/actions-events/contact_center_call_api.json";
         }, {
           alias: "contact-center.agent.status.update";
           checksum: "sha256:89ba77f48f7a471fb21c34dfb0c7170c1a90b7ea08da8de65981049ade09c2ae";
           id: "setagentstatus";
           method: "PUT";
           path: "/tenants/{tenantId}/agentstatus/agents/{agentId}";
           source: "https://raw.githubusercontent.com/8x8Cloud/public-developer-docs/master/docs_oas/actions-events/contact_center_agent_status_api.json";
        }];
        implementationStrategy: "provider-rest-adapter";
        providerSdkDecision: {
           checkedAt: "2026-06-25";
           checkedPackages: readonly [{
              checkedVersion: "0.15.0";
              license: "SEE LICENSE IN LICENSE.md";
              package: "@8x8/pui-partner-comm";
              reason: "Official package is for 8x8 platform-ui partner iframe communication and does not expose server-side Contact Center REST operations.";
              result: "browser-partner-iframe-sdk-not-contact-center-api-client";
           }];
           defaultRestPolicy: "fail-closed-built-in-rest-adapter-with-typed-raw-client-override";
           result: "no-suitable-server-side-contact-center-sdk";
           typedClientOverride: "EightByEightRawClient";
        };
        runtimePolicy: {
           defaultClient: "built-in-provider-rest-adapter";
           failClosed: true;
           override: "createEightByEightClient({ rawClient })";
           requestOptions: readonly ["baseUrl", "accessToken", "authorizationHeader", "apiKey", "apiKeyHeaderName", "fetch", "signal", "timeoutMs", "retry"];
        };
        sdkDecision: "No suitable official server-side JavaScript Contact Center SDK was verified. The official @8x8/pui-partner-comm SDK is for iframe partner integrations, so this package provides a fail-closed REST adapter with a rawClient override.";
        verifiedAt: "2026-06-25";
     };
     manifestOnlySafe: true;
     providerRestAdapter: {
        adapterKind: "no-official-sdk-rest-adapter";
        failClosed: true;
        rawClientOverride: "EightByEightClient.rawClient";
        strategy: "provider-rest-adapter";
     };
     providerSdkDecision: {
        checkedAt: "2026-06-25";
        checkedPackages: readonly [{
           checkedVersion: "0.15.0";
           license: "SEE LICENSE IN LICENSE.md";
           package: "@8x8/pui-partner-comm";
           reason: "Official package is for 8x8 platform-ui partner iframe communication and does not expose server-side Contact Center REST operations.";
           result: "browser-partner-iframe-sdk-not-contact-center-api-client";
        }];
        defaultRestPolicy: "fail-closed-built-in-rest-adapter-with-typed-raw-client-override";
        result: "no-suitable-server-side-contact-center-sdk";
        typedClientOverride: "EightByEightRawClient";
     };
  };
  name: "8x8 Contact Center";
  operations: readonly [{
     alias: "contact-center.handoff.request";
     capability: "handoff";
     providerObject: "contactTransfer";
   }, {
     alias: "contact-center.contact.start";
     capability: "send";
     providerObject: "contact";
   }, {
     alias: "contact-center.contact.end";
     capability: "update-provider-object";
     providerObject: "contact";
   }, {
     alias: "contact-center.agent.status.update";
     capability: "update-provider-object";
     providerObject: "agent";
  }];
  packageName: "@cognidesk/integration-contact-center-8x8";
  provider: "8x8";
  trustLevel: "official";
}, unknown, {
  contact-center.agent.status.update: (input) => Promise<ProviderJsonObject>;
  contact-center.contact.end: (input) => Promise<ProviderJsonObject>;
  contact-center.contact.start: (input) => Promise<ProviderJsonObject>;
  contact-center.handoff.request: (input) => Promise<ProviderJsonObject>;
}>;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options?` | [`EightByEightIntegrationOptions`](#eightbyeightintegrationoptions) |

#### Returns

[`DefinedIntegration`](../../../packages/integration-kit/dist.md#definedintegration)\<\{
  `capabilities`: readonly \[\{
     `capability`: `"handoff"`;
     `exposesSensitiveData`: `true`;
     `providerObjects`: readonly \[\{
        `kind`: `"contactTransfer"`;
        `label`: `"contactTransfer"`;
     \}\];
     `requiresCredential`: `true`;
     `sideEffect`: `true`;
   \}, \{
     `capability`: `"send"`;
     `exposesSensitiveData`: `true`;
     `providerObjects`: readonly \[\{
        `kind`: `"contact"`;
        `label`: `"contact"`;
     \}\];
     `requiresCredential`: `true`;
     `sideEffect`: `true`;
   \}, \{
     `capability`: `"update-provider-object"`;
     `exposesSensitiveData`: `true`;
     `providerObjects`: readonly \[\{
        `kind`: `"contact"`;
        `label`: `"contact"`;
     \}\];
     `requiresCredential`: `true`;
     `sideEffect`: `true`;
   \}, \{
     `capability`: `"update-provider-object"`;
     `exposesSensitiveData`: `true`;
     `providerObjects`: readonly \[\{
        `kind`: `"agent"`;
        `label`: `"agent"`;
     \}\];
     `requiresCredential`: `true`;
     `sideEffect`: `true`;
  \}\];
  `category`: `"contact-center"`;
  `channelAudiences`: readonly \[`"customer-facing"`, `"internal-support"`, `"mixed"`\];
  `coverage`: \{
     `evidence`: readonly \[\{
        `label`: `"8x8 Contact Center Call API OpenAPI"`;
        `url`: `"https://raw.githubusercontent.com/8x8Cloud/public-developer-docs/master/docs_oas/actions-events/contact_center_call_api.json"`;
      \}, \{
        `label`: `"8x8 Contact Center Agent Status OpenAPI"`;
        `url`: `"https://raw.githubusercontent.com/8x8Cloud/public-developer-docs/master/docs_oas/actions-events/contact_center_agent_status_api.json"`;
      \}, \{
        `label`: `"8x8 Partner SDK"`;
        `url`: `"https://developer.8x8.com/tech-partner/docs/partner-sdk-integration-guide"`;
     \}\];
     `notes`: readonly \[`"No suitable official server-side JavaScript Contact Center SDK was verified."`, `"The official @8x8/pui-partner-comm package is a partner iframe communication SDK, not a backend Contact Center API client."`, `"The runtime constructs a fail-closed built-in REST adapter from baseUrl/API credentials and keeps rawClient available as an override."`, `"OpenAPI operation IDs are retained as the reviewed path allowlist for package-owned REST calls."`\];
     `scope`: `"support-workflow-subset"`;
  \};
  `credentialRequirements`: readonly \[\{
     `id`: `"8x8-contact-center-api-base"`;
     `label`: `"8x8 Contact Center API base URL"`;
     `required`: `true`;
   \}, \{
     `id`: `"8x8-contact-center-api-access"`;
     `label`: `"8x8 Contact Center API access"`;
     `required`: `true`;
   \}, \{
     `id`: `"8x8-contact-center-routing"`;
     `label`: `"8x8 queue/campaign routing configuration"`;
     `required`: `false`;
  \}\];
  `directions`: readonly \[`"inbound-only"`, `"outbound-only"`, `"bidirectional"`\];
  `id`: `"contact-center.8x8"`;
  `maintainers`: readonly \[\{
     `name`: `"Cognidesk"`;
     `type`: `"official"`;
  \}\];
  `metadata`: \{
     `implementation`: \{
        `adapterKind`: `"no-official-sdk-rest-adapter"`;
        `allowedOperations`: readonly \[\{
           `alias`: `"contact-center.handoff.request"`;
           `checksum`: `"not-applicable-host-configured"`;
           `id`: `"configuredHandoff"`;
           `method`: `"POST"`;
           `path`: `"host-configured"`;
           `source`: `"provider-rest-adapter"`;
         \}, \{
           `alias`: `"contact-center.contact.start"`;
           `checksum`: `"sha256:87445b35060c46e8e70b23636c77d33a1ff2558eb526aefb45447752132cfe62"`;
           `id`: `"placePhoneCall"`;
           `method`: `"POST"`;
           `path`: `"/tenants/{tenantId}/calls"`;
           `source`: `"https://raw.githubusercontent.com/8x8Cloud/public-developer-docs/master/docs_oas/actions-events/contact_center_call_api.json"`;
         \}, \{
           `alias`: `"contact-center.contact.end"`;
           `checksum`: `"sha256:87445b35060c46e8e70b23636c77d33a1ff2558eb526aefb45447752132cfe62"`;
           `id`: `"deletePhoneInteraction"`;
           `method`: `"DELETE"`;
           `path`: `"/tenants/{tenantId}/calls/{interactionId}"`;
           `source`: `"https://raw.githubusercontent.com/8x8Cloud/public-developer-docs/master/docs_oas/actions-events/contact_center_call_api.json"`;
         \}, \{
           `alias`: `"contact-center.agent.status.update"`;
           `checksum`: `"sha256:89ba77f48f7a471fb21c34dfb0c7170c1a90b7ea08da8de65981049ade09c2ae"`;
           `id`: `"setagentstatus"`;
           `method`: `"PUT"`;
           `path`: `"/tenants/{tenantId}/agentstatus/agents/{agentId}"`;
           `source`: `"https://raw.githubusercontent.com/8x8Cloud/public-developer-docs/master/docs_oas/actions-events/contact_center_agent_status_api.json"`;
        \}\];
        `implementationStrategy`: `"provider-rest-adapter"`;
        `providerSdkDecision`: \{
           `checkedAt`: `"2026-06-25"`;
           `checkedPackages`: readonly \[\{
              `checkedVersion`: `"0.15.0"`;
              `license`: `"SEE LICENSE IN LICENSE.md"`;
              `package`: `"@8x8/pui-partner-comm"`;
              `reason`: `"Official package is for 8x8 platform-ui partner iframe communication and does not expose server-side Contact Center REST operations."`;
              `result`: `"browser-partner-iframe-sdk-not-contact-center-api-client"`;
           \}\];
           `defaultRestPolicy`: `"fail-closed-built-in-rest-adapter-with-typed-raw-client-override"`;
           `result`: `"no-suitable-server-side-contact-center-sdk"`;
           `typedClientOverride`: `"EightByEightRawClient"`;
        \};
        `runtimePolicy`: \{
           `defaultClient`: `"built-in-provider-rest-adapter"`;
           `failClosed`: `true`;
           `override`: `"createEightByEightClient({ rawClient })"`;
           `requestOptions`: readonly \[`"baseUrl"`, `"accessToken"`, `"authorizationHeader"`, `"apiKey"`, `"apiKeyHeaderName"`, `"fetch"`, `"signal"`, `"timeoutMs"`, `"retry"`\];
        \};
        `sdkDecision`: `"No suitable official server-side JavaScript Contact Center SDK was verified. The official @8x8/pui-partner-comm SDK is for iframe partner integrations, so this package provides a fail-closed REST adapter with a rawClient override."`;
        `verifiedAt`: `"2026-06-25"`;
     \};
     `manifestOnlySafe`: `true`;
     `providerRestAdapter`: \{
        `adapterKind`: `"no-official-sdk-rest-adapter"`;
        `failClosed`: `true`;
        `rawClientOverride`: `"EightByEightClient.rawClient"`;
        `strategy`: `"provider-rest-adapter"`;
     \};
     `providerSdkDecision`: \{
        `checkedAt`: `"2026-06-25"`;
        `checkedPackages`: readonly \[\{
           `checkedVersion`: `"0.15.0"`;
           `license`: `"SEE LICENSE IN LICENSE.md"`;
           `package`: `"@8x8/pui-partner-comm"`;
           `reason`: `"Official package is for 8x8 platform-ui partner iframe communication and does not expose server-side Contact Center REST operations."`;
           `result`: `"browser-partner-iframe-sdk-not-contact-center-api-client"`;
        \}\];
        `defaultRestPolicy`: `"fail-closed-built-in-rest-adapter-with-typed-raw-client-override"`;
        `result`: `"no-suitable-server-side-contact-center-sdk"`;
        `typedClientOverride`: `"EightByEightRawClient"`;
     \};
  \};
  `name`: `"8x8 Contact Center"`;
  `operations`: readonly \[\{
     `alias`: `"contact-center.handoff.request"`;
     `capability`: `"handoff"`;
     `providerObject`: `"contactTransfer"`;
   \}, \{
     `alias`: `"contact-center.contact.start"`;
     `capability`: `"send"`;
     `providerObject`: `"contact"`;
   \}, \{
     `alias`: `"contact-center.contact.end"`;
     `capability`: `"update-provider-object"`;
     `providerObject`: `"contact"`;
   \}, \{
     `alias`: `"contact-center.agent.status.update"`;
     `capability`: `"update-provider-object"`;
     `providerObject`: `"agent"`;
  \}\];
  `packageName`: `"@cognidesk/integration-contact-center-8x8"`;
  `provider`: `"8x8"`;
  `trustLevel`: `"official"`;
\}, `unknown`, \{
  `contact-center.agent.status.update`: (`input`) => `Promise`\<[`ProviderJsonObject`](#providerjsonobject)\>;
  `contact-center.contact.end`: (`input`) => `Promise`\<[`ProviderJsonObject`](#providerjsonobject)\>;
  `contact-center.contact.start`: (`input`) => `Promise`\<[`ProviderJsonObject`](#providerjsonobject)\>;
  `contact-center.handoff.request`: (`input`) => `Promise`\<[`ProviderJsonObject`](#providerjsonobject)\>;
\}\>

***

### createEightByEightOperationHandlers()

```ts
function createEightByEightOperationHandlers(options?): {
  contact-center.agent.status.update: (input) => Promise<ProviderJsonObject>;
  contact-center.contact.end: (input) => Promise<ProviderJsonObject>;
  contact-center.contact.start: (input) => Promise<ProviderJsonObject>;
  contact-center.handoff.request: (input) => Promise<ProviderJsonObject>;
};
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options?` | [`EightByEightIntegrationOptions`](#eightbyeightintegrationoptions) |

#### Returns

```ts
{
  contact-center.agent.status.update: (input) => Promise<ProviderJsonObject>;
  contact-center.contact.end: (input) => Promise<ProviderJsonObject>;
  contact-center.contact.start: (input) => Promise<ProviderJsonObject>;
  contact-center.handoff.request: (input) => Promise<ProviderJsonObject>;
}
```

| Name | Type |
| ------ | ------ |
| `contact-center.agent.status.update()` | (`input`) => `Promise`\<[`ProviderJsonObject`](#providerjsonobject)\> |
| `contact-center.contact.end()` | (`input`) => `Promise`\<[`ProviderJsonObject`](#providerjsonobject)\> |
| `contact-center.contact.start()` | (`input`) => `Promise`\<[`ProviderJsonObject`](#providerjsonobject)\> |
| `contact-center.handoff.request()` | (`input`) => `Promise`\<[`ProviderJsonObject`](#providerjsonobject)\> |

## References

### eightByEightProviderManifest

Re-exports [eightByEightProviderManifest](dist/manifest.md#eightbyeightprovidermanifest)

***

### eightByEightProviderManifestInput

Re-exports [eightByEightProviderManifestInput](dist/manifest.md#eightbyeightprovidermanifestinput)

***

### eightByEightSupportSlice

Re-exports [eightByEightSupportSlice](dist/manifest.md#eightbyeightsupportslice)
