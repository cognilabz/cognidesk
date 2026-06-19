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
export const AppStoreFullApiGameCenterMatchmakingRuleSetTestsOperationKeys = [
  "gameCenterMatchmakingRuleSetTests_createInstance"
] as const;
export type AppStoreFullApiGameCenterMatchmakingRuleSetTestsOperationKey = typeof AppStoreFullApiGameCenterMatchmakingRuleSetTestsOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiGameCenterMatchmakingRuleSetTestsOperationPathParamMap {
  "gameCenterMatchmakingRuleSetTests_createInstance": {};
}

export interface AppStoreFullApiGameCenterMatchmakingRuleSetTestsOperationRequestMap {
  "gameCenterMatchmakingRuleSetTests_createInstance": AppStoreFullApiOperationInput<"gameCenterMatchmakingRuleSetTests_createInstance">;
}

export interface AppStoreFullApiGameCenterMatchmakingRuleSetTestsGeneratedClient {
  GameCenterMatchmakingRuleSetTestsCreateInstance(...args: AppStoreFullApiOperationArgs<"gameCenterMatchmakingRuleSetTests_createInstance">): Promise<AppStoreFullApiOperationResponseMap["gameCenterMatchmakingRuleSetTests_createInstance"]>;
}

export const AppStoreFullApiGameCenterMatchmakingRuleSetTestsGeneratedFunctionNames = [
  "GameCenterMatchmakingRuleSetTestsCreateInstance"
] as const satisfies readonly (keyof AppStoreFullApiGameCenterMatchmakingRuleSetTestsGeneratedClient)[];

export function createAppStoreFullApiGameCenterMatchmakingRuleSetTestsGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiGameCenterMatchmakingRuleSetTestsGeneratedClient {
  return {
    GameCenterMatchmakingRuleSetTestsCreateInstance: (...args) => callOperation("gameCenterMatchmakingRuleSetTests_createInstance", ...(args as AppStoreFullApiOperationArgs<"gameCenterMatchmakingRuleSetTests_createInstance">)),
  };
}
