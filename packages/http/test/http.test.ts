import { describe, expect, it } from "vitest";
import { createCognideskHttpHandler, type CognideskHttpRuntime } from "../src/index.js";
import type {
  ConversationRecord,
  CreateRuntimeConversationInput,
  HandleUserMessageInput,
  HandleUserMessageResult,
  RequestHandoffInput,
  ResumeConversationInput,
  RuntimeEvent,
  RuntimeSnapshot,
  SubmitWidgetInput,
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

  it("posts widget submissions to the runtime", async () => {
    const runtime = new FakeRuntime();
    const handler = createCognideskHttpHandler({ runtime, agentId: "flight-service" });

    const response = await handler.handle(new Request("http://localhost/conversations/conversation_1/widgets/prompt_1/submissions", {
      method: "POST",
      body: JSON.stringify({ widgetKind: "confirmation", output: { confirmed: true } }),
    }));
    const body = await response.json() as { event: RuntimeEvent };

    expect(response.status).toBe(200);
    expect(body.event.type).toBe("ui.submitted");
    expect(body.event.data).toEqual({
      promptId: "prompt_1",
      widgetKind: "confirmation",
      output: { confirmed: true },
    });
  });

  it("requests handoff through the runtime", async () => {
    const runtime = new FakeRuntime();
    const handler = createCognideskHttpHandler({ runtime, agentId: "flight-service" });

    const response = await handler.handle(new Request("http://localhost/conversations/conversation_1/handoff", {
      method: "POST",
      body: JSON.stringify({
        reason: "Customer wants a person",
        summary: "Ticket exception review.",
      }),
    }));
    const body = await response.json() as { conversation: ConversationRecord; event: RuntimeEvent };

    expect(response.status).toBe(200);
    expect(body.conversation.lifecycle).toBe("handoff");
    expect(body.event.type).toBe("handoff.requested");
    expect(body.event.data).toEqual({
      reason: "Customer wants a person",
      summary: "Ticket exception review.",
    });
  });

  it("resumes handoff through the runtime", async () => {
    const runtime = new FakeRuntime();
    const handler = createCognideskHttpHandler({ runtime, agentId: "flight-service" });

    const response = await handler.handle(new Request("http://localhost/conversations/conversation_1/resume", {
      method: "POST",
      body: JSON.stringify({
        reason: "Human review finished",
        payload: { ticketId: "T-1" },
      }),
    }));
    const body = await response.json() as { conversation: ConversationRecord; event: RuntimeEvent };

    expect(response.status).toBe(200);
    expect(body.conversation.lifecycle).toBe("active");
    expect(body.event.type).toBe("handoff.resumed");
    expect(body.event.data).toEqual({
      reason: "Human review finished",
      payload: { ticketId: "T-1" },
    });
  });

  it("exposes lifecycle, intermediate message, compaction, and snapshot controls", async () => {
    const runtime = new FakeRuntime();
    const handler = createCognideskHttpHandler({ runtime, agentId: "flight-service" });

    const intermediateResponse = await handler.handle(new Request("http://localhost/conversations/conversation_1/intermediate-messages", {
      method: "POST",
      body: JSON.stringify({ text: "Still checking.", traceId: "trace_1" }),
    }));
    const intermediate = await intermediateResponse.json() as { events: RuntimeEvent[] };

    const compactResponse = await handler.handle(new Request("http://localhost/conversations/conversation_1/compact", {
      method: "POST",
      body: JSON.stringify({ fromOffset: 1, toOffset: 3, schemaVersion: "test.v1" }),
    }));
    const compacted = await compactResponse.json() as { summary: unknown; snapshot: RuntimeSnapshot; events: RuntimeEvent[] };

    const snapshotResponse = await handler.handle(new Request("http://localhost/conversations/conversation_1/snapshot"));
    const snapshotBody = await snapshotResponse.json() as { snapshot: RuntimeSnapshot | null };

    const closeResponse = await handler.handle(new Request("http://localhost/conversations/conversation_1/close", {
      method: "POST",
      body: JSON.stringify({ reason: "Resolved" }),
    }));
    const closed = await closeResponse.json() as { conversation: ConversationRecord };

    expect(intermediateResponse.status).toBe(200);
    expect(intermediate.events.map((event) => event.type)).toEqual(["message.started", "message.completed"]);
    expect(compactResponse.status).toBe(200);
    expect(compacted.summary).toEqual({ summary: "Compacted." });
    expect(snapshotResponse.status).toBe(200);
    expect(snapshotBody.snapshot?.compactionSummary).toEqual({ summary: "Compacted." });
    expect(closeResponse.status).toBe(200);
    expect(closed.conversation.lifecycle).toBe("closed");
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

  async submitWidget(input: SubmitWidgetInput): Promise<RuntimeEvent> {
    const event = {
      id: `event_${this.events.length + 1}`,
      conversationId: input.conversationId,
      offset: this.events.length + 1,
      type: "ui.submitted",
      createdAt: "2026-05-25T00:00:00.000Z",
      data: {
        promptId: input.promptId,
        widgetKind: input.widgetKind,
        output: input.output,
      },
    } satisfies RuntimeEvent;
    this.events.push(event);
    return event;
  }

  async requestHandoff(input: RequestHandoffInput): Promise<{ conversation: ConversationRecord; event: RuntimeEvent }> {
    const conversation = {
      ...await this.createConversation({ agentId: "flight-service", context: {} }),
      lifecycle: "handoff" as const,
    };
    const event = {
      id: `event_${this.events.length + 1}`,
      conversationId: input.conversationId,
      offset: this.events.length + 1,
      type: "handoff.requested",
      createdAt: "2026-05-25T00:00:00.000Z",
      data: {
        reason: input.reason,
        ...(input.summary ? { summary: input.summary } : {}),
        ...(input.payload !== undefined ? { payload: input.payload } : {}),
      },
    } satisfies RuntimeEvent;
    this.events.push(event);
    return { conversation, event };
  }

  async resumeConversation(input: ResumeConversationInput): Promise<{ conversation: ConversationRecord; event: RuntimeEvent }> {
    const conversation = {
      ...await this.createConversation({ agentId: "flight-service", context: {} }),
      lifecycle: "active" as const,
    };
    const event = {
      id: `event_${this.events.length + 1}`,
      conversationId: input.conversationId,
      offset: this.events.length + 1,
      type: "handoff.resumed",
      createdAt: "2026-05-25T00:00:00.000Z",
      data: {
        ...(input.reason ? { reason: input.reason } : {}),
        ...(input.payload !== undefined ? { payload: input.payload } : {}),
      },
    } satisfies RuntimeEvent;
    this.events.push(event);
    return { conversation, event };
  }

  async closeConversation(conversationId: string, reason?: string): Promise<ConversationRecord> {
    const event = {
      id: `event_${this.events.length + 1}`,
      conversationId,
      offset: this.events.length + 1,
      type: "conversation.closed",
      createdAt: "2026-05-25T00:00:00.000Z",
      data: reason ? { reason } : {},
    } satisfies RuntimeEvent;
    this.events.push(event);
    return {
      ...await this.createConversation({ agentId: "flight-service", context: {} }),
      lifecycle: "closed" as const,
    };
  }

  async emitIntermediateMessage(input: { conversationId: string; text: string; traceId?: string }): Promise<{ events: RuntimeEvent[] }> {
    const started = {
      id: `event_${this.events.length + 1}`,
      conversationId: input.conversationId,
      offset: this.events.length + 1,
      type: "message.started",
      createdAt: "2026-05-25T00:00:00.000Z",
      data: { role: "assistant" as const },
      ...(input.traceId ? { traceId: input.traceId } : {}),
    } satisfies RuntimeEvent;
    const completed = {
      id: `event_${this.events.length + 2}`,
      conversationId: input.conversationId,
      offset: this.events.length + 2,
      type: "message.completed",
      createdAt: "2026-05-25T00:00:00.000Z",
      data: { text: input.text, intermediate: true },
      ...(input.traceId ? { traceId: input.traceId } : {}),
    } satisfies RuntimeEvent;
    this.events.push(started, completed);
    return { events: [started, completed] };
  }

  async compactConversation(input: { conversationId: string; fromOffset?: number; toOffset?: number; schemaVersion?: string }) {
    const snapshot = {
      conversationId: input.conversationId,
      lifecycle: "active" as const,
      activeStateIds: [],
      compactionSummary: { summary: "Compacted." },
      updatedAt: "2026-05-25T00:00:00.000Z",
    } satisfies RuntimeSnapshot;
    this.snapshot = snapshot;
    const started = {
      id: `event_${this.events.length + 1}`,
      conversationId: input.conversationId,
      offset: this.events.length + 1,
      type: "conversation.compaction.started",
      createdAt: "2026-05-25T00:00:00.000Z",
      data: { fromOffset: input.fromOffset ?? 1, toOffset: input.toOffset ?? this.events.length },
    } satisfies RuntimeEvent;
    const completed = {
      id: `event_${this.events.length + 2}`,
      conversationId: input.conversationId,
      offset: this.events.length + 2,
      type: "conversation.compaction.completed",
      createdAt: "2026-05-25T00:00:00.000Z",
      data: {
        fromOffset: input.fromOffset ?? 1,
        toOffset: input.toOffset ?? this.events.length,
        schemaVersion: input.schemaVersion ?? "test.v1",
      },
    } satisfies RuntimeEvent;
    this.events.push(started, completed);
    return { summary: { summary: "Compacted." }, snapshot, events: [started, completed] };
  }

  async getSnapshot(_conversationId: string): Promise<RuntimeSnapshot | null> {
    return this.snapshot;
  }

  private snapshot: RuntimeSnapshot | null = null;
}
