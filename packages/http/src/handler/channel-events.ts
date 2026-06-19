import {
  defineChannelContext,
  defineChannelEvent,
  type ChannelEventEnvelopeInput,
  type HandleChannelEventInput,
  type HandleChannelEventResult,
  type HandleUserMessageResult,
  type RuntimeEvent,
} from "@cognidesk/core";
import { createChannelEventInput } from "../channel-events.js";
import { HttpInputError, json, type ResponseOptions } from "../responses.js";
import type { CognideskHttpHandlerOptions, CreateChannelEventBody } from "../types.js";
import { isRecord } from "./body.js";
import { optionalString } from "./optional.js";

export async function handleChannelEvent(
  options: CognideskHttpHandlerOptions,
  input: HandleChannelEventInput,
  responseOptions: ResponseOptions,
) {
  if (hasHandleChannelEvent(options.runtime)) {
    return options.runtime.handleChannelEvent(input);
  }

  const userMessageInput = channelEventToUserMessageInput(input);
  if (!userMessageInput) {
    return json({ error: "Channel events are not supported by this runtime" }, 501, responseOptions);
  }

  const result = await options.runtime.handleUserMessage(userMessageInput);
  return channelEventResultFromUserMessageResult(input, result);
}

export function hasHandleChannelEvent(
  runtime: CognideskHttpHandlerOptions["runtime"],
): runtime is CognideskHttpHandlerOptions["runtime"] & {
  handleChannelEvent(input: HandleChannelEventInput): Promise<HandleChannelEventResult>;
} {
  return typeof (runtime as { handleChannelEvent?: unknown }).handleChannelEvent === "function";
}

export function readChannelEventInput(body: CreateChannelEventBody, signal: AbortSignal): HandleChannelEventInput {
  try {
    return createChannelEventInput({ ...body, signal });
  } catch (error) {
    throw new HttpInputError(error instanceof Error ? error.message : "Invalid Channel Event input.");
  }
}

function channelEventToUserMessageInput(input: HandleChannelEventInput) {
  const event = input.event;
  if (!isInboundMessageEvent(event)) return null;
  const conversationId = input.conversationId ?? input.binding?.conversationId;
  if (!conversationId) return null;
  const text = input.handling?.text ?? textFromChannelEventPayload(event.payload);
  if (!text) return null;
  const turn = turnFromChannelEventPayload(event.payload);
  return {
    conversationId,
    text,
    channel: defineChannelContext(event.channel),
    ...(input.handling?.turn !== undefined ? { turn: input.handling.turn } : turn !== undefined ? { turn } : {}),
    ...(input.app !== undefined ? { app: input.app } : {}),
    ...(input.signal ? { signal: input.signal } : {}),
  };
}

function isInboundMessageEvent(event: ChannelEventEnvelopeInput<unknown>) {
  const inbound = event.direction === undefined || event.direction === "inbound";
  return inbound && (event.nature === "message" || event.kind === "message" || event.intent === "customer-message");
}

function textFromChannelEventPayload(payload: unknown) {
  if (typeof payload === "string") return payload.trim() || undefined;
  if (!isRecord(payload)) return undefined;
  return optionalString(payload, "text") ?? optionalString(payload, "message");
}

function turnFromChannelEventPayload(payload: unknown) {
  if (!isRecord(payload)) return undefined;
  return payload.turn;
}

function channelEventResultFromUserMessageResult(
  input: HandleChannelEventInput,
  result: HandleUserMessageResult,
): HandleChannelEventResult {
  const channelEvent = defineChannelEvent(input.event);
  return {
    channelEvent,
    intake: {
      outcome: "accepted",
      bindingOutcome: input.binding?.outcome ?? "resume-existing",
      conversationId: result.conversation.id,
      handling: "started",
    },
    conversation: result.conversation,
    turn: result,
    snapshot: result.snapshot,
    events: result.events,
    text: result.text,
    ...(result.activeJourneyId ? { activeJourneyId: result.activeJourneyId } : {}),
    disposition: "model-turn",
  };
}

export function sendMessageResultFromChannelEvent(result: HandleChannelEventResult) {
  return {
    text: result.turn?.text ?? result.text ?? textFromEvents(result.events) ?? "",
    events: result.events,
    ...(result.turn?.activeJourneyId ?? result.activeJourneyId
      ? { activeJourneyId: result.turn?.activeJourneyId ?? result.activeJourneyId }
      : {}),
  };
}

function textFromEvents(events: RuntimeEvent[]) {
  for (const event of [...events].reverse()) {
    if (event.type === "message.completed" && typeof event.data.text === "string") {
      return event.data.text;
    }
  }
  return undefined;
}
