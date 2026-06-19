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
export const AppStoreFullApiBetaRecruitmentCriteriaOperationKeys = [
  "betaRecruitmentCriteria_createInstance",
  "betaRecruitmentCriteria_deleteInstance",
  "betaRecruitmentCriteria_updateInstance"
] as const;
export type AppStoreFullApiBetaRecruitmentCriteriaOperationKey = typeof AppStoreFullApiBetaRecruitmentCriteriaOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiBetaRecruitmentCriteriaOperationPathParamMap {
  "betaRecruitmentCriteria_createInstance": {};
  "betaRecruitmentCriteria_deleteInstance": { "id": AppStoreFullApiPathParamValue };
  "betaRecruitmentCriteria_updateInstance": { "id": AppStoreFullApiPathParamValue };
}

export interface AppStoreFullApiBetaRecruitmentCriteriaOperationRequestMap {
  "betaRecruitmentCriteria_createInstance": AppStoreFullApiOperationInput<"betaRecruitmentCriteria_createInstance">;
  "betaRecruitmentCriteria_deleteInstance": AppStoreFullApiOperationInput<"betaRecruitmentCriteria_deleteInstance">;
  "betaRecruitmentCriteria_updateInstance": AppStoreFullApiOperationInput<"betaRecruitmentCriteria_updateInstance">;
}

export interface AppStoreFullApiBetaRecruitmentCriteriaGeneratedClient {
  BetaRecruitmentCriteriaCreateInstance(...args: AppStoreFullApiOperationArgs<"betaRecruitmentCriteria_createInstance">): Promise<AppStoreFullApiOperationResponseMap["betaRecruitmentCriteria_createInstance"]>;
  BetaRecruitmentCriteriaDeleteInstance(...args: AppStoreFullApiOperationArgs<"betaRecruitmentCriteria_deleteInstance">): Promise<AppStoreFullApiOperationResponseMap["betaRecruitmentCriteria_deleteInstance"]>;
  BetaRecruitmentCriteriaUpdateInstance(...args: AppStoreFullApiOperationArgs<"betaRecruitmentCriteria_updateInstance">): Promise<AppStoreFullApiOperationResponseMap["betaRecruitmentCriteria_updateInstance"]>;
}

export const AppStoreFullApiBetaRecruitmentCriteriaGeneratedFunctionNames = [
  "BetaRecruitmentCriteriaCreateInstance",
  "BetaRecruitmentCriteriaDeleteInstance",
  "BetaRecruitmentCriteriaUpdateInstance"
] as const satisfies readonly (keyof AppStoreFullApiBetaRecruitmentCriteriaGeneratedClient)[];

export function createAppStoreFullApiBetaRecruitmentCriteriaGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiBetaRecruitmentCriteriaGeneratedClient {
  return {
    BetaRecruitmentCriteriaCreateInstance: (...args) => callOperation("betaRecruitmentCriteria_createInstance", ...(args as AppStoreFullApiOperationArgs<"betaRecruitmentCriteria_createInstance">)),
    BetaRecruitmentCriteriaDeleteInstance: (...args) => callOperation("betaRecruitmentCriteria_deleteInstance", ...(args as AppStoreFullApiOperationArgs<"betaRecruitmentCriteria_deleteInstance">)),
    BetaRecruitmentCriteriaUpdateInstance: (...args) => callOperation("betaRecruitmentCriteria_updateInstance", ...(args as AppStoreFullApiOperationArgs<"betaRecruitmentCriteria_updateInstance">)),
  };
}
