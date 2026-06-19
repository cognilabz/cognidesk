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
export const AppStoreFullApiNominationsOperationKeys = [
  "nominations_createInstance",
  "nominations_deleteInstance",
  "nominations_getCollection",
  "nominations_getInstance",
  "nominations_updateInstance"
] as const;
export type AppStoreFullApiNominationsOperationKey = typeof AppStoreFullApiNominationsOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiNominationsOperationPathParamMap {
  "nominations_createInstance": {};
  "nominations_deleteInstance": { "id": AppStoreFullApiPathParamValue };
  "nominations_getCollection": {};
  "nominations_getInstance": { "id": AppStoreFullApiPathParamValue };
  "nominations_updateInstance": { "id": AppStoreFullApiPathParamValue };
}

export interface AppStoreFullApiNominationsOperationRequestMap {
  "nominations_createInstance": AppStoreFullApiOperationInput<"nominations_createInstance">;
  "nominations_deleteInstance": AppStoreFullApiOperationInput<"nominations_deleteInstance">;
  "nominations_getCollection": AppStoreFullApiOperationInput<"nominations_getCollection">;
  "nominations_getInstance": AppStoreFullApiOperationInput<"nominations_getInstance">;
  "nominations_updateInstance": AppStoreFullApiOperationInput<"nominations_updateInstance">;
}

export interface AppStoreFullApiNominationsGeneratedClient {
  NominationsCreateInstance(...args: AppStoreFullApiOperationArgs<"nominations_createInstance">): Promise<AppStoreFullApiOperationResponseMap["nominations_createInstance"]>;
  NominationsDeleteInstance(...args: AppStoreFullApiOperationArgs<"nominations_deleteInstance">): Promise<AppStoreFullApiOperationResponseMap["nominations_deleteInstance"]>;
  NominationsGetCollection(...args: AppStoreFullApiOperationArgs<"nominations_getCollection">): Promise<AppStoreFullApiOperationResponseMap["nominations_getCollection"]>;
  NominationsGetInstance(...args: AppStoreFullApiOperationArgs<"nominations_getInstance">): Promise<AppStoreFullApiOperationResponseMap["nominations_getInstance"]>;
  NominationsUpdateInstance(...args: AppStoreFullApiOperationArgs<"nominations_updateInstance">): Promise<AppStoreFullApiOperationResponseMap["nominations_updateInstance"]>;
}

export const AppStoreFullApiNominationsGeneratedFunctionNames = [
  "NominationsCreateInstance",
  "NominationsDeleteInstance",
  "NominationsGetCollection",
  "NominationsGetInstance",
  "NominationsUpdateInstance"
] as const satisfies readonly (keyof AppStoreFullApiNominationsGeneratedClient)[];

export function createAppStoreFullApiNominationsGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiNominationsGeneratedClient {
  return {
    NominationsCreateInstance: (...args) => callOperation("nominations_createInstance", ...(args as AppStoreFullApiOperationArgs<"nominations_createInstance">)),
    NominationsDeleteInstance: (...args) => callOperation("nominations_deleteInstance", ...(args as AppStoreFullApiOperationArgs<"nominations_deleteInstance">)),
    NominationsGetCollection: (...args) => callOperation("nominations_getCollection", ...(args as AppStoreFullApiOperationArgs<"nominations_getCollection">)),
    NominationsGetInstance: (...args) => callOperation("nominations_getInstance", ...(args as AppStoreFullApiOperationArgs<"nominations_getInstance">)),
    NominationsUpdateInstance: (...args) => callOperation("nominations_updateInstance", ...(args as AppStoreFullApiOperationArgs<"nominations_updateInstance">)),
  };
}
