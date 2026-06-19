// Generated endpoint chunk for OutlookGraph.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  OutlookGraphGeneratedOperationCaller,
  OutlookGraphOperationArgs,
  OutlookGraphOperationInput,
  OutlookGraphPathParamValue,
} from "../../graph-api-client.generated.js";
import type { OutlookGraphOperationResponseMap } from "../../graph-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const OutlookGraphSubscriptionsSubscriptionOperationKeys = [
  "subscriptions.subscription.ListSubscription",
  "subscriptions.subscription.CreateSubscription",
  "subscriptions.subscription.GetSubscription",
  "subscriptions.subscription.UpdateSubscription",
  "subscriptions.subscription.DeleteSubscription"
] as const;
export type OutlookGraphSubscriptionsSubscriptionOperationKey = typeof OutlookGraphSubscriptionsSubscriptionOperationKeys[number];
// End hardened literal operation keys.

export interface OutlookGraphSubscriptionsSubscriptionOperationPathParamMap {
  "subscriptions.subscription.ListSubscription": {};
  "subscriptions.subscription.CreateSubscription": {};
  "subscriptions.subscription.GetSubscription": { "subscription-id": OutlookGraphPathParamValue };
  "subscriptions.subscription.UpdateSubscription": { "subscription-id": OutlookGraphPathParamValue };
  "subscriptions.subscription.DeleteSubscription": { "subscription-id": OutlookGraphPathParamValue };
}

export interface OutlookGraphSubscriptionsSubscriptionOperationRequestMap {
  "subscriptions.subscription.ListSubscription": OutlookGraphOperationInput<"subscriptions.subscription.ListSubscription">;
  "subscriptions.subscription.CreateSubscription": OutlookGraphOperationInput<"subscriptions.subscription.CreateSubscription">;
  "subscriptions.subscription.GetSubscription": OutlookGraphOperationInput<"subscriptions.subscription.GetSubscription">;
  "subscriptions.subscription.UpdateSubscription": OutlookGraphOperationInput<"subscriptions.subscription.UpdateSubscription">;
  "subscriptions.subscription.DeleteSubscription": OutlookGraphOperationInput<"subscriptions.subscription.DeleteSubscription">;
}

export interface OutlookGraphSubscriptionsSubscriptionGeneratedClient {
  SubscriptionsSubscriptionListSubscription(...args: OutlookGraphOperationArgs<"subscriptions.subscription.ListSubscription">): Promise<OutlookGraphOperationResponseMap["subscriptions.subscription.ListSubscription"]>;
  SubscriptionsSubscriptionCreateSubscription(...args: OutlookGraphOperationArgs<"subscriptions.subscription.CreateSubscription">): Promise<OutlookGraphOperationResponseMap["subscriptions.subscription.CreateSubscription"]>;
  SubscriptionsSubscriptionGetSubscription(...args: OutlookGraphOperationArgs<"subscriptions.subscription.GetSubscription">): Promise<OutlookGraphOperationResponseMap["subscriptions.subscription.GetSubscription"]>;
  SubscriptionsSubscriptionUpdateSubscription(...args: OutlookGraphOperationArgs<"subscriptions.subscription.UpdateSubscription">): Promise<OutlookGraphOperationResponseMap["subscriptions.subscription.UpdateSubscription"]>;
  SubscriptionsSubscriptionDeleteSubscription(...args: OutlookGraphOperationArgs<"subscriptions.subscription.DeleteSubscription">): Promise<OutlookGraphOperationResponseMap["subscriptions.subscription.DeleteSubscription"]>;
}

export const OutlookGraphSubscriptionsSubscriptionGeneratedFunctionNames = [
  "SubscriptionsSubscriptionListSubscription",
  "SubscriptionsSubscriptionCreateSubscription",
  "SubscriptionsSubscriptionGetSubscription",
  "SubscriptionsSubscriptionUpdateSubscription",
  "SubscriptionsSubscriptionDeleteSubscription"
] as const satisfies readonly (keyof OutlookGraphSubscriptionsSubscriptionGeneratedClient)[];

export function createOutlookGraphSubscriptionsSubscriptionGeneratedClient(
  callOperation: OutlookGraphGeneratedOperationCaller,
): OutlookGraphSubscriptionsSubscriptionGeneratedClient {
  return {
    SubscriptionsSubscriptionListSubscription: (...args) => callOperation("subscriptions.subscription.ListSubscription", ...(args as OutlookGraphOperationArgs<"subscriptions.subscription.ListSubscription">)),
    SubscriptionsSubscriptionCreateSubscription: (...args) => callOperation("subscriptions.subscription.CreateSubscription", ...(args as OutlookGraphOperationArgs<"subscriptions.subscription.CreateSubscription">)),
    SubscriptionsSubscriptionGetSubscription: (...args) => callOperation("subscriptions.subscription.GetSubscription", ...(args as OutlookGraphOperationArgs<"subscriptions.subscription.GetSubscription">)),
    SubscriptionsSubscriptionUpdateSubscription: (...args) => callOperation("subscriptions.subscription.UpdateSubscription", ...(args as OutlookGraphOperationArgs<"subscriptions.subscription.UpdateSubscription">)),
    SubscriptionsSubscriptionDeleteSubscription: (...args) => callOperation("subscriptions.subscription.DeleteSubscription", ...(args as OutlookGraphOperationArgs<"subscriptions.subscription.DeleteSubscription">)),
  };
}
