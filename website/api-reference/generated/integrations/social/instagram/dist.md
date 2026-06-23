# integrations/social/instagram/dist

## Interfaces

### InstagramAccountResource

#### Indexable

```ts
[key: string]: InstagramSocialProviderExtensionValue
```

#### Properties

##### followers\_count?

```ts
optional followers_count?: number;
```

##### follows\_count?

```ts
optional follows_count?: number;
```

##### id?

```ts
optional id?: string;
```

##### media\_count?

```ts
optional media_count?: number;
```

##### name?

```ts
optional name?: string;
```

##### profile\_picture\_url?

```ts
optional profile_picture_url?: string;
```

##### username?

```ts
optional username?: string;
```

***

### InstagramConversationResource

#### Indexable

```ts
[key: string]: InstagramSocialProviderExtensionValue
```

#### Properties

##### id?

```ts
optional id?: string;
```

##### link?

```ts
optional link?: string;
```

##### messages?

```ts
optional messages?: InstagramGraphCollection<InstagramSocialJsonObject>;
```

##### participants?

```ts
optional participants?: InstagramGraphCollection<InstagramSocialJsonObject>;
```

##### updated\_time?

```ts
optional updated_time?: string;
```

***

### InstagramCredentialStatusInput

#### Properties

##### appSecret?

```ts
optional appSecret?: string;
```

##### expiresAt?

```ts
optional expiresAt?: string;
```

##### instagramBusinessAccountId?

```ts
optional instagramBusinessAccountId?: string;
```

##### pageAccessToken?

```ts
optional pageAccessToken?: string;
```

##### pageId?

```ts
optional pageId?: string;
```

##### pageWebhookSubscribed?

```ts
optional pageWebhookSubscribed?: boolean;
```

##### permissions?

```ts
optional permissions?: string[];
```

##### verifyToken?

```ts
optional verifyToken?: string;
```

***

### InstagramGraphCollection

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

#### Indexable

```ts
[key: string]: InstagramSocialProviderExtensionValue
```

#### Properties

##### data?

```ts
optional data?: T[];
```

##### paging?

```ts
optional paging?: InstagramPaging;
```

##### summary?

```ts
optional summary?: InstagramSocialJsonObject;
```

***

### InstagramListConversationsInput

#### Properties

##### accountId?

```ts
optional accountId?: string;
```

##### after?

```ts
optional after?: string;
```

##### before?

```ts
optional before?: string;
```

##### fields?

```ts
optional fields?: string[];
```

##### limit?

```ts
optional limit?: number;
```

***

### InstagramListMessagesInput

#### Properties

##### after?

```ts
optional after?: string;
```

##### before?

```ts
optional before?: string;
```

##### fields?

```ts
optional fields?: string[];
```

##### limit?

```ts
optional limit?: number;
```

***

### InstagramLiveCheckOptions

#### Extends

- [`InstagramSocialClientOptions`](#instagramsocialclientoptions)

#### Properties

##### accessToken

```ts
accessToken: string;
```

###### Inherited from

[`InstagramSocialClientOptions`](#instagramsocialclientoptions).[`accessToken`](#accesstoken-1)

##### client?

```ts
optional client?: Pick<InstagramSocialClient, "getInstagramBusinessAccount" | "getPage">;
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

[`InstagramSocialClientOptions`](#instagramsocialclientoptions).[`fetch`](#fetch-1)

##### graphApiBaseUrl?

```ts
optional graphApiBaseUrl?: string;
```

###### Inherited from

[`InstagramSocialClientOptions`](#instagramsocialclientoptions).[`graphApiBaseUrl`](#graphapibaseurl-1)

##### graphApiVersion?

```ts
optional graphApiVersion?: string;
```

###### Inherited from

[`InstagramSocialClientOptions`](#instagramsocialclientoptions).[`graphApiVersion`](#graphapiversion-1)

##### instagramBusinessAccountId?

```ts
optional instagramBusinessAccountId?: string;
```

###### Inherited from

[`InstagramSocialClientOptions`](#instagramsocialclientoptions).[`instagramBusinessAccountId`](#instagrambusinessaccountid-2)

##### pageId?

```ts
optional pageId?: string;
```

###### Inherited from

[`InstagramSocialClientOptions`](#instagramsocialclientoptions).[`pageId`](#pageid-2)

***

### InstagramMessageInput

#### Properties

##### additionalFields?

```ts
optional additionalFields?: InstagramSocialProviderExtensionFields;
```

##### message

```ts
message: InstagramSocialJsonObject;
```

##### messagingType?

```ts
optional messagingType?: "RESPONSE" | "UPDATE" | "MESSAGE_TAG";
```

##### recipient

```ts
recipient: InstagramMessageRecipient;
```

##### senderId?

```ts
optional senderId?: string;
```

##### tag?

```ts
optional tag?: string;
```

***

### InstagramMessageRecipient

#### Properties

##### id

```ts
id: string;
```

***

### InstagramMessageResource

#### Indexable

```ts
[key: string]: InstagramSocialProviderExtensionValue
```

#### Properties

##### attachments?

```ts
optional attachments?: InstagramGraphCollection<InstagramSocialJsonObject>;
```

##### created\_time?

```ts
optional created_time?: string;
```

##### from?

```ts
optional from?: InstagramSocialJsonObject;
```

##### id?

```ts
optional id?: string;
```

##### message?

```ts
optional message?: string;
```

##### to?

```ts
optional to?: InstagramSocialJsonObject;
```

***

### InstagramMessageResponse

#### Indexable

```ts
[key: string]: InstagramSocialProviderExtensionValue
```

#### Properties

##### message\_id?

```ts
optional message_id?: string;
```

##### recipient\_id?

```ts
optional recipient_id?: string;
```

***

### InstagramPageResource

#### Indexable

```ts
[key: string]: InstagramSocialProviderExtensionValue
```

#### Properties

##### id?

```ts
optional id?: string;
```

##### instagram\_business\_account?

```ts
optional instagram_business_account?: InstagramAccountResource;
```

##### name?

```ts
optional name?: string;
```

***

### InstagramPaging

#### Indexable

```ts
[key: string]: InstagramSocialProviderExtensionValue
```

#### Properties

##### cursors?

```ts
optional cursors?: {
  after?: string;
  before?: string;
};
```

###### after?

```ts
optional after?: string;
```

###### before?

```ts
optional before?: string;
```

##### next?

```ts
optional next?: string;
```

##### previous?

```ts
optional previous?: string;
```

***

### InstagramSignedWebhook

#### Properties

##### contentType?

```ts
optional contentType?: string;
```

##### payload

```ts
payload: InstagramWebhookPayload;
```

##### rawBody

```ts
rawBody: string;
```

***

### InstagramSocialClient

#### Methods

##### getInstagramBusinessAccount()

```ts
getInstagramBusinessAccount(fields?): Promise<InstagramAccountResource>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `fields?` | `string`[] |

###### Returns

`Promise`\<[`InstagramAccountResource`](#instagramaccountresource)\>

##### getMessage()

```ts
getMessage(messageId, fields?): Promise<InstagramMessageResource>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `messageId` | `string` |
| `fields?` | `string`[] |

###### Returns

`Promise`\<[`InstagramMessageResource`](#instagrammessageresource)\>

##### getPage()

```ts
getPage(fields?): Promise<InstagramPageResource>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `fields?` | `string`[] |

###### Returns

`Promise`\<[`InstagramPageResource`](#instagrampageresource)\>

##### listConversationMessages()

```ts
listConversationMessages(conversationId, input?): Promise<InstagramGraphCollection<InstagramMessageResource>>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `conversationId` | `string` |
| `input?` | [`InstagramListMessagesInput`](#instagramlistmessagesinput) |

###### Returns

`Promise`\<[`InstagramGraphCollection`](#instagramgraphcollection)\<[`InstagramMessageResource`](#instagrammessageresource)\>\>

##### listConversations()

```ts
listConversations(input?): Promise<InstagramGraphCollection<InstagramConversationResource>>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input?` | [`InstagramListConversationsInput`](#instagramlistconversationsinput) |

###### Returns

`Promise`\<[`InstagramGraphCollection`](#instagramgraphcollection)\<[`InstagramConversationResource`](#instagramconversationresource)\>\>

##### sendMessage()

```ts
sendMessage(input): Promise<InstagramMessageResponse>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`InstagramMessageInput`](#instagrammessageinput) |

###### Returns

`Promise`\<[`InstagramMessageResponse`](#instagrammessageresponse)\>

##### sendTextMessage()

```ts
sendTextMessage(input): Promise<InstagramMessageResponse>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | \{ `messagingType?`: `"RESPONSE"` \| `"UPDATE"` \| `"MESSAGE_TAG"`; `recipientId`: `string`; `senderId?`: `string`; `tag?`: `string`; `text`: `string`; \} |
| `input.messagingType?` | `"RESPONSE"` \| `"UPDATE"` \| `"MESSAGE_TAG"` |
| `input.recipientId` | `string` |
| `input.senderId?` | `string` |
| `input.tag?` | `string` |
| `input.text` | `string` |

###### Returns

`Promise`\<[`InstagramMessageResponse`](#instagrammessageresponse)\>

***

### InstagramSocialClientOptions

#### Extended by

- [`InstagramLiveCheckOptions`](#instagramlivecheckoptions)

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

##### instagramBusinessAccountId?

```ts
optional instagramBusinessAccountId?: string;
```

##### pageId?

```ts
optional pageId?: string;
```

***

### InstagramSocialJsonObject

#### Extended by

- [`InstagramSocialProviderExtensionFields`](#instagramsocialproviderextensionfields)
- [`InstagramSocialProviderResponse`](#instagramsocialproviderresponse)

#### Indexable

```ts
[key: string]: InstagramSocialProviderExtensionValue
```

***

### InstagramSocialProviderExtensionFields

#### Extends

- [`InstagramSocialJsonObject`](#instagramsocialjsonobject)

#### Indexable

```ts
[key: string]: InstagramSocialProviderExtensionValue
```

***

### InstagramSocialProviderResponse

#### Extends

- [`InstagramSocialJsonObject`](#instagramsocialjsonobject)

#### Indexable

```ts
[key: string]: InstagramSocialProviderExtensionValue
```

***

### InstagramWebhookChange

#### Indexable

```ts
[key: string]: InstagramSocialProviderExtensionValue
```

#### Properties

##### field?

```ts
optional field?: string;
```

##### value?

```ts
optional value?: InstagramSocialJsonObject;
```

***

### InstagramWebhookEntry

#### Indexable

```ts
[key: string]: InstagramSocialProviderExtensionValue
```

#### Properties

##### changes?

```ts
optional changes?: InstagramWebhookChange[];
```

##### id?

```ts
optional id?: string;
```

##### messaging?

```ts
optional messaging?: InstagramWebhookMessagingEvent[];
```

##### time?

```ts
optional time?: number;
```

***

### InstagramWebhookMessagingEvent

#### Indexable

```ts
[key: string]: InstagramSocialProviderExtensionValue
```

#### Properties

##### delivery?

```ts
optional delivery?: InstagramSocialJsonObject;
```

##### message?

```ts
optional message?: {
[key: string]: InstagramSocialProviderExtensionValue;
  attachments?: InstagramSocialJsonValue[];
  mid?: string;
  quick_reply?: InstagramSocialJsonObject;
  reply_to?: InstagramSocialJsonObject;
  text?: string;
};
```

###### Index Signature

```ts
[key: string]: InstagramSocialProviderExtensionValue
```

###### attachments?

```ts
optional attachments?: InstagramSocialJsonValue[];
```

###### mid?

```ts
optional mid?: string;
```

###### quick\_reply?

```ts
optional quick_reply?: InstagramSocialJsonObject;
```

###### reply\_to?

```ts
optional reply_to?: InstagramSocialJsonObject;
```

###### text?

```ts
optional text?: string;
```

##### postback?

```ts
optional postback?: InstagramSocialJsonObject;
```

##### reaction?

```ts
optional reaction?: InstagramSocialJsonObject;
```

##### read?

```ts
optional read?: InstagramSocialJsonObject;
```

##### recipient?

```ts
optional recipient?: {
[key: string]: InstagramSocialJsonValue;
  id?: string;
};
```

###### Index Signature

```ts
[key: string]: InstagramSocialJsonValue
```

###### id?

```ts
optional id?: string;
```

##### sender?

```ts
optional sender?: {
[key: string]: InstagramSocialJsonValue;
  id?: string;
};
```

###### Index Signature

```ts
[key: string]: InstagramSocialJsonValue
```

###### id?

```ts
optional id?: string;
```

##### timestamp?

```ts
optional timestamp?: number;
```

***

### InstagramWebhookPayload

#### Indexable

```ts
[key: string]: InstagramSocialProviderExtensionValue
```

#### Properties

##### entry?

```ts
optional entry?: InstagramWebhookEntry[];
```

##### object?

```ts
optional object?: string;
```

***

### ParseInstagramWebhookOptions

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

### ValidateInstagramWebhookSignatureInput

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

### VerifyInstagramWebhookChallengeInput

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

## Type Aliases

### InstagramNormalizedEvent

```ts
type InstagramNormalizedEvent = {
  message: unknown;
  provider: "instagram";
  raw: unknown;
  type: "social.message.received";
};
```

#### Properties

##### message

```ts
message: unknown;
```

##### provider

```ts
provider: "instagram";
```

##### raw

```ts
raw: unknown;
```

##### type

```ts
type: "social.message.received";
```

***

### InstagramSocialJsonPrimitive

```ts
type InstagramSocialJsonPrimitive = string | number | boolean | null;
```

***

### InstagramSocialJsonValue

```ts
type InstagramSocialJsonValue =
  | InstagramSocialJsonPrimitive
  | InstagramSocialJsonObject
  | readonly InstagramSocialJsonValue[];
```

***

### InstagramSocialProviderExtensionValue

```ts
type InstagramSocialProviderExtensionValue =
  | InstagramSocialJsonValue
  | object
  | undefined;
```

***

### InstagramSocialProviderPayload

```ts
type InstagramSocialProviderPayload = InstagramSocialJsonObject | object;
```

***

### InstagramSocialProviderQuery

```ts
type InstagramSocialProviderQuery = Record<string, InstagramSocialProviderExtensionValue>;
```

## Functions

### createInstagramSocialClient()

```ts
function createInstagramSocialClient(options): InstagramSocialClient;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`InstagramSocialClientOptions`](#instagramsocialclientoptions) |

#### Returns

[`InstagramSocialClient`](#instagramsocialclient)

***

### createInstagramSocialLiveChecks()

```ts
function createInstagramSocialLiveChecks(options): {
  description: string;
  id: string;
  requiredCredentialIds: string[];
  run: Promise<{
     details: {
        accountId: string;
        pageId: string;
        pageName: string;
        username: string;
     };
  }>;
}[];
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`InstagramLiveCheckOptions`](#instagramlivecheckoptions) |

#### Returns

\{
  `description`: `string`;
  `id`: `string`;
  `requiredCredentialIds`: `string`[];
  `run`: `Promise`\<\{
     `details`: \{
        `accountId`: `string`;
        `pageId`: `string`;
        `pageName`: `string`;
        `username`: `string`;
     \};
  \}\>;
\}[]

***

### createInstagramTextMessage()

```ts
function createInstagramTextMessage(input): InstagramMessageInput;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | \{ `messagingType?`: `"RESPONSE"` \| `"UPDATE"` \| `"MESSAGE_TAG"`; `recipientId`: `string`; `senderId?`: `string`; `tag?`: `string`; `text`: `string`; \} |
| `input.messagingType?` | `"RESPONSE"` \| `"UPDATE"` \| `"MESSAGE_TAG"` |
| `input.recipientId` | `string` |
| `input.senderId?` | `string` |
| `input.tag?` | `string` |
| `input.text` | `string` |

#### Returns

[`InstagramMessageInput`](#instagrammessageinput)

***

### defineInstagramSocialIntegration()

```ts
function defineInstagramSocialIntegration(options): DefinedIntegration<{
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
     description: "Validates and parses Meta webhook payloads after the SDK user's Page/app is subscribed to Instagram messaging webhook fields.";
     exposesSensitiveData: true;
     label: "Receive Instagram DM webhooks";
     providerObjects: readonly [{
        kind: "instagramWebhook";
        label: "Instagram Webhook";
      }, {
        kind: "instagramDirectMessage";
        label: "Instagram Direct Message";
      }, {
        kind: "instagramConversation";
        label: "Instagram Conversation";
     }];
     requiresCredential: true;
   }, {
     audiences: readonly ["customer-facing"];
     capability: "send";
     description: "Sends Instagram direct messages through Meta Graph API inside the 24-hour response window, or with HUMAN_AGENT human-support review where Meta permits up to 7 days.";
     exposesSensitiveData: true;
     label: "Send Instagram DM messages";
     providerObjects: readonly [{
        kind: "instagramDirectMessage";
        label: "Instagram Direct Message";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     audiences: readonly ["customer-facing", "mixed"];
     capability: "draft";
     description: "Builds Instagram messaging payloads for SDK-user-configured approval and routing workflows.";
     exposesSensitiveData: true;
     label: "Build Instagram DM payloads";
     providerObjects: readonly [{
        kind: "instagramMessageDraft";
        label: "Instagram Message Draft";
     }];
     requiresCredential: false;
   }, {
     audiences: readonly ["customer-facing", "mixed"];
     capability: "thread";
     description: "Associates provider conversation and message IDs with Cognidesk conversation policy selected by SDK users.";
     exposesSensitiveData: true;
     label: "Use Instagram conversations";
     providerObjects: readonly [{
        kind: "instagramConversation";
        label: "Instagram Conversation";
      }, {
        kind: "instagramDirectMessage";
        label: "Instagram Direct Message";
     }];
     requiresCredential: true;
   }, {
     audiences: readonly ["internal-support", "mixed"];
     capability: "read-provider-object";
     description: "Reads Instagram professional account, page, conversations, messages, and message details where Graph APIs support it.";
     exposesSensitiveData: true;
     label: "Read Instagram account and messages";
     providerObjects: readonly [{
        kind: "instagramAccount";
        label: "Instagram Account";
      }, {
        kind: "instagramPage";
        label: "Facebook Page";
      }, {
        kind: "instagramConversation";
        label: "Instagram Conversation";
      }, {
        kind: "instagramDirectMessage";
        label: "Instagram Direct Message";
     }];
     requiresCredential: true;
   }, {
     audiences: readonly ["internal-support", "mixed"];
     capability: "search-provider-object";
     description: "Lists Instagram conversations with SDK-user-supplied fields, pagination, and Graph API limits.";
     exposesSensitiveData: true;
     label: "List Instagram conversations";
     providerObjects: readonly [{
        kind: "instagramConversation";
        label: "Instagram Conversation";
     }];
     requiresCredential: true;
   }, {
     audiences: readonly ["internal-support"];
     capability: "social.webhook-signature";
     description: "Validates X-Hub-Signature-256 using the SDK user's Meta app secret before parsing webhook JSON.";
     exposesSensitiveData: true;
     extension: true;
     label: "Validate Meta webhook signatures";
     providerObjects: readonly [{
        kind: "instagramSignedWebhook";
        label: "Instagram Signed Webhook";
     }];
     requiresCredential: true;
  }];
  category: "social";
  channelAudiences: readonly ["customer-facing", "mixed"];
  coverage: {
     evidence: readonly [{
        label: "Instagram Messaging overview";
        url: "https://developers.facebook.com/documentation/business-messaging/instagram-messaging/overview";
      }, {
        label: "Instagram Messaging send message";
        url: "https://developers.facebook.com/documentation/business-messaging/instagram-messaging/features/send-message";
      }, {
        label: "Instagram Messaging webhooks";
        url: "https://developers.facebook.com/documentation/business-messaging/instagram-messaging/webhooks";
      }, {
        label: "Instagram Messaging app review";
        url: "https://developers.facebook.com/documentation/business-messaging/instagram-messaging/app-review";
     }];
     notes: readonly ["Coverage is limited to Instagram Messaging send payloads, conversations/messages reads, account/page reads, webhook challenge handling, and X-Hub-Signature-256 validation for SDK-user-owned support messaging.", "This package uses the Meta Business Messaging / Page access token model for Instagram Messaging; it does not implement the separate Instagram API with Instagram Login messaging surface.", "The package does not implement the broader Instagram Platform for media publishing, comments/moderation, mentions, insights, content discovery, account management, or full Graph API coverage."];
     scope: "support-workflow-subset";
  };
  credentialRequirements: readonly [{
     description: "Server-side Page access token used for Instagram Messaging and Graph API calls.";
     id: "instagram-page-access-token";
     label: "Meta Page access token";
     metadata: {
        scopeKind: "provider-permission-labels";
     };
     required: true;
     scopes: readonly ["instagram_manage_messages", "instagram_basic", "pages_messaging", "pages_show_list", "pages_read_engagement", "pages_manage_metadata"];
   }, {
     description: "Facebook Page connected to the SDK user's Instagram professional account.";
     id: "instagram-page-id";
     label: "Facebook Page ID";
     required: true;
   }, {
     description: "Instagram professional account ID used for conversations, profile, and webhook ownership checks.";
     id: "instagram-business-account-id";
     label: "Instagram business account ID";
     required: true;
   }, {
     description: "Server-side app secret used to validate X-Hub-Signature-256 webhook deliveries.";
     id: "instagram-app-secret";
     label: "Meta app secret";
     required: true;
   }, {
     description: "SDK-user-owned token checked during Meta webhook endpoint verification.";
     id: "instagram-webhook-verify-token";
     label: "Webhook verify token";
     required: false;
   }, {
     description: "SDK-user-confirmed Page/app subscription to Instagram messaging webhook fields.";
     id: "instagram-page-webhook-subscription";
     label: "Instagram messaging webhook subscription";
     required: false;
   }, {
     description: "SDK-user-reviewed permissions granted to the Meta app for messaging and account access.";
     id: "instagram-permissions";
     label: "Instagram Graph permissions";
     metadata: {
        scopeKind: "provider-permission-labels";
     };
     required: true;
     scopes: readonly ["instagram_manage_messages", "instagram_basic", "pages_messaging", "pages_read_engagement", "pages_manage_metadata"];
  }];
  directions: readonly ["receive-only", "send-only", "bidirectional"];
  id: "social.instagram";
  limitations: readonly ["Available operations depend on the SDK user's Meta app review, Page ownership, Instagram professional account link, granted permissions, webhook field subscriptions, messaging windows, HUMAN_AGENT review, rate limits, and regional policy.", "Instagram does not inherit general Messenger message tags as safe defaults; SDK users must configure Instagram-specific outbound policy and HUMAN_AGENT review where needed.", "Consent, outbound-contact policy, conversation continuity across channels, human escalation, retention, redaction, and deletion behavior are SDK-user configuration.", "This package provides Graph API and webhook primitives; it does not decide when to auto-reply, start outbound outreach, join chats across channels, or expose social content to operators."];
  maintainers: readonly [{
     name: "Cognidesk";
     type: "official";
  }];
  metadata: {
     apiCoverage: {
        checkedAt: "2026-06-18";
        fullMetaGraphCoverage: false;
        fullProviderApi: false;
        generatedFromOfficialSpec: false;
        implementedOperationCount: 6;
        machineReadableSpecStatus: "No official public complete Instagram Messaging/Graph OpenAPI spec was found in facebook/openapi during this audit.";
        operationCatalog: "docs/provider-coverage/instagram-messaging-graph-selected-api-2026-06-18.operations.json";
        selectedOperationCount: 6;
     };
     channelCoverage: {
        accountPageReadiness: "typed-read";
        commentsPublishingInsights: "not-covered";
        conversations: "typed-list-read";
        directMessages: "typed-send";
        humanAgentWindow: "sdk-owned-policy";
        messageDetails: "typed-read";
        webhooks: "typed-challenge-verify-parse";
     };
     docs: readonly ["https://developers.facebook.com/documentation/business-messaging/instagram-messaging/features/send-message", "https://developers.facebook.com/documentation/business-messaging/instagram-messaging/overview", "https://developers.facebook.com/documentation/business-messaging/instagram-messaging/webhooks"];
  };
  name: "Instagram Direct Messages";
  operations: readonly [{
     alias: "instagram.webhook.parse";
     audiences: readonly ["customer-facing", "mixed"];
     capability: "receive";
     description: "Validate and parse an inbound Instagram Messaging webhook request.";
     exposesSensitiveData: true;
     extension: true;
     label: "Parse Instagram webhook";
     providerObject: "instagramWebhook";
     providerOperation: "parseInstagramWebhook";
     requiresCredential: true;
   }, {
     alias: "instagram.message.send";
     audiences: readonly ["customer-facing"];
     capability: "send";
     description: "Send an Instagram Messaging direct message through the configured Page.";
     exposesSensitiveData: true;
     extension: true;
     externallyVisible: true;
     label: "Send Instagram message";
     providerObject: "instagramDirectMessage";
     providerOperation: "sendMessage";
     requiresApproval: true;
     requiresCredential: true;
     sideEffect: true;
   }, {
     alias: "instagram.draft.create";
     audiences: readonly ["customer-facing", "mixed"];
     capability: "draft";
     description: "Build an Instagram Messaging payload for SDK-user approval workflows.";
     exposesSensitiveData: true;
     extension: true;
     label: "Build Instagram message payload";
     providerObject: "instagramMessageDraft";
     providerOperation: "createInstagramTextMessage";
   }, {
     alias: "instagram.conversations.list";
     audiences: readonly ["internal-support", "mixed"];
     capability: "search-provider-object";
     description: "List Instagram conversations with SDK-user-supplied fields and pagination.";
     exposesSensitiveData: true;
     extension: true;
     label: "List Instagram conversations";
     providerObject: "instagramConversation";
     providerOperation: "listConversations";
     requiresCredential: true;
   }, {
     alias: "instagram.conversationMessages.list";
     audiences: readonly ["internal-support", "mixed"];
     capability: "read-provider-object";
     description: "Read messages for an Instagram conversation.";
     exposesSensitiveData: true;
     extension: true;
     label: "Read Instagram conversation messages";
     providerObject: "instagramDirectMessage";
     providerOperation: "listConversationMessages";
     requiresCredential: true;
   }, {
     alias: "instagram.message.read";
     audiences: readonly ["internal-support", "mixed"];
     capability: "read-provider-object";
     description: "Read an Instagram message by provider message ID.";
     exposesSensitiveData: true;
     extension: true;
     label: "Read Instagram message";
     providerObject: "instagramDirectMessage";
     providerOperation: "getMessage";
     requiresCredential: true;
   }, {
     alias: "instagram.account.read";
     audiences: readonly ["internal-support", "mixed"];
     capability: "read-provider-object";
     description: "Read configured Instagram professional account metadata.";
     exposesSensitiveData: true;
     extension: true;
     label: "Read Instagram account";
     providerObject: "instagramAccount";
     providerOperation: "getInstagramBusinessAccount";
     requiresCredential: true;
   }, {
     alias: "instagram.page.read";
     audiences: readonly ["internal-support", "mixed"];
     capability: "read-provider-object";
     description: "Read the Facebook Page connected to the Instagram professional account.";
     extension: true;
     label: "Read connected Facebook Page";
     providerObject: "instagramPage";
     providerOperation: "getPage";
     requiresCredential: true;
   }, {
     alias: "instagram.webhook-signature";
     audiences: readonly ["internal-support"];
     capability: "social.webhook-signature";
     description: "Validate Meta X-Hub-Signature-256 for Instagram webhook delivery.";
     exposesSensitiveData: true;
     extension: true;
     label: "Validate Instagram webhook signature";
     providerObject: "instagramSignedWebhook";
     providerOperation: "validateInstagramWebhookSignature";
     requiresCredential: true;
  }];
  packageName: "@cognidesk/integration-social-instagram";
  privacyNotes: readonly ["Instagram profile identifiers, usernames, message text, attachments, reactions, read events, conversation IDs, and webhook payloads can contain customer data.", "Meta Page access tokens, app secrets, and webhook verify tokens stay server-side and are represented in Studio only as readiness state."];
  provider: "instagram";
  trustLevel: "official";
}, InstagramSocialIntegrationOptions, {
  instagram.account.read: (input) => Promise<InstagramAccountResource>;
  instagram.conversationMessages.list: (input) => Promise<InstagramGraphCollection<InstagramMessageResource>>;
  instagram.conversations.list: (input) => Promise<InstagramGraphCollection<InstagramConversationResource>>;
  instagram.draft.create: (input) => Promise<InstagramMessageInput>;
  instagram.message.read: (input) => Promise<InstagramMessageResource>;
  instagram.message.send: (input) => Promise<InstagramMessageResponse>;
  instagram.page.read: (input) => Promise<InstagramPageResource>;
  instagram.webhook-signature: (input) => Promise<boolean>;
  instagram.webhook.parse: (input) => Promise<InstagramSignedWebhook>;
}>;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | `InstagramSocialIntegrationOptions` |

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
     `description`: `"Validates and parses Meta webhook payloads after the SDK user's Page/app is subscribed to Instagram messaging webhook fields."`;
     `exposesSensitiveData`: `true`;
     `label`: `"Receive Instagram DM webhooks"`;
     `providerObjects`: readonly \[\{
        `kind`: `"instagramWebhook"`;
        `label`: `"Instagram Webhook"`;
      \}, \{
        `kind`: `"instagramDirectMessage"`;
        `label`: `"Instagram Direct Message"`;
      \}, \{
        `kind`: `"instagramConversation"`;
        `label`: `"Instagram Conversation"`;
     \}\];
     `requiresCredential`: `true`;
   \}, \{
     `audiences`: readonly \[`"customer-facing"`\];
     `capability`: `"send"`;
     `description`: `"Sends Instagram direct messages through Meta Graph API inside the 24-hour response window, or with HUMAN_AGENT human-support review where Meta permits up to 7 days."`;
     `exposesSensitiveData`: `true`;
     `label`: `"Send Instagram DM messages"`;
     `providerObjects`: readonly \[\{
        `kind`: `"instagramDirectMessage"`;
        `label`: `"Instagram Direct Message"`;
     \}\];
     `requiresCredential`: `true`;
     `sideEffect`: `true`;
   \}, \{
     `audiences`: readonly \[`"customer-facing"`, `"mixed"`\];
     `capability`: `"draft"`;
     `description`: `"Builds Instagram messaging payloads for SDK-user-configured approval and routing workflows."`;
     `exposesSensitiveData`: `true`;
     `label`: `"Build Instagram DM payloads"`;
     `providerObjects`: readonly \[\{
        `kind`: `"instagramMessageDraft"`;
        `label`: `"Instagram Message Draft"`;
     \}\];
     `requiresCredential`: `false`;
   \}, \{
     `audiences`: readonly \[`"customer-facing"`, `"mixed"`\];
     `capability`: `"thread"`;
     `description`: `"Associates provider conversation and message IDs with Cognidesk conversation policy selected by SDK users."`;
     `exposesSensitiveData`: `true`;
     `label`: `"Use Instagram conversations"`;
     `providerObjects`: readonly \[\{
        `kind`: `"instagramConversation"`;
        `label`: `"Instagram Conversation"`;
      \}, \{
        `kind`: `"instagramDirectMessage"`;
        `label`: `"Instagram Direct Message"`;
     \}\];
     `requiresCredential`: `true`;
   \}, \{
     `audiences`: readonly \[`"internal-support"`, `"mixed"`\];
     `capability`: `"read-provider-object"`;
     `description`: `"Reads Instagram professional account, page, conversations, messages, and message details where Graph APIs support it."`;
     `exposesSensitiveData`: `true`;
     `label`: `"Read Instagram account and messages"`;
     `providerObjects`: readonly \[\{
        `kind`: `"instagramAccount"`;
        `label`: `"Instagram Account"`;
      \}, \{
        `kind`: `"instagramPage"`;
        `label`: `"Facebook Page"`;
      \}, \{
        `kind`: `"instagramConversation"`;
        `label`: `"Instagram Conversation"`;
      \}, \{
        `kind`: `"instagramDirectMessage"`;
        `label`: `"Instagram Direct Message"`;
     \}\];
     `requiresCredential`: `true`;
   \}, \{
     `audiences`: readonly \[`"internal-support"`, `"mixed"`\];
     `capability`: `"search-provider-object"`;
     `description`: `"Lists Instagram conversations with SDK-user-supplied fields, pagination, and Graph API limits."`;
     `exposesSensitiveData`: `true`;
     `label`: `"List Instagram conversations"`;
     `providerObjects`: readonly \[\{
        `kind`: `"instagramConversation"`;
        `label`: `"Instagram Conversation"`;
     \}\];
     `requiresCredential`: `true`;
   \}, \{
     `audiences`: readonly \[`"internal-support"`\];
     `capability`: `"social.webhook-signature"`;
     `description`: `"Validates X-Hub-Signature-256 using the SDK user's Meta app secret before parsing webhook JSON."`;
     `exposesSensitiveData`: `true`;
     `extension`: `true`;
     `label`: `"Validate Meta webhook signatures"`;
     `providerObjects`: readonly \[\{
        `kind`: `"instagramSignedWebhook"`;
        `label`: `"Instagram Signed Webhook"`;
     \}\];
     `requiresCredential`: `true`;
  \}\];
  `category`: `"social"`;
  `channelAudiences`: readonly \[`"customer-facing"`, `"mixed"`\];
  `coverage`: \{
     `evidence`: readonly \[\{
        `label`: `"Instagram Messaging overview"`;
        `url`: `"https://developers.facebook.com/documentation/business-messaging/instagram-messaging/overview"`;
      \}, \{
        `label`: `"Instagram Messaging send message"`;
        `url`: `"https://developers.facebook.com/documentation/business-messaging/instagram-messaging/features/send-message"`;
      \}, \{
        `label`: `"Instagram Messaging webhooks"`;
        `url`: `"https://developers.facebook.com/documentation/business-messaging/instagram-messaging/webhooks"`;
      \}, \{
        `label`: `"Instagram Messaging app review"`;
        `url`: `"https://developers.facebook.com/documentation/business-messaging/instagram-messaging/app-review"`;
     \}\];
     `notes`: readonly \[`"Coverage is limited to Instagram Messaging send payloads, conversations/messages reads, account/page reads, webhook challenge handling, and X-Hub-Signature-256 validation for SDK-user-owned support messaging."`, `"This package uses the Meta Business Messaging / Page access token model for Instagram Messaging; it does not implement the separate Instagram API with Instagram Login messaging surface."`, `"The package does not implement the broader Instagram Platform for media publishing, comments/moderation, mentions, insights, content discovery, account management, or full Graph API coverage."`\];
     `scope`: `"support-workflow-subset"`;
  \};
  `credentialRequirements`: readonly \[\{
     `description`: `"Server-side Page access token used for Instagram Messaging and Graph API calls."`;
     `id`: `"instagram-page-access-token"`;
     `label`: `"Meta Page access token"`;
     `metadata`: \{
        `scopeKind`: `"provider-permission-labels"`;
     \};
     `required`: `true`;
     `scopes`: readonly \[`"instagram_manage_messages"`, `"instagram_basic"`, `"pages_messaging"`, `"pages_show_list"`, `"pages_read_engagement"`, `"pages_manage_metadata"`\];
   \}, \{
     `description`: `"Facebook Page connected to the SDK user's Instagram professional account."`;
     `id`: `"instagram-page-id"`;
     `label`: `"Facebook Page ID"`;
     `required`: `true`;
   \}, \{
     `description`: `"Instagram professional account ID used for conversations, profile, and webhook ownership checks."`;
     `id`: `"instagram-business-account-id"`;
     `label`: `"Instagram business account ID"`;
     `required`: `true`;
   \}, \{
     `description`: `"Server-side app secret used to validate X-Hub-Signature-256 webhook deliveries."`;
     `id`: `"instagram-app-secret"`;
     `label`: `"Meta app secret"`;
     `required`: `true`;
   \}, \{
     `description`: `"SDK-user-owned token checked during Meta webhook endpoint verification."`;
     `id`: `"instagram-webhook-verify-token"`;
     `label`: `"Webhook verify token"`;
     `required`: `false`;
   \}, \{
     `description`: `"SDK-user-confirmed Page/app subscription to Instagram messaging webhook fields."`;
     `id`: `"instagram-page-webhook-subscription"`;
     `label`: `"Instagram messaging webhook subscription"`;
     `required`: `false`;
   \}, \{
     `description`: `"SDK-user-reviewed permissions granted to the Meta app for messaging and account access."`;
     `id`: `"instagram-permissions"`;
     `label`: `"Instagram Graph permissions"`;
     `metadata`: \{
        `scopeKind`: `"provider-permission-labels"`;
     \};
     `required`: `true`;
     `scopes`: readonly \[`"instagram_manage_messages"`, `"instagram_basic"`, `"pages_messaging"`, `"pages_read_engagement"`, `"pages_manage_metadata"`\];
  \}\];
  `directions`: readonly \[`"receive-only"`, `"send-only"`, `"bidirectional"`\];
  `id`: `"social.instagram"`;
  `limitations`: readonly \[`"Available operations depend on the SDK user's Meta app review, Page ownership, Instagram professional account link, granted permissions, webhook field subscriptions, messaging windows, HUMAN_AGENT review, rate limits, and regional policy."`, `"Instagram does not inherit general Messenger message tags as safe defaults; SDK users must configure Instagram-specific outbound policy and HUMAN_AGENT review where needed."`, `"Consent, outbound-contact policy, conversation continuity across channels, human escalation, retention, redaction, and deletion behavior are SDK-user configuration."`, `"This package provides Graph API and webhook primitives; it does not decide when to auto-reply, start outbound outreach, join chats across channels, or expose social content to operators."`\];
  `maintainers`: readonly \[\{
     `name`: `"Cognidesk"`;
     `type`: `"official"`;
  \}\];
  `metadata`: \{
     `apiCoverage`: \{
        `checkedAt`: `"2026-06-18"`;
        `fullMetaGraphCoverage`: `false`;
        `fullProviderApi`: `false`;
        `generatedFromOfficialSpec`: `false`;
        `implementedOperationCount`: `6`;
        `machineReadableSpecStatus`: `"No official public complete Instagram Messaging/Graph OpenAPI spec was found in facebook/openapi during this audit."`;
        `operationCatalog`: `"docs/provider-coverage/instagram-messaging-graph-selected-api-2026-06-18.operations.json"`;
        `selectedOperationCount`: `6`;
     \};
     `channelCoverage`: \{
        `accountPageReadiness`: `"typed-read"`;
        `commentsPublishingInsights`: `"not-covered"`;
        `conversations`: `"typed-list-read"`;
        `directMessages`: `"typed-send"`;
        `humanAgentWindow`: `"sdk-owned-policy"`;
        `messageDetails`: `"typed-read"`;
        `webhooks`: `"typed-challenge-verify-parse"`;
     \};
     `docs`: readonly \[`"https://developers.facebook.com/documentation/business-messaging/instagram-messaging/features/send-message"`, `"https://developers.facebook.com/documentation/business-messaging/instagram-messaging/overview"`, `"https://developers.facebook.com/documentation/business-messaging/instagram-messaging/webhooks"`\];
  \};
  `name`: `"Instagram Direct Messages"`;
  `operations`: readonly \[\{
     `alias`: `"instagram.webhook.parse"`;
     `audiences`: readonly \[`"customer-facing"`, `"mixed"`\];
     `capability`: `"receive"`;
     `description`: `"Validate and parse an inbound Instagram Messaging webhook request."`;
     `exposesSensitiveData`: `true`;
     `extension`: `true`;
     `label`: `"Parse Instagram webhook"`;
     `providerObject`: `"instagramWebhook"`;
     `providerOperation`: `"parseInstagramWebhook"`;
     `requiresCredential`: `true`;
   \}, \{
     `alias`: `"instagram.message.send"`;
     `audiences`: readonly \[`"customer-facing"`\];
     `capability`: `"send"`;
     `description`: `"Send an Instagram Messaging direct message through the configured Page."`;
     `exposesSensitiveData`: `true`;
     `extension`: `true`;
     `externallyVisible`: `true`;
     `label`: `"Send Instagram message"`;
     `providerObject`: `"instagramDirectMessage"`;
     `providerOperation`: `"sendMessage"`;
     `requiresApproval`: `true`;
     `requiresCredential`: `true`;
     `sideEffect`: `true`;
   \}, \{
     `alias`: `"instagram.draft.create"`;
     `audiences`: readonly \[`"customer-facing"`, `"mixed"`\];
     `capability`: `"draft"`;
     `description`: `"Build an Instagram Messaging payload for SDK-user approval workflows."`;
     `exposesSensitiveData`: `true`;
     `extension`: `true`;
     `label`: `"Build Instagram message payload"`;
     `providerObject`: `"instagramMessageDraft"`;
     `providerOperation`: `"createInstagramTextMessage"`;
   \}, \{
     `alias`: `"instagram.conversations.list"`;
     `audiences`: readonly \[`"internal-support"`, `"mixed"`\];
     `capability`: `"search-provider-object"`;
     `description`: `"List Instagram conversations with SDK-user-supplied fields and pagination."`;
     `exposesSensitiveData`: `true`;
     `extension`: `true`;
     `label`: `"List Instagram conversations"`;
     `providerObject`: `"instagramConversation"`;
     `providerOperation`: `"listConversations"`;
     `requiresCredential`: `true`;
   \}, \{
     `alias`: `"instagram.conversationMessages.list"`;
     `audiences`: readonly \[`"internal-support"`, `"mixed"`\];
     `capability`: `"read-provider-object"`;
     `description`: `"Read messages for an Instagram conversation."`;
     `exposesSensitiveData`: `true`;
     `extension`: `true`;
     `label`: `"Read Instagram conversation messages"`;
     `providerObject`: `"instagramDirectMessage"`;
     `providerOperation`: `"listConversationMessages"`;
     `requiresCredential`: `true`;
   \}, \{
     `alias`: `"instagram.message.read"`;
     `audiences`: readonly \[`"internal-support"`, `"mixed"`\];
     `capability`: `"read-provider-object"`;
     `description`: `"Read an Instagram message by provider message ID."`;
     `exposesSensitiveData`: `true`;
     `extension`: `true`;
     `label`: `"Read Instagram message"`;
     `providerObject`: `"instagramDirectMessage"`;
     `providerOperation`: `"getMessage"`;
     `requiresCredential`: `true`;
   \}, \{
     `alias`: `"instagram.account.read"`;
     `audiences`: readonly \[`"internal-support"`, `"mixed"`\];
     `capability`: `"read-provider-object"`;
     `description`: `"Read configured Instagram professional account metadata."`;
     `exposesSensitiveData`: `true`;
     `extension`: `true`;
     `label`: `"Read Instagram account"`;
     `providerObject`: `"instagramAccount"`;
     `providerOperation`: `"getInstagramBusinessAccount"`;
     `requiresCredential`: `true`;
   \}, \{
     `alias`: `"instagram.page.read"`;
     `audiences`: readonly \[`"internal-support"`, `"mixed"`\];
     `capability`: `"read-provider-object"`;
     `description`: `"Read the Facebook Page connected to the Instagram professional account."`;
     `extension`: `true`;
     `label`: `"Read connected Facebook Page"`;
     `providerObject`: `"instagramPage"`;
     `providerOperation`: `"getPage"`;
     `requiresCredential`: `true`;
   \}, \{
     `alias`: `"instagram.webhook-signature"`;
     `audiences`: readonly \[`"internal-support"`\];
     `capability`: `"social.webhook-signature"`;
     `description`: `"Validate Meta X-Hub-Signature-256 for Instagram webhook delivery."`;
     `exposesSensitiveData`: `true`;
     `extension`: `true`;
     `label`: `"Validate Instagram webhook signature"`;
     `providerObject`: `"instagramSignedWebhook"`;
     `providerOperation`: `"validateInstagramWebhookSignature"`;
     `requiresCredential`: `true`;
  \}\];
  `packageName`: `"@cognidesk/integration-social-instagram"`;
  `privacyNotes`: readonly \[`"Instagram profile identifiers, usernames, message text, attachments, reactions, read events, conversation IDs, and webhook payloads can contain customer data."`, `"Meta Page access tokens, app secrets, and webhook verify tokens stay server-side and are represented in Studio only as readiness state."`\];
  `provider`: `"instagram"`;
  `trustLevel`: `"official"`;
\}, `InstagramSocialIntegrationOptions`, \{
  `instagram.account.read`: (`input`) => `Promise`\<[`InstagramAccountResource`](#instagramaccountresource)\>;
  `instagram.conversationMessages.list`: (`input`) => `Promise`\<[`InstagramGraphCollection`](#instagramgraphcollection)\<[`InstagramMessageResource`](#instagrammessageresource)\>\>;
  `instagram.conversations.list`: (`input`) => `Promise`\<[`InstagramGraphCollection`](#instagramgraphcollection)\<[`InstagramConversationResource`](#instagramconversationresource)\>\>;
  `instagram.draft.create`: (`input`) => `Promise`\<[`InstagramMessageInput`](#instagrammessageinput)\>;
  `instagram.message.read`: (`input`) => `Promise`\<[`InstagramMessageResource`](#instagrammessageresource)\>;
  `instagram.message.send`: (`input`) => `Promise`\<[`InstagramMessageResponse`](#instagrammessageresponse)\>;
  `instagram.page.read`: (`input`) => `Promise`\<[`InstagramPageResource`](#instagrampageresource)\>;
  `instagram.webhook-signature`: (`input`) => `Promise`\<`boolean`\>;
  `instagram.webhook.parse`: (`input`) => `Promise`\<[`InstagramSignedWebhook`](#instagramsignedwebhook)\>;
\}\>

***

### instagramSocialCredentialStatuses()

```ts
function instagramSocialCredentialStatuses(input): {
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
| `input` | [`InstagramCredentialStatusInput`](#instagramcredentialstatusinput) |

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

### normalizeInstagramWebhookEvents()

```ts
function normalizeInstagramWebhookEvents(payload): InstagramNormalizedEvent[];
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `payload` | [`InstagramWebhookPayload`](#instagramwebhookpayload) |

#### Returns

[`InstagramNormalizedEvent`](#instagramnormalizedevent)[]

***

### parseInstagramWebhook()

```ts
function parseInstagramWebhook(request, options?): Promise<InstagramSignedWebhook>;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `request` | `Request` |
| `options?` | [`ParseInstagramWebhookOptions`](#parseinstagramwebhookoptions) |

#### Returns

`Promise`\<[`InstagramSignedWebhook`](#instagramsignedwebhook)\>

***

### validateInstagramWebhookSignature()

```ts
function validateInstagramWebhookSignature(input): boolean;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`ValidateInstagramWebhookSignatureInput`](#validateinstagramwebhooksignatureinput) |

#### Returns

`boolean`

***

### verifyInstagramWebhookChallenge()

```ts
function verifyInstagramWebhookChallenge(input): string;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`VerifyInstagramWebhookChallengeInput`](#verifyinstagramwebhookchallengeinput) |

#### Returns

`string`

## References

### instagramSocialProviderManifest

Re-exports [instagramSocialProviderManifest](dist/manifest.md#instagramsocialprovidermanifest)
