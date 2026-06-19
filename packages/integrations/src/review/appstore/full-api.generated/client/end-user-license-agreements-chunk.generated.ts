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
export const AppStoreFullApiEndUserLicenseAgreementsOperationKeys = [
  "endUserLicenseAgreements_createInstance",
  "endUserLicenseAgreements_deleteInstance",
  "endUserLicenseAgreements_getInstance",
  "endUserLicenseAgreements_territories_getToManyRelated",
  "endUserLicenseAgreements_territories_getToManyRelationship",
  "endUserLicenseAgreements_updateInstance"
] as const;
export type AppStoreFullApiEndUserLicenseAgreementsOperationKey = typeof AppStoreFullApiEndUserLicenseAgreementsOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiEndUserLicenseAgreementsOperationPathParamMap {
  "endUserLicenseAgreements_createInstance": {};
  "endUserLicenseAgreements_deleteInstance": { "id": AppStoreFullApiPathParamValue };
  "endUserLicenseAgreements_getInstance": { "id": AppStoreFullApiPathParamValue };
  "endUserLicenseAgreements_territories_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "endUserLicenseAgreements_territories_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "endUserLicenseAgreements_updateInstance": { "id": AppStoreFullApiPathParamValue };
}

export interface AppStoreFullApiEndUserLicenseAgreementsOperationRequestMap {
  "endUserLicenseAgreements_createInstance": AppStoreFullApiOperationInput<"endUserLicenseAgreements_createInstance">;
  "endUserLicenseAgreements_deleteInstance": AppStoreFullApiOperationInput<"endUserLicenseAgreements_deleteInstance">;
  "endUserLicenseAgreements_getInstance": AppStoreFullApiOperationInput<"endUserLicenseAgreements_getInstance">;
  "endUserLicenseAgreements_territories_getToManyRelated": AppStoreFullApiOperationInput<"endUserLicenseAgreements_territories_getToManyRelated">;
  "endUserLicenseAgreements_territories_getToManyRelationship": AppStoreFullApiOperationInput<"endUserLicenseAgreements_territories_getToManyRelationship">;
  "endUserLicenseAgreements_updateInstance": AppStoreFullApiOperationInput<"endUserLicenseAgreements_updateInstance">;
}

export interface AppStoreFullApiEndUserLicenseAgreementsGeneratedClient {
  EndUserLicenseAgreementsCreateInstance(...args: AppStoreFullApiOperationArgs<"endUserLicenseAgreements_createInstance">): Promise<AppStoreFullApiOperationResponseMap["endUserLicenseAgreements_createInstance"]>;
  EndUserLicenseAgreementsDeleteInstance(...args: AppStoreFullApiOperationArgs<"endUserLicenseAgreements_deleteInstance">): Promise<AppStoreFullApiOperationResponseMap["endUserLicenseAgreements_deleteInstance"]>;
  EndUserLicenseAgreementsGetInstance(...args: AppStoreFullApiOperationArgs<"endUserLicenseAgreements_getInstance">): Promise<AppStoreFullApiOperationResponseMap["endUserLicenseAgreements_getInstance"]>;
  EndUserLicenseAgreementsTerritoriesGetToManyRelated(...args: AppStoreFullApiOperationArgs<"endUserLicenseAgreements_territories_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["endUserLicenseAgreements_territories_getToManyRelated"]>;
  EndUserLicenseAgreementsTerritoriesGetToManyRelationship(...args: AppStoreFullApiOperationArgs<"endUserLicenseAgreements_territories_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["endUserLicenseAgreements_territories_getToManyRelationship"]>;
  EndUserLicenseAgreementsUpdateInstance(...args: AppStoreFullApiOperationArgs<"endUserLicenseAgreements_updateInstance">): Promise<AppStoreFullApiOperationResponseMap["endUserLicenseAgreements_updateInstance"]>;
}

export const AppStoreFullApiEndUserLicenseAgreementsGeneratedFunctionNames = [
  "EndUserLicenseAgreementsCreateInstance",
  "EndUserLicenseAgreementsDeleteInstance",
  "EndUserLicenseAgreementsGetInstance",
  "EndUserLicenseAgreementsTerritoriesGetToManyRelated",
  "EndUserLicenseAgreementsTerritoriesGetToManyRelationship",
  "EndUserLicenseAgreementsUpdateInstance"
] as const satisfies readonly (keyof AppStoreFullApiEndUserLicenseAgreementsGeneratedClient)[];

export function createAppStoreFullApiEndUserLicenseAgreementsGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiEndUserLicenseAgreementsGeneratedClient {
  return {
    EndUserLicenseAgreementsCreateInstance: (...args) => callOperation("endUserLicenseAgreements_createInstance", ...(args as AppStoreFullApiOperationArgs<"endUserLicenseAgreements_createInstance">)),
    EndUserLicenseAgreementsDeleteInstance: (...args) => callOperation("endUserLicenseAgreements_deleteInstance", ...(args as AppStoreFullApiOperationArgs<"endUserLicenseAgreements_deleteInstance">)),
    EndUserLicenseAgreementsGetInstance: (...args) => callOperation("endUserLicenseAgreements_getInstance", ...(args as AppStoreFullApiOperationArgs<"endUserLicenseAgreements_getInstance">)),
    EndUserLicenseAgreementsTerritoriesGetToManyRelated: (...args) => callOperation("endUserLicenseAgreements_territories_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"endUserLicenseAgreements_territories_getToManyRelated">)),
    EndUserLicenseAgreementsTerritoriesGetToManyRelationship: (...args) => callOperation("endUserLicenseAgreements_territories_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"endUserLicenseAgreements_territories_getToManyRelationship">)),
    EndUserLicenseAgreementsUpdateInstance: (...args) => callOperation("endUserLicenseAgreements_updateInstance", ...(args as AppStoreFullApiOperationArgs<"endUserLicenseAgreements_updateInstance">)),
  };
}
