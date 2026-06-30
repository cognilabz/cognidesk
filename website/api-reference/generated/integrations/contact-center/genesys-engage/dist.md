# integrations/contact-center/genesys-engage/dist

## Interfaces

### ConfiguredHandoffInput

#### Properties

##### idempotencyKey?

```ts
optional idempotencyKey?: string;
```

##### payload?

```ts
optional payload?: unknown;
```

##### query?

```ts
optional query?: Record<string, ProviderQueryValue>;
```

***

### GenesysEngageClient

#### Properties

##### engagementSdkClient?

```ts
optional engagementSdkClient?: GenesysEngageEngagementSdkClient;
```

##### providerClient

```ts
providerClient: GenesysEngageProviderClient;
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

##### readiness()

```ts
readiness(): Promise<ProviderJsonObject>;
```

###### Returns

`Promise`\<[`ProviderJsonObject`](#providerjsonobject)\>

##### request()

```ts
request(input): Promise<ProviderJsonObject>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`ProviderExtensionRequestInput`](#providerextensionrequestinput) |

###### Returns

`Promise`\<[`ProviderJsonObject`](#providerjsonobject)\>

##### scheduleCallback()

```ts
scheduleCallback(input?): Promise<ProviderJsonObject>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input?` | [`GenesysEngageOperationInput`](#genesysengageoperationinput) |

###### Returns

`Promise`\<[`ProviderJsonObject`](#providerjsonobject)\>

##### sendChatMessage()

```ts
sendChatMessage(input?): Promise<ProviderJsonObject>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input?` | [`GenesysEngageOperationInput`](#genesysengageoperationinput) |

###### Returns

`Promise`\<[`ProviderJsonObject`](#providerjsonobject)\>

##### startContact()

```ts
startContact(input?): Promise<ProviderJsonObject>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input?` | [`GenesysEngageOperationInput`](#genesysengageoperationinput) |

###### Returns

`Promise`\<[`ProviderJsonObject`](#providerjsonobject)\>

***

### GenesysEngageClientOptions

#### Extended by

- [`GenesysEngageIntegrationOptions`](#genesysengageintegrationoptions)

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

##### engagementBaseUrl?

```ts
optional engagementBaseUrl?: string;
```

##### engagementSdk?

```ts
optional engagementSdk?: any;
```

##### engagementSdkClient?

```ts
optional engagementSdkClient?: GenesysEngageEngagementSdkClient;
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

##### providerClient?

```ts
optional providerClient?: GenesysEngageProviderClient;
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

### GenesysEngageEngagementSdkClient

#### Properties

##### apiClient

```ts
apiClient: any;
```

##### callbacksApi

```ts
callbacksApi: any;
```

##### sdk

```ts
sdk: any;
```

***

### GenesysEngageIntegrationOptions

#### Extends

- [`GenesysEngageClientOptions`](#genesysengageclientoptions)

#### Properties

##### accessToken?

```ts
optional accessToken?: string;
```

###### Inherited from

[`GenesysEngageClientOptions`](#genesysengageclientoptions).[`accessToken`](#accesstoken)

##### apiBaseUrl?

```ts
optional apiBaseUrl?: string;
```

###### Inherited from

[`GenesysEngageClientOptions`](#genesysengageclientoptions).[`apiBaseUrl`](#apibaseurl)

##### apiKey?

```ts
optional apiKey?: string;
```

###### Inherited from

[`GenesysEngageClientOptions`](#genesysengageclientoptions).[`apiKey`](#apikey)

##### apiKeyHeaderName?

```ts
optional apiKeyHeaderName?: string;
```

###### Inherited from

[`GenesysEngageClientOptions`](#genesysengageclientoptions).[`apiKeyHeaderName`](#apikeyheadername)

##### authorizationHeader?

```ts
optional authorizationHeader?: string;
```

###### Inherited from

[`GenesysEngageClientOptions`](#genesysengageclientoptions).[`authorizationHeader`](#authorizationheader)

##### baseUrl?

```ts
optional baseUrl?: string;
```

###### Inherited from

[`GenesysEngageClientOptions`](#genesysengageclientoptions).[`baseUrl`](#baseurl)

##### defaultHandoffPath?

```ts
optional defaultHandoffPath?: string;
```

###### Inherited from

[`GenesysEngageClientOptions`](#genesysengageclientoptions).[`defaultHandoffPath`](#defaulthandoffpath)

##### engagementBaseUrl?

```ts
optional engagementBaseUrl?: string;
```

###### Inherited from

[`GenesysEngageClientOptions`](#genesysengageclientoptions).[`engagementBaseUrl`](#engagementbaseurl)

##### engagementSdk?

```ts
optional engagementSdk?: any;
```

###### Inherited from

[`GenesysEngageClientOptions`](#genesysengageclientoptions).[`engagementSdk`](#engagementsdk)

##### engagementSdkClient?

```ts
optional engagementSdkClient?: GenesysEngageEngagementSdkClient;
```

###### Inherited from

[`GenesysEngageClientOptions`](#genesysengageclientoptions).[`engagementSdkClient`](#engagementsdkclient-1)

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

[`GenesysEngageClientOptions`](#genesysengageclientoptions).[`fetch`](#fetch)

##### genesysEngageClient?

```ts
optional genesysEngageClient?: GenesysEngageClient;
```

##### providerClient?

```ts
optional providerClient?: GenesysEngageProviderClient;
```

###### Inherited from

[`GenesysEngageClientOptions`](#genesysengageclientoptions).[`providerClient`](#providerclient-1)

##### readinessPath?

```ts
optional readinessPath?: string;
```

###### Inherited from

[`GenesysEngageClientOptions`](#genesysengageclientoptions).[`readinessPath`](#readinesspath)

##### retry?

```ts
optional retry?: number | ProviderRestRetryOptions;
```

###### Inherited from

[`GenesysEngageClientOptions`](#genesysengageclientoptions).[`retry`](#retry)

##### signal?

```ts
optional signal?: AbortSignal;
```

###### Inherited from

[`GenesysEngageClientOptions`](#genesysengageclientoptions).[`signal`](#signal)

##### timeoutMs?

```ts
optional timeoutMs?: number;
```

###### Inherited from

[`GenesysEngageClientOptions`](#genesysengageclientoptions).[`timeoutMs`](#timeoutms)

***

### GenesysEngageOperationInput

#### Extended by

- [`ProviderExtensionRequestInput`](#providerextensionrequestinput)

#### Properties

##### body?

```ts
optional body?: unknown;
```

##### headers?

```ts
optional headers?: Record<string, string>;
```

##### idempotencyKey?

```ts
optional idempotencyKey?: string;
```

##### pathParams?

```ts
optional pathParams?: Record<string, string | number | boolean>;
```

##### query?

```ts
optional query?: Record<string, ProviderQueryValue>;
```

***

### GenesysEngageProviderClient

#### Methods

##### createHandoff()

```ts
createHandoff(input): Promise<ProviderJsonObject>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`ConfiguredHandoffInput`](#configuredhandoffinput) |

###### Returns

`Promise`\<[`ProviderJsonObject`](#providerjsonobject)\>

##### readiness()?

```ts
optional readiness(): Promise<ProviderJsonObject>;
```

###### Returns

`Promise`\<[`ProviderJsonObject`](#providerjsonobject)\>

##### request()

```ts
request(input): Promise<ProviderJsonObject>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`ProviderExtensionRequestInput`](#providerextensionrequestinput) |

###### Returns

`Promise`\<[`ProviderJsonObject`](#providerjsonobject)\>

##### scheduleCallback()

```ts
scheduleCallback(input?): Promise<ProviderJsonObject>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input?` | [`GenesysEngageOperationInput`](#genesysengageoperationinput) |

###### Returns

`Promise`\<[`ProviderJsonObject`](#providerjsonobject)\>

##### sendChatMessage()

```ts
sendChatMessage(input?): Promise<ProviderJsonObject>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input?` | [`GenesysEngageOperationInput`](#genesysengageoperationinput) |

###### Returns

`Promise`\<[`ProviderJsonObject`](#providerjsonobject)\>

##### startContact()

```ts
startContact(input?): Promise<ProviderJsonObject>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input?` | [`GenesysEngageOperationInput`](#genesysengageoperationinput) |

###### Returns

`Promise`\<[`ProviderJsonObject`](#providerjsonobject)\>

***

### ProviderExtensionRequestInput

#### Extends

- [`GenesysEngageOperationInput`](#genesysengageoperationinput)

#### Properties

##### allowMutation?

```ts
optional allowMutation?: boolean;
```

##### body?

```ts
optional body?: unknown;
```

###### Inherited from

[`GenesysEngageOperationInput`](#genesysengageoperationinput).[`body`](#body)

##### classification?

```ts
optional classification?: string;
```

##### headers?

```ts
optional headers?: Record<string, string>;
```

###### Inherited from

[`GenesysEngageOperationInput`](#genesysengageoperationinput).[`headers`](#headers)

##### idempotencyKey?

```ts
optional idempotencyKey?: string;
```

###### Inherited from

[`GenesysEngageOperationInput`](#genesysengageoperationinput).[`idempotencyKey`](#idempotencykey-1)

##### method?

```ts
optional method?: ProviderHttpMethod;
```

##### operationId?

```ts
optional operationId?: string;
```

##### path?

```ts
optional path?: string;
```

##### pathParams?

```ts
optional pathParams?: Record<string, string | number | boolean>;
```

###### Inherited from

[`GenesysEngageOperationInput`](#genesysengageoperationinput).[`pathParams`](#pathparams)

##### query?

```ts
optional query?: Record<string, ProviderQueryValue>;
```

###### Inherited from

[`GenesysEngageOperationInput`](#genesysengageoperationinput).[`query`](#query-1)

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

### GenesysEngageCallbacksApi

```ts
type GenesysEngageCallbacksApi = InstanceType<GenesysEngageEngagementSdk["CallbacksApi"]>;
```

***

### GenesysEngageEngagementApiClient

```ts
type GenesysEngageEngagementApiClient = InstanceType<GenesysEngageEngagementSdk["ApiClient"]>;
```

***

### GenesysEngageEngagementSdk

```ts
type GenesysEngageEngagementSdk = typeof EngagementClientSdk;
```

***

### ProviderJsonObject

```ts
type ProviderJsonObject = Record<string, unknown>;
```

## Functions

### createGenesysEngageClient()

```ts
function createGenesysEngageClient(options?): GenesysEngageClient;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options?` | [`GenesysEngageClientOptions`](#genesysengageclientoptions) |

#### Returns

[`GenesysEngageClient`](#genesysengageclient)

***

### createGenesysEngageEngagementSdkClient()

```ts
function createGenesysEngageEngagementSdkClient(options?): GenesysEngageEngagementSdkClient;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options?` | `Pick`\<[`GenesysEngageClientOptions`](#genesysengageclientoptions), `"apiBaseUrl"` \| `"baseUrl"` \| `"engagementBaseUrl"` \| `"engagementSdk"`\> |

#### Returns

[`GenesysEngageEngagementSdkClient`](#genesysengageengagementsdkclient)

***

### createGenesysEngageIntegration()

```ts
function createGenesysEngageIntegration(options?): DefinedIntegration<{
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
     capability: "schedule";
     exposesSensitiveData: true;
     providerObjects: readonly [{
        kind: "callback";
        label: "callback";
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
     capability: "read-provider-object";
     exposesSensitiveData: true;
     providerObjects: readonly [{
        kind: "contact";
        label: "contact";
     }];
     requiresCredential: true;
     sideEffect: false;
  }];
  category: "contact-center";
  channelAudiences: readonly ["customer-facing", "internal-support", "mixed"];
  coverage: {
     evidence: readonly [{
        label: "Genesys GMS Callback Services API";
        url: "https://docs.genesys.com/Documentation/GMS/latest/API/CallbackServicesAPI";
      }, {
        label: "Genesys GMS Chat API v2";
        url: "https://docs.genesys.com/Documentation/GMS/latest/API/ChatAPIv2";
      }, {
        label: "PureEngage engagement-client-js";
        url: "https://www.npmjs.com/package/engagement-client-js";
      }, {
        label: "Genesys Cloud Platform SDK for JavaScript";
        url: "https://github.com/MyPureCloud/platform-client-sdk-javascript";
      }, {
        label: "PureEngage Engagement Client Library";
        url: "https://developer.genesyscloud.com/client-libraries/engagement/js/index.html";
     }];
     notes: readonly ["Runtime callback scheduling uses the official PureEngage engagement-client-js generated SDK through CallbacksApi.bookCallbackExternal.", "No matching maintained backend/runtime SDK was verified for GMS Chat API v2, so chat operations use the reviewed REST adapter.", "GenesysEngageProviderClient remains available as a typed host override for tenant-specific surfaces and handoff routing."];
     scope: "support-workflow-subset";
  };
  credentialRequirements: readonly [{
     id: "genesys-engage-gms-base-url";
     label: "Genesys Mobile Services base URL";
     required: true;
   }, {
     id: "genesys-engage-auth";
     label: "Genesys Engage/GMS authentication";
     required: false;
   }, {
     id: "genesys-engage-routing";
     label: "Genesys Engage callback, chat, and routing configuration";
     required: false;
  }];
  directions: readonly ["inbound-only", "outbound-only", "bidirectional"];
  id: "contact-center.genesys-engage";
  maintainers: readonly [{
     name: "Cognidesk";
     type: "official";
  }];
  metadata: {
     implementation: {
        adapterKind: "official-engagement-sdk-plus-gms-rest-adapter";
        allowedOperations: readonly [{
           alias: "contact-center.handoff.request";
           checksum: "not-applicable-host-configured";
           id: "configuredHandoff";
           method: "POST";
           path: "host-configured";
           source: "provider-rest-adapter";
         }, {
           alias: "contact-center.callback.schedule";
           checksum: "provider-sdk-generated-swagger-client";
           id: "createCallback";
           method: "POST";
           path: "/callback/create";
           sdkMethod: "CallbacksApi.bookCallbackExternal";
           sdkPackage: "engagement-client-js";
           source: "engagement-client-js CallbacksApi.bookCallbackExternal";
         }, {
           alias: "contact-center.contact.start";
           checksum: "not-available-html-doc";
           id: "requestChat";
           method: "POST";
           path: "/genesys/2/chat/{serviceName}";
           source: "https://docs.genesys.com/Documentation/GMS/latest/API/ChatAPIv2";
         }, {
           alias: "genesys-engage.chat.send";
           checksum: "not-available-html-doc";
           id: "sendChatMessage";
           method: "POST";
           path: "/genesys/2/chat/{serviceName}/{chatId}/send";
           source: "https://docs.genesys.com/Documentation/GMS/latest/API/ChatAPIv2";
         }, {
           alias: "genesys-engage.gms.request";
           checksum: "not-applicable-host-configured";
           id: "providerExtensionRequest";
           method: "GET";
           path: "host-configured";
           source: "provider-rest-adapter";
        }];
        implementationStrategy: "official-sdk-and-provider-rest-adapter";
        providerSdkDecision: {
           checkedAt: "2026-06-25";
           checkedPackages: readonly [{
              checkedVersion: "9.0.83";
              license: "MIT";
              package: "engagement-client-js";
              reason: "Official PureEngage Engagement client exposes CallbacksApi.bookCallbackExternal, which backs Cognidesk contact-center.callback.schedule. It does not expose GMS Chat API v2, so chat operations stay on the reviewed REST adapter.";
              result: "accepted-callback-runtime-sdk";
            }, {
              checkedVersion: "9.0.95";
              license: "MIT";
              package: "genesys-workspace-client-js";
              reason: "Workspace Web Edition client targets workspace voice/call controls rather than GMS Chat API v2 and GMS callback endpoints.";
              result: "workspace-web-edition-api-not-gms-runtime-client";
            }, {
              checkedVersion: "255.1.0";
              license: "MIT";
              package: "purecloud-platform-client-v2";
              reason: "Maintained SDK targets Genesys Cloud Platform APIs, not Genesys Engage GMS Chat/Callback endpoints.";
              result: "genesys-cloud-sdk-not-genesys-engage-gms";
           }];
           defaultRestPolicy: "official-engagement-client-sdk-for-callbacks-with-fail-closed-gms-chat-rest-adapter-and-typed-provider-client-override";
           result: "official-engagement-sdk-for-callbacks-gms-chat-rest-adapter";
           typedClientOverride: "GenesysEngageProviderClient";
        };
        sdkDecision: "engagement-client-js is used for callback scheduling through CallbacksApi.bookCallbackExternal. GMS Chat API v2 has no matching maintained backend/runtime SDK in the checked packages, so chat operations use the built-in reviewed REST adapter with providerClient override.";
        verifiedAt: "2026-06-25";
     };
     manifestOnlySafe: true;
     providerRestAdapter: {
        adapterKind: "official-engagement-sdk-plus-gms-rest-adapter";
        providerClientOverride: "GenesysEngageProviderClient";
        strategy: "official-sdk-and-provider-rest-adapter";
     };
     providerSdkDecision: {
        checkedAt: "2026-06-25";
        checkedPackages: readonly [{
           checkedVersion: "9.0.83";
           license: "MIT";
           package: "engagement-client-js";
           reason: "Official PureEngage Engagement client exposes CallbacksApi.bookCallbackExternal, which backs Cognidesk contact-center.callback.schedule. It does not expose GMS Chat API v2, so chat operations stay on the reviewed REST adapter.";
           result: "accepted-callback-runtime-sdk";
         }, {
           checkedVersion: "9.0.95";
           license: "MIT";
           package: "genesys-workspace-client-js";
           reason: "Workspace Web Edition client targets workspace voice/call controls rather than GMS Chat API v2 and GMS callback endpoints.";
           result: "workspace-web-edition-api-not-gms-runtime-client";
         }, {
           checkedVersion: "255.1.0";
           license: "MIT";
           package: "purecloud-platform-client-v2";
           reason: "Maintained SDK targets Genesys Cloud Platform APIs, not Genesys Engage GMS Chat/Callback endpoints.";
           result: "genesys-cloud-sdk-not-genesys-engage-gms";
        }];
        defaultRestPolicy: "official-engagement-client-sdk-for-callbacks-with-fail-closed-gms-chat-rest-adapter-and-typed-provider-client-override";
        result: "official-engagement-sdk-for-callbacks-gms-chat-rest-adapter";
        typedClientOverride: "GenesysEngageProviderClient";
     };
  };
  name: "Genesys Engage / GMS";
  operations: readonly [{
     alias: "contact-center.handoff.request";
     capability: "handoff";
     providerObject: "contactTransfer";
   }, {
     alias: "contact-center.callback.schedule";
     capability: "schedule";
     providerObject: "callback";
   }, {
     alias: "contact-center.contact.start";
     capability: "send";
     providerObject: "contact";
   }, {
     alias: "genesys-engage.chat.send";
     capability: "send";
     extension: true;
     providerObject: "contact";
   }, {
     alias: "genesys-engage.gms.request";
     capability: "read-provider-object";
     extension: true;
     providerObject: "contact";
  }];
  packageName: "@cognidesk/integration-contact-center-genesys-engage";
  provider: "genesys-engage";
  trustLevel: "official";
}, unknown, {
  contact-center.callback.schedule: (input) => Promise<ProviderJsonObject>;
  contact-center.contact.start: (input) => Promise<ProviderJsonObject>;
  contact-center.handoff.request: (input) => Promise<ProviderJsonObject>;
  genesys-engage.chat.send: (input) => Promise<ProviderJsonObject>;
  genesys-engage.gms.request: (input) => Promise<ProviderJsonObject>;
}>;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options?` | [`GenesysEngageIntegrationOptions`](#genesysengageintegrationoptions) |

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
     `capability`: `"schedule"`;
     `exposesSensitiveData`: `true`;
     `providerObjects`: readonly \[\{
        `kind`: `"callback"`;
        `label`: `"callback"`;
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
     `capability`: `"read-provider-object"`;
     `exposesSensitiveData`: `true`;
     `providerObjects`: readonly \[\{
        `kind`: `"contact"`;
        `label`: `"contact"`;
     \}\];
     `requiresCredential`: `true`;
     `sideEffect`: `false`;
  \}\];
  `category`: `"contact-center"`;
  `channelAudiences`: readonly \[`"customer-facing"`, `"internal-support"`, `"mixed"`\];
  `coverage`: \{
     `evidence`: readonly \[\{
        `label`: `"Genesys GMS Callback Services API"`;
        `url`: `"https://docs.genesys.com/Documentation/GMS/latest/API/CallbackServicesAPI"`;
      \}, \{
        `label`: `"Genesys GMS Chat API v2"`;
        `url`: `"https://docs.genesys.com/Documentation/GMS/latest/API/ChatAPIv2"`;
      \}, \{
        `label`: `"PureEngage engagement-client-js"`;
        `url`: `"https://www.npmjs.com/package/engagement-client-js"`;
      \}, \{
        `label`: `"Genesys Cloud Platform SDK for JavaScript"`;
        `url`: `"https://github.com/MyPureCloud/platform-client-sdk-javascript"`;
      \}, \{
        `label`: `"PureEngage Engagement Client Library"`;
        `url`: `"https://developer.genesyscloud.com/client-libraries/engagement/js/index.html"`;
     \}\];
     `notes`: readonly \[`"Runtime callback scheduling uses the official PureEngage engagement-client-js generated SDK through CallbacksApi.bookCallbackExternal."`, `"No matching maintained backend/runtime SDK was verified for GMS Chat API v2, so chat operations use the reviewed REST adapter."`, `"GenesysEngageProviderClient remains available as a typed host override for tenant-specific surfaces and handoff routing."`\];
     `scope`: `"support-workflow-subset"`;
  \};
  `credentialRequirements`: readonly \[\{
     `id`: `"genesys-engage-gms-base-url"`;
     `label`: `"Genesys Mobile Services base URL"`;
     `required`: `true`;
   \}, \{
     `id`: `"genesys-engage-auth"`;
     `label`: `"Genesys Engage/GMS authentication"`;
     `required`: `false`;
   \}, \{
     `id`: `"genesys-engage-routing"`;
     `label`: `"Genesys Engage callback, chat, and routing configuration"`;
     `required`: `false`;
  \}\];
  `directions`: readonly \[`"inbound-only"`, `"outbound-only"`, `"bidirectional"`\];
  `id`: `"contact-center.genesys-engage"`;
  `maintainers`: readonly \[\{
     `name`: `"Cognidesk"`;
     `type`: `"official"`;
  \}\];
  `metadata`: \{
     `implementation`: \{
        `adapterKind`: `"official-engagement-sdk-plus-gms-rest-adapter"`;
        `allowedOperations`: readonly \[\{
           `alias`: `"contact-center.handoff.request"`;
           `checksum`: `"not-applicable-host-configured"`;
           `id`: `"configuredHandoff"`;
           `method`: `"POST"`;
           `path`: `"host-configured"`;
           `source`: `"provider-rest-adapter"`;
         \}, \{
           `alias`: `"contact-center.callback.schedule"`;
           `checksum`: `"provider-sdk-generated-swagger-client"`;
           `id`: `"createCallback"`;
           `method`: `"POST"`;
           `path`: `"/callback/create"`;
           `sdkMethod`: `"CallbacksApi.bookCallbackExternal"`;
           `sdkPackage`: `"engagement-client-js"`;
           `source`: `"engagement-client-js CallbacksApi.bookCallbackExternal"`;
         \}, \{
           `alias`: `"contact-center.contact.start"`;
           `checksum`: `"not-available-html-doc"`;
           `id`: `"requestChat"`;
           `method`: `"POST"`;
           `path`: `"/genesys/2/chat/{serviceName}"`;
           `source`: `"https://docs.genesys.com/Documentation/GMS/latest/API/ChatAPIv2"`;
         \}, \{
           `alias`: `"genesys-engage.chat.send"`;
           `checksum`: `"not-available-html-doc"`;
           `id`: `"sendChatMessage"`;
           `method`: `"POST"`;
           `path`: `"/genesys/2/chat/{serviceName}/{chatId}/send"`;
           `source`: `"https://docs.genesys.com/Documentation/GMS/latest/API/ChatAPIv2"`;
         \}, \{
           `alias`: `"genesys-engage.gms.request"`;
           `checksum`: `"not-applicable-host-configured"`;
           `id`: `"providerExtensionRequest"`;
           `method`: `"GET"`;
           `path`: `"host-configured"`;
           `source`: `"provider-rest-adapter"`;
        \}\];
        `implementationStrategy`: `"official-sdk-and-provider-rest-adapter"`;
        `providerSdkDecision`: \{
           `checkedAt`: `"2026-06-25"`;
           `checkedPackages`: readonly \[\{
              `checkedVersion`: `"9.0.83"`;
              `license`: `"MIT"`;
              `package`: `"engagement-client-js"`;
              `reason`: `"Official PureEngage Engagement client exposes CallbacksApi.bookCallbackExternal, which backs Cognidesk contact-center.callback.schedule. It does not expose GMS Chat API v2, so chat operations stay on the reviewed REST adapter."`;
              `result`: `"accepted-callback-runtime-sdk"`;
            \}, \{
              `checkedVersion`: `"9.0.95"`;
              `license`: `"MIT"`;
              `package`: `"genesys-workspace-client-js"`;
              `reason`: `"Workspace Web Edition client targets workspace voice/call controls rather than GMS Chat API v2 and GMS callback endpoints."`;
              `result`: `"workspace-web-edition-api-not-gms-runtime-client"`;
            \}, \{
              `checkedVersion`: `"255.1.0"`;
              `license`: `"MIT"`;
              `package`: `"purecloud-platform-client-v2"`;
              `reason`: `"Maintained SDK targets Genesys Cloud Platform APIs, not Genesys Engage GMS Chat/Callback endpoints."`;
              `result`: `"genesys-cloud-sdk-not-genesys-engage-gms"`;
           \}\];
           `defaultRestPolicy`: `"official-engagement-client-sdk-for-callbacks-with-fail-closed-gms-chat-rest-adapter-and-typed-provider-client-override"`;
           `result`: `"official-engagement-sdk-for-callbacks-gms-chat-rest-adapter"`;
           `typedClientOverride`: `"GenesysEngageProviderClient"`;
        \};
        `sdkDecision`: `"engagement-client-js is used for callback scheduling through CallbacksApi.bookCallbackExternal. GMS Chat API v2 has no matching maintained backend/runtime SDK in the checked packages, so chat operations use the built-in reviewed REST adapter with providerClient override."`;
        `verifiedAt`: `"2026-06-25"`;
     \};
     `manifestOnlySafe`: `true`;
     `providerRestAdapter`: \{
        `adapterKind`: `"official-engagement-sdk-plus-gms-rest-adapter"`;
        `providerClientOverride`: `"GenesysEngageProviderClient"`;
        `strategy`: `"official-sdk-and-provider-rest-adapter"`;
     \};
     `providerSdkDecision`: \{
        `checkedAt`: `"2026-06-25"`;
        `checkedPackages`: readonly \[\{
           `checkedVersion`: `"9.0.83"`;
           `license`: `"MIT"`;
           `package`: `"engagement-client-js"`;
           `reason`: `"Official PureEngage Engagement client exposes CallbacksApi.bookCallbackExternal, which backs Cognidesk contact-center.callback.schedule. It does not expose GMS Chat API v2, so chat operations stay on the reviewed REST adapter."`;
           `result`: `"accepted-callback-runtime-sdk"`;
         \}, \{
           `checkedVersion`: `"9.0.95"`;
           `license`: `"MIT"`;
           `package`: `"genesys-workspace-client-js"`;
           `reason`: `"Workspace Web Edition client targets workspace voice/call controls rather than GMS Chat API v2 and GMS callback endpoints."`;
           `result`: `"workspace-web-edition-api-not-gms-runtime-client"`;
         \}, \{
           `checkedVersion`: `"255.1.0"`;
           `license`: `"MIT"`;
           `package`: `"purecloud-platform-client-v2"`;
           `reason`: `"Maintained SDK targets Genesys Cloud Platform APIs, not Genesys Engage GMS Chat/Callback endpoints."`;
           `result`: `"genesys-cloud-sdk-not-genesys-engage-gms"`;
        \}\];
        `defaultRestPolicy`: `"official-engagement-client-sdk-for-callbacks-with-fail-closed-gms-chat-rest-adapter-and-typed-provider-client-override"`;
        `result`: `"official-engagement-sdk-for-callbacks-gms-chat-rest-adapter"`;
        `typedClientOverride`: `"GenesysEngageProviderClient"`;
     \};
  \};
  `name`: `"Genesys Engage / GMS"`;
  `operations`: readonly \[\{
     `alias`: `"contact-center.handoff.request"`;
     `capability`: `"handoff"`;
     `providerObject`: `"contactTransfer"`;
   \}, \{
     `alias`: `"contact-center.callback.schedule"`;
     `capability`: `"schedule"`;
     `providerObject`: `"callback"`;
   \}, \{
     `alias`: `"contact-center.contact.start"`;
     `capability`: `"send"`;
     `providerObject`: `"contact"`;
   \}, \{
     `alias`: `"genesys-engage.chat.send"`;
     `capability`: `"send"`;
     `extension`: `true`;
     `providerObject`: `"contact"`;
   \}, \{
     `alias`: `"genesys-engage.gms.request"`;
     `capability`: `"read-provider-object"`;
     `extension`: `true`;
     `providerObject`: `"contact"`;
  \}\];
  `packageName`: `"@cognidesk/integration-contact-center-genesys-engage"`;
  `provider`: `"genesys-engage"`;
  `trustLevel`: `"official"`;
\}, `unknown`, \{
  `contact-center.callback.schedule`: (`input`) => `Promise`\<[`ProviderJsonObject`](#providerjsonobject)\>;
  `contact-center.contact.start`: (`input`) => `Promise`\<[`ProviderJsonObject`](#providerjsonobject)\>;
  `contact-center.handoff.request`: (`input`) => `Promise`\<[`ProviderJsonObject`](#providerjsonobject)\>;
  `genesys-engage.chat.send`: (`input`) => `Promise`\<[`ProviderJsonObject`](#providerjsonobject)\>;
  `genesys-engage.gms.request`: (`input`) => `Promise`\<[`ProviderJsonObject`](#providerjsonobject)\>;
\}\>

***

### createGenesysEngageIntegrationOperationHandlers()

```ts
function createGenesysEngageIntegrationOperationHandlers(options?): {
  contact-center.callback.schedule: (input) => Promise<ProviderJsonObject>;
  contact-center.contact.start: (input) => Promise<ProviderJsonObject>;
  contact-center.handoff.request: (input) => Promise<ProviderJsonObject>;
  genesys-engage.chat.send: (input) => Promise<ProviderJsonObject>;
  genesys-engage.gms.request: (input) => Promise<ProviderJsonObject>;
};
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options?` | [`GenesysEngageIntegrationOptions`](#genesysengageintegrationoptions) |

#### Returns

```ts
{
  contact-center.callback.schedule: (input) => Promise<ProviderJsonObject>;
  contact-center.contact.start: (input) => Promise<ProviderJsonObject>;
  contact-center.handoff.request: (input) => Promise<ProviderJsonObject>;
  genesys-engage.chat.send: (input) => Promise<ProviderJsonObject>;
  genesys-engage.gms.request: (input) => Promise<ProviderJsonObject>;
}
```

| Name | Type |
| ------ | ------ |
| `contact-center.callback.schedule()` | (`input`) => `Promise`\<[`ProviderJsonObject`](#providerjsonobject)\> |
| `contact-center.contact.start()` | (`input`) => `Promise`\<[`ProviderJsonObject`](#providerjsonobject)\> |
| `contact-center.handoff.request()` | (`input`) => `Promise`\<[`ProviderJsonObject`](#providerjsonobject)\> |
| `genesys-engage.chat.send()` | (`input`) => `Promise`\<[`ProviderJsonObject`](#providerjsonobject)\> |
| `genesys-engage.gms.request()` | (`input`) => `Promise`\<[`ProviderJsonObject`](#providerjsonobject)\> |

## References

### genesysEngageProviderManifest

Re-exports [genesysEngageProviderManifest](dist/manifest.md#genesysengageprovidermanifest)

***

### genesysEngageProviderManifestInput

Re-exports [genesysEngageProviderManifestInput](dist/manifest.md#genesysengageprovidermanifestinput)

***

### genesysEngageRestSupportSlice

Re-exports [genesysEngageRestSupportSlice](dist/manifest.md#genesysengagerestsupportslice)

***

### genesysEngageSupportSlice

Re-exports [genesysEngageSupportSlice](dist/manifest.md#genesysengagesupportslice)
