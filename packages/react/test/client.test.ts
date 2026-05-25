import { describe, expect, it } from "vitest";
import { isValidElement } from "react";
import { createCognideskClient, defaultWidgetRenderers, formatSupportReferences, reduceChatRuntimeEvent } from "../src/index.js";
import type { RuntimeEvent } from "@cognidesk/core";

describe("createCognideskClient", () => {
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

  it("streams runtime events through EventSource", () => {
    const events: RuntimeEvent[] = [];
    const client = createCognideskClient({
      baseUrl: "http://localhost",
      EventSource: FakeEventSource as unknown as typeof EventSource,
    });

    const stop = client.streamEvents("conversation_1", {
      onEvent: (event) => events.push(event),
    }, { afterOffset: 4 });

    FakeEventSource.last?.emit({
      id: "event_5",
      conversationId: "conversation_1",
      offset: 5,
      type: "message.completed",
      createdAt: "2026-05-25T00:00:00.000Z",
      data: { text: "hello" },
    });
    stop();

    expect(FakeEventSource.last?.url).toBe("http://localhost/conversations/conversation_1/events/stream?after=4");
    expect(FakeEventSource.last?.closed).toBe(true);
    expect(events[0]?.type).toBe("message.completed");
  });

  it("formats support references for citation hovers", () => {
    expect(formatSupportReferences([
      { type: "knowledge", id: "policy-bags" },
      { type: "toolResult", id: "tool_1" },
    ])).toBe("Knowledge: policy-bags\nTool result: tool_1");
  });

  it("reduces runtime events into headless chat state", () => {
    const prompted = reduceChatRuntimeEvent(emptyChatState(), {
      id: "event_1",
      conversationId: "conversation_1",
      offset: 1,
      type: "ui.prompted",
      createdAt: "2026-05-25T00:00:00.000Z",
      data: {
        promptId: "prompt_1",
        widgetKind: "confirmation",
        input: { title: "Confirm", message: "Proceed?" },
      },
    });
    const completed = reduceChatRuntimeEvent(prompted, {
      id: "event_2",
      conversationId: "conversation_1",
      offset: 2,
      type: "message.completed",
      createdAt: "2026-05-25T00:00:00.000Z",
      data: { text: "I can help." },
    });
    const aborted = reduceChatRuntimeEvent(completed, {
      id: "event_3",
      conversationId: "conversation_1",
      offset: 3,
      type: "message.aborted",
      createdAt: "2026-05-25T00:00:00.000Z",
      data: { reason: "interrupted_by_new_message", partialText: "Sensitive partial" },
    });
    const submitted = reduceChatRuntimeEvent(aborted, {
      id: "event_4",
      conversationId: "conversation_1",
      offset: 4,
      type: "ui.submitted",
      createdAt: "2026-05-25T00:00:00.000Z",
      data: { promptId: "prompt_1", widgetKind: "confirmation", output: { confirmed: true } },
    });

    expect(prompted.prompts).toEqual([{
      promptId: "prompt_1",
      kind: "confirmation",
      input: { title: "Confirm", message: "Proceed?" },
    }]);
    expect(completed.messages).toEqual([{
      id: "event_2",
      role: "assistant",
      text: "I can help.",
      status: "sent",
    }]);
    expect(aborted.messages.at(-1)).toEqual({
      id: "event_3",
      role: "assistant",
      text: "Response interrupted.",
      status: "aborted",
    });
    expect(submitted.prompts).toEqual([]);
    expect(submitted.lastOffset).toBe(4);
  });

  it("exports default renderers for built-in widgets", () => {
    const confirmation = defaultWidgetRenderers.confirmation;
    expect(confirmation).toBeDefined();
    const rendered = confirmation?.({
      promptId: "prompt_1",
      kind: "confirmation",
      input: {
        title: "Confirm booking",
        message: "Book flight OS123?",
      },
      submit: () => {},
    });

    expect(isValidElement(rendered)).toBe(true);
    expect(Object.keys(defaultWidgetRenderers).sort()).toEqual([
      "choice",
      "confirmation",
      "date-picker",
      "form",
      "text-input",
    ]);
  });
});

function emptyChatState() {
  return { messages: [], prompts: [], lastOffset: 0 };
}

class FakeEventSource {
  static last: FakeEventSource | null = null;
  readonly listeners = new Map<string, Array<(event: MessageEvent) => void>>();
  closed = false;

  constructor(readonly url: string) {
    FakeEventSource.last = this;
  }

  addEventListener(type: string, listener: (event: MessageEvent) => void) {
    const listeners = this.listeners.get(type) ?? [];
    listeners.push(listener);
    this.listeners.set(type, listeners);
  }

  emit(event: RuntimeEvent) {
    for (const listener of this.listeners.get("event") ?? []) {
      listener(new MessageEvent("event", { data: JSON.stringify(event) }));
    }
  }

  close() {
    this.closed = true;
  }
}
