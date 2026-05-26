import { z } from "zod";
import { CapabilityScope } from "./capability-scope.js";
import type { ActionDefinition, FieldCollectionOptions, JourneyEventDefinition, ListCollectionOptions, MaybePromise, StateActionUseOptions, ToolRunOptionsFor, TransitionOptions } from "./primitives.js";
import type { CompiledState, StateReference } from "./compiled-types.js";
import type { AnyTool, ContextPath, GuardContext, GuardResult, KnowledgeSource, ObjectSchema, WidgetDefinition } from "../types.js";
import { DefinitionError as CognideskDefinitionError } from "../types.js";
import { compileAssignments, mergeCollectedFields, resolveFieldWidget } from "./state-builder-utils.js";
import type { CollectedField, InferObject, InternalActionRun, InternalToolRun, InternalTransition, StateActionRecord, TransitionTargetBuilder } from "./state-builder-types.js";

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
  readonly collectedFields: CollectedField[] = [];
  readonly stateActions: StateActionRecord[] = [];
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
    return this.registerToolRun("entry", toolDefinition, options, "entry action requires visit");
  }

  exit<TTool extends AnyTool>(toolDefinition: TTool, options: ToolRunOptionsFor<TTool, InferObject<TContextSchema>>) {
    return this.registerToolRun("exit", toolDefinition, options, "exit action requires visit");
  }

  runTool<TTool extends AnyTool>(toolDefinition: TTool, options: ToolRunOptionsFor<TTool, InferObject<TContextSchema>>) {
    return this.registerToolRun("transition", toolDefinition, options, "tool action requires visit");
  }

  private registerToolRun<TTool extends AnyTool>(
    actionType: "entry" | "exit" | "transition",
    toolDefinition: TTool,
    options: ToolRunOptionsFor<TTool, InferObject<TContextSchema>>,
    visitReason: string,
  ) {
    this.toolRuns.push({
      tool: toolDefinition,
      actionType,
      ...(options.confirm ? { confirm: options.confirm } : {}),
      ...(options.input ? { input: options.input as (args: { context: unknown }) => unknown } : {}),
      assign: compileAssignments(options.assign),
      ...(options.onSuccess ? { onSuccess: options.onSuccess as StateBuilder<string, ObjectSchema> } : {}),
      ...(options.onFailure ? { onFailure: options.onFailure as StateBuilder<string, ObjectSchema> } : {}),
      ...(options.onValidationError ? { onValidationError: options.onValidationError as StateBuilder<string, ObjectSchema> } : {}),
    });
    this.stateActions.push({ type: actionType, name: toolDefinition.name });
    if (toolDefinition.sideEffect || options.confirm) this.requiresVisit(visitReason);
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
