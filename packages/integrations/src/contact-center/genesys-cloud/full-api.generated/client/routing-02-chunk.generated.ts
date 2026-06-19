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
export const GenesysCloudFullApiRouting02OperationKeys = [
  "getRoutingSmsAddresses",
  "getRoutingSmsAvailablephonenumbers",
  "getRoutingSmsIdentityresolutionPhonenumber",
  "getRoutingSmsPhonenumber",
  "getRoutingSmsPhonenumbers",
  "getRoutingUserDirectroutingbackupSettings",
  "getRoutingUserUtilization",
  "getRoutingUtilization",
  "getRoutingUtilizationLabel",
  "getRoutingUtilizationLabelAgents",
  "getRoutingUtilizationLabels",
  "getRoutingWrapupcode",
  "getRoutingWrapupcodes",
  "getRoutingWrapupcodesDivisionview",
  "getRoutingWrapupcodesDivisionviews",
  "getUserQueues",
  "getUserSkillgroups",
  "patchRoutingConversation",
  "patchRoutingEmailDomain",
  "patchRoutingEmailDomainValidate",
  "patchRoutingEmailOutboundDomain",
  "patchRoutingEmailSettingEmailSettingId",
  "patchRoutingPredictor",
  "patchRoutingQueueMember",
  "patchRoutingQueueMembers",
  "patchRoutingQueueUser",
  "patchRoutingQueueUsers",
  "patchRoutingSettingsContactcenter",
  "patchRoutingSettingsTranscription",
  "patchRoutingSkill",
  "patchRoutingSkillgroup",
  "patchRoutingSmsPhonenumber",
  "patchUserQueue",
  "patchUserQueues",
  "postRoutingAssessments",
  "postRoutingAssessmentsJobs",
  "postRoutingEmailDomainDkim",
  "postRoutingEmailDomainMailfrom",
  "postRoutingEmailDomainRoutes",
  "postRoutingEmailDomains",
  "postRoutingEmailDomainTestconnection",
  "postRoutingEmailDomainVerification",
  "postRoutingEmailOutboundDomains",
  "postRoutingEmailOutboundDomainsSimulated",
  "postRoutingEmailOutboundDomainTestconnection",
  "postRoutingEmailSetting",
  "postRoutingLanguages",
  "postRoutingPredictors",
  "postRoutingQueueMembers",
  "postRoutingQueues",
  "postRoutingQueueUsers",
  "postRoutingQueueWrapupcodes",
  "postRoutingSkillexpressionsValidate",
  "postRoutingSkillgroupMembersDivisions",
  "postRoutingSkillgroups",
  "postRoutingSkills",
  "postRoutingSmsAddresses",
  "postRoutingSmsPhonenumbers",
  "postRoutingSmsPhonenumbersImport",
  "postRoutingUtilizationLabels",
  "postRoutingWrapupcodes",
  "putRoutingDirectroutingbackupSettingsMe",
  "putRoutingEmailDomainRoute",
  "putRoutingEmailDomainRouteIdentityresolution",
  "putRoutingEmailOutboundDomainActivation",
  "putRoutingMessageRecipient",
  "putRoutingQueue",
  "putRoutingQueueIdentityresolution",
  "putRoutingSettings",
  "putRoutingSettingsTranscription",
  "putRoutingSmsIdentityresolutionPhonenumber",
  "putRoutingUserDirectroutingbackupSettings",
  "putRoutingUserUtilization",
  "putRoutingUtilization",
  "putRoutingUtilizationLabel",
  "putRoutingWrapupcode"
] as const;
export type GenesysCloudFullApiRouting02OperationKey = typeof GenesysCloudFullApiRouting02OperationKeys[number];
// End hardened literal operation keys.

export interface GenesysCloudFullApiRouting02OperationPathParamMap {
  "getRoutingSmsAddresses": {};
  "getRoutingSmsAvailablephonenumbers": {};
  "getRoutingSmsIdentityresolutionPhonenumber": { "addressId": GenesysCloudFullApiPathParamValue };
  "getRoutingSmsPhonenumber": { "phoneNumberId": GenesysCloudFullApiPathParamValue };
  "getRoutingSmsPhonenumbers": {};
  "getRoutingUserDirectroutingbackupSettings": { "userId": GenesysCloudFullApiPathParamValue };
  "getRoutingUserUtilization": { "userId": GenesysCloudFullApiPathParamValue };
  "getRoutingUtilization": {};
  "getRoutingUtilizationLabel": { "labelId": GenesysCloudFullApiPathParamValue };
  "getRoutingUtilizationLabelAgents": { "labelId": GenesysCloudFullApiPathParamValue };
  "getRoutingUtilizationLabels": {};
  "getRoutingWrapupcode": { "codeId": GenesysCloudFullApiPathParamValue };
  "getRoutingWrapupcodes": {};
  "getRoutingWrapupcodesDivisionview": { "codeId": GenesysCloudFullApiPathParamValue };
  "getRoutingWrapupcodesDivisionviews": {};
  "getUserQueues": { "userId": GenesysCloudFullApiPathParamValue };
  "getUserSkillgroups": { "userId": GenesysCloudFullApiPathParamValue };
  "patchRoutingConversation": { "conversationId": GenesysCloudFullApiPathParamValue };
  "patchRoutingEmailDomain": { "domainId": GenesysCloudFullApiPathParamValue };
  "patchRoutingEmailDomainValidate": { "domainId": GenesysCloudFullApiPathParamValue };
  "patchRoutingEmailOutboundDomain": { "domainId": GenesysCloudFullApiPathParamValue };
  "patchRoutingEmailSettingEmailSettingId": { "emailSettingId": GenesysCloudFullApiPathParamValue };
  "patchRoutingPredictor": { "predictorId": GenesysCloudFullApiPathParamValue };
  "patchRoutingQueueMember": { "queueId": GenesysCloudFullApiPathParamValue; "memberId": GenesysCloudFullApiPathParamValue };
  "patchRoutingQueueMembers": { "queueId": GenesysCloudFullApiPathParamValue };
  "patchRoutingQueueUser": { "queueId": GenesysCloudFullApiPathParamValue; "memberId": GenesysCloudFullApiPathParamValue };
  "patchRoutingQueueUsers": { "queueId": GenesysCloudFullApiPathParamValue };
  "patchRoutingSettingsContactcenter": {};
  "patchRoutingSettingsTranscription": {};
  "patchRoutingSkill": { "skillId": GenesysCloudFullApiPathParamValue };
  "patchRoutingSkillgroup": { "skillGroupId": GenesysCloudFullApiPathParamValue };
  "patchRoutingSmsPhonenumber": { "phoneNumberId": GenesysCloudFullApiPathParamValue };
  "patchUserQueue": { "userId": GenesysCloudFullApiPathParamValue; "queueId": GenesysCloudFullApiPathParamValue };
  "patchUserQueues": { "userId": GenesysCloudFullApiPathParamValue };
  "postRoutingAssessments": {};
  "postRoutingAssessmentsJobs": {};
  "postRoutingEmailDomainDkim": { "domainId": GenesysCloudFullApiPathParamValue };
  "postRoutingEmailDomainMailfrom": { "domainId": GenesysCloudFullApiPathParamValue };
  "postRoutingEmailDomainRoutes": { "domainName": GenesysCloudFullApiPathParamValue };
  "postRoutingEmailDomains": {};
  "postRoutingEmailDomainTestconnection": { "domainId": GenesysCloudFullApiPathParamValue };
  "postRoutingEmailDomainVerification": { "domainId": GenesysCloudFullApiPathParamValue };
  "postRoutingEmailOutboundDomains": {};
  "postRoutingEmailOutboundDomainsSimulated": {};
  "postRoutingEmailOutboundDomainTestconnection": { "domainId": GenesysCloudFullApiPathParamValue };
  "postRoutingEmailSetting": {};
  "postRoutingLanguages": {};
  "postRoutingPredictors": {};
  "postRoutingQueueMembers": { "queueId": GenesysCloudFullApiPathParamValue };
  "postRoutingQueues": {};
  "postRoutingQueueUsers": { "queueId": GenesysCloudFullApiPathParamValue };
  "postRoutingQueueWrapupcodes": { "queueId": GenesysCloudFullApiPathParamValue };
  "postRoutingSkillexpressionsValidate": {};
  "postRoutingSkillgroupMembersDivisions": { "skillGroupId": GenesysCloudFullApiPathParamValue };
  "postRoutingSkillgroups": {};
  "postRoutingSkills": {};
  "postRoutingSmsAddresses": {};
  "postRoutingSmsPhonenumbers": {};
  "postRoutingSmsPhonenumbersImport": {};
  "postRoutingUtilizationLabels": {};
  "postRoutingWrapupcodes": {};
  "putRoutingDirectroutingbackupSettingsMe": {};
  "putRoutingEmailDomainRoute": { "domainName": GenesysCloudFullApiPathParamValue; "routeId": GenesysCloudFullApiPathParamValue };
  "putRoutingEmailDomainRouteIdentityresolution": { "domainName": GenesysCloudFullApiPathParamValue; "routeId": GenesysCloudFullApiPathParamValue };
  "putRoutingEmailOutboundDomainActivation": { "domainId": GenesysCloudFullApiPathParamValue };
  "putRoutingMessageRecipient": { "recipientId": GenesysCloudFullApiPathParamValue };
  "putRoutingQueue": { "queueId": GenesysCloudFullApiPathParamValue };
  "putRoutingQueueIdentityresolution": { "queueId": GenesysCloudFullApiPathParamValue };
  "putRoutingSettings": {};
  "putRoutingSettingsTranscription": {};
  "putRoutingSmsIdentityresolutionPhonenumber": { "addressId": GenesysCloudFullApiPathParamValue };
  "putRoutingUserDirectroutingbackupSettings": { "userId": GenesysCloudFullApiPathParamValue };
  "putRoutingUserUtilization": { "userId": GenesysCloudFullApiPathParamValue };
  "putRoutingUtilization": {};
  "putRoutingUtilizationLabel": { "labelId": GenesysCloudFullApiPathParamValue };
  "putRoutingWrapupcode": { "codeId": GenesysCloudFullApiPathParamValue };
}

export interface GenesysCloudFullApiRouting02OperationRequestMap {
  "getRoutingSmsAddresses": GenesysCloudFullApiOperationInput<"getRoutingSmsAddresses">;
  "getRoutingSmsAvailablephonenumbers": GenesysCloudFullApiOperationInput<"getRoutingSmsAvailablephonenumbers">;
  "getRoutingSmsIdentityresolutionPhonenumber": GenesysCloudFullApiOperationInput<"getRoutingSmsIdentityresolutionPhonenumber">;
  "getRoutingSmsPhonenumber": GenesysCloudFullApiOperationInput<"getRoutingSmsPhonenumber">;
  "getRoutingSmsPhonenumbers": GenesysCloudFullApiOperationInput<"getRoutingSmsPhonenumbers">;
  "getRoutingUserDirectroutingbackupSettings": GenesysCloudFullApiOperationInput<"getRoutingUserDirectroutingbackupSettings">;
  "getRoutingUserUtilization": GenesysCloudFullApiOperationInput<"getRoutingUserUtilization">;
  "getRoutingUtilization": GenesysCloudFullApiOperationInput<"getRoutingUtilization">;
  "getRoutingUtilizationLabel": GenesysCloudFullApiOperationInput<"getRoutingUtilizationLabel">;
  "getRoutingUtilizationLabelAgents": GenesysCloudFullApiOperationInput<"getRoutingUtilizationLabelAgents">;
  "getRoutingUtilizationLabels": GenesysCloudFullApiOperationInput<"getRoutingUtilizationLabels">;
  "getRoutingWrapupcode": GenesysCloudFullApiOperationInput<"getRoutingWrapupcode">;
  "getRoutingWrapupcodes": GenesysCloudFullApiOperationInput<"getRoutingWrapupcodes">;
  "getRoutingWrapupcodesDivisionview": GenesysCloudFullApiOperationInput<"getRoutingWrapupcodesDivisionview">;
  "getRoutingWrapupcodesDivisionviews": GenesysCloudFullApiOperationInput<"getRoutingWrapupcodesDivisionviews">;
  "getUserQueues": GenesysCloudFullApiOperationInput<"getUserQueues">;
  "getUserSkillgroups": GenesysCloudFullApiOperationInput<"getUserSkillgroups">;
  "patchRoutingConversation": GenesysCloudFullApiOperationInput<"patchRoutingConversation">;
  "patchRoutingEmailDomain": GenesysCloudFullApiOperationInput<"patchRoutingEmailDomain">;
  "patchRoutingEmailDomainValidate": GenesysCloudFullApiOperationInput<"patchRoutingEmailDomainValidate">;
  "patchRoutingEmailOutboundDomain": GenesysCloudFullApiOperationInput<"patchRoutingEmailOutboundDomain">;
  "patchRoutingEmailSettingEmailSettingId": GenesysCloudFullApiOperationInput<"patchRoutingEmailSettingEmailSettingId">;
  "patchRoutingPredictor": GenesysCloudFullApiOperationInput<"patchRoutingPredictor">;
  "patchRoutingQueueMember": GenesysCloudFullApiOperationInput<"patchRoutingQueueMember">;
  "patchRoutingQueueMembers": GenesysCloudFullApiOperationInput<"patchRoutingQueueMembers">;
  "patchRoutingQueueUser": GenesysCloudFullApiOperationInput<"patchRoutingQueueUser">;
  "patchRoutingQueueUsers": GenesysCloudFullApiOperationInput<"patchRoutingQueueUsers">;
  "patchRoutingSettingsContactcenter": GenesysCloudFullApiOperationInput<"patchRoutingSettingsContactcenter">;
  "patchRoutingSettingsTranscription": GenesysCloudFullApiOperationInput<"patchRoutingSettingsTranscription">;
  "patchRoutingSkill": GenesysCloudFullApiOperationInput<"patchRoutingSkill">;
  "patchRoutingSkillgroup": GenesysCloudFullApiOperationInput<"patchRoutingSkillgroup">;
  "patchRoutingSmsPhonenumber": GenesysCloudFullApiOperationInput<"patchRoutingSmsPhonenumber">;
  "patchUserQueue": GenesysCloudFullApiOperationInput<"patchUserQueue">;
  "patchUserQueues": GenesysCloudFullApiOperationInput<"patchUserQueues">;
  "postRoutingAssessments": GenesysCloudFullApiOperationInput<"postRoutingAssessments">;
  "postRoutingAssessmentsJobs": GenesysCloudFullApiOperationInput<"postRoutingAssessmentsJobs">;
  "postRoutingEmailDomainDkim": GenesysCloudFullApiOperationInput<"postRoutingEmailDomainDkim">;
  "postRoutingEmailDomainMailfrom": GenesysCloudFullApiOperationInput<"postRoutingEmailDomainMailfrom">;
  "postRoutingEmailDomainRoutes": GenesysCloudFullApiOperationInput<"postRoutingEmailDomainRoutes">;
  "postRoutingEmailDomains": GenesysCloudFullApiOperationInput<"postRoutingEmailDomains">;
  "postRoutingEmailDomainTestconnection": GenesysCloudFullApiOperationInput<"postRoutingEmailDomainTestconnection">;
  "postRoutingEmailDomainVerification": GenesysCloudFullApiOperationInput<"postRoutingEmailDomainVerification">;
  "postRoutingEmailOutboundDomains": GenesysCloudFullApiOperationInput<"postRoutingEmailOutboundDomains">;
  "postRoutingEmailOutboundDomainsSimulated": GenesysCloudFullApiOperationInput<"postRoutingEmailOutboundDomainsSimulated">;
  "postRoutingEmailOutboundDomainTestconnection": GenesysCloudFullApiOperationInput<"postRoutingEmailOutboundDomainTestconnection">;
  "postRoutingEmailSetting": GenesysCloudFullApiOperationInput<"postRoutingEmailSetting">;
  "postRoutingLanguages": GenesysCloudFullApiOperationInput<"postRoutingLanguages">;
  "postRoutingPredictors": GenesysCloudFullApiOperationInput<"postRoutingPredictors">;
  "postRoutingQueueMembers": GenesysCloudFullApiOperationInput<"postRoutingQueueMembers">;
  "postRoutingQueues": GenesysCloudFullApiOperationInput<"postRoutingQueues">;
  "postRoutingQueueUsers": GenesysCloudFullApiOperationInput<"postRoutingQueueUsers">;
  "postRoutingQueueWrapupcodes": GenesysCloudFullApiOperationInput<"postRoutingQueueWrapupcodes">;
  "postRoutingSkillexpressionsValidate": GenesysCloudFullApiOperationInput<"postRoutingSkillexpressionsValidate">;
  "postRoutingSkillgroupMembersDivisions": GenesysCloudFullApiOperationInput<"postRoutingSkillgroupMembersDivisions">;
  "postRoutingSkillgroups": GenesysCloudFullApiOperationInput<"postRoutingSkillgroups">;
  "postRoutingSkills": GenesysCloudFullApiOperationInput<"postRoutingSkills">;
  "postRoutingSmsAddresses": GenesysCloudFullApiOperationInput<"postRoutingSmsAddresses">;
  "postRoutingSmsPhonenumbers": GenesysCloudFullApiOperationInput<"postRoutingSmsPhonenumbers">;
  "postRoutingSmsPhonenumbersImport": GenesysCloudFullApiOperationInput<"postRoutingSmsPhonenumbersImport">;
  "postRoutingUtilizationLabels": GenesysCloudFullApiOperationInput<"postRoutingUtilizationLabels">;
  "postRoutingWrapupcodes": GenesysCloudFullApiOperationInput<"postRoutingWrapupcodes">;
  "putRoutingDirectroutingbackupSettingsMe": GenesysCloudFullApiOperationInput<"putRoutingDirectroutingbackupSettingsMe">;
  "putRoutingEmailDomainRoute": GenesysCloudFullApiOperationInput<"putRoutingEmailDomainRoute">;
  "putRoutingEmailDomainRouteIdentityresolution": GenesysCloudFullApiOperationInput<"putRoutingEmailDomainRouteIdentityresolution">;
  "putRoutingEmailOutboundDomainActivation": GenesysCloudFullApiOperationInput<"putRoutingEmailOutboundDomainActivation">;
  "putRoutingMessageRecipient": GenesysCloudFullApiOperationInput<"putRoutingMessageRecipient">;
  "putRoutingQueue": GenesysCloudFullApiOperationInput<"putRoutingQueue">;
  "putRoutingQueueIdentityresolution": GenesysCloudFullApiOperationInput<"putRoutingQueueIdentityresolution">;
  "putRoutingSettings": GenesysCloudFullApiOperationInput<"putRoutingSettings">;
  "putRoutingSettingsTranscription": GenesysCloudFullApiOperationInput<"putRoutingSettingsTranscription">;
  "putRoutingSmsIdentityresolutionPhonenumber": GenesysCloudFullApiOperationInput<"putRoutingSmsIdentityresolutionPhonenumber">;
  "putRoutingUserDirectroutingbackupSettings": GenesysCloudFullApiOperationInput<"putRoutingUserDirectroutingbackupSettings">;
  "putRoutingUserUtilization": GenesysCloudFullApiOperationInput<"putRoutingUserUtilization">;
  "putRoutingUtilization": GenesysCloudFullApiOperationInput<"putRoutingUtilization">;
  "putRoutingUtilizationLabel": GenesysCloudFullApiOperationInput<"putRoutingUtilizationLabel">;
  "putRoutingWrapupcode": GenesysCloudFullApiOperationInput<"putRoutingWrapupcode">;
}

export interface GenesysCloudFullApiRouting02GeneratedClient {
  GetRoutingSmsAddresses(...args: GenesysCloudFullApiOperationArgs<"getRoutingSmsAddresses">): Promise<GenesysCloudFullApiOperationResponseMap["getRoutingSmsAddresses"]>;
  GetRoutingSmsAvailablephonenumbers(...args: GenesysCloudFullApiOperationArgs<"getRoutingSmsAvailablephonenumbers">): Promise<GenesysCloudFullApiOperationResponseMap["getRoutingSmsAvailablephonenumbers"]>;
  GetRoutingSmsIdentityresolutionPhonenumber(...args: GenesysCloudFullApiOperationArgs<"getRoutingSmsIdentityresolutionPhonenumber">): Promise<GenesysCloudFullApiOperationResponseMap["getRoutingSmsIdentityresolutionPhonenumber"]>;
  GetRoutingSmsPhonenumber(...args: GenesysCloudFullApiOperationArgs<"getRoutingSmsPhonenumber">): Promise<GenesysCloudFullApiOperationResponseMap["getRoutingSmsPhonenumber"]>;
  GetRoutingSmsPhonenumbers(...args: GenesysCloudFullApiOperationArgs<"getRoutingSmsPhonenumbers">): Promise<GenesysCloudFullApiOperationResponseMap["getRoutingSmsPhonenumbers"]>;
  GetRoutingUserDirectroutingbackupSettings(...args: GenesysCloudFullApiOperationArgs<"getRoutingUserDirectroutingbackupSettings">): Promise<GenesysCloudFullApiOperationResponseMap["getRoutingUserDirectroutingbackupSettings"]>;
  GetRoutingUserUtilization(...args: GenesysCloudFullApiOperationArgs<"getRoutingUserUtilization">): Promise<GenesysCloudFullApiOperationResponseMap["getRoutingUserUtilization"]>;
  GetRoutingUtilization(...args: GenesysCloudFullApiOperationArgs<"getRoutingUtilization">): Promise<GenesysCloudFullApiOperationResponseMap["getRoutingUtilization"]>;
  GetRoutingUtilizationLabel(...args: GenesysCloudFullApiOperationArgs<"getRoutingUtilizationLabel">): Promise<GenesysCloudFullApiOperationResponseMap["getRoutingUtilizationLabel"]>;
  GetRoutingUtilizationLabelAgents(...args: GenesysCloudFullApiOperationArgs<"getRoutingUtilizationLabelAgents">): Promise<GenesysCloudFullApiOperationResponseMap["getRoutingUtilizationLabelAgents"]>;
  GetRoutingUtilizationLabels(...args: GenesysCloudFullApiOperationArgs<"getRoutingUtilizationLabels">): Promise<GenesysCloudFullApiOperationResponseMap["getRoutingUtilizationLabels"]>;
  GetRoutingWrapupcode(...args: GenesysCloudFullApiOperationArgs<"getRoutingWrapupcode">): Promise<GenesysCloudFullApiOperationResponseMap["getRoutingWrapupcode"]>;
  GetRoutingWrapupcodes(...args: GenesysCloudFullApiOperationArgs<"getRoutingWrapupcodes">): Promise<GenesysCloudFullApiOperationResponseMap["getRoutingWrapupcodes"]>;
  GetRoutingWrapupcodesDivisionview(...args: GenesysCloudFullApiOperationArgs<"getRoutingWrapupcodesDivisionview">): Promise<GenesysCloudFullApiOperationResponseMap["getRoutingWrapupcodesDivisionview"]>;
  GetRoutingWrapupcodesDivisionviews(...args: GenesysCloudFullApiOperationArgs<"getRoutingWrapupcodesDivisionviews">): Promise<GenesysCloudFullApiOperationResponseMap["getRoutingWrapupcodesDivisionviews"]>;
  GetUserQueues(...args: GenesysCloudFullApiOperationArgs<"getUserQueues">): Promise<GenesysCloudFullApiOperationResponseMap["getUserQueues"]>;
  GetUserSkillgroups(...args: GenesysCloudFullApiOperationArgs<"getUserSkillgroups">): Promise<GenesysCloudFullApiOperationResponseMap["getUserSkillgroups"]>;
  PatchRoutingConversation(...args: GenesysCloudFullApiOperationArgs<"patchRoutingConversation">): Promise<GenesysCloudFullApiOperationResponseMap["patchRoutingConversation"]>;
  PatchRoutingEmailDomain(...args: GenesysCloudFullApiOperationArgs<"patchRoutingEmailDomain">): Promise<GenesysCloudFullApiOperationResponseMap["patchRoutingEmailDomain"]>;
  PatchRoutingEmailDomainValidate(...args: GenesysCloudFullApiOperationArgs<"patchRoutingEmailDomainValidate">): Promise<GenesysCloudFullApiOperationResponseMap["patchRoutingEmailDomainValidate"]>;
  PatchRoutingEmailOutboundDomain(...args: GenesysCloudFullApiOperationArgs<"patchRoutingEmailOutboundDomain">): Promise<GenesysCloudFullApiOperationResponseMap["patchRoutingEmailOutboundDomain"]>;
  PatchRoutingEmailSettingEmailSettingId(...args: GenesysCloudFullApiOperationArgs<"patchRoutingEmailSettingEmailSettingId">): Promise<GenesysCloudFullApiOperationResponseMap["patchRoutingEmailSettingEmailSettingId"]>;
  PatchRoutingPredictor(...args: GenesysCloudFullApiOperationArgs<"patchRoutingPredictor">): Promise<GenesysCloudFullApiOperationResponseMap["patchRoutingPredictor"]>;
  PatchRoutingQueueMember(...args: GenesysCloudFullApiOperationArgs<"patchRoutingQueueMember">): Promise<GenesysCloudFullApiOperationResponseMap["patchRoutingQueueMember"]>;
  PatchRoutingQueueMembers(...args: GenesysCloudFullApiOperationArgs<"patchRoutingQueueMembers">): Promise<GenesysCloudFullApiOperationResponseMap["patchRoutingQueueMembers"]>;
  PatchRoutingQueueUser(...args: GenesysCloudFullApiOperationArgs<"patchRoutingQueueUser">): Promise<GenesysCloudFullApiOperationResponseMap["patchRoutingQueueUser"]>;
  PatchRoutingQueueUsers(...args: GenesysCloudFullApiOperationArgs<"patchRoutingQueueUsers">): Promise<GenesysCloudFullApiOperationResponseMap["patchRoutingQueueUsers"]>;
  PatchRoutingSettingsContactcenter(...args: GenesysCloudFullApiOperationArgs<"patchRoutingSettingsContactcenter">): Promise<GenesysCloudFullApiOperationResponseMap["patchRoutingSettingsContactcenter"]>;
  PatchRoutingSettingsTranscription(...args: GenesysCloudFullApiOperationArgs<"patchRoutingSettingsTranscription">): Promise<GenesysCloudFullApiOperationResponseMap["patchRoutingSettingsTranscription"]>;
  PatchRoutingSkill(...args: GenesysCloudFullApiOperationArgs<"patchRoutingSkill">): Promise<GenesysCloudFullApiOperationResponseMap["patchRoutingSkill"]>;
  PatchRoutingSkillgroup(...args: GenesysCloudFullApiOperationArgs<"patchRoutingSkillgroup">): Promise<GenesysCloudFullApiOperationResponseMap["patchRoutingSkillgroup"]>;
  PatchRoutingSmsPhonenumber(...args: GenesysCloudFullApiOperationArgs<"patchRoutingSmsPhonenumber">): Promise<GenesysCloudFullApiOperationResponseMap["patchRoutingSmsPhonenumber"]>;
  PatchUserQueue(...args: GenesysCloudFullApiOperationArgs<"patchUserQueue">): Promise<GenesysCloudFullApiOperationResponseMap["patchUserQueue"]>;
  PatchUserQueues(...args: GenesysCloudFullApiOperationArgs<"patchUserQueues">): Promise<GenesysCloudFullApiOperationResponseMap["patchUserQueues"]>;
  PostRoutingAssessments(...args: GenesysCloudFullApiOperationArgs<"postRoutingAssessments">): Promise<GenesysCloudFullApiOperationResponseMap["postRoutingAssessments"]>;
  PostRoutingAssessmentsJobs(...args: GenesysCloudFullApiOperationArgs<"postRoutingAssessmentsJobs">): Promise<GenesysCloudFullApiOperationResponseMap["postRoutingAssessmentsJobs"]>;
  PostRoutingEmailDomainDkim(...args: GenesysCloudFullApiOperationArgs<"postRoutingEmailDomainDkim">): Promise<GenesysCloudFullApiOperationResponseMap["postRoutingEmailDomainDkim"]>;
  PostRoutingEmailDomainMailfrom(...args: GenesysCloudFullApiOperationArgs<"postRoutingEmailDomainMailfrom">): Promise<GenesysCloudFullApiOperationResponseMap["postRoutingEmailDomainMailfrom"]>;
  PostRoutingEmailDomainRoutes(...args: GenesysCloudFullApiOperationArgs<"postRoutingEmailDomainRoutes">): Promise<GenesysCloudFullApiOperationResponseMap["postRoutingEmailDomainRoutes"]>;
  PostRoutingEmailDomains(...args: GenesysCloudFullApiOperationArgs<"postRoutingEmailDomains">): Promise<GenesysCloudFullApiOperationResponseMap["postRoutingEmailDomains"]>;
  PostRoutingEmailDomainTestconnection(...args: GenesysCloudFullApiOperationArgs<"postRoutingEmailDomainTestconnection">): Promise<GenesysCloudFullApiOperationResponseMap["postRoutingEmailDomainTestconnection"]>;
  PostRoutingEmailDomainVerification(...args: GenesysCloudFullApiOperationArgs<"postRoutingEmailDomainVerification">): Promise<GenesysCloudFullApiOperationResponseMap["postRoutingEmailDomainVerification"]>;
  PostRoutingEmailOutboundDomains(...args: GenesysCloudFullApiOperationArgs<"postRoutingEmailOutboundDomains">): Promise<GenesysCloudFullApiOperationResponseMap["postRoutingEmailOutboundDomains"]>;
  PostRoutingEmailOutboundDomainsSimulated(...args: GenesysCloudFullApiOperationArgs<"postRoutingEmailOutboundDomainsSimulated">): Promise<GenesysCloudFullApiOperationResponseMap["postRoutingEmailOutboundDomainsSimulated"]>;
  PostRoutingEmailOutboundDomainTestconnection(...args: GenesysCloudFullApiOperationArgs<"postRoutingEmailOutboundDomainTestconnection">): Promise<GenesysCloudFullApiOperationResponseMap["postRoutingEmailOutboundDomainTestconnection"]>;
  PostRoutingEmailSetting(...args: GenesysCloudFullApiOperationArgs<"postRoutingEmailSetting">): Promise<GenesysCloudFullApiOperationResponseMap["postRoutingEmailSetting"]>;
  PostRoutingLanguages(...args: GenesysCloudFullApiOperationArgs<"postRoutingLanguages">): Promise<GenesysCloudFullApiOperationResponseMap["postRoutingLanguages"]>;
  PostRoutingPredictors(...args: GenesysCloudFullApiOperationArgs<"postRoutingPredictors">): Promise<GenesysCloudFullApiOperationResponseMap["postRoutingPredictors"]>;
  PostRoutingQueueMembers(...args: GenesysCloudFullApiOperationArgs<"postRoutingQueueMembers">): Promise<GenesysCloudFullApiOperationResponseMap["postRoutingQueueMembers"]>;
  PostRoutingQueues(...args: GenesysCloudFullApiOperationArgs<"postRoutingQueues">): Promise<GenesysCloudFullApiOperationResponseMap["postRoutingQueues"]>;
  PostRoutingQueueUsers(...args: GenesysCloudFullApiOperationArgs<"postRoutingQueueUsers">): Promise<GenesysCloudFullApiOperationResponseMap["postRoutingQueueUsers"]>;
  PostRoutingQueueWrapupcodes(...args: GenesysCloudFullApiOperationArgs<"postRoutingQueueWrapupcodes">): Promise<GenesysCloudFullApiOperationResponseMap["postRoutingQueueWrapupcodes"]>;
  PostRoutingSkillexpressionsValidate(...args: GenesysCloudFullApiOperationArgs<"postRoutingSkillexpressionsValidate">): Promise<GenesysCloudFullApiOperationResponseMap["postRoutingSkillexpressionsValidate"]>;
  PostRoutingSkillgroupMembersDivisions(...args: GenesysCloudFullApiOperationArgs<"postRoutingSkillgroupMembersDivisions">): Promise<GenesysCloudFullApiOperationResponseMap["postRoutingSkillgroupMembersDivisions"]>;
  PostRoutingSkillgroups(...args: GenesysCloudFullApiOperationArgs<"postRoutingSkillgroups">): Promise<GenesysCloudFullApiOperationResponseMap["postRoutingSkillgroups"]>;
  PostRoutingSkills(...args: GenesysCloudFullApiOperationArgs<"postRoutingSkills">): Promise<GenesysCloudFullApiOperationResponseMap["postRoutingSkills"]>;
  PostRoutingSmsAddresses(...args: GenesysCloudFullApiOperationArgs<"postRoutingSmsAddresses">): Promise<GenesysCloudFullApiOperationResponseMap["postRoutingSmsAddresses"]>;
  PostRoutingSmsPhonenumbers(...args: GenesysCloudFullApiOperationArgs<"postRoutingSmsPhonenumbers">): Promise<GenesysCloudFullApiOperationResponseMap["postRoutingSmsPhonenumbers"]>;
  PostRoutingSmsPhonenumbersImport(...args: GenesysCloudFullApiOperationArgs<"postRoutingSmsPhonenumbersImport">): Promise<GenesysCloudFullApiOperationResponseMap["postRoutingSmsPhonenumbersImport"]>;
  PostRoutingUtilizationLabels(...args: GenesysCloudFullApiOperationArgs<"postRoutingUtilizationLabels">): Promise<GenesysCloudFullApiOperationResponseMap["postRoutingUtilizationLabels"]>;
  PostRoutingWrapupcodes(...args: GenesysCloudFullApiOperationArgs<"postRoutingWrapupcodes">): Promise<GenesysCloudFullApiOperationResponseMap["postRoutingWrapupcodes"]>;
  PutRoutingDirectroutingbackupSettingsMe(...args: GenesysCloudFullApiOperationArgs<"putRoutingDirectroutingbackupSettingsMe">): Promise<GenesysCloudFullApiOperationResponseMap["putRoutingDirectroutingbackupSettingsMe"]>;
  PutRoutingEmailDomainRoute(...args: GenesysCloudFullApiOperationArgs<"putRoutingEmailDomainRoute">): Promise<GenesysCloudFullApiOperationResponseMap["putRoutingEmailDomainRoute"]>;
  PutRoutingEmailDomainRouteIdentityresolution(...args: GenesysCloudFullApiOperationArgs<"putRoutingEmailDomainRouteIdentityresolution">): Promise<GenesysCloudFullApiOperationResponseMap["putRoutingEmailDomainRouteIdentityresolution"]>;
  PutRoutingEmailOutboundDomainActivation(...args: GenesysCloudFullApiOperationArgs<"putRoutingEmailOutboundDomainActivation">): Promise<GenesysCloudFullApiOperationResponseMap["putRoutingEmailOutboundDomainActivation"]>;
  PutRoutingMessageRecipient(...args: GenesysCloudFullApiOperationArgs<"putRoutingMessageRecipient">): Promise<GenesysCloudFullApiOperationResponseMap["putRoutingMessageRecipient"]>;
  PutRoutingQueue(...args: GenesysCloudFullApiOperationArgs<"putRoutingQueue">): Promise<GenesysCloudFullApiOperationResponseMap["putRoutingQueue"]>;
  PutRoutingQueueIdentityresolution(...args: GenesysCloudFullApiOperationArgs<"putRoutingQueueIdentityresolution">): Promise<GenesysCloudFullApiOperationResponseMap["putRoutingQueueIdentityresolution"]>;
  PutRoutingSettings(...args: GenesysCloudFullApiOperationArgs<"putRoutingSettings">): Promise<GenesysCloudFullApiOperationResponseMap["putRoutingSettings"]>;
  PutRoutingSettingsTranscription(...args: GenesysCloudFullApiOperationArgs<"putRoutingSettingsTranscription">): Promise<GenesysCloudFullApiOperationResponseMap["putRoutingSettingsTranscription"]>;
  PutRoutingSmsIdentityresolutionPhonenumber(...args: GenesysCloudFullApiOperationArgs<"putRoutingSmsIdentityresolutionPhonenumber">): Promise<GenesysCloudFullApiOperationResponseMap["putRoutingSmsIdentityresolutionPhonenumber"]>;
  PutRoutingUserDirectroutingbackupSettings(...args: GenesysCloudFullApiOperationArgs<"putRoutingUserDirectroutingbackupSettings">): Promise<GenesysCloudFullApiOperationResponseMap["putRoutingUserDirectroutingbackupSettings"]>;
  PutRoutingUserUtilization(...args: GenesysCloudFullApiOperationArgs<"putRoutingUserUtilization">): Promise<GenesysCloudFullApiOperationResponseMap["putRoutingUserUtilization"]>;
  PutRoutingUtilization(...args: GenesysCloudFullApiOperationArgs<"putRoutingUtilization">): Promise<GenesysCloudFullApiOperationResponseMap["putRoutingUtilization"]>;
  PutRoutingUtilizationLabel(...args: GenesysCloudFullApiOperationArgs<"putRoutingUtilizationLabel">): Promise<GenesysCloudFullApiOperationResponseMap["putRoutingUtilizationLabel"]>;
  PutRoutingWrapupcode(...args: GenesysCloudFullApiOperationArgs<"putRoutingWrapupcode">): Promise<GenesysCloudFullApiOperationResponseMap["putRoutingWrapupcode"]>;
}

export const GenesysCloudFullApiRouting02GeneratedFunctionNames = [
  "GetRoutingSmsAddresses",
  "GetRoutingSmsAvailablephonenumbers",
  "GetRoutingSmsIdentityresolutionPhonenumber",
  "GetRoutingSmsPhonenumber",
  "GetRoutingSmsPhonenumbers",
  "GetRoutingUserDirectroutingbackupSettings",
  "GetRoutingUserUtilization",
  "GetRoutingUtilization",
  "GetRoutingUtilizationLabel",
  "GetRoutingUtilizationLabelAgents",
  "GetRoutingUtilizationLabels",
  "GetRoutingWrapupcode",
  "GetRoutingWrapupcodes",
  "GetRoutingWrapupcodesDivisionview",
  "GetRoutingWrapupcodesDivisionviews",
  "GetUserQueues",
  "GetUserSkillgroups",
  "PatchRoutingConversation",
  "PatchRoutingEmailDomain",
  "PatchRoutingEmailDomainValidate",
  "PatchRoutingEmailOutboundDomain",
  "PatchRoutingEmailSettingEmailSettingId",
  "PatchRoutingPredictor",
  "PatchRoutingQueueMember",
  "PatchRoutingQueueMembers",
  "PatchRoutingQueueUser",
  "PatchRoutingQueueUsers",
  "PatchRoutingSettingsContactcenter",
  "PatchRoutingSettingsTranscription",
  "PatchRoutingSkill",
  "PatchRoutingSkillgroup",
  "PatchRoutingSmsPhonenumber",
  "PatchUserQueue",
  "PatchUserQueues",
  "PostRoutingAssessments",
  "PostRoutingAssessmentsJobs",
  "PostRoutingEmailDomainDkim",
  "PostRoutingEmailDomainMailfrom",
  "PostRoutingEmailDomainRoutes",
  "PostRoutingEmailDomains",
  "PostRoutingEmailDomainTestconnection",
  "PostRoutingEmailDomainVerification",
  "PostRoutingEmailOutboundDomains",
  "PostRoutingEmailOutboundDomainsSimulated",
  "PostRoutingEmailOutboundDomainTestconnection",
  "PostRoutingEmailSetting",
  "PostRoutingLanguages",
  "PostRoutingPredictors",
  "PostRoutingQueueMembers",
  "PostRoutingQueues",
  "PostRoutingQueueUsers",
  "PostRoutingQueueWrapupcodes",
  "PostRoutingSkillexpressionsValidate",
  "PostRoutingSkillgroupMembersDivisions",
  "PostRoutingSkillgroups",
  "PostRoutingSkills",
  "PostRoutingSmsAddresses",
  "PostRoutingSmsPhonenumbers",
  "PostRoutingSmsPhonenumbersImport",
  "PostRoutingUtilizationLabels",
  "PostRoutingWrapupcodes",
  "PutRoutingDirectroutingbackupSettingsMe",
  "PutRoutingEmailDomainRoute",
  "PutRoutingEmailDomainRouteIdentityresolution",
  "PutRoutingEmailOutboundDomainActivation",
  "PutRoutingMessageRecipient",
  "PutRoutingQueue",
  "PutRoutingQueueIdentityresolution",
  "PutRoutingSettings",
  "PutRoutingSettingsTranscription",
  "PutRoutingSmsIdentityresolutionPhonenumber",
  "PutRoutingUserDirectroutingbackupSettings",
  "PutRoutingUserUtilization",
  "PutRoutingUtilization",
  "PutRoutingUtilizationLabel",
  "PutRoutingWrapupcode"
] as const satisfies readonly (keyof GenesysCloudFullApiRouting02GeneratedClient)[];

export function createGenesysCloudFullApiRouting02GeneratedClient(
  callOperation: GenesysCloudGeneratedOperationCaller,
): GenesysCloudFullApiRouting02GeneratedClient {
  return {
    GetRoutingSmsAddresses: (...args) => callOperation("getRoutingSmsAddresses", ...(args as GenesysCloudFullApiOperationArgs<"getRoutingSmsAddresses">)),
    GetRoutingSmsAvailablephonenumbers: (...args) => callOperation("getRoutingSmsAvailablephonenumbers", ...(args as GenesysCloudFullApiOperationArgs<"getRoutingSmsAvailablephonenumbers">)),
    GetRoutingSmsIdentityresolutionPhonenumber: (...args) => callOperation("getRoutingSmsIdentityresolutionPhonenumber", ...(args as GenesysCloudFullApiOperationArgs<"getRoutingSmsIdentityresolutionPhonenumber">)),
    GetRoutingSmsPhonenumber: (...args) => callOperation("getRoutingSmsPhonenumber", ...(args as GenesysCloudFullApiOperationArgs<"getRoutingSmsPhonenumber">)),
    GetRoutingSmsPhonenumbers: (...args) => callOperation("getRoutingSmsPhonenumbers", ...(args as GenesysCloudFullApiOperationArgs<"getRoutingSmsPhonenumbers">)),
    GetRoutingUserDirectroutingbackupSettings: (...args) => callOperation("getRoutingUserDirectroutingbackupSettings", ...(args as GenesysCloudFullApiOperationArgs<"getRoutingUserDirectroutingbackupSettings">)),
    GetRoutingUserUtilization: (...args) => callOperation("getRoutingUserUtilization", ...(args as GenesysCloudFullApiOperationArgs<"getRoutingUserUtilization">)),
    GetRoutingUtilization: (...args) => callOperation("getRoutingUtilization", ...(args as GenesysCloudFullApiOperationArgs<"getRoutingUtilization">)),
    GetRoutingUtilizationLabel: (...args) => callOperation("getRoutingUtilizationLabel", ...(args as GenesysCloudFullApiOperationArgs<"getRoutingUtilizationLabel">)),
    GetRoutingUtilizationLabelAgents: (...args) => callOperation("getRoutingUtilizationLabelAgents", ...(args as GenesysCloudFullApiOperationArgs<"getRoutingUtilizationLabelAgents">)),
    GetRoutingUtilizationLabels: (...args) => callOperation("getRoutingUtilizationLabels", ...(args as GenesysCloudFullApiOperationArgs<"getRoutingUtilizationLabels">)),
    GetRoutingWrapupcode: (...args) => callOperation("getRoutingWrapupcode", ...(args as GenesysCloudFullApiOperationArgs<"getRoutingWrapupcode">)),
    GetRoutingWrapupcodes: (...args) => callOperation("getRoutingWrapupcodes", ...(args as GenesysCloudFullApiOperationArgs<"getRoutingWrapupcodes">)),
    GetRoutingWrapupcodesDivisionview: (...args) => callOperation("getRoutingWrapupcodesDivisionview", ...(args as GenesysCloudFullApiOperationArgs<"getRoutingWrapupcodesDivisionview">)),
    GetRoutingWrapupcodesDivisionviews: (...args) => callOperation("getRoutingWrapupcodesDivisionviews", ...(args as GenesysCloudFullApiOperationArgs<"getRoutingWrapupcodesDivisionviews">)),
    GetUserQueues: (...args) => callOperation("getUserQueues", ...(args as GenesysCloudFullApiOperationArgs<"getUserQueues">)),
    GetUserSkillgroups: (...args) => callOperation("getUserSkillgroups", ...(args as GenesysCloudFullApiOperationArgs<"getUserSkillgroups">)),
    PatchRoutingConversation: (...args) => callOperation("patchRoutingConversation", ...(args as GenesysCloudFullApiOperationArgs<"patchRoutingConversation">)),
    PatchRoutingEmailDomain: (...args) => callOperation("patchRoutingEmailDomain", ...(args as GenesysCloudFullApiOperationArgs<"patchRoutingEmailDomain">)),
    PatchRoutingEmailDomainValidate: (...args) => callOperation("patchRoutingEmailDomainValidate", ...(args as GenesysCloudFullApiOperationArgs<"patchRoutingEmailDomainValidate">)),
    PatchRoutingEmailOutboundDomain: (...args) => callOperation("patchRoutingEmailOutboundDomain", ...(args as GenesysCloudFullApiOperationArgs<"patchRoutingEmailOutboundDomain">)),
    PatchRoutingEmailSettingEmailSettingId: (...args) => callOperation("patchRoutingEmailSettingEmailSettingId", ...(args as GenesysCloudFullApiOperationArgs<"patchRoutingEmailSettingEmailSettingId">)),
    PatchRoutingPredictor: (...args) => callOperation("patchRoutingPredictor", ...(args as GenesysCloudFullApiOperationArgs<"patchRoutingPredictor">)),
    PatchRoutingQueueMember: (...args) => callOperation("patchRoutingQueueMember", ...(args as GenesysCloudFullApiOperationArgs<"patchRoutingQueueMember">)),
    PatchRoutingQueueMembers: (...args) => callOperation("patchRoutingQueueMembers", ...(args as GenesysCloudFullApiOperationArgs<"patchRoutingQueueMembers">)),
    PatchRoutingQueueUser: (...args) => callOperation("patchRoutingQueueUser", ...(args as GenesysCloudFullApiOperationArgs<"patchRoutingQueueUser">)),
    PatchRoutingQueueUsers: (...args) => callOperation("patchRoutingQueueUsers", ...(args as GenesysCloudFullApiOperationArgs<"patchRoutingQueueUsers">)),
    PatchRoutingSettingsContactcenter: (...args) => callOperation("patchRoutingSettingsContactcenter", ...(args as GenesysCloudFullApiOperationArgs<"patchRoutingSettingsContactcenter">)),
    PatchRoutingSettingsTranscription: (...args) => callOperation("patchRoutingSettingsTranscription", ...(args as GenesysCloudFullApiOperationArgs<"patchRoutingSettingsTranscription">)),
    PatchRoutingSkill: (...args) => callOperation("patchRoutingSkill", ...(args as GenesysCloudFullApiOperationArgs<"patchRoutingSkill">)),
    PatchRoutingSkillgroup: (...args) => callOperation("patchRoutingSkillgroup", ...(args as GenesysCloudFullApiOperationArgs<"patchRoutingSkillgroup">)),
    PatchRoutingSmsPhonenumber: (...args) => callOperation("patchRoutingSmsPhonenumber", ...(args as GenesysCloudFullApiOperationArgs<"patchRoutingSmsPhonenumber">)),
    PatchUserQueue: (...args) => callOperation("patchUserQueue", ...(args as GenesysCloudFullApiOperationArgs<"patchUserQueue">)),
    PatchUserQueues: (...args) => callOperation("patchUserQueues", ...(args as GenesysCloudFullApiOperationArgs<"patchUserQueues">)),
    PostRoutingAssessments: (...args) => callOperation("postRoutingAssessments", ...(args as GenesysCloudFullApiOperationArgs<"postRoutingAssessments">)),
    PostRoutingAssessmentsJobs: (...args) => callOperation("postRoutingAssessmentsJobs", ...(args as GenesysCloudFullApiOperationArgs<"postRoutingAssessmentsJobs">)),
    PostRoutingEmailDomainDkim: (...args) => callOperation("postRoutingEmailDomainDkim", ...(args as GenesysCloudFullApiOperationArgs<"postRoutingEmailDomainDkim">)),
    PostRoutingEmailDomainMailfrom: (...args) => callOperation("postRoutingEmailDomainMailfrom", ...(args as GenesysCloudFullApiOperationArgs<"postRoutingEmailDomainMailfrom">)),
    PostRoutingEmailDomainRoutes: (...args) => callOperation("postRoutingEmailDomainRoutes", ...(args as GenesysCloudFullApiOperationArgs<"postRoutingEmailDomainRoutes">)),
    PostRoutingEmailDomains: (...args) => callOperation("postRoutingEmailDomains", ...(args as GenesysCloudFullApiOperationArgs<"postRoutingEmailDomains">)),
    PostRoutingEmailDomainTestconnection: (...args) => callOperation("postRoutingEmailDomainTestconnection", ...(args as GenesysCloudFullApiOperationArgs<"postRoutingEmailDomainTestconnection">)),
    PostRoutingEmailDomainVerification: (...args) => callOperation("postRoutingEmailDomainVerification", ...(args as GenesysCloudFullApiOperationArgs<"postRoutingEmailDomainVerification">)),
    PostRoutingEmailOutboundDomains: (...args) => callOperation("postRoutingEmailOutboundDomains", ...(args as GenesysCloudFullApiOperationArgs<"postRoutingEmailOutboundDomains">)),
    PostRoutingEmailOutboundDomainsSimulated: (...args) => callOperation("postRoutingEmailOutboundDomainsSimulated", ...(args as GenesysCloudFullApiOperationArgs<"postRoutingEmailOutboundDomainsSimulated">)),
    PostRoutingEmailOutboundDomainTestconnection: (...args) => callOperation("postRoutingEmailOutboundDomainTestconnection", ...(args as GenesysCloudFullApiOperationArgs<"postRoutingEmailOutboundDomainTestconnection">)),
    PostRoutingEmailSetting: (...args) => callOperation("postRoutingEmailSetting", ...(args as GenesysCloudFullApiOperationArgs<"postRoutingEmailSetting">)),
    PostRoutingLanguages: (...args) => callOperation("postRoutingLanguages", ...(args as GenesysCloudFullApiOperationArgs<"postRoutingLanguages">)),
    PostRoutingPredictors: (...args) => callOperation("postRoutingPredictors", ...(args as GenesysCloudFullApiOperationArgs<"postRoutingPredictors">)),
    PostRoutingQueueMembers: (...args) => callOperation("postRoutingQueueMembers", ...(args as GenesysCloudFullApiOperationArgs<"postRoutingQueueMembers">)),
    PostRoutingQueues: (...args) => callOperation("postRoutingQueues", ...(args as GenesysCloudFullApiOperationArgs<"postRoutingQueues">)),
    PostRoutingQueueUsers: (...args) => callOperation("postRoutingQueueUsers", ...(args as GenesysCloudFullApiOperationArgs<"postRoutingQueueUsers">)),
    PostRoutingQueueWrapupcodes: (...args) => callOperation("postRoutingQueueWrapupcodes", ...(args as GenesysCloudFullApiOperationArgs<"postRoutingQueueWrapupcodes">)),
    PostRoutingSkillexpressionsValidate: (...args) => callOperation("postRoutingSkillexpressionsValidate", ...(args as GenesysCloudFullApiOperationArgs<"postRoutingSkillexpressionsValidate">)),
    PostRoutingSkillgroupMembersDivisions: (...args) => callOperation("postRoutingSkillgroupMembersDivisions", ...(args as GenesysCloudFullApiOperationArgs<"postRoutingSkillgroupMembersDivisions">)),
    PostRoutingSkillgroups: (...args) => callOperation("postRoutingSkillgroups", ...(args as GenesysCloudFullApiOperationArgs<"postRoutingSkillgroups">)),
    PostRoutingSkills: (...args) => callOperation("postRoutingSkills", ...(args as GenesysCloudFullApiOperationArgs<"postRoutingSkills">)),
    PostRoutingSmsAddresses: (...args) => callOperation("postRoutingSmsAddresses", ...(args as GenesysCloudFullApiOperationArgs<"postRoutingSmsAddresses">)),
    PostRoutingSmsPhonenumbers: (...args) => callOperation("postRoutingSmsPhonenumbers", ...(args as GenesysCloudFullApiOperationArgs<"postRoutingSmsPhonenumbers">)),
    PostRoutingSmsPhonenumbersImport: (...args) => callOperation("postRoutingSmsPhonenumbersImport", ...(args as GenesysCloudFullApiOperationArgs<"postRoutingSmsPhonenumbersImport">)),
    PostRoutingUtilizationLabels: (...args) => callOperation("postRoutingUtilizationLabels", ...(args as GenesysCloudFullApiOperationArgs<"postRoutingUtilizationLabels">)),
    PostRoutingWrapupcodes: (...args) => callOperation("postRoutingWrapupcodes", ...(args as GenesysCloudFullApiOperationArgs<"postRoutingWrapupcodes">)),
    PutRoutingDirectroutingbackupSettingsMe: (...args) => callOperation("putRoutingDirectroutingbackupSettingsMe", ...(args as GenesysCloudFullApiOperationArgs<"putRoutingDirectroutingbackupSettingsMe">)),
    PutRoutingEmailDomainRoute: (...args) => callOperation("putRoutingEmailDomainRoute", ...(args as GenesysCloudFullApiOperationArgs<"putRoutingEmailDomainRoute">)),
    PutRoutingEmailDomainRouteIdentityresolution: (...args) => callOperation("putRoutingEmailDomainRouteIdentityresolution", ...(args as GenesysCloudFullApiOperationArgs<"putRoutingEmailDomainRouteIdentityresolution">)),
    PutRoutingEmailOutboundDomainActivation: (...args) => callOperation("putRoutingEmailOutboundDomainActivation", ...(args as GenesysCloudFullApiOperationArgs<"putRoutingEmailOutboundDomainActivation">)),
    PutRoutingMessageRecipient: (...args) => callOperation("putRoutingMessageRecipient", ...(args as GenesysCloudFullApiOperationArgs<"putRoutingMessageRecipient">)),
    PutRoutingQueue: (...args) => callOperation("putRoutingQueue", ...(args as GenesysCloudFullApiOperationArgs<"putRoutingQueue">)),
    PutRoutingQueueIdentityresolution: (...args) => callOperation("putRoutingQueueIdentityresolution", ...(args as GenesysCloudFullApiOperationArgs<"putRoutingQueueIdentityresolution">)),
    PutRoutingSettings: (...args) => callOperation("putRoutingSettings", ...(args as GenesysCloudFullApiOperationArgs<"putRoutingSettings">)),
    PutRoutingSettingsTranscription: (...args) => callOperation("putRoutingSettingsTranscription", ...(args as GenesysCloudFullApiOperationArgs<"putRoutingSettingsTranscription">)),
    PutRoutingSmsIdentityresolutionPhonenumber: (...args) => callOperation("putRoutingSmsIdentityresolutionPhonenumber", ...(args as GenesysCloudFullApiOperationArgs<"putRoutingSmsIdentityresolutionPhonenumber">)),
    PutRoutingUserDirectroutingbackupSettings: (...args) => callOperation("putRoutingUserDirectroutingbackupSettings", ...(args as GenesysCloudFullApiOperationArgs<"putRoutingUserDirectroutingbackupSettings">)),
    PutRoutingUserUtilization: (...args) => callOperation("putRoutingUserUtilization", ...(args as GenesysCloudFullApiOperationArgs<"putRoutingUserUtilization">)),
    PutRoutingUtilization: (...args) => callOperation("putRoutingUtilization", ...(args as GenesysCloudFullApiOperationArgs<"putRoutingUtilization">)),
    PutRoutingUtilizationLabel: (...args) => callOperation("putRoutingUtilizationLabel", ...(args as GenesysCloudFullApiOperationArgs<"putRoutingUtilizationLabel">)),
    PutRoutingWrapupcode: (...args) => callOperation("putRoutingWrapupcode", ...(args as GenesysCloudFullApiOperationArgs<"putRoutingWrapupcode">)),
  };
}
