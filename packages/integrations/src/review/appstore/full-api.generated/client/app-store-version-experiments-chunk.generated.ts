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
export const AppStoreFullApiAppStoreVersionExperimentsOperationKeys = [
  "appStoreVersionExperiments_appStoreVersionExperimentTreatments_getToManyRelated",
  "appStoreVersionExperiments_appStoreVersionExperimentTreatments_getToManyRelationship",
  "appStoreVersionExperiments_createInstance",
  "appStoreVersionExperiments_deleteInstance",
  "appStoreVersionExperiments_getInstance",
  "appStoreVersionExperiments_updateInstance",
  "appStoreVersionExperimentsV2_appStoreVersionExperimentTreatments_getToManyRelated",
  "appStoreVersionExperimentsV2_appStoreVersionExperimentTreatments_getToManyRelationship",
  "appStoreVersionExperimentsV2_createInstance",
  "appStoreVersionExperimentsV2_deleteInstance",
  "appStoreVersionExperimentsV2_getInstance",
  "appStoreVersionExperimentsV2_updateInstance"
] as const;
export type AppStoreFullApiAppStoreVersionExperimentsOperationKey = typeof AppStoreFullApiAppStoreVersionExperimentsOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiAppStoreVersionExperimentsOperationPathParamMap {
  "appStoreVersionExperiments_appStoreVersionExperimentTreatments_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "appStoreVersionExperiments_appStoreVersionExperimentTreatments_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "appStoreVersionExperiments_createInstance": {};
  "appStoreVersionExperiments_deleteInstance": { "id": AppStoreFullApiPathParamValue };
  "appStoreVersionExperiments_getInstance": { "id": AppStoreFullApiPathParamValue };
  "appStoreVersionExperiments_updateInstance": { "id": AppStoreFullApiPathParamValue };
  "appStoreVersionExperimentsV2_appStoreVersionExperimentTreatments_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "appStoreVersionExperimentsV2_appStoreVersionExperimentTreatments_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "appStoreVersionExperimentsV2_createInstance": {};
  "appStoreVersionExperimentsV2_deleteInstance": { "id": AppStoreFullApiPathParamValue };
  "appStoreVersionExperimentsV2_getInstance": { "id": AppStoreFullApiPathParamValue };
  "appStoreVersionExperimentsV2_updateInstance": { "id": AppStoreFullApiPathParamValue };
}

export interface AppStoreFullApiAppStoreVersionExperimentsOperationRequestMap {
  "appStoreVersionExperiments_appStoreVersionExperimentTreatments_getToManyRelated": AppStoreFullApiOperationInput<"appStoreVersionExperiments_appStoreVersionExperimentTreatments_getToManyRelated">;
  "appStoreVersionExperiments_appStoreVersionExperimentTreatments_getToManyRelationship": AppStoreFullApiOperationInput<"appStoreVersionExperiments_appStoreVersionExperimentTreatments_getToManyRelationship">;
  "appStoreVersionExperiments_createInstance": AppStoreFullApiOperationInput<"appStoreVersionExperiments_createInstance">;
  "appStoreVersionExperiments_deleteInstance": AppStoreFullApiOperationInput<"appStoreVersionExperiments_deleteInstance">;
  "appStoreVersionExperiments_getInstance": AppStoreFullApiOperationInput<"appStoreVersionExperiments_getInstance">;
  "appStoreVersionExperiments_updateInstance": AppStoreFullApiOperationInput<"appStoreVersionExperiments_updateInstance">;
  "appStoreVersionExperimentsV2_appStoreVersionExperimentTreatments_getToManyRelated": AppStoreFullApiOperationInput<"appStoreVersionExperimentsV2_appStoreVersionExperimentTreatments_getToManyRelated">;
  "appStoreVersionExperimentsV2_appStoreVersionExperimentTreatments_getToManyRelationship": AppStoreFullApiOperationInput<"appStoreVersionExperimentsV2_appStoreVersionExperimentTreatments_getToManyRelationship">;
  "appStoreVersionExperimentsV2_createInstance": AppStoreFullApiOperationInput<"appStoreVersionExperimentsV2_createInstance">;
  "appStoreVersionExperimentsV2_deleteInstance": AppStoreFullApiOperationInput<"appStoreVersionExperimentsV2_deleteInstance">;
  "appStoreVersionExperimentsV2_getInstance": AppStoreFullApiOperationInput<"appStoreVersionExperimentsV2_getInstance">;
  "appStoreVersionExperimentsV2_updateInstance": AppStoreFullApiOperationInput<"appStoreVersionExperimentsV2_updateInstance">;
}

export interface AppStoreFullApiAppStoreVersionExperimentsGeneratedClient {
  AppStoreVersionExperimentsAppStoreVersionExperimentTreatmentsGetToManyRelated(...args: AppStoreFullApiOperationArgs<"appStoreVersionExperiments_appStoreVersionExperimentTreatments_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["appStoreVersionExperiments_appStoreVersionExperimentTreatments_getToManyRelated"]>;
  AppStoreVersionExperimentsAppStoreVersionExperimentTreatmentsGetToManyRelationship(...args: AppStoreFullApiOperationArgs<"appStoreVersionExperiments_appStoreVersionExperimentTreatments_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["appStoreVersionExperiments_appStoreVersionExperimentTreatments_getToManyRelationship"]>;
  AppStoreVersionExperimentsCreateInstance(...args: AppStoreFullApiOperationArgs<"appStoreVersionExperiments_createInstance">): Promise<AppStoreFullApiOperationResponseMap["appStoreVersionExperiments_createInstance"]>;
  AppStoreVersionExperimentsDeleteInstance(...args: AppStoreFullApiOperationArgs<"appStoreVersionExperiments_deleteInstance">): Promise<AppStoreFullApiOperationResponseMap["appStoreVersionExperiments_deleteInstance"]>;
  AppStoreVersionExperimentsGetInstance(...args: AppStoreFullApiOperationArgs<"appStoreVersionExperiments_getInstance">): Promise<AppStoreFullApiOperationResponseMap["appStoreVersionExperiments_getInstance"]>;
  AppStoreVersionExperimentsUpdateInstance(...args: AppStoreFullApiOperationArgs<"appStoreVersionExperiments_updateInstance">): Promise<AppStoreFullApiOperationResponseMap["appStoreVersionExperiments_updateInstance"]>;
  AppStoreVersionExperimentsV2AppStoreVersionExperimentTreatmentsGetToManyRelated(...args: AppStoreFullApiOperationArgs<"appStoreVersionExperimentsV2_appStoreVersionExperimentTreatments_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["appStoreVersionExperimentsV2_appStoreVersionExperimentTreatments_getToManyRelated"]>;
  AppStoreVersionExperimentsV2AppStoreVersionExperimentTreatmentsGetToManyRelationship(...args: AppStoreFullApiOperationArgs<"appStoreVersionExperimentsV2_appStoreVersionExperimentTreatments_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["appStoreVersionExperimentsV2_appStoreVersionExperimentTreatments_getToManyRelationship"]>;
  AppStoreVersionExperimentsV2CreateInstance(...args: AppStoreFullApiOperationArgs<"appStoreVersionExperimentsV2_createInstance">): Promise<AppStoreFullApiOperationResponseMap["appStoreVersionExperimentsV2_createInstance"]>;
  AppStoreVersionExperimentsV2DeleteInstance(...args: AppStoreFullApiOperationArgs<"appStoreVersionExperimentsV2_deleteInstance">): Promise<AppStoreFullApiOperationResponseMap["appStoreVersionExperimentsV2_deleteInstance"]>;
  AppStoreVersionExperimentsV2GetInstance(...args: AppStoreFullApiOperationArgs<"appStoreVersionExperimentsV2_getInstance">): Promise<AppStoreFullApiOperationResponseMap["appStoreVersionExperimentsV2_getInstance"]>;
  AppStoreVersionExperimentsV2UpdateInstance(...args: AppStoreFullApiOperationArgs<"appStoreVersionExperimentsV2_updateInstance">): Promise<AppStoreFullApiOperationResponseMap["appStoreVersionExperimentsV2_updateInstance"]>;
}

export const AppStoreFullApiAppStoreVersionExperimentsGeneratedFunctionNames = [
  "AppStoreVersionExperimentsAppStoreVersionExperimentTreatmentsGetToManyRelated",
  "AppStoreVersionExperimentsAppStoreVersionExperimentTreatmentsGetToManyRelationship",
  "AppStoreVersionExperimentsCreateInstance",
  "AppStoreVersionExperimentsDeleteInstance",
  "AppStoreVersionExperimentsGetInstance",
  "AppStoreVersionExperimentsUpdateInstance",
  "AppStoreVersionExperimentsV2AppStoreVersionExperimentTreatmentsGetToManyRelated",
  "AppStoreVersionExperimentsV2AppStoreVersionExperimentTreatmentsGetToManyRelationship",
  "AppStoreVersionExperimentsV2CreateInstance",
  "AppStoreVersionExperimentsV2DeleteInstance",
  "AppStoreVersionExperimentsV2GetInstance",
  "AppStoreVersionExperimentsV2UpdateInstance"
] as const satisfies readonly (keyof AppStoreFullApiAppStoreVersionExperimentsGeneratedClient)[];

export function createAppStoreFullApiAppStoreVersionExperimentsGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiAppStoreVersionExperimentsGeneratedClient {
  return {
    AppStoreVersionExperimentsAppStoreVersionExperimentTreatmentsGetToManyRelated: (...args) => callOperation("appStoreVersionExperiments_appStoreVersionExperimentTreatments_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"appStoreVersionExperiments_appStoreVersionExperimentTreatments_getToManyRelated">)),
    AppStoreVersionExperimentsAppStoreVersionExperimentTreatmentsGetToManyRelationship: (...args) => callOperation("appStoreVersionExperiments_appStoreVersionExperimentTreatments_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"appStoreVersionExperiments_appStoreVersionExperimentTreatments_getToManyRelationship">)),
    AppStoreVersionExperimentsCreateInstance: (...args) => callOperation("appStoreVersionExperiments_createInstance", ...(args as AppStoreFullApiOperationArgs<"appStoreVersionExperiments_createInstance">)),
    AppStoreVersionExperimentsDeleteInstance: (...args) => callOperation("appStoreVersionExperiments_deleteInstance", ...(args as AppStoreFullApiOperationArgs<"appStoreVersionExperiments_deleteInstance">)),
    AppStoreVersionExperimentsGetInstance: (...args) => callOperation("appStoreVersionExperiments_getInstance", ...(args as AppStoreFullApiOperationArgs<"appStoreVersionExperiments_getInstance">)),
    AppStoreVersionExperimentsUpdateInstance: (...args) => callOperation("appStoreVersionExperiments_updateInstance", ...(args as AppStoreFullApiOperationArgs<"appStoreVersionExperiments_updateInstance">)),
    AppStoreVersionExperimentsV2AppStoreVersionExperimentTreatmentsGetToManyRelated: (...args) => callOperation("appStoreVersionExperimentsV2_appStoreVersionExperimentTreatments_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"appStoreVersionExperimentsV2_appStoreVersionExperimentTreatments_getToManyRelated">)),
    AppStoreVersionExperimentsV2AppStoreVersionExperimentTreatmentsGetToManyRelationship: (...args) => callOperation("appStoreVersionExperimentsV2_appStoreVersionExperimentTreatments_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"appStoreVersionExperimentsV2_appStoreVersionExperimentTreatments_getToManyRelationship">)),
    AppStoreVersionExperimentsV2CreateInstance: (...args) => callOperation("appStoreVersionExperimentsV2_createInstance", ...(args as AppStoreFullApiOperationArgs<"appStoreVersionExperimentsV2_createInstance">)),
    AppStoreVersionExperimentsV2DeleteInstance: (...args) => callOperation("appStoreVersionExperimentsV2_deleteInstance", ...(args as AppStoreFullApiOperationArgs<"appStoreVersionExperimentsV2_deleteInstance">)),
    AppStoreVersionExperimentsV2GetInstance: (...args) => callOperation("appStoreVersionExperimentsV2_getInstance", ...(args as AppStoreFullApiOperationArgs<"appStoreVersionExperimentsV2_getInstance">)),
    AppStoreVersionExperimentsV2UpdateInstance: (...args) => callOperation("appStoreVersionExperimentsV2_updateInstance", ...(args as AppStoreFullApiOperationArgs<"appStoreVersionExperimentsV2_updateInstance">)),
  };
}
