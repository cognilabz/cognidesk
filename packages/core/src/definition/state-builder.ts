import { z } from "zod";
import { CapabilityScope } from "./capability-scope.js";
import type {
  ActionDefinition,
  ConfirmationPolicy,
  FieldCollectionOptions,
  JourneyEventDefinition,
  ListCollectionOptions,
  MaybePromise,
  StateActionUseOptions,
  ToolRunOptions,
  ToolRunOptionsFor,
  TransitionOptions,
} from "./primitives.js";
import type { CompiledState, StateReference } from "../definition.js";
import type {
  AnyTool,
  ContextPath,
  GuardContext,
  GuardResult,
  KnowledgeSource,
  ObjectSchema,
  WidgetDefinition,
  WidgetPromptDefinition,
} from "../types.js";
import { DefinitionError as CognideskDefinitionError } from "../types.js";

type InferObject<TSchema extends ObjectSchema> = z.infer<TSchema>;
type FieldWidgetOption = WidgetDefinition | WidgetPromptDefinition;

interface InternalTransition {
  kind: "event" | "conversational";
  target: StateBuilder<string, ObjectSchema>;
  eventName?: string;
  description?: string;
  priority?: number;
  guard?: (context: GuardContext<unknown, unknown>) => MaybePromise<GuardResult>;
}

interface InternalToolRun {
  tool: AnyTool;
  confirm?: ConfirmationPolicy;
  actionType: "entry" | "exit" | "transition";
  input?: (args: { context: unknown }) => unknown;
  assign: Array<{ path: string; value: (args: { output: unknown; context: unknown }) => unknown }>;
  onSuccess?: StateBuilder<string, ObjectSchema>;
  onFailure?: StateBuilder<string, ObjectSchema>;
  onValidationError?: StateBuilder<string, ObjectSchema>;
}

interface InternalActionRun {
  action: ActionDefinition;
  actionType: "entry" | "exit" | "transition";
  input?: (args: { context: unknown }) => unknown;
}

interface TransitionTargetBuilder<TContextSchema extends ObjectSchema, TReturn> {
  target(state: StateBuilder<string, TContextSchema>): TReturn;
}

export class StateBuilder<
  const TId extends string,
  TContextSchema extends ObjectSchema,
> implements StateReference<TId> {
  readonly tools = new CapabilityScope<AnyTool>();
  readonly knowledge = new CapabilityScope<KnowledgeSource>();
  readonly children: StateBuilder<string, TContextSchema>[] = [];
  readonly transitions: InternalTransition[] = [];
  readonly toolRuns: InternalToolRun[] = [];
  readonly actionRuns: InternalActionRun[] = [];
  readonly collectedFields: Array<{
    path: string;
    required: boolean;
    extract: boolean;
    confirm?: true | "beforeAction" | ConfirmationPolicy;
    prompt?: string;
    widget?: WidgetDefinition;
    widgetInput?: unknown;
    requiredWhen?: (args: { context: unknown }) => boolean;
  }> = [];
  readonly stateActions: Array<{ type: "entry" | "exit" | "transition"; name: string; requiresVisit?: boolean }> = [];
  private visitRequirement: string | null = null;
  private stateInstructions?: string;
  private stateSummary?: string;
  private stateType: "state" | "parallel" | "final" = "state";
  private initialChildState?: StateBuilder<string, TContextSchema>;

  constructor(
    readonly id: TId,
    readonly contextSchema: TContextSchema,
    readonly parent?: StateBuilder<string, TContextSchema>,
  ) {}

  instructions(value: string) {
    this.stateInstructions = value;
    return this;
  }

  summary(value: string) {
    this.stateSummary = value;
    return this;
  }

  collect(path: ContextPath<InferObject<TContextSchema>>, options: FieldCollectionOptions<InferObject<TContextSchema>> = {}) {
    const widgetDefinition = resolveFieldWidget(options.widget);
    this.collectedFields.push({
      path,
      required: options.required ?? true,
      extract: options.extract ?? true,
      ...(options.confirm ? { confirm: options.confirm === true ? true : options.confirm } : {}),
      ...(options.prompt ? { prompt: options.prompt } : {}),
      ...(widgetDefinition ? { widget: widgetDefinition.widget } : {}),
      ...(widgetDefinition?.input !== undefined ? { widgetInput: widgetDefinition.input } : {}),
      ...(options.requiredWhen ? { requiredWhen: options.requiredWhen as (args: { context: unknown }) => boolean } : {}),
    });
    if (options.widget || options.confirm) this.requiresVisit("field collection requires user-visible handling");
    return this;
  }

  collectList<TItemSchema extends z.ZodType>(
    path: ContextPath<InferObject<TContextSchema>>,
    options: ListCollectionOptions<InferObject<TContextSchema>, TItemSchema>,
  ) {
    const widgetDefinition = resolveFieldWidget(options.widget);
    this.collectedFields.push({
      path,
      required: true,
      extract: true,
      ...(options.prompt ? { prompt: options.prompt } : {}),
      ...(widgetDefinition ? { widget: widgetDefinition.widget } : {}),
      ...(widgetDefinition?.input !== undefined ? { widgetInput: widgetDefinition.input } : {}),
    });
    this.requiresVisit("list collection requires user-visible handling");
    return this;
  }

  state<const TChildId extends string>(id: TChildId) {
    const child = new StateBuilder(id, this.contextSchema, this);
    this.children.push(child);
    return child;
  }

  parallel<const TChildId extends string>(id: TChildId) {
    const child = this.state(id);
    child.markParallel();
    return child;
  }

  final<const TChildId extends string>(id: TChildId) {
    const child = this.state(id);
    child.markFinal();
    return child;
  }

  initial(state: StateBuilder<string, TContextSchema>) {
    if (state.parent !== this) {
      throw new CognideskDefinitionError(`State '${state.id}' is not a direct child of '${this.id}'.`);
    }
    this.initialChildState = state;
    return this;
  }

  markFinal() {
    this.stateType = "final";
    this.requiresVisit("final state marks journey completion");
    return this;
  }

  markParallel() {
    this.stateType = "parallel";
    return this;
  }

  when(
    description: string,
    options: TransitionOptions<InferObject<TContextSchema>> = {},
  ): TransitionTargetBuilder<TContextSchema, this> {
    return {
      target: (state: StateBuilder<string, TContextSchema>) => {
        this.transitions.push({
          kind: "conversational",
          target: state,
          description,
          ...(options.priority !== undefined ? { priority: options.priority } : {}),
          ...(options.guard ? { guard: options.guard as (context: GuardContext<unknown, unknown>) => MaybePromise<GuardResult> } : {}),
        });
        return this;
      },
    };
  }

  on(
    event: JourneyEventDefinition,
    options: TransitionOptions<InferObject<TContextSchema>> = {},
  ): TransitionTargetBuilder<TContextSchema, this> {
    return {
      target: (state: StateBuilder<string, TContextSchema>) => {
        this.transitions.push({
          kind: "event",
          target: state,
          eventName: event.name,
          description: event.name,
          ...(options.priority !== undefined ? { priority: options.priority } : {}),
          ...(options.guard ? { guard: options.guard as (context: GuardContext<unknown, unknown>) => MaybePromise<GuardResult> } : {}),
        });
        return this;
      },
    };
  }

  transitionTo(state: StateBuilder<string, TContextSchema>, options: TransitionOptions<InferObject<TContextSchema>> = {}) {
    this.transitions.push({
      kind: "conversational",
      target: state,
      ...(options.priority !== undefined ? { priority: options.priority } : {}),
      ...(options.description ? { description: options.description } : {}),
      ...(options.guard ? { guard: options.guard as (context: GuardContext<unknown, unknown>) => MaybePromise<GuardResult> } : {}),
    });
    return this;
  }

  entry<TTool extends AnyTool>(toolDefinition: TTool, options: ToolRunOptionsFor<TTool, InferObject<TContextSchema>>) {
    this.toolRuns.push({
      tool: toolDefinition,
      actionType: "entry",
      ...(options.confirm ? { confirm: options.confirm } : {}),
      ...(options.input ? { input: options.input as (args: { context: unknown }) => unknown } : {}),
      assign: compileAssignments(options.assign),
      ...(options.onSuccess ? { onSuccess: options.onSuccess as StateBuilder<string, ObjectSchema> } : {}),
      ...(options.onFailure ? { onFailure: options.onFailure as StateBuilder<string, ObjectSchema> } : {}),
      ...(options.onValidationError ? { onValidationError: options.onValidationError as StateBuilder<string, ObjectSchema> } : {}),
    });
    this.stateActions.push({ type: "entry", name: toolDefinition.name });
    if (toolDefinition.sideEffect || options.confirm) this.requiresVisit("entry action requires visit");
    return this;
  }

  exit<TTool extends AnyTool>(toolDefinition: TTool, options: ToolRunOptionsFor<TTool, InferObject<TContextSchema>>) {
    this.toolRuns.push({
      tool: toolDefinition,
      actionType: "exit",
      ...(options.confirm ? { confirm: options.confirm } : {}),
      ...(options.input ? { input: options.input as (args: { context: unknown }) => unknown } : {}),
      assign: compileAssignments(options.assign),
      ...(options.onSuccess ? { onSuccess: options.onSuccess as StateBuilder<string, ObjectSchema> } : {}),
      ...(options.onFailure ? { onFailure: options.onFailure as StateBuilder<string, ObjectSchema> } : {}),
      ...(options.onValidationError ? { onValidationError: options.onValidationError as StateBuilder<string, ObjectSchema> } : {}),
    });
    this.stateActions.push({ type: "exit", name: toolDefinition.name });
    if (toolDefinition.sideEffect || options.confirm) this.requiresVisit("exit action requires visit");
    return this;
  }

  runTool<TTool extends AnyTool>(toolDefinition: TTool, options: ToolRunOptionsFor<TTool, InferObject<TContextSchema>>) {
    this.toolRuns.push({
      tool: toolDefinition,
      actionType: "transition",
      ...(options.confirm ? { confirm: options.confirm } : {}),
      ...(options.input ? { input: options.input as (args: { context: unknown }) => unknown } : {}),
      assign: compileAssignments(options.assign),
      ...(options.onSuccess ? { onSuccess: options.onSuccess as StateBuilder<string, ObjectSchema> } : {}),
      ...(options.onFailure ? { onFailure: options.onFailure as StateBuilder<string, ObjectSchema> } : {}),
      ...(options.onValidationError ? { onValidationError: options.onValidationError as StateBuilder<string, ObjectSchema> } : {}),
    });
    this.stateActions.push({ type: "transition", name: toolDefinition.name });
    if (toolDefinition.sideEffect || options.confirm) this.requiresVisit("tool action requires visit");
    return this;
  }

  useAction<TAction extends ActionDefinition>(
    actionDefinition: TAction,
    options: StateActionUseOptions<TAction, InferObject<TContextSchema>> | "entry" | "exit" | "transition" = "transition",
  ) {
    const actionType = typeof options === "string" ? options : options.type ?? "transition";
    const input = typeof options === "string" ? undefined : options.input;
    this.actionRuns.push({
      action: actionDefinition,
      actionType,
      ...(input ? { input: input as (args: { context: unknown }) => unknown } : {}),
    });
    this.stateActions.push({
      type: actionType,
      name: actionDefinition.name,
      ...(actionDefinition.requiresVisit !== undefined ? { requiresVisit: actionDefinition.requiresVisit } : {}),
    });
    if (actionDefinition.requiresVisit) this.requiresVisit("action requires visit");
    return this;
  }

  requiresVisit(reason = "state requires visit") {
    this.visitRequirement = reason;
    return this;
  }

  allowSkip() {
    this.visitRequirement = null;
    return this;
  }

  compile(
    parentId?: string,
    inheritedTools: AnyTool[] = [],
    inheritedKnowledge: KnowledgeSource[] = [],
    inheritedCollectedFields: StateBuilder<string, TContextSchema>["collectedFields"] = [],
  ): CompiledState[] {
    const tools = this.tools.list(inheritedTools);
    const knowledge = this.knowledge.list(inheritedKnowledge);
    const collected = mergeCollectedFields(inheritedCollectedFields, this.collectedFields);
    const own: CompiledState = {
      id: this.id,
      type: this.stateType,
      ...(parentId ? { parentId } : {}),
      ...(this.initialChildState ? { initialStateId: this.initialChildState.id } : {}),
      ...(this.stateInstructions ? { instructions: this.stateInstructions } : {}),
      ...(this.stateSummary ? { summary: this.stateSummary } : {}),
      tools,
      knowledge,
      collected,
      transitions: this.transitions.map((transition) => ({
        kind: transition.kind,
        targetId: transition.target.id,
        ...(transition.eventName ? { eventName: transition.eventName } : {}),
        ...(transition.description ? { description: transition.description } : {}),
        ...(transition.priority !== undefined ? { priority: transition.priority } : {}),
        ...(transition.guard ? { guard: transition.guard } : {}),
      })),
      actions: this.stateActions.map((stateAction) => ({
        type: stateAction.type,
        name: stateAction.name,
      })),
      actionRuns: this.actionRuns.map((actionRun) => ({
        action: actionRun.action,
        actionType: actionRun.actionType,
        ...(actionRun.input ? { input: actionRun.input } : {}),
      })),
      toolRuns: this.toolRuns.map((toolRun) => ({
        tool: toolRun.tool,
        actionType: toolRun.actionType,
        assign: toolRun.assign,
        ...(toolRun.confirm ? { confirm: toolRun.confirm } : {}),
        ...(toolRun.input ? { input: toolRun.input } : {}),
        ...(toolRun.onSuccess ? { onSuccessId: toolRun.onSuccess.id } : {}),
        ...(toolRun.onFailure ? { onFailureId: toolRun.onFailure.id } : {}),
        ...(toolRun.onValidationError ? { onValidationErrorId: toolRun.onValidationError.id } : {}),
      })),
      requiresVisit: this.visitRequirement !== null,
    };
    return [own, ...this.children.flatMap((child) => child.compile(this.id, tools, knowledge, collected))];
  }
}

function resolveFieldWidget(widgetOption: FieldWidgetOption | undefined) {
  if (!widgetOption) return null;
  if ("widget" in widgetOption) {
    return {
      widget: widgetOption.widget,
      input: widgetOption.input,
    };
  }
  return { widget: widgetOption };
}

function compileAssignments<TContext>(
  assign: ToolRunOptions<AnyTool, TContext>["assign"] | undefined,
): Array<{ path: string; value: (args: { output: unknown; context: unknown }) => unknown }> {
  if (!assign) return [];
  return Object.entries(assign).map(([path, value]) => ({
    path,
    value: value as (args: { output: unknown; context: unknown }) => unknown,
  }));
}

function mergeCollectedFields<TContextSchema extends ObjectSchema>(
  inherited: StateBuilder<string, TContextSchema>["collectedFields"],
  own: StateBuilder<string, TContextSchema>["collectedFields"],
) {
  const byPath = new Map<string, StateBuilder<string, TContextSchema>["collectedFields"][number]>();
  for (const field of inherited) byPath.set(field.path, field);
  for (const field of own) byPath.set(field.path, field);
  return [...byPath.values()];
}
