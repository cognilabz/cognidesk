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
export const AmazonConnectFullApiTestCasesSummaryOperationKeys = [
  "connect:ListTestCases"
] as const;
export type AmazonConnectFullApiTestCasesSummaryOperationKey = typeof AmazonConnectFullApiTestCasesSummaryOperationKeys[number];
// End hardened literal operation keys.

export interface AmazonConnectFullApiTestCasesSummaryOperationPathParamMap {
  "connect:ListTestCases": { "InstanceId": AmazonConnectFullApiPathParamValue };
}

export interface AmazonConnectFullApiTestCasesSummaryOperationRequestMap {
  "connect:ListTestCases": AmazonConnectFullApiOperationInput<"connect:ListTestCases">;
}

export interface AmazonConnectFullApiTestCasesSummaryGeneratedClient {
  ListTestCases(...args: AmazonConnectFullApiOperationArgs<"connect:ListTestCases">): Promise<AmazonConnectFullApiOperationResponseMap["connect:ListTestCases"]>;
}

export const AmazonConnectFullApiTestCasesSummaryGeneratedFunctionNames = [
  "ListTestCases"
] as const satisfies readonly (keyof AmazonConnectFullApiTestCasesSummaryGeneratedClient)[];

export function createAmazonConnectFullApiTestCasesSummaryGeneratedClient(
  callOperation: AmazonConnectGeneratedOperationCaller,
): AmazonConnectFullApiTestCasesSummaryGeneratedClient {
  return {
    ListTestCases: (...args) => callOperation("connect:ListTestCases", ...(args as AmazonConnectFullApiOperationArgs<"connect:ListTestCases">)),
  };
}
