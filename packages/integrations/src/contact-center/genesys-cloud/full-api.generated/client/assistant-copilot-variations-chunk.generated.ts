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
export const GenesysCloudFullApiAssistantCopilotVariationsOperationKeys = [
  "deleteAssistantVariation",
  "getAssistantVariation",
  "getAssistantVariations",
  "postAssistantVariations",
  "putAssistantVariation"
] as const;
export type GenesysCloudFullApiAssistantCopilotVariationsOperationKey = typeof GenesysCloudFullApiAssistantCopilotVariationsOperationKeys[number];
// End hardened literal operation keys.

export interface GenesysCloudFullApiAssistantCopilotVariationsOperationPathParamMap {
  "deleteAssistantVariation": { "assistantId": GenesysCloudFullApiPathParamValue; "variationId": GenesysCloudFullApiPathParamValue };
  "getAssistantVariation": { "assistantId": GenesysCloudFullApiPathParamValue; "variationId": GenesysCloudFullApiPathParamValue };
  "getAssistantVariations": { "assistantId": GenesysCloudFullApiPathParamValue };
  "postAssistantVariations": { "assistantId": GenesysCloudFullApiPathParamValue };
  "putAssistantVariation": { "assistantId": GenesysCloudFullApiPathParamValue; "variationId": GenesysCloudFullApiPathParamValue };
}

export interface GenesysCloudFullApiAssistantCopilotVariationsOperationRequestMap {
  "deleteAssistantVariation": GenesysCloudFullApiOperationInput<"deleteAssistantVariation">;
  "getAssistantVariation": GenesysCloudFullApiOperationInput<"getAssistantVariation">;
  "getAssistantVariations": GenesysCloudFullApiOperationInput<"getAssistantVariations">;
  "postAssistantVariations": GenesysCloudFullApiOperationInput<"postAssistantVariations">;
  "putAssistantVariation": GenesysCloudFullApiOperationInput<"putAssistantVariation">;
}

export interface GenesysCloudFullApiAssistantCopilotVariationsGeneratedClient {
  DeleteAssistantVariation(...args: GenesysCloudFullApiOperationArgs<"deleteAssistantVariation">): Promise<GenesysCloudFullApiOperationResponseMap["deleteAssistantVariation"]>;
  GetAssistantVariation(...args: GenesysCloudFullApiOperationArgs<"getAssistantVariation">): Promise<GenesysCloudFullApiOperationResponseMap["getAssistantVariation"]>;
  GetAssistantVariations(...args: GenesysCloudFullApiOperationArgs<"getAssistantVariations">): Promise<GenesysCloudFullApiOperationResponseMap["getAssistantVariations"]>;
  PostAssistantVariations(...args: GenesysCloudFullApiOperationArgs<"postAssistantVariations">): Promise<GenesysCloudFullApiOperationResponseMap["postAssistantVariations"]>;
  PutAssistantVariation(...args: GenesysCloudFullApiOperationArgs<"putAssistantVariation">): Promise<GenesysCloudFullApiOperationResponseMap["putAssistantVariation"]>;
}

export const GenesysCloudFullApiAssistantCopilotVariationsGeneratedFunctionNames = [
  "DeleteAssistantVariation",
  "GetAssistantVariation",
  "GetAssistantVariations",
  "PostAssistantVariations",
  "PutAssistantVariation"
] as const satisfies readonly (keyof GenesysCloudFullApiAssistantCopilotVariationsGeneratedClient)[];

export function createGenesysCloudFullApiAssistantCopilotVariationsGeneratedClient(
  callOperation: GenesysCloudGeneratedOperationCaller,
): GenesysCloudFullApiAssistantCopilotVariationsGeneratedClient {
  return {
    DeleteAssistantVariation: (...args) => callOperation("deleteAssistantVariation", ...(args as GenesysCloudFullApiOperationArgs<"deleteAssistantVariation">)),
    GetAssistantVariation: (...args) => callOperation("getAssistantVariation", ...(args as GenesysCloudFullApiOperationArgs<"getAssistantVariation">)),
    GetAssistantVariations: (...args) => callOperation("getAssistantVariations", ...(args as GenesysCloudFullApiOperationArgs<"getAssistantVariations">)),
    PostAssistantVariations: (...args) => callOperation("postAssistantVariations", ...(args as GenesysCloudFullApiOperationArgs<"postAssistantVariations">)),
    PutAssistantVariation: (...args) => callOperation("putAssistantVariation", ...(args as GenesysCloudFullApiOperationArgs<"putAssistantVariation">)),
  };
}
