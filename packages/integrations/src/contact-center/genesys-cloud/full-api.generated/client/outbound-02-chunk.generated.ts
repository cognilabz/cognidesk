// Generated endpoint chunk for GenesysCloudFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  GenesysCloudGeneratedOperationCaller,
  GenesysCloudFullApiOperationArgs,
  GenesysCloudFullApiOperationInput,
  GenesysCloudFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { GenesysCloudFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const GenesysCloudFullApiOutbound02OperationKeys = [
  "getOutboundImporttemplate",
  "getOutboundImporttemplateImportstatus",
  "getOutboundImporttemplates",
  "getOutboundMessagingcampaign",
  "getOutboundMessagingcampaignDiagnostics",
  "getOutboundMessagingcampaignProgress",
  "getOutboundMessagingcampaigns",
  "getOutboundMessagingcampaignsDivisionview",
  "getOutboundMessagingcampaignsDivisionviews",
  "getOutboundRuleset",
  "getOutboundRulesets",
  "getOutboundSchedulesCampaign",
  "getOutboundSchedulesCampaigns",
  "getOutboundSchedulesEmailcampaign",
  "getOutboundSchedulesEmailcampaigns",
  "getOutboundSchedulesMessagingcampaign",
  "getOutboundSchedulesMessagingcampaigns",
  "getOutboundSchedulesSequence",
  "getOutboundSchedulesSequences",
  "getOutboundSchedulesWhatsappcampaign",
  "getOutboundSchedulesWhatsappcampaigns",
  "getOutboundSequence",
  "getOutboundSequences",
  "getOutboundSettings",
  "getOutboundWrapupcodemappings",
  "patchOutboundCampaign",
  "patchOutboundDnclistCustomexclusioncolumns",
  "patchOutboundDnclistEmailaddresses",
  "patchOutboundDnclistPhonenumbers",
  "patchOutboundDnclistWhatsappnumbers",
  "patchOutboundSettings",
  "postOutboundAttemptlimits",
  "postOutboundCallabletimesets",
  "postOutboundCallanalysisresponsesets",
  "postOutboundCampaignAgentownedmappingpreview",
  "postOutboundCampaignCallbackSchedule",
  "postOutboundCampaignrules",
  "postOutboundCampaigns",
  "postOutboundCampaignsPerformanceQuery",
  "postOutboundCampaignsProgress",
  "postOutboundCampaignStart",
  "postOutboundCampaignStop",
  "postOutboundContactlistClear",
  "postOutboundContactlistContacts",
  "postOutboundContactlistContactsBulk",
  "postOutboundContactlistContactsBulkRemove",
  "postOutboundContactlistContactsBulkUpdate",
  "postOutboundContactlistContactsSearch",
  "postOutboundContactlistExport",
  "postOutboundContactlistfilters",
  "postOutboundContactlistfiltersBulkRetrieve",
  "postOutboundContactlistfiltersPreview",
  "postOutboundContactlists",
  "postOutboundContactlistsUploads",
  "postOutboundContactlisttemplates",
  "postOutboundContactlisttemplatesBulkAdd",
  "postOutboundContactlisttemplatesBulkRetrieve",
  "postOutboundConversationDnc",
  "postOutboundDigitalrulesets",
  "postOutboundDnclistEmailaddresses",
  "postOutboundDnclistExport",
  "postOutboundDnclistPhonenumbers",
  "postOutboundDnclists",
  "postOutboundDnclistsUploads",
  "postOutboundFilespecificationtemplates",
  "postOutboundImporttemplates",
  "postOutboundImporttemplatesBulkAdd",
  "postOutboundMessagingcampaigns",
  "postOutboundMessagingcampaignsProgress",
  "postOutboundMessagingcampaignStart",
  "postOutboundMessagingcampaignStop",
  "postOutboundRulesets",
  "postOutboundSequences",
  "putOutboundAttemptlimit",
  "putOutboundCallabletimeset",
  "putOutboundCallanalysisresponseset",
  "putOutboundCampaign",
  "putOutboundCampaignAgent",
  "putOutboundCampaignrule",
  "putOutboundContactlist"
] as const;
export type GenesysCloudFullApiOutbound02OperationKey = typeof GenesysCloudFullApiOutbound02OperationKeys[number];
// End hardened literal operation keys.

export interface GenesysCloudFullApiOutbound02OperationPathParamMap {
  "getOutboundImporttemplate": { "importTemplateId": GenesysCloudFullApiPathParamValue };
  "getOutboundImporttemplateImportstatus": { "importTemplateId": GenesysCloudFullApiPathParamValue };
  "getOutboundImporttemplates": {};
  "getOutboundMessagingcampaign": { "messagingCampaignId": GenesysCloudFullApiPathParamValue };
  "getOutboundMessagingcampaignDiagnostics": { "messagingCampaignId": GenesysCloudFullApiPathParamValue };
  "getOutboundMessagingcampaignProgress": { "messagingCampaignId": GenesysCloudFullApiPathParamValue };
  "getOutboundMessagingcampaigns": {};
  "getOutboundMessagingcampaignsDivisionview": { "messagingCampaignId": GenesysCloudFullApiPathParamValue };
  "getOutboundMessagingcampaignsDivisionviews": {};
  "getOutboundRuleset": { "ruleSetId": GenesysCloudFullApiPathParamValue };
  "getOutboundRulesets": {};
  "getOutboundSchedulesCampaign": { "campaignId": GenesysCloudFullApiPathParamValue };
  "getOutboundSchedulesCampaigns": {};
  "getOutboundSchedulesEmailcampaign": { "emailCampaignId": GenesysCloudFullApiPathParamValue };
  "getOutboundSchedulesEmailcampaigns": {};
  "getOutboundSchedulesMessagingcampaign": { "messagingCampaignId": GenesysCloudFullApiPathParamValue };
  "getOutboundSchedulesMessagingcampaigns": {};
  "getOutboundSchedulesSequence": { "sequenceId": GenesysCloudFullApiPathParamValue };
  "getOutboundSchedulesSequences": {};
  "getOutboundSchedulesWhatsappcampaign": { "whatsAppCampaignId": GenesysCloudFullApiPathParamValue };
  "getOutboundSchedulesWhatsappcampaigns": {};
  "getOutboundSequence": { "sequenceId": GenesysCloudFullApiPathParamValue };
  "getOutboundSequences": {};
  "getOutboundSettings": {};
  "getOutboundWrapupcodemappings": {};
  "patchOutboundCampaign": { "campaignId": GenesysCloudFullApiPathParamValue };
  "patchOutboundDnclistCustomexclusioncolumns": { "dncListId": GenesysCloudFullApiPathParamValue };
  "patchOutboundDnclistEmailaddresses": { "dncListId": GenesysCloudFullApiPathParamValue };
  "patchOutboundDnclistPhonenumbers": { "dncListId": GenesysCloudFullApiPathParamValue };
  "patchOutboundDnclistWhatsappnumbers": { "dncListId": GenesysCloudFullApiPathParamValue };
  "patchOutboundSettings": {};
  "postOutboundAttemptlimits": {};
  "postOutboundCallabletimesets": {};
  "postOutboundCallanalysisresponsesets": {};
  "postOutboundCampaignAgentownedmappingpreview": { "campaignId": GenesysCloudFullApiPathParamValue };
  "postOutboundCampaignCallbackSchedule": { "campaignId": GenesysCloudFullApiPathParamValue };
  "postOutboundCampaignrules": {};
  "postOutboundCampaigns": {};
  "postOutboundCampaignsPerformanceQuery": {};
  "postOutboundCampaignsProgress": {};
  "postOutboundCampaignStart": { "campaignId": GenesysCloudFullApiPathParamValue };
  "postOutboundCampaignStop": { "campaignId": GenesysCloudFullApiPathParamValue };
  "postOutboundContactlistClear": { "contactListId": GenesysCloudFullApiPathParamValue };
  "postOutboundContactlistContacts": { "contactListId": GenesysCloudFullApiPathParamValue };
  "postOutboundContactlistContactsBulk": { "contactListId": GenesysCloudFullApiPathParamValue };
  "postOutboundContactlistContactsBulkRemove": { "contactListId": GenesysCloudFullApiPathParamValue };
  "postOutboundContactlistContactsBulkUpdate": { "contactListId": GenesysCloudFullApiPathParamValue };
  "postOutboundContactlistContactsSearch": { "contactListId": GenesysCloudFullApiPathParamValue };
  "postOutboundContactlistExport": { "contactListId": GenesysCloudFullApiPathParamValue };
  "postOutboundContactlistfilters": {};
  "postOutboundContactlistfiltersBulkRetrieve": {};
  "postOutboundContactlistfiltersPreview": {};
  "postOutboundContactlists": {};
  "postOutboundContactlistsUploads": {};
  "postOutboundContactlisttemplates": {};
  "postOutboundContactlisttemplatesBulkAdd": {};
  "postOutboundContactlisttemplatesBulkRetrieve": {};
  "postOutboundConversationDnc": { "conversationId": GenesysCloudFullApiPathParamValue };
  "postOutboundDigitalrulesets": {};
  "postOutboundDnclistEmailaddresses": { "dncListId": GenesysCloudFullApiPathParamValue };
  "postOutboundDnclistExport": { "dncListId": GenesysCloudFullApiPathParamValue };
  "postOutboundDnclistPhonenumbers": { "dncListId": GenesysCloudFullApiPathParamValue };
  "postOutboundDnclists": {};
  "postOutboundDnclistsUploads": {};
  "postOutboundFilespecificationtemplates": {};
  "postOutboundImporttemplates": {};
  "postOutboundImporttemplatesBulkAdd": {};
  "postOutboundMessagingcampaigns": {};
  "postOutboundMessagingcampaignsProgress": {};
  "postOutboundMessagingcampaignStart": { "messagingCampaignId": GenesysCloudFullApiPathParamValue };
  "postOutboundMessagingcampaignStop": { "messagingCampaignId": GenesysCloudFullApiPathParamValue };
  "postOutboundRulesets": {};
  "postOutboundSequences": {};
  "putOutboundAttemptlimit": { "attemptLimitsId": GenesysCloudFullApiPathParamValue };
  "putOutboundCallabletimeset": { "callableTimeSetId": GenesysCloudFullApiPathParamValue };
  "putOutboundCallanalysisresponseset": { "callAnalysisSetId": GenesysCloudFullApiPathParamValue };
  "putOutboundCampaign": { "campaignId": GenesysCloudFullApiPathParamValue };
  "putOutboundCampaignAgent": { "campaignId": GenesysCloudFullApiPathParamValue; "userId": GenesysCloudFullApiPathParamValue };
  "putOutboundCampaignrule": { "campaignRuleId": GenesysCloudFullApiPathParamValue };
  "putOutboundContactlist": { "contactListId": GenesysCloudFullApiPathParamValue };
}

export interface GenesysCloudFullApiOutbound02OperationRequestMap {
  "getOutboundImporttemplate": GenesysCloudFullApiOperationInput<"getOutboundImporttemplate">;
  "getOutboundImporttemplateImportstatus": GenesysCloudFullApiOperationInput<"getOutboundImporttemplateImportstatus">;
  "getOutboundImporttemplates": GenesysCloudFullApiOperationInput<"getOutboundImporttemplates">;
  "getOutboundMessagingcampaign": GenesysCloudFullApiOperationInput<"getOutboundMessagingcampaign">;
  "getOutboundMessagingcampaignDiagnostics": GenesysCloudFullApiOperationInput<"getOutboundMessagingcampaignDiagnostics">;
  "getOutboundMessagingcampaignProgress": GenesysCloudFullApiOperationInput<"getOutboundMessagingcampaignProgress">;
  "getOutboundMessagingcampaigns": GenesysCloudFullApiOperationInput<"getOutboundMessagingcampaigns">;
  "getOutboundMessagingcampaignsDivisionview": GenesysCloudFullApiOperationInput<"getOutboundMessagingcampaignsDivisionview">;
  "getOutboundMessagingcampaignsDivisionviews": GenesysCloudFullApiOperationInput<"getOutboundMessagingcampaignsDivisionviews">;
  "getOutboundRuleset": GenesysCloudFullApiOperationInput<"getOutboundRuleset">;
  "getOutboundRulesets": GenesysCloudFullApiOperationInput<"getOutboundRulesets">;
  "getOutboundSchedulesCampaign": GenesysCloudFullApiOperationInput<"getOutboundSchedulesCampaign">;
  "getOutboundSchedulesCampaigns": GenesysCloudFullApiOperationInput<"getOutboundSchedulesCampaigns">;
  "getOutboundSchedulesEmailcampaign": GenesysCloudFullApiOperationInput<"getOutboundSchedulesEmailcampaign">;
  "getOutboundSchedulesEmailcampaigns": GenesysCloudFullApiOperationInput<"getOutboundSchedulesEmailcampaigns">;
  "getOutboundSchedulesMessagingcampaign": GenesysCloudFullApiOperationInput<"getOutboundSchedulesMessagingcampaign">;
  "getOutboundSchedulesMessagingcampaigns": GenesysCloudFullApiOperationInput<"getOutboundSchedulesMessagingcampaigns">;
  "getOutboundSchedulesSequence": GenesysCloudFullApiOperationInput<"getOutboundSchedulesSequence">;
  "getOutboundSchedulesSequences": GenesysCloudFullApiOperationInput<"getOutboundSchedulesSequences">;
  "getOutboundSchedulesWhatsappcampaign": GenesysCloudFullApiOperationInput<"getOutboundSchedulesWhatsappcampaign">;
  "getOutboundSchedulesWhatsappcampaigns": GenesysCloudFullApiOperationInput<"getOutboundSchedulesWhatsappcampaigns">;
  "getOutboundSequence": GenesysCloudFullApiOperationInput<"getOutboundSequence">;
  "getOutboundSequences": GenesysCloudFullApiOperationInput<"getOutboundSequences">;
  "getOutboundSettings": GenesysCloudFullApiOperationInput<"getOutboundSettings">;
  "getOutboundWrapupcodemappings": GenesysCloudFullApiOperationInput<"getOutboundWrapupcodemappings">;
  "patchOutboundCampaign": GenesysCloudFullApiOperationInput<"patchOutboundCampaign">;
  "patchOutboundDnclistCustomexclusioncolumns": GenesysCloudFullApiOperationInput<"patchOutboundDnclistCustomexclusioncolumns">;
  "patchOutboundDnclistEmailaddresses": GenesysCloudFullApiOperationInput<"patchOutboundDnclistEmailaddresses">;
  "patchOutboundDnclistPhonenumbers": GenesysCloudFullApiOperationInput<"patchOutboundDnclistPhonenumbers">;
  "patchOutboundDnclistWhatsappnumbers": GenesysCloudFullApiOperationInput<"patchOutboundDnclistWhatsappnumbers">;
  "patchOutboundSettings": GenesysCloudFullApiOperationInput<"patchOutboundSettings">;
  "postOutboundAttemptlimits": GenesysCloudFullApiOperationInput<"postOutboundAttemptlimits">;
  "postOutboundCallabletimesets": GenesysCloudFullApiOperationInput<"postOutboundCallabletimesets">;
  "postOutboundCallanalysisresponsesets": GenesysCloudFullApiOperationInput<"postOutboundCallanalysisresponsesets">;
  "postOutboundCampaignAgentownedmappingpreview": GenesysCloudFullApiOperationInput<"postOutboundCampaignAgentownedmappingpreview">;
  "postOutboundCampaignCallbackSchedule": GenesysCloudFullApiOperationInput<"postOutboundCampaignCallbackSchedule">;
  "postOutboundCampaignrules": GenesysCloudFullApiOperationInput<"postOutboundCampaignrules">;
  "postOutboundCampaigns": GenesysCloudFullApiOperationInput<"postOutboundCampaigns">;
  "postOutboundCampaignsPerformanceQuery": GenesysCloudFullApiOperationInput<"postOutboundCampaignsPerformanceQuery">;
  "postOutboundCampaignsProgress": GenesysCloudFullApiOperationInput<"postOutboundCampaignsProgress">;
  "postOutboundCampaignStart": GenesysCloudFullApiOperationInput<"postOutboundCampaignStart">;
  "postOutboundCampaignStop": GenesysCloudFullApiOperationInput<"postOutboundCampaignStop">;
  "postOutboundContactlistClear": GenesysCloudFullApiOperationInput<"postOutboundContactlistClear">;
  "postOutboundContactlistContacts": GenesysCloudFullApiOperationInput<"postOutboundContactlistContacts">;
  "postOutboundContactlistContactsBulk": GenesysCloudFullApiOperationInput<"postOutboundContactlistContactsBulk">;
  "postOutboundContactlistContactsBulkRemove": GenesysCloudFullApiOperationInput<"postOutboundContactlistContactsBulkRemove">;
  "postOutboundContactlistContactsBulkUpdate": GenesysCloudFullApiOperationInput<"postOutboundContactlistContactsBulkUpdate">;
  "postOutboundContactlistContactsSearch": GenesysCloudFullApiOperationInput<"postOutboundContactlistContactsSearch">;
  "postOutboundContactlistExport": GenesysCloudFullApiOperationInput<"postOutboundContactlistExport">;
  "postOutboundContactlistfilters": GenesysCloudFullApiOperationInput<"postOutboundContactlistfilters">;
  "postOutboundContactlistfiltersBulkRetrieve": GenesysCloudFullApiOperationInput<"postOutboundContactlistfiltersBulkRetrieve">;
  "postOutboundContactlistfiltersPreview": GenesysCloudFullApiOperationInput<"postOutboundContactlistfiltersPreview">;
  "postOutboundContactlists": GenesysCloudFullApiOperationInput<"postOutboundContactlists">;
  "postOutboundContactlistsUploads": GenesysCloudFullApiOperationInput<"postOutboundContactlistsUploads">;
  "postOutboundContactlisttemplates": GenesysCloudFullApiOperationInput<"postOutboundContactlisttemplates">;
  "postOutboundContactlisttemplatesBulkAdd": GenesysCloudFullApiOperationInput<"postOutboundContactlisttemplatesBulkAdd">;
  "postOutboundContactlisttemplatesBulkRetrieve": GenesysCloudFullApiOperationInput<"postOutboundContactlisttemplatesBulkRetrieve">;
  "postOutboundConversationDnc": GenesysCloudFullApiOperationInput<"postOutboundConversationDnc">;
  "postOutboundDigitalrulesets": GenesysCloudFullApiOperationInput<"postOutboundDigitalrulesets">;
  "postOutboundDnclistEmailaddresses": GenesysCloudFullApiOperationInput<"postOutboundDnclistEmailaddresses">;
  "postOutboundDnclistExport": GenesysCloudFullApiOperationInput<"postOutboundDnclistExport">;
  "postOutboundDnclistPhonenumbers": GenesysCloudFullApiOperationInput<"postOutboundDnclistPhonenumbers">;
  "postOutboundDnclists": GenesysCloudFullApiOperationInput<"postOutboundDnclists">;
  "postOutboundDnclistsUploads": GenesysCloudFullApiOperationInput<"postOutboundDnclistsUploads">;
  "postOutboundFilespecificationtemplates": GenesysCloudFullApiOperationInput<"postOutboundFilespecificationtemplates">;
  "postOutboundImporttemplates": GenesysCloudFullApiOperationInput<"postOutboundImporttemplates">;
  "postOutboundImporttemplatesBulkAdd": GenesysCloudFullApiOperationInput<"postOutboundImporttemplatesBulkAdd">;
  "postOutboundMessagingcampaigns": GenesysCloudFullApiOperationInput<"postOutboundMessagingcampaigns">;
  "postOutboundMessagingcampaignsProgress": GenesysCloudFullApiOperationInput<"postOutboundMessagingcampaignsProgress">;
  "postOutboundMessagingcampaignStart": GenesysCloudFullApiOperationInput<"postOutboundMessagingcampaignStart">;
  "postOutboundMessagingcampaignStop": GenesysCloudFullApiOperationInput<"postOutboundMessagingcampaignStop">;
  "postOutboundRulesets": GenesysCloudFullApiOperationInput<"postOutboundRulesets">;
  "postOutboundSequences": GenesysCloudFullApiOperationInput<"postOutboundSequences">;
  "putOutboundAttemptlimit": GenesysCloudFullApiOperationInput<"putOutboundAttemptlimit">;
  "putOutboundCallabletimeset": GenesysCloudFullApiOperationInput<"putOutboundCallabletimeset">;
  "putOutboundCallanalysisresponseset": GenesysCloudFullApiOperationInput<"putOutboundCallanalysisresponseset">;
  "putOutboundCampaign": GenesysCloudFullApiOperationInput<"putOutboundCampaign">;
  "putOutboundCampaignAgent": GenesysCloudFullApiOperationInput<"putOutboundCampaignAgent">;
  "putOutboundCampaignrule": GenesysCloudFullApiOperationInput<"putOutboundCampaignrule">;
  "putOutboundContactlist": GenesysCloudFullApiOperationInput<"putOutboundContactlist">;
}

export interface GenesysCloudFullApiOutbound02GeneratedClient {
  GetOutboundImporttemplate(...args: GenesysCloudFullApiOperationArgs<"getOutboundImporttemplate">): Promise<GenesysCloudFullApiOperationResponseMap["getOutboundImporttemplate"]>;
  GetOutboundImporttemplateImportstatus(...args: GenesysCloudFullApiOperationArgs<"getOutboundImporttemplateImportstatus">): Promise<GenesysCloudFullApiOperationResponseMap["getOutboundImporttemplateImportstatus"]>;
  GetOutboundImporttemplates(...args: GenesysCloudFullApiOperationArgs<"getOutboundImporttemplates">): Promise<GenesysCloudFullApiOperationResponseMap["getOutboundImporttemplates"]>;
  GetOutboundMessagingcampaign(...args: GenesysCloudFullApiOperationArgs<"getOutboundMessagingcampaign">): Promise<GenesysCloudFullApiOperationResponseMap["getOutboundMessagingcampaign"]>;
  GetOutboundMessagingcampaignDiagnostics(...args: GenesysCloudFullApiOperationArgs<"getOutboundMessagingcampaignDiagnostics">): Promise<GenesysCloudFullApiOperationResponseMap["getOutboundMessagingcampaignDiagnostics"]>;
  GetOutboundMessagingcampaignProgress(...args: GenesysCloudFullApiOperationArgs<"getOutboundMessagingcampaignProgress">): Promise<GenesysCloudFullApiOperationResponseMap["getOutboundMessagingcampaignProgress"]>;
  GetOutboundMessagingcampaigns(...args: GenesysCloudFullApiOperationArgs<"getOutboundMessagingcampaigns">): Promise<GenesysCloudFullApiOperationResponseMap["getOutboundMessagingcampaigns"]>;
  GetOutboundMessagingcampaignsDivisionview(...args: GenesysCloudFullApiOperationArgs<"getOutboundMessagingcampaignsDivisionview">): Promise<GenesysCloudFullApiOperationResponseMap["getOutboundMessagingcampaignsDivisionview"]>;
  GetOutboundMessagingcampaignsDivisionviews(...args: GenesysCloudFullApiOperationArgs<"getOutboundMessagingcampaignsDivisionviews">): Promise<GenesysCloudFullApiOperationResponseMap["getOutboundMessagingcampaignsDivisionviews"]>;
  GetOutboundRuleset(...args: GenesysCloudFullApiOperationArgs<"getOutboundRuleset">): Promise<GenesysCloudFullApiOperationResponseMap["getOutboundRuleset"]>;
  GetOutboundRulesets(...args: GenesysCloudFullApiOperationArgs<"getOutboundRulesets">): Promise<GenesysCloudFullApiOperationResponseMap["getOutboundRulesets"]>;
  GetOutboundSchedulesCampaign(...args: GenesysCloudFullApiOperationArgs<"getOutboundSchedulesCampaign">): Promise<GenesysCloudFullApiOperationResponseMap["getOutboundSchedulesCampaign"]>;
  GetOutboundSchedulesCampaigns(...args: GenesysCloudFullApiOperationArgs<"getOutboundSchedulesCampaigns">): Promise<GenesysCloudFullApiOperationResponseMap["getOutboundSchedulesCampaigns"]>;
  GetOutboundSchedulesEmailcampaign(...args: GenesysCloudFullApiOperationArgs<"getOutboundSchedulesEmailcampaign">): Promise<GenesysCloudFullApiOperationResponseMap["getOutboundSchedulesEmailcampaign"]>;
  GetOutboundSchedulesEmailcampaigns(...args: GenesysCloudFullApiOperationArgs<"getOutboundSchedulesEmailcampaigns">): Promise<GenesysCloudFullApiOperationResponseMap["getOutboundSchedulesEmailcampaigns"]>;
  GetOutboundSchedulesMessagingcampaign(...args: GenesysCloudFullApiOperationArgs<"getOutboundSchedulesMessagingcampaign">): Promise<GenesysCloudFullApiOperationResponseMap["getOutboundSchedulesMessagingcampaign"]>;
  GetOutboundSchedulesMessagingcampaigns(...args: GenesysCloudFullApiOperationArgs<"getOutboundSchedulesMessagingcampaigns">): Promise<GenesysCloudFullApiOperationResponseMap["getOutboundSchedulesMessagingcampaigns"]>;
  GetOutboundSchedulesSequence(...args: GenesysCloudFullApiOperationArgs<"getOutboundSchedulesSequence">): Promise<GenesysCloudFullApiOperationResponseMap["getOutboundSchedulesSequence"]>;
  GetOutboundSchedulesSequences(...args: GenesysCloudFullApiOperationArgs<"getOutboundSchedulesSequences">): Promise<GenesysCloudFullApiOperationResponseMap["getOutboundSchedulesSequences"]>;
  GetOutboundSchedulesWhatsappcampaign(...args: GenesysCloudFullApiOperationArgs<"getOutboundSchedulesWhatsappcampaign">): Promise<GenesysCloudFullApiOperationResponseMap["getOutboundSchedulesWhatsappcampaign"]>;
  GetOutboundSchedulesWhatsappcampaigns(...args: GenesysCloudFullApiOperationArgs<"getOutboundSchedulesWhatsappcampaigns">): Promise<GenesysCloudFullApiOperationResponseMap["getOutboundSchedulesWhatsappcampaigns"]>;
  GetOutboundSequence(...args: GenesysCloudFullApiOperationArgs<"getOutboundSequence">): Promise<GenesysCloudFullApiOperationResponseMap["getOutboundSequence"]>;
  GetOutboundSequences(...args: GenesysCloudFullApiOperationArgs<"getOutboundSequences">): Promise<GenesysCloudFullApiOperationResponseMap["getOutboundSequences"]>;
  GetOutboundSettings(...args: GenesysCloudFullApiOperationArgs<"getOutboundSettings">): Promise<GenesysCloudFullApiOperationResponseMap["getOutboundSettings"]>;
  GetOutboundWrapupcodemappings(...args: GenesysCloudFullApiOperationArgs<"getOutboundWrapupcodemappings">): Promise<GenesysCloudFullApiOperationResponseMap["getOutboundWrapupcodemappings"]>;
  PatchOutboundCampaign(...args: GenesysCloudFullApiOperationArgs<"patchOutboundCampaign">): Promise<GenesysCloudFullApiOperationResponseMap["patchOutboundCampaign"]>;
  PatchOutboundDnclistCustomexclusioncolumns(...args: GenesysCloudFullApiOperationArgs<"patchOutboundDnclistCustomexclusioncolumns">): Promise<GenesysCloudFullApiOperationResponseMap["patchOutboundDnclistCustomexclusioncolumns"]>;
  PatchOutboundDnclistEmailaddresses(...args: GenesysCloudFullApiOperationArgs<"patchOutboundDnclistEmailaddresses">): Promise<GenesysCloudFullApiOperationResponseMap["patchOutboundDnclistEmailaddresses"]>;
  PatchOutboundDnclistPhonenumbers(...args: GenesysCloudFullApiOperationArgs<"patchOutboundDnclistPhonenumbers">): Promise<GenesysCloudFullApiOperationResponseMap["patchOutboundDnclistPhonenumbers"]>;
  PatchOutboundDnclistWhatsappnumbers(...args: GenesysCloudFullApiOperationArgs<"patchOutboundDnclistWhatsappnumbers">): Promise<GenesysCloudFullApiOperationResponseMap["patchOutboundDnclistWhatsappnumbers"]>;
  PatchOutboundSettings(...args: GenesysCloudFullApiOperationArgs<"patchOutboundSettings">): Promise<GenesysCloudFullApiOperationResponseMap["patchOutboundSettings"]>;
  PostOutboundAttemptlimits(...args: GenesysCloudFullApiOperationArgs<"postOutboundAttemptlimits">): Promise<GenesysCloudFullApiOperationResponseMap["postOutboundAttemptlimits"]>;
  PostOutboundCallabletimesets(...args: GenesysCloudFullApiOperationArgs<"postOutboundCallabletimesets">): Promise<GenesysCloudFullApiOperationResponseMap["postOutboundCallabletimesets"]>;
  PostOutboundCallanalysisresponsesets(...args: GenesysCloudFullApiOperationArgs<"postOutboundCallanalysisresponsesets">): Promise<GenesysCloudFullApiOperationResponseMap["postOutboundCallanalysisresponsesets"]>;
  PostOutboundCampaignAgentownedmappingpreview(...args: GenesysCloudFullApiOperationArgs<"postOutboundCampaignAgentownedmappingpreview">): Promise<GenesysCloudFullApiOperationResponseMap["postOutboundCampaignAgentownedmappingpreview"]>;
  PostOutboundCampaignCallbackSchedule(...args: GenesysCloudFullApiOperationArgs<"postOutboundCampaignCallbackSchedule">): Promise<GenesysCloudFullApiOperationResponseMap["postOutboundCampaignCallbackSchedule"]>;
  PostOutboundCampaignrules(...args: GenesysCloudFullApiOperationArgs<"postOutboundCampaignrules">): Promise<GenesysCloudFullApiOperationResponseMap["postOutboundCampaignrules"]>;
  PostOutboundCampaigns(...args: GenesysCloudFullApiOperationArgs<"postOutboundCampaigns">): Promise<GenesysCloudFullApiOperationResponseMap["postOutboundCampaigns"]>;
  PostOutboundCampaignsPerformanceQuery(...args: GenesysCloudFullApiOperationArgs<"postOutboundCampaignsPerformanceQuery">): Promise<GenesysCloudFullApiOperationResponseMap["postOutboundCampaignsPerformanceQuery"]>;
  PostOutboundCampaignsProgress(...args: GenesysCloudFullApiOperationArgs<"postOutboundCampaignsProgress">): Promise<GenesysCloudFullApiOperationResponseMap["postOutboundCampaignsProgress"]>;
  PostOutboundCampaignStart(...args: GenesysCloudFullApiOperationArgs<"postOutboundCampaignStart">): Promise<GenesysCloudFullApiOperationResponseMap["postOutboundCampaignStart"]>;
  PostOutboundCampaignStop(...args: GenesysCloudFullApiOperationArgs<"postOutboundCampaignStop">): Promise<GenesysCloudFullApiOperationResponseMap["postOutboundCampaignStop"]>;
  PostOutboundContactlistClear(...args: GenesysCloudFullApiOperationArgs<"postOutboundContactlistClear">): Promise<GenesysCloudFullApiOperationResponseMap["postOutboundContactlistClear"]>;
  PostOutboundContactlistContacts(...args: GenesysCloudFullApiOperationArgs<"postOutboundContactlistContacts">): Promise<GenesysCloudFullApiOperationResponseMap["postOutboundContactlistContacts"]>;
  PostOutboundContactlistContactsBulk(...args: GenesysCloudFullApiOperationArgs<"postOutboundContactlistContactsBulk">): Promise<GenesysCloudFullApiOperationResponseMap["postOutboundContactlistContactsBulk"]>;
  PostOutboundContactlistContactsBulkRemove(...args: GenesysCloudFullApiOperationArgs<"postOutboundContactlistContactsBulkRemove">): Promise<GenesysCloudFullApiOperationResponseMap["postOutboundContactlistContactsBulkRemove"]>;
  PostOutboundContactlistContactsBulkUpdate(...args: GenesysCloudFullApiOperationArgs<"postOutboundContactlistContactsBulkUpdate">): Promise<GenesysCloudFullApiOperationResponseMap["postOutboundContactlistContactsBulkUpdate"]>;
  PostOutboundContactlistContactsSearch(...args: GenesysCloudFullApiOperationArgs<"postOutboundContactlistContactsSearch">): Promise<GenesysCloudFullApiOperationResponseMap["postOutboundContactlistContactsSearch"]>;
  PostOutboundContactlistExport(...args: GenesysCloudFullApiOperationArgs<"postOutboundContactlistExport">): Promise<GenesysCloudFullApiOperationResponseMap["postOutboundContactlistExport"]>;
  PostOutboundContactlistfilters(...args: GenesysCloudFullApiOperationArgs<"postOutboundContactlistfilters">): Promise<GenesysCloudFullApiOperationResponseMap["postOutboundContactlistfilters"]>;
  PostOutboundContactlistfiltersBulkRetrieve(...args: GenesysCloudFullApiOperationArgs<"postOutboundContactlistfiltersBulkRetrieve">): Promise<GenesysCloudFullApiOperationResponseMap["postOutboundContactlistfiltersBulkRetrieve"]>;
  PostOutboundContactlistfiltersPreview(...args: GenesysCloudFullApiOperationArgs<"postOutboundContactlistfiltersPreview">): Promise<GenesysCloudFullApiOperationResponseMap["postOutboundContactlistfiltersPreview"]>;
  PostOutboundContactlists(...args: GenesysCloudFullApiOperationArgs<"postOutboundContactlists">): Promise<GenesysCloudFullApiOperationResponseMap["postOutboundContactlists"]>;
  PostOutboundContactlistsUploads(...args: GenesysCloudFullApiOperationArgs<"postOutboundContactlistsUploads">): Promise<GenesysCloudFullApiOperationResponseMap["postOutboundContactlistsUploads"]>;
  PostOutboundContactlisttemplates(...args: GenesysCloudFullApiOperationArgs<"postOutboundContactlisttemplates">): Promise<GenesysCloudFullApiOperationResponseMap["postOutboundContactlisttemplates"]>;
  PostOutboundContactlisttemplatesBulkAdd(...args: GenesysCloudFullApiOperationArgs<"postOutboundContactlisttemplatesBulkAdd">): Promise<GenesysCloudFullApiOperationResponseMap["postOutboundContactlisttemplatesBulkAdd"]>;
  PostOutboundContactlisttemplatesBulkRetrieve(...args: GenesysCloudFullApiOperationArgs<"postOutboundContactlisttemplatesBulkRetrieve">): Promise<GenesysCloudFullApiOperationResponseMap["postOutboundContactlisttemplatesBulkRetrieve"]>;
  PostOutboundConversationDnc(...args: GenesysCloudFullApiOperationArgs<"postOutboundConversationDnc">): Promise<GenesysCloudFullApiOperationResponseMap["postOutboundConversationDnc"]>;
  PostOutboundDigitalrulesets(...args: GenesysCloudFullApiOperationArgs<"postOutboundDigitalrulesets">): Promise<GenesysCloudFullApiOperationResponseMap["postOutboundDigitalrulesets"]>;
  PostOutboundDnclistEmailaddresses(...args: GenesysCloudFullApiOperationArgs<"postOutboundDnclistEmailaddresses">): Promise<GenesysCloudFullApiOperationResponseMap["postOutboundDnclistEmailaddresses"]>;
  PostOutboundDnclistExport(...args: GenesysCloudFullApiOperationArgs<"postOutboundDnclistExport">): Promise<GenesysCloudFullApiOperationResponseMap["postOutboundDnclistExport"]>;
  PostOutboundDnclistPhonenumbers(...args: GenesysCloudFullApiOperationArgs<"postOutboundDnclistPhonenumbers">): Promise<GenesysCloudFullApiOperationResponseMap["postOutboundDnclistPhonenumbers"]>;
  PostOutboundDnclists(...args: GenesysCloudFullApiOperationArgs<"postOutboundDnclists">): Promise<GenesysCloudFullApiOperationResponseMap["postOutboundDnclists"]>;
  PostOutboundDnclistsUploads(...args: GenesysCloudFullApiOperationArgs<"postOutboundDnclistsUploads">): Promise<GenesysCloudFullApiOperationResponseMap["postOutboundDnclistsUploads"]>;
  PostOutboundFilespecificationtemplates(...args: GenesysCloudFullApiOperationArgs<"postOutboundFilespecificationtemplates">): Promise<GenesysCloudFullApiOperationResponseMap["postOutboundFilespecificationtemplates"]>;
  PostOutboundImporttemplates(...args: GenesysCloudFullApiOperationArgs<"postOutboundImporttemplates">): Promise<GenesysCloudFullApiOperationResponseMap["postOutboundImporttemplates"]>;
  PostOutboundImporttemplatesBulkAdd(...args: GenesysCloudFullApiOperationArgs<"postOutboundImporttemplatesBulkAdd">): Promise<GenesysCloudFullApiOperationResponseMap["postOutboundImporttemplatesBulkAdd"]>;
  PostOutboundMessagingcampaigns(...args: GenesysCloudFullApiOperationArgs<"postOutboundMessagingcampaigns">): Promise<GenesysCloudFullApiOperationResponseMap["postOutboundMessagingcampaigns"]>;
  PostOutboundMessagingcampaignsProgress(...args: GenesysCloudFullApiOperationArgs<"postOutboundMessagingcampaignsProgress">): Promise<GenesysCloudFullApiOperationResponseMap["postOutboundMessagingcampaignsProgress"]>;
  PostOutboundMessagingcampaignStart(...args: GenesysCloudFullApiOperationArgs<"postOutboundMessagingcampaignStart">): Promise<GenesysCloudFullApiOperationResponseMap["postOutboundMessagingcampaignStart"]>;
  PostOutboundMessagingcampaignStop(...args: GenesysCloudFullApiOperationArgs<"postOutboundMessagingcampaignStop">): Promise<GenesysCloudFullApiOperationResponseMap["postOutboundMessagingcampaignStop"]>;
  PostOutboundRulesets(...args: GenesysCloudFullApiOperationArgs<"postOutboundRulesets">): Promise<GenesysCloudFullApiOperationResponseMap["postOutboundRulesets"]>;
  PostOutboundSequences(...args: GenesysCloudFullApiOperationArgs<"postOutboundSequences">): Promise<GenesysCloudFullApiOperationResponseMap["postOutboundSequences"]>;
  PutOutboundAttemptlimit(...args: GenesysCloudFullApiOperationArgs<"putOutboundAttemptlimit">): Promise<GenesysCloudFullApiOperationResponseMap["putOutboundAttemptlimit"]>;
  PutOutboundCallabletimeset(...args: GenesysCloudFullApiOperationArgs<"putOutboundCallabletimeset">): Promise<GenesysCloudFullApiOperationResponseMap["putOutboundCallabletimeset"]>;
  PutOutboundCallanalysisresponseset(...args: GenesysCloudFullApiOperationArgs<"putOutboundCallanalysisresponseset">): Promise<GenesysCloudFullApiOperationResponseMap["putOutboundCallanalysisresponseset"]>;
  PutOutboundCampaign(...args: GenesysCloudFullApiOperationArgs<"putOutboundCampaign">): Promise<GenesysCloudFullApiOperationResponseMap["putOutboundCampaign"]>;
  PutOutboundCampaignAgent(...args: GenesysCloudFullApiOperationArgs<"putOutboundCampaignAgent">): Promise<GenesysCloudFullApiOperationResponseMap["putOutboundCampaignAgent"]>;
  PutOutboundCampaignrule(...args: GenesysCloudFullApiOperationArgs<"putOutboundCampaignrule">): Promise<GenesysCloudFullApiOperationResponseMap["putOutboundCampaignrule"]>;
  PutOutboundContactlist(...args: GenesysCloudFullApiOperationArgs<"putOutboundContactlist">): Promise<GenesysCloudFullApiOperationResponseMap["putOutboundContactlist"]>;
}

export const GenesysCloudFullApiOutbound02GeneratedFunctionNames = [
  "GetOutboundImporttemplate",
  "GetOutboundImporttemplateImportstatus",
  "GetOutboundImporttemplates",
  "GetOutboundMessagingcampaign",
  "GetOutboundMessagingcampaignDiagnostics",
  "GetOutboundMessagingcampaignProgress",
  "GetOutboundMessagingcampaigns",
  "GetOutboundMessagingcampaignsDivisionview",
  "GetOutboundMessagingcampaignsDivisionviews",
  "GetOutboundRuleset",
  "GetOutboundRulesets",
  "GetOutboundSchedulesCampaign",
  "GetOutboundSchedulesCampaigns",
  "GetOutboundSchedulesEmailcampaign",
  "GetOutboundSchedulesEmailcampaigns",
  "GetOutboundSchedulesMessagingcampaign",
  "GetOutboundSchedulesMessagingcampaigns",
  "GetOutboundSchedulesSequence",
  "GetOutboundSchedulesSequences",
  "GetOutboundSchedulesWhatsappcampaign",
  "GetOutboundSchedulesWhatsappcampaigns",
  "GetOutboundSequence",
  "GetOutboundSequences",
  "GetOutboundSettings",
  "GetOutboundWrapupcodemappings",
  "PatchOutboundCampaign",
  "PatchOutboundDnclistCustomexclusioncolumns",
  "PatchOutboundDnclistEmailaddresses",
  "PatchOutboundDnclistPhonenumbers",
  "PatchOutboundDnclistWhatsappnumbers",
  "PatchOutboundSettings",
  "PostOutboundAttemptlimits",
  "PostOutboundCallabletimesets",
  "PostOutboundCallanalysisresponsesets",
  "PostOutboundCampaignAgentownedmappingpreview",
  "PostOutboundCampaignCallbackSchedule",
  "PostOutboundCampaignrules",
  "PostOutboundCampaigns",
  "PostOutboundCampaignsPerformanceQuery",
  "PostOutboundCampaignsProgress",
  "PostOutboundCampaignStart",
  "PostOutboundCampaignStop",
  "PostOutboundContactlistClear",
  "PostOutboundContactlistContacts",
  "PostOutboundContactlistContactsBulk",
  "PostOutboundContactlistContactsBulkRemove",
  "PostOutboundContactlistContactsBulkUpdate",
  "PostOutboundContactlistContactsSearch",
  "PostOutboundContactlistExport",
  "PostOutboundContactlistfilters",
  "PostOutboundContactlistfiltersBulkRetrieve",
  "PostOutboundContactlistfiltersPreview",
  "PostOutboundContactlists",
  "PostOutboundContactlistsUploads",
  "PostOutboundContactlisttemplates",
  "PostOutboundContactlisttemplatesBulkAdd",
  "PostOutboundContactlisttemplatesBulkRetrieve",
  "PostOutboundConversationDnc",
  "PostOutboundDigitalrulesets",
  "PostOutboundDnclistEmailaddresses",
  "PostOutboundDnclistExport",
  "PostOutboundDnclistPhonenumbers",
  "PostOutboundDnclists",
  "PostOutboundDnclistsUploads",
  "PostOutboundFilespecificationtemplates",
  "PostOutboundImporttemplates",
  "PostOutboundImporttemplatesBulkAdd",
  "PostOutboundMessagingcampaigns",
  "PostOutboundMessagingcampaignsProgress",
  "PostOutboundMessagingcampaignStart",
  "PostOutboundMessagingcampaignStop",
  "PostOutboundRulesets",
  "PostOutboundSequences",
  "PutOutboundAttemptlimit",
  "PutOutboundCallabletimeset",
  "PutOutboundCallanalysisresponseset",
  "PutOutboundCampaign",
  "PutOutboundCampaignAgent",
  "PutOutboundCampaignrule",
  "PutOutboundContactlist"
] as const satisfies readonly (keyof GenesysCloudFullApiOutbound02GeneratedClient)[];

export function createGenesysCloudFullApiOutbound02GeneratedClient(
  callOperation: GenesysCloudGeneratedOperationCaller,
): GenesysCloudFullApiOutbound02GeneratedClient {
  return {
    GetOutboundImporttemplate: (...args) => callOperation("getOutboundImporttemplate", ...(args as GenesysCloudFullApiOperationArgs<"getOutboundImporttemplate">)),
    GetOutboundImporttemplateImportstatus: (...args) => callOperation("getOutboundImporttemplateImportstatus", ...(args as GenesysCloudFullApiOperationArgs<"getOutboundImporttemplateImportstatus">)),
    GetOutboundImporttemplates: (...args) => callOperation("getOutboundImporttemplates", ...(args as GenesysCloudFullApiOperationArgs<"getOutboundImporttemplates">)),
    GetOutboundMessagingcampaign: (...args) => callOperation("getOutboundMessagingcampaign", ...(args as GenesysCloudFullApiOperationArgs<"getOutboundMessagingcampaign">)),
    GetOutboundMessagingcampaignDiagnostics: (...args) => callOperation("getOutboundMessagingcampaignDiagnostics", ...(args as GenesysCloudFullApiOperationArgs<"getOutboundMessagingcampaignDiagnostics">)),
    GetOutboundMessagingcampaignProgress: (...args) => callOperation("getOutboundMessagingcampaignProgress", ...(args as GenesysCloudFullApiOperationArgs<"getOutboundMessagingcampaignProgress">)),
    GetOutboundMessagingcampaigns: (...args) => callOperation("getOutboundMessagingcampaigns", ...(args as GenesysCloudFullApiOperationArgs<"getOutboundMessagingcampaigns">)),
    GetOutboundMessagingcampaignsDivisionview: (...args) => callOperation("getOutboundMessagingcampaignsDivisionview", ...(args as GenesysCloudFullApiOperationArgs<"getOutboundMessagingcampaignsDivisionview">)),
    GetOutboundMessagingcampaignsDivisionviews: (...args) => callOperation("getOutboundMessagingcampaignsDivisionviews", ...(args as GenesysCloudFullApiOperationArgs<"getOutboundMessagingcampaignsDivisionviews">)),
    GetOutboundRuleset: (...args) => callOperation("getOutboundRuleset", ...(args as GenesysCloudFullApiOperationArgs<"getOutboundRuleset">)),
    GetOutboundRulesets: (...args) => callOperation("getOutboundRulesets", ...(args as GenesysCloudFullApiOperationArgs<"getOutboundRulesets">)),
    GetOutboundSchedulesCampaign: (...args) => callOperation("getOutboundSchedulesCampaign", ...(args as GenesysCloudFullApiOperationArgs<"getOutboundSchedulesCampaign">)),
    GetOutboundSchedulesCampaigns: (...args) => callOperation("getOutboundSchedulesCampaigns", ...(args as GenesysCloudFullApiOperationArgs<"getOutboundSchedulesCampaigns">)),
    GetOutboundSchedulesEmailcampaign: (...args) => callOperation("getOutboundSchedulesEmailcampaign", ...(args as GenesysCloudFullApiOperationArgs<"getOutboundSchedulesEmailcampaign">)),
    GetOutboundSchedulesEmailcampaigns: (...args) => callOperation("getOutboundSchedulesEmailcampaigns", ...(args as GenesysCloudFullApiOperationArgs<"getOutboundSchedulesEmailcampaigns">)),
    GetOutboundSchedulesMessagingcampaign: (...args) => callOperation("getOutboundSchedulesMessagingcampaign", ...(args as GenesysCloudFullApiOperationArgs<"getOutboundSchedulesMessagingcampaign">)),
    GetOutboundSchedulesMessagingcampaigns: (...args) => callOperation("getOutboundSchedulesMessagingcampaigns", ...(args as GenesysCloudFullApiOperationArgs<"getOutboundSchedulesMessagingcampaigns">)),
    GetOutboundSchedulesSequence: (...args) => callOperation("getOutboundSchedulesSequence", ...(args as GenesysCloudFullApiOperationArgs<"getOutboundSchedulesSequence">)),
    GetOutboundSchedulesSequences: (...args) => callOperation("getOutboundSchedulesSequences", ...(args as GenesysCloudFullApiOperationArgs<"getOutboundSchedulesSequences">)),
    GetOutboundSchedulesWhatsappcampaign: (...args) => callOperation("getOutboundSchedulesWhatsappcampaign", ...(args as GenesysCloudFullApiOperationArgs<"getOutboundSchedulesWhatsappcampaign">)),
    GetOutboundSchedulesWhatsappcampaigns: (...args) => callOperation("getOutboundSchedulesWhatsappcampaigns", ...(args as GenesysCloudFullApiOperationArgs<"getOutboundSchedulesWhatsappcampaigns">)),
    GetOutboundSequence: (...args) => callOperation("getOutboundSequence", ...(args as GenesysCloudFullApiOperationArgs<"getOutboundSequence">)),
    GetOutboundSequences: (...args) => callOperation("getOutboundSequences", ...(args as GenesysCloudFullApiOperationArgs<"getOutboundSequences">)),
    GetOutboundSettings: (...args) => callOperation("getOutboundSettings", ...(args as GenesysCloudFullApiOperationArgs<"getOutboundSettings">)),
    GetOutboundWrapupcodemappings: (...args) => callOperation("getOutboundWrapupcodemappings", ...(args as GenesysCloudFullApiOperationArgs<"getOutboundWrapupcodemappings">)),
    PatchOutboundCampaign: (...args) => callOperation("patchOutboundCampaign", ...(args as GenesysCloudFullApiOperationArgs<"patchOutboundCampaign">)),
    PatchOutboundDnclistCustomexclusioncolumns: (...args) => callOperation("patchOutboundDnclistCustomexclusioncolumns", ...(args as GenesysCloudFullApiOperationArgs<"patchOutboundDnclistCustomexclusioncolumns">)),
    PatchOutboundDnclistEmailaddresses: (...args) => callOperation("patchOutboundDnclistEmailaddresses", ...(args as GenesysCloudFullApiOperationArgs<"patchOutboundDnclistEmailaddresses">)),
    PatchOutboundDnclistPhonenumbers: (...args) => callOperation("patchOutboundDnclistPhonenumbers", ...(args as GenesysCloudFullApiOperationArgs<"patchOutboundDnclistPhonenumbers">)),
    PatchOutboundDnclistWhatsappnumbers: (...args) => callOperation("patchOutboundDnclistWhatsappnumbers", ...(args as GenesysCloudFullApiOperationArgs<"patchOutboundDnclistWhatsappnumbers">)),
    PatchOutboundSettings: (...args) => callOperation("patchOutboundSettings", ...(args as GenesysCloudFullApiOperationArgs<"patchOutboundSettings">)),
    PostOutboundAttemptlimits: (...args) => callOperation("postOutboundAttemptlimits", ...(args as GenesysCloudFullApiOperationArgs<"postOutboundAttemptlimits">)),
    PostOutboundCallabletimesets: (...args) => callOperation("postOutboundCallabletimesets", ...(args as GenesysCloudFullApiOperationArgs<"postOutboundCallabletimesets">)),
    PostOutboundCallanalysisresponsesets: (...args) => callOperation("postOutboundCallanalysisresponsesets", ...(args as GenesysCloudFullApiOperationArgs<"postOutboundCallanalysisresponsesets">)),
    PostOutboundCampaignAgentownedmappingpreview: (...args) => callOperation("postOutboundCampaignAgentownedmappingpreview", ...(args as GenesysCloudFullApiOperationArgs<"postOutboundCampaignAgentownedmappingpreview">)),
    PostOutboundCampaignCallbackSchedule: (...args) => callOperation("postOutboundCampaignCallbackSchedule", ...(args as GenesysCloudFullApiOperationArgs<"postOutboundCampaignCallbackSchedule">)),
    PostOutboundCampaignrules: (...args) => callOperation("postOutboundCampaignrules", ...(args as GenesysCloudFullApiOperationArgs<"postOutboundCampaignrules">)),
    PostOutboundCampaigns: (...args) => callOperation("postOutboundCampaigns", ...(args as GenesysCloudFullApiOperationArgs<"postOutboundCampaigns">)),
    PostOutboundCampaignsPerformanceQuery: (...args) => callOperation("postOutboundCampaignsPerformanceQuery", ...(args as GenesysCloudFullApiOperationArgs<"postOutboundCampaignsPerformanceQuery">)),
    PostOutboundCampaignsProgress: (...args) => callOperation("postOutboundCampaignsProgress", ...(args as GenesysCloudFullApiOperationArgs<"postOutboundCampaignsProgress">)),
    PostOutboundCampaignStart: (...args) => callOperation("postOutboundCampaignStart", ...(args as GenesysCloudFullApiOperationArgs<"postOutboundCampaignStart">)),
    PostOutboundCampaignStop: (...args) => callOperation("postOutboundCampaignStop", ...(args as GenesysCloudFullApiOperationArgs<"postOutboundCampaignStop">)),
    PostOutboundContactlistClear: (...args) => callOperation("postOutboundContactlistClear", ...(args as GenesysCloudFullApiOperationArgs<"postOutboundContactlistClear">)),
    PostOutboundContactlistContacts: (...args) => callOperation("postOutboundContactlistContacts", ...(args as GenesysCloudFullApiOperationArgs<"postOutboundContactlistContacts">)),
    PostOutboundContactlistContactsBulk: (...args) => callOperation("postOutboundContactlistContactsBulk", ...(args as GenesysCloudFullApiOperationArgs<"postOutboundContactlistContactsBulk">)),
    PostOutboundContactlistContactsBulkRemove: (...args) => callOperation("postOutboundContactlistContactsBulkRemove", ...(args as GenesysCloudFullApiOperationArgs<"postOutboundContactlistContactsBulkRemove">)),
    PostOutboundContactlistContactsBulkUpdate: (...args) => callOperation("postOutboundContactlistContactsBulkUpdate", ...(args as GenesysCloudFullApiOperationArgs<"postOutboundContactlistContactsBulkUpdate">)),
    PostOutboundContactlistContactsSearch: (...args) => callOperation("postOutboundContactlistContactsSearch", ...(args as GenesysCloudFullApiOperationArgs<"postOutboundContactlistContactsSearch">)),
    PostOutboundContactlistExport: (...args) => callOperation("postOutboundContactlistExport", ...(args as GenesysCloudFullApiOperationArgs<"postOutboundContactlistExport">)),
    PostOutboundContactlistfilters: (...args) => callOperation("postOutboundContactlistfilters", ...(args as GenesysCloudFullApiOperationArgs<"postOutboundContactlistfilters">)),
    PostOutboundContactlistfiltersBulkRetrieve: (...args) => callOperation("postOutboundContactlistfiltersBulkRetrieve", ...(args as GenesysCloudFullApiOperationArgs<"postOutboundContactlistfiltersBulkRetrieve">)),
    PostOutboundContactlistfiltersPreview: (...args) => callOperation("postOutboundContactlistfiltersPreview", ...(args as GenesysCloudFullApiOperationArgs<"postOutboundContactlistfiltersPreview">)),
    PostOutboundContactlists: (...args) => callOperation("postOutboundContactlists", ...(args as GenesysCloudFullApiOperationArgs<"postOutboundContactlists">)),
    PostOutboundContactlistsUploads: (...args) => callOperation("postOutboundContactlistsUploads", ...(args as GenesysCloudFullApiOperationArgs<"postOutboundContactlistsUploads">)),
    PostOutboundContactlisttemplates: (...args) => callOperation("postOutboundContactlisttemplates", ...(args as GenesysCloudFullApiOperationArgs<"postOutboundContactlisttemplates">)),
    PostOutboundContactlisttemplatesBulkAdd: (...args) => callOperation("postOutboundContactlisttemplatesBulkAdd", ...(args as GenesysCloudFullApiOperationArgs<"postOutboundContactlisttemplatesBulkAdd">)),
    PostOutboundContactlisttemplatesBulkRetrieve: (...args) => callOperation("postOutboundContactlisttemplatesBulkRetrieve", ...(args as GenesysCloudFullApiOperationArgs<"postOutboundContactlisttemplatesBulkRetrieve">)),
    PostOutboundConversationDnc: (...args) => callOperation("postOutboundConversationDnc", ...(args as GenesysCloudFullApiOperationArgs<"postOutboundConversationDnc">)),
    PostOutboundDigitalrulesets: (...args) => callOperation("postOutboundDigitalrulesets", ...(args as GenesysCloudFullApiOperationArgs<"postOutboundDigitalrulesets">)),
    PostOutboundDnclistEmailaddresses: (...args) => callOperation("postOutboundDnclistEmailaddresses", ...(args as GenesysCloudFullApiOperationArgs<"postOutboundDnclistEmailaddresses">)),
    PostOutboundDnclistExport: (...args) => callOperation("postOutboundDnclistExport", ...(args as GenesysCloudFullApiOperationArgs<"postOutboundDnclistExport">)),
    PostOutboundDnclistPhonenumbers: (...args) => callOperation("postOutboundDnclistPhonenumbers", ...(args as GenesysCloudFullApiOperationArgs<"postOutboundDnclistPhonenumbers">)),
    PostOutboundDnclists: (...args) => callOperation("postOutboundDnclists", ...(args as GenesysCloudFullApiOperationArgs<"postOutboundDnclists">)),
    PostOutboundDnclistsUploads: (...args) => callOperation("postOutboundDnclistsUploads", ...(args as GenesysCloudFullApiOperationArgs<"postOutboundDnclistsUploads">)),
    PostOutboundFilespecificationtemplates: (...args) => callOperation("postOutboundFilespecificationtemplates", ...(args as GenesysCloudFullApiOperationArgs<"postOutboundFilespecificationtemplates">)),
    PostOutboundImporttemplates: (...args) => callOperation("postOutboundImporttemplates", ...(args as GenesysCloudFullApiOperationArgs<"postOutboundImporttemplates">)),
    PostOutboundImporttemplatesBulkAdd: (...args) => callOperation("postOutboundImporttemplatesBulkAdd", ...(args as GenesysCloudFullApiOperationArgs<"postOutboundImporttemplatesBulkAdd">)),
    PostOutboundMessagingcampaigns: (...args) => callOperation("postOutboundMessagingcampaigns", ...(args as GenesysCloudFullApiOperationArgs<"postOutboundMessagingcampaigns">)),
    PostOutboundMessagingcampaignsProgress: (...args) => callOperation("postOutboundMessagingcampaignsProgress", ...(args as GenesysCloudFullApiOperationArgs<"postOutboundMessagingcampaignsProgress">)),
    PostOutboundMessagingcampaignStart: (...args) => callOperation("postOutboundMessagingcampaignStart", ...(args as GenesysCloudFullApiOperationArgs<"postOutboundMessagingcampaignStart">)),
    PostOutboundMessagingcampaignStop: (...args) => callOperation("postOutboundMessagingcampaignStop", ...(args as GenesysCloudFullApiOperationArgs<"postOutboundMessagingcampaignStop">)),
    PostOutboundRulesets: (...args) => callOperation("postOutboundRulesets", ...(args as GenesysCloudFullApiOperationArgs<"postOutboundRulesets">)),
    PostOutboundSequences: (...args) => callOperation("postOutboundSequences", ...(args as GenesysCloudFullApiOperationArgs<"postOutboundSequences">)),
    PutOutboundAttemptlimit: (...args) => callOperation("putOutboundAttemptlimit", ...(args as GenesysCloudFullApiOperationArgs<"putOutboundAttemptlimit">)),
    PutOutboundCallabletimeset: (...args) => callOperation("putOutboundCallabletimeset", ...(args as GenesysCloudFullApiOperationArgs<"putOutboundCallabletimeset">)),
    PutOutboundCallanalysisresponseset: (...args) => callOperation("putOutboundCallanalysisresponseset", ...(args as GenesysCloudFullApiOperationArgs<"putOutboundCallanalysisresponseset">)),
    PutOutboundCampaign: (...args) => callOperation("putOutboundCampaign", ...(args as GenesysCloudFullApiOperationArgs<"putOutboundCampaign">)),
    PutOutboundCampaignAgent: (...args) => callOperation("putOutboundCampaignAgent", ...(args as GenesysCloudFullApiOperationArgs<"putOutboundCampaignAgent">)),
    PutOutboundCampaignrule: (...args) => callOperation("putOutboundCampaignrule", ...(args as GenesysCloudFullApiOperationArgs<"putOutboundCampaignrule">)),
    PutOutboundContactlist: (...args) => callOperation("putOutboundContactlist", ...(args as GenesysCloudFullApiOperationArgs<"putOutboundContactlist">)),
  };
}
