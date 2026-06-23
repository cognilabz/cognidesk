# integrations/social/messenger/dist

## Interfaces

### MessengerApiResponse

#### Indexable

```ts
[key: string]: MessengerSocialProviderExtensionValue
```

#### Properties

##### attachment\_id?

```ts
optional attachment_id?: string;
```

##### message\_id?

```ts
optional message_id?: string;
```

##### recipient\_id?

```ts
optional recipient_id?: string;
```

***

### MessengerChallengeVerificationInput

#### Properties

##### challenge?

```ts
optional challenge?: string;
```

##### expectedVerifyToken

```ts
expectedVerifyToken: string;
```

##### mode?

```ts
optional mode?: string;
```

##### token?

```ts
optional token?: string;
```

***

### MessengerConversationResponse

#### Indexable

```ts
[key: string]: MessengerSocialProviderExtensionValue
```

#### Properties

##### data?

```ts
optional data?: MessengerSocialJsonObject[];
```

##### paging?

```ts
optional paging?: MessengerSocialJsonObject;
```

***

### MessengerConversationSearchInput

#### Properties

##### after?

```ts
optional after?: string;
```

##### fields?

```ts
optional fields?: string[];
```

##### limit?

```ts
optional limit?: number;
```

##### userId?

```ts
optional userId?: string;
```

***

### MessengerCredentialStatusInput

#### Properties

##### appSecret?

```ts
optional appSecret?: string;
```

##### expiresAt?

```ts
optional expiresAt?: string;
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

##### scopes?

```ts
optional scopes?: string[];
```

##### verifyToken?

```ts
optional verifyToken?: string;
```

***

### MessengerHandoverInput

#### Properties

##### metadata?

```ts
optional metadata?: string;
```

##### recipientId

```ts
recipientId: string;
```

##### targetAppId?

```ts
optional targetAppId?: string;
```

***

### MessengerLiveCheckOptions

#### Extends

- [`MessengerSocialClientOptions`](#messengersocialclientoptions)

#### Properties

##### client?

```ts
optional client?: Pick<MessengerSocialClient, "getPage" | "listConversations">;
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

[`MessengerSocialClientOptions`](#messengersocialclientoptions).[`fetch`](#fetch-1)

##### graphApiBaseUrl?

```ts
optional graphApiBaseUrl?: string;
```

###### Inherited from

[`MessengerSocialClientOptions`](#messengersocialclientoptions).[`graphApiBaseUrl`](#graphapibaseurl-1)

##### graphApiVersion?

```ts
optional graphApiVersion?: string;
```

###### Inherited from

[`MessengerSocialClientOptions`](#messengersocialclientoptions).[`graphApiVersion`](#graphapiversion-1)

##### pageAccessToken

```ts
pageAccessToken: string;
```

###### Inherited from

[`MessengerSocialClientOptions`](#messengersocialclientoptions).[`pageAccessToken`](#pageaccesstoken-2)

##### pageId

```ts
pageId: string;
```

###### Inherited from

[`MessengerSocialClientOptions`](#messengersocialclientoptions).[`pageId`](#pageid-2)

***

### MessengerSendMessageInput

#### Properties

##### additionalFields?

```ts
optional additionalFields?: MessengerSocialProviderExtensionFields;
```

##### message?

```ts
optional message?: MessengerSocialJsonObject;
```

##### messagingType?

```ts
optional messagingType?: "RESPONSE" | "UPDATE" | "MESSAGE_TAG";
```

##### notificationType?

```ts
optional notificationType?: "REGULAR" | "SILENT_PUSH" | "NO_PUSH";
```

##### recipient

```ts
recipient: {
  id: string;
};
```

###### id

```ts
id: string;
```

##### senderAction?

```ts
optional senderAction?: "typing_on" | "typing_off" | "mark_seen";
```

##### tag?

```ts
optional tag?: string;
```

***

### MessengerSocialClient

#### Methods

##### getConversationMessages()

```ts
getConversationMessages(conversationId, input?): Promise<MessengerConversationResponse>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `conversationId` | `string` |
| `input?` | `Omit`\<[`MessengerConversationSearchInput`](#messengerconversationsearchinput), `"userId"`\> |

###### Returns

`Promise`\<[`MessengerConversationResponse`](#messengerconversationresponse)\>

##### getPage()

```ts
getPage(): Promise<MessengerSocialProviderResponse>;
```

###### Returns

`Promise`\<[`MessengerSocialProviderResponse`](#messengersocialproviderresponse)\>

##### listConversations()

```ts
listConversations(input?): Promise<MessengerConversationResponse>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input?` | [`MessengerConversationSearchInput`](#messengerconversationsearchinput) |

###### Returns

`Promise`\<[`MessengerConversationResponse`](#messengerconversationresponse)\>

##### passThreadControl()

```ts
passThreadControl(input): Promise<MessengerApiResponse>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`MessengerHandoverInput`](#messengerhandoverinput) & \{ `targetAppId`: `string`; \} |

###### Returns

`Promise`\<[`MessengerApiResponse`](#messengerapiresponse)\>

##### requestThreadControl()

```ts
requestThreadControl(input): Promise<MessengerApiResponse>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | `Omit`\<[`MessengerHandoverInput`](#messengerhandoverinput), `"targetAppId"`\> |

###### Returns

`Promise`\<[`MessengerApiResponse`](#messengerapiresponse)\>

##### sendMessage()

```ts
sendMessage(input): Promise<MessengerApiResponse>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`MessengerSendMessageInput`](#messengersendmessageinput) |

###### Returns

`Promise`\<[`MessengerApiResponse`](#messengerapiresponse)\>

##### sendSenderAction()

```ts
sendSenderAction(input): Promise<MessengerApiResponse>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | \{ `action`: `NonNullable`\<`"typing_on"` \| `"typing_off"` \| `"mark_seen"`\>; `recipientId`: `string`; \} |
| `input.action` | `NonNullable`\<`"typing_on"` \| `"typing_off"` \| `"mark_seen"`\> |
| `input.recipientId` | `string` |

###### Returns

`Promise`\<[`MessengerApiResponse`](#messengerapiresponse)\>

##### sendText()

```ts
sendText(input): Promise<MessengerApiResponse>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | \{ `messagingType?`: `"RESPONSE"` \| `"UPDATE"` \| `"MESSAGE_TAG"`; `recipientId`: `string`; `tag?`: `string`; `text`: `string`; \} |
| `input.messagingType?` | `"RESPONSE"` \| `"UPDATE"` \| `"MESSAGE_TAG"` |
| `input.recipientId` | `string` |
| `input.tag?` | `string` |
| `input.text` | `string` |

###### Returns

`Promise`\<[`MessengerApiResponse`](#messengerapiresponse)\>

##### takeThreadControl()

```ts
takeThreadControl(input): Promise<MessengerApiResponse>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | `Omit`\<[`MessengerHandoverInput`](#messengerhandoverinput), `"targetAppId"`\> |

###### Returns

`Promise`\<[`MessengerApiResponse`](#messengerapiresponse)\>

##### uploadAttachment()

```ts
uploadAttachment(input): Promise<MessengerApiResponse>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`MessengerUploadAttachmentInput`](#messengeruploadattachmentinput) |

###### Returns

`Promise`\<[`MessengerApiResponse`](#messengerapiresponse)\>

***

### MessengerSocialClientOptions

#### Extended by

- [`MessengerLiveCheckOptions`](#messengerlivecheckoptions)

#### Properties

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

##### pageAccessToken

```ts
pageAccessToken: string;
```

##### pageId

```ts
pageId: string;
```

***

### MessengerSocialJsonObject

#### Extended by

- [`MessengerSocialProviderExtensionFields`](#messengersocialproviderextensionfields)
- [`MessengerSocialProviderResponse`](#messengersocialproviderresponse)

#### Indexable

```ts
[key: string]: MessengerSocialProviderExtensionValue
```

***

### MessengerSocialProviderExtensionFields

#### Extends

- [`MessengerSocialJsonObject`](#messengersocialjsonobject)

#### Indexable

```ts
[key: string]: MessengerSocialProviderExtensionValue
```

***

### MessengerSocialProviderResponse

#### Extends

- [`MessengerSocialJsonObject`](#messengersocialjsonobject)

#### Indexable

```ts
[key: string]: MessengerSocialProviderExtensionValue
```

***

### MessengerUploadAttachmentInput

#### Properties

##### isReusable?

```ts
optional isReusable?: boolean;
```

##### type

```ts
type: MessengerAttachmentType;
```

##### url

```ts
url: string;
```

***

### MessengerWebhookPayload

#### Indexable

```ts
[key: string]: MessengerSocialProviderExtensionValue
```

#### Properties

##### entry?

```ts
optional entry?: {
[key: string]: MessengerSocialProviderExtensionValue;
  changes?: MessengerSocialJsonObject[];
  id?: string;
  messaging?: MessengerSocialJsonObject[];
  time?: number;
}[];
```

###### Index Signature

```ts
[key: string]: MessengerSocialProviderExtensionValue
```

###### changes?

```ts
optional changes?: MessengerSocialJsonObject[];
```

###### id?

```ts
optional id?: string;
```

###### messaging?

```ts
optional messaging?: MessengerSocialJsonObject[];
```

###### time?

```ts
optional time?: number;
```

##### object?

```ts
optional object?: string;
```

***

### ParseMessengerWebhookOptions

#### Properties

##### appSecret?

```ts
optional appSecret?: string;
```

##### rawBody?

```ts
optional rawBody?: string;
```

##### requireSignature?

```ts
optional requireSignature?: boolean;
```

## Type Aliases

### MessengerAttachmentType

```ts
type MessengerAttachmentType = "image" | "audio" | "video" | "file";
```

***

### MessengerNormalizedEvent

```ts
type MessengerNormalizedEvent = {
  message: MessengerSocialJsonObject;
  provider: "messenger";
  raw: MessengerSocialJsonObject;
  type: "social.message.received";
};
```

#### Properties

##### message

```ts
message: MessengerSocialJsonObject;
```

##### provider

```ts
provider: "messenger";
```

##### raw

```ts
raw: MessengerSocialJsonObject;
```

##### type

```ts
type: "social.message.received";
```

***

### MessengerSocialJsonPrimitive

```ts
type MessengerSocialJsonPrimitive = string | number | boolean | null;
```

***

### MessengerSocialJsonValue

```ts
type MessengerSocialJsonValue =
  | MessengerSocialJsonPrimitive
  | MessengerSocialJsonObject
  | readonly MessengerSocialJsonValue[];
```

***

### MessengerSocialProviderExtensionValue

```ts
type MessengerSocialProviderExtensionValue =
  | MessengerSocialJsonValue
  | object
  | undefined;
```

***

### MessengerSocialProviderPayload

```ts
type MessengerSocialProviderPayload = MessengerSocialJsonObject | object;
```

***

### MessengerSocialProviderQuery

```ts
type MessengerSocialProviderQuery = Record<string, MessengerSocialProviderExtensionValue>;
```

## Functions

### createMessengerAttachmentMessage()

```ts
function createMessengerAttachmentMessage(input): MessengerSendMessageInput;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | \{ `messagingType?`: `"RESPONSE"` \| `"UPDATE"` \| `"MESSAGE_TAG"`; `payload`: [`MessengerSocialProviderPayload`](#messengersocialproviderpayload); `recipientId`: `string`; `tag?`: `string`; `type`: `"template"` \| [`MessengerAttachmentType`](#messengerattachmenttype); \} |
| `input.messagingType?` | `"RESPONSE"` \| `"UPDATE"` \| `"MESSAGE_TAG"` |
| `input.payload` | [`MessengerSocialProviderPayload`](#messengersocialproviderpayload) |
| `input.recipientId` | `string` |
| `input.tag?` | `string` |
| `input.type` | `"template"` \| [`MessengerAttachmentType`](#messengerattachmenttype) |

#### Returns

[`MessengerSendMessageInput`](#messengersendmessageinput)

***

### createMessengerSocialClient()

```ts
function createMessengerSocialClient(options): MessengerSocialClient;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`MessengerSocialClientOptions`](#messengersocialclientoptions) |

#### Returns

[`MessengerSocialClient`](#messengersocialclient)

***

### createMessengerSocialLiveChecks()

```ts
function createMessengerSocialLiveChecks(options): {
  description: string;
  id: string;
  requiredCredentialIds: string[];
  run: Promise<{
     details: {
        category: string;
        id: string;
        name: string;
     };
  }>;
}[];
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`MessengerLiveCheckOptions`](#messengerlivecheckoptions) |

#### Returns

\{
  `description`: `string`;
  `id`: `string`;
  `requiredCredentialIds`: `string`[];
  `run`: `Promise`\<\{
     `details`: \{
        `category`: `string`;
        `id`: `string`;
        `name`: `string`;
     \};
  \}\>;
\}[]

***

### createMessengerTextMessage()

```ts
function createMessengerTextMessage(input): MessengerSendMessageInput;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | \{ `messagingType?`: `"RESPONSE"` \| `"UPDATE"` \| `"MESSAGE_TAG"`; `recipientId`: `string`; `tag?`: `string`; `text`: `string`; \} |
| `input.messagingType?` | `"RESPONSE"` \| `"UPDATE"` \| `"MESSAGE_TAG"` |
| `input.recipientId` | `string` |
| `input.tag?` | `string` |
| `input.text` | `string` |

#### Returns

[`MessengerSendMessageInput`](#messengersendmessageinput)

***

### defineMessengerSocialIntegration()

```ts
function defineMessengerSocialIntegration(options): DefinedIntegration<{
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
     description: "Validates and parses Messenger Platform webhook payloads after the SDK user's Page is subscribed to the messages webhook.";
     exposesSensitiveData: true;
     label: "Receive Messenger webhooks";
     providerObjects: readonly [{
        kind: "messengerWebhook";
        label: "Messenger Webhook";
      }, {
        kind: "messengerMessage";
        label: "Messenger Message";
     }];
     requiresCredential: true;
   }, {
     audiences: readonly ["customer-facing"];
     capability: "send";
     description: "Sends Messenger Platform messages inside Meta's 24-hour standard messaging window or with SDK-user-approved MESSAGE_TAG non-promotional policy where permitted.";
     exposesSensitiveData: true;
     label: "Send Messenger messages";
     providerObjects: readonly [{
        kind: "messengerMessage";
        label: "Messenger Message";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     audiences: readonly ["customer-facing", "mixed"];
     capability: "draft";
     description: "Builds text, attachment, quick reply, sender action, and tag payloads for SDK-user approval workflows.";
     exposesSensitiveData: true;
     label: "Build Messenger payloads";
     providerObjects: readonly [{
        kind: "messengerDraft";
        label: "Messenger Draft";
     }];
   }, {
     audiences: readonly ["customer-facing", "mixed"];
     capability: "thread";
     description: "Reads Messenger conversation and message metadata with SDK-user-governed access and retention.";
     exposesSensitiveData: true;
     label: "Use Messenger conversations";
     providerObjects: readonly [{
        kind: "messengerConversation";
        label: "Messenger Conversation";
      }, {
        kind: "messengerMessage";
        label: "Messenger Message";
      }, {
        kind: "messengerPage";
        label: "Messenger Page";
     }];
     requiresCredential: true;
   }, {
     audiences: readonly ["customer-facing", "mixed"];
     capability: "read-provider-object";
     description: "Reads Messenger conversation messages and metadata through the Page Conversations graph selected by SDK configuration.";
     exposesSensitiveData: true;
     label: "Read Messenger conversations";
     providerObjects: readonly [{
        kind: "messengerConversation";
        label: "Messenger Conversation";
      }, {
        kind: "messengerMessage";
        label: "Messenger Message";
     }];
     requiresCredential: true;
   }, {
     audiences: readonly ["customer-facing", "mixed"];
     capability: "search-provider-object";
     description: "Lists Messenger Page conversations with SDK-user-supplied filters such as user ID, fields, limits, and cursors.";
     exposesSensitiveData: true;
     label: "List Messenger conversations";
     providerObjects: readonly [{
        kind: "messengerConversation";
        label: "Messenger Conversation";
     }];
     requiresCredential: true;
   }, {
     audiences: readonly ["customer-facing", "mixed"];
     capability: "media";
     description: "Sends attachment payloads and exposes inbound attachment metadata under SDK-user media policy.";
     exposesSensitiveData: true;
     label: "Use Messenger attachments";
     providerObjects: readonly [{
        kind: "messengerAttachment";
        label: "Messenger Attachment";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     audiences: readonly ["internal-support"];
     capability: "social.webhook-signature";
     description: "Validates X-Hub-Signature-256 webhook signatures with the SDK user's Meta app secret.";
     exposesSensitiveData: true;
     extension: true;
     label: "Validate Meta webhook signatures";
     providerObjects: readonly [{
        kind: "messengerSignedWebhook";
        label: "Messenger Signed Webhook";
     }];
     requiresCredential: true;
  }];
  category: "social";
  channelAudiences: readonly ["customer-facing", "mixed"];
  coverage: {
     evidence: readonly [{
        label: "Messenger webhooks";
        url: "https://developers.facebook.com/documentation/business-messaging/messenger-platform/webhooks";
      }, {
        label: "Page subscribed apps";
        url: "https://developers.facebook.com/docs/graph-api/reference/page/subscribed_apps/";
      }, {
        label: "Messenger Send API";
        url: "https://developers.facebook.com/docs/messenger-platform/send-messages/message-tags";
      }, {
        label: "Messenger sender actions";
        url: "https://developers.facebook.com/docs/messenger-platform/send-messages/sender-actions";
      }, {
        label: "Messenger attachment upload";
        url: "https://developers.facebook.com/docs/messenger-platform/reference/attachment-upload-api";
      }, {
        label: "Messenger conversation routing";
        url: "https://developers.facebook.com/documentation/business-messaging/messenger-platform/conversation-routing";
     }];
     notes: readonly ["Coverage is typed for selected Messenger Platform support workflows: Page messages send, text payloads, sender actions, attachment payload/upload helpers, conversation/message reads, Page readiness, webhook challenge handling, and X-Hub-Signature-256 validation.", "Meta's current Messenger routing surface is Conversation Routing; deprecated Handover Protocol thread-control helpers are not advertised as a current handoff capability by this package.", "This is not full Messenger Platform coverage; Messenger profile, persistent menu, personas, discovery and engagement tools, account linking, NLP, analytics, marketing messages, conversation routing configuration, and broader Page/Graph administration remain outside this adapter."];
     scope: "support-workflow-subset";
  };
  credentialRequirements: readonly [{
     description: "Server-side Meta Page access token used for Messenger Platform Send and Conversations APIs.";
     id: "messenger-page-access-token";
     label: "Messenger Page access token";
     metadata: {
        scopeKind: "provider-permission-labels";
     };
     required: true;
     scopes: readonly ["pages_messaging", "pages_show_list", "pages_read_engagement", "pages_manage_metadata"];
   }, {
     description: "Page ID that owns the Messenger inbox and conversation graph.";
     id: "messenger-page-id";
     label: "Facebook Page ID";
     required: true;
   }, {
     description: "Server-side app secret used to validate X-Hub-Signature-256 webhook deliveries.";
     id: "messenger-app-secret";
     label: "Meta app secret";
     required: true;
   }, {
     description: "SDK-user-owned token checked during Meta webhook endpoint verification.";
     id: "messenger-webhook-verify-token";
     label: "Webhook verify token";
     required: false;
   }, {
     description: "SDK-user-confirmed Page subscribed_apps configuration for Messenger messages webhooks.";
     id: "messenger-page-webhook-subscription";
     label: "Messenger Page messages webhook subscription";
     required: false;
  }];
  directions: readonly ["receive-only", "send-only", "bidirectional"];
  id: "social.messenger";
  limitations: readonly ["Available operations depend on the SDK user's Meta app mode, Page connection, permissions, Page access token, webhook subscriptions, and messaging window rules.", "Meta no longer supports Handover Protocol as the normal Messenger routing model; SDK users should configure Conversation Routing outside this adapter, and the thread-control client methods are deprecated provider escape hatches only.", "Consent, outbound-contact policy, human escalation, attachment retention, redaction, and deletion behavior remain SDK-user configuration.", "This package provides Messenger transport helpers and does not choose default automation, promotional messaging, retry, or rate-limit policy."];
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
        implementedOperationCount: 8;
        machineReadableSpecStatus: "No official public complete Messenger Platform/Graph OpenAPI spec was found in facebook/openapi during this audit.";
        operationCatalog: "docs/provider-coverage/messenger-platform-graph-selected-api-2026-06-18.operations.json";
        selectedOperationCount: 8;
     };
     channelCoverage: {
        attachments: "typed-upload-send";
        conversationRouting: "provider-supported-not-typed";
        conversations: "typed-list-read";
        handoverProtocolThreadControl: "provider-supported-deprecated-typed-thread-control";
        messages: "typed-send";
        pageReadiness: "typed-read";
        senderActions: "typed-send";
        webhooks: "typed-challenge-verify-parse";
     };
     docs: "https://developers.facebook.com/docs/messenger-platform";
  };
  name: "Facebook Messenger";
  operations: readonly [{
     alias: "messenger.webhook.parse";
     audiences: readonly ["customer-facing", "mixed"];
     capability: "receive";
     description: "Validate and parse an inbound Messenger webhook request.";
     exposesSensitiveData: true;
     extension: true;
     label: "Parse Messenger webhook";
     providerObject: "messengerWebhook";
     providerOperation: "parseMessengerWebhook";
     requiresCredential: true;
   }, {
     alias: "messenger.message.send";
     audiences: readonly ["customer-facing"];
     capability: "send";
     description: "Send a Messenger Platform message through the configured Page.";
     exposesSensitiveData: true;
     extension: true;
     externallyVisible: true;
     label: "Send Messenger message";
     providerObject: "messengerMessage";
     providerOperation: "sendMessage";
     requiresApproval: true;
     requiresCredential: true;
     sideEffect: true;
   }, {
     alias: "messenger.senderAction.send";
     audiences: readonly ["customer-facing"];
     capability: "send";
     description: "Send Messenger sender actions such as typing indicators or mark-seen.";
     extension: true;
     externallyVisible: true;
     label: "Send Messenger sender action";
     providerObject: "messengerConversation";
     providerOperation: "sendSenderAction";
     requiresCredential: true;
     sideEffect: true;
   }, {
     alias: "messenger.attachment.upload";
     audiences: readonly ["customer-facing", "mixed"];
     capability: "media";
     description: "Upload reusable attachment payloads for Messenger sends.";
     exposesSensitiveData: true;
     extension: true;
     externallyVisible: true;
     label: "Upload Messenger attachment";
     providerObject: "messengerAttachment";
     providerOperation: "uploadAttachment";
     requiresApproval: true;
     requiresCredential: true;
     sideEffect: true;
   }, {
     alias: "messenger.conversations.list";
     audiences: readonly ["customer-facing", "mixed"];
     capability: "search-provider-object";
     description: "List Messenger Page conversations with SDK-user-supplied filters.";
     exposesSensitiveData: true;
     extension: true;
     label: "List Messenger conversations";
     providerObject: "messengerConversation";
     providerOperation: "listConversations";
     requiresCredential: true;
   }, {
     alias: "messenger.conversationMessages.list";
     audiences: readonly ["customer-facing", "mixed"];
     capability: "read-provider-object";
     description: "Read messages for a Messenger conversation.";
     exposesSensitiveData: true;
     extension: true;
     label: "Read Messenger conversation messages";
     providerObject: "messengerMessage";
     providerOperation: "getConversationMessages";
     requiresCredential: true;
   }, {
     alias: "messenger.page.read";
     audiences: readonly ["internal-support", "mixed"];
     capability: "read-provider-object";
     description: "Read configured Facebook Page metadata for readiness diagnostics.";
     extension: true;
     label: "Read Messenger Page";
     providerObject: "messengerPage";
     providerOperation: "getPage";
     requiresCredential: true;
   }, {
     alias: "messenger.webhook-signature";
     audiences: readonly ["internal-support"];
     capability: "social.webhook-signature";
     description: "Validate Meta X-Hub-Signature-256 for Messenger webhook delivery.";
     exposesSensitiveData: true;
     extension: true;
     label: "Validate Messenger webhook signature";
     providerObject: "messengerSignedWebhook";
     providerOperation: "validateMessengerWebhookSignature";
     requiresCredential: true;
  }];
  packageName: "@cognidesk/integration-social-messenger";
  privacyNotes: readonly ["Messenger PSIDs, profile names, message text, attachments, conversation metadata, and webhook payloads can contain customer data.", "Meta Page access tokens, app secrets, and webhook verify tokens stay server-side and are represented in Studio only as readiness state."];
  provider: "messenger";
  trustLevel: "official";
}, MessengerSocialIntegrationOptions, {
  messenger.attachment.upload: (input) => Promise<MessengerApiResponse>;
  messenger.conversationMessages.list: (input) => Promise<MessengerConversationResponse>;
  messenger.conversations.list: (input) => Promise<MessengerConversationResponse>;
  messenger.message.send: (input) => Promise<MessengerApiResponse>;
  messenger.page.read: () => Promise<MessengerSocialProviderResponse>;
  messenger.senderAction.send: (input) => Promise<MessengerApiResponse>;
  messenger.webhook-signature: (input) => Promise<boolean>;
  messenger.webhook.parse: (input) => Promise<MessengerWebhookPayload>;
}>;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | `MessengerSocialIntegrationOptions` |

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
     `description`: `"Validates and parses Messenger Platform webhook payloads after the SDK user's Page is subscribed to the messages webhook."`;
     `exposesSensitiveData`: `true`;
     `label`: `"Receive Messenger webhooks"`;
     `providerObjects`: readonly \[\{
        `kind`: `"messengerWebhook"`;
        `label`: `"Messenger Webhook"`;
      \}, \{
        `kind`: `"messengerMessage"`;
        `label`: `"Messenger Message"`;
     \}\];
     `requiresCredential`: `true`;
   \}, \{
     `audiences`: readonly \[`"customer-facing"`\];
     `capability`: `"send"`;
     `description`: `"Sends Messenger Platform messages inside Meta's 24-hour standard messaging window or with SDK-user-approved MESSAGE_TAG non-promotional policy where permitted."`;
     `exposesSensitiveData`: `true`;
     `label`: `"Send Messenger messages"`;
     `providerObjects`: readonly \[\{
        `kind`: `"messengerMessage"`;
        `label`: `"Messenger Message"`;
     \}\];
     `requiresCredential`: `true`;
     `sideEffect`: `true`;
   \}, \{
     `audiences`: readonly \[`"customer-facing"`, `"mixed"`\];
     `capability`: `"draft"`;
     `description`: `"Builds text, attachment, quick reply, sender action, and tag payloads for SDK-user approval workflows."`;
     `exposesSensitiveData`: `true`;
     `label`: `"Build Messenger payloads"`;
     `providerObjects`: readonly \[\{
        `kind`: `"messengerDraft"`;
        `label`: `"Messenger Draft"`;
     \}\];
   \}, \{
     `audiences`: readonly \[`"customer-facing"`, `"mixed"`\];
     `capability`: `"thread"`;
     `description`: `"Reads Messenger conversation and message metadata with SDK-user-governed access and retention."`;
     `exposesSensitiveData`: `true`;
     `label`: `"Use Messenger conversations"`;
     `providerObjects`: readonly \[\{
        `kind`: `"messengerConversation"`;
        `label`: `"Messenger Conversation"`;
      \}, \{
        `kind`: `"messengerMessage"`;
        `label`: `"Messenger Message"`;
      \}, \{
        `kind`: `"messengerPage"`;
        `label`: `"Messenger Page"`;
     \}\];
     `requiresCredential`: `true`;
   \}, \{
     `audiences`: readonly \[`"customer-facing"`, `"mixed"`\];
     `capability`: `"read-provider-object"`;
     `description`: `"Reads Messenger conversation messages and metadata through the Page Conversations graph selected by SDK configuration."`;
     `exposesSensitiveData`: `true`;
     `label`: `"Read Messenger conversations"`;
     `providerObjects`: readonly \[\{
        `kind`: `"messengerConversation"`;
        `label`: `"Messenger Conversation"`;
      \}, \{
        `kind`: `"messengerMessage"`;
        `label`: `"Messenger Message"`;
     \}\];
     `requiresCredential`: `true`;
   \}, \{
     `audiences`: readonly \[`"customer-facing"`, `"mixed"`\];
     `capability`: `"search-provider-object"`;
     `description`: `"Lists Messenger Page conversations with SDK-user-supplied filters such as user ID, fields, limits, and cursors."`;
     `exposesSensitiveData`: `true`;
     `label`: `"List Messenger conversations"`;
     `providerObjects`: readonly \[\{
        `kind`: `"messengerConversation"`;
        `label`: `"Messenger Conversation"`;
     \}\];
     `requiresCredential`: `true`;
   \}, \{
     `audiences`: readonly \[`"customer-facing"`, `"mixed"`\];
     `capability`: `"media"`;
     `description`: `"Sends attachment payloads and exposes inbound attachment metadata under SDK-user media policy."`;
     `exposesSensitiveData`: `true`;
     `label`: `"Use Messenger attachments"`;
     `providerObjects`: readonly \[\{
        `kind`: `"messengerAttachment"`;
        `label`: `"Messenger Attachment"`;
     \}\];
     `requiresCredential`: `true`;
     `sideEffect`: `true`;
   \}, \{
     `audiences`: readonly \[`"internal-support"`\];
     `capability`: `"social.webhook-signature"`;
     `description`: `"Validates X-Hub-Signature-256 webhook signatures with the SDK user's Meta app secret."`;
     `exposesSensitiveData`: `true`;
     `extension`: `true`;
     `label`: `"Validate Meta webhook signatures"`;
     `providerObjects`: readonly \[\{
        `kind`: `"messengerSignedWebhook"`;
        `label`: `"Messenger Signed Webhook"`;
     \}\];
     `requiresCredential`: `true`;
  \}\];
  `category`: `"social"`;
  `channelAudiences`: readonly \[`"customer-facing"`, `"mixed"`\];
  `coverage`: \{
     `evidence`: readonly \[\{
        `label`: `"Messenger webhooks"`;
        `url`: `"https://developers.facebook.com/documentation/business-messaging/messenger-platform/webhooks"`;
      \}, \{
        `label`: `"Page subscribed apps"`;
        `url`: `"https://developers.facebook.com/docs/graph-api/reference/page/subscribed_apps/"`;
      \}, \{
        `label`: `"Messenger Send API"`;
        `url`: `"https://developers.facebook.com/docs/messenger-platform/send-messages/message-tags"`;
      \}, \{
        `label`: `"Messenger sender actions"`;
        `url`: `"https://developers.facebook.com/docs/messenger-platform/send-messages/sender-actions"`;
      \}, \{
        `label`: `"Messenger attachment upload"`;
        `url`: `"https://developers.facebook.com/docs/messenger-platform/reference/attachment-upload-api"`;
      \}, \{
        `label`: `"Messenger conversation routing"`;
        `url`: `"https://developers.facebook.com/documentation/business-messaging/messenger-platform/conversation-routing"`;
     \}\];
     `notes`: readonly \[`"Coverage is typed for selected Messenger Platform support workflows: Page messages send, text payloads, sender actions, attachment payload/upload helpers, conversation/message reads, Page readiness, webhook challenge handling, and X-Hub-Signature-256 validation."`, `"Meta's current Messenger routing surface is Conversation Routing; deprecated Handover Protocol thread-control helpers are not advertised as a current handoff capability by this package."`, `"This is not full Messenger Platform coverage; Messenger profile, persistent menu, personas, discovery and engagement tools, account linking, NLP, analytics, marketing messages, conversation routing configuration, and broader Page/Graph administration remain outside this adapter."`\];
     `scope`: `"support-workflow-subset"`;
  \};
  `credentialRequirements`: readonly \[\{
     `description`: `"Server-side Meta Page access token used for Messenger Platform Send and Conversations APIs."`;
     `id`: `"messenger-page-access-token"`;
     `label`: `"Messenger Page access token"`;
     `metadata`: \{
        `scopeKind`: `"provider-permission-labels"`;
     \};
     `required`: `true`;
     `scopes`: readonly \[`"pages_messaging"`, `"pages_show_list"`, `"pages_read_engagement"`, `"pages_manage_metadata"`\];
   \}, \{
     `description`: `"Page ID that owns the Messenger inbox and conversation graph."`;
     `id`: `"messenger-page-id"`;
     `label`: `"Facebook Page ID"`;
     `required`: `true`;
   \}, \{
     `description`: `"Server-side app secret used to validate X-Hub-Signature-256 webhook deliveries."`;
     `id`: `"messenger-app-secret"`;
     `label`: `"Meta app secret"`;
     `required`: `true`;
   \}, \{
     `description`: `"SDK-user-owned token checked during Meta webhook endpoint verification."`;
     `id`: `"messenger-webhook-verify-token"`;
     `label`: `"Webhook verify token"`;
     `required`: `false`;
   \}, \{
     `description`: `"SDK-user-confirmed Page subscribed_apps configuration for Messenger messages webhooks."`;
     `id`: `"messenger-page-webhook-subscription"`;
     `label`: `"Messenger Page messages webhook subscription"`;
     `required`: `false`;
  \}\];
  `directions`: readonly \[`"receive-only"`, `"send-only"`, `"bidirectional"`\];
  `id`: `"social.messenger"`;
  `limitations`: readonly \[`"Available operations depend on the SDK user's Meta app mode, Page connection, permissions, Page access token, webhook subscriptions, and messaging window rules."`, `"Meta no longer supports Handover Protocol as the normal Messenger routing model; SDK users should configure Conversation Routing outside this adapter, and the thread-control client methods are deprecated provider escape hatches only."`, `"Consent, outbound-contact policy, human escalation, attachment retention, redaction, and deletion behavior remain SDK-user configuration."`, `"This package provides Messenger transport helpers and does not choose default automation, promotional messaging, retry, or rate-limit policy."`\];
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
        `implementedOperationCount`: `8`;
        `machineReadableSpecStatus`: `"No official public complete Messenger Platform/Graph OpenAPI spec was found in facebook/openapi during this audit."`;
        `operationCatalog`: `"docs/provider-coverage/messenger-platform-graph-selected-api-2026-06-18.operations.json"`;
        `selectedOperationCount`: `8`;
     \};
     `channelCoverage`: \{
        `attachments`: `"typed-upload-send"`;
        `conversationRouting`: `"provider-supported-not-typed"`;
        `conversations`: `"typed-list-read"`;
        `handoverProtocolThreadControl`: `"provider-supported-deprecated-typed-thread-control"`;
        `messages`: `"typed-send"`;
        `pageReadiness`: `"typed-read"`;
        `senderActions`: `"typed-send"`;
        `webhooks`: `"typed-challenge-verify-parse"`;
     \};
     `docs`: `"https://developers.facebook.com/docs/messenger-platform"`;
  \};
  `name`: `"Facebook Messenger"`;
  `operations`: readonly \[\{
     `alias`: `"messenger.webhook.parse"`;
     `audiences`: readonly \[`"customer-facing"`, `"mixed"`\];
     `capability`: `"receive"`;
     `description`: `"Validate and parse an inbound Messenger webhook request."`;
     `exposesSensitiveData`: `true`;
     `extension`: `true`;
     `label`: `"Parse Messenger webhook"`;
     `providerObject`: `"messengerWebhook"`;
     `providerOperation`: `"parseMessengerWebhook"`;
     `requiresCredential`: `true`;
   \}, \{
     `alias`: `"messenger.message.send"`;
     `audiences`: readonly \[`"customer-facing"`\];
     `capability`: `"send"`;
     `description`: `"Send a Messenger Platform message through the configured Page."`;
     `exposesSensitiveData`: `true`;
     `extension`: `true`;
     `externallyVisible`: `true`;
     `label`: `"Send Messenger message"`;
     `providerObject`: `"messengerMessage"`;
     `providerOperation`: `"sendMessage"`;
     `requiresApproval`: `true`;
     `requiresCredential`: `true`;
     `sideEffect`: `true`;
   \}, \{
     `alias`: `"messenger.senderAction.send"`;
     `audiences`: readonly \[`"customer-facing"`\];
     `capability`: `"send"`;
     `description`: `"Send Messenger sender actions such as typing indicators or mark-seen."`;
     `extension`: `true`;
     `externallyVisible`: `true`;
     `label`: `"Send Messenger sender action"`;
     `providerObject`: `"messengerConversation"`;
     `providerOperation`: `"sendSenderAction"`;
     `requiresCredential`: `true`;
     `sideEffect`: `true`;
   \}, \{
     `alias`: `"messenger.attachment.upload"`;
     `audiences`: readonly \[`"customer-facing"`, `"mixed"`\];
     `capability`: `"media"`;
     `description`: `"Upload reusable attachment payloads for Messenger sends."`;
     `exposesSensitiveData`: `true`;
     `extension`: `true`;
     `externallyVisible`: `true`;
     `label`: `"Upload Messenger attachment"`;
     `providerObject`: `"messengerAttachment"`;
     `providerOperation`: `"uploadAttachment"`;
     `requiresApproval`: `true`;
     `requiresCredential`: `true`;
     `sideEffect`: `true`;
   \}, \{
     `alias`: `"messenger.conversations.list"`;
     `audiences`: readonly \[`"customer-facing"`, `"mixed"`\];
     `capability`: `"search-provider-object"`;
     `description`: `"List Messenger Page conversations with SDK-user-supplied filters."`;
     `exposesSensitiveData`: `true`;
     `extension`: `true`;
     `label`: `"List Messenger conversations"`;
     `providerObject`: `"messengerConversation"`;
     `providerOperation`: `"listConversations"`;
     `requiresCredential`: `true`;
   \}, \{
     `alias`: `"messenger.conversationMessages.list"`;
     `audiences`: readonly \[`"customer-facing"`, `"mixed"`\];
     `capability`: `"read-provider-object"`;
     `description`: `"Read messages for a Messenger conversation."`;
     `exposesSensitiveData`: `true`;
     `extension`: `true`;
     `label`: `"Read Messenger conversation messages"`;
     `providerObject`: `"messengerMessage"`;
     `providerOperation`: `"getConversationMessages"`;
     `requiresCredential`: `true`;
   \}, \{
     `alias`: `"messenger.page.read"`;
     `audiences`: readonly \[`"internal-support"`, `"mixed"`\];
     `capability`: `"read-provider-object"`;
     `description`: `"Read configured Facebook Page metadata for readiness diagnostics."`;
     `extension`: `true`;
     `label`: `"Read Messenger Page"`;
     `providerObject`: `"messengerPage"`;
     `providerOperation`: `"getPage"`;
     `requiresCredential`: `true`;
   \}, \{
     `alias`: `"messenger.webhook-signature"`;
     `audiences`: readonly \[`"internal-support"`\];
     `capability`: `"social.webhook-signature"`;
     `description`: `"Validate Meta X-Hub-Signature-256 for Messenger webhook delivery."`;
     `exposesSensitiveData`: `true`;
     `extension`: `true`;
     `label`: `"Validate Messenger webhook signature"`;
     `providerObject`: `"messengerSignedWebhook"`;
     `providerOperation`: `"validateMessengerWebhookSignature"`;
     `requiresCredential`: `true`;
  \}\];
  `packageName`: `"@cognidesk/integration-social-messenger"`;
  `privacyNotes`: readonly \[`"Messenger PSIDs, profile names, message text, attachments, conversation metadata, and webhook payloads can contain customer data."`, `"Meta Page access tokens, app secrets, and webhook verify tokens stay server-side and are represented in Studio only as readiness state."`\];
  `provider`: `"messenger"`;
  `trustLevel`: `"official"`;
\}, `MessengerSocialIntegrationOptions`, \{
  `messenger.attachment.upload`: (`input`) => `Promise`\<[`MessengerApiResponse`](#messengerapiresponse)\>;
  `messenger.conversationMessages.list`: (`input`) => `Promise`\<[`MessengerConversationResponse`](#messengerconversationresponse)\>;
  `messenger.conversations.list`: (`input`) => `Promise`\<[`MessengerConversationResponse`](#messengerconversationresponse)\>;
  `messenger.message.send`: (`input`) => `Promise`\<[`MessengerApiResponse`](#messengerapiresponse)\>;
  `messenger.page.read`: () => `Promise`\<[`MessengerSocialProviderResponse`](#messengersocialproviderresponse)\>;
  `messenger.senderAction.send`: (`input`) => `Promise`\<[`MessengerApiResponse`](#messengerapiresponse)\>;
  `messenger.webhook-signature`: (`input`) => `Promise`\<`boolean`\>;
  `messenger.webhook.parse`: (`input`) => `Promise`\<[`MessengerWebhookPayload`](#messengerwebhookpayload)\>;
\}\>

***

### messengerSocialCredentialStatuses()

```ts
function messengerSocialCredentialStatuses(input): {
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
| `input` | [`MessengerCredentialStatusInput`](#messengercredentialstatusinput) |

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

### normalizeMessengerWebhookEvents()

```ts
function normalizeMessengerWebhookEvents(payload): MessengerNormalizedEvent[];
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `payload` | [`MessengerWebhookPayload`](#messengerwebhookpayload) |

#### Returns

[`MessengerNormalizedEvent`](#messengernormalizedevent)[]

***

### parseMessengerWebhook()

```ts
function parseMessengerWebhook(request, options?): Promise<MessengerWebhookPayload>;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `request` | `Request` |
| `options?` | [`ParseMessengerWebhookOptions`](#parsemessengerwebhookoptions) |

#### Returns

`Promise`\<[`MessengerWebhookPayload`](#messengerwebhookpayload)\>

***

### validateMessengerWebhookSignature()

```ts
function validateMessengerWebhookSignature(input): boolean;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | \{ `appSecret`: `string`; `rawBody`: `string`; `signature`: `string`; \} |
| `input.appSecret` | `string` |
| `input.rawBody` | `string` |
| `input.signature` | `string` |

#### Returns

`boolean`

***

### verifyMessengerWebhookChallenge()

```ts
function verifyMessengerWebhookChallenge(input): string;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`MessengerChallengeVerificationInput`](#messengerchallengeverificationinput) |

#### Returns

`string`

## References

### messengerSocialProviderManifest

Re-exports [messengerSocialProviderManifest](dist/manifest.md#messengersocialprovidermanifest)
