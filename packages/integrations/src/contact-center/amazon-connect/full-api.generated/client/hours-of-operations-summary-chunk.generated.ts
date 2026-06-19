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
export const AmazonConnectFullApiHoursOfOperationsSummaryOperationKeys = [
  "connect:ListHoursOfOperations"
] as const;
export type AmazonConnectFullApiHoursOfOperationsSummaryOperationKey = typeof AmazonConnectFullApiHoursOfOperationsSummaryOperationKeys[number];
// End hardened literal operation keys.

export interface AmazonConnectFullApiHoursOfOperationsSummaryOperationPathParamMap {
  "connect:ListHoursOfOperations": { "InstanceId": AmazonConnectFullApiPathParamValue };
}

export interface AmazonConnectFullApiHoursOfOperationsSummaryOperationRequestMap {
  "connect:ListHoursOfOperations": AmazonConnectFullApiOperationInput<"connect:ListHoursOfOperations">;
}

export interface AmazonConnectFullApiHoursOfOperationsSummaryGeneratedClient {
  ListHoursOfOperations(...args: AmazonConnectFullApiOperationArgs<"connect:ListHoursOfOperations">): Promise<AmazonConnectFullApiOperationResponseMap["connect:ListHoursOfOperations"]>;
}

export const AmazonConnectFullApiHoursOfOperationsSummaryGeneratedFunctionNames = [
  "ListHoursOfOperations"
] as const satisfies readonly (keyof AmazonConnectFullApiHoursOfOperationsSummaryGeneratedClient)[];

export function createAmazonConnectFullApiHoursOfOperationsSummaryGeneratedClient(
  callOperation: AmazonConnectGeneratedOperationCaller,
): AmazonConnectFullApiHoursOfOperationsSummaryGeneratedClient {
  return {
    ListHoursOfOperations: (...args) => callOperation("connect:ListHoursOfOperations", ...(args as AmazonConnectFullApiOperationArgs<"connect:ListHoursOfOperations">)),
  };
}
