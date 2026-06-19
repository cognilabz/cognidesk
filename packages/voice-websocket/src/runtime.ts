import type {
  HandleVoiceUserMessageInput,
  HandleVoiceUserMessageResult,
  RuntimeEvent,
  VoiceProfile,
} from "@cognidesk/core";
import type {
  VoiceControlSurface,
  VoiceProvider,
  VoiceRecorder,
  VoiceSessionStore,
  VoiceSocketLike,
  VoiceWebsocketProviderExtensionFields,
} from "./protocol.js";

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
    metadata?: VoiceWebsocketProviderExtensionFields;
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
