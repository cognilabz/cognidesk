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
export const ZendeskFullApiEmailNotificationsOperationKeys = [
  "ListEmailNotifications",
  "ShowEmailNotification",
  "ShowManyEmailNotifications"
] as const;
export type ZendeskFullApiEmailNotificationsOperationKey = typeof ZendeskFullApiEmailNotificationsOperationKeys[number];
// End hardened literal operation keys.

export interface ZendeskFullApiEmailNotificationsOperationPathParamMap {
  "ListEmailNotifications": {};
  "ShowEmailNotification": { "notification_id": ZendeskFullApiPathParamValue };
  "ShowManyEmailNotifications": {};
}

export interface ZendeskFullApiEmailNotificationsOperationRequestMap {
  "ListEmailNotifications": ZendeskFullApiOperationInput<"ListEmailNotifications">;
  "ShowEmailNotification": ZendeskFullApiOperationInput<"ShowEmailNotification">;
  "ShowManyEmailNotifications": ZendeskFullApiOperationInput<"ShowManyEmailNotifications">;
}

export interface ZendeskFullApiEmailNotificationsGeneratedClient {
  ListEmailNotifications(...args: ZendeskFullApiOperationArgs<"ListEmailNotifications">): Promise<ZendeskFullApiOperationResponseMap["ListEmailNotifications"]>;
  ShowEmailNotification(...args: ZendeskFullApiOperationArgs<"ShowEmailNotification">): Promise<ZendeskFullApiOperationResponseMap["ShowEmailNotification"]>;
  ShowManyEmailNotifications(...args: ZendeskFullApiOperationArgs<"ShowManyEmailNotifications">): Promise<ZendeskFullApiOperationResponseMap["ShowManyEmailNotifications"]>;
}

export const ZendeskFullApiEmailNotificationsGeneratedFunctionNames = [
  "ListEmailNotifications",
  "ShowEmailNotification",
  "ShowManyEmailNotifications"
] as const satisfies readonly (keyof ZendeskFullApiEmailNotificationsGeneratedClient)[];

export function createZendeskFullApiEmailNotificationsGeneratedClient(
  callOperation: ZendeskGeneratedOperationCaller,
): ZendeskFullApiEmailNotificationsGeneratedClient {
  return {
    ListEmailNotifications: (...args) => callOperation("ListEmailNotifications", ...(args as ZendeskFullApiOperationArgs<"ListEmailNotifications">)),
    ShowEmailNotification: (...args) => callOperation("ShowEmailNotification", ...(args as ZendeskFullApiOperationArgs<"ShowEmailNotification">)),
    ShowManyEmailNotifications: (...args) => callOperation("ShowManyEmailNotifications", ...(args as ZendeskFullApiOperationArgs<"ShowManyEmailNotifications">)),
  };
}
