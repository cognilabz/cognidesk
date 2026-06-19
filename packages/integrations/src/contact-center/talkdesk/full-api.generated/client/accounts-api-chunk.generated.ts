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
export const TalkdeskFullApiAccountsAPIOperationKeys = [
  "account-get"
] as const;
export type TalkdeskFullApiAccountsAPIOperationKey = typeof TalkdeskFullApiAccountsAPIOperationKeys[number];
// End hardened literal operation keys.

export interface TalkdeskFullApiAccountsAPIOperationPathParamMap {
  "account-get": {};
}

export interface TalkdeskFullApiAccountsAPIOperationRequestMap {
  "account-get": TalkdeskFullApiOperationInput<"account-get">;
}

export interface TalkdeskFullApiAccountsAPIGeneratedClient {
  AccountGet(...args: TalkdeskFullApiOperationArgs<"account-get">): Promise<TalkdeskFullApiOperationResponseMap["account-get"]>;
}

export const TalkdeskFullApiAccountsAPIGeneratedFunctionNames = [
  "AccountGet"
] as const satisfies readonly (keyof TalkdeskFullApiAccountsAPIGeneratedClient)[];

export function createTalkdeskFullApiAccountsAPIGeneratedClient(
  callOperation: TalkdeskGeneratedOperationCaller,
): TalkdeskFullApiAccountsAPIGeneratedClient {
  return {
    AccountGet: (...args) => callOperation("account-get", ...(args as TalkdeskFullApiOperationArgs<"account-get">)),
  };
}
