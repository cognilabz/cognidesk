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
export const AmazonConnectFullApiSearchTestCasesOperationKeys = [
  "connect:SearchTestCases"
] as const;
export type AmazonConnectFullApiSearchTestCasesOperationKey = typeof AmazonConnectFullApiSearchTestCasesOperationKeys[number];
// End hardened literal operation keys.

export interface AmazonConnectFullApiSearchTestCasesOperationPathParamMap {
  "connect:SearchTestCases": {};
}

export interface AmazonConnectFullApiSearchTestCasesOperationRequestMap {
  "connect:SearchTestCases": AmazonConnectFullApiOperationInput<"connect:SearchTestCases">;
}

export interface AmazonConnectFullApiSearchTestCasesGeneratedClient {
  SearchTestCases(...args: AmazonConnectFullApiOperationArgs<"connect:SearchTestCases">): Promise<AmazonConnectFullApiOperationResponseMap["connect:SearchTestCases"]>;
}

export const AmazonConnectFullApiSearchTestCasesGeneratedFunctionNames = [
  "SearchTestCases"
] as const satisfies readonly (keyof AmazonConnectFullApiSearchTestCasesGeneratedClient)[];

export function createAmazonConnectFullApiSearchTestCasesGeneratedClient(
  callOperation: AmazonConnectGeneratedOperationCaller,
): AmazonConnectFullApiSearchTestCasesGeneratedClient {
  return {
    SearchTestCases: (...args) => callOperation("connect:SearchTestCases", ...(args as AmazonConnectFullApiOperationArgs<"connect:SearchTestCases">)),
  };
}
