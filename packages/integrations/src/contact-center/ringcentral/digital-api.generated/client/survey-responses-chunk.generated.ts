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
export const RingCentralDigitalApiSurveyResponsesOperationKeys = [
  "GET /survey_responses/{surveyResponseId}"
] as const;
export type RingCentralDigitalApiSurveyResponsesOperationKey = typeof RingCentralDigitalApiSurveyResponsesOperationKeys[number];
// End hardened literal operation keys.

export interface RingCentralDigitalApiSurveyResponsesOperationPathParamMap {
  "GET /survey_responses/{surveyResponseId}": { "surveyResponseId": RingCentralDigitalApiPathParamValue };
}

export interface RingCentralDigitalApiSurveyResponsesOperationRequestMap {
  "GET /survey_responses/{surveyResponseId}": RingCentralDigitalApiOperationInput<"GET /survey_responses/{surveyResponseId}">;
}

export interface RingCentralDigitalApiSurveyResponsesGeneratedClient {
  GetSurveyResponse(...args: RingCentralDigitalApiOperationArgs<"GET /survey_responses/{surveyResponseId}">): Promise<RingCentralDigitalApiOperationResponseMap["GET /survey_responses/{surveyResponseId}"]>;
}

export const RingCentralDigitalApiSurveyResponsesGeneratedFunctionNames = [
  "GetSurveyResponse"
] as const satisfies readonly (keyof RingCentralDigitalApiSurveyResponsesGeneratedClient)[];

export function createRingCentralDigitalApiSurveyResponsesGeneratedClient(
  callOperation: RingCentralDigitalGeneratedOperationCaller,
): RingCentralDigitalApiSurveyResponsesGeneratedClient {
  return {
    GetSurveyResponse: (...args) => callOperation("GET /survey_responses/{surveyResponseId}", ...(args as RingCentralDigitalApiOperationArgs<"GET /survey_responses/{surveyResponseId}">)),
  };
}
