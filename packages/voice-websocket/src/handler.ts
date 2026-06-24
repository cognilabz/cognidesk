import type {
  HandleVoiceUserMessageResult,
  RuntimeEvent,
} from "@cognidesk/core";
import { createId } from "./ids.js";
import {
  COGNIDESK_VOICE_PROTOCOL,
  type VoiceBrowserServerEvent,
  type VoiceControlToolCall,
  type VoiceInputTranscriptEvent,
  type VoiceProviderEvent,
  type VoiceProviderSession,
  type VoiceSocketLike,
} from "./protocol.js";
import type { HandleVoiceSocketOptions } from "./runtime.js";
import {
  debounceMsForTranscript,
  isAgentResponseSignal,
  mergeInputTranscript,
  normalizeSpeechText,
  takeSpeakablePrefix,
} from "./speech.js";
import {
  assertBase64Audio,
  optionalNumberField,
  optionalStringField,
  parseClientEvent,
} from "./wire.js";

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
  let initialGreetingTranscriptToSuppress: string | null = null;

  const cleanupConnection = () => {
    if (closed) return false;
    closed = true;
    speechGeneration++;
    if (pendingInputTranscriptTimer) clearTimeout(pendingInputTranscriptTimer);
    clearTurnPreambleTimer();
    pendingInputTranscript = null;
    controller.abort();
    options.signal?.removeEventListener("abort", abort);
    void providerSession?.close();
    return true;
  };

  const endSession = async (reason: string) => {
    await options.store.markEnded(session.id);
    await options.runtime.endVoiceSegment({
      conversationId: session.conversation.id,
      channelSegmentId: session.channelSegment.id,
      connectionId: session.connection.id,
      reason,
    });
  };

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

  const handleSocketClose = (code?: number) => {
    if (!cleanupConnection()) return;
    const normalClose = code === undefined || code === 1000 || code === 1001;
    if (normalClose) {
      void endSession("socket_closed");
    } else {
      void options.store.markReconnecting(
        session.id,
        new Date(),
        options.reconnectGraceMs ?? 30_000,
      );
    }
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
        if (shouldSuppressInitialGreetingTranscript(event.event.transcript)) return;
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

  options.socket.on("close", handleSocketClose);

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
    if (closed) {
      void providerSession.close();
      return;
    }
  } catch (error) {
    if (closed) return;
    cleanupConnection();
    await endSession("provider_connect_failed");
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
  const initialGreeting = normalizeSpeechText(session.initialGreeting ?? options.initialGreeting ?? "");
  if (initialGreeting) {
    initialGreetingTranscriptToSuppress = initialGreeting;
    queueSpeechAction(speechGeneration, () => providerSession?.speak({ text: initialGreeting }));
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

  function shouldSuppressInitialGreetingTranscript(text: string | undefined) {
    const expected = initialGreetingTranscriptToSuppress;
    if (!expected) return false;
    const normalized = normalizeSpeechText(text ?? "");
    if (normalized !== expected) return false;
    initialGreetingTranscriptToSuppress = null;
    return true;
  }
}

function send(socket: VoiceSocketLike, event: VoiceBrowserServerEvent) {
  socket.send(JSON.stringify(event));
}
