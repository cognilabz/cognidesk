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
export const AmazonFullApiSellersOperationKeys = [
  "sellers:getMarketplaceParticipations",
  "sellers:getAccount"
] as const;
export type AmazonFullApiSellersOperationKey = typeof AmazonFullApiSellersOperationKeys[number];
// End hardened literal operation keys.

export interface AmazonFullApiSellersOperationPathParamMap {
  "sellers:getMarketplaceParticipations": {};
  "sellers:getAccount": {};
}

export interface AmazonFullApiSellersOperationRequestMap {
  "sellers:getMarketplaceParticipations": AmazonFullApiOperationInput<"sellers:getMarketplaceParticipations">;
  "sellers:getAccount": AmazonFullApiOperationInput<"sellers:getAccount">;
}

export interface AmazonFullApiSellersGeneratedClient {
  GetMarketplaceParticipations(...args: AmazonFullApiOperationArgs<"sellers:getMarketplaceParticipations">): Promise<AmazonFullApiOperationResponseMap["sellers:getMarketplaceParticipations"]>;
  GetAccountSellers(...args: AmazonFullApiOperationArgs<"sellers:getAccount">): Promise<AmazonFullApiOperationResponseMap["sellers:getAccount"]>;
}

export const AmazonFullApiSellersGeneratedFunctionNames = [
  "GetMarketplaceParticipations",
  "GetAccountSellers"
] as const satisfies readonly (keyof AmazonFullApiSellersGeneratedClient)[];

export function createAmazonFullApiSellersGeneratedClient(
  callOperation: AmazonGeneratedOperationCaller,
): AmazonFullApiSellersGeneratedClient {
  return {
    GetMarketplaceParticipations: (...args) => callOperation("sellers:getMarketplaceParticipations", ...(args as AmazonFullApiOperationArgs<"sellers:getMarketplaceParticipations">)),
    GetAccountSellers: (...args) => callOperation("sellers:getAccount", ...(args as AmazonFullApiOperationArgs<"sellers:getAccount">)),
  };
}
