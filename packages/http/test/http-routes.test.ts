import { describe, expect, it } from "vitest";
import { createCognideskHttpHandler } from "../src/index.js";
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

import { FakeRuntime } from "./fixtures.js";

describe("HTTP adapter routes", () => {
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
});
