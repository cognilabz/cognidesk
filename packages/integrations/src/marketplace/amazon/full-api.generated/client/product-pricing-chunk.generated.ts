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
export const AmazonFullApiProductPricingOperationKeys = [
  "productPricingV0:getPricing",
  "productPricingV0:getCompetitivePricing",
  "productPricingV0:getListingOffers",
  "productPricingV0:getItemOffers",
  "productPricingV0:getItemOffersBatch",
  "productPricingV0:getListingOffersBatch",
  "productPricing_2022-05-01:getFeaturedOfferExpectedPriceBatch",
  "productPricing_2022-05-01:getCompetitiveSummary"
] as const;
export type AmazonFullApiProductPricingOperationKey = typeof AmazonFullApiProductPricingOperationKeys[number];
// End hardened literal operation keys.

export interface AmazonFullApiProductPricingOperationPathParamMap {
  "productPricingV0:getPricing": {};
  "productPricingV0:getCompetitivePricing": {};
  "productPricingV0:getListingOffers": { "SellerSKU": AmazonFullApiPathParamValue };
  "productPricingV0:getItemOffers": { "Asin": AmazonFullApiPathParamValue };
  "productPricingV0:getItemOffersBatch": {};
  "productPricingV0:getListingOffersBatch": {};
  "productPricing_2022-05-01:getFeaturedOfferExpectedPriceBatch": {};
  "productPricing_2022-05-01:getCompetitiveSummary": {};
}

export interface AmazonFullApiProductPricingOperationRequestMap {
  "productPricingV0:getPricing": AmazonFullApiOperationInput<"productPricingV0:getPricing">;
  "productPricingV0:getCompetitivePricing": AmazonFullApiOperationInput<"productPricingV0:getCompetitivePricing">;
  "productPricingV0:getListingOffers": AmazonFullApiOperationInput<"productPricingV0:getListingOffers">;
  "productPricingV0:getItemOffers": AmazonFullApiOperationInput<"productPricingV0:getItemOffers">;
  "productPricingV0:getItemOffersBatch": AmazonFullApiOperationInput<"productPricingV0:getItemOffersBatch">;
  "productPricingV0:getListingOffersBatch": AmazonFullApiOperationInput<"productPricingV0:getListingOffersBatch">;
  "productPricing_2022-05-01:getFeaturedOfferExpectedPriceBatch": AmazonFullApiOperationInput<"productPricing_2022-05-01:getFeaturedOfferExpectedPriceBatch">;
  "productPricing_2022-05-01:getCompetitiveSummary": AmazonFullApiOperationInput<"productPricing_2022-05-01:getCompetitiveSummary">;
}

export interface AmazonFullApiProductPricingGeneratedClient {
  GetPricing(...args: AmazonFullApiOperationArgs<"productPricingV0:getPricing">): Promise<AmazonFullApiOperationResponseMap["productPricingV0:getPricing"]>;
  GetCompetitivePricing(...args: AmazonFullApiOperationArgs<"productPricingV0:getCompetitivePricing">): Promise<AmazonFullApiOperationResponseMap["productPricingV0:getCompetitivePricing"]>;
  GetListingOffers(...args: AmazonFullApiOperationArgs<"productPricingV0:getListingOffers">): Promise<AmazonFullApiOperationResponseMap["productPricingV0:getListingOffers"]>;
  GetItemOffers(...args: AmazonFullApiOperationArgs<"productPricingV0:getItemOffers">): Promise<AmazonFullApiOperationResponseMap["productPricingV0:getItemOffers"]>;
  GetItemOffersBatch(...args: AmazonFullApiOperationArgs<"productPricingV0:getItemOffersBatch">): Promise<AmazonFullApiOperationResponseMap["productPricingV0:getItemOffersBatch"]>;
  GetListingOffersBatch(...args: AmazonFullApiOperationArgs<"productPricingV0:getListingOffersBatch">): Promise<AmazonFullApiOperationResponseMap["productPricingV0:getListingOffersBatch"]>;
  GetFeaturedOfferExpectedPriceBatch(...args: AmazonFullApiOperationArgs<"productPricing_2022-05-01:getFeaturedOfferExpectedPriceBatch">): Promise<AmazonFullApiOperationResponseMap["productPricing_2022-05-01:getFeaturedOfferExpectedPriceBatch"]>;
  GetCompetitiveSummary(...args: AmazonFullApiOperationArgs<"productPricing_2022-05-01:getCompetitiveSummary">): Promise<AmazonFullApiOperationResponseMap["productPricing_2022-05-01:getCompetitiveSummary"]>;
}

export const AmazonFullApiProductPricingGeneratedFunctionNames = [
  "GetPricing",
  "GetCompetitivePricing",
  "GetListingOffers",
  "GetItemOffers",
  "GetItemOffersBatch",
  "GetListingOffersBatch",
  "GetFeaturedOfferExpectedPriceBatch",
  "GetCompetitiveSummary"
] as const satisfies readonly (keyof AmazonFullApiProductPricingGeneratedClient)[];

export function createAmazonFullApiProductPricingGeneratedClient(
  callOperation: AmazonGeneratedOperationCaller,
): AmazonFullApiProductPricingGeneratedClient {
  return {
    GetPricing: (...args) => callOperation("productPricingV0:getPricing", ...(args as AmazonFullApiOperationArgs<"productPricingV0:getPricing">)),
    GetCompetitivePricing: (...args) => callOperation("productPricingV0:getCompetitivePricing", ...(args as AmazonFullApiOperationArgs<"productPricingV0:getCompetitivePricing">)),
    GetListingOffers: (...args) => callOperation("productPricingV0:getListingOffers", ...(args as AmazonFullApiOperationArgs<"productPricingV0:getListingOffers">)),
    GetItemOffers: (...args) => callOperation("productPricingV0:getItemOffers", ...(args as AmazonFullApiOperationArgs<"productPricingV0:getItemOffers">)),
    GetItemOffersBatch: (...args) => callOperation("productPricingV0:getItemOffersBatch", ...(args as AmazonFullApiOperationArgs<"productPricingV0:getItemOffersBatch">)),
    GetListingOffersBatch: (...args) => callOperation("productPricingV0:getListingOffersBatch", ...(args as AmazonFullApiOperationArgs<"productPricingV0:getListingOffersBatch">)),
    GetFeaturedOfferExpectedPriceBatch: (...args) => callOperation("productPricing_2022-05-01:getFeaturedOfferExpectedPriceBatch", ...(args as AmazonFullApiOperationArgs<"productPricing_2022-05-01:getFeaturedOfferExpectedPriceBatch">)),
    GetCompetitiveSummary: (...args) => callOperation("productPricing_2022-05-01:getCompetitiveSummary", ...(args as AmazonFullApiOperationArgs<"productPricing_2022-05-01:getCompetitiveSummary">)),
  };
}
