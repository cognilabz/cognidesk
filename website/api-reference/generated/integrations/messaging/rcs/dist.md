# integrations/messaging/rcs/dist

## Interfaces

### ParseRcsWebhookOptions

#### Properties

##### clientToken?

```ts
optional clientToken?: string;
```

##### jwtVerifier?

```ts
optional jwtVerifier?: RcsJwtVerifier;
```

##### requireSignature?

```ts
optional requireSignature?: boolean;
```

##### sharedSecret?

```ts
optional sharedSecret?: string;
```

##### verifier?

```ts
optional verifier?: RcsWebhookVerifier;
```

***

### RcsAgentEvent

#### Indexable

```ts
[key: string]: RcsMessagingProviderExtensionValue
```

#### Properties

##### eventType

```ts
eventType: RcsAgentEventType;
```

##### messageId?

```ts
optional messageId?: string;
```

***

### RcsAgentMessage

#### Indexable

```ts
[key: string]: RcsMessagingProviderExtensionValue
```

#### Properties

##### contentMessage?

```ts
optional contentMessage?: RcsContentMessage;
```

##### expireTime?

```ts
optional expireTime?: string;
```

##### messageTrafficType?

```ts
optional messageTrafficType?: RcsMessageTrafficType;
```

##### representative?

```ts
optional representative?: RcsMessagingJsonObject;
```

##### ttl?

```ts
optional ttl?: string;
```

***

### RcsAgentResource

#### Indexable

```ts
[key: string]: RcsMessagingProviderExtensionValue
```

#### Properties

##### displayName?

```ts
optional displayName?: string;
```

##### name?

```ts
optional name?: string;
```

##### rcsBusinessMessagingAgent?

```ts
optional rcsBusinessMessagingAgent?: RcsMessagingJsonObject;
```

***

### RcsCapabilityResponse

#### Indexable

```ts
[key: string]: RcsMessagingProviderExtensionValue
```

#### Properties

##### carrier?

```ts
optional carrier?: string;
```

##### features?

```ts
optional features?: string[];
```

***

### RcsContentInfo

#### Properties

##### fileUrl

```ts
fileUrl: string;
```

##### forceRefresh?

```ts
optional forceRefresh?: boolean;
```

##### thumbnailUrl?

```ts
optional thumbnailUrl?: string;
```

***

### RcsContentMessage

#### Indexable

```ts
[key: string]: RcsMessagingProviderExtensionValue
```

#### Properties

##### contentInfo?

```ts
optional contentInfo?: RcsContentInfo;
```

##### richCard?

```ts
optional richCard?: RcsRichCard;
```

##### suggestions?

```ts
optional suggestions?: RcsSuggestion[];
```

##### text?

```ts
optional text?: string;
```

##### uploadedRbmFile?

```ts
optional uploadedRbmFile?: RcsUploadedRbmFile;
```

***

### RcsCreateFileInput

#### Properties

##### fileUrl

```ts
fileUrl: string;
```

##### thumbnailUrl?

```ts
optional thumbnailUrl?: string;
```

***

### RcsCredentialStatusInput

#### Properties

##### accessToken?

```ts
optional accessToken?: string;
```

##### agentId?

```ts
optional agentId?: string;
```

##### agentName?

```ts
optional agentName?: string;
```

##### expiresAt?

```ts
optional expiresAt?: string;
```

##### scopes?

```ts
optional scopes?: string[];
```

##### serviceAccountClientEmail?

```ts
optional serviceAccountClientEmail?: string;
```

##### tokenProviderConfigured?

```ts
optional tokenProviderConfigured?: boolean;
```

##### webhookClientToken?

```ts
optional webhookClientToken?: string;
```

***

### RcsFileResource

#### Indexable

```ts
[key: string]: RcsMessagingProviderExtensionValue
```

#### Properties

##### fileUrl?

```ts
optional fileUrl?: string;
```

##### name?

```ts
optional name?: string;
```

##### thumbnailUrl?

```ts
optional thumbnailUrl?: string;
```

***

### RcsLiveCheckOptions

#### Extends

- [`RcsMessagingClientOptions`](#rcsmessagingclientoptions)

#### Properties

##### accessToken?

```ts
optional accessToken?: string;
```

###### Inherited from

[`RcsMessagingClientOptions`](#rcsmessagingclientoptions).[`accessToken`](#accesstoken-2)

##### agentId

```ts
agentId: string;
```

###### Inherited from

[`RcsMessagingClientOptions`](#rcsmessagingclientoptions).[`agentId`](#agentid-2)

##### agentName?

```ts
optional agentName?: string;
```

###### Inherited from

[`RcsMessagingClientOptions`](#rcsmessagingclientoptions).[`agentName`](#agentname-2)

##### capabilityPhoneNumber?

```ts
optional capabilityPhoneNumber?: string;
```

##### client?

```ts
optional client?: Pick<RcsMessagingClient,
  | "getAgent"
  | "getAgentLaunch"
  | "getAgentVerification"
| "getCapabilities">;
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

###### Inherited from

[`RcsMessagingClientOptions`](#rcsmessagingclientoptions).[`fetch`](#fetch-1)

##### managementApiBaseUrl?

```ts
optional managementApiBaseUrl?: string;
```

###### Inherited from

[`RcsMessagingClientOptions`](#rcsmessagingclientoptions).[`managementApiBaseUrl`](#managementapibaseurl-1)

##### messagingApiBaseUrl?

```ts
optional messagingApiBaseUrl?: string;
```

###### Inherited from

[`RcsMessagingClientOptions`](#rcsmessagingclientoptions).[`messagingApiBaseUrl`](#messagingapibaseurl-1)

##### region?

```ts
optional region?: string;
```

###### Inherited from

[`RcsMessagingClientOptions`](#rcsmessagingclientoptions).[`region`](#region-1)

##### serviceAccount?

```ts
optional serviceAccount?: RcsServiceAccountCredentials;
```

###### Inherited from

[`RcsMessagingClientOptions`](#rcsmessagingclientoptions).[`serviceAccount`](#serviceaccount-1)

##### tokenProvider?

```ts
optional tokenProvider?: RcsAccessTokenProvider;
```

###### Inherited from

[`RcsMessagingClientOptions`](#rcsmessagingclientoptions).[`tokenProvider`](#tokenprovider-1)

***

### RcsMessagingClient

#### Methods

##### createFile()

```ts
createFile(input): Promise<RcsFileResource>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`RcsCreateFileInput`](#rcscreatefileinput) |

###### Returns

`Promise`\<[`RcsFileResource`](#rcsfileresource)\>

##### getAgent()

```ts
getAgent(agentName?): Promise<RcsAgentResource>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `agentName?` | `string` |

###### Returns

`Promise`\<[`RcsAgentResource`](#rcsagentresource)\>

##### getAgentLaunch()

```ts
getAgentLaunch(agentName?): Promise<RcsMessagingProviderResponse>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `agentName?` | `string` |

###### Returns

`Promise`\<[`RcsMessagingProviderResponse`](#rcsmessagingproviderresponse)\>

##### getAgentVerification()

```ts
getAgentVerification(agentName?): Promise<RcsMessagingProviderResponse>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `agentName?` | `string` |

###### Returns

`Promise`\<[`RcsMessagingProviderResponse`](#rcsmessagingproviderresponse)\>

##### getCapabilities()

```ts
getCapabilities(input): Promise<RcsCapabilityResponse>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | \{ `phoneNumber`: `string`; `requestId?`: `string`; \} |
| `input.phoneNumber` | `string` |
| `input.requestId?` | `string` |

###### Returns

`Promise`\<[`RcsCapabilityResponse`](#rcscapabilityresponse)\>

##### sendAgentEvent()

```ts
sendAgentEvent(input): Promise<RcsAgentEvent>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`RcsSendAgentEventInput`](#rcssendagenteventinput) |

###### Returns

`Promise`\<[`RcsAgentEvent`](#rcsagentevent)\>

##### sendCard()

```ts
sendCard(input): Promise<RcsAgentMessage>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`RcsSendCardInput`](#rcssendcardinput) |

###### Returns

`Promise`\<[`RcsAgentMessage`](#rcsagentmessage)\>

##### sendMedia()

```ts
sendMedia(input): Promise<RcsAgentMessage>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`RcsSendMediaInput`](#rcssendmediainput) |

###### Returns

`Promise`\<[`RcsAgentMessage`](#rcsagentmessage)\>

##### sendMessage()

```ts
sendMessage(input): Promise<RcsAgentMessage>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`RcsSendMessageInput`](#rcssendmessageinput) |

###### Returns

`Promise`\<[`RcsAgentMessage`](#rcsagentmessage)\>

##### sendReadReceipt()

```ts
sendReadReceipt(input): Promise<RcsAgentEvent>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | \{ `eventId?`: `string`; `messageId`: `string`; `phoneNumber`: `string`; \} |
| `input.eventId?` | `string` |
| `input.messageId` | `string` |
| `input.phoneNumber` | `string` |

###### Returns

`Promise`\<[`RcsAgentEvent`](#rcsagentevent)\>

##### sendText()

```ts
sendText(input): Promise<RcsAgentMessage>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`RcsSendTextInput`](#rcssendtextinput) |

###### Returns

`Promise`\<[`RcsAgentMessage`](#rcsagentmessage)\>

##### sendTyping()

```ts
sendTyping(input): Promise<RcsAgentEvent>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | \{ `eventId?`: `string`; `phoneNumber`: `string`; \} |
| `input.eventId?` | `string` |
| `input.phoneNumber` | `string` |

###### Returns

`Promise`\<[`RcsAgentEvent`](#rcsagentevent)\>

##### uploadFile()

```ts
uploadFile(input): Promise<RcsFileResource>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`RcsUploadFileInput`](#rcsuploadfileinput) |

###### Returns

`Promise`\<[`RcsFileResource`](#rcsfileresource)\>

***

### RcsMessagingClientOptions

#### Extended by

- [`RcsLiveCheckOptions`](#rcslivecheckoptions)

#### Properties

##### accessToken?

```ts
optional accessToken?: string;
```

##### agentId

```ts
agentId: string;
```

##### agentName?

```ts
optional agentName?: string;
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

##### managementApiBaseUrl?

```ts
optional managementApiBaseUrl?: string;
```

##### messagingApiBaseUrl?

```ts
optional messagingApiBaseUrl?: string;
```

##### region?

```ts
optional region?: string;
```

##### serviceAccount?

```ts
optional serviceAccount?: RcsServiceAccountCredentials;
```

##### tokenProvider?

```ts
optional tokenProvider?: RcsAccessTokenProvider;
```

***

### RcsMessagingJsonObject

#### Extended by

- [`RcsMessagingProviderExtensionFields`](#rcsmessagingproviderextensionfields)
- [`RcsMessagingProviderResponse`](#rcsmessagingproviderresponse)

#### Indexable

```ts
[key: string]: RcsMessagingProviderExtensionValue
```

***

### RcsMessagingProviderExtensionFields

#### Extends

- [`RcsMessagingJsonObject`](#rcsmessagingjsonobject)

#### Indexable

```ts
[key: string]: RcsMessagingProviderExtensionValue
```

***

### RcsMessagingProviderResponse

#### Extends

- [`RcsMessagingJsonObject`](#rcsmessagingjsonobject)

#### Indexable

```ts
[key: string]: RcsMessagingProviderExtensionValue
```

***

### RcsRichCard

#### Indexable

```ts
[key: string]: RcsMessagingProviderExtensionValue
```

#### Properties

##### carouselCard?

```ts
optional carouselCard?: RcsMessagingJsonObject;
```

##### standaloneCard?

```ts
optional standaloneCard?: RcsMessagingJsonObject;
```

***

### RcsSelectedOperation

#### Properties

##### api

```ts
api: "rcsbusinessmessaging.v1" | "businesscommunications.v1";
```

##### functionName

```ts
functionName: string;
```

##### method

```ts
method: "GET" | "POST";
```

##### notes?

```ts
optional notes?: string;
```

##### path

```ts
path: string;
```

##### sourceUrl

```ts
sourceUrl: string;
```

##### uid

```ts
uid: string;
```

***

### RcsSendAgentEventInput

#### Properties

##### event

```ts
event: RcsAgentEvent;
```

##### eventId?

```ts
optional eventId?: string;
```

##### phoneNumber

```ts
phoneNumber: string;
```

***

### RcsSendCardInput

#### Properties

##### expireTime?

```ts
optional expireTime?: string;
```

##### messageId

```ts
messageId: string;
```

##### messageTrafficType?

```ts
optional messageTrafficType?: RcsMessageTrafficType;
```

##### phoneNumber

```ts
phoneNumber: string;
```

##### richCard

```ts
richCard: RcsRichCard;
```

##### suggestions?

```ts
optional suggestions?: RcsSuggestion[];
```

##### ttl?

```ts
optional ttl?: string;
```

***

### RcsSendMediaInput

#### Properties

##### contentInfo?

```ts
optional contentInfo?: RcsContentInfo;
```

##### expireTime?

```ts
optional expireTime?: string;
```

##### messageId

```ts
messageId: string;
```

##### messageTrafficType?

```ts
optional messageTrafficType?: RcsMessageTrafficType;
```

##### phoneNumber

```ts
phoneNumber: string;
```

##### suggestions?

```ts
optional suggestions?: RcsSuggestion[];
```

##### ttl?

```ts
optional ttl?: string;
```

##### uploadedRbmFile?

```ts
optional uploadedRbmFile?: RcsUploadedRbmFile;
```

***

### RcsSendMessageInput

#### Properties

##### message

```ts
message: RcsAgentMessage;
```

##### messageId

```ts
messageId: string;
```

##### phoneNumber

```ts
phoneNumber: string;
```

***

### RcsSendTextInput

#### Properties

##### expireTime?

```ts
optional expireTime?: string;
```

##### messageId

```ts
messageId: string;
```

##### messageTrafficType?

```ts
optional messageTrafficType?: RcsMessageTrafficType;
```

##### phoneNumber

```ts
phoneNumber: string;
```

##### suggestions?

```ts
optional suggestions?: RcsSuggestion[];
```

##### text

```ts
text: string;
```

##### ttl?

```ts
optional ttl?: string;
```

***

### RcsServiceAccountCredentials

#### Properties

##### clientEmail

```ts
clientEmail: string;
```

##### privateKey

```ts
privateKey: string;
```

##### scopes?

```ts
optional scopes?: string[];
```

##### tokenUri?

```ts
optional tokenUri?: string;
```

***

### RcsSuggestion

#### Indexable

```ts
[key: string]: RcsMessagingProviderExtensionValue
```

#### Properties

##### action?

```ts
optional action?: RcsMessagingJsonObject;
```

##### reply?

```ts
optional reply?: RcsMessagingJsonObject;
```

***

### RcsUploadedRbmFile

#### Properties

##### fileName

```ts
fileName: string;
```

##### thumbnailName?

```ts
optional thumbnailName?: string;
```

***

### RcsUploadFileInput

#### Properties

##### body

```ts
body: BodyInit;
```

##### contentType

```ts
contentType: string;
```

***

### RcsWebhookEnvelope

#### Indexable

```ts
[key: string]: RcsMessagingProviderExtensionValue
```

#### Properties

##### clientToken?

```ts
optional clientToken?: string;
```

##### message?

```ts
optional message?: {
[key: string]: RcsMessagingProviderExtensionValue;
  attributes?: Record<string, string>;
  body?: string;
  data?: string;
  messageId?: string;
  publishTime?: string;
};
```

###### Index Signature

```ts
[key: string]: RcsMessagingProviderExtensionValue
```

###### attributes?

```ts
optional attributes?: Record<string, string>;
```

###### body?

```ts
optional body?: string;
```

###### data?

```ts
optional data?: string;
```

###### messageId?

```ts
optional messageId?: string;
```

###### publishTime?

```ts
optional publishTime?: string;
```

##### secret?

```ts
optional secret?: string;
```

##### subscription?

```ts
optional subscription?: string;
```

***

### RcsWebhookEvent

#### Properties

##### decodedBody?

```ts
optional decodedBody?: string;
```

##### encodedMessageBody?

```ts
optional encodedMessageBody?: string;
```

##### envelope

```ts
envelope: RcsWebhookEnvelope;
```

##### kind

```ts
kind: RcsWebhookEventKind;
```

##### payload

```ts
payload: RcsMessagingJsonObject;
```

##### rawBody

```ts
rawBody: string;
```

***

### ValidateRcsWebhookSignatureInput

#### Properties

##### clientToken

```ts
clientToken: string;
```

##### encodedMessageBody

```ts
encodedMessageBody: string;
```

##### signature

```ts
signature: string;
```

## Type Aliases

### RcsAccessTokenProvider

```ts
type RcsAccessTokenProvider = (input) => Promise<string> | string;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | \{ `fetch`: *typeof* `fetch`; `scopes`: `string`[]; \} |
| `input.fetch` | *typeof* `fetch` |
| `input.scopes` | `string`[] |

#### Returns

`Promise`\<`string`\> \| `string`

***

### RcsAgentEventType

```ts
type RcsAgentEventType = "READ" | "IS_TYPING";
```

***

### RcsJwtVerifier

```ts
type RcsJwtVerifier = (input) => boolean | Promise<boolean>;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | \{ `decodedBody`: `string`; `envelope`: [`RcsWebhookEnvelope`](#rcswebhookenvelope); `rawBody`: `string`; `request`: `Request`; `token`: `string`; \} |
| `input.decodedBody` | `string` |
| `input.envelope` | [`RcsWebhookEnvelope`](#rcswebhookenvelope) |
| `input.rawBody` | `string` |
| `input.request` | `Request` |
| `input.token` | `string` |

#### Returns

`boolean` \| `Promise`\<`boolean`\>

***

### RcsMessageTrafficType

```ts
type RcsMessageTrafficType =
  | "MESSAGE_TRAFFIC_TYPE_UNSPECIFIED"
  | "AUTHENTICATION"
  | "TRANSACTION"
  | "PROMOTION"
  | "SERVICEREQUEST"
  | "ACKNOWLEDGEMENT";
```

***

### RcsMessagingJsonPrimitive

```ts
type RcsMessagingJsonPrimitive = string | number | boolean | null;
```

***

### RcsMessagingJsonValue

```ts
type RcsMessagingJsonValue =
  | RcsMessagingJsonPrimitive
  | RcsMessagingJsonObject
  | readonly RcsMessagingJsonValue[];
```

***

### RcsMessagingProviderExtensionValue

```ts
type RcsMessagingProviderExtensionValue = RcsMessagingJsonValue | object | undefined;
```

***

### RcsMessagingProviderPayload

```ts
type RcsMessagingProviderPayload = RcsMessagingJsonObject | object;
```

***

### RcsMessagingProviderQuery

```ts
type RcsMessagingProviderQuery = Record<string, RcsMessagingProviderExtensionValue>;
```

***

### RcsWebhookEventKind

```ts
type RcsWebhookEventKind =
  | "verification"
  | "message"
  | "delivery-receipt"
  | "read-receipt"
  | "typing"
  | "subscription"
  | "suggestion"
  | "platform"
  | "unknown";
```

***

### RcsWebhookVerifier

```ts
type RcsWebhookVerifier = (input) => boolean | Promise<boolean>;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | \{ `decodedBody`: `string`; `envelope`: [`RcsWebhookEnvelope`](#rcswebhookenvelope); `rawBody`: `string`; `request`: `Request`; \} |
| `input.decodedBody` | `string` |
| `input.envelope` | [`RcsWebhookEnvelope`](#rcswebhookenvelope) |
| `input.rawBody` | `string` |
| `input.request` | `Request` |

#### Returns

`boolean` \| `Promise`\<`boolean`\>

## Variables

### RCS\_BUSINESS\_COMMUNICATIONS\_SCOPE

```ts
const RCS_BUSINESS_COMMUNICATIONS_SCOPE: "https://www.googleapis.com/auth/businesscommunications" = "https://www.googleapis.com/auth/businesscommunications";
```

***

### RCS\_DIRECT\_SLICE\_METADATA

```ts
const RCS_DIRECT_SLICE_METADATA: {
  allowlistChecksum: string;
  allowlistChecksumAlgorithm: "sha256";
  apiCoverage: {
     checkedAt: "2026-06-21";
     operationCatalog: "package:src/selected-operations.ts";
  };
  checkedAt: "2026-06-21";
  sdkDecision: {
     notes: readonly ["googleapis@173.0.0 does not expose rcsbusinessmessaging or businesscommunications at runtime.", "@google/rcsbusinessmessaging@1.0.10 covers RBM messaging resources but not Business Communications readiness resources and its helper API uses module-level singleton initialization."];
     viableOfficialSdk: false;
  };
  selectedOperations: (
     | {
     api: "rcsbusinessmessaging.v1";
     functionName: string;
     method: "POST";
     notes?: never;
     path: string;
     sourceUrl: string;
     uid: string;
   }
     | {
     api: "rcsbusinessmessaging.v1";
     functionName: string;
     method: "POST";
     notes: string;
     path: string;
     sourceUrl: string;
     uid: string;
   }
     | {
     api: "rcsbusinessmessaging.v1";
     functionName: string;
     method: "GET";
     notes?: never;
     path: string;
     sourceUrl: string;
     uid: string;
   }
     | {
     api: "businesscommunications.v1";
     functionName: string;
     method: "GET";
     notes?: never;
     path: string;
     sourceUrl: string;
     uid: string;
  })[];
  source: "official Google RCS for Business REST reference plus documented Discovery URLs";
  sourceVersion: "rcsbusinessmessaging.v1 + businesscommunications.v1 public docs checked 2026-06-21";
  strategy: "direct-http-support-slice";
};
```

#### Type Declaration

| Name | Type |
| ------ | ------ |
| <a id="property-allowlistchecksum"></a> `allowlistChecksum` | `string` |
| <a id="property-allowlistchecksumalgorithm"></a> `allowlistChecksumAlgorithm` | `"sha256"` |
| <a id="property-apicoverage"></a> `apiCoverage` | \{ `checkedAt`: `"2026-06-21"`; `operationCatalog`: `"package:src/selected-operations.ts"`; \} |
| `apiCoverage.checkedAt` | `"2026-06-21"` |
| `apiCoverage.operationCatalog` | `"package:src/selected-operations.ts"` |
| <a id="property-checkedat"></a> `checkedAt` | `"2026-06-21"` |
| <a id="property-sdkdecision"></a> `sdkDecision` | \{ `notes`: readonly \[`"googleapis@173.0.0 does not expose rcsbusinessmessaging or businesscommunications at runtime."`, `"@google/rcsbusinessmessaging@1.0.10 covers RBM messaging resources but not Business Communications readiness resources and its helper API uses module-level singleton initialization."`\]; `viableOfficialSdk`: `false`; \} |
| `sdkDecision.notes` | readonly \[`"googleapis@173.0.0 does not expose rcsbusinessmessaging or businesscommunications at runtime."`, `"@google/rcsbusinessmessaging@1.0.10 covers RBM messaging resources but not Business Communications readiness resources and its helper API uses module-level singleton initialization."`\] |
| `sdkDecision.viableOfficialSdk` | `false` |
| <a id="property-selectedoperations"></a> `selectedOperations` | ( \| \{ `api`: `"rcsbusinessmessaging.v1"`; `functionName`: `string`; `method`: `"POST"`; `notes?`: `never`; `path`: `string`; `sourceUrl`: `string`; `uid`: `string`; \} \| \{ `api`: `"rcsbusinessmessaging.v1"`; `functionName`: `string`; `method`: `"POST"`; `notes`: `string`; `path`: `string`; `sourceUrl`: `string`; `uid`: `string`; \} \| \{ `api`: `"rcsbusinessmessaging.v1"`; `functionName`: `string`; `method`: `"GET"`; `notes?`: `never`; `path`: `string`; `sourceUrl`: `string`; `uid`: `string`; \} \| \{ `api`: `"businesscommunications.v1"`; `functionName`: `string`; `method`: `"GET"`; `notes?`: `never`; `path`: `string`; `sourceUrl`: `string`; `uid`: `string`; \})[] |
| <a id="property-source"></a> `source` | `"official Google RCS for Business REST reference plus documented Discovery URLs"` |
| <a id="property-sourceversion"></a> `sourceVersion` | `"rcsbusinessmessaging.v1 + businesscommunications.v1 public docs checked 2026-06-21"` |
| <a id="property-strategy"></a> `strategy` | `"direct-http-support-slice"` |

***

### RCS\_MESSAGING\_SCOPE

```ts
const RCS_MESSAGING_SCOPE: "https://www.googleapis.com/auth/rcsbusinessmessaging" = "https://www.googleapis.com/auth/rcsbusinessmessaging";
```

***

### RCS\_SELECTED\_OPERATION\_COUNT

```ts
const RCS_SELECTED_OPERATION_COUNT: number;
```

***

### RCS\_SELECTED\_OPERATIONS

```ts
const RCS_SELECTED_OPERATIONS: (
  | {
  api: "rcsbusinessmessaging.v1";
  functionName: string;
  method: "POST";
  notes?: never;
  path: string;
  sourceUrl: string;
  uid: string;
}
  | {
  api: "rcsbusinessmessaging.v1";
  functionName: string;
  method: "POST";
  notes: string;
  path: string;
  sourceUrl: string;
  uid: string;
}
  | {
  api: "rcsbusinessmessaging.v1";
  functionName: string;
  method: "GET";
  notes?: never;
  path: string;
  sourceUrl: string;
  uid: string;
}
  | {
  api: "businesscommunications.v1";
  functionName: string;
  method: "GET";
  notes?: never;
  path: string;
  sourceUrl: string;
  uid: string;
})[];
```

## Functions

### createRcsCardMessage()

```ts
function createRcsCardMessage(input): RcsAgentMessage;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | `Omit`\<[`RcsSendCardInput`](#rcssendcardinput), `"phoneNumber"` \| `"messageId"`\> |

#### Returns

[`RcsAgentMessage`](#rcsagentmessage)

***

### createRcsMediaMessage()

```ts
function createRcsMediaMessage(input): RcsAgentMessage;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | `Omit`\<[`RcsSendMediaInput`](#rcssendmediainput), `"phoneNumber"` \| `"messageId"`\> |

#### Returns

[`RcsAgentMessage`](#rcsagentmessage)

***

### createRcsMessagingClient()

```ts
function createRcsMessagingClient(options): RcsMessagingClient;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`RcsMessagingClientOptions`](#rcsmessagingclientoptions) |

#### Returns

[`RcsMessagingClient`](#rcsmessagingclient)

***

### createRcsMessagingLiveChecks()

```ts
function createRcsMessagingLiveChecks(options): (
  | {
  description: string;
  id: string;
  requiredCredentialIds: string[];
  run: Promise<
     | {
     details: {
        agentName: string;
        displayName?: never;
        name?: never;
     };
   }
     | {
     details: {
        agentName?: never;
        displayName: string;
        name: string;
     };
  }>;
}
  | {
  description: string;
  id: string;
  requiredCredentialIds: string[];
  run: Promise<{
     details: RcsMessagingProviderResponse;
  }>;
}
  | {
  description: string;
  id: string;
  requiredCredentialIds: string[];
  run: Promise<
     | {
     details: {
        carrier?: never;
        features?: never;
        phoneNumber: string;
     };
   }
     | {
     details: {
        carrier: string;
        features: string[];
        phoneNumber?: never;
     };
  }>;
})[];
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`RcsLiveCheckOptions`](#rcslivecheckoptions) |

#### Returns

(
  \| \{
  `description`: `string`;
  `id`: `string`;
  `requiredCredentialIds`: `string`[];
  `run`: `Promise`\<
     \| \{
     `details`: \{
        `agentName`: `string`;
        `displayName?`: `never`;
        `name?`: `never`;
     \};
   \}
     \| \{
     `details`: \{
        `agentName?`: `never`;
        `displayName`: `string`;
        `name`: `string`;
     \};
  \}\>;
\}
  \| \{
  `description`: `string`;
  `id`: `string`;
  `requiredCredentialIds`: `string`[];
  `run`: `Promise`\<\{
     `details`: [`RcsMessagingProviderResponse`](#rcsmessagingproviderresponse);
  \}\>;
\}
  \| \{
  `description`: `string`;
  `id`: `string`;
  `requiredCredentialIds`: `string`[];
  `run`: `Promise`\<
     \| \{
     `details`: \{
        `carrier?`: `never`;
        `features?`: `never`;
        `phoneNumber`: `string`;
     \};
   \}
     \| \{
     `details`: \{
        `carrier`: `string`;
        `features`: `string`[];
        `phoneNumber?`: `never`;
     \};
  \}\>;
\})[]

***

### createRcsTextMessage()

```ts
function createRcsTextMessage(input): RcsAgentMessage;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | `Omit`\<[`RcsSendTextInput`](#rcssendtextinput), `"phoneNumber"` \| `"messageId"`\> |

#### Returns

[`RcsAgentMessage`](#rcsagentmessage)

***

### parseRcsWebhook()

```ts
function parseRcsWebhook(request, options?): Promise<RcsWebhookEvent>;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `request` | `Request` |
| `options?` | [`ParseRcsWebhookOptions`](#parsercswebhookoptions) |

#### Returns

`Promise`\<[`RcsWebhookEvent`](#rcswebhookevent)\>

***

### rcsMessagingCredentialStatuses()

```ts
function rcsMessagingCredentialStatuses(input): {
  expiresAt?: string;
  message?: string;
  providerPackageId?: string;
  requirementId: string;
  scopes?: string[];
  state:   | "required"
     | "configured"
     | "permission-blocked"
     | "not-required"
     | "missing"
     | "expired"
     | "insufficient-scope"
     | "unavailable";
}[];
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`RcsCredentialStatusInput`](#rcscredentialstatusinput) |

#### Returns

\{
  `expiresAt?`: `string`;
  `message?`: `string`;
  `providerPackageId?`: `string`;
  `requirementId`: `string`;
  `scopes?`: `string`[];
  `state`:   \| `"required"`
     \| `"configured"`
     \| `"permission-blocked"`
     \| `"not-required"`
     \| `"missing"`
     \| `"expired"`
     \| `"insufficient-scope"`
     \| `"unavailable"`;
\}[]

***

### validateRcsWebhookSignature()

```ts
function validateRcsWebhookSignature(input): boolean;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`ValidateRcsWebhookSignatureInput`](#validatercswebhooksignatureinput) |

#### Returns

`boolean`

***

### verifyRcsWebhookChallenge()

```ts
function verifyRcsWebhookChallenge(input): string;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | \{ `clientToken`: `string`; `expectedClientToken`: `string`; `secret`: `string`; \} |
| `input.clientToken` | `string` |
| `input.expectedClientToken` | `string` |
| `input.secret` | `string` |

#### Returns

`string`

## References

### rcsMessagingProviderManifest

Re-exports [rcsMessagingProviderManifest](dist/manifest.md#rcsmessagingprovidermanifest)
