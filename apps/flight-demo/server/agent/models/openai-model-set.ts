import type { AgentModelSet } from "@cognidesk/core";
import type { ConfiguredModelApiKeys, FlightDemoConfig } from "../../config.js";
import { createAiSdkModelSet } from "./ai-sdk-model-set.js";

type OpenAIConfig = Extract<FlightDemoConfig["models"], { provider: "openai" }>;

export function createOpenAIModelSet(config: OpenAIConfig, apiKeys: ConfiguredModelApiKeys | string): AgentModelSet {
  return createAiSdkModelSet(config, apiKeys);
}
