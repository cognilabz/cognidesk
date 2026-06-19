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
export const TalkdeskFullApiWFMRequestManagementAPIOperationKeys = [
  "PutTimeOffBalanceExternal",
  "DeleteTimeOffBalanceExternal"
] as const;
export type TalkdeskFullApiWFMRequestManagementAPIOperationKey = typeof TalkdeskFullApiWFMRequestManagementAPIOperationKeys[number];
// End hardened literal operation keys.

export interface TalkdeskFullApiWFMRequestManagementAPIOperationPathParamMap {
  "PutTimeOffBalanceExternal": {};
  "DeleteTimeOffBalanceExternal": { "id": TalkdeskFullApiPathParamValue };
}

export interface TalkdeskFullApiWFMRequestManagementAPIOperationRequestMap {
  "PutTimeOffBalanceExternal": TalkdeskFullApiOperationInput<"PutTimeOffBalanceExternal">;
  "DeleteTimeOffBalanceExternal": TalkdeskFullApiOperationInput<"DeleteTimeOffBalanceExternal">;
}

export interface TalkdeskFullApiWFMRequestManagementAPIGeneratedClient {
  PutTimeOffBalanceExternal(...args: TalkdeskFullApiOperationArgs<"PutTimeOffBalanceExternal">): Promise<TalkdeskFullApiOperationResponseMap["PutTimeOffBalanceExternal"]>;
  DeleteTimeOffBalanceExternal(...args: TalkdeskFullApiOperationArgs<"DeleteTimeOffBalanceExternal">): Promise<TalkdeskFullApiOperationResponseMap["DeleteTimeOffBalanceExternal"]>;
}

export const TalkdeskFullApiWFMRequestManagementAPIGeneratedFunctionNames = [
  "PutTimeOffBalanceExternal",
  "DeleteTimeOffBalanceExternal"
] as const satisfies readonly (keyof TalkdeskFullApiWFMRequestManagementAPIGeneratedClient)[];

export function createTalkdeskFullApiWFMRequestManagementAPIGeneratedClient(
  callOperation: TalkdeskGeneratedOperationCaller,
): TalkdeskFullApiWFMRequestManagementAPIGeneratedClient {
  return {
    PutTimeOffBalanceExternal: (...args) => callOperation("PutTimeOffBalanceExternal", ...(args as TalkdeskFullApiOperationArgs<"PutTimeOffBalanceExternal">)),
    DeleteTimeOffBalanceExternal: (...args) => callOperation("DeleteTimeOffBalanceExternal", ...(args as TalkdeskFullApiOperationArgs<"DeleteTimeOffBalanceExternal">)),
  };
}
