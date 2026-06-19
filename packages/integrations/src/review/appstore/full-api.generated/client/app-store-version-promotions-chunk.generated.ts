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
export const AppStoreFullApiAppStoreVersionPromotionsOperationKeys = [
  "appStoreVersionPromotions_createInstance"
] as const;
export type AppStoreFullApiAppStoreVersionPromotionsOperationKey = typeof AppStoreFullApiAppStoreVersionPromotionsOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiAppStoreVersionPromotionsOperationPathParamMap {
  "appStoreVersionPromotions_createInstance": {};
}

export interface AppStoreFullApiAppStoreVersionPromotionsOperationRequestMap {
  "appStoreVersionPromotions_createInstance": AppStoreFullApiOperationInput<"appStoreVersionPromotions_createInstance">;
}

export interface AppStoreFullApiAppStoreVersionPromotionsGeneratedClient {
  AppStoreVersionPromotionsCreateInstance(...args: AppStoreFullApiOperationArgs<"appStoreVersionPromotions_createInstance">): Promise<AppStoreFullApiOperationResponseMap["appStoreVersionPromotions_createInstance"]>;
}

export const AppStoreFullApiAppStoreVersionPromotionsGeneratedFunctionNames = [
  "AppStoreVersionPromotionsCreateInstance"
] as const satisfies readonly (keyof AppStoreFullApiAppStoreVersionPromotionsGeneratedClient)[];

export function createAppStoreFullApiAppStoreVersionPromotionsGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiAppStoreVersionPromotionsGeneratedClient {
  return {
    AppStoreVersionPromotionsCreateInstance: (...args) => callOperation("appStoreVersionPromotions_createInstance", ...(args as AppStoreFullApiOperationArgs<"appStoreVersionPromotions_createInstance">)),
  };
}
