import type {
  HandleVoiceUserMessageResult,
  RuntimeEvent,
  StartVoiceResult,
  VoiceProfile,
  VoiceSocketMetadata,
} from "@cognidesk/core";

export const COGNIDESK_VOICE_PROTOCOL = "cognidesk.voice.v1" as const;

export type VoiceProtocol = typeof COGNIDESK_VOICE_PROTOCOL;

export type VoiceJsonPrimitive = string | number | boolean | null;
export type VoiceJsonValue = VoiceJsonPrimitive | VoiceJsonObject | VoiceJsonValue[];
export type VoiceWebsocketJsonPrimitive = string | number | boolean | null;
export type VoiceWebsocketJsonValue =
  | VoiceWebsocketJsonPrimitive
  | VoiceWebsocketJsonObject
  | readonly VoiceWebsocketJsonValue[];
export type VoiceWebsocketProviderExtensionValue = VoiceWebsocketJsonValue | object | undefined;
export interface VoiceWebsocketJsonObject {
  [key: string]: VoiceWebsocketProviderExtensionValue;
}
export type VoiceWebsocketProviderPayload = VoiceWebsocketJsonObject | object;
export type VoiceWebsocketProviderQuery = Record<string, VoiceWebsocketProviderExtensionValue>;
export interface VoiceWebsocketProviderResponse extends VoiceWebsocketJsonObject {}
export interface VoiceWebsocketProviderExtensionFields extends VoiceWebsocketJsonObject {}

export interface VoiceJsonObject {
  [key: string]: VoiceJsonValue;
}

export type VoiceBrowserClientEvent =
  | {
      type: "session.update";
      event_id?: string;
      session?: VoiceJsonObject;
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
      metadata?: VoiceJsonObject;
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
      response?: VoiceJsonObject;
    }
  | {
      type: "error";
      event_id?: string;
      error: {
        code: string;
        message: string;
        retryable?: boolean;
        details?: VoiceJsonValue;
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
      metadata?: VoiceJsonObject;
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
      details?: VoiceJsonValue;
    };

export type VoiceInputTranscriptEvent = Extract<VoiceProviderEvent, { kind: "input_transcript.completed" }>;

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

export interface VoiceControlTool<TParameters extends VoiceJsonObject = VoiceJsonObject> {
  name: string;
  description?: string;
  parameters?: TParameters;
}

export interface VoiceControlToolCall<TArguments extends VoiceJsonValue = VoiceJsonValue> {
  session: VoiceSocketSession;
  name: string;
  arguments: TArguments;
  callId: string;
  itemId?: string;
  responseId?: string;
  signal: AbortSignal;
  notify?(notification: VoiceControlNotification): Promise<void>;
}

export interface VoiceControlToolResult<TOutput extends VoiceJsonValue = VoiceJsonValue> {
  output: TOutput;
  events?: RuntimeEvent[];
}

export interface VoiceControlNotification {
  message: string;
  events?: RuntimeEvent[];
  responseInstructions?: string;
  createResponse?: boolean;
}

export interface VoiceControlSurface<
  TArguments extends VoiceJsonValue = VoiceJsonValue,
  TOutput extends VoiceJsonValue = VoiceJsonValue,
> {
  tools: VoiceControlTool[];
  instructions?: string;
  createSessionInstructions?(input: { session: VoiceSocketSession }): Promise<string> | string;
  handleToolCall(input: VoiceControlToolCall<TArguments>): Promise<VoiceControlToolResult<TOutput>> | VoiceControlToolResult<TOutput>;
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
