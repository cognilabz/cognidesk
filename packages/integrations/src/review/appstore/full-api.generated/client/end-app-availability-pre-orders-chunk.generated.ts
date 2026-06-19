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
export const AppStoreFullApiEndAppAvailabilityPreOrdersOperationKeys = [
  "endAppAvailabilityPreOrders_createInstance"
] as const;
export type AppStoreFullApiEndAppAvailabilityPreOrdersOperationKey = typeof AppStoreFullApiEndAppAvailabilityPreOrdersOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiEndAppAvailabilityPreOrdersOperationPathParamMap {
  "endAppAvailabilityPreOrders_createInstance": {};
}

export interface AppStoreFullApiEndAppAvailabilityPreOrdersOperationRequestMap {
  "endAppAvailabilityPreOrders_createInstance": AppStoreFullApiOperationInput<"endAppAvailabilityPreOrders_createInstance">;
}

export interface AppStoreFullApiEndAppAvailabilityPreOrdersGeneratedClient {
  EndAppAvailabilityPreOrdersCreateInstance(...args: AppStoreFullApiOperationArgs<"endAppAvailabilityPreOrders_createInstance">): Promise<AppStoreFullApiOperationResponseMap["endAppAvailabilityPreOrders_createInstance"]>;
}

export const AppStoreFullApiEndAppAvailabilityPreOrdersGeneratedFunctionNames = [
  "EndAppAvailabilityPreOrdersCreateInstance"
] as const satisfies readonly (keyof AppStoreFullApiEndAppAvailabilityPreOrdersGeneratedClient)[];

export function createAppStoreFullApiEndAppAvailabilityPreOrdersGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiEndAppAvailabilityPreOrdersGeneratedClient {
  return {
    EndAppAvailabilityPreOrdersCreateInstance: (...args) => callOperation("endAppAvailabilityPreOrders_createInstance", ...(args as AppStoreFullApiOperationArgs<"endAppAvailabilityPreOrders_createInstance">)),
  };
}
