import OpenAI from "openai";
import { OpenAIRealtimeWS } from "openai/realtime/ws";
import type {
  RealtimeClientEvent,
  RealtimeServerEvent,
  RealtimeSessionCreateRequest,
} from "openai/resources/realtime/realtime";
import {
  defineIntegration,
  type IntegrationOperationContext,
} from "@cognidesk/integration-kit";
import type { VoiceModelSet } from "@cognidesk/core";
import type {
  VoiceControlNotification,
  VoiceControlTool,
  VoiceBrowserClientEvent,
  VoiceBrowserServerEvent,
  VoiceJsonObject,
  VoiceJsonValue,
  VoiceProvider,
  VoiceProviderConnectInput,
  VoiceProviderEvent,
  VoiceProviderSession,
  VoiceSocketSession,
} from "@cognidesk/voice-websocket";
export {
  OPENAI_REALTIME_V1_MODEL,
  openAIVoiceManifestInput,
  openAIVoiceProviderManifest,
} from "./manifest.js";
import { OPENAI_REALTIME_V1_MODEL, openAIVoiceManifestInput } from "./manifest.js";

export interface OpenAIVoiceProviderOptions {
  apiKey?: string;
  /**
   * Raw official OpenAI SDK client. Prefer rawClient for new code.
   */
  client?: OpenAI;
  rawClient?: OpenAI;
  voiceClient?: OpenAIVoiceClient;
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

export interface OpenAIVoiceClientOptions {
  apiKey?: string;
  baseURL?: string;
  rawClient?: OpenAI;
  realtime?: OpenAIRealtimeFactory;
}

export interface OpenAIRealtimeSocketInput {
  model?: string;
}

export interface OpenAIRealtimeSessionStartInput extends OpenAIRealtimeSocketInput {
  socket?: OpenAIRealtimeSocket;
  session?: RealtimeSessionCreateRequest;
}

export interface OpenAIRealtimeSessionStartResult {
  socket: OpenAIRealtimeSocket;
  session: RealtimeSessionCreateRequest;
}

export interface OpenAIRealtimeTurnFinalizeInput {
  socket: OpenAIRealtimeSocket;
  eventId?: string;
}

export type OpenAIRealtimeResponseCreateRequest = NonNullable<
  Extract<RealtimeClientEvent, { type: "response.create" }>["response"]
>;

export interface OpenAIRealtimeSpeakInput {
  socket: OpenAIRealtimeSocket;
  id?: string;
  text?: string;
  response?: OpenAIRealtimeResponseCreateRequest;
}

export interface OpenAIRealtimeEventSendInput {
  socket: OpenAIRealtimeSocket;
  event: RealtimeClientEvent;
}

export interface OpenAIVoiceClient {
  getRawClient(): Promise<OpenAI>;
  createRealtimeSocket(input?: OpenAIRealtimeSocketInput): Promise<OpenAIRealtimeSocket>;
  startRealtimeSession(input?: OpenAIRealtimeSessionStartInput): Promise<OpenAIRealtimeSessionStartResult>;
  updateRealtimeSession(input: {
    socket: OpenAIRealtimeSocket;
    session: RealtimeSessionCreateRequest;
  }): RealtimeClientEvent;
  commitAudioTurn(input: OpenAIRealtimeTurnFinalizeInput): RealtimeClientEvent;
  createRealtimeResponse(input: {
    socket: OpenAIRealtimeSocket;
    response: OpenAIRealtimeResponseCreateRequest;
  }): RealtimeClientEvent;
  speak(input: OpenAIRealtimeSpeakInput): {
    event: RealtimeClientEvent;
    speechId?: string;
  };
  sendRealtimeEvent(input: OpenAIRealtimeEventSendInput): RealtimeClientEvent;
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

export function createOpenAIVoiceClient(options: OpenAIVoiceClientOptions = {}): OpenAIVoiceClient {
  let rawClientPromise: Promise<OpenAI> | undefined;
  const realtime = options.realtime ?? createOpenAIRealtimeSocket;
  const getRawClient = () => {
    rawClientPromise ??= Promise.resolve(options.rawClient ?? new OpenAI({
      ...(options.apiKey !== undefined ? { apiKey: options.apiKey } : {}),
      ...(options.baseURL ? { baseURL: options.baseURL } : {}),
    }));
    return rawClientPromise;
  };
  const sendRealtimeEvent = (input: OpenAIRealtimeEventSendInput) => {
    input.socket.send(input.event);
    return input.event;
  };
  const createRealtimeSocket = async (input: OpenAIRealtimeSocketInput = {}) => {
    const rawClient = await getRawClient();
    return realtime({
      client: rawClient,
      model: resolveSupportedRealtimeModel(input.model),
    });
  };
  const updateRealtimeSession = (input: {
    socket: OpenAIRealtimeSocket;
    session: RealtimeSessionCreateRequest;
  }) => sendRealtimeEvent({
    socket: input.socket,
    event: {
      type: "session.update",
      session: input.session,
    },
  });
  const commitAudioTurn = (input: OpenAIRealtimeTurnFinalizeInput) => sendRealtimeEvent({
    socket: input.socket,
    event: {
      type: "input_audio_buffer.commit",
      ...optionalStringField("event_id", input.eventId),
    },
  });
  const createRealtimeResponse = (input: {
    socket: OpenAIRealtimeSocket;
    response: OpenAIRealtimeResponseCreateRequest;
  }) => sendRealtimeEvent({
    socket: input.socket,
    event: {
      type: "response.create",
      response: input.response,
    },
  });

  return {
    getRawClient,
    createRealtimeSocket,
    async startRealtimeSession(input = {}) {
      const model = resolveSupportedRealtimeModel(input.model ?? input.session?.model);
      const socket = input.socket ?? await createRealtimeSocket({ model });
      const session = input.session
        ? { ...input.session, model }
        : buildRealtimeSession({ model });
      updateRealtimeSession({ socket, session });
      return { socket, session };
    },
    updateRealtimeSession,
    commitAudioTurn,
    createRealtimeResponse,
    speak(input) {
      const event = input.response
        ? createRealtimeResponse({ socket: input.socket, response: input.response })
        : sendRealtimeEvent({
            socket: input.socket,
            event: createSpeechResponse({
              id: input.id ?? createId("cognidesk_voice_speech"),
              text: requireSpeakText(input.text),
            }),
          });
      const speechId = input.response ? undefined : speechIdFromResponseCreateEvent(event);
      return speechId ? { event, speechId } : { event };
    },
    sendRealtimeEvent,
  };
}

export function createOpenAIVoiceOperationHandlers(options: { voiceClient?: OpenAIVoiceClient } = {}) {
  return {
    "voice.session.start": async (input: OpenAIRealtimeSessionStartInput, context: IntegrationOperationContext) =>
      operationVoiceClient(context, options.voiceClient).startRealtimeSession(input),
    "voice.turn.finalize": async (input: OpenAIRealtimeTurnFinalizeInput, context: IntegrationOperationContext) =>
      operationVoiceClient(context, options.voiceClient).commitAudioTurn(input),
    "voice.speak": async (input: OpenAIRealtimeSpeakInput, context: IntegrationOperationContext) =>
      operationVoiceClient(context, options.voiceClient).speak(input),
  } as const;
}

export const openAIVoiceIntegration = defineIntegration({
  manifest: openAIVoiceManifestInput,
  operations: createOpenAIVoiceOperationHandlers(),
});

export function createOpenAIVoiceProvider(options: OpenAIVoiceProviderOptions = {}): VoiceProvider {
  const model = options.model ?? OPENAI_REALTIME_V1_MODEL;
  if (model !== OPENAI_REALTIME_V1_MODEL) {
    throw new Error(`@cognidesk/integration-voice-openai v1 supports only ${OPENAI_REALTIME_V1_MODEL}.`);
  }
  const voiceClient = options.voiceClient ?? createOpenAIVoiceClient({
    ...(options.apiKey !== undefined ? { apiKey: options.apiKey } : {}),
    ...(options.baseURL ? { baseURL: options.baseURL } : {}),
    ...(options.rawClient ?? options.client ? { rawClient: options.rawClient ?? options.client } : {}),
    ...(options.realtime ? { realtime: options.realtime } : {}),
  });

  return {
    id: "openai-realtime-ws",
    async connect(input): Promise<VoiceProviderSession> {
      const profileModel = input.profile?.modelSet;
      assertSupportedModel(profileModel);
      const socket = await voiceClient.createRealtimeSocket({ model });
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

      voiceClient.updateRealtimeSession({
        socket,
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
          if (translated) voiceClient.sendRealtimeEvent({ socket, event: translated });
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
              voiceClient.sendRealtimeEvent({ socket, event: createEvent(id) });
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

async function handleControlToolCall(input: {
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

function createFunctionCallOutput(callId: string, output: unknown): RealtimeClientEvent {
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
    return JSON.parse(value) as VoiceJsonValue;
  } catch {
    return {};
  }
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
  control?: {
    tools: VoiceControlTool[];
    instructions?: string;
  };
}): RealtimeSessionCreateRequest {
  const realtimeControlEnabled = Boolean(input.control);
  const realtimeTools = input.control ? input.control.tools.map(toRealtimeFunctionTool) : undefined;
  const sessionInstructions = buildSessionInstructions({
    ...(input.instructions ? { profileInstructions: input.instructions } : {}),
    ...(input.control?.instructions ? { controlInstructions: input.control.instructions } : {}),
    realtimeControlEnabled,
  });
  const base: RealtimeSessionCreateRequest = {
    type: "realtime",
    model: input.model,
    output_modalities: ["audio"],
    ...(realtimeTools ? {
      tools: realtimeTools,
      tool_choice: "auto",
      parallel_tool_calls: false,
    } : {}),
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
          create_response: realtimeControlEnabled,
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
    instructions: sessionInstructions,
  };
  return mergeSession(base, input.defaults);
}

function buildSessionInstructions(input: {
  profileInstructions?: string;
  controlInstructions?: string;
  realtimeControlEnabled: boolean;
}) {
  if (!input.realtimeControlEnabled) {
    return input.profileInstructions ?? [
      "You are the voice transport for a Cognidesk agent.",
      "Transcribe user speech accurately.",
      "# Preambles",
      "When asked for a preamble, generate exactly one brief, natural wait-time sentence. Do not claim a result or repeat the same wording.",
      "# Language",
      "Prefer German and English. If a short greeting sounds like 'Hallo', treat it as German unless the user clearly continues in another language.",
      "When asked to speak supplied text, preserve the wording and keep the delivery natural and concise.",
    ].join(" ");
  }
  return [
    "You are the live realtime voice layer for a Cognidesk customer-support agent.",
    "Speak naturally and quickly, but keep Cognidesk authoritative for facts, customer-specific state, workflow progress, and side effects.",
    "Use lightweight conversation and the supplied history for greetings, small talk, clarifications, and interruption recovery.",
    "Use the available Cognidesk voice control tools for knowledge, customer state, tool work, confirmations, or workflow changes.",
    "Do not claim a side effect, policy answer, status, eligibility, handoff, or other substantive result until it comes from a control tool result or validated runtime context.",
    "Ask at most one missing detail at a time.",
    "Do not mention widgets, buttons, Markdown, JSON, tool names, internal state, Runtime Events, or provider events to the customer.",
    input.profileInstructions,
    input.controlInstructions,
  ].filter(Boolean).join("\n\n");
}

function toRealtimeFunctionTool(tool: VoiceControlTool): NonNullable<RealtimeSessionCreateRequest["tools"]>[number] {
  return {
    type: "function",
    name: tool.name,
    ...(tool.description ? { description: tool.description } : {}),
    ...(tool.parameters ? { parameters: tool.parameters } : {}),
  };
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
            "Generate and speak one short wait-time preamble for a customer-support voice agent while Cognidesk continues checking the request.",
          ].join("\n"),
        }],
      }],
      instructions: [
        "Generate exactly one natural spoken sentence.",
        "Do not use a fixed phrase. Vary the wording.",
        "Do not claim a side effect, policy result, tool result, queue state, or completion.",
        "Use German if the customer appears to be speaking German; use English if the customer appears to be speaking English.",
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
  return null;
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
        response: event.response as unknown as VoiceJsonObject,
      };
    case "error":
      return {
        type: "error",
        event_id: event.event_id,
        error: {
          code: event.error.code ?? event.error.type,
          message: event.error.message,
          details: event.error as unknown as VoiceJsonValue,
        },
      };
    default:
      return null;
  }
}

function assertSupportedModel(modelSet: VoiceModelSet | undefined) {
  if (!modelSet) return;
  if (modelSet.provider !== "openai") {
    throw new Error(`@cognidesk/integration-voice-openai cannot run voice model provider '${modelSet.provider}'.`);
  }
  resolveSupportedRealtimeModel(modelSet.model);
}

function resolveSupportedRealtimeModel(model: string | undefined): typeof OPENAI_REALTIME_V1_MODEL {
  const resolved = model ?? OPENAI_REALTIME_V1_MODEL;
  if (resolved !== OPENAI_REALTIME_V1_MODEL) {
    throw new Error(`@cognidesk/integration-voice-openai v1 supports only ${OPENAI_REALTIME_V1_MODEL}.`);
  }
  return resolved;
}

function operationVoiceClient(
  context: IntegrationOperationContext,
  configuredClient: OpenAIVoiceClient | undefined,
) {
  if (configuredClient) return configuredClient;
  const client = context.metadata?.client ?? context.metadata?.voiceClient;
  if (!client) throw new Error("Pass an OpenAI voice client as context.metadata.client.");
  return client as OpenAIVoiceClient;
}

function requireSpeakText(text: string | undefined) {
  if (text === undefined) throw new Error("OpenAI realtime voice.speak requires text or a response payload.");
  return text;
}

function speechIdFromResponseCreateEvent(event: RealtimeClientEvent) {
  if (event.type !== "response.create") return undefined;
  const metadata = event.response?.metadata;
  if (!metadata || typeof metadata !== "object" || Array.isArray(metadata)) return undefined;
  const value = (metadata as Record<string, unknown>).cognidesk_voice_id;
  return typeof value === "string" ? value : undefined;
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

function toVoiceJsonValue(value: unknown): VoiceJsonValue {
  if (
    value === null
    || typeof value === "string"
    || typeof value === "number"
    || typeof value === "boolean"
    || Array.isArray(value)
    || (typeof value === "object" && value !== null)
  ) {
    return value as VoiceJsonValue;
  }
  return String(value);
}

function createId(prefix: string) {
  const random = globalThis.crypto?.randomUUID?.()
    ?? Math.random().toString(36).slice(2);
  return `${prefix}_${random}`;
}
