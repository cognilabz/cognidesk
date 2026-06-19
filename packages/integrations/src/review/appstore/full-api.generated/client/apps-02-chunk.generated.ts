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
export const AppStoreFullApiApps02OperationKeys = [
  "apps_subscriptionGracePeriod_getToOneRelationship",
  "apps_subscriptionGroups_getToManyRelated",
  "apps_subscriptionGroups_getToManyRelationship",
  "apps_updateInstance",
  "apps_webhooks_getToManyRelated",
  "apps_webhooks_getToManyRelationship"
] as const;
export type AppStoreFullApiApps02OperationKey = typeof AppStoreFullApiApps02OperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiApps02OperationPathParamMap {
  "apps_subscriptionGracePeriod_getToOneRelationship": { "id": AppStoreFullApiPathParamValue };
  "apps_subscriptionGroups_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "apps_subscriptionGroups_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "apps_updateInstance": { "id": AppStoreFullApiPathParamValue };
  "apps_webhooks_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "apps_webhooks_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
}

export interface AppStoreFullApiApps02OperationRequestMap {
  "apps_subscriptionGracePeriod_getToOneRelationship": AppStoreFullApiOperationInput<"apps_subscriptionGracePeriod_getToOneRelationship">;
  "apps_subscriptionGroups_getToManyRelated": AppStoreFullApiOperationInput<"apps_subscriptionGroups_getToManyRelated">;
  "apps_subscriptionGroups_getToManyRelationship": AppStoreFullApiOperationInput<"apps_subscriptionGroups_getToManyRelationship">;
  "apps_updateInstance": AppStoreFullApiOperationInput<"apps_updateInstance">;
  "apps_webhooks_getToManyRelated": AppStoreFullApiOperationInput<"apps_webhooks_getToManyRelated">;
  "apps_webhooks_getToManyRelationship": AppStoreFullApiOperationInput<"apps_webhooks_getToManyRelationship">;
}

export interface AppStoreFullApiApps02GeneratedClient {
  AppsSubscriptionGracePeriodGetToOneRelationship(...args: AppStoreFullApiOperationArgs<"apps_subscriptionGracePeriod_getToOneRelationship">): Promise<AppStoreFullApiOperationResponseMap["apps_subscriptionGracePeriod_getToOneRelationship"]>;
  AppsSubscriptionGroupsGetToManyRelated(...args: AppStoreFullApiOperationArgs<"apps_subscriptionGroups_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["apps_subscriptionGroups_getToManyRelated"]>;
  AppsSubscriptionGroupsGetToManyRelationship(...args: AppStoreFullApiOperationArgs<"apps_subscriptionGroups_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["apps_subscriptionGroups_getToManyRelationship"]>;
  AppsUpdateInstance(...args: AppStoreFullApiOperationArgs<"apps_updateInstance">): Promise<AppStoreFullApiOperationResponseMap["apps_updateInstance"]>;
  AppsWebhooksGetToManyRelated(...args: AppStoreFullApiOperationArgs<"apps_webhooks_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["apps_webhooks_getToManyRelated"]>;
  AppsWebhooksGetToManyRelationship(...args: AppStoreFullApiOperationArgs<"apps_webhooks_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["apps_webhooks_getToManyRelationship"]>;
}

export const AppStoreFullApiApps02GeneratedFunctionNames = [
  "AppsSubscriptionGracePeriodGetToOneRelationship",
  "AppsSubscriptionGroupsGetToManyRelated",
  "AppsSubscriptionGroupsGetToManyRelationship",
  "AppsUpdateInstance",
  "AppsWebhooksGetToManyRelated",
  "AppsWebhooksGetToManyRelationship"
] as const satisfies readonly (keyof AppStoreFullApiApps02GeneratedClient)[];

export function createAppStoreFullApiApps02GeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiApps02GeneratedClient {
  return {
    AppsSubscriptionGracePeriodGetToOneRelationship: (...args) => callOperation("apps_subscriptionGracePeriod_getToOneRelationship", ...(args as AppStoreFullApiOperationArgs<"apps_subscriptionGracePeriod_getToOneRelationship">)),
    AppsSubscriptionGroupsGetToManyRelated: (...args) => callOperation("apps_subscriptionGroups_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"apps_subscriptionGroups_getToManyRelated">)),
    AppsSubscriptionGroupsGetToManyRelationship: (...args) => callOperation("apps_subscriptionGroups_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"apps_subscriptionGroups_getToManyRelationship">)),
    AppsUpdateInstance: (...args) => callOperation("apps_updateInstance", ...(args as AppStoreFullApiOperationArgs<"apps_updateInstance">)),
    AppsWebhooksGetToManyRelated: (...args) => callOperation("apps_webhooks_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"apps_webhooks_getToManyRelated">)),
    AppsWebhooksGetToManyRelationship: (...args) => callOperation("apps_webhooks_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"apps_webhooks_getToManyRelationship">)),
  };
}
