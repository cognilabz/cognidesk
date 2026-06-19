import type { RuntimeEvent } from "@cognidesk/core";
import type { RealtimeClientEvent, RealtimeServerEvent } from "openai/resources/realtime/realtime";
import type { VoiceSocketSession } from "@cognidesk/voice-websocket";

export class FakeRealtimeSocket {
  sent: RealtimeClientEvent[] = [];
  private eventListeners: Array<(event: RealtimeServerEvent) => void> = [];
  private errorListeners: Array<(error: unknown) => void> = [];

  send(event: RealtimeClientEvent) {
    this.sent.push(event);
  }

  close() {
    return undefined;
  }

  on(event: "event" | "error", listener: ((event: RealtimeServerEvent) => void) | ((error: unknown) => void)) {
    if (event === "event") {
      this.eventListeners.push(listener as (event: RealtimeServerEvent) => void);
      return;
    }
    this.errorListeners.push(listener as (error: unknown) => void);
  }

  emit(event: RealtimeServerEvent) {
    for (const listener of this.eventListeners) listener(event);
  }
}

export function responseDoneEvent(): RealtimeServerEvent {
  return {
    type: "response.done",
    event_id: "event_response_done",
    response: {
      object: "realtime.response",
      status: "completed",
    },
  } as RealtimeServerEvent;
}

export function fakeRuntimeEvent(type: RuntimeEvent["type"], data: RuntimeEvent["data"]): RuntimeEvent {
  return {
    id: `event_${Math.random().toString(36).slice(2)}`,
    conversationId: "conversation_1",
    offset: 1,
    type,
    createdAt: "2026-05-25T00:00:00.000Z",
    data,
  } as RuntimeEvent;
}

export function flushAsync() {
  return new Promise<void>((resolve) => {
    setTimeout(resolve, 0);
  });
}

export function fakeVoiceSession(): VoiceSocketSession {
  return {
    id: "voice_connection_1",
    conversation: {
      id: "conversation_1",
      agentId: "flight-service",
      lifecycle: "active",
      context: {},
      createdAt: "2026-05-25T00:00:00.000Z",
      updatedAt: "2026-05-25T00:00:00.000Z",
    },
    channelSegment: {
      id: "voice_segment_1",
      conversationId: "conversation_1",
      channel: "voice",
      startedAt: "2026-05-25T00:00:00.000Z",
    },
    connection: {
      id: "voice_connection_1",
      channelSegmentId: "voice_segment_1",
      status: "starting",
      adapter: "cognidesk-voice-websocket",
      provider: "openai",
    },
    events: [],
    createdAt: "2026-05-25T00:00:00.000Z",
    updatedAt: "2026-05-25T00:00:00.000Z",
    status: "pending",
    lastAckSequence: 0,
  };
}
