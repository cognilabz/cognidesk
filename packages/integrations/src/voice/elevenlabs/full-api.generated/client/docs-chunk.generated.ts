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
export const ElevenLabsFullApiDocsOperationKeys = [
  "GET /docs"
] as const;
export type ElevenLabsFullApiDocsOperationKey = typeof ElevenLabsFullApiDocsOperationKeys[number];
// End hardened literal operation keys.

export interface ElevenLabsFullApiDocsOperationPathParamMap {
  "GET /docs": {};
}

export interface ElevenLabsFullApiDocsOperationRequestMap {
  "GET /docs": ElevenLabsFullApiOperationInput<"GET /docs">;
}

export interface ElevenLabsFullApiDocsGeneratedClient {
  RedirectToMintlify(...args: ElevenLabsFullApiOperationArgs<"GET /docs">): Promise<ElevenLabsFullApiOperationResponseMap["GET /docs"]>;
}

export const ElevenLabsFullApiDocsGeneratedFunctionNames = [
  "RedirectToMintlify"
] as const satisfies readonly (keyof ElevenLabsFullApiDocsGeneratedClient)[];

export function createElevenLabsFullApiDocsGeneratedClient(
  callOperation: ElevenLabsGeneratedOperationCaller,
): ElevenLabsFullApiDocsGeneratedClient {
  return {
    RedirectToMintlify: (...args) => callOperation("GET /docs", ...(args as ElevenLabsFullApiOperationArgs<"GET /docs">)),
  };
}
