# integrations/contact-center/aircall/dist

## Interfaces

### AircallClient

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

##### readiness()

```ts
readiness(): Promise<ProviderJsonObject>;
```

###### Returns

`Promise`\<[`ProviderJsonObject`](#providerjsonobject)\>

***

### AircallClientOptions

#### Properties

##### accessToken?

```ts
optional accessToken?: string;
```

##### apiBaseUrl

```ts
apiBaseUrl: string;
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

##### readinessPath?

```ts
optional readinessPath?: string;
```

***

### AircallOperationInput

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

### ProviderExtensionRequestInput

#### Extends

- [`AircallOperationInput`](#aircalloperationinput)

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

[`AircallOperationInput`](#aircalloperationinput).[`body`](#body)

##### classification?

```ts
optional classification?: string;
```

##### headers?

```ts
optional headers?: Record<string, string>;
```

###### Inherited from

[`AircallOperationInput`](#aircalloperationinput).[`headers`](#headers)

##### idempotencyKey?

```ts
optional idempotencyKey?: string;
```

###### Inherited from

[`AircallOperationInput`](#aircalloperationinput).[`idempotencyKey`](#idempotencykey)

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

[`AircallOperationInput`](#aircalloperationinput).[`pathParams`](#pathparams)

##### query?

```ts
optional query?: Record<string, ProviderQueryValue>;
```

###### Inherited from

[`AircallOperationInput`](#aircalloperationinput).[`query`](#query)

## Type Aliases

### ProviderJsonObject

```ts
type ProviderJsonObject = Record<string, unknown>;
```

## Functions

### createAircallClient()

```ts
function createAircallClient(options): AircallClient;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`AircallClientOptions`](#aircallclientoptions) |

#### Returns

[`AircallClient`](#aircallclient)

***

### createAircallIntegration()

```ts
function createAircallIntegration(options): DefinedIntegration<{
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
        label: "Aircall API References";
        url: "https://developer.aircall.io/api-references/";
      }, {
        label: "Aircall Everywhere SDK";
        url: "https://github.com/aircall/aircall-everywhere";
     }];
     notes: readonly ["aircall-everywhere is a maintained Workspace iframe SDK, not a server-side Public API client; this package keeps only configured-path support workflow calls."];
     scope: "support-workflow-subset";
  };
  credentialRequirements: readonly [{
     id: "aircall-api-base";
     label: "Aircall Public API base URL";
     required: true;
   }, {
     id: "aircall-api-access";
     label: "Aircall API access";
     required: true;
   }, {
     id: "aircall-routing";
     label: "Aircall number/team/routing configuration";
     required: false;
  }];
  directions: readonly ["inbound-only", "outbound-only", "bidirectional"];
  id: "contact-center.aircall";
  maintainers: readonly [{
     name: "Cognidesk";
     type: "official";
  }];
  metadata: {
     implementation: {
        allowedOperations: readonly [{
           alias: "contact-center.handoff.request";
           checksum: "not-applicable-host-configured";
           id: "configuredHandoff";
           method: "POST";
           path: "host-configured";
           source: "host-configured";
        }];
        implementationStrategy: "direct-http-support-slice";
        sdkDecision: "aircall-everywhere is a maintained Workspace iframe SDK, not a server-side Public API client; this package keeps only configured-path support workflow calls.";
        verifiedAt: "2026-06-21";
     };
     manifestOnlySafe: true;
  };
  name: "Aircall";
  operations: readonly [{
     alias: "contact-center.handoff.request";
     capability: "handoff";
     providerObject: "contactTransfer";
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
| `options` | [`AircallClientOptions`](#aircallclientoptions) |

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
        `label`: `"Aircall API References"`;
        `url`: `"https://developer.aircall.io/api-references/"`;
      \}, \{
        `label`: `"Aircall Everywhere SDK"`;
        `url`: `"https://github.com/aircall/aircall-everywhere"`;
     \}\];
     `notes`: readonly \[`"aircall-everywhere is a maintained Workspace iframe SDK, not a server-side Public API client; this package keeps only configured-path support workflow calls."`\];
     `scope`: `"support-workflow-subset"`;
  \};
  `credentialRequirements`: readonly \[\{
     `id`: `"aircall-api-base"`;
     `label`: `"Aircall Public API base URL"`;
     `required`: `true`;
   \}, \{
     `id`: `"aircall-api-access"`;
     `label`: `"Aircall API access"`;
     `required`: `true`;
   \}, \{
     `id`: `"aircall-routing"`;
     `label`: `"Aircall number/team/routing configuration"`;
     `required`: `false`;
  \}\];
  `directions`: readonly \[`"inbound-only"`, `"outbound-only"`, `"bidirectional"`\];
  `id`: `"contact-center.aircall"`;
  `maintainers`: readonly \[\{
     `name`: `"Cognidesk"`;
     `type`: `"official"`;
  \}\];
  `metadata`: \{
     `implementation`: \{
        `allowedOperations`: readonly \[\{
           `alias`: `"contact-center.handoff.request"`;
           `checksum`: `"not-applicable-host-configured"`;
           `id`: `"configuredHandoff"`;
           `method`: `"POST"`;
           `path`: `"host-configured"`;
           `source`: `"host-configured"`;
        \}\];
        `implementationStrategy`: `"direct-http-support-slice"`;
        `sdkDecision`: `"aircall-everywhere is a maintained Workspace iframe SDK, not a server-side Public API client; this package keeps only configured-path support workflow calls."`;
        `verifiedAt`: `"2026-06-21"`;
     \};
     `manifestOnlySafe`: `true`;
  \};
  `name`: `"Aircall"`;
  `operations`: readonly \[\{
     `alias`: `"contact-center.handoff.request"`;
     `capability`: `"handoff"`;
     `providerObject`: `"contactTransfer"`;
  \}\];
  `packageName`: `"@cognidesk/integration-contact-center-aircall"`;
  `provider`: `"aircall"`;
  `trustLevel`: `"official"`;
\}, `unknown`, \{
  `contact-center.handoff.request`: (`input`) => `Promise`\<[`ProviderJsonObject`](#providerjsonobject)\>;
\}\>

## References

### aircallProviderManifest

Re-exports [aircallProviderManifest](dist/manifest.md#aircallprovidermanifest)

***

### aircallProviderManifestInput

Re-exports [aircallProviderManifestInput](dist/manifest.md#aircallprovidermanifestinput)

***

### aircallSupportSlice

Re-exports [aircallSupportSlice](dist/manifest.md#aircallsupportslice)
