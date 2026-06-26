import type { CompiledAgent, CompiledJourney } from "../../definition.js";
import { runtimeLogger } from "../../logging.js";
import type { ConversationRecord, RuntimeEventInput } from "../../storage.js";
import type {
  AnyTool,
  CustomRuntimeEventDefinition,
  ModelAdapter,
  ModelMessage,
  ModelToolDefinition,
  RuntimeEvent,
  RuntimeSnapshot,
  TextGenerationInput,
  TextGenerationOutput,
} from "../../types.js";
import {
  listPendingSupportActions,
  resolvePendingSupportAction,
} from "../approvals.js";
import {
  createRuntimeConversation,
  deleteRuntimeConversation,
  listRuntimeConversations,
  listRuntimeEvents,
  replayRuntimeConversation,
  updateRuntimeConversationContext,
} from "../facade/conversations.js";
import {
  emitRuntimeCustomEvent,
  emitRuntimeEvent,
  emitRuntimeGeneratedPreamble,
  emitRuntimeIntermediateMessage,
  resolveRuntimeCustomEvent,
} from "../facade/events.js";
import {
  applyRuntimeBuiltInLifecycleTool,
  applyRuntimeConversationClosure,
  applyRuntimeConversationResume,
  applyRuntimeHandoffRequest,
  createRuntimeLifecycleInterruptionResult,
  requireRuntimeConversation,
  requireRuntimeConversationRecord,
} from "../facade/lifecycle.js";
import {
  compactRuntimeConversation,
  compactRuntimeIfNeeded,
  createRuntimeCitationSegments,
  generateRuntimeResponseWithTools,
  generateRuntimeTextWithTrace,
  redactRuntimeAssistantMessage,
  redactRuntimeModelMessages,
  redactRuntimeUserMessage,
  requireRuntimeAgent,
  requireRuntimeModels,
} from "../facade/models.js";
import type {
  CompactConversationInput,
  ConversationMessage,
  CreateRuntimeConversationInput,
  EmitCustomEventInput,
  EmitGeneratedPreambleInput,
  EmitIntermediateMessageInput,
  ListRuntimeConversationsOptions,
  RequestHandoffInput,
  ResumeConversationInput,
  RetrievedKnowledgeItem,
  ResolvePendingSupportActionInput,
  RuntimeOptions,
  StateMachineTurnResult,
  UpdateRuntimeConversationContextInput,
} from "../types.js";

export function createRuntimeCore(options: RuntimeOptions) {
  const logger = runtimeLogger(options);
  const core = {
    async initialize() {
      logger.info({
        hasAgent: Boolean(options.agent),
        hasModels: Boolean(options.models),
        hasJourneyIndex: Boolean(options.journeyIndex),
      }, "Runtime initializing");
      await options.storage.initialize?.();
      logger.info("Runtime initialized");
    },
    async createConversation<TConversationContext = unknown>(input: CreateRuntimeConversationInput<TConversationContext>) {
      logger.debug({ hasContext: input.context !== undefined }, "Creating conversation");
      const conversation = await createRuntimeConversation(options, core.emit, input);
      runtimeLogger(options, { conversationId: conversation.id }).info({
        lifecycle: conversation.lifecycle,
      }, "Conversation created");
      return conversation;
    },
    emit<TEvent extends RuntimeEventInput>(event: TEvent) {
      return emitRuntimeEvent(options, event);
    },
    emitIntermediateMessage(input: EmitIntermediateMessageInput) {
      return emitRuntimeIntermediateMessage(options, core.requireConversation, core.emit, input);
    },
    emitGeneratedPreamble(input: EmitGeneratedPreambleInput) {
      return emitRuntimeGeneratedPreamble({
        options,
        requireAgent: core.requireAgent,
        requireModels: core.requireModels,
        requireConversation: core.requireConversation,
        generateTextWithTrace: core.generateTextWithTrace,
        redactModelMessages: core.redactModelMessages,
        redactAssistantMessage: core.redactAssistantMessage,
        emitIntermediateMessage: core.emitIntermediateMessage,
      }, input);
    },
    emitCustomEvent<TEvent extends CustomRuntimeEventDefinition>(input: EmitCustomEventInput<TEvent>) {
      return emitRuntimeCustomEvent(core.requireConversationRecord, core.resolveCustomRuntimeEvent, core.emit, input);
    },
    listEvents(conversationId: string, afterOffset?: number) {
      return listRuntimeEvents(options, conversationId, afterOffset);
    },
    getConversation<TConversationContext = unknown>(conversationId: string) {
      return options.storage.getConversation<TConversationContext>(conversationId);
    },
    listConversations<TConversationContext = unknown>(input: ListRuntimeConversationsOptions = {}) {
      return listRuntimeConversations<TConversationContext>(options, input);
    },
    updateConversationContext<TConversationContext = unknown>(
      input: UpdateRuntimeConversationContextInput<TConversationContext>,
    ) {
      return updateRuntimeConversationContext<TConversationContext>(options, input);
    },
    deleteConversation(conversationId: string) {
      return deleteRuntimeConversation(options, conversationId);
    },
    replayConversation(input: { conversationId: string; afterOffset?: number }) {
      return replayRuntimeConversation(options, core.requireConversationRecord, input);
    },
    listPendingSupportActions(conversationId: string) {
      return listPendingSupportActions(options, conversationId);
    },
    resolvePendingSupportAction(input: ResolvePendingSupportActionInput) {
      return resolvePendingSupportAction({
        options,
        requireAgent: core.requireAgent,
        requireConversation: core.requireConversation,
        emit: core.emit,
        applyBuiltInLifecycleTool: core.applyBuiltInLifecycleTool,
      }, input);
    },
    getSnapshot(conversationId: string): Promise<RuntimeSnapshot | null> {
      return options.storage.getSnapshot(conversationId);
    },
    async closeConversation(conversationId: string, reason?: string) {
      runtimeLogger(options, { conversationId }).info({ reason }, "Closing conversation");
      const result = await applyRuntimeConversationClosure(options, {
        conversationId,
        ...(reason ? { reason } : {}),
        emit: core.emit,
      });
      runtimeLogger(options, { conversationId }).info("Conversation closed");
      return result.conversation;
    },
    requestHandoff(input: RequestHandoffInput) {
      runtimeLogger(options, { conversationId: input.conversationId }).info({
        hasSummary: input.summary !== undefined,
        hasPayload: input.payload !== undefined,
      }, "Requesting handoff");
      return applyRuntimeHandoffRequest(options, { ...input, emit: core.emit });
    },
    resumeConversation(input: ResumeConversationInput) {
      runtimeLogger(options, { conversationId: input.conversationId }).info({
        reason: input.reason,
        hasPayload: input.payload !== undefined,
      }, "Resuming conversation");
      return applyRuntimeConversationResume(options, { ...input, emit: core.emit });
    },
    compactConversation<TSummary>(input: CompactConversationInput) {
      return compactRuntimeConversation<TSummary>(core.modelingDeps(), input);
    },
    compactIfNeeded(input: {
      conversationId: string;
      schemaVersion?: string;
      signal?: AbortSignal;
    }) {
      return compactRuntimeIfNeeded(core.modelingDeps(), input);
    },
    requireAgent() {
      return requireRuntimeAgent(options);
    },
    requireModels() {
      return requireRuntimeModels(options);
    },
    resolveCustomRuntimeEvent<TEvent extends CustomRuntimeEventDefinition>(event: TEvent) {
      return resolveRuntimeCustomEvent(options.agent, event);
    },
    requireConversation(conversationId: string) {
      return requireRuntimeConversation(options, conversationId);
    },
    requireConversationRecord(conversationId: string) {
      return requireRuntimeConversationRecord(options, conversationId);
    },
    createLifecycleInterruptionResult(args: { conversationId: string; events: RuntimeEvent[] }) {
      return createRuntimeLifecycleInterruptionResult(options, args);
    },
    applyBuiltInLifecycleTool(args: {
      toolName: string;
      input: unknown;
      conversationId: string;
      emit: <TEvent extends RuntimeEventInput>(event: TEvent) => Promise<RuntimeEvent>;
    }) {
      return applyRuntimeBuiltInLifecycleTool(options, args);
    },
    generateTextWithTrace(input: {
      conversationId: string;
      model: ModelAdapter;
      input: TextGenerationInput;
    }) {
      return generateRuntimeTextWithTrace(options, input);
    },
    generateResponseWithTools(args: {
      conversation: ConversationRecord;
      model: ModelAdapter;
      messages: ModelMessage[];
      tools: AnyTool[];
      modelTools: ModelToolDefinition[];
      selectedJourney: CompiledJourney | null;
      stateMachineTurn: StateMachineTurnResult | null;
      signal?: AbortSignal;
      onTextDelta?(textDelta: string): Promise<void> | void;
      emit: <TEvent extends RuntimeEventInput>(event: TEvent) => Promise<RuntimeEvent>;
    }): Promise<TextGenerationOutput> {
      return generateRuntimeResponseWithTools(
        options,
        core.requireConversationRecord,
        core.applyBuiltInLifecycleTool,
        args,
      );
    },
    createCitationSegments(args: {
      agent: CompiledAgent;
      conversation: ConversationRecord;
      text: string;
      knowledge: RetrievedKnowledgeItem[];
      signal?: AbortSignal;
    }) {
      return createRuntimeCitationSegments(core.modelingDeps(), args);
    },
    redactUserMessage(conversation: ConversationRecord, text: string) {
      return redactRuntimeUserMessage(options, conversation, text);
    },
    redactModelMessages(conversation: ConversationRecord, messages: ModelMessage[]) {
      return redactRuntimeModelMessages(options, conversation, messages);
    },
    redactAssistantMessage(conversation: ConversationRecord, text: string) {
      return redactRuntimeAssistantMessage(options, conversation, text);
    },
    modelingDeps() {
      return {
        options,
        requireModels: core.requireModels,
        requireConversationRecord: core.requireConversationRecord,
        generateTextWithTrace: core.generateTextWithTrace,
        emit: core.emit,
      };
    },
  };
  return core;
}

export type RuntimeCore = ReturnType<typeof createRuntimeCore>;
export type RuntimeConversationMessage = ConversationMessage;
