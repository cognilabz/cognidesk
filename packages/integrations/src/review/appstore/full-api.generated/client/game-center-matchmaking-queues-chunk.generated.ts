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
export const AppStoreFullApiGameCenterMatchmakingQueuesOperationKeys = [
  "gameCenterMatchmakingQueues_createInstance",
  "gameCenterMatchmakingQueues_deleteInstance",
  "gameCenterMatchmakingQueues_experimentMatchmakingQueueSizes_getMetrics",
  "gameCenterMatchmakingQueues_experimentMatchmakingRequests_getMetrics",
  "gameCenterMatchmakingQueues_getCollection",
  "gameCenterMatchmakingQueues_getInstance",
  "gameCenterMatchmakingQueues_matchmakingQueueSizes_getMetrics",
  "gameCenterMatchmakingQueues_matchmakingRequests_getMetrics",
  "gameCenterMatchmakingQueues_matchmakingSessions_getMetrics",
  "gameCenterMatchmakingQueues_updateInstance"
] as const;
export type AppStoreFullApiGameCenterMatchmakingQueuesOperationKey = typeof AppStoreFullApiGameCenterMatchmakingQueuesOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiGameCenterMatchmakingQueuesOperationPathParamMap {
  "gameCenterMatchmakingQueues_createInstance": {};
  "gameCenterMatchmakingQueues_deleteInstance": { "id": AppStoreFullApiPathParamValue };
  "gameCenterMatchmakingQueues_experimentMatchmakingQueueSizes_getMetrics": { "id": AppStoreFullApiPathParamValue };
  "gameCenterMatchmakingQueues_experimentMatchmakingRequests_getMetrics": { "id": AppStoreFullApiPathParamValue };
  "gameCenterMatchmakingQueues_getCollection": {};
  "gameCenterMatchmakingQueues_getInstance": { "id": AppStoreFullApiPathParamValue };
  "gameCenterMatchmakingQueues_matchmakingQueueSizes_getMetrics": { "id": AppStoreFullApiPathParamValue };
  "gameCenterMatchmakingQueues_matchmakingRequests_getMetrics": { "id": AppStoreFullApiPathParamValue };
  "gameCenterMatchmakingQueues_matchmakingSessions_getMetrics": { "id": AppStoreFullApiPathParamValue };
  "gameCenterMatchmakingQueues_updateInstance": { "id": AppStoreFullApiPathParamValue };
}

export interface AppStoreFullApiGameCenterMatchmakingQueuesOperationRequestMap {
  "gameCenterMatchmakingQueues_createInstance": AppStoreFullApiOperationInput<"gameCenterMatchmakingQueues_createInstance">;
  "gameCenterMatchmakingQueues_deleteInstance": AppStoreFullApiOperationInput<"gameCenterMatchmakingQueues_deleteInstance">;
  "gameCenterMatchmakingQueues_experimentMatchmakingQueueSizes_getMetrics": AppStoreFullApiOperationInput<"gameCenterMatchmakingQueues_experimentMatchmakingQueueSizes_getMetrics">;
  "gameCenterMatchmakingQueues_experimentMatchmakingRequests_getMetrics": AppStoreFullApiOperationInput<"gameCenterMatchmakingQueues_experimentMatchmakingRequests_getMetrics">;
  "gameCenterMatchmakingQueues_getCollection": AppStoreFullApiOperationInput<"gameCenterMatchmakingQueues_getCollection">;
  "gameCenterMatchmakingQueues_getInstance": AppStoreFullApiOperationInput<"gameCenterMatchmakingQueues_getInstance">;
  "gameCenterMatchmakingQueues_matchmakingQueueSizes_getMetrics": AppStoreFullApiOperationInput<"gameCenterMatchmakingQueues_matchmakingQueueSizes_getMetrics">;
  "gameCenterMatchmakingQueues_matchmakingRequests_getMetrics": AppStoreFullApiOperationInput<"gameCenterMatchmakingQueues_matchmakingRequests_getMetrics">;
  "gameCenterMatchmakingQueues_matchmakingSessions_getMetrics": AppStoreFullApiOperationInput<"gameCenterMatchmakingQueues_matchmakingSessions_getMetrics">;
  "gameCenterMatchmakingQueues_updateInstance": AppStoreFullApiOperationInput<"gameCenterMatchmakingQueues_updateInstance">;
}

export interface AppStoreFullApiGameCenterMatchmakingQueuesGeneratedClient {
  GameCenterMatchmakingQueuesCreateInstance(...args: AppStoreFullApiOperationArgs<"gameCenterMatchmakingQueues_createInstance">): Promise<AppStoreFullApiOperationResponseMap["gameCenterMatchmakingQueues_createInstance"]>;
  GameCenterMatchmakingQueuesDeleteInstance(...args: AppStoreFullApiOperationArgs<"gameCenterMatchmakingQueues_deleteInstance">): Promise<AppStoreFullApiOperationResponseMap["gameCenterMatchmakingQueues_deleteInstance"]>;
  GameCenterMatchmakingQueuesExperimentMatchmakingQueueSizesGetMetrics(...args: AppStoreFullApiOperationArgs<"gameCenterMatchmakingQueues_experimentMatchmakingQueueSizes_getMetrics">): Promise<AppStoreFullApiOperationResponseMap["gameCenterMatchmakingQueues_experimentMatchmakingQueueSizes_getMetrics"]>;
  GameCenterMatchmakingQueuesExperimentMatchmakingRequestsGetMetrics(...args: AppStoreFullApiOperationArgs<"gameCenterMatchmakingQueues_experimentMatchmakingRequests_getMetrics">): Promise<AppStoreFullApiOperationResponseMap["gameCenterMatchmakingQueues_experimentMatchmakingRequests_getMetrics"]>;
  GameCenterMatchmakingQueuesGetCollection(...args: AppStoreFullApiOperationArgs<"gameCenterMatchmakingQueues_getCollection">): Promise<AppStoreFullApiOperationResponseMap["gameCenterMatchmakingQueues_getCollection"]>;
  GameCenterMatchmakingQueuesGetInstance(...args: AppStoreFullApiOperationArgs<"gameCenterMatchmakingQueues_getInstance">): Promise<AppStoreFullApiOperationResponseMap["gameCenterMatchmakingQueues_getInstance"]>;
  GameCenterMatchmakingQueuesMatchmakingQueueSizesGetMetrics(...args: AppStoreFullApiOperationArgs<"gameCenterMatchmakingQueues_matchmakingQueueSizes_getMetrics">): Promise<AppStoreFullApiOperationResponseMap["gameCenterMatchmakingQueues_matchmakingQueueSizes_getMetrics"]>;
  GameCenterMatchmakingQueuesMatchmakingRequestsGetMetrics(...args: AppStoreFullApiOperationArgs<"gameCenterMatchmakingQueues_matchmakingRequests_getMetrics">): Promise<AppStoreFullApiOperationResponseMap["gameCenterMatchmakingQueues_matchmakingRequests_getMetrics"]>;
  GameCenterMatchmakingQueuesMatchmakingSessionsGetMetrics(...args: AppStoreFullApiOperationArgs<"gameCenterMatchmakingQueues_matchmakingSessions_getMetrics">): Promise<AppStoreFullApiOperationResponseMap["gameCenterMatchmakingQueues_matchmakingSessions_getMetrics"]>;
  GameCenterMatchmakingQueuesUpdateInstance(...args: AppStoreFullApiOperationArgs<"gameCenterMatchmakingQueues_updateInstance">): Promise<AppStoreFullApiOperationResponseMap["gameCenterMatchmakingQueues_updateInstance"]>;
}

export const AppStoreFullApiGameCenterMatchmakingQueuesGeneratedFunctionNames = [
  "GameCenterMatchmakingQueuesCreateInstance",
  "GameCenterMatchmakingQueuesDeleteInstance",
  "GameCenterMatchmakingQueuesExperimentMatchmakingQueueSizesGetMetrics",
  "GameCenterMatchmakingQueuesExperimentMatchmakingRequestsGetMetrics",
  "GameCenterMatchmakingQueuesGetCollection",
  "GameCenterMatchmakingQueuesGetInstance",
  "GameCenterMatchmakingQueuesMatchmakingQueueSizesGetMetrics",
  "GameCenterMatchmakingQueuesMatchmakingRequestsGetMetrics",
  "GameCenterMatchmakingQueuesMatchmakingSessionsGetMetrics",
  "GameCenterMatchmakingQueuesUpdateInstance"
] as const satisfies readonly (keyof AppStoreFullApiGameCenterMatchmakingQueuesGeneratedClient)[];

export function createAppStoreFullApiGameCenterMatchmakingQueuesGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiGameCenterMatchmakingQueuesGeneratedClient {
  return {
    GameCenterMatchmakingQueuesCreateInstance: (...args) => callOperation("gameCenterMatchmakingQueues_createInstance", ...(args as AppStoreFullApiOperationArgs<"gameCenterMatchmakingQueues_createInstance">)),
    GameCenterMatchmakingQueuesDeleteInstance: (...args) => callOperation("gameCenterMatchmakingQueues_deleteInstance", ...(args as AppStoreFullApiOperationArgs<"gameCenterMatchmakingQueues_deleteInstance">)),
    GameCenterMatchmakingQueuesExperimentMatchmakingQueueSizesGetMetrics: (...args) => callOperation("gameCenterMatchmakingQueues_experimentMatchmakingQueueSizes_getMetrics", ...(args as AppStoreFullApiOperationArgs<"gameCenterMatchmakingQueues_experimentMatchmakingQueueSizes_getMetrics">)),
    GameCenterMatchmakingQueuesExperimentMatchmakingRequestsGetMetrics: (...args) => callOperation("gameCenterMatchmakingQueues_experimentMatchmakingRequests_getMetrics", ...(args as AppStoreFullApiOperationArgs<"gameCenterMatchmakingQueues_experimentMatchmakingRequests_getMetrics">)),
    GameCenterMatchmakingQueuesGetCollection: (...args) => callOperation("gameCenterMatchmakingQueues_getCollection", ...(args as AppStoreFullApiOperationArgs<"gameCenterMatchmakingQueues_getCollection">)),
    GameCenterMatchmakingQueuesGetInstance: (...args) => callOperation("gameCenterMatchmakingQueues_getInstance", ...(args as AppStoreFullApiOperationArgs<"gameCenterMatchmakingQueues_getInstance">)),
    GameCenterMatchmakingQueuesMatchmakingQueueSizesGetMetrics: (...args) => callOperation("gameCenterMatchmakingQueues_matchmakingQueueSizes_getMetrics", ...(args as AppStoreFullApiOperationArgs<"gameCenterMatchmakingQueues_matchmakingQueueSizes_getMetrics">)),
    GameCenterMatchmakingQueuesMatchmakingRequestsGetMetrics: (...args) => callOperation("gameCenterMatchmakingQueues_matchmakingRequests_getMetrics", ...(args as AppStoreFullApiOperationArgs<"gameCenterMatchmakingQueues_matchmakingRequests_getMetrics">)),
    GameCenterMatchmakingQueuesMatchmakingSessionsGetMetrics: (...args) => callOperation("gameCenterMatchmakingQueues_matchmakingSessions_getMetrics", ...(args as AppStoreFullApiOperationArgs<"gameCenterMatchmakingQueues_matchmakingSessions_getMetrics">)),
    GameCenterMatchmakingQueuesUpdateInstance: (...args) => callOperation("gameCenterMatchmakingQueues_updateInstance", ...(args as AppStoreFullApiOperationArgs<"gameCenterMatchmakingQueues_updateInstance">)),
  };
}
