// Generated endpoint chunk for ElevenLabsFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  ElevenLabsGeneratedOperationCaller,
  ElevenLabsFullApiOperationArgs,
  ElevenLabsFullApiOperationInput,
  ElevenLabsFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { ElevenLabsFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const ElevenLabsFullApiModelsOperationKeys = [
  "GET /v1/models"
] as const;
export type ElevenLabsFullApiModelsOperationKey = typeof ElevenLabsFullApiModelsOperationKeys[number];
// End hardened literal operation keys.

export interface ElevenLabsFullApiModelsOperationPathParamMap {
  "GET /v1/models": {};
}

export interface ElevenLabsFullApiModelsOperationRequestMap {
  "GET /v1/models": ElevenLabsFullApiOperationInput<"GET /v1/models">;
}

export interface ElevenLabsFullApiModelsGeneratedClient {
  GetModels(...args: ElevenLabsFullApiOperationArgs<"GET /v1/models">): Promise<ElevenLabsFullApiOperationResponseMap["GET /v1/models"]>;
}

export const ElevenLabsFullApiModelsGeneratedFunctionNames = [
  "GetModels"
] as const satisfies readonly (keyof ElevenLabsFullApiModelsGeneratedClient)[];

export function createElevenLabsFullApiModelsGeneratedClient(
  callOperation: ElevenLabsGeneratedOperationCaller,
): ElevenLabsFullApiModelsGeneratedClient {
  return {
    GetModels: (...args) => callOperation("GET /v1/models", ...(args as ElevenLabsFullApiOperationArgs<"GET /v1/models">)),
  };
}
