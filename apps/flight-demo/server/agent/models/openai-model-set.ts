import type { AgentModelSet } from "@cognidesk/core";
import { openaiModel } from "@cognidesk/model-openai";
import type { FlightDemoConfig } from "../../config.js";

export function createOpenAIModelSet(config: FlightDemoConfig, apiKey: string): AgentModelSet {
  return {
    response: openaiModel({ model: config.models.roles.response, apiKey }),
    matcher: openaiModel({ model: config.models.roles.matcher, apiKey }),
    extraction: openaiModel({ model: config.models.roles.extraction, apiKey }),
    citationPostProcessing: openaiModel({ model: config.models.roles.citationPostProcessing, apiKey }),
    compaction: openaiModel({ model: config.models.roles.compaction, apiKey }),
    journeyEmbedding: openaiModel({
      model: config.models.roles.journeyEmbedding,
      embeddingModel: config.models.roles.journeyEmbedding,
      apiKey,
    }),
  };
}
