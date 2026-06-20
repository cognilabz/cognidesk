import type { AgentModelSet } from "@cognidesk/core";
import type { ConfiguredModelApiKeys, FlightDemoConfig } from "../../config.js";
import { createAiSdkModelSet } from "./ai-sdk-model-set.js";

type OpenRouterConfig = Extract<FlightDemoConfig["models"], { provider: "openrouter" }>;

export function createOpenRouterModelSet(config: OpenRouterConfig, apiKeys: ConfiguredModelApiKeys | string): AgentModelSet {
  return createAiSdkModelSet(config, apiKeys);
}
