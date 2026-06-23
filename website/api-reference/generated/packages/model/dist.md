# packages/model/dist

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
optional providerOptions?: AiSdkProviderOptions;
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
optional providerOptions?: AiSdkProviderOptions;
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

### ModelJsonObject

#### Extended by

- [`ModelProviderExtensionFields`](#modelproviderextensionfields)
- [`ModelProviderResponse`](#modelproviderresponse)

#### Indexable

```ts
[key: string]: ModelProviderExtensionValue
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

### ModelProviderExtensionFields

#### Extends

- [`ModelJsonObject`](#modeljsonobject)

#### Indexable

```ts
[key: string]: ModelProviderExtensionValue
```

***

### ModelProviderResponse

#### Extends

- [`ModelJsonObject`](#modeljsonobject)

#### Indexable

```ts
[key: string]: ModelProviderExtensionValue
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

### AiSdkProviderOptions

```ts
type AiSdkProviderOptions = NonNullable<Parameters<typeof generateText>[0]["providerOptions"]>;
```

***

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

### ModelJsonPrimitive

```ts
type ModelJsonPrimitive = string | number | boolean | null;
```

***

### ModelJsonValue

```ts
type ModelJsonValue =
  | ModelJsonPrimitive
  | ModelJsonObject
  | readonly ModelJsonValue[];
```

***

### ModelProviderExtensionValue

```ts
type ModelProviderExtensionValue = ModelJsonValue | object | undefined;
```

***

### ModelProviderPayload

```ts
type ModelProviderPayload = ModelJsonObject | object;
```

***

### ModelProviderQuery

```ts
type ModelProviderQuery = Record<string, ModelProviderExtensionValue>;
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

### cognideskModelProviderManifest

```ts
const cognideskModelProviderManifest: {
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

***

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
