import { describe, expect, it } from "vitest";
import { isValidElement } from "react";
import { createCognideskClient, defaultWidgetRenderers, formatSupportReferences, reduceChatRuntimeEvent } from "../src/index.js";
import type { RuntimeEvent } from "@cognidesk/core";

describe("React client events and widgets", () => {
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
      { type: "knowledge", id: "policy-bags", sourceName: "flight-faq", title: "Baggage policy", metadata: { section: "bags" } },
      { type: "toolResult", id: "tool_1" },
    ])).toBe("Knowledge: Baggage policy (flight-faq)\nsection: bags\nTool result: tool_1");
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

  it("reduces assistant message deltas into one streaming message", () => {
    const started = reduceChatRuntimeEvent(emptyChatState(), {
      id: "event_1",
      conversationId: "conversation_1",
      offset: 1,
      type: "message.started",
      createdAt: "2026-05-25T00:00:00.000Z",
      data: { role: "assistant" },
    });
    const firstDelta = reduceChatRuntimeEvent(started, {
      id: "event_2",
      conversationId: "conversation_1",
      offset: 2,
      type: "message.delta",
      createdAt: "2026-05-25T00:00:00.000Z",
      data: { textDelta: "Ticket " },
    });
    const secondDelta = reduceChatRuntimeEvent(firstDelta, {
      id: "event_3",
      conversationId: "conversation_1",
      offset: 3,
      type: "message.delta",
      createdAt: "2026-05-25T00:00:00.000Z",
      data: { textDelta: "confirmed." },
    });
    const completed = reduceChatRuntimeEvent(secondDelta, {
      id: "event_4",
      conversationId: "conversation_1",
      offset: 4,
      type: "message.completed",
      createdAt: "2026-05-25T00:00:00.000Z",
      data: {
        text: "Ticket confirmed.",
        segments: [{
          id: "segment_1",
          text: "Ticket confirmed.",
          references: [{ type: "knowledge", id: "faq-ticket-status" }],
        }],
      },
    });

    expect(started.messages).toEqual([{
      id: "event_1",
      role: "assistant",
      text: "",
      status: "streaming",
    }]);
    expect(secondDelta.messages).toEqual([{
      id: "event_1",
      role: "assistant",
      text: "Ticket confirmed.",
      status: "streaming",
    }]);
    expect(completed.messages).toEqual([{
      id: "event_4",
      role: "assistant",
      text: "Ticket confirmed.",
      segments: [{
        id: "segment_1",
        text: "Ticket confirmed.",
        references: [{ type: "knowledge", id: "faq-ticket-status" }],
      }],
      status: "sent",
    }]);
  });

  it("replays completed user messages with the correct role", () => {
    const started = reduceChatRuntimeEvent(emptyChatState(), {
      id: "event_1",
      conversationId: "conversation_1",
      offset: 1,
      type: "message.started",
      createdAt: "2026-05-25T00:00:00.000Z",
      data: { role: "user" },
    });
    const completed = reduceChatRuntimeEvent(started, {
      id: "event_2",
      conversationId: "conversation_1",
      offset: 2,
      type: "message.completed",
      createdAt: "2026-05-25T00:00:00.000Z",
      data: { text: "Where is my ticket?" },
    });

    expect(completed.messages).toEqual([{
      id: "event_2",
      role: "user",
      text: "Where is my ticket?",
      status: "sent",
    }]);
  });

  it("ignores stale event offsets", () => {
    const state = reduceChatRuntimeEvent(emptyChatState(), {
      id: "event_1",
      conversationId: "conversation_1",
      offset: 1,
      type: "message.completed",
      createdAt: "2026-05-25T00:00:00.000Z",
      data: { text: "I can help." },
    });
    const replayed = reduceChatRuntimeEvent(state, {
      id: "event_1_replayed",
      conversationId: "conversation_1",
      offset: 1,
      type: "message.completed",
      createdAt: "2026-05-25T00:00:00.000Z",
      data: { text: "I can help again." },
    });

    expect(replayed).toBe(state);
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
      appearance: {
        widgets: {
          confirmation: {
            elements: {
              panel: "custom-panel",
            },
          },
        },
      },
      submit: () => {},
    });

    expect(isValidElement(rendered)).toBe(true);
    expect(isValidElement(rendered) ? String((rendered.props as { className?: string }).className) : "").toContain("custom-panel");
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
