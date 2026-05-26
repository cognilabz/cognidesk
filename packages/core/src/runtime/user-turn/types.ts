import type { CompiledAgent, CompiledJourney } from "../../definition.js";
import type { ConversationRecord, RuntimeEventInput } from "../../storage.js";
import type {
  AgentModelSet,
  AnyTool,
  MessageSegment,
  ModelAdapter,
  ModelMessage,
  ModelToolDefinition,
  ModelVisiblePromptPayload,
  RuntimeEvent,
  RuntimeSnapshot,
  TextGenerationOutput,
} from "../../types.js";
import type {
  ActiveTurn,
  CompactConversationResult,
  ConversationMessage,
  HandleUserMessageInput,
  HandleUserMessageResult,
  RetrievedKnowledgeItem,
  RuntimeOptions,
  StateMachineTurnResult,
} from "../types.js";

export type RuntimeEmit = <TEvent extends RuntimeEventInput>(event: TEvent) => Promise<RuntimeEvent>;

export interface HandleUserMessageDeps<TTurn> {
  options: RuntimeOptions;
  activeTurns: Map<string, ActiveTurn>;
  input: HandleUserMessageInput<TTurn>;
  requireAgent(): CompiledAgent;
  requireModels(): AgentModelSet;
  requireConversation(conversationId: string): Promise<ConversationRecord>;
  emit: RuntimeEmit;
  compactIfNeeded(input: {
    conversationId: string;
    schemaVersion?: string;
    signal?: AbortSignal;
  }): Promise<CompactConversationResult | null>;
  selectJourney(input: {
    agent: CompiledAgent;
    models: AgentModelSet;
    conversation: ConversationRecord;
    previousSnapshot: RuntimeSnapshot | null;
    history: ConversationMessage[];
    input: HandleUserMessageInput<TTurn>;
    userText: string;
    emit: RuntimeEmit;
  }): Promise<CompiledJourney | null>;
  executeStateMachineTurn(input: {
    journey: CompiledJourney;
    models: AgentModelSet;
    conversation: ConversationRecord;
    previousSnapshot: RuntimeSnapshot | null;
    userText: string;
    turn: unknown;
    app: unknown;
    signal?: AbortSignal;
    emit: RuntimeEmit;
  }): Promise<StateMachineTurnResult>;
  createLifecycleInterruptionResult(input: {
    conversationId: string;
    events: RuntimeEvent[];
  }): Promise<HandleUserMessageResult | null>;
  retrieveKnowledge(input: {
    agent: CompiledAgent;
    journey: CompiledJourney | null;
    stateMachineTurn: StateMachineTurnResult | null;
    conversationId: string;
    message: string;
    signal?: AbortSignal;
    emit: RuntimeEmit;
  }): Promise<RetrievedKnowledgeItem[]>;
  redactUserMessage(conversation: ConversationRecord, text: string): Promise<string>;
  redactModelMessages(conversation: ConversationRecord, messages: ModelMessage[]): Promise<ModelMessage[]>;
  generateResponseWithTools(input: {
    conversation: ConversationRecord;
    model: ModelAdapter;
    messages: ModelMessage[];
    promptPayload?: ModelVisiblePromptPayload;
    tools: AnyTool[];
    modelTools: ModelToolDefinition[];
    selectedJourney: CompiledJourney | null;
    stateMachineTurn: StateMachineTurnResult | null;
    signal?: AbortSignal;
    onTextDelta?(textDelta: string): Promise<void> | void;
    emit: RuntimeEmit;
  }): Promise<TextGenerationOutput>;
  redactAssistantMessage(conversation: ConversationRecord, text: string): Promise<string>;
  createCitationSegments(input: {
    agent: CompiledAgent;
    conversation: ConversationRecord;
    text: string;
    knowledge: RetrievedKnowledgeItem[];
    signal?: AbortSignal;
  }): Promise<MessageSegment[] | null>;
  evaluateDelegationCompletion(input: {
    journey: CompiledJourney | null;
    models: AgentModelSet;
    conversation: ConversationRecord;
    history: ConversationMessage[];
    signal?: AbortSignal;
    emit: RuntimeEmit;
  }): Promise<{ journeyId: string; reason?: string } | null>;
}
