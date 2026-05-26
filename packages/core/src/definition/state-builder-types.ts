import type { z } from "zod";
import type { StateBuilder } from "./state-builder.js";
import type {
  ActionDefinition,
  ConfirmationPolicy,
  MaybePromise,
} from "./primitives.js";
import type {
  AnyTool,
  GuardContext,
  GuardResult,
  ObjectSchema,
  WidgetDefinition,
  WidgetPromptDefinition,
} from "../types.js";

export type InferObject<TSchema extends ObjectSchema> = z.infer<TSchema>;
export type FieldWidgetOption = WidgetDefinition | WidgetPromptDefinition;

export interface InternalTransition {
  kind: "event" | "conversational";
  target: StateBuilder<string, ObjectSchema>;
  eventName?: string;
  description?: string;
  priority?: number;
  guard?: (context: GuardContext<unknown, unknown>) => MaybePromise<GuardResult>;
}

export interface InternalToolRun {
  tool: AnyTool;
  confirm?: ConfirmationPolicy;
  actionType: "entry" | "exit" | "transition";
  input?: (args: { context: unknown }) => unknown;
  assign: Array<{ path: string; value: (args: { output: unknown; context: unknown }) => unknown }>;
  onSuccess?: StateBuilder<string, ObjectSchema>;
  onFailure?: StateBuilder<string, ObjectSchema>;
  onValidationError?: StateBuilder<string, ObjectSchema>;
}

export interface InternalActionRun {
  action: ActionDefinition;
  actionType: "entry" | "exit" | "transition";
  input?: (args: { context: unknown }) => unknown;
}

export interface CollectedField {
  path: string;
  required: boolean;
  extract: boolean;
  confirm?: true | "beforeAction" | ConfirmationPolicy;
  prompt?: string;
  widget?: WidgetDefinition;
  widgetInput?: unknown;
  requiredWhen?: (args: { context: unknown }) => boolean;
}

export interface StateActionRecord {
  type: "entry" | "exit" | "transition";
  name: string;
  requiresVisit?: boolean;
}

export interface TransitionTargetBuilder<TContextSchema extends ObjectSchema, TReturn> {
  target(state: StateBuilder<string, TContextSchema>): TReturn;
}
