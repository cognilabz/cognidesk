import type {
  RealtimeClientEvent,
  RealtimeServerEvent,
} from "openai/resources/realtime/realtime";
import type {
  VoiceControlNotification,
  VoiceJsonValue,
  VoiceProviderConnectInput,
  VoiceProviderEvent,
  VoiceSocketSession,
} from "@cognidesk/voice-websocket";
import type { OpenAIRealtimeSocket } from "./contracts.js";
import { toVoiceJsonValue } from "./request.js";

export async function handleControlToolCall(input: {
  event: Extract<RealtimeServerEvent, { type: "response.function_call_arguments.done" }>;
  socket: OpenAIRealtimeSocket;
  control: NonNullable<VoiceProviderConnectInput["control"]>;
  session: VoiceSocketSession;
  signal: AbortSignal;
  sendProviderEvent(event: VoiceProviderEvent): Promise<void>;
}) {
  const parsedArguments = parseToolArguments(input.event.arguments);
  try {
    const result = await input.control.handleToolCall({
      session: input.session,
      name: input.event.name,
      arguments: parsedArguments,
      callId: input.event.call_id,
      itemId: input.event.item_id,
      responseId: input.event.response_id,
      signal: input.signal,
      notify: (notification) => sendControlNotification({
        socket: input.socket,
        notification,
        sendProviderEvent: input.sendProviderEvent,
      }),
    });
    if (result.events?.length) {
      await input.sendProviderEvent({
        kind: "runtime_events",
        events: result.events,
      });
    }
    input.socket.send(createFunctionCallOutput(input.event.call_id, result.output));
  } catch (error) {
    input.socket.send(createFunctionCallOutput(input.event.call_id, {
      ok: false,
      error: error instanceof Error ? error.message : "Voice control tool failed.",
    }));
  }
  input.socket.send({
    type: "response.create",
    response: {
      conversation: "auto",
      output_modalities: ["audio"],
      instructions: [
        "Continue the conversation using the Cognidesk tool result.",
        "Follow the active session instructions for language, brevity, tone, confirmations, and follow-up policy.",
        "If the tool result contains voiceGuidance, obey it before deciding what to say.",
        "Speak only customer-facing prose.",
      ].join(" "),
    },
  });
}

async function sendControlNotification(input: {
  socket: OpenAIRealtimeSocket;
  notification: VoiceControlNotification;
  sendProviderEvent(event: VoiceProviderEvent): Promise<void>;
}) {
  if (input.notification.events?.length) {
    await input.sendProviderEvent({
      kind: "runtime_events",
      events: input.notification.events,
    });
  }
  input.socket.send(createSystemMessage(input.notification.message));
  if (input.notification.createResponse === false) return;
  input.socket.send({
    type: "response.create",
    response: {
      conversation: "auto",
      output_modalities: ["audio"],
      instructions: input.notification.responseInstructions
        ?? "A Cognidesk background update arrived. Follow the active session instructions and any guidance in the update; if it is still relevant, briefly tell the customer the result in natural spoken language.",
    },
  });
}

function createFunctionCallOutput(callId: string, output: VoiceJsonValue): RealtimeClientEvent {
  return {
    type: "conversation.item.create",
    item: {
      type: "function_call_output",
      call_id: callId,
      output: JSON.stringify(output),
    },
  };
}

function createSystemMessage(text: string): RealtimeClientEvent {
  return {
    type: "conversation.item.create",
    item: {
      type: "message",
      role: "system",
      content: [{
        type: "input_text",
        text,
      }],
    },
  };
}

function parseToolArguments(value: string): VoiceJsonValue {
  try {
    return toVoiceJsonValue(JSON.parse(value));
  } catch {
    return {};
  }
}
