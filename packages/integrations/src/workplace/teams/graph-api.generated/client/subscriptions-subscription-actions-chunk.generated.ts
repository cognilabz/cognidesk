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
export const TeamsGraphSubscriptionsSubscriptionActionsOperationKeys = [
  "subscriptions.subscription.reauthorize"
] as const;
export type TeamsGraphSubscriptionsSubscriptionActionsOperationKey = typeof TeamsGraphSubscriptionsSubscriptionActionsOperationKeys[number];
// End hardened literal operation keys.

export interface TeamsGraphSubscriptionsSubscriptionActionsOperationPathParamMap {
  "subscriptions.subscription.reauthorize": { "subscription-id": TeamsGraphPathParamValue };
}

export interface TeamsGraphSubscriptionsSubscriptionActionsOperationRequestMap {
  "subscriptions.subscription.reauthorize": TeamsGraphOperationInput<"subscriptions.subscription.reauthorize">;
}

export interface TeamsGraphSubscriptionsSubscriptionActionsGeneratedClient {
  SubscriptionsSubscriptionReauthorize(...args: TeamsGraphOperationArgs<"subscriptions.subscription.reauthorize">): Promise<TeamsGraphOperationResponseMap["subscriptions.subscription.reauthorize"]>;
}

export const TeamsGraphSubscriptionsSubscriptionActionsGeneratedFunctionNames = [
  "SubscriptionsSubscriptionReauthorize"
] as const satisfies readonly (keyof TeamsGraphSubscriptionsSubscriptionActionsGeneratedClient)[];

export function createTeamsGraphSubscriptionsSubscriptionActionsGeneratedClient(
  callOperation: TeamsGraphGeneratedOperationCaller,
): TeamsGraphSubscriptionsSubscriptionActionsGeneratedClient {
  return {
    SubscriptionsSubscriptionReauthorize: (...args) => callOperation("subscriptions.subscription.reauthorize", ...(args as TeamsGraphOperationArgs<"subscriptions.subscription.reauthorize">)),
  };
}
