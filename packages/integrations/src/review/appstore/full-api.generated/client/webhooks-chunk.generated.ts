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
export const AppStoreFullApiWebhooksOperationKeys = [
  "webhooks_createInstance",
  "webhooks_deleteInstance",
  "webhooks_deliveries_getToManyRelated",
  "webhooks_deliveries_getToManyRelationship",
  "webhooks_getInstance",
  "webhooks_updateInstance"
] as const;
export type AppStoreFullApiWebhooksOperationKey = typeof AppStoreFullApiWebhooksOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiWebhooksOperationPathParamMap {
  "webhooks_createInstance": {};
  "webhooks_deleteInstance": { "id": AppStoreFullApiPathParamValue };
  "webhooks_deliveries_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "webhooks_deliveries_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "webhooks_getInstance": { "id": AppStoreFullApiPathParamValue };
  "webhooks_updateInstance": { "id": AppStoreFullApiPathParamValue };
}

export interface AppStoreFullApiWebhooksOperationRequestMap {
  "webhooks_createInstance": AppStoreFullApiOperationInput<"webhooks_createInstance">;
  "webhooks_deleteInstance": AppStoreFullApiOperationInput<"webhooks_deleteInstance">;
  "webhooks_deliveries_getToManyRelated": AppStoreFullApiOperationInput<"webhooks_deliveries_getToManyRelated">;
  "webhooks_deliveries_getToManyRelationship": AppStoreFullApiOperationInput<"webhooks_deliveries_getToManyRelationship">;
  "webhooks_getInstance": AppStoreFullApiOperationInput<"webhooks_getInstance">;
  "webhooks_updateInstance": AppStoreFullApiOperationInput<"webhooks_updateInstance">;
}

export interface AppStoreFullApiWebhooksGeneratedClient {
  WebhooksCreateInstance(...args: AppStoreFullApiOperationArgs<"webhooks_createInstance">): Promise<AppStoreFullApiOperationResponseMap["webhooks_createInstance"]>;
  WebhooksDeleteInstance(...args: AppStoreFullApiOperationArgs<"webhooks_deleteInstance">): Promise<AppStoreFullApiOperationResponseMap["webhooks_deleteInstance"]>;
  WebhooksDeliveriesGetToManyRelated(...args: AppStoreFullApiOperationArgs<"webhooks_deliveries_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["webhooks_deliveries_getToManyRelated"]>;
  WebhooksDeliveriesGetToManyRelationship(...args: AppStoreFullApiOperationArgs<"webhooks_deliveries_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["webhooks_deliveries_getToManyRelationship"]>;
  WebhooksGetInstance(...args: AppStoreFullApiOperationArgs<"webhooks_getInstance">): Promise<AppStoreFullApiOperationResponseMap["webhooks_getInstance"]>;
  WebhooksUpdateInstance(...args: AppStoreFullApiOperationArgs<"webhooks_updateInstance">): Promise<AppStoreFullApiOperationResponseMap["webhooks_updateInstance"]>;
}

export const AppStoreFullApiWebhooksGeneratedFunctionNames = [
  "WebhooksCreateInstance",
  "WebhooksDeleteInstance",
  "WebhooksDeliveriesGetToManyRelated",
  "WebhooksDeliveriesGetToManyRelationship",
  "WebhooksGetInstance",
  "WebhooksUpdateInstance"
] as const satisfies readonly (keyof AppStoreFullApiWebhooksGeneratedClient)[];

export function createAppStoreFullApiWebhooksGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiWebhooksGeneratedClient {
  return {
    WebhooksCreateInstance: (...args) => callOperation("webhooks_createInstance", ...(args as AppStoreFullApiOperationArgs<"webhooks_createInstance">)),
    WebhooksDeleteInstance: (...args) => callOperation("webhooks_deleteInstance", ...(args as AppStoreFullApiOperationArgs<"webhooks_deleteInstance">)),
    WebhooksDeliveriesGetToManyRelated: (...args) => callOperation("webhooks_deliveries_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"webhooks_deliveries_getToManyRelated">)),
    WebhooksDeliveriesGetToManyRelationship: (...args) => callOperation("webhooks_deliveries_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"webhooks_deliveries_getToManyRelationship">)),
    WebhooksGetInstance: (...args) => callOperation("webhooks_getInstance", ...(args as AppStoreFullApiOperationArgs<"webhooks_getInstance">)),
    WebhooksUpdateInstance: (...args) => callOperation("webhooks_updateInstance", ...(args as AppStoreFullApiOperationArgs<"webhooks_updateInstance">)),
  };
}
