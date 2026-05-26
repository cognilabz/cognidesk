import { z } from "zod";
import { CapabilityScope } from "./definition/capability-scope.js";
import type {
  ApplicationContextParts,
  AnyCustomRuntimeEvent,
  AnyTool,
  ContextPath,
  DefinitionError,
  GuardContext,
  GuardResult,
  KnowledgeSource,
  ObjectSchema,
  WidgetDefinition,
} from "./types.js";
import { DefinitionError as CognideskDefinitionError } from "./types.js";
import { StateBuilder } from "./definition/state-builder.js";
import {
  action,
  customRuntimeEvent,
  journeyEvent,
  knowledgeSource,
  tool,
  widget,
  widgetPrompt,
  type ActionDefinition,
  type ConfirmationPolicy,
  type EventRoutingMode,
  type FieldCollectionOptions,
  type JourneyEventDefinition,
  type ListCollectionOptions,
  type MaybePromise,
  type StateActionUseOptions,
  type ToolRunOptions,
  type ToolRunOptionsFor,
  type TransitionOptions,
} from "./definition/primitives.js";

export { CapabilityScope } from "./definition/capability-scope.js";
export { StateBuilder } from "./definition/state-builder.js";
export {
  action,
  customRuntimeEvent,
  journeyEvent,
  knowledgeSource,
  tool,
  widget,
  widgetPrompt,
} from "./definition/primitives.js";
export type {
  ActionDefinition,
  ConfirmationPolicy,
  EventRoutingMode,
  FieldCollectionOptions,
  JourneyEventDefinition,
  ListCollectionOptions,
  StateActionUseOptions,
  ToolRunOptions,
  ToolRunOptionsFor,
  TransitionOptions,
} from "./definition/primitives.js";

type InferObject<TSchema extends ObjectSchema> = z.infer<TSchema>;

export interface StateReference<TId extends string = string> {
  readonly id: TId;
}

export interface CompiledAgent {
  id: string;
  instructions: string;
  behavior: AgentBehaviorOptions;
  postProcessing: AgentPostProcessingOptions;
  journeys: CompiledJourney[];
  tools: AnyTool[];
  knowledge: KnowledgeSource[];
  widgets: WidgetDefinition[];
  customEvents: AnyCustomRuntimeEvent[];
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
  includeWhen?: CandidateFilterPredicate;
  matcher?: JourneyActivationPredicate;
  guard?: JourneyGuardPredicate;
  contextReuse?: CompiledContextReusePolicy;
  knowledge: KnowledgeSource[];
  tools: AnyTool[];
  context?: ObjectSchema;
  delegation?: CompiledDelegation;
  states: CompiledState[];
  initialStateId?: string;
  alternateEntries: CompiledJourneyEntry[];
  toGraph(): JourneyGraph;
  toJSON(): JourneyGraph;
  toMermaid(): string;
}

export interface CompiledState {
  id: string;
  parentId?: string;
  initialStateId?: string;
  type: "state" | "parallel" | "final";
  instructions?: string;
  summary?: string;
  tools: AnyTool[];
  knowledge: KnowledgeSource[];
  collected: Array<{
    path: string;
    required: boolean;
    extract: boolean;
    confirm?: true | "beforeAction" | ConfirmationPolicy;
    prompt?: string;
    widget?: WidgetDefinition;
    widgetInput?: unknown;
    requiredWhen?: (args: { context: unknown }) => boolean;
  }>;
  transitions: CompiledTransition[];
  actions: Array<{ type: "entry" | "exit" | "transition"; name: string }>;
  actionRuns: CompiledActionRun[];
  toolRuns: CompiledToolRun[];
  requiresVisit: boolean;
}

export interface CompiledTransition<TContext = unknown> {
  kind: "event" | "conversational";
  targetId: string;
  eventName?: string;
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

export interface CompiledActionRun<TContext = unknown> {
  action: ActionDefinition;
  actionType: "entry" | "exit" | "transition";
  input?: (args: { context: TContext }) => unknown;
}

export interface CompiledDelegation {
  goal: string;
  instructions?: string;
  tools: AnyTool[];
  completeWhen: string[];
}

export interface CompiledJourneyEntry<TContext = unknown> {
  stateId: string;
  description?: string;
  priority?: number;
  when: JourneyEntryPredicate<unknown, unknown, unknown, TContext>;
}

export interface JourneyGraphState {
  id: string;
  parentId?: string;
  initialStateId?: string;
  type: "state" | "parallel" | "final";
  instructions?: string;
  summary?: string;
  collected: Array<{ path: string; required: boolean; extract: boolean }>;
  transitions: Array<{ kind: "event" | "conversational"; targetId: string; eventName?: string; description?: string; priority?: number }>;
  actions: Array<{ type: "entry" | "exit" | "transition"; name: string }>;
  requiresVisit: boolean;
}

export interface JourneyGraph {
  id: string;
  kind: "stateMachine" | "delegation";
  initialStateId?: string;
  alternateEntries?: Array<{ stateId: string; description?: string; priority?: number }>;
  states: JourneyGraphState[];
}

export type JourneyActivationPredicate<TApp = unknown, TConversation = unknown, TTurn = unknown> = (
  args: ApplicationContextParts<TConversation, TTurn> & {
    app: TApp;
    activeJourneyId?: string;
  },
) => MaybePromise<boolean>;

export type CandidateFilterPredicate<TApp = unknown, TConversation = unknown, TTurn = unknown> = (
  args: ApplicationContextParts<TConversation, TTurn> & {
    app: TApp;
    activeJourneyId?: string;
  },
) => boolean;

export type JourneyGuardPredicate<TApp = unknown, TConversation = unknown, TTurn = unknown> = (
  args: ApplicationContextParts<TConversation, TTurn> & {
    app: TApp;
    activeJourneyId?: string;
    journeyId: string;
  },
) => MaybePromise<GuardResult>;

export type ContextReusePredicate<TApp = unknown, TConversation = unknown, TTurn = unknown, TContext = unknown> = (
  args: ApplicationContextParts<TConversation, TTurn> & {
    app: TApp;
    activeJourneyId?: string;
    journeyId: string;
    previousContext: TContext;
  },
) => MaybePromise<boolean>;

export type JourneyEntryPredicate<TApp = unknown, TConversation = unknown, TTurn = unknown, TContext = unknown> = (
  args: ApplicationContextParts<TConversation, TTurn> & {
    app: TApp;
    context: TContext;
    journeyId: string;
    activeJourneyId?: string;
  },
) => MaybePromise<boolean>;

export interface JourneyEntryOptions<TContext> {
  description?: string;
  priority?: number;
  when: JourneyEntryPredicate<unknown, unknown, unknown, TContext>;
}

export interface ContextReusePolicy<TContext> {
  fields?: Array<ContextPath<TContext>>;
  when: ContextReusePredicate<unknown, unknown, unknown, TContext>;
}

export interface CompiledContextReusePolicy {
  fields?: string[];
  when: ContextReusePredicate;
}

function pushUnique<T>(items: T[], item: T) {
  if (!items.includes(item)) items.push(item);
}

function assertUniqueNames(items: Array<{ name: string }>, label: string) {
  assertUniqueValues(items, label, (item) => item.name);
}

function assertUniqueIds(items: Array<{ id: string }>, label: string) {
  assertUniqueValues(items, label, (item) => item.id);
}

function assertUniqueKinds(items: Array<{ kind: string }>, label: string) {
  assertUniqueValues(items, label, (item) => item.kind);
}

function assertUniqueValues<T>(items: T[], label: string, value: (item: T) => string) {
  const seen = new Set<string>();
  for (const item of items) {
    const key = value(item);
    if (seen.has(key)) {
      throw new CognideskDefinitionError(`${label} '${key}' is already registered.`);
    }
    seen.add(key);
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
  includeWhen?: CandidateFilterPredicate;
  matcher?: JourneyActivationPredicate;
  guard?: JourneyGuardPredicate;
}

export interface StateMachineJourneyOptions<TContextSchema extends ObjectSchema> extends ActivationMetadata {
  context: TContextSchema;
  description?: string;
  contextReuse?: ContextReusePolicy<InferObject<TContextSchema>>;
}

export interface JourneyFragment<
  TName extends string = string,
  TContextSchema extends ObjectSchema = ObjectSchema,
> {
  kind: "journeyFragment";
  name: TName;
  context: TContextSchema;
  apply(journey: StateMachineJourneyBuilder<string, TContextSchema>): void;
}

export interface JourneyFragmentOptions<TContextSchema extends ObjectSchema> {
  context: TContextSchema;
  tools?: AnyTool[];
  knowledge?: KnowledgeSource[];
  define: (journey: StateMachineJourneyBuilder<string, TContextSchema>) => void;
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
  private readonly alternateEntryStates: Array<{
    state: StateBuilder<string, TContextSchema>;
    description?: string;
    priority?: number;
    when: JourneyEntryPredicate<unknown, unknown, unknown, InferObject<TContextSchema>>;
  }> = [];
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

  parallel<const TStateId extends string>(id: TStateId) {
    const state = this.states.add(id);
    state.markParallel();
    return state;
  }

  defineStates<const TStateIds extends readonly [string, ...string[]]>(...ids: TStateIds) {
    for (const id of ids) this.states.add(id);
    return new TypedStateRegistry<TStateIds[number], TContextSchema>(this.states);
  }

  final<const TStateId extends string>(id: TStateId) {
    const state = this.states.add(id);
    state.markFinal();
    return state;
  }

  event<const TName extends string, TPayloadSchema extends z.ZodType>(
    name: TName,
    config: { payload: TPayloadSchema; routing?: EventRoutingMode },
  ) {
    return journeyEvent(name, config);
  }

  use(fragment: JourneyFragment<string, TContextSchema>) {
    fragment.apply(this);
    return this;
  }

  alternateEntry(
    state: StateBuilder<string, TContextSchema>,
    options: JourneyEntryOptions<InferObject<TContextSchema>>,
  ) {
    this.alternateEntryStates.push({
      state,
      ...(options.description ? { description: options.description } : {}),
      ...(options.priority !== undefined ? { priority: options.priority } : {}),
      when: options.when,
    });
    return this;
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
    assertUniqueIds(states, "State");
    const stateIds = new Set(states.map((state) => state.id));
    for (const entry of this.alternateEntryStates) {
      if (!stateIds.has(entry.state.id)) {
        throw new CognideskDefinitionError(`Journey '${this.id}' declares unknown alternate entry state '${entry.state.id}'.`);
      }
    }
    const childrenByParentId = new Map<string, CompiledState[]>();
    for (const state of states) {
      if (!state.parentId) continue;
      const siblings = childrenByParentId.get(state.parentId) ?? [];
      siblings.push(state);
      childrenByParentId.set(state.parentId, siblings);
    }
    for (const state of states) {
      const children = childrenByParentId.get(state.id) ?? [];
      if (children.length > 0 && state.type === "state" && !state.initialStateId) {
        throw new CognideskDefinitionError(`State '${state.id}' has child states and must declare an initial child state.`);
      }
      if (state.initialStateId && !children.some((child) => child.id === state.initialStateId)) {
        throw new CognideskDefinitionError(`State '${state.id}' declares unknown initial child state '${state.initialStateId}'.`);
      }
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
      ...(this.alternateEntryStates.length > 0 ? {
        alternateEntries: this.alternateEntryStates.map((entry) => ({
          stateId: entry.state.id,
          ...(entry.description ? { description: entry.description } : {}),
          ...(entry.priority !== undefined ? { priority: entry.priority } : {}),
        })),
      } : {}),
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
      ...(this.options.includeWhen ? { includeWhen: this.options.includeWhen } : {}),
      ...(this.options.matcher ? { matcher: this.options.matcher } : {}),
      ...(this.options.guard ? { guard: this.options.guard } : {}),
      ...(this.options.contextReuse ? {
        contextReuse: {
          ...(this.options.contextReuse.fields ? { fields: this.options.contextReuse.fields.map(String) } : {}),
          when: this.options.contextReuse.when as ContextReusePredicate,
        },
      } : {}),
      knowledge: this.knowledge.list(),
      tools: this.tools.list(),
      context: this.options.context,
      states,
      initialStateId: this.initialState.id,
      alternateEntries: this.alternateEntryStates.map((entry) => ({
        stateId: entry.state.id,
        ...(entry.description ? { description: entry.description } : {}),
        ...(entry.priority !== undefined ? { priority: entry.priority } : {}),
        when: entry.when as JourneyEntryPredicate,
      })),
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
      ...(this.options.includeWhen ? { includeWhen: this.options.includeWhen } : {}),
      ...(this.options.matcher ? { matcher: this.options.matcher } : {}),
      ...(this.options.guard ? { guard: this.options.guard } : {}),
      knowledge: this.options.specialist.knowledge ?? [],
      tools: [],
      delegation: {
        goal: this.options.specialist.goal,
        ...(this.options.specialist.instructions ? { instructions: this.options.specialist.instructions } : {}),
        tools: this.options.specialist.tools ?? [],
        completeWhen: this.options.completeWhen ?? [],
      },
      states: [],
      alternateEntries: [],
      toGraph: () => graph,
      toJSON: () => graph,
      toMermaid: () => `stateDiagram-v2\n  [*] --> ${this.id}`,
    };
  }
}

export function journeyFragment<const TName extends string, TContextSchema extends ObjectSchema>(
  name: TName,
  options: JourneyFragmentOptions<TContextSchema>,
): JourneyFragment<TName, TContextSchema> {
  return {
    kind: "journeyFragment",
    name,
    context: options.context,
    apply(journey) {
      if (options.tools?.length) journey.tools.add(...options.tools);
      if (options.knowledge?.length) journey.knowledge.add(...options.knowledge);
      options.define(journey);
    },
  };
}

export interface AgentBehaviorOptions {
  interruptOnNewMessage?: boolean;
}

export interface AgentPostProcessingOptions {
  citations?: boolean;
}

export interface AgentOptions {
  instructions: string;
  behavior?: AgentBehaviorOptions;
  postProcessing?: AgentPostProcessingOptions;
}

export class AgentBuilder<const TId extends string> {
  readonly tools = new CapabilityScope<AnyTool>();
  readonly knowledge = new CapabilityScope<KnowledgeSource>();
  readonly customEvents = new CapabilityScope<AnyCustomRuntimeEvent>();
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
    assertUniqueIds(compiledJourneys, "Journey");
    assertUniqueNames(this.tools.list(), "Tool");
    assertUniqueNames(this.knowledge.list(), "Knowledge source");
    const customEvents = this.customEvents.list();
    assertUniqueNames(customEvents, "Custom runtime event");
    assertUniqueKinds(this.widgets, "Widget");
    return {
      id: this.id,
      instructions: this.options.instructions,
      behavior: this.options.behavior ?? {},
      postProcessing: this.options.postProcessing ?? {},
      journeys: compiledJourneys,
      tools: this.tools.list(),
      knowledge: this.knowledge.list(),
      widgets: this.widgets,
      customEvents,
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

function sanitizeGraph(graph: JourneyGraph): JourneyGraph {
  return {
    ...graph,
    states: graph.states.map((state) => ({
      id: state.id,
      type: state.type,
      ...(state.parentId ? { parentId: state.parentId } : {}),
      ...(state.initialStateId ? { initialStateId: state.initialStateId } : {}),
      ...(state.instructions ? { instructions: state.instructions } : {}),
      ...(state.summary ? { summary: state.summary } : {}),
      collected: state.collected.map((field) => ({
        path: field.path,
        required: field.required,
        extract: field.extract,
      })),
      transitions: state.transitions.map((transition) => ({
        kind: transition.kind,
        targetId: transition.targetId,
        ...(transition.eventName ? { eventName: transition.eventName } : {}),
        ...(transition.description ? { description: transition.description } : {}),
        ...(transition.priority !== undefined ? { priority: transition.priority } : {}),
      })),
      actions: state.actions,
      requiresVisit: state.requiresVisit,
    })),
    ...(graph.alternateEntries ? { alternateEntries: graph.alternateEntries } : {}),
  };
}

export type { DefinitionError };
