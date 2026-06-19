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
export const AppStoreFullApiBetaAppClipInvocationLocalizationsOperationKeys = [
  "betaAppClipInvocationLocalizations_createInstance",
  "betaAppClipInvocationLocalizations_deleteInstance",
  "betaAppClipInvocationLocalizations_updateInstance"
] as const;
export type AppStoreFullApiBetaAppClipInvocationLocalizationsOperationKey = typeof AppStoreFullApiBetaAppClipInvocationLocalizationsOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiBetaAppClipInvocationLocalizationsOperationPathParamMap {
  "betaAppClipInvocationLocalizations_createInstance": {};
  "betaAppClipInvocationLocalizations_deleteInstance": { "id": AppStoreFullApiPathParamValue };
  "betaAppClipInvocationLocalizations_updateInstance": { "id": AppStoreFullApiPathParamValue };
}

export interface AppStoreFullApiBetaAppClipInvocationLocalizationsOperationRequestMap {
  "betaAppClipInvocationLocalizations_createInstance": AppStoreFullApiOperationInput<"betaAppClipInvocationLocalizations_createInstance">;
  "betaAppClipInvocationLocalizations_deleteInstance": AppStoreFullApiOperationInput<"betaAppClipInvocationLocalizations_deleteInstance">;
  "betaAppClipInvocationLocalizations_updateInstance": AppStoreFullApiOperationInput<"betaAppClipInvocationLocalizations_updateInstance">;
}

export interface AppStoreFullApiBetaAppClipInvocationLocalizationsGeneratedClient {
  BetaAppClipInvocationLocalizationsCreateInstance(...args: AppStoreFullApiOperationArgs<"betaAppClipInvocationLocalizations_createInstance">): Promise<AppStoreFullApiOperationResponseMap["betaAppClipInvocationLocalizations_createInstance"]>;
  BetaAppClipInvocationLocalizationsDeleteInstance(...args: AppStoreFullApiOperationArgs<"betaAppClipInvocationLocalizations_deleteInstance">): Promise<AppStoreFullApiOperationResponseMap["betaAppClipInvocationLocalizations_deleteInstance"]>;
  BetaAppClipInvocationLocalizationsUpdateInstance(...args: AppStoreFullApiOperationArgs<"betaAppClipInvocationLocalizations_updateInstance">): Promise<AppStoreFullApiOperationResponseMap["betaAppClipInvocationLocalizations_updateInstance"]>;
}

export const AppStoreFullApiBetaAppClipInvocationLocalizationsGeneratedFunctionNames = [
  "BetaAppClipInvocationLocalizationsCreateInstance",
  "BetaAppClipInvocationLocalizationsDeleteInstance",
  "BetaAppClipInvocationLocalizationsUpdateInstance"
] as const satisfies readonly (keyof AppStoreFullApiBetaAppClipInvocationLocalizationsGeneratedClient)[];

export function createAppStoreFullApiBetaAppClipInvocationLocalizationsGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiBetaAppClipInvocationLocalizationsGeneratedClient {
  return {
    BetaAppClipInvocationLocalizationsCreateInstance: (...args) => callOperation("betaAppClipInvocationLocalizations_createInstance", ...(args as AppStoreFullApiOperationArgs<"betaAppClipInvocationLocalizations_createInstance">)),
    BetaAppClipInvocationLocalizationsDeleteInstance: (...args) => callOperation("betaAppClipInvocationLocalizations_deleteInstance", ...(args as AppStoreFullApiOperationArgs<"betaAppClipInvocationLocalizations_deleteInstance">)),
    BetaAppClipInvocationLocalizationsUpdateInstance: (...args) => callOperation("betaAppClipInvocationLocalizations_updateInstance", ...(args as AppStoreFullApiOperationArgs<"betaAppClipInvocationLocalizations_updateInstance">)),
  };
}
