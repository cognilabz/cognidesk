import { describe, expect, it } from "vitest";
import { createCognideskClient, formatSupportReferences } from "../src/index.js";
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
});

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
