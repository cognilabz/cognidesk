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
export const AppStoreFullApiBuildBetaNotificationsOperationKeys = [
  "buildBetaNotifications_createInstance"
] as const;
export type AppStoreFullApiBuildBetaNotificationsOperationKey = typeof AppStoreFullApiBuildBetaNotificationsOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiBuildBetaNotificationsOperationPathParamMap {
  "buildBetaNotifications_createInstance": {};
}

export interface AppStoreFullApiBuildBetaNotificationsOperationRequestMap {
  "buildBetaNotifications_createInstance": AppStoreFullApiOperationInput<"buildBetaNotifications_createInstance">;
}

export interface AppStoreFullApiBuildBetaNotificationsGeneratedClient {
  BuildBetaNotificationsCreateInstance(...args: AppStoreFullApiOperationArgs<"buildBetaNotifications_createInstance">): Promise<AppStoreFullApiOperationResponseMap["buildBetaNotifications_createInstance"]>;
}

export const AppStoreFullApiBuildBetaNotificationsGeneratedFunctionNames = [
  "BuildBetaNotificationsCreateInstance"
] as const satisfies readonly (keyof AppStoreFullApiBuildBetaNotificationsGeneratedClient)[];

export function createAppStoreFullApiBuildBetaNotificationsGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiBuildBetaNotificationsGeneratedClient {
  return {
    BuildBetaNotificationsCreateInstance: (...args) => callOperation("buildBetaNotifications_createInstance", ...(args as AppStoreFullApiOperationArgs<"buildBetaNotifications_createInstance">)),
  };
}
