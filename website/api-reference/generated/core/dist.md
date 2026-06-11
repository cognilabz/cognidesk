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
| `TEvent` *extends* [`RuntimeEventInput`](#runtimeeventinput)\< \| `"error"` \| `"message.started"` \| `"message.delta"` \| `"message.completed"` \| `"message.aborted"` \| `"voice.segment.started"` \| `"voice.segment.ended"` \| `"voice.connection.failed"` \| `"voice.interrupted"` \| `"voice.recording.started"` \| `"voice.recording.completed"` \| `"voice.transcript.committed"` \| `"journey.candidates.retrieved"` \| `"journey.matched"` \| `"journey.activated"` \| `"journey.completed"` \| `"journey.guard.denied"` \| `"journey.event.emitted"` \| `"journey.state.entered"` \| `"journey.extraction.proposed"` \| `"journey.extraction.accepted"` \| `"action.started"` \| `"action.completed"` \| `"tool.started"` \| `"tool.completed"` \| `"knowledge.retrieved"` \| `"ui.prompted"` \| `"ui.submitted"` \| `"conversation.compaction.started"` \| `"conversation.compaction.completed"` \| `"handoff.requested"` \| `"handoff.resumed"` \| `"conversation.closed"` \| `` `custom.${string}` ``\> |

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

[`StateReference`](#statereference).[`id`](#id-19)

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

### AgentOptions

#### Properties

##### behavior?

```ts
optional behavior?: AgentBehaviorOptions;
```

##### instructions

```ts
instructions: string;
```

##### logLevel?

```ts
optional logLevel?: AgentLogLevel;
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

[`CommitVoiceTranscriptInput`](#commitvoicetranscriptinput).[`conversationId`](#conversationid)

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

[`CommitVoiceTranscriptInput`](#commitvoicetranscriptinput).[`metadata`](#metadata)

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

[`CommitVoiceTranscriptInput`](#commitvoicetranscriptinput).[`text`](#text)

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

##### customEvents

```ts
customEvents: AnyCustomRuntimeEvent[];
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

[`CreateConversationInput`](#createconversationinput).[`agentId`](#agentid-1)

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

[`CreateConversationInput`](#createconversationinput).[`id`](#id-8)

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

### HandleUserMessageInput

#### Extended by

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
optional assistantMessageMode?: "none" | "canonical" | "intermediate";
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

[`HandleUserMessageInput`](#handleusermessageinput).[`app`](#app-1)

##### assistantMessageMode?

```ts
optional assistantMessageMode?: "none" | "canonical" | "intermediate";
```

###### Inherited from

[`HandleUserMessageInput`](#handleusermessageinput).[`assistantMessageMode`](#assistantmessagemode)

##### channel?

```ts
optional channel?: ConversationChannel;
```

###### Inherited from

[`HandleUserMessageInput`](#handleusermessageinput).[`channel`](#channel)

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

[`HandleUserMessageInput`](#handleusermessageinput).[`conversationId`](#conversationid-7)

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

[`HandleUserMessageInput`](#handleusermessageinput).[`recordUserMessage`](#recordusermessage)

##### signal?

```ts
optional signal?: AbortSignal;
```

###### Inherited from

[`HandleUserMessageInput`](#handleusermessageinput).[`signal`](#signal-5)

##### startedAtMs?

```ts
optional startedAtMs?: number;
```

##### text

```ts
text: string;
```

###### Inherited from

[`HandleUserMessageInput`](#handleusermessageinput).[`text`](#text-5)

##### transcriptionSource?

```ts
optional transcriptionSource?: string;
```

##### turn?

```ts
optional turn?: TTurn;
```

###### Inherited from

[`HandleUserMessageInput`](#handleusermessageinput).[`turn`](#turn-1)

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

[`HandleUserMessageInput`](#handleusermessageinput).[`onAssistantTextDelta`](#onassistanttextdelta)

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

[`HandleUserMessageResult`](#handleusermessageresult).[`activeJourneyId`](#activejourneyid)

##### conversation

```ts
conversation: ConversationRecord;
```

###### Inherited from

[`HandleUserMessageResult`](#handleusermessageresult).[`conversation`](#conversation-1)

##### events

```ts
events: RuntimeEvent[];
```

###### Inherited from

[`HandleUserMessageResult`](#handleusermessageresult).[`events`](#events-4)

##### snapshot

```ts
snapshot: RuntimeSnapshot;
```

###### Inherited from

[`HandleUserMessageResult`](#handleusermessageresult).[`snapshot`](#snapshot-2)

##### text

```ts
text: string;
```

###### Inherited from

[`HandleUserMessageResult`](#handleusermessageresult).[`text`](#text-6)

##### voiceEvents

```ts
voiceEvents: RuntimeEvent[];
```

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
role: "user" | "assistant" | "system" | "tool";
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

##### redactRuntimeEvent()?

```ts
optional redactRuntimeEvent(input): MaybePromise<RuntimeEventInput<
  | "error"
  | "message.started"
  | "message.delta"
  | "message.completed"
  | "message.aborted"
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
  | "knowledge.retrieved"
  | "ui.prompted"
  | "ui.submitted"
  | "conversation.compaction.started"
  | "conversation.compaction.completed"
  | "handoff.requested"
  | "handoff.resumed"
  | "conversation.closed"
| `custom.${string}`>>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`PrivacyHookContext`](#privacyhookcontext) & \{ `event`: [`RuntimeEventInput`](#runtimeeventinput); \} |

###### Returns

`MaybePromise`\<[`RuntimeEventInput`](#runtimeeventinput)\<
  \| `"error"`
  \| `"message.started"`
  \| `"message.delta"`
  \| `"message.completed"`
  \| `"message.aborted"`
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
  \| `"knowledge.retrieved"`
  \| `"ui.prompted"`
  \| `"ui.submitted"`
  \| `"conversation.compaction.started"`
  \| `"conversation.compaction.completed"`
  \| `"handoff.requested"`
  \| `"handoff.resumed"`
  \| `"conversation.closed"`
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
optional source?: "userSpeech" | "adapter" | "provider";
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
| `TEvent` *extends* [`RuntimeEventInput`](#runtimeeventinput)\< \| `"error"` \| `"message.started"` \| `"message.delta"` \| `"message.completed"` \| `"message.aborted"` \| `"voice.segment.started"` \| `"voice.segment.ended"` \| `"voice.connection.failed"` \| `"voice.interrupted"` \| `"voice.recording.started"` \| `"voice.recording.completed"` \| `"voice.transcript.committed"` \| `"journey.candidates.retrieved"` \| `"journey.matched"` \| `"journey.activated"` \| `"journey.completed"` \| `"journey.guard.denied"` \| `"journey.event.emitted"` \| `"journey.state.entered"` \| `"journey.extraction.proposed"` \| `"journey.extraction.accepted"` \| `"action.started"` \| `"action.completed"` \| `"tool.started"` \| `"tool.completed"` \| `"knowledge.retrieved"` \| `"ui.prompted"` \| `"ui.submitted"` \| `"conversation.compaction.started"` \| `"conversation.compaction.completed"` \| `"handoff.requested"` \| `"handoff.resumed"` \| `"conversation.closed"` \| `` `custom.${string}` ``\> |

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
optional toolChoice?: "none" | "auto" | "required";
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
type ConversationChannel = "chat" | "voice";
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
  | RuntimeEventBase<"message.aborted", {
  partialText?: string;
  reason: string;
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
  error?: string;
  journeyId?: string;
  result?: unknown;
  stateId?: string;
  success: boolean;
  toolName: string;
}>
  | RuntimeEventBase<"knowledge.retrieved", {
  itemIds: string[];
  sourceName: string;
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
}>
  | RuntimeEventBase<"handoff.resumed", {
  payload?: unknown;
  reason?: string;
}>
  | RuntimeEventBase<"conversation.closed", {
  reason?: string;
}>
  | RuntimeEventBase<"error", {
  code: string;
  details?: unknown;
  message: string;
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
| `config` | \{ `description?`: `string`; `execute`: (`context`) => `Promise`\<`output`\<`TOutputSchema`\>\>; `idempotencyKey?`: (`args`) => `string`; `input`: `TInputSchema`; `output`: `TOutputSchema`; `sideEffect?`: `TSideEffect`; \} |
| `config.description?` | `string` |
| `config.execute` | (`context`) => `Promise`\<`output`\<`TOutputSchema`\>\> |
| `config.idempotencyKey?` | (`args`) => `string` |
| `config.input` | `TInputSchema` |
| `config.output` | `TOutputSchema` |
| `config.sideEffect?` | `TSideEffect` |

#### Returns

[`ToolDefinition`](#tooldefinition)\<`TName`, `TInputSchema`, `TOutputSchema`, `TSideEffect`\>

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
