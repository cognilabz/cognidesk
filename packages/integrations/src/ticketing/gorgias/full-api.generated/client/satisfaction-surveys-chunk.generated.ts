// Generated endpoint chunk for GorgiasFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  GorgiasGeneratedOperationCaller,
  GorgiasFullApiOperationArgs,
  GorgiasFullApiOperationInput,
  GorgiasFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { GorgiasFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const GorgiasFullApiSatisfactionSurveysOperationKeys = [
  "list-satisfaction-surveys",
  "create-satisfaction-survey",
  "get-satisfaction-survey",
  "update-satisfaction-survey"
] as const;
export type GorgiasFullApiSatisfactionSurveysOperationKey = typeof GorgiasFullApiSatisfactionSurveysOperationKeys[number];
// End hardened literal operation keys.

export interface GorgiasFullApiSatisfactionSurveysOperationPathParamMap {
  "list-satisfaction-surveys": {};
  "create-satisfaction-survey": {};
  "get-satisfaction-survey": { "id": GorgiasFullApiPathParamValue };
  "update-satisfaction-survey": { "id": GorgiasFullApiPathParamValue };
}

export interface GorgiasFullApiSatisfactionSurveysOperationRequestMap {
  "list-satisfaction-surveys": GorgiasFullApiOperationInput<"list-satisfaction-surveys">;
  "create-satisfaction-survey": GorgiasFullApiOperationInput<"create-satisfaction-survey">;
  "get-satisfaction-survey": GorgiasFullApiOperationInput<"get-satisfaction-survey">;
  "update-satisfaction-survey": GorgiasFullApiOperationInput<"update-satisfaction-survey">;
}

export interface GorgiasFullApiSatisfactionSurveysGeneratedClient {
  gorgiasListSatisfactionSurveys(...args: GorgiasFullApiOperationArgs<"list-satisfaction-surveys">): Promise<GorgiasFullApiOperationResponseMap["list-satisfaction-surveys"]>;
  gorgiasCreateSatisfactionSurvey(...args: GorgiasFullApiOperationArgs<"create-satisfaction-survey">): Promise<GorgiasFullApiOperationResponseMap["create-satisfaction-survey"]>;
  gorgiasGetSatisfactionSurvey(...args: GorgiasFullApiOperationArgs<"get-satisfaction-survey">): Promise<GorgiasFullApiOperationResponseMap["get-satisfaction-survey"]>;
  gorgiasUpdateSatisfactionSurvey(...args: GorgiasFullApiOperationArgs<"update-satisfaction-survey">): Promise<GorgiasFullApiOperationResponseMap["update-satisfaction-survey"]>;
}

export const GorgiasFullApiSatisfactionSurveysGeneratedFunctionNames = [
  "gorgiasListSatisfactionSurveys",
  "gorgiasCreateSatisfactionSurvey",
  "gorgiasGetSatisfactionSurvey",
  "gorgiasUpdateSatisfactionSurvey"
] as const satisfies readonly (keyof GorgiasFullApiSatisfactionSurveysGeneratedClient)[];

export function createGorgiasFullApiSatisfactionSurveysGeneratedClient(
  callOperation: GorgiasGeneratedOperationCaller,
): GorgiasFullApiSatisfactionSurveysGeneratedClient {
  return {
    gorgiasListSatisfactionSurveys: (...args) => callOperation("list-satisfaction-surveys", ...(args as GorgiasFullApiOperationArgs<"list-satisfaction-surveys">)),
    gorgiasCreateSatisfactionSurvey: (...args) => callOperation("create-satisfaction-survey", ...(args as GorgiasFullApiOperationArgs<"create-satisfaction-survey">)),
    gorgiasGetSatisfactionSurvey: (...args) => callOperation("get-satisfaction-survey", ...(args as GorgiasFullApiOperationArgs<"get-satisfaction-survey">)),
    gorgiasUpdateSatisfactionSurvey: (...args) => callOperation("update-satisfaction-survey", ...(args as GorgiasFullApiOperationArgs<"update-satisfaction-survey">)),
  };
}
