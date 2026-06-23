# integrations/help-center/cognidesk/dist/runtime

## Interfaces

### HelpCenterArticle

#### Properties

##### body?

```ts
optional body?: string;
```

##### id

```ts
id: string;
```

##### locale?

```ts
optional locale?: string;
```

##### metadata?

```ts
optional metadata?: HelpCenterProviderExtensionFields;
```

##### summary?

```ts
optional summary?: string;
```

##### tags?

```ts
optional tags?: string[];
```

##### title

```ts
title: string;
```

##### updatedAt?

```ts
optional updatedAt?: string;
```

##### url?

```ts
optional url?: string;
```

***

### HelpCenterClient

#### Methods

##### fetchArticle()

```ts
fetchArticle(articleId): Promise<HelpCenterArticle>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `articleId` | `string` |

###### Returns

`Promise`\<[`HelpCenterArticle`](#helpcenterarticle)\>

##### readiness()

```ts
readiness(): Promise<HelpCenterProviderResponse>;
```

###### Returns

`Promise`\<[`HelpCenterProviderResponse`](#helpcenterproviderresponse)\>

##### search()

```ts
search(input): Promise<HelpCenterSearchResult>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`HelpCenterSearchInput`](#helpcentersearchinput) |

###### Returns

`Promise`\<[`HelpCenterSearchResult`](#helpcentersearchresult)\>

***

### HelpCenterCredentialStatusInput

#### Properties

##### scopes?

```ts
optional scopes?: string[];
```

##### sourceConfigured?

```ts
optional sourceConfigured?: boolean;
```

##### webhookSecretConfigured?

```ts
optional webhookSecretConfigured?: boolean;
```

***

### HelpCenterIngestionEvent

#### Properties

##### article

```ts
article: HelpCenterArticle;
```

##### channel

```ts
channel: {
  capabilities: {
     async: boolean;
     attachments: boolean;
     audioInput: boolean;
     audioOutput: boolean;
     buttons: boolean;
     deliveryReceipts: boolean;
     files: boolean;
     html: boolean;
     images: boolean;
     markdown: boolean;
     privateReplies: boolean;
     publicReplies: boolean;
     quickReplies: boolean;
     readReceipts: boolean;
     realtime: boolean;
     richText: boolean;
     supportsHumanTransfer: boolean;
     templates: boolean;
     threaded: boolean;
     typingIndicator: boolean;
     voice: boolean;
     widgets: boolean;
  };
  channelId: string;
  externalConversationId?: string;
  externalMessageId?: string;
  externalThreadId?: string;
  externalUserId?: string;
  kind: string;
  locale?: string;
  metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
  provider?: string;
  timezone?: string;
};
```

###### capabilities

```ts
capabilities: {
  async: boolean;
  attachments: boolean;
  audioInput: boolean;
  audioOutput: boolean;
  buttons: boolean;
  deliveryReceipts: boolean;
  files: boolean;
  html: boolean;
  images: boolean;
  markdown: boolean;
  privateReplies: boolean;
  publicReplies: boolean;
  quickReplies: boolean;
  readReceipts: boolean;
  realtime: boolean;
  richText: boolean;
  supportsHumanTransfer: boolean;
  templates: boolean;
  threaded: boolean;
  typingIndicator: boolean;
  voice: boolean;
  widgets: boolean;
};
```

###### capabilities.async

```ts
async: boolean;
```

###### capabilities.attachments

```ts
attachments: boolean;
```

###### capabilities.audioInput

```ts
audioInput: boolean;
```

###### capabilities.audioOutput

```ts
audioOutput: boolean;
```

###### capabilities.buttons

```ts
buttons: boolean;
```

###### capabilities.deliveryReceipts

```ts
deliveryReceipts: boolean;
```

###### capabilities.files

```ts
files: boolean;
```

###### capabilities.html

```ts
html: boolean;
```

###### capabilities.images

```ts
images: boolean;
```

###### capabilities.markdown

```ts
markdown: boolean;
```

###### capabilities.privateReplies

```ts
privateReplies: boolean;
```

###### capabilities.publicReplies

```ts
publicReplies: boolean;
```

###### capabilities.quickReplies

```ts
quickReplies: boolean;
```

###### capabilities.readReceipts

```ts
readReceipts: boolean;
```

###### capabilities.realtime

```ts
realtime: boolean;
```

###### capabilities.richText

```ts
richText: boolean;
```

###### capabilities.supportsHumanTransfer

```ts
supportsHumanTransfer: boolean;
```

###### capabilities.templates

```ts
templates: boolean;
```

###### capabilities.threaded

```ts
threaded: boolean;
```

###### capabilities.typingIndicator

```ts
typingIndicator: boolean;
```

###### capabilities.voice

```ts
voice: boolean;
```

###### capabilities.widgets

```ts
widgets: boolean;
```

###### channelId

```ts
channelId: string;
```

###### externalConversationId?

```ts
optional externalConversationId?: string;
```

###### externalMessageId?

```ts
optional externalMessageId?: string;
```

###### externalThreadId?

```ts
optional externalThreadId?: string;
```

###### externalUserId?

```ts
optional externalUserId?: string;
```

###### kind

```ts
kind: string;
```

###### locale?

```ts
optional locale?: string;
```

###### metadata?

```ts
optional metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
```

###### provider?

```ts
optional provider?: string;
```

###### timezone?

```ts
optional timezone?: string;
```

##### id

```ts
id: string;
```

##### metadata?

```ts
optional metadata?: HelpCenterProviderExtensionFields;
```

##### occurredAt

```ts
occurredAt: string;
```

##### sourceId

```ts
sourceId: string;
```

##### type

```ts
type: "channel.help-center.article.ingested";
```

***

### HelpCenterJsonObject

#### Extended by

- [`HelpCenterProviderExtensionFields`](#helpcenterproviderextensionfields)
- [`HelpCenterProviderResponse`](#helpcenterproviderresponse)

#### Indexable

```ts
[key: string]: HelpCenterProviderExtensionValue
```

***

### HelpCenterProviderExtensionFields

#### Extends

- [`HelpCenterJsonObject`](#helpcenterjsonobject)

#### Indexable

```ts
[key: string]: HelpCenterProviderExtensionValue
```

***

### HelpCenterProviderResponse

#### Extends

- [`HelpCenterJsonObject`](#helpcenterjsonobject)

#### Indexable

```ts
[key: string]: HelpCenterProviderExtensionValue
```

***

### HelpCenterSearchEvent

#### Properties

##### channel

```ts
channel: {
  capabilities: {
     async: boolean;
     attachments: boolean;
     audioInput: boolean;
     audioOutput: boolean;
     buttons: boolean;
     deliveryReceipts: boolean;
     files: boolean;
     html: boolean;
     images: boolean;
     markdown: boolean;
     privateReplies: boolean;
     publicReplies: boolean;
     quickReplies: boolean;
     readReceipts: boolean;
     realtime: boolean;
     richText: boolean;
     supportsHumanTransfer: boolean;
     templates: boolean;
     threaded: boolean;
     typingIndicator: boolean;
     voice: boolean;
     widgets: boolean;
  };
  channelId: string;
  externalConversationId?: string;
  externalMessageId?: string;
  externalThreadId?: string;
  externalUserId?: string;
  kind: string;
  locale?: string;
  metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
  provider?: string;
  timezone?: string;
};
```

###### capabilities

```ts
capabilities: {
  async: boolean;
  attachments: boolean;
  audioInput: boolean;
  audioOutput: boolean;
  buttons: boolean;
  deliveryReceipts: boolean;
  files: boolean;
  html: boolean;
  images: boolean;
  markdown: boolean;
  privateReplies: boolean;
  publicReplies: boolean;
  quickReplies: boolean;
  readReceipts: boolean;
  realtime: boolean;
  richText: boolean;
  supportsHumanTransfer: boolean;
  templates: boolean;
  threaded: boolean;
  typingIndicator: boolean;
  voice: boolean;
  widgets: boolean;
};
```

###### capabilities.async

```ts
async: boolean;
```

###### capabilities.attachments

```ts
attachments: boolean;
```

###### capabilities.audioInput

```ts
audioInput: boolean;
```

###### capabilities.audioOutput

```ts
audioOutput: boolean;
```

###### capabilities.buttons

```ts
buttons: boolean;
```

###### capabilities.deliveryReceipts

```ts
deliveryReceipts: boolean;
```

###### capabilities.files

```ts
files: boolean;
```

###### capabilities.html

```ts
html: boolean;
```

###### capabilities.images

```ts
images: boolean;
```

###### capabilities.markdown

```ts
markdown: boolean;
```

###### capabilities.privateReplies

```ts
privateReplies: boolean;
```

###### capabilities.publicReplies

```ts
publicReplies: boolean;
```

###### capabilities.quickReplies

```ts
quickReplies: boolean;
```

###### capabilities.readReceipts

```ts
readReceipts: boolean;
```

###### capabilities.realtime

```ts
realtime: boolean;
```

###### capabilities.richText

```ts
richText: boolean;
```

###### capabilities.supportsHumanTransfer

```ts
supportsHumanTransfer: boolean;
```

###### capabilities.templates

```ts
templates: boolean;
```

###### capabilities.threaded

```ts
threaded: boolean;
```

###### capabilities.typingIndicator

```ts
typingIndicator: boolean;
```

###### capabilities.voice

```ts
voice: boolean;
```

###### capabilities.widgets

```ts
widgets: boolean;
```

###### channelId

```ts
channelId: string;
```

###### externalConversationId?

```ts
optional externalConversationId?: string;
```

###### externalMessageId?

```ts
optional externalMessageId?: string;
```

###### externalThreadId?

```ts
optional externalThreadId?: string;
```

###### externalUserId?

```ts
optional externalUserId?: string;
```

###### kind

```ts
kind: string;
```

###### locale?

```ts
optional locale?: string;
```

###### metadata?

```ts
optional metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
```

###### provider?

```ts
optional provider?: string;
```

###### timezone?

```ts
optional timezone?: string;
```

##### id

```ts
id: string;
```

##### metadata?

```ts
optional metadata?: HelpCenterProviderExtensionFields;
```

##### occurredAt

```ts
occurredAt: string;
```

##### query

```ts
query: HelpCenterSearchInput;
```

##### resultCount

```ts
resultCount: number;
```

##### sourceId

```ts
sourceId: string;
```

##### type

```ts
type: "channel.help-center.search.performed";
```

***

### HelpCenterSearchInput

#### Properties

##### cursor?

```ts
optional cursor?: string;
```

##### limit?

```ts
optional limit?: number;
```

##### locale?

```ts
optional locale?: string;
```

##### query

```ts
query: string;
```

***

### HelpCenterSearchResult

#### Properties

##### articles

```ts
articles: HelpCenterArticle[];
```

##### cursor?

```ts
optional cursor?: string;
```

##### metadata?

```ts
optional metadata?: HelpCenterProviderExtensionFields;
```

***

### HelpCenterWebhookPayload

#### Properties

##### article?

```ts
optional article?: HelpCenterArticle;
```

##### event

```ts
event: string;
```

##### metadata?

```ts
optional metadata?: HelpCenterProviderExtensionFields;
```

##### sourceId?

```ts
optional sourceId?: string;
```

***

### HttpHelpCenterSource

#### Properties

##### baseUrl

```ts
baseUrl: string;
```

##### endpoints?

```ts
optional endpoints?: {
  article?: string;
  readiness?: string;
  search?: string;
};
```

###### article?

```ts
optional article?: string;
```

###### readiness?

```ts
optional readiness?: string;
```

###### search?

```ts
optional search?: string;
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

##### headers?

```ts
optional headers?: Record<string, string>;
```

##### id

```ts
id: string;
```

##### type

```ts
type: "http";
```

***

### LocalHelpCenterSource

#### Properties

##### articles

```ts
articles: HelpCenterArticle[];
```

##### id

```ts
id: string;
```

##### type

```ts
type: "local";
```

***

### ParseHelpCenterWebhookOptions

#### Properties

##### rawBody?

```ts
optional rawBody?: string;
```

##### requireSignature?

```ts
optional requireSignature?: boolean;
```

##### secret?

```ts
optional secret?: string;
```

##### signatureHeader?

```ts
optional signatureHeader?: string;
```

## Type Aliases

### HelpCenterJsonPrimitive

```ts
type HelpCenterJsonPrimitive = string | number | boolean | null;
```

***

### HelpCenterJsonValue

```ts
type HelpCenterJsonValue =
  | HelpCenterJsonPrimitive
  | HelpCenterJsonObject
  | readonly HelpCenterJsonValue[];
```

***

### HelpCenterProviderExtensionValue

```ts
type HelpCenterProviderExtensionValue = HelpCenterJsonValue | object | undefined;
```

***

### HelpCenterProviderPayload

```ts
type HelpCenterProviderPayload = HelpCenterJsonObject | object;
```

***

### HelpCenterProviderQuery

```ts
type HelpCenterProviderQuery = Record<string, HelpCenterProviderExtensionValue>;
```

***

### HelpCenterSource

```ts
type HelpCenterSource =
  | LocalHelpCenterSource
  | HttpHelpCenterSource;
```

## Functions

### createHelpCenterClient()

```ts
function createHelpCenterClient(sourceInput): HelpCenterClient;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `sourceInput` | [`HelpCenterSource`](#helpcentersource) |

#### Returns

[`HelpCenterClient`](#helpcenterclient)

***

### defineHelpCenterSource()

```ts
function defineHelpCenterSource(source): HelpCenterSource;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `source` | [`HelpCenterSource`](#helpcentersource) |

#### Returns

[`HelpCenterSource`](#helpcentersource)

***

### helpCenterCredentialStatuses()

```ts
function helpCenterCredentialStatuses(input): {
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
| `input` | [`HelpCenterCredentialStatusInput`](#helpcentercredentialstatusinput) |

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

### normalizeHelpCenterIngestionEvent()

```ts
function normalizeHelpCenterIngestionEvent(input): HelpCenterIngestionEvent;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | \{ `article`: [`HelpCenterArticle`](#helpcenterarticle); `metadata?`: [`HelpCenterProviderExtensionFields`](#helpcenterproviderextensionfields); `occurredAt?`: `string`; `sourceId`: `string`; \} |
| `input.article` | [`HelpCenterArticle`](#helpcenterarticle) |
| `input.metadata?` | [`HelpCenterProviderExtensionFields`](#helpcenterproviderextensionfields) |
| `input.occurredAt?` | `string` |
| `input.sourceId` | `string` |

#### Returns

[`HelpCenterIngestionEvent`](#helpcenteringestionevent)

***

### normalizeHelpCenterSearchEvent()

```ts
function normalizeHelpCenterSearchEvent(input): HelpCenterSearchEvent;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | \{ `metadata?`: [`HelpCenterProviderExtensionFields`](#helpcenterproviderextensionfields); `occurredAt?`: `string`; `query`: [`HelpCenterSearchInput`](#helpcentersearchinput); `result`: [`HelpCenterSearchResult`](#helpcentersearchresult); `sourceId`: `string`; \} |
| `input.metadata?` | [`HelpCenterProviderExtensionFields`](#helpcenterproviderextensionfields) |
| `input.occurredAt?` | `string` |
| `input.query` | [`HelpCenterSearchInput`](#helpcentersearchinput) |
| `input.result` | [`HelpCenterSearchResult`](#helpcentersearchresult) |
| `input.sourceId` | `string` |

#### Returns

[`HelpCenterSearchEvent`](#helpcentersearchevent)

***

### parseHelpCenterWebhook()

```ts
function parseHelpCenterWebhook(request, options?): Promise<HelpCenterWebhookPayload>;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `request` | `Request` |
| `options?` | [`ParseHelpCenterWebhookOptions`](#parsehelpcenterwebhookoptions) |

#### Returns

`Promise`\<[`HelpCenterWebhookPayload`](#helpcenterwebhookpayload)\>

***

### validateHelpCenterWebhookSignature()

```ts
function validateHelpCenterWebhookSignature(input): boolean;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | \{ `rawBody`: `string`; `secret`: `string`; `signature`: `string`; \} |
| `input.rawBody` | `string` |
| `input.secret` | `string` |
| `input.signature` | `string` |

#### Returns

`boolean`
