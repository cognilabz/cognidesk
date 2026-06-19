// Generated from Azure REST API specs Speech data-plane files.
// Do not edit by hand; run scripts/generate-speech-provider-apis.mjs after checking upstream docs.

import type { AzureSpeechOperationRequestInput } from "./index.js";
import type {
  AzureSpeechFullApiOperationQueryMap,
  AzureSpeechFullApiOperationQueryRequiredMap,
  AzureSpeechFullApiOperationRequestBodyMap,
  AzureSpeechFullApiOperationRequestBodyRequiredMap,
  AzureSpeechFullApiOperationResponseMap,
} from "./full-api-schema-types.generated.js";
import {
  createAzureSpeechFullApiBaseModelGeneratedClient,
  AzureSpeechFullApiBaseModelGeneratedFunctionNames,
  type AzureSpeechFullApiBaseModelGeneratedClient,
  type AzureSpeechFullApiBaseModelOperationPathParamMap,
  type AzureSpeechFullApiBaseModelOperationRequestMap,
} from "./full-api.generated/client/base-model-chunk.generated.js";
import {
  createAzureSpeechFullApiBatchSynthesisGeneratedClient,
  AzureSpeechFullApiBatchSynthesisGeneratedFunctionNames,
  type AzureSpeechFullApiBatchSynthesisGeneratedClient,
  type AzureSpeechFullApiBatchSynthesisOperationPathParamMap,
  type AzureSpeechFullApiBatchSynthesisOperationRequestMap,
} from "./full-api.generated/client/batch-synthesis-chunk.generated.js";
import {
  createAzureSpeechFullApiConsentGeneratedClient,
  AzureSpeechFullApiConsentGeneratedFunctionNames,
  type AzureSpeechFullApiConsentGeneratedClient,
  type AzureSpeechFullApiConsentOperationPathParamMap,
  type AzureSpeechFullApiConsentOperationRequestMap,
} from "./full-api.generated/client/consent-chunk.generated.js";
import {
  createAzureSpeechFullApiCustomSpeechDatasetsForModelAdaptationGeneratedClient,
  AzureSpeechFullApiCustomSpeechDatasetsForModelAdaptationGeneratedFunctionNames,
  type AzureSpeechFullApiCustomSpeechDatasetsForModelAdaptationGeneratedClient,
  type AzureSpeechFullApiCustomSpeechDatasetsForModelAdaptationOperationPathParamMap,
  type AzureSpeechFullApiCustomSpeechDatasetsForModelAdaptationOperationRequestMap,
} from "./full-api.generated/client/custom-speech-datasets-for-model-adaptation-chunk.generated.js";
import {
  createAzureSpeechFullApiCustomSpeechEndpointsGeneratedClient,
  AzureSpeechFullApiCustomSpeechEndpointsGeneratedFunctionNames,
  type AzureSpeechFullApiCustomSpeechEndpointsGeneratedClient,
  type AzureSpeechFullApiCustomSpeechEndpointsOperationPathParamMap,
  type AzureSpeechFullApiCustomSpeechEndpointsOperationRequestMap,
} from "./full-api.generated/client/custom-speech-endpoints-chunk.generated.js";
import {
  createAzureSpeechFullApiCustomSpeechModelEvaluationsGeneratedClient,
  AzureSpeechFullApiCustomSpeechModelEvaluationsGeneratedFunctionNames,
  type AzureSpeechFullApiCustomSpeechModelEvaluationsGeneratedClient,
  type AzureSpeechFullApiCustomSpeechModelEvaluationsOperationPathParamMap,
  type AzureSpeechFullApiCustomSpeechModelEvaluationsOperationRequestMap,
} from "./full-api.generated/client/custom-speech-model-evaluations-chunk.generated.js";
import {
  createAzureSpeechFullApiCustomSpeechModelsGeneratedClient,
  AzureSpeechFullApiCustomSpeechModelsGeneratedFunctionNames,
  type AzureSpeechFullApiCustomSpeechModelsGeneratedClient,
  type AzureSpeechFullApiCustomSpeechModelsOperationPathParamMap,
  type AzureSpeechFullApiCustomSpeechModelsOperationRequestMap,
} from "./full-api.generated/client/custom-speech-models-chunk.generated.js";
import {
  createAzureSpeechFullApiCustomSpeechOperationsGeneratedClient,
  AzureSpeechFullApiCustomSpeechOperationsGeneratedFunctionNames,
  type AzureSpeechFullApiCustomSpeechOperationsGeneratedClient,
  type AzureSpeechFullApiCustomSpeechOperationsOperationPathParamMap,
  type AzureSpeechFullApiCustomSpeechOperationsOperationRequestMap,
} from "./full-api.generated/client/custom-speech-operations-chunk.generated.js";
import {
  createAzureSpeechFullApiCustomSpeechProjectsGeneratedClient,
  AzureSpeechFullApiCustomSpeechProjectsGeneratedFunctionNames,
  type AzureSpeechFullApiCustomSpeechProjectsGeneratedClient,
  type AzureSpeechFullApiCustomSpeechProjectsOperationPathParamMap,
  type AzureSpeechFullApiCustomSpeechProjectsOperationRequestMap,
} from "./full-api.generated/client/custom-speech-projects-chunk.generated.js";
import {
  createAzureSpeechFullApiCustomSpeechTranscriptionsGeneratedClient,
  AzureSpeechFullApiCustomSpeechTranscriptionsGeneratedFunctionNames,
  type AzureSpeechFullApiCustomSpeechTranscriptionsGeneratedClient,
  type AzureSpeechFullApiCustomSpeechTranscriptionsOperationPathParamMap,
  type AzureSpeechFullApiCustomSpeechTranscriptionsOperationRequestMap,
} from "./full-api.generated/client/custom-speech-transcriptions-chunk.generated.js";
import {
  createAzureSpeechFullApiCustomSpeechWebHooksGeneratedClient,
  AzureSpeechFullApiCustomSpeechWebHooksGeneratedFunctionNames,
  type AzureSpeechFullApiCustomSpeechWebHooksGeneratedClient,
  type AzureSpeechFullApiCustomSpeechWebHooksOperationPathParamMap,
  type AzureSpeechFullApiCustomSpeechWebHooksOperationRequestMap,
} from "./full-api.generated/client/custom-speech-web-hooks-chunk.generated.js";
import {
  createAzureSpeechFullApiEndpointGeneratedClient,
  AzureSpeechFullApiEndpointGeneratedFunctionNames,
  type AzureSpeechFullApiEndpointGeneratedClient,
  type AzureSpeechFullApiEndpointOperationPathParamMap,
  type AzureSpeechFullApiEndpointOperationRequestMap,
} from "./full-api.generated/client/endpoint-chunk.generated.js";
import {
  createAzureSpeechFullApiModelGeneratedClient,
  AzureSpeechFullApiModelGeneratedFunctionNames,
  type AzureSpeechFullApiModelGeneratedClient,
  type AzureSpeechFullApiModelOperationPathParamMap,
  type AzureSpeechFullApiModelOperationRequestMap,
} from "./full-api.generated/client/model-chunk.generated.js";
import {
  createAzureSpeechFullApiOperationsGeneratedClient,
  AzureSpeechFullApiOperationsGeneratedFunctionNames,
  type AzureSpeechFullApiOperationsGeneratedClient,
  type AzureSpeechFullApiOperationsOperationPathParamMap,
  type AzureSpeechFullApiOperationsOperationRequestMap,
} from "./full-api.generated/client/operations-chunk.generated.js";
import {
  createAzureSpeechFullApiPersonalVoiceGeneratedClient,
  AzureSpeechFullApiPersonalVoiceGeneratedFunctionNames,
  type AzureSpeechFullApiPersonalVoiceGeneratedClient,
  type AzureSpeechFullApiPersonalVoiceOperationPathParamMap,
  type AzureSpeechFullApiPersonalVoiceOperationRequestMap,
} from "./full-api.generated/client/personal-voice-chunk.generated.js";
import {
  createAzureSpeechFullApiProjectGeneratedClient,
  AzureSpeechFullApiProjectGeneratedFunctionNames,
  type AzureSpeechFullApiProjectGeneratedClient,
  type AzureSpeechFullApiProjectOperationPathParamMap,
  type AzureSpeechFullApiProjectOperationRequestMap,
} from "./full-api.generated/client/project-chunk.generated.js";
import {
  createAzureSpeechFullApiTrainingSetGeneratedClient,
  AzureSpeechFullApiTrainingSetGeneratedFunctionNames,
  type AzureSpeechFullApiTrainingSetGeneratedClient,
  type AzureSpeechFullApiTrainingSetOperationPathParamMap,
  type AzureSpeechFullApiTrainingSetOperationRequestMap,
} from "./full-api.generated/client/training-set-chunk.generated.js";
import {
  createAzureSpeechFullApiTranscribeGeneratedClient,
  AzureSpeechFullApiTranscribeGeneratedFunctionNames,
  type AzureSpeechFullApiTranscribeGeneratedClient,
  type AzureSpeechFullApiTranscribeOperationPathParamMap,
  type AzureSpeechFullApiTranscribeOperationRequestMap,
} from "./full-api.generated/client/transcribe-chunk.generated.js";
import {
  createAzureSpeechFullApiTranscriptionsTranscribeGeneratedClient,
  AzureSpeechFullApiTranscriptionsTranscribeGeneratedFunctionNames,
  type AzureSpeechFullApiTranscriptionsTranscribeGeneratedClient,
  type AzureSpeechFullApiTranscriptionsTranscribeOperationPathParamMap,
  type AzureSpeechFullApiTranscriptionsTranscribeOperationRequestMap,
} from "./full-api.generated/client/transcriptions-transcribe-chunk.generated.js";

export type AzureSpeechFullApiPathParamValue = string | number;
export interface AzureSpeechFullApiOperationPathParamMap extends AzureSpeechFullApiBaseModelOperationPathParamMap, AzureSpeechFullApiBatchSynthesisOperationPathParamMap, AzureSpeechFullApiConsentOperationPathParamMap, AzureSpeechFullApiCustomSpeechDatasetsForModelAdaptationOperationPathParamMap, AzureSpeechFullApiCustomSpeechEndpointsOperationPathParamMap, AzureSpeechFullApiCustomSpeechModelEvaluationsOperationPathParamMap, AzureSpeechFullApiCustomSpeechModelsOperationPathParamMap, AzureSpeechFullApiCustomSpeechOperationsOperationPathParamMap, AzureSpeechFullApiCustomSpeechProjectsOperationPathParamMap, AzureSpeechFullApiCustomSpeechTranscriptionsOperationPathParamMap, AzureSpeechFullApiCustomSpeechWebHooksOperationPathParamMap, AzureSpeechFullApiEndpointOperationPathParamMap, AzureSpeechFullApiModelOperationPathParamMap, AzureSpeechFullApiOperationsOperationPathParamMap, AzureSpeechFullApiPersonalVoiceOperationPathParamMap, AzureSpeechFullApiProjectOperationPathParamMap, AzureSpeechFullApiTrainingSetOperationPathParamMap, AzureSpeechFullApiTranscribeOperationPathParamMap, AzureSpeechFullApiTranscriptionsTranscribeOperationPathParamMap {}

export type AzureSpeechFullApiOperationKey = keyof AzureSpeechFullApiOperationPathParamMap & string;

export type AzureSpeechFullApiOperationQueryInput<OperationKey extends AzureSpeechFullApiOperationKey> =
  AzureSpeechFullApiOperationQueryRequiredMap[OperationKey] extends true
    ? { query: AzureSpeechFullApiOperationQueryMap[OperationKey] }
    : { query?: AzureSpeechFullApiOperationQueryMap[OperationKey] };

export type AzureSpeechFullApiOperationBodyInput<OperationKey extends AzureSpeechFullApiOperationKey> =
  [AzureSpeechFullApiOperationRequestBodyMap[OperationKey]] extends [never]
    ? { body?: never }
    : AzureSpeechFullApiOperationRequestBodyRequiredMap[OperationKey] extends true
      ? { body: AzureSpeechFullApiOperationRequestBodyMap[OperationKey] }
      : { body?: AzureSpeechFullApiOperationRequestBodyMap[OperationKey] };

export type AzureSpeechFullApiOperationInput<OperationKey extends AzureSpeechFullApiOperationKey> = Omit<AzureSpeechOperationRequestInput, "pathParams" | "query" | "body"> & (
  {} extends AzureSpeechFullApiOperationPathParamMap[OperationKey]
    ? { pathParams?: never }
    : { pathParams: AzureSpeechFullApiOperationPathParamMap[OperationKey] }
) & AzureSpeechFullApiOperationQueryInput<OperationKey> & AzureSpeechFullApiOperationBodyInput<OperationKey>;

export interface AzureSpeechFullApiOperationRequestMap extends AzureSpeechFullApiBaseModelOperationRequestMap, AzureSpeechFullApiBatchSynthesisOperationRequestMap, AzureSpeechFullApiConsentOperationRequestMap, AzureSpeechFullApiCustomSpeechDatasetsForModelAdaptationOperationRequestMap, AzureSpeechFullApiCustomSpeechEndpointsOperationRequestMap, AzureSpeechFullApiCustomSpeechModelEvaluationsOperationRequestMap, AzureSpeechFullApiCustomSpeechModelsOperationRequestMap, AzureSpeechFullApiCustomSpeechOperationsOperationRequestMap, AzureSpeechFullApiCustomSpeechProjectsOperationRequestMap, AzureSpeechFullApiCustomSpeechTranscriptionsOperationRequestMap, AzureSpeechFullApiCustomSpeechWebHooksOperationRequestMap, AzureSpeechFullApiEndpointOperationRequestMap, AzureSpeechFullApiModelOperationRequestMap, AzureSpeechFullApiOperationsOperationRequestMap, AzureSpeechFullApiPersonalVoiceOperationRequestMap, AzureSpeechFullApiProjectOperationRequestMap, AzureSpeechFullApiTrainingSetOperationRequestMap, AzureSpeechFullApiTranscribeOperationRequestMap, AzureSpeechFullApiTranscriptionsTranscribeOperationRequestMap {}

export type AzureSpeechFullApiOperationArgs<OperationKey extends AzureSpeechFullApiOperationKey> = {} extends AzureSpeechFullApiOperationPathParamMap[OperationKey]
  ? [input?: AzureSpeechFullApiOperationRequestMap[OperationKey]]
  : [input: AzureSpeechFullApiOperationRequestMap[OperationKey]];

export type AzureSpeechGeneratedOperationCaller = <OperationKey extends AzureSpeechFullApiOperationKey>(
  operationKey: OperationKey,
  ...args: AzureSpeechFullApiOperationArgs<OperationKey>
) => Promise<AzureSpeechFullApiOperationResponseMap[OperationKey]>;

export interface AzureSpeechFullApiGeneratedClient extends AzureSpeechFullApiBaseModelGeneratedClient, AzureSpeechFullApiBatchSynthesisGeneratedClient, AzureSpeechFullApiConsentGeneratedClient, AzureSpeechFullApiCustomSpeechDatasetsForModelAdaptationGeneratedClient, AzureSpeechFullApiCustomSpeechEndpointsGeneratedClient, AzureSpeechFullApiCustomSpeechModelEvaluationsGeneratedClient, AzureSpeechFullApiCustomSpeechModelsGeneratedClient, AzureSpeechFullApiCustomSpeechOperationsGeneratedClient, AzureSpeechFullApiCustomSpeechProjectsGeneratedClient, AzureSpeechFullApiCustomSpeechTranscriptionsGeneratedClient, AzureSpeechFullApiCustomSpeechWebHooksGeneratedClient, AzureSpeechFullApiEndpointGeneratedClient, AzureSpeechFullApiModelGeneratedClient, AzureSpeechFullApiOperationsGeneratedClient, AzureSpeechFullApiPersonalVoiceGeneratedClient, AzureSpeechFullApiProjectGeneratedClient, AzureSpeechFullApiTrainingSetGeneratedClient, AzureSpeechFullApiTranscribeGeneratedClient, AzureSpeechFullApiTranscriptionsTranscribeGeneratedClient {}

export const AZURE_SPEECH_FULL_API_GENERATED_FUNCTION_COUNT = 105 as const;
export const AZURE_SPEECH_FULL_API_GENERATED_FUNCTION_NAMES = [
  ...AzureSpeechFullApiBaseModelGeneratedFunctionNames,
  ...AzureSpeechFullApiBatchSynthesisGeneratedFunctionNames,
  ...AzureSpeechFullApiConsentGeneratedFunctionNames,
  ...AzureSpeechFullApiCustomSpeechDatasetsForModelAdaptationGeneratedFunctionNames,
  ...AzureSpeechFullApiCustomSpeechEndpointsGeneratedFunctionNames,
  ...AzureSpeechFullApiCustomSpeechModelEvaluationsGeneratedFunctionNames,
  ...AzureSpeechFullApiCustomSpeechModelsGeneratedFunctionNames,
  ...AzureSpeechFullApiCustomSpeechOperationsGeneratedFunctionNames,
  ...AzureSpeechFullApiCustomSpeechProjectsGeneratedFunctionNames,
  ...AzureSpeechFullApiCustomSpeechTranscriptionsGeneratedFunctionNames,
  ...AzureSpeechFullApiCustomSpeechWebHooksGeneratedFunctionNames,
  ...AzureSpeechFullApiEndpointGeneratedFunctionNames,
  ...AzureSpeechFullApiModelGeneratedFunctionNames,
  ...AzureSpeechFullApiOperationsGeneratedFunctionNames,
  ...AzureSpeechFullApiPersonalVoiceGeneratedFunctionNames,
  ...AzureSpeechFullApiProjectGeneratedFunctionNames,
  ...AzureSpeechFullApiTrainingSetGeneratedFunctionNames,
  ...AzureSpeechFullApiTranscribeGeneratedFunctionNames,
  ...AzureSpeechFullApiTranscriptionsTranscribeGeneratedFunctionNames,
] as const satisfies readonly (keyof AzureSpeechFullApiGeneratedClient)[];

export function createAzureSpeechFullApiGeneratedClient(
  callOperation: AzureSpeechGeneratedOperationCaller,
): AzureSpeechFullApiGeneratedClient {
  return Object.assign(
    {},
    createAzureSpeechFullApiBaseModelGeneratedClient(callOperation),
    createAzureSpeechFullApiBatchSynthesisGeneratedClient(callOperation),
    createAzureSpeechFullApiConsentGeneratedClient(callOperation),
    createAzureSpeechFullApiCustomSpeechDatasetsForModelAdaptationGeneratedClient(callOperation),
    createAzureSpeechFullApiCustomSpeechEndpointsGeneratedClient(callOperation),
    createAzureSpeechFullApiCustomSpeechModelEvaluationsGeneratedClient(callOperation),
    createAzureSpeechFullApiCustomSpeechModelsGeneratedClient(callOperation),
    createAzureSpeechFullApiCustomSpeechOperationsGeneratedClient(callOperation),
    createAzureSpeechFullApiCustomSpeechProjectsGeneratedClient(callOperation),
    createAzureSpeechFullApiCustomSpeechTranscriptionsGeneratedClient(callOperation),
    createAzureSpeechFullApiCustomSpeechWebHooksGeneratedClient(callOperation),
    createAzureSpeechFullApiEndpointGeneratedClient(callOperation),
    createAzureSpeechFullApiModelGeneratedClient(callOperation),
    createAzureSpeechFullApiOperationsGeneratedClient(callOperation),
    createAzureSpeechFullApiPersonalVoiceGeneratedClient(callOperation),
    createAzureSpeechFullApiProjectGeneratedClient(callOperation),
    createAzureSpeechFullApiTrainingSetGeneratedClient(callOperation),
    createAzureSpeechFullApiTranscribeGeneratedClient(callOperation),
    createAzureSpeechFullApiTranscriptionsTranscribeGeneratedClient(callOperation),
  ) as AzureSpeechFullApiGeneratedClient;
}
