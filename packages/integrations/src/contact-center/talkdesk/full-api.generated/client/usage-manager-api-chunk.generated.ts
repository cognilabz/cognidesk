// Generated endpoint chunk for TalkdeskFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  TalkdeskGeneratedOperationCaller,
  TalkdeskFullApiOperationArgs,
  TalkdeskFullApiOperationInput,
  TalkdeskFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { TalkdeskFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const TalkdeskFullApiUsageManagerAPIOperationKeys = [
  "account-wallets-get",
  "account-wallets-name-get",
  "account-bucket-configurations-get"
] as const;
export type TalkdeskFullApiUsageManagerAPIOperationKey = typeof TalkdeskFullApiUsageManagerAPIOperationKeys[number];
// End hardened literal operation keys.

export interface TalkdeskFullApiUsageManagerAPIOperationPathParamMap {
  "account-wallets-get": {};
  "account-wallets-name-get": { "name": TalkdeskFullApiPathParamValue };
  "account-bucket-configurations-get": {};
}

export interface TalkdeskFullApiUsageManagerAPIOperationRequestMap {
  "account-wallets-get": TalkdeskFullApiOperationInput<"account-wallets-get">;
  "account-wallets-name-get": TalkdeskFullApiOperationInput<"account-wallets-name-get">;
  "account-bucket-configurations-get": TalkdeskFullApiOperationInput<"account-bucket-configurations-get">;
}

export interface TalkdeskFullApiUsageManagerAPIGeneratedClient {
  AccountWalletsGet(...args: TalkdeskFullApiOperationArgs<"account-wallets-get">): Promise<TalkdeskFullApiOperationResponseMap["account-wallets-get"]>;
  AccountWalletsNameGet(...args: TalkdeskFullApiOperationArgs<"account-wallets-name-get">): Promise<TalkdeskFullApiOperationResponseMap["account-wallets-name-get"]>;
  AccountBucketConfigurationsGet(...args: TalkdeskFullApiOperationArgs<"account-bucket-configurations-get">): Promise<TalkdeskFullApiOperationResponseMap["account-bucket-configurations-get"]>;
}

export const TalkdeskFullApiUsageManagerAPIGeneratedFunctionNames = [
  "AccountWalletsGet",
  "AccountWalletsNameGet",
  "AccountBucketConfigurationsGet"
] as const satisfies readonly (keyof TalkdeskFullApiUsageManagerAPIGeneratedClient)[];

export function createTalkdeskFullApiUsageManagerAPIGeneratedClient(
  callOperation: TalkdeskGeneratedOperationCaller,
): TalkdeskFullApiUsageManagerAPIGeneratedClient {
  return {
    AccountWalletsGet: (...args) => callOperation("account-wallets-get", ...(args as TalkdeskFullApiOperationArgs<"account-wallets-get">)),
    AccountWalletsNameGet: (...args) => callOperation("account-wallets-name-get", ...(args as TalkdeskFullApiOperationArgs<"account-wallets-name-get">)),
    AccountBucketConfigurationsGet: (...args) => callOperation("account-bucket-configurations-get", ...(args as TalkdeskFullApiOperationArgs<"account-bucket-configurations-get">)),
  };
}
