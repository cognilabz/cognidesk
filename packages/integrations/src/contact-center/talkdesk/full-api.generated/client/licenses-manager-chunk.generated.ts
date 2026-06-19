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
export const TalkdeskFullApiLicensesManagerOperationKeys = [
  "GetAccountLicenses"
] as const;
export type TalkdeskFullApiLicensesManagerOperationKey = typeof TalkdeskFullApiLicensesManagerOperationKeys[number];
// End hardened literal operation keys.

export interface TalkdeskFullApiLicensesManagerOperationPathParamMap {
  "GetAccountLicenses": {};
}

export interface TalkdeskFullApiLicensesManagerOperationRequestMap {
  "GetAccountLicenses": TalkdeskFullApiOperationInput<"GetAccountLicenses">;
}

export interface TalkdeskFullApiLicensesManagerGeneratedClient {
  GetAccountLicenses(...args: TalkdeskFullApiOperationArgs<"GetAccountLicenses">): Promise<TalkdeskFullApiOperationResponseMap["GetAccountLicenses"]>;
}

export const TalkdeskFullApiLicensesManagerGeneratedFunctionNames = [
  "GetAccountLicenses"
] as const satisfies readonly (keyof TalkdeskFullApiLicensesManagerGeneratedClient)[];

export function createTalkdeskFullApiLicensesManagerGeneratedClient(
  callOperation: TalkdeskGeneratedOperationCaller,
): TalkdeskFullApiLicensesManagerGeneratedClient {
  return {
    GetAccountLicenses: (...args) => callOperation("GetAccountLicenses", ...(args as TalkdeskFullApiOperationArgs<"GetAccountLicenses">)),
  };
}
