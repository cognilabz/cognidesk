import type { JourneyEventDefinition } from "../definition.js";
import { telemetryAttributes, telemetrySpanNames } from "../telemetry.js";
import type { RuntimeChannelFacadeContext } from "./facade/context.js";
import type {
  EmitScheduledEventInput,
  EmitScheduledEventResult,
} from "./types.js";

export function emitRuntimeScheduledEvent<TEvent extends JourneyEventDefinition>(
  context: RuntimeChannelFacadeContext,
  input: EmitScheduledEventInput<TEvent>,
): Promise<EmitScheduledEventResult> {
  return context.runtimeOperation("emit_scheduled_event", telemetrySpanNames.runtimeEmitJourneyEvent, {
    [telemetryAttributes.conversationId]: input.conversationId,
    "cognidesk.schedule.id": input.scheduleId,
    "cognidesk.journey_event.name": input.event.name,
  }, async () => {
    const dueAt = input.dueAt ?? new Date().toISOString();
    const schedulePayload = {
      scheduleId: input.scheduleId,
      ...(input.scheduledFor ? { scheduledFor: input.scheduledFor } : {}),
      dueAt,
      eventName: input.event.name,
      payload: input.payload,
      ...(input.intent ? { intent: input.intent } : {}),
      ...(input.metadata ? { metadata: input.metadata } : {}),
    };
    const channelEventResult = await context.handleChannelEvent({
      conversationId: input.conversationId,
      event: {
        id: `schedule:${input.scheduleId}:${dueAt}`,
        nature: "schedule.due",
        direction: "internal",
        intent: "scheduled-support-action",
        actor: { type: "scheduler" },
        channel: {
          channelId: `schedule:${input.scheduleId}`,
          kind: "schedule",
          provider: "cognidesk",
          externalThreadId: input.scheduleId,
        },
        occurredAt: dueAt,
        payload: schedulePayload,
        source: {
          sourceType: "schedule-adapter",
          sourceId: input.scheduleId,
          eventId: `schedule:${input.scheduleId}:${dueAt}`,
          streamId: input.conversationId,
        },
      },
      handling: { disposition: "record-only" },
      ...(input.app ? { app: input.app } : {}),
      ...(input.signal ? { signal: input.signal } : {}),
    });
    if (channelEventResult.intake.outcome !== "accepted") {
      throw new Error(channelEventResult.intake.reason ?? "Scheduled Channel Event was not accepted.");
    }
    const scheduleEvent = await context.kernel.emit({
      conversationId: input.conversationId,
      type: "schedule.due",
      data: schedulePayload,
    });
    const result = await context.kernel.emitJourneyEvent({
      conversationId: input.conversationId,
      event: input.event,
      payload: input.payload,
      ...(input.routing ? { routing: input.routing } : {}),
      ...(input.target ? { target: input.target } : {}),
      ...(input.app ? { app: input.app } : {}),
      ...(input.signal ? { signal: input.signal } : {}),
    });
    return {
      ...result,
      channelEvent: channelEventResult.channelEvent,
      intake: channelEventResult.intake,
      scheduleEvent,
      events: [...channelEventResult.events, scheduleEvent, ...result.events],
    };
  });
}
