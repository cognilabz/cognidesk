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
export const AmazonConnectFullApiUserOperationKeys = [
  "connect:GetFederationToken"
] as const;
export type AmazonConnectFullApiUserOperationKey = typeof AmazonConnectFullApiUserOperationKeys[number];
// End hardened literal operation keys.

export interface AmazonConnectFullApiUserOperationPathParamMap {
  "connect:GetFederationToken": { "InstanceId": AmazonConnectFullApiPathParamValue };
}

export interface AmazonConnectFullApiUserOperationRequestMap {
  "connect:GetFederationToken": AmazonConnectFullApiOperationInput<"connect:GetFederationToken">;
}

export interface AmazonConnectFullApiUserGeneratedClient {
  GetFederationToken(...args: AmazonConnectFullApiOperationArgs<"connect:GetFederationToken">): Promise<AmazonConnectFullApiOperationResponseMap["connect:GetFederationToken"]>;
}

export const AmazonConnectFullApiUserGeneratedFunctionNames = [
  "GetFederationToken"
] as const satisfies readonly (keyof AmazonConnectFullApiUserGeneratedClient)[];

export function createAmazonConnectFullApiUserGeneratedClient(
  callOperation: AmazonConnectGeneratedOperationCaller,
): AmazonConnectFullApiUserGeneratedClient {
  return {
    GetFederationToken: (...args) => callOperation("connect:GetFederationToken", ...(args as AmazonConnectFullApiOperationArgs<"connect:GetFederationToken">)),
  };
}
