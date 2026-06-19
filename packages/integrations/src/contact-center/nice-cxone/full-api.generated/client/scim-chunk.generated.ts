// Generated endpoint chunk for NiceCxoneFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  NiceCxoneGeneratedOperationCaller,
  NiceCxoneFullApiOperationArgs,
  NiceCxoneFullApiOperationInput,
  NiceCxoneFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { NiceCxoneFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const NiceCxoneFullApiSCIMOperationKeys = [
  "cxone-scim-api-docs:searchUser:GET:/scim/v2/Users",
  "cxone-scim-api-docs:registerScimUser:POST:/scim/v2/Users",
  "cxone-scim-api-docs:getScimUserById:GET:/scim/v2/Users/{userId}",
  "cxone-scim-api-docs:updateScimUser:PUT:/scim/v2/Users/{userId}",
  "cxone-scim-api-docs:updateScimUserPatch:PATCH:/scim/v2/Users/{userId}",
  "cxone-scim-api-docs:getSchemas:GET:/scim/v2/Schemas",
  "cxone-scim-api-docs:get-basic-auth-Users:GET:/basic-auth/scim/v2/Users",
  "cxone-scim-api-docs:post-basic-auth-users:POST:/basic-auth/scim/v2/Users",
  "cxone-scim-api-docs:get-basicauth-ScimUserbyID:GET:/basic-auth/scim/v2/Users/{userId}",
  "cxone-scim-api-docs:put-basicauth-ScimUserbyID:PUT:/basic-auth/scim/v2/Users/{userId}",
  "cxone-scim-api-docs:patch-basic-auth-ScimUserbyID:PATCH:/basic-auth/scim/v2/Users/{userId}",
  "cxone-scim-api-docs:get-basic-auth-Schemas:GET:/basic-auth/scim/v2/Schemas"
] as const;
export type NiceCxoneFullApiSCIMOperationKey = typeof NiceCxoneFullApiSCIMOperationKeys[number];
// End hardened literal operation keys.

export interface NiceCxoneFullApiSCIMOperationPathParamMap {
  "cxone-scim-api-docs:searchUser:GET:/scim/v2/Users": {};
  "cxone-scim-api-docs:registerScimUser:POST:/scim/v2/Users": {};
  "cxone-scim-api-docs:getScimUserById:GET:/scim/v2/Users/{userId}": { "userId": NiceCxoneFullApiPathParamValue };
  "cxone-scim-api-docs:updateScimUser:PUT:/scim/v2/Users/{userId}": { "userId": NiceCxoneFullApiPathParamValue };
  "cxone-scim-api-docs:updateScimUserPatch:PATCH:/scim/v2/Users/{userId}": { "userId": NiceCxoneFullApiPathParamValue };
  "cxone-scim-api-docs:getSchemas:GET:/scim/v2/Schemas": {};
  "cxone-scim-api-docs:get-basic-auth-Users:GET:/basic-auth/scim/v2/Users": {};
  "cxone-scim-api-docs:post-basic-auth-users:POST:/basic-auth/scim/v2/Users": {};
  "cxone-scim-api-docs:get-basicauth-ScimUserbyID:GET:/basic-auth/scim/v2/Users/{userId}": { "userId": NiceCxoneFullApiPathParamValue };
  "cxone-scim-api-docs:put-basicauth-ScimUserbyID:PUT:/basic-auth/scim/v2/Users/{userId}": { "userId": NiceCxoneFullApiPathParamValue };
  "cxone-scim-api-docs:patch-basic-auth-ScimUserbyID:PATCH:/basic-auth/scim/v2/Users/{userId}": { "userId": NiceCxoneFullApiPathParamValue };
  "cxone-scim-api-docs:get-basic-auth-Schemas:GET:/basic-auth/scim/v2/Schemas": {};
}

export interface NiceCxoneFullApiSCIMOperationRequestMap {
  "cxone-scim-api-docs:searchUser:GET:/scim/v2/Users": NiceCxoneFullApiOperationInput<"cxone-scim-api-docs:searchUser:GET:/scim/v2/Users">;
  "cxone-scim-api-docs:registerScimUser:POST:/scim/v2/Users": NiceCxoneFullApiOperationInput<"cxone-scim-api-docs:registerScimUser:POST:/scim/v2/Users">;
  "cxone-scim-api-docs:getScimUserById:GET:/scim/v2/Users/{userId}": NiceCxoneFullApiOperationInput<"cxone-scim-api-docs:getScimUserById:GET:/scim/v2/Users/{userId}">;
  "cxone-scim-api-docs:updateScimUser:PUT:/scim/v2/Users/{userId}": NiceCxoneFullApiOperationInput<"cxone-scim-api-docs:updateScimUser:PUT:/scim/v2/Users/{userId}">;
  "cxone-scim-api-docs:updateScimUserPatch:PATCH:/scim/v2/Users/{userId}": NiceCxoneFullApiOperationInput<"cxone-scim-api-docs:updateScimUserPatch:PATCH:/scim/v2/Users/{userId}">;
  "cxone-scim-api-docs:getSchemas:GET:/scim/v2/Schemas": NiceCxoneFullApiOperationInput<"cxone-scim-api-docs:getSchemas:GET:/scim/v2/Schemas">;
  "cxone-scim-api-docs:get-basic-auth-Users:GET:/basic-auth/scim/v2/Users": NiceCxoneFullApiOperationInput<"cxone-scim-api-docs:get-basic-auth-Users:GET:/basic-auth/scim/v2/Users">;
  "cxone-scim-api-docs:post-basic-auth-users:POST:/basic-auth/scim/v2/Users": NiceCxoneFullApiOperationInput<"cxone-scim-api-docs:post-basic-auth-users:POST:/basic-auth/scim/v2/Users">;
  "cxone-scim-api-docs:get-basicauth-ScimUserbyID:GET:/basic-auth/scim/v2/Users/{userId}": NiceCxoneFullApiOperationInput<"cxone-scim-api-docs:get-basicauth-ScimUserbyID:GET:/basic-auth/scim/v2/Users/{userId}">;
  "cxone-scim-api-docs:put-basicauth-ScimUserbyID:PUT:/basic-auth/scim/v2/Users/{userId}": NiceCxoneFullApiOperationInput<"cxone-scim-api-docs:put-basicauth-ScimUserbyID:PUT:/basic-auth/scim/v2/Users/{userId}">;
  "cxone-scim-api-docs:patch-basic-auth-ScimUserbyID:PATCH:/basic-auth/scim/v2/Users/{userId}": NiceCxoneFullApiOperationInput<"cxone-scim-api-docs:patch-basic-auth-ScimUserbyID:PATCH:/basic-auth/scim/v2/Users/{userId}">;
  "cxone-scim-api-docs:get-basic-auth-Schemas:GET:/basic-auth/scim/v2/Schemas": NiceCxoneFullApiOperationInput<"cxone-scim-api-docs:get-basic-auth-Schemas:GET:/basic-auth/scim/v2/Schemas">;
}

export interface NiceCxoneFullApiSCIMGeneratedClient {
  CxoneScimApiDocsSearchUser(...args: NiceCxoneFullApiOperationArgs<"cxone-scim-api-docs:searchUser:GET:/scim/v2/Users">): Promise<NiceCxoneFullApiOperationResponseMap["cxone-scim-api-docs:searchUser:GET:/scim/v2/Users"]>;
  CxoneScimApiDocsRegisterScimUser(...args: NiceCxoneFullApiOperationArgs<"cxone-scim-api-docs:registerScimUser:POST:/scim/v2/Users">): Promise<NiceCxoneFullApiOperationResponseMap["cxone-scim-api-docs:registerScimUser:POST:/scim/v2/Users"]>;
  CxoneScimApiDocsGetScimUserById(...args: NiceCxoneFullApiOperationArgs<"cxone-scim-api-docs:getScimUserById:GET:/scim/v2/Users/{userId}">): Promise<NiceCxoneFullApiOperationResponseMap["cxone-scim-api-docs:getScimUserById:GET:/scim/v2/Users/{userId}"]>;
  CxoneScimApiDocsUpdateScimUser(...args: NiceCxoneFullApiOperationArgs<"cxone-scim-api-docs:updateScimUser:PUT:/scim/v2/Users/{userId}">): Promise<NiceCxoneFullApiOperationResponseMap["cxone-scim-api-docs:updateScimUser:PUT:/scim/v2/Users/{userId}"]>;
  CxoneScimApiDocsUpdateScimUserPatch(...args: NiceCxoneFullApiOperationArgs<"cxone-scim-api-docs:updateScimUserPatch:PATCH:/scim/v2/Users/{userId}">): Promise<NiceCxoneFullApiOperationResponseMap["cxone-scim-api-docs:updateScimUserPatch:PATCH:/scim/v2/Users/{userId}"]>;
  CxoneScimApiDocsGetSchemas(...args: NiceCxoneFullApiOperationArgs<"cxone-scim-api-docs:getSchemas:GET:/scim/v2/Schemas">): Promise<NiceCxoneFullApiOperationResponseMap["cxone-scim-api-docs:getSchemas:GET:/scim/v2/Schemas"]>;
  CxoneScimApiDocsGetBasicAuthUsers(...args: NiceCxoneFullApiOperationArgs<"cxone-scim-api-docs:get-basic-auth-Users:GET:/basic-auth/scim/v2/Users">): Promise<NiceCxoneFullApiOperationResponseMap["cxone-scim-api-docs:get-basic-auth-Users:GET:/basic-auth/scim/v2/Users"]>;
  CxoneScimApiDocsPostBasicAuthUsers(...args: NiceCxoneFullApiOperationArgs<"cxone-scim-api-docs:post-basic-auth-users:POST:/basic-auth/scim/v2/Users">): Promise<NiceCxoneFullApiOperationResponseMap["cxone-scim-api-docs:post-basic-auth-users:POST:/basic-auth/scim/v2/Users"]>;
  CxoneScimApiDocsGetBasicauthScimUserbyID(...args: NiceCxoneFullApiOperationArgs<"cxone-scim-api-docs:get-basicauth-ScimUserbyID:GET:/basic-auth/scim/v2/Users/{userId}">): Promise<NiceCxoneFullApiOperationResponseMap["cxone-scim-api-docs:get-basicauth-ScimUserbyID:GET:/basic-auth/scim/v2/Users/{userId}"]>;
  CxoneScimApiDocsPutBasicauthScimUserbyID(...args: NiceCxoneFullApiOperationArgs<"cxone-scim-api-docs:put-basicauth-ScimUserbyID:PUT:/basic-auth/scim/v2/Users/{userId}">): Promise<NiceCxoneFullApiOperationResponseMap["cxone-scim-api-docs:put-basicauth-ScimUserbyID:PUT:/basic-auth/scim/v2/Users/{userId}"]>;
  CxoneScimApiDocsPatchBasicAuthScimUserbyID(...args: NiceCxoneFullApiOperationArgs<"cxone-scim-api-docs:patch-basic-auth-ScimUserbyID:PATCH:/basic-auth/scim/v2/Users/{userId}">): Promise<NiceCxoneFullApiOperationResponseMap["cxone-scim-api-docs:patch-basic-auth-ScimUserbyID:PATCH:/basic-auth/scim/v2/Users/{userId}"]>;
  CxoneScimApiDocsGetBasicAuthSchemas(...args: NiceCxoneFullApiOperationArgs<"cxone-scim-api-docs:get-basic-auth-Schemas:GET:/basic-auth/scim/v2/Schemas">): Promise<NiceCxoneFullApiOperationResponseMap["cxone-scim-api-docs:get-basic-auth-Schemas:GET:/basic-auth/scim/v2/Schemas"]>;
}

export const NiceCxoneFullApiSCIMGeneratedFunctionNames = [
  "CxoneScimApiDocsSearchUser",
  "CxoneScimApiDocsRegisterScimUser",
  "CxoneScimApiDocsGetScimUserById",
  "CxoneScimApiDocsUpdateScimUser",
  "CxoneScimApiDocsUpdateScimUserPatch",
  "CxoneScimApiDocsGetSchemas",
  "CxoneScimApiDocsGetBasicAuthUsers",
  "CxoneScimApiDocsPostBasicAuthUsers",
  "CxoneScimApiDocsGetBasicauthScimUserbyID",
  "CxoneScimApiDocsPutBasicauthScimUserbyID",
  "CxoneScimApiDocsPatchBasicAuthScimUserbyID",
  "CxoneScimApiDocsGetBasicAuthSchemas"
] as const satisfies readonly (keyof NiceCxoneFullApiSCIMGeneratedClient)[];

export function createNiceCxoneFullApiSCIMGeneratedClient(
  callOperation: NiceCxoneGeneratedOperationCaller,
): NiceCxoneFullApiSCIMGeneratedClient {
  return {
    CxoneScimApiDocsSearchUser: (...args) => callOperation("cxone-scim-api-docs:searchUser:GET:/scim/v2/Users", ...(args as NiceCxoneFullApiOperationArgs<"cxone-scim-api-docs:searchUser:GET:/scim/v2/Users">)),
    CxoneScimApiDocsRegisterScimUser: (...args) => callOperation("cxone-scim-api-docs:registerScimUser:POST:/scim/v2/Users", ...(args as NiceCxoneFullApiOperationArgs<"cxone-scim-api-docs:registerScimUser:POST:/scim/v2/Users">)),
    CxoneScimApiDocsGetScimUserById: (...args) => callOperation("cxone-scim-api-docs:getScimUserById:GET:/scim/v2/Users/{userId}", ...(args as NiceCxoneFullApiOperationArgs<"cxone-scim-api-docs:getScimUserById:GET:/scim/v2/Users/{userId}">)),
    CxoneScimApiDocsUpdateScimUser: (...args) => callOperation("cxone-scim-api-docs:updateScimUser:PUT:/scim/v2/Users/{userId}", ...(args as NiceCxoneFullApiOperationArgs<"cxone-scim-api-docs:updateScimUser:PUT:/scim/v2/Users/{userId}">)),
    CxoneScimApiDocsUpdateScimUserPatch: (...args) => callOperation("cxone-scim-api-docs:updateScimUserPatch:PATCH:/scim/v2/Users/{userId}", ...(args as NiceCxoneFullApiOperationArgs<"cxone-scim-api-docs:updateScimUserPatch:PATCH:/scim/v2/Users/{userId}">)),
    CxoneScimApiDocsGetSchemas: (...args) => callOperation("cxone-scim-api-docs:getSchemas:GET:/scim/v2/Schemas", ...(args as NiceCxoneFullApiOperationArgs<"cxone-scim-api-docs:getSchemas:GET:/scim/v2/Schemas">)),
    CxoneScimApiDocsGetBasicAuthUsers: (...args) => callOperation("cxone-scim-api-docs:get-basic-auth-Users:GET:/basic-auth/scim/v2/Users", ...(args as NiceCxoneFullApiOperationArgs<"cxone-scim-api-docs:get-basic-auth-Users:GET:/basic-auth/scim/v2/Users">)),
    CxoneScimApiDocsPostBasicAuthUsers: (...args) => callOperation("cxone-scim-api-docs:post-basic-auth-users:POST:/basic-auth/scim/v2/Users", ...(args as NiceCxoneFullApiOperationArgs<"cxone-scim-api-docs:post-basic-auth-users:POST:/basic-auth/scim/v2/Users">)),
    CxoneScimApiDocsGetBasicauthScimUserbyID: (...args) => callOperation("cxone-scim-api-docs:get-basicauth-ScimUserbyID:GET:/basic-auth/scim/v2/Users/{userId}", ...(args as NiceCxoneFullApiOperationArgs<"cxone-scim-api-docs:get-basicauth-ScimUserbyID:GET:/basic-auth/scim/v2/Users/{userId}">)),
    CxoneScimApiDocsPutBasicauthScimUserbyID: (...args) => callOperation("cxone-scim-api-docs:put-basicauth-ScimUserbyID:PUT:/basic-auth/scim/v2/Users/{userId}", ...(args as NiceCxoneFullApiOperationArgs<"cxone-scim-api-docs:put-basicauth-ScimUserbyID:PUT:/basic-auth/scim/v2/Users/{userId}">)),
    CxoneScimApiDocsPatchBasicAuthScimUserbyID: (...args) => callOperation("cxone-scim-api-docs:patch-basic-auth-ScimUserbyID:PATCH:/basic-auth/scim/v2/Users/{userId}", ...(args as NiceCxoneFullApiOperationArgs<"cxone-scim-api-docs:patch-basic-auth-ScimUserbyID:PATCH:/basic-auth/scim/v2/Users/{userId}">)),
    CxoneScimApiDocsGetBasicAuthSchemas: (...args) => callOperation("cxone-scim-api-docs:get-basic-auth-Schemas:GET:/basic-auth/scim/v2/Schemas", ...(args as NiceCxoneFullApiOperationArgs<"cxone-scim-api-docs:get-basic-auth-Schemas:GET:/basic-auth/scim/v2/Schemas">)),
  };
}
