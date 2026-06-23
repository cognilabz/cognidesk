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

### Five9ClientOptions

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

### Five9OperationInput

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

### ProviderExtensionRequestInput

#### Extends

- [`Five9OperationInput`](#five9operationinput)

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

[`Five9OperationInput`](#five9operationinput).[`body`](#body)

##### classification?

```ts
optional classification?: string;
```

##### headers?

```ts
optional headers?: Record<string, string>;
```

###### Inherited from

[`Five9OperationInput`](#five9operationinput).[`headers`](#headers)

##### idempotencyKey?

```ts
optional idempotencyKey?: string;
```

###### Inherited from

[`Five9OperationInput`](#five9operationinput).[`idempotencyKey`](#idempotencykey-1)

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

[`Five9OperationInput`](#five9operationinput).[`pathParams`](#pathparams)

##### query?

```ts
optional query?: Record<string, ProviderQueryValue>;
```

###### Inherited from

[`Five9OperationInput`](#five9operationinput).[`query`](#query-1)

## Type Aliases

### ProviderJsonObject

```ts
type ProviderJsonObject = Record<string, unknown>;
```

## Functions

### createFive9Client()

```ts
function createFive9Client(options): Five9Client;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`Five9ClientOptions`](#five9clientoptions) |

#### Returns

[`Five9Client`](#five9client)

***

### createFive9Integration()

```ts
function createFive9Integration(options): DefinedIntegration<{
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
        label: "Five9 development program";
        url: "https://www.five9.com/development";
     }];
     notes: readonly ["No viable official server-side JavaScript SDK was verified; npm five9 is third-party and stale, while Five9 CRM SDK is browser/ADT-oriented."];
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
        sdkDecision: "No viable official server-side JavaScript SDK was verified; npm five9 is third-party and stale, while Five9 CRM SDK is browser/ADT-oriented.";
        verifiedAt: "2026-06-21";
     };
     manifestOnlySafe: true;
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
| `options` | [`Five9ClientOptions`](#five9clientoptions) |

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
        `label`: `"Five9 development program"`;
        `url`: `"https://www.five9.com/development"`;
     \}\];
     `notes`: readonly \[`"No viable official server-side JavaScript SDK was verified; npm five9 is third-party and stale, while Five9 CRM SDK is browser/ADT-oriented."`\];
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
        `sdkDecision`: `"No viable official server-side JavaScript SDK was verified; npm five9 is third-party and stale, while Five9 CRM SDK is browser/ADT-oriented."`;
        `verifiedAt`: `"2026-06-21"`;
     \};
     `manifestOnlySafe`: `true`;
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

## References

### five9ProviderManifest

Re-exports [five9ProviderManifest](dist/manifest.md#five9providermanifest)

***

### five9ProviderManifestInput

Re-exports [five9ProviderManifestInput](dist/manifest.md#five9providermanifestinput)

***

### five9SupportSlice

Re-exports [five9SupportSlice](dist/manifest.md#five9supportslice)
