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
export const AppStoreFullApiPassTypeIdsOperationKeys = [
  "passTypeIds_certificates_getToManyRelated",
  "passTypeIds_certificates_getToManyRelationship",
  "passTypeIds_createInstance",
  "passTypeIds_deleteInstance",
  "passTypeIds_getCollection",
  "passTypeIds_getInstance",
  "passTypeIds_updateInstance"
] as const;
export type AppStoreFullApiPassTypeIdsOperationKey = typeof AppStoreFullApiPassTypeIdsOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiPassTypeIdsOperationPathParamMap {
  "passTypeIds_certificates_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "passTypeIds_certificates_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "passTypeIds_createInstance": {};
  "passTypeIds_deleteInstance": { "id": AppStoreFullApiPathParamValue };
  "passTypeIds_getCollection": {};
  "passTypeIds_getInstance": { "id": AppStoreFullApiPathParamValue };
  "passTypeIds_updateInstance": { "id": AppStoreFullApiPathParamValue };
}

export interface AppStoreFullApiPassTypeIdsOperationRequestMap {
  "passTypeIds_certificates_getToManyRelated": AppStoreFullApiOperationInput<"passTypeIds_certificates_getToManyRelated">;
  "passTypeIds_certificates_getToManyRelationship": AppStoreFullApiOperationInput<"passTypeIds_certificates_getToManyRelationship">;
  "passTypeIds_createInstance": AppStoreFullApiOperationInput<"passTypeIds_createInstance">;
  "passTypeIds_deleteInstance": AppStoreFullApiOperationInput<"passTypeIds_deleteInstance">;
  "passTypeIds_getCollection": AppStoreFullApiOperationInput<"passTypeIds_getCollection">;
  "passTypeIds_getInstance": AppStoreFullApiOperationInput<"passTypeIds_getInstance">;
  "passTypeIds_updateInstance": AppStoreFullApiOperationInput<"passTypeIds_updateInstance">;
}

export interface AppStoreFullApiPassTypeIdsGeneratedClient {
  PassTypeIdsCertificatesGetToManyRelated(...args: AppStoreFullApiOperationArgs<"passTypeIds_certificates_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["passTypeIds_certificates_getToManyRelated"]>;
  PassTypeIdsCertificatesGetToManyRelationship(...args: AppStoreFullApiOperationArgs<"passTypeIds_certificates_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["passTypeIds_certificates_getToManyRelationship"]>;
  PassTypeIdsCreateInstance(...args: AppStoreFullApiOperationArgs<"passTypeIds_createInstance">): Promise<AppStoreFullApiOperationResponseMap["passTypeIds_createInstance"]>;
  PassTypeIdsDeleteInstance(...args: AppStoreFullApiOperationArgs<"passTypeIds_deleteInstance">): Promise<AppStoreFullApiOperationResponseMap["passTypeIds_deleteInstance"]>;
  PassTypeIdsGetCollection(...args: AppStoreFullApiOperationArgs<"passTypeIds_getCollection">): Promise<AppStoreFullApiOperationResponseMap["passTypeIds_getCollection"]>;
  PassTypeIdsGetInstance(...args: AppStoreFullApiOperationArgs<"passTypeIds_getInstance">): Promise<AppStoreFullApiOperationResponseMap["passTypeIds_getInstance"]>;
  PassTypeIdsUpdateInstance(...args: AppStoreFullApiOperationArgs<"passTypeIds_updateInstance">): Promise<AppStoreFullApiOperationResponseMap["passTypeIds_updateInstance"]>;
}

export const AppStoreFullApiPassTypeIdsGeneratedFunctionNames = [
  "PassTypeIdsCertificatesGetToManyRelated",
  "PassTypeIdsCertificatesGetToManyRelationship",
  "PassTypeIdsCreateInstance",
  "PassTypeIdsDeleteInstance",
  "PassTypeIdsGetCollection",
  "PassTypeIdsGetInstance",
  "PassTypeIdsUpdateInstance"
] as const satisfies readonly (keyof AppStoreFullApiPassTypeIdsGeneratedClient)[];

export function createAppStoreFullApiPassTypeIdsGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiPassTypeIdsGeneratedClient {
  return {
    PassTypeIdsCertificatesGetToManyRelated: (...args) => callOperation("passTypeIds_certificates_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"passTypeIds_certificates_getToManyRelated">)),
    PassTypeIdsCertificatesGetToManyRelationship: (...args) => callOperation("passTypeIds_certificates_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"passTypeIds_certificates_getToManyRelationship">)),
    PassTypeIdsCreateInstance: (...args) => callOperation("passTypeIds_createInstance", ...(args as AppStoreFullApiOperationArgs<"passTypeIds_createInstance">)),
    PassTypeIdsDeleteInstance: (...args) => callOperation("passTypeIds_deleteInstance", ...(args as AppStoreFullApiOperationArgs<"passTypeIds_deleteInstance">)),
    PassTypeIdsGetCollection: (...args) => callOperation("passTypeIds_getCollection", ...(args as AppStoreFullApiOperationArgs<"passTypeIds_getCollection">)),
    PassTypeIdsGetInstance: (...args) => callOperation("passTypeIds_getInstance", ...(args as AppStoreFullApiOperationArgs<"passTypeIds_getInstance">)),
    PassTypeIdsUpdateInstance: (...args) => callOperation("passTypeIds_updateInstance", ...(args as AppStoreFullApiOperationArgs<"passTypeIds_updateInstance">)),
  };
}
