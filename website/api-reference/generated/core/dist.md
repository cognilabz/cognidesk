# core/dist

## Classes

### AgentBuilder

#### Type Parameters

| Type Parameter |
| ------ |
| `TId` *extends* `string` |

#### Constructors

##### Constructor

```ts
new AgentBuilder<TId>(id, options): AgentBuilder<TId>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `TId` |
| `options` | [`AgentOptions`](#agentoptions) |

###### Returns

[`AgentBuilder`](#agentbuilder)\<`TId`\>

#### Properties

##### customEvents

```ts
readonly customEvents: CapabilityScope<AnyCustomRuntimeEvent>;
```

##### id

```ts
readonly id: TId;
```

##### knowledge

```ts
readonly knowledge: CapabilityScope<KnowledgeSource<string, ZodType<unknown, unknown, $ZodTypeInternals<unknown, unknown>>, ZodType<unknown, unknown, $ZodTypeInternals<unknown, unknown>>>>;
```

##### options

```ts
readonly options: AgentOptions;
```

##### tools

```ts
readonly tools: CapabilityScope<AnyTool>;
```

##### widgets

```ts
readonly widgets: WidgetDefinition<string, ZodType<unknown, unknown, $ZodTypeInternals<unknown, unknown>>, ZodType<unknown, unknown, $ZodTypeInternals<unknown, unknown>>>[];
```

#### Methods

##### compile()

```ts
compile(): CompiledAgent;
```

###### Returns

[`CompiledAgent`](#compiledagent)

##### delegationJourney()

```ts
delegationJourney<TJourneyId>(id, options): DelegationJourneyBuilder<TJourneyId>;
```

###### Type Parameters

| Type Parameter |
| ------ |
| `TJourneyId` *extends* `string` |

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `TJourneyId` |
| `options` | [`DelegationJourneyOptions`](#delegationjourneyoptions) |

###### Returns

[`DelegationJourneyBuilder`](#delegationjourneybuilder)\<`TJourneyId`\>

##### registerWidget()

```ts
registerWidget(widgetDefinition): this;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `widgetDefinition` | [`WidgetDefinition`](#widgetdefinition) |

###### Returns

`this`

##### stateMachineJourney()

```ts
stateMachineJourney<TJourneyId, TContextSchema>(id, options): StateMachineJourneyBuilder<TJourneyId, TContextSchema>;
```

###### Type Parameters

| Type Parameter |
| ------ |
| `TJourneyId` *extends* `string` |
| `TContextSchema` *extends* [`ObjectSchema`](#objectschema) |

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `TJourneyId` |
| `options` | [`StateMachineJourneyOptions`](#statemachinejourneyoptions)\<`TContextSchema`\> |

###### Returns

[`StateMachineJourneyBuilder`](#statemachinejourneybuilder)\<`TJourneyId`, `TContextSchema`\>

##### voice()

```ts
voice(options): this;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`VoiceProfile`](#voiceprofile) |

###### Returns

`this`

***

### CapabilityScope

#### Type Parameters

| Type Parameter |
| ------ |
| `TItem` |

#### Constructors

##### Constructor

```ts
new CapabilityScope<TItem>(): CapabilityScope<TItem>;
```

###### Returns

[`CapabilityScope`](#capabilityscope)\<`TItem`\>

#### Methods

##### add()

```ts
add(...items): this;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`items` | `TItem`[] |

###### Returns

`this`

##### exclude()

```ts
exclude(...items): this;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`items` | `TItem`[] |

###### Returns

`this`

##### list()

```ts
list(inherited?): TItem[];
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `inherited?` | `TItem`[] |

###### Returns

`TItem`[]

##### only()

```ts
only(...items): this;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`items` | `TItem`[] |

###### Returns

`this`

***

### CognideskRuntime

#### Constructors

##### Constructor

```ts
new CognideskRuntime(options): CognideskRuntime;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`RuntimeOptions`](#runtimeoptions) |

###### Returns

[`CognideskRuntime`](#cognideskruntime)

#### Properties

##### debug

```ts
readonly debug: {
  explainTurn: <TTurn>(input) => Promise<ExplainTurnResult>;
};
```

###### explainTurn

```ts
explainTurn: <TTurn>(input) => Promise<ExplainTurnResult>;
```

###### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TTurn` | `unknown` |

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`ExplainTurnInput`](#explainturninput)\<`TTurn`\> |

###### Returns

`Promise`\<[`ExplainTurnResult`](#explainturnresult)\>

#### Methods

##### closeConversation()

```ts
closeConversation(conversationId, reason?): Promise<ConversationRecord<unknown>>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `conversationId` | `string` |
| `reason?` | `string` |

###### Returns

`Promise`\<[`ConversationRecord`](#conversationrecord)\<`unknown`\>\>

##### commitVoiceTranscript()

```ts
commitVoiceTranscript(input): Promise<CommitVoiceTranscriptResult>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`CommitVoiceTranscriptInput`](#commitvoicetranscriptinput) |

###### Returns

`Promise`\<[`CommitVoiceTranscriptResult`](#commitvoicetranscriptresult)\>

##### compactConversation()

```ts
compactConversation<TSummary>(input): Promise<CompactConversationResult<TSummary>>;
```

###### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TSummary` | \{ `activeCommitments`: `string`[]; `openQuestions`: `string`[]; `stableFacts`: `string`[]; `summary`: `string`; \} |

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`CompactConversationInput`](#compactconversationinput) |

###### Returns

`Promise`\<[`CompactConversationResult`](#compactconversationresult)\<`TSummary`\>\>

##### configurationSource()

```ts
configurationSource(): RuntimeConfigurationSource;
```

###### Returns

[`RuntimeConfigurationSource`](#runtimeconfigurationsource)

##### createConversation()

```ts
createConversation<TConversationContext>(input): Promise<ConversationRecord<TConversationContext>>;
```

###### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TConversationContext` | `unknown` |

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`CreateRuntimeConversationInput`](#createruntimeconversationinput)\<`TConversationContext`\> |

###### Returns

`Promise`\<[`ConversationRecord`](#conversationrecord)\<`TConversationContext`\>\>

##### emit()

```ts
emit<TEvent>(event): Promise<RuntimeEvent>;
```

###### Type Parameters

| Type Parameter |
| ------ |
| `TEvent` *extends* [`RuntimeEventInput`](#runtimeeventinput)\< \| `"error"` \| `"schedule.due"` \| `"message.started"` \| `"message.delta"` \| `"message.completed"` \| `"message.generated"` \| `"message.aborted"` \| `"channel.event.received"` \| `"channel.received"` \| `"channel.sent"` \| `"channel.delivery.updated"` \| `"channel.thread.linked"` \| `"voice.segment.started"` \| `"voice.segment.ended"` \| `"voice.connection.failed"` \| `"voice.interrupted"` \| `"voice.recording.started"` \| `"voice.recording.completed"` \| `"voice.transcript.committed"` \| `"journey.candidates.retrieved"` \| `"journey.matched"` \| `"journey.activated"` \| `"journey.completed"` \| `"journey.guard.denied"` \| `"journey.event.emitted"` \| `"journey.state.entered"` \| `"journey.extraction.proposed"` \| `"journey.extraction.accepted"` \| `"action.started"` \| `"action.completed"` \| `"tool.started"` \| `"tool.completed"` \| `"approval.requested"` \| `"approval.resolved"` \| `"knowledge.retrieved"` \| `"context.resolved"` \| `"policy.evaluated"` \| `"ui.prompted"` \| `"ui.submitted"` \| `"conversation.compaction.started"` \| `"conversation.compaction.completed"` \| `"handoff.requested"` \| `"handoff.completed"` \| `"handoff.resumed"` \| `"conversation.closed"` \| `"eval.completed"` \| `` `custom.${string}` ``\> |

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `TEvent` |

###### Returns

`Promise`\<[`RuntimeEvent`](#runtimeevent)\>

##### emitCustomEvent()

```ts
emitCustomEvent<TEvent>(input): Promise<RuntimeEvent>;
```

###### Type Parameters

| Type Parameter |
| ------ |
| `TEvent` *extends* [`CustomRuntimeEventDefinition`](#customruntimeeventdefinition)\<`string`, `ZodType`\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\>\> |

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`EmitCustomEventInput`](#emitcustomeventinput)\<`TEvent`\> |

###### Returns

`Promise`\<[`RuntimeEvent`](#runtimeevent)\>

##### emitGeneratedPreamble()

```ts
emitGeneratedPreamble(input): Promise<EmitGeneratedPreambleResult>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`EmitGeneratedPreambleInput`](#emitgeneratedpreambleinput) |

###### Returns

`Promise`\<[`EmitGeneratedPreambleResult`](#emitgeneratedpreambleresult)\>

##### emitIntermediateMessage()

```ts
emitIntermediateMessage(input): Promise<{
  events: RuntimeEvent[];
}>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`EmitIntermediateMessageInput`](#emitintermediatemessageinput) |

###### Returns

`Promise`\<\{
  `events`: [`RuntimeEvent`](#runtimeevent)[];
\}\>

##### emitJourneyEvent()

```ts
emitJourneyEvent<TEvent>(input): Promise<EmitJourneyEventResult>;
```

###### Type Parameters

| Type Parameter |
| ------ |
| `TEvent` *extends* [`JourneyEventDefinition`](#journeyeventdefinition)\<`string`, `ZodType`\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\>\> |

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`EmitJourneyEventInput`](#emitjourneyeventinput)\<`TEvent`\> |

###### Returns

`Promise`\<[`EmitJourneyEventResult`](#emitjourneyeventresult)\>

##### emitScheduledEvent()

```ts
emitScheduledEvent<TEvent>(input): Promise<EmitScheduledEventResult>;
```

###### Type Parameters

| Type Parameter |
| ------ |
| `TEvent` *extends* [`JourneyEventDefinition`](#journeyeventdefinition)\<`string`, `ZodType`\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\>\> |

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`EmitScheduledEventInput`](#emitscheduledeventinput)\<`TEvent`\> |

###### Returns

`Promise`\<[`EmitScheduledEventResult`](#emitscheduledeventresult)\>

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

`Promise`\<[`RuntimeEvent`](#runtimeevent)\>

##### getSnapshot()

```ts
getSnapshot(conversationId): Promise<RuntimeSnapshot>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `conversationId` | `string` |

###### Returns

`Promise`\<[`RuntimeSnapshot`](#runtimesnapshot)\>

##### handleChannelEvent()

```ts
handleChannelEvent<TPayload, TTurn>(input): Promise<HandleChannelEventResult<TPayload>>;
```

###### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TPayload` | `unknown` |
| `TTurn` | `unknown` |

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`HandleChannelEventInput`](#handlechanneleventinput)\<`TPayload`, `TTurn`\> |

###### Returns

`Promise`\<[`HandleChannelEventResult`](#handlechanneleventresult)\<`TPayload`\>\>

##### handleUserMessage()

```ts
handleUserMessage<TTurn>(input): Promise<HandleUserMessageResult>;
```

###### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TTurn` | `unknown` |

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`HandleUserMessageInput`](#handleusermessageinput)\<`TTurn`\> |

###### Returns

`Promise`\<[`HandleUserMessageResult`](#handleusermessageresult)\>

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
| `input` | [`HandleVoiceUserMessageInput`](#handlevoiceusermessageinput)\<`TTurn`\> |

###### Returns

`Promise`\<[`HandleVoiceUserMessageResult`](#handlevoiceusermessageresult)\>

##### initialize()

```ts
initialize(): Promise<void>;
```

###### Returns

`Promise`\<`void`\>

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

`Promise`\<[`RuntimeEvent`](#runtimeevent)[]\>

##### listPendingSupportActions()

```ts
listPendingSupportActions(input): Promise<PendingSupportAction[]>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | \| `string` \| [`ListPendingSupportActionsInput`](#listpendingsupportactionsinput) |

###### Returns

`Promise`\<[`PendingSupportAction`](#pendingsupportaction)[]\>

##### recordVoiceInterruption()

```ts
recordVoiceInterruption(input): Promise<RuntimeEvent>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`RecordVoiceInterruptionInput`](#recordvoiceinterruptioninput) |

###### Returns

`Promise`\<[`RuntimeEvent`](#runtimeevent)\>

##### replayConversation()

```ts
replayConversation(input): Promise<ReplayConversationResult>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`ReplayConversationInput`](#replayconversationinput) |

###### Returns

`Promise`\<[`ReplayConversationResult`](#replayconversationresult)\>

##### requestChannelHandoff()

```ts
requestChannelHandoff<TPayload>(input): Promise<HandleChannelEventResult<TPayload>>;
```

###### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TPayload` | `unknown` |

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`RequestChannelHandoffInput`](#requestchannelhandoffinput)\<`TPayload`\> |

###### Returns

`Promise`\<[`HandleChannelEventResult`](#handlechanneleventresult)\<`TPayload`\>\>

##### requestChannelHandoffReview()

```ts
requestChannelHandoffReview<TPayload>(input): Promise<HandleChannelEventResult<TPayload>>;
```

###### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TPayload` | `unknown` |

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`RequestChannelHandoffReviewInput`](#requestchannelhandoffreviewinput)\<`TPayload`\> |

###### Returns

`Promise`\<[`HandleChannelEventResult`](#handlechanneleventresult)\<`TPayload`\>\>

##### requestHandoff()

```ts
requestHandoff(input): Promise<{
  conversation: ConversationRecord<unknown>;
  event: RuntimeEvent;
}>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`RequestHandoffInput`](#requesthandoffinput) |

###### Returns

`Promise`\<\{
  `conversation`: [`ConversationRecord`](#conversationrecord)\<`unknown`\>;
  `event`: [`RuntimeEvent`](#runtimeevent);
\}\>

##### requestOutboundContact()

```ts
requestOutboundContact<TPayload>(input): Promise<HandleChannelEventResult<TPayload>>;
```

###### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TPayload` | `unknown` |

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`RequestOutboundContactInput`](#requestoutboundcontactinput)\<`TPayload`\> |

###### Returns

`Promise`\<[`HandleChannelEventResult`](#handlechanneleventresult)\<`TPayload`\>\>

##### resolveChannelOutput()

```ts
resolveChannelOutput<TPayload>(input): Promise<ResolveChannelOutputResult<TPayload>>;
```

###### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TPayload` | `unknown` |

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`ResolveChannelOutputInput`](#resolvechanneloutputinput)\<`TPayload`\> |

###### Returns

`Promise`\<[`ResolveChannelOutputResult`](#resolvechanneloutputresult)\<`TPayload`\>\>

##### resolvePendingSupportAction()

```ts
resolvePendingSupportAction(input): Promise<ResolvePendingSupportActionResult>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`ResolvePendingSupportActionInput`](#resolvependingsupportactioninput) |

###### Returns

`Promise`\<[`ResolvePendingSupportActionResult`](#resolvependingsupportactionresult)\>

##### resumeConversation()

```ts
resumeConversation(input): Promise<{
  conversation: ConversationRecord<unknown>;
  event: RuntimeEvent;
}>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`ResumeConversationInput`](#resumeconversationinput) |

###### Returns

`Promise`\<\{
  `conversation`: [`ConversationRecord`](#conversationrecord)\<`unknown`\>;
  `event`: [`RuntimeEvent`](#runtimeevent);
\}\>

##### startVoiceConversation()

```ts
startVoiceConversation<TConversationContext>(input): Promise<StartVoiceResult>;
```

###### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TConversationContext` | `unknown` |

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`StartVoiceConversationInput`](#startvoiceconversationinput)\<`TConversationContext`\> |

###### Returns

`Promise`\<[`StartVoiceResult`](#startvoiceresult)\>

##### startVoiceSegment()

```ts
startVoiceSegment(input): Promise<StartVoiceResult>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`StartVoiceSegmentInput`](#startvoicesegmentinput) |

###### Returns

`Promise`\<[`StartVoiceResult`](#startvoiceresult)\>

##### submitWidget()

```ts
submitWidget(input): Promise<RuntimeEvent>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`SubmitWidgetInput`](#submitwidgetinput) |

###### Returns

`Promise`\<[`RuntimeEvent`](#runtimeevent)\>

***

### DefinitionError

#### Extends

- `Error`

#### Constructors

##### Constructor

```ts
new DefinitionError(message): DefinitionError;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `message` | `string` |

###### Returns

[`DefinitionError`](#definitionerror)

###### Overrides

```ts
Error.constructor
```

***

### DelegationJourneyBuilder

#### Type Parameters

| Type Parameter |
| ------ |
| `TId` *extends* `string` |

#### Constructors

##### Constructor

```ts
new DelegationJourneyBuilder<TId>(id, options): DelegationJourneyBuilder<TId>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `TId` |
| `options` | [`DelegationJourneyOptions`](#delegationjourneyoptions) |

###### Returns

[`DelegationJourneyBuilder`](#delegationjourneybuilder)\<`TId`\>

#### Properties

##### id

```ts
readonly id: TId;
```

##### kind

```ts
readonly kind: "delegation";
```

##### options

```ts
readonly options: DelegationJourneyOptions;
```

#### Methods

##### compile()

```ts
compile(): CompiledJourney;
```

###### Returns

[`CompiledJourney`](#compiledjourney)

***

### StateBuilder

#### Type Parameters

| Type Parameter |
| ------ |
| `TId` *extends* `string` |
| `TContextSchema` *extends* [`ObjectSchema`](#objectschema) |

#### Implements

- [`StateReference`](#statereference)\<`TId`\>

#### Constructors

##### Constructor

```ts
new StateBuilder<TId, TContextSchema>(
   id,
   contextSchema,
parent?): StateBuilder<TId, TContextSchema>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `TId` |
| `contextSchema` | `TContextSchema` |
| `parent?` | [`StateBuilder`](#statebuilder)\<`string`, `TContextSchema`\> |

###### Returns

[`StateBuilder`](#statebuilder)\<`TId`, `TContextSchema`\>

#### Properties

##### actionRuns

```ts
readonly actionRuns: InternalActionRun[];
```

##### children

```ts
readonly children: StateBuilder<string, TContextSchema>[];
```

##### collectedFields

```ts
readonly collectedFields: CollectedField[];
```

##### contextSchema

```ts
readonly contextSchema: TContextSchema;
```

##### id

```ts
readonly id: TId;
```

###### Implementation of

[`StateReference`](#statereference).[`id`](#id-34)

##### knowledge

```ts
readonly knowledge: CapabilityScope<KnowledgeSource<string, ZodType<unknown, unknown, $ZodTypeInternals<unknown, unknown>>, ZodType<unknown, unknown, $ZodTypeInternals<unknown, unknown>>>>;
```

##### parent?

```ts
readonly optional parent?: StateBuilder<string, TContextSchema>;
```

##### stateActions

```ts
readonly stateActions: StateActionRecord[];
```

##### toolRuns

```ts
readonly toolRuns: InternalToolRun[];
```

##### tools

```ts
readonly tools: CapabilityScope<AnyTool>;
```

##### transitions

```ts
readonly transitions: InternalTransition[];
```

#### Methods

##### allowSkip()

```ts
allowSkip(): this;
```

###### Returns

`this`

##### collect()

```ts
collect(path, options?): this;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `path` | [`ContextPath`](#contextpath)\<`output`\<`TContextSchema`\>\> |
| `options?` | [`FieldCollectionOptions`](#fieldcollectionoptions)\<`output`\<`TContextSchema`\>\> |

###### Returns

`this`

##### collectList()

```ts
collectList<TItemSchema>(path, options): this;
```

###### Type Parameters

| Type Parameter |
| ------ |
| `TItemSchema` *extends* `ZodType`\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> |

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `path` | [`ContextPath`](#contextpath)\<`output`\<`TContextSchema`\>\> |
| `options` | [`ListCollectionOptions`](#listcollectionoptions)\<`output`\<`TContextSchema`\>, `TItemSchema`\> |

###### Returns

`this`

##### compile()

```ts
compile(
   parentId?,
   inheritedTools?,
   inheritedKnowledge?,
   inheritedCollectedFields?): CompiledState[];
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `parentId?` | `string` |
| `inheritedTools?` | [`AnyTool`](#anytool)[] |
| `inheritedKnowledge?` | [`KnowledgeSource`](#knowledgesource)\<`string`, `ZodType`\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\>, `ZodType`\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\>\>[] |
| `inheritedCollectedFields?` | `CollectedField`[] |

###### Returns

[`CompiledState`](#compiledstate)[]

##### entry()

```ts
entry<TTool>(toolDefinition, options): this;
```

###### Type Parameters

| Type Parameter |
| ------ |
| `TTool` *extends* [`AnyTool`](#anytool) |

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `toolDefinition` | `TTool` |
| `options` | [`ToolRunOptionsFor`](#toolrunoptionsfor)\<`TTool`, `output`\<`TContextSchema`\>\> |

###### Returns

`this`

##### exit()

```ts
exit<TTool>(toolDefinition, options): this;
```

###### Type Parameters

| Type Parameter |
| ------ |
| `TTool` *extends* [`AnyTool`](#anytool) |

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `toolDefinition` | `TTool` |
| `options` | [`ToolRunOptionsFor`](#toolrunoptionsfor)\<`TTool`, `output`\<`TContextSchema`\>\> |

###### Returns

`this`

##### final()

```ts
final<TChildId>(id): StateBuilder<TChildId, TContextSchema>;
```

###### Type Parameters

| Type Parameter |
| ------ |
| `TChildId` *extends* `string` |

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `TChildId` |

###### Returns

[`StateBuilder`](#statebuilder)\<`TChildId`, `TContextSchema`\>

##### initial()

```ts
initial(state): this;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `state` | [`StateBuilder`](#statebuilder)\<`string`, `TContextSchema`\> |

###### Returns

`this`

##### instructions()

```ts
instructions(value): this;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `string` |

###### Returns

`this`

##### markFinal()

```ts
markFinal(): this;
```

###### Returns

`this`

##### markParallel()

```ts
markParallel(): this;
```

###### Returns

`this`

##### on()

```ts
on(event, options?): TransitionTargetBuilder<TContextSchema, StateBuilder<TId, TContextSchema>>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | [`JourneyEventDefinition`](#journeyeventdefinition) |
| `options?` | [`TransitionOptions`](#transitionoptions)\<`output`\<`TContextSchema`\>\> |

###### Returns

`TransitionTargetBuilder`\<`TContextSchema`, [`StateBuilder`](#statebuilder)\<`TId`, `TContextSchema`\>\>

##### parallel()

```ts
parallel<TChildId>(id): StateBuilder<TChildId, TContextSchema>;
```

###### Type Parameters

| Type Parameter |
| ------ |
| `TChildId` *extends* `string` |

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `TChildId` |

###### Returns

[`StateBuilder`](#statebuilder)\<`TChildId`, `TContextSchema`\>

##### requiresVisit()

```ts
requiresVisit(reason?): this;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `reason?` | `string` |

###### Returns

`this`

##### runTool()

```ts
runTool<TTool>(toolDefinition, options): this;
```

###### Type Parameters

| Type Parameter |
| ------ |
| `TTool` *extends* [`AnyTool`](#anytool) |

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `toolDefinition` | `TTool` |
| `options` | [`ToolRunOptionsFor`](#toolrunoptionsfor)\<`TTool`, `output`\<`TContextSchema`\>\> |

###### Returns

`this`

##### state()

```ts
state<TChildId>(id): StateBuilder<TChildId, TContextSchema>;
```

###### Type Parameters

| Type Parameter |
| ------ |
| `TChildId` *extends* `string` |

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `TChildId` |

###### Returns

[`StateBuilder`](#statebuilder)\<`TChildId`, `TContextSchema`\>

##### summary()

```ts
summary(value): this;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `string` |

###### Returns

`this`

##### transitionTo()

```ts
transitionTo(state, options?): this;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `state` | [`StateBuilder`](#statebuilder)\<`string`, `TContextSchema`\> |
| `options?` | [`TransitionOptions`](#transitionoptions)\<`output`\<`TContextSchema`\>\> |

###### Returns

`this`

##### useAction()

```ts
useAction<TAction>(actionDefinition, options?): this;
```

###### Type Parameters

| Type Parameter |
| ------ |
| `TAction` *extends* [`ActionDefinition`](#actiondefinition)\<`string`, `ZodType`\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\>\> |

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `actionDefinition` | `TAction` |
| `options?` | \| `"entry"` \| `"exit"` \| `"transition"` \| [`StateActionUseOptions`](#stateactionuseoptions)\<`TAction`, `output`\<`TContextSchema`\>\> |

###### Returns

`this`

##### when()

```ts
when(description, options?): TransitionTargetBuilder<TContextSchema, StateBuilder<TId, TContextSchema>>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `description` | `string` |
| `options?` | [`TransitionOptions`](#transitionoptions)\<`output`\<`TContextSchema`\>\> |

###### Returns

`TransitionTargetBuilder`\<`TContextSchema`, [`StateBuilder`](#statebuilder)\<`TId`, `TContextSchema`\>\>

***

### StateCollection

#### Type Parameters

| Type Parameter |
| ------ |
| `TContextSchema` *extends* [`ObjectSchema`](#objectschema) |

#### Constructors

##### Constructor

```ts
new StateCollection<TContextSchema>(contextSchema): StateCollection<TContextSchema>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `contextSchema` | `TContextSchema` |

###### Returns

[`StateCollection`](#statecollection)\<`TContextSchema`\>

#### Methods

##### add()

```ts
add<TId>(id): StateBuilder<TId, TContextSchema>;
```

###### Type Parameters

| Type Parameter |
| ------ |
| `TId` *extends* `string` |

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `TId` |

###### Returns

[`StateBuilder`](#statebuilder)\<`TId`, `TContextSchema`\>

##### get()

```ts
get<TId>(id): StateBuilder<TId, TContextSchema>;
```

###### Type Parameters

| Type Parameter |
| ------ |
| `TId` *extends* `string` |

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `TId` |

###### Returns

[`StateBuilder`](#statebuilder)\<`TId`, `TContextSchema`\>

##### list()

```ts
list(): StateBuilder<string, TContextSchema>[];
```

###### Returns

[`StateBuilder`](#statebuilder)\<`string`, `TContextSchema`\>[]

***

### StateMachineJourneyBuilder

#### Type Parameters

| Type Parameter |
| ------ |
| `TId` *extends* `string` |
| `TContextSchema` *extends* [`ObjectSchema`](#objectschema) |

#### Constructors

##### Constructor

```ts
new StateMachineJourneyBuilder<TId, TContextSchema>(id, options): StateMachineJourneyBuilder<TId, TContextSchema>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `TId` |
| `options` | [`StateMachineJourneyOptions`](#statemachinejourneyoptions)\<`TContextSchema`\> |

###### Returns

[`StateMachineJourneyBuilder`](#statemachinejourneybuilder)\<`TId`, `TContextSchema`\>

#### Properties

##### id

```ts
readonly id: TId;
```

##### kind

```ts
readonly kind: "stateMachine";
```

##### knowledge

```ts
readonly knowledge: CapabilityScope<KnowledgeSource<string, ZodType<unknown, unknown, $ZodTypeInternals<unknown, unknown>>, ZodType<unknown, unknown, $ZodTypeInternals<unknown, unknown>>>>;
```

##### options

```ts
readonly options: StateMachineJourneyOptions<TContextSchema>;
```

##### states

```ts
readonly states: StateCollection<TContextSchema>;
```

##### tools

```ts
readonly tools: CapabilityScope<AnyTool>;
```

#### Methods

##### alternateEntry()

```ts
alternateEntry(state, options): this;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `state` | [`StateBuilder`](#statebuilder)\<`string`, `TContextSchema`\> |
| `options` | [`JourneyEntryOptions`](#journeyentryoptions)\<`output`\<`TContextSchema`\>\> |

###### Returns

`this`

##### compile()

```ts
compile(): CompiledJourney;
```

###### Returns

[`CompiledJourney`](#compiledjourney)

##### defineStates()

```ts
defineStates<TStateIds>(...ids): TypedStateRegistry<TStateIds[number], TContextSchema>;
```

###### Type Parameters

| Type Parameter |
| ------ |
| `TStateIds` *extends* readonly \[`string`, `string`\] |

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`ids` | `TStateIds` |

###### Returns

[`TypedStateRegistry`](#typedstateregistry)\<`TStateIds`\[`number`\], `TContextSchema`\>

##### event()

```ts
event<TName, TPayloadSchema>(name, config): JourneyEventDefinition<TName, TPayloadSchema>;
```

###### Type Parameters

| Type Parameter |
| ------ |
| `TName` *extends* `string` |
| `TPayloadSchema` *extends* `ZodType`\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> |

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `TName` |
| `config` | \{ `payload`: `TPayloadSchema`; `routing?`: [`EventRoutingMode`](#eventroutingmode); \} |
| `config.payload` | `TPayloadSchema` |
| `config.routing?` | [`EventRoutingMode`](#eventroutingmode) |

###### Returns

[`JourneyEventDefinition`](#journeyeventdefinition)\<`TName`, `TPayloadSchema`\>

##### final()

```ts
final<TStateId>(id): StateBuilder<TStateId, TContextSchema>;
```

###### Type Parameters

| Type Parameter |
| ------ |
| `TStateId` *extends* `string` |

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `TStateId` |

###### Returns

[`StateBuilder`](#statebuilder)\<`TStateId`, `TContextSchema`\>

##### initial()

```ts
initial(state): this;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `state` | [`StateBuilder`](#statebuilder)\<`string`, `TContextSchema`\> |

###### Returns

`this`

##### parallel()

```ts
parallel<TStateId>(id): StateBuilder<TStateId, TContextSchema>;
```

###### Type Parameters

| Type Parameter |
| ------ |
| `TStateId` *extends* `string` |

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `TStateId` |

###### Returns

[`StateBuilder`](#statebuilder)\<`TStateId`, `TContextSchema`\>

##### state()

```ts
state<TStateId>(id): StateBuilder<TStateId, TContextSchema>;
```

###### Type Parameters

| Type Parameter |
| ------ |
| `TStateId` *extends* `string` |

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `TStateId` |

###### Returns

[`StateBuilder`](#statebuilder)\<`TStateId`, `TContextSchema`\>

##### use()

```ts
use(fragment): this;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `fragment` | [`JourneyFragment`](#journeyfragment)\<`string`, `TContextSchema`\> |

###### Returns

`this`

***

### TypedStateRegistry

#### Type Parameters

| Type Parameter |
| ------ |
| `TStateIds` *extends* `string` |
| `TContextSchema` *extends* [`ObjectSchema`](#objectschema) |

#### Constructors

##### Constructor

```ts
new TypedStateRegistry<TStateIds, TContextSchema>(collection): TypedStateRegistry<TStateIds, TContextSchema>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `collection` | [`StateCollection`](#statecollection)\<`TContextSchema`\> |

###### Returns

[`TypedStateRegistry`](#typedstateregistry)\<`TStateIds`, `TContextSchema`\>

#### Methods

##### get()

```ts
get<TId>(id): StateBuilder<TId, TContextSchema>;
```

###### Type Parameters

| Type Parameter |
| ------ |
| `TId` *extends* `string` |

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `TId` |

###### Returns

[`StateBuilder`](#statebuilder)\<`TId`, `TContextSchema`\>

## Interfaces

### ActionDefinition

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TName` *extends* `string` | `string` |
| `TInputSchema` *extends* `z.ZodType` | `z.ZodType` |

#### Properties

##### input

```ts
input: TInputSchema;
```

##### kind

```ts
kind: "action";
```

##### name

```ts
name: TName;
```

##### requiresVisit?

```ts
optional requiresVisit?: boolean;
```

##### retry?

```ts
optional retry?:
  | false
  | {
  maxAttempts?: number;
  notice?: string;
};
```

##### run

```ts
run: (args) => MaybePromise$1<void>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | \{ `input`: `output`\<`TInputSchema`\>; \} |
| `args.input` | `output`\<`TInputSchema`\> |

###### Returns

`MaybePromise$1`\<`void`\>

***

### ActivationMetadata

#### Extended by

- [`DelegationJourneyOptions`](#delegationjourneyoptions)
- [`StateMachineJourneyOptions`](#statemachinejourneyoptions)

#### Properties

##### always?

```ts
optional always?:
  | boolean
| JourneyActivationPredicate<unknown, unknown, unknown>;
```

##### alwaysInclude?

```ts
optional alwaysInclude?: boolean;
```

##### condition

```ts
condition: string;
```

##### examples?

```ts
optional examples?: string[];
```

##### guard?

```ts
optional guard?: JourneyGuardPredicate;
```

##### includeWhen?

```ts
optional includeWhen?: CandidateFilterPredicate;
```

##### matcher?

```ts
optional matcher?: JourneyActivationPredicate;
```

##### priority?

```ts
optional priority?: number;
```

##### stickiness?

```ts
optional stickiness?: "low" | "medium" | "high";
```

##### tags?

```ts
optional tags?: string[];
```

***

### AgentBehaviorOptions

#### Properties

##### interruptOnNewMessage?

```ts
optional interruptOnNewMessage?: boolean;
```

***

### AgentConfigurationOptions

#### Properties

##### capabilityAvailability?

```ts
optional capabilityAvailability?: {
  blockers?: {
     code: string;
     kind?:   | "unknown"
        | "permission-blocked"
        | "missing-policy"
        | "missing-configuration"
        | "missing-credentials"
        | "provider-unsupported";
     message: string;
  }[];
  capability?: string;
  enabledForAgents?: string[];
  enabledForChannels?: string[];
  enabledForJourneys?: string[];
  enabledForTools?: string[];
  metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
  providerPackageId?: string;
  status:   | "enabled"
     | "registry-available"
     | "installed"
     | "configured"
     | "blocked";
}[];
```

###### blockers?

```ts
optional blockers?: {
  code: string;
  kind?:   | "unknown"
     | "permission-blocked"
     | "missing-policy"
     | "missing-configuration"
     | "missing-credentials"
     | "provider-unsupported";
  message: string;
}[];
```

###### capability?

```ts
optional capability?: string;
```

###### enabledForAgents?

```ts
optional enabledForAgents?: string[];
```

###### enabledForChannels?

```ts
optional enabledForChannels?: string[];
```

###### enabledForJourneys?

```ts
optional enabledForJourneys?: string[];
```

###### enabledForTools?

```ts
optional enabledForTools?: string[];
```

###### metadata?

```ts
optional metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
```

###### providerPackageId?

```ts
optional providerPackageId?: string;
```

###### status

```ts
status:
  | "enabled"
  | "registry-available"
  | "installed"
  | "configured"
  | "blocked";
```

##### channels?

```ts
optional channels?: {
  audience?: "customer-facing" | "internal-support" | "mixed";
  behavior?: {
   [key: string]: unknown;
     allowMarkdown?: boolean;
     allowWidgets?: boolean;
     approval?: unknown;
     draftFirst?: boolean;
     handoff?: unknown;
     maxCharacters?: number;
     maxWords?: number;
     media?: unknown;
     sensitiveData?: unknown;
     tone?: string;
  };
  channel: string;
  channelSetIds?: string[];
  enabled?: boolean;
  enabledCapabilities?: string[];
  flowActivations?: {
     enabled?: boolean;
     journeyId: string;
     metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
     policyIds?: string[];
     providerPackageIds?: string[];
     reason?: string;
  }[];
  handoff?: {
     destinations?: string[];
     enabled?: boolean;
     metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
     policyIds?: string[];
     providerPackageIds?: string[];
     sdkControlled?: boolean;
  };
  id: string;
  metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
  outbound?: {
     enabled?: boolean;
     metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
     policyIds?: string[];
     providerPackageIds?: string[];
     requiresProviderOutboundSupport?: boolean;
  };
  policies?: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
  providerPackageIds?: string[];
}[];
```

###### audience?

```ts
optional audience?: "customer-facing" | "internal-support" | "mixed";
```

###### behavior?

```ts
optional behavior?: {
[key: string]: unknown;
  allowMarkdown?: boolean;
  allowWidgets?: boolean;
  approval?: unknown;
  draftFirst?: boolean;
  handoff?: unknown;
  maxCharacters?: number;
  maxWords?: number;
  media?: unknown;
  sensitiveData?: unknown;
  tone?: string;
};
```

###### Index Signature

```ts
[key: string]: unknown
```

###### behavior.allowMarkdown?

```ts
optional allowMarkdown?: boolean;
```

###### behavior.allowWidgets?

```ts
optional allowWidgets?: boolean;
```

###### behavior.approval?

```ts
optional approval?: unknown;
```

###### behavior.draftFirst?

```ts
optional draftFirst?: boolean;
```

###### behavior.handoff?

```ts
optional handoff?: unknown;
```

###### behavior.maxCharacters?

```ts
optional maxCharacters?: number;
```

###### behavior.maxWords?

```ts
optional maxWords?: number;
```

###### behavior.media?

```ts
optional media?: unknown;
```

###### behavior.sensitiveData?

```ts
optional sensitiveData?: unknown;
```

###### behavior.tone?

```ts
optional tone?: string;
```

###### channel

```ts
channel: string;
```

###### channelSetIds?

```ts
optional channelSetIds?: string[];
```

###### enabled?

```ts
optional enabled?: boolean;
```

###### enabledCapabilities?

```ts
optional enabledCapabilities?: string[];
```

###### flowActivations?

```ts
optional flowActivations?: {
  enabled?: boolean;
  journeyId: string;
  metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
  policyIds?: string[];
  providerPackageIds?: string[];
  reason?: string;
}[];
```

###### handoff?

```ts
optional handoff?: {
  destinations?: string[];
  enabled?: boolean;
  metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
  policyIds?: string[];
  providerPackageIds?: string[];
  sdkControlled?: boolean;
};
```

###### handoff.destinations?

```ts
optional destinations?: string[];
```

###### handoff.enabled?

```ts
optional enabled?: boolean;
```

###### handoff.metadata?

```ts
optional metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
```

###### handoff.policyIds?

```ts
optional policyIds?: string[];
```

###### handoff.providerPackageIds?

```ts
optional providerPackageIds?: string[];
```

###### handoff.sdkControlled?

```ts
optional sdkControlled?: boolean;
```

###### id

```ts
id: string;
```

###### metadata?

```ts
optional metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
```

###### outbound?

```ts
optional outbound?: {
  enabled?: boolean;
  metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
  policyIds?: string[];
  providerPackageIds?: string[];
  requiresProviderOutboundSupport?: boolean;
};
```

###### outbound.enabled?

```ts
optional enabled?: boolean;
```

###### outbound.metadata?

```ts
optional metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
```

###### outbound.policyIds?

```ts
optional policyIds?: string[];
```

###### outbound.providerPackageIds?

```ts
optional providerPackageIds?: string[];
```

###### outbound.requiresProviderOutboundSupport?

```ts
optional requiresProviderOutboundSupport?: boolean;
```

###### policies?

```ts
optional policies?: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
```

###### providerPackageIds?

```ts
optional providerPackageIds?: string[];
```

##### channelSets?

```ts
optional channelSets?: {
  channelIds?: string[];
  channels?: string[];
  conversationContinuity?: {
     crossChannel?: boolean;
     mode?: "new-conversation" | "link-existing" | "sdk-decides";
     policy?: string;
  };
  enabled?: boolean;
  id: string;
  label?: string;
  metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
}[];
```

###### channelIds?

```ts
optional channelIds?: string[];
```

###### channels?

```ts
optional channels?: string[];
```

###### conversationContinuity?

```ts
optional conversationContinuity?: {
  crossChannel?: boolean;
  mode?: "new-conversation" | "link-existing" | "sdk-decides";
  policy?: string;
};
```

###### conversationContinuity.crossChannel?

```ts
optional crossChannel?: boolean;
```

###### conversationContinuity.mode?

```ts
optional mode?: "new-conversation" | "link-existing" | "sdk-decides";
```

###### conversationContinuity.policy?

```ts
optional policy?: string;
```

###### enabled?

```ts
optional enabled?: boolean;
```

###### id

```ts
id: string;
```

###### label?

```ts
optional label?: string;
```

###### metadata?

```ts
optional metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
```

##### credentialStatuses?

```ts
optional credentialStatuses?: {
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

###### expiresAt?

```ts
optional expiresAt?: string;
```

###### message?

```ts
optional message?: string;
```

###### providerPackageId?

```ts
optional providerPackageId?: string;
```

###### requirementId

```ts
requirementId: string;
```

###### scopes?

```ts
optional scopes?: string[];
```

###### state

```ts
state:
  | "required"
  | "configured"
  | "permission-blocked"
  | "not-required"
  | "missing"
  | "expired"
  | "insufficient-scope"
  | "unavailable";
```

##### policyIds?

```ts
optional policyIds?: string[];
```

##### providerPackages?

```ts
optional providerPackages?: {
  capabilities: {
     audiences?: ("customer-facing" | "internal-support" | "mixed")[];
     capability: string;
     changesWorkflow?: boolean;
     description?: string;
     exposesSensitiveData?: boolean;
     extension?: boolean;
     label?: string;
     metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
     providerObjects?: {
        description?: string;
        kind: string;
        label?: string;
        metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        schemaName?: string;
     }[];
     requiresCredential?: boolean;
     sideEffect?: boolean;
  }[];
  category: string;
  channelAudiences?: ("customer-facing" | "internal-support" | "mixed")[];
  coverage?: {
     evidence?: {
        label: string;
        url?: string;
     }[];
     notes?: string[];
     scope?:   | "support-workflow-subset"
        | "provider-api-subset"
        | "connector-required"
        | "local-protocol"
        | "full-provider-api";
  };
  credentialRequirements?: {
     description?: string;
     id: string;
     label?: string;
     metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
     required?: boolean;
     scopes?: string[];
  }[];
  directions: (
     | "receive-only"
     | "send-only"
     | "inbound-only"
     | "outbound-only"
    | "bidirectional")[];
  id: string;
  limitations?: string[];
  maintainers?: {
     name: string;
     type?: "community" | "official" | "unknown" | "partner";
     url?: string;
  }[];
  metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
  name: string;
  operations?: {
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
     metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
     outputSchema?: unknown;
     outputSchemaName?: string;
     outputSchemaRef?: string;
     providerObject?: string;
     providerObjects?: {
        description?: string;
        kind: string;
        label?: string;
        metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        schemaName?: string;
     }[];
     providerOperation?: string;
     requiredPolicyIds?: string[];
     requiresApproval?: boolean;
     requiresCredential?: boolean;
     sideEffect?: boolean;
  }[];
  packageName: string;
  privacyNotes?: string[];
  provider: string;
  trustLevel?: "community" | "official" | "verified" | "experimental";
}[];
```

###### capabilities

```ts
capabilities: {
  audiences?: ("customer-facing" | "internal-support" | "mixed")[];
  capability: string;
  changesWorkflow?: boolean;
  description?: string;
  exposesSensitiveData?: boolean;
  extension?: boolean;
  label?: string;
  metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
  providerObjects?: {
     description?: string;
     kind: string;
     label?: string;
     metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
     schemaName?: string;
  }[];
  requiresCredential?: boolean;
  sideEffect?: boolean;
}[];
```

###### category

```ts
category: string;
```

###### channelAudiences?

```ts
optional channelAudiences?: ("customer-facing" | "internal-support" | "mixed")[];
```

###### coverage?

```ts
optional coverage?: {
  evidence?: {
     label: string;
     url?: string;
  }[];
  notes?: string[];
  scope?:   | "support-workflow-subset"
     | "provider-api-subset"
     | "connector-required"
     | "local-protocol"
     | "full-provider-api";
};
```

###### coverage.evidence?

```ts
optional evidence?: {
  label: string;
  url?: string;
}[];
```

###### coverage.notes?

```ts
optional notes?: string[];
```

###### coverage.scope?

```ts
optional scope?:
  | "support-workflow-subset"
  | "provider-api-subset"
  | "connector-required"
  | "local-protocol"
  | "full-provider-api";
```

###### credentialRequirements?

```ts
optional credentialRequirements?: {
  description?: string;
  id: string;
  label?: string;
  metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
  required?: boolean;
  scopes?: string[];
}[];
```

###### directions

```ts
directions: (
  | "receive-only"
  | "send-only"
  | "inbound-only"
  | "outbound-only"
  | "bidirectional")[];
```

###### id

```ts
id: string;
```

###### limitations?

```ts
optional limitations?: string[];
```

###### maintainers?

```ts
optional maintainers?: {
  name: string;
  type?: "community" | "official" | "unknown" | "partner";
  url?: string;
}[];
```

###### metadata?

```ts
optional metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
```

###### name

```ts
name: string;
```

###### operations?

```ts
optional operations?: {
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
  metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
  outputSchema?: unknown;
  outputSchemaName?: string;
  outputSchemaRef?: string;
  providerObject?: string;
  providerObjects?: {
     description?: string;
     kind: string;
     label?: string;
     metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
     schemaName?: string;
  }[];
  providerOperation?: string;
  requiredPolicyIds?: string[];
  requiresApproval?: boolean;
  requiresCredential?: boolean;
  sideEffect?: boolean;
}[];
```

###### packageName

```ts
packageName: string;
```

###### privacyNotes?

```ts
optional privacyNotes?: string[];
```

###### provider

```ts
provider: string;
```

###### trustLevel?

```ts
optional trustLevel?: "community" | "official" | "verified" | "experimental";
```

##### providerReadiness?

```ts
optional providerReadiness?: {
  blockers?: {
     code: string;
     kind?:   | "unknown"
        | "permission-blocked"
        | "missing-policy"
        | "missing-configuration"
        | "missing-credentials"
        | "provider-unsupported";
     message: string;
  }[];
  checkedAt?: string;
  checkSource?: string;
  live?: boolean;
  metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
  providerPackageId: string;
  remediationActions?: {
     id: string;
     kind?:   | "custom"
        | "configure"
        | "authorize"
        | "verify"
        | "read-docs"
        | "contact-provider";
     label: string;
     metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
  }[];
  sandbox?: boolean;
  status?:   | "unknown"
     | "configured"
     | "blocked"
     | "not-configured"
     | "ready"
     | "live-verified"
     | "sandbox-verified"
     | "scoped-verified"
     | "full-api-verified";
}[];
```

###### blockers?

```ts
optional blockers?: {
  code: string;
  kind?:   | "unknown"
     | "permission-blocked"
     | "missing-policy"
     | "missing-configuration"
     | "missing-credentials"
     | "provider-unsupported";
  message: string;
}[];
```

###### checkedAt?

```ts
optional checkedAt?: string;
```

###### checkSource?

```ts
optional checkSource?: string;
```

###### live?

```ts
optional live?: boolean;
```

###### metadata?

```ts
optional metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
```

###### providerPackageId

```ts
providerPackageId: string;
```

###### remediationActions?

```ts
optional remediationActions?: {
  id: string;
  kind?:   | "custom"
     | "configure"
     | "authorize"
     | "verify"
     | "read-docs"
     | "contact-provider";
  label: string;
  metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
}[];
```

###### sandbox?

```ts
optional sandbox?: boolean;
```

###### status?

```ts
optional status?:
  | "unknown"
  | "configured"
  | "blocked"
  | "not-configured"
  | "ready"
  | "live-verified"
  | "sandbox-verified"
  | "scoped-verified"
  | "full-api-verified";
```

***

### AgentOptions

#### Properties

##### behavior?

```ts
optional behavior?: AgentBehaviorOptions;
```

##### channels?

```ts
optional channels?: AgentChannelPolicyMap;
```

##### configuration?

```ts
optional configuration?: AgentConfigurationOptions;
```

##### handoff?

```ts
optional handoff?: AgentHandoffPolicyOptions;
```

##### instructions

```ts
instructions: string;
```

##### logLevel?

```ts
optional logLevel?: AgentLogLevel;
```

##### persona?

```ts
optional persona?: AgentPersonaOptions;
```

##### postProcessing?

```ts
optional postProcessing?: AgentPostProcessingOptions;
```

***

### AgentPostProcessingOptions

#### Properties

##### citations?

```ts
optional citations?: boolean;
```

***

### ApplicationContextParts

#### Type Parameters

| Type Parameter |
| ------ |
| `TConversation` |
| `TTurn` |

#### Properties

##### conversation

```ts
conversation: TConversation;
```

##### turn

```ts
turn: TTurn;
```

***

### BuildJourneyIndexOptions

#### Extended by

- [`EnsureJourneyIndexOptions`](../journey-index-json/dist.md#ensurejourneyindexoptions)

#### Properties

##### embeddingModel

```ts
embeddingModel: ModelAdapter;
```

##### generatedAt?

```ts
optional generatedAt?: string;
```

##### signal?

```ts
optional signal?: AbortSignal;
```

***

### ChannelEventActor

#### Properties

##### displayName?

```ts
optional displayName?: string;
```

##### id?

```ts
optional id?: string;
```

##### metadata?

```ts
optional metadata?: Record<string, unknown>;
```

##### type

```ts
type:
  | "provider"
  | "customer"
  | "agent"
  | "operator"
  | "system"
  | "scheduler"
  | "application";
```

***

### ChannelEventBindingInput

#### Properties

##### agentId?

```ts
optional agentId?: string;
```

##### blockers?

```ts
optional blockers?: {
  code: string;
  kind?: string;
  message: string;
}[];
```

###### code

```ts
code: string;
```

###### kind?

```ts
optional kind?: string;
```

###### message

```ts
message: string;
```

##### conversationContext?

```ts
optional conversationContext?: unknown;
```

##### conversationId?

```ts
optional conversationId?: string;
```

##### linkedConversationId?

```ts
optional linkedConversationId?: string;
```

##### metadata?

```ts
optional metadata?: Record<string, unknown>;
```

##### outcome?

```ts
optional outcome?:
  | "blocked"
  | "start-new"
  | "resume-existing"
  | "link-and-start-new"
  | "ignore"
  | "defer"
  | "handoff-review";
```

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

***

### ChannelEventBindingResult

#### Properties

##### channel?

```ts
optional channel?: {
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

##### conversationId?

```ts
optional conversationId?: string;
```

##### outcome

```ts
outcome:
  | "blocked"
  | "start-new"
  | "resume-existing"
  | "link-and-start-new"
  | "ignore"
  | "defer"
  | "handoff-review";
```

##### reason?

```ts
optional reason?: string;
```

##### status?

```ts
optional status?: "blocked" | "not-required" | "bound" | "created" | "unbound";
```

***

### ChannelEventEnvelope

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TPayload` | [`NormalizedChannelPayload`](#normalizedchannelpayload) |
| `TRawPayload` | `unknown` |

#### Properties

##### actor?

```ts
optional actor?: ChannelEventActor;
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

##### direction

```ts
direction: "outbound" | "inbound" | "internal";
```

##### id?

```ts
optional id?: string;
```

##### identity?

```ts
optional identity?: ChannelEventIdentity;
```

##### intent?

```ts
optional intent?: ChannelEventIntent;
```

##### kind

```ts
kind: ChannelEventNature;
```

##### metadata?

```ts
optional metadata?: Record<string, unknown>;
```

##### nature

```ts
nature: ChannelEventNature;
```

##### occurredAt?

```ts
optional occurredAt?: string;
```

##### payload?

```ts
optional payload?: TPayload;
```

##### source?

```ts
optional source?: ChannelEventSourceEvidence<TRawPayload>;
```

***

### ChannelEventEnvelopeInput

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TPayload` | [`NormalizedChannelPayloadInput`](#normalizedchannelpayloadinput) |
| `TRawPayload` | `unknown` |

#### Properties

##### actor?

```ts
optional actor?: ChannelEventActor;
```

##### channel

```ts
channel: ConversationChannelInput;
```

##### direction?

```ts
optional direction?: "outbound" | "inbound" | "internal";
```

##### id?

```ts
optional id?: string;
```

##### identity?

```ts
optional identity?: ChannelEventIdentity;
```

##### intent?

```ts
optional intent?: ChannelEventIntent;
```

##### kind?

```ts
optional kind?: ChannelEventNature;
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

##### source?

```ts
optional source?: ChannelEventSourceEvidence<TRawPayload>;
```

***

### ChannelEventHandlingInput

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TTurn` | `unknown` |

#### Properties

##### assistantMessageMode?

```ts
optional assistantMessageMode?: "canonical" | "intermediate" | "none";
```

##### disposition?

```ts
optional disposition?:
  | "handoff-review"
  | "output-resolution"
  | "record-only"
  | "no-op"
  | "deterministic-journey-event"
  | "model-turn"
  | "provider-operation";
```

##### recordUserMessage?

```ts
optional recordUserMessage?: boolean;
```

##### text?

```ts
optional text?: string;
```

##### turn?

```ts
optional turn?: TTurn;
```

***

### ChannelEventIdentity

#### Properties

##### dedupeKey?

```ts
optional dedupeKey?: string;
```

##### idempotencyKey?

```ts
optional idempotencyKey?: string;
```

##### key?

```ts
optional key?: string;
```

##### metadata?

```ts
optional metadata?: Record<string, unknown>;
```

##### sequence?

```ts
optional sequence?: string | number;
```

##### streamId?

```ts
optional streamId?: string;
```

***

### ChannelEventIntakeResult

#### Properties

##### bindingOutcome

```ts
bindingOutcome:
  | "blocked"
  | "start-new"
  | "resume-existing"
  | "link-and-start-new"
  | "ignore"
  | "defer"
  | "handoff-review";
```

##### blockers?

```ts
optional blockers?: {
  code: string;
  kind?: string;
  message: string;
}[];
```

###### code

```ts
code: string;
```

###### kind?

```ts
optional kind?: string;
```

###### message

```ts
message: string;
```

##### conversationId?

```ts
optional conversationId?: string;
```

##### handling

```ts
handling: "not-required" | "started" | "queued";
```

##### metadata?

```ts
optional metadata?: Record<string, unknown>;
```

##### outcome

```ts
outcome: "blocked" | "handoff-review" | "accepted" | "ignored" | "deferred";
```

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

***

### ChannelEventRuntimeReceiver

#### Methods

##### handleChannelEvent()

```ts
handleChannelEvent<TPayload, TTurn>(input): Promise<HandleChannelEventResult<TPayload>>;
```

###### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TPayload` | `unknown` |
| `TTurn` | `unknown` |

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`HandleChannelEventInput`](#handlechanneleventinput)\<`TPayload`, `TTurn`\> |

###### Returns

`Promise`\<[`HandleChannelEventResult`](#handlechanneleventresult)\<`TPayload`\>\>

***

### ChannelEventSource

#### Extended by

- [`ChannelProviderAdapter`](#channelprovideradapter)

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TRaw` | `unknown` |

#### Properties

##### channel?

```ts
optional channel?: ConversationChannelInput;
```

##### id

```ts
id: string;
```

##### sourceType?

```ts
optional sourceType?:
  | "application"
  | "provider-adapter"
  | "schedule-adapter"
  | "operator-surface";
```

#### Methods

##### bind()?

```ts
optional bind(input):
  | ChannelEventSourceBinding
| Promise<ChannelEventSourceBinding>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`ChannelEventSourceBindInput`](#channeleventsourcebindinput) |

###### Returns

  \| [`ChannelEventSourceBinding`](#channeleventsourcebinding)
  \| `Promise`\<[`ChannelEventSourceBinding`](#channeleventsourcebinding)\>

##### identity()?

```ts
optional identity(event, raw):
  | string
  | ChannelEventIdentity
| Promise<string | ChannelEventIdentity>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | [`ChannelEventEnvelopeInput`](#channeleventenvelopeinput) |
| `raw` | `TRaw` |

###### Returns

  \| `string`
  \| [`ChannelEventIdentity`](#channeleventidentity)
  \| `Promise`\<`string` \| [`ChannelEventIdentity`](#channeleventidentity)\>

##### normalize()

```ts
normalize(input):
  | ChannelEventEnvelopeInput<NormalizedChannelPayloadInput, unknown>
| Promise<ChannelEventEnvelopeInput<NormalizedChannelPayloadInput, unknown>>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`ChannelEventSourceNormalizeInput`](#channeleventsourcenormalizeinput)\<`TRaw`\> |

###### Returns

  \| [`ChannelEventEnvelopeInput`](#channeleventenvelopeinput)\<[`NormalizedChannelPayloadInput`](#normalizedchannelpayloadinput), `unknown`\>
  \| `Promise`\<[`ChannelEventEnvelopeInput`](#channeleventenvelopeinput)\<[`NormalizedChannelPayloadInput`](#normalizedchannelpayloadinput), `unknown`\>\>

##### verify()?

```ts
optional verify(raw):
  | ChannelAdapterVerificationResult
| Promise<ChannelAdapterVerificationResult>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `raw` | `TRaw` |

###### Returns

  \| [`ChannelAdapterVerificationResult`](#channeladapterverificationresult)
  \| `Promise`\<[`ChannelAdapterVerificationResult`](#channeladapterverificationresult)\>

***

### ChannelEventSourceBinding

#### Properties

##### agentId?

```ts
optional agentId?: string;
```

##### conversationContext?

```ts
optional conversationContext?: unknown;
```

##### conversationId?

```ts
optional conversationId?: string;
```

##### metadata?

```ts
optional metadata?: Record<string, unknown>;
```

##### outcome?

```ts
optional outcome?:
  | "blocked"
  | "start-new"
  | "resume-existing"
  | "link-and-start-new"
  | "ignore"
  | "defer"
  | "handoff-review";
```

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

***

### ChannelEventSourceBindInput

#### Properties

##### app?

```ts
optional app?: unknown;
```

##### event

```ts
event: ChannelEventEnvelopeInput;
```

***

### ChannelEventSourceEvidence

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TRawPayload` | `unknown` |

#### Properties

##### deliveryId?

```ts
optional deliveryId?: string;
```

##### eventId?

```ts
optional eventId?: string;
```

##### externalObjectIds?

```ts
optional externalObjectIds?: Record<string, string>;
```

##### metadata?

```ts
optional metadata?: Record<string, unknown>;
```

##### provider?

```ts
optional provider?: string;
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

##### streamId?

```ts
optional streamId?: string;
```

##### verified?

```ts
optional verified?: boolean;
```

***

### ChannelEventSourceHandleInput

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TRaw` | `unknown` |
| `TTurn` | `unknown` |

#### Properties

##### agentId?

```ts
optional agentId?: string;
```

##### app?

```ts
optional app?: unknown;
```

##### binding?

```ts
optional binding?: ChannelEventBindingInput;
```

##### channel?

```ts
optional channel?: ConversationChannelInput;
```

##### conversationContext?

```ts
optional conversationContext?: unknown;
```

##### conversationId?

```ts
optional conversationId?: string;
```

##### createConversation?

```ts
optional createConversation?: CreateRuntimeConversationInput;
```

##### handling?

```ts
optional handling?: ChannelEventHandlingInput<TTurn>;
```

##### raw

```ts
raw: TRaw;
```

##### signal?

```ts
optional signal?: AbortSignal;
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

***

### ChannelEventSourceNormalizeInput

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TRaw` | `unknown` |

#### Properties

##### app?

```ts
optional app?: unknown;
```

##### channel?

```ts
optional channel?: ConversationChannelInput;
```

##### raw

```ts
raw: TRaw;
```

##### source?

```ts
optional source?: ChannelEventSourceEvidence<TRaw>;
```

***

### ChannelOutputIntent

#### Extends

- [`ChannelOutputPolicyReason`](#channeloutputpolicyreason)

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TPayload` | [`NormalizedChannelPayload`](#normalizedchannelpayload) |
| `TRawPayload` | `unknown` |

#### Properties

##### actionAudience?

```ts
optional actionAudience?: "customer-facing" | "internal-support" | "mixed";
```

##### attachments?

```ts
optional attachments?: unknown[];
```

##### blockers?

```ts
optional blockers?: {
  code: string;
  kind?: string;
  message: string;
}[];
```

###### code

```ts
code: string;
```

###### kind?

```ts
optional kind?: string;
```

###### message

```ts
message: string;
```

###### Inherited from

[`ChannelOutputPolicyReason`](#channeloutputpolicyreason).[`blockers`](#blockers-4)

##### body?

```ts
optional body?: string;
```

##### capability?

```ts
optional capability?: ChannelCapability;
```

##### changesWorkflow?

```ts
optional changesWorkflow?: boolean;
```

##### channel?

```ts
optional channel?: {
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

##### deliveryMode?

```ts
optional deliveryMode?:
  | "approval"
  | "send"
  | "draft"
  | "notify"
  | "artifact"
  | "handoff-review"
  | "provider-operation"
  | "none";
```

##### exposesSensitiveData?

```ts
optional exposesSensitiveData?: boolean;
```

##### externallyVisible?

```ts
optional externallyVisible?: boolean;
```

##### id?

```ts
optional id?: string;
```

##### kind

```ts
kind: ChannelOutputIntentKind;
```

##### metadata?

```ts
optional metadata?: Record<string, unknown>;
```

###### Inherited from

[`ChannelOutputPolicyReason`](#channeloutputpolicyreason).[`metadata`](#metadata-11)

##### operationAlias?

```ts
optional operationAlias?: string;
```

##### outbound?

```ts
optional outbound?: boolean;
```

##### payload?

```ts
optional payload?: TPayload;
```

##### policyId?

```ts
optional policyId?: string;
```

###### Inherited from

[`ChannelOutputPolicyReason`](#channeloutputpolicyreason).[`policyId`](#policyid-2)

##### policyIds?

```ts
optional policyIds?: string[];
```

###### Inherited from

[`ChannelOutputPolicyReason`](#channeloutputpolicyreason).[`policyIds`](#policyids-3)

##### producer?

```ts
optional producer?: ChannelOutputIntentProducer;
```

##### providerOperation?

```ts
optional providerOperation?: string;
```

##### providerPackageId?

```ts
optional providerPackageId?: string;
```

##### reason?

```ts
optional reason?: string;
```

###### Inherited from

[`ChannelOutputPolicyReason`](#channeloutputpolicyreason).[`reason`](#reason-6)

##### reasonCode?

```ts
optional reasonCode?: string;
```

###### Inherited from

[`ChannelOutputPolicyReason`](#channeloutputpolicyreason).[`reasonCode`](#reasoncode-5)

##### reasonLabel?

```ts
optional reasonLabel?: string;
```

###### Inherited from

[`ChannelOutputPolicyReason`](#channeloutputpolicyreason).[`reasonLabel`](#reasonlabel-5)

##### requiredPolicyIds?

```ts
optional requiredPolicyIds?: string[];
```

##### sideEffect?

```ts
optional sideEffect?: boolean;
```

##### source?

```ts
optional source?: ChannelEventSourceEvidence<TRawPayload>;
```

##### subject?

```ts
optional subject?: string;
```

##### text?

```ts
optional text?: string;
```

***

### ChannelOutputIntentInput

#### Extends

- `Omit`\<[`ChannelOutputIntent`](#channeloutputintent)\<`TPayload`, `TRawPayload`\>, `"kind"` \| `"channel"`\>

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TPayload` | [`NormalizedChannelPayloadInput`](#normalizedchannelpayloadinput) |
| `TRawPayload` | `unknown` |

#### Properties

##### actionAudience?

```ts
optional actionAudience?: "customer-facing" | "internal-support" | "mixed";
```

###### Inherited from

```ts
Omit.actionAudience
```

##### attachments?

```ts
optional attachments?: unknown[];
```

###### Inherited from

```ts
Omit.attachments
```

##### blockers?

```ts
optional blockers?: {
  code: string;
  kind?: string;
  message: string;
}[];
```

###### code

```ts
code: string;
```

###### kind?

```ts
optional kind?: string;
```

###### message

```ts
message: string;
```

###### Inherited from

[`ChannelOutputPolicyReason`](#channeloutputpolicyreason).[`blockers`](#blockers-4)

##### body?

```ts
optional body?: string;
```

###### Inherited from

```ts
Omit.body
```

##### capability?

```ts
optional capability?: ChannelCapability;
```

###### Inherited from

```ts
Omit.capability
```

##### changesWorkflow?

```ts
optional changesWorkflow?: boolean;
```

###### Inherited from

```ts
Omit.changesWorkflow
```

##### channel?

```ts
optional channel?: ConversationChannelInput;
```

##### deliveryMode?

```ts
optional deliveryMode?:
  | "approval"
  | "send"
  | "draft"
  | "notify"
  | "artifact"
  | "handoff-review"
  | "provider-operation"
  | "none";
```

###### Inherited from

```ts
Omit.deliveryMode
```

##### exposesSensitiveData?

```ts
optional exposesSensitiveData?: boolean;
```

###### Inherited from

```ts
Omit.exposesSensitiveData
```

##### externallyVisible?

```ts
optional externallyVisible?: boolean;
```

###### Inherited from

```ts
Omit.externallyVisible
```

##### id?

```ts
optional id?: string;
```

###### Inherited from

```ts
Omit.id
```

##### kind?

```ts
optional kind?: ChannelOutputIntentKind;
```

##### metadata?

```ts
optional metadata?: Record<string, unknown>;
```

###### Inherited from

[`ChannelOutputPolicyReason`](#channeloutputpolicyreason).[`metadata`](#metadata-11)

##### operationAlias?

```ts
optional operationAlias?: string;
```

###### Inherited from

```ts
Omit.operationAlias
```

##### outbound?

```ts
optional outbound?: boolean;
```

###### Inherited from

```ts
Omit.outbound
```

##### payload?

```ts
optional payload?: TPayload;
```

###### Inherited from

```ts
Omit.payload
```

##### policyId?

```ts
optional policyId?: string;
```

###### Inherited from

[`ChannelOutputPolicyReason`](#channeloutputpolicyreason).[`policyId`](#policyid-2)

##### policyIds?

```ts
optional policyIds?: string[];
```

###### Inherited from

[`ChannelOutputPolicyReason`](#channeloutputpolicyreason).[`policyIds`](#policyids-3)

##### producer?

```ts
optional producer?: ChannelOutputIntentProducer;
```

###### Inherited from

```ts
Omit.producer
```

##### providerOperation?

```ts
optional providerOperation?: string;
```

###### Inherited from

```ts
Omit.providerOperation
```

##### providerPackageId?

```ts
optional providerPackageId?: string;
```

###### Inherited from

```ts
Omit.providerPackageId
```

##### reason?

```ts
optional reason?: string;
```

###### Inherited from

[`ChannelOutputPolicyReason`](#channeloutputpolicyreason).[`reason`](#reason-6)

##### reasonCode?

```ts
optional reasonCode?: string;
```

###### Inherited from

[`ChannelOutputPolicyReason`](#channeloutputpolicyreason).[`reasonCode`](#reasoncode-5)

##### reasonLabel?

```ts
optional reasonLabel?: string;
```

###### Inherited from

[`ChannelOutputPolicyReason`](#channeloutputpolicyreason).[`reasonLabel`](#reasonlabel-5)

##### requiredPolicyIds?

```ts
optional requiredPolicyIds?: string[];
```

###### Inherited from

```ts
Omit.requiredPolicyIds
```

##### sideEffect?

```ts
optional sideEffect?: boolean;
```

###### Inherited from

```ts
Omit.sideEffect
```

##### source?

```ts
optional source?: ChannelEventSourceEvidence<TRawPayload>;
```

###### Inherited from

```ts
Omit.source
```

##### subject?

```ts
optional subject?: string;
```

###### Inherited from

```ts
Omit.subject
```

##### text?

```ts
optional text?: string;
```

###### Inherited from

```ts
Omit.text
```

***

### ChannelOutputIntentProducer

#### Properties

##### id?

```ts
optional id?: string;
```

##### metadata?

```ts
optional metadata?: Record<string, unknown>;
```

##### name?

```ts
optional name?: string;
```

##### type

```ts
type:
  | "policy"
  | "schedule"
  | "agent"
  | "operator"
  | "application"
  | "provider-adapter"
  | "tool"
  | "journey";
```

***

### ChannelOutputPolicyReason

#### Extended by

- [`ChannelOutputIntent`](#channeloutputintent)
- [`ChannelOutputResolutionDecision`](#channeloutputresolutiondecision)

#### Properties

##### blockers?

```ts
optional blockers?: {
  code: string;
  kind?: string;
  message: string;
}[];
```

###### code

```ts
code: string;
```

###### kind?

```ts
optional kind?: string;
```

###### message

```ts
message: string;
```

##### metadata?

```ts
optional metadata?: Record<string, unknown>;
```

##### policyId?

```ts
optional policyId?: string;
```

##### policyIds?

```ts
optional policyIds?: string[];
```

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

***

### ChannelOutputResolution

#### Extends

- [`ChannelOutputResolutionDecision`](#channeloutputresolutiondecision)\<`TPayload`\>

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TPayload` | `unknown` |

#### Properties

##### actionAudience?

```ts
optional actionAudience?: "customer-facing" | "internal-support" | "mixed";
```

###### Inherited from

[`ChannelOutputResolutionDecision`](#channeloutputresolutiondecision).[`actionAudience`](#actionaudience-3)

##### blockers?

```ts
optional blockers?: {
  code: string;
  kind?: string;
  message: string;
}[];
```

###### code

```ts
code: string;
```

###### kind?

```ts
optional kind?: string;
```

###### message

```ts
message: string;
```

###### Inherited from

[`ChannelOutputResolutionDecision`](#channeloutputresolutiondecision).[`blockers`](#blockers-6)

##### capability?

```ts
optional capability?: ChannelCapability;
```

###### Inherited from

[`ChannelOutputResolutionDecision`](#channeloutputresolutiondecision).[`capability`](#capability-3)

##### channel?

```ts
optional channel?: {
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

##### deliveryMode?

```ts
optional deliveryMode?:
  | "approval"
  | "send"
  | "draft"
  | "notify"
  | "artifact"
  | "handoff-review"
  | "provider-operation"
  | "none";
```

###### Inherited from

[`ChannelOutputResolutionDecision`](#channeloutputresolutiondecision).[`deliveryMode`](#deliverymode-3)

##### deliveryStatus?

```ts
optional deliveryStatus?: string;
```

##### editableFields?

```ts
optional editableFields?: string[];
```

###### Inherited from

[`ChannelOutputResolutionDecision`](#channeloutputresolutiondecision).[`editableFields`](#editablefields-1)

##### expiresAt?

```ts
optional expiresAt?: string;
```

###### Inherited from

[`ChannelOutputResolutionDecision`](#channeloutputresolutiondecision).[`expiresAt`](#expiresat-1)

##### externalMessageId?

```ts
optional externalMessageId?: string;
```

##### id

```ts
id: string;
```

##### intentId?

```ts
optional intentId?: string;
```

##### metadata?

```ts
optional metadata?: Record<string, unknown>;
```

###### Inherited from

[`ChannelOutputResolutionDecision`](#channeloutputresolutiondecision).[`metadata`](#metadata-13)

##### operationAlias?

```ts
optional operationAlias?: string;
```

###### Inherited from

[`ChannelOutputResolutionDecision`](#channeloutputresolutiondecision).[`operationAlias`](#operationalias-3)

##### outcome

```ts
outcome:
  | "send"
  | "draft"
  | "notify"
  | "artifact"
  | "defer"
  | "handoff-review"
  | "no-op"
  | "provider-operation"
  | "approval-required"
  | "block"
  | "drop";
```

###### Inherited from

[`ChannelOutputResolutionDecision`](#channeloutputresolutiondecision).[`outcome`](#outcome-5)

##### payload?

```ts
optional payload?: TPayload;
```

###### Inherited from

[`ChannelOutputResolutionDecision`](#channeloutputresolutiondecision).[`payload`](#payload-5)

##### policyId?

```ts
optional policyId?: string;
```

###### Inherited from

[`ChannelOutputResolutionDecision`](#channeloutputresolutiondecision).[`policyId`](#policyid-4)

##### policyIds?

```ts
optional policyIds?: string[];
```

###### Inherited from

[`ChannelOutputResolutionDecision`](#channeloutputresolutiondecision).[`policyIds`](#policyids-5)

##### providerOperation?

```ts
optional providerOperation?: string;
```

###### Inherited from

[`ChannelOutputResolutionDecision`](#channeloutputresolutiondecision).[`providerOperation`](#provideroperation-3)

##### providerPackageId?

```ts
optional providerPackageId?: string;
```

###### Inherited from

[`ChannelOutputResolutionDecision`](#channeloutputresolutiondecision).[`providerPackageId`](#providerpackageid-4)

##### providerResult?

```ts
optional providerResult?: unknown;
```

##### reason?

```ts
optional reason?: string;
```

###### Inherited from

[`ChannelOutputResolutionDecision`](#channeloutputresolutiondecision).[`reason`](#reason-8)

##### reasonCode?

```ts
optional reasonCode?: string;
```

###### Inherited from

[`ChannelOutputResolutionDecision`](#channeloutputresolutiondecision).[`reasonCode`](#reasoncode-7)

##### reasonLabel?

```ts
optional reasonLabel?: string;
```

###### Inherited from

[`ChannelOutputResolutionDecision`](#channeloutputresolutiondecision).[`reasonLabel`](#reasonlabel-7)

##### resolvedAt

```ts
resolvedAt: string;
```

##### status

```ts
status: "blocked" | "no-op" | "deferred" | "resolved" | "pending";
```

###### Overrides

[`ChannelOutputResolverResult`](#channeloutputresolverresult).[`status`](#status-3)

##### supportedApprovalResolutions?

```ts
optional supportedApprovalResolutions?: string[];
```

###### Inherited from

[`ChannelOutputResolutionDecision`](#channeloutputresolutiondecision).[`supportedApprovalResolutions`](#supportedapprovalresolutions-1)

***

### ChannelOutputResolutionDecision

#### Extends

- [`ChannelOutputPolicyReason`](#channeloutputpolicyreason)

#### Extended by

- [`ChannelOutputResolution`](#channeloutputresolution)
- [`ChannelOutputResolverResult`](#channeloutputresolverresult)

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TPayload` | `unknown` |

#### Properties

##### actionAudience?

```ts
optional actionAudience?: "customer-facing" | "internal-support" | "mixed";
```

##### blockers?

```ts
optional blockers?: {
  code: string;
  kind?: string;
  message: string;
}[];
```

###### code

```ts
code: string;
```

###### kind?

```ts
optional kind?: string;
```

###### message

```ts
message: string;
```

###### Inherited from

[`ChannelOutputPolicyReason`](#channeloutputpolicyreason).[`blockers`](#blockers-4)

##### capability?

```ts
optional capability?: ChannelCapability;
```

##### deliveryMode?

```ts
optional deliveryMode?:
  | "approval"
  | "send"
  | "draft"
  | "notify"
  | "artifact"
  | "handoff-review"
  | "provider-operation"
  | "none";
```

##### editableFields?

```ts
optional editableFields?: string[];
```

##### expiresAt?

```ts
optional expiresAt?: string;
```

##### metadata?

```ts
optional metadata?: Record<string, unknown>;
```

###### Inherited from

[`ChannelOutputPolicyReason`](#channeloutputpolicyreason).[`metadata`](#metadata-11)

##### operationAlias?

```ts
optional operationAlias?: string;
```

##### outcome

```ts
outcome:
  | "send"
  | "draft"
  | "notify"
  | "artifact"
  | "defer"
  | "handoff-review"
  | "no-op"
  | "provider-operation"
  | "approval-required"
  | "block"
  | "drop";
```

##### payload?

```ts
optional payload?: TPayload;
```

##### policyId?

```ts
optional policyId?: string;
```

###### Inherited from

[`ChannelOutputPolicyReason`](#channeloutputpolicyreason).[`policyId`](#policyid-2)

##### policyIds?

```ts
optional policyIds?: string[];
```

###### Inherited from

[`ChannelOutputPolicyReason`](#channeloutputpolicyreason).[`policyIds`](#policyids-3)

##### providerOperation?

```ts
optional providerOperation?: string;
```

##### providerPackageId?

```ts
optional providerPackageId?: string;
```

##### reason?

```ts
optional reason?: string;
```

###### Inherited from

[`ChannelOutputPolicyReason`](#channeloutputpolicyreason).[`reason`](#reason-6)

##### reasonCode?

```ts
optional reasonCode?: string;
```

###### Inherited from

[`ChannelOutputPolicyReason`](#channeloutputpolicyreason).[`reasonCode`](#reasoncode-5)

##### reasonLabel?

```ts
optional reasonLabel?: string;
```

###### Inherited from

[`ChannelOutputPolicyReason`](#channeloutputpolicyreason).[`reasonLabel`](#reasonlabel-5)

##### status?

```ts
optional status?: "blocked" | "no-op" | "deferred" | "resolved" | "pending";
```

##### supportedApprovalResolutions?

```ts
optional supportedApprovalResolutions?: string[];
```

***

### ChannelOutputResolutionPayload

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TPayload` | `unknown` |

#### Properties

##### outputIntent

```ts
outputIntent: ChannelOutputIntent<TPayload>;
```

##### resolution

```ts
resolution: ChannelOutputResolution;
```

***

### ChannelOutputResolutionPolicyInput

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TPayload` | `unknown` |

#### Properties

##### app

```ts
app: unknown;
```

##### capabilityDecision?

```ts
optional capabilityDecision?: CapabilityUseDecision;
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

##### conversation

```ts
conversation: ConversationRecord;
```

##### defaultResolution

```ts
defaultResolution: ChannelOutputResolutionDecision;
```

##### intent

```ts
intent: ChannelOutputIntent<TPayload>;
```

***

### ChannelOutputResolverInput

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TPayload` | `unknown` |

#### Properties

##### app

```ts
app: unknown;
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

##### conversationId

```ts
conversationId: string;
```

##### outputIntent

```ts
outputIntent: ChannelOutputIntent<TPayload>;
```

##### signal?

```ts
optional signal?: AbortSignal;
```

***

### ChannelOutputResolverResult

#### Extends

- [`ChannelOutputResolutionDecision`](#channeloutputresolutiondecision)\<`TPayload`\>

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TPayload` | `unknown` |

#### Properties

##### actionAudience?

```ts
optional actionAudience?: "customer-facing" | "internal-support" | "mixed";
```

###### Inherited from

[`ChannelOutputResolutionDecision`](#channeloutputresolutiondecision).[`actionAudience`](#actionaudience-3)

##### blockers?

```ts
optional blockers?: {
  code: string;
  kind?: string;
  message: string;
}[];
```

###### code

```ts
code: string;
```

###### kind?

```ts
optional kind?: string;
```

###### message

```ts
message: string;
```

###### Inherited from

[`ChannelOutputResolutionDecision`](#channeloutputresolutiondecision).[`blockers`](#blockers-6)

##### capability?

```ts
optional capability?: ChannelCapability;
```

###### Inherited from

[`ChannelOutputResolutionDecision`](#channeloutputresolutiondecision).[`capability`](#capability-3)

##### deliveryMode?

```ts
optional deliveryMode?:
  | "approval"
  | "send"
  | "draft"
  | "notify"
  | "artifact"
  | "handoff-review"
  | "provider-operation"
  | "none";
```

###### Inherited from

[`ChannelOutputResolutionDecision`](#channeloutputresolutiondecision).[`deliveryMode`](#deliverymode-3)

##### deliveryStatus?

```ts
optional deliveryStatus?: string;
```

##### editableFields?

```ts
optional editableFields?: string[];
```

###### Inherited from

[`ChannelOutputResolutionDecision`](#channeloutputresolutiondecision).[`editableFields`](#editablefields-1)

##### expiresAt?

```ts
optional expiresAt?: string;
```

###### Inherited from

[`ChannelOutputResolutionDecision`](#channeloutputresolutiondecision).[`expiresAt`](#expiresat-1)

##### externalMessageId?

```ts
optional externalMessageId?: string;
```

##### metadata?

```ts
optional metadata?: Record<string, unknown>;
```

###### Inherited from

[`ChannelOutputResolutionDecision`](#channeloutputresolutiondecision).[`metadata`](#metadata-13)

##### operationAlias?

```ts
optional operationAlias?: string;
```

###### Inherited from

[`ChannelOutputResolutionDecision`](#channeloutputresolutiondecision).[`operationAlias`](#operationalias-3)

##### outcome

```ts
outcome:
  | "send"
  | "draft"
  | "notify"
  | "artifact"
  | "defer"
  | "handoff-review"
  | "no-op"
  | "provider-operation"
  | "approval-required"
  | "block"
  | "drop";
```

###### Inherited from

[`ChannelOutputResolutionDecision`](#channeloutputresolutiondecision).[`outcome`](#outcome-5)

##### payload?

```ts
optional payload?: TPayload;
```

###### Inherited from

[`ChannelOutputResolutionDecision`](#channeloutputresolutiondecision).[`payload`](#payload-5)

##### policyId?

```ts
optional policyId?: string;
```

###### Inherited from

[`ChannelOutputResolutionDecision`](#channeloutputresolutiondecision).[`policyId`](#policyid-4)

##### policyIds?

```ts
optional policyIds?: string[];
```

###### Inherited from

[`ChannelOutputResolutionDecision`](#channeloutputresolutiondecision).[`policyIds`](#policyids-5)

##### providerOperation?

```ts
optional providerOperation?: string;
```

###### Inherited from

[`ChannelOutputResolutionDecision`](#channeloutputresolutiondecision).[`providerOperation`](#provideroperation-3)

##### providerPackageId?

```ts
optional providerPackageId?: string;
```

###### Inherited from

[`ChannelOutputResolutionDecision`](#channeloutputresolutiondecision).[`providerPackageId`](#providerpackageid-4)

##### providerResult?

```ts
optional providerResult?: unknown;
```

##### reason?

```ts
optional reason?: string;
```

###### Inherited from

[`ChannelOutputResolutionDecision`](#channeloutputresolutiondecision).[`reason`](#reason-8)

##### reasonCode?

```ts
optional reasonCode?: string;
```

###### Inherited from

[`ChannelOutputResolutionDecision`](#channeloutputresolutiondecision).[`reasonCode`](#reasoncode-7)

##### reasonLabel?

```ts
optional reasonLabel?: string;
```

###### Inherited from

[`ChannelOutputResolutionDecision`](#channeloutputresolutiondecision).[`reasonLabel`](#reasonlabel-7)

##### status?

```ts
optional status?: "blocked" | "no-op" | "deferred" | "resolved" | "pending";
```

###### Inherited from

[`ChannelOutputResolutionDecision`](#channeloutputresolutiondecision).[`status`](#status-2)

##### supportedApprovalResolutions?

```ts
optional supportedApprovalResolutions?: string[];
```

###### Inherited from

[`ChannelOutputResolutionDecision`](#channeloutputresolutiondecision).[`supportedApprovalResolutions`](#supportedapprovalresolutions-1)

***

### ChannelProviderAdapter

#### Extends

- [`ChannelEventSource`](#channeleventsource)\<`TRaw`\>

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TRaw` | `unknown` |

#### Properties

##### channel?

```ts
optional channel?: ConversationChannelInput;
```

###### Inherited from

[`ChannelEventSource`](#channeleventsource).[`channel`](#channel-3)

##### id

```ts
id: string;
```

###### Inherited from

[`ChannelEventSource`](#channeleventsource).[`id`](#id-7)

##### provider

```ts
provider: string;
```

##### providerPackageId?

```ts
optional providerPackageId?: string;
```

##### sourceType?

```ts
optional sourceType?:
  | "application"
  | "provider-adapter"
  | "schedule-adapter"
  | "operator-surface";
```

###### Inherited from

[`ChannelEventSource`](#channeleventsource).[`sourceType`](#sourcetype)

#### Methods

##### bind()?

```ts
optional bind(input):
  | ChannelEventSourceBinding
| Promise<ChannelEventSourceBinding>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`ChannelEventSourceBindInput`](#channeleventsourcebindinput) |

###### Returns

  \| [`ChannelEventSourceBinding`](#channeleventsourcebinding)
  \| `Promise`\<[`ChannelEventSourceBinding`](#channeleventsourcebinding)\>

###### Inherited from

[`ChannelEventSource`](#channeleventsource).[`bind`](#bind)

##### identity()?

```ts
optional identity(event, raw):
  | string
  | ChannelEventIdentity
| Promise<string | ChannelEventIdentity>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | [`ChannelEventEnvelopeInput`](#channeleventenvelopeinput) |
| `raw` | `TRaw` |

###### Returns

  \| `string`
  \| [`ChannelEventIdentity`](#channeleventidentity)
  \| `Promise`\<`string` \| [`ChannelEventIdentity`](#channeleventidentity)\>

###### Inherited from

[`ChannelEventSource`](#channeleventsource).[`identity`](#identity-2)

##### normalize()

```ts
normalize(input):
  | ChannelEventEnvelopeInput<NormalizedChannelPayloadInput, unknown>
| Promise<ChannelEventEnvelopeInput<NormalizedChannelPayloadInput, unknown>>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`ChannelEventSourceNormalizeInput`](#channeleventsourcenormalizeinput)\<`TRaw`\> |

###### Returns

  \| [`ChannelEventEnvelopeInput`](#channeleventenvelopeinput)\<[`NormalizedChannelPayloadInput`](#normalizedchannelpayloadinput), `unknown`\>
  \| `Promise`\<[`ChannelEventEnvelopeInput`](#channeleventenvelopeinput)\<[`NormalizedChannelPayloadInput`](#normalizedchannelpayloadinput), `unknown`\>\>

###### Inherited from

[`ChannelEventSource`](#channeleventsource).[`normalize`](#normalize)

##### resolveOutput()?

```ts
optional resolveOutput(input): Promise<ChannelOutputResolverResult<unknown>>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`ChannelOutputResolverInput`](#channeloutputresolverinput) |

###### Returns

`Promise`\<[`ChannelOutputResolverResult`](#channeloutputresolverresult)\<`unknown`\>\>

##### verify()?

```ts
optional verify(raw):
  | ChannelAdapterVerificationResult
| Promise<ChannelAdapterVerificationResult>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `raw` | `TRaw` |

###### Returns

  \| [`ChannelAdapterVerificationResult`](#channeladapterverificationresult)
  \| `Promise`\<[`ChannelAdapterVerificationResult`](#channeladapterverificationresult)\>

###### Inherited from

[`ChannelEventSource`](#channeleventsource).[`verify`](#verify)

***

### CommitVoiceTranscriptInput

#### Extended by

- [`CommitVoiceTranscriptReferenceInput`](#commitvoicetranscriptreferenceinput)

#### Properties

##### channelSegmentId

```ts
channelSegmentId: string;
```

##### conversationId

```ts
conversationId: string;
```

##### endedAtMs?

```ts
optional endedAtMs?: number;
```

##### metadata?

```ts
optional metadata?: Record<string, unknown>;
```

##### recordingReferenceId?

```ts
optional recordingReferenceId?: string;
```

##### speaker

```ts
speaker: VoiceSpeaker;
```

##### startedAtMs?

```ts
optional startedAtMs?: number;
```

##### text

```ts
text: string;
```

##### transcriptionSource?

```ts
optional transcriptionSource?: string;
```

***

### CommitVoiceTranscriptReferenceInput

#### Extends

- [`CommitVoiceTranscriptInput`](#commitvoicetranscriptinput)

#### Properties

##### channelSegmentId

```ts
channelSegmentId: string;
```

###### Inherited from

[`CommitVoiceTranscriptInput`](#commitvoicetranscriptinput).[`channelSegmentId`](#channelsegmentid)

##### conversationId

```ts
conversationId: string;
```

###### Inherited from

[`CommitVoiceTranscriptInput`](#commitvoicetranscriptinput).[`conversationId`](#conversationid-6)

##### endedAtMs?

```ts
optional endedAtMs?: number;
```

###### Inherited from

[`CommitVoiceTranscriptInput`](#commitvoicetranscriptinput).[`endedAtMs`](#endedatms)

##### messageEventId

```ts
messageEventId: string;
```

##### metadata?

```ts
optional metadata?: Record<string, unknown>;
```

###### Inherited from

[`CommitVoiceTranscriptInput`](#commitvoicetranscriptinput).[`metadata`](#metadata-15)

##### recordingReferenceId?

```ts
optional recordingReferenceId?: string;
```

###### Inherited from

[`CommitVoiceTranscriptInput`](#commitvoicetranscriptinput).[`recordingReferenceId`](#recordingreferenceid)

##### speaker

```ts
speaker: VoiceSpeaker;
```

###### Inherited from

[`CommitVoiceTranscriptInput`](#commitvoicetranscriptinput).[`speaker`](#speaker)

##### startedAtMs?

```ts
optional startedAtMs?: number;
```

###### Inherited from

[`CommitVoiceTranscriptInput`](#commitvoicetranscriptinput).[`startedAtMs`](#startedatms)

##### text

```ts
text: string;
```

###### Inherited from

[`CommitVoiceTranscriptInput`](#commitvoicetranscriptinput).[`text`](#text-3)

##### transcriptionSource?

```ts
optional transcriptionSource?: string;
```

###### Inherited from

[`CommitVoiceTranscriptInput`](#commitvoicetranscriptinput).[`transcriptionSource`](#transcriptionsource)

***

### CommitVoiceTranscriptResult

#### Properties

##### event

```ts
event: RuntimeEvent;
```

##### events

```ts
events: RuntimeEvent[];
```

##### message

```ts
message: RuntimeEvent;
```

***

### CompactConversationInput

#### Properties

##### conversationId

```ts
conversationId: string;
```

##### fromOffset?

```ts
optional fromOffset?: number;
```

##### schemaVersion?

```ts
optional schemaVersion?: string;
```

##### signal?

```ts
optional signal?: AbortSignal;
```

##### toOffset?

```ts
optional toOffset?: number;
```

***

### CompactConversationResult

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TSummary` | [`ConversationCompactionSummary`](#conversationcompactionsummary) |

#### Properties

##### events

```ts
events: RuntimeEvent[];
```

##### snapshot

```ts
snapshot: RuntimeSnapshot;
```

##### summary

```ts
summary: TSummary;
```

***

### CompiledActionRun

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TContext` | `unknown` |

#### Properties

##### action

```ts
action: ActionDefinition;
```

##### actionType

```ts
actionType: "entry" | "exit" | "transition";
```

##### input?

```ts
optional input?: (args) => unknown;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | \{ `context`: `TContext`; \} |
| `args.context` | `TContext` |

###### Returns

`unknown`

***

### CompiledAgent

#### Properties

##### behavior

```ts
behavior: AgentBehaviorOptions;
```

##### channels?

```ts
optional channels?: AgentChannelPolicyMap;
```

##### configuration?

```ts
optional configuration?: AgentConfigurationOptions;
```

##### customEvents

```ts
customEvents: AnyCustomRuntimeEvent[];
```

##### handoff?

```ts
optional handoff?: AgentHandoffPolicyOptions;
```

##### id

```ts
id: string;
```

##### instructions

```ts
instructions: string;
```

##### journeys

```ts
journeys: CompiledJourney[];
```

##### knowledge

```ts
knowledge: KnowledgeSource<string, ZodType<unknown, unknown, $ZodTypeInternals<unknown, unknown>>, ZodType<unknown, unknown, $ZodTypeInternals<unknown, unknown>>>[];
```

##### logLevel?

```ts
optional logLevel?: AgentLogLevel;
```

##### persona?

```ts
optional persona?: AgentPersonaOptions;
```

##### postProcessing

```ts
postProcessing: AgentPostProcessingOptions;
```

##### tools

```ts
tools: AnyTool[];
```

##### voice?

```ts
optional voice?: VoiceProfile;
```

##### widgets

```ts
widgets: WidgetDefinition<string, ZodType<unknown, unknown, $ZodTypeInternals<unknown, unknown>>, ZodType<unknown, unknown, $ZodTypeInternals<unknown, unknown>>>[];
```

***

### CompiledContextReusePolicy

#### Properties

##### fields?

```ts
optional fields?: string[];
```

##### when

```ts
when: ContextReusePredicate;
```

***

### CompiledDelegation

#### Properties

##### completeWhen

```ts
completeWhen: string[];
```

##### goal

```ts
goal: string;
```

##### instructions?

```ts
optional instructions?: string;
```

##### tools

```ts
tools: AnyTool[];
```

***

### CompiledJourney

#### Properties

##### alternateEntries

```ts
alternateEntries: CompiledJourneyEntry<unknown>[];
```

##### always?

```ts
optional always?: JourneyActivationPredicate;
```

##### alwaysInclude

```ts
alwaysInclude: boolean;
```

##### condition

```ts
condition: string;
```

##### context?

```ts
optional context?: ObjectSchema;
```

##### contextReuse?

```ts
optional contextReuse?: CompiledContextReusePolicy;
```

##### delegation?

```ts
optional delegation?: CompiledDelegation;
```

##### examples

```ts
examples: string[];
```

##### guard?

```ts
optional guard?: JourneyGuardPredicate;
```

##### id

```ts
id: string;
```

##### includeWhen?

```ts
optional includeWhen?: CandidateFilterPredicate;
```

##### initialStateId?

```ts
optional initialStateId?: string;
```

##### kind

```ts
kind: "stateMachine" | "delegation";
```

##### knowledge

```ts
knowledge: KnowledgeSource<string, ZodType<unknown, unknown, $ZodTypeInternals<unknown, unknown>>, ZodType<unknown, unknown, $ZodTypeInternals<unknown, unknown>>>[];
```

##### matcher?

```ts
optional matcher?: JourneyActivationPredicate;
```

##### priority

```ts
priority: number;
```

##### states

```ts
states: CompiledState[];
```

##### stickiness

```ts
stickiness: "low" | "medium" | "high";
```

##### tags

```ts
tags: string[];
```

##### tools

```ts
tools: AnyTool[];
```

#### Methods

##### toGraph()

```ts
toGraph(): JourneyGraph;
```

###### Returns

[`JourneyGraph`](#journeygraph)

##### toJSON()

```ts
toJSON(): JourneyGraph;
```

###### Returns

[`JourneyGraph`](#journeygraph)

##### toMermaid()

```ts
toMermaid(): string;
```

###### Returns

`string`

***

### CompiledJourneyEntry

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TContext` | `unknown` |

#### Properties

##### description?

```ts
optional description?: string;
```

##### priority?

```ts
optional priority?: number;
```

##### stateId

```ts
stateId: string;
```

##### when

```ts
when: JourneyEntryPredicate<unknown, unknown, unknown, TContext>;
```

***

### CompiledState

#### Properties

##### actionRuns

```ts
actionRuns: CompiledActionRun<unknown>[];
```

##### actions

```ts
actions: {
  name: string;
  type: "entry" | "exit" | "transition";
}[];
```

###### name

```ts
name: string;
```

###### type

```ts
type: "entry" | "exit" | "transition";
```

##### collected

```ts
collected: {
  confirm?: true | "beforeAction" | ConfirmationPolicy;
  extract: boolean;
  path: string;
  prompt?: string;
  required: boolean;
  requiredWhen?: (args) => boolean;
  widget?: WidgetDefinition;
  widgetInput?: unknown;
}[];
```

###### confirm?

```ts
optional confirm?: true | "beforeAction" | ConfirmationPolicy;
```

###### extract

```ts
extract: boolean;
```

###### path

```ts
path: string;
```

###### prompt?

```ts
optional prompt?: string;
```

###### required

```ts
required: boolean;
```

###### requiredWhen?

```ts
optional requiredWhen?: (args) => boolean;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | \{ `context`: `unknown`; \} |
| `args.context` | `unknown` |

###### Returns

`boolean`

###### widget?

```ts
optional widget?: WidgetDefinition;
```

###### widgetInput?

```ts
optional widgetInput?: unknown;
```

##### id

```ts
id: string;
```

##### initialStateId?

```ts
optional initialStateId?: string;
```

##### instructions?

```ts
optional instructions?: string;
```

##### knowledge

```ts
knowledge: KnowledgeSource<string, ZodType<unknown, unknown, $ZodTypeInternals<unknown, unknown>>, ZodType<unknown, unknown, $ZodTypeInternals<unknown, unknown>>>[];
```

##### parentId?

```ts
optional parentId?: string;
```

##### requiresVisit

```ts
requiresVisit: boolean;
```

##### summary?

```ts
optional summary?: string;
```

##### toolRuns

```ts
toolRuns: CompiledToolRun<unknown>[];
```

##### tools

```ts
tools: AnyTool[];
```

##### transitions

```ts
transitions: CompiledTransition<unknown>[];
```

##### type

```ts
type: "state" | "parallel" | "final";
```

***

### CompiledToolRun

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TContext` | `unknown` |

#### Properties

##### actionType

```ts
actionType: "entry" | "exit" | "transition";
```

##### assign

```ts
assign: {
  path: string;
  value: (args) => unknown;
}[];
```

###### path

```ts
path: string;
```

###### value

```ts
value: (args) => unknown;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | \{ `context`: `TContext`; `output`: `unknown`; \} |
| `args.context` | `TContext` |
| `args.output` | `unknown` |

###### Returns

`unknown`

##### confirm?

```ts
optional confirm?: ConfirmationPolicy;
```

##### input?

```ts
optional input?: (args) => unknown;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | \{ `context`: `TContext`; \} |
| `args.context` | `TContext` |

###### Returns

`unknown`

##### onFailureId?

```ts
optional onFailureId?: string;
```

##### onSuccessId?

```ts
optional onSuccessId?: string;
```

##### onValidationErrorId?

```ts
optional onValidationErrorId?: string;
```

##### tool

```ts
tool: AnyTool;
```

***

### CompiledTransition

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TContext` | `unknown` |

#### Properties

##### description?

```ts
optional description?: string;
```

##### eventName?

```ts
optional eventName?: string;
```

##### guard?

```ts
optional guard?: (context) => MaybePromise$1<GuardResult>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `context` | [`GuardContext`](#guardcontext)\<`unknown`, `TContext`\> |

###### Returns

`MaybePromise$1`\<[`GuardResult`](#guardresult)\>

##### kind

```ts
kind: "event" | "conversational";
```

##### priority?

```ts
optional priority?: number;
```

##### targetId

```ts
targetId: string;
```

***

### ConfirmationPolicy

#### Properties

##### message?

```ts
optional message?: string;
```

##### reason?

```ts
optional reason?: string;
```

##### widget?

```ts
optional widget?: WidgetDefinition;
```

***

### ContextReusePolicy

#### Type Parameters

| Type Parameter |
| ------ |
| `TContext` |

#### Properties

##### fields?

```ts
optional fields?: ContextPath<TContext>[];
```

##### when

```ts
when: ContextReusePredicate<unknown, unknown, unknown, TContext>;
```

***

### ConversationRecord

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TConversationContext` | `unknown` |

#### Properties

##### agentId

```ts
agentId: string;
```

##### channel?

```ts
optional channel?: ConversationChannel;
```

##### context

```ts
context: TConversationContext;
```

##### createdAt

```ts
createdAt: string;
```

##### id

```ts
id: string;
```

##### lifecycle

```ts
lifecycle: ConversationLifecycle;
```

##### updatedAt

```ts
updatedAt: string;
```

***

### CreateConversationInput

#### Extended by

- [`CreateRuntimeConversationInput`](#createruntimeconversationinput)

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TConversationContext` | `unknown` |

#### Properties

##### agentId

```ts
agentId: string;
```

##### channel?

```ts
optional channel?: ConversationChannelInput;
```

##### context

```ts
context: TConversationContext;
```

##### id?

```ts
optional id?: string;
```

***

### CreateRuntimeConversationInput

#### Extends

- [`CreateConversationInput`](#createconversationinput)\<`TConversationContext`\>

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TConversationContext` | `unknown` |

#### Properties

##### agentId

```ts
agentId: string;
```

###### Inherited from

[`CreateConversationInput`](#createconversationinput).[`agentId`](#agentid-4)

##### channel?

```ts
optional channel?: ConversationChannelInput;
```

###### Inherited from

[`CreateConversationInput`](#createconversationinput).[`channel`](#channel-13)

##### context

```ts
context: TConversationContext;
```

###### Inherited from

[`CreateConversationInput`](#createconversationinput).[`context`](#context-2)

##### id?

```ts
optional id?: string;
```

###### Inherited from

[`CreateConversationInput`](#createconversationinput).[`id`](#id-17)

***

### CustomRuntimeEventDefinition

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TName` *extends* `string` | `string` |
| `TPayloadSchema` *extends* `z.ZodType` | `z.ZodType` |

#### Properties

##### kind

```ts
kind: "customRuntimeEvent";
```

##### name

```ts
name: TName;
```

##### payload

```ts
payload: TPayloadSchema;
```

##### visibleToModel?

```ts
optional visibleToModel?: boolean;
```

***

### DelegationJourneyOptions

#### Extends

- [`ActivationMetadata`](#activationmetadata)

#### Properties

##### always?

```ts
optional always?:
  | boolean
| JourneyActivationPredicate<unknown, unknown, unknown>;
```

###### Inherited from

[`ActivationMetadata`](#activationmetadata).[`always`](#always)

##### alwaysInclude?

```ts
optional alwaysInclude?: boolean;
```

###### Inherited from

[`ActivationMetadata`](#activationmetadata).[`alwaysInclude`](#alwaysinclude)

##### completeWhen?

```ts
optional completeWhen?: string[];
```

##### condition

```ts
condition: string;
```

###### Inherited from

[`ActivationMetadata`](#activationmetadata).[`condition`](#condition)

##### examples?

```ts
optional examples?: string[];
```

###### Inherited from

[`ActivationMetadata`](#activationmetadata).[`examples`](#examples)

##### guard?

```ts
optional guard?: JourneyGuardPredicate;
```

###### Inherited from

[`ActivationMetadata`](#activationmetadata).[`guard`](#guard)

##### includeWhen?

```ts
optional includeWhen?: CandidateFilterPredicate;
```

###### Inherited from

[`ActivationMetadata`](#activationmetadata).[`includeWhen`](#includewhen)

##### matcher?

```ts
optional matcher?: JourneyActivationPredicate;
```

###### Inherited from

[`ActivationMetadata`](#activationmetadata).[`matcher`](#matcher)

##### priority?

```ts
optional priority?: number;
```

###### Inherited from

[`ActivationMetadata`](#activationmetadata).[`priority`](#priority)

##### specialist

```ts
specialist: {
  goal: string;
  instructions?: string;
  knowledge?: KnowledgeSource<string, ZodType<unknown, unknown, $ZodTypeInternals<unknown, unknown>>, ZodType<unknown, unknown, $ZodTypeInternals<unknown, unknown>>>[];
  tools?: AnyTool[];
};
```

###### goal

```ts
goal: string;
```

###### instructions?

```ts
optional instructions?: string;
```

###### knowledge?

```ts
optional knowledge?: KnowledgeSource<string, ZodType<unknown, unknown, $ZodTypeInternals<unknown, unknown>>, ZodType<unknown, unknown, $ZodTypeInternals<unknown, unknown>>>[];
```

###### tools?

```ts
optional tools?: AnyTool[];
```

##### stickiness?

```ts
optional stickiness?: "low" | "medium" | "high";
```

###### Inherited from

[`ActivationMetadata`](#activationmetadata).[`stickiness`](#stickiness)

##### tags?

```ts
optional tags?: string[];
```

###### Inherited from

[`ActivationMetadata`](#activationmetadata).[`tags`](#tags)

***

### EmailAttachmentMetadata

#### Properties

##### checksum?

```ts
optional checksum?: string;
```

##### contentId?

```ts
optional contentId?: string;
```

##### contentType

```ts
contentType: string;
```

##### disposition

```ts
disposition: "attachment" | "inline";
```

##### filename

```ts
filename: string;
```

##### id?

```ts
optional id?: string;
```

##### metadata?

```ts
optional metadata?: Record<string, unknown>;
```

##### providerObjectId?

```ts
optional providerObjectId?: string;
```

##### sizeBytes?

```ts
optional sizeBytes?: number;
```

***

### EmailAttachmentMetadataInput

#### Properties

##### checksum?

```ts
optional checksum?: string;
```

##### contentId?

```ts
optional contentId?: string;
```

##### contentType?

```ts
optional contentType?: string;
```

##### disposition?

```ts
optional disposition?: string;
```

##### filename?

```ts
optional filename?: string;
```

##### id?

```ts
optional id?: string;
```

##### inline?

```ts
optional inline?: boolean;
```

##### metadata?

```ts
optional metadata?: Record<string, unknown>;
```

##### mimeType?

```ts
optional mimeType?: string;
```

##### name?

```ts
optional name?: string;
```

##### providerObjectId?

```ts
optional providerObjectId?: string;
```

##### size?

```ts
optional size?: number;
```

##### sizeBytes?

```ts
optional sizeBytes?: number;
```

***

### EmailQuoteTrimOptions

#### Properties

##### includeQuotedText?

```ts
optional includeQuotedText?: boolean;
```

***

### EmailQuoteTrimResult

#### Properties

##### quotedText?

```ts
optional quotedText?: string;
```

##### reason?

```ts
optional reason?:
  | "reply-header"
  | "original-message"
  | "forwarded-message"
  | "quoted-block"
  | "metadata-header";
```

##### removedQuote

```ts
removedQuote: boolean;
```

##### text

```ts
text: string;
```

***

### EmailThreadContext

#### Properties

##### attachmentCount

```ts
attachmentCount: number;
```

##### messageIds

```ts
messageIds: string[];
```

##### messages

```ts
messages: EmailThreadContextMessage[];
```

##### participants

```ts
participants: string[];
```

##### references

```ts
references: string[];
```

##### subject?

```ts
optional subject?: string;
```

***

### EmailThreadContextMessage

#### Properties

##### attachments

```ts
attachments: EmailAttachmentMetadata[];
```

##### bcc

```ts
bcc: string[];
```

##### cc

```ts
cc: string[];
```

##### from?

```ts
optional from?: string;
```

##### id?

```ts
optional id?: string;
```

##### inReplyTo?

```ts
optional inReplyTo?: string;
```

##### messageId?

```ts
optional messageId?: string;
```

##### metadata?

```ts
optional metadata?: Record<string, unknown>;
```

##### providerObjectId?

```ts
optional providerObjectId?: string;
```

##### quotedTextRemoved

```ts
quotedTextRemoved: boolean;
```

##### references

```ts
references: string[];
```

##### sentAt?

```ts
optional sentAt?: string;
```

##### subject?

```ts
optional subject?: string;
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

### EmailThreadContextOptions

#### Properties

##### maxMessages?

```ts
optional maxMessages?: number;
```

##### trimQuotes?

```ts
optional trimQuotes?: boolean;
```

***

### EmailThreadMessageInput

#### Properties

##### attachments?

```ts
optional attachments?: EmailAttachmentMetadataInput[];
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

##### html?

```ts
optional html?: string;
```

##### id?

```ts
optional id?: string;
```

##### inReplyTo?

```ts
optional inReplyTo?: string;
```

##### messageId?

```ts
optional messageId?: string;
```

##### metadata?

```ts
optional metadata?: Record<string, unknown>;
```

##### providerObjectId?

```ts
optional providerObjectId?: string;
```

##### references?

```ts
optional references?: string[];
```

##### sentAt?

```ts
optional sentAt?: string | Date;
```

##### subject?

```ts
optional subject?: string;
```

##### text?

```ts
optional text?: string;
```

##### to?

```ts
optional to?: string[];
```

***

### EmbeddingInput

#### Properties

##### role

```ts
role: "journeyEmbedding";
```

##### signal?

```ts
optional signal?: AbortSignal;
```

##### text

```ts
text: string;
```

***

### EmbeddingOutput

#### Properties

##### dimensions

```ts
dimensions: number;
```

##### embedding

```ts
embedding: number[];
```

##### model

```ts
model: string;
```

##### providerMetadata?

```ts
optional providerMetadata?: Record<string, unknown>;
```

##### usage?

```ts
optional usage?: UsageRecord;
```

***

### EmitCustomEventInput

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TEvent` *extends* [`CustomRuntimeEventDefinition`](#customruntimeeventdefinition) | [`CustomRuntimeEventDefinition`](#customruntimeeventdefinition) |

#### Properties

##### conversationId

```ts
conversationId: string;
```

##### event

```ts
event: TEvent;
```

##### payload

```ts
payload: output<TEvent["payload"]>;
```

***

### EmitGeneratedPreambleInput

#### Properties

##### conversationId

```ts
conversationId: string;
```

##### maxWords?

```ts
optional maxWords?: number;
```

##### purpose?

```ts
optional purpose?: string;
```

##### signal?

```ts
optional signal?: AbortSignal;
```

***

### EmitGeneratedPreambleResult

#### Properties

##### events

```ts
events: RuntimeEvent[];
```

##### text

```ts
text: string;
```

***

### EmitIntermediateMessageInput

#### Properties

##### conversationId

```ts
conversationId: string;
```

##### text

```ts
text: string;
```

##### visibleToModel?

```ts
optional visibleToModel?: boolean;
```

***

### EmitJourneyEventInput

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TEvent` *extends* [`JourneyEventDefinition`](#journeyeventdefinition) | [`JourneyEventDefinition`](#journeyeventdefinition) |

#### Properties

##### app?

```ts
optional app?: unknown;
```

##### conversationId

```ts
conversationId: string;
```

##### event

```ts
event: TEvent;
```

##### payload

```ts
payload: output<TEvent["payload"]>;
```

##### routing?

```ts
optional routing?: EventRoutingMode;
```

##### signal?

```ts
optional signal?: AbortSignal;
```

##### target?

```ts
optional target?: {
  journeyId?: string;
  stateId?: string;
};
```

###### journeyId?

```ts
optional journeyId?: string;
```

###### stateId?

```ts
optional stateId?: string;
```

***

### EmitJourneyEventResult

#### Extended by

- [`EmitScheduledEventResult`](#emitscheduledeventresult)

#### Properties

##### event

```ts
event: RuntimeEvent;
```

##### events

```ts
events: RuntimeEvent[];
```

##### snapshot

```ts
snapshot: RuntimeSnapshot;
```

***

### EmitScheduledEventInput

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TEvent` *extends* [`JourneyEventDefinition`](#journeyeventdefinition) | [`JourneyEventDefinition`](#journeyeventdefinition) |

#### Properties

##### app?

```ts
optional app?: unknown;
```

##### conversationId

```ts
conversationId: string;
```

##### dueAt?

```ts
optional dueAt?: string;
```

##### event

```ts
event: TEvent;
```

##### intent?

```ts
optional intent?: {
  capability?: string;
  operationAlias?: string;
  providerPackageId?: string;
  reason?: string;
};
```

###### capability?

```ts
optional capability?: string;
```

###### operationAlias?

```ts
optional operationAlias?: string;
```

###### providerPackageId?

```ts
optional providerPackageId?: string;
```

###### reason?

```ts
optional reason?: string;
```

##### metadata?

```ts
optional metadata?: Record<string, unknown>;
```

##### payload

```ts
payload: output<TEvent["payload"]>;
```

##### routing?

```ts
optional routing?: EventRoutingMode;
```

##### scheduledFor?

```ts
optional scheduledFor?: string;
```

##### scheduleId

```ts
scheduleId: string;
```

##### signal?

```ts
optional signal?: AbortSignal;
```

##### target?

```ts
optional target?: {
  journeyId?: string;
  stateId?: string;
};
```

###### journeyId?

```ts
optional journeyId?: string;
```

###### stateId?

```ts
optional stateId?: string;
```

***

### EmitScheduledEventResult

#### Extends

- [`EmitJourneyEventResult`](#emitjourneyeventresult)

#### Properties

##### channelEvent

```ts
channelEvent: ChannelEvent;
```

##### event

```ts
event: RuntimeEvent;
```

###### Inherited from

[`EmitJourneyEventResult`](#emitjourneyeventresult).[`event`](#event-5)

##### events

```ts
events: RuntimeEvent[];
```

###### Inherited from

[`EmitJourneyEventResult`](#emitjourneyeventresult).[`events`](#events-3)

##### intake

```ts
intake: ChannelEventIntakeResult;
```

##### scheduleEvent

```ts
scheduleEvent: RuntimeEvent;
```

##### snapshot

```ts
snapshot: RuntimeSnapshot;
```

###### Inherited from

[`EmitJourneyEventResult`](#emitjourneyeventresult).[`snapshot`](#snapshot-1)

***

### ExplainTurnInput

#### Extends

- [`HandleUserMessageInput`](#handleusermessageinput)\<`TTurn`\>

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TTurn` | `unknown` |

#### Properties

##### app?

```ts
optional app?: unknown;
```

###### Inherited from

[`HandleUserMessageInput`](#handleusermessageinput).[`app`](#app-9)

##### assistantMessageMode?

```ts
optional assistantMessageMode?: "canonical" | "intermediate" | "none";
```

###### Inherited from

[`HandleUserMessageInput`](#handleusermessageinput).[`assistantMessageMode`](#assistantmessagemode-2)

##### channel?

```ts
optional channel?: ConversationChannel;
```

###### Inherited from

[`HandleUserMessageInput`](#handleusermessageinput).[`channel`](#channel-17)

##### conversationId

```ts
conversationId: string;
```

###### Inherited from

[`HandleUserMessageInput`](#handleusermessageinput).[`conversationId`](#conversationid-17)

##### recordUserMessage?

```ts
optional recordUserMessage?: boolean;
```

###### Inherited from

[`HandleUserMessageInput`](#handleusermessageinput).[`recordUserMessage`](#recordusermessage-2)

##### signal?

```ts
optional signal?: AbortSignal;
```

###### Inherited from

[`HandleUserMessageInput`](#handleusermessageinput).[`signal`](#signal-10)

##### text

```ts
text: string;
```

###### Inherited from

[`HandleUserMessageInput`](#handleusermessageinput).[`text`](#text-13)

##### turn?

```ts
optional turn?: TTurn;
```

###### Inherited from

[`HandleUserMessageInput`](#handleusermessageinput).[`turn`](#turn-4)

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

[`HandleUserMessageInput`](#handleusermessageinput).[`onAssistantTextDelta`](#onassistanttextdelta-3)

***

### ExplainTurnResult

#### Properties

##### agentChannelPolicy?

```ts
optional agentChannelPolicy?: unknown;
```

##### agentId

```ts
agentId: string;
```

##### channel?

```ts
optional channel?: {
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

##### channelPolicy?

```ts
optional channelPolicy?: unknown;
```

##### conversationContext?

```ts
optional conversationContext?: unknown;
```

##### conversationId

```ts
conversationId: string;
```

##### handoffPolicy?

```ts
optional handoffPolicy?: unknown;
```

##### persona?

```ts
optional persona?: unknown;
```

##### policyEventData

```ts
policyEventData: Record<string, unknown>;
```

##### resolvedContext?

```ts
optional resolvedContext?: unknown;
```

##### resolvedContextKeys

```ts
resolvedContextKeys: string[];
```

***

### FieldCollectionOptions

#### Type Parameters

| Type Parameter |
| ------ |
| `TContext` |

#### Properties

##### confirm?

```ts
optional confirm?: boolean | "beforeAction" | ConfirmationPolicy;
```

##### extract?

```ts
optional extract?: boolean;
```

##### prompt?

```ts
optional prompt?: string;
```

##### required?

```ts
optional required?: boolean;
```

##### requiredWhen?

```ts
optional requiredWhen?: (args) => boolean;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | \{ `context`: `TContext`; \} |
| `args.context` | `TContext` |

###### Returns

`boolean`

##### widget?

```ts
optional widget?: FieldWidgetOption;
```

##### widgetInput?

```ts
optional widgetInput?: (args) => unknown;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | \{ `context`: `TContext`; \} |
| `args.context` | `TContext` |

###### Returns

`unknown`

***

### HandleChannelEventInput

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TPayload` | `unknown` |
| `TTurn` | `unknown` |

#### Properties

##### agentId?

```ts
optional agentId?: string;
```

##### app?

```ts
optional app?: unknown;
```

##### binding?

```ts
optional binding?: ChannelEventBindingInput;
```

##### conversationContext?

```ts
optional conversationContext?: unknown;
```

##### conversationId?

```ts
optional conversationId?: string;
```

##### createConversation?

```ts
optional createConversation?: CreateRuntimeConversationInput;
```

##### event

```ts
event: ChannelEventEnvelopeInput<TPayload>;
```

##### handling?

```ts
optional handling?: ChannelEventHandlingInput<TTurn>;
```

##### signal?

```ts
optional signal?: AbortSignal;
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

***

### HandleChannelEventResult

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TPayload` | `unknown` |

#### Properties

##### activeJourneyId?

```ts
optional activeJourneyId?: string;
```

##### channelEvent

```ts
channelEvent: ChannelEvent<TPayload>;
```

##### conversation?

```ts
optional conversation?: ConversationRecord;
```

##### disposition

```ts
disposition:
  | "handoff-review"
  | "output-resolution"
  | "record-only"
  | "no-op"
  | "deterministic-journey-event"
  | "model-turn"
  | "provider-operation";
```

##### events

```ts
events: RuntimeEvent[];
```

##### intake

```ts
intake: ChannelEventIntakeResult;
```

##### snapshot?

```ts
optional snapshot?: RuntimeSnapshot;
```

##### text?

```ts
optional text?: string;
```

##### turn?

```ts
optional turn?: HandleUserMessageResult;
```

***

### HandleUserMessageInput

#### Extended by

- [`ExplainTurnInput`](#explainturninput)
- [`HandleVoiceUserMessageInput`](#handlevoiceusermessageinput)

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TTurn` | `unknown` |

#### Properties

##### app?

```ts
optional app?: unknown;
```

##### assistantMessageMode?

```ts
optional assistantMessageMode?: "canonical" | "intermediate" | "none";
```

##### channel?

```ts
optional channel?: ConversationChannel;
```

##### conversationId

```ts
conversationId: string;
```

##### recordUserMessage?

```ts
optional recordUserMessage?: boolean;
```

##### signal?

```ts
optional signal?: AbortSignal;
```

##### text

```ts
text: string;
```

##### turn?

```ts
optional turn?: TTurn;
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

***

### HandleUserMessageResult

#### Extended by

- [`HandleVoiceUserMessageResult`](#handlevoiceusermessageresult)

#### Properties

##### activeJourneyId?

```ts
optional activeJourneyId?: string;
```

##### conversation

```ts
conversation: ConversationRecord;
```

##### events

```ts
events: RuntimeEvent[];
```

##### snapshot

```ts
snapshot: RuntimeSnapshot;
```

##### text

```ts
text: string;
```

***

### HandleVoiceUserMessageInput

#### Extends

- [`HandleUserMessageInput`](#handleusermessageinput)\<`TTurn`\>

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TTurn` | `unknown` |

#### Properties

##### app?

```ts
optional app?: unknown;
```

###### Inherited from

[`HandleUserMessageInput`](#handleusermessageinput).[`app`](#app-9)

##### assistantMessageMode?

```ts
optional assistantMessageMode?: "canonical" | "intermediate" | "none";
```

###### Inherited from

[`HandleUserMessageInput`](#handleusermessageinput).[`assistantMessageMode`](#assistantmessagemode-2)

##### channel?

```ts
optional channel?: ConversationChannel;
```

###### Inherited from

[`HandleUserMessageInput`](#handleusermessageinput).[`channel`](#channel-17)

##### channelSegmentId

```ts
channelSegmentId: string;
```

##### connectionId?

```ts
optional connectionId?: string;
```

##### conversationId

```ts
conversationId: string;
```

###### Inherited from

[`HandleUserMessageInput`](#handleusermessageinput).[`conversationId`](#conversationid-17)

##### endedAtMs?

```ts
optional endedAtMs?: number;
```

##### metadata?

```ts
optional metadata?: Record<string, unknown>;
```

##### recordingReferenceId?

```ts
optional recordingReferenceId?: string;
```

##### recordUserMessage?

```ts
optional recordUserMessage?: boolean;
```

###### Inherited from

[`HandleUserMessageInput`](#handleusermessageinput).[`recordUserMessage`](#recordusermessage-2)

##### signal?

```ts
optional signal?: AbortSignal;
```

###### Inherited from

[`HandleUserMessageInput`](#handleusermessageinput).[`signal`](#signal-10)

##### startedAtMs?

```ts
optional startedAtMs?: number;
```

##### text

```ts
text: string;
```

###### Inherited from

[`HandleUserMessageInput`](#handleusermessageinput).[`text`](#text-13)

##### transcriptionSource?

```ts
optional transcriptionSource?: string;
```

##### turn?

```ts
optional turn?: TTurn;
```

###### Inherited from

[`HandleUserMessageInput`](#handleusermessageinput).[`turn`](#turn-4)

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

[`HandleUserMessageInput`](#handleusermessageinput).[`onAssistantTextDelta`](#onassistanttextdelta-3)

***

### HandleVoiceUserMessageResult

#### Extends

- [`HandleUserMessageResult`](#handleusermessageresult)

#### Properties

##### activeJourneyId?

```ts
optional activeJourneyId?: string;
```

###### Inherited from

[`HandleUserMessageResult`](#handleusermessageresult).[`activeJourneyId`](#activejourneyid-1)

##### conversation

```ts
conversation: ConversationRecord;
```

###### Inherited from

[`HandleUserMessageResult`](#handleusermessageresult).[`conversation`](#conversation-3)

##### events

```ts
events: RuntimeEvent[];
```

###### Inherited from

[`HandleUserMessageResult`](#handleusermessageresult).[`events`](#events-6)

##### snapshot

```ts
snapshot: RuntimeSnapshot;
```

###### Inherited from

[`HandleUserMessageResult`](#handleusermessageresult).[`snapshot`](#snapshot-4)

##### text

```ts
text: string;
```

###### Inherited from

[`HandleUserMessageResult`](#handleusermessageresult).[`text`](#text-14)

##### voiceEvents

```ts
voiceEvents: RuntimeEvent[];
```

***

### InMemoryScheduleAdapterOptions

#### Properties

##### createId?

```ts
optional createId?: () => string;
```

###### Returns

`string`

##### now?

```ts
optional now?: () => Date;
```

###### Returns

`Date`

#### Methods

##### onDue()?

```ts
optional onDue(action): void | Promise<void>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `action` | [`ScheduledSupportAction`](#scheduledsupportaction) |

###### Returns

`void` \| `Promise`\<`void`\>

***

### JourneyCandidate

#### Properties

##### definitionHash

```ts
definitionHash: string;
```

##### journey

```ts
journey: CompiledJourney;
```

##### journeyId

```ts
journeyId: string;
```

##### reason

```ts
reason: "matcher" | "always" | "embedding";
```

##### score

```ts
score: number;
```

##### similarity

```ts
similarity: number;
```

***

### JourneyContextRecord

#### Properties

##### context

```ts
context: unknown;
```

##### journeyId

```ts
journeyId: string;
```

##### stateId?

```ts
optional stateId?: string;
```

##### updatedAt

```ts
updatedAt: string;
```

***

### JourneyEntryOptions

#### Type Parameters

| Type Parameter |
| ------ |
| `TContext` |

#### Properties

##### description?

```ts
optional description?: string;
```

##### priority?

```ts
optional priority?: number;
```

##### when

```ts
when: JourneyEntryPredicate<unknown, unknown, unknown, TContext>;
```

***

### JourneyEventDefinition

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TName` *extends* `string` | `string` |
| `TPayloadSchema` *extends* `z.ZodType` | `z.ZodType` |

#### Properties

##### kind

```ts
kind: "journeyEvent";
```

##### name

```ts
name: TName;
```

##### payload

```ts
payload: TPayloadSchema;
```

##### routing?

```ts
optional routing?: EventRoutingMode;
```

***

### JourneyFragment

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TName` *extends* `string` | `string` |
| `TContextSchema` *extends* [`ObjectSchema`](#objectschema) | [`ObjectSchema`](#objectschema) |

#### Properties

##### context

```ts
context: TContextSchema;
```

##### kind

```ts
kind: "journeyFragment";
```

##### name

```ts
name: TName;
```

#### Methods

##### apply()

```ts
apply(journey): void;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `journey` | [`StateMachineJourneyBuilder`](#statemachinejourneybuilder)\<`string`, `TContextSchema`\> |

###### Returns

`void`

***

### JourneyFragmentOptions

#### Type Parameters

| Type Parameter |
| ------ |
| `TContextSchema` *extends* [`ObjectSchema`](#objectschema) |

#### Properties

##### context

```ts
context: TContextSchema;
```

##### define

```ts
define: (journey) => void;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `journey` | [`StateMachineJourneyBuilder`](#statemachinejourneybuilder)\<`string`, `TContextSchema`\> |

###### Returns

`void`

##### knowledge?

```ts
optional knowledge?: KnowledgeSource<string, ZodType<unknown, unknown, $ZodTypeInternals<unknown, unknown>>, ZodType<unknown, unknown, $ZodTypeInternals<unknown, unknown>>>[];
```

##### tools?

```ts
optional tools?: AnyTool[];
```

***

### JourneyGraph

#### Properties

##### alternateEntries?

```ts
optional alternateEntries?: {
  description?: string;
  priority?: number;
  stateId: string;
}[];
```

###### description?

```ts
optional description?: string;
```

###### priority?

```ts
optional priority?: number;
```

###### stateId

```ts
stateId: string;
```

##### id

```ts
id: string;
```

##### initialStateId?

```ts
optional initialStateId?: string;
```

##### kind

```ts
kind: "stateMachine" | "delegation";
```

##### states

```ts
states: JourneyGraphState[];
```

***

### JourneyGraphState

#### Properties

##### actions

```ts
actions: {
  name: string;
  type: "entry" | "exit" | "transition";
}[];
```

###### name

```ts
name: string;
```

###### type

```ts
type: "entry" | "exit" | "transition";
```

##### collected

```ts
collected: {
  extract: boolean;
  path: string;
  required: boolean;
}[];
```

###### extract

```ts
extract: boolean;
```

###### path

```ts
path: string;
```

###### required

```ts
required: boolean;
```

##### id

```ts
id: string;
```

##### initialStateId?

```ts
optional initialStateId?: string;
```

##### instructions?

```ts
optional instructions?: string;
```

##### parentId?

```ts
optional parentId?: string;
```

##### requiresVisit

```ts
requiresVisit: boolean;
```

##### summary?

```ts
optional summary?: string;
```

##### transitions

```ts
transitions: {
  description?: string;
  eventName?: string;
  kind: "event" | "conversational";
  priority?: number;
  targetId: string;
}[];
```

###### description?

```ts
optional description?: string;
```

###### eventName?

```ts
optional eventName?: string;
```

###### kind

```ts
kind: "event" | "conversational";
```

###### priority?

```ts
optional priority?: number;
```

###### targetId

```ts
targetId: string;
```

##### type

```ts
type: "state" | "parallel" | "final";
```

***

### JourneyIndexValidationResult

#### Properties

##### errors

```ts
errors: string[];
```

##### ok

```ts
ok: boolean;
```

***

### JourneySummary

#### Properties

##### completedAt

```ts
completedAt: string;
```

##### journeyId

```ts
journeyId: string;
```

##### kind

```ts
kind: "stateMachine" | "delegation";
```

##### reason?

```ts
optional reason?: string;
```

##### stateId?

```ts
optional stateId?: string;
```

##### summary

```ts
summary: string;
```

***

### KnowledgeItem

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TMetadata` | `unknown` |

#### Properties

##### content

```ts
content: string;
```

##### id

```ts
id: string;
```

##### metadata

```ts
metadata: TMetadata;
```

##### score?

```ts
optional score?: number;
```

##### title?

```ts
optional title?: string;
```

***

### KnowledgeSource

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TName` *extends* `string` | `string` |
| `TQuerySchema` *extends* `z.ZodType` | `z.ZodType` |
| `TMetadataSchema` *extends* `z.ZodType` | `z.ZodType` |

#### Properties

##### kind

```ts
kind: "knowledgeSource";
```

##### metadata

```ts
metadata: TMetadataSchema;
```

##### name

```ts
name: TName;
```

##### query

```ts
query: TQuerySchema;
```

#### Methods

##### retrieve()

```ts
retrieve(input): Promise<{
  items: KnowledgeItem<output<TMetadataSchema>>[];
}>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | \{ `query`: `output`\<`TQuerySchema`\>; `signal?`: `AbortSignal`; \} |
| `input.query` | `output`\<`TQuerySchema`\> |
| `input.signal?` | `AbortSignal` |

###### Returns

`Promise`\<\{
  `items`: [`KnowledgeItem`](#knowledgeitem)\<`output`\<`TMetadataSchema`\>\>[];
\}\>

***

### ListCollectionOptions

#### Type Parameters

| Type Parameter |
| ------ |
| `TContext` |
| `TItemSchema` *extends* `z.ZodType` |

#### Properties

##### countFrom?

```ts
optional countFrom?: ContextPath<TContext>;
```

##### item

```ts
item: TItemSchema;
```

##### prompt?

```ts
optional prompt?: string;
```

##### widget?

```ts
optional widget?: FieldWidgetOption;
```

***

### ListEventsOptions

#### Properties

##### afterOffset?

```ts
optional afterOffset?: number;
```

##### conversationId

```ts
conversationId: string;
```

##### limit?

```ts
optional limit?: number;
```

***

### ListPendingSupportActionsInput

#### Properties

##### conversationId

```ts
conversationId: string;
```

***

### MessageSegment

#### Properties

##### id

```ts
id: string;
```

##### references?

```ts
optional references?: SupportReference[];
```

##### text

```ts
text: string;
```

***

### ModelAdapter

#### Properties

##### model

```ts
readonly model: string;
```

##### promptProfile?

```ts
readonly optional promptProfile?: ModelPromptProfile;
```

##### provider

```ts
readonly provider: string;
```

#### Methods

##### embed()?

```ts
optional embed(input): Promise<EmbeddingOutput>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`EmbeddingInput`](#embeddinginput) |

###### Returns

`Promise`\<[`EmbeddingOutput`](#embeddingoutput)\>

##### generateText()

```ts
generateText(input): Promise<TextGenerationOutput<unknown>>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`TextGenerationInput`](#textgenerationinput) |

###### Returns

`Promise`\<[`TextGenerationOutput`](#textgenerationoutput)\<`unknown`\>\>

***

### ModelMessage

#### Properties

##### content

```ts
content: string;
```

##### name?

```ts
optional name?: string;
```

##### role

```ts
role: "system" | "tool" | "user" | "assistant";
```

##### toolCallId?

```ts
optional toolCallId?: string;
```

##### toolCalls?

```ts
optional toolCalls?: ModelToolCall[];
```

***

### ModelPromptProfile

#### Properties

##### description?

```ts
readonly optional description?: string;
```

##### id

```ts
readonly id: string;
```

##### logicalModelSlug?

```ts
readonly optional logicalModelSlug?: string;
```

#### Methods

##### renderInstruction()

```ts
renderInstruction(input): string | Promise<string>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`ModelPromptProfileRenderInput`](#modelpromptprofilerenderinput) |

###### Returns

`string` \| `Promise`\<`string`\>

***

### ModelPromptProfileRenderInput

#### Properties

##### model

```ts
model: {
  logicalModelSlug?: string;
  model: string;
  provider: string;
};
```

###### logicalModelSlug?

```ts
optional logicalModelSlug?: string;
```

###### model

```ts
model: string;
```

###### provider

```ts
provider: string;
```

##### payload

```ts
payload: ModelVisiblePromptPayload;
```

##### promptTask

```ts
promptTask: PromptTask;
```

##### role

```ts
role: PromptProfileRole;
```

##### structuredOutput?

```ts
optional structuredOutput?: StructuredOutputPromptMetadata;
```

***

### ModelToolCall

#### Properties

##### id

```ts
id: string;
```

##### input

```ts
input: unknown;
```

##### name

```ts
name: string;
```

##### providerMetadata?

```ts
optional providerMetadata?: Record<string, unknown>;
```

***

### ModelToolDefinition

#### Properties

##### description?

```ts
optional description?: string;
```

##### input

```ts
input: ZodType;
```

##### name

```ts
name: string;
```

***

### NormalizedChannelPayload

#### Properties

##### attachments?

```ts
optional attachments?: unknown[];
```

##### body?

```ts
optional body?: string;
```

##### metadata?

```ts
optional metadata?: Record<string, unknown>;
```

##### providerObject?

```ts
optional providerObject?: unknown;
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

***

### PendingSupportAction

#### Properties

##### actionAudience?

```ts
optional actionAudience?: string;
```

##### approvalId

```ts
approvalId: string;
```

##### capability?

```ts
optional capability?: string;
```

##### changesWorkflow?

```ts
optional changesWorkflow?: boolean;
```

##### channel?

```ts
optional channel?: {
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

##### conversationId

```ts
conversationId: string;
```

##### editableFields?

```ts
optional editableFields?: string[];
```

##### expiresAt?

```ts
optional expiresAt?: string;
```

##### exposesSensitiveData?

```ts
optional exposesSensitiveData?: boolean;
```

##### externallyVisible?

```ts
optional externallyVisible?: boolean;
```

##### input

```ts
input: unknown;
```

##### journeyId?

```ts
optional journeyId?: string;
```

##### metadata?

```ts
optional metadata?: Record<string, unknown>;
```

##### operationAlias?

```ts
optional operationAlias?: string;
```

##### outbound?

```ts
optional outbound?: boolean;
```

##### providerOperation?

```ts
optional providerOperation?: string;
```

##### providerPackageId?

```ts
optional providerPackageId?: string;
```

##### reason?

```ts
optional reason?: string;
```

##### requestedAt

```ts
requestedAt: string;
```

##### requestedEventId

```ts
requestedEventId: string;
```

##### sideEffect?

```ts
optional sideEffect?: boolean;
```

##### stateId?

```ts
optional stateId?: string;
```

##### supportedResolutions

```ts
supportedResolutions: ApprovalResolutionMode[];
```

##### toolName

```ts
toolName: string;
```

***

### PrivacyHookContext

#### Properties

##### agentId

```ts
agentId: string;
```

##### conversationId

```ts
conversationId: string;
```

***

### PrivacyHooks

#### Methods

##### redactAssistantMessage()?

```ts
optional redactAssistantMessage(input): MaybePromise<string>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`PrivacyHookContext`](#privacyhookcontext) & \{ `text`: `string`; \} |

###### Returns

`MaybePromise`\<`string`\>

##### redactConversationContext()?

```ts
optional redactConversationContext(input): unknown;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`PrivacyHookContext`](#privacyhookcontext) & \{ `context`: `unknown`; \} |

###### Returns

`unknown`

##### redactInboundChannelEvent()?

```ts
optional redactInboundChannelEvent(input): MaybePromise<RuntimeEventInput<"channel.received">>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`PrivacyHookContext`](#privacyhookcontext) & \{ `channel`: \{ `capabilities`: \{ `async`: `boolean`; `attachments`: `boolean`; `audioInput`: `boolean`; `audioOutput`: `boolean`; `buttons`: `boolean`; `deliveryReceipts`: `boolean`; `files`: `boolean`; `html`: `boolean`; `images`: `boolean`; `markdown`: `boolean`; `privateReplies`: `boolean`; `publicReplies`: `boolean`; `quickReplies`: `boolean`; `readReceipts`: `boolean`; `realtime`: `boolean`; `richText`: `boolean`; `supportsHumanTransfer`: `boolean`; `templates`: `boolean`; `threaded`: `boolean`; `typingIndicator`: `boolean`; `voice`: `boolean`; `widgets`: `boolean`; \}; `channelId`: `string`; `externalConversationId?`: `string`; `externalMessageId?`: `string`; `externalThreadId?`: `string`; `externalUserId?`: `string`; `kind`: `string`; `locale?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `provider?`: `string`; `timezone?`: `string`; \}; `event`: [`RuntimeEventInput`](#runtimeeventinput)\<`"channel.received"`\>; \} |

###### Returns

`MaybePromise`\<[`RuntimeEventInput`](#runtimeeventinput)\<`"channel.received"`\>\>

##### redactModelInput()?

```ts
optional redactModelInput(input): MaybePromise<TextGenerationInput>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`PrivacyHookContext`](#privacyhookcontext) & \{ `input`: [`TextGenerationInput`](#textgenerationinput); \} |

###### Returns

`MaybePromise`\<[`TextGenerationInput`](#textgenerationinput)\>

##### redactModelMessages()?

```ts
optional redactModelMessages(input): MaybePromise<ModelMessage[]>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`PrivacyHookContext`](#privacyhookcontext) & \{ `messages`: [`ModelMessage`](#modelmessage)[]; \} |

###### Returns

`MaybePromise`\<[`ModelMessage`](#modelmessage)[]\>

##### redactOutboundChannelMessage()?

```ts
optional redactOutboundChannelMessage(input): MaybePromise<RuntimeEventInput<"channel.sent">>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`PrivacyHookContext`](#privacyhookcontext) & \{ `channel`: \{ `capabilities`: \{ `async`: `boolean`; `attachments`: `boolean`; `audioInput`: `boolean`; `audioOutput`: `boolean`; `buttons`: `boolean`; `deliveryReceipts`: `boolean`; `files`: `boolean`; `html`: `boolean`; `images`: `boolean`; `markdown`: `boolean`; `privateReplies`: `boolean`; `publicReplies`: `boolean`; `quickReplies`: `boolean`; `readReceipts`: `boolean`; `realtime`: `boolean`; `richText`: `boolean`; `supportsHumanTransfer`: `boolean`; `templates`: `boolean`; `threaded`: `boolean`; `typingIndicator`: `boolean`; `voice`: `boolean`; `widgets`: `boolean`; \}; `channelId`: `string`; `externalConversationId?`: `string`; `externalMessageId?`: `string`; `externalThreadId?`: `string`; `externalUserId?`: `string`; `kind`: `string`; `locale?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `provider?`: `string`; `timezone?`: `string`; \}; `event`: [`RuntimeEventInput`](#runtimeeventinput)\<`"channel.sent"`\>; \} |

###### Returns

`MaybePromise`\<[`RuntimeEventInput`](#runtimeeventinput)\<`"channel.sent"`\>\>

##### redactRuntimeEvent()?

```ts
optional redactRuntimeEvent(input): MaybePromise<RuntimeEventInput<
  | "error"
  | "schedule.due"
  | "message.started"
  | "message.delta"
  | "message.completed"
  | "message.generated"
  | "message.aborted"
  | "channel.event.received"
  | "channel.received"
  | "channel.sent"
  | "channel.delivery.updated"
  | "channel.thread.linked"
  | "voice.segment.started"
  | "voice.segment.ended"
  | "voice.connection.failed"
  | "voice.interrupted"
  | "voice.recording.started"
  | "voice.recording.completed"
  | "voice.transcript.committed"
  | "journey.candidates.retrieved"
  | "journey.matched"
  | "journey.activated"
  | "journey.completed"
  | "journey.guard.denied"
  | "journey.event.emitted"
  | "journey.state.entered"
  | "journey.extraction.proposed"
  | "journey.extraction.accepted"
  | "action.started"
  | "action.completed"
  | "tool.started"
  | "tool.completed"
  | "approval.requested"
  | "approval.resolved"
  | "knowledge.retrieved"
  | "context.resolved"
  | "policy.evaluated"
  | "ui.prompted"
  | "ui.submitted"
  | "conversation.compaction.started"
  | "conversation.compaction.completed"
  | "handoff.requested"
  | "handoff.completed"
  | "handoff.resumed"
  | "conversation.closed"
  | "eval.completed"
| `custom.${string}`>>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`PrivacyHookContext`](#privacyhookcontext) & \{ `event`: [`RuntimeEventInput`](#runtimeeventinput); \} |

###### Returns

`MaybePromise`\<[`RuntimeEventInput`](#runtimeeventinput)\<
  \| `"error"`
  \| `"schedule.due"`
  \| `"message.started"`
  \| `"message.delta"`
  \| `"message.completed"`
  \| `"message.generated"`
  \| `"message.aborted"`
  \| `"channel.event.received"`
  \| `"channel.received"`
  \| `"channel.sent"`
  \| `"channel.delivery.updated"`
  \| `"channel.thread.linked"`
  \| `"voice.segment.started"`
  \| `"voice.segment.ended"`
  \| `"voice.connection.failed"`
  \| `"voice.interrupted"`
  \| `"voice.recording.started"`
  \| `"voice.recording.completed"`
  \| `"voice.transcript.committed"`
  \| `"journey.candidates.retrieved"`
  \| `"journey.matched"`
  \| `"journey.activated"`
  \| `"journey.completed"`
  \| `"journey.guard.denied"`
  \| `"journey.event.emitted"`
  \| `"journey.state.entered"`
  \| `"journey.extraction.proposed"`
  \| `"journey.extraction.accepted"`
  \| `"action.started"`
  \| `"action.completed"`
  \| `"tool.started"`
  \| `"tool.completed"`
  \| `"approval.requested"`
  \| `"approval.resolved"`
  \| `"knowledge.retrieved"`
  \| `"context.resolved"`
  \| `"policy.evaluated"`
  \| `"ui.prompted"`
  \| `"ui.submitted"`
  \| `"conversation.compaction.started"`
  \| `"conversation.compaction.completed"`
  \| `"handoff.requested"`
  \| `"handoff.completed"`
  \| `"handoff.resumed"`
  \| `"conversation.closed"`
  \| `"eval.completed"`
  \| `` `custom.${string}` ``\>\>

##### redactRuntimeSnapshot()?

```ts
optional redactRuntimeSnapshot(input): MaybePromise<RuntimeSnapshot>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`PrivacyHookContext`](#privacyhookcontext) & \{ `snapshot`: [`RuntimeSnapshot`](#runtimesnapshot); \} |

###### Returns

`MaybePromise`\<[`RuntimeSnapshot`](#runtimesnapshot)\>

##### redactUserMessage()?

```ts
optional redactUserMessage(input): MaybePromise<string>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`PrivacyHookContext`](#privacyhookcontext) & \{ `text`: `string`; \} |

###### Returns

`MaybePromise`\<`string`\>

***

### ProviderRegistry

#### Methods

##### get()

```ts
get(id): {
  capabilities: {
     audiences?: ("customer-facing" | "internal-support" | "mixed")[];
     capability: string;
     changesWorkflow?: boolean;
     description?: string;
     exposesSensitiveData?: boolean;
     extension?: boolean;
     label?: string;
     metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
     providerObjects?: {
        description?: string;
        kind: string;
        label?: string;
        metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
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
     metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
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
  metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
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
     metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
     outputSchema?: unknown;
     outputSchemaName?: string;
     outputSchemaRef?: string;
     providerObject?: string;
     providerObjects?: {
        description?: string;
        kind: string;
        label?: string;
        metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
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

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `string` |

###### Returns

```ts
{
  capabilities: {
     audiences?: ("customer-facing" | "internal-support" | "mixed")[];
     capability: string;
     changesWorkflow?: boolean;
     description?: string;
     exposesSensitiveData?: boolean;
     extension?: boolean;
     label?: string;
     metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
     providerObjects?: {
        description?: string;
        kind: string;
        label?: string;
        metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
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
     metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
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
  metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
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
     metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
     outputSchema?: unknown;
     outputSchemaName?: string;
     outputSchemaRef?: string;
     providerObject?: string;
     providerObjects?: {
        description?: string;
        kind: string;
        label?: string;
        metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
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
}
```

| Name | Type |
| ------ | ------ |
| `capabilities` | \{ `audiences?`: (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[]; `capability`: `string`; `changesWorkflow?`: `boolean`; `description?`: `string`; `exposesSensitiveData?`: `boolean`; `extension?`: `boolean`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `providerObjects?`: \{ `description?`: `string`; `kind`: `string`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `schemaName?`: `string`; \}[]; `requiresCredential?`: `boolean`; `sideEffect?`: `boolean`; \}[] |
| `category` | `string` |
| `channelAudiences` | (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[] |
| `coverage` | \{ `evidence`: \{ `label`: `string`; `url?`: `string`; \}[]; `notes`: `string`[]; `scope`: \| `"support-workflow-subset"` \| `"provider-api-subset"` \| `"connector-required"` \| `"local-protocol"` \| `"full-provider-api"`; \} |
| `coverage.evidence` | \{ `label`: `string`; `url?`: `string`; \}[] |
| `coverage.notes` | `string`[] |
| `coverage.scope` | \| `"support-workflow-subset"` \| `"provider-api-subset"` \| `"connector-required"` \| `"local-protocol"` \| `"full-provider-api"` |
| `credentialRequirements` | \{ `description?`: `string`; `id`: `string`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `required`: `boolean`; `scopes`: `string`[]; \}[] |
| `directions` | ( \| `"receive-only"` \| `"send-only"` \| `"inbound-only"` \| `"outbound-only"` \| `"bidirectional"`)[] |
| `id` | `string` |
| `limitations` | `string`[] |
| `maintainers` | \{ `name`: `string`; `type`: `"community"` \| `"official"` \| `"unknown"` \| `"partner"`; `url?`: `string`; \}[] |
| `metadata?` | `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\> |
| `name` | `string` |
| `operations` | \{ `alias`: `string`; `audience?`: `"customer-facing"` \| `"internal-support"` \| `"mixed"`; `audiences?`: (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[]; `capability`: `string`; `changesWorkflow?`: `boolean`; `description?`: `string`; `exposesSensitiveData?`: `boolean`; `extension`: `boolean`; `externallyVisible?`: `boolean`; `inputSchema?`: `unknown`; `inputSchemaName?`: `string`; `inputSchemaRef?`: `string`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `outputSchema?`: `unknown`; `outputSchemaName?`: `string`; `outputSchemaRef?`: `string`; `providerObject?`: `string`; `providerObjects?`: \{ `description?`: `string`; `kind`: `string`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `schemaName?`: `string`; \}[]; `providerOperation?`: `string`; `requiredPolicyIds?`: `string`[]; `requiresApproval?`: `boolean`; `requiresCredential?`: `boolean`; `sideEffect?`: `boolean`; \}[] |
| `packageName` | `string` |
| `privacyNotes` | `string`[] |
| `provider` | `string` |
| `trustLevel` | `"community"` \| `"official"` \| `"verified"` \| `"experimental"` |

##### list()

```ts
list(query?): {
  capabilities: {
     audiences?: ("customer-facing" | "internal-support" | "mixed")[];
     capability: string;
     changesWorkflow?: boolean;
     description?: string;
     exposesSensitiveData?: boolean;
     extension?: boolean;
     label?: string;
     metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
     providerObjects?: {
        description?: string;
        kind: string;
        label?: string;
        metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
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
     metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
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
  metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
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
     metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
     outputSchema?: unknown;
     outputSchemaName?: string;
     outputSchemaRef?: string;
     providerObject?: string;
     providerObjects?: {
        description?: string;
        kind: string;
        label?: string;
        metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
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
}[];
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `query?` | \{ `capabilities?`: `string`[]; `category?`: `string`; `channelAudiences?`: (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[]; `directions?`: ( \| `"receive-only"` \| `"send-only"` \| `"inbound-only"` \| `"outbound-only"` \| `"bidirectional"`)[]; `packageNames?`: `string`[]; `provider?`: `string`; `trustLevels?`: (`"community"` \| `"official"` \| `"verified"` \| `"experimental"`)[]; \} |
| `query.capabilities?` | `string`[] |
| `query.category?` | `string` |
| `query.channelAudiences?` | (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[] |
| `query.directions?` | ( \| `"receive-only"` \| `"send-only"` \| `"inbound-only"` \| `"outbound-only"` \| `"bidirectional"`)[] |
| `query.packageNames?` | `string`[] |
| `query.provider?` | `string` |
| `query.trustLevels?` | (`"community"` \| `"official"` \| `"verified"` \| `"experimental"`)[] |

###### Returns

\{
  `capabilities`: \{
     `audiences?`: (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[];
     `capability`: `string`;
     `changesWorkflow?`: `boolean`;
     `description?`: `string`;
     `exposesSensitiveData?`: `boolean`;
     `extension?`: `boolean`;
     `label?`: `string`;
     `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>;
     `providerObjects?`: \{
        `description?`: `string`;
        `kind`: `string`;
        `label?`: `string`;
        `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>;
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
     `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>;
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
  `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>;
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
     `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>;
     `outputSchema?`: `unknown`;
     `outputSchemaName?`: `string`;
     `outputSchemaRef?`: `string`;
     `providerObject?`: `string`;
     `providerObjects?`: \{
        `description?`: `string`;
        `kind`: `string`;
        `label?`: `string`;
        `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>;
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
\}[]

##### register()

```ts
register(manifest): {
  capabilities: {
     audiences?: ("customer-facing" | "internal-support" | "mixed")[];
     capability: string;
     changesWorkflow?: boolean;
     description?: string;
     exposesSensitiveData?: boolean;
     extension?: boolean;
     label?: string;
     metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
     providerObjects?: {
        description?: string;
        kind: string;
        label?: string;
        metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
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
     metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
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
  metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
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
     metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
     outputSchema?: unknown;
     outputSchemaName?: string;
     outputSchemaRef?: string;
     providerObject?: string;
     providerObjects?: {
        description?: string;
        kind: string;
        label?: string;
        metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
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

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `manifest` | \{ `capabilities`: \{ `audiences?`: (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[]; `capability`: `string`; `changesWorkflow?`: `boolean`; `description?`: `string`; `exposesSensitiveData?`: `boolean`; `extension?`: `boolean`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `providerObjects?`: \{ `description?`: `string`; `kind`: `string`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `schemaName?`: `string`; \}[]; `requiresCredential?`: `boolean`; `sideEffect?`: `boolean`; \}[]; `category`: `string`; `channelAudiences?`: (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[]; `coverage?`: \{ `evidence?`: \{ `label`: `string`; `url?`: `string`; \}[]; `notes?`: `string`[]; `scope?`: \| `"support-workflow-subset"` \| `"provider-api-subset"` \| `"connector-required"` \| `"local-protocol"` \| `"full-provider-api"`; \}; `credentialRequirements?`: \{ `description?`: `string`; `id`: `string`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `required?`: `boolean`; `scopes?`: `string`[]; \}[]; `directions`: ( \| `"receive-only"` \| `"send-only"` \| `"inbound-only"` \| `"outbound-only"` \| `"bidirectional"`)[]; `id`: `string`; `limitations?`: `string`[]; `maintainers?`: \{ `name`: `string`; `type?`: `"community"` \| `"official"` \| `"unknown"` \| `"partner"`; `url?`: `string`; \}[]; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `name`: `string`; `operations?`: \{ `alias`: `string`; `audience?`: `"customer-facing"` \| `"internal-support"` \| `"mixed"`; `audiences?`: (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[]; `capability`: `string`; `changesWorkflow?`: `boolean`; `description?`: `string`; `exposesSensitiveData?`: `boolean`; `extension?`: `boolean`; `externallyVisible?`: `boolean`; `inputSchema?`: `unknown`; `inputSchemaName?`: `string`; `inputSchemaRef?`: `string`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `outputSchema?`: `unknown`; `outputSchemaName?`: `string`; `outputSchemaRef?`: `string`; `providerObject?`: `string`; `providerObjects?`: \{ `description?`: `string`; `kind`: `string`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `schemaName?`: `string`; \}[]; `providerOperation?`: `string`; `requiredPolicyIds?`: `string`[]; `requiresApproval?`: `boolean`; `requiresCredential?`: `boolean`; `sideEffect?`: `boolean`; \}[]; `packageName`: `string`; `privacyNotes?`: `string`[]; `provider`: `string`; `trustLevel?`: `"community"` \| `"official"` \| `"verified"` \| `"experimental"`; \} |
| `manifest.capabilities` | \{ `audiences?`: (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[]; `capability`: `string`; `changesWorkflow?`: `boolean`; `description?`: `string`; `exposesSensitiveData?`: `boolean`; `extension?`: `boolean`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `providerObjects?`: \{ `description?`: `string`; `kind`: `string`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `schemaName?`: `string`; \}[]; `requiresCredential?`: `boolean`; `sideEffect?`: `boolean`; \}[] |
| `manifest.category` | `string` |
| `manifest.channelAudiences?` | (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[] |
| `manifest.coverage?` | \{ `evidence?`: \{ `label`: `string`; `url?`: `string`; \}[]; `notes?`: `string`[]; `scope?`: \| `"support-workflow-subset"` \| `"provider-api-subset"` \| `"connector-required"` \| `"local-protocol"` \| `"full-provider-api"`; \} |
| `manifest.coverage.evidence?` | \{ `label`: `string`; `url?`: `string`; \}[] |
| `manifest.coverage.notes?` | `string`[] |
| `manifest.coverage.scope?` | \| `"support-workflow-subset"` \| `"provider-api-subset"` \| `"connector-required"` \| `"local-protocol"` \| `"full-provider-api"` |
| `manifest.credentialRequirements?` | \{ `description?`: `string`; `id`: `string`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `required?`: `boolean`; `scopes?`: `string`[]; \}[] |
| `manifest.directions` | ( \| `"receive-only"` \| `"send-only"` \| `"inbound-only"` \| `"outbound-only"` \| `"bidirectional"`)[] |
| `manifest.id` | `string` |
| `manifest.limitations?` | `string`[] |
| `manifest.maintainers?` | \{ `name`: `string`; `type?`: `"community"` \| `"official"` \| `"unknown"` \| `"partner"`; `url?`: `string`; \}[] |
| `manifest.metadata?` | `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\> |
| `manifest.name` | `string` |
| `manifest.operations?` | \{ `alias`: `string`; `audience?`: `"customer-facing"` \| `"internal-support"` \| `"mixed"`; `audiences?`: (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[]; `capability`: `string`; `changesWorkflow?`: `boolean`; `description?`: `string`; `exposesSensitiveData?`: `boolean`; `extension?`: `boolean`; `externallyVisible?`: `boolean`; `inputSchema?`: `unknown`; `inputSchemaName?`: `string`; `inputSchemaRef?`: `string`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `outputSchema?`: `unknown`; `outputSchemaName?`: `string`; `outputSchemaRef?`: `string`; `providerObject?`: `string`; `providerObjects?`: \{ `description?`: `string`; `kind`: `string`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `schemaName?`: `string`; \}[]; `providerOperation?`: `string`; `requiredPolicyIds?`: `string`[]; `requiresApproval?`: `boolean`; `requiresCredential?`: `boolean`; `sideEffect?`: `boolean`; \}[] |
| `manifest.packageName` | `string` |
| `manifest.privacyNotes?` | `string`[] |
| `manifest.provider` | `string` |
| `manifest.trustLevel?` | `"community"` \| `"official"` \| `"verified"` \| `"experimental"` |

###### Returns

```ts
{
  capabilities: {
     audiences?: ("customer-facing" | "internal-support" | "mixed")[];
     capability: string;
     changesWorkflow?: boolean;
     description?: string;
     exposesSensitiveData?: boolean;
     extension?: boolean;
     label?: string;
     metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
     providerObjects?: {
        description?: string;
        kind: string;
        label?: string;
        metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
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
     metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
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
  metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
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
     metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
     outputSchema?: unknown;
     outputSchemaName?: string;
     outputSchemaRef?: string;
     providerObject?: string;
     providerObjects?: {
        description?: string;
        kind: string;
        label?: string;
        metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
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
}
```

| Name | Type |
| ------ | ------ |
| `capabilities` | \{ `audiences?`: (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[]; `capability`: `string`; `changesWorkflow?`: `boolean`; `description?`: `string`; `exposesSensitiveData?`: `boolean`; `extension?`: `boolean`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `providerObjects?`: \{ `description?`: `string`; `kind`: `string`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `schemaName?`: `string`; \}[]; `requiresCredential?`: `boolean`; `sideEffect?`: `boolean`; \}[] |
| `category` | `string` |
| `channelAudiences` | (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[] |
| `coverage` | \{ `evidence`: \{ `label`: `string`; `url?`: `string`; \}[]; `notes`: `string`[]; `scope`: \| `"support-workflow-subset"` \| `"provider-api-subset"` \| `"connector-required"` \| `"local-protocol"` \| `"full-provider-api"`; \} |
| `coverage.evidence` | \{ `label`: `string`; `url?`: `string`; \}[] |
| `coverage.notes` | `string`[] |
| `coverage.scope` | \| `"support-workflow-subset"` \| `"provider-api-subset"` \| `"connector-required"` \| `"local-protocol"` \| `"full-provider-api"` |
| `credentialRequirements` | \{ `description?`: `string`; `id`: `string`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `required`: `boolean`; `scopes`: `string`[]; \}[] |
| `directions` | ( \| `"receive-only"` \| `"send-only"` \| `"inbound-only"` \| `"outbound-only"` \| `"bidirectional"`)[] |
| `id` | `string` |
| `limitations` | `string`[] |
| `maintainers` | \{ `name`: `string`; `type`: `"community"` \| `"official"` \| `"unknown"` \| `"partner"`; `url?`: `string`; \}[] |
| `metadata?` | `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\> |
| `name` | `string` |
| `operations` | \{ `alias`: `string`; `audience?`: `"customer-facing"` \| `"internal-support"` \| `"mixed"`; `audiences?`: (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[]; `capability`: `string`; `changesWorkflow?`: `boolean`; `description?`: `string`; `exposesSensitiveData?`: `boolean`; `extension`: `boolean`; `externallyVisible?`: `boolean`; `inputSchema?`: `unknown`; `inputSchemaName?`: `string`; `inputSchemaRef?`: `string`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `outputSchema?`: `unknown`; `outputSchemaName?`: `string`; `outputSchemaRef?`: `string`; `providerObject?`: `string`; `providerObjects?`: \{ `description?`: `string`; `kind`: `string`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `schemaName?`: `string`; \}[]; `providerOperation?`: `string`; `requiredPolicyIds?`: `string`[]; `requiresApproval?`: `boolean`; `requiresCredential?`: `boolean`; `sideEffect?`: `boolean`; \}[] |
| `packageName` | `string` |
| `privacyNotes` | `string`[] |
| `provider` | `string` |
| `trustLevel` | `"community"` \| `"official"` \| `"verified"` \| `"experimental"` |

##### require()

```ts
require(id): {
  capabilities: {
     audiences?: ("customer-facing" | "internal-support" | "mixed")[];
     capability: string;
     changesWorkflow?: boolean;
     description?: string;
     exposesSensitiveData?: boolean;
     extension?: boolean;
     label?: string;
     metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
     providerObjects?: {
        description?: string;
        kind: string;
        label?: string;
        metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
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
     metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
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
  metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
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
     metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
     outputSchema?: unknown;
     outputSchemaName?: string;
     outputSchemaRef?: string;
     providerObject?: string;
     providerObjects?: {
        description?: string;
        kind: string;
        label?: string;
        metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
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

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `string` |

###### Returns

```ts
{
  capabilities: {
     audiences?: ("customer-facing" | "internal-support" | "mixed")[];
     capability: string;
     changesWorkflow?: boolean;
     description?: string;
     exposesSensitiveData?: boolean;
     extension?: boolean;
     label?: string;
     metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
     providerObjects?: {
        description?: string;
        kind: string;
        label?: string;
        metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
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
     metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
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
  metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
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
     metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
     outputSchema?: unknown;
     outputSchemaName?: string;
     outputSchemaRef?: string;
     providerObject?: string;
     providerObjects?: {
        description?: string;
        kind: string;
        label?: string;
        metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
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
}
```

| Name | Type |
| ------ | ------ |
| `capabilities` | \{ `audiences?`: (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[]; `capability`: `string`; `changesWorkflow?`: `boolean`; `description?`: `string`; `exposesSensitiveData?`: `boolean`; `extension?`: `boolean`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `providerObjects?`: \{ `description?`: `string`; `kind`: `string`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `schemaName?`: `string`; \}[]; `requiresCredential?`: `boolean`; `sideEffect?`: `boolean`; \}[] |
| `category` | `string` |
| `channelAudiences` | (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[] |
| `coverage` | \{ `evidence`: \{ `label`: `string`; `url?`: `string`; \}[]; `notes`: `string`[]; `scope`: \| `"support-workflow-subset"` \| `"provider-api-subset"` \| `"connector-required"` \| `"local-protocol"` \| `"full-provider-api"`; \} |
| `coverage.evidence` | \{ `label`: `string`; `url?`: `string`; \}[] |
| `coverage.notes` | `string`[] |
| `coverage.scope` | \| `"support-workflow-subset"` \| `"provider-api-subset"` \| `"connector-required"` \| `"local-protocol"` \| `"full-provider-api"` |
| `credentialRequirements` | \{ `description?`: `string`; `id`: `string`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `required`: `boolean`; `scopes`: `string`[]; \}[] |
| `directions` | ( \| `"receive-only"` \| `"send-only"` \| `"inbound-only"` \| `"outbound-only"` \| `"bidirectional"`)[] |
| `id` | `string` |
| `limitations` | `string`[] |
| `maintainers` | \{ `name`: `string`; `type`: `"community"` \| `"official"` \| `"unknown"` \| `"partner"`; `url?`: `string`; \}[] |
| `metadata?` | `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\> |
| `name` | `string` |
| `operations` | \{ `alias`: `string`; `audience?`: `"customer-facing"` \| `"internal-support"` \| `"mixed"`; `audiences?`: (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[]; `capability`: `string`; `changesWorkflow?`: `boolean`; `description?`: `string`; `exposesSensitiveData?`: `boolean`; `extension`: `boolean`; `externallyVisible?`: `boolean`; `inputSchema?`: `unknown`; `inputSchemaName?`: `string`; `inputSchemaRef?`: `string`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `outputSchema?`: `unknown`; `outputSchemaName?`: `string`; `outputSchemaRef?`: `string`; `providerObject?`: `string`; `providerObjects?`: \{ `description?`: `string`; `kind`: `string`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `schemaName?`: `string`; \}[]; `providerOperation?`: `string`; `requiredPolicyIds?`: `string`[]; `requiresApproval?`: `boolean`; `requiresCredential?`: `boolean`; `sideEffect?`: `boolean`; \}[] |
| `packageName` | `string` |
| `privacyNotes` | `string`[] |
| `provider` | `string` |
| `trustLevel` | `"community"` \| `"official"` \| `"verified"` \| `"experimental"` |

***

### RecordVoiceInterruptionInput

#### Properties

##### channelSegmentId

```ts
channelSegmentId: string;
```

##### connectionId?

```ts
optional connectionId?: string;
```

##### conversationId

```ts
conversationId: string;
```

##### interruptedMessageId?

```ts
optional interruptedMessageId?: string;
```

##### offsetMs?

```ts
optional offsetMs?: number;
```

##### reason?

```ts
optional reason?: string;
```

##### recordingReferenceId?

```ts
optional recordingReferenceId?: string;
```

##### source?

```ts
optional source?: "provider" | "userSpeech" | "adapter";
```

***

### ReplayConversationInput

#### Properties

##### afterOffset?

```ts
optional afterOffset?: number;
```

##### conversationId

```ts
conversationId: string;
```

***

### ReplayConversationResult

#### Properties

##### conversation

```ts
conversation: ConversationRecord;
```

##### events

```ts
events: RuntimeEvent[];
```

##### messages

```ts
messages: ReplayedMessage[];
```

##### openPrompts

```ts
openPrompts: ReplayedPrompt[];
```

##### snapshot

```ts
snapshot: RuntimeSnapshot;
```

***

### ReplayedMessage

#### Properties

##### aborted

```ts
aborted: boolean;
```

##### id

```ts
id: string;
```

##### intermediate

```ts
intermediate: boolean;
```

##### offset

```ts
offset: number;
```

##### reason?

```ts
optional reason?: string;
```

##### role

```ts
role: "user" | "assistant";
```

##### segments?

```ts
optional segments?: MessageSegment[];
```

##### text

```ts
text: string;
```

***

### ReplayedPrompt

#### Properties

##### input

```ts
input: unknown;
```

##### offset

```ts
offset: number;
```

##### promptId

```ts
promptId: string;
```

##### widgetKind

```ts
widgetKind: string;
```

***

### RequestChannelHandoffInput

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TPayload` | `unknown` |

#### Properties

##### app?

```ts
optional app?: unknown;
```

##### binding?

```ts
optional binding?: ChannelEventBindingInput;
```

##### conversationId

```ts
conversationId: string;
```

##### fromChannel?

```ts
optional fromChannel?: ConversationChannelInput;
```

##### handling?

```ts
optional handling?: ChannelEventHandlingInput;
```

##### payload?

```ts
optional payload?: TPayload;
```

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

##### signal?

```ts
optional signal?: AbortSignal;
```

##### toChannel

```ts
toChannel: ConversationChannelInput;
```

***

### RequestChannelHandoffReviewInput

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TPayload` | `unknown` |

#### Properties

##### agentId?

```ts
optional agentId?: string;
```

##### app?

```ts
optional app?: unknown;
```

##### binding?

```ts
optional binding?: ChannelEventBindingInput;
```

##### channel

```ts
channel: ConversationChannelInput;
```

##### conversationContext?

```ts
optional conversationContext?: unknown;
```

##### conversationId?

```ts
optional conversationId?: string;
```

##### handling?

```ts
optional handling?: ChannelEventHandlingInput;
```

##### payload?

```ts
optional payload?: TPayload;
```

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

##### signal?

```ts
optional signal?: AbortSignal;
```

***

### RequestHandoffInput

#### Properties

##### conversationId

```ts
conversationId: string;
```

##### payload?

```ts
optional payload?: unknown;
```

##### reason

```ts
reason: string;
```

##### summary?

```ts
optional summary?: string;
```

##### target?

```ts
optional target?: {
  channelId?: string;
  destination?: string;
  externalConversationId?: string;
  policyId?: string;
  providerPackageId?: string;
  queue?: string;
};
```

###### channelId?

```ts
optional channelId?: string;
```

###### destination?

```ts
optional destination?: string;
```

###### externalConversationId?

```ts
optional externalConversationId?: string;
```

###### policyId?

```ts
optional policyId?: string;
```

###### providerPackageId?

```ts
optional providerPackageId?: string;
```

###### queue?

```ts
optional queue?: string;
```

***

### RequestOutboundContactInput

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TPayload` | `unknown` |

#### Properties

##### agentId?

```ts
optional agentId?: string;
```

##### app?

```ts
optional app?: unknown;
```

##### binding?

```ts
optional binding?: ChannelEventBindingInput;
```

##### channel

```ts
channel: ConversationChannelInput;
```

##### conversationContext?

```ts
optional conversationContext?: unknown;
```

##### conversationId?

```ts
optional conversationId?: string;
```

##### handling?

```ts
optional handling?: ChannelEventHandlingInput;
```

##### payload?

```ts
optional payload?: TPayload;
```

##### signal?

```ts
optional signal?: AbortSignal;
```

##### text?

```ts
optional text?: string;
```

***

### ResolveChannelOutputInput

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TPayload` | `unknown` |

#### Properties

##### app?

```ts
optional app?: unknown;
```

##### conversationId

```ts
conversationId: string;
```

##### intent

```ts
intent: ChannelOutputIntentInput<TPayload>;
```

##### resolution?

```ts
optional resolution?: ChannelOutputResolutionDecision;
```

##### signal?

```ts
optional signal?: AbortSignal;
```

***

### ResolveChannelOutputResult

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TPayload` | `unknown` |

#### Properties

##### channelEvent?

```ts
optional channelEvent?: ChannelEvent<ChannelOutputResolutionPayload<TPayload>>;
```

##### conversation?

```ts
optional conversation?: ConversationRecord;
```

##### event?

```ts
optional event?: RuntimeEvent;
```

##### events

```ts
events: RuntimeEvent[];
```

##### execution?

```ts
optional execution?: ChannelOutputResolverResult;
```

##### outputIntent

```ts
outputIntent: ChannelOutputIntent<TPayload>;
```

##### resolution

```ts
resolution: ChannelOutputResolution;
```

##### shouldExecute

```ts
shouldExecute: boolean;
```

***

### ResolvePendingSupportActionInput

#### Properties

##### approvalId

```ts
approvalId: string;
```

##### conversationId

```ts
conversationId: string;
```

##### editedInput?

```ts
optional editedInput?: unknown;
```

##### metadata?

```ts
optional metadata?: Record<string, unknown>;
```

##### reason?

```ts
optional reason?: string;
```

##### resolution

```ts
resolution: ApprovalResolutionMode;
```

##### resolvedBy?

```ts
optional resolvedBy?: string;
```

##### signal?

```ts
optional signal?: AbortSignal;
```

***

### ResolvePendingSupportActionResult

#### Properties

##### action

```ts
action: PendingSupportAction;
```

##### events

```ts
events: RuntimeEvent[];
```

##### executed

```ts
executed: boolean;
```

##### resolution

```ts
resolution: RuntimeEvent;
```

##### result?

```ts
optional result?: unknown;
```

***

### ResumeConversationInput

#### Properties

##### conversationId

```ts
conversationId: string;
```

##### payload?

```ts
optional payload?: unknown;
```

##### reason?

```ts
optional reason?: string;
```

***

### RuntimeApprovalDecision

#### Properties

##### editableFields?

```ts
optional editableFields?: string[];
```

##### expiresAt?

```ts
optional expiresAt?: string;
```

##### metadata?

```ts
optional metadata?: Record<string, unknown>;
```

##### outcome

```ts
outcome: RuntimeApprovalOutcome;
```

##### reason?

```ts
optional reason?: string;
```

##### supportedResolutions?

```ts
optional supportedResolutions?: ApprovalResolutionMode[];
```

***

### RuntimeApprovalEvaluationInput

#### Properties

##### channel?

```ts
optional channel?: {
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

##### conversation

```ts
conversation: ConversationRecord;
```

##### input

```ts
input: unknown;
```

##### tool

```ts
tool: AnyTool;
```

***

### RuntimeConfigurationSource

#### Properties

##### capabilityAvailability?

```ts
optional capabilityAvailability?: {
  blockers: {
     code: string;
     kind:   | "unknown"
        | "permission-blocked"
        | "missing-policy"
        | "missing-configuration"
        | "missing-credentials"
        | "provider-unsupported";
     message: string;
  }[];
  capability?: string;
  enabledForAgents: string[];
  enabledForChannels: string[];
  enabledForJourneys: string[];
  enabledForTools: string[];
  metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
  providerPackageId?: string;
  status:   | "enabled"
     | "registry-available"
     | "installed"
     | "configured"
     | "blocked";
}[];
```

###### blockers

```ts
blockers: {
  code: string;
  kind:   | "unknown"
     | "permission-blocked"
     | "missing-policy"
     | "missing-configuration"
     | "missing-credentials"
     | "provider-unsupported";
  message: string;
}[];
```

###### capability?

```ts
optional capability?: string;
```

###### enabledForAgents

```ts
enabledForAgents: string[];
```

###### enabledForChannels

```ts
enabledForChannels: string[];
```

###### enabledForJourneys

```ts
enabledForJourneys: string[];
```

###### enabledForTools

```ts
enabledForTools: string[];
```

###### metadata?

```ts
optional metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
```

###### providerPackageId?

```ts
optional providerPackageId?: string;
```

###### status

```ts
status:
  | "enabled"
  | "registry-available"
  | "installed"
  | "configured"
  | "blocked";
```

##### channels?

```ts
optional channels?: {
  audience?: "customer-facing" | "internal-support" | "mixed";
  behavior?: {
   [key: string]: unknown;
     allowMarkdown?: boolean;
     allowWidgets?: boolean;
     approval?: unknown;
     draftFirst?: boolean;
     handoff?: unknown;
     maxCharacters?: number;
     maxWords?: number;
     media?: unknown;
     sensitiveData?: unknown;
     tone?: string;
  };
  channel: string;
  channelSetIds: string[];
  enabled: boolean;
  enabledCapabilities: string[];
  flowActivations: {
     enabled: boolean;
     journeyId: string;
     metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
     policyIds: string[];
     providerPackageIds: string[];
     reason?: string;
  }[];
  handoff?: {
     destinations: string[];
     enabled: boolean;
     metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
     policyIds: string[];
     providerPackageIds: string[];
     sdkControlled?: boolean;
  };
  id: string;
  metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
  outbound?: {
     enabled: boolean;
     metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
     policyIds: string[];
     providerPackageIds: string[];
     requiresProviderOutboundSupport: boolean;
  };
  policies: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
  providerPackageIds: string[];
}[];
```

###### audience?

```ts
optional audience?: "customer-facing" | "internal-support" | "mixed";
```

###### behavior?

```ts
optional behavior?: {
[key: string]: unknown;
  allowMarkdown?: boolean;
  allowWidgets?: boolean;
  approval?: unknown;
  draftFirst?: boolean;
  handoff?: unknown;
  maxCharacters?: number;
  maxWords?: number;
  media?: unknown;
  sensitiveData?: unknown;
  tone?: string;
};
```

###### Index Signature

```ts
[key: string]: unknown
```

###### behavior.allowMarkdown?

```ts
optional allowMarkdown?: boolean;
```

###### behavior.allowWidgets?

```ts
optional allowWidgets?: boolean;
```

###### behavior.approval?

```ts
optional approval?: unknown;
```

###### behavior.draftFirst?

```ts
optional draftFirst?: boolean;
```

###### behavior.handoff?

```ts
optional handoff?: unknown;
```

###### behavior.maxCharacters?

```ts
optional maxCharacters?: number;
```

###### behavior.maxWords?

```ts
optional maxWords?: number;
```

###### behavior.media?

```ts
optional media?: unknown;
```

###### behavior.sensitiveData?

```ts
optional sensitiveData?: unknown;
```

###### behavior.tone?

```ts
optional tone?: string;
```

###### channel

```ts
channel: string;
```

###### channelSetIds

```ts
channelSetIds: string[];
```

###### enabled

```ts
enabled: boolean;
```

###### enabledCapabilities

```ts
enabledCapabilities: string[];
```

###### flowActivations

```ts
flowActivations: {
  enabled: boolean;
  journeyId: string;
  metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
  policyIds: string[];
  providerPackageIds: string[];
  reason?: string;
}[];
```

###### handoff?

```ts
optional handoff?: {
  destinations: string[];
  enabled: boolean;
  metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
  policyIds: string[];
  providerPackageIds: string[];
  sdkControlled?: boolean;
};
```

###### handoff.destinations

```ts
destinations: string[];
```

###### handoff.enabled

```ts
enabled: boolean;
```

###### handoff.metadata?

```ts
optional metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
```

###### handoff.policyIds

```ts
policyIds: string[];
```

###### handoff.providerPackageIds

```ts
providerPackageIds: string[];
```

###### handoff.sdkControlled?

```ts
optional sdkControlled?: boolean;
```

###### id

```ts
id: string;
```

###### metadata?

```ts
optional metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
```

###### outbound?

```ts
optional outbound?: {
  enabled: boolean;
  metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
  policyIds: string[];
  providerPackageIds: string[];
  requiresProviderOutboundSupport: boolean;
};
```

###### outbound.enabled

```ts
enabled: boolean;
```

###### outbound.metadata?

```ts
optional metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
```

###### outbound.policyIds

```ts
policyIds: string[];
```

###### outbound.providerPackageIds

```ts
providerPackageIds: string[];
```

###### outbound.requiresProviderOutboundSupport

```ts
requiresProviderOutboundSupport: boolean;
```

###### policies

```ts
policies: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
```

###### providerPackageIds

```ts
providerPackageIds: string[];
```

##### channelSets?

```ts
optional channelSets?: {
  channelIds: string[];
  channels: string[];
  conversationContinuity?: {
     crossChannel: boolean;
     mode: "new-conversation" | "link-existing" | "sdk-decides";
     policy?: string;
  };
  enabled: boolean;
  id: string;
  label?: string;
  metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
}[];
```

###### channelIds

```ts
channelIds: string[];
```

###### channels

```ts
channels: string[];
```

###### conversationContinuity?

```ts
optional conversationContinuity?: {
  crossChannel: boolean;
  mode: "new-conversation" | "link-existing" | "sdk-decides";
  policy?: string;
};
```

###### conversationContinuity.crossChannel

```ts
crossChannel: boolean;
```

###### conversationContinuity.mode

```ts
mode: "new-conversation" | "link-existing" | "sdk-decides";
```

###### conversationContinuity.policy?

```ts
optional policy?: string;
```

###### enabled

```ts
enabled: boolean;
```

###### id

```ts
id: string;
```

###### label?

```ts
optional label?: string;
```

###### metadata?

```ts
optional metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
```

##### credentialStatuses?

```ts
optional credentialStatuses?: {
  expiresAt?: string;
  message?: string;
  providerPackageId?: string;
  requirementId: string;
  scopes: string[];
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

###### expiresAt?

```ts
optional expiresAt?: string;
```

###### message?

```ts
optional message?: string;
```

###### providerPackageId?

```ts
optional providerPackageId?: string;
```

###### requirementId

```ts
requirementId: string;
```

###### scopes

```ts
scopes: string[];
```

###### state

```ts
state:
  | "required"
  | "configured"
  | "permission-blocked"
  | "not-required"
  | "missing"
  | "expired"
  | "insufficient-scope"
  | "unavailable";
```

##### providerPackages?

```ts
optional providerPackages?: {
  capabilities: {
     audiences?: ("customer-facing" | "internal-support" | "mixed")[];
     capability: string;
     changesWorkflow?: boolean;
     description?: string;
     exposesSensitiveData?: boolean;
     extension?: boolean;
     label?: string;
     metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
     providerObjects?: {
        description?: string;
        kind: string;
        label?: string;
        metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
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
     metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
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
  metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
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
     metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
     outputSchema?: unknown;
     outputSchemaName?: string;
     outputSchemaRef?: string;
     providerObject?: string;
     providerObjects?: {
        description?: string;
        kind: string;
        label?: string;
        metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
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
}[];
```

###### capabilities

```ts
capabilities: {
  audiences?: ("customer-facing" | "internal-support" | "mixed")[];
  capability: string;
  changesWorkflow?: boolean;
  description?: string;
  exposesSensitiveData?: boolean;
  extension?: boolean;
  label?: string;
  metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
  providerObjects?: {
     description?: string;
     kind: string;
     label?: string;
     metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
     schemaName?: string;
  }[];
  requiresCredential?: boolean;
  sideEffect?: boolean;
}[];
```

###### category

```ts
category: string;
```

###### channelAudiences

```ts
channelAudiences: ("customer-facing" | "internal-support" | "mixed")[];
```

###### coverage

```ts
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
```

###### coverage.evidence

```ts
evidence: {
  label: string;
  url?: string;
}[];
```

###### coverage.notes

```ts
notes: string[];
```

###### coverage.scope

```ts
scope:
  | "support-workflow-subset"
  | "provider-api-subset"
  | "connector-required"
  | "local-protocol"
  | "full-provider-api";
```

###### credentialRequirements

```ts
credentialRequirements: {
  description?: string;
  id: string;
  label?: string;
  metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
  required: boolean;
  scopes: string[];
}[];
```

###### directions

```ts
directions: (
  | "receive-only"
  | "send-only"
  | "inbound-only"
  | "outbound-only"
  | "bidirectional")[];
```

###### id

```ts
id: string;
```

###### limitations

```ts
limitations: string[];
```

###### maintainers

```ts
maintainers: {
  name: string;
  type: "community" | "official" | "unknown" | "partner";
  url?: string;
}[];
```

###### metadata?

```ts
optional metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
```

###### name

```ts
name: string;
```

###### operations

```ts
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
  metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
  outputSchema?: unknown;
  outputSchemaName?: string;
  outputSchemaRef?: string;
  providerObject?: string;
  providerObjects?: {
     description?: string;
     kind: string;
     label?: string;
     metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
     schemaName?: string;
  }[];
  providerOperation?: string;
  requiredPolicyIds?: string[];
  requiresApproval?: boolean;
  requiresCredential?: boolean;
  sideEffect?: boolean;
}[];
```

###### packageName

```ts
packageName: string;
```

###### privacyNotes

```ts
privacyNotes: string[];
```

###### provider

```ts
provider: string;
```

###### trustLevel

```ts
trustLevel: "community" | "official" | "verified" | "experimental";
```

##### providerReadiness?

```ts
optional providerReadiness?: {
  blockers: {
     code: string;
     kind:   | "unknown"
        | "permission-blocked"
        | "missing-policy"
        | "missing-configuration"
        | "missing-credentials"
        | "provider-unsupported";
     message: string;
  }[];
  checkedAt?: string;
  checkSource?: string;
  live?: boolean;
  metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
  providerPackageId: string;
  remediationActions: {
     id: string;
     kind:   | "custom"
        | "configure"
        | "authorize"
        | "verify"
        | "read-docs"
        | "contact-provider";
     label: string;
     metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
  }[];
  sandbox?: boolean;
  status:   | "unknown"
     | "configured"
     | "blocked"
     | "not-configured"
     | "ready"
     | "live-verified"
     | "sandbox-verified"
     | "scoped-verified"
     | "full-api-verified";
}[];
```

###### blockers

```ts
blockers: {
  code: string;
  kind:   | "unknown"
     | "permission-blocked"
     | "missing-policy"
     | "missing-configuration"
     | "missing-credentials"
     | "provider-unsupported";
  message: string;
}[];
```

###### checkedAt?

```ts
optional checkedAt?: string;
```

###### checkSource?

```ts
optional checkSource?: string;
```

###### live?

```ts
optional live?: boolean;
```

###### metadata?

```ts
optional metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
```

###### providerPackageId

```ts
providerPackageId: string;
```

###### remediationActions

```ts
remediationActions: {
  id: string;
  kind:   | "custom"
     | "configure"
     | "authorize"
     | "verify"
     | "read-docs"
     | "contact-provider";
  label: string;
  metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
}[];
```

###### sandbox?

```ts
optional sandbox?: boolean;
```

###### status

```ts
status:
  | "unknown"
  | "configured"
  | "blocked"
  | "not-configured"
  | "ready"
  | "live-verified"
  | "sandbox-verified"
  | "scoped-verified"
  | "full-api-verified";
```

***

### RuntimeContextOptions

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TTurn` | `unknown` |

#### Properties

##### redact?

```ts
optional redact?: string[];
```

##### schema?

```ts
optional schema?: ZodType;
```

#### Methods

##### resolve()?

```ts
optional resolve(input): unknown;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`RuntimeContextResolveInput`](#runtimecontextresolveinput)\<`TTurn`\> |

###### Returns

`unknown`

***

### RuntimeContextResolveInput

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TTurn` | `unknown` |

#### Properties

##### app

```ts
app: unknown;
```

##### channel?

```ts
optional channel?: {
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

##### conversation

```ts
conversation: ConversationRecord;
```

##### text

```ts
text: string;
```

##### turn

```ts
turn: TTurn;
```

***

### RuntimeEventBase

#### Type Parameters

| Type Parameter |
| ------ |
| `TType` *extends* `string` |
| `TData` |

#### Properties

##### conversationId

```ts
conversationId: string;
```

##### createdAt

```ts
createdAt: string;
```

##### data

```ts
data: TData;
```

##### id

```ts
id: string;
```

##### offset

```ts
offset: number;
```

##### telemetry?

```ts
optional telemetry?: RuntimeEventTelemetry;
```

##### type

```ts
type: TType;
```

***

### RuntimeEventTelemetry

#### Properties

##### spanId?

```ts
optional spanId?: string;
```

##### traceId

```ts
traceId: string;
```

***

### RuntimeLogContext

#### Properties

##### agentId?

```ts
optional agentId?: string;
```

##### conversationId?

```ts
optional conversationId?: string;
```

##### journeyId?

```ts
optional journeyId?: string;
```

##### stateId?

```ts
optional stateId?: string;
```

***

### RuntimeOptions

#### Properties

##### agent?

```ts
optional agent?: CompiledAgent;
```

##### app?

```ts
optional app?: unknown;
```

##### approval?

```ts
optional approval?: {
  evaluate?: RuntimeApprovalDecision;
};
```

###### evaluate()?

```ts
optional evaluate(input): RuntimeApprovalDecision;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`RuntimeApprovalEvaluationInput`](#runtimeapprovalevaluationinput) |

###### Returns

[`RuntimeApprovalDecision`](#runtimeapprovaldecision)

##### capabilityAvailability?

```ts
optional capabilityAvailability?: {
  blockers: {
     code: string;
     kind:   | "unknown"
        | "permission-blocked"
        | "missing-policy"
        | "missing-configuration"
        | "missing-credentials"
        | "provider-unsupported";
     message: string;
  }[];
  capability?: string;
  enabledForAgents: string[];
  enabledForChannels: string[];
  enabledForJourneys: string[];
  enabledForTools: string[];
  metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
  providerPackageId?: string;
  status:   | "enabled"
     | "registry-available"
     | "installed"
     | "configured"
     | "blocked";
}[];
```

###### blockers

```ts
blockers: {
  code: string;
  kind:   | "unknown"
     | "permission-blocked"
     | "missing-policy"
     | "missing-configuration"
     | "missing-credentials"
     | "provider-unsupported";
  message: string;
}[];
```

###### capability?

```ts
optional capability?: string;
```

###### enabledForAgents

```ts
enabledForAgents: string[];
```

###### enabledForChannels

```ts
enabledForChannels: string[];
```

###### enabledForJourneys

```ts
enabledForJourneys: string[];
```

###### enabledForTools

```ts
enabledForTools: string[];
```

###### metadata?

```ts
optional metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
```

###### providerPackageId?

```ts
optional providerPackageId?: string;
```

###### status

```ts
status:
  | "enabled"
  | "registry-available"
  | "installed"
  | "configured"
  | "blocked";
```

##### channelOutput?

```ts
optional channelOutput?: {
  execute?:   | ChannelOutputResolverResult<unknown>
     | Promise<ChannelOutputResolverResult<unknown>>;
  resolve?:   | ChannelOutputResolutionDecision<unknown>
     | Promise<ChannelOutputResolutionDecision<unknown>>;
};
```

###### execute()?

```ts
optional execute(input):
  | ChannelOutputResolverResult<unknown>
| Promise<ChannelOutputResolverResult<unknown>>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`ChannelOutputResolverInput`](#channeloutputresolverinput) |

###### Returns

  \| [`ChannelOutputResolverResult`](#channeloutputresolverresult)\<`unknown`\>
  \| `Promise`\<[`ChannelOutputResolverResult`](#channeloutputresolverresult)\<`unknown`\>\>

###### resolve()?

```ts
optional resolve(input):
  | ChannelOutputResolutionDecision<unknown>
| Promise<ChannelOutputResolutionDecision<unknown>>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`ChannelOutputResolutionPolicyInput`](#channeloutputresolutionpolicyinput) |

###### Returns

  \| [`ChannelOutputResolutionDecision`](#channeloutputresolutiondecision)\<`unknown`\>
  \| `Promise`\<[`ChannelOutputResolutionDecision`](#channeloutputresolutiondecision)\<`unknown`\>\>

##### channels?

```ts
optional channels?: {
  audience?: "customer-facing" | "internal-support" | "mixed";
  behavior?: {
   [key: string]: unknown;
     allowMarkdown?: boolean;
     allowWidgets?: boolean;
     approval?: unknown;
     draftFirst?: boolean;
     handoff?: unknown;
     maxCharacters?: number;
     maxWords?: number;
     media?: unknown;
     sensitiveData?: unknown;
     tone?: string;
  };
  channel: string;
  channelSetIds: string[];
  enabled: boolean;
  enabledCapabilities: string[];
  flowActivations: {
     enabled: boolean;
     journeyId: string;
     metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
     policyIds: string[];
     providerPackageIds: string[];
     reason?: string;
  }[];
  handoff?: {
     destinations: string[];
     enabled: boolean;
     metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
     policyIds: string[];
     providerPackageIds: string[];
     sdkControlled?: boolean;
  };
  id: string;
  metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
  outbound?: {
     enabled: boolean;
     metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
     policyIds: string[];
     providerPackageIds: string[];
     requiresProviderOutboundSupport: boolean;
  };
  policies: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
  providerPackageIds: string[];
}[];
```

###### audience?

```ts
optional audience?: "customer-facing" | "internal-support" | "mixed";
```

###### behavior?

```ts
optional behavior?: {
[key: string]: unknown;
  allowMarkdown?: boolean;
  allowWidgets?: boolean;
  approval?: unknown;
  draftFirst?: boolean;
  handoff?: unknown;
  maxCharacters?: number;
  maxWords?: number;
  media?: unknown;
  sensitiveData?: unknown;
  tone?: string;
};
```

###### Index Signature

```ts
[key: string]: unknown
```

###### behavior.allowMarkdown?

```ts
optional allowMarkdown?: boolean;
```

###### behavior.allowWidgets?

```ts
optional allowWidgets?: boolean;
```

###### behavior.approval?

```ts
optional approval?: unknown;
```

###### behavior.draftFirst?

```ts
optional draftFirst?: boolean;
```

###### behavior.handoff?

```ts
optional handoff?: unknown;
```

###### behavior.maxCharacters?

```ts
optional maxCharacters?: number;
```

###### behavior.maxWords?

```ts
optional maxWords?: number;
```

###### behavior.media?

```ts
optional media?: unknown;
```

###### behavior.sensitiveData?

```ts
optional sensitiveData?: unknown;
```

###### behavior.tone?

```ts
optional tone?: string;
```

###### channel

```ts
channel: string;
```

###### channelSetIds

```ts
channelSetIds: string[];
```

###### enabled

```ts
enabled: boolean;
```

###### enabledCapabilities

```ts
enabledCapabilities: string[];
```

###### flowActivations

```ts
flowActivations: {
  enabled: boolean;
  journeyId: string;
  metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
  policyIds: string[];
  providerPackageIds: string[];
  reason?: string;
}[];
```

###### handoff?

```ts
optional handoff?: {
  destinations: string[];
  enabled: boolean;
  metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
  policyIds: string[];
  providerPackageIds: string[];
  sdkControlled?: boolean;
};
```

###### handoff.destinations

```ts
destinations: string[];
```

###### handoff.enabled

```ts
enabled: boolean;
```

###### handoff.metadata?

```ts
optional metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
```

###### handoff.policyIds

```ts
policyIds: string[];
```

###### handoff.providerPackageIds

```ts
providerPackageIds: string[];
```

###### handoff.sdkControlled?

```ts
optional sdkControlled?: boolean;
```

###### id

```ts
id: string;
```

###### metadata?

```ts
optional metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
```

###### outbound?

```ts
optional outbound?: {
  enabled: boolean;
  metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
  policyIds: string[];
  providerPackageIds: string[];
  requiresProviderOutboundSupport: boolean;
};
```

###### outbound.enabled

```ts
enabled: boolean;
```

###### outbound.metadata?

```ts
optional metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
```

###### outbound.policyIds

```ts
policyIds: string[];
```

###### outbound.providerPackageIds

```ts
providerPackageIds: string[];
```

###### outbound.requiresProviderOutboundSupport

```ts
requiresProviderOutboundSupport: boolean;
```

###### policies

```ts
policies: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
```

###### providerPackageIds

```ts
providerPackageIds: string[];
```

##### channelSets?

```ts
optional channelSets?: {
  channelIds: string[];
  channels: string[];
  conversationContinuity?: {
     crossChannel: boolean;
     mode: "new-conversation" | "link-existing" | "sdk-decides";
     policy?: string;
  };
  enabled: boolean;
  id: string;
  label?: string;
  metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
}[];
```

###### channelIds

```ts
channelIds: string[];
```

###### channels

```ts
channels: string[];
```

###### conversationContinuity?

```ts
optional conversationContinuity?: {
  crossChannel: boolean;
  mode: "new-conversation" | "link-existing" | "sdk-decides";
  policy?: string;
};
```

###### conversationContinuity.crossChannel

```ts
crossChannel: boolean;
```

###### conversationContinuity.mode

```ts
mode: "new-conversation" | "link-existing" | "sdk-decides";
```

###### conversationContinuity.policy?

```ts
optional policy?: string;
```

###### enabled

```ts
enabled: boolean;
```

###### id

```ts
id: string;
```

###### label?

```ts
optional label?: string;
```

###### metadata?

```ts
optional metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
```

##### compaction?

```ts
optional compaction?: {
  afterTurn?: boolean;
  beforeTurn?: boolean;
  instructions?: string;
  minEvents?: number;
  schemaVersion?: string;
  summarySchema?: ZodType;
};
```

###### afterTurn?

```ts
optional afterTurn?: boolean;
```

###### beforeTurn?

```ts
optional beforeTurn?: boolean;
```

###### instructions?

```ts
optional instructions?: string;
```

###### minEvents?

```ts
optional minEvents?: number;
```

###### schemaVersion?

```ts
optional schemaVersion?: string;
```

###### summarySchema?

```ts
optional summarySchema?: ZodType;
```

##### context?

```ts
optional context?: RuntimeContextOptions;
```

##### journeyIndex?

```ts
optional journeyIndex?: {
  agentId: string;
  definitionHash: string;
  embeddingModel: string;
  embeddingProvider: string;
  entries: {
     alwaysInclude: boolean;
     condition: string;
     definitionHash: string;
     embedding: {
        dimensions: number;
        model: string;
        vector: number[];
     };
     examples: string[];
     journeyId: string;
     kind: "stateMachine" | "delegation";
     priority: number;
     routingText: string;
     stickiness: "low" | "medium" | "high";
     tags: string[];
  }[];
  generatedAt: string;
  projectionVersion: "cognidesk.journey-index.v1";
};
```

###### agentId

```ts
agentId: string;
```

###### definitionHash

```ts
definitionHash: string;
```

###### embeddingModel

```ts
embeddingModel: string;
```

###### embeddingProvider

```ts
embeddingProvider: string;
```

###### entries

```ts
entries: {
  alwaysInclude: boolean;
  condition: string;
  definitionHash: string;
  embedding: {
     dimensions: number;
     model: string;
     vector: number[];
  };
  examples: string[];
  journeyId: string;
  kind: "stateMachine" | "delegation";
  priority: number;
  routingText: string;
  stickiness: "low" | "medium" | "high";
  tags: string[];
}[];
```

###### generatedAt

```ts
generatedAt: string;
```

###### projectionVersion

```ts
projectionVersion: "cognidesk.journey-index.v1";
```

##### knowledgeLimit?

```ts
optional knowledgeLimit?: number;
```

##### logger?

```ts
optional logger?: Pick<Logger, "trace" | "debug" | "info" | "warn" | "error" | "child">;
```

##### logLevel?

```ts
optional logLevel?: AgentLogLevel;
```

##### models?

```ts
optional models?: AgentModelSet;
```

##### postProcessing?

```ts
optional postProcessing?: {
  citations?: boolean;
};
```

###### citations?

```ts
optional citations?: boolean;
```

##### privacy?

```ts
optional privacy?: PrivacyHooks;
```

##### providerCredentialStatuses?

```ts
optional providerCredentialStatuses?: {
  expiresAt?: string;
  message?: string;
  providerPackageId?: string;
  requirementId: string;
  scopes: string[];
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

###### expiresAt?

```ts
optional expiresAt?: string;
```

###### message?

```ts
optional message?: string;
```

###### providerPackageId?

```ts
optional providerPackageId?: string;
```

###### requirementId

```ts
requirementId: string;
```

###### scopes

```ts
scopes: string[];
```

###### state

```ts
state:
  | "required"
  | "configured"
  | "permission-blocked"
  | "not-required"
  | "missing"
  | "expired"
  | "insufficient-scope"
  | "unavailable";
```

##### providerPackages?

```ts
optional providerPackages?: {
  capabilities: {
     audiences?: ("customer-facing" | "internal-support" | "mixed")[];
     capability: string;
     changesWorkflow?: boolean;
     description?: string;
     exposesSensitiveData?: boolean;
     extension?: boolean;
     label?: string;
     metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
     providerObjects?: {
        description?: string;
        kind: string;
        label?: string;
        metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
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
     metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
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
  metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
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
     metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
     outputSchema?: unknown;
     outputSchemaName?: string;
     outputSchemaRef?: string;
     providerObject?: string;
     providerObjects?: {
        description?: string;
        kind: string;
        label?: string;
        metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
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
}[];
```

###### capabilities

```ts
capabilities: {
  audiences?: ("customer-facing" | "internal-support" | "mixed")[];
  capability: string;
  changesWorkflow?: boolean;
  description?: string;
  exposesSensitiveData?: boolean;
  extension?: boolean;
  label?: string;
  metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
  providerObjects?: {
     description?: string;
     kind: string;
     label?: string;
     metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
     schemaName?: string;
  }[];
  requiresCredential?: boolean;
  sideEffect?: boolean;
}[];
```

###### category

```ts
category: string;
```

###### channelAudiences

```ts
channelAudiences: ("customer-facing" | "internal-support" | "mixed")[];
```

###### coverage

```ts
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
```

###### coverage.evidence

```ts
evidence: {
  label: string;
  url?: string;
}[];
```

###### coverage.notes

```ts
notes: string[];
```

###### coverage.scope

```ts
scope:
  | "support-workflow-subset"
  | "provider-api-subset"
  | "connector-required"
  | "local-protocol"
  | "full-provider-api";
```

###### credentialRequirements

```ts
credentialRequirements: {
  description?: string;
  id: string;
  label?: string;
  metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
  required: boolean;
  scopes: string[];
}[];
```

###### directions

```ts
directions: (
  | "receive-only"
  | "send-only"
  | "inbound-only"
  | "outbound-only"
  | "bidirectional")[];
```

###### id

```ts
id: string;
```

###### limitations

```ts
limitations: string[];
```

###### maintainers

```ts
maintainers: {
  name: string;
  type: "community" | "official" | "unknown" | "partner";
  url?: string;
}[];
```

###### metadata?

```ts
optional metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
```

###### name

```ts
name: string;
```

###### operations

```ts
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
  metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
  outputSchema?: unknown;
  outputSchemaName?: string;
  outputSchemaRef?: string;
  providerObject?: string;
  providerObjects?: {
     description?: string;
     kind: string;
     label?: string;
     metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
     schemaName?: string;
  }[];
  providerOperation?: string;
  requiredPolicyIds?: string[];
  requiresApproval?: boolean;
  requiresCredential?: boolean;
  sideEffect?: boolean;
}[];
```

###### packageName

```ts
packageName: string;
```

###### privacyNotes

```ts
privacyNotes: string[];
```

###### provider

```ts
provider: string;
```

###### trustLevel

```ts
trustLevel: "community" | "official" | "verified" | "experimental";
```

##### providerReadiness?

```ts
optional providerReadiness?: {
  blockers: {
     code: string;
     kind:   | "unknown"
        | "permission-blocked"
        | "missing-policy"
        | "missing-configuration"
        | "missing-credentials"
        | "provider-unsupported";
     message: string;
  }[];
  checkedAt?: string;
  checkSource?: string;
  live?: boolean;
  metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
  providerPackageId: string;
  remediationActions: {
     id: string;
     kind:   | "custom"
        | "configure"
        | "authorize"
        | "verify"
        | "read-docs"
        | "contact-provider";
     label: string;
     metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
  }[];
  sandbox?: boolean;
  status:   | "unknown"
     | "configured"
     | "blocked"
     | "not-configured"
     | "ready"
     | "live-verified"
     | "sandbox-verified"
     | "scoped-verified"
     | "full-api-verified";
}[];
```

###### blockers

```ts
blockers: {
  code: string;
  kind:   | "unknown"
     | "permission-blocked"
     | "missing-policy"
     | "missing-configuration"
     | "missing-credentials"
     | "provider-unsupported";
  message: string;
}[];
```

###### checkedAt?

```ts
optional checkedAt?: string;
```

###### checkSource?

```ts
optional checkSource?: string;
```

###### live?

```ts
optional live?: boolean;
```

###### metadata?

```ts
optional metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
```

###### providerPackageId

```ts
providerPackageId: string;
```

###### remediationActions

```ts
remediationActions: {
  id: string;
  kind:   | "custom"
     | "configure"
     | "authorize"
     | "verify"
     | "read-docs"
     | "contact-provider";
  label: string;
  metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
}[];
```

###### sandbox?

```ts
optional sandbox?: boolean;
```

###### status

```ts
status:
  | "unknown"
  | "configured"
  | "blocked"
  | "not-configured"
  | "ready"
  | "live-verified"
  | "sandbox-verified"
  | "scoped-verified"
  | "full-api-verified";
```

##### storage

```ts
storage: StorageAdapter;
```

##### streaming?

```ts
optional streaming?: {
  syntheticDeltas?: boolean;
};
```

###### syntheticDeltas?

```ts
optional syntheticDeltas?: boolean;
```

##### telemetry?

```ts
optional telemetry?: RuntimeTelemetryOptions;
```

##### toolRetry?

```ts
optional toolRetry?: {
  maxAttempts?: number;
  notice?: string;
};
```

###### maxAttempts?

```ts
optional maxAttempts?: number;
```

###### notice?

```ts
optional notice?: string;
```

##### topKJourneys?

```ts
optional topKJourneys?: number;
```

***

### RuntimeSnapshot

#### Properties

##### activeJourneyId?

```ts
optional activeJourneyId?: string;
```

##### activeStateIds

```ts
activeStateIds: string[];
```

##### compactionSummary?

```ts
optional compactionSummary?: unknown;
```

##### conversationId

```ts
conversationId: string;
```

##### definitionHash?

```ts
optional definitionHash?: string;
```

##### journeyContext?

```ts
optional journeyContext?: unknown;
```

##### journeyContexts?

```ts
optional journeyContexts?: JourneyContextRecord[];
```

##### journeySummaries?

```ts
optional journeySummaries?: JourneySummary[];
```

##### lifecycle

```ts
lifecycle: ConversationLifecycle;
```

##### updatedAt

```ts
updatedAt: string;
```

***

### RuntimeTelemetryOptions

#### Properties

##### content?

```ts
optional content?: TelemetryContentMode;
```

##### enabled?

```ts
optional enabled?: boolean;
```

***

### ScheduleAdapter

#### Methods

##### cancel()

```ts
cancel(id): Promise<boolean>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `string` |

###### Returns

`Promise`\<`boolean`\>

##### list()?

```ts
optional list(conversationId?): Promise<ScheduledSupportAction[]>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `conversationId?` | `string` |

###### Returns

`Promise`\<[`ScheduledSupportAction`](#scheduledsupportaction)[]\>

##### schedule()

```ts
schedule(input): Promise<ScheduledSupportAction>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | `Omit`\<[`ScheduledSupportAction`](#scheduledsupportaction), `"id"` \| `"status"`\> & \{ `id?`: `string`; \} |

###### Returns

`Promise`\<[`ScheduledSupportAction`](#scheduledsupportaction)\>

***

### ScheduleDefinition

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TId` *extends* `string` | `string` |
| `TEvent` *extends* [`JourneyEventDefinition`](#journeyeventdefinition) | [`JourneyEventDefinition`](#journeyeventdefinition) |

#### Properties

##### event

```ts
event: TEvent;
```

##### id

```ts
id: TId;
```

##### intent?

```ts
optional intent?: ScheduledOperationIntent;
```

##### kind

```ts
kind: "schedule";
```

##### metadata?

```ts
optional metadata?: Record<string, unknown>;
```

##### payload?

```ts
optional payload?:
  | ((input) => output<TEvent["payload"]>)
| output<TEvent["payload"]>;
```

##### trigger

```ts
trigger: ScheduleTrigger;
```

***

### ScheduledOperationIntent

#### Properties

##### capability?

```ts
optional capability?: string;
```

##### operationAlias?

```ts
optional operationAlias?: string;
```

##### providerPackageId?

```ts
optional providerPackageId?: string;
```

##### reason?

```ts
optional reason?: string;
```

***

### ScheduledSupportAction

#### Properties

##### conversationId

```ts
conversationId: string;
```

##### dueAt

```ts
dueAt: string;
```

##### eventName

```ts
eventName: string;
```

##### id

```ts
id: string;
```

##### intent?

```ts
optional intent?: ScheduledOperationIntent;
```

##### metadata?

```ts
optional metadata?: Record<string, unknown>;
```

##### payload

```ts
payload: unknown;
```

##### scheduleId

```ts
scheduleId: string;
```

##### status

```ts
status: "scheduled" | "cancelled" | "delivered";
```

***

### SelectJourneyCandidatesOptions

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TApp` | `unknown` |
| `TConversation` | `unknown` |
| `TTurn` | `unknown` |

#### Properties

##### activeJourneyId?

```ts
optional activeJourneyId?: string;
```

##### agent

```ts
agent: CompiledAgent;
```

##### allowStaleIndex?

```ts
optional allowStaleIndex?: boolean;
```

##### app

```ts
app: TApp;
```

##### conversation

```ts
conversation: TConversation;
```

##### embeddingModel

```ts
embeddingModel: ModelAdapter;
```

##### index

```ts
index: {
  agentId: string;
  definitionHash: string;
  embeddingModel: string;
  embeddingProvider: string;
  entries: {
     alwaysInclude: boolean;
     condition: string;
     definitionHash: string;
     embedding: {
        dimensions: number;
        model: string;
        vector: number[];
     };
     examples: string[];
     journeyId: string;
     kind: "stateMachine" | "delegation";
     priority: number;
     routingText: string;
     stickiness: "low" | "medium" | "high";
     tags: string[];
  }[];
  generatedAt: string;
  projectionVersion: "cognidesk.journey-index.v1";
};
```

###### agentId

```ts
agentId: string;
```

###### definitionHash

```ts
definitionHash: string;
```

###### embeddingModel

```ts
embeddingModel: string;
```

###### embeddingProvider

```ts
embeddingProvider: string;
```

###### entries

```ts
entries: {
  alwaysInclude: boolean;
  condition: string;
  definitionHash: string;
  embedding: {
     dimensions: number;
     model: string;
     vector: number[];
  };
  examples: string[];
  journeyId: string;
  kind: "stateMachine" | "delegation";
  priority: number;
  routingText: string;
  stickiness: "low" | "medium" | "high";
  tags: string[];
}[];
```

###### generatedAt

```ts
generatedAt: string;
```

###### projectionVersion

```ts
projectionVersion: "cognidesk.journey-index.v1";
```

##### message

```ts
message: string;
```

##### signal?

```ts
optional signal?: AbortSignal;
```

##### topK?

```ts
optional topK?: number;
```

##### turn

```ts
turn: TTurn;
```

***

### StartVoiceConversationInput

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TConversationContext` | `unknown` |

#### Properties

##### agentId

```ts
agentId: string;
```

##### app?

```ts
optional app?: unknown;
```

##### client?

```ts
optional client?: VoiceStartClientHints;
```

##### context

```ts
context: TConversationContext;
```

##### id?

```ts
optional id?: string;
```

***

### StartVoiceResult

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
conversation: ConversationRecord;
```

##### events

```ts
events: RuntimeEvent[];
```

##### socket?

```ts
optional socket?: VoiceSocketMetadata;
```

***

### StartVoiceSegmentInput

#### Properties

##### app?

```ts
optional app?: unknown;
```

##### client?

```ts
optional client?: VoiceStartClientHints;
```

##### conversationId

```ts
conversationId: string;
```

***

### StateActionUseOptions

#### Type Parameters

| Type Parameter |
| ------ |
| `TAction` *extends* [`ActionDefinition`](#actiondefinition) |
| `TContext` |

#### Properties

##### input?

```ts
optional input?: (args) => output<TAction["input"]>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | \{ `context`: `TContext`; \} |
| `args.context` | `TContext` |

###### Returns

`output`\<`TAction`\[`"input"`\]\>

##### type?

```ts
optional type?: "entry" | "exit" | "transition";
```

***

### StateMachineJourneyOptions

#### Extends

- [`ActivationMetadata`](#activationmetadata)

#### Type Parameters

| Type Parameter |
| ------ |
| `TContextSchema` *extends* [`ObjectSchema`](#objectschema) |

#### Properties

##### always?

```ts
optional always?:
  | boolean
| JourneyActivationPredicate<unknown, unknown, unknown>;
```

###### Inherited from

[`ActivationMetadata`](#activationmetadata).[`always`](#always)

##### alwaysInclude?

```ts
optional alwaysInclude?: boolean;
```

###### Inherited from

[`ActivationMetadata`](#activationmetadata).[`alwaysInclude`](#alwaysinclude)

##### condition

```ts
condition: string;
```

###### Inherited from

[`ActivationMetadata`](#activationmetadata).[`condition`](#condition)

##### context

```ts
context: TContextSchema;
```

##### contextReuse?

```ts
optional contextReuse?: ContextReusePolicy<output<TContextSchema>>;
```

##### description?

```ts
optional description?: string;
```

##### examples?

```ts
optional examples?: string[];
```

###### Inherited from

[`ActivationMetadata`](#activationmetadata).[`examples`](#examples)

##### guard?

```ts
optional guard?: JourneyGuardPredicate;
```

###### Inherited from

[`ActivationMetadata`](#activationmetadata).[`guard`](#guard)

##### includeWhen?

```ts
optional includeWhen?: CandidateFilterPredicate;
```

###### Inherited from

[`ActivationMetadata`](#activationmetadata).[`includeWhen`](#includewhen)

##### matcher?

```ts
optional matcher?: JourneyActivationPredicate;
```

###### Inherited from

[`ActivationMetadata`](#activationmetadata).[`matcher`](#matcher)

##### priority?

```ts
optional priority?: number;
```

###### Inherited from

[`ActivationMetadata`](#activationmetadata).[`priority`](#priority)

##### stickiness?

```ts
optional stickiness?: "low" | "medium" | "high";
```

###### Inherited from

[`ActivationMetadata`](#activationmetadata).[`stickiness`](#stickiness)

##### tags?

```ts
optional tags?: string[];
```

###### Inherited from

[`ActivationMetadata`](#activationmetadata).[`tags`](#tags)

***

### StateReference

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TId` *extends* `string` | `string` |

#### Properties

##### id

```ts
readonly id: TId;
```

***

### StorageAdapter

#### Methods

##### appendEvent()

```ts
appendEvent<TEvent>(event): Promise<RuntimeEvent>;
```

###### Type Parameters

| Type Parameter |
| ------ |
| `TEvent` *extends* [`RuntimeEventInput`](#runtimeeventinput)\< \| `"error"` \| `"schedule.due"` \| `"message.started"` \| `"message.delta"` \| `"message.completed"` \| `"message.generated"` \| `"message.aborted"` \| `"channel.event.received"` \| `"channel.received"` \| `"channel.sent"` \| `"channel.delivery.updated"` \| `"channel.thread.linked"` \| `"voice.segment.started"` \| `"voice.segment.ended"` \| `"voice.connection.failed"` \| `"voice.interrupted"` \| `"voice.recording.started"` \| `"voice.recording.completed"` \| `"voice.transcript.committed"` \| `"journey.candidates.retrieved"` \| `"journey.matched"` \| `"journey.activated"` \| `"journey.completed"` \| `"journey.guard.denied"` \| `"journey.event.emitted"` \| `"journey.state.entered"` \| `"journey.extraction.proposed"` \| `"journey.extraction.accepted"` \| `"action.started"` \| `"action.completed"` \| `"tool.started"` \| `"tool.completed"` \| `"approval.requested"` \| `"approval.resolved"` \| `"knowledge.retrieved"` \| `"context.resolved"` \| `"policy.evaluated"` \| `"ui.prompted"` \| `"ui.submitted"` \| `"conversation.compaction.started"` \| `"conversation.compaction.completed"` \| `"handoff.requested"` \| `"handoff.completed"` \| `"handoff.resumed"` \| `"conversation.closed"` \| `"eval.completed"` \| `` `custom.${string}` ``\> |

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `TEvent` |

###### Returns

`Promise`\<[`RuntimeEvent`](#runtimeevent)\>

##### appendEventIfApprovalPending()?

```ts
optional appendEventIfApprovalPending<TEvent>(event): Promise<RuntimeEvent>;
```

###### Type Parameters

| Type Parameter |
| ------ |
| `TEvent` *extends* [`RuntimeEventInput`](#runtimeeventinput)\<`"approval.resolved"`\> |

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `TEvent` |

###### Returns

`Promise`\<[`RuntimeEvent`](#runtimeevent)\>

##### appendEventIfNoActiveVoiceSegment()?

```ts
optional appendEventIfNoActiveVoiceSegment<TEvent>(event): Promise<RuntimeEvent>;
```

###### Type Parameters

| Type Parameter |
| ------ |
| `TEvent` *extends* [`RuntimeEventInput`](#runtimeeventinput)\<`"voice.segment.started"`\> |

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `TEvent` |

###### Returns

`Promise`\<[`RuntimeEvent`](#runtimeevent)\>

##### createConversation()

```ts
createConversation<TConversationContext>(input): Promise<ConversationRecord<TConversationContext>>;
```

###### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TConversationContext` | `unknown` |

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`CreateConversationInput`](#createconversationinput)\<`TConversationContext`\> |

###### Returns

`Promise`\<[`ConversationRecord`](#conversationrecord)\<`TConversationContext`\>\>

##### getConversation()

```ts
getConversation<TConversationContext>(conversationId): Promise<ConversationRecord<TConversationContext>>;
```

###### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TConversationContext` | `unknown` |

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `conversationId` | `string` |

###### Returns

`Promise`\<[`ConversationRecord`](#conversationrecord)\<`TConversationContext`\>\>

##### getSnapshot()

```ts
getSnapshot(conversationId): Promise<RuntimeSnapshot>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `conversationId` | `string` |

###### Returns

`Promise`\<[`RuntimeSnapshot`](#runtimesnapshot)\>

##### initialize()?

```ts
optional initialize(): void | Promise<void>;
```

###### Returns

`void` \| `Promise`\<`void`\>

##### listEvents()

```ts
listEvents(options): Promise<RuntimeEvent[]>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`ListEventsOptions`](#listeventsoptions) |

###### Returns

`Promise`\<[`RuntimeEvent`](#runtimeevent)[]\>

##### saveSnapshot()

```ts
saveSnapshot(snapshot): Promise<void>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `snapshot` | [`RuntimeSnapshot`](#runtimesnapshot) |

###### Returns

`Promise`\<`void`\>

##### updateConversationLifecycle()

```ts
updateConversationLifecycle(conversationId, lifecycle): Promise<ConversationRecord<unknown>>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `conversationId` | `string` |
| `lifecycle` | [`ConversationLifecycle`](#conversationlifecycle) |

###### Returns

`Promise`\<[`ConversationRecord`](#conversationrecord)\<`unknown`\>\>

***

### StructuredOutputPromptMetadata

#### Properties

##### name

```ts
name: string;
```

##### required

```ts
required: boolean;
```

##### schema?

```ts
optional schema?: unknown;
```

***

### SubmitWidgetInput

#### Properties

##### conversationId

```ts
conversationId: string;
```

##### output

```ts
output: unknown;
```

##### promptId

```ts
promptId: string;
```

##### widgetKind

```ts
widgetKind: string;
```

***

### TelemetryContext

#### Methods

##### addEvent()

```ts
addEvent(name, attributes?): void;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |
| `attributes?` | `Attributes` |

###### Returns

`void`

##### recordException()

```ts
recordException(error): void;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `error` | `unknown` |

###### Returns

`void`

##### setAttribute()

```ts
setAttribute(name, value): void;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |
| `value` | `string` \| `number` \| `boolean` |

###### Returns

`void`

##### startSpan()

```ts
startSpan(name, options?): Span;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |
| `options?` | [`TelemetryContextSpanOptions`](#telemetrycontextspanoptions) |

###### Returns

`Span`

##### withSpan()

###### Call Signature

```ts
withSpan<T>(name, run): Promise<T>;
```

###### Type Parameters

| Type Parameter |
| ------ |
| `T` |

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |
| `run` | [`TelemetrySpanRunner`](#telemetryspanrunner)\<`T`\> |

###### Returns

`Promise`\<`T`\>

###### Call Signature

```ts
withSpan<T>(
   name,
   options,
run): Promise<T>;
```

###### Type Parameters

| Type Parameter |
| ------ |
| `T` |

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |
| `options` | [`TelemetryContextSpanOptions`](#telemetrycontextspanoptions) |
| `run` | [`TelemetrySpanRunner`](#telemetryspanrunner)\<`T`\> |

###### Returns

`Promise`\<`T`\>

***

### TelemetryContextSpanOptions

#### Properties

##### attributes?

```ts
optional attributes?: Attributes;
```

***

### TelemetrySpanOptions

#### Properties

##### attributes?

```ts
optional attributes?: Attributes;
```

##### metric?

```ts
optional metric?: TelemetryMetricOptions;
```

##### name

```ts
name: string;
```

***

### TextGenerationInput

#### Properties

##### messages

```ts
messages: ModelMessage[];
```

##### promptPayload?

```ts
optional promptPayload?: ModelVisiblePromptPayload;
```

##### promptTask?

```ts
optional promptTask?: PromptTask;
```

##### responseFormat?

```ts
optional responseFormat?: ZodType;
```

##### role

```ts
role: ModelRole;
```

##### signal?

```ts
optional signal?: AbortSignal;
```

##### toolChoice?

```ts
optional toolChoice?: "required" | "none" | "auto";
```

##### tools?

```ts
optional tools?: ModelToolDefinition[];
```

#### Methods

##### onTextDelta()?

```ts
optional onTextDelta(delta): void | Promise<void>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `delta` | `string` |

###### Returns

`void` \| `Promise`\<`void`\>

***

### TextGenerationOutput

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | `unknown` |

#### Properties

##### providerMetadata?

```ts
optional providerMetadata?: Record<string, unknown>;
```

##### structured?

```ts
optional structured?: T;
```

##### text

```ts
text: string;
```

##### toolCalls?

```ts
optional toolCalls?: ModelToolCall[];
```

##### usage?

```ts
optional usage?: UsageRecord;
```

***

### ToolApprovalOptions

#### Properties

##### editableFields?

```ts
optional editableFields?: string[];
```

##### expiresAt?

```ts
optional expiresAt?: string;
```

##### metadata?

```ts
optional metadata?: Record<string, unknown>;
```

##### reason?

```ts
optional reason?: string;
```

##### requirement?

```ts
optional requirement?: ApprovalRequirement;
```

##### supportedResolutions?

```ts
optional supportedResolutions?: ApprovalResolutionMode[];
```

***

### ToolDefinition

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TName` *extends* `string` | `string` |
| `TInputSchema` *extends* `z.ZodType` | `z.ZodType` |
| `TOutputSchema` *extends* `z.ZodType` | `z.ZodType` |
| `TSideEffect` *extends* `boolean` | `boolean` |

#### Properties

##### description?

```ts
optional description?: string;
```

##### execute

```ts
execute: (context) => Promise<output<TOutputSchema>>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `context` | [`ToolExecutionContext`](#toolexecutioncontext)\<`output`\<`TInputSchema`\>\> |

###### Returns

`Promise`\<`output`\<`TOutputSchema`\>\>

##### idempotencyKey?

```ts
optional idempotencyKey?: (args) => string;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | \{ `conversationId`: `string`; `input`: `output`\<`TInputSchema`\>; \} |
| `args.conversationId` | `string` |
| `args.input` | `output`\<`TInputSchema`\> |

###### Returns

`string`

##### input

```ts
input: TInputSchema;
```

##### kind

```ts
kind: "tool";
```

##### name

```ts
name: TName;
```

##### output

```ts
output: TOutputSchema;
```

##### policy?

```ts
optional policy?: ToolPolicyOptions;
```

##### sideEffect

```ts
sideEffect: TSideEffect;
```

***

### ToolExecutionContext

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TInput` | - |
| `TApp` | `unknown` |

#### Properties

##### app

```ts
app: TApp;
```

##### conversationId

```ts
conversationId: string;
```

##### idempotencyKey?

```ts
optional idempotencyKey?: string;
```

##### input

```ts
input: TInput;
```

##### signal?

```ts
optional signal?: AbortSignal;
```

##### telemetry

```ts
telemetry: TelemetryContext;
```

***

### ToolPolicyOptions

#### Properties

##### actionAudience?

```ts
optional actionAudience?: "customer-facing" | "internal-support" | "mixed";
```

##### approval?

```ts
optional approval?: ToolApprovalOptions;
```

##### capability?

```ts
optional capability?: ChannelCapability;
```

##### changesWorkflow?

```ts
optional changesWorkflow?: boolean;
```

##### exposesSensitiveData?

```ts
optional exposesSensitiveData?: boolean;
```

##### externallyVisible?

```ts
optional externallyVisible?: boolean;
```

##### operationAlias?

```ts
optional operationAlias?: string;
```

##### outbound?

```ts
optional outbound?: boolean;
```

##### providerOperation?

```ts
optional providerOperation?: string;
```

##### providerPackageId?

```ts
optional providerPackageId?: string;
```

##### requiredPolicyIds?

```ts
optional requiredPolicyIds?: string[];
```

***

### ToolRunOptions

#### Type Parameters

| Type Parameter |
| ------ |
| `TTool` *extends* [`AnyTool`](#anytool) |
| `TContext` |

#### Properties

##### assign?

```ts
optional assign?: Partial<Record<ContextPath<TContext>, (args) => unknown>>;
```

##### input?

```ts
optional input?: (args) => output<TTool["input"]>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | \{ `context`: `TContext`; \} |
| `args.context` | `TContext` |

###### Returns

`output`\<`TTool`\[`"input"`\]\>

##### onFailure?

```ts
optional onFailure?: StateBuilder<string, ObjectSchema>;
```

##### onSuccess?

```ts
optional onSuccess?: StateBuilder<string, ObjectSchema>;
```

##### onValidationError?

```ts
optional onValidationError?: StateBuilder<string, ObjectSchema>;
```

***

### TransitionOptions

#### Type Parameters

| Type Parameter |
| ------ |
| `TContext` |

#### Properties

##### description?

```ts
optional description?: string;
```

##### guard?

```ts
optional guard?: (context) => MaybePromise$1<GuardResult>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `context` | [`GuardContext`](#guardcontext)\<`unknown`, `TContext`\> |

###### Returns

`MaybePromise$1`\<[`GuardResult`](#guardresult)\>

##### priority?

```ts
optional priority?: number;
```

***

### UsageRecord

#### Properties

##### cachedInputTokens?

```ts
optional cachedInputTokens?: number;
```

##### inputTokens?

```ts
optional inputTokens?: number;
```

##### outputTokens?

```ts
optional outputTokens?: number;
```

##### providerMetadata?

```ts
optional providerMetadata?: Record<string, unknown>;
```

##### reasoningTokens?

```ts
optional reasoningTokens?: number;
```

##### totalTokens?

```ts
optional totalTokens?: number;
```

***

### ValidateJourneyIndexOptions

#### Properties

##### embeddingModel?

```ts
optional embeddingModel?: Pick<ModelAdapter, "provider" | "model">;
```

***

### VoiceChannelSegment

#### Properties

##### channel

```ts
channel: "voice";
```

##### conversationId

```ts
conversationId: string;
```

##### endedAt?

```ts
optional endedAt?: string;
```

##### id

```ts
id: string;
```

##### startedAt

```ts
startedAt: string;
```

***

### VoiceConnection

#### Properties

##### adapter

```ts
adapter: string;
```

##### channelSegmentId

```ts
channelSegmentId: string;
```

##### expiresAt?

```ts
optional expiresAt?: string;
```

##### id

```ts
id: string;
```

##### provider?

```ts
optional provider?: string;
```

##### providerSessionId?

```ts
optional providerSessionId?: string;
```

##### status

```ts
status: VoiceConnectionStatus;
```

***

### VoiceIceServer

#### Properties

##### credential?

```ts
optional credential?: string;
```

##### urls

```ts
urls: string | string[];
```

##### username?

```ts
optional username?: string;
```

***

### VoiceModelSet

#### Properties

##### model

```ts
model: string;
```

##### provider

```ts
provider: string;
```

##### settings?

```ts
optional settings?: Record<string, unknown>;
```

##### voice?

```ts
optional voice?: string;
```

***

### VoiceProfile

#### Properties

##### instructions?

```ts
optional instructions?: string;
```

##### metadata?

```ts
optional metadata?: Record<string, unknown>;
```

##### modelSet?

```ts
optional modelSet?: VoiceModelSet;
```

##### recording?

```ts
optional recording?: VoiceRecordingPolicy;
```

***

### VoiceRecordingPolicy

#### Properties

##### enabled?

```ts
optional enabled?: boolean;
```

##### metadata?

```ts
optional metadata?: Record<string, unknown>;
```

##### mode?

```ts
optional mode?: "input" | "both";
```

##### requireConsent?

```ts
optional requireConsent?: boolean;
```

***

### VoiceSelection

#### Properties

##### provider

```ts
provider: string;
```

##### voice

```ts
voice: string;
```

***

### VoiceSocketMetadata

#### Properties

##### expiresAt

```ts
expiresAt: string;
```

##### protocol

```ts
protocol: "cognidesk.voice.v1";
```

##### token

```ts
token: string;
```

##### url

```ts
url: string;
```

***

### VoiceStartClientHints

#### Properties

##### locale?

```ts
optional locale?: string;
```

##### metadata?

```ts
optional metadata?: Record<string, unknown>;
```

##### userAgent?

```ts
optional userAgent?: string;
```

***

### WidgetDefinition

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TKind` *extends* `string` | `string` |
| `TInputSchema` *extends* `z.ZodType` | `z.ZodType` |
| `TOutputSchema` *extends* `z.ZodType` | `z.ZodType` |

#### Properties

##### input

```ts
input: TInputSchema;
```

##### kind

```ts
kind: TKind;
```

##### output

```ts
output: TOutputSchema;
```

***

### WidgetPromptDefinition

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TWidget` *extends* [`WidgetDefinition`](#widgetdefinition) | [`WidgetDefinition`](#widgetdefinition) |

#### Properties

##### input

```ts
input: output<TWidget["input"]>;
```

##### widget

```ts
widget: TWidget;
```

## Type Aliases

### ActionAudience

```ts
type ActionAudience = ChannelAudience;
```

***

### AgentChannelPolicyMap

```ts
type AgentChannelPolicyMap = Record<string, AgentChannelPolicyOptions>;
```

***

### AgentChannelPolicyOptions

```ts
type AgentChannelPolicyOptions = Record<string, AgentPolicyValue>;
```

***

### AgentHandoffPolicyOptions

```ts
type AgentHandoffPolicyOptions = Record<string, AgentPolicyValue>;
```

***

### AgentLogLevel

```ts
type AgentLogLevel = "trace" | "debug" | "info" | "error";
```

***

### AgentModelAdapters

```ts
type AgentModelAdapters = { [Role in ModelRole]: ModelAdapter };
```

***

### AgentModelSet

```ts
type AgentModelSet = AgentModelAdapters;
```

***

### AgentPersonaOptions

```ts
type AgentPersonaOptions = Record<string, AgentPolicyValue>;
```

***

### AgentPolicyValue

```ts
type AgentPolicyValue =
  | string
  | number
  | boolean
  | null
  | AgentPolicyValue[]
  | {
[key: string]: AgentPolicyValue;
};
```

***

### AnyCustomRuntimeEvent

```ts
type AnyCustomRuntimeEvent = CustomRuntimeEventDefinition<string, z.ZodType>;
```

***

### AnyTool

```ts
type AnyTool = ToolDefinition<string, z.ZodType, z.ZodType, boolean>;
```

***

### ApprovalRequirement

```ts
type ApprovalRequirement = "never" | "policy" | "required";
```

***

### ApprovalResolutionMode

```ts
type ApprovalResolutionMode = "approve" | "deny" | "edit" | "expire" | "cancel" | "return-to-agent";
```

***

### CandidateFilterPredicate

```ts
type CandidateFilterPredicate<TApp, TConversation, TTurn> = (args) => boolean;
```

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TApp` | `unknown` |
| `TConversation` | `unknown` |
| `TTurn` | `unknown` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | [`ApplicationContextParts`](#applicationcontextparts)\<`TConversation`, `TTurn`\> & \{ `activeJourneyId?`: `string`; `app`: `TApp`; \} |

#### Returns

`boolean`

***

### CapabilityAvailability

```ts
type CapabilityAvailability = z.infer<typeof CapabilityAvailabilitySchema>;
```

***

### CapabilityAvailabilityInput

```ts
type CapabilityAvailabilityInput = z.input<typeof CapabilityAvailabilitySchema>;
```

***

### CapabilityAvailabilityStatus

```ts
type CapabilityAvailabilityStatus = typeof capabilityAvailabilityStatuses[number];
```

***

### CapabilityUseDecision

```ts
type CapabilityUseDecision =
  | {
  allowed: true;
  policy: ChannelPolicyConfig;
}
  | {
  allowed: false;
  blockers: {
     code: string;
     kind?: string;
     message: string;
  }[];
  code:   | "missing-channel-configuration"
     | "capability-not-enabled"
     | "capability-blocked"
     | "outbound-disabled"
     | "provider-direction-not-supported"
     | "missing-policy";
  message: string;
};
```

***

### CapabilityUseRequest

```ts
type CapabilityUseRequest = z.infer<typeof CapabilityUseRequestSchema>;
```

***

### CapabilityUseRequestInput

```ts
type CapabilityUseRequestInput = z.input<typeof CapabilityUseRequestSchema>;
```

***

### CategoryDataSourceDeclaration

```ts
type CategoryDataSourceDeclaration = z.infer<typeof CategoryDataSourceDeclarationSchema>;
```

***

### CategoryDataSourceDeclarationInput

```ts
type CategoryDataSourceDeclarationInput = z.input<typeof CategoryDataSourceDeclarationSchema>;
```

***

### CategoryEventDeclaration

```ts
type CategoryEventDeclaration = z.infer<typeof CategoryEventDeclarationSchema>;
```

***

### CategoryEventDeclarationInput

```ts
type CategoryEventDeclarationInput = z.input<typeof CategoryEventDeclarationSchema>;
```

***

### CategoryEventDirection

```ts
type CategoryEventDirection = typeof categoryEventDirections[number];
```

***

### CategoryOperationCatalog

```ts
type CategoryOperationCatalog = z.infer<typeof CategoryOperationCatalogSchema>;
```

***

### CategoryOperationCatalogEntry

```ts
type CategoryOperationCatalogEntry = CategoryOperationDeclaration;
```

***

### CategoryOperationCatalogEntryInput

```ts
type CategoryOperationCatalogEntryInput = CategoryOperationDeclarationInput;
```

***

### CategoryOperationCatalogInput

```ts
type CategoryOperationCatalogInput = z.input<typeof CategoryOperationCatalogSchema>;
```

***

### CategoryOperationDeclaration

```ts
type CategoryOperationDeclaration = z.infer<typeof CategoryOperationDeclarationSchema>;
```

***

### CategoryOperationDeclarationInput

```ts
type CategoryOperationDeclarationInput = z.input<typeof CategoryOperationDeclarationSchema>;
```

***

### CategoryOperationLevel

```ts
type CategoryOperationLevel = typeof categoryOperationLevels[number];
```

***

### CategoryOutputDeclaration

```ts
type CategoryOutputDeclaration = z.infer<typeof CategoryOutputDeclarationSchema>;
```

***

### CategoryOutputDeclarationInput

```ts
type CategoryOutputDeclarationInput = z.input<typeof CategoryOutputDeclarationSchema>;
```

***

### ChannelAdapterVerificationResult

```ts
type ChannelAdapterVerificationResult =
  | {
  evidence?: Record<string, unknown>;
  verified: true;
}
  | {
  metadata?: Record<string, unknown>;
  reason?: string;
  reasonCode?: string;
  verified: false;
};
```

***

### ChannelAudience

```ts
type ChannelAudience = typeof channelAudiences[number];
```

***

### ChannelBehaviorPolicy

```ts
type ChannelBehaviorPolicy = z.infer<typeof ChannelBehaviorPolicySchema>;
```

***

### ChannelBehaviorPolicyInput

```ts
type ChannelBehaviorPolicyInput = z.input<typeof ChannelBehaviorPolicySchema>;
```

***

### ChannelCapability

```ts
type ChannelCapability = Extensible$1<CoreChannelCapability>;
```

***

### ChannelCapabilityDeclaration

```ts
type ChannelCapabilityDeclaration = z.infer<typeof ChannelCapabilityDeclarationSchema>;
```

***

### ChannelCapabilityFlags

```ts
type ChannelCapabilityFlags = z.infer<typeof ChannelCapabilityFlagsSchema>;
```

***

### ChannelCapabilityFlagsInput

```ts
type ChannelCapabilityFlagsInput = z.input<typeof ChannelCapabilityFlagsSchema>;
```

***

### ChannelContext

```ts
type ChannelContext = z.infer<typeof ChannelContextSchema>;
```

***

### ChannelContextInput

```ts
type ChannelContextInput = Omit<z.input<typeof ChannelContextSchema>, "capabilities"> & {
  capabilities?: Partial<ChannelCapabilityFlagsInput>;
};
```

#### Type Declaration

| Name | Type |
| ------ | ------ |
| `capabilities?` | `Partial`\<[`ChannelCapabilityFlagsInput`](#channelcapabilityflagsinput)\> |

***

### ChannelEvent

```ts
type ChannelEvent<TPayload, TRawPayload> = ChannelEventEnvelope<TPayload, TRawPayload>;
```

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TPayload` | [`NormalizedChannelPayload`](#normalizedchannelpayload) |
| `TRawPayload` | `unknown` |

***

### ChannelEventActorType

```ts
type ChannelEventActorType = typeof channelEventActorTypes[number];
```

***

### ChannelEventBindingOutcome

```ts
type ChannelEventBindingOutcome = typeof channelEventBindingOutcomes[number];
```

***

### ChannelEventBindingStatus

```ts
type ChannelEventBindingStatus = typeof channelEventBindingStatuses[number];
```

***

### ChannelEventDirection

```ts
type ChannelEventDirection = typeof channelEventDirections[number];
```

***

### ChannelEventHandlingDisposition

```ts
type ChannelEventHandlingDisposition = ChannelEventHandlingDispositionKind;
```

***

### ChannelEventHandlingDispositionKind

```ts
type ChannelEventHandlingDispositionKind = typeof channelEventHandlingDispositionKinds[number];
```

***

### ChannelEventIntakeStatus

```ts
type ChannelEventIntakeStatus = typeof channelEventIntakeStatuses[number];
```

***

### ChannelEventIntent

```ts
type ChannelEventIntent = Extensible<CoreChannelEventIntent>;
```

***

### ChannelEventKind

```ts
type ChannelEventKind = ChannelEventNature;
```

***

### ChannelEventNature

```ts
type ChannelEventNature = Extensible<CoreChannelEventNature>;
```

***

### ChannelEventSourceType

```ts
type ChannelEventSourceType = typeof channelEventSourceTypes[number];
```

***

### ChannelFlowActivation

```ts
type ChannelFlowActivation = z.infer<typeof ChannelFlowActivationSchema>;
```

***

### ChannelFlowActivationInput

```ts
type ChannelFlowActivationInput = z.input<typeof ChannelFlowActivationSchema>;
```

***

### ChannelHandoffPolicy

```ts
type ChannelHandoffPolicy = z.infer<typeof ChannelHandoffPolicySchema>;
```

***

### ChannelHandoffPolicyInput

```ts
type ChannelHandoffPolicyInput = z.input<typeof ChannelHandoffPolicySchema>;
```

***

### ChannelOutboundPolicy

```ts
type ChannelOutboundPolicy = z.infer<typeof ChannelOutboundPolicySchema>;
```

***

### ChannelOutboundPolicyInput

```ts
type ChannelOutboundPolicyInput = z.input<typeof ChannelOutboundPolicySchema>;
```

***

### ChannelOutputDeliveryMode

```ts
type ChannelOutputDeliveryMode = typeof channelOutputDeliveryModes[number];
```

***

### ChannelOutputIntentKind

```ts
type ChannelOutputIntentKind = Extensible<CoreChannelOutputIntentKind>;
```

***

### ChannelOutputProducerType

```ts
type ChannelOutputProducerType = typeof channelOutputProducerTypes[number];
```

***

### ChannelOutputResolutionOutcome

```ts
type ChannelOutputResolutionOutcome = typeof channelOutputResolutionOutcomes[number];
```

***

### ChannelOutputResolutionStatus

```ts
type ChannelOutputResolutionStatus = typeof channelOutputResolutionStatuses[number];
```

***

### ChannelPolicyConfig

```ts
type ChannelPolicyConfig = z.infer<typeof ChannelPolicyConfigSchema>;
```

***

### ChannelPolicyConfigInput

```ts
type ChannelPolicyConfigInput = z.input<typeof ChannelPolicyConfigSchema>;
```

***

### ChannelSetConfig

```ts
type ChannelSetConfig = z.infer<typeof ChannelSetConfigSchema>;
```

***

### ChannelSetConfigInput

```ts
type ChannelSetConfigInput = z.input<typeof ChannelSetConfigSchema>;
```

***

### ChannelSourceEvidence

```ts
type ChannelSourceEvidence<TRawPayload> = ChannelEventSourceEvidence<TRawPayload>;
```

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TRawPayload` | `unknown` |

***

### ContextPath

```ts
type ContextPath<T> = T extends Primitive ? never : T extends readonly unknown[] ? never : { [K in StringKey<T>]: T[K] extends Primitive | readonly unknown[] ? K : K | `${K}.${ContextPath<T[K]>}` }[StringKey<T>];
```

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

***

### ContextReusePredicate

```ts
type ContextReusePredicate<TApp, TConversation, TTurn, TContext> = (args) => MaybePromise$1<boolean>;
```

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TApp` | `unknown` |
| `TConversation` | `unknown` |
| `TTurn` | `unknown` |
| `TContext` | `unknown` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | [`ApplicationContextParts`](#applicationcontextparts)\<`TConversation`, `TTurn`\> & \{ `activeJourneyId?`: `string`; `app`: `TApp`; `journeyId`: `string`; `previousContext`: `TContext`; \} |

#### Returns

`MaybePromise$1`\<`boolean`\>

***

### ConversationChannel

```ts
type ConversationChannel =
  | ConversationChannelKind
  | ChannelContext;
```

***

### ConversationChannelInput

```ts
type ConversationChannelInput =
  | ConversationChannelKind
  | ChannelContextInput;
```

***

### ConversationChannelKind

```ts
type ConversationChannelKind = Extensible$1<CoreConversationChannel>;
```

***

### ConversationCompactionSummary

```ts
type ConversationCompactionSummary = z.infer<typeof conversationCompactionSummarySchema>;
```

***

### ConversationLifecycle

```ts
type ConversationLifecycle = "active" | "handoff" | "closed";
```

***

### CoreChannelCapability

```ts
type CoreChannelCapability = typeof coreChannelCapabilities[number];
```

***

### CoreChannelEventActor

```ts
type CoreChannelEventActor = ChannelEventActorType;
```

***

### CoreChannelEventDirection

```ts
type CoreChannelEventDirection = ChannelEventDirection;
```

***

### CoreChannelEventIntent

```ts
type CoreChannelEventIntent = typeof coreChannelEventIntents[number];
```

***

### CoreChannelEventKind

```ts
type CoreChannelEventKind = CoreChannelEventNature;
```

***

### CoreChannelEventNature

```ts
type CoreChannelEventNature = typeof coreChannelEventNatures[number];
```

***

### CoreChannelOutputIntentKind

```ts
type CoreChannelOutputIntentKind = typeof coreChannelOutputIntentKinds[number];
```

***

### CoreConversationChannel

```ts
type CoreConversationChannel = typeof coreConversationChannels[number];
```

***

### CoreProviderCategory

```ts
type CoreProviderCategory = typeof coreProviderCategories[number];
```

***

### EventRoutingMode

```ts
type EventRoutingMode = "none" | "activeJourneyOnly" | "full" | "targeted";
```

***

### GuardContext

```ts
type GuardContext<TApp, TJourneyContext> = {
  app: TApp;
  context: TJourneyContext;
};
```

#### Type Parameters

| Type Parameter |
| ------ |
| `TApp` |
| `TJourneyContext` |

#### Properties

##### app

```ts
app: TApp;
```

##### context

```ts
context: TJourneyContext;
```

***

### GuardResult

```ts
type GuardResult =
  | boolean
  | {
  allow: true;
}
  | {
  allow: false;
  code: string;
  message?: string;
  metadata?: Record<string, unknown>;
  prompt?: WidgetPromptDefinition<WidgetDefinition>;
};
```

***

### InferSchema

```ts
type InferSchema<TSchema> = z.infer<TSchema>;
```

#### Type Parameters

| Type Parameter |
| ------ |
| `TSchema` *extends* `z.ZodType` |

***

### IntegrationCategoryProfile

```ts
type IntegrationCategoryProfile = z.infer<typeof IntegrationCategoryProfileSchema>;
```

***

### IntegrationCategoryProfileInput

```ts
type IntegrationCategoryProfileInput = z.input<typeof IntegrationCategoryProfileSchema>;
```

***

### JourneyActivationPredicate

```ts
type JourneyActivationPredicate<TApp, TConversation, TTurn> = (args) => MaybePromise$1<boolean>;
```

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TApp` | `unknown` |
| `TConversation` | `unknown` |
| `TTurn` | `unknown` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | [`ApplicationContextParts`](#applicationcontextparts)\<`TConversation`, `TTurn`\> & \{ `activeJourneyId?`: `string`; `app`: `TApp`; \} |

#### Returns

`MaybePromise$1`\<`boolean`\>

***

### JourneyEntryPredicate

```ts
type JourneyEntryPredicate<TApp, TConversation, TTurn, TContext> = (args) => MaybePromise$1<boolean>;
```

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TApp` | `unknown` |
| `TConversation` | `unknown` |
| `TTurn` | `unknown` |
| `TContext` | `unknown` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | [`ApplicationContextParts`](#applicationcontextparts)\<`TConversation`, `TTurn`\> & \{ `activeJourneyId?`: `string`; `app`: `TApp`; `context`: `TContext`; `journeyId`: `string`; \} |

#### Returns

`MaybePromise$1`\<`boolean`\>

***

### JourneyGuardPredicate

```ts
type JourneyGuardPredicate<TApp, TConversation, TTurn> = (args) => MaybePromise$1<GuardResult>;
```

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TApp` | `unknown` |
| `TConversation` | `unknown` |
| `TTurn` | `unknown` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | [`ApplicationContextParts`](#applicationcontextparts)\<`TConversation`, `TTurn`\> & \{ `activeJourneyId?`: `string`; `app`: `TApp`; `journeyId`: `string`; \} |

#### Returns

`MaybePromise$1`\<[`GuardResult`](#guardresult)\>

***

### JourneyIndex

```ts
type JourneyIndex = z.infer<typeof journeyIndexSchema>;
```

***

### JourneyIndexEmbedding

```ts
type JourneyIndexEmbedding = z.infer<typeof journeyIndexEmbeddingSchema>;
```

***

### JourneyIndexEntry

```ts
type JourneyIndexEntry = z.infer<typeof journeyIndexEntrySchema>;
```

***

### ModelPromptProfileRender

```ts
type ModelPromptProfileRender = (input) => string | Promise<string>;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`ModelPromptProfileRenderInput`](#modelpromptprofilerenderinput) |

#### Returns

`string` \| `Promise`\<`string`\>

***

### ModelRole

```ts
type ModelRole =
  | "response"
  | "matcher"
  | "extraction"
  | "citationPostProcessing"
  | "journeyEmbedding"
  | "compaction";
```

***

### ModelVisiblePromptPayload

```ts
type ModelVisiblePromptPayload = Record<string, unknown>;
```

***

### NormalizedChannelPayloadInput

```ts
type NormalizedChannelPayloadInput = NormalizedChannelPayload & Record<string, unknown>;
```

***

### ObjectSchema

```ts
type ObjectSchema = z.ZodObject<Record<string, z.ZodType>>;
```

***

### PromptProfileRole

```ts
type PromptProfileRole = Exclude<ModelRole, "journeyEmbedding">;
```

***

### PromptTask

```ts
type PromptTask =
  | "response"
  | "journey-matcher"
  | "transition-matcher"
  | "delegation-completion"
  | "extraction"
  | "citation-post-processing"
  | "compaction"
  | "generated-preamble";
```

***

### ProviderCapabilityCoverage

```ts
type ProviderCapabilityCoverage = typeof providerCapabilityCoverageLevels[number];
```

***

### ProviderCapabilityCoverageReport

```ts
type ProviderCapabilityCoverageReport = z.infer<typeof ProviderCapabilityCoverageReportSchema>;
```

***

### ProviderCategory

```ts
type ProviderCategory = Extensible$1<CoreProviderCategory>;
```

***

### ProviderCoverage

```ts
type ProviderCoverage = z.infer<typeof ProviderCoverageSchema>;
```

***

### ProviderCoverageInput

```ts
type ProviderCoverageInput = z.input<typeof ProviderCoverageSchema>;
```

***

### ProviderCoverageScope

```ts
type ProviderCoverageScope = z.infer<typeof ProviderCoverageScopeSchema>;
```

***

### ProviderCredentialRequirement

```ts
type ProviderCredentialRequirement = z.infer<typeof ProviderCredentialRequirementSchema>;
```

***

### ProviderCredentialState

```ts
type ProviderCredentialState = typeof providerCredentialStatuses[number];
```

***

### ProviderCredentialStatus

```ts
type ProviderCredentialStatus = z.infer<typeof ProviderCredentialStatusSchema>;
```

***

### ProviderCredentialStatusInput

```ts
type ProviderCredentialStatusInput = z.input<typeof ProviderCredentialStatusSchema>;
```

***

### ProviderDirection

```ts
type ProviderDirection = typeof providerDirections[number];
```

***

### ProviderManifest

```ts
type ProviderManifest = z.infer<typeof ProviderManifestSchema>;
```

***

### ProviderManifestInput

```ts
type ProviderManifestInput = z.input<typeof ProviderManifestSchema>;
```

***

### ProviderObjectDescriptor

```ts
type ProviderObjectDescriptor = z.infer<typeof ProviderObjectDescriptorSchema>;
```

***

### ProviderOperationCoverageMismatch

```ts
type ProviderOperationCoverageMismatch = z.infer<typeof ProviderOperationCoverageMismatchSchema>;
```

***

### ProviderOperationDeclaration

```ts
type ProviderOperationDeclaration = z.infer<typeof ProviderOperationDeclarationSchema>;
```

***

### ProviderOperationDeclarationInput

```ts
type ProviderOperationDeclarationInput = z.input<typeof ProviderOperationDeclarationSchema>;
```

***

### ProviderReadiness

```ts
type ProviderReadiness = z.infer<typeof ProviderReadinessSchema>;
```

***

### ProviderReadinessInput

```ts
type ProviderReadinessInput = z.input<typeof ProviderReadinessSchema>;
```

***

### ProviderRegistryQuery

```ts
type ProviderRegistryQuery = z.infer<typeof ProviderRegistryQuerySchema>;
```

***

### ProviderRegistryQueryInput

```ts
type ProviderRegistryQueryInput = z.input<typeof ProviderRegistryQuerySchema>;
```

***

### ProviderTrustLevel

```ts
type ProviderTrustLevel = typeof providerTrustLevels[number];
```

***

### RuntimeApprovalOutcome

```ts
type RuntimeApprovalOutcome = "allow" | "require-approval" | "draft" | "deny" | "defer" | "handoff";
```

***

### RuntimeEvent

```ts
type RuntimeEvent =
  | RuntimeEventBase<"message.started", {
  role: "assistant" | "user";
}>
  | RuntimeEventBase<"message.delta", {
  textDelta: string;
}>
  | RuntimeEventBase<"message.completed", {
  intermediate?: boolean;
  segments?: MessageSegment[];
  text: string;
  usage?: UsageRecord;
  visibleToModel?: boolean;
}>
  | RuntimeEventBase<"message.generated", {
  channel?: ChannelContext;
  policyApplied?: {
     maxCharacters?: number;
     maxWords?: number;
     truncated?: boolean;
  };
  textLength: number;
  toolCallCount?: number;
  usage?: UsageRecord;
}>
  | RuntimeEventBase<"message.aborted", {
  partialText?: string;
  reason: string;
}>
  | RuntimeEventBase<"channel.event.received", {
  actor?: ChannelEventActor;
  bindingOutcome: ChannelEventBindingOutcome;
  channel: ChannelContext;
  direction?: ChannelEventDirection;
  eventId?: string;
  handlingDisposition: ChannelEventHandlingDisposition;
  identity?: ChannelEventIdentity;
  intent?: ChannelEventIntent;
  kind: ChannelEventKind;
  metadata?: Record<string, unknown>;
  occurredAt?: string;
  payload?: unknown;
  source?: ChannelSourceEvidence;
}>
  | RuntimeEventBase<"channel.received", {
  channel: ChannelContext;
  payload?: unknown;
  text?: string;
}>
  | RuntimeEventBase<"channel.sent", {
  channel: ChannelContext;
  payload?: unknown;
  text?: string;
}>
  | RuntimeEventBase<"channel.delivery.updated", {
  channel: ChannelContext;
  payload?: unknown;
  status: string;
}>
  | RuntimeEventBase<"channel.thread.linked", {
  channel: ChannelContext;
  previousChannel?: ChannelContext;
  reason?: string;
}>
  | RuntimeEventBase<"voice.segment.started", {
  adapter: string;
  channelSegmentId: string;
  connectionId: string;
  provider?: string;
}>
  | RuntimeEventBase<"voice.segment.ended", {
  channelSegmentId: string;
  connectionId?: string;
  reason?: string;
}>
  | RuntimeEventBase<"voice.connection.failed", {
  channelSegmentId: string;
  code: string;
  connectionId?: string;
  message: string;
  retryable?: boolean;
}>
  | RuntimeEventBase<"voice.interrupted", {
  channelSegmentId: string;
  connectionId?: string;
  interruptedMessageId?: string;
  offsetMs?: number;
  reason?: string;
  recordingReferenceId?: string;
  source?: "userSpeech" | "adapter" | "provider";
}>
  | RuntimeEventBase<"voice.recording.started", {
  channelSegmentId: string;
  policy?: unknown;
  recordingReferenceId: string;
}>
  | RuntimeEventBase<"voice.recording.completed", {
  channelSegmentId: string;
  endedAt?: string;
  metadata?: unknown;
  recordingReferenceId: string;
  startedAt?: string;
  uri?: string;
}>
  | RuntimeEventBase<"voice.transcript.committed", {
  channelSegmentId: string;
  endedAtMs?: number;
  messageEventId: string;
  metadata?: unknown;
  recordingReferenceId?: string;
  speaker: "user" | "assistant";
  startedAtMs?: number;
  transcriptionSource?: string;
}>
  | RuntimeEventBase<"journey.candidates.retrieved", {
  journeyIds: string[];
}>
  | RuntimeEventBase<"journey.matched", {
  candidates: {
     confidence: number;
     journeyId: string;
     reason?: string;
  }[];
}>
  | RuntimeEventBase<"journey.activated", {
  journeyId: string;
  previousJourneyId?: string;
}>
  | RuntimeEventBase<"journey.completed", {
  journeyId: string;
  reason?: string;
  stateId?: string;
}>
  | RuntimeEventBase<"journey.guard.denied", {
  code: string;
  journeyId: string;
  message?: string;
  metadata?: Record<string, unknown>;
  stateId?: string;
}>
  | RuntimeEventBase<"journey.event.emitted", {
  name: string;
  payload: unknown;
  routing: "none" | "activeJourneyOnly" | "full" | "targeted";
  target?: {
     journeyId?: string;
     stateId?: string;
  };
}>
  | RuntimeEventBase<"journey.state.entered", {
  journeyId: string;
  stateId: string;
}>
  | RuntimeEventBase<"journey.extraction.proposed", {
  fields: string[];
  journeyId: string;
  stateId: string;
}>
  | RuntimeEventBase<"journey.extraction.accepted", {
  fields: string[];
  journeyId: string;
  stateId: string;
}>
  | RuntimeEventBase<"action.started", {
  actionName: string;
  journeyId?: string;
  stateId?: string;
}>
  | RuntimeEventBase<"action.completed", {
  actionName: string;
  error?: string;
  journeyId?: string;
  stateId?: string;
  success: boolean;
}>
  | RuntimeEventBase<"tool.started", {
  journeyId?: string;
  stateId?: string;
  toolName: string;
}>
  | RuntimeEventBase<"tool.completed", {
  approval?: {
     approvalId: string;
     status: "requested" | "resolved";
  };
  error?: string;
  journeyId?: string;
  policyBlock?: {
     blockers: {
        code: string;
        kind?: string;
        message: string;
     }[];
     code: string;
     message: string;
  };
  result?: unknown;
  stateId?: string;
  success: boolean;
  toolName: string;
}>
  | RuntimeEventBase<"approval.requested", {
  actionAudience?: string;
  approvalId: string;
  capability?: string;
  changesWorkflow?: boolean;
  channel?: ChannelContext;
  editableFields?: string[];
  expiresAt?: string;
  exposesSensitiveData?: boolean;
  externallyVisible?: boolean;
  input: unknown;
  journeyId?: string;
  metadata?: Record<string, unknown>;
  operationAlias?: string;
  outbound?: boolean;
  providerOperation?: string;
  providerPackageId?: string;
  reason?: string;
  sideEffect?: boolean;
  stateId?: string;
  supportedResolutions: ApprovalResolutionMode[];
  toolName: string;
}>
  | RuntimeEventBase<"approval.resolved", {
  approvalId: string;
  editedInput?: unknown;
  error?: string;
  executed?: boolean;
  metadata?: Record<string, unknown>;
  policyBlock?: {
     blockers: {
        code: string;
        kind?: string;
        message: string;
     }[];
     code: string;
     message: string;
  };
  reason?: string;
  resolution: ApprovalResolutionMode;
  resolvedBy?: string;
  result?: unknown;
  toolName?: string;
}>
  | RuntimeEventBase<"knowledge.retrieved", {
  itemIds: string[];
  sourceName: string;
}>
  | RuntimeEventBase<"context.resolved", {
  channel?: ChannelContext;
  keys: string[];
}>
  | RuntimeEventBase<"policy.evaluated", {
  agentChannelPolicyKeys?: string[];
  channel?: ChannelContext;
  channelPolicyId?: string;
  configuredPolicyIds?: string[];
  enabledCapabilities?: string[];
  handoffEnabled?: boolean;
  hasAgentHandoffPolicy?: boolean;
  outboundEnabled?: boolean;
  responseConstraints?: {
     maxCharacters?: number;
     maxWords?: number;
  };
}>
  | RuntimeEventBase<"ui.prompted", {
  input: unknown;
  promptId: string;
  widgetKind: string;
}>
  | RuntimeEventBase<"ui.submitted", {
  output: unknown;
  promptId: string;
  widgetKind: string;
}>
  | RuntimeEventBase<"conversation.compaction.started", {
  fromOffset: number;
  toOffset: number;
}>
  | RuntimeEventBase<"conversation.compaction.completed", {
  fromOffset: number;
  schemaVersion: string;
  toOffset: number;
}>
  | RuntimeEventBase<"handoff.requested", {
  payload?: unknown;
  reason: string;
  summary?: string;
  target?: {
     channelId?: string;
     destination?: string;
     externalConversationId?: string;
     policyId?: string;
     providerPackageId?: string;
     queue?: string;
  };
}>
  | RuntimeEventBase<"handoff.completed", {
  channel?: ChannelContext;
  payload?: unknown;
  policyId?: string;
  status: "accepted" | "adapter-completed";
  target?: {
     channelId?: string;
     destination?: string;
     externalConversationId?: string;
     policyId?: string;
     providerPackageId?: string;
     queue?: string;
  };
}>
  | RuntimeEventBase<"handoff.resumed", {
  payload?: unknown;
  reason?: string;
}>
  | RuntimeEventBase<"schedule.due", {
  dueAt: string;
  eventName: string;
  intent?: {
     capability?: string;
     operationAlias?: string;
     providerPackageId?: string;
     reason?: string;
  };
  metadata?: Record<string, unknown>;
  payload?: unknown;
  scheduledFor?: string;
  scheduleId: string;
}>
  | RuntimeEventBase<"conversation.closed", {
  reason?: string;
}>
  | RuntimeEventBase<"error", {
  code: string;
  details?: unknown;
  message: string;
}>
  | RuntimeEventBase<"eval.completed", {
  details?: unknown;
  scenarioId?: string;
  score?: number;
  success: boolean;
}>
| RuntimeEventBase<`custom.${string}`, unknown>;
```

***

### RuntimeEventInput

```ts
type RuntimeEventInput<TType> = Omit<Extract<RuntimeEvent, {
  type: TType;
}>, "id" | "offset" | "createdAt" | "telemetry"> & {
  createdAt?: string;
  id?: string;
  telemetry?: RuntimeEvent["telemetry"];
};
```

#### Type Declaration

| Name | Type |
| ------ | ------ |
| `createdAt?` | `string` |
| `id?` | `string` |
| `telemetry?` | [`RuntimeEvent`](#runtimeevent)\[`"telemetry"`\] |

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TType` *extends* [`RuntimeEvent`](#runtimeevent)\[`"type"`\] | [`RuntimeEvent`](#runtimeevent)\[`"type"`\] |

***

### ScheduleTrigger

```ts
type ScheduleTrigger =
  | {
  at: string | Date;
  kind: "at";
}
  | {
  kind: "after";
  milliseconds: number;
}
  | {
  expression: string;
  kind: "cron";
  timezone?: string;
};
```

***

### SdkLogger

```ts
type SdkLogger = Pick<Logger, "trace" | "debug" | "info" | "warn" | "error" | "child">;
```

***

### SdkLogLevel

```ts
type SdkLogLevel = AgentLogLevel;
```

***

### SideEffectTool

```ts
type SideEffectTool = ToolDefinition<string, z.ZodType, z.ZodType, true>;
```

***

### SupportReference

```ts
type SupportReference =
  | {
  id: string;
  metadata?: unknown;
  sourceName?: string;
  title?: string;
  type: "knowledge";
}
  | {
  id: string;
  type: "toolResult";
};
```

***

### TelemetryContentMode

```ts
type TelemetryContentMode = "redacted" | "full";
```

***

### TelemetrySpanRunner

```ts
type TelemetrySpanRunner<T> = (span) => MaybePromise$2<T>;
```

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `span` | `Span` |

#### Returns

`MaybePromise$2`\<`T`\>

***

### ToolRunOptionsFor

```ts
type ToolRunOptionsFor<TTool, TContext> = TTool extends SideEffectTool ? ToolRunOptions<TTool, TContext> & {
  confirm: ConfirmationPolicy;
} : ToolRunOptions<TTool, TContext> & {
  confirm?: ConfirmationPolicy;
};
```

#### Type Parameters

| Type Parameter |
| ------ |
| `TTool` *extends* [`AnyTool`](#anytool) |
| `TContext` |

***

### VoiceConnectionStatus

```ts
type VoiceConnectionStatus = "starting" | "connected" | "ended" | "failed";
```

***

### VoiceProfileOptions

```ts
type VoiceProfileOptions = VoiceProfile;
```

***

### VoiceRuntimeEventInput

```ts
type VoiceRuntimeEventInput = Extract<RuntimeEventInput, {
  type: `voice.${string}`;
}>;
```

***

### VoiceSpeaker

```ts
type VoiceSpeaker = "user" | "assistant";
```

## Variables

### ActionAudienceSchema

```ts
const ActionAudienceSchema: z.ZodEnum<{
  customer-facing: "customer-facing";
  internal-support: "internal-support";
  mixed: "mixed";
}>;
```

***

### builtInTools

```ts
const builtInTools: {
  endConversationTool: ToolDefinition<"cognidesk.endConversation", z.ZodObject<{
     reason: z.ZodOptional<z.ZodString>;
   }, z.core.$strip>, z.ZodObject<{
     closed: z.ZodLiteral<true>;
  }, z.core.$strip>, true>;
  handoffTool: ToolDefinition<"cognidesk.handoff", z.ZodObject<{
     payload: z.ZodOptional<z.ZodUnknown>;
     reason: z.ZodString;
     summary: z.ZodOptional<z.ZodString>;
   }, z.core.$strip>, z.ZodObject<{
     handoffRequested: z.ZodLiteral<true>;
  }, z.core.$strip>, true>;
  journeyContextViewerTool: ToolDefinition<"cognidesk.viewJourneyContext", z.ZodObject<{
     fields: z.ZodOptional<z.ZodArray<z.ZodString>>;
     journeyId: z.ZodString;
   }, z.core.$strip>, z.ZodObject<{
     context: z.ZodUnknown;
     journeyId: z.ZodString;
  }, z.core.$strip>, false>;
};
```

#### Type Declaration

| Name | Type |
| ------ | ------ |
| <a id="property-endconversationtool"></a> `endConversationTool` | [`ToolDefinition`](#tooldefinition)\<`"cognidesk.endConversation"`, `z.ZodObject`\<\{ `reason`: `z.ZodOptional`\<`z.ZodString`\>; \}, `z.core.$strip`\>, `z.ZodObject`\<\{ `closed`: `z.ZodLiteral`\<`true`\>; \}, `z.core.$strip`\>, `true`\> |
| <a id="property-handofftool"></a> `handoffTool` | [`ToolDefinition`](#tooldefinition)\<`"cognidesk.handoff"`, `z.ZodObject`\<\{ `payload`: `z.ZodOptional`\<`z.ZodUnknown`\>; `reason`: `z.ZodString`; `summary`: `z.ZodOptional`\<`z.ZodString`\>; \}, `z.core.$strip`\>, `z.ZodObject`\<\{ `handoffRequested`: `z.ZodLiteral`\<`true`\>; \}, `z.core.$strip`\>, `true`\> |
| <a id="property-journeycontextviewertool"></a> `journeyContextViewerTool` | [`ToolDefinition`](#tooldefinition)\<`"cognidesk.viewJourneyContext"`, `z.ZodObject`\<\{ `fields`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`\>\>; `journeyId`: `z.ZodString`; \}, `z.core.$strip`\>, `z.ZodObject`\<\{ `context`: `z.ZodUnknown`; `journeyId`: `z.ZodString`; \}, `z.core.$strip`\>, `false`\> |

***

### builtInWidgets

```ts
const builtInWidgets: {
  choiceWidget: WidgetDefinition<"choice", z.ZodObject<{
     label: z.ZodString;
     options: z.ZodArray<z.ZodObject<{
        description: z.ZodOptional<z.ZodString>;
        id: z.ZodString;
        label: z.ZodString;
     }, z.core.$strip>>;
   }, z.core.$strip>, z.ZodObject<{
     selectedId: z.ZodString;
  }, z.core.$strip>>;
  confirmationWidget: WidgetDefinition<"confirmation", z.ZodObject<{
     cancelLabel: z.ZodOptional<z.ZodString>;
     confirmLabel: z.ZodOptional<z.ZodString>;
     message: z.ZodString;
     title: z.ZodString;
   }, z.core.$strip>, z.ZodObject<{
     confirmed: z.ZodBoolean;
  }, z.core.$strip>>;
  datePickerWidget: WidgetDefinition<"date-picker", z.ZodObject<{
     label: z.ZodString;
     max: z.ZodOptional<z.ZodString>;
     min: z.ZodOptional<z.ZodString>;
   }, z.core.$strip>, z.ZodObject<{
     value: z.ZodString;
  }, z.core.$strip>>;
  formWidget: WidgetDefinition<"form", z.ZodObject<{
     fields: z.ZodArray<z.ZodObject<{
        description: z.ZodOptional<z.ZodString>;
        label: z.ZodString;
        max: z.ZodOptional<z.ZodString>;
        min: z.ZodOptional<z.ZodString>;
        options: z.ZodOptional<z.ZodArray<z.ZodObject<{
           id: ...;
           label: ...;
        }, z.core.$strip>>>;
        path: z.ZodString;
        placeholder: z.ZodOptional<z.ZodString>;
        required: z.ZodDefault<z.ZodBoolean>;
        type: z.ZodEnum<{
           choice: "choice";
           date: "date";
           email: "email";
           number: "number";
           text: "text";
        }>;
     }, z.core.$strip>>;
     title: z.ZodString;
   }, z.core.$strip>, z.ZodObject<{
     values: z.ZodRecord<z.ZodString, z.ZodUnknown>;
  }, z.core.$strip>>;
  textInputWidget: WidgetDefinition<"text-input", z.ZodObject<{
     description: z.ZodOptional<z.ZodString>;
     label: z.ZodString;
     placeholder: z.ZodOptional<z.ZodString>;
   }, z.core.$strip>, z.ZodObject<{
     value: z.ZodString;
  }, z.core.$strip>>;
};
```

#### Type Declaration

| Name | Type |
| ------ | ------ |
| <a id="property-choicewidget"></a> `choiceWidget` | [`WidgetDefinition`](#widgetdefinition)\<`"choice"`, `z.ZodObject`\<\{ `label`: `z.ZodString`; `options`: `z.ZodArray`\<`z.ZodObject`\<\{ `description`: `z.ZodOptional`\<`z.ZodString`\>; `id`: `z.ZodString`; `label`: `z.ZodString`; \}, `z.core.$strip`\>\>; \}, `z.core.$strip`\>, `z.ZodObject`\<\{ `selectedId`: `z.ZodString`; \}, `z.core.$strip`\>\> |
| <a id="property-confirmationwidget"></a> `confirmationWidget` | [`WidgetDefinition`](#widgetdefinition)\<`"confirmation"`, `z.ZodObject`\<\{ `cancelLabel`: `z.ZodOptional`\<`z.ZodString`\>; `confirmLabel`: `z.ZodOptional`\<`z.ZodString`\>; `message`: `z.ZodString`; `title`: `z.ZodString`; \}, `z.core.$strip`\>, `z.ZodObject`\<\{ `confirmed`: `z.ZodBoolean`; \}, `z.core.$strip`\>\> |
| <a id="property-datepickerwidget"></a> `datePickerWidget` | [`WidgetDefinition`](#widgetdefinition)\<`"date-picker"`, `z.ZodObject`\<\{ `label`: `z.ZodString`; `max`: `z.ZodOptional`\<`z.ZodString`\>; `min`: `z.ZodOptional`\<`z.ZodString`\>; \}, `z.core.$strip`\>, `z.ZodObject`\<\{ `value`: `z.ZodString`; \}, `z.core.$strip`\>\> |
| <a id="property-formwidget"></a> `formWidget` | [`WidgetDefinition`](#widgetdefinition)\<`"form"`, `z.ZodObject`\<\{ `fields`: `z.ZodArray`\<`z.ZodObject`\<\{ `description`: `z.ZodOptional`\<`z.ZodString`\>; `label`: `z.ZodString`; `max`: `z.ZodOptional`\<`z.ZodString`\>; `min`: `z.ZodOptional`\<`z.ZodString`\>; `options`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodObject`\<\{ `id`: ...; `label`: ...; \}, `z.core.$strip`\>\>\>; `path`: `z.ZodString`; `placeholder`: `z.ZodOptional`\<`z.ZodString`\>; `required`: `z.ZodDefault`\<`z.ZodBoolean`\>; `type`: `z.ZodEnum`\<\{ `choice`: `"choice"`; `date`: `"date"`; `email`: `"email"`; `number`: `"number"`; `text`: `"text"`; \}\>; \}, `z.core.$strip`\>\>; `title`: `z.ZodString`; \}, `z.core.$strip`\>, `z.ZodObject`\<\{ `values`: `z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>; \}, `z.core.$strip`\>\> |
| <a id="property-textinputwidget"></a> `textInputWidget` | [`WidgetDefinition`](#widgetdefinition)\<`"text-input"`, `z.ZodObject`\<\{ `description`: `z.ZodOptional`\<`z.ZodString`\>; `label`: `z.ZodString`; `placeholder`: `z.ZodOptional`\<`z.ZodString`\>; \}, `z.core.$strip`\>, `z.ZodObject`\<\{ `value`: `z.ZodString`; \}, `z.core.$strip`\>\> |

***

### CapabilityAvailabilitySchema

```ts
const CapabilityAvailabilitySchema: z.ZodObject<{
  blockers: z.ZodDefault<z.ZodArray<z.ZodObject<{
     code: z.ZodString;
     kind: z.ZodDefault<z.ZodEnum<{
        missing-configuration: "missing-configuration";
        missing-credentials: "missing-credentials";
        missing-policy: "missing-policy";
        permission-blocked: "permission-blocked";
        provider-unsupported: "provider-unsupported";
        unknown: "unknown";
     }>>;
     message: z.ZodString;
  }, z.core.$strip>>>;
  capability: z.ZodOptional<z.ZodString>;
  enabledForAgents: z.ZodDefault<z.ZodArray<z.ZodString>>;
  enabledForChannels: z.ZodDefault<z.ZodArray<z.ZodString>>;
  enabledForJourneys: z.ZodDefault<z.ZodArray<z.ZodString>>;
  enabledForTools: z.ZodDefault<z.ZodArray<z.ZodString>>;
  metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
  providerPackageId: z.ZodOptional<z.ZodString>;
  status: z.ZodEnum<{
     blocked: "blocked";
     configured: "configured";
     enabled: "enabled";
     installed: "installed";
     registry-available: "registry-available";
  }>;
}, z.core.$strip>;
```

***

### capabilityAvailabilityStatuses

```ts
const capabilityAvailabilityStatuses: readonly ["registry-available", "installed", "configured", "enabled", "blocked"];
```

***

### CapabilityAvailabilityStatusSchema

```ts
const CapabilityAvailabilityStatusSchema: z.ZodEnum<{
  blocked: "blocked";
  configured: "configured";
  enabled: "enabled";
  installed: "installed";
  registry-available: "registry-available";
}>;
```

***

### CapabilityUseRequestSchema

```ts
const CapabilityUseRequestSchema: z.ZodObject<{
  actionAudience: z.ZodOptional<z.ZodEnum<{
     customer-facing: "customer-facing";
     internal-support: "internal-support";
     mixed: "mixed";
  }>>;
  capability: z.ZodString;
  changesWorkflow: z.ZodOptional<z.ZodBoolean>;
  channel: z.ZodString;
  channelId: z.ZodOptional<z.ZodString>;
  exposesSensitiveData: z.ZodOptional<z.ZodBoolean>;
  externallyVisible: z.ZodOptional<z.ZodBoolean>;
  outbound: z.ZodOptional<z.ZodBoolean>;
  providerPackageId: z.ZodOptional<z.ZodString>;
  requiredPolicyIds: z.ZodDefault<z.ZodArray<z.ZodString>>;
  sideEffect: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
```

***

### CategoryDataSourceDeclarationSchema

```ts
const CategoryDataSourceDeclarationSchema: z.ZodObject<{
  capability: z.ZodString;
  description: z.ZodOptional<z.ZodString>;
  exposesSensitiveData: z.ZodOptional<z.ZodBoolean>;
  id: z.ZodString;
  label: z.ZodOptional<z.ZodString>;
  metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
  operationAlias: z.ZodOptional<z.ZodString>;
  providerObjects: z.ZodDefault<z.ZodArray<z.ZodString>>;
}, z.core.$strip>;
```

***

### CategoryEventDeclarationSchema

```ts
const CategoryEventDeclarationSchema: z.ZodObject<{
  capability: z.ZodOptional<z.ZodString>;
  description: z.ZodOptional<z.ZodString>;
  direction: z.ZodEnum<{
     bidirectional: "bidirectional";
     inbound: "inbound";
     internal: "internal";
     outbound: "outbound";
  }>;
  kind: z.ZodString;
  label: z.ZodOptional<z.ZodString>;
  metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
  operationAlias: z.ZodOptional<z.ZodString>;
  providerObject: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
```

***

### categoryEventDirections

```ts
const categoryEventDirections: readonly ["inbound", "outbound", "internal", "bidirectional"];
```

***

### CategoryEventDirectionSchema

```ts
const CategoryEventDirectionSchema: z.ZodEnum<{
  bidirectional: "bidirectional";
  inbound: "inbound";
  internal: "internal";
  outbound: "outbound";
}>;
```

***

### CategoryOperationCatalogEntrySchema

```ts
const CategoryOperationCatalogEntrySchema: z.ZodObject<{
  alias: z.ZodString;
  audience: z.ZodOptional<z.ZodEnum<{
     customer-facing: "customer-facing";
     internal-support: "internal-support";
     mixed: "mixed";
  }>>;
  audiences: z.ZodOptional<z.ZodArray<z.ZodEnum<{
     customer-facing: "customer-facing";
     internal-support: "internal-support";
     mixed: "mixed";
  }>>>;
  capability: z.ZodString;
  changesWorkflow: z.ZodOptional<z.ZodBoolean>;
  description: z.ZodOptional<z.ZodString>;
  exposesSensitiveData: z.ZodOptional<z.ZodBoolean>;
  externallyVisible: z.ZodOptional<z.ZodBoolean>;
  inputSchema: z.ZodOptional<z.ZodUnknown>;
  inputSchemaName: z.ZodOptional<z.ZodString>;
  inputSchemaRef: z.ZodOptional<z.ZodString>;
  label: z.ZodOptional<z.ZodString>;
  level: z.ZodDefault<z.ZodEnum<{
     extension: "extension";
     optional: "optional";
     recommended: "recommended";
     required: "required";
  }>>;
  metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
  outputSchema: z.ZodOptional<z.ZodUnknown>;
  outputSchemaName: z.ZodOptional<z.ZodString>;
  outputSchemaRef: z.ZodOptional<z.ZodString>;
  providerObject: z.ZodOptional<z.ZodString>;
  providerObjects: z.ZodOptional<z.ZodArray<z.ZodObject<{
     description: z.ZodOptional<z.ZodString>;
     kind: z.ZodString;
     label: z.ZodOptional<z.ZodString>;
     metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
     schemaName: z.ZodOptional<z.ZodString>;
  }, z.core.$strip>>>;
  requiredPolicyIds: z.ZodOptional<z.ZodArray<z.ZodString>>;
  requiresApproval: z.ZodOptional<z.ZodBoolean>;
  requiresCredential: z.ZodOptional<z.ZodBoolean>;
  sideEffect: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
```

***

### CategoryOperationCatalogSchema

```ts
const CategoryOperationCatalogSchema: z.ZodDefault<z.ZodArray<z.ZodObject<{
  alias: z.ZodString;
  audience: z.ZodOptional<z.ZodEnum<{
     customer-facing: "customer-facing";
     internal-support: "internal-support";
     mixed: "mixed";
  }>>;
  audiences: z.ZodOptional<z.ZodArray<z.ZodEnum<{
     customer-facing: "customer-facing";
     internal-support: "internal-support";
     mixed: "mixed";
  }>>>;
  capability: z.ZodString;
  changesWorkflow: z.ZodOptional<z.ZodBoolean>;
  description: z.ZodOptional<z.ZodString>;
  exposesSensitiveData: z.ZodOptional<z.ZodBoolean>;
  externallyVisible: z.ZodOptional<z.ZodBoolean>;
  inputSchema: z.ZodOptional<z.ZodUnknown>;
  inputSchemaName: z.ZodOptional<z.ZodString>;
  inputSchemaRef: z.ZodOptional<z.ZodString>;
  label: z.ZodOptional<z.ZodString>;
  level: z.ZodDefault<z.ZodEnum<{
     extension: "extension";
     optional: "optional";
     recommended: "recommended";
     required: "required";
  }>>;
  metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
  outputSchema: z.ZodOptional<z.ZodUnknown>;
  outputSchemaName: z.ZodOptional<z.ZodString>;
  outputSchemaRef: z.ZodOptional<z.ZodString>;
  providerObject: z.ZodOptional<z.ZodString>;
  providerObjects: z.ZodOptional<z.ZodArray<z.ZodObject<{
     description: z.ZodOptional<z.ZodString>;
     kind: z.ZodString;
     label: z.ZodOptional<z.ZodString>;
     metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
     schemaName: z.ZodOptional<z.ZodString>;
  }, z.core.$strip>>>;
  requiredPolicyIds: z.ZodOptional<z.ZodArray<z.ZodString>>;
  requiresApproval: z.ZodOptional<z.ZodBoolean>;
  requiresCredential: z.ZodOptional<z.ZodBoolean>;
  sideEffect: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>>>;
```

***

### CategoryOperationDeclarationSchema

```ts
const CategoryOperationDeclarationSchema: z.ZodObject<{
  alias: z.ZodString;
  audience: z.ZodOptional<z.ZodEnum<{
     customer-facing: "customer-facing";
     internal-support: "internal-support";
     mixed: "mixed";
  }>>;
  audiences: z.ZodOptional<z.ZodArray<z.ZodEnum<{
     customer-facing: "customer-facing";
     internal-support: "internal-support";
     mixed: "mixed";
  }>>>;
  capability: z.ZodString;
  changesWorkflow: z.ZodOptional<z.ZodBoolean>;
  description: z.ZodOptional<z.ZodString>;
  exposesSensitiveData: z.ZodOptional<z.ZodBoolean>;
  externallyVisible: z.ZodOptional<z.ZodBoolean>;
  inputSchema: z.ZodOptional<z.ZodUnknown>;
  inputSchemaName: z.ZodOptional<z.ZodString>;
  inputSchemaRef: z.ZodOptional<z.ZodString>;
  label: z.ZodOptional<z.ZodString>;
  level: z.ZodDefault<z.ZodEnum<{
     extension: "extension";
     optional: "optional";
     recommended: "recommended";
     required: "required";
  }>>;
  metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
  outputSchema: z.ZodOptional<z.ZodUnknown>;
  outputSchemaName: z.ZodOptional<z.ZodString>;
  outputSchemaRef: z.ZodOptional<z.ZodString>;
  providerObject: z.ZodOptional<z.ZodString>;
  providerObjects: z.ZodOptional<z.ZodArray<z.ZodObject<{
     description: z.ZodOptional<z.ZodString>;
     kind: z.ZodString;
     label: z.ZodOptional<z.ZodString>;
     metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
     schemaName: z.ZodOptional<z.ZodString>;
  }, z.core.$strip>>>;
  requiredPolicyIds: z.ZodOptional<z.ZodArray<z.ZodString>>;
  requiresApproval: z.ZodOptional<z.ZodBoolean>;
  requiresCredential: z.ZodOptional<z.ZodBoolean>;
  sideEffect: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
```

***

### categoryOperationLevels

```ts
const categoryOperationLevels: readonly ["required", "recommended", "optional", "extension"];
```

***

### CategoryOperationLevelSchema

```ts
const CategoryOperationLevelSchema: z.ZodEnum<{
  extension: "extension";
  optional: "optional";
  recommended: "recommended";
  required: "required";
}>;
```

***

### CategoryOutputDeclarationSchema

```ts
const CategoryOutputDeclarationSchema: z.ZodObject<{
  capability: z.ZodString;
  changesWorkflow: z.ZodOptional<z.ZodBoolean>;
  description: z.ZodOptional<z.ZodString>;
  exposesSensitiveData: z.ZodOptional<z.ZodBoolean>;
  externallyVisible: z.ZodOptional<z.ZodBoolean>;
  intent: z.ZodString;
  label: z.ZodOptional<z.ZodString>;
  metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
  operationAlias: z.ZodOptional<z.ZodString>;
  providerObject: z.ZodOptional<z.ZodString>;
  requiresApproval: z.ZodOptional<z.ZodBoolean>;
  sideEffect: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
```

***

### channelAudiences

```ts
const channelAudiences: readonly ["customer-facing", "internal-support", "mixed"];
```

***

### ChannelAudienceSchema

```ts
const ChannelAudienceSchema: z.ZodEnum<{
  customer-facing: "customer-facing";
  internal-support: "internal-support";
  mixed: "mixed";
}>;
```

***

### ChannelBehaviorPolicySchema

```ts
const ChannelBehaviorPolicySchema: z.ZodObject<{
  allowMarkdown: z.ZodOptional<z.ZodBoolean>;
  allowWidgets: z.ZodOptional<z.ZodBoolean>;
  approval: z.ZodOptional<z.ZodUnknown>;
  draftFirst: z.ZodOptional<z.ZodBoolean>;
  handoff: z.ZodOptional<z.ZodUnknown>;
  maxCharacters: z.ZodOptional<z.ZodNumber>;
  maxWords: z.ZodOptional<z.ZodNumber>;
  media: z.ZodOptional<z.ZodUnknown>;
  sensitiveData: z.ZodOptional<z.ZodUnknown>;
  tone: z.ZodOptional<z.ZodString>;
}, z.core.$loose>;
```

***

### ChannelCapabilityDeclarationSchema

```ts
const ChannelCapabilityDeclarationSchema: z.ZodObject<{
  audiences: z.ZodOptional<z.ZodArray<z.ZodEnum<{
     customer-facing: "customer-facing";
     internal-support: "internal-support";
     mixed: "mixed";
  }>>>;
  capability: z.ZodString;
  changesWorkflow: z.ZodOptional<z.ZodBoolean>;
  description: z.ZodOptional<z.ZodString>;
  exposesSensitiveData: z.ZodOptional<z.ZodBoolean>;
  extension: z.ZodOptional<z.ZodBoolean>;
  label: z.ZodOptional<z.ZodString>;
  metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
  providerObjects: z.ZodOptional<z.ZodArray<z.ZodObject<{
     description: z.ZodOptional<z.ZodString>;
     kind: z.ZodString;
     label: z.ZodOptional<z.ZodString>;
     metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
     schemaName: z.ZodOptional<z.ZodString>;
  }, z.core.$strip>>>;
  requiresCredential: z.ZodOptional<z.ZodBoolean>;
  sideEffect: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
```

***

### ChannelCapabilityFlagsSchema

```ts
const ChannelCapabilityFlagsSchema: z.ZodDefault<z.ZodObject<{
  async: z.ZodDefault<z.ZodBoolean>;
  attachments: z.ZodDefault<z.ZodBoolean>;
  audioInput: z.ZodDefault<z.ZodBoolean>;
  audioOutput: z.ZodDefault<z.ZodBoolean>;
  buttons: z.ZodDefault<z.ZodBoolean>;
  deliveryReceipts: z.ZodDefault<z.ZodBoolean>;
  files: z.ZodDefault<z.ZodBoolean>;
  html: z.ZodDefault<z.ZodBoolean>;
  images: z.ZodDefault<z.ZodBoolean>;
  markdown: z.ZodDefault<z.ZodBoolean>;
  privateReplies: z.ZodDefault<z.ZodBoolean>;
  publicReplies: z.ZodDefault<z.ZodBoolean>;
  quickReplies: z.ZodDefault<z.ZodBoolean>;
  readReceipts: z.ZodDefault<z.ZodBoolean>;
  realtime: z.ZodDefault<z.ZodBoolean>;
  richText: z.ZodDefault<z.ZodBoolean>;
  supportsHumanTransfer: z.ZodDefault<z.ZodBoolean>;
  templates: z.ZodDefault<z.ZodBoolean>;
  threaded: z.ZodDefault<z.ZodBoolean>;
  typingIndicator: z.ZodDefault<z.ZodBoolean>;
  voice: z.ZodDefault<z.ZodBoolean>;
  widgets: z.ZodDefault<z.ZodBoolean>;
}, z.core.$strip>>;
```

***

### ChannelCapabilitySchema

```ts
const ChannelCapabilitySchema: z.ZodString;
```

***

### ChannelContextSchema

```ts
const ChannelContextSchema: z.ZodObject<{
  capabilities: z.ZodDefault<z.ZodDefault<z.ZodObject<{
     async: z.ZodDefault<z.ZodBoolean>;
     attachments: z.ZodDefault<z.ZodBoolean>;
     audioInput: z.ZodDefault<z.ZodBoolean>;
     audioOutput: z.ZodDefault<z.ZodBoolean>;
     buttons: z.ZodDefault<z.ZodBoolean>;
     deliveryReceipts: z.ZodDefault<z.ZodBoolean>;
     files: z.ZodDefault<z.ZodBoolean>;
     html: z.ZodDefault<z.ZodBoolean>;
     images: z.ZodDefault<z.ZodBoolean>;
     markdown: z.ZodDefault<z.ZodBoolean>;
     privateReplies: z.ZodDefault<z.ZodBoolean>;
     publicReplies: z.ZodDefault<z.ZodBoolean>;
     quickReplies: z.ZodDefault<z.ZodBoolean>;
     readReceipts: z.ZodDefault<z.ZodBoolean>;
     realtime: z.ZodDefault<z.ZodBoolean>;
     richText: z.ZodDefault<z.ZodBoolean>;
     supportsHumanTransfer: z.ZodDefault<z.ZodBoolean>;
     templates: z.ZodDefault<z.ZodBoolean>;
     threaded: z.ZodDefault<z.ZodBoolean>;
     typingIndicator: z.ZodDefault<z.ZodBoolean>;
     voice: z.ZodDefault<z.ZodBoolean>;
     widgets: z.ZodDefault<z.ZodBoolean>;
  }, z.core.$strip>>>;
  channelId: z.ZodString;
  externalConversationId: z.ZodOptional<z.ZodString>;
  externalMessageId: z.ZodOptional<z.ZodString>;
  externalThreadId: z.ZodOptional<z.ZodString>;
  externalUserId: z.ZodOptional<z.ZodString>;
  kind: z.ZodString;
  locale: z.ZodOptional<z.ZodString>;
  metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
  provider: z.ZodOptional<z.ZodString>;
  timezone: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
```

***

### ChannelEventActorSchema

```ts
const ChannelEventActorSchema: z.ZodObject<{
  displayName: z.ZodOptional<z.ZodString>;
  id: z.ZodOptional<z.ZodString>;
  metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
  type: z.ZodEnum<{
     agent: "agent";
     application: "application";
     customer: "customer";
     operator: "operator";
     provider: "provider";
     scheduler: "scheduler";
     system: "system";
  }>;
}, z.core.$strip>;
```

***

### channelEventActorTypes

```ts
const channelEventActorTypes: readonly ["customer", "agent", "operator", "provider", "system", "scheduler", "application"];
```

***

### ChannelEventActorTypeSchema

```ts
const ChannelEventActorTypeSchema: z.ZodEnum<{
  agent: "agent";
  application: "application";
  customer: "customer";
  operator: "operator";
  provider: "provider";
  scheduler: "scheduler";
  system: "system";
}>;
```

***

### channelEventBindingOutcomes

```ts
const channelEventBindingOutcomes: readonly ["start-new", "resume-existing", "link-and-start-new", "ignore", "defer", "handoff-review", "blocked"];
```

***

### ChannelEventBindingOutcomeSchema

```ts
const ChannelEventBindingOutcomeSchema: z.ZodEnum<{
  blocked: "blocked";
  defer: "defer";
  handoff-review: "handoff-review";
  ignore: "ignore";
  link-and-start-new: "link-and-start-new";
  resume-existing: "resume-existing";
  start-new: "start-new";
}>;
```

***

### channelEventBindingStatuses

```ts
const channelEventBindingStatuses: readonly ["bound", "created", "unbound", "not-required", "blocked"];
```

***

### ChannelEventBindingStatusSchema

```ts
const ChannelEventBindingStatusSchema: z.ZodEnum<{
  blocked: "blocked";
  bound: "bound";
  created: "created";
  not-required: "not-required";
  unbound: "unbound";
}>;
```

***

### channelEventDirections

```ts
const channelEventDirections: readonly ["inbound", "outbound", "internal"];
```

***

### ChannelEventDirectionSchema

```ts
const ChannelEventDirectionSchema: z.ZodEnum<{
  inbound: "inbound";
  internal: "internal";
  outbound: "outbound";
}>;
```

***

### ChannelEventEnvelopeInputSchema

```ts
const ChannelEventEnvelopeInputSchema: z.ZodObject<{
  actor: z.ZodOptional<z.ZodObject<{
     displayName: z.ZodOptional<z.ZodString>;
     id: z.ZodOptional<z.ZodString>;
     metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
     type: z.ZodEnum<{
        agent: "agent";
        application: "application";
        customer: "customer";
        operator: "operator";
        provider: "provider";
        scheduler: "scheduler";
        system: "system";
     }>;
  }, z.core.$strip>>;
  channel: z.ZodUnion<readonly [z.ZodString, z.ZodObject<{
     capabilities: z.ZodDefault<z.ZodDefault<z.ZodObject<{
        async: ...;
        attachments: ...;
        audioInput: ...;
        audioOutput: ...;
        buttons: ...;
        deliveryReceipts: ...;
        files: ...;
        html: ...;
        images: ...;
        markdown: ...;
        privateReplies: ...;
        publicReplies: ...;
        quickReplies: ...;
        readReceipts: ...;
        realtime: ...;
        richText: ...;
        supportsHumanTransfer: ...;
        templates: ...;
        threaded: ...;
        typingIndicator: ...;
        voice: ...;
        widgets: ...;
     }, z.core.$strip>>>;
     channelId: z.ZodString;
     externalConversationId: z.ZodOptional<z.ZodString>;
     externalMessageId: z.ZodOptional<z.ZodString>;
     externalThreadId: z.ZodOptional<z.ZodString>;
     externalUserId: z.ZodOptional<z.ZodString>;
     kind: z.ZodString;
     locale: z.ZodOptional<z.ZodString>;
     metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
     provider: z.ZodOptional<z.ZodString>;
     timezone: z.ZodOptional<z.ZodString>;
  }, z.core.$strip>]>;
  direction: z.ZodDefault<z.ZodEnum<{
     inbound: "inbound";
     internal: "internal";
     outbound: "outbound";
  }>>;
  id: z.ZodOptional<z.ZodString>;
  identity: z.ZodOptional<z.ZodObject<{
     dedupeKey: z.ZodOptional<z.ZodString>;
     idempotencyKey: z.ZodOptional<z.ZodString>;
     key: z.ZodOptional<z.ZodString>;
     metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
     sequence: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
     streamId: z.ZodOptional<z.ZodString>;
  }, z.core.$strip>>;
  intent: z.ZodOptional<z.ZodString>;
  kind: z.ZodOptional<z.ZodString>;
  metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
  nature: z.ZodOptional<z.ZodString>;
  occurredAt: z.ZodOptional<z.ZodString>;
  payload: z.ZodOptional<z.ZodUnknown>;
  source: z.ZodOptional<z.ZodObject<{
     deliveryId: z.ZodOptional<z.ZodString>;
     eventId: z.ZodOptional<z.ZodString>;
     externalObjectIds: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
     metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
     provider: z.ZodOptional<z.ZodString>;
     providerPackageId: z.ZodOptional<z.ZodString>;
     raw: z.ZodOptional<z.ZodUnknown>;
     receivedAt: z.ZodOptional<z.ZodString>;
     sourceId: z.ZodOptional<z.ZodString>;
     sourceType: z.ZodOptional<z.ZodEnum<{
        application: "application";
        operator-surface: "operator-surface";
        provider-adapter: "provider-adapter";
        schedule-adapter: "schedule-adapter";
     }>>;
     streamId: z.ZodOptional<z.ZodString>;
     verified: z.ZodOptional<z.ZodBoolean>;
  }, z.core.$strip>>;
}, z.core.$loose>;
```

***

### channelEventHandlingDispositionKinds

```ts
const channelEventHandlingDispositionKinds: readonly ["no-op", "record-only", "deterministic-journey-event", "model-turn", "output-resolution", "provider-operation", "handoff-review"];
```

***

### ChannelEventHandlingDispositionKindSchema

```ts
const ChannelEventHandlingDispositionKindSchema: z.ZodEnum<{
  deterministic-journey-event: "deterministic-journey-event";
  handoff-review: "handoff-review";
  model-turn: "model-turn";
  no-op: "no-op";
  output-resolution: "output-resolution";
  provider-operation: "provider-operation";
  record-only: "record-only";
}>;
```

***

### ChannelEventIdentitySchema

```ts
const ChannelEventIdentitySchema: z.ZodObject<{
  dedupeKey: z.ZodOptional<z.ZodString>;
  idempotencyKey: z.ZodOptional<z.ZodString>;
  key: z.ZodOptional<z.ZodString>;
  metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
  sequence: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
  streamId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
```

***

### channelEventIntakeStatuses

```ts
const channelEventIntakeStatuses: readonly ["accepted", "ignored", "deferred", "handoff-review", "blocked"];
```

***

### ChannelEventIntakeStatusSchema

```ts
const ChannelEventIntakeStatusSchema: z.ZodEnum<{
  accepted: "accepted";
  blocked: "blocked";
  deferred: "deferred";
  handoff-review: "handoff-review";
  ignored: "ignored";
}>;
```

***

### ChannelEventIntentSchema

```ts
const ChannelEventIntentSchema: z.ZodString;
```

***

### ChannelEventNatureSchema

```ts
const ChannelEventNatureSchema: z.ZodString;
```

***

### ChannelEventSourceEvidenceSchema

```ts
const ChannelEventSourceEvidenceSchema: z.ZodObject<{
  deliveryId: z.ZodOptional<z.ZodString>;
  eventId: z.ZodOptional<z.ZodString>;
  externalObjectIds: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
  metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
  provider: z.ZodOptional<z.ZodString>;
  providerPackageId: z.ZodOptional<z.ZodString>;
  raw: z.ZodOptional<z.ZodUnknown>;
  receivedAt: z.ZodOptional<z.ZodString>;
  sourceId: z.ZodOptional<z.ZodString>;
  sourceType: z.ZodOptional<z.ZodEnum<{
     application: "application";
     operator-surface: "operator-surface";
     provider-adapter: "provider-adapter";
     schedule-adapter: "schedule-adapter";
  }>>;
  streamId: z.ZodOptional<z.ZodString>;
  verified: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
```

***

### channelEventSourceTypes

```ts
const channelEventSourceTypes: readonly ["provider-adapter", "application", "schedule-adapter", "operator-surface"];
```

***

### ChannelEventSourceTypeSchema

```ts
const ChannelEventSourceTypeSchema: z.ZodEnum<{
  application: "application";
  operator-surface: "operator-surface";
  provider-adapter: "provider-adapter";
  schedule-adapter: "schedule-adapter";
}>;
```

***

### ChannelFlowActivationSchema

```ts
const ChannelFlowActivationSchema: z.ZodObject<{
  enabled: z.ZodDefault<z.ZodBoolean>;
  journeyId: z.ZodString;
  metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
  policyIds: z.ZodDefault<z.ZodArray<z.ZodString>>;
  providerPackageIds: z.ZodDefault<z.ZodArray<z.ZodString>>;
  reason: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
```

***

### ChannelHandoffPolicySchema

```ts
const ChannelHandoffPolicySchema: z.ZodObject<{
  destinations: z.ZodDefault<z.ZodArray<z.ZodString>>;
  enabled: z.ZodDefault<z.ZodBoolean>;
  metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
  policyIds: z.ZodDefault<z.ZodArray<z.ZodString>>;
  providerPackageIds: z.ZodDefault<z.ZodArray<z.ZodString>>;
  sdkControlled: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
```

***

### ChannelOutboundPolicySchema

```ts
const ChannelOutboundPolicySchema: z.ZodObject<{
  enabled: z.ZodDefault<z.ZodBoolean>;
  metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
  policyIds: z.ZodDefault<z.ZodArray<z.ZodString>>;
  providerPackageIds: z.ZodDefault<z.ZodArray<z.ZodString>>;
  requiresProviderOutboundSupport: z.ZodDefault<z.ZodBoolean>;
}, z.core.$strip>;
```

***

### channelOutputDeliveryModes

```ts
const channelOutputDeliveryModes: readonly ["send", "draft", "provider-operation", "approval", "artifact", "notify", "handoff-review", "none"];
```

***

### ChannelOutputDeliveryModeSchema

```ts
const ChannelOutputDeliveryModeSchema: z.ZodEnum<{
  approval: "approval";
  artifact: "artifact";
  draft: "draft";
  handoff-review: "handoff-review";
  none: "none";
  notify: "notify";
  provider-operation: "provider-operation";
  send: "send";
}>;
```

***

### ChannelOutputIntentInputSchema

```ts
const ChannelOutputIntentInputSchema: z.ZodObject<{
  actionAudience: z.ZodOptional<z.ZodEnum<{
     customer-facing: "customer-facing";
     internal-support: "internal-support";
     mixed: "mixed";
  }>>;
  attachments: z.ZodOptional<z.ZodArray<z.ZodUnknown>>;
  blockers: z.ZodOptional<z.ZodArray<z.ZodObject<{
     code: z.ZodString;
     kind: z.ZodOptional<z.ZodString>;
     message: z.ZodString;
  }, z.core.$strip>>>;
  body: z.ZodOptional<z.ZodString>;
  capability: z.ZodOptional<z.ZodString>;
  changesWorkflow: z.ZodOptional<z.ZodBoolean>;
  channel: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodObject<{
     capabilities: z.ZodDefault<z.ZodDefault<z.ZodObject<..., ...>>>;
     channelId: z.ZodString;
     externalConversationId: z.ZodOptional<z.ZodString>;
     externalMessageId: z.ZodOptional<z.ZodString>;
     externalThreadId: z.ZodOptional<z.ZodString>;
     externalUserId: z.ZodOptional<z.ZodString>;
     kind: z.ZodString;
     locale: z.ZodOptional<z.ZodString>;
     metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
     provider: z.ZodOptional<z.ZodString>;
     timezone: z.ZodOptional<z.ZodString>;
  }, z.core.$strip>]>>;
  deliveryMode: z.ZodOptional<z.ZodEnum<{
     approval: "approval";
     artifact: "artifact";
     draft: "draft";
     handoff-review: "handoff-review";
     none: "none";
     notify: "notify";
     provider-operation: "provider-operation";
     send: "send";
  }>>;
  exposesSensitiveData: z.ZodOptional<z.ZodBoolean>;
  externallyVisible: z.ZodOptional<z.ZodBoolean>;
  id: z.ZodOptional<z.ZodString>;
  kind: z.ZodDefault<z.ZodString>;
  metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
  operationAlias: z.ZodOptional<z.ZodString>;
  outbound: z.ZodOptional<z.ZodBoolean>;
  payload: z.ZodOptional<z.ZodUnknown>;
  policyId: z.ZodOptional<z.ZodString>;
  policyIds: z.ZodOptional<z.ZodArray<z.ZodString>>;
  producer: z.ZodOptional<z.ZodObject<{
     id: z.ZodOptional<z.ZodString>;
     metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
     name: z.ZodOptional<z.ZodString>;
     type: z.ZodEnum<{
        agent: "agent";
        application: "application";
        journey: "journey";
        operator: "operator";
        policy: "policy";
        provider-adapter: "provider-adapter";
        schedule: "schedule";
        tool: "tool";
     }>;
  }, z.core.$strip>>;
  providerOperation: z.ZodOptional<z.ZodString>;
  providerPackageId: z.ZodOptional<z.ZodString>;
  reason: z.ZodOptional<z.ZodString>;
  reasonCode: z.ZodOptional<z.ZodString>;
  reasonLabel: z.ZodOptional<z.ZodString>;
  requiredPolicyIds: z.ZodOptional<z.ZodArray<z.ZodString>>;
  sideEffect: z.ZodOptional<z.ZodBoolean>;
  source: z.ZodOptional<z.ZodObject<{
     deliveryId: z.ZodOptional<z.ZodString>;
     eventId: z.ZodOptional<z.ZodString>;
     externalObjectIds: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
     metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
     provider: z.ZodOptional<z.ZodString>;
     providerPackageId: z.ZodOptional<z.ZodString>;
     raw: z.ZodOptional<z.ZodUnknown>;
     receivedAt: z.ZodOptional<z.ZodString>;
     sourceId: z.ZodOptional<z.ZodString>;
     sourceType: z.ZodOptional<z.ZodEnum<{
        application: "application";
        operator-surface: "operator-surface";
        provider-adapter: "provider-adapter";
        schedule-adapter: "schedule-adapter";
     }>>;
     streamId: z.ZodOptional<z.ZodString>;
     verified: z.ZodOptional<z.ZodBoolean>;
  }, z.core.$strip>>;
  subject: z.ZodOptional<z.ZodString>;
  text: z.ZodOptional<z.ZodString>;
}, z.core.$loose>;
```

***

### ChannelOutputIntentKindSchema

```ts
const ChannelOutputIntentKindSchema: z.ZodString;
```

***

### ChannelOutputIntentProducerSchema

```ts
const ChannelOutputIntentProducerSchema: z.ZodObject<{
  id: z.ZodOptional<z.ZodString>;
  metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
  name: z.ZodOptional<z.ZodString>;
  type: z.ZodEnum<{
     agent: "agent";
     application: "application";
     journey: "journey";
     operator: "operator";
     policy: "policy";
     provider-adapter: "provider-adapter";
     schedule: "schedule";
     tool: "tool";
  }>;
}, z.core.$strip>;
```

***

### ChannelOutputPolicyReasonSchema

```ts
const ChannelOutputPolicyReasonSchema: z.ZodObject<{
  blockers: z.ZodOptional<z.ZodArray<z.ZodObject<{
     code: z.ZodString;
     kind: z.ZodOptional<z.ZodString>;
     message: z.ZodString;
  }, z.core.$strip>>>;
  metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
  policyId: z.ZodOptional<z.ZodString>;
  policyIds: z.ZodOptional<z.ZodArray<z.ZodString>>;
  reason: z.ZodOptional<z.ZodString>;
  reasonCode: z.ZodOptional<z.ZodString>;
  reasonLabel: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
```

***

### channelOutputProducerTypes

```ts
const channelOutputProducerTypes: readonly ["agent", "journey", "tool", "operator", "policy", "schedule", "application", "provider-adapter"];
```

***

### ChannelOutputProducerTypeSchema

```ts
const ChannelOutputProducerTypeSchema: z.ZodEnum<{
  agent: "agent";
  application: "application";
  journey: "journey";
  operator: "operator";
  policy: "policy";
  provider-adapter: "provider-adapter";
  schedule: "schedule";
  tool: "tool";
}>;
```

***

### ChannelOutputResolutionDecisionInputSchema

```ts
const ChannelOutputResolutionDecisionInputSchema: z.ZodObject<{
  actionAudience: z.ZodOptional<z.ZodEnum<{
     customer-facing: "customer-facing";
     internal-support: "internal-support";
     mixed: "mixed";
  }>>;
  blockers: z.ZodOptional<z.ZodArray<z.ZodObject<{
     code: z.ZodString;
     kind: z.ZodOptional<z.ZodString>;
     message: z.ZodString;
  }, z.core.$strip>>>;
  capability: z.ZodOptional<z.ZodString>;
  deliveryMode: z.ZodOptional<z.ZodEnum<{
     approval: "approval";
     artifact: "artifact";
     draft: "draft";
     handoff-review: "handoff-review";
     none: "none";
     notify: "notify";
     provider-operation: "provider-operation";
     send: "send";
  }>>;
  editableFields: z.ZodOptional<z.ZodArray<z.ZodString>>;
  expiresAt: z.ZodOptional<z.ZodString>;
  metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
  operationAlias: z.ZodOptional<z.ZodString>;
  outcome: z.ZodEnum<{
     approval-required: "approval-required";
     artifact: "artifact";
     block: "block";
     defer: "defer";
     draft: "draft";
     drop: "drop";
     handoff-review: "handoff-review";
     no-op: "no-op";
     notify: "notify";
     provider-operation: "provider-operation";
     send: "send";
  }>;
  payload: z.ZodOptional<z.ZodUnknown>;
  policyId: z.ZodOptional<z.ZodString>;
  policyIds: z.ZodOptional<z.ZodArray<z.ZodString>>;
  providerOperation: z.ZodOptional<z.ZodString>;
  providerPackageId: z.ZodOptional<z.ZodString>;
  reason: z.ZodOptional<z.ZodString>;
  reasonCode: z.ZodOptional<z.ZodString>;
  reasonLabel: z.ZodOptional<z.ZodString>;
  status: z.ZodOptional<z.ZodEnum<{
     blocked: "blocked";
     deferred: "deferred";
     no-op: "no-op";
     pending: "pending";
     resolved: "resolved";
  }>>;
  supportedApprovalResolutions: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.core.$loose>;
```

***

### channelOutputResolutionOutcomes

```ts
const channelOutputResolutionOutcomes: readonly ["send", "draft", "approval-required", "provider-operation", "artifact", "notify", "handoff-review", "defer", "block", "drop", "no-op"];
```

***

### ChannelOutputResolutionOutcomeSchema

```ts
const ChannelOutputResolutionOutcomeSchema: z.ZodEnum<{
  approval-required: "approval-required";
  artifact: "artifact";
  block: "block";
  defer: "defer";
  draft: "draft";
  drop: "drop";
  handoff-review: "handoff-review";
  no-op: "no-op";
  notify: "notify";
  provider-operation: "provider-operation";
  send: "send";
}>;
```

***

### channelOutputResolutionStatuses

```ts
const channelOutputResolutionStatuses: readonly ["resolved", "pending", "deferred", "blocked", "no-op"];
```

***

### ChannelOutputResolutionStatusSchema

```ts
const ChannelOutputResolutionStatusSchema: z.ZodEnum<{
  blocked: "blocked";
  deferred: "deferred";
  no-op: "no-op";
  pending: "pending";
  resolved: "resolved";
}>;
```

***

### ChannelPolicyConfigSchema

```ts
const ChannelPolicyConfigSchema: z.ZodObject<{
  audience: z.ZodOptional<z.ZodEnum<{
     customer-facing: "customer-facing";
     internal-support: "internal-support";
     mixed: "mixed";
  }>>;
  behavior: z.ZodOptional<z.ZodObject<{
     allowMarkdown: z.ZodOptional<z.ZodBoolean>;
     allowWidgets: z.ZodOptional<z.ZodBoolean>;
     approval: z.ZodOptional<z.ZodUnknown>;
     draftFirst: z.ZodOptional<z.ZodBoolean>;
     handoff: z.ZodOptional<z.ZodUnknown>;
     maxCharacters: z.ZodOptional<z.ZodNumber>;
     maxWords: z.ZodOptional<z.ZodNumber>;
     media: z.ZodOptional<z.ZodUnknown>;
     sensitiveData: z.ZodOptional<z.ZodUnknown>;
     tone: z.ZodOptional<z.ZodString>;
  }, z.core.$loose>>;
  channel: z.ZodString;
  channelSetIds: z.ZodDefault<z.ZodArray<z.ZodString>>;
  enabled: z.ZodDefault<z.ZodBoolean>;
  enabledCapabilities: z.ZodDefault<z.ZodArray<z.ZodString>>;
  flowActivations: z.ZodDefault<z.ZodArray<z.ZodObject<{
     enabled: z.ZodDefault<z.ZodBoolean>;
     journeyId: z.ZodString;
     metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
     policyIds: z.ZodDefault<z.ZodArray<z.ZodString>>;
     providerPackageIds: z.ZodDefault<z.ZodArray<z.ZodString>>;
     reason: z.ZodOptional<z.ZodString>;
  }, z.core.$strip>>>;
  handoff: z.ZodOptional<z.ZodObject<{
     destinations: z.ZodDefault<z.ZodArray<z.ZodString>>;
     enabled: z.ZodDefault<z.ZodBoolean>;
     metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
     policyIds: z.ZodDefault<z.ZodArray<z.ZodString>>;
     providerPackageIds: z.ZodDefault<z.ZodArray<z.ZodString>>;
     sdkControlled: z.ZodOptional<z.ZodBoolean>;
  }, z.core.$strip>>;
  id: z.ZodString;
  metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
  outbound: z.ZodOptional<z.ZodObject<{
     enabled: z.ZodDefault<z.ZodBoolean>;
     metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
     policyIds: z.ZodDefault<z.ZodArray<z.ZodString>>;
     providerPackageIds: z.ZodDefault<z.ZodArray<z.ZodString>>;
     requiresProviderOutboundSupport: z.ZodDefault<z.ZodBoolean>;
  }, z.core.$strip>>;
  policies: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
  providerPackageIds: z.ZodDefault<z.ZodArray<z.ZodString>>;
}, z.core.$strip>;
```

***

### ChannelSetConfigSchema

```ts
const ChannelSetConfigSchema: z.ZodObject<{
  channelIds: z.ZodDefault<z.ZodArray<z.ZodString>>;
  channels: z.ZodDefault<z.ZodArray<z.ZodString>>;
  conversationContinuity: z.ZodOptional<z.ZodObject<{
     crossChannel: z.ZodDefault<z.ZodBoolean>;
     mode: z.ZodDefault<z.ZodEnum<{
        link-existing: "link-existing";
        new-conversation: "new-conversation";
        sdk-decides: "sdk-decides";
     }>>;
     policy: z.ZodOptional<z.ZodString>;
  }, z.core.$strip>>;
  enabled: z.ZodDefault<z.ZodBoolean>;
  id: z.ZodString;
  label: z.ZodOptional<z.ZodString>;
  metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
}, z.core.$strip>;
```

***

### choiceWidget

```ts
const choiceWidget: WidgetDefinition<"choice", z.ZodObject<{
  label: z.ZodString;
  options: z.ZodArray<z.ZodObject<{
     description: z.ZodOptional<z.ZodString>;
     id: z.ZodString;
     label: z.ZodString;
  }, z.core.$strip>>;
}, z.core.$strip>, z.ZodObject<{
  selectedId: z.ZodString;
}, z.core.$strip>>;
```

***

### confirmationWidget

```ts
const confirmationWidget: WidgetDefinition<"confirmation", z.ZodObject<{
  cancelLabel: z.ZodOptional<z.ZodString>;
  confirmLabel: z.ZodOptional<z.ZodString>;
  message: z.ZodString;
  title: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
  confirmed: z.ZodBoolean;
}, z.core.$strip>>;
```

***

### ConversationChannelKindSchema

```ts
const ConversationChannelKindSchema: z.ZodString;
```

***

### conversationCompactionSummarySchema

```ts
const conversationCompactionSummarySchema: z.ZodObject<{
  activeCommitments: z.ZodArray<z.ZodString>;
  openQuestions: z.ZodArray<z.ZodString>;
  stableFacts: z.ZodArray<z.ZodString>;
  summary: z.ZodString;
}, z.core.$strip>;
```

***

### coreChannelCapabilities

```ts
const coreChannelCapabilities: readonly ["receive", "send", "draft", "thread", "attach", "media", "handoff", "schedule", "cleanup", "notify", "transfer", "artifact", "create-provider-object", "read-provider-object", "update-provider-object", "delete-provider-object", "search-provider-object", "link-provider-object"];
```

***

### CoreChannelCapabilitySchema

```ts
const CoreChannelCapabilitySchema: z.ZodEnum<{
  artifact: "artifact";
  attach: "attach";
  cleanup: "cleanup";
  create-provider-object: "create-provider-object";
  delete-provider-object: "delete-provider-object";
  draft: "draft";
  handoff: "handoff";
  link-provider-object: "link-provider-object";
  media: "media";
  notify: "notify";
  read-provider-object: "read-provider-object";
  receive: "receive";
  schedule: "schedule";
  search-provider-object: "search-provider-object";
  send: "send";
  thread: "thread";
  transfer: "transfer";
  update-provider-object: "update-provider-object";
}>;
```

***

### coreChannelEventActors

```ts
const coreChannelEventActors: readonly ["customer", "agent", "operator", "provider", "system", "scheduler", "application"];
```

***

### coreChannelEventDirections

```ts
const coreChannelEventDirections: readonly ["inbound", "outbound", "internal"];
```

***

### coreChannelEventIntents

```ts
const coreChannelEventIntents: readonly ["customer-message", "agent-message", "customer-voice-turn", "provider-update", "operator-resume", "outbound-contact", "channel-handoff", "scheduled-support-action", "output-resolution", "delivery-update", "handoff-review", "record-only"];
```

***

### coreChannelEventKinds

```ts
const coreChannelEventKinds: readonly ["message", "voice.session.started", "voice.turn.finalized", "provider.object.updated", "operator.resume", "outbound.contact.requested", "channel.handoff.requested", "schedule.due", "output.resolution", "delivery.updated", "custom"];
```

***

### coreChannelEventNatures

```ts
const coreChannelEventNatures: readonly ["message", "voice.session.started", "voice.turn.finalized", "provider.object.updated", "operator.resume", "outbound.contact.requested", "channel.handoff.requested", "schedule.due", "output.resolution", "delivery.updated", "custom"];
```

***

### coreChannelOutputIntentKinds

```ts
const coreChannelOutputIntentKinds: readonly ["message.reply", "message.draft", "internal.note", "voice.reply", "provider.operation", "provider.object.update", "approval.request", "artifact.create", "notification.send", "handoff.review", "custom"];
```

***

### coreConversationChannels

```ts
const coreConversationChannels: readonly ["chat", "voice", "email", "ticketing", "contactCenter", "messaging", "sms", "workplace", "social", "form", "helpCenter", "community", "ecommerce", "marketplace", "review", "video", "cobrowsing", "rcs"];
```

***

### coreProviderCategories

```ts
const coreProviderCategories: readonly ["model", "storage", "chat", "voice", "email", "ticketing", "contactCenter", "handoff", "studio", "messaging", "sms", "workplace", "social", "form", "helpCenter", "community", "ecommerce", "marketplace", "review", "video", "cobrowsing", "rcs"];
```

***

### datePickerWidget

```ts
const datePickerWidget: WidgetDefinition<"date-picker", z.ZodObject<{
  label: z.ZodString;
  max: z.ZodOptional<z.ZodString>;
  min: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
  value: z.ZodString;
}, z.core.$strip>>;
```

***

### endConversationTool

```ts
const endConversationTool: ToolDefinition<"cognidesk.endConversation", z.ZodObject<{
  reason: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
  closed: z.ZodLiteral<true>;
}, z.core.$strip>, true>;
```

***

### formWidget

```ts
const formWidget: WidgetDefinition<"form", z.ZodObject<{
  fields: z.ZodArray<z.ZodObject<{
     description: z.ZodOptional<z.ZodString>;
     label: z.ZodString;
     max: z.ZodOptional<z.ZodString>;
     min: z.ZodOptional<z.ZodString>;
     options: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        label: z.ZodString;
     }, z.core.$strip>>>;
     path: z.ZodString;
     placeholder: z.ZodOptional<z.ZodString>;
     required: z.ZodDefault<z.ZodBoolean>;
     type: z.ZodEnum<{
        choice: "choice";
        date: "date";
        email: "email";
        number: "number";
        text: "text";
     }>;
  }, z.core.$strip>>;
  title: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
  values: z.ZodRecord<z.ZodString, z.ZodUnknown>;
}, z.core.$strip>>;
```

***

### handoffTool

```ts
const handoffTool: ToolDefinition<"cognidesk.handoff", z.ZodObject<{
  payload: z.ZodOptional<z.ZodUnknown>;
  reason: z.ZodString;
  summary: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
  handoffRequested: z.ZodLiteral<true>;
}, z.core.$strip>, true>;
```

***

### IntegrationCategoryProfileSchema

```ts
const IntegrationCategoryProfileSchema: z.ZodObject<{
  capabilities: z.ZodDefault<z.ZodArray<z.ZodObject<{
     audiences: z.ZodOptional<z.ZodArray<z.ZodEnum<{
        customer-facing: "customer-facing";
        internal-support: "internal-support";
        mixed: "mixed";
     }>>>;
     capability: z.ZodString;
     changesWorkflow: z.ZodOptional<z.ZodBoolean>;
     description: z.ZodOptional<z.ZodString>;
     exposesSensitiveData: z.ZodOptional<z.ZodBoolean>;
     extension: z.ZodOptional<z.ZodBoolean>;
     label: z.ZodOptional<z.ZodString>;
     metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
     providerObjects: z.ZodOptional<z.ZodArray<z.ZodObject<{
        description: z.ZodOptional<...>;
        kind: z.ZodString;
        label: z.ZodOptional<...>;
        metadata: z.ZodOptional<...>;
        schemaName: z.ZodOptional<...>;
     }, z.core.$strip>>>;
     requiresCredential: z.ZodOptional<z.ZodBoolean>;
     sideEffect: z.ZodOptional<z.ZodBoolean>;
  }, z.core.$strip>>>;
  category: z.ZodString;
  dataSources: z.ZodDefault<z.ZodArray<z.ZodObject<{
     capability: z.ZodString;
     description: z.ZodOptional<z.ZodString>;
     exposesSensitiveData: z.ZodOptional<z.ZodBoolean>;
     id: z.ZodString;
     label: z.ZodOptional<z.ZodString>;
     metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
     operationAlias: z.ZodOptional<z.ZodString>;
     providerObjects: z.ZodDefault<z.ZodArray<z.ZodString>>;
  }, z.core.$strip>>>;
  description: z.ZodOptional<z.ZodString>;
  events: z.ZodDefault<z.ZodArray<z.ZodObject<{
     capability: z.ZodOptional<z.ZodString>;
     description: z.ZodOptional<z.ZodString>;
     direction: z.ZodEnum<{
        bidirectional: "bidirectional";
        inbound: "inbound";
        internal: "internal";
        outbound: "outbound";
     }>;
     kind: z.ZodString;
     label: z.ZodOptional<z.ZodString>;
     metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
     operationAlias: z.ZodOptional<z.ZodString>;
     providerObject: z.ZodOptional<z.ZodString>;
  }, z.core.$strip>>>;
  id: z.ZodOptional<z.ZodString>;
  label: z.ZodOptional<z.ZodString>;
  metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
  notes: z.ZodDefault<z.ZodArray<z.ZodString>>;
  operations: z.ZodDefault<z.ZodArray<z.ZodObject<{
     alias: z.ZodString;
     audience: z.ZodOptional<z.ZodEnum<{
        customer-facing: "customer-facing";
        internal-support: "internal-support";
        mixed: "mixed";
     }>>;
     audiences: z.ZodOptional<z.ZodArray<z.ZodEnum<{
        customer-facing: "customer-facing";
        internal-support: "internal-support";
        mixed: "mixed";
     }>>>;
     capability: z.ZodString;
     changesWorkflow: z.ZodOptional<z.ZodBoolean>;
     description: z.ZodOptional<z.ZodString>;
     exposesSensitiveData: z.ZodOptional<z.ZodBoolean>;
     externallyVisible: z.ZodOptional<z.ZodBoolean>;
     inputSchema: z.ZodOptional<z.ZodUnknown>;
     inputSchemaName: z.ZodOptional<z.ZodString>;
     inputSchemaRef: z.ZodOptional<z.ZodString>;
     label: z.ZodOptional<z.ZodString>;
     level: z.ZodDefault<z.ZodEnum<{
        extension: "extension";
        optional: "optional";
        recommended: "recommended";
        required: "required";
     }>>;
     metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
     outputSchema: z.ZodOptional<z.ZodUnknown>;
     outputSchemaName: z.ZodOptional<z.ZodString>;
     outputSchemaRef: z.ZodOptional<z.ZodString>;
     providerObject: z.ZodOptional<z.ZodString>;
     providerObjects: z.ZodOptional<z.ZodArray<z.ZodObject<{
        description: z.ZodOptional<...>;
        kind: z.ZodString;
        label: z.ZodOptional<...>;
        metadata: z.ZodOptional<...>;
        schemaName: z.ZodOptional<...>;
     }, z.core.$strip>>>;
     requiredPolicyIds: z.ZodOptional<z.ZodArray<z.ZodString>>;
     requiresApproval: z.ZodOptional<z.ZodBoolean>;
     requiresCredential: z.ZodOptional<z.ZodBoolean>;
     sideEffect: z.ZodOptional<z.ZodBoolean>;
  }, z.core.$strip>>>;
  outputs: z.ZodDefault<z.ZodArray<z.ZodObject<{
     capability: z.ZodString;
     changesWorkflow: z.ZodOptional<z.ZodBoolean>;
     description: z.ZodOptional<z.ZodString>;
     exposesSensitiveData: z.ZodOptional<z.ZodBoolean>;
     externallyVisible: z.ZodOptional<z.ZodBoolean>;
     intent: z.ZodString;
     label: z.ZodOptional<z.ZodString>;
     metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
     operationAlias: z.ZodOptional<z.ZodString>;
     providerObject: z.ZodOptional<z.ZodString>;
     requiresApproval: z.ZodOptional<z.ZodBoolean>;
     sideEffect: z.ZodOptional<z.ZodBoolean>;
  }, z.core.$strip>>>;
  providerObjects: z.ZodDefault<z.ZodArray<z.ZodObject<{
     description: z.ZodOptional<z.ZodString>;
     kind: z.ZodString;
     label: z.ZodOptional<z.ZodString>;
     metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
     schemaName: z.ZodOptional<z.ZodString>;
  }, z.core.$strip>>>;
}, z.core.$strip>;
```

***

### JOURNEY\_INDEX\_PROJECTION\_VERSION

```ts
const JOURNEY_INDEX_PROJECTION_VERSION: "cognidesk.journey-index.v1" = "cognidesk.journey-index.v1";
```

***

### journeyContextViewerTool

```ts
const journeyContextViewerTool: ToolDefinition<"cognidesk.viewJourneyContext", z.ZodObject<{
  fields: z.ZodOptional<z.ZodArray<z.ZodString>>;
  journeyId: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
  context: z.ZodUnknown;
  journeyId: z.ZodString;
}, z.core.$strip>, false>;
```

***

### journeyIndexEmbeddingSchema

```ts
const journeyIndexEmbeddingSchema: z.ZodObject<{
  dimensions: z.ZodNumber;
  model: z.ZodString;
  vector: z.ZodArray<z.ZodNumber>;
}, z.core.$strip>;
```

***

### journeyIndexEntrySchema

```ts
const journeyIndexEntrySchema: z.ZodObject<{
  alwaysInclude: z.ZodBoolean;
  condition: z.ZodString;
  definitionHash: z.ZodString;
  embedding: z.ZodObject<{
     dimensions: z.ZodNumber;
     model: z.ZodString;
     vector: z.ZodArray<z.ZodNumber>;
  }, z.core.$strip>;
  examples: z.ZodArray<z.ZodString>;
  journeyId: z.ZodString;
  kind: z.ZodEnum<{
     delegation: "delegation";
     stateMachine: "stateMachine";
  }>;
  priority: z.ZodNumber;
  routingText: z.ZodString;
  stickiness: z.ZodEnum<{
     high: "high";
     low: "low";
     medium: "medium";
  }>;
  tags: z.ZodArray<z.ZodString>;
}, z.core.$strip>;
```

***

### journeyIndexSchema

```ts
const journeyIndexSchema: z.ZodObject<{
  agentId: z.ZodString;
  definitionHash: z.ZodString;
  embeddingModel: z.ZodString;
  embeddingProvider: z.ZodString;
  entries: z.ZodArray<z.ZodObject<{
     alwaysInclude: z.ZodBoolean;
     condition: z.ZodString;
     definitionHash: z.ZodString;
     embedding: z.ZodObject<{
        dimensions: z.ZodNumber;
        model: z.ZodString;
        vector: z.ZodArray<z.ZodNumber>;
     }, z.core.$strip>;
     examples: z.ZodArray<z.ZodString>;
     journeyId: z.ZodString;
     kind: z.ZodEnum<{
        delegation: "delegation";
        stateMachine: "stateMachine";
     }>;
     priority: z.ZodNumber;
     routingText: z.ZodString;
     stickiness: z.ZodEnum<{
        high: "high";
        low: "low";
        medium: "medium";
     }>;
     tags: z.ZodArray<z.ZodString>;
  }, z.core.$strip>>;
  generatedAt: z.ZodString;
  projectionVersion: z.ZodLiteral<"cognidesk.journey-index.v1">;
}, z.core.$strip>;
```

***

### NormalizedChannelPayloadSchema

```ts
const NormalizedChannelPayloadSchema: z.ZodObject<{
  attachments: z.ZodOptional<z.ZodArray<z.ZodUnknown>>;
  body: z.ZodOptional<z.ZodString>;
  metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
  providerObject: z.ZodOptional<z.ZodUnknown>;
  status: z.ZodOptional<z.ZodString>;
  subject: z.ZodOptional<z.ZodString>;
  summary: z.ZodOptional<z.ZodString>;
  text: z.ZodOptional<z.ZodString>;
}, z.core.$loose>;
```

***

### providerCapabilityCoverageLevels

```ts
const providerCapabilityCoverageLevels: readonly ["partial", "standard", "full"];
```

***

### ProviderCapabilityCoverageReportSchema

```ts
const ProviderCapabilityCoverageReportSchema: z.ZodObject<{
  category: z.ZodString;
  categoryMatches: z.ZodBoolean;
  conformant: z.ZodBoolean;
  coverage: z.ZodEnum<{
     full: "full";
     partial: "partial";
     standard: "standard";
  }>;
  expectedCategory: z.ZodString;
  extensionOperations: z.ZodDefault<z.ZodArray<z.ZodString>>;
  matchedOperations: z.ZodDefault<z.ZodArray<z.ZodString>>;
  mismatchedOperations: z.ZodDefault<z.ZodArray<z.ZodObject<{
     actualCapability: z.ZodOptional<z.ZodString>;
     actualProviderObject: z.ZodOptional<z.ZodString>;
     alias: z.ZodString;
     expectedCapability: z.ZodOptional<z.ZodString>;
     expectedProviderObject: z.ZodOptional<z.ZodString>;
     reason: z.ZodEnum<{
        capability-mismatch: "capability-mismatch";
        missing: "missing";
        provider-object-mismatch: "provider-object-mismatch";
     }>;
  }, z.core.$strip>>>;
  missingOptionalOperations: z.ZodDefault<z.ZodArray<z.ZodString>>;
  missingRecommendedOperations: z.ZodDefault<z.ZodArray<z.ZodString>>;
  missingRequiredOperations: z.ZodDefault<z.ZodArray<z.ZodString>>;
  providerPackageId: z.ZodString;
}, z.core.$strip>;
```

***

### ProviderCapabilityCoverageSchema

```ts
const ProviderCapabilityCoverageSchema: z.ZodEnum<{
  full: "full";
  partial: "partial";
  standard: "standard";
}>;
```

***

### ProviderCategorySchema

```ts
const ProviderCategorySchema: z.ZodString;
```

***

### ProviderCoverageSchema

```ts
const ProviderCoverageSchema: z.ZodObject<{
  evidence: z.ZodDefault<z.ZodArray<z.ZodObject<{
     label: z.ZodString;
     url: z.ZodOptional<z.ZodString>;
  }, z.core.$strip>>>;
  notes: z.ZodDefault<z.ZodArray<z.ZodString>>;
  scope: z.ZodDefault<z.ZodEnum<{
     connector-required: "connector-required";
     full-provider-api: "full-provider-api";
     local-protocol: "local-protocol";
     provider-api-subset: "provider-api-subset";
     support-workflow-subset: "support-workflow-subset";
  }>>;
}, z.core.$strip>;
```

***

### ProviderCoverageScopeSchema

```ts
const ProviderCoverageScopeSchema: z.ZodEnum<{
  connector-required: "connector-required";
  full-provider-api: "full-provider-api";
  local-protocol: "local-protocol";
  provider-api-subset: "provider-api-subset";
  support-workflow-subset: "support-workflow-subset";
}>;
```

***

### ProviderCredentialRequirementSchema

```ts
const ProviderCredentialRequirementSchema: z.ZodObject<{
  description: z.ZodOptional<z.ZodString>;
  id: z.ZodString;
  label: z.ZodOptional<z.ZodString>;
  metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
  required: z.ZodDefault<z.ZodBoolean>;
  scopes: z.ZodDefault<z.ZodArray<z.ZodString>>;
}, z.core.$strip>;
```

***

### ProviderCredentialStateSchema

```ts
const ProviderCredentialStateSchema: z.ZodEnum<{
  configured: "configured";
  expired: "expired";
  insufficient-scope: "insufficient-scope";
  missing: "missing";
  not-required: "not-required";
  permission-blocked: "permission-blocked";
  required: "required";
  unavailable: "unavailable";
}>;
```

***

### providerCredentialStatuses

```ts
const providerCredentialStatuses: readonly ["not-required", "required", "configured", "missing", "expired", "insufficient-scope", "permission-blocked", "unavailable"];
```

***

### ProviderCredentialStatusSchema

```ts
const ProviderCredentialStatusSchema: z.ZodObject<{
  expiresAt: z.ZodOptional<z.ZodString>;
  message: z.ZodOptional<z.ZodString>;
  providerPackageId: z.ZodOptional<z.ZodString>;
  requirementId: z.ZodString;
  scopes: z.ZodDefault<z.ZodArray<z.ZodString>>;
  state: z.ZodEnum<{
     configured: "configured";
     expired: "expired";
     insufficient-scope: "insufficient-scope";
     missing: "missing";
     not-required: "not-required";
     permission-blocked: "permission-blocked";
     required: "required";
     unavailable: "unavailable";
  }>;
}, z.core.$strip>;
```

***

### providerDirections

```ts
const providerDirections: readonly ["receive-only", "send-only", "inbound-only", "outbound-only", "bidirectional"];
```

***

### ProviderDirectionSchema

```ts
const ProviderDirectionSchema: z.ZodEnum<{
  bidirectional: "bidirectional";
  inbound-only: "inbound-only";
  outbound-only: "outbound-only";
  receive-only: "receive-only";
  send-only: "send-only";
}>;
```

***

### ProviderManifestSchema

```ts
const ProviderManifestSchema: z.ZodObject<{
  capabilities: z.ZodArray<z.ZodObject<{
     audiences: z.ZodOptional<z.ZodArray<z.ZodEnum<{
        customer-facing: "customer-facing";
        internal-support: "internal-support";
        mixed: "mixed";
     }>>>;
     capability: z.ZodString;
     changesWorkflow: z.ZodOptional<z.ZodBoolean>;
     description: z.ZodOptional<z.ZodString>;
     exposesSensitiveData: z.ZodOptional<z.ZodBoolean>;
     extension: z.ZodOptional<z.ZodBoolean>;
     label: z.ZodOptional<z.ZodString>;
     metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
     providerObjects: z.ZodOptional<z.ZodArray<z.ZodObject<{
        description: z.ZodOptional<z.ZodString>;
        kind: z.ZodString;
        label: z.ZodOptional<z.ZodString>;
        metadata: z.ZodOptional<z.ZodRecord<..., ...>>;
        schemaName: z.ZodOptional<z.ZodString>;
     }, z.core.$strip>>>;
     requiresCredential: z.ZodOptional<z.ZodBoolean>;
     sideEffect: z.ZodOptional<z.ZodBoolean>;
  }, z.core.$strip>>;
  category: z.ZodString;
  channelAudiences: z.ZodDefault<z.ZodArray<z.ZodEnum<{
     customer-facing: "customer-facing";
     internal-support: "internal-support";
     mixed: "mixed";
  }>>>;
  coverage: z.ZodDefault<z.ZodObject<{
     evidence: z.ZodDefault<z.ZodArray<z.ZodObject<{
        label: z.ZodString;
        url: z.ZodOptional<z.ZodString>;
     }, z.core.$strip>>>;
     notes: z.ZodDefault<z.ZodArray<z.ZodString>>;
     scope: z.ZodDefault<z.ZodEnum<{
        connector-required: "connector-required";
        full-provider-api: "full-provider-api";
        local-protocol: "local-protocol";
        provider-api-subset: "provider-api-subset";
        support-workflow-subset: "support-workflow-subset";
     }>>;
  }, z.core.$strip>>;
  credentialRequirements: z.ZodDefault<z.ZodArray<z.ZodObject<{
     description: z.ZodOptional<z.ZodString>;
     id: z.ZodString;
     label: z.ZodOptional<z.ZodString>;
     metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
     required: z.ZodDefault<z.ZodBoolean>;
     scopes: z.ZodDefault<z.ZodArray<z.ZodString>>;
  }, z.core.$strip>>>;
  directions: z.ZodArray<z.ZodEnum<{
     bidirectional: "bidirectional";
     inbound-only: "inbound-only";
     outbound-only: "outbound-only";
     receive-only: "receive-only";
     send-only: "send-only";
  }>>;
  id: z.ZodString;
  limitations: z.ZodDefault<z.ZodArray<z.ZodString>>;
  maintainers: z.ZodDefault<z.ZodArray<z.ZodObject<{
     name: z.ZodString;
     type: z.ZodDefault<z.ZodEnum<{
        community: "community";
        official: "official";
        partner: "partner";
        unknown: "unknown";
     }>>;
     url: z.ZodOptional<z.ZodString>;
  }, z.core.$strip>>>;
  metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
  name: z.ZodString;
  operations: z.ZodDefault<z.ZodArray<z.ZodObject<{
     alias: z.ZodString;
     audience: z.ZodOptional<z.ZodEnum<{
        customer-facing: "customer-facing";
        internal-support: "internal-support";
        mixed: "mixed";
     }>>;
     audiences: z.ZodOptional<z.ZodArray<z.ZodEnum<{
        customer-facing: "customer-facing";
        internal-support: "internal-support";
        mixed: "mixed";
     }>>>;
     capability: z.ZodString;
     changesWorkflow: z.ZodOptional<z.ZodBoolean>;
     description: z.ZodOptional<z.ZodString>;
     exposesSensitiveData: z.ZodOptional<z.ZodBoolean>;
     extension: z.ZodDefault<z.ZodBoolean>;
     externallyVisible: z.ZodOptional<z.ZodBoolean>;
     inputSchema: z.ZodOptional<z.ZodUnknown>;
     inputSchemaName: z.ZodOptional<z.ZodString>;
     inputSchemaRef: z.ZodOptional<z.ZodString>;
     label: z.ZodOptional<z.ZodString>;
     metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
     outputSchema: z.ZodOptional<z.ZodUnknown>;
     outputSchemaName: z.ZodOptional<z.ZodString>;
     outputSchemaRef: z.ZodOptional<z.ZodString>;
     providerObject: z.ZodOptional<z.ZodString>;
     providerObjects: z.ZodOptional<z.ZodArray<z.ZodObject<{
        description: z.ZodOptional<...>;
        kind: z.ZodString;
        label: z.ZodOptional<...>;
        metadata: z.ZodOptional<...>;
        schemaName: z.ZodOptional<...>;
     }, z.core.$strip>>>;
     providerOperation: z.ZodOptional<z.ZodString>;
     requiredPolicyIds: z.ZodOptional<z.ZodArray<z.ZodString>>;
     requiresApproval: z.ZodOptional<z.ZodBoolean>;
     requiresCredential: z.ZodOptional<z.ZodBoolean>;
     sideEffect: z.ZodOptional<z.ZodBoolean>;
  }, z.core.$strip>>>;
  packageName: z.ZodString;
  privacyNotes: z.ZodDefault<z.ZodArray<z.ZodString>>;
  provider: z.ZodString;
  trustLevel: z.ZodDefault<z.ZodEnum<{
     community: "community";
     experimental: "experimental";
     official: "official";
     verified: "verified";
  }>>;
}, z.core.$strip>;
```

***

### ProviderObjectDescriptorSchema

```ts
const ProviderObjectDescriptorSchema: z.ZodObject<{
  description: z.ZodOptional<z.ZodString>;
  kind: z.ZodString;
  label: z.ZodOptional<z.ZodString>;
  metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
  schemaName: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
```

***

### ProviderOperationCoverageMismatchSchema

```ts
const ProviderOperationCoverageMismatchSchema: z.ZodObject<{
  actualCapability: z.ZodOptional<z.ZodString>;
  actualProviderObject: z.ZodOptional<z.ZodString>;
  alias: z.ZodString;
  expectedCapability: z.ZodOptional<z.ZodString>;
  expectedProviderObject: z.ZodOptional<z.ZodString>;
  reason: z.ZodEnum<{
     capability-mismatch: "capability-mismatch";
     missing: "missing";
     provider-object-mismatch: "provider-object-mismatch";
  }>;
}, z.core.$strip>;
```

***

### ProviderOperationDeclarationSchema

```ts
const ProviderOperationDeclarationSchema: z.ZodObject<{
  alias: z.ZodString;
  audience: z.ZodOptional<z.ZodEnum<{
     customer-facing: "customer-facing";
     internal-support: "internal-support";
     mixed: "mixed";
  }>>;
  audiences: z.ZodOptional<z.ZodArray<z.ZodEnum<{
     customer-facing: "customer-facing";
     internal-support: "internal-support";
     mixed: "mixed";
  }>>>;
  capability: z.ZodString;
  changesWorkflow: z.ZodOptional<z.ZodBoolean>;
  description: z.ZodOptional<z.ZodString>;
  exposesSensitiveData: z.ZodOptional<z.ZodBoolean>;
  extension: z.ZodDefault<z.ZodBoolean>;
  externallyVisible: z.ZodOptional<z.ZodBoolean>;
  inputSchema: z.ZodOptional<z.ZodUnknown>;
  inputSchemaName: z.ZodOptional<z.ZodString>;
  inputSchemaRef: z.ZodOptional<z.ZodString>;
  label: z.ZodOptional<z.ZodString>;
  metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
  outputSchema: z.ZodOptional<z.ZodUnknown>;
  outputSchemaName: z.ZodOptional<z.ZodString>;
  outputSchemaRef: z.ZodOptional<z.ZodString>;
  providerObject: z.ZodOptional<z.ZodString>;
  providerObjects: z.ZodOptional<z.ZodArray<z.ZodObject<{
     description: z.ZodOptional<z.ZodString>;
     kind: z.ZodString;
     label: z.ZodOptional<z.ZodString>;
     metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
     schemaName: z.ZodOptional<z.ZodString>;
  }, z.core.$strip>>>;
  providerOperation: z.ZodOptional<z.ZodString>;
  requiredPolicyIds: z.ZodOptional<z.ZodArray<z.ZodString>>;
  requiresApproval: z.ZodOptional<z.ZodBoolean>;
  requiresCredential: z.ZodOptional<z.ZodBoolean>;
  sideEffect: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
```

***

### ProviderReadinessSchema

```ts
const ProviderReadinessSchema: z.ZodObject<{
  blockers: z.ZodDefault<z.ZodDefault<z.ZodArray<z.ZodObject<{
     code: z.ZodString;
     kind: z.ZodDefault<z.ZodEnum<{
        missing-configuration: "missing-configuration";
        missing-credentials: "missing-credentials";
        missing-policy: "missing-policy";
        permission-blocked: "permission-blocked";
        provider-unsupported: "provider-unsupported";
        unknown: "unknown";
     }>>;
     message: z.ZodString;
  }, z.core.$strip>>>>;
  checkedAt: z.ZodOptional<z.ZodString>;
  checkSource: z.ZodOptional<z.ZodString>;
  live: z.ZodOptional<z.ZodBoolean>;
  metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
  providerPackageId: z.ZodString;
  remediationActions: z.ZodDefault<z.ZodArray<z.ZodObject<{
     id: z.ZodString;
     kind: z.ZodDefault<z.ZodEnum<{
        authorize: "authorize";
        configure: "configure";
        contact-provider: "contact-provider";
        custom: "custom";
        read-docs: "read-docs";
        verify: "verify";
     }>>;
     label: z.ZodString;
     metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
  }, z.core.$strip>>>;
  sandbox: z.ZodOptional<z.ZodBoolean>;
  status: z.ZodDefault<z.ZodEnum<{
     blocked: "blocked";
     configured: "configured";
     full-api-verified: "full-api-verified";
     live-verified: "live-verified";
     not-configured: "not-configured";
     ready: "ready";
     sandbox-verified: "sandbox-verified";
     scoped-verified: "scoped-verified";
     unknown: "unknown";
  }>>;
}, z.core.$strip>;
```

***

### ProviderRegistryQuerySchema

```ts
const ProviderRegistryQuerySchema: z.ZodObject<{
  capabilities: z.ZodOptional<z.ZodArray<z.ZodString>>;
  category: z.ZodOptional<z.ZodString>;
  channelAudiences: z.ZodOptional<z.ZodArray<z.ZodEnum<{
     customer-facing: "customer-facing";
     internal-support: "internal-support";
     mixed: "mixed";
  }>>>;
  directions: z.ZodOptional<z.ZodArray<z.ZodEnum<{
     bidirectional: "bidirectional";
     inbound-only: "inbound-only";
     outbound-only: "outbound-only";
     receive-only: "receive-only";
     send-only: "send-only";
  }>>>;
  packageNames: z.ZodOptional<z.ZodArray<z.ZodString>>;
  provider: z.ZodOptional<z.ZodString>;
  trustLevels: z.ZodOptional<z.ZodArray<z.ZodEnum<{
     community: "community";
     experimental: "experimental";
     official: "official";
     verified: "verified";
  }>>>;
}, z.core.$strip>;
```

***

### providerTrustLevels

```ts
const providerTrustLevels: readonly ["official", "verified", "community", "experimental"];
```

***

### ProviderTrustLevelSchema

```ts
const ProviderTrustLevelSchema: z.ZodEnum<{
  community: "community";
  experimental: "experimental";
  official: "official";
  verified: "verified";
}>;
```

***

### telemetryAttributes

```ts
const telemetryAttributes: {
  actionName: "cognidesk.action.name";
  agentId: "cognidesk.agent.id";
  conversationId: "cognidesk.conversation.id";
  errorType: "cognidesk.error.type";
  journeyId: "cognidesk.journey.id";
  knowledgeSourceName: "cognidesk.knowledge.source.name";
  modelName: "cognidesk.model.name";
  modelProvider: "cognidesk.model.provider";
  modelRole: "cognidesk.model.role";
  operation: "cognidesk.operation";
  promptTask: "cognidesk.prompt.task";
  stateId: "cognidesk.state.id";
  success: "cognidesk.success";
  toolName: "cognidesk.tool.name";
};
```

#### Type Declaration

| Name | Type |
| ------ | ------ |
| <a id="property-actionname"></a> `actionName` | `"cognidesk.action.name"` |
| <a id="property-agentid"></a> `agentId` | `"cognidesk.agent.id"` |
| <a id="property-conversationid"></a> `conversationId` | `"cognidesk.conversation.id"` |
| <a id="property-errortype"></a> `errorType` | `"cognidesk.error.type"` |
| <a id="property-journeyid"></a> `journeyId` | `"cognidesk.journey.id"` |
| <a id="property-knowledgesourcename"></a> `knowledgeSourceName` | `"cognidesk.knowledge.source.name"` |
| <a id="property-modelname"></a> `modelName` | `"cognidesk.model.name"` |
| <a id="property-modelprovider"></a> `modelProvider` | `"cognidesk.model.provider"` |
| <a id="property-modelrole"></a> `modelRole` | `"cognidesk.model.role"` |
| <a id="property-operation"></a> `operation` | `"cognidesk.operation"` |
| <a id="property-prompttask"></a> `promptTask` | `"cognidesk.prompt.task"` |
| <a id="property-stateid"></a> `stateId` | `"cognidesk.state.id"` |
| <a id="property-success"></a> `success` | `"cognidesk.success"` |
| <a id="property-toolname"></a> `toolName` | `"cognidesk.tool.name"` |

***

### telemetryEventNames

```ts
const telemetryEventNames: {
  knowledgeItems: "cognidesk.knowledge.items";
  modelInput: "cognidesk.model.input";
  modelOutput: "cognidesk.model.output";
  runtimeEvent: "cognidesk.runtime.event";
  toolInput: "cognidesk.tool.input";
  toolOutput: "cognidesk.tool.output";
  userMessage: "cognidesk.user.message";
};
```

#### Type Declaration

| Name | Type |
| ------ | ------ |
| <a id="property-knowledgeitems"></a> `knowledgeItems` | `"cognidesk.knowledge.items"` |
| <a id="property-modelinput"></a> `modelInput` | `"cognidesk.model.input"` |
| <a id="property-modeloutput"></a> `modelOutput` | `"cognidesk.model.output"` |
| <a id="property-runtimeevent"></a> `runtimeEvent` | `"cognidesk.runtime.event"` |
| <a id="property-toolinput"></a> `toolInput` | `"cognidesk.tool.input"` |
| <a id="property-tooloutput"></a> `toolOutput` | `"cognidesk.tool.output"` |
| <a id="property-usermessage"></a> `userMessage` | `"cognidesk.user.message"` |

***

### telemetrySpanNames

```ts
const telemetrySpanNames: {
  actionExecute: "cognidesk.action.execute";
  journeySelect: "cognidesk.journey.select";
  knowledgeRetrieve: "cognidesk.knowledge.retrieve";
  modelGenerate: "cognidesk.model.generate";
  runtimeCloseConversation: "cognidesk.runtime.close_conversation";
  runtimeCompactConversation: "cognidesk.runtime.compact_conversation";
  runtimeCreateConversation: "cognidesk.runtime.create_conversation";
  runtimeEmitCustomEvent: "cognidesk.runtime.emit_custom_event";
  runtimeEmitEvent: "cognidesk.runtime.emit_event";
  runtimeEmitGeneratedPreamble: "cognidesk.runtime.emit_generated_preamble";
  runtimeEmitIntermediateMessage: "cognidesk.runtime.emit_intermediate_message";
  runtimeEmitJourneyEvent: "cognidesk.runtime.emit_journey_event";
  runtimeGetSnapshot: "cognidesk.runtime.get_snapshot";
  runtimeHandleChannelEvent: "cognidesk.runtime.handle_channel_event";
  runtimeHandleUserMessage: "cognidesk.runtime.handle_user_message";
  runtimeInitialize: "cognidesk.runtime.initialize";
  runtimeListEvents: "cognidesk.runtime.list_events";
  runtimeReplayConversation: "cognidesk.runtime.replay_conversation";
  runtimeRequestHandoff: "cognidesk.runtime.request_handoff";
  runtimeResumeConversation: "cognidesk.runtime.resume_conversation";
  runtimeSubmitWidget: "cognidesk.runtime.submit_widget";
  toolExecute: "cognidesk.tool.execute";
};
```

#### Type Declaration

| Name | Type |
| ------ | ------ |
| <a id="property-actionexecute"></a> `actionExecute` | `"cognidesk.action.execute"` |
| <a id="property-journeyselect"></a> `journeySelect` | `"cognidesk.journey.select"` |
| <a id="property-knowledgeretrieve"></a> `knowledgeRetrieve` | `"cognidesk.knowledge.retrieve"` |
| <a id="property-modelgenerate"></a> `modelGenerate` | `"cognidesk.model.generate"` |
| <a id="property-runtimecloseconversation"></a> `runtimeCloseConversation` | `"cognidesk.runtime.close_conversation"` |
| <a id="property-runtimecompactconversation"></a> `runtimeCompactConversation` | `"cognidesk.runtime.compact_conversation"` |
| <a id="property-runtimecreateconversation"></a> `runtimeCreateConversation` | `"cognidesk.runtime.create_conversation"` |
| <a id="property-runtimeemitcustomevent"></a> `runtimeEmitCustomEvent` | `"cognidesk.runtime.emit_custom_event"` |
| <a id="property-runtimeemitevent"></a> `runtimeEmitEvent` | `"cognidesk.runtime.emit_event"` |
| <a id="property-runtimeemitgeneratedpreamble"></a> `runtimeEmitGeneratedPreamble` | `"cognidesk.runtime.emit_generated_preamble"` |
| <a id="property-runtimeemitintermediatemessage"></a> `runtimeEmitIntermediateMessage` | `"cognidesk.runtime.emit_intermediate_message"` |
| <a id="property-runtimeemitjourneyevent"></a> `runtimeEmitJourneyEvent` | `"cognidesk.runtime.emit_journey_event"` |
| <a id="property-runtimegetsnapshot"></a> `runtimeGetSnapshot` | `"cognidesk.runtime.get_snapshot"` |
| <a id="property-runtimehandlechannelevent"></a> `runtimeHandleChannelEvent` | `"cognidesk.runtime.handle_channel_event"` |
| <a id="property-runtimehandleusermessage"></a> `runtimeHandleUserMessage` | `"cognidesk.runtime.handle_user_message"` |
| <a id="property-runtimeinitialize"></a> `runtimeInitialize` | `"cognidesk.runtime.initialize"` |
| <a id="property-runtimelistevents"></a> `runtimeListEvents` | `"cognidesk.runtime.list_events"` |
| <a id="property-runtimereplayconversation"></a> `runtimeReplayConversation` | `"cognidesk.runtime.replay_conversation"` |
| <a id="property-runtimerequesthandoff"></a> `runtimeRequestHandoff` | `"cognidesk.runtime.request_handoff"` |
| <a id="property-runtimeresumeconversation"></a> `runtimeResumeConversation` | `"cognidesk.runtime.resume_conversation"` |
| <a id="property-runtimesubmitwidget"></a> `runtimeSubmitWidget` | `"cognidesk.runtime.submit_widget"` |
| <a id="property-toolexecute"></a> `toolExecute` | `"cognidesk.tool.execute"` |

***

### textInputWidget

```ts
const textInputWidget: WidgetDefinition<"text-input", z.ZodObject<{
  description: z.ZodOptional<z.ZodString>;
  label: z.ZodString;
  placeholder: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
  value: z.ZodString;
}, z.core.$strip>>;
```

## Functions

### action()

```ts
function action<TName, TInputSchema>(name, config): ActionDefinition<TName, TInputSchema>;
```

#### Type Parameters

| Type Parameter |
| ------ |
| `TName` *extends* `string` |
| `TInputSchema` *extends* `ZodType`\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `TName` |
| `config` | \{ `input`: `TInputSchema`; `requiresVisit?`: `boolean`; `retry?`: \| `false` \| \{ `maxAttempts?`: `number`; `notice?`: `string`; \}; `run`: (`args`) => `MaybePromise$1`\<`void`\>; \} |
| `config.input` | `TInputSchema` |
| `config.requiresVisit?` | `boolean` |
| `config.retry?` | \| `false` \| \{ `maxAttempts?`: `number`; `notice?`: `string`; \} |
| `config.run` | (`args`) => `MaybePromise$1`\<`void`\> |

#### Returns

[`ActionDefinition`](#actiondefinition)\<`TName`, `TInputSchema`\>

***

### activeRuntimeEventTelemetry()

```ts
function activeRuntimeEventTelemetry(options): RuntimeEventTelemetry;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | `TelemetryOptionsCarrier` |

#### Returns

[`RuntimeEventTelemetry`](#runtimeeventtelemetry)

***

### addTelemetryContentEvent()

```ts
function addTelemetryContentEvent(
   options,
   name,
   attributes): void;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | `TelemetryOptionsCarrier` |
| `name` | `string` |
| `attributes` | `Record`\<`string`, `unknown`\> |

#### Returns

`void`

***

### after()

```ts
function after(input): ScheduleTrigger;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | \{ `days?`: `number`; `hours?`: `number`; `milliseconds?`: `number`; `minutes?`: `number`; `seconds?`: `number`; \} |
| `input.days?` | `number` |
| `input.hours?` | `number` |
| `input.milliseconds?` | `number` |
| `input.minutes?` | `number` |
| `input.seconds?` | `number` |

#### Returns

[`ScheduleTrigger`](#scheduletrigger)

***

### at()

```ts
function at(atDate): ScheduleTrigger;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `atDate` | `string` \| `Date` |

#### Returns

[`ScheduleTrigger`](#scheduletrigger)

***

### buildJourneyIndex()

```ts
function buildJourneyIndex(agent, options): Promise<{
  agentId: string;
  definitionHash: string;
  embeddingModel: string;
  embeddingProvider: string;
  entries: {
     alwaysInclude: boolean;
     condition: string;
     definitionHash: string;
     embedding: {
        dimensions: number;
        model: string;
        vector: number[];
     };
     examples: string[];
     journeyId: string;
     kind: "stateMachine" | "delegation";
     priority: number;
     routingText: string;
     stickiness: "low" | "medium" | "high";
     tags: string[];
  }[];
  generatedAt: string;
  projectionVersion: "cognidesk.journey-index.v1";
}>;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `agent` | [`CompiledAgent`](#compiledagent) |
| `options` | [`BuildJourneyIndexOptions`](#buildjourneyindexoptions) |

#### Returns

`Promise`\<\{
  `agentId`: `string`;
  `definitionHash`: `string`;
  `embeddingModel`: `string`;
  `embeddingProvider`: `string`;
  `entries`: \{
     `alwaysInclude`: `boolean`;
     `condition`: `string`;
     `definitionHash`: `string`;
     `embedding`: \{
        `dimensions`: `number`;
        `model`: `string`;
        `vector`: `number`[];
     \};
     `examples`: `string`[];
     `journeyId`: `string`;
     `kind`: `"stateMachine"` \| `"delegation"`;
     `priority`: `number`;
     `routingText`: `string`;
     `stickiness`: `"low"` \| `"medium"` \| `"high"`;
     `tags`: `string`[];
  \}[];
  `generatedAt`: `string`;
  `projectionVersion`: `"cognidesk.journey-index.v1"`;
\}\>

***

### channelEventDedupeKey()

```ts
function channelEventDedupeKey(event): string;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \| [`ChannelEventEnvelopeInput`](#channeleventenvelopeinput)\<`unknown`, `unknown`\> \| [`ChannelEventEnvelope`](#channeleventenvelope)\<`unknown`, `unknown`\> |

#### Returns

`string`

***

### channelKindOf()

```ts
function channelKindOf(channel?): ConversationChannelKind;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `channel?` | [`ConversationChannelInput`](#conversationchannelinput) |

#### Returns

[`ConversationChannelKind`](#conversationchannelkind)

***

### checkProviderCapabilityCoverage()

```ts
function checkProviderCapabilityCoverage(input): boolean;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | \{ `manifest`: \{ `capabilities`: \{ `audiences?`: (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[]; `capability`: `string`; `changesWorkflow?`: `boolean`; `description?`: `string`; `exposesSensitiveData?`: `boolean`; `extension?`: `boolean`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `providerObjects?`: \{ `description?`: `string`; `kind`: `string`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `schemaName?`: `string`; \}[]; `requiresCredential?`: `boolean`; `sideEffect?`: `boolean`; \}[]; `category`: `string`; `channelAudiences?`: (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[]; `coverage?`: \{ `evidence?`: \{ `label`: `string`; `url?`: `string`; \}[]; `notes?`: `string`[]; `scope?`: \| `"support-workflow-subset"` \| `"provider-api-subset"` \| `"connector-required"` \| `"local-protocol"` \| `"full-provider-api"`; \}; `credentialRequirements?`: \{ `description?`: `string`; `id`: `string`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `required?`: `boolean`; `scopes?`: `string`[]; \}[]; `directions`: ( \| `"receive-only"` \| `"send-only"` \| `"inbound-only"` \| `"outbound-only"` \| `"bidirectional"`)[]; `id`: `string`; `limitations?`: `string`[]; `maintainers?`: \{ `name`: `string`; `type?`: `"community"` \| `"official"` \| `"unknown"` \| `"partner"`; `url?`: `string`; \}[]; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `name`: `string`; `operations?`: \{ `alias`: `string`; `audience?`: `"customer-facing"` \| `"internal-support"` \| `"mixed"`; `audiences?`: (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[]; `capability`: `string`; `changesWorkflow?`: `boolean`; `description?`: `string`; `exposesSensitiveData?`: `boolean`; `extension?`: `boolean`; `externallyVisible?`: `boolean`; `inputSchema?`: `unknown`; `inputSchemaName?`: `string`; `inputSchemaRef?`: `string`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `outputSchema?`: `unknown`; `outputSchemaName?`: `string`; `outputSchemaRef?`: `string`; `providerObject?`: `string`; `providerObjects?`: \{ `description?`: `string`; `kind`: `string`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `schemaName?`: `string`; \}[]; `providerOperation?`: `string`; `requiredPolicyIds?`: `string`[]; `requiresApproval?`: `boolean`; `requiresCredential?`: `boolean`; `sideEffect?`: `boolean`; \}[]; `packageName`: `string`; `privacyNotes?`: `string`[]; `provider`: `string`; `trustLevel?`: `"community"` \| `"official"` \| `"verified"` \| `"experimental"`; \}; `profile`: \{ `capabilities?`: \{ `audiences?`: (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[]; `capability`: `string`; `changesWorkflow?`: `boolean`; `description?`: `string`; `exposesSensitiveData?`: `boolean`; `extension?`: `boolean`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `providerObjects?`: \{ `description?`: `string`; `kind`: `string`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `schemaName?`: `string`; \}[]; `requiresCredential?`: `boolean`; `sideEffect?`: `boolean`; \}[]; `category`: `string`; `dataSources?`: \{ `capability`: `string`; `description?`: `string`; `exposesSensitiveData?`: `boolean`; `id`: `string`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `operationAlias?`: `string`; `providerObjects?`: `string`[]; \}[]; `description?`: `string`; `events?`: \{ `capability?`: `string`; `description?`: `string`; `direction`: `"outbound"` \| `"bidirectional"` \| `"inbound"` \| `"internal"`; `kind`: `string`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `operationAlias?`: `string`; `providerObject?`: `string`; \}[]; `id?`: `string`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `notes?`: `string`[]; `operations?`: \{ `alias`: `string`; `audience?`: `"customer-facing"` \| `"internal-support"` \| `"mixed"`; `audiences?`: (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[]; `capability`: `string`; `changesWorkflow?`: `boolean`; `description?`: `string`; `exposesSensitiveData?`: `boolean`; `externallyVisible?`: `boolean`; `inputSchema?`: `unknown`; `inputSchemaName?`: `string`; `inputSchemaRef?`: `string`; `label?`: `string`; `level?`: `"optional"` \| `"extension"` \| `"required"` \| `"recommended"`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `outputSchema?`: `unknown`; `outputSchemaName?`: `string`; `outputSchemaRef?`: `string`; `providerObject?`: `string`; `providerObjects?`: \{ `description?`: `string`; `kind`: `string`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `schemaName?`: `string`; \}[]; `requiredPolicyIds?`: `string`[]; `requiresApproval?`: `boolean`; `requiresCredential?`: `boolean`; `sideEffect?`: `boolean`; \}[]; `outputs?`: \{ `capability`: `string`; `changesWorkflow?`: `boolean`; `description?`: `string`; `exposesSensitiveData?`: `boolean`; `externallyVisible?`: `boolean`; `intent`: `string`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `operationAlias?`: `string`; `providerObject?`: `string`; `requiresApproval?`: `boolean`; `sideEffect?`: `boolean`; \}[]; `providerObjects?`: \{ `description?`: `string`; `kind`: `string`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `schemaName?`: `string`; \}[]; \}; \} |
| `input.manifest` | \{ `capabilities`: \{ `audiences?`: (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[]; `capability`: `string`; `changesWorkflow?`: `boolean`; `description?`: `string`; `exposesSensitiveData?`: `boolean`; `extension?`: `boolean`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `providerObjects?`: \{ `description?`: `string`; `kind`: `string`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `schemaName?`: `string`; \}[]; `requiresCredential?`: `boolean`; `sideEffect?`: `boolean`; \}[]; `category`: `string`; `channelAudiences?`: (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[]; `coverage?`: \{ `evidence?`: \{ `label`: `string`; `url?`: `string`; \}[]; `notes?`: `string`[]; `scope?`: \| `"support-workflow-subset"` \| `"provider-api-subset"` \| `"connector-required"` \| `"local-protocol"` \| `"full-provider-api"`; \}; `credentialRequirements?`: \{ `description?`: `string`; `id`: `string`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `required?`: `boolean`; `scopes?`: `string`[]; \}[]; `directions`: ( \| `"receive-only"` \| `"send-only"` \| `"inbound-only"` \| `"outbound-only"` \| `"bidirectional"`)[]; `id`: `string`; `limitations?`: `string`[]; `maintainers?`: \{ `name`: `string`; `type?`: `"community"` \| `"official"` \| `"unknown"` \| `"partner"`; `url?`: `string`; \}[]; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `name`: `string`; `operations?`: \{ `alias`: `string`; `audience?`: `"customer-facing"` \| `"internal-support"` \| `"mixed"`; `audiences?`: (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[]; `capability`: `string`; `changesWorkflow?`: `boolean`; `description?`: `string`; `exposesSensitiveData?`: `boolean`; `extension?`: `boolean`; `externallyVisible?`: `boolean`; `inputSchema?`: `unknown`; `inputSchemaName?`: `string`; `inputSchemaRef?`: `string`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `outputSchema?`: `unknown`; `outputSchemaName?`: `string`; `outputSchemaRef?`: `string`; `providerObject?`: `string`; `providerObjects?`: \{ `description?`: `string`; `kind`: `string`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `schemaName?`: `string`; \}[]; `providerOperation?`: `string`; `requiredPolicyIds?`: `string`[]; `requiresApproval?`: `boolean`; `requiresCredential?`: `boolean`; `sideEffect?`: `boolean`; \}[]; `packageName`: `string`; `privacyNotes?`: `string`[]; `provider`: `string`; `trustLevel?`: `"community"` \| `"official"` \| `"verified"` \| `"experimental"`; \} |
| `input.manifest.capabilities` | \{ `audiences?`: (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[]; `capability`: `string`; `changesWorkflow?`: `boolean`; `description?`: `string`; `exposesSensitiveData?`: `boolean`; `extension?`: `boolean`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `providerObjects?`: \{ `description?`: `string`; `kind`: `string`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `schemaName?`: `string`; \}[]; `requiresCredential?`: `boolean`; `sideEffect?`: `boolean`; \}[] |
| `input.manifest.category` | `string` |
| `input.manifest.channelAudiences?` | (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[] |
| `input.manifest.coverage?` | \{ `evidence?`: \{ `label`: `string`; `url?`: `string`; \}[]; `notes?`: `string`[]; `scope?`: \| `"support-workflow-subset"` \| `"provider-api-subset"` \| `"connector-required"` \| `"local-protocol"` \| `"full-provider-api"`; \} |
| `input.manifest.coverage.evidence?` | \{ `label`: `string`; `url?`: `string`; \}[] |
| `input.manifest.coverage.notes?` | `string`[] |
| `input.manifest.coverage.scope?` | \| `"support-workflow-subset"` \| `"provider-api-subset"` \| `"connector-required"` \| `"local-protocol"` \| `"full-provider-api"` |
| `input.manifest.credentialRequirements?` | \{ `description?`: `string`; `id`: `string`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `required?`: `boolean`; `scopes?`: `string`[]; \}[] |
| `input.manifest.directions` | ( \| `"receive-only"` \| `"send-only"` \| `"inbound-only"` \| `"outbound-only"` \| `"bidirectional"`)[] |
| `input.manifest.id` | `string` |
| `input.manifest.limitations?` | `string`[] |
| `input.manifest.maintainers?` | \{ `name`: `string`; `type?`: `"community"` \| `"official"` \| `"unknown"` \| `"partner"`; `url?`: `string`; \}[] |
| `input.manifest.metadata?` | `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\> |
| `input.manifest.name` | `string` |
| `input.manifest.operations?` | \{ `alias`: `string`; `audience?`: `"customer-facing"` \| `"internal-support"` \| `"mixed"`; `audiences?`: (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[]; `capability`: `string`; `changesWorkflow?`: `boolean`; `description?`: `string`; `exposesSensitiveData?`: `boolean`; `extension?`: `boolean`; `externallyVisible?`: `boolean`; `inputSchema?`: `unknown`; `inputSchemaName?`: `string`; `inputSchemaRef?`: `string`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `outputSchema?`: `unknown`; `outputSchemaName?`: `string`; `outputSchemaRef?`: `string`; `providerObject?`: `string`; `providerObjects?`: \{ `description?`: `string`; `kind`: `string`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `schemaName?`: `string`; \}[]; `providerOperation?`: `string`; `requiredPolicyIds?`: `string`[]; `requiresApproval?`: `boolean`; `requiresCredential?`: `boolean`; `sideEffect?`: `boolean`; \}[] |
| `input.manifest.packageName` | `string` |
| `input.manifest.privacyNotes?` | `string`[] |
| `input.manifest.provider` | `string` |
| `input.manifest.trustLevel?` | `"community"` \| `"official"` \| `"verified"` \| `"experimental"` |
| `input.profile` | \{ `capabilities?`: \{ `audiences?`: (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[]; `capability`: `string`; `changesWorkflow?`: `boolean`; `description?`: `string`; `exposesSensitiveData?`: `boolean`; `extension?`: `boolean`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `providerObjects?`: \{ `description?`: `string`; `kind`: `string`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `schemaName?`: `string`; \}[]; `requiresCredential?`: `boolean`; `sideEffect?`: `boolean`; \}[]; `category`: `string`; `dataSources?`: \{ `capability`: `string`; `description?`: `string`; `exposesSensitiveData?`: `boolean`; `id`: `string`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `operationAlias?`: `string`; `providerObjects?`: `string`[]; \}[]; `description?`: `string`; `events?`: \{ `capability?`: `string`; `description?`: `string`; `direction`: `"outbound"` \| `"bidirectional"` \| `"inbound"` \| `"internal"`; `kind`: `string`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `operationAlias?`: `string`; `providerObject?`: `string`; \}[]; `id?`: `string`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `notes?`: `string`[]; `operations?`: \{ `alias`: `string`; `audience?`: `"customer-facing"` \| `"internal-support"` \| `"mixed"`; `audiences?`: (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[]; `capability`: `string`; `changesWorkflow?`: `boolean`; `description?`: `string`; `exposesSensitiveData?`: `boolean`; `externallyVisible?`: `boolean`; `inputSchema?`: `unknown`; `inputSchemaName?`: `string`; `inputSchemaRef?`: `string`; `label?`: `string`; `level?`: `"optional"` \| `"extension"` \| `"required"` \| `"recommended"`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `outputSchema?`: `unknown`; `outputSchemaName?`: `string`; `outputSchemaRef?`: `string`; `providerObject?`: `string`; `providerObjects?`: \{ `description?`: `string`; `kind`: `string`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `schemaName?`: `string`; \}[]; `requiredPolicyIds?`: `string`[]; `requiresApproval?`: `boolean`; `requiresCredential?`: `boolean`; `sideEffect?`: `boolean`; \}[]; `outputs?`: \{ `capability`: `string`; `changesWorkflow?`: `boolean`; `description?`: `string`; `exposesSensitiveData?`: `boolean`; `externallyVisible?`: `boolean`; `intent`: `string`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `operationAlias?`: `string`; `providerObject?`: `string`; `requiresApproval?`: `boolean`; `sideEffect?`: `boolean`; \}[]; `providerObjects?`: \{ `description?`: `string`; `kind`: `string`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `schemaName?`: `string`; \}[]; \} |
| `input.profile.capabilities?` | \{ `audiences?`: (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[]; `capability`: `string`; `changesWorkflow?`: `boolean`; `description?`: `string`; `exposesSensitiveData?`: `boolean`; `extension?`: `boolean`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `providerObjects?`: \{ `description?`: `string`; `kind`: `string`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `schemaName?`: `string`; \}[]; `requiresCredential?`: `boolean`; `sideEffect?`: `boolean`; \}[] |
| `input.profile.category` | `string` |
| `input.profile.dataSources?` | \{ `capability`: `string`; `description?`: `string`; `exposesSensitiveData?`: `boolean`; `id`: `string`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `operationAlias?`: `string`; `providerObjects?`: `string`[]; \}[] |
| `input.profile.description?` | `string` |
| `input.profile.events?` | \{ `capability?`: `string`; `description?`: `string`; `direction`: `"outbound"` \| `"bidirectional"` \| `"inbound"` \| `"internal"`; `kind`: `string`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `operationAlias?`: `string`; `providerObject?`: `string`; \}[] |
| `input.profile.id?` | `string` |
| `input.profile.label?` | `string` |
| `input.profile.metadata?` | `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\> |
| `input.profile.notes?` | `string`[] |
| `input.profile.operations?` | \{ `alias`: `string`; `audience?`: `"customer-facing"` \| `"internal-support"` \| `"mixed"`; `audiences?`: (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[]; `capability`: `string`; `changesWorkflow?`: `boolean`; `description?`: `string`; `exposesSensitiveData?`: `boolean`; `externallyVisible?`: `boolean`; `inputSchema?`: `unknown`; `inputSchemaName?`: `string`; `inputSchemaRef?`: `string`; `label?`: `string`; `level?`: `"optional"` \| `"extension"` \| `"required"` \| `"recommended"`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `outputSchema?`: `unknown`; `outputSchemaName?`: `string`; `outputSchemaRef?`: `string`; `providerObject?`: `string`; `providerObjects?`: \{ `description?`: `string`; `kind`: `string`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `schemaName?`: `string`; \}[]; `requiredPolicyIds?`: `string`[]; `requiresApproval?`: `boolean`; `requiresCredential?`: `boolean`; `sideEffect?`: `boolean`; \}[] |
| `input.profile.outputs?` | \{ `capability`: `string`; `changesWorkflow?`: `boolean`; `description?`: `string`; `exposesSensitiveData?`: `boolean`; `externallyVisible?`: `boolean`; `intent`: `string`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `operationAlias?`: `string`; `providerObject?`: `string`; `requiresApproval?`: `boolean`; `sideEffect?`: `boolean`; \}[] |
| `input.profile.providerObjects?` | \{ `description?`: `string`; `kind`: `string`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `schemaName?`: `string`; \}[] |

#### Returns

`boolean`

***

### collectEmailAttachmentMetadata()

```ts
function collectEmailAttachmentMetadata(attachments?): EmailAttachmentMetadata[];
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `attachments?` | [`EmailAttachmentMetadataInput`](#emailattachmentmetadatainput)[] |

#### Returns

[`EmailAttachmentMetadata`](#emailattachmentmetadata)[]

***

### createAgent()

```ts
function createAgent<TId>(id, options): AgentBuilder<TId>;
```

#### Type Parameters

| Type Parameter |
| ------ |
| `TId` *extends* `string` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `TId` |
| `options` | [`AgentOptions`](#agentoptions) |

#### Returns

[`AgentBuilder`](#agentbuilder)\<`TId`\>

***

### createChannelEventInputFromSource()

```ts
function createChannelEventInputFromSource<TRaw, TTurn>(source, input): Promise<HandleChannelEventInput<unknown, TTurn>>;
```

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TRaw` | `unknown` |
| `TTurn` | `unknown` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `source` | [`ChannelEventSource`](#channeleventsource)\<`TRaw`\> |
| `input` | [`ChannelEventSourceHandleInput`](#channeleventsourcehandleinput)\<`TRaw`, `TTurn`\> |

#### Returns

`Promise`\<[`HandleChannelEventInput`](#handlechanneleventinput)\<`unknown`, `TTurn`\>\>

***

### createEmailThreadContext()

```ts
function createEmailThreadContext(messages, options?): EmailThreadContext;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `messages` | [`EmailThreadMessageInput`](#emailthreadmessageinput)[] |
| `options?` | [`EmailThreadContextOptions`](#emailthreadcontextoptions) |

#### Returns

[`EmailThreadContext`](#emailthreadcontext)

***

### createInMemoryScheduleAdapter()

```ts
function createInMemoryScheduleAdapter(options?): ScheduleAdapter;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options?` | [`InMemoryScheduleAdapterOptions`](#inmemoryscheduleadapteroptions) |

#### Returns

[`ScheduleAdapter`](#scheduleadapter)

***

### createJourneyRoutingText()

```ts
function createJourneyRoutingText(journey): string;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `journey` | [`CompiledJourney`](#compiledjourney) |

#### Returns

`string`

***

### createMessageChannelEvent()

```ts
function createMessageChannelEvent(input): ChannelEventEnvelopeInput;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | \{ `actor?`: \| `"provider"` \| [`ChannelEventActor`](#channeleventactor) \| `"customer"` \| `"agent"` \| `"operator"` \| `"system"` \| `"scheduler"` \| `"application"`; `channel`: [`ConversationChannelInput`](#conversationchannelinput); `direction?`: `"outbound"` \| `"inbound"` \| `"internal"`; `id?`: `string`; `identity?`: [`ChannelEventIdentity`](#channeleventidentity); `intent?`: [`ChannelEventIntent`](#channeleventintent); `metadata?`: `Record`\<`string`, `unknown`\>; `payload?`: [`NormalizedChannelPayloadInput`](#normalizedchannelpayloadinput); `source?`: [`ChannelEventSourceEvidence`](#channeleventsourceevidence); `text`: `string`; \} |
| `input.actor?` | \| `"provider"` \| [`ChannelEventActor`](#channeleventactor) \| `"customer"` \| `"agent"` \| `"operator"` \| `"system"` \| `"scheduler"` \| `"application"` |
| `input.channel` | [`ConversationChannelInput`](#conversationchannelinput) |
| `input.direction?` | `"outbound"` \| `"inbound"` \| `"internal"` |
| `input.id?` | `string` |
| `input.identity?` | [`ChannelEventIdentity`](#channeleventidentity) |
| `input.intent?` | [`ChannelEventIntent`](#channeleventintent) |
| `input.metadata?` | `Record`\<`string`, `unknown`\> |
| `input.payload?` | [`NormalizedChannelPayloadInput`](#normalizedchannelpayloadinput) |
| `input.source?` | [`ChannelEventSourceEvidence`](#channeleventsourceevidence) |
| `input.text` | `string` |

#### Returns

[`ChannelEventEnvelopeInput`](#channeleventenvelopeinput)

***

### createProviderRegistry()

```ts
function createProviderRegistry(manifests?): ProviderRegistry;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `manifests?` | \{ `capabilities`: \{ `audiences?`: (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[]; `capability`: `string`; `changesWorkflow?`: `boolean`; `description?`: `string`; `exposesSensitiveData?`: `boolean`; `extension?`: `boolean`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `providerObjects?`: \{ `description?`: `string`; `kind`: `string`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `schemaName?`: `string`; \}[]; `requiresCredential?`: `boolean`; `sideEffect?`: `boolean`; \}[]; `category`: `string`; `channelAudiences?`: (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[]; `coverage?`: \{ `evidence?`: \{ `label`: `string`; `url?`: `string`; \}[]; `notes?`: `string`[]; `scope?`: \| `"support-workflow-subset"` \| `"provider-api-subset"` \| `"connector-required"` \| `"local-protocol"` \| `"full-provider-api"`; \}; `credentialRequirements?`: \{ `description?`: `string`; `id`: `string`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `required?`: `boolean`; `scopes?`: `string`[]; \}[]; `directions`: ( \| `"receive-only"` \| `"send-only"` \| `"inbound-only"` \| `"outbound-only"` \| `"bidirectional"`)[]; `id`: `string`; `limitations?`: `string`[]; `maintainers?`: \{ `name`: `string`; `type?`: `"community"` \| `"official"` \| `"unknown"` \| `"partner"`; `url?`: `string`; \}[]; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `name`: `string`; `operations?`: \{ `alias`: `string`; `audience?`: `"customer-facing"` \| `"internal-support"` \| `"mixed"`; `audiences?`: (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[]; `capability`: `string`; `changesWorkflow?`: `boolean`; `description?`: `string`; `exposesSensitiveData?`: `boolean`; `extension?`: `boolean`; `externallyVisible?`: `boolean`; `inputSchema?`: `unknown`; `inputSchemaName?`: `string`; `inputSchemaRef?`: `string`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `outputSchema?`: `unknown`; `outputSchemaName?`: `string`; `outputSchemaRef?`: `string`; `providerObject?`: `string`; `providerObjects?`: \{ `description?`: `string`; `kind`: `string`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `schemaName?`: `string`; \}[]; `providerOperation?`: `string`; `requiredPolicyIds?`: `string`[]; `requiresApproval?`: `boolean`; `requiresCredential?`: `boolean`; `sideEffect?`: `boolean`; \}[]; `packageName`: `string`; `privacyNotes?`: `string`[]; `provider`: `string`; `trustLevel?`: `"community"` \| `"official"` \| `"verified"` \| `"experimental"`; \}[] |

#### Returns

[`ProviderRegistry`](#providerregistry)

***

### createRuntime()

```ts
function createRuntime(options): CognideskRuntime;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`RuntimeOptions`](#runtimeoptions) |

#### Returns

[`CognideskRuntime`](#cognideskruntime)

***

### createRuntimeLogger()

```ts
function createRuntimeLogger(options): SdkLogger;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`RuntimeOptions`](#runtimeoptions) |

#### Returns

[`SdkLogger`](#sdklogger)

***

### createScheduledChannelEvent()

```ts
function createScheduledChannelEvent(input): ChannelEventEnvelopeInput;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | \{ `channel?`: [`ConversationChannelInput`](#conversationchannelinput); `conversationId?`: `string`; `dueAt`: `string`; `eventName`: `string`; `intent?`: `unknown`; `metadata?`: `Record`\<`string`, `unknown`\>; `payload?`: `unknown`; `scheduledFor?`: `string`; `scheduleId`: `string`; \} |
| `input.channel?` | [`ConversationChannelInput`](#conversationchannelinput) |
| `input.conversationId?` | `string` |
| `input.dueAt` | `string` |
| `input.eventName` | `string` |
| `input.intent?` | `unknown` |
| `input.metadata?` | `Record`\<`string`, `unknown`\> |
| `input.payload?` | `unknown` |
| `input.scheduledFor?` | `string` |
| `input.scheduleId` | `string` |

#### Returns

[`ChannelEventEnvelopeInput`](#channeleventenvelopeinput)

***

### createTelemetryContext()

```ts
function createTelemetryContext(options): TelemetryContext;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | `TelemetryOptionsCarrier` |

#### Returns

[`TelemetryContext`](#telemetrycontext)

***

### cron()

```ts
function cron(expression, options?): ScheduleTrigger;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `expression` | `string` |
| `options?` | \{ `timezone?`: `string`; \} |
| `options.timezone?` | `string` |

#### Returns

[`ScheduleTrigger`](#scheduletrigger)

***

### customRuntimeEvent()

```ts
function customRuntimeEvent<TName, TPayloadSchema>(name, config): CustomRuntimeEventDefinition<TName, TPayloadSchema>;
```

#### Type Parameters

| Type Parameter |
| ------ |
| `TName` *extends* `string` |
| `TPayloadSchema` *extends* `ZodType`\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `TName` |
| `config` | \{ `payload`: `TPayloadSchema`; `visibleToModel?`: `boolean`; \} |
| `config.payload` | `TPayloadSchema` |
| `config.visibleToModel?` | `boolean` |

#### Returns

[`CustomRuntimeEventDefinition`](#customruntimeeventdefinition)\<`TName`, `TPayloadSchema`\>

***

### defaultChannelCapabilityFlags()

```ts
function defaultChannelCapabilityFlags(kind): {
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

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `kind` | [`ConversationChannelKind`](#conversationchannelkind) |

#### Returns

```ts
{
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
}
```

| Name | Type |
| ------ | ------ |
| `async` | `boolean` |
| `attachments` | `boolean` |
| `audioInput` | `boolean` |
| `audioOutput` | `boolean` |
| `buttons` | `boolean` |
| `deliveryReceipts` | `boolean` |
| `files` | `boolean` |
| `html` | `boolean` |
| `images` | `boolean` |
| `markdown` | `boolean` |
| `privateReplies` | `boolean` |
| `publicReplies` | `boolean` |
| `quickReplies` | `boolean` |
| `readReceipts` | `boolean` |
| `realtime` | `boolean` |
| `richText` | `boolean` |
| `supportsHumanTransfer` | `boolean` |
| `templates` | `boolean` |
| `threaded` | `boolean` |
| `typingIndicator` | `boolean` |
| `voice` | `boolean` |
| `widgets` | `boolean` |

***

### defineCapabilityAvailability()

```ts
function defineCapabilityAvailability(input): {
  blockers: {
     code: string;
     kind:   | "unknown"
        | "permission-blocked"
        | "missing-policy"
        | "missing-configuration"
        | "missing-credentials"
        | "provider-unsupported";
     message: string;
  }[];
  capability?: string;
  enabledForAgents: string[];
  enabledForChannels: string[];
  enabledForJourneys: string[];
  enabledForTools: string[];
  metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
  providerPackageId?: string;
  status:   | "enabled"
     | "registry-available"
     | "installed"
     | "configured"
     | "blocked";
};
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | \{ `blockers?`: \{ `code`: `string`; `kind?`: \| `"unknown"` \| `"permission-blocked"` \| `"missing-policy"` \| `"missing-configuration"` \| `"missing-credentials"` \| `"provider-unsupported"`; `message`: `string`; \}[]; `capability?`: `string`; `enabledForAgents?`: `string`[]; `enabledForChannels?`: `string`[]; `enabledForJourneys?`: `string`[]; `enabledForTools?`: `string`[]; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `providerPackageId?`: `string`; `status`: \| `"enabled"` \| `"registry-available"` \| `"installed"` \| `"configured"` \| `"blocked"`; \} |
| `input.blockers?` | \{ `code`: `string`; `kind?`: \| `"unknown"` \| `"permission-blocked"` \| `"missing-policy"` \| `"missing-configuration"` \| `"missing-credentials"` \| `"provider-unsupported"`; `message`: `string`; \}[] |
| `input.capability?` | `string` |
| `input.enabledForAgents?` | `string`[] |
| `input.enabledForChannels?` | `string`[] |
| `input.enabledForJourneys?` | `string`[] |
| `input.enabledForTools?` | `string`[] |
| `input.metadata?` | `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\> |
| `input.providerPackageId?` | `string` |
| `input.status` | \| `"enabled"` \| `"registry-available"` \| `"installed"` \| `"configured"` \| `"blocked"` |

#### Returns

```ts
{
  blockers: {
     code: string;
     kind:   | "unknown"
        | "permission-blocked"
        | "missing-policy"
        | "missing-configuration"
        | "missing-credentials"
        | "provider-unsupported";
     message: string;
  }[];
  capability?: string;
  enabledForAgents: string[];
  enabledForChannels: string[];
  enabledForJourneys: string[];
  enabledForTools: string[];
  metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
  providerPackageId?: string;
  status:   | "enabled"
     | "registry-available"
     | "installed"
     | "configured"
     | "blocked";
}
```

| Name | Type |
| ------ | ------ |
| `blockers` | \{ `code`: `string`; `kind`: \| `"unknown"` \| `"permission-blocked"` \| `"missing-policy"` \| `"missing-configuration"` \| `"missing-credentials"` \| `"provider-unsupported"`; `message`: `string`; \}[] |
| `capability?` | `string` |
| `enabledForAgents` | `string`[] |
| `enabledForChannels` | `string`[] |
| `enabledForJourneys` | `string`[] |
| `enabledForTools` | `string`[] |
| `metadata?` | `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\> |
| `providerPackageId?` | `string` |
| `status` | \| `"enabled"` \| `"registry-available"` \| `"installed"` \| `"configured"` \| `"blocked"` |

***

### defineChannelContext()

```ts
function defineChannelContext(input): {
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

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`ConversationChannelInput`](#conversationchannelinput) |

#### Returns

```ts
{
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
}
```

| Name | Type |
| ------ | ------ |
| `capabilities` | \{ `async`: `boolean`; `attachments`: `boolean`; `audioInput`: `boolean`; `audioOutput`: `boolean`; `buttons`: `boolean`; `deliveryReceipts`: `boolean`; `files`: `boolean`; `html`: `boolean`; `images`: `boolean`; `markdown`: `boolean`; `privateReplies`: `boolean`; `publicReplies`: `boolean`; `quickReplies`: `boolean`; `readReceipts`: `boolean`; `realtime`: `boolean`; `richText`: `boolean`; `supportsHumanTransfer`: `boolean`; `templates`: `boolean`; `threaded`: `boolean`; `typingIndicator`: `boolean`; `voice`: `boolean`; `widgets`: `boolean`; \} |
| `capabilities.async` | `boolean` |
| `capabilities.attachments` | `boolean` |
| `capabilities.audioInput` | `boolean` |
| `capabilities.audioOutput` | `boolean` |
| `capabilities.buttons` | `boolean` |
| `capabilities.deliveryReceipts` | `boolean` |
| `capabilities.files` | `boolean` |
| `capabilities.html` | `boolean` |
| `capabilities.images` | `boolean` |
| `capabilities.markdown` | `boolean` |
| `capabilities.privateReplies` | `boolean` |
| `capabilities.publicReplies` | `boolean` |
| `capabilities.quickReplies` | `boolean` |
| `capabilities.readReceipts` | `boolean` |
| `capabilities.realtime` | `boolean` |
| `capabilities.richText` | `boolean` |
| `capabilities.supportsHumanTransfer` | `boolean` |
| `capabilities.templates` | `boolean` |
| `capabilities.threaded` | `boolean` |
| `capabilities.typingIndicator` | `boolean` |
| `capabilities.voice` | `boolean` |
| `capabilities.widgets` | `boolean` |
| `channelId` | `string` |
| `externalConversationId?` | `string` |
| `externalMessageId?` | `string` |
| `externalThreadId?` | `string` |
| `externalUserId?` | `string` |
| `kind` | `string` |
| `locale?` | `string` |
| `metadata?` | `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\> |
| `provider?` | `string` |
| `timezone?` | `string` |

***

### defineChannelEvent()

```ts
function defineChannelEvent<TPayload, TRawPayload>(input): ChannelEventEnvelope<TPayload, TRawPayload>;
```

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TPayload` | [`NormalizedChannelPayload`](#normalizedchannelpayload) |
| `TRawPayload` | `unknown` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`ChannelEventEnvelopeInput`](#channeleventenvelopeinput)\<`TPayload`, `TRawPayload`\> |

#### Returns

[`ChannelEventEnvelope`](#channeleventenvelope)\<`TPayload`, `TRawPayload`\>

***

### defineChannelEventSource()

```ts
function defineChannelEventSource<TRaw>(source): ChannelEventSource<TRaw>;
```

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TRaw` | `unknown` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `source` | [`ChannelEventSource`](#channeleventsource)\<`TRaw`\> |

#### Returns

[`ChannelEventSource`](#channeleventsource)\<`TRaw`\>

***

### defineChannelOutputIntent()

```ts
function defineChannelOutputIntent<TPayload, TRawPayload>(input): ChannelOutputIntent<TPayload, TRawPayload>;
```

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TPayload` | [`NormalizedChannelPayload`](#normalizedchannelpayload) |
| `TRawPayload` | `unknown` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`ChannelOutputIntentInput`](#channeloutputintentinput)\<`TPayload`, `TRawPayload`\> |

#### Returns

[`ChannelOutputIntent`](#channeloutputintent)\<`TPayload`, `TRawPayload`\>

***

### defineChannelOutputResolutionDecision()

```ts
function defineChannelOutputResolutionDecision<TPayload>(input): ChannelOutputResolutionDecision<TPayload>;
```

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TPayload` | `unknown` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`ChannelOutputResolutionDecision`](#channeloutputresolutiondecision)\<`TPayload`\> |

#### Returns

[`ChannelOutputResolutionDecision`](#channeloutputresolutiondecision)\<`TPayload`\>

***

### defineChannelPolicy()

```ts
function defineChannelPolicy(config): {
  audience?: "customer-facing" | "internal-support" | "mixed";
  behavior?: {
   [key: string]: unknown;
     allowMarkdown?: boolean;
     allowWidgets?: boolean;
     approval?: unknown;
     draftFirst?: boolean;
     handoff?: unknown;
     maxCharacters?: number;
     maxWords?: number;
     media?: unknown;
     sensitiveData?: unknown;
     tone?: string;
  };
  channel: string;
  channelSetIds: string[];
  enabled: boolean;
  enabledCapabilities: string[];
  flowActivations: {
     enabled: boolean;
     journeyId: string;
     metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
     policyIds: string[];
     providerPackageIds: string[];
     reason?: string;
  }[];
  handoff?: {
     destinations: string[];
     enabled: boolean;
     metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
     policyIds: string[];
     providerPackageIds: string[];
     sdkControlled?: boolean;
  };
  id: string;
  metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
  outbound?: {
     enabled: boolean;
     metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
     policyIds: string[];
     providerPackageIds: string[];
     requiresProviderOutboundSupport: boolean;
  };
  policies: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
  providerPackageIds: string[];
};
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `config` | \{ `audience?`: `"customer-facing"` \| `"internal-support"` \| `"mixed"`; `behavior?`: \{ \[`key`: `string`\]: `unknown`; `allowMarkdown?`: `boolean`; `allowWidgets?`: `boolean`; `approval?`: `unknown`; `draftFirst?`: `boolean`; `handoff?`: `unknown`; `maxCharacters?`: `number`; `maxWords?`: `number`; `media?`: `unknown`; `sensitiveData?`: `unknown`; `tone?`: `string`; \}; `channel`: `string`; `channelSetIds?`: `string`[]; `enabled?`: `boolean`; `enabledCapabilities?`: `string`[]; `flowActivations?`: \{ `enabled?`: `boolean`; `journeyId`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `policyIds?`: `string`[]; `providerPackageIds?`: `string`[]; `reason?`: `string`; \}[]; `handoff?`: \{ `destinations?`: `string`[]; `enabled?`: `boolean`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `policyIds?`: `string`[]; `providerPackageIds?`: `string`[]; `sdkControlled?`: `boolean`; \}; `id`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `outbound?`: \{ `enabled?`: `boolean`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `policyIds?`: `string`[]; `providerPackageIds?`: `string`[]; `requiresProviderOutboundSupport?`: `boolean`; \}; `policies?`: `z.ZodDefault`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `providerPackageIds?`: `string`[]; \} |
| `config.audience?` | `"customer-facing"` \| `"internal-support"` \| `"mixed"` |
| `config.behavior?` | \{ \[`key`: `string`\]: `unknown`; `allowMarkdown?`: `boolean`; `allowWidgets?`: `boolean`; `approval?`: `unknown`; `draftFirst?`: `boolean`; `handoff?`: `unknown`; `maxCharacters?`: `number`; `maxWords?`: `number`; `media?`: `unknown`; `sensitiveData?`: `unknown`; `tone?`: `string`; \} |
| `config.behavior.allowMarkdown?` | `boolean` |
| `config.behavior.allowWidgets?` | `boolean` |
| `config.behavior.approval?` | `unknown` |
| `config.behavior.draftFirst?` | `boolean` |
| `config.behavior.handoff?` | `unknown` |
| `config.behavior.maxCharacters?` | `number` |
| `config.behavior.maxWords?` | `number` |
| `config.behavior.media?` | `unknown` |
| `config.behavior.sensitiveData?` | `unknown` |
| `config.behavior.tone?` | `string` |
| `config.channel` | `string` |
| `config.channelSetIds?` | `string`[] |
| `config.enabled?` | `boolean` |
| `config.enabledCapabilities?` | `string`[] |
| `config.flowActivations?` | \{ `enabled?`: `boolean`; `journeyId`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `policyIds?`: `string`[]; `providerPackageIds?`: `string`[]; `reason?`: `string`; \}[] |
| `config.handoff?` | \{ `destinations?`: `string`[]; `enabled?`: `boolean`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `policyIds?`: `string`[]; `providerPackageIds?`: `string`[]; `sdkControlled?`: `boolean`; \} |
| `config.handoff.destinations?` | `string`[] |
| `config.handoff.enabled?` | `boolean` |
| `config.handoff.metadata?` | `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\> |
| `config.handoff.policyIds?` | `string`[] |
| `config.handoff.providerPackageIds?` | `string`[] |
| `config.handoff.sdkControlled?` | `boolean` |
| `config.id` | `string` |
| `config.metadata?` | `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\> |
| `config.outbound?` | \{ `enabled?`: `boolean`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `policyIds?`: `string`[]; `providerPackageIds?`: `string`[]; `requiresProviderOutboundSupport?`: `boolean`; \} |
| `config.outbound.enabled?` | `boolean` |
| `config.outbound.metadata?` | `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\> |
| `config.outbound.policyIds?` | `string`[] |
| `config.outbound.providerPackageIds?` | `string`[] |
| `config.outbound.requiresProviderOutboundSupport?` | `boolean` |
| `config.policies?` | `z.ZodDefault`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\> |
| `config.providerPackageIds?` | `string`[] |

#### Returns

```ts
{
  audience?: "customer-facing" | "internal-support" | "mixed";
  behavior?: {
   [key: string]: unknown;
     allowMarkdown?: boolean;
     allowWidgets?: boolean;
     approval?: unknown;
     draftFirst?: boolean;
     handoff?: unknown;
     maxCharacters?: number;
     maxWords?: number;
     media?: unknown;
     sensitiveData?: unknown;
     tone?: string;
  };
  channel: string;
  channelSetIds: string[];
  enabled: boolean;
  enabledCapabilities: string[];
  flowActivations: {
     enabled: boolean;
     journeyId: string;
     metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
     policyIds: string[];
     providerPackageIds: string[];
     reason?: string;
  }[];
  handoff?: {
     destinations: string[];
     enabled: boolean;
     metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
     policyIds: string[];
     providerPackageIds: string[];
     sdkControlled?: boolean;
  };
  id: string;
  metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
  outbound?: {
     enabled: boolean;
     metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
     policyIds: string[];
     providerPackageIds: string[];
     requiresProviderOutboundSupport: boolean;
  };
  policies: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
  providerPackageIds: string[];
}
```

| Name | Type |
| ------ | ------ |
| `audience?` | `"customer-facing"` \| `"internal-support"` \| `"mixed"` |
| `behavior?` | \{ \[`key`: `string`\]: `unknown`; `allowMarkdown?`: `boolean`; `allowWidgets?`: `boolean`; `approval?`: `unknown`; `draftFirst?`: `boolean`; `handoff?`: `unknown`; `maxCharacters?`: `number`; `maxWords?`: `number`; `media?`: `unknown`; `sensitiveData?`: `unknown`; `tone?`: `string`; \} |
| `behavior.allowMarkdown?` | `boolean` |
| `behavior.allowWidgets?` | `boolean` |
| `behavior.approval?` | `unknown` |
| `behavior.draftFirst?` | `boolean` |
| `behavior.handoff?` | `unknown` |
| `behavior.maxCharacters?` | `number` |
| `behavior.maxWords?` | `number` |
| `behavior.media?` | `unknown` |
| `behavior.sensitiveData?` | `unknown` |
| `behavior.tone?` | `string` |
| `channel` | `string` |
| `channelSetIds` | `string`[] |
| `enabled` | `boolean` |
| `enabledCapabilities` | `string`[] |
| `flowActivations` | \{ `enabled`: `boolean`; `journeyId`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `policyIds`: `string`[]; `providerPackageIds`: `string`[]; `reason?`: `string`; \}[] |
| `handoff?` | \{ `destinations`: `string`[]; `enabled`: `boolean`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `policyIds`: `string`[]; `providerPackageIds`: `string`[]; `sdkControlled?`: `boolean`; \} |
| `handoff.destinations` | `string`[] |
| `handoff.enabled` | `boolean` |
| `handoff.metadata?` | `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\> |
| `handoff.policyIds` | `string`[] |
| `handoff.providerPackageIds` | `string`[] |
| `handoff.sdkControlled?` | `boolean` |
| `id` | `string` |
| `metadata?` | `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\> |
| `outbound?` | \{ `enabled`: `boolean`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `policyIds`: `string`[]; `providerPackageIds`: `string`[]; `requiresProviderOutboundSupport`: `boolean`; \} |
| `outbound.enabled` | `boolean` |
| `outbound.metadata?` | `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\> |
| `outbound.policyIds` | `string`[] |
| `outbound.providerPackageIds` | `string`[] |
| `outbound.requiresProviderOutboundSupport` | `boolean` |
| `policies` | `z.ZodDefault`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\> |
| `providerPackageIds` | `string`[] |

***

### defineChannelProviderAdapter()

```ts
function defineChannelProviderAdapter<TRaw>(adapter): ChannelProviderAdapter<TRaw>;
```

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TRaw` | `unknown` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `adapter` | [`ChannelProviderAdapter`](#channelprovideradapter)\<`TRaw`\> |

#### Returns

[`ChannelProviderAdapter`](#channelprovideradapter)\<`TRaw`\>

***

### defineIntegrationCategoryProfile()

```ts
function defineIntegrationCategoryProfile(profile): {
  capabilities: {
     audiences?: ("customer-facing" | "internal-support" | "mixed")[];
     capability: string;
     changesWorkflow?: boolean;
     description?: string;
     exposesSensitiveData?: boolean;
     extension?: boolean;
     label?: string;
     metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
     providerObjects?: {
        description?: string;
        kind: string;
        label?: string;
        metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        schemaName?: string;
     }[];
     requiresCredential?: boolean;
     sideEffect?: boolean;
  }[];
  category: string;
  dataSources: {
     capability: string;
     description?: string;
     exposesSensitiveData?: boolean;
     id: string;
     label?: string;
     metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
     operationAlias?: string;
     providerObjects: string[];
  }[];
  description?: string;
  events: {
     capability?: string;
     description?: string;
     direction: "outbound" | "bidirectional" | "inbound" | "internal";
     kind: string;
     label?: string;
     metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
     operationAlias?: string;
     providerObject?: string;
  }[];
  id?: string;
  label?: string;
  metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
  notes: string[];
  operations: {
     alias: string;
     audience?: "customer-facing" | "internal-support" | "mixed";
     audiences?: ("customer-facing" | "internal-support" | "mixed")[];
     capability: string;
     changesWorkflow?: boolean;
     description?: string;
     exposesSensitiveData?: boolean;
     externallyVisible?: boolean;
     inputSchema?: unknown;
     inputSchemaName?: string;
     inputSchemaRef?: string;
     label?: string;
     level: "optional" | "extension" | "required" | "recommended";
     metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
     outputSchema?: unknown;
     outputSchemaName?: string;
     outputSchemaRef?: string;
     providerObject?: string;
     providerObjects?: {
        description?: string;
        kind: string;
        label?: string;
        metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        schemaName?: string;
     }[];
     requiredPolicyIds?: string[];
     requiresApproval?: boolean;
     requiresCredential?: boolean;
     sideEffect?: boolean;
  }[];
  outputs: {
     capability: string;
     changesWorkflow?: boolean;
     description?: string;
     exposesSensitiveData?: boolean;
     externallyVisible?: boolean;
     intent: string;
     label?: string;
     metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
     operationAlias?: string;
     providerObject?: string;
     requiresApproval?: boolean;
     sideEffect?: boolean;
  }[];
  providerObjects: {
     description?: string;
     kind: string;
     label?: string;
     metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
     schemaName?: string;
  }[];
};
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `profile` | \{ `capabilities?`: \{ `audiences?`: (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[]; `capability`: `string`; `changesWorkflow?`: `boolean`; `description?`: `string`; `exposesSensitiveData?`: `boolean`; `extension?`: `boolean`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `providerObjects?`: \{ `description?`: `string`; `kind`: `string`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `schemaName?`: `string`; \}[]; `requiresCredential?`: `boolean`; `sideEffect?`: `boolean`; \}[]; `category`: `string`; `dataSources?`: \{ `capability`: `string`; `description?`: `string`; `exposesSensitiveData?`: `boolean`; `id`: `string`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `operationAlias?`: `string`; `providerObjects?`: `string`[]; \}[]; `description?`: `string`; `events?`: \{ `capability?`: `string`; `description?`: `string`; `direction`: `"outbound"` \| `"bidirectional"` \| `"inbound"` \| `"internal"`; `kind`: `string`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `operationAlias?`: `string`; `providerObject?`: `string`; \}[]; `id?`: `string`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `notes?`: `string`[]; `operations?`: \{ `alias`: `string`; `audience?`: `"customer-facing"` \| `"internal-support"` \| `"mixed"`; `audiences?`: (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[]; `capability`: `string`; `changesWorkflow?`: `boolean`; `description?`: `string`; `exposesSensitiveData?`: `boolean`; `externallyVisible?`: `boolean`; `inputSchema?`: `unknown`; `inputSchemaName?`: `string`; `inputSchemaRef?`: `string`; `label?`: `string`; `level?`: `"optional"` \| `"extension"` \| `"required"` \| `"recommended"`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `outputSchema?`: `unknown`; `outputSchemaName?`: `string`; `outputSchemaRef?`: `string`; `providerObject?`: `string`; `providerObjects?`: \{ `description?`: `string`; `kind`: `string`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `schemaName?`: `string`; \}[]; `requiredPolicyIds?`: `string`[]; `requiresApproval?`: `boolean`; `requiresCredential?`: `boolean`; `sideEffect?`: `boolean`; \}[]; `outputs?`: \{ `capability`: `string`; `changesWorkflow?`: `boolean`; `description?`: `string`; `exposesSensitiveData?`: `boolean`; `externallyVisible?`: `boolean`; `intent`: `string`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `operationAlias?`: `string`; `providerObject?`: `string`; `requiresApproval?`: `boolean`; `sideEffect?`: `boolean`; \}[]; `providerObjects?`: \{ `description?`: `string`; `kind`: `string`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `schemaName?`: `string`; \}[]; \} |
| `profile.capabilities?` | \{ `audiences?`: (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[]; `capability`: `string`; `changesWorkflow?`: `boolean`; `description?`: `string`; `exposesSensitiveData?`: `boolean`; `extension?`: `boolean`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `providerObjects?`: \{ `description?`: `string`; `kind`: `string`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `schemaName?`: `string`; \}[]; `requiresCredential?`: `boolean`; `sideEffect?`: `boolean`; \}[] |
| `profile.category` | `string` |
| `profile.dataSources?` | \{ `capability`: `string`; `description?`: `string`; `exposesSensitiveData?`: `boolean`; `id`: `string`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `operationAlias?`: `string`; `providerObjects?`: `string`[]; \}[] |
| `profile.description?` | `string` |
| `profile.events?` | \{ `capability?`: `string`; `description?`: `string`; `direction`: `"outbound"` \| `"bidirectional"` \| `"inbound"` \| `"internal"`; `kind`: `string`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `operationAlias?`: `string`; `providerObject?`: `string`; \}[] |
| `profile.id?` | `string` |
| `profile.label?` | `string` |
| `profile.metadata?` | `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\> |
| `profile.notes?` | `string`[] |
| `profile.operations?` | \{ `alias`: `string`; `audience?`: `"customer-facing"` \| `"internal-support"` \| `"mixed"`; `audiences?`: (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[]; `capability`: `string`; `changesWorkflow?`: `boolean`; `description?`: `string`; `exposesSensitiveData?`: `boolean`; `externallyVisible?`: `boolean`; `inputSchema?`: `unknown`; `inputSchemaName?`: `string`; `inputSchemaRef?`: `string`; `label?`: `string`; `level?`: `"optional"` \| `"extension"` \| `"required"` \| `"recommended"`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `outputSchema?`: `unknown`; `outputSchemaName?`: `string`; `outputSchemaRef?`: `string`; `providerObject?`: `string`; `providerObjects?`: \{ `description?`: `string`; `kind`: `string`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `schemaName?`: `string`; \}[]; `requiredPolicyIds?`: `string`[]; `requiresApproval?`: `boolean`; `requiresCredential?`: `boolean`; `sideEffect?`: `boolean`; \}[] |
| `profile.outputs?` | \{ `capability`: `string`; `changesWorkflow?`: `boolean`; `description?`: `string`; `exposesSensitiveData?`: `boolean`; `externallyVisible?`: `boolean`; `intent`: `string`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `operationAlias?`: `string`; `providerObject?`: `string`; `requiresApproval?`: `boolean`; `sideEffect?`: `boolean`; \}[] |
| `profile.providerObjects?` | \{ `description?`: `string`; `kind`: `string`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `schemaName?`: `string`; \}[] |

#### Returns

```ts
{
  capabilities: {
     audiences?: ("customer-facing" | "internal-support" | "mixed")[];
     capability: string;
     changesWorkflow?: boolean;
     description?: string;
     exposesSensitiveData?: boolean;
     extension?: boolean;
     label?: string;
     metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
     providerObjects?: {
        description?: string;
        kind: string;
        label?: string;
        metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        schemaName?: string;
     }[];
     requiresCredential?: boolean;
     sideEffect?: boolean;
  }[];
  category: string;
  dataSources: {
     capability: string;
     description?: string;
     exposesSensitiveData?: boolean;
     id: string;
     label?: string;
     metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
     operationAlias?: string;
     providerObjects: string[];
  }[];
  description?: string;
  events: {
     capability?: string;
     description?: string;
     direction: "outbound" | "bidirectional" | "inbound" | "internal";
     kind: string;
     label?: string;
     metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
     operationAlias?: string;
     providerObject?: string;
  }[];
  id?: string;
  label?: string;
  metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
  notes: string[];
  operations: {
     alias: string;
     audience?: "customer-facing" | "internal-support" | "mixed";
     audiences?: ("customer-facing" | "internal-support" | "mixed")[];
     capability: string;
     changesWorkflow?: boolean;
     description?: string;
     exposesSensitiveData?: boolean;
     externallyVisible?: boolean;
     inputSchema?: unknown;
     inputSchemaName?: string;
     inputSchemaRef?: string;
     label?: string;
     level: "optional" | "extension" | "required" | "recommended";
     metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
     outputSchema?: unknown;
     outputSchemaName?: string;
     outputSchemaRef?: string;
     providerObject?: string;
     providerObjects?: {
        description?: string;
        kind: string;
        label?: string;
        metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        schemaName?: string;
     }[];
     requiredPolicyIds?: string[];
     requiresApproval?: boolean;
     requiresCredential?: boolean;
     sideEffect?: boolean;
  }[];
  outputs: {
     capability: string;
     changesWorkflow?: boolean;
     description?: string;
     exposesSensitiveData?: boolean;
     externallyVisible?: boolean;
     intent: string;
     label?: string;
     metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
     operationAlias?: string;
     providerObject?: string;
     requiresApproval?: boolean;
     sideEffect?: boolean;
  }[];
  providerObjects: {
     description?: string;
     kind: string;
     label?: string;
     metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
     schemaName?: string;
  }[];
}
```

| Name | Type |
| ------ | ------ |
| `capabilities` | \{ `audiences?`: (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[]; `capability`: `string`; `changesWorkflow?`: `boolean`; `description?`: `string`; `exposesSensitiveData?`: `boolean`; `extension?`: `boolean`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `providerObjects?`: \{ `description?`: `string`; `kind`: `string`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `schemaName?`: `string`; \}[]; `requiresCredential?`: `boolean`; `sideEffect?`: `boolean`; \}[] |
| `category` | `string` |
| `dataSources` | \{ `capability`: `string`; `description?`: `string`; `exposesSensitiveData?`: `boolean`; `id`: `string`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `operationAlias?`: `string`; `providerObjects`: `string`[]; \}[] |
| `description?` | `string` |
| `events` | \{ `capability?`: `string`; `description?`: `string`; `direction`: `"outbound"` \| `"bidirectional"` \| `"inbound"` \| `"internal"`; `kind`: `string`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `operationAlias?`: `string`; `providerObject?`: `string`; \}[] |
| `id?` | `string` |
| `label?` | `string` |
| `metadata?` | `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\> |
| `notes` | `string`[] |
| `operations` | \{ `alias`: `string`; `audience?`: `"customer-facing"` \| `"internal-support"` \| `"mixed"`; `audiences?`: (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[]; `capability`: `string`; `changesWorkflow?`: `boolean`; `description?`: `string`; `exposesSensitiveData?`: `boolean`; `externallyVisible?`: `boolean`; `inputSchema?`: `unknown`; `inputSchemaName?`: `string`; `inputSchemaRef?`: `string`; `label?`: `string`; `level`: `"optional"` \| `"extension"` \| `"required"` \| `"recommended"`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `outputSchema?`: `unknown`; `outputSchemaName?`: `string`; `outputSchemaRef?`: `string`; `providerObject?`: `string`; `providerObjects?`: \{ `description?`: `string`; `kind`: `string`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `schemaName?`: `string`; \}[]; `requiredPolicyIds?`: `string`[]; `requiresApproval?`: `boolean`; `requiresCredential?`: `boolean`; `sideEffect?`: `boolean`; \}[] |
| `outputs` | \{ `capability`: `string`; `changesWorkflow?`: `boolean`; `description?`: `string`; `exposesSensitiveData?`: `boolean`; `externallyVisible?`: `boolean`; `intent`: `string`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `operationAlias?`: `string`; `providerObject?`: `string`; `requiresApproval?`: `boolean`; `sideEffect?`: `boolean`; \}[] |
| `providerObjects` | \{ `description?`: `string`; `kind`: `string`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `schemaName?`: `string`; \}[] |

***

### defineProviderPackage()

```ts
function defineProviderPackage(manifest): {
  capabilities: {
     audiences?: ("customer-facing" | "internal-support" | "mixed")[];
     capability: string;
     changesWorkflow?: boolean;
     description?: string;
     exposesSensitiveData?: boolean;
     extension?: boolean;
     label?: string;
     metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
     providerObjects?: {
        description?: string;
        kind: string;
        label?: string;
        metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
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
     metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
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
  metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
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
     metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
     outputSchema?: unknown;
     outputSchemaName?: string;
     outputSchemaRef?: string;
     providerObject?: string;
     providerObjects?: {
        description?: string;
        kind: string;
        label?: string;
        metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
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

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `manifest` | \{ `capabilities`: \{ `audiences?`: (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[]; `capability`: `string`; `changesWorkflow?`: `boolean`; `description?`: `string`; `exposesSensitiveData?`: `boolean`; `extension?`: `boolean`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `providerObjects?`: \{ `description?`: `string`; `kind`: `string`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `schemaName?`: `string`; \}[]; `requiresCredential?`: `boolean`; `sideEffect?`: `boolean`; \}[]; `category`: `string`; `channelAudiences?`: (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[]; `coverage?`: \{ `evidence?`: \{ `label`: `string`; `url?`: `string`; \}[]; `notes?`: `string`[]; `scope?`: \| `"support-workflow-subset"` \| `"provider-api-subset"` \| `"connector-required"` \| `"local-protocol"` \| `"full-provider-api"`; \}; `credentialRequirements?`: \{ `description?`: `string`; `id`: `string`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `required?`: `boolean`; `scopes?`: `string`[]; \}[]; `directions`: ( \| `"receive-only"` \| `"send-only"` \| `"inbound-only"` \| `"outbound-only"` \| `"bidirectional"`)[]; `id`: `string`; `limitations?`: `string`[]; `maintainers?`: \{ `name`: `string`; `type?`: `"community"` \| `"official"` \| `"unknown"` \| `"partner"`; `url?`: `string`; \}[]; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `name`: `string`; `operations?`: \{ `alias`: `string`; `audience?`: `"customer-facing"` \| `"internal-support"` \| `"mixed"`; `audiences?`: (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[]; `capability`: `string`; `changesWorkflow?`: `boolean`; `description?`: `string`; `exposesSensitiveData?`: `boolean`; `extension?`: `boolean`; `externallyVisible?`: `boolean`; `inputSchema?`: `unknown`; `inputSchemaName?`: `string`; `inputSchemaRef?`: `string`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `outputSchema?`: `unknown`; `outputSchemaName?`: `string`; `outputSchemaRef?`: `string`; `providerObject?`: `string`; `providerObjects?`: \{ `description?`: `string`; `kind`: `string`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `schemaName?`: `string`; \}[]; `providerOperation?`: `string`; `requiredPolicyIds?`: `string`[]; `requiresApproval?`: `boolean`; `requiresCredential?`: `boolean`; `sideEffect?`: `boolean`; \}[]; `packageName`: `string`; `privacyNotes?`: `string`[]; `provider`: `string`; `trustLevel?`: `"community"` \| `"official"` \| `"verified"` \| `"experimental"`; \} |
| `manifest.capabilities` | \{ `audiences?`: (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[]; `capability`: `string`; `changesWorkflow?`: `boolean`; `description?`: `string`; `exposesSensitiveData?`: `boolean`; `extension?`: `boolean`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `providerObjects?`: \{ `description?`: `string`; `kind`: `string`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `schemaName?`: `string`; \}[]; `requiresCredential?`: `boolean`; `sideEffect?`: `boolean`; \}[] |
| `manifest.category` | `string` |
| `manifest.channelAudiences?` | (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[] |
| `manifest.coverage?` | \{ `evidence?`: \{ `label`: `string`; `url?`: `string`; \}[]; `notes?`: `string`[]; `scope?`: \| `"support-workflow-subset"` \| `"provider-api-subset"` \| `"connector-required"` \| `"local-protocol"` \| `"full-provider-api"`; \} |
| `manifest.coverage.evidence?` | \{ `label`: `string`; `url?`: `string`; \}[] |
| `manifest.coverage.notes?` | `string`[] |
| `manifest.coverage.scope?` | \| `"support-workflow-subset"` \| `"provider-api-subset"` \| `"connector-required"` \| `"local-protocol"` \| `"full-provider-api"` |
| `manifest.credentialRequirements?` | \{ `description?`: `string`; `id`: `string`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `required?`: `boolean`; `scopes?`: `string`[]; \}[] |
| `manifest.directions` | ( \| `"receive-only"` \| `"send-only"` \| `"inbound-only"` \| `"outbound-only"` \| `"bidirectional"`)[] |
| `manifest.id` | `string` |
| `manifest.limitations?` | `string`[] |
| `manifest.maintainers?` | \{ `name`: `string`; `type?`: `"community"` \| `"official"` \| `"unknown"` \| `"partner"`; `url?`: `string`; \}[] |
| `manifest.metadata?` | `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\> |
| `manifest.name` | `string` |
| `manifest.operations?` | \{ `alias`: `string`; `audience?`: `"customer-facing"` \| `"internal-support"` \| `"mixed"`; `audiences?`: (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[]; `capability`: `string`; `changesWorkflow?`: `boolean`; `description?`: `string`; `exposesSensitiveData?`: `boolean`; `extension?`: `boolean`; `externallyVisible?`: `boolean`; `inputSchema?`: `unknown`; `inputSchemaName?`: `string`; `inputSchemaRef?`: `string`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `outputSchema?`: `unknown`; `outputSchemaName?`: `string`; `outputSchemaRef?`: `string`; `providerObject?`: `string`; `providerObjects?`: \{ `description?`: `string`; `kind`: `string`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `schemaName?`: `string`; \}[]; `providerOperation?`: `string`; `requiredPolicyIds?`: `string`[]; `requiresApproval?`: `boolean`; `requiresCredential?`: `boolean`; `sideEffect?`: `boolean`; \}[] |
| `manifest.packageName` | `string` |
| `manifest.privacyNotes?` | `string`[] |
| `manifest.provider` | `string` |
| `manifest.trustLevel?` | `"community"` \| `"official"` \| `"verified"` \| `"experimental"` |

#### Returns

```ts
{
  capabilities: {
     audiences?: ("customer-facing" | "internal-support" | "mixed")[];
     capability: string;
     changesWorkflow?: boolean;
     description?: string;
     exposesSensitiveData?: boolean;
     extension?: boolean;
     label?: string;
     metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
     providerObjects?: {
        description?: string;
        kind: string;
        label?: string;
        metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
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
     metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
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
  metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
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
     metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
     outputSchema?: unknown;
     outputSchemaName?: string;
     outputSchemaRef?: string;
     providerObject?: string;
     providerObjects?: {
        description?: string;
        kind: string;
        label?: string;
        metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
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
}
```

| Name | Type |
| ------ | ------ |
| `capabilities` | \{ `audiences?`: (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[]; `capability`: `string`; `changesWorkflow?`: `boolean`; `description?`: `string`; `exposesSensitiveData?`: `boolean`; `extension?`: `boolean`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `providerObjects?`: \{ `description?`: `string`; `kind`: `string`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `schemaName?`: `string`; \}[]; `requiresCredential?`: `boolean`; `sideEffect?`: `boolean`; \}[] |
| `category` | `string` |
| `channelAudiences` | (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[] |
| `coverage` | \{ `evidence`: \{ `label`: `string`; `url?`: `string`; \}[]; `notes`: `string`[]; `scope`: \| `"support-workflow-subset"` \| `"provider-api-subset"` \| `"connector-required"` \| `"local-protocol"` \| `"full-provider-api"`; \} |
| `coverage.evidence` | \{ `label`: `string`; `url?`: `string`; \}[] |
| `coverage.notes` | `string`[] |
| `coverage.scope` | \| `"support-workflow-subset"` \| `"provider-api-subset"` \| `"connector-required"` \| `"local-protocol"` \| `"full-provider-api"` |
| `credentialRequirements` | \{ `description?`: `string`; `id`: `string`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `required`: `boolean`; `scopes`: `string`[]; \}[] |
| `directions` | ( \| `"receive-only"` \| `"send-only"` \| `"inbound-only"` \| `"outbound-only"` \| `"bidirectional"`)[] |
| `id` | `string` |
| `limitations` | `string`[] |
| `maintainers` | \{ `name`: `string`; `type`: `"community"` \| `"official"` \| `"unknown"` \| `"partner"`; `url?`: `string`; \}[] |
| `metadata?` | `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\> |
| `name` | `string` |
| `operations` | \{ `alias`: `string`; `audience?`: `"customer-facing"` \| `"internal-support"` \| `"mixed"`; `audiences?`: (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[]; `capability`: `string`; `changesWorkflow?`: `boolean`; `description?`: `string`; `exposesSensitiveData?`: `boolean`; `extension`: `boolean`; `externallyVisible?`: `boolean`; `inputSchema?`: `unknown`; `inputSchemaName?`: `string`; `inputSchemaRef?`: `string`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `outputSchema?`: `unknown`; `outputSchemaName?`: `string`; `outputSchemaRef?`: `string`; `providerObject?`: `string`; `providerObjects?`: \{ `description?`: `string`; `kind`: `string`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `schemaName?`: `string`; \}[]; `providerOperation?`: `string`; `requiredPolicyIds?`: `string`[]; `requiresApproval?`: `boolean`; `requiresCredential?`: `boolean`; `sideEffect?`: `boolean`; \}[] |
| `packageName` | `string` |
| `privacyNotes` | `string`[] |
| `provider` | `string` |
| `trustLevel` | `"community"` \| `"official"` \| `"verified"` \| `"experimental"` |

***

### defineSchedule()

```ts
function defineSchedule<TId, TEvent>(id, options): ScheduleDefinition<TId, TEvent>;
```

#### Type Parameters

| Type Parameter |
| ------ |
| `TId` *extends* `string` |
| `TEvent` *extends* [`JourneyEventDefinition`](#journeyeventdefinition)\<`string`, `ZodType`\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\>\> |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `TId` |
| `options` | `Omit`\<[`ScheduleDefinition`](#scheduledefinition)\<`TId`, `TEvent`\>, `"kind"` \| `"id"`\> |

#### Returns

[`ScheduleDefinition`](#scheduledefinition)\<`TId`, `TEvent`\>

***

### deriveProviderCapabilityCoverage()

```ts
function deriveProviderCapabilityCoverage(input): {
  category: string;
  categoryMatches: boolean;
  conformant: boolean;
  coverage: "full" | "partial" | "standard";
  expectedCategory: string;
  extensionOperations: string[];
  matchedOperations: string[];
  mismatchedOperations: {
     actualCapability?: string;
     actualProviderObject?: string;
     alias: string;
     expectedCapability?: string;
     expectedProviderObject?: string;
     reason: "missing" | "capability-mismatch" | "provider-object-mismatch";
  }[];
  missingOptionalOperations: string[];
  missingRecommendedOperations: string[];
  missingRequiredOperations: string[];
  providerPackageId: string;
};
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | \{ `manifest`: \{ `capabilities`: \{ `audiences?`: (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[]; `capability`: `string`; `changesWorkflow?`: `boolean`; `description?`: `string`; `exposesSensitiveData?`: `boolean`; `extension?`: `boolean`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `providerObjects?`: \{ `description?`: `string`; `kind`: `string`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `schemaName?`: `string`; \}[]; `requiresCredential?`: `boolean`; `sideEffect?`: `boolean`; \}[]; `category`: `string`; `channelAudiences?`: (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[]; `coverage?`: \{ `evidence?`: \{ `label`: `string`; `url?`: `string`; \}[]; `notes?`: `string`[]; `scope?`: \| `"support-workflow-subset"` \| `"provider-api-subset"` \| `"connector-required"` \| `"local-protocol"` \| `"full-provider-api"`; \}; `credentialRequirements?`: \{ `description?`: `string`; `id`: `string`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `required?`: `boolean`; `scopes?`: `string`[]; \}[]; `directions`: ( \| `"receive-only"` \| `"send-only"` \| `"inbound-only"` \| `"outbound-only"` \| `"bidirectional"`)[]; `id`: `string`; `limitations?`: `string`[]; `maintainers?`: \{ `name`: `string`; `type?`: `"community"` \| `"official"` \| `"unknown"` \| `"partner"`; `url?`: `string`; \}[]; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `name`: `string`; `operations?`: \{ `alias`: `string`; `audience?`: `"customer-facing"` \| `"internal-support"` \| `"mixed"`; `audiences?`: (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[]; `capability`: `string`; `changesWorkflow?`: `boolean`; `description?`: `string`; `exposesSensitiveData?`: `boolean`; `extension?`: `boolean`; `externallyVisible?`: `boolean`; `inputSchema?`: `unknown`; `inputSchemaName?`: `string`; `inputSchemaRef?`: `string`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `outputSchema?`: `unknown`; `outputSchemaName?`: `string`; `outputSchemaRef?`: `string`; `providerObject?`: `string`; `providerObjects?`: \{ `description?`: `string`; `kind`: `string`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `schemaName?`: `string`; \}[]; `providerOperation?`: `string`; `requiredPolicyIds?`: `string`[]; `requiresApproval?`: `boolean`; `requiresCredential?`: `boolean`; `sideEffect?`: `boolean`; \}[]; `packageName`: `string`; `privacyNotes?`: `string`[]; `provider`: `string`; `trustLevel?`: `"community"` \| `"official"` \| `"verified"` \| `"experimental"`; \}; `profile`: \{ `capabilities?`: \{ `audiences?`: (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[]; `capability`: `string`; `changesWorkflow?`: `boolean`; `description?`: `string`; `exposesSensitiveData?`: `boolean`; `extension?`: `boolean`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `providerObjects?`: \{ `description?`: `string`; `kind`: `string`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `schemaName?`: `string`; \}[]; `requiresCredential?`: `boolean`; `sideEffect?`: `boolean`; \}[]; `category`: `string`; `dataSources?`: \{ `capability`: `string`; `description?`: `string`; `exposesSensitiveData?`: `boolean`; `id`: `string`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `operationAlias?`: `string`; `providerObjects?`: `string`[]; \}[]; `description?`: `string`; `events?`: \{ `capability?`: `string`; `description?`: `string`; `direction`: `"outbound"` \| `"bidirectional"` \| `"inbound"` \| `"internal"`; `kind`: `string`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `operationAlias?`: `string`; `providerObject?`: `string`; \}[]; `id?`: `string`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `notes?`: `string`[]; `operations?`: \{ `alias`: `string`; `audience?`: `"customer-facing"` \| `"internal-support"` \| `"mixed"`; `audiences?`: (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[]; `capability`: `string`; `changesWorkflow?`: `boolean`; `description?`: `string`; `exposesSensitiveData?`: `boolean`; `externallyVisible?`: `boolean`; `inputSchema?`: `unknown`; `inputSchemaName?`: `string`; `inputSchemaRef?`: `string`; `label?`: `string`; `level?`: `"optional"` \| `"extension"` \| `"required"` \| `"recommended"`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `outputSchema?`: `unknown`; `outputSchemaName?`: `string`; `outputSchemaRef?`: `string`; `providerObject?`: `string`; `providerObjects?`: \{ `description?`: `string`; `kind`: `string`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `schemaName?`: `string`; \}[]; `requiredPolicyIds?`: `string`[]; `requiresApproval?`: `boolean`; `requiresCredential?`: `boolean`; `sideEffect?`: `boolean`; \}[]; `outputs?`: \{ `capability`: `string`; `changesWorkflow?`: `boolean`; `description?`: `string`; `exposesSensitiveData?`: `boolean`; `externallyVisible?`: `boolean`; `intent`: `string`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `operationAlias?`: `string`; `providerObject?`: `string`; `requiresApproval?`: `boolean`; `sideEffect?`: `boolean`; \}[]; `providerObjects?`: \{ `description?`: `string`; `kind`: `string`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `schemaName?`: `string`; \}[]; \}; \} |
| `input.manifest` | \{ `capabilities`: \{ `audiences?`: (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[]; `capability`: `string`; `changesWorkflow?`: `boolean`; `description?`: `string`; `exposesSensitiveData?`: `boolean`; `extension?`: `boolean`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `providerObjects?`: \{ `description?`: `string`; `kind`: `string`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `schemaName?`: `string`; \}[]; `requiresCredential?`: `boolean`; `sideEffect?`: `boolean`; \}[]; `category`: `string`; `channelAudiences?`: (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[]; `coverage?`: \{ `evidence?`: \{ `label`: `string`; `url?`: `string`; \}[]; `notes?`: `string`[]; `scope?`: \| `"support-workflow-subset"` \| `"provider-api-subset"` \| `"connector-required"` \| `"local-protocol"` \| `"full-provider-api"`; \}; `credentialRequirements?`: \{ `description?`: `string`; `id`: `string`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `required?`: `boolean`; `scopes?`: `string`[]; \}[]; `directions`: ( \| `"receive-only"` \| `"send-only"` \| `"inbound-only"` \| `"outbound-only"` \| `"bidirectional"`)[]; `id`: `string`; `limitations?`: `string`[]; `maintainers?`: \{ `name`: `string`; `type?`: `"community"` \| `"official"` \| `"unknown"` \| `"partner"`; `url?`: `string`; \}[]; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `name`: `string`; `operations?`: \{ `alias`: `string`; `audience?`: `"customer-facing"` \| `"internal-support"` \| `"mixed"`; `audiences?`: (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[]; `capability`: `string`; `changesWorkflow?`: `boolean`; `description?`: `string`; `exposesSensitiveData?`: `boolean`; `extension?`: `boolean`; `externallyVisible?`: `boolean`; `inputSchema?`: `unknown`; `inputSchemaName?`: `string`; `inputSchemaRef?`: `string`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `outputSchema?`: `unknown`; `outputSchemaName?`: `string`; `outputSchemaRef?`: `string`; `providerObject?`: `string`; `providerObjects?`: \{ `description?`: `string`; `kind`: `string`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `schemaName?`: `string`; \}[]; `providerOperation?`: `string`; `requiredPolicyIds?`: `string`[]; `requiresApproval?`: `boolean`; `requiresCredential?`: `boolean`; `sideEffect?`: `boolean`; \}[]; `packageName`: `string`; `privacyNotes?`: `string`[]; `provider`: `string`; `trustLevel?`: `"community"` \| `"official"` \| `"verified"` \| `"experimental"`; \} |
| `input.manifest.capabilities` | \{ `audiences?`: (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[]; `capability`: `string`; `changesWorkflow?`: `boolean`; `description?`: `string`; `exposesSensitiveData?`: `boolean`; `extension?`: `boolean`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `providerObjects?`: \{ `description?`: `string`; `kind`: `string`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `schemaName?`: `string`; \}[]; `requiresCredential?`: `boolean`; `sideEffect?`: `boolean`; \}[] |
| `input.manifest.category` | `string` |
| `input.manifest.channelAudiences?` | (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[] |
| `input.manifest.coverage?` | \{ `evidence?`: \{ `label`: `string`; `url?`: `string`; \}[]; `notes?`: `string`[]; `scope?`: \| `"support-workflow-subset"` \| `"provider-api-subset"` \| `"connector-required"` \| `"local-protocol"` \| `"full-provider-api"`; \} |
| `input.manifest.coverage.evidence?` | \{ `label`: `string`; `url?`: `string`; \}[] |
| `input.manifest.coverage.notes?` | `string`[] |
| `input.manifest.coverage.scope?` | \| `"support-workflow-subset"` \| `"provider-api-subset"` \| `"connector-required"` \| `"local-protocol"` \| `"full-provider-api"` |
| `input.manifest.credentialRequirements?` | \{ `description?`: `string`; `id`: `string`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `required?`: `boolean`; `scopes?`: `string`[]; \}[] |
| `input.manifest.directions` | ( \| `"receive-only"` \| `"send-only"` \| `"inbound-only"` \| `"outbound-only"` \| `"bidirectional"`)[] |
| `input.manifest.id` | `string` |
| `input.manifest.limitations?` | `string`[] |
| `input.manifest.maintainers?` | \{ `name`: `string`; `type?`: `"community"` \| `"official"` \| `"unknown"` \| `"partner"`; `url?`: `string`; \}[] |
| `input.manifest.metadata?` | `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\> |
| `input.manifest.name` | `string` |
| `input.manifest.operations?` | \{ `alias`: `string`; `audience?`: `"customer-facing"` \| `"internal-support"` \| `"mixed"`; `audiences?`: (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[]; `capability`: `string`; `changesWorkflow?`: `boolean`; `description?`: `string`; `exposesSensitiveData?`: `boolean`; `extension?`: `boolean`; `externallyVisible?`: `boolean`; `inputSchema?`: `unknown`; `inputSchemaName?`: `string`; `inputSchemaRef?`: `string`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `outputSchema?`: `unknown`; `outputSchemaName?`: `string`; `outputSchemaRef?`: `string`; `providerObject?`: `string`; `providerObjects?`: \{ `description?`: `string`; `kind`: `string`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `schemaName?`: `string`; \}[]; `providerOperation?`: `string`; `requiredPolicyIds?`: `string`[]; `requiresApproval?`: `boolean`; `requiresCredential?`: `boolean`; `sideEffect?`: `boolean`; \}[] |
| `input.manifest.packageName` | `string` |
| `input.manifest.privacyNotes?` | `string`[] |
| `input.manifest.provider` | `string` |
| `input.manifest.trustLevel?` | `"community"` \| `"official"` \| `"verified"` \| `"experimental"` |
| `input.profile` | \{ `capabilities?`: \{ `audiences?`: (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[]; `capability`: `string`; `changesWorkflow?`: `boolean`; `description?`: `string`; `exposesSensitiveData?`: `boolean`; `extension?`: `boolean`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `providerObjects?`: \{ `description?`: `string`; `kind`: `string`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `schemaName?`: `string`; \}[]; `requiresCredential?`: `boolean`; `sideEffect?`: `boolean`; \}[]; `category`: `string`; `dataSources?`: \{ `capability`: `string`; `description?`: `string`; `exposesSensitiveData?`: `boolean`; `id`: `string`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `operationAlias?`: `string`; `providerObjects?`: `string`[]; \}[]; `description?`: `string`; `events?`: \{ `capability?`: `string`; `description?`: `string`; `direction`: `"outbound"` \| `"bidirectional"` \| `"inbound"` \| `"internal"`; `kind`: `string`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `operationAlias?`: `string`; `providerObject?`: `string`; \}[]; `id?`: `string`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `notes?`: `string`[]; `operations?`: \{ `alias`: `string`; `audience?`: `"customer-facing"` \| `"internal-support"` \| `"mixed"`; `audiences?`: (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[]; `capability`: `string`; `changesWorkflow?`: `boolean`; `description?`: `string`; `exposesSensitiveData?`: `boolean`; `externallyVisible?`: `boolean`; `inputSchema?`: `unknown`; `inputSchemaName?`: `string`; `inputSchemaRef?`: `string`; `label?`: `string`; `level?`: `"optional"` \| `"extension"` \| `"required"` \| `"recommended"`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `outputSchema?`: `unknown`; `outputSchemaName?`: `string`; `outputSchemaRef?`: `string`; `providerObject?`: `string`; `providerObjects?`: \{ `description?`: `string`; `kind`: `string`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `schemaName?`: `string`; \}[]; `requiredPolicyIds?`: `string`[]; `requiresApproval?`: `boolean`; `requiresCredential?`: `boolean`; `sideEffect?`: `boolean`; \}[]; `outputs?`: \{ `capability`: `string`; `changesWorkflow?`: `boolean`; `description?`: `string`; `exposesSensitiveData?`: `boolean`; `externallyVisible?`: `boolean`; `intent`: `string`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `operationAlias?`: `string`; `providerObject?`: `string`; `requiresApproval?`: `boolean`; `sideEffect?`: `boolean`; \}[]; `providerObjects?`: \{ `description?`: `string`; `kind`: `string`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `schemaName?`: `string`; \}[]; \} |
| `input.profile.capabilities?` | \{ `audiences?`: (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[]; `capability`: `string`; `changesWorkflow?`: `boolean`; `description?`: `string`; `exposesSensitiveData?`: `boolean`; `extension?`: `boolean`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `providerObjects?`: \{ `description?`: `string`; `kind`: `string`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `schemaName?`: `string`; \}[]; `requiresCredential?`: `boolean`; `sideEffect?`: `boolean`; \}[] |
| `input.profile.category` | `string` |
| `input.profile.dataSources?` | \{ `capability`: `string`; `description?`: `string`; `exposesSensitiveData?`: `boolean`; `id`: `string`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `operationAlias?`: `string`; `providerObjects?`: `string`[]; \}[] |
| `input.profile.description?` | `string` |
| `input.profile.events?` | \{ `capability?`: `string`; `description?`: `string`; `direction`: `"outbound"` \| `"bidirectional"` \| `"inbound"` \| `"internal"`; `kind`: `string`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `operationAlias?`: `string`; `providerObject?`: `string`; \}[] |
| `input.profile.id?` | `string` |
| `input.profile.label?` | `string` |
| `input.profile.metadata?` | `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\> |
| `input.profile.notes?` | `string`[] |
| `input.profile.operations?` | \{ `alias`: `string`; `audience?`: `"customer-facing"` \| `"internal-support"` \| `"mixed"`; `audiences?`: (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[]; `capability`: `string`; `changesWorkflow?`: `boolean`; `description?`: `string`; `exposesSensitiveData?`: `boolean`; `externallyVisible?`: `boolean`; `inputSchema?`: `unknown`; `inputSchemaName?`: `string`; `inputSchemaRef?`: `string`; `label?`: `string`; `level?`: `"optional"` \| `"extension"` \| `"required"` \| `"recommended"`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `outputSchema?`: `unknown`; `outputSchemaName?`: `string`; `outputSchemaRef?`: `string`; `providerObject?`: `string`; `providerObjects?`: \{ `description?`: `string`; `kind`: `string`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `schemaName?`: `string`; \}[]; `requiredPolicyIds?`: `string`[]; `requiresApproval?`: `boolean`; `requiresCredential?`: `boolean`; `sideEffect?`: `boolean`; \}[] |
| `input.profile.outputs?` | \{ `capability`: `string`; `changesWorkflow?`: `boolean`; `description?`: `string`; `exposesSensitiveData?`: `boolean`; `externallyVisible?`: `boolean`; `intent`: `string`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `operationAlias?`: `string`; `providerObject?`: `string`; `requiresApproval?`: `boolean`; `sideEffect?`: `boolean`; \}[] |
| `input.profile.providerObjects?` | \{ `description?`: `string`; `kind`: `string`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `schemaName?`: `string`; \}[] |

#### Returns

```ts
{
  category: string;
  categoryMatches: boolean;
  conformant: boolean;
  coverage: "full" | "partial" | "standard";
  expectedCategory: string;
  extensionOperations: string[];
  matchedOperations: string[];
  mismatchedOperations: {
     actualCapability?: string;
     actualProviderObject?: string;
     alias: string;
     expectedCapability?: string;
     expectedProviderObject?: string;
     reason: "missing" | "capability-mismatch" | "provider-object-mismatch";
  }[];
  missingOptionalOperations: string[];
  missingRecommendedOperations: string[];
  missingRequiredOperations: string[];
  providerPackageId: string;
}
```

| Name | Type |
| ------ | ------ |
| `category` | `string` |
| `categoryMatches` | `boolean` |
| `conformant` | `boolean` |
| `coverage` | `"full"` \| `"partial"` \| `"standard"` |
| `expectedCategory` | `string` |
| `extensionOperations` | `string`[] |
| `matchedOperations` | `string`[] |
| `mismatchedOperations` | \{ `actualCapability?`: `string`; `actualProviderObject?`: `string`; `alias`: `string`; `expectedCapability?`: `string`; `expectedProviderObject?`: `string`; `reason`: `"missing"` \| `"capability-mismatch"` \| `"provider-object-mismatch"`; \}[] |
| `missingOptionalOperations` | `string`[] |
| `missingRecommendedOperations` | `string`[] |
| `missingRequiredOperations` | `string`[] |
| `providerPackageId` | `string` |

***

### evaluateCapabilityUse()

```ts
function evaluateCapabilityUse(input): CapabilityUseDecision;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | \{ `availability?`: \{ `blockers?`: \{ `code`: `string`; `kind?`: \| `"unknown"` \| `"permission-blocked"` \| `"missing-policy"` \| `"missing-configuration"` \| `"missing-credentials"` \| `"provider-unsupported"`; `message`: `string`; \}[]; `capability?`: `string`; `enabledForAgents?`: `string`[]; `enabledForChannels?`: `string`[]; `enabledForJourneys?`: `string`[]; `enabledForTools?`: `string`[]; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `providerPackageId?`: `string`; `status`: \| `"enabled"` \| `"registry-available"` \| `"installed"` \| `"configured"` \| `"blocked"`; \}[]; `channels`: \{ `audience?`: `"customer-facing"` \| `"internal-support"` \| `"mixed"`; `behavior?`: \{ \[`key`: `string`\]: `unknown`; `allowMarkdown?`: `boolean`; `allowWidgets?`: `boolean`; `approval?`: `unknown`; `draftFirst?`: `boolean`; `handoff?`: `unknown`; `maxCharacters?`: `number`; `maxWords?`: `number`; `media?`: `unknown`; `sensitiveData?`: `unknown`; `tone?`: `string`; \}; `channel`: `string`; `channelSetIds?`: `string`[]; `enabled?`: `boolean`; `enabledCapabilities?`: `string`[]; `flowActivations?`: \{ `enabled?`: `boolean`; `journeyId`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `policyIds?`: `string`[]; `providerPackageIds?`: `string`[]; `reason?`: `string`; \}[]; `handoff?`: \{ `destinations?`: `string`[]; `enabled?`: `boolean`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `policyIds?`: `string`[]; `providerPackageIds?`: `string`[]; `sdkControlled?`: `boolean`; \}; `id`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `outbound?`: \{ `enabled?`: `boolean`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `policyIds?`: `string`[]; `providerPackageIds?`: `string`[]; `requiresProviderOutboundSupport?`: `boolean`; \}; `policies?`: `z.ZodDefault`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `providerPackageIds?`: `string`[]; \}[]; `providerPackages?`: \{ `capabilities`: \{ `audiences?`: (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[]; `capability`: `string`; `changesWorkflow?`: `boolean`; `description?`: `string`; `exposesSensitiveData?`: `boolean`; `extension?`: `boolean`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `providerObjects?`: \{ `description?`: `string`; `kind`: `string`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `schemaName?`: `string`; \}[]; `requiresCredential?`: `boolean`; `sideEffect?`: `boolean`; \}[]; `category`: `string`; `channelAudiences?`: (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[]; `coverage?`: \{ `evidence?`: \{ `label`: `string`; `url?`: `string`; \}[]; `notes?`: `string`[]; `scope?`: \| `"support-workflow-subset"` \| `"provider-api-subset"` \| `"connector-required"` \| `"local-protocol"` \| `"full-provider-api"`; \}; `credentialRequirements?`: \{ `description?`: `string`; `id`: `string`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `required?`: `boolean`; `scopes?`: `string`[]; \}[]; `directions`: ( \| `"receive-only"` \| `"send-only"` \| `"inbound-only"` \| `"outbound-only"` \| `"bidirectional"`)[]; `id`: `string`; `limitations?`: `string`[]; `maintainers?`: \{ `name`: `string`; `type?`: `"community"` \| `"official"` \| `"unknown"` \| `"partner"`; `url?`: `string`; \}[]; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `name`: `string`; `operations?`: \{ `alias`: `string`; `audience?`: `"customer-facing"` \| `"internal-support"` \| `"mixed"`; `audiences?`: (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[]; `capability`: `string`; `changesWorkflow?`: `boolean`; `description?`: `string`; `exposesSensitiveData?`: `boolean`; `extension?`: `boolean`; `externallyVisible?`: `boolean`; `inputSchema?`: `unknown`; `inputSchemaName?`: `string`; `inputSchemaRef?`: `string`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `outputSchema?`: `unknown`; `outputSchemaName?`: `string`; `outputSchemaRef?`: `string`; `providerObject?`: `string`; `providerObjects?`: \{ `description?`: `string`; `kind`: `string`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `schemaName?`: `string`; \}[]; `providerOperation?`: `string`; `requiredPolicyIds?`: `string`[]; `requiresApproval?`: `boolean`; `requiresCredential?`: `boolean`; `sideEffect?`: `boolean`; \}[]; `packageName`: `string`; `privacyNotes?`: `string`[]; `provider`: `string`; `trustLevel?`: `"community"` \| `"official"` \| `"verified"` \| `"experimental"`; \}[]; `request`: \{ `actionAudience?`: `"customer-facing"` \| `"internal-support"` \| `"mixed"`; `capability`: `string`; `changesWorkflow?`: `boolean`; `channel`: `string`; `channelId?`: `string`; `exposesSensitiveData?`: `boolean`; `externallyVisible?`: `boolean`; `outbound?`: `boolean`; `providerPackageId?`: `string`; `requiredPolicyIds?`: `string`[]; `sideEffect?`: `boolean`; \}; \} |
| `input.availability?` | \{ `blockers?`: \{ `code`: `string`; `kind?`: \| `"unknown"` \| `"permission-blocked"` \| `"missing-policy"` \| `"missing-configuration"` \| `"missing-credentials"` \| `"provider-unsupported"`; `message`: `string`; \}[]; `capability?`: `string`; `enabledForAgents?`: `string`[]; `enabledForChannels?`: `string`[]; `enabledForJourneys?`: `string`[]; `enabledForTools?`: `string`[]; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `providerPackageId?`: `string`; `status`: \| `"enabled"` \| `"registry-available"` \| `"installed"` \| `"configured"` \| `"blocked"`; \}[] |
| `input.channels` | \{ `audience?`: `"customer-facing"` \| `"internal-support"` \| `"mixed"`; `behavior?`: \{ \[`key`: `string`\]: `unknown`; `allowMarkdown?`: `boolean`; `allowWidgets?`: `boolean`; `approval?`: `unknown`; `draftFirst?`: `boolean`; `handoff?`: `unknown`; `maxCharacters?`: `number`; `maxWords?`: `number`; `media?`: `unknown`; `sensitiveData?`: `unknown`; `tone?`: `string`; \}; `channel`: `string`; `channelSetIds?`: `string`[]; `enabled?`: `boolean`; `enabledCapabilities?`: `string`[]; `flowActivations?`: \{ `enabled?`: `boolean`; `journeyId`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `policyIds?`: `string`[]; `providerPackageIds?`: `string`[]; `reason?`: `string`; \}[]; `handoff?`: \{ `destinations?`: `string`[]; `enabled?`: `boolean`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `policyIds?`: `string`[]; `providerPackageIds?`: `string`[]; `sdkControlled?`: `boolean`; \}; `id`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `outbound?`: \{ `enabled?`: `boolean`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `policyIds?`: `string`[]; `providerPackageIds?`: `string`[]; `requiresProviderOutboundSupport?`: `boolean`; \}; `policies?`: `z.ZodDefault`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `providerPackageIds?`: `string`[]; \}[] |
| `input.providerPackages?` | \{ `capabilities`: \{ `audiences?`: (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[]; `capability`: `string`; `changesWorkflow?`: `boolean`; `description?`: `string`; `exposesSensitiveData?`: `boolean`; `extension?`: `boolean`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `providerObjects?`: \{ `description?`: `string`; `kind`: `string`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `schemaName?`: `string`; \}[]; `requiresCredential?`: `boolean`; `sideEffect?`: `boolean`; \}[]; `category`: `string`; `channelAudiences?`: (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[]; `coverage?`: \{ `evidence?`: \{ `label`: `string`; `url?`: `string`; \}[]; `notes?`: `string`[]; `scope?`: \| `"support-workflow-subset"` \| `"provider-api-subset"` \| `"connector-required"` \| `"local-protocol"` \| `"full-provider-api"`; \}; `credentialRequirements?`: \{ `description?`: `string`; `id`: `string`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `required?`: `boolean`; `scopes?`: `string`[]; \}[]; `directions`: ( \| `"receive-only"` \| `"send-only"` \| `"inbound-only"` \| `"outbound-only"` \| `"bidirectional"`)[]; `id`: `string`; `limitations?`: `string`[]; `maintainers?`: \{ `name`: `string`; `type?`: `"community"` \| `"official"` \| `"unknown"` \| `"partner"`; `url?`: `string`; \}[]; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `name`: `string`; `operations?`: \{ `alias`: `string`; `audience?`: `"customer-facing"` \| `"internal-support"` \| `"mixed"`; `audiences?`: (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[]; `capability`: `string`; `changesWorkflow?`: `boolean`; `description?`: `string`; `exposesSensitiveData?`: `boolean`; `extension?`: `boolean`; `externallyVisible?`: `boolean`; `inputSchema?`: `unknown`; `inputSchemaName?`: `string`; `inputSchemaRef?`: `string`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `outputSchema?`: `unknown`; `outputSchemaName?`: `string`; `outputSchemaRef?`: `string`; `providerObject?`: `string`; `providerObjects?`: \{ `description?`: `string`; `kind`: `string`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `schemaName?`: `string`; \}[]; `providerOperation?`: `string`; `requiredPolicyIds?`: `string`[]; `requiresApproval?`: `boolean`; `requiresCredential?`: `boolean`; `sideEffect?`: `boolean`; \}[]; `packageName`: `string`; `privacyNotes?`: `string`[]; `provider`: `string`; `trustLevel?`: `"community"` \| `"official"` \| `"verified"` \| `"experimental"`; \}[] |
| `input.request` | \{ `actionAudience?`: `"customer-facing"` \| `"internal-support"` \| `"mixed"`; `capability`: `string`; `changesWorkflow?`: `boolean`; `channel`: `string`; `channelId?`: `string`; `exposesSensitiveData?`: `boolean`; `externallyVisible?`: `boolean`; `outbound?`: `boolean`; `providerPackageId?`: `string`; `requiredPolicyIds?`: `string`[]; `sideEffect?`: `boolean`; \} |
| `input.request.actionAudience?` | `"customer-facing"` \| `"internal-support"` \| `"mixed"` |
| `input.request.capability` | `string` |
| `input.request.changesWorkflow?` | `boolean` |
| `input.request.channel` | `string` |
| `input.request.channelId?` | `string` |
| `input.request.exposesSensitiveData?` | `boolean` |
| `input.request.externallyVisible?` | `boolean` |
| `input.request.outbound?` | `boolean` |
| `input.request.providerPackageId?` | `string` |
| `input.request.requiredPolicyIds?` | `string`[] |
| `input.request.sideEffect?` | `boolean` |

#### Returns

[`CapabilityUseDecision`](#capabilityusedecision)

***

### handleChannelEventFromSource()

```ts
function handleChannelEventFromSource<TRaw, TTurn>(
   runtime,
   source,
input): Promise<HandleChannelEventResult<unknown>>;
```

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TRaw` | `unknown` |
| `TTurn` | `unknown` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `runtime` | [`ChannelEventRuntimeReceiver`](#channeleventruntimereceiver) |
| `source` | [`ChannelEventSource`](#channeleventsource)\<`TRaw`\> |
| `input` | [`ChannelEventSourceHandleInput`](#channeleventsourcehandleinput)\<`TRaw`, `TTurn`\> |

#### Returns

`Promise`\<[`HandleChannelEventResult`](#handlechanneleventresult)\<`unknown`\>\>

***

### hashAgentRoutingDefinition()

```ts
function hashAgentRoutingDefinition(agent): string;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `agent` | [`CompiledAgent`](#compiledagent) |

#### Returns

`string`

***

### hashJourneyDefinition()

```ts
function hashJourneyDefinition(journey): string;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `journey` | [`CompiledJourney`](#compiledjourney) |

#### Returns

`string`

***

### isCoreChannelCapability()

```ts
function isCoreChannelCapability(capability): capability is "handoff" | "media" | "receive" | "send" | "draft" | "thread" | "attach" | "schedule" | "cleanup" | "notify" | "transfer" | "artifact" | "create-provider-object" | "read-provider-object" | "update-provider-object" | "delete-provider-object" | "search-provider-object" | "link-provider-object";
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `capability` | `string` |

#### Returns

capability is "handoff" \| "media" \| "receive" \| "send" \| "draft" \| "thread" \| "attach" \| "schedule" \| "cleanup" \| "notify" \| "transfer" \| "artifact" \| "create-provider-object" \| "read-provider-object" \| "update-provider-object" \| "delete-provider-object" \| "search-provider-object" \| "link-provider-object"

***

### journeyEvent()

```ts
function journeyEvent<TName, TPayloadSchema>(name, config): JourneyEventDefinition<TName, TPayloadSchema>;
```

#### Type Parameters

| Type Parameter |
| ------ |
| `TName` *extends* `string` |
| `TPayloadSchema` *extends* `ZodType`\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `TName` |
| `config` | \{ `payload`: `TPayloadSchema`; `routing?`: [`EventRoutingMode`](#eventroutingmode); \} |
| `config.payload` | `TPayloadSchema` |
| `config.routing?` | [`EventRoutingMode`](#eventroutingmode) |

#### Returns

[`JourneyEventDefinition`](#journeyeventdefinition)\<`TName`, `TPayloadSchema`\>

***

### journeyFragment()

```ts
function journeyFragment<TName, TContextSchema>(name, options): JourneyFragment<TName, TContextSchema>;
```

#### Type Parameters

| Type Parameter |
| ------ |
| `TName` *extends* `string` |
| `TContextSchema` *extends* [`ObjectSchema`](#objectschema) |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `TName` |
| `options` | [`JourneyFragmentOptions`](#journeyfragmentoptions)\<`TContextSchema`\> |

#### Returns

[`JourneyFragment`](#journeyfragment)\<`TName`, `TContextSchema`\>

***

### knowledgeSource()

```ts
function knowledgeSource<TName, TQuerySchema, TMetadataSchema>(name, config): {
  kind: "knowledgeSource";
  metadata: TMetadataSchema;
  name: TName;
  query: TQuerySchema;
  retrieve: (input) => Promise<{
     items: KnowledgeItem<output<TMetadataSchema>>[];
  }>;
};
```

#### Type Parameters

| Type Parameter |
| ------ |
| `TName` *extends* `string` |
| `TQuerySchema` *extends* `ZodType`\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> |
| `TMetadataSchema` *extends* `ZodType`\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `TName` |
| `config` | `Omit`\<[`KnowledgeSource`](#knowledgesource)\<`TName`, `TQuerySchema`, `TMetadataSchema`\>, `"kind"` \| `"name"`\> |

#### Returns

```ts
{
  kind: "knowledgeSource";
  metadata: TMetadataSchema;
  name: TName;
  query: TQuerySchema;
  retrieve: (input) => Promise<{
     items: KnowledgeItem<output<TMetadataSchema>>[];
  }>;
}
```

| Name | Type |
| ------ | ------ |
| `kind` | `"knowledgeSource"` |
| `metadata` | `TMetadataSchema` |
| `name` | `TName` |
| `query` | `TQuerySchema` |
| `retrieve()` | (`input`) => `Promise`\<\{ `items`: [`KnowledgeItem`](#knowledgeitem)\<`output`\<`TMetadataSchema`\>\>[]; \}\> |

***

### normalizeEmailAttachmentMetadata()

```ts
function normalizeEmailAttachmentMetadata(input): EmailAttachmentMetadata;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`EmailAttachmentMetadataInput`](#emailattachmentmetadatainput) |

#### Returns

[`EmailAttachmentMetadata`](#emailattachmentmetadata)

***

### recordRuntimeEventMetric()

```ts
function recordRuntimeEventMetric(options, attributes?): void;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | `TelemetryOptionsCarrier` |
| `attributes?` | `Attributes` |

#### Returns

`void`

***

### resolveScheduleDueAt()

```ts
function resolveScheduleDueAt(trigger, now?): Date;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `trigger` | [`ScheduleTrigger`](#scheduletrigger) |
| `now?` | `Date` |

#### Returns

`Date`

***

### runtimeLogger()

```ts
function runtimeLogger(options, context?): Pick<pino.Logger, "error" | "trace" | "debug" | "info" | "warn" | "child">;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`RuntimeOptions`](#runtimeoptions) |
| `context?` | [`RuntimeLogContext`](#runtimelogcontext) |

#### Returns

`Pick`\<`pino.Logger`, `"error"` \| `"trace"` \| `"debug"` \| `"info"` \| `"warn"` \| `"child"`\>

***

### selectJourneyCandidates()

```ts
function selectJourneyCandidates<TApp, TConversation, TTurn>(options): Promise<JourneyCandidate[]>;
```

#### Type Parameters

| Type Parameter |
| ------ |
| `TApp` |
| `TConversation` |
| `TTurn` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`SelectJourneyCandidatesOptions`](#selectjourneycandidatesoptions)\<`TApp`, `TConversation`, `TTurn`\> |

#### Returns

`Promise`\<[`JourneyCandidate`](#journeycandidate)[]\>

***

### telemetryContentMode()

```ts
function telemetryContentMode(options): TelemetryContentMode;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | `TelemetryOptionsCarrier` |

#### Returns

[`TelemetryContentMode`](#telemetrycontentmode)

***

### telemetryEnabled()

```ts
function telemetryEnabled(options): boolean;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | `TelemetryOptionsCarrier` |

#### Returns

`boolean`

***

### tool()

```ts
function tool<TName, TInputSchema, TOutputSchema, TSideEffect>(name, config): ToolDefinition<TName, TInputSchema, TOutputSchema, TSideEffect>;
```

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TName` *extends* `string` | - |
| `TInputSchema` *extends* `ZodType`\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> | - |
| `TOutputSchema` *extends* `ZodType`\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> | - |
| `TSideEffect` *extends* `boolean` | `false` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `TName` |
| `config` | \{ `description?`: `string`; `execute`: (`context`) => `Promise`\<`output`\<`TOutputSchema`\>\>; `idempotencyKey?`: (`args`) => `string`; `input`: `TInputSchema`; `output`: `TOutputSchema`; `policy?`: [`ToolPolicyOptions`](#toolpolicyoptions); `sideEffect?`: `TSideEffect`; \} |
| `config.description?` | `string` |
| `config.execute` | (`context`) => `Promise`\<`output`\<`TOutputSchema`\>\> |
| `config.idempotencyKey?` | (`args`) => `string` |
| `config.input` | `TInputSchema` |
| `config.output` | `TOutputSchema` |
| `config.policy?` | [`ToolPolicyOptions`](#toolpolicyoptions) |
| `config.sideEffect?` | `TSideEffect` |

#### Returns

[`ToolDefinition`](#tooldefinition)\<`TName`, `TInputSchema`, `TOutputSchema`, `TSideEffect`\>

***

### trimEmailQuote()

```ts
function trimEmailQuote(input, options?): EmailQuoteTrimResult;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | `string` |
| `options?` | [`EmailQuoteTrimOptions`](#emailquotetrimoptions) |

#### Returns

[`EmailQuoteTrimResult`](#emailquotetrimresult)

***

### validateJourneyIndex()

```ts
function validateJourneyIndex(
   agent,
   index,
   options?): JourneyIndexValidationResult;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `agent` | [`CompiledAgent`](#compiledagent) |
| `index` | \{ `agentId`: `string`; `definitionHash`: `string`; `embeddingModel`: `string`; `embeddingProvider`: `string`; `entries`: \{ `alwaysInclude`: `boolean`; `condition`: `string`; `definitionHash`: `string`; `embedding`: \{ `dimensions`: `number`; `model`: `string`; `vector`: `number`[]; \}; `examples`: `string`[]; `journeyId`: `string`; `kind`: `"stateMachine"` \| `"delegation"`; `priority`: `number`; `routingText`: `string`; `stickiness`: `"low"` \| `"medium"` \| `"high"`; `tags`: `string`[]; \}[]; `generatedAt`: `string`; `projectionVersion`: `"cognidesk.journey-index.v1"`; \} |
| `index.agentId` | `string` |
| `index.definitionHash?` | `string` |
| `index.embeddingModel?` | `string` |
| `index.embeddingProvider?` | `string` |
| `index.entries?` | \{ `alwaysInclude`: `boolean`; `condition`: `string`; `definitionHash`: `string`; `embedding`: \{ `dimensions`: `number`; `model`: `string`; `vector`: `number`[]; \}; `examples`: `string`[]; `journeyId`: `string`; `kind`: `"stateMachine"` \| `"delegation"`; `priority`: `number`; `routingText`: `string`; `stickiness`: `"low"` \| `"medium"` \| `"high"`; `tags`: `string`[]; \}[] |
| `index.generatedAt?` | `string` |
| `index.projectionVersion?` | `"cognidesk.journey-index.v1"` |
| `options?` | [`ValidateJourneyIndexOptions`](#validatejourneyindexoptions) |

#### Returns

[`JourneyIndexValidationResult`](#journeyindexvalidationresult)

***

### widget()

```ts
function widget<TKind, TInputSchema, TOutputSchema>(kind, config): WidgetDefinition<TKind, TInputSchema, TOutputSchema>;
```

#### Type Parameters

| Type Parameter |
| ------ |
| `TKind` *extends* `string` |
| `TInputSchema` *extends* `ZodType`\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> |
| `TOutputSchema` *extends* `ZodType`\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `kind` | `TKind` |
| `config` | \{ `input`: `TInputSchema`; `output`: `TOutputSchema`; \} |
| `config.input` | `TInputSchema` |
| `config.output` | `TOutputSchema` |

#### Returns

[`WidgetDefinition`](#widgetdefinition)\<`TKind`, `TInputSchema`, `TOutputSchema`\>

***

### widgetPrompt()

```ts
function widgetPrompt<TWidget>(widgetDefinition, input): WidgetPromptDefinition<TWidget>;
```

#### Type Parameters

| Type Parameter |
| ------ |
| `TWidget` *extends* [`WidgetDefinition`](#widgetdefinition)\<`string`, `ZodType`\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\>, `ZodType`\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\>\> |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `widgetDefinition` | `TWidget` |
| `input` | `output`\<`TWidget`\[`"input"`\]\> |

#### Returns

[`WidgetPromptDefinition`](#widgetpromptdefinition)\<`TWidget`\>

***

### withTelemetrySpan()

```ts
function withTelemetrySpan<T>(
   options,
   spanOptions,
run): Promise<T>;
```

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | `TelemetryOptionsCarrier` |
| `spanOptions` | [`TelemetrySpanOptions`](#telemetryspanoptions) |
| `run` | (`span`) => `MaybePromise$2`\<`T`\> |

#### Returns

`Promise`\<`T`\>
