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
export const AmazonFullApiTokensOperationKeys = [
  "tokens_2021-03-01:createRestrictedDataToken"
] as const;
export type AmazonFullApiTokensOperationKey = typeof AmazonFullApiTokensOperationKeys[number];
// End hardened literal operation keys.

export interface AmazonFullApiTokensOperationPathParamMap {
  "tokens_2021-03-01:createRestrictedDataToken": {};
}

export interface AmazonFullApiTokensOperationRequestMap {
  "tokens_2021-03-01:createRestrictedDataToken": AmazonFullApiOperationInput<"tokens_2021-03-01:createRestrictedDataToken">;
}

export interface AmazonFullApiTokensGeneratedClient {
  CreateRestrictedDataToken(...args: AmazonFullApiOperationArgs<"tokens_2021-03-01:createRestrictedDataToken">): Promise<AmazonFullApiOperationResponseMap["tokens_2021-03-01:createRestrictedDataToken"]>;
}

export const AmazonFullApiTokensGeneratedFunctionNames = [
  "CreateRestrictedDataToken"
] as const satisfies readonly (keyof AmazonFullApiTokensGeneratedClient)[];

export function createAmazonFullApiTokensGeneratedClient(
  callOperation: AmazonGeneratedOperationCaller,
): AmazonFullApiTokensGeneratedClient {
  return {
    CreateRestrictedDataToken: (...args) => callOperation("tokens_2021-03-01:createRestrictedDataToken", ...(args as AmazonFullApiOperationArgs<"tokens_2021-03-01:createRestrictedDataToken">)),
  };
}
