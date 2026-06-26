import { describe, expect, it } from "vitest";
import { isValidElement } from "react";
import {
  collectSupportSourceLinks,
  createCognideskClient,
  defaultWidgetRenderers,
  formatSupportReferences,
  reduceChatRuntimeEvent,
} from "../src/index.js";
import { PENDING_PROMPT_DISPLAY_OFFSET } from "../src/event-reducer.js";
import { defineChannelContext, type RuntimeEvent } from "@cognidesk/core";

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

  it("passes stream auth options to EventSource factories", () => {
    const eventSourceOptions: Array<EventSourceInit & { headers?: HeadersInit }> = [];
    const client = createCognideskClient({
      baseUrl: "http://localhost",
      headers: { authorization: "Bearer stream-token" },
      credentials: "include",
      createEventSource: (url, init) => {
        eventSourceOptions.push(init);
        return new FakeEventSource(url, init) as unknown as EventSource;
      },
    });

    client.streamEvents("conversation_1", {
      onEvent: () => {},
    }, {
      afterOffset: 4,
      headers: { "x-stream-client": "polyfill" },
    });

    const headers = new Headers(eventSourceOptions[0]?.headers);
    expect(FakeEventSource.last?.url).toBe("http://localhost/conversations/conversation_1/events/stream?after=4");
    expect(eventSourceOptions[0]?.withCredentials).toBe(true);
    expect(headers.get("authorization")).toBe("Bearer stream-token");
    expect(headers.get("x-stream-client")).toBe("polyfill");
  });

  it("formats support references for citation hovers", () => {
    expect(formatSupportReferences([
      { type: "knowledge", id: "policy-bags", sourceName: "flight-faq", title: "Baggage policy", metadata: { section: "bags", url: "/docs/bags.html" } },
      { type: "toolResult", id: "tool_1" },
    ])).toBe("Source: Baggage policy\nTool result: tool_1");
    expect(collectSupportSourceLinks([
      { type: "knowledge", id: "policy-bags", sourceName: "flight-faq", title: "Baggage policy", metadata: { url: "/docs/bags.html" } },
      { type: "knowledge", id: "policy-bags", sourceName: "flight-faq", title: "Baggage policy", metadata: { url: "/docs/bags.html" } },
    ])).toEqual([{
      id: "policy-bags",
      label: "Baggage policy",
      url: "/docs/bags.html",
    }]);
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
      offset: 1,
      displayOffset: PENDING_PROMPT_DISPLAY_OFFSET,
      kind: "confirmation",
      input: { title: "Confirm", message: "Proceed?" },
      status: "open",
    }]);
    expect(completed.prompts).toEqual([{
      promptId: "prompt_1",
      offset: 1,
      displayOffset: 2.1,
      kind: "confirmation",
      input: { title: "Confirm", message: "Proceed?" },
      status: "open",
    }]);
    expect(completed.messages).toEqual([{
      id: "event_2",
      offset: 2,
      role: "assistant",
      text: "I can help.",
      status: "sent",
    }]);
    expect(aborted.messages.at(-1)).toEqual({
      id: "event_3",
      offset: 3,
      role: "assistant",
      text: "Response interrupted.",
      status: "aborted",
    });
    expect(submitted.prompts).toEqual([{
      promptId: "prompt_1",
      offset: 1,
      displayOffset: 2.1,
      kind: "confirmation",
      input: { title: "Confirm", message: "Proceed?" },
      status: "submitted",
      output: { confirmed: true },
    }]);
    expect(submitted.activities.at(-1)).toEqual({
      id: "widget:prompt_1",
      label: "Submitting response",
      status: "running",
    });
    expect(submitted.lastOffset).toBe(4);
  });

  it("shows confirmation prompts that arrive after the latest assistant message", () => {
    const assistantMessage = reduceChatRuntimeEvent(emptyChatState(), {
      id: "event_1",
      conversationId: "conversation_1",
      offset: 1,
      type: "message.completed",
      createdAt: "2026-05-25T00:00:00.000Z",
      data: { text: "CL102 selected. Please add the passenger name to continue." },
    });
    const prompted = reduceChatRuntimeEvent(assistantMessage, {
      id: "event_2",
      conversationId: "conversation_1",
      offset: 2,
      type: "ui.prompted",
      createdAt: "2026-05-25T00:00:00.000Z",
      data: {
        promptId: "confirm:book-flight:book:bookFlight",
        widgetKind: "confirmation",
        input: { title: "Confirm mocked booking", message: "Review the mocked booking details." },
      },
    });

    expect(prompted.prompts).toEqual([{
      promptId: "confirm:book-flight:book:bookFlight",
      offset: 2,
      displayOffset: 2,
      kind: "confirmation",
      input: { title: "Confirm mocked booking", message: "Review the mocked booking details." },
      status: "open",
    }]);
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
          references: [{ type: "knowledge", id: "faq-journey_primary" }],
        }],
      },
    });

    expect(started.messages).toEqual([{
      id: "event_1",
      offset: 1,
      role: "assistant",
      text: "",
      status: "streaming",
    }]);
    expect(secondDelta.messages).toEqual([{
      id: "event_1",
      offset: 1,
      role: "assistant",
      text: "Ticket confirmed.",
      status: "streaming",
    }]);
    expect(completed.messages).toEqual([{
      id: "event_4",
      offset: 1,
      role: "assistant",
      text: "Ticket confirmed.",
      segments: [{
        id: "segment_1",
        text: "Ticket confirmed.",
        references: [{ type: "knowledge", id: "faq-journey_primary" }],
      }],
      status: "sent",
    }]);
  });

  it("deduplicates spoken initial greeting voice transcripts", () => {
    const welcome = "Welcome back. How can I help with flights today?";
    const initial = reduceChatRuntimeEvent(emptyChatState(), {
      id: "event_1",
      conversationId: "conversation_1",
      offset: 1,
      type: "message.started",
      createdAt: "2026-05-25T00:00:00.000Z",
      data: { role: "assistant" },
    });
    const initialDelta = reduceChatRuntimeEvent(initial, {
      id: "event_2",
      conversationId: "conversation_1",
      offset: 2,
      type: "message.delta",
      createdAt: "2026-05-25T00:00:00.000Z",
      data: { textDelta: welcome },
    });
    const initialCompleted = reduceChatRuntimeEvent(initialDelta, {
      id: "event_3",
      conversationId: "conversation_1",
      offset: 3,
      type: "message.completed",
      createdAt: "2026-05-25T00:00:00.000Z",
      data: { text: welcome, intermediate: true, visibleToModel: true },
    });
    const spokenStarted = reduceChatRuntimeEvent(initialCompleted, {
      id: "event_4",
      conversationId: "conversation_1",
      offset: 4,
      type: "message.started",
      createdAt: "2026-05-25T00:00:00.000Z",
      data: { role: "assistant" },
    });
    const spokenCompleted = reduceChatRuntimeEvent(spokenStarted, {
      id: "event_5",
      conversationId: "conversation_1",
      offset: 5,
      type: "message.completed",
      createdAt: "2026-05-25T00:00:00.000Z",
      data: { text: welcome },
    });
    const transcriptCommitted = reduceChatRuntimeEvent(spokenCompleted, {
      id: "event_6",
      conversationId: "conversation_1",
      offset: 6,
      type: "voice.transcript.committed",
      createdAt: "2026-05-25T00:00:00.000Z",
      data: {
        channelSegmentId: "voice_segment_1",
        speaker: "assistant",
        messageEventId: "event_5",
        transcriptionSource: "openai-realtime",
      },
    });

    expect(spokenCompleted.messages.map((message) => message.text)).toEqual([welcome, welcome]);
    expect(transcriptCommitted.messages.map((message) => message.text)).toEqual([welcome]);
  });

  it("hides an interrupted intermediate voice greeting before the voice model answers", () => {
    const welcome = "Welcome back. How can I help with flights today?";
    const initial = reduceChatRuntimeEvent(emptyChatState(), {
      id: "event_1",
      conversationId: "conversation_1",
      offset: 1,
      type: "message.completed",
      createdAt: "2026-05-25T00:00:00.000Z",
      data: { text: welcome, intermediate: true, visibleToModel: true },
    });
    const interrupted = reduceChatRuntimeEvent(initial, {
      id: "event_2",
      conversationId: "conversation_1",
      offset: 2,
      type: "voice.interrupted",
      createdAt: "2026-05-25T00:00:00.000Z",
      data: {
        channelSegmentId: "voice_segment_1",
        connectionId: "voice_connection_1",
        source: "userSpeech",
        reason: "user_speech_started",
      },
    });
    const spokenCompleted = reduceChatRuntimeEvent(interrupted, {
      id: "event_3",
      conversationId: "conversation_1",
      offset: 3,
      type: "message.completed",
      createdAt: "2026-05-25T00:00:00.000Z",
      data: { text: "Grüß Sie, wie kann ich helfen?" },
    });

    expect(initial.messages.map((message) => message.text)).toEqual([welcome]);
    expect(interrupted.messages).toEqual([]);
    expect(spokenCompleted.messages.map((message) => message.text)).toEqual(["Grüß Sie, wie kann ich helfen?"]);
  });

  it("reduces Discord operator join, typing, and messages into chat state", () => {
    const typing = reduceChatRuntimeEvent(emptyChatState(), {
      id: "typing_1",
      conversationId: "conversation_1",
      offset: 1,
      type: "custom.discord.operator_typing.started",
      createdAt: "2026-05-25T00:00:00.000Z",
      data: {
        operatorId: "operator_1",
        operatorName: "Michi",
        discordThreadId: "thread_1",
        expiresAt: "2099-01-01T00:00:00.000Z",
      },
    });
    const joined = reduceChatRuntimeEvent(typing, {
      id: "joined_1",
      conversationId: "conversation_1",
      offset: 2,
      type: "custom.discord.operator_joined",
      createdAt: "2026-05-25T00:00:00.000Z",
      data: {
        operatorId: "operator_1",
        operatorName: "Michi",
        discordThreadId: "thread_1",
      },
    });
    const messaged = reduceChatRuntimeEvent(joined, {
      id: "channel_1",
      conversationId: "conversation_1",
      offset: 3,
      type: "channel.event.received",
      createdAt: "2026-05-25T00:00:00.000Z",
      data: {
        eventId: "discord_message_1",
        nature: "message",
        direction: "inbound",
        intent: "agent-message",
        actor: { type: "operator", id: "operator_1", displayName: "Michi" },
        channel: defineChannelContext({
          channelId: "channel_1",
          kind: "community",
          provider: "discord",
          externalThreadId: "thread_1",
        }),
        bindingOutcome: "resume-existing",
        handlingDisposition: "record-only",
        payload: { text: "Hi, I am checking options." },
      },
    });

    expect(typing.activities).toEqual([{
      id: "typing:operator_1",
      label: "Michi is typing",
      status: "running",
      expiresAt: Date.parse("2099-01-01T00:00:00.000Z"),
    }]);
    expect(joined.activities).toEqual([]);
    expect(messaged.activities).toEqual([]);
    expect(messaged.messages).toEqual([
      {
        id: "joined_1",
        offset: 2,
        role: "assistant",
        text: "Michi joined the chat.",
        status: "sent",
      },
      {
        id: "channel_1",
        offset: 3,
        role: "assistant",
        text: "Michi: Hi, I am checking options.",
        status: "sent",
      },
    ]);
  });

  it("adds an operator joined bubble before the first Discord operator message", () => {
    const reduced = reduceChatRuntimeEvent(emptyChatState(), {
      id: "channel_1",
      conversationId: "conversation_1",
      offset: 3,
      type: "channel.event.received",
      createdAt: "2026-05-25T00:00:00.000Z",
      data: {
        eventId: "discord_message_1",
        nature: "message",
        direction: "inbound",
        intent: "agent-message",
        actor: { type: "operator", id: "operator_1", displayName: "Michi" },
        channel: defineChannelContext({
          channelId: "channel_1",
          kind: "community",
          provider: "discord",
          externalThreadId: "thread_1",
        }),
        bindingOutcome: "resume-existing",
        handlingDisposition: "record-only",
        payload: { text: "I can help from here." },
      },
    });

    expect(reduced.messages).toEqual([
      {
        id: "channel_1:operator_joined",
        offset: 2.9,
        role: "assistant",
        text: "Michi joined the chat.",
        status: "sent",
      },
      {
        id: "channel_1",
        offset: 3,
        role: "assistant",
        text: "Michi: I can help from here.",
        status: "sent",
      },
    ]);
  });

  it("reduces background work events into activity indicators", () => {
    const thinking = reduceChatRuntimeEvent(emptyChatState(), {
      id: "event_1",
      conversationId: "conversation_1",
      offset: 1,
      type: "journey.candidates.retrieved",
      createdAt: "2026-05-25T00:00:00.000Z",
      data: { journeyIds: ["book-flight"] },
    });
    const toolStarted = reduceChatRuntimeEvent(thinking, {
      id: "event_2",
      conversationId: "conversation_1",
      offset: 2,
      type: "tool.started",
      createdAt: "2026-05-25T00:00:00.000Z",
      data: { toolName: "lookupAccountDetails", journeyId: "account-support" },
    });
    const toolCompleted = reduceChatRuntimeEvent(toolStarted, {
      id: "event_3",
      conversationId: "conversation_1",
      offset: 3,
      type: "tool.completed",
      createdAt: "2026-05-25T00:00:00.000Z",
      data: { toolName: "lookupAccountDetails", success: true, journeyId: "account-support", result: { account: {} } },
    });
    const knowledge = reduceChatRuntimeEvent(toolCompleted, {
      id: "event_4",
      conversationId: "conversation_1",
      offset: 4,
      type: "knowledge.retrieved",
      createdAt: "2026-05-25T00:00:00.000Z",
      data: { sourceName: "support-articles", itemIds: ["account"] },
    });

    expect(thinking.activities).toEqual([{
      id: "intent",
      label: "Understanding request",
      status: "running",
    }]);
    expect(toolStarted.activities.at(-1)).toEqual({
      id: "tool:lookupAccountDetails",
      label: "Lookup Account Details",
      status: "running",
    });
    expect(toolCompleted.activities.some((activity) => activity.id === "tool:lookupAccountDetails")).toBe(false);
    expect(knowledge.activities.at(-1)).toEqual({
      id: "knowledge:support-articles",
      label: "Checking knowledge",
      status: "done",
    });
  });

  it("uses configured activity labels when provided", () => {
    const toolStarted = reduceChatRuntimeEvent(emptyChatState(), {
      id: "event_1",
      conversationId: "conversation_1",
      offset: 1,
      type: "tool.started",
      createdAt: "2026-05-25T00:00:00.000Z",
      data: { toolName: "lookupAccountDetails", journeyId: "account-support" },
    }, {
      formatActivityLabel: ({ kind, name, defaultLabel }) => (
        kind === "tool" && name === "lookupAccountDetails"
          ? "Checking account"
          : defaultLabel
      ),
    });

    expect(toolStarted.activities.at(-1)).toEqual({
      id: "tool:lookupAccountDetails",
      label: "Checking account",
      status: "running",
    });
  });

  it("closes matching field widgets when clear-text extraction accepts the value", () => {
    const prompted = reduceChatRuntimeEvent(emptyChatState(), {
      id: "event_1",
      conversationId: "conversation_1",
      offset: 1,
      type: "ui.prompted",
      createdAt: "2026-05-25T00:00:00.000Z",
      data: {
        promptId: "field:book-flight:selectFlight:selectedFlightId",
        widgetKind: "choice",
        input: { label: "Flight option", options: [{ id: "CL102", label: "CL102" }] },
      },
    });
    const extracted = reduceChatRuntimeEvent(prompted, {
      id: "event_2",
      conversationId: "conversation_1",
      offset: 2,
      type: "journey.extraction.accepted",
      createdAt: "2026-05-25T00:00:00.000Z",
      data: {
        journeyId: "book-flight",
        stateId: "selectFlight",
        fields: ["selectedFlightId"],
      },
    });

    expect(extracted.prompts).toEqual([]);
  });

  it("closes open journey widgets when the matcher returns to the base agent", () => {
    const prompted = reduceChatRuntimeEvent(emptyChatState(), {
      id: "event_1",
      conversationId: "conversation_1",
      offset: 1,
      type: "ui.prompted",
      createdAt: "2026-05-25T00:00:00.000Z",
      data: {
        promptId: "fields:book-flight:collectRoute",
        widgetKind: "form",
        input: { title: "Missing details", fields: [] },
      },
    });
    const submitted = reduceChatRuntimeEvent(prompted, {
      id: "event_2",
      conversationId: "conversation_1",
      offset: 2,
      type: "ui.submitted",
      createdAt: "2026-05-25T00:00:00.000Z",
      data: {
        promptId: "fields:book-flight:collectRoute",
        widgetKind: "form",
        output: { values: { origin: "Vienna" } },
      },
    });
    const nextPrompt = reduceChatRuntimeEvent(submitted, {
      id: "event_3",
      conversationId: "conversation_1",
      offset: 3,
      type: "ui.prompted",
      createdAt: "2026-05-25T00:00:00.000Z",
      data: {
        promptId: "field:book-flight:selectFlight:selectedFlightId",
        widgetKind: "choice",
        input: { label: "Flight option", options: [] },
      },
    });
    const baseAgent = reduceChatRuntimeEvent(nextPrompt, {
      id: "event_4",
      conversationId: "conversation_1",
      offset: 4,
      type: "journey.matched",
      createdAt: "2026-05-25T00:00:00.000Z",
      data: { candidates: [] },
    });

    expect(baseAgent.prompts.map((prompt) => prompt.promptId)).toEqual(["fields:book-flight:collectRoute"]);
    expect(baseAgent.prompts[0]?.status).toBe("submitted");
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
      offset: 2,
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
  return { messages: [], prompts: [], activities: [], lastOffset: 0 };
}

class FakeEventSource {
  static last: FakeEventSource | null = null;
  readonly listeners = new Map<string, Array<(event: MessageEvent) => void>>();
  closed = false;

  constructor(readonly url: string, readonly init?: EventSourceInit & { headers?: HeadersInit }) {
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
