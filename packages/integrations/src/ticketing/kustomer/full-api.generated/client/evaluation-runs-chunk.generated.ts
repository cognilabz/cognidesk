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
export const KustomerFullApiEvaluationRunsOperationKeys = [
  "ListEvaluationRuns",
  "GetEvaluationRun"
] as const;
export type KustomerFullApiEvaluationRunsOperationKey = typeof KustomerFullApiEvaluationRunsOperationKeys[number];
// End hardened literal operation keys.

export interface KustomerFullApiEvaluationRunsOperationPathParamMap {
  "ListEvaluationRuns": {};
  "GetEvaluationRun": { "runId": KustomerFullApiPathParamValue };
}

export interface KustomerFullApiEvaluationRunsOperationRequestMap {
  "ListEvaluationRuns": KustomerFullApiOperationInput<"ListEvaluationRuns">;
  "GetEvaluationRun": KustomerFullApiOperationInput<"GetEvaluationRun">;
}

export interface KustomerFullApiEvaluationRunsGeneratedClient {
  kustomerListEvaluationRuns(...args: KustomerFullApiOperationArgs<"ListEvaluationRuns">): Promise<KustomerFullApiOperationResponseMap["ListEvaluationRuns"]>;
  kustomerGetEvaluationRun(...args: KustomerFullApiOperationArgs<"GetEvaluationRun">): Promise<KustomerFullApiOperationResponseMap["GetEvaluationRun"]>;
}

export const KustomerFullApiEvaluationRunsGeneratedFunctionNames = [
  "kustomerListEvaluationRuns",
  "kustomerGetEvaluationRun"
] as const satisfies readonly (keyof KustomerFullApiEvaluationRunsGeneratedClient)[];

export function createKustomerFullApiEvaluationRunsGeneratedClient(
  callOperation: KustomerGeneratedOperationCaller,
): KustomerFullApiEvaluationRunsGeneratedClient {
  return {
    kustomerListEvaluationRuns: (...args) => callOperation("ListEvaluationRuns", ...(args as KustomerFullApiOperationArgs<"ListEvaluationRuns">)),
    kustomerGetEvaluationRun: (...args) => callOperation("GetEvaluationRun", ...(args as KustomerFullApiOperationArgs<"GetEvaluationRun">)),
  };
}
