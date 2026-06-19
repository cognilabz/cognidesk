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
export const AppStoreFullApiAppEncryptionDeclarationDocumentsOperationKeys = [
  "appEncryptionDeclarationDocuments_createInstance",
  "appEncryptionDeclarationDocuments_getInstance",
  "appEncryptionDeclarationDocuments_updateInstance"
] as const;
export type AppStoreFullApiAppEncryptionDeclarationDocumentsOperationKey = typeof AppStoreFullApiAppEncryptionDeclarationDocumentsOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiAppEncryptionDeclarationDocumentsOperationPathParamMap {
  "appEncryptionDeclarationDocuments_createInstance": {};
  "appEncryptionDeclarationDocuments_getInstance": { "id": AppStoreFullApiPathParamValue };
  "appEncryptionDeclarationDocuments_updateInstance": { "id": AppStoreFullApiPathParamValue };
}

export interface AppStoreFullApiAppEncryptionDeclarationDocumentsOperationRequestMap {
  "appEncryptionDeclarationDocuments_createInstance": AppStoreFullApiOperationInput<"appEncryptionDeclarationDocuments_createInstance">;
  "appEncryptionDeclarationDocuments_getInstance": AppStoreFullApiOperationInput<"appEncryptionDeclarationDocuments_getInstance">;
  "appEncryptionDeclarationDocuments_updateInstance": AppStoreFullApiOperationInput<"appEncryptionDeclarationDocuments_updateInstance">;
}

export interface AppStoreFullApiAppEncryptionDeclarationDocumentsGeneratedClient {
  AppEncryptionDeclarationDocumentsCreateInstance(...args: AppStoreFullApiOperationArgs<"appEncryptionDeclarationDocuments_createInstance">): Promise<AppStoreFullApiOperationResponseMap["appEncryptionDeclarationDocuments_createInstance"]>;
  AppEncryptionDeclarationDocumentsGetInstance(...args: AppStoreFullApiOperationArgs<"appEncryptionDeclarationDocuments_getInstance">): Promise<AppStoreFullApiOperationResponseMap["appEncryptionDeclarationDocuments_getInstance"]>;
  AppEncryptionDeclarationDocumentsUpdateInstance(...args: AppStoreFullApiOperationArgs<"appEncryptionDeclarationDocuments_updateInstance">): Promise<AppStoreFullApiOperationResponseMap["appEncryptionDeclarationDocuments_updateInstance"]>;
}

export const AppStoreFullApiAppEncryptionDeclarationDocumentsGeneratedFunctionNames = [
  "AppEncryptionDeclarationDocumentsCreateInstance",
  "AppEncryptionDeclarationDocumentsGetInstance",
  "AppEncryptionDeclarationDocumentsUpdateInstance"
] as const satisfies readonly (keyof AppStoreFullApiAppEncryptionDeclarationDocumentsGeneratedClient)[];

export function createAppStoreFullApiAppEncryptionDeclarationDocumentsGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiAppEncryptionDeclarationDocumentsGeneratedClient {
  return {
    AppEncryptionDeclarationDocumentsCreateInstance: (...args) => callOperation("appEncryptionDeclarationDocuments_createInstance", ...(args as AppStoreFullApiOperationArgs<"appEncryptionDeclarationDocuments_createInstance">)),
    AppEncryptionDeclarationDocumentsGetInstance: (...args) => callOperation("appEncryptionDeclarationDocuments_getInstance", ...(args as AppStoreFullApiOperationArgs<"appEncryptionDeclarationDocuments_getInstance">)),
    AppEncryptionDeclarationDocumentsUpdateInstance: (...args) => callOperation("appEncryptionDeclarationDocuments_updateInstance", ...(args as AppStoreFullApiOperationArgs<"appEncryptionDeclarationDocuments_updateInstance">)),
  };
}
