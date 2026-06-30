# packages/voice-websocket/dist

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

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TArguments` *extends* [`VoiceJsonValue`](#voicejsonvalue) | [`VoiceJsonValue`](#voicejsonvalue) |
| `TOutput` *extends* [`VoiceJsonValue`](#voicejsonvalue) | [`VoiceJsonValue`](#voicejsonvalue) |

#### Properties

##### instructions?

```ts
optional instructions?: string;
```

##### tools

```ts
tools: VoiceControlTool<VoiceJsonObject>[];
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
  | VoiceControlToolResult<TOutput>
| Promise<VoiceControlToolResult<TOutput>>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`VoiceControlToolCall`](#voicecontroltoolcall)\<`TArguments`\> |

###### Returns

  \| [`VoiceControlToolResult`](#voicecontroltoolresult)\<`TOutput`\>
  \| `Promise`\<[`VoiceControlToolResult`](#voicecontroltoolresult)\<`TOutput`\>\>

***

### VoiceControlTool

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TParameters` *extends* [`VoiceJsonObject`](#voicejsonobject) | [`VoiceJsonObject`](#voicejsonobject) |

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
optional parameters?: TParameters;
```

***

### VoiceControlToolCall

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TArguments` *extends* [`VoiceJsonValue`](#voicejsonvalue) | [`VoiceJsonValue`](#voicejsonvalue) |

#### Properties

##### arguments

```ts
arguments: TArguments;
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

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TOutput` *extends* [`VoiceJsonValue`](#voicejsonvalue) | [`VoiceJsonValue`](#voicejsonvalue) |

#### Properties

##### events?

```ts
optional events?: RuntimeEvent[];
```

##### output

```ts
output: TOutput;
```

***

### VoiceJsonObject

#### Indexable

```ts
[key: string]: VoiceJsonValue
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
| `input` | \{ `channelSegmentId`: `string`; `conversationId`: `string`; `endedAtMs?`: `number`; `metadata?`: [`VoiceWebsocketProviderExtensionFields`](#voicewebsocketproviderextensionfields); `recordingReferenceId?`: `string`; `speaker`: `"user"` \| `"assistant"`; `startedAtMs?`: `number`; `text`: `string`; `transcriptionSource?`: `string`; \} |
| `input.channelSegmentId` | `string` |
| `input.conversationId` | `string` |
| `input.endedAtMs?` | `number` |
| `input.metadata?` | [`VoiceWebsocketProviderExtensionFields`](#voicewebsocketproviderextensionfields) |
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
| `input` | \{ `channelSegmentId`: `string`; `connectionId?`: `string`; `conversationId`: `string`; `interruptedMessageId?`: `string`; `offsetMs?`: `number`; `reason?`: `string`; `recordingReferenceId?`: `string`; `source?`: `"provider"` \| `"userSpeech"` \| `"adapter"`; \} |
| `input.channelSegmentId` | `string` |
| `input.connectionId?` | `string` |
| `input.conversationId` | `string` |
| `input.interruptedMessageId?` | `string` |
| `input.offsetMs?` | `number` |
| `input.reason?` | `string` |
| `input.recordingReferenceId?` | `string` |
| `input.source?` | `"provider"` \| `"userSpeech"` \| `"adapter"` |

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
| `input` | \{ `initialGreeting?`: `string`; `now?`: `Date`; `result`: [`StartVoiceResult`](../core/dist.md#startvoiceresult); `tokenTtlMs`: `number`; \} |
| `input.initialGreeting?` | `string` |
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

##### initialGreeting?

```ts
optional initialGreeting?: string;
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
status: "pending" | "connected" | "ended" | "reconnecting";
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

***

### VoiceWebsocketJsonObject

#### Extended by

- [`VoiceWebsocketProviderExtensionFields`](#voicewebsocketproviderextensionfields)
- [`VoiceWebsocketProviderResponse`](#voicewebsocketproviderresponse)

#### Indexable

```ts
[key: string]: VoiceWebsocketProviderExtensionValue
```

***

### VoiceWebsocketProviderExtensionFields

#### Extends

- [`VoiceWebsocketJsonObject`](#voicewebsocketjsonobject)

#### Indexable

```ts
[key: string]: VoiceWebsocketProviderExtensionValue
```

***

### VoiceWebsocketProviderResponse

#### Extends

- [`VoiceWebsocketJsonObject`](#voicewebsocketjsonobject)

#### Indexable

```ts
[key: string]: VoiceWebsocketProviderExtensionValue
```

## Type Aliases

### VoiceBrowserClientEvent

```ts
type VoiceBrowserClientEvent =
  | {
  event_id?: string;
  session?: VoiceJsonObject;
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
  metadata?: VoiceJsonObject;
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
  response?: VoiceJsonObject;
  type: "response.done";
}
  | {
  error: {
     code: string;
     details?: VoiceJsonValue;
     message: string;
     retryable?: boolean;
  };
  event_id?: string;
  type: "error";
};
```

***

### VoiceJsonPrimitive

```ts
type VoiceJsonPrimitive = string | number | boolean | null;
```

***

### VoiceJsonValue

```ts
type VoiceJsonValue =
  | VoiceJsonPrimitive
  | VoiceJsonObject
  | VoiceJsonValue[];
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
  metadata?: VoiceJsonObject;
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
  details?: VoiceJsonValue;
  kind: "error";
  message: string;
  retryable?: boolean;
};
```

***

### VoiceWebsocketJsonPrimitive

```ts
type VoiceWebsocketJsonPrimitive = string | number | boolean | null;
```

***

### VoiceWebsocketJsonValue

```ts
type VoiceWebsocketJsonValue =
  | VoiceWebsocketJsonPrimitive
  | VoiceWebsocketJsonObject
  | readonly VoiceWebsocketJsonValue[];
```

***

### VoiceWebsocketProviderExtensionValue

```ts
type VoiceWebsocketProviderExtensionValue =
  | VoiceWebsocketJsonValue
  | object
  | undefined;
```

***

### VoiceWebsocketProviderPayload

```ts
type VoiceWebsocketProviderPayload = VoiceWebsocketJsonObject | object;
```

***

### VoiceWebsocketProviderQuery

```ts
type VoiceWebsocketProviderQuery = Record<string, VoiceWebsocketProviderExtensionValue>;
```

## Variables

### COGNIDESK\_VOICE\_PROTOCOL

```ts
const COGNIDESK_VOICE_PROTOCOL: "cognidesk.voice.v1";
```

***

### cognideskVoiceWebSocketProviderManifest

```ts
const cognideskVoiceWebSocketProviderManifest: {
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
};
```

#### Type Declaration

| Name | Type |
| ------ | ------ |
| <a id="property-capabilities"></a> `capabilities` | \{ `audiences?`: (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[]; `capability`: `string`; `changesWorkflow?`: `boolean`; `description?`: `string`; `exposesSensitiveData?`: `boolean`; `extension?`: `boolean`; `label?`: `string`; `metadata?`: `Record`\<`string`, `unknown`\>; `providerObjects?`: \{ `description?`: `string`; `kind`: `string`; `label?`: `string`; `metadata?`: `Record`\<`string`, `unknown`\>; `schemaName?`: `string`; \}[]; `requiresCredential?`: `boolean`; `sideEffect?`: `boolean`; \}[] |
| <a id="property-category"></a> `category` | `string` |
| <a id="property-channelaudiences"></a> `channelAudiences` | (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[] |
| <a id="property-coverage"></a> `coverage` | \{ `evidence`: \{ `label`: `string`; `url?`: `string`; \}[]; `notes`: `string`[]; `scope`: \| `"support-workflow-subset"` \| `"provider-api-subset"` \| `"connector-required"` \| `"local-protocol"` \| `"full-provider-api"`; \} |
| `coverage.evidence` | \{ `label`: `string`; `url?`: `string`; \}[] |
| `coverage.notes` | `string`[] |
| `coverage.scope` | \| `"support-workflow-subset"` \| `"provider-api-subset"` \| `"connector-required"` \| `"local-protocol"` \| `"full-provider-api"` |
| <a id="property-credentialrequirements"></a> `credentialRequirements` | \{ `description?`: `string`; `id`: `string`; `label?`: `string`; `metadata?`: `Record`\<`string`, `unknown`\>; `required`: `boolean`; `scopes`: `string`[]; \}[] |
| <a id="property-directions"></a> `directions` | ( \| `"receive-only"` \| `"send-only"` \| `"inbound-only"` \| `"outbound-only"` \| `"bidirectional"`)[] |
| <a id="property-id"></a> `id` | `string` |
| <a id="property-limitations"></a> `limitations` | `string`[] |
| <a id="property-maintainers"></a> `maintainers` | \{ `name`: `string`; `type`: `"community"` \| `"official"` \| `"unknown"` \| `"partner"`; `url?`: `string`; \}[] |
| <a id="property-metadata"></a> `metadata?` | `Record`\<`string`, `unknown`\> |
| <a id="property-name"></a> `name` | `string` |
| <a id="property-operations"></a> `operations` | \{ `alias`: `string`; `audience?`: `"customer-facing"` \| `"internal-support"` \| `"mixed"`; `audiences?`: (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[]; `capability`: `string`; `changesWorkflow?`: `boolean`; `description?`: `string`; `exposesSensitiveData?`: `boolean`; `extension`: `boolean`; `externallyVisible?`: `boolean`; `inputSchema?`: `unknown`; `inputSchemaName?`: `string`; `inputSchemaRef?`: `string`; `label?`: `string`; `metadata?`: `Record`\<`string`, `unknown`\>; `outputSchema?`: `unknown`; `outputSchemaName?`: `string`; `outputSchemaRef?`: `string`; `providerObject?`: `string`; `providerObjects?`: \{ `description?`: `string`; `kind`: `string`; `label?`: `string`; `metadata?`: `Record`\<`string`, `unknown`\>; `schemaName?`: `string`; \}[]; `providerOperation?`: `string`; `requiredPolicyIds?`: `string`[]; `requiresApproval?`: `boolean`; `requiresCredential?`: `boolean`; `sideEffect?`: `boolean`; \}[] |
| <a id="property-packagename"></a> `packageName` | `string` |
| <a id="property-privacynotes"></a> `privacyNotes` | `string`[] |
| <a id="property-provider"></a> `provider` | `string` |
| <a id="property-trustlevel"></a> `trustLevel` | `"community"` \| `"official"` \| `"verified"` \| `"experimental"` |

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
