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
export const ZendeskFullApiTicketFieldsOperationKeys = [
  "CountTicketFields",
  "CreateOrUpdateTicketFieldOption",
  "CreateTicketField",
  "DeleteTicketField",
  "DeleteTicketFieldOption",
  "ListTicketFieldOptions",
  "ListTicketFields",
  "ReorderTicketFields",
  "ShowManyTicketFields",
  "ShowTicketfield",
  "ShowTicketFieldOption",
  "UpdateTicketField"
] as const;
export type ZendeskFullApiTicketFieldsOperationKey = typeof ZendeskFullApiTicketFieldsOperationKeys[number];
// End hardened literal operation keys.

export interface ZendeskFullApiTicketFieldsOperationPathParamMap {
  "CountTicketFields": {};
  "CreateOrUpdateTicketFieldOption": { "ticket_field_id": ZendeskFullApiPathParamValue };
  "CreateTicketField": {};
  "DeleteTicketField": { "ticket_field_id": ZendeskFullApiPathParamValue };
  "DeleteTicketFieldOption": { "ticket_field_id": ZendeskFullApiPathParamValue; "ticket_field_option_id": ZendeskFullApiPathParamValue };
  "ListTicketFieldOptions": { "ticket_field_id": ZendeskFullApiPathParamValue };
  "ListTicketFields": {};
  "ReorderTicketFields": {};
  "ShowManyTicketFields": {};
  "ShowTicketfield": { "ticket_field_id": ZendeskFullApiPathParamValue };
  "ShowTicketFieldOption": { "ticket_field_id": ZendeskFullApiPathParamValue; "ticket_field_option_id": ZendeskFullApiPathParamValue };
  "UpdateTicketField": { "ticket_field_id": ZendeskFullApiPathParamValue };
}

export interface ZendeskFullApiTicketFieldsOperationRequestMap {
  "CountTicketFields": ZendeskFullApiOperationInput<"CountTicketFields">;
  "CreateOrUpdateTicketFieldOption": ZendeskFullApiOperationInput<"CreateOrUpdateTicketFieldOption">;
  "CreateTicketField": ZendeskFullApiOperationInput<"CreateTicketField">;
  "DeleteTicketField": ZendeskFullApiOperationInput<"DeleteTicketField">;
  "DeleteTicketFieldOption": ZendeskFullApiOperationInput<"DeleteTicketFieldOption">;
  "ListTicketFieldOptions": ZendeskFullApiOperationInput<"ListTicketFieldOptions">;
  "ListTicketFields": ZendeskFullApiOperationInput<"ListTicketFields">;
  "ReorderTicketFields": ZendeskFullApiOperationInput<"ReorderTicketFields">;
  "ShowManyTicketFields": ZendeskFullApiOperationInput<"ShowManyTicketFields">;
  "ShowTicketfield": ZendeskFullApiOperationInput<"ShowTicketfield">;
  "ShowTicketFieldOption": ZendeskFullApiOperationInput<"ShowTicketFieldOption">;
  "UpdateTicketField": ZendeskFullApiOperationInput<"UpdateTicketField">;
}

export interface ZendeskFullApiTicketFieldsGeneratedClient {
  CountTicketFields(...args: ZendeskFullApiOperationArgs<"CountTicketFields">): Promise<ZendeskFullApiOperationResponseMap["CountTicketFields"]>;
  CreateOrUpdateTicketFieldOption(...args: ZendeskFullApiOperationArgs<"CreateOrUpdateTicketFieldOption">): Promise<ZendeskFullApiOperationResponseMap["CreateOrUpdateTicketFieldOption"]>;
  CreateTicketField(...args: ZendeskFullApiOperationArgs<"CreateTicketField">): Promise<ZendeskFullApiOperationResponseMap["CreateTicketField"]>;
  DeleteTicketField(...args: ZendeskFullApiOperationArgs<"DeleteTicketField">): Promise<ZendeskFullApiOperationResponseMap["DeleteTicketField"]>;
  DeleteTicketFieldOption(...args: ZendeskFullApiOperationArgs<"DeleteTicketFieldOption">): Promise<ZendeskFullApiOperationResponseMap["DeleteTicketFieldOption"]>;
  ListTicketFieldOptions(...args: ZendeskFullApiOperationArgs<"ListTicketFieldOptions">): Promise<ZendeskFullApiOperationResponseMap["ListTicketFieldOptions"]>;
  ListTicketFields(...args: ZendeskFullApiOperationArgs<"ListTicketFields">): Promise<ZendeskFullApiOperationResponseMap["ListTicketFields"]>;
  ReorderTicketFields(...args: ZendeskFullApiOperationArgs<"ReorderTicketFields">): Promise<ZendeskFullApiOperationResponseMap["ReorderTicketFields"]>;
  ShowManyTicketFields(...args: ZendeskFullApiOperationArgs<"ShowManyTicketFields">): Promise<ZendeskFullApiOperationResponseMap["ShowManyTicketFields"]>;
  ShowTicketfield(...args: ZendeskFullApiOperationArgs<"ShowTicketfield">): Promise<ZendeskFullApiOperationResponseMap["ShowTicketfield"]>;
  ShowTicketFieldOption(...args: ZendeskFullApiOperationArgs<"ShowTicketFieldOption">): Promise<ZendeskFullApiOperationResponseMap["ShowTicketFieldOption"]>;
  UpdateTicketField(...args: ZendeskFullApiOperationArgs<"UpdateTicketField">): Promise<ZendeskFullApiOperationResponseMap["UpdateTicketField"]>;
}

export const ZendeskFullApiTicketFieldsGeneratedFunctionNames = [
  "CountTicketFields",
  "CreateOrUpdateTicketFieldOption",
  "CreateTicketField",
  "DeleteTicketField",
  "DeleteTicketFieldOption",
  "ListTicketFieldOptions",
  "ListTicketFields",
  "ReorderTicketFields",
  "ShowManyTicketFields",
  "ShowTicketfield",
  "ShowTicketFieldOption",
  "UpdateTicketField"
] as const satisfies readonly (keyof ZendeskFullApiTicketFieldsGeneratedClient)[];

export function createZendeskFullApiTicketFieldsGeneratedClient(
  callOperation: ZendeskGeneratedOperationCaller,
): ZendeskFullApiTicketFieldsGeneratedClient {
  return {
    CountTicketFields: (...args) => callOperation("CountTicketFields", ...(args as ZendeskFullApiOperationArgs<"CountTicketFields">)),
    CreateOrUpdateTicketFieldOption: (...args) => callOperation("CreateOrUpdateTicketFieldOption", ...(args as ZendeskFullApiOperationArgs<"CreateOrUpdateTicketFieldOption">)),
    CreateTicketField: (...args) => callOperation("CreateTicketField", ...(args as ZendeskFullApiOperationArgs<"CreateTicketField">)),
    DeleteTicketField: (...args) => callOperation("DeleteTicketField", ...(args as ZendeskFullApiOperationArgs<"DeleteTicketField">)),
    DeleteTicketFieldOption: (...args) => callOperation("DeleteTicketFieldOption", ...(args as ZendeskFullApiOperationArgs<"DeleteTicketFieldOption">)),
    ListTicketFieldOptions: (...args) => callOperation("ListTicketFieldOptions", ...(args as ZendeskFullApiOperationArgs<"ListTicketFieldOptions">)),
    ListTicketFields: (...args) => callOperation("ListTicketFields", ...(args as ZendeskFullApiOperationArgs<"ListTicketFields">)),
    ReorderTicketFields: (...args) => callOperation("ReorderTicketFields", ...(args as ZendeskFullApiOperationArgs<"ReorderTicketFields">)),
    ShowManyTicketFields: (...args) => callOperation("ShowManyTicketFields", ...(args as ZendeskFullApiOperationArgs<"ShowManyTicketFields">)),
    ShowTicketfield: (...args) => callOperation("ShowTicketfield", ...(args as ZendeskFullApiOperationArgs<"ShowTicketfield">)),
    ShowTicketFieldOption: (...args) => callOperation("ShowTicketFieldOption", ...(args as ZendeskFullApiOperationArgs<"ShowTicketFieldOption">)),
    UpdateTicketField: (...args) => callOperation("UpdateTicketField", ...(args as ZendeskFullApiOperationArgs<"UpdateTicketField">)),
  };
}
