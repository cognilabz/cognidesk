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
export const AmazonConnectFullApiTestCaseExecutionsOperationKeys = [
  "connect:ListTestCaseExecutions"
] as const;
export type AmazonConnectFullApiTestCaseExecutionsOperationKey = typeof AmazonConnectFullApiTestCaseExecutionsOperationKeys[number];
// End hardened literal operation keys.

export interface AmazonConnectFullApiTestCaseExecutionsOperationPathParamMap {
  "connect:ListTestCaseExecutions": { "InstanceId": AmazonConnectFullApiPathParamValue };
}

export interface AmazonConnectFullApiTestCaseExecutionsOperationRequestMap {
  "connect:ListTestCaseExecutions": AmazonConnectFullApiOperationInput<"connect:ListTestCaseExecutions">;
}

export interface AmazonConnectFullApiTestCaseExecutionsGeneratedClient {
  ListTestCaseExecutions(...args: AmazonConnectFullApiOperationArgs<"connect:ListTestCaseExecutions">): Promise<AmazonConnectFullApiOperationResponseMap["connect:ListTestCaseExecutions"]>;
}

export const AmazonConnectFullApiTestCaseExecutionsGeneratedFunctionNames = [
  "ListTestCaseExecutions"
] as const satisfies readonly (keyof AmazonConnectFullApiTestCaseExecutionsGeneratedClient)[];

export function createAmazonConnectFullApiTestCaseExecutionsGeneratedClient(
  callOperation: AmazonConnectGeneratedOperationCaller,
): AmazonConnectFullApiTestCaseExecutionsGeneratedClient {
  return {
    ListTestCaseExecutions: (...args) => callOperation("connect:ListTestCaseExecutions", ...(args as AmazonConnectFullApiOperationArgs<"connect:ListTestCaseExecutions">)),
  };
}
