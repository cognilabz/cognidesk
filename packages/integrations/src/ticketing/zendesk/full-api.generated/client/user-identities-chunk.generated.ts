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
export const ZendeskFullApiUserIdentitiesOperationKeys = [
  "CreateEndUserIdentity",
  "CreateUserIdentity",
  "DeleteEndUserIdentity",
  "DeleteUserIdentity",
  "ListEndUserIdentities",
  "ListUserIdentities",
  "MakeEndUserIdentityPrimary",
  "MakeUserIdentityPrimary",
  "RequestEndUserVerification",
  "RequestUserVerification",
  "ShowEndUserIdentity",
  "ShowUserIdentity",
  "UpdateUserIdentity",
  "VerifyUserIdentity"
] as const;
export type ZendeskFullApiUserIdentitiesOperationKey = typeof ZendeskFullApiUserIdentitiesOperationKeys[number];
// End hardened literal operation keys.

export interface ZendeskFullApiUserIdentitiesOperationPathParamMap {
  "CreateEndUserIdentity": { "user_id": ZendeskFullApiPathParamValue };
  "CreateUserIdentity": { "user_id": ZendeskFullApiPathParamValue };
  "DeleteEndUserIdentity": { "user_id": ZendeskFullApiPathParamValue; "user_identity_id": ZendeskFullApiPathParamValue };
  "DeleteUserIdentity": { "user_id": ZendeskFullApiPathParamValue; "user_identity_id": ZendeskFullApiPathParamValue };
  "ListEndUserIdentities": { "user_id": ZendeskFullApiPathParamValue };
  "ListUserIdentities": { "user_id": ZendeskFullApiPathParamValue };
  "MakeEndUserIdentityPrimary": { "user_id": ZendeskFullApiPathParamValue; "user_identity_id": ZendeskFullApiPathParamValue };
  "MakeUserIdentityPrimary": { "user_id": ZendeskFullApiPathParamValue; "user_identity_id": ZendeskFullApiPathParamValue };
  "RequestEndUserVerification": { "user_id": ZendeskFullApiPathParamValue; "user_identity_id": ZendeskFullApiPathParamValue };
  "RequestUserVerification": { "user_id": ZendeskFullApiPathParamValue; "user_identity_id": ZendeskFullApiPathParamValue };
  "ShowEndUserIdentity": { "user_id": ZendeskFullApiPathParamValue; "user_identity_id": ZendeskFullApiPathParamValue };
  "ShowUserIdentity": { "user_id": ZendeskFullApiPathParamValue; "user_identity_id": ZendeskFullApiPathParamValue };
  "UpdateUserIdentity": { "user_id": ZendeskFullApiPathParamValue; "user_identity_id": ZendeskFullApiPathParamValue };
  "VerifyUserIdentity": { "user_id": ZendeskFullApiPathParamValue; "user_identity_id": ZendeskFullApiPathParamValue };
}

export interface ZendeskFullApiUserIdentitiesOperationRequestMap {
  "CreateEndUserIdentity": ZendeskFullApiOperationInput<"CreateEndUserIdentity">;
  "CreateUserIdentity": ZendeskFullApiOperationInput<"CreateUserIdentity">;
  "DeleteEndUserIdentity": ZendeskFullApiOperationInput<"DeleteEndUserIdentity">;
  "DeleteUserIdentity": ZendeskFullApiOperationInput<"DeleteUserIdentity">;
  "ListEndUserIdentities": ZendeskFullApiOperationInput<"ListEndUserIdentities">;
  "ListUserIdentities": ZendeskFullApiOperationInput<"ListUserIdentities">;
  "MakeEndUserIdentityPrimary": ZendeskFullApiOperationInput<"MakeEndUserIdentityPrimary">;
  "MakeUserIdentityPrimary": ZendeskFullApiOperationInput<"MakeUserIdentityPrimary">;
  "RequestEndUserVerification": ZendeskFullApiOperationInput<"RequestEndUserVerification">;
  "RequestUserVerification": ZendeskFullApiOperationInput<"RequestUserVerification">;
  "ShowEndUserIdentity": ZendeskFullApiOperationInput<"ShowEndUserIdentity">;
  "ShowUserIdentity": ZendeskFullApiOperationInput<"ShowUserIdentity">;
  "UpdateUserIdentity": ZendeskFullApiOperationInput<"UpdateUserIdentity">;
  "VerifyUserIdentity": ZendeskFullApiOperationInput<"VerifyUserIdentity">;
}

export interface ZendeskFullApiUserIdentitiesGeneratedClient {
  CreateEndUserIdentity(...args: ZendeskFullApiOperationArgs<"CreateEndUserIdentity">): Promise<ZendeskFullApiOperationResponseMap["CreateEndUserIdentity"]>;
  CreateUserIdentity(...args: ZendeskFullApiOperationArgs<"CreateUserIdentity">): Promise<ZendeskFullApiOperationResponseMap["CreateUserIdentity"]>;
  DeleteEndUserIdentity(...args: ZendeskFullApiOperationArgs<"DeleteEndUserIdentity">): Promise<ZendeskFullApiOperationResponseMap["DeleteEndUserIdentity"]>;
  DeleteUserIdentity(...args: ZendeskFullApiOperationArgs<"DeleteUserIdentity">): Promise<ZendeskFullApiOperationResponseMap["DeleteUserIdentity"]>;
  ListEndUserIdentities(...args: ZendeskFullApiOperationArgs<"ListEndUserIdentities">): Promise<ZendeskFullApiOperationResponseMap["ListEndUserIdentities"]>;
  ListUserIdentities(...args: ZendeskFullApiOperationArgs<"ListUserIdentities">): Promise<ZendeskFullApiOperationResponseMap["ListUserIdentities"]>;
  MakeEndUserIdentityPrimary(...args: ZendeskFullApiOperationArgs<"MakeEndUserIdentityPrimary">): Promise<ZendeskFullApiOperationResponseMap["MakeEndUserIdentityPrimary"]>;
  MakeUserIdentityPrimary(...args: ZendeskFullApiOperationArgs<"MakeUserIdentityPrimary">): Promise<ZendeskFullApiOperationResponseMap["MakeUserIdentityPrimary"]>;
  RequestEndUserVerification(...args: ZendeskFullApiOperationArgs<"RequestEndUserVerification">): Promise<ZendeskFullApiOperationResponseMap["RequestEndUserVerification"]>;
  RequestUserVerification(...args: ZendeskFullApiOperationArgs<"RequestUserVerification">): Promise<ZendeskFullApiOperationResponseMap["RequestUserVerification"]>;
  ShowEndUserIdentity(...args: ZendeskFullApiOperationArgs<"ShowEndUserIdentity">): Promise<ZendeskFullApiOperationResponseMap["ShowEndUserIdentity"]>;
  ShowUserIdentity(...args: ZendeskFullApiOperationArgs<"ShowUserIdentity">): Promise<ZendeskFullApiOperationResponseMap["ShowUserIdentity"]>;
  UpdateUserIdentity(...args: ZendeskFullApiOperationArgs<"UpdateUserIdentity">): Promise<ZendeskFullApiOperationResponseMap["UpdateUserIdentity"]>;
  VerifyUserIdentity(...args: ZendeskFullApiOperationArgs<"VerifyUserIdentity">): Promise<ZendeskFullApiOperationResponseMap["VerifyUserIdentity"]>;
}

export const ZendeskFullApiUserIdentitiesGeneratedFunctionNames = [
  "CreateEndUserIdentity",
  "CreateUserIdentity",
  "DeleteEndUserIdentity",
  "DeleteUserIdentity",
  "ListEndUserIdentities",
  "ListUserIdentities",
  "MakeEndUserIdentityPrimary",
  "MakeUserIdentityPrimary",
  "RequestEndUserVerification",
  "RequestUserVerification",
  "ShowEndUserIdentity",
  "ShowUserIdentity",
  "UpdateUserIdentity",
  "VerifyUserIdentity"
] as const satisfies readonly (keyof ZendeskFullApiUserIdentitiesGeneratedClient)[];

export function createZendeskFullApiUserIdentitiesGeneratedClient(
  callOperation: ZendeskGeneratedOperationCaller,
): ZendeskFullApiUserIdentitiesGeneratedClient {
  return {
    CreateEndUserIdentity: (...args) => callOperation("CreateEndUserIdentity", ...(args as ZendeskFullApiOperationArgs<"CreateEndUserIdentity">)),
    CreateUserIdentity: (...args) => callOperation("CreateUserIdentity", ...(args as ZendeskFullApiOperationArgs<"CreateUserIdentity">)),
    DeleteEndUserIdentity: (...args) => callOperation("DeleteEndUserIdentity", ...(args as ZendeskFullApiOperationArgs<"DeleteEndUserIdentity">)),
    DeleteUserIdentity: (...args) => callOperation("DeleteUserIdentity", ...(args as ZendeskFullApiOperationArgs<"DeleteUserIdentity">)),
    ListEndUserIdentities: (...args) => callOperation("ListEndUserIdentities", ...(args as ZendeskFullApiOperationArgs<"ListEndUserIdentities">)),
    ListUserIdentities: (...args) => callOperation("ListUserIdentities", ...(args as ZendeskFullApiOperationArgs<"ListUserIdentities">)),
    MakeEndUserIdentityPrimary: (...args) => callOperation("MakeEndUserIdentityPrimary", ...(args as ZendeskFullApiOperationArgs<"MakeEndUserIdentityPrimary">)),
    MakeUserIdentityPrimary: (...args) => callOperation("MakeUserIdentityPrimary", ...(args as ZendeskFullApiOperationArgs<"MakeUserIdentityPrimary">)),
    RequestEndUserVerification: (...args) => callOperation("RequestEndUserVerification", ...(args as ZendeskFullApiOperationArgs<"RequestEndUserVerification">)),
    RequestUserVerification: (...args) => callOperation("RequestUserVerification", ...(args as ZendeskFullApiOperationArgs<"RequestUserVerification">)),
    ShowEndUserIdentity: (...args) => callOperation("ShowEndUserIdentity", ...(args as ZendeskFullApiOperationArgs<"ShowEndUserIdentity">)),
    ShowUserIdentity: (...args) => callOperation("ShowUserIdentity", ...(args as ZendeskFullApiOperationArgs<"ShowUserIdentity">)),
    UpdateUserIdentity: (...args) => callOperation("UpdateUserIdentity", ...(args as ZendeskFullApiOperationArgs<"UpdateUserIdentity">)),
    VerifyUserIdentity: (...args) => callOperation("VerifyUserIdentity", ...(args as ZendeskFullApiOperationArgs<"VerifyUserIdentity">)),
  };
}
