import { z } from "zod";
import type { CompiledAgent, CompiledJourney } from "../definition.js";
import type { ModelAdapter } from "../types.js";

export const JOURNEY_INDEX_PROJECTION_VERSION = "cognidesk.journey-index.v1";

export const journeyIndexEmbeddingSchema = z.object({
  model: z.string(),
  dimensions: z.number().int().positive(),
  vector: z.array(z.number()),
});

export const journeyIndexEntrySchema = z.object({
  journeyId: z.string(),
  kind: z.enum(["stateMachine", "delegation"]),
  condition: z.string(),
  examples: z.array(z.string()),
  tags: z.array(z.string()),
  priority: z.number(),
  stickiness: z.enum(["low", "medium", "high"]),
  alwaysInclude: z.boolean(),
  definitionHash: z.string(),
  routingText: z.string(),
  embedding: journeyIndexEmbeddingSchema,
});

export const journeyIndexSchema = z.object({
  agentId: z.string(),
  projectionVersion: z.literal(JOURNEY_INDEX_PROJECTION_VERSION),
  definitionHash: z.string(),
  embeddingProvider: z.string(),
  embeddingModel: z.string(),
  generatedAt: z.string(),
  entries: z.array(journeyIndexEntrySchema),
});

export type JourneyIndexEmbedding = z.infer<typeof journeyIndexEmbeddingSchema>;
export type JourneyIndexEntry = z.infer<typeof journeyIndexEntrySchema>;
export type JourneyIndex = z.infer<typeof journeyIndexSchema>;

export interface BuildJourneyIndexOptions {
  embeddingModel: ModelAdapter;
  generatedAt?: string;
  signal?: AbortSignal;
}

export interface JourneyIndexValidationResult {
  ok: boolean;
  errors: string[];
}

export interface ValidateJourneyIndexOptions {
  embeddingModel?: Pick<ModelAdapter, "provider" | "model">;
}

export interface SelectJourneyCandidatesOptions<TApp = unknown, TConversation = unknown, TTurn = unknown> {
  agent: CompiledAgent;
  index: JourneyIndex;
  embeddingModel: ModelAdapter;
  message: string;
  app: TApp;
  conversation: TConversation;
  turn: TTurn;
  activeJourneyId?: string;
  topK?: number;
  allowStaleIndex?: boolean;
  signal?: AbortSignal;
}

export interface JourneyCandidate {
  journeyId: string;
  journey: CompiledJourney;
  score: number;
  similarity: number;
  reason: "always" | "matcher" | "embedding";
  definitionHash: string;
}
