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
export const ZendeskFullApiCustomObjectFieldsOperationKeys = [
  "CreateCustomObjectField",
  "CustomObjectFieldsLimit",
  "DeleteCustomObjectField",
  "ListCustomObjectFields",
  "ReorderCustomObjectFields",
  "ShowCustomObjectField",
  "UpdateCustomObjectField"
] as const;
export type ZendeskFullApiCustomObjectFieldsOperationKey = typeof ZendeskFullApiCustomObjectFieldsOperationKeys[number];
// End hardened literal operation keys.

export interface ZendeskFullApiCustomObjectFieldsOperationPathParamMap {
  "CreateCustomObjectField": { "custom_object_key": ZendeskFullApiPathParamValue };
  "CustomObjectFieldsLimit": { "custom_object_key": ZendeskFullApiPathParamValue };
  "DeleteCustomObjectField": { "custom_object_key": ZendeskFullApiPathParamValue; "custom_object_field_key_or_id": ZendeskFullApiPathParamValue };
  "ListCustomObjectFields": { "custom_object_key": ZendeskFullApiPathParamValue };
  "ReorderCustomObjectFields": { "custom_object_key": ZendeskFullApiPathParamValue };
  "ShowCustomObjectField": { "custom_object_key": ZendeskFullApiPathParamValue; "custom_object_field_key_or_id": ZendeskFullApiPathParamValue };
  "UpdateCustomObjectField": { "custom_object_key": ZendeskFullApiPathParamValue; "custom_object_field_key_or_id": ZendeskFullApiPathParamValue };
}

export interface ZendeskFullApiCustomObjectFieldsOperationRequestMap {
  "CreateCustomObjectField": ZendeskFullApiOperationInput<"CreateCustomObjectField">;
  "CustomObjectFieldsLimit": ZendeskFullApiOperationInput<"CustomObjectFieldsLimit">;
  "DeleteCustomObjectField": ZendeskFullApiOperationInput<"DeleteCustomObjectField">;
  "ListCustomObjectFields": ZendeskFullApiOperationInput<"ListCustomObjectFields">;
  "ReorderCustomObjectFields": ZendeskFullApiOperationInput<"ReorderCustomObjectFields">;
  "ShowCustomObjectField": ZendeskFullApiOperationInput<"ShowCustomObjectField">;
  "UpdateCustomObjectField": ZendeskFullApiOperationInput<"UpdateCustomObjectField">;
}

export interface ZendeskFullApiCustomObjectFieldsGeneratedClient {
  CreateCustomObjectField(...args: ZendeskFullApiOperationArgs<"CreateCustomObjectField">): Promise<ZendeskFullApiOperationResponseMap["CreateCustomObjectField"]>;
  CustomObjectFieldsLimit(...args: ZendeskFullApiOperationArgs<"CustomObjectFieldsLimit">): Promise<ZendeskFullApiOperationResponseMap["CustomObjectFieldsLimit"]>;
  DeleteCustomObjectField(...args: ZendeskFullApiOperationArgs<"DeleteCustomObjectField">): Promise<ZendeskFullApiOperationResponseMap["DeleteCustomObjectField"]>;
  ListCustomObjectFields(...args: ZendeskFullApiOperationArgs<"ListCustomObjectFields">): Promise<ZendeskFullApiOperationResponseMap["ListCustomObjectFields"]>;
  ReorderCustomObjectFields(...args: ZendeskFullApiOperationArgs<"ReorderCustomObjectFields">): Promise<ZendeskFullApiOperationResponseMap["ReorderCustomObjectFields"]>;
  ShowCustomObjectField(...args: ZendeskFullApiOperationArgs<"ShowCustomObjectField">): Promise<ZendeskFullApiOperationResponseMap["ShowCustomObjectField"]>;
  UpdateCustomObjectField(...args: ZendeskFullApiOperationArgs<"UpdateCustomObjectField">): Promise<ZendeskFullApiOperationResponseMap["UpdateCustomObjectField"]>;
}

export const ZendeskFullApiCustomObjectFieldsGeneratedFunctionNames = [
  "CreateCustomObjectField",
  "CustomObjectFieldsLimit",
  "DeleteCustomObjectField",
  "ListCustomObjectFields",
  "ReorderCustomObjectFields",
  "ShowCustomObjectField",
  "UpdateCustomObjectField"
] as const satisfies readonly (keyof ZendeskFullApiCustomObjectFieldsGeneratedClient)[];

export function createZendeskFullApiCustomObjectFieldsGeneratedClient(
  callOperation: ZendeskGeneratedOperationCaller,
): ZendeskFullApiCustomObjectFieldsGeneratedClient {
  return {
    CreateCustomObjectField: (...args) => callOperation("CreateCustomObjectField", ...(args as ZendeskFullApiOperationArgs<"CreateCustomObjectField">)),
    CustomObjectFieldsLimit: (...args) => callOperation("CustomObjectFieldsLimit", ...(args as ZendeskFullApiOperationArgs<"CustomObjectFieldsLimit">)),
    DeleteCustomObjectField: (...args) => callOperation("DeleteCustomObjectField", ...(args as ZendeskFullApiOperationArgs<"DeleteCustomObjectField">)),
    ListCustomObjectFields: (...args) => callOperation("ListCustomObjectFields", ...(args as ZendeskFullApiOperationArgs<"ListCustomObjectFields">)),
    ReorderCustomObjectFields: (...args) => callOperation("ReorderCustomObjectFields", ...(args as ZendeskFullApiOperationArgs<"ReorderCustomObjectFields">)),
    ShowCustomObjectField: (...args) => callOperation("ShowCustomObjectField", ...(args as ZendeskFullApiOperationArgs<"ShowCustomObjectField">)),
    UpdateCustomObjectField: (...args) => callOperation("UpdateCustomObjectField", ...(args as ZendeskFullApiOperationArgs<"UpdateCustomObjectField">)),
  };
}
