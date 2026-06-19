// Generated endpoint chunk for AmazonConnectFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  AmazonConnectGeneratedOperationCaller,
  AmazonConnectFullApiOperationArgs,
  AmazonConnectFullApiOperationInput,
  AmazonConnectFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { AmazonConnectFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const AmazonConnectFullApiSearchNotificationsOperationKeys = [
  "connect:SearchNotifications"
] as const;
export type AmazonConnectFullApiSearchNotificationsOperationKey = typeof AmazonConnectFullApiSearchNotificationsOperationKeys[number];
// End hardened literal operation keys.

export interface AmazonConnectFullApiSearchNotificationsOperationPathParamMap {
  "connect:SearchNotifications": {};
}

export interface AmazonConnectFullApiSearchNotificationsOperationRequestMap {
  "connect:SearchNotifications": AmazonConnectFullApiOperationInput<"connect:SearchNotifications">;
}

export interface AmazonConnectFullApiSearchNotificationsGeneratedClient {
  SearchNotifications(...args: AmazonConnectFullApiOperationArgs<"connect:SearchNotifications">): Promise<AmazonConnectFullApiOperationResponseMap["connect:SearchNotifications"]>;
}

export const AmazonConnectFullApiSearchNotificationsGeneratedFunctionNames = [
  "SearchNotifications"
] as const satisfies readonly (keyof AmazonConnectFullApiSearchNotificationsGeneratedClient)[];

export function createAmazonConnectFullApiSearchNotificationsGeneratedClient(
  callOperation: AmazonConnectGeneratedOperationCaller,
): AmazonConnectFullApiSearchNotificationsGeneratedClient {
  return {
    SearchNotifications: (...args) => callOperation("connect:SearchNotifications", ...(args as AmazonConnectFullApiOperationArgs<"connect:SearchNotifications">)),
  };
}
