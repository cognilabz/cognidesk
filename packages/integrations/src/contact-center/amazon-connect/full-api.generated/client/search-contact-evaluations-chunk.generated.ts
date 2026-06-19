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
export const AmazonConnectFullApiSearchContactEvaluationsOperationKeys = [
  "connect:SearchContactEvaluations"
] as const;
export type AmazonConnectFullApiSearchContactEvaluationsOperationKey = typeof AmazonConnectFullApiSearchContactEvaluationsOperationKeys[number];
// End hardened literal operation keys.

export interface AmazonConnectFullApiSearchContactEvaluationsOperationPathParamMap {
  "connect:SearchContactEvaluations": {};
}

export interface AmazonConnectFullApiSearchContactEvaluationsOperationRequestMap {
  "connect:SearchContactEvaluations": AmazonConnectFullApiOperationInput<"connect:SearchContactEvaluations">;
}

export interface AmazonConnectFullApiSearchContactEvaluationsGeneratedClient {
  SearchContactEvaluations(...args: AmazonConnectFullApiOperationArgs<"connect:SearchContactEvaluations">): Promise<AmazonConnectFullApiOperationResponseMap["connect:SearchContactEvaluations"]>;
}

export const AmazonConnectFullApiSearchContactEvaluationsGeneratedFunctionNames = [
  "SearchContactEvaluations"
] as const satisfies readonly (keyof AmazonConnectFullApiSearchContactEvaluationsGeneratedClient)[];

export function createAmazonConnectFullApiSearchContactEvaluationsGeneratedClient(
  callOperation: AmazonConnectGeneratedOperationCaller,
): AmazonConnectFullApiSearchContactEvaluationsGeneratedClient {
  return {
    SearchContactEvaluations: (...args) => callOperation("connect:SearchContactEvaluations", ...(args as AmazonConnectFullApiOperationArgs<"connect:SearchContactEvaluations">)),
  };
}
