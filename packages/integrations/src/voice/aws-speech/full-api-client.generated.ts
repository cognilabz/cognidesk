// Generated from AWS official API models (https://github.com/aws/api-models-aws/tree/main/models).
// Do not edit by hand; run scripts/generate-speech-provider-apis.mjs after checking upstream docs.

import type { AwsSpeechOperationRequestInput } from "./index.js";
import type {
  AwsSpeechFullApiOperationQueryMap,
  AwsSpeechFullApiOperationQueryRequiredMap,
  AwsSpeechFullApiOperationRequestBodyMap,
  AwsSpeechFullApiOperationRequestBodyRequiredMap,
  AwsSpeechFullApiOperationResponseMap,
} from "./full-api-schema-types.generated.js";
import {
  createAwsSpeechFullApiCallAnalyticsStreamTranscriptionGeneratedClient,
  AwsSpeechFullApiCallAnalyticsStreamTranscriptionGeneratedFunctionNames,
  type AwsSpeechFullApiCallAnalyticsStreamTranscriptionGeneratedClient,
  type AwsSpeechFullApiCallAnalyticsStreamTranscriptionOperationPathParamMap,
  type AwsSpeechFullApiCallAnalyticsStreamTranscriptionOperationRequestMap,
} from "./full-api.generated/client/call-analytics-stream-transcription-chunk.generated.js";
import {
  createAwsSpeechFullApiCallanalyticscategoriesGeneratedClient,
  AwsSpeechFullApiCallanalyticscategoriesGeneratedFunctionNames,
  type AwsSpeechFullApiCallanalyticscategoriesGeneratedClient,
  type AwsSpeechFullApiCallanalyticscategoriesOperationPathParamMap,
  type AwsSpeechFullApiCallanalyticscategoriesOperationRequestMap,
} from "./full-api.generated/client/callanalyticscategories-chunk.generated.js";
import {
  createAwsSpeechFullApiCallanalyticsjobsGeneratedClient,
  AwsSpeechFullApiCallanalyticsjobsGeneratedFunctionNames,
  type AwsSpeechFullApiCallanalyticsjobsGeneratedClient,
  type AwsSpeechFullApiCallanalyticsjobsOperationPathParamMap,
  type AwsSpeechFullApiCallanalyticsjobsOperationRequestMap,
} from "./full-api.generated/client/callanalyticsjobs-chunk.generated.js";
import {
  createAwsSpeechFullApiLanguagemodelsGeneratedClient,
  AwsSpeechFullApiLanguagemodelsGeneratedFunctionNames,
  type AwsSpeechFullApiLanguagemodelsGeneratedClient,
  type AwsSpeechFullApiLanguagemodelsOperationPathParamMap,
  type AwsSpeechFullApiLanguagemodelsOperationRequestMap,
} from "./full-api.generated/client/languagemodels-chunk.generated.js";
import {
  createAwsSpeechFullApiMedicalScribeStreamGeneratedClient,
  AwsSpeechFullApiMedicalScribeStreamGeneratedFunctionNames,
  type AwsSpeechFullApiMedicalScribeStreamGeneratedClient,
  type AwsSpeechFullApiMedicalScribeStreamOperationPathParamMap,
  type AwsSpeechFullApiMedicalScribeStreamOperationRequestMap,
} from "./full-api.generated/client/medical-scribe-stream-chunk.generated.js";
import {
  createAwsSpeechFullApiMedicalStreamTranscriptionGeneratedClient,
  AwsSpeechFullApiMedicalStreamTranscriptionGeneratedFunctionNames,
  type AwsSpeechFullApiMedicalStreamTranscriptionGeneratedClient,
  type AwsSpeechFullApiMedicalStreamTranscriptionOperationPathParamMap,
  type AwsSpeechFullApiMedicalStreamTranscriptionOperationRequestMap,
} from "./full-api.generated/client/medical-stream-transcription-chunk.generated.js";
import {
  createAwsSpeechFullApiMedicalscribejobsGeneratedClient,
  AwsSpeechFullApiMedicalscribejobsGeneratedFunctionNames,
  type AwsSpeechFullApiMedicalscribejobsGeneratedClient,
  type AwsSpeechFullApiMedicalscribejobsOperationPathParamMap,
  type AwsSpeechFullApiMedicalscribejobsOperationRequestMap,
} from "./full-api.generated/client/medicalscribejobs-chunk.generated.js";
import {
  createAwsSpeechFullApiMedicaltranscriptionjobsGeneratedClient,
  AwsSpeechFullApiMedicaltranscriptionjobsGeneratedFunctionNames,
  type AwsSpeechFullApiMedicaltranscriptionjobsGeneratedClient,
  type AwsSpeechFullApiMedicaltranscriptionjobsOperationPathParamMap,
  type AwsSpeechFullApiMedicaltranscriptionjobsOperationRequestMap,
} from "./full-api.generated/client/medicaltranscriptionjobs-chunk.generated.js";
import {
  createAwsSpeechFullApiMedicalvocabulariesGeneratedClient,
  AwsSpeechFullApiMedicalvocabulariesGeneratedFunctionNames,
  type AwsSpeechFullApiMedicalvocabulariesGeneratedClient,
  type AwsSpeechFullApiMedicalvocabulariesOperationPathParamMap,
  type AwsSpeechFullApiMedicalvocabulariesOperationRequestMap,
} from "./full-api.generated/client/medicalvocabularies-chunk.generated.js";
import {
  createAwsSpeechFullApiStreamTranscriptionGeneratedClient,
  AwsSpeechFullApiStreamTranscriptionGeneratedFunctionNames,
  type AwsSpeechFullApiStreamTranscriptionGeneratedClient,
  type AwsSpeechFullApiStreamTranscriptionOperationPathParamMap,
  type AwsSpeechFullApiStreamTranscriptionOperationRequestMap,
} from "./full-api.generated/client/stream-transcription-chunk.generated.js";
import {
  createAwsSpeechFullApiTagsGeneratedClient,
  AwsSpeechFullApiTagsGeneratedFunctionNames,
  type AwsSpeechFullApiTagsGeneratedClient,
  type AwsSpeechFullApiTagsOperationPathParamMap,
  type AwsSpeechFullApiTagsOperationRequestMap,
} from "./full-api.generated/client/tags-chunk.generated.js";
import {
  createAwsSpeechFullApiTranscriptionjobsGeneratedClient,
  AwsSpeechFullApiTranscriptionjobsGeneratedFunctionNames,
  type AwsSpeechFullApiTranscriptionjobsGeneratedClient,
  type AwsSpeechFullApiTranscriptionjobsOperationPathParamMap,
  type AwsSpeechFullApiTranscriptionjobsOperationRequestMap,
} from "./full-api.generated/client/transcriptionjobs-chunk.generated.js";
import {
  createAwsSpeechFullApiV1GeneratedClient,
  AwsSpeechFullApiV1GeneratedFunctionNames,
  type AwsSpeechFullApiV1GeneratedClient,
  type AwsSpeechFullApiV1OperationPathParamMap,
  type AwsSpeechFullApiV1OperationRequestMap,
} from "./full-api.generated/client/v1-chunk.generated.js";
import {
  createAwsSpeechFullApiVocabulariesGeneratedClient,
  AwsSpeechFullApiVocabulariesGeneratedFunctionNames,
  type AwsSpeechFullApiVocabulariesGeneratedClient,
  type AwsSpeechFullApiVocabulariesOperationPathParamMap,
  type AwsSpeechFullApiVocabulariesOperationRequestMap,
} from "./full-api.generated/client/vocabularies-chunk.generated.js";
import {
  createAwsSpeechFullApiVocabularyFiltersGeneratedClient,
  AwsSpeechFullApiVocabularyFiltersGeneratedFunctionNames,
  type AwsSpeechFullApiVocabularyFiltersGeneratedClient,
  type AwsSpeechFullApiVocabularyFiltersOperationPathParamMap,
  type AwsSpeechFullApiVocabularyFiltersOperationRequestMap,
} from "./full-api.generated/client/vocabulary-filters-chunk.generated.js";

export type AwsSpeechFullApiPathParamValue = string | number;
export interface AwsSpeechFullApiOperationPathParamMap extends AwsSpeechFullApiCallAnalyticsStreamTranscriptionOperationPathParamMap, AwsSpeechFullApiCallanalyticscategoriesOperationPathParamMap, AwsSpeechFullApiCallanalyticsjobsOperationPathParamMap, AwsSpeechFullApiLanguagemodelsOperationPathParamMap, AwsSpeechFullApiMedicalScribeStreamOperationPathParamMap, AwsSpeechFullApiMedicalStreamTranscriptionOperationPathParamMap, AwsSpeechFullApiMedicalscribejobsOperationPathParamMap, AwsSpeechFullApiMedicaltranscriptionjobsOperationPathParamMap, AwsSpeechFullApiMedicalvocabulariesOperationPathParamMap, AwsSpeechFullApiStreamTranscriptionOperationPathParamMap, AwsSpeechFullApiTagsOperationPathParamMap, AwsSpeechFullApiTranscriptionjobsOperationPathParamMap, AwsSpeechFullApiV1OperationPathParamMap, AwsSpeechFullApiVocabulariesOperationPathParamMap, AwsSpeechFullApiVocabularyFiltersOperationPathParamMap {}

export type AwsSpeechFullApiOperationKey = keyof AwsSpeechFullApiOperationPathParamMap & string;

export type AwsSpeechFullApiOperationQueryInput<OperationKey extends AwsSpeechFullApiOperationKey> =
  AwsSpeechFullApiOperationQueryRequiredMap[OperationKey] extends true
    ? { query: AwsSpeechFullApiOperationQueryMap[OperationKey] }
    : { query?: AwsSpeechFullApiOperationQueryMap[OperationKey] };

export type AwsSpeechFullApiOperationBodyInput<OperationKey extends AwsSpeechFullApiOperationKey> =
  [AwsSpeechFullApiOperationRequestBodyMap[OperationKey]] extends [never]
    ? { body?: never }
    : AwsSpeechFullApiOperationRequestBodyRequiredMap[OperationKey] extends true
      ? { body: AwsSpeechFullApiOperationRequestBodyMap[OperationKey] }
      : { body?: AwsSpeechFullApiOperationRequestBodyMap[OperationKey] };

export type AwsSpeechFullApiOperationInput<OperationKey extends AwsSpeechFullApiOperationKey> = Omit<AwsSpeechOperationRequestInput, "pathParams" | "query" | "body"> & (
  {} extends AwsSpeechFullApiOperationPathParamMap[OperationKey]
    ? { pathParams?: never }
    : { pathParams: AwsSpeechFullApiOperationPathParamMap[OperationKey] }
) & AwsSpeechFullApiOperationQueryInput<OperationKey> & AwsSpeechFullApiOperationBodyInput<OperationKey>;

export interface AwsSpeechFullApiOperationRequestMap extends AwsSpeechFullApiCallAnalyticsStreamTranscriptionOperationRequestMap, AwsSpeechFullApiCallanalyticscategoriesOperationRequestMap, AwsSpeechFullApiCallanalyticsjobsOperationRequestMap, AwsSpeechFullApiLanguagemodelsOperationRequestMap, AwsSpeechFullApiMedicalScribeStreamOperationRequestMap, AwsSpeechFullApiMedicalStreamTranscriptionOperationRequestMap, AwsSpeechFullApiMedicalscribejobsOperationRequestMap, AwsSpeechFullApiMedicaltranscriptionjobsOperationRequestMap, AwsSpeechFullApiMedicalvocabulariesOperationRequestMap, AwsSpeechFullApiStreamTranscriptionOperationRequestMap, AwsSpeechFullApiTagsOperationRequestMap, AwsSpeechFullApiTranscriptionjobsOperationRequestMap, AwsSpeechFullApiV1OperationRequestMap, AwsSpeechFullApiVocabulariesOperationRequestMap, AwsSpeechFullApiVocabularyFiltersOperationRequestMap {}

export type AwsSpeechFullApiOperationArgs<OperationKey extends AwsSpeechFullApiOperationKey> = {} extends AwsSpeechFullApiOperationPathParamMap[OperationKey]
  ? [input?: AwsSpeechFullApiOperationRequestMap[OperationKey]]
  : [input: AwsSpeechFullApiOperationRequestMap[OperationKey]];

export type AwsSpeechGeneratedOperationCaller = <OperationKey extends AwsSpeechFullApiOperationKey>(
  operationKey: OperationKey,
  ...args: AwsSpeechFullApiOperationArgs<OperationKey>
) => Promise<AwsSpeechFullApiOperationResponseMap[OperationKey]>;

export interface AwsSpeechFullApiGeneratedClient extends AwsSpeechFullApiCallAnalyticsStreamTranscriptionGeneratedClient, AwsSpeechFullApiCallanalyticscategoriesGeneratedClient, AwsSpeechFullApiCallanalyticsjobsGeneratedClient, AwsSpeechFullApiLanguagemodelsGeneratedClient, AwsSpeechFullApiMedicalScribeStreamGeneratedClient, AwsSpeechFullApiMedicalStreamTranscriptionGeneratedClient, AwsSpeechFullApiMedicalscribejobsGeneratedClient, AwsSpeechFullApiMedicaltranscriptionjobsGeneratedClient, AwsSpeechFullApiMedicalvocabulariesGeneratedClient, AwsSpeechFullApiStreamTranscriptionGeneratedClient, AwsSpeechFullApiTagsGeneratedClient, AwsSpeechFullApiTranscriptionjobsGeneratedClient, AwsSpeechFullApiV1GeneratedClient, AwsSpeechFullApiVocabulariesGeneratedClient, AwsSpeechFullApiVocabularyFiltersGeneratedClient {}

export const AWS_SPEECH_FULL_API_GENERATED_FUNCTION_COUNT = 58 as const;
export const AWS_SPEECH_FULL_API_GENERATED_FUNCTION_NAMES = [
  ...AwsSpeechFullApiCallAnalyticsStreamTranscriptionGeneratedFunctionNames,
  ...AwsSpeechFullApiCallanalyticscategoriesGeneratedFunctionNames,
  ...AwsSpeechFullApiCallanalyticsjobsGeneratedFunctionNames,
  ...AwsSpeechFullApiLanguagemodelsGeneratedFunctionNames,
  ...AwsSpeechFullApiMedicalScribeStreamGeneratedFunctionNames,
  ...AwsSpeechFullApiMedicalStreamTranscriptionGeneratedFunctionNames,
  ...AwsSpeechFullApiMedicalscribejobsGeneratedFunctionNames,
  ...AwsSpeechFullApiMedicaltranscriptionjobsGeneratedFunctionNames,
  ...AwsSpeechFullApiMedicalvocabulariesGeneratedFunctionNames,
  ...AwsSpeechFullApiStreamTranscriptionGeneratedFunctionNames,
  ...AwsSpeechFullApiTagsGeneratedFunctionNames,
  ...AwsSpeechFullApiTranscriptionjobsGeneratedFunctionNames,
  ...AwsSpeechFullApiV1GeneratedFunctionNames,
  ...AwsSpeechFullApiVocabulariesGeneratedFunctionNames,
  ...AwsSpeechFullApiVocabularyFiltersGeneratedFunctionNames,
] as const satisfies readonly (keyof AwsSpeechFullApiGeneratedClient)[];

export function createAwsSpeechFullApiGeneratedClient(
  callOperation: AwsSpeechGeneratedOperationCaller,
): AwsSpeechFullApiGeneratedClient {
  return Object.assign(
    {},
    createAwsSpeechFullApiCallAnalyticsStreamTranscriptionGeneratedClient(callOperation),
    createAwsSpeechFullApiCallanalyticscategoriesGeneratedClient(callOperation),
    createAwsSpeechFullApiCallanalyticsjobsGeneratedClient(callOperation),
    createAwsSpeechFullApiLanguagemodelsGeneratedClient(callOperation),
    createAwsSpeechFullApiMedicalScribeStreamGeneratedClient(callOperation),
    createAwsSpeechFullApiMedicalStreamTranscriptionGeneratedClient(callOperation),
    createAwsSpeechFullApiMedicalscribejobsGeneratedClient(callOperation),
    createAwsSpeechFullApiMedicaltranscriptionjobsGeneratedClient(callOperation),
    createAwsSpeechFullApiMedicalvocabulariesGeneratedClient(callOperation),
    createAwsSpeechFullApiStreamTranscriptionGeneratedClient(callOperation),
    createAwsSpeechFullApiTagsGeneratedClient(callOperation),
    createAwsSpeechFullApiTranscriptionjobsGeneratedClient(callOperation),
    createAwsSpeechFullApiV1GeneratedClient(callOperation),
    createAwsSpeechFullApiVocabulariesGeneratedClient(callOperation),
    createAwsSpeechFullApiVocabularyFiltersGeneratedClient(callOperation),
  ) as AwsSpeechFullApiGeneratedClient;
}
