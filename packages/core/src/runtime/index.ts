import { createRuntimeKernel, type RuntimeKernel } from "./kernel.js";
import { createRuntimeLogger, runtimeLogger } from "../logging.js";
import { blockedChannelEventBinding } from "./channel/events.js";
import {
  handleRuntimeChannelEvent,
  requestRuntimeChannelHandoff,
  requestRuntimeChannelHandoffReview,
  requestRuntimeOutboundContact,
  resolveRuntimeChannelOutput,
} from "./channel/facade.js";
import type { RuntimeChannelFacadeContext } from "./facade/context.js";
import { explainRuntimeTurn } from "./debug-facade.js";
import { createPrivacyStorageAdapter } from "./privacy.js";
import { type ConversationCompactionSummary } from "./schemas.js";
import {
  telemetryAttributes,
  telemetryContentMode,
  telemetrySpanNames,
  withTelemetrySpan,
} from "../telemetry.js";
import type {
  ActiveTurn,
  CompactConversationInput,
  CompactConversationResult,
  ChannelOutputResolutionPolicyInput,
  CreateRuntimeConversationInput,
  EmitCustomEventInput,
  EmitGeneratedPreambleInput,
  EmitGeneratedPreambleResult,
  EmitIntermediateMessageInput,
  EmitJourneyEventInput,
  EmitJourneyEventResult,
  EmitScheduledEventInput,
  EmitScheduledEventResult,
  ExplainTurnInput,
  ExplainTurnResult,
  HandleChannelEventInput,
  HandleChannelEventResult,
  HandleVoiceUserMessageInput,
  HandleVoiceUserMessageResult,
  HandleUserMessageInput,
  HandleUserMessageResult,
  ListRuntimeConversationsOptions,
  ListPendingSupportActionsInput,
  PendingSupportAction,
  ReplayConversationInput,
  ReplayConversationResult,
  RequestChannelHandoffInput,
  RequestChannelHandoffReviewInput,
  RequestHandoffInput,
  RequestOutboundContactInput,
  ResolveChannelOutputInput,
  ResolveChannelOutputResult,
  ResolvePendingSupportActionInput,
  ResolvePendingSupportActionResult,
  ResumeConversationInput,
  RuntimeApprovalEvaluationInput,
  RuntimeContextOptions,
  RuntimeContextResolveInput,
  RuntimeConfigurationSource,
  RuntimeOptions,
  SubmitWidgetInput,
} from "./types.js";
import type { JourneyEventDefinition } from "../definition.js";
import type { ConversationRecord, RuntimeEventInput } from "../storage.js";
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
} from "../types.js";
import { defineChannelEvent } from "../types.js";
import { assertNoActiveVoiceSegment } from "./voice/core.js";
import { emitRuntimeScheduledEvent } from "./scheduled-events.js";
import {
  commitRuntimeVoiceTranscriptWithTelemetry,
  endRuntimeVoiceSegmentWithTelemetry,
  handleRuntimeVoiceChannelUserMessage,
  recordRuntimeVoiceInterruptionWithTelemetry,
  startRuntimeVoiceConversationWithChannelEvent,
  startRuntimeVoiceSegmentWithChannelEvent,
} from "./voice/facade.js";

export { conversationCompactionSummarySchema } from "./schemas.js";
export type { ConversationCompactionSummary } from "./schemas.js";
export type {
  CompactConversationInput,
  CompactConversationResult,
  ChannelEventBindingInput,
  ChannelEventHandlingInput,
  ChannelOutputResolutionPolicyInput,
  CreateRuntimeConversationInput,
  EmitCustomEventInput,
  EmitGeneratedPreambleInput,
  EmitGeneratedPreambleResult,
  EmitIntermediateMessageInput,
  EmitJourneyEventInput,
  EmitJourneyEventResult,
  EmitScheduledEventInput,
  EmitScheduledEventResult,
  ExplainTurnInput,
  ExplainTurnResult,
  HandleChannelEventInput,
  HandleChannelEventResult,
  HandleVoiceUserMessageInput,
  HandleVoiceUserMessageResult,
  HandleUserMessageInput,
  HandleUserMessageResult,
  ListRuntimeConversationsOptions,
  ListPendingSupportActionsInput,
  PendingSupportAction,
  ReplayConversationInput,
  ReplayConversationResult,
  RequestChannelHandoffInput,
  RequestChannelHandoffReviewInput,
  RequestHandoffInput,
  RequestOutboundContactInput,
  ResolveChannelOutputInput,
  ResolveChannelOutputResult,
  ResolvePendingSupportActionInput,
  ResolvePendingSupportActionResult,
  ResumeConversationInput,
  RuntimeApprovalEvaluationInput,
  RuntimeContextOptions,
  RuntimeContextResolveInput,
  RuntimeConfigurationSource,
  RuntimeOptions,
  SubmitWidgetInput,
  ReplayedMessage,
  ReplayedPrompt,
} from "./types.js";
export type {
  CommitVoiceTranscriptInput,
  CommitVoiceTranscriptReferenceInput,
  CommitVoiceTranscriptResult,
  RecordVoiceInterruptionInput,
  StartVoiceConversationInput,
  StartVoiceResult,
  StartVoiceSegmentInput,
} from "../types.js";

export class CognideskRuntime {
  private readonly activeTurns = new Map<string, ActiveTurn>();
  private readonly kernel: RuntimeKernel;
  private readonly options: RuntimeOptions;
  readonly debug = {
    explainTurn: <TTurn = unknown>(input: ExplainTurnInput<TTurn>) => this.explainTurn(input),
  };

  constructor(options: RuntimeOptions) {
    this.options = {
      ...options,
      storage: createPrivacyStorageAdapter(options.storage, options.privacy),
      logger: options.logger ?? createRuntimeLogger(options),
    };
    this.kernel = createRuntimeKernel(this.options, this.activeTurns);
  }

  configurationSource(): RuntimeConfigurationSource {
    return {
      ...(this.options.channelSets ? { channelSets: this.options.channelSets } : {}),
      ...(this.options.channels ? { channels: this.options.channels } : {}),
      ...(this.options.providerPackages ? { providerPackages: this.options.providerPackages } : {}),
      ...(this.options.capabilityAvailability ? { capabilityAvailability: this.options.capabilityAvailability } : {}),
      ...(this.options.providerCredentialStatuses ? { credentialStatuses: this.options.providerCredentialStatuses } : {}),
      ...(this.options.providerReadiness ? { providerReadiness: this.options.providerReadiness } : {}),
    };
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

  emitScheduledEvent<TEvent extends JourneyEventDefinition>(
    input: EmitScheduledEventInput<TEvent>,
  ): Promise<EmitScheduledEventResult> {
    return emitRuntimeScheduledEvent(this.channelFacadeContext(), input);
  }

  listEvents(conversationId: string, afterOffset?: number) {
    return this.runtimeOperation("list_events", telemetrySpanNames.runtimeListEvents, {
      [telemetryAttributes.conversationId]: conversationId,
    }, () => this.kernel.listEvents(conversationId, afterOffset));
  }

  getConversation<TConversationContext = unknown>(
    conversationId: string,
  ): Promise<ConversationRecord<TConversationContext> | null> {
    return this.runtimeOperation("get_conversation", telemetrySpanNames.runtimeGetConversation, {
      [telemetryAttributes.conversationId]: conversationId,
    }, () => this.kernel.getConversation<TConversationContext>(conversationId));
  }

  listConversations<TConversationContext = unknown>(input: ListRuntimeConversationsOptions = {}) {
    return this.runtimeOperation("list_conversations", telemetrySpanNames.runtimeListConversations, {
      ...(input.agentId ? { [telemetryAttributes.agentId]: input.agentId } : {}),
    }, () => this.kernel.listConversations<TConversationContext>(input));
  }

  listPendingSupportActions(input: ListPendingSupportActionsInput | string): Promise<PendingSupportAction[]> {
    const conversationId = typeof input === "string" ? input : input.conversationId;
    return this.runtimeOperation("list_pending_support_actions", telemetrySpanNames.runtimeListEvents, {
      [telemetryAttributes.conversationId]: conversationId,
    }, () => this.kernel.listPendingSupportActions(conversationId));
  }

  resolvePendingSupportAction(
    input: ResolvePendingSupportActionInput,
  ): Promise<ResolvePendingSupportActionResult> {
    return this.runtimeOperation("resolve_pending_support_action", telemetrySpanNames.toolExecute, {
      [telemetryAttributes.conversationId]: input.conversationId,
      "cognidesk.approval.id": input.approvalId,
      "cognidesk.approval.resolution": input.resolution,
    }, () => this.kernel.resolvePendingSupportAction(input));
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

  handleChannelEvent<TPayload = unknown, TTurn = unknown>(
    input: HandleChannelEventInput<TPayload, TTurn>,
  ): Promise<HandleChannelEventResult<TPayload>> {
    return handleRuntimeChannelEvent(this.channelFacadeContext(), input);
  }

  requestOutboundContact<TPayload = unknown>(
    input: RequestOutboundContactInput<TPayload>,
  ): Promise<HandleChannelEventResult<TPayload>> {
    return requestRuntimeOutboundContact(this.channelFacadeContext(), input);
  }

  requestChannelHandoff<TPayload = unknown>(
    input: RequestChannelHandoffInput<TPayload>,
  ): Promise<HandleChannelEventResult<TPayload>> {
    return requestRuntimeChannelHandoff(this.channelFacadeContext(), input);
  }

  requestChannelHandoffReview<TPayload = unknown>(
    input: RequestChannelHandoffReviewInput<TPayload>,
  ): Promise<HandleChannelEventResult<TPayload>> {
    return requestRuntimeChannelHandoffReview(this.channelFacadeContext(), input);
  }

  resolveChannelOutput<TPayload = unknown>(
    input: ResolveChannelOutputInput<TPayload>,
  ): Promise<ResolveChannelOutputResult<TPayload>> {
    return resolveRuntimeChannelOutput(this.channelFacadeContext(), input);
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
    return handleRuntimeVoiceChannelUserMessage(this.channelFacadeContext(), input);
  }

  startVoiceConversation<TConversationContext = unknown>(
    input: StartVoiceConversationInput<TConversationContext>,
  ): Promise<StartVoiceResult> {
    return startRuntimeVoiceConversationWithChannelEvent(this.channelFacadeContext(), input);
  }

  startVoiceSegment(input: StartVoiceSegmentInput): Promise<StartVoiceResult> {
    return startRuntimeVoiceSegmentWithChannelEvent(this.channelFacadeContext(), input);
  }

  endVoiceSegment(input: {
    conversationId: string;
    channelSegmentId: string;
    connectionId?: string;
    reason?: string;
  }): Promise<RuntimeEvent> {
    return endRuntimeVoiceSegmentWithTelemetry(this.channelFacadeContext(), input);
  }

  commitVoiceTranscript(input: CommitVoiceTranscriptInput): Promise<CommitVoiceTranscriptResult> {
    return commitRuntimeVoiceTranscriptWithTelemetry(this.channelFacadeContext(), input);
  }

  recordVoiceInterruption(input: RecordVoiceInterruptionInput): Promise<RuntimeEvent> {
    return recordRuntimeVoiceInterruptionWithTelemetry(this.channelFacadeContext(), input);
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

  private explainTurn<TTurn = unknown>(input: ExplainTurnInput<TTurn>): Promise<ExplainTurnResult> {
    return explainRuntimeTurn(this.channelFacadeContext(), input);
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

  private channelFacadeContext(): RuntimeChannelFacadeContext {
    return {
      options: this.options,
      kernel: this.kernel,
      runtimeOperation: (operation, spanName, attributes, run) =>
        this.runtimeOperation(operation, spanName, attributes, run),
      bindChannelEvent: (input, channelEvent) => this.bindChannelEvent(input, channelEvent),
      handleChannelEvent: (input) => this.handleChannelEvent(input),
    };
  }

  private async bindChannelEvent<TPayload, TTurn>(
    input: HandleChannelEventInput<TPayload, TTurn>,
    channelEvent: ReturnType<typeof defineChannelEvent<TPayload>>,
  ): Promise<
    | { accepted: true; conversation: ConversationRecord; bindingOutcome: "start-new" | "resume-existing" | "link-and-start-new" }
    | { accepted: false; reason: string; blockers: Array<{ code: string; message: string; kind?: string }> }
  > {
    const requestedOutcome = input.binding?.outcome;
    const conversationId = input.binding?.conversationId ?? input.conversationId;
    if (requestedOutcome === "resume-existing" || (!requestedOutcome && conversationId)) {
      if (!conversationId) {
        return blockedChannelEventBinding("missing-conversation-id", "Conversation Binding requested resume-existing without a conversationId.");
      }
      const conversation = await this.options.storage.getConversation(conversationId);
      if (!conversation) {
        return blockedChannelEventBinding("conversation-not-found", `Conversation '${conversationId}' does not exist.`);
      }
      if (conversation.lifecycle !== "active") {
        return blockedChannelEventBinding(
          "conversation-not-active",
          `Conversation '${conversationId}' is '${conversation.lifecycle}' and cannot receive Channel Events.`,
        );
      }
      return {
        accepted: true,
        bindingOutcome: "resume-existing",
        conversation,
      };
    }

    if (requestedOutcome === "start-new" || requestedOutcome === "link-and-start-new" || (!requestedOutcome && !conversationId)) {
      const agentId = input.createConversation?.agentId ?? input.binding?.agentId ?? input.agentId ?? this.options.agent?.id;
      if (!agentId) {
        return blockedChannelEventBinding("missing-agent-id", "Channel Event needs an agentId to start a new Conversation.");
      }
      const conversation = await this.kernel.createConversation({
        ...(input.createConversation?.id ? { id: input.createConversation.id } : {}),
        agentId,
        context: (input.createConversation?.context ?? input.binding?.conversationContext ?? input.conversationContext ?? {}) as unknown,
        channel: input.createConversation?.channel ?? channelEvent.channel,
      });
      return {
        accepted: true,
        bindingOutcome: requestedOutcome === "link-and-start-new" ? "link-and-start-new" : "start-new",
        conversation,
      };
    }

    return blockedChannelEventBinding("unsupported-binding-outcome", `Conversation Binding outcome '${requestedOutcome}' cannot be handled.`);
  }
}

export function createRuntime(options: RuntimeOptions) {
  return new CognideskRuntime(options);
}
