import { describe, expect, it } from "vitest";
import type { RealtimeClientEvent, RealtimeServerEvent } from "openai/resources/realtime/realtime";
import {
  OPENAI_REALTIME_V1_MODEL,
  createOpenAIVoiceProvider,
} from "../src/index.js";
import type { VoiceProviderEvent, VoiceSocketSession } from "@cognidesk/voice-websocket";

describe("@cognidesk/voice-openai", () => {
  it("configures a gpt-realtime-2 websocket session and translates browser events", async () => {
    const realtime = new FakeRealtimeSocket();
    const provider = createOpenAIVoiceProvider({
      apiKey: "test-key",
      voice: "alloy",
      transcriptionLanguage: "de",
      realtime: async () => realtime,
    });
    const providerEvents: VoiceProviderEvent[] = [];

    const session = await provider.connect({
      session: fakeVoiceSession(),
      profile: {
        instructions: "Speak concisely.",
        modelSet: {
          provider: "openai",
          model: OPENAI_REALTIME_V1_MODEL,
        },
      },
      signal: new AbortController().signal,
      onEvent: (event) => {
        providerEvents.push(event);
      },
    });

    expect(realtime.sent[0]).toMatchObject({
      type: "session.update",
      session: {
        type: "realtime",
        model: OPENAI_REALTIME_V1_MODEL,
        instructions: "Speak concisely.",
        output_modalities: ["audio"],
        reasoning: { effort: "low" },
        audio: {
          input: {
            format: { type: "audio/pcm", rate: 24000 },
            transcription: { model: "gpt-realtime-whisper", language: "de" },
            turn_detection: {
              type: "server_vad",
              create_response: false,
              interrupt_response: true,
            },
          },
          output: {
            format: { type: "audio/pcm", rate: 24000 },
            voice: "alloy",
          },
        },
      },
    });

    await session.send({
      type: "input_audio_buffer.append",
      audio: "AQID",
      sequence: 1,
    });
    await session.send({
      type: "response.cancel",
      response_id: "response_1",
    });

    expect(realtime.sent[1]).toEqual({
      type: "input_audio_buffer.append",
      audio: "AQID",
    });
    expect(realtime.sent[2]).toEqual({
      type: "response.cancel",
      response_id: "response_1",
    });

    realtime.emit({
      type: "conversation.item.input_audio_transcription.completed",
      event_id: "event_transcript",
      item_id: "item_1",
      transcript: "I need my ticket status.",
      content_index: 0,
      usage: { type: "tokens", input_tokens: 1, output_tokens: 0, total_tokens: 1 },
    } as RealtimeServerEvent);
    realtime.emit({
      type: "response.output_audio.delta",
      event_id: "event_audio",
      response_id: "response_1",
      item_id: "item_2",
      output_index: 0,
      content_index: 0,
      delta: "BAUG",
    } as RealtimeServerEvent);

    expect(providerEvents).toEqual([
      {
        kind: "input_transcript.completed",
        text: "I need my ticket status.",
        itemId: "item_1",
        transcriptionSource: "openai-realtime",
      },
      {
        kind: "server_event",
        event: {
          type: "response.output_audio.delta",
          event_id: "event_audio",
          response_id: "response_1",
          item_id: "item_2",
          output_index: 0,
          content_index: 0,
          delta: "BAUG",
        },
      },
    ]);
  });

  it("creates speech responses from Cognidesk turn output", async () => {
    const realtime = new FakeRealtimeSocket();
    const provider = createOpenAIVoiceProvider({
      apiKey: "test-key",
      realtime: async () => realtime,
    });
    const session = await provider.connect({
      session: fakeVoiceSession(),
      signal: new AbortController().signal,
      onEvent: () => undefined,
    });

    const speaking = session.speak({
      text: "Your flight is confirmed.",
      result: {
        conversation: fakeVoiceSession().conversation,
        snapshot: {
          conversationId: "conversation_1",
          lifecycle: "active",
          activeStateIds: [],
          updatedAt: "2026-05-25T00:00:00.000Z",
        },
        events: [],
        voiceEvents: [],
        text: "Your flight is confirmed.",
      },
    });
    await flushAsync();

    expect(realtime.sent[1]).toMatchObject({
      type: "response.create",
      response: {
        conversation: "none",
        output_modalities: ["audio"],
        metadata: {
          cognidesk_voice_kind: "speech",
        },
        instructions: "Read the supplied text exactly. Do not add a greeting, explanation, or closing.",
      },
    });
    expect(JSON.stringify(realtime.sent[1])).toContain("Your flight is confirmed.");
    realtime.emit(responseDoneEvent());
    await speaking;
  });

  it("creates dynamic realtime preamble responses", async () => {
    const realtime = new FakeRealtimeSocket();
    const provider = createOpenAIVoiceProvider({
      apiKey: "test-key",
      realtime: async () => realtime,
    });
    const session = await provider.connect({
      session: fakeVoiceSession(),
      signal: new AbortController().signal,
      onEvent: () => undefined,
    });

    const preamble = session.preamble?.({ text: "Hallo" });
    await flushAsync();

    expect(preamble).toBeDefined();
    expect(realtime.sent[1]).toMatchObject({
      type: "response.create",
      response: {
        conversation: "none",
        output_modalities: ["audio"],
        metadata: {
          cognidesk_voice_kind: "preamble",
        },
      },
    });
    expect(JSON.stringify(realtime.sent[1])).toContain("For the greeting 'Hallo', prefer German.");
    realtime.emit(responseDoneEvent());
    await preamble;
  });

  it("rejects non-gpt-realtime-2 model settings in v1", async () => {
    const provider = createOpenAIVoiceProvider({
      apiKey: "test-key",
      realtime: async () => new FakeRealtimeSocket(),
    });

    await expect(provider.connect({
      session: fakeVoiceSession(),
      signal: new AbortController().signal,
      profile: {
        modelSet: {
          provider: "openai",
          model: "gpt-realtime",
        },
      },
      onEvent: () => undefined,
    })).rejects.toThrow("supports only gpt-realtime-2");
  });
});

class FakeRealtimeSocket {
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

function responseDoneEvent(): RealtimeServerEvent {
  return {
    type: "response.done",
    event_id: "event_response_done",
    response: {
      object: "realtime.response",
      status: "completed",
    },
  } as RealtimeServerEvent;
}

function flushAsync() {
  return new Promise<void>((resolve) => {
    setTimeout(resolve, 0);
  });
}

function fakeVoiceSession(): VoiceSocketSession {
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
