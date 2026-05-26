import type { AgentModelSet } from "@cognidesk/core";
import { createModelSet } from "@cognidesk/model";
import { createOpenAI } from "@ai-sdk/openai";
import type { FlightDemoConfig } from "../../config.js";

type OpenAIConfig = Extract<FlightDemoConfig["models"], { provider: "openai" }>;

export function createOpenAIModelSet(config: OpenAIConfig, apiKey: string): AgentModelSet {
  const provider = createOpenAI({ apiKey });
  return createModelSet({
    response: provider.responses(config.roles.response),
    matcher: provider.responses(config.roles.matcher),
    extraction: provider.responses(config.roles.extraction),
    citationPostProcessing: provider.responses(config.roles.citationPostProcessing),
    compaction: provider.responses(config.roles.compaction),
    journeyEmbedding: provider.embedding(config.roles.journeyEmbedding),
  });
}
