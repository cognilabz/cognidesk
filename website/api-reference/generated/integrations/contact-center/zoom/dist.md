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

### ZoomContactCenterClient

#### Properties

##### providerClient

```ts
providerClient: ZoomContactCenterProviderClient;
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

##### readContact()

```ts
readContact(input): Promise<ProviderJsonObject>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`ZoomContactCenterReadContactInput`](#zoomcontactcenterreadcontactinput) |

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
startContact(input): Promise<ProviderJsonObject>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`ZoomContactCenterStartContactInput`](#zoomcontactcenterstartcontactinput) |

###### Returns

`Promise`\<[`ProviderJsonObject`](#providerjsonobject)\>

***

### ZoomContactCenterClientOptions

#### Extended by

- [`ZoomContactCenterIntegrationOptions`](#zoomcontactcenterintegrationoptions)

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
optional providerClient?: ZoomContactCenterProviderClient;
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

### ZoomContactCenterConsumer

#### Properties

##### consumer\_display\_name

```ts
consumer_display_name: string;
```

##### consumer\_email?

```ts
optional consumer_email?: string;
```

##### consumer\_external\_id?

```ts
optional consumer_external_id?: string;
```

##### consumer\_number?

```ts
optional consumer_number?: string;
```

***

### ZoomContactCenterFlow

#### Properties

##### flow\_entry\_id

```ts
flow_entry_id: string;
```

***

### ZoomContactCenterIntegrationOptions

#### Extends

- [`ZoomContactCenterClientOptions`](#zoomcontactcenterclientoptions)

#### Properties

##### accessToken?

```ts
optional accessToken?: string;
```

###### Inherited from

[`ZoomContactCenterClientOptions`](#zoomcontactcenterclientoptions).[`accessToken`](#accesstoken)

##### apiBaseUrl?

```ts
optional apiBaseUrl?: string;
```

###### Inherited from

[`ZoomContactCenterClientOptions`](#zoomcontactcenterclientoptions).[`apiBaseUrl`](#apibaseurl)

##### apiKey?

```ts
optional apiKey?: string;
```

###### Inherited from

[`ZoomContactCenterClientOptions`](#zoomcontactcenterclientoptions).[`apiKey`](#apikey)

##### apiKeyHeaderName?

```ts
optional apiKeyHeaderName?: string;
```

###### Inherited from

[`ZoomContactCenterClientOptions`](#zoomcontactcenterclientoptions).[`apiKeyHeaderName`](#apikeyheadername)

##### authorizationHeader?

```ts
optional authorizationHeader?: string;
```

###### Inherited from

[`ZoomContactCenterClientOptions`](#zoomcontactcenterclientoptions).[`authorizationHeader`](#authorizationheader)

##### baseUrl?

```ts
optional baseUrl?: string;
```

###### Inherited from

[`ZoomContactCenterClientOptions`](#zoomcontactcenterclientoptions).[`baseUrl`](#baseurl)

##### client?

```ts
optional client?: ZoomContactCenterClient;
```

##### defaultHandoffPath?

```ts
optional defaultHandoffPath?: string;
```

###### Inherited from

[`ZoomContactCenterClientOptions`](#zoomcontactcenterclientoptions).[`defaultHandoffPath`](#defaulthandoffpath)

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

[`ZoomContactCenterClientOptions`](#zoomcontactcenterclientoptions).[`fetch`](#fetch)

##### providerClient?

```ts
optional providerClient?: ZoomContactCenterProviderClient;
```

###### Inherited from

[`ZoomContactCenterClientOptions`](#zoomcontactcenterclientoptions).[`providerClient`](#providerclient-1)

##### readinessPath?

```ts
optional readinessPath?: string;
```

###### Inherited from

[`ZoomContactCenterClientOptions`](#zoomcontactcenterclientoptions).[`readinessPath`](#readinesspath)

##### retry?

```ts
optional retry?: number | ProviderRestRetryOptions;
```

###### Inherited from

[`ZoomContactCenterClientOptions`](#zoomcontactcenterclientoptions).[`retry`](#retry)

##### signal?

```ts
optional signal?: AbortSignal;
```

###### Inherited from

[`ZoomContactCenterClientOptions`](#zoomcontactcenterclientoptions).[`signal`](#signal)

##### timeoutMs?

```ts
optional timeoutMs?: number;
```

###### Inherited from

[`ZoomContactCenterClientOptions`](#zoomcontactcenterclientoptions).[`timeoutMs`](#timeoutms)

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

***

### ZoomContactCenterProviderClient

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
readContact(input): Promise<ProviderJsonObject>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`ZoomContactCenterOperationInput`](#zoomcontactcenteroperationinput) |

###### Returns

`Promise`\<[`ProviderJsonObject`](#providerjsonobject)\>

##### readiness()?

```ts
optional readiness(): Promise<ProviderJsonObject>;
```

###### Returns

`Promise`\<[`ProviderJsonObject`](#providerjsonobject)\>

##### request()?

```ts
optional request(input): Promise<ProviderJsonObject>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`ProviderExtensionRequestInput`](#providerextensionrequestinput) |

###### Returns

`Promise`\<[`ProviderJsonObject`](#providerjsonobject)\>

##### startContact()

```ts
startContact(input): Promise<ProviderJsonObject>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`ZoomContactCenterOperationInput`](#zoomcontactcenteroperationinput) |

###### Returns

`Promise`\<[`ProviderJsonObject`](#providerjsonobject)\>

***

### ZoomContactCenterReadContactInput

#### Extends

- `Omit`\<[`ZoomContactCenterOperationInput`](#zoomcontactcenteroperationinput), `"body"` \| `"pathParams"`\>

#### Properties

##### engagementId

```ts
engagementId: string;
```

##### headers?

```ts
optional headers?: Record<string, string>;
```

###### Inherited from

[`ProviderExtensionRequestInput`](#providerextensionrequestinput).[`headers`](#headers)

##### idempotencyKey?

```ts
optional idempotencyKey?: string;
```

###### Inherited from

[`ProviderExtensionRequestInput`](#providerextensionrequestinput).[`idempotencyKey`](#idempotencykey-1)

##### query?

```ts
optional query?: Record<string, ProviderQueryValue>;
```

###### Inherited from

[`ProviderExtensionRequestInput`](#providerextensionrequestinput).[`query`](#query-1)

***

### ZoomContactCenterStartContactInput

#### Extends

- `Omit`\<[`ZoomContactCenterOperationInput`](#zoomcontactcenteroperationinput), `"body"` \| `"pathParams"`\>

#### Properties

##### body

```ts
body: ZoomContactCenterStartEngagementBody;
```

##### headers?

```ts
optional headers?: Record<string, string>;
```

###### Inherited from

[`ProviderExtensionRequestInput`](#providerextensionrequestinput).[`headers`](#headers)

##### idempotencyKey?

```ts
optional idempotencyKey?: string;
```

###### Inherited from

[`ProviderExtensionRequestInput`](#providerextensionrequestinput).[`idempotencyKey`](#idempotencykey-1)

##### query?

```ts
optional query?: Record<string, ProviderQueryValue>;
```

###### Inherited from

[`ProviderExtensionRequestInput`](#providerextensionrequestinput).[`query`](#query-1)

***

### ZoomContactCenterStartEngagementBody

#### Properties

##### channels

```ts
channels: readonly [ZoomContactCenterWorkItemChannel, ZoomContactCenterWorkItemChannel];
```

##### consumers

```ts
consumers: readonly [ZoomContactCenterConsumer, ZoomContactCenterConsumer];
```

##### flow

```ts
flow: ZoomContactCenterFlow;
```

##### language\_code?

```ts
optional language_code?: string;
```

##### variables?

```ts
optional variables?: readonly ZoomContactCenterVariable[];
```

##### work\_item\_variables

```ts
work_item_variables: ZoomContactCenterWorkItemVariables;
```

***

### ZoomContactCenterVariable

#### Properties

##### name

```ts
name: string;
```

##### value

```ts
value: string;
```

***

### ZoomContactCenterWorkItemChannel

#### Properties

##### channel

```ts
channel: "work_item";
```

##### channel\_source

```ts
channel_source: "API";
```

***

### ZoomContactCenterWorkItemVariables

#### Indexable

```ts
[key: string]: unknown
```

#### Properties

##### work\_item\_desc?

```ts
optional work_item_desc?: string;
```

##### work\_item\_due\_date?

```ts
optional work_item_due_date?: string;
```

##### work\_item\_hyperlink?

```ts
optional work_item_hyperlink?: string;
```

##### work\_item\_id?

```ts
optional work_item_id?: string;
```

##### work\_item\_name

```ts
work_item_name: string;
```

##### work\_item\_origin?

```ts
optional work_item_origin?: string;
```

##### work\_item\_priority?

```ts
optional work_item_priority?: number;
```

##### work\_item\_transcript\_url?

```ts
optional work_item_transcript_url?: string;
```

##### work\_item\_type\_id?

```ts
optional work_item_type_id?: string;
```

## Type Aliases

### ProviderJsonObject

```ts
type ProviderJsonObject = Record<string, unknown>;
```

***

### ZoomContactCenterProviderMethod

```ts
type ZoomContactCenterProviderMethod = ProviderHttpMethod;
```

***

### ZoomContactCenterQueryValue

```ts
type ZoomContactCenterQueryValue = ProviderQueryValue;
```

## Variables

### createZoomContactCenterIntegrationOperationHandlers

```ts
const createZoomContactCenterIntegrationOperationHandlers: typeof createZoomContactCenterOperationHandlers;
```

## Functions

### createZoomContactCenterClient()

```ts
function createZoomContactCenterClient(options?): ZoomContactCenterClient;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options?` | [`ZoomContactCenterClientOptions`](#zoomcontactcenterclientoptions) |

#### Returns

[`ZoomContactCenterClient`](#zoomcontactcenterclient)

***

### createZoomContactCenterIntegration()

```ts
function createZoomContactCenterIntegration(options?): DefinedIntegration<{
  capabilities: [{
     capability: "handoff";
     exposesSensitiveData: true;
     providerObjects: [{
        kind: "contactTransfer";
        label: "contactTransfer";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     capability: "send";
     exposesSensitiveData: true;
     providerObjects: [{
        kind: "contact";
        label: "contact";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     capability: "read-provider-object";
     exposesSensitiveData: true;
     providerObjects: [{
        kind: "contact";
        label: "contact";
     }];
     requiresCredential: true;
     sideEffect: false;
  }];
  category: "contact-center";
  channelAudiences: ["customer-facing", "internal-support", "mixed"];
  coverage: {
     evidence: [{
        label: "Zoom Contact Center REST OpenAPI";
        url: "https://developers.zoom.us/api-hub/contact-center/methods/endpoints.json";
      }, {
        label: "Zoom Contact Center Webhooks OpenAPI";
        url: "https://developers.zoom.us/api-hub/contact-center/events/webhooks.json";
      }, {
        label: "Zoom Contact Center SDK for web";
        url: "https://developers.zoom.us/docs/contact-center/web/get-started/";
      }, {
        label: "Zoom Apps SDK";
        url: "https://github.com/zoom/appssdk";
      }, {
        label: "Zoom RTMS SDK";
        url: "https://github.com/zoom/rtms";
     }];
     notes: ["No maintained official server-side JavaScript SDK was verified for Zoom Contact Center management APIs.", "@zoom/appssdk is an embedded Zoom Apps SDK, @zoom/rtms is media-streaming, and the Contact Center SDK is a browser/client integration surface.", "Runtime calls use a built-in REST adapter for reviewed operation IDs only, with ZoomContactCenterProviderClient.request available as a host-client exception."];
     scope: "support-workflow-subset";
  };
  credentialRequirements: [{
     id: "zoom-contact-center-api-base";
     label: "Zoom Contact Center API base URL";
     required: true;
   }, {
     id: "zoom-contact-center-api-access";
     label: "Zoom OAuth/API access";
     required: true;
   }, {
     id: "zoom-contact-center-routing";
     label: "Zoom queue/channel routing configuration";
     required: false;
  }];
  directions: ["inbound-only", "outbound-only", "bidirectional"];
  id: "contact-center.zoom";
  maintainers: [{
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
           alias: "contact-center.contact.start";
           checksum: "sha256:3a3127360fbe7ef88d7398e62795b502fb1f3b2ebc507b3fbf0d3ba6645a963b";
           id: "Startworkitemengagement";
           method: "POST";
           path: "/contact_center/engagement";
           source: "https://developers.zoom.us/api-hub/contact-center/methods/endpoints.json";
         }, {
           alias: "contact-center.contact.read";
           checksum: "sha256:3a3127360fbe7ef88d7398e62795b502fb1f3b2ebc507b3fbf0d3ba6645a963b";
           id: "getEngagement";
           method: "GET";
           path: "/contact_center/engagements/{engagementId}";
           source: "https://developers.zoom.us/api-hub/contact-center/methods/endpoints.json";
         }, {
           alias: "zoom.request";
           checksum: "not-applicable-host-configured";
           id: "providerExtensionRequest";
           method: "GET";
           path: "host-configured";
           source: "provider-rest-adapter";
        }];
        implementationStrategy: "provider-rest-adapter";
        providerSdkDecision: {
           checkedAt: "2026-06-25";
           checkedPackages: readonly [{
              checkedVersion: "0.4.0";
              license: "SEE LICENSE IN LICENSE.md";
              package: "@zoom/rivet";
              reason: "Official server-side API wrapper exports meetings/users/phone/etc., but no contact-center export or /contact_center engagement endpoints for this package surface.";
              result: "server-sdk-without-contact-center-management-namespace";
            }, {
              checkedVersion: "0.16.38";
              license: "MIT";
              package: "@zoom/appssdk";
              reason: "Browser Zoom Apps SDK, not server-side Contact Center management API client.";
              result: "embedded-zoom-apps-sdk-not-contact-center-management-client";
            }, {
              checkedVersion: "1.1.0";
              license: "MIT";
              package: "@zoom/rtms";
              reason: "Node wrapper for Zoom RTMS media streaming C SDK, not Contact Center REST management operations.";
              result: "media-streaming-sdk-not-contact-center-management-client";
            }, {
              package: "@zoom/contact-center";
              reason: "No public npm package exists under this likely official Contact Center SDK name.";
              result: "not-published";
           }];
           defaultRestPolicy: "fail-closed-reviewed-contact-center-rest-adapter-with-typed-provider-client-override";
           result: "no-suitable-contact-center-management-sdk";
           typedClientOverride: "ZoomContactCenterProviderClient";
        };
        runtimePolicy: {
           defaultClient: "built-in-provider-rest-adapter";
           extensionRequests: "built-in REST rejects unreviewed paths; injected providerClient.request may handle host-reviewed extensions after method and mutation-policy validation";
           failClosed: true;
           requestOptions: readonly ["baseUrl", "accessToken", "authorizationHeader", "apiKey", "apiKeyHeaderName", "fetch", "signal", "timeoutMs", "retry"];
           reviewedRestOperations: readonly ["Startworkitemengagement", "getEngagement"];
        };
        sdkDecision: "No maintained official server-side JavaScript SDK was verified for Zoom Contact Center management APIs; @zoom/appssdk is embedded Zoom Apps and @zoom/rtms is media-streaming, so this package uses reviewed REST operations with a providerClient host exception.";
        verifiedAt: "2026-06-25";
     };
     manifestOnlySafe: true;
     providerRestAdapter: {
        adapterKind: "no-official-sdk-rest-adapter";
        providerClientOverride: "ZoomContactCenterProviderClient";
        strategy: "provider-rest-adapter";
     };
     providerSdkDecision: {
        checkedAt: "2026-06-25";
        checkedPackages: readonly [{
           checkedVersion: "0.4.0";
           license: "SEE LICENSE IN LICENSE.md";
           package: "@zoom/rivet";
           reason: "Official server-side API wrapper exports meetings/users/phone/etc., but no contact-center export or /contact_center engagement endpoints for this package surface.";
           result: "server-sdk-without-contact-center-management-namespace";
         }, {
           checkedVersion: "0.16.38";
           license: "MIT";
           package: "@zoom/appssdk";
           reason: "Browser Zoom Apps SDK, not server-side Contact Center management API client.";
           result: "embedded-zoom-apps-sdk-not-contact-center-management-client";
         }, {
           checkedVersion: "1.1.0";
           license: "MIT";
           package: "@zoom/rtms";
           reason: "Node wrapper for Zoom RTMS media streaming C SDK, not Contact Center REST management operations.";
           result: "media-streaming-sdk-not-contact-center-management-client";
         }, {
           package: "@zoom/contact-center";
           reason: "No public npm package exists under this likely official Contact Center SDK name.";
           result: "not-published";
        }];
        defaultRestPolicy: "fail-closed-reviewed-contact-center-rest-adapter-with-typed-provider-client-override";
        result: "no-suitable-contact-center-management-sdk";
        typedClientOverride: "ZoomContactCenterProviderClient";
     };
  };
  name: "Zoom Contact Center";
  operations: [{
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
| `options?` | [`ZoomContactCenterIntegrationOptions`](#zoomcontactcenterintegrationoptions) |

#### Returns

[`DefinedIntegration`](../../../packages/integration-kit/dist.md#definedintegration)\<\{
  `capabilities`: \[\{
     `capability`: `"handoff"`;
     `exposesSensitiveData`: `true`;
     `providerObjects`: \[\{
        `kind`: `"contactTransfer"`;
        `label`: `"contactTransfer"`;
     \}\];
     `requiresCredential`: `true`;
     `sideEffect`: `true`;
   \}, \{
     `capability`: `"send"`;
     `exposesSensitiveData`: `true`;
     `providerObjects`: \[\{
        `kind`: `"contact"`;
        `label`: `"contact"`;
     \}\];
     `requiresCredential`: `true`;
     `sideEffect`: `true`;
   \}, \{
     `capability`: `"read-provider-object"`;
     `exposesSensitiveData`: `true`;
     `providerObjects`: \[\{
        `kind`: `"contact"`;
        `label`: `"contact"`;
     \}\];
     `requiresCredential`: `true`;
     `sideEffect`: `false`;
  \}\];
  `category`: `"contact-center"`;
  `channelAudiences`: \[`"customer-facing"`, `"internal-support"`, `"mixed"`\];
  `coverage`: \{
     `evidence`: \[\{
        `label`: `"Zoom Contact Center REST OpenAPI"`;
        `url`: `"https://developers.zoom.us/api-hub/contact-center/methods/endpoints.json"`;
      \}, \{
        `label`: `"Zoom Contact Center Webhooks OpenAPI"`;
        `url`: `"https://developers.zoom.us/api-hub/contact-center/events/webhooks.json"`;
      \}, \{
        `label`: `"Zoom Contact Center SDK for web"`;
        `url`: `"https://developers.zoom.us/docs/contact-center/web/get-started/"`;
      \}, \{
        `label`: `"Zoom Apps SDK"`;
        `url`: `"https://github.com/zoom/appssdk"`;
      \}, \{
        `label`: `"Zoom RTMS SDK"`;
        `url`: `"https://github.com/zoom/rtms"`;
     \}\];
     `notes`: \[`"No maintained official server-side JavaScript SDK was verified for Zoom Contact Center management APIs."`, `"@zoom/appssdk is an embedded Zoom Apps SDK, @zoom/rtms is media-streaming, and the Contact Center SDK is a browser/client integration surface."`, `"Runtime calls use a built-in REST adapter for reviewed operation IDs only, with ZoomContactCenterProviderClient.request available as a host-client exception."`\];
     `scope`: `"support-workflow-subset"`;
  \};
  `credentialRequirements`: \[\{
     `id`: `"zoom-contact-center-api-base"`;
     `label`: `"Zoom Contact Center API base URL"`;
     `required`: `true`;
   \}, \{
     `id`: `"zoom-contact-center-api-access"`;
     `label`: `"Zoom OAuth/API access"`;
     `required`: `true`;
   \}, \{
     `id`: `"zoom-contact-center-routing"`;
     `label`: `"Zoom queue/channel routing configuration"`;
     `required`: `false`;
  \}\];
  `directions`: \[`"inbound-only"`, `"outbound-only"`, `"bidirectional"`\];
  `id`: `"contact-center.zoom"`;
  `maintainers`: \[\{
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
           `alias`: `"contact-center.contact.start"`;
           `checksum`: `"sha256:3a3127360fbe7ef88d7398e62795b502fb1f3b2ebc507b3fbf0d3ba6645a963b"`;
           `id`: `"Startworkitemengagement"`;
           `method`: `"POST"`;
           `path`: `"/contact_center/engagement"`;
           `source`: `"https://developers.zoom.us/api-hub/contact-center/methods/endpoints.json"`;
         \}, \{
           `alias`: `"contact-center.contact.read"`;
           `checksum`: `"sha256:3a3127360fbe7ef88d7398e62795b502fb1f3b2ebc507b3fbf0d3ba6645a963b"`;
           `id`: `"getEngagement"`;
           `method`: `"GET"`;
           `path`: `"/contact_center/engagements/{engagementId}"`;
           `source`: `"https://developers.zoom.us/api-hub/contact-center/methods/endpoints.json"`;
         \}, \{
           `alias`: `"zoom.request"`;
           `checksum`: `"not-applicable-host-configured"`;
           `id`: `"providerExtensionRequest"`;
           `method`: `"GET"`;
           `path`: `"host-configured"`;
           `source`: `"provider-rest-adapter"`;
        \}\];
        `implementationStrategy`: `"provider-rest-adapter"`;
        `providerSdkDecision`: \{
           `checkedAt`: `"2026-06-25"`;
           `checkedPackages`: readonly \[\{
              `checkedVersion`: `"0.4.0"`;
              `license`: `"SEE LICENSE IN LICENSE.md"`;
              `package`: `"@zoom/rivet"`;
              `reason`: `"Official server-side API wrapper exports meetings/users/phone/etc., but no contact-center export or /contact_center engagement endpoints for this package surface."`;
              `result`: `"server-sdk-without-contact-center-management-namespace"`;
            \}, \{
              `checkedVersion`: `"0.16.38"`;
              `license`: `"MIT"`;
              `package`: `"@zoom/appssdk"`;
              `reason`: `"Browser Zoom Apps SDK, not server-side Contact Center management API client."`;
              `result`: `"embedded-zoom-apps-sdk-not-contact-center-management-client"`;
            \}, \{
              `checkedVersion`: `"1.1.0"`;
              `license`: `"MIT"`;
              `package`: `"@zoom/rtms"`;
              `reason`: `"Node wrapper for Zoom RTMS media streaming C SDK, not Contact Center REST management operations."`;
              `result`: `"media-streaming-sdk-not-contact-center-management-client"`;
            \}, \{
              `package`: `"@zoom/contact-center"`;
              `reason`: `"No public npm package exists under this likely official Contact Center SDK name."`;
              `result`: `"not-published"`;
           \}\];
           `defaultRestPolicy`: `"fail-closed-reviewed-contact-center-rest-adapter-with-typed-provider-client-override"`;
           `result`: `"no-suitable-contact-center-management-sdk"`;
           `typedClientOverride`: `"ZoomContactCenterProviderClient"`;
        \};
        `runtimePolicy`: \{
           `defaultClient`: `"built-in-provider-rest-adapter"`;
           `extensionRequests`: `"built-in REST rejects unreviewed paths; injected providerClient.request may handle host-reviewed extensions after method and mutation-policy validation"`;
           `failClosed`: `true`;
           `requestOptions`: readonly \[`"baseUrl"`, `"accessToken"`, `"authorizationHeader"`, `"apiKey"`, `"apiKeyHeaderName"`, `"fetch"`, `"signal"`, `"timeoutMs"`, `"retry"`\];
           `reviewedRestOperations`: readonly \[`"Startworkitemengagement"`, `"getEngagement"`\];
        \};
        `sdkDecision`: `"No maintained official server-side JavaScript SDK was verified for Zoom Contact Center management APIs; @zoom/appssdk is embedded Zoom Apps and @zoom/rtms is media-streaming, so this package uses reviewed REST operations with a providerClient host exception."`;
        `verifiedAt`: `"2026-06-25"`;
     \};
     `manifestOnlySafe`: `true`;
     `providerRestAdapter`: \{
        `adapterKind`: `"no-official-sdk-rest-adapter"`;
        `providerClientOverride`: `"ZoomContactCenterProviderClient"`;
        `strategy`: `"provider-rest-adapter"`;
     \};
     `providerSdkDecision`: \{
        `checkedAt`: `"2026-06-25"`;
        `checkedPackages`: readonly \[\{
           `checkedVersion`: `"0.4.0"`;
           `license`: `"SEE LICENSE IN LICENSE.md"`;
           `package`: `"@zoom/rivet"`;
           `reason`: `"Official server-side API wrapper exports meetings/users/phone/etc., but no contact-center export or /contact_center engagement endpoints for this package surface."`;
           `result`: `"server-sdk-without-contact-center-management-namespace"`;
         \}, \{
           `checkedVersion`: `"0.16.38"`;
           `license`: `"MIT"`;
           `package`: `"@zoom/appssdk"`;
           `reason`: `"Browser Zoom Apps SDK, not server-side Contact Center management API client."`;
           `result`: `"embedded-zoom-apps-sdk-not-contact-center-management-client"`;
         \}, \{
           `checkedVersion`: `"1.1.0"`;
           `license`: `"MIT"`;
           `package`: `"@zoom/rtms"`;
           `reason`: `"Node wrapper for Zoom RTMS media streaming C SDK, not Contact Center REST management operations."`;
           `result`: `"media-streaming-sdk-not-contact-center-management-client"`;
         \}, \{
           `package`: `"@zoom/contact-center"`;
           `reason`: `"No public npm package exists under this likely official Contact Center SDK name."`;
           `result`: `"not-published"`;
        \}\];
        `defaultRestPolicy`: `"fail-closed-reviewed-contact-center-rest-adapter-with-typed-provider-client-override"`;
        `result`: `"no-suitable-contact-center-management-sdk"`;
        `typedClientOverride`: `"ZoomContactCenterProviderClient"`;
     \};
  \};
  `name`: `"Zoom Contact Center"`;
  `operations`: \[\{
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

***

### createZoomContactCenterOperationHandlers()

```ts
function createZoomContactCenterOperationHandlers(options?): {
  contact-center.contact.read: (input) => Promise<ProviderJsonObject>;
  contact-center.contact.start: (input) => Promise<ProviderJsonObject>;
  contact-center.handoff.request: (input) => Promise<ProviderJsonObject>;
  zoom.request: (input) => Promise<ProviderJsonObject>;
};
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options?` | [`ZoomContactCenterIntegrationOptions`](#zoomcontactcenterintegrationoptions) |

#### Returns

```ts
{
  contact-center.contact.read: (input) => Promise<ProviderJsonObject>;
  contact-center.contact.start: (input) => Promise<ProviderJsonObject>;
  contact-center.handoff.request: (input) => Promise<ProviderJsonObject>;
  zoom.request: (input) => Promise<ProviderJsonObject>;
}
```

| Name | Type |
| ------ | ------ |
| `contact-center.contact.read()` | (`input`) => `Promise`\<[`ProviderJsonObject`](#providerjsonobject)\> |
| `contact-center.contact.start()` | (`input`) => `Promise`\<[`ProviderJsonObject`](#providerjsonobject)\> |
| `contact-center.handoff.request()` | (`input`) => `Promise`\<[`ProviderJsonObject`](#providerjsonobject)\> |
| `zoom.request()` | (`input`) => `Promise`\<[`ProviderJsonObject`](#providerjsonobject)\> |

## References

### zoomContactCenterOperationAliases

Re-exports [zoomContactCenterOperationAliases](dist/manifest.md#zoomcontactcenteroperationaliases)

***

### zoomContactCenterProviderManifest

Re-exports [zoomContactCenterProviderManifest](dist/manifest.md#zoomcontactcenterprovidermanifest)

***

### zoomContactCenterProviderManifestInput

Re-exports [zoomContactCenterProviderManifestInput](dist/manifest.md#zoomcontactcenterprovidermanifestinput)

***

### zoomContactCenterRestSupportSlice

Re-exports [zoomContactCenterRestSupportSlice](dist/manifest.md#zoomcontactcenterrestsupportslice)

***

### zoomContactCenterSupportSlice

Re-exports [zoomContactCenterSupportSlice](dist/manifest.md#zoomcontactcentersupportslice)
