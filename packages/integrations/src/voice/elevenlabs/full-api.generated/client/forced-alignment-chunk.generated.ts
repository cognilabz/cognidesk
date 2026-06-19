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
export const ElevenLabsFullApiForcedAlignmentOperationKeys = [
  "POST /v1/forced-alignment"
] as const;
export type ElevenLabsFullApiForcedAlignmentOperationKey = typeof ElevenLabsFullApiForcedAlignmentOperationKeys[number];
// End hardened literal operation keys.

export interface ElevenLabsFullApiForcedAlignmentOperationPathParamMap {
  "POST /v1/forced-alignment": {};
}

export interface ElevenLabsFullApiForcedAlignmentOperationRequestMap {
  "POST /v1/forced-alignment": ElevenLabsFullApiOperationInput<"POST /v1/forced-alignment">;
}

export interface ElevenLabsFullApiForcedAlignmentGeneratedClient {
  ForcedAlignment(...args: ElevenLabsFullApiOperationArgs<"POST /v1/forced-alignment">): Promise<ElevenLabsFullApiOperationResponseMap["POST /v1/forced-alignment"]>;
}

export const ElevenLabsFullApiForcedAlignmentGeneratedFunctionNames = [
  "ForcedAlignment"
] as const satisfies readonly (keyof ElevenLabsFullApiForcedAlignmentGeneratedClient)[];

export function createElevenLabsFullApiForcedAlignmentGeneratedClient(
  callOperation: ElevenLabsGeneratedOperationCaller,
): ElevenLabsFullApiForcedAlignmentGeneratedClient {
  return {
    ForcedAlignment: (...args) => callOperation("POST /v1/forced-alignment", ...(args as ElevenLabsFullApiOperationArgs<"POST /v1/forced-alignment">)),
  };
}
