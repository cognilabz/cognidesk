import { describe, expect, it } from "vitest";
import {
  createInMemoryVoiceSessionStore,
  createVoiceSocketHandshake,
  handleVoiceSocket,
  type VoiceBrowserClientEvent,
  type VoiceBrowserServerEvent,
  type VoiceProvider,
  type VoiceProviderConnectInput,
  type VoiceProviderSession,
  type VoiceRuntime,
  type VoiceSocketLike,
} from "../src/index.js";
import type {
  HandleVoiceUserMessageInput,
  HandleVoiceUserMessageResult,
  RuntimeEvent,
  StartVoiceResult,
} from "@cognidesk/core";

describe("@cognidesk/voice-websocket", () => {
  it("creates short-lived single-use socket tokens from HTTP handshakes", async () => {
    const store = createInMemoryVoiceSessionStore({
      createToken: createTokenSequence("start-token", "reconnect-token"),
    });
    const handshake = createVoiceSocketHandshake({
      store,
      tokenTtlMs: 60_000,
    });

    const socket = await handshake.createSocket({
      result: fakeStartVoiceResult(),
      request: new Request("https://demo.test/api/voice/conversations"),
      basePath: "/api",
    });

    expect(socket).toEqual({
      url: "wss://demo.test/api/voice/connections/voice_connection_1/socket?token=start-token",
      token: "start-token",
      expiresAt: expect.any(String),
      protocol: "cognidesk.voice.v1",
    });
    const firstClaim = await store.claimToken({
      connectionId: "voice_connection_1",
      token: "start-token",
    });
    const secondClaim = await store.claimToken({
      connectionId: "voice_connection_1",
      token: "start-token",
    });
    expect(firstClaim?.session.id).toBe("voice_connection_1");
    expect(firstClaim?.reconnect).toBe(false);
    expect(secondClaim).toBeNull();
  });

  it("bridges browser protocol events to the provider and runtime", async () => {
    const store = createInMemoryVoiceSessionStore({
      createToken: createTokenSequence("start-token", "reconnect-token"),
    });
    const created = await store.createSession({
      result: fakeStartVoiceResult(),
      tokenTtlMs: 60_000,
    });
    const socket = new FakeSocket();
    const runtime = new FakeRuntime();
    const provider = new FakeProvider();

    await handleVoiceSocket({
      socket,
      connectionId: created.session.connection.id,
      token: created.socket.token,
      store,
      runtime,
      provider,
      inputTranscriptDebounceMs: 0,
    });

    expect(socket.sent[0]).toMatchObject({
      type: "cognidesk.connection.ready",
      protocol: "cognidesk.voice.v1",
      lastAckSequence: 0,
    });
    expect(socket.sent[1]).toMatchObject({
      type: "cognidesk.connection.reconnect_token",
      token: "reconnect-token",
    });

    socket.receive({
      type: "input_audio_buffer.append",
      audio: "AQID",
      sequence: 1,
    });
    await flushAsync();
    socket.receive({
      type: "input_audio_buffer.append",
      audio: "AQID",
      sequence: 1,
    });
    await flushAsync();

    expect(socket.sent.some((event) =>
      event.type === "cognidesk.audio.ack" && event.sequence === 1
    )).toBe(true);
    expect(provider.session?.received.filter((event) => event.type === "input_audio_buffer.append")).toHaveLength(1);

    await provider.emitTranscript("I need my ticket status.");
    await flushAsync();
    expect(runtime.voiceTurns).toHaveLength(1);
    expect(runtime.voiceTurns[0]?.text).toBe("I need my ticket status.");
    expect(provider.session?.spoken).toEqual(["Sure, I can help with your ticket status."]);
    expect(socket.sent.some((event) =>
      event.type === "cognidesk.runtime_event"
      && event.event.type === "voice.transcript.committed"
    )).toBe(true);
    expect(socket.sent.some((event) =>
      event.type === "cognidesk.turn.completed"
      && event.text === "Sure, I can help with your ticket status."
    )).toBe(true);

    socket.receive({
      type: "response.cancel",
      playedUntilMs: 240,
      reason: "barge-in",
    });
    await flushAsync();
    expect(runtime.interruptions).toHaveLength(1);
    expect(socket.sent.some((event) =>
      event.type === "cognidesk.interruption.recorded"
      && event.event.type === "voice.interrupted"
    )).toBe(true);
  });

  it("coalesces adjacent provider transcript fragments into one runtime turn", async () => {
    const store = createInMemoryVoiceSessionStore({
      createToken: createTokenSequence("start-token", "reconnect-token"),
    });
    const created = await store.createSession({
      result: fakeStartVoiceResult(),
      tokenTtlMs: 60_000,
    });
    const socket = new FakeSocket();
    const runtime = new FakeRuntime();
    const provider = new FakeProvider();

    await handleVoiceSocket({
      socket,
      connectionId: created.session.connection.id,
      token: created.socket.token,
      store,
      runtime,
      provider,
      inputTranscriptDebounceMs: 25,
    });

    await provider.emitTranscript("Choose");
    await provider.emitTranscript("flight CL102.");
    await sleep(40);

    expect(runtime.voiceTurns).toHaveLength(1);
    expect(runtime.voiceTurns[0]?.text).toBe("Choose flight CL102.");
  });

  it("asks the provider for a dynamic preamble while the runtime turn is still pending", async () => {
    const store = createInMemoryVoiceSessionStore({
      createToken: createTokenSequence("start-token", "reconnect-token"),
    });
    const created = await store.createSession({
      result: fakeStartVoiceResult(),
      tokenTtlMs: 60_000,
    });
    const socket = new FakeSocket();
    const runtime = new FakeRuntime();
    runtime.responseDelayMs = 30;
    const provider = new FakeProvider();

    await handleVoiceSocket({
      socket,
      connectionId: created.session.connection.id,
      token: created.socket.token,
      store,
      runtime,
      provider,
      inputTranscriptDebounceMs: 0,
      turnPreambleMs: 5,
    });

    await provider.emitTranscript("What baggage is included?");
    await sleep(15);

    expect(socket.sent.some((event) => event.type === "cognidesk.voice.preamble")).toBe(false);
    expect(provider.session?.preambles).toEqual(["What baggage is included?"]);

    await sleep(40);
    expect(provider.session?.spoken).toEqual([
      "Sure, I can help with your ticket status.",
    ]);
  });

  it("speaks assistant text from streaming runtime deltas before the final turn completes", async () => {
    const store = createInMemoryVoiceSessionStore({
      createToken: createTokenSequence("start-token", "reconnect-token"),
    });
    const created = await store.createSession({
      result: fakeStartVoiceResult(),
      tokenTtlMs: 60_000,
    });
    const socket = new FakeSocket();
    const runtime = new FakeRuntime();
    runtime.responseDeltas = [
      "Sure, I can help. ",
      "Your ticket is ready.",
    ];
    const provider = new FakeProvider();

    await handleVoiceSocket({
      socket,
      connectionId: created.session.connection.id,
      token: created.socket.token,
      store,
      runtime,
      provider,
      inputTranscriptDebounceMs: 0,
      turnPreambleMs: 0,
    });

    await provider.emitTranscript("Check my ticket.");
    await flushAsync();

    expect(provider.session?.spoken).toEqual([
      "Sure, I can help.",
      "Your ticket is ready.",
    ]);
    expect(socket.sent.some((event) =>
      event.type === "cognidesk.turn.completed"
      && event.text === "Sure, I can help with your ticket status."
    )).toBe(true);
  });
});

class FakeSocket implements VoiceSocketLike {
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

class FakeProvider implements VoiceProvider {
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

class FakeRuntime implements VoiceRuntime {
  voiceTurns: Array<HandleVoiceUserMessageInput> = [];
  interruptions: Array<Parameters<VoiceRuntime["recordVoiceInterruption"]>[0]> = [];
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
        activeJourneyId: "ticket-status",
        activeStateIds: ["identifyTicket"],
        updatedAt: "2026-05-25T00:00:00.000Z",
      },
      events,
      voiceEvents: events.filter((event) => event.type === "voice.transcript.committed"),
      text: "Sure, I can help with your ticket status.",
      activeJourneyId: "ticket-status",
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

  async endVoiceSegment(input: Parameters<VoiceRuntime["endVoiceSegment"]>[0]): Promise<RuntimeEvent> {
    return fakeRuntimeEvent("voice.segment.ended", {
      channelSegmentId: input.channelSegmentId,
      connectionId: input.connectionId,
      reason: input.reason,
    }) as RuntimeEvent;
  }
}

function fakeStartVoiceResult(): StartVoiceResult {
  return {
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

function createTokenSequence(...tokens: string[]) {
  let index = 0;
  return () => tokens[index++] ?? `token_${index}`;
}

function flushAsync() {
  return new Promise<void>((resolve) => {
    setTimeout(resolve, 0);
  });
}

function sleep(ms: number) {
  return new Promise<void>((resolve) => {
    setTimeout(resolve, ms);
  });
}
