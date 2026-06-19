import type {
  VoiceBrowserClientEvent,
  VoiceJsonObject,
  VoiceJsonValue,
  VoiceWebsocketJsonObject,
} from "./protocol.js";

export function parseClientEvent(raw: string): VoiceBrowserClientEvent {
  let parsed: unknown;
  try {
    parsed = JSON.parse(raw);
  } catch {
    throw new Error("Voice socket message must be valid JSON.");
  }
  if (!isRecord(parsed)) throw new Error("Voice socket message must be a JSON object.");
  const type = parsed.type;
  if (typeof type !== "string") throw new Error("Voice socket message type is required.");
  switch (type) {
    case "session.update":
      return { type, ...optionalEventId(parsed), ...(isRecord(parsed.session) ? { session: toVoiceJsonObject(parsed.session) } : {}) };
    case "input_audio_buffer.append": {
      const audio = requiredString(parsed, "audio");
      const sequence = optionalInteger(parsed, "sequence");
      return { type, audio, ...optionalEventId(parsed), ...(sequence !== undefined ? { sequence } : {}) };
    }
    case "input_audio_buffer.commit":
    case "input_audio_buffer.clear":
      return { type, ...optionalEventId(parsed) };
    case "response.cancel":
      return {
        type,
        ...optionalEventId(parsed),
        ...optionalStringField("response_id", optionalString(parsed, "response_id")),
        ...optionalStringField("interruptedMessageId", optionalString(parsed, "interruptedMessageId")),
        ...optionalStringField("reason", optionalString(parsed, "reason")),
        ...optionalNumberField("playedUntilMs", optionalInteger(parsed, "playedUntilMs")),
        ...optionalNumberField("audioEndMs", optionalInteger(parsed, "audioEndMs")),
      };
    case "conversation.item.truncate":
      return {
        type,
        ...optionalEventId(parsed),
        ...optionalStringField("item_id", optionalString(parsed, "item_id")),
        ...optionalNumberField("content_index", optionalInteger(parsed, "content_index")),
        ...optionalNumberField("audio_end_ms", optionalInteger(parsed, "audio_end_ms")),
      };
    default:
      throw new Error(`Unsupported voice socket event '${type}'.`);
  }
}

export function assertBase64Audio(value: string) {
  if (value.length === 0) throw new Error("audio must not be empty.");
  if (!/^[A-Za-z0-9+/]+={0,2}$/.test(value)) throw new Error("audio must be base64 encoded.");
}

export function optionalStringField<TKey extends string>(key: TKey, value: string | undefined) {
  return value ? { [key]: value } as Record<TKey, string> : {};
}

export function optionalNumberField<TKey extends string>(key: TKey, value: number | undefined) {
  return value !== undefined ? { [key]: value } as Record<TKey, number> : {};
}

function optionalEventId(value: VoiceWebsocketJsonObject) {
  return optionalStringField("event_id", optionalString(value, "event_id"));
}

function requiredString(value: VoiceWebsocketJsonObject, key: string) {
  const result = optionalString(value, key);
  if (!result) throw new Error(`${key} must be a non-empty string.`);
  return result;
}

function optionalString(value: VoiceWebsocketJsonObject, key: string) {
  const candidate = value[key];
  if (candidate === undefined || candidate === null) return undefined;
  if (typeof candidate !== "string") throw new Error(`${key} must be a string.`);
  const trimmed = candidate.trim();
  return trimmed.length > 0 ? trimmed : undefined;
}

function optionalInteger(value: VoiceWebsocketJsonObject, key: string) {
  const candidate = value[key];
  if (candidate === undefined || candidate === null) return undefined;
  if (typeof candidate !== "number" || !Number.isSafeInteger(candidate) || candidate < 0) {
    throw new Error(`${key} must be a non-negative integer.`);
  }
  return candidate;
}

function toVoiceJsonValue(value: unknown): VoiceJsonValue {
  if (value === null || typeof value === "string" || typeof value === "number" || typeof value === "boolean") {
    return value;
  }
  if (Array.isArray(value)) return value.map(toVoiceJsonValue);
  if (isRecord(value)) return toVoiceJsonObject(value);
  return null;
}

function toVoiceJsonObject(value: VoiceWebsocketJsonObject): VoiceJsonObject {
  return Object.fromEntries(
    Object.entries(value).map(([key, item]) => [key, toVoiceJsonValue(item)]),
  );
}

function isRecord(value: unknown): value is VoiceWebsocketJsonObject {
  return Boolean(value && typeof value === "object" && !Array.isArray(value));
}
