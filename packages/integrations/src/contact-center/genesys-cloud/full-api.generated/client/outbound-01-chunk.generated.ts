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
export const GenesysCloudFullApiOutbound01OperationKeys = [
  "deleteOutboundAttemptlimit",
  "deleteOutboundCallabletimeset",
  "deleteOutboundCallanalysisresponseset",
  "deleteOutboundCampaign",
  "deleteOutboundCampaignProgress",
  "deleteOutboundCampaignrule",
  "deleteOutboundContactlist",
  "deleteOutboundContactlistContact",
  "deleteOutboundContactlistContacts",
  "deleteOutboundContactlistfilter",
  "deleteOutboundContactlists",
  "deleteOutboundContactlisttemplate",
  "deleteOutboundContactlisttemplates",
  "deleteOutboundDigitalruleset",
  "deleteOutboundDnclist",
  "deleteOutboundDnclistCustomexclusioncolumns",
  "deleteOutboundDnclistEmailaddresses",
  "deleteOutboundDnclistPhonenumbers",
  "deleteOutboundDnclistWhatsappnumbers",
  "deleteOutboundFilespecificationtemplate",
  "deleteOutboundFilespecificationtemplatesBulk",
  "deleteOutboundImporttemplate",
  "deleteOutboundImporttemplates",
  "deleteOutboundMessagingcampaign",
  "deleteOutboundMessagingcampaignProgress",
  "deleteOutboundRuleset",
  "deleteOutboundSchedulesCampaign",
  "deleteOutboundSchedulesEmailcampaign",
  "deleteOutboundSchedulesMessagingcampaign",
  "deleteOutboundSchedulesSequence",
  "deleteOutboundSchedulesWhatsappcampaign",
  "deleteOutboundSequence",
  "getOutboundAttemptlimit",
  "getOutboundAttemptlimits",
  "getOutboundCallabletimeset",
  "getOutboundCallabletimesets",
  "getOutboundCallanalysisresponseset",
  "getOutboundCallanalysisresponsesets",
  "getOutboundCampaign",
  "getOutboundCampaignAgentownedmappingpreviewResults",
  "getOutboundCampaignDiagnostics",
  "getOutboundCampaignInteractions",
  "getOutboundCampaignLinedistribution",
  "getOutboundCampaignProgress",
  "getOutboundCampaignrule",
  "getOutboundCampaignrules",
  "getOutboundCampaigns",
  "getOutboundCampaignsAll",
  "getOutboundCampaignsAllDivisionviews",
  "getOutboundCampaignsDivisionview",
  "getOutboundCampaignsDivisionviews",
  "getOutboundCampaignSkillcombinations",
  "getOutboundCampaignStats",
  "getOutboundContactlist",
  "getOutboundContactlistContact",
  "getOutboundContactlistContactsBulkJob",
  "getOutboundContactlistContactsBulkJobs",
  "getOutboundContactlistExport",
  "getOutboundContactlistfilter",
  "getOutboundContactlistfilters",
  "getOutboundContactlistImportstatus",
  "getOutboundContactlists",
  "getOutboundContactlistsDivisionview",
  "getOutboundContactlistsDivisionviews",
  "getOutboundContactlisttemplate",
  "getOutboundContactlisttemplates",
  "getOutboundContactlistTimezonemappingpreview",
  "getOutboundDiagnosticsCampaignSummary",
  "getOutboundDigitalruleset",
  "getOutboundDigitalrulesets",
  "getOutboundDnclist",
  "getOutboundDnclistExport",
  "getOutboundDnclistImportstatus",
  "getOutboundDnclists",
  "getOutboundDnclistsDivisionview",
  "getOutboundDnclistsDivisionviews",
  "getOutboundEvent",
  "getOutboundEvents",
  "getOutboundFilespecificationtemplate",
  "getOutboundFilespecificationtemplates"
] as const;
export type GenesysCloudFullApiOutbound01OperationKey = typeof GenesysCloudFullApiOutbound01OperationKeys[number];
// End hardened literal operation keys.

export interface GenesysCloudFullApiOutbound01OperationPathParamMap {
  "deleteOutboundAttemptlimit": { "attemptLimitsId": GenesysCloudFullApiPathParamValue };
  "deleteOutboundCallabletimeset": { "callableTimeSetId": GenesysCloudFullApiPathParamValue };
  "deleteOutboundCallanalysisresponseset": { "callAnalysisSetId": GenesysCloudFullApiPathParamValue };
  "deleteOutboundCampaign": { "campaignId": GenesysCloudFullApiPathParamValue };
  "deleteOutboundCampaignProgress": { "campaignId": GenesysCloudFullApiPathParamValue };
  "deleteOutboundCampaignrule": { "campaignRuleId": GenesysCloudFullApiPathParamValue };
  "deleteOutboundContactlist": { "contactListId": GenesysCloudFullApiPathParamValue };
  "deleteOutboundContactlistContact": { "contactListId": GenesysCloudFullApiPathParamValue; "contactId": GenesysCloudFullApiPathParamValue };
  "deleteOutboundContactlistContacts": { "contactListId": GenesysCloudFullApiPathParamValue };
  "deleteOutboundContactlistfilter": { "contactListFilterId": GenesysCloudFullApiPathParamValue };
  "deleteOutboundContactlists": {};
  "deleteOutboundContactlisttemplate": { "contactListTemplateId": GenesysCloudFullApiPathParamValue };
  "deleteOutboundContactlisttemplates": {};
  "deleteOutboundDigitalruleset": { "digitalRuleSetId": GenesysCloudFullApiPathParamValue };
  "deleteOutboundDnclist": { "dncListId": GenesysCloudFullApiPathParamValue };
  "deleteOutboundDnclistCustomexclusioncolumns": { "dncListId": GenesysCloudFullApiPathParamValue };
  "deleteOutboundDnclistEmailaddresses": { "dncListId": GenesysCloudFullApiPathParamValue };
  "deleteOutboundDnclistPhonenumbers": { "dncListId": GenesysCloudFullApiPathParamValue };
  "deleteOutboundDnclistWhatsappnumbers": { "dncListId": GenesysCloudFullApiPathParamValue };
  "deleteOutboundFilespecificationtemplate": { "fileSpecificationTemplateId": GenesysCloudFullApiPathParamValue };
  "deleteOutboundFilespecificationtemplatesBulk": {};
  "deleteOutboundImporttemplate": { "importTemplateId": GenesysCloudFullApiPathParamValue };
  "deleteOutboundImporttemplates": {};
  "deleteOutboundMessagingcampaign": { "messagingCampaignId": GenesysCloudFullApiPathParamValue };
  "deleteOutboundMessagingcampaignProgress": { "messagingCampaignId": GenesysCloudFullApiPathParamValue };
  "deleteOutboundRuleset": { "ruleSetId": GenesysCloudFullApiPathParamValue };
  "deleteOutboundSchedulesCampaign": { "campaignId": GenesysCloudFullApiPathParamValue };
  "deleteOutboundSchedulesEmailcampaign": { "emailCampaignId": GenesysCloudFullApiPathParamValue };
  "deleteOutboundSchedulesMessagingcampaign": { "messagingCampaignId": GenesysCloudFullApiPathParamValue };
  "deleteOutboundSchedulesSequence": { "sequenceId": GenesysCloudFullApiPathParamValue };
  "deleteOutboundSchedulesWhatsappcampaign": { "whatsAppCampaignId": GenesysCloudFullApiPathParamValue };
  "deleteOutboundSequence": { "sequenceId": GenesysCloudFullApiPathParamValue };
  "getOutboundAttemptlimit": { "attemptLimitsId": GenesysCloudFullApiPathParamValue };
  "getOutboundAttemptlimits": {};
  "getOutboundCallabletimeset": { "callableTimeSetId": GenesysCloudFullApiPathParamValue };
  "getOutboundCallabletimesets": {};
  "getOutboundCallanalysisresponseset": { "callAnalysisSetId": GenesysCloudFullApiPathParamValue };
  "getOutboundCallanalysisresponsesets": {};
  "getOutboundCampaign": { "campaignId": GenesysCloudFullApiPathParamValue };
  "getOutboundCampaignAgentownedmappingpreviewResults": { "campaignId": GenesysCloudFullApiPathParamValue };
  "getOutboundCampaignDiagnostics": { "campaignId": GenesysCloudFullApiPathParamValue };
  "getOutboundCampaignInteractions": { "campaignId": GenesysCloudFullApiPathParamValue };
  "getOutboundCampaignLinedistribution": { "campaignId": GenesysCloudFullApiPathParamValue };
  "getOutboundCampaignProgress": { "campaignId": GenesysCloudFullApiPathParamValue };
  "getOutboundCampaignrule": { "campaignRuleId": GenesysCloudFullApiPathParamValue };
  "getOutboundCampaignrules": {};
  "getOutboundCampaigns": {};
  "getOutboundCampaignsAll": {};
  "getOutboundCampaignsAllDivisionviews": {};
  "getOutboundCampaignsDivisionview": { "campaignId": GenesysCloudFullApiPathParamValue };
  "getOutboundCampaignsDivisionviews": {};
  "getOutboundCampaignSkillcombinations": { "campaignId": GenesysCloudFullApiPathParamValue };
  "getOutboundCampaignStats": { "campaignId": GenesysCloudFullApiPathParamValue };
  "getOutboundContactlist": { "contactListId": GenesysCloudFullApiPathParamValue };
  "getOutboundContactlistContact": { "contactListId": GenesysCloudFullApiPathParamValue; "contactId": GenesysCloudFullApiPathParamValue };
  "getOutboundContactlistContactsBulkJob": { "contactListId": GenesysCloudFullApiPathParamValue; "jobId": GenesysCloudFullApiPathParamValue };
  "getOutboundContactlistContactsBulkJobs": { "contactListId": GenesysCloudFullApiPathParamValue };
  "getOutboundContactlistExport": { "contactListId": GenesysCloudFullApiPathParamValue };
  "getOutboundContactlistfilter": { "contactListFilterId": GenesysCloudFullApiPathParamValue };
  "getOutboundContactlistfilters": {};
  "getOutboundContactlistImportstatus": { "contactListId": GenesysCloudFullApiPathParamValue };
  "getOutboundContactlists": {};
  "getOutboundContactlistsDivisionview": { "contactListId": GenesysCloudFullApiPathParamValue };
  "getOutboundContactlistsDivisionviews": {};
  "getOutboundContactlisttemplate": { "contactListTemplateId": GenesysCloudFullApiPathParamValue };
  "getOutboundContactlisttemplates": {};
  "getOutboundContactlistTimezonemappingpreview": { "contactListId": GenesysCloudFullApiPathParamValue };
  "getOutboundDiagnosticsCampaignSummary": { "campaignId": GenesysCloudFullApiPathParamValue };
  "getOutboundDigitalruleset": { "digitalRuleSetId": GenesysCloudFullApiPathParamValue };
  "getOutboundDigitalrulesets": {};
  "getOutboundDnclist": { "dncListId": GenesysCloudFullApiPathParamValue };
  "getOutboundDnclistExport": { "dncListId": GenesysCloudFullApiPathParamValue };
  "getOutboundDnclistImportstatus": { "dncListId": GenesysCloudFullApiPathParamValue };
  "getOutboundDnclists": {};
  "getOutboundDnclistsDivisionview": { "dncListId": GenesysCloudFullApiPathParamValue };
  "getOutboundDnclistsDivisionviews": {};
  "getOutboundEvent": { "eventId": GenesysCloudFullApiPathParamValue };
  "getOutboundEvents": {};
  "getOutboundFilespecificationtemplate": { "fileSpecificationTemplateId": GenesysCloudFullApiPathParamValue };
  "getOutboundFilespecificationtemplates": {};
}

export interface GenesysCloudFullApiOutbound01OperationRequestMap {
  "deleteOutboundAttemptlimit": GenesysCloudFullApiOperationInput<"deleteOutboundAttemptlimit">;
  "deleteOutboundCallabletimeset": GenesysCloudFullApiOperationInput<"deleteOutboundCallabletimeset">;
  "deleteOutboundCallanalysisresponseset": GenesysCloudFullApiOperationInput<"deleteOutboundCallanalysisresponseset">;
  "deleteOutboundCampaign": GenesysCloudFullApiOperationInput<"deleteOutboundCampaign">;
  "deleteOutboundCampaignProgress": GenesysCloudFullApiOperationInput<"deleteOutboundCampaignProgress">;
  "deleteOutboundCampaignrule": GenesysCloudFullApiOperationInput<"deleteOutboundCampaignrule">;
  "deleteOutboundContactlist": GenesysCloudFullApiOperationInput<"deleteOutboundContactlist">;
  "deleteOutboundContactlistContact": GenesysCloudFullApiOperationInput<"deleteOutboundContactlistContact">;
  "deleteOutboundContactlistContacts": GenesysCloudFullApiOperationInput<"deleteOutboundContactlistContacts">;
  "deleteOutboundContactlistfilter": GenesysCloudFullApiOperationInput<"deleteOutboundContactlistfilter">;
  "deleteOutboundContactlists": GenesysCloudFullApiOperationInput<"deleteOutboundContactlists">;
  "deleteOutboundContactlisttemplate": GenesysCloudFullApiOperationInput<"deleteOutboundContactlisttemplate">;
  "deleteOutboundContactlisttemplates": GenesysCloudFullApiOperationInput<"deleteOutboundContactlisttemplates">;
  "deleteOutboundDigitalruleset": GenesysCloudFullApiOperationInput<"deleteOutboundDigitalruleset">;
  "deleteOutboundDnclist": GenesysCloudFullApiOperationInput<"deleteOutboundDnclist">;
  "deleteOutboundDnclistCustomexclusioncolumns": GenesysCloudFullApiOperationInput<"deleteOutboundDnclistCustomexclusioncolumns">;
  "deleteOutboundDnclistEmailaddresses": GenesysCloudFullApiOperationInput<"deleteOutboundDnclistEmailaddresses">;
  "deleteOutboundDnclistPhonenumbers": GenesysCloudFullApiOperationInput<"deleteOutboundDnclistPhonenumbers">;
  "deleteOutboundDnclistWhatsappnumbers": GenesysCloudFullApiOperationInput<"deleteOutboundDnclistWhatsappnumbers">;
  "deleteOutboundFilespecificationtemplate": GenesysCloudFullApiOperationInput<"deleteOutboundFilespecificationtemplate">;
  "deleteOutboundFilespecificationtemplatesBulk": GenesysCloudFullApiOperationInput<"deleteOutboundFilespecificationtemplatesBulk">;
  "deleteOutboundImporttemplate": GenesysCloudFullApiOperationInput<"deleteOutboundImporttemplate">;
  "deleteOutboundImporttemplates": GenesysCloudFullApiOperationInput<"deleteOutboundImporttemplates">;
  "deleteOutboundMessagingcampaign": GenesysCloudFullApiOperationInput<"deleteOutboundMessagingcampaign">;
  "deleteOutboundMessagingcampaignProgress": GenesysCloudFullApiOperationInput<"deleteOutboundMessagingcampaignProgress">;
  "deleteOutboundRuleset": GenesysCloudFullApiOperationInput<"deleteOutboundRuleset">;
  "deleteOutboundSchedulesCampaign": GenesysCloudFullApiOperationInput<"deleteOutboundSchedulesCampaign">;
  "deleteOutboundSchedulesEmailcampaign": GenesysCloudFullApiOperationInput<"deleteOutboundSchedulesEmailcampaign">;
  "deleteOutboundSchedulesMessagingcampaign": GenesysCloudFullApiOperationInput<"deleteOutboundSchedulesMessagingcampaign">;
  "deleteOutboundSchedulesSequence": GenesysCloudFullApiOperationInput<"deleteOutboundSchedulesSequence">;
  "deleteOutboundSchedulesWhatsappcampaign": GenesysCloudFullApiOperationInput<"deleteOutboundSchedulesWhatsappcampaign">;
  "deleteOutboundSequence": GenesysCloudFullApiOperationInput<"deleteOutboundSequence">;
  "getOutboundAttemptlimit": GenesysCloudFullApiOperationInput<"getOutboundAttemptlimit">;
  "getOutboundAttemptlimits": GenesysCloudFullApiOperationInput<"getOutboundAttemptlimits">;
  "getOutboundCallabletimeset": GenesysCloudFullApiOperationInput<"getOutboundCallabletimeset">;
  "getOutboundCallabletimesets": GenesysCloudFullApiOperationInput<"getOutboundCallabletimesets">;
  "getOutboundCallanalysisresponseset": GenesysCloudFullApiOperationInput<"getOutboundCallanalysisresponseset">;
  "getOutboundCallanalysisresponsesets": GenesysCloudFullApiOperationInput<"getOutboundCallanalysisresponsesets">;
  "getOutboundCampaign": GenesysCloudFullApiOperationInput<"getOutboundCampaign">;
  "getOutboundCampaignAgentownedmappingpreviewResults": GenesysCloudFullApiOperationInput<"getOutboundCampaignAgentownedmappingpreviewResults">;
  "getOutboundCampaignDiagnostics": GenesysCloudFullApiOperationInput<"getOutboundCampaignDiagnostics">;
  "getOutboundCampaignInteractions": GenesysCloudFullApiOperationInput<"getOutboundCampaignInteractions">;
  "getOutboundCampaignLinedistribution": GenesysCloudFullApiOperationInput<"getOutboundCampaignLinedistribution">;
  "getOutboundCampaignProgress": GenesysCloudFullApiOperationInput<"getOutboundCampaignProgress">;
  "getOutboundCampaignrule": GenesysCloudFullApiOperationInput<"getOutboundCampaignrule">;
  "getOutboundCampaignrules": GenesysCloudFullApiOperationInput<"getOutboundCampaignrules">;
  "getOutboundCampaigns": GenesysCloudFullApiOperationInput<"getOutboundCampaigns">;
  "getOutboundCampaignsAll": GenesysCloudFullApiOperationInput<"getOutboundCampaignsAll">;
  "getOutboundCampaignsAllDivisionviews": GenesysCloudFullApiOperationInput<"getOutboundCampaignsAllDivisionviews">;
  "getOutboundCampaignsDivisionview": GenesysCloudFullApiOperationInput<"getOutboundCampaignsDivisionview">;
  "getOutboundCampaignsDivisionviews": GenesysCloudFullApiOperationInput<"getOutboundCampaignsDivisionviews">;
  "getOutboundCampaignSkillcombinations": GenesysCloudFullApiOperationInput<"getOutboundCampaignSkillcombinations">;
  "getOutboundCampaignStats": GenesysCloudFullApiOperationInput<"getOutboundCampaignStats">;
  "getOutboundContactlist": GenesysCloudFullApiOperationInput<"getOutboundContactlist">;
  "getOutboundContactlistContact": GenesysCloudFullApiOperationInput<"getOutboundContactlistContact">;
  "getOutboundContactlistContactsBulkJob": GenesysCloudFullApiOperationInput<"getOutboundContactlistContactsBulkJob">;
  "getOutboundContactlistContactsBulkJobs": GenesysCloudFullApiOperationInput<"getOutboundContactlistContactsBulkJobs">;
  "getOutboundContactlistExport": GenesysCloudFullApiOperationInput<"getOutboundContactlistExport">;
  "getOutboundContactlistfilter": GenesysCloudFullApiOperationInput<"getOutboundContactlistfilter">;
  "getOutboundContactlistfilters": GenesysCloudFullApiOperationInput<"getOutboundContactlistfilters">;
  "getOutboundContactlistImportstatus": GenesysCloudFullApiOperationInput<"getOutboundContactlistImportstatus">;
  "getOutboundContactlists": GenesysCloudFullApiOperationInput<"getOutboundContactlists">;
  "getOutboundContactlistsDivisionview": GenesysCloudFullApiOperationInput<"getOutboundContactlistsDivisionview">;
  "getOutboundContactlistsDivisionviews": GenesysCloudFullApiOperationInput<"getOutboundContactlistsDivisionviews">;
  "getOutboundContactlisttemplate": GenesysCloudFullApiOperationInput<"getOutboundContactlisttemplate">;
  "getOutboundContactlisttemplates": GenesysCloudFullApiOperationInput<"getOutboundContactlisttemplates">;
  "getOutboundContactlistTimezonemappingpreview": GenesysCloudFullApiOperationInput<"getOutboundContactlistTimezonemappingpreview">;
  "getOutboundDiagnosticsCampaignSummary": GenesysCloudFullApiOperationInput<"getOutboundDiagnosticsCampaignSummary">;
  "getOutboundDigitalruleset": GenesysCloudFullApiOperationInput<"getOutboundDigitalruleset">;
  "getOutboundDigitalrulesets": GenesysCloudFullApiOperationInput<"getOutboundDigitalrulesets">;
  "getOutboundDnclist": GenesysCloudFullApiOperationInput<"getOutboundDnclist">;
  "getOutboundDnclistExport": GenesysCloudFullApiOperationInput<"getOutboundDnclistExport">;
  "getOutboundDnclistImportstatus": GenesysCloudFullApiOperationInput<"getOutboundDnclistImportstatus">;
  "getOutboundDnclists": GenesysCloudFullApiOperationInput<"getOutboundDnclists">;
  "getOutboundDnclistsDivisionview": GenesysCloudFullApiOperationInput<"getOutboundDnclistsDivisionview">;
  "getOutboundDnclistsDivisionviews": GenesysCloudFullApiOperationInput<"getOutboundDnclistsDivisionviews">;
  "getOutboundEvent": GenesysCloudFullApiOperationInput<"getOutboundEvent">;
  "getOutboundEvents": GenesysCloudFullApiOperationInput<"getOutboundEvents">;
  "getOutboundFilespecificationtemplate": GenesysCloudFullApiOperationInput<"getOutboundFilespecificationtemplate">;
  "getOutboundFilespecificationtemplates": GenesysCloudFullApiOperationInput<"getOutboundFilespecificationtemplates">;
}

export interface GenesysCloudFullApiOutbound01GeneratedClient {
  DeleteOutboundAttemptlimit(...args: GenesysCloudFullApiOperationArgs<"deleteOutboundAttemptlimit">): Promise<GenesysCloudFullApiOperationResponseMap["deleteOutboundAttemptlimit"]>;
  DeleteOutboundCallabletimeset(...args: GenesysCloudFullApiOperationArgs<"deleteOutboundCallabletimeset">): Promise<GenesysCloudFullApiOperationResponseMap["deleteOutboundCallabletimeset"]>;
  DeleteOutboundCallanalysisresponseset(...args: GenesysCloudFullApiOperationArgs<"deleteOutboundCallanalysisresponseset">): Promise<GenesysCloudFullApiOperationResponseMap["deleteOutboundCallanalysisresponseset"]>;
  DeleteOutboundCampaign(...args: GenesysCloudFullApiOperationArgs<"deleteOutboundCampaign">): Promise<GenesysCloudFullApiOperationResponseMap["deleteOutboundCampaign"]>;
  DeleteOutboundCampaignProgress(...args: GenesysCloudFullApiOperationArgs<"deleteOutboundCampaignProgress">): Promise<GenesysCloudFullApiOperationResponseMap["deleteOutboundCampaignProgress"]>;
  DeleteOutboundCampaignrule(...args: GenesysCloudFullApiOperationArgs<"deleteOutboundCampaignrule">): Promise<GenesysCloudFullApiOperationResponseMap["deleteOutboundCampaignrule"]>;
  DeleteOutboundContactlist(...args: GenesysCloudFullApiOperationArgs<"deleteOutboundContactlist">): Promise<GenesysCloudFullApiOperationResponseMap["deleteOutboundContactlist"]>;
  DeleteOutboundContactlistContact(...args: GenesysCloudFullApiOperationArgs<"deleteOutboundContactlistContact">): Promise<GenesysCloudFullApiOperationResponseMap["deleteOutboundContactlistContact"]>;
  DeleteOutboundContactlistContacts(...args: GenesysCloudFullApiOperationArgs<"deleteOutboundContactlistContacts">): Promise<GenesysCloudFullApiOperationResponseMap["deleteOutboundContactlistContacts"]>;
  DeleteOutboundContactlistfilter(...args: GenesysCloudFullApiOperationArgs<"deleteOutboundContactlistfilter">): Promise<GenesysCloudFullApiOperationResponseMap["deleteOutboundContactlistfilter"]>;
  DeleteOutboundContactlists(...args: GenesysCloudFullApiOperationArgs<"deleteOutboundContactlists">): Promise<GenesysCloudFullApiOperationResponseMap["deleteOutboundContactlists"]>;
  DeleteOutboundContactlisttemplate(...args: GenesysCloudFullApiOperationArgs<"deleteOutboundContactlisttemplate">): Promise<GenesysCloudFullApiOperationResponseMap["deleteOutboundContactlisttemplate"]>;
  DeleteOutboundContactlisttemplates(...args: GenesysCloudFullApiOperationArgs<"deleteOutboundContactlisttemplates">): Promise<GenesysCloudFullApiOperationResponseMap["deleteOutboundContactlisttemplates"]>;
  DeleteOutboundDigitalruleset(...args: GenesysCloudFullApiOperationArgs<"deleteOutboundDigitalruleset">): Promise<GenesysCloudFullApiOperationResponseMap["deleteOutboundDigitalruleset"]>;
  DeleteOutboundDnclist(...args: GenesysCloudFullApiOperationArgs<"deleteOutboundDnclist">): Promise<GenesysCloudFullApiOperationResponseMap["deleteOutboundDnclist"]>;
  DeleteOutboundDnclistCustomexclusioncolumns(...args: GenesysCloudFullApiOperationArgs<"deleteOutboundDnclistCustomexclusioncolumns">): Promise<GenesysCloudFullApiOperationResponseMap["deleteOutboundDnclistCustomexclusioncolumns"]>;
  DeleteOutboundDnclistEmailaddresses(...args: GenesysCloudFullApiOperationArgs<"deleteOutboundDnclistEmailaddresses">): Promise<GenesysCloudFullApiOperationResponseMap["deleteOutboundDnclistEmailaddresses"]>;
  DeleteOutboundDnclistPhonenumbers(...args: GenesysCloudFullApiOperationArgs<"deleteOutboundDnclistPhonenumbers">): Promise<GenesysCloudFullApiOperationResponseMap["deleteOutboundDnclistPhonenumbers"]>;
  DeleteOutboundDnclistWhatsappnumbers(...args: GenesysCloudFullApiOperationArgs<"deleteOutboundDnclistWhatsappnumbers">): Promise<GenesysCloudFullApiOperationResponseMap["deleteOutboundDnclistWhatsappnumbers"]>;
  DeleteOutboundFilespecificationtemplate(...args: GenesysCloudFullApiOperationArgs<"deleteOutboundFilespecificationtemplate">): Promise<GenesysCloudFullApiOperationResponseMap["deleteOutboundFilespecificationtemplate"]>;
  DeleteOutboundFilespecificationtemplatesBulk(...args: GenesysCloudFullApiOperationArgs<"deleteOutboundFilespecificationtemplatesBulk">): Promise<GenesysCloudFullApiOperationResponseMap["deleteOutboundFilespecificationtemplatesBulk"]>;
  DeleteOutboundImporttemplate(...args: GenesysCloudFullApiOperationArgs<"deleteOutboundImporttemplate">): Promise<GenesysCloudFullApiOperationResponseMap["deleteOutboundImporttemplate"]>;
  DeleteOutboundImporttemplates(...args: GenesysCloudFullApiOperationArgs<"deleteOutboundImporttemplates">): Promise<GenesysCloudFullApiOperationResponseMap["deleteOutboundImporttemplates"]>;
  DeleteOutboundMessagingcampaign(...args: GenesysCloudFullApiOperationArgs<"deleteOutboundMessagingcampaign">): Promise<GenesysCloudFullApiOperationResponseMap["deleteOutboundMessagingcampaign"]>;
  DeleteOutboundMessagingcampaignProgress(...args: GenesysCloudFullApiOperationArgs<"deleteOutboundMessagingcampaignProgress">): Promise<GenesysCloudFullApiOperationResponseMap["deleteOutboundMessagingcampaignProgress"]>;
  DeleteOutboundRuleset(...args: GenesysCloudFullApiOperationArgs<"deleteOutboundRuleset">): Promise<GenesysCloudFullApiOperationResponseMap["deleteOutboundRuleset"]>;
  DeleteOutboundSchedulesCampaign(...args: GenesysCloudFullApiOperationArgs<"deleteOutboundSchedulesCampaign">): Promise<GenesysCloudFullApiOperationResponseMap["deleteOutboundSchedulesCampaign"]>;
  DeleteOutboundSchedulesEmailcampaign(...args: GenesysCloudFullApiOperationArgs<"deleteOutboundSchedulesEmailcampaign">): Promise<GenesysCloudFullApiOperationResponseMap["deleteOutboundSchedulesEmailcampaign"]>;
  DeleteOutboundSchedulesMessagingcampaign(...args: GenesysCloudFullApiOperationArgs<"deleteOutboundSchedulesMessagingcampaign">): Promise<GenesysCloudFullApiOperationResponseMap["deleteOutboundSchedulesMessagingcampaign"]>;
  DeleteOutboundSchedulesSequence(...args: GenesysCloudFullApiOperationArgs<"deleteOutboundSchedulesSequence">): Promise<GenesysCloudFullApiOperationResponseMap["deleteOutboundSchedulesSequence"]>;
  DeleteOutboundSchedulesWhatsappcampaign(...args: GenesysCloudFullApiOperationArgs<"deleteOutboundSchedulesWhatsappcampaign">): Promise<GenesysCloudFullApiOperationResponseMap["deleteOutboundSchedulesWhatsappcampaign"]>;
  DeleteOutboundSequence(...args: GenesysCloudFullApiOperationArgs<"deleteOutboundSequence">): Promise<GenesysCloudFullApiOperationResponseMap["deleteOutboundSequence"]>;
  GetOutboundAttemptlimit(...args: GenesysCloudFullApiOperationArgs<"getOutboundAttemptlimit">): Promise<GenesysCloudFullApiOperationResponseMap["getOutboundAttemptlimit"]>;
  GetOutboundAttemptlimits(...args: GenesysCloudFullApiOperationArgs<"getOutboundAttemptlimits">): Promise<GenesysCloudFullApiOperationResponseMap["getOutboundAttemptlimits"]>;
  GetOutboundCallabletimeset(...args: GenesysCloudFullApiOperationArgs<"getOutboundCallabletimeset">): Promise<GenesysCloudFullApiOperationResponseMap["getOutboundCallabletimeset"]>;
  GetOutboundCallabletimesets(...args: GenesysCloudFullApiOperationArgs<"getOutboundCallabletimesets">): Promise<GenesysCloudFullApiOperationResponseMap["getOutboundCallabletimesets"]>;
  GetOutboundCallanalysisresponseset(...args: GenesysCloudFullApiOperationArgs<"getOutboundCallanalysisresponseset">): Promise<GenesysCloudFullApiOperationResponseMap["getOutboundCallanalysisresponseset"]>;
  GetOutboundCallanalysisresponsesets(...args: GenesysCloudFullApiOperationArgs<"getOutboundCallanalysisresponsesets">): Promise<GenesysCloudFullApiOperationResponseMap["getOutboundCallanalysisresponsesets"]>;
  GetOutboundCampaign(...args: GenesysCloudFullApiOperationArgs<"getOutboundCampaign">): Promise<GenesysCloudFullApiOperationResponseMap["getOutboundCampaign"]>;
  GetOutboundCampaignAgentownedmappingpreviewResults(...args: GenesysCloudFullApiOperationArgs<"getOutboundCampaignAgentownedmappingpreviewResults">): Promise<GenesysCloudFullApiOperationResponseMap["getOutboundCampaignAgentownedmappingpreviewResults"]>;
  GetOutboundCampaignDiagnostics(...args: GenesysCloudFullApiOperationArgs<"getOutboundCampaignDiagnostics">): Promise<GenesysCloudFullApiOperationResponseMap["getOutboundCampaignDiagnostics"]>;
  GetOutboundCampaignInteractions(...args: GenesysCloudFullApiOperationArgs<"getOutboundCampaignInteractions">): Promise<GenesysCloudFullApiOperationResponseMap["getOutboundCampaignInteractions"]>;
  GetOutboundCampaignLinedistribution(...args: GenesysCloudFullApiOperationArgs<"getOutboundCampaignLinedistribution">): Promise<GenesysCloudFullApiOperationResponseMap["getOutboundCampaignLinedistribution"]>;
  GetOutboundCampaignProgress(...args: GenesysCloudFullApiOperationArgs<"getOutboundCampaignProgress">): Promise<GenesysCloudFullApiOperationResponseMap["getOutboundCampaignProgress"]>;
  GetOutboundCampaignrule(...args: GenesysCloudFullApiOperationArgs<"getOutboundCampaignrule">): Promise<GenesysCloudFullApiOperationResponseMap["getOutboundCampaignrule"]>;
  GetOutboundCampaignrules(...args: GenesysCloudFullApiOperationArgs<"getOutboundCampaignrules">): Promise<GenesysCloudFullApiOperationResponseMap["getOutboundCampaignrules"]>;
  GetOutboundCampaigns(...args: GenesysCloudFullApiOperationArgs<"getOutboundCampaigns">): Promise<GenesysCloudFullApiOperationResponseMap["getOutboundCampaigns"]>;
  GetOutboundCampaignsAll(...args: GenesysCloudFullApiOperationArgs<"getOutboundCampaignsAll">): Promise<GenesysCloudFullApiOperationResponseMap["getOutboundCampaignsAll"]>;
  GetOutboundCampaignsAllDivisionviews(...args: GenesysCloudFullApiOperationArgs<"getOutboundCampaignsAllDivisionviews">): Promise<GenesysCloudFullApiOperationResponseMap["getOutboundCampaignsAllDivisionviews"]>;
  GetOutboundCampaignsDivisionview(...args: GenesysCloudFullApiOperationArgs<"getOutboundCampaignsDivisionview">): Promise<GenesysCloudFullApiOperationResponseMap["getOutboundCampaignsDivisionview"]>;
  GetOutboundCampaignsDivisionviews(...args: GenesysCloudFullApiOperationArgs<"getOutboundCampaignsDivisionviews">): Promise<GenesysCloudFullApiOperationResponseMap["getOutboundCampaignsDivisionviews"]>;
  GetOutboundCampaignSkillcombinations(...args: GenesysCloudFullApiOperationArgs<"getOutboundCampaignSkillcombinations">): Promise<GenesysCloudFullApiOperationResponseMap["getOutboundCampaignSkillcombinations"]>;
  GetOutboundCampaignStats(...args: GenesysCloudFullApiOperationArgs<"getOutboundCampaignStats">): Promise<GenesysCloudFullApiOperationResponseMap["getOutboundCampaignStats"]>;
  GetOutboundContactlist(...args: GenesysCloudFullApiOperationArgs<"getOutboundContactlist">): Promise<GenesysCloudFullApiOperationResponseMap["getOutboundContactlist"]>;
  GetOutboundContactlistContact(...args: GenesysCloudFullApiOperationArgs<"getOutboundContactlistContact">): Promise<GenesysCloudFullApiOperationResponseMap["getOutboundContactlistContact"]>;
  GetOutboundContactlistContactsBulkJob(...args: GenesysCloudFullApiOperationArgs<"getOutboundContactlistContactsBulkJob">): Promise<GenesysCloudFullApiOperationResponseMap["getOutboundContactlistContactsBulkJob"]>;
  GetOutboundContactlistContactsBulkJobs(...args: GenesysCloudFullApiOperationArgs<"getOutboundContactlistContactsBulkJobs">): Promise<GenesysCloudFullApiOperationResponseMap["getOutboundContactlistContactsBulkJobs"]>;
  GetOutboundContactlistExport(...args: GenesysCloudFullApiOperationArgs<"getOutboundContactlistExport">): Promise<GenesysCloudFullApiOperationResponseMap["getOutboundContactlistExport"]>;
  GetOutboundContactlistfilter(...args: GenesysCloudFullApiOperationArgs<"getOutboundContactlistfilter">): Promise<GenesysCloudFullApiOperationResponseMap["getOutboundContactlistfilter"]>;
  GetOutboundContactlistfilters(...args: GenesysCloudFullApiOperationArgs<"getOutboundContactlistfilters">): Promise<GenesysCloudFullApiOperationResponseMap["getOutboundContactlistfilters"]>;
  GetOutboundContactlistImportstatus(...args: GenesysCloudFullApiOperationArgs<"getOutboundContactlistImportstatus">): Promise<GenesysCloudFullApiOperationResponseMap["getOutboundContactlistImportstatus"]>;
  GetOutboundContactlists(...args: GenesysCloudFullApiOperationArgs<"getOutboundContactlists">): Promise<GenesysCloudFullApiOperationResponseMap["getOutboundContactlists"]>;
  GetOutboundContactlistsDivisionview(...args: GenesysCloudFullApiOperationArgs<"getOutboundContactlistsDivisionview">): Promise<GenesysCloudFullApiOperationResponseMap["getOutboundContactlistsDivisionview"]>;
  GetOutboundContactlistsDivisionviews(...args: GenesysCloudFullApiOperationArgs<"getOutboundContactlistsDivisionviews">): Promise<GenesysCloudFullApiOperationResponseMap["getOutboundContactlistsDivisionviews"]>;
  GetOutboundContactlisttemplate(...args: GenesysCloudFullApiOperationArgs<"getOutboundContactlisttemplate">): Promise<GenesysCloudFullApiOperationResponseMap["getOutboundContactlisttemplate"]>;
  GetOutboundContactlisttemplates(...args: GenesysCloudFullApiOperationArgs<"getOutboundContactlisttemplates">): Promise<GenesysCloudFullApiOperationResponseMap["getOutboundContactlisttemplates"]>;
  GetOutboundContactlistTimezonemappingpreview(...args: GenesysCloudFullApiOperationArgs<"getOutboundContactlistTimezonemappingpreview">): Promise<GenesysCloudFullApiOperationResponseMap["getOutboundContactlistTimezonemappingpreview"]>;
  GetOutboundDiagnosticsCampaignSummary(...args: GenesysCloudFullApiOperationArgs<"getOutboundDiagnosticsCampaignSummary">): Promise<GenesysCloudFullApiOperationResponseMap["getOutboundDiagnosticsCampaignSummary"]>;
  GetOutboundDigitalruleset(...args: GenesysCloudFullApiOperationArgs<"getOutboundDigitalruleset">): Promise<GenesysCloudFullApiOperationResponseMap["getOutboundDigitalruleset"]>;
  GetOutboundDigitalrulesets(...args: GenesysCloudFullApiOperationArgs<"getOutboundDigitalrulesets">): Promise<GenesysCloudFullApiOperationResponseMap["getOutboundDigitalrulesets"]>;
  GetOutboundDnclist(...args: GenesysCloudFullApiOperationArgs<"getOutboundDnclist">): Promise<GenesysCloudFullApiOperationResponseMap["getOutboundDnclist"]>;
  GetOutboundDnclistExport(...args: GenesysCloudFullApiOperationArgs<"getOutboundDnclistExport">): Promise<GenesysCloudFullApiOperationResponseMap["getOutboundDnclistExport"]>;
  GetOutboundDnclistImportstatus(...args: GenesysCloudFullApiOperationArgs<"getOutboundDnclistImportstatus">): Promise<GenesysCloudFullApiOperationResponseMap["getOutboundDnclistImportstatus"]>;
  GetOutboundDnclists(...args: GenesysCloudFullApiOperationArgs<"getOutboundDnclists">): Promise<GenesysCloudFullApiOperationResponseMap["getOutboundDnclists"]>;
  GetOutboundDnclistsDivisionview(...args: GenesysCloudFullApiOperationArgs<"getOutboundDnclistsDivisionview">): Promise<GenesysCloudFullApiOperationResponseMap["getOutboundDnclistsDivisionview"]>;
  GetOutboundDnclistsDivisionviews(...args: GenesysCloudFullApiOperationArgs<"getOutboundDnclistsDivisionviews">): Promise<GenesysCloudFullApiOperationResponseMap["getOutboundDnclistsDivisionviews"]>;
  GetOutboundEvent(...args: GenesysCloudFullApiOperationArgs<"getOutboundEvent">): Promise<GenesysCloudFullApiOperationResponseMap["getOutboundEvent"]>;
  GetOutboundEvents(...args: GenesysCloudFullApiOperationArgs<"getOutboundEvents">): Promise<GenesysCloudFullApiOperationResponseMap["getOutboundEvents"]>;
  GetOutboundFilespecificationtemplate(...args: GenesysCloudFullApiOperationArgs<"getOutboundFilespecificationtemplate">): Promise<GenesysCloudFullApiOperationResponseMap["getOutboundFilespecificationtemplate"]>;
  GetOutboundFilespecificationtemplates(...args: GenesysCloudFullApiOperationArgs<"getOutboundFilespecificationtemplates">): Promise<GenesysCloudFullApiOperationResponseMap["getOutboundFilespecificationtemplates"]>;
}

export const GenesysCloudFullApiOutbound01GeneratedFunctionNames = [
  "DeleteOutboundAttemptlimit",
  "DeleteOutboundCallabletimeset",
  "DeleteOutboundCallanalysisresponseset",
  "DeleteOutboundCampaign",
  "DeleteOutboundCampaignProgress",
  "DeleteOutboundCampaignrule",
  "DeleteOutboundContactlist",
  "DeleteOutboundContactlistContact",
  "DeleteOutboundContactlistContacts",
  "DeleteOutboundContactlistfilter",
  "DeleteOutboundContactlists",
  "DeleteOutboundContactlisttemplate",
  "DeleteOutboundContactlisttemplates",
  "DeleteOutboundDigitalruleset",
  "DeleteOutboundDnclist",
  "DeleteOutboundDnclistCustomexclusioncolumns",
  "DeleteOutboundDnclistEmailaddresses",
  "DeleteOutboundDnclistPhonenumbers",
  "DeleteOutboundDnclistWhatsappnumbers",
  "DeleteOutboundFilespecificationtemplate",
  "DeleteOutboundFilespecificationtemplatesBulk",
  "DeleteOutboundImporttemplate",
  "DeleteOutboundImporttemplates",
  "DeleteOutboundMessagingcampaign",
  "DeleteOutboundMessagingcampaignProgress",
  "DeleteOutboundRuleset",
  "DeleteOutboundSchedulesCampaign",
  "DeleteOutboundSchedulesEmailcampaign",
  "DeleteOutboundSchedulesMessagingcampaign",
  "DeleteOutboundSchedulesSequence",
  "DeleteOutboundSchedulesWhatsappcampaign",
  "DeleteOutboundSequence",
  "GetOutboundAttemptlimit",
  "GetOutboundAttemptlimits",
  "GetOutboundCallabletimeset",
  "GetOutboundCallabletimesets",
  "GetOutboundCallanalysisresponseset",
  "GetOutboundCallanalysisresponsesets",
  "GetOutboundCampaign",
  "GetOutboundCampaignAgentownedmappingpreviewResults",
  "GetOutboundCampaignDiagnostics",
  "GetOutboundCampaignInteractions",
  "GetOutboundCampaignLinedistribution",
  "GetOutboundCampaignProgress",
  "GetOutboundCampaignrule",
  "GetOutboundCampaignrules",
  "GetOutboundCampaigns",
  "GetOutboundCampaignsAll",
  "GetOutboundCampaignsAllDivisionviews",
  "GetOutboundCampaignsDivisionview",
  "GetOutboundCampaignsDivisionviews",
  "GetOutboundCampaignSkillcombinations",
  "GetOutboundCampaignStats",
  "GetOutboundContactlist",
  "GetOutboundContactlistContact",
  "GetOutboundContactlistContactsBulkJob",
  "GetOutboundContactlistContactsBulkJobs",
  "GetOutboundContactlistExport",
  "GetOutboundContactlistfilter",
  "GetOutboundContactlistfilters",
  "GetOutboundContactlistImportstatus",
  "GetOutboundContactlists",
  "GetOutboundContactlistsDivisionview",
  "GetOutboundContactlistsDivisionviews",
  "GetOutboundContactlisttemplate",
  "GetOutboundContactlisttemplates",
  "GetOutboundContactlistTimezonemappingpreview",
  "GetOutboundDiagnosticsCampaignSummary",
  "GetOutboundDigitalruleset",
  "GetOutboundDigitalrulesets",
  "GetOutboundDnclist",
  "GetOutboundDnclistExport",
  "GetOutboundDnclistImportstatus",
  "GetOutboundDnclists",
  "GetOutboundDnclistsDivisionview",
  "GetOutboundDnclistsDivisionviews",
  "GetOutboundEvent",
  "GetOutboundEvents",
  "GetOutboundFilespecificationtemplate",
  "GetOutboundFilespecificationtemplates"
] as const satisfies readonly (keyof GenesysCloudFullApiOutbound01GeneratedClient)[];

export function createGenesysCloudFullApiOutbound01GeneratedClient(
  callOperation: GenesysCloudGeneratedOperationCaller,
): GenesysCloudFullApiOutbound01GeneratedClient {
  return {
    DeleteOutboundAttemptlimit: (...args) => callOperation("deleteOutboundAttemptlimit", ...(args as GenesysCloudFullApiOperationArgs<"deleteOutboundAttemptlimit">)),
    DeleteOutboundCallabletimeset: (...args) => callOperation("deleteOutboundCallabletimeset", ...(args as GenesysCloudFullApiOperationArgs<"deleteOutboundCallabletimeset">)),
    DeleteOutboundCallanalysisresponseset: (...args) => callOperation("deleteOutboundCallanalysisresponseset", ...(args as GenesysCloudFullApiOperationArgs<"deleteOutboundCallanalysisresponseset">)),
    DeleteOutboundCampaign: (...args) => callOperation("deleteOutboundCampaign", ...(args as GenesysCloudFullApiOperationArgs<"deleteOutboundCampaign">)),
    DeleteOutboundCampaignProgress: (...args) => callOperation("deleteOutboundCampaignProgress", ...(args as GenesysCloudFullApiOperationArgs<"deleteOutboundCampaignProgress">)),
    DeleteOutboundCampaignrule: (...args) => callOperation("deleteOutboundCampaignrule", ...(args as GenesysCloudFullApiOperationArgs<"deleteOutboundCampaignrule">)),
    DeleteOutboundContactlist: (...args) => callOperation("deleteOutboundContactlist", ...(args as GenesysCloudFullApiOperationArgs<"deleteOutboundContactlist">)),
    DeleteOutboundContactlistContact: (...args) => callOperation("deleteOutboundContactlistContact", ...(args as GenesysCloudFullApiOperationArgs<"deleteOutboundContactlistContact">)),
    DeleteOutboundContactlistContacts: (...args) => callOperation("deleteOutboundContactlistContacts", ...(args as GenesysCloudFullApiOperationArgs<"deleteOutboundContactlistContacts">)),
    DeleteOutboundContactlistfilter: (...args) => callOperation("deleteOutboundContactlistfilter", ...(args as GenesysCloudFullApiOperationArgs<"deleteOutboundContactlistfilter">)),
    DeleteOutboundContactlists: (...args) => callOperation("deleteOutboundContactlists", ...(args as GenesysCloudFullApiOperationArgs<"deleteOutboundContactlists">)),
    DeleteOutboundContactlisttemplate: (...args) => callOperation("deleteOutboundContactlisttemplate", ...(args as GenesysCloudFullApiOperationArgs<"deleteOutboundContactlisttemplate">)),
    DeleteOutboundContactlisttemplates: (...args) => callOperation("deleteOutboundContactlisttemplates", ...(args as GenesysCloudFullApiOperationArgs<"deleteOutboundContactlisttemplates">)),
    DeleteOutboundDigitalruleset: (...args) => callOperation("deleteOutboundDigitalruleset", ...(args as GenesysCloudFullApiOperationArgs<"deleteOutboundDigitalruleset">)),
    DeleteOutboundDnclist: (...args) => callOperation("deleteOutboundDnclist", ...(args as GenesysCloudFullApiOperationArgs<"deleteOutboundDnclist">)),
    DeleteOutboundDnclistCustomexclusioncolumns: (...args) => callOperation("deleteOutboundDnclistCustomexclusioncolumns", ...(args as GenesysCloudFullApiOperationArgs<"deleteOutboundDnclistCustomexclusioncolumns">)),
    DeleteOutboundDnclistEmailaddresses: (...args) => callOperation("deleteOutboundDnclistEmailaddresses", ...(args as GenesysCloudFullApiOperationArgs<"deleteOutboundDnclistEmailaddresses">)),
    DeleteOutboundDnclistPhonenumbers: (...args) => callOperation("deleteOutboundDnclistPhonenumbers", ...(args as GenesysCloudFullApiOperationArgs<"deleteOutboundDnclistPhonenumbers">)),
    DeleteOutboundDnclistWhatsappnumbers: (...args) => callOperation("deleteOutboundDnclistWhatsappnumbers", ...(args as GenesysCloudFullApiOperationArgs<"deleteOutboundDnclistWhatsappnumbers">)),
    DeleteOutboundFilespecificationtemplate: (...args) => callOperation("deleteOutboundFilespecificationtemplate", ...(args as GenesysCloudFullApiOperationArgs<"deleteOutboundFilespecificationtemplate">)),
    DeleteOutboundFilespecificationtemplatesBulk: (...args) => callOperation("deleteOutboundFilespecificationtemplatesBulk", ...(args as GenesysCloudFullApiOperationArgs<"deleteOutboundFilespecificationtemplatesBulk">)),
    DeleteOutboundImporttemplate: (...args) => callOperation("deleteOutboundImporttemplate", ...(args as GenesysCloudFullApiOperationArgs<"deleteOutboundImporttemplate">)),
    DeleteOutboundImporttemplates: (...args) => callOperation("deleteOutboundImporttemplates", ...(args as GenesysCloudFullApiOperationArgs<"deleteOutboundImporttemplates">)),
    DeleteOutboundMessagingcampaign: (...args) => callOperation("deleteOutboundMessagingcampaign", ...(args as GenesysCloudFullApiOperationArgs<"deleteOutboundMessagingcampaign">)),
    DeleteOutboundMessagingcampaignProgress: (...args) => callOperation("deleteOutboundMessagingcampaignProgress", ...(args as GenesysCloudFullApiOperationArgs<"deleteOutboundMessagingcampaignProgress">)),
    DeleteOutboundRuleset: (...args) => callOperation("deleteOutboundRuleset", ...(args as GenesysCloudFullApiOperationArgs<"deleteOutboundRuleset">)),
    DeleteOutboundSchedulesCampaign: (...args) => callOperation("deleteOutboundSchedulesCampaign", ...(args as GenesysCloudFullApiOperationArgs<"deleteOutboundSchedulesCampaign">)),
    DeleteOutboundSchedulesEmailcampaign: (...args) => callOperation("deleteOutboundSchedulesEmailcampaign", ...(args as GenesysCloudFullApiOperationArgs<"deleteOutboundSchedulesEmailcampaign">)),
    DeleteOutboundSchedulesMessagingcampaign: (...args) => callOperation("deleteOutboundSchedulesMessagingcampaign", ...(args as GenesysCloudFullApiOperationArgs<"deleteOutboundSchedulesMessagingcampaign">)),
    DeleteOutboundSchedulesSequence: (...args) => callOperation("deleteOutboundSchedulesSequence", ...(args as GenesysCloudFullApiOperationArgs<"deleteOutboundSchedulesSequence">)),
    DeleteOutboundSchedulesWhatsappcampaign: (...args) => callOperation("deleteOutboundSchedulesWhatsappcampaign", ...(args as GenesysCloudFullApiOperationArgs<"deleteOutboundSchedulesWhatsappcampaign">)),
    DeleteOutboundSequence: (...args) => callOperation("deleteOutboundSequence", ...(args as GenesysCloudFullApiOperationArgs<"deleteOutboundSequence">)),
    GetOutboundAttemptlimit: (...args) => callOperation("getOutboundAttemptlimit", ...(args as GenesysCloudFullApiOperationArgs<"getOutboundAttemptlimit">)),
    GetOutboundAttemptlimits: (...args) => callOperation("getOutboundAttemptlimits", ...(args as GenesysCloudFullApiOperationArgs<"getOutboundAttemptlimits">)),
    GetOutboundCallabletimeset: (...args) => callOperation("getOutboundCallabletimeset", ...(args as GenesysCloudFullApiOperationArgs<"getOutboundCallabletimeset">)),
    GetOutboundCallabletimesets: (...args) => callOperation("getOutboundCallabletimesets", ...(args as GenesysCloudFullApiOperationArgs<"getOutboundCallabletimesets">)),
    GetOutboundCallanalysisresponseset: (...args) => callOperation("getOutboundCallanalysisresponseset", ...(args as GenesysCloudFullApiOperationArgs<"getOutboundCallanalysisresponseset">)),
    GetOutboundCallanalysisresponsesets: (...args) => callOperation("getOutboundCallanalysisresponsesets", ...(args as GenesysCloudFullApiOperationArgs<"getOutboundCallanalysisresponsesets">)),
    GetOutboundCampaign: (...args) => callOperation("getOutboundCampaign", ...(args as GenesysCloudFullApiOperationArgs<"getOutboundCampaign">)),
    GetOutboundCampaignAgentownedmappingpreviewResults: (...args) => callOperation("getOutboundCampaignAgentownedmappingpreviewResults", ...(args as GenesysCloudFullApiOperationArgs<"getOutboundCampaignAgentownedmappingpreviewResults">)),
    GetOutboundCampaignDiagnostics: (...args) => callOperation("getOutboundCampaignDiagnostics", ...(args as GenesysCloudFullApiOperationArgs<"getOutboundCampaignDiagnostics">)),
    GetOutboundCampaignInteractions: (...args) => callOperation("getOutboundCampaignInteractions", ...(args as GenesysCloudFullApiOperationArgs<"getOutboundCampaignInteractions">)),
    GetOutboundCampaignLinedistribution: (...args) => callOperation("getOutboundCampaignLinedistribution", ...(args as GenesysCloudFullApiOperationArgs<"getOutboundCampaignLinedistribution">)),
    GetOutboundCampaignProgress: (...args) => callOperation("getOutboundCampaignProgress", ...(args as GenesysCloudFullApiOperationArgs<"getOutboundCampaignProgress">)),
    GetOutboundCampaignrule: (...args) => callOperation("getOutboundCampaignrule", ...(args as GenesysCloudFullApiOperationArgs<"getOutboundCampaignrule">)),
    GetOutboundCampaignrules: (...args) => callOperation("getOutboundCampaignrules", ...(args as GenesysCloudFullApiOperationArgs<"getOutboundCampaignrules">)),
    GetOutboundCampaigns: (...args) => callOperation("getOutboundCampaigns", ...(args as GenesysCloudFullApiOperationArgs<"getOutboundCampaigns">)),
    GetOutboundCampaignsAll: (...args) => callOperation("getOutboundCampaignsAll", ...(args as GenesysCloudFullApiOperationArgs<"getOutboundCampaignsAll">)),
    GetOutboundCampaignsAllDivisionviews: (...args) => callOperation("getOutboundCampaignsAllDivisionviews", ...(args as GenesysCloudFullApiOperationArgs<"getOutboundCampaignsAllDivisionviews">)),
    GetOutboundCampaignsDivisionview: (...args) => callOperation("getOutboundCampaignsDivisionview", ...(args as GenesysCloudFullApiOperationArgs<"getOutboundCampaignsDivisionview">)),
    GetOutboundCampaignsDivisionviews: (...args) => callOperation("getOutboundCampaignsDivisionviews", ...(args as GenesysCloudFullApiOperationArgs<"getOutboundCampaignsDivisionviews">)),
    GetOutboundCampaignSkillcombinations: (...args) => callOperation("getOutboundCampaignSkillcombinations", ...(args as GenesysCloudFullApiOperationArgs<"getOutboundCampaignSkillcombinations">)),
    GetOutboundCampaignStats: (...args) => callOperation("getOutboundCampaignStats", ...(args as GenesysCloudFullApiOperationArgs<"getOutboundCampaignStats">)),
    GetOutboundContactlist: (...args) => callOperation("getOutboundContactlist", ...(args as GenesysCloudFullApiOperationArgs<"getOutboundContactlist">)),
    GetOutboundContactlistContact: (...args) => callOperation("getOutboundContactlistContact", ...(args as GenesysCloudFullApiOperationArgs<"getOutboundContactlistContact">)),
    GetOutboundContactlistContactsBulkJob: (...args) => callOperation("getOutboundContactlistContactsBulkJob", ...(args as GenesysCloudFullApiOperationArgs<"getOutboundContactlistContactsBulkJob">)),
    GetOutboundContactlistContactsBulkJobs: (...args) => callOperation("getOutboundContactlistContactsBulkJobs", ...(args as GenesysCloudFullApiOperationArgs<"getOutboundContactlistContactsBulkJobs">)),
    GetOutboundContactlistExport: (...args) => callOperation("getOutboundContactlistExport", ...(args as GenesysCloudFullApiOperationArgs<"getOutboundContactlistExport">)),
    GetOutboundContactlistfilter: (...args) => callOperation("getOutboundContactlistfilter", ...(args as GenesysCloudFullApiOperationArgs<"getOutboundContactlistfilter">)),
    GetOutboundContactlistfilters: (...args) => callOperation("getOutboundContactlistfilters", ...(args as GenesysCloudFullApiOperationArgs<"getOutboundContactlistfilters">)),
    GetOutboundContactlistImportstatus: (...args) => callOperation("getOutboundContactlistImportstatus", ...(args as GenesysCloudFullApiOperationArgs<"getOutboundContactlistImportstatus">)),
    GetOutboundContactlists: (...args) => callOperation("getOutboundContactlists", ...(args as GenesysCloudFullApiOperationArgs<"getOutboundContactlists">)),
    GetOutboundContactlistsDivisionview: (...args) => callOperation("getOutboundContactlistsDivisionview", ...(args as GenesysCloudFullApiOperationArgs<"getOutboundContactlistsDivisionview">)),
    GetOutboundContactlistsDivisionviews: (...args) => callOperation("getOutboundContactlistsDivisionviews", ...(args as GenesysCloudFullApiOperationArgs<"getOutboundContactlistsDivisionviews">)),
    GetOutboundContactlisttemplate: (...args) => callOperation("getOutboundContactlisttemplate", ...(args as GenesysCloudFullApiOperationArgs<"getOutboundContactlisttemplate">)),
    GetOutboundContactlisttemplates: (...args) => callOperation("getOutboundContactlisttemplates", ...(args as GenesysCloudFullApiOperationArgs<"getOutboundContactlisttemplates">)),
    GetOutboundContactlistTimezonemappingpreview: (...args) => callOperation("getOutboundContactlistTimezonemappingpreview", ...(args as GenesysCloudFullApiOperationArgs<"getOutboundContactlistTimezonemappingpreview">)),
    GetOutboundDiagnosticsCampaignSummary: (...args) => callOperation("getOutboundDiagnosticsCampaignSummary", ...(args as GenesysCloudFullApiOperationArgs<"getOutboundDiagnosticsCampaignSummary">)),
    GetOutboundDigitalruleset: (...args) => callOperation("getOutboundDigitalruleset", ...(args as GenesysCloudFullApiOperationArgs<"getOutboundDigitalruleset">)),
    GetOutboundDigitalrulesets: (...args) => callOperation("getOutboundDigitalrulesets", ...(args as GenesysCloudFullApiOperationArgs<"getOutboundDigitalrulesets">)),
    GetOutboundDnclist: (...args) => callOperation("getOutboundDnclist", ...(args as GenesysCloudFullApiOperationArgs<"getOutboundDnclist">)),
    GetOutboundDnclistExport: (...args) => callOperation("getOutboundDnclistExport", ...(args as GenesysCloudFullApiOperationArgs<"getOutboundDnclistExport">)),
    GetOutboundDnclistImportstatus: (...args) => callOperation("getOutboundDnclistImportstatus", ...(args as GenesysCloudFullApiOperationArgs<"getOutboundDnclistImportstatus">)),
    GetOutboundDnclists: (...args) => callOperation("getOutboundDnclists", ...(args as GenesysCloudFullApiOperationArgs<"getOutboundDnclists">)),
    GetOutboundDnclistsDivisionview: (...args) => callOperation("getOutboundDnclistsDivisionview", ...(args as GenesysCloudFullApiOperationArgs<"getOutboundDnclistsDivisionview">)),
    GetOutboundDnclistsDivisionviews: (...args) => callOperation("getOutboundDnclistsDivisionviews", ...(args as GenesysCloudFullApiOperationArgs<"getOutboundDnclistsDivisionviews">)),
    GetOutboundEvent: (...args) => callOperation("getOutboundEvent", ...(args as GenesysCloudFullApiOperationArgs<"getOutboundEvent">)),
    GetOutboundEvents: (...args) => callOperation("getOutboundEvents", ...(args as GenesysCloudFullApiOperationArgs<"getOutboundEvents">)),
    GetOutboundFilespecificationtemplate: (...args) => callOperation("getOutboundFilespecificationtemplate", ...(args as GenesysCloudFullApiOperationArgs<"getOutboundFilespecificationtemplate">)),
    GetOutboundFilespecificationtemplates: (...args) => callOperation("getOutboundFilespecificationtemplates", ...(args as GenesysCloudFullApiOperationArgs<"getOutboundFilespecificationtemplates">)),
  };
}
