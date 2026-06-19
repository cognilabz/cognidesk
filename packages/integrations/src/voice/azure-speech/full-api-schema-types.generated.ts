// Generated provider schema DTOs for AzureSpeechFullApi.
// Do not edit by hand; run scripts/harden-generated-client-types.mjs after updating provider specs.

export type AzureSpeechFullApiSchemaJsonPrimitive = string | number | boolean | null;
export type AzureSpeechFullApiSchemaJsonValue = AzureSpeechFullApiSchemaJsonPrimitive | readonly AzureSpeechFullApiSchemaJsonValue[] | { readonly [key: string]: AzureSpeechFullApiSchemaJsonValue | undefined };

export type AzureSpeechFullApiSchemaBatchSynthesis = {
  inputKind: AzureSpeechFullApiSchemaInputKind;
  inputs?: ReadonlyArray<AzureSpeechFullApiSchemaBatchSynthesisInput>;
  synthesisConfig?: AzureSpeechFullApiSchemaBatchSynthesisConfig;
  customVoices?: {
  readonly [key: string]: string | undefined;
};
  properties?: AzureSpeechFullApiSchemaBatchSynthesisProperties;
  outputs?: AzureSpeechFullApiSchemaBatchSynthesisOutputs;
  status?: AzureSpeechFullApiSchemaStatus;
  lastActionDateTime?: string;
  id?: AzureSpeechFullApiSchemaResourceId;
  description?: string;
  createdDateTime?: string;
};

export type AzureSpeechFullApiSchemaErrorResponse = {
  error: AzureSpeechFullApiSchemaError2;
};

export type AzureSpeechFullApiSchemaPaginatedBatchSynthesis = {
  value: ReadonlyArray<AzureSpeechFullApiSchemaBatchSynthesis>;
  nextLink?: string;
};

export type AzureSpeechFullApiSchemaOperation = {
  id?: AzureSpeechFullApiSchemaOperationId;
  status?: AzureSpeechFullApiSchemaOperationStatus;
};

export type AzureSpeechFullApiSchemaBaseModel = {
  name: string;
  description?: string;
  releaseDateTime: string;
  expirationDateTime?: string;
  capabilities?: ReadonlyArray<AzureSpeechFullApiSchemaModelCapability>;
};

export type AzureSpeechFullApiSchemaConsent = {
  id?: AzureSpeechFullApiSchemaResourceId2;
  displayName?: string;
  description?: string;
  voiceTalentName: string;
  companyName: string;
  audioUrl?: string;
  locale: string;
  projectId: AzureSpeechFullApiSchemaResourceId2;
  properties?: AzureSpeechFullApiSchemaConsentProperties;
  status?: AzureSpeechFullApiSchemaStatus2;
  createdDateTime?: string;
  lastActionDateTime?: string;
};

export type AzureSpeechFullApiSchemaErrorResponse2 = {
  error: AzureSpeechFullApiSchemaError3;
};

export type AzureSpeechFullApiSchemaPaginatedConsents = {
  value: ReadonlyArray<AzureSpeechFullApiSchemaConsent>;
  nextLink?: string;
};

export type AzureSpeechFullApiSchemaEndpoint = {
  id?: string;
  displayName?: string;
  description?: string;
  projectId: AzureSpeechFullApiSchemaResourceId2;
  modelId: AzureSpeechFullApiSchemaResourceId2;
  properties?: AzureSpeechFullApiSchemaEndpointProperties;
  status?: AzureSpeechFullApiSchemaStatus2;
  createdDateTime?: string;
  lastActionDateTime?: string;
};

export type AzureSpeechFullApiSchemaPaginatedEndpoints = {
  value: ReadonlyArray<AzureSpeechFullApiSchemaEndpoint>;
  nextLink?: string;
};

export type AzureSpeechFullApiSchemaModel = {
  id?: AzureSpeechFullApiSchemaResourceId2;
  voiceName?: string;
  description?: string;
  recipe: AzureSpeechFullApiSchemaRecipe;
  locale?: string;
  projectId: AzureSpeechFullApiSchemaResourceId2;
  consentId: AzureSpeechFullApiSchemaResourceId2;
  trainingSetId: AzureSpeechFullApiSchemaResourceId2;
  engineVersion?: string;
  properties?: AzureSpeechFullApiSchemaModelProperties;
  status?: AzureSpeechFullApiSchemaStatus2;
  createdDateTime?: string;
  lastActionDateTime?: string;
};

export type AzureSpeechFullApiSchemaPaginatedModels = {
  value: ReadonlyArray<AzureSpeechFullApiSchemaModel>;
  nextLink?: string;
};

export type AzureSpeechFullApiSchemaRecipe = {
  kind?: string;
  version?: string;
  description?: string;
  minUtteranceCount?: number;
  minStyleUtteranceCount?: number;
  maxCustomStyleNum?: number;
  datasetLocales?: ReadonlyArray<string>;
  modelLocales?: ReadonlyArray<string>;
  presetStyles?: {
  readonly [key: string]: AzureSpeechFullApiSchemaPresetStyleItem | undefined;
};
};

export type AzureSpeechFullApiSchemaOperation2 = {
  id?: AzureSpeechFullApiSchemaOperationId2;
  status?: AzureSpeechFullApiSchemaOperationStatus2;
};

export type AzureSpeechFullApiSchemaPersonalVoice = {
  id?: AzureSpeechFullApiSchemaResourceId2;
  speakerProfileId?: string;
  displayName?: string;
  description?: string;
  projectId: AzureSpeechFullApiSchemaResourceId2;
  consentId: AzureSpeechFullApiSchemaResourceId2;
  audios?: AzureSpeechFullApiSchemaAzureBlobContentSource;
  properties?: AzureSpeechFullApiSchemaPersonalVoiceProperties;
  status?: AzureSpeechFullApiSchemaStatus2;
  createdDateTime?: string;
  lastActionDateTime?: string;
};

export type AzureSpeechFullApiSchemaPaginatedPersonalVoices = {
  value: ReadonlyArray<AzureSpeechFullApiSchemaPersonalVoice>;
  nextLink?: string;
};

export type AzureSpeechFullApiSchemaProject = {
  id?: AzureSpeechFullApiSchemaResourceId2;
  displayName?: string;
  description?: string;
  kind: AzureSpeechFullApiSchemaProjectKind;
  createdDateTime?: string;
};

export type AzureSpeechFullApiSchemaPaginatedProjects = {
  value: ReadonlyArray<AzureSpeechFullApiSchemaProject>;
  nextLink?: string;
};

export type AzureSpeechFullApiSchemaTrainingSet = {
  id?: AzureSpeechFullApiSchemaResourceId2;
  displayName?: string;
  description?: string;
  locale: string;
  voiceKind?: AzureSpeechFullApiSchemaVoiceKind;
  properties?: AzureSpeechFullApiSchemaTrainingSetProperties;
  projectId: AzureSpeechFullApiSchemaResourceId2;
  status?: AzureSpeechFullApiSchemaStatus2;
  createdDateTime?: string;
  lastActionDateTime?: string;
};

export type AzureSpeechFullApiSchemaPaginatedTrainingSets = {
  value: ReadonlyArray<AzureSpeechFullApiSchemaTrainingSet>;
  nextLink?: string;
};

export type AzureSpeechFullApiSchemaDataset = {
  displayName?: string;
  description?: string;
  kind: AzureSpeechFullApiSchemaDatasetKind;
  audios: AzureSpeechFullApiSchemaAzureBlobContentSource;
  scripts?: AzureSpeechFullApiSchemaAzureBlobContentSource;
};

export type AzureSpeechFullApiSchemaCommitBlocksEntry = {
  kind?: AzureSpeechFullApiSchemaBlockKind;
  id?: string;
};

export type AzureSpeechFullApiSchemaError = {
  message?: string;
  target?: string;
  innerError?: AzureSpeechFullApiSchemaInnerError;
  code?: AzureSpeechFullApiSchemaErrorCode;
  details?: ReadonlyArray<AzureSpeechFullApiSchemaError>;
};

export type AzureSpeechFullApiSchemaDataset2 = {
  self?: string;
  displayName: string;
  description?: string;
  customProperties?: {
  readonly [key: string]: string | undefined;
};
  locale: string;
  createdDateTime?: string;
  lastActionDateTime?: string;
  kind: AzureSpeechFullApiSchemaDatasetKind2;
  project?: AzureSpeechFullApiSchemaEntityReference;
  links?: AzureSpeechFullApiSchemaDatasetLinks;
  properties?: AzureSpeechFullApiSchemaDatasetProperties;
  contentUrl?: string;
  status?: AzureSpeechFullApiSchemaStatus3;
};

export type AzureSpeechFullApiSchemaUploadedBlocks = {
  committedBlocks?: ReadonlyArray<AzureSpeechFullApiSchemaResponseBlock>;
  uncommittedBlocks?: ReadonlyArray<AzureSpeechFullApiSchemaResponseBlock>;
};

export type AzureSpeechFullApiSchemaFile = {
  self?: string;
  name?: string;
  kind?: AzureSpeechFullApiSchemaFileKind;
  links?: AzureSpeechFullApiSchemaFileLinks;
  properties?: AzureSpeechFullApiSchemaFileProperties;
  createdDateTime?: string;
};

export type AzureSpeechFullApiSchemaPaginatedDatasets = {
  values?: ReadonlyArray<AzureSpeechFullApiSchemaDataset2>;
  "@nextLink"?: string;
};

export type AzureSpeechFullApiSchemaPaginatedFiles = {
  values?: ReadonlyArray<AzureSpeechFullApiSchemaFile>;
  "@nextLink"?: string;
};

export type AzureSpeechFullApiSchemaDatasetLocales = {
  Language?: ReadonlyArray<string>;
  Acoustic?: ReadonlyArray<string>;
  Pronunciation?: ReadonlyArray<string>;
  AudioFiles?: ReadonlyArray<string>;
  LanguageMarkdown?: ReadonlyArray<string>;
  OutputFormatting?: ReadonlyArray<string>;
};

export type AzureSpeechFullApiSchemaDatasetUpdate = {
  displayName?: string;
  description?: string;
  project?: AzureSpeechFullApiSchemaEntityReference;
  customProperties?: {
  readonly [key: string]: string | undefined;
};
};

export type AzureSpeechFullApiSchemaEndpoint2 = {
  self?: string;
  model?: AzureSpeechFullApiSchemaEntityReference;
  project?: AzureSpeechFullApiSchemaEntityReference;
  displayName: string;
  description?: string;
  customProperties?: {
  readonly [key: string]: string | undefined;
};
  locale: string;
  createdDateTime?: string;
  lastActionDateTime?: string;
  properties?: AzureSpeechFullApiSchemaEndpointProperties2;
  links?: AzureSpeechFullApiSchemaEndpointLinks;
  status?: AzureSpeechFullApiSchemaStatus3;
};

export type AzureSpeechFullApiSchemaPaginatedEndpoints2 = {
  values?: ReadonlyArray<AzureSpeechFullApiSchemaEndpoint2>;
  "@nextLink"?: string;
};

export type AzureSpeechFullApiSchemaEndpointUpdate = {
  displayName?: string;
  description?: string;
  model?: AzureSpeechFullApiSchemaEntityReference;
  properties?: AzureSpeechFullApiSchemaEndpointPropertiesUpdate;
  project?: AzureSpeechFullApiSchemaEntityReference;
  customProperties?: {
  readonly [key: string]: string | undefined;
};
};

export type AzureSpeechFullApiSchemaEvaluation = {
  displayName: string;
  description?: string;
  customProperties?: {
  readonly [key: string]: string | undefined;
};
  self?: string;
  createdDateTime?: string;
  lastActionDateTime?: string;
  model1: AzureSpeechFullApiSchemaEntityReference;
  model2: AzureSpeechFullApiSchemaEntityReference;
  dataset: AzureSpeechFullApiSchemaEntityReference;
  transcription1?: AzureSpeechFullApiSchemaEntityReference;
  transcription2?: AzureSpeechFullApiSchemaEntityReference;
  project?: AzureSpeechFullApiSchemaEntityReference;
  links?: AzureSpeechFullApiSchemaEvaluationLinks;
  locale: string;
  properties?: AzureSpeechFullApiSchemaEvaluationProperties;
  status?: AzureSpeechFullApiSchemaStatus3;
};

export type AzureSpeechFullApiSchemaPaginatedEvaluations = {
  values?: ReadonlyArray<AzureSpeechFullApiSchemaEvaluation>;
  "@nextLink"?: string;
};

export type AzureSpeechFullApiSchemaEvaluationUpdate = {
  displayName?: string;
  description?: string;
  project?: AzureSpeechFullApiSchemaEntityReference;
  customProperties?: {
  readonly [key: string]: string | undefined;
};
};

export type AzureSpeechFullApiSchemaModelCopyAuthorizationDefinition = {
  sourceResourceId: string;
};

export type AzureSpeechFullApiSchemaModelCopyAuthorization = {
  targetResourceRegion: string;
  targetResourceId: string;
  targetResourceEndpoint: string;
  sourceResourceId: string;
  expirationDateTime: string;
  id: string;
};

export type AzureSpeechFullApiSchemaOperation3 = {
  id: string;
  self?: string;
  createdDateTime?: string;
  lastActionDateTime?: string;
  status?: AzureSpeechFullApiSchemaStatus3;
  result?: AzureSpeechFullApiSchemaOperationResult;
  error?: AzureSpeechFullApiSchemaEntityError;
};

export type AzureSpeechFullApiSchemaCustomModel = AzureSpeechFullApiSchemaSharedModel;

export type AzureSpeechFullApiSchemaBaseModel2 = AzureSpeechFullApiSchemaSharedModel;

export type AzureSpeechFullApiSchemaModelManifest = {
  model: AzureSpeechFullApiSchemaEntityReference;
  modelFiles: ReadonlyArray<AzureSpeechFullApiSchemaModelFile>;
  properties: {
  readonly [key: string]: AzureSpeechFullApiSchemaJsonValue | undefined;
};
};

export type AzureSpeechFullApiSchemaPaginatedBaseModels = {
  values?: ReadonlyArray<AzureSpeechFullApiSchemaBaseModel2>;
  "@nextLink"?: string;
};

export type AzureSpeechFullApiSchemaPaginatedCustomModels = {
  values?: ReadonlyArray<AzureSpeechFullApiSchemaCustomModel>;
  "@nextLink"?: string;
};

export type AzureSpeechFullApiSchemaModelUpdate = {
  displayName?: string;
  description?: string;
  project?: AzureSpeechFullApiSchemaEntityReference;
  customProperties?: {
  readonly [key: string]: string | undefined;
};
};

export type AzureSpeechFullApiSchemaProject2 = {
  self?: string;
  displayName: string;
  description?: string;
  customProperties?: {
  readonly [key: string]: string | undefined;
};
  locale: string;
  createdDateTime?: string;
  links?: AzureSpeechFullApiSchemaProjectLinks;
  foundryProjectName?: string;
};

export type AzureSpeechFullApiSchemaPaginatedProjects2 = {
  values?: ReadonlyArray<AzureSpeechFullApiSchemaProject2>;
  "@nextLink"?: string;
};

export type AzureSpeechFullApiSchemaPaginatedTranscriptions = {
  values?: ReadonlyArray<AzureSpeechFullApiSchemaTranscription>;
  "@nextLink"?: string;
};

export type AzureSpeechFullApiSchemaProjectUpdate = {
  displayName?: string;
  description?: string;
  customProperties?: {
  readonly [key: string]: string | undefined;
};
  foundryProjectName?: string;
};

export type AzureSpeechFullApiSchemaTranscription = {
  self?: string;
  displayName: string;
  description?: string;
  customProperties?: {
  readonly [key: string]: string | undefined;
};
  locale: string;
  createdDateTime?: string;
  lastActionDateTime?: string;
  contentUrls?: ReadonlyArray<string>;
  model?: AzureSpeechFullApiSchemaEntityReference;
  project?: AzureSpeechFullApiSchemaEntityReference;
  links?: AzureSpeechFullApiSchemaTranscriptionLinks;
  properties: AzureSpeechFullApiSchemaTranscriptionProperties;
  contentContainerUrl?: string;
  dataset?: AzureSpeechFullApiSchemaEntityReference;
  status?: AzureSpeechFullApiSchemaStatus3;
};

export type AzureSpeechFullApiSchemaTranscriptionLocales = {
  Transcribe?: ReadonlyArray<string>;
  Submit?: ReadonlyArray<string>;
};

export type AzureSpeechFullApiSchemaTranscribeResult = {
  durationMilliseconds: number;
  combinedPhrases: ReadonlyArray<AzureSpeechFullApiSchemaChannelCombinedPhrases>;
  phrases: ReadonlyArray<AzureSpeechFullApiSchemaPhrase>;
};

export type AzureSpeechFullApiSchemaTranscriptionUpdate = {
  displayName?: string;
  description?: string;
  project?: AzureSpeechFullApiSchemaEntityReference;
  customProperties?: {
  readonly [key: string]: string | undefined;
};
};

export type AzureSpeechFullApiSchemaWebHook = {
  self?: string;
  displayName: string;
  description?: string;
  customProperties?: {
  readonly [key: string]: string | undefined;
};
  properties?: AzureSpeechFullApiSchemaWebHookProperties;
  webUrl: string;
  events: AzureSpeechFullApiSchemaWebHookEvents;
  createdDateTime?: string;
  lastActionDateTime?: string;
  status?: AzureSpeechFullApiSchemaStatus3;
  links?: AzureSpeechFullApiSchemaWebHookLinks;
};

export type AzureSpeechFullApiSchemaPaginatedWebHooks = {
  values?: ReadonlyArray<AzureSpeechFullApiSchemaWebHook>;
  "@nextLink"?: string;
};

export type AzureSpeechFullApiSchemaWebHookUpdate = {
  displayName?: string;
  description?: string;
  webUrl?: string;
  customProperties?: {
  readonly [key: string]: string | undefined;
};
  properties?: AzureSpeechFullApiSchemaWebHookPropertiesUpdate;
  events?: AzureSpeechFullApiSchemaWebHookEvents;
};

export type AzureSpeechFullApiSchemaTranscriptionResult = {
  durationMilliseconds: number;
  combinedPhrases: ReadonlyArray<AzureSpeechFullApiSchemaChannelCombinedPhrases2>;
  phrases: ReadonlyArray<AzureSpeechFullApiSchemaTranscribedPhrase>;
};

export type AzureSpeechFullApiSchemaInputKind = "PlainText" | "SSML";

export type AzureSpeechFullApiSchemaBatchSynthesisInput = {
  content: string;
};

export type AzureSpeechFullApiSchemaBatchSynthesisConfig = {
  voice: string;
  style?: string;
  rate?: string;
  pitch?: string;
  volume?: string;
  backgroundAudio?: AzureSpeechFullApiSchemaBatchSynthesisBackgroundAudioDefinition;
};

export type AzureSpeechFullApiSchemaBatchSynthesisProperties = {
  timeToLiveInHours?: number;
  outputFormat?: string;
  concatenateResult?: boolean;
  decompressOutputFiles?: boolean;
  wordBoundaryEnabled?: boolean;
  sentenceBoundaryEnabled?: boolean;
  destinationContainerUrl?: string;
  destinationPath?: string;
  sizeInBytes?: number;
  succeededAudioCount?: number;
  failedAudioCount?: number;
  durationInMilliseconds?: number;
  billingDetails?: AzureSpeechFullApiSchemaBatchSynthesisBillingDetails;
  error?: AzureSpeechFullApiSchemaBatchSynthesisError;
};

export type AzureSpeechFullApiSchemaBatchSynthesisOutputs = {
  result?: string;
  summary?: string;
};

export type AzureSpeechFullApiSchemaStatus = "NotStarted" | "Running" | "Succeeded" | "Failed";

export type AzureSpeechFullApiSchemaResourceId = string;

export type AzureSpeechFullApiSchemaError2 = {
  code: AzureSpeechFullApiSchemaErrorCode2;
  target?: string;
  message: string;
  details?: ReadonlyArray<AzureSpeechFullApiSchemaError2>;
  innererror?: AzureSpeechFullApiSchemaInnerError2;
};

export type AzureSpeechFullApiSchemaOperationId = string;

export type AzureSpeechFullApiSchemaOperationStatus = "NotStarted" | "Running" | "Succeeded" | "Failed";

export type AzureSpeechFullApiSchemaModelCapability = "PersonalVoice";

export type AzureSpeechFullApiSchemaResourceId2 = string;

export type AzureSpeechFullApiSchemaConsentProperties = {
  failureReason?: AzureSpeechFullApiSchemaConsentFailureReason;
};

export type AzureSpeechFullApiSchemaStatus2 = "NotStarted" | "Running" | "Succeeded" | "Failed" | "Disabling" | "Disabled";

export type AzureSpeechFullApiSchemaError3 = {
  code: AzureSpeechFullApiSchemaErrorCode3;
  target?: string;
  message: string;
  details?: ReadonlyArray<AzureSpeechFullApiSchemaError3>;
  innererror?: AzureSpeechFullApiSchemaInnerError3;
};

export type AzureSpeechFullApiSchemaEndpointProperties = {
  kind?: AzureSpeechFullApiSchemaEndpointKind;
};

export type AzureSpeechFullApiSchemaModelProperties = {
  presetStyles?: ReadonlyArray<string>;
  styleTrainingSetIds?: {
  readonly [key: string]: AzureSpeechFullApiSchemaResourceId2 | undefined;
};
  voiceStyles?: ReadonlyArray<string>;
  failureReason?: AzureSpeechFullApiSchemaModelFailureReason;
};

export type AzureSpeechFullApiSchemaPresetStyleItem = {
  male?: ReadonlyArray<string>;
  female?: ReadonlyArray<string>;
};

export type AzureSpeechFullApiSchemaOperationId2 = string;

export type AzureSpeechFullApiSchemaOperationStatus2 = "NotStarted" | "Running" | "Succeeded" | "Failed";

export type AzureSpeechFullApiSchemaAzureBlobContentSource = {
  containerUrl: string;
  prefix?: string;
  extensions: ReadonlyArray<string>;
};

export type AzureSpeechFullApiSchemaPersonalVoiceProperties = {
  failureReason?: AzureSpeechFullApiSchemaModelFailureReason;
};

export type AzureSpeechFullApiSchemaProjectKind = "ProfessionalVoice" | "PersonalVoice";

export type AzureSpeechFullApiSchemaVoiceKind = "Male" | "Female";

export type AzureSpeechFullApiSchemaTrainingSetProperties = {
  utteranceCount?: number;
};

export type AzureSpeechFullApiSchemaDatasetKind = "AudioAndScript" | "LongAudio" | "AudioOnly";

export type AzureSpeechFullApiSchemaBlockKind = "Committed" | "Uncommitted" | "Latest";

export type AzureSpeechFullApiSchemaInnerError = {
  message?: string;
  target?: string;
  innerError?: AzureSpeechFullApiSchemaInnerError;
  code?: AzureSpeechFullApiSchemaDetailedErrorCode;
  details?: {
  readonly [key: string]: string | undefined;
};
};

export type AzureSpeechFullApiSchemaErrorCode = "InvalidRequest" | "InvalidArgument" | "InternalServerError" | "ServiceUnavailable" | "NotFound" | "PipelineError" | "Conflict" | "InternalCommunicationFailed" | "Forbidden" | "NotAllowed" | "Unauthorized" | "UnsupportedMediaType" | "TooManyRequests" | "UnprocessableEntity";

export type AzureSpeechFullApiSchemaDatasetKind2 = "Language" | "Acoustic" | "Pronunciation" | "AudioFiles" | "LanguageMarkdown" | "OutputFormatting";

export type AzureSpeechFullApiSchemaEntityReference = {
  self: string;
};

export type AzureSpeechFullApiSchemaDatasetLinks = {
  files?: string;
  commitBlocks?: string;
  listBlocks?: string;
  uploadBlocks?: string;
};

export type AzureSpeechFullApiSchemaDatasetProperties = {
  acceptedLineCount?: number;
  rejectedLineCount?: number;
  durationMilliseconds?: number;
  textNormalizationKind?: AzureSpeechFullApiSchemaTextNormalizationKind;
  error?: AzureSpeechFullApiSchemaEntityError;
};

export type AzureSpeechFullApiSchemaStatus3 = "NotStarted" | "Running" | "Succeeded" | "Failed";

export type AzureSpeechFullApiSchemaResponseBlock = {
  name?: string;
  size?: number;
};

export type AzureSpeechFullApiSchemaFileKind = "DatasetReport" | "Audio" | "LanguageData" | "PronunciationData" | "AcousticDataArchive" | "AcousticDataTranscriptionV2" | "Transcription" | "TranscriptionReport" | "EvaluationDetails" | "ModelReport" | "OutputFormattingData";

export type AzureSpeechFullApiSchemaFileLinks = {
  contentUrl?: string;
};

export type AzureSpeechFullApiSchemaFileProperties = {
  size?: number;
  durationMilliseconds?: number;
};

export type AzureSpeechFullApiSchemaEndpointProperties2 = {
  loggingEnabled?: boolean;
  error?: AzureSpeechFullApiSchemaEntityError;
};

export type AzureSpeechFullApiSchemaEndpointLinks = {
  webSocket?: string;
};

export type AzureSpeechFullApiSchemaEndpointPropertiesUpdate = {
  contentLoggingEnabled?: boolean;
};

export type AzureSpeechFullApiSchemaEvaluationLinks = {
  files?: string;
};

export type AzureSpeechFullApiSchemaEvaluationProperties = {
  wordErrorRate1?: number;
  sentenceErrorRate1?: number;
  tokenErrorRate1?: number;
  sentenceCount1?: number;
  wordCount1?: number;
  correctWordCount1?: number;
  wordSubstitutionCount1?: number;
  wordDeletionCount1?: number;
  wordInsertionCount1?: number;
  tokenCount1?: number;
  correctTokenCount1?: number;
  tokenSubstitutionCount1?: number;
  tokenDeletionCount1?: number;
  tokenInsertionCount1?: number;
  tokenErrors1?: AzureSpeechFullApiSchemaTokenErrorDetails;
  wordErrorRate2?: number;
  sentenceErrorRate2?: number;
  tokenErrorRate2?: number;
  sentenceCount2?: number;
  wordCount2?: number;
  correctWordCount2?: number;
  wordSubstitutionCount2?: number;
  wordDeletionCount2?: number;
  wordInsertionCount2?: number;
  tokenCount2?: number;
  correctTokenCount2?: number;
  tokenSubstitutionCount2?: number;
  tokenDeletionCount2?: number;
  tokenInsertionCount2?: number;
  tokenErrors2?: AzureSpeechFullApiSchemaTokenErrorDetails;
  error?: AzureSpeechFullApiSchemaEntityError;
};

export type AzureSpeechFullApiSchemaOperationResult = {
  link?: string;
};

export type AzureSpeechFullApiSchemaEntityError = {
  code?: string;
  message?: string;
};

export type AzureSpeechFullApiSchemaSharedModel = {
  self?: string;
  displayName: string;
  description?: string;
  locale: string;
  createdDateTime?: string;
  lastActionDateTime?: string;
  status?: AzureSpeechFullApiSchemaStatus3;
};

export type AzureSpeechFullApiSchemaModelFile = {
  name?: string;
  contentUrl?: string;
};

export type AzureSpeechFullApiSchemaProjectLinks = {
  evaluations?: string;
  datasets?: string;
  models?: string;
  endpoints?: string;
  transcriptions?: string;
};

export type AzureSpeechFullApiSchemaTranscriptionLinks = {
  files?: string;
};

export type AzureSpeechFullApiSchemaTranscriptionProperties = {
  wordLevelTimestampsEnabled?: boolean;
  displayFormWordLevelTimestampsEnabled?: boolean;
  channels?: ReadonlyArray<number>;
  punctuationMode?: AzureSpeechFullApiSchemaPunctuationMode;
  profanityFilterMode?: AzureSpeechFullApiSchemaProfanityFilterMode;
  destinationContainerUrl?: string;
  timeToLiveHours: number;
  languageIdentification?: AzureSpeechFullApiSchemaLanguageIdentificationProperties;
  diarization?: AzureSpeechFullApiSchemaDiarizationProperties;
  error?: AzureSpeechFullApiSchemaEntityError;
  durationMilliseconds?: number;
};

export type AzureSpeechFullApiSchemaChannelCombinedPhrases = {
  channel?: number;
  text: string;
};

export type AzureSpeechFullApiSchemaPhrase = {
  channel?: number;
  speaker?: number;
  offsetMilliseconds: number;
  durationMilliseconds: number;
  text: string;
  words?: ReadonlyArray<AzureSpeechFullApiSchemaWord>;
  locale?: string;
  confidence: number;
};

export type AzureSpeechFullApiSchemaWebHookProperties = {
  apiVersion?: string;
  secret?: string;
  error?: AzureSpeechFullApiSchemaEntityError;
};

export type AzureSpeechFullApiSchemaWebHookEvents = {
  datasetCreation?: boolean;
  datasetProcessing?: boolean;
  datasetCompletion?: boolean;
  datasetDeletion?: boolean;
  modelCreation?: boolean;
  modelProcessing?: boolean;
  modelCompletion?: boolean;
  modelDeletion?: boolean;
  evaluationCreation?: boolean;
  evaluationProcessing?: boolean;
  evaluationCompletion?: boolean;
  evaluationDeletion?: boolean;
  transcriptionCreation?: boolean;
  transcriptionProcessing?: boolean;
  transcriptionCompletion?: boolean;
  transcriptionDeletion?: boolean;
  endpointCreation?: boolean;
  endpointProcessing?: boolean;
  endpointCompletion?: boolean;
  endpointDeletion?: boolean;
  ping?: boolean;
  challenge?: boolean;
};

export type AzureSpeechFullApiSchemaWebHookLinks = {
  test?: string;
  ping?: string;
};

export type AzureSpeechFullApiSchemaWebHookPropertiesUpdate = {
  secret?: string;
};

export type AzureSpeechFullApiSchemaChannelCombinedPhrases2 = {
  channel?: number;
  text: string;
};

export type AzureSpeechFullApiSchemaTranscribedPhrase = {
  channel?: number;
  speaker?: number;
  offsetMilliseconds: number;
  durationMilliseconds: number;
  text: string;
  words?: ReadonlyArray<AzureSpeechFullApiSchemaTranscribedWord>;
  locale?: string;
  confidence: number;
};

export type AzureSpeechFullApiSchemaBatchSynthesisBackgroundAudioDefinition = {
  src: string;
  fadein?: number;
  fadeout?: number;
  volume?: number;
};

export type AzureSpeechFullApiSchemaBatchSynthesisBillingDetails = {
  neuralCharacters?: number;
  customNeuralCharacters?: number;
  aoaiCharacters?: number;
  aoaiHDCharacters?: number;
  personalVoiceCharacters?: number;
};

export type AzureSpeechFullApiSchemaBatchSynthesisError = {
  code?: string;
  message?: string;
};

export type AzureSpeechFullApiSchemaErrorCode2 = "BadRequest" | "BadArgument" | "Unauthorized" | "Forbidden" | "NotFound" | "UnsupportedMediaType" | "TooManyRequests" | "InternalServerError" | "ServiceUnavailable";

export type AzureSpeechFullApiSchemaInnerError2 = {
  code?: string;
  target?: string;
  message?: string;
  innererror?: AzureSpeechFullApiSchemaInnerError2;
};

export type AzureSpeechFullApiSchemaConsentFailureReason = "AudioAndScriptNotMatch" | "Internal";

export type AzureSpeechFullApiSchemaErrorCode3 = "BadRequest" | "BadArgument" | "Unauthorized" | "Forbidden" | "NotFound" | "UnsupportedMediaType" | "TooManyRequests" | "InternalServerError" | "ServiceUnavailable";

export type AzureSpeechFullApiSchemaInnerError3 = {
  code?: string;
  target?: string;
  message?: string;
  innererror?: AzureSpeechFullApiSchemaInnerError3;
};

export type AzureSpeechFullApiSchemaEndpointKind = "HighPerformance" | "FastResume";

export type AzureSpeechFullApiSchemaModelFailureReason = "InaccessibleCustomerStorage" | "SpeakerVerificationFailed" | "TerminateByUser" | "Internal";

export type AzureSpeechFullApiSchemaDetailedErrorCode = "InvalidParameterValue" | "InvalidRequestBodyFormat" | "EmptyRequest" | "MissingInputRecords" | "InvalidDocument" | "ModelVersionIncorrect" | "InvalidDocumentBatch" | "UnsupportedLanguageCode" | "DataImportFailed" | "InUseViolation" | "InvalidLocale" | "InvalidBaseModel" | "InvalidAdaptationMapping" | "InvalidDataset" | "InvalidTest" | "FailedDataset" | "InvalidModel" | "InvalidTranscription" | "InvalidPayload" | "InvalidParameter" | "EndpointWithoutLogging" | "InvalidPermissions" | "InvalidPrerequisite" | "InvalidProductId" | "InvalidSubscription" | "InvalidProject" | "InvalidProjectKind" | "InvalidRecordingsUri" | "OnlyOneOfUrlsOrContainerOrDataset" | "ExceededNumberOfRecordingsUris" | "InvalidChannels" | "ModelMismatch" | "ProjectGenderMismatch" | "ModelDeprecated" | "ModelExists" | "ModelNotDeployable" | "EndpointNotUpdatable" | "SingleDefaultEndpoint" | "EndpointCannotBeDefault" | "InvalidModelUri" | "SubscriptionNotFound" | "QuotaViolation" | "UnsupportedDelta" | "UnsupportedFilter" | "UnsupportedPagination" | "UnsupportedDynamicConfiguration" | "UnsupportedOrderBy" | "NoUtf8WithBom" | "ModelDeploymentNotCompleteState" | "SkuLimitsExist" | "DeployingFailedModel" | "UnsupportedTimeRange" | "InvalidLogDate" | "InvalidLogId" | "InvalidLogStartTime" | "InvalidLogEndTime" | "InvalidTopForLogs" | "InvalidSkipTokenForLogs" | "DeleteNotAllowed" | "Forbidden" | "DeployNotAllowed" | "UnexpectedError" | "InvalidCollection" | "InvalidCallbackUri" | "InvalidSasValidityDuration" | "InaccessibleCustomerStorage" | "UnsupportedClassBasedAdaptation" | "InvalidWebHookEventKind" | "InvalidTimeToLive" | "InvalidSourceAzureResourceId" | "ModelCopyAuthorizationExpired" | "EndpointLoggingNotSupported" | "NoLanguageIdentified" | "MultipleLanguagesIdentified" | "InvalidAudioFormat" | "BadChannelConfiguration" | "InvalidChannelSpecification" | "AudioLengthLimitExceeded" | "EmptyAudioFile";

export type AzureSpeechFullApiSchemaTextNormalizationKind = "Default" | "None";

export type AzureSpeechFullApiSchemaTokenErrorDetails = {
  punctuation?: AzureSpeechFullApiSchemaEditsSummary;
  capitalization?: AzureSpeechFullApiSchemaEditsSummary;
  inverseTextNormalization?: AzureSpeechFullApiSchemaEditsSummary;
  lexical?: AzureSpeechFullApiSchemaEditsSummary;
  others?: AzureSpeechFullApiSchemaEditsSummary;
};

export type AzureSpeechFullApiSchemaPunctuationMode = "None" | "Dictated" | "Automatic" | "DictatedAndAutomatic";

export type AzureSpeechFullApiSchemaProfanityFilterMode = "None" | "Removed" | "Tags" | "Masked";

export type AzureSpeechFullApiSchemaLanguageIdentificationProperties = {
  candidateLocales: ReadonlyArray<string>;
  speechModelMapping?: {
  readonly [key: string]: AzureSpeechFullApiSchemaEntityReference | undefined;
};
  mode?: AzureSpeechFullApiSchemaLanguageIdentificationMode;
};

export type AzureSpeechFullApiSchemaDiarizationProperties = {
  enabled?: boolean;
  maxSpeakers?: number;
};

export type AzureSpeechFullApiSchemaWord = {
  text: string;
  offsetMilliseconds: number;
  durationMilliseconds: number;
};

export type AzureSpeechFullApiSchemaTranscribedWord = {
  text: string;
  offsetMilliseconds: number;
  durationMilliseconds: number;
};

export type AzureSpeechFullApiSchemaEditsSummary = {
  numberOfEdits?: number;
  percentageOfAllEdits?: number;
};

export type AzureSpeechFullApiSchemaLanguageIdentificationMode = "Continuous" | "Single";

export interface AzureSpeechFullApiOperationQueryMap {
  "batch-text-to-speech:BatchSyntheses_Create:/batchsyntheses/{id}": {
  "api-version": string;
};
  "batch-text-to-speech:BatchSyntheses_Delete:/batchsyntheses/{id}": {
  "api-version": string;
};
  "batch-text-to-speech:BatchSyntheses_Get:/batchsyntheses/{id}": {
  "api-version": string;
};
  "batch-text-to-speech:BatchSyntheses_List:/batchsyntheses": {
  skip?: number;
  maxpagesize?: number;
  "api-version": string;
};
  "batch-text-to-speech:Operations_Get:/operations/{id}": {
  "api-version": string;
};
  "custom-text-to-speech:BaseModels_List:/basemodels": {
  "api-version": string;
};
  "custom-text-to-speech:Consents_Create:/consents/{id}": {
  "api-version": string;
};
  "custom-text-to-speech:Consents_Delete:/consents/{id}": {
  "api-version": string;
};
  "custom-text-to-speech:Consents_Get:/consents/{id}": {
  "api-version": string;
};
  "custom-text-to-speech:Consents_List:/consents": {
  skip?: number;
  maxpagesize?: number;
  filter?: string;
  "api-version": string;
};
  "custom-text-to-speech:Consents_Post:/consents/{id}": {
  "api-version": string;
};
  "custom-text-to-speech:Endpoints_Create:/endpoints/{id}": {
  "api-version": string;
};
  "custom-text-to-speech:Endpoints_Delete:/endpoints/{id}": {
  "api-version": string;
};
  "custom-text-to-speech:Endpoints_Get:/endpoints/{id}": {
  "api-version": string;
};
  "custom-text-to-speech:Endpoints_List:/endpoints": {
  skip?: number;
  maxpagesize?: number;
  filter?: string;
  "api-version": string;
};
  "custom-text-to-speech:Endpoints_Resume:/endpoints/{id}:resume": {
  "api-version": string;
};
  "custom-text-to-speech:Endpoints_Suspend:/endpoints/{id}:suspend": {
  "api-version": string;
};
  "custom-text-to-speech:Models_Create:/models/{id}": {
  "api-version": string;
};
  "custom-text-to-speech:Models_Delete:/models/{id}": {
  "api-version": string;
};
  "custom-text-to-speech:Models_Get:/models/{id}": {
  "api-version": string;
};
  "custom-text-to-speech:Models_List:/models": {
  skip?: number;
  maxpagesize?: number;
  filter?: string;
  "api-version": string;
};
  "custom-text-to-speech:Models_ListRecipes:/modelrecipes": {
  "api-version": string;
};
  "custom-text-to-speech:Operations_Get:/operations/{id}": {
  "api-version": string;
};
  "custom-text-to-speech:PersonalVoices_Create:/personalvoices/{id}": {
  "api-version": string;
};
  "custom-text-to-speech:PersonalVoices_Delete:/personalvoices/{id}": {
  "api-version": string;
};
  "custom-text-to-speech:PersonalVoices_Get:/personalvoices/{id}": {
  "api-version": string;
};
  "custom-text-to-speech:PersonalVoices_List:/personalvoices": {
  skip?: number;
  maxpagesize?: number;
  filter?: string;
  "api-version": string;
};
  "custom-text-to-speech:PersonalVoices_Post:/personalvoices/{id}": {
  "api-version": string;
};
  "custom-text-to-speech:Projects_Create:/projects/{id}": {
  "api-version": string;
};
  "custom-text-to-speech:Projects_Delete:/projects/{id}": {
  forceDelete?: boolean;
  "api-version": string;
};
  "custom-text-to-speech:Projects_Get:/projects/{id}": {
  "api-version": string;
};
  "custom-text-to-speech:Projects_List:/projects": {
  skip?: number;
  maxpagesize?: number;
  filter?: string;
  "api-version": string;
};
  "custom-text-to-speech:TrainingSets_Create:/trainingsets/{id}": {
  "api-version": string;
};
  "custom-text-to-speech:TrainingSets_Delete:/trainingsets/{id}": {
  "api-version": string;
};
  "custom-text-to-speech:TrainingSets_Get:/trainingsets/{id}": {
  "api-version": string;
};
  "custom-text-to-speech:TrainingSets_List:/trainingsets": {
  skip?: number;
  maxpagesize?: number;
  filter?: string;
  "api-version": string;
};
  "custom-text-to-speech:TrainingSets_UploadData:/trainingsets/{id}:upload": {
  "api-version": string;
};
  "speech-to-text:Datasets_CommitBlocks:/datasets/{id}/blocks:commit": {
  "api-version": string;
};
  "speech-to-text:Datasets_Create:/datasets": {
  "api-version": string;
};
  "speech-to-text:Datasets_Delete:/datasets/{id}": {
  "api-version": string;
};
  "speech-to-text:Datasets_Get:/datasets/{id}": {
  "api-version": string;
};
  "speech-to-text:Datasets_GetBlocks:/datasets/{id}/blocks": {
  "api-version": string;
};
  "speech-to-text:Datasets_GetFile:/datasets/{id}/files/{fileId}": {
  sasLifetimeMinutes?: number;
  "api-version": string;
};
  "speech-to-text:Datasets_List:/datasets": {
  skip?: number;
  top?: number;
  filter?: string;
  "api-version": string;
};
  "speech-to-text:Datasets_ListFiles:/datasets/{id}/files": {
  sasLifetimeMinutes?: number;
  skip?: number;
  top?: number;
  filter?: string;
  "api-version": string;
};
  "speech-to-text:Datasets_ListSupportedLocales:/datasets/locales": {
  "api-version": string;
};
  "speech-to-text:Datasets_Update:/datasets/{id}": {
  "api-version": string;
};
  "speech-to-text:Datasets_UploadBlock:/datasets/{id}/blocks": {
  blockid: string;
  "api-version": string;
};
  "speech-to-text:Endpoints_Create:/endpoints": {
  "api-version": string;
};
  "speech-to-text:Endpoints_Delete:/endpoints/{id}": {
  "api-version": string;
};
  "speech-to-text:Endpoints_Get:/endpoints/{id}": {
  "api-version": string;
};
  "speech-to-text:Endpoints_List:/endpoints": {
  skip?: number;
  top?: number;
  filter?: string;
  "api-version": string;
};
  "speech-to-text:Endpoints_ListSupportedLocales:/endpoints/locales": {
  "api-version": string;
};
  "speech-to-text:Endpoints_Update:/endpoints/{id}": {
  "api-version": string;
};
  "speech-to-text:Evaluations_Create:/evaluations": {
  "api-version": string;
};
  "speech-to-text:Evaluations_Delete:/evaluations/{id}": {
  "api-version": string;
};
  "speech-to-text:Evaluations_Get:/evaluations/{id}": {
  "api-version": string;
};
  "speech-to-text:Evaluations_GetFile:/evaluations/{id}/files/{fileId}": {
  sasLifetimeMinutes?: number;
  "api-version": string;
};
  "speech-to-text:Evaluations_List:/evaluations": {
  skip?: number;
  top?: number;
  filter?: string;
  "api-version": string;
};
  "speech-to-text:Evaluations_ListFiles:/evaluations/{id}/files": {
  sasLifetimeMinutes?: number;
  skip?: number;
  top?: number;
  filter?: string;
  "api-version": string;
};
  "speech-to-text:Evaluations_ListSupportedLocales:/evaluations/locales": {
  "api-version": string;
};
  "speech-to-text:Evaluations_Update:/evaluations/{id}": {
  "api-version": string;
};
  "speech-to-text:Models_AuthorizeCopy:/models:authorizecopy": {
  "api-version": string;
};
  "speech-to-text:Models_Copy:/models/{id}:copy": {
  "api-version": string;
};
  "speech-to-text:Models_Create:/models": {
  "api-version": string;
};
  "speech-to-text:Models_Delete:/models/{id}": {
  "api-version": string;
};
  "speech-to-text:Models_GetBaseModel:/models/base/{id}": {
  "api-version": string;
};
  "speech-to-text:Models_GetBaseModelManifest:/models/base/{id}/manifest": {
  sasLifetimeMinutes: number;
  "api-version": string;
};
  "speech-to-text:Models_GetCustomModel:/models/{id}": {
  "api-version": string;
};
  "speech-to-text:Models_GetCustomModelManifest:/models/{id}/manifest": {
  sasLifetimeMinutes: number;
  "api-version": string;
};
  "speech-to-text:Models_GetFile:/models/{id}/files/{fileId}": {
  sasLifetimeMinutes?: number;
  "api-version": string;
};
  "speech-to-text:Models_ListBaseModels:/models/base": {
  skip?: number;
  top?: number;
  filter?: string;
  "api-version": string;
};
  "speech-to-text:Models_ListCustomModels:/models": {
  skip?: number;
  top?: number;
  filter?: string;
  "api-version": string;
};
  "speech-to-text:Models_ListFiles:/models/{id}/files": {
  sasLifetimeMinutes?: number;
  skip?: number;
  top?: number;
  filter?: string;
  "api-version": string;
};
  "speech-to-text:Models_ListSupportedLocales:/models/locales": {
  "api-version": string;
};
  "speech-to-text:Models_Update:/models/{id}": {
  "api-version": string;
};
  "speech-to-text:Operations_GetModelCopy:/operations/models/copy/{id}": {
  "api-version": string;
};
  "speech-to-text:Projects_Create:/projects": {
  "api-version": string;
};
  "speech-to-text:Projects_Delete:/projects/{id}": {
  "api-version": string;
};
  "speech-to-text:Projects_Get:/projects/{id}": {
  "api-version": string;
};
  "speech-to-text:Projects_List:/projects": {
  skip?: number;
  top?: number;
  filter?: string;
  "api-version": string;
};
  "speech-to-text:Projects_ListDatasets:/projects/{id}/datasets": {
  skip?: number;
  top?: number;
  filter?: string;
  "api-version": string;
};
  "speech-to-text:Projects_ListEndpoints:/projects/{id}/endpoints": {
  skip?: number;
  top?: number;
  filter?: string;
  "api-version": string;
};
  "speech-to-text:Projects_ListEvaluations:/projects/{id}/evaluations": {
  skip?: number;
  top?: number;
  filter?: string;
  "api-version": string;
};
  "speech-to-text:Projects_ListModels:/projects/{id}/models": {
  skip?: number;
  top?: number;
  filter?: string;
  "api-version": string;
};
  "speech-to-text:Projects_ListSupportedLocales:/projects/locales": {
  "api-version": string;
};
  "speech-to-text:Projects_ListTranscriptions:/projects/{id}/transcriptions": {
  skip?: number;
  top?: number;
  filter?: string;
  "api-version": string;
};
  "speech-to-text:Projects_Update:/projects/{id}": {
  "api-version": string;
};
  "speech-to-text:Transcriptions_Delete:/transcriptions/{id}": {
  "api-version": string;
};
  "speech-to-text:Transcriptions_Get:/transcriptions/{id}": {
  "api-version": string;
};
  "speech-to-text:Transcriptions_GetFile:/transcriptions/{id}/files/{fileId}": {
  sasLifetimeMinutes?: number;
  "api-version": string;
};
  "speech-to-text:Transcriptions_List:/transcriptions": {
  skip?: number;
  top?: number;
  filter?: string;
  "api-version": string;
};
  "speech-to-text:Transcriptions_ListFiles:/transcriptions/{id}/files": {
  sasLifetimeMinutes?: number;
  skip?: number;
  top?: number;
  filter?: string;
  "api-version": string;
};
  "speech-to-text:Transcriptions_ListSupportedLocales:/transcriptions/locales": {
  "api-version": string;
};
  "speech-to-text:Transcriptions_Submit:/transcriptions:submit": {
  "api-version": string;
};
  "speech-to-text:Transcriptions_Transcribe:/transcriptions:transcribe": {
  "api-version": string;
};
  "speech-to-text:Transcriptions_Update:/transcriptions/{id}": {
  "api-version": string;
};
  "speech-to-text:WebHooks_Create:/webhooks": {
  "api-version": string;
};
  "speech-to-text:WebHooks_Delete:/webhooks/{id}": {
  "api-version": string;
};
  "speech-to-text:WebHooks_Get:/webhooks/{id}": {
  "api-version": string;
};
  "speech-to-text:WebHooks_List:/webhooks": {
  skip?: number;
  top?: number;
  filter?: string;
  "api-version": string;
};
  "speech-to-text:WebHooks_Ping:/webhooks/{id}:ping": {
  "api-version": string;
};
  "speech-to-text:WebHooks_Test:/webhooks/{id}:test": {
  "api-version": string;
};
  "speech-to-text:WebHooks_Update:/webhooks/{id}": {
  "api-version": string;
};
  "transcription:Transcribe:/transcriptions:transcribe": {
  "api-version": string;
};
}

export interface AzureSpeechFullApiOperationQueryRequiredMap {
  "batch-text-to-speech:BatchSyntheses_Create:/batchsyntheses/{id}": true;
  "batch-text-to-speech:BatchSyntheses_Delete:/batchsyntheses/{id}": true;
  "batch-text-to-speech:BatchSyntheses_Get:/batchsyntheses/{id}": true;
  "batch-text-to-speech:BatchSyntheses_List:/batchsyntheses": true;
  "batch-text-to-speech:Operations_Get:/operations/{id}": true;
  "custom-text-to-speech:BaseModels_List:/basemodels": true;
  "custom-text-to-speech:Consents_Create:/consents/{id}": true;
  "custom-text-to-speech:Consents_Delete:/consents/{id}": true;
  "custom-text-to-speech:Consents_Get:/consents/{id}": true;
  "custom-text-to-speech:Consents_List:/consents": true;
  "custom-text-to-speech:Consents_Post:/consents/{id}": true;
  "custom-text-to-speech:Endpoints_Create:/endpoints/{id}": true;
  "custom-text-to-speech:Endpoints_Delete:/endpoints/{id}": true;
  "custom-text-to-speech:Endpoints_Get:/endpoints/{id}": true;
  "custom-text-to-speech:Endpoints_List:/endpoints": true;
  "custom-text-to-speech:Endpoints_Resume:/endpoints/{id}:resume": true;
  "custom-text-to-speech:Endpoints_Suspend:/endpoints/{id}:suspend": true;
  "custom-text-to-speech:Models_Create:/models/{id}": true;
  "custom-text-to-speech:Models_Delete:/models/{id}": true;
  "custom-text-to-speech:Models_Get:/models/{id}": true;
  "custom-text-to-speech:Models_List:/models": true;
  "custom-text-to-speech:Models_ListRecipes:/modelrecipes": true;
  "custom-text-to-speech:Operations_Get:/operations/{id}": true;
  "custom-text-to-speech:PersonalVoices_Create:/personalvoices/{id}": true;
  "custom-text-to-speech:PersonalVoices_Delete:/personalvoices/{id}": true;
  "custom-text-to-speech:PersonalVoices_Get:/personalvoices/{id}": true;
  "custom-text-to-speech:PersonalVoices_List:/personalvoices": true;
  "custom-text-to-speech:PersonalVoices_Post:/personalvoices/{id}": true;
  "custom-text-to-speech:Projects_Create:/projects/{id}": true;
  "custom-text-to-speech:Projects_Delete:/projects/{id}": true;
  "custom-text-to-speech:Projects_Get:/projects/{id}": true;
  "custom-text-to-speech:Projects_List:/projects": true;
  "custom-text-to-speech:TrainingSets_Create:/trainingsets/{id}": true;
  "custom-text-to-speech:TrainingSets_Delete:/trainingsets/{id}": true;
  "custom-text-to-speech:TrainingSets_Get:/trainingsets/{id}": true;
  "custom-text-to-speech:TrainingSets_List:/trainingsets": true;
  "custom-text-to-speech:TrainingSets_UploadData:/trainingsets/{id}:upload": true;
  "speech-to-text:Datasets_CommitBlocks:/datasets/{id}/blocks:commit": true;
  "speech-to-text:Datasets_Create:/datasets": true;
  "speech-to-text:Datasets_Delete:/datasets/{id}": true;
  "speech-to-text:Datasets_Get:/datasets/{id}": true;
  "speech-to-text:Datasets_GetBlocks:/datasets/{id}/blocks": true;
  "speech-to-text:Datasets_GetFile:/datasets/{id}/files/{fileId}": true;
  "speech-to-text:Datasets_List:/datasets": true;
  "speech-to-text:Datasets_ListFiles:/datasets/{id}/files": true;
  "speech-to-text:Datasets_ListSupportedLocales:/datasets/locales": true;
  "speech-to-text:Datasets_Update:/datasets/{id}": true;
  "speech-to-text:Datasets_UploadBlock:/datasets/{id}/blocks": true;
  "speech-to-text:Endpoints_Create:/endpoints": true;
  "speech-to-text:Endpoints_Delete:/endpoints/{id}": true;
  "speech-to-text:Endpoints_Get:/endpoints/{id}": true;
  "speech-to-text:Endpoints_List:/endpoints": true;
  "speech-to-text:Endpoints_ListSupportedLocales:/endpoints/locales": true;
  "speech-to-text:Endpoints_Update:/endpoints/{id}": true;
  "speech-to-text:Evaluations_Create:/evaluations": true;
  "speech-to-text:Evaluations_Delete:/evaluations/{id}": true;
  "speech-to-text:Evaluations_Get:/evaluations/{id}": true;
  "speech-to-text:Evaluations_GetFile:/evaluations/{id}/files/{fileId}": true;
  "speech-to-text:Evaluations_List:/evaluations": true;
  "speech-to-text:Evaluations_ListFiles:/evaluations/{id}/files": true;
  "speech-to-text:Evaluations_ListSupportedLocales:/evaluations/locales": true;
  "speech-to-text:Evaluations_Update:/evaluations/{id}": true;
  "speech-to-text:Models_AuthorizeCopy:/models:authorizecopy": true;
  "speech-to-text:Models_Copy:/models/{id}:copy": true;
  "speech-to-text:Models_Create:/models": true;
  "speech-to-text:Models_Delete:/models/{id}": true;
  "speech-to-text:Models_GetBaseModel:/models/base/{id}": true;
  "speech-to-text:Models_GetBaseModelManifest:/models/base/{id}/manifest": true;
  "speech-to-text:Models_GetCustomModel:/models/{id}": true;
  "speech-to-text:Models_GetCustomModelManifest:/models/{id}/manifest": true;
  "speech-to-text:Models_GetFile:/models/{id}/files/{fileId}": true;
  "speech-to-text:Models_ListBaseModels:/models/base": true;
  "speech-to-text:Models_ListCustomModels:/models": true;
  "speech-to-text:Models_ListFiles:/models/{id}/files": true;
  "speech-to-text:Models_ListSupportedLocales:/models/locales": true;
  "speech-to-text:Models_Update:/models/{id}": true;
  "speech-to-text:Operations_GetModelCopy:/operations/models/copy/{id}": true;
  "speech-to-text:Projects_Create:/projects": true;
  "speech-to-text:Projects_Delete:/projects/{id}": true;
  "speech-to-text:Projects_Get:/projects/{id}": true;
  "speech-to-text:Projects_List:/projects": true;
  "speech-to-text:Projects_ListDatasets:/projects/{id}/datasets": true;
  "speech-to-text:Projects_ListEndpoints:/projects/{id}/endpoints": true;
  "speech-to-text:Projects_ListEvaluations:/projects/{id}/evaluations": true;
  "speech-to-text:Projects_ListModels:/projects/{id}/models": true;
  "speech-to-text:Projects_ListSupportedLocales:/projects/locales": true;
  "speech-to-text:Projects_ListTranscriptions:/projects/{id}/transcriptions": true;
  "speech-to-text:Projects_Update:/projects/{id}": true;
  "speech-to-text:Transcriptions_Delete:/transcriptions/{id}": true;
  "speech-to-text:Transcriptions_Get:/transcriptions/{id}": true;
  "speech-to-text:Transcriptions_GetFile:/transcriptions/{id}/files/{fileId}": true;
  "speech-to-text:Transcriptions_List:/transcriptions": true;
  "speech-to-text:Transcriptions_ListFiles:/transcriptions/{id}/files": true;
  "speech-to-text:Transcriptions_ListSupportedLocales:/transcriptions/locales": true;
  "speech-to-text:Transcriptions_Submit:/transcriptions:submit": true;
  "speech-to-text:Transcriptions_Transcribe:/transcriptions:transcribe": true;
  "speech-to-text:Transcriptions_Update:/transcriptions/{id}": true;
  "speech-to-text:WebHooks_Create:/webhooks": true;
  "speech-to-text:WebHooks_Delete:/webhooks/{id}": true;
  "speech-to-text:WebHooks_Get:/webhooks/{id}": true;
  "speech-to-text:WebHooks_List:/webhooks": true;
  "speech-to-text:WebHooks_Ping:/webhooks/{id}:ping": true;
  "speech-to-text:WebHooks_Test:/webhooks/{id}:test": true;
  "speech-to-text:WebHooks_Update:/webhooks/{id}": true;
  "transcription:Transcribe:/transcriptions:transcribe": true;
}

export interface AzureSpeechFullApiOperationRequestBodyMap {
  "batch-text-to-speech:BatchSyntheses_Create:/batchsyntheses/{id}": AzureSpeechFullApiSchemaBatchSynthesis;
  "batch-text-to-speech:BatchSyntheses_Delete:/batchsyntheses/{id}": never;
  "batch-text-to-speech:BatchSyntheses_Get:/batchsyntheses/{id}": never;
  "batch-text-to-speech:BatchSyntheses_List:/batchsyntheses": never;
  "batch-text-to-speech:Operations_Get:/operations/{id}": never;
  "custom-text-to-speech:BaseModels_List:/basemodels": never;
  "custom-text-to-speech:Consents_Create:/consents/{id}": AzureSpeechFullApiSchemaConsent;
  "custom-text-to-speech:Consents_Delete:/consents/{id}": never;
  "custom-text-to-speech:Consents_Get:/consents/{id}": never;
  "custom-text-to-speech:Consents_List:/consents": never;
  "custom-text-to-speech:Consents_Post:/consents/{id}": {
  projectId: string;
  displayName?: string;
  description?: string;
  voiceTalentName: string;
  companyName: string;
  audiodata: AzureSpeechFullApiSchemaJsonValue;
  locale: string;
  properties?: string;
};
  "custom-text-to-speech:Endpoints_Create:/endpoints/{id}": AzureSpeechFullApiSchemaEndpoint;
  "custom-text-to-speech:Endpoints_Delete:/endpoints/{id}": never;
  "custom-text-to-speech:Endpoints_Get:/endpoints/{id}": never;
  "custom-text-to-speech:Endpoints_List:/endpoints": never;
  "custom-text-to-speech:Endpoints_Resume:/endpoints/{id}:resume": never;
  "custom-text-to-speech:Endpoints_Suspend:/endpoints/{id}:suspend": never;
  "custom-text-to-speech:Models_Create:/models/{id}": AzureSpeechFullApiSchemaModel;
  "custom-text-to-speech:Models_Delete:/models/{id}": never;
  "custom-text-to-speech:Models_Get:/models/{id}": never;
  "custom-text-to-speech:Models_List:/models": never;
  "custom-text-to-speech:Models_ListRecipes:/modelrecipes": never;
  "custom-text-to-speech:Operations_Get:/operations/{id}": never;
  "custom-text-to-speech:PersonalVoices_Create:/personalvoices/{id}": AzureSpeechFullApiSchemaPersonalVoice;
  "custom-text-to-speech:PersonalVoices_Delete:/personalvoices/{id}": never;
  "custom-text-to-speech:PersonalVoices_Get:/personalvoices/{id}": never;
  "custom-text-to-speech:PersonalVoices_List:/personalvoices": never;
  "custom-text-to-speech:PersonalVoices_Post:/personalvoices/{id}": {
  displayName?: string;
  description?: string;
  projectId: string;
  audioData?: AzureSpeechFullApiSchemaJsonValue;
  properties?: string;
};
  "custom-text-to-speech:Projects_Create:/projects/{id}": AzureSpeechFullApiSchemaProject;
  "custom-text-to-speech:Projects_Delete:/projects/{id}": never;
  "custom-text-to-speech:Projects_Get:/projects/{id}": never;
  "custom-text-to-speech:Projects_List:/projects": never;
  "custom-text-to-speech:TrainingSets_Create:/trainingsets/{id}": AzureSpeechFullApiSchemaTrainingSet;
  "custom-text-to-speech:TrainingSets_Delete:/trainingsets/{id}": never;
  "custom-text-to-speech:TrainingSets_Get:/trainingsets/{id}": never;
  "custom-text-to-speech:TrainingSets_List:/trainingsets": never;
  "custom-text-to-speech:TrainingSets_UploadData:/trainingsets/{id}:upload": AzureSpeechFullApiSchemaDataset;
  "speech-to-text:Datasets_CommitBlocks:/datasets/{id}/blocks:commit": ReadonlyArray<AzureSpeechFullApiSchemaCommitBlocksEntry>;
  "speech-to-text:Datasets_Create:/datasets": AzureSpeechFullApiSchemaDataset2;
  "speech-to-text:Datasets_Delete:/datasets/{id}": never;
  "speech-to-text:Datasets_Get:/datasets/{id}": never;
  "speech-to-text:Datasets_GetBlocks:/datasets/{id}/blocks": never;
  "speech-to-text:Datasets_GetFile:/datasets/{id}/files/{fileId}": never;
  "speech-to-text:Datasets_List:/datasets": never;
  "speech-to-text:Datasets_ListFiles:/datasets/{id}/files": never;
  "speech-to-text:Datasets_ListSupportedLocales:/datasets/locales": never;
  "speech-to-text:Datasets_Update:/datasets/{id}": AzureSpeechFullApiSchemaDatasetUpdate;
  "speech-to-text:Datasets_UploadBlock:/datasets/{id}/blocks": string;
  "speech-to-text:Endpoints_Create:/endpoints": AzureSpeechFullApiSchemaEndpoint2;
  "speech-to-text:Endpoints_Delete:/endpoints/{id}": never;
  "speech-to-text:Endpoints_Get:/endpoints/{id}": never;
  "speech-to-text:Endpoints_List:/endpoints": never;
  "speech-to-text:Endpoints_ListSupportedLocales:/endpoints/locales": never;
  "speech-to-text:Endpoints_Update:/endpoints/{id}": AzureSpeechFullApiSchemaEndpointUpdate;
  "speech-to-text:Evaluations_Create:/evaluations": AzureSpeechFullApiSchemaEvaluation;
  "speech-to-text:Evaluations_Delete:/evaluations/{id}": never;
  "speech-to-text:Evaluations_Get:/evaluations/{id}": never;
  "speech-to-text:Evaluations_GetFile:/evaluations/{id}/files/{fileId}": never;
  "speech-to-text:Evaluations_List:/evaluations": never;
  "speech-to-text:Evaluations_ListFiles:/evaluations/{id}/files": never;
  "speech-to-text:Evaluations_ListSupportedLocales:/evaluations/locales": never;
  "speech-to-text:Evaluations_Update:/evaluations/{id}": AzureSpeechFullApiSchemaEvaluationUpdate;
  "speech-to-text:Models_AuthorizeCopy:/models:authorizecopy": AzureSpeechFullApiSchemaModelCopyAuthorizationDefinition;
  "speech-to-text:Models_Copy:/models/{id}:copy": AzureSpeechFullApiSchemaModelCopyAuthorization;
  "speech-to-text:Models_Create:/models": AzureSpeechFullApiSchemaCustomModel;
  "speech-to-text:Models_Delete:/models/{id}": never;
  "speech-to-text:Models_GetBaseModel:/models/base/{id}": never;
  "speech-to-text:Models_GetBaseModelManifest:/models/base/{id}/manifest": never;
  "speech-to-text:Models_GetCustomModel:/models/{id}": never;
  "speech-to-text:Models_GetCustomModelManifest:/models/{id}/manifest": never;
  "speech-to-text:Models_GetFile:/models/{id}/files/{fileId}": never;
  "speech-to-text:Models_ListBaseModels:/models/base": never;
  "speech-to-text:Models_ListCustomModels:/models": never;
  "speech-to-text:Models_ListFiles:/models/{id}/files": never;
  "speech-to-text:Models_ListSupportedLocales:/models/locales": never;
  "speech-to-text:Models_Update:/models/{id}": AzureSpeechFullApiSchemaModelUpdate;
  "speech-to-text:Operations_GetModelCopy:/operations/models/copy/{id}": never;
  "speech-to-text:Projects_Create:/projects": AzureSpeechFullApiSchemaProject2;
  "speech-to-text:Projects_Delete:/projects/{id}": never;
  "speech-to-text:Projects_Get:/projects/{id}": never;
  "speech-to-text:Projects_List:/projects": never;
  "speech-to-text:Projects_ListDatasets:/projects/{id}/datasets": never;
  "speech-to-text:Projects_ListEndpoints:/projects/{id}/endpoints": never;
  "speech-to-text:Projects_ListEvaluations:/projects/{id}/evaluations": never;
  "speech-to-text:Projects_ListModels:/projects/{id}/models": never;
  "speech-to-text:Projects_ListSupportedLocales:/projects/locales": never;
  "speech-to-text:Projects_ListTranscriptions:/projects/{id}/transcriptions": never;
  "speech-to-text:Projects_Update:/projects/{id}": AzureSpeechFullApiSchemaProjectUpdate;
  "speech-to-text:Transcriptions_Delete:/transcriptions/{id}": never;
  "speech-to-text:Transcriptions_Get:/transcriptions/{id}": never;
  "speech-to-text:Transcriptions_GetFile:/transcriptions/{id}/files/{fileId}": never;
  "speech-to-text:Transcriptions_List:/transcriptions": never;
  "speech-to-text:Transcriptions_ListFiles:/transcriptions/{id}/files": never;
  "speech-to-text:Transcriptions_ListSupportedLocales:/transcriptions/locales": never;
  "speech-to-text:Transcriptions_Submit:/transcriptions:submit": AzureSpeechFullApiSchemaTranscription;
  "speech-to-text:Transcriptions_Transcribe:/transcriptions:transcribe": {
  audio?: AzureSpeechFullApiSchemaJsonValue;
  definition?: string;
};
  "speech-to-text:Transcriptions_Update:/transcriptions/{id}": AzureSpeechFullApiSchemaTranscriptionUpdate;
  "speech-to-text:WebHooks_Create:/webhooks": AzureSpeechFullApiSchemaWebHook;
  "speech-to-text:WebHooks_Delete:/webhooks/{id}": never;
  "speech-to-text:WebHooks_Get:/webhooks/{id}": never;
  "speech-to-text:WebHooks_List:/webhooks": never;
  "speech-to-text:WebHooks_Ping:/webhooks/{id}:ping": never;
  "speech-to-text:WebHooks_Test:/webhooks/{id}:test": never;
  "speech-to-text:WebHooks_Update:/webhooks/{id}": AzureSpeechFullApiSchemaWebHookUpdate;
  "transcription:Transcribe:/transcriptions:transcribe": {
  definition: string;
  audio?: AzureSpeechFullApiSchemaJsonValue;
};
}

export interface AzureSpeechFullApiOperationRequestBodyRequiredMap {
  "batch-text-to-speech:BatchSyntheses_Create:/batchsyntheses/{id}": true;
  "batch-text-to-speech:BatchSyntheses_Delete:/batchsyntheses/{id}": false;
  "batch-text-to-speech:BatchSyntheses_Get:/batchsyntheses/{id}": false;
  "batch-text-to-speech:BatchSyntheses_List:/batchsyntheses": false;
  "batch-text-to-speech:Operations_Get:/operations/{id}": false;
  "custom-text-to-speech:BaseModels_List:/basemodels": false;
  "custom-text-to-speech:Consents_Create:/consents/{id}": true;
  "custom-text-to-speech:Consents_Delete:/consents/{id}": false;
  "custom-text-to-speech:Consents_Get:/consents/{id}": false;
  "custom-text-to-speech:Consents_List:/consents": false;
  "custom-text-to-speech:Consents_Post:/consents/{id}": true;
  "custom-text-to-speech:Endpoints_Create:/endpoints/{id}": true;
  "custom-text-to-speech:Endpoints_Delete:/endpoints/{id}": false;
  "custom-text-to-speech:Endpoints_Get:/endpoints/{id}": false;
  "custom-text-to-speech:Endpoints_List:/endpoints": false;
  "custom-text-to-speech:Endpoints_Resume:/endpoints/{id}:resume": false;
  "custom-text-to-speech:Endpoints_Suspend:/endpoints/{id}:suspend": false;
  "custom-text-to-speech:Models_Create:/models/{id}": true;
  "custom-text-to-speech:Models_Delete:/models/{id}": false;
  "custom-text-to-speech:Models_Get:/models/{id}": false;
  "custom-text-to-speech:Models_List:/models": false;
  "custom-text-to-speech:Models_ListRecipes:/modelrecipes": false;
  "custom-text-to-speech:Operations_Get:/operations/{id}": false;
  "custom-text-to-speech:PersonalVoices_Create:/personalvoices/{id}": true;
  "custom-text-to-speech:PersonalVoices_Delete:/personalvoices/{id}": false;
  "custom-text-to-speech:PersonalVoices_Get:/personalvoices/{id}": false;
  "custom-text-to-speech:PersonalVoices_List:/personalvoices": false;
  "custom-text-to-speech:PersonalVoices_Post:/personalvoices/{id}": true;
  "custom-text-to-speech:Projects_Create:/projects/{id}": true;
  "custom-text-to-speech:Projects_Delete:/projects/{id}": false;
  "custom-text-to-speech:Projects_Get:/projects/{id}": false;
  "custom-text-to-speech:Projects_List:/projects": false;
  "custom-text-to-speech:TrainingSets_Create:/trainingsets/{id}": true;
  "custom-text-to-speech:TrainingSets_Delete:/trainingsets/{id}": false;
  "custom-text-to-speech:TrainingSets_Get:/trainingsets/{id}": false;
  "custom-text-to-speech:TrainingSets_List:/trainingsets": false;
  "custom-text-to-speech:TrainingSets_UploadData:/trainingsets/{id}:upload": true;
  "speech-to-text:Datasets_CommitBlocks:/datasets/{id}/blocks:commit": true;
  "speech-to-text:Datasets_Create:/datasets": true;
  "speech-to-text:Datasets_Delete:/datasets/{id}": false;
  "speech-to-text:Datasets_Get:/datasets/{id}": false;
  "speech-to-text:Datasets_GetBlocks:/datasets/{id}/blocks": false;
  "speech-to-text:Datasets_GetFile:/datasets/{id}/files/{fileId}": false;
  "speech-to-text:Datasets_List:/datasets": false;
  "speech-to-text:Datasets_ListFiles:/datasets/{id}/files": false;
  "speech-to-text:Datasets_ListSupportedLocales:/datasets/locales": false;
  "speech-to-text:Datasets_Update:/datasets/{id}": true;
  "speech-to-text:Datasets_UploadBlock:/datasets/{id}/blocks": true;
  "speech-to-text:Endpoints_Create:/endpoints": true;
  "speech-to-text:Endpoints_Delete:/endpoints/{id}": false;
  "speech-to-text:Endpoints_Get:/endpoints/{id}": false;
  "speech-to-text:Endpoints_List:/endpoints": false;
  "speech-to-text:Endpoints_ListSupportedLocales:/endpoints/locales": false;
  "speech-to-text:Endpoints_Update:/endpoints/{id}": true;
  "speech-to-text:Evaluations_Create:/evaluations": true;
  "speech-to-text:Evaluations_Delete:/evaluations/{id}": false;
  "speech-to-text:Evaluations_Get:/evaluations/{id}": false;
  "speech-to-text:Evaluations_GetFile:/evaluations/{id}/files/{fileId}": false;
  "speech-to-text:Evaluations_List:/evaluations": false;
  "speech-to-text:Evaluations_ListFiles:/evaluations/{id}/files": false;
  "speech-to-text:Evaluations_ListSupportedLocales:/evaluations/locales": false;
  "speech-to-text:Evaluations_Update:/evaluations/{id}": true;
  "speech-to-text:Models_AuthorizeCopy:/models:authorizecopy": true;
  "speech-to-text:Models_Copy:/models/{id}:copy": true;
  "speech-to-text:Models_Create:/models": true;
  "speech-to-text:Models_Delete:/models/{id}": false;
  "speech-to-text:Models_GetBaseModel:/models/base/{id}": false;
  "speech-to-text:Models_GetBaseModelManifest:/models/base/{id}/manifest": false;
  "speech-to-text:Models_GetCustomModel:/models/{id}": false;
  "speech-to-text:Models_GetCustomModelManifest:/models/{id}/manifest": false;
  "speech-to-text:Models_GetFile:/models/{id}/files/{fileId}": false;
  "speech-to-text:Models_ListBaseModels:/models/base": false;
  "speech-to-text:Models_ListCustomModels:/models": false;
  "speech-to-text:Models_ListFiles:/models/{id}/files": false;
  "speech-to-text:Models_ListSupportedLocales:/models/locales": false;
  "speech-to-text:Models_Update:/models/{id}": true;
  "speech-to-text:Operations_GetModelCopy:/operations/models/copy/{id}": false;
  "speech-to-text:Projects_Create:/projects": true;
  "speech-to-text:Projects_Delete:/projects/{id}": false;
  "speech-to-text:Projects_Get:/projects/{id}": false;
  "speech-to-text:Projects_List:/projects": false;
  "speech-to-text:Projects_ListDatasets:/projects/{id}/datasets": false;
  "speech-to-text:Projects_ListEndpoints:/projects/{id}/endpoints": false;
  "speech-to-text:Projects_ListEvaluations:/projects/{id}/evaluations": false;
  "speech-to-text:Projects_ListModels:/projects/{id}/models": false;
  "speech-to-text:Projects_ListSupportedLocales:/projects/locales": false;
  "speech-to-text:Projects_ListTranscriptions:/projects/{id}/transcriptions": false;
  "speech-to-text:Projects_Update:/projects/{id}": true;
  "speech-to-text:Transcriptions_Delete:/transcriptions/{id}": false;
  "speech-to-text:Transcriptions_Get:/transcriptions/{id}": false;
  "speech-to-text:Transcriptions_GetFile:/transcriptions/{id}/files/{fileId}": false;
  "speech-to-text:Transcriptions_List:/transcriptions": false;
  "speech-to-text:Transcriptions_ListFiles:/transcriptions/{id}/files": false;
  "speech-to-text:Transcriptions_ListSupportedLocales:/transcriptions/locales": false;
  "speech-to-text:Transcriptions_Submit:/transcriptions:submit": true;
  "speech-to-text:Transcriptions_Transcribe:/transcriptions:transcribe": false;
  "speech-to-text:Transcriptions_Update:/transcriptions/{id}": true;
  "speech-to-text:WebHooks_Create:/webhooks": true;
  "speech-to-text:WebHooks_Delete:/webhooks/{id}": false;
  "speech-to-text:WebHooks_Get:/webhooks/{id}": false;
  "speech-to-text:WebHooks_List:/webhooks": false;
  "speech-to-text:WebHooks_Ping:/webhooks/{id}:ping": false;
  "speech-to-text:WebHooks_Test:/webhooks/{id}:test": false;
  "speech-to-text:WebHooks_Update:/webhooks/{id}": true;
  "transcription:Transcribe:/transcriptions:transcribe": true;
}

export interface AzureSpeechFullApiOperationResponseMap {
  "batch-text-to-speech:BatchSyntheses_Create:/batchsyntheses/{id}": AzureSpeechFullApiSchemaBatchSynthesis;
  "batch-text-to-speech:BatchSyntheses_Delete:/batchsyntheses/{id}": AzureSpeechFullApiSchemaErrorResponse;
  "batch-text-to-speech:BatchSyntheses_Get:/batchsyntheses/{id}": AzureSpeechFullApiSchemaBatchSynthesis;
  "batch-text-to-speech:BatchSyntheses_List:/batchsyntheses": AzureSpeechFullApiSchemaPaginatedBatchSynthesis;
  "batch-text-to-speech:Operations_Get:/operations/{id}": AzureSpeechFullApiSchemaOperation;
  "custom-text-to-speech:BaseModels_List:/basemodels": ReadonlyArray<AzureSpeechFullApiSchemaBaseModel>;
  "custom-text-to-speech:Consents_Create:/consents/{id}": AzureSpeechFullApiSchemaConsent;
  "custom-text-to-speech:Consents_Delete:/consents/{id}": AzureSpeechFullApiSchemaErrorResponse2;
  "custom-text-to-speech:Consents_Get:/consents/{id}": AzureSpeechFullApiSchemaConsent;
  "custom-text-to-speech:Consents_List:/consents": AzureSpeechFullApiSchemaPaginatedConsents;
  "custom-text-to-speech:Consents_Post:/consents/{id}": AzureSpeechFullApiSchemaConsent;
  "custom-text-to-speech:Endpoints_Create:/endpoints/{id}": AzureSpeechFullApiSchemaEndpoint;
  "custom-text-to-speech:Endpoints_Delete:/endpoints/{id}": AzureSpeechFullApiSchemaErrorResponse2;
  "custom-text-to-speech:Endpoints_Get:/endpoints/{id}": AzureSpeechFullApiSchemaEndpoint;
  "custom-text-to-speech:Endpoints_List:/endpoints": AzureSpeechFullApiSchemaPaginatedEndpoints;
  "custom-text-to-speech:Endpoints_Resume:/endpoints/{id}:resume": AzureSpeechFullApiSchemaEndpoint;
  "custom-text-to-speech:Endpoints_Suspend:/endpoints/{id}:suspend": AzureSpeechFullApiSchemaEndpoint;
  "custom-text-to-speech:Models_Create:/models/{id}": AzureSpeechFullApiSchemaModel;
  "custom-text-to-speech:Models_Delete:/models/{id}": AzureSpeechFullApiSchemaErrorResponse2;
  "custom-text-to-speech:Models_Get:/models/{id}": AzureSpeechFullApiSchemaModel;
  "custom-text-to-speech:Models_List:/models": AzureSpeechFullApiSchemaPaginatedModels;
  "custom-text-to-speech:Models_ListRecipes:/modelrecipes": ReadonlyArray<AzureSpeechFullApiSchemaRecipe>;
  "custom-text-to-speech:Operations_Get:/operations/{id}": AzureSpeechFullApiSchemaOperation2;
  "custom-text-to-speech:PersonalVoices_Create:/personalvoices/{id}": AzureSpeechFullApiSchemaPersonalVoice;
  "custom-text-to-speech:PersonalVoices_Delete:/personalvoices/{id}": AzureSpeechFullApiSchemaErrorResponse2;
  "custom-text-to-speech:PersonalVoices_Get:/personalvoices/{id}": AzureSpeechFullApiSchemaPersonalVoice;
  "custom-text-to-speech:PersonalVoices_List:/personalvoices": AzureSpeechFullApiSchemaPaginatedPersonalVoices;
  "custom-text-to-speech:PersonalVoices_Post:/personalvoices/{id}": AzureSpeechFullApiSchemaPersonalVoice;
  "custom-text-to-speech:Projects_Create:/projects/{id}": AzureSpeechFullApiSchemaProject;
  "custom-text-to-speech:Projects_Delete:/projects/{id}": AzureSpeechFullApiSchemaErrorResponse2;
  "custom-text-to-speech:Projects_Get:/projects/{id}": AzureSpeechFullApiSchemaProject;
  "custom-text-to-speech:Projects_List:/projects": AzureSpeechFullApiSchemaPaginatedProjects;
  "custom-text-to-speech:TrainingSets_Create:/trainingsets/{id}": AzureSpeechFullApiSchemaTrainingSet;
  "custom-text-to-speech:TrainingSets_Delete:/trainingsets/{id}": AzureSpeechFullApiSchemaErrorResponse2;
  "custom-text-to-speech:TrainingSets_Get:/trainingsets/{id}": AzureSpeechFullApiSchemaTrainingSet;
  "custom-text-to-speech:TrainingSets_List:/trainingsets": AzureSpeechFullApiSchemaPaginatedTrainingSets;
  "custom-text-to-speech:TrainingSets_UploadData:/trainingsets/{id}:upload": AzureSpeechFullApiSchemaErrorResponse2;
  "speech-to-text:Datasets_CommitBlocks:/datasets/{id}/blocks:commit": AzureSpeechFullApiSchemaError;
  "speech-to-text:Datasets_Create:/datasets": AzureSpeechFullApiSchemaDataset2;
  "speech-to-text:Datasets_Delete:/datasets/{id}": AzureSpeechFullApiSchemaError;
  "speech-to-text:Datasets_Get:/datasets/{id}": AzureSpeechFullApiSchemaDataset2;
  "speech-to-text:Datasets_GetBlocks:/datasets/{id}/blocks": AzureSpeechFullApiSchemaUploadedBlocks;
  "speech-to-text:Datasets_GetFile:/datasets/{id}/files/{fileId}": AzureSpeechFullApiSchemaFile;
  "speech-to-text:Datasets_List:/datasets": AzureSpeechFullApiSchemaPaginatedDatasets;
  "speech-to-text:Datasets_ListFiles:/datasets/{id}/files": AzureSpeechFullApiSchemaPaginatedFiles;
  "speech-to-text:Datasets_ListSupportedLocales:/datasets/locales": AzureSpeechFullApiSchemaDatasetLocales;
  "speech-to-text:Datasets_Update:/datasets/{id}": AzureSpeechFullApiSchemaDataset2;
  "speech-to-text:Datasets_UploadBlock:/datasets/{id}/blocks": AzureSpeechFullApiSchemaError;
  "speech-to-text:Endpoints_Create:/endpoints": AzureSpeechFullApiSchemaEndpoint2;
  "speech-to-text:Endpoints_Delete:/endpoints/{id}": AzureSpeechFullApiSchemaError;
  "speech-to-text:Endpoints_Get:/endpoints/{id}": AzureSpeechFullApiSchemaEndpoint2;
  "speech-to-text:Endpoints_List:/endpoints": AzureSpeechFullApiSchemaPaginatedEndpoints2;
  "speech-to-text:Endpoints_ListSupportedLocales:/endpoints/locales": ReadonlyArray<string>;
  "speech-to-text:Endpoints_Update:/endpoints/{id}": AzureSpeechFullApiSchemaEndpoint2;
  "speech-to-text:Evaluations_Create:/evaluations": AzureSpeechFullApiSchemaEvaluation;
  "speech-to-text:Evaluations_Delete:/evaluations/{id}": AzureSpeechFullApiSchemaError;
  "speech-to-text:Evaluations_Get:/evaluations/{id}": AzureSpeechFullApiSchemaEvaluation;
  "speech-to-text:Evaluations_GetFile:/evaluations/{id}/files/{fileId}": AzureSpeechFullApiSchemaFile;
  "speech-to-text:Evaluations_List:/evaluations": AzureSpeechFullApiSchemaPaginatedEvaluations;
  "speech-to-text:Evaluations_ListFiles:/evaluations/{id}/files": AzureSpeechFullApiSchemaPaginatedFiles;
  "speech-to-text:Evaluations_ListSupportedLocales:/evaluations/locales": ReadonlyArray<string>;
  "speech-to-text:Evaluations_Update:/evaluations/{id}": AzureSpeechFullApiSchemaEvaluation;
  "speech-to-text:Models_AuthorizeCopy:/models:authorizecopy": AzureSpeechFullApiSchemaModelCopyAuthorization;
  "speech-to-text:Models_Copy:/models/{id}:copy": AzureSpeechFullApiSchemaOperation3;
  "speech-to-text:Models_Create:/models": AzureSpeechFullApiSchemaCustomModel;
  "speech-to-text:Models_Delete:/models/{id}": AzureSpeechFullApiSchemaError;
  "speech-to-text:Models_GetBaseModel:/models/base/{id}": AzureSpeechFullApiSchemaBaseModel2;
  "speech-to-text:Models_GetBaseModelManifest:/models/base/{id}/manifest": AzureSpeechFullApiSchemaModelManifest;
  "speech-to-text:Models_GetCustomModel:/models/{id}": AzureSpeechFullApiSchemaCustomModel;
  "speech-to-text:Models_GetCustomModelManifest:/models/{id}/manifest": AzureSpeechFullApiSchemaModelManifest;
  "speech-to-text:Models_GetFile:/models/{id}/files/{fileId}": AzureSpeechFullApiSchemaFile;
  "speech-to-text:Models_ListBaseModels:/models/base": AzureSpeechFullApiSchemaPaginatedBaseModels;
  "speech-to-text:Models_ListCustomModels:/models": AzureSpeechFullApiSchemaPaginatedCustomModels;
  "speech-to-text:Models_ListFiles:/models/{id}/files": AzureSpeechFullApiSchemaPaginatedFiles;
  "speech-to-text:Models_ListSupportedLocales:/models/locales": ReadonlyArray<string>;
  "speech-to-text:Models_Update:/models/{id}": AzureSpeechFullApiSchemaCustomModel;
  "speech-to-text:Operations_GetModelCopy:/operations/models/copy/{id}": AzureSpeechFullApiSchemaOperation3;
  "speech-to-text:Projects_Create:/projects": AzureSpeechFullApiSchemaProject2;
  "speech-to-text:Projects_Delete:/projects/{id}": AzureSpeechFullApiSchemaError;
  "speech-to-text:Projects_Get:/projects/{id}": AzureSpeechFullApiSchemaProject2;
  "speech-to-text:Projects_List:/projects": AzureSpeechFullApiSchemaPaginatedProjects2;
  "speech-to-text:Projects_ListDatasets:/projects/{id}/datasets": AzureSpeechFullApiSchemaPaginatedDatasets;
  "speech-to-text:Projects_ListEndpoints:/projects/{id}/endpoints": AzureSpeechFullApiSchemaPaginatedEndpoints2;
  "speech-to-text:Projects_ListEvaluations:/projects/{id}/evaluations": AzureSpeechFullApiSchemaPaginatedEvaluations;
  "speech-to-text:Projects_ListModels:/projects/{id}/models": AzureSpeechFullApiSchemaPaginatedCustomModels;
  "speech-to-text:Projects_ListSupportedLocales:/projects/locales": ReadonlyArray<string>;
  "speech-to-text:Projects_ListTranscriptions:/projects/{id}/transcriptions": AzureSpeechFullApiSchemaPaginatedTranscriptions;
  "speech-to-text:Projects_Update:/projects/{id}": AzureSpeechFullApiSchemaProject2;
  "speech-to-text:Transcriptions_Delete:/transcriptions/{id}": AzureSpeechFullApiSchemaError;
  "speech-to-text:Transcriptions_Get:/transcriptions/{id}": AzureSpeechFullApiSchemaTranscription;
  "speech-to-text:Transcriptions_GetFile:/transcriptions/{id}/files/{fileId}": AzureSpeechFullApiSchemaFile;
  "speech-to-text:Transcriptions_List:/transcriptions": AzureSpeechFullApiSchemaPaginatedTranscriptions;
  "speech-to-text:Transcriptions_ListFiles:/transcriptions/{id}/files": AzureSpeechFullApiSchemaPaginatedFiles;
  "speech-to-text:Transcriptions_ListSupportedLocales:/transcriptions/locales": AzureSpeechFullApiSchemaTranscriptionLocales;
  "speech-to-text:Transcriptions_Submit:/transcriptions:submit": AzureSpeechFullApiSchemaTranscription;
  "speech-to-text:Transcriptions_Transcribe:/transcriptions:transcribe": AzureSpeechFullApiSchemaTranscribeResult;
  "speech-to-text:Transcriptions_Update:/transcriptions/{id}": AzureSpeechFullApiSchemaTranscription;
  "speech-to-text:WebHooks_Create:/webhooks": AzureSpeechFullApiSchemaWebHook;
  "speech-to-text:WebHooks_Delete:/webhooks/{id}": AzureSpeechFullApiSchemaError;
  "speech-to-text:WebHooks_Get:/webhooks/{id}": AzureSpeechFullApiSchemaWebHook;
  "speech-to-text:WebHooks_List:/webhooks": AzureSpeechFullApiSchemaPaginatedWebHooks;
  "speech-to-text:WebHooks_Ping:/webhooks/{id}:ping": AzureSpeechFullApiSchemaError;
  "speech-to-text:WebHooks_Test:/webhooks/{id}:test": AzureSpeechFullApiSchemaError;
  "speech-to-text:WebHooks_Update:/webhooks/{id}": AzureSpeechFullApiSchemaWebHook;
  "transcription:Transcribe:/transcriptions:transcribe": AzureSpeechFullApiSchemaTranscriptionResult;
}
