import { z } from "zod";
import { knowledgeSource, type AgentModelSet } from "@cognidesk/core";
import {
  searchFlightKnowledgeIndex,
  type FlightKnowledgeIndex,
  type FlightKnowledgeMetadata,
} from "../../knowledge-index.js";

export function createFlightKnowledgeSource(args: {
  index: FlightKnowledgeIndex;
  embeddingModel: AgentModelSet["journeyEmbedding"];
}) {
  return knowledgeSource("flight-policies", {
    query: z.object({ query: z.string() }),
    metadata: z.object({
      documentId: z.string(),
      category: z.string(),
      url: z.string().min(1).optional(),
    }),
    retrieve: async ({ query, signal }) => {
      const items = await searchFlightKnowledgeIndex({
        index: args.index,
        embeddingModel: args.embeddingModel,
        query: query.query,
        limit: 5,
        minScore: 0.2,
        ...(signal ? { signal } : {}),
      });
      const enriched = items.map((item) => ({
        ...item,
        metadata: {
          ...item.metadata,
          url: item.metadata.url ?? `/docs/${item.metadata.documentId}.html`,
        },
      }));
      return {
        items: enriched as Array<{
          id: string;
          title?: string;
          content: string;
          score?: number;
          metadata: FlightKnowledgeMetadata & { url: string };
        }>,
      };
    },
  });
}
