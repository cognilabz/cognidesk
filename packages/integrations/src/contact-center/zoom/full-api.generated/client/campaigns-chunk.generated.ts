// Generated endpoint chunk for ZoomContactCenterFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  ZoomContactCenterGeneratedOperationCaller,
  ZoomContactCenterFullApiOperationArgs,
  ZoomContactCenterFullApiOperationInput,
  ZoomContactCenterFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { ZoomContactCenterFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const ZoomContactCenterFullApiCampaignsOperationKeys = [
  "GET /contact_center/outbound_campaign/campaigns",
  "POST /contact_center/outbound_campaign/campaigns",
  "GET /contact_center/outbound_campaign/campaigns/{campaignId}",
  "DELETE /contact_center/outbound_campaign/campaigns/{campaignId}",
  "PATCH /contact_center/outbound_campaign/campaigns/{campaignId}",
  "PATCH /contact_center/outbound_campaign/campaigns/{campaignId}/status",
  "GET /contact_center/outbound_campaign/contact_list_custom_fields",
  "POST /contact_center/outbound_campaign/contact_list_custom_fields",
  "GET /contact_center/outbound_campaign/contact_list_custom_fields/{customFieldId}",
  "DELETE /contact_center/outbound_campaign/contact_list_custom_fields/{customFieldId}",
  "PATCH /contact_center/outbound_campaign/contact_list_custom_fields/{customFieldId}",
  "GET /contact_center/outbound_campaign/contact_lists",
  "POST /contact_center/outbound_campaign/contact_lists",
  "PATCH /contact_center/outbound_campaign/contact_lists",
  "GET /contact_center/outbound_campaign/contact_lists/{contactListId}",
  "DELETE /contact_center/outbound_campaign/contact_lists/{contactListId}",
  "PATCH /contact_center/outbound_campaign/contact_lists/{contactListId}",
  "GET /contact_center/outbound_campaign/contact_lists/{contactListId}/contacts",
  "POST /contact_center/outbound_campaign/contact_lists/{contactListId}/contacts",
  "PATCH /contact_center/outbound_campaign/contact_lists/{contactListId}/contacts",
  "POST /contact_center/outbound_campaign/contact_lists/{contactListId}/contacts/batch",
  "GET /contact_center/outbound_campaign/contact_lists/{contactListId}/contacts/{contactId}",
  "DELETE /contact_center/outbound_campaign/contact_lists/{contactListId}/contacts/{contactId}",
  "PATCH /contact_center/outbound_campaign/contact_lists/{contactListId}/contacts/{contactId}",
  "GET /contact_center/outbound_campaign/contacts/{contactId}/custom_fields",
  "GET /contact_center/outbound_campaign/dnc_lists/{dncListId}/phones",
  "POST /contact_center/outbound_campaign/dnc_lists/{dncListId}/phones",
  "DELETE /contact_center/outbound_campaign/dnc_lists/{dncListId}/phones"
] as const;
export type ZoomContactCenterFullApiCampaignsOperationKey = typeof ZoomContactCenterFullApiCampaignsOperationKeys[number];
// End hardened literal operation keys.

export interface ZoomContactCenterFullApiCampaignsOperationPathParamMap {
  "GET /contact_center/outbound_campaign/campaigns": {};
  "POST /contact_center/outbound_campaign/campaigns": {};
  "GET /contact_center/outbound_campaign/campaigns/{campaignId}": { "campaignId": ZoomContactCenterFullApiPathParamValue };
  "DELETE /contact_center/outbound_campaign/campaigns/{campaignId}": { "campaignId": ZoomContactCenterFullApiPathParamValue };
  "PATCH /contact_center/outbound_campaign/campaigns/{campaignId}": { "campaignId": ZoomContactCenterFullApiPathParamValue };
  "PATCH /contact_center/outbound_campaign/campaigns/{campaignId}/status": { "campaignId": ZoomContactCenterFullApiPathParamValue };
  "GET /contact_center/outbound_campaign/contact_list_custom_fields": {};
  "POST /contact_center/outbound_campaign/contact_list_custom_fields": {};
  "GET /contact_center/outbound_campaign/contact_list_custom_fields/{customFieldId}": { "customFieldId": ZoomContactCenterFullApiPathParamValue };
  "DELETE /contact_center/outbound_campaign/contact_list_custom_fields/{customFieldId}": { "customFieldId": ZoomContactCenterFullApiPathParamValue };
  "PATCH /contact_center/outbound_campaign/contact_list_custom_fields/{customFieldId}": { "customFieldId": ZoomContactCenterFullApiPathParamValue };
  "GET /contact_center/outbound_campaign/contact_lists": {};
  "POST /contact_center/outbound_campaign/contact_lists": {};
  "PATCH /contact_center/outbound_campaign/contact_lists": {};
  "GET /contact_center/outbound_campaign/contact_lists/{contactListId}": { "contactListId": ZoomContactCenterFullApiPathParamValue };
  "DELETE /contact_center/outbound_campaign/contact_lists/{contactListId}": { "contactListId": ZoomContactCenterFullApiPathParamValue };
  "PATCH /contact_center/outbound_campaign/contact_lists/{contactListId}": { "contactListId": ZoomContactCenterFullApiPathParamValue };
  "GET /contact_center/outbound_campaign/contact_lists/{contactListId}/contacts": { "contactListId": ZoomContactCenterFullApiPathParamValue };
  "POST /contact_center/outbound_campaign/contact_lists/{contactListId}/contacts": { "contactListId": ZoomContactCenterFullApiPathParamValue };
  "PATCH /contact_center/outbound_campaign/contact_lists/{contactListId}/contacts": { "contactListId": ZoomContactCenterFullApiPathParamValue };
  "POST /contact_center/outbound_campaign/contact_lists/{contactListId}/contacts/batch": { "contactListId": ZoomContactCenterFullApiPathParamValue };
  "GET /contact_center/outbound_campaign/contact_lists/{contactListId}/contacts/{contactId}": { "contactListId": ZoomContactCenterFullApiPathParamValue; "contactId": ZoomContactCenterFullApiPathParamValue };
  "DELETE /contact_center/outbound_campaign/contact_lists/{contactListId}/contacts/{contactId}": { "contactListId": ZoomContactCenterFullApiPathParamValue; "contactId": ZoomContactCenterFullApiPathParamValue };
  "PATCH /contact_center/outbound_campaign/contact_lists/{contactListId}/contacts/{contactId}": { "contactListId": ZoomContactCenterFullApiPathParamValue; "contactId": ZoomContactCenterFullApiPathParamValue };
  "GET /contact_center/outbound_campaign/contacts/{contactId}/custom_fields": { "contactId": ZoomContactCenterFullApiPathParamValue };
  "GET /contact_center/outbound_campaign/dnc_lists/{dncListId}/phones": { "dncListId": ZoomContactCenterFullApiPathParamValue };
  "POST /contact_center/outbound_campaign/dnc_lists/{dncListId}/phones": { "dncListId": ZoomContactCenterFullApiPathParamValue };
  "DELETE /contact_center/outbound_campaign/dnc_lists/{dncListId}/phones": { "dncListId": ZoomContactCenterFullApiPathParamValue };
}

export interface ZoomContactCenterFullApiCampaignsOperationRequestMap {
  "GET /contact_center/outbound_campaign/campaigns": ZoomContactCenterFullApiOperationInput<"GET /contact_center/outbound_campaign/campaigns">;
  "POST /contact_center/outbound_campaign/campaigns": ZoomContactCenterFullApiOperationInput<"POST /contact_center/outbound_campaign/campaigns">;
  "GET /contact_center/outbound_campaign/campaigns/{campaignId}": ZoomContactCenterFullApiOperationInput<"GET /contact_center/outbound_campaign/campaigns/{campaignId}">;
  "DELETE /contact_center/outbound_campaign/campaigns/{campaignId}": ZoomContactCenterFullApiOperationInput<"DELETE /contact_center/outbound_campaign/campaigns/{campaignId}">;
  "PATCH /contact_center/outbound_campaign/campaigns/{campaignId}": ZoomContactCenterFullApiOperationInput<"PATCH /contact_center/outbound_campaign/campaigns/{campaignId}">;
  "PATCH /contact_center/outbound_campaign/campaigns/{campaignId}/status": ZoomContactCenterFullApiOperationInput<"PATCH /contact_center/outbound_campaign/campaigns/{campaignId}/status">;
  "GET /contact_center/outbound_campaign/contact_list_custom_fields": ZoomContactCenterFullApiOperationInput<"GET /contact_center/outbound_campaign/contact_list_custom_fields">;
  "POST /contact_center/outbound_campaign/contact_list_custom_fields": ZoomContactCenterFullApiOperationInput<"POST /contact_center/outbound_campaign/contact_list_custom_fields">;
  "GET /contact_center/outbound_campaign/contact_list_custom_fields/{customFieldId}": ZoomContactCenterFullApiOperationInput<"GET /contact_center/outbound_campaign/contact_list_custom_fields/{customFieldId}">;
  "DELETE /contact_center/outbound_campaign/contact_list_custom_fields/{customFieldId}": ZoomContactCenterFullApiOperationInput<"DELETE /contact_center/outbound_campaign/contact_list_custom_fields/{customFieldId}">;
  "PATCH /contact_center/outbound_campaign/contact_list_custom_fields/{customFieldId}": ZoomContactCenterFullApiOperationInput<"PATCH /contact_center/outbound_campaign/contact_list_custom_fields/{customFieldId}">;
  "GET /contact_center/outbound_campaign/contact_lists": ZoomContactCenterFullApiOperationInput<"GET /contact_center/outbound_campaign/contact_lists">;
  "POST /contact_center/outbound_campaign/contact_lists": ZoomContactCenterFullApiOperationInput<"POST /contact_center/outbound_campaign/contact_lists">;
  "PATCH /contact_center/outbound_campaign/contact_lists": ZoomContactCenterFullApiOperationInput<"PATCH /contact_center/outbound_campaign/contact_lists">;
  "GET /contact_center/outbound_campaign/contact_lists/{contactListId}": ZoomContactCenterFullApiOperationInput<"GET /contact_center/outbound_campaign/contact_lists/{contactListId}">;
  "DELETE /contact_center/outbound_campaign/contact_lists/{contactListId}": ZoomContactCenterFullApiOperationInput<"DELETE /contact_center/outbound_campaign/contact_lists/{contactListId}">;
  "PATCH /contact_center/outbound_campaign/contact_lists/{contactListId}": ZoomContactCenterFullApiOperationInput<"PATCH /contact_center/outbound_campaign/contact_lists/{contactListId}">;
  "GET /contact_center/outbound_campaign/contact_lists/{contactListId}/contacts": ZoomContactCenterFullApiOperationInput<"GET /contact_center/outbound_campaign/contact_lists/{contactListId}/contacts">;
  "POST /contact_center/outbound_campaign/contact_lists/{contactListId}/contacts": ZoomContactCenterFullApiOperationInput<"POST /contact_center/outbound_campaign/contact_lists/{contactListId}/contacts">;
  "PATCH /contact_center/outbound_campaign/contact_lists/{contactListId}/contacts": ZoomContactCenterFullApiOperationInput<"PATCH /contact_center/outbound_campaign/contact_lists/{contactListId}/contacts">;
  "POST /contact_center/outbound_campaign/contact_lists/{contactListId}/contacts/batch": ZoomContactCenterFullApiOperationInput<"POST /contact_center/outbound_campaign/contact_lists/{contactListId}/contacts/batch">;
  "GET /contact_center/outbound_campaign/contact_lists/{contactListId}/contacts/{contactId}": ZoomContactCenterFullApiOperationInput<"GET /contact_center/outbound_campaign/contact_lists/{contactListId}/contacts/{contactId}">;
  "DELETE /contact_center/outbound_campaign/contact_lists/{contactListId}/contacts/{contactId}": ZoomContactCenterFullApiOperationInput<"DELETE /contact_center/outbound_campaign/contact_lists/{contactListId}/contacts/{contactId}">;
  "PATCH /contact_center/outbound_campaign/contact_lists/{contactListId}/contacts/{contactId}": ZoomContactCenterFullApiOperationInput<"PATCH /contact_center/outbound_campaign/contact_lists/{contactListId}/contacts/{contactId}">;
  "GET /contact_center/outbound_campaign/contacts/{contactId}/custom_fields": ZoomContactCenterFullApiOperationInput<"GET /contact_center/outbound_campaign/contacts/{contactId}/custom_fields">;
  "GET /contact_center/outbound_campaign/dnc_lists/{dncListId}/phones": ZoomContactCenterFullApiOperationInput<"GET /contact_center/outbound_campaign/dnc_lists/{dncListId}/phones">;
  "POST /contact_center/outbound_campaign/dnc_lists/{dncListId}/phones": ZoomContactCenterFullApiOperationInput<"POST /contact_center/outbound_campaign/dnc_lists/{dncListId}/phones">;
  "DELETE /contact_center/outbound_campaign/dnc_lists/{dncListId}/phones": ZoomContactCenterFullApiOperationInput<"DELETE /contact_center/outbound_campaign/dnc_lists/{dncListId}/phones">;
}

export interface ZoomContactCenterFullApiCampaignsGeneratedClient {
  ListOutboundCampaigns(...args: ZoomContactCenterFullApiOperationArgs<"GET /contact_center/outbound_campaign/campaigns">): Promise<ZoomContactCenterFullApiOperationResponseMap["GET /contact_center/outbound_campaign/campaigns"]>;
  CreateOutboundCampaign(...args: ZoomContactCenterFullApiOperationArgs<"POST /contact_center/outbound_campaign/campaigns">): Promise<ZoomContactCenterFullApiOperationResponseMap["POST /contact_center/outbound_campaign/campaigns"]>;
  GetOutboundCampaign(...args: ZoomContactCenterFullApiOperationArgs<"GET /contact_center/outbound_campaign/campaigns/{campaignId}">): Promise<ZoomContactCenterFullApiOperationResponseMap["GET /contact_center/outbound_campaign/campaigns/{campaignId}"]>;
  DeleteOutboundCampaign(...args: ZoomContactCenterFullApiOperationArgs<"DELETE /contact_center/outbound_campaign/campaigns/{campaignId}">): Promise<ZoomContactCenterFullApiOperationResponseMap["DELETE /contact_center/outbound_campaign/campaigns/{campaignId}"]>;
  UpdateOutboundCampaign(...args: ZoomContactCenterFullApiOperationArgs<"PATCH /contact_center/outbound_campaign/campaigns/{campaignId}">): Promise<ZoomContactCenterFullApiOperationResponseMap["PATCH /contact_center/outbound_campaign/campaigns/{campaignId}"]>;
  Updateanoutboundcampaignstatus(...args: ZoomContactCenterFullApiOperationArgs<"PATCH /contact_center/outbound_campaign/campaigns/{campaignId}/status">): Promise<ZoomContactCenterFullApiOperationResponseMap["PATCH /contact_center/outbound_campaign/campaigns/{campaignId}/status"]>;
  ListCampaignCustomFields(...args: ZoomContactCenterFullApiOperationArgs<"GET /contact_center/outbound_campaign/contact_list_custom_fields">): Promise<ZoomContactCenterFullApiOperationResponseMap["GET /contact_center/outbound_campaign/contact_list_custom_fields"]>;
  CreateACampaignContactCustomField(...args: ZoomContactCenterFullApiOperationArgs<"POST /contact_center/outbound_campaign/contact_list_custom_fields">): Promise<ZoomContactCenterFullApiOperationResponseMap["POST /contact_center/outbound_campaign/contact_list_custom_fields"]>;
  GetACampaignContactCustomField(...args: ZoomContactCenterFullApiOperationArgs<"GET /contact_center/outbound_campaign/contact_list_custom_fields/{customFieldId}">): Promise<ZoomContactCenterFullApiOperationResponseMap["GET /contact_center/outbound_campaign/contact_list_custom_fields/{customFieldId}"]>;
  DeleteACampaignCustomField(...args: ZoomContactCenterFullApiOperationArgs<"DELETE /contact_center/outbound_campaign/contact_list_custom_fields/{customFieldId}">): Promise<ZoomContactCenterFullApiOperationResponseMap["DELETE /contact_center/outbound_campaign/contact_list_custom_fields/{customFieldId}"]>;
  UpdateACampaignCustomField(...args: ZoomContactCenterFullApiOperationArgs<"PATCH /contact_center/outbound_campaign/contact_list_custom_fields/{customFieldId}">): Promise<ZoomContactCenterFullApiOperationResponseMap["PATCH /contact_center/outbound_campaign/contact_list_custom_fields/{customFieldId}"]>;
  ListCampaignContactLists(...args: ZoomContactCenterFullApiOperationArgs<"GET /contact_center/outbound_campaign/contact_lists">): Promise<ZoomContactCenterFullApiOperationResponseMap["GET /contact_center/outbound_campaign/contact_lists"]>;
  CreateCampaignContactList(...args: ZoomContactCenterFullApiOperationArgs<"POST /contact_center/outbound_campaign/contact_lists">): Promise<ZoomContactCenterFullApiOperationResponseMap["POST /contact_center/outbound_campaign/contact_lists"]>;
  Batchupdatecampaigncontactlists(...args: ZoomContactCenterFullApiOperationArgs<"PATCH /contact_center/outbound_campaign/contact_lists">): Promise<ZoomContactCenterFullApiOperationResponseMap["PATCH /contact_center/outbound_campaign/contact_lists"]>;
  GetCampaignContactList(...args: ZoomContactCenterFullApiOperationArgs<"GET /contact_center/outbound_campaign/contact_lists/{contactListId}">): Promise<ZoomContactCenterFullApiOperationResponseMap["GET /contact_center/outbound_campaign/contact_lists/{contactListId}"]>;
  DeleteCampaignContactList(...args: ZoomContactCenterFullApiOperationArgs<"DELETE /contact_center/outbound_campaign/contact_lists/{contactListId}">): Promise<ZoomContactCenterFullApiOperationResponseMap["DELETE /contact_center/outbound_campaign/contact_lists/{contactListId}"]>;
  UpdateCampaignContactList(...args: ZoomContactCenterFullApiOperationArgs<"PATCH /contact_center/outbound_campaign/contact_lists/{contactListId}">): Promise<ZoomContactCenterFullApiOperationResponseMap["PATCH /contact_center/outbound_campaign/contact_lists/{contactListId}"]>;
  ListCampaignContactListContacts(...args: ZoomContactCenterFullApiOperationArgs<"GET /contact_center/outbound_campaign/contact_lists/{contactListId}/contacts">): Promise<ZoomContactCenterFullApiOperationResponseMap["GET /contact_center/outbound_campaign/contact_lists/{contactListId}/contacts"]>;
  CreateCampaignContactListContact(...args: ZoomContactCenterFullApiOperationArgs<"POST /contact_center/outbound_campaign/contact_lists/{contactListId}/contacts">): Promise<ZoomContactCenterFullApiOperationResponseMap["POST /contact_center/outbound_campaign/contact_lists/{contactListId}/contacts"]>;
  Updateabatchofcontactsonacampaigncontactlist(...args: ZoomContactCenterFullApiOperationArgs<"PATCH /contact_center/outbound_campaign/contact_lists/{contactListId}/contacts">): Promise<ZoomContactCenterFullApiOperationResponseMap["PATCH /contact_center/outbound_campaign/contact_lists/{contactListId}/contacts"]>;
  Insertabatchofcontactstoacampaigncontactlist(...args: ZoomContactCenterFullApiOperationArgs<"POST /contact_center/outbound_campaign/contact_lists/{contactListId}/contacts/batch">): Promise<ZoomContactCenterFullApiOperationResponseMap["POST /contact_center/outbound_campaign/contact_lists/{contactListId}/contacts/batch"]>;
  GetCampaignContactListContact(...args: ZoomContactCenterFullApiOperationArgs<"GET /contact_center/outbound_campaign/contact_lists/{contactListId}/contacts/{contactId}">): Promise<ZoomContactCenterFullApiOperationResponseMap["GET /contact_center/outbound_campaign/contact_lists/{contactListId}/contacts/{contactId}"]>;
  DeleteCampaigncontactListContact(...args: ZoomContactCenterFullApiOperationArgs<"DELETE /contact_center/outbound_campaign/contact_lists/{contactListId}/contacts/{contactId}">): Promise<ZoomContactCenterFullApiOperationResponseMap["DELETE /contact_center/outbound_campaign/contact_lists/{contactListId}/contacts/{contactId}"]>;
  UpdateCampaignContactListContact(...args: ZoomContactCenterFullApiOperationArgs<"PATCH /contact_center/outbound_campaign/contact_lists/{contactListId}/contacts/{contactId}">): Promise<ZoomContactCenterFullApiOperationResponseMap["PATCH /contact_center/outbound_campaign/contact_lists/{contactListId}/contacts/{contactId}"]>;
  ListCampaignContactCustomFields(...args: ZoomContactCenterFullApiOperationArgs<"GET /contact_center/outbound_campaign/contacts/{contactId}/custom_fields">): Promise<ZoomContactCenterFullApiOperationResponseMap["GET /contact_center/outbound_campaign/contacts/{contactId}/custom_fields"]>;
  ListCampaignDncListPhones(...args: ZoomContactCenterFullApiOperationArgs<"GET /contact_center/outbound_campaign/dnc_lists/{dncListId}/phones">): Promise<ZoomContactCenterFullApiOperationResponseMap["GET /contact_center/outbound_campaign/dnc_lists/{dncListId}/phones"]>;
  BatchCreateCampaignDncListPhones(...args: ZoomContactCenterFullApiOperationArgs<"POST /contact_center/outbound_campaign/dnc_lists/{dncListId}/phones">): Promise<ZoomContactCenterFullApiOperationResponseMap["POST /contact_center/outbound_campaign/dnc_lists/{dncListId}/phones"]>;
  BatchDeleteCampaignDncListPhone(...args: ZoomContactCenterFullApiOperationArgs<"DELETE /contact_center/outbound_campaign/dnc_lists/{dncListId}/phones">): Promise<ZoomContactCenterFullApiOperationResponseMap["DELETE /contact_center/outbound_campaign/dnc_lists/{dncListId}/phones"]>;
}

export const ZoomContactCenterFullApiCampaignsGeneratedFunctionNames = [
  "ListOutboundCampaigns",
  "CreateOutboundCampaign",
  "GetOutboundCampaign",
  "DeleteOutboundCampaign",
  "UpdateOutboundCampaign",
  "Updateanoutboundcampaignstatus",
  "ListCampaignCustomFields",
  "CreateACampaignContactCustomField",
  "GetACampaignContactCustomField",
  "DeleteACampaignCustomField",
  "UpdateACampaignCustomField",
  "ListCampaignContactLists",
  "CreateCampaignContactList",
  "Batchupdatecampaigncontactlists",
  "GetCampaignContactList",
  "DeleteCampaignContactList",
  "UpdateCampaignContactList",
  "ListCampaignContactListContacts",
  "CreateCampaignContactListContact",
  "Updateabatchofcontactsonacampaigncontactlist",
  "Insertabatchofcontactstoacampaigncontactlist",
  "GetCampaignContactListContact",
  "DeleteCampaigncontactListContact",
  "UpdateCampaignContactListContact",
  "ListCampaignContactCustomFields",
  "ListCampaignDncListPhones",
  "BatchCreateCampaignDncListPhones",
  "BatchDeleteCampaignDncListPhone"
] as const satisfies readonly (keyof ZoomContactCenterFullApiCampaignsGeneratedClient)[];

export function createZoomContactCenterFullApiCampaignsGeneratedClient(
  callOperation: ZoomContactCenterGeneratedOperationCaller,
): ZoomContactCenterFullApiCampaignsGeneratedClient {
  return {
    ListOutboundCampaigns: (...args) => callOperation("GET /contact_center/outbound_campaign/campaigns", ...(args as ZoomContactCenterFullApiOperationArgs<"GET /contact_center/outbound_campaign/campaigns">)),
    CreateOutboundCampaign: (...args) => callOperation("POST /contact_center/outbound_campaign/campaigns", ...(args as ZoomContactCenterFullApiOperationArgs<"POST /contact_center/outbound_campaign/campaigns">)),
    GetOutboundCampaign: (...args) => callOperation("GET /contact_center/outbound_campaign/campaigns/{campaignId}", ...(args as ZoomContactCenterFullApiOperationArgs<"GET /contact_center/outbound_campaign/campaigns/{campaignId}">)),
    DeleteOutboundCampaign: (...args) => callOperation("DELETE /contact_center/outbound_campaign/campaigns/{campaignId}", ...(args as ZoomContactCenterFullApiOperationArgs<"DELETE /contact_center/outbound_campaign/campaigns/{campaignId}">)),
    UpdateOutboundCampaign: (...args) => callOperation("PATCH /contact_center/outbound_campaign/campaigns/{campaignId}", ...(args as ZoomContactCenterFullApiOperationArgs<"PATCH /contact_center/outbound_campaign/campaigns/{campaignId}">)),
    Updateanoutboundcampaignstatus: (...args) => callOperation("PATCH /contact_center/outbound_campaign/campaigns/{campaignId}/status", ...(args as ZoomContactCenterFullApiOperationArgs<"PATCH /contact_center/outbound_campaign/campaigns/{campaignId}/status">)),
    ListCampaignCustomFields: (...args) => callOperation("GET /contact_center/outbound_campaign/contact_list_custom_fields", ...(args as ZoomContactCenterFullApiOperationArgs<"GET /contact_center/outbound_campaign/contact_list_custom_fields">)),
    CreateACampaignContactCustomField: (...args) => callOperation("POST /contact_center/outbound_campaign/contact_list_custom_fields", ...(args as ZoomContactCenterFullApiOperationArgs<"POST /contact_center/outbound_campaign/contact_list_custom_fields">)),
    GetACampaignContactCustomField: (...args) => callOperation("GET /contact_center/outbound_campaign/contact_list_custom_fields/{customFieldId}", ...(args as ZoomContactCenterFullApiOperationArgs<"GET /contact_center/outbound_campaign/contact_list_custom_fields/{customFieldId}">)),
    DeleteACampaignCustomField: (...args) => callOperation("DELETE /contact_center/outbound_campaign/contact_list_custom_fields/{customFieldId}", ...(args as ZoomContactCenterFullApiOperationArgs<"DELETE /contact_center/outbound_campaign/contact_list_custom_fields/{customFieldId}">)),
    UpdateACampaignCustomField: (...args) => callOperation("PATCH /contact_center/outbound_campaign/contact_list_custom_fields/{customFieldId}", ...(args as ZoomContactCenterFullApiOperationArgs<"PATCH /contact_center/outbound_campaign/contact_list_custom_fields/{customFieldId}">)),
    ListCampaignContactLists: (...args) => callOperation("GET /contact_center/outbound_campaign/contact_lists", ...(args as ZoomContactCenterFullApiOperationArgs<"GET /contact_center/outbound_campaign/contact_lists">)),
    CreateCampaignContactList: (...args) => callOperation("POST /contact_center/outbound_campaign/contact_lists", ...(args as ZoomContactCenterFullApiOperationArgs<"POST /contact_center/outbound_campaign/contact_lists">)),
    Batchupdatecampaigncontactlists: (...args) => callOperation("PATCH /contact_center/outbound_campaign/contact_lists", ...(args as ZoomContactCenterFullApiOperationArgs<"PATCH /contact_center/outbound_campaign/contact_lists">)),
    GetCampaignContactList: (...args) => callOperation("GET /contact_center/outbound_campaign/contact_lists/{contactListId}", ...(args as ZoomContactCenterFullApiOperationArgs<"GET /contact_center/outbound_campaign/contact_lists/{contactListId}">)),
    DeleteCampaignContactList: (...args) => callOperation("DELETE /contact_center/outbound_campaign/contact_lists/{contactListId}", ...(args as ZoomContactCenterFullApiOperationArgs<"DELETE /contact_center/outbound_campaign/contact_lists/{contactListId}">)),
    UpdateCampaignContactList: (...args) => callOperation("PATCH /contact_center/outbound_campaign/contact_lists/{contactListId}", ...(args as ZoomContactCenterFullApiOperationArgs<"PATCH /contact_center/outbound_campaign/contact_lists/{contactListId}">)),
    ListCampaignContactListContacts: (...args) => callOperation("GET /contact_center/outbound_campaign/contact_lists/{contactListId}/contacts", ...(args as ZoomContactCenterFullApiOperationArgs<"GET /contact_center/outbound_campaign/contact_lists/{contactListId}/contacts">)),
    CreateCampaignContactListContact: (...args) => callOperation("POST /contact_center/outbound_campaign/contact_lists/{contactListId}/contacts", ...(args as ZoomContactCenterFullApiOperationArgs<"POST /contact_center/outbound_campaign/contact_lists/{contactListId}/contacts">)),
    Updateabatchofcontactsonacampaigncontactlist: (...args) => callOperation("PATCH /contact_center/outbound_campaign/contact_lists/{contactListId}/contacts", ...(args as ZoomContactCenterFullApiOperationArgs<"PATCH /contact_center/outbound_campaign/contact_lists/{contactListId}/contacts">)),
    Insertabatchofcontactstoacampaigncontactlist: (...args) => callOperation("POST /contact_center/outbound_campaign/contact_lists/{contactListId}/contacts/batch", ...(args as ZoomContactCenterFullApiOperationArgs<"POST /contact_center/outbound_campaign/contact_lists/{contactListId}/contacts/batch">)),
    GetCampaignContactListContact: (...args) => callOperation("GET /contact_center/outbound_campaign/contact_lists/{contactListId}/contacts/{contactId}", ...(args as ZoomContactCenterFullApiOperationArgs<"GET /contact_center/outbound_campaign/contact_lists/{contactListId}/contacts/{contactId}">)),
    DeleteCampaigncontactListContact: (...args) => callOperation("DELETE /contact_center/outbound_campaign/contact_lists/{contactListId}/contacts/{contactId}", ...(args as ZoomContactCenterFullApiOperationArgs<"DELETE /contact_center/outbound_campaign/contact_lists/{contactListId}/contacts/{contactId}">)),
    UpdateCampaignContactListContact: (...args) => callOperation("PATCH /contact_center/outbound_campaign/contact_lists/{contactListId}/contacts/{contactId}", ...(args as ZoomContactCenterFullApiOperationArgs<"PATCH /contact_center/outbound_campaign/contact_lists/{contactListId}/contacts/{contactId}">)),
    ListCampaignContactCustomFields: (...args) => callOperation("GET /contact_center/outbound_campaign/contacts/{contactId}/custom_fields", ...(args as ZoomContactCenterFullApiOperationArgs<"GET /contact_center/outbound_campaign/contacts/{contactId}/custom_fields">)),
    ListCampaignDncListPhones: (...args) => callOperation("GET /contact_center/outbound_campaign/dnc_lists/{dncListId}/phones", ...(args as ZoomContactCenterFullApiOperationArgs<"GET /contact_center/outbound_campaign/dnc_lists/{dncListId}/phones">)),
    BatchCreateCampaignDncListPhones: (...args) => callOperation("POST /contact_center/outbound_campaign/dnc_lists/{dncListId}/phones", ...(args as ZoomContactCenterFullApiOperationArgs<"POST /contact_center/outbound_campaign/dnc_lists/{dncListId}/phones">)),
    BatchDeleteCampaignDncListPhone: (...args) => callOperation("DELETE /contact_center/outbound_campaign/dnc_lists/{dncListId}/phones", ...(args as ZoomContactCenterFullApiOperationArgs<"DELETE /contact_center/outbound_campaign/dnc_lists/{dncListId}/phones">)),
  };
}
