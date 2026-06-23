# react/dist

## Classes

### CognideskApiError

#### Extends

- `Error`

#### Constructors

##### Constructor

```ts
new CognideskApiError(message, input): CognideskApiError;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `message` | `string` |
| `input` | \{ `body`: `unknown`; `response`: `Response`; `status`: `number`; \} |
| `input.body` | `unknown` |
| `input.response` | `Response` |
| `input.status` | `number` |

###### Returns

[`CognideskApiError`](#cognideskapierror)

###### Overrides

```ts
Error.constructor
```

#### Properties

##### body

```ts
readonly body: unknown;
```

##### response

```ts
readonly response: Response;
```

##### status

```ts
readonly status: number;
```

## Interfaces

### ChannelEventShortcutEnvelope

#### Extends

- `Omit`\<`Partial`\<[`ChannelEventEnvelopeInput`](../core/dist.md#channeleventenvelopeinput)\<`TPayload`, `TRawPayload`\>\>, `"actor"`\>

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TPayload` | [`NormalizedChannelPayloadInput`](../core/dist.md#normalizedchannelpayloadinput) |
| `TRawPayload` | `unknown` |

#### Properties

##### actor?

```ts
optional actor?: ChannelEventActorInput;
```

##### agentId?

```ts
optional agentId?: string;
```

##### attachments?

```ts
optional attachments?: unknown[];
```

##### body?

```ts
optional body?: string;
```

##### channel?

```ts
optional channel?: ConversationChannelInput;
```

###### Inherited from

```ts
Omit.channel
```

##### conversationId?

```ts
optional conversationId?: string;
```

##### dedupeKey?

```ts
optional dedupeKey?: string;
```

##### direction?

```ts
optional direction?: "outbound" | "inbound" | "internal";
```

###### Inherited from

```ts
Omit.direction
```

##### id?

```ts
optional id?: string;
```

###### Inherited from

```ts
Omit.id
```

##### idempotencyKey?

```ts
optional idempotencyKey?: string;
```

##### identity?

```ts
optional identity?: ChannelEventIdentity;
```

###### Overrides

```ts
Omit.identity
```

##### identityKey?

```ts
optional identityKey?: string;
```

##### identityMetadata?

```ts
optional identityMetadata?: Record<string, unknown>;
```

##### identityStreamId?

```ts
optional identityStreamId?: string;
```

##### intent?

```ts
optional intent?: ChannelEventIntent;
```

###### Inherited from

```ts
Omit.intent
```

##### kind?

```ts
optional kind?: ChannelEventNature;
```

###### Inherited from

```ts
Omit.kind
```

##### message?

```ts
optional message?: string;
```

##### metadata?

```ts
optional metadata?: Record<string, unknown>;
```

###### Inherited from

```ts
Omit.metadata
```

##### nature?

```ts
optional nature?: ChannelEventNature;
```

###### Inherited from

```ts
Omit.nature
```

##### occurredAt?

```ts
optional occurredAt?: string;
```

###### Inherited from

```ts
Omit.occurredAt
```

##### payload?

```ts
optional payload?: TPayload;
```

###### Inherited from

```ts
Omit.payload
```

##### providerObject?

```ts
optional providerObject?: unknown;
```

##### raw?

```ts
optional raw?: TRawPayload;
```

##### sequence?

```ts
optional sequence?: string | number;
```

##### source?

```ts
optional source?: ChannelEventSourceEvidence<TRawPayload>;
```

###### Inherited from

```ts
Omit.source
```

##### status?

```ts
optional status?: string;
```

##### subject?

```ts
optional subject?: string;
```

##### summary?

```ts
optional summary?: string;
```

##### text?

```ts
optional text?: string;
```

##### turn?

```ts
optional turn?: unknown;
```

***

### ChannelEventSubmitInput

#### Extends

- `Omit`\<[`HandleChannelEventInput`](../core/dist.md#handlechanneleventinput)\<`TPayload`, `TTurn`\>, `"event"`\>

#### Extended by

- [`ChannelHandoffEventInput`](#channelhandoffeventinput)
- [`ChannelHandoffReviewEventInput`](#channelhandoffrevieweventinput)
- [`ChannelMessageEventInput`](#channelmessageeventinput)
- [`ChannelOutputResolutionEventInput`](#channeloutputresolutioneventinput)
- [`OutboundContactChannelEventInput`](#outboundcontactchanneleventinput)
- [`ProviderObjectChannelEventInput`](#providerobjectchanneleventinput)
- [`ScheduledChannelEventInput`](#scheduledchanneleventinput)
- [`VoiceTurnChannelEventInput`](#voiceturnchanneleventinput)

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TPayload` | [`NormalizedChannelPayloadInput`](../core/dist.md#normalizedchannelpayloadinput) |
| `TRawPayload` | `unknown` |
| `TTurn` | `unknown` |

#### Properties

##### actor?

```ts
optional actor?: ChannelEventActorInput;
```

##### agentId?

```ts
optional agentId?: string;
```

###### Inherited from

```ts
Omit.agentId
```

##### app?

```ts
optional app?: unknown;
```

###### Inherited from

```ts
Omit.app
```

##### attachments?

```ts
optional attachments?: unknown[];
```

##### binding?

```ts
optional binding?: ChannelEventBindingInput;
```

###### Inherited from

```ts
Omit.binding
```

##### body?

```ts
optional body?: string;
```

##### channel?

```ts
optional channel?: ConversationChannelInput;
```

##### conversationContext?

```ts
optional conversationContext?: unknown;
```

###### Inherited from

```ts
Omit.conversationContext
```

##### conversationId?

```ts
optional conversationId?: string;
```

###### Inherited from

```ts
Omit.conversationId
```

##### createConversation?

```ts
optional createConversation?: CreateRuntimeConversationInput;
```

###### Inherited from

```ts
Omit.createConversation
```

##### dedupeKey?

```ts
optional dedupeKey?: string;
```

##### deliveryId?

```ts
optional deliveryId?: string;
```

##### direction?

```ts
optional direction?: "outbound" | "inbound" | "internal";
```

##### event?

```ts
optional event?: ChannelEventShortcutEnvelope<TPayload, TRawPayload>;
```

##### eventId?

```ts
optional eventId?: string;
```

##### externalObjectIds?

```ts
optional externalObjectIds?: Record<string, string>;
```

##### handling?

```ts
optional handling?: ChannelEventHandlingInput<TTurn>;
```

###### Inherited from

```ts
Omit.handling
```

##### id?

```ts
optional id?: string;
```

##### idempotencyKey?

```ts
optional idempotencyKey?: string;
```

##### identity?

```ts
optional identity?: ChannelEventIdentity;
```

##### identityKey?

```ts
optional identityKey?: string;
```

##### identityMetadata?

```ts
optional identityMetadata?: Record<string, unknown>;
```

##### identityStreamId?

```ts
optional identityStreamId?: string;
```

##### intent?

```ts
optional intent?: ChannelEventIntent;
```

##### kind?

```ts
optional kind?: ChannelEventNature;
```

##### message?

```ts
optional message?: string;
```

##### metadata?

```ts
optional metadata?: Record<string, unknown>;
```

##### nature?

```ts
optional nature?: ChannelEventNature;
```

##### occurredAt?

```ts
optional occurredAt?: string;
```

##### payload?

```ts
optional payload?: TPayload;
```

##### provider?

```ts
optional provider?: string;
```

##### providerObject?

```ts
optional providerObject?: unknown;
```

##### providerPackageId?

```ts
optional providerPackageId?: string;
```

##### raw?

```ts
optional raw?: TRawPayload;
```

##### receivedAt?

```ts
optional receivedAt?: string;
```

##### sequence?

```ts
optional sequence?: string | number;
```

##### signal?

```ts
optional signal?: AbortSignal;
```

###### Inherited from

```ts
Omit.signal
```

##### source?

```ts
optional source?: ChannelEventSourceEvidence<TRawPayload>;
```

##### sourceId?

```ts
optional sourceId?: string;
```

##### sourceType?

```ts
optional sourceType?:
  | "application"
  | "provider-adapter"
  | "schedule-adapter"
  | "operator-surface";
```

##### status?

```ts
optional status?: string;
```

##### streamId?

```ts
optional streamId?: string;
```

##### subject?

```ts
optional subject?: string;
```

##### summary?

```ts
optional summary?: string;
```

##### text?

```ts
optional text?: string;
```

##### turn?

```ts
optional turn?: TTurn;
```

##### verified?

```ts
optional verified?: boolean;
```

#### Methods

##### onAssistantTextDelta()?

```ts
optional onAssistantTextDelta(textDelta): void | Promise<void>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `textDelta` | `string` |

###### Returns

`void` \| `Promise`\<`void`\>

###### Inherited from

```ts
Omit.onAssistantTextDelta
```

***

### ChannelHandoffEventInput

#### Extends

- [`ChannelEventSubmitInput`](#channeleventsubmitinput)\<`TPayload`, `TRawPayload`, `TTurn`\>

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TPayload` | [`NormalizedChannelPayloadInput`](../core/dist.md#normalizedchannelpayloadinput) |
| `TRawPayload` | `unknown` |
| `TTurn` | `unknown` |

#### Properties

##### actor?

```ts
optional actor?: ChannelEventActorInput;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`actor`](#actor-1)

##### agentId?

```ts
optional agentId?: string;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`agentId`](#agentid-1)

##### app?

```ts
optional app?: unknown;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`app`](#app)

##### attachments?

```ts
optional attachments?: unknown[];
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`attachments`](#attachments-1)

##### binding?

```ts
optional binding?: ChannelEventBindingInput;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`binding`](#binding)

##### body?

```ts
optional body?: string;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`body`](#body-2)

##### channel

```ts
channel: ConversationChannelInput;
```

###### Overrides

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`channel`](#channel-1)

##### conversationContext?

```ts
optional conversationContext?: unknown;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`conversationContext`](#conversationcontext)

##### conversationId?

```ts
optional conversationId?: string;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`conversationId`](#conversationid-1)

##### createConversation?

```ts
optional createConversation?: CreateRuntimeConversationInput;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`createConversation`](#createconversation)

##### dedupeKey?

```ts
optional dedupeKey?: string;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`dedupeKey`](#dedupekey-1)

##### deliveryId?

```ts
optional deliveryId?: string;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`deliveryId`](#deliveryid)

##### direction?

```ts
optional direction?: "outbound" | "inbound" | "internal";
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`direction`](#direction-1)

##### event?

```ts
optional event?: ChannelEventShortcutEnvelope<TPayload, TRawPayload>;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`event`](#event)

##### eventId?

```ts
optional eventId?: string;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`eventId`](#eventid)

##### externalObjectIds?

```ts
optional externalObjectIds?: Record<string, string>;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`externalObjectIds`](#externalobjectids)

##### fromChannel?

```ts
optional fromChannel?: ConversationChannelInput;
```

##### handling?

```ts
optional handling?: ChannelEventHandlingInput<TTurn>;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`handling`](#handling)

##### id?

```ts
optional id?: string;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`id`](#id-1)

##### idempotencyKey?

```ts
optional idempotencyKey?: string;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`idempotencyKey`](#idempotencykey-1)

##### identity?

```ts
optional identity?: ChannelEventIdentity;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`identity`](#identity-1)

##### identityKey?

```ts
optional identityKey?: string;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`identityKey`](#identitykey-1)

##### identityMetadata?

```ts
optional identityMetadata?: Record<string, unknown>;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`identityMetadata`](#identitymetadata-1)

##### identityStreamId?

```ts
optional identityStreamId?: string;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`identityStreamId`](#identitystreamid-1)

##### intent?

```ts
optional intent?: ChannelEventIntent;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`intent`](#intent-1)

##### kind?

```ts
optional kind?: ChannelEventNature;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`kind`](#kind-1)

##### message?

```ts
optional message?: string;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`message`](#message-1)

##### metadata?

```ts
optional metadata?: Record<string, unknown>;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`metadata`](#metadata-1)

##### nature?

```ts
optional nature?: ChannelEventNature;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`nature`](#nature-1)

##### occurredAt?

```ts
optional occurredAt?: string;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`occurredAt`](#occurredat-1)

##### payload?

```ts
optional payload?: TPayload;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`payload`](#payload-1)

##### provider?

```ts
optional provider?: string;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`provider`](#provider)

##### providerObject?

```ts
optional providerObject?: unknown;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`providerObject`](#providerobject-1)

##### providerPackageId?

```ts
optional providerPackageId?: string;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`providerPackageId`](#providerpackageid)

##### raw?

```ts
optional raw?: TRawPayload;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`raw`](#raw-1)

##### reason?

```ts
optional reason?: string;
```

##### reasonCode?

```ts
optional reasonCode?: string;
```

##### reasonLabel?

```ts
optional reasonLabel?: string;
```

##### receivedAt?

```ts
optional receivedAt?: string;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`receivedAt`](#receivedat)

##### sequence?

```ts
optional sequence?: string | number;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`sequence`](#sequence-1)

##### signal?

```ts
optional signal?: AbortSignal;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`signal`](#signal)

##### source?

```ts
optional source?: ChannelEventSourceEvidence<TRawPayload>;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`source`](#source-1)

##### sourceId?

```ts
optional sourceId?: string;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`sourceId`](#sourceid)

##### sourceType?

```ts
optional sourceType?:
  | "application"
  | "provider-adapter"
  | "schedule-adapter"
  | "operator-surface";
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`sourceType`](#sourcetype)

##### status?

```ts
optional status?: string;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`status`](#status-2)

##### streamId?

```ts
optional streamId?: string;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`streamId`](#streamid)

##### subject?

```ts
optional subject?: string;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`subject`](#subject-1)

##### summary?

```ts
optional summary?: string;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`summary`](#summary-1)

##### text?

```ts
optional text?: string;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`text`](#text-1)

##### turn?

```ts
optional turn?: TTurn;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`turn`](#turn-1)

##### verified?

```ts
optional verified?: boolean;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`verified`](#verified)

#### Methods

##### onAssistantTextDelta()?

```ts
optional onAssistantTextDelta(textDelta): void | Promise<void>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `textDelta` | `string` |

###### Returns

`void` \| `Promise`\<`void`\>

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`onAssistantTextDelta`](#onassistanttextdelta)

***

### ChannelHandoffReviewEventInput

#### Extends

- [`ChannelEventSubmitInput`](#channeleventsubmitinput)\<`TPayload`, `TRawPayload`, `TTurn`\>

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TPayload` | [`NormalizedChannelPayloadInput`](../core/dist.md#normalizedchannelpayloadinput) |
| `TRawPayload` | `unknown` |
| `TTurn` | `unknown` |

#### Properties

##### actor?

```ts
optional actor?: ChannelEventActorInput;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`actor`](#actor-1)

##### agentId?

```ts
optional agentId?: string;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`agentId`](#agentid-1)

##### app?

```ts
optional app?: unknown;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`app`](#app)

##### attachments?

```ts
optional attachments?: unknown[];
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`attachments`](#attachments-1)

##### binding?

```ts
optional binding?: ChannelEventBindingInput;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`binding`](#binding)

##### body?

```ts
optional body?: string;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`body`](#body-2)

##### channel

```ts
channel: ConversationChannelInput;
```

###### Overrides

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`channel`](#channel-1)

##### conversationContext?

```ts
optional conversationContext?: unknown;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`conversationContext`](#conversationcontext)

##### conversationId?

```ts
optional conversationId?: string;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`conversationId`](#conversationid-1)

##### createConversation?

```ts
optional createConversation?: CreateRuntimeConversationInput;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`createConversation`](#createconversation)

##### dedupeKey?

```ts
optional dedupeKey?: string;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`dedupeKey`](#dedupekey-1)

##### deliveryId?

```ts
optional deliveryId?: string;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`deliveryId`](#deliveryid)

##### direction?

```ts
optional direction?: "outbound" | "inbound" | "internal";
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`direction`](#direction-1)

##### event?

```ts
optional event?: ChannelEventShortcutEnvelope<TPayload, TRawPayload>;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`event`](#event)

##### eventId?

```ts
optional eventId?: string;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`eventId`](#eventid)

##### externalObjectIds?

```ts
optional externalObjectIds?: Record<string, string>;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`externalObjectIds`](#externalobjectids)

##### handling?

```ts
optional handling?: ChannelEventHandlingInput<TTurn>;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`handling`](#handling)

##### id?

```ts
optional id?: string;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`id`](#id-1)

##### idempotencyKey?

```ts
optional idempotencyKey?: string;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`idempotencyKey`](#idempotencykey-1)

##### identity?

```ts
optional identity?: ChannelEventIdentity;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`identity`](#identity-1)

##### identityKey?

```ts
optional identityKey?: string;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`identityKey`](#identitykey-1)

##### identityMetadata?

```ts
optional identityMetadata?: Record<string, unknown>;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`identityMetadata`](#identitymetadata-1)

##### identityStreamId?

```ts
optional identityStreamId?: string;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`identityStreamId`](#identitystreamid-1)

##### intent?

```ts
optional intent?: ChannelEventIntent;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`intent`](#intent-1)

##### kind?

```ts
optional kind?: ChannelEventNature;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`kind`](#kind-1)

##### message?

```ts
optional message?: string;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`message`](#message-1)

##### metadata?

```ts
optional metadata?: Record<string, unknown>;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`metadata`](#metadata-1)

##### nature?

```ts
optional nature?: ChannelEventNature;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`nature`](#nature-1)

##### occurredAt?

```ts
optional occurredAt?: string;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`occurredAt`](#occurredat-1)

##### payload?

```ts
optional payload?: TPayload;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`payload`](#payload-1)

##### provider?

```ts
optional provider?: string;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`provider`](#provider)

##### providerObject?

```ts
optional providerObject?: unknown;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`providerObject`](#providerobject-1)

##### providerPackageId?

```ts
optional providerPackageId?: string;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`providerPackageId`](#providerpackageid)

##### raw?

```ts
optional raw?: TRawPayload;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`raw`](#raw-1)

##### receivedAt?

```ts
optional receivedAt?: string;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`receivedAt`](#receivedat)

##### sequence?

```ts
optional sequence?: string | number;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`sequence`](#sequence-1)

##### signal?

```ts
optional signal?: AbortSignal;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`signal`](#signal)

##### source?

```ts
optional source?: ChannelEventSourceEvidence<TRawPayload>;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`source`](#source-1)

##### sourceId?

```ts
optional sourceId?: string;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`sourceId`](#sourceid)

##### sourceType?

```ts
optional sourceType?:
  | "application"
  | "provider-adapter"
  | "schedule-adapter"
  | "operator-surface";
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`sourceType`](#sourcetype)

##### status?

```ts
optional status?: string;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`status`](#status-2)

##### streamId?

```ts
optional streamId?: string;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`streamId`](#streamid)

##### subject?

```ts
optional subject?: string;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`subject`](#subject-1)

##### summary?

```ts
optional summary?: string;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`summary`](#summary-1)

##### text?

```ts
optional text?: string;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`text`](#text-1)

##### turn?

```ts
optional turn?: TTurn;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`turn`](#turn-1)

##### verified?

```ts
optional verified?: boolean;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`verified`](#verified)

#### Methods

##### onAssistantTextDelta()?

```ts
optional onAssistantTextDelta(textDelta): void | Promise<void>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `textDelta` | `string` |

###### Returns

`void` \| `Promise`\<`void`\>

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`onAssistantTextDelta`](#onassistanttextdelta)

***

### ChannelMessageEventInput

#### Extends

- [`ChannelEventSubmitInput`](#channeleventsubmitinput)\<`TPayload`, `TRawPayload`, `TTurn`\>

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TPayload` | [`NormalizedChannelPayloadInput`](../core/dist.md#normalizedchannelpayloadinput) |
| `TRawPayload` | `unknown` |
| `TTurn` | `unknown` |

#### Properties

##### actor?

```ts
optional actor?: ChannelEventActorInput;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`actor`](#actor-1)

##### agentId?

```ts
optional agentId?: string;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`agentId`](#agentid-1)

##### app?

```ts
optional app?: unknown;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`app`](#app)

##### attachments?

```ts
optional attachments?: unknown[];
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`attachments`](#attachments-1)

##### binding?

```ts
optional binding?: ChannelEventBindingInput;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`binding`](#binding)

##### body?

```ts
optional body?: string;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`body`](#body-2)

##### channel

```ts
channel: ConversationChannelInput;
```

###### Overrides

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`channel`](#channel-1)

##### conversationContext?

```ts
optional conversationContext?: unknown;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`conversationContext`](#conversationcontext)

##### conversationId?

```ts
optional conversationId?: string;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`conversationId`](#conversationid-1)

##### createConversation?

```ts
optional createConversation?: CreateRuntimeConversationInput;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`createConversation`](#createconversation)

##### dedupeKey?

```ts
optional dedupeKey?: string;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`dedupeKey`](#dedupekey-1)

##### deliveryId?

```ts
optional deliveryId?: string;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`deliveryId`](#deliveryid)

##### direction?

```ts
optional direction?: "outbound" | "inbound";
```

###### Overrides

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`direction`](#direction-1)

##### event?

```ts
optional event?: ChannelEventShortcutEnvelope<TPayload, TRawPayload>;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`event`](#event)

##### eventId?

```ts
optional eventId?: string;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`eventId`](#eventid)

##### externalObjectIds?

```ts
optional externalObjectIds?: Record<string, string>;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`externalObjectIds`](#externalobjectids)

##### handling?

```ts
optional handling?: ChannelEventHandlingInput<TTurn>;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`handling`](#handling)

##### id?

```ts
optional id?: string;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`id`](#id-1)

##### idempotencyKey?

```ts
optional idempotencyKey?: string;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`idempotencyKey`](#idempotencykey-1)

##### identity?

```ts
optional identity?: ChannelEventIdentity;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`identity`](#identity-1)

##### identityKey?

```ts
optional identityKey?: string;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`identityKey`](#identitykey-1)

##### identityMetadata?

```ts
optional identityMetadata?: Record<string, unknown>;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`identityMetadata`](#identitymetadata-1)

##### identityStreamId?

```ts
optional identityStreamId?: string;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`identityStreamId`](#identitystreamid-1)

##### intent?

```ts
optional intent?: ChannelEventIntent;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`intent`](#intent-1)

##### kind?

```ts
optional kind?: ChannelEventNature;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`kind`](#kind-1)

##### message?

```ts
optional message?: string;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`message`](#message-1)

##### metadata?

```ts
optional metadata?: Record<string, unknown>;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`metadata`](#metadata-1)

##### nature?

```ts
optional nature?: ChannelEventNature;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`nature`](#nature-1)

##### occurredAt?

```ts
optional occurredAt?: string;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`occurredAt`](#occurredat-1)

##### payload?

```ts
optional payload?: TPayload;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`payload`](#payload-1)

##### provider?

```ts
optional provider?: string;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`provider`](#provider)

##### providerObject?

```ts
optional providerObject?: unknown;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`providerObject`](#providerobject-1)

##### providerPackageId?

```ts
optional providerPackageId?: string;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`providerPackageId`](#providerpackageid)

##### raw?

```ts
optional raw?: TRawPayload;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`raw`](#raw-1)

##### receivedAt?

```ts
optional receivedAt?: string;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`receivedAt`](#receivedat)

##### sequence?

```ts
optional sequence?: string | number;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`sequence`](#sequence-1)

##### signal?

```ts
optional signal?: AbortSignal;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`signal`](#signal)

##### source?

```ts
optional source?: ChannelEventSourceEvidence<TRawPayload>;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`source`](#source-1)

##### sourceId?

```ts
optional sourceId?: string;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`sourceId`](#sourceid)

##### sourceType?

```ts
optional sourceType?:
  | "application"
  | "provider-adapter"
  | "schedule-adapter"
  | "operator-surface";
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`sourceType`](#sourcetype)

##### status?

```ts
optional status?: string;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`status`](#status-2)

##### streamId?

```ts
optional streamId?: string;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`streamId`](#streamid)

##### subject?

```ts
optional subject?: string;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`subject`](#subject-1)

##### summary?

```ts
optional summary?: string;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`summary`](#summary-1)

##### text

```ts
text: string;
```

###### Overrides

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`text`](#text-1)

##### turn?

```ts
optional turn?: TTurn;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`turn`](#turn-1)

##### verified?

```ts
optional verified?: boolean;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`verified`](#verified)

#### Methods

##### onAssistantTextDelta()?

```ts
optional onAssistantTextDelta(textDelta): void | Promise<void>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `textDelta` | `string` |

###### Returns

`void` \| `Promise`\<`void`\>

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`onAssistantTextDelta`](#onassistanttextdelta)

***

### ChannelOutputResolutionEventInput

#### Extends

- [`ChannelEventSubmitInput`](#channeleventsubmitinput)\<`TPayload`, `TRawPayload`, `TTurn`\>

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TPayload` | [`NormalizedChannelPayloadInput`](../core/dist.md#normalizedchannelpayloadinput) |
| `TRawPayload` | `unknown` |
| `TTurn` | `unknown` |

#### Properties

##### actor?

```ts
optional actor?: ChannelEventActorInput;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`actor`](#actor-1)

##### agentId?

```ts
optional agentId?: string;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`agentId`](#agentid-1)

##### app?

```ts
optional app?: unknown;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`app`](#app)

##### attachments?

```ts
optional attachments?: unknown[];
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`attachments`](#attachments-1)

##### binding?

```ts
optional binding?: ChannelEventBindingInput;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`binding`](#binding)

##### body?

```ts
optional body?: string;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`body`](#body-2)

##### channel

```ts
channel: ConversationChannelInput;
```

###### Overrides

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`channel`](#channel-1)

##### conversationContext?

```ts
optional conversationContext?: unknown;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`conversationContext`](#conversationcontext)

##### conversationId?

```ts
optional conversationId?: string;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`conversationId`](#conversationid-1)

##### createConversation?

```ts
optional createConversation?: CreateRuntimeConversationInput;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`createConversation`](#createconversation)

##### dedupeKey?

```ts
optional dedupeKey?: string;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`dedupeKey`](#dedupekey-1)

##### deliveryId?

```ts
optional deliveryId?: string;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`deliveryId`](#deliveryid)

##### direction?

```ts
optional direction?: "outbound" | "inbound" | "internal";
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`direction`](#direction-1)

##### event?

```ts
optional event?: ChannelEventShortcutEnvelope<TPayload, TRawPayload>;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`event`](#event)

##### eventId?

```ts
optional eventId?: string;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`eventId`](#eventid)

##### externalObjectIds?

```ts
optional externalObjectIds?: Record<string, string>;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`externalObjectIds`](#externalobjectids)

##### handling?

```ts
optional handling?: ChannelEventHandlingInput<TTurn>;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`handling`](#handling)

##### id?

```ts
optional id?: string;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`id`](#id-1)

##### idempotencyKey?

```ts
optional idempotencyKey?: string;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`idempotencyKey`](#idempotencykey-1)

##### identity?

```ts
optional identity?: ChannelEventIdentity;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`identity`](#identity-1)

##### identityKey?

```ts
optional identityKey?: string;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`identityKey`](#identitykey-1)

##### identityMetadata?

```ts
optional identityMetadata?: Record<string, unknown>;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`identityMetadata`](#identitymetadata-1)

##### identityStreamId?

```ts
optional identityStreamId?: string;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`identityStreamId`](#identitystreamid-1)

##### intent?

```ts
optional intent?: ChannelEventIntent;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`intent`](#intent-1)

##### kind?

```ts
optional kind?: ChannelEventNature;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`kind`](#kind-1)

##### message?

```ts
optional message?: string;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`message`](#message-1)

##### metadata?

```ts
optional metadata?: Record<string, unknown>;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`metadata`](#metadata-1)

##### nature?

```ts
optional nature?: ChannelEventNature;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`nature`](#nature-1)

##### occurredAt?

```ts
optional occurredAt?: string;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`occurredAt`](#occurredat-1)

##### payload?

```ts
optional payload?: TPayload;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`payload`](#payload-1)

##### provider?

```ts
optional provider?: string;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`provider`](#provider)

##### providerObject?

```ts
optional providerObject?: unknown;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`providerObject`](#providerobject-1)

##### providerPackageId?

```ts
optional providerPackageId?: string;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`providerPackageId`](#providerpackageid)

##### raw?

```ts
optional raw?: TRawPayload;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`raw`](#raw-1)

##### receivedAt?

```ts
optional receivedAt?: string;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`receivedAt`](#receivedat)

##### sequence?

```ts
optional sequence?: string | number;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`sequence`](#sequence-1)

##### signal?

```ts
optional signal?: AbortSignal;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`signal`](#signal)

##### source?

```ts
optional source?: ChannelEventSourceEvidence<TRawPayload>;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`source`](#source-1)

##### sourceId?

```ts
optional sourceId?: string;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`sourceId`](#sourceid)

##### sourceType?

```ts
optional sourceType?:
  | "application"
  | "provider-adapter"
  | "schedule-adapter"
  | "operator-surface";
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`sourceType`](#sourcetype)

##### status?

```ts
optional status?: string;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`status`](#status-2)

##### streamId?

```ts
optional streamId?: string;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`streamId`](#streamid)

##### subject?

```ts
optional subject?: string;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`subject`](#subject-1)

##### summary?

```ts
optional summary?: string;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`summary`](#summary-1)

##### text?

```ts
optional text?: string;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`text`](#text-1)

##### turn?

```ts
optional turn?: TTurn;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`turn`](#turn-1)

##### verified?

```ts
optional verified?: boolean;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`verified`](#verified)

#### Methods

##### onAssistantTextDelta()?

```ts
optional onAssistantTextDelta(textDelta): void | Promise<void>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `textDelta` | `string` |

###### Returns

`void` \| `Promise`\<`void`\>

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`onAssistantTextDelta`](#onassistanttextdelta)

***

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

### ChatActivityLabelInput

#### Properties

##### defaultLabel

```ts
defaultLabel: string;
```

##### event

```ts
event: RuntimeEvent;
```

##### kind

```ts
kind: ChatActivityLabelKind;
```

##### name?

```ts
optional name?: string;
```

***

### ChatEventReducerOptions

#### Properties

##### formatActivityLabel?

```ts
optional formatActivityLabel?: ChatActivityLabelFormatter;
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
status: "failed" | "aborted" | "sending" | "streaming" | "sent";
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

##### channel?

```ts
optional channel?: ConversationChannelInput;
```

##### client

```ts
client: CognideskClient;
```

##### conversationId?

```ts
optional conversationId?: string;
```

##### formatActivityLabel?

```ts
optional formatActivityLabel?: ChatActivityLabelFormatter;
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
     channel?: ConversationChannel;
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
     `channel?`: [`ConversationChannel`](../core/dist.md#conversationchannel);
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
| `input?` | [`CreateConversationInput`](#createconversationinput) |

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

##### finalizeVoiceTurn()

```ts
finalizeVoiceTurn(input): Promise<HandleChannelEventResult<unknown>>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`VoiceTurnChannelEventInput`](#voiceturnchanneleventinput) |

###### Returns

`Promise`\<`HandleChannelEventResult`\<`unknown`\>\>

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

##### handleChannelEvent()

```ts
handleChannelEvent(input): Promise<HandleChannelEventResult<unknown>>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`ChannelEventSubmitInput`](#channeleventsubmitinput) |

###### Returns

`Promise`\<`HandleChannelEventResult`\<`unknown`\>\>

##### listConversations()

```ts
listConversations(options?): Promise<ListConversationsResult>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `options?` | [`ListConversationsOptions`](#listconversationsoptions) |

###### Returns

`Promise`\<[`ListConversationsResult`](#listconversationsresult)\>

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

##### receiveMessage()

```ts
receiveMessage(input): Promise<HandleChannelEventResult<unknown>>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`ChannelMessageEventInput`](#channelmessageeventinput) |

###### Returns

`Promise`\<`HandleChannelEventResult`\<`unknown`\>\>

##### recordChannelOutputResolution()

```ts
recordChannelOutputResolution(input): Promise<HandleChannelEventResult<unknown>>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`ChannelOutputResolutionEventInput`](#channeloutputresolutioneventinput) |

###### Returns

`Promise`\<`HandleChannelEventResult`\<`unknown`\>\>

##### recordProviderUpdate()

```ts
recordProviderUpdate(input): Promise<HandleChannelEventResult<unknown>>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`ProviderObjectChannelEventInput`](#providerobjectchanneleventinput) |

###### Returns

`Promise`\<`HandleChannelEventResult`\<`unknown`\>\>

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

##### requestChannelHandoff()

```ts
requestChannelHandoff(input): Promise<HandleChannelEventResult<unknown>>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`ChannelHandoffEventInput`](#channelhandoffeventinput) |

###### Returns

`Promise`\<`HandleChannelEventResult`\<`unknown`\>\>

##### requestChannelHandoffReview()

```ts
requestChannelHandoffReview(input): Promise<HandleChannelEventResult<unknown>>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`ChannelHandoffReviewEventInput`](#channelhandoffrevieweventinput) |

###### Returns

`Promise`\<`HandleChannelEventResult`\<`unknown`\>\>

##### requestHandoff()

```ts
requestHandoff(conversationId, input): Promise<{
  conversation: {
     agentId: string;
     channel?: ConversationChannel;
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
     `channel?`: [`ConversationChannel`](../core/dist.md#conversationchannel);
     `context`: `unknown`;
     `createdAt`: `string`;
     `id`: `string`;
     `lifecycle`: `string`;
     `updatedAt`: `string`;
  \};
  `event`: [`RuntimeEvent`](../core/dist.md#runtimeevent);
\}\>

##### requestOutboundContact()

```ts
requestOutboundContact(input): Promise<HandleChannelEventResult<unknown>>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`OutboundContactChannelEventInput`](#outboundcontactchanneleventinput) |

###### Returns

`Promise`\<`HandleChannelEventResult`\<`unknown`\>\>

##### resolveChannelOutput()

```ts
resolveChannelOutput(input): Promise<ResolveChannelOutputResult<unknown>>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`ResolveChannelOutputInput`](#resolvechanneloutputinput) |

###### Returns

`Promise`\<[`ResolveChannelOutputResult`](#resolvechanneloutputresult)\<`unknown`\>\>

##### resumeConversation()

```ts
resumeConversation(conversationId, input?): Promise<{
  conversation: {
     agentId: string;
     channel?: ConversationChannel;
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
     `channel?`: [`ConversationChannel`](../core/dist.md#conversationchannel);
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
| `options?` | \{ `app?`: `unknown`; `channel?`: [`ConversationChannelInput`](../core/dist.md#conversationchannelinput); `turn?`: `unknown`; \} |
| `options.app?` | `unknown` |
| `options.channel?` | [`ConversationChannelInput`](../core/dist.md#conversationchannelinput) |
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
| `options?` | [`CognideskStreamEventsOptions`](#cognideskstreameventsoptions) |

###### Returns

() => `void`

##### submitScheduledEvent()

```ts
submitScheduledEvent(input): Promise<HandleChannelEventResult<unknown>>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`ScheduledChannelEventInput`](#scheduledchanneleventinput) |

###### Returns

`Promise`\<`HandleChannelEventResult`\<`unknown`\>\>

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

##### createEventSource?

```ts
optional createEventSource?: CognideskEventSourceFactory;
```

Use a factory for EventSource implementations that need constructor
options beyond the browser-native EventSourceInit, such as auth headers.

##### credentials?

```ts
optional credentials?: RequestCredentials;
```

Shared credentials mode for fetch requests. "include" also enables
EventSource withCredentials unless streamEvents overrides it.

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

##### eventSourceOptions?

```ts
optional eventSourceOptions?: CognideskEventSourceOptions;
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
optional headers?: HeadersInit;
```

Shared headers for fetch requests. These are also passed to streamEvents
factories/polyfills that support header-based EventSource authentication.

##### requestOptions?

```ts
optional requestOptions?:
  | CognideskRequestOptions
  | CognideskRequestOptionsResolver;
```

Shared request options, or a resolver for per-operation options such as
auth headers, AbortSignal, cache mode, or credentials.

***

### CognideskEventSourceOptions

#### Extends

- `EventSourceInit`

#### Extended by

- [`CognideskStreamEventsOptions`](#cognideskstreameventsoptions)

#### Properties

##### headers?

```ts
optional headers?: HeadersInit;
```

***

### CognideskRequestContext

#### Properties

##### conversationId?

```ts
optional conversationId?: string;
```

##### method

```ts
method: "GET" | "POST";
```

##### operation

```ts
operation: CognideskRequestOperation;
```

##### url

```ts
url: string;
```

***

### CognideskStreamEventsOptions

#### Extends

- [`CognideskEventSourceOptions`](#cognideskeventsourceoptions)

#### Properties

##### afterOffset?

```ts
optional afterOffset?: number;
```

##### createEventSource?

```ts
optional createEventSource?: CognideskEventSourceFactory;
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

##### headers?

```ts
optional headers?: HeadersInit;
```

###### Inherited from

[`CognideskEventSourceOptions`](#cognideskeventsourceoptions).[`headers`](#headers-1)

***

### CreateConversationInput

#### Properties

##### agentId?

```ts
optional agentId?: string;
```

##### channel?

```ts
optional channel?: ConversationChannelInput;
```

##### context?

```ts
optional context?: unknown;
```

##### id?

```ts
optional id?: string;
```

***

### CreateConversationResult

#### Properties

##### conversation

```ts
conversation: {
  agentId: string;
  channel?: ConversationChannel;
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

###### channel?

```ts
optional channel?: ConversationChannel;
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

### ListConversationsOptions

#### Properties

##### after?

```ts
optional after?: ConversationListCursor;
```

##### afterUpdatedAt?

```ts
optional afterUpdatedAt?: string;
```

Timestamp-only range filter. Use `after` for lossless cursor pagination.

##### agentId?

```ts
optional agentId?: string;
```

##### before?

```ts
optional before?: ConversationListCursor;
```

##### beforeUpdatedAt?

```ts
optional beforeUpdatedAt?: string;
```

Timestamp-only range filter. Use `before` for lossless cursor pagination.

##### limit?

```ts
optional limit?: number;
```

***

### ListConversationsResult

#### Properties

##### conversations

```ts
conversations: {
  agentId: string;
  channel?: ConversationChannel;
  context: unknown;
  createdAt: string;
  id: string;
  lifecycle: string;
  updatedAt: string;
}[];
```

###### agentId

```ts
agentId: string;
```

###### channel?

```ts
optional channel?: ConversationChannel;
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

### OutboundContactChannelEventInput

#### Extends

- [`ChannelEventSubmitInput`](#channeleventsubmitinput)\<`TPayload`, `TRawPayload`, `TTurn`\>

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TPayload` | [`NormalizedChannelPayloadInput`](../core/dist.md#normalizedchannelpayloadinput) |
| `TRawPayload` | `unknown` |
| `TTurn` | `unknown` |

#### Properties

##### actor?

```ts
optional actor?: ChannelEventActorInput;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`actor`](#actor-1)

##### agentId?

```ts
optional agentId?: string;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`agentId`](#agentid-1)

##### app?

```ts
optional app?: unknown;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`app`](#app)

##### attachments?

```ts
optional attachments?: unknown[];
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`attachments`](#attachments-1)

##### binding?

```ts
optional binding?: ChannelEventBindingInput;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`binding`](#binding)

##### body?

```ts
optional body?: string;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`body`](#body-2)

##### channel

```ts
channel: ConversationChannelInput;
```

###### Overrides

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`channel`](#channel-1)

##### conversationContext?

```ts
optional conversationContext?: unknown;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`conversationContext`](#conversationcontext)

##### conversationId?

```ts
optional conversationId?: string;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`conversationId`](#conversationid-1)

##### createConversation?

```ts
optional createConversation?: CreateRuntimeConversationInput;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`createConversation`](#createconversation)

##### dedupeKey?

```ts
optional dedupeKey?: string;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`dedupeKey`](#dedupekey-1)

##### deliveryId?

```ts
optional deliveryId?: string;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`deliveryId`](#deliveryid)

##### direction?

```ts
optional direction?: "outbound" | "inbound" | "internal";
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`direction`](#direction-1)

##### event?

```ts
optional event?: ChannelEventShortcutEnvelope<TPayload, TRawPayload>;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`event`](#event)

##### eventId?

```ts
optional eventId?: string;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`eventId`](#eventid)

##### externalObjectIds?

```ts
optional externalObjectIds?: Record<string, string>;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`externalObjectIds`](#externalobjectids)

##### handling?

```ts
optional handling?: ChannelEventHandlingInput<TTurn>;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`handling`](#handling)

##### id?

```ts
optional id?: string;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`id`](#id-1)

##### idempotencyKey?

```ts
optional idempotencyKey?: string;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`idempotencyKey`](#idempotencykey-1)

##### identity?

```ts
optional identity?: ChannelEventIdentity;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`identity`](#identity-1)

##### identityKey?

```ts
optional identityKey?: string;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`identityKey`](#identitykey-1)

##### identityMetadata?

```ts
optional identityMetadata?: Record<string, unknown>;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`identityMetadata`](#identitymetadata-1)

##### identityStreamId?

```ts
optional identityStreamId?: string;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`identityStreamId`](#identitystreamid-1)

##### intent?

```ts
optional intent?: ChannelEventIntent;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`intent`](#intent-1)

##### kind?

```ts
optional kind?: ChannelEventNature;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`kind`](#kind-1)

##### message?

```ts
optional message?: string;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`message`](#message-1)

##### metadata?

```ts
optional metadata?: Record<string, unknown>;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`metadata`](#metadata-1)

##### nature?

```ts
optional nature?: ChannelEventNature;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`nature`](#nature-1)

##### occurredAt?

```ts
optional occurredAt?: string;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`occurredAt`](#occurredat-1)

##### payload?

```ts
optional payload?: TPayload;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`payload`](#payload-1)

##### provider?

```ts
optional provider?: string;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`provider`](#provider)

##### providerObject?

```ts
optional providerObject?: unknown;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`providerObject`](#providerobject-1)

##### providerPackageId?

```ts
optional providerPackageId?: string;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`providerPackageId`](#providerpackageid)

##### raw?

```ts
optional raw?: TRawPayload;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`raw`](#raw-1)

##### receivedAt?

```ts
optional receivedAt?: string;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`receivedAt`](#receivedat)

##### sequence?

```ts
optional sequence?: string | number;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`sequence`](#sequence-1)

##### signal?

```ts
optional signal?: AbortSignal;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`signal`](#signal)

##### source?

```ts
optional source?: ChannelEventSourceEvidence<TRawPayload>;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`source`](#source-1)

##### sourceId?

```ts
optional sourceId?: string;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`sourceId`](#sourceid)

##### sourceType?

```ts
optional sourceType?:
  | "application"
  | "provider-adapter"
  | "schedule-adapter"
  | "operator-surface";
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`sourceType`](#sourcetype)

##### status?

```ts
optional status?: string;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`status`](#status-2)

##### streamId?

```ts
optional streamId?: string;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`streamId`](#streamid)

##### subject?

```ts
optional subject?: string;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`subject`](#subject-1)

##### summary?

```ts
optional summary?: string;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`summary`](#summary-1)

##### text?

```ts
optional text?: string;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`text`](#text-1)

##### turn?

```ts
optional turn?: TTurn;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`turn`](#turn-1)

##### verified?

```ts
optional verified?: boolean;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`verified`](#verified)

#### Methods

##### onAssistantTextDelta()?

```ts
optional onAssistantTextDelta(textDelta): void | Promise<void>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `textDelta` | `string` |

###### Returns

`void` \| `Promise`\<`void`\>

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`onAssistantTextDelta`](#onassistanttextdelta)

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

### ProviderObjectChannelEventInput

#### Extends

- [`ChannelEventSubmitInput`](#channeleventsubmitinput)\<`TPayload`, `TRawPayload`, `TTurn`\>

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TPayload` | [`NormalizedChannelPayloadInput`](../core/dist.md#normalizedchannelpayloadinput) |
| `TRawPayload` | `unknown` |
| `TTurn` | `unknown` |

#### Properties

##### actor?

```ts
optional actor?: ChannelEventActorInput;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`actor`](#actor-1)

##### agentId?

```ts
optional agentId?: string;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`agentId`](#agentid-1)

##### app?

```ts
optional app?: unknown;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`app`](#app)

##### attachments?

```ts
optional attachments?: unknown[];
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`attachments`](#attachments-1)

##### binding?

```ts
optional binding?: ChannelEventBindingInput;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`binding`](#binding)

##### body?

```ts
optional body?: string;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`body`](#body-2)

##### channel

```ts
channel: ConversationChannelInput;
```

###### Overrides

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`channel`](#channel-1)

##### conversationContext?

```ts
optional conversationContext?: unknown;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`conversationContext`](#conversationcontext)

##### conversationId?

```ts
optional conversationId?: string;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`conversationId`](#conversationid-1)

##### createConversation?

```ts
optional createConversation?: CreateRuntimeConversationInput;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`createConversation`](#createconversation)

##### dedupeKey?

```ts
optional dedupeKey?: string;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`dedupeKey`](#dedupekey-1)

##### deliveryId?

```ts
optional deliveryId?: string;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`deliveryId`](#deliveryid)

##### direction?

```ts
optional direction?: "outbound" | "inbound" | "internal";
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`direction`](#direction-1)

##### event?

```ts
optional event?: ChannelEventShortcutEnvelope<TPayload, TRawPayload>;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`event`](#event)

##### eventId?

```ts
optional eventId?: string;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`eventId`](#eventid)

##### externalObjectIds?

```ts
optional externalObjectIds?: Record<string, string>;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`externalObjectIds`](#externalobjectids)

##### handling?

```ts
optional handling?: ChannelEventHandlingInput<TTurn>;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`handling`](#handling)

##### id?

```ts
optional id?: string;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`id`](#id-1)

##### idempotencyKey?

```ts
optional idempotencyKey?: string;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`idempotencyKey`](#idempotencykey-1)

##### identity?

```ts
optional identity?: ChannelEventIdentity;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`identity`](#identity-1)

##### identityKey?

```ts
optional identityKey?: string;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`identityKey`](#identitykey-1)

##### identityMetadata?

```ts
optional identityMetadata?: Record<string, unknown>;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`identityMetadata`](#identitymetadata-1)

##### identityStreamId?

```ts
optional identityStreamId?: string;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`identityStreamId`](#identitystreamid-1)

##### intent?

```ts
optional intent?: ChannelEventIntent;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`intent`](#intent-1)

##### kind?

```ts
optional kind?: ChannelEventNature;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`kind`](#kind-1)

##### message?

```ts
optional message?: string;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`message`](#message-1)

##### metadata?

```ts
optional metadata?: Record<string, unknown>;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`metadata`](#metadata-1)

##### nature?

```ts
optional nature?: ChannelEventNature;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`nature`](#nature-1)

##### occurredAt?

```ts
optional occurredAt?: string;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`occurredAt`](#occurredat-1)

##### payload?

```ts
optional payload?: TPayload;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`payload`](#payload-1)

##### provider?

```ts
optional provider?: string;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`provider`](#provider)

##### providerObject?

```ts
optional providerObject?: unknown;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`providerObject`](#providerobject-1)

##### providerPackageId?

```ts
optional providerPackageId?: string;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`providerPackageId`](#providerpackageid)

##### raw?

```ts
optional raw?: TRawPayload;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`raw`](#raw-1)

##### receivedAt?

```ts
optional receivedAt?: string;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`receivedAt`](#receivedat)

##### sequence?

```ts
optional sequence?: string | number;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`sequence`](#sequence-1)

##### signal?

```ts
optional signal?: AbortSignal;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`signal`](#signal)

##### source?

```ts
optional source?: ChannelEventSourceEvidence<TRawPayload>;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`source`](#source-1)

##### sourceId?

```ts
optional sourceId?: string;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`sourceId`](#sourceid)

##### sourceType?

```ts
optional sourceType?:
  | "application"
  | "provider-adapter"
  | "schedule-adapter"
  | "operator-surface";
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`sourceType`](#sourcetype)

##### status?

```ts
optional status?: string;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`status`](#status-2)

##### streamId?

```ts
optional streamId?: string;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`streamId`](#streamid)

##### subject?

```ts
optional subject?: string;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`subject`](#subject-1)

##### summary?

```ts
optional summary?: string;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`summary`](#summary-1)

##### text?

```ts
optional text?: string;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`text`](#text-1)

##### turn?

```ts
optional turn?: TTurn;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`turn`](#turn-1)

##### verified?

```ts
optional verified?: boolean;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`verified`](#verified)

#### Methods

##### onAssistantTextDelta()?

```ts
optional onAssistantTextDelta(textDelta): void | Promise<void>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `textDelta` | `string` |

###### Returns

`void` \| `Promise`\<`void`\>

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`onAssistantTextDelta`](#onassistanttextdelta)

***

### ReplayConversationResult

#### Properties

##### conversation

```ts
conversation: {
  agentId: string;
  channel?: ConversationChannel;
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

###### channel?

```ts
optional channel?: ConversationChannel;
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

### ScheduledChannelEventInput

#### Extends

- [`ChannelEventSubmitInput`](#channeleventsubmitinput)\<`TPayload`, `TRawPayload`, `TTurn`\>

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TPayload` | [`NormalizedChannelPayloadInput`](../core/dist.md#normalizedchannelpayloadinput) |
| `TRawPayload` | `unknown` |
| `TTurn` | `unknown` |

#### Properties

##### actor?

```ts
optional actor?: ChannelEventActorInput;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`actor`](#actor-1)

##### agentId?

```ts
optional agentId?: string;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`agentId`](#agentid-1)

##### app?

```ts
optional app?: unknown;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`app`](#app)

##### attachments?

```ts
optional attachments?: unknown[];
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`attachments`](#attachments-1)

##### binding?

```ts
optional binding?: ChannelEventBindingInput;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`binding`](#binding)

##### body?

```ts
optional body?: string;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`body`](#body-2)

##### channel

```ts
channel: ConversationChannelInput;
```

###### Overrides

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`channel`](#channel-1)

##### conversationContext?

```ts
optional conversationContext?: unknown;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`conversationContext`](#conversationcontext)

##### conversationId?

```ts
optional conversationId?: string;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`conversationId`](#conversationid-1)

##### createConversation?

```ts
optional createConversation?: CreateRuntimeConversationInput;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`createConversation`](#createconversation)

##### dedupeKey?

```ts
optional dedupeKey?: string;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`dedupeKey`](#dedupekey-1)

##### deliveryId?

```ts
optional deliveryId?: string;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`deliveryId`](#deliveryid)

##### direction?

```ts
optional direction?: "outbound" | "inbound" | "internal";
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`direction`](#direction-1)

##### event?

```ts
optional event?: ChannelEventShortcutEnvelope<TPayload, TRawPayload>;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`event`](#event)

##### eventId?

```ts
optional eventId?: string;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`eventId`](#eventid)

##### externalObjectIds?

```ts
optional externalObjectIds?: Record<string, string>;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`externalObjectIds`](#externalobjectids)

##### handling?

```ts
optional handling?: ChannelEventHandlingInput<TTurn>;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`handling`](#handling)

##### id?

```ts
optional id?: string;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`id`](#id-1)

##### idempotencyKey?

```ts
optional idempotencyKey?: string;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`idempotencyKey`](#idempotencykey-1)

##### identity?

```ts
optional identity?: ChannelEventIdentity;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`identity`](#identity-1)

##### identityKey?

```ts
optional identityKey?: string;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`identityKey`](#identitykey-1)

##### identityMetadata?

```ts
optional identityMetadata?: Record<string, unknown>;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`identityMetadata`](#identitymetadata-1)

##### identityStreamId?

```ts
optional identityStreamId?: string;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`identityStreamId`](#identitystreamid-1)

##### intent?

```ts
optional intent?: ChannelEventIntent;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`intent`](#intent-1)

##### kind?

```ts
optional kind?: ChannelEventNature;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`kind`](#kind-1)

##### message?

```ts
optional message?: string;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`message`](#message-1)

##### metadata?

```ts
optional metadata?: Record<string, unknown>;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`metadata`](#metadata-1)

##### nature?

```ts
optional nature?: ChannelEventNature;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`nature`](#nature-1)

##### occurredAt?

```ts
optional occurredAt?: string;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`occurredAt`](#occurredat-1)

##### payload?

```ts
optional payload?: TPayload;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`payload`](#payload-1)

##### provider?

```ts
optional provider?: string;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`provider`](#provider)

##### providerObject?

```ts
optional providerObject?: unknown;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`providerObject`](#providerobject-1)

##### providerPackageId?

```ts
optional providerPackageId?: string;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`providerPackageId`](#providerpackageid)

##### raw?

```ts
optional raw?: TRawPayload;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`raw`](#raw-1)

##### receivedAt?

```ts
optional receivedAt?: string;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`receivedAt`](#receivedat)

##### sequence?

```ts
optional sequence?: string | number;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`sequence`](#sequence-1)

##### signal?

```ts
optional signal?: AbortSignal;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`signal`](#signal)

##### source?

```ts
optional source?: ChannelEventSourceEvidence<TRawPayload>;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`source`](#source-1)

##### sourceId?

```ts
optional sourceId?: string;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`sourceId`](#sourceid)

##### sourceType?

```ts
optional sourceType?:
  | "application"
  | "provider-adapter"
  | "schedule-adapter"
  | "operator-surface";
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`sourceType`](#sourcetype)

##### status?

```ts
optional status?: string;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`status`](#status-2)

##### streamId?

```ts
optional streamId?: string;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`streamId`](#streamid)

##### subject?

```ts
optional subject?: string;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`subject`](#subject-1)

##### summary?

```ts
optional summary?: string;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`summary`](#summary-1)

##### text?

```ts
optional text?: string;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`text`](#text-1)

##### turn?

```ts
optional turn?: TTurn;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`turn`](#turn-1)

##### verified?

```ts
optional verified?: boolean;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`verified`](#verified)

#### Methods

##### onAssistantTextDelta()?

```ts
optional onAssistantTextDelta(textDelta): void | Promise<void>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `textDelta` | `string` |

###### Returns

`void` \| `Promise`\<`void`\>

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`onAssistantTextDelta`](#onassistanttextdelta)

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
  channel?: ConversationChannel;
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

###### channel?

```ts
optional channel?: ConversationChannel;
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

##### channel?

```ts
optional channel?: ConversationChannelInput;
```

##### client

```ts
client: CognideskClient;
```

##### conversationId?

```ts
optional conversationId?: string;
```

##### formatActivityLabel?

```ts
optional formatActivityLabel?: ChatActivityLabelFormatter;
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

### VoiceTurnChannelEventInput

#### Extends

- [`ChannelEventSubmitInput`](#channeleventsubmitinput)\<`TPayload`, `TRawPayload`, `TTurn`\>

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TPayload` | [`NormalizedChannelPayloadInput`](../core/dist.md#normalizedchannelpayloadinput) |
| `TRawPayload` | `unknown` |
| `TTurn` | `unknown` |

#### Properties

##### actor?

```ts
optional actor?: ChannelEventActorInput;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`actor`](#actor-1)

##### agentId?

```ts
optional agentId?: string;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`agentId`](#agentid-1)

##### app?

```ts
optional app?: unknown;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`app`](#app)

##### attachments?

```ts
optional attachments?: unknown[];
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`attachments`](#attachments-1)

##### binding?

```ts
optional binding?: ChannelEventBindingInput;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`binding`](#binding)

##### body?

```ts
optional body?: string;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`body`](#body-2)

##### channel?

```ts
optional channel?: ConversationChannelInput;
```

###### Overrides

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`channel`](#channel-1)

##### conversationContext?

```ts
optional conversationContext?: unknown;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`conversationContext`](#conversationcontext)

##### conversationId?

```ts
optional conversationId?: string;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`conversationId`](#conversationid-1)

##### createConversation?

```ts
optional createConversation?: CreateRuntimeConversationInput;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`createConversation`](#createconversation)

##### dedupeKey?

```ts
optional dedupeKey?: string;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`dedupeKey`](#dedupekey-1)

##### deliveryId?

```ts
optional deliveryId?: string;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`deliveryId`](#deliveryid)

##### direction?

```ts
optional direction?: "outbound" | "inbound" | "internal";
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`direction`](#direction-1)

##### event?

```ts
optional event?: ChannelEventShortcutEnvelope<TPayload, TRawPayload>;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`event`](#event)

##### eventId?

```ts
optional eventId?: string;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`eventId`](#eventid)

##### externalObjectIds?

```ts
optional externalObjectIds?: Record<string, string>;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`externalObjectIds`](#externalobjectids)

##### handling?

```ts
optional handling?: ChannelEventHandlingInput<TTurn>;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`handling`](#handling)

##### id?

```ts
optional id?: string;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`id`](#id-1)

##### idempotencyKey?

```ts
optional idempotencyKey?: string;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`idempotencyKey`](#idempotencykey-1)

##### identity?

```ts
optional identity?: ChannelEventIdentity;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`identity`](#identity-1)

##### identityKey?

```ts
optional identityKey?: string;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`identityKey`](#identitykey-1)

##### identityMetadata?

```ts
optional identityMetadata?: Record<string, unknown>;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`identityMetadata`](#identitymetadata-1)

##### identityStreamId?

```ts
optional identityStreamId?: string;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`identityStreamId`](#identitystreamid-1)

##### intent?

```ts
optional intent?: ChannelEventIntent;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`intent`](#intent-1)

##### kind?

```ts
optional kind?: ChannelEventNature;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`kind`](#kind-1)

##### message?

```ts
optional message?: string;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`message`](#message-1)

##### metadata?

```ts
optional metadata?: Record<string, unknown>;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`metadata`](#metadata-1)

##### nature?

```ts
optional nature?: ChannelEventNature;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`nature`](#nature-1)

##### occurredAt?

```ts
optional occurredAt?: string;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`occurredAt`](#occurredat-1)

##### payload?

```ts
optional payload?: TPayload;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`payload`](#payload-1)

##### provider?

```ts
optional provider?: string;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`provider`](#provider)

##### providerObject?

```ts
optional providerObject?: unknown;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`providerObject`](#providerobject-1)

##### providerPackageId?

```ts
optional providerPackageId?: string;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`providerPackageId`](#providerpackageid)

##### raw?

```ts
optional raw?: TRawPayload;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`raw`](#raw-1)

##### receivedAt?

```ts
optional receivedAt?: string;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`receivedAt`](#receivedat)

##### sequence?

```ts
optional sequence?: string | number;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`sequence`](#sequence-1)

##### signal?

```ts
optional signal?: AbortSignal;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`signal`](#signal)

##### source?

```ts
optional source?: ChannelEventSourceEvidence<TRawPayload>;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`source`](#source-1)

##### sourceId?

```ts
optional sourceId?: string;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`sourceId`](#sourceid)

##### sourceType?

```ts
optional sourceType?:
  | "application"
  | "provider-adapter"
  | "schedule-adapter"
  | "operator-surface";
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`sourceType`](#sourcetype)

##### status?

```ts
optional status?: string;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`status`](#status-2)

##### streamId?

```ts
optional streamId?: string;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`streamId`](#streamid)

##### subject?

```ts
optional subject?: string;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`subject`](#subject-1)

##### summary?

```ts
optional summary?: string;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`summary`](#summary-1)

##### text?

```ts
optional text?: string;
```

###### Overrides

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`text`](#text-1)

##### transcript?

```ts
optional transcript?: string;
```

##### turn?

```ts
optional turn?: TTurn;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`turn`](#turn-1)

##### verified?

```ts
optional verified?: boolean;
```

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`verified`](#verified)

#### Methods

##### onAssistantTextDelta()?

```ts
optional onAssistantTextDelta(textDelta): void | Promise<void>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `textDelta` | `string` |

###### Returns

`void` \| `Promise`\<`void`\>

###### Inherited from

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`onAssistantTextDelta`](#onassistanttextdelta)

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

### ChannelEventActorInput

```ts
type ChannelEventActorInput =
  | ChannelEventActor
  | ChannelEventActorType;
```

***

### ChannelEventRequestBody

```ts
type ChannelEventRequestBody<TPayload, TTurn> = Omit<HandleChannelEventInput<TPayload, TTurn>, "signal" | "onAssistantTextDelta">;
```

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TPayload` | [`NormalizedChannelPayloadInput`](../core/dist.md#normalizedchannelpayloadinput) |
| `TTurn` | `unknown` |

***

### ChatActivityLabelFormatter

```ts
type ChatActivityLabelFormatter = (input) => string | undefined;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`ChatActivityLabelInput`](#chatactivitylabelinput) |

#### Returns

`string` \| `undefined`

***

### ChatActivityLabelKind

```ts
type ChatActivityLabelKind =
  | "response"
  | "widget"
  | "intent"
  | "extraction"
  | "action"
  | "tool"
  | "knowledge";
```

***

### CognideskEventSourceFactory

```ts
type CognideskEventSourceFactory = (url, options) => EventSource;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `url` | `string` |
| `options` | [`CognideskEventSourceOptions`](#cognideskeventsourceoptions) |

#### Returns

`EventSource`

***

### CognideskRequestOperation

```ts
type CognideskRequestOperation =
  | "createConversation"
  | "listConversations"
  | "handleChannelEvent"
  | "receiveMessage"
  | "recordProviderUpdate"
  | "finalizeVoiceTurn"
  | "requestOutboundContact"
  | "submitScheduledEvent"
  | "resolveChannelOutput"
  | "recordChannelOutputResolution"
  | "requestChannelHandoff"
  | "requestChannelHandoffReview"
  | "startVoiceConversation"
  | "startVoiceSegment"
  | "sendMessage"
  | "listEvents"
  | "submitWidget"
  | "emitCustomEvent"
  | "emitJourneyEvent"
  | "emitIntermediateMessage"
  | "emitGeneratedPreamble"
  | "compactConversation"
  | "closeConversation"
  | "requestHandoff"
  | "resumeConversation"
  | "getSnapshot"
  | "replayConversation";
```

***

### CognideskRequestOptions

```ts
type CognideskRequestOptions = Omit<RequestInit, "body" | "method">;
```

***

### CognideskRequestOptionsResolver

```ts
type CognideskRequestOptionsResolver = (context) => CognideskRequestOptions | undefined;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `context` | [`CognideskRequestContext`](#cognideskrequestcontext) |

#### Returns

[`CognideskRequestOptions`](#cognideskrequestoptions) \| `undefined`

***

### ResolveChannelOutputInput

```ts
type ResolveChannelOutputInput<TPayload> = ResolveChannelOutputInput<TPayload>;
```

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TPayload` | `unknown` |

***

### ResolveChannelOutputResult

```ts
type ResolveChannelOutputResult<TPayload> = ResolveChannelOutputResult<TPayload>;
```

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TPayload` | `unknown` |

***

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

### createChannelEventInput()

```ts
function createChannelEventInput<TPayload, TRawPayload, TTurn>(input): HandleChannelEventInput<TPayload, TTurn>;
```

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TPayload` | [`NormalizedChannelPayloadInput`](../core/dist.md#normalizedchannelpayloadinput) |
| `TRawPayload` | `unknown` |
| `TTurn` | `unknown` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`ChannelEventSubmitInput`](#channeleventsubmitinput)\<`TPayload`, `TRawPayload`, `TTurn`\> |

#### Returns

[`HandleChannelEventInput`](../core/dist.md#handlechanneleventinput)\<`TPayload`, `TTurn`\>

***

### createChannelEventRequestBody()

```ts
function createChannelEventRequestBody<TPayload, TRawPayload, TTurn>(input): ChannelEventRequestBody<TPayload, TTurn>;
```

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TPayload` | [`NormalizedChannelPayloadInput`](../core/dist.md#normalizedchannelpayloadinput) |
| `TRawPayload` | `unknown` |
| `TTurn` | `unknown` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`ChannelEventSubmitInput`](#channeleventsubmitinput)\<`TPayload`, `TRawPayload`, `TTurn`\> |

#### Returns

[`ChannelEventRequestBody`](#channeleventrequestbody)\<`TPayload`, `TTurn`\>

***

### createChannelHandoffEventInput()

```ts
function createChannelHandoffEventInput<TPayload, TRawPayload, TTurn>(input): HandleChannelEventInput<TPayload, TTurn>;
```

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TPayload` | [`NormalizedChannelPayloadInput`](../core/dist.md#normalizedchannelpayloadinput) |
| `TRawPayload` | `unknown` |
| `TTurn` | `unknown` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`ChannelHandoffEventInput`](#channelhandoffeventinput)\<`TPayload`, `TRawPayload`, `TTurn`\> |

#### Returns

[`HandleChannelEventInput`](../core/dist.md#handlechanneleventinput)\<`TPayload`, `TTurn`\>

***

### createChannelHandoffReviewEventInput()

```ts
function createChannelHandoffReviewEventInput<TPayload, TRawPayload, TTurn>(input): HandleChannelEventInput<TPayload, TTurn>;
```

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TPayload` | [`NormalizedChannelPayloadInput`](../core/dist.md#normalizedchannelpayloadinput) |
| `TRawPayload` | `unknown` |
| `TTurn` | `unknown` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`ChannelHandoffReviewEventInput`](#channelhandoffrevieweventinput)\<`TPayload`, `TRawPayload`, `TTurn`\> |

#### Returns

[`HandleChannelEventInput`](../core/dist.md#handlechanneleventinput)\<`TPayload`, `TTurn`\>

***

### createChannelOutputResolutionEventInput()

```ts
function createChannelOutputResolutionEventInput<TPayload, TRawPayload, TTurn>(input): HandleChannelEventInput<TPayload, TTurn>;
```

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TPayload` | [`NormalizedChannelPayloadInput`](../core/dist.md#normalizedchannelpayloadinput) |
| `TRawPayload` | `unknown` |
| `TTurn` | `unknown` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`ChannelOutputResolutionEventInput`](#channeloutputresolutioneventinput)\<`TPayload`, `TRawPayload`, `TTurn`\> |

#### Returns

[`HandleChannelEventInput`](../core/dist.md#handlechanneleventinput)\<`TPayload`, `TTurn`\>

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

### createMessageChannelEventInput()

```ts
function createMessageChannelEventInput<TPayload, TRawPayload, TTurn>(input): HandleChannelEventInput<TPayload, TTurn>;
```

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TPayload` | [`NormalizedChannelPayloadInput`](../core/dist.md#normalizedchannelpayloadinput) |
| `TRawPayload` | `unknown` |
| `TTurn` | `unknown` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`ChannelMessageEventInput`](#channelmessageeventinput)\<`TPayload`, `TRawPayload`, `TTurn`\> |

#### Returns

[`HandleChannelEventInput`](../core/dist.md#handlechanneleventinput)\<`TPayload`, `TTurn`\>

***

### createOutboundContactChannelEventInput()

```ts
function createOutboundContactChannelEventInput<TPayload, TRawPayload, TTurn>(input): HandleChannelEventInput<TPayload, TTurn>;
```

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TPayload` | [`NormalizedChannelPayloadInput`](../core/dist.md#normalizedchannelpayloadinput) |
| `TRawPayload` | `unknown` |
| `TTurn` | `unknown` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`OutboundContactChannelEventInput`](#outboundcontactchanneleventinput)\<`TPayload`, `TRawPayload`, `TTurn`\> |

#### Returns

[`HandleChannelEventInput`](../core/dist.md#handlechanneleventinput)\<`TPayload`, `TTurn`\>

***

### createProviderObjectChannelEventInput()

```ts
function createProviderObjectChannelEventInput<TPayload, TRawPayload, TTurn>(input): HandleChannelEventInput<TPayload, TTurn>;
```

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TPayload` | [`NormalizedChannelPayloadInput`](../core/dist.md#normalizedchannelpayloadinput) |
| `TRawPayload` | `unknown` |
| `TTurn` | `unknown` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`ProviderObjectChannelEventInput`](#providerobjectchanneleventinput)\<`TPayload`, `TRawPayload`, `TTurn`\> |

#### Returns

[`HandleChannelEventInput`](../core/dist.md#handlechanneleventinput)\<`TPayload`, `TTurn`\>

***

### createScheduledChannelEventInput()

```ts
function createScheduledChannelEventInput<TPayload, TRawPayload, TTurn>(input): HandleChannelEventInput<TPayload, TTurn>;
```

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TPayload` | [`NormalizedChannelPayloadInput`](../core/dist.md#normalizedchannelpayloadinput) |
| `TRawPayload` | `unknown` |
| `TTurn` | `unknown` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`ScheduledChannelEventInput`](#scheduledchanneleventinput)\<`TPayload`, `TRawPayload`, `TTurn`\> |

#### Returns

[`HandleChannelEventInput`](../core/dist.md#handlechanneleventinput)\<`TPayload`, `TTurn`\>

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

### createVoiceTurnChannelEventInput()

```ts
function createVoiceTurnChannelEventInput<TPayload, TRawPayload, TTurn>(input): HandleChannelEventInput<TPayload, TTurn>;
```

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TPayload` | [`NormalizedChannelPayloadInput`](../core/dist.md#normalizedchannelpayloadinput) |
| `TRawPayload` | `unknown` |
| `TTurn` | `unknown` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`VoiceTurnChannelEventInput`](#voiceturnchanneleventinput)\<`TPayload`, `TRawPayload`, `TTurn`\> |

#### Returns

[`HandleChannelEventInput`](../core/dist.md#handlechanneleventinput)\<`TPayload`, `TTurn`\>

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
function reduceChatRuntimeEvent(
   state,
   event,
   options?): ChatEventReducerState;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `state` | [`ChatEventReducerState`](#chateventreducerstate) |
| `event` | [`RuntimeEvent`](../core/dist.md#runtimeevent) |
| `options?` | [`ChatEventReducerOptions`](#chateventreduceroptions) |

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

## References

### ChannelEventActor

Re-exports [ChannelEventActor](../core/dist.md#channeleventactor)

***

### ChannelEventActorType

Re-exports [ChannelEventActorType](../core/dist.md#channeleventactortype-1)

***

### ChannelEventBindingOutcome

Re-exports [ChannelEventBindingOutcome](../core/dist.md#channeleventbindingoutcome)

***

### ChannelEventDirection

Re-exports [ChannelEventDirection](../core/dist.md#channeleventdirection)

***

### ChannelEventEnvelope

Re-exports [ChannelEventEnvelope](../core/dist.md#channeleventenvelope)

***

### ChannelEventEnvelopeInput

Re-exports [ChannelEventEnvelopeInput](../core/dist.md#channeleventenvelopeinput)

***

### ChannelEventHandlingDisposition

Re-exports [ChannelEventHandlingDisposition](../core/dist.md#channeleventhandlingdisposition)

***

### ChannelEventIdentity

Re-exports [ChannelEventIdentity](../core/dist.md#channeleventidentity)

***

### ChannelEventIntakeResult

Re-exports [ChannelEventIntakeResult](../core/dist.md#channeleventintakeresult)

***

### ChannelEventIntakeStatus

Re-exports [ChannelEventIntakeStatus](../core/dist.md#channeleventintakestatus)

***

### ChannelEventIntent

Re-exports [ChannelEventIntent](../core/dist.md#channeleventintent)

***

### ChannelEventKind

Re-exports [ChannelEventKind](../core/dist.md#channeleventkind)

***

### ChannelEventNature

Re-exports [ChannelEventNature](../core/dist.md#channeleventnature)

***

### ChannelEventSourceEvidence

Re-exports [ChannelEventSourceEvidence](../core/dist.md#channeleventsourceevidence)

***

### ChannelEventSourceType

Re-exports [ChannelEventSourceType](../core/dist.md#channeleventsourcetype)

***

### ChannelOutputDeliveryMode

Re-exports [ChannelOutputDeliveryMode](../core/dist.md#channeloutputdeliverymode)

***

### ChannelOutputIntent

Re-exports [ChannelOutputIntent](../core/dist.md#channeloutputintent)

***

### ChannelOutputIntentInput

Re-exports [ChannelOutputIntentInput](../core/dist.md#channeloutputintentinput)

***

### ChannelOutputIntentKind

Re-exports [ChannelOutputIntentKind](../core/dist.md#channeloutputintentkind-1)

***

### ChannelOutputResolution

Re-exports [ChannelOutputResolution](../core/dist.md#channeloutputresolution)

***

### ChannelOutputResolutionDecision

Re-exports [ChannelOutputResolutionDecision](../core/dist.md#channeloutputresolutiondecision)

***

### ChannelOutputResolutionOutcome

Re-exports [ChannelOutputResolutionOutcome](../core/dist.md#channeloutputresolutionoutcome-1)

***

### ChannelOutputResolutionPayload

Re-exports [ChannelOutputResolutionPayload](../core/dist.md#channeloutputresolutionpayload-1)

***

### ChannelOutputResolutionStatus

Re-exports [ChannelOutputResolutionStatus](../core/dist.md#channeloutputresolutionstatus-1)

***

### ChannelSourceEvidence

Re-exports [ChannelSourceEvidence](../core/dist.md#channelsourceevidence)

***

### HandleChannelEventInput

Re-exports [HandleChannelEventInput](../core/dist.md#handlechanneleventinput)

***

### HandleChannelEventResult

Re-exports [HandleChannelEventResult](../core/dist.md#handlechanneleventresult)

***

### NormalizedChannelPayload

Re-exports [NormalizedChannelPayload](../core/dist.md#normalizedchannelpayload)

***

### NormalizedChannelPayloadInput

Re-exports [NormalizedChannelPayloadInput](../core/dist.md#normalizedchannelpayloadinput)
