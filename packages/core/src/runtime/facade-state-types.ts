import type { CompiledAgent, CompiledJourney, EventRoutingMode } from "../definition.js";
import type { ConversationRecord } from "../storage.js";
import type {
  AgentModelSet,
  ModelAdapter,
  RuntimeSnapshot,
  TextGenerationInput,
  TextGenerationOutput,
} from "../types.js";
import type { RuntimeEventEmitter } from "./types.js";

export interface RuntimeStateMachineDeps {
  generateTextWithTrace: (input: {
    conversationId: string;
    model: ModelAdapter;
    input: TextGenerationInput;
  }) => Promise<TextGenerationOutput>;
  requireConversationRecord: (conversationId: string) => Promise<ConversationRecord>;
  selectTransition: (input: {
    journey: CompiledJourney;
    conversation: ConversationRecord;
    state: CompiledJourney["states"][number];
    context: Record<string, unknown>;
    models?: AgentModelSet;
    userText?: string;
    signal?: AbortSignal;
    emit: RuntimeEventEmitter;
  }) => Promise<CompiledJourney["states"][number]["transitions"][number] | null>;
  runStateActionRuns: (input: StateRunArgs) => Promise<void>;
  runStateToolRuns: (input: StateToolRunArgs) => Promise<string | null>;
  emitFieldPrompts: (input: StatePromptArgs) => Promise<number>;
  emitFieldConfirmationPrompts: (input: StatePromptArgs) => Promise<number>;
  emitConfirmationPrompts: (input: StatePromptArgs) => Promise<number>;
}

export interface RuntimeStateInteractionDeps {
  options: {
    storage: import("../storage.js").StorageAdapter;
    agent?: CompiledAgent;
  };
  emit: RuntimeEventEmitter;
  requireConversationRecord: (conversationId: string) => Promise<ConversationRecord>;
  runStateActionRuns: RuntimeStateMachineDeps["runStateActionRuns"];
  runStateToolRuns: RuntimeStateMachineDeps["runStateToolRuns"];
  selectTransition: RuntimeStateMachineDeps["selectTransition"];
  selectEventTransition: (input: {
    journey: CompiledJourney;
    conversation: ConversationRecord;
    state: CompiledJourney["states"][number];
    eventName: string;
    context: Record<string, unknown>;
    app: unknown;
    emit: RuntimeEventEmitter;
  }) => Promise<CompiledJourney["states"][number]["transitions"][number] | null>;
  resolveJourneyEventRoute: (input: {
    agent: CompiledAgent;
    previousSnapshot: RuntimeSnapshot | null;
    eventName: string;
    routing: EventRoutingMode;
    target?: { journeyId?: string; stateId?: string };
  }) => { journey: CompiledJourney; state: CompiledJourney["states"][number] } | null;
  advanceStateMachine: (input: {
    journey: CompiledJourney;
    models?: AgentModelSet;
    conversation: ConversationRecord;
    stateById: Map<string, CompiledJourney["states"][number]>;
    state: CompiledJourney["states"][number];
    context: Record<string, unknown>;
    userText?: string;
    signal?: AbortSignal;
    emit: RuntimeEventEmitter;
  }) => Promise<CompiledJourney["states"]>;
}

type StateRunArgs = {
  journey: CompiledJourney;
  conversation: ConversationRecord;
  state: CompiledJourney["states"][number];
  context: Record<string, unknown>;
  actionType: "entry" | "exit" | "transition";
  signal?: AbortSignal;
  emit: RuntimeEventEmitter;
};

type StateToolRunArgs = StateRunArgs & {
  confirmedPromptId?: string;
};

type StatePromptArgs = {
  journey: CompiledJourney;
  conversation: ConversationRecord;
  state: CompiledJourney["states"][number];
  context: Record<string, unknown>;
  emit: RuntimeEventEmitter;
};
