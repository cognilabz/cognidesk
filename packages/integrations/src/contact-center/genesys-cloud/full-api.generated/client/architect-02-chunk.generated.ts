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
export const GenesysCloudFullApiArchitect02OperationKeys = [
  "getFlowsMilestone",
  "getFlowsMilestones",
  "getFlowsMilestonesDivisionviews",
  "getFlowsOutcome",
  "getFlowsOutcomes",
  "getFlowsOutcomesDivisionviews",
  "getFlowVersion",
  "getFlowVersionConfiguration",
  "getFlowVersionHealth",
  "getFlowVersionIntentHealth",
  "getFlowVersionIntentUtteranceHealth",
  "getFlowVersions",
  "patchArchitectGrammar",
  "patchArchitectGrammarLanguage",
  "patchFlowsInstancesSettingsExecutiondata",
  "postArchitectDependencytrackingBuild",
  "postArchitectEmergencygroups",
  "postArchitectGrammarLanguageFilesDtmf",
  "postArchitectGrammarLanguageFilesVoice",
  "postArchitectGrammarLanguages",
  "postArchitectGrammars",
  "postArchitectIvrs",
  "postArchitectPromptHistory",
  "postArchitectPromptResources",
  "postArchitectPrompts",
  "postArchitectSchedulegroups",
  "postArchitectSchedules",
  "postArchitectSystempromptHistory",
  "postArchitectSystempromptResources",
  "postFlowHistory",
  "postFlowInstancesSettingsLoglevels",
  "postFlows",
  "postFlowsActionsCheckin",
  "postFlowsActionsCheckout",
  "postFlowsActionsDeactivate",
  "postFlowsActionsPublish",
  "postFlowsActionsRevert",
  "postFlowsActionsUnlock",
  "postFlowsDatatableExportJobs",
  "postFlowsDatatableImportCsvJobs",
  "postFlowsDatatableImportJobs",
  "postFlowsDatatableRows",
  "postFlowsDatatables",
  "postFlowsExecutions",
  "postFlowsExportJobs",
  "postFlowsInstancesJobs",
  "postFlowsInstancesQuery",
  "postFlowsJobs",
  "postFlowsMilestones",
  "postFlowsOutcomes",
  "postFlowVersions",
  "putArchitectEmergencygroup",
  "putArchitectIvr",
  "putArchitectIvrIdentityresolution",
  "putArchitectPrompt",
  "putArchitectPromptResource",
  "putArchitectSchedule",
  "putArchitectSchedulegroup",
  "putArchitectSystempromptResource",
  "putFlow",
  "putFlowInstancesSettingsLoglevels",
  "putFlowsDatatable",
  "putFlowsDatatableRow",
  "putFlowsInstancesSettingsLoglevelsDefault",
  "putFlowsMilestone",
  "putFlowsOutcome"
] as const;
export type GenesysCloudFullApiArchitect02OperationKey = typeof GenesysCloudFullApiArchitect02OperationKeys[number];
// End hardened literal operation keys.

export interface GenesysCloudFullApiArchitect02OperationPathParamMap {
  "getFlowsMilestone": { "milestoneId": GenesysCloudFullApiPathParamValue };
  "getFlowsMilestones": {};
  "getFlowsMilestonesDivisionviews": {};
  "getFlowsOutcome": { "flowOutcomeId": GenesysCloudFullApiPathParamValue };
  "getFlowsOutcomes": {};
  "getFlowsOutcomesDivisionviews": {};
  "getFlowVersion": { "flowId": GenesysCloudFullApiPathParamValue; "versionId": GenesysCloudFullApiPathParamValue };
  "getFlowVersionConfiguration": { "flowId": GenesysCloudFullApiPathParamValue; "versionId": GenesysCloudFullApiPathParamValue };
  "getFlowVersionHealth": { "flowId": GenesysCloudFullApiPathParamValue; "versionId": GenesysCloudFullApiPathParamValue };
  "getFlowVersionIntentHealth": { "flowId": GenesysCloudFullApiPathParamValue; "versionId": GenesysCloudFullApiPathParamValue; "intentId": GenesysCloudFullApiPathParamValue };
  "getFlowVersionIntentUtteranceHealth": { "flowId": GenesysCloudFullApiPathParamValue; "versionId": GenesysCloudFullApiPathParamValue; "intentId": GenesysCloudFullApiPathParamValue; "utteranceId": GenesysCloudFullApiPathParamValue };
  "getFlowVersions": { "flowId": GenesysCloudFullApiPathParamValue };
  "patchArchitectGrammar": { "grammarId": GenesysCloudFullApiPathParamValue };
  "patchArchitectGrammarLanguage": { "grammarId": GenesysCloudFullApiPathParamValue; "languageCode": GenesysCloudFullApiPathParamValue };
  "patchFlowsInstancesSettingsExecutiondata": {};
  "postArchitectDependencytrackingBuild": {};
  "postArchitectEmergencygroups": {};
  "postArchitectGrammarLanguageFilesDtmf": { "grammarId": GenesysCloudFullApiPathParamValue; "languageCode": GenesysCloudFullApiPathParamValue };
  "postArchitectGrammarLanguageFilesVoice": { "grammarId": GenesysCloudFullApiPathParamValue; "languageCode": GenesysCloudFullApiPathParamValue };
  "postArchitectGrammarLanguages": { "grammarId": GenesysCloudFullApiPathParamValue };
  "postArchitectGrammars": {};
  "postArchitectIvrs": {};
  "postArchitectPromptHistory": { "promptId": GenesysCloudFullApiPathParamValue };
  "postArchitectPromptResources": { "promptId": GenesysCloudFullApiPathParamValue };
  "postArchitectPrompts": {};
  "postArchitectSchedulegroups": {};
  "postArchitectSchedules": {};
  "postArchitectSystempromptHistory": { "promptId": GenesysCloudFullApiPathParamValue };
  "postArchitectSystempromptResources": { "promptId": GenesysCloudFullApiPathParamValue };
  "postFlowHistory": { "flowId": GenesysCloudFullApiPathParamValue };
  "postFlowInstancesSettingsLoglevels": { "flowId": GenesysCloudFullApiPathParamValue };
  "postFlows": {};
  "postFlowsActionsCheckin": {};
  "postFlowsActionsCheckout": {};
  "postFlowsActionsDeactivate": {};
  "postFlowsActionsPublish": {};
  "postFlowsActionsRevert": {};
  "postFlowsActionsUnlock": {};
  "postFlowsDatatableExportJobs": { "datatableId": GenesysCloudFullApiPathParamValue };
  "postFlowsDatatableImportCsvJobs": { "datatableId": GenesysCloudFullApiPathParamValue };
  "postFlowsDatatableImportJobs": { "datatableId": GenesysCloudFullApiPathParamValue };
  "postFlowsDatatableRows": { "datatableId": GenesysCloudFullApiPathParamValue };
  "postFlowsDatatables": {};
  "postFlowsExecutions": {};
  "postFlowsExportJobs": {};
  "postFlowsInstancesJobs": {};
  "postFlowsInstancesQuery": {};
  "postFlowsJobs": {};
  "postFlowsMilestones": {};
  "postFlowsOutcomes": {};
  "postFlowVersions": { "flowId": GenesysCloudFullApiPathParamValue };
  "putArchitectEmergencygroup": { "emergencyGroupId": GenesysCloudFullApiPathParamValue };
  "putArchitectIvr": { "ivrId": GenesysCloudFullApiPathParamValue };
  "putArchitectIvrIdentityresolution": { "ivrId": GenesysCloudFullApiPathParamValue };
  "putArchitectPrompt": { "promptId": GenesysCloudFullApiPathParamValue };
  "putArchitectPromptResource": { "promptId": GenesysCloudFullApiPathParamValue; "languageCode": GenesysCloudFullApiPathParamValue };
  "putArchitectSchedule": { "scheduleId": GenesysCloudFullApiPathParamValue };
  "putArchitectSchedulegroup": { "scheduleGroupId": GenesysCloudFullApiPathParamValue };
  "putArchitectSystempromptResource": { "promptId": GenesysCloudFullApiPathParamValue; "languageCode": GenesysCloudFullApiPathParamValue };
  "putFlow": { "flowId": GenesysCloudFullApiPathParamValue };
  "putFlowInstancesSettingsLoglevels": { "flowId": GenesysCloudFullApiPathParamValue };
  "putFlowsDatatable": { "datatableId": GenesysCloudFullApiPathParamValue };
  "putFlowsDatatableRow": { "datatableId": GenesysCloudFullApiPathParamValue; "rowId": GenesysCloudFullApiPathParamValue };
  "putFlowsInstancesSettingsLoglevelsDefault": {};
  "putFlowsMilestone": { "milestoneId": GenesysCloudFullApiPathParamValue };
  "putFlowsOutcome": { "flowOutcomeId": GenesysCloudFullApiPathParamValue };
}

export interface GenesysCloudFullApiArchitect02OperationRequestMap {
  "getFlowsMilestone": GenesysCloudFullApiOperationInput<"getFlowsMilestone">;
  "getFlowsMilestones": GenesysCloudFullApiOperationInput<"getFlowsMilestones">;
  "getFlowsMilestonesDivisionviews": GenesysCloudFullApiOperationInput<"getFlowsMilestonesDivisionviews">;
  "getFlowsOutcome": GenesysCloudFullApiOperationInput<"getFlowsOutcome">;
  "getFlowsOutcomes": GenesysCloudFullApiOperationInput<"getFlowsOutcomes">;
  "getFlowsOutcomesDivisionviews": GenesysCloudFullApiOperationInput<"getFlowsOutcomesDivisionviews">;
  "getFlowVersion": GenesysCloudFullApiOperationInput<"getFlowVersion">;
  "getFlowVersionConfiguration": GenesysCloudFullApiOperationInput<"getFlowVersionConfiguration">;
  "getFlowVersionHealth": GenesysCloudFullApiOperationInput<"getFlowVersionHealth">;
  "getFlowVersionIntentHealth": GenesysCloudFullApiOperationInput<"getFlowVersionIntentHealth">;
  "getFlowVersionIntentUtteranceHealth": GenesysCloudFullApiOperationInput<"getFlowVersionIntentUtteranceHealth">;
  "getFlowVersions": GenesysCloudFullApiOperationInput<"getFlowVersions">;
  "patchArchitectGrammar": GenesysCloudFullApiOperationInput<"patchArchitectGrammar">;
  "patchArchitectGrammarLanguage": GenesysCloudFullApiOperationInput<"patchArchitectGrammarLanguage">;
  "patchFlowsInstancesSettingsExecutiondata": GenesysCloudFullApiOperationInput<"patchFlowsInstancesSettingsExecutiondata">;
  "postArchitectDependencytrackingBuild": GenesysCloudFullApiOperationInput<"postArchitectDependencytrackingBuild">;
  "postArchitectEmergencygroups": GenesysCloudFullApiOperationInput<"postArchitectEmergencygroups">;
  "postArchitectGrammarLanguageFilesDtmf": GenesysCloudFullApiOperationInput<"postArchitectGrammarLanguageFilesDtmf">;
  "postArchitectGrammarLanguageFilesVoice": GenesysCloudFullApiOperationInput<"postArchitectGrammarLanguageFilesVoice">;
  "postArchitectGrammarLanguages": GenesysCloudFullApiOperationInput<"postArchitectGrammarLanguages">;
  "postArchitectGrammars": GenesysCloudFullApiOperationInput<"postArchitectGrammars">;
  "postArchitectIvrs": GenesysCloudFullApiOperationInput<"postArchitectIvrs">;
  "postArchitectPromptHistory": GenesysCloudFullApiOperationInput<"postArchitectPromptHistory">;
  "postArchitectPromptResources": GenesysCloudFullApiOperationInput<"postArchitectPromptResources">;
  "postArchitectPrompts": GenesysCloudFullApiOperationInput<"postArchitectPrompts">;
  "postArchitectSchedulegroups": GenesysCloudFullApiOperationInput<"postArchitectSchedulegroups">;
  "postArchitectSchedules": GenesysCloudFullApiOperationInput<"postArchitectSchedules">;
  "postArchitectSystempromptHistory": GenesysCloudFullApiOperationInput<"postArchitectSystempromptHistory">;
  "postArchitectSystempromptResources": GenesysCloudFullApiOperationInput<"postArchitectSystempromptResources">;
  "postFlowHistory": GenesysCloudFullApiOperationInput<"postFlowHistory">;
  "postFlowInstancesSettingsLoglevels": GenesysCloudFullApiOperationInput<"postFlowInstancesSettingsLoglevels">;
  "postFlows": GenesysCloudFullApiOperationInput<"postFlows">;
  "postFlowsActionsCheckin": GenesysCloudFullApiOperationInput<"postFlowsActionsCheckin">;
  "postFlowsActionsCheckout": GenesysCloudFullApiOperationInput<"postFlowsActionsCheckout">;
  "postFlowsActionsDeactivate": GenesysCloudFullApiOperationInput<"postFlowsActionsDeactivate">;
  "postFlowsActionsPublish": GenesysCloudFullApiOperationInput<"postFlowsActionsPublish">;
  "postFlowsActionsRevert": GenesysCloudFullApiOperationInput<"postFlowsActionsRevert">;
  "postFlowsActionsUnlock": GenesysCloudFullApiOperationInput<"postFlowsActionsUnlock">;
  "postFlowsDatatableExportJobs": GenesysCloudFullApiOperationInput<"postFlowsDatatableExportJobs">;
  "postFlowsDatatableImportCsvJobs": GenesysCloudFullApiOperationInput<"postFlowsDatatableImportCsvJobs">;
  "postFlowsDatatableImportJobs": GenesysCloudFullApiOperationInput<"postFlowsDatatableImportJobs">;
  "postFlowsDatatableRows": GenesysCloudFullApiOperationInput<"postFlowsDatatableRows">;
  "postFlowsDatatables": GenesysCloudFullApiOperationInput<"postFlowsDatatables">;
  "postFlowsExecutions": GenesysCloudFullApiOperationInput<"postFlowsExecutions">;
  "postFlowsExportJobs": GenesysCloudFullApiOperationInput<"postFlowsExportJobs">;
  "postFlowsInstancesJobs": GenesysCloudFullApiOperationInput<"postFlowsInstancesJobs">;
  "postFlowsInstancesQuery": GenesysCloudFullApiOperationInput<"postFlowsInstancesQuery">;
  "postFlowsJobs": GenesysCloudFullApiOperationInput<"postFlowsJobs">;
  "postFlowsMilestones": GenesysCloudFullApiOperationInput<"postFlowsMilestones">;
  "postFlowsOutcomes": GenesysCloudFullApiOperationInput<"postFlowsOutcomes">;
  "postFlowVersions": GenesysCloudFullApiOperationInput<"postFlowVersions">;
  "putArchitectEmergencygroup": GenesysCloudFullApiOperationInput<"putArchitectEmergencygroup">;
  "putArchitectIvr": GenesysCloudFullApiOperationInput<"putArchitectIvr">;
  "putArchitectIvrIdentityresolution": GenesysCloudFullApiOperationInput<"putArchitectIvrIdentityresolution">;
  "putArchitectPrompt": GenesysCloudFullApiOperationInput<"putArchitectPrompt">;
  "putArchitectPromptResource": GenesysCloudFullApiOperationInput<"putArchitectPromptResource">;
  "putArchitectSchedule": GenesysCloudFullApiOperationInput<"putArchitectSchedule">;
  "putArchitectSchedulegroup": GenesysCloudFullApiOperationInput<"putArchitectSchedulegroup">;
  "putArchitectSystempromptResource": GenesysCloudFullApiOperationInput<"putArchitectSystempromptResource">;
  "putFlow": GenesysCloudFullApiOperationInput<"putFlow">;
  "putFlowInstancesSettingsLoglevels": GenesysCloudFullApiOperationInput<"putFlowInstancesSettingsLoglevels">;
  "putFlowsDatatable": GenesysCloudFullApiOperationInput<"putFlowsDatatable">;
  "putFlowsDatatableRow": GenesysCloudFullApiOperationInput<"putFlowsDatatableRow">;
  "putFlowsInstancesSettingsLoglevelsDefault": GenesysCloudFullApiOperationInput<"putFlowsInstancesSettingsLoglevelsDefault">;
  "putFlowsMilestone": GenesysCloudFullApiOperationInput<"putFlowsMilestone">;
  "putFlowsOutcome": GenesysCloudFullApiOperationInput<"putFlowsOutcome">;
}

export interface GenesysCloudFullApiArchitect02GeneratedClient {
  GetFlowsMilestone(...args: GenesysCloudFullApiOperationArgs<"getFlowsMilestone">): Promise<GenesysCloudFullApiOperationResponseMap["getFlowsMilestone"]>;
  GetFlowsMilestones(...args: GenesysCloudFullApiOperationArgs<"getFlowsMilestones">): Promise<GenesysCloudFullApiOperationResponseMap["getFlowsMilestones"]>;
  GetFlowsMilestonesDivisionviews(...args: GenesysCloudFullApiOperationArgs<"getFlowsMilestonesDivisionviews">): Promise<GenesysCloudFullApiOperationResponseMap["getFlowsMilestonesDivisionviews"]>;
  GetFlowsOutcome(...args: GenesysCloudFullApiOperationArgs<"getFlowsOutcome">): Promise<GenesysCloudFullApiOperationResponseMap["getFlowsOutcome"]>;
  GetFlowsOutcomes(...args: GenesysCloudFullApiOperationArgs<"getFlowsOutcomes">): Promise<GenesysCloudFullApiOperationResponseMap["getFlowsOutcomes"]>;
  GetFlowsOutcomesDivisionviews(...args: GenesysCloudFullApiOperationArgs<"getFlowsOutcomesDivisionviews">): Promise<GenesysCloudFullApiOperationResponseMap["getFlowsOutcomesDivisionviews"]>;
  GetFlowVersion(...args: GenesysCloudFullApiOperationArgs<"getFlowVersion">): Promise<GenesysCloudFullApiOperationResponseMap["getFlowVersion"]>;
  GetFlowVersionConfiguration(...args: GenesysCloudFullApiOperationArgs<"getFlowVersionConfiguration">): Promise<GenesysCloudFullApiOperationResponseMap["getFlowVersionConfiguration"]>;
  GetFlowVersionHealth(...args: GenesysCloudFullApiOperationArgs<"getFlowVersionHealth">): Promise<GenesysCloudFullApiOperationResponseMap["getFlowVersionHealth"]>;
  GetFlowVersionIntentHealth(...args: GenesysCloudFullApiOperationArgs<"getFlowVersionIntentHealth">): Promise<GenesysCloudFullApiOperationResponseMap["getFlowVersionIntentHealth"]>;
  GetFlowVersionIntentUtteranceHealth(...args: GenesysCloudFullApiOperationArgs<"getFlowVersionIntentUtteranceHealth">): Promise<GenesysCloudFullApiOperationResponseMap["getFlowVersionIntentUtteranceHealth"]>;
  GetFlowVersions(...args: GenesysCloudFullApiOperationArgs<"getFlowVersions">): Promise<GenesysCloudFullApiOperationResponseMap["getFlowVersions"]>;
  PatchArchitectGrammar(...args: GenesysCloudFullApiOperationArgs<"patchArchitectGrammar">): Promise<GenesysCloudFullApiOperationResponseMap["patchArchitectGrammar"]>;
  PatchArchitectGrammarLanguage(...args: GenesysCloudFullApiOperationArgs<"patchArchitectGrammarLanguage">): Promise<GenesysCloudFullApiOperationResponseMap["patchArchitectGrammarLanguage"]>;
  PatchFlowsInstancesSettingsExecutiondata(...args: GenesysCloudFullApiOperationArgs<"patchFlowsInstancesSettingsExecutiondata">): Promise<GenesysCloudFullApiOperationResponseMap["patchFlowsInstancesSettingsExecutiondata"]>;
  PostArchitectDependencytrackingBuild(...args: GenesysCloudFullApiOperationArgs<"postArchitectDependencytrackingBuild">): Promise<GenesysCloudFullApiOperationResponseMap["postArchitectDependencytrackingBuild"]>;
  PostArchitectEmergencygroups(...args: GenesysCloudFullApiOperationArgs<"postArchitectEmergencygroups">): Promise<GenesysCloudFullApiOperationResponseMap["postArchitectEmergencygroups"]>;
  PostArchitectGrammarLanguageFilesDtmf(...args: GenesysCloudFullApiOperationArgs<"postArchitectGrammarLanguageFilesDtmf">): Promise<GenesysCloudFullApiOperationResponseMap["postArchitectGrammarLanguageFilesDtmf"]>;
  PostArchitectGrammarLanguageFilesVoice(...args: GenesysCloudFullApiOperationArgs<"postArchitectGrammarLanguageFilesVoice">): Promise<GenesysCloudFullApiOperationResponseMap["postArchitectGrammarLanguageFilesVoice"]>;
  PostArchitectGrammarLanguages(...args: GenesysCloudFullApiOperationArgs<"postArchitectGrammarLanguages">): Promise<GenesysCloudFullApiOperationResponseMap["postArchitectGrammarLanguages"]>;
  PostArchitectGrammars(...args: GenesysCloudFullApiOperationArgs<"postArchitectGrammars">): Promise<GenesysCloudFullApiOperationResponseMap["postArchitectGrammars"]>;
  PostArchitectIvrs(...args: GenesysCloudFullApiOperationArgs<"postArchitectIvrs">): Promise<GenesysCloudFullApiOperationResponseMap["postArchitectIvrs"]>;
  PostArchitectPromptHistory(...args: GenesysCloudFullApiOperationArgs<"postArchitectPromptHistory">): Promise<GenesysCloudFullApiOperationResponseMap["postArchitectPromptHistory"]>;
  PostArchitectPromptResources(...args: GenesysCloudFullApiOperationArgs<"postArchitectPromptResources">): Promise<GenesysCloudFullApiOperationResponseMap["postArchitectPromptResources"]>;
  PostArchitectPrompts(...args: GenesysCloudFullApiOperationArgs<"postArchitectPrompts">): Promise<GenesysCloudFullApiOperationResponseMap["postArchitectPrompts"]>;
  PostArchitectSchedulegroups(...args: GenesysCloudFullApiOperationArgs<"postArchitectSchedulegroups">): Promise<GenesysCloudFullApiOperationResponseMap["postArchitectSchedulegroups"]>;
  PostArchitectSchedules(...args: GenesysCloudFullApiOperationArgs<"postArchitectSchedules">): Promise<GenesysCloudFullApiOperationResponseMap["postArchitectSchedules"]>;
  PostArchitectSystempromptHistory(...args: GenesysCloudFullApiOperationArgs<"postArchitectSystempromptHistory">): Promise<GenesysCloudFullApiOperationResponseMap["postArchitectSystempromptHistory"]>;
  PostArchitectSystempromptResources(...args: GenesysCloudFullApiOperationArgs<"postArchitectSystempromptResources">): Promise<GenesysCloudFullApiOperationResponseMap["postArchitectSystempromptResources"]>;
  PostFlowHistory(...args: GenesysCloudFullApiOperationArgs<"postFlowHistory">): Promise<GenesysCloudFullApiOperationResponseMap["postFlowHistory"]>;
  PostFlowInstancesSettingsLoglevels(...args: GenesysCloudFullApiOperationArgs<"postFlowInstancesSettingsLoglevels">): Promise<GenesysCloudFullApiOperationResponseMap["postFlowInstancesSettingsLoglevels"]>;
  PostFlows(...args: GenesysCloudFullApiOperationArgs<"postFlows">): Promise<GenesysCloudFullApiOperationResponseMap["postFlows"]>;
  PostFlowsActionsCheckin(...args: GenesysCloudFullApiOperationArgs<"postFlowsActionsCheckin">): Promise<GenesysCloudFullApiOperationResponseMap["postFlowsActionsCheckin"]>;
  PostFlowsActionsCheckout(...args: GenesysCloudFullApiOperationArgs<"postFlowsActionsCheckout">): Promise<GenesysCloudFullApiOperationResponseMap["postFlowsActionsCheckout"]>;
  PostFlowsActionsDeactivate(...args: GenesysCloudFullApiOperationArgs<"postFlowsActionsDeactivate">): Promise<GenesysCloudFullApiOperationResponseMap["postFlowsActionsDeactivate"]>;
  PostFlowsActionsPublish(...args: GenesysCloudFullApiOperationArgs<"postFlowsActionsPublish">): Promise<GenesysCloudFullApiOperationResponseMap["postFlowsActionsPublish"]>;
  PostFlowsActionsRevert(...args: GenesysCloudFullApiOperationArgs<"postFlowsActionsRevert">): Promise<GenesysCloudFullApiOperationResponseMap["postFlowsActionsRevert"]>;
  PostFlowsActionsUnlock(...args: GenesysCloudFullApiOperationArgs<"postFlowsActionsUnlock">): Promise<GenesysCloudFullApiOperationResponseMap["postFlowsActionsUnlock"]>;
  PostFlowsDatatableExportJobs(...args: GenesysCloudFullApiOperationArgs<"postFlowsDatatableExportJobs">): Promise<GenesysCloudFullApiOperationResponseMap["postFlowsDatatableExportJobs"]>;
  PostFlowsDatatableImportCsvJobs(...args: GenesysCloudFullApiOperationArgs<"postFlowsDatatableImportCsvJobs">): Promise<GenesysCloudFullApiOperationResponseMap["postFlowsDatatableImportCsvJobs"]>;
  PostFlowsDatatableImportJobs(...args: GenesysCloudFullApiOperationArgs<"postFlowsDatatableImportJobs">): Promise<GenesysCloudFullApiOperationResponseMap["postFlowsDatatableImportJobs"]>;
  PostFlowsDatatableRows(...args: GenesysCloudFullApiOperationArgs<"postFlowsDatatableRows">): Promise<GenesysCloudFullApiOperationResponseMap["postFlowsDatatableRows"]>;
  PostFlowsDatatables(...args: GenesysCloudFullApiOperationArgs<"postFlowsDatatables">): Promise<GenesysCloudFullApiOperationResponseMap["postFlowsDatatables"]>;
  PostFlowsExecutions(...args: GenesysCloudFullApiOperationArgs<"postFlowsExecutions">): Promise<GenesysCloudFullApiOperationResponseMap["postFlowsExecutions"]>;
  PostFlowsExportJobs(...args: GenesysCloudFullApiOperationArgs<"postFlowsExportJobs">): Promise<GenesysCloudFullApiOperationResponseMap["postFlowsExportJobs"]>;
  PostFlowsInstancesJobs(...args: GenesysCloudFullApiOperationArgs<"postFlowsInstancesJobs">): Promise<GenesysCloudFullApiOperationResponseMap["postFlowsInstancesJobs"]>;
  PostFlowsInstancesQuery(...args: GenesysCloudFullApiOperationArgs<"postFlowsInstancesQuery">): Promise<GenesysCloudFullApiOperationResponseMap["postFlowsInstancesQuery"]>;
  PostFlowsJobs(...args: GenesysCloudFullApiOperationArgs<"postFlowsJobs">): Promise<GenesysCloudFullApiOperationResponseMap["postFlowsJobs"]>;
  PostFlowsMilestones(...args: GenesysCloudFullApiOperationArgs<"postFlowsMilestones">): Promise<GenesysCloudFullApiOperationResponseMap["postFlowsMilestones"]>;
  PostFlowsOutcomes(...args: GenesysCloudFullApiOperationArgs<"postFlowsOutcomes">): Promise<GenesysCloudFullApiOperationResponseMap["postFlowsOutcomes"]>;
  PostFlowVersions(...args: GenesysCloudFullApiOperationArgs<"postFlowVersions">): Promise<GenesysCloudFullApiOperationResponseMap["postFlowVersions"]>;
  PutArchitectEmergencygroup(...args: GenesysCloudFullApiOperationArgs<"putArchitectEmergencygroup">): Promise<GenesysCloudFullApiOperationResponseMap["putArchitectEmergencygroup"]>;
  PutArchitectIvr(...args: GenesysCloudFullApiOperationArgs<"putArchitectIvr">): Promise<GenesysCloudFullApiOperationResponseMap["putArchitectIvr"]>;
  PutArchitectIvrIdentityresolution(...args: GenesysCloudFullApiOperationArgs<"putArchitectIvrIdentityresolution">): Promise<GenesysCloudFullApiOperationResponseMap["putArchitectIvrIdentityresolution"]>;
  PutArchitectPrompt(...args: GenesysCloudFullApiOperationArgs<"putArchitectPrompt">): Promise<GenesysCloudFullApiOperationResponseMap["putArchitectPrompt"]>;
  PutArchitectPromptResource(...args: GenesysCloudFullApiOperationArgs<"putArchitectPromptResource">): Promise<GenesysCloudFullApiOperationResponseMap["putArchitectPromptResource"]>;
  PutArchitectSchedule(...args: GenesysCloudFullApiOperationArgs<"putArchitectSchedule">): Promise<GenesysCloudFullApiOperationResponseMap["putArchitectSchedule"]>;
  PutArchitectSchedulegroup(...args: GenesysCloudFullApiOperationArgs<"putArchitectSchedulegroup">): Promise<GenesysCloudFullApiOperationResponseMap["putArchitectSchedulegroup"]>;
  PutArchitectSystempromptResource(...args: GenesysCloudFullApiOperationArgs<"putArchitectSystempromptResource">): Promise<GenesysCloudFullApiOperationResponseMap["putArchitectSystempromptResource"]>;
  PutFlow(...args: GenesysCloudFullApiOperationArgs<"putFlow">): Promise<GenesysCloudFullApiOperationResponseMap["putFlow"]>;
  PutFlowInstancesSettingsLoglevels(...args: GenesysCloudFullApiOperationArgs<"putFlowInstancesSettingsLoglevels">): Promise<GenesysCloudFullApiOperationResponseMap["putFlowInstancesSettingsLoglevels"]>;
  PutFlowsDatatable(...args: GenesysCloudFullApiOperationArgs<"putFlowsDatatable">): Promise<GenesysCloudFullApiOperationResponseMap["putFlowsDatatable"]>;
  PutFlowsDatatableRow(...args: GenesysCloudFullApiOperationArgs<"putFlowsDatatableRow">): Promise<GenesysCloudFullApiOperationResponseMap["putFlowsDatatableRow"]>;
  PutFlowsInstancesSettingsLoglevelsDefault(...args: GenesysCloudFullApiOperationArgs<"putFlowsInstancesSettingsLoglevelsDefault">): Promise<GenesysCloudFullApiOperationResponseMap["putFlowsInstancesSettingsLoglevelsDefault"]>;
  PutFlowsMilestone(...args: GenesysCloudFullApiOperationArgs<"putFlowsMilestone">): Promise<GenesysCloudFullApiOperationResponseMap["putFlowsMilestone"]>;
  PutFlowsOutcome(...args: GenesysCloudFullApiOperationArgs<"putFlowsOutcome">): Promise<GenesysCloudFullApiOperationResponseMap["putFlowsOutcome"]>;
}

export const GenesysCloudFullApiArchitect02GeneratedFunctionNames = [
  "GetFlowsMilestone",
  "GetFlowsMilestones",
  "GetFlowsMilestonesDivisionviews",
  "GetFlowsOutcome",
  "GetFlowsOutcomes",
  "GetFlowsOutcomesDivisionviews",
  "GetFlowVersion",
  "GetFlowVersionConfiguration",
  "GetFlowVersionHealth",
  "GetFlowVersionIntentHealth",
  "GetFlowVersionIntentUtteranceHealth",
  "GetFlowVersions",
  "PatchArchitectGrammar",
  "PatchArchitectGrammarLanguage",
  "PatchFlowsInstancesSettingsExecutiondata",
  "PostArchitectDependencytrackingBuild",
  "PostArchitectEmergencygroups",
  "PostArchitectGrammarLanguageFilesDtmf",
  "PostArchitectGrammarLanguageFilesVoice",
  "PostArchitectGrammarLanguages",
  "PostArchitectGrammars",
  "PostArchitectIvrs",
  "PostArchitectPromptHistory",
  "PostArchitectPromptResources",
  "PostArchitectPrompts",
  "PostArchitectSchedulegroups",
  "PostArchitectSchedules",
  "PostArchitectSystempromptHistory",
  "PostArchitectSystempromptResources",
  "PostFlowHistory",
  "PostFlowInstancesSettingsLoglevels",
  "PostFlows",
  "PostFlowsActionsCheckin",
  "PostFlowsActionsCheckout",
  "PostFlowsActionsDeactivate",
  "PostFlowsActionsPublish",
  "PostFlowsActionsRevert",
  "PostFlowsActionsUnlock",
  "PostFlowsDatatableExportJobs",
  "PostFlowsDatatableImportCsvJobs",
  "PostFlowsDatatableImportJobs",
  "PostFlowsDatatableRows",
  "PostFlowsDatatables",
  "PostFlowsExecutions",
  "PostFlowsExportJobs",
  "PostFlowsInstancesJobs",
  "PostFlowsInstancesQuery",
  "PostFlowsJobs",
  "PostFlowsMilestones",
  "PostFlowsOutcomes",
  "PostFlowVersions",
  "PutArchitectEmergencygroup",
  "PutArchitectIvr",
  "PutArchitectIvrIdentityresolution",
  "PutArchitectPrompt",
  "PutArchitectPromptResource",
  "PutArchitectSchedule",
  "PutArchitectSchedulegroup",
  "PutArchitectSystempromptResource",
  "PutFlow",
  "PutFlowInstancesSettingsLoglevels",
  "PutFlowsDatatable",
  "PutFlowsDatatableRow",
  "PutFlowsInstancesSettingsLoglevelsDefault",
  "PutFlowsMilestone",
  "PutFlowsOutcome"
] as const satisfies readonly (keyof GenesysCloudFullApiArchitect02GeneratedClient)[];

export function createGenesysCloudFullApiArchitect02GeneratedClient(
  callOperation: GenesysCloudGeneratedOperationCaller,
): GenesysCloudFullApiArchitect02GeneratedClient {
  return {
    GetFlowsMilestone: (...args) => callOperation("getFlowsMilestone", ...(args as GenesysCloudFullApiOperationArgs<"getFlowsMilestone">)),
    GetFlowsMilestones: (...args) => callOperation("getFlowsMilestones", ...(args as GenesysCloudFullApiOperationArgs<"getFlowsMilestones">)),
    GetFlowsMilestonesDivisionviews: (...args) => callOperation("getFlowsMilestonesDivisionviews", ...(args as GenesysCloudFullApiOperationArgs<"getFlowsMilestonesDivisionviews">)),
    GetFlowsOutcome: (...args) => callOperation("getFlowsOutcome", ...(args as GenesysCloudFullApiOperationArgs<"getFlowsOutcome">)),
    GetFlowsOutcomes: (...args) => callOperation("getFlowsOutcomes", ...(args as GenesysCloudFullApiOperationArgs<"getFlowsOutcomes">)),
    GetFlowsOutcomesDivisionviews: (...args) => callOperation("getFlowsOutcomesDivisionviews", ...(args as GenesysCloudFullApiOperationArgs<"getFlowsOutcomesDivisionviews">)),
    GetFlowVersion: (...args) => callOperation("getFlowVersion", ...(args as GenesysCloudFullApiOperationArgs<"getFlowVersion">)),
    GetFlowVersionConfiguration: (...args) => callOperation("getFlowVersionConfiguration", ...(args as GenesysCloudFullApiOperationArgs<"getFlowVersionConfiguration">)),
    GetFlowVersionHealth: (...args) => callOperation("getFlowVersionHealth", ...(args as GenesysCloudFullApiOperationArgs<"getFlowVersionHealth">)),
    GetFlowVersionIntentHealth: (...args) => callOperation("getFlowVersionIntentHealth", ...(args as GenesysCloudFullApiOperationArgs<"getFlowVersionIntentHealth">)),
    GetFlowVersionIntentUtteranceHealth: (...args) => callOperation("getFlowVersionIntentUtteranceHealth", ...(args as GenesysCloudFullApiOperationArgs<"getFlowVersionIntentUtteranceHealth">)),
    GetFlowVersions: (...args) => callOperation("getFlowVersions", ...(args as GenesysCloudFullApiOperationArgs<"getFlowVersions">)),
    PatchArchitectGrammar: (...args) => callOperation("patchArchitectGrammar", ...(args as GenesysCloudFullApiOperationArgs<"patchArchitectGrammar">)),
    PatchArchitectGrammarLanguage: (...args) => callOperation("patchArchitectGrammarLanguage", ...(args as GenesysCloudFullApiOperationArgs<"patchArchitectGrammarLanguage">)),
    PatchFlowsInstancesSettingsExecutiondata: (...args) => callOperation("patchFlowsInstancesSettingsExecutiondata", ...(args as GenesysCloudFullApiOperationArgs<"patchFlowsInstancesSettingsExecutiondata">)),
    PostArchitectDependencytrackingBuild: (...args) => callOperation("postArchitectDependencytrackingBuild", ...(args as GenesysCloudFullApiOperationArgs<"postArchitectDependencytrackingBuild">)),
    PostArchitectEmergencygroups: (...args) => callOperation("postArchitectEmergencygroups", ...(args as GenesysCloudFullApiOperationArgs<"postArchitectEmergencygroups">)),
    PostArchitectGrammarLanguageFilesDtmf: (...args) => callOperation("postArchitectGrammarLanguageFilesDtmf", ...(args as GenesysCloudFullApiOperationArgs<"postArchitectGrammarLanguageFilesDtmf">)),
    PostArchitectGrammarLanguageFilesVoice: (...args) => callOperation("postArchitectGrammarLanguageFilesVoice", ...(args as GenesysCloudFullApiOperationArgs<"postArchitectGrammarLanguageFilesVoice">)),
    PostArchitectGrammarLanguages: (...args) => callOperation("postArchitectGrammarLanguages", ...(args as GenesysCloudFullApiOperationArgs<"postArchitectGrammarLanguages">)),
    PostArchitectGrammars: (...args) => callOperation("postArchitectGrammars", ...(args as GenesysCloudFullApiOperationArgs<"postArchitectGrammars">)),
    PostArchitectIvrs: (...args) => callOperation("postArchitectIvrs", ...(args as GenesysCloudFullApiOperationArgs<"postArchitectIvrs">)),
    PostArchitectPromptHistory: (...args) => callOperation("postArchitectPromptHistory", ...(args as GenesysCloudFullApiOperationArgs<"postArchitectPromptHistory">)),
    PostArchitectPromptResources: (...args) => callOperation("postArchitectPromptResources", ...(args as GenesysCloudFullApiOperationArgs<"postArchitectPromptResources">)),
    PostArchitectPrompts: (...args) => callOperation("postArchitectPrompts", ...(args as GenesysCloudFullApiOperationArgs<"postArchitectPrompts">)),
    PostArchitectSchedulegroups: (...args) => callOperation("postArchitectSchedulegroups", ...(args as GenesysCloudFullApiOperationArgs<"postArchitectSchedulegroups">)),
    PostArchitectSchedules: (...args) => callOperation("postArchitectSchedules", ...(args as GenesysCloudFullApiOperationArgs<"postArchitectSchedules">)),
    PostArchitectSystempromptHistory: (...args) => callOperation("postArchitectSystempromptHistory", ...(args as GenesysCloudFullApiOperationArgs<"postArchitectSystempromptHistory">)),
    PostArchitectSystempromptResources: (...args) => callOperation("postArchitectSystempromptResources", ...(args as GenesysCloudFullApiOperationArgs<"postArchitectSystempromptResources">)),
    PostFlowHistory: (...args) => callOperation("postFlowHistory", ...(args as GenesysCloudFullApiOperationArgs<"postFlowHistory">)),
    PostFlowInstancesSettingsLoglevels: (...args) => callOperation("postFlowInstancesSettingsLoglevels", ...(args as GenesysCloudFullApiOperationArgs<"postFlowInstancesSettingsLoglevels">)),
    PostFlows: (...args) => callOperation("postFlows", ...(args as GenesysCloudFullApiOperationArgs<"postFlows">)),
    PostFlowsActionsCheckin: (...args) => callOperation("postFlowsActionsCheckin", ...(args as GenesysCloudFullApiOperationArgs<"postFlowsActionsCheckin">)),
    PostFlowsActionsCheckout: (...args) => callOperation("postFlowsActionsCheckout", ...(args as GenesysCloudFullApiOperationArgs<"postFlowsActionsCheckout">)),
    PostFlowsActionsDeactivate: (...args) => callOperation("postFlowsActionsDeactivate", ...(args as GenesysCloudFullApiOperationArgs<"postFlowsActionsDeactivate">)),
    PostFlowsActionsPublish: (...args) => callOperation("postFlowsActionsPublish", ...(args as GenesysCloudFullApiOperationArgs<"postFlowsActionsPublish">)),
    PostFlowsActionsRevert: (...args) => callOperation("postFlowsActionsRevert", ...(args as GenesysCloudFullApiOperationArgs<"postFlowsActionsRevert">)),
    PostFlowsActionsUnlock: (...args) => callOperation("postFlowsActionsUnlock", ...(args as GenesysCloudFullApiOperationArgs<"postFlowsActionsUnlock">)),
    PostFlowsDatatableExportJobs: (...args) => callOperation("postFlowsDatatableExportJobs", ...(args as GenesysCloudFullApiOperationArgs<"postFlowsDatatableExportJobs">)),
    PostFlowsDatatableImportCsvJobs: (...args) => callOperation("postFlowsDatatableImportCsvJobs", ...(args as GenesysCloudFullApiOperationArgs<"postFlowsDatatableImportCsvJobs">)),
    PostFlowsDatatableImportJobs: (...args) => callOperation("postFlowsDatatableImportJobs", ...(args as GenesysCloudFullApiOperationArgs<"postFlowsDatatableImportJobs">)),
    PostFlowsDatatableRows: (...args) => callOperation("postFlowsDatatableRows", ...(args as GenesysCloudFullApiOperationArgs<"postFlowsDatatableRows">)),
    PostFlowsDatatables: (...args) => callOperation("postFlowsDatatables", ...(args as GenesysCloudFullApiOperationArgs<"postFlowsDatatables">)),
    PostFlowsExecutions: (...args) => callOperation("postFlowsExecutions", ...(args as GenesysCloudFullApiOperationArgs<"postFlowsExecutions">)),
    PostFlowsExportJobs: (...args) => callOperation("postFlowsExportJobs", ...(args as GenesysCloudFullApiOperationArgs<"postFlowsExportJobs">)),
    PostFlowsInstancesJobs: (...args) => callOperation("postFlowsInstancesJobs", ...(args as GenesysCloudFullApiOperationArgs<"postFlowsInstancesJobs">)),
    PostFlowsInstancesQuery: (...args) => callOperation("postFlowsInstancesQuery", ...(args as GenesysCloudFullApiOperationArgs<"postFlowsInstancesQuery">)),
    PostFlowsJobs: (...args) => callOperation("postFlowsJobs", ...(args as GenesysCloudFullApiOperationArgs<"postFlowsJobs">)),
    PostFlowsMilestones: (...args) => callOperation("postFlowsMilestones", ...(args as GenesysCloudFullApiOperationArgs<"postFlowsMilestones">)),
    PostFlowsOutcomes: (...args) => callOperation("postFlowsOutcomes", ...(args as GenesysCloudFullApiOperationArgs<"postFlowsOutcomes">)),
    PostFlowVersions: (...args) => callOperation("postFlowVersions", ...(args as GenesysCloudFullApiOperationArgs<"postFlowVersions">)),
    PutArchitectEmergencygroup: (...args) => callOperation("putArchitectEmergencygroup", ...(args as GenesysCloudFullApiOperationArgs<"putArchitectEmergencygroup">)),
    PutArchitectIvr: (...args) => callOperation("putArchitectIvr", ...(args as GenesysCloudFullApiOperationArgs<"putArchitectIvr">)),
    PutArchitectIvrIdentityresolution: (...args) => callOperation("putArchitectIvrIdentityresolution", ...(args as GenesysCloudFullApiOperationArgs<"putArchitectIvrIdentityresolution">)),
    PutArchitectPrompt: (...args) => callOperation("putArchitectPrompt", ...(args as GenesysCloudFullApiOperationArgs<"putArchitectPrompt">)),
    PutArchitectPromptResource: (...args) => callOperation("putArchitectPromptResource", ...(args as GenesysCloudFullApiOperationArgs<"putArchitectPromptResource">)),
    PutArchitectSchedule: (...args) => callOperation("putArchitectSchedule", ...(args as GenesysCloudFullApiOperationArgs<"putArchitectSchedule">)),
    PutArchitectSchedulegroup: (...args) => callOperation("putArchitectSchedulegroup", ...(args as GenesysCloudFullApiOperationArgs<"putArchitectSchedulegroup">)),
    PutArchitectSystempromptResource: (...args) => callOperation("putArchitectSystempromptResource", ...(args as GenesysCloudFullApiOperationArgs<"putArchitectSystempromptResource">)),
    PutFlow: (...args) => callOperation("putFlow", ...(args as GenesysCloudFullApiOperationArgs<"putFlow">)),
    PutFlowInstancesSettingsLoglevels: (...args) => callOperation("putFlowInstancesSettingsLoglevels", ...(args as GenesysCloudFullApiOperationArgs<"putFlowInstancesSettingsLoglevels">)),
    PutFlowsDatatable: (...args) => callOperation("putFlowsDatatable", ...(args as GenesysCloudFullApiOperationArgs<"putFlowsDatatable">)),
    PutFlowsDatatableRow: (...args) => callOperation("putFlowsDatatableRow", ...(args as GenesysCloudFullApiOperationArgs<"putFlowsDatatableRow">)),
    PutFlowsInstancesSettingsLoglevelsDefault: (...args) => callOperation("putFlowsInstancesSettingsLoglevelsDefault", ...(args as GenesysCloudFullApiOperationArgs<"putFlowsInstancesSettingsLoglevelsDefault">)),
    PutFlowsMilestone: (...args) => callOperation("putFlowsMilestone", ...(args as GenesysCloudFullApiOperationArgs<"putFlowsMilestone">)),
    PutFlowsOutcome: (...args) => callOperation("putFlowsOutcome", ...(args as GenesysCloudFullApiOperationArgs<"putFlowsOutcome">)),
  };
}
