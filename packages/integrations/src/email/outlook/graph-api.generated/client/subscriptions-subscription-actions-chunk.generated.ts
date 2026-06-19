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
export const OutlookGraphSubscriptionsSubscriptionActionsOperationKeys = [
  "subscriptions.subscription.reauthorize"
] as const;
export type OutlookGraphSubscriptionsSubscriptionActionsOperationKey = typeof OutlookGraphSubscriptionsSubscriptionActionsOperationKeys[number];
// End hardened literal operation keys.

export interface OutlookGraphSubscriptionsSubscriptionActionsOperationPathParamMap {
  "subscriptions.subscription.reauthorize": { "subscription-id": OutlookGraphPathParamValue };
}

export interface OutlookGraphSubscriptionsSubscriptionActionsOperationRequestMap {
  "subscriptions.subscription.reauthorize": OutlookGraphOperationInput<"subscriptions.subscription.reauthorize">;
}

export interface OutlookGraphSubscriptionsSubscriptionActionsGeneratedClient {
  SubscriptionsSubscriptionReauthorize(...args: OutlookGraphOperationArgs<"subscriptions.subscription.reauthorize">): Promise<OutlookGraphOperationResponseMap["subscriptions.subscription.reauthorize"]>;
}

export const OutlookGraphSubscriptionsSubscriptionActionsGeneratedFunctionNames = [
  "SubscriptionsSubscriptionReauthorize"
] as const satisfies readonly (keyof OutlookGraphSubscriptionsSubscriptionActionsGeneratedClient)[];

export function createOutlookGraphSubscriptionsSubscriptionActionsGeneratedClient(
  callOperation: OutlookGraphGeneratedOperationCaller,
): OutlookGraphSubscriptionsSubscriptionActionsGeneratedClient {
  return {
    SubscriptionsSubscriptionReauthorize: (...args) => callOperation("subscriptions.subscription.reauthorize", ...(args as OutlookGraphOperationArgs<"subscriptions.subscription.reauthorize">)),
  };
}
