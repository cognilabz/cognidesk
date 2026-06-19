import { describe, expect, it } from "vitest";
import { createInMemoryVoiceSessionStore, handleVoiceSocket } from "../../src/index.js";
import { createTokenSequence, FakeProvider, FakeRuntime, FakeSocket, fakeStartVoiceResult, flushAsync } from "./helpers.js";

describe("@cognidesk/voice-websocket realtime control", () => {
  it("can commit realtime-control transcripts without invoking the text turn pipeline", async () => {
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
        control: {
          tools: [],
          handleToolCall: () => ({ output: { ok: true } }),
        },
        inputTranscriptDebounceMs: 25,
      });

      await provider.emitTranscript("What baggage is included?");
      await flushAsync();

      expect(runtime.voiceTurns).toHaveLength(0);
      expect(runtime.committedTranscripts).toEqual([]);

      await provider.emitServerEvent({
        type: "response.output_audio_transcript.done",
        event_id: "event_transcript_done",
        response_id: "response_1",
        item_id: "item_assistant",
        output_index: 0,
        content_index: 0,
        transcript: "Economy Light includes one cabin bag.",
      });
      await flushAsync();

      expect(runtime.committedTranscripts).toEqual([
        expect.objectContaining({
          speaker: "user",
          text: "What baggage is included?",
        }),
        expect.objectContaining({
          speaker: "assistant",
          text: "Economy Light includes one cabin bag.",
        }),
      ]);
      expect(socket.sent.some((event) =>
        event.type === "cognidesk.turn.completed"
        && event.text === "Economy Light includes one cabin bag."
      )).toBe(true);
    });

    it("flushes pending realtime-control input before control tool calls run", async () => {
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
      let committedBeforeTool = 0;

      await handleVoiceSocket({
        socket,
        connectionId: created.session.connection.id,
        token: created.socket.token,
        store,
        runtime,
        provider,
        control: {
          tools: [],
          handleToolCall: () => {
            committedBeforeTool = runtime.committedTranscripts.length;
            return { output: { ok: true } };
          },
        },
        inputTranscriptDebounceMs: 25,
      });

      await provider.emitTranscript("Find flights from Vienna to Berlin tomorrow.");
      await flushAsync();
      expect(runtime.committedTranscripts).toHaveLength(0);

      await provider.callControlTool();

      expect(committedBeforeTool).toBe(1);
      expect(runtime.committedTranscripts[0]).toMatchObject({
        speaker: "user",
        text: "Find flights from Vienna to Berlin tomorrow.",
      });
    });
});
