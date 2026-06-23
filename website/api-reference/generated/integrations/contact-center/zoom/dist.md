# integrations/contact-center/zoom/dist

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

- [`ZoomContactCenterOperationInput`](#zoomcontactcenteroperationinput)

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

[`ZoomContactCenterOperationInput`](#zoomcontactcenteroperationinput).[`body`](#body-1)

##### classification?

```ts
optional classification?: string;
```

##### headers?

```ts
optional headers?: Record<string, string>;
```

###### Inherited from

[`ZoomContactCenterOperationInput`](#zoomcontactcenteroperationinput).[`headers`](#headers-1)

##### idempotencyKey?

```ts
optional idempotencyKey?: string;
```

###### Inherited from

[`ZoomContactCenterOperationInput`](#zoomcontactcenteroperationinput).[`idempotencyKey`](#idempotencykey-2)

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

[`ZoomContactCenterOperationInput`](#zoomcontactcenteroperationinput).[`pathParams`](#pathparams-1)

##### query?

```ts
optional query?: Record<string, ProviderQueryValue>;
```

###### Inherited from

[`ZoomContactCenterOperationInput`](#zoomcontactcenteroperationinput).[`query`](#query-2)

***

### ZoomContactCenterClient

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

##### readContact()

```ts
readContact(input?): Promise<ProviderJsonObject>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input?` | [`ZoomContactCenterOperationInput`](#zoomcontactcenteroperationinput) |

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

##### startContact()

```ts
startContact(input?): Promise<ProviderJsonObject>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input?` | [`ZoomContactCenterOperationInput`](#zoomcontactcenteroperationinput) |

###### Returns

`Promise`\<[`ProviderJsonObject`](#providerjsonobject)\>

***

### ZoomContactCenterClientOptions

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

### ZoomContactCenterOperationInput

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

### createZoomContactCenterClient()

```ts
function createZoomContactCenterClient(options): ZoomContactCenterClient;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`ZoomContactCenterClientOptions`](#zoomcontactcenterclientoptions) |

#### Returns

[`ZoomContactCenterClient`](#zoomcontactcenterclient)

***

### createZoomContactCenterIntegration()

```ts
function createZoomContactCenterIntegration(options): DefinedIntegration<{
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
     capability: "send";
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
        label: "Zoom Contact Center REST OpenAPI";
        url: "https://developers.zoom.us/api-hub/contact-center/methods/endpoints.json";
      }, {
        label: "Zoom Contact Center Webhooks OpenAPI";
        url: "https://developers.zoom.us/api-hub/contact-center/events/webhooks.json";
      }, {
        label: "Zoom Apps SDK";
        url: "https://github.com/zoom/appssdk";
     }];
     notes: readonly ["@zoom/appssdk is an embedded Zoom Apps SDK, not a Contact Center REST client; this package keeps selected official Contact Center REST/webhook operations."];
     scope: "support-workflow-subset";
  };
  credentialRequirements: readonly [{
     id: "zoom-contact-center-account";
     label: "Zoom Contact Center account/API base";
     required: true;
   }, {
     id: "zoom-contact-center-api-access";
     label: "Zoom OAuth access";
     required: true;
   }, {
     id: "zoom-contact-center-routing";
     label: "Zoom queue/channel routing configuration";
     required: false;
  }];
  directions: readonly ["inbound-only", "outbound-only", "bidirectional"];
  id: "contact-center.zoom";
  maintainers: readonly [{
     name: "Cognidesk";
     type: "official";
  }];
  metadata: {
     implementation: {
        allowedOperations: readonly [{
           alias: "contact-center.contact.start";
           checksum: "sha256:56456cf010ca13ab7edefa0212372d191e10192dfd4cd8f0c5ffb50fa5d2c1c7";
           id: "Startworkitemengagement";
           method: "POST";
           path: "/contact_center/engagement";
           source: "https://developers.zoom.us/api-hub/contact-center/methods/endpoints.json";
         }, {
           alias: "contact-center.contact.read";
           checksum: "sha256:56456cf010ca13ab7edefa0212372d191e10192dfd4cd8f0c5ffb50fa5d2c1c7";
           id: "getEngagement";
           method: "GET";
           path: "/contact_center/engagements/{engagementId}";
           source: "https://developers.zoom.us/api-hub/contact-center/methods/endpoints.json";
        }];
        implementationStrategy: "generated-support-slice";
        sdkDecision: "@zoom/appssdk is an embedded Zoom Apps SDK, not a Contact Center REST client; this package keeps selected official Contact Center REST/webhook operations.";
        verifiedAt: "2026-06-21";
     };
     manifestOnlySafe: true;
  };
  name: "Zoom Contact Center";
  operations: readonly [{
     alias: "contact-center.handoff.request";
     capability: "handoff";
     providerObject: "contactTransfer";
   }, {
     alias: "contact-center.contact.start";
     capability: "send";
     providerObject: "contact";
   }, {
     alias: "contact-center.contact.read";
     capability: "read-provider-object";
     providerObject: "contact";
   }, {
     alias: "zoom.request";
     capability: "read-provider-object";
     extension: true;
     providerObject: "contact";
  }];
  packageName: "@cognidesk/integration-contact-center-zoom";
  provider: "zoom";
  trustLevel: "official";
}, unknown, {
  contact-center.contact.read: (input) => Promise<ProviderJsonObject>;
  contact-center.contact.start: (input) => Promise<ProviderJsonObject>;
  contact-center.handoff.request: (input) => Promise<ProviderJsonObject>;
  zoom.request: (input) => Promise<ProviderJsonObject>;
}>;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`ZoomContactCenterClientOptions`](#zoomcontactcenterclientoptions) |

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
     `capability`: `"send"`;
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
        `label`: `"Zoom Contact Center REST OpenAPI"`;
        `url`: `"https://developers.zoom.us/api-hub/contact-center/methods/endpoints.json"`;
      \}, \{
        `label`: `"Zoom Contact Center Webhooks OpenAPI"`;
        `url`: `"https://developers.zoom.us/api-hub/contact-center/events/webhooks.json"`;
      \}, \{
        `label`: `"Zoom Apps SDK"`;
        `url`: `"https://github.com/zoom/appssdk"`;
     \}\];
     `notes`: readonly \[`"@zoom/appssdk is an embedded Zoom Apps SDK, not a Contact Center REST client; this package keeps selected official Contact Center REST/webhook operations."`\];
     `scope`: `"support-workflow-subset"`;
  \};
  `credentialRequirements`: readonly \[\{
     `id`: `"zoom-contact-center-account"`;
     `label`: `"Zoom Contact Center account/API base"`;
     `required`: `true`;
   \}, \{
     `id`: `"zoom-contact-center-api-access"`;
     `label`: `"Zoom OAuth access"`;
     `required`: `true`;
   \}, \{
     `id`: `"zoom-contact-center-routing"`;
     `label`: `"Zoom queue/channel routing configuration"`;
     `required`: `false`;
  \}\];
  `directions`: readonly \[`"inbound-only"`, `"outbound-only"`, `"bidirectional"`\];
  `id`: `"contact-center.zoom"`;
  `maintainers`: readonly \[\{
     `name`: `"Cognidesk"`;
     `type`: `"official"`;
  \}\];
  `metadata`: \{
     `implementation`: \{
        `allowedOperations`: readonly \[\{
           `alias`: `"contact-center.contact.start"`;
           `checksum`: `"sha256:56456cf010ca13ab7edefa0212372d191e10192dfd4cd8f0c5ffb50fa5d2c1c7"`;
           `id`: `"Startworkitemengagement"`;
           `method`: `"POST"`;
           `path`: `"/contact_center/engagement"`;
           `source`: `"https://developers.zoom.us/api-hub/contact-center/methods/endpoints.json"`;
         \}, \{
           `alias`: `"contact-center.contact.read"`;
           `checksum`: `"sha256:56456cf010ca13ab7edefa0212372d191e10192dfd4cd8f0c5ffb50fa5d2c1c7"`;
           `id`: `"getEngagement"`;
           `method`: `"GET"`;
           `path`: `"/contact_center/engagements/{engagementId}"`;
           `source`: `"https://developers.zoom.us/api-hub/contact-center/methods/endpoints.json"`;
        \}\];
        `implementationStrategy`: `"generated-support-slice"`;
        `sdkDecision`: `"@zoom/appssdk is an embedded Zoom Apps SDK, not a Contact Center REST client; this package keeps selected official Contact Center REST/webhook operations."`;
        `verifiedAt`: `"2026-06-21"`;
     \};
     `manifestOnlySafe`: `true`;
  \};
  `name`: `"Zoom Contact Center"`;
  `operations`: readonly \[\{
     `alias`: `"contact-center.handoff.request"`;
     `capability`: `"handoff"`;
     `providerObject`: `"contactTransfer"`;
   \}, \{
     `alias`: `"contact-center.contact.start"`;
     `capability`: `"send"`;
     `providerObject`: `"contact"`;
   \}, \{
     `alias`: `"contact-center.contact.read"`;
     `capability`: `"read-provider-object"`;
     `providerObject`: `"contact"`;
   \}, \{
     `alias`: `"zoom.request"`;
     `capability`: `"read-provider-object"`;
     `extension`: `true`;
     `providerObject`: `"contact"`;
  \}\];
  `packageName`: `"@cognidesk/integration-contact-center-zoom"`;
  `provider`: `"zoom"`;
  `trustLevel`: `"official"`;
\}, `unknown`, \{
  `contact-center.contact.read`: (`input`) => `Promise`\<[`ProviderJsonObject`](#providerjsonobject)\>;
  `contact-center.contact.start`: (`input`) => `Promise`\<[`ProviderJsonObject`](#providerjsonobject)\>;
  `contact-center.handoff.request`: (`input`) => `Promise`\<[`ProviderJsonObject`](#providerjsonobject)\>;
  `zoom.request`: (`input`) => `Promise`\<[`ProviderJsonObject`](#providerjsonobject)\>;
\}\>

## References

### zoomContactCenterProviderManifest

Re-exports [zoomContactCenterProviderManifest](dist/manifest.md#zoomcontactcenterprovidermanifest)

***

### zoomContactCenterProviderManifestInput

Re-exports [zoomContactCenterProviderManifestInput](dist/manifest.md#zoomcontactcenterprovidermanifestinput)

***

### zoomContactCenterSupportSlice

Re-exports [zoomContactCenterSupportSlice](dist/manifest.md#zoomcontactcentersupportslice)
