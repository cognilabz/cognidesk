# Models & Providers

This guide covers configuring LLM providers for your Cognidesk agent.

!!! note "Work in progress"
    This guide is being written. Check back soon for complete content.

## Model configuration

Cognidesk uses a single model entrypoint that supports multiple providers:

```typescript
import { createRuntime } from "@cognidesk/core";

const runtime = createRuntime({
  storage,
  agent,
  models: {
    chat: chatModel,
    journeyEmbedding: embeddingModel,
  },
});
```

## Supported providers

| Provider | Package | Notes |
|----------|---------|-------|
| OpenAI | `@cognidesk/model` | GPT-4o, GPT-4, GPT-3.5 |
| OpenRouter | `@cognidesk/model` | Multi-model routing |
| Custom | Implement `ModelAdapter` | Any OpenAI-compatible API |

## Model adapter interface

```typescript
import type { ModelAdapter } from "@cognidesk/core";

const customModel: ModelAdapter = {
  // Implement the model adapter contract
};
```

## Journey embedding model

Journey activation uses embeddings to match user intent to journey conditions:

```typescript
import { buildJourneyIndex } from "@cognidesk/core";

const journeyIndex = await buildJourneyIndex(agent, {
  embeddingModel: models.journeyEmbedding,
});
```
