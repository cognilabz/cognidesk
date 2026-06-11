# react/dist

## Interfaces

### ChatActivity

#### Properties

##### id

```ts
id: string;
```

##### label

```ts
label: string;
```

##### status

```ts
status: "running" | "done";
```

***

### ChatEventReducerState

#### Properties

##### activities

```ts
activities: ChatActivity[];
```

##### lastOffset

```ts
lastOffset: number;
```

##### messages

```ts
messages: ChatMessage[];
```

##### pendingMessageRole?

```ts
optional pendingMessageRole?: "user" | "assistant";
```

##### prompts

```ts
prompts: PromptState[];
```

***

### ChatMessage

#### Properties

##### id

```ts
id: string;
```

##### offset?

```ts
optional offset?: number;
```

##### role

```ts
role: "user" | "assistant";
```

##### segments?

```ts
optional segments?: MessageSegment[];
```

##### status

```ts
status: "failed" | "sending" | "streaming" | "sent" | "aborted";
```

##### text

```ts
text: string;
```

***

### ChatWidgetProps

#### Properties

##### agentId?

```ts
optional agentId?: string;
```

##### appearance?

```ts
optional appearance?: AppearanceConfiguration;
```

##### client

```ts
client: CognideskClient;
```

##### conversationId?

```ts
optional conversationId?: string;
```

##### initialContext?

```ts
optional initialContext?: unknown;
```

##### placeholder?

```ts
optional placeholder?: string;
```

##### sendLabel?

```ts
optional sendLabel?: string;
```

##### title?

```ts
optional title?: ReactNode;
```

##### widgets?

```ts
optional widgets?: WidgetRendererMap;
```

#### Methods

##### onConversationCreated()?

```ts
optional onConversationCreated(conversationId): void;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `conversationId` | `string` |

###### Returns

`void`

##### onWidgetSubmit()?

```ts
optional onWidgetSubmit(args): void;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | \{ `kind`: `string`; `output`: `unknown`; `promptId`: `string`; \} |
| `args.kind` | `string` |
| `args.output` | `unknown` |
| `args.promptId` | `string` |

###### Returns

`void`

***

### CognideskClient

#### Methods

##### closeConversation()

```ts
closeConversation(conversationId, input?): Promise<{
  conversation: {
     agentId: string;
     context: unknown;
     createdAt: string;
     id: string;
     lifecycle: string;
     updatedAt: string;
  };
}>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `conversationId` | `string` |
| `input?` | \{ `reason?`: `string`; \} |
| `input.reason?` | `string` |

###### Returns

`Promise`\<\{
  `conversation`: \{
     `agentId`: `string`;
     `context`: `unknown`;
     `createdAt`: `string`;
     `id`: `string`;
     `lifecycle`: `string`;
     `updatedAt`: `string`;
  \};
\}\>

##### compactConversation()

```ts
compactConversation(conversationId, input?): Promise<{
  events: RuntimeEvent[];
  snapshot: {
     activeJourneyId?: string;
     activeStateIds: string[];
     compactionSummary?: unknown;
     conversationId: string;
     definitionHash?: string;
     journeyContext?: unknown;
     lifecycle: string;
     updatedAt: string;
  };
  summary: unknown;
}>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `conversationId` | `string` |
| `input?` | \{ `fromOffset?`: `number`; `schemaVersion?`: `string`; `toOffset?`: `number`; \} |
| `input.fromOffset?` | `number` |
| `input.schemaVersion?` | `string` |
| `input.toOffset?` | `number` |

###### Returns

`Promise`\<\{
  `events`: [`RuntimeEvent`](../core/dist.md#runtimeevent)[];
  `snapshot`: \{
     `activeJourneyId?`: `string`;
     `activeStateIds`: `string`[];
     `compactionSummary?`: `unknown`;
     `conversationId`: `string`;
     `definitionHash?`: `string`;
     `journeyContext?`: `unknown`;
     `lifecycle`: `string`;
     `updatedAt`: `string`;
  \};
  `summary`: `unknown`;
\}\>

##### createConversation()

```ts
createConversation(input?): Promise<CreateConversationResult>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input?` | \{ `agentId?`: `string`; `context?`: `unknown`; `id?`: `string`; \} |
| `input.agentId?` | `string` |
| `input.context?` | `unknown` |
| `input.id?` | `string` |

###### Returns

`Promise`\<[`CreateConversationResult`](#createconversationresult)\>

##### emitCustomEvent()

```ts
emitCustomEvent(
   conversationId, 
   eventName, 
   input?): Promise<{
  event: RuntimeEvent;
}>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `conversationId` | `string` |
| `eventName` | `string` |
| `input?` | \{ `payload?`: `unknown`; \} |
| `input.payload?` | `unknown` |

###### Returns

`Promise`\<\{
  `event`: [`RuntimeEvent`](../core/dist.md#runtimeevent);
\}\>

##### emitGeneratedPreamble()

```ts
emitGeneratedPreamble(conversationId, input?): Promise<{
  events: RuntimeEvent[];
  text: string;
}>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `conversationId` | `string` |
| `input?` | \{ `maxWords?`: `number`; `purpose?`: `string`; \} |
| `input.maxWords?` | `number` |
| `input.purpose?` | `string` |

###### Returns

`Promise`\<\{
  `events`: [`RuntimeEvent`](../core/dist.md#runtimeevent)[];
  `text`: `string`;
\}\>

##### emitIntermediateMessage()

```ts
emitIntermediateMessage(conversationId, input): Promise<{
  events: RuntimeEvent[];
}>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `conversationId` | `string` |
| `input` | \{ `text`: `string`; `visibleToModel?`: `boolean`; \} |
| `input.text` | `string` |
| `input.visibleToModel?` | `boolean` |

###### Returns

`Promise`\<\{
  `events`: [`RuntimeEvent`](../core/dist.md#runtimeevent)[];
\}\>

##### emitJourneyEvent()

```ts
emitJourneyEvent(
   conversationId, 
   eventName, 
   input?): Promise<{
  event: RuntimeEvent;
  events: RuntimeEvent[];
  snapshot: {
     activeJourneyId?: string;
     activeStateIds: string[];
     compactionSummary?: unknown;
     conversationId: string;
     definitionHash?: string;
     journeyContext?: unknown;
     lifecycle: string;
     updatedAt: string;
  };
}>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `conversationId` | `string` |
| `eventName` | `string` |
| `input?` | \{ `app?`: `unknown`; `payload?`: `unknown`; `routing?`: `"none"` \| `"activeJourneyOnly"` \| `"full"` \| `"targeted"`; `target?`: \{ `journeyId?`: `string`; `stateId?`: `string`; \}; \} |
| `input.app?` | `unknown` |
| `input.payload?` | `unknown` |
| `input.routing?` | `"none"` \| `"activeJourneyOnly"` \| `"full"` \| `"targeted"` |
| `input.target?` | \{ `journeyId?`: `string`; `stateId?`: `string`; \} |
| `input.target.journeyId?` | `string` |
| `input.target.stateId?` | `string` |

###### Returns

`Promise`\<\{
  `event`: [`RuntimeEvent`](../core/dist.md#runtimeevent);
  `events`: [`RuntimeEvent`](../core/dist.md#runtimeevent)[];
  `snapshot`: \{
     `activeJourneyId?`: `string`;
     `activeStateIds`: `string`[];
     `compactionSummary?`: `unknown`;
     `conversationId`: `string`;
     `definitionHash?`: `string`;
     `journeyContext?`: `unknown`;
     `lifecycle`: `string`;
     `updatedAt`: `string`;
  \};
\}\>

##### getSnapshot()

```ts
getSnapshot(conversationId): Promise<RuntimeSnapshotResult>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `conversationId` | `string` |

###### Returns

`Promise`\<[`RuntimeSnapshotResult`](#runtimesnapshotresult)\>

##### listEvents()

```ts
listEvents(conversationId, options?): Promise<{
  events: RuntimeEvent[];
}>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `conversationId` | `string` |
| `options?` | \{ `afterOffset?`: `number`; \} |
| `options.afterOffset?` | `number` |

###### Returns

`Promise`\<\{
  `events`: [`RuntimeEvent`](../core/dist.md#runtimeevent)[];
\}\>

##### replayConversation()

```ts
replayConversation(conversationId, options?): Promise<ReplayConversationResult>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `conversationId` | `string` |
| `options?` | \{ `afterOffset?`: `number`; \} |
| `options.afterOffset?` | `number` |

###### Returns

`Promise`\<[`ReplayConversationResult`](#replayconversationresult)\>

##### requestHandoff()

```ts
requestHandoff(conversationId, input): Promise<{
  conversation: {
     agentId: string;
     context: unknown;
     createdAt: string;
     id: string;
     lifecycle: string;
     updatedAt: string;
  };
  event: RuntimeEvent;
}>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `conversationId` | `string` |
| `input` | \{ `payload?`: `unknown`; `reason`: `string`; `summary?`: `string`; \} |
| `input.payload?` | `unknown` |
| `input.reason` | `string` |
| `input.summary?` | `string` |

###### Returns

`Promise`\<\{
  `conversation`: \{
     `agentId`: `string`;
     `context`: `unknown`;
     `createdAt`: `string`;
     `id`: `string`;
     `lifecycle`: `string`;
     `updatedAt`: `string`;
  \};
  `event`: [`RuntimeEvent`](../core/dist.md#runtimeevent);
\}\>

##### resumeConversation()

```ts
resumeConversation(conversationId, input?): Promise<{
  conversation: {
     agentId: string;
     context: unknown;
     createdAt: string;
     id: string;
     lifecycle: string;
     updatedAt: string;
  };
  event: RuntimeEvent;
}>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `conversationId` | `string` |
| `input?` | \{ `payload?`: `unknown`; `reason?`: `string`; \} |
| `input.payload?` | `unknown` |
| `input.reason?` | `string` |

###### Returns

`Promise`\<\{
  `conversation`: \{
     `agentId`: `string`;
     `context`: `unknown`;
     `createdAt`: `string`;
     `id`: `string`;
     `lifecycle`: `string`;
     `updatedAt`: `string`;
  \};
  `event`: [`RuntimeEvent`](../core/dist.md#runtimeevent);
\}\>

##### sendMessage()

```ts
sendMessage(
   conversationId, 
   message, 
options?): Promise<SendMessageResult>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `conversationId` | `string` |
| `message` | `string` |
| `options?` | \{ `app?`: `unknown`; `turn?`: `unknown`; \} |
| `options.app?` | `unknown` |
| `options.turn?` | `unknown` |

###### Returns

`Promise`\<[`SendMessageResult`](#sendmessageresult)\>

##### startVoiceConversation()

```ts
startVoiceConversation(input): Promise<StartVoiceResult>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | \{ `agentId?`: `string`; `app?`: `unknown`; `client?`: `VoiceStartClientHints`; `context?`: `unknown`; `id?`: `string`; \} |
| `input.agentId?` | `string` |
| `input.app?` | `unknown` |
| `input.client?` | `VoiceStartClientHints` |
| `input.context?` | `unknown` |
| `input.id?` | `string` |

###### Returns

`Promise`\<[`StartVoiceResult`](#startvoiceresult)\>

##### startVoiceSegment()

```ts
startVoiceSegment(conversationId, input?): Promise<StartVoiceResult>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `conversationId` | `string` |
| `input?` | \{ `app?`: `unknown`; `client?`: `VoiceStartClientHints`; \} |
| `input.app?` | `unknown` |
| `input.client?` | `VoiceStartClientHints` |

###### Returns

`Promise`\<[`StartVoiceResult`](#startvoiceresult)\>

##### streamEvents()

```ts
streamEvents(
   conversationId, 
   handlers, 
   options?): () => void;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `conversationId` | `string` |
| `handlers` | \{ `onError?`: `void`; `onEvent`: `void`; \} |
| `handlers.onError?` |
| `handlers.onEvent?` |
| `options?` | \{ `afterOffset?`: `number`; \} |
| `options.afterOffset?` | `number` |

###### Returns

() => `void`

##### submitWidget()

```ts
submitWidget(conversationId, input): Promise<{
  event: RuntimeEvent;
}>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `conversationId` | `string` |
| `input` | \{ `output`: `unknown`; `promptId`: `string`; `widgetKind`: `string`; \} |
| `input.output` | `unknown` |
| `input.promptId` | `string` |
| `input.widgetKind` | `string` |

###### Returns

`Promise`\<\{
  `event`: [`RuntimeEvent`](../core/dist.md#runtimeevent);
\}\>

***

### CognideskClientOptions

#### Properties

##### baseUrl

```ts
baseUrl: string;
```

##### EventSource?

```ts
optional EventSource?: (url, eventSourceInitDict?) => EventSource;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `url` | `string` \| `URL` |
| `eventSourceInitDict?` | `EventSourceInit` |

###### Returns

`EventSource`

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
| `input` | `RequestInfo` \| `URL` |
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

***

### CreateConversationResult

#### Properties

##### conversation

```ts
conversation: {
  agentId: string;
  context: unknown;
  createdAt: string;
  id: string;
  lifecycle: string;
  updatedAt: string;
};
```

###### agentId

```ts
agentId: string;
```

###### context

```ts
context: unknown;
```

###### createdAt

```ts
createdAt: string;
```

###### id

```ts
id: string;
```

###### lifecycle

```ts
lifecycle: string;
```

###### updatedAt

```ts
updatedAt: string;
```

***

### PromptState

#### Properties

##### displayOffset?

```ts
optional displayOffset?: number;
```

##### input

```ts
input: unknown;
```

##### kind

```ts
kind: string;
```

##### offset

```ts
offset: number;
```

##### output?

```ts
optional output?: unknown;
```

##### promptId

```ts
promptId: string;
```

##### status

```ts
status: "open" | "submitted";
```

***

### ReplayConversationResult

#### Properties

##### conversation

```ts
conversation: {
  agentId: string;
  context: unknown;
  createdAt: string;
  id: string;
  lifecycle: string;
  updatedAt: string;
};
```

###### agentId

```ts
agentId: string;
```

###### context

```ts
context: unknown;
```

###### createdAt

```ts
createdAt: string;
```

###### id

```ts
id: string;
```

###### lifecycle

```ts
lifecycle: string;
```

###### updatedAt

```ts
updatedAt: string;
```

##### events

```ts
events: RuntimeEvent[];
```

##### messages

```ts
messages: {
  aborted: boolean;
  id: string;
  intermediate: boolean;
  offset: number;
  reason?: string;
  role: "user" | "assistant";
  segments?: MessageSegment[];
  text: string;
}[];
```

###### aborted

```ts
aborted: boolean;
```

###### id

```ts
id: string;
```

###### intermediate

```ts
intermediate: boolean;
```

###### offset

```ts
offset: number;
```

###### reason?

```ts
optional reason?: string;
```

###### role

```ts
role: "user" | "assistant";
```

###### segments?

```ts
optional segments?: MessageSegment[];
```

###### text

```ts
text: string;
```

##### openPrompts

```ts
openPrompts: {
  input: unknown;
  offset: number;
  promptId: string;
  widgetKind: string;
}[];
```

###### input

```ts
input: unknown;
```

###### offset

```ts
offset: number;
```

###### promptId

```ts
promptId: string;
```

###### widgetKind

```ts
widgetKind: string;
```

##### snapshot

```ts
snapshot: {
  activeJourneyId?: string;
  activeStateIds: string[];
  compactionSummary?: unknown;
  conversationId: string;
  definitionHash?: string;
  journeyContext?: unknown;
  lifecycle: string;
  updatedAt: string;
};
```

###### activeJourneyId?

```ts
optional activeJourneyId?: string;
```

###### activeStateIds

```ts
activeStateIds: string[];
```

###### compactionSummary?

```ts
optional compactionSummary?: unknown;
```

###### conversationId

```ts
conversationId: string;
```

###### definitionHash?

```ts
optional definitionHash?: string;
```

###### journeyContext?

```ts
optional journeyContext?: unknown;
```

###### lifecycle

```ts
lifecycle: string;
```

###### updatedAt

```ts
updatedAt: string;
```

***

### RuntimeSnapshotResult

#### Properties

##### snapshot

```ts
snapshot: {
  activeJourneyId?: string;
  activeStateIds: string[];
  compactionSummary?: unknown;
  conversationId: string;
  definitionHash?: string;
  journeyContext?: unknown;
  lifecycle: string;
  updatedAt: string;
};
```

###### activeJourneyId?

```ts
optional activeJourneyId?: string;
```

###### activeStateIds

```ts
activeStateIds: string[];
```

###### compactionSummary?

```ts
optional compactionSummary?: unknown;
```

###### conversationId

```ts
conversationId: string;
```

###### definitionHash?

```ts
optional definitionHash?: string;
```

###### journeyContext?

```ts
optional journeyContext?: unknown;
```

###### lifecycle

```ts
lifecycle: string;
```

###### updatedAt

```ts
updatedAt: string;
```

***

### SendMessageResult

#### Properties

##### activeJourneyId?

```ts
optional activeJourneyId?: string;
```

##### events

```ts
events: RuntimeEvent[];
```

##### text

```ts
text: string;
```

***

### StartVoiceResult

#### Properties

##### channelSegment

```ts
channelSegment: {
  channel: "voice";
  conversationId: string;
  endedAt?: string;
  id: string;
  startedAt: string;
};
```

###### channel

```ts
channel: "voice";
```

###### conversationId

```ts
conversationId: string;
```

###### endedAt?

```ts
optional endedAt?: string;
```

###### id

```ts
id: string;
```

###### startedAt

```ts
startedAt: string;
```

##### connection

```ts
connection: {
  adapter: string;
  channelSegmentId: string;
  expiresAt?: string;
  id: string;
  provider?: string;
  providerSessionId?: string;
  status: string;
};
```

###### adapter

```ts
adapter: string;
```

###### channelSegmentId

```ts
channelSegmentId: string;
```

###### expiresAt?

```ts
optional expiresAt?: string;
```

###### id

```ts
id: string;
```

###### provider?

```ts
optional provider?: string;
```

###### providerSessionId?

```ts
optional providerSessionId?: string;
```

###### status

```ts
status: string;
```

##### conversation

```ts
conversation: {
  agentId: string;
  context: unknown;
  createdAt: string;
  id: string;
  lifecycle: string;
  updatedAt: string;
};
```

###### agentId

```ts
agentId: string;
```

###### context

```ts
context: unknown;
```

###### createdAt

```ts
createdAt: string;
```

###### id

```ts
id: string;
```

###### lifecycle

```ts
lifecycle: string;
```

###### updatedAt

```ts
updatedAt: string;
```

##### events

```ts
events: RuntimeEvent[];
```

##### eventsUrl?

```ts
optional eventsUrl?: string;
```

##### socket

```ts
socket: {
  expiresAt: string;
  protocol: "cognidesk.voice.v1";
  token: string;
  url: string;
};
```

###### expiresAt

```ts
expiresAt: string;
```

###### protocol

```ts
protocol: "cognidesk.voice.v1";
```

###### token

```ts
token: string;
```

###### url

```ts
url: string;
```

***

### SupportSourceLink

#### Properties

##### id

```ts
id: string;
```

##### label

```ts
label: string;
```

##### url?

```ts
optional url?: string;
```

***

### UseChatOptions

#### Properties

##### agentId?

```ts
optional agentId?: string;
```

##### client

```ts
client: CognideskClient;
```

##### conversationId?

```ts
optional conversationId?: string;
```

##### initialContext?

```ts
optional initialContext?: unknown;
```

#### Methods

##### onConversationCreated()?

```ts
optional onConversationCreated(conversationId): void;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `conversationId` | `string` |

###### Returns

`void`

***

### UseVoiceOptions

#### Properties

##### agentId?

```ts
optional agentId?: string;
```

##### app?

```ts
optional app?: unknown;
```

##### audioContext?

```ts
optional audioContext?: AudioContext;
```

##### client

```ts
client: CognideskClient;
```

##### conversationId?

```ts
optional conversationId?: string;
```

##### initialContext?

```ts
optional initialContext?: unknown;
```

##### mediaConstraints?

```ts
optional mediaConstraints?: MediaStreamConstraints;
```

##### WebSocket?

```ts
optional WebSocket?: (url, protocols?) => WebSocket;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `url` | `string` \| `URL` |
| `protocols?` | `string` \| `string`[] |

###### Returns

`WebSocket`

#### Methods

##### onConnected()?

```ts
optional onConnected(result): void;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `result` | [`StartVoiceResult`](#startvoiceresult) |

###### Returns

`void`

##### onConversationCreated()?

```ts
optional onConversationCreated(conversationId): void;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `conversationId` | `string` |

###### Returns

`void`

##### onEnded()?

```ts
optional onEnded(): void;
```

###### Returns

`void`

##### onError()?

```ts
optional onError(error): void;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `error` | `Error` |

###### Returns

`void`

##### onEvent()?

```ts
optional onEvent(event): void;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | [`VoiceProtocolServerEvent`](#voiceprotocolserverevent) |

###### Returns

`void`

***

### UseVoiceResult

#### Properties

##### channelSegmentId

```ts
channelSegmentId: string;
```

##### connectionId

```ts
connectionId: string;
```

##### conversationId

```ts
conversationId: string;
```

##### error

```ts
error: Error;
```

##### localStream

```ts
localStream: MediaStream;
```

##### muted

```ts
muted: boolean;
```

##### status

```ts
status: VoiceConnectionStatus;
```

#### Methods

##### sendEvent()

```ts
sendEvent(event): void;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | [`VoiceProtocolClientEvent`](#voiceprotocolclientevent) |

###### Returns

`void`

##### setMuted()

```ts
setMuted(muted): void;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `muted` | `boolean` |

###### Returns

`void`

##### start()

```ts
start(): Promise<StartVoiceResult>;
```

###### Returns

`Promise`\<[`StartVoiceResult`](#startvoiceresult)\>

##### stop()

```ts
stop(): void;
```

###### Returns

`void`

***

### VoiceProtocolClient

#### Properties

##### socket

```ts
readonly socket: WebSocket;
```

#### Methods

##### close()

```ts
close(code?, reason?): void;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `code?` | `number` |
| `reason?` | `string` |

###### Returns

`void`

##### sendEvent()

```ts
sendEvent(event): void;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | [`VoiceProtocolClientEvent`](#voiceprotocolclientevent) |

###### Returns

`void`

***

### VoiceProtocolClientOptions

#### Properties

##### protocols?

```ts
optional protocols?: string | string[];
```

##### url

```ts
url: string;
```

##### WebSocket?

```ts
optional WebSocket?: (url, protocols?) => WebSocket;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `url` | `string` \| `URL` |
| `protocols?` | `string` \| `string`[] |

###### Returns

`WebSocket`

#### Methods

##### onClose()?

```ts
optional onClose(event): void;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `CloseEvent` |

###### Returns

`void`

##### onError()?

```ts
optional onError(event): void;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `Event` |

###### Returns

`void`

##### onEvent()?

```ts
optional onEvent(event): void;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | [`VoiceProtocolServerEvent`](#voiceprotocolserverevent) |

###### Returns

`void`

##### onOpen()?

```ts
optional onOpen(): void;
```

###### Returns

`void`

***

### WidgetRendererProps

#### Properties

##### appearance?

```ts
optional appearance?: AppearanceConfiguration;
```

##### disabled?

```ts
optional disabled?: boolean;
```

##### input

```ts
input: unknown;
```

##### kind

```ts
kind: string;
```

##### output?

```ts
optional output?: unknown;
```

##### promptId

```ts
promptId: string;
```

##### submitted?

```ts
optional submitted?: boolean;
```

#### Methods

##### submit()

```ts
submit(output): void;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `output` | `unknown` |

###### Returns

`void`

## Type Aliases

### VoiceConnectionStatus

```ts
type VoiceConnectionStatus = 
  | "idle"
  | "requestingPermission"
  | "connecting"
  | "connected"
  | "ended"
  | "error";
```

***

### VoiceProtocolClientEvent

```ts
type VoiceProtocolClientEvent = 
  | {
  event_id?: string;
  session?: Record<string, unknown>;
  type: "session.update";
}
  | {
  audio: string;
  event_id?: string;
  sequence?: number;
  type: "input_audio_buffer.append";
}
  | {
  event_id?: string;
  type: "input_audio_buffer.commit";
}
  | {
  event_id?: string;
  type: "input_audio_buffer.clear";
}
  | {
  audioEndMs?: number;
  event_id?: string;
  interruptedMessageId?: string;
  playedUntilMs?: number;
  reason?: string;
  response_id?: string;
  type: "response.cancel";
}
  | {
  audio_end_ms?: number;
  content_index?: number;
  event_id?: string;
  item_id?: string;
  type: "conversation.item.truncate";
};
```

***

### VoiceProtocolServerEvent

```ts
type VoiceProtocolServerEvent = {
[key: string]: unknown;
  event_id?: string;
  type: string;
};
```

#### Indexable

```ts
[key: string]: unknown
```

#### Properties

##### event\_id?

```ts
optional event_id?: string;
```

##### type

```ts
type: string;
```

***

### WidgetRenderer

```ts
type WidgetRenderer = (props) => ReactNode;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `props` | [`WidgetRendererProps`](#widgetrendererprops) |

#### Returns

`ReactNode`

***

### WidgetRendererMap

```ts
type WidgetRendererMap = Record<string, WidgetRenderer>;
```

## Variables

### defaultWidgetRenderers

```ts
const defaultWidgetRenderers: WidgetRendererMap;
```

## Functions

### ChatWidget()

```ts
function ChatWidget(props): Element;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `props` | [`ChatWidgetProps`](#chatwidgetprops) |

#### Returns

`Element`

***

### collectSupportSourceLinks()

```ts
function collectSupportSourceLinks(references): SupportSourceLink[];
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `references` | [`SupportReference`](../core/dist.md#supportreference)[] |

#### Returns

[`SupportSourceLink`](#supportsourcelink)[]

***

### createCognideskClient()

```ts
function createCognideskClient(options): CognideskClient;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`CognideskClientOptions`](#cognideskclientoptions) |

#### Returns

[`CognideskClient`](#cognideskclient)

***

### createVoiceProtocolClient()

```ts
function createVoiceProtocolClient(options): VoiceProtocolClient;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`VoiceProtocolClientOptions`](#voiceprotocolclientoptions) |

#### Returns

[`VoiceProtocolClient`](#voiceprotocolclient)

***

### formatSupportReferences()

```ts
function formatSupportReferences(references): string;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `references` | [`SupportReference`](../core/dist.md#supportreference)[] |

#### Returns

`string`

***

### reduceChatRuntimeEvent()

```ts
function reduceChatRuntimeEvent(state, event): ChatEventReducerState;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `state` | [`ChatEventReducerState`](#chateventreducerstate) |
| `event` | [`RuntimeEvent`](../core/dist.md#runtimeevent) |

#### Returns

[`ChatEventReducerState`](#chateventreducerstate)

***

### useChat()

```ts
function useChat(options): {
  activities: ChatActivity[];
  clearPrompt: (promptId) => void;
  conversationId: string;
  error: Error;
  messages: ChatMessage[];
  prompts: PromptState[];
  sendMessage: (text) => Promise<void>;
  status: "error" | "starting" | "sending" | "streaming" | "idle";
  submitWidget: (input) => Promise<{
     event: RuntimeEvent;
  }>;
};
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`UseChatOptions`](#usechatoptions) |

#### Returns

```ts
{
  activities: ChatActivity[];
  clearPrompt: (promptId) => void;
  conversationId: string;
  error: Error;
  messages: ChatMessage[];
  prompts: PromptState[];
  sendMessage: (text) => Promise<void>;
  status: "error" | "starting" | "sending" | "streaming" | "idle";
  submitWidget: (input) => Promise<{
     event: RuntimeEvent;
  }>;
}
```

| Name | Type |
| ------ | ------ |
| `activities` | [`ChatActivity`](#chatactivity)[] |
| `clearPrompt()` | (`promptId`) => `void` |
| `conversationId` | `string` |
| `error` | `Error` |
| `messages` | [`ChatMessage`](#chatmessage)[] |
| `prompts` | [`PromptState`](#promptstate)[] |
| `sendMessage()` | (`text`) => `Promise`\<`void`\> |
| `status` | `"error"` \| `"starting"` \| `"sending"` \| `"streaming"` \| `"idle"` |
| `submitWidget()` | (`input`) => `Promise`\<\{ `event`: [`RuntimeEvent`](../core/dist.md#runtimeevent); \}\> |

***

### useVoice()

```ts
function useVoice(options): UseVoiceResult;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`UseVoiceOptions`](#usevoiceoptions) |

#### Returns

[`UseVoiceResult`](#usevoiceresult)
