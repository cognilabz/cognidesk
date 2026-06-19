import { telemetryAttributes, telemetrySpanNames } from "../../telemetry.js";
import type {
  CommitVoiceTranscriptInput,
  CommitVoiceTranscriptResult,
  RecordVoiceInterruptionInput,
  RuntimeEvent,
  StartVoiceConversationInput,
  StartVoiceResult,
  StartVoiceSegmentInput,
} from "../../types.js";
import { findMessageCompletedForRole } from "../channel/events.js";
import type { RuntimeChannelFacadeContext } from "../facade/context.js";
import type {
  HandleVoiceUserMessageInput,
  HandleVoiceUserMessageResult,
} from "../types.js";
import {
  commitRuntimeVoiceTranscript,
  commitRuntimeVoiceTranscriptReference,
  endRuntimeVoiceSegment,
  recordRuntimeVoiceInterruption,
  startRuntimeVoiceConversation,
  startRuntimeVoiceSegment,
} from "./core.js";

export function handleRuntimeVoiceChannelUserMessage<TTurn = unknown>(
  context: RuntimeChannelFacadeContext,
  input: HandleVoiceUserMessageInput<TTurn>,
): Promise<HandleVoiceUserMessageResult> {
  return context.runtimeOperation("handle_voice_user_message", telemetrySpanNames.runtimeHandleUserMessage, {
    [telemetryAttributes.conversationId]: input.conversationId,
  }, async () => {
    const result = await context.handleChannelEvent({
      conversationId: input.conversationId,
      event: {
        nature: "voice.turn.finalized",
        direction: "inbound",
        intent: "customer-voice-turn",
        actor: { type: "customer" },
        channel: {
          channelId: input.channelSegmentId,
          kind: "voice",
          externalThreadId: input.channelSegmentId,
          ...(input.connectionId ? { externalConversationId: input.connectionId } : {}),
        },
        payload: {
          text: input.text,
          channelSegmentId: input.channelSegmentId,
          ...(input.connectionId ? { connectionId: input.connectionId } : {}),
          ...(input.recordingReferenceId ? { recordingReferenceId: input.recordingReferenceId } : {}),
          ...(input.startedAtMs !== undefined ? { startedAtMs: input.startedAtMs } : {}),
          ...(input.endedAtMs !== undefined ? { endedAtMs: input.endedAtMs } : {}),
          ...(input.transcriptionSource ? { transcriptionSource: input.transcriptionSource } : {}),
          ...(input.metadata !== undefined ? { metadata: input.metadata } : {}),
        },
      },
      handling: {
        ...(input.turn !== undefined ? { turn: input.turn } : {}),
        ...(input.recordUserMessage !== undefined ? { recordUserMessage: input.recordUserMessage } : {}),
        ...(input.assistantMessageMode ? { assistantMessageMode: input.assistantMessageMode } : {}),
      },
      ...(input.app !== undefined ? { app: input.app } : {}),
      ...(input.signal ? { signal: input.signal } : {}),
      ...(input.onAssistantTextDelta ? { onAssistantTextDelta: input.onAssistantTextDelta } : {}),
    });
    if (!result.turn) {
      throw new Error(result.intake.reason ?? "Voice Channel Event did not produce a model turn.");
    }
    const userMessage = findMessageCompletedForRole(result.turn.events, "user");
    const assistantMessage = findMessageCompletedForRole(result.turn.events, "assistant");
    const voiceEvents: RuntimeEvent[] = [];
    if (userMessage) {
      voiceEvents.push(await commitRuntimeVoiceTranscriptReference(context.kernel.emit, {
        conversationId: input.conversationId,
        channelSegmentId: input.channelSegmentId,
        speaker: "user",
        text: input.text,
        messageEventId: userMessage.id,
        ...(input.recordingReferenceId ? { recordingReferenceId: input.recordingReferenceId } : {}),
        ...(input.startedAtMs !== undefined ? { startedAtMs: input.startedAtMs } : {}),
        ...(input.endedAtMs !== undefined ? { endedAtMs: input.endedAtMs } : {}),
        ...(input.transcriptionSource ? { transcriptionSource: input.transcriptionSource } : {}),
        ...(input.metadata !== undefined ? { metadata: input.metadata } : {}),
      }));
    }
    if (assistantMessage) {
      voiceEvents.push(await commitRuntimeVoiceTranscriptReference(context.kernel.emit, {
        conversationId: input.conversationId,
        channelSegmentId: input.channelSegmentId,
        speaker: "assistant",
        text: result.turn.text,
        messageEventId: assistantMessage.id,
        transcriptionSource: "cognidesk-runtime",
      }));
    }
    return {
      ...result.turn,
      events: [...result.events, ...voiceEvents],
      voiceEvents,
    };
  });
}

export function startRuntimeVoiceConversationWithChannelEvent<TConversationContext = unknown>(
  context: RuntimeChannelFacadeContext,
  input: StartVoiceConversationInput<TConversationContext>,
): Promise<StartVoiceResult> {
  return context.runtimeOperation("start_voice_conversation", telemetrySpanNames.runtimeEmitEvent, {
    [telemetryAttributes.agentId]: input.agentId,
  }, async () => {
    const result = await startRuntimeVoiceConversation(
      context.options,
      (conversationInput) => context.kernel.createConversation(conversationInput),
      (segmentInput) => startRuntimeVoiceSegment(
        context.options,
        context.kernel.requireConversation,
        context.kernel.emit,
        segmentInput,
      ),
      input,
    );
    const channelEventResult = await recordVoiceSessionStartedChannelEvent(context, result);
    return {
      ...result,
      events: [...result.events, ...channelEventResult.events],
    };
  });
}

export function startRuntimeVoiceSegmentWithChannelEvent(
  context: RuntimeChannelFacadeContext,
  input: StartVoiceSegmentInput,
): Promise<StartVoiceResult> {
  return context.runtimeOperation("start_voice_segment", telemetrySpanNames.runtimeEmitEvent, {
    [telemetryAttributes.conversationId]: input.conversationId,
  }, async () => {
    const result = await startRuntimeVoiceSegment(
      context.options,
      context.kernel.requireConversation,
      context.kernel.emit,
      input,
    );
    const channelEventResult = await recordVoiceSessionStartedChannelEvent(context, result);
    return {
      ...result,
      events: [...result.events, ...channelEventResult.events],
    };
  });
}

export function endRuntimeVoiceSegmentWithTelemetry(
  context: RuntimeChannelFacadeContext,
  input: {
    conversationId: string;
    channelSegmentId: string;
    connectionId?: string;
    reason?: string;
  },
): Promise<RuntimeEvent> {
  return context.runtimeOperation("end_voice_segment", telemetrySpanNames.runtimeEmitEvent, {
    [telemetryAttributes.conversationId]: input.conversationId,
  }, () => endRuntimeVoiceSegment(context.kernel.emit, input));
}

export function commitRuntimeVoiceTranscriptWithTelemetry(
  context: RuntimeChannelFacadeContext,
  input: CommitVoiceTranscriptInput,
): Promise<CommitVoiceTranscriptResult> {
  return context.runtimeOperation("commit_voice_transcript", telemetrySpanNames.runtimeEmitEvent, {
    [telemetryAttributes.conversationId]: input.conversationId,
  }, () => commitRuntimeVoiceTranscript(context.kernel.emit, input));
}

export function recordRuntimeVoiceInterruptionWithTelemetry(
  context: RuntimeChannelFacadeContext,
  input: RecordVoiceInterruptionInput,
): Promise<RuntimeEvent> {
  return context.runtimeOperation("record_voice_interruption", telemetrySpanNames.runtimeEmitEvent, {
    [telemetryAttributes.conversationId]: input.conversationId,
  }, () => recordRuntimeVoiceInterruption(context.kernel.emit, input));
}

function recordVoiceSessionStartedChannelEvent(
  context: RuntimeChannelFacadeContext,
  result: StartVoiceResult,
) {
  return context.handleChannelEvent({
    conversationId: result.conversation.id,
    event: {
      id: `voice-session:${result.channelSegment.id}`,
      nature: "voice.session.started",
      direction: "inbound",
      intent: "record-only",
      actor: { type: "provider" },
      channel: {
        channelId: result.channelSegment.id,
        kind: "voice",
        externalThreadId: result.channelSegment.id,
        externalConversationId: result.connection.id,
        ...(result.connection.provider ? { provider: result.connection.provider } : {}),
      },
      occurredAt: result.channelSegment.startedAt,
      payload: {
        channelSegmentId: result.channelSegment.id,
        connectionId: result.connection.id,
        adapter: result.connection.adapter,
        ...(result.connection.provider ? { provider: result.connection.provider } : {}),
      },
      identity: {
        dedupeKey: `voice-session:${result.channelSegment.id}`,
        streamId: result.conversation.id,
      },
      source: {
        sourceType: "provider-adapter",
        sourceId: result.connection.adapter,
        eventId: `voice-session:${result.channelSegment.id}`,
        streamId: result.conversation.id,
        ...(result.connection.provider ? { provider: result.connection.provider } : {}),
      },
    },
    handling: { disposition: "record-only" },
  });
}
