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
export const AppStoreFullApiAlternativeDistributionKeysOperationKeys = [
  "alternativeDistributionKeys_createInstance",
  "alternativeDistributionKeys_deleteInstance",
  "alternativeDistributionKeys_getCollection",
  "alternativeDistributionKeys_getInstance"
] as const;
export type AppStoreFullApiAlternativeDistributionKeysOperationKey = typeof AppStoreFullApiAlternativeDistributionKeysOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiAlternativeDistributionKeysOperationPathParamMap {
  "alternativeDistributionKeys_createInstance": {};
  "alternativeDistributionKeys_deleteInstance": { "id": AppStoreFullApiPathParamValue };
  "alternativeDistributionKeys_getCollection": {};
  "alternativeDistributionKeys_getInstance": { "id": AppStoreFullApiPathParamValue };
}

export interface AppStoreFullApiAlternativeDistributionKeysOperationRequestMap {
  "alternativeDistributionKeys_createInstance": AppStoreFullApiOperationInput<"alternativeDistributionKeys_createInstance">;
  "alternativeDistributionKeys_deleteInstance": AppStoreFullApiOperationInput<"alternativeDistributionKeys_deleteInstance">;
  "alternativeDistributionKeys_getCollection": AppStoreFullApiOperationInput<"alternativeDistributionKeys_getCollection">;
  "alternativeDistributionKeys_getInstance": AppStoreFullApiOperationInput<"alternativeDistributionKeys_getInstance">;
}

export interface AppStoreFullApiAlternativeDistributionKeysGeneratedClient {
  AlternativeDistributionKeysCreateInstance(...args: AppStoreFullApiOperationArgs<"alternativeDistributionKeys_createInstance">): Promise<AppStoreFullApiOperationResponseMap["alternativeDistributionKeys_createInstance"]>;
  AlternativeDistributionKeysDeleteInstance(...args: AppStoreFullApiOperationArgs<"alternativeDistributionKeys_deleteInstance">): Promise<AppStoreFullApiOperationResponseMap["alternativeDistributionKeys_deleteInstance"]>;
  AlternativeDistributionKeysGetCollection(...args: AppStoreFullApiOperationArgs<"alternativeDistributionKeys_getCollection">): Promise<AppStoreFullApiOperationResponseMap["alternativeDistributionKeys_getCollection"]>;
  AlternativeDistributionKeysGetInstance(...args: AppStoreFullApiOperationArgs<"alternativeDistributionKeys_getInstance">): Promise<AppStoreFullApiOperationResponseMap["alternativeDistributionKeys_getInstance"]>;
}

export const AppStoreFullApiAlternativeDistributionKeysGeneratedFunctionNames = [
  "AlternativeDistributionKeysCreateInstance",
  "AlternativeDistributionKeysDeleteInstance",
  "AlternativeDistributionKeysGetCollection",
  "AlternativeDistributionKeysGetInstance"
] as const satisfies readonly (keyof AppStoreFullApiAlternativeDistributionKeysGeneratedClient)[];

export function createAppStoreFullApiAlternativeDistributionKeysGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiAlternativeDistributionKeysGeneratedClient {
  return {
    AlternativeDistributionKeysCreateInstance: (...args) => callOperation("alternativeDistributionKeys_createInstance", ...(args as AppStoreFullApiOperationArgs<"alternativeDistributionKeys_createInstance">)),
    AlternativeDistributionKeysDeleteInstance: (...args) => callOperation("alternativeDistributionKeys_deleteInstance", ...(args as AppStoreFullApiOperationArgs<"alternativeDistributionKeys_deleteInstance">)),
    AlternativeDistributionKeysGetCollection: (...args) => callOperation("alternativeDistributionKeys_getCollection", ...(args as AppStoreFullApiOperationArgs<"alternativeDistributionKeys_getCollection">)),
    AlternativeDistributionKeysGetInstance: (...args) => callOperation("alternativeDistributionKeys_getInstance", ...(args as AppStoreFullApiOperationArgs<"alternativeDistributionKeys_getInstance">)),
  };
}
