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
export const AppStoreFullApiBetaLicenseAgreementsOperationKeys = [
  "betaLicenseAgreements_app_getToOneRelated",
  "betaLicenseAgreements_app_getToOneRelationship",
  "betaLicenseAgreements_getCollection",
  "betaLicenseAgreements_getInstance",
  "betaLicenseAgreements_updateInstance"
] as const;
export type AppStoreFullApiBetaLicenseAgreementsOperationKey = typeof AppStoreFullApiBetaLicenseAgreementsOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiBetaLicenseAgreementsOperationPathParamMap {
  "betaLicenseAgreements_app_getToOneRelated": { "id": AppStoreFullApiPathParamValue };
  "betaLicenseAgreements_app_getToOneRelationship": { "id": AppStoreFullApiPathParamValue };
  "betaLicenseAgreements_getCollection": {};
  "betaLicenseAgreements_getInstance": { "id": AppStoreFullApiPathParamValue };
  "betaLicenseAgreements_updateInstance": { "id": AppStoreFullApiPathParamValue };
}

export interface AppStoreFullApiBetaLicenseAgreementsOperationRequestMap {
  "betaLicenseAgreements_app_getToOneRelated": AppStoreFullApiOperationInput<"betaLicenseAgreements_app_getToOneRelated">;
  "betaLicenseAgreements_app_getToOneRelationship": AppStoreFullApiOperationInput<"betaLicenseAgreements_app_getToOneRelationship">;
  "betaLicenseAgreements_getCollection": AppStoreFullApiOperationInput<"betaLicenseAgreements_getCollection">;
  "betaLicenseAgreements_getInstance": AppStoreFullApiOperationInput<"betaLicenseAgreements_getInstance">;
  "betaLicenseAgreements_updateInstance": AppStoreFullApiOperationInput<"betaLicenseAgreements_updateInstance">;
}

export interface AppStoreFullApiBetaLicenseAgreementsGeneratedClient {
  BetaLicenseAgreementsAppGetToOneRelated(...args: AppStoreFullApiOperationArgs<"betaLicenseAgreements_app_getToOneRelated">): Promise<AppStoreFullApiOperationResponseMap["betaLicenseAgreements_app_getToOneRelated"]>;
  BetaLicenseAgreementsAppGetToOneRelationship(...args: AppStoreFullApiOperationArgs<"betaLicenseAgreements_app_getToOneRelationship">): Promise<AppStoreFullApiOperationResponseMap["betaLicenseAgreements_app_getToOneRelationship"]>;
  BetaLicenseAgreementsGetCollection(...args: AppStoreFullApiOperationArgs<"betaLicenseAgreements_getCollection">): Promise<AppStoreFullApiOperationResponseMap["betaLicenseAgreements_getCollection"]>;
  BetaLicenseAgreementsGetInstance(...args: AppStoreFullApiOperationArgs<"betaLicenseAgreements_getInstance">): Promise<AppStoreFullApiOperationResponseMap["betaLicenseAgreements_getInstance"]>;
  BetaLicenseAgreementsUpdateInstance(...args: AppStoreFullApiOperationArgs<"betaLicenseAgreements_updateInstance">): Promise<AppStoreFullApiOperationResponseMap["betaLicenseAgreements_updateInstance"]>;
}

export const AppStoreFullApiBetaLicenseAgreementsGeneratedFunctionNames = [
  "BetaLicenseAgreementsAppGetToOneRelated",
  "BetaLicenseAgreementsAppGetToOneRelationship",
  "BetaLicenseAgreementsGetCollection",
  "BetaLicenseAgreementsGetInstance",
  "BetaLicenseAgreementsUpdateInstance"
] as const satisfies readonly (keyof AppStoreFullApiBetaLicenseAgreementsGeneratedClient)[];

export function createAppStoreFullApiBetaLicenseAgreementsGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiBetaLicenseAgreementsGeneratedClient {
  return {
    BetaLicenseAgreementsAppGetToOneRelated: (...args) => callOperation("betaLicenseAgreements_app_getToOneRelated", ...(args as AppStoreFullApiOperationArgs<"betaLicenseAgreements_app_getToOneRelated">)),
    BetaLicenseAgreementsAppGetToOneRelationship: (...args) => callOperation("betaLicenseAgreements_app_getToOneRelationship", ...(args as AppStoreFullApiOperationArgs<"betaLicenseAgreements_app_getToOneRelationship">)),
    BetaLicenseAgreementsGetCollection: (...args) => callOperation("betaLicenseAgreements_getCollection", ...(args as AppStoreFullApiOperationArgs<"betaLicenseAgreements_getCollection">)),
    BetaLicenseAgreementsGetInstance: (...args) => callOperation("betaLicenseAgreements_getInstance", ...(args as AppStoreFullApiOperationArgs<"betaLicenseAgreements_getInstance">)),
    BetaLicenseAgreementsUpdateInstance: (...args) => callOperation("betaLicenseAgreements_updateInstance", ...(args as AppStoreFullApiOperationArgs<"betaLicenseAgreements_updateInstance">)),
  };
}
