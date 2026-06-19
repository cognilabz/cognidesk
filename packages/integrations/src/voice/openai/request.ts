import type {
  RealtimeClientEvent,
  RealtimeServerEvent,
} from "openai/resources/realtime/realtime";
import type {
  VoiceBrowserClientEvent,
  VoiceBrowserServerEvent,
  VoiceJsonObject,
  VoiceJsonValue,
  VoiceProviderEvent,
} from "@cognidesk/voice-websocket";

export function translateBrowserEvent(event: VoiceBrowserClientEvent): RealtimeClientEvent | null {
  switch (event.type) {
    case "input_audio_buffer.append":
      return {
        type: "input_audio_buffer.append",
        audio: event.audio,
        ...optionalStringField("event_id", event.event_id),
      };
    case "input_audio_buffer.commit":
      return { type: "input_audio_buffer.commit", ...optionalStringField("event_id", event.event_id) };
    case "input_audio_buffer.clear":
      return { type: "input_audio_buffer.clear", ...optionalStringField("event_id", event.event_id) };
    case "response.cancel":
      return {
        type: "response.cancel",
        ...optionalStringField("event_id", event.event_id),
        ...optionalStringField("response_id", event.response_id),
      };
    case "conversation.item.truncate":
      if (!event.item_id || event.content_index === undefined || event.audio_end_ms === undefined) return null;
      return {
        type: "conversation.item.truncate",
        item_id: event.item_id,
        content_index: event.content_index,
        audio_end_ms: event.audio_end_ms,
        ...optionalStringField("event_id", event.event_id),
      };
    case "session.update":
      return null;
  }
}

export async function handleRealtimeEvent(
  event: RealtimeServerEvent,
  sendProviderEvent: (event: VoiceProviderEvent) => Promise<void>,
) {
  if (event.type === "conversation.item.input_audio_transcription.completed") {
    await sendProviderEvent({
      kind: "input_transcript.completed",
      text: event.transcript,
      itemId: event.item_id,
      transcriptionSource: "openai-realtime",
    });
    return;
  }
  const forwarded = translateServerEvent(event);
  if (forwarded) {
    await sendProviderEvent({
      kind: "server_event",
      event: forwarded,
    });
  }
}

function translateServerEvent(event: RealtimeServerEvent): VoiceBrowserServerEvent | null {
  switch (event.type) {
    case "input_audio_buffer.speech_started":
      return {
        type: "input_audio_buffer.speech_started",
        event_id: event.event_id,
        audio_start_ms: event.audio_start_ms,
        item_id: event.item_id,
      };
    case "input_audio_buffer.speech_stopped":
      return {
        type: "input_audio_buffer.speech_stopped",
        event_id: event.event_id,
        audio_end_ms: event.audio_end_ms,
        item_id: event.item_id,
      };
    case "response.output_audio.delta":
      return {
        type: "response.output_audio.delta",
        event_id: event.event_id,
        response_id: event.response_id,
        item_id: event.item_id,
        output_index: event.output_index,
        content_index: event.content_index,
        delta: event.delta,
      };
    case "response.output_audio.done":
      return {
        type: "response.output_audio.done",
        event_id: event.event_id,
        response_id: event.response_id,
        item_id: event.item_id,
        output_index: event.output_index,
        content_index: event.content_index,
      };
    case "response.output_audio_transcript.delta":
      return {
        type: "response.output_audio_transcript.delta",
        event_id: event.event_id,
        response_id: event.response_id,
        item_id: event.item_id,
        output_index: event.output_index,
        content_index: event.content_index,
        delta: event.delta,
      };
    case "response.output_audio_transcript.done":
      return {
        type: "response.output_audio_transcript.done",
        event_id: event.event_id,
        response_id: event.response_id,
        item_id: event.item_id,
        output_index: event.output_index,
        content_index: event.content_index,
        transcript: event.transcript,
      };
    case "response.done":
      return {
        type: "response.done",
        event_id: event.event_id,
        response: toVoiceJsonObject(event.response),
      };
    case "error":
      return {
        type: "error",
        event_id: event.event_id,
        error: {
          code: event.error.code ?? event.error.type,
          message: event.error.message,
          details: toVoiceJsonValue(event.error),
        },
      };
    default:
      return null;
  }
}

export function toVoiceJsonValue(value: unknown): VoiceJsonValue {
  if (value === null || typeof value === "string" || typeof value === "number" || typeof value === "boolean") {
    return value;
  }
  if (Array.isArray(value)) return value.map(toVoiceJsonValue);
  if (value && typeof value === "object") return toVoiceJsonObject(value);
  return null;
}

export function toVoiceJsonObject(value: unknown): VoiceJsonObject {
  if (!value || typeof value !== "object" || Array.isArray(value)) return {};
  return Object.fromEntries(
    Object.entries(value).map(([key, item]) => [key, toVoiceJsonValue(item)]),
  );
}

function optionalStringField<TKey extends string>(key: TKey, value: string | undefined) {
  return value ? { [key]: value } as Record<TKey, string> : {};
}
