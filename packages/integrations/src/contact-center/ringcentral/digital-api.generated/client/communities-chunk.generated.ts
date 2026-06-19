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
export const RingCentralDigitalApiCommunitiesOperationKeys = [
  "GET /communities",
  "GET /communities/{communityId}"
] as const;
export type RingCentralDigitalApiCommunitiesOperationKey = typeof RingCentralDigitalApiCommunitiesOperationKeys[number];
// End hardened literal operation keys.

export interface RingCentralDigitalApiCommunitiesOperationPathParamMap {
  "GET /communities": {};
  "GET /communities/{communityId}": { "communityId": RingCentralDigitalApiPathParamValue };
}

export interface RingCentralDigitalApiCommunitiesOperationRequestMap {
  "GET /communities": RingCentralDigitalApiOperationInput<"GET /communities">;
  "GET /communities/{communityId}": RingCentralDigitalApiOperationInput<"GET /communities/{communityId}">;
}

export interface RingCentralDigitalApiCommunitiesGeneratedClient {
  GetAllCommunities(...args: RingCentralDigitalApiOperationArgs<"GET /communities">): Promise<RingCentralDigitalApiOperationResponseMap["GET /communities"]>;
  GetCommunity(...args: RingCentralDigitalApiOperationArgs<"GET /communities/{communityId}">): Promise<RingCentralDigitalApiOperationResponseMap["GET /communities/{communityId}"]>;
}

export const RingCentralDigitalApiCommunitiesGeneratedFunctionNames = [
  "GetAllCommunities",
  "GetCommunity"
] as const satisfies readonly (keyof RingCentralDigitalApiCommunitiesGeneratedClient)[];

export function createRingCentralDigitalApiCommunitiesGeneratedClient(
  callOperation: RingCentralDigitalGeneratedOperationCaller,
): RingCentralDigitalApiCommunitiesGeneratedClient {
  return {
    GetAllCommunities: (...args) => callOperation("GET /communities", ...(args as RingCentralDigitalApiOperationArgs<"GET /communities">)),
    GetCommunity: (...args) => callOperation("GET /communities/{communityId}", ...(args as RingCentralDigitalApiOperationArgs<"GET /communities/{communityId}">)),
  };
}
