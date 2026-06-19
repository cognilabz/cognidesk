// Generated endpoint chunk for AmazonFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  AmazonGeneratedOperationCaller,
  AmazonFullApiOperationArgs,
  AmazonFullApiOperationInput,
  AmazonFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { AmazonFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const AmazonFullApiNotificationsOperationKeys = [
  "notifications:getSubscription",
  "notifications:createSubscription",
  "notifications:getSubscriptionById",
  "notifications:deleteSubscriptionById",
  "notifications:sendTestNotification",
  "notifications:getDestinations",
  "notifications:createDestination",
  "notifications:getDestination",
  "notifications:deleteDestination"
] as const;
export type AmazonFullApiNotificationsOperationKey = typeof AmazonFullApiNotificationsOperationKeys[number];
// End hardened literal operation keys.

export interface AmazonFullApiNotificationsOperationPathParamMap {
  "notifications:getSubscription": { "notificationType": AmazonFullApiPathParamValue };
  "notifications:createSubscription": { "notificationType": AmazonFullApiPathParamValue };
  "notifications:getSubscriptionById": { "notificationType": AmazonFullApiPathParamValue; "subscriptionId": AmazonFullApiPathParamValue };
  "notifications:deleteSubscriptionById": { "notificationType": AmazonFullApiPathParamValue; "subscriptionId": AmazonFullApiPathParamValue };
  "notifications:sendTestNotification": { "notificationType": AmazonFullApiPathParamValue };
  "notifications:getDestinations": {};
  "notifications:createDestination": {};
  "notifications:getDestination": { "destinationId": AmazonFullApiPathParamValue };
  "notifications:deleteDestination": { "destinationId": AmazonFullApiPathParamValue };
}

export interface AmazonFullApiNotificationsOperationRequestMap {
  "notifications:getSubscription": AmazonFullApiOperationInput<"notifications:getSubscription">;
  "notifications:createSubscription": AmazonFullApiOperationInput<"notifications:createSubscription">;
  "notifications:getSubscriptionById": AmazonFullApiOperationInput<"notifications:getSubscriptionById">;
  "notifications:deleteSubscriptionById": AmazonFullApiOperationInput<"notifications:deleteSubscriptionById">;
  "notifications:sendTestNotification": AmazonFullApiOperationInput<"notifications:sendTestNotification">;
  "notifications:getDestinations": AmazonFullApiOperationInput<"notifications:getDestinations">;
  "notifications:createDestination": AmazonFullApiOperationInput<"notifications:createDestination">;
  "notifications:getDestination": AmazonFullApiOperationInput<"notifications:getDestination">;
  "notifications:deleteDestination": AmazonFullApiOperationInput<"notifications:deleteDestination">;
}

export interface AmazonFullApiNotificationsGeneratedClient {
  GetSubscription(...args: AmazonFullApiOperationArgs<"notifications:getSubscription">): Promise<AmazonFullApiOperationResponseMap["notifications:getSubscription"]>;
  CreateSubscription(...args: AmazonFullApiOperationArgs<"notifications:createSubscription">): Promise<AmazonFullApiOperationResponseMap["notifications:createSubscription"]>;
  GetSubscriptionById(...args: AmazonFullApiOperationArgs<"notifications:getSubscriptionById">): Promise<AmazonFullApiOperationResponseMap["notifications:getSubscriptionById"]>;
  DeleteSubscriptionById(...args: AmazonFullApiOperationArgs<"notifications:deleteSubscriptionById">): Promise<AmazonFullApiOperationResponseMap["notifications:deleteSubscriptionById"]>;
  SendTestNotification(...args: AmazonFullApiOperationArgs<"notifications:sendTestNotification">): Promise<AmazonFullApiOperationResponseMap["notifications:sendTestNotification"]>;
  GetDestinations(...args: AmazonFullApiOperationArgs<"notifications:getDestinations">): Promise<AmazonFullApiOperationResponseMap["notifications:getDestinations"]>;
  CreateDestination(...args: AmazonFullApiOperationArgs<"notifications:createDestination">): Promise<AmazonFullApiOperationResponseMap["notifications:createDestination"]>;
  GetDestination(...args: AmazonFullApiOperationArgs<"notifications:getDestination">): Promise<AmazonFullApiOperationResponseMap["notifications:getDestination"]>;
  DeleteDestination(...args: AmazonFullApiOperationArgs<"notifications:deleteDestination">): Promise<AmazonFullApiOperationResponseMap["notifications:deleteDestination"]>;
}

export const AmazonFullApiNotificationsGeneratedFunctionNames = [
  "GetSubscription",
  "CreateSubscription",
  "GetSubscriptionById",
  "DeleteSubscriptionById",
  "SendTestNotification",
  "GetDestinations",
  "CreateDestination",
  "GetDestination",
  "DeleteDestination"
] as const satisfies readonly (keyof AmazonFullApiNotificationsGeneratedClient)[];

export function createAmazonFullApiNotificationsGeneratedClient(
  callOperation: AmazonGeneratedOperationCaller,
): AmazonFullApiNotificationsGeneratedClient {
  return {
    GetSubscription: (...args) => callOperation("notifications:getSubscription", ...(args as AmazonFullApiOperationArgs<"notifications:getSubscription">)),
    CreateSubscription: (...args) => callOperation("notifications:createSubscription", ...(args as AmazonFullApiOperationArgs<"notifications:createSubscription">)),
    GetSubscriptionById: (...args) => callOperation("notifications:getSubscriptionById", ...(args as AmazonFullApiOperationArgs<"notifications:getSubscriptionById">)),
    DeleteSubscriptionById: (...args) => callOperation("notifications:deleteSubscriptionById", ...(args as AmazonFullApiOperationArgs<"notifications:deleteSubscriptionById">)),
    SendTestNotification: (...args) => callOperation("notifications:sendTestNotification", ...(args as AmazonFullApiOperationArgs<"notifications:sendTestNotification">)),
    GetDestinations: (...args) => callOperation("notifications:getDestinations", ...(args as AmazonFullApiOperationArgs<"notifications:getDestinations">)),
    CreateDestination: (...args) => callOperation("notifications:createDestination", ...(args as AmazonFullApiOperationArgs<"notifications:createDestination">)),
    GetDestination: (...args) => callOperation("notifications:getDestination", ...(args as AmazonFullApiOperationArgs<"notifications:getDestination">)),
    DeleteDestination: (...args) => callOperation("notifications:deleteDestination", ...(args as AmazonFullApiOperationArgs<"notifications:deleteDestination">)),
  };
}
