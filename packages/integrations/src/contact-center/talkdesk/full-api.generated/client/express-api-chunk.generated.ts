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
export const TalkdeskFullApiEXPRESSAPIOperationKeys = [
  "getResellerContractInfo",
  "getResellerContractAction",
  "createResellerContractAction",
  "createExpressAccount",
  "validateAccount"
] as const;
export type TalkdeskFullApiEXPRESSAPIOperationKey = typeof TalkdeskFullApiEXPRESSAPIOperationKeys[number];
// End hardened literal operation keys.

export interface TalkdeskFullApiEXPRESSAPIOperationPathParamMap {
  "getResellerContractInfo": { "account_id": TalkdeskFullApiPathParamValue };
  "getResellerContractAction": { "account_id": TalkdeskFullApiPathParamValue };
  "createResellerContractAction": { "account_id": TalkdeskFullApiPathParamValue };
  "createExpressAccount": {};
  "validateAccount": { "account_name": TalkdeskFullApiPathParamValue };
}

export interface TalkdeskFullApiEXPRESSAPIOperationRequestMap {
  "getResellerContractInfo": TalkdeskFullApiOperationInput<"getResellerContractInfo">;
  "getResellerContractAction": TalkdeskFullApiOperationInput<"getResellerContractAction">;
  "createResellerContractAction": TalkdeskFullApiOperationInput<"createResellerContractAction">;
  "createExpressAccount": TalkdeskFullApiOperationInput<"createExpressAccount">;
  "validateAccount": TalkdeskFullApiOperationInput<"validateAccount">;
}

export interface TalkdeskFullApiEXPRESSAPIGeneratedClient {
  GetResellerContractInfo(...args: TalkdeskFullApiOperationArgs<"getResellerContractInfo">): Promise<TalkdeskFullApiOperationResponseMap["getResellerContractInfo"]>;
  GetResellerContractAction(...args: TalkdeskFullApiOperationArgs<"getResellerContractAction">): Promise<TalkdeskFullApiOperationResponseMap["getResellerContractAction"]>;
  CreateResellerContractAction(...args: TalkdeskFullApiOperationArgs<"createResellerContractAction">): Promise<TalkdeskFullApiOperationResponseMap["createResellerContractAction"]>;
  CreateExpressAccount(...args: TalkdeskFullApiOperationArgs<"createExpressAccount">): Promise<TalkdeskFullApiOperationResponseMap["createExpressAccount"]>;
  ValidateAccount(...args: TalkdeskFullApiOperationArgs<"validateAccount">): Promise<TalkdeskFullApiOperationResponseMap["validateAccount"]>;
}

export const TalkdeskFullApiEXPRESSAPIGeneratedFunctionNames = [
  "GetResellerContractInfo",
  "GetResellerContractAction",
  "CreateResellerContractAction",
  "CreateExpressAccount",
  "ValidateAccount"
] as const satisfies readonly (keyof TalkdeskFullApiEXPRESSAPIGeneratedClient)[];

export function createTalkdeskFullApiEXPRESSAPIGeneratedClient(
  callOperation: TalkdeskGeneratedOperationCaller,
): TalkdeskFullApiEXPRESSAPIGeneratedClient {
  return {
    GetResellerContractInfo: (...args) => callOperation("getResellerContractInfo", ...(args as TalkdeskFullApiOperationArgs<"getResellerContractInfo">)),
    GetResellerContractAction: (...args) => callOperation("getResellerContractAction", ...(args as TalkdeskFullApiOperationArgs<"getResellerContractAction">)),
    CreateResellerContractAction: (...args) => callOperation("createResellerContractAction", ...(args as TalkdeskFullApiOperationArgs<"createResellerContractAction">)),
    CreateExpressAccount: (...args) => callOperation("createExpressAccount", ...(args as TalkdeskFullApiOperationArgs<"createExpressAccount">)),
    ValidateAccount: (...args) => callOperation("validateAccount", ...(args as TalkdeskFullApiOperationArgs<"validateAccount">)),
  };
}
