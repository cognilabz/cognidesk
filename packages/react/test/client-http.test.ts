import { describe, expect, it } from "vitest";
import { isValidElement } from "react";
import { createCognideskClient, defaultWidgetRenderers, formatSupportReferences, reduceChatRuntimeEvent } from "../src/index.js";
import type { RuntimeEvent } from "@cognidesk/core";

describe("createCognideskClient HTTP adapter", () => {
  it("posts conversations and messages to the HTTP adapter routes", async () => {
    const requests: Array<{ url: string; body: unknown }> = [];
    const client = createCognideskClient({
      baseUrl: "http://localhost/api/",
      fetch: async (url, init) => {
        requests.push({ url: String(url), body: JSON.parse(String(init?.body ?? "{}")) as unknown });
        if (String(url).endsWith("/conversations")) {
          return Response.json({
            conversation: {
              id: "conversation_1",
              agentId: "flight-service",
              lifecycle: "active",
              context: {},
              createdAt: "2026-05-25T00:00:00.000Z",
              updatedAt: "2026-05-25T00:00:00.000Z",
            },
          });
        }
        if (String(url).endsWith("/widgets/prompt_1/submissions")) {
          return Response.json({
            event: {
              id: "event_1",
              conversationId: "conversation_1",
              offset: 1,
              type: "ui.submitted",
              createdAt: "2026-05-25T00:00:00.000Z",
              data: JSON.parse(String(init?.body ?? "{}")) as unknown,
            },
          });
        }
        if (String(url).endsWith("/handoff")) {
          return Response.json({
            conversation: {
              id: "conversation_1",
              agentId: "flight-service",
              lifecycle: "handoff",
              context: {},
              createdAt: "2026-05-25T00:00:00.000Z",
              updatedAt: "2026-05-25T00:00:00.000Z",
            },
            event: {
              id: "event_2",
              conversationId: "conversation_1",
              offset: 2,
              type: "handoff.requested",
              createdAt: "2026-05-25T00:00:00.000Z",
              data: JSON.parse(String(init?.body ?? "{}")) as unknown,
            },
          });
        }
        if (String(url).endsWith("/resume")) {
          return Response.json({
            conversation: {
              id: "conversation_1",
              agentId: "flight-service",
              lifecycle: "active",
              context: {},
              createdAt: "2026-05-25T00:00:00.000Z",
              updatedAt: "2026-05-25T00:00:00.000Z",
            },
            event: {
              id: "event_3",
              conversationId: "conversation_1",
              offset: 3,
              type: "handoff.resumed",
              createdAt: "2026-05-25T00:00:00.000Z",
              data: JSON.parse(String(init?.body ?? "{}")) as unknown,
            },
          });
        }
        if (String(url).endsWith("/intermediate-messages")) {
          return Response.json({
            events: [{
              id: "event_4",
              conversationId: "conversation_1",
              offset: 4,
              type: "message.completed",
              createdAt: "2026-05-25T00:00:00.000Z",
              data: { text: "Still checking.", intermediate: true },
            }],
          });
        }
        if (String(url).endsWith("/preambles")) {
          return Response.json({
            text: "I am still checking that for you.",
            events: [{
              id: "event_5",
              conversationId: "conversation_1",
              offset: 5,
              type: "message.completed",
              createdAt: "2026-05-25T00:00:00.000Z",
              data: { text: "I am still checking that for you.", intermediate: true },
            }],
          });
        }
        if (String(url).endsWith("/compact")) {
          return Response.json({
            summary: { summary: "Compacted." },
            snapshot: {
              conversationId: "conversation_1",
              lifecycle: "active",
              activeStateIds: [],
              compactionSummary: { summary: "Compacted." },
              updatedAt: "2026-05-25T00:00:00.000Z",
            },
            events: [],
          });
        }
        if (String(url).endsWith("/snapshot")) {
          return Response.json({
            snapshot: {
              conversationId: "conversation_1",
              lifecycle: "active",
              activeStateIds: [],
              updatedAt: "2026-05-25T00:00:00.000Z",
            },
          });
        }
        if (String(url).includes("/replay")) {
          return Response.json({
            conversation: {
              id: "conversation_1",
              agentId: "flight-service",
              lifecycle: "active",
              context: {},
              createdAt: "2026-05-25T00:00:00.000Z",
              updatedAt: "2026-05-25T00:00:00.000Z",
            },
            snapshot: null,
            events: [],
            messages: [],
            openPrompts: [],
          });
        }
        if (String(url).endsWith("/close")) {
          return Response.json({
            conversation: {
              id: "conversation_1",
              agentId: "flight-service",
              lifecycle: "closed",
              context: {},
              createdAt: "2026-05-25T00:00:00.000Z",
              updatedAt: "2026-05-25T00:00:00.000Z",
            },
          });
        }
        if (String(url).includes("/custom-events/")) {
          return Response.json({
            event: {
              id: "event_custom",
              conversationId: "conversation_1",
              offset: 2,
              type: "custom.lead.captured",
              createdAt: "2026-05-25T00:00:00.000Z",
              data: {},
            },
          });
        }
        if (String(url).includes("/journey-events/")) {
          return Response.json({
            event: {
              id: "event_journey",
              conversationId: "conversation_1",
              offset: 3,
              type: "journey.event.emitted",
              createdAt: "2026-05-25T00:00:00.000Z",
              data: {},
            },
            snapshot: null,
            events: [],
          });
        }
        return Response.json({ text: "ok", events: [], activeJourneyId: "ticket-status" });
      },
    });

    const created = await client.createConversation({ agentId: "flight-service", context: { locale: "en" } });
    const sent = await client.sendMessage(created.conversation.id, "hello", { turn: { source: "test" } });
    await client.submitWidget(created.conversation.id, {
      promptId: "prompt_1",
      widgetKind: "confirmation",
      output: { confirmed: true },
    });
    await client.emitCustomEvent(created.conversation.id, "lead.captured", {
      payload: { email: "alex@example.com" },
      traceId: "trace_custom",
    });
    await client.emitJourneyEvent(created.conversation.id, "ticket.synced", {
      payload: { bookingReference: "ABC123" },
      routing: "targeted",
      target: { journeyId: "ticket-status", stateId: "wait" },
    });
    await client.requestHandoff(created.conversation.id, {
      reason: "Customer wants a human",
      summary: "Needs review.",
    });
    await client.resumeConversation(created.conversation.id, {
      reason: "Human finished review",
      payload: { ticketId: "T-1" },
    });
    await client.emitIntermediateMessage(created.conversation.id, {
      text: "Still checking.",
      traceId: "trace_1",
    });
    await client.emitGeneratedPreamble(created.conversation.id, {
      purpose: "checking booking",
      maxWords: 8,
      traceId: "trace_2",
    });
    await client.compactConversation(created.conversation.id, {
      fromOffset: 1,
      toOffset: 4,
      schemaVersion: "test.v1",
    });
    await client.getSnapshot(created.conversation.id);
    await client.replayConversation(created.conversation.id, { afterOffset: 0 });
    await client.closeConversation(created.conversation.id, {
      reason: "Resolved",
    });

    expect(requests).toEqual([
      {
        url: "http://localhost/api/conversations",
        body: { agentId: "flight-service", context: { locale: "en" } },
      },
      {
        url: "http://localhost/api/conversations/conversation_1/messages",
        body: { message: "hello", turn: { source: "test" } },
      },
      {
        url: "http://localhost/api/conversations/conversation_1/widgets/prompt_1/submissions",
        body: { widgetKind: "confirmation", output: { confirmed: true } },
      },
      {
        url: "http://localhost/api/conversations/conversation_1/custom-events/lead.captured",
        body: { payload: { email: "alex@example.com" }, traceId: "trace_custom" },
      },
      {
        url: "http://localhost/api/conversations/conversation_1/journey-events/ticket.synced",
        body: {
          payload: { bookingReference: "ABC123" },
          routing: "targeted",
          target: { journeyId: "ticket-status", stateId: "wait" },
        },
      },
      {
        url: "http://localhost/api/conversations/conversation_1/handoff",
        body: { reason: "Customer wants a human", summary: "Needs review." },
      },
      {
        url: "http://localhost/api/conversations/conversation_1/resume",
        body: { reason: "Human finished review", payload: { ticketId: "T-1" } },
      },
      {
        url: "http://localhost/api/conversations/conversation_1/intermediate-messages",
        body: { text: "Still checking.", traceId: "trace_1" },
      },
      {
        url: "http://localhost/api/conversations/conversation_1/preambles",
        body: { purpose: "checking booking", maxWords: 8, traceId: "trace_2" },
      },
      {
        url: "http://localhost/api/conversations/conversation_1/compact",
        body: { fromOffset: 1, toOffset: 4, schemaVersion: "test.v1" },
      },
      {
        url: "http://localhost/api/conversations/conversation_1/snapshot",
        body: {},
      },
      {
        url: "http://localhost/api/conversations/conversation_1/replay?after=0",
        body: {},
      },
      {
        url: "http://localhost/api/conversations/conversation_1/close",
        body: { reason: "Resolved" },
      },
    ]);
    expect(sent.activeJourneyId).toBe("ticket-status");
  });
});
