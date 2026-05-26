import type { EmbeddingOutput, ModelAdapter } from "../types.js";
import type { JourneyIndexEmbedding } from "./schema.js";

export function assertEmbeddingModel(
  model: ModelAdapter,
): asserts model is ModelAdapter & { embed: NonNullable<ModelAdapter["embed"]> } {
  if (!model.embed) {
    throw new Error(`Model '${model.provider}:${model.model}' does not implement embeddings.`);
  }
}

export function toIndexEmbedding(output: EmbeddingOutput): JourneyIndexEmbedding {
  return {
    model: output.model,
    dimensions: output.dimensions,
    vector: output.embedding,
  };
}
