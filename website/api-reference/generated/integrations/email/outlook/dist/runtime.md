# integrations/email/outlook/dist/runtime

## Interfaces

### OutlookAttachmentResource

#### Indexable

```ts
[key: string]: OutlookEmailProviderExtensionValue
```

#### Properties

##### contentType?

```ts
optional contentType?: string;
```

##### id?

```ts
optional id?: string;
```

##### isInline?

```ts
optional isInline?: boolean;
```

##### name?

```ts
optional name?: string;
```

##### size?

```ts
optional size?: number;
```

***

### OutlookChangeNotification

#### Indexable

```ts
[key: string]: OutlookEmailProviderExtensionValue
```

#### Properties

##### changeType?

```ts
optional changeType?: string;
```

##### clientState?

```ts
optional clientState?: string;
```

##### encryptedContent?

```ts
optional encryptedContent?: OutlookEmailProviderExtensionValue;
```

##### lifecycleEvent?

```ts
optional lifecycleEvent?: string;
```

##### resource?

```ts
optional resource?: string;
```

##### resourceData?

```ts
optional resourceData?: OutlookResourceData;
```

##### subscriptionExpirationDateTime?

```ts
optional subscriptionExpirationDateTime?: string;
```

##### subscriptionId?

```ts
optional subscriptionId?: string;
```

##### tenantId?

```ts
optional tenantId?: string;
```

***

### OutlookChangeNotificationPayload

#### Indexable

```ts
[key: string]: OutlookEmailProviderExtensionValue
```

#### Properties

##### validationTokens?

```ts
optional validationTokens?: string[];
```

##### value?

```ts
optional value?: OutlookChangeNotification[];
```

***

### OutlookCreateDraftInput

#### Extends

- [`OutlookMessageInput`](#outlookmessageinput)

#### Properties

##### additionalFields?

```ts
optional additionalFields?: OutlookEmailProviderExtensionFields;
```

###### Inherited from

[`OutlookMessageInput`](#outlookmessageinput).[`additionalFields`](#additionalfields-2)

##### attachments?

```ts
optional attachments?: OutlookAttachmentResource[];
```

###### Inherited from

[`OutlookMessageInput`](#outlookmessageinput).[`attachments`](#attachments-1)

##### bccRecipients?

```ts
optional bccRecipients?: OutlookRecipient[];
```

###### Inherited from

[`OutlookMessageInput`](#outlookmessageinput).[`bccRecipients`](#bccrecipients-1)

##### body?

```ts
optional body?: OutlookItemBody;
```

###### Inherited from

[`OutlookMessageInput`](#outlookmessageinput).[`body`](#body-2)

##### categories?

```ts
optional categories?: string[];
```

###### Inherited from

[`OutlookMessageInput`](#outlookmessageinput).[`categories`](#categories-1)

##### ccRecipients?

```ts
optional ccRecipients?: OutlookRecipient[];
```

###### Inherited from

[`OutlookMessageInput`](#outlookmessageinput).[`ccRecipients`](#ccrecipients-1)

##### importance?

```ts
optional importance?: string;
```

###### Inherited from

[`OutlookMessageInput`](#outlookmessageinput).[`importance`](#importance-1)

##### internetMessageHeaders?

```ts
optional internetMessageHeaders?: OutlookInternetMessageHeader[];
```

###### Inherited from

[`OutlookMessageInput`](#outlookmessageinput).[`internetMessageHeaders`](#internetmessageheaders-1)

##### replyTo?

```ts
optional replyTo?: OutlookRecipient[];
```

###### Inherited from

[`OutlookMessageInput`](#outlookmessageinput).[`replyTo`](#replyto-1)

##### signal?

```ts
optional signal?: AbortSignal;
```

###### Inherited from

[`OutlookMessageInput`](#outlookmessageinput).[`signal`](#signal-10)

##### subject?

```ts
optional subject?: string;
```

###### Inherited from

[`OutlookMessageInput`](#outlookmessageinput).[`subject`](#subject-1)

##### toRecipients?

```ts
optional toRecipients?: OutlookRecipient[];
```

###### Inherited from

[`OutlookMessageInput`](#outlookmessageinput).[`toRecipients`](#torecipients-1)

***

### OutlookCreateSubscriptionInput

#### Extends

- [`OutlookProviderRequestOptions`](#outlookproviderrequestoptions)

#### Properties

##### additionalFields?

```ts
optional additionalFields?: OutlookEmailProviderExtensionFields;
```

##### changeType

```ts
changeType: string;
```

##### clientState?

```ts
optional clientState?: string;
```

##### encryptionCertificate?

```ts
optional encryptionCertificate?: string;
```

##### encryptionCertificateId?

```ts
optional encryptionCertificateId?: string;
```

##### expirationDateTime

```ts
expirationDateTime: string;
```

##### includeResourceData?

```ts
optional includeResourceData?: boolean;
```

##### latestSupportedTlsVersion?

```ts
optional latestSupportedTlsVersion?: string;
```

##### lifecycleNotificationUrl?

```ts
optional lifecycleNotificationUrl?: string;
```

##### notificationUrl

```ts
notificationUrl: string;
```

##### resource

```ts
resource: string;
```

##### signal?

```ts
optional signal?: AbortSignal;
```

###### Inherited from

[`OutlookProviderRequestOptions`](#outlookproviderrequestoptions).[`signal`](#signal-11)

***

### OutlookCredentialStatusInput

#### Properties

##### accessToken?

```ts
optional accessToken?: string;
```

##### clientStateConfigured?

```ts
optional clientStateConfigured?: boolean;
```

##### delegatedMe?

```ts
optional delegatedMe?: boolean;
```

##### expiresAt?

```ts
optional expiresAt?: string;
```

##### scopes?

```ts
optional scopes?: string[];
```

##### userId?

```ts
optional userId?: string;
```

***

### OutlookDeltaMessagesInput

#### Extends

- [`OutlookProviderRequestOptions`](#outlookproviderrequestoptions)

#### Properties

##### folderId

```ts
folderId: string;
```

##### select?

```ts
optional select?: string[];
```

##### signal?

```ts
optional signal?: AbortSignal;
```

###### Inherited from

[`OutlookProviderRequestOptions`](#outlookproviderrequestoptions).[`signal`](#signal-11)

##### top?

```ts
optional top?: number;
```

***

### OutlookEmailClient

#### Properties

##### graphClient

```ts
graphClient: Client;
```

##### rawClient

```ts
rawClient: Client;
```

#### Methods

##### createDraft()

```ts
createDraft(input): Promise<OutlookMessageResource>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`OutlookCreateDraftInput`](#outlookcreatedraftinput) |

###### Returns

`Promise`\<[`OutlookMessageResource`](#outlookmessageresource)\>

##### createSubscription()

```ts
createSubscription(input): Promise<OutlookSubscriptionResource>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`OutlookCreateSubscriptionInput`](#outlookcreatesubscriptioninput) |

###### Returns

`Promise`\<[`OutlookSubscriptionResource`](#outlooksubscriptionresource)\>

##### deltaMessages()

```ts
deltaMessages(input): Promise<OutlookListMessagesResult>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`OutlookDeltaMessagesInput`](#outlookdeltamessagesinput) |

###### Returns

`Promise`\<[`OutlookListMessagesResult`](#outlooklistmessagesresult)\>

##### getAttachment()

```ts
getAttachment(input): Promise<OutlookAttachmentResource>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`OutlookGetAttachmentInput`](#outlookgetattachmentinput) |

###### Returns

`Promise`\<[`OutlookAttachmentResource`](#outlookattachmentresource)\>

##### getAttachmentValue()

```ts
getAttachmentValue(input): Promise<Response>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`OutlookGetAttachmentInput`](#outlookgetattachmentinput) |

###### Returns

`Promise`\<`Response`\>

##### getMailboxUser()

```ts
getMailboxUser(input?): Promise<OutlookMailboxUserResource>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input?` | [`OutlookProviderRequestOptions`](#outlookproviderrequestoptions) |

###### Returns

`Promise`\<[`OutlookMailboxUserResource`](#outlookmailboxuserresource)\>

##### getMessage()

```ts
getMessage(input): Promise<OutlookMessageResource>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`OutlookGetMessageInput`](#outlookgetmessageinput) |

###### Returns

`Promise`\<[`OutlookMessageResource`](#outlookmessageresource)\>

##### listAttachments()

```ts
listAttachments(input): Promise<{
  nextLink?: string;
  value: OutlookAttachmentResource[];
}>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`OutlookListAttachmentsInput`](#outlooklistattachmentsinput) |

###### Returns

`Promise`\<\{
  `nextLink?`: `string`;
  `value`: [`OutlookAttachmentResource`](#outlookattachmentresource)[];
\}\>

##### listMessages()

```ts
listMessages(input?): Promise<OutlookListMessagesResult>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input?` | [`OutlookListMessagesInput`](#outlooklistmessagesinput) |

###### Returns

`Promise`\<[`OutlookListMessagesResult`](#outlooklistmessagesresult)\>

##### requestGraph()

```ts
requestGraph<T>(input): Promise<T>;
```

###### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | [`OutlookGraphResource`](#outlookgraphresource) |

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`OutlookGraphRequestInput`](#outlookgraphrequestinput) |

###### Returns

`Promise`\<`T`\>

##### sendMail()

```ts
sendMail(input): Promise<OutlookSendMailResult>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`OutlookSendMailInput`](#outlooksendmailinput) |

###### Returns

`Promise`\<[`OutlookSendMailResult`](#outlooksendmailresult)\>

##### updateMessage()

```ts
updateMessage(input): Promise<OutlookMessageResource>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`OutlookUpdateMessageInput`](#outlookupdatemessageinput) |

###### Returns

`Promise`\<[`OutlookMessageResource`](#outlookmessageresource)\>

***

### OutlookEmailClientOptions

#### Extended by

- [`OutlookLiveCheckOptions`](#outlooklivecheckoptions)

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

##### graphApiVersion?

```ts
optional graphApiVersion?: string;
```

##### graphBaseUrl?

```ts
optional graphBaseUrl?: string;
```

##### graphClient?

```ts
optional graphClient?: Client;
```

##### signal?

```ts
optional signal?: AbortSignal;
```

##### userId?

```ts
optional userId?: string;
```

***

### OutlookEmailJsonObject

#### Extended by

- [`OutlookEmailProviderExtensionFields`](#outlookemailproviderextensionfields)

#### Indexable

```ts
[key: string]: OutlookEmailProviderExtensionValue
```

***

### OutlookEmailProviderExtensionFields

#### Extends

- [`OutlookEmailJsonObject`](#outlookemailjsonobject)

#### Indexable

```ts
[key: string]: OutlookEmailProviderExtensionValue
```

***

### OutlookGetAttachmentInput

#### Extends

- [`OutlookListAttachmentsInput`](#outlooklistattachmentsinput)

#### Properties

##### attachmentId

```ts
attachmentId: string;
```

##### folderId?

```ts
optional folderId?: string;
```

###### Inherited from

[`OutlookListAttachmentsInput`](#outlooklistattachmentsinput).[`folderId`](#folderid-2)

##### messageId

```ts
messageId: string;
```

###### Inherited from

[`OutlookListAttachmentsInput`](#outlooklistattachmentsinput).[`messageId`](#messageid-1)

##### signal?

```ts
optional signal?: AbortSignal;
```

###### Inherited from

[`OutlookListAttachmentsInput`](#outlooklistattachmentsinput).[`signal`](#signal-7)

***

### OutlookGetMessageInput

#### Extends

- [`OutlookProviderRequestOptions`](#outlookproviderrequestoptions)

#### Properties

##### expand?

```ts
optional expand?: string[];
```

##### id

```ts
id: string;
```

##### select?

```ts
optional select?: string[];
```

##### signal?

```ts
optional signal?: AbortSignal;
```

###### Inherited from

[`OutlookProviderRequestOptions`](#outlookproviderrequestoptions).[`signal`](#signal-11)

***

### OutlookGraphRequestInput

#### Extends

- [`OutlookProviderRequestOptions`](#outlookproviderrequestoptions)

#### Properties

##### body?

```ts
optional body?: OutlookEmailProviderPayload;
```

##### headers?

```ts
optional headers?: Record<string, string>;
```

##### method

```ts
method: OutlookGraphHttpMethod;
```

##### path

```ts
path: string;
```

##### pathParams?

```ts
optional pathParams?: Record<string, string | number | boolean>;
```

##### query?

```ts
optional query?: OutlookEmailProviderQuery;
```

##### rawResponse?

```ts
optional rawResponse?: boolean;
```

##### signal?

```ts
optional signal?: AbortSignal;
```

###### Inherited from

[`OutlookProviderRequestOptions`](#outlookproviderrequestoptions).[`signal`](#signal-11)

***

### OutlookGraphResource

#### Indexable

```ts
[key: string]: OutlookEmailProviderExtensionValue
```

***

### OutlookInternetMessageHeader

#### Indexable

```ts
[key: string]: OutlookEmailProviderExtensionValue
```

#### Properties

##### name?

```ts
optional name?: string;
```

##### value?

```ts
optional value?: string;
```

***

### OutlookItemBody

#### Properties

##### content

```ts
content: string;
```

##### contentType

```ts
contentType: "html" | "text";
```

***

### OutlookListAttachmentsInput

#### Extends

- [`OutlookProviderRequestOptions`](#outlookproviderrequestoptions)

#### Extended by

- [`OutlookGetAttachmentInput`](#outlookgetattachmentinput)

#### Properties

##### folderId?

```ts
optional folderId?: string;
```

##### messageId

```ts
messageId: string;
```

##### signal?

```ts
optional signal?: AbortSignal;
```

###### Inherited from

[`OutlookProviderRequestOptions`](#outlookproviderrequestoptions).[`signal`](#signal-11)

***

### OutlookListMessagesInput

#### Extends

- [`OutlookProviderRequestOptions`](#outlookproviderrequestoptions)

#### Properties

##### expand?

```ts
optional expand?: string[];
```

##### filter?

```ts
optional filter?: string;
```

##### folderId?

```ts
optional folderId?: string;
```

##### orderBy?

```ts
optional orderBy?: string[];
```

##### search?

```ts
optional search?: string;
```

##### select?

```ts
optional select?: string[];
```

##### signal?

```ts
optional signal?: AbortSignal;
```

###### Inherited from

[`OutlookProviderRequestOptions`](#outlookproviderrequestoptions).[`signal`](#signal-11)

##### skip?

```ts
optional skip?: number;
```

##### top?

```ts
optional top?: number;
```

***

### OutlookListMessagesResult

#### Properties

##### deltaLink?

```ts
optional deltaLink?: string;
```

##### nextLink?

```ts
optional nextLink?: string;
```

##### value

```ts
value: OutlookMessageResource[];
```

***

### OutlookLiveCheckOptions

#### Extends

- [`OutlookEmailClientOptions`](#outlookemailclientoptions)

#### Properties

##### accessToken

```ts
accessToken: string;
```

###### Inherited from

[`OutlookEmailClientOptions`](#outlookemailclientoptions).[`accessToken`](#accesstoken-1)

##### client?

```ts
optional client?: Pick<OutlookEmailClient, "getMailboxUser">;
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

[`OutlookEmailClientOptions`](#outlookemailclientoptions).[`fetch`](#fetch)

##### graphApiVersion?

```ts
optional graphApiVersion?: string;
```

###### Inherited from

[`OutlookEmailClientOptions`](#outlookemailclientoptions).[`graphApiVersion`](#graphapiversion)

##### graphBaseUrl?

```ts
optional graphBaseUrl?: string;
```

###### Inherited from

[`OutlookEmailClientOptions`](#outlookemailclientoptions).[`graphBaseUrl`](#graphbaseurl)

##### graphClient?

```ts
optional graphClient?: Client;
```

###### Inherited from

[`OutlookEmailClientOptions`](#outlookemailclientoptions).[`graphClient`](#graphclient-1)

##### signal?

```ts
optional signal?: AbortSignal;
```

###### Inherited from

[`OutlookEmailClientOptions`](#outlookemailclientoptions).[`signal`](#signal-3)

##### userId?

```ts
optional userId?: string;
```

###### Inherited from

[`OutlookEmailClientOptions`](#outlookemailclientoptions).[`userId`](#userid-1)

***

### OutlookMailboxUserResource

#### Indexable

```ts
[key: string]: OutlookEmailProviderExtensionValue
```

#### Properties

##### displayName?

```ts
optional displayName?: string;
```

##### id?

```ts
optional id?: string;
```

##### mail?

```ts
optional mail?: string;
```

##### userPrincipalName?

```ts
optional userPrincipalName?: string;
```

***

### OutlookMessageInput

#### Extends

- [`OutlookProviderRequestOptions`](#outlookproviderrequestoptions)

#### Extended by

- [`OutlookCreateDraftInput`](#outlookcreatedraftinput)
- [`OutlookUpdateMessageInput`](#outlookupdatemessageinput)

#### Properties

##### additionalFields?

```ts
optional additionalFields?: OutlookEmailProviderExtensionFields;
```

##### attachments?

```ts
optional attachments?: OutlookAttachmentResource[];
```

##### bccRecipients?

```ts
optional bccRecipients?: OutlookRecipient[];
```

##### body?

```ts
optional body?: OutlookItemBody;
```

##### categories?

```ts
optional categories?: string[];
```

##### ccRecipients?

```ts
optional ccRecipients?: OutlookRecipient[];
```

##### importance?

```ts
optional importance?: string;
```

##### internetMessageHeaders?

```ts
optional internetMessageHeaders?: OutlookInternetMessageHeader[];
```

##### replyTo?

```ts
optional replyTo?: OutlookRecipient[];
```

##### signal?

```ts
optional signal?: AbortSignal;
```

###### Inherited from

[`OutlookProviderRequestOptions`](#outlookproviderrequestoptions).[`signal`](#signal-11)

##### subject?

```ts
optional subject?: string;
```

##### toRecipients?

```ts
optional toRecipients?: OutlookRecipient[];
```

***

### OutlookMessageResource

#### Indexable

```ts
[key: string]: OutlookEmailProviderExtensionValue
```

#### Properties

##### attachments?

```ts
optional attachments?: OutlookAttachmentResource[];
```

##### bccRecipients?

```ts
optional bccRecipients?: OutlookRecipient[];
```

##### body?

```ts
optional body?: OutlookItemBody;
```

##### bodyPreview?

```ts
optional bodyPreview?: string;
```

##### categories?

```ts
optional categories?: string[];
```

##### ccRecipients?

```ts
optional ccRecipients?: OutlookRecipient[];
```

##### conversationId?

```ts
optional conversationId?: string;
```

##### from?

```ts
optional from?: OutlookRecipient;
```

##### hasAttachments?

```ts
optional hasAttachments?: boolean;
```

##### id?

```ts
optional id?: string;
```

##### importance?

```ts
optional importance?: string;
```

##### internetMessageHeaders?

```ts
optional internetMessageHeaders?: OutlookInternetMessageHeader[];
```

##### internetMessageId?

```ts
optional internetMessageId?: string;
```

##### isRead?

```ts
optional isRead?: boolean;
```

##### receivedDateTime?

```ts
optional receivedDateTime?: string;
```

##### replyTo?

```ts
optional replyTo?: OutlookRecipient[];
```

##### sender?

```ts
optional sender?: OutlookRecipient;
```

##### sentDateTime?

```ts
optional sentDateTime?: string;
```

##### subject?

```ts
optional subject?: string;
```

##### toRecipients?

```ts
optional toRecipients?: OutlookRecipient[];
```

##### webLink?

```ts
optional webLink?: string;
```

***

### OutlookProviderRequestOptions

#### Extended by

- [`OutlookCreateSubscriptionInput`](#outlookcreatesubscriptioninput)
- [`OutlookDeltaMessagesInput`](#outlookdeltamessagesinput)
- [`OutlookGetMessageInput`](#outlookgetmessageinput)
- [`OutlookGraphRequestInput`](#outlookgraphrequestinput)
- [`OutlookListAttachmentsInput`](#outlooklistattachmentsinput)
- [`OutlookListMessagesInput`](#outlooklistmessagesinput)
- [`OutlookMessageInput`](#outlookmessageinput)
- [`OutlookSendMailInput`](#outlooksendmailinput)

#### Properties

##### signal?

```ts
optional signal?: AbortSignal;
```

***

### OutlookRecipient

#### Properties

##### emailAddress

```ts
emailAddress: {
  address: string;
  name?: string;
};
```

###### address

```ts
address: string;
```

###### name?

```ts
optional name?: string;
```

***

### OutlookResourceData

#### Indexable

```ts
[key: string]: OutlookEmailProviderExtensionValue
```

#### Properties

##### etag?

```ts
optional etag?: string;
```

##### id?

```ts
optional id?: string;
```

##### oDataId?

```ts
optional oDataId?: string;
```

##### oDataType?

```ts
optional oDataType?: string;
```

***

### OutlookSendMailInput

#### Extends

- [`OutlookProviderRequestOptions`](#outlookproviderrequestoptions)

#### Properties

##### message

```ts
message: OutlookMessageInput;
```

##### saveToSentItems?

```ts
optional saveToSentItems?: boolean;
```

##### signal?

```ts
optional signal?: AbortSignal;
```

###### Inherited from

[`OutlookProviderRequestOptions`](#outlookproviderrequestoptions).[`signal`](#signal-11)

***

### OutlookSendMailResult

#### Properties

##### accepted

```ts
accepted: true;
```

##### status?

```ts
optional status?: number;
```

***

### OutlookSubscriptionResource

#### Indexable

```ts
[key: string]: OutlookEmailProviderExtensionValue
```

#### Properties

##### applicationId?

```ts
optional applicationId?: string;
```

##### changeType?

```ts
optional changeType?: string;
```

##### clientState?

```ts
optional clientState?: string;
```

##### expirationDateTime?

```ts
optional expirationDateTime?: string;
```

##### id?

```ts
optional id?: string;
```

##### lifecycleNotificationUrl?

```ts
optional lifecycleNotificationUrl?: string;
```

##### notificationUrl?

```ts
optional notificationUrl?: string;
```

##### resource?

```ts
optional resource?: string;
```

***

### OutlookUpdateMessageInput

#### Extends

- [`OutlookMessageInput`](#outlookmessageinput)

#### Properties

##### additionalFields?

```ts
optional additionalFields?: OutlookEmailProviderExtensionFields;
```

###### Inherited from

[`OutlookMessageInput`](#outlookmessageinput).[`additionalFields`](#additionalfields-2)

##### attachments?

```ts
optional attachments?: OutlookAttachmentResource[];
```

###### Inherited from

[`OutlookMessageInput`](#outlookmessageinput).[`attachments`](#attachments-1)

##### bccRecipients?

```ts
optional bccRecipients?: OutlookRecipient[];
```

###### Inherited from

[`OutlookMessageInput`](#outlookmessageinput).[`bccRecipients`](#bccrecipients-1)

##### body?

```ts
optional body?: OutlookItemBody;
```

###### Inherited from

[`OutlookMessageInput`](#outlookmessageinput).[`body`](#body-2)

##### categories?

```ts
optional categories?: string[];
```

###### Inherited from

[`OutlookMessageInput`](#outlookmessageinput).[`categories`](#categories-1)

##### ccRecipients?

```ts
optional ccRecipients?: OutlookRecipient[];
```

###### Inherited from

[`OutlookMessageInput`](#outlookmessageinput).[`ccRecipients`](#ccrecipients-1)

##### id

```ts
id: string;
```

##### importance?

```ts
optional importance?: string;
```

###### Inherited from

[`OutlookMessageInput`](#outlookmessageinput).[`importance`](#importance-1)

##### internetMessageHeaders?

```ts
optional internetMessageHeaders?: OutlookInternetMessageHeader[];
```

###### Inherited from

[`OutlookMessageInput`](#outlookmessageinput).[`internetMessageHeaders`](#internetmessageheaders-1)

##### isRead?

```ts
optional isRead?: boolean;
```

##### replyTo?

```ts
optional replyTo?: OutlookRecipient[];
```

###### Inherited from

[`OutlookMessageInput`](#outlookmessageinput).[`replyTo`](#replyto-1)

##### signal?

```ts
optional signal?: AbortSignal;
```

###### Inherited from

[`OutlookMessageInput`](#outlookmessageinput).[`signal`](#signal-10)

##### subject?

```ts
optional subject?: string;
```

###### Inherited from

[`OutlookMessageInput`](#outlookmessageinput).[`subject`](#subject-1)

##### toRecipients?

```ts
optional toRecipients?: OutlookRecipient[];
```

###### Inherited from

[`OutlookMessageInput`](#outlookmessageinput).[`toRecipients`](#torecipients-1)

***

### OutlookWebhookRequest

#### Properties

##### contentType?

```ts
optional contentType?: string;
```

##### notifications

```ts
notifications: OutlookChangeNotification[];
```

##### payload

```ts
payload: OutlookChangeNotificationPayload;
```

##### rawBody

```ts
rawBody: string;
```

##### validationTokens

```ts
validationTokens: string[];
```

***

### ParseOutlookWebhookOptions

#### Properties

##### clientState?

```ts
optional clientState?: string;
```

##### requireClientState?

```ts
optional requireClientState?: boolean;
```

***

### ValidateOutlookWebhookClientStateInput

#### Properties

##### actualClientState?

```ts
optional actualClientState?: string;
```

##### expectedClientState

```ts
expectedClientState: string;
```

***

### VerifyOutlookWebhookValidationTokenInput

#### Properties

##### validationToken

```ts
validationToken: string;
```

## Type Aliases

### OutlookEmailJsonPrimitive

```ts
type OutlookEmailJsonPrimitive = string | number | boolean | null;
```

***

### OutlookEmailJsonValue

```ts
type OutlookEmailJsonValue =
  | OutlookEmailJsonPrimitive
  | OutlookEmailJsonObject
  | readonly OutlookEmailJsonValue[];
```

***

### OutlookEmailOperationCredentials

```ts
type OutlookEmailOperationCredentials = OutlookEmailClientOptions;
```

***

### OutlookEmailProviderExtensionValue

```ts
type OutlookEmailProviderExtensionValue = OutlookEmailJsonValue | object | undefined;
```

***

### OutlookEmailProviderPayload

```ts
type OutlookEmailProviderPayload = OutlookEmailJsonObject | object;
```

***

### OutlookEmailProviderQuery

```ts
type OutlookEmailProviderQuery = Record<string, OutlookEmailProviderExtensionValue>;
```

***

### OutlookGraphHttpMethod

```ts
type OutlookGraphHttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
```

***

### ~~OutlookSignedWebhook~~

```ts
type OutlookSignedWebhook = OutlookWebhookRequest;
```

#### Deprecated

Microsoft Graph change notifications are validated by clientState, not provider signatures.

## Variables

### outlookEmailIntegration

```ts
const outlookEmailIntegration: DefinedIntegration<{
  capabilities: [{
     audiences: ["customer-facing", "internal-support", "mixed"];
     capability: "receive";
     description: "Reads Microsoft Graph message resources and validates Outlook change notifications.";
     exposesSensitiveData: true;
     label: "Read Outlook messages and notifications";
     providerObjects: [{
        kind: "outlookMailboxUser";
        label: "Outlook Mailbox User";
      }, {
        kind: "outlookMessage";
        label: "Outlook Message";
      }, {
        kind: "outlookChangeNotification";
        label: "Outlook Change Notification";
     }];
     requiresCredential: true;
   }, {
     audiences: ["customer-facing", "internal-support", "mixed"];
     capability: "draft";
     description: "Creates Microsoft Graph draft message resources for SDK-user-configured approval workflows.";
     exposesSensitiveData: true;
     label: "Create Outlook drafts";
     providerObjects: [{
        kind: "outlookMessage";
        label: "Outlook Draft Message";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     audiences: ["customer-facing", "mixed"];
     capability: "send";
     description: "Calls Microsoft Graph sendMail when SDK-user policy permits outbound contact.";
     exposesSensitiveData: true;
     label: "Send Outlook mail";
     providerObjects: [{
        kind: "outlookMessage";
        label: "Outlook Message";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     audiences: ["customer-facing", "internal-support", "mixed"];
     capability: "read-provider-object";
     description: "Reads messages, attachments, mailbox users, and raw Graph resources needed by support workflows.";
     exposesSensitiveData: true;
     label: "Read Outlook mailbox objects";
     providerObjects: [{
        kind: "outlookMessage";
        label: "Outlook Message";
      }, {
        kind: "outlookAttachment";
        label: "Outlook Attachment";
      }, {
        kind: "outlookMailboxUser";
        label: "Outlook Mailbox User";
     }];
     requiresCredential: true;
   }, {
     audiences: ["internal-support", "mixed"];
     capability: "update-provider-object";
     changesWorkflow: true;
     description: "Updates Microsoft Graph message fields such as categories, importance, read state, or draft content.";
     exposesSensitiveData: true;
     label: "Update Outlook messages";
     providerObjects: [{
        kind: "outlookMessage";
        label: "Outlook Message";
     }];
     requiresCredential: true;
     sideEffect: true;
  }];
  category: "email";
  channelAudiences: ["customer-facing", "internal-support", "mixed"];
  coverage: {
     evidence: [{
        label: "Microsoft Graph JavaScript client";
        url: "https://www.npmjs.com/package/@microsoft/microsoft-graph-client";
      }, {
        label: "Microsoft Graph create message";
        url: "https://learn.microsoft.com/en-us/graph/api/user-post-messages?view=graph-rest-1.0";
      }, {
        label: "Microsoft Graph sendMail";
        url: "https://learn.microsoft.com/en-us/graph/api/user-sendmail?view=graph-rest-1.0";
      }, {
        label: "Microsoft Graph message delta";
        url: "https://learn.microsoft.com/en-us/graph/api/message-delta?view=graph-rest-1.0";
      }, {
        label: "Microsoft Graph list attachments";
        url: "https://learn.microsoft.com/en-us/graph/api/message-list-attachments?view=graph-rest-1.0";
      }, {
        label: "Microsoft Graph create subscription";
        url: "https://learn.microsoft.com/en-us/graph/api/subscription-post-subscriptions?view=graph-rest-1.0";
      }, {
        label: "Microsoft Graph webhook subscription lifecycle";
        url: "https://learn.microsoft.com/en-us/graph/change-notifications-delivery-webhooks";
     }];
     notes: ["Coverage includes SDK-backed Microsoft Graph Outlook mailbox support workflows: messages, mailFolders, attachments, sendMail, subscriptions, mailbox user readiness, and change notifications.", "The package uses @microsoft/microsoft-graph-client for Graph calls and keeps Cognidesk-normalized helper methods and operation handlers.", "This is not full Microsoft Graph coverage. Calendar, contacts, files/Drive, identity, admin, security, and broader Graph resources remain outside this Outlook adapter."];
     scope: "provider-api-subset";
  };
  credentialRequirements: [{
     description: "Server-side OAuth access token for Microsoft Graph mail APIs. Required permissions are operation-specific.";
     id: "microsoft-graph-oauth-access-token";
     label: "Microsoft Graph OAuth access token";
     metadata: {
        scopeKind: "provider-oauth-scopes";
     };
     required: true;
     scopes: ["Mail.Read", "Mail.ReadWrite", "Mail.Send", "User.Read"];
   }, {
     description: "Delegated /me mailbox access or a configured Microsoft Graph user ID/userPrincipalName.";
     id: "microsoft-graph-mailbox-user";
     label: "Mailbox user";
     required: false;
   }, {
     description: "SDK-user-owned clientState value used to validate Microsoft Graph change notifications.";
     id: "microsoft-graph-webhook-client-state";
     label: "Webhook clientState secret";
     required: false;
  }];
  directions: ["receive-only", "send-only", "bidirectional"];
  id: "email.outlook";
  limitations: ["Available operations depend on Microsoft Graph permissions, OAuth grant type, tenant admin consent, conditional access, mailbox licensing, Exchange Online policy, and delegated or application user selection.", "This package provides transport and webhook foundations; it does not choose default automation, retention, consent, retry, or rate-limit policies.", "Webhook validation is based on Microsoft Graph clientState matching. Subscription renewal/delete/reauthorize policy remains SDK-user-owned."];
  maintainers: [{
     name: "Cognidesk";
     type: "official";
  }];
  metadata: {
     channelCoverage: {
        attachments: "sdk-owned-list-get-download";
        drafts: "sdk-owned-create";
        mailboxUser: "sdk-owned-read";
        messages: "sdk-owned-list-get-delta-update";
        sendMail: "sdk-owned-send";
        subscriptions: "sdk-owned-create";
        webhookClientState: "typed-validate";
     };
     implementation: {
        manifestOnlyExport: "@cognidesk/integration-email-outlook/manifest";
        rawClientEscapeHatch: "rawClient";
        sdkPackage: "@microsoft/microsoft-graph-client";
        strategy: "official-sdk";
     };
  };
  name: "Microsoft Outlook";
  operations: [{
     alias: "email.receive";
     capability: "receive";
     exposesSensitiveData: true;
     label: "Receive Outlook change notifications";
     providerObject: "emailMessage";
   }, {
     alias: "email.send";
     capability: "send";
     exposesSensitiveData: true;
     externallyVisible: true;
     label: "Send Outlook mail";
     providerObject: "emailMessage";
     requiresApproval: true;
     sideEffect: true;
   }, {
     alias: "email.draft.create";
     capability: "draft";
     exposesSensitiveData: true;
     label: "Create Outlook draft";
     providerObject: "emailDraft";
     sideEffect: true;
   }, {
     alias: "email.attachments.read";
     capability: "read-provider-object";
     exposesSensitiveData: true;
     label: "Read Outlook attachments";
     providerObject: "attachment";
   }, {
     alias: "mailbox.watch";
     capability: "receive";
     label: "Create Microsoft Graph mailbox subscription";
     providerObject: "mailbox";
     sideEffect: true;
   }, {
     alias: "outlook.message.list";
     capability: "read-provider-object";
     exposesSensitiveData: true;
     extension: true;
     label: "List Outlook messages";
     providerObject: "emailMessage";
   }, {
     alias: "outlook.message.get";
     capability: "read-provider-object";
     exposesSensitiveData: true;
     extension: true;
     label: "Get Outlook message";
     providerObject: "emailMessage";
   }, {
     alias: "outlook.message.delta";
     capability: "receive";
     exposesSensitiveData: true;
     extension: true;
     label: "Read Outlook message delta page";
     providerObject: "emailMessage";
   }, {
     alias: "outlook.message.update";
     capability: "update-provider-object";
     changesWorkflow: true;
     exposesSensitiveData: true;
     extension: true;
     label: "Update Outlook message";
     providerObject: "emailMessage";
     sideEffect: true;
   }, {
     alias: "outlook.mailboxUser.get";
     capability: "read-provider-object";
     exposesSensitiveData: true;
     extension: true;
     label: "Get Outlook mailbox user";
     providerObject: "mailbox";
   }, {
     alias: "outlook.webhook.parse";
     capability: "receive";
     exposesSensitiveData: true;
     extension: true;
     label: "Parse Outlook webhook";
     providerObject: "emailMessage";
   }, {
     alias: "outlook.rawGraph.request";
     capability: "read-provider-object";
     exposesSensitiveData: true;
     extension: true;
     label: "Run raw Microsoft Graph request";
     metadata: {
        rawClientEscapeHatch: true;
     };
     providerObject: "mailbox";
  }];
  packageName: "@cognidesk/integration-email-outlook";
  privacyNotes: ["Outlook messages can contain customer content, attachments, addresses, recipients, categories, internet headers, and conversation history.", "Microsoft Graph OAuth access tokens and webhook clientState secrets stay server-side and are represented in Studio only as credential readiness.", "SDK users own outbound approval, auto-send controls, contact consent, tenant/admin policy review, retention, redaction, attachment retrieval, and deletion behavior."];
  provider: "outlook";
  trustLevel: "official";
}, OutlookEmailClientOptions, {
  email.attachments.read: (input, context) =>
     | Promise<{
     nextLink?: string;
     value: OutlookAttachmentResource[];
   }>
    | Promise<OutlookAttachmentResource>;
  email.draft.create: (input, context) => Promise<OutlookMessageResource>;
  email.receive: (input, _context) => Promise<OutlookWebhookRequest>;
  email.send: (input, context) => Promise<OutlookSendMailResult>;
  mailbox.watch: (input, context) => Promise<OutlookSubscriptionResource>;
  outlook.mailboxUser.get: (input, context) => Promise<OutlookMailboxUserResource>;
  outlook.message.delta: (input, context) => Promise<OutlookListMessagesResult>;
  outlook.message.get: (input, context) => Promise<OutlookMessageResource>;
  outlook.message.list: (input, context) => Promise<OutlookListMessagesResult>;
  outlook.message.update: (input, context) => Promise<OutlookMessageResource>;
  outlook.rawGraph.request: (input, context) => Promise<OutlookGraphResource>;
  outlook.webhook.parse: (input, _context) => Promise<OutlookWebhookRequest>;
}>;
```

***

### outlookEmailOperationHandlers

```ts
const outlookEmailOperationHandlers: {
  email.attachments.read: (input, context) =>
     | Promise<{
     nextLink?: string;
     value: OutlookAttachmentResource[];
   }>
    | Promise<OutlookAttachmentResource>;
  email.draft.create: (input, context) => Promise<OutlookMessageResource>;
  email.receive: (input, _context) => Promise<OutlookWebhookRequest>;
  email.send: (input, context) => Promise<OutlookSendMailResult>;
  mailbox.watch: (input, context) => Promise<OutlookSubscriptionResource>;
  outlook.mailboxUser.get: (input, context) => Promise<OutlookMailboxUserResource>;
  outlook.message.delta: (input, context) => Promise<OutlookListMessagesResult>;
  outlook.message.get: (input, context) => Promise<OutlookMessageResource>;
  outlook.message.list: (input, context) => Promise<OutlookListMessagesResult>;
  outlook.message.update: (input, context) => Promise<OutlookMessageResource>;
  outlook.rawGraph.request: (input, context) => Promise<OutlookGraphResource>;
  outlook.webhook.parse: (input, _context) => Promise<OutlookWebhookRequest>;
};
```

#### Type Declaration

| Name | Type |
| ------ | ------ |
| <a id="property-emailattachmentsread"></a> `email.attachments.read()` | (`input`, `context`) => \| `Promise`\<\{ `nextLink?`: `string`; `value`: [`OutlookAttachmentResource`](#outlookattachmentresource)[]; \}\> \| `Promise`\<[`OutlookAttachmentResource`](#outlookattachmentresource)\> |
| <a id="property-emaildraftcreate"></a> `email.draft.create()` | (`input`, `context`) => `Promise`\<[`OutlookMessageResource`](#outlookmessageresource)\> |
| <a id="property-emailreceive"></a> `email.receive()` | (`input`, `_context`) => `Promise`\<[`OutlookWebhookRequest`](#outlookwebhookrequest)\> |
| <a id="property-emailsend"></a> `email.send()` | (`input`, `context`) => `Promise`\<[`OutlookSendMailResult`](#outlooksendmailresult)\> |
| <a id="property-mailboxwatch"></a> `mailbox.watch()` | (`input`, `context`) => `Promise`\<[`OutlookSubscriptionResource`](#outlooksubscriptionresource)\> |
| <a id="property-outlookmailboxuserget"></a> `outlook.mailboxUser.get()` | (`input`, `context`) => `Promise`\<[`OutlookMailboxUserResource`](#outlookmailboxuserresource)\> |
| <a id="property-outlookmessagedelta"></a> `outlook.message.delta()` | (`input`, `context`) => `Promise`\<[`OutlookListMessagesResult`](#outlooklistmessagesresult)\> |
| <a id="property-outlookmessageget"></a> `outlook.message.get()` | (`input`, `context`) => `Promise`\<[`OutlookMessageResource`](#outlookmessageresource)\> |
| <a id="property-outlookmessagelist"></a> `outlook.message.list()` | (`input`, `context`) => `Promise`\<[`OutlookListMessagesResult`](#outlooklistmessagesresult)\> |
| <a id="property-outlookmessageupdate"></a> `outlook.message.update()` | (`input`, `context`) => `Promise`\<[`OutlookMessageResource`](#outlookmessageresource)\> |
| <a id="property-outlookrawgraphrequest"></a> `outlook.rawGraph.request()` | (`input`, `context`) => `Promise`\<[`OutlookGraphResource`](#outlookgraphresource)\> |
| <a id="property-outlookwebhookparse"></a> `outlook.webhook.parse()` | (`input`, `_context`) => `Promise`\<[`OutlookWebhookRequest`](#outlookwebhookrequest)\> |

## Functions

### createOutlookEmailClient()

```ts
function createOutlookEmailClient(options): OutlookEmailClient;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`OutlookEmailClientOptions`](#outlookemailclientoptions) |

#### Returns

[`OutlookEmailClient`](#outlookemailclient)

***

### createOutlookEmailLiveChecks()

```ts
function createOutlookEmailLiveChecks(options): {
  description: string;
  id: string;
  requiredCredentialIds: string[];
  run: Promise<{
     details: {
        displayName: string;
        mail: string;
        userId: string;
        userPrincipalName: string;
     };
  }>;
}[];
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`OutlookLiveCheckOptions`](#outlooklivecheckoptions) |

#### Returns

\{
  `description`: `string`;
  `id`: `string`;
  `requiredCredentialIds`: `string`[];
  `run`: `Promise`\<\{
     `details`: \{
        `displayName`: `string`;
        `mail`: `string`;
        `userId`: `string`;
        `userPrincipalName`: `string`;
     \};
  \}\>;
\}[]

***

### createOutlookRecipient()

```ts
function createOutlookRecipient(address, name?): OutlookRecipient;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `address` | `string` |
| `name?` | `string` |

#### Returns

[`OutlookRecipient`](#outlookrecipient)

***

### normalizeOutlookGraphError()

```ts
function normalizeOutlookGraphError(error): IntegrationError;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `error` | `unknown` |

#### Returns

[`IntegrationError`](../../../../packages/integration-kit/dist.md#integrationerror)

***

### outlookEmailCredentialStatuses()

```ts
function outlookEmailCredentialStatuses(input): {
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
| `input` | [`OutlookCredentialStatusInput`](#outlookcredentialstatusinput) |

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

### parseOutlookWebhook()

```ts
function parseOutlookWebhook(request, options?): Promise<OutlookWebhookRequest>;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `request` | `Request` |
| `options?` | [`ParseOutlookWebhookOptions`](#parseoutlookwebhookoptions) |

#### Returns

`Promise`\<[`OutlookWebhookRequest`](#outlookwebhookrequest)\>

***

### validateOutlookWebhookClientState()

```ts
function validateOutlookWebhookClientState(input): boolean;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`ValidateOutlookWebhookClientStateInput`](#validateoutlookwebhookclientstateinput) |

#### Returns

`boolean`

***

### verifyOutlookWebhookValidationToken()

```ts
function verifyOutlookWebhookValidationToken(input): string;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`VerifyOutlookWebhookValidationTokenInput`](#verifyoutlookwebhookvalidationtokeninput) |

#### Returns

`string`
