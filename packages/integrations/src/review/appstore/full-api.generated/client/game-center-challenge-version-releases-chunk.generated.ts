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
export const AppStoreFullApiGameCenterChallengeVersionReleasesOperationKeys = [
  "gameCenterChallengeVersionReleases_createInstance",
  "gameCenterChallengeVersionReleases_deleteInstance",
  "gameCenterChallengeVersionReleases_getInstance"
] as const;
export type AppStoreFullApiGameCenterChallengeVersionReleasesOperationKey = typeof AppStoreFullApiGameCenterChallengeVersionReleasesOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiGameCenterChallengeVersionReleasesOperationPathParamMap {
  "gameCenterChallengeVersionReleases_createInstance": {};
  "gameCenterChallengeVersionReleases_deleteInstance": { "id": AppStoreFullApiPathParamValue };
  "gameCenterChallengeVersionReleases_getInstance": { "id": AppStoreFullApiPathParamValue };
}

export interface AppStoreFullApiGameCenterChallengeVersionReleasesOperationRequestMap {
  "gameCenterChallengeVersionReleases_createInstance": AppStoreFullApiOperationInput<"gameCenterChallengeVersionReleases_createInstance">;
  "gameCenterChallengeVersionReleases_deleteInstance": AppStoreFullApiOperationInput<"gameCenterChallengeVersionReleases_deleteInstance">;
  "gameCenterChallengeVersionReleases_getInstance": AppStoreFullApiOperationInput<"gameCenterChallengeVersionReleases_getInstance">;
}

export interface AppStoreFullApiGameCenterChallengeVersionReleasesGeneratedClient {
  GameCenterChallengeVersionReleasesCreateInstance(...args: AppStoreFullApiOperationArgs<"gameCenterChallengeVersionReleases_createInstance">): Promise<AppStoreFullApiOperationResponseMap["gameCenterChallengeVersionReleases_createInstance"]>;
  GameCenterChallengeVersionReleasesDeleteInstance(...args: AppStoreFullApiOperationArgs<"gameCenterChallengeVersionReleases_deleteInstance">): Promise<AppStoreFullApiOperationResponseMap["gameCenterChallengeVersionReleases_deleteInstance"]>;
  GameCenterChallengeVersionReleasesGetInstance(...args: AppStoreFullApiOperationArgs<"gameCenterChallengeVersionReleases_getInstance">): Promise<AppStoreFullApiOperationResponseMap["gameCenterChallengeVersionReleases_getInstance"]>;
}

export const AppStoreFullApiGameCenterChallengeVersionReleasesGeneratedFunctionNames = [
  "GameCenterChallengeVersionReleasesCreateInstance",
  "GameCenterChallengeVersionReleasesDeleteInstance",
  "GameCenterChallengeVersionReleasesGetInstance"
] as const satisfies readonly (keyof AppStoreFullApiGameCenterChallengeVersionReleasesGeneratedClient)[];

export function createAppStoreFullApiGameCenterChallengeVersionReleasesGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiGameCenterChallengeVersionReleasesGeneratedClient {
  return {
    GameCenterChallengeVersionReleasesCreateInstance: (...args) => callOperation("gameCenterChallengeVersionReleases_createInstance", ...(args as AppStoreFullApiOperationArgs<"gameCenterChallengeVersionReleases_createInstance">)),
    GameCenterChallengeVersionReleasesDeleteInstance: (...args) => callOperation("gameCenterChallengeVersionReleases_deleteInstance", ...(args as AppStoreFullApiOperationArgs<"gameCenterChallengeVersionReleases_deleteInstance">)),
    GameCenterChallengeVersionReleasesGetInstance: (...args) => callOperation("gameCenterChallengeVersionReleases_getInstance", ...(args as AppStoreFullApiOperationArgs<"gameCenterChallengeVersionReleases_getInstance">)),
  };
}
