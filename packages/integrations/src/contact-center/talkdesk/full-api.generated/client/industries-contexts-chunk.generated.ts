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
export const TalkdeskFullApiIndustriesContextsOperationKeys = [
  "getIndustriesContext",
  "deleteIndustriesContext",
  "addIndustriesContextValue",
  "deleteIndustriesContextValue",
  "updateIndustriesContextValue"
] as const;
export type TalkdeskFullApiIndustriesContextsOperationKey = typeof TalkdeskFullApiIndustriesContextsOperationKeys[number];
// End hardened literal operation keys.

export interface TalkdeskFullApiIndustriesContextsOperationPathParamMap {
  "getIndustriesContext": { "context_id": TalkdeskFullApiPathParamValue };
  "deleteIndustriesContext": { "context_id": TalkdeskFullApiPathParamValue };
  "addIndustriesContextValue": { "context_id": TalkdeskFullApiPathParamValue };
  "deleteIndustriesContextValue": { "context_id": TalkdeskFullApiPathParamValue; "value_id": TalkdeskFullApiPathParamValue };
  "updateIndustriesContextValue": { "context_id": TalkdeskFullApiPathParamValue; "value_id": TalkdeskFullApiPathParamValue };
}

export interface TalkdeskFullApiIndustriesContextsOperationRequestMap {
  "getIndustriesContext": TalkdeskFullApiOperationInput<"getIndustriesContext">;
  "deleteIndustriesContext": TalkdeskFullApiOperationInput<"deleteIndustriesContext">;
  "addIndustriesContextValue": TalkdeskFullApiOperationInput<"addIndustriesContextValue">;
  "deleteIndustriesContextValue": TalkdeskFullApiOperationInput<"deleteIndustriesContextValue">;
  "updateIndustriesContextValue": TalkdeskFullApiOperationInput<"updateIndustriesContextValue">;
}

export interface TalkdeskFullApiIndustriesContextsGeneratedClient {
  GetIndustriesContext(...args: TalkdeskFullApiOperationArgs<"getIndustriesContext">): Promise<TalkdeskFullApiOperationResponseMap["getIndustriesContext"]>;
  DeleteIndustriesContext(...args: TalkdeskFullApiOperationArgs<"deleteIndustriesContext">): Promise<TalkdeskFullApiOperationResponseMap["deleteIndustriesContext"]>;
  AddIndustriesContextValue(...args: TalkdeskFullApiOperationArgs<"addIndustriesContextValue">): Promise<TalkdeskFullApiOperationResponseMap["addIndustriesContextValue"]>;
  DeleteIndustriesContextValue(...args: TalkdeskFullApiOperationArgs<"deleteIndustriesContextValue">): Promise<TalkdeskFullApiOperationResponseMap["deleteIndustriesContextValue"]>;
  UpdateIndustriesContextValue(...args: TalkdeskFullApiOperationArgs<"updateIndustriesContextValue">): Promise<TalkdeskFullApiOperationResponseMap["updateIndustriesContextValue"]>;
}

export const TalkdeskFullApiIndustriesContextsGeneratedFunctionNames = [
  "GetIndustriesContext",
  "DeleteIndustriesContext",
  "AddIndustriesContextValue",
  "DeleteIndustriesContextValue",
  "UpdateIndustriesContextValue"
] as const satisfies readonly (keyof TalkdeskFullApiIndustriesContextsGeneratedClient)[];

export function createTalkdeskFullApiIndustriesContextsGeneratedClient(
  callOperation: TalkdeskGeneratedOperationCaller,
): TalkdeskFullApiIndustriesContextsGeneratedClient {
  return {
    GetIndustriesContext: (...args) => callOperation("getIndustriesContext", ...(args as TalkdeskFullApiOperationArgs<"getIndustriesContext">)),
    DeleteIndustriesContext: (...args) => callOperation("deleteIndustriesContext", ...(args as TalkdeskFullApiOperationArgs<"deleteIndustriesContext">)),
    AddIndustriesContextValue: (...args) => callOperation("addIndustriesContextValue", ...(args as TalkdeskFullApiOperationArgs<"addIndustriesContextValue">)),
    DeleteIndustriesContextValue: (...args) => callOperation("deleteIndustriesContextValue", ...(args as TalkdeskFullApiOperationArgs<"deleteIndustriesContextValue">)),
    UpdateIndustriesContextValue: (...args) => callOperation("updateIndustriesContextValue", ...(args as TalkdeskFullApiOperationArgs<"updateIndustriesContextValue">)),
  };
}
