// Generated endpoint chunk for ZendeskFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  ZendeskGeneratedOperationCaller,
  ZendeskFullApiOperationArgs,
  ZendeskFullApiOperationInput,
  ZendeskFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { ZendeskFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const ZendeskFullApiPushNotificationDevicesOperationKeys = [
  "PushNotificationDevices"
] as const;
export type ZendeskFullApiPushNotificationDevicesOperationKey = typeof ZendeskFullApiPushNotificationDevicesOperationKeys[number];
// End hardened literal operation keys.

export interface ZendeskFullApiPushNotificationDevicesOperationPathParamMap {
  "PushNotificationDevices": {};
}

export interface ZendeskFullApiPushNotificationDevicesOperationRequestMap {
  "PushNotificationDevices": ZendeskFullApiOperationInput<"PushNotificationDevices">;
}

export interface ZendeskFullApiPushNotificationDevicesGeneratedClient {
  PushNotificationDevices(...args: ZendeskFullApiOperationArgs<"PushNotificationDevices">): Promise<ZendeskFullApiOperationResponseMap["PushNotificationDevices"]>;
}

export const ZendeskFullApiPushNotificationDevicesGeneratedFunctionNames = [
  "PushNotificationDevices"
] as const satisfies readonly (keyof ZendeskFullApiPushNotificationDevicesGeneratedClient)[];

export function createZendeskFullApiPushNotificationDevicesGeneratedClient(
  callOperation: ZendeskGeneratedOperationCaller,
): ZendeskFullApiPushNotificationDevicesGeneratedClient {
  return {
    PushNotificationDevices: (...args) => callOperation("PushNotificationDevices", ...(args as ZendeskFullApiOperationArgs<"PushNotificationDevices">)),
  };
}
