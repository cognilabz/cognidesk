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
export const KustomerFullApiEvaluationTestCasesOperationKeys = [
  "ListEvaluationTestCases",
  "CreateEvaluationTestCase",
  "DeleteEvaluationTestCase",
  "GetEvaluationTestCase",
  "UpdateEvaluationTestCase"
] as const;
export type KustomerFullApiEvaluationTestCasesOperationKey = typeof KustomerFullApiEvaluationTestCasesOperationKeys[number];
// End hardened literal operation keys.

export interface KustomerFullApiEvaluationTestCasesOperationPathParamMap {
  "ListEvaluationTestCases": {};
  "CreateEvaluationTestCase": {};
  "DeleteEvaluationTestCase": { "testCaseId": KustomerFullApiPathParamValue };
  "GetEvaluationTestCase": { "testCaseId": KustomerFullApiPathParamValue };
  "UpdateEvaluationTestCase": { "testCaseId": KustomerFullApiPathParamValue };
}

export interface KustomerFullApiEvaluationTestCasesOperationRequestMap {
  "ListEvaluationTestCases": KustomerFullApiOperationInput<"ListEvaluationTestCases">;
  "CreateEvaluationTestCase": KustomerFullApiOperationInput<"CreateEvaluationTestCase">;
  "DeleteEvaluationTestCase": KustomerFullApiOperationInput<"DeleteEvaluationTestCase">;
  "GetEvaluationTestCase": KustomerFullApiOperationInput<"GetEvaluationTestCase">;
  "UpdateEvaluationTestCase": KustomerFullApiOperationInput<"UpdateEvaluationTestCase">;
}

export interface KustomerFullApiEvaluationTestCasesGeneratedClient {
  kustomerListEvaluationTestCases(...args: KustomerFullApiOperationArgs<"ListEvaluationTestCases">): Promise<KustomerFullApiOperationResponseMap["ListEvaluationTestCases"]>;
  kustomerCreateEvaluationTestCase(...args: KustomerFullApiOperationArgs<"CreateEvaluationTestCase">): Promise<KustomerFullApiOperationResponseMap["CreateEvaluationTestCase"]>;
  kustomerDeleteEvaluationTestCase(...args: KustomerFullApiOperationArgs<"DeleteEvaluationTestCase">): Promise<KustomerFullApiOperationResponseMap["DeleteEvaluationTestCase"]>;
  kustomerGetEvaluationTestCase(...args: KustomerFullApiOperationArgs<"GetEvaluationTestCase">): Promise<KustomerFullApiOperationResponseMap["GetEvaluationTestCase"]>;
  kustomerUpdateEvaluationTestCase(...args: KustomerFullApiOperationArgs<"UpdateEvaluationTestCase">): Promise<KustomerFullApiOperationResponseMap["UpdateEvaluationTestCase"]>;
}

export const KustomerFullApiEvaluationTestCasesGeneratedFunctionNames = [
  "kustomerListEvaluationTestCases",
  "kustomerCreateEvaluationTestCase",
  "kustomerDeleteEvaluationTestCase",
  "kustomerGetEvaluationTestCase",
  "kustomerUpdateEvaluationTestCase"
] as const satisfies readonly (keyof KustomerFullApiEvaluationTestCasesGeneratedClient)[];

export function createKustomerFullApiEvaluationTestCasesGeneratedClient(
  callOperation: KustomerGeneratedOperationCaller,
): KustomerFullApiEvaluationTestCasesGeneratedClient {
  return {
    kustomerListEvaluationTestCases: (...args) => callOperation("ListEvaluationTestCases", ...(args as KustomerFullApiOperationArgs<"ListEvaluationTestCases">)),
    kustomerCreateEvaluationTestCase: (...args) => callOperation("CreateEvaluationTestCase", ...(args as KustomerFullApiOperationArgs<"CreateEvaluationTestCase">)),
    kustomerDeleteEvaluationTestCase: (...args) => callOperation("DeleteEvaluationTestCase", ...(args as KustomerFullApiOperationArgs<"DeleteEvaluationTestCase">)),
    kustomerGetEvaluationTestCase: (...args) => callOperation("GetEvaluationTestCase", ...(args as KustomerFullApiOperationArgs<"GetEvaluationTestCase">)),
    kustomerUpdateEvaluationTestCase: (...args) => callOperation("UpdateEvaluationTestCase", ...(args as KustomerFullApiOperationArgs<"UpdateEvaluationTestCase">)),
  };
}
