import { defineChannelContext, type ConversationChannelInput } from "../providers.js";

import type { ChannelEventDirection, ChannelEventIntent } from "./constants.js";
import type {
  ChannelEventActor,
  ChannelEventEnvelope,
  ChannelEventEnvelopeInput,
  ChannelEventIdentity,
  ChannelEventSourceEvidence,
  NormalizedChannelPayload,
  NormalizedChannelPayloadInput,
} from "./events.js";
import type {
  ChannelOutputIntent,
  ChannelOutputIntentInput,
  ChannelOutputResolutionDecision,
} from "./outputs.js";
import {
  ChannelEventEnvelopeInputSchema,
  ChannelOutputIntentInputSchema,
  ChannelOutputResolutionDecisionInputSchema,
} from "./schemas.js";

export function defineChannelEvent<TPayload = NormalizedChannelPayload, TRawPayload = unknown>(
  input: ChannelEventEnvelopeInput<TPayload, TRawPayload>,
): ChannelEventEnvelope<TPayload, TRawPayload> {
  const parsed = ChannelEventEnvelopeInputSchema.parse(input);
  const nature = parsed.nature;
  if (!nature) throw new Error("Channel Event requires nature.");
  return {
    ...parsed,
    nature,
    channel: defineChannelContext(parsed.channel),
  } as ChannelEventEnvelope<TPayload, TRawPayload>;
}

export function channelEventDedupeKey(
  event: ChannelEventEnvelopeInput<unknown> | ChannelEventEnvelope<unknown>,
): string | undefined {
  if (event.identity?.dedupeKey) return event.identity.dedupeKey;
  if (event.identity?.key) return event.identity.key;
  if (event.source?.eventId && event.source?.streamId) return `${event.source.streamId}:${event.source.eventId}`;
  if (event.source?.eventId) return event.source.eventId;
  return event.id;
}

export function createMessageChannelEvent(input: {
  id?: string;
  channel: ConversationChannelInput;
  text: string;
  direction?: ChannelEventDirection;
  intent?: ChannelEventIntent;
  actor?: ChannelEventActor | ChannelEventActor["type"];
  payload?: NormalizedChannelPayloadInput;
  identity?: ChannelEventIdentity;
  source?: ChannelEventSourceEvidence;
  metadata?: Record<string, unknown>;
}): ChannelEventEnvelopeInput {
  return {
    ...(input.id ? { id: input.id } : {}),
    nature: "message",
    direction: input.direction ?? "inbound",
    intent: input.intent ?? (input.direction === "outbound" ? "agent-message" : "customer-message"),
    actor: typeof input.actor === "string"
      ? { type: input.actor }
      : input.actor ?? { type: input.direction === "outbound" ? "agent" : "customer" },
    channel: input.channel,
    payload: {
      ...(input.payload ?? {}),
      text: input.text,
    },
    ...(input.identity ? { identity: input.identity } : {}),
    ...(input.source ? { source: input.source } : {}),
    ...(input.metadata ? { metadata: input.metadata } : {}),
  };
}

export function createScheduledChannelEvent(input: {
  scheduleId: string;
  conversationId?: string;
  channel?: ConversationChannelInput;
  dueAt: string;
  scheduledFor?: string;
  eventName: string;
  payload?: unknown;
  intent?: unknown;
  metadata?: Record<string, unknown>;
}): ChannelEventEnvelopeInput {
  const eventId = `schedule:${input.scheduleId}:${input.dueAt}`;
  return {
    id: eventId,
    nature: "schedule.due",
    direction: "internal",
    intent: "scheduled-support-action",
    actor: { type: "scheduler" },
    channel: input.channel ?? {
      channelId: `schedule:${input.scheduleId}`,
      kind: "schedule",
      provider: "cognidesk",
      externalThreadId: input.scheduleId,
    },
    occurredAt: input.dueAt,
    payload: {
      scheduleId: input.scheduleId,
      ...(input.scheduledFor ? { scheduledFor: input.scheduledFor } : {}),
      dueAt: input.dueAt,
      eventName: input.eventName,
      ...(input.payload !== undefined ? { payload: input.payload } : {}),
      ...(input.intent !== undefined ? { intent: input.intent } : {}),
      ...(input.metadata ? { metadata: input.metadata } : {}),
    },
    identity: {
      key: eventId,
      dedupeKey: eventId,
      ...(input.conversationId ? { streamId: input.conversationId } : {}),
    },
    source: {
      sourceType: "schedule-adapter",
      sourceId: input.scheduleId,
      eventId,
      ...(input.conversationId ? { streamId: input.conversationId } : {}),
    },
  };
}

export function defineChannelOutputIntent<TPayload = NormalizedChannelPayload, TRawPayload = unknown>(
  input: ChannelOutputIntentInput<TPayload, TRawPayload>,
): ChannelOutputIntent<TPayload, TRawPayload> {
  const parsed = ChannelOutputIntentInputSchema.parse(input);
  return {
    ...parsed,
    ...(parsed.channel ? { channel: defineChannelContext(parsed.channel) } : {}),
  } as ChannelOutputIntent<TPayload, TRawPayload>;
}

export function defineChannelOutputResolutionDecision<TPayload = unknown>(
  input: ChannelOutputResolutionDecision<TPayload>,
): ChannelOutputResolutionDecision<TPayload> {
  return ChannelOutputResolutionDecisionInputSchema.parse(input) as ChannelOutputResolutionDecision<TPayload>;
}
