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
export const ZendeskFullApiTicketFormsOperationKeys = [
  "CloneTicketForm",
  "CreateTicketForm",
  "CreateTicketFormStatuses",
  "DeleteTicketForm",
  "ListTicketForms",
  "ReorderTicketForms",
  "ShowManyTicketForms",
  "ShowTicketForm",
  "TicketFormTicketFormStatuses",
  "UpdateTicketForm",
  "UpdateTicketFormStatusById",
  "UpdateTicketFormStatuses"
] as const;
export type ZendeskFullApiTicketFormsOperationKey = typeof ZendeskFullApiTicketFormsOperationKeys[number];
// End hardened literal operation keys.

export interface ZendeskFullApiTicketFormsOperationPathParamMap {
  "CloneTicketForm": { "ticket_form_id": ZendeskFullApiPathParamValue };
  "CreateTicketForm": {};
  "CreateTicketFormStatuses": { "ticket_form_id": ZendeskFullApiPathParamValue };
  "DeleteTicketForm": { "ticket_form_id": ZendeskFullApiPathParamValue };
  "ListTicketForms": {};
  "ReorderTicketForms": {};
  "ShowManyTicketForms": {};
  "ShowTicketForm": { "ticket_form_id": ZendeskFullApiPathParamValue };
  "TicketFormTicketFormStatuses": { "ticket_form_id": ZendeskFullApiPathParamValue };
  "UpdateTicketForm": { "ticket_form_id": ZendeskFullApiPathParamValue };
  "UpdateTicketFormStatusById": { "ticket_form_id": ZendeskFullApiPathParamValue; "ticket_form_status_id": ZendeskFullApiPathParamValue };
  "UpdateTicketFormStatuses": { "ticket_form_id": ZendeskFullApiPathParamValue };
}

export interface ZendeskFullApiTicketFormsOperationRequestMap {
  "CloneTicketForm": ZendeskFullApiOperationInput<"CloneTicketForm">;
  "CreateTicketForm": ZendeskFullApiOperationInput<"CreateTicketForm">;
  "CreateTicketFormStatuses": ZendeskFullApiOperationInput<"CreateTicketFormStatuses">;
  "DeleteTicketForm": ZendeskFullApiOperationInput<"DeleteTicketForm">;
  "ListTicketForms": ZendeskFullApiOperationInput<"ListTicketForms">;
  "ReorderTicketForms": ZendeskFullApiOperationInput<"ReorderTicketForms">;
  "ShowManyTicketForms": ZendeskFullApiOperationInput<"ShowManyTicketForms">;
  "ShowTicketForm": ZendeskFullApiOperationInput<"ShowTicketForm">;
  "TicketFormTicketFormStatuses": ZendeskFullApiOperationInput<"TicketFormTicketFormStatuses">;
  "UpdateTicketForm": ZendeskFullApiOperationInput<"UpdateTicketForm">;
  "UpdateTicketFormStatusById": ZendeskFullApiOperationInput<"UpdateTicketFormStatusById">;
  "UpdateTicketFormStatuses": ZendeskFullApiOperationInput<"UpdateTicketFormStatuses">;
}

export interface ZendeskFullApiTicketFormsGeneratedClient {
  CloneTicketForm(...args: ZendeskFullApiOperationArgs<"CloneTicketForm">): Promise<ZendeskFullApiOperationResponseMap["CloneTicketForm"]>;
  CreateTicketForm(...args: ZendeskFullApiOperationArgs<"CreateTicketForm">): Promise<ZendeskFullApiOperationResponseMap["CreateTicketForm"]>;
  CreateTicketFormStatuses(...args: ZendeskFullApiOperationArgs<"CreateTicketFormStatuses">): Promise<ZendeskFullApiOperationResponseMap["CreateTicketFormStatuses"]>;
  DeleteTicketForm(...args: ZendeskFullApiOperationArgs<"DeleteTicketForm">): Promise<ZendeskFullApiOperationResponseMap["DeleteTicketForm"]>;
  ListTicketForms(...args: ZendeskFullApiOperationArgs<"ListTicketForms">): Promise<ZendeskFullApiOperationResponseMap["ListTicketForms"]>;
  ReorderTicketForms(...args: ZendeskFullApiOperationArgs<"ReorderTicketForms">): Promise<ZendeskFullApiOperationResponseMap["ReorderTicketForms"]>;
  ShowManyTicketForms(...args: ZendeskFullApiOperationArgs<"ShowManyTicketForms">): Promise<ZendeskFullApiOperationResponseMap["ShowManyTicketForms"]>;
  ShowTicketForm(...args: ZendeskFullApiOperationArgs<"ShowTicketForm">): Promise<ZendeskFullApiOperationResponseMap["ShowTicketForm"]>;
  TicketFormTicketFormStatuses(...args: ZendeskFullApiOperationArgs<"TicketFormTicketFormStatuses">): Promise<ZendeskFullApiOperationResponseMap["TicketFormTicketFormStatuses"]>;
  UpdateTicketForm(...args: ZendeskFullApiOperationArgs<"UpdateTicketForm">): Promise<ZendeskFullApiOperationResponseMap["UpdateTicketForm"]>;
  UpdateTicketFormStatusById(...args: ZendeskFullApiOperationArgs<"UpdateTicketFormStatusById">): Promise<ZendeskFullApiOperationResponseMap["UpdateTicketFormStatusById"]>;
  UpdateTicketFormStatuses(...args: ZendeskFullApiOperationArgs<"UpdateTicketFormStatuses">): Promise<ZendeskFullApiOperationResponseMap["UpdateTicketFormStatuses"]>;
}

export const ZendeskFullApiTicketFormsGeneratedFunctionNames = [
  "CloneTicketForm",
  "CreateTicketForm",
  "CreateTicketFormStatuses",
  "DeleteTicketForm",
  "ListTicketForms",
  "ReorderTicketForms",
  "ShowManyTicketForms",
  "ShowTicketForm",
  "TicketFormTicketFormStatuses",
  "UpdateTicketForm",
  "UpdateTicketFormStatusById",
  "UpdateTicketFormStatuses"
] as const satisfies readonly (keyof ZendeskFullApiTicketFormsGeneratedClient)[];

export function createZendeskFullApiTicketFormsGeneratedClient(
  callOperation: ZendeskGeneratedOperationCaller,
): ZendeskFullApiTicketFormsGeneratedClient {
  return {
    CloneTicketForm: (...args) => callOperation("CloneTicketForm", ...(args as ZendeskFullApiOperationArgs<"CloneTicketForm">)),
    CreateTicketForm: (...args) => callOperation("CreateTicketForm", ...(args as ZendeskFullApiOperationArgs<"CreateTicketForm">)),
    CreateTicketFormStatuses: (...args) => callOperation("CreateTicketFormStatuses", ...(args as ZendeskFullApiOperationArgs<"CreateTicketFormStatuses">)),
    DeleteTicketForm: (...args) => callOperation("DeleteTicketForm", ...(args as ZendeskFullApiOperationArgs<"DeleteTicketForm">)),
    ListTicketForms: (...args) => callOperation("ListTicketForms", ...(args as ZendeskFullApiOperationArgs<"ListTicketForms">)),
    ReorderTicketForms: (...args) => callOperation("ReorderTicketForms", ...(args as ZendeskFullApiOperationArgs<"ReorderTicketForms">)),
    ShowManyTicketForms: (...args) => callOperation("ShowManyTicketForms", ...(args as ZendeskFullApiOperationArgs<"ShowManyTicketForms">)),
    ShowTicketForm: (...args) => callOperation("ShowTicketForm", ...(args as ZendeskFullApiOperationArgs<"ShowTicketForm">)),
    TicketFormTicketFormStatuses: (...args) => callOperation("TicketFormTicketFormStatuses", ...(args as ZendeskFullApiOperationArgs<"TicketFormTicketFormStatuses">)),
    UpdateTicketForm: (...args) => callOperation("UpdateTicketForm", ...(args as ZendeskFullApiOperationArgs<"UpdateTicketForm">)),
    UpdateTicketFormStatusById: (...args) => callOperation("UpdateTicketFormStatusById", ...(args as ZendeskFullApiOperationArgs<"UpdateTicketFormStatusById">)),
    UpdateTicketFormStatuses: (...args) => callOperation("UpdateTicketFormStatuses", ...(args as ZendeskFullApiOperationArgs<"UpdateTicketFormStatuses">)),
  };
}
