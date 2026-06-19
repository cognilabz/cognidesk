# Models & Providers

This guide covers configuring text/chat Model Providers for your Cognidesk agent.

For external support systems such as email, ticketing, messaging, social, workplace, and contact-center platforms, use [Provider Integrations](provider-packages.md). Model adapters decide how Cognidesk calls language models. Provider Integrations decide how Cognidesk reaches external support surfaces.

Voice speech providers such as ElevenLabs, Azure Speech, AWS Speech, Google Cloud Speech, and Deepgram are also separate from text/chat Model Providers: they perform STT/TTS, while the Cognidesk Agent Model Set remains the background LLM.

## Model configuration

Cognidesk uses one model set with named roles. `@cognidesk/model` adapts Vercel AI SDK language and embedding models to the `ModelAdapter` contract in `@cognidesk/core`.

```typescript
import { createOpenAI } from "@ai-sdk/openai";
import { createModelSet } from "@cognidesk/model";

const openai = createOpenAI({ apiKey: process.env.OPENAI_API_KEY });

const models = createModelSet({
  response: openai.responses(requireEnv("OPENAI_RESPONSE_MODEL")),
  matcher: openai.responses(requireEnv("OPENAI_MATCHER_MODEL")),
  extraction: openai.responses(requireEnv("OPENAI_EXTRACTION_MODEL")),
  citationPostProcessing: openai.responses(requireEnv("OPENAI_CITATION_MODEL")),
  compaction: openai.responses(requireEnv("OPENAI_COMPACTION_MODEL")),
  journeyEmbedding: openai.embedding(requireEnv("OPENAI_EMBEDDING_MODEL")),
});

const runtime = createRuntime({
  storage,
  agent,
  models,
});

function requireEnv(name: string) {
  const value = process.env[name];
  if (!value) throw new Error(`${name} is required.`);
  return value;
}
```

## Supported model providers

| Source | How it connects |
|--------|-----------------|
| OpenAI | Install a Vercel AI SDK OpenAI provider such as `@ai-sdk/openai`, then pass its language and embedding models to `createModelSet`. |
| OpenRouter | Install an AI SDK compatible OpenRouter provider such as `@openrouter/ai-sdk-provider`, then pass its roles to `createModelSet`. |
| Anthropic, Google, Mistral, Cohere, Groq, xAI, Azure OpenAI, and similar providers | Install the matching AI SDK provider package and pass its language model handles to `createModelSet`. Use a compatible embedding provider for `journeyEmbedding`. |
| Custom provider | Implement `ModelAdapter` from `@cognidesk/core`, or provide any AI SDK compatible `LanguageModel` and `EmbeddingModel`. |

## Model adapter interface

```typescript
import type { ModelAdapter } from "@cognidesk/core";

const customModel: ModelAdapter = {
  provider: "custom",
  model: "support-model",
  async generateText(input) {
    return { text: "..." };
  },
  async embed(input) {
    return { embedding: [], model: "support-embedding", dimensions: 0 };
  },
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
