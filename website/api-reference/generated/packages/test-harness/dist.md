# packages/test-harness/dist

## Classes

### CognideskTestHarness

#### Constructors

##### Constructor

```ts
new CognideskTestHarness(options): CognideskTestHarness;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`TestHarnessOptions`](#testharnessoptions) |

###### Returns

[`CognideskTestHarness`](#cognidesktestharness)

#### Methods

##### runScenario()

```ts
runScenario(scenario): Promise<ScenarioResult>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `scenario` | [`HarnessScenario`](#harnessscenario) |

###### Returns

`Promise`\<[`ScenarioResult`](#scenarioresult)\>

## Interfaces

### AssertionResult

#### Properties

##### assertionId

```ts
assertionId: string;
```

##### passed

```ts
passed: boolean;
```

##### reasoning

```ts
reasoning: string;
```

***

### CriterionJudgement

#### Properties

##### criterionId

```ts
criterionId: string;
```

##### passed

```ts
passed: boolean;
```

##### reasoning

```ts
reasoning: string;
```

##### score

```ts
score: number;
```

***

### EvaluationCriterion

#### Properties

##### description

```ts
description: string;
```

##### id

```ts
id: string;
```

##### threshold?

```ts
optional threshold?: number;
```

##### weight?

```ts
optional weight?: number;
```

***

### HarnessAgentClient

#### Methods

##### createConversation()

```ts
createConversation(input): Promise<{
  id: string;
}>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`CreateRuntimeConversationInput`](../core/dist.md#createruntimeconversationinput) |

###### Returns

`Promise`\<\{
  `id`: `string`;
\}\>

##### sendMessage()

```ts
sendMessage(input): Promise<Pick<HandleUserMessageResult, "text" | "events" | "activeJourneyId">>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | \{ `conversationId`: `string`; `signal?`: `AbortSignal`; `text`: `string`; `turn?`: `unknown`; \} |
| `input.conversationId` | `string` |
| `input.signal?` | `AbortSignal` |
| `input.text` | `string` |
| `input.turn?` | `unknown` |

###### Returns

`Promise`\<`Pick`\<[`HandleUserMessageResult`](../core/dist.md#handleusermessageresult), `"text"` \| `"events"` \| `"activeJourneyId"`\>\>

##### submitWidget()?

```ts
optional submitWidget(input): Promise<{
  event: RuntimeEvent;
  events?: RuntimeEvent[];
}>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | \{ `conversationId`: `string`; `output`: `unknown`; `promptId`: `string`; `signal?`: `AbortSignal`; `widgetKind`: `string`; \} |
| `input.conversationId` | `string` |
| `input.output` | `unknown` |
| `input.promptId` | `string` |
| `input.signal?` | `AbortSignal` |
| `input.widgetKind` | `string` |

###### Returns

`Promise`\<\{
  `event`: [`RuntimeEvent`](../core/dist.md#runtimeevent);
  `events?`: [`RuntimeEvent`](../core/dist.md#runtimeevent)[];
\}\>

***

### HarnessScenario

#### Properties

##### agentId

```ts
agentId: string;
```

##### assertions?

```ts
optional assertions?: ScenarioAssertion[];
```

##### channel?

```ts
optional channel?: ConversationChannelInput;
```

##### context?

```ts
optional context?: unknown;
```

##### criteria?

```ts
optional criteria?: EvaluationCriterion[];
```

##### description?

```ts
optional description?: string;
```

##### id

```ts
id: string;
```

##### judge?

```ts
optional judge?: {
  instructions?: string;
  threshold?: number;
};
```

###### instructions?

```ts
optional instructions?: string;
```

###### threshold?

```ts
optional threshold?: number;
```

##### maxTurns?

```ts
optional maxTurns?: number;
```

##### name?

```ts
optional name?: string;
```

##### timeoutMs?

```ts
optional timeoutMs?: number;
```

##### user

```ts
user: SimulatedUserDefinition;
```

***

### ScenarioAssertionInput

#### Properties

##### activeJourneyIds

```ts
activeJourneyIds: string[];
```

##### conversationId

```ts
conversationId: string;
```

##### events

```ts
events: RuntimeEvent[];
```

##### scenario

```ts
scenario: HarnessScenario;
```

##### transcript

```ts
transcript: TranscriptTurn[];
```

***

### ScenarioResult

#### Properties

##### assertions

```ts
assertions: AssertionResult[];
```

##### conversationId

```ts
conversationId: string;
```

##### error?

```ts
optional error?: string;
```

##### events

```ts
events: RuntimeEvent[];
```

##### judgements

```ts
judgements: CriterionJudgement[];
```

##### passed

```ts
passed: boolean;
```

##### scenarioId

```ts
scenarioId: string;
```

##### score

```ts
score: number;
```

##### status

```ts
status: "error" | "failed" | "passed";
```

##### transcript

```ts
transcript: TranscriptTurn[];
```

***

### SimulatedUserDefinition

#### Properties

##### background?

```ts
optional background?: string;
```

##### goal

```ts
goal: string;
```

##### identity

```ts
identity: string;
```

##### scriptedTurns?

```ts
optional scriptedTurns?: ScriptedUserTurn[];
```

##### stopWhen?

```ts
optional stopWhen?: string;
```

***

### TestHarnessOptions

#### Properties

##### client

```ts
client: HarnessAgentClient;
```

##### judgeModel?

```ts
optional judgeModel?: ModelAdapter;
```

##### privacy?

```ts
optional privacy?: {
  redactEvents?:   | RuntimeEvent[]
     | Promise<RuntimeEvent[]>;
  redactTranscript?:   | TranscriptTurn[]
     | Promise<TranscriptTurn[]>;
};
```

###### redactEvents()?

```ts
optional redactEvents(input):
  | RuntimeEvent[]
| Promise<RuntimeEvent[]>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | \{ `events`: [`RuntimeEvent`](../core/dist.md#runtimeevent)[]; `scenario`: [`HarnessScenario`](#harnessscenario); \} |
| `input.events` | [`RuntimeEvent`](../core/dist.md#runtimeevent)[] |
| `input.scenario` | [`HarnessScenario`](#harnessscenario) |

###### Returns

  \| [`RuntimeEvent`](../core/dist.md#runtimeevent)[]
  \| `Promise`\<[`RuntimeEvent`](../core/dist.md#runtimeevent)[]\>

###### redactTranscript()?

```ts
optional redactTranscript(input):
  | TranscriptTurn[]
| Promise<TranscriptTurn[]>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | \{ `scenario`: [`HarnessScenario`](#harnessscenario); `transcript`: [`TranscriptTurn`](#transcriptturn)[]; \} |
| `input.scenario` | [`HarnessScenario`](#harnessscenario) |
| `input.transcript` | [`TranscriptTurn`](#transcriptturn)[] |

###### Returns

  \| [`TranscriptTurn`](#transcriptturn)[]
  \| `Promise`\<[`TranscriptTurn`](#transcriptturn)[]\>

##### simulatedUserModel?

```ts
optional simulatedUserModel?: ModelAdapter;
```

##### timeoutMs?

```ts
optional timeoutMs?: number;
```

***

### TranscriptTurn

#### Properties

##### content

```ts
content: string;
```

##### role

```ts
role: "user" | "assistant";
```

## Type Aliases

### ScenarioAssertion

```ts
type ScenarioAssertion =
  | {
  caseSensitive?: boolean;
  id: string;
  text: string;
  type: "assistantContains";
}
  | {
  id: string;
  journeyId: string;
  type: "journeyActivated";
}
  | {
  eventType: RuntimeEvent["type"];
  id: string;
  type: "eventEmitted";
}
  | {
  eventType: RuntimeEvent["type"];
  expected: Record<string, unknown>;
  id: string;
  type: "eventPayloadMatches";
}
  | {
  code?: string;
  id: string;
  toolName?: string;
  type: "policyBlocked";
}
  | {
  id: string;
  toolName: string;
  type: "toolCalled";
}
  | {
  id: string;
  toolName: string;
  type: "toolNotCalled";
}
  | {
  id: string;
  maxWords: number;
  type: "assistantMaxWords";
}
  | {
  id: string;
  maxCharacters: number;
  type: "assistantMaxCharacters";
}
  | {
  description?: string;
  evaluate: (input) => MaybePromise<
     | boolean
     | {
     passed: boolean;
     reasoning?: string;
  }>;
  id: string;
  type: "custom";
};
```

***

### ScriptedUserTurn

```ts
type ScriptedUserTurn =
  | string
  | {
  text: string;
  type: "message";
}
  | {
  output: unknown;
  promptId?: string;
  type: "widget";
  widgetKind?: string;
};
```

## Functions

### createTestHarness()

```ts
function createTestHarness(options): CognideskTestHarness;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`TestHarnessOptions`](#testharnessoptions) |

#### Returns

[`CognideskTestHarness`](#cognidesktestharness)

***

### runtimeHarnessClient()

```ts
function runtimeHarnessClient(runtime): HarnessAgentClient;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `runtime` | [`CognideskRuntime`](../core/dist.md#cognideskruntime) |

#### Returns

[`HarnessAgentClient`](#harnessagentclient)

## References

### CategoryOperationDeclaration

Re-exports [CategoryOperationDeclaration](dist/providers.md#categoryoperationdeclaration)

***

### CategoryOperationLevel

Re-exports [CategoryOperationLevel](dist/providers.md#categoryoperationlevel)

***

### deriveProviderCategoryCoverage

Re-exports [deriveProviderCategoryCoverage](dist/providers.md#deriveprovidercategorycoverage)

***

### IntegrationCategoryProfile

Re-exports [IntegrationCategoryProfile](dist/providers.md#integrationcategoryprofile)

***

### ProviderCategoryCoverage

Re-exports [ProviderCategoryCoverage](dist/providers.md#providercategorycoverage)

***

### ProviderCategoryCoverageLevel

Re-exports [ProviderCategoryCoverageLevel](dist/providers.md#providercategorycoveragelevel)

***

### ProviderConformanceCheckResult

Re-exports [ProviderConformanceCheckResult](dist/providers.md#providerconformancecheckresult)

***

### ProviderConformanceInput

Re-exports [ProviderConformanceInput](dist/providers.md#providerconformanceinput)

***

### ProviderConformanceResult

Re-exports [ProviderConformanceResult](dist/providers.md#providerconformanceresult)

***

### ProviderConformanceStatus

Re-exports [ProviderConformanceStatus](dist/providers.md#providerconformancestatus)

***

### ProviderLiveCheck

Re-exports [ProviderLiveCheck](dist/providers.md#providerlivecheck)

***

### ProviderLiveCheckContext

Re-exports [ProviderLiveCheckContext](dist/providers.md#providerlivecheckcontext)

***

### runProviderConformance

Re-exports [runProviderConformance](dist/providers.md#runproviderconformance)
