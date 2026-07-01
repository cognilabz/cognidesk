import { describe, expect, it } from "vitest";
import { StudioKnowledgeSummarySchema } from "../src/index.js";

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
});
