# integrations/contact-center/nextiva/dist

## Interfaces

### ConfiguredHandoffInput

#### Properties

##### idempotencyKey?

```ts
optional idempotencyKey?: string;
```

##### payload?

```ts
optional payload?: NextivaJsonObject;
```

##### query?

```ts
optional query?: Record<string, ProviderQueryValue>;
```

***

### NextivaClient

#### Properties

##### providerClient

```ts
providerClient: NextivaProviderClient;
```

#### Methods

##### createHandoff()

```ts
createHandoff(input?): Promise<NextivaJsonObject>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input?` | [`ConfiguredHandoffInput`](#configuredhandoffinput) |

###### Returns

`Promise`\<[`NextivaJsonObject`](#nextivajsonobject)\>

##### readiness()

```ts
readiness(): Promise<NextivaJsonObject>;
```

###### Returns

`Promise`\<[`NextivaJsonObject`](#nextivajsonobject)\>

##### request()

```ts
request(input): Promise<NextivaJsonObject>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`ProviderExtensionRequestInput`](#providerextensionrequestinput) |

###### Returns

`Promise`\<[`NextivaJsonObject`](#nextivajsonobject)\>

***

### NextivaClientOptions

#### Extended by

- [`NextivaIntegrationOptions`](#nextivaintegrationoptions)

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
optional providerClient?: NextivaProviderClient;
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

### NextivaIntegrationOptions

#### Extends

- [`NextivaClientOptions`](#nextivaclientoptions)

#### Properties

##### accessToken?

```ts
optional accessToken?: string;
```

###### Inherited from

[`NextivaClientOptions`](#nextivaclientoptions).[`accessToken`](#accesstoken)

##### apiBaseUrl?

```ts
optional apiBaseUrl?: string;
```

###### Inherited from

[`NextivaClientOptions`](#nextivaclientoptions).[`apiBaseUrl`](#apibaseurl)

##### apiKey?

```ts
optional apiKey?: string;
```

###### Inherited from

[`NextivaClientOptions`](#nextivaclientoptions).[`apiKey`](#apikey)

##### apiKeyHeaderName?

```ts
optional apiKeyHeaderName?: string;
```

###### Inherited from

[`NextivaClientOptions`](#nextivaclientoptions).[`apiKeyHeaderName`](#apikeyheadername)

##### authorizationHeader?

```ts
optional authorizationHeader?: string;
```

###### Inherited from

[`NextivaClientOptions`](#nextivaclientoptions).[`authorizationHeader`](#authorizationheader)

##### baseUrl?

```ts
optional baseUrl?: string;
```

###### Inherited from

[`NextivaClientOptions`](#nextivaclientoptions).[`baseUrl`](#baseurl)

##### defaultHandoffPath?

```ts
optional defaultHandoffPath?: string;
```

###### Inherited from

[`NextivaClientOptions`](#nextivaclientoptions).[`defaultHandoffPath`](#defaulthandoffpath)

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

[`NextivaClientOptions`](#nextivaclientoptions).[`fetch`](#fetch)

##### nextivaClient?

```ts
optional nextivaClient?: NextivaClient;
```

##### providerClient?

```ts
optional providerClient?: NextivaProviderClient;
```

###### Inherited from

[`NextivaClientOptions`](#nextivaclientoptions).[`providerClient`](#providerclient-1)

##### readinessPath?

```ts
optional readinessPath?: string;
```

###### Inherited from

[`NextivaClientOptions`](#nextivaclientoptions).[`readinessPath`](#readinesspath)

##### retry?

```ts
optional retry?: number | ProviderRestRetryOptions;
```

###### Inherited from

[`NextivaClientOptions`](#nextivaclientoptions).[`retry`](#retry)

##### signal?

```ts
optional signal?: AbortSignal;
```

###### Inherited from

[`NextivaClientOptions`](#nextivaclientoptions).[`signal`](#signal)

##### timeoutMs?

```ts
optional timeoutMs?: number;
```

###### Inherited from

[`NextivaClientOptions`](#nextivaclientoptions).[`timeoutMs`](#timeoutms)

***

### NextivaJsonObject

#### Indexable

```ts
[key: string]: NextivaJsonValue
```

***

### NextivaOperationInput

#### Extended by

- [`ProviderExtensionRequestInput`](#providerextensionrequestinput)

#### Properties

##### body?

```ts
optional body?: NextivaJsonValue;
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

### NextivaProviderClient

#### Methods

##### createHandoff()

```ts
createHandoff(input): Promise<NextivaJsonObject>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`ConfiguredHandoffInput`](#configuredhandoffinput) |

###### Returns

`Promise`\<[`NextivaJsonObject`](#nextivajsonobject)\>

##### readiness()?

```ts
optional readiness(): Promise<NextivaJsonObject>;
```

###### Returns

`Promise`\<[`NextivaJsonObject`](#nextivajsonobject)\>

##### request()

```ts
request(input): Promise<NextivaJsonObject>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`ProviderExtensionRequestInput`](#providerextensionrequestinput) |

###### Returns

`Promise`\<[`NextivaJsonObject`](#nextivajsonobject)\>

***

### ProviderExtensionRequestInput

#### Extends

- [`NextivaOperationInput`](#nextivaoperationinput)

#### Properties

##### allowMutation?

```ts
optional allowMutation?: boolean;
```

##### body?

```ts
optional body?: NextivaJsonValue;
```

###### Inherited from

[`NextivaOperationInput`](#nextivaoperationinput).[`body`](#body)

##### classification?

```ts
optional classification?: string;
```

##### headers?

```ts
optional headers?: Record<string, string>;
```

###### Inherited from

[`NextivaOperationInput`](#nextivaoperationinput).[`headers`](#headers)

##### idempotencyKey?

```ts
optional idempotencyKey?: string;
```

###### Inherited from

[`NextivaOperationInput`](#nextivaoperationinput).[`idempotencyKey`](#idempotencykey-1)

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

[`NextivaOperationInput`](#nextivaoperationinput).[`pathParams`](#pathparams)

##### query?

```ts
optional query?: Record<string, ProviderQueryValue>;
```

###### Inherited from

[`NextivaOperationInput`](#nextivaoperationinput).[`query`](#query-1)

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

### NextivaJsonPrimitive

```ts
type NextivaJsonPrimitive = string | number | boolean | null;
```

***

### NextivaJsonValue

```ts
type NextivaJsonValue =
  | NextivaJsonPrimitive
  | NextivaJsonObject
  | readonly NextivaJsonValue[];
```

***

### ProviderJsonObject

```ts
type ProviderJsonObject = NextivaJsonObject;
```

## Functions

### createNextivaClient()

```ts
function createNextivaClient(options?): NextivaClient;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options?` | [`NextivaClientOptions`](#nextivaclientoptions) |

#### Returns

[`NextivaClient`](#nextivaclient)

***

### createNextivaIntegration()

```ts
function createNextivaIntegration(options?): DefinedIntegration<{
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
        label: "Nextiva Contact Center REST APIs";
        url: "https://www.nextiva.com/resources/learn/rest-apis";
      }, {
        label: "Nextiva WorkItem Service";
        url: "https://developer.nextiva.com/nextiva/docs/workitem-service";
      }, {
        label: "Nextiva Frontend SDKs";
        url: "https://developer.nextiva.com/nextiva/docs/overview-of-sdks";
      }, {
        label: "Nextiva SDK Installation";
        url: "https://developer.nextiva.com/nextiva/docs/sdk-installation";
      }, {
        label: "Nextiva ncx-sdk";
        url: "https://github.com/Nextiva/ncx-sdk";
      }, {
        label: "Nextiva ncx-web-sdk";
        url: "https://github.com/Nextiva/ncx-web-sdk";
     }];
     notes: readonly ["No suitable public server-side Nextiva JavaScript SDK was verified for this provider runtime.", "Runtime calls use a strict typed REST adapter when baseUrl/API credentials are supplied, with NextivaProviderClient available as a host-client override.", "Nextiva's current SDK documentation describes frontend SDKs; public npm packages checked for NCX were frontend/session-oriented, dev/unlicensed, unavailable under documented scoped names, or too loosely typed for package-owned server runtime calls."];
     scope: "support-workflow-subset";
  };
  credentialRequirements: readonly [{
     id: "nextiva-contact-center-api-base";
     label: "Nextiva Contact Center API base URL";
     required: true;
   }, {
     id: "nextiva-contact-center-api-access";
     label: "Nextiva Contact Center API access";
     required: true;
   }, {
     id: "nextiva-contact-center-routing";
     label: "Nextiva queue/campaign/routing configuration";
     required: false;
  }];
  directions: readonly ["inbound-only", "outbound-only", "bidirectional"];
  id: "contact-center.nextiva";
  maintainers: readonly [{
     name: "Cognidesk";
     type: "official";
  }];
  metadata: {
     implementation: {
        adapterKind: "no-suitable-runtime-sdk-rest-adapter";
        allowedOperations: readonly [{
           alias: "contact-center.handoff.request";
           checksum: "not-applicable-host-configured";
           id: "configuredHandoff";
           method: "POST";
           path: "host-configured";
           source: "provider-rest-adapter";
        }];
        hostClientEscapeHatch: "NextivaClientOptions.providerClient";
        hostClientOverride: true;
        implementationStrategy: "provider-rest-adapter";
        packageOwnedRestClient: true;
        providerSdkDecision: {
           checkedAt: "2026-06-25";
           checkedPackages: readonly [{
              checkedVersion: "1.5.8";
              license: "MIT";
              package: "ncx-sdk";
              reason: "Session/frontend-oriented client with broad any-typed services and socket/session initialization, not a strict server-side REST client for Cognidesk handoff operations.";
              result: "not-used-as-runtime-rest-client";
            }, {
              checkedVersion: "0.0.1-dev.6";
              license: "UNLICENSED";
              package: "ncx-web-sdk";
              reason: "Dev-tagged browser Web SDK with browser telephony/UI peer surface and no suitable redistributable server-side runtime contract.";
              result: "not-used-as-runtime-rest-client";
            }, {
              checkedVersion: "0.0.1-dev.10";
              license: "UNLICENSED";
              package: "ncx-react-sdk";
              reason: "React frontend SDK is not appropriate for this provider runtime package.";
              result: "not-used-as-runtime-rest-client";
           }];
           defaultRestPolicy: "fail-closed-provider-rest-adapter-with-typed-provider-client-override";
           result: "no-suitable-server-side-sdk";
           typedClientOverride: "NextivaProviderClient";
        };
        sdkDecision: {
           checkedAt: "2026-06-25";
           checkedPackages: readonly [{
              checkedVersion: "1.5.8";
              license: "MIT";
              package: "ncx-sdk";
              reason: "Public package is a session/frontend-oriented client with broad any-typed WorkitemsService methods and socket/session initialization, not a strict server-side REST client for Cognidesk handoff operations.";
              result: "not-used-as-runtime-rest-client";
            }, {
              checkedVersion: "0.0.1-dev.6";
              license: "UNLICENSED";
              package: "ncx-web-sdk";
              reason: "Public npm package is a dev-tagged browser Web SDK with peer dependencies for browser telephony/UI runtime and a tiny exported type surface; the scoped package documented by Nextiva was not available on the public npm registry during this check.";
              result: "not-used-as-runtime-rest-client";
            }, {
              checkedVersion: "0.0.1-dev.10";
              license: "UNLICENSED";
              package: "ncx-react-sdk";
              reason: "React frontend SDK depends on React and NCX core dev packages, so it is not appropriate for this provider runtime package.";
              result: "not-used-as-runtime-rest-client";
           }];
           result: "no-suitable-server-side-sdk";
        };
        verifiedAt: "2026-06-25";
     };
     manifestOnlySafe: true;
     providerRestAdapter: {
        adapterKind: "no-suitable-runtime-sdk-rest-adapter";
        packageOwnedRestClient: true;
        providerClientOverride: "NextivaProviderClient";
        requestValidation: "json-path-query-header-validated";
        strategy: "provider-rest-adapter";
     };
     providerSdkDecision: {
        checkedAt: "2026-06-25";
        checkedPackages: readonly [{
           checkedVersion: "1.5.8";
           license: "MIT";
           package: "ncx-sdk";
           reason: "Session/frontend-oriented client with broad any-typed services and socket/session initialization, not a strict server-side REST client for Cognidesk handoff operations.";
           result: "not-used-as-runtime-rest-client";
         }, {
           checkedVersion: "0.0.1-dev.6";
           license: "UNLICENSED";
           package: "ncx-web-sdk";
           reason: "Dev-tagged browser Web SDK with browser telephony/UI peer surface and no suitable redistributable server-side runtime contract.";
           result: "not-used-as-runtime-rest-client";
         }, {
           checkedVersion: "0.0.1-dev.10";
           license: "UNLICENSED";
           package: "ncx-react-sdk";
           reason: "React frontend SDK is not appropriate for this provider runtime package.";
           result: "not-used-as-runtime-rest-client";
        }];
        defaultRestPolicy: "fail-closed-provider-rest-adapter-with-typed-provider-client-override";
        result: "no-suitable-server-side-sdk";
        typedClientOverride: "NextivaProviderClient";
     };
  };
  name: "Nextiva Contact Center";
  operations: readonly [{
     alias: "contact-center.handoff.request";
     capability: "handoff";
     providerObject: "contactTransfer";
   }, {
     alias: "nextiva.request";
     capability: "read-provider-object";
     extension: true;
     providerObject: "contact";
  }];
  packageName: "@cognidesk/integration-contact-center-nextiva";
  provider: "nextiva";
  trustLevel: "official";
}, unknown, {
  contact-center.handoff.request: (input) => Promise<NextivaJsonObject>;
  nextiva.request: (input) => Promise<NextivaJsonObject>;
}>;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options?` | [`NextivaIntegrationOptions`](#nextivaintegrationoptions) |

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
        `label`: `"Nextiva Contact Center REST APIs"`;
        `url`: `"https://www.nextiva.com/resources/learn/rest-apis"`;
      \}, \{
        `label`: `"Nextiva WorkItem Service"`;
        `url`: `"https://developer.nextiva.com/nextiva/docs/workitem-service"`;
      \}, \{
        `label`: `"Nextiva Frontend SDKs"`;
        `url`: `"https://developer.nextiva.com/nextiva/docs/overview-of-sdks"`;
      \}, \{
        `label`: `"Nextiva SDK Installation"`;
        `url`: `"https://developer.nextiva.com/nextiva/docs/sdk-installation"`;
      \}, \{
        `label`: `"Nextiva ncx-sdk"`;
        `url`: `"https://github.com/Nextiva/ncx-sdk"`;
      \}, \{
        `label`: `"Nextiva ncx-web-sdk"`;
        `url`: `"https://github.com/Nextiva/ncx-web-sdk"`;
     \}\];
     `notes`: readonly \[`"No suitable public server-side Nextiva JavaScript SDK was verified for this provider runtime."`, `"Runtime calls use a strict typed REST adapter when baseUrl/API credentials are supplied, with NextivaProviderClient available as a host-client override."`, `"Nextiva's current SDK documentation describes frontend SDKs; public npm packages checked for NCX were frontend/session-oriented, dev/unlicensed, unavailable under documented scoped names, or too loosely typed for package-owned server runtime calls."`\];
     `scope`: `"support-workflow-subset"`;
  \};
  `credentialRequirements`: readonly \[\{
     `id`: `"nextiva-contact-center-api-base"`;
     `label`: `"Nextiva Contact Center API base URL"`;
     `required`: `true`;
   \}, \{
     `id`: `"nextiva-contact-center-api-access"`;
     `label`: `"Nextiva Contact Center API access"`;
     `required`: `true`;
   \}, \{
     `id`: `"nextiva-contact-center-routing"`;
     `label`: `"Nextiva queue/campaign/routing configuration"`;
     `required`: `false`;
  \}\];
  `directions`: readonly \[`"inbound-only"`, `"outbound-only"`, `"bidirectional"`\];
  `id`: `"contact-center.nextiva"`;
  `maintainers`: readonly \[\{
     `name`: `"Cognidesk"`;
     `type`: `"official"`;
  \}\];
  `metadata`: \{
     `implementation`: \{
        `adapterKind`: `"no-suitable-runtime-sdk-rest-adapter"`;
        `allowedOperations`: readonly \[\{
           `alias`: `"contact-center.handoff.request"`;
           `checksum`: `"not-applicable-host-configured"`;
           `id`: `"configuredHandoff"`;
           `method`: `"POST"`;
           `path`: `"host-configured"`;
           `source`: `"provider-rest-adapter"`;
        \}\];
        `hostClientEscapeHatch`: `"NextivaClientOptions.providerClient"`;
        `hostClientOverride`: `true`;
        `implementationStrategy`: `"provider-rest-adapter"`;
        `packageOwnedRestClient`: `true`;
        `providerSdkDecision`: \{
           `checkedAt`: `"2026-06-25"`;
           `checkedPackages`: readonly \[\{
              `checkedVersion`: `"1.5.8"`;
              `license`: `"MIT"`;
              `package`: `"ncx-sdk"`;
              `reason`: `"Session/frontend-oriented client with broad any-typed services and socket/session initialization, not a strict server-side REST client for Cognidesk handoff operations."`;
              `result`: `"not-used-as-runtime-rest-client"`;
            \}, \{
              `checkedVersion`: `"0.0.1-dev.6"`;
              `license`: `"UNLICENSED"`;
              `package`: `"ncx-web-sdk"`;
              `reason`: `"Dev-tagged browser Web SDK with browser telephony/UI peer surface and no suitable redistributable server-side runtime contract."`;
              `result`: `"not-used-as-runtime-rest-client"`;
            \}, \{
              `checkedVersion`: `"0.0.1-dev.10"`;
              `license`: `"UNLICENSED"`;
              `package`: `"ncx-react-sdk"`;
              `reason`: `"React frontend SDK is not appropriate for this provider runtime package."`;
              `result`: `"not-used-as-runtime-rest-client"`;
           \}\];
           `defaultRestPolicy`: `"fail-closed-provider-rest-adapter-with-typed-provider-client-override"`;
           `result`: `"no-suitable-server-side-sdk"`;
           `typedClientOverride`: `"NextivaProviderClient"`;
        \};
        `sdkDecision`: \{
           `checkedAt`: `"2026-06-25"`;
           `checkedPackages`: readonly \[\{
              `checkedVersion`: `"1.5.8"`;
              `license`: `"MIT"`;
              `package`: `"ncx-sdk"`;
              `reason`: `"Public package is a session/frontend-oriented client with broad any-typed WorkitemsService methods and socket/session initialization, not a strict server-side REST client for Cognidesk handoff operations."`;
              `result`: `"not-used-as-runtime-rest-client"`;
            \}, \{
              `checkedVersion`: `"0.0.1-dev.6"`;
              `license`: `"UNLICENSED"`;
              `package`: `"ncx-web-sdk"`;
              `reason`: `"Public npm package is a dev-tagged browser Web SDK with peer dependencies for browser telephony/UI runtime and a tiny exported type surface; the scoped package documented by Nextiva was not available on the public npm registry during this check."`;
              `result`: `"not-used-as-runtime-rest-client"`;
            \}, \{
              `checkedVersion`: `"0.0.1-dev.10"`;
              `license`: `"UNLICENSED"`;
              `package`: `"ncx-react-sdk"`;
              `reason`: `"React frontend SDK depends on React and NCX core dev packages, so it is not appropriate for this provider runtime package."`;
              `result`: `"not-used-as-runtime-rest-client"`;
           \}\];
           `result`: `"no-suitable-server-side-sdk"`;
        \};
        `verifiedAt`: `"2026-06-25"`;
     \};
     `manifestOnlySafe`: `true`;
     `providerRestAdapter`: \{
        `adapterKind`: `"no-suitable-runtime-sdk-rest-adapter"`;
        `packageOwnedRestClient`: `true`;
        `providerClientOverride`: `"NextivaProviderClient"`;
        `requestValidation`: `"json-path-query-header-validated"`;
        `strategy`: `"provider-rest-adapter"`;
     \};
     `providerSdkDecision`: \{
        `checkedAt`: `"2026-06-25"`;
        `checkedPackages`: readonly \[\{
           `checkedVersion`: `"1.5.8"`;
           `license`: `"MIT"`;
           `package`: `"ncx-sdk"`;
           `reason`: `"Session/frontend-oriented client with broad any-typed services and socket/session initialization, not a strict server-side REST client for Cognidesk handoff operations."`;
           `result`: `"not-used-as-runtime-rest-client"`;
         \}, \{
           `checkedVersion`: `"0.0.1-dev.6"`;
           `license`: `"UNLICENSED"`;
           `package`: `"ncx-web-sdk"`;
           `reason`: `"Dev-tagged browser Web SDK with browser telephony/UI peer surface and no suitable redistributable server-side runtime contract."`;
           `result`: `"not-used-as-runtime-rest-client"`;
         \}, \{
           `checkedVersion`: `"0.0.1-dev.10"`;
           `license`: `"UNLICENSED"`;
           `package`: `"ncx-react-sdk"`;
           `reason`: `"React frontend SDK is not appropriate for this provider runtime package."`;
           `result`: `"not-used-as-runtime-rest-client"`;
        \}\];
        `defaultRestPolicy`: `"fail-closed-provider-rest-adapter-with-typed-provider-client-override"`;
        `result`: `"no-suitable-server-side-sdk"`;
        `typedClientOverride`: `"NextivaProviderClient"`;
     \};
  \};
  `name`: `"Nextiva Contact Center"`;
  `operations`: readonly \[\{
     `alias`: `"contact-center.handoff.request"`;
     `capability`: `"handoff"`;
     `providerObject`: `"contactTransfer"`;
   \}, \{
     `alias`: `"nextiva.request"`;
     `capability`: `"read-provider-object"`;
     `extension`: `true`;
     `providerObject`: `"contact"`;
  \}\];
  `packageName`: `"@cognidesk/integration-contact-center-nextiva"`;
  `provider`: `"nextiva"`;
  `trustLevel`: `"official"`;
\}, `unknown`, \{
  `contact-center.handoff.request`: (`input`) => `Promise`\<[`NextivaJsonObject`](#nextivajsonobject)\>;
  `nextiva.request`: (`input`) => `Promise`\<[`NextivaJsonObject`](#nextivajsonobject)\>;
\}\>

***

### createNextivaIntegrationOperationHandlers()

```ts
function createNextivaIntegrationOperationHandlers(options?): {
  contact-center.handoff.request: (input) => Promise<NextivaJsonObject>;
  nextiva.request: (input) => Promise<NextivaJsonObject>;
};
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options?` | [`NextivaIntegrationOptions`](#nextivaintegrationoptions) |

#### Returns

```ts
{
  contact-center.handoff.request: (input) => Promise<NextivaJsonObject>;
  nextiva.request: (input) => Promise<NextivaJsonObject>;
}
```

| Name | Type |
| ------ | ------ |
| `contact-center.handoff.request()` | (`input`) => `Promise`\<[`NextivaJsonObject`](#nextivajsonobject)\> |
| `nextiva.request()` | (`input`) => `Promise`\<[`NextivaJsonObject`](#nextivajsonobject)\> |

## References

### nextivaProviderManifest

Re-exports [nextivaProviderManifest](dist/manifest.md#nextivaprovidermanifest)

***

### nextivaProviderManifestInput

Re-exports [nextivaProviderManifestInput](dist/manifest.md#nextivaprovidermanifestinput)

***

### nextivaSupportSlice

Re-exports [nextivaSupportSlice](dist/manifest.md#nextivasupportslice)
