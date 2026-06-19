// Generated endpoint chunk for ZendeskFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  ZendeskGeneratedOperationCaller,
  ZendeskFullApiOperationArgs,
  ZendeskFullApiOperationInput,
  ZendeskFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { ZendeskFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const ZendeskFullApiUserPasswordsOperationKeys = [
  "ChangeOwnPassword",
  "GetUserPasswordRequirements",
  "SetUserPassword"
] as const;
export type ZendeskFullApiUserPasswordsOperationKey = typeof ZendeskFullApiUserPasswordsOperationKeys[number];
// End hardened literal operation keys.

export interface ZendeskFullApiUserPasswordsOperationPathParamMap {
  "ChangeOwnPassword": { "user_id": ZendeskFullApiPathParamValue };
  "GetUserPasswordRequirements": { "user_id": ZendeskFullApiPathParamValue };
  "SetUserPassword": { "user_id": ZendeskFullApiPathParamValue };
}

export interface ZendeskFullApiUserPasswordsOperationRequestMap {
  "ChangeOwnPassword": ZendeskFullApiOperationInput<"ChangeOwnPassword">;
  "GetUserPasswordRequirements": ZendeskFullApiOperationInput<"GetUserPasswordRequirements">;
  "SetUserPassword": ZendeskFullApiOperationInput<"SetUserPassword">;
}

export interface ZendeskFullApiUserPasswordsGeneratedClient {
  ChangeOwnPassword(...args: ZendeskFullApiOperationArgs<"ChangeOwnPassword">): Promise<ZendeskFullApiOperationResponseMap["ChangeOwnPassword"]>;
  GetUserPasswordRequirements(...args: ZendeskFullApiOperationArgs<"GetUserPasswordRequirements">): Promise<ZendeskFullApiOperationResponseMap["GetUserPasswordRequirements"]>;
  SetUserPassword(...args: ZendeskFullApiOperationArgs<"SetUserPassword">): Promise<ZendeskFullApiOperationResponseMap["SetUserPassword"]>;
}

export const ZendeskFullApiUserPasswordsGeneratedFunctionNames = [
  "ChangeOwnPassword",
  "GetUserPasswordRequirements",
  "SetUserPassword"
] as const satisfies readonly (keyof ZendeskFullApiUserPasswordsGeneratedClient)[];

export function createZendeskFullApiUserPasswordsGeneratedClient(
  callOperation: ZendeskGeneratedOperationCaller,
): ZendeskFullApiUserPasswordsGeneratedClient {
  return {
    ChangeOwnPassword: (...args) => callOperation("ChangeOwnPassword", ...(args as ZendeskFullApiOperationArgs<"ChangeOwnPassword">)),
    GetUserPasswordRequirements: (...args) => callOperation("GetUserPasswordRequirements", ...(args as ZendeskFullApiOperationArgs<"GetUserPasswordRequirements">)),
    SetUserPassword: (...args) => callOperation("SetUserPassword", ...(args as ZendeskFullApiOperationArgs<"SetUserPassword">)),
  };
}
