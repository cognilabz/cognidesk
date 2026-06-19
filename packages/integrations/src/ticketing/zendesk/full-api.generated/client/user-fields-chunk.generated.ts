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
export const ZendeskFullApiUserFieldsOperationKeys = [
  "CreateOrUpdateUserFieldOption",
  "CreateUserField",
  "DeleteUserField",
  "DeleteUserFieldOption",
  "ListUserFieldOptions",
  "ListUserFields",
  "ReorderUserField",
  "ShowManyUserFields",
  "ShowUserField",
  "ShowUserFieldOption",
  "UpdateUserField"
] as const;
export type ZendeskFullApiUserFieldsOperationKey = typeof ZendeskFullApiUserFieldsOperationKeys[number];
// End hardened literal operation keys.

export interface ZendeskFullApiUserFieldsOperationPathParamMap {
  "CreateOrUpdateUserFieldOption": { "user_field_id": ZendeskFullApiPathParamValue };
  "CreateUserField": {};
  "DeleteUserField": { "user_field_id": ZendeskFullApiPathParamValue };
  "DeleteUserFieldOption": { "user_field_id": ZendeskFullApiPathParamValue; "user_field_option_id": ZendeskFullApiPathParamValue };
  "ListUserFieldOptions": { "user_field_id": ZendeskFullApiPathParamValue };
  "ListUserFields": {};
  "ReorderUserField": {};
  "ShowManyUserFields": {};
  "ShowUserField": { "user_field_id": ZendeskFullApiPathParamValue };
  "ShowUserFieldOption": { "user_field_id": ZendeskFullApiPathParamValue; "user_field_option_id": ZendeskFullApiPathParamValue };
  "UpdateUserField": { "user_field_id": ZendeskFullApiPathParamValue };
}

export interface ZendeskFullApiUserFieldsOperationRequestMap {
  "CreateOrUpdateUserFieldOption": ZendeskFullApiOperationInput<"CreateOrUpdateUserFieldOption">;
  "CreateUserField": ZendeskFullApiOperationInput<"CreateUserField">;
  "DeleteUserField": ZendeskFullApiOperationInput<"DeleteUserField">;
  "DeleteUserFieldOption": ZendeskFullApiOperationInput<"DeleteUserFieldOption">;
  "ListUserFieldOptions": ZendeskFullApiOperationInput<"ListUserFieldOptions">;
  "ListUserFields": ZendeskFullApiOperationInput<"ListUserFields">;
  "ReorderUserField": ZendeskFullApiOperationInput<"ReorderUserField">;
  "ShowManyUserFields": ZendeskFullApiOperationInput<"ShowManyUserFields">;
  "ShowUserField": ZendeskFullApiOperationInput<"ShowUserField">;
  "ShowUserFieldOption": ZendeskFullApiOperationInput<"ShowUserFieldOption">;
  "UpdateUserField": ZendeskFullApiOperationInput<"UpdateUserField">;
}

export interface ZendeskFullApiUserFieldsGeneratedClient {
  CreateOrUpdateUserFieldOption(...args: ZendeskFullApiOperationArgs<"CreateOrUpdateUserFieldOption">): Promise<ZendeskFullApiOperationResponseMap["CreateOrUpdateUserFieldOption"]>;
  CreateUserField(...args: ZendeskFullApiOperationArgs<"CreateUserField">): Promise<ZendeskFullApiOperationResponseMap["CreateUserField"]>;
  DeleteUserField(...args: ZendeskFullApiOperationArgs<"DeleteUserField">): Promise<ZendeskFullApiOperationResponseMap["DeleteUserField"]>;
  DeleteUserFieldOption(...args: ZendeskFullApiOperationArgs<"DeleteUserFieldOption">): Promise<ZendeskFullApiOperationResponseMap["DeleteUserFieldOption"]>;
  ListUserFieldOptions(...args: ZendeskFullApiOperationArgs<"ListUserFieldOptions">): Promise<ZendeskFullApiOperationResponseMap["ListUserFieldOptions"]>;
  ListUserFields(...args: ZendeskFullApiOperationArgs<"ListUserFields">): Promise<ZendeskFullApiOperationResponseMap["ListUserFields"]>;
  ReorderUserField(...args: ZendeskFullApiOperationArgs<"ReorderUserField">): Promise<ZendeskFullApiOperationResponseMap["ReorderUserField"]>;
  ShowManyUserFields(...args: ZendeskFullApiOperationArgs<"ShowManyUserFields">): Promise<ZendeskFullApiOperationResponseMap["ShowManyUserFields"]>;
  ShowUserField(...args: ZendeskFullApiOperationArgs<"ShowUserField">): Promise<ZendeskFullApiOperationResponseMap["ShowUserField"]>;
  ShowUserFieldOption(...args: ZendeskFullApiOperationArgs<"ShowUserFieldOption">): Promise<ZendeskFullApiOperationResponseMap["ShowUserFieldOption"]>;
  UpdateUserField(...args: ZendeskFullApiOperationArgs<"UpdateUserField">): Promise<ZendeskFullApiOperationResponseMap["UpdateUserField"]>;
}

export const ZendeskFullApiUserFieldsGeneratedFunctionNames = [
  "CreateOrUpdateUserFieldOption",
  "CreateUserField",
  "DeleteUserField",
  "DeleteUserFieldOption",
  "ListUserFieldOptions",
  "ListUserFields",
  "ReorderUserField",
  "ShowManyUserFields",
  "ShowUserField",
  "ShowUserFieldOption",
  "UpdateUserField"
] as const satisfies readonly (keyof ZendeskFullApiUserFieldsGeneratedClient)[];

export function createZendeskFullApiUserFieldsGeneratedClient(
  callOperation: ZendeskGeneratedOperationCaller,
): ZendeskFullApiUserFieldsGeneratedClient {
  return {
    CreateOrUpdateUserFieldOption: (...args) => callOperation("CreateOrUpdateUserFieldOption", ...(args as ZendeskFullApiOperationArgs<"CreateOrUpdateUserFieldOption">)),
    CreateUserField: (...args) => callOperation("CreateUserField", ...(args as ZendeskFullApiOperationArgs<"CreateUserField">)),
    DeleteUserField: (...args) => callOperation("DeleteUserField", ...(args as ZendeskFullApiOperationArgs<"DeleteUserField">)),
    DeleteUserFieldOption: (...args) => callOperation("DeleteUserFieldOption", ...(args as ZendeskFullApiOperationArgs<"DeleteUserFieldOption">)),
    ListUserFieldOptions: (...args) => callOperation("ListUserFieldOptions", ...(args as ZendeskFullApiOperationArgs<"ListUserFieldOptions">)),
    ListUserFields: (...args) => callOperation("ListUserFields", ...(args as ZendeskFullApiOperationArgs<"ListUserFields">)),
    ReorderUserField: (...args) => callOperation("ReorderUserField", ...(args as ZendeskFullApiOperationArgs<"ReorderUserField">)),
    ShowManyUserFields: (...args) => callOperation("ShowManyUserFields", ...(args as ZendeskFullApiOperationArgs<"ShowManyUserFields">)),
    ShowUserField: (...args) => callOperation("ShowUserField", ...(args as ZendeskFullApiOperationArgs<"ShowUserField">)),
    ShowUserFieldOption: (...args) => callOperation("ShowUserFieldOption", ...(args as ZendeskFullApiOperationArgs<"ShowUserFieldOption">)),
    UpdateUserField: (...args) => callOperation("UpdateUserField", ...(args as ZendeskFullApiOperationArgs<"UpdateUserField">)),
  };
}
