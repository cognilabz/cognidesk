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
      },
    });
    expect(missing.status).toBe(404);
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
    data: { text: "Hello from the runtime." },
  };
}
