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
export const AppStoreFullApiBetaTesterInvitationsOperationKeys = [
  "betaTesterInvitations_createInstance"
] as const;
export type AppStoreFullApiBetaTesterInvitationsOperationKey = typeof AppStoreFullApiBetaTesterInvitationsOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiBetaTesterInvitationsOperationPathParamMap {
  "betaTesterInvitations_createInstance": {};
}

export interface AppStoreFullApiBetaTesterInvitationsOperationRequestMap {
  "betaTesterInvitations_createInstance": AppStoreFullApiOperationInput<"betaTesterInvitations_createInstance">;
}

export interface AppStoreFullApiBetaTesterInvitationsGeneratedClient {
  BetaTesterInvitationsCreateInstance(...args: AppStoreFullApiOperationArgs<"betaTesterInvitations_createInstance">): Promise<AppStoreFullApiOperationResponseMap["betaTesterInvitations_createInstance"]>;
}

export const AppStoreFullApiBetaTesterInvitationsGeneratedFunctionNames = [
  "BetaTesterInvitationsCreateInstance"
] as const satisfies readonly (keyof AppStoreFullApiBetaTesterInvitationsGeneratedClient)[];

export function createAppStoreFullApiBetaTesterInvitationsGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiBetaTesterInvitationsGeneratedClient {
  return {
    BetaTesterInvitationsCreateInstance: (...args) => callOperation("betaTesterInvitations_createInstance", ...(args as AppStoreFullApiOperationArgs<"betaTesterInvitations_createInstance">)),
  };
}
