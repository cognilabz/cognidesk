import { z } from "zod";
import type {
  ApplicationContextParts,
  AnyTool,
  ContextPath,
  DefinitionError,
  GuardContext,
  GuardResult,
  KnowledgeSource,
  ObjectSchema,
  SideEffectTool,
  ToolDefinition,
  WidgetDefinition,
  WidgetPromptDefinition,
} from "./types.js";
import { DefinitionError as CognideskDefinitionError } from "./types.js";

type InferObject<TSchema extends ObjectSchema> = z.infer<TSchema>;
type MaybePromise<T> = T | Promise<T>;

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
  widget?: WidgetDefinition;
}

export interface ListCollectionOptions<TContext, TItemSchema extends z.ZodType> {
  item: TItemSchema;
  countFrom?: ContextPath<TContext>;
  prompt?: string;
  widget?: WidgetDefinition;
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

export interface ActionDefinition<
  TName extends string = string,
  TInputSchema extends z.ZodType = z.ZodType,
> {
  kind: "action";
  name: TName;
  input: TInputSchema;
  run: (args: { input: z.infer<TInputSchema> }) => MaybePromise<void>;
  requiresVisit?: boolean;
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

export interface StateReference<TId extends string = string> {
  readonly id: TId;
}

export interface CompiledAgent {
  id: string;
  instructions: string;
  journeys: CompiledJourney[];
  tools: AnyTool[];
  knowledge: KnowledgeSource[];
  widgets: WidgetDefinition[];
}

export interface CompiledJourney {
  id: string;
  kind: "stateMachine" | "delegation";
  condition: string;
  examples: string[];
  tags: string[];
  priority: number;
  stickiness: "low" | "medium" | "high";
  alwaysInclude: boolean;
  always?: JourneyActivationPredicate;
  matcher?: JourneyActivationPredicate;
  knowledge: KnowledgeSource[];
  context?: ObjectSchema;
  delegation?: CompiledDelegation;
  states: CompiledState[];
  initialStateId?: string;
  toGraph(): JourneyGraph;
  toJSON(): JourneyGraph;
  toMermaid(): string;
}

export interface CompiledState {
  id: string;
  parentId?: string;
  type: "state" | "parallel" | "final";
  instructions?: string;
  summary?: string;
  collected: Array<{ path: string; required: boolean; extract: boolean }>;
  transitions: CompiledTransition[];
  actions: Array<{ type: "entry" | "exit" | "transition"; name: string }>;
  toolRuns: CompiledToolRun[];
  requiresVisit: boolean;
}

export interface CompiledTransition<TContext = unknown> {
  kind: "event" | "conversational";
  targetId: string;
  description?: string;
  priority?: number;
  guard?: (context: GuardContext<unknown, TContext>) => MaybePromise<GuardResult>;
}

export interface CompiledToolRun<TContext = unknown> {
  tool: AnyTool;
  confirm?: ConfirmationPolicy;
  actionType: "entry" | "exit" | "transition";
  input?: (args: { context: TContext }) => unknown;
  assign: Array<{ path: string; value: (args: { output: unknown; context: TContext }) => unknown }>;
  onSuccessId?: string;
  onFailureId?: string;
  onValidationErrorId?: string;
}

export interface CompiledDelegation {
  goal: string;
  instructions?: string;
  tools: AnyTool[];
  completeWhen: string[];
}

export interface JourneyGraphState {
  id: string;
  parentId?: string;
  type: "state" | "parallel" | "final";
  instructions?: string;
  summary?: string;
  collected: Array<{ path: string; required: boolean; extract: boolean }>;
  transitions: Array<{ kind: "event" | "conversational"; targetId: string; description?: string; priority?: number }>;
  actions: Array<{ type: "entry" | "exit" | "transition"; name: string }>;
  requiresVisit: boolean;
}

export interface JourneyGraph {
  id: string;
  kind: "stateMachine" | "delegation";
  initialStateId?: string;
  states: JourneyGraphState[];
}

export type JourneyActivationPredicate<TApp = unknown, TConversation = unknown, TTurn = unknown> = (
  args: ApplicationContextParts<TConversation, TTurn> & {
    app: TApp;
    activeJourneyId?: string;
  },
) => MaybePromise<boolean>;

interface InternalTransition {
  kind: "event" | "conversational";
  target: StateBuilder<string, ObjectSchema>;
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

interface TransitionTargetBuilder<TContextSchema extends ObjectSchema, TReturn> {
  target(state: StateBuilder<string, TContextSchema>): TReturn;
}

function pushUnique<T>(items: T[], item: T) {
  if (!items.includes(item)) items.push(item);
}

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

export class CapabilityScope<TItem> {
  private readonly items: TItem[] = [];
  private onlyItems: TItem[] | null = null;
  private readonly excludedItems: TItem[] = [];

  add(...items: TItem[]) {
    for (const item of items) pushUnique(this.items, item);
    return this;
  }

  only(...items: TItem[]) {
    this.onlyItems = [...items];
    return this;
  }

  exclude(...items: TItem[]) {
    for (const item of items) pushUnique(this.excludedItems, item);
    return this;
  }

  list(inherited: TItem[] = []) {
    const base = this.onlyItems ?? [...inherited, ...this.items];
    return base.filter((item) => !this.excludedItems.includes(item));
  }
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
  readonly collectedFields: Array<{ path: string; required: boolean; extract: boolean }> = [];
  readonly stateActions: Array<{ type: "entry" | "exit" | "transition"; name: string; requiresVisit?: boolean }> = [];
  private visitRequirement: string | null = null;
  private stateInstructions?: string;
  private stateSummary?: string;
  private stateType: "state" | "parallel" | "final" = "state";

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
    this.collectedFields.push({
      path,
      required: options.required ?? true,
      extract: options.extract ?? true,
    });
    if (options.widget || options.confirm) this.requiresVisit("field collection requires user-visible handling");
    return this;
  }

  collectList<TItemSchema extends z.ZodType>(
    path: ContextPath<InferObject<TContextSchema>>,
    options: ListCollectionOptions<InferObject<TContextSchema>, TItemSchema>,
  ) {
    void options;
    this.collectedFields.push({ path, required: true, extract: true });
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
    child.stateType = "parallel";
    return child;
  }

  final<const TChildId extends string>(id: TChildId) {
    const child = this.state(id);
    child.stateType = "final";
    child.requiresVisit("final state marks journey completion");
    return child;
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

  useAction(actionDefinition: ActionDefinition, type: "entry" | "exit" | "transition" = "transition") {
    this.stateActions.push({
      type,
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

  compile(parentId?: string): CompiledState[] {
    const own: CompiledState = {
      id: this.id,
      type: this.stateType,
      ...(parentId ? { parentId } : {}),
      ...(this.stateInstructions ? { instructions: this.stateInstructions } : {}),
      ...(this.stateSummary ? { summary: this.stateSummary } : {}),
      collected: this.collectedFields,
      transitions: this.transitions.map((transition) => ({
        kind: transition.kind,
        targetId: transition.target.id,
        ...(transition.description ? { description: transition.description } : {}),
        ...(transition.priority !== undefined ? { priority: transition.priority } : {}),
        ...(transition.guard ? { guard: transition.guard } : {}),
      })),
      actions: this.stateActions.map((stateAction) => ({
        type: stateAction.type,
        name: stateAction.name,
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
    return [own, ...this.children.flatMap((child) => child.compile(this.id))];
  }
}

export interface ActivationMetadata {
  condition: string;
  examples?: string[];
  tags?: string[];
  priority?: number;
  stickiness?: "low" | "medium" | "high";
  always?: boolean | JourneyActivationPredicate;
  alwaysInclude?: boolean;
  includeWhen?: (args: { app: unknown }) => boolean;
  matcher?: JourneyActivationPredicate;
}

export interface StateMachineJourneyOptions<TContextSchema extends ObjectSchema> extends ActivationMetadata {
  context: TContextSchema;
  description?: string;
}

export class StateCollection<TContextSchema extends ObjectSchema> {
  private readonly states = new Map<string, StateBuilder<string, TContextSchema>>();

  constructor(private readonly contextSchema: TContextSchema) {}

  add<const TId extends string>(id: TId) {
    if (this.states.has(id)) {
      throw new CognideskDefinitionError(`State '${id}' already exists.`);
    }
    const state = new StateBuilder(id, this.contextSchema);
    this.states.set(id, state);
    return state;
  }

  get<TId extends string>(id: TId) {
    const state = this.states.get(id);
    if (!state) throw new CognideskDefinitionError(`State '${id}' does not exist.`);
    return state as StateBuilder<TId, TContextSchema>;
  }

  list() {
    return [...this.states.values()];
  }
}

export class TypedStateRegistry<
  TStateIds extends string,
  TContextSchema extends ObjectSchema,
> {
  constructor(private readonly collection: StateCollection<TContextSchema>) {}

  get<TId extends TStateIds>(id: TId) {
    return this.collection.get(id) as StateBuilder<TId, TContextSchema>;
  }
}

export class StateMachineJourneyBuilder<
  const TId extends string,
  TContextSchema extends ObjectSchema,
> {
  readonly kind = "stateMachine" as const;
  readonly states: StateCollection<TContextSchema>;
  readonly tools = new CapabilityScope<AnyTool>();
  readonly knowledge = new CapabilityScope<KnowledgeSource>();
  private initialState?: StateBuilder<string, TContextSchema>;

  constructor(
    readonly id: TId,
    readonly options: StateMachineJourneyOptions<TContextSchema>,
  ) {
    this.states = new StateCollection(options.context);
  }

  state<const TStateId extends string>(id: TStateId) {
    return this.states.add(id);
  }

  defineStates<const TStateIds extends readonly [string, ...string[]]>(...ids: TStateIds) {
    for (const id of ids) this.states.add(id);
    return new TypedStateRegistry<TStateIds[number], TContextSchema>(this.states);
  }

  final<const TStateId extends string>(id: TStateId) {
    const state = this.states.add(id);
    state.requiresVisit("final state marks journey completion");
    return state;
  }

  event<const TName extends string, TPayloadSchema extends z.ZodType>(
    name: TName,
    config: { payload: TPayloadSchema; routing?: EventRoutingMode },
  ) {
    return journeyEvent(name, config);
  }

  initial(state: StateBuilder<string, TContextSchema>) {
    this.initialState = state;
    return this;
  }

  compile(): CompiledJourney {
    if (!this.initialState) {
      throw new CognideskDefinitionError(`Journey '${this.id}' must declare an initial state.`);
    }
    const states = this.states.list().flatMap((state) => state.compile());
    const stateIds = new Set(states.map((state) => state.id));
    for (const state of states) {
      for (const transition of state.transitions) {
        if (!stateIds.has(transition.targetId)) {
          throw new CognideskDefinitionError(`State '${state.id}' targets unknown state '${transition.targetId}'.`);
        }
      }
    }
    const graph: JourneyGraph = {
      id: this.id,
      kind: "stateMachine",
      initialStateId: this.initialState.id,
      states,
    };
    return {
      id: this.id,
      kind: "stateMachine",
      condition: this.options.condition,
      examples: this.options.examples ?? [],
      tags: this.options.tags ?? [],
      priority: this.options.priority ?? 0,
      stickiness: this.options.stickiness ?? "medium",
      alwaysInclude: this.options.always === true || this.options.alwaysInclude === true,
      ...(typeof this.options.always === "function" ? { always: this.options.always } : {}),
      ...(this.options.matcher ? { matcher: this.options.matcher } : {}),
      knowledge: this.knowledge.list(),
      context: this.options.context,
      states,
      initialStateId: this.initialState.id,
      toGraph: () => sanitizeGraph(graph),
      toJSON: () => sanitizeGraph(graph),
      toMermaid: () => graphToMermaid(graph),
    };
  }
}

export interface DelegationJourneyOptions extends ActivationMetadata {
  specialist: {
    goal: string;
    instructions?: string;
    tools?: AnyTool[];
    knowledge?: KnowledgeSource[];
  };
  completeWhen?: string[];
}

export class DelegationJourneyBuilder<const TId extends string> {
  readonly kind = "delegation" as const;
  constructor(readonly id: TId, readonly options: DelegationJourneyOptions) {}

  compile(): CompiledJourney {
    const graph: JourneyGraph = { id: this.id, kind: "delegation", states: [] };
    return {
      id: this.id,
      kind: "delegation",
      condition: this.options.condition,
      examples: this.options.examples ?? [],
      tags: this.options.tags ?? [],
      priority: this.options.priority ?? 0,
      stickiness: this.options.stickiness ?? "medium",
      alwaysInclude: this.options.always === true || this.options.alwaysInclude === true,
      ...(typeof this.options.always === "function" ? { always: this.options.always } : {}),
      ...(this.options.matcher ? { matcher: this.options.matcher } : {}),
      knowledge: this.options.specialist.knowledge ?? [],
      delegation: {
        goal: this.options.specialist.goal,
        ...(this.options.specialist.instructions ? { instructions: this.options.specialist.instructions } : {}),
        tools: this.options.specialist.tools ?? [],
        completeWhen: this.options.completeWhen ?? [],
      },
      states: [],
      toGraph: () => graph,
      toJSON: () => graph,
      toMermaid: () => `stateDiagram-v2\n  [*] --> ${this.id}`,
    };
  }
}

export interface AgentOptions {
  instructions: string;
}

export class AgentBuilder<const TId extends string> {
  readonly tools = new CapabilityScope<AnyTool>();
  readonly knowledge = new CapabilityScope<KnowledgeSource>();
  readonly widgets: WidgetDefinition[] = [];
  private readonly journeys: Array<StateMachineJourneyBuilder<string, ObjectSchema> | DelegationJourneyBuilder<string>> = [];

  constructor(readonly id: TId, readonly options: AgentOptions) {}

  stateMachineJourney<const TJourneyId extends string, TContextSchema extends ObjectSchema>(
    id: TJourneyId,
    options: StateMachineJourneyOptions<TContextSchema>,
  ) {
    const journey = new StateMachineJourneyBuilder(id, options);
    this.journeys.push(journey as unknown as StateMachineJourneyBuilder<string, ObjectSchema>);
    return journey;
  }

  delegationJourney<const TJourneyId extends string>(
    id: TJourneyId,
    options: DelegationJourneyOptions,
  ) {
    const journey = new DelegationJourneyBuilder(id, options);
    this.journeys.push(journey);
    return journey;
  }

  registerWidget(widgetDefinition: WidgetDefinition) {
    pushUnique(this.widgets, widgetDefinition);
    return this;
  }

  compile(): CompiledAgent {
    const compiledJourneys = this.journeys.map((journey) => journey.compile());
    return {
      id: this.id,
      instructions: this.options.instructions,
      journeys: compiledJourneys,
      tools: this.tools.list(),
      knowledge: this.knowledge.list(),
      widgets: this.widgets,
    };
  }
}

export function createAgent<const TId extends string>(id: TId, options: AgentOptions) {
  return new AgentBuilder(id, options);
}

function graphToMermaid(graph: JourneyGraph) {
  const lines = ["stateDiagram-v2"];
  if (graph.initialStateId) lines.push(`  [*] --> ${graph.initialStateId}`);
  for (const state of graph.states) {
    if (state.type === "final") lines.push(`  ${state.id} --> [*]`);
    for (const transition of state.transitions) {
      lines.push(`  ${state.id} --> ${transition.targetId}${transition.description ? `: ${transition.description}` : ""}`);
    }
  }
  return lines.join("\n");
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

function sanitizeGraph(graph: JourneyGraph): JourneyGraph {
  return {
    ...graph,
    states: graph.states.map((state) => ({
      id: state.id,
      type: state.type,
      ...(state.parentId ? { parentId: state.parentId } : {}),
      ...(state.instructions ? { instructions: state.instructions } : {}),
      ...(state.summary ? { summary: state.summary } : {}),
      collected: state.collected,
      transitions: state.transitions.map((transition) => ({
        kind: transition.kind,
        targetId: transition.targetId,
        ...(transition.description ? { description: transition.description } : {}),
        ...(transition.priority !== undefined ? { priority: transition.priority } : {}),
      })),
      actions: state.actions,
      requiresVisit: state.requiresVisit,
    })),
  };
}

export type { DefinitionError };
