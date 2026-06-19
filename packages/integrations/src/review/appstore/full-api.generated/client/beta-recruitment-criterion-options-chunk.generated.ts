// Generated endpoint chunk for AppStoreFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  AppStoreGeneratedOperationCaller,
  AppStoreFullApiOperationArgs,
  AppStoreFullApiOperationInput,
  AppStoreFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { AppStoreFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const AppStoreFullApiBetaRecruitmentCriterionOptionsOperationKeys = [
  "betaRecruitmentCriterionOptions_getCollection"
] as const;
export type AppStoreFullApiBetaRecruitmentCriterionOptionsOperationKey = typeof AppStoreFullApiBetaRecruitmentCriterionOptionsOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiBetaRecruitmentCriterionOptionsOperationPathParamMap {
  "betaRecruitmentCriterionOptions_getCollection": {};
}

export interface AppStoreFullApiBetaRecruitmentCriterionOptionsOperationRequestMap {
  "betaRecruitmentCriterionOptions_getCollection": AppStoreFullApiOperationInput<"betaRecruitmentCriterionOptions_getCollection">;
}

export interface AppStoreFullApiBetaRecruitmentCriterionOptionsGeneratedClient {
  BetaRecruitmentCriterionOptionsGetCollection(...args: AppStoreFullApiOperationArgs<"betaRecruitmentCriterionOptions_getCollection">): Promise<AppStoreFullApiOperationResponseMap["betaRecruitmentCriterionOptions_getCollection"]>;
}

export const AppStoreFullApiBetaRecruitmentCriterionOptionsGeneratedFunctionNames = [
  "BetaRecruitmentCriterionOptionsGetCollection"
] as const satisfies readonly (keyof AppStoreFullApiBetaRecruitmentCriterionOptionsGeneratedClient)[];

export function createAppStoreFullApiBetaRecruitmentCriterionOptionsGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiBetaRecruitmentCriterionOptionsGeneratedClient {
  return {
    BetaRecruitmentCriterionOptionsGetCollection: (...args) => callOperation("betaRecruitmentCriterionOptions_getCollection", ...(args as AppStoreFullApiOperationArgs<"betaRecruitmentCriterionOptions_getCollection">)),
  };
}
