import type { z } from "zod";

type Primitive = string | number | boolean | bigint | symbol | null | undefined | Date;
type StringKey<T> = Extract<keyof T, string>;

export type ContextPath<T> = T extends Primitive
  ? never
  : T extends readonly unknown[]
    ? never
    : {
        [K in StringKey<T>]: T[K] extends Primitive | readonly unknown[]
          ? K
          : K | `${K}.${ContextPath<T[K]>}`;
      }[StringKey<T>];

export type ObjectSchema = z.ZodObject<Record<string, z.ZodType>>;
export type InferSchema<TSchema extends z.ZodType> = z.infer<TSchema>;

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

export interface ModelAdapter {
  readonly provider: string;
  readonly model: string;
  generateText(input: TextGenerationInput): Promise<TextGenerationOutput>;
  embed?(input: EmbeddingInput): Promise<EmbeddingOutput>;
}

export type AgentModelSet = {
  [Role in ModelRole]: ModelAdapter;
};

export interface ApplicationContextParts<TConversation, TTurn> {
  conversation: TConversation;
  turn: TTurn;
}

export type GuardResult =
  | boolean
  | { allow: true }
  | {
      allow: false;
      code: string;
      message?: string;
      prompt?: WidgetPromptDefinition<WidgetDefinition>;
      metadata?: Record<string, unknown>;
    };

export type GuardContext<TApp, TJourneyContext> = {
  app: TApp;
  context: TJourneyContext;
};

export interface ToolExecutionContext<TInput, TApp = unknown> {
  input: TInput;
  app: TApp;
  conversationId: string;
  idempotencyKey?: string;
  signal?: AbortSignal;
}

export interface ToolDefinition<
  TName extends string = string,
  TInputSchema extends z.ZodType = z.ZodType,
  TOutputSchema extends z.ZodType = z.ZodType,
  TSideEffect extends boolean = boolean,
> {
  kind: "tool";
  name: TName;
  description?: string;
  input: TInputSchema;
  output: TOutputSchema;
  sideEffect: TSideEffect;
  idempotencyKey?: (args: {
    input: z.infer<TInputSchema>;
    conversationId: string;
  }) => string;
  execute: (
    context: ToolExecutionContext<z.infer<TInputSchema>>,
  ) => Promise<z.infer<TOutputSchema>>;
}

export type AnyTool = ToolDefinition<string, z.ZodType, z.ZodType, boolean>;
export type SideEffectTool = ToolDefinition<string, z.ZodType, z.ZodType, true>;

export interface WidgetDefinition<
  TKind extends string = string,
  TInputSchema extends z.ZodType = z.ZodType,
  TOutputSchema extends z.ZodType = z.ZodType,
> {
  kind: TKind;
  input: TInputSchema;
  output: TOutputSchema;
}

export interface WidgetPromptDefinition<TWidget extends WidgetDefinition = WidgetDefinition> {
  widget: TWidget;
  input: z.infer<TWidget["input"]>;
}

export interface KnowledgeItem<TMetadata = unknown> {
  id: string;
  title?: string;
  content: string;
  score?: number;
  metadata: TMetadata;
}

export interface KnowledgeSource<
  TName extends string = string,
  TQuerySchema extends z.ZodType = z.ZodType,
  TMetadataSchema extends z.ZodType = z.ZodType,
> {
  kind: "knowledgeSource";
  name: TName;
  query: TQuerySchema;
  metadata: TMetadataSchema;
  retrieve(input: {
    query: z.infer<TQuerySchema>;
    signal?: AbortSignal;
  }): Promise<{ items: Array<KnowledgeItem<z.infer<TMetadataSchema>>> }>;
}

export interface CustomRuntimeEventDefinition<
  TName extends string = string,
  TPayloadSchema extends z.ZodType = z.ZodType,
> {
  kind: "customRuntimeEvent";
  name: TName;
  payload: TPayloadSchema;
  visibleToModel?: boolean;
}

export type AnyCustomRuntimeEvent = CustomRuntimeEventDefinition<string, z.ZodType>;

export interface RuntimeEventBase<TType extends string, TData> {
  id: string;
  conversationId: string;
  offset: number;
  type: TType;
  createdAt: string;
  traceId?: string;
  data: TData;
}

export type ConversationLifecycle = "active" | "handoff" | "closed";

export interface MessageSegment {
  id: string;
  text: string;
  references?: SupportReference[];
}

export type SupportReference =
  | { type: "knowledge"; id: string }
  | { type: "toolResult"; id: string };

export type RuntimeEvent =
  | RuntimeEventBase<"message.started", { role: "assistant" | "user" }>
  | RuntimeEventBase<"message.delta", { textDelta: string }>
  | RuntimeEventBase<"message.completed", { text: string; segments?: MessageSegment[]; usage?: UsageRecord; intermediate?: boolean }>
  | RuntimeEventBase<"message.aborted", { reason: string; partialText?: string }>
  | RuntimeEventBase<"journey.candidates.retrieved", { journeyIds: string[] }>
  | RuntimeEventBase<"journey.matched", { candidates: Array<{ journeyId: string; confidence: number; reason?: string }> }>
  | RuntimeEventBase<"journey.activated", { journeyId: string; previousJourneyId?: string }>
  | RuntimeEventBase<"journey.completed", { journeyId: string; stateId?: string; reason?: string }>
  | RuntimeEventBase<"journey.guard.denied", { journeyId: string; stateId?: string; code: string; message?: string; metadata?: Record<string, unknown> }>
  | RuntimeEventBase<"journey.event.emitted", {
      name: string;
      payload: unknown;
      routing: "none" | "activeJourneyOnly" | "full" | "targeted";
      target?: { journeyId?: string; stateId?: string };
    }>
  | RuntimeEventBase<"journey.state.entered", { journeyId: string; stateId: string }>
  | RuntimeEventBase<"journey.extraction.proposed", { journeyId: string; stateId: string; fields: string[] }>
  | RuntimeEventBase<"journey.extraction.accepted", { journeyId: string; stateId: string; fields: string[] }>
  | RuntimeEventBase<"action.started", { actionName: string; journeyId?: string; stateId?: string }>
  | RuntimeEventBase<"action.completed", { actionName: string; success: boolean; journeyId?: string; stateId?: string; error?: string }>
  | RuntimeEventBase<"tool.started", { toolName: string; journeyId?: string; stateId?: string }>
  | RuntimeEventBase<"tool.completed", { toolName: string; success: boolean; journeyId?: string; stateId?: string; result?: unknown; error?: string }>
  | RuntimeEventBase<"knowledge.retrieved", { sourceName: string; itemIds: string[] }>
  | RuntimeEventBase<"ui.prompted", { promptId: string; widgetKind: string; input: unknown }>
  | RuntimeEventBase<"ui.submitted", { promptId: string; widgetKind: string; output: unknown }>
  | RuntimeEventBase<"conversation.compaction.started", { fromOffset: number; toOffset: number }>
  | RuntimeEventBase<"conversation.compaction.completed", { fromOffset: number; toOffset: number; schemaVersion: string }>
  | RuntimeEventBase<"handoff.requested", { reason: string; summary?: string; payload?: unknown }>
  | RuntimeEventBase<"handoff.resumed", { reason?: string; payload?: unknown }>
  | RuntimeEventBase<"conversation.closed", { reason?: string }>
  | RuntimeEventBase<"error", { code: string; message: string; details?: unknown }>
  | RuntimeEventBase<`custom.${string}`, unknown>;

export interface RuntimeSnapshot {
  conversationId: string;
  lifecycle: ConversationLifecycle;
  activeJourneyId?: string;
  activeStateIds: string[];
  journeyContext?: unknown;
  journeySummaries?: JourneySummary[];
  compactionSummary?: unknown;
  definitionHash?: string;
  updatedAt: string;
}

export interface JourneySummary {
  journeyId: string;
  kind: "stateMachine" | "delegation";
  summary: string;
  completedAt: string;
  stateId?: string;
  reason?: string;
}

export class DefinitionError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "DefinitionError";
  }
}
