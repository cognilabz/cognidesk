import { describe, expect, it } from "vitest";
import { filterConversations } from "./conversation-search-panel";
import type { StudioConversationRow } from "./types";

const conversations: StudioConversationRow[] = [
  conversation({ id: "conv_baggage_1", activeJourneyId: "baggage-service", summary: "Customer asks about delayed baggage claim.", traceIds: ["trace-bag"] }),
  conversation({ id: "conv_handoff_1", lifecycle: "handoff", activeJourneyId: "human-handoff", summary: "Escalated after disruption policy checks.", traceIds: ["trace-human"] }),
  conversation({ id: "conv_ticket_1", lifecycle: "closed", activeJourneyId: "ticket-status", summary: "Refund timing explained.", activeStateIds: ["lookupTicket"] }),
];

describe("filterConversations", () => {
  it("searches across ids, journey ids, summaries, states, and traces", () => {
    expect(filterConversations(conversations, "baggage-service").map((row) => row.id)).toEqual(["conv_baggage_1"]);
    expect(filterConversations(conversations, "trace-human").map((row) => row.id)).toEqual(["conv_handoff_1"]);
    expect(filterConversations(conversations, "lookupTicket").map((row) => row.id)).toEqual(["conv_ticket_1"]);
  });

  it("combines lifecycle filtering with text search", () => {
    expect(filterConversations(conversations, "policy", "handoff").map((row) => row.id)).toEqual(["conv_handoff_1"]);
    expect(filterConversations(conversations, "policy", "active").map((row) => row.id)).toEqual([]);
  });
});

function conversation(input: Partial<StudioConversationRow>): StudioConversationRow {
  return {
    id: input.id ?? "conv_1",
    agentId: "flight-service",
    lifecycle: input.lifecycle ?? "active",
    customerLabel: input.customerLabel ?? "Conversation",
    summary: input.summary ?? "Summary",
    createdAt: "2026-06-26T08:00:00.000Z",
    updatedAt: "2026-06-26T08:05:00.000Z",
    activeJourneyId: input.activeJourneyId,
    activeStateIds: input.activeStateIds ?? [],
    traceIds: input.traceIds ?? [],
    eventCount: input.eventCount ?? 1,
    satisfaction: "neutral",
  };
}
