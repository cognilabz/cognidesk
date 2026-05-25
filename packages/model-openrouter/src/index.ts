import type { ModelAdapter, TextGenerationInput, TextGenerationOutput, EmbeddingInput, EmbeddingOutput } from "@cognidesk/core";

export interface OpenRouterModelOptions {
  model: string;
  apiKey?: string;
  baseUrl?: string;
}

export function openRouterModel(options: OpenRouterModelOptions): ModelAdapter {
  return {
    provider: "openrouter",
    model: options.model,
    async generateText(_input: TextGenerationInput): Promise<TextGenerationOutput> {
      throw new Error("@cognidesk/model-openrouter adapter implementation is not wired in this workpackage yet.");
    },
    async embed(_input: EmbeddingInput): Promise<EmbeddingOutput> {
      throw new Error("@cognidesk/model-openrouter embedding implementation is not wired in this workpackage yet.");
    },
  };
}
