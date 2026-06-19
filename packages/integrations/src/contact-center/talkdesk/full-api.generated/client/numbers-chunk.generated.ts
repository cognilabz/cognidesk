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
export const TalkdeskFullApiNumbersOperationKeys = [
  "getAccountNumbers",
  "getNumberDetail"
] as const;
export type TalkdeskFullApiNumbersOperationKey = typeof TalkdeskFullApiNumbersOperationKeys[number];
// End hardened literal operation keys.

export interface TalkdeskFullApiNumbersOperationPathParamMap {
  "getAccountNumbers": {};
  "getNumberDetail": { "number_id": TalkdeskFullApiPathParamValue };
}

export interface TalkdeskFullApiNumbersOperationRequestMap {
  "getAccountNumbers": TalkdeskFullApiOperationInput<"getAccountNumbers">;
  "getNumberDetail": TalkdeskFullApiOperationInput<"getNumberDetail">;
}

export interface TalkdeskFullApiNumbersGeneratedClient {
  GetAccountNumbers(...args: TalkdeskFullApiOperationArgs<"getAccountNumbers">): Promise<TalkdeskFullApiOperationResponseMap["getAccountNumbers"]>;
  GetNumberDetail(...args: TalkdeskFullApiOperationArgs<"getNumberDetail">): Promise<TalkdeskFullApiOperationResponseMap["getNumberDetail"]>;
}

export const TalkdeskFullApiNumbersGeneratedFunctionNames = [
  "GetAccountNumbers",
  "GetNumberDetail"
] as const satisfies readonly (keyof TalkdeskFullApiNumbersGeneratedClient)[];

export function createTalkdeskFullApiNumbersGeneratedClient(
  callOperation: TalkdeskGeneratedOperationCaller,
): TalkdeskFullApiNumbersGeneratedClient {
  return {
    GetAccountNumbers: (...args) => callOperation("getAccountNumbers", ...(args as TalkdeskFullApiOperationArgs<"getAccountNumbers">)),
    GetNumberDetail: (...args) => callOperation("getNumberDetail", ...(args as TalkdeskFullApiOperationArgs<"getNumberDetail">)),
  };
}
