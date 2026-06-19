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
export const AppStoreFullApiAppStoreReviewAttachmentsOperationKeys = [
  "appStoreReviewAttachments_createInstance",
  "appStoreReviewAttachments_deleteInstance",
  "appStoreReviewAttachments_getInstance",
  "appStoreReviewAttachments_updateInstance"
] as const;
export type AppStoreFullApiAppStoreReviewAttachmentsOperationKey = typeof AppStoreFullApiAppStoreReviewAttachmentsOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiAppStoreReviewAttachmentsOperationPathParamMap {
  "appStoreReviewAttachments_createInstance": {};
  "appStoreReviewAttachments_deleteInstance": { "id": AppStoreFullApiPathParamValue };
  "appStoreReviewAttachments_getInstance": { "id": AppStoreFullApiPathParamValue };
  "appStoreReviewAttachments_updateInstance": { "id": AppStoreFullApiPathParamValue };
}

export interface AppStoreFullApiAppStoreReviewAttachmentsOperationRequestMap {
  "appStoreReviewAttachments_createInstance": AppStoreFullApiOperationInput<"appStoreReviewAttachments_createInstance">;
  "appStoreReviewAttachments_deleteInstance": AppStoreFullApiOperationInput<"appStoreReviewAttachments_deleteInstance">;
  "appStoreReviewAttachments_getInstance": AppStoreFullApiOperationInput<"appStoreReviewAttachments_getInstance">;
  "appStoreReviewAttachments_updateInstance": AppStoreFullApiOperationInput<"appStoreReviewAttachments_updateInstance">;
}

export interface AppStoreFullApiAppStoreReviewAttachmentsGeneratedClient {
  AppStoreReviewAttachmentsCreateInstance(...args: AppStoreFullApiOperationArgs<"appStoreReviewAttachments_createInstance">): Promise<AppStoreFullApiOperationResponseMap["appStoreReviewAttachments_createInstance"]>;
  AppStoreReviewAttachmentsDeleteInstance(...args: AppStoreFullApiOperationArgs<"appStoreReviewAttachments_deleteInstance">): Promise<AppStoreFullApiOperationResponseMap["appStoreReviewAttachments_deleteInstance"]>;
  AppStoreReviewAttachmentsGetInstance(...args: AppStoreFullApiOperationArgs<"appStoreReviewAttachments_getInstance">): Promise<AppStoreFullApiOperationResponseMap["appStoreReviewAttachments_getInstance"]>;
  AppStoreReviewAttachmentsUpdateInstance(...args: AppStoreFullApiOperationArgs<"appStoreReviewAttachments_updateInstance">): Promise<AppStoreFullApiOperationResponseMap["appStoreReviewAttachments_updateInstance"]>;
}

export const AppStoreFullApiAppStoreReviewAttachmentsGeneratedFunctionNames = [
  "AppStoreReviewAttachmentsCreateInstance",
  "AppStoreReviewAttachmentsDeleteInstance",
  "AppStoreReviewAttachmentsGetInstance",
  "AppStoreReviewAttachmentsUpdateInstance"
] as const satisfies readonly (keyof AppStoreFullApiAppStoreReviewAttachmentsGeneratedClient)[];

export function createAppStoreFullApiAppStoreReviewAttachmentsGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiAppStoreReviewAttachmentsGeneratedClient {
  return {
    AppStoreReviewAttachmentsCreateInstance: (...args) => callOperation("appStoreReviewAttachments_createInstance", ...(args as AppStoreFullApiOperationArgs<"appStoreReviewAttachments_createInstance">)),
    AppStoreReviewAttachmentsDeleteInstance: (...args) => callOperation("appStoreReviewAttachments_deleteInstance", ...(args as AppStoreFullApiOperationArgs<"appStoreReviewAttachments_deleteInstance">)),
    AppStoreReviewAttachmentsGetInstance: (...args) => callOperation("appStoreReviewAttachments_getInstance", ...(args as AppStoreFullApiOperationArgs<"appStoreReviewAttachments_getInstance">)),
    AppStoreReviewAttachmentsUpdateInstance: (...args) => callOperation("appStoreReviewAttachments_updateInstance", ...(args as AppStoreFullApiOperationArgs<"appStoreReviewAttachments_updateInstance">)),
  };
}
