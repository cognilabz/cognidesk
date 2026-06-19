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
export const AmazonConnectFullApiUsersSummaryOperationKeys = [
  "connect:ListUsers"
] as const;
export type AmazonConnectFullApiUsersSummaryOperationKey = typeof AmazonConnectFullApiUsersSummaryOperationKeys[number];
// End hardened literal operation keys.

export interface AmazonConnectFullApiUsersSummaryOperationPathParamMap {
  "connect:ListUsers": { "InstanceId": AmazonConnectFullApiPathParamValue };
}

export interface AmazonConnectFullApiUsersSummaryOperationRequestMap {
  "connect:ListUsers": AmazonConnectFullApiOperationInput<"connect:ListUsers">;
}

export interface AmazonConnectFullApiUsersSummaryGeneratedClient {
  ListUsers(...args: AmazonConnectFullApiOperationArgs<"connect:ListUsers">): Promise<AmazonConnectFullApiOperationResponseMap["connect:ListUsers"]>;
}

export const AmazonConnectFullApiUsersSummaryGeneratedFunctionNames = [
  "ListUsers"
] as const satisfies readonly (keyof AmazonConnectFullApiUsersSummaryGeneratedClient)[];

export function createAmazonConnectFullApiUsersSummaryGeneratedClient(
  callOperation: AmazonConnectGeneratedOperationCaller,
): AmazonConnectFullApiUsersSummaryGeneratedClient {
  return {
    ListUsers: (...args) => callOperation("connect:ListUsers", ...(args as AmazonConnectFullApiOperationArgs<"connect:ListUsers">)),
  };
}
