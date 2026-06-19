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
export const AppStoreFullApiMerchantIdsOperationKeys = [
  "merchantIds_certificates_getToManyRelated",
  "merchantIds_certificates_getToManyRelationship",
  "merchantIds_createInstance",
  "merchantIds_deleteInstance",
  "merchantIds_getCollection",
  "merchantIds_getInstance",
  "merchantIds_updateInstance"
] as const;
export type AppStoreFullApiMerchantIdsOperationKey = typeof AppStoreFullApiMerchantIdsOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiMerchantIdsOperationPathParamMap {
  "merchantIds_certificates_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "merchantIds_certificates_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "merchantIds_createInstance": {};
  "merchantIds_deleteInstance": { "id": AppStoreFullApiPathParamValue };
  "merchantIds_getCollection": {};
  "merchantIds_getInstance": { "id": AppStoreFullApiPathParamValue };
  "merchantIds_updateInstance": { "id": AppStoreFullApiPathParamValue };
}

export interface AppStoreFullApiMerchantIdsOperationRequestMap {
  "merchantIds_certificates_getToManyRelated": AppStoreFullApiOperationInput<"merchantIds_certificates_getToManyRelated">;
  "merchantIds_certificates_getToManyRelationship": AppStoreFullApiOperationInput<"merchantIds_certificates_getToManyRelationship">;
  "merchantIds_createInstance": AppStoreFullApiOperationInput<"merchantIds_createInstance">;
  "merchantIds_deleteInstance": AppStoreFullApiOperationInput<"merchantIds_deleteInstance">;
  "merchantIds_getCollection": AppStoreFullApiOperationInput<"merchantIds_getCollection">;
  "merchantIds_getInstance": AppStoreFullApiOperationInput<"merchantIds_getInstance">;
  "merchantIds_updateInstance": AppStoreFullApiOperationInput<"merchantIds_updateInstance">;
}

export interface AppStoreFullApiMerchantIdsGeneratedClient {
  MerchantIdsCertificatesGetToManyRelated(...args: AppStoreFullApiOperationArgs<"merchantIds_certificates_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["merchantIds_certificates_getToManyRelated"]>;
  MerchantIdsCertificatesGetToManyRelationship(...args: AppStoreFullApiOperationArgs<"merchantIds_certificates_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["merchantIds_certificates_getToManyRelationship"]>;
  MerchantIdsCreateInstance(...args: AppStoreFullApiOperationArgs<"merchantIds_createInstance">): Promise<AppStoreFullApiOperationResponseMap["merchantIds_createInstance"]>;
  MerchantIdsDeleteInstance(...args: AppStoreFullApiOperationArgs<"merchantIds_deleteInstance">): Promise<AppStoreFullApiOperationResponseMap["merchantIds_deleteInstance"]>;
  MerchantIdsGetCollection(...args: AppStoreFullApiOperationArgs<"merchantIds_getCollection">): Promise<AppStoreFullApiOperationResponseMap["merchantIds_getCollection"]>;
  MerchantIdsGetInstance(...args: AppStoreFullApiOperationArgs<"merchantIds_getInstance">): Promise<AppStoreFullApiOperationResponseMap["merchantIds_getInstance"]>;
  MerchantIdsUpdateInstance(...args: AppStoreFullApiOperationArgs<"merchantIds_updateInstance">): Promise<AppStoreFullApiOperationResponseMap["merchantIds_updateInstance"]>;
}

export const AppStoreFullApiMerchantIdsGeneratedFunctionNames = [
  "MerchantIdsCertificatesGetToManyRelated",
  "MerchantIdsCertificatesGetToManyRelationship",
  "MerchantIdsCreateInstance",
  "MerchantIdsDeleteInstance",
  "MerchantIdsGetCollection",
  "MerchantIdsGetInstance",
  "MerchantIdsUpdateInstance"
] as const satisfies readonly (keyof AppStoreFullApiMerchantIdsGeneratedClient)[];

export function createAppStoreFullApiMerchantIdsGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiMerchantIdsGeneratedClient {
  return {
    MerchantIdsCertificatesGetToManyRelated: (...args) => callOperation("merchantIds_certificates_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"merchantIds_certificates_getToManyRelated">)),
    MerchantIdsCertificatesGetToManyRelationship: (...args) => callOperation("merchantIds_certificates_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"merchantIds_certificates_getToManyRelationship">)),
    MerchantIdsCreateInstance: (...args) => callOperation("merchantIds_createInstance", ...(args as AppStoreFullApiOperationArgs<"merchantIds_createInstance">)),
    MerchantIdsDeleteInstance: (...args) => callOperation("merchantIds_deleteInstance", ...(args as AppStoreFullApiOperationArgs<"merchantIds_deleteInstance">)),
    MerchantIdsGetCollection: (...args) => callOperation("merchantIds_getCollection", ...(args as AppStoreFullApiOperationArgs<"merchantIds_getCollection">)),
    MerchantIdsGetInstance: (...args) => callOperation("merchantIds_getInstance", ...(args as AppStoreFullApiOperationArgs<"merchantIds_getInstance">)),
    MerchantIdsUpdateInstance: (...args) => callOperation("merchantIds_updateInstance", ...(args as AppStoreFullApiOperationArgs<"merchantIds_updateInstance">)),
  };
}
