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
export const AmazonFullApiCatalogOperationKeys = [
  "catalogItemsV0:listCatalogCategories",
  "catalogItems_2020-12-01:searchCatalogItems",
  "catalogItems_2020-12-01:getCatalogItem",
  "catalogItems_2022-04-01:searchCatalogItems",
  "catalogItems_2022-04-01:getCatalogItem"
] as const;
export type AmazonFullApiCatalogOperationKey = typeof AmazonFullApiCatalogOperationKeys[number];
// End hardened literal operation keys.

export interface AmazonFullApiCatalogOperationPathParamMap {
  "catalogItemsV0:listCatalogCategories": {};
  "catalogItems_2020-12-01:searchCatalogItems": {};
  "catalogItems_2020-12-01:getCatalogItem": { "asin": AmazonFullApiPathParamValue };
  "catalogItems_2022-04-01:searchCatalogItems": {};
  "catalogItems_2022-04-01:getCatalogItem": { "asin": AmazonFullApiPathParamValue };
}

export interface AmazonFullApiCatalogOperationRequestMap {
  "catalogItemsV0:listCatalogCategories": AmazonFullApiOperationInput<"catalogItemsV0:listCatalogCategories">;
  "catalogItems_2020-12-01:searchCatalogItems": AmazonFullApiOperationInput<"catalogItems_2020-12-01:searchCatalogItems">;
  "catalogItems_2020-12-01:getCatalogItem": AmazonFullApiOperationInput<"catalogItems_2020-12-01:getCatalogItem">;
  "catalogItems_2022-04-01:searchCatalogItems": AmazonFullApiOperationInput<"catalogItems_2022-04-01:searchCatalogItems">;
  "catalogItems_2022-04-01:getCatalogItem": AmazonFullApiOperationInput<"catalogItems_2022-04-01:getCatalogItem">;
}

export interface AmazonFullApiCatalogGeneratedClient {
  ListCatalogCategories(...args: AmazonFullApiOperationArgs<"catalogItemsV0:listCatalogCategories">): Promise<AmazonFullApiOperationResponseMap["catalogItemsV0:listCatalogCategories"]>;
  SearchCatalogItems(...args: AmazonFullApiOperationArgs<"catalogItems_2020-12-01:searchCatalogItems">): Promise<AmazonFullApiOperationResponseMap["catalogItems_2020-12-01:searchCatalogItems"]>;
  GetCatalogItem(...args: AmazonFullApiOperationArgs<"catalogItems_2020-12-01:getCatalogItem">): Promise<AmazonFullApiOperationResponseMap["catalogItems_2020-12-01:getCatalogItem"]>;
  SearchCatalogItemsCatalogItems20220401(...args: AmazonFullApiOperationArgs<"catalogItems_2022-04-01:searchCatalogItems">): Promise<AmazonFullApiOperationResponseMap["catalogItems_2022-04-01:searchCatalogItems"]>;
  GetCatalogItemCatalogItems20220401(...args: AmazonFullApiOperationArgs<"catalogItems_2022-04-01:getCatalogItem">): Promise<AmazonFullApiOperationResponseMap["catalogItems_2022-04-01:getCatalogItem"]>;
}

export const AmazonFullApiCatalogGeneratedFunctionNames = [
  "ListCatalogCategories",
  "SearchCatalogItems",
  "GetCatalogItem",
  "SearchCatalogItemsCatalogItems20220401",
  "GetCatalogItemCatalogItems20220401"
] as const satisfies readonly (keyof AmazonFullApiCatalogGeneratedClient)[];

export function createAmazonFullApiCatalogGeneratedClient(
  callOperation: AmazonGeneratedOperationCaller,
): AmazonFullApiCatalogGeneratedClient {
  return {
    ListCatalogCategories: (...args) => callOperation("catalogItemsV0:listCatalogCategories", ...(args as AmazonFullApiOperationArgs<"catalogItemsV0:listCatalogCategories">)),
    SearchCatalogItems: (...args) => callOperation("catalogItems_2020-12-01:searchCatalogItems", ...(args as AmazonFullApiOperationArgs<"catalogItems_2020-12-01:searchCatalogItems">)),
    GetCatalogItem: (...args) => callOperation("catalogItems_2020-12-01:getCatalogItem", ...(args as AmazonFullApiOperationArgs<"catalogItems_2020-12-01:getCatalogItem">)),
    SearchCatalogItemsCatalogItems20220401: (...args) => callOperation("catalogItems_2022-04-01:searchCatalogItems", ...(args as AmazonFullApiOperationArgs<"catalogItems_2022-04-01:searchCatalogItems">)),
    GetCatalogItemCatalogItems20220401: (...args) => callOperation("catalogItems_2022-04-01:getCatalogItem", ...(args as AmazonFullApiOperationArgs<"catalogItems_2022-04-01:getCatalogItem">)),
  };
}
