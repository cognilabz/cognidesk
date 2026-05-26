import { describe, expect, it } from "vitest";
import { z } from "zod";
import {
  action,
  buildJourneyIndex,
  createAgent,
  createRuntime,
  customRuntimeEvent,
  endConversationTool,
  handoffTool,
  journeyContextViewerTool,
  knowledgeSource,
  textInputWidget,
  tool,
  widgetPrompt,
} from "../../src/index.js";
import type {
  AgentModelSet,
  ConversationLifecycle,
  ConversationRecord,
  CreateConversationInput,
  ListEventsOptions,
  TextGenerationInput,
  TraceEvent,
  RuntimeEvent,
  RuntimeEventInput,
  RuntimeSnapshot,
  StorageAdapter,
} from "../../src/index.js";

import { AbortError, RecordingStorage, createModels, deferred, vectorForMatcherTest } from "./fixtures.js";

describe("runtime delegation, privacy, and compaction 01", () => {
  it("completes delegation journeys when completion criteria are satisfied", async () => {
    let completionPrompt = "";
    const agentBuilder = createAgent("flight-service", {
      instructions: "Help customers with flights.",
    });
    agentBuilder.delegationJourney("human-handoff", {
      condition: "Customer asks for a human specialist",
      specialist: {
        goal: "Collect a concise handoff summary and stop automated troubleshooting.",
        instructions: "Ask only for missing handoff details.",
      },
      completeWhen: ["booking reference is known", "issue summary is known"],
    });
    const agent = agentBuilder.compile();
    const models = createModels({
      response: {
        provider: "test",
        model: "response",
        generateText: async () => ({ text: "I have the booking reference and issue summary ready." }),
      },
      matcher: {
        provider: "test",
        model: "matcher",
        generateText: async ({ messages }) => {
          const prompt = messages.map((message) => message.content).join("\n");
          if (prompt.includes("Rank only the provided candidate journeys")) {
            const structured = {
              candidates: [{ journeyId: "human-handoff", confidence: 0.9 }],
            };
            return { text: JSON.stringify(structured), structured };
          }
          completionPrompt = prompt;
          const structured = { complete: true, reason: "All handoff details are known." };
          return { text: JSON.stringify(structured), structured };
        },
      },
    });
    const journeyIndex = await buildJourneyIndex(agent, { embeddingModel: models.journeyEmbedding });
    const runtime = createRuntime({ storage: new RecordingStorage(), agent, models, journeyIndex });
    const conversation = await runtime.createConversation({ agentId: agent.id, context: {} });

    const result = await runtime.handleUserMessage({
      conversationId: conversation.id,
      text: "I need a human for booking ABC123 because the ticket name is wrong.",
    });

    expect(result.activeJourneyId).toBeUndefined();
    expect(result.snapshot.activeJourneyId).toBeUndefined();
    expect(result.snapshot.activeStateIds).toEqual([]);
    expect(completionPrompt).toContain("Completion criteria: booking reference is known; issue summary is known");
    expect(completionPrompt).toContain("assistant: I have the booking reference and issue summary ready.");
    expect((await runtime.listEvents(conversation.id)).at(-1)).toMatchObject({
      type: "journey.completed",
      data: {
        journeyId: "human-handoff",
        reason: "All handoff details are known.",
      },
    });
  });

  it("applies privacy hooks before storage, model calls, and returned assistant text", async () => {
    let modelPrompt = "";
    const response = {
      provider: "test",
      model: "response",
      generateText: async ({ messages }: { messages: Array<{ content: string }> }) => {
        modelPrompt = messages.map((message) => message.content).join("\n");
        return { text: "Reach phil@example.com for details." };
      },
    };
    const embedding = {
      provider: "test",
      model: "embedding",
      generateText: response.generateText,
      embed: async () => ({ embedding: [0], model: "embedding", dimensions: 1 }),
    };
    const agent = createAgent("flight-service", { instructions: "Help customers with flights." }).compile();
    const runtime = createRuntime({
      storage: new RecordingStorage(),
      agent,
      models: {
        response,
        matcher: response,
        extraction: response,
        citationPostProcessing: response,
        journeyEmbedding: embedding,
        compaction: response,
      },
      privacy: {
        redactUserMessage: ({ text }) => text.replace("phil@example.com", "[email]"),
        redactModelMessages: ({ messages }) => messages.map((message) => ({
          ...message,
          content: message.content.replace("secret", "[secret]"),
        })),
        redactAssistantMessage: ({ text }) => text.replace("phil@example.com", "[email]"),
      },
    });

    const conversation = await runtime.createConversation({ agentId: agent.id, context: {} });
    const result = await runtime.handleUserMessage({
      conversationId: conversation.id,
      text: "My email is phil@example.com and the code is secret.",
    });
    const events = await runtime.listEvents(conversation.id);

    expect(events.find((event) => event.type === "message.completed")?.data).toEqual({
      text: "My email is [email] and the code is secret.",
    });
    expect(modelPrompt).toContain("[email]");
    expect(modelPrompt).toContain("[secret]");
    expect(result.text).toBe("Reach [email] for details.");
    expect(events.at(-1)?.data).toMatchObject({ text: "Reach [email] for details." });
  });

  it("compacts conversation events into the runtime snapshot", async () => {
    const response = {
      provider: "test",
      model: "response",
      generateText: async ({ role }: { role: string }) => {
        if (role === "compaction") {
          const structured = {
            summary: "Customer asked about ticket status.",
            stableFacts: ["Booking reference ABC123"],
            openQuestions: [],
            activeCommitments: ["Check ticket status"],
          };
          return { text: JSON.stringify(structured), structured };
        }
        return { text: "Ticket ABC123 is confirmed." };
      },
    };
    const embedding = {
      provider: "test",
      model: "embedding",
      generateText: response.generateText,
      embed: async () => ({ embedding: [0], model: "embedding", dimensions: 1 }),
    };
    const agent = createAgent("flight-service", { instructions: "Help customers with flights." }).compile();
    const runtime = createRuntime({
      storage: new RecordingStorage(),
      agent,
      models: {
        response,
        matcher: response,
        extraction: response,
        citationPostProcessing: response,
        journeyEmbedding: embedding,
        compaction: response,
      },
    });
    const conversation = await runtime.createConversation({ agentId: agent.id, context: {} });
    await runtime.handleUserMessage({ conversationId: conversation.id, text: "Status for ABC123?" });

    const result = await runtime.compactConversation({ conversationId: conversation.id });
    const snapshot = await runtime.getSnapshot(conversation.id);

    expect(result.summary.stableFacts).toEqual(["Booking reference ABC123"]);
    expect(snapshot?.compactionSummary).toEqual(result.summary);
    expect(result.events.map((event) => event.type)).toEqual([
      "conversation.compaction.started",
      "conversation.compaction.completed",
    ]);
  });

  it("supports custom compaction instructions and summary schema", async () => {
    let compactionPrompt = "";
    const customSummarySchema = z.object({
      handoffSummary: z.string(),
      riskLevel: z.enum(["low", "medium", "high"]),
    });
    const response = {
      provider: "test",
      model: "response",
      generateText: async ({ role, messages }: TextGenerationInput) => {
        if (role === "compaction") {
          compactionPrompt = messages.find((message) => message.role === "system")?.content ?? "";
          const structured = {
            handoffSummary: "Customer asked for a status check.",
            riskLevel: "low" as const,
          };
          return { text: JSON.stringify(structured), structured };
        }
        return { text: "Ticket ABC123 is confirmed." };
      },
    };
    const embedding = {
      provider: "test",
      model: "embedding",
      generateText: response.generateText,
      embed: async () => ({ embedding: [0], model: "embedding", dimensions: 1 }),
    };
    const agent = createAgent("flight-service", { instructions: "Help customers with flights." }).compile();
    const runtime = createRuntime({
      storage: new RecordingStorage(),
      agent,
      models: {
        response,
        matcher: response,
        extraction: response,
        citationPostProcessing: response,
        journeyEmbedding: embedding,
        compaction: response,
      },
      compaction: {
        instructions: "Create a handoff-focused support memory.",
        summarySchema: customSummarySchema,
      },
    });
    const conversation = await runtime.createConversation({ agentId: agent.id, context: {} });
    await runtime.handleUserMessage({ conversationId: conversation.id, text: "Status for ABC123?" });

    const result = await runtime.compactConversation<z.infer<typeof customSummarySchema>>({
      conversationId: conversation.id,
    });

    expect(compactionPrompt).toBe("Create a handoff-focused support memory.");
    expect(result.summary.riskLevel).toBe("low");
    expect((await runtime.getSnapshot(conversation.id))?.compactionSummary).toEqual({
      handoffSummary: "Customer asked for a status check.",
      riskLevel: "low",
    });
  });
});
