import { describe, expect, it } from "vitest";
import { createFlightKnowledgeSource } from "../server/agent/knowledge/source.js";
import { createTestKnowledgeIndex, createTestModelSet } from "./fixtures.js";

describe("flight knowledge source", () => {
  it("exposes policy document previews for Studio", async () => {
    const models = createTestModelSet();
    const source = createFlightKnowledgeSource({
      index: await createTestKnowledgeIndex(models),
      embeddingModel: models.journeyEmbedding,
    });

    expect(source.studio).toMatchObject({
      title: "Flight policy documents",
      documentCount: 5,
      metadata: {
        category: "flight-policies",
      },
    });
    expect(source.studio.documents).toEqual(expect.arrayContaining([
      expect.objectContaining({
        id: "test-baggage",
        title: "Baggage",
        metadata: {
          category: "baggage",
          url: "/docs/test-baggage.html",
        },
        content: expect.stringContaining("Economy tickets include one cabin bag"),
        contentSnippet: expect.stringContaining("Economy tickets include one cabin bag"),
      }),
    ]));
    expect(source.studio.documents.every((document) => document.contentSnippet.length <= 220)).toBe(true);
  });
});
