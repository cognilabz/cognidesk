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
export const AppStoreFullApiGameCenterMatchmakingRulesOperationKeys = [
  "gameCenterMatchmakingRules_createInstance",
  "gameCenterMatchmakingRules_deleteInstance",
  "gameCenterMatchmakingRules_matchmakingBooleanRuleResults_getMetrics",
  "gameCenterMatchmakingRules_matchmakingNumberRuleResults_getMetrics",
  "gameCenterMatchmakingRules_matchmakingRuleErrors_getMetrics",
  "gameCenterMatchmakingRules_updateInstance"
] as const;
export type AppStoreFullApiGameCenterMatchmakingRulesOperationKey = typeof AppStoreFullApiGameCenterMatchmakingRulesOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiGameCenterMatchmakingRulesOperationPathParamMap {
  "gameCenterMatchmakingRules_createInstance": {};
  "gameCenterMatchmakingRules_deleteInstance": { "id": AppStoreFullApiPathParamValue };
  "gameCenterMatchmakingRules_matchmakingBooleanRuleResults_getMetrics": { "id": AppStoreFullApiPathParamValue };
  "gameCenterMatchmakingRules_matchmakingNumberRuleResults_getMetrics": { "id": AppStoreFullApiPathParamValue };
  "gameCenterMatchmakingRules_matchmakingRuleErrors_getMetrics": { "id": AppStoreFullApiPathParamValue };
  "gameCenterMatchmakingRules_updateInstance": { "id": AppStoreFullApiPathParamValue };
}

export interface AppStoreFullApiGameCenterMatchmakingRulesOperationRequestMap {
  "gameCenterMatchmakingRules_createInstance": AppStoreFullApiOperationInput<"gameCenterMatchmakingRules_createInstance">;
  "gameCenterMatchmakingRules_deleteInstance": AppStoreFullApiOperationInput<"gameCenterMatchmakingRules_deleteInstance">;
  "gameCenterMatchmakingRules_matchmakingBooleanRuleResults_getMetrics": AppStoreFullApiOperationInput<"gameCenterMatchmakingRules_matchmakingBooleanRuleResults_getMetrics">;
  "gameCenterMatchmakingRules_matchmakingNumberRuleResults_getMetrics": AppStoreFullApiOperationInput<"gameCenterMatchmakingRules_matchmakingNumberRuleResults_getMetrics">;
  "gameCenterMatchmakingRules_matchmakingRuleErrors_getMetrics": AppStoreFullApiOperationInput<"gameCenterMatchmakingRules_matchmakingRuleErrors_getMetrics">;
  "gameCenterMatchmakingRules_updateInstance": AppStoreFullApiOperationInput<"gameCenterMatchmakingRules_updateInstance">;
}

export interface AppStoreFullApiGameCenterMatchmakingRulesGeneratedClient {
  GameCenterMatchmakingRulesCreateInstance(...args: AppStoreFullApiOperationArgs<"gameCenterMatchmakingRules_createInstance">): Promise<AppStoreFullApiOperationResponseMap["gameCenterMatchmakingRules_createInstance"]>;
  GameCenterMatchmakingRulesDeleteInstance(...args: AppStoreFullApiOperationArgs<"gameCenterMatchmakingRules_deleteInstance">): Promise<AppStoreFullApiOperationResponseMap["gameCenterMatchmakingRules_deleteInstance"]>;
  GameCenterMatchmakingRulesMatchmakingBooleanRuleResultsGetMetrics(...args: AppStoreFullApiOperationArgs<"gameCenterMatchmakingRules_matchmakingBooleanRuleResults_getMetrics">): Promise<AppStoreFullApiOperationResponseMap["gameCenterMatchmakingRules_matchmakingBooleanRuleResults_getMetrics"]>;
  GameCenterMatchmakingRulesMatchmakingNumberRuleResultsGetMetrics(...args: AppStoreFullApiOperationArgs<"gameCenterMatchmakingRules_matchmakingNumberRuleResults_getMetrics">): Promise<AppStoreFullApiOperationResponseMap["gameCenterMatchmakingRules_matchmakingNumberRuleResults_getMetrics"]>;
  GameCenterMatchmakingRulesMatchmakingRuleErrorsGetMetrics(...args: AppStoreFullApiOperationArgs<"gameCenterMatchmakingRules_matchmakingRuleErrors_getMetrics">): Promise<AppStoreFullApiOperationResponseMap["gameCenterMatchmakingRules_matchmakingRuleErrors_getMetrics"]>;
  GameCenterMatchmakingRulesUpdateInstance(...args: AppStoreFullApiOperationArgs<"gameCenterMatchmakingRules_updateInstance">): Promise<AppStoreFullApiOperationResponseMap["gameCenterMatchmakingRules_updateInstance"]>;
}

export const AppStoreFullApiGameCenterMatchmakingRulesGeneratedFunctionNames = [
  "GameCenterMatchmakingRulesCreateInstance",
  "GameCenterMatchmakingRulesDeleteInstance",
  "GameCenterMatchmakingRulesMatchmakingBooleanRuleResultsGetMetrics",
  "GameCenterMatchmakingRulesMatchmakingNumberRuleResultsGetMetrics",
  "GameCenterMatchmakingRulesMatchmakingRuleErrorsGetMetrics",
  "GameCenterMatchmakingRulesUpdateInstance"
] as const satisfies readonly (keyof AppStoreFullApiGameCenterMatchmakingRulesGeneratedClient)[];

export function createAppStoreFullApiGameCenterMatchmakingRulesGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiGameCenterMatchmakingRulesGeneratedClient {
  return {
    GameCenterMatchmakingRulesCreateInstance: (...args) => callOperation("gameCenterMatchmakingRules_createInstance", ...(args as AppStoreFullApiOperationArgs<"gameCenterMatchmakingRules_createInstance">)),
    GameCenterMatchmakingRulesDeleteInstance: (...args) => callOperation("gameCenterMatchmakingRules_deleteInstance", ...(args as AppStoreFullApiOperationArgs<"gameCenterMatchmakingRules_deleteInstance">)),
    GameCenterMatchmakingRulesMatchmakingBooleanRuleResultsGetMetrics: (...args) => callOperation("gameCenterMatchmakingRules_matchmakingBooleanRuleResults_getMetrics", ...(args as AppStoreFullApiOperationArgs<"gameCenterMatchmakingRules_matchmakingBooleanRuleResults_getMetrics">)),
    GameCenterMatchmakingRulesMatchmakingNumberRuleResultsGetMetrics: (...args) => callOperation("gameCenterMatchmakingRules_matchmakingNumberRuleResults_getMetrics", ...(args as AppStoreFullApiOperationArgs<"gameCenterMatchmakingRules_matchmakingNumberRuleResults_getMetrics">)),
    GameCenterMatchmakingRulesMatchmakingRuleErrorsGetMetrics: (...args) => callOperation("gameCenterMatchmakingRules_matchmakingRuleErrors_getMetrics", ...(args as AppStoreFullApiOperationArgs<"gameCenterMatchmakingRules_matchmakingRuleErrors_getMetrics">)),
    GameCenterMatchmakingRulesUpdateInstance: (...args) => callOperation("gameCenterMatchmakingRules_updateInstance", ...(args as AppStoreFullApiOperationArgs<"gameCenterMatchmakingRules_updateInstance">)),
  };
}
