// Generated endpoint chunk for AppStoreFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  AppStoreGeneratedOperationCaller,
  AppStoreFullApiOperationArgs,
  AppStoreFullApiOperationInput,
  AppStoreFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { AppStoreFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const AppStoreFullApiSubscriptionGroupsOperationKeys = [
  "subscriptionGroups_createInstance",
  "subscriptionGroups_deleteInstance",
  "subscriptionGroups_getInstance",
  "subscriptionGroups_subscriptionGroupLocalizations_getToManyRelated",
  "subscriptionGroups_subscriptionGroupLocalizations_getToManyRelationship",
  "subscriptionGroups_subscriptions_getToManyRelated",
  "subscriptionGroups_subscriptions_getToManyRelationship",
  "subscriptionGroups_updateInstance"
] as const;
export type AppStoreFullApiSubscriptionGroupsOperationKey = typeof AppStoreFullApiSubscriptionGroupsOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiSubscriptionGroupsOperationPathParamMap {
  "subscriptionGroups_createInstance": {};
  "subscriptionGroups_deleteInstance": { "id": AppStoreFullApiPathParamValue };
  "subscriptionGroups_getInstance": { "id": AppStoreFullApiPathParamValue };
  "subscriptionGroups_subscriptionGroupLocalizations_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "subscriptionGroups_subscriptionGroupLocalizations_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "subscriptionGroups_subscriptions_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "subscriptionGroups_subscriptions_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "subscriptionGroups_updateInstance": { "id": AppStoreFullApiPathParamValue };
}

export interface AppStoreFullApiSubscriptionGroupsOperationRequestMap {
  "subscriptionGroups_createInstance": AppStoreFullApiOperationInput<"subscriptionGroups_createInstance">;
  "subscriptionGroups_deleteInstance": AppStoreFullApiOperationInput<"subscriptionGroups_deleteInstance">;
  "subscriptionGroups_getInstance": AppStoreFullApiOperationInput<"subscriptionGroups_getInstance">;
  "subscriptionGroups_subscriptionGroupLocalizations_getToManyRelated": AppStoreFullApiOperationInput<"subscriptionGroups_subscriptionGroupLocalizations_getToManyRelated">;
  "subscriptionGroups_subscriptionGroupLocalizations_getToManyRelationship": AppStoreFullApiOperationInput<"subscriptionGroups_subscriptionGroupLocalizations_getToManyRelationship">;
  "subscriptionGroups_subscriptions_getToManyRelated": AppStoreFullApiOperationInput<"subscriptionGroups_subscriptions_getToManyRelated">;
  "subscriptionGroups_subscriptions_getToManyRelationship": AppStoreFullApiOperationInput<"subscriptionGroups_subscriptions_getToManyRelationship">;
  "subscriptionGroups_updateInstance": AppStoreFullApiOperationInput<"subscriptionGroups_updateInstance">;
}

export interface AppStoreFullApiSubscriptionGroupsGeneratedClient {
  SubscriptionGroupsCreateInstance(...args: AppStoreFullApiOperationArgs<"subscriptionGroups_createInstance">): Promise<AppStoreFullApiOperationResponseMap["subscriptionGroups_createInstance"]>;
  SubscriptionGroupsDeleteInstance(...args: AppStoreFullApiOperationArgs<"subscriptionGroups_deleteInstance">): Promise<AppStoreFullApiOperationResponseMap["subscriptionGroups_deleteInstance"]>;
  SubscriptionGroupsGetInstance(...args: AppStoreFullApiOperationArgs<"subscriptionGroups_getInstance">): Promise<AppStoreFullApiOperationResponseMap["subscriptionGroups_getInstance"]>;
  SubscriptionGroupsSubscriptionGroupLocalizationsGetToManyRelated(...args: AppStoreFullApiOperationArgs<"subscriptionGroups_subscriptionGroupLocalizations_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["subscriptionGroups_subscriptionGroupLocalizations_getToManyRelated"]>;
  SubscriptionGroupsSubscriptionGroupLocalizationsGetToManyRelationship(...args: AppStoreFullApiOperationArgs<"subscriptionGroups_subscriptionGroupLocalizations_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["subscriptionGroups_subscriptionGroupLocalizations_getToManyRelationship"]>;
  SubscriptionGroupsSubscriptionsGetToManyRelated(...args: AppStoreFullApiOperationArgs<"subscriptionGroups_subscriptions_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["subscriptionGroups_subscriptions_getToManyRelated"]>;
  SubscriptionGroupsSubscriptionsGetToManyRelationship(...args: AppStoreFullApiOperationArgs<"subscriptionGroups_subscriptions_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["subscriptionGroups_subscriptions_getToManyRelationship"]>;
  SubscriptionGroupsUpdateInstance(...args: AppStoreFullApiOperationArgs<"subscriptionGroups_updateInstance">): Promise<AppStoreFullApiOperationResponseMap["subscriptionGroups_updateInstance"]>;
}

export const AppStoreFullApiSubscriptionGroupsGeneratedFunctionNames = [
  "SubscriptionGroupsCreateInstance",
  "SubscriptionGroupsDeleteInstance",
  "SubscriptionGroupsGetInstance",
  "SubscriptionGroupsSubscriptionGroupLocalizationsGetToManyRelated",
  "SubscriptionGroupsSubscriptionGroupLocalizationsGetToManyRelationship",
  "SubscriptionGroupsSubscriptionsGetToManyRelated",
  "SubscriptionGroupsSubscriptionsGetToManyRelationship",
  "SubscriptionGroupsUpdateInstance"
] as const satisfies readonly (keyof AppStoreFullApiSubscriptionGroupsGeneratedClient)[];

export function createAppStoreFullApiSubscriptionGroupsGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiSubscriptionGroupsGeneratedClient {
  return {
    SubscriptionGroupsCreateInstance: (...args) => callOperation("subscriptionGroups_createInstance", ...(args as AppStoreFullApiOperationArgs<"subscriptionGroups_createInstance">)),
    SubscriptionGroupsDeleteInstance: (...args) => callOperation("subscriptionGroups_deleteInstance", ...(args as AppStoreFullApiOperationArgs<"subscriptionGroups_deleteInstance">)),
    SubscriptionGroupsGetInstance: (...args) => callOperation("subscriptionGroups_getInstance", ...(args as AppStoreFullApiOperationArgs<"subscriptionGroups_getInstance">)),
    SubscriptionGroupsSubscriptionGroupLocalizationsGetToManyRelated: (...args) => callOperation("subscriptionGroups_subscriptionGroupLocalizations_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"subscriptionGroups_subscriptionGroupLocalizations_getToManyRelated">)),
    SubscriptionGroupsSubscriptionGroupLocalizationsGetToManyRelationship: (...args) => callOperation("subscriptionGroups_subscriptionGroupLocalizations_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"subscriptionGroups_subscriptionGroupLocalizations_getToManyRelationship">)),
    SubscriptionGroupsSubscriptionsGetToManyRelated: (...args) => callOperation("subscriptionGroups_subscriptions_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"subscriptionGroups_subscriptions_getToManyRelated">)),
    SubscriptionGroupsSubscriptionsGetToManyRelationship: (...args) => callOperation("subscriptionGroups_subscriptions_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"subscriptionGroups_subscriptions_getToManyRelationship">)),
    SubscriptionGroupsUpdateInstance: (...args) => callOperation("subscriptionGroups_updateInstance", ...(args as AppStoreFullApiOperationArgs<"subscriptionGroups_updateInstance">)),
  };
}
