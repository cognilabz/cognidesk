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

#### Properties

##### providerClient

```ts
providerClient: GenesysPureConnectProviderClient;
```

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

#### Extended by

- [`GenesysPureConnectIntegrationOptions`](#genesyspureconnectintegrationoptions)

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
optional providerClient?: GenesysPureConnectProviderClient;
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

### GenesysPureConnectIntegrationOptions

#### Extends

- [`GenesysPureConnectClientOptions`](#genesyspureconnectclientoptions)

#### Properties

##### accessToken?

```ts
optional accessToken?: string;
```

###### Inherited from

[`GenesysPureConnectClientOptions`](#genesyspureconnectclientoptions).[`accessToken`](#accesstoken)

##### apiBaseUrl?

```ts
optional apiBaseUrl?: string;
```

###### Inherited from

[`GenesysPureConnectClientOptions`](#genesyspureconnectclientoptions).[`apiBaseUrl`](#apibaseurl)

##### apiKey?

```ts
optional apiKey?: string;
```

###### Inherited from

[`GenesysPureConnectClientOptions`](#genesyspureconnectclientoptions).[`apiKey`](#apikey)

##### apiKeyHeaderName?

```ts
optional apiKeyHeaderName?: string;
```

###### Inherited from

[`GenesysPureConnectClientOptions`](#genesyspureconnectclientoptions).[`apiKeyHeaderName`](#apikeyheadername)

##### authorizationHeader?

```ts
optional authorizationHeader?: string;
```

###### Inherited from

[`GenesysPureConnectClientOptions`](#genesyspureconnectclientoptions).[`authorizationHeader`](#authorizationheader)

##### baseUrl?

```ts
optional baseUrl?: string;
```

###### Inherited from

[`GenesysPureConnectClientOptions`](#genesyspureconnectclientoptions).[`baseUrl`](#baseurl)

##### defaultHandoffPath?

```ts
optional defaultHandoffPath?: string;
```

###### Inherited from

[`GenesysPureConnectClientOptions`](#genesyspureconnectclientoptions).[`defaultHandoffPath`](#defaulthandoffpath)

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

[`GenesysPureConnectClientOptions`](#genesyspureconnectclientoptions).[`fetch`](#fetch)

##### genesysPureConnectClient?

```ts
optional genesysPureConnectClient?: GenesysPureConnectClient;
```

##### providerClient?

```ts
optional providerClient?: GenesysPureConnectProviderClient;
```

###### Inherited from

[`GenesysPureConnectClientOptions`](#genesyspureconnectclientoptions).[`providerClient`](#providerclient-1)

##### readinessPath?

```ts
optional readinessPath?: string;
```

###### Inherited from

[`GenesysPureConnectClientOptions`](#genesyspureconnectclientoptions).[`readinessPath`](#readinesspath)

##### retry?

```ts
optional retry?: number | ProviderRestRetryOptions;
```

###### Inherited from

[`GenesysPureConnectClientOptions`](#genesyspureconnectclientoptions).[`retry`](#retry)

##### signal?

```ts
optional signal?: AbortSignal;
```

###### Inherited from

[`GenesysPureConnectClientOptions`](#genesyspureconnectclientoptions).[`signal`](#signal)

##### timeoutMs?

```ts
optional timeoutMs?: number;
```

###### Inherited from

[`GenesysPureConnectClientOptions`](#genesyspureconnectclientoptions).[`timeoutMs`](#timeoutms)

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

### GenesysPureConnectProviderClient

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

##### readiness()?

```ts
optional readiness(): Promise<ProviderJsonObject>;
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

##### hostReviewedPath?

```ts
optional hostReviewedPath?: boolean;
```

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

### ProviderJsonObject

```ts
type ProviderJsonObject = Record<string, unknown>;
```

## Functions

### createGenesysPureConnectClient()

```ts
function createGenesysPureConnectClient(options?): GenesysPureConnectClient;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options?` | [`GenesysPureConnectClientOptions`](#genesyspureconnectclientoptions) |

#### Returns

[`GenesysPureConnectClient`](#genesyspureconnectclient)

***

### createGenesysPureConnectIntegration()

```ts
function createGenesysPureConnectIntegration(options?): DefinedIntegration<{
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
        url: "https://help.genesys.com/developer/cic/docs/icws/webhelp/icws/%28sessionId%29/interactions/Interactions.htm";
      }, {
        label: "PureConnect ICWS SDK";
        url: "https://help.genesys.com/pureconnect/mergedprojects/wh_tr/mergedprojects/wh_tr_installation_and_configuration/desktop/interaction_center_web_services_icws_sdk.htm";
      }, {
        label: "NPM ICWS candidate machinepack-ic";
        url: "https://www.npmjs.com/package/machinepack-ic";
     }];
     notes: readonly ["No maintained Genesys PureConnect ICWS npm runtime SDK was verified.", "Official PureConnect ICWS SDK documentation describes a REST API and API documentation rather than a maintained npm runtime client.", "Runtime calls use a typed REST adapter for reviewed endpoints when baseUrl/API credentials are supplied, with GenesysPureConnectProviderClient available as a host-client override.", "Host-configured ICWS session paths require explicit hostReviewedPath=true and a host policy classification before requests are dispatched."];
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
        adapterKind: "no-official-sdk-rest-adapter";
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
           requiresHostReviewedPath: true;
           source: "host-configured";
        }];
        implementationStrategy: "provider-rest-adapter";
        providerSdkDecision: {
           checkedAt: "2026-06-25";
           checkedPackages: readonly [{
              package: "genesys-pureconnect";
              reason: "No npm package with this official PureConnect runtime SDK name was found.";
              result: "not-published";
            }, {
              package: "pureconnect";
              reason: "No npm package with this official PureConnect runtime SDK name was found.";
              result: "not-published";
            }, {
              checkedVersion: "0.1.0";
              license: "MIT";
              package: "machinepack-ic";
              reason: "Third-party ICWS wrapper, not an official maintained Genesys PureConnect runtime SDK.";
              result: "third-party-unmaintained-icws-package";
            }, {
              checkedVersion: "255.1.0";
              license: "MIT";
              package: "purecloud-platform-client-v2";
              reason: "Maintained SDK targets Genesys Cloud Platform APIs, not PureConnect ICWS.";
              result: "genesys-cloud-sdk-not-pureconnect-icws";
           }];
           defaultRestPolicy: "fail-closed-icws-rest-adapter-with-typed-provider-client-override";
           result: "no-maintained-official-pureconnect-icws-npm-sdk";
           typedClientOverride: "GenesysPureConnectProviderClient";
        };
        sdkAudit: {
           checkedPackages: readonly [{
              name: "genesys-pureconnect";
              result: "not-published";
            }, {
              name: "pureconnect";
              result: "not-published";
            }, {
              name: "purecloud-platform-client-v2";
              result: "maintained-genesys-cloud-sdk-not-pureconnect-icws";
            }, {
              latest: "0.1.0";
              name: "machinepack-ic";
              publishedAt: "2015-08-11";
              result: "third-party-unmaintained-icws-package";
           }];
           maintainedRuntimeSdk: false;
           registry: "npm";
        };
        sdkDecision: "No maintained Genesys PureConnect ICWS npm runtime SDK was verified; the official ICWS SDK page describes a REST API/docs, so this package provides a typed REST adapter with providerClient override.";
        verifiedAt: "2026-06-25";
     };
     manifestOnlySafe: true;
     providerRestAdapter: {
        adapterKind: "no-official-sdk-rest-adapter";
        providerClientOverride: "GenesysPureConnectProviderClient";
        strategy: "provider-rest-adapter";
     };
     providerSdkDecision: {
        checkedAt: "2026-06-25";
        checkedPackages: readonly [{
           package: "genesys-pureconnect";
           reason: "No npm package with this official PureConnect runtime SDK name was found.";
           result: "not-published";
         }, {
           package: "pureconnect";
           reason: "No npm package with this official PureConnect runtime SDK name was found.";
           result: "not-published";
         }, {
           checkedVersion: "0.1.0";
           license: "MIT";
           package: "machinepack-ic";
           reason: "Third-party ICWS wrapper, not an official maintained Genesys PureConnect runtime SDK.";
           result: "third-party-unmaintained-icws-package";
         }, {
           checkedVersion: "255.1.0";
           license: "MIT";
           package: "purecloud-platform-client-v2";
           reason: "Maintained SDK targets Genesys Cloud Platform APIs, not PureConnect ICWS.";
           result: "genesys-cloud-sdk-not-pureconnect-icws";
        }];
        defaultRestPolicy: "fail-closed-icws-rest-adapter-with-typed-provider-client-override";
        result: "no-maintained-official-pureconnect-icws-npm-sdk";
        typedClientOverride: "GenesysPureConnectProviderClient";
     };
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
| `options?` | [`GenesysPureConnectIntegrationOptions`](#genesyspureconnectintegrationoptions) |

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
        `url`: `"https://help.genesys.com/developer/cic/docs/icws/webhelp/icws/%28sessionId%29/interactions/Interactions.htm"`;
      \}, \{
        `label`: `"PureConnect ICWS SDK"`;
        `url`: `"https://help.genesys.com/pureconnect/mergedprojects/wh_tr/mergedprojects/wh_tr_installation_and_configuration/desktop/interaction_center_web_services_icws_sdk.htm"`;
      \}, \{
        `label`: `"NPM ICWS candidate machinepack-ic"`;
        `url`: `"https://www.npmjs.com/package/machinepack-ic"`;
     \}\];
     `notes`: readonly \[`"No maintained Genesys PureConnect ICWS npm runtime SDK was verified."`, `"Official PureConnect ICWS SDK documentation describes a REST API and API documentation rather than a maintained npm runtime client."`, `"Runtime calls use a typed REST adapter for reviewed endpoints when baseUrl/API credentials are supplied, with GenesysPureConnectProviderClient available as a host-client override."`, `"Host-configured ICWS session paths require explicit hostReviewedPath=true and a host policy classification before requests are dispatched."`\];
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
        `adapterKind`: `"no-official-sdk-rest-adapter"`;
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
           `requiresHostReviewedPath`: `true`;
           `source`: `"host-configured"`;
        \}\];
        `implementationStrategy`: `"provider-rest-adapter"`;
        `providerSdkDecision`: \{
           `checkedAt`: `"2026-06-25"`;
           `checkedPackages`: readonly \[\{
              `package`: `"genesys-pureconnect"`;
              `reason`: `"No npm package with this official PureConnect runtime SDK name was found."`;
              `result`: `"not-published"`;
            \}, \{
              `package`: `"pureconnect"`;
              `reason`: `"No npm package with this official PureConnect runtime SDK name was found."`;
              `result`: `"not-published"`;
            \}, \{
              `checkedVersion`: `"0.1.0"`;
              `license`: `"MIT"`;
              `package`: `"machinepack-ic"`;
              `reason`: `"Third-party ICWS wrapper, not an official maintained Genesys PureConnect runtime SDK."`;
              `result`: `"third-party-unmaintained-icws-package"`;
            \}, \{
              `checkedVersion`: `"255.1.0"`;
              `license`: `"MIT"`;
              `package`: `"purecloud-platform-client-v2"`;
              `reason`: `"Maintained SDK targets Genesys Cloud Platform APIs, not PureConnect ICWS."`;
              `result`: `"genesys-cloud-sdk-not-pureconnect-icws"`;
           \}\];
           `defaultRestPolicy`: `"fail-closed-icws-rest-adapter-with-typed-provider-client-override"`;
           `result`: `"no-maintained-official-pureconnect-icws-npm-sdk"`;
           `typedClientOverride`: `"GenesysPureConnectProviderClient"`;
        \};
        `sdkAudit`: \{
           `checkedPackages`: readonly \[\{
              `name`: `"genesys-pureconnect"`;
              `result`: `"not-published"`;
            \}, \{
              `name`: `"pureconnect"`;
              `result`: `"not-published"`;
            \}, \{
              `name`: `"purecloud-platform-client-v2"`;
              `result`: `"maintained-genesys-cloud-sdk-not-pureconnect-icws"`;
            \}, \{
              `latest`: `"0.1.0"`;
              `name`: `"machinepack-ic"`;
              `publishedAt`: `"2015-08-11"`;
              `result`: `"third-party-unmaintained-icws-package"`;
           \}\];
           `maintainedRuntimeSdk`: `false`;
           `registry`: `"npm"`;
        \};
        `sdkDecision`: `"No maintained Genesys PureConnect ICWS npm runtime SDK was verified; the official ICWS SDK page describes a REST API/docs, so this package provides a typed REST adapter with providerClient override."`;
        `verifiedAt`: `"2026-06-25"`;
     \};
     `manifestOnlySafe`: `true`;
     `providerRestAdapter`: \{
        `adapterKind`: `"no-official-sdk-rest-adapter"`;
        `providerClientOverride`: `"GenesysPureConnectProviderClient"`;
        `strategy`: `"provider-rest-adapter"`;
     \};
     `providerSdkDecision`: \{
        `checkedAt`: `"2026-06-25"`;
        `checkedPackages`: readonly \[\{
           `package`: `"genesys-pureconnect"`;
           `reason`: `"No npm package with this official PureConnect runtime SDK name was found."`;
           `result`: `"not-published"`;
         \}, \{
           `package`: `"pureconnect"`;
           `reason`: `"No npm package with this official PureConnect runtime SDK name was found."`;
           `result`: `"not-published"`;
         \}, \{
           `checkedVersion`: `"0.1.0"`;
           `license`: `"MIT"`;
           `package`: `"machinepack-ic"`;
           `reason`: `"Third-party ICWS wrapper, not an official maintained Genesys PureConnect runtime SDK."`;
           `result`: `"third-party-unmaintained-icws-package"`;
         \}, \{
           `checkedVersion`: `"255.1.0"`;
           `license`: `"MIT"`;
           `package`: `"purecloud-platform-client-v2"`;
           `reason`: `"Maintained SDK targets Genesys Cloud Platform APIs, not PureConnect ICWS."`;
           `result`: `"genesys-cloud-sdk-not-pureconnect-icws"`;
        \}\];
        `defaultRestPolicy`: `"fail-closed-icws-rest-adapter-with-typed-provider-client-override"`;
        `result`: `"no-maintained-official-pureconnect-icws-npm-sdk"`;
        `typedClientOverride`: `"GenesysPureConnectProviderClient"`;
     \};
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

***

### createGenesysPureConnectIntegrationOperationHandlers()

```ts
function createGenesysPureConnectIntegrationOperationHandlers(options?): {
  contact-center.handoff.request: (input) => Promise<ProviderJsonObject>;
  genesys-pureconnect.icws.connect: (input) => Promise<ProviderJsonObject>;
  genesys-pureconnect.icws.request: (input) => Promise<ProviderJsonObject>;
};
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options?` | [`GenesysPureConnectIntegrationOptions`](#genesyspureconnectintegrationoptions) |

#### Returns

```ts
{
  contact-center.handoff.request: (input) => Promise<ProviderJsonObject>;
  genesys-pureconnect.icws.connect: (input) => Promise<ProviderJsonObject>;
  genesys-pureconnect.icws.request: (input) => Promise<ProviderJsonObject>;
}
```

| Name | Type |
| ------ | ------ |
| `contact-center.handoff.request()` | (`input`) => `Promise`\<[`ProviderJsonObject`](#providerjsonobject)\> |
| `genesys-pureconnect.icws.connect()` | (`input`) => `Promise`\<[`ProviderJsonObject`](#providerjsonobject)\> |
| `genesys-pureconnect.icws.request()` | (`input`) => `Promise`\<[`ProviderJsonObject`](#providerjsonobject)\> |

## References

### genesysPureConnectProviderManifest

Re-exports [genesysPureConnectProviderManifest](dist/manifest.md#genesyspureconnectprovidermanifest)

***

### genesysPureConnectProviderManifestInput

Re-exports [genesysPureConnectProviderManifestInput](dist/manifest.md#genesyspureconnectprovidermanifestinput)

***

### genesysPureConnectSupportSlice

Re-exports [genesysPureConnectSupportSlice](dist/manifest.md#genesyspureconnectsupportslice)
