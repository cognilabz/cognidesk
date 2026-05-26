import type { CompiledAgent, CompiledJourney, EventRoutingMode } from "../../definition.js";
import type { ConversationRecord, RuntimeEventInput, StorageAdapter } from "../../storage.js";
import type { AgentModelSet, RuntimeEvent, RuntimeSnapshot } from "../../types.js";

export type RuntimeEmit = <TEvent extends RuntimeEventInput>(event: TEvent) => Promise<RuntimeEvent>;

type RunStateActionRuns = (args: {
  journey: CompiledJourney;
  conversation: ConversationRecord;
  state: CompiledJourney["states"][number];
  context: Record<string, unknown>;
  actionType: "entry" | "exit" | "transition";
  signal?: AbortSignal;
  emit: RuntimeEmit;
}) => Promise<void>;

type RunStateToolRuns = (args: {
  journey: CompiledJourney;
  conversation: ConversationRecord;
  state: CompiledJourney["states"][number];
  context: Record<string, unknown>;
  actionType: "entry" | "exit" | "transition";
  confirmedPromptId?: string;
  signal?: AbortSignal;
  emit: RuntimeEmit;
}) => Promise<string | null>;

type SelectTransition = (args: {
  journey: CompiledJourney;
  conversation: ConversationRecord;
  state: CompiledJourney["states"][number];
  context: Record<string, unknown>;
  models?: AgentModelSet;
  userText?: string;
  signal?: AbortSignal;
  emit: RuntimeEmit;
}) => Promise<CompiledJourney["states"][number]["transitions"][number] | null>;

type SelectEventTransition = (args: {
  journey: CompiledJourney;
  conversation: ConversationRecord;
  state: CompiledJourney["states"][number];
  eventName: string;
  context: Record<string, unknown>;
  app: unknown;
  emit: RuntimeEmit;
}) => Promise<CompiledJourney["states"][number]["transitions"][number] | null>;

type ResolveJourneyEventRoute = (args: {
  agent: CompiledAgent;
  previousSnapshot: RuntimeSnapshot | null;
  eventName: string;
  routing: EventRoutingMode;
  target?: { journeyId?: string; stateId?: string };
}) => { journey: CompiledJourney; state: CompiledJourney["states"][number] } | null;

type AdvanceStateMachine = (args: {
  journey: CompiledJourney;
  conversation: ConversationRecord;
  stateById: Map<string, CompiledJourney["states"][number]>;
  state: CompiledJourney["states"][number];
  context: Record<string, unknown>;
  signal?: AbortSignal;
  emit: RuntimeEmit;
}) => Promise<CompiledJourney["states"]>;

export interface StateInteractionDeps {
  storage: StorageAdapter;
  agent?: CompiledAgent;
  requireConversationRecord(conversationId: string): Promise<ConversationRecord>;
  runStateActionRuns: RunStateActionRuns;
  runStateToolRuns: RunStateToolRuns;
  selectTransition: SelectTransition;
  selectEventTransition: SelectEventTransition;
  resolveJourneyEventRoute: ResolveJourneyEventRoute;
  advanceStateMachine: AdvanceStateMachine;
  emit: RuntimeEmit;
}
