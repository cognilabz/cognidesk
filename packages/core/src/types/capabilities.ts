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
