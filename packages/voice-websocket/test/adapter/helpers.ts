import type {
  HandleVoiceUserMessageInput,
  HandleVoiceUserMessageResult,
  RuntimeEvent,
  StartVoiceResult,
} from "@cognidesk/core";
import type {
  VoiceBrowserClientEvent,
  VoiceBrowserServerEvent,
  VoiceProvider,
  VoiceProviderConnectInput,
  VoiceProviderSession,
  VoiceRuntime,
  VoiceSocketLike,
} from "../../src/index.js";

export class FakeSocket implements VoiceSocketLike {
  sent: VoiceBrowserServerEvent[] = [];
  private messageListeners: Array<(data: string) => void> = [];
  private closeListeners: Array<(code?: number, reason?: string) => void> = [];
  private errorListeners: Array<(error: unknown) => void> = [];

  send(data: string) {
    this.sent.push(JSON.parse(data) as VoiceBrowserServerEvent);
  }

  close(code?: number, reason?: string) {
    for (const listener of this.closeListeners) listener(code, reason);
  }

  on(event: "message" | "close" | "error", listener: ((data: string) => void) | ((code?: number, reason?: string) => void) | ((error: unknown) => void)) {
    if (event === "message") {
      this.messageListeners.push(listener as (data: string) => void);
      return;
    }
    if (event === "close") {
      this.closeListeners.push(listener as (code?: number, reason?: string) => void);
      return;
    }
    this.errorListeners.push(listener as (error: unknown) => void);
  }

  receive(event: VoiceBrowserClientEvent) {
    for (const listener of this.messageListeners) listener(JSON.stringify(event));
  }
}

export class FakeProvider implements VoiceProvider {
  id = "fake-provider";
  session: FakeProviderSession | null = null;
  private input: VoiceProviderConnectInput | null = null;

  async connect(input: VoiceProviderConnectInput) {
    this.input = input;
    this.session = new FakeProviderSession();
    return this.session;
  }

  async emitTranscript(text: string) {
    await this.input?.onEvent({
      kind: "input_transcript.completed",
      text,
      transcriptionSource: "fake-provider",
    });
  }

  async emitServerEvent(event: VoiceBrowserServerEvent) {
    await this.input?.onEvent({
      kind: "server_event",
      event,
    });
  }

  async callControlTool() {
    if (!this.input?.control) throw new Error("Control surface was not connected.");
    return this.input.control.handleToolCall({
      session: this.input.session,
      name: "test_tool",
      arguments: {},
      callId: "call_1",
      signal: this.input.signal,
    });
  }
}

class FakeProviderSession implements VoiceProviderSession {
  received: VoiceBrowserClientEvent[] = [];
  spoken: string[] = [];
  preambles: string[] = [];

  send(event: VoiceBrowserClientEvent) {
    this.received.push(event);
  }

  speak(input: { text: string }) {
    this.spoken.push(input.text);
  }

  preamble(input: { text: string }) {
    this.preambles.push(input.text);
  }

  close() {
    return undefined;
  }
}

export class FakeRuntime implements VoiceRuntime {
  voiceTurns: Array<HandleVoiceUserMessageInput> = [];
  interruptions: Array<Parameters<VoiceRuntime["recordVoiceInterruption"]>[0]> = [];
  committedTranscripts: Array<Parameters<NonNullable<VoiceRuntime["commitVoiceTranscript"]>>[0]> = [];
  endedSegments: Array<Parameters<VoiceRuntime["endVoiceSegment"]>[0]> = [];
  responseDelayMs = 0;
  responseDeltas: string[] = [];

  async handleVoiceUserMessage(input: HandleVoiceUserMessageInput): Promise<HandleVoiceUserMessageResult> {
    this.voiceTurns.push(input);
    if (this.responseDelayMs > 0) await sleep(this.responseDelayMs);
    for (const delta of this.responseDeltas) {
      await input.onAssistantTextDelta?.(delta);
    }
    const events = [
      fakeRuntimeEvent("message.started", { role: "user" }),
      fakeRuntimeEvent("message.completed", { text: input.text }),
      fakeRuntimeEvent("message.started", { role: "assistant" }),
      fakeRuntimeEvent("message.completed", { text: "Sure, I can help with your ticket status." }),
      fakeRuntimeEvent("voice.transcript.committed", {
        channelSegmentId: input.channelSegmentId,
        speaker: "user",
        messageEventId: "event_2",
        transcriptionSource: "fake-provider",
      }),
    ] as RuntimeEvent[];
    return {
      conversation: fakeStartVoiceResult().conversation,
      snapshot: {
        conversationId: input.conversationId,
        lifecycle: "active",
        activeJourneyId: "journey_primary",
        activeStateIds: ["state_primary"],
        updatedAt: "2026-05-25T00:00:00.000Z",
      },
      events,
      voiceEvents: events.filter((event) => event.type === "voice.transcript.committed"),
      text: "Sure, I can help with your ticket status.",
      activeJourneyId: "journey_primary",
    };
  }

  async recordVoiceInterruption(input: Parameters<VoiceRuntime["recordVoiceInterruption"]>[0]): Promise<RuntimeEvent> {
    this.interruptions.push(input);
    return fakeRuntimeEvent("voice.interrupted", {
      channelSegmentId: input.channelSegmentId,
      connectionId: input.connectionId,
      source: input.source,
      reason: input.reason,
      offsetMs: input.offsetMs,
    }) as RuntimeEvent;
  }

  async commitVoiceTranscript(input: Parameters<NonNullable<VoiceRuntime["commitVoiceTranscript"]>>[0]) {
    this.committedTranscripts.push(input);
    const started = fakeRuntimeEvent("message.started", { role: input.speaker });
    const message = fakeRuntimeEvent("message.completed", { text: input.text });
    const event = fakeRuntimeEvent("voice.transcript.committed", {
      channelSegmentId: input.channelSegmentId,
      speaker: input.speaker,
      messageEventId: message.id,
      transcriptionSource: input.transcriptionSource,
    });
    return {
      message,
      event,
      events: [started, message, event] as RuntimeEvent[],
    };
  }

  async endVoiceSegment(input: Parameters<VoiceRuntime["endVoiceSegment"]>[0]): Promise<RuntimeEvent> {
    this.endedSegments.push(input);
    return fakeRuntimeEvent("voice.segment.ended", {
      channelSegmentId: input.channelSegmentId,
      connectionId: input.connectionId,
      reason: input.reason,
    }) as RuntimeEvent;
  }
}

export function fakeStartVoiceResult(): StartVoiceResult {
  return {
    conversation: {
      id: "conversation_1",
      agentId: "agent_primary",
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
      provider: "test",
    },
    events: [],
  };
}

function fakeRuntimeEvent(type: RuntimeEvent["type"], data: unknown): RuntimeEvent {
  return {
    id: `event_${nextEventId++}`,
    conversationId: "conversation_1",
    offset: nextEventId,
    type,
    createdAt: "2026-05-25T00:00:00.000Z",
    data,
  } as RuntimeEvent;
}

let nextEventId = 1;

export function createTokenSequence(...tokens: string[]) {
  let index = 0;
  return () => tokens[index++] ?? `token_${index}`;
}

export function flushAsync() {
  return new Promise<void>((resolve) => {
    setTimeout(resolve, 0);
  });
}

export function sleep(ms: number) {
  return new Promise<void>((resolve) => {
    setTimeout(resolve, ms);
  });
}
