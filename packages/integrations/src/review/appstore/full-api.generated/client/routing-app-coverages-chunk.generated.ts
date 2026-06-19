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
export const AppStoreFullApiRoutingAppCoveragesOperationKeys = [
  "routingAppCoverages_createInstance",
  "routingAppCoverages_deleteInstance",
  "routingAppCoverages_getInstance",
  "routingAppCoverages_updateInstance"
] as const;
export type AppStoreFullApiRoutingAppCoveragesOperationKey = typeof AppStoreFullApiRoutingAppCoveragesOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiRoutingAppCoveragesOperationPathParamMap {
  "routingAppCoverages_createInstance": {};
  "routingAppCoverages_deleteInstance": { "id": AppStoreFullApiPathParamValue };
  "routingAppCoverages_getInstance": { "id": AppStoreFullApiPathParamValue };
  "routingAppCoverages_updateInstance": { "id": AppStoreFullApiPathParamValue };
}

export interface AppStoreFullApiRoutingAppCoveragesOperationRequestMap {
  "routingAppCoverages_createInstance": AppStoreFullApiOperationInput<"routingAppCoverages_createInstance">;
  "routingAppCoverages_deleteInstance": AppStoreFullApiOperationInput<"routingAppCoverages_deleteInstance">;
  "routingAppCoverages_getInstance": AppStoreFullApiOperationInput<"routingAppCoverages_getInstance">;
  "routingAppCoverages_updateInstance": AppStoreFullApiOperationInput<"routingAppCoverages_updateInstance">;
}

export interface AppStoreFullApiRoutingAppCoveragesGeneratedClient {
  RoutingAppCoveragesCreateInstance(...args: AppStoreFullApiOperationArgs<"routingAppCoverages_createInstance">): Promise<AppStoreFullApiOperationResponseMap["routingAppCoverages_createInstance"]>;
  RoutingAppCoveragesDeleteInstance(...args: AppStoreFullApiOperationArgs<"routingAppCoverages_deleteInstance">): Promise<AppStoreFullApiOperationResponseMap["routingAppCoverages_deleteInstance"]>;
  RoutingAppCoveragesGetInstance(...args: AppStoreFullApiOperationArgs<"routingAppCoverages_getInstance">): Promise<AppStoreFullApiOperationResponseMap["routingAppCoverages_getInstance"]>;
  RoutingAppCoveragesUpdateInstance(...args: AppStoreFullApiOperationArgs<"routingAppCoverages_updateInstance">): Promise<AppStoreFullApiOperationResponseMap["routingAppCoverages_updateInstance"]>;
}

export const AppStoreFullApiRoutingAppCoveragesGeneratedFunctionNames = [
  "RoutingAppCoveragesCreateInstance",
  "RoutingAppCoveragesDeleteInstance",
  "RoutingAppCoveragesGetInstance",
  "RoutingAppCoveragesUpdateInstance"
] as const satisfies readonly (keyof AppStoreFullApiRoutingAppCoveragesGeneratedClient)[];

export function createAppStoreFullApiRoutingAppCoveragesGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiRoutingAppCoveragesGeneratedClient {
  return {
    RoutingAppCoveragesCreateInstance: (...args) => callOperation("routingAppCoverages_createInstance", ...(args as AppStoreFullApiOperationArgs<"routingAppCoverages_createInstance">)),
    RoutingAppCoveragesDeleteInstance: (...args) => callOperation("routingAppCoverages_deleteInstance", ...(args as AppStoreFullApiOperationArgs<"routingAppCoverages_deleteInstance">)),
    RoutingAppCoveragesGetInstance: (...args) => callOperation("routingAppCoverages_getInstance", ...(args as AppStoreFullApiOperationArgs<"routingAppCoverages_getInstance">)),
    RoutingAppCoveragesUpdateInstance: (...args) => callOperation("routingAppCoverages_updateInstance", ...(args as AppStoreFullApiOperationArgs<"routingAppCoverages_updateInstance">)),
  };
}
