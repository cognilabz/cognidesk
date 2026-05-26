import type { CompiledAgent } from "../definition.js";
import {
  hashAgentRoutingDefinition,
  hashJourneyDefinition,
} from "./hashing.js";
import {
  journeyIndexSchema,
  type JourneyIndex,
  type JourneyIndexValidationResult,
  type ValidateJourneyIndexOptions,
} from "./schema.js";

export function validateJourneyIndex(
  agent: CompiledAgent,
  index: JourneyIndex,
  options: ValidateJourneyIndexOptions = {},
): JourneyIndexValidationResult {
  const parsed = journeyIndexSchema.safeParse(index);
  const errors: string[] = [];
  if (!parsed.success) {
    errors.push(parsed.error.message);
    return { ok: false, errors };
  }

  if (index.agentId !== agent.id) errors.push(`Index agent '${index.agentId}' does not match '${agent.id}'.`);
  if (index.definitionHash !== hashAgentRoutingDefinition(agent)) {
    errors.push("Agent routing definition hash does not match the generated index.");
  }
  if (options.embeddingModel) {
    if (index.embeddingProvider !== options.embeddingModel.provider) {
      errors.push(`Index embedding provider '${index.embeddingProvider}' does not match '${options.embeddingModel.provider}'.`);
    }
    if (index.embeddingModel !== options.embeddingModel.model) {
      errors.push(`Index embedding model '${index.embeddingModel}' does not match '${options.embeddingModel.model}'.`);
    }
  }

  const entryById = new Map(index.entries.map((entry) => [entry.journeyId, entry]));
  for (const journey of agent.journeys) {
    const entry = entryById.get(journey.id);
    if (!entry) {
      errors.push(`Journey '${journey.id}' is missing from the index.`);
      continue;
    }
    const expectedHash = hashJourneyDefinition(journey);
    if (entry.definitionHash !== expectedHash) {
      errors.push(`Journey '${journey.id}' hash changed; regenerate the journey index.`);
    }
  }

  return { ok: errors.length === 0, errors };
}
