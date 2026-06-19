// Generated endpoint chunk for KustomerFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  KustomerGeneratedOperationCaller,
  KustomerFullApiOperationArgs,
  KustomerFullApiOperationInput,
  KustomerFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { KustomerFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const KustomerFullApiNotificationsLogsOperationKeys = [
  "GetNotificationsLogsSettings",
  "UpdateNotificationsLogsSettings"
] as const;
export type KustomerFullApiNotificationsLogsOperationKey = typeof KustomerFullApiNotificationsLogsOperationKeys[number];
// End hardened literal operation keys.

export interface KustomerFullApiNotificationsLogsOperationPathParamMap {
  "GetNotificationsLogsSettings": {};
  "UpdateNotificationsLogsSettings": {};
}

export interface KustomerFullApiNotificationsLogsOperationRequestMap {
  "GetNotificationsLogsSettings": KustomerFullApiOperationInput<"GetNotificationsLogsSettings">;
  "UpdateNotificationsLogsSettings": KustomerFullApiOperationInput<"UpdateNotificationsLogsSettings">;
}

export interface KustomerFullApiNotificationsLogsGeneratedClient {
  kustomerGetNotificationsLogsSettings(...args: KustomerFullApiOperationArgs<"GetNotificationsLogsSettings">): Promise<KustomerFullApiOperationResponseMap["GetNotificationsLogsSettings"]>;
  kustomerUpdateNotificationsLogsSettings(...args: KustomerFullApiOperationArgs<"UpdateNotificationsLogsSettings">): Promise<KustomerFullApiOperationResponseMap["UpdateNotificationsLogsSettings"]>;
}

export const KustomerFullApiNotificationsLogsGeneratedFunctionNames = [
  "kustomerGetNotificationsLogsSettings",
  "kustomerUpdateNotificationsLogsSettings"
] as const satisfies readonly (keyof KustomerFullApiNotificationsLogsGeneratedClient)[];

export function createKustomerFullApiNotificationsLogsGeneratedClient(
  callOperation: KustomerGeneratedOperationCaller,
): KustomerFullApiNotificationsLogsGeneratedClient {
  return {
    kustomerGetNotificationsLogsSettings: (...args) => callOperation("GetNotificationsLogsSettings", ...(args as KustomerFullApiOperationArgs<"GetNotificationsLogsSettings">)),
    kustomerUpdateNotificationsLogsSettings: (...args) => callOperation("UpdateNotificationsLogsSettings", ...(args as KustomerFullApiOperationArgs<"UpdateNotificationsLogsSettings">)),
  };
}
