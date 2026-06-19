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
export const GenesysCloudFullApiSpeechTextAnalyticsOperationKeys = [
  "deleteSpeechandtextanalyticsCategory",
  "deleteSpeechandtextanalyticsDictionaryfeedbackDictionaryFeedbackId",
  "deleteSpeechandtextanalyticsProgram",
  "deleteSpeechandtextanalyticsSentimentfeedback",
  "deleteSpeechandtextanalyticsSentimentfeedbackSentimentFeedbackId",
  "deleteSpeechandtextanalyticsTopic",
  "getSpeechandtextanalyticsCategories",
  "getSpeechandtextanalyticsCategory",
  "getSpeechandtextanalyticsConversation",
  "getSpeechandtextanalyticsConversationCategories",
  "getSpeechandtextanalyticsConversationCommunicationTranscripturl",
  "getSpeechandtextanalyticsConversationCommunicationTranscripturls",
  "getSpeechandtextanalyticsConversationSentiments",
  "getSpeechandtextanalyticsConversationSummaries",
  "getSpeechandtextanalyticsDictionaryfeedback",
  "getSpeechandtextanalyticsDictionaryfeedbackDictionaryFeedbackId",
  "getSpeechandtextanalyticsProgram",
  "getSpeechandtextanalyticsProgramMappings",
  "getSpeechandtextanalyticsPrograms",
  "getSpeechandtextanalyticsProgramSettingsInsights",
  "getSpeechandtextanalyticsProgramsGeneralJob",
  "getSpeechandtextanalyticsProgramsMappings",
  "getSpeechandtextanalyticsProgramsPublishjob",
  "getSpeechandtextanalyticsProgramsSettingsInsights",
  "getSpeechandtextanalyticsProgramsTopiclinksJob",
  "getSpeechandtextanalyticsProgramsTranscriptionenginesDialects",
  "getSpeechandtextanalyticsProgramsUnpublished",
  "getSpeechandtextanalyticsProgramTranscriptionengines",
  "getSpeechandtextanalyticsSentimentDialects",
  "getSpeechandtextanalyticsSentimentfeedback",
  "getSpeechandtextanalyticsSettings",
  "getSpeechandtextanalyticsTopic",
  "getSpeechandtextanalyticsTopics",
  "getSpeechandtextanalyticsTopicsDialects",
  "getSpeechandtextanalyticsTopicsGeneral",
  "getSpeechandtextanalyticsTopicsGeneralStatus",
  "getSpeechandtextanalyticsTopicsPublishjob",
  "getSpeechandtextanalyticsTopicsTestphraseJob",
  "getSpeechandtextanalyticsTranslationsLanguageConversation",
  "getSpeechandtextanalyticsTranslationsLanguages",
  "patchSpeechandtextanalyticsSettings",
  "postSpeechandtextanalyticsCategories",
  "postSpeechandtextanalyticsDictionaryfeedback",
  "postSpeechandtextanalyticsPrograms",
  "postSpeechandtextanalyticsProgramsGeneralJobs",
  "postSpeechandtextanalyticsProgramsPublishjobs",
  "postSpeechandtextanalyticsSentimentfeedback",
  "postSpeechandtextanalyticsTopics",
  "postSpeechandtextanalyticsTopicsPublishjobs",
  "postSpeechandtextanalyticsTopicsTestphraseJobs",
  "putSpeechandtextanalyticsCategory",
  "putSpeechandtextanalyticsDictionaryfeedbackDictionaryFeedbackId",
  "putSpeechandtextanalyticsProgram",
  "putSpeechandtextanalyticsProgramMappings",
  "putSpeechandtextanalyticsProgramSettingsInsights",
  "putSpeechandtextanalyticsProgramTranscriptionengines",
  "putSpeechandtextanalyticsSettings",
  "putSpeechandtextanalyticsTopic"
] as const;
export type GenesysCloudFullApiSpeechTextAnalyticsOperationKey = typeof GenesysCloudFullApiSpeechTextAnalyticsOperationKeys[number];
// End hardened literal operation keys.

export interface GenesysCloudFullApiSpeechTextAnalyticsOperationPathParamMap {
  "deleteSpeechandtextanalyticsCategory": { "categoryId": GenesysCloudFullApiPathParamValue };
  "deleteSpeechandtextanalyticsDictionaryfeedbackDictionaryFeedbackId": { "dictionaryFeedbackId": GenesysCloudFullApiPathParamValue };
  "deleteSpeechandtextanalyticsProgram": { "programId": GenesysCloudFullApiPathParamValue };
  "deleteSpeechandtextanalyticsSentimentfeedback": {};
  "deleteSpeechandtextanalyticsSentimentfeedbackSentimentFeedbackId": { "sentimentFeedbackId": GenesysCloudFullApiPathParamValue };
  "deleteSpeechandtextanalyticsTopic": { "topicId": GenesysCloudFullApiPathParamValue };
  "getSpeechandtextanalyticsCategories": {};
  "getSpeechandtextanalyticsCategory": { "categoryId": GenesysCloudFullApiPathParamValue };
  "getSpeechandtextanalyticsConversation": { "conversationId": GenesysCloudFullApiPathParamValue };
  "getSpeechandtextanalyticsConversationCategories": { "conversationId": GenesysCloudFullApiPathParamValue };
  "getSpeechandtextanalyticsConversationCommunicationTranscripturl": { "conversationId": GenesysCloudFullApiPathParamValue; "communicationId": GenesysCloudFullApiPathParamValue };
  "getSpeechandtextanalyticsConversationCommunicationTranscripturls": { "conversationId": GenesysCloudFullApiPathParamValue; "communicationId": GenesysCloudFullApiPathParamValue };
  "getSpeechandtextanalyticsConversationSentiments": { "conversationId": GenesysCloudFullApiPathParamValue };
  "getSpeechandtextanalyticsConversationSummaries": { "conversationId": GenesysCloudFullApiPathParamValue };
  "getSpeechandtextanalyticsDictionaryfeedback": {};
  "getSpeechandtextanalyticsDictionaryfeedbackDictionaryFeedbackId": { "dictionaryFeedbackId": GenesysCloudFullApiPathParamValue };
  "getSpeechandtextanalyticsProgram": { "programId": GenesysCloudFullApiPathParamValue };
  "getSpeechandtextanalyticsProgramMappings": { "programId": GenesysCloudFullApiPathParamValue };
  "getSpeechandtextanalyticsPrograms": {};
  "getSpeechandtextanalyticsProgramSettingsInsights": { "programId": GenesysCloudFullApiPathParamValue };
  "getSpeechandtextanalyticsProgramsGeneralJob": { "jobId": GenesysCloudFullApiPathParamValue };
  "getSpeechandtextanalyticsProgramsMappings": {};
  "getSpeechandtextanalyticsProgramsPublishjob": { "jobId": GenesysCloudFullApiPathParamValue };
  "getSpeechandtextanalyticsProgramsSettingsInsights": {};
  "getSpeechandtextanalyticsProgramsTopiclinksJob": { "jobId": GenesysCloudFullApiPathParamValue };
  "getSpeechandtextanalyticsProgramsTranscriptionenginesDialects": {};
  "getSpeechandtextanalyticsProgramsUnpublished": {};
  "getSpeechandtextanalyticsProgramTranscriptionengines": { "programId": GenesysCloudFullApiPathParamValue };
  "getSpeechandtextanalyticsSentimentDialects": {};
  "getSpeechandtextanalyticsSentimentfeedback": {};
  "getSpeechandtextanalyticsSettings": {};
  "getSpeechandtextanalyticsTopic": { "topicId": GenesysCloudFullApiPathParamValue };
  "getSpeechandtextanalyticsTopics": {};
  "getSpeechandtextanalyticsTopicsDialects": {};
  "getSpeechandtextanalyticsTopicsGeneral": {};
  "getSpeechandtextanalyticsTopicsGeneralStatus": {};
  "getSpeechandtextanalyticsTopicsPublishjob": { "jobId": GenesysCloudFullApiPathParamValue };
  "getSpeechandtextanalyticsTopicsTestphraseJob": { "jobId": GenesysCloudFullApiPathParamValue };
  "getSpeechandtextanalyticsTranslationsLanguageConversation": { "languageId": GenesysCloudFullApiPathParamValue; "conversationId": GenesysCloudFullApiPathParamValue };
  "getSpeechandtextanalyticsTranslationsLanguages": {};
  "patchSpeechandtextanalyticsSettings": {};
  "postSpeechandtextanalyticsCategories": {};
  "postSpeechandtextanalyticsDictionaryfeedback": {};
  "postSpeechandtextanalyticsPrograms": {};
  "postSpeechandtextanalyticsProgramsGeneralJobs": {};
  "postSpeechandtextanalyticsProgramsPublishjobs": {};
  "postSpeechandtextanalyticsSentimentfeedback": {};
  "postSpeechandtextanalyticsTopics": {};
  "postSpeechandtextanalyticsTopicsPublishjobs": {};
  "postSpeechandtextanalyticsTopicsTestphraseJobs": {};
  "putSpeechandtextanalyticsCategory": { "categoryId": GenesysCloudFullApiPathParamValue };
  "putSpeechandtextanalyticsDictionaryfeedbackDictionaryFeedbackId": { "dictionaryFeedbackId": GenesysCloudFullApiPathParamValue };
  "putSpeechandtextanalyticsProgram": { "programId": GenesysCloudFullApiPathParamValue };
  "putSpeechandtextanalyticsProgramMappings": { "programId": GenesysCloudFullApiPathParamValue };
  "putSpeechandtextanalyticsProgramSettingsInsights": { "programId": GenesysCloudFullApiPathParamValue };
  "putSpeechandtextanalyticsProgramTranscriptionengines": { "programId": GenesysCloudFullApiPathParamValue };
  "putSpeechandtextanalyticsSettings": {};
  "putSpeechandtextanalyticsTopic": { "topicId": GenesysCloudFullApiPathParamValue };
}

export interface GenesysCloudFullApiSpeechTextAnalyticsOperationRequestMap {
  "deleteSpeechandtextanalyticsCategory": GenesysCloudFullApiOperationInput<"deleteSpeechandtextanalyticsCategory">;
  "deleteSpeechandtextanalyticsDictionaryfeedbackDictionaryFeedbackId": GenesysCloudFullApiOperationInput<"deleteSpeechandtextanalyticsDictionaryfeedbackDictionaryFeedbackId">;
  "deleteSpeechandtextanalyticsProgram": GenesysCloudFullApiOperationInput<"deleteSpeechandtextanalyticsProgram">;
  "deleteSpeechandtextanalyticsSentimentfeedback": GenesysCloudFullApiOperationInput<"deleteSpeechandtextanalyticsSentimentfeedback">;
  "deleteSpeechandtextanalyticsSentimentfeedbackSentimentFeedbackId": GenesysCloudFullApiOperationInput<"deleteSpeechandtextanalyticsSentimentfeedbackSentimentFeedbackId">;
  "deleteSpeechandtextanalyticsTopic": GenesysCloudFullApiOperationInput<"deleteSpeechandtextanalyticsTopic">;
  "getSpeechandtextanalyticsCategories": GenesysCloudFullApiOperationInput<"getSpeechandtextanalyticsCategories">;
  "getSpeechandtextanalyticsCategory": GenesysCloudFullApiOperationInput<"getSpeechandtextanalyticsCategory">;
  "getSpeechandtextanalyticsConversation": GenesysCloudFullApiOperationInput<"getSpeechandtextanalyticsConversation">;
  "getSpeechandtextanalyticsConversationCategories": GenesysCloudFullApiOperationInput<"getSpeechandtextanalyticsConversationCategories">;
  "getSpeechandtextanalyticsConversationCommunicationTranscripturl": GenesysCloudFullApiOperationInput<"getSpeechandtextanalyticsConversationCommunicationTranscripturl">;
  "getSpeechandtextanalyticsConversationCommunicationTranscripturls": GenesysCloudFullApiOperationInput<"getSpeechandtextanalyticsConversationCommunicationTranscripturls">;
  "getSpeechandtextanalyticsConversationSentiments": GenesysCloudFullApiOperationInput<"getSpeechandtextanalyticsConversationSentiments">;
  "getSpeechandtextanalyticsConversationSummaries": GenesysCloudFullApiOperationInput<"getSpeechandtextanalyticsConversationSummaries">;
  "getSpeechandtextanalyticsDictionaryfeedback": GenesysCloudFullApiOperationInput<"getSpeechandtextanalyticsDictionaryfeedback">;
  "getSpeechandtextanalyticsDictionaryfeedbackDictionaryFeedbackId": GenesysCloudFullApiOperationInput<"getSpeechandtextanalyticsDictionaryfeedbackDictionaryFeedbackId">;
  "getSpeechandtextanalyticsProgram": GenesysCloudFullApiOperationInput<"getSpeechandtextanalyticsProgram">;
  "getSpeechandtextanalyticsProgramMappings": GenesysCloudFullApiOperationInput<"getSpeechandtextanalyticsProgramMappings">;
  "getSpeechandtextanalyticsPrograms": GenesysCloudFullApiOperationInput<"getSpeechandtextanalyticsPrograms">;
  "getSpeechandtextanalyticsProgramSettingsInsights": GenesysCloudFullApiOperationInput<"getSpeechandtextanalyticsProgramSettingsInsights">;
  "getSpeechandtextanalyticsProgramsGeneralJob": GenesysCloudFullApiOperationInput<"getSpeechandtextanalyticsProgramsGeneralJob">;
  "getSpeechandtextanalyticsProgramsMappings": GenesysCloudFullApiOperationInput<"getSpeechandtextanalyticsProgramsMappings">;
  "getSpeechandtextanalyticsProgramsPublishjob": GenesysCloudFullApiOperationInput<"getSpeechandtextanalyticsProgramsPublishjob">;
  "getSpeechandtextanalyticsProgramsSettingsInsights": GenesysCloudFullApiOperationInput<"getSpeechandtextanalyticsProgramsSettingsInsights">;
  "getSpeechandtextanalyticsProgramsTopiclinksJob": GenesysCloudFullApiOperationInput<"getSpeechandtextanalyticsProgramsTopiclinksJob">;
  "getSpeechandtextanalyticsProgramsTranscriptionenginesDialects": GenesysCloudFullApiOperationInput<"getSpeechandtextanalyticsProgramsTranscriptionenginesDialects">;
  "getSpeechandtextanalyticsProgramsUnpublished": GenesysCloudFullApiOperationInput<"getSpeechandtextanalyticsProgramsUnpublished">;
  "getSpeechandtextanalyticsProgramTranscriptionengines": GenesysCloudFullApiOperationInput<"getSpeechandtextanalyticsProgramTranscriptionengines">;
  "getSpeechandtextanalyticsSentimentDialects": GenesysCloudFullApiOperationInput<"getSpeechandtextanalyticsSentimentDialects">;
  "getSpeechandtextanalyticsSentimentfeedback": GenesysCloudFullApiOperationInput<"getSpeechandtextanalyticsSentimentfeedback">;
  "getSpeechandtextanalyticsSettings": GenesysCloudFullApiOperationInput<"getSpeechandtextanalyticsSettings">;
  "getSpeechandtextanalyticsTopic": GenesysCloudFullApiOperationInput<"getSpeechandtextanalyticsTopic">;
  "getSpeechandtextanalyticsTopics": GenesysCloudFullApiOperationInput<"getSpeechandtextanalyticsTopics">;
  "getSpeechandtextanalyticsTopicsDialects": GenesysCloudFullApiOperationInput<"getSpeechandtextanalyticsTopicsDialects">;
  "getSpeechandtextanalyticsTopicsGeneral": GenesysCloudFullApiOperationInput<"getSpeechandtextanalyticsTopicsGeneral">;
  "getSpeechandtextanalyticsTopicsGeneralStatus": GenesysCloudFullApiOperationInput<"getSpeechandtextanalyticsTopicsGeneralStatus">;
  "getSpeechandtextanalyticsTopicsPublishjob": GenesysCloudFullApiOperationInput<"getSpeechandtextanalyticsTopicsPublishjob">;
  "getSpeechandtextanalyticsTopicsTestphraseJob": GenesysCloudFullApiOperationInput<"getSpeechandtextanalyticsTopicsTestphraseJob">;
  "getSpeechandtextanalyticsTranslationsLanguageConversation": GenesysCloudFullApiOperationInput<"getSpeechandtextanalyticsTranslationsLanguageConversation">;
  "getSpeechandtextanalyticsTranslationsLanguages": GenesysCloudFullApiOperationInput<"getSpeechandtextanalyticsTranslationsLanguages">;
  "patchSpeechandtextanalyticsSettings": GenesysCloudFullApiOperationInput<"patchSpeechandtextanalyticsSettings">;
  "postSpeechandtextanalyticsCategories": GenesysCloudFullApiOperationInput<"postSpeechandtextanalyticsCategories">;
  "postSpeechandtextanalyticsDictionaryfeedback": GenesysCloudFullApiOperationInput<"postSpeechandtextanalyticsDictionaryfeedback">;
  "postSpeechandtextanalyticsPrograms": GenesysCloudFullApiOperationInput<"postSpeechandtextanalyticsPrograms">;
  "postSpeechandtextanalyticsProgramsGeneralJobs": GenesysCloudFullApiOperationInput<"postSpeechandtextanalyticsProgramsGeneralJobs">;
  "postSpeechandtextanalyticsProgramsPublishjobs": GenesysCloudFullApiOperationInput<"postSpeechandtextanalyticsProgramsPublishjobs">;
  "postSpeechandtextanalyticsSentimentfeedback": GenesysCloudFullApiOperationInput<"postSpeechandtextanalyticsSentimentfeedback">;
  "postSpeechandtextanalyticsTopics": GenesysCloudFullApiOperationInput<"postSpeechandtextanalyticsTopics">;
  "postSpeechandtextanalyticsTopicsPublishjobs": GenesysCloudFullApiOperationInput<"postSpeechandtextanalyticsTopicsPublishjobs">;
  "postSpeechandtextanalyticsTopicsTestphraseJobs": GenesysCloudFullApiOperationInput<"postSpeechandtextanalyticsTopicsTestphraseJobs">;
  "putSpeechandtextanalyticsCategory": GenesysCloudFullApiOperationInput<"putSpeechandtextanalyticsCategory">;
  "putSpeechandtextanalyticsDictionaryfeedbackDictionaryFeedbackId": GenesysCloudFullApiOperationInput<"putSpeechandtextanalyticsDictionaryfeedbackDictionaryFeedbackId">;
  "putSpeechandtextanalyticsProgram": GenesysCloudFullApiOperationInput<"putSpeechandtextanalyticsProgram">;
  "putSpeechandtextanalyticsProgramMappings": GenesysCloudFullApiOperationInput<"putSpeechandtextanalyticsProgramMappings">;
  "putSpeechandtextanalyticsProgramSettingsInsights": GenesysCloudFullApiOperationInput<"putSpeechandtextanalyticsProgramSettingsInsights">;
  "putSpeechandtextanalyticsProgramTranscriptionengines": GenesysCloudFullApiOperationInput<"putSpeechandtextanalyticsProgramTranscriptionengines">;
  "putSpeechandtextanalyticsSettings": GenesysCloudFullApiOperationInput<"putSpeechandtextanalyticsSettings">;
  "putSpeechandtextanalyticsTopic": GenesysCloudFullApiOperationInput<"putSpeechandtextanalyticsTopic">;
}

export interface GenesysCloudFullApiSpeechTextAnalyticsGeneratedClient {
  DeleteSpeechandtextanalyticsCategory(...args: GenesysCloudFullApiOperationArgs<"deleteSpeechandtextanalyticsCategory">): Promise<GenesysCloudFullApiOperationResponseMap["deleteSpeechandtextanalyticsCategory"]>;
  DeleteSpeechandtextanalyticsDictionaryfeedbackDictionaryFeedbackId(...args: GenesysCloudFullApiOperationArgs<"deleteSpeechandtextanalyticsDictionaryfeedbackDictionaryFeedbackId">): Promise<GenesysCloudFullApiOperationResponseMap["deleteSpeechandtextanalyticsDictionaryfeedbackDictionaryFeedbackId"]>;
  DeleteSpeechandtextanalyticsProgram(...args: GenesysCloudFullApiOperationArgs<"deleteSpeechandtextanalyticsProgram">): Promise<GenesysCloudFullApiOperationResponseMap["deleteSpeechandtextanalyticsProgram"]>;
  DeleteSpeechandtextanalyticsSentimentfeedback(...args: GenesysCloudFullApiOperationArgs<"deleteSpeechandtextanalyticsSentimentfeedback">): Promise<GenesysCloudFullApiOperationResponseMap["deleteSpeechandtextanalyticsSentimentfeedback"]>;
  DeleteSpeechandtextanalyticsSentimentfeedbackSentimentFeedbackId(...args: GenesysCloudFullApiOperationArgs<"deleteSpeechandtextanalyticsSentimentfeedbackSentimentFeedbackId">): Promise<GenesysCloudFullApiOperationResponseMap["deleteSpeechandtextanalyticsSentimentfeedbackSentimentFeedbackId"]>;
  DeleteSpeechandtextanalyticsTopic(...args: GenesysCloudFullApiOperationArgs<"deleteSpeechandtextanalyticsTopic">): Promise<GenesysCloudFullApiOperationResponseMap["deleteSpeechandtextanalyticsTopic"]>;
  GetSpeechandtextanalyticsCategories(...args: GenesysCloudFullApiOperationArgs<"getSpeechandtextanalyticsCategories">): Promise<GenesysCloudFullApiOperationResponseMap["getSpeechandtextanalyticsCategories"]>;
  GetSpeechandtextanalyticsCategory(...args: GenesysCloudFullApiOperationArgs<"getSpeechandtextanalyticsCategory">): Promise<GenesysCloudFullApiOperationResponseMap["getSpeechandtextanalyticsCategory"]>;
  GetSpeechandtextanalyticsConversation(...args: GenesysCloudFullApiOperationArgs<"getSpeechandtextanalyticsConversation">): Promise<GenesysCloudFullApiOperationResponseMap["getSpeechandtextanalyticsConversation"]>;
  GetSpeechandtextanalyticsConversationCategories(...args: GenesysCloudFullApiOperationArgs<"getSpeechandtextanalyticsConversationCategories">): Promise<GenesysCloudFullApiOperationResponseMap["getSpeechandtextanalyticsConversationCategories"]>;
  GetSpeechandtextanalyticsConversationCommunicationTranscripturl(...args: GenesysCloudFullApiOperationArgs<"getSpeechandtextanalyticsConversationCommunicationTranscripturl">): Promise<GenesysCloudFullApiOperationResponseMap["getSpeechandtextanalyticsConversationCommunicationTranscripturl"]>;
  GetSpeechandtextanalyticsConversationCommunicationTranscripturls(...args: GenesysCloudFullApiOperationArgs<"getSpeechandtextanalyticsConversationCommunicationTranscripturls">): Promise<GenesysCloudFullApiOperationResponseMap["getSpeechandtextanalyticsConversationCommunicationTranscripturls"]>;
  GetSpeechandtextanalyticsConversationSentiments(...args: GenesysCloudFullApiOperationArgs<"getSpeechandtextanalyticsConversationSentiments">): Promise<GenesysCloudFullApiOperationResponseMap["getSpeechandtextanalyticsConversationSentiments"]>;
  GetSpeechandtextanalyticsConversationSummaries(...args: GenesysCloudFullApiOperationArgs<"getSpeechandtextanalyticsConversationSummaries">): Promise<GenesysCloudFullApiOperationResponseMap["getSpeechandtextanalyticsConversationSummaries"]>;
  GetSpeechandtextanalyticsDictionaryfeedback(...args: GenesysCloudFullApiOperationArgs<"getSpeechandtextanalyticsDictionaryfeedback">): Promise<GenesysCloudFullApiOperationResponseMap["getSpeechandtextanalyticsDictionaryfeedback"]>;
  GetSpeechandtextanalyticsDictionaryfeedbackDictionaryFeedbackId(...args: GenesysCloudFullApiOperationArgs<"getSpeechandtextanalyticsDictionaryfeedbackDictionaryFeedbackId">): Promise<GenesysCloudFullApiOperationResponseMap["getSpeechandtextanalyticsDictionaryfeedbackDictionaryFeedbackId"]>;
  GetSpeechandtextanalyticsProgram(...args: GenesysCloudFullApiOperationArgs<"getSpeechandtextanalyticsProgram">): Promise<GenesysCloudFullApiOperationResponseMap["getSpeechandtextanalyticsProgram"]>;
  GetSpeechandtextanalyticsProgramMappings(...args: GenesysCloudFullApiOperationArgs<"getSpeechandtextanalyticsProgramMappings">): Promise<GenesysCloudFullApiOperationResponseMap["getSpeechandtextanalyticsProgramMappings"]>;
  GetSpeechandtextanalyticsPrograms(...args: GenesysCloudFullApiOperationArgs<"getSpeechandtextanalyticsPrograms">): Promise<GenesysCloudFullApiOperationResponseMap["getSpeechandtextanalyticsPrograms"]>;
  GetSpeechandtextanalyticsProgramSettingsInsights(...args: GenesysCloudFullApiOperationArgs<"getSpeechandtextanalyticsProgramSettingsInsights">): Promise<GenesysCloudFullApiOperationResponseMap["getSpeechandtextanalyticsProgramSettingsInsights"]>;
  GetSpeechandtextanalyticsProgramsGeneralJob(...args: GenesysCloudFullApiOperationArgs<"getSpeechandtextanalyticsProgramsGeneralJob">): Promise<GenesysCloudFullApiOperationResponseMap["getSpeechandtextanalyticsProgramsGeneralJob"]>;
  GetSpeechandtextanalyticsProgramsMappings(...args: GenesysCloudFullApiOperationArgs<"getSpeechandtextanalyticsProgramsMappings">): Promise<GenesysCloudFullApiOperationResponseMap["getSpeechandtextanalyticsProgramsMappings"]>;
  GetSpeechandtextanalyticsProgramsPublishjob(...args: GenesysCloudFullApiOperationArgs<"getSpeechandtextanalyticsProgramsPublishjob">): Promise<GenesysCloudFullApiOperationResponseMap["getSpeechandtextanalyticsProgramsPublishjob"]>;
  GetSpeechandtextanalyticsProgramsSettingsInsights(...args: GenesysCloudFullApiOperationArgs<"getSpeechandtextanalyticsProgramsSettingsInsights">): Promise<GenesysCloudFullApiOperationResponseMap["getSpeechandtextanalyticsProgramsSettingsInsights"]>;
  GetSpeechandtextanalyticsProgramsTopiclinksJob(...args: GenesysCloudFullApiOperationArgs<"getSpeechandtextanalyticsProgramsTopiclinksJob">): Promise<GenesysCloudFullApiOperationResponseMap["getSpeechandtextanalyticsProgramsTopiclinksJob"]>;
  GetSpeechandtextanalyticsProgramsTranscriptionenginesDialects(...args: GenesysCloudFullApiOperationArgs<"getSpeechandtextanalyticsProgramsTranscriptionenginesDialects">): Promise<GenesysCloudFullApiOperationResponseMap["getSpeechandtextanalyticsProgramsTranscriptionenginesDialects"]>;
  GetSpeechandtextanalyticsProgramsUnpublished(...args: GenesysCloudFullApiOperationArgs<"getSpeechandtextanalyticsProgramsUnpublished">): Promise<GenesysCloudFullApiOperationResponseMap["getSpeechandtextanalyticsProgramsUnpublished"]>;
  GetSpeechandtextanalyticsProgramTranscriptionengines(...args: GenesysCloudFullApiOperationArgs<"getSpeechandtextanalyticsProgramTranscriptionengines">): Promise<GenesysCloudFullApiOperationResponseMap["getSpeechandtextanalyticsProgramTranscriptionengines"]>;
  GetSpeechandtextanalyticsSentimentDialects(...args: GenesysCloudFullApiOperationArgs<"getSpeechandtextanalyticsSentimentDialects">): Promise<GenesysCloudFullApiOperationResponseMap["getSpeechandtextanalyticsSentimentDialects"]>;
  GetSpeechandtextanalyticsSentimentfeedback(...args: GenesysCloudFullApiOperationArgs<"getSpeechandtextanalyticsSentimentfeedback">): Promise<GenesysCloudFullApiOperationResponseMap["getSpeechandtextanalyticsSentimentfeedback"]>;
  GetSpeechandtextanalyticsSettings(...args: GenesysCloudFullApiOperationArgs<"getSpeechandtextanalyticsSettings">): Promise<GenesysCloudFullApiOperationResponseMap["getSpeechandtextanalyticsSettings"]>;
  GetSpeechandtextanalyticsTopic(...args: GenesysCloudFullApiOperationArgs<"getSpeechandtextanalyticsTopic">): Promise<GenesysCloudFullApiOperationResponseMap["getSpeechandtextanalyticsTopic"]>;
  GetSpeechandtextanalyticsTopics(...args: GenesysCloudFullApiOperationArgs<"getSpeechandtextanalyticsTopics">): Promise<GenesysCloudFullApiOperationResponseMap["getSpeechandtextanalyticsTopics"]>;
  GetSpeechandtextanalyticsTopicsDialects(...args: GenesysCloudFullApiOperationArgs<"getSpeechandtextanalyticsTopicsDialects">): Promise<GenesysCloudFullApiOperationResponseMap["getSpeechandtextanalyticsTopicsDialects"]>;
  GetSpeechandtextanalyticsTopicsGeneral(...args: GenesysCloudFullApiOperationArgs<"getSpeechandtextanalyticsTopicsGeneral">): Promise<GenesysCloudFullApiOperationResponseMap["getSpeechandtextanalyticsTopicsGeneral"]>;
  GetSpeechandtextanalyticsTopicsGeneralStatus(...args: GenesysCloudFullApiOperationArgs<"getSpeechandtextanalyticsTopicsGeneralStatus">): Promise<GenesysCloudFullApiOperationResponseMap["getSpeechandtextanalyticsTopicsGeneralStatus"]>;
  GetSpeechandtextanalyticsTopicsPublishjob(...args: GenesysCloudFullApiOperationArgs<"getSpeechandtextanalyticsTopicsPublishjob">): Promise<GenesysCloudFullApiOperationResponseMap["getSpeechandtextanalyticsTopicsPublishjob"]>;
  GetSpeechandtextanalyticsTopicsTestphraseJob(...args: GenesysCloudFullApiOperationArgs<"getSpeechandtextanalyticsTopicsTestphraseJob">): Promise<GenesysCloudFullApiOperationResponseMap["getSpeechandtextanalyticsTopicsTestphraseJob"]>;
  GetSpeechandtextanalyticsTranslationsLanguageConversation(...args: GenesysCloudFullApiOperationArgs<"getSpeechandtextanalyticsTranslationsLanguageConversation">): Promise<GenesysCloudFullApiOperationResponseMap["getSpeechandtextanalyticsTranslationsLanguageConversation"]>;
  GetSpeechandtextanalyticsTranslationsLanguages(...args: GenesysCloudFullApiOperationArgs<"getSpeechandtextanalyticsTranslationsLanguages">): Promise<GenesysCloudFullApiOperationResponseMap["getSpeechandtextanalyticsTranslationsLanguages"]>;
  PatchSpeechandtextanalyticsSettings(...args: GenesysCloudFullApiOperationArgs<"patchSpeechandtextanalyticsSettings">): Promise<GenesysCloudFullApiOperationResponseMap["patchSpeechandtextanalyticsSettings"]>;
  PostSpeechandtextanalyticsCategories(...args: GenesysCloudFullApiOperationArgs<"postSpeechandtextanalyticsCategories">): Promise<GenesysCloudFullApiOperationResponseMap["postSpeechandtextanalyticsCategories"]>;
  PostSpeechandtextanalyticsDictionaryfeedback(...args: GenesysCloudFullApiOperationArgs<"postSpeechandtextanalyticsDictionaryfeedback">): Promise<GenesysCloudFullApiOperationResponseMap["postSpeechandtextanalyticsDictionaryfeedback"]>;
  PostSpeechandtextanalyticsPrograms(...args: GenesysCloudFullApiOperationArgs<"postSpeechandtextanalyticsPrograms">): Promise<GenesysCloudFullApiOperationResponseMap["postSpeechandtextanalyticsPrograms"]>;
  PostSpeechandtextanalyticsProgramsGeneralJobs(...args: GenesysCloudFullApiOperationArgs<"postSpeechandtextanalyticsProgramsGeneralJobs">): Promise<GenesysCloudFullApiOperationResponseMap["postSpeechandtextanalyticsProgramsGeneralJobs"]>;
  PostSpeechandtextanalyticsProgramsPublishjobs(...args: GenesysCloudFullApiOperationArgs<"postSpeechandtextanalyticsProgramsPublishjobs">): Promise<GenesysCloudFullApiOperationResponseMap["postSpeechandtextanalyticsProgramsPublishjobs"]>;
  PostSpeechandtextanalyticsSentimentfeedback(...args: GenesysCloudFullApiOperationArgs<"postSpeechandtextanalyticsSentimentfeedback">): Promise<GenesysCloudFullApiOperationResponseMap["postSpeechandtextanalyticsSentimentfeedback"]>;
  PostSpeechandtextanalyticsTopics(...args: GenesysCloudFullApiOperationArgs<"postSpeechandtextanalyticsTopics">): Promise<GenesysCloudFullApiOperationResponseMap["postSpeechandtextanalyticsTopics"]>;
  PostSpeechandtextanalyticsTopicsPublishjobs(...args: GenesysCloudFullApiOperationArgs<"postSpeechandtextanalyticsTopicsPublishjobs">): Promise<GenesysCloudFullApiOperationResponseMap["postSpeechandtextanalyticsTopicsPublishjobs"]>;
  PostSpeechandtextanalyticsTopicsTestphraseJobs(...args: GenesysCloudFullApiOperationArgs<"postSpeechandtextanalyticsTopicsTestphraseJobs">): Promise<GenesysCloudFullApiOperationResponseMap["postSpeechandtextanalyticsTopicsTestphraseJobs"]>;
  PutSpeechandtextanalyticsCategory(...args: GenesysCloudFullApiOperationArgs<"putSpeechandtextanalyticsCategory">): Promise<GenesysCloudFullApiOperationResponseMap["putSpeechandtextanalyticsCategory"]>;
  PutSpeechandtextanalyticsDictionaryfeedbackDictionaryFeedbackId(...args: GenesysCloudFullApiOperationArgs<"putSpeechandtextanalyticsDictionaryfeedbackDictionaryFeedbackId">): Promise<GenesysCloudFullApiOperationResponseMap["putSpeechandtextanalyticsDictionaryfeedbackDictionaryFeedbackId"]>;
  PutSpeechandtextanalyticsProgram(...args: GenesysCloudFullApiOperationArgs<"putSpeechandtextanalyticsProgram">): Promise<GenesysCloudFullApiOperationResponseMap["putSpeechandtextanalyticsProgram"]>;
  PutSpeechandtextanalyticsProgramMappings(...args: GenesysCloudFullApiOperationArgs<"putSpeechandtextanalyticsProgramMappings">): Promise<GenesysCloudFullApiOperationResponseMap["putSpeechandtextanalyticsProgramMappings"]>;
  PutSpeechandtextanalyticsProgramSettingsInsights(...args: GenesysCloudFullApiOperationArgs<"putSpeechandtextanalyticsProgramSettingsInsights">): Promise<GenesysCloudFullApiOperationResponseMap["putSpeechandtextanalyticsProgramSettingsInsights"]>;
  PutSpeechandtextanalyticsProgramTranscriptionengines(...args: GenesysCloudFullApiOperationArgs<"putSpeechandtextanalyticsProgramTranscriptionengines">): Promise<GenesysCloudFullApiOperationResponseMap["putSpeechandtextanalyticsProgramTranscriptionengines"]>;
  PutSpeechandtextanalyticsSettings(...args: GenesysCloudFullApiOperationArgs<"putSpeechandtextanalyticsSettings">): Promise<GenesysCloudFullApiOperationResponseMap["putSpeechandtextanalyticsSettings"]>;
  PutSpeechandtextanalyticsTopic(...args: GenesysCloudFullApiOperationArgs<"putSpeechandtextanalyticsTopic">): Promise<GenesysCloudFullApiOperationResponseMap["putSpeechandtextanalyticsTopic"]>;
}

export const GenesysCloudFullApiSpeechTextAnalyticsGeneratedFunctionNames = [
  "DeleteSpeechandtextanalyticsCategory",
  "DeleteSpeechandtextanalyticsDictionaryfeedbackDictionaryFeedbackId",
  "DeleteSpeechandtextanalyticsProgram",
  "DeleteSpeechandtextanalyticsSentimentfeedback",
  "DeleteSpeechandtextanalyticsSentimentfeedbackSentimentFeedbackId",
  "DeleteSpeechandtextanalyticsTopic",
  "GetSpeechandtextanalyticsCategories",
  "GetSpeechandtextanalyticsCategory",
  "GetSpeechandtextanalyticsConversation",
  "GetSpeechandtextanalyticsConversationCategories",
  "GetSpeechandtextanalyticsConversationCommunicationTranscripturl",
  "GetSpeechandtextanalyticsConversationCommunicationTranscripturls",
  "GetSpeechandtextanalyticsConversationSentiments",
  "GetSpeechandtextanalyticsConversationSummaries",
  "GetSpeechandtextanalyticsDictionaryfeedback",
  "GetSpeechandtextanalyticsDictionaryfeedbackDictionaryFeedbackId",
  "GetSpeechandtextanalyticsProgram",
  "GetSpeechandtextanalyticsProgramMappings",
  "GetSpeechandtextanalyticsPrograms",
  "GetSpeechandtextanalyticsProgramSettingsInsights",
  "GetSpeechandtextanalyticsProgramsGeneralJob",
  "GetSpeechandtextanalyticsProgramsMappings",
  "GetSpeechandtextanalyticsProgramsPublishjob",
  "GetSpeechandtextanalyticsProgramsSettingsInsights",
  "GetSpeechandtextanalyticsProgramsTopiclinksJob",
  "GetSpeechandtextanalyticsProgramsTranscriptionenginesDialects",
  "GetSpeechandtextanalyticsProgramsUnpublished",
  "GetSpeechandtextanalyticsProgramTranscriptionengines",
  "GetSpeechandtextanalyticsSentimentDialects",
  "GetSpeechandtextanalyticsSentimentfeedback",
  "GetSpeechandtextanalyticsSettings",
  "GetSpeechandtextanalyticsTopic",
  "GetSpeechandtextanalyticsTopics",
  "GetSpeechandtextanalyticsTopicsDialects",
  "GetSpeechandtextanalyticsTopicsGeneral",
  "GetSpeechandtextanalyticsTopicsGeneralStatus",
  "GetSpeechandtextanalyticsTopicsPublishjob",
  "GetSpeechandtextanalyticsTopicsTestphraseJob",
  "GetSpeechandtextanalyticsTranslationsLanguageConversation",
  "GetSpeechandtextanalyticsTranslationsLanguages",
  "PatchSpeechandtextanalyticsSettings",
  "PostSpeechandtextanalyticsCategories",
  "PostSpeechandtextanalyticsDictionaryfeedback",
  "PostSpeechandtextanalyticsPrograms",
  "PostSpeechandtextanalyticsProgramsGeneralJobs",
  "PostSpeechandtextanalyticsProgramsPublishjobs",
  "PostSpeechandtextanalyticsSentimentfeedback",
  "PostSpeechandtextanalyticsTopics",
  "PostSpeechandtextanalyticsTopicsPublishjobs",
  "PostSpeechandtextanalyticsTopicsTestphraseJobs",
  "PutSpeechandtextanalyticsCategory",
  "PutSpeechandtextanalyticsDictionaryfeedbackDictionaryFeedbackId",
  "PutSpeechandtextanalyticsProgram",
  "PutSpeechandtextanalyticsProgramMappings",
  "PutSpeechandtextanalyticsProgramSettingsInsights",
  "PutSpeechandtextanalyticsProgramTranscriptionengines",
  "PutSpeechandtextanalyticsSettings",
  "PutSpeechandtextanalyticsTopic"
] as const satisfies readonly (keyof GenesysCloudFullApiSpeechTextAnalyticsGeneratedClient)[];

export function createGenesysCloudFullApiSpeechTextAnalyticsGeneratedClient(
  callOperation: GenesysCloudGeneratedOperationCaller,
): GenesysCloudFullApiSpeechTextAnalyticsGeneratedClient {
  return {
    DeleteSpeechandtextanalyticsCategory: (...args) => callOperation("deleteSpeechandtextanalyticsCategory", ...(args as GenesysCloudFullApiOperationArgs<"deleteSpeechandtextanalyticsCategory">)),
    DeleteSpeechandtextanalyticsDictionaryfeedbackDictionaryFeedbackId: (...args) => callOperation("deleteSpeechandtextanalyticsDictionaryfeedbackDictionaryFeedbackId", ...(args as GenesysCloudFullApiOperationArgs<"deleteSpeechandtextanalyticsDictionaryfeedbackDictionaryFeedbackId">)),
    DeleteSpeechandtextanalyticsProgram: (...args) => callOperation("deleteSpeechandtextanalyticsProgram", ...(args as GenesysCloudFullApiOperationArgs<"deleteSpeechandtextanalyticsProgram">)),
    DeleteSpeechandtextanalyticsSentimentfeedback: (...args) => callOperation("deleteSpeechandtextanalyticsSentimentfeedback", ...(args as GenesysCloudFullApiOperationArgs<"deleteSpeechandtextanalyticsSentimentfeedback">)),
    DeleteSpeechandtextanalyticsSentimentfeedbackSentimentFeedbackId: (...args) => callOperation("deleteSpeechandtextanalyticsSentimentfeedbackSentimentFeedbackId", ...(args as GenesysCloudFullApiOperationArgs<"deleteSpeechandtextanalyticsSentimentfeedbackSentimentFeedbackId">)),
    DeleteSpeechandtextanalyticsTopic: (...args) => callOperation("deleteSpeechandtextanalyticsTopic", ...(args as GenesysCloudFullApiOperationArgs<"deleteSpeechandtextanalyticsTopic">)),
    GetSpeechandtextanalyticsCategories: (...args) => callOperation("getSpeechandtextanalyticsCategories", ...(args as GenesysCloudFullApiOperationArgs<"getSpeechandtextanalyticsCategories">)),
    GetSpeechandtextanalyticsCategory: (...args) => callOperation("getSpeechandtextanalyticsCategory", ...(args as GenesysCloudFullApiOperationArgs<"getSpeechandtextanalyticsCategory">)),
    GetSpeechandtextanalyticsConversation: (...args) => callOperation("getSpeechandtextanalyticsConversation", ...(args as GenesysCloudFullApiOperationArgs<"getSpeechandtextanalyticsConversation">)),
    GetSpeechandtextanalyticsConversationCategories: (...args) => callOperation("getSpeechandtextanalyticsConversationCategories", ...(args as GenesysCloudFullApiOperationArgs<"getSpeechandtextanalyticsConversationCategories">)),
    GetSpeechandtextanalyticsConversationCommunicationTranscripturl: (...args) => callOperation("getSpeechandtextanalyticsConversationCommunicationTranscripturl", ...(args as GenesysCloudFullApiOperationArgs<"getSpeechandtextanalyticsConversationCommunicationTranscripturl">)),
    GetSpeechandtextanalyticsConversationCommunicationTranscripturls: (...args) => callOperation("getSpeechandtextanalyticsConversationCommunicationTranscripturls", ...(args as GenesysCloudFullApiOperationArgs<"getSpeechandtextanalyticsConversationCommunicationTranscripturls">)),
    GetSpeechandtextanalyticsConversationSentiments: (...args) => callOperation("getSpeechandtextanalyticsConversationSentiments", ...(args as GenesysCloudFullApiOperationArgs<"getSpeechandtextanalyticsConversationSentiments">)),
    GetSpeechandtextanalyticsConversationSummaries: (...args) => callOperation("getSpeechandtextanalyticsConversationSummaries", ...(args as GenesysCloudFullApiOperationArgs<"getSpeechandtextanalyticsConversationSummaries">)),
    GetSpeechandtextanalyticsDictionaryfeedback: (...args) => callOperation("getSpeechandtextanalyticsDictionaryfeedback", ...(args as GenesysCloudFullApiOperationArgs<"getSpeechandtextanalyticsDictionaryfeedback">)),
    GetSpeechandtextanalyticsDictionaryfeedbackDictionaryFeedbackId: (...args) => callOperation("getSpeechandtextanalyticsDictionaryfeedbackDictionaryFeedbackId", ...(args as GenesysCloudFullApiOperationArgs<"getSpeechandtextanalyticsDictionaryfeedbackDictionaryFeedbackId">)),
    GetSpeechandtextanalyticsProgram: (...args) => callOperation("getSpeechandtextanalyticsProgram", ...(args as GenesysCloudFullApiOperationArgs<"getSpeechandtextanalyticsProgram">)),
    GetSpeechandtextanalyticsProgramMappings: (...args) => callOperation("getSpeechandtextanalyticsProgramMappings", ...(args as GenesysCloudFullApiOperationArgs<"getSpeechandtextanalyticsProgramMappings">)),
    GetSpeechandtextanalyticsPrograms: (...args) => callOperation("getSpeechandtextanalyticsPrograms", ...(args as GenesysCloudFullApiOperationArgs<"getSpeechandtextanalyticsPrograms">)),
    GetSpeechandtextanalyticsProgramSettingsInsights: (...args) => callOperation("getSpeechandtextanalyticsProgramSettingsInsights", ...(args as GenesysCloudFullApiOperationArgs<"getSpeechandtextanalyticsProgramSettingsInsights">)),
    GetSpeechandtextanalyticsProgramsGeneralJob: (...args) => callOperation("getSpeechandtextanalyticsProgramsGeneralJob", ...(args as GenesysCloudFullApiOperationArgs<"getSpeechandtextanalyticsProgramsGeneralJob">)),
    GetSpeechandtextanalyticsProgramsMappings: (...args) => callOperation("getSpeechandtextanalyticsProgramsMappings", ...(args as GenesysCloudFullApiOperationArgs<"getSpeechandtextanalyticsProgramsMappings">)),
    GetSpeechandtextanalyticsProgramsPublishjob: (...args) => callOperation("getSpeechandtextanalyticsProgramsPublishjob", ...(args as GenesysCloudFullApiOperationArgs<"getSpeechandtextanalyticsProgramsPublishjob">)),
    GetSpeechandtextanalyticsProgramsSettingsInsights: (...args) => callOperation("getSpeechandtextanalyticsProgramsSettingsInsights", ...(args as GenesysCloudFullApiOperationArgs<"getSpeechandtextanalyticsProgramsSettingsInsights">)),
    GetSpeechandtextanalyticsProgramsTopiclinksJob: (...args) => callOperation("getSpeechandtextanalyticsProgramsTopiclinksJob", ...(args as GenesysCloudFullApiOperationArgs<"getSpeechandtextanalyticsProgramsTopiclinksJob">)),
    GetSpeechandtextanalyticsProgramsTranscriptionenginesDialects: (...args) => callOperation("getSpeechandtextanalyticsProgramsTranscriptionenginesDialects", ...(args as GenesysCloudFullApiOperationArgs<"getSpeechandtextanalyticsProgramsTranscriptionenginesDialects">)),
    GetSpeechandtextanalyticsProgramsUnpublished: (...args) => callOperation("getSpeechandtextanalyticsProgramsUnpublished", ...(args as GenesysCloudFullApiOperationArgs<"getSpeechandtextanalyticsProgramsUnpublished">)),
    GetSpeechandtextanalyticsProgramTranscriptionengines: (...args) => callOperation("getSpeechandtextanalyticsProgramTranscriptionengines", ...(args as GenesysCloudFullApiOperationArgs<"getSpeechandtextanalyticsProgramTranscriptionengines">)),
    GetSpeechandtextanalyticsSentimentDialects: (...args) => callOperation("getSpeechandtextanalyticsSentimentDialects", ...(args as GenesysCloudFullApiOperationArgs<"getSpeechandtextanalyticsSentimentDialects">)),
    GetSpeechandtextanalyticsSentimentfeedback: (...args) => callOperation("getSpeechandtextanalyticsSentimentfeedback", ...(args as GenesysCloudFullApiOperationArgs<"getSpeechandtextanalyticsSentimentfeedback">)),
    GetSpeechandtextanalyticsSettings: (...args) => callOperation("getSpeechandtextanalyticsSettings", ...(args as GenesysCloudFullApiOperationArgs<"getSpeechandtextanalyticsSettings">)),
    GetSpeechandtextanalyticsTopic: (...args) => callOperation("getSpeechandtextanalyticsTopic", ...(args as GenesysCloudFullApiOperationArgs<"getSpeechandtextanalyticsTopic">)),
    GetSpeechandtextanalyticsTopics: (...args) => callOperation("getSpeechandtextanalyticsTopics", ...(args as GenesysCloudFullApiOperationArgs<"getSpeechandtextanalyticsTopics">)),
    GetSpeechandtextanalyticsTopicsDialects: (...args) => callOperation("getSpeechandtextanalyticsTopicsDialects", ...(args as GenesysCloudFullApiOperationArgs<"getSpeechandtextanalyticsTopicsDialects">)),
    GetSpeechandtextanalyticsTopicsGeneral: (...args) => callOperation("getSpeechandtextanalyticsTopicsGeneral", ...(args as GenesysCloudFullApiOperationArgs<"getSpeechandtextanalyticsTopicsGeneral">)),
    GetSpeechandtextanalyticsTopicsGeneralStatus: (...args) => callOperation("getSpeechandtextanalyticsTopicsGeneralStatus", ...(args as GenesysCloudFullApiOperationArgs<"getSpeechandtextanalyticsTopicsGeneralStatus">)),
    GetSpeechandtextanalyticsTopicsPublishjob: (...args) => callOperation("getSpeechandtextanalyticsTopicsPublishjob", ...(args as GenesysCloudFullApiOperationArgs<"getSpeechandtextanalyticsTopicsPublishjob">)),
    GetSpeechandtextanalyticsTopicsTestphraseJob: (...args) => callOperation("getSpeechandtextanalyticsTopicsTestphraseJob", ...(args as GenesysCloudFullApiOperationArgs<"getSpeechandtextanalyticsTopicsTestphraseJob">)),
    GetSpeechandtextanalyticsTranslationsLanguageConversation: (...args) => callOperation("getSpeechandtextanalyticsTranslationsLanguageConversation", ...(args as GenesysCloudFullApiOperationArgs<"getSpeechandtextanalyticsTranslationsLanguageConversation">)),
    GetSpeechandtextanalyticsTranslationsLanguages: (...args) => callOperation("getSpeechandtextanalyticsTranslationsLanguages", ...(args as GenesysCloudFullApiOperationArgs<"getSpeechandtextanalyticsTranslationsLanguages">)),
    PatchSpeechandtextanalyticsSettings: (...args) => callOperation("patchSpeechandtextanalyticsSettings", ...(args as GenesysCloudFullApiOperationArgs<"patchSpeechandtextanalyticsSettings">)),
    PostSpeechandtextanalyticsCategories: (...args) => callOperation("postSpeechandtextanalyticsCategories", ...(args as GenesysCloudFullApiOperationArgs<"postSpeechandtextanalyticsCategories">)),
    PostSpeechandtextanalyticsDictionaryfeedback: (...args) => callOperation("postSpeechandtextanalyticsDictionaryfeedback", ...(args as GenesysCloudFullApiOperationArgs<"postSpeechandtextanalyticsDictionaryfeedback">)),
    PostSpeechandtextanalyticsPrograms: (...args) => callOperation("postSpeechandtextanalyticsPrograms", ...(args as GenesysCloudFullApiOperationArgs<"postSpeechandtextanalyticsPrograms">)),
    PostSpeechandtextanalyticsProgramsGeneralJobs: (...args) => callOperation("postSpeechandtextanalyticsProgramsGeneralJobs", ...(args as GenesysCloudFullApiOperationArgs<"postSpeechandtextanalyticsProgramsGeneralJobs">)),
    PostSpeechandtextanalyticsProgramsPublishjobs: (...args) => callOperation("postSpeechandtextanalyticsProgramsPublishjobs", ...(args as GenesysCloudFullApiOperationArgs<"postSpeechandtextanalyticsProgramsPublishjobs">)),
    PostSpeechandtextanalyticsSentimentfeedback: (...args) => callOperation("postSpeechandtextanalyticsSentimentfeedback", ...(args as GenesysCloudFullApiOperationArgs<"postSpeechandtextanalyticsSentimentfeedback">)),
    PostSpeechandtextanalyticsTopics: (...args) => callOperation("postSpeechandtextanalyticsTopics", ...(args as GenesysCloudFullApiOperationArgs<"postSpeechandtextanalyticsTopics">)),
    PostSpeechandtextanalyticsTopicsPublishjobs: (...args) => callOperation("postSpeechandtextanalyticsTopicsPublishjobs", ...(args as GenesysCloudFullApiOperationArgs<"postSpeechandtextanalyticsTopicsPublishjobs">)),
    PostSpeechandtextanalyticsTopicsTestphraseJobs: (...args) => callOperation("postSpeechandtextanalyticsTopicsTestphraseJobs", ...(args as GenesysCloudFullApiOperationArgs<"postSpeechandtextanalyticsTopicsTestphraseJobs">)),
    PutSpeechandtextanalyticsCategory: (...args) => callOperation("putSpeechandtextanalyticsCategory", ...(args as GenesysCloudFullApiOperationArgs<"putSpeechandtextanalyticsCategory">)),
    PutSpeechandtextanalyticsDictionaryfeedbackDictionaryFeedbackId: (...args) => callOperation("putSpeechandtextanalyticsDictionaryfeedbackDictionaryFeedbackId", ...(args as GenesysCloudFullApiOperationArgs<"putSpeechandtextanalyticsDictionaryfeedbackDictionaryFeedbackId">)),
    PutSpeechandtextanalyticsProgram: (...args) => callOperation("putSpeechandtextanalyticsProgram", ...(args as GenesysCloudFullApiOperationArgs<"putSpeechandtextanalyticsProgram">)),
    PutSpeechandtextanalyticsProgramMappings: (...args) => callOperation("putSpeechandtextanalyticsProgramMappings", ...(args as GenesysCloudFullApiOperationArgs<"putSpeechandtextanalyticsProgramMappings">)),
    PutSpeechandtextanalyticsProgramSettingsInsights: (...args) => callOperation("putSpeechandtextanalyticsProgramSettingsInsights", ...(args as GenesysCloudFullApiOperationArgs<"putSpeechandtextanalyticsProgramSettingsInsights">)),
    PutSpeechandtextanalyticsProgramTranscriptionengines: (...args) => callOperation("putSpeechandtextanalyticsProgramTranscriptionengines", ...(args as GenesysCloudFullApiOperationArgs<"putSpeechandtextanalyticsProgramTranscriptionengines">)),
    PutSpeechandtextanalyticsSettings: (...args) => callOperation("putSpeechandtextanalyticsSettings", ...(args as GenesysCloudFullApiOperationArgs<"putSpeechandtextanalyticsSettings">)),
    PutSpeechandtextanalyticsTopic: (...args) => callOperation("putSpeechandtextanalyticsTopic", ...(args as GenesysCloudFullApiOperationArgs<"putSpeechandtextanalyticsTopic">)),
  };
}
