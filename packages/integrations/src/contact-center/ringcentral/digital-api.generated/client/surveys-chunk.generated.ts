// Generated endpoint chunk for RingCentralDigitalApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  RingCentralDigitalGeneratedOperationCaller,
  RingCentralDigitalApiOperationArgs,
  RingCentralDigitalApiOperationInput,
  RingCentralDigitalApiPathParamValue,
} from "../../digital-api-client.generated.js";
import type { RingCentralDigitalApiOperationResponseMap } from "../../digital-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const RingCentralDigitalApiSurveysOperationKeys = [
  "GET /surveys",
  "GET /surveys/{surveyId}"
] as const;
export type RingCentralDigitalApiSurveysOperationKey = typeof RingCentralDigitalApiSurveysOperationKeys[number];
// End hardened literal operation keys.

export interface RingCentralDigitalApiSurveysOperationPathParamMap {
  "GET /surveys": {};
  "GET /surveys/{surveyId}": { "surveyId": RingCentralDigitalApiPathParamValue };
}

export interface RingCentralDigitalApiSurveysOperationRequestMap {
  "GET /surveys": RingCentralDigitalApiOperationInput<"GET /surveys">;
  "GET /surveys/{surveyId}": RingCentralDigitalApiOperationInput<"GET /surveys/{surveyId}">;
}

export interface RingCentralDigitalApiSurveysGeneratedClient {
  GetAllSurveys(...args: RingCentralDigitalApiOperationArgs<"GET /surveys">): Promise<RingCentralDigitalApiOperationResponseMap["GET /surveys"]>;
  GetSurvey(...args: RingCentralDigitalApiOperationArgs<"GET /surveys/{surveyId}">): Promise<RingCentralDigitalApiOperationResponseMap["GET /surveys/{surveyId}"]>;
}

export const RingCentralDigitalApiSurveysGeneratedFunctionNames = [
  "GetAllSurveys",
  "GetSurvey"
] as const satisfies readonly (keyof RingCentralDigitalApiSurveysGeneratedClient)[];

export function createRingCentralDigitalApiSurveysGeneratedClient(
  callOperation: RingCentralDigitalGeneratedOperationCaller,
): RingCentralDigitalApiSurveysGeneratedClient {
  return {
    GetAllSurveys: (...args) => callOperation("GET /surveys", ...(args as RingCentralDigitalApiOperationArgs<"GET /surveys">)),
    GetSurvey: (...args) => callOperation("GET /surveys/{surveyId}", ...(args as RingCentralDigitalApiOperationArgs<"GET /surveys/{surveyId}">)),
  };
}
