import { describe, expect, it } from "vitest";
import { StudioConversationSummarySchema, StudioKnowledgeSummarySchema } from "../src/index.js";

describe("studio summary contracts", () => {
  it("preserves knowledge document previews for Studio", () => {
    const summary = StudioKnowledgeSummarySchema.parse({
      name: "flight-policies",
      title: "Flight policy documents",
      documentCount: 1,
      metadata: {
        category: "flight-policies",
      },
      documents: [{
        id: "cogni-air-checkin",
        title: "Cogni Air check-in windows",
        metadata: {
          category: "check-in",
          url: "/docs/cogni-air-checkin.html",
        },
        content: "Cogni Air opens online check-in 24 hours before scheduled departure. Airport desks close 45 minutes before departure.",
        contentSnippet: "Cogni Air opens online check-in 24 hours before scheduled departure.",
      }],
    });

    expect(summary.documents?.[0]).toMatchObject({
      id: "cogni-air-checkin",
      title: "Cogni Air check-in windows",
      metadata: {
        category: "check-in",
        url: "/docs/cogni-air-checkin.html",
      },
      content: expect.stringContaining("Airport desks"),
      contentSnippet: expect.stringContaining("online check-in"),
    });
  });

  it("preserves alternate knowledge detail fields for older adapters", () => {
    const summary = StudioKnowledgeSummarySchema.parse({
      name: "official-sources",
      entries: [{
        id: "source-1",
        title: "Passenger rights",
        url: "https://example.test/passenger-rights",
      }],
      documents: [{
        id: "source-2",
        title: "Delay compensation",
        url: "https://example.test/delay-compensation",
      }],
    });

    expect(summary).toMatchObject({
      name: "official-sources",
      entries: [{
        id: "source-1",
        title: "Passenger rights",
        url: "https://example.test/passenger-rights",
      }],
      documents: [{
        id: "source-2",
        title: "Delay compensation",
        url: "https://example.test/delay-compensation",
      }],
    });
  });

  it("preserves conversation extension fields for dashboard datasets", () => {
    const summary = StudioConversationSummarySchema.parse({
      id: "conversation_123",
      agentId: "support-agent",
      lifecycle: "closed",
      createdAt: "2026-06-26T08:00:00.000Z",
      updatedAt: "2026-06-26T08:10:00.000Z",
      totalTokens: 420,
      modelCalls: 3,
      usage: {
        inputTokens: 120,
        outputTokens: 300,
        totalTokens: 420,
      },
      metrics: {
        modelCalls: 3,
      },
      attributes: {
        "gen_ai.request.model": "gpt-5-mini",
      },
    });

    expect(summary).toMatchObject({
      totalTokens: 420,
      modelCalls: 3,
      usage: { totalTokens: 420 },
      metrics: { modelCalls: 3 },
      attributes: {
        "gen_ai.request.model": "gpt-5-mini",
      },
    });
  });
});
