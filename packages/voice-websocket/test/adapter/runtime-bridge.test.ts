import { describe, expect, it } from "vitest";
import {
  createInMemoryVoiceSessionStore,
  handleVoiceSocket,
  type VoiceProvider,
  type VoiceProviderSession,
} from "../../src/index.js";
import { createTokenSequence, FakeProvider, FakeRuntime, FakeSocket, flushAsync, fakeStartVoiceResult, sleep } from "./helpers.js";

describe("@cognidesk/voice-websocket runtime bridge", () => {
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

    it("can speak an initial greeting once the voice connection is ready", async () => {
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
        initialGreeting: "Guten Tag, hier ist der Support.",
      });
      await flushAsync();

      expect(socket.sent[0]).toMatchObject({
        type: "cognidesk.connection.ready",
      });
      expect(provider.session?.spoken).toEqual(["Guten Tag, hier ist der Support."]);
    });

    it("can speak a per-session initial greeting once the voice connection is ready", async () => {
      const store = createInMemoryVoiceSessionStore({
        createToken: createTokenSequence("start-token", "reconnect-token"),
      });
      const created = await store.createSession({
        result: fakeStartVoiceResult(),
        initialGreeting: "Hi, I can help with flights today.",
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
      });
      await flushAsync();

      expect(provider.session?.spoken).toEqual(["Hi, I can help with flights today."]);
    });

    it("ends the claimed session when provider connection fails", async () => {
      const store = createInMemoryVoiceSessionStore({
        createToken: createTokenSequence("start-token", "reconnect-token"),
      });
      const created = await store.createSession({
        result: fakeStartVoiceResult(),
        tokenTtlMs: 60_000,
      });
      const socket = new FakeSocket();
      const runtime = new FakeRuntime();
      const provider: VoiceProvider = {
        id: "failing-provider",
        async connect() {
          throw new Error("Provider credentials were rejected.");
        },
      };

      await handleVoiceSocket({
        socket,
        connectionId: created.session.connection.id,
        token: created.socket.token,
        store,
        runtime,
        provider,
      });

      await expect(store.getSession(created.session.id)).resolves.toMatchObject({
        status: "ended",
      });
      expect(runtime.endedSegments).toEqual([
        {
          conversationId: created.session.conversation.id,
          channelSegmentId: created.session.channelSegment.id,
          connectionId: created.session.connection.id,
          reason: "provider_connect_failed",
        },
      ]);
      expect(socket.sent).toContainEqual(expect.objectContaining({
        type: "error",
        error: expect.objectContaining({
          code: "voice_provider_connect_failed",
          message: "Provider credentials were rejected.",
        }),
      }));
    });

    it("ends the claimed session when the socket closes before provider connection finishes", async () => {
      const store = createInMemoryVoiceSessionStore({
        createToken: createTokenSequence("start-token", "reconnect-token"),
      });
      const created = await store.createSession({
        result: fakeStartVoiceResult(),
        tokenTtlMs: 60_000,
      });
      const socket = new FakeSocket();
      const runtime = new FakeRuntime();
      const connectStarted = deferred<void>();
      const providerConnected = deferred<VoiceProviderSession>();
      let providerCloseCount = 0;
      const providerSession: VoiceProviderSession = {
        send() {
          return undefined;
        },
        speak() {
          return undefined;
        },
        close() {
          providerCloseCount++;
        },
      };
      const provider: VoiceProvider = {
        id: "slow-provider",
        async connect() {
          connectStarted.resolve();
          return providerConnected.promise;
        },
      };

      const handling = handleVoiceSocket({
        socket,
        connectionId: created.session.connection.id,
        token: created.socket.token,
        store,
        runtime,
        provider,
      });

      await connectStarted.promise;
      socket.close(1000, "Browser closed during setup");
      await flushAsync();

      await expect(store.getSession(created.session.id)).resolves.toMatchObject({
        status: "ended",
      });
      expect(runtime.endedSegments).toEqual([
        {
          conversationId: created.session.conversation.id,
          channelSegmentId: created.session.channelSegment.id,
          connectionId: created.session.connection.id,
          reason: "socket_closed",
        },
      ]);

      providerConnected.resolve(providerSession);
      await handling;

      expect(socket.sent.map((event) => event.type)).not.toContain("cognidesk.connection.ready");
      expect(socket.sent.map((event) => event.type)).not.toContain("cognidesk.connection.reconnect_token");
      expect(providerCloseCount).toBe(1);
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

function deferred<T>() {
  let resolve!: (value: T | PromiseLike<T>) => void;
  const promise = new Promise<T>((resolvePromise) => {
    resolve = resolvePromise;
  });
  return { promise, resolve };
}
