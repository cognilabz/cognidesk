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
export const RingCentralDigitalApiTagsOperationKeys = [
  "GET /tags",
  "POST /tags",
  "DELETE /tags/{tagId}",
  "GET /tags/{tagId}",
  "PUT /tags/{tagId}"
] as const;
export type RingCentralDigitalApiTagsOperationKey = typeof RingCentralDigitalApiTagsOperationKeys[number];
// End hardened literal operation keys.

export interface RingCentralDigitalApiTagsOperationPathParamMap {
  "GET /tags": {};
  "POST /tags": {};
  "DELETE /tags/{tagId}": { "tagId": RingCentralDigitalApiPathParamValue };
  "GET /tags/{tagId}": { "tagId": RingCentralDigitalApiPathParamValue };
  "PUT /tags/{tagId}": { "tagId": RingCentralDigitalApiPathParamValue };
}

export interface RingCentralDigitalApiTagsOperationRequestMap {
  "GET /tags": RingCentralDigitalApiOperationInput<"GET /tags">;
  "POST /tags": RingCentralDigitalApiOperationInput<"POST /tags">;
  "DELETE /tags/{tagId}": RingCentralDigitalApiOperationInput<"DELETE /tags/{tagId}">;
  "GET /tags/{tagId}": RingCentralDigitalApiOperationInput<"GET /tags/{tagId}">;
  "PUT /tags/{tagId}": RingCentralDigitalApiOperationInput<"PUT /tags/{tagId}">;
}

export interface RingCentralDigitalApiTagsGeneratedClient {
  GetAllTags(...args: RingCentralDigitalApiOperationArgs<"GET /tags">): Promise<RingCentralDigitalApiOperationResponseMap["GET /tags"]>;
  CreateTag(...args: RingCentralDigitalApiOperationArgs<"POST /tags">): Promise<RingCentralDigitalApiOperationResponseMap["POST /tags"]>;
  DeleteTag(...args: RingCentralDigitalApiOperationArgs<"DELETE /tags/{tagId}">): Promise<RingCentralDigitalApiOperationResponseMap["DELETE /tags/{tagId}"]>;
  GetTag(...args: RingCentralDigitalApiOperationArgs<"GET /tags/{tagId}">): Promise<RingCentralDigitalApiOperationResponseMap["GET /tags/{tagId}"]>;
  UpdateTag(...args: RingCentralDigitalApiOperationArgs<"PUT /tags/{tagId}">): Promise<RingCentralDigitalApiOperationResponseMap["PUT /tags/{tagId}"]>;
}

export const RingCentralDigitalApiTagsGeneratedFunctionNames = [
  "GetAllTags",
  "CreateTag",
  "DeleteTag",
  "GetTag",
  "UpdateTag"
] as const satisfies readonly (keyof RingCentralDigitalApiTagsGeneratedClient)[];

export function createRingCentralDigitalApiTagsGeneratedClient(
  callOperation: RingCentralDigitalGeneratedOperationCaller,
): RingCentralDigitalApiTagsGeneratedClient {
  return {
    GetAllTags: (...args) => callOperation("GET /tags", ...(args as RingCentralDigitalApiOperationArgs<"GET /tags">)),
    CreateTag: (...args) => callOperation("POST /tags", ...(args as RingCentralDigitalApiOperationArgs<"POST /tags">)),
    DeleteTag: (...args) => callOperation("DELETE /tags/{tagId}", ...(args as RingCentralDigitalApiOperationArgs<"DELETE /tags/{tagId}">)),
    GetTag: (...args) => callOperation("GET /tags/{tagId}", ...(args as RingCentralDigitalApiOperationArgs<"GET /tags/{tagId}">)),
    UpdateTag: (...args) => callOperation("PUT /tags/{tagId}", ...(args as RingCentralDigitalApiOperationArgs<"PUT /tags/{tagId}">)),
  };
}
