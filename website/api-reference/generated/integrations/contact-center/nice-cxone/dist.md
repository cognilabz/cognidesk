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

## Type Aliases

### ProviderJsonObject

```ts
type ProviderJsonObject = Record<string, unknown>;
```

## Functions

### createNiceCxoneClient()

```ts
function createNiceCxoneClient(options): NiceCxoneClient;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`NiceCxoneClientOptions`](#nicecxoneclientoptions) |

#### Returns

[`NiceCxoneClient`](#nicecxoneclient)

***

### createNiceCxoneIntegration()

```ts
function createNiceCxoneIntegration(options): DefinedIntegration<{
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
        label: "NICE CXone Agent SDK";
        url: "https://github.com/nice-devone/nice-cxone-agent-sdk";
     }];
     notes: readonly ["Maintained NICE @nice-devone SDKs exist but are UNLICENSED and focus on agent/browser/digital SDK surfaces; this package keeps a reviewed support slice."];
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
        allowedOperations: readonly [{
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
        }];
        implementationStrategy: "generated-support-slice";
        sdkDecision: "Maintained NICE @nice-devone SDKs exist but are UNLICENSED and focus on agent/browser/digital SDK surfaces; this package keeps a reviewed support slice.";
        verifiedAt: "2026-06-21";
     };
     manifestOnlySafe: true;
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
| `options` | [`NiceCxoneClientOptions`](#nicecxoneclientoptions) |

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
        `label`: `"NICE CXone Agent SDK"`;
        `url`: `"https://github.com/nice-devone/nice-cxone-agent-sdk"`;
     \}\];
     `notes`: readonly \[`"Maintained NICE @nice-devone SDKs exist but are UNLICENSED and focus on agent/browser/digital SDK surfaces; this package keeps a reviewed support slice."`\];
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
        `allowedOperations`: readonly \[\{
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
        \}\];
        `implementationStrategy`: `"generated-support-slice"`;
        `sdkDecision`: `"Maintained NICE @nice-devone SDKs exist but are UNLICENSED and focus on agent/browser/digital SDK surfaces; this package keeps a reviewed support slice."`;
        `verifiedAt`: `"2026-06-21"`;
     \};
     `manifestOnlySafe`: `true`;
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

## References

### niceCxoneProviderManifest

Re-exports [niceCxoneProviderManifest](dist/manifest.md#nicecxoneprovidermanifest)

***

### niceCxoneProviderManifestInput

Re-exports [niceCxoneProviderManifestInput](dist/manifest.md#nicecxoneprovidermanifestinput)

***

### niceCxoneSupportSlice

Re-exports [niceCxoneSupportSlice](dist/manifest.md#nicecxonesupportslice)
