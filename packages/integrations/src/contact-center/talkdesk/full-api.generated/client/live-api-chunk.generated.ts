// Generated endpoint chunk for TalkdeskFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  TalkdeskGeneratedOperationCaller,
  TalkdeskFullApiOperationArgs,
  TalkdeskFullApiOperationInput,
  TalkdeskFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { TalkdeskFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const TalkdeskFullApiLiveAPIOperationKeys = [
  "live-subscriptions-post-2",
  "live-subscriptions-subscription-id-get-2",
  "live-subscriptions-subscription-id-stream-get",
  "live-subscriptions-subscription-id-entries-id-put-2",
  "live-queries-get-2"
] as const;
export type TalkdeskFullApiLiveAPIOperationKey = typeof TalkdeskFullApiLiveAPIOperationKeys[number];
// End hardened literal operation keys.

export interface TalkdeskFullApiLiveAPIOperationPathParamMap {
  "live-subscriptions-post-2": {};
  "live-subscriptions-subscription-id-get-2": { "subscription_id": TalkdeskFullApiPathParamValue };
  "live-subscriptions-subscription-id-stream-get": { "subscription_id": TalkdeskFullApiPathParamValue };
  "live-subscriptions-subscription-id-entries-id-put-2": { "subscription_id": TalkdeskFullApiPathParamValue; "id": TalkdeskFullApiPathParamValue };
  "live-queries-get-2": {};
}

export interface TalkdeskFullApiLiveAPIOperationRequestMap {
  "live-subscriptions-post-2": TalkdeskFullApiOperationInput<"live-subscriptions-post-2">;
  "live-subscriptions-subscription-id-get-2": TalkdeskFullApiOperationInput<"live-subscriptions-subscription-id-get-2">;
  "live-subscriptions-subscription-id-stream-get": TalkdeskFullApiOperationInput<"live-subscriptions-subscription-id-stream-get">;
  "live-subscriptions-subscription-id-entries-id-put-2": TalkdeskFullApiOperationInput<"live-subscriptions-subscription-id-entries-id-put-2">;
  "live-queries-get-2": TalkdeskFullApiOperationInput<"live-queries-get-2">;
}

export interface TalkdeskFullApiLiveAPIGeneratedClient {
  LiveSubscriptionsPost2(...args: TalkdeskFullApiOperationArgs<"live-subscriptions-post-2">): Promise<TalkdeskFullApiOperationResponseMap["live-subscriptions-post-2"]>;
  LiveSubscriptionsSubscriptionIdGet2(...args: TalkdeskFullApiOperationArgs<"live-subscriptions-subscription-id-get-2">): Promise<TalkdeskFullApiOperationResponseMap["live-subscriptions-subscription-id-get-2"]>;
  LiveSubscriptionsSubscriptionIdStreamGet(...args: TalkdeskFullApiOperationArgs<"live-subscriptions-subscription-id-stream-get">): Promise<TalkdeskFullApiOperationResponseMap["live-subscriptions-subscription-id-stream-get"]>;
  LiveSubscriptionsSubscriptionIdEntriesIdPut2(...args: TalkdeskFullApiOperationArgs<"live-subscriptions-subscription-id-entries-id-put-2">): Promise<TalkdeskFullApiOperationResponseMap["live-subscriptions-subscription-id-entries-id-put-2"]>;
  LiveQueriesGet2(...args: TalkdeskFullApiOperationArgs<"live-queries-get-2">): Promise<TalkdeskFullApiOperationResponseMap["live-queries-get-2"]>;
}

export const TalkdeskFullApiLiveAPIGeneratedFunctionNames = [
  "LiveSubscriptionsPost2",
  "LiveSubscriptionsSubscriptionIdGet2",
  "LiveSubscriptionsSubscriptionIdStreamGet",
  "LiveSubscriptionsSubscriptionIdEntriesIdPut2",
  "LiveQueriesGet2"
] as const satisfies readonly (keyof TalkdeskFullApiLiveAPIGeneratedClient)[];

export function createTalkdeskFullApiLiveAPIGeneratedClient(
  callOperation: TalkdeskGeneratedOperationCaller,
): TalkdeskFullApiLiveAPIGeneratedClient {
  return {
    LiveSubscriptionsPost2: (...args) => callOperation("live-subscriptions-post-2", ...(args as TalkdeskFullApiOperationArgs<"live-subscriptions-post-2">)),
    LiveSubscriptionsSubscriptionIdGet2: (...args) => callOperation("live-subscriptions-subscription-id-get-2", ...(args as TalkdeskFullApiOperationArgs<"live-subscriptions-subscription-id-get-2">)),
    LiveSubscriptionsSubscriptionIdStreamGet: (...args) => callOperation("live-subscriptions-subscription-id-stream-get", ...(args as TalkdeskFullApiOperationArgs<"live-subscriptions-subscription-id-stream-get">)),
    LiveSubscriptionsSubscriptionIdEntriesIdPut2: (...args) => callOperation("live-subscriptions-subscription-id-entries-id-put-2", ...(args as TalkdeskFullApiOperationArgs<"live-subscriptions-subscription-id-entries-id-put-2">)),
    LiveQueriesGet2: (...args) => callOperation("live-queries-get-2", ...(args as TalkdeskFullApiOperationArgs<"live-queries-get-2">)),
  };
}
