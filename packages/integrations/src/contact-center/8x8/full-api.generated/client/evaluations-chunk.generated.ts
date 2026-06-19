// Generated endpoint chunk for EightByEightContactCenterApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  EightByEightGeneratedOperationCaller,
  EightByEightContactCenterApiOperationArgs,
  EightByEightContactCenterApiOperationInput,
  EightByEightContactCenterApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { EightByEightContactCenterApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const EightByEightContactCenterApiEvaluationsOperationKeys = [
  "qmsa:GET /evaluations/count",
  "qmsa:GET /evaluations",
  "qmsa:GET /evaluations/{evaluationId}/details"
] as const;
export type EightByEightContactCenterApiEvaluationsOperationKey = typeof EightByEightContactCenterApiEvaluationsOperationKeys[number];
// End hardened literal operation keys.

export interface EightByEightContactCenterApiEvaluationsOperationPathParamMap {
  "qmsa:GET /evaluations/count": {};
  "qmsa:GET /evaluations": {};
  "qmsa:GET /evaluations/{evaluationId}/details": { "evaluationId": EightByEightContactCenterApiPathParamValue };
}

export interface EightByEightContactCenterApiEvaluationsOperationRequestMap {
  "qmsa:GET /evaluations/count": EightByEightContactCenterApiOperationInput<"qmsa:GET /evaluations/count">;
  "qmsa:GET /evaluations": EightByEightContactCenterApiOperationInput<"qmsa:GET /evaluations">;
  "qmsa:GET /evaluations/{evaluationId}/details": EightByEightContactCenterApiOperationInput<"qmsa:GET /evaluations/{evaluationId}/details">;
}

export interface EightByEightContactCenterApiEvaluationsGeneratedClient {
  EvaluationsCount(...args: EightByEightContactCenterApiOperationArgs<"qmsa:GET /evaluations/count">): Promise<EightByEightContactCenterApiOperationResponseMap["qmsa:GET /evaluations/count"]>;
  Evaluations(...args: EightByEightContactCenterApiOperationArgs<"qmsa:GET /evaluations">): Promise<EightByEightContactCenterApiOperationResponseMap["qmsa:GET /evaluations"]>;
  EvaluationDetails(...args: EightByEightContactCenterApiOperationArgs<"qmsa:GET /evaluations/{evaluationId}/details">): Promise<EightByEightContactCenterApiOperationResponseMap["qmsa:GET /evaluations/{evaluationId}/details"]>;
}

export const EightByEightContactCenterApiEvaluationsGeneratedFunctionNames = [
  "EvaluationsCount",
  "Evaluations",
  "EvaluationDetails"
] as const satisfies readonly (keyof EightByEightContactCenterApiEvaluationsGeneratedClient)[];

export function createEightByEightContactCenterApiEvaluationsGeneratedClient(
  callOperation: EightByEightGeneratedOperationCaller,
): EightByEightContactCenterApiEvaluationsGeneratedClient {
  return {
    EvaluationsCount: (...args) => callOperation("qmsa:GET /evaluations/count", ...(args as EightByEightContactCenterApiOperationArgs<"qmsa:GET /evaluations/count">)),
    Evaluations: (...args) => callOperation("qmsa:GET /evaluations", ...(args as EightByEightContactCenterApiOperationArgs<"qmsa:GET /evaluations">)),
    EvaluationDetails: (...args) => callOperation("qmsa:GET /evaluations/{evaluationId}/details", ...(args as EightByEightContactCenterApiOperationArgs<"qmsa:GET /evaluations/{evaluationId}/details">)),
  };
}
