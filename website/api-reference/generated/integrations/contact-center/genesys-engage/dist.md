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

## Type Aliases

### ProviderJsonObject

```ts
type ProviderJsonObject = Record<string, unknown>;
```

## Functions

### createGenesysEngageClient()

```ts
function createGenesysEngageClient(options): GenesysEngageClient;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`GenesysEngageClientOptions`](#genesysengageclientoptions) |

#### Returns

[`GenesysEngageClient`](#genesysengageclient)

***

### createGenesysEngageIntegration()

```ts
function createGenesysEngageIntegration(options): DefinedIntegration<{
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
     capability: "send";
     exposesSensitiveData: true;
     providerObjects: readonly [{
        kind: "contact";
        label: "contact";
     }];
     requiresCredential: true;
     sideEffect: true;
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
     }];
     notes: readonly ["No viable GMS Chat API v2 or Engage Callback JavaScript SDK was verified; the package keeps selected GMS support operations."];
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
        allowedOperations: readonly [{
           alias: "contact-center.callback.schedule";
           checksum: "not-available-html-doc";
           id: "createCallback";
           method: "POST";
           path: "/genesys/1/service/callback/{serviceName}";
           source: "https://docs.genesys.com/Documentation/GMS/latest/API/CallbackServicesAPI";
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
        }];
        implementationStrategy: "generated-support-slice";
        sdkDecision: "No viable GMS Chat API v2 or Engage Callback JavaScript SDK was verified; the package keeps selected GMS support operations.";
        verifiedAt: "2026-06-21";
     };
     manifestOnlySafe: true;
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
  }];
  packageName: "@cognidesk/integration-contact-center-genesys-engage";
  provider: "genesys-engage";
  trustLevel: "official";
}, unknown, {
  contact-center.callback.schedule: (input) => Promise<ProviderJsonObject>;
  contact-center.contact.start: (input) => Promise<ProviderJsonObject>;
  contact-center.handoff.request: (input) => Promise<ProviderJsonObject>;
  genesys-engage.chat.send: (input) => Promise<ProviderJsonObject>;
}>;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`GenesysEngageClientOptions`](#genesysengageclientoptions) |

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
     `capability`: `"send"`;
     `exposesSensitiveData`: `true`;
     `providerObjects`: readonly \[\{
        `kind`: `"contact"`;
        `label`: `"contact"`;
     \}\];
     `requiresCredential`: `true`;
     `sideEffect`: `true`;
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
     \}\];
     `notes`: readonly \[`"No viable GMS Chat API v2 or Engage Callback JavaScript SDK was verified; the package keeps selected GMS support operations."`\];
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
        `allowedOperations`: readonly \[\{
           `alias`: `"contact-center.callback.schedule"`;
           `checksum`: `"not-available-html-doc"`;
           `id`: `"createCallback"`;
           `method`: `"POST"`;
           `path`: `"/genesys/1/service/callback/{serviceName}"`;
           `source`: `"https://docs.genesys.com/Documentation/GMS/latest/API/CallbackServicesAPI"`;
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
        \}\];
        `implementationStrategy`: `"generated-support-slice"`;
        `sdkDecision`: `"No viable GMS Chat API v2 or Engage Callback JavaScript SDK was verified; the package keeps selected GMS support operations."`;
        `verifiedAt`: `"2026-06-21"`;
     \};
     `manifestOnlySafe`: `true`;
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
  \}\];
  `packageName`: `"@cognidesk/integration-contact-center-genesys-engage"`;
  `provider`: `"genesys-engage"`;
  `trustLevel`: `"official"`;
\}, `unknown`, \{
  `contact-center.callback.schedule`: (`input`) => `Promise`\<[`ProviderJsonObject`](#providerjsonobject)\>;
  `contact-center.contact.start`: (`input`) => `Promise`\<[`ProviderJsonObject`](#providerjsonobject)\>;
  `contact-center.handoff.request`: (`input`) => `Promise`\<[`ProviderJsonObject`](#providerjsonobject)\>;
  `genesys-engage.chat.send`: (`input`) => `Promise`\<[`ProviderJsonObject`](#providerjsonobject)\>;
\}\>

## References

### genesysEngageProviderManifest

Re-exports [genesysEngageProviderManifest](dist/manifest.md#genesysengageprovidermanifest)

***

### genesysEngageProviderManifestInput

Re-exports [genesysEngageProviderManifestInput](dist/manifest.md#genesysengageprovidermanifestinput)

***

### genesysEngageSupportSlice

Re-exports [genesysEngageSupportSlice](dist/manifest.md#genesysengagesupportslice)
