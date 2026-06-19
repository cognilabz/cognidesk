// Generated endpoint chunk for AmazonConnectFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  AmazonConnectGeneratedOperationCaller,
  AmazonConnectFullApiOperationArgs,
  AmazonConnectFullApiOperationInput,
  AmazonConnectFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { AmazonConnectFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const AmazonConnectFullApiEffectiveHoursOfOperationsOperationKeys = [
  "connect:GetEffectiveHoursOfOperations"
] as const;
export type AmazonConnectFullApiEffectiveHoursOfOperationsOperationKey = typeof AmazonConnectFullApiEffectiveHoursOfOperationsOperationKeys[number];
// End hardened literal operation keys.

export interface AmazonConnectFullApiEffectiveHoursOfOperationsOperationPathParamMap {
  "connect:GetEffectiveHoursOfOperations": { "InstanceId": AmazonConnectFullApiPathParamValue; "HoursOfOperationId": AmazonConnectFullApiPathParamValue };
}

export interface AmazonConnectFullApiEffectiveHoursOfOperationsOperationRequestMap {
  "connect:GetEffectiveHoursOfOperations": AmazonConnectFullApiOperationInput<"connect:GetEffectiveHoursOfOperations">;
}

export interface AmazonConnectFullApiEffectiveHoursOfOperationsGeneratedClient {
  GetEffectiveHoursOfOperations(...args: AmazonConnectFullApiOperationArgs<"connect:GetEffectiveHoursOfOperations">): Promise<AmazonConnectFullApiOperationResponseMap["connect:GetEffectiveHoursOfOperations"]>;
}

export const AmazonConnectFullApiEffectiveHoursOfOperationsGeneratedFunctionNames = [
  "GetEffectiveHoursOfOperations"
] as const satisfies readonly (keyof AmazonConnectFullApiEffectiveHoursOfOperationsGeneratedClient)[];

export function createAmazonConnectFullApiEffectiveHoursOfOperationsGeneratedClient(
  callOperation: AmazonConnectGeneratedOperationCaller,
): AmazonConnectFullApiEffectiveHoursOfOperationsGeneratedClient {
  return {
    GetEffectiveHoursOfOperations: (...args) => callOperation("connect:GetEffectiveHoursOfOperations", ...(args as AmazonConnectFullApiOperationArgs<"connect:GetEffectiveHoursOfOperations">)),
  };
}
