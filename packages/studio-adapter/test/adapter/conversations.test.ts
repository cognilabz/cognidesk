import type { ConversationRecord, RuntimeEvent } from "@cognidesk/core";
import { createAgent, createCognideskStudioAdapter, describe, expect, it } from "./helpers.js";

describe("studio adapter conversations", () => {
  it("uses the requested conversation limit up to 1000", async () => {
    const agent = createAgent("test-agent", {
      instructions: "Test agent instructions",
    }).compile();
    let requestedLimit = 0;
    const adapter = createCognideskStudioAdapter({
      targetId: "test-target",
      agent,
      allowUnauthenticated: true,
      runtime: {
        async listEvents() {
          return [];
        },
      },
      conversations: {
        async listConversations(input) {
          requestedLimit = input.limit;
          return [];
        },
      },
    });

    const response = await adapter.handle(new Request("http://local/api/studio/conversations?limit=1000"));

    expect(response.status).toBe(200);
    expect(requestedLimit).toBe(1000);
  });

  it("serves a single summarized conversation by id", async () => {
    const agent = createAgent("test-agent", {
      instructions: "Test agent instructions",
    }).compile();
    const conversation = conversationRecord("conversation_direct");
    const adapter = createCognideskStudioAdapter({
      targetId: "test-target",
      agent,
      allowUnauthenticated: true,
      runtime: {
        async listEvents(conversationId) {
          return [runtimeEvent(conversationId)];
        },
        async getSnapshot(conversationId) {
          return {
            conversationId,
            lifecycle: "active",
            activeJourneyId: "baggage-service",
            activeStateIds: ["collectDetails"],
            updatedAt: "2026-06-26T08:05:00.000Z",
          };
        },
      },
      conversations: {
        async getConversation(conversationId) {
          return conversationId === conversation.id ? conversation : null;
        },
      },
    });

    const response = await adapter.handle(new Request("http://local/api/studio/conversations/conversation_direct"));
    const missing = await adapter.handle(new Request("http://local/api/studio/conversations/missing"));

    expect(response.status).toBe(200);
    expect(await response.json()).toMatchObject({
      conversation: {
        id: "conversation_direct",
        agentId: "test-agent",
        lifecycle: "active",
        activeJourneyId: "baggage-service",
        activeStateIds: ["collectDetails"],
        eventCount: 1,
        traceIds: ["trace_direct"],
        tokenUsage: {
          inputTokens: 20,
          outputTokens: 8,
          cachedInputTokens: 3,
          reasoningTokens: 2,
          totalTokens: 28,
        },
      },
    });
    expect(missing.status).toBe(404);
  });

  it("prefers provider totalTokens when aggregating conversation token usage", async () => {
    const agent = createAgent("test-agent", {
      instructions: "Test agent instructions",
    }).compile();
    const conversation = conversationRecord("conversation_usage");
    const adapter = createCognideskStudioAdapter({
      targetId: "test-target",
      agent,
      allowUnauthenticated: true,
      runtime: {
        async listEvents(conversationId) {
          return [
            runtimeEvent(conversationId),
            {
              ...runtimeEvent(conversationId),
              id: "event_usage_generated",
              offset: 2,
              type: "message.generated",
              data: {
                textLength: 48,
                usage: {
                  inputTokens: 10,
                  outputTokens: 5,
                  totalTokens: 20,
                },
              },
            },
          ];
        },
      },
      conversations: {
        async getConversation(conversationId) {
          return conversationId === conversation.id ? conversation : null;
        },
      },
    });

    const response = await adapter.handle(new Request("http://local/api/studio/conversations/conversation_usage"));

    expect(response.status).toBe(200);
    expect(await response.json()).toMatchObject({
      conversation: {
        id: "conversation_usage",
        eventCount: 2,
        tokenUsage: {
          inputTokens: 30,
          outputTokens: 13,
          cachedInputTokens: 3,
          reasoningTokens: 2,
          totalTokens: 48,
        },
      },
    });
  });

  it("omits tokenUsage from the summary when no events carry usage data", async () => {
    const agent = createAgent("test-agent", {
      instructions: "Test agent instructions",
    }).compile();
    const conversation = conversationRecord("conversation_no_usage");
    const adapter = createCognideskStudioAdapter({
      targetId: "test-target",
      agent,
      allowUnauthenticated: true,
      runtime: {
        async listEvents() {
          return [];
        },
      },
      conversations: {
        async getConversation(conversationId) {
          return conversationId === conversation.id ? conversation : null;
        },
      },
    });

    const response = await adapter.handle(
      new Request("http://local/api/studio/conversations/conversation_no_usage"),
    );

    expect(response.status).toBe(200);
    const body = await response.json() as { conversation: Record<string, unknown> };
    expect(body.conversation).not.toHaveProperty("tokenUsage");
  });

  it("ignores non-usage event types when aggregating token usage", async () => {
    const agent = createAgent("test-agent", {
      instructions: "Test agent instructions",
    }).compile();
    const conversation = conversationRecord("conversation_mixed_events");
    const adapter = createCognideskStudioAdapter({
      targetId: "test-target",
      agent,
      allowUnauthenticated: true,
      runtime: {
        async listEvents(conversationId): Promise<RuntimeEvent[]> {
          return [
            {
              id: "event_started",
              conversationId,
              offset: 1,
              type: "conversation.started",
              createdAt: "2026-06-26T08:00:00.000Z",
              data: {},
            },
            {
              id: "event_tool",
              conversationId,
              offset: 2,
              type: "tool.called",
              createdAt: "2026-06-26T08:01:00.000Z",
              data: { toolName: "search" },
            },
            {
              ...runtimeEvent(conversationId),
              id: "event_completed",
              offset: 3,
              data: {
                text: "Result.",
                usage: { inputTokens: 5, outputTokens: 3 },
              },
            },
          ];
        },
      },
      conversations: {
        async getConversation(conversationId) {
          return conversationId === conversation.id ? conversation : null;
        },
      },
    });

    const response = await adapter.handle(
      new Request("http://local/api/studio/conversations/conversation_mixed_events"),
    );

    expect(response.status).toBe(200);
    expect(await response.json()).toMatchObject({
      conversation: {
        id: "conversation_mixed_events",
        eventCount: 3,
        tokenUsage: {
          inputTokens: 5,
          outputTokens: 3,
          totalTokens: 8,
        },
      },
    });
  });

  it("sums token usage across multiple message.completed events", async () => {
    const agent = createAgent("test-agent", {
      instructions: "Test agent instructions",
    }).compile();
    const conversation = conversationRecord("conversation_multi_turn");
    const adapter = createCognideskStudioAdapter({
      targetId: "test-target",
      agent,
      allowUnauthenticated: true,
      runtime: {
        async listEvents(conversationId): Promise<RuntimeEvent[]> {
          return [
            {
              ...runtimeEvent(conversationId),
              id: "event_turn_1",
              offset: 1,
              data: { text: "Turn 1.", usage: { inputTokens: 10, outputTokens: 4, totalTokens: 14 } },
            },
            {
              ...runtimeEvent(conversationId),
              id: "event_turn_2",
              offset: 2,
              data: { text: "Turn 2.", usage: { inputTokens: 15, outputTokens: 6, totalTokens: 21 } },
            },
          ];
        },
      },
      conversations: {
        async getConversation(conversationId) {
          return conversationId === conversation.id ? conversation : null;
        },
      },
    });

    const response = await adapter.handle(
      new Request("http://local/api/studio/conversations/conversation_multi_turn"),
    );

    expect(response.status).toBe(200);
    expect(await response.json()).toMatchObject({
      conversation: {
        tokenUsage: {
          inputTokens: 25,
          outputTokens: 10,
          totalTokens: 35,
        },
      },
    });
  });

  it("falls back to summing inputTokens and outputTokens when totalTokens is absent", async () => {
    const agent = createAgent("test-agent", {
      instructions: "Test agent instructions",
    }).compile();
    const conversation = conversationRecord("conversation_no_total");
    const adapter = createCognideskStudioAdapter({
      targetId: "test-target",
      agent,
      allowUnauthenticated: true,
      runtime: {
        async listEvents(conversationId): Promise<RuntimeEvent[]> {
          return [
            {
              ...runtimeEvent(conversationId),
              id: "event_no_total",
              offset: 1,
              data: { text: "Message.", usage: { inputTokens: 12, outputTokens: 7 } },
            },
          ];
        },
      },
      conversations: {
        async getConversation(conversationId) {
          return conversationId === conversation.id ? conversation : null;
        },
      },
    });

    const response = await adapter.handle(
      new Request("http://local/api/studio/conversations/conversation_no_total"),
    );

    expect(response.status).toBe(200);
    expect(await response.json()).toMatchObject({
      conversation: {
        tokenUsage: {
          inputTokens: 12,
          outputTokens: 7,
          totalTokens: 19,
        },
      },
    });
  });
});

function conversationRecord(id: string): ConversationRecord {
  return {
    id,
    agentId: "test-agent",
    lifecycle: "active",
    context: {},
    createdAt: "2026-06-26T08:00:00.000Z",
    updatedAt: "2026-06-26T08:05:00.000Z",
  };
}

function runtimeEvent(conversationId: string): RuntimeEvent {
  return {
    id: "event_direct",
    conversationId,
    offset: 1,
    type: "message.completed",
    createdAt: "2026-06-26T08:01:00.000Z",
    telemetry: { traceId: "trace_direct" },
    data: {
      text: "Hello from the runtime.",
      usage: {
        inputTokens: 20,
        outputTokens: 8,
        cachedInputTokens: 3,
        reasoningTokens: 2,
      },
    },
  };
}
