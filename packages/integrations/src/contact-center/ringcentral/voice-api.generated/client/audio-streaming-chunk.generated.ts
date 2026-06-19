// Generated endpoint chunk for RingCentralVoiceApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  RingCentralVoiceGeneratedOperationCaller,
  RingCentralVoiceApiOperationArgs,
  RingCentralVoiceApiOperationInput,
  RingCentralVoiceApiPathParamValue,
} from "../../voice-api-client.generated.js";
import type { RingCentralVoiceApiOperationResponseMap } from "../../voice-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const RingCentralVoiceApiAudioStreamingOperationKeys = [
  "PUT /platform/api/media/product",
  "POST /platform/api/media/product",
  "GET /platform/api/media/product/account/{subAccountId}/type/{productTypeString}/id/{productId}",
  "DELETE /platform/api/media/product/account/{subAccountId}/type/{productTypeString}/id/{productId}"
] as const;
export type RingCentralVoiceApiAudioStreamingOperationKey = typeof RingCentralVoiceApiAudioStreamingOperationKeys[number];
// End hardened literal operation keys.

export interface RingCentralVoiceApiAudioStreamingOperationPathParamMap {
  "PUT /platform/api/media/product": {};
  "POST /platform/api/media/product": {};
  "GET /platform/api/media/product/account/{subAccountId}/type/{productTypeString}/id/{productId}": { "subAccountId": RingCentralVoiceApiPathParamValue; "productTypeString": RingCentralVoiceApiPathParamValue; "productId": RingCentralVoiceApiPathParamValue };
  "DELETE /platform/api/media/product/account/{subAccountId}/type/{productTypeString}/id/{productId}": { "subAccountId": RingCentralVoiceApiPathParamValue; "productTypeString": RingCentralVoiceApiPathParamValue; "productId": RingCentralVoiceApiPathParamValue };
}

export interface RingCentralVoiceApiAudioStreamingOperationRequestMap {
  "PUT /platform/api/media/product": RingCentralVoiceApiOperationInput<"PUT /platform/api/media/product">;
  "POST /platform/api/media/product": RingCentralVoiceApiOperationInput<"POST /platform/api/media/product">;
  "GET /platform/api/media/product/account/{subAccountId}/type/{productTypeString}/id/{productId}": RingCentralVoiceApiOperationInput<"GET /platform/api/media/product/account/{subAccountId}/type/{productTypeString}/id/{productId}">;
  "DELETE /platform/api/media/product/account/{subAccountId}/type/{productTypeString}/id/{productId}": RingCentralVoiceApiOperationInput<"DELETE /platform/api/media/product/account/{subAccountId}/type/{productTypeString}/id/{productId}">;
}

export interface RingCentralVoiceApiAudioStreamingGeneratedClient {
  UpdateProduct(...args: RingCentralVoiceApiOperationArgs<"PUT /platform/api/media/product">): Promise<RingCentralVoiceApiOperationResponseMap["PUT /platform/api/media/product"]>;
  CreateProduct(...args: RingCentralVoiceApiOperationArgs<"POST /platform/api/media/product">): Promise<RingCentralVoiceApiOperationResponseMap["POST /platform/api/media/product"]>;
  GetProduct(...args: RingCentralVoiceApiOperationArgs<"GET /platform/api/media/product/account/{subAccountId}/type/{productTypeString}/id/{productId}">): Promise<RingCentralVoiceApiOperationResponseMap["GET /platform/api/media/product/account/{subAccountId}/type/{productTypeString}/id/{productId}"]>;
  DeleteProduct(...args: RingCentralVoiceApiOperationArgs<"DELETE /platform/api/media/product/account/{subAccountId}/type/{productTypeString}/id/{productId}">): Promise<RingCentralVoiceApiOperationResponseMap["DELETE /platform/api/media/product/account/{subAccountId}/type/{productTypeString}/id/{productId}"]>;
}

export const RingCentralVoiceApiAudioStreamingGeneratedFunctionNames = [
  "UpdateProduct",
  "CreateProduct",
  "GetProduct",
  "DeleteProduct"
] as const satisfies readonly (keyof RingCentralVoiceApiAudioStreamingGeneratedClient)[];

export function createRingCentralVoiceApiAudioStreamingGeneratedClient(
  callOperation: RingCentralVoiceGeneratedOperationCaller,
): RingCentralVoiceApiAudioStreamingGeneratedClient {
  return {
    UpdateProduct: (...args) => callOperation("PUT /platform/api/media/product", ...(args as RingCentralVoiceApiOperationArgs<"PUT /platform/api/media/product">)),
    CreateProduct: (...args) => callOperation("POST /platform/api/media/product", ...(args as RingCentralVoiceApiOperationArgs<"POST /platform/api/media/product">)),
    GetProduct: (...args) => callOperation("GET /platform/api/media/product/account/{subAccountId}/type/{productTypeString}/id/{productId}", ...(args as RingCentralVoiceApiOperationArgs<"GET /platform/api/media/product/account/{subAccountId}/type/{productTypeString}/id/{productId}">)),
    DeleteProduct: (...args) => callOperation("DELETE /platform/api/media/product/account/{subAccountId}/type/{productTypeString}/id/{productId}", ...(args as RingCentralVoiceApiOperationArgs<"DELETE /platform/api/media/product/account/{subAccountId}/type/{productTypeString}/id/{productId}">)),
  };
}
