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
export const KustomerFullApiNotificationsOperationKeys = [
  "DeleteNotifications",
  "GetNotifications",
  "UpdateNotifications"
] as const;
export type KustomerFullApiNotificationsOperationKey = typeof KustomerFullApiNotificationsOperationKeys[number];
// End hardened literal operation keys.

export interface KustomerFullApiNotificationsOperationPathParamMap {
  "DeleteNotifications": {};
  "GetNotifications": {};
  "UpdateNotifications": {};
}

export interface KustomerFullApiNotificationsOperationRequestMap {
  "DeleteNotifications": KustomerFullApiOperationInput<"DeleteNotifications">;
  "GetNotifications": KustomerFullApiOperationInput<"GetNotifications">;
  "UpdateNotifications": KustomerFullApiOperationInput<"UpdateNotifications">;
}

export interface KustomerFullApiNotificationsGeneratedClient {
  kustomerDeleteNotifications(...args: KustomerFullApiOperationArgs<"DeleteNotifications">): Promise<KustomerFullApiOperationResponseMap["DeleteNotifications"]>;
  kustomerGetNotifications(...args: KustomerFullApiOperationArgs<"GetNotifications">): Promise<KustomerFullApiOperationResponseMap["GetNotifications"]>;
  kustomerUpdateNotifications(...args: KustomerFullApiOperationArgs<"UpdateNotifications">): Promise<KustomerFullApiOperationResponseMap["UpdateNotifications"]>;
}

export const KustomerFullApiNotificationsGeneratedFunctionNames = [
  "kustomerDeleteNotifications",
  "kustomerGetNotifications",
  "kustomerUpdateNotifications"
] as const satisfies readonly (keyof KustomerFullApiNotificationsGeneratedClient)[];

export function createKustomerFullApiNotificationsGeneratedClient(
  callOperation: KustomerGeneratedOperationCaller,
): KustomerFullApiNotificationsGeneratedClient {
  return {
    kustomerDeleteNotifications: (...args) => callOperation("DeleteNotifications", ...(args as KustomerFullApiOperationArgs<"DeleteNotifications">)),
    kustomerGetNotifications: (...args) => callOperation("GetNotifications", ...(args as KustomerFullApiOperationArgs<"GetNotifications">)),
    kustomerUpdateNotifications: (...args) => callOperation("UpdateNotifications", ...(args as KustomerFullApiOperationArgs<"UpdateNotifications">)),
  };
}
