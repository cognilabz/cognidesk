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
export const AmazonFullApiListingsOperationKeys = [
  "listingsItems_2020-09-01:deleteListingsItem",
  "listingsItems_2020-09-01:patchListingsItem",
  "listingsItems_2020-09-01:putListingsItem",
  "listingsItems_2021-08-01:deleteListingsItem",
  "listingsItems_2021-08-01:getListingsItem",
  "listingsItems_2021-08-01:patchListingsItem",
  "listingsItems_2021-08-01:putListingsItem",
  "listingsItems_2021-08-01:searchListingsItems",
  "listingsRestrictions_2021-08-01:getListingsRestrictions"
] as const;
export type AmazonFullApiListingsOperationKey = typeof AmazonFullApiListingsOperationKeys[number];
// End hardened literal operation keys.

export interface AmazonFullApiListingsOperationPathParamMap {
  "listingsItems_2020-09-01:deleteListingsItem": { "sellerId": AmazonFullApiPathParamValue; "sku": AmazonFullApiPathParamValue };
  "listingsItems_2020-09-01:patchListingsItem": { "sellerId": AmazonFullApiPathParamValue; "sku": AmazonFullApiPathParamValue };
  "listingsItems_2020-09-01:putListingsItem": { "sellerId": AmazonFullApiPathParamValue; "sku": AmazonFullApiPathParamValue };
  "listingsItems_2021-08-01:deleteListingsItem": { "sellerId": AmazonFullApiPathParamValue; "sku": AmazonFullApiPathParamValue };
  "listingsItems_2021-08-01:getListingsItem": { "sellerId": AmazonFullApiPathParamValue; "sku": AmazonFullApiPathParamValue };
  "listingsItems_2021-08-01:patchListingsItem": { "sellerId": AmazonFullApiPathParamValue; "sku": AmazonFullApiPathParamValue };
  "listingsItems_2021-08-01:putListingsItem": { "sellerId": AmazonFullApiPathParamValue; "sku": AmazonFullApiPathParamValue };
  "listingsItems_2021-08-01:searchListingsItems": { "sellerId": AmazonFullApiPathParamValue };
  "listingsRestrictions_2021-08-01:getListingsRestrictions": {};
}

export interface AmazonFullApiListingsOperationRequestMap {
  "listingsItems_2020-09-01:deleteListingsItem": AmazonFullApiOperationInput<"listingsItems_2020-09-01:deleteListingsItem">;
  "listingsItems_2020-09-01:patchListingsItem": AmazonFullApiOperationInput<"listingsItems_2020-09-01:patchListingsItem">;
  "listingsItems_2020-09-01:putListingsItem": AmazonFullApiOperationInput<"listingsItems_2020-09-01:putListingsItem">;
  "listingsItems_2021-08-01:deleteListingsItem": AmazonFullApiOperationInput<"listingsItems_2021-08-01:deleteListingsItem">;
  "listingsItems_2021-08-01:getListingsItem": AmazonFullApiOperationInput<"listingsItems_2021-08-01:getListingsItem">;
  "listingsItems_2021-08-01:patchListingsItem": AmazonFullApiOperationInput<"listingsItems_2021-08-01:patchListingsItem">;
  "listingsItems_2021-08-01:putListingsItem": AmazonFullApiOperationInput<"listingsItems_2021-08-01:putListingsItem">;
  "listingsItems_2021-08-01:searchListingsItems": AmazonFullApiOperationInput<"listingsItems_2021-08-01:searchListingsItems">;
  "listingsRestrictions_2021-08-01:getListingsRestrictions": AmazonFullApiOperationInput<"listingsRestrictions_2021-08-01:getListingsRestrictions">;
}

export interface AmazonFullApiListingsGeneratedClient {
  DeleteListingsItem(...args: AmazonFullApiOperationArgs<"listingsItems_2020-09-01:deleteListingsItem">): Promise<AmazonFullApiOperationResponseMap["listingsItems_2020-09-01:deleteListingsItem"]>;
  PatchListingsItem(...args: AmazonFullApiOperationArgs<"listingsItems_2020-09-01:patchListingsItem">): Promise<AmazonFullApiOperationResponseMap["listingsItems_2020-09-01:patchListingsItem"]>;
  PutListingsItem(...args: AmazonFullApiOperationArgs<"listingsItems_2020-09-01:putListingsItem">): Promise<AmazonFullApiOperationResponseMap["listingsItems_2020-09-01:putListingsItem"]>;
  DeleteListingsItemListingsItems20210801(...args: AmazonFullApiOperationArgs<"listingsItems_2021-08-01:deleteListingsItem">): Promise<AmazonFullApiOperationResponseMap["listingsItems_2021-08-01:deleteListingsItem"]>;
  GetListingsItem(...args: AmazonFullApiOperationArgs<"listingsItems_2021-08-01:getListingsItem">): Promise<AmazonFullApiOperationResponseMap["listingsItems_2021-08-01:getListingsItem"]>;
  PatchListingsItemListingsItems20210801(...args: AmazonFullApiOperationArgs<"listingsItems_2021-08-01:patchListingsItem">): Promise<AmazonFullApiOperationResponseMap["listingsItems_2021-08-01:patchListingsItem"]>;
  PutListingsItemListingsItems20210801(...args: AmazonFullApiOperationArgs<"listingsItems_2021-08-01:putListingsItem">): Promise<AmazonFullApiOperationResponseMap["listingsItems_2021-08-01:putListingsItem"]>;
  SearchListingsItems(...args: AmazonFullApiOperationArgs<"listingsItems_2021-08-01:searchListingsItems">): Promise<AmazonFullApiOperationResponseMap["listingsItems_2021-08-01:searchListingsItems"]>;
  GetListingsRestrictions(...args: AmazonFullApiOperationArgs<"listingsRestrictions_2021-08-01:getListingsRestrictions">): Promise<AmazonFullApiOperationResponseMap["listingsRestrictions_2021-08-01:getListingsRestrictions"]>;
}

export const AmazonFullApiListingsGeneratedFunctionNames = [
  "DeleteListingsItem",
  "PatchListingsItem",
  "PutListingsItem",
  "DeleteListingsItemListingsItems20210801",
  "GetListingsItem",
  "PatchListingsItemListingsItems20210801",
  "PutListingsItemListingsItems20210801",
  "SearchListingsItems",
  "GetListingsRestrictions"
] as const satisfies readonly (keyof AmazonFullApiListingsGeneratedClient)[];

export function createAmazonFullApiListingsGeneratedClient(
  callOperation: AmazonGeneratedOperationCaller,
): AmazonFullApiListingsGeneratedClient {
  return {
    DeleteListingsItem: (...args) => callOperation("listingsItems_2020-09-01:deleteListingsItem", ...(args as AmazonFullApiOperationArgs<"listingsItems_2020-09-01:deleteListingsItem">)),
    PatchListingsItem: (...args) => callOperation("listingsItems_2020-09-01:patchListingsItem", ...(args as AmazonFullApiOperationArgs<"listingsItems_2020-09-01:patchListingsItem">)),
    PutListingsItem: (...args) => callOperation("listingsItems_2020-09-01:putListingsItem", ...(args as AmazonFullApiOperationArgs<"listingsItems_2020-09-01:putListingsItem">)),
    DeleteListingsItemListingsItems20210801: (...args) => callOperation("listingsItems_2021-08-01:deleteListingsItem", ...(args as AmazonFullApiOperationArgs<"listingsItems_2021-08-01:deleteListingsItem">)),
    GetListingsItem: (...args) => callOperation("listingsItems_2021-08-01:getListingsItem", ...(args as AmazonFullApiOperationArgs<"listingsItems_2021-08-01:getListingsItem">)),
    PatchListingsItemListingsItems20210801: (...args) => callOperation("listingsItems_2021-08-01:patchListingsItem", ...(args as AmazonFullApiOperationArgs<"listingsItems_2021-08-01:patchListingsItem">)),
    PutListingsItemListingsItems20210801: (...args) => callOperation("listingsItems_2021-08-01:putListingsItem", ...(args as AmazonFullApiOperationArgs<"listingsItems_2021-08-01:putListingsItem">)),
    SearchListingsItems: (...args) => callOperation("listingsItems_2021-08-01:searchListingsItems", ...(args as AmazonFullApiOperationArgs<"listingsItems_2021-08-01:searchListingsItems">)),
    GetListingsRestrictions: (...args) => callOperation("listingsRestrictions_2021-08-01:getListingsRestrictions", ...(args as AmazonFullApiOperationArgs<"listingsRestrictions_2021-08-01:getListingsRestrictions">)),
  };
}
