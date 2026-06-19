// Generated endpoint chunk for AmazonFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  AmazonGeneratedOperationCaller,
  AmazonFullApiOperationArgs,
  AmazonFullApiOperationInput,
  AmazonFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { AmazonFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const AmazonFullApiDefinitionsOperationKeys = [
  "definitionsProductTypes_2020-09-01:searchDefinitionsProductTypes",
  "definitionsProductTypes_2020-09-01:getDefinitionsProductType"
] as const;
export type AmazonFullApiDefinitionsOperationKey = typeof AmazonFullApiDefinitionsOperationKeys[number];
// End hardened literal operation keys.

export interface AmazonFullApiDefinitionsOperationPathParamMap {
  "definitionsProductTypes_2020-09-01:searchDefinitionsProductTypes": {};
  "definitionsProductTypes_2020-09-01:getDefinitionsProductType": { "productType": AmazonFullApiPathParamValue };
}

export interface AmazonFullApiDefinitionsOperationRequestMap {
  "definitionsProductTypes_2020-09-01:searchDefinitionsProductTypes": AmazonFullApiOperationInput<"definitionsProductTypes_2020-09-01:searchDefinitionsProductTypes">;
  "definitionsProductTypes_2020-09-01:getDefinitionsProductType": AmazonFullApiOperationInput<"definitionsProductTypes_2020-09-01:getDefinitionsProductType">;
}

export interface AmazonFullApiDefinitionsGeneratedClient {
  SearchDefinitionsProductTypes(...args: AmazonFullApiOperationArgs<"definitionsProductTypes_2020-09-01:searchDefinitionsProductTypes">): Promise<AmazonFullApiOperationResponseMap["definitionsProductTypes_2020-09-01:searchDefinitionsProductTypes"]>;
  GetDefinitionsProductType(...args: AmazonFullApiOperationArgs<"definitionsProductTypes_2020-09-01:getDefinitionsProductType">): Promise<AmazonFullApiOperationResponseMap["definitionsProductTypes_2020-09-01:getDefinitionsProductType"]>;
}

export const AmazonFullApiDefinitionsGeneratedFunctionNames = [
  "SearchDefinitionsProductTypes",
  "GetDefinitionsProductType"
] as const satisfies readonly (keyof AmazonFullApiDefinitionsGeneratedClient)[];

export function createAmazonFullApiDefinitionsGeneratedClient(
  callOperation: AmazonGeneratedOperationCaller,
): AmazonFullApiDefinitionsGeneratedClient {
  return {
    SearchDefinitionsProductTypes: (...args) => callOperation("definitionsProductTypes_2020-09-01:searchDefinitionsProductTypes", ...(args as AmazonFullApiOperationArgs<"definitionsProductTypes_2020-09-01:searchDefinitionsProductTypes">)),
    GetDefinitionsProductType: (...args) => callOperation("definitionsProductTypes_2020-09-01:getDefinitionsProductType", ...(args as AmazonFullApiOperationArgs<"definitionsProductTypes_2020-09-01:getDefinitionsProductType">)),
  };
}
