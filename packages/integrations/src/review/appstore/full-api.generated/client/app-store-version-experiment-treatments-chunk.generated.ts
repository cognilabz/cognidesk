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
export const AppStoreFullApiAppStoreVersionExperimentTreatmentsOperationKeys = [
  "appStoreVersionExperimentTreatments_appStoreVersionExperimentTreatmentLocalizations_getToManyRelated",
  "appStoreVersionExperimentTreatments_appStoreVersionExperimentTreatmentLocalizations_getToManyRelationship",
  "appStoreVersionExperimentTreatments_createInstance",
  "appStoreVersionExperimentTreatments_deleteInstance",
  "appStoreVersionExperimentTreatments_getInstance",
  "appStoreVersionExperimentTreatments_updateInstance"
] as const;
export type AppStoreFullApiAppStoreVersionExperimentTreatmentsOperationKey = typeof AppStoreFullApiAppStoreVersionExperimentTreatmentsOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiAppStoreVersionExperimentTreatmentsOperationPathParamMap {
  "appStoreVersionExperimentTreatments_appStoreVersionExperimentTreatmentLocalizations_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "appStoreVersionExperimentTreatments_appStoreVersionExperimentTreatmentLocalizations_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "appStoreVersionExperimentTreatments_createInstance": {};
  "appStoreVersionExperimentTreatments_deleteInstance": { "id": AppStoreFullApiPathParamValue };
  "appStoreVersionExperimentTreatments_getInstance": { "id": AppStoreFullApiPathParamValue };
  "appStoreVersionExperimentTreatments_updateInstance": { "id": AppStoreFullApiPathParamValue };
}

export interface AppStoreFullApiAppStoreVersionExperimentTreatmentsOperationRequestMap {
  "appStoreVersionExperimentTreatments_appStoreVersionExperimentTreatmentLocalizations_getToManyRelated": AppStoreFullApiOperationInput<"appStoreVersionExperimentTreatments_appStoreVersionExperimentTreatmentLocalizations_getToManyRelated">;
  "appStoreVersionExperimentTreatments_appStoreVersionExperimentTreatmentLocalizations_getToManyRelationship": AppStoreFullApiOperationInput<"appStoreVersionExperimentTreatments_appStoreVersionExperimentTreatmentLocalizations_getToManyRelationship">;
  "appStoreVersionExperimentTreatments_createInstance": AppStoreFullApiOperationInput<"appStoreVersionExperimentTreatments_createInstance">;
  "appStoreVersionExperimentTreatments_deleteInstance": AppStoreFullApiOperationInput<"appStoreVersionExperimentTreatments_deleteInstance">;
  "appStoreVersionExperimentTreatments_getInstance": AppStoreFullApiOperationInput<"appStoreVersionExperimentTreatments_getInstance">;
  "appStoreVersionExperimentTreatments_updateInstance": AppStoreFullApiOperationInput<"appStoreVersionExperimentTreatments_updateInstance">;
}

export interface AppStoreFullApiAppStoreVersionExperimentTreatmentsGeneratedClient {
  AppStoreVersionExperimentTreatmentsAppStoreVersionExperimentTreatmentLocalizationsGetToManyRelated(...args: AppStoreFullApiOperationArgs<"appStoreVersionExperimentTreatments_appStoreVersionExperimentTreatmentLocalizations_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["appStoreVersionExperimentTreatments_appStoreVersionExperimentTreatmentLocalizations_getToManyRelated"]>;
  AppStoreVersionExperimentTreatmentsAppStoreVersionExperimentTreatmentLocalizationsGetToManyRelationship(...args: AppStoreFullApiOperationArgs<"appStoreVersionExperimentTreatments_appStoreVersionExperimentTreatmentLocalizations_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["appStoreVersionExperimentTreatments_appStoreVersionExperimentTreatmentLocalizations_getToManyRelationship"]>;
  AppStoreVersionExperimentTreatmentsCreateInstance(...args: AppStoreFullApiOperationArgs<"appStoreVersionExperimentTreatments_createInstance">): Promise<AppStoreFullApiOperationResponseMap["appStoreVersionExperimentTreatments_createInstance"]>;
  AppStoreVersionExperimentTreatmentsDeleteInstance(...args: AppStoreFullApiOperationArgs<"appStoreVersionExperimentTreatments_deleteInstance">): Promise<AppStoreFullApiOperationResponseMap["appStoreVersionExperimentTreatments_deleteInstance"]>;
  AppStoreVersionExperimentTreatmentsGetInstance(...args: AppStoreFullApiOperationArgs<"appStoreVersionExperimentTreatments_getInstance">): Promise<AppStoreFullApiOperationResponseMap["appStoreVersionExperimentTreatments_getInstance"]>;
  AppStoreVersionExperimentTreatmentsUpdateInstance(...args: AppStoreFullApiOperationArgs<"appStoreVersionExperimentTreatments_updateInstance">): Promise<AppStoreFullApiOperationResponseMap["appStoreVersionExperimentTreatments_updateInstance"]>;
}

export const AppStoreFullApiAppStoreVersionExperimentTreatmentsGeneratedFunctionNames = [
  "AppStoreVersionExperimentTreatmentsAppStoreVersionExperimentTreatmentLocalizationsGetToManyRelated",
  "AppStoreVersionExperimentTreatmentsAppStoreVersionExperimentTreatmentLocalizationsGetToManyRelationship",
  "AppStoreVersionExperimentTreatmentsCreateInstance",
  "AppStoreVersionExperimentTreatmentsDeleteInstance",
  "AppStoreVersionExperimentTreatmentsGetInstance",
  "AppStoreVersionExperimentTreatmentsUpdateInstance"
] as const satisfies readonly (keyof AppStoreFullApiAppStoreVersionExperimentTreatmentsGeneratedClient)[];

export function createAppStoreFullApiAppStoreVersionExperimentTreatmentsGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiAppStoreVersionExperimentTreatmentsGeneratedClient {
  return {
    AppStoreVersionExperimentTreatmentsAppStoreVersionExperimentTreatmentLocalizationsGetToManyRelated: (...args) => callOperation("appStoreVersionExperimentTreatments_appStoreVersionExperimentTreatmentLocalizations_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"appStoreVersionExperimentTreatments_appStoreVersionExperimentTreatmentLocalizations_getToManyRelated">)),
    AppStoreVersionExperimentTreatmentsAppStoreVersionExperimentTreatmentLocalizationsGetToManyRelationship: (...args) => callOperation("appStoreVersionExperimentTreatments_appStoreVersionExperimentTreatmentLocalizations_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"appStoreVersionExperimentTreatments_appStoreVersionExperimentTreatmentLocalizations_getToManyRelationship">)),
    AppStoreVersionExperimentTreatmentsCreateInstance: (...args) => callOperation("appStoreVersionExperimentTreatments_createInstance", ...(args as AppStoreFullApiOperationArgs<"appStoreVersionExperimentTreatments_createInstance">)),
    AppStoreVersionExperimentTreatmentsDeleteInstance: (...args) => callOperation("appStoreVersionExperimentTreatments_deleteInstance", ...(args as AppStoreFullApiOperationArgs<"appStoreVersionExperimentTreatments_deleteInstance">)),
    AppStoreVersionExperimentTreatmentsGetInstance: (...args) => callOperation("appStoreVersionExperimentTreatments_getInstance", ...(args as AppStoreFullApiOperationArgs<"appStoreVersionExperimentTreatments_getInstance">)),
    AppStoreVersionExperimentTreatmentsUpdateInstance: (...args) => callOperation("appStoreVersionExperimentTreatments_updateInstance", ...(args as AppStoreFullApiOperationArgs<"appStoreVersionExperimentTreatments_updateInstance">)),
  };
}
