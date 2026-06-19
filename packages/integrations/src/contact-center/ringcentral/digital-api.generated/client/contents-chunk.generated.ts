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
export const RingCentralDigitalApiContentsOperationKeys = [
  "GET /contents",
  "POST /contents",
  "GET /contents/{contentId}",
  "PUT /contents/{contentId}/ignore",
  "PUT /contents/{contentId}/update_categories",
  "PUT /contents/{contentId}/update_custom_score"
] as const;
export type RingCentralDigitalApiContentsOperationKey = typeof RingCentralDigitalApiContentsOperationKeys[number];
// End hardened literal operation keys.

export interface RingCentralDigitalApiContentsOperationPathParamMap {
  "GET /contents": {};
  "POST /contents": {};
  "GET /contents/{contentId}": { "contentId": RingCentralDigitalApiPathParamValue };
  "PUT /contents/{contentId}/ignore": { "contentId": RingCentralDigitalApiPathParamValue };
  "PUT /contents/{contentId}/update_categories": { "contentId": RingCentralDigitalApiPathParamValue };
  "PUT /contents/{contentId}/update_custom_score": { "contentId": RingCentralDigitalApiPathParamValue };
}

export interface RingCentralDigitalApiContentsOperationRequestMap {
  "GET /contents": RingCentralDigitalApiOperationInput<"GET /contents">;
  "POST /contents": RingCentralDigitalApiOperationInput<"POST /contents">;
  "GET /contents/{contentId}": RingCentralDigitalApiOperationInput<"GET /contents/{contentId}">;
  "PUT /contents/{contentId}/ignore": RingCentralDigitalApiOperationInput<"PUT /contents/{contentId}/ignore">;
  "PUT /contents/{contentId}/update_categories": RingCentralDigitalApiOperationInput<"PUT /contents/{contentId}/update_categories">;
  "PUT /contents/{contentId}/update_custom_score": RingCentralDigitalApiOperationInput<"PUT /contents/{contentId}/update_custom_score">;
}

export interface RingCentralDigitalApiContentsGeneratedClient {
  GetAllContents(...args: RingCentralDigitalApiOperationArgs<"GET /contents">): Promise<RingCentralDigitalApiOperationResponseMap["GET /contents"]>;
  CreateContent(...args: RingCentralDigitalApiOperationArgs<"POST /contents">): Promise<RingCentralDigitalApiOperationResponseMap["POST /contents"]>;
  GetContent(...args: RingCentralDigitalApiOperationArgs<"GET /contents/{contentId}">): Promise<RingCentralDigitalApiOperationResponseMap["GET /contents/{contentId}"]>;
  IgnoreContent(...args: RingCentralDigitalApiOperationArgs<"PUT /contents/{contentId}/ignore">): Promise<RingCentralDigitalApiOperationResponseMap["PUT /contents/{contentId}/ignore"]>;
  CategorizeContent(...args: RingCentralDigitalApiOperationArgs<"PUT /contents/{contentId}/update_categories">): Promise<RingCentralDigitalApiOperationResponseMap["PUT /contents/{contentId}/update_categories"]>;
  UpdateCustomScore(...args: RingCentralDigitalApiOperationArgs<"PUT /contents/{contentId}/update_custom_score">): Promise<RingCentralDigitalApiOperationResponseMap["PUT /contents/{contentId}/update_custom_score"]>;
}

export const RingCentralDigitalApiContentsGeneratedFunctionNames = [
  "GetAllContents",
  "CreateContent",
  "GetContent",
  "IgnoreContent",
  "CategorizeContent",
  "UpdateCustomScore"
] as const satisfies readonly (keyof RingCentralDigitalApiContentsGeneratedClient)[];

export function createRingCentralDigitalApiContentsGeneratedClient(
  callOperation: RingCentralDigitalGeneratedOperationCaller,
): RingCentralDigitalApiContentsGeneratedClient {
  return {
    GetAllContents: (...args) => callOperation("GET /contents", ...(args as RingCentralDigitalApiOperationArgs<"GET /contents">)),
    CreateContent: (...args) => callOperation("POST /contents", ...(args as RingCentralDigitalApiOperationArgs<"POST /contents">)),
    GetContent: (...args) => callOperation("GET /contents/{contentId}", ...(args as RingCentralDigitalApiOperationArgs<"GET /contents/{contentId}">)),
    IgnoreContent: (...args) => callOperation("PUT /contents/{contentId}/ignore", ...(args as RingCentralDigitalApiOperationArgs<"PUT /contents/{contentId}/ignore">)),
    CategorizeContent: (...args) => callOperation("PUT /contents/{contentId}/update_categories", ...(args as RingCentralDigitalApiOperationArgs<"PUT /contents/{contentId}/update_categories">)),
    UpdateCustomScore: (...args) => callOperation("PUT /contents/{contentId}/update_custom_score", ...(args as RingCentralDigitalApiOperationArgs<"PUT /contents/{contentId}/update_custom_score">)),
  };
}
