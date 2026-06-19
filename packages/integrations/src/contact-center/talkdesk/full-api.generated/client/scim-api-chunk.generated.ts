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
export const TalkdeskFullApiSCIMAPIOperationKeys = [
  "getUsers",
  "createUsers",
  "deleteUser",
  "getUser",
  "patchUser",
  "updateUser",
  "getServiceProviderConfigs",
  "getResourceTypes",
  "getUserResourceTypes",
  "getSchemas",
  "getSchema"
] as const;
export type TalkdeskFullApiSCIMAPIOperationKey = typeof TalkdeskFullApiSCIMAPIOperationKeys[number];
// End hardened literal operation keys.

export interface TalkdeskFullApiSCIMAPIOperationPathParamMap {
  "getUsers": {};
  "createUsers": {};
  "deleteUser": { "user_id": TalkdeskFullApiPathParamValue };
  "getUser": { "user_id": TalkdeskFullApiPathParamValue };
  "patchUser": { "user_id": TalkdeskFullApiPathParamValue };
  "updateUser": { "user_id": TalkdeskFullApiPathParamValue };
  "getServiceProviderConfigs": {};
  "getResourceTypes": {};
  "getUserResourceTypes": {};
  "getSchemas": {};
  "getSchema": { "id": TalkdeskFullApiPathParamValue };
}

export interface TalkdeskFullApiSCIMAPIOperationRequestMap {
  "getUsers": TalkdeskFullApiOperationInput<"getUsers">;
  "createUsers": TalkdeskFullApiOperationInput<"createUsers">;
  "deleteUser": TalkdeskFullApiOperationInput<"deleteUser">;
  "getUser": TalkdeskFullApiOperationInput<"getUser">;
  "patchUser": TalkdeskFullApiOperationInput<"patchUser">;
  "updateUser": TalkdeskFullApiOperationInput<"updateUser">;
  "getServiceProviderConfigs": TalkdeskFullApiOperationInput<"getServiceProviderConfigs">;
  "getResourceTypes": TalkdeskFullApiOperationInput<"getResourceTypes">;
  "getUserResourceTypes": TalkdeskFullApiOperationInput<"getUserResourceTypes">;
  "getSchemas": TalkdeskFullApiOperationInput<"getSchemas">;
  "getSchema": TalkdeskFullApiOperationInput<"getSchema">;
}

export interface TalkdeskFullApiSCIMAPIGeneratedClient {
  GetUsers(...args: TalkdeskFullApiOperationArgs<"getUsers">): Promise<TalkdeskFullApiOperationResponseMap["getUsers"]>;
  CreateUsers(...args: TalkdeskFullApiOperationArgs<"createUsers">): Promise<TalkdeskFullApiOperationResponseMap["createUsers"]>;
  DeleteUser(...args: TalkdeskFullApiOperationArgs<"deleteUser">): Promise<TalkdeskFullApiOperationResponseMap["deleteUser"]>;
  GetUser2(...args: TalkdeskFullApiOperationArgs<"getUser">): Promise<TalkdeskFullApiOperationResponseMap["getUser"]>;
  PatchUser(...args: TalkdeskFullApiOperationArgs<"patchUser">): Promise<TalkdeskFullApiOperationResponseMap["patchUser"]>;
  UpdateUser(...args: TalkdeskFullApiOperationArgs<"updateUser">): Promise<TalkdeskFullApiOperationResponseMap["updateUser"]>;
  GetServiceProviderConfigs(...args: TalkdeskFullApiOperationArgs<"getServiceProviderConfigs">): Promise<TalkdeskFullApiOperationResponseMap["getServiceProviderConfigs"]>;
  GetResourceTypes(...args: TalkdeskFullApiOperationArgs<"getResourceTypes">): Promise<TalkdeskFullApiOperationResponseMap["getResourceTypes"]>;
  GetUserResourceTypes(...args: TalkdeskFullApiOperationArgs<"getUserResourceTypes">): Promise<TalkdeskFullApiOperationResponseMap["getUserResourceTypes"]>;
  GetSchemas(...args: TalkdeskFullApiOperationArgs<"getSchemas">): Promise<TalkdeskFullApiOperationResponseMap["getSchemas"]>;
  GetSchema(...args: TalkdeskFullApiOperationArgs<"getSchema">): Promise<TalkdeskFullApiOperationResponseMap["getSchema"]>;
}

export const TalkdeskFullApiSCIMAPIGeneratedFunctionNames = [
  "GetUsers",
  "CreateUsers",
  "DeleteUser",
  "GetUser2",
  "PatchUser",
  "UpdateUser",
  "GetServiceProviderConfigs",
  "GetResourceTypes",
  "GetUserResourceTypes",
  "GetSchemas",
  "GetSchema"
] as const satisfies readonly (keyof TalkdeskFullApiSCIMAPIGeneratedClient)[];

export function createTalkdeskFullApiSCIMAPIGeneratedClient(
  callOperation: TalkdeskGeneratedOperationCaller,
): TalkdeskFullApiSCIMAPIGeneratedClient {
  return {
    GetUsers: (...args) => callOperation("getUsers", ...(args as TalkdeskFullApiOperationArgs<"getUsers">)),
    CreateUsers: (...args) => callOperation("createUsers", ...(args as TalkdeskFullApiOperationArgs<"createUsers">)),
    DeleteUser: (...args) => callOperation("deleteUser", ...(args as TalkdeskFullApiOperationArgs<"deleteUser">)),
    GetUser2: (...args) => callOperation("getUser", ...(args as TalkdeskFullApiOperationArgs<"getUser">)),
    PatchUser: (...args) => callOperation("patchUser", ...(args as TalkdeskFullApiOperationArgs<"patchUser">)),
    UpdateUser: (...args) => callOperation("updateUser", ...(args as TalkdeskFullApiOperationArgs<"updateUser">)),
    GetServiceProviderConfigs: (...args) => callOperation("getServiceProviderConfigs", ...(args as TalkdeskFullApiOperationArgs<"getServiceProviderConfigs">)),
    GetResourceTypes: (...args) => callOperation("getResourceTypes", ...(args as TalkdeskFullApiOperationArgs<"getResourceTypes">)),
    GetUserResourceTypes: (...args) => callOperation("getUserResourceTypes", ...(args as TalkdeskFullApiOperationArgs<"getUserResourceTypes">)),
    GetSchemas: (...args) => callOperation("getSchemas", ...(args as TalkdeskFullApiOperationArgs<"getSchemas">)),
    GetSchema: (...args) => callOperation("getSchema", ...(args as TalkdeskFullApiOperationArgs<"getSchema">)),
  };
}
