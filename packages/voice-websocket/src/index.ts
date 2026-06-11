import { WebSocketServer } from "ws";
import type { IncomingMessage, Server as HttpServer } from "node:http";
import type { Duplex } from "node:stream";
import type { RawData, WebSocket } from "ws";
import type {
  HandleVoiceUserMessageInput,
  HandleVoiceUserMessageResult,
  RuntimeEvent,
  StartVoiceResult,
  VoiceProfile,
  VoiceSocketMetadata,
} from "@cognidesk/core";

export const COGNIDESK_VOICE_PROTOCOL = "cognidesk.voice.v1" as const;

export type VoiceProtocol = typeof COGNIDESK_VOICE_PROTOCOL;

export type VoiceBrowserClientEvent =
  | {
      type: "session.update";
      event_id?: string;
      session?: Record<string, unknown>;
    }
  | {
      type: "input_audio_buffer.append";
      event_id?: string;
      audio: string;
      sequence?: number;
    }
  | {
      type: "input_audio_buffer.commit";
      event_id?: string;
    }
  | {
      type: "input_audio_buffer.clear";
      event_id?: string;
    }
  | {
      type: "response.cancel";
      event_id?: string;
      response_id?: string;
      interruptedMessageId?: string;
      playedUntilMs?: number;
      audioEndMs?: number;
      reason?: string;
    }
  | {
      type: "conversation.item.truncate";
      event_id?: string;
      item_id?: string;
      content_index?: number;
      audio_end_ms?: number;
    };

export type VoiceBrowserServerEvent =
  | {
      type: "cognidesk.connection.ready";
      event_id: string;
      protocol: VoiceProtocol;
      conversation: StartVoiceResult["conversation"];
      channelSegment: StartVoiceResult["channelSegment"];
      connection: StartVoiceResult["connection"];
      lastAckSequence: number;
    }
  | {
      type: "cognidesk.connection.reconnect_token";
      event_id: string;
      token: string;
      expiresAt: string;
    }
  | {
      type: "cognidesk.audio.ack";
      event_id: string;
      sequence: number;
    }
  | {
      type: "cognidesk.runtime_event";
      event_id: string;
      event: RuntimeEvent;
    }
  | {
      type: "cognidesk.turn.completed";
      event_id: string;
      text: string;
      activeJourneyId?: string;
    }
  | {
      type: "cognidesk.interruption.recorded";
      event_id: string;
      event: RuntimeEvent;
    }
  | {
      type: "cognidesk.voice.preamble";
      event_id: string;
      text: string;
      elapsedMs: number;
    }
  | {
      type: "input_audio_buffer.speech_started";
      event_id?: string;
      audio_start_ms?: number;
      item_id?: string;
    }
  | {
      type: "input_audio_buffer.speech_stopped";
      event_id?: string;
      audio_end_ms?: number;
      item_id?: string;
    }
  | {
      type: "input_audio_transcription.completed";
      event_id: string;
      text: string;
      item_id?: string;
      startedAtMs?: number;
      endedAtMs?: number;
      transcriptionSource?: string;
      metadata?: Record<string, unknown>;
    }
  | {
      type: "response.output_audio.delta";
      event_id?: string;
      response_id?: string;
      item_id?: string;
      output_index?: number;
      content_index?: number;
      delta: string;
    }
  | {
      type: "response.output_audio.done";
      event_id?: string;
      response_id?: string;
      item_id?: string;
      output_index?: number;
      content_index?: number;
    }
  | {
      type: "response.output_audio_transcript.delta";
      event_id?: string;
      response_id?: string;
      item_id?: string;
      output_index?: number;
      content_index?: number;
      delta: string;
    }
  | {
      type: "response.output_audio_transcript.done";
      event_id?: string;
      response_id?: string;
      item_id?: string;
      output_index?: number;
      content_index?: number;
      transcript: string;
    }
  | {
      type: "response.done";
      event_id?: string;
      response?: unknown;
    }
  | {
      type: "error";
      event_id?: string;
      error: {
        code: string;
        message: string;
        retryable?: boolean;
        details?: unknown;
      };
    };

export type VoiceProviderEvent =
  | {
      kind: "input_transcript.completed";
      text: string;
      itemId?: string;
      startedAtMs?: number;
      endedAtMs?: number;
      transcriptionSource?: string;
      metadata?: Record<string, unknown>;
    }
  | {
      kind: "server_event";
      event: VoiceBrowserServerEvent;
    }
  | {
      kind: "runtime_events";
      events: RuntimeEvent[];
    }
  | {
      kind: "error";
      code?: string;
      message: string;
      retryable?: boolean;
      details?: unknown;
    };

type VoiceInputTranscriptEvent = Extract<VoiceProviderEvent, { kind: "input_transcript.completed" }>;

export interface VoiceProviderConnectInput {
  session: VoiceSocketSession;
  profile?: VoiceProfile;
  control?: VoiceControlSurface;
  signal: AbortSignal;
  onEvent(event: VoiceProviderEvent): Promise<void> | void;
}

export interface VoiceProviderSession {
  send(event: VoiceBrowserClientEvent): Promise<void> | void;
  speak(input: { text: string; result?: HandleVoiceUserMessageResult }): Promise<void> | void;
  preamble?(input: { text: string }): Promise<void> | void;
  close(): Promise<void> | void;
}

export interface VoiceProvider {
  readonly id: string;
  connect(input: VoiceProviderConnectInput): Promise<VoiceProviderSession>;
}

export interface VoiceControlTool {
  name: string;
  description?: string;
  parameters?: unknown;
}

export interface VoiceControlToolCall {
  session: VoiceSocketSession;
  name: string;
  arguments: unknown;
  callId: string;
  itemId?: string;
  responseId?: string;
  signal: AbortSignal;
  notify?(notification: VoiceControlNotification): Promise<void>;
}

export interface VoiceControlToolResult {
  output: unknown;
  events?: RuntimeEvent[];
}

export interface VoiceControlNotification {
  message: string;
  events?: RuntimeEvent[];
  responseInstructions?: string;
  createResponse?: boolean;
}

export interface VoiceControlSurface {
  tools: VoiceControlTool[];
  instructions?: string;
  createSessionInstructions?(input: { session: VoiceSocketSession }): Promise<string> | string;
  handleToolCall(input: VoiceControlToolCall): Promise<VoiceControlToolResult> | VoiceControlToolResult;
}

export interface VoiceSocketLike {
  send(data: string): void;
  close(code?: number, reason?: string): void;
  on(event: "message", listener: (data: string | ArrayBuffer | Uint8Array) => void): void;
  on(event: "close", listener: (code?: number, reason?: string) => void): void;
  on(event: "error", listener: (error: unknown) => void): void;
}

export interface VoiceRecorder {
  onAudio?(input: {
    session: VoiceSocketSession;
    speaker: "user" | "assistant";
    audio: string;
    sequence?: number;
  }): Promise<void> | void;
  onTranscript?(input: {
    session: VoiceSocketSession;
    speaker: "user" | "assistant";
    text: string;
    runtimeEvent?: RuntimeEvent;
  }): Promise<void> | void;
}

export interface VoiceSocketSession {
  id: string;
  conversation: StartVoiceResult["conversation"];
  channelSegment: StartVoiceResult["channelSegment"];
  connection: StartVoiceResult["connection"];
  events: RuntimeEvent[];
  createdAt: string;
  updatedAt: string;
  status: "pending" | "connected" | "reconnecting" | "ended";
  lastAckSequence: number;
  reconnectGraceUntil?: string;
}

export interface VoiceSocketToken {
  token: string;
  connectionId: string;
  sessionId: string;
  purpose: "start" | "reconnect";
  expiresAt: string;
  consumedAt?: string;
}

export interface VoiceSessionStore {
  createSession(input: {
    result: StartVoiceResult;
    tokenTtlMs: number;
    now?: Date;
  }): Promise<{ session: VoiceSocketSession; socket: VoiceSocketMetadata }>;
  claimToken(input: {
    connectionId: string;
    token: string;
    now?: Date;
  }): Promise<{ session: VoiceSocketSession; token: VoiceSocketToken; reconnect: boolean } | null>;
  issueReconnectToken(input: {
    sessionId: string;
    ttlMs: number;
    now?: Date;
  }): Promise<VoiceSocketToken>;
  acknowledgeAudio(input: {
    sessionId: string;
    sequence: number;
    now?: Date;
  }): Promise<VoiceSocketSession>;
  markConnected(sessionId: string, now?: Date): Promise<VoiceSocketSession>;
  markReconnecting(sessionId: string, now?: Date, graceMs?: number): Promise<VoiceSocketSession>;
  markEnded(sessionId: string, now?: Date): Promise<VoiceSocketSession>;
  getSession(sessionId: string): Promise<VoiceSocketSession | null>;
}

export interface InMemoryVoiceSessionStoreOptions {
  createToken?: () => string;
}

export function createInMemoryVoiceSessionStore(
  options: InMemoryVoiceSessionStoreOptions = {},
): VoiceSessionStore {
  const sessions = new Map<string, VoiceSocketSession>();
  const tokens = new Map<string, VoiceSocketToken>();
  const createToken = options.createToken ?? (() => createId("voice_socket_token"));

  return {
    async createSession(input) {
      const now = input.now ?? new Date();
      const result = input.result;
      const session: VoiceSocketSession = {
        id: result.connection.id,
        conversation: result.conversation,
        channelSegment: result.channelSegment,
        connection: result.connection,
        events: result.events,
        createdAt: now.toISOString(),
        updatedAt: now.toISOString(),
        status: "pending",
        lastAckSequence: 0,
      };
      sessions.set(session.id, session);
      const token = createTokenRecord({
        createToken,
        connectionId: session.connection.id,
        sessionId: session.id,
        purpose: "start",
        ttlMs: input.tokenTtlMs,
        now,
      });
      tokens.set(token.token, token);
      return {
        session,
        socket: {
          url: "",
          token: token.token,
          expiresAt: token.expiresAt,
          protocol: COGNIDESK_VOICE_PROTOCOL,
        },
      };
    },

    async claimToken(input) {
      const now = input.now ?? new Date();
      const token = tokens.get(input.token);
      if (!token) return null;
      if (token.connectionId !== input.connectionId) return null;
      if (token.consumedAt) return null;
      if (Date.parse(token.expiresAt) <= now.getTime()) return null;
      const session = sessions.get(token.sessionId);
      if (!session || session.status === "ended") return null;
      token.consumedAt = now.toISOString();
      tokens.set(token.token, token);
      return {
        session,
        token,
        reconnect: token.purpose === "reconnect",
      };
    },

    async issueReconnectToken(input) {
      const session = sessions.get(input.sessionId);
      if (!session) throw new Error(`Voice session '${input.sessionId}' was not found.`);
      const token = createTokenRecord({
        createToken,
        connectionId: session.connection.id,
        sessionId: session.id,
        purpose: "reconnect",
        ttlMs: input.ttlMs,
        now: input.now ?? new Date(),
      });
      tokens.set(token.token, token);
      return token;
    },

    async acknowledgeAudio(input) {
      const session = requireSession(sessions, input.sessionId);
      if (input.sequence > session.lastAckSequence) {
        session.lastAckSequence = input.sequence;
        session.updatedAt = (input.now ?? new Date()).toISOString();
        sessions.set(session.id, session);
      }
      return session;
    },

    async markConnected(sessionId, now = new Date()) {
      const session = requireSession(sessions, sessionId);
      session.status = "connected";
      session.updatedAt = now.toISOString();
      delete session.reconnectGraceUntil;
      sessions.set(session.id, session);
      return session;
    },

    async markReconnecting(sessionId, now = new Date(), graceMs = 30_000) {
      const session = requireSession(sessions, sessionId);
      session.status = "reconnecting";
      session.updatedAt = now.toISOString();
      session.reconnectGraceUntil = new Date(now.getTime() + graceMs).toISOString();
      sessions.set(session.id, session);
      return session;
    },

    async markEnded(sessionId, now = new Date()) {
      const session = requireSession(sessions, sessionId);
      session.status = "ended";
      session.updatedAt = now.toISOString();
      sessions.set(session.id, session);
      return session;
    },

    async getSession(sessionId) {
      return sessions.get(sessionId) ?? null;
    },
  };
}

export interface VoiceSocketHandshakeOptions {
  store: VoiceSessionStore;
  tokenTtlMs?: number;
  pathPrefix?: string;
  baseUrl?: string;
}

export function createVoiceSocketHandshake(options: VoiceSocketHandshakeOptions) {
  const tokenTtlMs = options.tokenTtlMs ?? 60_000;
  const pathPrefix = normalizePathPrefix(options.pathPrefix ?? "/voice/connections");

  return {
    async createSocket(input: {
      result: StartVoiceResult;
      request: Request;
      basePath: string;
    }): Promise<VoiceSocketMetadata> {
      const created = await options.store.createSession({
        result: input.result,
        tokenTtlMs,
      });
      return {
        ...created.socket,
        url: buildSocketUrl({
          requestUrl: input.request.url,
          basePath: input.basePath,
          pathPrefix,
          connectionId: input.result.connection.id,
          token: created.socket.token,
          ...(options.baseUrl ? { baseUrl: options.baseUrl } : {}),
        }),
      };
    },
  };
}

export interface VoiceRuntime {
  handleVoiceUserMessage<TTurn = unknown>(
    input: HandleVoiceUserMessageInput<TTurn>,
  ): Promise<HandleVoiceUserMessageResult>;
  commitVoiceTranscript?(input: {
    conversationId: string;
    channelSegmentId: string;
    speaker: "user" | "assistant";
    text: string;
    recordingReferenceId?: string;
    startedAtMs?: number;
    endedAtMs?: number;
    transcriptionSource?: string;
    metadata?: Record<string, unknown>;
  }): Promise<{ events: RuntimeEvent[]; event: RuntimeEvent; message: RuntimeEvent }>;
  recordVoiceInterruption(input: {
    conversationId: string;
    channelSegmentId: string;
    connectionId?: string;
    interruptedMessageId?: string;
    source?: "userSpeech" | "adapter" | "provider";
    reason?: string;
    recordingReferenceId?: string;
    offsetMs?: number;
  }): Promise<RuntimeEvent>;
  endVoiceSegment(input: {
    conversationId: string;
    channelSegmentId: string;
    connectionId?: string;
    reason?: string;
  }): Promise<RuntimeEvent>;
}

export interface HandleVoiceSocketOptions {
  socket: VoiceSocketLike;
  connectionId: string;
  token: string;
  store: VoiceSessionStore;
  runtime: VoiceRuntime;
  provider: VoiceProvider;
  control?: VoiceControlSurface;
  profile?: VoiceProfile;
  recorder?: VoiceRecorder;
  initialGreeting?: string;
  reconnectTokenTtlMs?: number;
  reconnectGraceMs?: number;
  inputTranscriptDebounceMs?: number;
  turnPreambleMs?: number;
  signal?: AbortSignal;
}

export async function handleVoiceSocket(options: HandleVoiceSocketOptions): Promise<void> {
  const claimed = await options.store.claimToken({
    connectionId: options.connectionId,
    token: options.token,
  });
  if (!claimed) {
    send(options.socket, {
      type: "error",
      event_id: createId("voice_event"),
      error: {
        code: "invalid_voice_socket_token",
        message: "Voice socket token is invalid, expired, or already used.",
      },
    });
    options.socket.close(4401, "Invalid voice socket token");
    return;
  }

  const controller = new AbortController();
  const abort = () => controller.abort();
  options.signal?.addEventListener("abort", abort, { once: true });
  const session = await options.store.markConnected(claimed.session.id);
  let providerSession: VoiceProviderSession | null = null;
  let closed = false;
  const inputTranscriptDebounceMs = Math.max(0, options.inputTranscriptDebounceMs ?? 350);
  const turnPreambleMs = Math.max(0, options.turnPreambleMs ?? 1_200);
  const useRealtimeControl = Boolean(options.control);
  let pendingInputTranscript: VoiceInputTranscriptEvent | null = null;
  let pendingInputTranscriptTimer: ReturnType<typeof setTimeout> | null = null;
  let turnPreambleTimer: ReturnType<typeof setTimeout> | null = null;
  let inputTranscriptQueue = Promise.resolve();
  let speechQueue = Promise.resolve();
  let speechGeneration = 0;

  const sendRuntimeEvents = (events: RuntimeEvent[]) => {
    for (const event of events) {
      send(options.socket, {
        type: "cognidesk.runtime_event",
        event_id: createId("voice_event"),
        event,
      });
    }
  };

  const issueReconnect = async () => {
    const token = await options.store.issueReconnectToken({
      sessionId: session.id,
      ttlMs: options.reconnectTokenTtlMs ?? 30_000,
    });
    send(options.socket, {
      type: "cognidesk.connection.reconnect_token",
      event_id: createId("voice_event"),
      token: token.token,
      expiresAt: token.expiresAt,
    });
  };

  const clearTurnPreambleTimer = () => {
    if (!turnPreambleTimer) return;
    clearTimeout(turnPreambleTimer);
    turnPreambleTimer = null;
  };

  const queueSpeechAction = (
    generation: number,
    action: () => Promise<void> | void,
  ) => {
    const queued = speechQueue.catch(() => undefined).then(async () => {
      if (closed || generation !== speechGeneration) return;
      await action();
    });
    speechQueue = queued.catch((error) => {
      send(options.socket, {
        type: "error",
        event_id: createId("voice_event"),
        error: {
          code: "voice_speech_failed",
          message: error instanceof Error ? error.message : "Failed to queue voice speech.",
        },
      });
    });
  };

  const startTurnPreambleTimer = (text: string, generation: number) => {
    clearTurnPreambleTimer();
    if (!providerSession?.preamble) return;
    if (turnPreambleMs === 0) return;
    turnPreambleTimer = setTimeout(() => {
      turnPreambleTimer = null;
      queueSpeechAction(generation, () => providerSession?.preamble?.({ text }));
    }, turnPreambleMs);
  };

  const handleProviderEvent = async (event: VoiceProviderEvent) => {
    if (event.kind === "runtime_events") {
      sendRuntimeEvents(event.events);
      return;
    }
    if (event.kind === "server_event") {
      if (isAgentResponseSignal(event.event)) clearTurnPreambleTimer();
      send(options.socket, event.event);
      if (event.event.type === "response.output_audio.delta") {
        await options.recorder?.onAudio?.({
          session,
          speaker: "assistant",
          audio: event.event.delta,
        });
      }
      if (useRealtimeControl && event.event.type === "response.output_audio_transcript.done") {
        await commitControlAssistantTranscript(event.event.transcript, "openai-realtime");
      }
      return;
    }
    if (event.kind === "error") {
      send(options.socket, {
        type: "error",
        event_id: createId("voice_event"),
        error: {
          code: event.code ?? "voice_provider_error",
          message: event.message,
          ...(event.retryable !== undefined ? { retryable: event.retryable } : {}),
          ...(event.details !== undefined ? { details: event.details } : {}),
        },
      });
      return;
    }
    scheduleInputTranscript(event);
  };

  const scheduleInputTranscript = (event: VoiceInputTranscriptEvent) => {
    const text = event.text.trim();
    if (!text) return;
    sendInputTranscriptCompleted(event, text);
    pendingInputTranscript = mergeInputTranscript(
      pendingInputTranscript,
      {
        ...event,
        text,
      },
    );
    if (pendingInputTranscriptTimer) clearTimeout(pendingInputTranscriptTimer);
    if (inputTranscriptDebounceMs === 0) {
      const transcript = pendingInputTranscript;
      pendingInputTranscript = null;
      if (transcript) queueInputTranscript(transcript);
      return;
    }
    const waitMs = debounceMsForTranscript(pendingInputTranscript.text, inputTranscriptDebounceMs);
    pendingInputTranscriptTimer = setTimeout(() => {
      const transcript = pendingInputTranscript;
      pendingInputTranscript = null;
      pendingInputTranscriptTimer = null;
      if (transcript) queueInputTranscript(transcript);
    }, waitMs);
  };

  const sendInputTranscriptCompleted = (event: VoiceInputTranscriptEvent, text: string) => {
    send(options.socket, {
      type: "input_audio_transcription.completed",
      event_id: createId("voice_event"),
      text,
      ...optionalStringField("item_id", event.itemId),
      ...optionalNumberField("startedAtMs", event.startedAtMs),
      ...optionalNumberField("endedAtMs", event.endedAtMs),
      ...optionalStringField("transcriptionSource", event.transcriptionSource),
      ...(event.metadata !== undefined ? { metadata: event.metadata } : {}),
    });
  };

  const queueInputTranscript = (event: VoiceInputTranscriptEvent) => {
    inputTranscriptQueue = inputTranscriptQueue
      .then(() => useRealtimeControl ? commitControlInputTranscript(event) : commitInputTranscript(event))
      .catch((error) => {
        send(options.socket, {
          type: "error",
          event_id: createId("voice_event"),
          error: {
            code: "voice_transcript_commit_failed",
            message: error instanceof Error ? error.message : "Failed to commit voice transcript.",
          },
        });
      });
  };

  const flushPendingInputTranscript = async () => {
    if (pendingInputTranscriptTimer) {
      clearTimeout(pendingInputTranscriptTimer);
      pendingInputTranscriptTimer = null;
    }
    const transcript = pendingInputTranscript;
    pendingInputTranscript = null;
    if (transcript) queueInputTranscript(transcript);
    await inputTranscriptQueue;
  };

  const commitControlInputTranscript = async (event: VoiceInputTranscriptEvent) => {
    if (!options.runtime.commitVoiceTranscript) return;
    const committed = await options.runtime.commitVoiceTranscript({
      conversationId: session.conversation.id,
      channelSegmentId: session.channelSegment.id,
      speaker: "user",
      text: event.text,
      transcriptionSource: event.transcriptionSource ?? "provider",
      ...optionalNumberField("startedAtMs", event.startedAtMs),
      ...optionalNumberField("endedAtMs", event.endedAtMs),
      ...(event.metadata !== undefined ? { metadata: event.metadata } : {}),
    });
    sendRuntimeEvents(committed.events);
    await options.recorder?.onTranscript?.({
      session,
      speaker: "user",
      text: event.text,
      runtimeEvent: committed.event,
    });
  };

  const commitControlAssistantTranscript = async (text: string | undefined, transcriptionSource: string) => {
    const normalized = normalizeSpeechText(text ?? "");
    if (!normalized || !options.runtime.commitVoiceTranscript) return;
    await flushPendingInputTranscript();
    const committed = await options.runtime.commitVoiceTranscript({
      conversationId: session.conversation.id,
      channelSegmentId: session.channelSegment.id,
      speaker: "assistant",
      text: normalized,
      transcriptionSource,
    });
    sendRuntimeEvents(committed.events);
    await options.recorder?.onTranscript?.({
      session,
      speaker: "assistant",
      text: normalized,
      runtimeEvent: committed.event,
    });
    send(options.socket, {
      type: "cognidesk.turn.completed",
      event_id: createId("voice_event"),
      text: normalized,
    });
  };

  const controlSurface = options.control
    ? {
        ...options.control,
        handleToolCall: async (call: VoiceControlToolCall) => {
          await flushPendingInputTranscript();
          return options.control!.handleToolCall(call);
        },
      }
    : undefined;

  const commitInputTranscript = async (event: VoiceInputTranscriptEvent) => {
    const generation = ++speechGeneration;
    let assistantSpeechBuffer = "";
    let assistantSpeechQueued = false;
    const queueAssistantSpeech = (text: string, result?: HandleVoiceUserMessageResult) => {
      const normalized = normalizeSpeechText(text);
      if (!normalized) return;
      clearTurnPreambleTimer();
      assistantSpeechQueued = true;
      queueSpeechAction(generation, () => providerSession?.speak({ text: normalized, ...(result ? { result } : {}) }));
    };
    const flushAssistantSpeech = (force: boolean) => {
      while (true) {
        const chunk = takeSpeakablePrefix(assistantSpeechBuffer, force);
        if (!chunk) return;
        assistantSpeechBuffer = assistantSpeechBuffer.slice(chunk.consumed).trimStart();
        queueAssistantSpeech(chunk.text);
        if (!force) return;
      }
    };
    startTurnPreambleTimer(event.text, generation);
    const result = await options.runtime.handleVoiceUserMessage({
      conversationId: session.conversation.id,
      channelSegmentId: session.channelSegment.id,
      connectionId: session.connection.id,
      text: event.text,
      transcriptionSource: event.transcriptionSource ?? "provider",
      ...optionalNumberField("startedAtMs", event.startedAtMs),
      ...optionalNumberField("endedAtMs", event.endedAtMs),
      ...(event.metadata !== undefined ? { metadata: event.metadata } : {}),
      onAssistantTextDelta: (textDelta) => {
        assistantSpeechBuffer += textDelta;
        flushAssistantSpeech(false);
      },
    });
    clearTurnPreambleTimer();
    flushAssistantSpeech(true);
    if (!assistantSpeechQueued) {
      queueAssistantSpeech(result.text, result);
    }
    sendRuntimeEvents(result.events);
    const userRuntimeEvent = result.voiceEvents.find((candidate) =>
      candidate.type === "voice.transcript.committed" && candidate.data.speaker === "user"
    );
    await options.recorder?.onTranscript?.({
      session,
      speaker: "user",
      text: event.text,
      ...(userRuntimeEvent ? { runtimeEvent: userRuntimeEvent } : {}),
    });
    const assistantRuntimeEvent = result.voiceEvents.find((candidate) =>
      candidate.type === "voice.transcript.committed" && candidate.data.speaker === "assistant"
    );
    await options.recorder?.onTranscript?.({
      session,
      speaker: "assistant",
      text: result.text,
      ...(assistantRuntimeEvent ? { runtimeEvent: assistantRuntimeEvent } : {}),
    });
    send(options.socket, {
      type: "cognidesk.turn.completed",
      event_id: createId("voice_event"),
      text: result.text,
      ...(result.activeJourneyId ? { activeJourneyId: result.activeJourneyId } : {}),
    });
  };

  try {
    const controlInstructions = await options.control?.createSessionInstructions?.({ session });
    providerSession = await options.provider.connect({
      session,
      ...(options.profile ? { profile: options.profile } : {}),
      ...(controlSurface ? {
        control: {
          ...controlSurface,
          instructions: [
            controlSurface.instructions,
            controlInstructions,
          ].filter(Boolean).join("\n\n"),
        },
      } : {}),
      signal: controller.signal,
      onEvent: handleProviderEvent,
    });
  } catch (error) {
    send(options.socket, {
      type: "error",
      event_id: createId("voice_event"),
      error: {
        code: "voice_provider_connect_failed",
        message: error instanceof Error ? error.message : "Voice provider connection failed.",
      },
    });
    options.socket.close(1011, "Voice provider connection failed");
    return;
  }

  send(options.socket, {
    type: "cognidesk.connection.ready",
    event_id: createId("voice_event"),
    protocol: COGNIDESK_VOICE_PROTOCOL,
    conversation: session.conversation,
    channelSegment: session.channelSegment,
    connection: session.connection,
    lastAckSequence: session.lastAckSequence,
  });
  await issueReconnect();
  if (options.initialGreeting?.trim()) {
    queueSpeechAction(speechGeneration, () => providerSession?.speak({ text: options.initialGreeting!.trim() }));
  }

  options.socket.on("message", (data) => {
    void handleClientMessage(String(data)).catch((error) => {
      send(options.socket, {
        type: "error",
        event_id: createId("voice_event"),
        error: {
          code: "voice_socket_message_failed",
          message: error instanceof Error ? error.message : "Failed to handle voice socket message.",
        },
      });
    });
  });

  options.socket.on("error", (error) => {
    send(options.socket, {
      type: "error",
      event_id: createId("voice_event"),
      error: {
        code: "voice_socket_error",
        message: error instanceof Error ? error.message : "Voice socket error.",
      },
    });
  });

  options.socket.on("close", (code) => {
    if (closed) return;
    closed = true;
    speechGeneration++;
    if (pendingInputTranscriptTimer) clearTimeout(pendingInputTranscriptTimer);
    clearTurnPreambleTimer();
    pendingInputTranscript = null;
    controller.abort();
    options.signal?.removeEventListener("abort", abort);
    void providerSession?.close();
    const normalClose = code === undefined || code === 1000 || code === 1001;
    if (normalClose) {
      void options.store.markEnded(session.id).then(() =>
        options.runtime.endVoiceSegment({
          conversationId: session.conversation.id,
          channelSegmentId: session.channelSegment.id,
          connectionId: session.connection.id,
          reason: "socket_closed",
        })
      );
    } else {
      void options.store.markReconnecting(
        session.id,
        new Date(),
        options.reconnectGraceMs ?? 30_000,
      );
    }
  });

  async function handleClientMessage(raw: string) {
    const event = parseClientEvent(raw);
    if (event.type === "input_audio_buffer.append") {
      assertBase64Audio(event.audio);
      const sequence = event.sequence;
      const previousAckSequence = session.lastAckSequence;
      if (sequence !== undefined) {
        await options.store.acknowledgeAudio({ sessionId: session.id, sequence });
        send(options.socket, {
          type: "cognidesk.audio.ack",
          event_id: createId("voice_event"),
          sequence,
        });
      }
      await options.recorder?.onAudio?.({
        session,
        speaker: "user",
        audio: event.audio,
        ...(sequence !== undefined ? { sequence } : {}),
      });
      if (sequence === undefined || sequence > previousAckSequence) {
        await providerSession?.send(event);
      }
      return;
    }
    if (event.type === "response.cancel") {
      speechGeneration++;
      clearTurnPreambleTimer();
      await providerSession?.send(event);
      const interruption = await options.runtime.recordVoiceInterruption({
        conversationId: session.conversation.id,
        channelSegmentId: session.channelSegment.id,
        connectionId: session.connection.id,
        source: "userSpeech",
        reason: event.reason ?? "client_cancelled_response",
        ...optionalStringField("interruptedMessageId", event.interruptedMessageId),
        ...optionalNumberField("offsetMs", event.playedUntilMs ?? event.audioEndMs),
      });
      send(options.socket, {
        type: "cognidesk.interruption.recorded",
        event_id: createId("voice_event"),
        event: interruption,
      });
      sendRuntimeEvents([interruption]);
      return;
    }
    await providerSession?.send(event);
  }
}

export interface AttachNodeVoiceWebSocketAdapterOptions {
  server: HttpServer;
  store: VoiceSessionStore;
  runtime: VoiceRuntime;
  provider: VoiceProvider;
  control?: VoiceControlSurface;
  profile?: VoiceProfile;
  recorder?: VoiceRecorder;
  pathPrefix?: string;
  initialGreeting?: string;
  reconnectTokenTtlMs?: number;
  reconnectGraceMs?: number;
  turnPreambleMs?: number;
}

export function attachNodeVoiceWebSocketAdapter(options: AttachNodeVoiceWebSocketAdapterOptions) {
  const pathPrefix = normalizePathPrefix(options.pathPrefix ?? "/voice/connections");
  const webSocketServer = new WebSocketServer({ noServer: true });

  const upgradeListener = (request: IncomingMessage, socket: Duplex, head: Buffer) => {
    const parsed = parseVoiceSocketRequest(request, pathPrefix);
    if (!parsed) return;
    webSocketServer.handleUpgrade(request, socket, head, (webSocket) => {
      webSocketServer.emit("connection", webSocket, request, parsed);
    });
  };

  options.server.on("upgrade", upgradeListener);
  webSocketServer.on("connection", (webSocket: WebSocket, _request: IncomingMessage, parsed: VoiceSocketRequest) => {
    void handleVoiceSocket({
      socket: adaptNodeWebSocket(webSocket),
      connectionId: parsed.connectionId,
      token: parsed.token,
      store: options.store,
      runtime: options.runtime,
      provider: options.provider,
      ...(options.control ? { control: options.control } : {}),
      ...(options.profile ? { profile: options.profile } : {}),
      ...(options.recorder ? { recorder: options.recorder } : {}),
      ...(options.initialGreeting !== undefined ? { initialGreeting: options.initialGreeting } : {}),
      ...(options.reconnectTokenTtlMs !== undefined ? { reconnectTokenTtlMs: options.reconnectTokenTtlMs } : {}),
      ...(options.reconnectGraceMs !== undefined ? { reconnectGraceMs: options.reconnectGraceMs } : {}),
      ...(options.turnPreambleMs !== undefined ? { turnPreambleMs: options.turnPreambleMs } : {}),
    });
  });

  return {
    close() {
      options.server.off("upgrade", upgradeListener);
      webSocketServer.close();
    },
    webSocketServer,
  };
}

interface VoiceSocketRequest {
  connectionId: string;
  token: string;
}

function parseVoiceSocketRequest(request: IncomingMessage, pathPrefix: string): VoiceSocketRequest | null {
  if (!request.url) return null;
  const url = new URL(request.url, "http://localhost");
  const expectedPrefix = `${pathPrefix}/`;
  if (!url.pathname.startsWith(expectedPrefix) || !url.pathname.endsWith("/socket")) return null;
  const connectionId = decodeURIComponent(url.pathname.slice(expectedPrefix.length, -"/socket".length));
  if (!connectionId) return null;
  const token = url.searchParams.get("token") ?? parseTokenFromProtocol(request.headers["sec-websocket-protocol"]);
  if (!token) return null;
  return { connectionId, token };
}

function adaptNodeWebSocket(socket: WebSocket): VoiceSocketLike {
  return {
    send(data) {
      socket.send(data);
    },
    close(code, reason) {
      socket.close(code, reason);
    },
    on(event, listener) {
      if (event === "message") {
        socket.on("message", (data: RawData) => {
          (listener as (data: string) => void)(rawDataToString(data));
        });
        return;
      }
      if (event === "close") {
        socket.on("close", (code, reason) => {
          (listener as (code?: number, reason?: string) => void)(code, reason.toString("utf8"));
        });
        return;
      }
      socket.on("error", listener);
    },
  };
}

function parseClientEvent(raw: string): VoiceBrowserClientEvent {
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
      return { type, ...optionalEventId(parsed), ...(isRecord(parsed.session) ? { session: parsed.session } : {}) };
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

function buildSocketUrl(input: {
  requestUrl: string;
  baseUrl?: string;
  basePath: string;
  pathPrefix: string;
  connectionId: string;
  token: string;
}) {
  const requestUrl = new URL(input.requestUrl);
  const base = input.baseUrl ? new URL(input.baseUrl) : requestUrl;
  const protocol = base.protocol === "https:" ? "wss:" : "ws:";
  const url = new URL(`${input.basePath}${input.pathPrefix}/${encodeURIComponent(input.connectionId)}/socket`, base);
  url.protocol = protocol;
  url.searchParams.set("token", input.token);
  return url.toString();
}

function normalizePathPrefix(path: string) {
  const withSlash = path.startsWith("/") ? path : `/${path}`;
  return withSlash.endsWith("/") ? withSlash.slice(0, -1) : withSlash;
}

function createTokenRecord(input: {
  createToken: () => string;
  connectionId: string;
  sessionId: string;
  purpose: "start" | "reconnect";
  ttlMs: number;
  now: Date;
}): VoiceSocketToken {
  return {
    token: input.createToken(),
    connectionId: input.connectionId,
    sessionId: input.sessionId,
    purpose: input.purpose,
    expiresAt: new Date(input.now.getTime() + input.ttlMs).toISOString(),
  };
}

function requireSession(sessions: Map<string, VoiceSocketSession>, sessionId: string) {
  const session = sessions.get(sessionId);
  if (!session) throw new Error(`Voice session '${sessionId}' was not found.`);
  return session;
}

function send(socket: VoiceSocketLike, event: VoiceBrowserServerEvent) {
  socket.send(JSON.stringify(event));
}

function mergeInputTranscript(
  current: VoiceInputTranscriptEvent | null,
  next: VoiceInputTranscriptEvent,
): VoiceInputTranscriptEvent {
  if (!current) return next;
  const merged: VoiceInputTranscriptEvent = {
    kind: "input_transcript.completed",
    text: `${current.text} ${next.text}`.trim(),
  };
  const itemId = next.itemId ?? current.itemId;
  if (itemId) merged.itemId = itemId;
  const startedAtMs = current.startedAtMs ?? next.startedAtMs;
  if (startedAtMs !== undefined) merged.startedAtMs = startedAtMs;
  const endedAtMs = next.endedAtMs ?? current.endedAtMs;
  if (endedAtMs !== undefined) merged.endedAtMs = endedAtMs;
  const transcriptionSource = next.transcriptionSource ?? current.transcriptionSource;
  if (transcriptionSource) merged.transcriptionSource = transcriptionSource;
  const metadata = {
    ...(current.metadata ?? {}),
    ...(next.metadata ?? {}),
  };
  if (Object.keys(metadata).length > 0) merged.metadata = metadata;
  return merged;
}

function isAgentResponseSignal(event: VoiceBrowserServerEvent) {
  return event.type === "response.output_audio.delta"
    || event.type === "response.output_audio_transcript.delta"
    || event.type === "response.output_audio_transcript.done"
    || event.type === "response.done";
}

function takeSpeakablePrefix(text: string, force: boolean): { text: string; consumed: number } | null {
  if (!text.trim()) return null;
  if (force) return { text: normalizeSpeechText(text), consumed: text.length };
  const sentenceBoundary = findLastSentenceBoundary(text);
  if (sentenceBoundary > 0) {
    return {
      text: normalizeSpeechText(text.slice(0, sentenceBoundary)),
      consumed: sentenceBoundary,
    };
  }
  if (text.length < 180) return null;
  const softBoundary = findSoftBoundary(text, 140);
  if (softBoundary <= 0) return null;
  return {
    text: normalizeSpeechText(text.slice(0, softBoundary)),
    consumed: softBoundary,
  };
}

function findLastSentenceBoundary(text: string) {
  let boundary = -1;
  const pattern = /[.!?。！？](?:["')\]]+)?\s+/g;
  let match: RegExpExecArray | null;
  while ((match = pattern.exec(text)) !== null) {
    boundary = match.index + match[0].length;
  }
  return boundary;
}

function findSoftBoundary(text: string, minIndex: number) {
  const candidates = [", ", "; ", ": ", "\n", " "];
  for (const candidate of candidates) {
    const boundary = text.lastIndexOf(candidate);
    if (boundary >= minIndex) return boundary + candidate.length;
  }
  return -1;
}

function normalizeSpeechText(text: string) {
  return text.replace(/\s+/g, " ").trim();
}

function debounceMsForTranscript(text: string, baseMs: number) {
  const wordCount = text.trim().split(" ").filter(Boolean).length;
  return wordCount <= 2 ? Math.max(baseMs, 900) : baseMs;
}

function rawDataToString(data: RawData) {
  if (typeof data === "string") return data;
  if (Buffer.isBuffer(data)) return data.toString("utf8");
  if (Array.isArray(data)) return Buffer.concat(data).toString("utf8");
  return Buffer.from(data).toString("utf8");
}

function parseTokenFromProtocol(value: string | string[] | undefined) {
  const raw = Array.isArray(value) ? value.join(",") : value;
  if (!raw) return undefined;
  const protocols = raw.split(",").map((candidate) => candidate.trim()).filter(Boolean);
  const bearer = protocols.find((candidate) => candidate.startsWith("cognidesk.voice.token."));
  return bearer?.slice("cognidesk.voice.token.".length);
}

function assertBase64Audio(value: string) {
  if (value.length === 0) throw new Error("audio must not be empty.");
  if (!/^[A-Za-z0-9+/]+={0,2}$/.test(value)) throw new Error("audio must be base64 encoded.");
}

function optionalEventId(value: Record<string, unknown>) {
  return optionalStringField("event_id", optionalString(value, "event_id"));
}

function requiredString(value: Record<string, unknown>, key: string) {
  const result = optionalString(value, key);
  if (!result) throw new Error(`${key} must be a non-empty string.`);
  return result;
}

function optionalString(value: Record<string, unknown>, key: string) {
  const candidate = value[key];
  if (candidate === undefined || candidate === null) return undefined;
  if (typeof candidate !== "string") throw new Error(`${key} must be a string.`);
  const trimmed = candidate.trim();
  return trimmed.length > 0 ? trimmed : undefined;
}

function optionalInteger(value: Record<string, unknown>, key: string) {
  const candidate = value[key];
  if (candidate === undefined || candidate === null) return undefined;
  if (typeof candidate !== "number" || !Number.isSafeInteger(candidate) || candidate < 0) {
    throw new Error(`${key} must be a non-negative integer.`);
  }
  return candidate;
}

function optionalStringField<TKey extends string>(key: TKey, value: string | undefined) {
  return value ? { [key]: value } as Record<TKey, string> : {};
}

function optionalNumberField<TKey extends string>(key: TKey, value: number | undefined) {
  return value !== undefined ? { [key]: value } as Record<TKey, number> : {};
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return Boolean(value && typeof value === "object" && !Array.isArray(value));
}

function createId(prefix: string) {
  const random = globalThis.crypto?.randomUUID?.()
    ?? Math.random().toString(36).slice(2);
  return `${prefix}_${random}`;
}
