# integrations/messaging/whatsapp/dist

## Interfaces

### ParseWhatsAppWebhookOptions

#### Properties

##### appSecret?

```ts
optional appSecret?: string;
```

##### requireSignature?

```ts
optional requireSignature?: boolean;
```

***

### ValidateWhatsAppWebhookSignatureInput

#### Properties

##### appSecret

```ts
appSecret: string;
```

##### rawBody

```ts
rawBody: string | Buffer<ArrayBufferLike>;
```

##### signature

```ts
signature: string;
```

***

### VerifyWhatsAppWebhookChallengeInput

#### Properties

##### challenge

```ts
challenge: string;
```

##### expectedVerifyToken

```ts
expectedVerifyToken: string;
```

##### mode

```ts
mode: string;
```

##### verifyToken

```ts
verifyToken: string;
```

***

### WhatsAppApiResponse

#### Indexable

```ts
[key: string]: WhatsAppMessagingProviderExtensionValue
```

#### Properties

##### contacts?

```ts
optional contacts?: {
[key: string]: WhatsAppMessagingJsonValue;
  input?: string;
  wa_id?: string;
}[];
```

###### Index Signature

```ts
[key: string]: WhatsAppMessagingJsonValue
```

###### input?

```ts
optional input?: string;
```

###### wa\_id?

```ts
optional wa_id?: string;
```

##### messages?

```ts
optional messages?: {
[key: string]: WhatsAppMessagingJsonValue;
  id?: string;
  message_status?: string;
}[];
```

###### Index Signature

```ts
[key: string]: WhatsAppMessagingJsonValue
```

###### id?

```ts
optional id?: string;
```

###### message\_status?

```ts
optional message_status?: string;
```

##### messaging\_product?

```ts
optional messaging_product?: string;
```

***

### WhatsAppBusinessProfileResource

#### Indexable

```ts
[key: string]: WhatsAppMessagingProviderExtensionValue
```

#### Properties

##### about?

```ts
optional about?: string;
```

##### address?

```ts
optional address?: string;
```

##### description?

```ts
optional description?: string;
```

##### email?

```ts
optional email?: string;
```

##### messaging\_product?

```ts
optional messaging_product?: string;
```

##### profile\_picture\_url?

```ts
optional profile_picture_url?: string;
```

##### vertical?

```ts
optional vertical?: string;
```

##### websites?

```ts
optional websites?: string[];
```

***

### WhatsAppBusinessProfileResponse

#### Indexable

```ts
[key: string]: WhatsAppMessagingProviderExtensionValue
```

#### Properties

##### data?

```ts
optional data?: WhatsAppBusinessProfileResource[];
```

***

### WhatsAppCredentialStatusInput

#### Properties

##### accessToken?

```ts
optional accessToken?: string;
```

##### appSecret?

```ts
optional appSecret?: string;
```

##### expiresAt?

```ts
optional expiresAt?: string;
```

##### phoneNumberId?

```ts
optional phoneNumberId?: string;
```

##### scopes?

```ts
optional scopes?: string[];
```

##### verifyToken?

```ts
optional verifyToken?: string;
```

##### wabaWebhookSubscribed?

```ts
optional wabaWebhookSubscribed?: boolean;
```

***

### WhatsAppLiveCheckOptions

#### Extends

- [`WhatsAppMessagingClientOptions`](#whatsappmessagingclientoptions)

#### Properties

##### accessToken?

```ts
optional accessToken?: string;
```

###### Inherited from

[`WhatsAppMessagingClientOptions`](#whatsappmessagingclientoptions).[`accessToken`](#accesstoken-2)

##### baseUrl?

```ts
optional baseUrl?: string;
```

###### Inherited from

[`WhatsAppMessagingClientOptions`](#whatsappmessagingclientoptions).[`baseUrl`](#baseurl-1)

##### client?

```ts
optional client?: Pick<WhatsAppMessagingClient, "getPhoneNumber">;
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

[`WhatsAppMessagingClientOptions`](#whatsappmessagingclientoptions).[`fetch`](#fetch-1)

##### graphApiBaseUrl?

```ts
optional graphApiBaseUrl?: string;
```

###### Inherited from

[`WhatsAppMessagingClientOptions`](#whatsappmessagingclientoptions).[`graphApiBaseUrl`](#graphapibaseurl-1)

##### graphApiVersion?

```ts
optional graphApiVersion?: string;
```

###### Inherited from

[`WhatsAppMessagingClientOptions`](#whatsappmessagingclientoptions).[`graphApiVersion`](#graphapiversion-1)

##### phoneNumberId?

```ts
optional phoneNumberId?: string;
```

###### Inherited from

[`WhatsAppMessagingClientOptions`](#whatsappmessagingclientoptions).[`phoneNumberId`](#phonenumberid-2)

##### providerClient?

```ts
optional providerClient?: WhatsAppMessagingProviderClient;
```

###### Inherited from

[`WhatsAppMessagingClientOptions`](#whatsappmessagingclientoptions).[`providerClient`](#providerclient-2)

##### retry?

```ts
optional retry?:
  | number
  | ProviderJsonRetryOptions;
```

###### Inherited from

[`WhatsAppMessagingClientOptions`](#whatsappmessagingclientoptions).[`retry`](#retry-1)

##### signal?

```ts
optional signal?: AbortSignal;
```

###### Inherited from

[`WhatsAppMessagingClientOptions`](#whatsappmessagingclientoptions).[`signal`](#signal-1)

##### timeoutMs?

```ts
optional timeoutMs?: number;
```

###### Inherited from

[`WhatsAppMessagingClientOptions`](#whatsappmessagingclientoptions).[`timeoutMs`](#timeoutms-1)

***

### WhatsAppMediaResource

#### Indexable

```ts
[key: string]: WhatsAppMessagingProviderExtensionValue
```

#### Properties

##### file\_size?

```ts
optional file_size?: number;
```

##### id?

```ts
optional id?: string;
```

##### messaging\_product?

```ts
optional messaging_product?: string;
```

##### mime\_type?

```ts
optional mime_type?: string;
```

##### sha256?

```ts
optional sha256?: string;
```

##### url?

```ts
optional url?: string;
```

***

### WhatsAppMessageInput

#### Properties

##### additionalFields?

```ts
optional additionalFields?: WhatsAppMessagingProviderExtensionFields;
```

##### audio?

```ts
optional audio?: WhatsAppMessagingJsonObject;
```

##### contacts?

```ts
optional contacts?: WhatsAppMessagingJsonValue[];
```

##### context?

```ts
optional context?: {
  message_id: string;
};
```

###### message\_id

```ts
message_id: string;
```

##### document?

```ts
optional document?: WhatsAppMessagingJsonObject;
```

##### image?

```ts
optional image?: WhatsAppMessagingJsonObject;
```

##### interactive?

```ts
optional interactive?: WhatsAppMessagingJsonObject;
```

##### location?

```ts
optional location?: WhatsAppMessagingJsonObject;
```

##### recipientType?

```ts
optional recipientType?: "individual";
```

##### sticker?

```ts
optional sticker?: WhatsAppMessagingJsonObject;
```

##### template?

```ts
optional template?: WhatsAppMessagingJsonObject;
```

##### text?

```ts
optional text?: {
  body: string;
  preview_url?: boolean;
};
```

###### body

```ts
body: string;
```

###### preview\_url?

```ts
optional preview_url?: boolean;
```

##### to

```ts
to: string;
```

##### type

```ts
type: WhatsAppMessageType;
```

##### video?

```ts
optional video?: WhatsAppMessagingJsonObject;
```

***

### WhatsAppMessagingClient

#### Extends

- [`WhatsAppMessagingProviderClient`](#whatsappmessagingproviderclient)

#### Properties

##### providerClient

```ts
providerClient: WhatsAppMessagingProviderClient;
```

#### Methods

##### downloadMedia()

```ts
downloadMedia(input): Promise<Response>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | `string` \| [`WhatsAppMediaResource`](#whatsappmediaresource) |

###### Returns

`Promise`\<`Response`\>

###### Inherited from

[`WhatsAppMessagingProviderClient`](#whatsappmessagingproviderclient).[`downloadMedia`](#downloadmedia-1)

##### getBusinessProfile()

```ts
getBusinessProfile(fields?): Promise<WhatsAppBusinessProfileResponse>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `fields?` | `string`[] |

###### Returns

`Promise`\<[`WhatsAppBusinessProfileResponse`](#whatsappbusinessprofileresponse)\>

###### Inherited from

[`WhatsAppMessagingProviderClient`](#whatsappmessagingproviderclient).[`getBusinessProfile`](#getbusinessprofile-1)

##### getMedia()

```ts
getMedia(mediaId): Promise<WhatsAppMediaResource>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `mediaId` | `string` |

###### Returns

`Promise`\<[`WhatsAppMediaResource`](#whatsappmediaresource)\>

###### Inherited from

[`WhatsAppMessagingProviderClient`](#whatsappmessagingproviderclient).[`getMedia`](#getmedia-1)

##### getPhoneNumber()

```ts
getPhoneNumber(fields?): Promise<WhatsAppPhoneNumberResource>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `fields?` | `string`[] |

###### Returns

`Promise`\<[`WhatsAppPhoneNumberResource`](#whatsappphonenumberresource)\>

###### Inherited from

[`WhatsAppMessagingProviderClient`](#whatsappmessagingproviderclient).[`getPhoneNumber`](#getphonenumber-1)

##### sendMessage()

```ts
sendMessage(input): Promise<WhatsAppApiResponse>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`WhatsAppMessageInput`](#whatsappmessageinput) |

###### Returns

`Promise`\<[`WhatsAppApiResponse`](#whatsappapiresponse)\>

###### Inherited from

[`WhatsAppMessagingProviderClient`](#whatsappmessagingproviderclient).[`sendMessage`](#sendmessage-1)

##### updateBusinessProfile()

```ts
updateBusinessProfile(input): Promise<{
[key: string]: WhatsAppMessagingJsonValue;
  success?: boolean;
}>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`WhatsAppUpdateBusinessProfileInput`](#whatsappupdatebusinessprofileinput) |

###### Returns

`Promise`\<\{
\[`key`: `string`\]: [`WhatsAppMessagingJsonValue`](#whatsappmessagingjsonvalue);
  `success?`: `boolean`;
\}\>

###### Inherited from

[`WhatsAppMessagingProviderClient`](#whatsappmessagingproviderclient).[`updateBusinessProfile`](#updatebusinessprofile-1)

##### uploadMedia()

```ts
uploadMedia(input): Promise<WhatsAppMediaResource>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`WhatsAppUploadMediaInput`](#whatsappuploadmediainput) |

###### Returns

`Promise`\<[`WhatsAppMediaResource`](#whatsappmediaresource)\>

###### Inherited from

[`WhatsAppMessagingProviderClient`](#whatsappmessagingproviderclient).[`uploadMedia`](#uploadmedia-1)

***

### WhatsAppMessagingClientOptions

#### Extended by

- [`WhatsAppLiveCheckOptions`](#whatsapplivecheckoptions)
- [`WhatsAppMessagingIntegrationOptions`](#whatsappmessagingintegrationoptions)

#### Properties

##### accessToken?

```ts
optional accessToken?: string;
```

##### baseUrl?

```ts
optional baseUrl?: string;
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

##### graphApiBaseUrl?

```ts
optional graphApiBaseUrl?: string;
```

##### graphApiVersion?

```ts
optional graphApiVersion?: string;
```

##### phoneNumberId?

```ts
optional phoneNumberId?: string;
```

##### providerClient?

```ts
optional providerClient?: WhatsAppMessagingProviderClient;
```

##### retry?

```ts
optional retry?:
  | number
  | ProviderJsonRetryOptions;
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

### WhatsAppMessagingIntegrationOptions

#### Extends

- [`WhatsAppMessagingClientOptions`](#whatsappmessagingclientoptions)

#### Properties

##### accessToken?

```ts
optional accessToken?: string;
```

###### Inherited from

[`WhatsAppMessagingClientOptions`](#whatsappmessagingclientoptions).[`accessToken`](#accesstoken-2)

##### appSecret

```ts
appSecret: string;
```

##### baseUrl?

```ts
optional baseUrl?: string;
```

###### Inherited from

[`WhatsAppMessagingClientOptions`](#whatsappmessagingclientoptions).[`baseUrl`](#baseurl-1)

##### client?

```ts
optional client?: WhatsAppMessagingClient;
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

[`WhatsAppMessagingClientOptions`](#whatsappmessagingclientoptions).[`fetch`](#fetch-1)

##### graphApiBaseUrl?

```ts
optional graphApiBaseUrl?: string;
```

###### Inherited from

[`WhatsAppMessagingClientOptions`](#whatsappmessagingclientoptions).[`graphApiBaseUrl`](#graphapibaseurl-1)

##### graphApiVersion?

```ts
optional graphApiVersion?: string;
```

###### Inherited from

[`WhatsAppMessagingClientOptions`](#whatsappmessagingclientoptions).[`graphApiVersion`](#graphapiversion-1)

##### phoneNumberId?

```ts
optional phoneNumberId?: string;
```

###### Inherited from

[`WhatsAppMessagingClientOptions`](#whatsappmessagingclientoptions).[`phoneNumberId`](#phonenumberid-2)

##### providerClient?

```ts
optional providerClient?: WhatsAppMessagingProviderClient;
```

###### Inherited from

[`WhatsAppMessagingClientOptions`](#whatsappmessagingclientoptions).[`providerClient`](#providerclient-2)

##### retry?

```ts
optional retry?:
  | number
  | ProviderJsonRetryOptions;
```

###### Inherited from

[`WhatsAppMessagingClientOptions`](#whatsappmessagingclientoptions).[`retry`](#retry-1)

##### signal?

```ts
optional signal?: AbortSignal;
```

###### Inherited from

[`WhatsAppMessagingClientOptions`](#whatsappmessagingclientoptions).[`signal`](#signal-1)

##### timeoutMs?

```ts
optional timeoutMs?: number;
```

###### Inherited from

[`WhatsAppMessagingClientOptions`](#whatsappmessagingclientoptions).[`timeoutMs`](#timeoutms-1)

***

### WhatsAppMessagingJsonObject

#### Extended by

- [`WhatsAppMessagingProviderExtensionFields`](#whatsappmessagingproviderextensionfields)
- [`WhatsAppMessagingProviderResponse`](#whatsappmessagingproviderresponse)

#### Indexable

```ts
[key: string]: WhatsAppMessagingProviderExtensionValue
```

***

### WhatsAppMessagingProviderClient

#### Extended by

- [`WhatsAppMessagingClient`](#whatsappmessagingclient)

#### Methods

##### downloadMedia()

```ts
downloadMedia(input): Promise<Response>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | `string` \| [`WhatsAppMediaResource`](#whatsappmediaresource) |

###### Returns

`Promise`\<`Response`\>

##### getBusinessProfile()

```ts
getBusinessProfile(fields?): Promise<WhatsAppBusinessProfileResponse>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `fields?` | `string`[] |

###### Returns

`Promise`\<[`WhatsAppBusinessProfileResponse`](#whatsappbusinessprofileresponse)\>

##### getMedia()

```ts
getMedia(mediaId): Promise<WhatsAppMediaResource>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `mediaId` | `string` |

###### Returns

`Promise`\<[`WhatsAppMediaResource`](#whatsappmediaresource)\>

##### getPhoneNumber()

```ts
getPhoneNumber(fields?): Promise<WhatsAppPhoneNumberResource>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `fields?` | `string`[] |

###### Returns

`Promise`\<[`WhatsAppPhoneNumberResource`](#whatsappphonenumberresource)\>

##### sendMessage()

```ts
sendMessage(input): Promise<WhatsAppApiResponse>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`WhatsAppMessageInput`](#whatsappmessageinput) |

###### Returns

`Promise`\<[`WhatsAppApiResponse`](#whatsappapiresponse)\>

##### updateBusinessProfile()

```ts
updateBusinessProfile(input): Promise<{
[key: string]: WhatsAppMessagingJsonValue;
  success?: boolean;
}>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`WhatsAppUpdateBusinessProfileInput`](#whatsappupdatebusinessprofileinput) |

###### Returns

`Promise`\<\{
\[`key`: `string`\]: [`WhatsAppMessagingJsonValue`](#whatsappmessagingjsonvalue);
  `success?`: `boolean`;
\}\>

##### uploadMedia()

```ts
uploadMedia(input): Promise<WhatsAppMediaResource>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`WhatsAppUploadMediaInput`](#whatsappuploadmediainput) |

###### Returns

`Promise`\<[`WhatsAppMediaResource`](#whatsappmediaresource)\>

***

### WhatsAppMessagingProviderExtensionFields

#### Extends

- [`WhatsAppMessagingJsonObject`](#whatsappmessagingjsonobject)

#### Indexable

```ts
[key: string]: WhatsAppMessagingProviderExtensionValue
```

***

### WhatsAppMessagingProviderResponse

#### Extends

- [`WhatsAppMessagingJsonObject`](#whatsappmessagingjsonobject)

#### Indexable

```ts
[key: string]: WhatsAppMessagingProviderExtensionValue
```

***

### WhatsAppPhoneNumberResource

#### Indexable

```ts
[key: string]: WhatsAppMessagingProviderExtensionValue
```

#### Properties

##### code\_verification\_status?

```ts
optional code_verification_status?: string;
```

##### display\_phone\_number?

```ts
optional display_phone_number?: string;
```

##### id?

```ts
optional id?: string;
```

##### name\_status?

```ts
optional name_status?: string;
```

##### platform\_type?

```ts
optional platform_type?: string;
```

##### quality\_rating?

```ts
optional quality_rating?: string;
```

##### throughput?

```ts
optional throughput?: WhatsAppMessagingProviderExtensionValue;
```

##### verified\_name?

```ts
optional verified_name?: string;
```

***

### WhatsAppSignedWebhook

#### Properties

##### contentType?

```ts
optional contentType?: string;
```

##### payload

```ts
payload: WhatsAppWebhookPayload;
```

##### rawBody

```ts
rawBody: string;
```

***

### WhatsAppUpdateBusinessProfileInput

#### Properties

##### about?

```ts
optional about?: string;
```

##### address?

```ts
optional address?: string;
```

##### description?

```ts
optional description?: string;
```

##### email?

```ts
optional email?: string;
```

##### messagingProduct?

```ts
optional messagingProduct?: "whatsapp";
```

##### profilePictureHandle?

```ts
optional profilePictureHandle?: string;
```

##### vertical?

```ts
optional vertical?: string;
```

##### websites?

```ts
optional websites?: string[];
```

***

### WhatsAppUploadMediaInput

#### Properties

##### file

```ts
file: Blob;
```

##### filename?

```ts
optional filename?: string;
```

##### messagingProduct?

```ts
optional messagingProduct?: "whatsapp";
```

##### type

```ts
type: string;
```

***

### WhatsAppWebhookChange

#### Indexable

```ts
[key: string]: WhatsAppMessagingProviderExtensionValue
```

#### Properties

##### field?

```ts
optional field?: string;
```

##### value?

```ts
optional value?: {
[key: string]: WhatsAppMessagingProviderExtensionValue;
  contacts?: WhatsAppMessagingJsonValue[];
  errors?: WhatsAppMessagingJsonValue[];
  messages?: WhatsAppMessagingJsonValue[];
  messaging_product?: string;
  metadata?: WhatsAppMessagingProviderExtensionFields;
  statuses?: WhatsAppMessagingJsonValue[];
};
```

###### Index Signature

```ts
[key: string]: WhatsAppMessagingProviderExtensionValue
```

###### contacts?

```ts
optional contacts?: WhatsAppMessagingJsonValue[];
```

###### errors?

```ts
optional errors?: WhatsAppMessagingJsonValue[];
```

###### messages?

```ts
optional messages?: WhatsAppMessagingJsonValue[];
```

###### messaging\_product?

```ts
optional messaging_product?: string;
```

###### metadata?

```ts
optional metadata?: WhatsAppMessagingProviderExtensionFields;
```

###### statuses?

```ts
optional statuses?: WhatsAppMessagingJsonValue[];
```

***

### WhatsAppWebhookEntry

#### Indexable

```ts
[key: string]: WhatsAppMessagingProviderExtensionValue
```

#### Properties

##### changes?

```ts
optional changes?: WhatsAppWebhookChange[];
```

##### id?

```ts
optional id?: string;
```

***

### WhatsAppWebhookPayload

#### Indexable

```ts
[key: string]: WhatsAppMessagingProviderExtensionValue
```

#### Properties

##### entry?

```ts
optional entry?: WhatsAppWebhookEntry[];
```

##### object?

```ts
optional object?: string;
```

***

### WhatsAppWebJsonObject

#### Indexable

```ts
[key: string]: WhatsAppWebJsonValue
```

***

### WhatsAppWebMessagingClient

#### Methods

##### checkReadiness()

```ts
checkReadiness(): Promise<WhatsAppWebReadinessResult>;
```

###### Returns

`Promise`\<[`WhatsAppWebReadinessResult`](#whatsappwebreadinessresult)\>

##### sendText()

```ts
sendText(input): Promise<WhatsAppWebSendTextResult>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`WhatsAppWebSendTextInput`](#whatsappwebsendtextinput) |

###### Returns

`Promise`\<[`WhatsAppWebSendTextResult`](#whatsappwebsendtextresult)\>

***

### WhatsAppWebMessagingClientOptions

#### Extended by

- [`WhatsAppWebMessagingIntegrationOptions`](#whatsappwebmessagingintegrationoptions)

#### Properties

##### authStateDir?

```ts
optional authStateDir?: string;
```

##### browser?

```ts
optional browser?: WhatsAppWebBrowserDescription;
```

##### connectTimeoutMs?

```ts
optional connectTimeoutMs?: number;
```

##### onPairingCode?

```ts
optional onPairingCode?: (code) => void;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `code` | `string` |

###### Returns

`void`

##### onQr?

```ts
optional onQr?: (qr) => void;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `qr` | `string` |

###### Returns

`void`

##### pairingPhoneNumber?

```ts
optional pairingPhoneNumber?: string;
```

##### printPairingCodeInTerminal?

```ts
optional printPairingCodeInTerminal?: boolean;
```

##### printQrInTerminal?

```ts
optional printQrInTerminal?: boolean;
```

##### sendTimeoutMs?

```ts
optional sendTimeoutMs?: number;
```

##### sessionProvider?

```ts
optional sessionProvider?: WhatsAppWebSessionProvider;
```

***

### WhatsAppWebMessagingIntegrationOptions

#### Extends

- [`WhatsAppWebMessagingClientOptions`](#whatsappwebmessagingclientoptions)

#### Properties

##### authStateDir?

```ts
optional authStateDir?: string;
```

###### Inherited from

[`WhatsAppWebMessagingClientOptions`](#whatsappwebmessagingclientoptions).[`authStateDir`](#authstatedir)

##### browser?

```ts
optional browser?: WhatsAppWebBrowserDescription;
```

###### Inherited from

[`WhatsAppWebMessagingClientOptions`](#whatsappwebmessagingclientoptions).[`browser`](#browser)

##### client?

```ts
optional client?: WhatsAppWebMessagingClient;
```

##### connectTimeoutMs?

```ts
optional connectTimeoutMs?: number;
```

###### Inherited from

[`WhatsAppWebMessagingClientOptions`](#whatsappwebmessagingclientoptions).[`connectTimeoutMs`](#connecttimeoutms)

##### onPairingCode?

```ts
optional onPairingCode?: (code) => void;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `code` | `string` |

###### Returns

`void`

###### Inherited from

[`WhatsAppWebMessagingClientOptions`](#whatsappwebmessagingclientoptions).[`onPairingCode`](#onpairingcode)

##### onQr?

```ts
optional onQr?: (qr) => void;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `qr` | `string` |

###### Returns

`void`

###### Inherited from

[`WhatsAppWebMessagingClientOptions`](#whatsappwebmessagingclientoptions).[`onQr`](#onqr)

##### pairingPhoneNumber?

```ts
optional pairingPhoneNumber?: string;
```

###### Inherited from

[`WhatsAppWebMessagingClientOptions`](#whatsappwebmessagingclientoptions).[`pairingPhoneNumber`](#pairingphonenumber)

##### printPairingCodeInTerminal?

```ts
optional printPairingCodeInTerminal?: boolean;
```

###### Inherited from

[`WhatsAppWebMessagingClientOptions`](#whatsappwebmessagingclientoptions).[`printPairingCodeInTerminal`](#printpairingcodeinterminal)

##### printQrInTerminal?

```ts
optional printQrInTerminal?: boolean;
```

###### Inherited from

[`WhatsAppWebMessagingClientOptions`](#whatsappwebmessagingclientoptions).[`printQrInTerminal`](#printqrinterminal)

##### sendTimeoutMs?

```ts
optional sendTimeoutMs?: number;
```

###### Inherited from

[`WhatsAppWebMessagingClientOptions`](#whatsappwebmessagingclientoptions).[`sendTimeoutMs`](#sendtimeoutms)

##### sessionProvider?

```ts
optional sessionProvider?: WhatsAppWebSessionProvider;
```

###### Inherited from

[`WhatsAppWebMessagingClientOptions`](#whatsappwebmessagingclientoptions).[`sessionProvider`](#sessionprovider)

***

### WhatsAppWebReadinessResult

#### Properties

##### authenticated

```ts
authenticated: boolean;
```

##### authStateDir

```ts
authStateDir: string;
```

##### ok

```ts
ok: boolean;
```

##### provider

```ts
provider: "whatsapp-web";
```

##### reason?

```ts
optional reason?: string;
```

##### user?

```ts
optional user?: WhatsAppWebJsonObject;
```

***

### WhatsAppWebSendTextInput

#### Extended by

- [`WhatsAppWebSessionSendTextInput`](#whatsappwebsessionsendtextinput)

#### Properties

##### message

```ts
message: string;
```

##### previewUrl?

```ts
optional previewUrl?: boolean;
```

##### to

```ts
to: string;
```

***

### WhatsAppWebSendTextResult

#### Properties

##### jid

```ts
jid: string;
```

##### messageId?

```ts
optional messageId?: string;
```

##### provider

```ts
provider: "whatsapp-web";
```

##### raw?

```ts
optional raw?: WhatsAppWebJsonObject;
```

##### sent

```ts
sent: boolean;
```

##### to

```ts
to: string;
```

***

### WhatsAppWebSession

#### Properties

##### user?

```ts
optional user?: WhatsAppWebJsonObject;
```

#### Methods

##### close()

```ts
close(): Promise<void>;
```

###### Returns

`Promise`\<`void`\>

##### sendText()

```ts
sendText(input): Promise<WhatsAppWebSessionSendTextResult>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`WhatsAppWebSessionSendTextInput`](#whatsappwebsessionsendtextinput) |

###### Returns

`Promise`\<[`WhatsAppWebSessionSendTextResult`](#whatsappwebsessionsendtextresult)\>

***

### WhatsAppWebSessionConnectOptions

#### Properties

##### authStateDir

```ts
authStateDir: string;
```

##### browser?

```ts
optional browser?: WhatsAppWebBrowserDescription;
```

##### connectTimeoutMs

```ts
connectTimeoutMs: number;
```

##### onPairingCode?

```ts
optional onPairingCode?: (code) => void;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `code` | `string` |

###### Returns

`void`

##### onQr?

```ts
optional onQr?: (qr) => void;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `qr` | `string` |

###### Returns

`void`

##### pairingPhoneNumber?

```ts
optional pairingPhoneNumber?: string;
```

##### printPairingCodeInTerminal

```ts
printPairingCodeInTerminal: boolean;
```

##### printQrInTerminal

```ts
printQrInTerminal: boolean;
```

##### sendTimeoutMs

```ts
sendTimeoutMs: number;
```

***

### WhatsAppWebSessionProvider

#### Methods

##### connect()

```ts
connect(options): Promise<WhatsAppWebSession>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`WhatsAppWebSessionConnectOptions`](#whatsappwebsessionconnectoptions) |

###### Returns

`Promise`\<[`WhatsAppWebSession`](#whatsappwebsession)\>

***

### WhatsAppWebSessionSendTextInput

#### Extends

- [`WhatsAppWebSendTextInput`](#whatsappwebsendtextinput)

#### Properties

##### jid

```ts
jid: string;
```

##### message

```ts
message: string;
```

###### Inherited from

[`WhatsAppWebSendTextInput`](#whatsappwebsendtextinput).[`message`](#message)

##### previewUrl?

```ts
optional previewUrl?: boolean;
```

###### Inherited from

[`WhatsAppWebSendTextInput`](#whatsappwebsendtextinput).[`previewUrl`](#previewurl)

##### to

```ts
to: string;
```

###### Inherited from

[`WhatsAppWebSendTextInput`](#whatsappwebsendtextinput).[`to`](#to-1)

***

### WhatsAppWebSessionSendTextResult

#### Properties

##### jid

```ts
jid: string;
```

##### messageId?

```ts
optional messageId?: string;
```

##### raw?

```ts
optional raw?: WhatsAppWebJsonObject;
```

##### sent

```ts
sent: boolean;
```

## Type Aliases

### WhatsAppMessageType

```ts
type WhatsAppMessageType =
  | "text"
  | "template"
  | "image"
  | "document"
  | "audio"
  | "video"
  | "sticker"
  | "interactive"
  | "location"
  | "contacts";
```

***

### WhatsAppMessagingJsonPrimitive

```ts
type WhatsAppMessagingJsonPrimitive = string | number | boolean | null;
```

***

### WhatsAppMessagingJsonValue

```ts
type WhatsAppMessagingJsonValue =
  | WhatsAppMessagingJsonPrimitive
  | WhatsAppMessagingJsonObject
  | readonly WhatsAppMessagingJsonValue[];
```

***

### WhatsAppMessagingProviderExtensionValue

```ts
type WhatsAppMessagingProviderExtensionValue =
  | WhatsAppMessagingJsonValue
  | object
  | undefined;
```

***

### WhatsAppMessagingProviderPayload

```ts
type WhatsAppMessagingProviderPayload = WhatsAppMessagingJsonObject | object;
```

***

### WhatsAppMessagingProviderQuery

```ts
type WhatsAppMessagingProviderQuery = Record<string, WhatsAppMessagingProviderExtensionValue>;
```

***

### WhatsAppNormalizedEvent

```ts
type WhatsAppNormalizedEvent =
  | {
  contact?: unknown;
  message: unknown;
  provider: "whatsapp";
  raw: unknown;
  type: "messaging.message.received";
}
  | {
  provider: "whatsapp";
  raw: unknown;
  status: unknown;
  type: "messaging.delivery.updated";
};
```

***

### WhatsAppWebBrowserDescription

```ts
type WhatsAppWebBrowserDescription = [string, string, string];
```

***

### WhatsAppWebJsonPrimitive

```ts
type WhatsAppWebJsonPrimitive = string | number | boolean | null;
```

***

### WhatsAppWebJsonValue

```ts
type WhatsAppWebJsonValue =
  | WhatsAppWebJsonPrimitive
  | WhatsAppWebJsonObject
  | WhatsAppWebJsonValue[];
```

## Variables

### createWhatsAppIntegrationOperationHandlers

```ts
const createWhatsAppIntegrationOperationHandlers: typeof createWhatsAppMessagingOperationHandlers;
```

***

### whatsappWebLinkedDeviceRuntimeException

```ts
const whatsappWebLinkedDeviceRuntimeException: {
  evidence: readonly [{
     label: "Baileys introduction";
     url: "https://baileys.wiki/docs/intro/";
   }, {
     label: "WhiskeySockets/Baileys";
     url: "https://github.com/WhiskeySockets/Baileys";
  }];
  officialProviderSdk: false;
  officialWhatsAppBusinessApi: false;
  provider: "whatsapp-web";
  reason: "Baileys is deliberately scoped to the community WhatsApp Web linked-device adapter; it is not an official Meta WhatsApp Business Platform SDK and does not use the WhatsApp Business API.";
  runtimePackage: "baileys";
  runtimePackageSource: "WhiskeySockets/Baileys";
  scope: "send-only WhatsApp Web linked-device adapter";
  strategy: "community-linked-device-runtime";
  verifiedAt: "2026-06-25";
};
```

#### Type Declaration

| Name | Type |
| ------ | ------ |
| <a id="property-evidence"></a> `evidence` | readonly \[\{ `label`: `"Baileys introduction"`; `url`: `"https://baileys.wiki/docs/intro/"`; \}, \{ `label`: `"WhiskeySockets/Baileys"`; `url`: `"https://github.com/WhiskeySockets/Baileys"`; \}\] |
| <a id="property-officialprovidersdk"></a> `officialProviderSdk` | `false` |
| <a id="property-officialwhatsappbusinessapi"></a> `officialWhatsAppBusinessApi` | `false` |
| <a id="property-provider"></a> `provider` | `"whatsapp-web"` |
| <a id="property-reason"></a> `reason` | `"Baileys is deliberately scoped to the community WhatsApp Web linked-device adapter; it is not an official Meta WhatsApp Business Platform SDK and does not use the WhatsApp Business API."` |
| <a id="property-runtimepackage"></a> `runtimePackage` | `"baileys"` |
| <a id="property-runtimepackagesource"></a> `runtimePackageSource` | `"WhiskeySockets/Baileys"` |
| <a id="property-scope"></a> `scope` | `"send-only WhatsApp Web linked-device adapter"` |
| <a id="property-strategy"></a> `strategy` | `"community-linked-device-runtime"` |
| <a id="property-verifiedat"></a> `verifiedAt` | `"2026-06-25"` |

***

### whatsappWebMessagingProviderManifest

```ts
const whatsappWebMessagingProviderManifest: {
  capabilities: {
     audiences?: ("customer-facing" | "mixed" | "internal-support")[];
     capability: string;
     changesWorkflow?: boolean;
     description?: string;
     exposesSensitiveData?: boolean;
     extension?: boolean;
     label?: string;
     metadata?: Record<string, unknown>;
     providerObjects?: {
        description?: string;
        kind: string;
        label?: string;
        metadata?: Record<string, unknown>;
        schemaName?: string;
     }[];
     requiresCredential?: boolean;
     sideEffect?: boolean;
  }[];
  category: string;
  channelAudiences: ("customer-facing" | "mixed" | "internal-support")[];
  coverage: {
     evidence: {
        label: string;
        url?: string;
     }[];
     notes: string[];
     scope:   | "support-workflow-subset"
        | "provider-api-subset"
        | "connector-required"
        | "local-protocol"
        | "full-provider-api";
  };
  credentialRequirements: {
     description?: string;
     id: string;
     label?: string;
     metadata?: Record<string, unknown>;
     required: boolean;
     scopes: string[];
  }[];
  directions: (
     | "receive-only"
     | "send-only"
     | "bidirectional"
     | "inbound-only"
    | "outbound-only")[];
  id: string;
  limitations: string[];
  maintainers: {
     name: string;
     type: "official" | "community" | "unknown" | "partner";
     url?: string;
  }[];
  metadata?: Record<string, unknown>;
  name: string;
  operations: {
     alias: string;
     audience?: "customer-facing" | "mixed" | "internal-support";
     audiences?: ("customer-facing" | "mixed" | "internal-support")[];
     capability: string;
     changesWorkflow?: boolean;
     description?: string;
     exposesSensitiveData?: boolean;
     extension: boolean;
     externallyVisible?: boolean;
     inputSchema?: unknown;
     inputSchemaName?: string;
     inputSchemaRef?: string;
     label?: string;
     metadata?: Record<string, unknown>;
     outputSchema?: unknown;
     outputSchemaName?: string;
     outputSchemaRef?: string;
     providerObject?: string;
     providerObjects?: {
        description?: string;
        kind: string;
        label?: string;
        metadata?: Record<string, unknown>;
        schemaName?: string;
     }[];
     providerOperation?: string;
     requiredPolicyIds?: string[];
     requiresApproval?: boolean;
     requiresCredential?: boolean;
     sideEffect?: boolean;
  }[];
  packageName: string;
  privacyNotes: string[];
  provider: string;
  trustLevel: "official" | "community" | "verified" | "experimental";
} & {
  capabilities: readonly [{
     audiences: readonly ["customer-facing", "mixed"];
     capability: "send";
     description: "Sends WhatsApp text messages through a locally authenticated WhatsApp Web linked-device session.";
     exposesSensitiveData: true;
     label: "Send WhatsApp text messages via linked device";
     providerObjects: readonly [{
        kind: "whatsappWebMessage";
        label: "WhatsApp Web Message";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     audiences: readonly ["internal-support"];
     capability: "provider-readiness";
     description: "Attempts to open the configured WhatsApp Web linked-device session.";
     extension: true;
     label: "Check WhatsApp Web session readiness";
     providerObjects: readonly [{
        kind: "whatsappWebReadiness";
        label: "WhatsApp Web Readiness";
     }];
     requiresCredential: true;
  }];
  category: "messaging";
  channelAudiences: readonly ["customer-facing", "mixed"];
  coverage: {
     evidence: readonly [{
        label: "wacli GitHub";
        url: "https://github.com/openclaw/wacli";
      }, {
        label: "Baileys introduction";
        url: "https://baileys.wiki/docs/intro/";
      }, {
        label: "Baileys connecting";
        url: "https://baileys.wiki/docs/socket/connecting/";
     }];
     notes: readonly ["Sends WhatsApp text messages through a locally paired WhatsApp Web linked-device session.", "This adapter follows the same non-Business-API linked-device approach used by WhatsApp Web clients such as openclaw/wacli, but it does not shell out to the wacli binary.", "This adapter does not require a WhatsApp Business Account, Meta app, Cloud API token, or phone_number_id.", "This is not an official WhatsApp Business Platform integration; delivery, account limits, session health, and terms/compliance are owned by the SDK user.", "Inbound sync and local search are outside this initial send-only adapter scope."];
     scope: "local-protocol";
  };
  credentialRequirements: readonly [{
     description: "Local linked-device auth state directory used to reconnect to WhatsApp Web.";
     id: "whatsapp-web-auth-state";
     label: "WhatsApp Web auth state";
     required: true;
   }, {
     description: "Pair the session from WhatsApp Linked Devices before sending messages.";
     id: "whatsapp-web-linked-device-session";
     label: "WhatsApp linked-device session";
     required: true;
   }, {
     description: "Optional phone number used to request a WhatsApp Web pairing code instead of scanning a QR code.";
     id: "whatsapp-web-pairing-phone";
     label: "WhatsApp pairing phone";
     required: false;
  }];
  dataHandling: readonly ["Outbound message text and recipient identifiers are sent through the local WhatsApp Web session.", "WhatsApp Web auth/session state is stored in the configured local auth state directory."];
  directions: readonly ["send-only"];
  id: "messaging.whatsapp-web";
  limits: readonly ["Requires a previously paired WhatsApp linked-device session or an interactive first pairing.", "Only text sends are wrapped in this adapter; media, groups, sync, and search are outside the initial scope.", "Use with an account dedicated to automation or demos; do not link a personal inbox unless the operator understands the privacy and automation risk."];
  metadata: {
     implementationStrategy: "linked-device-websocket";
     protocol: "whatsapp-web-linked-device";
     runtimeException: {
        evidence: readonly [{
           label: "Baileys introduction";
           url: "https://baileys.wiki/docs/intro/";
         }, {
           label: "WhiskeySockets/Baileys";
           url: "https://github.com/WhiskeySockets/Baileys";
        }];
        officialProviderSdk: false;
        officialWhatsAppBusinessApi: false;
        provider: "whatsapp-web";
        reason: "Baileys is deliberately scoped to the community WhatsApp Web linked-device adapter; it is not an official Meta WhatsApp Business Platform SDK and does not use the WhatsApp Business API.";
        runtimePackage: "baileys";
        runtimePackageSource: "WhiskeySockets/Baileys";
        scope: "send-only WhatsApp Web linked-device adapter";
        strategy: "community-linked-device-runtime";
        verifiedAt: "2026-06-25";
     };
     runtimeLibrary: {
        declaredProviderSdkDependency: true;
        name: "baileys";
        packageName: "baileys";
        source: "WhiskeySockets/Baileys";
     };
  };
  name: "WhatsApp Web Linked Device";
  operations: readonly [{
     alias: "whatsapp-web.message.send";
     capability: "send";
     exposesSensitiveData: true;
     extension: true;
     externallyVisible: true;
     inputSchemaName: "WhatsAppWebSendTextInput";
     outputSchemaName: "WhatsAppWebSendTextResult";
     providerObject: "whatsappWebMessage";
     providerOperation: "sendMessage";
     requiresCredential: true;
     sideEffect: true;
   }, {
     alias: "whatsapp-web.readiness.check";
     capability: "provider-readiness";
     extension: true;
     outputSchemaName: "WhatsAppWebReadinessResult";
     providerObject: "whatsappWebReadiness";
     providerOperation: "connect";
     requiresCredential: true;
  }];
  packageName: "@cognidesk/integration-messaging-whatsapp";
  provider: "whatsapp-web";
  trustLevel: "community";
};
```

#### Type Declaration

| Name | Type |
| ------ | ------ |
| `capabilities` | \{ `audiences?`: (`"customer-facing"` \| `"mixed"` \| `"internal-support"`)[]; `capability`: `string`; `changesWorkflow?`: `boolean`; `description?`: `string`; `exposesSensitiveData?`: `boolean`; `extension?`: `boolean`; `label?`: `string`; `metadata?`: `Record`\<`string`, `unknown`\>; `providerObjects?`: \{ `description?`: `string`; `kind`: `string`; `label?`: `string`; `metadata?`: `Record`\<`string`, `unknown`\>; `schemaName?`: `string`; \}[]; `requiresCredential?`: `boolean`; `sideEffect?`: `boolean`; \}[] |
| `category` | `string` |
| `channelAudiences` | (`"customer-facing"` \| `"mixed"` \| `"internal-support"`)[] |
| `coverage` | \{ `evidence`: \{ `label`: `string`; `url?`: `string`; \}[]; `notes`: `string`[]; `scope`: \| `"support-workflow-subset"` \| `"provider-api-subset"` \| `"connector-required"` \| `"local-protocol"` \| `"full-provider-api"`; \} |
| `coverage.evidence` | \{ `label`: `string`; `url?`: `string`; \}[] |
| `coverage.notes` | `string`[] |
| `coverage.scope` | \| `"support-workflow-subset"` \| `"provider-api-subset"` \| `"connector-required"` \| `"local-protocol"` \| `"full-provider-api"` |
| `credentialRequirements` | \{ `description?`: `string`; `id`: `string`; `label?`: `string`; `metadata?`: `Record`\<`string`, `unknown`\>; `required`: `boolean`; `scopes`: `string`[]; \}[] |
| `directions` | ( \| `"receive-only"` \| `"send-only"` \| `"bidirectional"` \| `"inbound-only"` \| `"outbound-only"`)[] |
| `id` | `string` |
| `limitations` | `string`[] |
| `maintainers` | \{ `name`: `string`; `type`: `"official"` \| `"community"` \| `"unknown"` \| `"partner"`; `url?`: `string`; \}[] |
| `metadata?` | `Record`\<`string`, `unknown`\> |
| `name` | `string` |
| `operations` | \{ `alias`: `string`; `audience?`: `"customer-facing"` \| `"mixed"` \| `"internal-support"`; `audiences?`: (`"customer-facing"` \| `"mixed"` \| `"internal-support"`)[]; `capability`: `string`; `changesWorkflow?`: `boolean`; `description?`: `string`; `exposesSensitiveData?`: `boolean`; `extension`: `boolean`; `externallyVisible?`: `boolean`; `inputSchema?`: `unknown`; `inputSchemaName?`: `string`; `inputSchemaRef?`: `string`; `label?`: `string`; `metadata?`: `Record`\<`string`, `unknown`\>; `outputSchema?`: `unknown`; `outputSchemaName?`: `string`; `outputSchemaRef?`: `string`; `providerObject?`: `string`; `providerObjects?`: \{ `description?`: `string`; `kind`: `string`; `label?`: `string`; `metadata?`: `Record`\<`string`, `unknown`\>; `schemaName?`: `string`; \}[]; `providerOperation?`: `string`; `requiredPolicyIds?`: `string`[]; `requiresApproval?`: `boolean`; `requiresCredential?`: `boolean`; `sideEffect?`: `boolean`; \}[] |
| `packageName` | `string` |
| `privacyNotes` | `string`[] |
| `provider` | `string` |
| `trustLevel` | `"official"` \| `"community"` \| `"verified"` \| `"experimental"` |

#### Type Declaration

| Name | Type |
| ------ | ------ |
| `capabilities` | readonly \[\{ `audiences`: readonly \[`"customer-facing"`, `"mixed"`\]; `capability`: `"send"`; `description`: `"Sends WhatsApp text messages through a locally authenticated WhatsApp Web linked-device session."`; `exposesSensitiveData`: `true`; `label`: `"Send WhatsApp text messages via linked device"`; `providerObjects`: readonly \[\{ `kind`: `"whatsappWebMessage"`; `label`: `"WhatsApp Web Message"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `audiences`: readonly \[`"internal-support"`\]; `capability`: `"provider-readiness"`; `description`: `"Attempts to open the configured WhatsApp Web linked-device session."`; `extension`: `true`; `label`: `"Check WhatsApp Web session readiness"`; `providerObjects`: readonly \[\{ `kind`: `"whatsappWebReadiness"`; `label`: `"WhatsApp Web Readiness"`; \}\]; `requiresCredential`: `true`; \}\] |
| `category` | `"messaging"` |
| `channelAudiences` | readonly \[`"customer-facing"`, `"mixed"`\] |
| `coverage` | \{ `evidence`: readonly \[\{ `label`: `"wacli GitHub"`; `url`: `"https://github.com/openclaw/wacli"`; \}, \{ `label`: `"Baileys introduction"`; `url`: `"https://baileys.wiki/docs/intro/"`; \}, \{ `label`: `"Baileys connecting"`; `url`: `"https://baileys.wiki/docs/socket/connecting/"`; \}\]; `notes`: readonly \[`"Sends WhatsApp text messages through a locally paired WhatsApp Web linked-device session."`, `"This adapter follows the same non-Business-API linked-device approach used by WhatsApp Web clients such as openclaw/wacli, but it does not shell out to the wacli binary."`, `"This adapter does not require a WhatsApp Business Account, Meta app, Cloud API token, or phone_number_id."`, `"This is not an official WhatsApp Business Platform integration; delivery, account limits, session health, and terms/compliance are owned by the SDK user."`, `"Inbound sync and local search are outside this initial send-only adapter scope."`\]; `scope`: `"local-protocol"`; \} |
| `coverage.evidence` | readonly \[\{ `label`: `"wacli GitHub"`; `url`: `"https://github.com/openclaw/wacli"`; \}, \{ `label`: `"Baileys introduction"`; `url`: `"https://baileys.wiki/docs/intro/"`; \}, \{ `label`: `"Baileys connecting"`; `url`: `"https://baileys.wiki/docs/socket/connecting/"`; \}\] |
| `coverage.notes` | readonly \[`"Sends WhatsApp text messages through a locally paired WhatsApp Web linked-device session."`, `"This adapter follows the same non-Business-API linked-device approach used by WhatsApp Web clients such as openclaw/wacli, but it does not shell out to the wacli binary."`, `"This adapter does not require a WhatsApp Business Account, Meta app, Cloud API token, or phone_number_id."`, `"This is not an official WhatsApp Business Platform integration; delivery, account limits, session health, and terms/compliance are owned by the SDK user."`, `"Inbound sync and local search are outside this initial send-only adapter scope."`\] |
| `coverage.scope` | `"local-protocol"` |
| `credentialRequirements` | readonly \[\{ `description`: `"Local linked-device auth state directory used to reconnect to WhatsApp Web."`; `id`: `"whatsapp-web-auth-state"`; `label`: `"WhatsApp Web auth state"`; `required`: `true`; \}, \{ `description`: `"Pair the session from WhatsApp Linked Devices before sending messages."`; `id`: `"whatsapp-web-linked-device-session"`; `label`: `"WhatsApp linked-device session"`; `required`: `true`; \}, \{ `description`: `"Optional phone number used to request a WhatsApp Web pairing code instead of scanning a QR code."`; `id`: `"whatsapp-web-pairing-phone"`; `label`: `"WhatsApp pairing phone"`; `required`: `false`; \}\] |
| `dataHandling` | readonly \[`"Outbound message text and recipient identifiers are sent through the local WhatsApp Web session."`, `"WhatsApp Web auth/session state is stored in the configured local auth state directory."`\] |
| `directions` | readonly \[`"send-only"`\] |
| `id` | `"messaging.whatsapp-web"` |
| `limits` | readonly \[`"Requires a previously paired WhatsApp linked-device session or an interactive first pairing."`, `"Only text sends are wrapped in this adapter; media, groups, sync, and search are outside the initial scope."`, `"Use with an account dedicated to automation or demos; do not link a personal inbox unless the operator understands the privacy and automation risk."`\] |
| `metadata` | \{ `implementationStrategy`: `"linked-device-websocket"`; `protocol`: `"whatsapp-web-linked-device"`; `runtimeException`: \{ `evidence`: readonly \[\{ `label`: `"Baileys introduction"`; `url`: `"https://baileys.wiki/docs/intro/"`; \}, \{ `label`: `"WhiskeySockets/Baileys"`; `url`: `"https://github.com/WhiskeySockets/Baileys"`; \}\]; `officialProviderSdk`: `false`; `officialWhatsAppBusinessApi`: `false`; `provider`: `"whatsapp-web"`; `reason`: `"Baileys is deliberately scoped to the community WhatsApp Web linked-device adapter; it is not an official Meta WhatsApp Business Platform SDK and does not use the WhatsApp Business API."`; `runtimePackage`: `"baileys"`; `runtimePackageSource`: `"WhiskeySockets/Baileys"`; `scope`: `"send-only WhatsApp Web linked-device adapter"`; `strategy`: `"community-linked-device-runtime"`; `verifiedAt`: `"2026-06-25"`; \}; `runtimeLibrary`: \{ `declaredProviderSdkDependency`: `true`; `name`: `"baileys"`; `packageName`: `"baileys"`; `source`: `"WhiskeySockets/Baileys"`; \}; \} |
| `metadata.implementationStrategy` | `"linked-device-websocket"` |
| `metadata.protocol` | `"whatsapp-web-linked-device"` |
| `metadata.runtimeException` | \{ `evidence`: readonly \[\{ `label`: `"Baileys introduction"`; `url`: `"https://baileys.wiki/docs/intro/"`; \}, \{ `label`: `"WhiskeySockets/Baileys"`; `url`: `"https://github.com/WhiskeySockets/Baileys"`; \}\]; `officialProviderSdk`: `false`; `officialWhatsAppBusinessApi`: `false`; `provider`: `"whatsapp-web"`; `reason`: `"Baileys is deliberately scoped to the community WhatsApp Web linked-device adapter; it is not an official Meta WhatsApp Business Platform SDK and does not use the WhatsApp Business API."`; `runtimePackage`: `"baileys"`; `runtimePackageSource`: `"WhiskeySockets/Baileys"`; `scope`: `"send-only WhatsApp Web linked-device adapter"`; `strategy`: `"community-linked-device-runtime"`; `verifiedAt`: `"2026-06-25"`; \} |
| `metadata.runtimeException.evidence` | readonly \[\{ `label`: `"Baileys introduction"`; `url`: `"https://baileys.wiki/docs/intro/"`; \}, \{ `label`: `"WhiskeySockets/Baileys"`; `url`: `"https://github.com/WhiskeySockets/Baileys"`; \}\] |
| `metadata.runtimeException.officialProviderSdk` | `false` |
| `metadata.runtimeException.officialWhatsAppBusinessApi` | `false` |
| `metadata.runtimeException.provider` | `"whatsapp-web"` |
| `metadata.runtimeException.reason` | `"Baileys is deliberately scoped to the community WhatsApp Web linked-device adapter; it is not an official Meta WhatsApp Business Platform SDK and does not use the WhatsApp Business API."` |
| `metadata.runtimeException.runtimePackage` | `"baileys"` |
| `metadata.runtimeException.runtimePackageSource` | `"WhiskeySockets/Baileys"` |
| `metadata.runtimeException.scope` | `"send-only WhatsApp Web linked-device adapter"` |
| `metadata.runtimeException.strategy` | `"community-linked-device-runtime"` |
| `metadata.runtimeException.verifiedAt` | `"2026-06-25"` |
| `metadata.runtimeLibrary` | \{ `declaredProviderSdkDependency`: `true`; `name`: `"baileys"`; `packageName`: `"baileys"`; `source`: `"WhiskeySockets/Baileys"`; \} |
| `metadata.runtimeLibrary.declaredProviderSdkDependency` | `true` |
| `metadata.runtimeLibrary.name` | `"baileys"` |
| `metadata.runtimeLibrary.packageName` | `"baileys"` |
| `metadata.runtimeLibrary.source` | `"WhiskeySockets/Baileys"` |
| `name` | `"WhatsApp Web Linked Device"` |
| `operations` | readonly \[\{ `alias`: `"whatsapp-web.message.send"`; `capability`: `"send"`; `exposesSensitiveData`: `true`; `extension`: `true`; `externallyVisible`: `true`; `inputSchemaName`: `"WhatsAppWebSendTextInput"`; `outputSchemaName`: `"WhatsAppWebSendTextResult"`; `providerObject`: `"whatsappWebMessage"`; `providerOperation`: `"sendMessage"`; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `alias`: `"whatsapp-web.readiness.check"`; `capability`: `"provider-readiness"`; `extension`: `true`; `outputSchemaName`: `"WhatsAppWebReadinessResult"`; `providerObject`: `"whatsappWebReadiness"`; `providerOperation`: `"connect"`; `requiresCredential`: `true`; \}\] |
| `packageName` | `"@cognidesk/integration-messaging-whatsapp"` |
| `provider` | `"whatsapp-web"` |
| `trustLevel` | `"community"` |

## Functions

### createBaileysWhatsAppWebSessionProvider()

```ts
function createBaileysWhatsAppWebSessionProvider(): WhatsAppWebSessionProvider;
```

#### Returns

[`WhatsAppWebSessionProvider`](#whatsappwebsessionprovider)

***

### createWhatsAppGraphProviderClient()

```ts
function createWhatsAppGraphProviderClient(options): WhatsAppMessagingProviderClient;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`WhatsAppMessagingClientOptions`](#whatsappmessagingclientoptions) |

#### Returns

[`WhatsAppMessagingProviderClient`](#whatsappmessagingproviderclient)

***

### createWhatsAppMessagingClient()

```ts
function createWhatsAppMessagingClient(options?): WhatsAppMessagingClient;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options?` | [`WhatsAppMessagingClientOptions`](#whatsappmessagingclientoptions) |

#### Returns

[`WhatsAppMessagingClient`](#whatsappmessagingclient)

***

### createWhatsAppMessagingLiveChecks()

```ts
function createWhatsAppMessagingLiveChecks(options): {
  description: string;
  id: string;
  requiredCredentialIds: string[];
  run: Promise<{
     details: {
        displayPhoneNumber: string;
        id: string;
        platformType: string;
        qualityRating: string;
        verifiedName: string;
     };
  }>;
}[];
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`WhatsAppLiveCheckOptions`](#whatsapplivecheckoptions) |

#### Returns

\{
  `description`: `string`;
  `id`: `string`;
  `requiredCredentialIds`: `string`[];
  `run`: `Promise`\<\{
     `details`: \{
        `displayPhoneNumber`: `string`;
        `id`: `string`;
        `platformType`: `string`;
        `qualityRating`: `string`;
        `verifiedName`: `string`;
     \};
  \}\>;
\}[]

***

### createWhatsAppMessagingOperationHandlers()

```ts
function createWhatsAppMessagingOperationHandlers(options): {
  messaging.draft.create: (input) => Promise<WhatsAppMessagingJsonObject>;
  messaging.media.send: (input) => Promise<WhatsAppMediaResource>;
  messaging.message.receive: (input) => Promise<WhatsAppSignedWebhook>;
  messaging.message.send: (input) => Promise<WhatsAppApiResponse>;
  messaging.template.send: (input) => Promise<WhatsAppApiResponse>;
  whatsapp.businessProfile.read: (input) => Promise<WhatsAppBusinessProfileResponse>;
  whatsapp.businessProfile.update: (input) => Promise<{
   [key: string]: WhatsAppMessagingJsonValue;
     success?: boolean;
  }>;
  whatsapp.phoneNumber.read: (input) => Promise<WhatsAppPhoneNumberResource>;
  whatsapp.webhook-signature: (input) => Promise<boolean>;
};
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`WhatsAppMessagingIntegrationOptions`](#whatsappmessagingintegrationoptions) |

#### Returns

```ts
{
  messaging.draft.create: (input) => Promise<WhatsAppMessagingJsonObject>;
  messaging.media.send: (input) => Promise<WhatsAppMediaResource>;
  messaging.message.receive: (input) => Promise<WhatsAppSignedWebhook>;
  messaging.message.send: (input) => Promise<WhatsAppApiResponse>;
  messaging.template.send: (input) => Promise<WhatsAppApiResponse>;
  whatsapp.businessProfile.read: (input) => Promise<WhatsAppBusinessProfileResponse>;
  whatsapp.businessProfile.update: (input) => Promise<{
   [key: string]: WhatsAppMessagingJsonValue;
     success?: boolean;
  }>;
  whatsapp.phoneNumber.read: (input) => Promise<WhatsAppPhoneNumberResource>;
  whatsapp.webhook-signature: (input) => Promise<boolean>;
}
```

| Name | Type |
| ------ | ------ |
| `messaging.draft.create()` | (`input`) => `Promise`\<[`WhatsAppMessagingJsonObject`](#whatsappmessagingjsonobject)\> |
| `messaging.media.send()` | (`input`) => `Promise`\<[`WhatsAppMediaResource`](#whatsappmediaresource)\> |
| `messaging.message.receive()` | (`input`) => `Promise`\<[`WhatsAppSignedWebhook`](#whatsappsignedwebhook)\> |
| `messaging.message.send()` | (`input`) => `Promise`\<[`WhatsAppApiResponse`](#whatsappapiresponse)\> |
| `messaging.template.send()` | (`input`) => `Promise`\<[`WhatsAppApiResponse`](#whatsappapiresponse)\> |
| `whatsapp.businessProfile.read()` | (`input`) => `Promise`\<[`WhatsAppBusinessProfileResponse`](#whatsappbusinessprofileresponse)\> |
| `whatsapp.businessProfile.update()` | (`input`) => `Promise`\<\{ \[`key`: `string`\]: [`WhatsAppMessagingJsonValue`](#whatsappmessagingjsonvalue); `success?`: `boolean`; \}\> |
| `whatsapp.phoneNumber.read()` | (`input`) => `Promise`\<[`WhatsAppPhoneNumberResource`](#whatsappphonenumberresource)\> |
| `whatsapp.webhook-signature()` | (`input`) => `Promise`\<`boolean`\> |

***

### createWhatsAppTemplateMessage()

```ts
function createWhatsAppTemplateMessage(input): WhatsAppMessageInput;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | \{ `components?`: [`WhatsAppMessagingJsonValue`](#whatsappmessagingjsonvalue)[]; `contextMessageId?`: `string`; `languageCode`: `string`; `name`: `string`; `to`: `string`; \} |
| `input.components?` | [`WhatsAppMessagingJsonValue`](#whatsappmessagingjsonvalue)[] |
| `input.contextMessageId?` | `string` |
| `input.languageCode` | `string` |
| `input.name` | `string` |
| `input.to` | `string` |

#### Returns

[`WhatsAppMessageInput`](#whatsappmessageinput)

***

### createWhatsAppTextMessage()

```ts
function createWhatsAppTextMessage(input): WhatsAppMessageInput;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | \{ `body`: `string`; `contextMessageId?`: `string`; `previewUrl?`: `boolean`; `to`: `string`; \} |
| `input.body` | `string` |
| `input.contextMessageId?` | `string` |
| `input.previewUrl?` | `boolean` |
| `input.to` | `string` |

#### Returns

[`WhatsAppMessageInput`](#whatsappmessageinput)

***

### createWhatsAppWebMessagingClient()

```ts
function createWhatsAppWebMessagingClient(options?): WhatsAppWebMessagingClient;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options?` | [`WhatsAppWebMessagingClientOptions`](#whatsappwebmessagingclientoptions) |

#### Returns

[`WhatsAppWebMessagingClient`](#whatsappwebmessagingclient)

***

### createWhatsAppWebMessagingOperationHandlers()

```ts
function createWhatsAppWebMessagingOperationHandlers(options?): {
  whatsapp-web.message.send: (input) => Promise<WhatsAppWebSendTextResult>;
  whatsapp-web.readiness.check: () => Promise<WhatsAppWebReadinessResult>;
};
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options?` | [`WhatsAppWebMessagingIntegrationOptions`](#whatsappwebmessagingintegrationoptions) |

#### Returns

```ts
{
  whatsapp-web.message.send: (input) => Promise<WhatsAppWebSendTextResult>;
  whatsapp-web.readiness.check: () => Promise<WhatsAppWebReadinessResult>;
}
```

| Name | Type |
| ------ | ------ |
| `whatsapp-web.message.send()` | (`input`) => `Promise`\<[`WhatsAppWebSendTextResult`](#whatsappwebsendtextresult)\> |
| `whatsapp-web.readiness.check()` | () => `Promise`\<[`WhatsAppWebReadinessResult`](#whatsappwebreadinessresult)\> |

***

### defineWhatsAppMessagingIntegration()

```ts
function defineWhatsAppMessagingIntegration(options): DefinedIntegration<{
  capabilities: {
     audiences?: ("customer-facing" | "internal-support" | "mixed")[];
     capability: string;
     changesWorkflow?: boolean;
     description?: string;
     exposesSensitiveData?: boolean;
     extension?: boolean;
     label?: string;
     metadata?: Record<string, unknown>;
     providerObjects?: {
        description?: string;
        kind: string;
        label?: string;
        metadata?: Record<string, unknown>;
        schemaName?: string;
     }[];
     requiresCredential?: boolean;
     sideEffect?: boolean;
  }[];
  category: string;
  channelAudiences: ("customer-facing" | "internal-support" | "mixed")[];
  coverage: {
     evidence: {
        label: string;
        url?: string;
     }[];
     notes: string[];
     scope:   | "support-workflow-subset"
        | "provider-api-subset"
        | "connector-required"
        | "local-protocol"
        | "full-provider-api";
  };
  credentialRequirements: {
     description?: string;
     id: string;
     label?: string;
     metadata?: Record<string, unknown>;
     required: boolean;
     scopes: string[];
  }[];
  directions: (
     | "receive-only"
     | "send-only"
     | "inbound-only"
     | "outbound-only"
    | "bidirectional")[];
  id: string;
  limitations: string[];
  maintainers: {
     name: string;
     type: "community" | "official" | "unknown" | "partner";
     url?: string;
  }[];
  metadata?: Record<string, unknown>;
  name: string;
  operations: {
     alias: string;
     audience?: "customer-facing" | "internal-support" | "mixed";
     audiences?: ("customer-facing" | "internal-support" | "mixed")[];
     capability: string;
     changesWorkflow?: boolean;
     description?: string;
     exposesSensitiveData?: boolean;
     extension: boolean;
     externallyVisible?: boolean;
     inputSchema?: unknown;
     inputSchemaName?: string;
     inputSchemaRef?: string;
     label?: string;
     metadata?: Record<string, unknown>;
     outputSchema?: unknown;
     outputSchemaName?: string;
     outputSchemaRef?: string;
     providerObject?: string;
     providerObjects?: {
        description?: string;
        kind: string;
        label?: string;
        metadata?: Record<string, unknown>;
        schemaName?: string;
     }[];
     providerOperation?: string;
     requiredPolicyIds?: string[];
     requiresApproval?: boolean;
     requiresCredential?: boolean;
     sideEffect?: boolean;
  }[];
  packageName: string;
  privacyNotes: string[];
  provider: string;
  trustLevel: "community" | "official" | "verified" | "experimental";
} & {
  capabilities: readonly [{
     audiences: readonly ["customer-facing", "mixed"];
     capability: "receive";
     description: "Validates and parses WhatsApp Business Platform webhook payloads after the SDK user's Meta app is subscribed to the WABA messages webhook.";
     exposesSensitiveData: true;
     label: "Receive WhatsApp webhooks";
     providerObjects: readonly [{
        kind: "whatsappWebhook";
        label: "WhatsApp Webhook";
      }, {
        kind: "whatsappMessage";
        label: "WhatsApp Message";
      }, {
        kind: "whatsappStatus";
        label: "WhatsApp Message Status";
     }];
     requiresCredential: true;
   }, {
     audiences: readonly ["customer-facing"];
     capability: "send";
     description: "Sends WhatsApp messages through the configured Graph API adapter or provider client when SDK-user policy permits outbound contact: free-form service messages inside the customer service window or approved templates outside it.";
     exposesSensitiveData: true;
     label: "Send WhatsApp messages";
     providerObjects: readonly [{
        kind: "whatsappMessage";
        label: "WhatsApp Message";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     audiences: readonly ["customer-facing", "mixed"];
     capability: "draft";
     description: "Builds Cloud API message request payloads for SDK-user-configured approval workflows.";
     exposesSensitiveData: true;
     label: "Build WhatsApp message payloads";
     providerObjects: readonly [{
        kind: "whatsappMessageDraft";
        label: "WhatsApp Message Draft";
     }];
     requiresCredential: false;
   }, {
     audiences: readonly ["customer-facing", "mixed"];
     capability: "media";
     description: "Uploads media, reads media metadata, and downloads media bytes through the configured Graph API adapter or provider client.";
     exposesSensitiveData: true;
     label: "Use WhatsApp media";
     providerObjects: readonly [{
        kind: "whatsappMedia";
        label: "WhatsApp Media";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     audiences: readonly ["customer-facing", "mixed"];
     capability: "attach";
     description: "References uploaded WhatsApp media IDs in outbound messages selected by SDK configuration.";
     exposesSensitiveData: true;
     label: "Attach WhatsApp media";
     providerObjects: readonly [{
        kind: "whatsappMedia";
        label: "WhatsApp Media";
      }, {
        kind: "whatsappMessage";
        label: "WhatsApp Message";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     audiences: readonly ["internal-support", "mixed"];
     capability: "read-provider-object";
     description: "Reads WhatsApp Business phone-number readiness and business profile resources through the configured Graph API adapter or provider client for Studio-visible configuration and support diagnostics.";
     exposesSensitiveData: true;
     label: "Read WhatsApp phone number and profile";
     providerObjects: readonly [{
        kind: "whatsappPhoneNumber";
        label: "WhatsApp Business Phone Number";
      }, {
        kind: "whatsappBusinessProfile";
        label: "WhatsApp Business Profile";
     }];
     requiresCredential: true;
   }, {
     audiences: readonly ["internal-support"];
     capability: "update-provider-object";
     changesWorkflow: true;
     description: "Updates WhatsApp Business profile fields through the configured Graph API adapter or provider client when SDK-user configuration permits profile changes.";
     exposesSensitiveData: true;
     label: "Update WhatsApp business profile";
     providerObjects: readonly [{
        kind: "whatsappBusinessProfile";
        label: "WhatsApp Business Profile";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     audiences: readonly ["internal-support"];
     capability: "whatsapp.webhook-signature";
     description: "Validates Meta X-Hub-Signature-256 webhook signatures with the SDK user's app secret.";
     exposesSensitiveData: true;
     extension: true;
     label: "Validate WhatsApp webhook signatures";
     providerObjects: readonly [{
        kind: "whatsappSignedWebhook";
        label: "WhatsApp Signed Webhook";
     }];
     requiresCredential: true;
  }];
  category: "messaging";
  channelAudiences: readonly ["customer-facing", "mixed"];
  coverage: {
     evidence: readonly [{
        label: "WhatsApp Cloud API get started";
        url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/get-started";
      }, {
        label: "WhatsApp template fundamentals";
        url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/overview";
      }, {
        label: "WhatsApp media";
        url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/business-phone-numbers/media/";
      }, {
        label: "WhatsApp business profiles";
        url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/business-phone-numbers/business-profiles";
      }, {
        label: "WhatsApp business phone numbers";
        url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/business-phone-numbers/phone-numbers";
      }, {
        label: "WhatsApp webhooks";
        url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/overview/";
      }, {
        label: "WhatsApp permissions";
        url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/permissions/";
     }];
     notes: readonly ["Coverage is typed for selected WhatsApp Business Platform support workflows: provider REST adapter message sends, template payload construction, media upload/get/download, phone-number readiness, business profile get/update, webhook challenge handling, and X-Hub-Signature-256 validation.", "This is not full WhatsApp Business Platform coverage; template CRUD/listing, Flows, commerce, Calling API, groups, phone-number registration and management, WABA account management, analytics, and broader Business Management APIs remain outside this adapter."];
     scope: "support-workflow-subset";
  };
  credentialRequirements: readonly [{
     description: "Server-side Meta access token used by the built-in Graph API adapter or an injected WhatsApp/Meta provider client.";
     id: "whatsapp-access-token";
     label: "WhatsApp Business access token";
     metadata: {
        scopeKind: "provider-permission-labels";
     };
     required: true;
     scopes: readonly ["whatsapp_business_messaging", "whatsapp_business_management"];
   }, {
     description: "Meta phone_number_id used by the built-in Graph API adapter or an injected WhatsApp/Meta provider client.";
     id: "whatsapp-phone-number-id";
     label: "WhatsApp Business phone number ID";
     required: true;
   }, {
     description: "Server-side app secret used to validate X-Hub-Signature-256 webhook deliveries.";
     id: "whatsapp-app-secret";
     label: "Meta app secret";
     required: true;
   }, {
     description: "SDK-user-owned token checked during Meta webhook endpoint verification.";
     id: "whatsapp-webhook-verify-token";
     label: "Webhook verify token";
     required: false;
   }, {
     description: "SDK-user-confirmed Meta app subscription to the WhatsApp Business Account messages webhook field.";
     id: "whatsapp-waba-webhook-subscription";
     label: "WhatsApp WABA messages webhook subscription";
     required: false;
  }];
  directions: readonly ["receive-only", "send-only", "bidirectional"];
  id: "messaging.whatsapp";
  limitations: readonly ["Available operations depend on the SDK user's Meta app, WhatsApp Business Account, phone number registration, WABA messages webhook subscription, access token scopes, business verification, templates, quality limits, and messaging windows.", "Free-form WhatsApp service messages are for the customer service window; SDK users must select approved templates for outbound contact outside that window.", "Opt-in, outbound-contact policy, template selection, human escalation, media retention, redaction, and deletion behavior are SDK-user configuration.", "This package provides a built-in Graph API REST adapter when accessToken and phoneNumberId are configured; hosts may still inject an approved WhatsApp/Meta provider client and own automation, promotional messaging, consent, retry, and rate-limit policies."];
  maintainers: readonly [{
     name: "Cognidesk";
     type: "official";
  }];
  metadata: {
     apiCoverage: {
        checkedAt: "2026-06-18";
        fullMetaGraphCoverage: false;
        fullProviderApi: false;
        generatedFromOfficialSpec: true;
        implementedOperationCount: 7;
        operationCatalog: "docs/provider-coverage/whatsapp-business-messaging-openapi-v23-selected-api-2026-06-18.operations.json";
        selectedOperationCount: 7;
        sourceOperationCount: 113;
        sourcePathCount: 78;
        sourceSpec: "https://raw.githubusercontent.com/facebook/openapi/main/business-messaging-api_v23.0.yaml";
     };
     channelCoverage: {
        businessProfile: "provider-rest-adapter-read-update";
        cloudApiMessages: "provider-rest-adapter-send";
        flowsCommerceCallingGroups: "provider-supported-not-typed";
        media: "provider-rest-adapter-upload-get-download";
        phoneNumberReadiness: "provider-rest-adapter-read";
        templateCrud: "provider-supported-not-typed";
        templatePayloads: "typed-build-only";
        webhooks: "typed-challenge-verify-parse";
     };
     implementation: {
        defaultClientPolicy: "provider-rest-adapter-when-configured";
        officialMaintainedServerSdkAvailable: false;
        packageOwnedRestClient: true;
        providerClient: "WhatsAppMessagingProviderClient";
        runtimePackage: "@cognidesk/integration-messaging-whatsapp/runtime";
        sdkDecision: {
           checkedAt: "2026-06-25";
           rejectedSdkPackages: readonly [{
              packageName: "whatsapp";
              reason: "Official Meta WhatsApp Business Platform Node.js SDK for Cloud API, but the upstream repository and documentation mark the project archived/read-only.";
            }, {
              packageName: "facebook-nodejs-business-sdk";
              reason: "Official Meta Business SDK for broader Graph/Marketing API surfaces, not a maintained WhatsApp Cloud API messaging client.";
           }];
           result: "no-maintained-official-sdk-rest-adapter-selected";
        };
        strategy: "no-official-maintained-server-sdk-rest-adapter";
        verifiedAt: "2026-06-25";
     };
     providerClient: {
        defaultClientPolicy: "provider-rest-adapter-when-configured";
        importPolicy: "provider-client-override-supported";
        interface: "WhatsAppMessagingProviderClient";
        package: "built-in-or-host-provided";
        sdkDecision: {
           checkedAt: "2026-06-25";
           rejectedSdkPackages: readonly [{
              packageName: "whatsapp";
              reason: "Official Meta WhatsApp Business Platform Node.js SDK for Cloud API, but the upstream repository and documentation mark the project archived/read-only.";
            }, {
              packageName: "facebook-nodejs-business-sdk";
              reason: "Official Meta Business SDK for broader Graph/Marketing API surfaces, not a maintained WhatsApp Cloud API messaging client.";
           }];
           result: "no-maintained-official-sdk-rest-adapter-selected";
        };
     };
  };
  name: "WhatsApp Business Platform";
  operations: readonly [{
     alias: "messaging.message.receive";
     audiences: readonly ["customer-facing", "mixed"];
     capability: "receive";
     description: "Validate and parse an inbound WhatsApp Business Platform webhook request.";
     exposesSensitiveData: true;
     label: "Normalize inbound WhatsApp webhook";
     providerObject: "messagingMessage";
     providerOperation: "parseWhatsAppWebhook";
     requiresCredential: true;
   }, {
     alias: "messaging.message.send";
     audiences: readonly ["customer-facing"];
     capability: "send";
     description: "Send a WhatsApp message through the configured Graph API adapter or provider client.";
     exposesSensitiveData: true;
     externallyVisible: true;
     label: "Send WhatsApp message";
     providerObject: "messagingMessage";
     providerOperation: "sendMessage";
     requiresApproval: true;
     requiresCredential: true;
     sideEffect: true;
   }, {
     alias: "messaging.template.send";
     audiences: readonly ["customer-facing"];
     capability: "send";
     description: "Send an SDK-user-selected approved WhatsApp message template.";
     exposesSensitiveData: true;
     externallyVisible: true;
     label: "Send WhatsApp template";
     providerObject: "messagingTemplate";
     providerOperation: "sendMessage";
     requiresApproval: true;
     requiresCredential: true;
     sideEffect: true;
   }, {
     alias: "messaging.draft.create";
     audiences: readonly ["customer-facing", "mixed"];
     capability: "draft";
     description: "Build a WhatsApp Cloud API message payload for review or later send.";
     exposesSensitiveData: true;
     label: "Build WhatsApp message payload";
     providerObject: "messagingMessage";
     providerOperation: "buildMessagePayload";
   }, {
     alias: "messaging.media.send";
     audiences: readonly ["customer-facing", "mixed"];
     capability: "attach";
     description: "Upload media for use in WhatsApp messages through the configured Graph API adapter or provider client.";
     exposesSensitiveData: true;
     externallyVisible: true;
     label: "Upload WhatsApp media";
     providerObject: "mediaAttachment";
     providerOperation: "uploadMedia";
     requiresApproval: true;
     requiresCredential: true;
     sideEffect: true;
   }, {
     alias: "whatsapp.phoneNumber.read";
     audiences: readonly ["internal-support", "mixed"];
     capability: "read-provider-object";
     description: "Read WhatsApp Business phone-number readiness metadata through the configured Graph API adapter or provider client.";
     exposesSensitiveData: true;
     extension: true;
     label: "Read WhatsApp phone number";
     providerObject: "whatsappPhoneNumber";
     providerOperation: "getPhoneNumber";
     requiresCredential: true;
   }, {
     alias: "whatsapp.businessProfile.read";
     audiences: readonly ["internal-support", "mixed"];
     capability: "read-provider-object";
     description: "Read WhatsApp Business profile fields for support diagnostics through the configured Graph API adapter or provider client.";
     exposesSensitiveData: true;
     extension: true;
     label: "Read WhatsApp business profile";
     providerObject: "whatsappBusinessProfile";
     providerOperation: "getBusinessProfile";
     requiresCredential: true;
   }, {
     alias: "whatsapp.businessProfile.update";
     audiences: readonly ["internal-support"];
     capability: "update-provider-object";
     changesWorkflow: true;
     description: "Update WhatsApp Business profile fields through the configured Graph API adapter or provider client when SDK-user policy permits.";
     exposesSensitiveData: true;
     extension: true;
     label: "Update WhatsApp business profile";
     providerObject: "whatsappBusinessProfile";
     providerOperation: "updateBusinessProfile";
     requiresApproval: true;
     requiresCredential: true;
     sideEffect: true;
   }, {
     alias: "whatsapp.webhook-signature";
     audiences: readonly ["internal-support"];
     capability: "whatsapp.webhook-signature";
     description: "Validate Meta X-Hub-Signature-256 for WhatsApp webhook delivery.";
     exposesSensitiveData: true;
     extension: true;
     label: "Validate WhatsApp webhook signature";
     providerObject: "whatsappSignedWebhook";
     providerOperation: "validateWhatsAppWebhookSignature";
     requiresCredential: true;
  }];
  packageName: "@cognidesk/integration-messaging-whatsapp";
  privacyNotes: readonly ["WhatsApp messages, contact identifiers, phone numbers, profile names, media metadata, message statuses, and webhook payloads can contain customer data.", "Meta access tokens, app secrets, and webhook verify tokens stay server-side and are represented in Studio only as credential readiness."];
  provider: "whatsapp";
  trustLevel: "official";
}, {
  appSecret: string;
}, {
  messaging.draft.create: (input) => Promise<WhatsAppMessagingJsonObject>;
  messaging.media.send: (input) => Promise<WhatsAppMediaResource>;
  messaging.message.receive: (input) => Promise<WhatsAppSignedWebhook>;
  messaging.message.send: (input) => Promise<WhatsAppApiResponse>;
  messaging.template.send: (input) => Promise<WhatsAppApiResponse>;
  whatsapp.businessProfile.read: (input) => Promise<WhatsAppBusinessProfileResponse>;
  whatsapp.businessProfile.update: (input) => Promise<{
   [key: string]: WhatsAppMessagingJsonValue;
     success?: boolean;
  }>;
  whatsapp.phoneNumber.read: (input) => Promise<WhatsAppPhoneNumberResource>;
  whatsapp.webhook-signature: (input) => Promise<boolean>;
}>;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`WhatsAppMessagingIntegrationOptions`](#whatsappmessagingintegrationoptions) |

#### Returns

[`DefinedIntegration`](../../../packages/integration-kit/dist.md#definedintegration)\<\{
  `capabilities`: \{
     `audiences?`: (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[];
     `capability`: `string`;
     `changesWorkflow?`: `boolean`;
     `description?`: `string`;
     `exposesSensitiveData?`: `boolean`;
     `extension?`: `boolean`;
     `label?`: `string`;
     `metadata?`: `Record`\<`string`, `unknown`\>;
     `providerObjects?`: \{
        `description?`: `string`;
        `kind`: `string`;
        `label?`: `string`;
        `metadata?`: `Record`\<`string`, `unknown`\>;
        `schemaName?`: `string`;
     \}[];
     `requiresCredential?`: `boolean`;
     `sideEffect?`: `boolean`;
  \}[];
  `category`: `string`;
  `channelAudiences`: (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[];
  `coverage`: \{
     `evidence`: \{
        `label`: `string`;
        `url?`: `string`;
     \}[];
     `notes`: `string`[];
     `scope`:   \| `"support-workflow-subset"`
        \| `"provider-api-subset"`
        \| `"connector-required"`
        \| `"local-protocol"`
        \| `"full-provider-api"`;
  \};
  `credentialRequirements`: \{
     `description?`: `string`;
     `id`: `string`;
     `label?`: `string`;
     `metadata?`: `Record`\<`string`, `unknown`\>;
     `required`: `boolean`;
     `scopes`: `string`[];
  \}[];
  `directions`: (
     \| `"receive-only"`
     \| `"send-only"`
     \| `"inbound-only"`
     \| `"outbound-only"`
    \| `"bidirectional"`)[];
  `id`: `string`;
  `limitations`: `string`[];
  `maintainers`: \{
     `name`: `string`;
     `type`: `"community"` \| `"official"` \| `"unknown"` \| `"partner"`;
     `url?`: `string`;
  \}[];
  `metadata?`: `Record`\<`string`, `unknown`\>;
  `name`: `string`;
  `operations`: \{
     `alias`: `string`;
     `audience?`: `"customer-facing"` \| `"internal-support"` \| `"mixed"`;
     `audiences?`: (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[];
     `capability`: `string`;
     `changesWorkflow?`: `boolean`;
     `description?`: `string`;
     `exposesSensitiveData?`: `boolean`;
     `extension`: `boolean`;
     `externallyVisible?`: `boolean`;
     `inputSchema?`: `unknown`;
     `inputSchemaName?`: `string`;
     `inputSchemaRef?`: `string`;
     `label?`: `string`;
     `metadata?`: `Record`\<`string`, `unknown`\>;
     `outputSchema?`: `unknown`;
     `outputSchemaName?`: `string`;
     `outputSchemaRef?`: `string`;
     `providerObject?`: `string`;
     `providerObjects?`: \{
        `description?`: `string`;
        `kind`: `string`;
        `label?`: `string`;
        `metadata?`: `Record`\<`string`, `unknown`\>;
        `schemaName?`: `string`;
     \}[];
     `providerOperation?`: `string`;
     `requiredPolicyIds?`: `string`[];
     `requiresApproval?`: `boolean`;
     `requiresCredential?`: `boolean`;
     `sideEffect?`: `boolean`;
  \}[];
  `packageName`: `string`;
  `privacyNotes`: `string`[];
  `provider`: `string`;
  `trustLevel`: `"community"` \| `"official"` \| `"verified"` \| `"experimental"`;
\} & \{
  `capabilities`: readonly \[\{
     `audiences`: readonly \[`"customer-facing"`, `"mixed"`\];
     `capability`: `"receive"`;
     `description`: `"Validates and parses WhatsApp Business Platform webhook payloads after the SDK user's Meta app is subscribed to the WABA messages webhook."`;
     `exposesSensitiveData`: `true`;
     `label`: `"Receive WhatsApp webhooks"`;
     `providerObjects`: readonly \[\{
        `kind`: `"whatsappWebhook"`;
        `label`: `"WhatsApp Webhook"`;
      \}, \{
        `kind`: `"whatsappMessage"`;
        `label`: `"WhatsApp Message"`;
      \}, \{
        `kind`: `"whatsappStatus"`;
        `label`: `"WhatsApp Message Status"`;
     \}\];
     `requiresCredential`: `true`;
   \}, \{
     `audiences`: readonly \[`"customer-facing"`\];
     `capability`: `"send"`;
     `description`: `"Sends WhatsApp messages through the configured Graph API adapter or provider client when SDK-user policy permits outbound contact: free-form service messages inside the customer service window or approved templates outside it."`;
     `exposesSensitiveData`: `true`;
     `label`: `"Send WhatsApp messages"`;
     `providerObjects`: readonly \[\{
        `kind`: `"whatsappMessage"`;
        `label`: `"WhatsApp Message"`;
     \}\];
     `requiresCredential`: `true`;
     `sideEffect`: `true`;
   \}, \{
     `audiences`: readonly \[`"customer-facing"`, `"mixed"`\];
     `capability`: `"draft"`;
     `description`: `"Builds Cloud API message request payloads for SDK-user-configured approval workflows."`;
     `exposesSensitiveData`: `true`;
     `label`: `"Build WhatsApp message payloads"`;
     `providerObjects`: readonly \[\{
        `kind`: `"whatsappMessageDraft"`;
        `label`: `"WhatsApp Message Draft"`;
     \}\];
     `requiresCredential`: `false`;
   \}, \{
     `audiences`: readonly \[`"customer-facing"`, `"mixed"`\];
     `capability`: `"media"`;
     `description`: `"Uploads media, reads media metadata, and downloads media bytes through the configured Graph API adapter or provider client."`;
     `exposesSensitiveData`: `true`;
     `label`: `"Use WhatsApp media"`;
     `providerObjects`: readonly \[\{
        `kind`: `"whatsappMedia"`;
        `label`: `"WhatsApp Media"`;
     \}\];
     `requiresCredential`: `true`;
     `sideEffect`: `true`;
   \}, \{
     `audiences`: readonly \[`"customer-facing"`, `"mixed"`\];
     `capability`: `"attach"`;
     `description`: `"References uploaded WhatsApp media IDs in outbound messages selected by SDK configuration."`;
     `exposesSensitiveData`: `true`;
     `label`: `"Attach WhatsApp media"`;
     `providerObjects`: readonly \[\{
        `kind`: `"whatsappMedia"`;
        `label`: `"WhatsApp Media"`;
      \}, \{
        `kind`: `"whatsappMessage"`;
        `label`: `"WhatsApp Message"`;
     \}\];
     `requiresCredential`: `true`;
     `sideEffect`: `true`;
   \}, \{
     `audiences`: readonly \[`"internal-support"`, `"mixed"`\];
     `capability`: `"read-provider-object"`;
     `description`: `"Reads WhatsApp Business phone-number readiness and business profile resources through the configured Graph API adapter or provider client for Studio-visible configuration and support diagnostics."`;
     `exposesSensitiveData`: `true`;
     `label`: `"Read WhatsApp phone number and profile"`;
     `providerObjects`: readonly \[\{
        `kind`: `"whatsappPhoneNumber"`;
        `label`: `"WhatsApp Business Phone Number"`;
      \}, \{
        `kind`: `"whatsappBusinessProfile"`;
        `label`: `"WhatsApp Business Profile"`;
     \}\];
     `requiresCredential`: `true`;
   \}, \{
     `audiences`: readonly \[`"internal-support"`\];
     `capability`: `"update-provider-object"`;
     `changesWorkflow`: `true`;
     `description`: `"Updates WhatsApp Business profile fields through the configured Graph API adapter or provider client when SDK-user configuration permits profile changes."`;
     `exposesSensitiveData`: `true`;
     `label`: `"Update WhatsApp business profile"`;
     `providerObjects`: readonly \[\{
        `kind`: `"whatsappBusinessProfile"`;
        `label`: `"WhatsApp Business Profile"`;
     \}\];
     `requiresCredential`: `true`;
     `sideEffect`: `true`;
   \}, \{
     `audiences`: readonly \[`"internal-support"`\];
     `capability`: `"whatsapp.webhook-signature"`;
     `description`: `"Validates Meta X-Hub-Signature-256 webhook signatures with the SDK user's app secret."`;
     `exposesSensitiveData`: `true`;
     `extension`: `true`;
     `label`: `"Validate WhatsApp webhook signatures"`;
     `providerObjects`: readonly \[\{
        `kind`: `"whatsappSignedWebhook"`;
        `label`: `"WhatsApp Signed Webhook"`;
     \}\];
     `requiresCredential`: `true`;
  \}\];
  `category`: `"messaging"`;
  `channelAudiences`: readonly \[`"customer-facing"`, `"mixed"`\];
  `coverage`: \{
     `evidence`: readonly \[\{
        `label`: `"WhatsApp Cloud API get started"`;
        `url`: `"https://developers.facebook.com/documentation/business-messaging/whatsapp/get-started"`;
      \}, \{
        `label`: `"WhatsApp template fundamentals"`;
        `url`: `"https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/overview"`;
      \}, \{
        `label`: `"WhatsApp media"`;
        `url`: `"https://developers.facebook.com/documentation/business-messaging/whatsapp/business-phone-numbers/media/"`;
      \}, \{
        `label`: `"WhatsApp business profiles"`;
        `url`: `"https://developers.facebook.com/documentation/business-messaging/whatsapp/business-phone-numbers/business-profiles"`;
      \}, \{
        `label`: `"WhatsApp business phone numbers"`;
        `url`: `"https://developers.facebook.com/documentation/business-messaging/whatsapp/business-phone-numbers/phone-numbers"`;
      \}, \{
        `label`: `"WhatsApp webhooks"`;
        `url`: `"https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/overview/"`;
      \}, \{
        `label`: `"WhatsApp permissions"`;
        `url`: `"https://developers.facebook.com/documentation/business-messaging/whatsapp/permissions/"`;
     \}\];
     `notes`: readonly \[`"Coverage is typed for selected WhatsApp Business Platform support workflows: provider REST adapter message sends, template payload construction, media upload/get/download, phone-number readiness, business profile get/update, webhook challenge handling, and X-Hub-Signature-256 validation."`, `"This is not full WhatsApp Business Platform coverage; template CRUD/listing, Flows, commerce, Calling API, groups, phone-number registration and management, WABA account management, analytics, and broader Business Management APIs remain outside this adapter."`\];
     `scope`: `"support-workflow-subset"`;
  \};
  `credentialRequirements`: readonly \[\{
     `description`: `"Server-side Meta access token used by the built-in Graph API adapter or an injected WhatsApp/Meta provider client."`;
     `id`: `"whatsapp-access-token"`;
     `label`: `"WhatsApp Business access token"`;
     `metadata`: \{
        `scopeKind`: `"provider-permission-labels"`;
     \};
     `required`: `true`;
     `scopes`: readonly \[`"whatsapp_business_messaging"`, `"whatsapp_business_management"`\];
   \}, \{
     `description`: `"Meta phone_number_id used by the built-in Graph API adapter or an injected WhatsApp/Meta provider client."`;
     `id`: `"whatsapp-phone-number-id"`;
     `label`: `"WhatsApp Business phone number ID"`;
     `required`: `true`;
   \}, \{
     `description`: `"Server-side app secret used to validate X-Hub-Signature-256 webhook deliveries."`;
     `id`: `"whatsapp-app-secret"`;
     `label`: `"Meta app secret"`;
     `required`: `true`;
   \}, \{
     `description`: `"SDK-user-owned token checked during Meta webhook endpoint verification."`;
     `id`: `"whatsapp-webhook-verify-token"`;
     `label`: `"Webhook verify token"`;
     `required`: `false`;
   \}, \{
     `description`: `"SDK-user-confirmed Meta app subscription to the WhatsApp Business Account messages webhook field."`;
     `id`: `"whatsapp-waba-webhook-subscription"`;
     `label`: `"WhatsApp WABA messages webhook subscription"`;
     `required`: `false`;
  \}\];
  `directions`: readonly \[`"receive-only"`, `"send-only"`, `"bidirectional"`\];
  `id`: `"messaging.whatsapp"`;
  `limitations`: readonly \[`"Available operations depend on the SDK user's Meta app, WhatsApp Business Account, phone number registration, WABA messages webhook subscription, access token scopes, business verification, templates, quality limits, and messaging windows."`, `"Free-form WhatsApp service messages are for the customer service window; SDK users must select approved templates for outbound contact outside that window."`, `"Opt-in, outbound-contact policy, template selection, human escalation, media retention, redaction, and deletion behavior are SDK-user configuration."`, `"This package provides a built-in Graph API REST adapter when accessToken and phoneNumberId are configured; hosts may still inject an approved WhatsApp/Meta provider client and own automation, promotional messaging, consent, retry, and rate-limit policies."`\];
  `maintainers`: readonly \[\{
     `name`: `"Cognidesk"`;
     `type`: `"official"`;
  \}\];
  `metadata`: \{
     `apiCoverage`: \{
        `checkedAt`: `"2026-06-18"`;
        `fullMetaGraphCoverage`: `false`;
        `fullProviderApi`: `false`;
        `generatedFromOfficialSpec`: `true`;
        `implementedOperationCount`: `7`;
        `operationCatalog`: `"docs/provider-coverage/whatsapp-business-messaging-openapi-v23-selected-api-2026-06-18.operations.json"`;
        `selectedOperationCount`: `7`;
        `sourceOperationCount`: `113`;
        `sourcePathCount`: `78`;
        `sourceSpec`: `"https://raw.githubusercontent.com/facebook/openapi/main/business-messaging-api_v23.0.yaml"`;
     \};
     `channelCoverage`: \{
        `businessProfile`: `"provider-rest-adapter-read-update"`;
        `cloudApiMessages`: `"provider-rest-adapter-send"`;
        `flowsCommerceCallingGroups`: `"provider-supported-not-typed"`;
        `media`: `"provider-rest-adapter-upload-get-download"`;
        `phoneNumberReadiness`: `"provider-rest-adapter-read"`;
        `templateCrud`: `"provider-supported-not-typed"`;
        `templatePayloads`: `"typed-build-only"`;
        `webhooks`: `"typed-challenge-verify-parse"`;
     \};
     `implementation`: \{
        `defaultClientPolicy`: `"provider-rest-adapter-when-configured"`;
        `officialMaintainedServerSdkAvailable`: `false`;
        `packageOwnedRestClient`: `true`;
        `providerClient`: `"WhatsAppMessagingProviderClient"`;
        `runtimePackage`: `"@cognidesk/integration-messaging-whatsapp/runtime"`;
        `sdkDecision`: \{
           `checkedAt`: `"2026-06-25"`;
           `rejectedSdkPackages`: readonly \[\{
              `packageName`: `"whatsapp"`;
              `reason`: `"Official Meta WhatsApp Business Platform Node.js SDK for Cloud API, but the upstream repository and documentation mark the project archived/read-only."`;
            \}, \{
              `packageName`: `"facebook-nodejs-business-sdk"`;
              `reason`: `"Official Meta Business SDK for broader Graph/Marketing API surfaces, not a maintained WhatsApp Cloud API messaging client."`;
           \}\];
           `result`: `"no-maintained-official-sdk-rest-adapter-selected"`;
        \};
        `strategy`: `"no-official-maintained-server-sdk-rest-adapter"`;
        `verifiedAt`: `"2026-06-25"`;
     \};
     `providerClient`: \{
        `defaultClientPolicy`: `"provider-rest-adapter-when-configured"`;
        `importPolicy`: `"provider-client-override-supported"`;
        `interface`: `"WhatsAppMessagingProviderClient"`;
        `package`: `"built-in-or-host-provided"`;
        `sdkDecision`: \{
           `checkedAt`: `"2026-06-25"`;
           `rejectedSdkPackages`: readonly \[\{
              `packageName`: `"whatsapp"`;
              `reason`: `"Official Meta WhatsApp Business Platform Node.js SDK for Cloud API, but the upstream repository and documentation mark the project archived/read-only."`;
            \}, \{
              `packageName`: `"facebook-nodejs-business-sdk"`;
              `reason`: `"Official Meta Business SDK for broader Graph/Marketing API surfaces, not a maintained WhatsApp Cloud API messaging client."`;
           \}\];
           `result`: `"no-maintained-official-sdk-rest-adapter-selected"`;
        \};
     \};
  \};
  `name`: `"WhatsApp Business Platform"`;
  `operations`: readonly \[\{
     `alias`: `"messaging.message.receive"`;
     `audiences`: readonly \[`"customer-facing"`, `"mixed"`\];
     `capability`: `"receive"`;
     `description`: `"Validate and parse an inbound WhatsApp Business Platform webhook request."`;
     `exposesSensitiveData`: `true`;
     `label`: `"Normalize inbound WhatsApp webhook"`;
     `providerObject`: `"messagingMessage"`;
     `providerOperation`: `"parseWhatsAppWebhook"`;
     `requiresCredential`: `true`;
   \}, \{
     `alias`: `"messaging.message.send"`;
     `audiences`: readonly \[`"customer-facing"`\];
     `capability`: `"send"`;
     `description`: `"Send a WhatsApp message through the configured Graph API adapter or provider client."`;
     `exposesSensitiveData`: `true`;
     `externallyVisible`: `true`;
     `label`: `"Send WhatsApp message"`;
     `providerObject`: `"messagingMessage"`;
     `providerOperation`: `"sendMessage"`;
     `requiresApproval`: `true`;
     `requiresCredential`: `true`;
     `sideEffect`: `true`;
   \}, \{
     `alias`: `"messaging.template.send"`;
     `audiences`: readonly \[`"customer-facing"`\];
     `capability`: `"send"`;
     `description`: `"Send an SDK-user-selected approved WhatsApp message template."`;
     `exposesSensitiveData`: `true`;
     `externallyVisible`: `true`;
     `label`: `"Send WhatsApp template"`;
     `providerObject`: `"messagingTemplate"`;
     `providerOperation`: `"sendMessage"`;
     `requiresApproval`: `true`;
     `requiresCredential`: `true`;
     `sideEffect`: `true`;
   \}, \{
     `alias`: `"messaging.draft.create"`;
     `audiences`: readonly \[`"customer-facing"`, `"mixed"`\];
     `capability`: `"draft"`;
     `description`: `"Build a WhatsApp Cloud API message payload for review or later send."`;
     `exposesSensitiveData`: `true`;
     `label`: `"Build WhatsApp message payload"`;
     `providerObject`: `"messagingMessage"`;
     `providerOperation`: `"buildMessagePayload"`;
   \}, \{
     `alias`: `"messaging.media.send"`;
     `audiences`: readonly \[`"customer-facing"`, `"mixed"`\];
     `capability`: `"attach"`;
     `description`: `"Upload media for use in WhatsApp messages through the configured Graph API adapter or provider client."`;
     `exposesSensitiveData`: `true`;
     `externallyVisible`: `true`;
     `label`: `"Upload WhatsApp media"`;
     `providerObject`: `"mediaAttachment"`;
     `providerOperation`: `"uploadMedia"`;
     `requiresApproval`: `true`;
     `requiresCredential`: `true`;
     `sideEffect`: `true`;
   \}, \{
     `alias`: `"whatsapp.phoneNumber.read"`;
     `audiences`: readonly \[`"internal-support"`, `"mixed"`\];
     `capability`: `"read-provider-object"`;
     `description`: `"Read WhatsApp Business phone-number readiness metadata through the configured Graph API adapter or provider client."`;
     `exposesSensitiveData`: `true`;
     `extension`: `true`;
     `label`: `"Read WhatsApp phone number"`;
     `providerObject`: `"whatsappPhoneNumber"`;
     `providerOperation`: `"getPhoneNumber"`;
     `requiresCredential`: `true`;
   \}, \{
     `alias`: `"whatsapp.businessProfile.read"`;
     `audiences`: readonly \[`"internal-support"`, `"mixed"`\];
     `capability`: `"read-provider-object"`;
     `description`: `"Read WhatsApp Business profile fields for support diagnostics through the configured Graph API adapter or provider client."`;
     `exposesSensitiveData`: `true`;
     `extension`: `true`;
     `label`: `"Read WhatsApp business profile"`;
     `providerObject`: `"whatsappBusinessProfile"`;
     `providerOperation`: `"getBusinessProfile"`;
     `requiresCredential`: `true`;
   \}, \{
     `alias`: `"whatsapp.businessProfile.update"`;
     `audiences`: readonly \[`"internal-support"`\];
     `capability`: `"update-provider-object"`;
     `changesWorkflow`: `true`;
     `description`: `"Update WhatsApp Business profile fields through the configured Graph API adapter or provider client when SDK-user policy permits."`;
     `exposesSensitiveData`: `true`;
     `extension`: `true`;
     `label`: `"Update WhatsApp business profile"`;
     `providerObject`: `"whatsappBusinessProfile"`;
     `providerOperation`: `"updateBusinessProfile"`;
     `requiresApproval`: `true`;
     `requiresCredential`: `true`;
     `sideEffect`: `true`;
   \}, \{
     `alias`: `"whatsapp.webhook-signature"`;
     `audiences`: readonly \[`"internal-support"`\];
     `capability`: `"whatsapp.webhook-signature"`;
     `description`: `"Validate Meta X-Hub-Signature-256 for WhatsApp webhook delivery."`;
     `exposesSensitiveData`: `true`;
     `extension`: `true`;
     `label`: `"Validate WhatsApp webhook signature"`;
     `providerObject`: `"whatsappSignedWebhook"`;
     `providerOperation`: `"validateWhatsAppWebhookSignature"`;
     `requiresCredential`: `true`;
  \}\];
  `packageName`: `"@cognidesk/integration-messaging-whatsapp"`;
  `privacyNotes`: readonly \[`"WhatsApp messages, contact identifiers, phone numbers, profile names, media metadata, message statuses, and webhook payloads can contain customer data."`, `"Meta access tokens, app secrets, and webhook verify tokens stay server-side and are represented in Studio only as credential readiness."`\];
  `provider`: `"whatsapp"`;
  `trustLevel`: `"official"`;
\}, \{
  `appSecret`: `string`;
\}, \{
  `messaging.draft.create`: (`input`) => `Promise`\<[`WhatsAppMessagingJsonObject`](#whatsappmessagingjsonobject)\>;
  `messaging.media.send`: (`input`) => `Promise`\<[`WhatsAppMediaResource`](#whatsappmediaresource)\>;
  `messaging.message.receive`: (`input`) => `Promise`\<[`WhatsAppSignedWebhook`](#whatsappsignedwebhook)\>;
  `messaging.message.send`: (`input`) => `Promise`\<[`WhatsAppApiResponse`](#whatsappapiresponse)\>;
  `messaging.template.send`: (`input`) => `Promise`\<[`WhatsAppApiResponse`](#whatsappapiresponse)\>;
  `whatsapp.businessProfile.read`: (`input`) => `Promise`\<[`WhatsAppBusinessProfileResponse`](#whatsappbusinessprofileresponse)\>;
  `whatsapp.businessProfile.update`: (`input`) => `Promise`\<\{
   \[`key`: `string`\]: [`WhatsAppMessagingJsonValue`](#whatsappmessagingjsonvalue);
     `success?`: `boolean`;
  \}\>;
  `whatsapp.phoneNumber.read`: (`input`) => `Promise`\<[`WhatsAppPhoneNumberResource`](#whatsappphonenumberresource)\>;
  `whatsapp.webhook-signature`: (`input`) => `Promise`\<`boolean`\>;
\}\>

***

### defineWhatsAppWebMessagingIntegration()

```ts
function defineWhatsAppWebMessagingIntegration(options?): DefinedIntegration<{
  capabilities: {
     audiences?: ("customer-facing" | "internal-support" | "mixed")[];
     capability: string;
     changesWorkflow?: boolean;
     description?: string;
     exposesSensitiveData?: boolean;
     extension?: boolean;
     label?: string;
     metadata?: Record<string, unknown>;
     providerObjects?: {
        description?: string;
        kind: string;
        label?: string;
        metadata?: Record<string, unknown>;
        schemaName?: string;
     }[];
     requiresCredential?: boolean;
     sideEffect?: boolean;
  }[];
  category: string;
  channelAudiences: ("customer-facing" | "internal-support" | "mixed")[];
  coverage: {
     evidence: {
        label: string;
        url?: string;
     }[];
     notes: string[];
     scope:   | "support-workflow-subset"
        | "provider-api-subset"
        | "connector-required"
        | "local-protocol"
        | "full-provider-api";
  };
  credentialRequirements: {
     description?: string;
     id: string;
     label?: string;
     metadata?: Record<string, unknown>;
     required: boolean;
     scopes: string[];
  }[];
  directions: (
     | "receive-only"
     | "send-only"
     | "inbound-only"
     | "outbound-only"
    | "bidirectional")[];
  id: string;
  limitations: string[];
  maintainers: {
     name: string;
     type: "community" | "official" | "unknown" | "partner";
     url?: string;
  }[];
  metadata?: Record<string, unknown>;
  name: string;
  operations: {
     alias: string;
     audience?: "customer-facing" | "internal-support" | "mixed";
     audiences?: ("customer-facing" | "internal-support" | "mixed")[];
     capability: string;
     changesWorkflow?: boolean;
     description?: string;
     exposesSensitiveData?: boolean;
     extension: boolean;
     externallyVisible?: boolean;
     inputSchema?: unknown;
     inputSchemaName?: string;
     inputSchemaRef?: string;
     label?: string;
     metadata?: Record<string, unknown>;
     outputSchema?: unknown;
     outputSchemaName?: string;
     outputSchemaRef?: string;
     providerObject?: string;
     providerObjects?: {
        description?: string;
        kind: string;
        label?: string;
        metadata?: Record<string, unknown>;
        schemaName?: string;
     }[];
     providerOperation?: string;
     requiredPolicyIds?: string[];
     requiresApproval?: boolean;
     requiresCredential?: boolean;
     sideEffect?: boolean;
  }[];
  packageName: string;
  privacyNotes: string[];
  provider: string;
  trustLevel: "community" | "official" | "verified" | "experimental";
} & {
  capabilities: readonly [{
     audiences: readonly ["customer-facing", "mixed"];
     capability: "send";
     description: "Sends WhatsApp text messages through a locally authenticated WhatsApp Web linked-device session.";
     exposesSensitiveData: true;
     label: "Send WhatsApp text messages via linked device";
     providerObjects: readonly [{
        kind: "whatsappWebMessage";
        label: "WhatsApp Web Message";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     audiences: readonly ["internal-support"];
     capability: "provider-readiness";
     description: "Attempts to open the configured WhatsApp Web linked-device session.";
     extension: true;
     label: "Check WhatsApp Web session readiness";
     providerObjects: readonly [{
        kind: "whatsappWebReadiness";
        label: "WhatsApp Web Readiness";
     }];
     requiresCredential: true;
  }];
  category: "messaging";
  channelAudiences: readonly ["customer-facing", "mixed"];
  coverage: {
     evidence: readonly [{
        label: "wacli GitHub";
        url: "https://github.com/openclaw/wacli";
      }, {
        label: "Baileys introduction";
        url: "https://baileys.wiki/docs/intro/";
      }, {
        label: "Baileys connecting";
        url: "https://baileys.wiki/docs/socket/connecting/";
     }];
     notes: readonly ["Sends WhatsApp text messages through a locally paired WhatsApp Web linked-device session.", "This adapter follows the same non-Business-API linked-device approach used by WhatsApp Web clients such as openclaw/wacli, but it does not shell out to the wacli binary.", "This adapter does not require a WhatsApp Business Account, Meta app, Cloud API token, or phone_number_id.", "This is not an official WhatsApp Business Platform integration; delivery, account limits, session health, and terms/compliance are owned by the SDK user.", "Inbound sync and local search are outside this initial send-only adapter scope."];
     scope: "local-protocol";
  };
  credentialRequirements: readonly [{
     description: "Local linked-device auth state directory used to reconnect to WhatsApp Web.";
     id: "whatsapp-web-auth-state";
     label: "WhatsApp Web auth state";
     required: true;
   }, {
     description: "Pair the session from WhatsApp Linked Devices before sending messages.";
     id: "whatsapp-web-linked-device-session";
     label: "WhatsApp linked-device session";
     required: true;
   }, {
     description: "Optional phone number used to request a WhatsApp Web pairing code instead of scanning a QR code.";
     id: "whatsapp-web-pairing-phone";
     label: "WhatsApp pairing phone";
     required: false;
  }];
  dataHandling: readonly ["Outbound message text and recipient identifiers are sent through the local WhatsApp Web session.", "WhatsApp Web auth/session state is stored in the configured local auth state directory."];
  directions: readonly ["send-only"];
  id: "messaging.whatsapp-web";
  limits: readonly ["Requires a previously paired WhatsApp linked-device session or an interactive first pairing.", "Only text sends are wrapped in this adapter; media, groups, sync, and search are outside the initial scope.", "Use with an account dedicated to automation or demos; do not link a personal inbox unless the operator understands the privacy and automation risk."];
  metadata: {
     implementationStrategy: "linked-device-websocket";
     protocol: "whatsapp-web-linked-device";
     runtimeException: {
        evidence: readonly [{
           label: "Baileys introduction";
           url: "https://baileys.wiki/docs/intro/";
         }, {
           label: "WhiskeySockets/Baileys";
           url: "https://github.com/WhiskeySockets/Baileys";
        }];
        officialProviderSdk: false;
        officialWhatsAppBusinessApi: false;
        provider: "whatsapp-web";
        reason: "Baileys is deliberately scoped to the community WhatsApp Web linked-device adapter; it is not an official Meta WhatsApp Business Platform SDK and does not use the WhatsApp Business API.";
        runtimePackage: "baileys";
        runtimePackageSource: "WhiskeySockets/Baileys";
        scope: "send-only WhatsApp Web linked-device adapter";
        strategy: "community-linked-device-runtime";
        verifiedAt: "2026-06-25";
     };
     runtimeLibrary: {
        declaredProviderSdkDependency: true;
        name: "baileys";
        packageName: "baileys";
        source: "WhiskeySockets/Baileys";
     };
  };
  name: "WhatsApp Web Linked Device";
  operations: readonly [{
     alias: "whatsapp-web.message.send";
     capability: "send";
     exposesSensitiveData: true;
     extension: true;
     externallyVisible: true;
     inputSchemaName: "WhatsAppWebSendTextInput";
     outputSchemaName: "WhatsAppWebSendTextResult";
     providerObject: "whatsappWebMessage";
     providerOperation: "sendMessage";
     requiresCredential: true;
     sideEffect: true;
   }, {
     alias: "whatsapp-web.readiness.check";
     capability: "provider-readiness";
     extension: true;
     outputSchemaName: "WhatsAppWebReadinessResult";
     providerObject: "whatsappWebReadiness";
     providerOperation: "connect";
     requiresCredential: true;
  }];
  packageName: "@cognidesk/integration-messaging-whatsapp";
  provider: "whatsapp-web";
  trustLevel: "community";
}, unknown, {
  whatsapp-web.message.send: (input) => Promise<WhatsAppWebSendTextResult>;
  whatsapp-web.readiness.check: () => Promise<WhatsAppWebReadinessResult>;
}>;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options?` | [`WhatsAppWebMessagingIntegrationOptions`](#whatsappwebmessagingintegrationoptions) |

#### Returns

[`DefinedIntegration`](../../../packages/integration-kit/dist.md#definedintegration)\<\{
  `capabilities`: \{
     `audiences?`: (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[];
     `capability`: `string`;
     `changesWorkflow?`: `boolean`;
     `description?`: `string`;
     `exposesSensitiveData?`: `boolean`;
     `extension?`: `boolean`;
     `label?`: `string`;
     `metadata?`: `Record`\<`string`, `unknown`\>;
     `providerObjects?`: \{
        `description?`: `string`;
        `kind`: `string`;
        `label?`: `string`;
        `metadata?`: `Record`\<`string`, `unknown`\>;
        `schemaName?`: `string`;
     \}[];
     `requiresCredential?`: `boolean`;
     `sideEffect?`: `boolean`;
  \}[];
  `category`: `string`;
  `channelAudiences`: (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[];
  `coverage`: \{
     `evidence`: \{
        `label`: `string`;
        `url?`: `string`;
     \}[];
     `notes`: `string`[];
     `scope`:   \| `"support-workflow-subset"`
        \| `"provider-api-subset"`
        \| `"connector-required"`
        \| `"local-protocol"`
        \| `"full-provider-api"`;
  \};
  `credentialRequirements`: \{
     `description?`: `string`;
     `id`: `string`;
     `label?`: `string`;
     `metadata?`: `Record`\<`string`, `unknown`\>;
     `required`: `boolean`;
     `scopes`: `string`[];
  \}[];
  `directions`: (
     \| `"receive-only"`
     \| `"send-only"`
     \| `"inbound-only"`
     \| `"outbound-only"`
    \| `"bidirectional"`)[];
  `id`: `string`;
  `limitations`: `string`[];
  `maintainers`: \{
     `name`: `string`;
     `type`: `"community"` \| `"official"` \| `"unknown"` \| `"partner"`;
     `url?`: `string`;
  \}[];
  `metadata?`: `Record`\<`string`, `unknown`\>;
  `name`: `string`;
  `operations`: \{
     `alias`: `string`;
     `audience?`: `"customer-facing"` \| `"internal-support"` \| `"mixed"`;
     `audiences?`: (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[];
     `capability`: `string`;
     `changesWorkflow?`: `boolean`;
     `description?`: `string`;
     `exposesSensitiveData?`: `boolean`;
     `extension`: `boolean`;
     `externallyVisible?`: `boolean`;
     `inputSchema?`: `unknown`;
     `inputSchemaName?`: `string`;
     `inputSchemaRef?`: `string`;
     `label?`: `string`;
     `metadata?`: `Record`\<`string`, `unknown`\>;
     `outputSchema?`: `unknown`;
     `outputSchemaName?`: `string`;
     `outputSchemaRef?`: `string`;
     `providerObject?`: `string`;
     `providerObjects?`: \{
        `description?`: `string`;
        `kind`: `string`;
        `label?`: `string`;
        `metadata?`: `Record`\<`string`, `unknown`\>;
        `schemaName?`: `string`;
     \}[];
     `providerOperation?`: `string`;
     `requiredPolicyIds?`: `string`[];
     `requiresApproval?`: `boolean`;
     `requiresCredential?`: `boolean`;
     `sideEffect?`: `boolean`;
  \}[];
  `packageName`: `string`;
  `privacyNotes`: `string`[];
  `provider`: `string`;
  `trustLevel`: `"community"` \| `"official"` \| `"verified"` \| `"experimental"`;
\} & \{
  `capabilities`: readonly \[\{
     `audiences`: readonly \[`"customer-facing"`, `"mixed"`\];
     `capability`: `"send"`;
     `description`: `"Sends WhatsApp text messages through a locally authenticated WhatsApp Web linked-device session."`;
     `exposesSensitiveData`: `true`;
     `label`: `"Send WhatsApp text messages via linked device"`;
     `providerObjects`: readonly \[\{
        `kind`: `"whatsappWebMessage"`;
        `label`: `"WhatsApp Web Message"`;
     \}\];
     `requiresCredential`: `true`;
     `sideEffect`: `true`;
   \}, \{
     `audiences`: readonly \[`"internal-support"`\];
     `capability`: `"provider-readiness"`;
     `description`: `"Attempts to open the configured WhatsApp Web linked-device session."`;
     `extension`: `true`;
     `label`: `"Check WhatsApp Web session readiness"`;
     `providerObjects`: readonly \[\{
        `kind`: `"whatsappWebReadiness"`;
        `label`: `"WhatsApp Web Readiness"`;
     \}\];
     `requiresCredential`: `true`;
  \}\];
  `category`: `"messaging"`;
  `channelAudiences`: readonly \[`"customer-facing"`, `"mixed"`\];
  `coverage`: \{
     `evidence`: readonly \[\{
        `label`: `"wacli GitHub"`;
        `url`: `"https://github.com/openclaw/wacli"`;
      \}, \{
        `label`: `"Baileys introduction"`;
        `url`: `"https://baileys.wiki/docs/intro/"`;
      \}, \{
        `label`: `"Baileys connecting"`;
        `url`: `"https://baileys.wiki/docs/socket/connecting/"`;
     \}\];
     `notes`: readonly \[`"Sends WhatsApp text messages through a locally paired WhatsApp Web linked-device session."`, `"This adapter follows the same non-Business-API linked-device approach used by WhatsApp Web clients such as openclaw/wacli, but it does not shell out to the wacli binary."`, `"This adapter does not require a WhatsApp Business Account, Meta app, Cloud API token, or phone_number_id."`, `"This is not an official WhatsApp Business Platform integration; delivery, account limits, session health, and terms/compliance are owned by the SDK user."`, `"Inbound sync and local search are outside this initial send-only adapter scope."`\];
     `scope`: `"local-protocol"`;
  \};
  `credentialRequirements`: readonly \[\{
     `description`: `"Local linked-device auth state directory used to reconnect to WhatsApp Web."`;
     `id`: `"whatsapp-web-auth-state"`;
     `label`: `"WhatsApp Web auth state"`;
     `required`: `true`;
   \}, \{
     `description`: `"Pair the session from WhatsApp Linked Devices before sending messages."`;
     `id`: `"whatsapp-web-linked-device-session"`;
     `label`: `"WhatsApp linked-device session"`;
     `required`: `true`;
   \}, \{
     `description`: `"Optional phone number used to request a WhatsApp Web pairing code instead of scanning a QR code."`;
     `id`: `"whatsapp-web-pairing-phone"`;
     `label`: `"WhatsApp pairing phone"`;
     `required`: `false`;
  \}\];
  `dataHandling`: readonly \[`"Outbound message text and recipient identifiers are sent through the local WhatsApp Web session."`, `"WhatsApp Web auth/session state is stored in the configured local auth state directory."`\];
  `directions`: readonly \[`"send-only"`\];
  `id`: `"messaging.whatsapp-web"`;
  `limits`: readonly \[`"Requires a previously paired WhatsApp linked-device session or an interactive first pairing."`, `"Only text sends are wrapped in this adapter; media, groups, sync, and search are outside the initial scope."`, `"Use with an account dedicated to automation or demos; do not link a personal inbox unless the operator understands the privacy and automation risk."`\];
  `metadata`: \{
     `implementationStrategy`: `"linked-device-websocket"`;
     `protocol`: `"whatsapp-web-linked-device"`;
     `runtimeException`: \{
        `evidence`: readonly \[\{
           `label`: `"Baileys introduction"`;
           `url`: `"https://baileys.wiki/docs/intro/"`;
         \}, \{
           `label`: `"WhiskeySockets/Baileys"`;
           `url`: `"https://github.com/WhiskeySockets/Baileys"`;
        \}\];
        `officialProviderSdk`: `false`;
        `officialWhatsAppBusinessApi`: `false`;
        `provider`: `"whatsapp-web"`;
        `reason`: `"Baileys is deliberately scoped to the community WhatsApp Web linked-device adapter; it is not an official Meta WhatsApp Business Platform SDK and does not use the WhatsApp Business API."`;
        `runtimePackage`: `"baileys"`;
        `runtimePackageSource`: `"WhiskeySockets/Baileys"`;
        `scope`: `"send-only WhatsApp Web linked-device adapter"`;
        `strategy`: `"community-linked-device-runtime"`;
        `verifiedAt`: `"2026-06-25"`;
     \};
     `runtimeLibrary`: \{
        `declaredProviderSdkDependency`: `true`;
        `name`: `"baileys"`;
        `packageName`: `"baileys"`;
        `source`: `"WhiskeySockets/Baileys"`;
     \};
  \};
  `name`: `"WhatsApp Web Linked Device"`;
  `operations`: readonly \[\{
     `alias`: `"whatsapp-web.message.send"`;
     `capability`: `"send"`;
     `exposesSensitiveData`: `true`;
     `extension`: `true`;
     `externallyVisible`: `true`;
     `inputSchemaName`: `"WhatsAppWebSendTextInput"`;
     `outputSchemaName`: `"WhatsAppWebSendTextResult"`;
     `providerObject`: `"whatsappWebMessage"`;
     `providerOperation`: `"sendMessage"`;
     `requiresCredential`: `true`;
     `sideEffect`: `true`;
   \}, \{
     `alias`: `"whatsapp-web.readiness.check"`;
     `capability`: `"provider-readiness"`;
     `extension`: `true`;
     `outputSchemaName`: `"WhatsAppWebReadinessResult"`;
     `providerObject`: `"whatsappWebReadiness"`;
     `providerOperation`: `"connect"`;
     `requiresCredential`: `true`;
  \}\];
  `packageName`: `"@cognidesk/integration-messaging-whatsapp"`;
  `provider`: `"whatsapp-web"`;
  `trustLevel`: `"community"`;
\}, `unknown`, \{
  `whatsapp-web.message.send`: (`input`) => `Promise`\<[`WhatsAppWebSendTextResult`](#whatsappwebsendtextresult)\>;
  `whatsapp-web.readiness.check`: () => `Promise`\<[`WhatsAppWebReadinessResult`](#whatsappwebreadinessresult)\>;
\}\>

***

### normalizeWhatsAppWebhookEvents()

```ts
function normalizeWhatsAppWebhookEvents(payload): WhatsAppNormalizedEvent[];
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `payload` | [`WhatsAppWebhookPayload`](#whatsappwebhookpayload) |

#### Returns

[`WhatsAppNormalizedEvent`](#whatsappnormalizedevent)[]

***

### parseWhatsAppWebhook()

```ts
function parseWhatsAppWebhook(request, options?): Promise<WhatsAppSignedWebhook>;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `request` | `Request` |
| `options?` | [`ParseWhatsAppWebhookOptions`](#parsewhatsappwebhookoptions) |

#### Returns

`Promise`\<[`WhatsAppSignedWebhook`](#whatsappsignedwebhook)\>

***

### toWhatsAppWebJid()

```ts
function toWhatsAppWebJid(recipient): string;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `recipient` | `string` |

#### Returns

`string`

***

### validateWhatsAppWebhookSignature()

```ts
function validateWhatsAppWebhookSignature(input): boolean;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`ValidateWhatsAppWebhookSignatureInput`](#validatewhatsappwebhooksignatureinput) |

#### Returns

`boolean`

***

### verifyWhatsAppWebhookChallenge()

```ts
function verifyWhatsAppWebhookChallenge(input): string;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`VerifyWhatsAppWebhookChallengeInput`](#verifywhatsappwebhookchallengeinput) |

#### Returns

`string`

***

### whatsappMessagingCredentialStatuses()

```ts
function whatsappMessagingCredentialStatuses(input): {
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
| `input` | [`WhatsAppCredentialStatusInput`](#whatsappcredentialstatusinput) |

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

## References

### whatsappMessagingProviderManifest

Re-exports [whatsappMessagingProviderManifest](dist/manifest.md#whatsappmessagingprovidermanifest)
