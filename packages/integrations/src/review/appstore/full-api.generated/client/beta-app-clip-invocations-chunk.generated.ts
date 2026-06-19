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
export const AppStoreFullApiBetaAppClipInvocationsOperationKeys = [
  "betaAppClipInvocations_createInstance",
  "betaAppClipInvocations_deleteInstance",
  "betaAppClipInvocations_getInstance",
  "betaAppClipInvocations_updateInstance"
] as const;
export type AppStoreFullApiBetaAppClipInvocationsOperationKey = typeof AppStoreFullApiBetaAppClipInvocationsOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiBetaAppClipInvocationsOperationPathParamMap {
  "betaAppClipInvocations_createInstance": {};
  "betaAppClipInvocations_deleteInstance": { "id": AppStoreFullApiPathParamValue };
  "betaAppClipInvocations_getInstance": { "id": AppStoreFullApiPathParamValue };
  "betaAppClipInvocations_updateInstance": { "id": AppStoreFullApiPathParamValue };
}

export interface AppStoreFullApiBetaAppClipInvocationsOperationRequestMap {
  "betaAppClipInvocations_createInstance": AppStoreFullApiOperationInput<"betaAppClipInvocations_createInstance">;
  "betaAppClipInvocations_deleteInstance": AppStoreFullApiOperationInput<"betaAppClipInvocations_deleteInstance">;
  "betaAppClipInvocations_getInstance": AppStoreFullApiOperationInput<"betaAppClipInvocations_getInstance">;
  "betaAppClipInvocations_updateInstance": AppStoreFullApiOperationInput<"betaAppClipInvocations_updateInstance">;
}

export interface AppStoreFullApiBetaAppClipInvocationsGeneratedClient {
  BetaAppClipInvocationsCreateInstance(...args: AppStoreFullApiOperationArgs<"betaAppClipInvocations_createInstance">): Promise<AppStoreFullApiOperationResponseMap["betaAppClipInvocations_createInstance"]>;
  BetaAppClipInvocationsDeleteInstance(...args: AppStoreFullApiOperationArgs<"betaAppClipInvocations_deleteInstance">): Promise<AppStoreFullApiOperationResponseMap["betaAppClipInvocations_deleteInstance"]>;
  BetaAppClipInvocationsGetInstance(...args: AppStoreFullApiOperationArgs<"betaAppClipInvocations_getInstance">): Promise<AppStoreFullApiOperationResponseMap["betaAppClipInvocations_getInstance"]>;
  BetaAppClipInvocationsUpdateInstance(...args: AppStoreFullApiOperationArgs<"betaAppClipInvocations_updateInstance">): Promise<AppStoreFullApiOperationResponseMap["betaAppClipInvocations_updateInstance"]>;
}

export const AppStoreFullApiBetaAppClipInvocationsGeneratedFunctionNames = [
  "BetaAppClipInvocationsCreateInstance",
  "BetaAppClipInvocationsDeleteInstance",
  "BetaAppClipInvocationsGetInstance",
  "BetaAppClipInvocationsUpdateInstance"
] as const satisfies readonly (keyof AppStoreFullApiBetaAppClipInvocationsGeneratedClient)[];

export function createAppStoreFullApiBetaAppClipInvocationsGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiBetaAppClipInvocationsGeneratedClient {
  return {
    BetaAppClipInvocationsCreateInstance: (...args) => callOperation("betaAppClipInvocations_createInstance", ...(args as AppStoreFullApiOperationArgs<"betaAppClipInvocations_createInstance">)),
    BetaAppClipInvocationsDeleteInstance: (...args) => callOperation("betaAppClipInvocations_deleteInstance", ...(args as AppStoreFullApiOperationArgs<"betaAppClipInvocations_deleteInstance">)),
    BetaAppClipInvocationsGetInstance: (...args) => callOperation("betaAppClipInvocations_getInstance", ...(args as AppStoreFullApiOperationArgs<"betaAppClipInvocations_getInstance">)),
    BetaAppClipInvocationsUpdateInstance: (...args) => callOperation("betaAppClipInvocations_updateInstance", ...(args as AppStoreFullApiOperationArgs<"betaAppClipInvocations_updateInstance">)),
  };
}
