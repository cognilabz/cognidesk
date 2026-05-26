import type { CompiledAgent } from "../definition.js";
import { assertEmbeddingModel, toIndexEmbedding } from "./embeddings.js";
import {
  createJourneyRoutingText,
  hashAgentRoutingDefinition,
  hashJourneyDefinition,
} from "./hashing.js";
import {
  JOURNEY_INDEX_PROJECTION_VERSION,
  journeyIndexSchema,
  type BuildJourneyIndexOptions,
  type JourneyIndex,
  type JourneyIndexEntry,
} from "./schema.js";

export async function buildJourneyIndex(
  agent: CompiledAgent,
  options: BuildJourneyIndexOptions,
): Promise<JourneyIndex> {
  assertEmbeddingModel(options.embeddingModel);

  const entries: JourneyIndexEntry[] = [];
  for (const journey of agent.journeys) {
    const routingText = createJourneyRoutingText(journey);
    const embedding = await options.embeddingModel.embed({
      role: "journeyEmbedding",
      text: routingText,
      ...(options.signal ? { signal: options.signal } : {}),
    });
    entries.push({
      journeyId: journey.id,
      kind: journey.kind,
      condition: journey.condition,
      examples: journey.examples,
      tags: journey.tags,
      priority: journey.priority,
      stickiness: journey.stickiness,
      alwaysInclude: journey.alwaysInclude,
      definitionHash: hashJourneyDefinition(journey),
      routingText,
      embedding: toIndexEmbedding(embedding),
    });
  }

  const index: JourneyIndex = {
    agentId: agent.id,
    projectionVersion: JOURNEY_INDEX_PROJECTION_VERSION,
    definitionHash: hashAgentRoutingDefinition(agent),
    embeddingProvider: options.embeddingModel.provider,
    embeddingModel: options.embeddingModel.model,
    generatedAt: options.generatedAt ?? new Date().toISOString(),
    entries,
  };

  return journeyIndexSchema.parse(index);
}
