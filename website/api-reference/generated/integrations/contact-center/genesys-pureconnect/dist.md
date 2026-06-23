# integrations/contact-center/genesys-pureconnect/dist

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

### GenesysPureConnectClient

#### Methods

##### createConnection()

```ts
createConnection(input?): Promise<ProviderJsonObject>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input?` | [`GenesysPureConnectOperationInput`](#genesyspureconnectoperationinput) |

###### Returns

`Promise`\<[`ProviderJsonObject`](#providerjsonobject)\>

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

***

### GenesysPureConnectClientOptions

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

### GenesysPureConnectOperationInput

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

- [`GenesysPureConnectOperationInput`](#genesyspureconnectoperationinput)

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

[`GenesysPureConnectOperationInput`](#genesyspureconnectoperationinput).[`body`](#body)

##### classification?

```ts
optional classification?: string;
```

##### headers?

```ts
optional headers?: Record<string, string>;
```

###### Inherited from

[`GenesysPureConnectOperationInput`](#genesyspureconnectoperationinput).[`headers`](#headers)

##### idempotencyKey?

```ts
optional idempotencyKey?: string;
```

###### Inherited from

[`GenesysPureConnectOperationInput`](#genesyspureconnectoperationinput).[`idempotencyKey`](#idempotencykey-1)

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

[`GenesysPureConnectOperationInput`](#genesyspureconnectoperationinput).[`pathParams`](#pathparams)

##### query?

```ts
optional query?: Record<string, ProviderQueryValue>;
```

###### Inherited from

[`GenesysPureConnectOperationInput`](#genesyspureconnectoperationinput).[`query`](#query-1)

## Type Aliases

### ProviderJsonObject

```ts
type ProviderJsonObject = Record<string, unknown>;
```

## Functions

### createGenesysPureConnectClient()

```ts
function createGenesysPureConnectClient(options): GenesysPureConnectClient;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`GenesysPureConnectClientOptions`](#genesyspureconnectclientoptions) |

#### Returns

[`GenesysPureConnectClient`](#genesyspureconnectclient)

***

### createGenesysPureConnectIntegration()

```ts
function createGenesysPureConnectIntegration(options): DefinedIntegration<{
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
     capability: "create-provider-object";
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
        label: "PureConnect ICWS connection";
        url: "https://help.genesys.com/developer/cic/docs/icws/webhelp/icws/connection/index.htm";
      }, {
        label: "PureConnect ICWS interactions";
        url: "https://help.genesys.com/staging/developer/root/cic/docs/icws/webhelp/icws/%28sessionId%29/interactions/Interactions.htm";
     }];
     notes: readonly ["No viable official JavaScript SDK was verified for PureConnect ICWS or Interaction Web Tools; the package keeps selected ICWS support operations."];
     scope: "support-workflow-subset";
  };
  credentialRequirements: readonly [{
     id: "genesys-pureconnect-icws-base-url";
     label: "PureConnect ICWS base URL";
     required: true;
   }, {
     id: "genesys-pureconnect-session";
     label: "PureConnect ICWS session/authentication";
     required: false;
   }, {
     id: "genesys-pureconnect-routing";
     label: "PureConnect Interaction Web Tools routing configuration";
     required: false;
  }];
  directions: readonly ["inbound-only", "outbound-only", "bidirectional"];
  id: "contact-center.genesys-pureconnect";
  maintainers: readonly [{
     name: "Cognidesk";
     type: "official";
  }];
  metadata: {
     implementation: {
        allowedOperations: readonly [{
           alias: "genesys-pureconnect.icws.connect";
           checksum: "not-available-html-doc";
           id: "createConnection";
           method: "POST";
           path: "/icws/connection";
           source: "https://help.genesys.com/developer/cic/docs/icws/webhelp/icws/connection/index.htm";
         }, {
           alias: "genesys-pureconnect.icws.request";
           checksum: "not-applicable-host-configured";
           id: "sessionRequest";
           method: "GET";
           path: "host-configured-icws-session-path";
           source: "host-configured";
        }];
        implementationStrategy: "generated-support-slice";
        sdkDecision: "No viable official JavaScript SDK was verified for PureConnect ICWS or Interaction Web Tools; the package keeps selected ICWS support operations.";
        verifiedAt: "2026-06-21";
     };
     manifestOnlySafe: true;
  };
  name: "Genesys PureConnect / ICWS";
  operations: readonly [{
     alias: "contact-center.handoff.request";
     capability: "handoff";
     providerObject: "contactTransfer";
   }, {
     alias: "genesys-pureconnect.icws.connect";
     capability: "create-provider-object";
     extension: true;
     providerObject: "contact";
   }, {
     alias: "genesys-pureconnect.icws.request";
     capability: "read-provider-object";
     extension: true;
     providerObject: "contact";
  }];
  packageName: "@cognidesk/integration-contact-center-genesys-pureconnect";
  provider: "genesys-pureconnect";
  trustLevel: "official";
}, unknown, {
  contact-center.handoff.request: (input) => Promise<ProviderJsonObject>;
  genesys-pureconnect.icws.connect: (input) => Promise<ProviderJsonObject>;
  genesys-pureconnect.icws.request: (input) => Promise<ProviderJsonObject>;
}>;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`GenesysPureConnectClientOptions`](#genesyspureconnectclientoptions) |

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
     `capability`: `"create-provider-object"`;
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
        `label`: `"PureConnect ICWS connection"`;
        `url`: `"https://help.genesys.com/developer/cic/docs/icws/webhelp/icws/connection/index.htm"`;
      \}, \{
        `label`: `"PureConnect ICWS interactions"`;
        `url`: `"https://help.genesys.com/staging/developer/root/cic/docs/icws/webhelp/icws/%28sessionId%29/interactions/Interactions.htm"`;
     \}\];
     `notes`: readonly \[`"No viable official JavaScript SDK was verified for PureConnect ICWS or Interaction Web Tools; the package keeps selected ICWS support operations."`\];
     `scope`: `"support-workflow-subset"`;
  \};
  `credentialRequirements`: readonly \[\{
     `id`: `"genesys-pureconnect-icws-base-url"`;
     `label`: `"PureConnect ICWS base URL"`;
     `required`: `true`;
   \}, \{
     `id`: `"genesys-pureconnect-session"`;
     `label`: `"PureConnect ICWS session/authentication"`;
     `required`: `false`;
   \}, \{
     `id`: `"genesys-pureconnect-routing"`;
     `label`: `"PureConnect Interaction Web Tools routing configuration"`;
     `required`: `false`;
  \}\];
  `directions`: readonly \[`"inbound-only"`, `"outbound-only"`, `"bidirectional"`\];
  `id`: `"contact-center.genesys-pureconnect"`;
  `maintainers`: readonly \[\{
     `name`: `"Cognidesk"`;
     `type`: `"official"`;
  \}\];
  `metadata`: \{
     `implementation`: \{
        `allowedOperations`: readonly \[\{
           `alias`: `"genesys-pureconnect.icws.connect"`;
           `checksum`: `"not-available-html-doc"`;
           `id`: `"createConnection"`;
           `method`: `"POST"`;
           `path`: `"/icws/connection"`;
           `source`: `"https://help.genesys.com/developer/cic/docs/icws/webhelp/icws/connection/index.htm"`;
         \}, \{
           `alias`: `"genesys-pureconnect.icws.request"`;
           `checksum`: `"not-applicable-host-configured"`;
           `id`: `"sessionRequest"`;
           `method`: `"GET"`;
           `path`: `"host-configured-icws-session-path"`;
           `source`: `"host-configured"`;
        \}\];
        `implementationStrategy`: `"generated-support-slice"`;
        `sdkDecision`: `"No viable official JavaScript SDK was verified for PureConnect ICWS or Interaction Web Tools; the package keeps selected ICWS support operations."`;
        `verifiedAt`: `"2026-06-21"`;
     \};
     `manifestOnlySafe`: `true`;
  \};
  `name`: `"Genesys PureConnect / ICWS"`;
  `operations`: readonly \[\{
     `alias`: `"contact-center.handoff.request"`;
     `capability`: `"handoff"`;
     `providerObject`: `"contactTransfer"`;
   \}, \{
     `alias`: `"genesys-pureconnect.icws.connect"`;
     `capability`: `"create-provider-object"`;
     `extension`: `true`;
     `providerObject`: `"contact"`;
   \}, \{
     `alias`: `"genesys-pureconnect.icws.request"`;
     `capability`: `"read-provider-object"`;
     `extension`: `true`;
     `providerObject`: `"contact"`;
  \}\];
  `packageName`: `"@cognidesk/integration-contact-center-genesys-pureconnect"`;
  `provider`: `"genesys-pureconnect"`;
  `trustLevel`: `"official"`;
\}, `unknown`, \{
  `contact-center.handoff.request`: (`input`) => `Promise`\<[`ProviderJsonObject`](#providerjsonobject)\>;
  `genesys-pureconnect.icws.connect`: (`input`) => `Promise`\<[`ProviderJsonObject`](#providerjsonobject)\>;
  `genesys-pureconnect.icws.request`: (`input`) => `Promise`\<[`ProviderJsonObject`](#providerjsonobject)\>;
\}\>

## References

### genesysPureConnectProviderManifest

Re-exports [genesysPureConnectProviderManifest](dist/manifest.md#genesyspureconnectprovidermanifest)

***

### genesysPureConnectProviderManifestInput

Re-exports [genesysPureConnectProviderManifestInput](dist/manifest.md#genesyspureconnectprovidermanifestinput)

***

### genesysPureConnectSupportSlice

Re-exports [genesysPureConnectSupportSlice](dist/manifest.md#genesyspureconnectsupportslice)
