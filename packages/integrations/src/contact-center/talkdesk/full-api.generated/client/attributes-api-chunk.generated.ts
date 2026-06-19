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
export const TalkdeskFullApiAttributesAPIOperationKeys = [
  "GetAllAttributes",
  "CreateAttribute",
  "GetAttribute",
  "UpdateAttribute",
  "GetAllAttributeUsers",
  "CreateAttributeUsers",
  "DeleteAttributeUsers",
  "GetAllAttributesCategories",
  "CreateAttributeCategory",
  "DeleteAttributeCategory",
  "PatchAttributeCategory",
  "GetUserAttributes"
] as const;
export type TalkdeskFullApiAttributesAPIOperationKey = typeof TalkdeskFullApiAttributesAPIOperationKeys[number];
// End hardened literal operation keys.

export interface TalkdeskFullApiAttributesAPIOperationPathParamMap {
  "GetAllAttributes": {};
  "CreateAttribute": {};
  "GetAttribute": { "attribute_id": TalkdeskFullApiPathParamValue };
  "UpdateAttribute": { "attribute_id": TalkdeskFullApiPathParamValue };
  "GetAllAttributeUsers": { "attribute_id": TalkdeskFullApiPathParamValue };
  "CreateAttributeUsers": { "attribute_id": TalkdeskFullApiPathParamValue };
  "DeleteAttributeUsers": { "attribute_id": TalkdeskFullApiPathParamValue };
  "GetAllAttributesCategories": {};
  "CreateAttributeCategory": {};
  "DeleteAttributeCategory": { "category_id": TalkdeskFullApiPathParamValue };
  "PatchAttributeCategory": { "category_id": TalkdeskFullApiPathParamValue };
  "GetUserAttributes": { "user_id": TalkdeskFullApiPathParamValue };
}

export interface TalkdeskFullApiAttributesAPIOperationRequestMap {
  "GetAllAttributes": TalkdeskFullApiOperationInput<"GetAllAttributes">;
  "CreateAttribute": TalkdeskFullApiOperationInput<"CreateAttribute">;
  "GetAttribute": TalkdeskFullApiOperationInput<"GetAttribute">;
  "UpdateAttribute": TalkdeskFullApiOperationInput<"UpdateAttribute">;
  "GetAllAttributeUsers": TalkdeskFullApiOperationInput<"GetAllAttributeUsers">;
  "CreateAttributeUsers": TalkdeskFullApiOperationInput<"CreateAttributeUsers">;
  "DeleteAttributeUsers": TalkdeskFullApiOperationInput<"DeleteAttributeUsers">;
  "GetAllAttributesCategories": TalkdeskFullApiOperationInput<"GetAllAttributesCategories">;
  "CreateAttributeCategory": TalkdeskFullApiOperationInput<"CreateAttributeCategory">;
  "DeleteAttributeCategory": TalkdeskFullApiOperationInput<"DeleteAttributeCategory">;
  "PatchAttributeCategory": TalkdeskFullApiOperationInput<"PatchAttributeCategory">;
  "GetUserAttributes": TalkdeskFullApiOperationInput<"GetUserAttributes">;
}

export interface TalkdeskFullApiAttributesAPIGeneratedClient {
  GetAllAttributes(...args: TalkdeskFullApiOperationArgs<"GetAllAttributes">): Promise<TalkdeskFullApiOperationResponseMap["GetAllAttributes"]>;
  CreateAttribute(...args: TalkdeskFullApiOperationArgs<"CreateAttribute">): Promise<TalkdeskFullApiOperationResponseMap["CreateAttribute"]>;
  GetAttribute(...args: TalkdeskFullApiOperationArgs<"GetAttribute">): Promise<TalkdeskFullApiOperationResponseMap["GetAttribute"]>;
  UpdateAttribute(...args: TalkdeskFullApiOperationArgs<"UpdateAttribute">): Promise<TalkdeskFullApiOperationResponseMap["UpdateAttribute"]>;
  GetAllAttributeUsers(...args: TalkdeskFullApiOperationArgs<"GetAllAttributeUsers">): Promise<TalkdeskFullApiOperationResponseMap["GetAllAttributeUsers"]>;
  CreateAttributeUsers(...args: TalkdeskFullApiOperationArgs<"CreateAttributeUsers">): Promise<TalkdeskFullApiOperationResponseMap["CreateAttributeUsers"]>;
  DeleteAttributeUsers(...args: TalkdeskFullApiOperationArgs<"DeleteAttributeUsers">): Promise<TalkdeskFullApiOperationResponseMap["DeleteAttributeUsers"]>;
  GetAllAttributesCategories(...args: TalkdeskFullApiOperationArgs<"GetAllAttributesCategories">): Promise<TalkdeskFullApiOperationResponseMap["GetAllAttributesCategories"]>;
  CreateAttributeCategory(...args: TalkdeskFullApiOperationArgs<"CreateAttributeCategory">): Promise<TalkdeskFullApiOperationResponseMap["CreateAttributeCategory"]>;
  DeleteAttributeCategory(...args: TalkdeskFullApiOperationArgs<"DeleteAttributeCategory">): Promise<TalkdeskFullApiOperationResponseMap["DeleteAttributeCategory"]>;
  PatchAttributeCategory(...args: TalkdeskFullApiOperationArgs<"PatchAttributeCategory">): Promise<TalkdeskFullApiOperationResponseMap["PatchAttributeCategory"]>;
  GetUserAttributes(...args: TalkdeskFullApiOperationArgs<"GetUserAttributes">): Promise<TalkdeskFullApiOperationResponseMap["GetUserAttributes"]>;
}

export const TalkdeskFullApiAttributesAPIGeneratedFunctionNames = [
  "GetAllAttributes",
  "CreateAttribute",
  "GetAttribute",
  "UpdateAttribute",
  "GetAllAttributeUsers",
  "CreateAttributeUsers",
  "DeleteAttributeUsers",
  "GetAllAttributesCategories",
  "CreateAttributeCategory",
  "DeleteAttributeCategory",
  "PatchAttributeCategory",
  "GetUserAttributes"
] as const satisfies readonly (keyof TalkdeskFullApiAttributesAPIGeneratedClient)[];

export function createTalkdeskFullApiAttributesAPIGeneratedClient(
  callOperation: TalkdeskGeneratedOperationCaller,
): TalkdeskFullApiAttributesAPIGeneratedClient {
  return {
    GetAllAttributes: (...args) => callOperation("GetAllAttributes", ...(args as TalkdeskFullApiOperationArgs<"GetAllAttributes">)),
    CreateAttribute: (...args) => callOperation("CreateAttribute", ...(args as TalkdeskFullApiOperationArgs<"CreateAttribute">)),
    GetAttribute: (...args) => callOperation("GetAttribute", ...(args as TalkdeskFullApiOperationArgs<"GetAttribute">)),
    UpdateAttribute: (...args) => callOperation("UpdateAttribute", ...(args as TalkdeskFullApiOperationArgs<"UpdateAttribute">)),
    GetAllAttributeUsers: (...args) => callOperation("GetAllAttributeUsers", ...(args as TalkdeskFullApiOperationArgs<"GetAllAttributeUsers">)),
    CreateAttributeUsers: (...args) => callOperation("CreateAttributeUsers", ...(args as TalkdeskFullApiOperationArgs<"CreateAttributeUsers">)),
    DeleteAttributeUsers: (...args) => callOperation("DeleteAttributeUsers", ...(args as TalkdeskFullApiOperationArgs<"DeleteAttributeUsers">)),
    GetAllAttributesCategories: (...args) => callOperation("GetAllAttributesCategories", ...(args as TalkdeskFullApiOperationArgs<"GetAllAttributesCategories">)),
    CreateAttributeCategory: (...args) => callOperation("CreateAttributeCategory", ...(args as TalkdeskFullApiOperationArgs<"CreateAttributeCategory">)),
    DeleteAttributeCategory: (...args) => callOperation("DeleteAttributeCategory", ...(args as TalkdeskFullApiOperationArgs<"DeleteAttributeCategory">)),
    PatchAttributeCategory: (...args) => callOperation("PatchAttributeCategory", ...(args as TalkdeskFullApiOperationArgs<"PatchAttributeCategory">)),
    GetUserAttributes: (...args) => callOperation("GetUserAttributes", ...(args as TalkdeskFullApiOperationArgs<"GetUserAttributes">)),
  };
}
