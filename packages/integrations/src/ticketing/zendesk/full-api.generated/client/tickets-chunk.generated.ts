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
export const ZendeskFullApiTicketsOperationKeys = [
  "AutocompleteProblems",
  "BulkDeleteTickets",
  "BulkPermanentlyDeleteTickets",
  "BulkRestoreDeletedTickets",
  "CountOrganizationTickets",
  "CountTickets",
  "CountUserAssignedTickets",
  "CountUserCCDTickets",
  "CreateTicket",
  "DeleteTicket",
  "DeleteTicketPermanently",
  "ListDeletedTickets",
  "ListOrganizationTickets",
  "ListRecentTickets",
  "ListTicketCollaborators",
  "ListTicketEmailCCs",
  "ListTicketFollowers",
  "ListTicketIncidents",
  "ListTicketProblems",
  "ListTickets",
  "ListUserAssignedTickets",
  "ListUserCCDTickets",
  "ListUserFollowedTickets",
  "ListUserRequestedTickets",
  "MarkManyTicketsAsSpam",
  "MarkTicketAsSpamAndSuspendRequester",
  "MergeTicketsIntoTargetTicket",
  "RestoreDeletedTicket",
  "ShowTicket",
  "ShowTicketByMessagingConversationId",
  "TicketRelatedInformation",
  "TicketsCreateMany",
  "TicketsShowMany",
  "TicketsUpdateMany",
  "UpdateTicket"
] as const;
export type ZendeskFullApiTicketsOperationKey = typeof ZendeskFullApiTicketsOperationKeys[number];
// End hardened literal operation keys.

export interface ZendeskFullApiTicketsOperationPathParamMap {
  "AutocompleteProblems": {};
  "BulkDeleteTickets": {};
  "BulkPermanentlyDeleteTickets": {};
  "BulkRestoreDeletedTickets": {};
  "CountOrganizationTickets": { "organization_id": ZendeskFullApiPathParamValue };
  "CountTickets": {};
  "CountUserAssignedTickets": { "user_id": ZendeskFullApiPathParamValue };
  "CountUserCCDTickets": { "user_id": ZendeskFullApiPathParamValue };
  "CreateTicket": {};
  "DeleteTicket": { "ticket_id": ZendeskFullApiPathParamValue };
  "DeleteTicketPermanently": { "ticket_id": ZendeskFullApiPathParamValue };
  "ListDeletedTickets": {};
  "ListOrganizationTickets": { "organization_id": ZendeskFullApiPathParamValue };
  "ListRecentTickets": {};
  "ListTicketCollaborators": { "ticket_id": ZendeskFullApiPathParamValue };
  "ListTicketEmailCCs": { "ticket_id": ZendeskFullApiPathParamValue };
  "ListTicketFollowers": { "ticket_id": ZendeskFullApiPathParamValue };
  "ListTicketIncidents": { "ticket_id": ZendeskFullApiPathParamValue };
  "ListTicketProblems": {};
  "ListTickets": {};
  "ListUserAssignedTickets": { "user_id": ZendeskFullApiPathParamValue };
  "ListUserCCDTickets": { "user_id": ZendeskFullApiPathParamValue };
  "ListUserFollowedTickets": { "user_id": ZendeskFullApiPathParamValue };
  "ListUserRequestedTickets": { "user_id": ZendeskFullApiPathParamValue };
  "MarkManyTicketsAsSpam": {};
  "MarkTicketAsSpamAndSuspendRequester": { "ticket_id": ZendeskFullApiPathParamValue };
  "MergeTicketsIntoTargetTicket": { "ticket_id": ZendeskFullApiPathParamValue };
  "RestoreDeletedTicket": { "ticket_id": ZendeskFullApiPathParamValue };
  "ShowTicket": { "ticket_id": ZendeskFullApiPathParamValue };
  "ShowTicketByMessagingConversationId": { "conversation_id": ZendeskFullApiPathParamValue };
  "TicketRelatedInformation": { "ticket_id": ZendeskFullApiPathParamValue };
  "TicketsCreateMany": {};
  "TicketsShowMany": {};
  "TicketsUpdateMany": {};
  "UpdateTicket": { "ticket_id": ZendeskFullApiPathParamValue };
}

export interface ZendeskFullApiTicketsOperationRequestMap {
  "AutocompleteProblems": ZendeskFullApiOperationInput<"AutocompleteProblems">;
  "BulkDeleteTickets": ZendeskFullApiOperationInput<"BulkDeleteTickets">;
  "BulkPermanentlyDeleteTickets": ZendeskFullApiOperationInput<"BulkPermanentlyDeleteTickets">;
  "BulkRestoreDeletedTickets": ZendeskFullApiOperationInput<"BulkRestoreDeletedTickets">;
  "CountOrganizationTickets": ZendeskFullApiOperationInput<"CountOrganizationTickets">;
  "CountTickets": ZendeskFullApiOperationInput<"CountTickets">;
  "CountUserAssignedTickets": ZendeskFullApiOperationInput<"CountUserAssignedTickets">;
  "CountUserCCDTickets": ZendeskFullApiOperationInput<"CountUserCCDTickets">;
  "CreateTicket": ZendeskFullApiOperationInput<"CreateTicket">;
  "DeleteTicket": ZendeskFullApiOperationInput<"DeleteTicket">;
  "DeleteTicketPermanently": ZendeskFullApiOperationInput<"DeleteTicketPermanently">;
  "ListDeletedTickets": ZendeskFullApiOperationInput<"ListDeletedTickets">;
  "ListOrganizationTickets": ZendeskFullApiOperationInput<"ListOrganizationTickets">;
  "ListRecentTickets": ZendeskFullApiOperationInput<"ListRecentTickets">;
  "ListTicketCollaborators": ZendeskFullApiOperationInput<"ListTicketCollaborators">;
  "ListTicketEmailCCs": ZendeskFullApiOperationInput<"ListTicketEmailCCs">;
  "ListTicketFollowers": ZendeskFullApiOperationInput<"ListTicketFollowers">;
  "ListTicketIncidents": ZendeskFullApiOperationInput<"ListTicketIncidents">;
  "ListTicketProblems": ZendeskFullApiOperationInput<"ListTicketProblems">;
  "ListTickets": ZendeskFullApiOperationInput<"ListTickets">;
  "ListUserAssignedTickets": ZendeskFullApiOperationInput<"ListUserAssignedTickets">;
  "ListUserCCDTickets": ZendeskFullApiOperationInput<"ListUserCCDTickets">;
  "ListUserFollowedTickets": ZendeskFullApiOperationInput<"ListUserFollowedTickets">;
  "ListUserRequestedTickets": ZendeskFullApiOperationInput<"ListUserRequestedTickets">;
  "MarkManyTicketsAsSpam": ZendeskFullApiOperationInput<"MarkManyTicketsAsSpam">;
  "MarkTicketAsSpamAndSuspendRequester": ZendeskFullApiOperationInput<"MarkTicketAsSpamAndSuspendRequester">;
  "MergeTicketsIntoTargetTicket": ZendeskFullApiOperationInput<"MergeTicketsIntoTargetTicket">;
  "RestoreDeletedTicket": ZendeskFullApiOperationInput<"RestoreDeletedTicket">;
  "ShowTicket": ZendeskFullApiOperationInput<"ShowTicket">;
  "ShowTicketByMessagingConversationId": ZendeskFullApiOperationInput<"ShowTicketByMessagingConversationId">;
  "TicketRelatedInformation": ZendeskFullApiOperationInput<"TicketRelatedInformation">;
  "TicketsCreateMany": ZendeskFullApiOperationInput<"TicketsCreateMany">;
  "TicketsShowMany": ZendeskFullApiOperationInput<"TicketsShowMany">;
  "TicketsUpdateMany": ZendeskFullApiOperationInput<"TicketsUpdateMany">;
  "UpdateTicket": ZendeskFullApiOperationInput<"UpdateTicket">;
}

export interface ZendeskFullApiTicketsGeneratedClient {
  AutocompleteProblems(...args: ZendeskFullApiOperationArgs<"AutocompleteProblems">): Promise<ZendeskFullApiOperationResponseMap["AutocompleteProblems"]>;
  BulkDeleteTickets(...args: ZendeskFullApiOperationArgs<"BulkDeleteTickets">): Promise<ZendeskFullApiOperationResponseMap["BulkDeleteTickets"]>;
  BulkPermanentlyDeleteTickets(...args: ZendeskFullApiOperationArgs<"BulkPermanentlyDeleteTickets">): Promise<ZendeskFullApiOperationResponseMap["BulkPermanentlyDeleteTickets"]>;
  BulkRestoreDeletedTickets(...args: ZendeskFullApiOperationArgs<"BulkRestoreDeletedTickets">): Promise<ZendeskFullApiOperationResponseMap["BulkRestoreDeletedTickets"]>;
  CountOrganizationTickets(...args: ZendeskFullApiOperationArgs<"CountOrganizationTickets">): Promise<ZendeskFullApiOperationResponseMap["CountOrganizationTickets"]>;
  CountTickets(...args: ZendeskFullApiOperationArgs<"CountTickets">): Promise<ZendeskFullApiOperationResponseMap["CountTickets"]>;
  CountUserAssignedTickets(...args: ZendeskFullApiOperationArgs<"CountUserAssignedTickets">): Promise<ZendeskFullApiOperationResponseMap["CountUserAssignedTickets"]>;
  CountUserCCDTickets(...args: ZendeskFullApiOperationArgs<"CountUserCCDTickets">): Promise<ZendeskFullApiOperationResponseMap["CountUserCCDTickets"]>;
  CreateTicket(...args: ZendeskFullApiOperationArgs<"CreateTicket">): Promise<ZendeskFullApiOperationResponseMap["CreateTicket"]>;
  DeleteTicket(...args: ZendeskFullApiOperationArgs<"DeleteTicket">): Promise<ZendeskFullApiOperationResponseMap["DeleteTicket"]>;
  DeleteTicketPermanently(...args: ZendeskFullApiOperationArgs<"DeleteTicketPermanently">): Promise<ZendeskFullApiOperationResponseMap["DeleteTicketPermanently"]>;
  ListDeletedTickets(...args: ZendeskFullApiOperationArgs<"ListDeletedTickets">): Promise<ZendeskFullApiOperationResponseMap["ListDeletedTickets"]>;
  ListOrganizationTickets(...args: ZendeskFullApiOperationArgs<"ListOrganizationTickets">): Promise<ZendeskFullApiOperationResponseMap["ListOrganizationTickets"]>;
  ListRecentTickets(...args: ZendeskFullApiOperationArgs<"ListRecentTickets">): Promise<ZendeskFullApiOperationResponseMap["ListRecentTickets"]>;
  ListTicketCollaborators(...args: ZendeskFullApiOperationArgs<"ListTicketCollaborators">): Promise<ZendeskFullApiOperationResponseMap["ListTicketCollaborators"]>;
  ListTicketEmailCCs(...args: ZendeskFullApiOperationArgs<"ListTicketEmailCCs">): Promise<ZendeskFullApiOperationResponseMap["ListTicketEmailCCs"]>;
  ListTicketFollowers(...args: ZendeskFullApiOperationArgs<"ListTicketFollowers">): Promise<ZendeskFullApiOperationResponseMap["ListTicketFollowers"]>;
  ListTicketIncidents(...args: ZendeskFullApiOperationArgs<"ListTicketIncidents">): Promise<ZendeskFullApiOperationResponseMap["ListTicketIncidents"]>;
  ListTicketProblems(...args: ZendeskFullApiOperationArgs<"ListTicketProblems">): Promise<ZendeskFullApiOperationResponseMap["ListTicketProblems"]>;
  ListTickets(...args: ZendeskFullApiOperationArgs<"ListTickets">): Promise<ZendeskFullApiOperationResponseMap["ListTickets"]>;
  ListUserAssignedTickets(...args: ZendeskFullApiOperationArgs<"ListUserAssignedTickets">): Promise<ZendeskFullApiOperationResponseMap["ListUserAssignedTickets"]>;
  ListUserCCDTickets(...args: ZendeskFullApiOperationArgs<"ListUserCCDTickets">): Promise<ZendeskFullApiOperationResponseMap["ListUserCCDTickets"]>;
  ListUserFollowedTickets(...args: ZendeskFullApiOperationArgs<"ListUserFollowedTickets">): Promise<ZendeskFullApiOperationResponseMap["ListUserFollowedTickets"]>;
  ListUserRequestedTickets(...args: ZendeskFullApiOperationArgs<"ListUserRequestedTickets">): Promise<ZendeskFullApiOperationResponseMap["ListUserRequestedTickets"]>;
  MarkManyTicketsAsSpam(...args: ZendeskFullApiOperationArgs<"MarkManyTicketsAsSpam">): Promise<ZendeskFullApiOperationResponseMap["MarkManyTicketsAsSpam"]>;
  MarkTicketAsSpamAndSuspendRequester(...args: ZendeskFullApiOperationArgs<"MarkTicketAsSpamAndSuspendRequester">): Promise<ZendeskFullApiOperationResponseMap["MarkTicketAsSpamAndSuspendRequester"]>;
  MergeTicketsIntoTargetTicket(...args: ZendeskFullApiOperationArgs<"MergeTicketsIntoTargetTicket">): Promise<ZendeskFullApiOperationResponseMap["MergeTicketsIntoTargetTicket"]>;
  RestoreDeletedTicket(...args: ZendeskFullApiOperationArgs<"RestoreDeletedTicket">): Promise<ZendeskFullApiOperationResponseMap["RestoreDeletedTicket"]>;
  ShowTicket(...args: ZendeskFullApiOperationArgs<"ShowTicket">): Promise<ZendeskFullApiOperationResponseMap["ShowTicket"]>;
  ShowTicketByMessagingConversationId(...args: ZendeskFullApiOperationArgs<"ShowTicketByMessagingConversationId">): Promise<ZendeskFullApiOperationResponseMap["ShowTicketByMessagingConversationId"]>;
  TicketRelatedInformation(...args: ZendeskFullApiOperationArgs<"TicketRelatedInformation">): Promise<ZendeskFullApiOperationResponseMap["TicketRelatedInformation"]>;
  TicketsCreateMany(...args: ZendeskFullApiOperationArgs<"TicketsCreateMany">): Promise<ZendeskFullApiOperationResponseMap["TicketsCreateMany"]>;
  TicketsShowMany(...args: ZendeskFullApiOperationArgs<"TicketsShowMany">): Promise<ZendeskFullApiOperationResponseMap["TicketsShowMany"]>;
  TicketsUpdateMany(...args: ZendeskFullApiOperationArgs<"TicketsUpdateMany">): Promise<ZendeskFullApiOperationResponseMap["TicketsUpdateMany"]>;
  UpdateTicket(...args: ZendeskFullApiOperationArgs<"UpdateTicket">): Promise<ZendeskFullApiOperationResponseMap["UpdateTicket"]>;
}

export const ZendeskFullApiTicketsGeneratedFunctionNames = [
  "AutocompleteProblems",
  "BulkDeleteTickets",
  "BulkPermanentlyDeleteTickets",
  "BulkRestoreDeletedTickets",
  "CountOrganizationTickets",
  "CountTickets",
  "CountUserAssignedTickets",
  "CountUserCCDTickets",
  "CreateTicket",
  "DeleteTicket",
  "DeleteTicketPermanently",
  "ListDeletedTickets",
  "ListOrganizationTickets",
  "ListRecentTickets",
  "ListTicketCollaborators",
  "ListTicketEmailCCs",
  "ListTicketFollowers",
  "ListTicketIncidents",
  "ListTicketProblems",
  "ListTickets",
  "ListUserAssignedTickets",
  "ListUserCCDTickets",
  "ListUserFollowedTickets",
  "ListUserRequestedTickets",
  "MarkManyTicketsAsSpam",
  "MarkTicketAsSpamAndSuspendRequester",
  "MergeTicketsIntoTargetTicket",
  "RestoreDeletedTicket",
  "ShowTicket",
  "ShowTicketByMessagingConversationId",
  "TicketRelatedInformation",
  "TicketsCreateMany",
  "TicketsShowMany",
  "TicketsUpdateMany",
  "UpdateTicket"
] as const satisfies readonly (keyof ZendeskFullApiTicketsGeneratedClient)[];

export function createZendeskFullApiTicketsGeneratedClient(
  callOperation: ZendeskGeneratedOperationCaller,
): ZendeskFullApiTicketsGeneratedClient {
  return {
    AutocompleteProblems: (...args) => callOperation("AutocompleteProblems", ...(args as ZendeskFullApiOperationArgs<"AutocompleteProblems">)),
    BulkDeleteTickets: (...args) => callOperation("BulkDeleteTickets", ...(args as ZendeskFullApiOperationArgs<"BulkDeleteTickets">)),
    BulkPermanentlyDeleteTickets: (...args) => callOperation("BulkPermanentlyDeleteTickets", ...(args as ZendeskFullApiOperationArgs<"BulkPermanentlyDeleteTickets">)),
    BulkRestoreDeletedTickets: (...args) => callOperation("BulkRestoreDeletedTickets", ...(args as ZendeskFullApiOperationArgs<"BulkRestoreDeletedTickets">)),
    CountOrganizationTickets: (...args) => callOperation("CountOrganizationTickets", ...(args as ZendeskFullApiOperationArgs<"CountOrganizationTickets">)),
    CountTickets: (...args) => callOperation("CountTickets", ...(args as ZendeskFullApiOperationArgs<"CountTickets">)),
    CountUserAssignedTickets: (...args) => callOperation("CountUserAssignedTickets", ...(args as ZendeskFullApiOperationArgs<"CountUserAssignedTickets">)),
    CountUserCCDTickets: (...args) => callOperation("CountUserCCDTickets", ...(args as ZendeskFullApiOperationArgs<"CountUserCCDTickets">)),
    CreateTicket: (...args) => callOperation("CreateTicket", ...(args as ZendeskFullApiOperationArgs<"CreateTicket">)),
    DeleteTicket: (...args) => callOperation("DeleteTicket", ...(args as ZendeskFullApiOperationArgs<"DeleteTicket">)),
    DeleteTicketPermanently: (...args) => callOperation("DeleteTicketPermanently", ...(args as ZendeskFullApiOperationArgs<"DeleteTicketPermanently">)),
    ListDeletedTickets: (...args) => callOperation("ListDeletedTickets", ...(args as ZendeskFullApiOperationArgs<"ListDeletedTickets">)),
    ListOrganizationTickets: (...args) => callOperation("ListOrganizationTickets", ...(args as ZendeskFullApiOperationArgs<"ListOrganizationTickets">)),
    ListRecentTickets: (...args) => callOperation("ListRecentTickets", ...(args as ZendeskFullApiOperationArgs<"ListRecentTickets">)),
    ListTicketCollaborators: (...args) => callOperation("ListTicketCollaborators", ...(args as ZendeskFullApiOperationArgs<"ListTicketCollaborators">)),
    ListTicketEmailCCs: (...args) => callOperation("ListTicketEmailCCs", ...(args as ZendeskFullApiOperationArgs<"ListTicketEmailCCs">)),
    ListTicketFollowers: (...args) => callOperation("ListTicketFollowers", ...(args as ZendeskFullApiOperationArgs<"ListTicketFollowers">)),
    ListTicketIncidents: (...args) => callOperation("ListTicketIncidents", ...(args as ZendeskFullApiOperationArgs<"ListTicketIncidents">)),
    ListTicketProblems: (...args) => callOperation("ListTicketProblems", ...(args as ZendeskFullApiOperationArgs<"ListTicketProblems">)),
    ListTickets: (...args) => callOperation("ListTickets", ...(args as ZendeskFullApiOperationArgs<"ListTickets">)),
    ListUserAssignedTickets: (...args) => callOperation("ListUserAssignedTickets", ...(args as ZendeskFullApiOperationArgs<"ListUserAssignedTickets">)),
    ListUserCCDTickets: (...args) => callOperation("ListUserCCDTickets", ...(args as ZendeskFullApiOperationArgs<"ListUserCCDTickets">)),
    ListUserFollowedTickets: (...args) => callOperation("ListUserFollowedTickets", ...(args as ZendeskFullApiOperationArgs<"ListUserFollowedTickets">)),
    ListUserRequestedTickets: (...args) => callOperation("ListUserRequestedTickets", ...(args as ZendeskFullApiOperationArgs<"ListUserRequestedTickets">)),
    MarkManyTicketsAsSpam: (...args) => callOperation("MarkManyTicketsAsSpam", ...(args as ZendeskFullApiOperationArgs<"MarkManyTicketsAsSpam">)),
    MarkTicketAsSpamAndSuspendRequester: (...args) => callOperation("MarkTicketAsSpamAndSuspendRequester", ...(args as ZendeskFullApiOperationArgs<"MarkTicketAsSpamAndSuspendRequester">)),
    MergeTicketsIntoTargetTicket: (...args) => callOperation("MergeTicketsIntoTargetTicket", ...(args as ZendeskFullApiOperationArgs<"MergeTicketsIntoTargetTicket">)),
    RestoreDeletedTicket: (...args) => callOperation("RestoreDeletedTicket", ...(args as ZendeskFullApiOperationArgs<"RestoreDeletedTicket">)),
    ShowTicket: (...args) => callOperation("ShowTicket", ...(args as ZendeskFullApiOperationArgs<"ShowTicket">)),
    ShowTicketByMessagingConversationId: (...args) => callOperation("ShowTicketByMessagingConversationId", ...(args as ZendeskFullApiOperationArgs<"ShowTicketByMessagingConversationId">)),
    TicketRelatedInformation: (...args) => callOperation("TicketRelatedInformation", ...(args as ZendeskFullApiOperationArgs<"TicketRelatedInformation">)),
    TicketsCreateMany: (...args) => callOperation("TicketsCreateMany", ...(args as ZendeskFullApiOperationArgs<"TicketsCreateMany">)),
    TicketsShowMany: (...args) => callOperation("TicketsShowMany", ...(args as ZendeskFullApiOperationArgs<"TicketsShowMany">)),
    TicketsUpdateMany: (...args) => callOperation("TicketsUpdateMany", ...(args as ZendeskFullApiOperationArgs<"TicketsUpdateMany">)),
    UpdateTicket: (...args) => callOperation("UpdateTicket", ...(args as ZendeskFullApiOperationArgs<"UpdateTicket">)),
  };
}
