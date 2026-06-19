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
export const AmazonFullApiOffersOperationKeys = [
  "replenishment-2022-11-07:listOfferMetrics",
  "replenishment-2022-11-07:listOffers"
] as const;
export type AmazonFullApiOffersOperationKey = typeof AmazonFullApiOffersOperationKeys[number];
// End hardened literal operation keys.

export interface AmazonFullApiOffersOperationPathParamMap {
  "replenishment-2022-11-07:listOfferMetrics": {};
  "replenishment-2022-11-07:listOffers": {};
}

export interface AmazonFullApiOffersOperationRequestMap {
  "replenishment-2022-11-07:listOfferMetrics": AmazonFullApiOperationInput<"replenishment-2022-11-07:listOfferMetrics">;
  "replenishment-2022-11-07:listOffers": AmazonFullApiOperationInput<"replenishment-2022-11-07:listOffers">;
}

export interface AmazonFullApiOffersGeneratedClient {
  ListOfferMetrics(...args: AmazonFullApiOperationArgs<"replenishment-2022-11-07:listOfferMetrics">): Promise<AmazonFullApiOperationResponseMap["replenishment-2022-11-07:listOfferMetrics"]>;
  ListOffers(...args: AmazonFullApiOperationArgs<"replenishment-2022-11-07:listOffers">): Promise<AmazonFullApiOperationResponseMap["replenishment-2022-11-07:listOffers"]>;
}

export const AmazonFullApiOffersGeneratedFunctionNames = [
  "ListOfferMetrics",
  "ListOffers"
] as const satisfies readonly (keyof AmazonFullApiOffersGeneratedClient)[];

export function createAmazonFullApiOffersGeneratedClient(
  callOperation: AmazonGeneratedOperationCaller,
): AmazonFullApiOffersGeneratedClient {
  return {
    ListOfferMetrics: (...args) => callOperation("replenishment-2022-11-07:listOfferMetrics", ...(args as AmazonFullApiOperationArgs<"replenishment-2022-11-07:listOfferMetrics">)),
    ListOffers: (...args) => callOperation("replenishment-2022-11-07:listOffers", ...(args as AmazonFullApiOperationArgs<"replenishment-2022-11-07:listOffers">)),
  };
}
