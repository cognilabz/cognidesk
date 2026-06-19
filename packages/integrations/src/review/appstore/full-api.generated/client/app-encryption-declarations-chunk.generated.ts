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
export const AppStoreFullApiAppEncryptionDeclarationsOperationKeys = [
  "appEncryptionDeclarations_appEncryptionDeclarationDocument_getToOneRelated",
  "appEncryptionDeclarations_appEncryptionDeclarationDocument_getToOneRelationship",
  "appEncryptionDeclarations_app_getToOneRelated",
  "appEncryptionDeclarations_app_getToOneRelationship",
  "appEncryptionDeclarations_builds_createToManyRelationship",
  "appEncryptionDeclarations_createInstance",
  "appEncryptionDeclarations_getCollection",
  "appEncryptionDeclarations_getInstance"
] as const;
export type AppStoreFullApiAppEncryptionDeclarationsOperationKey = typeof AppStoreFullApiAppEncryptionDeclarationsOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiAppEncryptionDeclarationsOperationPathParamMap {
  "appEncryptionDeclarations_appEncryptionDeclarationDocument_getToOneRelated": { "id": AppStoreFullApiPathParamValue };
  "appEncryptionDeclarations_appEncryptionDeclarationDocument_getToOneRelationship": { "id": AppStoreFullApiPathParamValue };
  "appEncryptionDeclarations_app_getToOneRelated": { "id": AppStoreFullApiPathParamValue };
  "appEncryptionDeclarations_app_getToOneRelationship": { "id": AppStoreFullApiPathParamValue };
  "appEncryptionDeclarations_builds_createToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "appEncryptionDeclarations_createInstance": {};
  "appEncryptionDeclarations_getCollection": {};
  "appEncryptionDeclarations_getInstance": { "id": AppStoreFullApiPathParamValue };
}

export interface AppStoreFullApiAppEncryptionDeclarationsOperationRequestMap {
  "appEncryptionDeclarations_appEncryptionDeclarationDocument_getToOneRelated": AppStoreFullApiOperationInput<"appEncryptionDeclarations_appEncryptionDeclarationDocument_getToOneRelated">;
  "appEncryptionDeclarations_appEncryptionDeclarationDocument_getToOneRelationship": AppStoreFullApiOperationInput<"appEncryptionDeclarations_appEncryptionDeclarationDocument_getToOneRelationship">;
  "appEncryptionDeclarations_app_getToOneRelated": AppStoreFullApiOperationInput<"appEncryptionDeclarations_app_getToOneRelated">;
  "appEncryptionDeclarations_app_getToOneRelationship": AppStoreFullApiOperationInput<"appEncryptionDeclarations_app_getToOneRelationship">;
  "appEncryptionDeclarations_builds_createToManyRelationship": AppStoreFullApiOperationInput<"appEncryptionDeclarations_builds_createToManyRelationship">;
  "appEncryptionDeclarations_createInstance": AppStoreFullApiOperationInput<"appEncryptionDeclarations_createInstance">;
  "appEncryptionDeclarations_getCollection": AppStoreFullApiOperationInput<"appEncryptionDeclarations_getCollection">;
  "appEncryptionDeclarations_getInstance": AppStoreFullApiOperationInput<"appEncryptionDeclarations_getInstance">;
}

export interface AppStoreFullApiAppEncryptionDeclarationsGeneratedClient {
  AppEncryptionDeclarationsAppEncryptionDeclarationDocumentGetToOneRelated(...args: AppStoreFullApiOperationArgs<"appEncryptionDeclarations_appEncryptionDeclarationDocument_getToOneRelated">): Promise<AppStoreFullApiOperationResponseMap["appEncryptionDeclarations_appEncryptionDeclarationDocument_getToOneRelated"]>;
  AppEncryptionDeclarationsAppEncryptionDeclarationDocumentGetToOneRelationship(...args: AppStoreFullApiOperationArgs<"appEncryptionDeclarations_appEncryptionDeclarationDocument_getToOneRelationship">): Promise<AppStoreFullApiOperationResponseMap["appEncryptionDeclarations_appEncryptionDeclarationDocument_getToOneRelationship"]>;
  AppEncryptionDeclarationsAppGetToOneRelated(...args: AppStoreFullApiOperationArgs<"appEncryptionDeclarations_app_getToOneRelated">): Promise<AppStoreFullApiOperationResponseMap["appEncryptionDeclarations_app_getToOneRelated"]>;
  AppEncryptionDeclarationsAppGetToOneRelationship(...args: AppStoreFullApiOperationArgs<"appEncryptionDeclarations_app_getToOneRelationship">): Promise<AppStoreFullApiOperationResponseMap["appEncryptionDeclarations_app_getToOneRelationship"]>;
  AppEncryptionDeclarationsBuildsCreateToManyRelationship(...args: AppStoreFullApiOperationArgs<"appEncryptionDeclarations_builds_createToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["appEncryptionDeclarations_builds_createToManyRelationship"]>;
  AppEncryptionDeclarationsCreateInstance(...args: AppStoreFullApiOperationArgs<"appEncryptionDeclarations_createInstance">): Promise<AppStoreFullApiOperationResponseMap["appEncryptionDeclarations_createInstance"]>;
  AppEncryptionDeclarationsGetCollection(...args: AppStoreFullApiOperationArgs<"appEncryptionDeclarations_getCollection">): Promise<AppStoreFullApiOperationResponseMap["appEncryptionDeclarations_getCollection"]>;
  AppEncryptionDeclarationsGetInstance(...args: AppStoreFullApiOperationArgs<"appEncryptionDeclarations_getInstance">): Promise<AppStoreFullApiOperationResponseMap["appEncryptionDeclarations_getInstance"]>;
}

export const AppStoreFullApiAppEncryptionDeclarationsGeneratedFunctionNames = [
  "AppEncryptionDeclarationsAppEncryptionDeclarationDocumentGetToOneRelated",
  "AppEncryptionDeclarationsAppEncryptionDeclarationDocumentGetToOneRelationship",
  "AppEncryptionDeclarationsAppGetToOneRelated",
  "AppEncryptionDeclarationsAppGetToOneRelationship",
  "AppEncryptionDeclarationsBuildsCreateToManyRelationship",
  "AppEncryptionDeclarationsCreateInstance",
  "AppEncryptionDeclarationsGetCollection",
  "AppEncryptionDeclarationsGetInstance"
] as const satisfies readonly (keyof AppStoreFullApiAppEncryptionDeclarationsGeneratedClient)[];

export function createAppStoreFullApiAppEncryptionDeclarationsGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiAppEncryptionDeclarationsGeneratedClient {
  return {
    AppEncryptionDeclarationsAppEncryptionDeclarationDocumentGetToOneRelated: (...args) => callOperation("appEncryptionDeclarations_appEncryptionDeclarationDocument_getToOneRelated", ...(args as AppStoreFullApiOperationArgs<"appEncryptionDeclarations_appEncryptionDeclarationDocument_getToOneRelated">)),
    AppEncryptionDeclarationsAppEncryptionDeclarationDocumentGetToOneRelationship: (...args) => callOperation("appEncryptionDeclarations_appEncryptionDeclarationDocument_getToOneRelationship", ...(args as AppStoreFullApiOperationArgs<"appEncryptionDeclarations_appEncryptionDeclarationDocument_getToOneRelationship">)),
    AppEncryptionDeclarationsAppGetToOneRelated: (...args) => callOperation("appEncryptionDeclarations_app_getToOneRelated", ...(args as AppStoreFullApiOperationArgs<"appEncryptionDeclarations_app_getToOneRelated">)),
    AppEncryptionDeclarationsAppGetToOneRelationship: (...args) => callOperation("appEncryptionDeclarations_app_getToOneRelationship", ...(args as AppStoreFullApiOperationArgs<"appEncryptionDeclarations_app_getToOneRelationship">)),
    AppEncryptionDeclarationsBuildsCreateToManyRelationship: (...args) => callOperation("appEncryptionDeclarations_builds_createToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"appEncryptionDeclarations_builds_createToManyRelationship">)),
    AppEncryptionDeclarationsCreateInstance: (...args) => callOperation("appEncryptionDeclarations_createInstance", ...(args as AppStoreFullApiOperationArgs<"appEncryptionDeclarations_createInstance">)),
    AppEncryptionDeclarationsGetCollection: (...args) => callOperation("appEncryptionDeclarations_getCollection", ...(args as AppStoreFullApiOperationArgs<"appEncryptionDeclarations_getCollection">)),
    AppEncryptionDeclarationsGetInstance: (...args) => callOperation("appEncryptionDeclarations_getInstance", ...(args as AppStoreFullApiOperationArgs<"appEncryptionDeclarations_getInstance">)),
  };
}
