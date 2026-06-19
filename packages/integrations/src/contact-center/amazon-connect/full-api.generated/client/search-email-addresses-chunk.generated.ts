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
export const AmazonConnectFullApiSearchEmailAddressesOperationKeys = [
  "connect:SearchEmailAddresses"
] as const;
export type AmazonConnectFullApiSearchEmailAddressesOperationKey = typeof AmazonConnectFullApiSearchEmailAddressesOperationKeys[number];
// End hardened literal operation keys.

export interface AmazonConnectFullApiSearchEmailAddressesOperationPathParamMap {
  "connect:SearchEmailAddresses": {};
}

export interface AmazonConnectFullApiSearchEmailAddressesOperationRequestMap {
  "connect:SearchEmailAddresses": AmazonConnectFullApiOperationInput<"connect:SearchEmailAddresses">;
}

export interface AmazonConnectFullApiSearchEmailAddressesGeneratedClient {
  SearchEmailAddresses(...args: AmazonConnectFullApiOperationArgs<"connect:SearchEmailAddresses">): Promise<AmazonConnectFullApiOperationResponseMap["connect:SearchEmailAddresses"]>;
}

export const AmazonConnectFullApiSearchEmailAddressesGeneratedFunctionNames = [
  "SearchEmailAddresses"
] as const satisfies readonly (keyof AmazonConnectFullApiSearchEmailAddressesGeneratedClient)[];

export function createAmazonConnectFullApiSearchEmailAddressesGeneratedClient(
  callOperation: AmazonConnectGeneratedOperationCaller,
): AmazonConnectFullApiSearchEmailAddressesGeneratedClient {
  return {
    SearchEmailAddresses: (...args) => callOperation("connect:SearchEmailAddresses", ...(args as AmazonConnectFullApiOperationArgs<"connect:SearchEmailAddresses">)),
  };
}
