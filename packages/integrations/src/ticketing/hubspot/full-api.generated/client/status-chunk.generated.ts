// Generated endpoint chunk for HubSpotFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  HubSpotGeneratedOperationCaller,
  HubSpotFullApiOperationArgs,
  HubSpotFullApiOperationInput,
  HubSpotFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { HubSpotFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const HubSpotFullApiStatusOperationKeys = [
  "communication-preferences:subscriptions:2026-03:post-/communication-preferences/2026-03/links/generate_/communication-preferences/v4/links/generate",
  "communication-preferences:subscriptions:2026-03:get-/communication-preferences/2026-03/statuses/{subscriberIdString}",
  "communication-preferences:subscriptions:2026-03:post-/communication-preferences/2026-03/statuses/{subscriberIdString}",
  "communication-preferences:subscriptions:2026-03:get-/communication-preferences/2026-03/statuses/{subscriberIdString}/unsubscribe-all"
] as const;
export type HubSpotFullApiStatusOperationKey = typeof HubSpotFullApiStatusOperationKeys[number];
// End hardened literal operation keys.

export interface HubSpotFullApiStatusOperationPathParamMap {
  "communication-preferences:subscriptions:2026-03:post-/communication-preferences/2026-03/links/generate_/communication-preferences/v4/links/generate": {};
  "communication-preferences:subscriptions:2026-03:get-/communication-preferences/2026-03/statuses/{subscriberIdString}": { "subscriberIdString": HubSpotFullApiPathParamValue };
  "communication-preferences:subscriptions:2026-03:post-/communication-preferences/2026-03/statuses/{subscriberIdString}": { "subscriberIdString": HubSpotFullApiPathParamValue };
  "communication-preferences:subscriptions:2026-03:get-/communication-preferences/2026-03/statuses/{subscriberIdString}/unsubscribe-all": { "subscriberIdString": HubSpotFullApiPathParamValue };
}

export interface HubSpotFullApiStatusOperationRequestMap {
  "communication-preferences:subscriptions:2026-03:post-/communication-preferences/2026-03/links/generate_/communication-preferences/v4/links/generate": HubSpotFullApiOperationInput<"communication-preferences:subscriptions:2026-03:post-/communication-preferences/2026-03/links/generate_/communication-preferences/v4/links/generate">;
  "communication-preferences:subscriptions:2026-03:get-/communication-preferences/2026-03/statuses/{subscriberIdString}": HubSpotFullApiOperationInput<"communication-preferences:subscriptions:2026-03:get-/communication-preferences/2026-03/statuses/{subscriberIdString}">;
  "communication-preferences:subscriptions:2026-03:post-/communication-preferences/2026-03/statuses/{subscriberIdString}": HubSpotFullApiOperationInput<"communication-preferences:subscriptions:2026-03:post-/communication-preferences/2026-03/statuses/{subscriberIdString}">;
  "communication-preferences:subscriptions:2026-03:get-/communication-preferences/2026-03/statuses/{subscriberIdString}/unsubscribe-all": HubSpotFullApiOperationInput<"communication-preferences:subscriptions:2026-03:get-/communication-preferences/2026-03/statuses/{subscriberIdString}/unsubscribe-all">;
}

export interface HubSpotFullApiStatusGeneratedClient {
  SubscriptionsPostCommunicationPreferences202603LinksGenerateCommunicationPreferencesV4LinksGenerate(...args: HubSpotFullApiOperationArgs<"communication-preferences:subscriptions:2026-03:post-/communication-preferences/2026-03/links/generate_/communication-preferences/v4/links/generate">): Promise<HubSpotFullApiOperationResponseMap["communication-preferences:subscriptions:2026-03:post-/communication-preferences/2026-03/links/generate_/communication-preferences/v4/links/generate"]>;
  SubscriptionsGetCommunicationPreferences202603StatusesSubscriberIdString(...args: HubSpotFullApiOperationArgs<"communication-preferences:subscriptions:2026-03:get-/communication-preferences/2026-03/statuses/{subscriberIdString}">): Promise<HubSpotFullApiOperationResponseMap["communication-preferences:subscriptions:2026-03:get-/communication-preferences/2026-03/statuses/{subscriberIdString}"]>;
  SubscriptionsPostCommunicationPreferences202603StatusesSubscriberIdString(...args: HubSpotFullApiOperationArgs<"communication-preferences:subscriptions:2026-03:post-/communication-preferences/2026-03/statuses/{subscriberIdString}">): Promise<HubSpotFullApiOperationResponseMap["communication-preferences:subscriptions:2026-03:post-/communication-preferences/2026-03/statuses/{subscriberIdString}"]>;
  SubscriptionsGetCommunicationPreferences202603StatusesSubscriberIdStringUnsubscribeAll(...args: HubSpotFullApiOperationArgs<"communication-preferences:subscriptions:2026-03:get-/communication-preferences/2026-03/statuses/{subscriberIdString}/unsubscribe-all">): Promise<HubSpotFullApiOperationResponseMap["communication-preferences:subscriptions:2026-03:get-/communication-preferences/2026-03/statuses/{subscriberIdString}/unsubscribe-all"]>;
}

export const HubSpotFullApiStatusGeneratedFunctionNames = [
  "SubscriptionsPostCommunicationPreferences202603LinksGenerateCommunicationPreferencesV4LinksGenerate",
  "SubscriptionsGetCommunicationPreferences202603StatusesSubscriberIdString",
  "SubscriptionsPostCommunicationPreferences202603StatusesSubscriberIdString",
  "SubscriptionsGetCommunicationPreferences202603StatusesSubscriberIdStringUnsubscribeAll"
] as const satisfies readonly (keyof HubSpotFullApiStatusGeneratedClient)[];

export function createHubSpotFullApiStatusGeneratedClient(
  callOperation: HubSpotGeneratedOperationCaller,
): HubSpotFullApiStatusGeneratedClient {
  return {
    SubscriptionsPostCommunicationPreferences202603LinksGenerateCommunicationPreferencesV4LinksGenerate: (...args) => callOperation("communication-preferences:subscriptions:2026-03:post-/communication-preferences/2026-03/links/generate_/communication-preferences/v4/links/generate", ...(args as HubSpotFullApiOperationArgs<"communication-preferences:subscriptions:2026-03:post-/communication-preferences/2026-03/links/generate_/communication-preferences/v4/links/generate">)),
    SubscriptionsGetCommunicationPreferences202603StatusesSubscriberIdString: (...args) => callOperation("communication-preferences:subscriptions:2026-03:get-/communication-preferences/2026-03/statuses/{subscriberIdString}", ...(args as HubSpotFullApiOperationArgs<"communication-preferences:subscriptions:2026-03:get-/communication-preferences/2026-03/statuses/{subscriberIdString}">)),
    SubscriptionsPostCommunicationPreferences202603StatusesSubscriberIdString: (...args) => callOperation("communication-preferences:subscriptions:2026-03:post-/communication-preferences/2026-03/statuses/{subscriberIdString}", ...(args as HubSpotFullApiOperationArgs<"communication-preferences:subscriptions:2026-03:post-/communication-preferences/2026-03/statuses/{subscriberIdString}">)),
    SubscriptionsGetCommunicationPreferences202603StatusesSubscriberIdStringUnsubscribeAll: (...args) => callOperation("communication-preferences:subscriptions:2026-03:get-/communication-preferences/2026-03/statuses/{subscriberIdString}/unsubscribe-all", ...(args as HubSpotFullApiOperationArgs<"communication-preferences:subscriptions:2026-03:get-/communication-preferences/2026-03/statuses/{subscriberIdString}/unsubscribe-all">)),
  };
}
