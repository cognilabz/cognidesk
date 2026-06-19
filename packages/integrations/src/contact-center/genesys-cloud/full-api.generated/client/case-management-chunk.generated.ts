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
export const GenesysCloudFullApiCaseManagementOperationKeys = [
  "deleteCasemanagementCase",
  "deleteCasemanagementCaseplan",
  "deleteCasemanagementCaseplanDataschema",
  "getCasemanagementCase",
  "getCasemanagementCaseAssociation",
  "getCasemanagementCaseAssociations",
  "getCasemanagementCaseplan",
  "getCasemanagementCaseplans",
  "getCasemanagementCaseplanVersion",
  "getCasemanagementCaseplanVersionDataschemas",
  "getCasemanagementCaseplanVersionIntakesettings",
  "getCasemanagementCaseplanVersionStageplan",
  "getCasemanagementCaseplanVersionStageplans",
  "getCasemanagementCaseplanVersionStageplanStepplan",
  "getCasemanagementCaseplanVersionStageplanStepplans",
  "getCasemanagementCasesExternalcontact",
  "getCasemanagementCasesReference",
  "getCasemanagementCaseStage",
  "getCasemanagementCaseStages",
  "getCasemanagementCaseStageStep",
  "getCasemanagementCaseStageSteps",
  "getCasemanagementCaseTerminateJob",
  "patchCasemanagementCaseDatedue",
  "patchCasemanagementCaseplan",
  "patchCasemanagementCaseplanStageplan",
  "patchCasemanagementCaseplanStageplanStepplan",
  "patchCasemanagementCasePriority",
  "patchCasemanagementCaseSummary",
  "postCasemanagementCaseAssociations",
  "postCasemanagementCaseplanDataschemas",
  "postCasemanagementCaseplanPublish",
  "postCasemanagementCaseplans",
  "postCasemanagementCaseplansQuery",
  "postCasemanagementCaseplanVersions",
  "postCasemanagementCases",
  "postCasemanagementCasesAssociationsQuery",
  "postCasemanagementCaseTerminateJobs",
  "putCasemanagementCaseplanDataschema",
  "putCasemanagementCaseplanIntakesettings"
] as const;
export type GenesysCloudFullApiCaseManagementOperationKey = typeof GenesysCloudFullApiCaseManagementOperationKeys[number];
// End hardened literal operation keys.

export interface GenesysCloudFullApiCaseManagementOperationPathParamMap {
  "deleteCasemanagementCase": { "caseId": GenesysCloudFullApiPathParamValue };
  "deleteCasemanagementCaseplan": { "caseplanId": GenesysCloudFullApiPathParamValue };
  "deleteCasemanagementCaseplanDataschema": { "caseplanId": GenesysCloudFullApiPathParamValue; "schemaKeyName": GenesysCloudFullApiPathParamValue };
  "getCasemanagementCase": { "caseId": GenesysCloudFullApiPathParamValue };
  "getCasemanagementCaseAssociation": { "caseId": GenesysCloudFullApiPathParamValue; "associationId": GenesysCloudFullApiPathParamValue };
  "getCasemanagementCaseAssociations": { "caseId": GenesysCloudFullApiPathParamValue };
  "getCasemanagementCaseplan": { "caseplanId": GenesysCloudFullApiPathParamValue };
  "getCasemanagementCaseplans": {};
  "getCasemanagementCaseplanVersion": { "caseplanId": GenesysCloudFullApiPathParamValue; "versionId": GenesysCloudFullApiPathParamValue };
  "getCasemanagementCaseplanVersionDataschemas": { "caseplanId": GenesysCloudFullApiPathParamValue; "versionId": GenesysCloudFullApiPathParamValue };
  "getCasemanagementCaseplanVersionIntakesettings": { "caseplanId": GenesysCloudFullApiPathParamValue; "versionId": GenesysCloudFullApiPathParamValue };
  "getCasemanagementCaseplanVersionStageplan": { "caseplanId": GenesysCloudFullApiPathParamValue; "versionId": GenesysCloudFullApiPathParamValue; "stageplanId": GenesysCloudFullApiPathParamValue };
  "getCasemanagementCaseplanVersionStageplans": { "caseplanId": GenesysCloudFullApiPathParamValue; "versionId": GenesysCloudFullApiPathParamValue };
  "getCasemanagementCaseplanVersionStageplanStepplan": { "caseplanId": GenesysCloudFullApiPathParamValue; "versionId": GenesysCloudFullApiPathParamValue; "stageplanId": GenesysCloudFullApiPathParamValue; "stepplanId": GenesysCloudFullApiPathParamValue };
  "getCasemanagementCaseplanVersionStageplanStepplans": { "caseplanId": GenesysCloudFullApiPathParamValue; "versionId": GenesysCloudFullApiPathParamValue; "stageplanId": GenesysCloudFullApiPathParamValue };
  "getCasemanagementCasesExternalcontact": { "externalContactId": GenesysCloudFullApiPathParamValue };
  "getCasemanagementCasesReference": { "referenceId": GenesysCloudFullApiPathParamValue };
  "getCasemanagementCaseStage": { "caseId": GenesysCloudFullApiPathParamValue; "stageId": GenesysCloudFullApiPathParamValue };
  "getCasemanagementCaseStages": { "caseId": GenesysCloudFullApiPathParamValue };
  "getCasemanagementCaseStageStep": { "caseId": GenesysCloudFullApiPathParamValue; "stageId": GenesysCloudFullApiPathParamValue; "stepId": GenesysCloudFullApiPathParamValue };
  "getCasemanagementCaseStageSteps": { "caseId": GenesysCloudFullApiPathParamValue; "stageId": GenesysCloudFullApiPathParamValue };
  "getCasemanagementCaseTerminateJob": { "caseId": GenesysCloudFullApiPathParamValue; "jobId": GenesysCloudFullApiPathParamValue };
  "patchCasemanagementCaseDatedue": { "caseId": GenesysCloudFullApiPathParamValue };
  "patchCasemanagementCaseplan": { "caseplanId": GenesysCloudFullApiPathParamValue };
  "patchCasemanagementCaseplanStageplan": { "caseplanId": GenesysCloudFullApiPathParamValue; "stageplanId": GenesysCloudFullApiPathParamValue };
  "patchCasemanagementCaseplanStageplanStepplan": { "caseplanId": GenesysCloudFullApiPathParamValue; "stageplanId": GenesysCloudFullApiPathParamValue; "stepplanId": GenesysCloudFullApiPathParamValue };
  "patchCasemanagementCasePriority": { "caseId": GenesysCloudFullApiPathParamValue };
  "patchCasemanagementCaseSummary": { "caseId": GenesysCloudFullApiPathParamValue };
  "postCasemanagementCaseAssociations": { "caseId": GenesysCloudFullApiPathParamValue };
  "postCasemanagementCaseplanDataschemas": { "caseplanId": GenesysCloudFullApiPathParamValue };
  "postCasemanagementCaseplanPublish": { "caseplanId": GenesysCloudFullApiPathParamValue };
  "postCasemanagementCaseplans": {};
  "postCasemanagementCaseplansQuery": {};
  "postCasemanagementCaseplanVersions": { "caseplanId": GenesysCloudFullApiPathParamValue };
  "postCasemanagementCases": {};
  "postCasemanagementCasesAssociationsQuery": {};
  "postCasemanagementCaseTerminateJobs": { "caseId": GenesysCloudFullApiPathParamValue };
  "putCasemanagementCaseplanDataschema": { "caseplanId": GenesysCloudFullApiPathParamValue; "schemaKeyName": GenesysCloudFullApiPathParamValue };
  "putCasemanagementCaseplanIntakesettings": { "caseplanId": GenesysCloudFullApiPathParamValue };
}

export interface GenesysCloudFullApiCaseManagementOperationRequestMap {
  "deleteCasemanagementCase": GenesysCloudFullApiOperationInput<"deleteCasemanagementCase">;
  "deleteCasemanagementCaseplan": GenesysCloudFullApiOperationInput<"deleteCasemanagementCaseplan">;
  "deleteCasemanagementCaseplanDataschema": GenesysCloudFullApiOperationInput<"deleteCasemanagementCaseplanDataschema">;
  "getCasemanagementCase": GenesysCloudFullApiOperationInput<"getCasemanagementCase">;
  "getCasemanagementCaseAssociation": GenesysCloudFullApiOperationInput<"getCasemanagementCaseAssociation">;
  "getCasemanagementCaseAssociations": GenesysCloudFullApiOperationInput<"getCasemanagementCaseAssociations">;
  "getCasemanagementCaseplan": GenesysCloudFullApiOperationInput<"getCasemanagementCaseplan">;
  "getCasemanagementCaseplans": GenesysCloudFullApiOperationInput<"getCasemanagementCaseplans">;
  "getCasemanagementCaseplanVersion": GenesysCloudFullApiOperationInput<"getCasemanagementCaseplanVersion">;
  "getCasemanagementCaseplanVersionDataschemas": GenesysCloudFullApiOperationInput<"getCasemanagementCaseplanVersionDataschemas">;
  "getCasemanagementCaseplanVersionIntakesettings": GenesysCloudFullApiOperationInput<"getCasemanagementCaseplanVersionIntakesettings">;
  "getCasemanagementCaseplanVersionStageplan": GenesysCloudFullApiOperationInput<"getCasemanagementCaseplanVersionStageplan">;
  "getCasemanagementCaseplanVersionStageplans": GenesysCloudFullApiOperationInput<"getCasemanagementCaseplanVersionStageplans">;
  "getCasemanagementCaseplanVersionStageplanStepplan": GenesysCloudFullApiOperationInput<"getCasemanagementCaseplanVersionStageplanStepplan">;
  "getCasemanagementCaseplanVersionStageplanStepplans": GenesysCloudFullApiOperationInput<"getCasemanagementCaseplanVersionStageplanStepplans">;
  "getCasemanagementCasesExternalcontact": GenesysCloudFullApiOperationInput<"getCasemanagementCasesExternalcontact">;
  "getCasemanagementCasesReference": GenesysCloudFullApiOperationInput<"getCasemanagementCasesReference">;
  "getCasemanagementCaseStage": GenesysCloudFullApiOperationInput<"getCasemanagementCaseStage">;
  "getCasemanagementCaseStages": GenesysCloudFullApiOperationInput<"getCasemanagementCaseStages">;
  "getCasemanagementCaseStageStep": GenesysCloudFullApiOperationInput<"getCasemanagementCaseStageStep">;
  "getCasemanagementCaseStageSteps": GenesysCloudFullApiOperationInput<"getCasemanagementCaseStageSteps">;
  "getCasemanagementCaseTerminateJob": GenesysCloudFullApiOperationInput<"getCasemanagementCaseTerminateJob">;
  "patchCasemanagementCaseDatedue": GenesysCloudFullApiOperationInput<"patchCasemanagementCaseDatedue">;
  "patchCasemanagementCaseplan": GenesysCloudFullApiOperationInput<"patchCasemanagementCaseplan">;
  "patchCasemanagementCaseplanStageplan": GenesysCloudFullApiOperationInput<"patchCasemanagementCaseplanStageplan">;
  "patchCasemanagementCaseplanStageplanStepplan": GenesysCloudFullApiOperationInput<"patchCasemanagementCaseplanStageplanStepplan">;
  "patchCasemanagementCasePriority": GenesysCloudFullApiOperationInput<"patchCasemanagementCasePriority">;
  "patchCasemanagementCaseSummary": GenesysCloudFullApiOperationInput<"patchCasemanagementCaseSummary">;
  "postCasemanagementCaseAssociations": GenesysCloudFullApiOperationInput<"postCasemanagementCaseAssociations">;
  "postCasemanagementCaseplanDataschemas": GenesysCloudFullApiOperationInput<"postCasemanagementCaseplanDataschemas">;
  "postCasemanagementCaseplanPublish": GenesysCloudFullApiOperationInput<"postCasemanagementCaseplanPublish">;
  "postCasemanagementCaseplans": GenesysCloudFullApiOperationInput<"postCasemanagementCaseplans">;
  "postCasemanagementCaseplansQuery": GenesysCloudFullApiOperationInput<"postCasemanagementCaseplansQuery">;
  "postCasemanagementCaseplanVersions": GenesysCloudFullApiOperationInput<"postCasemanagementCaseplanVersions">;
  "postCasemanagementCases": GenesysCloudFullApiOperationInput<"postCasemanagementCases">;
  "postCasemanagementCasesAssociationsQuery": GenesysCloudFullApiOperationInput<"postCasemanagementCasesAssociationsQuery">;
  "postCasemanagementCaseTerminateJobs": GenesysCloudFullApiOperationInput<"postCasemanagementCaseTerminateJobs">;
  "putCasemanagementCaseplanDataschema": GenesysCloudFullApiOperationInput<"putCasemanagementCaseplanDataschema">;
  "putCasemanagementCaseplanIntakesettings": GenesysCloudFullApiOperationInput<"putCasemanagementCaseplanIntakesettings">;
}

export interface GenesysCloudFullApiCaseManagementGeneratedClient {
  DeleteCasemanagementCase(...args: GenesysCloudFullApiOperationArgs<"deleteCasemanagementCase">): Promise<GenesysCloudFullApiOperationResponseMap["deleteCasemanagementCase"]>;
  DeleteCasemanagementCaseplan(...args: GenesysCloudFullApiOperationArgs<"deleteCasemanagementCaseplan">): Promise<GenesysCloudFullApiOperationResponseMap["deleteCasemanagementCaseplan"]>;
  DeleteCasemanagementCaseplanDataschema(...args: GenesysCloudFullApiOperationArgs<"deleteCasemanagementCaseplanDataschema">): Promise<GenesysCloudFullApiOperationResponseMap["deleteCasemanagementCaseplanDataschema"]>;
  GetCasemanagementCase(...args: GenesysCloudFullApiOperationArgs<"getCasemanagementCase">): Promise<GenesysCloudFullApiOperationResponseMap["getCasemanagementCase"]>;
  GetCasemanagementCaseAssociation(...args: GenesysCloudFullApiOperationArgs<"getCasemanagementCaseAssociation">): Promise<GenesysCloudFullApiOperationResponseMap["getCasemanagementCaseAssociation"]>;
  GetCasemanagementCaseAssociations(...args: GenesysCloudFullApiOperationArgs<"getCasemanagementCaseAssociations">): Promise<GenesysCloudFullApiOperationResponseMap["getCasemanagementCaseAssociations"]>;
  GetCasemanagementCaseplan(...args: GenesysCloudFullApiOperationArgs<"getCasemanagementCaseplan">): Promise<GenesysCloudFullApiOperationResponseMap["getCasemanagementCaseplan"]>;
  GetCasemanagementCaseplans(...args: GenesysCloudFullApiOperationArgs<"getCasemanagementCaseplans">): Promise<GenesysCloudFullApiOperationResponseMap["getCasemanagementCaseplans"]>;
  GetCasemanagementCaseplanVersion(...args: GenesysCloudFullApiOperationArgs<"getCasemanagementCaseplanVersion">): Promise<GenesysCloudFullApiOperationResponseMap["getCasemanagementCaseplanVersion"]>;
  GetCasemanagementCaseplanVersionDataschemas(...args: GenesysCloudFullApiOperationArgs<"getCasemanagementCaseplanVersionDataschemas">): Promise<GenesysCloudFullApiOperationResponseMap["getCasemanagementCaseplanVersionDataschemas"]>;
  GetCasemanagementCaseplanVersionIntakesettings(...args: GenesysCloudFullApiOperationArgs<"getCasemanagementCaseplanVersionIntakesettings">): Promise<GenesysCloudFullApiOperationResponseMap["getCasemanagementCaseplanVersionIntakesettings"]>;
  GetCasemanagementCaseplanVersionStageplan(...args: GenesysCloudFullApiOperationArgs<"getCasemanagementCaseplanVersionStageplan">): Promise<GenesysCloudFullApiOperationResponseMap["getCasemanagementCaseplanVersionStageplan"]>;
  GetCasemanagementCaseplanVersionStageplans(...args: GenesysCloudFullApiOperationArgs<"getCasemanagementCaseplanVersionStageplans">): Promise<GenesysCloudFullApiOperationResponseMap["getCasemanagementCaseplanVersionStageplans"]>;
  GetCasemanagementCaseplanVersionStageplanStepplan(...args: GenesysCloudFullApiOperationArgs<"getCasemanagementCaseplanVersionStageplanStepplan">): Promise<GenesysCloudFullApiOperationResponseMap["getCasemanagementCaseplanVersionStageplanStepplan"]>;
  GetCasemanagementCaseplanVersionStageplanStepplans(...args: GenesysCloudFullApiOperationArgs<"getCasemanagementCaseplanVersionStageplanStepplans">): Promise<GenesysCloudFullApiOperationResponseMap["getCasemanagementCaseplanVersionStageplanStepplans"]>;
  GetCasemanagementCasesExternalcontact(...args: GenesysCloudFullApiOperationArgs<"getCasemanagementCasesExternalcontact">): Promise<GenesysCloudFullApiOperationResponseMap["getCasemanagementCasesExternalcontact"]>;
  GetCasemanagementCasesReference(...args: GenesysCloudFullApiOperationArgs<"getCasemanagementCasesReference">): Promise<GenesysCloudFullApiOperationResponseMap["getCasemanagementCasesReference"]>;
  GetCasemanagementCaseStage(...args: GenesysCloudFullApiOperationArgs<"getCasemanagementCaseStage">): Promise<GenesysCloudFullApiOperationResponseMap["getCasemanagementCaseStage"]>;
  GetCasemanagementCaseStages(...args: GenesysCloudFullApiOperationArgs<"getCasemanagementCaseStages">): Promise<GenesysCloudFullApiOperationResponseMap["getCasemanagementCaseStages"]>;
  GetCasemanagementCaseStageStep(...args: GenesysCloudFullApiOperationArgs<"getCasemanagementCaseStageStep">): Promise<GenesysCloudFullApiOperationResponseMap["getCasemanagementCaseStageStep"]>;
  GetCasemanagementCaseStageSteps(...args: GenesysCloudFullApiOperationArgs<"getCasemanagementCaseStageSteps">): Promise<GenesysCloudFullApiOperationResponseMap["getCasemanagementCaseStageSteps"]>;
  GetCasemanagementCaseTerminateJob(...args: GenesysCloudFullApiOperationArgs<"getCasemanagementCaseTerminateJob">): Promise<GenesysCloudFullApiOperationResponseMap["getCasemanagementCaseTerminateJob"]>;
  PatchCasemanagementCaseDatedue(...args: GenesysCloudFullApiOperationArgs<"patchCasemanagementCaseDatedue">): Promise<GenesysCloudFullApiOperationResponseMap["patchCasemanagementCaseDatedue"]>;
  PatchCasemanagementCaseplan(...args: GenesysCloudFullApiOperationArgs<"patchCasemanagementCaseplan">): Promise<GenesysCloudFullApiOperationResponseMap["patchCasemanagementCaseplan"]>;
  PatchCasemanagementCaseplanStageplan(...args: GenesysCloudFullApiOperationArgs<"patchCasemanagementCaseplanStageplan">): Promise<GenesysCloudFullApiOperationResponseMap["patchCasemanagementCaseplanStageplan"]>;
  PatchCasemanagementCaseplanStageplanStepplan(...args: GenesysCloudFullApiOperationArgs<"patchCasemanagementCaseplanStageplanStepplan">): Promise<GenesysCloudFullApiOperationResponseMap["patchCasemanagementCaseplanStageplanStepplan"]>;
  PatchCasemanagementCasePriority(...args: GenesysCloudFullApiOperationArgs<"patchCasemanagementCasePriority">): Promise<GenesysCloudFullApiOperationResponseMap["patchCasemanagementCasePriority"]>;
  PatchCasemanagementCaseSummary(...args: GenesysCloudFullApiOperationArgs<"patchCasemanagementCaseSummary">): Promise<GenesysCloudFullApiOperationResponseMap["patchCasemanagementCaseSummary"]>;
  PostCasemanagementCaseAssociations(...args: GenesysCloudFullApiOperationArgs<"postCasemanagementCaseAssociations">): Promise<GenesysCloudFullApiOperationResponseMap["postCasemanagementCaseAssociations"]>;
  PostCasemanagementCaseplanDataschemas(...args: GenesysCloudFullApiOperationArgs<"postCasemanagementCaseplanDataschemas">): Promise<GenesysCloudFullApiOperationResponseMap["postCasemanagementCaseplanDataschemas"]>;
  PostCasemanagementCaseplanPublish(...args: GenesysCloudFullApiOperationArgs<"postCasemanagementCaseplanPublish">): Promise<GenesysCloudFullApiOperationResponseMap["postCasemanagementCaseplanPublish"]>;
  PostCasemanagementCaseplans(...args: GenesysCloudFullApiOperationArgs<"postCasemanagementCaseplans">): Promise<GenesysCloudFullApiOperationResponseMap["postCasemanagementCaseplans"]>;
  PostCasemanagementCaseplansQuery(...args: GenesysCloudFullApiOperationArgs<"postCasemanagementCaseplansQuery">): Promise<GenesysCloudFullApiOperationResponseMap["postCasemanagementCaseplansQuery"]>;
  PostCasemanagementCaseplanVersions(...args: GenesysCloudFullApiOperationArgs<"postCasemanagementCaseplanVersions">): Promise<GenesysCloudFullApiOperationResponseMap["postCasemanagementCaseplanVersions"]>;
  PostCasemanagementCases(...args: GenesysCloudFullApiOperationArgs<"postCasemanagementCases">): Promise<GenesysCloudFullApiOperationResponseMap["postCasemanagementCases"]>;
  PostCasemanagementCasesAssociationsQuery(...args: GenesysCloudFullApiOperationArgs<"postCasemanagementCasesAssociationsQuery">): Promise<GenesysCloudFullApiOperationResponseMap["postCasemanagementCasesAssociationsQuery"]>;
  PostCasemanagementCaseTerminateJobs(...args: GenesysCloudFullApiOperationArgs<"postCasemanagementCaseTerminateJobs">): Promise<GenesysCloudFullApiOperationResponseMap["postCasemanagementCaseTerminateJobs"]>;
  PutCasemanagementCaseplanDataschema(...args: GenesysCloudFullApiOperationArgs<"putCasemanagementCaseplanDataschema">): Promise<GenesysCloudFullApiOperationResponseMap["putCasemanagementCaseplanDataschema"]>;
  PutCasemanagementCaseplanIntakesettings(...args: GenesysCloudFullApiOperationArgs<"putCasemanagementCaseplanIntakesettings">): Promise<GenesysCloudFullApiOperationResponseMap["putCasemanagementCaseplanIntakesettings"]>;
}

export const GenesysCloudFullApiCaseManagementGeneratedFunctionNames = [
  "DeleteCasemanagementCase",
  "DeleteCasemanagementCaseplan",
  "DeleteCasemanagementCaseplanDataschema",
  "GetCasemanagementCase",
  "GetCasemanagementCaseAssociation",
  "GetCasemanagementCaseAssociations",
  "GetCasemanagementCaseplan",
  "GetCasemanagementCaseplans",
  "GetCasemanagementCaseplanVersion",
  "GetCasemanagementCaseplanVersionDataschemas",
  "GetCasemanagementCaseplanVersionIntakesettings",
  "GetCasemanagementCaseplanVersionStageplan",
  "GetCasemanagementCaseplanVersionStageplans",
  "GetCasemanagementCaseplanVersionStageplanStepplan",
  "GetCasemanagementCaseplanVersionStageplanStepplans",
  "GetCasemanagementCasesExternalcontact",
  "GetCasemanagementCasesReference",
  "GetCasemanagementCaseStage",
  "GetCasemanagementCaseStages",
  "GetCasemanagementCaseStageStep",
  "GetCasemanagementCaseStageSteps",
  "GetCasemanagementCaseTerminateJob",
  "PatchCasemanagementCaseDatedue",
  "PatchCasemanagementCaseplan",
  "PatchCasemanagementCaseplanStageplan",
  "PatchCasemanagementCaseplanStageplanStepplan",
  "PatchCasemanagementCasePriority",
  "PatchCasemanagementCaseSummary",
  "PostCasemanagementCaseAssociations",
  "PostCasemanagementCaseplanDataschemas",
  "PostCasemanagementCaseplanPublish",
  "PostCasemanagementCaseplans",
  "PostCasemanagementCaseplansQuery",
  "PostCasemanagementCaseplanVersions",
  "PostCasemanagementCases",
  "PostCasemanagementCasesAssociationsQuery",
  "PostCasemanagementCaseTerminateJobs",
  "PutCasemanagementCaseplanDataschema",
  "PutCasemanagementCaseplanIntakesettings"
] as const satisfies readonly (keyof GenesysCloudFullApiCaseManagementGeneratedClient)[];

export function createGenesysCloudFullApiCaseManagementGeneratedClient(
  callOperation: GenesysCloudGeneratedOperationCaller,
): GenesysCloudFullApiCaseManagementGeneratedClient {
  return {
    DeleteCasemanagementCase: (...args) => callOperation("deleteCasemanagementCase", ...(args as GenesysCloudFullApiOperationArgs<"deleteCasemanagementCase">)),
    DeleteCasemanagementCaseplan: (...args) => callOperation("deleteCasemanagementCaseplan", ...(args as GenesysCloudFullApiOperationArgs<"deleteCasemanagementCaseplan">)),
    DeleteCasemanagementCaseplanDataschema: (...args) => callOperation("deleteCasemanagementCaseplanDataschema", ...(args as GenesysCloudFullApiOperationArgs<"deleteCasemanagementCaseplanDataschema">)),
    GetCasemanagementCase: (...args) => callOperation("getCasemanagementCase", ...(args as GenesysCloudFullApiOperationArgs<"getCasemanagementCase">)),
    GetCasemanagementCaseAssociation: (...args) => callOperation("getCasemanagementCaseAssociation", ...(args as GenesysCloudFullApiOperationArgs<"getCasemanagementCaseAssociation">)),
    GetCasemanagementCaseAssociations: (...args) => callOperation("getCasemanagementCaseAssociations", ...(args as GenesysCloudFullApiOperationArgs<"getCasemanagementCaseAssociations">)),
    GetCasemanagementCaseplan: (...args) => callOperation("getCasemanagementCaseplan", ...(args as GenesysCloudFullApiOperationArgs<"getCasemanagementCaseplan">)),
    GetCasemanagementCaseplans: (...args) => callOperation("getCasemanagementCaseplans", ...(args as GenesysCloudFullApiOperationArgs<"getCasemanagementCaseplans">)),
    GetCasemanagementCaseplanVersion: (...args) => callOperation("getCasemanagementCaseplanVersion", ...(args as GenesysCloudFullApiOperationArgs<"getCasemanagementCaseplanVersion">)),
    GetCasemanagementCaseplanVersionDataschemas: (...args) => callOperation("getCasemanagementCaseplanVersionDataschemas", ...(args as GenesysCloudFullApiOperationArgs<"getCasemanagementCaseplanVersionDataschemas">)),
    GetCasemanagementCaseplanVersionIntakesettings: (...args) => callOperation("getCasemanagementCaseplanVersionIntakesettings", ...(args as GenesysCloudFullApiOperationArgs<"getCasemanagementCaseplanVersionIntakesettings">)),
    GetCasemanagementCaseplanVersionStageplan: (...args) => callOperation("getCasemanagementCaseplanVersionStageplan", ...(args as GenesysCloudFullApiOperationArgs<"getCasemanagementCaseplanVersionStageplan">)),
    GetCasemanagementCaseplanVersionStageplans: (...args) => callOperation("getCasemanagementCaseplanVersionStageplans", ...(args as GenesysCloudFullApiOperationArgs<"getCasemanagementCaseplanVersionStageplans">)),
    GetCasemanagementCaseplanVersionStageplanStepplan: (...args) => callOperation("getCasemanagementCaseplanVersionStageplanStepplan", ...(args as GenesysCloudFullApiOperationArgs<"getCasemanagementCaseplanVersionStageplanStepplan">)),
    GetCasemanagementCaseplanVersionStageplanStepplans: (...args) => callOperation("getCasemanagementCaseplanVersionStageplanStepplans", ...(args as GenesysCloudFullApiOperationArgs<"getCasemanagementCaseplanVersionStageplanStepplans">)),
    GetCasemanagementCasesExternalcontact: (...args) => callOperation("getCasemanagementCasesExternalcontact", ...(args as GenesysCloudFullApiOperationArgs<"getCasemanagementCasesExternalcontact">)),
    GetCasemanagementCasesReference: (...args) => callOperation("getCasemanagementCasesReference", ...(args as GenesysCloudFullApiOperationArgs<"getCasemanagementCasesReference">)),
    GetCasemanagementCaseStage: (...args) => callOperation("getCasemanagementCaseStage", ...(args as GenesysCloudFullApiOperationArgs<"getCasemanagementCaseStage">)),
    GetCasemanagementCaseStages: (...args) => callOperation("getCasemanagementCaseStages", ...(args as GenesysCloudFullApiOperationArgs<"getCasemanagementCaseStages">)),
    GetCasemanagementCaseStageStep: (...args) => callOperation("getCasemanagementCaseStageStep", ...(args as GenesysCloudFullApiOperationArgs<"getCasemanagementCaseStageStep">)),
    GetCasemanagementCaseStageSteps: (...args) => callOperation("getCasemanagementCaseStageSteps", ...(args as GenesysCloudFullApiOperationArgs<"getCasemanagementCaseStageSteps">)),
    GetCasemanagementCaseTerminateJob: (...args) => callOperation("getCasemanagementCaseTerminateJob", ...(args as GenesysCloudFullApiOperationArgs<"getCasemanagementCaseTerminateJob">)),
    PatchCasemanagementCaseDatedue: (...args) => callOperation("patchCasemanagementCaseDatedue", ...(args as GenesysCloudFullApiOperationArgs<"patchCasemanagementCaseDatedue">)),
    PatchCasemanagementCaseplan: (...args) => callOperation("patchCasemanagementCaseplan", ...(args as GenesysCloudFullApiOperationArgs<"patchCasemanagementCaseplan">)),
    PatchCasemanagementCaseplanStageplan: (...args) => callOperation("patchCasemanagementCaseplanStageplan", ...(args as GenesysCloudFullApiOperationArgs<"patchCasemanagementCaseplanStageplan">)),
    PatchCasemanagementCaseplanStageplanStepplan: (...args) => callOperation("patchCasemanagementCaseplanStageplanStepplan", ...(args as GenesysCloudFullApiOperationArgs<"patchCasemanagementCaseplanStageplanStepplan">)),
    PatchCasemanagementCasePriority: (...args) => callOperation("patchCasemanagementCasePriority", ...(args as GenesysCloudFullApiOperationArgs<"patchCasemanagementCasePriority">)),
    PatchCasemanagementCaseSummary: (...args) => callOperation("patchCasemanagementCaseSummary", ...(args as GenesysCloudFullApiOperationArgs<"patchCasemanagementCaseSummary">)),
    PostCasemanagementCaseAssociations: (...args) => callOperation("postCasemanagementCaseAssociations", ...(args as GenesysCloudFullApiOperationArgs<"postCasemanagementCaseAssociations">)),
    PostCasemanagementCaseplanDataschemas: (...args) => callOperation("postCasemanagementCaseplanDataschemas", ...(args as GenesysCloudFullApiOperationArgs<"postCasemanagementCaseplanDataschemas">)),
    PostCasemanagementCaseplanPublish: (...args) => callOperation("postCasemanagementCaseplanPublish", ...(args as GenesysCloudFullApiOperationArgs<"postCasemanagementCaseplanPublish">)),
    PostCasemanagementCaseplans: (...args) => callOperation("postCasemanagementCaseplans", ...(args as GenesysCloudFullApiOperationArgs<"postCasemanagementCaseplans">)),
    PostCasemanagementCaseplansQuery: (...args) => callOperation("postCasemanagementCaseplansQuery", ...(args as GenesysCloudFullApiOperationArgs<"postCasemanagementCaseplansQuery">)),
    PostCasemanagementCaseplanVersions: (...args) => callOperation("postCasemanagementCaseplanVersions", ...(args as GenesysCloudFullApiOperationArgs<"postCasemanagementCaseplanVersions">)),
    PostCasemanagementCases: (...args) => callOperation("postCasemanagementCases", ...(args as GenesysCloudFullApiOperationArgs<"postCasemanagementCases">)),
    PostCasemanagementCasesAssociationsQuery: (...args) => callOperation("postCasemanagementCasesAssociationsQuery", ...(args as GenesysCloudFullApiOperationArgs<"postCasemanagementCasesAssociationsQuery">)),
    PostCasemanagementCaseTerminateJobs: (...args) => callOperation("postCasemanagementCaseTerminateJobs", ...(args as GenesysCloudFullApiOperationArgs<"postCasemanagementCaseTerminateJobs">)),
    PutCasemanagementCaseplanDataschema: (...args) => callOperation("putCasemanagementCaseplanDataschema", ...(args as GenesysCloudFullApiOperationArgs<"putCasemanagementCaseplanDataschema">)),
    PutCasemanagementCaseplanIntakesettings: (...args) => callOperation("putCasemanagementCaseplanIntakesettings", ...(args as GenesysCloudFullApiOperationArgs<"putCasemanagementCaseplanIntakesettings">)),
  };
}
