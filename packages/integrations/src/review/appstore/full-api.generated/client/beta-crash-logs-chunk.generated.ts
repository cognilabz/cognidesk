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
export const AppStoreFullApiBetaCrashLogsOperationKeys = [
  "betaCrashLogs_getInstance"
] as const;
export type AppStoreFullApiBetaCrashLogsOperationKey = typeof AppStoreFullApiBetaCrashLogsOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiBetaCrashLogsOperationPathParamMap {
  "betaCrashLogs_getInstance": { "id": AppStoreFullApiPathParamValue };
}

export interface AppStoreFullApiBetaCrashLogsOperationRequestMap {
  "betaCrashLogs_getInstance": AppStoreFullApiOperationInput<"betaCrashLogs_getInstance">;
}

export interface AppStoreFullApiBetaCrashLogsGeneratedClient {
  BetaCrashLogsGetInstance(...args: AppStoreFullApiOperationArgs<"betaCrashLogs_getInstance">): Promise<AppStoreFullApiOperationResponseMap["betaCrashLogs_getInstance"]>;
}

export const AppStoreFullApiBetaCrashLogsGeneratedFunctionNames = [
  "BetaCrashLogsGetInstance"
] as const satisfies readonly (keyof AppStoreFullApiBetaCrashLogsGeneratedClient)[];

export function createAppStoreFullApiBetaCrashLogsGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiBetaCrashLogsGeneratedClient {
  return {
    BetaCrashLogsGetInstance: (...args) => callOperation("betaCrashLogs_getInstance", ...(args as AppStoreFullApiOperationArgs<"betaCrashLogs_getInstance">)),
  };
}
