import type { z } from "zod";

export interface UsageRecord {
  inputTokens?: number;
  outputTokens?: number;
  cachedInputTokens?: number;
  reasoningTokens?: number;
  totalTokens?: number;
  providerMetadata?: Record<string, unknown>;
}

export interface ModelMessage {
  role: "system" | "user" | "assistant" | "tool";
  content: string;
  name?: string;
  toolCallId?: string;
  toolCalls?: ModelToolCall[];
}

export interface ModelToolDefinition {
  name: string;
  description?: string;
  input: z.ZodType;
}

export interface ModelToolCall {
  id: string;
  name: string;
  input: unknown;
  providerMetadata?: Record<string, unknown>;
}

export interface TextGenerationInput {
  role: ModelRole;
  promptProfileRole?: PromptProfileRole;
  messages: ModelMessage[];
  responseFormat?: z.ZodType;
  tools?: ModelToolDefinition[];
  toolChoice?: "auto" | "none" | "required";
  signal?: AbortSignal;
}

export interface TextGenerationOutput<T = unknown> {
  text: string;
  structured?: T;
  toolCalls?: ModelToolCall[];
  usage?: UsageRecord;
  providerMetadata?: Record<string, unknown>;
}

export interface EmbeddingInput {
  role: "journeyEmbedding";
  text: string;
  signal?: AbortSignal;
}

export interface EmbeddingOutput {
  embedding: number[];
  model: string;
  dimensions: number;
  usage?: UsageRecord;
  providerMetadata?: Record<string, unknown>;
}

export type ModelRole =
  | "response"
  | "matcher"
  | "extraction"
  | "citationPostProcessing"
  | "journeyEmbedding"
  | "compaction";

export type PromptProfileRole = Exclude<ModelRole, "journeyEmbedding"> | "generatedPreamble";

export interface ModelPromptProfileTransformInput {
  role: PromptProfileRole;
  model: {
    provider: string;
    model: string;
  };
  messages: ModelMessage[];
}

export type ModelPromptProfileTransform = (
  input: ModelPromptProfileTransformInput,
) => ModelMessage[] | Promise<ModelMessage[]>;

export interface ModelPromptProfile {
  readonly id: string;
  readonly description?: string;
  transformMessages?: ModelPromptProfileTransform;
  roleTransforms?: Partial<Record<PromptProfileRole, ModelPromptProfileTransform>>;
}

export interface ModelAdapter {
  readonly provider: string;
  readonly model: string;
  readonly promptProfile?: ModelPromptProfile;
  generateText(input: TextGenerationInput): Promise<TextGenerationOutput>;
  embed?(input: EmbeddingInput): Promise<EmbeddingOutput>;
}

export type AgentModelAdapters = {
  [Role in ModelRole]: ModelAdapter;
};

export type AgentModelSet = AgentModelAdapters & {
  promptProfile?: ModelPromptProfile;
};
