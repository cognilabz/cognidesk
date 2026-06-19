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
export const AppStoreFullApiCertificatesOperationKeys = [
  "certificates_createInstance",
  "certificates_deleteInstance",
  "certificates_getCollection",
  "certificates_getInstance",
  "certificates_passTypeId_getToOneRelated",
  "certificates_passTypeId_getToOneRelationship",
  "certificates_updateInstance"
] as const;
export type AppStoreFullApiCertificatesOperationKey = typeof AppStoreFullApiCertificatesOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiCertificatesOperationPathParamMap {
  "certificates_createInstance": {};
  "certificates_deleteInstance": { "id": AppStoreFullApiPathParamValue };
  "certificates_getCollection": {};
  "certificates_getInstance": { "id": AppStoreFullApiPathParamValue };
  "certificates_passTypeId_getToOneRelated": { "id": AppStoreFullApiPathParamValue };
  "certificates_passTypeId_getToOneRelationship": { "id": AppStoreFullApiPathParamValue };
  "certificates_updateInstance": { "id": AppStoreFullApiPathParamValue };
}

export interface AppStoreFullApiCertificatesOperationRequestMap {
  "certificates_createInstance": AppStoreFullApiOperationInput<"certificates_createInstance">;
  "certificates_deleteInstance": AppStoreFullApiOperationInput<"certificates_deleteInstance">;
  "certificates_getCollection": AppStoreFullApiOperationInput<"certificates_getCollection">;
  "certificates_getInstance": AppStoreFullApiOperationInput<"certificates_getInstance">;
  "certificates_passTypeId_getToOneRelated": AppStoreFullApiOperationInput<"certificates_passTypeId_getToOneRelated">;
  "certificates_passTypeId_getToOneRelationship": AppStoreFullApiOperationInput<"certificates_passTypeId_getToOneRelationship">;
  "certificates_updateInstance": AppStoreFullApiOperationInput<"certificates_updateInstance">;
}

export interface AppStoreFullApiCertificatesGeneratedClient {
  CertificatesCreateInstance(...args: AppStoreFullApiOperationArgs<"certificates_createInstance">): Promise<AppStoreFullApiOperationResponseMap["certificates_createInstance"]>;
  CertificatesDeleteInstance(...args: AppStoreFullApiOperationArgs<"certificates_deleteInstance">): Promise<AppStoreFullApiOperationResponseMap["certificates_deleteInstance"]>;
  CertificatesGetCollection(...args: AppStoreFullApiOperationArgs<"certificates_getCollection">): Promise<AppStoreFullApiOperationResponseMap["certificates_getCollection"]>;
  CertificatesGetInstance(...args: AppStoreFullApiOperationArgs<"certificates_getInstance">): Promise<AppStoreFullApiOperationResponseMap["certificates_getInstance"]>;
  CertificatesPassTypeIdGetToOneRelated(...args: AppStoreFullApiOperationArgs<"certificates_passTypeId_getToOneRelated">): Promise<AppStoreFullApiOperationResponseMap["certificates_passTypeId_getToOneRelated"]>;
  CertificatesPassTypeIdGetToOneRelationship(...args: AppStoreFullApiOperationArgs<"certificates_passTypeId_getToOneRelationship">): Promise<AppStoreFullApiOperationResponseMap["certificates_passTypeId_getToOneRelationship"]>;
  CertificatesUpdateInstance(...args: AppStoreFullApiOperationArgs<"certificates_updateInstance">): Promise<AppStoreFullApiOperationResponseMap["certificates_updateInstance"]>;
}

export const AppStoreFullApiCertificatesGeneratedFunctionNames = [
  "CertificatesCreateInstance",
  "CertificatesDeleteInstance",
  "CertificatesGetCollection",
  "CertificatesGetInstance",
  "CertificatesPassTypeIdGetToOneRelated",
  "CertificatesPassTypeIdGetToOneRelationship",
  "CertificatesUpdateInstance"
] as const satisfies readonly (keyof AppStoreFullApiCertificatesGeneratedClient)[];

export function createAppStoreFullApiCertificatesGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiCertificatesGeneratedClient {
  return {
    CertificatesCreateInstance: (...args) => callOperation("certificates_createInstance", ...(args as AppStoreFullApiOperationArgs<"certificates_createInstance">)),
    CertificatesDeleteInstance: (...args) => callOperation("certificates_deleteInstance", ...(args as AppStoreFullApiOperationArgs<"certificates_deleteInstance">)),
    CertificatesGetCollection: (...args) => callOperation("certificates_getCollection", ...(args as AppStoreFullApiOperationArgs<"certificates_getCollection">)),
    CertificatesGetInstance: (...args) => callOperation("certificates_getInstance", ...(args as AppStoreFullApiOperationArgs<"certificates_getInstance">)),
    CertificatesPassTypeIdGetToOneRelated: (...args) => callOperation("certificates_passTypeId_getToOneRelated", ...(args as AppStoreFullApiOperationArgs<"certificates_passTypeId_getToOneRelated">)),
    CertificatesPassTypeIdGetToOneRelationship: (...args) => callOperation("certificates_passTypeId_getToOneRelationship", ...(args as AppStoreFullApiOperationArgs<"certificates_passTypeId_getToOneRelationship">)),
    CertificatesUpdateInstance: (...args) => callOperation("certificates_updateInstance", ...(args as AppStoreFullApiOperationArgs<"certificates_updateInstance">)),
  };
}
