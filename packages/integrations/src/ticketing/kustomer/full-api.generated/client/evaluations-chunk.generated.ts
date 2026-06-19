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
export const KustomerFullApiEvaluationsOperationKeys = [
  "ListEvaluationsByAutomation",
  "CreateEvaluation",
  "DeleteEvaluation",
  "GetEvaluation",
  "UpdateEvaluation",
  "RunEvaluation"
] as const;
export type KustomerFullApiEvaluationsOperationKey = typeof KustomerFullApiEvaluationsOperationKeys[number];
// End hardened literal operation keys.

export interface KustomerFullApiEvaluationsOperationPathParamMap {
  "ListEvaluationsByAutomation": { "automationId": KustomerFullApiPathParamValue };
  "CreateEvaluation": {};
  "DeleteEvaluation": { "evaluationId": KustomerFullApiPathParamValue };
  "GetEvaluation": { "evaluationId": KustomerFullApiPathParamValue };
  "UpdateEvaluation": { "evaluationId": KustomerFullApiPathParamValue };
  "RunEvaluation": { "evaluationId": KustomerFullApiPathParamValue };
}

export interface KustomerFullApiEvaluationsOperationRequestMap {
  "ListEvaluationsByAutomation": KustomerFullApiOperationInput<"ListEvaluationsByAutomation">;
  "CreateEvaluation": KustomerFullApiOperationInput<"CreateEvaluation">;
  "DeleteEvaluation": KustomerFullApiOperationInput<"DeleteEvaluation">;
  "GetEvaluation": KustomerFullApiOperationInput<"GetEvaluation">;
  "UpdateEvaluation": KustomerFullApiOperationInput<"UpdateEvaluation">;
  "RunEvaluation": KustomerFullApiOperationInput<"RunEvaluation">;
}

export interface KustomerFullApiEvaluationsGeneratedClient {
  kustomerListEvaluationsByAutomation(...args: KustomerFullApiOperationArgs<"ListEvaluationsByAutomation">): Promise<KustomerFullApiOperationResponseMap["ListEvaluationsByAutomation"]>;
  kustomerCreateEvaluation(...args: KustomerFullApiOperationArgs<"CreateEvaluation">): Promise<KustomerFullApiOperationResponseMap["CreateEvaluation"]>;
  kustomerDeleteEvaluation(...args: KustomerFullApiOperationArgs<"DeleteEvaluation">): Promise<KustomerFullApiOperationResponseMap["DeleteEvaluation"]>;
  kustomerGetEvaluation(...args: KustomerFullApiOperationArgs<"GetEvaluation">): Promise<KustomerFullApiOperationResponseMap["GetEvaluation"]>;
  kustomerUpdateEvaluation(...args: KustomerFullApiOperationArgs<"UpdateEvaluation">): Promise<KustomerFullApiOperationResponseMap["UpdateEvaluation"]>;
  kustomerRunEvaluation(...args: KustomerFullApiOperationArgs<"RunEvaluation">): Promise<KustomerFullApiOperationResponseMap["RunEvaluation"]>;
}

export const KustomerFullApiEvaluationsGeneratedFunctionNames = [
  "kustomerListEvaluationsByAutomation",
  "kustomerCreateEvaluation",
  "kustomerDeleteEvaluation",
  "kustomerGetEvaluation",
  "kustomerUpdateEvaluation",
  "kustomerRunEvaluation"
] as const satisfies readonly (keyof KustomerFullApiEvaluationsGeneratedClient)[];

export function createKustomerFullApiEvaluationsGeneratedClient(
  callOperation: KustomerGeneratedOperationCaller,
): KustomerFullApiEvaluationsGeneratedClient {
  return {
    kustomerListEvaluationsByAutomation: (...args) => callOperation("ListEvaluationsByAutomation", ...(args as KustomerFullApiOperationArgs<"ListEvaluationsByAutomation">)),
    kustomerCreateEvaluation: (...args) => callOperation("CreateEvaluation", ...(args as KustomerFullApiOperationArgs<"CreateEvaluation">)),
    kustomerDeleteEvaluation: (...args) => callOperation("DeleteEvaluation", ...(args as KustomerFullApiOperationArgs<"DeleteEvaluation">)),
    kustomerGetEvaluation: (...args) => callOperation("GetEvaluation", ...(args as KustomerFullApiOperationArgs<"GetEvaluation">)),
    kustomerUpdateEvaluation: (...args) => callOperation("UpdateEvaluation", ...(args as KustomerFullApiOperationArgs<"UpdateEvaluation">)),
    kustomerRunEvaluation: (...args) => callOperation("RunEvaluation", ...(args as KustomerFullApiOperationArgs<"RunEvaluation">)),
  };
}
