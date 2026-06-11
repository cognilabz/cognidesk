# http/dist

## Interfaces

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

##### basePath?

```ts
optional basePath?: string;
```

##### cors?

```ts
optional cors?: boolean;
```

##### customEvents?

```ts
optional customEvents?: CustomRuntimeEventDefinition<string, ZodType<unknown, unknown, $ZodTypeInternals<unknown, unknown>>>[];
```

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

## Functions

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
