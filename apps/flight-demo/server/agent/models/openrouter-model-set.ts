import type { AgentModelSet } from "@cognidesk/core";
import { openRouterModel } from "@cognidesk/model-openrouter";
import type { FlightDemoConfig } from "../../config.js";

type OpenRouterConfig = Extract<FlightDemoConfig["models"], { provider: "openrouter" }>;

export function createOpenRouterModelSet(config: OpenRouterConfig, apiKey: string): AgentModelSet {
  const shared = {
    apiKey,
    ...(config.appName ? { appName: config.appName } : {}),
    ...(config.siteUrl ? { siteUrl: config.siteUrl } : {}),
  };
  return {
    response: openRouterModel({ model: config.roles.response, ...shared }),
    matcher: openRouterModel({ model: config.roles.matcher, ...shared }),
    extraction: openRouterModel({ model: config.roles.extraction, ...shared }),
    citationPostProcessing: openRouterModel({ model: config.roles.citationPostProcessing, ...shared }),
    compaction: openRouterModel({ model: config.roles.compaction, ...shared }),
    journeyEmbedding: openRouterModel({
      model: config.roles.journeyEmbedding,
      embeddingModel: config.roles.journeyEmbedding,
      ...shared,
    }),
  };
}
