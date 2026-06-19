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
export const AppStoreFullApiWebhookPingsOperationKeys = [
  "webhookPings_createInstance"
] as const;
export type AppStoreFullApiWebhookPingsOperationKey = typeof AppStoreFullApiWebhookPingsOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiWebhookPingsOperationPathParamMap {
  "webhookPings_createInstance": {};
}

export interface AppStoreFullApiWebhookPingsOperationRequestMap {
  "webhookPings_createInstance": AppStoreFullApiOperationInput<"webhookPings_createInstance">;
}

export interface AppStoreFullApiWebhookPingsGeneratedClient {
  WebhookPingsCreateInstance(...args: AppStoreFullApiOperationArgs<"webhookPings_createInstance">): Promise<AppStoreFullApiOperationResponseMap["webhookPings_createInstance"]>;
}

export const AppStoreFullApiWebhookPingsGeneratedFunctionNames = [
  "WebhookPingsCreateInstance"
] as const satisfies readonly (keyof AppStoreFullApiWebhookPingsGeneratedClient)[];

export function createAppStoreFullApiWebhookPingsGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiWebhookPingsGeneratedClient {
  return {
    WebhookPingsCreateInstance: (...args) => callOperation("webhookPings_createInstance", ...(args as AppStoreFullApiOperationArgs<"webhookPings_createInstance">)),
  };
}
