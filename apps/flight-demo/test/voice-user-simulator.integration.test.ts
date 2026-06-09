import { mkdtemp } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import OpenAI from "openai";
import { OpenAIRealtimeWS } from "openai/realtime/ws";
import type { RealtimeClientEvent, RealtimeServerEvent } from "openai/resources/realtime/realtime";
import { createRuntime, type RuntimeEvent } from "@cognidesk/core";
import { createSqliteStorage } from "@cognidesk/storage-sqlite";
import { createOpenAIVoiceProvider } from "@cognidesk/voice-openai";
import {
  createInMemoryVoiceSessionStore,
  handleVoiceSocket,
  type VoiceBrowserClientEvent,
  type VoiceBrowserServerEvent,
  type VoiceSocketLike,
} from "@cognidesk/voice-websocket";
import { loadFlightDemoEnv, resolveFlightDemoPath, type FlightDemoConfig } from "../server/config.js";
import { createFlightDemoRuntimeParts } from "../server/agent/index.js";
import { loadFlightKnowledgeIndex } from "../server/knowledge-index.js";

const REALTIME_MODEL = "gpt-realtime-2";

type VoiceScenario = {
  id: string;
  journeyId: string;
  turns: string[];
  assertGoal(events: RuntimeEvent[]): void;
};

const scenarios: VoiceScenario[] = [
  {
    id: "book-flight",
    journeyId: "book-flight",
    turns: [
      "I want to book a flight from Vienna to Berlin.",
      "May twenty seventh twenty twenty six for Alex Morgan.",
      "Select C L one zero two.",
      "Yes, please create the mocked booking now.",
    ],
    assertGoal(events) {
      expect(hasJourneyActivated(events, "book-flight")).toBe(true);
      expect(hasSuccessfulTool(events, "searchFlights")).toBe(true);
      expect(hasSuccessfulTool(events, "bookFlight")).toBe(true);
      expect(hasJourneyCompleted(events, "book-flight")).toBe(true);
    },
  },
  {
    id: "ticket-status",
    journeyId: "ticket-status",
    turns: [
      "What is the status of flight C L two zero four?",
      "Please tell me the next useful travel detail for that flight.",
    ],
    assertGoal(events) {
      expect(hasJourneyActivated(events, "ticket-status")).toBe(true);
      expect(hasSuccessfulTool(events, "getFlightInfo")).toBe(true);
    },
  },
  {
    id: "baggage-service",
    journeyId: "baggage-service",
    turns: [
      "I want to add an extra checked bag to my Economy Light booking.",
      "So this demo cannot add the bag here, correct?",
    ],
    assertGoal(events) {
      expect(hasJourneyActivated(events, "baggage-service")).toBe(true);
      expect(events.some((event) =>
        event.type === "message.completed"
        && event.data.text.toLowerCase().includes("cannot")
      )).toBe(true);
    },
  },
  {
    id: "human-handoff",
    journeyId: "human-handoff",
    turns: [
      "I need to speak to a human about an urgent cancellation.",
      "Yes, please transfer me to a person.",
    ],
    assertGoal(events) {
      expect(hasJourneyActivated(events, "human-handoff")).toBe(true);
    },
  },
];

describe.sequential("flight demo voice user simulator", () => {
  it.each(scenarios)("$id reaches its explicit voice journey goal", async (scenario) => {
    const apiKey = loadOpenAIKey();
    const harness = await createVoiceHarness(apiKey, scenario.id);
    try {
      for (const turn of scenario.turns) {
        const result = await harness.sendUserTurn(turn);
        expect(result.text.length).toBeGreaterThan(0);
        expect(result.assistantAudioBytes).toBeGreaterThan(1200);
      }

      const events = await harness.runtime.listEvents(harness.conversationId);
      expect(events.some((event) => event.type === "voice.transcript.committed")).toBe(true);
      expect(events.some((event) => event.type === "ui.prompted")).toBe(false);
      scenario.assertGoal(events);
    } finally {
      harness.socket.close(1000, "scenario complete");
    }
  }, 300_000);
});

async function createVoiceHarness(apiKey: string, scenarioId: string) {
  const tempDir = await mkdtemp(join(tmpdir(), `cognidesk-voice-${scenarioId}-`));
  const config = createVoiceTestConfig();
  const knowledgeIndex = await loadFlightKnowledgeIndex(resolveFlightDemoPath(config.storage.knowledgeIndexPath));
  const { agent, models, journeyIndex } = await createFlightDemoRuntimeParts({
    config,
    knowledgeIndex: {
      ...knowledgeIndex,
      embeddingProvider: "openai.embedding",
      embeddingModel: config.models.roles.journeyEmbedding,
    },
  });
  const runtime = createRuntime({
    storage: createSqliteStorage({ filename: join(tempDir, "voice.sqlite") }),
    agent,
    models,
    journeyIndex,
    topKJourneys: 3,
    streaming: {
      syntheticDeltas: true,
    },
  });
  await runtime.initialize();

  const provider = createOpenAIVoiceProvider({
    apiKey,
    voice: process.env.COGNIDESK_VOICE_TEST_AGENT_VOICE ?? "alloy",
  });
  const started = await runtime.startVoiceConversation({
    agentId: agent.id,
    context: { scenarioId },
  });
  const store = createInMemoryVoiceSessionStore();
  const created = await store.createSession({
    result: started,
    tokenTtlMs: 60_000,
  });
  const socket = new HarnessSocket();
  await handleVoiceSocket({
    socket,
    connectionId: started.connection.id,
    token: created.socket.token,
    store,
    runtime,
    provider,
    ...(agent.voice ? { profile: agent.voice } : {}),
    inputTranscriptDebounceMs: Number(process.env.COGNIDESK_VOICE_TEST_TRANSCRIPT_DEBOUNCE_MS ?? 1_000),
  });
  await socket.waitFor("cognidesk.connection.ready");

  let sequence = 0;
  return {
    runtime,
    socket,
    conversationId: started.conversation.id,
    async sendUserTurn(text: string) {
      const fromIndex = socket.sent.length;
      const chunks = await synthesizeUserSpeech(apiKey, text);
      for (const chunk of chunks) {
        sequence += 1;
        socket.receive({
          type: "input_audio_buffer.append",
          audio: chunk,
          sequence,
        });
        await sleep(audioChunkDurationMs(chunk));
      }
      for (const chunk of silenceChunks(700)) {
        sequence += 1;
        socket.receive({
          type: "input_audio_buffer.append",
          audio: chunk,
          sequence,
        });
        await sleep(audioChunkDurationMs(chunk));
      }
      const completed = await socket.waitFor("cognidesk.turn.completed", fromIndex, 160_000);
      await socket.waitFor("response.output_audio.delta", fromIndex, 160_000);
      await socket.waitFor("response.output_audio.done", fromIndex, 160_000);
      const assistantAudioBytes = socket.sent
        .slice(fromIndex)
        .filter((event): event is Extract<VoiceBrowserServerEvent, { type: "response.output_audio.delta" }> =>
          event.type === "response.output_audio.delta"
        )
        .reduce((total, event) => total + base64ByteLength(event.delta), 0);
      return {
        text: typeof completed.text === "string" ? completed.text : "",
        assistantAudioBytes,
      };
    },
  };
}

async function synthesizeUserSpeech(apiKey: string, text: string) {
  const client = new OpenAI({ apiKey });
  const socket = await OpenAIRealtimeWS.create(client, { model: REALTIME_MODEL });
  await waitForRealtimeOpen(socket);
  const chunks: string[] = [];
  try {
    return await new Promise<string[]>((resolve, reject) => {
      const timeout = setTimeout(() => reject(new Error(`Timed out synthesizing user speech: ${text}`)), 90_000);
      const settle = (run: () => void) => {
        clearTimeout(timeout);
        run();
      };
      socket.on("event", (event: RealtimeServerEvent) => {
        if (event.type === "response.output_audio.delta") chunks.push(event.delta);
        if (event.type === "response.done") {
          settle(() => resolve(chunks));
        }
        if (event.type === "error") {
          settle(() => reject(new Error(event.error.message)));
        }
      });
      socket.on("error", (error) => {
        settle(() => reject(error instanceof Error ? error : new Error("Realtime user simulator failed.")));
      });
      socket.send({
        type: "session.update",
        session: {
          type: "realtime",
          model: REALTIME_MODEL,
          output_modalities: ["audio"],
          audio: {
            output: {
              format: { type: "audio/pcm", rate: 24000 },
              voice: process.env.COGNIDESK_VOICE_TEST_USER_VOICE ?? "verse",
            },
          },
          instructions: "You are a user simulator. Read supplied user utterances exactly and naturally. Do not add words.",
        },
      } satisfies RealtimeClientEvent);
      socket.send({
        type: "response.create",
        response: {
          conversation: "none",
          output_modalities: ["audio"],
          input: [{
            type: "message",
            role: "user",
            content: [{
              type: "input_text",
              text: `Read this user utterance exactly, with no added words:\n\n${text}`,
            }],
          }],
          instructions: "Speak exactly the supplied utterance and then stop.",
        },
      } satisfies RealtimeClientEvent);
    });
  } finally {
    socket.close({ code: 1000, reason: "user simulator complete" });
  }
}

async function waitForRealtimeOpen(socket: OpenAIRealtimeWS) {
  if (socket.socket.readyState === socket.socket.OPEN) return;
  await new Promise<void>((resolve, reject) => {
    const cleanup = () => {
      socket.socket.off("open", onOpen);
      socket.socket.off("error", onError);
    };
    const onOpen = () => {
      cleanup();
      resolve();
    };
    const onError = (error: Error) => {
      cleanup();
      reject(error);
    };
    socket.socket.once("open", onOpen);
    socket.socket.once("error", onError);
  });
}

class HarnessSocket implements VoiceSocketLike {
  sent: VoiceBrowserServerEvent[] = [];
  private messageListeners: Array<(data: string) => void> = [];
  private closeListeners: Array<(code?: number, reason?: string) => void> = [];
  private waiters: Array<{
    type: string;
    fromIndex: number;
    resolve(event: VoiceBrowserServerEvent): void;
    reject(error: Error): void;
    timeout: ReturnType<typeof setTimeout>;
  }> = [];

  send(data: string) {
    const event = JSON.parse(data) as VoiceBrowserServerEvent;
    this.sent.push(event);
    this.flushWaiters();
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
    }
  }

  receive(event: VoiceBrowserClientEvent) {
    for (const listener of this.messageListeners) listener(JSON.stringify(event));
  }

  waitFor(type: string, fromIndex = 0, timeoutMs = 30_000) {
    const existing = this.sent.slice(fromIndex).find((event) => event.type === type);
    if (existing) return Promise.resolve(existing);
    return new Promise<VoiceBrowserServerEvent>((resolve, reject) => {
      const waiter = {
        type,
        fromIndex,
        resolve,
        reject,
        timeout: setTimeout(() => {
          this.waiters = this.waiters.filter((candidate) => candidate !== waiter);
          reject(new Error(`Timed out waiting for voice socket event '${type}'.`));
        }, timeoutMs),
      };
      this.waiters.push(waiter);
    });
  }

  private flushWaiters() {
    for (const waiter of [...this.waiters]) {
      const event = this.sent.slice(waiter.fromIndex).find((candidate) => candidate.type === waiter.type);
      if (!event) continue;
      clearTimeout(waiter.timeout);
      this.waiters = this.waiters.filter((candidate) => candidate !== waiter);
      waiter.resolve(event);
    }
  }
}

function createVoiceTestConfig(): FlightDemoConfig {
  const textModel = process.env.COGNIDESK_VOICE_TEST_TEXT_MODEL ?? "gpt-5.4-mini";
  return {
    models: {
      provider: "openai",
      apiKeyEnv: "OPENAI_API_KEY",
      roles: {
        response: textModel,
        compaction: textModel,
        matcher: textModel,
        extraction: textModel,
        citationPostProcessing: textModel,
        journeyEmbedding: process.env.COGNIDESK_VOICE_TEST_EMBEDDING_MODEL ?? "text-embedding-3-small",
      },
    },
    voice: {
      provider: "openai",
      apiKeyEnv: "OPENAI_API_KEY",
      voice: process.env.COGNIDESK_VOICE_TEST_AGENT_VOICE ?? "alloy",
    },
    storage: {
      sqlitePath: ".data/voice-user-simulator.sqlite",
      knowledgeIndexPath: resolveFlightDemoPath(".data/knowledge-index.json"),
    },
  };
}

function loadOpenAIKey() {
  loadFlightDemoEnv();
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) throw new Error("OPENAI_API_KEY is required for the opt-in voice user-simulator suite.");
  return apiKey;
}

function hasJourneyActivated(events: RuntimeEvent[], journeyId: string) {
  return events.some((event) =>
    event.type === "journey.activated" && event.data.journeyId === journeyId
  );
}

function hasJourneyCompleted(events: RuntimeEvent[], journeyId: string) {
  return events.some((event) =>
    event.type === "journey.completed" && event.data.journeyId === journeyId
  );
}

function hasSuccessfulTool(events: RuntimeEvent[], toolName: string) {
  return events.some((event) =>
    event.type === "tool.completed"
    && event.data.toolName === toolName
    && event.data.success
  );
}

function base64ByteLength(value: string) {
  const padding = value.endsWith("==") ? 2 : value.endsWith("=") ? 1 : 0;
  return Math.floor((value.length * 3) / 4) - padding;
}

function audioChunkDurationMs(value: string) {
  return Math.max(12, Math.min(120, Math.round((base64ByteLength(value) / 48_000) * 1000)));
}

function silenceChunks(durationMs: number) {
  const chunkMs = 20;
  const chunk = Buffer.alloc(960).toString("base64");
  return Array.from({ length: Math.ceil(durationMs / chunkMs) }, () => chunk);
}

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
