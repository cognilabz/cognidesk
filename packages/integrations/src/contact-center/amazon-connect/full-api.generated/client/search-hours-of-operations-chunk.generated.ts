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
export const AmazonConnectFullApiSearchHoursOfOperationsOperationKeys = [
  "connect:SearchHoursOfOperations"
] as const;
export type AmazonConnectFullApiSearchHoursOfOperationsOperationKey = typeof AmazonConnectFullApiSearchHoursOfOperationsOperationKeys[number];
// End hardened literal operation keys.

export interface AmazonConnectFullApiSearchHoursOfOperationsOperationPathParamMap {
  "connect:SearchHoursOfOperations": {};
}

export interface AmazonConnectFullApiSearchHoursOfOperationsOperationRequestMap {
  "connect:SearchHoursOfOperations": AmazonConnectFullApiOperationInput<"connect:SearchHoursOfOperations">;
}

export interface AmazonConnectFullApiSearchHoursOfOperationsGeneratedClient {
  SearchHoursOfOperations(...args: AmazonConnectFullApiOperationArgs<"connect:SearchHoursOfOperations">): Promise<AmazonConnectFullApiOperationResponseMap["connect:SearchHoursOfOperations"]>;
}

export const AmazonConnectFullApiSearchHoursOfOperationsGeneratedFunctionNames = [
  "SearchHoursOfOperations"
] as const satisfies readonly (keyof AmazonConnectFullApiSearchHoursOfOperationsGeneratedClient)[];

export function createAmazonConnectFullApiSearchHoursOfOperationsGeneratedClient(
  callOperation: AmazonConnectGeneratedOperationCaller,
): AmazonConnectFullApiSearchHoursOfOperationsGeneratedClient {
  return {
    SearchHoursOfOperations: (...args) => callOperation("connect:SearchHoursOfOperations", ...(args as AmazonConnectFullApiOperationArgs<"connect:SearchHoursOfOperations">)),
  };
}
