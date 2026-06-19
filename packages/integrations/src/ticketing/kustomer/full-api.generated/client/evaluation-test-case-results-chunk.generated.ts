// Generated endpoint chunk for KustomerFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  KustomerGeneratedOperationCaller,
  KustomerFullApiOperationArgs,
  KustomerFullApiOperationInput,
  KustomerFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { KustomerFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const KustomerFullApiEvaluationTestCaseResultsOperationKeys = [
  "ListEvaluationTestCaseResults",
  "GetEvaluationTestCaseResult"
] as const;
export type KustomerFullApiEvaluationTestCaseResultsOperationKey = typeof KustomerFullApiEvaluationTestCaseResultsOperationKeys[number];
// End hardened literal operation keys.

export interface KustomerFullApiEvaluationTestCaseResultsOperationPathParamMap {
  "ListEvaluationTestCaseResults": {};
  "GetEvaluationTestCaseResult": { "resultId": KustomerFullApiPathParamValue };
}

export interface KustomerFullApiEvaluationTestCaseResultsOperationRequestMap {
  "ListEvaluationTestCaseResults": KustomerFullApiOperationInput<"ListEvaluationTestCaseResults">;
  "GetEvaluationTestCaseResult": KustomerFullApiOperationInput<"GetEvaluationTestCaseResult">;
}

export interface KustomerFullApiEvaluationTestCaseResultsGeneratedClient {
  kustomerListEvaluationTestCaseResults(...args: KustomerFullApiOperationArgs<"ListEvaluationTestCaseResults">): Promise<KustomerFullApiOperationResponseMap["ListEvaluationTestCaseResults"]>;
  kustomerGetEvaluationTestCaseResult(...args: KustomerFullApiOperationArgs<"GetEvaluationTestCaseResult">): Promise<KustomerFullApiOperationResponseMap["GetEvaluationTestCaseResult"]>;
}

export const KustomerFullApiEvaluationTestCaseResultsGeneratedFunctionNames = [
  "kustomerListEvaluationTestCaseResults",
  "kustomerGetEvaluationTestCaseResult"
] as const satisfies readonly (keyof KustomerFullApiEvaluationTestCaseResultsGeneratedClient)[];

export function createKustomerFullApiEvaluationTestCaseResultsGeneratedClient(
  callOperation: KustomerGeneratedOperationCaller,
): KustomerFullApiEvaluationTestCaseResultsGeneratedClient {
  return {
    kustomerListEvaluationTestCaseResults: (...args) => callOperation("ListEvaluationTestCaseResults", ...(args as KustomerFullApiOperationArgs<"ListEvaluationTestCaseResults">)),
    kustomerGetEvaluationTestCaseResult: (...args) => callOperation("GetEvaluationTestCaseResult", ...(args as KustomerFullApiOperationArgs<"GetEvaluationTestCaseResult">)),
  };
}
