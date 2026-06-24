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

##### accessToken

```ts
accessToken: string;
```

###### Inherited from

[`WhatsAppMessagingClientOptions`](#whatsappmessagingclientoptions).[`accessToken`](#accesstoken-2)

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

##### phoneNumberId

```ts
phoneNumberId: string;
```

###### Inherited from

[`WhatsAppMessagingClientOptions`](#whatsappmessagingclientoptions).[`phoneNumberId`](#phonenumberid-2)

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

### WhatsAppMessagingClientOptions

#### Extended by

- [`WhatsAppLiveCheckOptions`](#whatsapplivecheckoptions)
- [`WhatsAppMessagingIntegrationOptions`](#whatsappmessagingintegrationoptions)

#### Properties

##### accessToken

```ts
accessToken: string;
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

##### phoneNumberId

```ts
phoneNumberId: string;
```

***

### WhatsAppMessagingIntegrationOptions

#### Extends

- [`WhatsAppMessagingClientOptions`](#whatsappmessagingclientoptions)

#### Properties

##### accessToken

```ts
accessToken: string;
```

###### Inherited from

[`WhatsAppMessagingClientOptions`](#whatsappmessagingclientoptions).[`accessToken`](#accesstoken-2)

##### appSecret

```ts
appSecret: string;
```

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

##### phoneNumberId

```ts
phoneNumberId: string;
```

###### Inherited from

[`WhatsAppMessagingClientOptions`](#whatsappmessagingclientoptions).[`phoneNumberId`](#phonenumberid-2)

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

## Functions

### createWhatsAppMessagingClient()

```ts
function createWhatsAppMessagingClient(options): WhatsAppMessagingClient;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`WhatsAppMessagingClientOptions`](#whatsappmessagingclientoptions) |

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
     description: "Sends WhatsApp Cloud API messages when SDK-user policy permits outbound contact: free-form service messages inside the customer service window or approved templates outside it.";
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
     description: "Uploads media, fetches media metadata, and downloads media bytes through SDK-user-governed handling.";
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
     description: "Reads WhatsApp Business phone-number readiness and business profile resources for Studio-visible configuration and support diagnostics.";
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
     description: "Updates WhatsApp Business profile fields when SDK-user configuration permits profile changes.";
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
     notes: readonly ["Coverage is typed for selected WhatsApp Business Platform support workflows: Cloud API message sends, template payload construction, media upload/get/download helpers, phone-number readiness, business profile get/update, webhook challenge handling, and X-Hub-Signature-256 validation.", "This is not full WhatsApp Business Platform coverage; template CRUD/listing, Flows, commerce, Calling API, groups, phone-number registration and management, WABA account management, analytics, and broader Business Management APIs remain outside this adapter."];
     scope: "support-workflow-subset";
  };
  credentialRequirements: readonly [{
     description: "Server-side Meta Graph API access token for WhatsApp Business Platform calls.";
     id: "whatsapp-access-token";
     label: "WhatsApp Business access token";
     metadata: {
        scopeKind: "provider-permission-labels";
     };
     required: true;
     scopes: readonly ["whatsapp_business_messaging", "whatsapp_business_management"];
   }, {
     description: "Meta Graph API phone_number_id used for Cloud API message and media endpoints.";
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
  limitations: readonly ["Available operations depend on the SDK user's Meta app, WhatsApp Business Account, phone number registration, WABA messages webhook subscription, access token scopes, business verification, templates, quality limits, and messaging windows.", "Free-form WhatsApp service messages are for the customer service window; SDK users must select approved templates for outbound contact outside that window.", "Opt-in, outbound-contact policy, template selection, human escalation, media retention, redaction, and deletion behavior are SDK-user configuration.", "This package provides transport helpers and does not choose default automation, promotional messaging, consent, retry, or rate-limit policies."];
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
        businessProfile: "typed-read-update";
        cloudApiMessages: "typed-send";
        flowsCommerceCallingGroups: "provider-supported-not-typed";
        media: "typed-upload-get-download";
        phoneNumberReadiness: "typed-read";
        templateCrud: "provider-supported-not-typed";
        templatePayloads: "typed-build-only";
        webhooks: "typed-challenge-verify-parse";
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
     description: "Send a WhatsApp Cloud API message through the configured phone number.";
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
     description: "Upload media for use in WhatsApp messages.";
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
     description: "Read WhatsApp Business phone-number readiness metadata.";
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
     description: "Read WhatsApp Business profile fields for support diagnostics.";
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
     description: "Update WhatsApp Business profile fields when SDK-user policy permits.";
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
}, WhatsAppMessagingIntegrationOptions, {
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
     `description`: `"Sends WhatsApp Cloud API messages when SDK-user policy permits outbound contact: free-form service messages inside the customer service window or approved templates outside it."`;
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
     `description`: `"Uploads media, fetches media metadata, and downloads media bytes through SDK-user-governed handling."`;
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
     `description`: `"Reads WhatsApp Business phone-number readiness and business profile resources for Studio-visible configuration and support diagnostics."`;
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
     `description`: `"Updates WhatsApp Business profile fields when SDK-user configuration permits profile changes."`;
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
     `notes`: readonly \[`"Coverage is typed for selected WhatsApp Business Platform support workflows: Cloud API message sends, template payload construction, media upload/get/download helpers, phone-number readiness, business profile get/update, webhook challenge handling, and X-Hub-Signature-256 validation."`, `"This is not full WhatsApp Business Platform coverage; template CRUD/listing, Flows, commerce, Calling API, groups, phone-number registration and management, WABA account management, analytics, and broader Business Management APIs remain outside this adapter."`\];
     `scope`: `"support-workflow-subset"`;
  \};
  `credentialRequirements`: readonly \[\{
     `description`: `"Server-side Meta Graph API access token for WhatsApp Business Platform calls."`;
     `id`: `"whatsapp-access-token"`;
     `label`: `"WhatsApp Business access token"`;
     `metadata`: \{
        `scopeKind`: `"provider-permission-labels"`;
     \};
     `required`: `true`;
     `scopes`: readonly \[`"whatsapp_business_messaging"`, `"whatsapp_business_management"`\];
   \}, \{
     `description`: `"Meta Graph API phone_number_id used for Cloud API message and media endpoints."`;
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
  `limitations`: readonly \[`"Available operations depend on the SDK user's Meta app, WhatsApp Business Account, phone number registration, WABA messages webhook subscription, access token scopes, business verification, templates, quality limits, and messaging windows."`, `"Free-form WhatsApp service messages are for the customer service window; SDK users must select approved templates for outbound contact outside that window."`, `"Opt-in, outbound-contact policy, template selection, human escalation, media retention, redaction, and deletion behavior are SDK-user configuration."`, `"This package provides transport helpers and does not choose default automation, promotional messaging, consent, retry, or rate-limit policies."`\];
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
        `businessProfile`: `"typed-read-update"`;
        `cloudApiMessages`: `"typed-send"`;
        `flowsCommerceCallingGroups`: `"provider-supported-not-typed"`;
        `media`: `"typed-upload-get-download"`;
        `phoneNumberReadiness`: `"typed-read"`;
        `templateCrud`: `"provider-supported-not-typed"`;
        `templatePayloads`: `"typed-build-only"`;
        `webhooks`: `"typed-challenge-verify-parse"`;
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
     `description`: `"Send a WhatsApp Cloud API message through the configured phone number."`;
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
     `description`: `"Upload media for use in WhatsApp messages."`;
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
     `description`: `"Read WhatsApp Business phone-number readiness metadata."`;
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
     `description`: `"Read WhatsApp Business profile fields for support diagnostics."`;
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
     `description`: `"Update WhatsApp Business profile fields when SDK-user policy permits."`;
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
\}, [`WhatsAppMessagingIntegrationOptions`](#whatsappmessagingintegrationoptions), \{
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
