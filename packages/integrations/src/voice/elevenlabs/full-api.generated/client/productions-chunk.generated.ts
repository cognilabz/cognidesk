// Generated endpoint chunk for ElevenLabsFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  ElevenLabsGeneratedOperationCaller,
  ElevenLabsFullApiOperationArgs,
  ElevenLabsFullApiOperationInput,
  ElevenLabsFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { ElevenLabsFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const ElevenLabsFullApiProductionsOperationKeys = [
  "POST /v1/productions/orders",
  "GET /v1/productions/orders",
  "GET /v1/productions/orders/{order_id}",
  "PATCH /v1/productions/orders/{order_id}",
  "POST /v1/productions/orders/{order_id}/media",
  "GET /v1/productions/orders/{order_id}/media/{media_id}",
  "POST /v1/productions/orders/{order_id}/items",
  "DELETE /v1/productions/orders/{order_id}/items/{item_id}",
  "POST /v1/productions/orders/{order_id}/submit",
  "GET /v1/productions/orders/{order_id}/deliverables",
  "GET /v1/productions/orders/languages/{order_item_kind}"
] as const;
export type ElevenLabsFullApiProductionsOperationKey = typeof ElevenLabsFullApiProductionsOperationKeys[number];
// End hardened literal operation keys.

export interface ElevenLabsFullApiProductionsOperationPathParamMap {
  "POST /v1/productions/orders": {};
  "GET /v1/productions/orders": {};
  "GET /v1/productions/orders/{order_id}": { "order_id": ElevenLabsFullApiPathParamValue };
  "PATCH /v1/productions/orders/{order_id}": { "order_id": ElevenLabsFullApiPathParamValue };
  "POST /v1/productions/orders/{order_id}/media": { "order_id": ElevenLabsFullApiPathParamValue };
  "GET /v1/productions/orders/{order_id}/media/{media_id}": { "order_id": ElevenLabsFullApiPathParamValue; "media_id": ElevenLabsFullApiPathParamValue };
  "POST /v1/productions/orders/{order_id}/items": { "order_id": ElevenLabsFullApiPathParamValue };
  "DELETE /v1/productions/orders/{order_id}/items/{item_id}": { "order_id": ElevenLabsFullApiPathParamValue; "item_id": ElevenLabsFullApiPathParamValue };
  "POST /v1/productions/orders/{order_id}/submit": { "order_id": ElevenLabsFullApiPathParamValue };
  "GET /v1/productions/orders/{order_id}/deliverables": { "order_id": ElevenLabsFullApiPathParamValue };
  "GET /v1/productions/orders/languages/{order_item_kind}": { "order_item_kind": ElevenLabsFullApiPathParamValue };
}

export interface ElevenLabsFullApiProductionsOperationRequestMap {
  "POST /v1/productions/orders": ElevenLabsFullApiOperationInput<"POST /v1/productions/orders">;
  "GET /v1/productions/orders": ElevenLabsFullApiOperationInput<"GET /v1/productions/orders">;
  "GET /v1/productions/orders/{order_id}": ElevenLabsFullApiOperationInput<"GET /v1/productions/orders/{order_id}">;
  "PATCH /v1/productions/orders/{order_id}": ElevenLabsFullApiOperationInput<"PATCH /v1/productions/orders/{order_id}">;
  "POST /v1/productions/orders/{order_id}/media": ElevenLabsFullApiOperationInput<"POST /v1/productions/orders/{order_id}/media">;
  "GET /v1/productions/orders/{order_id}/media/{media_id}": ElevenLabsFullApiOperationInput<"GET /v1/productions/orders/{order_id}/media/{media_id}">;
  "POST /v1/productions/orders/{order_id}/items": ElevenLabsFullApiOperationInput<"POST /v1/productions/orders/{order_id}/items">;
  "DELETE /v1/productions/orders/{order_id}/items/{item_id}": ElevenLabsFullApiOperationInput<"DELETE /v1/productions/orders/{order_id}/items/{item_id}">;
  "POST /v1/productions/orders/{order_id}/submit": ElevenLabsFullApiOperationInput<"POST /v1/productions/orders/{order_id}/submit">;
  "GET /v1/productions/orders/{order_id}/deliverables": ElevenLabsFullApiOperationInput<"GET /v1/productions/orders/{order_id}/deliverables">;
  "GET /v1/productions/orders/languages/{order_item_kind}": ElevenLabsFullApiOperationInput<"GET /v1/productions/orders/languages/{order_item_kind}">;
}

export interface ElevenLabsFullApiProductionsGeneratedClient {
  PublicCreateOrder(...args: ElevenLabsFullApiOperationArgs<"POST /v1/productions/orders">): Promise<ElevenLabsFullApiOperationResponseMap["POST /v1/productions/orders"]>;
  PublicListOrders(...args: ElevenLabsFullApiOperationArgs<"GET /v1/productions/orders">): Promise<ElevenLabsFullApiOperationResponseMap["GET /v1/productions/orders"]>;
  PublicGetOrder(...args: ElevenLabsFullApiOperationArgs<"GET /v1/productions/orders/{order_id}">): Promise<ElevenLabsFullApiOperationResponseMap["GET /v1/productions/orders/{order_id}"]>;
  PublicUpdateOrder(...args: ElevenLabsFullApiOperationArgs<"PATCH /v1/productions/orders/{order_id}">): Promise<ElevenLabsFullApiOperationResponseMap["PATCH /v1/productions/orders/{order_id}"]>;
  PublicRegisterMedia(...args: ElevenLabsFullApiOperationArgs<"POST /v1/productions/orders/{order_id}/media">): Promise<ElevenLabsFullApiOperationResponseMap["POST /v1/productions/orders/{order_id}/media"]>;
  PublicGetMediaInfo(...args: ElevenLabsFullApiOperationArgs<"GET /v1/productions/orders/{order_id}/media/{media_id}">): Promise<ElevenLabsFullApiOperationResponseMap["GET /v1/productions/orders/{order_id}/media/{media_id}"]>;
  PublicUpsertOrderItem(...args: ElevenLabsFullApiOperationArgs<"POST /v1/productions/orders/{order_id}/items">): Promise<ElevenLabsFullApiOperationResponseMap["POST /v1/productions/orders/{order_id}/items"]>;
  PublicRemoveOrderItem(...args: ElevenLabsFullApiOperationArgs<"DELETE /v1/productions/orders/{order_id}/items/{item_id}">): Promise<ElevenLabsFullApiOperationResponseMap["DELETE /v1/productions/orders/{order_id}/items/{item_id}"]>;
  PublicSubmitOrder(...args: ElevenLabsFullApiOperationArgs<"POST /v1/productions/orders/{order_id}/submit">): Promise<ElevenLabsFullApiOperationResponseMap["POST /v1/productions/orders/{order_id}/submit"]>;
  PublicGetOrderDeliverables(...args: ElevenLabsFullApiOperationArgs<"GET /v1/productions/orders/{order_id}/deliverables">): Promise<ElevenLabsFullApiOperationResponseMap["GET /v1/productions/orders/{order_id}/deliverables"]>;
  PublicGetAvailableLanguages(...args: ElevenLabsFullApiOperationArgs<"GET /v1/productions/orders/languages/{order_item_kind}">): Promise<ElevenLabsFullApiOperationResponseMap["GET /v1/productions/orders/languages/{order_item_kind}"]>;
}

export const ElevenLabsFullApiProductionsGeneratedFunctionNames = [
  "PublicCreateOrder",
  "PublicListOrders",
  "PublicGetOrder",
  "PublicUpdateOrder",
  "PublicRegisterMedia",
  "PublicGetMediaInfo",
  "PublicUpsertOrderItem",
  "PublicRemoveOrderItem",
  "PublicSubmitOrder",
  "PublicGetOrderDeliverables",
  "PublicGetAvailableLanguages"
] as const satisfies readonly (keyof ElevenLabsFullApiProductionsGeneratedClient)[];

export function createElevenLabsFullApiProductionsGeneratedClient(
  callOperation: ElevenLabsGeneratedOperationCaller,
): ElevenLabsFullApiProductionsGeneratedClient {
  return {
    PublicCreateOrder: (...args) => callOperation("POST /v1/productions/orders", ...(args as ElevenLabsFullApiOperationArgs<"POST /v1/productions/orders">)),
    PublicListOrders: (...args) => callOperation("GET /v1/productions/orders", ...(args as ElevenLabsFullApiOperationArgs<"GET /v1/productions/orders">)),
    PublicGetOrder: (...args) => callOperation("GET /v1/productions/orders/{order_id}", ...(args as ElevenLabsFullApiOperationArgs<"GET /v1/productions/orders/{order_id}">)),
    PublicUpdateOrder: (...args) => callOperation("PATCH /v1/productions/orders/{order_id}", ...(args as ElevenLabsFullApiOperationArgs<"PATCH /v1/productions/orders/{order_id}">)),
    PublicRegisterMedia: (...args) => callOperation("POST /v1/productions/orders/{order_id}/media", ...(args as ElevenLabsFullApiOperationArgs<"POST /v1/productions/orders/{order_id}/media">)),
    PublicGetMediaInfo: (...args) => callOperation("GET /v1/productions/orders/{order_id}/media/{media_id}", ...(args as ElevenLabsFullApiOperationArgs<"GET /v1/productions/orders/{order_id}/media/{media_id}">)),
    PublicUpsertOrderItem: (...args) => callOperation("POST /v1/productions/orders/{order_id}/items", ...(args as ElevenLabsFullApiOperationArgs<"POST /v1/productions/orders/{order_id}/items">)),
    PublicRemoveOrderItem: (...args) => callOperation("DELETE /v1/productions/orders/{order_id}/items/{item_id}", ...(args as ElevenLabsFullApiOperationArgs<"DELETE /v1/productions/orders/{order_id}/items/{item_id}">)),
    PublicSubmitOrder: (...args) => callOperation("POST /v1/productions/orders/{order_id}/submit", ...(args as ElevenLabsFullApiOperationArgs<"POST /v1/productions/orders/{order_id}/submit">)),
    PublicGetOrderDeliverables: (...args) => callOperation("GET /v1/productions/orders/{order_id}/deliverables", ...(args as ElevenLabsFullApiOperationArgs<"GET /v1/productions/orders/{order_id}/deliverables">)),
    PublicGetAvailableLanguages: (...args) => callOperation("GET /v1/productions/orders/languages/{order_item_kind}", ...(args as ElevenLabsFullApiOperationArgs<"GET /v1/productions/orders/languages/{order_item_kind}">)),
  };
}
