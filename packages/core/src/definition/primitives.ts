import { z } from "zod";
import type { StateBuilder } from "../definition.js";
import type {
  AnyTool,
  ContextPath,
  CustomRuntimeEventDefinition,
  GuardContext,
  GuardResult,
  KnowledgeSource,
  ObjectSchema,
  SideEffectTool,
  ToolDefinition,
  WidgetDefinition,
  WidgetPromptDefinition,
} from "../types.js";

export type MaybePromise<T> = T | Promise<T>;
type FieldWidgetOption = WidgetDefinition | WidgetPromptDefinition;

export interface ConfirmationPolicy {
  message?: string;
  widget?: WidgetDefinition;
  reason?: string;
}

export interface FieldCollectionOptions<TContext> {
  prompt?: string;
  required?: boolean;
  requiredWhen?: (args: { context: TContext }) => boolean;
  extract?: boolean;
  confirm?: boolean | "beforeAction" | ConfirmationPolicy;
  widget?: FieldWidgetOption;
}

export interface ListCollectionOptions<TContext, TItemSchema extends z.ZodType> {
  item: TItemSchema;
  countFrom?: ContextPath<TContext>;
  prompt?: string;
  widget?: FieldWidgetOption;
}

export interface TransitionOptions<TContext> {
  priority?: number;
  guard?: (context: GuardContext<unknown, TContext>) => MaybePromise<GuardResult>;
  description?: string;
}

export interface ToolRunOptions<TTool extends AnyTool, TContext> {
  input?: (args: { context: TContext }) => z.infer<TTool["input"]>;
  assign?: Partial<Record<ContextPath<TContext>, (args: { output: z.infer<TTool["output"]>; context: TContext }) => unknown>>;
  onSuccess?: StateBuilder<string, ObjectSchema>;
  onFailure?: StateBuilder<string, ObjectSchema>;
  onValidationError?: StateBuilder<string, ObjectSchema>;
}

export type ToolRunOptionsFor<TTool extends AnyTool, TContext> =
  TTool extends SideEffectTool
    ? ToolRunOptions<TTool, TContext> & { confirm: ConfirmationPolicy }
    : ToolRunOptions<TTool, TContext> & { confirm?: ConfirmationPolicy };

export interface StateActionUseOptions<TAction extends ActionDefinition, TContext> {
  type?: "entry" | "exit" | "transition";
  input?: (args: { context: TContext }) => z.infer<TAction["input"]>;
}

export interface ActionDefinition<
  TName extends string = string,
  TInputSchema extends z.ZodType = z.ZodType,
> {
  kind: "action";
  name: TName;
  input: TInputSchema;
  run: (args: { input: z.infer<TInputSchema> }) => MaybePromise<void>;
  requiresVisit?: boolean;
  retry?: false | { maxAttempts?: number; notice?: string };
}

export interface JourneyEventDefinition<
  TName extends string = string,
  TPayloadSchema extends z.ZodType = z.ZodType,
> {
  kind: "journeyEvent";
  name: TName;
  payload: TPayloadSchema;
  routing?: EventRoutingMode;
}

export type EventRoutingMode = "none" | "activeJourneyOnly" | "full" | "targeted";

export function tool<
  const TName extends string,
  TInputSchema extends z.ZodType,
  TOutputSchema extends z.ZodType,
  const TSideEffect extends boolean = false,
>(name: TName, config: {
  description?: string;
  input: TInputSchema;
  output: TOutputSchema;
  sideEffect?: TSideEffect;
  idempotencyKey?: (args: {
    input: z.infer<TInputSchema>;
    conversationId: string;
  }) => string;
  execute: (context: {
    input: z.infer<TInputSchema>;
    app: unknown;
    conversationId: string;
    idempotencyKey?: string;
    signal?: AbortSignal;
  }) => Promise<z.infer<TOutputSchema>>;
}): ToolDefinition<TName, TInputSchema, TOutputSchema, TSideEffect> {
  return {
    kind: "tool",
    name,
    input: config.input,
    output: config.output,
    sideEffect: (config.sideEffect ?? false) as TSideEffect,
    execute: config.execute,
    ...(config.description ? { description: config.description } : {}),
    ...(config.idempotencyKey ? { idempotencyKey: config.idempotencyKey } : {}),
  };
}

export function widget<
  const TKind extends string,
  TInputSchema extends z.ZodType,
  TOutputSchema extends z.ZodType,
>(kind: TKind, config: {
  input: TInputSchema;
  output: TOutputSchema;
}): WidgetDefinition<TKind, TInputSchema, TOutputSchema> {
  return { kind, input: config.input, output: config.output };
}

export function widgetPrompt<TWidget extends WidgetDefinition>(
  widgetDefinition: TWidget,
  input: z.infer<TWidget["input"]>,
): WidgetPromptDefinition<TWidget> {
  return { widget: widgetDefinition, input };
}

export function knowledgeSource<
  const TName extends string,
  TQuerySchema extends z.ZodType,
  TMetadataSchema extends z.ZodType,
>(name: TName, config: Omit<KnowledgeSource<TName, TQuerySchema, TMetadataSchema>, "kind" | "name">) {
  return { kind: "knowledgeSource" as const, name, ...config };
}

export function action<const TName extends string, TInputSchema extends z.ZodType>(
  name: TName,
  config: {
    input: TInputSchema;
    run: (args: { input: z.infer<TInputSchema> }) => MaybePromise<void>;
    requiresVisit?: boolean;
    retry?: false | { maxAttempts?: number; notice?: string };
  },
): ActionDefinition<TName, TInputSchema> {
  return { kind: "action", name, ...config };
}

export function journeyEvent<const TName extends string, TPayloadSchema extends z.ZodType>(
  name: TName,
  config: {
    payload: TPayloadSchema;
    routing?: EventRoutingMode;
  },
): JourneyEventDefinition<TName, TPayloadSchema> {
  return { kind: "journeyEvent", name, ...config };
}

export function customRuntimeEvent<const TName extends string, TPayloadSchema extends z.ZodType>(
  name: TName,
  config: {
    payload: TPayloadSchema;
    visibleToModel?: boolean;
  },
): CustomRuntimeEventDefinition<TName, TPayloadSchema> {
  return {
    kind: "customRuntimeEvent",
    name,
    payload: config.payload,
    ...(config.visibleToModel !== undefined ? { visibleToModel: config.visibleToModel } : {}),
  };
}
