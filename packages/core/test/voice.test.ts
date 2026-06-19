import { describe, expect, it } from "vitest";
import {
  createAgent,
  createRuntime,
} from "../src/index.js";
import { RecordingStorage } from "./runtime/fixtures.js";

describe("voice contracts", () => {
  it("compiles an Agent-level Voice Profile", () => {
    const agent = createAgent("flight-service", {
      instructions: "Help with flights.",
    }).voice({
      instructions: "Speak concisely.",
      modelSet: {
        provider: "openai",
        model: "gpt-realtime-2",
        voice: "alloy",
      },
      recording: {
        enabled: false,
      },
    }).compile();

    expect(agent.voice).toEqual({
      instructions: "Speak concisely.",
      modelSet: {
        provider: "openai",
        model: "gpt-realtime-2",
        voice: "alloy",
      },
      recording: {
        enabled: false,
      },
    });
  });

  it("starts voice conversations as socket-backed segments and blocks chat while active", async () => {
    const storage = new RecordingStorage();
    const runtime = createRuntime({
      storage,
    });

    const started = await runtime.startVoiceConversation({
      agentId: "flight-service",
      context: {},
    });

    expect(started.connection.adapter).toBe("cognidesk-voice-websocket");
    expect(started.connection.status).toBe("starting");
    expect(started.events[0]?.type).toBe("voice.segment.started");
    await expect(runtime.handleUserMessage({
      conversationId: started.conversation.id,
      text: "hello",
    })).rejects.toThrow("already has an active voice segment");

    await runtime.endVoiceSegment({
      conversationId: started.conversation.id,
      channelSegmentId: started.channelSegment.id,
      connectionId: started.connection.id,
      reason: "hangup",
    });
    await expect(runtime.handleUserMessage({
      conversationId: started.conversation.id,
      text: "hello",
    })).rejects.toThrow("requires an agent");
  });

  it("allows at most one active voice segment under concurrent starts", async () => {
    const storage = new RecordingStorage();
    const runtime = createRuntime({ storage });
    const conversation = await runtime.createConversation({
      agentId: "flight-service",
      context: {},
    });

    const results = await Promise.allSettled(Array.from({ length: 6 }, () => runtime.startVoiceSegment({
      conversationId: conversation.id,
    })));

    const started = results.filter((result) => result.status === "fulfilled");
    const rejected = results.filter((result) => result.status === "rejected");
    expect(started).toHaveLength(1);
    expect(rejected).toHaveLength(5);
    for (const result of rejected) {
      expect(result.reason).toBeInstanceOf(Error);
      expect((result.reason as Error).message).toContain("already has an active voice segment");
    }

    const events = await runtime.listEvents(conversation.id);
    expect(events.filter((event) => event.type === "voice.segment.started")).toHaveLength(1);
  });

  it("commits finalized voice transcripts as canonical messages plus voice metadata", async () => {
    const storage = new RecordingStorage();
    const runtime = createRuntime({ storage });
    const conversation = await runtime.createConversation({
      agentId: "flight-service",
      context: {},
    });

    const result = await runtime.commitVoiceTranscript({
      conversationId: conversation.id,
      channelSegmentId: "segment_1",
      speaker: "user",
      text: "I need my ticket status.",
      transcriptionSource: "test",
    });

    expect(result.message.type).toBe("message.completed");
    expect(result.event.type).toBe("voice.transcript.committed");
    expect(result.event.data).toEqual({
      channelSegmentId: "segment_1",
      speaker: "user",
      messageEventId: result.message.id,
      transcriptionSource: "test",
    });
  });

  it("records voice interruptions as durable runtime events", async () => {
    const storage = new RecordingStorage();
    const runtime = createRuntime({ storage });
    const conversation = await runtime.createConversation({
      agentId: "flight-service",
      context: {},
    });

    const event = await runtime.recordVoiceInterruption({
      conversationId: conversation.id,
      channelSegmentId: "segment_1",
      connectionId: "connection_1",
      source: "userSpeech",
      reason: "barge-in",
      offsetMs: 1200,
    });

    expect(event.type).toBe("voice.interrupted");
    expect(event.data).toEqual({
      channelSegmentId: "segment_1",
      connectionId: "connection_1",
      source: "userSpeech",
      reason: "barge-in",
      offsetMs: 1200,
    });
  });
});
