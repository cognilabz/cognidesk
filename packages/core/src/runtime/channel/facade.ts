import { telemetryAttributes, telemetrySpanNames } from "../../telemetry.js";
import type {
  ChannelOutputIntent,
  ChannelOutputResolutionPayload,
} from "../../types.js";
import {
  channelKindOf,
  defineChannelEvent,
  defineChannelOutputIntent,
  defineChannelOutputResolutionDecision,
} from "../../types.js";
import { assertNoActiveVoiceSegment } from "../voice/core.js";
import {
  blockedCapabilityDecision,
  channelEventRecordInput,
  channelEventText,
  channelOutputResolutionEventInput,
  channelOutputShouldExecute,
  channelOutputStatus,
  emitChannelOutputDeliveryEvents,
  enforceChannelOutputCapabilityDecision,
  findDuplicateChannelEvent,
  isRecord,
  materializeChannelOutputResolution,
  reasonFields,
  resolveChannelEventCapabilityDecision,
  resolveChannelOutputCapabilityDecision,
  resolveChannelOutputChannel,
  resolveDefaultChannelOutputDecision,
  resolveHandlingDisposition,
  terminalBindingResult,
} from "./events.js";
import type { RuntimeChannelFacadeContext } from "../facade/context.js";
import type {
  HandleChannelEventInput,
  HandleChannelEventResult,
  RequestChannelHandoffInput,
  RequestChannelHandoffReviewInput,
  RequestOutboundContactInput,
  ResolveChannelOutputInput,
  ResolveChannelOutputResult,
} from "../types.js";

export function handleRuntimeChannelEvent<TPayload = unknown, TTurn = unknown>(
  context: RuntimeChannelFacadeContext,
  input: HandleChannelEventInput<TPayload, TTurn>,
): Promise<HandleChannelEventResult<TPayload>> {
  const channelEvent = defineChannelEvent(input.event);
  return context.runtimeOperation("handle_channel_event", telemetrySpanNames.runtimeHandleChannelEvent, {
    "cognidesk.channel_event.nature": channelEvent.nature,
    ...(channelEvent.direction ? { "cognidesk.channel_event.direction": channelEvent.direction } : {}),
    ...(channelEvent.intent ? { "cognidesk.channel_event.intent": channelEvent.intent } : {}),
    ...(input.conversationId ? { [telemetryAttributes.conversationId]: input.conversationId } : {}),
  }, async () => {
    const terminal = terminalBindingResult(input.binding);
    if (terminal) {
      return {
        channelEvent,
        intake: {
          outcome: terminal.outcome,
          bindingOutcome: terminal.bindingOutcome,
          handling: "not-required",
          ...reasonFields(input.binding),
        },
        disposition: terminal.disposition,
        events: [],
      };
    }

    const bound = await context.bindChannelEvent(input, channelEvent);
    if (!bound.accepted) {
      return {
        channelEvent,
        intake: {
          outcome: "blocked",
          bindingOutcome: "blocked",
          handling: "not-required",
          reason: bound.reason,
          blockers: bound.blockers,
        },
        disposition: "no-op",
        events: [],
      };
    }

    const disposition = resolveHandlingDisposition(channelEvent, input.handling);
    const duplicate = await findDuplicateChannelEvent(context.options, bound.conversation.id, channelEvent);
    if (duplicate) {
      return {
        channelEvent,
        conversation: bound.conversation,
        intake: {
          outcome: "ignored",
          bindingOutcome: bound.bindingOutcome,
          conversationId: bound.conversation.id,
          handling: "not-required",
          reason: "Duplicate Channel Event.",
          reasonCode: "duplicate-channel-event",
          metadata: {
            duplicateOfEventId: duplicate.id,
            duplicateOfOffset: duplicate.offset,
          },
        },
        disposition: "no-op",
        events: [],
      };
    }
    const intakeCapabilityDecision = resolveChannelEventCapabilityDecision({
      options: context.options,
      channelEvent,
    });
    if (intakeCapabilityDecision && !intakeCapabilityDecision.allowed) {
      return {
        channelEvent,
        conversation: bound.conversation,
        intake: {
          outcome: "blocked",
          bindingOutcome: bound.bindingOutcome,
          conversationId: bound.conversation.id,
          handling: "not-required",
          reason: intakeCapabilityDecision.message,
          reasonCode: intakeCapabilityDecision.code,
          blockers: intakeCapabilityDecision.blockers,
        },
        disposition: "no-op",
        events: [],
      };
    }

    const intakeEvent = await context.kernel.emit(channelEventRecordInput({
      conversationId: bound.conversation.id,
      channelEvent,
      bindingOutcome: bound.bindingOutcome,
      disposition,
    }));

    if (disposition !== "model-turn") {
      return {
        channelEvent,
        conversation: bound.conversation,
        intake: {
          outcome: "accepted",
          bindingOutcome: bound.bindingOutcome,
          conversationId: bound.conversation.id,
          handling: "not-required",
          ...reasonFields(input.binding),
        },
        disposition,
        events: [intakeEvent],
      };
    }

    const text = input.handling?.text ?? channelEventText(channelEvent.payload);
    if (!text) {
      return {
        channelEvent,
        conversation: bound.conversation,
        intake: {
          outcome: "blocked",
          bindingOutcome: bound.bindingOutcome,
          conversationId: bound.conversation.id,
          handling: "not-required",
          reason: "Channel Event handling disposition 'model-turn' requires text.",
          blockers: [{
            code: "missing-channel-event-text",
            message: "Channel Event handling disposition 'model-turn' requires text.",
            kind: "missing-configuration",
          }],
        },
        disposition: "no-op",
        events: [],
      };
    }

    if (channelKindOf(channelEvent.channel) !== "voice") {
      await assertNoActiveVoiceSegment(context.options, bound.conversation.id);
    }
    const turn = await context.kernel.handleUserMessage({
      conversationId: bound.conversation.id,
      text,
      channel: channelEvent.channel,
      turn: (input.handling?.turn ?? { channelEvent }) as TTurn,
      ...(input.app !== undefined ? { app: input.app } : {}),
      ...(input.signal ? { signal: input.signal } : {}),
      ...(input.handling?.recordUserMessage !== undefined ? { recordUserMessage: input.handling.recordUserMessage } : {}),
      ...(input.handling?.assistantMessageMode ? { assistantMessageMode: input.handling.assistantMessageMode } : {}),
      ...(input.onAssistantTextDelta ? { onAssistantTextDelta: input.onAssistantTextDelta } : {}),
    });

    return {
      channelEvent,
      conversation: turn.conversation,
      intake: {
        outcome: "accepted",
        bindingOutcome: bound.bindingOutcome,
        conversationId: bound.conversation.id,
        handling: "started",
        ...reasonFields(input.binding),
      },
      disposition,
      turn,
      snapshot: turn.snapshot,
      events: [intakeEvent, ...turn.events],
      text: turn.text,
      ...(turn.activeJourneyId ? { activeJourneyId: turn.activeJourneyId } : {}),
    };
  });
}

export function requestRuntimeOutboundContact<TPayload = unknown>(
  context: RuntimeChannelFacadeContext,
  input: RequestOutboundContactInput<TPayload>,
): Promise<HandleChannelEventResult<TPayload>> {
  return context.handleChannelEvent<TPayload>({
    ...(input.conversationId ? { conversationId: input.conversationId } : {}),
    ...(input.agentId ? { agentId: input.agentId } : {}),
    ...(input.conversationContext !== undefined ? { conversationContext: input.conversationContext } : {}),
    ...(input.binding ? { binding: input.binding } : {}),
    event: {
      nature: "outbound.contact.requested",
      direction: "outbound",
      intent: "outbound-contact",
      actor: { type: "application" },
      channel: input.channel,
      payload: {
        ...(isRecord(input.payload) ? input.payload : input.payload !== undefined ? { value: input.payload } : {}),
        ...(input.text ? { text: input.text } : {}),
      } as TPayload,
    },
    handling: {
      ...(input.handling ?? {}),
      disposition: input.handling?.disposition ?? "provider-operation",
    },
    ...(input.app !== undefined ? { app: input.app } : {}),
    ...(input.signal ? { signal: input.signal } : {}),
  });
}

export function requestRuntimeChannelHandoff<TPayload = unknown>(
  context: RuntimeChannelFacadeContext,
  input: RequestChannelHandoffInput<TPayload>,
): Promise<HandleChannelEventResult<TPayload>> {
  return context.handleChannelEvent<TPayload>({
    conversationId: input.conversationId,
    ...(input.binding ? { binding: input.binding } : {}),
    event: {
      nature: "channel.handoff.requested",
      direction: "internal",
      intent: "channel-handoff",
      actor: { type: "application" },
      channel: input.toChannel,
      payload: {
        ...(isRecord(input.payload) ? input.payload : input.payload !== undefined ? { value: input.payload } : {}),
        ...(input.fromChannel ? { fromChannel: input.fromChannel } : {}),
        toChannel: input.toChannel,
        ...(input.reason ? { reason: input.reason } : {}),
        ...(input.reasonCode ? { reasonCode: input.reasonCode } : {}),
        ...(input.reasonLabel ? { reasonLabel: input.reasonLabel } : {}),
      } as TPayload,
    },
    handling: {
      ...(input.handling ?? {}),
      disposition: input.handling?.disposition ?? "handoff-review",
    },
    ...(input.app !== undefined ? { app: input.app } : {}),
    ...(input.signal ? { signal: input.signal } : {}),
  });
}

export function requestRuntimeChannelHandoffReview<TPayload = unknown>(
  context: RuntimeChannelFacadeContext,
  input: RequestChannelHandoffReviewInput<TPayload>,
): Promise<HandleChannelEventResult<TPayload>> {
  return context.handleChannelEvent<TPayload>({
    ...(input.conversationId ? { conversationId: input.conversationId } : {}),
    ...(input.agentId ? { agentId: input.agentId } : {}),
    ...(input.conversationContext !== undefined ? { conversationContext: input.conversationContext } : {}),
    ...(input.binding ? { binding: input.binding } : {}),
    event: {
      nature: "custom",
      direction: "internal",
      intent: "handoff-review",
      actor: { type: "operator" },
      channel: input.channel,
      payload: {
        ...(isRecord(input.payload) ? input.payload : input.payload !== undefined ? { value: input.payload } : {}),
        ...(input.reason ? { reason: input.reason } : {}),
        ...(input.reasonCode ? { reasonCode: input.reasonCode } : {}),
        ...(input.reasonLabel ? { reasonLabel: input.reasonLabel } : {}),
      } as TPayload,
    },
    handling: {
      ...(input.handling ?? {}),
      disposition: input.handling?.disposition ?? "handoff-review",
    },
    ...(input.app !== undefined ? { app: input.app } : {}),
    ...(input.signal ? { signal: input.signal } : {}),
  });
}

export function resolveRuntimeChannelOutput<TPayload = unknown>(
  context: RuntimeChannelFacadeContext,
  input: ResolveChannelOutputInput<TPayload>,
): Promise<ResolveChannelOutputResult<TPayload>> {
  const outputIntent = defineChannelOutputIntent<TPayload>(input.intent);
  return context.runtimeOperation("resolve_channel_output", telemetrySpanNames.runtimeHandleChannelEvent, {
    [telemetryAttributes.conversationId]: input.conversationId,
    "cognidesk.channel_output.kind": outputIntent.kind,
    ...(outputIntent.deliveryMode ? { "cognidesk.channel_output.delivery_mode": outputIntent.deliveryMode } : {}),
    ...(outputIntent.capability ? { "cognidesk.channel_output.capability": outputIntent.capability } : {}),
  }, async () => {
    const conversation = await context.options.storage.getConversation(input.conversationId);
    if (!conversation) {
      throw new Error(`Conversation '${input.conversationId}' does not exist.`);
    }

    const channel = resolveChannelOutputChannel(outputIntent, conversation);
    const intent = channel && !outputIntent.channel
      ? ({ ...outputIntent, channel } as ChannelOutputIntent<TPayload>)
      : outputIntent;
    const capabilityDecision = channel
      ? resolveChannelOutputCapabilityDecision({
          options: context.options,
          intent,
          channel,
        })
      : blockedCapabilityDecision(
          "missing-channel-configuration",
          "Channel Output Resolution requires a channel on the intent or Conversation.",
          [{
            code: "missing-channel-configuration",
            message: "Channel Output Resolution requires a channel on the intent or Conversation.",
            kind: "missing-configuration",
          }],
        );

    const configuredResolution = input.resolution
      ? defineChannelOutputResolutionDecision(input.resolution)
      : undefined;
    const defaultResolution = resolveDefaultChannelOutputDecision({
      intent,
      ...(capabilityDecision ? { capabilityDecision } : {}),
      ...(configuredResolution ? { configuredResolution } : {}),
    });
    const policyResolution = channel
      ? await context.options.channelOutput?.resolve?.({
          conversation,
          intent,
          channel,
          defaultResolution,
          ...(capabilityDecision ? { capabilityDecision } : {}),
          app: input.app ?? context.options.app ?? {},
        })
      : undefined;
    const finalDecision = enforceChannelOutputCapabilityDecision({
      decision: policyResolution ? defineChannelOutputResolutionDecision(policyResolution) : defaultResolution,
      ...(capabilityDecision ? { capabilityDecision } : {}),
    });
    let resolution = materializeChannelOutputResolution({
      intent,
      decision: finalDecision,
      ...(channel ? { channel } : {}),
    });

    if (!channel) {
      return {
        conversation,
        outputIntent: intent,
        resolution,
        events: [],
        shouldExecute: false,
      };
    }

    const execution = channelOutputShouldExecute(resolution.outcome) && context.options.channelOutput?.execute
      ? await context.options.channelOutput.execute({
          conversationId: conversation.id,
          channel,
          outputIntent: intent,
          app: input.app ?? context.options.app ?? {},
          ...(input.signal ? { signal: input.signal } : {}),
        })
      : undefined;
    if (execution) {
      const executionDecision = defineChannelOutputResolutionDecision({
        ...resolution,
        ...execution,
      });
      resolution = {
        ...resolution,
        ...executionDecision,
        status: executionDecision.status ?? channelOutputStatus(executionDecision.outcome),
        ...(execution.externalMessageId ? { externalMessageId: execution.externalMessageId } : {}),
        ...(execution.deliveryStatus ? { deliveryStatus: execution.deliveryStatus } : {}),
        ...(execution.providerResult !== undefined ? { providerResult: execution.providerResult } : {}),
      };
    }

    const channelEvent = defineChannelEvent<ChannelOutputResolutionPayload<TPayload>>({
      id: resolution.id,
      nature: "output.resolution",
      direction: "internal",
      intent: "output-resolution",
      actor: { type: "system" },
      channel,
      occurredAt: resolution.resolvedAt,
      payload: {
        outputIntent: intent,
        resolution,
      },
      source: {
        sourceType: "application",
        sourceId: "cognidesk.runtime",
        eventId: resolution.id,
        streamId: conversation.id,
      },
    });
    const event = await context.kernel.emit(channelOutputResolutionEventInput({
      conversationId: conversation.id,
      channelEvent,
    }));
    const deliveryEvents = execution
      ? await emitChannelOutputDeliveryEvents(context.kernel.emit, {
          conversationId: conversation.id,
          outputIntent: intent,
          resolution,
          channel,
        })
      : [];

    return {
      conversation,
      outputIntent: intent,
      resolution,
      channelEvent,
      event,
      events: [event, ...deliveryEvents],
      shouldExecute: channelOutputShouldExecute(resolution.outcome),
      ...(execution ? { execution } : {}),
    };
  });
}
