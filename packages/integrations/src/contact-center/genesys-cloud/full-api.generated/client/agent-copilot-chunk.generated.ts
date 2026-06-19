// Generated endpoint chunk for GenesysCloudFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  GenesysCloudGeneratedOperationCaller,
  GenesysCloudFullApiOperationArgs,
  GenesysCloudFullApiOperationInput,
  GenesysCloudFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { GenesysCloudFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const GenesysCloudFullApiAgentCopilotOperationKeys = [
  "getAssistantCopilot",
  "getAssistantsCopilotFeaturesupport",
  "putAssistantCopilot"
] as const;
export type GenesysCloudFullApiAgentCopilotOperationKey = typeof GenesysCloudFullApiAgentCopilotOperationKeys[number];
// End hardened literal operation keys.

export interface GenesysCloudFullApiAgentCopilotOperationPathParamMap {
  "getAssistantCopilot": { "assistantId": GenesysCloudFullApiPathParamValue };
  "getAssistantsCopilotFeaturesupport": {};
  "putAssistantCopilot": { "assistantId": GenesysCloudFullApiPathParamValue };
}

export interface GenesysCloudFullApiAgentCopilotOperationRequestMap {
  "getAssistantCopilot": GenesysCloudFullApiOperationInput<"getAssistantCopilot">;
  "getAssistantsCopilotFeaturesupport": GenesysCloudFullApiOperationInput<"getAssistantsCopilotFeaturesupport">;
  "putAssistantCopilot": GenesysCloudFullApiOperationInput<"putAssistantCopilot">;
}

export interface GenesysCloudFullApiAgentCopilotGeneratedClient {
  GetAssistantCopilot(...args: GenesysCloudFullApiOperationArgs<"getAssistantCopilot">): Promise<GenesysCloudFullApiOperationResponseMap["getAssistantCopilot"]>;
  GetAssistantsCopilotFeaturesupport(...args: GenesysCloudFullApiOperationArgs<"getAssistantsCopilotFeaturesupport">): Promise<GenesysCloudFullApiOperationResponseMap["getAssistantsCopilotFeaturesupport"]>;
  PutAssistantCopilot(...args: GenesysCloudFullApiOperationArgs<"putAssistantCopilot">): Promise<GenesysCloudFullApiOperationResponseMap["putAssistantCopilot"]>;
}

export const GenesysCloudFullApiAgentCopilotGeneratedFunctionNames = [
  "GetAssistantCopilot",
  "GetAssistantsCopilotFeaturesupport",
  "PutAssistantCopilot"
] as const satisfies readonly (keyof GenesysCloudFullApiAgentCopilotGeneratedClient)[];

export function createGenesysCloudFullApiAgentCopilotGeneratedClient(
  callOperation: GenesysCloudGeneratedOperationCaller,
): GenesysCloudFullApiAgentCopilotGeneratedClient {
  return {
    GetAssistantCopilot: (...args) => callOperation("getAssistantCopilot", ...(args as GenesysCloudFullApiOperationArgs<"getAssistantCopilot">)),
    GetAssistantsCopilotFeaturesupport: (...args) => callOperation("getAssistantsCopilotFeaturesupport", ...(args as GenesysCloudFullApiOperationArgs<"getAssistantsCopilotFeaturesupport">)),
    PutAssistantCopilot: (...args) => callOperation("putAssistantCopilot", ...(args as GenesysCloudFullApiOperationArgs<"putAssistantCopilot">)),
  };
}
