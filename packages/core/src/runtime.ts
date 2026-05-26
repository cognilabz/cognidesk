import { createRuntimeKernel, type RuntimeKernel } from "./runtime/kernel.js";
import { type ConversationCompactionSummary } from "./runtime/schemas.js";
import type {
  ActiveTurn,
  CompactConversationInput,
  CompactConversationResult,
  CreateRuntimeConversationInput,
  EmitCustomEventInput,
  EmitGeneratedPreambleInput,
  EmitGeneratedPreambleResult,
  EmitIntermediateMessageInput,
  EmitJourneyEventInput,
  EmitJourneyEventResult,
  HandleUserMessageInput,
  HandleUserMessageResult,
  ReplayConversationInput,
  ReplayConversationResult,
  RequestHandoffInput,
  ResumeConversationInput,
  RuntimeOptions,
  SubmitWidgetInput,
} from "./runtime/types.js";
import type { JourneyEventDefinition } from "./definition.js";
import type { ConversationRecord, RuntimeEventInput } from "./storage.js";
import type {
  CustomRuntimeEventDefinition,
  RuntimeEvent,
  RuntimeSnapshot,
} from "./types.js";

export { conversationCompactionSummarySchema } from "./runtime/schemas.js";
export type { ConversationCompactionSummary } from "./runtime/schemas.js";
export type {
  CompactConversationInput,
  CompactConversationResult,
  CreateRuntimeConversationInput,
  EmitCustomEventInput,
  EmitGeneratedPreambleInput,
  EmitGeneratedPreambleResult,
  EmitIntermediateMessageInput,
  EmitJourneyEventInput,
  EmitJourneyEventResult,
  HandleUserMessageInput,
  HandleUserMessageResult,
  ReplayConversationInput,
  ReplayConversationResult,
  RequestHandoffInput,
  ResumeConversationInput,
  RuntimeOptions,
  SubmitWidgetInput,
  ReplayedMessage,
  ReplayedPrompt,
} from "./runtime/types.js";

export class CognideskRuntime {
  private readonly activeTurns = new Map<string, ActiveTurn>();
  private readonly kernel: RuntimeKernel;

  constructor(private readonly options: RuntimeOptions) {
    this.kernel = createRuntimeKernel(options, this.activeTurns);
  }

  async initialize() {
    await this.kernel.initialize();
  }

  createConversation<TConversationContext = unknown>(
    input: CreateRuntimeConversationInput<TConversationContext>,
  ): Promise<ConversationRecord<TConversationContext>> {
    return this.kernel.createConversation(input);
  }

  emit<TEvent extends RuntimeEventInput>(event: TEvent): Promise<RuntimeEvent> {
    return this.kernel.emit(event);
  }

  emitIntermediateMessage(input: EmitIntermediateMessageInput): Promise<{ events: RuntimeEvent[] }> {
    return this.kernel.emitIntermediateMessage(input);
  }

  emitGeneratedPreamble(input: EmitGeneratedPreambleInput): Promise<EmitGeneratedPreambleResult> {
    return this.kernel.emitGeneratedPreamble(input);
  }

  emitCustomEvent<TEvent extends CustomRuntimeEventDefinition>(
    input: EmitCustomEventInput<TEvent>,
  ): Promise<RuntimeEvent> {
    return this.kernel.emitCustomEvent(input);
  }

  emitJourneyEvent<TEvent extends JourneyEventDefinition>(
    input: EmitJourneyEventInput<TEvent>,
  ): Promise<EmitJourneyEventResult> {
    return this.kernel.emitJourneyEvent(input);
  }

  listEvents(conversationId: string, afterOffset?: number) {
    return this.kernel.listEvents(conversationId, afterOffset);
  }

  replayConversation(input: ReplayConversationInput): Promise<ReplayConversationResult> {
    return this.kernel.replayConversation(input);
  }

  submitWidget(input: SubmitWidgetInput): Promise<RuntimeEvent> {
    return this.kernel.submitWidget(input);
  }

  getSnapshot(conversationId: string): Promise<RuntimeSnapshot | null> {
    return this.kernel.getSnapshot(conversationId);
  }

  handleUserMessage<TTurn = unknown>(
    input: HandleUserMessageInput<TTurn>,
  ): Promise<HandleUserMessageResult> {
    return this.kernel.handleUserMessage(input);
  }

  closeConversation(conversationId: string, reason?: string) {
    return this.kernel.closeConversation(conversationId, reason);
  }

  requestHandoff(input: RequestHandoffInput) {
    return this.kernel.requestHandoff(input);
  }

  resumeConversation(input: ResumeConversationInput) {
    return this.kernel.resumeConversation(input);
  }

  compactConversation<TSummary = ConversationCompactionSummary>(
    input: CompactConversationInput,
  ): Promise<CompactConversationResult<TSummary>> {
    return this.kernel.compactConversation<TSummary>(input);
  }
}

export function createRuntime(options: RuntimeOptions) {
  return new CognideskRuntime(options);
}
