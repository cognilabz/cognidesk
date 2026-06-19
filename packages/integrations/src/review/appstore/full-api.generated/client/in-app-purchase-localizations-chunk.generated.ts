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
export const AppStoreFullApiInAppPurchaseLocalizationsOperationKeys = [
  "inAppPurchaseLocalizations_createInstance",
  "inAppPurchaseLocalizations_deleteInstance",
  "inAppPurchaseLocalizations_getInstance",
  "inAppPurchaseLocalizations_updateInstance"
] as const;
export type AppStoreFullApiInAppPurchaseLocalizationsOperationKey = typeof AppStoreFullApiInAppPurchaseLocalizationsOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiInAppPurchaseLocalizationsOperationPathParamMap {
  "inAppPurchaseLocalizations_createInstance": {};
  "inAppPurchaseLocalizations_deleteInstance": { "id": AppStoreFullApiPathParamValue };
  "inAppPurchaseLocalizations_getInstance": { "id": AppStoreFullApiPathParamValue };
  "inAppPurchaseLocalizations_updateInstance": { "id": AppStoreFullApiPathParamValue };
}

export interface AppStoreFullApiInAppPurchaseLocalizationsOperationRequestMap {
  "inAppPurchaseLocalizations_createInstance": AppStoreFullApiOperationInput<"inAppPurchaseLocalizations_createInstance">;
  "inAppPurchaseLocalizations_deleteInstance": AppStoreFullApiOperationInput<"inAppPurchaseLocalizations_deleteInstance">;
  "inAppPurchaseLocalizations_getInstance": AppStoreFullApiOperationInput<"inAppPurchaseLocalizations_getInstance">;
  "inAppPurchaseLocalizations_updateInstance": AppStoreFullApiOperationInput<"inAppPurchaseLocalizations_updateInstance">;
}

export interface AppStoreFullApiInAppPurchaseLocalizationsGeneratedClient {
  InAppPurchaseLocalizationsCreateInstance(...args: AppStoreFullApiOperationArgs<"inAppPurchaseLocalizations_createInstance">): Promise<AppStoreFullApiOperationResponseMap["inAppPurchaseLocalizations_createInstance"]>;
  InAppPurchaseLocalizationsDeleteInstance(...args: AppStoreFullApiOperationArgs<"inAppPurchaseLocalizations_deleteInstance">): Promise<AppStoreFullApiOperationResponseMap["inAppPurchaseLocalizations_deleteInstance"]>;
  InAppPurchaseLocalizationsGetInstance(...args: AppStoreFullApiOperationArgs<"inAppPurchaseLocalizations_getInstance">): Promise<AppStoreFullApiOperationResponseMap["inAppPurchaseLocalizations_getInstance"]>;
  InAppPurchaseLocalizationsUpdateInstance(...args: AppStoreFullApiOperationArgs<"inAppPurchaseLocalizations_updateInstance">): Promise<AppStoreFullApiOperationResponseMap["inAppPurchaseLocalizations_updateInstance"]>;
}

export const AppStoreFullApiInAppPurchaseLocalizationsGeneratedFunctionNames = [
  "InAppPurchaseLocalizationsCreateInstance",
  "InAppPurchaseLocalizationsDeleteInstance",
  "InAppPurchaseLocalizationsGetInstance",
  "InAppPurchaseLocalizationsUpdateInstance"
] as const satisfies readonly (keyof AppStoreFullApiInAppPurchaseLocalizationsGeneratedClient)[];

export function createAppStoreFullApiInAppPurchaseLocalizationsGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiInAppPurchaseLocalizationsGeneratedClient {
  return {
    InAppPurchaseLocalizationsCreateInstance: (...args) => callOperation("inAppPurchaseLocalizations_createInstance", ...(args as AppStoreFullApiOperationArgs<"inAppPurchaseLocalizations_createInstance">)),
    InAppPurchaseLocalizationsDeleteInstance: (...args) => callOperation("inAppPurchaseLocalizations_deleteInstance", ...(args as AppStoreFullApiOperationArgs<"inAppPurchaseLocalizations_deleteInstance">)),
    InAppPurchaseLocalizationsGetInstance: (...args) => callOperation("inAppPurchaseLocalizations_getInstance", ...(args as AppStoreFullApiOperationArgs<"inAppPurchaseLocalizations_getInstance">)),
    InAppPurchaseLocalizationsUpdateInstance: (...args) => callOperation("inAppPurchaseLocalizations_updateInstance", ...(args as AppStoreFullApiOperationArgs<"inAppPurchaseLocalizations_updateInstance">)),
  };
}
