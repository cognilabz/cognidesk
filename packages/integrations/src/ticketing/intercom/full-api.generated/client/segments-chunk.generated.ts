// Generated endpoint chunk for IntercomFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  IntercomGeneratedOperationCaller,
  IntercomFullApiOperationArgs,
  IntercomFullApiOperationInput,
  IntercomFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { IntercomFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const IntercomFullApiSegmentsOperationKeys = [
  "listSegments",
  "retrieveSegment"
] as const;
export type IntercomFullApiSegmentsOperationKey = typeof IntercomFullApiSegmentsOperationKeys[number];
// End hardened literal operation keys.

export interface IntercomFullApiSegmentsOperationPathParamMap {
  "listSegments": {};
  "retrieveSegment": { "segment_id": IntercomFullApiPathParamValue };
}

export interface IntercomFullApiSegmentsOperationRequestMap {
  "listSegments": IntercomFullApiOperationInput<"listSegments">;
  "retrieveSegment": IntercomFullApiOperationInput<"retrieveSegment">;
}

export interface IntercomFullApiSegmentsGeneratedClient {
  intercomListSegments(...args: IntercomFullApiOperationArgs<"listSegments">): Promise<IntercomFullApiOperationResponseMap["listSegments"]>;
  intercomRetrieveSegment(...args: IntercomFullApiOperationArgs<"retrieveSegment">): Promise<IntercomFullApiOperationResponseMap["retrieveSegment"]>;
}

export const IntercomFullApiSegmentsGeneratedFunctionNames = [
  "intercomListSegments",
  "intercomRetrieveSegment"
] as const satisfies readonly (keyof IntercomFullApiSegmentsGeneratedClient)[];

export function createIntercomFullApiSegmentsGeneratedClient(
  callOperation: IntercomGeneratedOperationCaller,
): IntercomFullApiSegmentsGeneratedClient {
  return {
    intercomListSegments: (...args) => callOperation("listSegments", ...(args as IntercomFullApiOperationArgs<"listSegments">)),
    intercomRetrieveSegment: (...args) => callOperation("retrieveSegment", ...(args as IntercomFullApiOperationArgs<"retrieveSegment">)),
  };
}
