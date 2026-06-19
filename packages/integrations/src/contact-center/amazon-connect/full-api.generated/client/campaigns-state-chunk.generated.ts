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
export const AmazonConnectFullApiCampaignsStateOperationKeys = [
  "connectcampaigns:GetCampaignStateBatch"
] as const;
export type AmazonConnectFullApiCampaignsStateOperationKey = typeof AmazonConnectFullApiCampaignsStateOperationKeys[number];
// End hardened literal operation keys.

export interface AmazonConnectFullApiCampaignsStateOperationPathParamMap {
  "connectcampaigns:GetCampaignStateBatch": {};
}

export interface AmazonConnectFullApiCampaignsStateOperationRequestMap {
  "connectcampaigns:GetCampaignStateBatch": AmazonConnectFullApiOperationInput<"connectcampaigns:GetCampaignStateBatch">;
}

export interface AmazonConnectFullApiCampaignsStateGeneratedClient {
  GetCampaignStateBatch(...args: AmazonConnectFullApiOperationArgs<"connectcampaigns:GetCampaignStateBatch">): Promise<AmazonConnectFullApiOperationResponseMap["connectcampaigns:GetCampaignStateBatch"]>;
}

export const AmazonConnectFullApiCampaignsStateGeneratedFunctionNames = [
  "GetCampaignStateBatch"
] as const satisfies readonly (keyof AmazonConnectFullApiCampaignsStateGeneratedClient)[];

export function createAmazonConnectFullApiCampaignsStateGeneratedClient(
  callOperation: AmazonConnectGeneratedOperationCaller,
): AmazonConnectFullApiCampaignsStateGeneratedClient {
  return {
    GetCampaignStateBatch: (...args) => callOperation("connectcampaigns:GetCampaignStateBatch", ...(args as AmazonConnectFullApiOperationArgs<"connectcampaigns:GetCampaignStateBatch">)),
  };
}
