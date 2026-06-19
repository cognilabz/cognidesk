import OpenAI from "openai";
import type {
  RealtimeClientEvent,
  RealtimeServerEvent,
} from "openai/resources/realtime/realtime";
import type {
  VoiceProvider,
  VoiceProviderEvent,
  VoiceProviderSession,
} from "@cognidesk/voice-websocket";
import {
  OPENAI_REALTIME_V1_MODEL,
  type OpenAIVoiceProviderOptions,
} from "./contracts.js";
import { handleControlToolCall } from "./control.js";
import { assertSupportedModel } from "./readiness.js";
import { createOpenAIRealtimeSocket } from "./realtime.js";
import {
  handleRealtimeEvent,
  toVoiceJsonValue,
  translateBrowserEvent,
} from "./request.js";
import { buildRealtimeSession } from "./session.js";
import {
  createId,
  createPreambleResponse,
  createSpeechResponse,
  responseHasSpeechId,
} from "./speech.js";

interface PendingSpeech {
  id: string;
  responseId?: string;
  resolve(): void;
  reject(error: Error): void;
  timeout: ReturnType<typeof setTimeout>;
}

export function createOpenAIVoiceProvider(options: OpenAIVoiceProviderOptions = {}): VoiceProvider {
  const model = options.model ?? OPENAI_REALTIME_V1_MODEL;
  if (model !== OPENAI_REALTIME_V1_MODEL) {
    throw new Error(`@cognidesk/integrations/voice/openai v1 supports only ${OPENAI_REALTIME_V1_MODEL}.`);
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
        if (input.control && event.type === "response.function_call_arguments.done") {
          void handleControlToolCall({
            event,
            socket,
            control: input.control,
            session: input.session,
            signal: input.signal,
            sendProviderEvent,
          });
          return;
        }
        void handleRealtimeEvent(event, sendProviderEvent);
      });
      socket.on("error", (error) => {
        rejectPendingSpeech(error);
        void sendProviderEvent({
          kind: "error",
          code: "openai_realtime_error",
          message: error instanceof Error ? error.message : "OpenAI Realtime socket error.",
          details: toVoiceJsonValue(error),
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
          ...(input.control ? { control: input.control } : {}),
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
