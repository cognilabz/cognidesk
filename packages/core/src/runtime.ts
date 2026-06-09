import { createRuntimeKernel, type RuntimeKernel } from "./runtime/kernel.js";
import { createRuntimeLogger, runtimeLogger } from "./logging.js";
import { createPrivacyStorageAdapter } from "./runtime/privacy.js";
import { type ConversationCompactionSummary } from "./runtime/schemas.js";
import {
  telemetryAttributes,
  telemetryContentMode,
  telemetrySpanNames,
  withTelemetrySpan,
} from "./telemetry.js";
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
  HandleVoiceUserMessageInput,
  HandleVoiceUserMessageResult,
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
  CommitVoiceTranscriptInput,
  CommitVoiceTranscriptResult,
  CustomRuntimeEventDefinition,
  RecordVoiceInterruptionInput,
  RuntimeEvent,
  RuntimeSnapshot,
  StartVoiceConversationInput,
  StartVoiceResult,
  StartVoiceSegmentInput,
} from "./types.js";
import {
  assertNoActiveVoiceSegment,
  commitRuntimeVoiceTranscript,
  endRuntimeVoiceSegment,
  handleRuntimeVoiceUserMessage,
  recordRuntimeVoiceInterruption,
  startRuntimeVoiceConversation,
  startRuntimeVoiceSegment,
} from "./runtime/voice.js";

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
  HandleVoiceUserMessageInput,
  HandleVoiceUserMessageResult,
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
export type {
  CommitVoiceTranscriptInput,
  CommitVoiceTranscriptReferenceInput,
  CommitVoiceTranscriptResult,
  RecordVoiceInterruptionInput,
  StartVoiceConversationInput,
  StartVoiceResult,
  StartVoiceSegmentInput,
} from "./types.js";

export class CognideskRuntime {
  private readonly activeTurns = new Map<string, ActiveTurn>();
  private readonly kernel: RuntimeKernel;
  private readonly options: RuntimeOptions;

  constructor(options: RuntimeOptions) {
    this.options = {
      ...options,
      storage: createPrivacyStorageAdapter(options.storage, options.privacy),
      logger: options.logger ?? createRuntimeLogger(options),
    };
    this.kernel = createRuntimeKernel(this.options, this.activeTurns);
  }

  async initialize() {
    if (telemetryContentMode(this.options) === "full") {
      runtimeLogger(this.options).warn(
        "Cognidesk telemetry content mode is full; message, prompt, tool, and Knowledge content may be exported to OpenTelemetry backends without telemetry redaction.",
      );
    }
    await this.runtimeOperation("initialize", telemetrySpanNames.runtimeInitialize, {}, () => this.kernel.initialize());
  }

  createConversation<TConversationContext = unknown>(
    input: CreateRuntimeConversationInput<TConversationContext>,
  ): Promise<ConversationRecord<TConversationContext>> {
    return this.runtimeOperation("create_conversation", telemetrySpanNames.runtimeCreateConversation, {
      [telemetryAttributes.agentId]: input.agentId,
    }, () => this.kernel.createConversation(input));
  }

  emit<TEvent extends RuntimeEventInput>(event: TEvent): Promise<RuntimeEvent> {
    return this.runtimeOperation("emit_event", telemetrySpanNames.runtimeEmitEvent, {
      [telemetryAttributes.conversationId]: event.conversationId,
      "cognidesk.runtime.event.type": event.type,
    }, () => this.kernel.emit(event));
  }

  emitIntermediateMessage(input: EmitIntermediateMessageInput): Promise<{ events: RuntimeEvent[] }> {
    return this.runtimeOperation("emit_intermediate_message", telemetrySpanNames.runtimeEmitIntermediateMessage, {
      [telemetryAttributes.conversationId]: input.conversationId,
    }, () => this.kernel.emitIntermediateMessage(input));
  }

  emitGeneratedPreamble(input: EmitGeneratedPreambleInput): Promise<EmitGeneratedPreambleResult> {
    return this.runtimeOperation("emit_generated_preamble", telemetrySpanNames.runtimeEmitGeneratedPreamble, {
      [telemetryAttributes.conversationId]: input.conversationId,
    }, () => this.kernel.emitGeneratedPreamble(input));
  }

  emitCustomEvent<TEvent extends CustomRuntimeEventDefinition>(
    input: EmitCustomEventInput<TEvent>,
  ): Promise<RuntimeEvent> {
    return this.runtimeOperation("emit_custom_event", telemetrySpanNames.runtimeEmitCustomEvent, {
      [telemetryAttributes.conversationId]: input.conversationId,
      "cognidesk.custom_event.name": input.event.name,
    }, () => this.kernel.emitCustomEvent(input));
  }

  emitJourneyEvent<TEvent extends JourneyEventDefinition>(
    input: EmitJourneyEventInput<TEvent>,
  ): Promise<EmitJourneyEventResult> {
    return this.runtimeOperation("emit_journey_event", telemetrySpanNames.runtimeEmitJourneyEvent, {
      [telemetryAttributes.conversationId]: input.conversationId,
      "cognidesk.journey_event.name": input.event.name,
    }, () => this.kernel.emitJourneyEvent(input));
  }

  listEvents(conversationId: string, afterOffset?: number) {
    return this.runtimeOperation("list_events", telemetrySpanNames.runtimeListEvents, {
      [telemetryAttributes.conversationId]: conversationId,
    }, () => this.kernel.listEvents(conversationId, afterOffset));
  }

  replayConversation(input: ReplayConversationInput): Promise<ReplayConversationResult> {
    return this.runtimeOperation("replay_conversation", telemetrySpanNames.runtimeReplayConversation, {
      [telemetryAttributes.conversationId]: input.conversationId,
    }, () => this.kernel.replayConversation(input));
  }

  submitWidget(input: SubmitWidgetInput): Promise<RuntimeEvent> {
    return this.runtimeOperation("submit_widget", telemetrySpanNames.runtimeSubmitWidget, {
      [telemetryAttributes.conversationId]: input.conversationId,
      "cognidesk.widget.kind": input.widgetKind,
    }, () => this.kernel.submitWidget(input));
  }

  getSnapshot(conversationId: string): Promise<RuntimeSnapshot | null> {
    return this.runtimeOperation("get_snapshot", telemetrySpanNames.runtimeGetSnapshot, {
      [telemetryAttributes.conversationId]: conversationId,
    }, () => this.kernel.getSnapshot(conversationId));
  }

  handleUserMessage<TTurn = unknown>(
    input: HandleUserMessageInput<TTurn>,
  ): Promise<HandleUserMessageResult> {
    return this.runtimeOperation("handle_user_message", telemetrySpanNames.runtimeHandleUserMessage, {
      [telemetryAttributes.conversationId]: input.conversationId,
    }, async () => {
      await assertNoActiveVoiceSegment(this.options, input.conversationId);
      return this.kernel.handleUserMessage(input);
    });
  }

  handleVoiceUserMessage<TTurn = unknown>(
    input: HandleVoiceUserMessageInput<TTurn>,
  ): Promise<HandleVoiceUserMessageResult> {
    return this.runtimeOperation("handle_voice_user_message", telemetrySpanNames.runtimeHandleUserMessage, {
      [telemetryAttributes.conversationId]: input.conversationId,
    }, () => handleRuntimeVoiceUserMessage(
      this.kernel.emit,
      (turnInput) => this.kernel.handleUserMessage(turnInput),
      input,
    ));
  }

  startVoiceConversation<TConversationContext = unknown>(
    input: StartVoiceConversationInput<TConversationContext>,
  ): Promise<StartVoiceResult> {
    return this.runtimeOperation("start_voice_conversation", telemetrySpanNames.runtimeEmitEvent, {
      [telemetryAttributes.agentId]: input.agentId,
    }, () => startRuntimeVoiceConversation(
      this.options,
      (conversationInput) => this.kernel.createConversation(conversationInput),
      (segmentInput) => startRuntimeVoiceSegment(
        this.options,
        this.kernel.requireConversation,
        this.kernel.emit,
        segmentInput,
      ),
      input,
    ));
  }

  startVoiceSegment(input: StartVoiceSegmentInput): Promise<StartVoiceResult> {
    return this.runtimeOperation("start_voice_segment", telemetrySpanNames.runtimeEmitEvent, {
      [telemetryAttributes.conversationId]: input.conversationId,
    }, () => startRuntimeVoiceSegment(
      this.options,
      this.kernel.requireConversation,
      this.kernel.emit,
      input,
    ));
  }

  endVoiceSegment(input: {
    conversationId: string;
    channelSegmentId: string;
    connectionId?: string;
    reason?: string;
  }): Promise<RuntimeEvent> {
    return this.runtimeOperation("end_voice_segment", telemetrySpanNames.runtimeEmitEvent, {
      [telemetryAttributes.conversationId]: input.conversationId,
    }, () => endRuntimeVoiceSegment(this.kernel.emit, input));
  }

  commitVoiceTranscript(input: CommitVoiceTranscriptInput): Promise<CommitVoiceTranscriptResult> {
    return this.runtimeOperation("commit_voice_transcript", telemetrySpanNames.runtimeEmitEvent, {
      [telemetryAttributes.conversationId]: input.conversationId,
    }, () => commitRuntimeVoiceTranscript(this.kernel.emit, input));
  }

  recordVoiceInterruption(input: RecordVoiceInterruptionInput): Promise<RuntimeEvent> {
    return this.runtimeOperation("record_voice_interruption", telemetrySpanNames.runtimeEmitEvent, {
      [telemetryAttributes.conversationId]: input.conversationId,
    }, () => recordRuntimeVoiceInterruption(this.kernel.emit, input));
  }

  closeConversation(conversationId: string, reason?: string) {
    return this.runtimeOperation("close_conversation", telemetrySpanNames.runtimeCloseConversation, {
      [telemetryAttributes.conversationId]: conversationId,
    }, () => this.kernel.closeConversation(conversationId, reason));
  }

  requestHandoff(input: RequestHandoffInput) {
    return this.runtimeOperation("request_handoff", telemetrySpanNames.runtimeRequestHandoff, {
      [telemetryAttributes.conversationId]: input.conversationId,
    }, () => this.kernel.requestHandoff(input));
  }

  resumeConversation(input: ResumeConversationInput) {
    return this.runtimeOperation("resume_conversation", telemetrySpanNames.runtimeResumeConversation, {
      [telemetryAttributes.conversationId]: input.conversationId,
    }, () => this.kernel.resumeConversation(input));
  }

  compactConversation<TSummary = ConversationCompactionSummary>(
    input: CompactConversationInput,
  ): Promise<CompactConversationResult<TSummary>> {
    return this.runtimeOperation("compact_conversation", telemetrySpanNames.runtimeCompactConversation, {
      [telemetryAttributes.conversationId]: input.conversationId,
    }, () => this.kernel.compactConversation<TSummary>(input));
  }

  private runtimeOperation<T>(
    operation: string,
    spanName: string,
    attributes: Record<string, string | number | boolean | undefined>,
    run: () => T | Promise<T>,
  ): Promise<Awaited<T>> {
    return withTelemetrySpan(this.options, {
      name: spanName,
      attributes: {
        ...attributes,
        [telemetryAttributes.operation]: operation,
        ...(this.options.agent ? { [telemetryAttributes.agentId]: this.options.agent.id } : {}),
      },
      metric: {
        kind: "runtime",
        attributes: {
          [telemetryAttributes.operation]: operation,
          ...(this.options.agent ? { [telemetryAttributes.agentId]: this.options.agent.id } : {}),
        },
      },
    }, () => run() as Awaited<T>);
  }
}

export function createRuntime(options: RuntimeOptions) {
  return new CognideskRuntime(options);
}
