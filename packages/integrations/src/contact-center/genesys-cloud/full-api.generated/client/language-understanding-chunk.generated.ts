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
export const GenesysCloudFullApiLanguageUnderstandingOperationKeys = [
  "deleteLanguageunderstandingDomain",
  "deleteLanguageunderstandingDomainFeedbackFeedbackId",
  "deleteLanguageunderstandingDomainVersion",
  "deleteLanguageunderstandingMiner",
  "deleteLanguageunderstandingMinerDraft",
  "getLanguageunderstandingDomain",
  "getLanguageunderstandingDomainFeedback",
  "getLanguageunderstandingDomainFeedbackFeedbackId",
  "getLanguageunderstandingDomains",
  "getLanguageunderstandingDomainVersion",
  "getLanguageunderstandingDomainVersionReport",
  "getLanguageunderstandingDomainVersions",
  "getLanguageunderstandingIgnorephrase",
  "getLanguageunderstandingIgnoretopic",
  "getLanguageunderstandingMiner",
  "getLanguageunderstandingMinerDraft",
  "getLanguageunderstandingMinerDrafts",
  "getLanguageunderstandingMinerIntent",
  "getLanguageunderstandingMinerIntents",
  "getLanguageunderstandingMiners",
  "getLanguageunderstandingMinerTopic",
  "getLanguageunderstandingMinerTopicPhrase",
  "getLanguageunderstandingMinerTopics",
  "getLanguageunderstandingSettings",
  "patchLanguageunderstandingDomain",
  "patchLanguageunderstandingMinerDraft",
  "postLanguageunderstandingDomainFeedback",
  "postLanguageunderstandingDomains",
  "postLanguageunderstandingDomainVersionDetect",
  "postLanguageunderstandingDomainVersionPublish",
  "postLanguageunderstandingDomainVersions",
  "postLanguageunderstandingDomainVersionTrain",
  "postLanguageunderstandingIgnorephrase",
  "postLanguageunderstandingIgnorephraseRemove",
  "postLanguageunderstandingIgnoretopic",
  "postLanguageunderstandingIgnoretopicRemove",
  "postLanguageunderstandingMinerDrafts",
  "postLanguageunderstandingMinerExecute",
  "postLanguageunderstandingMiners",
  "putLanguageunderstandingDomainVersion"
] as const;
export type GenesysCloudFullApiLanguageUnderstandingOperationKey = typeof GenesysCloudFullApiLanguageUnderstandingOperationKeys[number];
// End hardened literal operation keys.

export interface GenesysCloudFullApiLanguageUnderstandingOperationPathParamMap {
  "deleteLanguageunderstandingDomain": { "domainId": GenesysCloudFullApiPathParamValue };
  "deleteLanguageunderstandingDomainFeedbackFeedbackId": { "domainId": GenesysCloudFullApiPathParamValue; "feedbackId": GenesysCloudFullApiPathParamValue };
  "deleteLanguageunderstandingDomainVersion": { "domainId": GenesysCloudFullApiPathParamValue; "domainVersionId": GenesysCloudFullApiPathParamValue };
  "deleteLanguageunderstandingMiner": { "minerId": GenesysCloudFullApiPathParamValue };
  "deleteLanguageunderstandingMinerDraft": { "minerId": GenesysCloudFullApiPathParamValue; "draftId": GenesysCloudFullApiPathParamValue };
  "getLanguageunderstandingDomain": { "domainId": GenesysCloudFullApiPathParamValue };
  "getLanguageunderstandingDomainFeedback": { "domainId": GenesysCloudFullApiPathParamValue };
  "getLanguageunderstandingDomainFeedbackFeedbackId": { "domainId": GenesysCloudFullApiPathParamValue; "feedbackId": GenesysCloudFullApiPathParamValue };
  "getLanguageunderstandingDomains": {};
  "getLanguageunderstandingDomainVersion": { "domainId": GenesysCloudFullApiPathParamValue; "domainVersionId": GenesysCloudFullApiPathParamValue };
  "getLanguageunderstandingDomainVersionReport": { "domainId": GenesysCloudFullApiPathParamValue; "domainVersionId": GenesysCloudFullApiPathParamValue };
  "getLanguageunderstandingDomainVersions": { "domainId": GenesysCloudFullApiPathParamValue };
  "getLanguageunderstandingIgnorephrase": { "languageCode": GenesysCloudFullApiPathParamValue };
  "getLanguageunderstandingIgnoretopic": { "languageCode": GenesysCloudFullApiPathParamValue };
  "getLanguageunderstandingMiner": { "minerId": GenesysCloudFullApiPathParamValue };
  "getLanguageunderstandingMinerDraft": { "minerId": GenesysCloudFullApiPathParamValue; "draftId": GenesysCloudFullApiPathParamValue };
  "getLanguageunderstandingMinerDrafts": { "minerId": GenesysCloudFullApiPathParamValue };
  "getLanguageunderstandingMinerIntent": { "minerId": GenesysCloudFullApiPathParamValue; "intentId": GenesysCloudFullApiPathParamValue };
  "getLanguageunderstandingMinerIntents": { "minerId": GenesysCloudFullApiPathParamValue };
  "getLanguageunderstandingMiners": {};
  "getLanguageunderstandingMinerTopic": { "minerId": GenesysCloudFullApiPathParamValue; "topicId": GenesysCloudFullApiPathParamValue };
  "getLanguageunderstandingMinerTopicPhrase": { "minerId": GenesysCloudFullApiPathParamValue; "topicId": GenesysCloudFullApiPathParamValue; "phraseId": GenesysCloudFullApiPathParamValue };
  "getLanguageunderstandingMinerTopics": { "minerId": GenesysCloudFullApiPathParamValue };
  "getLanguageunderstandingSettings": {};
  "patchLanguageunderstandingDomain": { "domainId": GenesysCloudFullApiPathParamValue };
  "patchLanguageunderstandingMinerDraft": { "minerId": GenesysCloudFullApiPathParamValue; "draftId": GenesysCloudFullApiPathParamValue };
  "postLanguageunderstandingDomainFeedback": { "domainId": GenesysCloudFullApiPathParamValue };
  "postLanguageunderstandingDomains": {};
  "postLanguageunderstandingDomainVersionDetect": { "domainId": GenesysCloudFullApiPathParamValue; "domainVersionId": GenesysCloudFullApiPathParamValue };
  "postLanguageunderstandingDomainVersionPublish": { "domainId": GenesysCloudFullApiPathParamValue; "domainVersionId": GenesysCloudFullApiPathParamValue };
  "postLanguageunderstandingDomainVersions": { "domainId": GenesysCloudFullApiPathParamValue };
  "postLanguageunderstandingDomainVersionTrain": { "domainId": GenesysCloudFullApiPathParamValue; "domainVersionId": GenesysCloudFullApiPathParamValue };
  "postLanguageunderstandingIgnorephrase": { "languageCode": GenesysCloudFullApiPathParamValue };
  "postLanguageunderstandingIgnorephraseRemove": { "languageCode": GenesysCloudFullApiPathParamValue };
  "postLanguageunderstandingIgnoretopic": { "languageCode": GenesysCloudFullApiPathParamValue };
  "postLanguageunderstandingIgnoretopicRemove": { "languageCode": GenesysCloudFullApiPathParamValue };
  "postLanguageunderstandingMinerDrafts": { "minerId": GenesysCloudFullApiPathParamValue };
  "postLanguageunderstandingMinerExecute": { "minerId": GenesysCloudFullApiPathParamValue };
  "postLanguageunderstandingMiners": {};
  "putLanguageunderstandingDomainVersion": { "domainId": GenesysCloudFullApiPathParamValue; "domainVersionId": GenesysCloudFullApiPathParamValue };
}

export interface GenesysCloudFullApiLanguageUnderstandingOperationRequestMap {
  "deleteLanguageunderstandingDomain": GenesysCloudFullApiOperationInput<"deleteLanguageunderstandingDomain">;
  "deleteLanguageunderstandingDomainFeedbackFeedbackId": GenesysCloudFullApiOperationInput<"deleteLanguageunderstandingDomainFeedbackFeedbackId">;
  "deleteLanguageunderstandingDomainVersion": GenesysCloudFullApiOperationInput<"deleteLanguageunderstandingDomainVersion">;
  "deleteLanguageunderstandingMiner": GenesysCloudFullApiOperationInput<"deleteLanguageunderstandingMiner">;
  "deleteLanguageunderstandingMinerDraft": GenesysCloudFullApiOperationInput<"deleteLanguageunderstandingMinerDraft">;
  "getLanguageunderstandingDomain": GenesysCloudFullApiOperationInput<"getLanguageunderstandingDomain">;
  "getLanguageunderstandingDomainFeedback": GenesysCloudFullApiOperationInput<"getLanguageunderstandingDomainFeedback">;
  "getLanguageunderstandingDomainFeedbackFeedbackId": GenesysCloudFullApiOperationInput<"getLanguageunderstandingDomainFeedbackFeedbackId">;
  "getLanguageunderstandingDomains": GenesysCloudFullApiOperationInput<"getLanguageunderstandingDomains">;
  "getLanguageunderstandingDomainVersion": GenesysCloudFullApiOperationInput<"getLanguageunderstandingDomainVersion">;
  "getLanguageunderstandingDomainVersionReport": GenesysCloudFullApiOperationInput<"getLanguageunderstandingDomainVersionReport">;
  "getLanguageunderstandingDomainVersions": GenesysCloudFullApiOperationInput<"getLanguageunderstandingDomainVersions">;
  "getLanguageunderstandingIgnorephrase": GenesysCloudFullApiOperationInput<"getLanguageunderstandingIgnorephrase">;
  "getLanguageunderstandingIgnoretopic": GenesysCloudFullApiOperationInput<"getLanguageunderstandingIgnoretopic">;
  "getLanguageunderstandingMiner": GenesysCloudFullApiOperationInput<"getLanguageunderstandingMiner">;
  "getLanguageunderstandingMinerDraft": GenesysCloudFullApiOperationInput<"getLanguageunderstandingMinerDraft">;
  "getLanguageunderstandingMinerDrafts": GenesysCloudFullApiOperationInput<"getLanguageunderstandingMinerDrafts">;
  "getLanguageunderstandingMinerIntent": GenesysCloudFullApiOperationInput<"getLanguageunderstandingMinerIntent">;
  "getLanguageunderstandingMinerIntents": GenesysCloudFullApiOperationInput<"getLanguageunderstandingMinerIntents">;
  "getLanguageunderstandingMiners": GenesysCloudFullApiOperationInput<"getLanguageunderstandingMiners">;
  "getLanguageunderstandingMinerTopic": GenesysCloudFullApiOperationInput<"getLanguageunderstandingMinerTopic">;
  "getLanguageunderstandingMinerTopicPhrase": GenesysCloudFullApiOperationInput<"getLanguageunderstandingMinerTopicPhrase">;
  "getLanguageunderstandingMinerTopics": GenesysCloudFullApiOperationInput<"getLanguageunderstandingMinerTopics">;
  "getLanguageunderstandingSettings": GenesysCloudFullApiOperationInput<"getLanguageunderstandingSettings">;
  "patchLanguageunderstandingDomain": GenesysCloudFullApiOperationInput<"patchLanguageunderstandingDomain">;
  "patchLanguageunderstandingMinerDraft": GenesysCloudFullApiOperationInput<"patchLanguageunderstandingMinerDraft">;
  "postLanguageunderstandingDomainFeedback": GenesysCloudFullApiOperationInput<"postLanguageunderstandingDomainFeedback">;
  "postLanguageunderstandingDomains": GenesysCloudFullApiOperationInput<"postLanguageunderstandingDomains">;
  "postLanguageunderstandingDomainVersionDetect": GenesysCloudFullApiOperationInput<"postLanguageunderstandingDomainVersionDetect">;
  "postLanguageunderstandingDomainVersionPublish": GenesysCloudFullApiOperationInput<"postLanguageunderstandingDomainVersionPublish">;
  "postLanguageunderstandingDomainVersions": GenesysCloudFullApiOperationInput<"postLanguageunderstandingDomainVersions">;
  "postLanguageunderstandingDomainVersionTrain": GenesysCloudFullApiOperationInput<"postLanguageunderstandingDomainVersionTrain">;
  "postLanguageunderstandingIgnorephrase": GenesysCloudFullApiOperationInput<"postLanguageunderstandingIgnorephrase">;
  "postLanguageunderstandingIgnorephraseRemove": GenesysCloudFullApiOperationInput<"postLanguageunderstandingIgnorephraseRemove">;
  "postLanguageunderstandingIgnoretopic": GenesysCloudFullApiOperationInput<"postLanguageunderstandingIgnoretopic">;
  "postLanguageunderstandingIgnoretopicRemove": GenesysCloudFullApiOperationInput<"postLanguageunderstandingIgnoretopicRemove">;
  "postLanguageunderstandingMinerDrafts": GenesysCloudFullApiOperationInput<"postLanguageunderstandingMinerDrafts">;
  "postLanguageunderstandingMinerExecute": GenesysCloudFullApiOperationInput<"postLanguageunderstandingMinerExecute">;
  "postLanguageunderstandingMiners": GenesysCloudFullApiOperationInput<"postLanguageunderstandingMiners">;
  "putLanguageunderstandingDomainVersion": GenesysCloudFullApiOperationInput<"putLanguageunderstandingDomainVersion">;
}

export interface GenesysCloudFullApiLanguageUnderstandingGeneratedClient {
  DeleteLanguageunderstandingDomain(...args: GenesysCloudFullApiOperationArgs<"deleteLanguageunderstandingDomain">): Promise<GenesysCloudFullApiOperationResponseMap["deleteLanguageunderstandingDomain"]>;
  DeleteLanguageunderstandingDomainFeedbackFeedbackId(...args: GenesysCloudFullApiOperationArgs<"deleteLanguageunderstandingDomainFeedbackFeedbackId">): Promise<GenesysCloudFullApiOperationResponseMap["deleteLanguageunderstandingDomainFeedbackFeedbackId"]>;
  DeleteLanguageunderstandingDomainVersion(...args: GenesysCloudFullApiOperationArgs<"deleteLanguageunderstandingDomainVersion">): Promise<GenesysCloudFullApiOperationResponseMap["deleteLanguageunderstandingDomainVersion"]>;
  DeleteLanguageunderstandingMiner(...args: GenesysCloudFullApiOperationArgs<"deleteLanguageunderstandingMiner">): Promise<GenesysCloudFullApiOperationResponseMap["deleteLanguageunderstandingMiner"]>;
  DeleteLanguageunderstandingMinerDraft(...args: GenesysCloudFullApiOperationArgs<"deleteLanguageunderstandingMinerDraft">): Promise<GenesysCloudFullApiOperationResponseMap["deleteLanguageunderstandingMinerDraft"]>;
  GetLanguageunderstandingDomain(...args: GenesysCloudFullApiOperationArgs<"getLanguageunderstandingDomain">): Promise<GenesysCloudFullApiOperationResponseMap["getLanguageunderstandingDomain"]>;
  GetLanguageunderstandingDomainFeedback(...args: GenesysCloudFullApiOperationArgs<"getLanguageunderstandingDomainFeedback">): Promise<GenesysCloudFullApiOperationResponseMap["getLanguageunderstandingDomainFeedback"]>;
  GetLanguageunderstandingDomainFeedbackFeedbackId(...args: GenesysCloudFullApiOperationArgs<"getLanguageunderstandingDomainFeedbackFeedbackId">): Promise<GenesysCloudFullApiOperationResponseMap["getLanguageunderstandingDomainFeedbackFeedbackId"]>;
  GetLanguageunderstandingDomains(...args: GenesysCloudFullApiOperationArgs<"getLanguageunderstandingDomains">): Promise<GenesysCloudFullApiOperationResponseMap["getLanguageunderstandingDomains"]>;
  GetLanguageunderstandingDomainVersion(...args: GenesysCloudFullApiOperationArgs<"getLanguageunderstandingDomainVersion">): Promise<GenesysCloudFullApiOperationResponseMap["getLanguageunderstandingDomainVersion"]>;
  GetLanguageunderstandingDomainVersionReport(...args: GenesysCloudFullApiOperationArgs<"getLanguageunderstandingDomainVersionReport">): Promise<GenesysCloudFullApiOperationResponseMap["getLanguageunderstandingDomainVersionReport"]>;
  GetLanguageunderstandingDomainVersions(...args: GenesysCloudFullApiOperationArgs<"getLanguageunderstandingDomainVersions">): Promise<GenesysCloudFullApiOperationResponseMap["getLanguageunderstandingDomainVersions"]>;
  GetLanguageunderstandingIgnorephrase(...args: GenesysCloudFullApiOperationArgs<"getLanguageunderstandingIgnorephrase">): Promise<GenesysCloudFullApiOperationResponseMap["getLanguageunderstandingIgnorephrase"]>;
  GetLanguageunderstandingIgnoretopic(...args: GenesysCloudFullApiOperationArgs<"getLanguageunderstandingIgnoretopic">): Promise<GenesysCloudFullApiOperationResponseMap["getLanguageunderstandingIgnoretopic"]>;
  GetLanguageunderstandingMiner(...args: GenesysCloudFullApiOperationArgs<"getLanguageunderstandingMiner">): Promise<GenesysCloudFullApiOperationResponseMap["getLanguageunderstandingMiner"]>;
  GetLanguageunderstandingMinerDraft(...args: GenesysCloudFullApiOperationArgs<"getLanguageunderstandingMinerDraft">): Promise<GenesysCloudFullApiOperationResponseMap["getLanguageunderstandingMinerDraft"]>;
  GetLanguageunderstandingMinerDrafts(...args: GenesysCloudFullApiOperationArgs<"getLanguageunderstandingMinerDrafts">): Promise<GenesysCloudFullApiOperationResponseMap["getLanguageunderstandingMinerDrafts"]>;
  GetLanguageunderstandingMinerIntent(...args: GenesysCloudFullApiOperationArgs<"getLanguageunderstandingMinerIntent">): Promise<GenesysCloudFullApiOperationResponseMap["getLanguageunderstandingMinerIntent"]>;
  GetLanguageunderstandingMinerIntents(...args: GenesysCloudFullApiOperationArgs<"getLanguageunderstandingMinerIntents">): Promise<GenesysCloudFullApiOperationResponseMap["getLanguageunderstandingMinerIntents"]>;
  GetLanguageunderstandingMiners(...args: GenesysCloudFullApiOperationArgs<"getLanguageunderstandingMiners">): Promise<GenesysCloudFullApiOperationResponseMap["getLanguageunderstandingMiners"]>;
  GetLanguageunderstandingMinerTopic(...args: GenesysCloudFullApiOperationArgs<"getLanguageunderstandingMinerTopic">): Promise<GenesysCloudFullApiOperationResponseMap["getLanguageunderstandingMinerTopic"]>;
  GetLanguageunderstandingMinerTopicPhrase(...args: GenesysCloudFullApiOperationArgs<"getLanguageunderstandingMinerTopicPhrase">): Promise<GenesysCloudFullApiOperationResponseMap["getLanguageunderstandingMinerTopicPhrase"]>;
  GetLanguageunderstandingMinerTopics(...args: GenesysCloudFullApiOperationArgs<"getLanguageunderstandingMinerTopics">): Promise<GenesysCloudFullApiOperationResponseMap["getLanguageunderstandingMinerTopics"]>;
  GetLanguageunderstandingSettings(...args: GenesysCloudFullApiOperationArgs<"getLanguageunderstandingSettings">): Promise<GenesysCloudFullApiOperationResponseMap["getLanguageunderstandingSettings"]>;
  PatchLanguageunderstandingDomain(...args: GenesysCloudFullApiOperationArgs<"patchLanguageunderstandingDomain">): Promise<GenesysCloudFullApiOperationResponseMap["patchLanguageunderstandingDomain"]>;
  PatchLanguageunderstandingMinerDraft(...args: GenesysCloudFullApiOperationArgs<"patchLanguageunderstandingMinerDraft">): Promise<GenesysCloudFullApiOperationResponseMap["patchLanguageunderstandingMinerDraft"]>;
  PostLanguageunderstandingDomainFeedback(...args: GenesysCloudFullApiOperationArgs<"postLanguageunderstandingDomainFeedback">): Promise<GenesysCloudFullApiOperationResponseMap["postLanguageunderstandingDomainFeedback"]>;
  PostLanguageunderstandingDomains(...args: GenesysCloudFullApiOperationArgs<"postLanguageunderstandingDomains">): Promise<GenesysCloudFullApiOperationResponseMap["postLanguageunderstandingDomains"]>;
  PostLanguageunderstandingDomainVersionDetect(...args: GenesysCloudFullApiOperationArgs<"postLanguageunderstandingDomainVersionDetect">): Promise<GenesysCloudFullApiOperationResponseMap["postLanguageunderstandingDomainVersionDetect"]>;
  PostLanguageunderstandingDomainVersionPublish(...args: GenesysCloudFullApiOperationArgs<"postLanguageunderstandingDomainVersionPublish">): Promise<GenesysCloudFullApiOperationResponseMap["postLanguageunderstandingDomainVersionPublish"]>;
  PostLanguageunderstandingDomainVersions(...args: GenesysCloudFullApiOperationArgs<"postLanguageunderstandingDomainVersions">): Promise<GenesysCloudFullApiOperationResponseMap["postLanguageunderstandingDomainVersions"]>;
  PostLanguageunderstandingDomainVersionTrain(...args: GenesysCloudFullApiOperationArgs<"postLanguageunderstandingDomainVersionTrain">): Promise<GenesysCloudFullApiOperationResponseMap["postLanguageunderstandingDomainVersionTrain"]>;
  PostLanguageunderstandingIgnorephrase(...args: GenesysCloudFullApiOperationArgs<"postLanguageunderstandingIgnorephrase">): Promise<GenesysCloudFullApiOperationResponseMap["postLanguageunderstandingIgnorephrase"]>;
  PostLanguageunderstandingIgnorephraseRemove(...args: GenesysCloudFullApiOperationArgs<"postLanguageunderstandingIgnorephraseRemove">): Promise<GenesysCloudFullApiOperationResponseMap["postLanguageunderstandingIgnorephraseRemove"]>;
  PostLanguageunderstandingIgnoretopic(...args: GenesysCloudFullApiOperationArgs<"postLanguageunderstandingIgnoretopic">): Promise<GenesysCloudFullApiOperationResponseMap["postLanguageunderstandingIgnoretopic"]>;
  PostLanguageunderstandingIgnoretopicRemove(...args: GenesysCloudFullApiOperationArgs<"postLanguageunderstandingIgnoretopicRemove">): Promise<GenesysCloudFullApiOperationResponseMap["postLanguageunderstandingIgnoretopicRemove"]>;
  PostLanguageunderstandingMinerDrafts(...args: GenesysCloudFullApiOperationArgs<"postLanguageunderstandingMinerDrafts">): Promise<GenesysCloudFullApiOperationResponseMap["postLanguageunderstandingMinerDrafts"]>;
  PostLanguageunderstandingMinerExecute(...args: GenesysCloudFullApiOperationArgs<"postLanguageunderstandingMinerExecute">): Promise<GenesysCloudFullApiOperationResponseMap["postLanguageunderstandingMinerExecute"]>;
  PostLanguageunderstandingMiners(...args: GenesysCloudFullApiOperationArgs<"postLanguageunderstandingMiners">): Promise<GenesysCloudFullApiOperationResponseMap["postLanguageunderstandingMiners"]>;
  PutLanguageunderstandingDomainVersion(...args: GenesysCloudFullApiOperationArgs<"putLanguageunderstandingDomainVersion">): Promise<GenesysCloudFullApiOperationResponseMap["putLanguageunderstandingDomainVersion"]>;
}

export const GenesysCloudFullApiLanguageUnderstandingGeneratedFunctionNames = [
  "DeleteLanguageunderstandingDomain",
  "DeleteLanguageunderstandingDomainFeedbackFeedbackId",
  "DeleteLanguageunderstandingDomainVersion",
  "DeleteLanguageunderstandingMiner",
  "DeleteLanguageunderstandingMinerDraft",
  "GetLanguageunderstandingDomain",
  "GetLanguageunderstandingDomainFeedback",
  "GetLanguageunderstandingDomainFeedbackFeedbackId",
  "GetLanguageunderstandingDomains",
  "GetLanguageunderstandingDomainVersion",
  "GetLanguageunderstandingDomainVersionReport",
  "GetLanguageunderstandingDomainVersions",
  "GetLanguageunderstandingIgnorephrase",
  "GetLanguageunderstandingIgnoretopic",
  "GetLanguageunderstandingMiner",
  "GetLanguageunderstandingMinerDraft",
  "GetLanguageunderstandingMinerDrafts",
  "GetLanguageunderstandingMinerIntent",
  "GetLanguageunderstandingMinerIntents",
  "GetLanguageunderstandingMiners",
  "GetLanguageunderstandingMinerTopic",
  "GetLanguageunderstandingMinerTopicPhrase",
  "GetLanguageunderstandingMinerTopics",
  "GetLanguageunderstandingSettings",
  "PatchLanguageunderstandingDomain",
  "PatchLanguageunderstandingMinerDraft",
  "PostLanguageunderstandingDomainFeedback",
  "PostLanguageunderstandingDomains",
  "PostLanguageunderstandingDomainVersionDetect",
  "PostLanguageunderstandingDomainVersionPublish",
  "PostLanguageunderstandingDomainVersions",
  "PostLanguageunderstandingDomainVersionTrain",
  "PostLanguageunderstandingIgnorephrase",
  "PostLanguageunderstandingIgnorephraseRemove",
  "PostLanguageunderstandingIgnoretopic",
  "PostLanguageunderstandingIgnoretopicRemove",
  "PostLanguageunderstandingMinerDrafts",
  "PostLanguageunderstandingMinerExecute",
  "PostLanguageunderstandingMiners",
  "PutLanguageunderstandingDomainVersion"
] as const satisfies readonly (keyof GenesysCloudFullApiLanguageUnderstandingGeneratedClient)[];

export function createGenesysCloudFullApiLanguageUnderstandingGeneratedClient(
  callOperation: GenesysCloudGeneratedOperationCaller,
): GenesysCloudFullApiLanguageUnderstandingGeneratedClient {
  return {
    DeleteLanguageunderstandingDomain: (...args) => callOperation("deleteLanguageunderstandingDomain", ...(args as GenesysCloudFullApiOperationArgs<"deleteLanguageunderstandingDomain">)),
    DeleteLanguageunderstandingDomainFeedbackFeedbackId: (...args) => callOperation("deleteLanguageunderstandingDomainFeedbackFeedbackId", ...(args as GenesysCloudFullApiOperationArgs<"deleteLanguageunderstandingDomainFeedbackFeedbackId">)),
    DeleteLanguageunderstandingDomainVersion: (...args) => callOperation("deleteLanguageunderstandingDomainVersion", ...(args as GenesysCloudFullApiOperationArgs<"deleteLanguageunderstandingDomainVersion">)),
    DeleteLanguageunderstandingMiner: (...args) => callOperation("deleteLanguageunderstandingMiner", ...(args as GenesysCloudFullApiOperationArgs<"deleteLanguageunderstandingMiner">)),
    DeleteLanguageunderstandingMinerDraft: (...args) => callOperation("deleteLanguageunderstandingMinerDraft", ...(args as GenesysCloudFullApiOperationArgs<"deleteLanguageunderstandingMinerDraft">)),
    GetLanguageunderstandingDomain: (...args) => callOperation("getLanguageunderstandingDomain", ...(args as GenesysCloudFullApiOperationArgs<"getLanguageunderstandingDomain">)),
    GetLanguageunderstandingDomainFeedback: (...args) => callOperation("getLanguageunderstandingDomainFeedback", ...(args as GenesysCloudFullApiOperationArgs<"getLanguageunderstandingDomainFeedback">)),
    GetLanguageunderstandingDomainFeedbackFeedbackId: (...args) => callOperation("getLanguageunderstandingDomainFeedbackFeedbackId", ...(args as GenesysCloudFullApiOperationArgs<"getLanguageunderstandingDomainFeedbackFeedbackId">)),
    GetLanguageunderstandingDomains: (...args) => callOperation("getLanguageunderstandingDomains", ...(args as GenesysCloudFullApiOperationArgs<"getLanguageunderstandingDomains">)),
    GetLanguageunderstandingDomainVersion: (...args) => callOperation("getLanguageunderstandingDomainVersion", ...(args as GenesysCloudFullApiOperationArgs<"getLanguageunderstandingDomainVersion">)),
    GetLanguageunderstandingDomainVersionReport: (...args) => callOperation("getLanguageunderstandingDomainVersionReport", ...(args as GenesysCloudFullApiOperationArgs<"getLanguageunderstandingDomainVersionReport">)),
    GetLanguageunderstandingDomainVersions: (...args) => callOperation("getLanguageunderstandingDomainVersions", ...(args as GenesysCloudFullApiOperationArgs<"getLanguageunderstandingDomainVersions">)),
    GetLanguageunderstandingIgnorephrase: (...args) => callOperation("getLanguageunderstandingIgnorephrase", ...(args as GenesysCloudFullApiOperationArgs<"getLanguageunderstandingIgnorephrase">)),
    GetLanguageunderstandingIgnoretopic: (...args) => callOperation("getLanguageunderstandingIgnoretopic", ...(args as GenesysCloudFullApiOperationArgs<"getLanguageunderstandingIgnoretopic">)),
    GetLanguageunderstandingMiner: (...args) => callOperation("getLanguageunderstandingMiner", ...(args as GenesysCloudFullApiOperationArgs<"getLanguageunderstandingMiner">)),
    GetLanguageunderstandingMinerDraft: (...args) => callOperation("getLanguageunderstandingMinerDraft", ...(args as GenesysCloudFullApiOperationArgs<"getLanguageunderstandingMinerDraft">)),
    GetLanguageunderstandingMinerDrafts: (...args) => callOperation("getLanguageunderstandingMinerDrafts", ...(args as GenesysCloudFullApiOperationArgs<"getLanguageunderstandingMinerDrafts">)),
    GetLanguageunderstandingMinerIntent: (...args) => callOperation("getLanguageunderstandingMinerIntent", ...(args as GenesysCloudFullApiOperationArgs<"getLanguageunderstandingMinerIntent">)),
    GetLanguageunderstandingMinerIntents: (...args) => callOperation("getLanguageunderstandingMinerIntents", ...(args as GenesysCloudFullApiOperationArgs<"getLanguageunderstandingMinerIntents">)),
    GetLanguageunderstandingMiners: (...args) => callOperation("getLanguageunderstandingMiners", ...(args as GenesysCloudFullApiOperationArgs<"getLanguageunderstandingMiners">)),
    GetLanguageunderstandingMinerTopic: (...args) => callOperation("getLanguageunderstandingMinerTopic", ...(args as GenesysCloudFullApiOperationArgs<"getLanguageunderstandingMinerTopic">)),
    GetLanguageunderstandingMinerTopicPhrase: (...args) => callOperation("getLanguageunderstandingMinerTopicPhrase", ...(args as GenesysCloudFullApiOperationArgs<"getLanguageunderstandingMinerTopicPhrase">)),
    GetLanguageunderstandingMinerTopics: (...args) => callOperation("getLanguageunderstandingMinerTopics", ...(args as GenesysCloudFullApiOperationArgs<"getLanguageunderstandingMinerTopics">)),
    GetLanguageunderstandingSettings: (...args) => callOperation("getLanguageunderstandingSettings", ...(args as GenesysCloudFullApiOperationArgs<"getLanguageunderstandingSettings">)),
    PatchLanguageunderstandingDomain: (...args) => callOperation("patchLanguageunderstandingDomain", ...(args as GenesysCloudFullApiOperationArgs<"patchLanguageunderstandingDomain">)),
    PatchLanguageunderstandingMinerDraft: (...args) => callOperation("patchLanguageunderstandingMinerDraft", ...(args as GenesysCloudFullApiOperationArgs<"patchLanguageunderstandingMinerDraft">)),
    PostLanguageunderstandingDomainFeedback: (...args) => callOperation("postLanguageunderstandingDomainFeedback", ...(args as GenesysCloudFullApiOperationArgs<"postLanguageunderstandingDomainFeedback">)),
    PostLanguageunderstandingDomains: (...args) => callOperation("postLanguageunderstandingDomains", ...(args as GenesysCloudFullApiOperationArgs<"postLanguageunderstandingDomains">)),
    PostLanguageunderstandingDomainVersionDetect: (...args) => callOperation("postLanguageunderstandingDomainVersionDetect", ...(args as GenesysCloudFullApiOperationArgs<"postLanguageunderstandingDomainVersionDetect">)),
    PostLanguageunderstandingDomainVersionPublish: (...args) => callOperation("postLanguageunderstandingDomainVersionPublish", ...(args as GenesysCloudFullApiOperationArgs<"postLanguageunderstandingDomainVersionPublish">)),
    PostLanguageunderstandingDomainVersions: (...args) => callOperation("postLanguageunderstandingDomainVersions", ...(args as GenesysCloudFullApiOperationArgs<"postLanguageunderstandingDomainVersions">)),
    PostLanguageunderstandingDomainVersionTrain: (...args) => callOperation("postLanguageunderstandingDomainVersionTrain", ...(args as GenesysCloudFullApiOperationArgs<"postLanguageunderstandingDomainVersionTrain">)),
    PostLanguageunderstandingIgnorephrase: (...args) => callOperation("postLanguageunderstandingIgnorephrase", ...(args as GenesysCloudFullApiOperationArgs<"postLanguageunderstandingIgnorephrase">)),
    PostLanguageunderstandingIgnorephraseRemove: (...args) => callOperation("postLanguageunderstandingIgnorephraseRemove", ...(args as GenesysCloudFullApiOperationArgs<"postLanguageunderstandingIgnorephraseRemove">)),
    PostLanguageunderstandingIgnoretopic: (...args) => callOperation("postLanguageunderstandingIgnoretopic", ...(args as GenesysCloudFullApiOperationArgs<"postLanguageunderstandingIgnoretopic">)),
    PostLanguageunderstandingIgnoretopicRemove: (...args) => callOperation("postLanguageunderstandingIgnoretopicRemove", ...(args as GenesysCloudFullApiOperationArgs<"postLanguageunderstandingIgnoretopicRemove">)),
    PostLanguageunderstandingMinerDrafts: (...args) => callOperation("postLanguageunderstandingMinerDrafts", ...(args as GenesysCloudFullApiOperationArgs<"postLanguageunderstandingMinerDrafts">)),
    PostLanguageunderstandingMinerExecute: (...args) => callOperation("postLanguageunderstandingMinerExecute", ...(args as GenesysCloudFullApiOperationArgs<"postLanguageunderstandingMinerExecute">)),
    PostLanguageunderstandingMiners: (...args) => callOperation("postLanguageunderstandingMiners", ...(args as GenesysCloudFullApiOperationArgs<"postLanguageunderstandingMiners">)),
    PutLanguageunderstandingDomainVersion: (...args) => callOperation("putLanguageunderstandingDomainVersion", ...(args as GenesysCloudFullApiOperationArgs<"putLanguageunderstandingDomainVersion">)),
  };
}
