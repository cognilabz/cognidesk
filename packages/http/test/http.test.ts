import { describe, expect, it } from "vitest";
import { createCognideskHttpHandler, type CognideskHttpRuntime } from "../src/index.js";
import type {
  ConversationRecord,
  CreateRuntimeConversationInput,
  CustomRuntimeEventDefinition,
  HandleUserMessageInput,
  HandleUserMessageResult,
  JourneyEventDefinition,
  RequestHandoffInput,
  ReplayConversationInput,
  ReplayConversationResult,
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

  it("posts custom and journey events to the runtime", async () => {
    const runtime = new FakeRuntime();
    const payload = { parse: (value: unknown) => value };
    const leadCaptured = {
      kind: "customRuntimeEvent",
      name: "lead.captured",
      payload,
      visibleToModel: true,
    } as unknown as CustomRuntimeEventDefinition;
    const ticketSynced = {
      kind: "journeyEvent",
      name: "ticket.synced",
      payload,
      routing: "targeted",
    } as unknown as JourneyEventDefinition;
    const handler = createCognideskHttpHandler({
      runtime,
      agentId: "flight-service",
      customEvents: [leadCaptured],
      journeyEvents: [ticketSynced],
    });

    const customResponse = await handler.handle(new Request("http://localhost/conversations/conversation_1/custom-events/lead.captured", {
      method: "POST",
      body: JSON.stringify({ payload: { email: "alex@example.com" }, traceId: "trace_1" }),
    }));
    const custom = await customResponse.json() as { event: RuntimeEvent };

    const journeyResponse = await handler.handle(new Request("http://localhost/conversations/conversation_1/journey-events/ticket.synced", {
      method: "POST",
      body: JSON.stringify({
        payload: { bookingReference: "ABC123" },
        target: { journeyId: "ticket-status", stateId: "wait" },
      }),
    }));
    const journey = await journeyResponse.json() as { event: RuntimeEvent; snapshot: RuntimeSnapshot | null; events: RuntimeEvent[] };

    expect(customResponse.status).toBe(200);
    expect(custom.event.type).toBe("custom.lead.captured");
    expect(custom.event.data).toEqual({ email: "alex@example.com" });
    expect(custom.event.traceId).toBe("trace_1");
    expect(journeyResponse.status).toBe(200);
    expect(journey.event.type).toBe("journey.event.emitted");
    expect(journey.event.data).toEqual({
      name: "ticket.synced",
      payload: { bookingReference: "ABC123" },
      routing: "targeted",
      target: { journeyId: "ticket-status", stateId: "wait" },
    });
    expect(journey.snapshot?.activeJourneyId).toBe("ticket-status");
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

    const preambleResponse = await handler.handle(new Request("http://localhost/conversations/conversation_1/preambles", {
      method: "POST",
      body: JSON.stringify({ purpose: "checking booking", maxWords: 8, traceId: "trace_2" }),
    }));
    const preamble = await preambleResponse.json() as { text: string; events: RuntimeEvent[] };

    const compactResponse = await handler.handle(new Request("http://localhost/conversations/conversation_1/compact", {
      method: "POST",
      body: JSON.stringify({ fromOffset: 1, toOffset: 3, schemaVersion: "test.v1" }),
    }));
    const compacted = await compactResponse.json() as { summary: unknown; snapshot: RuntimeSnapshot; events: RuntimeEvent[] };

    const snapshotResponse = await handler.handle(new Request("http://localhost/conversations/conversation_1/snapshot"));
    const snapshotBody = await snapshotResponse.json() as { snapshot: RuntimeSnapshot | null };

    const replayResponse = await handler.handle(new Request("http://localhost/conversations/conversation_1/replay?after=0"));
    const replay = await replayResponse.json() as ReplayConversationResult;

    const closeResponse = await handler.handle(new Request("http://localhost/conversations/conversation_1/close", {
      method: "POST",
      body: JSON.stringify({ reason: "Resolved" }),
    }));
    const closed = await closeResponse.json() as { conversation: ConversationRecord };

    expect(intermediateResponse.status).toBe(200);
    expect(intermediate.events.map((event) => event.type)).toEqual(["message.started", "message.completed"]);
    expect(preambleResponse.status).toBe(200);
    expect(preamble.text).toBe("I am still checking that for you.");
    expect(preamble.events.map((event) => event.type)).toEqual(["message.started", "message.completed"]);
    expect(compactResponse.status).toBe(200);
    expect(compacted.summary).toEqual({ summary: "Compacted." });
    expect(snapshotResponse.status).toBe(200);
    expect(snapshotBody.snapshot?.compactionSummary).toEqual({ summary: "Compacted." });
    expect(replayResponse.status).toBe(200);
    expect(replay.events.length).toBeGreaterThan(0);
    expect(replay.openPrompts).toEqual([]);
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

  async emitCustomEvent(input: Parameters<NonNullable<CognideskHttpRuntime["emitCustomEvent"]>>[0]): Promise<RuntimeEvent> {
    const event = {
      id: `event_${this.events.length + 1}`,
      conversationId: input.conversationId,
      offset: this.events.length + 1,
      type: `custom.${input.event.name}`,
      createdAt: "2026-05-25T00:00:00.000Z",
      data: input.payload,
      ...(input.traceId ? { traceId: input.traceId } : {}),
    } satisfies RuntimeEvent;
    this.events.push(event);
    return event;
  }

  async emitJourneyEvent(input: Parameters<NonNullable<CognideskHttpRuntime["emitJourneyEvent"]>>[0]) {
    const event = {
      id: `event_${this.events.length + 1}`,
      conversationId: input.conversationId,
      offset: this.events.length + 1,
      type: "journey.event.emitted",
      createdAt: "2026-05-25T00:00:00.000Z",
      data: {
        name: input.event.name,
        payload: input.payload,
        routing: input.routing ?? input.event.routing ?? "activeJourneyOnly",
        ...(input.target ? { target: input.target } : {}),
      },
    } satisfies RuntimeEvent;
    this.events.push(event);
    return {
      event,
      snapshot: {
        conversationId: input.conversationId,
        lifecycle: "active" as const,
        activeStateIds: input.target?.stateId ? [input.target.stateId] : [],
        updatedAt: "2026-05-25T00:00:00.000Z",
        ...(input.target?.journeyId ? { activeJourneyId: input.target.journeyId } : {}),
      },
      events: [event],
    };
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

  async emitGeneratedPreamble(input: { conversationId: string; purpose?: string; maxWords?: number; traceId?: string }): Promise<{ text: string; events: RuntimeEvent[] }> {
    const text = input.purpose ? "I am still checking that for you." : "Still working.";
    const result = await this.emitIntermediateMessage({
      conversationId: input.conversationId,
      text,
      ...(input.traceId ? { traceId: input.traceId } : {}),
    });
    return { text, events: result.events };
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

  async replayConversation(input: ReplayConversationInput): Promise<ReplayConversationResult> {
    return {
      conversation: await this.createConversation({ agentId: "flight-service", context: {} }),
      snapshot: this.snapshot,
      events: this.events.filter((event) => event.offset > (input.afterOffset ?? 0)),
      messages: [],
      openPrompts: [],
    };
  }

  private snapshot: RuntimeSnapshot | null = null;
}
