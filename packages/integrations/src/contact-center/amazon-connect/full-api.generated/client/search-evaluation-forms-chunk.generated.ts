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
export const AmazonConnectFullApiSearchEvaluationFormsOperationKeys = [
  "connect:SearchEvaluationForms"
] as const;
export type AmazonConnectFullApiSearchEvaluationFormsOperationKey = typeof AmazonConnectFullApiSearchEvaluationFormsOperationKeys[number];
// End hardened literal operation keys.

export interface AmazonConnectFullApiSearchEvaluationFormsOperationPathParamMap {
  "connect:SearchEvaluationForms": {};
}

export interface AmazonConnectFullApiSearchEvaluationFormsOperationRequestMap {
  "connect:SearchEvaluationForms": AmazonConnectFullApiOperationInput<"connect:SearchEvaluationForms">;
}

export interface AmazonConnectFullApiSearchEvaluationFormsGeneratedClient {
  SearchEvaluationForms(...args: AmazonConnectFullApiOperationArgs<"connect:SearchEvaluationForms">): Promise<AmazonConnectFullApiOperationResponseMap["connect:SearchEvaluationForms"]>;
}

export const AmazonConnectFullApiSearchEvaluationFormsGeneratedFunctionNames = [
  "SearchEvaluationForms"
] as const satisfies readonly (keyof AmazonConnectFullApiSearchEvaluationFormsGeneratedClient)[];

export function createAmazonConnectFullApiSearchEvaluationFormsGeneratedClient(
  callOperation: AmazonConnectGeneratedOperationCaller,
): AmazonConnectFullApiSearchEvaluationFormsGeneratedClient {
  return {
    SearchEvaluationForms: (...args) => callOperation("connect:SearchEvaluationForms", ...(args as AmazonConnectFullApiOperationArgs<"connect:SearchEvaluationForms">)),
  };
}
