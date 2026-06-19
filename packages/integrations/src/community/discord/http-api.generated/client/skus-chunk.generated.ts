// Generated endpoint chunk for DiscordHttpApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  DiscordHttpApiGeneratedOperationCaller,
  DiscordHttpApiOperationArgs,
  DiscordHttpApiOperationInput,
  DiscordHttpApiPathParamValue,
} from "../../http-api-client.generated.js";
import type { DiscordHttpApiOperationResponseMap } from "../../http-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const DiscordHttpApiSkusOperationKeys = [
  "GET /skus/{sku_id}/subscriptions",
  "GET /skus/{sku_id}/subscriptions/{subscription_id}"
] as const;
export type DiscordHttpApiSkusOperationKey = typeof DiscordHttpApiSkusOperationKeys[number];
// End hardened literal operation keys.

export interface DiscordHttpApiSkusOperationPathParamMap {
  "GET /skus/{sku_id}/subscriptions": { "sku_id": DiscordHttpApiPathParamValue };
  "GET /skus/{sku_id}/subscriptions/{subscription_id}": { "sku_id": DiscordHttpApiPathParamValue; "subscription_id": DiscordHttpApiPathParamValue };
}

export interface DiscordHttpApiSkusOperationRequestMap {
  "GET /skus/{sku_id}/subscriptions": DiscordHttpApiOperationInput<"GET /skus/{sku_id}/subscriptions">;
  "GET /skus/{sku_id}/subscriptions/{subscription_id}": DiscordHttpApiOperationInput<"GET /skus/{sku_id}/subscriptions/{subscription_id}">;
}

export interface DiscordHttpApiSkusGeneratedClient {
  GetSkuSubscriptions(...args: DiscordHttpApiOperationArgs<"GET /skus/{sku_id}/subscriptions">): Promise<DiscordHttpApiOperationResponseMap["GET /skus/{sku_id}/subscriptions"]>;
  GetSkuSubscription(...args: DiscordHttpApiOperationArgs<"GET /skus/{sku_id}/subscriptions/{subscription_id}">): Promise<DiscordHttpApiOperationResponseMap["GET /skus/{sku_id}/subscriptions/{subscription_id}"]>;
}

export const DiscordHttpApiSkusGeneratedFunctionNames = [
  "GetSkuSubscriptions",
  "GetSkuSubscription"
] as const satisfies readonly (keyof DiscordHttpApiSkusGeneratedClient)[];

export function createDiscordHttpApiSkusGeneratedClient(
  callOperation: DiscordHttpApiGeneratedOperationCaller,
): DiscordHttpApiSkusGeneratedClient {
  return {
    GetSkuSubscriptions: (...args) => callOperation("GET /skus/{sku_id}/subscriptions", ...(args as DiscordHttpApiOperationArgs<"GET /skus/{sku_id}/subscriptions">)),
    GetSkuSubscription: (...args) => callOperation("GET /skus/{sku_id}/subscriptions/{subscription_id}", ...(args as DiscordHttpApiOperationArgs<"GET /skus/{sku_id}/subscriptions/{subscription_id}">)),
  };
}
