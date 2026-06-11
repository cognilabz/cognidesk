# voice-websocket/dist

## Interfaces

### AttachNodeVoiceWebSocketAdapterOptions

#### Properties

##### control?

```ts
optional control?: VoiceControlSurface;
```

##### initialGreeting?

```ts
optional initialGreeting?: string;
```

##### pathPrefix?

```ts
optional pathPrefix?: string;
```

##### profile?

```ts
optional profile?: VoiceProfile;
```

##### provider

```ts
provider: VoiceProvider;
```

##### reconnectGraceMs?

```ts
optional reconnectGraceMs?: number;
```

##### reconnectTokenTtlMs?

```ts
optional reconnectTokenTtlMs?: number;
```

##### recorder?

```ts
optional recorder?: VoiceRecorder;
```

##### runtime

```ts
runtime: VoiceRuntime;
```

##### server

```ts
server: Server;
```

##### store

```ts
store: VoiceSessionStore;
```

##### turnPreambleMs?

```ts
optional turnPreambleMs?: number;
```

***

### HandleVoiceSocketOptions

#### Properties

##### connectionId

```ts
connectionId: string;
```

##### control?

```ts
optional control?: VoiceControlSurface;
```

##### initialGreeting?

```ts
optional initialGreeting?: string;
```

##### inputTranscriptDebounceMs?

```ts
optional inputTranscriptDebounceMs?: number;
```

##### profile?

```ts
optional profile?: VoiceProfile;
```

##### provider

```ts
provider: VoiceProvider;
```

##### reconnectGraceMs?

```ts
optional reconnectGraceMs?: number;
```

##### reconnectTokenTtlMs?

```ts
optional reconnectTokenTtlMs?: number;
```

##### recorder?

```ts
optional recorder?: VoiceRecorder;
```

##### runtime

```ts
runtime: VoiceRuntime;
```

##### signal?

```ts
optional signal?: AbortSignal;
```

##### socket

```ts
socket: VoiceSocketLike;
```

##### store

```ts
store: VoiceSessionStore;
```

##### token

```ts
token: string;
```

##### turnPreambleMs?

```ts
optional turnPreambleMs?: number;
```

***

### InMemoryVoiceSessionStoreOptions

#### Properties

##### createToken?

```ts
optional createToken?: () => string;
```

###### Returns

`string`

***

### VoiceControlNotification

#### Properties

##### createResponse?

```ts
optional createResponse?: boolean;
```

##### events?

```ts
optional events?: RuntimeEvent[];
```

##### message

```ts
message: string;
```

##### responseInstructions?

```ts
optional responseInstructions?: string;
```

***

### VoiceControlSurface

#### Properties

##### instructions?

```ts
optional instructions?: string;
```

##### tools

```ts
tools: VoiceControlTool[];
```

#### Methods

##### createSessionInstructions()?

```ts
optional createSessionInstructions(input): string | Promise<string>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | \{ `session`: [`VoiceSocketSession`](#voicesocketsession); \} |
| `input.session` | [`VoiceSocketSession`](#voicesocketsession) |

###### Returns

`string` \| `Promise`\<`string`\>

##### handleToolCall()

```ts
handleToolCall(input): 
  | VoiceControlToolResult
| Promise<VoiceControlToolResult>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`VoiceControlToolCall`](#voicecontroltoolcall) |

###### Returns

  \| [`VoiceControlToolResult`](#voicecontroltoolresult)
  \| `Promise`\<[`VoiceControlToolResult`](#voicecontroltoolresult)\>

***

### VoiceControlTool

#### Properties

##### description?

```ts
optional description?: string;
```

##### name

```ts
name: string;
```

##### parameters?

```ts
optional parameters?: unknown;
```

***

### VoiceControlToolCall

#### Properties

##### arguments

```ts
arguments: unknown;
```

##### callId

```ts
callId: string;
```

##### itemId?

```ts
optional itemId?: string;
```

##### name

```ts
name: string;
```

##### responseId?

```ts
optional responseId?: string;
```

##### session

```ts
session: VoiceSocketSession;
```

##### signal

```ts
signal: AbortSignal;
```

#### Methods

##### notify()?

```ts
optional notify(notification): Promise<void>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `notification` | [`VoiceControlNotification`](#voicecontrolnotification) |

###### Returns

`Promise`\<`void`\>

***

### VoiceControlToolResult

#### Properties

##### events?

```ts
optional events?: RuntimeEvent[];
```

##### output

```ts
output: unknown;
```

***

### VoiceProvider

#### Properties

##### id

```ts
readonly id: string;
```

#### Methods

##### connect()

```ts
connect(input): Promise<VoiceProviderSession>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`VoiceProviderConnectInput`](#voiceproviderconnectinput) |

###### Returns

`Promise`\<[`VoiceProviderSession`](#voiceprovidersession)\>

***

### VoiceProviderConnectInput

#### Properties

##### control?

```ts
optional control?: VoiceControlSurface;
```

##### profile?

```ts
optional profile?: VoiceProfile;
```

##### session

```ts
session: VoiceSocketSession;
```

##### signal

```ts
signal: AbortSignal;
```

#### Methods

##### onEvent()

```ts
onEvent(event): void | Promise<void>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | [`VoiceProviderEvent`](#voiceproviderevent) |

###### Returns

`void` \| `Promise`\<`void`\>

***

### VoiceProviderSession

#### Methods

##### close()

```ts
close(): void | Promise<void>;
```

###### Returns

`void` \| `Promise`\<`void`\>

##### preamble()?

```ts
optional preamble(input): void | Promise<void>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | \{ `text`: `string`; \} |
| `input.text` | `string` |

###### Returns

`void` \| `Promise`\<`void`\>

##### send()

```ts
send(event): void | Promise<void>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | [`VoiceBrowserClientEvent`](#voicebrowserclientevent) |

###### Returns

`void` \| `Promise`\<`void`\>

##### speak()

```ts
speak(input): void | Promise<void>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | \{ `result?`: [`HandleVoiceUserMessageResult`](../core/dist.md#handlevoiceusermessageresult); `text`: `string`; \} |
| `input.result?` | [`HandleVoiceUserMessageResult`](../core/dist.md#handlevoiceusermessageresult) |
| `input.text` | `string` |

###### Returns

`void` \| `Promise`\<`void`\>

***

### VoiceRecorder

#### Methods

##### onAudio()?

```ts
optional onAudio(input): void | Promise<void>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | \{ `audio`: `string`; `sequence?`: `number`; `session`: [`VoiceSocketSession`](#voicesocketsession); `speaker`: `"user"` \| `"assistant"`; \} |
| `input.audio` | `string` |
| `input.sequence?` | `number` |
| `input.session` | [`VoiceSocketSession`](#voicesocketsession) |
| `input.speaker` | `"user"` \| `"assistant"` |

###### Returns

`void` \| `Promise`\<`void`\>

##### onTranscript()?

```ts
optional onTranscript(input): void | Promise<void>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | \{ `runtimeEvent?`: [`RuntimeEvent`](../core/dist.md#runtimeevent); `session`: [`VoiceSocketSession`](#voicesocketsession); `speaker`: `"user"` \| `"assistant"`; `text`: `string`; \} |
| `input.runtimeEvent?` | [`RuntimeEvent`](../core/dist.md#runtimeevent) |
| `input.session` | [`VoiceSocketSession`](#voicesocketsession) |
| `input.speaker` | `"user"` \| `"assistant"` |
| `input.text` | `string` |

###### Returns

`void` \| `Promise`\<`void`\>

***

### VoiceRuntime

#### Methods

##### commitVoiceTranscript()?

```ts
optional commitVoiceTranscript(input): Promise<{
  event: RuntimeEvent;
  events: RuntimeEvent[];
  message: RuntimeEvent;
}>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | \{ `channelSegmentId`: `string`; `conversationId`: `string`; `endedAtMs?`: `number`; `metadata?`: `Record`\<`string`, `unknown`\>; `recordingReferenceId?`: `string`; `speaker`: `"user"` \| `"assistant"`; `startedAtMs?`: `number`; `text`: `string`; `transcriptionSource?`: `string`; \} |
| `input.channelSegmentId` | `string` |
| `input.conversationId` | `string` |
| `input.endedAtMs?` | `number` |
| `input.metadata?` | `Record`\<`string`, `unknown`\> |
| `input.recordingReferenceId?` | `string` |
| `input.speaker` | `"user"` \| `"assistant"` |
| `input.startedAtMs?` | `number` |
| `input.text` | `string` |
| `input.transcriptionSource?` | `string` |

###### Returns

`Promise`\<\{
  `event`: [`RuntimeEvent`](../core/dist.md#runtimeevent);
  `events`: [`RuntimeEvent`](../core/dist.md#runtimeevent)[];
  `message`: [`RuntimeEvent`](../core/dist.md#runtimeevent);
\}\>

##### endVoiceSegment()

```ts
endVoiceSegment(input): Promise<RuntimeEvent>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | \{ `channelSegmentId`: `string`; `connectionId?`: `string`; `conversationId`: `string`; `reason?`: `string`; \} |
| `input.channelSegmentId` | `string` |
| `input.connectionId?` | `string` |
| `input.conversationId` | `string` |
| `input.reason?` | `string` |

###### Returns

`Promise`\<[`RuntimeEvent`](../core/dist.md#runtimeevent)\>

##### handleVoiceUserMessage()

```ts
handleVoiceUserMessage<TTurn>(input): Promise<HandleVoiceUserMessageResult>;
```

###### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TTurn` | `unknown` |

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`HandleVoiceUserMessageInput`](../core/dist.md#handlevoiceusermessageinput)\<`TTurn`\> |

###### Returns

`Promise`\<[`HandleVoiceUserMessageResult`](../core/dist.md#handlevoiceusermessageresult)\>

##### recordVoiceInterruption()

```ts
recordVoiceInterruption(input): Promise<RuntimeEvent>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | \{ `channelSegmentId`: `string`; `connectionId?`: `string`; `conversationId`: `string`; `interruptedMessageId?`: `string`; `offsetMs?`: `number`; `reason?`: `string`; `recordingReferenceId?`: `string`; `source?`: `"userSpeech"` \| `"adapter"` \| `"provider"`; \} |
| `input.channelSegmentId` | `string` |
| `input.connectionId?` | `string` |
| `input.conversationId` | `string` |
| `input.interruptedMessageId?` | `string` |
| `input.offsetMs?` | `number` |
| `input.reason?` | `string` |
| `input.recordingReferenceId?` | `string` |
| `input.source?` | `"userSpeech"` \| `"adapter"` \| `"provider"` |

###### Returns

`Promise`\<[`RuntimeEvent`](../core/dist.md#runtimeevent)\>

***

### VoiceSessionStore

#### Methods

##### acknowledgeAudio()

```ts
acknowledgeAudio(input): Promise<VoiceSocketSession>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | \{ `now?`: `Date`; `sequence`: `number`; `sessionId`: `string`; \} |
| `input.now?` | `Date` |
| `input.sequence` | `number` |
| `input.sessionId` | `string` |

###### Returns

`Promise`\<[`VoiceSocketSession`](#voicesocketsession)\>

##### claimToken()

```ts
claimToken(input): Promise<{
  reconnect: boolean;
  session: VoiceSocketSession;
  token: VoiceSocketToken;
}>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | \{ `connectionId`: `string`; `now?`: `Date`; `token`: `string`; \} |
| `input.connectionId` | `string` |
| `input.now?` | `Date` |
| `input.token` | `string` |

###### Returns

`Promise`\<\{
  `reconnect`: `boolean`;
  `session`: [`VoiceSocketSession`](#voicesocketsession);
  `token`: [`VoiceSocketToken`](#voicesockettoken);
\}\>

##### createSession()

```ts
createSession(input): Promise<{
  session: VoiceSocketSession;
  socket: VoiceSocketMetadata;
}>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | \{ `now?`: `Date`; `result`: [`StartVoiceResult`](../core/dist.md#startvoiceresult); `tokenTtlMs`: `number`; \} |
| `input.now?` | `Date` |
| `input.result` | [`StartVoiceResult`](../core/dist.md#startvoiceresult) |
| `input.tokenTtlMs` | `number` |

###### Returns

`Promise`\<\{
  `session`: [`VoiceSocketSession`](#voicesocketsession);
  `socket`: [`VoiceSocketMetadata`](../core/dist.md#voicesocketmetadata);
\}\>

##### getSession()

```ts
getSession(sessionId): Promise<VoiceSocketSession>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `sessionId` | `string` |

###### Returns

`Promise`\<[`VoiceSocketSession`](#voicesocketsession)\>

##### issueReconnectToken()

```ts
issueReconnectToken(input): Promise<VoiceSocketToken>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | \{ `now?`: `Date`; `sessionId`: `string`; `ttlMs`: `number`; \} |
| `input.now?` | `Date` |
| `input.sessionId` | `string` |
| `input.ttlMs` | `number` |

###### Returns

`Promise`\<[`VoiceSocketToken`](#voicesockettoken)\>

##### markConnected()

```ts
markConnected(sessionId, now?): Promise<VoiceSocketSession>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `sessionId` | `string` |
| `now?` | `Date` |

###### Returns

`Promise`\<[`VoiceSocketSession`](#voicesocketsession)\>

##### markEnded()

```ts
markEnded(sessionId, now?): Promise<VoiceSocketSession>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `sessionId` | `string` |
| `now?` | `Date` |

###### Returns

`Promise`\<[`VoiceSocketSession`](#voicesocketsession)\>

##### markReconnecting()

```ts
markReconnecting(
   sessionId, 
   now?, 
graceMs?): Promise<VoiceSocketSession>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `sessionId` | `string` |
| `now?` | `Date` |
| `graceMs?` | `number` |

###### Returns

`Promise`\<[`VoiceSocketSession`](#voicesocketsession)\>

***

### VoiceSocketHandshakeOptions

#### Properties

##### baseUrl?

```ts
optional baseUrl?: string;
```

##### pathPrefix?

```ts
optional pathPrefix?: string;
```

##### store

```ts
store: VoiceSessionStore;
```

##### tokenTtlMs?

```ts
optional tokenTtlMs?: number;
```

***

### VoiceSocketLike

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

##### on()

###### Call Signature

```ts
on(event, listener): void;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"message"` |
| `listener` | (`data`) => `void` |

###### Returns

`void`

###### Call Signature

```ts
on(event, listener): void;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"close"` |
| `listener` | (`code?`, `reason?`) => `void` |

###### Returns

`void`

###### Call Signature

```ts
on(event, listener): void;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"error"` |
| `listener` | (`error`) => `void` |

###### Returns

`void`

##### send()

```ts
send(data): void;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | `string` |

###### Returns

`void`

***

### VoiceSocketSession

#### Properties

##### channelSegment

```ts
channelSegment: VoiceChannelSegment;
```

##### connection

```ts
connection: VoiceConnection;
```

##### conversation

```ts
conversation: ConversationRecord<unknown>;
```

##### createdAt

```ts
createdAt: string;
```

##### events

```ts
events: RuntimeEvent[];
```

##### id

```ts
id: string;
```

##### lastAckSequence

```ts
lastAckSequence: number;
```

##### reconnectGraceUntil?

```ts
optional reconnectGraceUntil?: string;
```

##### status

```ts
status: "connected" | "ended" | "pending" | "reconnecting";
```

##### updatedAt

```ts
updatedAt: string;
```

***

### VoiceSocketToken

#### Properties

##### connectionId

```ts
connectionId: string;
```

##### consumedAt?

```ts
optional consumedAt?: string;
```

##### expiresAt

```ts
expiresAt: string;
```

##### purpose

```ts
purpose: "start" | "reconnect";
```

##### sessionId

```ts
sessionId: string;
```

##### token

```ts
token: string;
```

## Type Aliases

### VoiceBrowserClientEvent

```ts
type VoiceBrowserClientEvent = 
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

### VoiceBrowserServerEvent

```ts
type VoiceBrowserServerEvent = 
  | {
  channelSegment: StartVoiceResult["channelSegment"];
  connection: StartVoiceResult["connection"];
  conversation: StartVoiceResult["conversation"];
  event_id: string;
  lastAckSequence: number;
  protocol: VoiceProtocol;
  type: "cognidesk.connection.ready";
}
  | {
  event_id: string;
  expiresAt: string;
  token: string;
  type: "cognidesk.connection.reconnect_token";
}
  | {
  event_id: string;
  sequence: number;
  type: "cognidesk.audio.ack";
}
  | {
  event: RuntimeEvent;
  event_id: string;
  type: "cognidesk.runtime_event";
}
  | {
  activeJourneyId?: string;
  event_id: string;
  text: string;
  type: "cognidesk.turn.completed";
}
  | {
  event: RuntimeEvent;
  event_id: string;
  type: "cognidesk.interruption.recorded";
}
  | {
  elapsedMs: number;
  event_id: string;
  text: string;
  type: "cognidesk.voice.preamble";
}
  | {
  audio_start_ms?: number;
  event_id?: string;
  item_id?: string;
  type: "input_audio_buffer.speech_started";
}
  | {
  audio_end_ms?: number;
  event_id?: string;
  item_id?: string;
  type: "input_audio_buffer.speech_stopped";
}
  | {
  endedAtMs?: number;
  event_id: string;
  item_id?: string;
  metadata?: Record<string, unknown>;
  startedAtMs?: number;
  text: string;
  transcriptionSource?: string;
  type: "input_audio_transcription.completed";
}
  | {
  content_index?: number;
  delta: string;
  event_id?: string;
  item_id?: string;
  output_index?: number;
  response_id?: string;
  type: "response.output_audio.delta";
}
  | {
  content_index?: number;
  event_id?: string;
  item_id?: string;
  output_index?: number;
  response_id?: string;
  type: "response.output_audio.done";
}
  | {
  content_index?: number;
  delta: string;
  event_id?: string;
  item_id?: string;
  output_index?: number;
  response_id?: string;
  type: "response.output_audio_transcript.delta";
}
  | {
  content_index?: number;
  event_id?: string;
  item_id?: string;
  output_index?: number;
  response_id?: string;
  transcript: string;
  type: "response.output_audio_transcript.done";
}
  | {
  event_id?: string;
  response?: unknown;
  type: "response.done";
}
  | {
  error: {
     code: string;
     details?: unknown;
     message: string;
     retryable?: boolean;
  };
  event_id?: string;
  type: "error";
};
```

***

### VoiceProtocol

```ts
type VoiceProtocol = typeof COGNIDESK_VOICE_PROTOCOL;
```

***

### VoiceProviderEvent

```ts
type VoiceProviderEvent = 
  | {
  endedAtMs?: number;
  itemId?: string;
  kind: "input_transcript.completed";
  metadata?: Record<string, unknown>;
  startedAtMs?: number;
  text: string;
  transcriptionSource?: string;
}
  | {
  event: VoiceBrowserServerEvent;
  kind: "server_event";
}
  | {
  events: RuntimeEvent[];
  kind: "runtime_events";
}
  | {
  code?: string;
  details?: unknown;
  kind: "error";
  message: string;
  retryable?: boolean;
};
```

## Variables

### COGNIDESK\_VOICE\_PROTOCOL

```ts
const COGNIDESK_VOICE_PROTOCOL: "cognidesk.voice.v1";
```

## Functions

### attachNodeVoiceWebSocketAdapter()

```ts
function attachNodeVoiceWebSocketAdapter(options): {
  webSocketServer: Server<typeof WebSocket, typeof IncomingMessage>;
  close: void;
};
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`AttachNodeVoiceWebSocketAdapterOptions`](#attachnodevoicewebsocketadapteroptions) |

#### Returns

```ts
{
  webSocketServer: Server<typeof WebSocket, typeof IncomingMessage>;
  close: void;
}
```

| Name | Type |
| ------ | ------ |
| `webSocketServer` | `Server`\<*typeof* `WebSocket`, *typeof* `IncomingMessage`\> |
| `close()` | () => `void` |

***

### createInMemoryVoiceSessionStore()

```ts
function createInMemoryVoiceSessionStore(options?): VoiceSessionStore;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options?` | [`InMemoryVoiceSessionStoreOptions`](#inmemoryvoicesessionstoreoptions) |

#### Returns

[`VoiceSessionStore`](#voicesessionstore)

***

### createVoiceSocketHandshake()

```ts
function createVoiceSocketHandshake(options): {
  createSocket: Promise<VoiceSocketMetadata>;
};
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`VoiceSocketHandshakeOptions`](#voicesockethandshakeoptions) |

#### Returns

```ts
{
  createSocket: Promise<VoiceSocketMetadata>;
}
```

| Name | Type |
| ------ | ------ |
| `createSocket()` | (`input`) => `Promise`\<[`VoiceSocketMetadata`](../core/dist.md#voicesocketmetadata)\> |

***

### handleVoiceSocket()

```ts
function handleVoiceSocket(options): Promise<void>;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`HandleVoiceSocketOptions`](#handlevoicesocketoptions) |

#### Returns

`Promise`\<`void`\>
