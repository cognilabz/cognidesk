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
export const GenesysCloudFullApiRouting01OperationKeys = [
  "deleteRoutingAssessment",
  "deleteRoutingDirectroutingbackupSettingsMe",
  "deleteRoutingEmailDomain",
  "deleteRoutingEmailDomainRoute",
  "deleteRoutingEmailOutboundDomain",
  "deleteRoutingEmailSettingEmailSettingId",
  "deleteRoutingLanguage",
  "deleteRoutingPredictor",
  "deleteRoutingQueue",
  "deleteRoutingQueueMember",
  "deleteRoutingQueueUser",
  "deleteRoutingQueueWrapupcode",
  "deleteRoutingSettings",
  "deleteRoutingSkill",
  "deleteRoutingSkillexpression",
  "deleteRoutingSkillexpressions",
  "deleteRoutingSkillgroup",
  "deleteRoutingSmsAddress",
  "deleteRoutingSmsPhonenumber",
  "deleteRoutingUserDirectroutingbackupSettings",
  "deleteRoutingUserUtilization",
  "deleteRoutingUtilization",
  "deleteRoutingUtilizationLabel",
  "deleteRoutingWrapupcode",
  "getRoutingAssessment",
  "getRoutingAssessments",
  "getRoutingAssessmentsJob",
  "getRoutingAssessmentsJobs",
  "getRoutingAvailablemediatypes",
  "getRoutingDirectroutingbackupSettingsMe",
  "getRoutingEmailDomain",
  "getRoutingEmailDomainDkim",
  "getRoutingEmailDomainMailfrom",
  "getRoutingEmailDomainRoute",
  "getRoutingEmailDomainRouteIdentityresolution",
  "getRoutingEmailDomainRoutes",
  "getRoutingEmailDomains",
  "getRoutingEmailDomainVerification",
  "getRoutingEmailOutboundDomain",
  "getRoutingEmailOutboundDomainActivation",
  "getRoutingEmailOutboundDomains",
  "getRoutingEmailSetting",
  "getRoutingEmailSettingEmailSettingId",
  "getRoutingEmailSetup",
  "getRoutingLanguage",
  "getRoutingLanguages",
  "getRoutingMessageRecipient",
  "getRoutingMessageRecipients",
  "getRoutingPredictor",
  "getRoutingPredictorModelFeatures",
  "getRoutingPredictorModels",
  "getRoutingPredictors",
  "getRoutingPredictorsKeyperformanceindicators",
  "getRoutingQueue",
  "getRoutingQueueAssistant",
  "getRoutingQueueComparisonperiod",
  "getRoutingQueueComparisonperiods",
  "getRoutingQueueEstimatedwaittime",
  "getRoutingQueueIdentityresolution",
  "getRoutingQueueMediatypeEstimatedwaittime",
  "getRoutingQueueMembers",
  "getRoutingQueues",
  "getRoutingQueuesDivisionviews",
  "getRoutingQueuesDivisionviewsAll",
  "getRoutingQueuesMe",
  "getRoutingQueueUsers",
  "getRoutingQueueWrapupcodes",
  "getRoutingSettings",
  "getRoutingSettingsContactcenter",
  "getRoutingSettingsTranscription",
  "getRoutingSkill",
  "getRoutingSkillexpression",
  "getRoutingSkillexpressions",
  "getRoutingSkillexpressionsQueueQueueId",
  "getRoutingSkillgroup",
  "getRoutingSkillgroupMembers",
  "getRoutingSkillgroupMembersDivisions",
  "getRoutingSkillgroups",
  "getRoutingSkills",
  "getRoutingSmsAddress"
] as const;
export type GenesysCloudFullApiRouting01OperationKey = typeof GenesysCloudFullApiRouting01OperationKeys[number];
// End hardened literal operation keys.

export interface GenesysCloudFullApiRouting01OperationPathParamMap {
  "deleteRoutingAssessment": { "assessmentId": GenesysCloudFullApiPathParamValue };
  "deleteRoutingDirectroutingbackupSettingsMe": {};
  "deleteRoutingEmailDomain": { "domainId": GenesysCloudFullApiPathParamValue };
  "deleteRoutingEmailDomainRoute": { "domainName": GenesysCloudFullApiPathParamValue; "routeId": GenesysCloudFullApiPathParamValue };
  "deleteRoutingEmailOutboundDomain": { "domainId": GenesysCloudFullApiPathParamValue };
  "deleteRoutingEmailSettingEmailSettingId": { "emailSettingId": GenesysCloudFullApiPathParamValue };
  "deleteRoutingLanguage": { "languageId": GenesysCloudFullApiPathParamValue };
  "deleteRoutingPredictor": { "predictorId": GenesysCloudFullApiPathParamValue };
  "deleteRoutingQueue": { "queueId": GenesysCloudFullApiPathParamValue };
  "deleteRoutingQueueMember": { "queueId": GenesysCloudFullApiPathParamValue; "memberId": GenesysCloudFullApiPathParamValue };
  "deleteRoutingQueueUser": { "queueId": GenesysCloudFullApiPathParamValue; "memberId": GenesysCloudFullApiPathParamValue };
  "deleteRoutingQueueWrapupcode": { "queueId": GenesysCloudFullApiPathParamValue; "codeId": GenesysCloudFullApiPathParamValue };
  "deleteRoutingSettings": {};
  "deleteRoutingSkill": { "skillId": GenesysCloudFullApiPathParamValue };
  "deleteRoutingSkillexpression": { "expressionId": GenesysCloudFullApiPathParamValue };
  "deleteRoutingSkillexpressions": {};
  "deleteRoutingSkillgroup": { "skillGroupId": GenesysCloudFullApiPathParamValue };
  "deleteRoutingSmsAddress": { "addressId": GenesysCloudFullApiPathParamValue };
  "deleteRoutingSmsPhonenumber": { "phoneNumberId": GenesysCloudFullApiPathParamValue };
  "deleteRoutingUserDirectroutingbackupSettings": { "userId": GenesysCloudFullApiPathParamValue };
  "deleteRoutingUserUtilization": { "userId": GenesysCloudFullApiPathParamValue };
  "deleteRoutingUtilization": {};
  "deleteRoutingUtilizationLabel": { "labelId": GenesysCloudFullApiPathParamValue };
  "deleteRoutingWrapupcode": { "codeId": GenesysCloudFullApiPathParamValue };
  "getRoutingAssessment": { "assessmentId": GenesysCloudFullApiPathParamValue };
  "getRoutingAssessments": {};
  "getRoutingAssessmentsJob": { "jobId": GenesysCloudFullApiPathParamValue };
  "getRoutingAssessmentsJobs": {};
  "getRoutingAvailablemediatypes": {};
  "getRoutingDirectroutingbackupSettingsMe": {};
  "getRoutingEmailDomain": { "domainId": GenesysCloudFullApiPathParamValue };
  "getRoutingEmailDomainDkim": { "domainId": GenesysCloudFullApiPathParamValue };
  "getRoutingEmailDomainMailfrom": { "domainId": GenesysCloudFullApiPathParamValue };
  "getRoutingEmailDomainRoute": { "domainName": GenesysCloudFullApiPathParamValue; "routeId": GenesysCloudFullApiPathParamValue };
  "getRoutingEmailDomainRouteIdentityresolution": { "domainName": GenesysCloudFullApiPathParamValue; "routeId": GenesysCloudFullApiPathParamValue };
  "getRoutingEmailDomainRoutes": { "domainName": GenesysCloudFullApiPathParamValue };
  "getRoutingEmailDomains": {};
  "getRoutingEmailDomainVerification": { "domainId": GenesysCloudFullApiPathParamValue };
  "getRoutingEmailOutboundDomain": { "domainId": GenesysCloudFullApiPathParamValue };
  "getRoutingEmailOutboundDomainActivation": { "domainId": GenesysCloudFullApiPathParamValue };
  "getRoutingEmailOutboundDomains": {};
  "getRoutingEmailSetting": {};
  "getRoutingEmailSettingEmailSettingId": { "emailSettingId": GenesysCloudFullApiPathParamValue };
  "getRoutingEmailSetup": {};
  "getRoutingLanguage": { "languageId": GenesysCloudFullApiPathParamValue };
  "getRoutingLanguages": {};
  "getRoutingMessageRecipient": { "recipientId": GenesysCloudFullApiPathParamValue };
  "getRoutingMessageRecipients": {};
  "getRoutingPredictor": { "predictorId": GenesysCloudFullApiPathParamValue };
  "getRoutingPredictorModelFeatures": { "predictorId": GenesysCloudFullApiPathParamValue; "modelId": GenesysCloudFullApiPathParamValue };
  "getRoutingPredictorModels": { "predictorId": GenesysCloudFullApiPathParamValue };
  "getRoutingPredictors": {};
  "getRoutingPredictorsKeyperformanceindicators": {};
  "getRoutingQueue": { "queueId": GenesysCloudFullApiPathParamValue };
  "getRoutingQueueAssistant": { "queueId": GenesysCloudFullApiPathParamValue };
  "getRoutingQueueComparisonperiod": { "queueId": GenesysCloudFullApiPathParamValue; "comparisonPeriodId": GenesysCloudFullApiPathParamValue };
  "getRoutingQueueComparisonperiods": { "queueId": GenesysCloudFullApiPathParamValue };
  "getRoutingQueueEstimatedwaittime": { "queueId": GenesysCloudFullApiPathParamValue };
  "getRoutingQueueIdentityresolution": { "queueId": GenesysCloudFullApiPathParamValue };
  "getRoutingQueueMediatypeEstimatedwaittime": { "queueId": GenesysCloudFullApiPathParamValue; "mediaType": GenesysCloudFullApiPathParamValue };
  "getRoutingQueueMembers": { "queueId": GenesysCloudFullApiPathParamValue };
  "getRoutingQueues": {};
  "getRoutingQueuesDivisionviews": {};
  "getRoutingQueuesDivisionviewsAll": {};
  "getRoutingQueuesMe": {};
  "getRoutingQueueUsers": { "queueId": GenesysCloudFullApiPathParamValue };
  "getRoutingQueueWrapupcodes": { "queueId": GenesysCloudFullApiPathParamValue };
  "getRoutingSettings": {};
  "getRoutingSettingsContactcenter": {};
  "getRoutingSettingsTranscription": {};
  "getRoutingSkill": { "skillId": GenesysCloudFullApiPathParamValue };
  "getRoutingSkillexpression": { "expressionId": GenesysCloudFullApiPathParamValue };
  "getRoutingSkillexpressions": {};
  "getRoutingSkillexpressionsQueueQueueId": { "queueId": GenesysCloudFullApiPathParamValue };
  "getRoutingSkillgroup": { "skillGroupId": GenesysCloudFullApiPathParamValue };
  "getRoutingSkillgroupMembers": { "skillGroupId": GenesysCloudFullApiPathParamValue };
  "getRoutingSkillgroupMembersDivisions": { "skillGroupId": GenesysCloudFullApiPathParamValue };
  "getRoutingSkillgroups": {};
  "getRoutingSkills": {};
  "getRoutingSmsAddress": { "addressId": GenesysCloudFullApiPathParamValue };
}

export interface GenesysCloudFullApiRouting01OperationRequestMap {
  "deleteRoutingAssessment": GenesysCloudFullApiOperationInput<"deleteRoutingAssessment">;
  "deleteRoutingDirectroutingbackupSettingsMe": GenesysCloudFullApiOperationInput<"deleteRoutingDirectroutingbackupSettingsMe">;
  "deleteRoutingEmailDomain": GenesysCloudFullApiOperationInput<"deleteRoutingEmailDomain">;
  "deleteRoutingEmailDomainRoute": GenesysCloudFullApiOperationInput<"deleteRoutingEmailDomainRoute">;
  "deleteRoutingEmailOutboundDomain": GenesysCloudFullApiOperationInput<"deleteRoutingEmailOutboundDomain">;
  "deleteRoutingEmailSettingEmailSettingId": GenesysCloudFullApiOperationInput<"deleteRoutingEmailSettingEmailSettingId">;
  "deleteRoutingLanguage": GenesysCloudFullApiOperationInput<"deleteRoutingLanguage">;
  "deleteRoutingPredictor": GenesysCloudFullApiOperationInput<"deleteRoutingPredictor">;
  "deleteRoutingQueue": GenesysCloudFullApiOperationInput<"deleteRoutingQueue">;
  "deleteRoutingQueueMember": GenesysCloudFullApiOperationInput<"deleteRoutingQueueMember">;
  "deleteRoutingQueueUser": GenesysCloudFullApiOperationInput<"deleteRoutingQueueUser">;
  "deleteRoutingQueueWrapupcode": GenesysCloudFullApiOperationInput<"deleteRoutingQueueWrapupcode">;
  "deleteRoutingSettings": GenesysCloudFullApiOperationInput<"deleteRoutingSettings">;
  "deleteRoutingSkill": GenesysCloudFullApiOperationInput<"deleteRoutingSkill">;
  "deleteRoutingSkillexpression": GenesysCloudFullApiOperationInput<"deleteRoutingSkillexpression">;
  "deleteRoutingSkillexpressions": GenesysCloudFullApiOperationInput<"deleteRoutingSkillexpressions">;
  "deleteRoutingSkillgroup": GenesysCloudFullApiOperationInput<"deleteRoutingSkillgroup">;
  "deleteRoutingSmsAddress": GenesysCloudFullApiOperationInput<"deleteRoutingSmsAddress">;
  "deleteRoutingSmsPhonenumber": GenesysCloudFullApiOperationInput<"deleteRoutingSmsPhonenumber">;
  "deleteRoutingUserDirectroutingbackupSettings": GenesysCloudFullApiOperationInput<"deleteRoutingUserDirectroutingbackupSettings">;
  "deleteRoutingUserUtilization": GenesysCloudFullApiOperationInput<"deleteRoutingUserUtilization">;
  "deleteRoutingUtilization": GenesysCloudFullApiOperationInput<"deleteRoutingUtilization">;
  "deleteRoutingUtilizationLabel": GenesysCloudFullApiOperationInput<"deleteRoutingUtilizationLabel">;
  "deleteRoutingWrapupcode": GenesysCloudFullApiOperationInput<"deleteRoutingWrapupcode">;
  "getRoutingAssessment": GenesysCloudFullApiOperationInput<"getRoutingAssessment">;
  "getRoutingAssessments": GenesysCloudFullApiOperationInput<"getRoutingAssessments">;
  "getRoutingAssessmentsJob": GenesysCloudFullApiOperationInput<"getRoutingAssessmentsJob">;
  "getRoutingAssessmentsJobs": GenesysCloudFullApiOperationInput<"getRoutingAssessmentsJobs">;
  "getRoutingAvailablemediatypes": GenesysCloudFullApiOperationInput<"getRoutingAvailablemediatypes">;
  "getRoutingDirectroutingbackupSettingsMe": GenesysCloudFullApiOperationInput<"getRoutingDirectroutingbackupSettingsMe">;
  "getRoutingEmailDomain": GenesysCloudFullApiOperationInput<"getRoutingEmailDomain">;
  "getRoutingEmailDomainDkim": GenesysCloudFullApiOperationInput<"getRoutingEmailDomainDkim">;
  "getRoutingEmailDomainMailfrom": GenesysCloudFullApiOperationInput<"getRoutingEmailDomainMailfrom">;
  "getRoutingEmailDomainRoute": GenesysCloudFullApiOperationInput<"getRoutingEmailDomainRoute">;
  "getRoutingEmailDomainRouteIdentityresolution": GenesysCloudFullApiOperationInput<"getRoutingEmailDomainRouteIdentityresolution">;
  "getRoutingEmailDomainRoutes": GenesysCloudFullApiOperationInput<"getRoutingEmailDomainRoutes">;
  "getRoutingEmailDomains": GenesysCloudFullApiOperationInput<"getRoutingEmailDomains">;
  "getRoutingEmailDomainVerification": GenesysCloudFullApiOperationInput<"getRoutingEmailDomainVerification">;
  "getRoutingEmailOutboundDomain": GenesysCloudFullApiOperationInput<"getRoutingEmailOutboundDomain">;
  "getRoutingEmailOutboundDomainActivation": GenesysCloudFullApiOperationInput<"getRoutingEmailOutboundDomainActivation">;
  "getRoutingEmailOutboundDomains": GenesysCloudFullApiOperationInput<"getRoutingEmailOutboundDomains">;
  "getRoutingEmailSetting": GenesysCloudFullApiOperationInput<"getRoutingEmailSetting">;
  "getRoutingEmailSettingEmailSettingId": GenesysCloudFullApiOperationInput<"getRoutingEmailSettingEmailSettingId">;
  "getRoutingEmailSetup": GenesysCloudFullApiOperationInput<"getRoutingEmailSetup">;
  "getRoutingLanguage": GenesysCloudFullApiOperationInput<"getRoutingLanguage">;
  "getRoutingLanguages": GenesysCloudFullApiOperationInput<"getRoutingLanguages">;
  "getRoutingMessageRecipient": GenesysCloudFullApiOperationInput<"getRoutingMessageRecipient">;
  "getRoutingMessageRecipients": GenesysCloudFullApiOperationInput<"getRoutingMessageRecipients">;
  "getRoutingPredictor": GenesysCloudFullApiOperationInput<"getRoutingPredictor">;
  "getRoutingPredictorModelFeatures": GenesysCloudFullApiOperationInput<"getRoutingPredictorModelFeatures">;
  "getRoutingPredictorModels": GenesysCloudFullApiOperationInput<"getRoutingPredictorModels">;
  "getRoutingPredictors": GenesysCloudFullApiOperationInput<"getRoutingPredictors">;
  "getRoutingPredictorsKeyperformanceindicators": GenesysCloudFullApiOperationInput<"getRoutingPredictorsKeyperformanceindicators">;
  "getRoutingQueue": GenesysCloudFullApiOperationInput<"getRoutingQueue">;
  "getRoutingQueueAssistant": GenesysCloudFullApiOperationInput<"getRoutingQueueAssistant">;
  "getRoutingQueueComparisonperiod": GenesysCloudFullApiOperationInput<"getRoutingQueueComparisonperiod">;
  "getRoutingQueueComparisonperiods": GenesysCloudFullApiOperationInput<"getRoutingQueueComparisonperiods">;
  "getRoutingQueueEstimatedwaittime": GenesysCloudFullApiOperationInput<"getRoutingQueueEstimatedwaittime">;
  "getRoutingQueueIdentityresolution": GenesysCloudFullApiOperationInput<"getRoutingQueueIdentityresolution">;
  "getRoutingQueueMediatypeEstimatedwaittime": GenesysCloudFullApiOperationInput<"getRoutingQueueMediatypeEstimatedwaittime">;
  "getRoutingQueueMembers": GenesysCloudFullApiOperationInput<"getRoutingQueueMembers">;
  "getRoutingQueues": GenesysCloudFullApiOperationInput<"getRoutingQueues">;
  "getRoutingQueuesDivisionviews": GenesysCloudFullApiOperationInput<"getRoutingQueuesDivisionviews">;
  "getRoutingQueuesDivisionviewsAll": GenesysCloudFullApiOperationInput<"getRoutingQueuesDivisionviewsAll">;
  "getRoutingQueuesMe": GenesysCloudFullApiOperationInput<"getRoutingQueuesMe">;
  "getRoutingQueueUsers": GenesysCloudFullApiOperationInput<"getRoutingQueueUsers">;
  "getRoutingQueueWrapupcodes": GenesysCloudFullApiOperationInput<"getRoutingQueueWrapupcodes">;
  "getRoutingSettings": GenesysCloudFullApiOperationInput<"getRoutingSettings">;
  "getRoutingSettingsContactcenter": GenesysCloudFullApiOperationInput<"getRoutingSettingsContactcenter">;
  "getRoutingSettingsTranscription": GenesysCloudFullApiOperationInput<"getRoutingSettingsTranscription">;
  "getRoutingSkill": GenesysCloudFullApiOperationInput<"getRoutingSkill">;
  "getRoutingSkillexpression": GenesysCloudFullApiOperationInput<"getRoutingSkillexpression">;
  "getRoutingSkillexpressions": GenesysCloudFullApiOperationInput<"getRoutingSkillexpressions">;
  "getRoutingSkillexpressionsQueueQueueId": GenesysCloudFullApiOperationInput<"getRoutingSkillexpressionsQueueQueueId">;
  "getRoutingSkillgroup": GenesysCloudFullApiOperationInput<"getRoutingSkillgroup">;
  "getRoutingSkillgroupMembers": GenesysCloudFullApiOperationInput<"getRoutingSkillgroupMembers">;
  "getRoutingSkillgroupMembersDivisions": GenesysCloudFullApiOperationInput<"getRoutingSkillgroupMembersDivisions">;
  "getRoutingSkillgroups": GenesysCloudFullApiOperationInput<"getRoutingSkillgroups">;
  "getRoutingSkills": GenesysCloudFullApiOperationInput<"getRoutingSkills">;
  "getRoutingSmsAddress": GenesysCloudFullApiOperationInput<"getRoutingSmsAddress">;
}

export interface GenesysCloudFullApiRouting01GeneratedClient {
  DeleteRoutingAssessment(...args: GenesysCloudFullApiOperationArgs<"deleteRoutingAssessment">): Promise<GenesysCloudFullApiOperationResponseMap["deleteRoutingAssessment"]>;
  DeleteRoutingDirectroutingbackupSettingsMe(...args: GenesysCloudFullApiOperationArgs<"deleteRoutingDirectroutingbackupSettingsMe">): Promise<GenesysCloudFullApiOperationResponseMap["deleteRoutingDirectroutingbackupSettingsMe"]>;
  DeleteRoutingEmailDomain(...args: GenesysCloudFullApiOperationArgs<"deleteRoutingEmailDomain">): Promise<GenesysCloudFullApiOperationResponseMap["deleteRoutingEmailDomain"]>;
  DeleteRoutingEmailDomainRoute(...args: GenesysCloudFullApiOperationArgs<"deleteRoutingEmailDomainRoute">): Promise<GenesysCloudFullApiOperationResponseMap["deleteRoutingEmailDomainRoute"]>;
  DeleteRoutingEmailOutboundDomain(...args: GenesysCloudFullApiOperationArgs<"deleteRoutingEmailOutboundDomain">): Promise<GenesysCloudFullApiOperationResponseMap["deleteRoutingEmailOutboundDomain"]>;
  DeleteRoutingEmailSettingEmailSettingId(...args: GenesysCloudFullApiOperationArgs<"deleteRoutingEmailSettingEmailSettingId">): Promise<GenesysCloudFullApiOperationResponseMap["deleteRoutingEmailSettingEmailSettingId"]>;
  DeleteRoutingLanguage(...args: GenesysCloudFullApiOperationArgs<"deleteRoutingLanguage">): Promise<GenesysCloudFullApiOperationResponseMap["deleteRoutingLanguage"]>;
  DeleteRoutingPredictor(...args: GenesysCloudFullApiOperationArgs<"deleteRoutingPredictor">): Promise<GenesysCloudFullApiOperationResponseMap["deleteRoutingPredictor"]>;
  DeleteRoutingQueue(...args: GenesysCloudFullApiOperationArgs<"deleteRoutingQueue">): Promise<GenesysCloudFullApiOperationResponseMap["deleteRoutingQueue"]>;
  DeleteRoutingQueueMember(...args: GenesysCloudFullApiOperationArgs<"deleteRoutingQueueMember">): Promise<GenesysCloudFullApiOperationResponseMap["deleteRoutingQueueMember"]>;
  DeleteRoutingQueueUser(...args: GenesysCloudFullApiOperationArgs<"deleteRoutingQueueUser">): Promise<GenesysCloudFullApiOperationResponseMap["deleteRoutingQueueUser"]>;
  DeleteRoutingQueueWrapupcode(...args: GenesysCloudFullApiOperationArgs<"deleteRoutingQueueWrapupcode">): Promise<GenesysCloudFullApiOperationResponseMap["deleteRoutingQueueWrapupcode"]>;
  DeleteRoutingSettings(...args: GenesysCloudFullApiOperationArgs<"deleteRoutingSettings">): Promise<GenesysCloudFullApiOperationResponseMap["deleteRoutingSettings"]>;
  DeleteRoutingSkill(...args: GenesysCloudFullApiOperationArgs<"deleteRoutingSkill">): Promise<GenesysCloudFullApiOperationResponseMap["deleteRoutingSkill"]>;
  DeleteRoutingSkillexpression(...args: GenesysCloudFullApiOperationArgs<"deleteRoutingSkillexpression">): Promise<GenesysCloudFullApiOperationResponseMap["deleteRoutingSkillexpression"]>;
  DeleteRoutingSkillexpressions(...args: GenesysCloudFullApiOperationArgs<"deleteRoutingSkillexpressions">): Promise<GenesysCloudFullApiOperationResponseMap["deleteRoutingSkillexpressions"]>;
  DeleteRoutingSkillgroup(...args: GenesysCloudFullApiOperationArgs<"deleteRoutingSkillgroup">): Promise<GenesysCloudFullApiOperationResponseMap["deleteRoutingSkillgroup"]>;
  DeleteRoutingSmsAddress(...args: GenesysCloudFullApiOperationArgs<"deleteRoutingSmsAddress">): Promise<GenesysCloudFullApiOperationResponseMap["deleteRoutingSmsAddress"]>;
  DeleteRoutingSmsPhonenumber(...args: GenesysCloudFullApiOperationArgs<"deleteRoutingSmsPhonenumber">): Promise<GenesysCloudFullApiOperationResponseMap["deleteRoutingSmsPhonenumber"]>;
  DeleteRoutingUserDirectroutingbackupSettings(...args: GenesysCloudFullApiOperationArgs<"deleteRoutingUserDirectroutingbackupSettings">): Promise<GenesysCloudFullApiOperationResponseMap["deleteRoutingUserDirectroutingbackupSettings"]>;
  DeleteRoutingUserUtilization(...args: GenesysCloudFullApiOperationArgs<"deleteRoutingUserUtilization">): Promise<GenesysCloudFullApiOperationResponseMap["deleteRoutingUserUtilization"]>;
  DeleteRoutingUtilization(...args: GenesysCloudFullApiOperationArgs<"deleteRoutingUtilization">): Promise<GenesysCloudFullApiOperationResponseMap["deleteRoutingUtilization"]>;
  DeleteRoutingUtilizationLabel(...args: GenesysCloudFullApiOperationArgs<"deleteRoutingUtilizationLabel">): Promise<GenesysCloudFullApiOperationResponseMap["deleteRoutingUtilizationLabel"]>;
  DeleteRoutingWrapupcode(...args: GenesysCloudFullApiOperationArgs<"deleteRoutingWrapupcode">): Promise<GenesysCloudFullApiOperationResponseMap["deleteRoutingWrapupcode"]>;
  GetRoutingAssessment(...args: GenesysCloudFullApiOperationArgs<"getRoutingAssessment">): Promise<GenesysCloudFullApiOperationResponseMap["getRoutingAssessment"]>;
  GetRoutingAssessments(...args: GenesysCloudFullApiOperationArgs<"getRoutingAssessments">): Promise<GenesysCloudFullApiOperationResponseMap["getRoutingAssessments"]>;
  GetRoutingAssessmentsJob(...args: GenesysCloudFullApiOperationArgs<"getRoutingAssessmentsJob">): Promise<GenesysCloudFullApiOperationResponseMap["getRoutingAssessmentsJob"]>;
  GetRoutingAssessmentsJobs(...args: GenesysCloudFullApiOperationArgs<"getRoutingAssessmentsJobs">): Promise<GenesysCloudFullApiOperationResponseMap["getRoutingAssessmentsJobs"]>;
  GetRoutingAvailablemediatypes(...args: GenesysCloudFullApiOperationArgs<"getRoutingAvailablemediatypes">): Promise<GenesysCloudFullApiOperationResponseMap["getRoutingAvailablemediatypes"]>;
  GetRoutingDirectroutingbackupSettingsMe(...args: GenesysCloudFullApiOperationArgs<"getRoutingDirectroutingbackupSettingsMe">): Promise<GenesysCloudFullApiOperationResponseMap["getRoutingDirectroutingbackupSettingsMe"]>;
  GetRoutingEmailDomain(...args: GenesysCloudFullApiOperationArgs<"getRoutingEmailDomain">): Promise<GenesysCloudFullApiOperationResponseMap["getRoutingEmailDomain"]>;
  GetRoutingEmailDomainDkim(...args: GenesysCloudFullApiOperationArgs<"getRoutingEmailDomainDkim">): Promise<GenesysCloudFullApiOperationResponseMap["getRoutingEmailDomainDkim"]>;
  GetRoutingEmailDomainMailfrom(...args: GenesysCloudFullApiOperationArgs<"getRoutingEmailDomainMailfrom">): Promise<GenesysCloudFullApiOperationResponseMap["getRoutingEmailDomainMailfrom"]>;
  GetRoutingEmailDomainRoute(...args: GenesysCloudFullApiOperationArgs<"getRoutingEmailDomainRoute">): Promise<GenesysCloudFullApiOperationResponseMap["getRoutingEmailDomainRoute"]>;
  GetRoutingEmailDomainRouteIdentityresolution(...args: GenesysCloudFullApiOperationArgs<"getRoutingEmailDomainRouteIdentityresolution">): Promise<GenesysCloudFullApiOperationResponseMap["getRoutingEmailDomainRouteIdentityresolution"]>;
  GetRoutingEmailDomainRoutes(...args: GenesysCloudFullApiOperationArgs<"getRoutingEmailDomainRoutes">): Promise<GenesysCloudFullApiOperationResponseMap["getRoutingEmailDomainRoutes"]>;
  GetRoutingEmailDomains(...args: GenesysCloudFullApiOperationArgs<"getRoutingEmailDomains">): Promise<GenesysCloudFullApiOperationResponseMap["getRoutingEmailDomains"]>;
  GetRoutingEmailDomainVerification(...args: GenesysCloudFullApiOperationArgs<"getRoutingEmailDomainVerification">): Promise<GenesysCloudFullApiOperationResponseMap["getRoutingEmailDomainVerification"]>;
  GetRoutingEmailOutboundDomain(...args: GenesysCloudFullApiOperationArgs<"getRoutingEmailOutboundDomain">): Promise<GenesysCloudFullApiOperationResponseMap["getRoutingEmailOutboundDomain"]>;
  GetRoutingEmailOutboundDomainActivation(...args: GenesysCloudFullApiOperationArgs<"getRoutingEmailOutboundDomainActivation">): Promise<GenesysCloudFullApiOperationResponseMap["getRoutingEmailOutboundDomainActivation"]>;
  GetRoutingEmailOutboundDomains(...args: GenesysCloudFullApiOperationArgs<"getRoutingEmailOutboundDomains">): Promise<GenesysCloudFullApiOperationResponseMap["getRoutingEmailOutboundDomains"]>;
  GetRoutingEmailSetting(...args: GenesysCloudFullApiOperationArgs<"getRoutingEmailSetting">): Promise<GenesysCloudFullApiOperationResponseMap["getRoutingEmailSetting"]>;
  GetRoutingEmailSettingEmailSettingId(...args: GenesysCloudFullApiOperationArgs<"getRoutingEmailSettingEmailSettingId">): Promise<GenesysCloudFullApiOperationResponseMap["getRoutingEmailSettingEmailSettingId"]>;
  GetRoutingEmailSetup(...args: GenesysCloudFullApiOperationArgs<"getRoutingEmailSetup">): Promise<GenesysCloudFullApiOperationResponseMap["getRoutingEmailSetup"]>;
  GetRoutingLanguage(...args: GenesysCloudFullApiOperationArgs<"getRoutingLanguage">): Promise<GenesysCloudFullApiOperationResponseMap["getRoutingLanguage"]>;
  GetRoutingLanguages(...args: GenesysCloudFullApiOperationArgs<"getRoutingLanguages">): Promise<GenesysCloudFullApiOperationResponseMap["getRoutingLanguages"]>;
  GetRoutingMessageRecipient(...args: GenesysCloudFullApiOperationArgs<"getRoutingMessageRecipient">): Promise<GenesysCloudFullApiOperationResponseMap["getRoutingMessageRecipient"]>;
  GetRoutingMessageRecipients(...args: GenesysCloudFullApiOperationArgs<"getRoutingMessageRecipients">): Promise<GenesysCloudFullApiOperationResponseMap["getRoutingMessageRecipients"]>;
  GetRoutingPredictor(...args: GenesysCloudFullApiOperationArgs<"getRoutingPredictor">): Promise<GenesysCloudFullApiOperationResponseMap["getRoutingPredictor"]>;
  GetRoutingPredictorModelFeatures(...args: GenesysCloudFullApiOperationArgs<"getRoutingPredictorModelFeatures">): Promise<GenesysCloudFullApiOperationResponseMap["getRoutingPredictorModelFeatures"]>;
  GetRoutingPredictorModels(...args: GenesysCloudFullApiOperationArgs<"getRoutingPredictorModels">): Promise<GenesysCloudFullApiOperationResponseMap["getRoutingPredictorModels"]>;
  GetRoutingPredictors(...args: GenesysCloudFullApiOperationArgs<"getRoutingPredictors">): Promise<GenesysCloudFullApiOperationResponseMap["getRoutingPredictors"]>;
  GetRoutingPredictorsKeyperformanceindicators(...args: GenesysCloudFullApiOperationArgs<"getRoutingPredictorsKeyperformanceindicators">): Promise<GenesysCloudFullApiOperationResponseMap["getRoutingPredictorsKeyperformanceindicators"]>;
  GetRoutingQueue(...args: GenesysCloudFullApiOperationArgs<"getRoutingQueue">): Promise<GenesysCloudFullApiOperationResponseMap["getRoutingQueue"]>;
  GetRoutingQueueAssistant(...args: GenesysCloudFullApiOperationArgs<"getRoutingQueueAssistant">): Promise<GenesysCloudFullApiOperationResponseMap["getRoutingQueueAssistant"]>;
  GetRoutingQueueComparisonperiod(...args: GenesysCloudFullApiOperationArgs<"getRoutingQueueComparisonperiod">): Promise<GenesysCloudFullApiOperationResponseMap["getRoutingQueueComparisonperiod"]>;
  GetRoutingQueueComparisonperiods(...args: GenesysCloudFullApiOperationArgs<"getRoutingQueueComparisonperiods">): Promise<GenesysCloudFullApiOperationResponseMap["getRoutingQueueComparisonperiods"]>;
  GetRoutingQueueEstimatedwaittime(...args: GenesysCloudFullApiOperationArgs<"getRoutingQueueEstimatedwaittime">): Promise<GenesysCloudFullApiOperationResponseMap["getRoutingQueueEstimatedwaittime"]>;
  GetRoutingQueueIdentityresolution(...args: GenesysCloudFullApiOperationArgs<"getRoutingQueueIdentityresolution">): Promise<GenesysCloudFullApiOperationResponseMap["getRoutingQueueIdentityresolution"]>;
  GetRoutingQueueMediatypeEstimatedwaittime(...args: GenesysCloudFullApiOperationArgs<"getRoutingQueueMediatypeEstimatedwaittime">): Promise<GenesysCloudFullApiOperationResponseMap["getRoutingQueueMediatypeEstimatedwaittime"]>;
  GetRoutingQueueMembers(...args: GenesysCloudFullApiOperationArgs<"getRoutingQueueMembers">): Promise<GenesysCloudFullApiOperationResponseMap["getRoutingQueueMembers"]>;
  GetRoutingQueues(...args: GenesysCloudFullApiOperationArgs<"getRoutingQueues">): Promise<GenesysCloudFullApiOperationResponseMap["getRoutingQueues"]>;
  GetRoutingQueuesDivisionviews(...args: GenesysCloudFullApiOperationArgs<"getRoutingQueuesDivisionviews">): Promise<GenesysCloudFullApiOperationResponseMap["getRoutingQueuesDivisionviews"]>;
  GetRoutingQueuesDivisionviewsAll(...args: GenesysCloudFullApiOperationArgs<"getRoutingQueuesDivisionviewsAll">): Promise<GenesysCloudFullApiOperationResponseMap["getRoutingQueuesDivisionviewsAll"]>;
  GetRoutingQueuesMe(...args: GenesysCloudFullApiOperationArgs<"getRoutingQueuesMe">): Promise<GenesysCloudFullApiOperationResponseMap["getRoutingQueuesMe"]>;
  GetRoutingQueueUsers(...args: GenesysCloudFullApiOperationArgs<"getRoutingQueueUsers">): Promise<GenesysCloudFullApiOperationResponseMap["getRoutingQueueUsers"]>;
  GetRoutingQueueWrapupcodes(...args: GenesysCloudFullApiOperationArgs<"getRoutingQueueWrapupcodes">): Promise<GenesysCloudFullApiOperationResponseMap["getRoutingQueueWrapupcodes"]>;
  GetRoutingSettings(...args: GenesysCloudFullApiOperationArgs<"getRoutingSettings">): Promise<GenesysCloudFullApiOperationResponseMap["getRoutingSettings"]>;
  GetRoutingSettingsContactcenter(...args: GenesysCloudFullApiOperationArgs<"getRoutingSettingsContactcenter">): Promise<GenesysCloudFullApiOperationResponseMap["getRoutingSettingsContactcenter"]>;
  GetRoutingSettingsTranscription(...args: GenesysCloudFullApiOperationArgs<"getRoutingSettingsTranscription">): Promise<GenesysCloudFullApiOperationResponseMap["getRoutingSettingsTranscription"]>;
  GetRoutingSkill(...args: GenesysCloudFullApiOperationArgs<"getRoutingSkill">): Promise<GenesysCloudFullApiOperationResponseMap["getRoutingSkill"]>;
  GetRoutingSkillexpression(...args: GenesysCloudFullApiOperationArgs<"getRoutingSkillexpression">): Promise<GenesysCloudFullApiOperationResponseMap["getRoutingSkillexpression"]>;
  GetRoutingSkillexpressions(...args: GenesysCloudFullApiOperationArgs<"getRoutingSkillexpressions">): Promise<GenesysCloudFullApiOperationResponseMap["getRoutingSkillexpressions"]>;
  GetRoutingSkillexpressionsQueueQueueId(...args: GenesysCloudFullApiOperationArgs<"getRoutingSkillexpressionsQueueQueueId">): Promise<GenesysCloudFullApiOperationResponseMap["getRoutingSkillexpressionsQueueQueueId"]>;
  GetRoutingSkillgroup(...args: GenesysCloudFullApiOperationArgs<"getRoutingSkillgroup">): Promise<GenesysCloudFullApiOperationResponseMap["getRoutingSkillgroup"]>;
  GetRoutingSkillgroupMembers(...args: GenesysCloudFullApiOperationArgs<"getRoutingSkillgroupMembers">): Promise<GenesysCloudFullApiOperationResponseMap["getRoutingSkillgroupMembers"]>;
  GetRoutingSkillgroupMembersDivisions(...args: GenesysCloudFullApiOperationArgs<"getRoutingSkillgroupMembersDivisions">): Promise<GenesysCloudFullApiOperationResponseMap["getRoutingSkillgroupMembersDivisions"]>;
  GetRoutingSkillgroups(...args: GenesysCloudFullApiOperationArgs<"getRoutingSkillgroups">): Promise<GenesysCloudFullApiOperationResponseMap["getRoutingSkillgroups"]>;
  GetRoutingSkills(...args: GenesysCloudFullApiOperationArgs<"getRoutingSkills">): Promise<GenesysCloudFullApiOperationResponseMap["getRoutingSkills"]>;
  GetRoutingSmsAddress(...args: GenesysCloudFullApiOperationArgs<"getRoutingSmsAddress">): Promise<GenesysCloudFullApiOperationResponseMap["getRoutingSmsAddress"]>;
}

export const GenesysCloudFullApiRouting01GeneratedFunctionNames = [
  "DeleteRoutingAssessment",
  "DeleteRoutingDirectroutingbackupSettingsMe",
  "DeleteRoutingEmailDomain",
  "DeleteRoutingEmailDomainRoute",
  "DeleteRoutingEmailOutboundDomain",
  "DeleteRoutingEmailSettingEmailSettingId",
  "DeleteRoutingLanguage",
  "DeleteRoutingPredictor",
  "DeleteRoutingQueue",
  "DeleteRoutingQueueMember",
  "DeleteRoutingQueueUser",
  "DeleteRoutingQueueWrapupcode",
  "DeleteRoutingSettings",
  "DeleteRoutingSkill",
  "DeleteRoutingSkillexpression",
  "DeleteRoutingSkillexpressions",
  "DeleteRoutingSkillgroup",
  "DeleteRoutingSmsAddress",
  "DeleteRoutingSmsPhonenumber",
  "DeleteRoutingUserDirectroutingbackupSettings",
  "DeleteRoutingUserUtilization",
  "DeleteRoutingUtilization",
  "DeleteRoutingUtilizationLabel",
  "DeleteRoutingWrapupcode",
  "GetRoutingAssessment",
  "GetRoutingAssessments",
  "GetRoutingAssessmentsJob",
  "GetRoutingAssessmentsJobs",
  "GetRoutingAvailablemediatypes",
  "GetRoutingDirectroutingbackupSettingsMe",
  "GetRoutingEmailDomain",
  "GetRoutingEmailDomainDkim",
  "GetRoutingEmailDomainMailfrom",
  "GetRoutingEmailDomainRoute",
  "GetRoutingEmailDomainRouteIdentityresolution",
  "GetRoutingEmailDomainRoutes",
  "GetRoutingEmailDomains",
  "GetRoutingEmailDomainVerification",
  "GetRoutingEmailOutboundDomain",
  "GetRoutingEmailOutboundDomainActivation",
  "GetRoutingEmailOutboundDomains",
  "GetRoutingEmailSetting",
  "GetRoutingEmailSettingEmailSettingId",
  "GetRoutingEmailSetup",
  "GetRoutingLanguage",
  "GetRoutingLanguages",
  "GetRoutingMessageRecipient",
  "GetRoutingMessageRecipients",
  "GetRoutingPredictor",
  "GetRoutingPredictorModelFeatures",
  "GetRoutingPredictorModels",
  "GetRoutingPredictors",
  "GetRoutingPredictorsKeyperformanceindicators",
  "GetRoutingQueue",
  "GetRoutingQueueAssistant",
  "GetRoutingQueueComparisonperiod",
  "GetRoutingQueueComparisonperiods",
  "GetRoutingQueueEstimatedwaittime",
  "GetRoutingQueueIdentityresolution",
  "GetRoutingQueueMediatypeEstimatedwaittime",
  "GetRoutingQueueMembers",
  "GetRoutingQueues",
  "GetRoutingQueuesDivisionviews",
  "GetRoutingQueuesDivisionviewsAll",
  "GetRoutingQueuesMe",
  "GetRoutingQueueUsers",
  "GetRoutingQueueWrapupcodes",
  "GetRoutingSettings",
  "GetRoutingSettingsContactcenter",
  "GetRoutingSettingsTranscription",
  "GetRoutingSkill",
  "GetRoutingSkillexpression",
  "GetRoutingSkillexpressions",
  "GetRoutingSkillexpressionsQueueQueueId",
  "GetRoutingSkillgroup",
  "GetRoutingSkillgroupMembers",
  "GetRoutingSkillgroupMembersDivisions",
  "GetRoutingSkillgroups",
  "GetRoutingSkills",
  "GetRoutingSmsAddress"
] as const satisfies readonly (keyof GenesysCloudFullApiRouting01GeneratedClient)[];

export function createGenesysCloudFullApiRouting01GeneratedClient(
  callOperation: GenesysCloudGeneratedOperationCaller,
): GenesysCloudFullApiRouting01GeneratedClient {
  return {
    DeleteRoutingAssessment: (...args) => callOperation("deleteRoutingAssessment", ...(args as GenesysCloudFullApiOperationArgs<"deleteRoutingAssessment">)),
    DeleteRoutingDirectroutingbackupSettingsMe: (...args) => callOperation("deleteRoutingDirectroutingbackupSettingsMe", ...(args as GenesysCloudFullApiOperationArgs<"deleteRoutingDirectroutingbackupSettingsMe">)),
    DeleteRoutingEmailDomain: (...args) => callOperation("deleteRoutingEmailDomain", ...(args as GenesysCloudFullApiOperationArgs<"deleteRoutingEmailDomain">)),
    DeleteRoutingEmailDomainRoute: (...args) => callOperation("deleteRoutingEmailDomainRoute", ...(args as GenesysCloudFullApiOperationArgs<"deleteRoutingEmailDomainRoute">)),
    DeleteRoutingEmailOutboundDomain: (...args) => callOperation("deleteRoutingEmailOutboundDomain", ...(args as GenesysCloudFullApiOperationArgs<"deleteRoutingEmailOutboundDomain">)),
    DeleteRoutingEmailSettingEmailSettingId: (...args) => callOperation("deleteRoutingEmailSettingEmailSettingId", ...(args as GenesysCloudFullApiOperationArgs<"deleteRoutingEmailSettingEmailSettingId">)),
    DeleteRoutingLanguage: (...args) => callOperation("deleteRoutingLanguage", ...(args as GenesysCloudFullApiOperationArgs<"deleteRoutingLanguage">)),
    DeleteRoutingPredictor: (...args) => callOperation("deleteRoutingPredictor", ...(args as GenesysCloudFullApiOperationArgs<"deleteRoutingPredictor">)),
    DeleteRoutingQueue: (...args) => callOperation("deleteRoutingQueue", ...(args as GenesysCloudFullApiOperationArgs<"deleteRoutingQueue">)),
    DeleteRoutingQueueMember: (...args) => callOperation("deleteRoutingQueueMember", ...(args as GenesysCloudFullApiOperationArgs<"deleteRoutingQueueMember">)),
    DeleteRoutingQueueUser: (...args) => callOperation("deleteRoutingQueueUser", ...(args as GenesysCloudFullApiOperationArgs<"deleteRoutingQueueUser">)),
    DeleteRoutingQueueWrapupcode: (...args) => callOperation("deleteRoutingQueueWrapupcode", ...(args as GenesysCloudFullApiOperationArgs<"deleteRoutingQueueWrapupcode">)),
    DeleteRoutingSettings: (...args) => callOperation("deleteRoutingSettings", ...(args as GenesysCloudFullApiOperationArgs<"deleteRoutingSettings">)),
    DeleteRoutingSkill: (...args) => callOperation("deleteRoutingSkill", ...(args as GenesysCloudFullApiOperationArgs<"deleteRoutingSkill">)),
    DeleteRoutingSkillexpression: (...args) => callOperation("deleteRoutingSkillexpression", ...(args as GenesysCloudFullApiOperationArgs<"deleteRoutingSkillexpression">)),
    DeleteRoutingSkillexpressions: (...args) => callOperation("deleteRoutingSkillexpressions", ...(args as GenesysCloudFullApiOperationArgs<"deleteRoutingSkillexpressions">)),
    DeleteRoutingSkillgroup: (...args) => callOperation("deleteRoutingSkillgroup", ...(args as GenesysCloudFullApiOperationArgs<"deleteRoutingSkillgroup">)),
    DeleteRoutingSmsAddress: (...args) => callOperation("deleteRoutingSmsAddress", ...(args as GenesysCloudFullApiOperationArgs<"deleteRoutingSmsAddress">)),
    DeleteRoutingSmsPhonenumber: (...args) => callOperation("deleteRoutingSmsPhonenumber", ...(args as GenesysCloudFullApiOperationArgs<"deleteRoutingSmsPhonenumber">)),
    DeleteRoutingUserDirectroutingbackupSettings: (...args) => callOperation("deleteRoutingUserDirectroutingbackupSettings", ...(args as GenesysCloudFullApiOperationArgs<"deleteRoutingUserDirectroutingbackupSettings">)),
    DeleteRoutingUserUtilization: (...args) => callOperation("deleteRoutingUserUtilization", ...(args as GenesysCloudFullApiOperationArgs<"deleteRoutingUserUtilization">)),
    DeleteRoutingUtilization: (...args) => callOperation("deleteRoutingUtilization", ...(args as GenesysCloudFullApiOperationArgs<"deleteRoutingUtilization">)),
    DeleteRoutingUtilizationLabel: (...args) => callOperation("deleteRoutingUtilizationLabel", ...(args as GenesysCloudFullApiOperationArgs<"deleteRoutingUtilizationLabel">)),
    DeleteRoutingWrapupcode: (...args) => callOperation("deleteRoutingWrapupcode", ...(args as GenesysCloudFullApiOperationArgs<"deleteRoutingWrapupcode">)),
    GetRoutingAssessment: (...args) => callOperation("getRoutingAssessment", ...(args as GenesysCloudFullApiOperationArgs<"getRoutingAssessment">)),
    GetRoutingAssessments: (...args) => callOperation("getRoutingAssessments", ...(args as GenesysCloudFullApiOperationArgs<"getRoutingAssessments">)),
    GetRoutingAssessmentsJob: (...args) => callOperation("getRoutingAssessmentsJob", ...(args as GenesysCloudFullApiOperationArgs<"getRoutingAssessmentsJob">)),
    GetRoutingAssessmentsJobs: (...args) => callOperation("getRoutingAssessmentsJobs", ...(args as GenesysCloudFullApiOperationArgs<"getRoutingAssessmentsJobs">)),
    GetRoutingAvailablemediatypes: (...args) => callOperation("getRoutingAvailablemediatypes", ...(args as GenesysCloudFullApiOperationArgs<"getRoutingAvailablemediatypes">)),
    GetRoutingDirectroutingbackupSettingsMe: (...args) => callOperation("getRoutingDirectroutingbackupSettingsMe", ...(args as GenesysCloudFullApiOperationArgs<"getRoutingDirectroutingbackupSettingsMe">)),
    GetRoutingEmailDomain: (...args) => callOperation("getRoutingEmailDomain", ...(args as GenesysCloudFullApiOperationArgs<"getRoutingEmailDomain">)),
    GetRoutingEmailDomainDkim: (...args) => callOperation("getRoutingEmailDomainDkim", ...(args as GenesysCloudFullApiOperationArgs<"getRoutingEmailDomainDkim">)),
    GetRoutingEmailDomainMailfrom: (...args) => callOperation("getRoutingEmailDomainMailfrom", ...(args as GenesysCloudFullApiOperationArgs<"getRoutingEmailDomainMailfrom">)),
    GetRoutingEmailDomainRoute: (...args) => callOperation("getRoutingEmailDomainRoute", ...(args as GenesysCloudFullApiOperationArgs<"getRoutingEmailDomainRoute">)),
    GetRoutingEmailDomainRouteIdentityresolution: (...args) => callOperation("getRoutingEmailDomainRouteIdentityresolution", ...(args as GenesysCloudFullApiOperationArgs<"getRoutingEmailDomainRouteIdentityresolution">)),
    GetRoutingEmailDomainRoutes: (...args) => callOperation("getRoutingEmailDomainRoutes", ...(args as GenesysCloudFullApiOperationArgs<"getRoutingEmailDomainRoutes">)),
    GetRoutingEmailDomains: (...args) => callOperation("getRoutingEmailDomains", ...(args as GenesysCloudFullApiOperationArgs<"getRoutingEmailDomains">)),
    GetRoutingEmailDomainVerification: (...args) => callOperation("getRoutingEmailDomainVerification", ...(args as GenesysCloudFullApiOperationArgs<"getRoutingEmailDomainVerification">)),
    GetRoutingEmailOutboundDomain: (...args) => callOperation("getRoutingEmailOutboundDomain", ...(args as GenesysCloudFullApiOperationArgs<"getRoutingEmailOutboundDomain">)),
    GetRoutingEmailOutboundDomainActivation: (...args) => callOperation("getRoutingEmailOutboundDomainActivation", ...(args as GenesysCloudFullApiOperationArgs<"getRoutingEmailOutboundDomainActivation">)),
    GetRoutingEmailOutboundDomains: (...args) => callOperation("getRoutingEmailOutboundDomains", ...(args as GenesysCloudFullApiOperationArgs<"getRoutingEmailOutboundDomains">)),
    GetRoutingEmailSetting: (...args) => callOperation("getRoutingEmailSetting", ...(args as GenesysCloudFullApiOperationArgs<"getRoutingEmailSetting">)),
    GetRoutingEmailSettingEmailSettingId: (...args) => callOperation("getRoutingEmailSettingEmailSettingId", ...(args as GenesysCloudFullApiOperationArgs<"getRoutingEmailSettingEmailSettingId">)),
    GetRoutingEmailSetup: (...args) => callOperation("getRoutingEmailSetup", ...(args as GenesysCloudFullApiOperationArgs<"getRoutingEmailSetup">)),
    GetRoutingLanguage: (...args) => callOperation("getRoutingLanguage", ...(args as GenesysCloudFullApiOperationArgs<"getRoutingLanguage">)),
    GetRoutingLanguages: (...args) => callOperation("getRoutingLanguages", ...(args as GenesysCloudFullApiOperationArgs<"getRoutingLanguages">)),
    GetRoutingMessageRecipient: (...args) => callOperation("getRoutingMessageRecipient", ...(args as GenesysCloudFullApiOperationArgs<"getRoutingMessageRecipient">)),
    GetRoutingMessageRecipients: (...args) => callOperation("getRoutingMessageRecipients", ...(args as GenesysCloudFullApiOperationArgs<"getRoutingMessageRecipients">)),
    GetRoutingPredictor: (...args) => callOperation("getRoutingPredictor", ...(args as GenesysCloudFullApiOperationArgs<"getRoutingPredictor">)),
    GetRoutingPredictorModelFeatures: (...args) => callOperation("getRoutingPredictorModelFeatures", ...(args as GenesysCloudFullApiOperationArgs<"getRoutingPredictorModelFeatures">)),
    GetRoutingPredictorModels: (...args) => callOperation("getRoutingPredictorModels", ...(args as GenesysCloudFullApiOperationArgs<"getRoutingPredictorModels">)),
    GetRoutingPredictors: (...args) => callOperation("getRoutingPredictors", ...(args as GenesysCloudFullApiOperationArgs<"getRoutingPredictors">)),
    GetRoutingPredictorsKeyperformanceindicators: (...args) => callOperation("getRoutingPredictorsKeyperformanceindicators", ...(args as GenesysCloudFullApiOperationArgs<"getRoutingPredictorsKeyperformanceindicators">)),
    GetRoutingQueue: (...args) => callOperation("getRoutingQueue", ...(args as GenesysCloudFullApiOperationArgs<"getRoutingQueue">)),
    GetRoutingQueueAssistant: (...args) => callOperation("getRoutingQueueAssistant", ...(args as GenesysCloudFullApiOperationArgs<"getRoutingQueueAssistant">)),
    GetRoutingQueueComparisonperiod: (...args) => callOperation("getRoutingQueueComparisonperiod", ...(args as GenesysCloudFullApiOperationArgs<"getRoutingQueueComparisonperiod">)),
    GetRoutingQueueComparisonperiods: (...args) => callOperation("getRoutingQueueComparisonperiods", ...(args as GenesysCloudFullApiOperationArgs<"getRoutingQueueComparisonperiods">)),
    GetRoutingQueueEstimatedwaittime: (...args) => callOperation("getRoutingQueueEstimatedwaittime", ...(args as GenesysCloudFullApiOperationArgs<"getRoutingQueueEstimatedwaittime">)),
    GetRoutingQueueIdentityresolution: (...args) => callOperation("getRoutingQueueIdentityresolution", ...(args as GenesysCloudFullApiOperationArgs<"getRoutingQueueIdentityresolution">)),
    GetRoutingQueueMediatypeEstimatedwaittime: (...args) => callOperation("getRoutingQueueMediatypeEstimatedwaittime", ...(args as GenesysCloudFullApiOperationArgs<"getRoutingQueueMediatypeEstimatedwaittime">)),
    GetRoutingQueueMembers: (...args) => callOperation("getRoutingQueueMembers", ...(args as GenesysCloudFullApiOperationArgs<"getRoutingQueueMembers">)),
    GetRoutingQueues: (...args) => callOperation("getRoutingQueues", ...(args as GenesysCloudFullApiOperationArgs<"getRoutingQueues">)),
    GetRoutingQueuesDivisionviews: (...args) => callOperation("getRoutingQueuesDivisionviews", ...(args as GenesysCloudFullApiOperationArgs<"getRoutingQueuesDivisionviews">)),
    GetRoutingQueuesDivisionviewsAll: (...args) => callOperation("getRoutingQueuesDivisionviewsAll", ...(args as GenesysCloudFullApiOperationArgs<"getRoutingQueuesDivisionviewsAll">)),
    GetRoutingQueuesMe: (...args) => callOperation("getRoutingQueuesMe", ...(args as GenesysCloudFullApiOperationArgs<"getRoutingQueuesMe">)),
    GetRoutingQueueUsers: (...args) => callOperation("getRoutingQueueUsers", ...(args as GenesysCloudFullApiOperationArgs<"getRoutingQueueUsers">)),
    GetRoutingQueueWrapupcodes: (...args) => callOperation("getRoutingQueueWrapupcodes", ...(args as GenesysCloudFullApiOperationArgs<"getRoutingQueueWrapupcodes">)),
    GetRoutingSettings: (...args) => callOperation("getRoutingSettings", ...(args as GenesysCloudFullApiOperationArgs<"getRoutingSettings">)),
    GetRoutingSettingsContactcenter: (...args) => callOperation("getRoutingSettingsContactcenter", ...(args as GenesysCloudFullApiOperationArgs<"getRoutingSettingsContactcenter">)),
    GetRoutingSettingsTranscription: (...args) => callOperation("getRoutingSettingsTranscription", ...(args as GenesysCloudFullApiOperationArgs<"getRoutingSettingsTranscription">)),
    GetRoutingSkill: (...args) => callOperation("getRoutingSkill", ...(args as GenesysCloudFullApiOperationArgs<"getRoutingSkill">)),
    GetRoutingSkillexpression: (...args) => callOperation("getRoutingSkillexpression", ...(args as GenesysCloudFullApiOperationArgs<"getRoutingSkillexpression">)),
    GetRoutingSkillexpressions: (...args) => callOperation("getRoutingSkillexpressions", ...(args as GenesysCloudFullApiOperationArgs<"getRoutingSkillexpressions">)),
    GetRoutingSkillexpressionsQueueQueueId: (...args) => callOperation("getRoutingSkillexpressionsQueueQueueId", ...(args as GenesysCloudFullApiOperationArgs<"getRoutingSkillexpressionsQueueQueueId">)),
    GetRoutingSkillgroup: (...args) => callOperation("getRoutingSkillgroup", ...(args as GenesysCloudFullApiOperationArgs<"getRoutingSkillgroup">)),
    GetRoutingSkillgroupMembers: (...args) => callOperation("getRoutingSkillgroupMembers", ...(args as GenesysCloudFullApiOperationArgs<"getRoutingSkillgroupMembers">)),
    GetRoutingSkillgroupMembersDivisions: (...args) => callOperation("getRoutingSkillgroupMembersDivisions", ...(args as GenesysCloudFullApiOperationArgs<"getRoutingSkillgroupMembersDivisions">)),
    GetRoutingSkillgroups: (...args) => callOperation("getRoutingSkillgroups", ...(args as GenesysCloudFullApiOperationArgs<"getRoutingSkillgroups">)),
    GetRoutingSkills: (...args) => callOperation("getRoutingSkills", ...(args as GenesysCloudFullApiOperationArgs<"getRoutingSkills">)),
    GetRoutingSmsAddress: (...args) => callOperation("getRoutingSmsAddress", ...(args as GenesysCloudFullApiOperationArgs<"getRoutingSmsAddress">)),
  };
}
