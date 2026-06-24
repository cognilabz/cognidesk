import type { KnowledgeSource } from "@cognidesk/core";
import { createAgent, describe, expect, it } from "./helpers.js";
import { introspectAgent } from "../../src/introspection.js";

describe("studio adapter introspection", () => {
  it("preserves Studio knowledge document previews from sources", () => {
    const schema = {} as KnowledgeSource["query"];
    const flightPolicies = {
      kind: "knowledgeSource",
      name: "flight-policies",
      query: schema,
      metadata: schema,
      retrieve: async () => ({ items: [] }),
      studio: {
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
      },
    } satisfies KnowledgeSource & { studio: Record<string, unknown> };
    const agent = createAgent("test-agent", {
      instructions: "Test agent instructions",
    });
    agent.knowledge.add(flightPolicies);

    const introspection = introspectAgent("test-target", agent.compile());

    expect(introspection.knowledge[0]).toMatchObject({
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
          content: expect.stringContaining("Airport desks"),
          contentSnippet: expect.stringContaining("online check-in"),
        }],
      });
  });
});
