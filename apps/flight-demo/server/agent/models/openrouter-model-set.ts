import type { AgentModelSet } from "@cognidesk/core";
import { createModelSet } from "@cognidesk/model";
import { createOpenRouter } from "@openrouter/ai-sdk-provider";
import type { FlightDemoConfig } from "../../config.js";

type OpenRouterConfig = Extract<FlightDemoConfig["models"], { provider: "openrouter" }>;

export function createOpenRouterModelSet(config: OpenRouterConfig, apiKey: string): AgentModelSet {
  const provider = createOpenRouter({
    apiKey,
    ...(config.appName ? { appName: config.appName } : {}),
    ...(config.siteUrl ? { appUrl: config.siteUrl } : {}),
  });
  return createModelSet({
    response: provider.chat(config.roles.response),
    matcher: provider.chat(config.roles.matcher),
    extraction: provider.chat(config.roles.extraction),
    citationPostProcessing: provider.chat(config.roles.citationPostProcessing),
    compaction: provider.chat(config.roles.compaction),
    journeyEmbedding: provider.textEmbeddingModel(config.roles.journeyEmbedding),
  });
}
