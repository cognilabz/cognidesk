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
export const GenesysCloudFullApiArchitect01OperationKeys = [
  "deleteArchitectEmergencygroup",
  "deleteArchitectGrammar",
  "deleteArchitectGrammarLanguage",
  "deleteArchitectGrammarLanguageFilesDtmf",
  "deleteArchitectGrammarLanguageFilesVoice",
  "deleteArchitectIvr",
  "deleteArchitectPrompt",
  "deleteArchitectPromptResource",
  "deleteArchitectPromptResourceAudio",
  "deleteArchitectPrompts",
  "deleteArchitectSchedule",
  "deleteArchitectSchedulegroup",
  "deleteArchitectSystempromptResource",
  "deleteFlow",
  "deleteFlowInstancesSettingsLoglevels",
  "deleteFlows",
  "deleteFlowsDatatable",
  "deleteFlowsDatatableRow",
  "deleteFlowsInstancesSettingsLoglevelsDefault",
  "deleteFlowsMilestone",
  "getArchitectDependencytracking",
  "getArchitectDependencytrackingBuild",
  "getArchitectDependencytrackingConsumedresources",
  "getArchitectDependencytrackingConsumingresources",
  "getArchitectDependencytrackingDeletedresourceconsumers",
  "getArchitectDependencytrackingObject",
  "getArchitectDependencytrackingType",
  "getArchitectDependencytrackingTypes",
  "getArchitectDependencytrackingUpdatedresourceconsumers",
  "getArchitectEmergencygroup",
  "getArchitectEmergencygroups",
  "getArchitectEmergencygroupsDivisionviews",
  "getArchitectGrammar",
  "getArchitectGrammarLanguage",
  "getArchitectGrammars",
  "getArchitectIvr",
  "getArchitectIvrIdentityresolution",
  "getArchitectIvrs",
  "getArchitectIvrsDivisionviews",
  "getArchitectPrompt",
  "getArchitectPromptHistoryHistoryId",
  "getArchitectPromptResource",
  "getArchitectPromptResources",
  "getArchitectPrompts",
  "getArchitectSchedule",
  "getArchitectSchedulegroup",
  "getArchitectSchedulegroups",
  "getArchitectSchedulegroupsDivisionviews",
  "getArchitectSchedules",
  "getArchitectSchedulesDivisionviews",
  "getArchitectSystemprompt",
  "getArchitectSystempromptHistoryHistoryId",
  "getArchitectSystempromptResource",
  "getArchitectSystempromptResources",
  "getArchitectSystemprompts",
  "getFlow",
  "getFlowHistoryHistoryId",
  "getFlowInstancesSettingsLoglevels",
  "getFlowLatestconfiguration",
  "getFlows",
  "getFlowsDatatable",
  "getFlowsDatatableExportJob",
  "getFlowsDatatableImportJob",
  "getFlowsDatatableImportJobs",
  "getFlowsDatatableRow",
  "getFlowsDatatableRows",
  "getFlowsDatatables",
  "getFlowsDatatablesDivisionview",
  "getFlowsDatatablesDivisionviews",
  "getFlowsDivisionviews",
  "getFlowsExecution",
  "getFlowsExportJob",
  "getFlowsInstance",
  "getFlowsInstancesJob",
  "getFlowsInstancesQuerycapabilities",
  "getFlowsInstancesSettingsExecutiondata",
  "getFlowsInstancesSettingsLoglevels",
  "getFlowsInstancesSettingsLoglevelsCharacteristics",
  "getFlowsInstancesSettingsLoglevelsDefault",
  "getFlowsJob"
] as const;
export type GenesysCloudFullApiArchitect01OperationKey = typeof GenesysCloudFullApiArchitect01OperationKeys[number];
// End hardened literal operation keys.

export interface GenesysCloudFullApiArchitect01OperationPathParamMap {
  "deleteArchitectEmergencygroup": { "emergencyGroupId": GenesysCloudFullApiPathParamValue };
  "deleteArchitectGrammar": { "grammarId": GenesysCloudFullApiPathParamValue };
  "deleteArchitectGrammarLanguage": { "grammarId": GenesysCloudFullApiPathParamValue; "languageCode": GenesysCloudFullApiPathParamValue };
  "deleteArchitectGrammarLanguageFilesDtmf": { "grammarId": GenesysCloudFullApiPathParamValue; "languageCode": GenesysCloudFullApiPathParamValue };
  "deleteArchitectGrammarLanguageFilesVoice": { "grammarId": GenesysCloudFullApiPathParamValue; "languageCode": GenesysCloudFullApiPathParamValue };
  "deleteArchitectIvr": { "ivrId": GenesysCloudFullApiPathParamValue };
  "deleteArchitectPrompt": { "promptId": GenesysCloudFullApiPathParamValue };
  "deleteArchitectPromptResource": { "promptId": GenesysCloudFullApiPathParamValue; "languageCode": GenesysCloudFullApiPathParamValue };
  "deleteArchitectPromptResourceAudio": { "promptId": GenesysCloudFullApiPathParamValue; "languageCode": GenesysCloudFullApiPathParamValue };
  "deleteArchitectPrompts": {};
  "deleteArchitectSchedule": { "scheduleId": GenesysCloudFullApiPathParamValue };
  "deleteArchitectSchedulegroup": { "scheduleGroupId": GenesysCloudFullApiPathParamValue };
  "deleteArchitectSystempromptResource": { "promptId": GenesysCloudFullApiPathParamValue; "languageCode": GenesysCloudFullApiPathParamValue };
  "deleteFlow": { "flowId": GenesysCloudFullApiPathParamValue };
  "deleteFlowInstancesSettingsLoglevels": { "flowId": GenesysCloudFullApiPathParamValue };
  "deleteFlows": {};
  "deleteFlowsDatatable": { "datatableId": GenesysCloudFullApiPathParamValue };
  "deleteFlowsDatatableRow": { "datatableId": GenesysCloudFullApiPathParamValue; "rowId": GenesysCloudFullApiPathParamValue };
  "deleteFlowsInstancesSettingsLoglevelsDefault": {};
  "deleteFlowsMilestone": { "milestoneId": GenesysCloudFullApiPathParamValue };
  "getArchitectDependencytracking": {};
  "getArchitectDependencytrackingBuild": {};
  "getArchitectDependencytrackingConsumedresources": {};
  "getArchitectDependencytrackingConsumingresources": {};
  "getArchitectDependencytrackingDeletedresourceconsumers": {};
  "getArchitectDependencytrackingObject": {};
  "getArchitectDependencytrackingType": { "typeId": GenesysCloudFullApiPathParamValue };
  "getArchitectDependencytrackingTypes": {};
  "getArchitectDependencytrackingUpdatedresourceconsumers": {};
  "getArchitectEmergencygroup": { "emergencyGroupId": GenesysCloudFullApiPathParamValue };
  "getArchitectEmergencygroups": {};
  "getArchitectEmergencygroupsDivisionviews": {};
  "getArchitectGrammar": { "grammarId": GenesysCloudFullApiPathParamValue };
  "getArchitectGrammarLanguage": { "grammarId": GenesysCloudFullApiPathParamValue; "languageCode": GenesysCloudFullApiPathParamValue };
  "getArchitectGrammars": {};
  "getArchitectIvr": { "ivrId": GenesysCloudFullApiPathParamValue };
  "getArchitectIvrIdentityresolution": { "ivrId": GenesysCloudFullApiPathParamValue };
  "getArchitectIvrs": {};
  "getArchitectIvrsDivisionviews": {};
  "getArchitectPrompt": { "promptId": GenesysCloudFullApiPathParamValue };
  "getArchitectPromptHistoryHistoryId": { "promptId": GenesysCloudFullApiPathParamValue; "historyId": GenesysCloudFullApiPathParamValue };
  "getArchitectPromptResource": { "promptId": GenesysCloudFullApiPathParamValue; "languageCode": GenesysCloudFullApiPathParamValue };
  "getArchitectPromptResources": { "promptId": GenesysCloudFullApiPathParamValue };
  "getArchitectPrompts": {};
  "getArchitectSchedule": { "scheduleId": GenesysCloudFullApiPathParamValue };
  "getArchitectSchedulegroup": { "scheduleGroupId": GenesysCloudFullApiPathParamValue };
  "getArchitectSchedulegroups": {};
  "getArchitectSchedulegroupsDivisionviews": {};
  "getArchitectSchedules": {};
  "getArchitectSchedulesDivisionviews": {};
  "getArchitectSystemprompt": { "promptId": GenesysCloudFullApiPathParamValue };
  "getArchitectSystempromptHistoryHistoryId": { "promptId": GenesysCloudFullApiPathParamValue; "historyId": GenesysCloudFullApiPathParamValue };
  "getArchitectSystempromptResource": { "promptId": GenesysCloudFullApiPathParamValue; "languageCode": GenesysCloudFullApiPathParamValue };
  "getArchitectSystempromptResources": { "promptId": GenesysCloudFullApiPathParamValue };
  "getArchitectSystemprompts": {};
  "getFlow": { "flowId": GenesysCloudFullApiPathParamValue };
  "getFlowHistoryHistoryId": { "flowId": GenesysCloudFullApiPathParamValue; "historyId": GenesysCloudFullApiPathParamValue };
  "getFlowInstancesSettingsLoglevels": { "flowId": GenesysCloudFullApiPathParamValue };
  "getFlowLatestconfiguration": { "flowId": GenesysCloudFullApiPathParamValue };
  "getFlows": {};
  "getFlowsDatatable": { "datatableId": GenesysCloudFullApiPathParamValue };
  "getFlowsDatatableExportJob": { "datatableId": GenesysCloudFullApiPathParamValue; "exportJobId": GenesysCloudFullApiPathParamValue };
  "getFlowsDatatableImportJob": { "datatableId": GenesysCloudFullApiPathParamValue; "importJobId": GenesysCloudFullApiPathParamValue };
  "getFlowsDatatableImportJobs": { "datatableId": GenesysCloudFullApiPathParamValue };
  "getFlowsDatatableRow": { "datatableId": GenesysCloudFullApiPathParamValue; "rowId": GenesysCloudFullApiPathParamValue };
  "getFlowsDatatableRows": { "datatableId": GenesysCloudFullApiPathParamValue };
  "getFlowsDatatables": {};
  "getFlowsDatatablesDivisionview": { "datatableId": GenesysCloudFullApiPathParamValue };
  "getFlowsDatatablesDivisionviews": {};
  "getFlowsDivisionviews": {};
  "getFlowsExecution": { "flowExecutionId": GenesysCloudFullApiPathParamValue };
  "getFlowsExportJob": { "jobId": GenesysCloudFullApiPathParamValue };
  "getFlowsInstance": { "instanceId": GenesysCloudFullApiPathParamValue };
  "getFlowsInstancesJob": { "jobId": GenesysCloudFullApiPathParamValue };
  "getFlowsInstancesQuerycapabilities": {};
  "getFlowsInstancesSettingsExecutiondata": {};
  "getFlowsInstancesSettingsLoglevels": {};
  "getFlowsInstancesSettingsLoglevelsCharacteristics": {};
  "getFlowsInstancesSettingsLoglevelsDefault": {};
  "getFlowsJob": { "jobId": GenesysCloudFullApiPathParamValue };
}

export interface GenesysCloudFullApiArchitect01OperationRequestMap {
  "deleteArchitectEmergencygroup": GenesysCloudFullApiOperationInput<"deleteArchitectEmergencygroup">;
  "deleteArchitectGrammar": GenesysCloudFullApiOperationInput<"deleteArchitectGrammar">;
  "deleteArchitectGrammarLanguage": GenesysCloudFullApiOperationInput<"deleteArchitectGrammarLanguage">;
  "deleteArchitectGrammarLanguageFilesDtmf": GenesysCloudFullApiOperationInput<"deleteArchitectGrammarLanguageFilesDtmf">;
  "deleteArchitectGrammarLanguageFilesVoice": GenesysCloudFullApiOperationInput<"deleteArchitectGrammarLanguageFilesVoice">;
  "deleteArchitectIvr": GenesysCloudFullApiOperationInput<"deleteArchitectIvr">;
  "deleteArchitectPrompt": GenesysCloudFullApiOperationInput<"deleteArchitectPrompt">;
  "deleteArchitectPromptResource": GenesysCloudFullApiOperationInput<"deleteArchitectPromptResource">;
  "deleteArchitectPromptResourceAudio": GenesysCloudFullApiOperationInput<"deleteArchitectPromptResourceAudio">;
  "deleteArchitectPrompts": GenesysCloudFullApiOperationInput<"deleteArchitectPrompts">;
  "deleteArchitectSchedule": GenesysCloudFullApiOperationInput<"deleteArchitectSchedule">;
  "deleteArchitectSchedulegroup": GenesysCloudFullApiOperationInput<"deleteArchitectSchedulegroup">;
  "deleteArchitectSystempromptResource": GenesysCloudFullApiOperationInput<"deleteArchitectSystempromptResource">;
  "deleteFlow": GenesysCloudFullApiOperationInput<"deleteFlow">;
  "deleteFlowInstancesSettingsLoglevels": GenesysCloudFullApiOperationInput<"deleteFlowInstancesSettingsLoglevels">;
  "deleteFlows": GenesysCloudFullApiOperationInput<"deleteFlows">;
  "deleteFlowsDatatable": GenesysCloudFullApiOperationInput<"deleteFlowsDatatable">;
  "deleteFlowsDatatableRow": GenesysCloudFullApiOperationInput<"deleteFlowsDatatableRow">;
  "deleteFlowsInstancesSettingsLoglevelsDefault": GenesysCloudFullApiOperationInput<"deleteFlowsInstancesSettingsLoglevelsDefault">;
  "deleteFlowsMilestone": GenesysCloudFullApiOperationInput<"deleteFlowsMilestone">;
  "getArchitectDependencytracking": GenesysCloudFullApiOperationInput<"getArchitectDependencytracking">;
  "getArchitectDependencytrackingBuild": GenesysCloudFullApiOperationInput<"getArchitectDependencytrackingBuild">;
  "getArchitectDependencytrackingConsumedresources": GenesysCloudFullApiOperationInput<"getArchitectDependencytrackingConsumedresources">;
  "getArchitectDependencytrackingConsumingresources": GenesysCloudFullApiOperationInput<"getArchitectDependencytrackingConsumingresources">;
  "getArchitectDependencytrackingDeletedresourceconsumers": GenesysCloudFullApiOperationInput<"getArchitectDependencytrackingDeletedresourceconsumers">;
  "getArchitectDependencytrackingObject": GenesysCloudFullApiOperationInput<"getArchitectDependencytrackingObject">;
  "getArchitectDependencytrackingType": GenesysCloudFullApiOperationInput<"getArchitectDependencytrackingType">;
  "getArchitectDependencytrackingTypes": GenesysCloudFullApiOperationInput<"getArchitectDependencytrackingTypes">;
  "getArchitectDependencytrackingUpdatedresourceconsumers": GenesysCloudFullApiOperationInput<"getArchitectDependencytrackingUpdatedresourceconsumers">;
  "getArchitectEmergencygroup": GenesysCloudFullApiOperationInput<"getArchitectEmergencygroup">;
  "getArchitectEmergencygroups": GenesysCloudFullApiOperationInput<"getArchitectEmergencygroups">;
  "getArchitectEmergencygroupsDivisionviews": GenesysCloudFullApiOperationInput<"getArchitectEmergencygroupsDivisionviews">;
  "getArchitectGrammar": GenesysCloudFullApiOperationInput<"getArchitectGrammar">;
  "getArchitectGrammarLanguage": GenesysCloudFullApiOperationInput<"getArchitectGrammarLanguage">;
  "getArchitectGrammars": GenesysCloudFullApiOperationInput<"getArchitectGrammars">;
  "getArchitectIvr": GenesysCloudFullApiOperationInput<"getArchitectIvr">;
  "getArchitectIvrIdentityresolution": GenesysCloudFullApiOperationInput<"getArchitectIvrIdentityresolution">;
  "getArchitectIvrs": GenesysCloudFullApiOperationInput<"getArchitectIvrs">;
  "getArchitectIvrsDivisionviews": GenesysCloudFullApiOperationInput<"getArchitectIvrsDivisionviews">;
  "getArchitectPrompt": GenesysCloudFullApiOperationInput<"getArchitectPrompt">;
  "getArchitectPromptHistoryHistoryId": GenesysCloudFullApiOperationInput<"getArchitectPromptHistoryHistoryId">;
  "getArchitectPromptResource": GenesysCloudFullApiOperationInput<"getArchitectPromptResource">;
  "getArchitectPromptResources": GenesysCloudFullApiOperationInput<"getArchitectPromptResources">;
  "getArchitectPrompts": GenesysCloudFullApiOperationInput<"getArchitectPrompts">;
  "getArchitectSchedule": GenesysCloudFullApiOperationInput<"getArchitectSchedule">;
  "getArchitectSchedulegroup": GenesysCloudFullApiOperationInput<"getArchitectSchedulegroup">;
  "getArchitectSchedulegroups": GenesysCloudFullApiOperationInput<"getArchitectSchedulegroups">;
  "getArchitectSchedulegroupsDivisionviews": GenesysCloudFullApiOperationInput<"getArchitectSchedulegroupsDivisionviews">;
  "getArchitectSchedules": GenesysCloudFullApiOperationInput<"getArchitectSchedules">;
  "getArchitectSchedulesDivisionviews": GenesysCloudFullApiOperationInput<"getArchitectSchedulesDivisionviews">;
  "getArchitectSystemprompt": GenesysCloudFullApiOperationInput<"getArchitectSystemprompt">;
  "getArchitectSystempromptHistoryHistoryId": GenesysCloudFullApiOperationInput<"getArchitectSystempromptHistoryHistoryId">;
  "getArchitectSystempromptResource": GenesysCloudFullApiOperationInput<"getArchitectSystempromptResource">;
  "getArchitectSystempromptResources": GenesysCloudFullApiOperationInput<"getArchitectSystempromptResources">;
  "getArchitectSystemprompts": GenesysCloudFullApiOperationInput<"getArchitectSystemprompts">;
  "getFlow": GenesysCloudFullApiOperationInput<"getFlow">;
  "getFlowHistoryHistoryId": GenesysCloudFullApiOperationInput<"getFlowHistoryHistoryId">;
  "getFlowInstancesSettingsLoglevels": GenesysCloudFullApiOperationInput<"getFlowInstancesSettingsLoglevels">;
  "getFlowLatestconfiguration": GenesysCloudFullApiOperationInput<"getFlowLatestconfiguration">;
  "getFlows": GenesysCloudFullApiOperationInput<"getFlows">;
  "getFlowsDatatable": GenesysCloudFullApiOperationInput<"getFlowsDatatable">;
  "getFlowsDatatableExportJob": GenesysCloudFullApiOperationInput<"getFlowsDatatableExportJob">;
  "getFlowsDatatableImportJob": GenesysCloudFullApiOperationInput<"getFlowsDatatableImportJob">;
  "getFlowsDatatableImportJobs": GenesysCloudFullApiOperationInput<"getFlowsDatatableImportJobs">;
  "getFlowsDatatableRow": GenesysCloudFullApiOperationInput<"getFlowsDatatableRow">;
  "getFlowsDatatableRows": GenesysCloudFullApiOperationInput<"getFlowsDatatableRows">;
  "getFlowsDatatables": GenesysCloudFullApiOperationInput<"getFlowsDatatables">;
  "getFlowsDatatablesDivisionview": GenesysCloudFullApiOperationInput<"getFlowsDatatablesDivisionview">;
  "getFlowsDatatablesDivisionviews": GenesysCloudFullApiOperationInput<"getFlowsDatatablesDivisionviews">;
  "getFlowsDivisionviews": GenesysCloudFullApiOperationInput<"getFlowsDivisionviews">;
  "getFlowsExecution": GenesysCloudFullApiOperationInput<"getFlowsExecution">;
  "getFlowsExportJob": GenesysCloudFullApiOperationInput<"getFlowsExportJob">;
  "getFlowsInstance": GenesysCloudFullApiOperationInput<"getFlowsInstance">;
  "getFlowsInstancesJob": GenesysCloudFullApiOperationInput<"getFlowsInstancesJob">;
  "getFlowsInstancesQuerycapabilities": GenesysCloudFullApiOperationInput<"getFlowsInstancesQuerycapabilities">;
  "getFlowsInstancesSettingsExecutiondata": GenesysCloudFullApiOperationInput<"getFlowsInstancesSettingsExecutiondata">;
  "getFlowsInstancesSettingsLoglevels": GenesysCloudFullApiOperationInput<"getFlowsInstancesSettingsLoglevels">;
  "getFlowsInstancesSettingsLoglevelsCharacteristics": GenesysCloudFullApiOperationInput<"getFlowsInstancesSettingsLoglevelsCharacteristics">;
  "getFlowsInstancesSettingsLoglevelsDefault": GenesysCloudFullApiOperationInput<"getFlowsInstancesSettingsLoglevelsDefault">;
  "getFlowsJob": GenesysCloudFullApiOperationInput<"getFlowsJob">;
}

export interface GenesysCloudFullApiArchitect01GeneratedClient {
  DeleteArchitectEmergencygroup(...args: GenesysCloudFullApiOperationArgs<"deleteArchitectEmergencygroup">): Promise<GenesysCloudFullApiOperationResponseMap["deleteArchitectEmergencygroup"]>;
  DeleteArchitectGrammar(...args: GenesysCloudFullApiOperationArgs<"deleteArchitectGrammar">): Promise<GenesysCloudFullApiOperationResponseMap["deleteArchitectGrammar"]>;
  DeleteArchitectGrammarLanguage(...args: GenesysCloudFullApiOperationArgs<"deleteArchitectGrammarLanguage">): Promise<GenesysCloudFullApiOperationResponseMap["deleteArchitectGrammarLanguage"]>;
  DeleteArchitectGrammarLanguageFilesDtmf(...args: GenesysCloudFullApiOperationArgs<"deleteArchitectGrammarLanguageFilesDtmf">): Promise<GenesysCloudFullApiOperationResponseMap["deleteArchitectGrammarLanguageFilesDtmf"]>;
  DeleteArchitectGrammarLanguageFilesVoice(...args: GenesysCloudFullApiOperationArgs<"deleteArchitectGrammarLanguageFilesVoice">): Promise<GenesysCloudFullApiOperationResponseMap["deleteArchitectGrammarLanguageFilesVoice"]>;
  DeleteArchitectIvr(...args: GenesysCloudFullApiOperationArgs<"deleteArchitectIvr">): Promise<GenesysCloudFullApiOperationResponseMap["deleteArchitectIvr"]>;
  DeleteArchitectPrompt(...args: GenesysCloudFullApiOperationArgs<"deleteArchitectPrompt">): Promise<GenesysCloudFullApiOperationResponseMap["deleteArchitectPrompt"]>;
  DeleteArchitectPromptResource(...args: GenesysCloudFullApiOperationArgs<"deleteArchitectPromptResource">): Promise<GenesysCloudFullApiOperationResponseMap["deleteArchitectPromptResource"]>;
  DeleteArchitectPromptResourceAudio(...args: GenesysCloudFullApiOperationArgs<"deleteArchitectPromptResourceAudio">): Promise<GenesysCloudFullApiOperationResponseMap["deleteArchitectPromptResourceAudio"]>;
  DeleteArchitectPrompts(...args: GenesysCloudFullApiOperationArgs<"deleteArchitectPrompts">): Promise<GenesysCloudFullApiOperationResponseMap["deleteArchitectPrompts"]>;
  DeleteArchitectSchedule(...args: GenesysCloudFullApiOperationArgs<"deleteArchitectSchedule">): Promise<GenesysCloudFullApiOperationResponseMap["deleteArchitectSchedule"]>;
  DeleteArchitectSchedulegroup(...args: GenesysCloudFullApiOperationArgs<"deleteArchitectSchedulegroup">): Promise<GenesysCloudFullApiOperationResponseMap["deleteArchitectSchedulegroup"]>;
  DeleteArchitectSystempromptResource(...args: GenesysCloudFullApiOperationArgs<"deleteArchitectSystempromptResource">): Promise<GenesysCloudFullApiOperationResponseMap["deleteArchitectSystempromptResource"]>;
  DeleteFlow(...args: GenesysCloudFullApiOperationArgs<"deleteFlow">): Promise<GenesysCloudFullApiOperationResponseMap["deleteFlow"]>;
  DeleteFlowInstancesSettingsLoglevels(...args: GenesysCloudFullApiOperationArgs<"deleteFlowInstancesSettingsLoglevels">): Promise<GenesysCloudFullApiOperationResponseMap["deleteFlowInstancesSettingsLoglevels"]>;
  DeleteFlows(...args: GenesysCloudFullApiOperationArgs<"deleteFlows">): Promise<GenesysCloudFullApiOperationResponseMap["deleteFlows"]>;
  DeleteFlowsDatatable(...args: GenesysCloudFullApiOperationArgs<"deleteFlowsDatatable">): Promise<GenesysCloudFullApiOperationResponseMap["deleteFlowsDatatable"]>;
  DeleteFlowsDatatableRow(...args: GenesysCloudFullApiOperationArgs<"deleteFlowsDatatableRow">): Promise<GenesysCloudFullApiOperationResponseMap["deleteFlowsDatatableRow"]>;
  DeleteFlowsInstancesSettingsLoglevelsDefault(...args: GenesysCloudFullApiOperationArgs<"deleteFlowsInstancesSettingsLoglevelsDefault">): Promise<GenesysCloudFullApiOperationResponseMap["deleteFlowsInstancesSettingsLoglevelsDefault"]>;
  DeleteFlowsMilestone(...args: GenesysCloudFullApiOperationArgs<"deleteFlowsMilestone">): Promise<GenesysCloudFullApiOperationResponseMap["deleteFlowsMilestone"]>;
  GetArchitectDependencytracking(...args: GenesysCloudFullApiOperationArgs<"getArchitectDependencytracking">): Promise<GenesysCloudFullApiOperationResponseMap["getArchitectDependencytracking"]>;
  GetArchitectDependencytrackingBuild(...args: GenesysCloudFullApiOperationArgs<"getArchitectDependencytrackingBuild">): Promise<GenesysCloudFullApiOperationResponseMap["getArchitectDependencytrackingBuild"]>;
  GetArchitectDependencytrackingConsumedresources(...args: GenesysCloudFullApiOperationArgs<"getArchitectDependencytrackingConsumedresources">): Promise<GenesysCloudFullApiOperationResponseMap["getArchitectDependencytrackingConsumedresources"]>;
  GetArchitectDependencytrackingConsumingresources(...args: GenesysCloudFullApiOperationArgs<"getArchitectDependencytrackingConsumingresources">): Promise<GenesysCloudFullApiOperationResponseMap["getArchitectDependencytrackingConsumingresources"]>;
  GetArchitectDependencytrackingDeletedresourceconsumers(...args: GenesysCloudFullApiOperationArgs<"getArchitectDependencytrackingDeletedresourceconsumers">): Promise<GenesysCloudFullApiOperationResponseMap["getArchitectDependencytrackingDeletedresourceconsumers"]>;
  GetArchitectDependencytrackingObject(...args: GenesysCloudFullApiOperationArgs<"getArchitectDependencytrackingObject">): Promise<GenesysCloudFullApiOperationResponseMap["getArchitectDependencytrackingObject"]>;
  GetArchitectDependencytrackingType(...args: GenesysCloudFullApiOperationArgs<"getArchitectDependencytrackingType">): Promise<GenesysCloudFullApiOperationResponseMap["getArchitectDependencytrackingType"]>;
  GetArchitectDependencytrackingTypes(...args: GenesysCloudFullApiOperationArgs<"getArchitectDependencytrackingTypes">): Promise<GenesysCloudFullApiOperationResponseMap["getArchitectDependencytrackingTypes"]>;
  GetArchitectDependencytrackingUpdatedresourceconsumers(...args: GenesysCloudFullApiOperationArgs<"getArchitectDependencytrackingUpdatedresourceconsumers">): Promise<GenesysCloudFullApiOperationResponseMap["getArchitectDependencytrackingUpdatedresourceconsumers"]>;
  GetArchitectEmergencygroup(...args: GenesysCloudFullApiOperationArgs<"getArchitectEmergencygroup">): Promise<GenesysCloudFullApiOperationResponseMap["getArchitectEmergencygroup"]>;
  GetArchitectEmergencygroups(...args: GenesysCloudFullApiOperationArgs<"getArchitectEmergencygroups">): Promise<GenesysCloudFullApiOperationResponseMap["getArchitectEmergencygroups"]>;
  GetArchitectEmergencygroupsDivisionviews(...args: GenesysCloudFullApiOperationArgs<"getArchitectEmergencygroupsDivisionviews">): Promise<GenesysCloudFullApiOperationResponseMap["getArchitectEmergencygroupsDivisionviews"]>;
  GetArchitectGrammar(...args: GenesysCloudFullApiOperationArgs<"getArchitectGrammar">): Promise<GenesysCloudFullApiOperationResponseMap["getArchitectGrammar"]>;
  GetArchitectGrammarLanguage(...args: GenesysCloudFullApiOperationArgs<"getArchitectGrammarLanguage">): Promise<GenesysCloudFullApiOperationResponseMap["getArchitectGrammarLanguage"]>;
  GetArchitectGrammars(...args: GenesysCloudFullApiOperationArgs<"getArchitectGrammars">): Promise<GenesysCloudFullApiOperationResponseMap["getArchitectGrammars"]>;
  GetArchitectIvr(...args: GenesysCloudFullApiOperationArgs<"getArchitectIvr">): Promise<GenesysCloudFullApiOperationResponseMap["getArchitectIvr"]>;
  GetArchitectIvrIdentityresolution(...args: GenesysCloudFullApiOperationArgs<"getArchitectIvrIdentityresolution">): Promise<GenesysCloudFullApiOperationResponseMap["getArchitectIvrIdentityresolution"]>;
  GetArchitectIvrs(...args: GenesysCloudFullApiOperationArgs<"getArchitectIvrs">): Promise<GenesysCloudFullApiOperationResponseMap["getArchitectIvrs"]>;
  GetArchitectIvrsDivisionviews(...args: GenesysCloudFullApiOperationArgs<"getArchitectIvrsDivisionviews">): Promise<GenesysCloudFullApiOperationResponseMap["getArchitectIvrsDivisionviews"]>;
  GetArchitectPrompt(...args: GenesysCloudFullApiOperationArgs<"getArchitectPrompt">): Promise<GenesysCloudFullApiOperationResponseMap["getArchitectPrompt"]>;
  GetArchitectPromptHistoryHistoryId(...args: GenesysCloudFullApiOperationArgs<"getArchitectPromptHistoryHistoryId">): Promise<GenesysCloudFullApiOperationResponseMap["getArchitectPromptHistoryHistoryId"]>;
  GetArchitectPromptResource(...args: GenesysCloudFullApiOperationArgs<"getArchitectPromptResource">): Promise<GenesysCloudFullApiOperationResponseMap["getArchitectPromptResource"]>;
  GetArchitectPromptResources(...args: GenesysCloudFullApiOperationArgs<"getArchitectPromptResources">): Promise<GenesysCloudFullApiOperationResponseMap["getArchitectPromptResources"]>;
  GetArchitectPrompts(...args: GenesysCloudFullApiOperationArgs<"getArchitectPrompts">): Promise<GenesysCloudFullApiOperationResponseMap["getArchitectPrompts"]>;
  GetArchitectSchedule(...args: GenesysCloudFullApiOperationArgs<"getArchitectSchedule">): Promise<GenesysCloudFullApiOperationResponseMap["getArchitectSchedule"]>;
  GetArchitectSchedulegroup(...args: GenesysCloudFullApiOperationArgs<"getArchitectSchedulegroup">): Promise<GenesysCloudFullApiOperationResponseMap["getArchitectSchedulegroup"]>;
  GetArchitectSchedulegroups(...args: GenesysCloudFullApiOperationArgs<"getArchitectSchedulegroups">): Promise<GenesysCloudFullApiOperationResponseMap["getArchitectSchedulegroups"]>;
  GetArchitectSchedulegroupsDivisionviews(...args: GenesysCloudFullApiOperationArgs<"getArchitectSchedulegroupsDivisionviews">): Promise<GenesysCloudFullApiOperationResponseMap["getArchitectSchedulegroupsDivisionviews"]>;
  GetArchitectSchedules(...args: GenesysCloudFullApiOperationArgs<"getArchitectSchedules">): Promise<GenesysCloudFullApiOperationResponseMap["getArchitectSchedules"]>;
  GetArchitectSchedulesDivisionviews(...args: GenesysCloudFullApiOperationArgs<"getArchitectSchedulesDivisionviews">): Promise<GenesysCloudFullApiOperationResponseMap["getArchitectSchedulesDivisionviews"]>;
  GetArchitectSystemprompt(...args: GenesysCloudFullApiOperationArgs<"getArchitectSystemprompt">): Promise<GenesysCloudFullApiOperationResponseMap["getArchitectSystemprompt"]>;
  GetArchitectSystempromptHistoryHistoryId(...args: GenesysCloudFullApiOperationArgs<"getArchitectSystempromptHistoryHistoryId">): Promise<GenesysCloudFullApiOperationResponseMap["getArchitectSystempromptHistoryHistoryId"]>;
  GetArchitectSystempromptResource(...args: GenesysCloudFullApiOperationArgs<"getArchitectSystempromptResource">): Promise<GenesysCloudFullApiOperationResponseMap["getArchitectSystempromptResource"]>;
  GetArchitectSystempromptResources(...args: GenesysCloudFullApiOperationArgs<"getArchitectSystempromptResources">): Promise<GenesysCloudFullApiOperationResponseMap["getArchitectSystempromptResources"]>;
  GetArchitectSystemprompts(...args: GenesysCloudFullApiOperationArgs<"getArchitectSystemprompts">): Promise<GenesysCloudFullApiOperationResponseMap["getArchitectSystemprompts"]>;
  GetFlow(...args: GenesysCloudFullApiOperationArgs<"getFlow">): Promise<GenesysCloudFullApiOperationResponseMap["getFlow"]>;
  GetFlowHistoryHistoryId(...args: GenesysCloudFullApiOperationArgs<"getFlowHistoryHistoryId">): Promise<GenesysCloudFullApiOperationResponseMap["getFlowHistoryHistoryId"]>;
  GetFlowInstancesSettingsLoglevels(...args: GenesysCloudFullApiOperationArgs<"getFlowInstancesSettingsLoglevels">): Promise<GenesysCloudFullApiOperationResponseMap["getFlowInstancesSettingsLoglevels"]>;
  GetFlowLatestconfiguration(...args: GenesysCloudFullApiOperationArgs<"getFlowLatestconfiguration">): Promise<GenesysCloudFullApiOperationResponseMap["getFlowLatestconfiguration"]>;
  GetFlows(...args: GenesysCloudFullApiOperationArgs<"getFlows">): Promise<GenesysCloudFullApiOperationResponseMap["getFlows"]>;
  GetFlowsDatatable(...args: GenesysCloudFullApiOperationArgs<"getFlowsDatatable">): Promise<GenesysCloudFullApiOperationResponseMap["getFlowsDatatable"]>;
  GetFlowsDatatableExportJob(...args: GenesysCloudFullApiOperationArgs<"getFlowsDatatableExportJob">): Promise<GenesysCloudFullApiOperationResponseMap["getFlowsDatatableExportJob"]>;
  GetFlowsDatatableImportJob(...args: GenesysCloudFullApiOperationArgs<"getFlowsDatatableImportJob">): Promise<GenesysCloudFullApiOperationResponseMap["getFlowsDatatableImportJob"]>;
  GetFlowsDatatableImportJobs(...args: GenesysCloudFullApiOperationArgs<"getFlowsDatatableImportJobs">): Promise<GenesysCloudFullApiOperationResponseMap["getFlowsDatatableImportJobs"]>;
  GetFlowsDatatableRow(...args: GenesysCloudFullApiOperationArgs<"getFlowsDatatableRow">): Promise<GenesysCloudFullApiOperationResponseMap["getFlowsDatatableRow"]>;
  GetFlowsDatatableRows(...args: GenesysCloudFullApiOperationArgs<"getFlowsDatatableRows">): Promise<GenesysCloudFullApiOperationResponseMap["getFlowsDatatableRows"]>;
  GetFlowsDatatables(...args: GenesysCloudFullApiOperationArgs<"getFlowsDatatables">): Promise<GenesysCloudFullApiOperationResponseMap["getFlowsDatatables"]>;
  GetFlowsDatatablesDivisionview(...args: GenesysCloudFullApiOperationArgs<"getFlowsDatatablesDivisionview">): Promise<GenesysCloudFullApiOperationResponseMap["getFlowsDatatablesDivisionview"]>;
  GetFlowsDatatablesDivisionviews(...args: GenesysCloudFullApiOperationArgs<"getFlowsDatatablesDivisionviews">): Promise<GenesysCloudFullApiOperationResponseMap["getFlowsDatatablesDivisionviews"]>;
  GetFlowsDivisionviews(...args: GenesysCloudFullApiOperationArgs<"getFlowsDivisionviews">): Promise<GenesysCloudFullApiOperationResponseMap["getFlowsDivisionviews"]>;
  GetFlowsExecution(...args: GenesysCloudFullApiOperationArgs<"getFlowsExecution">): Promise<GenesysCloudFullApiOperationResponseMap["getFlowsExecution"]>;
  GetFlowsExportJob(...args: GenesysCloudFullApiOperationArgs<"getFlowsExportJob">): Promise<GenesysCloudFullApiOperationResponseMap["getFlowsExportJob"]>;
  GetFlowsInstance(...args: GenesysCloudFullApiOperationArgs<"getFlowsInstance">): Promise<GenesysCloudFullApiOperationResponseMap["getFlowsInstance"]>;
  GetFlowsInstancesJob(...args: GenesysCloudFullApiOperationArgs<"getFlowsInstancesJob">): Promise<GenesysCloudFullApiOperationResponseMap["getFlowsInstancesJob"]>;
  GetFlowsInstancesQuerycapabilities(...args: GenesysCloudFullApiOperationArgs<"getFlowsInstancesQuerycapabilities">): Promise<GenesysCloudFullApiOperationResponseMap["getFlowsInstancesQuerycapabilities"]>;
  GetFlowsInstancesSettingsExecutiondata(...args: GenesysCloudFullApiOperationArgs<"getFlowsInstancesSettingsExecutiondata">): Promise<GenesysCloudFullApiOperationResponseMap["getFlowsInstancesSettingsExecutiondata"]>;
  GetFlowsInstancesSettingsLoglevels(...args: GenesysCloudFullApiOperationArgs<"getFlowsInstancesSettingsLoglevels">): Promise<GenesysCloudFullApiOperationResponseMap["getFlowsInstancesSettingsLoglevels"]>;
  GetFlowsInstancesSettingsLoglevelsCharacteristics(...args: GenesysCloudFullApiOperationArgs<"getFlowsInstancesSettingsLoglevelsCharacteristics">): Promise<GenesysCloudFullApiOperationResponseMap["getFlowsInstancesSettingsLoglevelsCharacteristics"]>;
  GetFlowsInstancesSettingsLoglevelsDefault(...args: GenesysCloudFullApiOperationArgs<"getFlowsInstancesSettingsLoglevelsDefault">): Promise<GenesysCloudFullApiOperationResponseMap["getFlowsInstancesSettingsLoglevelsDefault"]>;
  GetFlowsJob(...args: GenesysCloudFullApiOperationArgs<"getFlowsJob">): Promise<GenesysCloudFullApiOperationResponseMap["getFlowsJob"]>;
}

export const GenesysCloudFullApiArchitect01GeneratedFunctionNames = [
  "DeleteArchitectEmergencygroup",
  "DeleteArchitectGrammar",
  "DeleteArchitectGrammarLanguage",
  "DeleteArchitectGrammarLanguageFilesDtmf",
  "DeleteArchitectGrammarLanguageFilesVoice",
  "DeleteArchitectIvr",
  "DeleteArchitectPrompt",
  "DeleteArchitectPromptResource",
  "DeleteArchitectPromptResourceAudio",
  "DeleteArchitectPrompts",
  "DeleteArchitectSchedule",
  "DeleteArchitectSchedulegroup",
  "DeleteArchitectSystempromptResource",
  "DeleteFlow",
  "DeleteFlowInstancesSettingsLoglevels",
  "DeleteFlows",
  "DeleteFlowsDatatable",
  "DeleteFlowsDatatableRow",
  "DeleteFlowsInstancesSettingsLoglevelsDefault",
  "DeleteFlowsMilestone",
  "GetArchitectDependencytracking",
  "GetArchitectDependencytrackingBuild",
  "GetArchitectDependencytrackingConsumedresources",
  "GetArchitectDependencytrackingConsumingresources",
  "GetArchitectDependencytrackingDeletedresourceconsumers",
  "GetArchitectDependencytrackingObject",
  "GetArchitectDependencytrackingType",
  "GetArchitectDependencytrackingTypes",
  "GetArchitectDependencytrackingUpdatedresourceconsumers",
  "GetArchitectEmergencygroup",
  "GetArchitectEmergencygroups",
  "GetArchitectEmergencygroupsDivisionviews",
  "GetArchitectGrammar",
  "GetArchitectGrammarLanguage",
  "GetArchitectGrammars",
  "GetArchitectIvr",
  "GetArchitectIvrIdentityresolution",
  "GetArchitectIvrs",
  "GetArchitectIvrsDivisionviews",
  "GetArchitectPrompt",
  "GetArchitectPromptHistoryHistoryId",
  "GetArchitectPromptResource",
  "GetArchitectPromptResources",
  "GetArchitectPrompts",
  "GetArchitectSchedule",
  "GetArchitectSchedulegroup",
  "GetArchitectSchedulegroups",
  "GetArchitectSchedulegroupsDivisionviews",
  "GetArchitectSchedules",
  "GetArchitectSchedulesDivisionviews",
  "GetArchitectSystemprompt",
  "GetArchitectSystempromptHistoryHistoryId",
  "GetArchitectSystempromptResource",
  "GetArchitectSystempromptResources",
  "GetArchitectSystemprompts",
  "GetFlow",
  "GetFlowHistoryHistoryId",
  "GetFlowInstancesSettingsLoglevels",
  "GetFlowLatestconfiguration",
  "GetFlows",
  "GetFlowsDatatable",
  "GetFlowsDatatableExportJob",
  "GetFlowsDatatableImportJob",
  "GetFlowsDatatableImportJobs",
  "GetFlowsDatatableRow",
  "GetFlowsDatatableRows",
  "GetFlowsDatatables",
  "GetFlowsDatatablesDivisionview",
  "GetFlowsDatatablesDivisionviews",
  "GetFlowsDivisionviews",
  "GetFlowsExecution",
  "GetFlowsExportJob",
  "GetFlowsInstance",
  "GetFlowsInstancesJob",
  "GetFlowsInstancesQuerycapabilities",
  "GetFlowsInstancesSettingsExecutiondata",
  "GetFlowsInstancesSettingsLoglevels",
  "GetFlowsInstancesSettingsLoglevelsCharacteristics",
  "GetFlowsInstancesSettingsLoglevelsDefault",
  "GetFlowsJob"
] as const satisfies readonly (keyof GenesysCloudFullApiArchitect01GeneratedClient)[];

export function createGenesysCloudFullApiArchitect01GeneratedClient(
  callOperation: GenesysCloudGeneratedOperationCaller,
): GenesysCloudFullApiArchitect01GeneratedClient {
  return {
    DeleteArchitectEmergencygroup: (...args) => callOperation("deleteArchitectEmergencygroup", ...(args as GenesysCloudFullApiOperationArgs<"deleteArchitectEmergencygroup">)),
    DeleteArchitectGrammar: (...args) => callOperation("deleteArchitectGrammar", ...(args as GenesysCloudFullApiOperationArgs<"deleteArchitectGrammar">)),
    DeleteArchitectGrammarLanguage: (...args) => callOperation("deleteArchitectGrammarLanguage", ...(args as GenesysCloudFullApiOperationArgs<"deleteArchitectGrammarLanguage">)),
    DeleteArchitectGrammarLanguageFilesDtmf: (...args) => callOperation("deleteArchitectGrammarLanguageFilesDtmf", ...(args as GenesysCloudFullApiOperationArgs<"deleteArchitectGrammarLanguageFilesDtmf">)),
    DeleteArchitectGrammarLanguageFilesVoice: (...args) => callOperation("deleteArchitectGrammarLanguageFilesVoice", ...(args as GenesysCloudFullApiOperationArgs<"deleteArchitectGrammarLanguageFilesVoice">)),
    DeleteArchitectIvr: (...args) => callOperation("deleteArchitectIvr", ...(args as GenesysCloudFullApiOperationArgs<"deleteArchitectIvr">)),
    DeleteArchitectPrompt: (...args) => callOperation("deleteArchitectPrompt", ...(args as GenesysCloudFullApiOperationArgs<"deleteArchitectPrompt">)),
    DeleteArchitectPromptResource: (...args) => callOperation("deleteArchitectPromptResource", ...(args as GenesysCloudFullApiOperationArgs<"deleteArchitectPromptResource">)),
    DeleteArchitectPromptResourceAudio: (...args) => callOperation("deleteArchitectPromptResourceAudio", ...(args as GenesysCloudFullApiOperationArgs<"deleteArchitectPromptResourceAudio">)),
    DeleteArchitectPrompts: (...args) => callOperation("deleteArchitectPrompts", ...(args as GenesysCloudFullApiOperationArgs<"deleteArchitectPrompts">)),
    DeleteArchitectSchedule: (...args) => callOperation("deleteArchitectSchedule", ...(args as GenesysCloudFullApiOperationArgs<"deleteArchitectSchedule">)),
    DeleteArchitectSchedulegroup: (...args) => callOperation("deleteArchitectSchedulegroup", ...(args as GenesysCloudFullApiOperationArgs<"deleteArchitectSchedulegroup">)),
    DeleteArchitectSystempromptResource: (...args) => callOperation("deleteArchitectSystempromptResource", ...(args as GenesysCloudFullApiOperationArgs<"deleteArchitectSystempromptResource">)),
    DeleteFlow: (...args) => callOperation("deleteFlow", ...(args as GenesysCloudFullApiOperationArgs<"deleteFlow">)),
    DeleteFlowInstancesSettingsLoglevels: (...args) => callOperation("deleteFlowInstancesSettingsLoglevels", ...(args as GenesysCloudFullApiOperationArgs<"deleteFlowInstancesSettingsLoglevels">)),
    DeleteFlows: (...args) => callOperation("deleteFlows", ...(args as GenesysCloudFullApiOperationArgs<"deleteFlows">)),
    DeleteFlowsDatatable: (...args) => callOperation("deleteFlowsDatatable", ...(args as GenesysCloudFullApiOperationArgs<"deleteFlowsDatatable">)),
    DeleteFlowsDatatableRow: (...args) => callOperation("deleteFlowsDatatableRow", ...(args as GenesysCloudFullApiOperationArgs<"deleteFlowsDatatableRow">)),
    DeleteFlowsInstancesSettingsLoglevelsDefault: (...args) => callOperation("deleteFlowsInstancesSettingsLoglevelsDefault", ...(args as GenesysCloudFullApiOperationArgs<"deleteFlowsInstancesSettingsLoglevelsDefault">)),
    DeleteFlowsMilestone: (...args) => callOperation("deleteFlowsMilestone", ...(args as GenesysCloudFullApiOperationArgs<"deleteFlowsMilestone">)),
    GetArchitectDependencytracking: (...args) => callOperation("getArchitectDependencytracking", ...(args as GenesysCloudFullApiOperationArgs<"getArchitectDependencytracking">)),
    GetArchitectDependencytrackingBuild: (...args) => callOperation("getArchitectDependencytrackingBuild", ...(args as GenesysCloudFullApiOperationArgs<"getArchitectDependencytrackingBuild">)),
    GetArchitectDependencytrackingConsumedresources: (...args) => callOperation("getArchitectDependencytrackingConsumedresources", ...(args as GenesysCloudFullApiOperationArgs<"getArchitectDependencytrackingConsumedresources">)),
    GetArchitectDependencytrackingConsumingresources: (...args) => callOperation("getArchitectDependencytrackingConsumingresources", ...(args as GenesysCloudFullApiOperationArgs<"getArchitectDependencytrackingConsumingresources">)),
    GetArchitectDependencytrackingDeletedresourceconsumers: (...args) => callOperation("getArchitectDependencytrackingDeletedresourceconsumers", ...(args as GenesysCloudFullApiOperationArgs<"getArchitectDependencytrackingDeletedresourceconsumers">)),
    GetArchitectDependencytrackingObject: (...args) => callOperation("getArchitectDependencytrackingObject", ...(args as GenesysCloudFullApiOperationArgs<"getArchitectDependencytrackingObject">)),
    GetArchitectDependencytrackingType: (...args) => callOperation("getArchitectDependencytrackingType", ...(args as GenesysCloudFullApiOperationArgs<"getArchitectDependencytrackingType">)),
    GetArchitectDependencytrackingTypes: (...args) => callOperation("getArchitectDependencytrackingTypes", ...(args as GenesysCloudFullApiOperationArgs<"getArchitectDependencytrackingTypes">)),
    GetArchitectDependencytrackingUpdatedresourceconsumers: (...args) => callOperation("getArchitectDependencytrackingUpdatedresourceconsumers", ...(args as GenesysCloudFullApiOperationArgs<"getArchitectDependencytrackingUpdatedresourceconsumers">)),
    GetArchitectEmergencygroup: (...args) => callOperation("getArchitectEmergencygroup", ...(args as GenesysCloudFullApiOperationArgs<"getArchitectEmergencygroup">)),
    GetArchitectEmergencygroups: (...args) => callOperation("getArchitectEmergencygroups", ...(args as GenesysCloudFullApiOperationArgs<"getArchitectEmergencygroups">)),
    GetArchitectEmergencygroupsDivisionviews: (...args) => callOperation("getArchitectEmergencygroupsDivisionviews", ...(args as GenesysCloudFullApiOperationArgs<"getArchitectEmergencygroupsDivisionviews">)),
    GetArchitectGrammar: (...args) => callOperation("getArchitectGrammar", ...(args as GenesysCloudFullApiOperationArgs<"getArchitectGrammar">)),
    GetArchitectGrammarLanguage: (...args) => callOperation("getArchitectGrammarLanguage", ...(args as GenesysCloudFullApiOperationArgs<"getArchitectGrammarLanguage">)),
    GetArchitectGrammars: (...args) => callOperation("getArchitectGrammars", ...(args as GenesysCloudFullApiOperationArgs<"getArchitectGrammars">)),
    GetArchitectIvr: (...args) => callOperation("getArchitectIvr", ...(args as GenesysCloudFullApiOperationArgs<"getArchitectIvr">)),
    GetArchitectIvrIdentityresolution: (...args) => callOperation("getArchitectIvrIdentityresolution", ...(args as GenesysCloudFullApiOperationArgs<"getArchitectIvrIdentityresolution">)),
    GetArchitectIvrs: (...args) => callOperation("getArchitectIvrs", ...(args as GenesysCloudFullApiOperationArgs<"getArchitectIvrs">)),
    GetArchitectIvrsDivisionviews: (...args) => callOperation("getArchitectIvrsDivisionviews", ...(args as GenesysCloudFullApiOperationArgs<"getArchitectIvrsDivisionviews">)),
    GetArchitectPrompt: (...args) => callOperation("getArchitectPrompt", ...(args as GenesysCloudFullApiOperationArgs<"getArchitectPrompt">)),
    GetArchitectPromptHistoryHistoryId: (...args) => callOperation("getArchitectPromptHistoryHistoryId", ...(args as GenesysCloudFullApiOperationArgs<"getArchitectPromptHistoryHistoryId">)),
    GetArchitectPromptResource: (...args) => callOperation("getArchitectPromptResource", ...(args as GenesysCloudFullApiOperationArgs<"getArchitectPromptResource">)),
    GetArchitectPromptResources: (...args) => callOperation("getArchitectPromptResources", ...(args as GenesysCloudFullApiOperationArgs<"getArchitectPromptResources">)),
    GetArchitectPrompts: (...args) => callOperation("getArchitectPrompts", ...(args as GenesysCloudFullApiOperationArgs<"getArchitectPrompts">)),
    GetArchitectSchedule: (...args) => callOperation("getArchitectSchedule", ...(args as GenesysCloudFullApiOperationArgs<"getArchitectSchedule">)),
    GetArchitectSchedulegroup: (...args) => callOperation("getArchitectSchedulegroup", ...(args as GenesysCloudFullApiOperationArgs<"getArchitectSchedulegroup">)),
    GetArchitectSchedulegroups: (...args) => callOperation("getArchitectSchedulegroups", ...(args as GenesysCloudFullApiOperationArgs<"getArchitectSchedulegroups">)),
    GetArchitectSchedulegroupsDivisionviews: (...args) => callOperation("getArchitectSchedulegroupsDivisionviews", ...(args as GenesysCloudFullApiOperationArgs<"getArchitectSchedulegroupsDivisionviews">)),
    GetArchitectSchedules: (...args) => callOperation("getArchitectSchedules", ...(args as GenesysCloudFullApiOperationArgs<"getArchitectSchedules">)),
    GetArchitectSchedulesDivisionviews: (...args) => callOperation("getArchitectSchedulesDivisionviews", ...(args as GenesysCloudFullApiOperationArgs<"getArchitectSchedulesDivisionviews">)),
    GetArchitectSystemprompt: (...args) => callOperation("getArchitectSystemprompt", ...(args as GenesysCloudFullApiOperationArgs<"getArchitectSystemprompt">)),
    GetArchitectSystempromptHistoryHistoryId: (...args) => callOperation("getArchitectSystempromptHistoryHistoryId", ...(args as GenesysCloudFullApiOperationArgs<"getArchitectSystempromptHistoryHistoryId">)),
    GetArchitectSystempromptResource: (...args) => callOperation("getArchitectSystempromptResource", ...(args as GenesysCloudFullApiOperationArgs<"getArchitectSystempromptResource">)),
    GetArchitectSystempromptResources: (...args) => callOperation("getArchitectSystempromptResources", ...(args as GenesysCloudFullApiOperationArgs<"getArchitectSystempromptResources">)),
    GetArchitectSystemprompts: (...args) => callOperation("getArchitectSystemprompts", ...(args as GenesysCloudFullApiOperationArgs<"getArchitectSystemprompts">)),
    GetFlow: (...args) => callOperation("getFlow", ...(args as GenesysCloudFullApiOperationArgs<"getFlow">)),
    GetFlowHistoryHistoryId: (...args) => callOperation("getFlowHistoryHistoryId", ...(args as GenesysCloudFullApiOperationArgs<"getFlowHistoryHistoryId">)),
    GetFlowInstancesSettingsLoglevels: (...args) => callOperation("getFlowInstancesSettingsLoglevels", ...(args as GenesysCloudFullApiOperationArgs<"getFlowInstancesSettingsLoglevels">)),
    GetFlowLatestconfiguration: (...args) => callOperation("getFlowLatestconfiguration", ...(args as GenesysCloudFullApiOperationArgs<"getFlowLatestconfiguration">)),
    GetFlows: (...args) => callOperation("getFlows", ...(args as GenesysCloudFullApiOperationArgs<"getFlows">)),
    GetFlowsDatatable: (...args) => callOperation("getFlowsDatatable", ...(args as GenesysCloudFullApiOperationArgs<"getFlowsDatatable">)),
    GetFlowsDatatableExportJob: (...args) => callOperation("getFlowsDatatableExportJob", ...(args as GenesysCloudFullApiOperationArgs<"getFlowsDatatableExportJob">)),
    GetFlowsDatatableImportJob: (...args) => callOperation("getFlowsDatatableImportJob", ...(args as GenesysCloudFullApiOperationArgs<"getFlowsDatatableImportJob">)),
    GetFlowsDatatableImportJobs: (...args) => callOperation("getFlowsDatatableImportJobs", ...(args as GenesysCloudFullApiOperationArgs<"getFlowsDatatableImportJobs">)),
    GetFlowsDatatableRow: (...args) => callOperation("getFlowsDatatableRow", ...(args as GenesysCloudFullApiOperationArgs<"getFlowsDatatableRow">)),
    GetFlowsDatatableRows: (...args) => callOperation("getFlowsDatatableRows", ...(args as GenesysCloudFullApiOperationArgs<"getFlowsDatatableRows">)),
    GetFlowsDatatables: (...args) => callOperation("getFlowsDatatables", ...(args as GenesysCloudFullApiOperationArgs<"getFlowsDatatables">)),
    GetFlowsDatatablesDivisionview: (...args) => callOperation("getFlowsDatatablesDivisionview", ...(args as GenesysCloudFullApiOperationArgs<"getFlowsDatatablesDivisionview">)),
    GetFlowsDatatablesDivisionviews: (...args) => callOperation("getFlowsDatatablesDivisionviews", ...(args as GenesysCloudFullApiOperationArgs<"getFlowsDatatablesDivisionviews">)),
    GetFlowsDivisionviews: (...args) => callOperation("getFlowsDivisionviews", ...(args as GenesysCloudFullApiOperationArgs<"getFlowsDivisionviews">)),
    GetFlowsExecution: (...args) => callOperation("getFlowsExecution", ...(args as GenesysCloudFullApiOperationArgs<"getFlowsExecution">)),
    GetFlowsExportJob: (...args) => callOperation("getFlowsExportJob", ...(args as GenesysCloudFullApiOperationArgs<"getFlowsExportJob">)),
    GetFlowsInstance: (...args) => callOperation("getFlowsInstance", ...(args as GenesysCloudFullApiOperationArgs<"getFlowsInstance">)),
    GetFlowsInstancesJob: (...args) => callOperation("getFlowsInstancesJob", ...(args as GenesysCloudFullApiOperationArgs<"getFlowsInstancesJob">)),
    GetFlowsInstancesQuerycapabilities: (...args) => callOperation("getFlowsInstancesQuerycapabilities", ...(args as GenesysCloudFullApiOperationArgs<"getFlowsInstancesQuerycapabilities">)),
    GetFlowsInstancesSettingsExecutiondata: (...args) => callOperation("getFlowsInstancesSettingsExecutiondata", ...(args as GenesysCloudFullApiOperationArgs<"getFlowsInstancesSettingsExecutiondata">)),
    GetFlowsInstancesSettingsLoglevels: (...args) => callOperation("getFlowsInstancesSettingsLoglevels", ...(args as GenesysCloudFullApiOperationArgs<"getFlowsInstancesSettingsLoglevels">)),
    GetFlowsInstancesSettingsLoglevelsCharacteristics: (...args) => callOperation("getFlowsInstancesSettingsLoglevelsCharacteristics", ...(args as GenesysCloudFullApiOperationArgs<"getFlowsInstancesSettingsLoglevelsCharacteristics">)),
    GetFlowsInstancesSettingsLoglevelsDefault: (...args) => callOperation("getFlowsInstancesSettingsLoglevelsDefault", ...(args as GenesysCloudFullApiOperationArgs<"getFlowsInstancesSettingsLoglevelsDefault">)),
    GetFlowsJob: (...args) => callOperation("getFlowsJob", ...(args as GenesysCloudFullApiOperationArgs<"getFlowsJob">)),
  };
}
