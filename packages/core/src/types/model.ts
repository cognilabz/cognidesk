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
  promptTask?: PromptTask;
  promptPayload?: ModelVisiblePromptPayload;
  messages: ModelMessage[];
  responseFormat?: z.ZodType;
  tools?: ModelToolDefinition[];
  toolChoice?: "auto" | "none" | "required";
  onTextDelta?(delta: string): void | Promise<void>;
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

export type PromptProfileRole = Exclude<ModelRole, "journeyEmbedding">;

export type PromptTask =
  | "response"
  | "journey-matcher"
  | "transition-matcher"
  | "delegation-completion"
  | "extraction"
  | "citation-post-processing"
  | "compaction"
  | "generated-preamble";

export type ModelVisiblePromptPayload = Record<string, unknown>;

export interface StructuredOutputPromptMetadata {
  required: boolean;
  name: string;
  schema?: unknown;
}

export interface ModelPromptProfileRenderInput {
  role: PromptProfileRole;
  promptTask: PromptTask;
  model: {
    provider: string;
    model: string;
    logicalModelSlug?: string;
  };
  payload: ModelVisiblePromptPayload;
  structuredOutput?: StructuredOutputPromptMetadata;
}

export type ModelPromptProfileRender = (
  input: ModelPromptProfileRenderInput,
) => string | Promise<string>;

export interface ModelPromptProfile {
  readonly id: string;
  readonly description?: string;
  readonly logicalModelSlug?: string;
  renderInstruction(input: ModelPromptProfileRenderInput): string | Promise<string>;
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

export type AgentModelSet = AgentModelAdapters;
