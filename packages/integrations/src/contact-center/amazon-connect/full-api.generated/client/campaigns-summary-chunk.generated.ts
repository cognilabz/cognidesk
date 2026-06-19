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
export const AmazonConnectFullApiCampaignsSummaryOperationKeys = [
  "connectcampaigns:ListCampaigns"
] as const;
export type AmazonConnectFullApiCampaignsSummaryOperationKey = typeof AmazonConnectFullApiCampaignsSummaryOperationKeys[number];
// End hardened literal operation keys.

export interface AmazonConnectFullApiCampaignsSummaryOperationPathParamMap {
  "connectcampaigns:ListCampaigns": {};
}

export interface AmazonConnectFullApiCampaignsSummaryOperationRequestMap {
  "connectcampaigns:ListCampaigns": AmazonConnectFullApiOperationInput<"connectcampaigns:ListCampaigns">;
}

export interface AmazonConnectFullApiCampaignsSummaryGeneratedClient {
  ListCampaigns(...args: AmazonConnectFullApiOperationArgs<"connectcampaigns:ListCampaigns">): Promise<AmazonConnectFullApiOperationResponseMap["connectcampaigns:ListCampaigns"]>;
}

export const AmazonConnectFullApiCampaignsSummaryGeneratedFunctionNames = [
  "ListCampaigns"
] as const satisfies readonly (keyof AmazonConnectFullApiCampaignsSummaryGeneratedClient)[];

export function createAmazonConnectFullApiCampaignsSummaryGeneratedClient(
  callOperation: AmazonConnectGeneratedOperationCaller,
): AmazonConnectFullApiCampaignsSummaryGeneratedClient {
  return {
    ListCampaigns: (...args) => callOperation("connectcampaigns:ListCampaigns", ...(args as AmazonConnectFullApiOperationArgs<"connectcampaigns:ListCampaigns">)),
  };
}
