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
export const ZendeskFullApiMacrosOperationKeys = [
  "CreateAssociatedMacroAttachment",
  "CreateMacro",
  "CreateMacroAttachment",
  "DeleteMacro",
  "DeleteManyMacros",
  "ListActiveMacros",
  "ListMacroActionDefinitions",
  "ListMacroAttachments",
  "ListMacroCategories",
  "ListMacros",
  "ListMacrosActions",
  "SearchMacro",
  "ShowChangesToTicket",
  "ShowDerivedMacro",
  "ShowMacro",
  "ShowMacroAttachment",
  "ShowTicketAfterChanges",
  "UpdateMacro",
  "UpdateManyMacros"
] as const;
export type ZendeskFullApiMacrosOperationKey = typeof ZendeskFullApiMacrosOperationKeys[number];
// End hardened literal operation keys.

export interface ZendeskFullApiMacrosOperationPathParamMap {
  "CreateAssociatedMacroAttachment": { "macro_id": ZendeskFullApiPathParamValue };
  "CreateMacro": {};
  "CreateMacroAttachment": {};
  "DeleteMacro": { "macro_id": ZendeskFullApiPathParamValue };
  "DeleteManyMacros": {};
  "ListActiveMacros": {};
  "ListMacroActionDefinitions": {};
  "ListMacroAttachments": { "macro_id": ZendeskFullApiPathParamValue };
  "ListMacroCategories": {};
  "ListMacros": {};
  "ListMacrosActions": {};
  "SearchMacro": {};
  "ShowChangesToTicket": { "macro_id": ZendeskFullApiPathParamValue };
  "ShowDerivedMacro": {};
  "ShowMacro": { "macro_id": ZendeskFullApiPathParamValue };
  "ShowMacroAttachment": { "attachment_id": ZendeskFullApiPathParamValue };
  "ShowTicketAfterChanges": { "ticket_id": ZendeskFullApiPathParamValue; "macro_id": ZendeskFullApiPathParamValue };
  "UpdateMacro": { "macro_id": ZendeskFullApiPathParamValue };
  "UpdateManyMacros": {};
}

export interface ZendeskFullApiMacrosOperationRequestMap {
  "CreateAssociatedMacroAttachment": ZendeskFullApiOperationInput<"CreateAssociatedMacroAttachment">;
  "CreateMacro": ZendeskFullApiOperationInput<"CreateMacro">;
  "CreateMacroAttachment": ZendeskFullApiOperationInput<"CreateMacroAttachment">;
  "DeleteMacro": ZendeskFullApiOperationInput<"DeleteMacro">;
  "DeleteManyMacros": ZendeskFullApiOperationInput<"DeleteManyMacros">;
  "ListActiveMacros": ZendeskFullApiOperationInput<"ListActiveMacros">;
  "ListMacroActionDefinitions": ZendeskFullApiOperationInput<"ListMacroActionDefinitions">;
  "ListMacroAttachments": ZendeskFullApiOperationInput<"ListMacroAttachments">;
  "ListMacroCategories": ZendeskFullApiOperationInput<"ListMacroCategories">;
  "ListMacros": ZendeskFullApiOperationInput<"ListMacros">;
  "ListMacrosActions": ZendeskFullApiOperationInput<"ListMacrosActions">;
  "SearchMacro": ZendeskFullApiOperationInput<"SearchMacro">;
  "ShowChangesToTicket": ZendeskFullApiOperationInput<"ShowChangesToTicket">;
  "ShowDerivedMacro": ZendeskFullApiOperationInput<"ShowDerivedMacro">;
  "ShowMacro": ZendeskFullApiOperationInput<"ShowMacro">;
  "ShowMacroAttachment": ZendeskFullApiOperationInput<"ShowMacroAttachment">;
  "ShowTicketAfterChanges": ZendeskFullApiOperationInput<"ShowTicketAfterChanges">;
  "UpdateMacro": ZendeskFullApiOperationInput<"UpdateMacro">;
  "UpdateManyMacros": ZendeskFullApiOperationInput<"UpdateManyMacros">;
}

export interface ZendeskFullApiMacrosGeneratedClient {
  CreateAssociatedMacroAttachment(...args: ZendeskFullApiOperationArgs<"CreateAssociatedMacroAttachment">): Promise<ZendeskFullApiOperationResponseMap["CreateAssociatedMacroAttachment"]>;
  CreateMacro(...args: ZendeskFullApiOperationArgs<"CreateMacro">): Promise<ZendeskFullApiOperationResponseMap["CreateMacro"]>;
  CreateMacroAttachment(...args: ZendeskFullApiOperationArgs<"CreateMacroAttachment">): Promise<ZendeskFullApiOperationResponseMap["CreateMacroAttachment"]>;
  DeleteMacro(...args: ZendeskFullApiOperationArgs<"DeleteMacro">): Promise<ZendeskFullApiOperationResponseMap["DeleteMacro"]>;
  DeleteManyMacros(...args: ZendeskFullApiOperationArgs<"DeleteManyMacros">): Promise<ZendeskFullApiOperationResponseMap["DeleteManyMacros"]>;
  ListActiveMacros(...args: ZendeskFullApiOperationArgs<"ListActiveMacros">): Promise<ZendeskFullApiOperationResponseMap["ListActiveMacros"]>;
  ListMacroActionDefinitions(...args: ZendeskFullApiOperationArgs<"ListMacroActionDefinitions">): Promise<ZendeskFullApiOperationResponseMap["ListMacroActionDefinitions"]>;
  ListMacroAttachments(...args: ZendeskFullApiOperationArgs<"ListMacroAttachments">): Promise<ZendeskFullApiOperationResponseMap["ListMacroAttachments"]>;
  ListMacroCategories(...args: ZendeskFullApiOperationArgs<"ListMacroCategories">): Promise<ZendeskFullApiOperationResponseMap["ListMacroCategories"]>;
  ListMacros(...args: ZendeskFullApiOperationArgs<"ListMacros">): Promise<ZendeskFullApiOperationResponseMap["ListMacros"]>;
  ListMacrosActions(...args: ZendeskFullApiOperationArgs<"ListMacrosActions">): Promise<ZendeskFullApiOperationResponseMap["ListMacrosActions"]>;
  SearchMacro(...args: ZendeskFullApiOperationArgs<"SearchMacro">): Promise<ZendeskFullApiOperationResponseMap["SearchMacro"]>;
  ShowChangesToTicket(...args: ZendeskFullApiOperationArgs<"ShowChangesToTicket">): Promise<ZendeskFullApiOperationResponseMap["ShowChangesToTicket"]>;
  ShowDerivedMacro(...args: ZendeskFullApiOperationArgs<"ShowDerivedMacro">): Promise<ZendeskFullApiOperationResponseMap["ShowDerivedMacro"]>;
  ShowMacro(...args: ZendeskFullApiOperationArgs<"ShowMacro">): Promise<ZendeskFullApiOperationResponseMap["ShowMacro"]>;
  ShowMacroAttachment(...args: ZendeskFullApiOperationArgs<"ShowMacroAttachment">): Promise<ZendeskFullApiOperationResponseMap["ShowMacroAttachment"]>;
  ShowTicketAfterChanges(...args: ZendeskFullApiOperationArgs<"ShowTicketAfterChanges">): Promise<ZendeskFullApiOperationResponseMap["ShowTicketAfterChanges"]>;
  UpdateMacro(...args: ZendeskFullApiOperationArgs<"UpdateMacro">): Promise<ZendeskFullApiOperationResponseMap["UpdateMacro"]>;
  UpdateManyMacros(...args: ZendeskFullApiOperationArgs<"UpdateManyMacros">): Promise<ZendeskFullApiOperationResponseMap["UpdateManyMacros"]>;
}

export const ZendeskFullApiMacrosGeneratedFunctionNames = [
  "CreateAssociatedMacroAttachment",
  "CreateMacro",
  "CreateMacroAttachment",
  "DeleteMacro",
  "DeleteManyMacros",
  "ListActiveMacros",
  "ListMacroActionDefinitions",
  "ListMacroAttachments",
  "ListMacroCategories",
  "ListMacros",
  "ListMacrosActions",
  "SearchMacro",
  "ShowChangesToTicket",
  "ShowDerivedMacro",
  "ShowMacro",
  "ShowMacroAttachment",
  "ShowTicketAfterChanges",
  "UpdateMacro",
  "UpdateManyMacros"
] as const satisfies readonly (keyof ZendeskFullApiMacrosGeneratedClient)[];

export function createZendeskFullApiMacrosGeneratedClient(
  callOperation: ZendeskGeneratedOperationCaller,
): ZendeskFullApiMacrosGeneratedClient {
  return {
    CreateAssociatedMacroAttachment: (...args) => callOperation("CreateAssociatedMacroAttachment", ...(args as ZendeskFullApiOperationArgs<"CreateAssociatedMacroAttachment">)),
    CreateMacro: (...args) => callOperation("CreateMacro", ...(args as ZendeskFullApiOperationArgs<"CreateMacro">)),
    CreateMacroAttachment: (...args) => callOperation("CreateMacroAttachment", ...(args as ZendeskFullApiOperationArgs<"CreateMacroAttachment">)),
    DeleteMacro: (...args) => callOperation("DeleteMacro", ...(args as ZendeskFullApiOperationArgs<"DeleteMacro">)),
    DeleteManyMacros: (...args) => callOperation("DeleteManyMacros", ...(args as ZendeskFullApiOperationArgs<"DeleteManyMacros">)),
    ListActiveMacros: (...args) => callOperation("ListActiveMacros", ...(args as ZendeskFullApiOperationArgs<"ListActiveMacros">)),
    ListMacroActionDefinitions: (...args) => callOperation("ListMacroActionDefinitions", ...(args as ZendeskFullApiOperationArgs<"ListMacroActionDefinitions">)),
    ListMacroAttachments: (...args) => callOperation("ListMacroAttachments", ...(args as ZendeskFullApiOperationArgs<"ListMacroAttachments">)),
    ListMacroCategories: (...args) => callOperation("ListMacroCategories", ...(args as ZendeskFullApiOperationArgs<"ListMacroCategories">)),
    ListMacros: (...args) => callOperation("ListMacros", ...(args as ZendeskFullApiOperationArgs<"ListMacros">)),
    ListMacrosActions: (...args) => callOperation("ListMacrosActions", ...(args as ZendeskFullApiOperationArgs<"ListMacrosActions">)),
    SearchMacro: (...args) => callOperation("SearchMacro", ...(args as ZendeskFullApiOperationArgs<"SearchMacro">)),
    ShowChangesToTicket: (...args) => callOperation("ShowChangesToTicket", ...(args as ZendeskFullApiOperationArgs<"ShowChangesToTicket">)),
    ShowDerivedMacro: (...args) => callOperation("ShowDerivedMacro", ...(args as ZendeskFullApiOperationArgs<"ShowDerivedMacro">)),
    ShowMacro: (...args) => callOperation("ShowMacro", ...(args as ZendeskFullApiOperationArgs<"ShowMacro">)),
    ShowMacroAttachment: (...args) => callOperation("ShowMacroAttachment", ...(args as ZendeskFullApiOperationArgs<"ShowMacroAttachment">)),
    ShowTicketAfterChanges: (...args) => callOperation("ShowTicketAfterChanges", ...(args as ZendeskFullApiOperationArgs<"ShowTicketAfterChanges">)),
    UpdateMacro: (...args) => callOperation("UpdateMacro", ...(args as ZendeskFullApiOperationArgs<"UpdateMacro">)),
    UpdateManyMacros: (...args) => callOperation("UpdateManyMacros", ...(args as ZendeskFullApiOperationArgs<"UpdateManyMacros">)),
  };
}
