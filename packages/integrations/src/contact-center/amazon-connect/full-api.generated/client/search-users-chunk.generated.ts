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
export const AmazonConnectFullApiSearchUsersOperationKeys = [
  "connect:SearchUsers"
] as const;
export type AmazonConnectFullApiSearchUsersOperationKey = typeof AmazonConnectFullApiSearchUsersOperationKeys[number];
// End hardened literal operation keys.

export interface AmazonConnectFullApiSearchUsersOperationPathParamMap {
  "connect:SearchUsers": {};
}

export interface AmazonConnectFullApiSearchUsersOperationRequestMap {
  "connect:SearchUsers": AmazonConnectFullApiOperationInput<"connect:SearchUsers">;
}

export interface AmazonConnectFullApiSearchUsersGeneratedClient {
  SearchUsers(...args: AmazonConnectFullApiOperationArgs<"connect:SearchUsers">): Promise<AmazonConnectFullApiOperationResponseMap["connect:SearchUsers"]>;
}

export const AmazonConnectFullApiSearchUsersGeneratedFunctionNames = [
  "SearchUsers"
] as const satisfies readonly (keyof AmazonConnectFullApiSearchUsersGeneratedClient)[];

export function createAmazonConnectFullApiSearchUsersGeneratedClient(
  callOperation: AmazonConnectGeneratedOperationCaller,
): AmazonConnectFullApiSearchUsersGeneratedClient {
  return {
    SearchUsers: (...args) => callOperation("connect:SearchUsers", ...(args as AmazonConnectFullApiOperationArgs<"connect:SearchUsers">)),
  };
}
