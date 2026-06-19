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
export const AmazonConnectFullApiTrafficDistributionOperationKeys = [
  "connect:GetTrafficDistribution",
  "connect:UpdateTrafficDistribution"
] as const;
export type AmazonConnectFullApiTrafficDistributionOperationKey = typeof AmazonConnectFullApiTrafficDistributionOperationKeys[number];
// End hardened literal operation keys.

export interface AmazonConnectFullApiTrafficDistributionOperationPathParamMap {
  "connect:GetTrafficDistribution": { "Id": AmazonConnectFullApiPathParamValue };
  "connect:UpdateTrafficDistribution": { "Id": AmazonConnectFullApiPathParamValue };
}

export interface AmazonConnectFullApiTrafficDistributionOperationRequestMap {
  "connect:GetTrafficDistribution": AmazonConnectFullApiOperationInput<"connect:GetTrafficDistribution">;
  "connect:UpdateTrafficDistribution": AmazonConnectFullApiOperationInput<"connect:UpdateTrafficDistribution">;
}

export interface AmazonConnectFullApiTrafficDistributionGeneratedClient {
  GetTrafficDistribution(...args: AmazonConnectFullApiOperationArgs<"connect:GetTrafficDistribution">): Promise<AmazonConnectFullApiOperationResponseMap["connect:GetTrafficDistribution"]>;
  UpdateTrafficDistribution(...args: AmazonConnectFullApiOperationArgs<"connect:UpdateTrafficDistribution">): Promise<AmazonConnectFullApiOperationResponseMap["connect:UpdateTrafficDistribution"]>;
}

export const AmazonConnectFullApiTrafficDistributionGeneratedFunctionNames = [
  "GetTrafficDistribution",
  "UpdateTrafficDistribution"
] as const satisfies readonly (keyof AmazonConnectFullApiTrafficDistributionGeneratedClient)[];

export function createAmazonConnectFullApiTrafficDistributionGeneratedClient(
  callOperation: AmazonConnectGeneratedOperationCaller,
): AmazonConnectFullApiTrafficDistributionGeneratedClient {
  return {
    GetTrafficDistribution: (...args) => callOperation("connect:GetTrafficDistribution", ...(args as AmazonConnectFullApiOperationArgs<"connect:GetTrafficDistribution">)),
    UpdateTrafficDistribution: (...args) => callOperation("connect:UpdateTrafficDistribution", ...(args as AmazonConnectFullApiOperationArgs<"connect:UpdateTrafficDistribution">)),
  };
}
