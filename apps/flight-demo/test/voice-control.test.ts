import { describe, expect, it } from "vitest";
import { createRuntime, type AgentModelSet, type CognideskRuntime, type CompiledAgent, type ModelAdapter } from "@cognidesk/core";
import { createSqliteStorage } from "@cognidesk/storage/sqlite";
import type { VoiceControlNotification, VoiceSocketSession } from "@cognidesk/voice-websocket";
import { createFlightDemoRuntimeParts } from "../server/flight-agent.js";
import { createFlightDemoVoiceControlSurface } from "../server/voice-control.js";
import type { FlightKnowledgeIndex } from "../server/knowledge-index.js";
import { createTestKnowledgeIndex, createTestModelSet, testConfig } from "./fixtures.js";

describe("flight demo voice control", () => {
  it("advances workflow from an already committed voice transcript without duplicate messages", async () => {
    const { runtime, agent, models, knowledgeIndex, session } = await setupVoiceControlRuntime();
    const surface = createFlightDemoVoiceControlSurface({ runtime, agent, models, knowledgeIndex });

    await runtime.commitVoiceTranscript({
      conversationId: session.conversation.id,
      channelSegmentId: session.channelSegment.id,
      speaker: "user",
      text: "Find flights from Vienna to Berlin tomorrow.",
      transcriptionSource: "test",
    });

    const result = await surface.handleToolCall({
      session,
      name: "submit_voice_journey_proposal",
      arguments: {
        intent: "advance_journey",
        userTranscript: "Find flights from Vienna to Berlin tomorrow.",
        targetJourneyId: "book-flight",
        background: false,
      },
      callId: "call_1",
      signal: new AbortController().signal,
    });

    expect(result.output).toMatchObject({
      ok: true,
      status: "completed",
      intent: "advance_journey",
      targetJourneyId: "book-flight",
    });
    const snapshot = await runtime.getSnapshot(session.conversation.id);
    expect(snapshot?.activeJourneyId).toBe("book-flight");

    const replay = await runtime.replayConversation({ conversationId: session.conversation.id });
    expect(replay.messages.map((message) => `${message.role}:${message.text}`)).toEqual([
      "user:Find flights from Vienna to Berlin tomorrow.",
    ]);
  });

  it("keeps workflow work in the background and notifies realtime when it completes", async () => {
    const { runtime, agent, models, knowledgeIndex, session } = await setupVoiceControlRuntime();
    const surface = createFlightDemoVoiceControlSurface({ runtime, agent, models, knowledgeIndex });
    const notifications: VoiceControlNotification[] = [];

    await runtime.commitVoiceTranscript({
      conversationId: session.conversation.id,
      channelSegmentId: session.channelSegment.id,
      speaker: "user",
      text: "What is the status of booking CD-CL204-4821?",
      transcriptionSource: "test",
    });

    const result = await surface.handleToolCall({
      session,
      name: "submit_voice_journey_proposal",
      arguments: {
        intent: "advance_journey",
        userTranscript: "What is the status of booking CD-CL204-4821?",
        targetJourneyId: "ticket-status",
        background: true,
      },
      callId: "call_1",
      signal: new AbortController().signal,
      notify: async (notification) => {
        notifications.push(notification);
      },
    });

    expect(result.output).toMatchObject({
      ok: true,
      status: "running",
      targetJourneyId: "ticket-status",
    });
    expect((result.output as { voiceGuidance?: string }).voiceGuidance).toContain(
      "Do not state that the workflow has updated",
    );
    await waitFor(() => notifications.length > 0);
    expect(notifications[0]?.message).toContain("Validated result to tell the customer");
    expect(notifications[0]?.events?.some((event) => event.type === "custom.voice.background.completed")).toBe(true);

    const status = await surface.handleToolCall({
      session,
      name: "get_voice_background_work",
      arguments: {},
      callId: "call_2",
      signal: new AbortController().signal,
    });
    expect(status.output).toMatchObject({
      ok: true,
      work: {
        status: "completed",
        targetJourneyId: "ticket-status",
      },
    });

    const replay = await runtime.replayConversation({ conversationId: session.conversation.id });
    expect(replay.messages.filter((message) => message.role === "user")).toHaveLength(1);
    expect(replay.messages.filter((message) => message.role === "assistant")).toHaveLength(0);
  });

  it("does not tell voice customers to use a missing route form", async () => {
    const { runtime, agent, models, knowledgeIndex, session } = await setupVoiceControlRuntime(createFormReferencingVoiceModelSet());
    const surface = createFlightDemoVoiceControlSurface({ runtime, agent, models, knowledgeIndex });

    await runtime.commitVoiceTranscript({
      conversationId: session.conversation.id,
      channelSegmentId: session.channelSegment.id,
      speaker: "user",
      text: "Ich möchte einen Flug buchen.",
      transcriptionSource: "test",
    });

    const result = await surface.handleToolCall({
      session,
      name: "submit_voice_journey_proposal",
      arguments: {
        intent: "advance_journey",
        userTranscript: "Ich möchte einen Flug buchen.",
        targetJourneyId: "book-flight",
        background: false,
      },
      callId: "call_1",
      signal: new AbortController().signal,
    });

    const resultText = String((result.output as { resultText?: unknown }).resultText ?? "");
    expect(result.output).toMatchObject({
      ok: true,
      status: "completed",
      targetJourneyId: "book-flight",
    });
    expect(resultText).toMatch(/Von wo nach wo/);
    expect(resultText).not.toMatch(/\bform(?:ular)?\b/i);

    const replay = await runtime.replayConversation({ conversationId: session.conversation.id });
    expect(replay.openPrompts).toEqual([]);
  });
});

async function setupVoiceControlRuntime(models = createTestModelSet()): Promise<{
  runtime: CognideskRuntime;
  agent: CompiledAgent;
  models: AgentModelSet;
  knowledgeIndex: FlightKnowledgeIndex;
  session: VoiceSocketSession;
}> {
  const knowledgeIndex = await createTestKnowledgeIndex(models);
  const { agent, journeyIndex } = await createFlightDemoRuntimeParts({
    config: testConfig,
    models,
    knowledgeIndex,
  });
  const runtime = createRuntime({
    storage: createSqliteStorage({ filename: ":memory:" }),
    agent,
    models,
    journeyIndex,
    topKJourneys: 3,
    streaming: {
      syntheticDeltas: true,
    },
  });
  await runtime.initialize();
  const session = await runtime.startVoiceConversation({
    agentId: agent.id,
    context: {},
  });
  return {
    runtime,
    agent,
    models,
    knowledgeIndex,
    session,
  };
}

function createFormReferencingVoiceModelSet(): AgentModelSet {
  const models = createTestModelSet();
  const baseResponse = models.response;
  const response: ModelAdapter = {
    ...baseResponse,
    generateText: async (input) => {
      if (input.role === "response") {
        return {
          text: "Gern — bitte nutze das Formular für Abflug, Ziel und Reisedatum.",
          usage: { inputTokens: 10, outputTokens: 10, totalTokens: 20 },
        };
      }
      return baseResponse.generateText(input);
    },
  };
  return { ...models, response };
}

async function waitFor(assertion: () => boolean, timeoutMs = 1_000) {
  const started = Date.now();
  while (!assertion()) {
    if (Date.now() - started > timeoutMs) throw new Error("Timed out waiting for condition.");
    await new Promise((resolve) => setTimeout(resolve, 10));
  }
}
