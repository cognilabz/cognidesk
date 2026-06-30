# integrations/contact-center/talkdesk/dist

## Interfaces

### ConfiguredHandoffInput

#### Properties

##### idempotencyKey?

```ts
optional idempotencyKey?: string;
```

##### payload?

```ts
optional payload?: ProviderJsonObject;
```

##### query?

```ts
optional query?: Record<string, ProviderQueryValue>;
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

***

### TalkdeskClient

#### Properties

##### providerClient

```ts
providerClient: TalkdeskProviderClient;
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

##### createTask()

```ts
createTask(input?): Promise<ProviderJsonObject>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input?` | [`TalkdeskOperationInput`](#talkdeskoperationinput) |

###### Returns

`Promise`\<[`ProviderJsonObject`](#providerjsonobject)\>

##### readiness()

```ts
readiness(): Promise<ProviderJsonObject>;
```

###### Returns

`Promise`\<[`ProviderJsonObject`](#providerjsonobject)\>

##### scheduleCallback()

```ts
scheduleCallback(input?): Promise<ProviderJsonObject>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input?` | [`TalkdeskOperationInput`](#talkdeskoperationinput) |

###### Returns

`Promise`\<[`ProviderJsonObject`](#providerjsonobject)\>

***

### TalkdeskClientOptions

#### Extended by

- [`TalkdeskIntegrationOptions`](#talkdeskintegrationoptions)

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
optional providerClient?: TalkdeskProviderClient;
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

### TalkdeskIntegrationOptions

#### Extends

- [`TalkdeskClientOptions`](#talkdeskclientoptions)

#### Properties

##### accessToken?

```ts
optional accessToken?: string;
```

###### Inherited from

[`TalkdeskClientOptions`](#talkdeskclientoptions).[`accessToken`](#accesstoken)

##### apiBaseUrl?

```ts
optional apiBaseUrl?: string;
```

###### Inherited from

[`TalkdeskClientOptions`](#talkdeskclientoptions).[`apiBaseUrl`](#apibaseurl)

##### apiKey?

```ts
optional apiKey?: string;
```

###### Inherited from

[`TalkdeskClientOptions`](#talkdeskclientoptions).[`apiKey`](#apikey)

##### apiKeyHeaderName?

```ts
optional apiKeyHeaderName?: string;
```

###### Inherited from

[`TalkdeskClientOptions`](#talkdeskclientoptions).[`apiKeyHeaderName`](#apikeyheadername)

##### authorizationHeader?

```ts
optional authorizationHeader?: string;
```

###### Inherited from

[`TalkdeskClientOptions`](#talkdeskclientoptions).[`authorizationHeader`](#authorizationheader)

##### baseUrl?

```ts
optional baseUrl?: string;
```

###### Inherited from

[`TalkdeskClientOptions`](#talkdeskclientoptions).[`baseUrl`](#baseurl)

##### defaultHandoffPath?

```ts
optional defaultHandoffPath?: string;
```

###### Inherited from

[`TalkdeskClientOptions`](#talkdeskclientoptions).[`defaultHandoffPath`](#defaulthandoffpath)

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

[`TalkdeskClientOptions`](#talkdeskclientoptions).[`fetch`](#fetch)

##### providerClient?

```ts
optional providerClient?: TalkdeskProviderClient;
```

###### Inherited from

[`TalkdeskClientOptions`](#talkdeskclientoptions).[`providerClient`](#providerclient-1)

##### readinessPath?

```ts
optional readinessPath?: string;
```

###### Inherited from

[`TalkdeskClientOptions`](#talkdeskclientoptions).[`readinessPath`](#readinesspath)

##### retry?

```ts
optional retry?: number | ProviderRestRetryOptions;
```

###### Inherited from

[`TalkdeskClientOptions`](#talkdeskclientoptions).[`retry`](#retry)

##### signal?

```ts
optional signal?: AbortSignal;
```

###### Inherited from

[`TalkdeskClientOptions`](#talkdeskclientoptions).[`signal`](#signal)

##### talkdeskClient?

```ts
optional talkdeskClient?: TalkdeskClient;
```

##### timeoutMs?

```ts
optional timeoutMs?: number;
```

###### Inherited from

[`TalkdeskClientOptions`](#talkdeskclientoptions).[`timeoutMs`](#timeoutms)

***

### TalkdeskOperationInput

#### Extended by

- [`TalkdeskReviewedOperationInput`](#talkdeskreviewedoperationinput)

#### Properties

##### body?

```ts
optional body?: ProviderJsonObject;
```

##### idempotencyKey?

```ts
optional idempotencyKey?: string;
```

##### query?

```ts
optional query?: Record<string, ProviderQueryValue>;
```

***

### TalkdeskProviderClient

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

##### createTask()

```ts
createTask(input): Promise<ProviderJsonObject>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`TalkdeskReviewedOperationInput`](#talkdeskreviewedoperationinput) |

###### Returns

`Promise`\<[`ProviderJsonObject`](#providerjsonobject)\>

##### readiness()?

```ts
optional readiness(): Promise<ProviderJsonObject>;
```

###### Returns

`Promise`\<[`ProviderJsonObject`](#providerjsonobject)\>

##### scheduleCallback()

```ts
scheduleCallback(input): Promise<ProviderJsonObject>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`TalkdeskReviewedOperationInput`](#talkdeskreviewedoperationinput) |

###### Returns

`Promise`\<[`ProviderJsonObject`](#providerjsonobject)\>

***

### TalkdeskReviewedOperationInput

#### Extends

- [`TalkdeskOperationInput`](#talkdeskoperationinput)

#### Properties

##### body?

```ts
optional body?: ProviderJsonObject;
```

###### Inherited from

[`TalkdeskOperationInput`](#talkdeskoperationinput).[`body`](#body)

##### idempotencyKey?

```ts
optional idempotencyKey?: string;
```

###### Inherited from

[`TalkdeskOperationInput`](#talkdeskoperationinput).[`idempotencyKey`](#idempotencykey-1)

##### method

```ts
method: ProviderHttpMethod;
```

##### operationId

```ts
operationId: TalkdeskReviewedOperationId;
```

##### path

```ts
path: string;
```

##### query?

```ts
optional query?: Record<string, ProviderQueryValue>;
```

###### Inherited from

[`TalkdeskOperationInput`](#talkdeskoperationinput).[`query`](#query-1)

## Type Aliases

### ProviderJsonObject

```ts
type ProviderJsonObject = {
[key: string]: TalkdeskJsonValue;
};
```

#### Index Signature

```ts
[key: string]: TalkdeskJsonValue
```

***

### TalkdeskJsonValue

```ts
type TalkdeskJsonValue =
  | string
  | number
  | boolean
  | null
  | ProviderJsonObject
  | readonly TalkdeskJsonValue[];
```

***

### TalkdeskReviewedOperationId

```ts
type TalkdeskReviewedOperationId = "calls-callback-post" | "CreatingACase";
```

## Functions

### createTalkdeskClient()

```ts
function createTalkdeskClient(options?): TalkdeskClient;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options?` | [`TalkdeskClientOptions`](#talkdeskclientoptions) |

#### Returns

[`TalkdeskClient`](#talkdeskclient)

***

### createTalkdeskIntegration()

```ts
function createTalkdeskIntegration(options?): DefinedIntegration<{
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
     capability: "create-provider-object";
     exposesSensitiveData: true;
     providerObjects: readonly [{
        kind: "contact-center-task";
        label: "Contact Center Task";
     }];
     requiresCredential: true;
     sideEffect: true;
  }];
  category: "contact-center";
  channelAudiences: readonly ["customer-facing", "internal-support", "mixed"];
  coverage: {
     evidence: readonly [{
        label: "Talkdesk public OpenAPI bundle";
        url: "https://api-docs.talkdeskapp.com/public-api";
      }, {
        label: "Talkdesk Callback API";
        url: "https://docs.talkdesk.com/docs/callback-api";
     }];
     notes: readonly ["No suitable official npm REST SDK was verified.", "Runtime calls use a built-in REST adapter when baseUrl/API credentials are supplied, with TalkdeskProviderClient available as an override."];
     scope: "support-workflow-subset";
  };
  credentialRequirements: readonly [{
     id: "talkdesk-api-root";
     label: "Talkdesk localized API root";
     required: true;
   }, {
     id: "talkdesk-api-access";
     label: "Talkdesk OAuth access";
     required: true;
   }, {
     id: "talkdesk-routing";
     label: "Talkdesk callback/case routing configuration";
     required: false;
  }];
  directions: readonly ["inbound-only", "outbound-only", "bidirectional"];
  id: "contact-center.talkdesk";
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
           checksum: "sha256:aa27c72eff1b281fdebab70da85cb4cd30f98c37dd0465207f7bab00438be491";
           id: "calls-callback-post";
           method: "POST";
           path: "/calls/callback";
           source: "https://api-docs.talkdeskapp.com/public-api";
         }, {
           alias: "contact-center.task.create";
           checksum: "sha256:aa27c72eff1b281fdebab70da85cb4cd30f98c37dd0465207f7bab00438be491";
           id: "CreatingACase";
           method: "POST";
           path: "/cm/core/va/cases";
           source: "https://api-docs.talkdeskapp.com/public-api";
        }];
        implementationStrategy: "provider-rest-adapter";
        providerSdkDecision: {
           checkedAt: "2026-06-25";
           checkedPackages: readonly [{
              package: "@talkdesk/td-sdk";
              reason: "No public npm package exists under this likely official SDK name.";
              result: "not-published";
            }, {
              package: "@talkdesk/client-sdk";
              reason: "No public npm package exists under this likely official SDK name.";
              result: "not-published";
            }, {
              package: "@talkdesk/app-connect";
              reason: "No public npm package exists under this likely official SDK name.";
              result: "not-published";
           }];
           defaultRestPolicy: "fail-closed-provider-rest-adapter-with-typed-provider-client-override";
           result: "no-official-npm-rest-sdk";
           typedClientOverride: "TalkdeskProviderClient";
        };
        sdkDecision: "No suitable official npm REST SDK was verified; this package provides a built-in REST adapter with providerClient override.";
        verifiedAt: "2026-06-25";
     };
     manifestOnlySafe: true;
     providerRestAdapter: {
        adapterKind: "no-official-sdk-rest-adapter";
        providerClientOverride: "TalkdeskProviderClient";
        strategy: "provider-rest-adapter";
     };
     providerSdkDecision: {
        checkedAt: "2026-06-25";
        checkedPackages: readonly [{
           package: "@talkdesk/td-sdk";
           reason: "No public npm package exists under this likely official SDK name.";
           result: "not-published";
         }, {
           package: "@talkdesk/client-sdk";
           reason: "No public npm package exists under this likely official SDK name.";
           result: "not-published";
         }, {
           package: "@talkdesk/app-connect";
           reason: "No public npm package exists under this likely official SDK name.";
           result: "not-published";
        }];
        defaultRestPolicy: "fail-closed-provider-rest-adapter-with-typed-provider-client-override";
        result: "no-official-npm-rest-sdk";
        typedClientOverride: "TalkdeskProviderClient";
     };
  };
  name: "Talkdesk";
  operations: readonly [{
     alias: "contact-center.handoff.request";
     capability: "handoff";
     providerObject: "contactTransfer";
   }, {
     alias: "contact-center.callback.schedule";
     capability: "schedule";
     providerObject: "callback";
   }, {
     alias: "contact-center.task.create";
     capability: "create-provider-object";
     providerObject: "contact-center-task";
  }];
  packageName: "@cognidesk/integration-contact-center-talkdesk";
  provider: "talkdesk";
  trustLevel: "official";
}, unknown, {
  contact-center.callback.schedule: (input) => Promise<ProviderJsonObject>;
  contact-center.handoff.request: (input) => Promise<ProviderJsonObject>;
  contact-center.task.create: (input) => Promise<ProviderJsonObject>;
}>;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options?` | [`TalkdeskIntegrationOptions`](#talkdeskintegrationoptions) |

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
     `capability`: `"create-provider-object"`;
     `exposesSensitiveData`: `true`;
     `providerObjects`: readonly \[\{
        `kind`: `"contact-center-task"`;
        `label`: `"Contact Center Task"`;
     \}\];
     `requiresCredential`: `true`;
     `sideEffect`: `true`;
  \}\];
  `category`: `"contact-center"`;
  `channelAudiences`: readonly \[`"customer-facing"`, `"internal-support"`, `"mixed"`\];
  `coverage`: \{
     `evidence`: readonly \[\{
        `label`: `"Talkdesk public OpenAPI bundle"`;
        `url`: `"https://api-docs.talkdeskapp.com/public-api"`;
      \}, \{
        `label`: `"Talkdesk Callback API"`;
        `url`: `"https://docs.talkdesk.com/docs/callback-api"`;
     \}\];
     `notes`: readonly \[`"No suitable official npm REST SDK was verified."`, `"Runtime calls use a built-in REST adapter when baseUrl/API credentials are supplied, with TalkdeskProviderClient available as an override."`\];
     `scope`: `"support-workflow-subset"`;
  \};
  `credentialRequirements`: readonly \[\{
     `id`: `"talkdesk-api-root"`;
     `label`: `"Talkdesk localized API root"`;
     `required`: `true`;
   \}, \{
     `id`: `"talkdesk-api-access"`;
     `label`: `"Talkdesk OAuth access"`;
     `required`: `true`;
   \}, \{
     `id`: `"talkdesk-routing"`;
     `label`: `"Talkdesk callback/case routing configuration"`;
     `required`: `false`;
  \}\];
  `directions`: readonly \[`"inbound-only"`, `"outbound-only"`, `"bidirectional"`\];
  `id`: `"contact-center.talkdesk"`;
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
           `checksum`: `"sha256:aa27c72eff1b281fdebab70da85cb4cd30f98c37dd0465207f7bab00438be491"`;
           `id`: `"calls-callback-post"`;
           `method`: `"POST"`;
           `path`: `"/calls/callback"`;
           `source`: `"https://api-docs.talkdeskapp.com/public-api"`;
         \}, \{
           `alias`: `"contact-center.task.create"`;
           `checksum`: `"sha256:aa27c72eff1b281fdebab70da85cb4cd30f98c37dd0465207f7bab00438be491"`;
           `id`: `"CreatingACase"`;
           `method`: `"POST"`;
           `path`: `"/cm/core/va/cases"`;
           `source`: `"https://api-docs.talkdeskapp.com/public-api"`;
        \}\];
        `implementationStrategy`: `"provider-rest-adapter"`;
        `providerSdkDecision`: \{
           `checkedAt`: `"2026-06-25"`;
           `checkedPackages`: readonly \[\{
              `package`: `"@talkdesk/td-sdk"`;
              `reason`: `"No public npm package exists under this likely official SDK name."`;
              `result`: `"not-published"`;
            \}, \{
              `package`: `"@talkdesk/client-sdk"`;
              `reason`: `"No public npm package exists under this likely official SDK name."`;
              `result`: `"not-published"`;
            \}, \{
              `package`: `"@talkdesk/app-connect"`;
              `reason`: `"No public npm package exists under this likely official SDK name."`;
              `result`: `"not-published"`;
           \}\];
           `defaultRestPolicy`: `"fail-closed-provider-rest-adapter-with-typed-provider-client-override"`;
           `result`: `"no-official-npm-rest-sdk"`;
           `typedClientOverride`: `"TalkdeskProviderClient"`;
        \};
        `sdkDecision`: `"No suitable official npm REST SDK was verified; this package provides a built-in REST adapter with providerClient override."`;
        `verifiedAt`: `"2026-06-25"`;
     \};
     `manifestOnlySafe`: `true`;
     `providerRestAdapter`: \{
        `adapterKind`: `"no-official-sdk-rest-adapter"`;
        `providerClientOverride`: `"TalkdeskProviderClient"`;
        `strategy`: `"provider-rest-adapter"`;
     \};
     `providerSdkDecision`: \{
        `checkedAt`: `"2026-06-25"`;
        `checkedPackages`: readonly \[\{
           `package`: `"@talkdesk/td-sdk"`;
           `reason`: `"No public npm package exists under this likely official SDK name."`;
           `result`: `"not-published"`;
         \}, \{
           `package`: `"@talkdesk/client-sdk"`;
           `reason`: `"No public npm package exists under this likely official SDK name."`;
           `result`: `"not-published"`;
         \}, \{
           `package`: `"@talkdesk/app-connect"`;
           `reason`: `"No public npm package exists under this likely official SDK name."`;
           `result`: `"not-published"`;
        \}\];
        `defaultRestPolicy`: `"fail-closed-provider-rest-adapter-with-typed-provider-client-override"`;
        `result`: `"no-official-npm-rest-sdk"`;
        `typedClientOverride`: `"TalkdeskProviderClient"`;
     \};
  \};
  `name`: `"Talkdesk"`;
  `operations`: readonly \[\{
     `alias`: `"contact-center.handoff.request"`;
     `capability`: `"handoff"`;
     `providerObject`: `"contactTransfer"`;
   \}, \{
     `alias`: `"contact-center.callback.schedule"`;
     `capability`: `"schedule"`;
     `providerObject`: `"callback"`;
   \}, \{
     `alias`: `"contact-center.task.create"`;
     `capability`: `"create-provider-object"`;
     `providerObject`: `"contact-center-task"`;
  \}\];
  `packageName`: `"@cognidesk/integration-contact-center-talkdesk"`;
  `provider`: `"talkdesk"`;
  `trustLevel`: `"official"`;
\}, `unknown`, \{
  `contact-center.callback.schedule`: (`input`) => `Promise`\<[`ProviderJsonObject`](#providerjsonobject)\>;
  `contact-center.handoff.request`: (`input`) => `Promise`\<[`ProviderJsonObject`](#providerjsonobject)\>;
  `contact-center.task.create`: (`input`) => `Promise`\<[`ProviderJsonObject`](#providerjsonobject)\>;
\}\>

***

### createTalkdeskIntegrationOperationHandlers()

```ts
function createTalkdeskIntegrationOperationHandlers(options?): {
  contact-center.callback.schedule: (input) => Promise<ProviderJsonObject>;
  contact-center.handoff.request: (input) => Promise<ProviderJsonObject>;
  contact-center.task.create: (input) => Promise<ProviderJsonObject>;
};
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options?` | [`TalkdeskIntegrationOptions`](#talkdeskintegrationoptions) |

#### Returns

```ts
{
  contact-center.callback.schedule: (input) => Promise<ProviderJsonObject>;
  contact-center.handoff.request: (input) => Promise<ProviderJsonObject>;
  contact-center.task.create: (input) => Promise<ProviderJsonObject>;
}
```

| Name | Type |
| ------ | ------ |
| `contact-center.callback.schedule()` | (`input`) => `Promise`\<[`ProviderJsonObject`](#providerjsonobject)\> |
| `contact-center.handoff.request()` | (`input`) => `Promise`\<[`ProviderJsonObject`](#providerjsonobject)\> |
| `contact-center.task.create()` | (`input`) => `Promise`\<[`ProviderJsonObject`](#providerjsonobject)\> |

## References

### talkdeskProviderManifest

Re-exports [talkdeskProviderManifest](dist/manifest.md#talkdeskprovidermanifest)

***

### talkdeskProviderManifestInput

Re-exports [talkdeskProviderManifestInput](dist/manifest.md#talkdeskprovidermanifestinput)

***

### talkdeskSupportSlice

Re-exports [talkdeskSupportSlice](dist/manifest.md#talkdesksupportslice)
