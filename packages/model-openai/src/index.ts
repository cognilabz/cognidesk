import type { ModelAdapter, TextGenerationInput, TextGenerationOutput, EmbeddingInput, EmbeddingOutput } from "@cognidesk/core";

export interface OpenAIModelOptions {
  model: string;
  apiKey?: string;
  baseUrl?: string;
}

export function openaiModel(options: OpenAIModelOptions): ModelAdapter {
  return {
    provider: "openai",
    model: options.model,
    async generateText(_input: TextGenerationInput): Promise<TextGenerationOutput> {
      throw new Error("@cognidesk/model-openai adapter implementation is not wired in this workpackage yet.");
    },
    async embed(_input: EmbeddingInput): Promise<EmbeddingOutput> {
      throw new Error("@cognidesk/model-openai embedding implementation is not wired in this workpackage yet.");
    },
  };
}
