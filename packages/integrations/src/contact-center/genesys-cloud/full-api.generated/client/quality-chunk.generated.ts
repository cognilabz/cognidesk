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
export const GenesysCloudFullApiQualityOperationKeys = [
  "deleteQualityCalibration",
  "deleteQualityConversationEvaluation",
  "deleteQualityForm",
  "deleteQualityFormsEvaluation",
  "deleteQualityFormsSurvey",
  "deleteQualityProgramAgentscoringrule",
  "getQualityAgentsActivity",
  "getQualityCalibration",
  "getQualityCalibrations",
  "getQualityConversationEvaluation",
  "getQualityConversationsAuditsQueryTransactionId",
  "getQualityConversationsAuditsQueryTransactionIdResults",
  "getQualityConversationSurveys",
  "getQualityEvaluationsQuery",
  "getQualityEvaluatorsActivity",
  "getQualityForm",
  "getQualityForms",
  "getQualityFormsEvaluation",
  "getQualityFormsEvaluations",
  "getQualityFormsEvaluationsBulk",
  "getQualityFormsEvaluationsBulkContexts",
  "getQualityFormsEvaluationVersions",
  "getQualityFormsSurvey",
  "getQualityFormsSurveys",
  "getQualityFormsSurveysBulk",
  "getQualityFormsSurveysBulkContexts",
  "getQualityFormsSurveyVersions",
  "getQualityFormVersions",
  "getQualityProgramAgentscoringrule",
  "getQualityProgramAgentscoringrules",
  "getQualityPublishedform",
  "getQualityPublishedforms",
  "getQualityPublishedformsEvaluation",
  "getQualityPublishedformsEvaluations",
  "getQualityPublishedformsSurvey",
  "getQualityPublishedformsSurveys",
  "getQualitySurvey",
  "getQualitySurveysScorable",
  "patchQualityFormsSurvey",
  "postQualityCalibrations",
  "postQualityConversationEvaluations",
  "postQualityConversationsAuditsQuery",
  "postQualityEvaluationsAggregatesQueryMe",
  "postQualityEvaluationsScoring",
  "postQualityEvaluationsSearch",
  "postQualityForms",
  "postQualityFormsEvaluations",
  "postQualityFormsSurveys",
  "postQualityProgramAgentscoringrules",
  "postQualityPublishedforms",
  "postQualityPublishedformsEvaluations",
  "postQualityPublishedformsSurveys",
  "postQualitySurveys",
  "postQualitySurveysScoring",
  "putQualityCalibration",
  "putQualityConversationEvaluation",
  "putQualityForm",
  "putQualityFormsEvaluation",
  "putQualityFormsEvaluationAiscoringSettings",
  "putQualityFormsSurvey",
  "putQualityProgramAgentscoringrule",
  "putQualitySurveysScorable"
] as const;
export type GenesysCloudFullApiQualityOperationKey = typeof GenesysCloudFullApiQualityOperationKeys[number];
// End hardened literal operation keys.

export interface GenesysCloudFullApiQualityOperationPathParamMap {
  "deleteQualityCalibration": { "calibrationId": GenesysCloudFullApiPathParamValue };
  "deleteQualityConversationEvaluation": { "conversationId": GenesysCloudFullApiPathParamValue; "evaluationId": GenesysCloudFullApiPathParamValue };
  "deleteQualityForm": { "formId": GenesysCloudFullApiPathParamValue };
  "deleteQualityFormsEvaluation": { "formId": GenesysCloudFullApiPathParamValue };
  "deleteQualityFormsSurvey": { "formId": GenesysCloudFullApiPathParamValue };
  "deleteQualityProgramAgentscoringrule": { "programId": GenesysCloudFullApiPathParamValue; "ruleId": GenesysCloudFullApiPathParamValue };
  "getQualityAgentsActivity": {};
  "getQualityCalibration": { "calibrationId": GenesysCloudFullApiPathParamValue };
  "getQualityCalibrations": {};
  "getQualityConversationEvaluation": { "conversationId": GenesysCloudFullApiPathParamValue; "evaluationId": GenesysCloudFullApiPathParamValue };
  "getQualityConversationsAuditsQueryTransactionId": { "transactionId": GenesysCloudFullApiPathParamValue };
  "getQualityConversationsAuditsQueryTransactionIdResults": { "transactionId": GenesysCloudFullApiPathParamValue };
  "getQualityConversationSurveys": { "conversationId": GenesysCloudFullApiPathParamValue };
  "getQualityEvaluationsQuery": {};
  "getQualityEvaluatorsActivity": {};
  "getQualityForm": { "formId": GenesysCloudFullApiPathParamValue };
  "getQualityForms": {};
  "getQualityFormsEvaluation": { "formId": GenesysCloudFullApiPathParamValue };
  "getQualityFormsEvaluations": {};
  "getQualityFormsEvaluationsBulk": {};
  "getQualityFormsEvaluationsBulkContexts": {};
  "getQualityFormsEvaluationVersions": { "formId": GenesysCloudFullApiPathParamValue };
  "getQualityFormsSurvey": { "formId": GenesysCloudFullApiPathParamValue };
  "getQualityFormsSurveys": {};
  "getQualityFormsSurveysBulk": {};
  "getQualityFormsSurveysBulkContexts": {};
  "getQualityFormsSurveyVersions": { "formId": GenesysCloudFullApiPathParamValue };
  "getQualityFormVersions": { "formId": GenesysCloudFullApiPathParamValue };
  "getQualityProgramAgentscoringrule": { "programId": GenesysCloudFullApiPathParamValue; "ruleId": GenesysCloudFullApiPathParamValue };
  "getQualityProgramAgentscoringrules": { "programId": GenesysCloudFullApiPathParamValue };
  "getQualityPublishedform": { "formId": GenesysCloudFullApiPathParamValue };
  "getQualityPublishedforms": {};
  "getQualityPublishedformsEvaluation": { "formId": GenesysCloudFullApiPathParamValue };
  "getQualityPublishedformsEvaluations": {};
  "getQualityPublishedformsSurvey": { "formId": GenesysCloudFullApiPathParamValue };
  "getQualityPublishedformsSurveys": {};
  "getQualitySurvey": { "surveyId": GenesysCloudFullApiPathParamValue };
  "getQualitySurveysScorable": {};
  "patchQualityFormsSurvey": { "formId": GenesysCloudFullApiPathParamValue };
  "postQualityCalibrations": {};
  "postQualityConversationEvaluations": { "conversationId": GenesysCloudFullApiPathParamValue };
  "postQualityConversationsAuditsQuery": {};
  "postQualityEvaluationsAggregatesQueryMe": {};
  "postQualityEvaluationsScoring": {};
  "postQualityEvaluationsSearch": {};
  "postQualityForms": {};
  "postQualityFormsEvaluations": {};
  "postQualityFormsSurveys": {};
  "postQualityProgramAgentscoringrules": { "programId": GenesysCloudFullApiPathParamValue };
  "postQualityPublishedforms": {};
  "postQualityPublishedformsEvaluations": {};
  "postQualityPublishedformsSurveys": {};
  "postQualitySurveys": {};
  "postQualitySurveysScoring": {};
  "putQualityCalibration": { "calibrationId": GenesysCloudFullApiPathParamValue };
  "putQualityConversationEvaluation": { "conversationId": GenesysCloudFullApiPathParamValue; "evaluationId": GenesysCloudFullApiPathParamValue };
  "putQualityForm": { "formId": GenesysCloudFullApiPathParamValue };
  "putQualityFormsEvaluation": { "formId": GenesysCloudFullApiPathParamValue };
  "putQualityFormsEvaluationAiscoringSettings": { "formId": GenesysCloudFullApiPathParamValue };
  "putQualityFormsSurvey": { "formId": GenesysCloudFullApiPathParamValue };
  "putQualityProgramAgentscoringrule": { "programId": GenesysCloudFullApiPathParamValue; "ruleId": GenesysCloudFullApiPathParamValue };
  "putQualitySurveysScorable": {};
}

export interface GenesysCloudFullApiQualityOperationRequestMap {
  "deleteQualityCalibration": GenesysCloudFullApiOperationInput<"deleteQualityCalibration">;
  "deleteQualityConversationEvaluation": GenesysCloudFullApiOperationInput<"deleteQualityConversationEvaluation">;
  "deleteQualityForm": GenesysCloudFullApiOperationInput<"deleteQualityForm">;
  "deleteQualityFormsEvaluation": GenesysCloudFullApiOperationInput<"deleteQualityFormsEvaluation">;
  "deleteQualityFormsSurvey": GenesysCloudFullApiOperationInput<"deleteQualityFormsSurvey">;
  "deleteQualityProgramAgentscoringrule": GenesysCloudFullApiOperationInput<"deleteQualityProgramAgentscoringrule">;
  "getQualityAgentsActivity": GenesysCloudFullApiOperationInput<"getQualityAgentsActivity">;
  "getQualityCalibration": GenesysCloudFullApiOperationInput<"getQualityCalibration">;
  "getQualityCalibrations": GenesysCloudFullApiOperationInput<"getQualityCalibrations">;
  "getQualityConversationEvaluation": GenesysCloudFullApiOperationInput<"getQualityConversationEvaluation">;
  "getQualityConversationsAuditsQueryTransactionId": GenesysCloudFullApiOperationInput<"getQualityConversationsAuditsQueryTransactionId">;
  "getQualityConversationsAuditsQueryTransactionIdResults": GenesysCloudFullApiOperationInput<"getQualityConversationsAuditsQueryTransactionIdResults">;
  "getQualityConversationSurveys": GenesysCloudFullApiOperationInput<"getQualityConversationSurveys">;
  "getQualityEvaluationsQuery": GenesysCloudFullApiOperationInput<"getQualityEvaluationsQuery">;
  "getQualityEvaluatorsActivity": GenesysCloudFullApiOperationInput<"getQualityEvaluatorsActivity">;
  "getQualityForm": GenesysCloudFullApiOperationInput<"getQualityForm">;
  "getQualityForms": GenesysCloudFullApiOperationInput<"getQualityForms">;
  "getQualityFormsEvaluation": GenesysCloudFullApiOperationInput<"getQualityFormsEvaluation">;
  "getQualityFormsEvaluations": GenesysCloudFullApiOperationInput<"getQualityFormsEvaluations">;
  "getQualityFormsEvaluationsBulk": GenesysCloudFullApiOperationInput<"getQualityFormsEvaluationsBulk">;
  "getQualityFormsEvaluationsBulkContexts": GenesysCloudFullApiOperationInput<"getQualityFormsEvaluationsBulkContexts">;
  "getQualityFormsEvaluationVersions": GenesysCloudFullApiOperationInput<"getQualityFormsEvaluationVersions">;
  "getQualityFormsSurvey": GenesysCloudFullApiOperationInput<"getQualityFormsSurvey">;
  "getQualityFormsSurveys": GenesysCloudFullApiOperationInput<"getQualityFormsSurveys">;
  "getQualityFormsSurveysBulk": GenesysCloudFullApiOperationInput<"getQualityFormsSurveysBulk">;
  "getQualityFormsSurveysBulkContexts": GenesysCloudFullApiOperationInput<"getQualityFormsSurveysBulkContexts">;
  "getQualityFormsSurveyVersions": GenesysCloudFullApiOperationInput<"getQualityFormsSurveyVersions">;
  "getQualityFormVersions": GenesysCloudFullApiOperationInput<"getQualityFormVersions">;
  "getQualityProgramAgentscoringrule": GenesysCloudFullApiOperationInput<"getQualityProgramAgentscoringrule">;
  "getQualityProgramAgentscoringrules": GenesysCloudFullApiOperationInput<"getQualityProgramAgentscoringrules">;
  "getQualityPublishedform": GenesysCloudFullApiOperationInput<"getQualityPublishedform">;
  "getQualityPublishedforms": GenesysCloudFullApiOperationInput<"getQualityPublishedforms">;
  "getQualityPublishedformsEvaluation": GenesysCloudFullApiOperationInput<"getQualityPublishedformsEvaluation">;
  "getQualityPublishedformsEvaluations": GenesysCloudFullApiOperationInput<"getQualityPublishedformsEvaluations">;
  "getQualityPublishedformsSurvey": GenesysCloudFullApiOperationInput<"getQualityPublishedformsSurvey">;
  "getQualityPublishedformsSurveys": GenesysCloudFullApiOperationInput<"getQualityPublishedformsSurveys">;
  "getQualitySurvey": GenesysCloudFullApiOperationInput<"getQualitySurvey">;
  "getQualitySurveysScorable": GenesysCloudFullApiOperationInput<"getQualitySurveysScorable">;
  "patchQualityFormsSurvey": GenesysCloudFullApiOperationInput<"patchQualityFormsSurvey">;
  "postQualityCalibrations": GenesysCloudFullApiOperationInput<"postQualityCalibrations">;
  "postQualityConversationEvaluations": GenesysCloudFullApiOperationInput<"postQualityConversationEvaluations">;
  "postQualityConversationsAuditsQuery": GenesysCloudFullApiOperationInput<"postQualityConversationsAuditsQuery">;
  "postQualityEvaluationsAggregatesQueryMe": GenesysCloudFullApiOperationInput<"postQualityEvaluationsAggregatesQueryMe">;
  "postQualityEvaluationsScoring": GenesysCloudFullApiOperationInput<"postQualityEvaluationsScoring">;
  "postQualityEvaluationsSearch": GenesysCloudFullApiOperationInput<"postQualityEvaluationsSearch">;
  "postQualityForms": GenesysCloudFullApiOperationInput<"postQualityForms">;
  "postQualityFormsEvaluations": GenesysCloudFullApiOperationInput<"postQualityFormsEvaluations">;
  "postQualityFormsSurveys": GenesysCloudFullApiOperationInput<"postQualityFormsSurveys">;
  "postQualityProgramAgentscoringrules": GenesysCloudFullApiOperationInput<"postQualityProgramAgentscoringrules">;
  "postQualityPublishedforms": GenesysCloudFullApiOperationInput<"postQualityPublishedforms">;
  "postQualityPublishedformsEvaluations": GenesysCloudFullApiOperationInput<"postQualityPublishedformsEvaluations">;
  "postQualityPublishedformsSurveys": GenesysCloudFullApiOperationInput<"postQualityPublishedformsSurveys">;
  "postQualitySurveys": GenesysCloudFullApiOperationInput<"postQualitySurveys">;
  "postQualitySurveysScoring": GenesysCloudFullApiOperationInput<"postQualitySurveysScoring">;
  "putQualityCalibration": GenesysCloudFullApiOperationInput<"putQualityCalibration">;
  "putQualityConversationEvaluation": GenesysCloudFullApiOperationInput<"putQualityConversationEvaluation">;
  "putQualityForm": GenesysCloudFullApiOperationInput<"putQualityForm">;
  "putQualityFormsEvaluation": GenesysCloudFullApiOperationInput<"putQualityFormsEvaluation">;
  "putQualityFormsEvaluationAiscoringSettings": GenesysCloudFullApiOperationInput<"putQualityFormsEvaluationAiscoringSettings">;
  "putQualityFormsSurvey": GenesysCloudFullApiOperationInput<"putQualityFormsSurvey">;
  "putQualityProgramAgentscoringrule": GenesysCloudFullApiOperationInput<"putQualityProgramAgentscoringrule">;
  "putQualitySurveysScorable": GenesysCloudFullApiOperationInput<"putQualitySurveysScorable">;
}

export interface GenesysCloudFullApiQualityGeneratedClient {
  DeleteQualityCalibration(...args: GenesysCloudFullApiOperationArgs<"deleteQualityCalibration">): Promise<GenesysCloudFullApiOperationResponseMap["deleteQualityCalibration"]>;
  DeleteQualityConversationEvaluation(...args: GenesysCloudFullApiOperationArgs<"deleteQualityConversationEvaluation">): Promise<GenesysCloudFullApiOperationResponseMap["deleteQualityConversationEvaluation"]>;
  DeleteQualityForm(...args: GenesysCloudFullApiOperationArgs<"deleteQualityForm">): Promise<GenesysCloudFullApiOperationResponseMap["deleteQualityForm"]>;
  DeleteQualityFormsEvaluation(...args: GenesysCloudFullApiOperationArgs<"deleteQualityFormsEvaluation">): Promise<GenesysCloudFullApiOperationResponseMap["deleteQualityFormsEvaluation"]>;
  DeleteQualityFormsSurvey(...args: GenesysCloudFullApiOperationArgs<"deleteQualityFormsSurvey">): Promise<GenesysCloudFullApiOperationResponseMap["deleteQualityFormsSurvey"]>;
  DeleteQualityProgramAgentscoringrule(...args: GenesysCloudFullApiOperationArgs<"deleteQualityProgramAgentscoringrule">): Promise<GenesysCloudFullApiOperationResponseMap["deleteQualityProgramAgentscoringrule"]>;
  GetQualityAgentsActivity(...args: GenesysCloudFullApiOperationArgs<"getQualityAgentsActivity">): Promise<GenesysCloudFullApiOperationResponseMap["getQualityAgentsActivity"]>;
  GetQualityCalibration(...args: GenesysCloudFullApiOperationArgs<"getQualityCalibration">): Promise<GenesysCloudFullApiOperationResponseMap["getQualityCalibration"]>;
  GetQualityCalibrations(...args: GenesysCloudFullApiOperationArgs<"getQualityCalibrations">): Promise<GenesysCloudFullApiOperationResponseMap["getQualityCalibrations"]>;
  GetQualityConversationEvaluation(...args: GenesysCloudFullApiOperationArgs<"getQualityConversationEvaluation">): Promise<GenesysCloudFullApiOperationResponseMap["getQualityConversationEvaluation"]>;
  GetQualityConversationsAuditsQueryTransactionId(...args: GenesysCloudFullApiOperationArgs<"getQualityConversationsAuditsQueryTransactionId">): Promise<GenesysCloudFullApiOperationResponseMap["getQualityConversationsAuditsQueryTransactionId"]>;
  GetQualityConversationsAuditsQueryTransactionIdResults(...args: GenesysCloudFullApiOperationArgs<"getQualityConversationsAuditsQueryTransactionIdResults">): Promise<GenesysCloudFullApiOperationResponseMap["getQualityConversationsAuditsQueryTransactionIdResults"]>;
  GetQualityConversationSurveys(...args: GenesysCloudFullApiOperationArgs<"getQualityConversationSurveys">): Promise<GenesysCloudFullApiOperationResponseMap["getQualityConversationSurveys"]>;
  GetQualityEvaluationsQuery(...args: GenesysCloudFullApiOperationArgs<"getQualityEvaluationsQuery">): Promise<GenesysCloudFullApiOperationResponseMap["getQualityEvaluationsQuery"]>;
  GetQualityEvaluatorsActivity(...args: GenesysCloudFullApiOperationArgs<"getQualityEvaluatorsActivity">): Promise<GenesysCloudFullApiOperationResponseMap["getQualityEvaluatorsActivity"]>;
  GetQualityForm(...args: GenesysCloudFullApiOperationArgs<"getQualityForm">): Promise<GenesysCloudFullApiOperationResponseMap["getQualityForm"]>;
  GetQualityForms(...args: GenesysCloudFullApiOperationArgs<"getQualityForms">): Promise<GenesysCloudFullApiOperationResponseMap["getQualityForms"]>;
  GetQualityFormsEvaluation(...args: GenesysCloudFullApiOperationArgs<"getQualityFormsEvaluation">): Promise<GenesysCloudFullApiOperationResponseMap["getQualityFormsEvaluation"]>;
  GetQualityFormsEvaluations(...args: GenesysCloudFullApiOperationArgs<"getQualityFormsEvaluations">): Promise<GenesysCloudFullApiOperationResponseMap["getQualityFormsEvaluations"]>;
  GetQualityFormsEvaluationsBulk(...args: GenesysCloudFullApiOperationArgs<"getQualityFormsEvaluationsBulk">): Promise<GenesysCloudFullApiOperationResponseMap["getQualityFormsEvaluationsBulk"]>;
  GetQualityFormsEvaluationsBulkContexts(...args: GenesysCloudFullApiOperationArgs<"getQualityFormsEvaluationsBulkContexts">): Promise<GenesysCloudFullApiOperationResponseMap["getQualityFormsEvaluationsBulkContexts"]>;
  GetQualityFormsEvaluationVersions(...args: GenesysCloudFullApiOperationArgs<"getQualityFormsEvaluationVersions">): Promise<GenesysCloudFullApiOperationResponseMap["getQualityFormsEvaluationVersions"]>;
  GetQualityFormsSurvey(...args: GenesysCloudFullApiOperationArgs<"getQualityFormsSurvey">): Promise<GenesysCloudFullApiOperationResponseMap["getQualityFormsSurvey"]>;
  GetQualityFormsSurveys(...args: GenesysCloudFullApiOperationArgs<"getQualityFormsSurveys">): Promise<GenesysCloudFullApiOperationResponseMap["getQualityFormsSurveys"]>;
  GetQualityFormsSurveysBulk(...args: GenesysCloudFullApiOperationArgs<"getQualityFormsSurveysBulk">): Promise<GenesysCloudFullApiOperationResponseMap["getQualityFormsSurveysBulk"]>;
  GetQualityFormsSurveysBulkContexts(...args: GenesysCloudFullApiOperationArgs<"getQualityFormsSurveysBulkContexts">): Promise<GenesysCloudFullApiOperationResponseMap["getQualityFormsSurveysBulkContexts"]>;
  GetQualityFormsSurveyVersions(...args: GenesysCloudFullApiOperationArgs<"getQualityFormsSurveyVersions">): Promise<GenesysCloudFullApiOperationResponseMap["getQualityFormsSurveyVersions"]>;
  GetQualityFormVersions(...args: GenesysCloudFullApiOperationArgs<"getQualityFormVersions">): Promise<GenesysCloudFullApiOperationResponseMap["getQualityFormVersions"]>;
  GetQualityProgramAgentscoringrule(...args: GenesysCloudFullApiOperationArgs<"getQualityProgramAgentscoringrule">): Promise<GenesysCloudFullApiOperationResponseMap["getQualityProgramAgentscoringrule"]>;
  GetQualityProgramAgentscoringrules(...args: GenesysCloudFullApiOperationArgs<"getQualityProgramAgentscoringrules">): Promise<GenesysCloudFullApiOperationResponseMap["getQualityProgramAgentscoringrules"]>;
  GetQualityPublishedform(...args: GenesysCloudFullApiOperationArgs<"getQualityPublishedform">): Promise<GenesysCloudFullApiOperationResponseMap["getQualityPublishedform"]>;
  GetQualityPublishedforms(...args: GenesysCloudFullApiOperationArgs<"getQualityPublishedforms">): Promise<GenesysCloudFullApiOperationResponseMap["getQualityPublishedforms"]>;
  GetQualityPublishedformsEvaluation(...args: GenesysCloudFullApiOperationArgs<"getQualityPublishedformsEvaluation">): Promise<GenesysCloudFullApiOperationResponseMap["getQualityPublishedformsEvaluation"]>;
  GetQualityPublishedformsEvaluations(...args: GenesysCloudFullApiOperationArgs<"getQualityPublishedformsEvaluations">): Promise<GenesysCloudFullApiOperationResponseMap["getQualityPublishedformsEvaluations"]>;
  GetQualityPublishedformsSurvey(...args: GenesysCloudFullApiOperationArgs<"getQualityPublishedformsSurvey">): Promise<GenesysCloudFullApiOperationResponseMap["getQualityPublishedformsSurvey"]>;
  GetQualityPublishedformsSurveys(...args: GenesysCloudFullApiOperationArgs<"getQualityPublishedformsSurveys">): Promise<GenesysCloudFullApiOperationResponseMap["getQualityPublishedformsSurveys"]>;
  GetQualitySurvey(...args: GenesysCloudFullApiOperationArgs<"getQualitySurvey">): Promise<GenesysCloudFullApiOperationResponseMap["getQualitySurvey"]>;
  GetQualitySurveysScorable(...args: GenesysCloudFullApiOperationArgs<"getQualitySurveysScorable">): Promise<GenesysCloudFullApiOperationResponseMap["getQualitySurveysScorable"]>;
  PatchQualityFormsSurvey(...args: GenesysCloudFullApiOperationArgs<"patchQualityFormsSurvey">): Promise<GenesysCloudFullApiOperationResponseMap["patchQualityFormsSurvey"]>;
  PostQualityCalibrations(...args: GenesysCloudFullApiOperationArgs<"postQualityCalibrations">): Promise<GenesysCloudFullApiOperationResponseMap["postQualityCalibrations"]>;
  PostQualityConversationEvaluations(...args: GenesysCloudFullApiOperationArgs<"postQualityConversationEvaluations">): Promise<GenesysCloudFullApiOperationResponseMap["postQualityConversationEvaluations"]>;
  PostQualityConversationsAuditsQuery(...args: GenesysCloudFullApiOperationArgs<"postQualityConversationsAuditsQuery">): Promise<GenesysCloudFullApiOperationResponseMap["postQualityConversationsAuditsQuery"]>;
  PostQualityEvaluationsAggregatesQueryMe(...args: GenesysCloudFullApiOperationArgs<"postQualityEvaluationsAggregatesQueryMe">): Promise<GenesysCloudFullApiOperationResponseMap["postQualityEvaluationsAggregatesQueryMe"]>;
  PostQualityEvaluationsScoring(...args: GenesysCloudFullApiOperationArgs<"postQualityEvaluationsScoring">): Promise<GenesysCloudFullApiOperationResponseMap["postQualityEvaluationsScoring"]>;
  PostQualityEvaluationsSearch(...args: GenesysCloudFullApiOperationArgs<"postQualityEvaluationsSearch">): Promise<GenesysCloudFullApiOperationResponseMap["postQualityEvaluationsSearch"]>;
  PostQualityForms(...args: GenesysCloudFullApiOperationArgs<"postQualityForms">): Promise<GenesysCloudFullApiOperationResponseMap["postQualityForms"]>;
  PostQualityFormsEvaluations(...args: GenesysCloudFullApiOperationArgs<"postQualityFormsEvaluations">): Promise<GenesysCloudFullApiOperationResponseMap["postQualityFormsEvaluations"]>;
  PostQualityFormsSurveys(...args: GenesysCloudFullApiOperationArgs<"postQualityFormsSurveys">): Promise<GenesysCloudFullApiOperationResponseMap["postQualityFormsSurveys"]>;
  PostQualityProgramAgentscoringrules(...args: GenesysCloudFullApiOperationArgs<"postQualityProgramAgentscoringrules">): Promise<GenesysCloudFullApiOperationResponseMap["postQualityProgramAgentscoringrules"]>;
  PostQualityPublishedforms(...args: GenesysCloudFullApiOperationArgs<"postQualityPublishedforms">): Promise<GenesysCloudFullApiOperationResponseMap["postQualityPublishedforms"]>;
  PostQualityPublishedformsEvaluations(...args: GenesysCloudFullApiOperationArgs<"postQualityPublishedformsEvaluations">): Promise<GenesysCloudFullApiOperationResponseMap["postQualityPublishedformsEvaluations"]>;
  PostQualityPublishedformsSurveys(...args: GenesysCloudFullApiOperationArgs<"postQualityPublishedformsSurveys">): Promise<GenesysCloudFullApiOperationResponseMap["postQualityPublishedformsSurveys"]>;
  PostQualitySurveys(...args: GenesysCloudFullApiOperationArgs<"postQualitySurveys">): Promise<GenesysCloudFullApiOperationResponseMap["postQualitySurveys"]>;
  PostQualitySurveysScoring(...args: GenesysCloudFullApiOperationArgs<"postQualitySurveysScoring">): Promise<GenesysCloudFullApiOperationResponseMap["postQualitySurveysScoring"]>;
  PutQualityCalibration(...args: GenesysCloudFullApiOperationArgs<"putQualityCalibration">): Promise<GenesysCloudFullApiOperationResponseMap["putQualityCalibration"]>;
  PutQualityConversationEvaluation(...args: GenesysCloudFullApiOperationArgs<"putQualityConversationEvaluation">): Promise<GenesysCloudFullApiOperationResponseMap["putQualityConversationEvaluation"]>;
  PutQualityForm(...args: GenesysCloudFullApiOperationArgs<"putQualityForm">): Promise<GenesysCloudFullApiOperationResponseMap["putQualityForm"]>;
  PutQualityFormsEvaluation(...args: GenesysCloudFullApiOperationArgs<"putQualityFormsEvaluation">): Promise<GenesysCloudFullApiOperationResponseMap["putQualityFormsEvaluation"]>;
  PutQualityFormsEvaluationAiscoringSettings(...args: GenesysCloudFullApiOperationArgs<"putQualityFormsEvaluationAiscoringSettings">): Promise<GenesysCloudFullApiOperationResponseMap["putQualityFormsEvaluationAiscoringSettings"]>;
  PutQualityFormsSurvey(...args: GenesysCloudFullApiOperationArgs<"putQualityFormsSurvey">): Promise<GenesysCloudFullApiOperationResponseMap["putQualityFormsSurvey"]>;
  PutQualityProgramAgentscoringrule(...args: GenesysCloudFullApiOperationArgs<"putQualityProgramAgentscoringrule">): Promise<GenesysCloudFullApiOperationResponseMap["putQualityProgramAgentscoringrule"]>;
  PutQualitySurveysScorable(...args: GenesysCloudFullApiOperationArgs<"putQualitySurveysScorable">): Promise<GenesysCloudFullApiOperationResponseMap["putQualitySurveysScorable"]>;
}

export const GenesysCloudFullApiQualityGeneratedFunctionNames = [
  "DeleteQualityCalibration",
  "DeleteQualityConversationEvaluation",
  "DeleteQualityForm",
  "DeleteQualityFormsEvaluation",
  "DeleteQualityFormsSurvey",
  "DeleteQualityProgramAgentscoringrule",
  "GetQualityAgentsActivity",
  "GetQualityCalibration",
  "GetQualityCalibrations",
  "GetQualityConversationEvaluation",
  "GetQualityConversationsAuditsQueryTransactionId",
  "GetQualityConversationsAuditsQueryTransactionIdResults",
  "GetQualityConversationSurveys",
  "GetQualityEvaluationsQuery",
  "GetQualityEvaluatorsActivity",
  "GetQualityForm",
  "GetQualityForms",
  "GetQualityFormsEvaluation",
  "GetQualityFormsEvaluations",
  "GetQualityFormsEvaluationsBulk",
  "GetQualityFormsEvaluationsBulkContexts",
  "GetQualityFormsEvaluationVersions",
  "GetQualityFormsSurvey",
  "GetQualityFormsSurveys",
  "GetQualityFormsSurveysBulk",
  "GetQualityFormsSurveysBulkContexts",
  "GetQualityFormsSurveyVersions",
  "GetQualityFormVersions",
  "GetQualityProgramAgentscoringrule",
  "GetQualityProgramAgentscoringrules",
  "GetQualityPublishedform",
  "GetQualityPublishedforms",
  "GetQualityPublishedformsEvaluation",
  "GetQualityPublishedformsEvaluations",
  "GetQualityPublishedformsSurvey",
  "GetQualityPublishedformsSurveys",
  "GetQualitySurvey",
  "GetQualitySurveysScorable",
  "PatchQualityFormsSurvey",
  "PostQualityCalibrations",
  "PostQualityConversationEvaluations",
  "PostQualityConversationsAuditsQuery",
  "PostQualityEvaluationsAggregatesQueryMe",
  "PostQualityEvaluationsScoring",
  "PostQualityEvaluationsSearch",
  "PostQualityForms",
  "PostQualityFormsEvaluations",
  "PostQualityFormsSurveys",
  "PostQualityProgramAgentscoringrules",
  "PostQualityPublishedforms",
  "PostQualityPublishedformsEvaluations",
  "PostQualityPublishedformsSurveys",
  "PostQualitySurveys",
  "PostQualitySurveysScoring",
  "PutQualityCalibration",
  "PutQualityConversationEvaluation",
  "PutQualityForm",
  "PutQualityFormsEvaluation",
  "PutQualityFormsEvaluationAiscoringSettings",
  "PutQualityFormsSurvey",
  "PutQualityProgramAgentscoringrule",
  "PutQualitySurveysScorable"
] as const satisfies readonly (keyof GenesysCloudFullApiQualityGeneratedClient)[];

export function createGenesysCloudFullApiQualityGeneratedClient(
  callOperation: GenesysCloudGeneratedOperationCaller,
): GenesysCloudFullApiQualityGeneratedClient {
  return {
    DeleteQualityCalibration: (...args) => callOperation("deleteQualityCalibration", ...(args as GenesysCloudFullApiOperationArgs<"deleteQualityCalibration">)),
    DeleteQualityConversationEvaluation: (...args) => callOperation("deleteQualityConversationEvaluation", ...(args as GenesysCloudFullApiOperationArgs<"deleteQualityConversationEvaluation">)),
    DeleteQualityForm: (...args) => callOperation("deleteQualityForm", ...(args as GenesysCloudFullApiOperationArgs<"deleteQualityForm">)),
    DeleteQualityFormsEvaluation: (...args) => callOperation("deleteQualityFormsEvaluation", ...(args as GenesysCloudFullApiOperationArgs<"deleteQualityFormsEvaluation">)),
    DeleteQualityFormsSurvey: (...args) => callOperation("deleteQualityFormsSurvey", ...(args as GenesysCloudFullApiOperationArgs<"deleteQualityFormsSurvey">)),
    DeleteQualityProgramAgentscoringrule: (...args) => callOperation("deleteQualityProgramAgentscoringrule", ...(args as GenesysCloudFullApiOperationArgs<"deleteQualityProgramAgentscoringrule">)),
    GetQualityAgentsActivity: (...args) => callOperation("getQualityAgentsActivity", ...(args as GenesysCloudFullApiOperationArgs<"getQualityAgentsActivity">)),
    GetQualityCalibration: (...args) => callOperation("getQualityCalibration", ...(args as GenesysCloudFullApiOperationArgs<"getQualityCalibration">)),
    GetQualityCalibrations: (...args) => callOperation("getQualityCalibrations", ...(args as GenesysCloudFullApiOperationArgs<"getQualityCalibrations">)),
    GetQualityConversationEvaluation: (...args) => callOperation("getQualityConversationEvaluation", ...(args as GenesysCloudFullApiOperationArgs<"getQualityConversationEvaluation">)),
    GetQualityConversationsAuditsQueryTransactionId: (...args) => callOperation("getQualityConversationsAuditsQueryTransactionId", ...(args as GenesysCloudFullApiOperationArgs<"getQualityConversationsAuditsQueryTransactionId">)),
    GetQualityConversationsAuditsQueryTransactionIdResults: (...args) => callOperation("getQualityConversationsAuditsQueryTransactionIdResults", ...(args as GenesysCloudFullApiOperationArgs<"getQualityConversationsAuditsQueryTransactionIdResults">)),
    GetQualityConversationSurveys: (...args) => callOperation("getQualityConversationSurveys", ...(args as GenesysCloudFullApiOperationArgs<"getQualityConversationSurveys">)),
    GetQualityEvaluationsQuery: (...args) => callOperation("getQualityEvaluationsQuery", ...(args as GenesysCloudFullApiOperationArgs<"getQualityEvaluationsQuery">)),
    GetQualityEvaluatorsActivity: (...args) => callOperation("getQualityEvaluatorsActivity", ...(args as GenesysCloudFullApiOperationArgs<"getQualityEvaluatorsActivity">)),
    GetQualityForm: (...args) => callOperation("getQualityForm", ...(args as GenesysCloudFullApiOperationArgs<"getQualityForm">)),
    GetQualityForms: (...args) => callOperation("getQualityForms", ...(args as GenesysCloudFullApiOperationArgs<"getQualityForms">)),
    GetQualityFormsEvaluation: (...args) => callOperation("getQualityFormsEvaluation", ...(args as GenesysCloudFullApiOperationArgs<"getQualityFormsEvaluation">)),
    GetQualityFormsEvaluations: (...args) => callOperation("getQualityFormsEvaluations", ...(args as GenesysCloudFullApiOperationArgs<"getQualityFormsEvaluations">)),
    GetQualityFormsEvaluationsBulk: (...args) => callOperation("getQualityFormsEvaluationsBulk", ...(args as GenesysCloudFullApiOperationArgs<"getQualityFormsEvaluationsBulk">)),
    GetQualityFormsEvaluationsBulkContexts: (...args) => callOperation("getQualityFormsEvaluationsBulkContexts", ...(args as GenesysCloudFullApiOperationArgs<"getQualityFormsEvaluationsBulkContexts">)),
    GetQualityFormsEvaluationVersions: (...args) => callOperation("getQualityFormsEvaluationVersions", ...(args as GenesysCloudFullApiOperationArgs<"getQualityFormsEvaluationVersions">)),
    GetQualityFormsSurvey: (...args) => callOperation("getQualityFormsSurvey", ...(args as GenesysCloudFullApiOperationArgs<"getQualityFormsSurvey">)),
    GetQualityFormsSurveys: (...args) => callOperation("getQualityFormsSurveys", ...(args as GenesysCloudFullApiOperationArgs<"getQualityFormsSurveys">)),
    GetQualityFormsSurveysBulk: (...args) => callOperation("getQualityFormsSurveysBulk", ...(args as GenesysCloudFullApiOperationArgs<"getQualityFormsSurveysBulk">)),
    GetQualityFormsSurveysBulkContexts: (...args) => callOperation("getQualityFormsSurveysBulkContexts", ...(args as GenesysCloudFullApiOperationArgs<"getQualityFormsSurveysBulkContexts">)),
    GetQualityFormsSurveyVersions: (...args) => callOperation("getQualityFormsSurveyVersions", ...(args as GenesysCloudFullApiOperationArgs<"getQualityFormsSurveyVersions">)),
    GetQualityFormVersions: (...args) => callOperation("getQualityFormVersions", ...(args as GenesysCloudFullApiOperationArgs<"getQualityFormVersions">)),
    GetQualityProgramAgentscoringrule: (...args) => callOperation("getQualityProgramAgentscoringrule", ...(args as GenesysCloudFullApiOperationArgs<"getQualityProgramAgentscoringrule">)),
    GetQualityProgramAgentscoringrules: (...args) => callOperation("getQualityProgramAgentscoringrules", ...(args as GenesysCloudFullApiOperationArgs<"getQualityProgramAgentscoringrules">)),
    GetQualityPublishedform: (...args) => callOperation("getQualityPublishedform", ...(args as GenesysCloudFullApiOperationArgs<"getQualityPublishedform">)),
    GetQualityPublishedforms: (...args) => callOperation("getQualityPublishedforms", ...(args as GenesysCloudFullApiOperationArgs<"getQualityPublishedforms">)),
    GetQualityPublishedformsEvaluation: (...args) => callOperation("getQualityPublishedformsEvaluation", ...(args as GenesysCloudFullApiOperationArgs<"getQualityPublishedformsEvaluation">)),
    GetQualityPublishedformsEvaluations: (...args) => callOperation("getQualityPublishedformsEvaluations", ...(args as GenesysCloudFullApiOperationArgs<"getQualityPublishedformsEvaluations">)),
    GetQualityPublishedformsSurvey: (...args) => callOperation("getQualityPublishedformsSurvey", ...(args as GenesysCloudFullApiOperationArgs<"getQualityPublishedformsSurvey">)),
    GetQualityPublishedformsSurveys: (...args) => callOperation("getQualityPublishedformsSurveys", ...(args as GenesysCloudFullApiOperationArgs<"getQualityPublishedformsSurveys">)),
    GetQualitySurvey: (...args) => callOperation("getQualitySurvey", ...(args as GenesysCloudFullApiOperationArgs<"getQualitySurvey">)),
    GetQualitySurveysScorable: (...args) => callOperation("getQualitySurveysScorable", ...(args as GenesysCloudFullApiOperationArgs<"getQualitySurveysScorable">)),
    PatchQualityFormsSurvey: (...args) => callOperation("patchQualityFormsSurvey", ...(args as GenesysCloudFullApiOperationArgs<"patchQualityFormsSurvey">)),
    PostQualityCalibrations: (...args) => callOperation("postQualityCalibrations", ...(args as GenesysCloudFullApiOperationArgs<"postQualityCalibrations">)),
    PostQualityConversationEvaluations: (...args) => callOperation("postQualityConversationEvaluations", ...(args as GenesysCloudFullApiOperationArgs<"postQualityConversationEvaluations">)),
    PostQualityConversationsAuditsQuery: (...args) => callOperation("postQualityConversationsAuditsQuery", ...(args as GenesysCloudFullApiOperationArgs<"postQualityConversationsAuditsQuery">)),
    PostQualityEvaluationsAggregatesQueryMe: (...args) => callOperation("postQualityEvaluationsAggregatesQueryMe", ...(args as GenesysCloudFullApiOperationArgs<"postQualityEvaluationsAggregatesQueryMe">)),
    PostQualityEvaluationsScoring: (...args) => callOperation("postQualityEvaluationsScoring", ...(args as GenesysCloudFullApiOperationArgs<"postQualityEvaluationsScoring">)),
    PostQualityEvaluationsSearch: (...args) => callOperation("postQualityEvaluationsSearch", ...(args as GenesysCloudFullApiOperationArgs<"postQualityEvaluationsSearch">)),
    PostQualityForms: (...args) => callOperation("postQualityForms", ...(args as GenesysCloudFullApiOperationArgs<"postQualityForms">)),
    PostQualityFormsEvaluations: (...args) => callOperation("postQualityFormsEvaluations", ...(args as GenesysCloudFullApiOperationArgs<"postQualityFormsEvaluations">)),
    PostQualityFormsSurveys: (...args) => callOperation("postQualityFormsSurveys", ...(args as GenesysCloudFullApiOperationArgs<"postQualityFormsSurveys">)),
    PostQualityProgramAgentscoringrules: (...args) => callOperation("postQualityProgramAgentscoringrules", ...(args as GenesysCloudFullApiOperationArgs<"postQualityProgramAgentscoringrules">)),
    PostQualityPublishedforms: (...args) => callOperation("postQualityPublishedforms", ...(args as GenesysCloudFullApiOperationArgs<"postQualityPublishedforms">)),
    PostQualityPublishedformsEvaluations: (...args) => callOperation("postQualityPublishedformsEvaluations", ...(args as GenesysCloudFullApiOperationArgs<"postQualityPublishedformsEvaluations">)),
    PostQualityPublishedformsSurveys: (...args) => callOperation("postQualityPublishedformsSurveys", ...(args as GenesysCloudFullApiOperationArgs<"postQualityPublishedformsSurveys">)),
    PostQualitySurveys: (...args) => callOperation("postQualitySurveys", ...(args as GenesysCloudFullApiOperationArgs<"postQualitySurveys">)),
    PostQualitySurveysScoring: (...args) => callOperation("postQualitySurveysScoring", ...(args as GenesysCloudFullApiOperationArgs<"postQualitySurveysScoring">)),
    PutQualityCalibration: (...args) => callOperation("putQualityCalibration", ...(args as GenesysCloudFullApiOperationArgs<"putQualityCalibration">)),
    PutQualityConversationEvaluation: (...args) => callOperation("putQualityConversationEvaluation", ...(args as GenesysCloudFullApiOperationArgs<"putQualityConversationEvaluation">)),
    PutQualityForm: (...args) => callOperation("putQualityForm", ...(args as GenesysCloudFullApiOperationArgs<"putQualityForm">)),
    PutQualityFormsEvaluation: (...args) => callOperation("putQualityFormsEvaluation", ...(args as GenesysCloudFullApiOperationArgs<"putQualityFormsEvaluation">)),
    PutQualityFormsEvaluationAiscoringSettings: (...args) => callOperation("putQualityFormsEvaluationAiscoringSettings", ...(args as GenesysCloudFullApiOperationArgs<"putQualityFormsEvaluationAiscoringSettings">)),
    PutQualityFormsSurvey: (...args) => callOperation("putQualityFormsSurvey", ...(args as GenesysCloudFullApiOperationArgs<"putQualityFormsSurvey">)),
    PutQualityProgramAgentscoringrule: (...args) => callOperation("putQualityProgramAgentscoringrule", ...(args as GenesysCloudFullApiOperationArgs<"putQualityProgramAgentscoringrule">)),
    PutQualitySurveysScorable: (...args) => callOperation("putQualitySurveysScorable", ...(args as GenesysCloudFullApiOperationArgs<"putQualitySurveysScorable">)),
  };
}
