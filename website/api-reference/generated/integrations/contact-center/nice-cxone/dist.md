# integrations/contact-center/nice-cxone/dist

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

### NiceCxoneClient

#### Properties

##### providerClient

```ts
providerClient: NiceCxoneProviderClient;
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
endContact(input?): Promise<ProviderJsonObject>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input?` | [`NiceCxoneOperationInput`](#nicecxoneoperationinput) |

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
| `input?` | [`NiceCxoneOperationInput`](#nicecxoneoperationinput) |

###### Returns

`Promise`\<[`ProviderJsonObject`](#providerjsonobject)\>

##### startContact()

```ts
startContact(input?): Promise<ProviderJsonObject>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input?` | [`NiceCxoneOperationInput`](#nicecxoneoperationinput) |

###### Returns

`Promise`\<[`ProviderJsonObject`](#providerjsonobject)\>

***

### NiceCxoneClientOptions

#### Extended by

- [`NiceCxoneIntegrationOptions`](#nicecxoneintegrationoptions)

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

##### providerClient?

```ts
optional providerClient?: NiceCxoneProviderClient;
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

### NiceCxoneIntegrationOptions

#### Extends

- [`NiceCxoneClientOptions`](#nicecxoneclientoptions)

#### Properties

##### accessToken?

```ts
optional accessToken?: string;
```

###### Inherited from

[`NiceCxoneClientOptions`](#nicecxoneclientoptions).[`accessToken`](#accesstoken)

##### apiBaseUrl?

```ts
optional apiBaseUrl?: string;
```

###### Inherited from

[`NiceCxoneClientOptions`](#nicecxoneclientoptions).[`apiBaseUrl`](#apibaseurl)

##### apiKey?

```ts
optional apiKey?: string;
```

###### Inherited from

[`NiceCxoneClientOptions`](#nicecxoneclientoptions).[`apiKey`](#apikey)

##### apiKeyHeaderName?

```ts
optional apiKeyHeaderName?: string;
```

###### Inherited from

[`NiceCxoneClientOptions`](#nicecxoneclientoptions).[`apiKeyHeaderName`](#apikeyheadername)

##### authorizationHeader?

```ts
optional authorizationHeader?: string;
```

###### Inherited from

[`NiceCxoneClientOptions`](#nicecxoneclientoptions).[`authorizationHeader`](#authorizationheader)

##### baseUrl?

```ts
optional baseUrl?: string;
```

###### Inherited from

[`NiceCxoneClientOptions`](#nicecxoneclientoptions).[`baseUrl`](#baseurl)

##### defaultHandoffPath?

```ts
optional defaultHandoffPath?: string;
```

###### Inherited from

[`NiceCxoneClientOptions`](#nicecxoneclientoptions).[`defaultHandoffPath`](#defaulthandoffpath)

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

[`NiceCxoneClientOptions`](#nicecxoneclientoptions).[`fetch`](#fetch)

##### niceCxoneClient?

```ts
optional niceCxoneClient?: NiceCxoneClient;
```

##### providerClient?

```ts
optional providerClient?: NiceCxoneProviderClient;
```

###### Inherited from

[`NiceCxoneClientOptions`](#nicecxoneclientoptions).[`providerClient`](#providerclient-1)

##### readinessPath?

```ts
optional readinessPath?: string;
```

###### Inherited from

[`NiceCxoneClientOptions`](#nicecxoneclientoptions).[`readinessPath`](#readinesspath)

##### retry?

```ts
optional retry?: number | ProviderRestRetryOptions;
```

###### Inherited from

[`NiceCxoneClientOptions`](#nicecxoneclientoptions).[`retry`](#retry)

##### signal?

```ts
optional signal?: AbortSignal;
```

###### Inherited from

[`NiceCxoneClientOptions`](#nicecxoneclientoptions).[`signal`](#signal)

##### timeoutMs?

```ts
optional timeoutMs?: number;
```

###### Inherited from

[`NiceCxoneClientOptions`](#nicecxoneclientoptions).[`timeoutMs`](#timeoutms)

***

### NiceCxoneOperationInput

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

### NiceCxoneProviderClient

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

##### endContact()

```ts
endContact(input?): Promise<ProviderJsonObject>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input?` | [`NiceCxoneOperationInput`](#nicecxoneoperationinput) |

###### Returns

`Promise`\<[`ProviderJsonObject`](#providerjsonobject)\>

##### readiness()?

```ts
optional readiness(input?): Promise<ProviderJsonObject>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input?` | [`NiceCxoneReadinessInput`](#nicecxonereadinessinput) |

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
| `input?` | [`NiceCxoneOperationInput`](#nicecxoneoperationinput) |

###### Returns

`Promise`\<[`ProviderJsonObject`](#providerjsonobject)\>

##### startContact()

```ts
startContact(input?): Promise<ProviderJsonObject>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input?` | [`NiceCxoneOperationInput`](#nicecxoneoperationinput) |

###### Returns

`Promise`\<[`ProviderJsonObject`](#providerjsonobject)\>

***

### NiceCxoneReadinessInput

#### Properties

##### path?

```ts
optional path?: string;
```

***

### ProviderExtensionRequestInput

#### Extends

- [`NiceCxoneOperationInput`](#nicecxoneoperationinput)

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

[`NiceCxoneOperationInput`](#nicecxoneoperationinput).[`body`](#body)

##### classification?

```ts
optional classification?: string;
```

##### headers?

```ts
optional headers?: Record<string, string>;
```

###### Inherited from

[`NiceCxoneOperationInput`](#nicecxoneoperationinput).[`headers`](#headers)

##### idempotencyKey?

```ts
optional idempotencyKey?: string;
```

###### Inherited from

[`NiceCxoneOperationInput`](#nicecxoneoperationinput).[`idempotencyKey`](#idempotencykey-1)

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

[`NiceCxoneOperationInput`](#nicecxoneoperationinput).[`pathParams`](#pathparams)

##### query?

```ts
optional query?: Record<string, ProviderQueryValue>;
```

###### Inherited from

[`NiceCxoneOperationInput`](#nicecxoneoperationinput).[`query`](#query-1)

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

### NiceCxoneProviderMethod

```ts
type NiceCxoneProviderMethod = ProviderHttpMethod;
```

***

### NiceCxoneQueryValue

```ts
type NiceCxoneQueryValue = ProviderQueryValue;
```

***

### ProviderJsonObject

```ts
type ProviderJsonObject = Record<string, unknown>;
```

## Functions

### createNiceCxoneClient()

```ts
function createNiceCxoneClient(options?): NiceCxoneClient;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options?` | [`NiceCxoneClientOptions`](#nicecxoneclientoptions) |

#### Returns

[`NiceCxoneClient`](#nicecxoneclient)

***

### createNiceCxoneIntegration()

```ts
function createNiceCxoneIntegration(options?): DefinedIntegration<{
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
     capability: "update-provider-object";
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
        label: "NICE CXone REST APIs";
        url: "https://developer.niceincontact.com/API";
      }, {
        label: "NICE CXone ACD SDK package";
        url: "https://www.npmjs.com/package/@nice-devone/acd-sdk";
      }, {
        label: "NICE CXone Agent SDK repository";
        url: "https://github.com/nice-devone/nice-cxone-agent-sdk";
     }];
     notes: readonly ["Maintained NICE @nice-devone SDK packages exist, but the closest ACD runtime package is UNLICENSED and documented for CXone Agent/app-bundler use.", "Runtime calls use a fail-closed built-in REST adapter when baseUrl/API credentials are supplied, with NiceCxoneProviderClient available as a typed host override."];
     scope: "support-workflow-subset";
  };
  credentialRequirements: readonly [{
     id: "nice-cxone-api-base";
     label: "NICE CXone API base URL";
     required: true;
   }, {
     id: "nice-cxone-api-access";
     label: "NICE CXone API access";
     required: true;
   }, {
     id: "nice-cxone-routing";
     label: "NICE CXone skill/queue routing configuration";
     required: false;
  }];
  directions: readonly ["inbound-only", "outbound-only", "bidirectional"];
  id: "contact-center.nice-cxone";
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
           alias: "contact-center.callback.schedule";
           checksum: "sha256:076fb5602cd1e76f13d38bb2172547e9d2f91877447c3088ff14e849bac2099a-local-generated-operation-catalog";
           id: "scheduleACallback";
           method: "POST";
           path: "/promise";
           source: "https://developer.niceincontact.com/content/apis/patron/patron-callback-api-docs";
         }, {
           alias: "contact-center.contact.start";
           checksum: "sha256:076fb5602cd1e76f13d38bb2172547e9d2f91877447c3088ff14e849bac2099a-local-generated-operation-catalog";
           id: "startChatSession";
           method: "POST";
           path: "/contacts/chats";
           source: "https://developer.niceincontact.com/content/apis/patron/patron-chatrequests-api-docs";
         }, {
           alias: "contact-center.contact.end";
           checksum: "sha256:076fb5602cd1e76f13d38bb2172547e9d2f91877447c3088ff14e849bac2099a-local-generated-operation-catalog";
           id: "endChat";
           method: "DELETE";
           path: "/contacts/chats/{chatSession}";
           source: "https://developer.niceincontact.com/content/apis/patron/patron-chatrequests-api-docs";
         }, {
           alias: "nice-cxone.request";
           checksum: "not-applicable-host-configured";
           id: "providerExtensionRequest";
           method: "GET";
           path: "host-configured";
           source: "provider-rest-adapter";
        }];
        implementationStrategy: "provider-rest-adapter";
        providerSdkDecision: {
           checkedAt: "2026-06-25";
           checkedPackages: readonly [{
              checkedVersion: "26.2.1";
              license: "UNLICENSED";
              package: "@nice-devone/acd-sdk";
              reason: "Closest ACD package is unlicensed and documented for CXone Agent/app-bundler use rather than a redistributable server-side REST client.";
              result: "official-sdk-not-redistributable-server-rest-client";
            }, {
              checkedVersion: "26.2.1";
              license: "UNLICENSED";
              package: "@nice-devone/agent-sdk";
              reason: "Agent SDK is unlicensed and coupled to CXone Agent/browser app runtime.";
              result: "agent-app-sdk-not-server-rest-client";
            }, {
              checkedVersion: "3.3.0";
              license: "UNLICENSED";
              package: "@nice-devone/nice-cxone-chat-web-sdk";
              reason: "Web SDK targets browser DFO chat rather than package-owned Contact Center server operations.";
              result: "browser-dfo-chat-sdk-not-contact-center-server-client";
           }];
           defaultRestPolicy: "fail-closed-provider-rest-adapter-with-typed-provider-client-override";
           result: "no-redistributable-server-side-cxone-sdk";
           typedClientOverride: "NiceCxoneProviderClient";
        };
        sdkDecision: "Maintained NICE @nice-devone SDK packages exist, but the closest ACD runtime package is UNLICENSED and designed for CXone Agent/app-bundler use rather than a redistributable server-side REST client; this package provides a fail-closed built-in REST adapter with providerClient override.";
        verifiedAt: "2026-06-25";
     };
     manifestOnlySafe: true;
     providerRestAdapter: {
        adapterKind: "no-official-sdk-rest-adapter";
        failureMode: "fail-closed";
        hostClientEscapeHatch: "NiceCxoneClient.providerClient";
        hostClientOverride: true;
        packageOwnedRestClient: true;
        providerClientOverride: "NiceCxoneProviderClient";
        reviewedOperationAllowlist: true;
        strategy: "provider-rest-adapter";
     };
     providerSdkDecision: {
        checkedAt: "2026-06-25";
        checkedPackages: readonly [{
           checkedVersion: "26.2.1";
           license: "UNLICENSED";
           package: "@nice-devone/acd-sdk";
           reason: "Closest ACD package is unlicensed and documented for CXone Agent/app-bundler use rather than a redistributable server-side REST client.";
           result: "official-sdk-not-redistributable-server-rest-client";
         }, {
           checkedVersion: "26.2.1";
           license: "UNLICENSED";
           package: "@nice-devone/agent-sdk";
           reason: "Agent SDK is unlicensed and coupled to CXone Agent/browser app runtime.";
           result: "agent-app-sdk-not-server-rest-client";
         }, {
           checkedVersion: "3.3.0";
           license: "UNLICENSED";
           package: "@nice-devone/nice-cxone-chat-web-sdk";
           reason: "Web SDK targets browser DFO chat rather than package-owned Contact Center server operations.";
           result: "browser-dfo-chat-sdk-not-contact-center-server-client";
        }];
        defaultRestPolicy: "fail-closed-provider-rest-adapter-with-typed-provider-client-override";
        result: "no-redistributable-server-side-cxone-sdk";
        typedClientOverride: "NiceCxoneProviderClient";
     };
     sdkDecision: {
        checkedAt: "2026-06-25";
        checkedVersion: "26.2.1";
        license: "UNLICENSED";
        package: "@nice-devone/acd-sdk";
        reason: "@nice-devone/acd-sdk is the closest NICE CXone ACD npm package, but it is published as UNLICENSED and documented for CXone Agent/app-bundler use with browser and agent SDK dependencies.";
        result: "official-sdk-not-redistributable-server-rest-client";
     };
  };
  name: "NICE CXone";
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
     alias: "contact-center.contact.end";
     capability: "update-provider-object";
     providerObject: "contact";
   }, {
     alias: "nice-cxone.request";
     capability: "read-provider-object";
     extension: true;
     providerObject: "contact";
  }];
  packageName: "@cognidesk/integration-contact-center-nice-cxone";
  provider: "nice-cxone";
  trustLevel: "official";
}, unknown, {
  contact-center.callback.schedule: (input) => Promise<ProviderJsonObject>;
  contact-center.contact.end: (input) => Promise<ProviderJsonObject>;
  contact-center.contact.start: (input) => Promise<ProviderJsonObject>;
  contact-center.handoff.request: (input) => Promise<ProviderJsonObject>;
  nice-cxone.request: (input) => Promise<ProviderJsonObject>;
}>;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options?` | [`NiceCxoneIntegrationOptions`](#nicecxoneintegrationoptions) |

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
     `capability`: `"update-provider-object"`;
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
        `label`: `"NICE CXone REST APIs"`;
        `url`: `"https://developer.niceincontact.com/API"`;
      \}, \{
        `label`: `"NICE CXone ACD SDK package"`;
        `url`: `"https://www.npmjs.com/package/@nice-devone/acd-sdk"`;
      \}, \{
        `label`: `"NICE CXone Agent SDK repository"`;
        `url`: `"https://github.com/nice-devone/nice-cxone-agent-sdk"`;
     \}\];
     `notes`: readonly \[`"Maintained NICE @nice-devone SDK packages exist, but the closest ACD runtime package is UNLICENSED and documented for CXone Agent/app-bundler use."`, `"Runtime calls use a fail-closed built-in REST adapter when baseUrl/API credentials are supplied, with NiceCxoneProviderClient available as a typed host override."`\];
     `scope`: `"support-workflow-subset"`;
  \};
  `credentialRequirements`: readonly \[\{
     `id`: `"nice-cxone-api-base"`;
     `label`: `"NICE CXone API base URL"`;
     `required`: `true`;
   \}, \{
     `id`: `"nice-cxone-api-access"`;
     `label`: `"NICE CXone API access"`;
     `required`: `true`;
   \}, \{
     `id`: `"nice-cxone-routing"`;
     `label`: `"NICE CXone skill/queue routing configuration"`;
     `required`: `false`;
  \}\];
  `directions`: readonly \[`"inbound-only"`, `"outbound-only"`, `"bidirectional"`\];
  `id`: `"contact-center.nice-cxone"`;
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
           `alias`: `"contact-center.callback.schedule"`;
           `checksum`: `"sha256:076fb5602cd1e76f13d38bb2172547e9d2f91877447c3088ff14e849bac2099a-local-generated-operation-catalog"`;
           `id`: `"scheduleACallback"`;
           `method`: `"POST"`;
           `path`: `"/promise"`;
           `source`: `"https://developer.niceincontact.com/content/apis/patron/patron-callback-api-docs"`;
         \}, \{
           `alias`: `"contact-center.contact.start"`;
           `checksum`: `"sha256:076fb5602cd1e76f13d38bb2172547e9d2f91877447c3088ff14e849bac2099a-local-generated-operation-catalog"`;
           `id`: `"startChatSession"`;
           `method`: `"POST"`;
           `path`: `"/contacts/chats"`;
           `source`: `"https://developer.niceincontact.com/content/apis/patron/patron-chatrequests-api-docs"`;
         \}, \{
           `alias`: `"contact-center.contact.end"`;
           `checksum`: `"sha256:076fb5602cd1e76f13d38bb2172547e9d2f91877447c3088ff14e849bac2099a-local-generated-operation-catalog"`;
           `id`: `"endChat"`;
           `method`: `"DELETE"`;
           `path`: `"/contacts/chats/{chatSession}"`;
           `source`: `"https://developer.niceincontact.com/content/apis/patron/patron-chatrequests-api-docs"`;
         \}, \{
           `alias`: `"nice-cxone.request"`;
           `checksum`: `"not-applicable-host-configured"`;
           `id`: `"providerExtensionRequest"`;
           `method`: `"GET"`;
           `path`: `"host-configured"`;
           `source`: `"provider-rest-adapter"`;
        \}\];
        `implementationStrategy`: `"provider-rest-adapter"`;
        `providerSdkDecision`: \{
           `checkedAt`: `"2026-06-25"`;
           `checkedPackages`: readonly \[\{
              `checkedVersion`: `"26.2.1"`;
              `license`: `"UNLICENSED"`;
              `package`: `"@nice-devone/acd-sdk"`;
              `reason`: `"Closest ACD package is unlicensed and documented for CXone Agent/app-bundler use rather than a redistributable server-side REST client."`;
              `result`: `"official-sdk-not-redistributable-server-rest-client"`;
            \}, \{
              `checkedVersion`: `"26.2.1"`;
              `license`: `"UNLICENSED"`;
              `package`: `"@nice-devone/agent-sdk"`;
              `reason`: `"Agent SDK is unlicensed and coupled to CXone Agent/browser app runtime."`;
              `result`: `"agent-app-sdk-not-server-rest-client"`;
            \}, \{
              `checkedVersion`: `"3.3.0"`;
              `license`: `"UNLICENSED"`;
              `package`: `"@nice-devone/nice-cxone-chat-web-sdk"`;
              `reason`: `"Web SDK targets browser DFO chat rather than package-owned Contact Center server operations."`;
              `result`: `"browser-dfo-chat-sdk-not-contact-center-server-client"`;
           \}\];
           `defaultRestPolicy`: `"fail-closed-provider-rest-adapter-with-typed-provider-client-override"`;
           `result`: `"no-redistributable-server-side-cxone-sdk"`;
           `typedClientOverride`: `"NiceCxoneProviderClient"`;
        \};
        `sdkDecision`: `"Maintained NICE @nice-devone SDK packages exist, but the closest ACD runtime package is UNLICENSED and designed for CXone Agent/app-bundler use rather than a redistributable server-side REST client; this package provides a fail-closed built-in REST adapter with providerClient override."`;
        `verifiedAt`: `"2026-06-25"`;
     \};
     `manifestOnlySafe`: `true`;
     `providerRestAdapter`: \{
        `adapterKind`: `"no-official-sdk-rest-adapter"`;
        `failureMode`: `"fail-closed"`;
        `hostClientEscapeHatch`: `"NiceCxoneClient.providerClient"`;
        `hostClientOverride`: `true`;
        `packageOwnedRestClient`: `true`;
        `providerClientOverride`: `"NiceCxoneProviderClient"`;
        `reviewedOperationAllowlist`: `true`;
        `strategy`: `"provider-rest-adapter"`;
     \};
     `providerSdkDecision`: \{
        `checkedAt`: `"2026-06-25"`;
        `checkedPackages`: readonly \[\{
           `checkedVersion`: `"26.2.1"`;
           `license`: `"UNLICENSED"`;
           `package`: `"@nice-devone/acd-sdk"`;
           `reason`: `"Closest ACD package is unlicensed and documented for CXone Agent/app-bundler use rather than a redistributable server-side REST client."`;
           `result`: `"official-sdk-not-redistributable-server-rest-client"`;
         \}, \{
           `checkedVersion`: `"26.2.1"`;
           `license`: `"UNLICENSED"`;
           `package`: `"@nice-devone/agent-sdk"`;
           `reason`: `"Agent SDK is unlicensed and coupled to CXone Agent/browser app runtime."`;
           `result`: `"agent-app-sdk-not-server-rest-client"`;
         \}, \{
           `checkedVersion`: `"3.3.0"`;
           `license`: `"UNLICENSED"`;
           `package`: `"@nice-devone/nice-cxone-chat-web-sdk"`;
           `reason`: `"Web SDK targets browser DFO chat rather than package-owned Contact Center server operations."`;
           `result`: `"browser-dfo-chat-sdk-not-contact-center-server-client"`;
        \}\];
        `defaultRestPolicy`: `"fail-closed-provider-rest-adapter-with-typed-provider-client-override"`;
        `result`: `"no-redistributable-server-side-cxone-sdk"`;
        `typedClientOverride`: `"NiceCxoneProviderClient"`;
     \};
     `sdkDecision`: \{
        `checkedAt`: `"2026-06-25"`;
        `checkedVersion`: `"26.2.1"`;
        `license`: `"UNLICENSED"`;
        `package`: `"@nice-devone/acd-sdk"`;
        `reason`: `"@nice-devone/acd-sdk is the closest NICE CXone ACD npm package, but it is published as UNLICENSED and documented for CXone Agent/app-bundler use with browser and agent SDK dependencies."`;
        `result`: `"official-sdk-not-redistributable-server-rest-client"`;
     \};
  \};
  `name`: `"NICE CXone"`;
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
     `alias`: `"contact-center.contact.end"`;
     `capability`: `"update-provider-object"`;
     `providerObject`: `"contact"`;
   \}, \{
     `alias`: `"nice-cxone.request"`;
     `capability`: `"read-provider-object"`;
     `extension`: `true`;
     `providerObject`: `"contact"`;
  \}\];
  `packageName`: `"@cognidesk/integration-contact-center-nice-cxone"`;
  `provider`: `"nice-cxone"`;
  `trustLevel`: `"official"`;
\}, `unknown`, \{
  `contact-center.callback.schedule`: (`input`) => `Promise`\<[`ProviderJsonObject`](#providerjsonobject)\>;
  `contact-center.contact.end`: (`input`) => `Promise`\<[`ProviderJsonObject`](#providerjsonobject)\>;
  `contact-center.contact.start`: (`input`) => `Promise`\<[`ProviderJsonObject`](#providerjsonobject)\>;
  `contact-center.handoff.request`: (`input`) => `Promise`\<[`ProviderJsonObject`](#providerjsonobject)\>;
  `nice-cxone.request`: (`input`) => `Promise`\<[`ProviderJsonObject`](#providerjsonobject)\>;
\}\>

***

### createNiceCxoneIntegrationOperationHandlers()

```ts
function createNiceCxoneIntegrationOperationHandlers(options?): {
  contact-center.callback.schedule: (input) => Promise<ProviderJsonObject>;
  contact-center.contact.end: (input) => Promise<ProviderJsonObject>;
  contact-center.contact.start: (input) => Promise<ProviderJsonObject>;
  contact-center.handoff.request: (input) => Promise<ProviderJsonObject>;
  nice-cxone.request: (input) => Promise<ProviderJsonObject>;
};
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options?` | [`NiceCxoneIntegrationOptions`](#nicecxoneintegrationoptions) |

#### Returns

```ts
{
  contact-center.callback.schedule: (input) => Promise<ProviderJsonObject>;
  contact-center.contact.end: (input) => Promise<ProviderJsonObject>;
  contact-center.contact.start: (input) => Promise<ProviderJsonObject>;
  contact-center.handoff.request: (input) => Promise<ProviderJsonObject>;
  nice-cxone.request: (input) => Promise<ProviderJsonObject>;
}
```

| Name | Type |
| ------ | ------ |
| `contact-center.callback.schedule()` | (`input`) => `Promise`\<[`ProviderJsonObject`](#providerjsonobject)\> |
| `contact-center.contact.end()` | (`input`) => `Promise`\<[`ProviderJsonObject`](#providerjsonobject)\> |
| `contact-center.contact.start()` | (`input`) => `Promise`\<[`ProviderJsonObject`](#providerjsonobject)\> |
| `contact-center.handoff.request()` | (`input`) => `Promise`\<[`ProviderJsonObject`](#providerjsonobject)\> |
| `nice-cxone.request()` | (`input`) => `Promise`\<[`ProviderJsonObject`](#providerjsonobject)\> |

## References

### niceCxoneProviderManifest

Re-exports [niceCxoneProviderManifest](dist/manifest.md#nicecxoneprovidermanifest)

***

### niceCxoneProviderManifestInput

Re-exports [niceCxoneProviderManifestInput](dist/manifest.md#nicecxoneprovidermanifestinput)

***

### niceCxoneRestSupportSlice

Re-exports [niceCxoneRestSupportSlice](dist/manifest.md#nicecxonerestsupportslice)

***

### niceCxoneSupportSlice

Re-exports [niceCxoneSupportSlice](dist/manifest.md#nicecxonesupportslice)
