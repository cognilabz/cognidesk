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
export const KustomerFullApiNotificationsSettingsOperationKeys = [
  "GetCurrentUserNotificationSettings",
  "UpdateCurrentUserNotificationSettings"
] as const;
export type KustomerFullApiNotificationsSettingsOperationKey = typeof KustomerFullApiNotificationsSettingsOperationKeys[number];
// End hardened literal operation keys.

export interface KustomerFullApiNotificationsSettingsOperationPathParamMap {
  "GetCurrentUserNotificationSettings": {};
  "UpdateCurrentUserNotificationSettings": {};
}

export interface KustomerFullApiNotificationsSettingsOperationRequestMap {
  "GetCurrentUserNotificationSettings": KustomerFullApiOperationInput<"GetCurrentUserNotificationSettings">;
  "UpdateCurrentUserNotificationSettings": KustomerFullApiOperationInput<"UpdateCurrentUserNotificationSettings">;
}

export interface KustomerFullApiNotificationsSettingsGeneratedClient {
  kustomerGetCurrentUserNotificationSettings(...args: KustomerFullApiOperationArgs<"GetCurrentUserNotificationSettings">): Promise<KustomerFullApiOperationResponseMap["GetCurrentUserNotificationSettings"]>;
  kustomerUpdateCurrentUserNotificationSettings(...args: KustomerFullApiOperationArgs<"UpdateCurrentUserNotificationSettings">): Promise<KustomerFullApiOperationResponseMap["UpdateCurrentUserNotificationSettings"]>;
}

export const KustomerFullApiNotificationsSettingsGeneratedFunctionNames = [
  "kustomerGetCurrentUserNotificationSettings",
  "kustomerUpdateCurrentUserNotificationSettings"
] as const satisfies readonly (keyof KustomerFullApiNotificationsSettingsGeneratedClient)[];

export function createKustomerFullApiNotificationsSettingsGeneratedClient(
  callOperation: KustomerGeneratedOperationCaller,
): KustomerFullApiNotificationsSettingsGeneratedClient {
  return {
    kustomerGetCurrentUserNotificationSettings: (...args) => callOperation("GetCurrentUserNotificationSettings", ...(args as KustomerFullApiOperationArgs<"GetCurrentUserNotificationSettings">)),
    kustomerUpdateCurrentUserNotificationSettings: (...args) => callOperation("UpdateCurrentUserNotificationSettings", ...(args as KustomerFullApiOperationArgs<"UpdateCurrentUserNotificationSettings">)),
  };
}
