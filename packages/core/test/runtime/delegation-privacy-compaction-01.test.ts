import { describe, expect, it } from "vitest";
import { z } from "zod";
import {
  action,
  buildJourneyIndex,
  createAgent,
  defineChannelContext,
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
  RuntimeEvent,
  RuntimeEventInput,
  RuntimeSnapshot,
  StorageAdapter,
} from "../../src/index.js";

import { AbortError, RecordingStorage, createModels, deferred, vectorForMatcherTest } from "./fixtures.js";
import { createPrivacyStorageAdapter } from "../../src/runtime/privacy.js";

describe("runtime delegation, privacy, and compaction 01", () => {
  it("completes delegation journeys when completion criteria are satisfied", async () => {
    let completionPrompt = "";
    const agentBuilder = createAgent("agent_primary", {
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

  it("completes an active delegation journey when an operator resumes bot control", async () => {
    const agentBuilder = createAgent("agent_primary", {
      instructions: "Help customers with flights.",
    });
    agentBuilder.delegationJourney("human-handoff", {
      condition: "Customer asks for a human specialist",
      specialist: {
        goal: "Collect a concise handoff summary and stop automated troubleshooting.",
        instructions: "Ask only for missing handoff details.",
      },
      completeWhen: ["operator returns control to the bot"],
    });
    const agent = agentBuilder.compile();
    const storage = new RecordingStorage();
    const runtime = createRuntime({
      storage,
      agent,
      models: createModels({
        response: {
          provider: "test",
          model: "response",
          generateText: async () => ({ text: "I can continue from here. What is your booking reference?" }),
        },
      }),
    });
    const conversation = await runtime.createConversation({ agentId: agent.id, context: {} });
    await storage.saveSnapshot({
      conversationId: conversation.id,
      lifecycle: "active",
      activeJourneyId: "human-handoff",
      activeStateIds: [],
      updatedAt: "2026-06-20T00:00:00.000Z",
    });

    const result = await runtime.handleChannelEvent({
      conversationId: conversation.id,
      binding: {
        outcome: "resume-existing",
        conversationId: conversation.id,
      },
      event: {
        id: "discord:message_1:bot-resume",
        nature: "operator.resume",
        direction: "internal",
        intent: "operator-resume",
        actor: { type: "operator", displayName: "Michi" },
        channel: defineChannelContext({
          channelId: "discord-support",
          kind: "community",
          provider: "discord",
        }),
        payload: {
          text: "Please ask the customer for their booking reference.",
        },
      },
      handling: {
        disposition: "model-turn",
        text: "Please ask the customer for their booking reference.",
        recordUserMessage: false,
      },
    });

    const events = await runtime.listEvents(conversation.id);
    expect(result.activeJourneyId).toBeUndefined();
    expect(result.snapshot).toBeDefined();
    expect(result.snapshot?.activeJourneyId).toBeUndefined();
    expect(result.text).toBe("I can continue from here. What is your booking reference?");
    expect(events).toContainEqual(expect.objectContaining({
      type: "journey.completed",
      data: {
        journeyId: "human-handoff",
        reason: "operator-resume",
      },
    }));
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
    const agent = createAgent("agent_primary", { instructions: "Help customers with flights." }).compile();
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

  it("applies privacy hooks at runtime persistence and model input surfaces", async () => {
    let modelPrompt = "";
    const auditNote = customRuntimeEvent("audit.note", {
      payload: z.object({ note: z.string() }),
      visibleToModel: true,
    });
    const agentBuilder = createAgent("agent_primary", { instructions: "Help customers with flights." });
    agentBuilder.customEvents.add(auditNote);
    const agent = agentBuilder.compile();
    const runtime = createRuntime({
      storage: new RecordingStorage(),
      agent,
      models: createModels({
        response: {
          provider: "test",
          model: "response",
          generateText: async ({ messages }) => {
            modelPrompt = messages.map((message) => message.content).join("\n");
            return { text: "Done." };
          },
        },
      }),
      privacy: {
        redactConversationContext: ({ context }) => ({
          ...(typeof context === "object" && context !== null ? context : {}),
          secret: "[context]",
        }),
        redactRuntimeEvent: ({ event }) => event.type === "custom.audit.note"
          ? { ...event, data: { note: "[event]" } }
          : event,
        redactRuntimeSnapshot: ({ snapshot }) => ({
          ...snapshot,
          definitionHash: "privacy-redacted",
        }),
        redactModelInput: ({ input }) => ({
          ...input,
          messages: input.messages.map((message) => ({
            ...message,
            content: message.content.replace("model-secret", "[model]"),
          })),
        }),
      },
    });

    const conversation = await runtime.createConversation({
      agentId: agent.id,
      context: { secret: "raw-context" },
    });
    const auditEvent = await runtime.emitCustomEvent({
      conversationId: conversation.id,
      event: auditNote,
      payload: { note: "raw-event" },
    });
    await runtime.handleUserMessage({
      conversationId: conversation.id,
      text: "model-secret",
    });

    expect((await runtime.replayConversation({ conversationId: conversation.id })).conversation.context).toEqual({
      secret: "[context]",
    });
    expect(auditEvent.data).toEqual({ note: "[event]" });
    expect(await runtime.getSnapshot(conversation.id)).toMatchObject({
      definitionHash: "privacy-redacted",
    });
    expect(modelPrompt).toContain("[model]");
    expect(modelPrompt).not.toContain("model-secret");
    expect((await runtime.listEvents(conversation.id)).find((event) => event.type === "custom.audit.note")?.data).toEqual({
      note: "[event]",
    });
  });

  it("applies channel-specific privacy hooks to persisted channel events", async () => {
    const agent = createAgent("agent_primary", { instructions: "Help customers with flights." }).compile();
    const runtime = createRuntime({
      storage: new RecordingStorage(),
      agent,
      models: createModels({
        response: {
          provider: "test",
          model: "response",
          generateText: async () => ({ text: "We will email phil@example.com with details." }),
        },
      }),
      privacy: {
        redactInboundChannelEvent: ({ event }) => ({
          ...event,
          data: {
            ...event.data,
            text: (event.data.text ?? "").replace("card 4111", "[card]"),
            payload: { redacted: "inbound" },
          },
        }),
        redactOutboundChannelMessage: ({ event }) => ({
          ...event,
          data: {
            ...event.data,
            text: (event.data.text ?? "").replace("phil@example.com", "[email]"),
            payload: { redacted: "outbound" },
          },
        }),
      },
    });
    const conversation = await runtime.createConversation({ agentId: agent.id, context: {} });

    const result = await runtime.handleUserMessage({
      conversationId: conversation.id,
      text: "My card 4111 needs help.",
      channel: defineChannelContext({
        channelId: "email.gmail",
        kind: "email",
        provider: "gmail",
      }),
      turn: { providerPayload: "raw-channel-payload" },
    });
    const events = await runtime.listEvents(conversation.id);

    expect(result.text).toBe("We will email phil@example.com with details.");
    expect(events.find((event) => event.type === "message.completed")?.data).toEqual({
      text: "My card 4111 needs help.",
    });
    expect(events.find((event) => event.type === "channel.received")?.data).toMatchObject({
      text: "My [card] needs help.",
      payload: { redacted: "inbound" },
      channel: {
        channelId: "email.gmail",
        kind: "email",
        provider: "gmail",
      },
    });
    expect(events.find((event) => event.type === "channel.sent")?.data).toMatchObject({
      text: "We will email [email] with details.",
      payload: { redacted: "outbound" },
      channel: {
        channelId: "email.gmail",
        kind: "email",
        provider: "gmail",
      },
    });
  });

  it("preserves atomic storage hooks while redacting their events", async () => {
    const storage = new RecordingStorage();
    const conversation = await storage.createConversation({ agentId: "agent_primary", context: {} });
    const wrapped = createPrivacyStorageAdapter(storage, {
      redactRuntimeEvent: ({ event }) => {
        if (event.type === "approval.resolved") {
          const approvalEvent = event as RuntimeEventInput<"approval.resolved">;
          return {
            ...approvalEvent,
            data: {
              ...approvalEvent.data,
              result: "[result]",
            },
          };
        }
        if (event.type === "voice.segment.started") {
          const voiceEvent = event as RuntimeEventInput<"voice.segment.started">;
          return {
            ...voiceEvent,
            data: {
              ...voiceEvent.data,
              provider: "[provider]",
            },
          };
        }
        return event;
      },
    });

    expect(wrapped.appendEventIfApprovalPending).toEqual(expect.any(Function));
    expect(wrapped.appendEventIfNoActiveVoiceSegment).toEqual(expect.any(Function));

    await wrapped.appendEvent({
      conversationId: conversation.id,
      type: "approval.requested",
      data: {
        approvalId: "approval_1",
        toolName: "book-flight",
        input: {},
        supportedResolutions: ["approve"],
      },
    });
    const approvalResolution = await wrapped.appendEventIfApprovalPending?.({
      conversationId: conversation.id,
      type: "approval.resolved",
      data: {
        approvalId: "approval_1",
        resolution: "approve",
        toolName: "book-flight",
        executed: true,
        result: "raw-result",
      },
    });
    const firstVoiceSegment = await wrapped.appendEventIfNoActiveVoiceSegment?.({
      conversationId: conversation.id,
      type: "voice.segment.started",
      data: {
        channelSegmentId: "segment_1",
        connectionId: "connection_1",
        adapter: "test",
        provider: "raw-provider",
      },
    });
    const secondVoiceSegment = await wrapped.appendEventIfNoActiveVoiceSegment?.({
      conversationId: conversation.id,
      type: "voice.segment.started",
      data: {
        channelSegmentId: "segment_2",
        connectionId: "connection_2",
        adapter: "test",
        provider: "raw-provider",
      },
    });
    const events = await storage.listEvents({ conversationId: conversation.id });

    expect(approvalResolution?.data).toMatchObject({ result: "[result]" });
    expect(firstVoiceSegment?.data).toMatchObject({ provider: "[provider]" });
    expect(secondVoiceSegment).toBeNull();
    expect(events.find((event) => event.type === "approval.resolved")?.data).toMatchObject({
      result: "[result]",
    });
    expect(events.find((event) => event.type === "voice.segment.started")?.data).toMatchObject({
      provider: "[provider]",
    });
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
    const agent = createAgent("agent_primary", { instructions: "Help customers with flights." }).compile();
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
    const agent = createAgent("agent_primary", { instructions: "Help customers with flights." }).compile();
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
