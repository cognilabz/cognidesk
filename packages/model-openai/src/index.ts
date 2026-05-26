import { createOpenAI } from "@ai-sdk/openai";
import { aiSdkModel, instructionPromptProfile } from "@cognidesk/model";
import type { ModelAdapter, ModelPromptProfile } from "@cognidesk/core";

export interface OpenAIModelOptions {
  model: string;
  embeddingModel?: string;
  apiKey?: string;
  baseUrl?: string;
  organization?: string;
  project?: string;
  defaultHeaders?: Record<string, string>;
  temperature?: number;
  maxOutputTokens?: number;
  strictStructuredOutputs?: boolean;
  promptProfile?: ModelPromptProfile;
  fetch?: typeof fetch;
}

export function openaiModel(options: OpenAIModelOptions): ModelAdapter {
  const apiKey = options.apiKey ?? process.env.OPENAI_API_KEY;
  const provider = createOpenAI({
    ...(apiKey ? { apiKey } : {}),
    ...(options.baseUrl ? { baseURL: options.baseUrl } : {}),
    ...(options.organization ? { organization: options.organization } : {}),
    ...(options.project ? { project: options.project } : {}),
    ...(options.defaultHeaders ? { headers: options.defaultHeaders } : {}),
    ...(options.fetch ? { fetch: options.fetch } : {}),
  });
  return aiSdkModel({
    provider: "openai",
    model: options.model,
    languageModel: provider.responses(options.model),
    ...(options.embeddingModel ? {
      embeddingModel: provider.embedding(options.embeddingModel),
      embeddingModelId: options.embeddingModel,
    } : {}),
    promptProfile: options.promptProfile ?? openaiPromptProfile(options.model),
    ...(options.temperature !== undefined ? { temperature: options.temperature } : {}),
    ...(options.maxOutputTokens !== undefined ? { maxOutputTokens: options.maxOutputTokens } : {}),
  });
}

export function openaiPromptProfile(model: string): ModelPromptProfile {
  const gpt5Instruction = model.startsWith("gpt-5")
    ? "Prefer concise, directly structured answers. When a schema is requested, produce only values supported by the schema and avoid explanatory wrapper text."
    : "When a schema is requested, produce only values supported by the schema and avoid explanatory wrapper text.";
  return instructionPromptProfile({
    id: `openai:${model}`,
    description: "Default Cognidesk prompt profile for OpenAI Responses models.",
    roleInstructions: {
      response: "Use the customer-support voice from the agent instructions. Keep answers grounded in supplied Journey and Knowledge context.",
      matcher: "Return only candidate ids that are present in the prompt. Do not invent Journey or transition ids.",
      extraction: "Extract only explicit or strongly implied values. Do not fill missing customer details from examples.",
      citationPostProcessing: "Preserve the assistant text exactly while adding references only where source material was used.",
      compaction: "Keep durable facts, unresolved questions, and commitments. Drop transient wording.",
      generatedPreamble: "Return one short customer-facing sentence without internal reasoning or policy claims.",
    },
    instruction: gpt5Instruction,
  });
}
