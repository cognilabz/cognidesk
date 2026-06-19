// Generated endpoint chunk for FrontFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  FrontGeneratedOperationCaller,
  FrontFullApiOperationArgs,
  FrontFullApiOperationInput,
  FrontFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { FrontFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const FrontFullApiTokenIdentityOperationKeys = [
  "api-token-details"
] as const;
export type FrontFullApiTokenIdentityOperationKey = typeof FrontFullApiTokenIdentityOperationKeys[number];
// End hardened literal operation keys.

export interface FrontFullApiTokenIdentityOperationPathParamMap {
  "api-token-details": {};
}

export interface FrontFullApiTokenIdentityOperationRequestMap {
  "api-token-details": FrontFullApiOperationInput<"api-token-details">;
}

export interface FrontFullApiTokenIdentityGeneratedClient {
  frontApiTokenDetails(...args: FrontFullApiOperationArgs<"api-token-details">): Promise<FrontFullApiOperationResponseMap["api-token-details"]>;
}

export const FrontFullApiTokenIdentityGeneratedFunctionNames = [
  "frontApiTokenDetails"
] as const satisfies readonly (keyof FrontFullApiTokenIdentityGeneratedClient)[];

export function createFrontFullApiTokenIdentityGeneratedClient(
  callOperation: FrontGeneratedOperationCaller,
): FrontFullApiTokenIdentityGeneratedClient {
  return {
    frontApiTokenDetails: (...args) => callOperation("api-token-details", ...(args as FrontFullApiOperationArgs<"api-token-details">)),
  };
}
