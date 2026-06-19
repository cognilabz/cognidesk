// Generated endpoint chunk for TeamsGraph.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  TeamsGraphGeneratedOperationCaller,
  TeamsGraphOperationArgs,
  TeamsGraphOperationInput,
  TeamsGraphPathParamValue,
} from "../../graph-api-client.generated.js";
import type { TeamsGraphOperationResponseMap } from "../../graph-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const TeamsGraphSubscriptionsSubscriptionOperationKeys = [
  "subscriptions.subscription.ListSubscription",
  "subscriptions.subscription.CreateSubscription",
  "subscriptions.subscription.GetSubscription",
  "subscriptions.subscription.UpdateSubscription",
  "subscriptions.subscription.DeleteSubscription"
] as const;
export type TeamsGraphSubscriptionsSubscriptionOperationKey = typeof TeamsGraphSubscriptionsSubscriptionOperationKeys[number];
// End hardened literal operation keys.

export interface TeamsGraphSubscriptionsSubscriptionOperationPathParamMap {
  "subscriptions.subscription.ListSubscription": {};
  "subscriptions.subscription.CreateSubscription": {};
  "subscriptions.subscription.GetSubscription": { "subscription-id": TeamsGraphPathParamValue };
  "subscriptions.subscription.UpdateSubscription": { "subscription-id": TeamsGraphPathParamValue };
  "subscriptions.subscription.DeleteSubscription": { "subscription-id": TeamsGraphPathParamValue };
}

export interface TeamsGraphSubscriptionsSubscriptionOperationRequestMap {
  "subscriptions.subscription.ListSubscription": TeamsGraphOperationInput<"subscriptions.subscription.ListSubscription">;
  "subscriptions.subscription.CreateSubscription": TeamsGraphOperationInput<"subscriptions.subscription.CreateSubscription">;
  "subscriptions.subscription.GetSubscription": TeamsGraphOperationInput<"subscriptions.subscription.GetSubscription">;
  "subscriptions.subscription.UpdateSubscription": TeamsGraphOperationInput<"subscriptions.subscription.UpdateSubscription">;
  "subscriptions.subscription.DeleteSubscription": TeamsGraphOperationInput<"subscriptions.subscription.DeleteSubscription">;
}

export interface TeamsGraphSubscriptionsSubscriptionGeneratedClient {
  SubscriptionsSubscriptionListSubscription(...args: TeamsGraphOperationArgs<"subscriptions.subscription.ListSubscription">): Promise<TeamsGraphOperationResponseMap["subscriptions.subscription.ListSubscription"]>;
  SubscriptionsSubscriptionCreateSubscription(...args: TeamsGraphOperationArgs<"subscriptions.subscription.CreateSubscription">): Promise<TeamsGraphOperationResponseMap["subscriptions.subscription.CreateSubscription"]>;
  SubscriptionsSubscriptionGetSubscription(...args: TeamsGraphOperationArgs<"subscriptions.subscription.GetSubscription">): Promise<TeamsGraphOperationResponseMap["subscriptions.subscription.GetSubscription"]>;
  SubscriptionsSubscriptionUpdateSubscription(...args: TeamsGraphOperationArgs<"subscriptions.subscription.UpdateSubscription">): Promise<TeamsGraphOperationResponseMap["subscriptions.subscription.UpdateSubscription"]>;
  SubscriptionsSubscriptionDeleteSubscription(...args: TeamsGraphOperationArgs<"subscriptions.subscription.DeleteSubscription">): Promise<TeamsGraphOperationResponseMap["subscriptions.subscription.DeleteSubscription"]>;
}

export const TeamsGraphSubscriptionsSubscriptionGeneratedFunctionNames = [
  "SubscriptionsSubscriptionListSubscription",
  "SubscriptionsSubscriptionCreateSubscription",
  "SubscriptionsSubscriptionGetSubscription",
  "SubscriptionsSubscriptionUpdateSubscription",
  "SubscriptionsSubscriptionDeleteSubscription"
] as const satisfies readonly (keyof TeamsGraphSubscriptionsSubscriptionGeneratedClient)[];

export function createTeamsGraphSubscriptionsSubscriptionGeneratedClient(
  callOperation: TeamsGraphGeneratedOperationCaller,
): TeamsGraphSubscriptionsSubscriptionGeneratedClient {
  return {
    SubscriptionsSubscriptionListSubscription: (...args) => callOperation("subscriptions.subscription.ListSubscription", ...(args as TeamsGraphOperationArgs<"subscriptions.subscription.ListSubscription">)),
    SubscriptionsSubscriptionCreateSubscription: (...args) => callOperation("subscriptions.subscription.CreateSubscription", ...(args as TeamsGraphOperationArgs<"subscriptions.subscription.CreateSubscription">)),
    SubscriptionsSubscriptionGetSubscription: (...args) => callOperation("subscriptions.subscription.GetSubscription", ...(args as TeamsGraphOperationArgs<"subscriptions.subscription.GetSubscription">)),
    SubscriptionsSubscriptionUpdateSubscription: (...args) => callOperation("subscriptions.subscription.UpdateSubscription", ...(args as TeamsGraphOperationArgs<"subscriptions.subscription.UpdateSubscription">)),
    SubscriptionsSubscriptionDeleteSubscription: (...args) => callOperation("subscriptions.subscription.DeleteSubscription", ...(args as TeamsGraphOperationArgs<"subscriptions.subscription.DeleteSubscription">)),
  };
}
