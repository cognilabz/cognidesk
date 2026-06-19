// Generated endpoint chunk for DeepgramSpeechFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  DeepgramSpeechGeneratedOperationCaller,
  DeepgramSpeechFullApiOperationArgs,
  DeepgramSpeechFullApiOperationInput,
  DeepgramSpeechFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { DeepgramSpeechFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const DeepgramSpeechFullApiSubpackageAgentSubpackageAgentV1SubpackageAgentV1SettingsSubpackageAgentV1SettingsThinkSubpackageAgentV1SettingsThinkModelsOperationKeys = [
  "GET /v1/agent/settings/think/models"
] as const;
export type DeepgramSpeechFullApiSubpackageAgentSubpackageAgentV1SubpackageAgentV1SettingsSubpackageAgentV1SettingsThinkSubpackageAgentV1SettingsThinkModelsOperationKey = typeof DeepgramSpeechFullApiSubpackageAgentSubpackageAgentV1SubpackageAgentV1SettingsSubpackageAgentV1SettingsThinkSubpackageAgentV1SettingsThinkModelsOperationKeys[number];
// End hardened literal operation keys.

export interface DeepgramSpeechFullApiSubpackageAgentSubpackageAgentV1SubpackageAgentV1SettingsSubpackageAgentV1SettingsThinkSubpackageAgentV1SettingsThinkModelsOperationPathParamMap {
  "GET /v1/agent/settings/think/models": {};
}

export interface DeepgramSpeechFullApiSubpackageAgentSubpackageAgentV1SubpackageAgentV1SettingsSubpackageAgentV1SettingsThinkSubpackageAgentV1SettingsThinkModelsOperationRequestMap {
  "GET /v1/agent/settings/think/models": DeepgramSpeechFullApiOperationInput<"GET /v1/agent/settings/think/models">;
}

export interface DeepgramSpeechFullApiSubpackageAgentSubpackageAgentV1SubpackageAgentV1SettingsSubpackageAgentV1SettingsThinkSubpackageAgentV1SettingsThinkModelsGeneratedClient {
  List(...args: DeepgramSpeechFullApiOperationArgs<"GET /v1/agent/settings/think/models">): Promise<DeepgramSpeechFullApiOperationResponseMap["GET /v1/agent/settings/think/models"]>;
}

export const DeepgramSpeechFullApiSubpackageAgentSubpackageAgentV1SubpackageAgentV1SettingsSubpackageAgentV1SettingsThinkSubpackageAgentV1SettingsThinkModelsGeneratedFunctionNames = [
  "List"
] as const satisfies readonly (keyof DeepgramSpeechFullApiSubpackageAgentSubpackageAgentV1SubpackageAgentV1SettingsSubpackageAgentV1SettingsThinkSubpackageAgentV1SettingsThinkModelsGeneratedClient)[];

export function createDeepgramSpeechFullApiSubpackageAgentSubpackageAgentV1SubpackageAgentV1SettingsSubpackageAgentV1SettingsThinkSubpackageAgentV1SettingsThinkModelsGeneratedClient(
  callOperation: DeepgramSpeechGeneratedOperationCaller,
): DeepgramSpeechFullApiSubpackageAgentSubpackageAgentV1SubpackageAgentV1SettingsSubpackageAgentV1SettingsThinkSubpackageAgentV1SettingsThinkModelsGeneratedClient {
  return {
    List: (...args) => callOperation("GET /v1/agent/settings/think/models", ...(args as DeepgramSpeechFullApiOperationArgs<"GET /v1/agent/settings/think/models">)),
  };
}
