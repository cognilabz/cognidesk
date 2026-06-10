import OpenAI from "openai";
import { OpenAIRealtimeWS } from "openai/realtime/ws";
import type {
  RealtimeClientEvent,
  RealtimeServerEvent,
  RealtimeSessionCreateRequest,
} from "openai/resources/realtime/realtime";
import type { VoiceModelSet } from "@cognidesk/core";
import type {
  VoiceBrowserClientEvent,
  VoiceBrowserServerEvent,
  VoiceProvider,
  VoiceProviderEvent,
  VoiceProviderSession,
} from "@cognidesk/voice-websocket";

export const OPENAI_REALTIME_V1_MODEL = "gpt-realtime-2";

export interface OpenAIVoiceProviderOptions {
  apiKey?: string;
  client?: OpenAI;
  model?: typeof OPENAI_REALTIME_V1_MODEL;
  voice?: string;
  transcriptionLanguage?: string;
  baseURL?: string;
  realtime?: OpenAIRealtimeFactory;
  sessionDefaults?: Partial<RealtimeSessionCreateRequest>;
}

export interface OpenAIRealtimeFactoryInput {
  client: OpenAI;
  model: typeof OPENAI_REALTIME_V1_MODEL;
}

export interface OpenAIRealtimeSocket {
  send(event: RealtimeClientEvent): void;
  close(props?: { code: number; reason: string }): void;
  on(event: "event", listener: (event: RealtimeServerEvent) => void): void;
  on(event: "error", listener: (error: unknown) => void): void;
}

interface PendingSpeech {
  id: string;
  responseId?: string;
  resolve(): void;
  reject(error: Error): void;
  timeout: ReturnType<typeof setTimeout>;
}

export type OpenAIRealtimeFactory = (
  input: OpenAIRealtimeFactoryInput,
) => Promise<OpenAIRealtimeSocket>;

export function createOpenAIVoiceProvider(options: OpenAIVoiceProviderOptions = {}): VoiceProvider {
  const model = options.model ?? OPENAI_REALTIME_V1_MODEL;
  if (model !== OPENAI_REALTIME_V1_MODEL) {
    throw new Error(`@cognidesk/voice-openai v1 supports only ${OPENAI_REALTIME_V1_MODEL}.`);
  }
  const client = options.client ?? new OpenAI({
    apiKey: options.apiKey,
    ...(options.baseURL ? { baseURL: options.baseURL } : {}),
  });
  const realtime = options.realtime ?? createOpenAIRealtimeSocket;

  return {
    id: "openai-realtime-ws",
    async connect(input): Promise<VoiceProviderSession> {
      const profileModel = input.profile?.modelSet;
      assertSupportedModel(profileModel);
      const socket = await realtime({ client, model });
      let speechQueue = Promise.resolve();
      let pendingSpeech: PendingSpeech | null = null;
      const sendProviderEvent = async (event: VoiceProviderEvent) => {
        await input.onEvent(event);
      };

      socket.on("event", (event) => {
        resolvePendingSpeech(event);
        void handleRealtimeEvent(event, sendProviderEvent);
      });
      socket.on("error", (error) => {
        rejectPendingSpeech(error);
        void sendProviderEvent({
          kind: "error",
          code: "openai_realtime_error",
          message: error instanceof Error ? error.message : "OpenAI Realtime socket error.",
          details: error,
        });
      });

      socket.send({
        type: "session.update",
        session: buildRealtimeSession({
          ...(options.sessionDefaults ? { defaults: options.sessionDefaults } : {}),
          model,
          ...(profileModel?.voice ?? options.voice ? { voice: profileModel?.voice ?? options.voice } : {}),
          ...(input.profile?.instructions ? { instructions: input.profile.instructions } : {}),
          ...(options.transcriptionLanguage ? { transcriptionLanguage: options.transcriptionLanguage } : {}),
        }),
      });

      return {
        send(event) {
          const translated = translateBrowserEvent(event);
          if (translated) socket.send(translated);
        },
        speak({ text }) {
          return enqueueSpeech((id) => createSpeechResponse({ id, text }));
        },
        preamble({ text }) {
          return enqueueSpeech((id) => createPreambleResponse({ id, text }));
        },
        close() {
          resolvePendingSpeech();
          socket.close({ code: 1000, reason: "Cognidesk voice session closed" });
        },
      };

      function enqueueSpeech(createEvent: (id: string) => RealtimeClientEvent) {
        const id = createId("cognidesk_voice_speech");
        const queued = speechQueue.catch(() => undefined).then(() =>
          new Promise<void>((resolve, reject) => {
            const timeout = setTimeout(() => {
              if (pendingSpeech?.id === id) {
                pendingSpeech = null;
                resolve();
              }
            }, 90_000);
            pendingSpeech = { id, resolve, reject, timeout };
            try {
              socket.send(createEvent(id));
            } catch (error) {
              clearTimeout(timeout);
              pendingSpeech = null;
              reject(error);
            }
          })
        );
        speechQueue = queued;
        return queued;
      }

      function resolvePendingSpeech(event?: RealtimeServerEvent) {
        if (!pendingSpeech) return;
        if (!event) {
          const pending = pendingSpeech;
          pendingSpeech = null;
          clearTimeout(pending.timeout);
          pending.resolve();
          return;
        }
        if (event.type === "response.created") {
          if (responseHasSpeechId(event.response, pendingSpeech.id) || !pendingSpeech.responseId) {
            if (event.response.id) pendingSpeech.responseId = event.response.id;
          }
          return;
        }
        if (event.type !== "response.done") return;
        const matchesResponseId = Boolean(pendingSpeech.responseId && event.response.id === pendingSpeech.responseId);
        const matchesSpeechId = responseHasSpeechId(event.response, pendingSpeech.id);
        if (!matchesResponseId && !matchesSpeechId && pendingSpeech.responseId) return;
        const pending = pendingSpeech;
        pendingSpeech = null;
        clearTimeout(pending.timeout);
        pending.resolve();
      }

      function rejectPendingSpeech(error: unknown) {
        if (!pendingSpeech) return;
        const pending = pendingSpeech;
        pendingSpeech = null;
        clearTimeout(pending.timeout);
        pending.reject(error instanceof Error ? error : new Error("OpenAI Realtime speech failed."));
      }
    },
  };
}

export const createOpenAIVoiceAdapter = createOpenAIVoiceProvider;

export async function createOpenAIRealtimeSocket(
  input: OpenAIRealtimeFactoryInput,
): Promise<OpenAIRealtimeSocket> {
  const socket = await OpenAIRealtimeWS.create(input.client, { model: input.model });
  await waitForRealtimeOpen(socket);
  return socket;
}

async function waitForRealtimeOpen(socket: OpenAIRealtimeWS) {
  if (socket.socket.readyState === socket.socket.OPEN) return;
  await new Promise<void>((resolve, reject) => {
    const cleanup = () => {
      socket.socket.off("open", onOpen);
      socket.socket.off("error", onError);
    };
    const onOpen = () => {
      cleanup();
      resolve();
    };
    const onError = (error: Error) => {
      cleanup();
      reject(error);
    };
    socket.socket.once("open", onOpen);
    socket.socket.once("error", onError);
  });
}

function buildRealtimeSession(input: {
  defaults?: Partial<RealtimeSessionCreateRequest>;
  model: typeof OPENAI_REALTIME_V1_MODEL;
  voice?: string;
  instructions?: string;
  transcriptionLanguage?: string;
}): RealtimeSessionCreateRequest {
  const base: RealtimeSessionCreateRequest = {
    type: "realtime",
    model: input.model,
    output_modalities: ["audio"],
    reasoning: { effort: "low" },
    audio: {
      input: {
        format: { type: "audio/pcm", rate: 24000 },
        noise_reduction: { type: "near_field" },
        transcription: {
          model: "gpt-realtime-whisper",
          ...(input.transcriptionLanguage ? { language: input.transcriptionLanguage } : {}),
        },
        turn_detection: {
          type: "server_vad",
          create_response: false,
          interrupt_response: true,
          prefix_padding_ms: 250,
          silence_duration_ms: 420,
        },
      },
      output: {
        format: { type: "audio/pcm", rate: 24000 },
        ...(input.voice ? { voice: input.voice } : {}),
      },
    },
    instructions: input.instructions ?? [
      "You are the voice transport for a Cognidesk agent.",
      "Transcribe user speech accurately.",
      "# Preambles",
      "When asked for a preamble, generate exactly one brief, natural wait-time sentence. Do not claim a result or repeat the same wording.",
      "# Language",
      "Prefer German and English. If a short greeting sounds like 'Hallo', treat it as German unless the user clearly continues in another language.",
      "When asked to speak supplied text, preserve the wording and keep the delivery natural and concise.",
    ].join(" "),
  };
  return mergeSession(base, input.defaults);
}

function createSpeechResponse(input: { id: string; text: string }): RealtimeClientEvent {
  return {
    type: "response.create",
    response: {
      conversation: "none",
      output_modalities: ["audio"],
      metadata: {
        cognidesk_voice_kind: "speech",
        cognidesk_voice_id: input.id,
      },
      input: [{
        type: "message",
        role: "user",
        content: [{
          type: "input_text",
          text: `Read the following text aloud exactly, with a natural service-agent tone and no extra words:\n\n${input.text}`,
        }],
      }],
      instructions: "Read the supplied text exactly. Do not add a greeting, explanation, or closing.",
    },
  };
}

function createPreambleResponse(input: { id: string; text: string }): RealtimeClientEvent {
  return {
    type: "response.create",
    response: {
      conversation: "none",
      output_modalities: ["audio"],
      metadata: {
        cognidesk_voice_kind: "preamble",
        cognidesk_voice_id: input.id,
      },
      input: [{
        type: "message",
        role: "user",
        content: [{
          type: "input_text",
          text: [
            "The customer just said:",
            input.text,
            "",
            "Generate and speak one short wait-time preamble for a flight-service voice agent while Cognidesk continues checking the request.",
          ].join("\n"),
        }],
      }],
      instructions: [
        "Generate exactly one natural spoken sentence.",
        "Do not use a fixed phrase. Vary the wording.",
        "Do not claim a booking, policy result, tool result, queue state, or completion.",
        "Use German if the customer appears to be speaking German; use English if they appear to be speaking English.",
        "For the greeting 'Hallo', prefer German.",
      ].join(" "),
    },
  };
}

function translateBrowserEvent(event: VoiceBrowserClientEvent): RealtimeClientEvent | null {
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

async function handleRealtimeEvent(
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
        response: event.response,
      };
    case "error":
      return {
        type: "error",
        event_id: event.event_id,
        error: {
          code: event.error.code ?? event.error.type,
          message: event.error.message,
          details: event.error,
        },
      };
    default:
      return null;
  }
}

function assertSupportedModel(modelSet: VoiceModelSet | undefined) {
  if (!modelSet) return;
  if (modelSet.provider !== "openai") {
    throw new Error(`@cognidesk/voice-openai cannot run voice model provider '${modelSet.provider}'.`);
  }
  if (modelSet.model !== OPENAI_REALTIME_V1_MODEL) {
    throw new Error(`@cognidesk/voice-openai v1 supports only ${OPENAI_REALTIME_V1_MODEL}.`);
  }
}

function mergeSession(
  base: RealtimeSessionCreateRequest,
  defaults: Partial<RealtimeSessionCreateRequest> | undefined,
): RealtimeSessionCreateRequest {
  if (!defaults) return base;
  return {
    ...base,
    ...defaults,
    audio: {
      ...base.audio,
      ...defaults.audio,
      input: {
        ...base.audio?.input,
        ...defaults.audio?.input,
      },
      output: {
        ...base.audio?.output,
        ...defaults.audio?.output,
      },
    },
  };
}

function responseHasSpeechId(response: { metadata?: unknown }, id: string) {
  const metadata = response.metadata;
  if (!metadata || typeof metadata !== "object" || Array.isArray(metadata)) return false;
  return (metadata as Record<string, unknown>).cognidesk_voice_id === id;
}

function optionalStringField<TKey extends string>(key: TKey, value: string | undefined) {
  return value ? { [key]: value } as Record<TKey, string> : {};
}

function createId(prefix: string) {
  const random = globalThis.crypto?.randomUUID?.()
    ?? Math.random().toString(36).slice(2);
  return `${prefix}_${random}`;
}
