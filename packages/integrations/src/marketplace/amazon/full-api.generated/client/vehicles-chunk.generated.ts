// Generated endpoint chunk for AmazonFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  AmazonGeneratedOperationCaller,
  AmazonFullApiOperationArgs,
  AmazonFullApiOperationInput,
  AmazonFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { AmazonFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const AmazonFullApiVehiclesOperationKeys = [
  "vehicles_2024-11-01:getVehicles"
] as const;
export type AmazonFullApiVehiclesOperationKey = typeof AmazonFullApiVehiclesOperationKeys[number];
// End hardened literal operation keys.

export interface AmazonFullApiVehiclesOperationPathParamMap {
  "vehicles_2024-11-01:getVehicles": {};
}

export interface AmazonFullApiVehiclesOperationRequestMap {
  "vehicles_2024-11-01:getVehicles": AmazonFullApiOperationInput<"vehicles_2024-11-01:getVehicles">;
}

export interface AmazonFullApiVehiclesGeneratedClient {
  GetVehicles(...args: AmazonFullApiOperationArgs<"vehicles_2024-11-01:getVehicles">): Promise<AmazonFullApiOperationResponseMap["vehicles_2024-11-01:getVehicles"]>;
}

export const AmazonFullApiVehiclesGeneratedFunctionNames = [
  "GetVehicles"
] as const satisfies readonly (keyof AmazonFullApiVehiclesGeneratedClient)[];

export function createAmazonFullApiVehiclesGeneratedClient(
  callOperation: AmazonGeneratedOperationCaller,
): AmazonFullApiVehiclesGeneratedClient {
  return {
    GetVehicles: (...args) => callOperation("vehicles_2024-11-01:getVehicles", ...(args as AmazonFullApiOperationArgs<"vehicles_2024-11-01:getVehicles">)),
  };
}
