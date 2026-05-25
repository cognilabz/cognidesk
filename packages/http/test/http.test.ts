import { describe, expect, it } from "vitest";
import { createCognideskHttpHandler, type CognideskHttpRuntime } from "../src/index.js";
import type {
  ConversationRecord,
  CreateRuntimeConversationInput,
  HandleUserMessageInput,
  HandleUserMessageResult,
  RuntimeEvent,
} from "@cognidesk/core";

describe("HTTP adapter", () => {
  it("creates conversations and posts user messages", async () => {
    const runtime = new FakeRuntime();
    const handler = createCognideskHttpHandler({
      runtime,
      agentId: "flight-service",
      cors: true,
    });

    const createResponse = await handler.handle(new Request("http://localhost/conversations", {
      method: "POST",
      body: JSON.stringify({ context: { locale: "en" } }),
    }));
    expect(createResponse.status).toBe(201);
    expect(createResponse.headers.get("access-control-allow-origin")).toBe("*");
    const created = await createResponse.json() as { conversation: ConversationRecord };
    expect(created.conversation.agentId).toBe("flight-service");

    const messageResponse = await handler.handle(new Request(`http://localhost/conversations/${created.conversation.id}/messages`, {
      method: "POST",
      body: JSON.stringify({ message: "Where is my ticket?" }),
    }));
    expect(messageResponse.status).toBe(200);
    const message = await messageResponse.json() as { text: string; activeJourneyId?: string };
    expect(message.text).toBe("Handled: Where is my ticket?");
    expect(message.activeJourneyId).toBe("ticket-status");
  });

  it("returns event history as JSON and streams SSE events", async () => {
    const runtime = new FakeRuntime();
    const handler = createCognideskHttpHandler({ runtime, agentId: "flight-service" });
    await handler.handle(new Request("http://localhost/conversations", { method: "POST", body: "{}" }));
    await handler.handle(new Request("http://localhost/conversations/conversation_1/messages", {
      method: "POST",
      body: JSON.stringify({ message: "hello" }),
    }));

    const eventsResponse = await handler.handle(new Request("http://localhost/conversations/conversation_1/events?after=0"));
    expect(eventsResponse.status).toBe(200);
    const eventBody = await eventsResponse.json() as { events: RuntimeEvent[] };
    expect(eventBody.events).toHaveLength(1);

    const controller = new AbortController();
    const streamResponse = await handler.handle(new Request("http://localhost/conversations/conversation_1/events/stream?after=0", {
      signal: controller.signal,
    }));
    const reader = streamResponse.body?.getReader();
    expect(reader).toBeDefined();
    const first = await reader!.read();
    const second = await reader!.read();
    controller.abort();

    const decoded = `${new TextDecoder().decode(first.value)}${new TextDecoder().decode(second.value)}`;
    expect(decoded).toContain(": cognidesk stream ready");
    expect(decoded).toContain("event: event");
    expect(decoded).toContain("message.completed");
  });
});

class FakeRuntime implements CognideskHttpRuntime {
  private events: RuntimeEvent[] = [];

  async createConversation(_input: CreateRuntimeConversationInput): Promise<ConversationRecord> {
    return {
      id: "conversation_1",
      agentId: "flight-service",
      lifecycle: "active",
      context: {},
      createdAt: "2026-05-25T00:00:00.000Z",
      updatedAt: "2026-05-25T00:00:00.000Z",
    };
  }

  async handleUserMessage(input: HandleUserMessageInput): Promise<HandleUserMessageResult> {
    const event = {
      id: `event_${this.events.length + 1}`,
      conversationId: input.conversationId,
      offset: this.events.length + 1,
      type: "message.completed",
      createdAt: "2026-05-25T00:00:00.000Z",
      data: { text: `Handled: ${input.text}` },
    } satisfies RuntimeEvent;
    this.events.push(event);
    return {
      conversation: await this.createConversation({ agentId: "flight-service", context: {} }),
      snapshot: {
        conversationId: input.conversationId,
        lifecycle: "active" as const,
        activeJourneyId: "ticket-status",
        activeStateIds: ["identifyTicket"],
        updatedAt: "2026-05-25T00:00:00.000Z",
      },
      events: [event],
      text: `Handled: ${input.text}`,
      activeJourneyId: "ticket-status",
    };
  }

  async listEvents(_conversationId: string, afterOffset = 0) {
    return this.events.filter((event) => event.offset > afterOffset);
  }
}
