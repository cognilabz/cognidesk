import { createOpenRouter } from "@openrouter/ai-sdk-provider";
import { aiSdkModel, instructionPromptProfile } from "@cognidesk/model";
import type { ModelAdapter, ModelPromptProfile } from "@cognidesk/core";

export interface OpenRouterModelOptions {
  model: string;
  embeddingModel?: string;
  apiKey?: string;
  baseUrl?: string;
  defaultHeaders?: Record<string, string>;
  siteUrl?: string;
  appName?: string;
  temperature?: number;
  maxTokens?: number;
  strictStructuredOutputs?: boolean;
  promptProfile?: ModelPromptProfile;
  fetch?: typeof fetch;
}

export function openRouterModel(options: OpenRouterModelOptions): ModelAdapter {
  const apiKey = options.apiKey ?? process.env.OPENROUTER_KEY ?? process.env.OPENROUTER_API_KEY;
  const provider = createOpenRouter({
    ...(apiKey ? { apiKey } : {}),
    ...(options.baseUrl ? { baseURL: options.baseUrl } : {}),
    ...(options.defaultHeaders ? { headers: options.defaultHeaders } : {}),
    ...(options.siteUrl ? { appUrl: options.siteUrl } : {}),
    ...(options.appName ? { appName: options.appName } : {}),
    ...(options.fetch ? { fetch: options.fetch } : {}),
    compatibility: "strict",
  });
  return aiSdkModel({
    provider: "openrouter",
    model: options.model,
    languageModel: provider.chat(options.model),
    ...(options.embeddingModel ? {
      embeddingModel: provider.embedding(options.embeddingModel),
      embeddingModelId: options.embeddingModel,
    } : {}),
    promptProfile: options.promptProfile ?? openRouterPromptProfile(options.model),
    ...(options.temperature !== undefined ? { temperature: options.temperature } : {}),
    ...(options.maxTokens !== undefined ? { maxOutputTokens: options.maxTokens } : {}),
  });
}

export function openRouterPromptProfile(model: string): ModelPromptProfile {
  return instructionPromptProfile({
    id: `openrouter:${model}`,
    description: "Default Cognidesk prompt profile for OpenRouter chat models.",
    roleInstructions: {
      response: "Use the customer-support voice from the agent instructions. Keep answers grounded in supplied Journey and Knowledge context.",
      matcher: "Return only candidate ids that are present in the prompt. Do not invent Journey or transition ids.",
      extraction: "Extract only explicit or strongly implied values. Do not fill missing customer details from examples.",
      citationPostProcessing: "Preserve the assistant text exactly while adding references only where source material was used.",
      compaction: "Keep durable facts, unresolved questions, and commitments. Drop transient wording.",
      generatedPreamble: "Return one short customer-facing sentence without internal reasoning or policy claims.",
    },
    instruction: "When a schema is requested, produce JSON matching that schema and no explanatory wrapper text.",
  });
}
