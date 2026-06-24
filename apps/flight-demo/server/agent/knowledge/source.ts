import { z } from "zod";
import { knowledgeSource, type AgentModelSet } from "@cognidesk/core";
import {
  searchFlightKnowledgeIndex,
  type FlightKnowledgeIndex,
  type FlightKnowledgeMetadata,
} from "../../knowledge-index.js";

const CONTENT_SNIPPET_MAX_LENGTH = 220;

type FlightKnowledgeStudioSummary = {
  title: string;
  description: string;
  documentCount: number;
  metadata: {
    category: string;
  };
  documents: Array<{
    id: string;
    title: string;
      metadata: {
        category: string;
        url: string;
      };
      content: string;
      contentSnippet: string;
    }>;
};

export function createFlightKnowledgeSource(args: {
  index: FlightKnowledgeIndex;
  embeddingModel: AgentModelSet["journeyEmbedding"];
}) {
  return {
    ...knowledgeSource("flight-policies", {
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
    }),
    studio: createFlightKnowledgeStudioSummary(args.index),
  };
}

function createFlightKnowledgeStudioSummary(index: FlightKnowledgeIndex): FlightKnowledgeStudioSummary {
  return {
    title: "Flight policy documents",
    description: "Policy documents available to the Flight Demo retrieval source.",
    documentCount: index.entries.length,
    metadata: {
      category: "flight-policies",
    },
    documents: index.entries.map((entry) => ({
      id: entry.metadata.documentId,
      title: entry.title,
      metadata: {
        category: entry.metadata.category,
        url: entry.metadata.url ?? `/docs/${entry.metadata.documentId}.html`,
      },
      content: entry.content,
      contentSnippet: createContentSnippet(entry.content),
    })),
  };
}

function createContentSnippet(content: string) {
  const normalized = content.replace(/\s+/g, " ").trim();
  if (normalized.length <= CONTENT_SNIPPET_MAX_LENGTH) return normalized;
  return `${normalized.slice(0, CONTENT_SNIPPET_MAX_LENGTH - 3).trimEnd()}...`;
}
