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
export const IntercomFullApiDataAttributesOperationKeys = [
  "lisDataAttributes",
  "createDataAttribute",
  "updateDataAttribute"
] as const;
export type IntercomFullApiDataAttributesOperationKey = typeof IntercomFullApiDataAttributesOperationKeys[number];
// End hardened literal operation keys.

export interface IntercomFullApiDataAttributesOperationPathParamMap {
  "lisDataAttributes": {};
  "createDataAttribute": {};
  "updateDataAttribute": { "data_attribute_id": IntercomFullApiPathParamValue };
}

export interface IntercomFullApiDataAttributesOperationRequestMap {
  "lisDataAttributes": IntercomFullApiOperationInput<"lisDataAttributes">;
  "createDataAttribute": IntercomFullApiOperationInput<"createDataAttribute">;
  "updateDataAttribute": IntercomFullApiOperationInput<"updateDataAttribute">;
}

export interface IntercomFullApiDataAttributesGeneratedClient {
  intercomLisDataAttributes(...args: IntercomFullApiOperationArgs<"lisDataAttributes">): Promise<IntercomFullApiOperationResponseMap["lisDataAttributes"]>;
  intercomCreateDataAttribute(...args: IntercomFullApiOperationArgs<"createDataAttribute">): Promise<IntercomFullApiOperationResponseMap["createDataAttribute"]>;
  intercomUpdateDataAttribute(...args: IntercomFullApiOperationArgs<"updateDataAttribute">): Promise<IntercomFullApiOperationResponseMap["updateDataAttribute"]>;
}

export const IntercomFullApiDataAttributesGeneratedFunctionNames = [
  "intercomLisDataAttributes",
  "intercomCreateDataAttribute",
  "intercomUpdateDataAttribute"
] as const satisfies readonly (keyof IntercomFullApiDataAttributesGeneratedClient)[];

export function createIntercomFullApiDataAttributesGeneratedClient(
  callOperation: IntercomGeneratedOperationCaller,
): IntercomFullApiDataAttributesGeneratedClient {
  return {
    intercomLisDataAttributes: (...args) => callOperation("lisDataAttributes", ...(args as IntercomFullApiOperationArgs<"lisDataAttributes">)),
    intercomCreateDataAttribute: (...args) => callOperation("createDataAttribute", ...(args as IntercomFullApiOperationArgs<"createDataAttribute">)),
    intercomUpdateDataAttribute: (...args) => callOperation("updateDataAttribute", ...(args as IntercomFullApiOperationArgs<"updateDataAttribute">)),
  };
}
