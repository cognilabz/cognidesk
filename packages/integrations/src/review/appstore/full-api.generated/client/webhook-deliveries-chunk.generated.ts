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
export const AppStoreFullApiWebhookDeliveriesOperationKeys = [
  "webhookDeliveries_createInstance"
] as const;
export type AppStoreFullApiWebhookDeliveriesOperationKey = typeof AppStoreFullApiWebhookDeliveriesOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiWebhookDeliveriesOperationPathParamMap {
  "webhookDeliveries_createInstance": {};
}

export interface AppStoreFullApiWebhookDeliveriesOperationRequestMap {
  "webhookDeliveries_createInstance": AppStoreFullApiOperationInput<"webhookDeliveries_createInstance">;
}

export interface AppStoreFullApiWebhookDeliveriesGeneratedClient {
  WebhookDeliveriesCreateInstance(...args: AppStoreFullApiOperationArgs<"webhookDeliveries_createInstance">): Promise<AppStoreFullApiOperationResponseMap["webhookDeliveries_createInstance"]>;
}

export const AppStoreFullApiWebhookDeliveriesGeneratedFunctionNames = [
  "WebhookDeliveriesCreateInstance"
] as const satisfies readonly (keyof AppStoreFullApiWebhookDeliveriesGeneratedClient)[];

export function createAppStoreFullApiWebhookDeliveriesGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiWebhookDeliveriesGeneratedClient {
  return {
    WebhookDeliveriesCreateInstance: (...args) => callOperation("webhookDeliveries_createInstance", ...(args as AppStoreFullApiOperationArgs<"webhookDeliveries_createInstance">)),
  };
}
