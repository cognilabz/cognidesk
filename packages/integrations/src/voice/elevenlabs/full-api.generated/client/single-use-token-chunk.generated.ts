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
export const ElevenLabsFullApiSingleUseTokenOperationKeys = [
  "POST /v1/single-use-token/{token_type}"
] as const;
export type ElevenLabsFullApiSingleUseTokenOperationKey = typeof ElevenLabsFullApiSingleUseTokenOperationKeys[number];
// End hardened literal operation keys.

export interface ElevenLabsFullApiSingleUseTokenOperationPathParamMap {
  "POST /v1/single-use-token/{token_type}": { "token_type": ElevenLabsFullApiPathParamValue };
}

export interface ElevenLabsFullApiSingleUseTokenOperationRequestMap {
  "POST /v1/single-use-token/{token_type}": ElevenLabsFullApiOperationInput<"POST /v1/single-use-token/{token_type}">;
}

export interface ElevenLabsFullApiSingleUseTokenGeneratedClient {
  GetSingleUseToken(...args: ElevenLabsFullApiOperationArgs<"POST /v1/single-use-token/{token_type}">): Promise<ElevenLabsFullApiOperationResponseMap["POST /v1/single-use-token/{token_type}"]>;
}

export const ElevenLabsFullApiSingleUseTokenGeneratedFunctionNames = [
  "GetSingleUseToken"
] as const satisfies readonly (keyof ElevenLabsFullApiSingleUseTokenGeneratedClient)[];

export function createElevenLabsFullApiSingleUseTokenGeneratedClient(
  callOperation: ElevenLabsGeneratedOperationCaller,
): ElevenLabsFullApiSingleUseTokenGeneratedClient {
  return {
    GetSingleUseToken: (...args) => callOperation("POST /v1/single-use-token/{token_type}", ...(args as ElevenLabsFullApiOperationArgs<"POST /v1/single-use-token/{token_type}">)),
  };
}
