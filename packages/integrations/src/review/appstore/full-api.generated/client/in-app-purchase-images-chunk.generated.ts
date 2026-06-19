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
export const AppStoreFullApiInAppPurchaseImagesOperationKeys = [
  "inAppPurchaseImages_createInstance",
  "inAppPurchaseImages_deleteInstance",
  "inAppPurchaseImages_getInstance",
  "inAppPurchaseImages_updateInstance"
] as const;
export type AppStoreFullApiInAppPurchaseImagesOperationKey = typeof AppStoreFullApiInAppPurchaseImagesOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiInAppPurchaseImagesOperationPathParamMap {
  "inAppPurchaseImages_createInstance": {};
  "inAppPurchaseImages_deleteInstance": { "id": AppStoreFullApiPathParamValue };
  "inAppPurchaseImages_getInstance": { "id": AppStoreFullApiPathParamValue };
  "inAppPurchaseImages_updateInstance": { "id": AppStoreFullApiPathParamValue };
}

export interface AppStoreFullApiInAppPurchaseImagesOperationRequestMap {
  "inAppPurchaseImages_createInstance": AppStoreFullApiOperationInput<"inAppPurchaseImages_createInstance">;
  "inAppPurchaseImages_deleteInstance": AppStoreFullApiOperationInput<"inAppPurchaseImages_deleteInstance">;
  "inAppPurchaseImages_getInstance": AppStoreFullApiOperationInput<"inAppPurchaseImages_getInstance">;
  "inAppPurchaseImages_updateInstance": AppStoreFullApiOperationInput<"inAppPurchaseImages_updateInstance">;
}

export interface AppStoreFullApiInAppPurchaseImagesGeneratedClient {
  InAppPurchaseImagesCreateInstance(...args: AppStoreFullApiOperationArgs<"inAppPurchaseImages_createInstance">): Promise<AppStoreFullApiOperationResponseMap["inAppPurchaseImages_createInstance"]>;
  InAppPurchaseImagesDeleteInstance(...args: AppStoreFullApiOperationArgs<"inAppPurchaseImages_deleteInstance">): Promise<AppStoreFullApiOperationResponseMap["inAppPurchaseImages_deleteInstance"]>;
  InAppPurchaseImagesGetInstance(...args: AppStoreFullApiOperationArgs<"inAppPurchaseImages_getInstance">): Promise<AppStoreFullApiOperationResponseMap["inAppPurchaseImages_getInstance"]>;
  InAppPurchaseImagesUpdateInstance(...args: AppStoreFullApiOperationArgs<"inAppPurchaseImages_updateInstance">): Promise<AppStoreFullApiOperationResponseMap["inAppPurchaseImages_updateInstance"]>;
}

export const AppStoreFullApiInAppPurchaseImagesGeneratedFunctionNames = [
  "InAppPurchaseImagesCreateInstance",
  "InAppPurchaseImagesDeleteInstance",
  "InAppPurchaseImagesGetInstance",
  "InAppPurchaseImagesUpdateInstance"
] as const satisfies readonly (keyof AppStoreFullApiInAppPurchaseImagesGeneratedClient)[];

export function createAppStoreFullApiInAppPurchaseImagesGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiInAppPurchaseImagesGeneratedClient {
  return {
    InAppPurchaseImagesCreateInstance: (...args) => callOperation("inAppPurchaseImages_createInstance", ...(args as AppStoreFullApiOperationArgs<"inAppPurchaseImages_createInstance">)),
    InAppPurchaseImagesDeleteInstance: (...args) => callOperation("inAppPurchaseImages_deleteInstance", ...(args as AppStoreFullApiOperationArgs<"inAppPurchaseImages_deleteInstance">)),
    InAppPurchaseImagesGetInstance: (...args) => callOperation("inAppPurchaseImages_getInstance", ...(args as AppStoreFullApiOperationArgs<"inAppPurchaseImages_getInstance">)),
    InAppPurchaseImagesUpdateInstance: (...args) => callOperation("inAppPurchaseImages_updateInstance", ...(args as AppStoreFullApiOperationArgs<"inAppPurchaseImages_updateInstance">)),
  };
}
