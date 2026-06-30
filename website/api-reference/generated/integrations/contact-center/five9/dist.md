# integrations/contact-center/five9/dist

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

### Five9Client

#### Properties

##### providerClient

```ts
providerClient: Five9RawClient;
```

##### rawClient

```ts
rawClient: Five9RawClient;
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
readiness(input?): Promise<ProviderJsonObject>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input?` | [`Five9ReadinessInput`](#five9readinessinput) |

###### Returns

`Promise`\<[`ProviderJsonObject`](#providerjsonobject)\>

***

### Five9ClientOptions

#### Extended by

- [`Five9IntegrationOptions`](#five9integrationoptions)

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
optional providerClient?: Five9RawClient;
```

##### rawClient?

```ts
optional rawClient?: Five9RawClient;
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

### Five9IntegrationOptions

#### Extends

- [`Five9ClientOptions`](#five9clientoptions)

#### Properties

##### accessToken?

```ts
optional accessToken?: string;
```

###### Inherited from

[`Five9ClientOptions`](#five9clientoptions).[`accessToken`](#accesstoken)

##### apiBaseUrl?

```ts
optional apiBaseUrl?: string;
```

###### Inherited from

[`Five9ClientOptions`](#five9clientoptions).[`apiBaseUrl`](#apibaseurl)

##### apiKey?

```ts
optional apiKey?: string;
```

###### Inherited from

[`Five9ClientOptions`](#five9clientoptions).[`apiKey`](#apikey)

##### apiKeyHeaderName?

```ts
optional apiKeyHeaderName?: string;
```

###### Inherited from

[`Five9ClientOptions`](#five9clientoptions).[`apiKeyHeaderName`](#apikeyheadername)

##### authorizationHeader?

```ts
optional authorizationHeader?: string;
```

###### Inherited from

[`Five9ClientOptions`](#five9clientoptions).[`authorizationHeader`](#authorizationheader)

##### baseUrl?

```ts
optional baseUrl?: string;
```

###### Inherited from

[`Five9ClientOptions`](#five9clientoptions).[`baseUrl`](#baseurl)

##### client?

```ts
optional client?: Five9Client;
```

##### defaultHandoffPath?

```ts
optional defaultHandoffPath?: string;
```

###### Inherited from

[`Five9ClientOptions`](#five9clientoptions).[`defaultHandoffPath`](#defaulthandoffpath)

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

[`Five9ClientOptions`](#five9clientoptions).[`fetch`](#fetch)

##### providerClient?

```ts
optional providerClient?: Five9RawClient;
```

###### Inherited from

[`Five9ClientOptions`](#five9clientoptions).[`providerClient`](#providerclient-1)

##### rawClient?

```ts
optional rawClient?: Five9RawClient;
```

###### Inherited from

[`Five9ClientOptions`](#five9clientoptions).[`rawClient`](#rawclient-1)

##### readinessPath?

```ts
optional readinessPath?: string;
```

###### Inherited from

[`Five9ClientOptions`](#five9clientoptions).[`readinessPath`](#readinesspath)

##### retry?

```ts
optional retry?: number | ProviderRestRetryOptions;
```

###### Inherited from

[`Five9ClientOptions`](#five9clientoptions).[`retry`](#retry)

##### signal?

```ts
optional signal?: AbortSignal;
```

###### Inherited from

[`Five9ClientOptions`](#five9clientoptions).[`signal`](#signal)

##### timeoutMs?

```ts
optional timeoutMs?: number;
```

###### Inherited from

[`Five9ClientOptions`](#five9clientoptions).[`timeoutMs`](#timeoutms)

***

### Five9RawClient

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

##### readiness()?

```ts
optional readiness(input?): Promise<ProviderJsonObject>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input?` | [`Five9ReadinessInput`](#five9readinessinput) |

###### Returns

`Promise`\<[`ProviderJsonObject`](#providerjsonobject)\>

***

### Five9ReadinessInput

#### Properties

##### signal?

```ts
optional signal?: AbortSignal;
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

### Five9ProviderClient

```ts
type Five9ProviderClient = Five9RawClient;
```

***

### ProviderJsonObject

```ts
type ProviderJsonObject = Record<string, unknown>;
```

## Functions

### createFive9Client()

```ts
function createFive9Client(options?): Five9Client;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options?` | [`Five9ClientOptions`](#five9clientoptions) |

#### Returns

[`Five9Client`](#five9client)

***

### createFive9Integration()

```ts
function createFive9Integration(options?): DefinedIntegration<{
  capabilities: readonly [{
     capability: "handoff";
     exposesSensitiveData: true;
     providerObjects: readonly [{
        kind: "contactTransfer";
        label: "contactTransfer";
     }];
     requiresCredential: true;
     sideEffect: true;
  }];
  category: "contact-center";
  channelAudiences: readonly ["customer-facing", "internal-support", "mixed"];
  coverage: {
     evidence: readonly [{
        label: "Five9 Contact Center APIs and SDKs";
        url: "https://www.five9.com/products/capabilities/call-center-apis-and-sdks";
      }, {
        label: "Five9 CRM SDK JSDoc";
        url: "https://cdn.prod.us.five9.net/stable/crm-sdk-lib/doc/index.html";
      }, {
        label: "npm five9 package";
        url: "https://www.npmjs.com/package/five9";
     }];
     notes: readonly ["No suitable official backend JavaScript/TypeScript SDK was verified.", "Runtime calls use a built-in REST adapter only when baseUrl/API credentials and host-configured operation paths are supplied, with Five9ProviderClient available as a typed host-client override."];
     scope: "support-workflow-subset";
  };
  credentialRequirements: readonly [{
     id: "five9-api-base";
     label: "Five9 API base URL";
     required: true;
   }, {
     id: "five9-api-access";
     label: "Five9 API access";
     required: true;
   }, {
     id: "five9-routing";
     label: "Five9 skill/campaign routing configuration";
     required: false;
  }];
  directions: readonly ["inbound-only", "outbound-only", "bidirectional"];
  id: "contact-center.five9";
  maintainers: readonly [{
     name: "Cognidesk";
     type: "official";
  }];
  metadata: {
     checkedProviderSdk: {
        candidates: readonly [{
           checkedVersion: "0.1.3";
           package: "five9";
           reason: "The npm package is a third-party Node module last published in 2017, not an official maintained Five9 backend SDK.";
           result: "third-party-stale";
           source: "https://www.npmjs.com/package/five9";
         }, {
           checkedVersion: "7.2.0";
           package: "uniphore-five9-messaging-api-client-library";
           reason: "The npm package is maintained by Uniphore and targets a messaging API client surface rather than an official Five9 contact-center runtime SDK.";
           result: "third-party-messaging-specific";
           source: "https://www.npmjs.com/package/uniphore-five9-messaging-api-client-library";
         }, {
           package: "Five9 CRM SDK";
           reason: "Five9's JavaScript CRM SDK is loaded from Five9's CDN and integrates browser pages with Agent Desktop Toolkit through window.Five9.CrmSdk.";
           result: "not-backend-runtime-sdk";
           source: "https://cdn.prod.us.five9.net/stable/crm-sdk-lib/doc/index.html";
        }];
        checkedAt: "2026-06-25";
        officialRuntimeSdkAvailable: false;
        verdict: "no-official-sdk-rest-adapter";
     };
     implementation: {
        adapterKind: "no-official-sdk-rest-adapter";
        allowedOperations: readonly [{
           alias: "contact-center.handoff.request";
           checksum: "not-applicable-host-configured";
           id: "configuredHandoff";
           method: "POST";
           path: "host-configured";
           source: "provider-rest-adapter";
        }];
        defaultClientPolicy: "configured-rest-default-with-host-client-override";
        failClosedWithoutHostConfig: true;
        implementationStrategy: "provider-rest-adapter";
        officialRuntimeSdkAvailable: false;
        providerClientInterface: "Five9ProviderClient";
        providerSdkDecision: {
           checkedAt: "2026-06-25";
           checkedPackages: readonly [{
              checkedVersion: "0.1.3";
              package: "five9";
              reason: "Third-party package last published years ago, not an official maintained Five9 runtime SDK.";
              result: "third-party-stale-node-module";
            }, {
              checkedVersion: "7.2.0";
              license: "ISC";
              package: "uniphore-five9-messaging-api-client-library";
              reason: "Uniphore-maintained messaging client, not an official Five9 contact-center runtime SDK for the declared handoff surface.";
              result: "third-party-messaging-specific-client";
            }, {
              package: "Five9 CRM SDK";
              reason: "Five9 JavaScript CRM SDK is loaded from Five9 CDN for browser pages integrated with Agent Desktop Toolkit.";
              result: "browser-agent-desktop-cdn-sdk-not-node-runtime";
           }];
           defaultRestPolicy: "fail-closed-configured-rest-adapter-with-typed-provider-client-override";
           result: "no-suitable-official-server-side-sdk";
           typedClientOverride: "Five9ProviderClient";
        };
        sdkDecision: "No suitable official backend JavaScript/TypeScript SDK was verified; five9@0.1.3 is third-party and stale, Uniphore's package is third-party and messaging-specific, and Five9 CRM SDK is browser/ADT-oriented.";
        verifiedAt: "2026-06-25";
     };
     manifestOnlySafe: true;
     providerClient: {
        defaultClientPolicy: "configured-rest-default-with-host-client-override";
        importPolicy: "runtime-entrypoint-only";
        interface: "Five9ProviderClient";
        package: "built-in-provider-rest-adapter";
        rawClientAlias: "Five9RawClient";
        sdkDecision: {
           checkedAt: "2026-06-25";
           result: "no-official-sdk-rest-adapter";
        };
     };
     providerRestAdapter: {
        adapterKind: "no-official-sdk-rest-adapter";
        defaultClientPolicy: "configured-rest-default-with-host-client-override";
        failClosedWithoutBaseUrl: true;
        failClosedWithoutConfiguredPath: true;
        providerClientOverride: "Five9ProviderClient";
        rawClientOverride: "Five9RawClient";
        strategy: "provider-rest-adapter";
     };
     providerRestAdapterException: {
        adapterKind: "no-official-sdk-rest-adapter";
        allowedDefaultRuntime: "built-in-rest-adapter";
        failClosed: true;
        guardrails: readonly ["Keep Five9 calls behind Five9ProviderClient or the built-in REST adapter until an official maintained Node/TypeScript Five9 runtime SDK exists.", "Require baseUrl and host-configured operation paths before the built-in REST adapter can call fetch.", "If an official maintained runtime SDK is adopted later, switch implementationStrategy away from provider-rest-adapter and add a normal package.json runtime dependency."];
        hostSdkPath: "Five9ProviderClient";
        reason: "No maintained official Five9 Node/TypeScript backend runtime SDK was verified for the declared contact-center handoff workflow; documented Five9 JavaScript SDK surfaces are browser/ADT-oriented.";
        reviewedAt: "2026-06-25";
        status: "accepted";
     };
     providerSdkDecision: {
        checkedAt: "2026-06-25";
        checkedPackages: readonly [{
           checkedVersion: "0.1.3";
           package: "five9";
           reason: "Third-party package last published years ago, not an official maintained Five9 runtime SDK.";
           result: "third-party-stale-node-module";
         }, {
           checkedVersion: "7.2.0";
           license: "ISC";
           package: "uniphore-five9-messaging-api-client-library";
           reason: "Uniphore-maintained messaging client, not an official Five9 contact-center runtime SDK for the declared handoff surface.";
           result: "third-party-messaging-specific-client";
         }, {
           package: "Five9 CRM SDK";
           reason: "Five9 JavaScript CRM SDK is loaded from Five9 CDN for browser pages integrated with Agent Desktop Toolkit.";
           result: "browser-agent-desktop-cdn-sdk-not-node-runtime";
        }];
        defaultRestPolicy: "fail-closed-configured-rest-adapter-with-typed-provider-client-override";
        result: "no-suitable-official-server-side-sdk";
        typedClientOverride: "Five9ProviderClient";
     };
  };
  name: "Five9";
  operations: readonly [{
     alias: "contact-center.handoff.request";
     capability: "handoff";
     providerObject: "contactTransfer";
  }];
  packageName: "@cognidesk/integration-contact-center-five9";
  provider: "five9";
  trustLevel: "official";
}, unknown, {
  contact-center.handoff.request: (input) => Promise<ProviderJsonObject>;
}>;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options?` | [`Five9IntegrationOptions`](#five9integrationoptions) |

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
  \}\];
  `category`: `"contact-center"`;
  `channelAudiences`: readonly \[`"customer-facing"`, `"internal-support"`, `"mixed"`\];
  `coverage`: \{
     `evidence`: readonly \[\{
        `label`: `"Five9 Contact Center APIs and SDKs"`;
        `url`: `"https://www.five9.com/products/capabilities/call-center-apis-and-sdks"`;
      \}, \{
        `label`: `"Five9 CRM SDK JSDoc"`;
        `url`: `"https://cdn.prod.us.five9.net/stable/crm-sdk-lib/doc/index.html"`;
      \}, \{
        `label`: `"npm five9 package"`;
        `url`: `"https://www.npmjs.com/package/five9"`;
     \}\];
     `notes`: readonly \[`"No suitable official backend JavaScript/TypeScript SDK was verified."`, `"Runtime calls use a built-in REST adapter only when baseUrl/API credentials and host-configured operation paths are supplied, with Five9ProviderClient available as a typed host-client override."`\];
     `scope`: `"support-workflow-subset"`;
  \};
  `credentialRequirements`: readonly \[\{
     `id`: `"five9-api-base"`;
     `label`: `"Five9 API base URL"`;
     `required`: `true`;
   \}, \{
     `id`: `"five9-api-access"`;
     `label`: `"Five9 API access"`;
     `required`: `true`;
   \}, \{
     `id`: `"five9-routing"`;
     `label`: `"Five9 skill/campaign routing configuration"`;
     `required`: `false`;
  \}\];
  `directions`: readonly \[`"inbound-only"`, `"outbound-only"`, `"bidirectional"`\];
  `id`: `"contact-center.five9"`;
  `maintainers`: readonly \[\{
     `name`: `"Cognidesk"`;
     `type`: `"official"`;
  \}\];
  `metadata`: \{
     `checkedProviderSdk`: \{
        `candidates`: readonly \[\{
           `checkedVersion`: `"0.1.3"`;
           `package`: `"five9"`;
           `reason`: `"The npm package is a third-party Node module last published in 2017, not an official maintained Five9 backend SDK."`;
           `result`: `"third-party-stale"`;
           `source`: `"https://www.npmjs.com/package/five9"`;
         \}, \{
           `checkedVersion`: `"7.2.0"`;
           `package`: `"uniphore-five9-messaging-api-client-library"`;
           `reason`: `"The npm package is maintained by Uniphore and targets a messaging API client surface rather than an official Five9 contact-center runtime SDK."`;
           `result`: `"third-party-messaging-specific"`;
           `source`: `"https://www.npmjs.com/package/uniphore-five9-messaging-api-client-library"`;
         \}, \{
           `package`: `"Five9 CRM SDK"`;
           `reason`: `"Five9's JavaScript CRM SDK is loaded from Five9's CDN and integrates browser pages with Agent Desktop Toolkit through window.Five9.CrmSdk."`;
           `result`: `"not-backend-runtime-sdk"`;
           `source`: `"https://cdn.prod.us.five9.net/stable/crm-sdk-lib/doc/index.html"`;
        \}\];
        `checkedAt`: `"2026-06-25"`;
        `officialRuntimeSdkAvailable`: `false`;
        `verdict`: `"no-official-sdk-rest-adapter"`;
     \};
     `implementation`: \{
        `adapterKind`: `"no-official-sdk-rest-adapter"`;
        `allowedOperations`: readonly \[\{
           `alias`: `"contact-center.handoff.request"`;
           `checksum`: `"not-applicable-host-configured"`;
           `id`: `"configuredHandoff"`;
           `method`: `"POST"`;
           `path`: `"host-configured"`;
           `source`: `"provider-rest-adapter"`;
        \}\];
        `defaultClientPolicy`: `"configured-rest-default-with-host-client-override"`;
        `failClosedWithoutHostConfig`: `true`;
        `implementationStrategy`: `"provider-rest-adapter"`;
        `officialRuntimeSdkAvailable`: `false`;
        `providerClientInterface`: `"Five9ProviderClient"`;
        `providerSdkDecision`: \{
           `checkedAt`: `"2026-06-25"`;
           `checkedPackages`: readonly \[\{
              `checkedVersion`: `"0.1.3"`;
              `package`: `"five9"`;
              `reason`: `"Third-party package last published years ago, not an official maintained Five9 runtime SDK."`;
              `result`: `"third-party-stale-node-module"`;
            \}, \{
              `checkedVersion`: `"7.2.0"`;
              `license`: `"ISC"`;
              `package`: `"uniphore-five9-messaging-api-client-library"`;
              `reason`: `"Uniphore-maintained messaging client, not an official Five9 contact-center runtime SDK for the declared handoff surface."`;
              `result`: `"third-party-messaging-specific-client"`;
            \}, \{
              `package`: `"Five9 CRM SDK"`;
              `reason`: `"Five9 JavaScript CRM SDK is loaded from Five9 CDN for browser pages integrated with Agent Desktop Toolkit."`;
              `result`: `"browser-agent-desktop-cdn-sdk-not-node-runtime"`;
           \}\];
           `defaultRestPolicy`: `"fail-closed-configured-rest-adapter-with-typed-provider-client-override"`;
           `result`: `"no-suitable-official-server-side-sdk"`;
           `typedClientOverride`: `"Five9ProviderClient"`;
        \};
        `sdkDecision`: `"No suitable official backend JavaScript/TypeScript SDK was verified; five9@0.1.3 is third-party and stale, Uniphore's package is third-party and messaging-specific, and Five9 CRM SDK is browser/ADT-oriented."`;
        `verifiedAt`: `"2026-06-25"`;
     \};
     `manifestOnlySafe`: `true`;
     `providerClient`: \{
        `defaultClientPolicy`: `"configured-rest-default-with-host-client-override"`;
        `importPolicy`: `"runtime-entrypoint-only"`;
        `interface`: `"Five9ProviderClient"`;
        `package`: `"built-in-provider-rest-adapter"`;
        `rawClientAlias`: `"Five9RawClient"`;
        `sdkDecision`: \{
           `checkedAt`: `"2026-06-25"`;
           `result`: `"no-official-sdk-rest-adapter"`;
        \};
     \};
     `providerRestAdapter`: \{
        `adapterKind`: `"no-official-sdk-rest-adapter"`;
        `defaultClientPolicy`: `"configured-rest-default-with-host-client-override"`;
        `failClosedWithoutBaseUrl`: `true`;
        `failClosedWithoutConfiguredPath`: `true`;
        `providerClientOverride`: `"Five9ProviderClient"`;
        `rawClientOverride`: `"Five9RawClient"`;
        `strategy`: `"provider-rest-adapter"`;
     \};
     `providerRestAdapterException`: \{
        `adapterKind`: `"no-official-sdk-rest-adapter"`;
        `allowedDefaultRuntime`: `"built-in-rest-adapter"`;
        `failClosed`: `true`;
        `guardrails`: readonly \[`"Keep Five9 calls behind Five9ProviderClient or the built-in REST adapter until an official maintained Node/TypeScript Five9 runtime SDK exists."`, `"Require baseUrl and host-configured operation paths before the built-in REST adapter can call fetch."`, `"If an official maintained runtime SDK is adopted later, switch implementationStrategy away from provider-rest-adapter and add a normal package.json runtime dependency."`\];
        `hostSdkPath`: `"Five9ProviderClient"`;
        `reason`: `"No maintained official Five9 Node/TypeScript backend runtime SDK was verified for the declared contact-center handoff workflow; documented Five9 JavaScript SDK surfaces are browser/ADT-oriented."`;
        `reviewedAt`: `"2026-06-25"`;
        `status`: `"accepted"`;
     \};
     `providerSdkDecision`: \{
        `checkedAt`: `"2026-06-25"`;
        `checkedPackages`: readonly \[\{
           `checkedVersion`: `"0.1.3"`;
           `package`: `"five9"`;
           `reason`: `"Third-party package last published years ago, not an official maintained Five9 runtime SDK."`;
           `result`: `"third-party-stale-node-module"`;
         \}, \{
           `checkedVersion`: `"7.2.0"`;
           `license`: `"ISC"`;
           `package`: `"uniphore-five9-messaging-api-client-library"`;
           `reason`: `"Uniphore-maintained messaging client, not an official Five9 contact-center runtime SDK for the declared handoff surface."`;
           `result`: `"third-party-messaging-specific-client"`;
         \}, \{
           `package`: `"Five9 CRM SDK"`;
           `reason`: `"Five9 JavaScript CRM SDK is loaded from Five9 CDN for browser pages integrated with Agent Desktop Toolkit."`;
           `result`: `"browser-agent-desktop-cdn-sdk-not-node-runtime"`;
        \}\];
        `defaultRestPolicy`: `"fail-closed-configured-rest-adapter-with-typed-provider-client-override"`;
        `result`: `"no-suitable-official-server-side-sdk"`;
        `typedClientOverride`: `"Five9ProviderClient"`;
     \};
  \};
  `name`: `"Five9"`;
  `operations`: readonly \[\{
     `alias`: `"contact-center.handoff.request"`;
     `capability`: `"handoff"`;
     `providerObject`: `"contactTransfer"`;
  \}\];
  `packageName`: `"@cognidesk/integration-contact-center-five9"`;
  `provider`: `"five9"`;
  `trustLevel`: `"official"`;
\}, `unknown`, \{
  `contact-center.handoff.request`: (`input`) => `Promise`\<[`ProviderJsonObject`](#providerjsonobject)\>;
\}\>

***

### createFive9OperationHandlers()

```ts
function createFive9OperationHandlers(options?): {
  contact-center.handoff.request: (input) => Promise<ProviderJsonObject>;
};
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options?` | [`Five9IntegrationOptions`](#five9integrationoptions) |

#### Returns

```ts
{
  contact-center.handoff.request: (input) => Promise<ProviderJsonObject>;
}
```

| Name | Type |
| ------ | ------ |
| `contact-center.handoff.request()` | (`input`) => `Promise`\<[`ProviderJsonObject`](#providerjsonobject)\> |

## References

### five9CheckedProviderSdk

Re-exports [five9CheckedProviderSdk](dist/manifest.md#five9checkedprovidersdk)

***

### five9ProviderManifest

Re-exports [five9ProviderManifest](dist/manifest.md#five9providermanifest)

***

### five9ProviderManifestInput

Re-exports [five9ProviderManifestInput](dist/manifest.md#five9providermanifestinput)

***

### five9RestSupportSlice

Re-exports [five9RestSupportSlice](dist/manifest.md#five9restsupportslice)
