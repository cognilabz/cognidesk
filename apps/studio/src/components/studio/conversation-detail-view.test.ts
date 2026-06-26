import { describe, expect, it } from "vitest";
import { messageTranscriptRows } from "./conversation-detail-view";

describe("messageTranscriptRows", () => {
  it("builds a readable transcript from message lifecycle events", () => {
    const rows = messageTranscriptRows([
      event(1, "message.started", { role: "assistant" }),
      event(2, "message.completed", { text: "Welcome back." }),
      event(3, "message.started", { role: "user" }),
      event(4, "message.completed", { text: "I need baggage help." }),
      event(5, "channel.sent", { text: "Welcome back." }),
    ]);

    expect(rows.map((row) => ({ role: row.role, text: row.text }))).toEqual([
      { role: "assistant", text: "Welcome back." },
      { role: "user", text: "I need baggage help." },
    ]);
  });

  it("falls back to channel text when message.completed events are absent", () => {
    const rows = messageTranscriptRows([
      event(1, "channel.received", { text: "Hello" }),
      event(2, "channel.sent", { text: "Hi, how can I help?" }),
    ]);

    expect(rows.map((row) => ({ role: row.role, text: row.text }))).toEqual([
      { role: "customer", text: "Hello" },
      { role: "assistant", text: "Hi, how can I help?" },
    ]);
  });

  it("keeps channel-only turns in mixed runtime streams and dedupes mirrored message events", () => {
    const rows = messageTranscriptRows([
      event(1, "message.started", { role: "assistant" }, "trace_intro"),
      event(2, "message.completed", { text: "Welcome back." }, "trace_intro"),
      event(3, "channel.sent", { text: "Welcome back." }, "trace_intro"),
      event(4, "channel.received", { text: "I have a follow-up from the provider channel." }, "trace_channel"),
    ]);

    expect(rows.map((row) => ({ role: row.role, text: row.text }))).toEqual([
      { role: "assistant", text: "Welcome back." },
      { role: "customer", text: "I have a follow-up from the provider channel." },
    ]);
  });
});

function event(offset: number, type: string, data: Record<string, unknown>, traceId = "trace_1") {
  return {
    id: `event_${offset}`,
    conversationId: "conversation_1",
    offset,
    type,
    createdAt: "2026-06-26T08:00:00.000Z",
    telemetry: { traceId },
    data,
  };
}
