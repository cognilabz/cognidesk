# integrations/contact-center/aircall/dist

## Interfaces

### AircallClient

#### Properties

##### rawClient

```ts
rawClient: AircallRawClient;
```

#### Methods

##### createHandoff()

```ts
createHandoff(input?): Promise<ProviderJsonObject>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input?` | [`AircallTransferCallInput`](#aircalltransfercallinput) |

###### Returns

`Promise`\<[`ProviderJsonObject`](#providerjsonobject)\>

##### readiness()

```ts
readiness(input?): Promise<ProviderJsonObject>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input?` | [`AircallReadinessInput`](#aircallreadinessinput) |

###### Returns

`Promise`\<[`ProviderJsonObject`](#providerjsonobject)\>

##### transferCall()

```ts
transferCall(input): Promise<ProviderJsonObject>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`AircallTransferCallInput`](#aircalltransfercallinput) |

###### Returns

`Promise`\<[`ProviderJsonObject`](#providerjsonobject)\>

***

### AircallClientOptions

#### Extended by

- [`AircallIntegrationOptions`](#aircallintegrationoptions)

#### Properties

##### accessToken?

```ts
optional accessToken?: string;
```

##### apiBaseUrl?

```ts
optional apiBaseUrl?: string;
```

##### authorizationHeader?

```ts
optional authorizationHeader?: string;
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

##### rawClient?

```ts
optional rawClient?: AircallRawClient;
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

### AircallIntegrationOptions

#### Extends

- [`AircallClientOptions`](#aircallclientoptions)

#### Properties

##### accessToken?

```ts
optional accessToken?: string;
```

###### Inherited from

[`AircallClientOptions`](#aircallclientoptions).[`accessToken`](#accesstoken)

##### aircallClient?

```ts
optional aircallClient?: AircallClient;
```

##### apiBaseUrl?

```ts
optional apiBaseUrl?: string;
```

###### Inherited from

[`AircallClientOptions`](#aircallclientoptions).[`apiBaseUrl`](#apibaseurl)

##### authorizationHeader?

```ts
optional authorizationHeader?: string;
```

###### Inherited from

[`AircallClientOptions`](#aircallclientoptions).[`authorizationHeader`](#authorizationheader)

##### baseUrl?

```ts
optional baseUrl?: string;
```

###### Inherited from

[`AircallClientOptions`](#aircallclientoptions).[`baseUrl`](#baseurl)

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

[`AircallClientOptions`](#aircallclientoptions).[`fetch`](#fetch)

##### rawClient?

```ts
optional rawClient?: AircallRawClient;
```

###### Inherited from

[`AircallClientOptions`](#aircallclientoptions).[`rawClient`](#rawclient-1)

##### readinessPath?

```ts
optional readinessPath?: string;
```

###### Inherited from

[`AircallClientOptions`](#aircallclientoptions).[`readinessPath`](#readinesspath)

##### retry?

```ts
optional retry?: number | ProviderRestRetryOptions;
```

###### Inherited from

[`AircallClientOptions`](#aircallclientoptions).[`retry`](#retry)

##### signal?

```ts
optional signal?: AbortSignal;
```

###### Inherited from

[`AircallClientOptions`](#aircallclientoptions).[`signal`](#signal)

##### timeoutMs?

```ts
optional timeoutMs?: number;
```

###### Inherited from

[`AircallClientOptions`](#aircallclientoptions).[`timeoutMs`](#timeoutms)

***

### AircallRawClient

#### Methods

##### readiness()?

```ts
optional readiness(input?): Promise<ProviderJsonObject>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input?` | [`AircallReadinessInput`](#aircallreadinessinput) |

###### Returns

`Promise`\<[`ProviderJsonObject`](#providerjsonobject)\>

##### transferCall()

```ts
transferCall(input): Promise<ProviderJsonObject>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`AircallTransferCallInput`](#aircalltransfercallinput) |

###### Returns

`Promise`\<[`ProviderJsonObject`](#providerjsonobject)\>

***

### AircallReadinessInput

#### Properties

##### path?

```ts
optional path?: string;
```

***

### AircallTransferCallInput

#### Properties

##### callId

```ts
callId: string | number;
```

##### dispatchingStrategy?

```ts
optional dispatchingStrategy?: AircallDispatchingStrategy;
```

##### number?

```ts
optional number?: string;
```

##### teamId?

```ts
optional teamId?: string | number;
```

##### userId?

```ts
optional userId?: string | number;
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

### AircallDispatchingStrategy

```ts
type AircallDispatchingStrategy = "random" | "simultaneous" | "longest_idle";
```

***

### ConfiguredHandoffInput

```ts
type ConfiguredHandoffInput = AircallTransferCallInput;
```

***

### ProviderJsonObject

```ts
type ProviderJsonObject = Record<string, unknown>;
```

## Functions

### createAircallClient()

```ts
function createAircallClient(options?): AircallClient;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options?` | [`AircallClientOptions`](#aircallclientoptions) |

#### Returns

[`AircallClient`](#aircallclient)

***

### createAircallIntegration()

```ts
function createAircallIntegration(options?): DefinedIntegration<{
  capabilities: [{
     capability: "handoff";
     exposesSensitiveData: true;
     providerObjects: [{
        kind: "callTransfer";
        label: "Aircall call transfer";
     }];
     requiresCredential: true;
     sideEffect: true;
  }];
  category: "contact-center";
  channelAudiences: ["customer-facing", "internal-support", "mixed"];
  coverage: {
     evidence: [{
        label: "Aircall API References";
        url: "https://developer.aircall.io/api-references/";
      }, {
        label: "Aircall Everywhere SDK";
        url: "https://github.com/aircall/aircall-everywhere";
      }, {
        label: "aircall-everywhere npm package";
        url: "https://www.npmjs.com/package/aircall-everywhere";
     }];
     notes: ["aircall-everywhere is a maintained Workspace iframe SDK, not a server-side Public API client.", "Runtime calls use Aircall Public API REST for documented call transfer and ping endpoints, with AircallRawClient available as the host-client override."];
     scope: "support-workflow-subset";
  };
  credentialRequirements: [{
     id: "aircall-api-base";
     label: "Aircall Public API base URL";
     required: false;
   }, {
     id: "aircall-api-access";
     label: "Aircall OAuth bearer token or Basic authorization header";
     required: true;
   }, {
     id: "aircall-routing";
     label: "Aircall number/team/routing configuration";
     required: false;
  }];
  directions: ["inbound-only", "outbound-only", "bidirectional"];
  id: "contact-center.aircall";
  maintainers: [{
     name: "Cognidesk";
     type: "official";
  }];
  metadata: {
     implementation: {
        adapterKind: "aircall-public-api-rest-adapter";
        allowedOperations: readonly [{
           alias: "contact-center.handoff.request";
           checksum: "aircall-public-api-transfer-call-2026-06-25";
           id: "transferCall";
           method: "POST";
           path: "/calls/{callId}/transfers";
           source: "provider-rest-adapter";
        }];
        defaultBaseUrl: "https://api.aircall.io/v1";
        failClosed: "Built-in REST calls require Aircall credentials and documented transfer inputs before fetch; rawClient overrides must implement transferCall().";
        implementationStrategy: "no-official-sdk-rest-adapter";
        providerSdkDecision: {
           checkedAt: "2026-06-25";
           checkedPackages: readonly [{
              checkedVersion: "2.0.6";
              license: "ISC";
              package: "aircall-everywhere";
              reason: "Maintained official package embeds and communicates with Aircall Workspace in a browser; it does not expose server-side Public API transfer operations.";
              result: "browser-workspace-iframe-sdk-not-public-api-client";
           }];
           defaultRestPolicy: "fail-closed-aircall-public-api-rest-adapter-with-typed-raw-client-override";
           result: "no-suitable-server-side-public-api-sdk";
           typedClientOverride: "AircallRawClient";
        };
        sdkDecision: "No maintained official backend/runtime SDK was found. aircall-everywhere is maintained, but it embeds the Workspace iframe in a browser; runtime support uses Aircall Public API REST with a strict rawClient override.";
        verifiedAt: "2026-06-25";
     };
     manifestOnlySafe: true;
     providerRestAdapter: {
        adapterKind: "aircall-public-api-rest-adapter";
        defaultBaseUrl: "https://api.aircall.io/v1";
        defaultClientPolicy: "provider-rest-adapter-when-configured";
        failClosed: true;
        rawClientOverride: "AircallRawClient";
        strategy: "no-official-sdk-rest-adapter";
     };
     providerSdkDecision: {
        checkedAt: "2026-06-25";
        checkedPackages: readonly [{
           checkedVersion: "2.0.6";
           license: "ISC";
           package: "aircall-everywhere";
           reason: "Maintained official package embeds and communicates with Aircall Workspace in a browser; it does not expose server-side Public API transfer operations.";
           result: "browser-workspace-iframe-sdk-not-public-api-client";
        }];
        defaultRestPolicy: "fail-closed-aircall-public-api-rest-adapter-with-typed-raw-client-override";
        result: "no-suitable-server-side-public-api-sdk";
        typedClientOverride: "AircallRawClient";
     };
  };
  name: "Aircall";
  operations: [{
     alias: "contact-center.handoff.request";
     capability: "handoff";
     providerObject: "callTransfer";
  }];
  packageName: "@cognidesk/integration-contact-center-aircall";
  provider: "aircall";
  trustLevel: "official";
}, unknown, {
  contact-center.handoff.request: (input) => Promise<ProviderJsonObject>;
}>;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options?` | [`AircallIntegrationOptions`](#aircallintegrationoptions) |

#### Returns

[`DefinedIntegration`](../../../packages/integration-kit/dist.md#definedintegration)\<\{
  `capabilities`: \[\{
     `capability`: `"handoff"`;
     `exposesSensitiveData`: `true`;
     `providerObjects`: \[\{
        `kind`: `"callTransfer"`;
        `label`: `"Aircall call transfer"`;
     \}\];
     `requiresCredential`: `true`;
     `sideEffect`: `true`;
  \}\];
  `category`: `"contact-center"`;
  `channelAudiences`: \[`"customer-facing"`, `"internal-support"`, `"mixed"`\];
  `coverage`: \{
     `evidence`: \[\{
        `label`: `"Aircall API References"`;
        `url`: `"https://developer.aircall.io/api-references/"`;
      \}, \{
        `label`: `"Aircall Everywhere SDK"`;
        `url`: `"https://github.com/aircall/aircall-everywhere"`;
      \}, \{
        `label`: `"aircall-everywhere npm package"`;
        `url`: `"https://www.npmjs.com/package/aircall-everywhere"`;
     \}\];
     `notes`: \[`"aircall-everywhere is a maintained Workspace iframe SDK, not a server-side Public API client."`, `"Runtime calls use Aircall Public API REST for documented call transfer and ping endpoints, with AircallRawClient available as the host-client override."`\];
     `scope`: `"support-workflow-subset"`;
  \};
  `credentialRequirements`: \[\{
     `id`: `"aircall-api-base"`;
     `label`: `"Aircall Public API base URL"`;
     `required`: `false`;
   \}, \{
     `id`: `"aircall-api-access"`;
     `label`: `"Aircall OAuth bearer token or Basic authorization header"`;
     `required`: `true`;
   \}, \{
     `id`: `"aircall-routing"`;
     `label`: `"Aircall number/team/routing configuration"`;
     `required`: `false`;
  \}\];
  `directions`: \[`"inbound-only"`, `"outbound-only"`, `"bidirectional"`\];
  `id`: `"contact-center.aircall"`;
  `maintainers`: \[\{
     `name`: `"Cognidesk"`;
     `type`: `"official"`;
  \}\];
  `metadata`: \{
     `implementation`: \{
        `adapterKind`: `"aircall-public-api-rest-adapter"`;
        `allowedOperations`: readonly \[\{
           `alias`: `"contact-center.handoff.request"`;
           `checksum`: `"aircall-public-api-transfer-call-2026-06-25"`;
           `id`: `"transferCall"`;
           `method`: `"POST"`;
           `path`: `"/calls/{callId}/transfers"`;
           `source`: `"provider-rest-adapter"`;
        \}\];
        `defaultBaseUrl`: `"https://api.aircall.io/v1"`;
        `failClosed`: `"Built-in REST calls require Aircall credentials and documented transfer inputs before fetch; rawClient overrides must implement transferCall()."`;
        `implementationStrategy`: `"no-official-sdk-rest-adapter"`;
        `providerSdkDecision`: \{
           `checkedAt`: `"2026-06-25"`;
           `checkedPackages`: readonly \[\{
              `checkedVersion`: `"2.0.6"`;
              `license`: `"ISC"`;
              `package`: `"aircall-everywhere"`;
              `reason`: `"Maintained official package embeds and communicates with Aircall Workspace in a browser; it does not expose server-side Public API transfer operations."`;
              `result`: `"browser-workspace-iframe-sdk-not-public-api-client"`;
           \}\];
           `defaultRestPolicy`: `"fail-closed-aircall-public-api-rest-adapter-with-typed-raw-client-override"`;
           `result`: `"no-suitable-server-side-public-api-sdk"`;
           `typedClientOverride`: `"AircallRawClient"`;
        \};
        `sdkDecision`: `"No maintained official backend/runtime SDK was found. aircall-everywhere is maintained, but it embeds the Workspace iframe in a browser; runtime support uses Aircall Public API REST with a strict rawClient override."`;
        `verifiedAt`: `"2026-06-25"`;
     \};
     `manifestOnlySafe`: `true`;
     `providerRestAdapter`: \{
        `adapterKind`: `"aircall-public-api-rest-adapter"`;
        `defaultBaseUrl`: `"https://api.aircall.io/v1"`;
        `defaultClientPolicy`: `"provider-rest-adapter-when-configured"`;
        `failClosed`: `true`;
        `rawClientOverride`: `"AircallRawClient"`;
        `strategy`: `"no-official-sdk-rest-adapter"`;
     \};
     `providerSdkDecision`: \{
        `checkedAt`: `"2026-06-25"`;
        `checkedPackages`: readonly \[\{
           `checkedVersion`: `"2.0.6"`;
           `license`: `"ISC"`;
           `package`: `"aircall-everywhere"`;
           `reason`: `"Maintained official package embeds and communicates with Aircall Workspace in a browser; it does not expose server-side Public API transfer operations."`;
           `result`: `"browser-workspace-iframe-sdk-not-public-api-client"`;
        \}\];
        `defaultRestPolicy`: `"fail-closed-aircall-public-api-rest-adapter-with-typed-raw-client-override"`;
        `result`: `"no-suitable-server-side-public-api-sdk"`;
        `typedClientOverride`: `"AircallRawClient"`;
     \};
  \};
  `name`: `"Aircall"`;
  `operations`: \[\{
     `alias`: `"contact-center.handoff.request"`;
     `capability`: `"handoff"`;
     `providerObject`: `"callTransfer"`;
  \}\];
  `packageName`: `"@cognidesk/integration-contact-center-aircall"`;
  `provider`: `"aircall"`;
  `trustLevel`: `"official"`;
\}, `unknown`, \{
  `contact-center.handoff.request`: (`input`) => `Promise`\<[`ProviderJsonObject`](#providerjsonobject)\>;
\}\>

***

### createAircallOperationHandlers()

```ts
function createAircallOperationHandlers(options?): {
  contact-center.handoff.request: (input) => Promise<ProviderJsonObject>;
};
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options?` | [`AircallIntegrationOptions`](#aircallintegrationoptions) |

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

### aircallOperationAliases

Re-exports [aircallOperationAliases](dist/manifest.md#aircalloperationaliases)

***

### aircallProviderManifest

Re-exports [aircallProviderManifest](dist/manifest.md#aircallprovidermanifest)

***

### aircallProviderManifestInput

Re-exports [aircallProviderManifestInput](dist/manifest.md#aircallprovidermanifestinput)

***

### aircallRestSupportSlice

Re-exports [aircallRestSupportSlice](dist/manifest.md#aircallrestsupportslice)

***

### aircallSupportSlice

Re-exports [aircallSupportSlice](dist/manifest.md#aircallsupportslice)
