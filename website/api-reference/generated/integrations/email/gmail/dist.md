# integrations/email/gmail/dist

## Classes

### ProviderApiError

#### Extends

- `Error`

#### Constructors

##### Constructor

```ts
new ProviderApiError(input): ProviderApiError;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`ProviderApiErrorInput`](#providerapierrorinput) |

###### Returns

[`ProviderApiError`](#providerapierror)

###### Overrides

```ts
Error.constructor
```

#### Properties

##### body

```ts
readonly body: unknown;
```

##### code?

```ts
readonly optional code?: string | number;
```

##### provider

```ts
readonly provider: string;
```

##### response

```ts
readonly response: ProviderApiErrorResponseMetadata;
```

##### retryAfter?

```ts
readonly optional retryAfter?: string;
```

##### status

```ts
readonly status: number;
```

## Interfaces

### GmailArchiveThreadInput

#### Extends

- [`GmailProviderRequestOptions`](#gmailproviderrequestoptions)

#### Properties

##### removeLabelIds?

```ts
optional removeLabelIds?: string[];
```

##### signal?

```ts
optional signal?: AbortSignal;
```

###### Inherited from

[`GmailProviderRequestOptions`](#gmailproviderrequestoptions).[`signal`](#signal-5)

##### threadId

```ts
threadId: string;
```

***

### GmailCreateDraftInput

#### Extends

- [`GmailComposedMessageInput`](#gmailcomposedmessageinput)

#### Properties

##### bcc?

```ts
optional bcc?: string[];
```

###### Inherited from

[`GmailRawMessageInput`](#gmailrawmessageinput).[`bcc`](#bcc-2)

##### cc?

```ts
optional cc?: string[];
```

###### Inherited from

[`GmailRawMessageInput`](#gmailrawmessageinput).[`cc`](#cc-2)

##### from?

```ts
optional from?: string;
```

###### Inherited from

[`GmailRawMessageInput`](#gmailrawmessageinput).[`from`](#from-2)

##### inReplyTo?

```ts
optional inReplyTo?: string;
```

###### Inherited from

[`GmailRawMessageInput`](#gmailrawmessageinput).[`inReplyTo`](#inreplyto-2)

##### messageId?

```ts
optional messageId?: string;
```

###### Inherited from

[`GmailRawMessageInput`](#gmailrawmessageinput).[`messageId`](#messageid-4)

##### raw?

```ts
optional raw?: string;
```

###### Inherited from

```ts
GmailComposedMessageInput.raw
```

##### references?

```ts
optional references?: string[];
```

###### Inherited from

[`GmailRawMessageInput`](#gmailrawmessageinput).[`references`](#references-2)

##### replyTo?

```ts
optional replyTo?: string;
```

###### Inherited from

[`GmailRawMessageInput`](#gmailrawmessageinput).[`replyTo`](#replyto-2)

##### signal?

```ts
optional signal?: AbortSignal;
```

###### Inherited from

```ts
GmailComposedMessageInput.signal
```

##### subject?

```ts
optional subject?: string;
```

###### Inherited from

[`GmailRawMessageInput`](#gmailrawmessageinput).[`subject`](#subject-2)

##### text?

```ts
optional text?: string;
```

###### Inherited from

[`GmailRawMessageInput`](#gmailrawmessageinput).[`text`](#text-1)

##### threadId?

```ts
optional threadId?: string;
```

##### to?

```ts
optional to?: string[];
```

###### Inherited from

[`GmailRawMessageInput`](#gmailrawmessageinput).[`to`](#to-2)

***

### GmailCredentialStatusInput

#### Properties

##### accessToken?

```ts
optional accessToken?: string;
```

##### auth?

```ts
optional auth?: GmailOfficialAuthClient;
```

##### expiresAt?

```ts
optional expiresAt?: string;
```

##### scopes?

```ts
optional scopes?: string[];
```

***

### GmailEmailAttachment

#### Properties

##### attachmentId?

```ts
optional attachmentId?: string;
```

##### filename?

```ts
optional filename?: string;
```

##### mimeType?

```ts
optional mimeType?: string;
```

##### partId?

```ts
optional partId?: string;
```

##### size?

```ts
optional size?: number;
```

***

### GmailEmailClient

#### Properties

##### handlers

```ts
handlers: GmailEmailOperationHandlers;
```

##### rawClient

```ts
rawClient: Gmail;
```

##### userId

```ts
userId: string;
```

#### Methods

##### archiveThread()

```ts
archiveThread(input): Promise<GmailEmailThread>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`GmailArchiveThreadInput`](#gmailarchivethreadinput) |

###### Returns

`Promise`\<[`GmailEmailThread`](#gmailemailthread)\>

##### createDraft()

```ts
createDraft(input): Promise<GmailEmailDraft>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`GmailCreateDraftInput`](#gmailcreatedraftinput) |

###### Returns

`Promise`\<[`GmailEmailDraft`](#gmailemaildraft)\>

##### execute()

```ts
execute<K>(alias, input): Promise<GmailEmailOperationOutputMap[K]>;
```

###### Type Parameters

| Type Parameter |
| ------ |
| `K` *extends* \| `"email.receive"` \| `"email.thread.read"` \| `"email.reply.send"` \| `"email.send"` \| `"email.draft.create"` \| `"email.draft.send"` \| `"email.archive"` \| `"mailbox.watch"` \| `"gmail.history.list"` \| `"gmail.attachment.get"` \| `"gmail.labels.list"` |

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `alias` | `K` |
| `input` | [`GmailEmailOperationInputMap`](#gmailemailoperationinputmap)\[`K`\] |

###### Returns

`Promise`\<[`GmailEmailOperationOutputMap`](#gmailemailoperationoutputmap)\[`K`\]\>

##### getAttachment()

```ts
getAttachment(input): Promise<Schema$MessagePartBody>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`GmailGetAttachmentInput`](#gmailgetattachmentinput) |

###### Returns

`Promise`\<`Schema$MessagePartBody`\>

##### getProfile()

```ts
getProfile(input?): Promise<Schema$Profile>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input?` | [`GmailProviderRequestOptions`](#gmailproviderrequestoptions) |

###### Returns

`Promise`\<`Schema$Profile`\>

##### listHistory()

```ts
listHistory(input): Promise<Schema$ListHistoryResponse>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`GmailListHistoryInput`](#gmaillisthistoryinput) |

###### Returns

`Promise`\<`Schema$ListHistoryResponse`\>

##### listLabels()

```ts
listLabels(input?): Promise<Schema$ListLabelsResponse>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input?` | [`GmailProviderRequestOptions`](#gmailproviderrequestoptions) |

###### Returns

`Promise`\<`Schema$ListLabelsResponse`\>

##### readThread()

```ts
readThread(input): Promise<GmailEmailThread>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`GmailReadThreadInput`](#gmailreadthreadinput) |

###### Returns

`Promise`\<[`GmailEmailThread`](#gmailemailthread)\>

##### sendDraft()

```ts
sendDraft(input): Promise<GmailEmailMessage>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`GmailSendDraftInput`](#gmailsenddraftinput) |

###### Returns

`Promise`\<[`GmailEmailMessage`](#gmailemailmessage)\>

##### sendEmail()

```ts
sendEmail(input): Promise<GmailEmailMessage>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`GmailSendEmailInput`](#gmailsendemailinput) |

###### Returns

`Promise`\<[`GmailEmailMessage`](#gmailemailmessage)\>

##### sendReply()

```ts
sendReply(input): Promise<GmailEmailMessage>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`GmailReplySendInput`](#gmailreplysendinput) |

###### Returns

`Promise`\<[`GmailEmailMessage`](#gmailemailmessage)\>

##### watchMailbox()

```ts
watchMailbox(input): Promise<Schema$WatchResponse>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`GmailWatchInput`](#gmailwatchinput) |

###### Returns

`Promise`\<`Schema$WatchResponse`\>

***

### GmailEmailClientOptions

#### Extends

- [`GmailProviderRequestOptions`](#gmailproviderrequestoptions)

#### Properties

##### accessToken?

```ts
optional accessToken?: string;
```

##### auth?

```ts
optional auth?: GmailOfficialAuthClient;
```

##### rawClient?

```ts
optional rawClient?: Gmail;
```

##### rootUrl?

```ts
optional rootUrl?: string;
```

##### signal?

```ts
optional signal?: AbortSignal;
```

###### Inherited from

[`GmailProviderRequestOptions`](#gmailproviderrequestoptions).[`signal`](#signal-5)

##### userId?

```ts
optional userId?: string;
```

***

### GmailEmailDraft

#### Properties

##### id?

```ts
optional id?: string;
```

##### message?

```ts
optional message?: GmailEmailMessage;
```

##### provider

```ts
provider: "gmail";
```

##### raw

```ts
raw: Schema$Draft;
```

***

### GmailEmailMessage

#### Properties

##### attachments

```ts
attachments: GmailEmailAttachment[];
```

##### bcc?

```ts
optional bcc?: string[];
```

##### cc?

```ts
optional cc?: string[];
```

##### from?

```ts
optional from?: string;
```

##### headers

```ts
headers: Record<string, string[]>;
```

##### historyId?

```ts
optional historyId?: string;
```

##### id?

```ts
optional id?: string;
```

##### inReplyTo?

```ts
optional inReplyTo?: string;
```

##### internalDate?

```ts
optional internalDate?: string;
```

##### labelIds

```ts
labelIds: string[];
```

##### messageId?

```ts
optional messageId?: string;
```

##### provider

```ts
provider: "gmail";
```

##### raw

```ts
raw: Schema$Message;
```

##### references?

```ts
optional references?: string[];
```

##### replyTo?

```ts
optional replyTo?: string;
```

##### snippet?

```ts
optional snippet?: string;
```

##### subject?

```ts
optional subject?: string;
```

##### threadId?

```ts
optional threadId?: string;
```

##### to?

```ts
optional to?: string[];
```

***

### GmailEmailOperationInputMap

#### Properties

##### email.archive

```ts
email.archive: GmailArchiveThreadInput;
```

##### email.draft.create

```ts
email.draft.create: GmailCreateDraftInput;
```

##### email.draft.send

```ts
email.draft.send: GmailSendDraftInput;
```

##### email.receive

```ts
email.receive:
  | Request
  | GmailPubSubNotificationEnvelope;
```

##### email.reply.send

```ts
email.reply.send: GmailReplySendInput;
```

##### email.send

```ts
email.send: GmailSendEmailInput;
```

##### email.thread.read

```ts
email.thread.read: GmailReadThreadInput;
```

##### gmail.attachment.get

```ts
gmail.attachment.get: GmailGetAttachmentInput;
```

##### gmail.history.list

```ts
gmail.history.list: GmailListHistoryInput;
```

##### gmail.labels.list

```ts
gmail.labels.list: GmailProviderRequestOptions;
```

##### mailbox.watch

```ts
mailbox.watch: GmailWatchInput;
```

***

### GmailEmailOperationOutputMap

#### Properties

##### email.archive

```ts
email.archive: GmailEmailThread;
```

##### email.draft.create

```ts
email.draft.create: GmailEmailDraft;
```

##### email.draft.send

```ts
email.draft.send: GmailEmailMessage;
```

##### email.receive

```ts
email.receive: GmailPubSubNotification;
```

##### email.reply.send

```ts
email.reply.send: GmailEmailMessage;
```

##### email.send

```ts
email.send: GmailEmailMessage;
```

##### email.thread.read

```ts
email.thread.read: GmailEmailThread;
```

##### gmail.attachment.get

```ts
gmail.attachment.get: Schema$MessagePartBody;
```

##### gmail.history.list

```ts
gmail.history.list: Schema$ListHistoryResponse;
```

##### gmail.labels.list

```ts
gmail.labels.list: Schema$ListLabelsResponse;
```

##### mailbox.watch

```ts
mailbox.watch: Schema$WatchResponse;
```

***

### GmailEmailThread

#### Properties

##### historyId?

```ts
optional historyId?: string;
```

##### id?

```ts
optional id?: string;
```

##### messages

```ts
messages: GmailEmailMessage[];
```

##### provider

```ts
provider: "gmail";
```

##### raw

```ts
raw: Schema$Thread;
```

***

### GmailGetAttachmentInput

#### Extends

- [`GmailProviderRequestOptions`](#gmailproviderrequestoptions)

#### Properties

##### attachmentId

```ts
attachmentId: string;
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

[`GmailProviderRequestOptions`](#gmailproviderrequestoptions).[`signal`](#signal-5)

***

### GmailJsonObject

#### Indexable

```ts
[key: string]: GmailJsonValue
```

***

### GmailListHistoryInput

#### Extends

- [`GmailProviderRequestOptions`](#gmailproviderrequestoptions)

#### Properties

##### historyTypes?

```ts
optional historyTypes?: GmailHistoryType[];
```

##### labelId?

```ts
optional labelId?: string;
```

##### maxResults?

```ts
optional maxResults?: number;
```

##### pageToken?

```ts
optional pageToken?: string;
```

##### signal?

```ts
optional signal?: AbortSignal;
```

###### Inherited from

[`GmailProviderRequestOptions`](#gmailproviderrequestoptions).[`signal`](#signal-5)

##### startHistoryId

```ts
startHistoryId: string;
```

***

### GmailProviderRequestOptions

#### Extended by

- [`GmailArchiveThreadInput`](#gmailarchivethreadinput)
- [`GmailEmailClientOptions`](#gmailemailclientoptions)
- [`GmailGetAttachmentInput`](#gmailgetattachmentinput)
- [`GmailListHistoryInput`](#gmaillisthistoryinput)
- [`GmailReadThreadInput`](#gmailreadthreadinput)
- [`GmailSendDraftInput`](#gmailsenddraftinput)
- [`GmailWatchInput`](#gmailwatchinput)

#### Properties

##### signal?

```ts
optional signal?: AbortSignal;
```

***

### GmailPubSubNotification

#### Properties

##### attributes?

```ts
optional attributes?: Record<string, string>;
```

##### emailAddress

```ts
emailAddress: string;
```

##### historyId

```ts
historyId: string;
```

##### messageId?

```ts
optional messageId?: string;
```

##### publishTime?

```ts
optional publishTime?: string;
```

##### rawPayload

```ts
rawPayload: GmailJsonObject;
```

##### subscription?

```ts
optional subscription?: string;
```

***

### GmailPubSubNotificationEnvelope

#### Properties

##### message?

```ts
optional message?: {
  attributes?: Record<string, string>;
  data?: string;
  message_id?: string;
  messageId?: string;
  publish_time?: string;
  publishTime?: string;
};
```

###### attributes?

```ts
optional attributes?: Record<string, string>;
```

###### data?

```ts
optional data?: string;
```

###### message\_id?

```ts
optional message_id?: string;
```

###### messageId?

```ts
optional messageId?: string;
```

###### publish\_time?

```ts
optional publish_time?: string;
```

###### publishTime?

```ts
optional publishTime?: string;
```

##### subscription?

```ts
optional subscription?: string;
```

***

### GmailRawMessageInput

#### Properties

##### bcc?

```ts
optional bcc?: string[];
```

##### cc?

```ts
optional cc?: string[];
```

##### from

```ts
from: string;
```

##### inReplyTo?

```ts
optional inReplyTo?: string;
```

##### messageId?

```ts
optional messageId?: string;
```

##### references?

```ts
optional references?: string[];
```

##### replyTo?

```ts
optional replyTo?: string;
```

##### subject

```ts
subject: string;
```

##### text

```ts
text: string;
```

##### to

```ts
to: string[];
```

***

### GmailReadThreadInput

#### Extends

- [`GmailProviderRequestOptions`](#gmailproviderrequestoptions)

#### Properties

##### format?

```ts
optional format?: "metadata" | "full" | "raw" | "minimal";
```

##### metadataHeaders?

```ts
optional metadataHeaders?: string[];
```

##### signal?

```ts
optional signal?: AbortSignal;
```

###### Inherited from

[`GmailProviderRequestOptions`](#gmailproviderrequestoptions).[`signal`](#signal-5)

##### threadId

```ts
threadId: string;
```

***

### GmailReplySendInput

#### Extends

- [`GmailComposedMessageInput`](#gmailcomposedmessageinput)

#### Properties

##### bcc?

```ts
optional bcc?: string[];
```

###### Inherited from

[`GmailRawMessageInput`](#gmailrawmessageinput).[`bcc`](#bcc-2)

##### cc?

```ts
optional cc?: string[];
```

###### Inherited from

[`GmailRawMessageInput`](#gmailrawmessageinput).[`cc`](#cc-2)

##### from?

```ts
optional from?: string;
```

###### Inherited from

[`GmailRawMessageInput`](#gmailrawmessageinput).[`from`](#from-2)

##### inReplyTo?

```ts
optional inReplyTo?: string;
```

###### Inherited from

[`GmailRawMessageInput`](#gmailrawmessageinput).[`inReplyTo`](#inreplyto-2)

##### messageId?

```ts
optional messageId?: string;
```

###### Inherited from

[`GmailRawMessageInput`](#gmailrawmessageinput).[`messageId`](#messageid-4)

##### raw?

```ts
optional raw?: string;
```

###### Inherited from

```ts
GmailComposedMessageInput.raw
```

##### references?

```ts
optional references?: string[];
```

###### Inherited from

[`GmailRawMessageInput`](#gmailrawmessageinput).[`references`](#references-2)

##### replyTo?

```ts
optional replyTo?: string;
```

###### Inherited from

[`GmailRawMessageInput`](#gmailrawmessageinput).[`replyTo`](#replyto-2)

##### signal?

```ts
optional signal?: AbortSignal;
```

###### Inherited from

```ts
GmailComposedMessageInput.signal
```

##### subject?

```ts
optional subject?: string;
```

###### Inherited from

[`GmailRawMessageInput`](#gmailrawmessageinput).[`subject`](#subject-2)

##### text?

```ts
optional text?: string;
```

###### Inherited from

[`GmailRawMessageInput`](#gmailrawmessageinput).[`text`](#text-1)

##### threadId

```ts
threadId: string;
```

##### to?

```ts
optional to?: string[];
```

###### Inherited from

[`GmailRawMessageInput`](#gmailrawmessageinput).[`to`](#to-2)

***

### GmailSendDraftInput

#### Extends

- [`GmailProviderRequestOptions`](#gmailproviderrequestoptions)

#### Properties

##### draftId

```ts
draftId: string;
```

##### signal?

```ts
optional signal?: AbortSignal;
```

###### Inherited from

[`GmailProviderRequestOptions`](#gmailproviderrequestoptions).[`signal`](#signal-5)

***

### GmailSendEmailInput

#### Extends

- [`GmailComposedMessageInput`](#gmailcomposedmessageinput)

#### Properties

##### bcc?

```ts
optional bcc?: string[];
```

###### Inherited from

[`GmailRawMessageInput`](#gmailrawmessageinput).[`bcc`](#bcc-2)

##### cc?

```ts
optional cc?: string[];
```

###### Inherited from

[`GmailRawMessageInput`](#gmailrawmessageinput).[`cc`](#cc-2)

##### from?

```ts
optional from?: string;
```

###### Inherited from

[`GmailRawMessageInput`](#gmailrawmessageinput).[`from`](#from-2)

##### inReplyTo?

```ts
optional inReplyTo?: string;
```

###### Inherited from

[`GmailRawMessageInput`](#gmailrawmessageinput).[`inReplyTo`](#inreplyto-2)

##### messageId?

```ts
optional messageId?: string;
```

###### Inherited from

[`GmailRawMessageInput`](#gmailrawmessageinput).[`messageId`](#messageid-4)

##### raw?

```ts
optional raw?: string;
```

###### Inherited from

```ts
GmailComposedMessageInput.raw
```

##### references?

```ts
optional references?: string[];
```

###### Inherited from

[`GmailRawMessageInput`](#gmailrawmessageinput).[`references`](#references-2)

##### replyTo?

```ts
optional replyTo?: string;
```

###### Inherited from

[`GmailRawMessageInput`](#gmailrawmessageinput).[`replyTo`](#replyto-2)

##### signal?

```ts
optional signal?: AbortSignal;
```

###### Inherited from

```ts
GmailComposedMessageInput.signal
```

##### subject?

```ts
optional subject?: string;
```

###### Inherited from

[`GmailRawMessageInput`](#gmailrawmessageinput).[`subject`](#subject-2)

##### text?

```ts
optional text?: string;
```

###### Inherited from

[`GmailRawMessageInput`](#gmailrawmessageinput).[`text`](#text-1)

##### threadId?

```ts
optional threadId?: string;
```

##### to?

```ts
optional to?: string[];
```

###### Inherited from

[`GmailRawMessageInput`](#gmailrawmessageinput).[`to`](#to-2)

***

### GmailWatchInput

#### Extends

- [`GmailProviderRequestOptions`](#gmailproviderrequestoptions)

#### Properties

##### labelFilterBehavior?

```ts
optional labelFilterBehavior?: "include" | "exclude";
```

##### labelIds?

```ts
optional labelIds?: string[];
```

##### signal?

```ts
optional signal?: AbortSignal;
```

###### Inherited from

[`GmailProviderRequestOptions`](#gmailproviderrequestoptions).[`signal`](#signal-5)

##### topicName

```ts
topicName: string;
```

***

### ProviderApiErrorInput

#### Properties

##### body?

```ts
optional body?: unknown;
```

##### code?

```ts
optional code?: string | number;
```

##### message

```ts
message: string;
```

##### provider

```ts
provider: string;
```

##### response

```ts
response: ProviderApiErrorResponseMetadata;
```

##### retryAfter?

```ts
optional retryAfter?: string;
```

##### status

```ts
status: number;
```

***

### ProviderApiErrorResponseMetadata

#### Properties

##### headers

```ts
headers: Record<string, string>;
```

##### requestId?

```ts
optional requestId?: string;
```

##### statusText

```ts
statusText: string;
```

##### url?

```ts
optional url?: string;
```

## Type Aliases

### GmailAttachmentBody

```ts
type GmailAttachmentBody = gmail_v1.Schema$MessagePartBody;
```

***

### GmailComposedMessageInput

```ts
type GmailComposedMessageInput = GmailProviderRequestOptions & Partial<GmailRawMessageInput> & {
  raw?: string;
};
```

#### Type Declaration

| Name | Type |
| ------ | ------ |
| `raw?` | `string` |

***

### GmailEmailOperationAlias

```ts
type GmailEmailOperationAlias = typeof GMAIL_EMAIL_OPERATION_ALIASES[number];
```

***

### GmailEmailOperationHandler

```ts
type GmailEmailOperationHandler<K> = (input) => Promise<GmailEmailOperationOutputMap[K]>;
```

#### Type Parameters

| Type Parameter |
| ------ |
| `K` *extends* [`GmailEmailOperationAlias`](#gmailemailoperationalias) |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`GmailEmailOperationInputMap`](#gmailemailoperationinputmap)\[`K`\] |

#### Returns

`Promise`\<[`GmailEmailOperationOutputMap`](#gmailemailoperationoutputmap)\[`K`\]\>

***

### GmailEmailOperationHandlers

```ts
type GmailEmailOperationHandlers = { [K in GmailEmailOperationAlias]: GmailEmailOperationHandler<K> };
```

***

### GmailHistoryListResponse

```ts
type GmailHistoryListResponse = gmail_v1.Schema$ListHistoryResponse;
```

***

### GmailHistoryType

```ts
type GmailHistoryType = "messageAdded" | "messageDeleted" | "labelAdded" | "labelRemoved";
```

***

### GmailJsonPrimitive

```ts
type GmailJsonPrimitive = string | number | boolean | null;
```

***

### GmailJsonValue

```ts
type GmailJsonValue =
  | GmailJsonPrimitive
  | GmailJsonObject
  | GmailJsonValue[];
```

***

### GmailLabelListResponse

```ts
type GmailLabelListResponse = gmail_v1.Schema$ListLabelsResponse;
```

***

### GmailLiveCheckOptions

```ts
type GmailLiveCheckOptions = GmailEmailClientOptions & {
  client?: Pick<GmailEmailClient, "getProfile">;
};
```

#### Type Declaration

| Name | Type |
| ------ | ------ |
| `client?` | `Pick`\<[`GmailEmailClient`](#gmailemailclient), `"getProfile"`\> |

***

### GmailOfficialAuth

```ts
type GmailOfficialAuth = typeof auth;
```

***

### GmailOfficialAuthClient

```ts
type GmailOfficialAuthClient = NonNullable<gmail_v1.Options["auth"]>;
```

***

### GmailOfficialClient

```ts
type GmailOfficialClient = gmail_v1.Gmail;
```

***

### GmailOfficialMethodOptions

```ts
type GmailOfficialMethodOptions = MethodOptions;
```

***

### GmailProfileResource

```ts
type GmailProfileResource = gmail_v1.Schema$Profile;
```

***

### GmailWatchResponse

```ts
type GmailWatchResponse = gmail_v1.Schema$WatchResponse;
```

## Variables

### GMAIL\_EMAIL\_OPERATION\_ALIASES

```ts
const GMAIL_EMAIL_OPERATION_ALIASES: readonly ["email.receive", "email.thread.read", "email.reply.send", "email.send", "email.draft.create", "email.draft.send", "email.archive", "mailbox.watch", "gmail.history.list", "gmail.attachment.get", "gmail.labels.list"];
```

***

### gmailEmailProviderOperations

```ts
const gmailEmailProviderOperations: ProviderOperationDeclarationInput[];
```

## Functions

### createGmailEmailClient()

```ts
function createGmailEmailClient(options): GmailEmailClient;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`GmailEmailClientOptions`](#gmailemailclientoptions) |

#### Returns

[`GmailEmailClient`](#gmailemailclient)

***

### createGmailEmailIntegration()

```ts
function createGmailEmailIntegration(options): DefinedIntegration<{
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
     audiences: readonly ["customer-facing", "internal-support", "mixed"];
     capability: "receive";
     description: "Parses Gmail Pub/Sub notifications and reads Gmail watch/history cursors.";
     exposesSensitiveData: true;
     label: "Receive Gmail mailbox changes";
     providerObjects: readonly [{
        kind: "mailbox";
        label: "Gmail Mailbox";
      }, {
        kind: "gmailHistory";
        label: "Gmail History";
     }];
     requiresCredential: true;
   }, {
     audiences: readonly ["customer-facing", "internal-support", "mixed"];
     capability: "read-provider-object";
     description: "Reads Gmail threads, messages, labels, and attachment bodies through the official SDK.";
     exposesSensitiveData: true;
     label: "Read Gmail threads and attachments";
     providerObjects: readonly [{
        kind: "emailThread";
        label: "Email Thread";
      }, {
        kind: "emailMessage";
        label: "Email Message";
      }, {
        kind: "attachment";
        label: "Attachment";
      }, {
        kind: "mailLabel";
        label: "Mail Label";
     }];
     requiresCredential: true;
   }, {
     audiences: readonly ["customer-facing", "internal-support", "mixed"];
     capability: "draft";
     description: "Creates Gmail draft messages for SDK-user-configured approval workflows.";
     exposesSensitiveData: true;
     label: "Create Gmail drafts";
     providerObjects: readonly [{
        kind: "emailDraft";
        label: "Email Draft";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     audiences: readonly ["customer-facing", "mixed"];
     capability: "send";
     description: "Sends Gmail replies, new messages, or existing drafts when SDK-user policy permits outbound contact.";
     exposesSensitiveData: true;
     label: "Send Gmail messages";
     providerObjects: readonly [{
        kind: "emailMessage";
        label: "Email Message";
      }, {
        kind: "emailDraft";
        label: "Email Draft";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     audiences: readonly ["internal-support", "mixed"];
     capability: "update-provider-object";
     changesWorkflow: true;
     description: "Removes active inbox labels from Gmail threads when SDK-user policy permits mutation.";
     exposesSensitiveData: true;
     label: "Archive Gmail threads";
     providerObjects: readonly [{
        kind: "emailThread";
        label: "Email Thread";
     }];
     requiresCredential: true;
     sideEffect: true;
  }];
  category: "email";
  channelAudiences: readonly ["customer-facing", "internal-support", "mixed"];
  coverage: {
     evidence: readonly [{
        label: "@googleapis/gmail package";
        url: "https://www.npmjs.com/package/@googleapis/gmail";
      }, {
        label: "Gmail API Node.js quickstart";
        url: "https://developers.google.com/workspace/gmail/api/quickstart/nodejs";
      }, {
        label: "Gmail users.threads.get";
        url: "https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.threads/get";
      }, {
        label: "Gmail users.messages.send";
        url: "https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages/send";
      }, {
        label: "Gmail users.drafts.create";
        url: "https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.drafts/create";
      }, {
        label: "Gmail users.threads.modify";
        url: "https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.threads/modify";
      }, {
        label: "Gmail users.watch";
        url: "https://developers.google.com/workspace/gmail/api/reference/rest/v1/users/watch";
      }, {
        label: "Gmail push notifications";
        url: "https://developers.google.com/workspace/gmail/api/guides/push";
     }];
     notes: readonly ["Coverage is intentionally scoped to normalized Cognidesk email support workflows implemented by typed handlers.", "Implementation uses the official service-specific @googleapis/gmail SDK. Broader Gmail methods remain accessible through GmailEmailClient.rawClient instead of generated Cognidesk-owned full API functions.", "Operation handlers are bound through @cognidesk/integration-kit so manifest operations and executable handlers must stay in exact parity.", "Receive coverage is Gmail watch/history foundation plus Google Cloud Pub/Sub push notification parsing; Pub/Sub topic/subscription hosting, authentication, retry, and history synchronization policy are SDK-user responsibilities."];
     scope: "support-workflow-subset";
  };
  credentialRequirements: readonly [{
     description: "Server-side OAuth access token or injected official Gmail SDK auth client.";
     id: "google-oauth-access-token";
     label: "Google OAuth access token";
     metadata: {
        scopeKind: "provider-oauth-scopes";
     };
     required: true;
     scopes: readonly ["https://www.googleapis.com/auth/gmail.readonly", "https://www.googleapis.com/auth/gmail.compose", "https://www.googleapis.com/auth/gmail.send", "https://www.googleapis.com/auth/gmail.modify", "https://www.googleapis.com/auth/gmail.metadata"];
  }];
  directions: readonly ["receive-only", "send-only", "bidirectional"];
  id: "email.gmail";
  limitations: readonly ["Available operations depend on OAuth scopes, Google Workspace policy, delegated user, and mailbox state configured by the SDK user.", "Gmail watch notifications require an SDK-user-managed Google Cloud Pub/Sub topic, subscription, webhook/worker, and history synchronization strategy.", "Draft approval, auto-send, retention, redaction, and outbound-contact policy are SDK-user configuration.", "This package does not claim full Gmail API coverage; use rawClient for advanced official SDK methods."];
  maintainers: readonly [{
     name: "Cognidesk";
     type: "official";
  }];
  metadata: {
     channelCoverage: {
        broaderGmailApi: "provider-supported-raw-client";
        gmailAttachments: "typed-read-body";
        gmailDrafts: "typed-create-and-send";
        gmailLabels: "typed-list";
        gmailMessages: "typed-send-and-reply";
        gmailThreads: "typed-read-and-archive";
        gmailWatchHistory: "typed-watch-history-foundation";
        pubSubPushDelivery: "typed-parse-only-sdk-owned-hosting";
     };
     implementation: {
        integrationKitStatus: "implemented";
        manifestImport: "no-sdk-client-initialization";
        rawClientEscapeHatch: "GmailEmailClient.rawClient";
        sdkPackage: "@googleapis/gmail";
        sdkVersionRange: "^17.0.0";
        strategy: "official-sdk";
     };
     scopeAlternatives: {
        metadataOnlyCaveat: "Gmail metadata-only scopes support profile/watch/read metadata surfaces, but SDK users must avoid query-dependent listing where the Gmail API disallows q with gmail.metadata.";
        profile: readonly ["https://mail.google.com/", "https://www.googleapis.com/auth/gmail.modify", "https://www.googleapis.com/auth/gmail.compose", "https://www.googleapis.com/auth/gmail.readonly", "https://www.googleapis.com/auth/gmail.metadata"];
        send: readonly ["https://mail.google.com/", "https://www.googleapis.com/auth/gmail.modify", "https://www.googleapis.com/auth/gmail.compose", "https://www.googleapis.com/auth/gmail.send"];
        watch: readonly ["https://mail.google.com/", "https://www.googleapis.com/auth/gmail.modify", "https://www.googleapis.com/auth/gmail.readonly", "https://www.googleapis.com/auth/gmail.metadata"];
     };
  };
  name: "Gmail";
  operations: {
     alias: string;
     audience?: "customer-facing" | "internal-support" | "mixed";
     audiences?: ("customer-facing" | "internal-support" | "mixed")[];
     capability: string;
     changesWorkflow?: boolean;
     description?: string;
     exposesSensitiveData?: boolean;
     extension?: boolean;
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
  packageName: "@cognidesk/integration-email-gmail";
  privacyNotes: readonly ["Gmail messages can contain customer content, attachments, addresses, labels, and thread history.", "OAuth tokens stay server-side and are represented in Studio only as credential readiness."];
  provider: "gmail";
  trustLevel: "official";
}, unknown, IntegrationOperationHandlers>;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`GmailEmailClientOptions`](#gmailemailclientoptions) |

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
     `audiences`: readonly \[`"customer-facing"`, `"internal-support"`, `"mixed"`\];
     `capability`: `"receive"`;
     `description`: `"Parses Gmail Pub/Sub notifications and reads Gmail watch/history cursors."`;
     `exposesSensitiveData`: `true`;
     `label`: `"Receive Gmail mailbox changes"`;
     `providerObjects`: readonly \[\{
        `kind`: `"mailbox"`;
        `label`: `"Gmail Mailbox"`;
      \}, \{
        `kind`: `"gmailHistory"`;
        `label`: `"Gmail History"`;
     \}\];
     `requiresCredential`: `true`;
   \}, \{
     `audiences`: readonly \[`"customer-facing"`, `"internal-support"`, `"mixed"`\];
     `capability`: `"read-provider-object"`;
     `description`: `"Reads Gmail threads, messages, labels, and attachment bodies through the official SDK."`;
     `exposesSensitiveData`: `true`;
     `label`: `"Read Gmail threads and attachments"`;
     `providerObjects`: readonly \[\{
        `kind`: `"emailThread"`;
        `label`: `"Email Thread"`;
      \}, \{
        `kind`: `"emailMessage"`;
        `label`: `"Email Message"`;
      \}, \{
        `kind`: `"attachment"`;
        `label`: `"Attachment"`;
      \}, \{
        `kind`: `"mailLabel"`;
        `label`: `"Mail Label"`;
     \}\];
     `requiresCredential`: `true`;
   \}, \{
     `audiences`: readonly \[`"customer-facing"`, `"internal-support"`, `"mixed"`\];
     `capability`: `"draft"`;
     `description`: `"Creates Gmail draft messages for SDK-user-configured approval workflows."`;
     `exposesSensitiveData`: `true`;
     `label`: `"Create Gmail drafts"`;
     `providerObjects`: readonly \[\{
        `kind`: `"emailDraft"`;
        `label`: `"Email Draft"`;
     \}\];
     `requiresCredential`: `true`;
     `sideEffect`: `true`;
   \}, \{
     `audiences`: readonly \[`"customer-facing"`, `"mixed"`\];
     `capability`: `"send"`;
     `description`: `"Sends Gmail replies, new messages, or existing drafts when SDK-user policy permits outbound contact."`;
     `exposesSensitiveData`: `true`;
     `label`: `"Send Gmail messages"`;
     `providerObjects`: readonly \[\{
        `kind`: `"emailMessage"`;
        `label`: `"Email Message"`;
      \}, \{
        `kind`: `"emailDraft"`;
        `label`: `"Email Draft"`;
     \}\];
     `requiresCredential`: `true`;
     `sideEffect`: `true`;
   \}, \{
     `audiences`: readonly \[`"internal-support"`, `"mixed"`\];
     `capability`: `"update-provider-object"`;
     `changesWorkflow`: `true`;
     `description`: `"Removes active inbox labels from Gmail threads when SDK-user policy permits mutation."`;
     `exposesSensitiveData`: `true`;
     `label`: `"Archive Gmail threads"`;
     `providerObjects`: readonly \[\{
        `kind`: `"emailThread"`;
        `label`: `"Email Thread"`;
     \}\];
     `requiresCredential`: `true`;
     `sideEffect`: `true`;
  \}\];
  `category`: `"email"`;
  `channelAudiences`: readonly \[`"customer-facing"`, `"internal-support"`, `"mixed"`\];
  `coverage`: \{
     `evidence`: readonly \[\{
        `label`: `"@googleapis/gmail package"`;
        `url`: `"https://www.npmjs.com/package/@googleapis/gmail"`;
      \}, \{
        `label`: `"Gmail API Node.js quickstart"`;
        `url`: `"https://developers.google.com/workspace/gmail/api/quickstart/nodejs"`;
      \}, \{
        `label`: `"Gmail users.threads.get"`;
        `url`: `"https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.threads/get"`;
      \}, \{
        `label`: `"Gmail users.messages.send"`;
        `url`: `"https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages/send"`;
      \}, \{
        `label`: `"Gmail users.drafts.create"`;
        `url`: `"https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.drafts/create"`;
      \}, \{
        `label`: `"Gmail users.threads.modify"`;
        `url`: `"https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.threads/modify"`;
      \}, \{
        `label`: `"Gmail users.watch"`;
        `url`: `"https://developers.google.com/workspace/gmail/api/reference/rest/v1/users/watch"`;
      \}, \{
        `label`: `"Gmail push notifications"`;
        `url`: `"https://developers.google.com/workspace/gmail/api/guides/push"`;
     \}\];
     `notes`: readonly \[`"Coverage is intentionally scoped to normalized Cognidesk email support workflows implemented by typed handlers."`, `"Implementation uses the official service-specific @googleapis/gmail SDK. Broader Gmail methods remain accessible through GmailEmailClient.rawClient instead of generated Cognidesk-owned full API functions."`, `"Operation handlers are bound through @cognidesk/integration-kit so manifest operations and executable handlers must stay in exact parity."`, `"Receive coverage is Gmail watch/history foundation plus Google Cloud Pub/Sub push notification parsing; Pub/Sub topic/subscription hosting, authentication, retry, and history synchronization policy are SDK-user responsibilities."`\];
     `scope`: `"support-workflow-subset"`;
  \};
  `credentialRequirements`: readonly \[\{
     `description`: `"Server-side OAuth access token or injected official Gmail SDK auth client."`;
     `id`: `"google-oauth-access-token"`;
     `label`: `"Google OAuth access token"`;
     `metadata`: \{
        `scopeKind`: `"provider-oauth-scopes"`;
     \};
     `required`: `true`;
     `scopes`: readonly \[`"https://www.googleapis.com/auth/gmail.readonly"`, `"https://www.googleapis.com/auth/gmail.compose"`, `"https://www.googleapis.com/auth/gmail.send"`, `"https://www.googleapis.com/auth/gmail.modify"`, `"https://www.googleapis.com/auth/gmail.metadata"`\];
  \}\];
  `directions`: readonly \[`"receive-only"`, `"send-only"`, `"bidirectional"`\];
  `id`: `"email.gmail"`;
  `limitations`: readonly \[`"Available operations depend on OAuth scopes, Google Workspace policy, delegated user, and mailbox state configured by the SDK user."`, `"Gmail watch notifications require an SDK-user-managed Google Cloud Pub/Sub topic, subscription, webhook/worker, and history synchronization strategy."`, `"Draft approval, auto-send, retention, redaction, and outbound-contact policy are SDK-user configuration."`, `"This package does not claim full Gmail API coverage; use rawClient for advanced official SDK methods."`\];
  `maintainers`: readonly \[\{
     `name`: `"Cognidesk"`;
     `type`: `"official"`;
  \}\];
  `metadata`: \{
     `channelCoverage`: \{
        `broaderGmailApi`: `"provider-supported-raw-client"`;
        `gmailAttachments`: `"typed-read-body"`;
        `gmailDrafts`: `"typed-create-and-send"`;
        `gmailLabels`: `"typed-list"`;
        `gmailMessages`: `"typed-send-and-reply"`;
        `gmailThreads`: `"typed-read-and-archive"`;
        `gmailWatchHistory`: `"typed-watch-history-foundation"`;
        `pubSubPushDelivery`: `"typed-parse-only-sdk-owned-hosting"`;
     \};
     `implementation`: \{
        `integrationKitStatus`: `"implemented"`;
        `manifestImport`: `"no-sdk-client-initialization"`;
        `rawClientEscapeHatch`: `"GmailEmailClient.rawClient"`;
        `sdkPackage`: `"@googleapis/gmail"`;
        `sdkVersionRange`: `"^17.0.0"`;
        `strategy`: `"official-sdk"`;
     \};
     `scopeAlternatives`: \{
        `metadataOnlyCaveat`: `"Gmail metadata-only scopes support profile/watch/read metadata surfaces, but SDK users must avoid query-dependent listing where the Gmail API disallows q with gmail.metadata."`;
        `profile`: readonly \[`"https://mail.google.com/"`, `"https://www.googleapis.com/auth/gmail.modify"`, `"https://www.googleapis.com/auth/gmail.compose"`, `"https://www.googleapis.com/auth/gmail.readonly"`, `"https://www.googleapis.com/auth/gmail.metadata"`\];
        `send`: readonly \[`"https://mail.google.com/"`, `"https://www.googleapis.com/auth/gmail.modify"`, `"https://www.googleapis.com/auth/gmail.compose"`, `"https://www.googleapis.com/auth/gmail.send"`\];
        `watch`: readonly \[`"https://mail.google.com/"`, `"https://www.googleapis.com/auth/gmail.modify"`, `"https://www.googleapis.com/auth/gmail.readonly"`, `"https://www.googleapis.com/auth/gmail.metadata"`\];
     \};
  \};
  `name`: `"Gmail"`;
  `operations`: \{
     `alias`: `string`;
     `audience?`: `"customer-facing"` \| `"internal-support"` \| `"mixed"`;
     `audiences?`: (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[];
     `capability`: `string`;
     `changesWorkflow?`: `boolean`;
     `description?`: `string`;
     `exposesSensitiveData?`: `boolean`;
     `extension?`: `boolean`;
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
  `packageName`: `"@cognidesk/integration-email-gmail"`;
  `privacyNotes`: readonly \[`"Gmail messages can contain customer content, attachments, addresses, labels, and thread history."`, `"OAuth tokens stay server-side and are represented in Studio only as credential readiness."`\];
  `provider`: `"gmail"`;
  `trustLevel`: `"official"`;
\}, `unknown`, [`IntegrationOperationHandlers`](../../../packages/integration-kit/dist.md#integrationoperationhandlers)\>

***

### createGmailEmailLiveChecks()

```ts
function createGmailEmailLiveChecks(options): {
  description: string;
  id: string;
  requiredCredentialIds: string[];
  run: Promise<{
     details: {
        emailAddress: string;
        messagesTotal: number;
     };
  }>;
}[];
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`GmailLiveCheckOptions`](#gmaillivecheckoptions) |

#### Returns

\{
  `description`: `string`;
  `id`: `string`;
  `requiredCredentialIds`: `string`[];
  `run`: `Promise`\<\{
     `details`: \{
        `emailAddress`: `string`;
        `messagesTotal`: `number`;
     \};
  \}\>;
\}[]

***

### createGmailRawMessage()

```ts
function createGmailRawMessage(input): string;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`GmailRawMessageInput`](#gmailrawmessageinput) |

#### Returns

`string`

***

### gmailEmailCredentialStatuses()

```ts
function gmailEmailCredentialStatuses(input): {
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
| `input` | [`GmailCredentialStatusInput`](#gmailcredentialstatusinput) |

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

### normalizeGmailDraft()

```ts
function normalizeGmailDraft(draft): GmailEmailDraft;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `draft` | `Schema$Draft` |

#### Returns

[`GmailEmailDraft`](#gmailemaildraft)

***

### normalizeGmailMessage()

```ts
function normalizeGmailMessage(message): GmailEmailMessage;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `message` | `Schema$Message` |

#### Returns

[`GmailEmailMessage`](#gmailemailmessage)

***

### normalizeGmailThread()

```ts
function normalizeGmailThread(thread): GmailEmailThread;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `thread` | `Schema$Thread` |

#### Returns

[`GmailEmailThread`](#gmailemailthread)

***

### parseGmailPubSubNotification()

```ts
function parseGmailPubSubNotification(requestOrEnvelope): Promise<GmailPubSubNotification>;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `requestOrEnvelope` | \| `Request` \| [`GmailPubSubNotificationEnvelope`](#gmailpubsubnotificationenvelope) |

#### Returns

`Promise`\<[`GmailPubSubNotification`](#gmailpubsubnotification)\>

## References

### gmailEmailProviderManifest

Re-exports [gmailEmailProviderManifest](dist/manifest.md#gmailemailprovidermanifest)
