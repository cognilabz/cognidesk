// Generated endpoint chunk for RingCentralDigitalApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  RingCentralDigitalGeneratedOperationCaller,
  RingCentralDigitalApiOperationArgs,
  RingCentralDigitalApiOperationInput,
  RingCentralDigitalApiPathParamValue,
} from "../../digital-api-client.generated.js";
import type { RingCentralDigitalApiOperationResponseMap } from "../../digital-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const RingCentralDigitalApiCategoriesOperationKeys = [
  "GET /categories",
  "POST /categories",
  "DELETE /categories/{categoryId}",
  "GET /categories/{categoryId}",
  "PUT /categories/{categoryId}"
] as const;
export type RingCentralDigitalApiCategoriesOperationKey = typeof RingCentralDigitalApiCategoriesOperationKeys[number];
// End hardened literal operation keys.

export interface RingCentralDigitalApiCategoriesOperationPathParamMap {
  "GET /categories": {};
  "POST /categories": {};
  "DELETE /categories/{categoryId}": { "categoryId": RingCentralDigitalApiPathParamValue };
  "GET /categories/{categoryId}": { "categoryId": RingCentralDigitalApiPathParamValue };
  "PUT /categories/{categoryId}": { "categoryId": RingCentralDigitalApiPathParamValue };
}

export interface RingCentralDigitalApiCategoriesOperationRequestMap {
  "GET /categories": RingCentralDigitalApiOperationInput<"GET /categories">;
  "POST /categories": RingCentralDigitalApiOperationInput<"POST /categories">;
  "DELETE /categories/{categoryId}": RingCentralDigitalApiOperationInput<"DELETE /categories/{categoryId}">;
  "GET /categories/{categoryId}": RingCentralDigitalApiOperationInput<"GET /categories/{categoryId}">;
  "PUT /categories/{categoryId}": RingCentralDigitalApiOperationInput<"PUT /categories/{categoryId}">;
}

export interface RingCentralDigitalApiCategoriesGeneratedClient {
  GetAllCategories(...args: RingCentralDigitalApiOperationArgs<"GET /categories">): Promise<RingCentralDigitalApiOperationResponseMap["GET /categories"]>;
  CreateCategory(...args: RingCentralDigitalApiOperationArgs<"POST /categories">): Promise<RingCentralDigitalApiOperationResponseMap["POST /categories"]>;
  DeleteCategory(...args: RingCentralDigitalApiOperationArgs<"DELETE /categories/{categoryId}">): Promise<RingCentralDigitalApiOperationResponseMap["DELETE /categories/{categoryId}"]>;
  GetCategory(...args: RingCentralDigitalApiOperationArgs<"GET /categories/{categoryId}">): Promise<RingCentralDigitalApiOperationResponseMap["GET /categories/{categoryId}"]>;
  UpdateCategory(...args: RingCentralDigitalApiOperationArgs<"PUT /categories/{categoryId}">): Promise<RingCentralDigitalApiOperationResponseMap["PUT /categories/{categoryId}"]>;
}

export const RingCentralDigitalApiCategoriesGeneratedFunctionNames = [
  "GetAllCategories",
  "CreateCategory",
  "DeleteCategory",
  "GetCategory",
  "UpdateCategory"
] as const satisfies readonly (keyof RingCentralDigitalApiCategoriesGeneratedClient)[];

export function createRingCentralDigitalApiCategoriesGeneratedClient(
  callOperation: RingCentralDigitalGeneratedOperationCaller,
): RingCentralDigitalApiCategoriesGeneratedClient {
  return {
    GetAllCategories: (...args) => callOperation("GET /categories", ...(args as RingCentralDigitalApiOperationArgs<"GET /categories">)),
    CreateCategory: (...args) => callOperation("POST /categories", ...(args as RingCentralDigitalApiOperationArgs<"POST /categories">)),
    DeleteCategory: (...args) => callOperation("DELETE /categories/{categoryId}", ...(args as RingCentralDigitalApiOperationArgs<"DELETE /categories/{categoryId}">)),
    GetCategory: (...args) => callOperation("GET /categories/{categoryId}", ...(args as RingCentralDigitalApiOperationArgs<"GET /categories/{categoryId}">)),
    UpdateCategory: (...args) => callOperation("PUT /categories/{categoryId}", ...(args as RingCentralDigitalApiOperationArgs<"PUT /categories/{categoryId}">)),
  };
}
