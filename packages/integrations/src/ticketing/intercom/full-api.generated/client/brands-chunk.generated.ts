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
export const IntercomFullApiBrandsOperationKeys = [
  "listBrands",
  "retrieveBrand"
] as const;
export type IntercomFullApiBrandsOperationKey = typeof IntercomFullApiBrandsOperationKeys[number];
// End hardened literal operation keys.

export interface IntercomFullApiBrandsOperationPathParamMap {
  "listBrands": {};
  "retrieveBrand": { "id": IntercomFullApiPathParamValue };
}

export interface IntercomFullApiBrandsOperationRequestMap {
  "listBrands": IntercomFullApiOperationInput<"listBrands">;
  "retrieveBrand": IntercomFullApiOperationInput<"retrieveBrand">;
}

export interface IntercomFullApiBrandsGeneratedClient {
  intercomListBrands(...args: IntercomFullApiOperationArgs<"listBrands">): Promise<IntercomFullApiOperationResponseMap["listBrands"]>;
  intercomRetrieveBrand(...args: IntercomFullApiOperationArgs<"retrieveBrand">): Promise<IntercomFullApiOperationResponseMap["retrieveBrand"]>;
}

export const IntercomFullApiBrandsGeneratedFunctionNames = [
  "intercomListBrands",
  "intercomRetrieveBrand"
] as const satisfies readonly (keyof IntercomFullApiBrandsGeneratedClient)[];

export function createIntercomFullApiBrandsGeneratedClient(
  callOperation: IntercomGeneratedOperationCaller,
): IntercomFullApiBrandsGeneratedClient {
  return {
    intercomListBrands: (...args) => callOperation("listBrands", ...(args as IntercomFullApiOperationArgs<"listBrands">)),
    intercomRetrieveBrand: (...args) => callOperation("retrieveBrand", ...(args as IntercomFullApiOperationArgs<"retrieveBrand">)),
  };
}
