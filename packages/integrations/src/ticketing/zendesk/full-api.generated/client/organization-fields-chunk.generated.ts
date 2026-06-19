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
export const ZendeskFullApiOrganizationFieldsOperationKeys = [
  "CreateOrganizationField",
  "DeleteOrganizationField",
  "ListOrganizationFields",
  "ReorderOrganizationField",
  "ShowOrganizationField",
  "UpdateOrganizationField"
] as const;
export type ZendeskFullApiOrganizationFieldsOperationKey = typeof ZendeskFullApiOrganizationFieldsOperationKeys[number];
// End hardened literal operation keys.

export interface ZendeskFullApiOrganizationFieldsOperationPathParamMap {
  "CreateOrganizationField": {};
  "DeleteOrganizationField": { "organization_field_id": ZendeskFullApiPathParamValue };
  "ListOrganizationFields": {};
  "ReorderOrganizationField": {};
  "ShowOrganizationField": { "organization_field_id": ZendeskFullApiPathParamValue };
  "UpdateOrganizationField": { "organization_field_id": ZendeskFullApiPathParamValue };
}

export interface ZendeskFullApiOrganizationFieldsOperationRequestMap {
  "CreateOrganizationField": ZendeskFullApiOperationInput<"CreateOrganizationField">;
  "DeleteOrganizationField": ZendeskFullApiOperationInput<"DeleteOrganizationField">;
  "ListOrganizationFields": ZendeskFullApiOperationInput<"ListOrganizationFields">;
  "ReorderOrganizationField": ZendeskFullApiOperationInput<"ReorderOrganizationField">;
  "ShowOrganizationField": ZendeskFullApiOperationInput<"ShowOrganizationField">;
  "UpdateOrganizationField": ZendeskFullApiOperationInput<"UpdateOrganizationField">;
}

export interface ZendeskFullApiOrganizationFieldsGeneratedClient {
  CreateOrganizationField(...args: ZendeskFullApiOperationArgs<"CreateOrganizationField">): Promise<ZendeskFullApiOperationResponseMap["CreateOrganizationField"]>;
  DeleteOrganizationField(...args: ZendeskFullApiOperationArgs<"DeleteOrganizationField">): Promise<ZendeskFullApiOperationResponseMap["DeleteOrganizationField"]>;
  ListOrganizationFields(...args: ZendeskFullApiOperationArgs<"ListOrganizationFields">): Promise<ZendeskFullApiOperationResponseMap["ListOrganizationFields"]>;
  ReorderOrganizationField(...args: ZendeskFullApiOperationArgs<"ReorderOrganizationField">): Promise<ZendeskFullApiOperationResponseMap["ReorderOrganizationField"]>;
  ShowOrganizationField(...args: ZendeskFullApiOperationArgs<"ShowOrganizationField">): Promise<ZendeskFullApiOperationResponseMap["ShowOrganizationField"]>;
  UpdateOrganizationField(...args: ZendeskFullApiOperationArgs<"UpdateOrganizationField">): Promise<ZendeskFullApiOperationResponseMap["UpdateOrganizationField"]>;
}

export const ZendeskFullApiOrganizationFieldsGeneratedFunctionNames = [
  "CreateOrganizationField",
  "DeleteOrganizationField",
  "ListOrganizationFields",
  "ReorderOrganizationField",
  "ShowOrganizationField",
  "UpdateOrganizationField"
] as const satisfies readonly (keyof ZendeskFullApiOrganizationFieldsGeneratedClient)[];

export function createZendeskFullApiOrganizationFieldsGeneratedClient(
  callOperation: ZendeskGeneratedOperationCaller,
): ZendeskFullApiOrganizationFieldsGeneratedClient {
  return {
    CreateOrganizationField: (...args) => callOperation("CreateOrganizationField", ...(args as ZendeskFullApiOperationArgs<"CreateOrganizationField">)),
    DeleteOrganizationField: (...args) => callOperation("DeleteOrganizationField", ...(args as ZendeskFullApiOperationArgs<"DeleteOrganizationField">)),
    ListOrganizationFields: (...args) => callOperation("ListOrganizationFields", ...(args as ZendeskFullApiOperationArgs<"ListOrganizationFields">)),
    ReorderOrganizationField: (...args) => callOperation("ReorderOrganizationField", ...(args as ZendeskFullApiOperationArgs<"ReorderOrganizationField">)),
    ShowOrganizationField: (...args) => callOperation("ShowOrganizationField", ...(args as ZendeskFullApiOperationArgs<"ShowOrganizationField">)),
    UpdateOrganizationField: (...args) => callOperation("UpdateOrganizationField", ...(args as ZendeskFullApiOperationArgs<"UpdateOrganizationField">)),
  };
}
