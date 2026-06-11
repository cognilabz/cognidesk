# model/dist

## Interfaces

### BundledPromptProfile

#### Properties

##### metadata

```ts
metadata: PromptProfileMetadata;
```

##### templates

```ts
templates: PromptTemplateMap;
```

***

### CognideskEmbeddingModelOptions

#### Properties

##### headers?

```ts
optional headers?: Record<string, string>;
```

##### model

```ts
model: EmbeddingModel;
```

##### modelId?

```ts
optional modelId?: string;
```

##### providerId?

```ts
optional providerId?: string;
```

##### providerOptions?

```ts
optional providerOptions?: unknown;
```

***

### CognideskModelOptions

#### Properties

##### headers?

```ts
optional headers?: Record<string, string>;
```

##### logicalModelSlug?

```ts
optional logicalModelSlug?: string;
```

##### maxOutputTokens?

```ts
optional maxOutputTokens?: number;
```

##### model

```ts
model: LanguageModel;
```

##### modelId?

```ts
optional modelId?: string;
```

##### modelProfiles?

```ts
optional modelProfiles?: ModelProfileRegistration[];
```

##### promptOverrideBaseDir?

```ts
optional promptOverrideBaseDir?: string;
```

##### promptOverrides?

```ts
optional promptOverrides?: PromptOverrideRegistry;
```

##### promptProfile?

```ts
optional promptProfile?: ModelPromptProfile;
```

##### providerId?

```ts
optional providerId?: string;
```

##### providerOptions?

```ts
optional providerOptions?: unknown;
```

##### temperature?

```ts
optional temperature?: number;
```

***

### CreateModelSetOptions

#### Properties

##### modelProfiles?

```ts
optional modelProfiles?: ModelProfileRegistration[];
```

##### promptOverrideBaseDir?

```ts
optional promptOverrideBaseDir?: string;
```

##### promptOverrides?

```ts
optional promptOverrides?: PromptOverrideRegistry;
```

***

### ModelProfileRegistration

#### Properties

##### aliases?

```ts
optional aliases?: string[];
```

##### slug

```ts
slug: string;
```

***

### PromptProfileMetadata

#### Properties

##### displayName

```ts
displayName: string;
```

##### researchBasis

```ts
researchBasis: PromptResearchBasis[];
```

##### slug

```ts
slug: string;
```

##### taskNotes

```ts
taskNotes: Partial<Record<PromptTask, string>>;
```

***

### PromptProfileOptions

#### Properties

##### baseDir?

```ts
optional baseDir?: string;
```

##### logicalModelSlug?

```ts
optional logicalModelSlug?: string;
```

##### modelProfiles?

```ts
optional modelProfiles?: ModelProfileRegistration[];
```

##### promptOverrides?

```ts
optional promptOverrides?: PromptOverrideRegistry;
```

##### providerModelId?

```ts
optional providerModelId?: string;
```

***

### PromptResearchBasis

#### Properties

##### note

```ts
note: string;
```

##### source

```ts
source: string;
```

## Type Aliases

### EmbeddingModelRoleEntry

```ts
type EmbeddingModelRoleEntry = 
  | EmbeddingModel
  | CognideskEmbeddingModelOptions;
```

***

### LanguageModelRole

```ts
type LanguageModelRole = Exclude<keyof AgentModelSet, "journeyEmbedding">;
```

***

### ModelRoleEntry

```ts
type ModelRoleEntry = 
  | LanguageModel
  | Omit<CognideskModelOptions, 
  | "promptProfile"
  | "modelProfiles"
  | "promptOverrides"
  | "promptOverrideBaseDir"> & {
  promptProfile?: ModelPromptProfile;
};
```

***

### ModelSetDefinition

```ts
type ModelSetDefinition = { [Role in LanguageModelRole]: ModelRoleEntry } & {
  journeyEmbedding: EmbeddingModelRoleEntry;
};
```

#### Type Declaration

| Name | Type |
| ------ | ------ |
| `journeyEmbedding` | [`EmbeddingModelRoleEntry`](#embeddingmodelroleentry) |

***

### PromptOverrideRegistry

```ts
type PromptOverrideRegistry = Record<string, Partial<Record<PromptTask, PromptOverrideValue>>>;
```

***

### PromptTemplateMap

```ts
type PromptTemplateMap = Record<PromptTask, string>;
```

## Variables

### promptTasks

```ts
const promptTasks: readonly ["response", "journey-matcher", "transition-matcher", "delegation-completion", "extraction", "citation-post-processing", "compaction", "generated-preamble"];
```

***

### promptTemplateFields

```ts
const promptTemplateFields: {
  citation-post-processing: readonly ["assistantAnswer", "knowledge", "structuredOutput"];
  compaction: readonly ["instructions", "fromOffset", "toOffset", "events", "structuredOutput"];
  delegation-completion: readonly ["journey", "conversationTranscript", "structuredOutput"];
  extraction: readonly ["journey", "state", "latestUserMessage", "currentContext", "fields", "stateInstructions", "structuredOutput"];
  generated-preamble: readonly ["purpose", "maxWords", "history"];
  journey-matcher: readonly ["latestUserMessage", "activeJourneyId", "conversationTranscript", "candidates", "structuredOutput"];
  response: readonly ["selectedJourneyId", "activeStateIds", "journeyContext", "tools", "structuredOutput"];
  transition-matcher: readonly ["journey", "state", "latestUserMessage", "currentContext", "candidates", "structuredOutput"];
};
```

#### Type Declaration

| Name | Type |
| ------ | ------ |
| <a id="property-citation-post-processing"></a> `citation-post-processing` | readonly \[`"assistantAnswer"`, `"knowledge"`, `"structuredOutput"`\] |
| <a id="property-compaction"></a> `compaction` | readonly \[`"instructions"`, `"fromOffset"`, `"toOffset"`, `"events"`, `"structuredOutput"`\] |
| <a id="property-delegation-completion"></a> `delegation-completion` | readonly \[`"journey"`, `"conversationTranscript"`, `"structuredOutput"`\] |
| <a id="property-extraction"></a> `extraction` | readonly \[`"journey"`, `"state"`, `"latestUserMessage"`, `"currentContext"`, `"fields"`, `"stateInstructions"`, `"structuredOutput"`\] |
| <a id="property-generated-preamble"></a> `generated-preamble` | readonly \[`"purpose"`, `"maxWords"`, `"history"`\] |
| <a id="property-journey-matcher"></a> `journey-matcher` | readonly \[`"latestUserMessage"`, `"activeJourneyId"`, `"conversationTranscript"`, `"candidates"`, `"structuredOutput"`\] |
| <a id="property-response"></a> `response` | readonly \[`"selectedJourneyId"`, `"activeStateIds"`, `"journeyContext"`, `"tools"`, `"structuredOutput"`\] |
| <a id="property-transition-matcher"></a> `transition-matcher` | readonly \[`"journey"`, `"state"`, `"latestUserMessage"`, `"currentContext"`, `"candidates"`, `"structuredOutput"`\] |

## Functions

### cognideskEmbeddingModel()

```ts
function cognideskEmbeddingModel(options): ModelAdapter;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`CognideskEmbeddingModelOptions`](#cognideskembeddingmodeloptions) |

#### Returns

[`ModelAdapter`](../core/dist.md#modeladapter)

***

### cognideskModel()

```ts
function cognideskModel(options): ModelAdapter;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`CognideskModelOptions`](#cognideskmodeloptions) |

#### Returns

[`ModelAdapter`](../core/dist.md#modeladapter)

***

### createModelPromptProfile()

```ts
function createModelPromptProfile(options?): ModelPromptProfile;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options?` | [`PromptProfileOptions`](#promptprofileoptions) |

#### Returns

[`ModelPromptProfile`](../core/dist.md#modelpromptprofile)

***

### createModelSet()

```ts
function createModelSet(definition, options?): AgentModelSet;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `definition` | [`ModelSetDefinition`](#modelsetdefinition) |
| `options?` | [`CreateModelSetOptions`](#createmodelsetoptions) |

#### Returns

[`AgentModelSet`](../core/dist.md#agentmodelset)

***

### listBuiltInPromptProfiles()

```ts
function listBuiltInPromptProfiles(): PromptProfileMetadata[];
```

#### Returns

[`PromptProfileMetadata`](#promptprofilemetadata)[]

***

### normalizeLogicalModelSlug()

```ts
function normalizeLogicalModelSlug(providerModelId, modelProfiles?): string;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `providerModelId` | `string` |
| `modelProfiles?` | `Iterable`\<[`ModelProfileRegistration`](#modelprofileregistration)\> |

#### Returns

`string`
