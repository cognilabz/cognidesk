# journey-index-json/dist

## Interfaces

### EnsureJourneyIndexOptions

#### Extends

- [`BuildJourneyIndexOptions`](../core/dist.md#buildjourneyindexoptions)

#### Properties

##### agent

```ts
agent: CompiledAgent;
```

##### embeddingModel

```ts
embeddingModel: ModelAdapter;
```

###### Inherited from

[`BuildJourneyIndexOptions`](../core/dist.md#buildjourneyindexoptions).[`embeddingModel`](../core/dist.md#embeddingmodel)

##### file

```ts
file: string;
```

##### generatedAt?

```ts
optional generatedAt?: string;
```

###### Inherited from

[`BuildJourneyIndexOptions`](../core/dist.md#buildjourneyindexoptions).[`generatedAt`](../core/dist.md#generatedat)

##### mode?

```ts
optional mode?: "development" | "production";
```

##### signal?

```ts
optional signal?: AbortSignal;
```

###### Inherited from

[`BuildJourneyIndexOptions`](../core/dist.md#buildjourneyindexoptions).[`signal`](../core/dist.md#signal)

## Functions

### ensureJourneyIndex()

```ts
function ensureJourneyIndex(options): Promise<{
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
| `options` | [`EnsureJourneyIndexOptions`](#ensurejourneyindexoptions) |

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

### loadFreshJourneyIndex()

```ts
function loadFreshJourneyIndex(
   file, 
   agent, 
   options?): Promise<{
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
| `file` | `string` |
| `agent` | [`CompiledAgent`](../core/dist.md#compiledagent) |
| `options?` | \{ `embeddingModel?`: [`ModelAdapter`](../core/dist.md#modeladapter); \} |
| `options.embeddingModel?` | [`ModelAdapter`](../core/dist.md#modeladapter) |

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

### loadJourneyIndex()

```ts
function loadJourneyIndex(file): Promise<{
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
| `file` | `string` |

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

### saveJourneyIndex()

```ts
function saveJourneyIndex(file, index): Promise<void>;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `file` | `string` |
| `index` | \{ `agentId`: `string`; `definitionHash`: `string`; `embeddingModel`: `string`; `embeddingProvider`: `string`; `entries`: \{ `alwaysInclude`: `boolean`; `condition`: `string`; `definitionHash`: `string`; `embedding`: \{ `dimensions`: `number`; `model`: `string`; `vector`: `number`[]; \}; `examples`: `string`[]; `journeyId`: `string`; `kind`: `"stateMachine"` \| `"delegation"`; `priority`: `number`; `routingText`: `string`; `stickiness`: `"low"` \| `"medium"` \| `"high"`; `tags`: `string`[]; \}[]; `generatedAt`: `string`; `projectionVersion`: `"cognidesk.journey-index.v1"`; \} |
| `index.agentId` | `string` |
| `index.definitionHash` | `string` |
| `index.embeddingModel` | `string` |
| `index.embeddingProvider` | `string` |
| `index.entries` | \{ `alwaysInclude`: `boolean`; `condition`: `string`; `definitionHash`: `string`; `embedding`: \{ `dimensions`: `number`; `model`: `string`; `vector`: `number`[]; \}; `examples`: `string`[]; `journeyId`: `string`; `kind`: `"stateMachine"` \| `"delegation"`; `priority`: `number`; `routingText`: `string`; `stickiness`: `"low"` \| `"medium"` \| `"high"`; `tags`: `string`[]; \}[] |
| `index.generatedAt` | `string` |
| `index.projectionVersion` | `"cognidesk.journey-index.v1"` |

#### Returns

`Promise`\<`void`\>
