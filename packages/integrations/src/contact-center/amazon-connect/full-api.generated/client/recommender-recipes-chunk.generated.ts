// Generated endpoint chunk for AmazonConnectFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  AmazonConnectGeneratedOperationCaller,
  AmazonConnectFullApiOperationArgs,
  AmazonConnectFullApiOperationInput,
  AmazonConnectFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { AmazonConnectFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const AmazonConnectFullApiRecommenderRecipesOperationKeys = [
  "customer-profiles:ListRecommenderRecipes"
] as const;
export type AmazonConnectFullApiRecommenderRecipesOperationKey = typeof AmazonConnectFullApiRecommenderRecipesOperationKeys[number];
// End hardened literal operation keys.

export interface AmazonConnectFullApiRecommenderRecipesOperationPathParamMap {
  "customer-profiles:ListRecommenderRecipes": {};
}

export interface AmazonConnectFullApiRecommenderRecipesOperationRequestMap {
  "customer-profiles:ListRecommenderRecipes": AmazonConnectFullApiOperationInput<"customer-profiles:ListRecommenderRecipes">;
}

export interface AmazonConnectFullApiRecommenderRecipesGeneratedClient {
  ListRecommenderRecipes(...args: AmazonConnectFullApiOperationArgs<"customer-profiles:ListRecommenderRecipes">): Promise<AmazonConnectFullApiOperationResponseMap["customer-profiles:ListRecommenderRecipes"]>;
}

export const AmazonConnectFullApiRecommenderRecipesGeneratedFunctionNames = [
  "ListRecommenderRecipes"
] as const satisfies readonly (keyof AmazonConnectFullApiRecommenderRecipesGeneratedClient)[];

export function createAmazonConnectFullApiRecommenderRecipesGeneratedClient(
  callOperation: AmazonConnectGeneratedOperationCaller,
): AmazonConnectFullApiRecommenderRecipesGeneratedClient {
  return {
    ListRecommenderRecipes: (...args) => callOperation("customer-profiles:ListRecommenderRecipes", ...(args as AmazonConnectFullApiOperationArgs<"customer-profiles:ListRecommenderRecipes">)),
  };
}
