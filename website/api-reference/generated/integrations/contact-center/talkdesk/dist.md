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
optional payload?: unknown;
```

##### query?

```ts
optional query?: Record<string, ProviderQueryValue>;
```

***

### ProviderExtensionRequestInput

#### Extends

- [`TalkdeskOperationInput`](#talkdeskoperationinput)

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

[`TalkdeskOperationInput`](#talkdeskoperationinput).[`body`](#body-1)

##### classification?

```ts
optional classification?: string;
```

##### headers?

```ts
optional headers?: Record<string, string>;
```

###### Inherited from

[`TalkdeskOperationInput`](#talkdeskoperationinput).[`headers`](#headers-1)

##### idempotencyKey?

```ts
optional idempotencyKey?: string;
```

###### Inherited from

[`TalkdeskOperationInput`](#talkdeskoperationinput).[`idempotencyKey`](#idempotencykey-2)

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

[`TalkdeskOperationInput`](#talkdeskoperationinput).[`pathParams`](#pathparams-1)

##### query?

```ts
optional query?: Record<string, ProviderQueryValue>;
```

###### Inherited from

[`TalkdeskOperationInput`](#talkdeskoperationinput).[`query`](#query-2)

***

### TalkdeskClient

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

### TalkdeskOperationInput

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

## Type Aliases

### ProviderJsonObject

```ts
type ProviderJsonObject = Record<string, unknown>;
```

## Functions

### createTalkdeskClient()

```ts
function createTalkdeskClient(options): TalkdeskClient;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`TalkdeskClientOptions`](#talkdeskclientoptions) |

#### Returns

[`TalkdeskClient`](#talkdeskclient)

***

### createTalkdeskIntegration()

```ts
function createTalkdeskIntegration(options): DefinedIntegration<{
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
     notes: readonly ["No viable official npm REST SDK was verified; this package keeps selected official OpenAPI operations for callback and case creation."];
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
        allowedOperations: readonly [{
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
        implementationStrategy: "generated-support-slice";
        sdkDecision: "No viable official npm REST SDK was verified; this package keeps selected official OpenAPI operations for callback and case creation.";
        verifiedAt: "2026-06-21";
     };
     manifestOnlySafe: true;
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
| `options` | [`TalkdeskClientOptions`](#talkdeskclientoptions) |

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
     `notes`: readonly \[`"No viable official npm REST SDK was verified; this package keeps selected official OpenAPI operations for callback and case creation."`\];
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
        `allowedOperations`: readonly \[\{
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
        `implementationStrategy`: `"generated-support-slice"`;
        `sdkDecision`: `"No viable official npm REST SDK was verified; this package keeps selected official OpenAPI operations for callback and case creation."`;
        `verifiedAt`: `"2026-06-21"`;
     \};
     `manifestOnlySafe`: `true`;
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

## References

### talkdeskProviderManifest

Re-exports [talkdeskProviderManifest](dist/manifest.md#talkdeskprovidermanifest)

***

### talkdeskProviderManifestInput

Re-exports [talkdeskProviderManifestInput](dist/manifest.md#talkdeskprovidermanifestinput)

***

### talkdeskSupportSlice

Re-exports [talkdeskSupportSlice](dist/manifest.md#talkdesksupportslice)
