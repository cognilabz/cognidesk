import type { z } from "zod";
import { DefinitionError as CognideskDefinitionError } from "../types.js";
import type { AnyTool, KnowledgeSource, ObjectSchema } from "../types.js";
import { CapabilityScope } from "./capability-scope.js";
import type {
  CompiledJourney,
  CompiledState,
  ContextReusePredicate,
  DelegationJourneyOptions,
  JourneyEntryOptions,
  JourneyEntryPredicate,
  JourneyGraph,
  StateMachineJourneyOptions,
} from "./compiled-types.js";
import { journeyEvent, type EventRoutingMode } from "./primitives.js";
import { StateBuilder } from "./state-builder.js";
import { assertUniqueIds, graphToMermaid, sanitizeGraph } from "./utils.js";

type InferObject<TSchema extends ObjectSchema> = z.infer<TSchema>;

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
    validateStateGraph(this.id, states, this.alternateEntryStates, this.initialState);
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

function validateStateGraph<TContextSchema extends ObjectSchema>(
  journeyId: string,
  states: CompiledState[],
  alternateEntryStates: Array<{ state: StateBuilder<string, TContextSchema> }>,
  initialState: StateBuilder<string, TContextSchema>,
) {
  const stateIds = new Set(states.map((state) => state.id));
  for (const entry of alternateEntryStates) {
    if (!stateIds.has(entry.state.id)) {
      throw new CognideskDefinitionError(`Journey '${journeyId}' declares unknown alternate entry state '${entry.state.id}'.`);
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
  if (!stateIds.has(initialState.id)) {
    throw new CognideskDefinitionError(`Journey '${journeyId}' declares unknown initial state '${initialState.id}'.`);
  }
}
