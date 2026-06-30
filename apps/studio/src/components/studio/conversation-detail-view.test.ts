import { describe, expect, it } from "vitest";
import { bubbleAnalysisForMessage, messageTranscriptRows } from "./conversation-detail-view";

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

  it("attaches the active journey and step context to message bubbles", () => {
    const rows = messageTranscriptRows([
      event(1, "journey.activated", { journeyId: "ticket-purchase" }),
      event(2, "journey.state.entered", { journeyId: "ticket-purchase", stateId: "collectRoute" }),
      event(3, "message.started", { role: "assistant" }),
      event(4, "message.completed", { text: "Where are you flying?" }),
      event(5, "journey.state.entered", { journeyId: "ticket-purchase", stateId: "selectFlight" }),
      event(6, "channel.received", { text: "Vienna to Berlin" }),
    ]);

    expect(rows.map((row) => ({ text: row.text, journeyId: row.journeyId, stateIds: row.stateIds }))).toEqual([
      { text: "Where are you flying?", journeyId: "ticket-purchase", stateIds: ["collectRoute"] },
      { text: "Vienna to Berlin", journeyId: "ticket-purchase", stateIds: ["selectFlight"] },
    ]);
  });

  it("uses the current snapshot context when events do not expose journey fields", () => {
    const rows = messageTranscriptRows([
      event(1, "channel.received", { text: "Can I change my ticket?" }),
      event(2, "channel.sent", { text: "I can help with that." }),
    ], { journeyId: "refund-guidance", stateIds: ["collectTicket"] });

    expect(rows.map((row) => ({ text: row.text, journeyId: row.journeyId, stateIds: row.stateIds }))).toEqual([
      { text: "Can I change my ticket?", journeyId: "refund-guidance", stateIds: ["collectTicket"] },
      { text: "I can help with that.", journeyId: "refund-guidance", stateIds: ["collectTicket"] },
    ]);
  });

  it("builds trace and journey event details for a selected bubble", () => {
    const events = [
      event(1, "journey.activated", { journeyId: "customer-channel-transfer" }, "trace_a"),
      event(2, "journey.state.entered", { journeyId: "customer-channel-transfer", stateId: "collectTransfer" }, "trace_a"),
      event(3, "tool.started", { toolName: "prepareTransferPayload", journeyId: "customer-channel-transfer", stateId: "collectTransfer" }, "trace_bubble"),
      event(4, "message.started", { role: "assistant" }, "trace_bubble"),
      event(5, "message.completed", { text: "Please confirm before I send this externally." }, "trace_bubble"),
      event(6, "tool.completed", { toolName: "prepareTransferPayload", success: true, journeyId: "customer-channel-transfer", stateId: "collectTransfer" }, "trace_bubble"),
    ];
    const selected = messageTranscriptRows(events).find((row) => row.text.includes("confirm")) ?? null;
    const analysis = bubbleAnalysisForMessage(events, selected);

    expect(analysis.traceRows.map((row) => row.type)).toEqual([
      "tool.started",
      "message.started",
      "message.completed",
      "tool.completed",
    ]);
    expect(analysis.journeyRows.map((row) => row.type)).toEqual([
      "journey.activated",
      "journey.state.entered",
      "tool.started",
      "tool.completed",
    ]);
    expect(analysis.relatedRows.map((row) => row.type)).toEqual([
      "journey.activated",
      "journey.state.entered",
      "tool.started",
      "message.started",
      "message.completed",
      "tool.completed",
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
