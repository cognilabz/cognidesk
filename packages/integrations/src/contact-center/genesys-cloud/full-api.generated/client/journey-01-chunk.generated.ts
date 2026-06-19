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
export const GenesysCloudFullApiJourney01OperationKeys = [
  "deleteJourneyActionmap",
  "deleteJourneyActiontemplate",
  "deleteJourneyExternaleventsConfiguration",
  "deleteJourneyExternaleventsSchema",
  "deleteJourneyOutcome",
  "deleteJourneyOutcomesPredictor",
  "deleteJourneySegment",
  "deleteJourneyView",
  "deleteJourneyViewSchedules",
  "getJourneyActionmap",
  "getJourneyActionmaps",
  "getJourneyActionmapsEstimatesJob",
  "getJourneyActionmapsEstimatesJobResults",
  "getJourneyActiontarget",
  "getJourneyActiontargets",
  "getJourneyActiontemplate",
  "getJourneyActiontemplates",
  "getJourneyDeploymentCustomerPing",
  "getJourneyExternaleventsConfiguration",
  "getJourneyExternaleventsConfigurations",
  "getJourneyExternaleventsSchema",
  "getJourneyExternaleventsSchemas",
  "getJourneyExternaleventsSchemasCoretype",
  "getJourneyExternaleventsSchemasCoretypes",
  "getJourneyExternaleventsSchemasLimits",
  "getJourneyExternaleventsSchemaVersion",
  "getJourneyExternaleventsSchemaVersions",
  "getJourneyOutcome",
  "getJourneyOutcomes",
  "getJourneyOutcomesPredictor",
  "getJourneyOutcomesPredictors",
  "getJourneySegment",
  "getJourneySegments",
  "getJourneySession",
  "getJourneySessionEvents",
  "getJourneySessionOutcomescores",
  "getJourneyView",
  "getJourneyViews",
  "getJourneyViewSchedules",
  "getJourneyViewsDataDetails",
  "getJourneyViewsEventdefinition",
  "getJourneyViewsEventdefinitions",
  "getJourneyViewsEventdefinitionsExternal",
  "getJourneyViewsEventdefinitionsExternalChanges",
  "getJourneyViewsJobs",
  "getJourneyViewsJobsMe",
  "getJourneyViewsSchedules",
  "getJourneyViewVersion",
  "getJourneyViewVersionChart",
  "getJourneyViewVersionChartVersion",
  "getJourneyViewVersionJob",
  "getJourneyViewVersionJobResults",
  "getJourneyViewVersionJobResultsChart",
  "getJourneyViewVersionJobsLatest",
  "patchJourneyActionmap",
  "patchJourneyActiontarget",
  "patchJourneyActiontemplate",
  "patchJourneyExternaleventsConfiguration",
  "patchJourneyOutcome",
  "patchJourneySegment",
  "patchJourneyViewVersionJob",
  "postJourneyActionmaps",
  "postJourneyActionmapsEstimatesJobs",
  "postJourneyActiontemplates",
  "postJourneyDeploymentActionevent",
  "postJourneyDeploymentAppevents",
  "postJourneyDeploymentWebevents",
  "postJourneyExternaleventsConfigurationEvents",
  "postJourneyExternaleventsConfigurations",
  "postJourneyExternaleventsSchemas",
  "postJourneyFlowsPathsQuery",
  "postJourneyOutcomes",
  "postJourneyOutcomesPredictors",
  "postJourneySegments",
  "postJourneyViews",
  "postJourneyViewSchedules",
  "postJourneyViewsEncodingsValidate",
  "postJourneyViewVersionJobs",
  "postJourneyViewVersions",
  "putJourneyExternaleventsSchema"
] as const;
export type GenesysCloudFullApiJourney01OperationKey = typeof GenesysCloudFullApiJourney01OperationKeys[number];
// End hardened literal operation keys.

export interface GenesysCloudFullApiJourney01OperationPathParamMap {
  "deleteJourneyActionmap": { "actionMapId": GenesysCloudFullApiPathParamValue };
  "deleteJourneyActiontemplate": { "actionTemplateId": GenesysCloudFullApiPathParamValue };
  "deleteJourneyExternaleventsConfiguration": { "configId": GenesysCloudFullApiPathParamValue };
  "deleteJourneyExternaleventsSchema": { "schemaId": GenesysCloudFullApiPathParamValue };
  "deleteJourneyOutcome": { "outcomeId": GenesysCloudFullApiPathParamValue };
  "deleteJourneyOutcomesPredictor": { "predictorId": GenesysCloudFullApiPathParamValue };
  "deleteJourneySegment": { "segmentId": GenesysCloudFullApiPathParamValue };
  "deleteJourneyView": { "viewId": GenesysCloudFullApiPathParamValue };
  "deleteJourneyViewSchedules": { "viewId": GenesysCloudFullApiPathParamValue };
  "getJourneyActionmap": { "actionMapId": GenesysCloudFullApiPathParamValue };
  "getJourneyActionmaps": {};
  "getJourneyActionmapsEstimatesJob": { "jobId": GenesysCloudFullApiPathParamValue };
  "getJourneyActionmapsEstimatesJobResults": { "jobId": GenesysCloudFullApiPathParamValue };
  "getJourneyActiontarget": { "actionTargetId": GenesysCloudFullApiPathParamValue };
  "getJourneyActiontargets": {};
  "getJourneyActiontemplate": { "actionTemplateId": GenesysCloudFullApiPathParamValue };
  "getJourneyActiontemplates": {};
  "getJourneyDeploymentCustomerPing": { "deploymentId": GenesysCloudFullApiPathParamValue; "customerCookieId": GenesysCloudFullApiPathParamValue };
  "getJourneyExternaleventsConfiguration": { "configId": GenesysCloudFullApiPathParamValue };
  "getJourneyExternaleventsConfigurations": {};
  "getJourneyExternaleventsSchema": { "schemaId": GenesysCloudFullApiPathParamValue };
  "getJourneyExternaleventsSchemas": {};
  "getJourneyExternaleventsSchemasCoretype": { "coreTypeName": GenesysCloudFullApiPathParamValue };
  "getJourneyExternaleventsSchemasCoretypes": {};
  "getJourneyExternaleventsSchemasLimits": {};
  "getJourneyExternaleventsSchemaVersion": { "schemaId": GenesysCloudFullApiPathParamValue; "versionId": GenesysCloudFullApiPathParamValue };
  "getJourneyExternaleventsSchemaVersions": { "schemaId": GenesysCloudFullApiPathParamValue };
  "getJourneyOutcome": { "outcomeId": GenesysCloudFullApiPathParamValue };
  "getJourneyOutcomes": {};
  "getJourneyOutcomesPredictor": { "predictorId": GenesysCloudFullApiPathParamValue };
  "getJourneyOutcomesPredictors": {};
  "getJourneySegment": { "segmentId": GenesysCloudFullApiPathParamValue };
  "getJourneySegments": {};
  "getJourneySession": { "sessionId": GenesysCloudFullApiPathParamValue };
  "getJourneySessionEvents": { "sessionId": GenesysCloudFullApiPathParamValue };
  "getJourneySessionOutcomescores": { "sessionId": GenesysCloudFullApiPathParamValue };
  "getJourneyView": { "viewId": GenesysCloudFullApiPathParamValue };
  "getJourneyViews": {};
  "getJourneyViewSchedules": { "viewId": GenesysCloudFullApiPathParamValue };
  "getJourneyViewsDataDetails": {};
  "getJourneyViewsEventdefinition": { "eventDefinitionId": GenesysCloudFullApiPathParamValue };
  "getJourneyViewsEventdefinitions": {};
  "getJourneyViewsEventdefinitionsExternal": {};
  "getJourneyViewsEventdefinitionsExternalChanges": {};
  "getJourneyViewsJobs": {};
  "getJourneyViewsJobsMe": {};
  "getJourneyViewsSchedules": {};
  "getJourneyViewVersion": { "viewId": GenesysCloudFullApiPathParamValue; "versionId": GenesysCloudFullApiPathParamValue };
  "getJourneyViewVersionChart": { "viewId": GenesysCloudFullApiPathParamValue; "journeyViewVersion": GenesysCloudFullApiPathParamValue; "chartId": GenesysCloudFullApiPathParamValue };
  "getJourneyViewVersionChartVersion": { "viewId": GenesysCloudFullApiPathParamValue; "journeyViewVersion": GenesysCloudFullApiPathParamValue; "chartId": GenesysCloudFullApiPathParamValue; "chartVersion": GenesysCloudFullApiPathParamValue };
  "getJourneyViewVersionJob": { "viewId": GenesysCloudFullApiPathParamValue; "journeyVersionId": GenesysCloudFullApiPathParamValue; "jobId": GenesysCloudFullApiPathParamValue };
  "getJourneyViewVersionJobResults": { "viewId": GenesysCloudFullApiPathParamValue; "journeyViewVersion": GenesysCloudFullApiPathParamValue; "jobId": GenesysCloudFullApiPathParamValue };
  "getJourneyViewVersionJobResultsChart": { "viewId": GenesysCloudFullApiPathParamValue; "journeyVersionId": GenesysCloudFullApiPathParamValue; "jobId": GenesysCloudFullApiPathParamValue; "chartId": GenesysCloudFullApiPathParamValue };
  "getJourneyViewVersionJobsLatest": { "viewId": GenesysCloudFullApiPathParamValue; "journeyVersionId": GenesysCloudFullApiPathParamValue };
  "patchJourneyActionmap": { "actionMapId": GenesysCloudFullApiPathParamValue };
  "patchJourneyActiontarget": { "actionTargetId": GenesysCloudFullApiPathParamValue };
  "patchJourneyActiontemplate": { "actionTemplateId": GenesysCloudFullApiPathParamValue };
  "patchJourneyExternaleventsConfiguration": { "configId": GenesysCloudFullApiPathParamValue };
  "patchJourneyOutcome": { "outcomeId": GenesysCloudFullApiPathParamValue };
  "patchJourneySegment": { "segmentId": GenesysCloudFullApiPathParamValue };
  "patchJourneyViewVersionJob": { "viewId": GenesysCloudFullApiPathParamValue; "journeyVersionId": GenesysCloudFullApiPathParamValue; "jobId": GenesysCloudFullApiPathParamValue };
  "postJourneyActionmaps": {};
  "postJourneyActionmapsEstimatesJobs": {};
  "postJourneyActiontemplates": {};
  "postJourneyDeploymentActionevent": { "deploymentId": GenesysCloudFullApiPathParamValue };
  "postJourneyDeploymentAppevents": { "deploymentId": GenesysCloudFullApiPathParamValue };
  "postJourneyDeploymentWebevents": { "deploymentId": GenesysCloudFullApiPathParamValue };
  "postJourneyExternaleventsConfigurationEvents": { "configurationId": GenesysCloudFullApiPathParamValue };
  "postJourneyExternaleventsConfigurations": {};
  "postJourneyExternaleventsSchemas": {};
  "postJourneyFlowsPathsQuery": {};
  "postJourneyOutcomes": {};
  "postJourneyOutcomesPredictors": {};
  "postJourneySegments": {};
  "postJourneyViews": {};
  "postJourneyViewSchedules": { "viewId": GenesysCloudFullApiPathParamValue };
  "postJourneyViewsEncodingsValidate": {};
  "postJourneyViewVersionJobs": { "viewId": GenesysCloudFullApiPathParamValue; "journeyVersionId": GenesysCloudFullApiPathParamValue };
  "postJourneyViewVersions": { "viewId": GenesysCloudFullApiPathParamValue };
  "putJourneyExternaleventsSchema": { "schemaId": GenesysCloudFullApiPathParamValue };
}

export interface GenesysCloudFullApiJourney01OperationRequestMap {
  "deleteJourneyActionmap": GenesysCloudFullApiOperationInput<"deleteJourneyActionmap">;
  "deleteJourneyActiontemplate": GenesysCloudFullApiOperationInput<"deleteJourneyActiontemplate">;
  "deleteJourneyExternaleventsConfiguration": GenesysCloudFullApiOperationInput<"deleteJourneyExternaleventsConfiguration">;
  "deleteJourneyExternaleventsSchema": GenesysCloudFullApiOperationInput<"deleteJourneyExternaleventsSchema">;
  "deleteJourneyOutcome": GenesysCloudFullApiOperationInput<"deleteJourneyOutcome">;
  "deleteJourneyOutcomesPredictor": GenesysCloudFullApiOperationInput<"deleteJourneyOutcomesPredictor">;
  "deleteJourneySegment": GenesysCloudFullApiOperationInput<"deleteJourneySegment">;
  "deleteJourneyView": GenesysCloudFullApiOperationInput<"deleteJourneyView">;
  "deleteJourneyViewSchedules": GenesysCloudFullApiOperationInput<"deleteJourneyViewSchedules">;
  "getJourneyActionmap": GenesysCloudFullApiOperationInput<"getJourneyActionmap">;
  "getJourneyActionmaps": GenesysCloudFullApiOperationInput<"getJourneyActionmaps">;
  "getJourneyActionmapsEstimatesJob": GenesysCloudFullApiOperationInput<"getJourneyActionmapsEstimatesJob">;
  "getJourneyActionmapsEstimatesJobResults": GenesysCloudFullApiOperationInput<"getJourneyActionmapsEstimatesJobResults">;
  "getJourneyActiontarget": GenesysCloudFullApiOperationInput<"getJourneyActiontarget">;
  "getJourneyActiontargets": GenesysCloudFullApiOperationInput<"getJourneyActiontargets">;
  "getJourneyActiontemplate": GenesysCloudFullApiOperationInput<"getJourneyActiontemplate">;
  "getJourneyActiontemplates": GenesysCloudFullApiOperationInput<"getJourneyActiontemplates">;
  "getJourneyDeploymentCustomerPing": GenesysCloudFullApiOperationInput<"getJourneyDeploymentCustomerPing">;
  "getJourneyExternaleventsConfiguration": GenesysCloudFullApiOperationInput<"getJourneyExternaleventsConfiguration">;
  "getJourneyExternaleventsConfigurations": GenesysCloudFullApiOperationInput<"getJourneyExternaleventsConfigurations">;
  "getJourneyExternaleventsSchema": GenesysCloudFullApiOperationInput<"getJourneyExternaleventsSchema">;
  "getJourneyExternaleventsSchemas": GenesysCloudFullApiOperationInput<"getJourneyExternaleventsSchemas">;
  "getJourneyExternaleventsSchemasCoretype": GenesysCloudFullApiOperationInput<"getJourneyExternaleventsSchemasCoretype">;
  "getJourneyExternaleventsSchemasCoretypes": GenesysCloudFullApiOperationInput<"getJourneyExternaleventsSchemasCoretypes">;
  "getJourneyExternaleventsSchemasLimits": GenesysCloudFullApiOperationInput<"getJourneyExternaleventsSchemasLimits">;
  "getJourneyExternaleventsSchemaVersion": GenesysCloudFullApiOperationInput<"getJourneyExternaleventsSchemaVersion">;
  "getJourneyExternaleventsSchemaVersions": GenesysCloudFullApiOperationInput<"getJourneyExternaleventsSchemaVersions">;
  "getJourneyOutcome": GenesysCloudFullApiOperationInput<"getJourneyOutcome">;
  "getJourneyOutcomes": GenesysCloudFullApiOperationInput<"getJourneyOutcomes">;
  "getJourneyOutcomesPredictor": GenesysCloudFullApiOperationInput<"getJourneyOutcomesPredictor">;
  "getJourneyOutcomesPredictors": GenesysCloudFullApiOperationInput<"getJourneyOutcomesPredictors">;
  "getJourneySegment": GenesysCloudFullApiOperationInput<"getJourneySegment">;
  "getJourneySegments": GenesysCloudFullApiOperationInput<"getJourneySegments">;
  "getJourneySession": GenesysCloudFullApiOperationInput<"getJourneySession">;
  "getJourneySessionEvents": GenesysCloudFullApiOperationInput<"getJourneySessionEvents">;
  "getJourneySessionOutcomescores": GenesysCloudFullApiOperationInput<"getJourneySessionOutcomescores">;
  "getJourneyView": GenesysCloudFullApiOperationInput<"getJourneyView">;
  "getJourneyViews": GenesysCloudFullApiOperationInput<"getJourneyViews">;
  "getJourneyViewSchedules": GenesysCloudFullApiOperationInput<"getJourneyViewSchedules">;
  "getJourneyViewsDataDetails": GenesysCloudFullApiOperationInput<"getJourneyViewsDataDetails">;
  "getJourneyViewsEventdefinition": GenesysCloudFullApiOperationInput<"getJourneyViewsEventdefinition">;
  "getJourneyViewsEventdefinitions": GenesysCloudFullApiOperationInput<"getJourneyViewsEventdefinitions">;
  "getJourneyViewsEventdefinitionsExternal": GenesysCloudFullApiOperationInput<"getJourneyViewsEventdefinitionsExternal">;
  "getJourneyViewsEventdefinitionsExternalChanges": GenesysCloudFullApiOperationInput<"getJourneyViewsEventdefinitionsExternalChanges">;
  "getJourneyViewsJobs": GenesysCloudFullApiOperationInput<"getJourneyViewsJobs">;
  "getJourneyViewsJobsMe": GenesysCloudFullApiOperationInput<"getJourneyViewsJobsMe">;
  "getJourneyViewsSchedules": GenesysCloudFullApiOperationInput<"getJourneyViewsSchedules">;
  "getJourneyViewVersion": GenesysCloudFullApiOperationInput<"getJourneyViewVersion">;
  "getJourneyViewVersionChart": GenesysCloudFullApiOperationInput<"getJourneyViewVersionChart">;
  "getJourneyViewVersionChartVersion": GenesysCloudFullApiOperationInput<"getJourneyViewVersionChartVersion">;
  "getJourneyViewVersionJob": GenesysCloudFullApiOperationInput<"getJourneyViewVersionJob">;
  "getJourneyViewVersionJobResults": GenesysCloudFullApiOperationInput<"getJourneyViewVersionJobResults">;
  "getJourneyViewVersionJobResultsChart": GenesysCloudFullApiOperationInput<"getJourneyViewVersionJobResultsChart">;
  "getJourneyViewVersionJobsLatest": GenesysCloudFullApiOperationInput<"getJourneyViewVersionJobsLatest">;
  "patchJourneyActionmap": GenesysCloudFullApiOperationInput<"patchJourneyActionmap">;
  "patchJourneyActiontarget": GenesysCloudFullApiOperationInput<"patchJourneyActiontarget">;
  "patchJourneyActiontemplate": GenesysCloudFullApiOperationInput<"patchJourneyActiontemplate">;
  "patchJourneyExternaleventsConfiguration": GenesysCloudFullApiOperationInput<"patchJourneyExternaleventsConfiguration">;
  "patchJourneyOutcome": GenesysCloudFullApiOperationInput<"patchJourneyOutcome">;
  "patchJourneySegment": GenesysCloudFullApiOperationInput<"patchJourneySegment">;
  "patchJourneyViewVersionJob": GenesysCloudFullApiOperationInput<"patchJourneyViewVersionJob">;
  "postJourneyActionmaps": GenesysCloudFullApiOperationInput<"postJourneyActionmaps">;
  "postJourneyActionmapsEstimatesJobs": GenesysCloudFullApiOperationInput<"postJourneyActionmapsEstimatesJobs">;
  "postJourneyActiontemplates": GenesysCloudFullApiOperationInput<"postJourneyActiontemplates">;
  "postJourneyDeploymentActionevent": GenesysCloudFullApiOperationInput<"postJourneyDeploymentActionevent">;
  "postJourneyDeploymentAppevents": GenesysCloudFullApiOperationInput<"postJourneyDeploymentAppevents">;
  "postJourneyDeploymentWebevents": GenesysCloudFullApiOperationInput<"postJourneyDeploymentWebevents">;
  "postJourneyExternaleventsConfigurationEvents": GenesysCloudFullApiOperationInput<"postJourneyExternaleventsConfigurationEvents">;
  "postJourneyExternaleventsConfigurations": GenesysCloudFullApiOperationInput<"postJourneyExternaleventsConfigurations">;
  "postJourneyExternaleventsSchemas": GenesysCloudFullApiOperationInput<"postJourneyExternaleventsSchemas">;
  "postJourneyFlowsPathsQuery": GenesysCloudFullApiOperationInput<"postJourneyFlowsPathsQuery">;
  "postJourneyOutcomes": GenesysCloudFullApiOperationInput<"postJourneyOutcomes">;
  "postJourneyOutcomesPredictors": GenesysCloudFullApiOperationInput<"postJourneyOutcomesPredictors">;
  "postJourneySegments": GenesysCloudFullApiOperationInput<"postJourneySegments">;
  "postJourneyViews": GenesysCloudFullApiOperationInput<"postJourneyViews">;
  "postJourneyViewSchedules": GenesysCloudFullApiOperationInput<"postJourneyViewSchedules">;
  "postJourneyViewsEncodingsValidate": GenesysCloudFullApiOperationInput<"postJourneyViewsEncodingsValidate">;
  "postJourneyViewVersionJobs": GenesysCloudFullApiOperationInput<"postJourneyViewVersionJobs">;
  "postJourneyViewVersions": GenesysCloudFullApiOperationInput<"postJourneyViewVersions">;
  "putJourneyExternaleventsSchema": GenesysCloudFullApiOperationInput<"putJourneyExternaleventsSchema">;
}

export interface GenesysCloudFullApiJourney01GeneratedClient {
  DeleteJourneyActionmap(...args: GenesysCloudFullApiOperationArgs<"deleteJourneyActionmap">): Promise<GenesysCloudFullApiOperationResponseMap["deleteJourneyActionmap"]>;
  DeleteJourneyActiontemplate(...args: GenesysCloudFullApiOperationArgs<"deleteJourneyActiontemplate">): Promise<GenesysCloudFullApiOperationResponseMap["deleteJourneyActiontemplate"]>;
  DeleteJourneyExternaleventsConfiguration(...args: GenesysCloudFullApiOperationArgs<"deleteJourneyExternaleventsConfiguration">): Promise<GenesysCloudFullApiOperationResponseMap["deleteJourneyExternaleventsConfiguration"]>;
  DeleteJourneyExternaleventsSchema(...args: GenesysCloudFullApiOperationArgs<"deleteJourneyExternaleventsSchema">): Promise<GenesysCloudFullApiOperationResponseMap["deleteJourneyExternaleventsSchema"]>;
  DeleteJourneyOutcome(...args: GenesysCloudFullApiOperationArgs<"deleteJourneyOutcome">): Promise<GenesysCloudFullApiOperationResponseMap["deleteJourneyOutcome"]>;
  DeleteJourneyOutcomesPredictor(...args: GenesysCloudFullApiOperationArgs<"deleteJourneyOutcomesPredictor">): Promise<GenesysCloudFullApiOperationResponseMap["deleteJourneyOutcomesPredictor"]>;
  DeleteJourneySegment(...args: GenesysCloudFullApiOperationArgs<"deleteJourneySegment">): Promise<GenesysCloudFullApiOperationResponseMap["deleteJourneySegment"]>;
  DeleteJourneyView(...args: GenesysCloudFullApiOperationArgs<"deleteJourneyView">): Promise<GenesysCloudFullApiOperationResponseMap["deleteJourneyView"]>;
  DeleteJourneyViewSchedules(...args: GenesysCloudFullApiOperationArgs<"deleteJourneyViewSchedules">): Promise<GenesysCloudFullApiOperationResponseMap["deleteJourneyViewSchedules"]>;
  GetJourneyActionmap(...args: GenesysCloudFullApiOperationArgs<"getJourneyActionmap">): Promise<GenesysCloudFullApiOperationResponseMap["getJourneyActionmap"]>;
  GetJourneyActionmaps(...args: GenesysCloudFullApiOperationArgs<"getJourneyActionmaps">): Promise<GenesysCloudFullApiOperationResponseMap["getJourneyActionmaps"]>;
  GetJourneyActionmapsEstimatesJob(...args: GenesysCloudFullApiOperationArgs<"getJourneyActionmapsEstimatesJob">): Promise<GenesysCloudFullApiOperationResponseMap["getJourneyActionmapsEstimatesJob"]>;
  GetJourneyActionmapsEstimatesJobResults(...args: GenesysCloudFullApiOperationArgs<"getJourneyActionmapsEstimatesJobResults">): Promise<GenesysCloudFullApiOperationResponseMap["getJourneyActionmapsEstimatesJobResults"]>;
  GetJourneyActiontarget(...args: GenesysCloudFullApiOperationArgs<"getJourneyActiontarget">): Promise<GenesysCloudFullApiOperationResponseMap["getJourneyActiontarget"]>;
  GetJourneyActiontargets(...args: GenesysCloudFullApiOperationArgs<"getJourneyActiontargets">): Promise<GenesysCloudFullApiOperationResponseMap["getJourneyActiontargets"]>;
  GetJourneyActiontemplate(...args: GenesysCloudFullApiOperationArgs<"getJourneyActiontemplate">): Promise<GenesysCloudFullApiOperationResponseMap["getJourneyActiontemplate"]>;
  GetJourneyActiontemplates(...args: GenesysCloudFullApiOperationArgs<"getJourneyActiontemplates">): Promise<GenesysCloudFullApiOperationResponseMap["getJourneyActiontemplates"]>;
  GetJourneyDeploymentCustomerPing(...args: GenesysCloudFullApiOperationArgs<"getJourneyDeploymentCustomerPing">): Promise<GenesysCloudFullApiOperationResponseMap["getJourneyDeploymentCustomerPing"]>;
  GetJourneyExternaleventsConfiguration(...args: GenesysCloudFullApiOperationArgs<"getJourneyExternaleventsConfiguration">): Promise<GenesysCloudFullApiOperationResponseMap["getJourneyExternaleventsConfiguration"]>;
  GetJourneyExternaleventsConfigurations(...args: GenesysCloudFullApiOperationArgs<"getJourneyExternaleventsConfigurations">): Promise<GenesysCloudFullApiOperationResponseMap["getJourneyExternaleventsConfigurations"]>;
  GetJourneyExternaleventsSchema(...args: GenesysCloudFullApiOperationArgs<"getJourneyExternaleventsSchema">): Promise<GenesysCloudFullApiOperationResponseMap["getJourneyExternaleventsSchema"]>;
  GetJourneyExternaleventsSchemas(...args: GenesysCloudFullApiOperationArgs<"getJourneyExternaleventsSchemas">): Promise<GenesysCloudFullApiOperationResponseMap["getJourneyExternaleventsSchemas"]>;
  GetJourneyExternaleventsSchemasCoretype(...args: GenesysCloudFullApiOperationArgs<"getJourneyExternaleventsSchemasCoretype">): Promise<GenesysCloudFullApiOperationResponseMap["getJourneyExternaleventsSchemasCoretype"]>;
  GetJourneyExternaleventsSchemasCoretypes(...args: GenesysCloudFullApiOperationArgs<"getJourneyExternaleventsSchemasCoretypes">): Promise<GenesysCloudFullApiOperationResponseMap["getJourneyExternaleventsSchemasCoretypes"]>;
  GetJourneyExternaleventsSchemasLimits(...args: GenesysCloudFullApiOperationArgs<"getJourneyExternaleventsSchemasLimits">): Promise<GenesysCloudFullApiOperationResponseMap["getJourneyExternaleventsSchemasLimits"]>;
  GetJourneyExternaleventsSchemaVersion(...args: GenesysCloudFullApiOperationArgs<"getJourneyExternaleventsSchemaVersion">): Promise<GenesysCloudFullApiOperationResponseMap["getJourneyExternaleventsSchemaVersion"]>;
  GetJourneyExternaleventsSchemaVersions(...args: GenesysCloudFullApiOperationArgs<"getJourneyExternaleventsSchemaVersions">): Promise<GenesysCloudFullApiOperationResponseMap["getJourneyExternaleventsSchemaVersions"]>;
  GetJourneyOutcome(...args: GenesysCloudFullApiOperationArgs<"getJourneyOutcome">): Promise<GenesysCloudFullApiOperationResponseMap["getJourneyOutcome"]>;
  GetJourneyOutcomes(...args: GenesysCloudFullApiOperationArgs<"getJourneyOutcomes">): Promise<GenesysCloudFullApiOperationResponseMap["getJourneyOutcomes"]>;
  GetJourneyOutcomesPredictor(...args: GenesysCloudFullApiOperationArgs<"getJourneyOutcomesPredictor">): Promise<GenesysCloudFullApiOperationResponseMap["getJourneyOutcomesPredictor"]>;
  GetJourneyOutcomesPredictors(...args: GenesysCloudFullApiOperationArgs<"getJourneyOutcomesPredictors">): Promise<GenesysCloudFullApiOperationResponseMap["getJourneyOutcomesPredictors"]>;
  GetJourneySegment(...args: GenesysCloudFullApiOperationArgs<"getJourneySegment">): Promise<GenesysCloudFullApiOperationResponseMap["getJourneySegment"]>;
  GetJourneySegments(...args: GenesysCloudFullApiOperationArgs<"getJourneySegments">): Promise<GenesysCloudFullApiOperationResponseMap["getJourneySegments"]>;
  GetJourneySession(...args: GenesysCloudFullApiOperationArgs<"getJourneySession">): Promise<GenesysCloudFullApiOperationResponseMap["getJourneySession"]>;
  GetJourneySessionEvents(...args: GenesysCloudFullApiOperationArgs<"getJourneySessionEvents">): Promise<GenesysCloudFullApiOperationResponseMap["getJourneySessionEvents"]>;
  GetJourneySessionOutcomescores(...args: GenesysCloudFullApiOperationArgs<"getJourneySessionOutcomescores">): Promise<GenesysCloudFullApiOperationResponseMap["getJourneySessionOutcomescores"]>;
  GetJourneyView(...args: GenesysCloudFullApiOperationArgs<"getJourneyView">): Promise<GenesysCloudFullApiOperationResponseMap["getJourneyView"]>;
  GetJourneyViews(...args: GenesysCloudFullApiOperationArgs<"getJourneyViews">): Promise<GenesysCloudFullApiOperationResponseMap["getJourneyViews"]>;
  GetJourneyViewSchedules(...args: GenesysCloudFullApiOperationArgs<"getJourneyViewSchedules">): Promise<GenesysCloudFullApiOperationResponseMap["getJourneyViewSchedules"]>;
  GetJourneyViewsDataDetails(...args: GenesysCloudFullApiOperationArgs<"getJourneyViewsDataDetails">): Promise<GenesysCloudFullApiOperationResponseMap["getJourneyViewsDataDetails"]>;
  GetJourneyViewsEventdefinition(...args: GenesysCloudFullApiOperationArgs<"getJourneyViewsEventdefinition">): Promise<GenesysCloudFullApiOperationResponseMap["getJourneyViewsEventdefinition"]>;
  GetJourneyViewsEventdefinitions(...args: GenesysCloudFullApiOperationArgs<"getJourneyViewsEventdefinitions">): Promise<GenesysCloudFullApiOperationResponseMap["getJourneyViewsEventdefinitions"]>;
  GetJourneyViewsEventdefinitionsExternal(...args: GenesysCloudFullApiOperationArgs<"getJourneyViewsEventdefinitionsExternal">): Promise<GenesysCloudFullApiOperationResponseMap["getJourneyViewsEventdefinitionsExternal"]>;
  GetJourneyViewsEventdefinitionsExternalChanges(...args: GenesysCloudFullApiOperationArgs<"getJourneyViewsEventdefinitionsExternalChanges">): Promise<GenesysCloudFullApiOperationResponseMap["getJourneyViewsEventdefinitionsExternalChanges"]>;
  GetJourneyViewsJobs(...args: GenesysCloudFullApiOperationArgs<"getJourneyViewsJobs">): Promise<GenesysCloudFullApiOperationResponseMap["getJourneyViewsJobs"]>;
  GetJourneyViewsJobsMe(...args: GenesysCloudFullApiOperationArgs<"getJourneyViewsJobsMe">): Promise<GenesysCloudFullApiOperationResponseMap["getJourneyViewsJobsMe"]>;
  GetJourneyViewsSchedules(...args: GenesysCloudFullApiOperationArgs<"getJourneyViewsSchedules">): Promise<GenesysCloudFullApiOperationResponseMap["getJourneyViewsSchedules"]>;
  GetJourneyViewVersion(...args: GenesysCloudFullApiOperationArgs<"getJourneyViewVersion">): Promise<GenesysCloudFullApiOperationResponseMap["getJourneyViewVersion"]>;
  GetJourneyViewVersionChart(...args: GenesysCloudFullApiOperationArgs<"getJourneyViewVersionChart">): Promise<GenesysCloudFullApiOperationResponseMap["getJourneyViewVersionChart"]>;
  GetJourneyViewVersionChartVersion(...args: GenesysCloudFullApiOperationArgs<"getJourneyViewVersionChartVersion">): Promise<GenesysCloudFullApiOperationResponseMap["getJourneyViewVersionChartVersion"]>;
  GetJourneyViewVersionJob(...args: GenesysCloudFullApiOperationArgs<"getJourneyViewVersionJob">): Promise<GenesysCloudFullApiOperationResponseMap["getJourneyViewVersionJob"]>;
  GetJourneyViewVersionJobResults(...args: GenesysCloudFullApiOperationArgs<"getJourneyViewVersionJobResults">): Promise<GenesysCloudFullApiOperationResponseMap["getJourneyViewVersionJobResults"]>;
  GetJourneyViewVersionJobResultsChart(...args: GenesysCloudFullApiOperationArgs<"getJourneyViewVersionJobResultsChart">): Promise<GenesysCloudFullApiOperationResponseMap["getJourneyViewVersionJobResultsChart"]>;
  GetJourneyViewVersionJobsLatest(...args: GenesysCloudFullApiOperationArgs<"getJourneyViewVersionJobsLatest">): Promise<GenesysCloudFullApiOperationResponseMap["getJourneyViewVersionJobsLatest"]>;
  PatchJourneyActionmap(...args: GenesysCloudFullApiOperationArgs<"patchJourneyActionmap">): Promise<GenesysCloudFullApiOperationResponseMap["patchJourneyActionmap"]>;
  PatchJourneyActiontarget(...args: GenesysCloudFullApiOperationArgs<"patchJourneyActiontarget">): Promise<GenesysCloudFullApiOperationResponseMap["patchJourneyActiontarget"]>;
  PatchJourneyActiontemplate(...args: GenesysCloudFullApiOperationArgs<"patchJourneyActiontemplate">): Promise<GenesysCloudFullApiOperationResponseMap["patchJourneyActiontemplate"]>;
  PatchJourneyExternaleventsConfiguration(...args: GenesysCloudFullApiOperationArgs<"patchJourneyExternaleventsConfiguration">): Promise<GenesysCloudFullApiOperationResponseMap["patchJourneyExternaleventsConfiguration"]>;
  PatchJourneyOutcome(...args: GenesysCloudFullApiOperationArgs<"patchJourneyOutcome">): Promise<GenesysCloudFullApiOperationResponseMap["patchJourneyOutcome"]>;
  PatchJourneySegment(...args: GenesysCloudFullApiOperationArgs<"patchJourneySegment">): Promise<GenesysCloudFullApiOperationResponseMap["patchJourneySegment"]>;
  PatchJourneyViewVersionJob(...args: GenesysCloudFullApiOperationArgs<"patchJourneyViewVersionJob">): Promise<GenesysCloudFullApiOperationResponseMap["patchJourneyViewVersionJob"]>;
  PostJourneyActionmaps(...args: GenesysCloudFullApiOperationArgs<"postJourneyActionmaps">): Promise<GenesysCloudFullApiOperationResponseMap["postJourneyActionmaps"]>;
  PostJourneyActionmapsEstimatesJobs(...args: GenesysCloudFullApiOperationArgs<"postJourneyActionmapsEstimatesJobs">): Promise<GenesysCloudFullApiOperationResponseMap["postJourneyActionmapsEstimatesJobs"]>;
  PostJourneyActiontemplates(...args: GenesysCloudFullApiOperationArgs<"postJourneyActiontemplates">): Promise<GenesysCloudFullApiOperationResponseMap["postJourneyActiontemplates"]>;
  PostJourneyDeploymentActionevent(...args: GenesysCloudFullApiOperationArgs<"postJourneyDeploymentActionevent">): Promise<GenesysCloudFullApiOperationResponseMap["postJourneyDeploymentActionevent"]>;
  PostJourneyDeploymentAppevents(...args: GenesysCloudFullApiOperationArgs<"postJourneyDeploymentAppevents">): Promise<GenesysCloudFullApiOperationResponseMap["postJourneyDeploymentAppevents"]>;
  PostJourneyDeploymentWebevents(...args: GenesysCloudFullApiOperationArgs<"postJourneyDeploymentWebevents">): Promise<GenesysCloudFullApiOperationResponseMap["postJourneyDeploymentWebevents"]>;
  PostJourneyExternaleventsConfigurationEvents(...args: GenesysCloudFullApiOperationArgs<"postJourneyExternaleventsConfigurationEvents">): Promise<GenesysCloudFullApiOperationResponseMap["postJourneyExternaleventsConfigurationEvents"]>;
  PostJourneyExternaleventsConfigurations(...args: GenesysCloudFullApiOperationArgs<"postJourneyExternaleventsConfigurations">): Promise<GenesysCloudFullApiOperationResponseMap["postJourneyExternaleventsConfigurations"]>;
  PostJourneyExternaleventsSchemas(...args: GenesysCloudFullApiOperationArgs<"postJourneyExternaleventsSchemas">): Promise<GenesysCloudFullApiOperationResponseMap["postJourneyExternaleventsSchemas"]>;
  PostJourneyFlowsPathsQuery(...args: GenesysCloudFullApiOperationArgs<"postJourneyFlowsPathsQuery">): Promise<GenesysCloudFullApiOperationResponseMap["postJourneyFlowsPathsQuery"]>;
  PostJourneyOutcomes(...args: GenesysCloudFullApiOperationArgs<"postJourneyOutcomes">): Promise<GenesysCloudFullApiOperationResponseMap["postJourneyOutcomes"]>;
  PostJourneyOutcomesPredictors(...args: GenesysCloudFullApiOperationArgs<"postJourneyOutcomesPredictors">): Promise<GenesysCloudFullApiOperationResponseMap["postJourneyOutcomesPredictors"]>;
  PostJourneySegments(...args: GenesysCloudFullApiOperationArgs<"postJourneySegments">): Promise<GenesysCloudFullApiOperationResponseMap["postJourneySegments"]>;
  PostJourneyViews(...args: GenesysCloudFullApiOperationArgs<"postJourneyViews">): Promise<GenesysCloudFullApiOperationResponseMap["postJourneyViews"]>;
  PostJourneyViewSchedules(...args: GenesysCloudFullApiOperationArgs<"postJourneyViewSchedules">): Promise<GenesysCloudFullApiOperationResponseMap["postJourneyViewSchedules"]>;
  PostJourneyViewsEncodingsValidate(...args: GenesysCloudFullApiOperationArgs<"postJourneyViewsEncodingsValidate">): Promise<GenesysCloudFullApiOperationResponseMap["postJourneyViewsEncodingsValidate"]>;
  PostJourneyViewVersionJobs(...args: GenesysCloudFullApiOperationArgs<"postJourneyViewVersionJobs">): Promise<GenesysCloudFullApiOperationResponseMap["postJourneyViewVersionJobs"]>;
  PostJourneyViewVersions(...args: GenesysCloudFullApiOperationArgs<"postJourneyViewVersions">): Promise<GenesysCloudFullApiOperationResponseMap["postJourneyViewVersions"]>;
  PutJourneyExternaleventsSchema(...args: GenesysCloudFullApiOperationArgs<"putJourneyExternaleventsSchema">): Promise<GenesysCloudFullApiOperationResponseMap["putJourneyExternaleventsSchema"]>;
}

export const GenesysCloudFullApiJourney01GeneratedFunctionNames = [
  "DeleteJourneyActionmap",
  "DeleteJourneyActiontemplate",
  "DeleteJourneyExternaleventsConfiguration",
  "DeleteJourneyExternaleventsSchema",
  "DeleteJourneyOutcome",
  "DeleteJourneyOutcomesPredictor",
  "DeleteJourneySegment",
  "DeleteJourneyView",
  "DeleteJourneyViewSchedules",
  "GetJourneyActionmap",
  "GetJourneyActionmaps",
  "GetJourneyActionmapsEstimatesJob",
  "GetJourneyActionmapsEstimatesJobResults",
  "GetJourneyActiontarget",
  "GetJourneyActiontargets",
  "GetJourneyActiontemplate",
  "GetJourneyActiontemplates",
  "GetJourneyDeploymentCustomerPing",
  "GetJourneyExternaleventsConfiguration",
  "GetJourneyExternaleventsConfigurations",
  "GetJourneyExternaleventsSchema",
  "GetJourneyExternaleventsSchemas",
  "GetJourneyExternaleventsSchemasCoretype",
  "GetJourneyExternaleventsSchemasCoretypes",
  "GetJourneyExternaleventsSchemasLimits",
  "GetJourneyExternaleventsSchemaVersion",
  "GetJourneyExternaleventsSchemaVersions",
  "GetJourneyOutcome",
  "GetJourneyOutcomes",
  "GetJourneyOutcomesPredictor",
  "GetJourneyOutcomesPredictors",
  "GetJourneySegment",
  "GetJourneySegments",
  "GetJourneySession",
  "GetJourneySessionEvents",
  "GetJourneySessionOutcomescores",
  "GetJourneyView",
  "GetJourneyViews",
  "GetJourneyViewSchedules",
  "GetJourneyViewsDataDetails",
  "GetJourneyViewsEventdefinition",
  "GetJourneyViewsEventdefinitions",
  "GetJourneyViewsEventdefinitionsExternal",
  "GetJourneyViewsEventdefinitionsExternalChanges",
  "GetJourneyViewsJobs",
  "GetJourneyViewsJobsMe",
  "GetJourneyViewsSchedules",
  "GetJourneyViewVersion",
  "GetJourneyViewVersionChart",
  "GetJourneyViewVersionChartVersion",
  "GetJourneyViewVersionJob",
  "GetJourneyViewVersionJobResults",
  "GetJourneyViewVersionJobResultsChart",
  "GetJourneyViewVersionJobsLatest",
  "PatchJourneyActionmap",
  "PatchJourneyActiontarget",
  "PatchJourneyActiontemplate",
  "PatchJourneyExternaleventsConfiguration",
  "PatchJourneyOutcome",
  "PatchJourneySegment",
  "PatchJourneyViewVersionJob",
  "PostJourneyActionmaps",
  "PostJourneyActionmapsEstimatesJobs",
  "PostJourneyActiontemplates",
  "PostJourneyDeploymentActionevent",
  "PostJourneyDeploymentAppevents",
  "PostJourneyDeploymentWebevents",
  "PostJourneyExternaleventsConfigurationEvents",
  "PostJourneyExternaleventsConfigurations",
  "PostJourneyExternaleventsSchemas",
  "PostJourneyFlowsPathsQuery",
  "PostJourneyOutcomes",
  "PostJourneyOutcomesPredictors",
  "PostJourneySegments",
  "PostJourneyViews",
  "PostJourneyViewSchedules",
  "PostJourneyViewsEncodingsValidate",
  "PostJourneyViewVersionJobs",
  "PostJourneyViewVersions",
  "PutJourneyExternaleventsSchema"
] as const satisfies readonly (keyof GenesysCloudFullApiJourney01GeneratedClient)[];

export function createGenesysCloudFullApiJourney01GeneratedClient(
  callOperation: GenesysCloudGeneratedOperationCaller,
): GenesysCloudFullApiJourney01GeneratedClient {
  return {
    DeleteJourneyActionmap: (...args) => callOperation("deleteJourneyActionmap", ...(args as GenesysCloudFullApiOperationArgs<"deleteJourneyActionmap">)),
    DeleteJourneyActiontemplate: (...args) => callOperation("deleteJourneyActiontemplate", ...(args as GenesysCloudFullApiOperationArgs<"deleteJourneyActiontemplate">)),
    DeleteJourneyExternaleventsConfiguration: (...args) => callOperation("deleteJourneyExternaleventsConfiguration", ...(args as GenesysCloudFullApiOperationArgs<"deleteJourneyExternaleventsConfiguration">)),
    DeleteJourneyExternaleventsSchema: (...args) => callOperation("deleteJourneyExternaleventsSchema", ...(args as GenesysCloudFullApiOperationArgs<"deleteJourneyExternaleventsSchema">)),
    DeleteJourneyOutcome: (...args) => callOperation("deleteJourneyOutcome", ...(args as GenesysCloudFullApiOperationArgs<"deleteJourneyOutcome">)),
    DeleteJourneyOutcomesPredictor: (...args) => callOperation("deleteJourneyOutcomesPredictor", ...(args as GenesysCloudFullApiOperationArgs<"deleteJourneyOutcomesPredictor">)),
    DeleteJourneySegment: (...args) => callOperation("deleteJourneySegment", ...(args as GenesysCloudFullApiOperationArgs<"deleteJourneySegment">)),
    DeleteJourneyView: (...args) => callOperation("deleteJourneyView", ...(args as GenesysCloudFullApiOperationArgs<"deleteJourneyView">)),
    DeleteJourneyViewSchedules: (...args) => callOperation("deleteJourneyViewSchedules", ...(args as GenesysCloudFullApiOperationArgs<"deleteJourneyViewSchedules">)),
    GetJourneyActionmap: (...args) => callOperation("getJourneyActionmap", ...(args as GenesysCloudFullApiOperationArgs<"getJourneyActionmap">)),
    GetJourneyActionmaps: (...args) => callOperation("getJourneyActionmaps", ...(args as GenesysCloudFullApiOperationArgs<"getJourneyActionmaps">)),
    GetJourneyActionmapsEstimatesJob: (...args) => callOperation("getJourneyActionmapsEstimatesJob", ...(args as GenesysCloudFullApiOperationArgs<"getJourneyActionmapsEstimatesJob">)),
    GetJourneyActionmapsEstimatesJobResults: (...args) => callOperation("getJourneyActionmapsEstimatesJobResults", ...(args as GenesysCloudFullApiOperationArgs<"getJourneyActionmapsEstimatesJobResults">)),
    GetJourneyActiontarget: (...args) => callOperation("getJourneyActiontarget", ...(args as GenesysCloudFullApiOperationArgs<"getJourneyActiontarget">)),
    GetJourneyActiontargets: (...args) => callOperation("getJourneyActiontargets", ...(args as GenesysCloudFullApiOperationArgs<"getJourneyActiontargets">)),
    GetJourneyActiontemplate: (...args) => callOperation("getJourneyActiontemplate", ...(args as GenesysCloudFullApiOperationArgs<"getJourneyActiontemplate">)),
    GetJourneyActiontemplates: (...args) => callOperation("getJourneyActiontemplates", ...(args as GenesysCloudFullApiOperationArgs<"getJourneyActiontemplates">)),
    GetJourneyDeploymentCustomerPing: (...args) => callOperation("getJourneyDeploymentCustomerPing", ...(args as GenesysCloudFullApiOperationArgs<"getJourneyDeploymentCustomerPing">)),
    GetJourneyExternaleventsConfiguration: (...args) => callOperation("getJourneyExternaleventsConfiguration", ...(args as GenesysCloudFullApiOperationArgs<"getJourneyExternaleventsConfiguration">)),
    GetJourneyExternaleventsConfigurations: (...args) => callOperation("getJourneyExternaleventsConfigurations", ...(args as GenesysCloudFullApiOperationArgs<"getJourneyExternaleventsConfigurations">)),
    GetJourneyExternaleventsSchema: (...args) => callOperation("getJourneyExternaleventsSchema", ...(args as GenesysCloudFullApiOperationArgs<"getJourneyExternaleventsSchema">)),
    GetJourneyExternaleventsSchemas: (...args) => callOperation("getJourneyExternaleventsSchemas", ...(args as GenesysCloudFullApiOperationArgs<"getJourneyExternaleventsSchemas">)),
    GetJourneyExternaleventsSchemasCoretype: (...args) => callOperation("getJourneyExternaleventsSchemasCoretype", ...(args as GenesysCloudFullApiOperationArgs<"getJourneyExternaleventsSchemasCoretype">)),
    GetJourneyExternaleventsSchemasCoretypes: (...args) => callOperation("getJourneyExternaleventsSchemasCoretypes", ...(args as GenesysCloudFullApiOperationArgs<"getJourneyExternaleventsSchemasCoretypes">)),
    GetJourneyExternaleventsSchemasLimits: (...args) => callOperation("getJourneyExternaleventsSchemasLimits", ...(args as GenesysCloudFullApiOperationArgs<"getJourneyExternaleventsSchemasLimits">)),
    GetJourneyExternaleventsSchemaVersion: (...args) => callOperation("getJourneyExternaleventsSchemaVersion", ...(args as GenesysCloudFullApiOperationArgs<"getJourneyExternaleventsSchemaVersion">)),
    GetJourneyExternaleventsSchemaVersions: (...args) => callOperation("getJourneyExternaleventsSchemaVersions", ...(args as GenesysCloudFullApiOperationArgs<"getJourneyExternaleventsSchemaVersions">)),
    GetJourneyOutcome: (...args) => callOperation("getJourneyOutcome", ...(args as GenesysCloudFullApiOperationArgs<"getJourneyOutcome">)),
    GetJourneyOutcomes: (...args) => callOperation("getJourneyOutcomes", ...(args as GenesysCloudFullApiOperationArgs<"getJourneyOutcomes">)),
    GetJourneyOutcomesPredictor: (...args) => callOperation("getJourneyOutcomesPredictor", ...(args as GenesysCloudFullApiOperationArgs<"getJourneyOutcomesPredictor">)),
    GetJourneyOutcomesPredictors: (...args) => callOperation("getJourneyOutcomesPredictors", ...(args as GenesysCloudFullApiOperationArgs<"getJourneyOutcomesPredictors">)),
    GetJourneySegment: (...args) => callOperation("getJourneySegment", ...(args as GenesysCloudFullApiOperationArgs<"getJourneySegment">)),
    GetJourneySegments: (...args) => callOperation("getJourneySegments", ...(args as GenesysCloudFullApiOperationArgs<"getJourneySegments">)),
    GetJourneySession: (...args) => callOperation("getJourneySession", ...(args as GenesysCloudFullApiOperationArgs<"getJourneySession">)),
    GetJourneySessionEvents: (...args) => callOperation("getJourneySessionEvents", ...(args as GenesysCloudFullApiOperationArgs<"getJourneySessionEvents">)),
    GetJourneySessionOutcomescores: (...args) => callOperation("getJourneySessionOutcomescores", ...(args as GenesysCloudFullApiOperationArgs<"getJourneySessionOutcomescores">)),
    GetJourneyView: (...args) => callOperation("getJourneyView", ...(args as GenesysCloudFullApiOperationArgs<"getJourneyView">)),
    GetJourneyViews: (...args) => callOperation("getJourneyViews", ...(args as GenesysCloudFullApiOperationArgs<"getJourneyViews">)),
    GetJourneyViewSchedules: (...args) => callOperation("getJourneyViewSchedules", ...(args as GenesysCloudFullApiOperationArgs<"getJourneyViewSchedules">)),
    GetJourneyViewsDataDetails: (...args) => callOperation("getJourneyViewsDataDetails", ...(args as GenesysCloudFullApiOperationArgs<"getJourneyViewsDataDetails">)),
    GetJourneyViewsEventdefinition: (...args) => callOperation("getJourneyViewsEventdefinition", ...(args as GenesysCloudFullApiOperationArgs<"getJourneyViewsEventdefinition">)),
    GetJourneyViewsEventdefinitions: (...args) => callOperation("getJourneyViewsEventdefinitions", ...(args as GenesysCloudFullApiOperationArgs<"getJourneyViewsEventdefinitions">)),
    GetJourneyViewsEventdefinitionsExternal: (...args) => callOperation("getJourneyViewsEventdefinitionsExternal", ...(args as GenesysCloudFullApiOperationArgs<"getJourneyViewsEventdefinitionsExternal">)),
    GetJourneyViewsEventdefinitionsExternalChanges: (...args) => callOperation("getJourneyViewsEventdefinitionsExternalChanges", ...(args as GenesysCloudFullApiOperationArgs<"getJourneyViewsEventdefinitionsExternalChanges">)),
    GetJourneyViewsJobs: (...args) => callOperation("getJourneyViewsJobs", ...(args as GenesysCloudFullApiOperationArgs<"getJourneyViewsJobs">)),
    GetJourneyViewsJobsMe: (...args) => callOperation("getJourneyViewsJobsMe", ...(args as GenesysCloudFullApiOperationArgs<"getJourneyViewsJobsMe">)),
    GetJourneyViewsSchedules: (...args) => callOperation("getJourneyViewsSchedules", ...(args as GenesysCloudFullApiOperationArgs<"getJourneyViewsSchedules">)),
    GetJourneyViewVersion: (...args) => callOperation("getJourneyViewVersion", ...(args as GenesysCloudFullApiOperationArgs<"getJourneyViewVersion">)),
    GetJourneyViewVersionChart: (...args) => callOperation("getJourneyViewVersionChart", ...(args as GenesysCloudFullApiOperationArgs<"getJourneyViewVersionChart">)),
    GetJourneyViewVersionChartVersion: (...args) => callOperation("getJourneyViewVersionChartVersion", ...(args as GenesysCloudFullApiOperationArgs<"getJourneyViewVersionChartVersion">)),
    GetJourneyViewVersionJob: (...args) => callOperation("getJourneyViewVersionJob", ...(args as GenesysCloudFullApiOperationArgs<"getJourneyViewVersionJob">)),
    GetJourneyViewVersionJobResults: (...args) => callOperation("getJourneyViewVersionJobResults", ...(args as GenesysCloudFullApiOperationArgs<"getJourneyViewVersionJobResults">)),
    GetJourneyViewVersionJobResultsChart: (...args) => callOperation("getJourneyViewVersionJobResultsChart", ...(args as GenesysCloudFullApiOperationArgs<"getJourneyViewVersionJobResultsChart">)),
    GetJourneyViewVersionJobsLatest: (...args) => callOperation("getJourneyViewVersionJobsLatest", ...(args as GenesysCloudFullApiOperationArgs<"getJourneyViewVersionJobsLatest">)),
    PatchJourneyActionmap: (...args) => callOperation("patchJourneyActionmap", ...(args as GenesysCloudFullApiOperationArgs<"patchJourneyActionmap">)),
    PatchJourneyActiontarget: (...args) => callOperation("patchJourneyActiontarget", ...(args as GenesysCloudFullApiOperationArgs<"patchJourneyActiontarget">)),
    PatchJourneyActiontemplate: (...args) => callOperation("patchJourneyActiontemplate", ...(args as GenesysCloudFullApiOperationArgs<"patchJourneyActiontemplate">)),
    PatchJourneyExternaleventsConfiguration: (...args) => callOperation("patchJourneyExternaleventsConfiguration", ...(args as GenesysCloudFullApiOperationArgs<"patchJourneyExternaleventsConfiguration">)),
    PatchJourneyOutcome: (...args) => callOperation("patchJourneyOutcome", ...(args as GenesysCloudFullApiOperationArgs<"patchJourneyOutcome">)),
    PatchJourneySegment: (...args) => callOperation("patchJourneySegment", ...(args as GenesysCloudFullApiOperationArgs<"patchJourneySegment">)),
    PatchJourneyViewVersionJob: (...args) => callOperation("patchJourneyViewVersionJob", ...(args as GenesysCloudFullApiOperationArgs<"patchJourneyViewVersionJob">)),
    PostJourneyActionmaps: (...args) => callOperation("postJourneyActionmaps", ...(args as GenesysCloudFullApiOperationArgs<"postJourneyActionmaps">)),
    PostJourneyActionmapsEstimatesJobs: (...args) => callOperation("postJourneyActionmapsEstimatesJobs", ...(args as GenesysCloudFullApiOperationArgs<"postJourneyActionmapsEstimatesJobs">)),
    PostJourneyActiontemplates: (...args) => callOperation("postJourneyActiontemplates", ...(args as GenesysCloudFullApiOperationArgs<"postJourneyActiontemplates">)),
    PostJourneyDeploymentActionevent: (...args) => callOperation("postJourneyDeploymentActionevent", ...(args as GenesysCloudFullApiOperationArgs<"postJourneyDeploymentActionevent">)),
    PostJourneyDeploymentAppevents: (...args) => callOperation("postJourneyDeploymentAppevents", ...(args as GenesysCloudFullApiOperationArgs<"postJourneyDeploymentAppevents">)),
    PostJourneyDeploymentWebevents: (...args) => callOperation("postJourneyDeploymentWebevents", ...(args as GenesysCloudFullApiOperationArgs<"postJourneyDeploymentWebevents">)),
    PostJourneyExternaleventsConfigurationEvents: (...args) => callOperation("postJourneyExternaleventsConfigurationEvents", ...(args as GenesysCloudFullApiOperationArgs<"postJourneyExternaleventsConfigurationEvents">)),
    PostJourneyExternaleventsConfigurations: (...args) => callOperation("postJourneyExternaleventsConfigurations", ...(args as GenesysCloudFullApiOperationArgs<"postJourneyExternaleventsConfigurations">)),
    PostJourneyExternaleventsSchemas: (...args) => callOperation("postJourneyExternaleventsSchemas", ...(args as GenesysCloudFullApiOperationArgs<"postJourneyExternaleventsSchemas">)),
    PostJourneyFlowsPathsQuery: (...args) => callOperation("postJourneyFlowsPathsQuery", ...(args as GenesysCloudFullApiOperationArgs<"postJourneyFlowsPathsQuery">)),
    PostJourneyOutcomes: (...args) => callOperation("postJourneyOutcomes", ...(args as GenesysCloudFullApiOperationArgs<"postJourneyOutcomes">)),
    PostJourneyOutcomesPredictors: (...args) => callOperation("postJourneyOutcomesPredictors", ...(args as GenesysCloudFullApiOperationArgs<"postJourneyOutcomesPredictors">)),
    PostJourneySegments: (...args) => callOperation("postJourneySegments", ...(args as GenesysCloudFullApiOperationArgs<"postJourneySegments">)),
    PostJourneyViews: (...args) => callOperation("postJourneyViews", ...(args as GenesysCloudFullApiOperationArgs<"postJourneyViews">)),
    PostJourneyViewSchedules: (...args) => callOperation("postJourneyViewSchedules", ...(args as GenesysCloudFullApiOperationArgs<"postJourneyViewSchedules">)),
    PostJourneyViewsEncodingsValidate: (...args) => callOperation("postJourneyViewsEncodingsValidate", ...(args as GenesysCloudFullApiOperationArgs<"postJourneyViewsEncodingsValidate">)),
    PostJourneyViewVersionJobs: (...args) => callOperation("postJourneyViewVersionJobs", ...(args as GenesysCloudFullApiOperationArgs<"postJourneyViewVersionJobs">)),
    PostJourneyViewVersions: (...args) => callOperation("postJourneyViewVersions", ...(args as GenesysCloudFullApiOperationArgs<"postJourneyViewVersions">)),
    PutJourneyExternaleventsSchema: (...args) => callOperation("putJourneyExternaleventsSchema", ...(args as GenesysCloudFullApiOperationArgs<"putJourneyExternaleventsSchema">)),
  };
}
