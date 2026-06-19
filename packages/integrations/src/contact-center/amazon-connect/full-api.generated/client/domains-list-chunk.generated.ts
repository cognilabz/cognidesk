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
export const AmazonConnectFullApiDomainsListOperationKeys = [
  "connectcases:ListDomains"
] as const;
export type AmazonConnectFullApiDomainsListOperationKey = typeof AmazonConnectFullApiDomainsListOperationKeys[number];
// End hardened literal operation keys.

export interface AmazonConnectFullApiDomainsListOperationPathParamMap {
  "connectcases:ListDomains": {};
}

export interface AmazonConnectFullApiDomainsListOperationRequestMap {
  "connectcases:ListDomains": AmazonConnectFullApiOperationInput<"connectcases:ListDomains">;
}

export interface AmazonConnectFullApiDomainsListGeneratedClient {
  ListDomains(...args: AmazonConnectFullApiOperationArgs<"connectcases:ListDomains">): Promise<AmazonConnectFullApiOperationResponseMap["connectcases:ListDomains"]>;
}

export const AmazonConnectFullApiDomainsListGeneratedFunctionNames = [
  "ListDomains"
] as const satisfies readonly (keyof AmazonConnectFullApiDomainsListGeneratedClient)[];

export function createAmazonConnectFullApiDomainsListGeneratedClient(
  callOperation: AmazonConnectGeneratedOperationCaller,
): AmazonConnectFullApiDomainsListGeneratedClient {
  return {
    ListDomains: (...args) => callOperation("connectcases:ListDomains", ...(args as AmazonConnectFullApiOperationArgs<"connectcases:ListDomains">)),
  };
}
