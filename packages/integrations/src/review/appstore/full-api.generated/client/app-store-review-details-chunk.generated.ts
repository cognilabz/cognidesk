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
export const AppStoreFullApiAppStoreReviewDetailsOperationKeys = [
  "appStoreReviewDetails_appStoreReviewAttachments_getToManyRelated",
  "appStoreReviewDetails_appStoreReviewAttachments_getToManyRelationship",
  "appStoreReviewDetails_createInstance",
  "appStoreReviewDetails_getInstance",
  "appStoreReviewDetails_updateInstance"
] as const;
export type AppStoreFullApiAppStoreReviewDetailsOperationKey = typeof AppStoreFullApiAppStoreReviewDetailsOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiAppStoreReviewDetailsOperationPathParamMap {
  "appStoreReviewDetails_appStoreReviewAttachments_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "appStoreReviewDetails_appStoreReviewAttachments_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "appStoreReviewDetails_createInstance": {};
  "appStoreReviewDetails_getInstance": { "id": AppStoreFullApiPathParamValue };
  "appStoreReviewDetails_updateInstance": { "id": AppStoreFullApiPathParamValue };
}

export interface AppStoreFullApiAppStoreReviewDetailsOperationRequestMap {
  "appStoreReviewDetails_appStoreReviewAttachments_getToManyRelated": AppStoreFullApiOperationInput<"appStoreReviewDetails_appStoreReviewAttachments_getToManyRelated">;
  "appStoreReviewDetails_appStoreReviewAttachments_getToManyRelationship": AppStoreFullApiOperationInput<"appStoreReviewDetails_appStoreReviewAttachments_getToManyRelationship">;
  "appStoreReviewDetails_createInstance": AppStoreFullApiOperationInput<"appStoreReviewDetails_createInstance">;
  "appStoreReviewDetails_getInstance": AppStoreFullApiOperationInput<"appStoreReviewDetails_getInstance">;
  "appStoreReviewDetails_updateInstance": AppStoreFullApiOperationInput<"appStoreReviewDetails_updateInstance">;
}

export interface AppStoreFullApiAppStoreReviewDetailsGeneratedClient {
  AppStoreReviewDetailsAppStoreReviewAttachmentsGetToManyRelated(...args: AppStoreFullApiOperationArgs<"appStoreReviewDetails_appStoreReviewAttachments_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["appStoreReviewDetails_appStoreReviewAttachments_getToManyRelated"]>;
  AppStoreReviewDetailsAppStoreReviewAttachmentsGetToManyRelationship(...args: AppStoreFullApiOperationArgs<"appStoreReviewDetails_appStoreReviewAttachments_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["appStoreReviewDetails_appStoreReviewAttachments_getToManyRelationship"]>;
  AppStoreReviewDetailsCreateInstance(...args: AppStoreFullApiOperationArgs<"appStoreReviewDetails_createInstance">): Promise<AppStoreFullApiOperationResponseMap["appStoreReviewDetails_createInstance"]>;
  AppStoreReviewDetailsGetInstance(...args: AppStoreFullApiOperationArgs<"appStoreReviewDetails_getInstance">): Promise<AppStoreFullApiOperationResponseMap["appStoreReviewDetails_getInstance"]>;
  AppStoreReviewDetailsUpdateInstance(...args: AppStoreFullApiOperationArgs<"appStoreReviewDetails_updateInstance">): Promise<AppStoreFullApiOperationResponseMap["appStoreReviewDetails_updateInstance"]>;
}

export const AppStoreFullApiAppStoreReviewDetailsGeneratedFunctionNames = [
  "AppStoreReviewDetailsAppStoreReviewAttachmentsGetToManyRelated",
  "AppStoreReviewDetailsAppStoreReviewAttachmentsGetToManyRelationship",
  "AppStoreReviewDetailsCreateInstance",
  "AppStoreReviewDetailsGetInstance",
  "AppStoreReviewDetailsUpdateInstance"
] as const satisfies readonly (keyof AppStoreFullApiAppStoreReviewDetailsGeneratedClient)[];

export function createAppStoreFullApiAppStoreReviewDetailsGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiAppStoreReviewDetailsGeneratedClient {
  return {
    AppStoreReviewDetailsAppStoreReviewAttachmentsGetToManyRelated: (...args) => callOperation("appStoreReviewDetails_appStoreReviewAttachments_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"appStoreReviewDetails_appStoreReviewAttachments_getToManyRelated">)),
    AppStoreReviewDetailsAppStoreReviewAttachmentsGetToManyRelationship: (...args) => callOperation("appStoreReviewDetails_appStoreReviewAttachments_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"appStoreReviewDetails_appStoreReviewAttachments_getToManyRelationship">)),
    AppStoreReviewDetailsCreateInstance: (...args) => callOperation("appStoreReviewDetails_createInstance", ...(args as AppStoreFullApiOperationArgs<"appStoreReviewDetails_createInstance">)),
    AppStoreReviewDetailsGetInstance: (...args) => callOperation("appStoreReviewDetails_getInstance", ...(args as AppStoreFullApiOperationArgs<"appStoreReviewDetails_getInstance">)),
    AppStoreReviewDetailsUpdateInstance: (...args) => callOperation("appStoreReviewDetails_updateInstance", ...(args as AppStoreFullApiOperationArgs<"appStoreReviewDetails_updateInstance">)),
  };
}
