import type { z } from "zod";
import type {
  ApplicationContextParts,
  AnyCustomRuntimeEvent,
  AnyTool,
  ContextPath,
  GuardContext,
  GuardResult,
  KnowledgeSource,
  ObjectSchema,
  WidgetDefinition,
} from "../types.js";
import type {
  ActionDefinition,
  ConfirmationPolicy,
  EventRoutingMode,
  MaybePromise,
} from "./primitives.js";

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

export interface DelegationJourneyOptions extends ActivationMetadata {
  specialist: {
    goal: string;
    instructions?: string;
    tools?: AnyTool[];
    knowledge?: KnowledgeSource[];
  };
  completeWhen?: string[];
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
