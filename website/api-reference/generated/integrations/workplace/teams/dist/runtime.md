# integrations/workplace/teams/dist/runtime

## Interfaces

### ParseTeamsChangeNotificationOptions

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

### TeamsChangeNotification

#### Indexable

```ts
[key: string]: TeamsWorkplaceProviderExtensionValue
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
optional encryptedContent?: TeamsWorkplaceProviderExtensionValue;
```

##### id?

```ts
optional id?: string;
```

##### resource?

```ts
optional resource?: string;
```

##### resourceData?

```ts
optional resourceData?: {
[key: string]: TeamsWorkplaceProviderExtensionValue;
  @odata.etag?: string;
  @odata.id?: string;
  @odata.type?: string;
  id?: string;
};
```

###### Index Signature

```ts
[key: string]: TeamsWorkplaceProviderExtensionValue
```

###### @odata.etag?

```ts
optional @odata.etag?: string;
```

###### @odata.id?

```ts
optional @odata.id?: string;
```

###### @odata.type?

```ts
optional @odata.type?: string;
```

###### id?

```ts
optional id?: string;
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

### TeamsChangeNotificationCollection

#### Indexable

```ts
[key: string]: TeamsWorkplaceProviderExtensionValue
```

#### Properties

##### validationTokens?

```ts
optional validationTokens?: string[];
```

##### value?

```ts
optional value?: TeamsChangeNotification[];
```

***

### TeamsChatMessageCollectionResponse

#### Indexable

```ts
[key: string]: TeamsWorkplaceProviderExtensionValue
```

#### Properties

##### @odata.context?

```ts
optional @odata.context?: string;
```

##### @odata.nextLink?

```ts
optional @odata.nextLink?: string;
```

##### value?

```ts
optional value?: TeamsChatMessageResource[];
```

***

### TeamsChatMessageInput

#### Extended by

- [`TeamsSendChannelMessageInput`](#teamssendchannelmessageinput)
- [`TeamsSendChannelReplyInput`](#teamssendchannelreplyinput)
- [`TeamsSendChatMessageInput`](#teamssendchatmessageinput)
- [`TeamsUpdateChatMessageInput`](#teamsupdatechatmessageinput)

#### Properties

##### additionalFields?

```ts
optional additionalFields?: TeamsWorkplaceProviderExtensionFields;
```

##### attachments?

```ts
optional attachments?: TeamsWorkplaceJsonValue[];
```

##### body?

```ts
optional body?: TeamsItemBody;
```

##### content?

```ts
optional content?: string;
```

##### contentType?

```ts
optional contentType?: "html" | "text";
```

##### hostedContents?

```ts
optional hostedContents?: TeamsWorkplaceJsonValue[];
```

##### importance?

```ts
optional importance?: string;
```

##### mentions?

```ts
optional mentions?: TeamsWorkplaceJsonValue[];
```

##### subject?

```ts
optional subject?: string;
```

***

### TeamsChatMessageResource

#### Indexable

```ts
[key: string]: TeamsWorkplaceProviderExtensionValue
```

#### Properties

##### attachments?

```ts
optional attachments?: TeamsWorkplaceJsonValue[];
```

##### body?

```ts
optional body?: TeamsItemBody;
```

##### chatId?

```ts
optional chatId?: string;
```

##### createdDateTime?

```ts
optional createdDateTime?: string;
```

##### deletedDateTime?

```ts
optional deletedDateTime?: string;
```

##### etag?

```ts
optional etag?: string;
```

##### from?

```ts
optional from?: TeamsWorkplaceProviderExtensionValue;
```

##### hostedContents?

```ts
optional hostedContents?: TeamsWorkplaceJsonValue[];
```

##### id?

```ts
optional id?: string;
```

##### importance?

```ts
optional importance?: string;
```

##### lastEditedDateTime?

```ts
optional lastEditedDateTime?: string;
```

##### lastModifiedDateTime?

```ts
optional lastModifiedDateTime?: string;
```

##### locale?

```ts
optional locale?: string;
```

##### mentions?

```ts
optional mentions?: TeamsWorkplaceJsonValue[];
```

##### messageType?

```ts
optional messageType?: string;
```

##### policyViolation?

```ts
optional policyViolation?: TeamsWorkplaceProviderExtensionValue;
```

##### reactions?

```ts
optional reactions?: TeamsWorkplaceJsonValue[];
```

##### replyToId?

```ts
optional replyToId?: string;
```

##### subject?

```ts
optional subject?: string;
```

##### summary?

```ts
optional summary?: string;
```

##### webUrl?

```ts
optional webUrl?: string;
```

***

### TeamsCreateSubscriptionInput

#### Properties

##### additionalFields?

```ts
optional additionalFields?: TeamsWorkplaceProviderExtensionFields;
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

***

### TeamsCredentialStatusInput

#### Properties

##### accessToken?

```ts
optional accessToken?: string;
```

##### adminConsentGranted?

```ts
optional adminConsentGranted?: boolean;
```

##### appClientId?

```ts
optional appClientId?: string;
```

##### clientState?

```ts
optional clientState?: string;
```

##### expiresAt?

```ts
optional expiresAt?: string;
```

##### requiredScopes?

```ts
optional requiredScopes?: string[];
```

##### scopes?

```ts
optional scopes?: string[];
```

##### tenantId?

```ts
optional tenantId?: string;
```

***

### TeamsGetChannelMessageInput

#### Properties

##### channelId

```ts
channelId: string;
```

##### messageId

```ts
messageId: string;
```

##### replyId?

```ts
optional replyId?: string;
```

##### teamId

```ts
teamId: string;
```

***

### TeamsGetChatMessageInput

#### Properties

##### chatId

```ts
chatId: string;
```

##### messageId

```ts
messageId: string;
```

***

### TeamsGraphRequestInput

#### Properties

##### body?

```ts
optional body?: TeamsWorkplaceProviderPayload;
```

##### headers?

```ts
optional headers?: Record<string, string>;
```

##### method

```ts
method: TeamsGraphHttpMethod;
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
optional query?: TeamsWorkplaceProviderQuery;
```

##### rawResponse?

```ts
optional rawResponse?: boolean;
```

##### signal?

```ts
optional signal?: AbortSignal;
```

***

### TeamsGraphResource

#### Indexable

```ts
[key: string]: TeamsWorkplaceProviderExtensionValue
```

***

### TeamsItemBody

#### Indexable

```ts
[key: string]: TeamsWorkplaceProviderExtensionValue
```

#### Properties

##### content?

```ts
optional content?: string;
```

##### contentType?

```ts
optional contentType?: string;
```

***

### TeamsListChannelMessagesInput

#### Properties

##### channelId

```ts
channelId: string;
```

##### expand?

```ts
optional expand?: string;
```

##### teamId

```ts
teamId: string;
```

##### top?

```ts
optional top?: number;
```

***

### TeamsListChannelRepliesInput

#### Properties

##### channelId

```ts
channelId: string;
```

##### messageId

```ts
messageId: string;
```

##### teamId

```ts
teamId: string;
```

##### top?

```ts
optional top?: number;
```

***

### TeamsListChatMessagesInput

#### Properties

##### chatId

```ts
chatId: string;
```

##### filter?

```ts
optional filter?: string;
```

##### orderby?

```ts
optional orderby?: string;
```

##### top?

```ts
optional top?: number;
```

***

### TeamsLiveCheckOptions

#### Extends

- [`TeamsWorkplaceClientOptions`](#teamsworkplaceclientoptions)

#### Properties

##### accessToken

```ts
accessToken: string;
```

###### Inherited from

[`TeamsWorkplaceClientOptions`](#teamsworkplaceclientoptions).[`accessToken`](#accesstoken-2)

##### client?

```ts
optional client?: Pick<TeamsWorkplaceClient, "getCurrentUser">;
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

[`TeamsWorkplaceClientOptions`](#teamsworkplaceclientoptions).[`fetch`](#fetch-1)

##### graphApiBaseUrl?

```ts
optional graphApiBaseUrl?: string;
```

###### Inherited from

[`TeamsWorkplaceClientOptions`](#teamsworkplaceclientoptions).[`graphApiBaseUrl`](#graphapibaseurl-1)

##### graphApiVersion?

```ts
optional graphApiVersion?: string;
```

###### Inherited from

[`TeamsWorkplaceClientOptions`](#teamsworkplaceclientoptions).[`graphApiVersion`](#graphapiversion-1)

##### graphClient?

```ts
optional graphClient?: Client;
```

###### Inherited from

[`TeamsWorkplaceClientOptions`](#teamsworkplaceclientoptions).[`graphClient`](#graphclient-2)

##### permissionMode?

```ts
optional permissionMode?: "application" | "delegated";
```

###### Inherited from

[`TeamsWorkplaceClientOptions`](#teamsworkplaceclientoptions).[`permissionMode`](#permissionmode-1)

##### signal?

```ts
optional signal?: AbortSignal;
```

###### Inherited from

[`TeamsWorkplaceClientOptions`](#teamsworkplaceclientoptions).[`signal`](#signal-2)

***

### TeamsParsedChangeNotificationRequest

#### Properties

##### contentType?

```ts
optional contentType?: string;
```

##### notifications

```ts
notifications: TeamsChangeNotification[];
```

##### payload?

```ts
optional payload?: TeamsChangeNotificationCollection;
```

##### rawBody

```ts
rawBody: string;
```

##### validationToken?

```ts
optional validationToken?: string;
```

##### validClientState?

```ts
optional validClientState?: boolean;
```

***

### TeamsSendChannelMessageInput

#### Extends

- [`TeamsChatMessageInput`](#teamschatmessageinput)

#### Properties

##### additionalFields?

```ts
optional additionalFields?: TeamsWorkplaceProviderExtensionFields;
```

###### Inherited from

[`TeamsChatMessageInput`](#teamschatmessageinput).[`additionalFields`](#additionalfields)

##### attachments?

```ts
optional attachments?: TeamsWorkplaceJsonValue[];
```

###### Inherited from

[`TeamsChatMessageInput`](#teamschatmessageinput).[`attachments`](#attachments)

##### body?

```ts
optional body?: TeamsItemBody;
```

###### Inherited from

[`TeamsChatMessageInput`](#teamschatmessageinput).[`body`](#body)

##### channelId

```ts
channelId: string;
```

##### content?

```ts
optional content?: string;
```

###### Inherited from

[`TeamsChatMessageInput`](#teamschatmessageinput).[`content`](#content)

##### contentType?

```ts
optional contentType?: "html" | "text";
```

###### Inherited from

[`TeamsChatMessageInput`](#teamschatmessageinput).[`contentType`](#contenttype)

##### hostedContents?

```ts
optional hostedContents?: TeamsWorkplaceJsonValue[];
```

###### Inherited from

[`TeamsChatMessageInput`](#teamschatmessageinput).[`hostedContents`](#hostedcontents)

##### importance?

```ts
optional importance?: string;
```

###### Inherited from

[`TeamsChatMessageInput`](#teamschatmessageinput).[`importance`](#importance)

##### mentions?

```ts
optional mentions?: TeamsWorkplaceJsonValue[];
```

###### Inherited from

[`TeamsChatMessageInput`](#teamschatmessageinput).[`mentions`](#mentions)

##### subject?

```ts
optional subject?: string;
```

###### Inherited from

[`TeamsChatMessageInput`](#teamschatmessageinput).[`subject`](#subject)

##### teamId

```ts
teamId: string;
```

***

### TeamsSendChannelReplyInput

#### Extends

- [`TeamsChatMessageInput`](#teamschatmessageinput)

#### Properties

##### additionalFields?

```ts
optional additionalFields?: TeamsWorkplaceProviderExtensionFields;
```

###### Inherited from

[`TeamsChatMessageInput`](#teamschatmessageinput).[`additionalFields`](#additionalfields)

##### attachments?

```ts
optional attachments?: TeamsWorkplaceJsonValue[];
```

###### Inherited from

[`TeamsChatMessageInput`](#teamschatmessageinput).[`attachments`](#attachments)

##### body?

```ts
optional body?: TeamsItemBody;
```

###### Inherited from

[`TeamsChatMessageInput`](#teamschatmessageinput).[`body`](#body)

##### channelId

```ts
channelId: string;
```

##### content?

```ts
optional content?: string;
```

###### Inherited from

[`TeamsChatMessageInput`](#teamschatmessageinput).[`content`](#content)

##### contentType?

```ts
optional contentType?: "html" | "text";
```

###### Inherited from

[`TeamsChatMessageInput`](#teamschatmessageinput).[`contentType`](#contenttype)

##### hostedContents?

```ts
optional hostedContents?: TeamsWorkplaceJsonValue[];
```

###### Inherited from

[`TeamsChatMessageInput`](#teamschatmessageinput).[`hostedContents`](#hostedcontents)

##### importance?

```ts
optional importance?: string;
```

###### Inherited from

[`TeamsChatMessageInput`](#teamschatmessageinput).[`importance`](#importance)

##### mentions?

```ts
optional mentions?: TeamsWorkplaceJsonValue[];
```

###### Inherited from

[`TeamsChatMessageInput`](#teamschatmessageinput).[`mentions`](#mentions)

##### messageId

```ts
messageId: string;
```

##### subject?

```ts
optional subject?: string;
```

###### Inherited from

[`TeamsChatMessageInput`](#teamschatmessageinput).[`subject`](#subject)

##### teamId

```ts
teamId: string;
```

***

### TeamsSendChatMessageInput

#### Extends

- [`TeamsChatMessageInput`](#teamschatmessageinput)

#### Properties

##### additionalFields?

```ts
optional additionalFields?: TeamsWorkplaceProviderExtensionFields;
```

###### Inherited from

[`TeamsChatMessageInput`](#teamschatmessageinput).[`additionalFields`](#additionalfields)

##### attachments?

```ts
optional attachments?: TeamsWorkplaceJsonValue[];
```

###### Inherited from

[`TeamsChatMessageInput`](#teamschatmessageinput).[`attachments`](#attachments)

##### body?

```ts
optional body?: TeamsItemBody;
```

###### Inherited from

[`TeamsChatMessageInput`](#teamschatmessageinput).[`body`](#body)

##### chatId

```ts
chatId: string;
```

##### content?

```ts
optional content?: string;
```

###### Inherited from

[`TeamsChatMessageInput`](#teamschatmessageinput).[`content`](#content)

##### contentType?

```ts
optional contentType?: "html" | "text";
```

###### Inherited from

[`TeamsChatMessageInput`](#teamschatmessageinput).[`contentType`](#contenttype)

##### hostedContents?

```ts
optional hostedContents?: TeamsWorkplaceJsonValue[];
```

###### Inherited from

[`TeamsChatMessageInput`](#teamschatmessageinput).[`hostedContents`](#hostedcontents)

##### importance?

```ts
optional importance?: string;
```

###### Inherited from

[`TeamsChatMessageInput`](#teamschatmessageinput).[`importance`](#importance)

##### mentions?

```ts
optional mentions?: TeamsWorkplaceJsonValue[];
```

###### Inherited from

[`TeamsChatMessageInput`](#teamschatmessageinput).[`mentions`](#mentions)

##### subject?

```ts
optional subject?: string;
```

###### Inherited from

[`TeamsChatMessageInput`](#teamschatmessageinput).[`subject`](#subject)

***

### TeamsSubscriptionResource

#### Indexable

```ts
[key: string]: TeamsWorkplaceProviderExtensionValue
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

### TeamsUpdateChannelMessageInput

#### Properties

##### channelId

```ts
channelId: string;
```

##### message

```ts
message: TeamsUpdateChatMessageInput;
```

##### messageId

```ts
messageId: string;
```

##### replyId?

```ts
optional replyId?: string;
```

##### teamId

```ts
teamId: string;
```

***

### TeamsUpdateChatMessageInput

#### Extends

- [`TeamsChatMessageInput`](#teamschatmessageinput)

#### Properties

##### additionalFields?

```ts
optional additionalFields?: TeamsWorkplaceProviderExtensionFields;
```

###### Inherited from

[`TeamsChatMessageInput`](#teamschatmessageinput).[`additionalFields`](#additionalfields)

##### attachments?

```ts
optional attachments?: TeamsWorkplaceJsonValue[];
```

###### Inherited from

[`TeamsChatMessageInput`](#teamschatmessageinput).[`attachments`](#attachments)

##### body?

```ts
optional body?: TeamsItemBody;
```

###### Inherited from

[`TeamsChatMessageInput`](#teamschatmessageinput).[`body`](#body)

##### content?

```ts
optional content?: string;
```

###### Inherited from

[`TeamsChatMessageInput`](#teamschatmessageinput).[`content`](#content)

##### contentType?

```ts
optional contentType?: "html" | "text";
```

###### Inherited from

[`TeamsChatMessageInput`](#teamschatmessageinput).[`contentType`](#contenttype)

##### hostedContents?

```ts
optional hostedContents?: TeamsWorkplaceJsonValue[];
```

###### Inherited from

[`TeamsChatMessageInput`](#teamschatmessageinput).[`hostedContents`](#hostedcontents)

##### importance?

```ts
optional importance?: string;
```

###### Inherited from

[`TeamsChatMessageInput`](#teamschatmessageinput).[`importance`](#importance)

##### mentions?

```ts
optional mentions?: TeamsWorkplaceJsonValue[];
```

###### Inherited from

[`TeamsChatMessageInput`](#teamschatmessageinput).[`mentions`](#mentions)

##### policyViolation?

```ts
optional policyViolation?: TeamsWorkplaceProviderExtensionValue;
```

##### subject?

```ts
optional subject?: string;
```

###### Inherited from

[`TeamsChatMessageInput`](#teamschatmessageinput).[`subject`](#subject)

***

### TeamsUpdateChatMessageRequest

#### Properties

##### chatId

```ts
chatId: string;
```

##### message

```ts
message: TeamsUpdateChatMessageInput;
```

##### messageId

```ts
messageId: string;
```

***

### TeamsUserResource

#### Indexable

```ts
[key: string]: TeamsWorkplaceProviderExtensionValue
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

##### jobTitle?

```ts
optional jobTitle?: string;
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

### TeamsWorkplaceClient

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

##### createSubscription()

```ts
createSubscription(input): Promise<TeamsSubscriptionResource>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`TeamsCreateSubscriptionInput`](#teamscreatesubscriptioninput) |

###### Returns

`Promise`\<[`TeamsSubscriptionResource`](#teamssubscriptionresource)\>

##### getChannelMessage()

```ts
getChannelMessage(input): Promise<TeamsChatMessageResource>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`TeamsGetChannelMessageInput`](#teamsgetchannelmessageinput) |

###### Returns

`Promise`\<[`TeamsChatMessageResource`](#teamschatmessageresource)\>

##### getChatMessage()

```ts
getChatMessage(input): Promise<TeamsChatMessageResource>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`TeamsGetChatMessageInput`](#teamsgetchatmessageinput) |

###### Returns

`Promise`\<[`TeamsChatMessageResource`](#teamschatmessageresource)\>

##### getCurrentUser()

```ts
getCurrentUser(): Promise<TeamsUserResource>;
```

###### Returns

`Promise`\<[`TeamsUserResource`](#teamsuserresource)\>

##### listChannelMessages()

```ts
listChannelMessages(input): Promise<TeamsChatMessageCollectionResponse>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`TeamsListChannelMessagesInput`](#teamslistchannelmessagesinput) |

###### Returns

`Promise`\<[`TeamsChatMessageCollectionResponse`](#teamschatmessagecollectionresponse)\>

##### listChannelReplies()

```ts
listChannelReplies(input): Promise<TeamsChatMessageCollectionResponse>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`TeamsListChannelRepliesInput`](#teamslistchannelrepliesinput) |

###### Returns

`Promise`\<[`TeamsChatMessageCollectionResponse`](#teamschatmessagecollectionresponse)\>

##### listChatMessages()

```ts
listChatMessages(input): Promise<TeamsChatMessageCollectionResponse>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`TeamsListChatMessagesInput`](#teamslistchatmessagesinput) |

###### Returns

`Promise`\<[`TeamsChatMessageCollectionResponse`](#teamschatmessagecollectionresponse)\>

##### postInternalAssistMessage()

```ts
postInternalAssistMessage(input): Promise<TeamsChatMessageResource>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | \| [`TeamsSendChannelMessageInput`](#teamssendchannelmessageinput) \| [`TeamsSendChatMessageInput`](#teamssendchatmessageinput) |

###### Returns

`Promise`\<[`TeamsChatMessageResource`](#teamschatmessageresource)\>

##### requestGraph()

```ts
requestGraph<T>(input): Promise<T>;
```

###### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | [`TeamsGraphResource`](#teamsgraphresource) |

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`TeamsGraphRequestInput`](#teamsgraphrequestinput) |

###### Returns

`Promise`\<`T`\>

##### sendChannelMessage()

```ts
sendChannelMessage(input): Promise<TeamsChatMessageResource>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`TeamsSendChannelMessageInput`](#teamssendchannelmessageinput) |

###### Returns

`Promise`\<[`TeamsChatMessageResource`](#teamschatmessageresource)\>

##### sendChannelReply()

```ts
sendChannelReply(input): Promise<TeamsChatMessageResource>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`TeamsSendChannelReplyInput`](#teamssendchannelreplyinput) |

###### Returns

`Promise`\<[`TeamsChatMessageResource`](#teamschatmessageresource)\>

##### sendChatMessage()

```ts
sendChatMessage(input): Promise<TeamsChatMessageResource>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`TeamsSendChatMessageInput`](#teamssendchatmessageinput) |

###### Returns

`Promise`\<[`TeamsChatMessageResource`](#teamschatmessageresource)\>

##### updateChannelMessage()

```ts
updateChannelMessage(input): Promise<Partial<TeamsChatMessageResource>>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`TeamsUpdateChannelMessageInput`](#teamsupdatechannelmessageinput) |

###### Returns

`Promise`\<`Partial`\<[`TeamsChatMessageResource`](#teamschatmessageresource)\>\>

##### updateChatMessage()

```ts
updateChatMessage(input): Promise<Partial<TeamsChatMessageResource>>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`TeamsUpdateChatMessageRequest`](#teamsupdatechatmessagerequest) |

###### Returns

`Promise`\<`Partial`\<[`TeamsChatMessageResource`](#teamschatmessageresource)\>\>

***

### TeamsWorkplaceClientOptions

#### Extended by

- [`TeamsLiveCheckOptions`](#teamslivecheckoptions)

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

##### graphClient?

```ts
optional graphClient?: Client;
```

##### permissionMode?

```ts
optional permissionMode?: "application" | "delegated";
```

##### signal?

```ts
optional signal?: AbortSignal;
```

***

### TeamsWorkplaceJsonObject

#### Extended by

- [`TeamsWorkplaceProviderExtensionFields`](#teamsworkplaceproviderextensionfields)

#### Indexable

```ts
[key: string]: TeamsWorkplaceProviderExtensionValue
```

***

### TeamsWorkplaceProviderExtensionFields

#### Extends

- [`TeamsWorkplaceJsonObject`](#teamsworkplacejsonobject)

#### Indexable

```ts
[key: string]: TeamsWorkplaceProviderExtensionValue
```

***

### ValidateTeamsChangeNotificationClientStateInput

#### Properties

##### clientState

```ts
clientState: string;
```

##### notifications

```ts
notifications: TeamsChangeNotification[];
```

## Type Aliases

### TeamsGraphHttpMethod

```ts
type TeamsGraphHttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
```

***

### TeamsWorkplaceJsonPrimitive

```ts
type TeamsWorkplaceJsonPrimitive = string | number | boolean | null;
```

***

### TeamsWorkplaceJsonValue

```ts
type TeamsWorkplaceJsonValue =
  | TeamsWorkplaceJsonPrimitive
  | TeamsWorkplaceJsonObject
  | readonly TeamsWorkplaceJsonValue[];
```

***

### TeamsWorkplaceOperationCredentials

```ts
type TeamsWorkplaceOperationCredentials = TeamsWorkplaceClientOptions;
```

***

### TeamsWorkplaceProviderExtensionValue

```ts
type TeamsWorkplaceProviderExtensionValue =
  | TeamsWorkplaceJsonValue
  | object
  | undefined;
```

***

### TeamsWorkplaceProviderPayload

```ts
type TeamsWorkplaceProviderPayload = TeamsWorkplaceJsonObject | object;
```

***

### TeamsWorkplaceProviderQuery

```ts
type TeamsWorkplaceProviderQuery = Record<string, TeamsWorkplaceProviderExtensionValue>;
```

## Variables

### teamsWorkplaceIntegration

```ts
const teamsWorkplaceIntegration: DefinedIntegration<{
  capabilities: [{
     audiences: ["internal-support", "mixed"];
     capability: "receive";
     description: "Validates Microsoft Graph change notification clientState values and parses Teams chatMessage notifications for SDK-user-owned workflows.";
     exposesSensitiveData: true;
     label: "Receive Teams change notifications";
     providerObjects: [{
        kind: "teamsChangeNotification";
        label: "Teams Change Notification";
      }, {
        kind: "teamsChatMessage";
        label: "Teams Chat Message";
     }];
     requiresCredential: true;
   }, {
     audiences: ["internal-support", "mixed"];
     capability: "send";
     description: "Sends channel or chat messages through Microsoft Graph chatMessage endpoints with delegated permissions when SDK-user policy permits workplace-visible output.";
     exposesSensitiveData: true;
     label: "Send Teams messages";
     providerObjects: [{
        kind: "teamsChatMessage";
        label: "Teams Chat Message";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     audiences: ["internal-support"];
     capability: "notify";
     description: "Posts SDK-user-routed Teams messages for internal agent-assist, supervisor review, and workplace collaboration flows.";
     exposesSensitiveData: true;
     label: "Support internal agent assist";
     providerObjects: [{
        kind: "teamsAgentAssistMessage";
        label: "Teams Agent Assist Message";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     audiences: ["internal-support", "mixed"];
     capability: "thread";
     description: "Associates support context with Teams channel threads, replies, and chat message identifiers selected by SDK-user configuration.";
     exposesSensitiveData: true;
     label: "Use Teams conversations";
     providerObjects: [{
        kind: "teamsChatMessage";
        label: "Teams Chat Message";
      }, {
        kind: "teamsThread";
        label: "Teams Thread";
     }];
     requiresCredential: true;
   }, {
     audiences: ["internal-support", "mixed"];
     capability: "read-provider-object";
     description: "Reads Teams channel or chat messages where Microsoft Graph permissions, resource-specific consent, and tenant policy allow access.";
     exposesSensitiveData: true;
     label: "Read Teams messages";
     providerObjects: [{
        kind: "teamsChatMessage";
        label: "Teams Chat Message";
      }, {
        kind: "teamsUser";
        label: "Microsoft Graph User";
     }];
     requiresCredential: true;
   }, {
     audiences: ["internal-support"];
     capability: "create-provider-object";
     changesWorkflow: true;
     description: "Creates Microsoft Graph change-notification subscriptions for SDK-user-selected Teams resources; renewal and deletion lifecycle stays SDK-user-owned.";
     exposesSensitiveData: true;
     label: "Create Graph subscriptions";
     providerObjects: [{
        kind: "teamsGraphSubscription";
        label: "Microsoft Graph Subscription";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     audiences: ["internal-support", "mixed"];
     capability: "update-provider-object";
     changesWorkflow: true;
     description: "Updates Teams chatMessage resources through Microsoft Graph: delegated permissions can update message properties, while application permissions are limited to policyViolation updates.";
     exposesSensitiveData: true;
     label: "Update Teams messages";
     providerObjects: [{
        kind: "teamsChatMessage";
        label: "Teams Chat Message";
     }];
     requiresCredential: true;
     sideEffect: true;
  }];
  category: "workplace";
  channelAudiences: ["internal-support", "mixed"];
  coverage: {
     evidence: [{
        label: "Microsoft Graph JavaScript client";
        url: "https://www.npmjs.com/package/@microsoft/microsoft-graph-client";
      }, {
        label: "Microsoft Graph send channel message";
        url: "https://learn.microsoft.com/en-us/graph/api/channel-post-messages?view=graph-rest-1.0";
      }, {
        label: "Microsoft Graph send chat message";
        url: "https://learn.microsoft.com/en-us/graph/api/chat-post-messages?view=graph-rest-1.0";
      }, {
        label: "Microsoft Graph send channel reply";
        url: "https://learn.microsoft.com/en-us/graph/api/chatmessage-post-replies?view=graph-rest-1.0";
      }, {
        label: "Microsoft Graph list channel messages";
        url: "https://learn.microsoft.com/en-us/graph/api/channel-list-messages?view=graph-rest-1.0";
      }, {
        label: "Microsoft Graph list channel replies";
        url: "https://learn.microsoft.com/en-us/graph/api/chatmessage-list-replies?view=graph-rest-1.0";
      }, {
        label: "Microsoft Graph get chatMessage";
        url: "https://learn.microsoft.com/en-us/graph/api/chatmessage-get?view=graph-rest-1.0";
      }, {
        label: "Microsoft Graph update chatMessage";
        url: "https://learn.microsoft.com/en-us/graph/api/chatmessage-update?view=graph-rest-1.0";
      }, {
        label: "Microsoft Graph create subscription";
        url: "https://learn.microsoft.com/en-us/graph/api/subscription-post-subscriptions?view=graph-rest-1.0";
      }, {
        label: "Microsoft Graph webhook subscription lifecycle";
        url: "https://learn.microsoft.com/en-us/graph/change-notifications-delivery-webhooks";
     }];
     notes: ["Coverage includes SDK-backed Microsoft Graph Teams support workflows: channel and chat messages, channel replies, message updates, subscriptions, current-user readiness, and change notifications.", "The package uses @microsoft/microsoft-graph-client for Graph calls and keeps Cognidesk-normalized helper methods and operation handlers.", "This is not full Microsoft Graph coverage. Files/Drive, calendar, identity/admin, security, calls, meetings, app catalog breadth, and broader Graph resources remain outside this Teams adapter."];
     scope: "provider-api-subset";
  };
  credentialRequirements: [{
     description: "Server-side delegated Microsoft Graph OAuth access token for normal Teams chatMessage sends and /me readiness calls.";
     id: "microsoft-graph-oauth-access-token";
     label: "Microsoft Graph OAuth access token";
     metadata: {
        privilegeGuidance: "Normal Teams sends require delegated Microsoft Graph permissions; application permissions and resource-specific consent have narrower documented behavior and admin-consent requirements.";
        scopeKind: "mixed-auth-mode";
     };
     required: true;
     scopes: ["User.Read", "ChatMessage.Send", "ChannelMessage.Send", "Chat.Read", "Chat.ReadWrite", "ChannelMessage.Read.All", "ChannelMessage.Read.Group", "ChatMessage.Read.Chat", "ChannelMessage.ReadWrite"];
   }, {
     description: "SDK-user-owned tenant where the Teams resources, delegated users, app registration, and consent live.";
     id: "microsoft-graph-tenant";
     label: "Microsoft Entra tenant";
     required: true;
   }, {
     description: "SDK-user-owned Microsoft Entra app registration with delegated or application permissions and tenant/admin consent.";
     id: "microsoft-graph-app-registration";
     label: "Microsoft Graph app registration";
     required: true;
   }, {
     description: "SDK-user-owned secret used to validate Microsoft Graph change notification payloads.";
     id: "microsoft-graph-change-notification-client-state";
     label: "Graph change notification clientState";
     required: false;
  }];
  directions: ["receive-only", "send-only", "bidirectional"];
  id: "workplace.teams";
  limitations: ["Available operations depend on the SDK user's Microsoft Entra tenant, Teams licensing, Graph OAuth scopes, delegated versus application permission mode, resource-specific consent, tenant/admin consent, channel membership, and Teams policy.", "Normal channel/chat message sends reject application permission mode; Microsoft documents application send permissions for migration/import scenarios, which this package does not implement.", "Microsoft Graph channel and chat message APIs are intended for messages people will read; this package does not use Teams as an application log or choose automation volume policy.", "This package provides transport, parsing, and readiness helpers only; customer/internal visibility, agent assist, approval, retention, redaction, escalation, and human handoff are SDK-user policy.", "Subscription renewal, deletion, reauthorization timing, encrypted resource data decryption, and retry policy remain SDK-user integration responsibilities."];
  maintainers: [{
     name: "Cognidesk";
     type: "official";
  }];
  metadata: {
     channelCoverage: {
        applicationMigrationSend: "provider-supported-not-typed";
        changeNotifications: "typed-validate-parse";
        channelMessages: "sdk-owned-send-list-get-update";
        channelReplies: "sdk-owned-send-list";
        chatMessages: "sdk-owned-send-list-get-update";
        currentUser: "sdk-owned-read";
        graphSubscriptions: "sdk-owned-create";
     };
     implementation: {
        manifestOnlyExport: "@cognidesk/integration-workplace-teams/manifest";
        rawClientEscapeHatch: "rawClient";
        sdkPackage: "@microsoft/microsoft-graph-client";
        strategy: "official-sdk";
     };
  };
  name: "Microsoft Teams";
  operations: [{
     alias: "workplace.message.receive";
     capability: "receive";
     exposesSensitiveData: true;
     label: "Receive Teams change notifications";
     providerObject: "teamsChangeNotification";
   }, {
     alias: "workplace.thread.read";
     capability: "thread";
     exposesSensitiveData: true;
     label: "Read Teams thread messages";
     providerObject: "teamsChatMessage";
   }, {
     alias: "workplace.message.send";
     capability: "send";
     exposesSensitiveData: true;
     externallyVisible: true;
     label: "Send Teams message";
     providerObject: "teamsChatMessage";
     requiresApproval: true;
     sideEffect: true;
   }, {
     alias: "workplace.message.reply";
     capability: "send";
     exposesSensitiveData: true;
     externallyVisible: true;
     label: "Send Teams channel reply";
     providerObject: "teamsChatMessage";
     requiresApproval: true;
     sideEffect: true;
   }, {
     alias: "workplace.message.update";
     capability: "update-provider-object";
     changesWorkflow: true;
     exposesSensitiveData: true;
     label: "Update Teams message";
     providerObject: "teamsChatMessage";
     sideEffect: true;
   }, {
     alias: "workplace.notification.send";
     capability: "notify";
     exposesSensitiveData: true;
     externallyVisible: true;
     label: "Send internal Teams notification";
     providerObject: "teamsAgentAssistMessage";
     requiresApproval: true;
     sideEffect: true;
   }, {
     alias: "workplace.user.read";
     capability: "read-provider-object";
     exposesSensitiveData: true;
     label: "Read current Microsoft Graph user";
     providerObject: "teamsUser";
   }, {
     alias: "teams.channelMessages.list";
     capability: "read-provider-object";
     exposesSensitiveData: true;
     extension: true;
     label: "List Teams channel messages";
     providerObject: "teamsChatMessage";
   }, {
     alias: "teams.channelReplies.list";
     capability: "thread";
     exposesSensitiveData: true;
     extension: true;
     label: "List Teams channel replies";
     providerObject: "teamsChatMessage";
   }, {
     alias: "teams.channelMessage.get";
     capability: "read-provider-object";
     exposesSensitiveData: true;
     extension: true;
     label: "Get Teams channel message";
     providerObject: "teamsChatMessage";
   }, {
     alias: "teams.chatMessages.list";
     capability: "read-provider-object";
     exposesSensitiveData: true;
     extension: true;
     label: "List Teams chat messages";
     providerObject: "teamsChatMessage";
   }, {
     alias: "teams.chatMessage.get";
     capability: "read-provider-object";
     exposesSensitiveData: true;
     extension: true;
     label: "Get Teams chat message";
     providerObject: "teamsChatMessage";
   }, {
     alias: "teams.subscription.create";
     capability: "create-provider-object";
     changesWorkflow: true;
     exposesSensitiveData: true;
     extension: true;
     label: "Create Microsoft Graph Teams subscription";
     providerObject: "teamsGraphSubscription";
     sideEffect: true;
   }, {
     alias: "teams.webhook.parse";
     capability: "receive";
     exposesSensitiveData: true;
     extension: true;
     label: "Parse Teams webhook";
     providerObject: "teamsChangeNotification";
   }, {
     alias: "teams.rawGraph.request";
     capability: "read-provider-object";
     exposesSensitiveData: true;
     extension: true;
     label: "Run raw Microsoft Graph request";
     metadata: {
        rawClientEscapeHatch: true;
     };
     providerObject: "teamsGraphResource";
  }];
  packageName: "@cognidesk/integration-workplace-teams";
  privacyNotes: ["Teams messages, channel identifiers, chat identifiers, user identifiers, mentions, attachments, reactions, hosted content references, and change notification payloads can contain internal support context and customer data.", "Microsoft Graph OAuth tokens, app credentials, tenant identifiers, and change notification clientState secrets stay server-side and are represented in Studio only as credential readiness.", "Internal visibility, agent-assist routing, transcript use, retention, legal hold, deletion, and escalation policy remain SDK-user-owned Microsoft Teams, Microsoft Purview, and Cognidesk configuration."];
  provider: "teams";
  trustLevel: "official";
}, TeamsWorkplaceClientOptions, {
  teams.channelMessage.get: (input, context) => Promise<TeamsChatMessageResource>;
  teams.channelMessages.list: (input, context) => Promise<TeamsChatMessageCollectionResponse>;
  teams.channelReplies.list: (input, context) => Promise<TeamsChatMessageCollectionResponse>;
  teams.chatMessage.get: (input, context) => Promise<TeamsChatMessageResource>;
  teams.chatMessages.list: (input, context) => Promise<TeamsChatMessageCollectionResponse>;
  teams.rawGraph.request: (input, context) => Promise<TeamsGraphResource>;
  teams.subscription.create: (input, context) => Promise<TeamsSubscriptionResource>;
  teams.webhook.parse: (input, _context) => Promise<TeamsParsedChangeNotificationRequest>;
  workplace.message.receive: (input, _context) => Promise<TeamsParsedChangeNotificationRequest>;
  workplace.message.reply: (input, context) => Promise<TeamsChatMessageResource>;
  workplace.message.send: (input, context) => Promise<TeamsChatMessageResource>;
  workplace.message.update: (input, context) => Promise<Partial<TeamsChatMessageResource>>;
  workplace.notification.send: (input, context) => Promise<TeamsChatMessageResource>;
  workplace.thread.read: (input, context) => Promise<TeamsChatMessageCollectionResponse>;
  workplace.user.read: (_input, context) => Promise<TeamsUserResource>;
}>;
```

***

### teamsWorkplaceOperationHandlers

```ts
const teamsWorkplaceOperationHandlers: {
  teams.channelMessage.get: (input, context) => Promise<TeamsChatMessageResource>;
  teams.channelMessages.list: (input, context) => Promise<TeamsChatMessageCollectionResponse>;
  teams.channelReplies.list: (input, context) => Promise<TeamsChatMessageCollectionResponse>;
  teams.chatMessage.get: (input, context) => Promise<TeamsChatMessageResource>;
  teams.chatMessages.list: (input, context) => Promise<TeamsChatMessageCollectionResponse>;
  teams.rawGraph.request: (input, context) => Promise<TeamsGraphResource>;
  teams.subscription.create: (input, context) => Promise<TeamsSubscriptionResource>;
  teams.webhook.parse: (input, _context) => Promise<TeamsParsedChangeNotificationRequest>;
  workplace.message.receive: (input, _context) => Promise<TeamsParsedChangeNotificationRequest>;
  workplace.message.reply: (input, context) => Promise<TeamsChatMessageResource>;
  workplace.message.send: (input, context) => Promise<TeamsChatMessageResource>;
  workplace.message.update: (input, context) => Promise<Partial<TeamsChatMessageResource>>;
  workplace.notification.send: (input, context) => Promise<TeamsChatMessageResource>;
  workplace.thread.read: (input, context) => Promise<TeamsChatMessageCollectionResponse>;
  workplace.user.read: (_input, context) => Promise<TeamsUserResource>;
};
```

#### Type Declaration

| Name | Type |
| ------ | ------ |
| <a id="property-teamschannelmessageget"></a> `teams.channelMessage.get()` | (`input`, `context`) => `Promise`\<[`TeamsChatMessageResource`](#teamschatmessageresource)\> |
| <a id="property-teamschannelmessageslist"></a> `teams.channelMessages.list()` | (`input`, `context`) => `Promise`\<[`TeamsChatMessageCollectionResponse`](#teamschatmessagecollectionresponse)\> |
| <a id="property-teamschannelreplieslist"></a> `teams.channelReplies.list()` | (`input`, `context`) => `Promise`\<[`TeamsChatMessageCollectionResponse`](#teamschatmessagecollectionresponse)\> |
| <a id="property-teamschatmessageget"></a> `teams.chatMessage.get()` | (`input`, `context`) => `Promise`\<[`TeamsChatMessageResource`](#teamschatmessageresource)\> |
| <a id="property-teamschatmessageslist"></a> `teams.chatMessages.list()` | (`input`, `context`) => `Promise`\<[`TeamsChatMessageCollectionResponse`](#teamschatmessagecollectionresponse)\> |
| <a id="property-teamsrawgraphrequest"></a> `teams.rawGraph.request()` | (`input`, `context`) => `Promise`\<[`TeamsGraphResource`](#teamsgraphresource)\> |
| <a id="property-teamssubscriptioncreate"></a> `teams.subscription.create()` | (`input`, `context`) => `Promise`\<[`TeamsSubscriptionResource`](#teamssubscriptionresource)\> |
| <a id="property-teamswebhookparse"></a> `teams.webhook.parse()` | (`input`, `_context`) => `Promise`\<[`TeamsParsedChangeNotificationRequest`](#teamsparsedchangenotificationrequest)\> |
| <a id="property-workplacemessagereceive"></a> `workplace.message.receive()` | (`input`, `_context`) => `Promise`\<[`TeamsParsedChangeNotificationRequest`](#teamsparsedchangenotificationrequest)\> |
| <a id="property-workplacemessagereply"></a> `workplace.message.reply()` | (`input`, `context`) => `Promise`\<[`TeamsChatMessageResource`](#teamschatmessageresource)\> |
| <a id="property-workplacemessagesend"></a> `workplace.message.send()` | (`input`, `context`) => `Promise`\<[`TeamsChatMessageResource`](#teamschatmessageresource)\> |
| <a id="property-workplacemessageupdate"></a> `workplace.message.update()` | (`input`, `context`) => `Promise`\<`Partial`\<[`TeamsChatMessageResource`](#teamschatmessageresource)\>\> |
| <a id="property-workplacenotificationsend"></a> `workplace.notification.send()` | (`input`, `context`) => `Promise`\<[`TeamsChatMessageResource`](#teamschatmessageresource)\> |
| <a id="property-workplacethreadread"></a> `workplace.thread.read()` | (`input`, `context`) => `Promise`\<[`TeamsChatMessageCollectionResponse`](#teamschatmessagecollectionresponse)\> |
| <a id="property-workplaceuserread"></a> `workplace.user.read()` | (`_input`, `context`) => `Promise`\<[`TeamsUserResource`](#teamsuserresource)\> |

## Functions

### createTeamsWorkplaceClient()

```ts
function createTeamsWorkplaceClient(options): TeamsWorkplaceClient;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`TeamsWorkplaceClientOptions`](#teamsworkplaceclientoptions) |

#### Returns

[`TeamsWorkplaceClient`](#teamsworkplaceclient)

***

### createTeamsWorkplaceLiveChecks()

```ts
function createTeamsWorkplaceLiveChecks(options): {
  description: string;
  id: string;
  requiredCredentialIds: string[];
  run: Promise<{
     details: {
        displayName: string;
        id: string;
        mail: string;
        userPrincipalName: string;
     };
  }>;
}[];
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`TeamsLiveCheckOptions`](#teamslivecheckoptions) |

#### Returns

\{
  `description`: `string`;
  `id`: `string`;
  `requiredCredentialIds`: `string`[];
  `run`: `Promise`\<\{
     `details`: \{
        `displayName`: `string`;
        `id`: `string`;
        `mail`: `string`;
        `userPrincipalName`: `string`;
     \};
  \}\>;
\}[]

***

### normalizeTeamsGraphError()

```ts
function normalizeTeamsGraphError(error): IntegrationError;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `error` | `unknown` |

#### Returns

[`IntegrationError`](../../../../packages/integration-kit/dist.md#integrationerror)

***

### parseTeamsChangeNotificationRequest()

```ts
function parseTeamsChangeNotificationRequest(request, options?): Promise<TeamsParsedChangeNotificationRequest>;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `request` | `Request` |
| `options?` | [`ParseTeamsChangeNotificationOptions`](#parseteamschangenotificationoptions) |

#### Returns

`Promise`\<[`TeamsParsedChangeNotificationRequest`](#teamsparsedchangenotificationrequest)\>

***

### teamsChangeNotificationValidationResponse()

```ts
function teamsChangeNotificationValidationResponse(validationToken): Response;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `validationToken` | `string` |

#### Returns

`Response`

***

### teamsWorkplaceCredentialStatuses()

```ts
function teamsWorkplaceCredentialStatuses(input): {
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
| `input` | [`TeamsCredentialStatusInput`](#teamscredentialstatusinput) |

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

### validateTeamsChangeNotificationClientState()

```ts
function validateTeamsChangeNotificationClientState(input): boolean;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`ValidateTeamsChangeNotificationClientStateInput`](#validateteamschangenotificationclientstateinput) |

#### Returns

`boolean`
