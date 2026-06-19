// Generated endpoint chunk for GorgiasFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  GorgiasGeneratedOperationCaller,
  GorgiasFullApiOperationArgs,
  GorgiasFullApiOperationInput,
  GorgiasFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { GorgiasFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const GorgiasFullApiUsersOperationKeys = [
  "list-users",
  "create-user",
  "delete-user",
  "get-user",
  "update-user"
] as const;
export type GorgiasFullApiUsersOperationKey = typeof GorgiasFullApiUsersOperationKeys[number];
// End hardened literal operation keys.

export interface GorgiasFullApiUsersOperationPathParamMap {
  "list-users": {};
  "create-user": {};
  "delete-user": { "id": GorgiasFullApiPathParamValue };
  "get-user": { "id": GorgiasFullApiPathParamValue };
  "update-user": { "id": GorgiasFullApiPathParamValue };
}

export interface GorgiasFullApiUsersOperationRequestMap {
  "list-users": GorgiasFullApiOperationInput<"list-users">;
  "create-user": GorgiasFullApiOperationInput<"create-user">;
  "delete-user": GorgiasFullApiOperationInput<"delete-user">;
  "get-user": GorgiasFullApiOperationInput<"get-user">;
  "update-user": GorgiasFullApiOperationInput<"update-user">;
}

export interface GorgiasFullApiUsersGeneratedClient {
  gorgiasListUsers(...args: GorgiasFullApiOperationArgs<"list-users">): Promise<GorgiasFullApiOperationResponseMap["list-users"]>;
  gorgiasCreateUser(...args: GorgiasFullApiOperationArgs<"create-user">): Promise<GorgiasFullApiOperationResponseMap["create-user"]>;
  gorgiasDeleteUser(...args: GorgiasFullApiOperationArgs<"delete-user">): Promise<GorgiasFullApiOperationResponseMap["delete-user"]>;
  gorgiasGetUser(...args: GorgiasFullApiOperationArgs<"get-user">): Promise<GorgiasFullApiOperationResponseMap["get-user"]>;
  gorgiasUpdateUser(...args: GorgiasFullApiOperationArgs<"update-user">): Promise<GorgiasFullApiOperationResponseMap["update-user"]>;
}

export const GorgiasFullApiUsersGeneratedFunctionNames = [
  "gorgiasListUsers",
  "gorgiasCreateUser",
  "gorgiasDeleteUser",
  "gorgiasGetUser",
  "gorgiasUpdateUser"
] as const satisfies readonly (keyof GorgiasFullApiUsersGeneratedClient)[];

export function createGorgiasFullApiUsersGeneratedClient(
  callOperation: GorgiasGeneratedOperationCaller,
): GorgiasFullApiUsersGeneratedClient {
  return {
    gorgiasListUsers: (...args) => callOperation("list-users", ...(args as GorgiasFullApiOperationArgs<"list-users">)),
    gorgiasCreateUser: (...args) => callOperation("create-user", ...(args as GorgiasFullApiOperationArgs<"create-user">)),
    gorgiasDeleteUser: (...args) => callOperation("delete-user", ...(args as GorgiasFullApiOperationArgs<"delete-user">)),
    gorgiasGetUser: (...args) => callOperation("get-user", ...(args as GorgiasFullApiOperationArgs<"get-user">)),
    gorgiasUpdateUser: (...args) => callOperation("update-user", ...(args as GorgiasFullApiOperationArgs<"update-user">)),
  };
}
