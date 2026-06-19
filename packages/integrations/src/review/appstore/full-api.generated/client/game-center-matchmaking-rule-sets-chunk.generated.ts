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
export const AppStoreFullApiGameCenterMatchmakingRuleSetsOperationKeys = [
  "gameCenterMatchmakingRuleSets_createInstance",
  "gameCenterMatchmakingRuleSets_deleteInstance",
  "gameCenterMatchmakingRuleSets_getCollection",
  "gameCenterMatchmakingRuleSets_getInstance",
  "gameCenterMatchmakingRuleSets_matchmakingQueues_getToManyRelated",
  "gameCenterMatchmakingRuleSets_matchmakingQueues_getToManyRelationship",
  "gameCenterMatchmakingRuleSets_rules_getToManyRelated",
  "gameCenterMatchmakingRuleSets_rules_getToManyRelationship",
  "gameCenterMatchmakingRuleSets_teams_getToManyRelated",
  "gameCenterMatchmakingRuleSets_teams_getToManyRelationship",
  "gameCenterMatchmakingRuleSets_updateInstance"
] as const;
export type AppStoreFullApiGameCenterMatchmakingRuleSetsOperationKey = typeof AppStoreFullApiGameCenterMatchmakingRuleSetsOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiGameCenterMatchmakingRuleSetsOperationPathParamMap {
  "gameCenterMatchmakingRuleSets_createInstance": {};
  "gameCenterMatchmakingRuleSets_deleteInstance": { "id": AppStoreFullApiPathParamValue };
  "gameCenterMatchmakingRuleSets_getCollection": {};
  "gameCenterMatchmakingRuleSets_getInstance": { "id": AppStoreFullApiPathParamValue };
  "gameCenterMatchmakingRuleSets_matchmakingQueues_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "gameCenterMatchmakingRuleSets_matchmakingQueues_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "gameCenterMatchmakingRuleSets_rules_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "gameCenterMatchmakingRuleSets_rules_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "gameCenterMatchmakingRuleSets_teams_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "gameCenterMatchmakingRuleSets_teams_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "gameCenterMatchmakingRuleSets_updateInstance": { "id": AppStoreFullApiPathParamValue };
}

export interface AppStoreFullApiGameCenterMatchmakingRuleSetsOperationRequestMap {
  "gameCenterMatchmakingRuleSets_createInstance": AppStoreFullApiOperationInput<"gameCenterMatchmakingRuleSets_createInstance">;
  "gameCenterMatchmakingRuleSets_deleteInstance": AppStoreFullApiOperationInput<"gameCenterMatchmakingRuleSets_deleteInstance">;
  "gameCenterMatchmakingRuleSets_getCollection": AppStoreFullApiOperationInput<"gameCenterMatchmakingRuleSets_getCollection">;
  "gameCenterMatchmakingRuleSets_getInstance": AppStoreFullApiOperationInput<"gameCenterMatchmakingRuleSets_getInstance">;
  "gameCenterMatchmakingRuleSets_matchmakingQueues_getToManyRelated": AppStoreFullApiOperationInput<"gameCenterMatchmakingRuleSets_matchmakingQueues_getToManyRelated">;
  "gameCenterMatchmakingRuleSets_matchmakingQueues_getToManyRelationship": AppStoreFullApiOperationInput<"gameCenterMatchmakingRuleSets_matchmakingQueues_getToManyRelationship">;
  "gameCenterMatchmakingRuleSets_rules_getToManyRelated": AppStoreFullApiOperationInput<"gameCenterMatchmakingRuleSets_rules_getToManyRelated">;
  "gameCenterMatchmakingRuleSets_rules_getToManyRelationship": AppStoreFullApiOperationInput<"gameCenterMatchmakingRuleSets_rules_getToManyRelationship">;
  "gameCenterMatchmakingRuleSets_teams_getToManyRelated": AppStoreFullApiOperationInput<"gameCenterMatchmakingRuleSets_teams_getToManyRelated">;
  "gameCenterMatchmakingRuleSets_teams_getToManyRelationship": AppStoreFullApiOperationInput<"gameCenterMatchmakingRuleSets_teams_getToManyRelationship">;
  "gameCenterMatchmakingRuleSets_updateInstance": AppStoreFullApiOperationInput<"gameCenterMatchmakingRuleSets_updateInstance">;
}

export interface AppStoreFullApiGameCenterMatchmakingRuleSetsGeneratedClient {
  GameCenterMatchmakingRuleSetsCreateInstance(...args: AppStoreFullApiOperationArgs<"gameCenterMatchmakingRuleSets_createInstance">): Promise<AppStoreFullApiOperationResponseMap["gameCenterMatchmakingRuleSets_createInstance"]>;
  GameCenterMatchmakingRuleSetsDeleteInstance(...args: AppStoreFullApiOperationArgs<"gameCenterMatchmakingRuleSets_deleteInstance">): Promise<AppStoreFullApiOperationResponseMap["gameCenterMatchmakingRuleSets_deleteInstance"]>;
  GameCenterMatchmakingRuleSetsGetCollection(...args: AppStoreFullApiOperationArgs<"gameCenterMatchmakingRuleSets_getCollection">): Promise<AppStoreFullApiOperationResponseMap["gameCenterMatchmakingRuleSets_getCollection"]>;
  GameCenterMatchmakingRuleSetsGetInstance(...args: AppStoreFullApiOperationArgs<"gameCenterMatchmakingRuleSets_getInstance">): Promise<AppStoreFullApiOperationResponseMap["gameCenterMatchmakingRuleSets_getInstance"]>;
  GameCenterMatchmakingRuleSetsMatchmakingQueuesGetToManyRelated(...args: AppStoreFullApiOperationArgs<"gameCenterMatchmakingRuleSets_matchmakingQueues_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["gameCenterMatchmakingRuleSets_matchmakingQueues_getToManyRelated"]>;
  GameCenterMatchmakingRuleSetsMatchmakingQueuesGetToManyRelationship(...args: AppStoreFullApiOperationArgs<"gameCenterMatchmakingRuleSets_matchmakingQueues_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["gameCenterMatchmakingRuleSets_matchmakingQueues_getToManyRelationship"]>;
  GameCenterMatchmakingRuleSetsRulesGetToManyRelated(...args: AppStoreFullApiOperationArgs<"gameCenterMatchmakingRuleSets_rules_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["gameCenterMatchmakingRuleSets_rules_getToManyRelated"]>;
  GameCenterMatchmakingRuleSetsRulesGetToManyRelationship(...args: AppStoreFullApiOperationArgs<"gameCenterMatchmakingRuleSets_rules_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["gameCenterMatchmakingRuleSets_rules_getToManyRelationship"]>;
  GameCenterMatchmakingRuleSetsTeamsGetToManyRelated(...args: AppStoreFullApiOperationArgs<"gameCenterMatchmakingRuleSets_teams_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["gameCenterMatchmakingRuleSets_teams_getToManyRelated"]>;
  GameCenterMatchmakingRuleSetsTeamsGetToManyRelationship(...args: AppStoreFullApiOperationArgs<"gameCenterMatchmakingRuleSets_teams_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["gameCenterMatchmakingRuleSets_teams_getToManyRelationship"]>;
  GameCenterMatchmakingRuleSetsUpdateInstance(...args: AppStoreFullApiOperationArgs<"gameCenterMatchmakingRuleSets_updateInstance">): Promise<AppStoreFullApiOperationResponseMap["gameCenterMatchmakingRuleSets_updateInstance"]>;
}

export const AppStoreFullApiGameCenterMatchmakingRuleSetsGeneratedFunctionNames = [
  "GameCenterMatchmakingRuleSetsCreateInstance",
  "GameCenterMatchmakingRuleSetsDeleteInstance",
  "GameCenterMatchmakingRuleSetsGetCollection",
  "GameCenterMatchmakingRuleSetsGetInstance",
  "GameCenterMatchmakingRuleSetsMatchmakingQueuesGetToManyRelated",
  "GameCenterMatchmakingRuleSetsMatchmakingQueuesGetToManyRelationship",
  "GameCenterMatchmakingRuleSetsRulesGetToManyRelated",
  "GameCenterMatchmakingRuleSetsRulesGetToManyRelationship",
  "GameCenterMatchmakingRuleSetsTeamsGetToManyRelated",
  "GameCenterMatchmakingRuleSetsTeamsGetToManyRelationship",
  "GameCenterMatchmakingRuleSetsUpdateInstance"
] as const satisfies readonly (keyof AppStoreFullApiGameCenterMatchmakingRuleSetsGeneratedClient)[];

export function createAppStoreFullApiGameCenterMatchmakingRuleSetsGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiGameCenterMatchmakingRuleSetsGeneratedClient {
  return {
    GameCenterMatchmakingRuleSetsCreateInstance: (...args) => callOperation("gameCenterMatchmakingRuleSets_createInstance", ...(args as AppStoreFullApiOperationArgs<"gameCenterMatchmakingRuleSets_createInstance">)),
    GameCenterMatchmakingRuleSetsDeleteInstance: (...args) => callOperation("gameCenterMatchmakingRuleSets_deleteInstance", ...(args as AppStoreFullApiOperationArgs<"gameCenterMatchmakingRuleSets_deleteInstance">)),
    GameCenterMatchmakingRuleSetsGetCollection: (...args) => callOperation("gameCenterMatchmakingRuleSets_getCollection", ...(args as AppStoreFullApiOperationArgs<"gameCenterMatchmakingRuleSets_getCollection">)),
    GameCenterMatchmakingRuleSetsGetInstance: (...args) => callOperation("gameCenterMatchmakingRuleSets_getInstance", ...(args as AppStoreFullApiOperationArgs<"gameCenterMatchmakingRuleSets_getInstance">)),
    GameCenterMatchmakingRuleSetsMatchmakingQueuesGetToManyRelated: (...args) => callOperation("gameCenterMatchmakingRuleSets_matchmakingQueues_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"gameCenterMatchmakingRuleSets_matchmakingQueues_getToManyRelated">)),
    GameCenterMatchmakingRuleSetsMatchmakingQueuesGetToManyRelationship: (...args) => callOperation("gameCenterMatchmakingRuleSets_matchmakingQueues_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"gameCenterMatchmakingRuleSets_matchmakingQueues_getToManyRelationship">)),
    GameCenterMatchmakingRuleSetsRulesGetToManyRelated: (...args) => callOperation("gameCenterMatchmakingRuleSets_rules_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"gameCenterMatchmakingRuleSets_rules_getToManyRelated">)),
    GameCenterMatchmakingRuleSetsRulesGetToManyRelationship: (...args) => callOperation("gameCenterMatchmakingRuleSets_rules_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"gameCenterMatchmakingRuleSets_rules_getToManyRelationship">)),
    GameCenterMatchmakingRuleSetsTeamsGetToManyRelated: (...args) => callOperation("gameCenterMatchmakingRuleSets_teams_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"gameCenterMatchmakingRuleSets_teams_getToManyRelated">)),
    GameCenterMatchmakingRuleSetsTeamsGetToManyRelationship: (...args) => callOperation("gameCenterMatchmakingRuleSets_teams_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"gameCenterMatchmakingRuleSets_teams_getToManyRelationship">)),
    GameCenterMatchmakingRuleSetsUpdateInstance: (...args) => callOperation("gameCenterMatchmakingRuleSets_updateInstance", ...(args as AppStoreFullApiOperationArgs<"gameCenterMatchmakingRuleSets_updateInstance">)),
  };
}
