# packages/http/dist

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

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`body`](#body-1)

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

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`status`](#status-1)

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

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`body`](#body-1)

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

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`status`](#status-1)

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

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`body`](#body-1)

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

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`status`](#status-1)

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

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`body`](#body-1)

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

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`status`](#status-1)

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

### CognideskHttpAuthorizeInput

#### Properties

##### path

```ts
path: string;
```

Request path after the configured basePath has been stripped.

##### request

```ts
request: Request;
```

Original request before the HTTP handler reads the body or calls the runtime.

##### url

```ts
url: URL;
```

Parsed request URL.

***

### CognideskHttpCorsOptions

#### Properties

##### allowedHeaders?

```ts
optional allowedHeaders?: string | readonly string[];
```

Defaults to content-type and authorization.

##### credentials?

```ts
optional credentials?: boolean;
```

##### exposedHeaders?

```ts
optional exposedHeaders?: string | readonly string[];
```

##### maxAgeSeconds?

```ts
optional maxAgeSeconds?: number;
```

##### methods?

```ts
optional methods?: string | readonly string[];
```

Defaults to GET, POST, and OPTIONS.

##### origins

```ts
origins: string | readonly string[];
```

Exact browser origins allowed to call the handler, for example "https://app.example.com".

***

### CognideskHttpHandler

#### Methods

##### handle()

```ts
handle(request): Promise<Response>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `request` | `Request` |

###### Returns

`Promise`\<`Response`\>

***

### CognideskHttpHandlerOptions

#### Properties

##### agentId?

```ts
optional agentId?: string;
```

##### authorize?

```ts
optional authorize?: CognideskHttpAuthorize;
```

Authorize non-preflight requests before the runtime is called. Return true
to allow, false for a default 401, or a Response for a custom denial.

##### basePath?

```ts
optional basePath?: string;
```

##### cors?

```ts
optional cors?: CognideskHttpCorsConfig;
```

Enable CORS. `true` allows any origin; prefer an object
with explicit origins for browser-facing deployments.

##### customEvents?

```ts
optional customEvents?: CustomRuntimeEventDefinition<string, ZodType<unknown, unknown, $ZodTypeInternals<unknown, unknown>>>[];
```

##### exposeInternalErrors?

```ts
optional exposeInternalErrors?: boolean;
```

Include raw thrown Error messages in 500 responses. Defaults to false so
internal runtime details are not exposed to HTTP clients.

##### journeyEvents?

```ts
optional journeyEvents?: JourneyEventDefinition<string, ZodType<unknown, unknown, $ZodTypeInternals<unknown, unknown>>>[];
```

##### runtime

```ts
runtime:
  | CognideskRuntime
  | CognideskHttpRuntime;
```

##### ssePollIntervalMs?

```ts
optional ssePollIntervalMs?: number;
```

##### voice?

```ts
optional voice?: VoiceSocketHandshake;
```

***

### CognideskHttpRuntime

#### Methods

##### closeConversation()?

```ts
optional closeConversation(conversationId, reason?): Promise<ConversationRecord<unknown>>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `conversationId` | `string` |
| `reason?` | `string` |

###### Returns

`Promise`\<[`ConversationRecord`](../core/dist.md#conversationrecord)\<`unknown`\>\>

##### compactConversation()?

```ts
optional compactConversation(input): Promise<CompactConversationResult<unknown>>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`CompactConversationInput`](../core/dist.md#compactconversationinput) |

###### Returns

`Promise`\<[`CompactConversationResult`](../core/dist.md#compactconversationresult)\<`unknown`\>\>

##### createConversation()

```ts
createConversation(input): Promise<ConversationRecord<unknown>>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`CreateRuntimeConversationInput`](../core/dist.md#createruntimeconversationinput) |

###### Returns

`Promise`\<[`ConversationRecord`](../core/dist.md#conversationrecord)\<`unknown`\>\>

##### emitCustomEvent()?

```ts
optional emitCustomEvent(input): Promise<RuntimeEvent>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | \{ `conversationId`: `string`; `event`: [`CustomRuntimeEventDefinition`](../core/dist.md#customruntimeeventdefinition); `payload`: `unknown`; \} |
| `input.conversationId` | `string` |
| `input.event` | [`CustomRuntimeEventDefinition`](../core/dist.md#customruntimeeventdefinition) |
| `input.payload` | `unknown` |

###### Returns

`Promise`\<[`RuntimeEvent`](../core/dist.md#runtimeevent)\>

##### emitGeneratedPreamble()?

```ts
optional emitGeneratedPreamble(input): Promise<{
  events: RuntimeEvent[];
  text: string;
}>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`EmitGeneratedPreambleInput`](../core/dist.md#emitgeneratedpreambleinput) |

###### Returns

`Promise`\<\{
  `events`: [`RuntimeEvent`](../core/dist.md#runtimeevent)[];
  `text`: `string`;
\}\>

##### emitIntermediateMessage()?

```ts
optional emitIntermediateMessage(input): Promise<{
  events: RuntimeEvent[];
}>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`EmitIntermediateMessageInput`](../core/dist.md#emitintermediatemessageinput) |

###### Returns

`Promise`\<\{
  `events`: [`RuntimeEvent`](../core/dist.md#runtimeevent)[];
\}\>

##### emitJourneyEvent()?

```ts
optional emitJourneyEvent(input): Promise<EmitJourneyEventResult>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | \{ `app?`: `unknown`; `conversationId`: `string`; `event`: [`JourneyEventDefinition`](../core/dist.md#journeyeventdefinition); `payload`: `unknown`; `routing?`: `"none"` \| `"activeJourneyOnly"` \| `"full"` \| `"targeted"`; `signal?`: `AbortSignal`; `target?`: \{ `journeyId?`: `string`; `stateId?`: `string`; \}; \} |
| `input.app?` | `unknown` |
| `input.conversationId` | `string` |
| `input.event` | [`JourneyEventDefinition`](../core/dist.md#journeyeventdefinition) |
| `input.payload` | `unknown` |
| `input.routing?` | `"none"` \| `"activeJourneyOnly"` \| `"full"` \| `"targeted"` |
| `input.signal?` | `AbortSignal` |
| `input.target?` | \{ `journeyId?`: `string`; `stateId?`: `string`; \} |
| `input.target.journeyId?` | `string` |
| `input.target.stateId?` | `string` |

###### Returns

`Promise`\<[`EmitJourneyEventResult`](../core/dist.md#emitjourneyeventresult)\>

##### getSnapshot()?

```ts
optional getSnapshot(conversationId): Promise<RuntimeSnapshot>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `conversationId` | `string` |

###### Returns

`Promise`\<[`RuntimeSnapshot`](../core/dist.md#runtimesnapshot)\>

##### handleChannelEvent()?

```ts
optional handleChannelEvent(input): Promise<HandleChannelEventResult<unknown>>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`HandleChannelEventInput`](../core/dist.md#handlechanneleventinput) |

###### Returns

`Promise`\<[`HandleChannelEventResult`](../core/dist.md#handlechanneleventresult)\<`unknown`\>\>

##### handleUserMessage()

```ts
handleUserMessage(input): Promise<HandleUserMessageResult>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`HandleUserMessageInput`](../core/dist.md#handleusermessageinput) |

###### Returns

`Promise`\<[`HandleUserMessageResult`](../core/dist.md#handleusermessageresult)\>

##### listConversations()?

```ts
optional listConversations(input?): Promise<ConversationRecord<unknown>[]>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input?` | [`ListRuntimeConversationsOptions`](../core/dist.md#listruntimeconversationsoptions) |

###### Returns

`Promise`\<[`ConversationRecord`](../core/dist.md#conversationrecord)\<`unknown`\>[]\>

##### listEvents()

```ts
listEvents(conversationId, afterOffset?): Promise<RuntimeEvent[]>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `conversationId` | `string` |
| `afterOffset?` | `number` |

###### Returns

`Promise`\<[`RuntimeEvent`](../core/dist.md#runtimeevent)[]\>

##### replayConversation()?

```ts
optional replayConversation(input): Promise<ReplayConversationResult>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`ReplayConversationInput`](../core/dist.md#replayconversationinput) |

###### Returns

`Promise`\<[`ReplayConversationResult`](../core/dist.md#replayconversationresult)\>

##### requestHandoff()?

```ts
optional requestHandoff(input): Promise<{
  conversation: ConversationRecord;
  event: RuntimeEvent;
}>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`RequestHandoffInput`](../core/dist.md#requesthandoffinput) |

###### Returns

`Promise`\<\{
  `conversation`: [`ConversationRecord`](../core/dist.md#conversationrecord);
  `event`: [`RuntimeEvent`](../core/dist.md#runtimeevent);
\}\>

##### resolveChannelOutput()?

```ts
optional resolveChannelOutput(input): Promise<ResolveChannelOutputResult<unknown>>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`ResolveChannelOutputInput`](../core/dist.md#resolvechanneloutputinput) |

###### Returns

`Promise`\<[`ResolveChannelOutputResult`](../core/dist.md#resolvechanneloutputresult)\<`unknown`\>\>

##### resumeConversation()?

```ts
optional resumeConversation(input): Promise<{
  conversation: ConversationRecord;
  event: RuntimeEvent;
}>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`ResumeConversationInput`](../core/dist.md#resumeconversationinput) |

###### Returns

`Promise`\<\{
  `conversation`: [`ConversationRecord`](../core/dist.md#conversationrecord);
  `event`: [`RuntimeEvent`](../core/dist.md#runtimeevent);
\}\>

##### startVoiceConversation()?

```ts
optional startVoiceConversation(input): Promise<StartVoiceResult>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`StartVoiceConversationInput`](../core/dist.md#startvoiceconversationinput) |

###### Returns

`Promise`\<[`StartVoiceResult`](../core/dist.md#startvoiceresult)\>

##### startVoiceSegment()?

```ts
optional startVoiceSegment(input): Promise<StartVoiceResult>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`StartVoiceSegmentInput`](../core/dist.md#startvoicesegmentinput) |

###### Returns

`Promise`\<[`StartVoiceResult`](../core/dist.md#startvoiceresult)\>

##### submitWidget()?

```ts
optional submitWidget(input): Promise<RuntimeEvent>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`SubmitWidgetInput`](../core/dist.md#submitwidgetinput) |

###### Returns

`Promise`\<[`RuntimeEvent`](../core/dist.md#runtimeevent)\>

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

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`body`](#body-1)

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

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`status`](#status-1)

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

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`body`](#body-1)

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

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`status`](#status-1)

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

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`body`](#body-1)

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

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`status`](#status-1)

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

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`body`](#body-1)

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

[`ChannelEventSubmitInput`](#channeleventsubmitinput).[`status`](#status-1)

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

### CognideskHttpAuthorize

```ts
type CognideskHttpAuthorize = (input) =>
  | CognideskHttpAuthorizeResult
| Promise<CognideskHttpAuthorizeResult>;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`CognideskHttpAuthorizeInput`](#cognideskhttpauthorizeinput) |

#### Returns

  \| [`CognideskHttpAuthorizeResult`](#cognideskhttpauthorizeresult)
  \| `Promise`\<[`CognideskHttpAuthorizeResult`](#cognideskhttpauthorizeresult)\>

***

### CognideskHttpAuthorizeResult

```ts
type CognideskHttpAuthorizeResult = boolean | Response;
```

***

### CognideskHttpCorsConfig

```ts
type CognideskHttpCorsConfig = boolean | CognideskHttpCorsOptions;
```

***

### CreateChannelEventBody

```ts
type CreateChannelEventBody = ChannelEventSubmitInput;
```

***

### ResolveChannelOutputBody

```ts
type ResolveChannelOutputBody<TPayload> = Omit<ResolveChannelOutputInput<TPayload>, "signal">;
```

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TPayload` | `unknown` |

## Functions

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

### createCognideskHttpHandler()

```ts
function createCognideskHttpHandler(options): CognideskHttpHandler;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`CognideskHttpHandlerOptions`](#cognideskhttphandleroptions) |

#### Returns

[`CognideskHttpHandler`](#cognideskhttphandler)

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

***

### ResolveChannelOutputInput

Re-exports [ResolveChannelOutputInput](../core/dist.md#resolvechanneloutputinput)

***

### ResolveChannelOutputResult

Re-exports [ResolveChannelOutputResult](../core/dist.md#resolvechanneloutputresult)
