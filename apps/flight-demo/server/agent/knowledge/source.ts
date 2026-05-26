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
    }),
    retrieve: async ({ query, signal }) => {
      const items = await searchFlightKnowledgeIndex({
        index: args.index,
        embeddingModel: args.embeddingModel,
        query: query.query,
        ...(signal ? { signal } : {}),
      });
      return {
        items: items as Array<{
          id: string;
          title?: string;
          content: string;
          score?: number;
          metadata: FlightKnowledgeMetadata;
        }>,
      };
    },
  });
}
