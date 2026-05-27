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

describe("HTTP adapter lifecycle controls", () => {
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
      body: JSON.stringify({ text: "Still checking.", visibleToModel: true }),
    }));
    const intermediate = await intermediateResponse.json() as { events: RuntimeEvent[] };

    const preambleResponse = await handler.handle(new Request("http://localhost/conversations/conversation_1/preambles", {
      method: "POST",
      body: JSON.stringify({ purpose: "checking booking", maxWords: 8 }),
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
    expect(intermediate.events[1]?.data).toMatchObject({ visibleToModel: true });
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
