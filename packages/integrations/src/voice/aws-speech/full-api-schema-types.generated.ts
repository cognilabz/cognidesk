// Generated provider schema DTOs for AwsSpeechFullApi.
// Do not edit by hand; run scripts/harden-generated-client-types.mjs after updating provider specs.

export type AwsSpeechFullApiSchemaJsonPrimitive = string | number | boolean | null;
export type AwsSpeechFullApiSchemaJsonValue = AwsSpeechFullApiSchemaJsonPrimitive | readonly AwsSpeechFullApiSchemaJsonValue[] | { readonly [key: string]: AwsSpeechFullApiSchemaJsonValue | undefined };

export type AwsSpeechFullApiSchemaDeleteLexiconOutput = {};

export type AwsSpeechFullApiSchemaEngine = AwsSpeechFullApiSchemaJsonValue;

export type AwsSpeechFullApiSchemaLanguageCode = AwsSpeechFullApiSchemaJsonValue;

export type AwsSpeechFullApiSchemaDescribeVoicesOutput = {
  Voices?: AwsSpeechFullApiSchemaVoiceList;
  NextToken?: string;
};

export type AwsSpeechFullApiSchemaGetLexiconOutput = {
  Lexicon?: AwsSpeechFullApiSchemaLexicon;
  LexiconAttributes?: AwsSpeechFullApiSchemaLexiconAttributes;
};

export type AwsSpeechFullApiSchemaGetSpeechSynthesisTaskOutput = {
  SynthesisTask?: AwsSpeechFullApiSchemaSynthesisTask;
};

export type AwsSpeechFullApiSchemaListLexiconsOutput = {
  Lexicons?: AwsSpeechFullApiSchemaLexiconDescriptionList;
  NextToken?: string;
};

export type AwsSpeechFullApiSchemaTaskStatus = AwsSpeechFullApiSchemaJsonValue;

export type AwsSpeechFullApiSchemaListSpeechSynthesisTasksOutput = {
  NextToken?: string;
  SynthesisTasks?: AwsSpeechFullApiSchemaSynthesisTasks;
};

export type AwsSpeechFullApiSchemaPutLexiconOutput = {};

export type AwsSpeechFullApiSchemaStartSpeechSynthesisStreamActionStream = {
  TextEvent: AwsSpeechFullApiSchemaTextEvent;
} | {
  CloseStreamEvent: AwsSpeechFullApiSchemaCloseStreamEvent;
};

export type AwsSpeechFullApiSchemaStartSpeechSynthesisStreamOutput = {
  EventStream?: AwsSpeechFullApiSchemaStartSpeechSynthesisStreamEventStream;
};

export type AwsSpeechFullApiSchemaLexiconNameList = ReadonlyArray<string>;

export type AwsSpeechFullApiSchemaOutputFormat = AwsSpeechFullApiSchemaJsonValue;

export type AwsSpeechFullApiSchemaSpeechMarkTypeList = ReadonlyArray<AwsSpeechFullApiSchemaSpeechMarkType>;

export type AwsSpeechFullApiSchemaTextType = AwsSpeechFullApiSchemaJsonValue;

export type AwsSpeechFullApiSchemaVoiceId = AwsSpeechFullApiSchemaJsonValue;

export type AwsSpeechFullApiSchemaStartSpeechSynthesisTaskOutput = {
  SynthesisTask?: AwsSpeechFullApiSchemaSynthesisTask;
};

export type AwsSpeechFullApiSchemaSynthesizeSpeechOutput = {
  AudioStream?: string;
  ContentType?: string;
  RequestCharacters?: number;
};

export type AwsSpeechFullApiSchemaRuleList = ReadonlyArray<AwsSpeechFullApiSchemaRule>;

export type AwsSpeechFullApiSchemaTagList = ReadonlyArray<AwsSpeechFullApiSchemaTag>;

export type AwsSpeechFullApiSchemaInputType = AwsSpeechFullApiSchemaJsonValue;

export type AwsSpeechFullApiSchemaCreateCallAnalyticsCategoryResponse = {
  CategoryProperties?: AwsSpeechFullApiSchemaCategoryProperties;
};

export type AwsSpeechFullApiSchemaCLMLanguageCode = AwsSpeechFullApiSchemaJsonValue;

export type AwsSpeechFullApiSchemaBaseModelName = AwsSpeechFullApiSchemaJsonValue;

export type AwsSpeechFullApiSchemaInputDataConfig = {
  S3Uri: string;
  TuningDataS3Uri?: string;
  DataAccessRoleArn: string;
};

export type AwsSpeechFullApiSchemaCreateLanguageModelResponse = {
  LanguageCode?: AwsSpeechFullApiSchemaCLMLanguageCode;
  BaseModelName?: AwsSpeechFullApiSchemaBaseModelName;
  ModelName?: string;
  InputDataConfig?: AwsSpeechFullApiSchemaInputDataConfig;
  ModelStatus?: AwsSpeechFullApiSchemaModelStatus;
};

export type AwsSpeechFullApiSchemaLanguageCode2 = AwsSpeechFullApiSchemaJsonValue;

export type AwsSpeechFullApiSchemaCreateMedicalVocabularyResponse = {
  VocabularyName?: string;
  LanguageCode?: AwsSpeechFullApiSchemaLanguageCode2;
  VocabularyState?: AwsSpeechFullApiSchemaVocabularyState;
  LastModifiedTime?: string;
  FailureReason?: string;
};

export type AwsSpeechFullApiSchemaPhrases = ReadonlyArray<string>;

export type AwsSpeechFullApiSchemaCreateVocabularyResponse = {
  VocabularyName?: string;
  LanguageCode?: AwsSpeechFullApiSchemaLanguageCode2;
  VocabularyState?: AwsSpeechFullApiSchemaVocabularyState;
  LastModifiedTime?: string;
  FailureReason?: string;
};

export type AwsSpeechFullApiSchemaWords = ReadonlyArray<string>;

export type AwsSpeechFullApiSchemaCreateVocabularyFilterResponse = {
  VocabularyFilterName?: string;
  LanguageCode?: AwsSpeechFullApiSchemaLanguageCode2;
  LastModifiedTime?: string;
};

export type AwsSpeechFullApiSchemaDeleteCallAnalyticsCategoryResponse = {};

export type AwsSpeechFullApiSchemaDeleteCallAnalyticsJobResponse = {};

export type AwsSpeechFullApiSchemaDescribeLanguageModelResponse = {
  LanguageModel?: AwsSpeechFullApiSchemaLanguageModel;
};

export type AwsSpeechFullApiSchemaGetCallAnalyticsCategoryResponse = {
  CategoryProperties?: AwsSpeechFullApiSchemaCategoryProperties;
};

export type AwsSpeechFullApiSchemaGetCallAnalyticsJobResponse = {
  CallAnalyticsJob?: AwsSpeechFullApiSchemaCallAnalyticsJob;
};

export type AwsSpeechFullApiSchemaGetMedicalScribeJobResponse = {
  MedicalScribeJob?: AwsSpeechFullApiSchemaMedicalScribeJob;
};

export type AwsSpeechFullApiSchemaGetMedicalTranscriptionJobResponse = {
  MedicalTranscriptionJob?: AwsSpeechFullApiSchemaMedicalTranscriptionJob;
};

export type AwsSpeechFullApiSchemaGetMedicalVocabularyResponse = {
  VocabularyName?: string;
  LanguageCode?: AwsSpeechFullApiSchemaLanguageCode2;
  VocabularyState?: AwsSpeechFullApiSchemaVocabularyState;
  LastModifiedTime?: string;
  FailureReason?: string;
  DownloadUri?: string;
};

export type AwsSpeechFullApiSchemaGetTranscriptionJobResponse = {
  TranscriptionJob?: AwsSpeechFullApiSchemaTranscriptionJob;
};

export type AwsSpeechFullApiSchemaGetVocabularyResponse = {
  VocabularyName?: string;
  LanguageCode?: AwsSpeechFullApiSchemaLanguageCode2;
  VocabularyState?: AwsSpeechFullApiSchemaVocabularyState;
  LastModifiedTime?: string;
  FailureReason?: string;
  DownloadUri?: string;
};

export type AwsSpeechFullApiSchemaGetVocabularyFilterResponse = {
  VocabularyFilterName?: string;
  LanguageCode?: AwsSpeechFullApiSchemaLanguageCode2;
  LastModifiedTime?: string;
  DownloadUri?: string;
};

export type AwsSpeechFullApiSchemaListCallAnalyticsCategoriesResponse = {
  NextToken?: string;
  Categories?: AwsSpeechFullApiSchemaCategoryPropertiesList;
};

export type AwsSpeechFullApiSchemaCallAnalyticsJobStatus = AwsSpeechFullApiSchemaJsonValue;

export type AwsSpeechFullApiSchemaListCallAnalyticsJobsResponse = {
  Status?: AwsSpeechFullApiSchemaCallAnalyticsJobStatus;
  NextToken?: string;
  CallAnalyticsJobSummaries?: AwsSpeechFullApiSchemaCallAnalyticsJobSummaries;
};

export type AwsSpeechFullApiSchemaModelStatus = AwsSpeechFullApiSchemaJsonValue;

export type AwsSpeechFullApiSchemaListLanguageModelsResponse = {
  NextToken?: string;
  Models?: AwsSpeechFullApiSchemaModels;
};

export type AwsSpeechFullApiSchemaMedicalScribeJobStatus = AwsSpeechFullApiSchemaJsonValue;

export type AwsSpeechFullApiSchemaListMedicalScribeJobsResponse = {
  Status?: AwsSpeechFullApiSchemaMedicalScribeJobStatus;
  NextToken?: string;
  MedicalScribeJobSummaries?: AwsSpeechFullApiSchemaMedicalScribeJobSummaries;
};

export type AwsSpeechFullApiSchemaTranscriptionJobStatus = AwsSpeechFullApiSchemaJsonValue;

export type AwsSpeechFullApiSchemaListMedicalTranscriptionJobsResponse = {
  Status?: AwsSpeechFullApiSchemaTranscriptionJobStatus;
  NextToken?: string;
  MedicalTranscriptionJobSummaries?: AwsSpeechFullApiSchemaMedicalTranscriptionJobSummaries;
};

export type AwsSpeechFullApiSchemaVocabularyState = AwsSpeechFullApiSchemaJsonValue;

export type AwsSpeechFullApiSchemaListMedicalVocabulariesResponse = {
  Status?: AwsSpeechFullApiSchemaVocabularyState;
  NextToken?: string;
  Vocabularies?: AwsSpeechFullApiSchemaVocabularies;
};

export type AwsSpeechFullApiSchemaListTagsForResourceResponse = {
  ResourceArn?: string;
  Tags?: AwsSpeechFullApiSchemaTagList;
};

export type AwsSpeechFullApiSchemaListTranscriptionJobsResponse = {
  Status?: AwsSpeechFullApiSchemaTranscriptionJobStatus;
  NextToken?: string;
  TranscriptionJobSummaries?: AwsSpeechFullApiSchemaTranscriptionJobSummaries;
};

export type AwsSpeechFullApiSchemaListVocabulariesResponse = {
  Status?: AwsSpeechFullApiSchemaVocabularyState;
  NextToken?: string;
  Vocabularies?: AwsSpeechFullApiSchemaVocabularies;
};

export type AwsSpeechFullApiSchemaListVocabularyFiltersResponse = {
  NextToken?: string;
  VocabularyFilters?: AwsSpeechFullApiSchemaVocabularyFilters;
};

export type AwsSpeechFullApiSchemaMedia = {
  MediaFileUri?: string;
  RedactedMediaFileUri?: string;
};

export type AwsSpeechFullApiSchemaCallAnalyticsJobSettings = {
  VocabularyName?: string;
  VocabularyFilterName?: string;
  VocabularyFilterMethod?: AwsSpeechFullApiSchemaVocabularyFilterMethod;
  LanguageModelName?: string;
  ContentRedaction?: AwsSpeechFullApiSchemaContentRedaction;
  LanguageOptions?: AwsSpeechFullApiSchemaLanguageOptions;
  LanguageIdSettings?: AwsSpeechFullApiSchemaLanguageIdSettingsMap;
  Summarization?: AwsSpeechFullApiSchemaSummarization;
};

export type AwsSpeechFullApiSchemaChannelDefinitions = ReadonlyArray<AwsSpeechFullApiSchemaChannelDefinition>;

export type AwsSpeechFullApiSchemaStartCallAnalyticsJobResponse = {
  CallAnalyticsJob?: AwsSpeechFullApiSchemaCallAnalyticsJob;
};

export type AwsSpeechFullApiSchemaKMSEncryptionContextMap = {
  readonly [key: string]: string | undefined;
};

export type AwsSpeechFullApiSchemaMedicalScribeSettings = {
  ShowSpeakerLabels?: boolean;
  MaxSpeakerLabels?: number;
  ChannelIdentification?: boolean;
  VocabularyName?: string;
  VocabularyFilterName?: string;
  VocabularyFilterMethod?: AwsSpeechFullApiSchemaVocabularyFilterMethod;
  ClinicalNoteGenerationSettings?: AwsSpeechFullApiSchemaClinicalNoteGenerationSettings;
};

export type AwsSpeechFullApiSchemaMedicalScribeChannelDefinitions = ReadonlyArray<AwsSpeechFullApiSchemaMedicalScribeChannelDefinition>;

export type AwsSpeechFullApiSchemaMedicalScribeContext = {
  PatientContext?: AwsSpeechFullApiSchemaMedicalScribePatientContext;
};

export type AwsSpeechFullApiSchemaStartMedicalScribeJobResponse = {
  MedicalScribeJob?: AwsSpeechFullApiSchemaMedicalScribeJob;
};

export type AwsSpeechFullApiSchemaMediaFormat = AwsSpeechFullApiSchemaJsonValue;

export type AwsSpeechFullApiSchemaMedicalTranscriptionSetting = {
  ShowSpeakerLabels?: boolean;
  MaxSpeakerLabels?: number;
  ChannelIdentification?: boolean;
  ShowAlternatives?: boolean;
  MaxAlternatives?: number;
  VocabularyName?: string;
};

export type AwsSpeechFullApiSchemaMedicalContentIdentificationType = AwsSpeechFullApiSchemaJsonValue;

export type AwsSpeechFullApiSchemaSpecialty = AwsSpeechFullApiSchemaJsonValue;

export type AwsSpeechFullApiSchemaType = AwsSpeechFullApiSchemaJsonValue;

export type AwsSpeechFullApiSchemaStartMedicalTranscriptionJobResponse = {
  MedicalTranscriptionJob?: AwsSpeechFullApiSchemaMedicalTranscriptionJob;
};

export type AwsSpeechFullApiSchemaSettings = {
  VocabularyName?: string;
  ShowSpeakerLabels?: boolean;
  MaxSpeakerLabels?: number;
  ChannelIdentification?: boolean;
  ShowAlternatives?: boolean;
  MaxAlternatives?: number;
  VocabularyFilterName?: string;
  VocabularyFilterMethod?: AwsSpeechFullApiSchemaVocabularyFilterMethod;
};

export type AwsSpeechFullApiSchemaModelSettings = {
  LanguageModelName?: string;
};

export type AwsSpeechFullApiSchemaJobExecutionSettings = {
  AllowDeferredExecution?: boolean;
  DataAccessRoleArn?: string;
};

export type AwsSpeechFullApiSchemaContentRedaction = {
  RedactionType: AwsSpeechFullApiSchemaRedactionType;
  RedactionOutput: AwsSpeechFullApiSchemaRedactionOutput;
  PiiEntityTypes?: AwsSpeechFullApiSchemaPiiEntityTypes;
};

export type AwsSpeechFullApiSchemaLanguageOptions = ReadonlyArray<AwsSpeechFullApiSchemaLanguageCode2>;

export type AwsSpeechFullApiSchemaSubtitles = {
  Formats?: AwsSpeechFullApiSchemaSubtitleFormats;
  OutputStartIndex?: number;
};

export type AwsSpeechFullApiSchemaLanguageIdSettingsMap = {
  readonly [key: string]: AwsSpeechFullApiSchemaLanguageIdSettings | undefined;
};

export type AwsSpeechFullApiSchemaToxicityDetection = ReadonlyArray<AwsSpeechFullApiSchemaToxicityDetectionSettings>;

export type AwsSpeechFullApiSchemaStartTranscriptionJobResponse = {
  TranscriptionJob?: AwsSpeechFullApiSchemaTranscriptionJob;
};

export type AwsSpeechFullApiSchemaGetMedicalScribeStreamResponse = {
  MedicalScribeStreamDetails?: AwsSpeechFullApiSchemaMedicalScribeStreamDetails;
};

export type AwsSpeechFullApiSchemaAudioStream = {
  AudioEvent: AwsSpeechFullApiSchemaAudioEvent;
} | {
  ConfigurationEvent: AwsSpeechFullApiSchemaConfigurationEvent;
};

export type AwsSpeechFullApiSchemaStartCallAnalyticsStreamTranscriptionResponse = {
  RequestId?: string;
  LanguageCode?: AwsSpeechFullApiSchemaCallAnalyticsLanguageCode;
  MediaSampleRateHertz?: number;
  MediaEncoding?: AwsSpeechFullApiSchemaMediaEncoding;
  VocabularyName?: string;
  SessionId?: string;
  CallAnalyticsTranscriptResultStream?: AwsSpeechFullApiSchemaCallAnalyticsTranscriptResultStream;
  VocabularyFilterName?: string;
  VocabularyFilterMethod?: AwsSpeechFullApiSchemaVocabularyFilterMethod2;
  LanguageModelName?: string;
  IdentifyLanguage?: boolean;
  LanguageOptions?: string;
  PreferredLanguage?: AwsSpeechFullApiSchemaCallAnalyticsLanguageCode;
  VocabularyNames?: string;
  VocabularyFilterNames?: string;
  EnablePartialResultsStabilization?: boolean;
  PartialResultsStability?: AwsSpeechFullApiSchemaPartialResultsStability;
  ContentIdentificationType?: AwsSpeechFullApiSchemaContentIdentificationType;
  ContentRedactionType?: AwsSpeechFullApiSchemaContentRedactionType;
  PiiEntityTypes?: string;
};

export type AwsSpeechFullApiSchemaMedicalScribeInputStream = {
  AudioEvent: AwsSpeechFullApiSchemaMedicalScribeAudioEvent;
} | {
  SessionControlEvent: AwsSpeechFullApiSchemaMedicalScribeSessionControlEvent;
} | {
  ConfigurationEvent: AwsSpeechFullApiSchemaMedicalScribeConfigurationEvent;
};

export type AwsSpeechFullApiSchemaStartMedicalScribeStreamResponse = {
  SessionId?: string;
  RequestId?: string;
  LanguageCode?: AwsSpeechFullApiSchemaMedicalScribeLanguageCode;
  MediaSampleRateHertz?: number;
  MediaEncoding?: AwsSpeechFullApiSchemaMedicalScribeMediaEncoding;
  ResultStream?: AwsSpeechFullApiSchemaMedicalScribeResultStream;
};

export type AwsSpeechFullApiSchemaStartMedicalStreamTranscriptionResponse = {
  RequestId?: string;
  LanguageCode?: AwsSpeechFullApiSchemaLanguageCode3;
  MediaSampleRateHertz?: number;
  MediaEncoding?: AwsSpeechFullApiSchemaMediaEncoding;
  VocabularyName?: string;
  Specialty?: AwsSpeechFullApiSchemaSpecialty2;
  Type?: AwsSpeechFullApiSchemaType2;
  ShowSpeakerLabel?: boolean;
  SessionId?: string;
  TranscriptResultStream?: AwsSpeechFullApiSchemaMedicalTranscriptResultStream;
  EnableChannelIdentification?: boolean;
  NumberOfChannels?: number;
  ContentIdentificationType?: AwsSpeechFullApiSchemaMedicalContentIdentificationType2;
};

export type AwsSpeechFullApiSchemaStartStreamTranscriptionResponse = {
  RequestId?: string;
  LanguageCode?: AwsSpeechFullApiSchemaLanguageCode3;
  MediaSampleRateHertz?: number;
  MediaEncoding?: AwsSpeechFullApiSchemaMediaEncoding;
  VocabularyName?: string;
  SessionId?: string;
  TranscriptResultStream?: AwsSpeechFullApiSchemaTranscriptResultStream;
  VocabularyFilterName?: string;
  VocabularyFilterMethod?: AwsSpeechFullApiSchemaVocabularyFilterMethod2;
  ShowSpeakerLabel?: boolean;
  EnableChannelIdentification?: boolean;
  NumberOfChannels?: number;
  EnablePartialResultsStabilization?: boolean;
  PartialResultsStability?: AwsSpeechFullApiSchemaPartialResultsStability;
  ContentIdentificationType?: AwsSpeechFullApiSchemaContentIdentificationType;
  ContentRedactionType?: AwsSpeechFullApiSchemaContentRedactionType;
  PiiEntityTypes?: string;
  LanguageModelName?: string;
  IdentifyLanguage?: boolean;
  LanguageOptions?: string;
  PreferredLanguage?: AwsSpeechFullApiSchemaLanguageCode3;
  IdentifyMultipleLanguages?: boolean;
  VocabularyNames?: string;
  VocabularyFilterNames?: string;
  SessionResumeWindow?: number;
};

export type AwsSpeechFullApiSchemaTagResourceResponse = {};

export type AwsSpeechFullApiSchemaTagKeyList = ReadonlyArray<string>;

export type AwsSpeechFullApiSchemaUntagResourceResponse = {};

export type AwsSpeechFullApiSchemaUpdateCallAnalyticsCategoryResponse = {
  CategoryProperties?: AwsSpeechFullApiSchemaCategoryProperties;
};

export type AwsSpeechFullApiSchemaUpdateMedicalVocabularyResponse = {
  VocabularyName?: string;
  LanguageCode?: AwsSpeechFullApiSchemaLanguageCode2;
  LastModifiedTime?: string;
  VocabularyState?: AwsSpeechFullApiSchemaVocabularyState;
};

export type AwsSpeechFullApiSchemaUpdateVocabularyResponse = {
  VocabularyName?: string;
  LanguageCode?: AwsSpeechFullApiSchemaLanguageCode2;
  LastModifiedTime?: string;
  VocabularyState?: AwsSpeechFullApiSchemaVocabularyState;
};

export type AwsSpeechFullApiSchemaUpdateVocabularyFilterResponse = {
  VocabularyFilterName?: string;
  LanguageCode?: AwsSpeechFullApiSchemaLanguageCode2;
  LastModifiedTime?: string;
};

export type AwsSpeechFullApiSchemaVoiceList = ReadonlyArray<AwsSpeechFullApiSchemaVoice>;

export type AwsSpeechFullApiSchemaLexicon = {
  Content?: string;
  Name?: string;
};

export type AwsSpeechFullApiSchemaLexiconAttributes = {
  Alphabet?: string;
  LanguageCode?: AwsSpeechFullApiSchemaLanguageCode;
  LastModified?: string;
  LexiconArn?: string;
  LexemesCount?: number;
  Size?: number;
};

export type AwsSpeechFullApiSchemaSynthesisTask = {
  Engine?: AwsSpeechFullApiSchemaEngine;
  TaskId?: string;
  TaskStatus?: AwsSpeechFullApiSchemaTaskStatus;
  TaskStatusReason?: string;
  OutputUri?: string;
  CreationTime?: string;
  RequestCharacters?: number;
  SnsTopicArn?: string;
  LexiconNames?: AwsSpeechFullApiSchemaLexiconNameList;
  OutputFormat?: AwsSpeechFullApiSchemaOutputFormat;
  SampleRate?: string;
  SpeechMarkTypes?: AwsSpeechFullApiSchemaSpeechMarkTypeList;
  TextType?: AwsSpeechFullApiSchemaTextType;
  VoiceId?: AwsSpeechFullApiSchemaVoiceId;
  LanguageCode?: AwsSpeechFullApiSchemaLanguageCode;
};

export type AwsSpeechFullApiSchemaLexiconDescriptionList = ReadonlyArray<AwsSpeechFullApiSchemaLexiconDescription>;

export type AwsSpeechFullApiSchemaSynthesisTasks = ReadonlyArray<AwsSpeechFullApiSchemaSynthesisTask>;

export type AwsSpeechFullApiSchemaTextEvent = {
  Text: string;
  TextType?: AwsSpeechFullApiSchemaTextType;
  FlushStreamConfiguration?: AwsSpeechFullApiSchemaFlushStreamConfiguration;
};

export type AwsSpeechFullApiSchemaCloseStreamEvent = {};

export type AwsSpeechFullApiSchemaStartSpeechSynthesisStreamEventStream = {
  AudioEvent: AwsSpeechFullApiSchemaAudioEvent2;
} | {
  StreamClosedEvent: AwsSpeechFullApiSchemaStreamClosedEvent;
} | {
  ValidationException: AwsSpeechFullApiSchemaValidationException;
} | {
  ServiceQuotaExceededException: AwsSpeechFullApiSchemaServiceQuotaExceededException;
} | {
  ServiceFailureException: AwsSpeechFullApiSchemaServiceFailureException;
} | {
  ThrottlingException: AwsSpeechFullApiSchemaThrottlingException;
};

export type AwsSpeechFullApiSchemaSpeechMarkType = AwsSpeechFullApiSchemaJsonValue;

export type AwsSpeechFullApiSchemaRule = {
  NonTalkTimeFilter: AwsSpeechFullApiSchemaNonTalkTimeFilter;
} | {
  InterruptionFilter: AwsSpeechFullApiSchemaInterruptionFilter;
} | {
  TranscriptFilter: AwsSpeechFullApiSchemaTranscriptFilter;
} | {
  SentimentFilter: AwsSpeechFullApiSchemaSentimentFilter;
};

export type AwsSpeechFullApiSchemaTag = {
  Key: string;
  Value: string;
};

export type AwsSpeechFullApiSchemaCategoryProperties = {
  CategoryName?: string;
  Rules?: AwsSpeechFullApiSchemaRuleList;
  CreateTime?: string;
  LastUpdateTime?: string;
  Tags?: AwsSpeechFullApiSchemaTagList;
  InputType?: AwsSpeechFullApiSchemaInputType;
};

export type AwsSpeechFullApiSchemaLanguageModel = {
  ModelName?: string;
  CreateTime?: string;
  LastModifiedTime?: string;
  LanguageCode?: AwsSpeechFullApiSchemaCLMLanguageCode;
  BaseModelName?: AwsSpeechFullApiSchemaBaseModelName;
  ModelStatus?: AwsSpeechFullApiSchemaModelStatus;
  UpgradeAvailability?: boolean;
  FailureReason?: string;
  InputDataConfig?: AwsSpeechFullApiSchemaInputDataConfig;
};

export type AwsSpeechFullApiSchemaCallAnalyticsJob = {
  CallAnalyticsJobName?: string;
  CallAnalyticsJobStatus?: AwsSpeechFullApiSchemaCallAnalyticsJobStatus;
  CallAnalyticsJobDetails?: AwsSpeechFullApiSchemaCallAnalyticsJobDetails;
  LanguageCode?: AwsSpeechFullApiSchemaLanguageCode2;
  MediaSampleRateHertz?: number;
  MediaFormat?: AwsSpeechFullApiSchemaMediaFormat;
  Media?: AwsSpeechFullApiSchemaMedia;
  Transcript?: AwsSpeechFullApiSchemaTranscript;
  StartTime?: string;
  CreationTime?: string;
  CompletionTime?: string;
  FailureReason?: string;
  DataAccessRoleArn?: string;
  IdentifiedLanguageScore?: number;
  Settings?: AwsSpeechFullApiSchemaCallAnalyticsJobSettings;
  ChannelDefinitions?: AwsSpeechFullApiSchemaChannelDefinitions;
  Tags?: AwsSpeechFullApiSchemaTagList;
};

export type AwsSpeechFullApiSchemaMedicalScribeJob = {
  MedicalScribeJobName?: string;
  MedicalScribeJobStatus?: AwsSpeechFullApiSchemaMedicalScribeJobStatus;
  LanguageCode?: AwsSpeechFullApiSchemaMedicalScribeLanguageCode2;
  Media?: AwsSpeechFullApiSchemaMedia;
  MedicalScribeOutput?: AwsSpeechFullApiSchemaMedicalScribeOutput;
  StartTime?: string;
  CreationTime?: string;
  CompletionTime?: string;
  FailureReason?: string;
  Settings?: AwsSpeechFullApiSchemaMedicalScribeSettings;
  DataAccessRoleArn?: string;
  ChannelDefinitions?: AwsSpeechFullApiSchemaMedicalScribeChannelDefinitions;
  MedicalScribeContextProvided?: boolean;
  Tags?: AwsSpeechFullApiSchemaTagList;
};

export type AwsSpeechFullApiSchemaMedicalTranscriptionJob = {
  MedicalTranscriptionJobName?: string;
  TranscriptionJobStatus?: AwsSpeechFullApiSchemaTranscriptionJobStatus;
  LanguageCode?: AwsSpeechFullApiSchemaLanguageCode2;
  MediaSampleRateHertz?: number;
  MediaFormat?: AwsSpeechFullApiSchemaMediaFormat;
  Media?: AwsSpeechFullApiSchemaMedia;
  Transcript?: AwsSpeechFullApiSchemaMedicalTranscript;
  StartTime?: string;
  CreationTime?: string;
  CompletionTime?: string;
  FailureReason?: string;
  Settings?: AwsSpeechFullApiSchemaMedicalTranscriptionSetting;
  ContentIdentificationType?: AwsSpeechFullApiSchemaMedicalContentIdentificationType;
  Specialty?: AwsSpeechFullApiSchemaSpecialty;
  Type?: AwsSpeechFullApiSchemaType;
  Tags?: AwsSpeechFullApiSchemaTagList;
};

export type AwsSpeechFullApiSchemaTranscriptionJob = {
  TranscriptionJobName?: string;
  TranscriptionJobStatus?: AwsSpeechFullApiSchemaTranscriptionJobStatus;
  LanguageCode?: AwsSpeechFullApiSchemaLanguageCode2;
  MediaSampleRateHertz?: number;
  MediaFormat?: AwsSpeechFullApiSchemaMediaFormat;
  Media?: AwsSpeechFullApiSchemaMedia;
  Transcript?: AwsSpeechFullApiSchemaTranscript;
  StartTime?: string;
  CreationTime?: string;
  CompletionTime?: string;
  FailureReason?: string;
  Settings?: AwsSpeechFullApiSchemaSettings;
  ModelSettings?: AwsSpeechFullApiSchemaModelSettings;
  JobExecutionSettings?: AwsSpeechFullApiSchemaJobExecutionSettings;
  ContentRedaction?: AwsSpeechFullApiSchemaContentRedaction;
  IdentifyLanguage?: boolean;
  IdentifyMultipleLanguages?: boolean;
  LanguageOptions?: AwsSpeechFullApiSchemaLanguageOptions;
  IdentifiedLanguageScore?: number;
  LanguageCodes?: AwsSpeechFullApiSchemaLanguageCodeList;
  Tags?: AwsSpeechFullApiSchemaTagList;
  Subtitles?: AwsSpeechFullApiSchemaSubtitlesOutput;
  LanguageIdSettings?: AwsSpeechFullApiSchemaLanguageIdSettingsMap;
  ToxicityDetection?: AwsSpeechFullApiSchemaToxicityDetection;
};

export type AwsSpeechFullApiSchemaCategoryPropertiesList = ReadonlyArray<AwsSpeechFullApiSchemaCategoryProperties>;

export type AwsSpeechFullApiSchemaCallAnalyticsJobSummaries = ReadonlyArray<AwsSpeechFullApiSchemaCallAnalyticsJobSummary>;

export type AwsSpeechFullApiSchemaModels = ReadonlyArray<AwsSpeechFullApiSchemaLanguageModel>;

export type AwsSpeechFullApiSchemaMedicalScribeJobSummaries = ReadonlyArray<AwsSpeechFullApiSchemaMedicalScribeJobSummary>;

export type AwsSpeechFullApiSchemaMedicalTranscriptionJobSummaries = ReadonlyArray<AwsSpeechFullApiSchemaMedicalTranscriptionJobSummary>;

export type AwsSpeechFullApiSchemaVocabularies = ReadonlyArray<AwsSpeechFullApiSchemaVocabularyInfo>;

export type AwsSpeechFullApiSchemaTranscriptionJobSummaries = ReadonlyArray<AwsSpeechFullApiSchemaTranscriptionJobSummary>;

export type AwsSpeechFullApiSchemaVocabularyFilters = ReadonlyArray<AwsSpeechFullApiSchemaVocabularyFilterInfo>;

export type AwsSpeechFullApiSchemaVocabularyFilterMethod = AwsSpeechFullApiSchemaJsonValue;

export type AwsSpeechFullApiSchemaSummarization = {
  GenerateAbstractiveSummary: boolean;
};

export type AwsSpeechFullApiSchemaChannelDefinition = {
  ChannelId?: number;
  ParticipantRole?: AwsSpeechFullApiSchemaParticipantRole;
};

export type AwsSpeechFullApiSchemaClinicalNoteGenerationSettings = {
  NoteTemplate?: AwsSpeechFullApiSchemaMedicalScribeNoteTemplate;
};

export type AwsSpeechFullApiSchemaMedicalScribeChannelDefinition = {
  ChannelId: number;
  ParticipantRole: AwsSpeechFullApiSchemaMedicalScribeParticipantRole;
};

export type AwsSpeechFullApiSchemaMedicalScribePatientContext = {
  Pronouns?: AwsSpeechFullApiSchemaPronouns;
};

export type AwsSpeechFullApiSchemaRedactionType = AwsSpeechFullApiSchemaJsonValue;

export type AwsSpeechFullApiSchemaRedactionOutput = AwsSpeechFullApiSchemaJsonValue;

export type AwsSpeechFullApiSchemaPiiEntityTypes = ReadonlyArray<AwsSpeechFullApiSchemaPiiEntityType>;

export type AwsSpeechFullApiSchemaSubtitleFormats = ReadonlyArray<AwsSpeechFullApiSchemaSubtitleFormat>;

export type AwsSpeechFullApiSchemaLanguageIdSettings = {
  VocabularyName?: string;
  VocabularyFilterName?: string;
  LanguageModelName?: string;
};

export type AwsSpeechFullApiSchemaToxicityDetectionSettings = {
  ToxicityCategories: AwsSpeechFullApiSchemaToxicityCategories;
};

export type AwsSpeechFullApiSchemaMedicalScribeStreamDetails = {
  SessionId?: string;
  StreamCreatedAt?: string;
  StreamEndedAt?: string;
  LanguageCode?: AwsSpeechFullApiSchemaMedicalScribeLanguageCode;
  MediaSampleRateHertz?: number;
  MediaEncoding?: AwsSpeechFullApiSchemaMedicalScribeMediaEncoding;
  VocabularyName?: string;
  VocabularyFilterName?: string;
  VocabularyFilterMethod?: AwsSpeechFullApiSchemaMedicalScribeVocabularyFilterMethod;
  ResourceAccessRoleArn?: string;
  ChannelDefinitions?: AwsSpeechFullApiSchemaMedicalScribeChannelDefinitions2;
  EncryptionSettings?: AwsSpeechFullApiSchemaMedicalScribeEncryptionSettings;
  StreamStatus?: AwsSpeechFullApiSchemaMedicalScribeStreamStatus;
  PostStreamAnalyticsSettings?: AwsSpeechFullApiSchemaMedicalScribePostStreamAnalyticsSettings;
  PostStreamAnalyticsResult?: AwsSpeechFullApiSchemaMedicalScribePostStreamAnalyticsResult;
  MedicalScribeContextProvided?: boolean;
};

export type AwsSpeechFullApiSchemaAudioEvent = {
  AudioChunk?: string;
};

export type AwsSpeechFullApiSchemaConfigurationEvent = {
  ChannelDefinitions?: AwsSpeechFullApiSchemaChannelDefinitions2;
  PostCallAnalyticsSettings?: AwsSpeechFullApiSchemaPostCallAnalyticsSettings;
};

export type AwsSpeechFullApiSchemaCallAnalyticsLanguageCode = AwsSpeechFullApiSchemaJsonValue;

export type AwsSpeechFullApiSchemaMediaEncoding = AwsSpeechFullApiSchemaJsonValue;

export type AwsSpeechFullApiSchemaCallAnalyticsTranscriptResultStream = {
  UtteranceEvent: AwsSpeechFullApiSchemaUtteranceEvent;
} | {
  CategoryEvent: AwsSpeechFullApiSchemaCategoryEvent;
} | {
  BadRequestException: AwsSpeechFullApiSchemaBadRequestException;
} | {
  LimitExceededException: AwsSpeechFullApiSchemaLimitExceededException;
} | {
  InternalFailureException: AwsSpeechFullApiSchemaInternalFailureException;
} | {
  ConflictException: AwsSpeechFullApiSchemaConflictException;
} | {
  ServiceUnavailableException: AwsSpeechFullApiSchemaServiceUnavailableException;
};

export type AwsSpeechFullApiSchemaVocabularyFilterMethod2 = AwsSpeechFullApiSchemaJsonValue;

export type AwsSpeechFullApiSchemaPartialResultsStability = AwsSpeechFullApiSchemaJsonValue;

export type AwsSpeechFullApiSchemaContentIdentificationType = AwsSpeechFullApiSchemaJsonValue;

export type AwsSpeechFullApiSchemaContentRedactionType = AwsSpeechFullApiSchemaJsonValue;

export type AwsSpeechFullApiSchemaMedicalScribeAudioEvent = {
  AudioChunk: string;
};

export type AwsSpeechFullApiSchemaMedicalScribeSessionControlEvent = {
  Type: AwsSpeechFullApiSchemaMedicalScribeSessionControlEventType;
};

export type AwsSpeechFullApiSchemaMedicalScribeConfigurationEvent = {
  VocabularyName?: string;
  VocabularyFilterName?: string;
  VocabularyFilterMethod?: AwsSpeechFullApiSchemaMedicalScribeVocabularyFilterMethod;
  ResourceAccessRoleArn: string;
  ChannelDefinitions?: AwsSpeechFullApiSchemaMedicalScribeChannelDefinitions2;
  EncryptionSettings?: AwsSpeechFullApiSchemaMedicalScribeEncryptionSettings;
  PostStreamAnalyticsSettings: AwsSpeechFullApiSchemaMedicalScribePostStreamAnalyticsSettings;
  MedicalScribeContext?: AwsSpeechFullApiSchemaMedicalScribeContext2;
};

export type AwsSpeechFullApiSchemaMedicalScribeLanguageCode = AwsSpeechFullApiSchemaJsonValue;

export type AwsSpeechFullApiSchemaMedicalScribeMediaEncoding = AwsSpeechFullApiSchemaJsonValue;

export type AwsSpeechFullApiSchemaMedicalScribeResultStream = {
  TranscriptEvent: AwsSpeechFullApiSchemaMedicalScribeTranscriptEvent;
} | {
  BadRequestException: AwsSpeechFullApiSchemaBadRequestException;
} | {
  LimitExceededException: AwsSpeechFullApiSchemaLimitExceededException;
} | {
  InternalFailureException: AwsSpeechFullApiSchemaInternalFailureException;
} | {
  ConflictException: AwsSpeechFullApiSchemaConflictException;
} | {
  ServiceUnavailableException: AwsSpeechFullApiSchemaServiceUnavailableException;
};

export type AwsSpeechFullApiSchemaLanguageCode3 = AwsSpeechFullApiSchemaJsonValue;

export type AwsSpeechFullApiSchemaSpecialty2 = AwsSpeechFullApiSchemaJsonValue;

export type AwsSpeechFullApiSchemaType2 = AwsSpeechFullApiSchemaJsonValue;

export type AwsSpeechFullApiSchemaMedicalTranscriptResultStream = {
  TranscriptEvent: AwsSpeechFullApiSchemaMedicalTranscriptEvent;
} | {
  BadRequestException: AwsSpeechFullApiSchemaBadRequestException;
} | {
  LimitExceededException: AwsSpeechFullApiSchemaLimitExceededException;
} | {
  InternalFailureException: AwsSpeechFullApiSchemaInternalFailureException;
} | {
  ConflictException: AwsSpeechFullApiSchemaConflictException;
} | {
  ServiceUnavailableException: AwsSpeechFullApiSchemaServiceUnavailableException;
};

export type AwsSpeechFullApiSchemaMedicalContentIdentificationType2 = AwsSpeechFullApiSchemaJsonValue;

export type AwsSpeechFullApiSchemaTranscriptResultStream = {
  TranscriptEvent: AwsSpeechFullApiSchemaTranscriptEvent;
} | {
  BadRequestException: AwsSpeechFullApiSchemaBadRequestException;
} | {
  LimitExceededException: AwsSpeechFullApiSchemaLimitExceededException;
} | {
  InternalFailureException: AwsSpeechFullApiSchemaInternalFailureException;
} | {
  ConflictException: AwsSpeechFullApiSchemaConflictException;
} | {
  ServiceUnavailableException: AwsSpeechFullApiSchemaServiceUnavailableException;
};

export type AwsSpeechFullApiSchemaVoice = {
  Gender?: AwsSpeechFullApiSchemaGender;
  Id?: AwsSpeechFullApiSchemaVoiceId;
  LanguageCode?: AwsSpeechFullApiSchemaLanguageCode;
  LanguageName?: string;
  Name?: string;
  AdditionalLanguageCodes?: AwsSpeechFullApiSchemaLanguageCodeList2;
  SupportedEngines?: AwsSpeechFullApiSchemaEngineList;
};

export type AwsSpeechFullApiSchemaLexiconDescription = {
  Name?: string;
  Attributes?: AwsSpeechFullApiSchemaLexiconAttributes;
};

export type AwsSpeechFullApiSchemaFlushStreamConfiguration = {
  Force?: boolean;
};

export type AwsSpeechFullApiSchemaAudioEvent2 = {
  AudioChunk?: string;
};

export type AwsSpeechFullApiSchemaStreamClosedEvent = {
  RequestCharacters?: number;
};

export type AwsSpeechFullApiSchemaValidationException = {
  message: string;
  reason: AwsSpeechFullApiSchemaValidationExceptionReason;
  fields?: AwsSpeechFullApiSchemaValidationExceptionFieldList;
};

export type AwsSpeechFullApiSchemaServiceQuotaExceededException = {
  message: string;
  quotaCode: AwsSpeechFullApiSchemaQuotaCode;
  serviceCode: AwsSpeechFullApiSchemaServiceCode;
};

export type AwsSpeechFullApiSchemaServiceFailureException = {
  message?: string;
};

export type AwsSpeechFullApiSchemaThrottlingException = {
  message?: string;
  throttlingReasons?: AwsSpeechFullApiSchemaThrottlingReasonList;
};

export type AwsSpeechFullApiSchemaNonTalkTimeFilter = {
  Threshold?: number;
  AbsoluteTimeRange?: AwsSpeechFullApiSchemaAbsoluteTimeRange;
  RelativeTimeRange?: AwsSpeechFullApiSchemaRelativeTimeRange;
  Negate?: boolean;
};

export type AwsSpeechFullApiSchemaInterruptionFilter = {
  Threshold?: number;
  ParticipantRole?: AwsSpeechFullApiSchemaParticipantRole;
  AbsoluteTimeRange?: AwsSpeechFullApiSchemaAbsoluteTimeRange;
  RelativeTimeRange?: AwsSpeechFullApiSchemaRelativeTimeRange;
  Negate?: boolean;
};

export type AwsSpeechFullApiSchemaTranscriptFilter = {
  TranscriptFilterType: AwsSpeechFullApiSchemaTranscriptFilterType;
  AbsoluteTimeRange?: AwsSpeechFullApiSchemaAbsoluteTimeRange;
  RelativeTimeRange?: AwsSpeechFullApiSchemaRelativeTimeRange;
  ParticipantRole?: AwsSpeechFullApiSchemaParticipantRole;
  Negate?: boolean;
  Targets: AwsSpeechFullApiSchemaStringTargetList;
};

export type AwsSpeechFullApiSchemaSentimentFilter = {
  Sentiments: AwsSpeechFullApiSchemaSentimentValueList;
  AbsoluteTimeRange?: AwsSpeechFullApiSchemaAbsoluteTimeRange;
  RelativeTimeRange?: AwsSpeechFullApiSchemaRelativeTimeRange;
  ParticipantRole?: AwsSpeechFullApiSchemaParticipantRole;
  Negate?: boolean;
};

export type AwsSpeechFullApiSchemaCallAnalyticsJobDetails = {
  Skipped?: AwsSpeechFullApiSchemaCallAnalyticsSkippedFeatureList;
};

export type AwsSpeechFullApiSchemaTranscript = {
  TranscriptFileUri?: string;
  RedactedTranscriptFileUri?: string;
};

export type AwsSpeechFullApiSchemaMedicalScribeLanguageCode2 = AwsSpeechFullApiSchemaJsonValue;

export type AwsSpeechFullApiSchemaMedicalScribeOutput = {
  TranscriptFileUri: string;
  ClinicalDocumentUri: string;
};

export type AwsSpeechFullApiSchemaMedicalTranscript = {
  TranscriptFileUri?: string;
};

export type AwsSpeechFullApiSchemaLanguageCodeList = ReadonlyArray<AwsSpeechFullApiSchemaLanguageCodeItem>;

export type AwsSpeechFullApiSchemaSubtitlesOutput = {
  Formats?: AwsSpeechFullApiSchemaSubtitleFormats;
  SubtitleFileUris?: AwsSpeechFullApiSchemaSubtitleFileUris;
  OutputStartIndex?: number;
};

export type AwsSpeechFullApiSchemaCallAnalyticsJobSummary = {
  CallAnalyticsJobName?: string;
  CreationTime?: string;
  StartTime?: string;
  CompletionTime?: string;
  LanguageCode?: AwsSpeechFullApiSchemaLanguageCode2;
  CallAnalyticsJobStatus?: AwsSpeechFullApiSchemaCallAnalyticsJobStatus;
  CallAnalyticsJobDetails?: AwsSpeechFullApiSchemaCallAnalyticsJobDetails;
  FailureReason?: string;
};

export type AwsSpeechFullApiSchemaMedicalScribeJobSummary = {
  MedicalScribeJobName?: string;
  CreationTime?: string;
  StartTime?: string;
  CompletionTime?: string;
  LanguageCode?: AwsSpeechFullApiSchemaMedicalScribeLanguageCode2;
  MedicalScribeJobStatus?: AwsSpeechFullApiSchemaMedicalScribeJobStatus;
  FailureReason?: string;
};

export type AwsSpeechFullApiSchemaMedicalTranscriptionJobSummary = {
  MedicalTranscriptionJobName?: string;
  CreationTime?: string;
  StartTime?: string;
  CompletionTime?: string;
  LanguageCode?: AwsSpeechFullApiSchemaLanguageCode2;
  TranscriptionJobStatus?: AwsSpeechFullApiSchemaTranscriptionJobStatus;
  FailureReason?: string;
  OutputLocationType?: AwsSpeechFullApiSchemaOutputLocationType;
  Specialty?: AwsSpeechFullApiSchemaSpecialty;
  ContentIdentificationType?: AwsSpeechFullApiSchemaMedicalContentIdentificationType;
  Type?: AwsSpeechFullApiSchemaType;
};

export type AwsSpeechFullApiSchemaVocabularyInfo = {
  VocabularyName?: string;
  LanguageCode?: AwsSpeechFullApiSchemaLanguageCode2;
  LastModifiedTime?: string;
  VocabularyState?: AwsSpeechFullApiSchemaVocabularyState;
};

export type AwsSpeechFullApiSchemaTranscriptionJobSummary = {
  TranscriptionJobName?: string;
  CreationTime?: string;
  StartTime?: string;
  CompletionTime?: string;
  LanguageCode?: AwsSpeechFullApiSchemaLanguageCode2;
  TranscriptionJobStatus?: AwsSpeechFullApiSchemaTranscriptionJobStatus;
  FailureReason?: string;
  OutputLocationType?: AwsSpeechFullApiSchemaOutputLocationType;
  ContentRedaction?: AwsSpeechFullApiSchemaContentRedaction;
  ModelSettings?: AwsSpeechFullApiSchemaModelSettings;
  IdentifyLanguage?: boolean;
  IdentifyMultipleLanguages?: boolean;
  IdentifiedLanguageScore?: number;
  LanguageCodes?: AwsSpeechFullApiSchemaLanguageCodeList;
  ToxicityDetection?: AwsSpeechFullApiSchemaToxicityDetection;
};

export type AwsSpeechFullApiSchemaVocabularyFilterInfo = {
  VocabularyFilterName?: string;
  LanguageCode?: AwsSpeechFullApiSchemaLanguageCode2;
  LastModifiedTime?: string;
};

export type AwsSpeechFullApiSchemaParticipantRole = AwsSpeechFullApiSchemaJsonValue;

export type AwsSpeechFullApiSchemaMedicalScribeNoteTemplate = AwsSpeechFullApiSchemaJsonValue;

export type AwsSpeechFullApiSchemaMedicalScribeParticipantRole = AwsSpeechFullApiSchemaJsonValue;

export type AwsSpeechFullApiSchemaPronouns = AwsSpeechFullApiSchemaJsonValue;

export type AwsSpeechFullApiSchemaPiiEntityType = AwsSpeechFullApiSchemaJsonValue;

export type AwsSpeechFullApiSchemaSubtitleFormat = AwsSpeechFullApiSchemaJsonValue;

export type AwsSpeechFullApiSchemaToxicityCategories = ReadonlyArray<AwsSpeechFullApiSchemaToxicityCategory>;

export type AwsSpeechFullApiSchemaMedicalScribeVocabularyFilterMethod = AwsSpeechFullApiSchemaJsonValue;

export type AwsSpeechFullApiSchemaMedicalScribeChannelDefinitions2 = ReadonlyArray<AwsSpeechFullApiSchemaMedicalScribeChannelDefinition2>;

export type AwsSpeechFullApiSchemaMedicalScribeEncryptionSettings = {
  KmsEncryptionContext?: AwsSpeechFullApiSchemaKMSEncryptionContextMap2;
  KmsKeyId: string;
};

export type AwsSpeechFullApiSchemaMedicalScribeStreamStatus = AwsSpeechFullApiSchemaJsonValue;

export type AwsSpeechFullApiSchemaMedicalScribePostStreamAnalyticsSettings = {
  ClinicalNoteGenerationSettings: AwsSpeechFullApiSchemaClinicalNoteGenerationSettings2;
};

export type AwsSpeechFullApiSchemaMedicalScribePostStreamAnalyticsResult = {
  ClinicalNoteGenerationResult?: AwsSpeechFullApiSchemaClinicalNoteGenerationResult;
};

export type AwsSpeechFullApiSchemaChannelDefinitions2 = ReadonlyArray<AwsSpeechFullApiSchemaChannelDefinition2>;

export type AwsSpeechFullApiSchemaPostCallAnalyticsSettings = {
  OutputLocation: string;
  DataAccessRoleArn: string;
  ContentRedactionOutput?: AwsSpeechFullApiSchemaContentRedactionOutput;
  OutputEncryptionKMSKeyId?: string;
};

export type AwsSpeechFullApiSchemaUtteranceEvent = {
  UtteranceId?: string;
  IsPartial?: boolean;
  ParticipantRole?: AwsSpeechFullApiSchemaParticipantRole2;
  BeginOffsetMillis?: number;
  EndOffsetMillis?: number;
  Transcript?: string;
  Items?: AwsSpeechFullApiSchemaCallAnalyticsItemList;
  Entities?: AwsSpeechFullApiSchemaCallAnalyticsEntityList;
  Sentiment?: AwsSpeechFullApiSchemaSentiment;
  IssuesDetected?: AwsSpeechFullApiSchemaIssuesDetected;
  LanguageCode?: AwsSpeechFullApiSchemaCallAnalyticsLanguageCode;
  LanguageIdentification?: AwsSpeechFullApiSchemaCallAnalyticsLanguageIdentification;
};

export type AwsSpeechFullApiSchemaCategoryEvent = {
  MatchedCategories?: AwsSpeechFullApiSchemaStringList;
  MatchedDetails?: AwsSpeechFullApiSchemaMatchedCategoryDetails;
};

export type AwsSpeechFullApiSchemaBadRequestException = {
  Message?: string;
};

export type AwsSpeechFullApiSchemaLimitExceededException = {
  Message?: string;
};

export type AwsSpeechFullApiSchemaInternalFailureException = {
  Message?: string;
};

export type AwsSpeechFullApiSchemaConflictException = {
  Message?: string;
};

export type AwsSpeechFullApiSchemaServiceUnavailableException = {
  Message?: string;
};

export type AwsSpeechFullApiSchemaMedicalScribeSessionControlEventType = AwsSpeechFullApiSchemaJsonValue;

export type AwsSpeechFullApiSchemaMedicalScribeContext2 = {
  PatientContext?: AwsSpeechFullApiSchemaMedicalScribePatientContext2;
};

export type AwsSpeechFullApiSchemaMedicalScribeTranscriptEvent = {
  TranscriptSegment?: AwsSpeechFullApiSchemaMedicalScribeTranscriptSegment;
};

export type AwsSpeechFullApiSchemaMedicalTranscriptEvent = {
  Transcript?: AwsSpeechFullApiSchemaMedicalTranscript2;
};

export type AwsSpeechFullApiSchemaTranscriptEvent = {
  Transcript?: AwsSpeechFullApiSchemaTranscript2;
};

export type AwsSpeechFullApiSchemaGender = AwsSpeechFullApiSchemaJsonValue;

export type AwsSpeechFullApiSchemaLanguageCodeList2 = ReadonlyArray<AwsSpeechFullApiSchemaLanguageCode>;

export type AwsSpeechFullApiSchemaEngineList = ReadonlyArray<AwsSpeechFullApiSchemaEngine>;

export type AwsSpeechFullApiSchemaValidationExceptionReason = AwsSpeechFullApiSchemaJsonValue;

export type AwsSpeechFullApiSchemaValidationExceptionFieldList = ReadonlyArray<AwsSpeechFullApiSchemaValidationExceptionField>;

export type AwsSpeechFullApiSchemaQuotaCode = AwsSpeechFullApiSchemaJsonValue;

export type AwsSpeechFullApiSchemaServiceCode = AwsSpeechFullApiSchemaJsonValue;

export type AwsSpeechFullApiSchemaThrottlingReasonList = ReadonlyArray<AwsSpeechFullApiSchemaThrottlingReason>;

export type AwsSpeechFullApiSchemaAbsoluteTimeRange = {
  StartTime?: number;
  EndTime?: number;
  First?: number;
  Last?: number;
};

export type AwsSpeechFullApiSchemaRelativeTimeRange = {
  StartPercentage?: number;
  EndPercentage?: number;
  First?: number;
  Last?: number;
};

export type AwsSpeechFullApiSchemaTranscriptFilterType = AwsSpeechFullApiSchemaJsonValue;

export type AwsSpeechFullApiSchemaStringTargetList = ReadonlyArray<string>;

export type AwsSpeechFullApiSchemaSentimentValueList = ReadonlyArray<AwsSpeechFullApiSchemaSentimentValue>;

export type AwsSpeechFullApiSchemaCallAnalyticsSkippedFeatureList = ReadonlyArray<AwsSpeechFullApiSchemaCallAnalyticsSkippedFeature>;

export type AwsSpeechFullApiSchemaLanguageCodeItem = {
  LanguageCode?: AwsSpeechFullApiSchemaLanguageCode2;
  DurationInSeconds?: number;
};

export type AwsSpeechFullApiSchemaSubtitleFileUris = ReadonlyArray<string>;

export type AwsSpeechFullApiSchemaOutputLocationType = AwsSpeechFullApiSchemaJsonValue;

export type AwsSpeechFullApiSchemaToxicityCategory = AwsSpeechFullApiSchemaJsonValue;

export type AwsSpeechFullApiSchemaMedicalScribeChannelDefinition2 = {
  ChannelId: number;
  ParticipantRole: AwsSpeechFullApiSchemaMedicalScribeParticipantRole2;
};

export type AwsSpeechFullApiSchemaKMSEncryptionContextMap2 = {
  readonly [key: string]: string | undefined;
};

export type AwsSpeechFullApiSchemaClinicalNoteGenerationSettings2 = {
  OutputBucketName: string;
  NoteTemplate?: AwsSpeechFullApiSchemaMedicalScribeNoteTemplate2;
};

export type AwsSpeechFullApiSchemaClinicalNoteGenerationResult = {
  ClinicalNoteOutputLocation?: string;
  TranscriptOutputLocation?: string;
  Status?: AwsSpeechFullApiSchemaClinicalNoteGenerationStatus;
  FailureReason?: string;
};

export type AwsSpeechFullApiSchemaChannelDefinition2 = {
  ChannelId: number;
  ParticipantRole: AwsSpeechFullApiSchemaParticipantRole2;
};

export type AwsSpeechFullApiSchemaContentRedactionOutput = AwsSpeechFullApiSchemaJsonValue;

export type AwsSpeechFullApiSchemaParticipantRole2 = AwsSpeechFullApiSchemaJsonValue;

export type AwsSpeechFullApiSchemaCallAnalyticsItemList = ReadonlyArray<AwsSpeechFullApiSchemaCallAnalyticsItem>;

export type AwsSpeechFullApiSchemaCallAnalyticsEntityList = ReadonlyArray<AwsSpeechFullApiSchemaCallAnalyticsEntity>;

export type AwsSpeechFullApiSchemaSentiment = AwsSpeechFullApiSchemaJsonValue;

export type AwsSpeechFullApiSchemaIssuesDetected = ReadonlyArray<AwsSpeechFullApiSchemaIssueDetected>;

export type AwsSpeechFullApiSchemaCallAnalyticsLanguageIdentification = ReadonlyArray<AwsSpeechFullApiSchemaCallAnalyticsLanguageWithScore>;

export type AwsSpeechFullApiSchemaStringList = ReadonlyArray<string>;

export type AwsSpeechFullApiSchemaMatchedCategoryDetails = {
  readonly [key: string]: AwsSpeechFullApiSchemaPointsOfInterest | undefined;
};

export type AwsSpeechFullApiSchemaMedicalScribePatientContext2 = {
  Pronouns?: AwsSpeechFullApiSchemaPronouns2;
};

export type AwsSpeechFullApiSchemaMedicalScribeTranscriptSegment = {
  SegmentId?: string;
  BeginAudioTime?: number;
  EndAudioTime?: number;
  Content?: string;
  Items?: AwsSpeechFullApiSchemaMedicalScribeTranscriptItemList;
  IsPartial?: boolean;
  ChannelId?: string;
};

export type AwsSpeechFullApiSchemaMedicalTranscript2 = {
  Results?: AwsSpeechFullApiSchemaMedicalResultList;
};

export type AwsSpeechFullApiSchemaTranscript2 = {
  Results?: AwsSpeechFullApiSchemaResultList;
};

export type AwsSpeechFullApiSchemaValidationExceptionField = {
  name: string;
  message: string;
};

export type AwsSpeechFullApiSchemaThrottlingReason = {
  reason?: string;
  resource?: string;
};

export type AwsSpeechFullApiSchemaSentimentValue = AwsSpeechFullApiSchemaJsonValue;

export type AwsSpeechFullApiSchemaCallAnalyticsSkippedFeature = {
  Feature?: AwsSpeechFullApiSchemaCallAnalyticsFeature;
  ReasonCode?: AwsSpeechFullApiSchemaCallAnalyticsSkippedReasonCode;
  Message?: string;
};

export type AwsSpeechFullApiSchemaMedicalScribeParticipantRole2 = AwsSpeechFullApiSchemaJsonValue;

export type AwsSpeechFullApiSchemaMedicalScribeNoteTemplate2 = AwsSpeechFullApiSchemaJsonValue;

export type AwsSpeechFullApiSchemaClinicalNoteGenerationStatus = AwsSpeechFullApiSchemaJsonValue;

export type AwsSpeechFullApiSchemaCallAnalyticsItem = {
  BeginOffsetMillis?: number;
  EndOffsetMillis?: number;
  Type?: AwsSpeechFullApiSchemaItemType;
  Content?: string;
  Confidence?: number;
  VocabularyFilterMatch?: boolean;
  Stable?: boolean;
};

export type AwsSpeechFullApiSchemaCallAnalyticsEntity = {
  BeginOffsetMillis?: number;
  EndOffsetMillis?: number;
  Category?: string;
  Type?: string;
  Content?: string;
  Confidence?: number;
};

export type AwsSpeechFullApiSchemaIssueDetected = {
  CharacterOffsets?: AwsSpeechFullApiSchemaCharacterOffsets;
};

export type AwsSpeechFullApiSchemaCallAnalyticsLanguageWithScore = {
  LanguageCode?: AwsSpeechFullApiSchemaCallAnalyticsLanguageCode;
  Score?: number;
};

export type AwsSpeechFullApiSchemaPointsOfInterest = {
  TimestampRanges?: AwsSpeechFullApiSchemaTimestampRanges;
};

export type AwsSpeechFullApiSchemaPronouns2 = AwsSpeechFullApiSchemaJsonValue;

export type AwsSpeechFullApiSchemaMedicalScribeTranscriptItemList = ReadonlyArray<AwsSpeechFullApiSchemaMedicalScribeTranscriptItem>;

export type AwsSpeechFullApiSchemaMedicalResultList = ReadonlyArray<AwsSpeechFullApiSchemaMedicalResult>;

export type AwsSpeechFullApiSchemaResultList = ReadonlyArray<AwsSpeechFullApiSchemaResult>;

export type AwsSpeechFullApiSchemaCallAnalyticsFeature = AwsSpeechFullApiSchemaJsonValue;

export type AwsSpeechFullApiSchemaCallAnalyticsSkippedReasonCode = AwsSpeechFullApiSchemaJsonValue;

export type AwsSpeechFullApiSchemaItemType = AwsSpeechFullApiSchemaJsonValue;

export type AwsSpeechFullApiSchemaCharacterOffsets = {
  Begin?: number;
  End?: number;
};

export type AwsSpeechFullApiSchemaTimestampRanges = ReadonlyArray<AwsSpeechFullApiSchemaTimestampRange>;

export type AwsSpeechFullApiSchemaMedicalScribeTranscriptItem = {
  BeginAudioTime?: number;
  EndAudioTime?: number;
  Type?: AwsSpeechFullApiSchemaMedicalScribeTranscriptItemType;
  Confidence?: number;
  Content?: string;
  VocabularyFilterMatch?: boolean;
};

export type AwsSpeechFullApiSchemaMedicalResult = {
  ResultId?: string;
  StartTime?: number;
  EndTime?: number;
  IsPartial?: boolean;
  Alternatives?: AwsSpeechFullApiSchemaMedicalAlternativeList;
  ChannelId?: string;
};

export type AwsSpeechFullApiSchemaResult = {
  ResultId?: string;
  StartTime?: number;
  EndTime?: number;
  IsPartial?: boolean;
  Alternatives?: AwsSpeechFullApiSchemaAlternativeList;
  ChannelId?: string;
  LanguageCode?: AwsSpeechFullApiSchemaLanguageCode3;
  LanguageIdentification?: AwsSpeechFullApiSchemaLanguageIdentification;
};

export type AwsSpeechFullApiSchemaTimestampRange = {
  BeginOffsetMillis?: number;
  EndOffsetMillis?: number;
};

export type AwsSpeechFullApiSchemaMedicalScribeTranscriptItemType = AwsSpeechFullApiSchemaJsonValue;

export type AwsSpeechFullApiSchemaMedicalAlternativeList = ReadonlyArray<AwsSpeechFullApiSchemaMedicalAlternative>;

export type AwsSpeechFullApiSchemaAlternativeList = ReadonlyArray<AwsSpeechFullApiSchemaAlternative>;

export type AwsSpeechFullApiSchemaLanguageIdentification = ReadonlyArray<AwsSpeechFullApiSchemaLanguageWithScore>;

export type AwsSpeechFullApiSchemaMedicalAlternative = {
  Transcript?: string;
  Items?: AwsSpeechFullApiSchemaMedicalItemList;
  Entities?: AwsSpeechFullApiSchemaMedicalEntityList;
};

export type AwsSpeechFullApiSchemaAlternative = {
  Transcript?: string;
  Items?: AwsSpeechFullApiSchemaItemList;
  Entities?: AwsSpeechFullApiSchemaEntityList;
};

export type AwsSpeechFullApiSchemaLanguageWithScore = {
  LanguageCode?: AwsSpeechFullApiSchemaLanguageCode3;
  Score?: number;
};

export type AwsSpeechFullApiSchemaMedicalItemList = ReadonlyArray<AwsSpeechFullApiSchemaMedicalItem>;

export type AwsSpeechFullApiSchemaMedicalEntityList = ReadonlyArray<AwsSpeechFullApiSchemaMedicalEntity>;

export type AwsSpeechFullApiSchemaItemList = ReadonlyArray<AwsSpeechFullApiSchemaItem>;

export type AwsSpeechFullApiSchemaEntityList = ReadonlyArray<AwsSpeechFullApiSchemaEntity>;

export type AwsSpeechFullApiSchemaMedicalItem = {
  StartTime?: number;
  EndTime?: number;
  Type?: AwsSpeechFullApiSchemaItemType;
  Content?: string;
  Confidence?: number;
  Speaker?: string;
};

export type AwsSpeechFullApiSchemaMedicalEntity = {
  StartTime?: number;
  EndTime?: number;
  Category?: string;
  Content?: string;
  Confidence?: number;
};

export type AwsSpeechFullApiSchemaItem = {
  StartTime?: number;
  EndTime?: number;
  Type?: AwsSpeechFullApiSchemaItemType;
  Content?: string;
  VocabularyFilterMatch?: boolean;
  Speaker?: string;
  Confidence?: number;
  Stable?: boolean;
};

export type AwsSpeechFullApiSchemaEntity = {
  StartTime?: number;
  EndTime?: number;
  Category?: string;
  Type?: string;
  Content?: string;
  Confidence?: number;
};

export interface AwsSpeechFullApiOperationQueryMap {
  "polly:DeleteLexicon": {};
  "polly:DescribeVoices": {
  Engine?: AwsSpeechFullApiSchemaEngine;
  LanguageCode?: AwsSpeechFullApiSchemaLanguageCode;
  IncludeAdditionalLanguageCodes?: boolean;
  NextToken?: string;
};
  "polly:GetLexicon": {};
  "polly:GetSpeechSynthesisTask": {};
  "polly:ListLexicons": {
  NextToken?: string;
};
  "polly:ListSpeechSynthesisTasks": {
  MaxResults?: number;
  NextToken?: string;
  Status?: AwsSpeechFullApiSchemaTaskStatus;
};
  "polly:PutLexicon": {};
  "polly:StartSpeechSynthesisStream": {};
  "polly:StartSpeechSynthesisTask": {};
  "polly:SynthesizeSpeech": {};
  "transcribe:CreateCallAnalyticsCategory": {};
  "transcribe:CreateLanguageModel": {};
  "transcribe:CreateMedicalVocabulary": {};
  "transcribe:CreateVocabulary": {};
  "transcribe:CreateVocabularyFilter": {};
  "transcribe:DeleteCallAnalyticsCategory": {};
  "transcribe:DeleteCallAnalyticsJob": {};
  "transcribe:DeleteLanguageModel": {};
  "transcribe:DeleteMedicalScribeJob": {};
  "transcribe:DeleteMedicalTranscriptionJob": {};
  "transcribe:DeleteMedicalVocabulary": {};
  "transcribe:DeleteTranscriptionJob": {};
  "transcribe:DeleteVocabulary": {};
  "transcribe:DeleteVocabularyFilter": {};
  "transcribe:DescribeLanguageModel": {};
  "transcribe:GetCallAnalyticsCategory": {};
  "transcribe:GetCallAnalyticsJob": {};
  "transcribe:GetMedicalScribeJob": {};
  "transcribe:GetMedicalTranscriptionJob": {};
  "transcribe:GetMedicalVocabulary": {};
  "transcribe:GetTranscriptionJob": {};
  "transcribe:GetVocabulary": {};
  "transcribe:GetVocabularyFilter": {};
  "transcribe:ListCallAnalyticsCategories": {
  NextToken?: string;
  MaxResults?: number;
};
  "transcribe:ListCallAnalyticsJobs": {
  Status?: AwsSpeechFullApiSchemaCallAnalyticsJobStatus;
  JobNameContains?: string;
  NextToken?: string;
  MaxResults?: number;
};
  "transcribe:ListLanguageModels": {
  StatusEquals?: AwsSpeechFullApiSchemaModelStatus;
  NameContains?: string;
  NextToken?: string;
  MaxResults?: number;
};
  "transcribe:ListMedicalScribeJobs": {
  Status?: AwsSpeechFullApiSchemaMedicalScribeJobStatus;
  JobNameContains?: string;
  NextToken?: string;
  MaxResults?: number;
};
  "transcribe:ListMedicalTranscriptionJobs": {
  Status?: AwsSpeechFullApiSchemaTranscriptionJobStatus;
  JobNameContains?: string;
  NextToken?: string;
  MaxResults?: number;
};
  "transcribe:ListMedicalVocabularies": {
  NextToken?: string;
  MaxResults?: number;
  StateEquals?: AwsSpeechFullApiSchemaVocabularyState;
  NameContains?: string;
};
  "transcribe:ListTagsForResource": {};
  "transcribe:ListTranscriptionJobs": {
  Status?: AwsSpeechFullApiSchemaTranscriptionJobStatus;
  JobNameContains?: string;
  NextToken?: string;
  MaxResults?: number;
};
  "transcribe:ListVocabularies": {
  NextToken?: string;
  MaxResults?: number;
  StateEquals?: AwsSpeechFullApiSchemaVocabularyState;
  NameContains?: string;
};
  "transcribe:ListVocabularyFilters": {
  NextToken?: string;
  MaxResults?: number;
  NameContains?: string;
};
  "transcribe:StartCallAnalyticsJob": {};
  "transcribe:StartMedicalScribeJob": {};
  "transcribe:StartMedicalTranscriptionJob": {};
  "transcribe:StartTranscriptionJob": {};
  "transcribe-streaming:GetMedicalScribeStream": {};
  "transcribe-streaming:StartCallAnalyticsStreamTranscription": {};
  "transcribe-streaming:StartMedicalScribeStream": {};
  "transcribe-streaming:StartMedicalStreamTranscription": {};
  "transcribe-streaming:StartStreamTranscription": {};
  "transcribe:TagResource": {};
  "transcribe:UntagResource": {
  TagKeys: AwsSpeechFullApiSchemaTagKeyList;
};
  "transcribe:UpdateCallAnalyticsCategory": {};
  "transcribe:UpdateMedicalVocabulary": {};
  "transcribe:UpdateVocabulary": {};
  "transcribe:UpdateVocabularyFilter": {};
}

export interface AwsSpeechFullApiOperationQueryRequiredMap {
  "polly:DeleteLexicon": false;
  "polly:DescribeVoices": false;
  "polly:GetLexicon": false;
  "polly:GetSpeechSynthesisTask": false;
  "polly:ListLexicons": false;
  "polly:ListSpeechSynthesisTasks": false;
  "polly:PutLexicon": false;
  "polly:StartSpeechSynthesisStream": false;
  "polly:StartSpeechSynthesisTask": false;
  "polly:SynthesizeSpeech": false;
  "transcribe:CreateCallAnalyticsCategory": false;
  "transcribe:CreateLanguageModel": false;
  "transcribe:CreateMedicalVocabulary": false;
  "transcribe:CreateVocabulary": false;
  "transcribe:CreateVocabularyFilter": false;
  "transcribe:DeleteCallAnalyticsCategory": false;
  "transcribe:DeleteCallAnalyticsJob": false;
  "transcribe:DeleteLanguageModel": false;
  "transcribe:DeleteMedicalScribeJob": false;
  "transcribe:DeleteMedicalTranscriptionJob": false;
  "transcribe:DeleteMedicalVocabulary": false;
  "transcribe:DeleteTranscriptionJob": false;
  "transcribe:DeleteVocabulary": false;
  "transcribe:DeleteVocabularyFilter": false;
  "transcribe:DescribeLanguageModel": false;
  "transcribe:GetCallAnalyticsCategory": false;
  "transcribe:GetCallAnalyticsJob": false;
  "transcribe:GetMedicalScribeJob": false;
  "transcribe:GetMedicalTranscriptionJob": false;
  "transcribe:GetMedicalVocabulary": false;
  "transcribe:GetTranscriptionJob": false;
  "transcribe:GetVocabulary": false;
  "transcribe:GetVocabularyFilter": false;
  "transcribe:ListCallAnalyticsCategories": false;
  "transcribe:ListCallAnalyticsJobs": false;
  "transcribe:ListLanguageModels": false;
  "transcribe:ListMedicalScribeJobs": false;
  "transcribe:ListMedicalTranscriptionJobs": false;
  "transcribe:ListMedicalVocabularies": false;
  "transcribe:ListTagsForResource": false;
  "transcribe:ListTranscriptionJobs": false;
  "transcribe:ListVocabularies": false;
  "transcribe:ListVocabularyFilters": false;
  "transcribe:StartCallAnalyticsJob": false;
  "transcribe:StartMedicalScribeJob": false;
  "transcribe:StartMedicalTranscriptionJob": false;
  "transcribe:StartTranscriptionJob": false;
  "transcribe-streaming:GetMedicalScribeStream": false;
  "transcribe-streaming:StartCallAnalyticsStreamTranscription": false;
  "transcribe-streaming:StartMedicalScribeStream": false;
  "transcribe-streaming:StartMedicalStreamTranscription": false;
  "transcribe-streaming:StartStreamTranscription": false;
  "transcribe:TagResource": false;
  "transcribe:UntagResource": true;
  "transcribe:UpdateCallAnalyticsCategory": false;
  "transcribe:UpdateMedicalVocabulary": false;
  "transcribe:UpdateVocabulary": false;
  "transcribe:UpdateVocabularyFilter": false;
}

export interface AwsSpeechFullApiOperationRequestBodyMap {
  "polly:DeleteLexicon": never;
  "polly:DescribeVoices": never;
  "polly:GetLexicon": never;
  "polly:GetSpeechSynthesisTask": never;
  "polly:ListLexicons": never;
  "polly:ListSpeechSynthesisTasks": never;
  "polly:PutLexicon": {
  Content: string;
};
  "polly:StartSpeechSynthesisStream": AwsSpeechFullApiSchemaStartSpeechSynthesisStreamActionStream;
  "polly:StartSpeechSynthesisTask": {
  Engine?: AwsSpeechFullApiSchemaEngine;
  LanguageCode?: AwsSpeechFullApiSchemaLanguageCode;
  LexiconNames?: AwsSpeechFullApiSchemaLexiconNameList;
  OutputFormat: AwsSpeechFullApiSchemaOutputFormat;
  OutputS3BucketName: string;
  OutputS3KeyPrefix?: string;
  SampleRate?: string;
  SnsTopicArn?: string;
  SpeechMarkTypes?: AwsSpeechFullApiSchemaSpeechMarkTypeList;
  Text: string;
  TextType?: AwsSpeechFullApiSchemaTextType;
  VoiceId: AwsSpeechFullApiSchemaVoiceId;
};
  "polly:SynthesizeSpeech": {
  Engine?: AwsSpeechFullApiSchemaEngine;
  LanguageCode?: AwsSpeechFullApiSchemaLanguageCode;
  LexiconNames?: AwsSpeechFullApiSchemaLexiconNameList;
  OutputFormat: AwsSpeechFullApiSchemaOutputFormat;
  SampleRate?: string;
  SpeechMarkTypes?: AwsSpeechFullApiSchemaSpeechMarkTypeList;
  Text: string;
  TextType?: AwsSpeechFullApiSchemaTextType;
  VoiceId: AwsSpeechFullApiSchemaVoiceId;
};
  "transcribe:CreateCallAnalyticsCategory": {
  Rules: AwsSpeechFullApiSchemaRuleList;
  Tags?: AwsSpeechFullApiSchemaTagList;
  InputType?: AwsSpeechFullApiSchemaInputType;
};
  "transcribe:CreateLanguageModel": {
  LanguageCode: AwsSpeechFullApiSchemaCLMLanguageCode;
  BaseModelName: AwsSpeechFullApiSchemaBaseModelName;
  InputDataConfig: AwsSpeechFullApiSchemaInputDataConfig;
  Tags?: AwsSpeechFullApiSchemaTagList;
};
  "transcribe:CreateMedicalVocabulary": {
  LanguageCode: AwsSpeechFullApiSchemaLanguageCode2;
  VocabularyFileUri: string;
  Tags?: AwsSpeechFullApiSchemaTagList;
};
  "transcribe:CreateVocabulary": {
  LanguageCode: AwsSpeechFullApiSchemaLanguageCode2;
  Phrases?: AwsSpeechFullApiSchemaPhrases;
  VocabularyFileUri?: string;
  Tags?: AwsSpeechFullApiSchemaTagList;
  DataAccessRoleArn?: string;
};
  "transcribe:CreateVocabularyFilter": {
  LanguageCode: AwsSpeechFullApiSchemaLanguageCode2;
  Words?: AwsSpeechFullApiSchemaWords;
  VocabularyFilterFileUri?: string;
  Tags?: AwsSpeechFullApiSchemaTagList;
  DataAccessRoleArn?: string;
};
  "transcribe:DeleteCallAnalyticsCategory": never;
  "transcribe:DeleteCallAnalyticsJob": never;
  "transcribe:DeleteLanguageModel": never;
  "transcribe:DeleteMedicalScribeJob": never;
  "transcribe:DeleteMedicalTranscriptionJob": never;
  "transcribe:DeleteMedicalVocabulary": never;
  "transcribe:DeleteTranscriptionJob": never;
  "transcribe:DeleteVocabulary": never;
  "transcribe:DeleteVocabularyFilter": never;
  "transcribe:DescribeLanguageModel": never;
  "transcribe:GetCallAnalyticsCategory": never;
  "transcribe:GetCallAnalyticsJob": never;
  "transcribe:GetMedicalScribeJob": never;
  "transcribe:GetMedicalTranscriptionJob": never;
  "transcribe:GetMedicalVocabulary": never;
  "transcribe:GetTranscriptionJob": never;
  "transcribe:GetVocabulary": never;
  "transcribe:GetVocabularyFilter": never;
  "transcribe:ListCallAnalyticsCategories": never;
  "transcribe:ListCallAnalyticsJobs": never;
  "transcribe:ListLanguageModels": never;
  "transcribe:ListMedicalScribeJobs": never;
  "transcribe:ListMedicalTranscriptionJobs": never;
  "transcribe:ListMedicalVocabularies": never;
  "transcribe:ListTagsForResource": never;
  "transcribe:ListTranscriptionJobs": never;
  "transcribe:ListVocabularies": never;
  "transcribe:ListVocabularyFilters": never;
  "transcribe:StartCallAnalyticsJob": {
  Media: AwsSpeechFullApiSchemaMedia;
  OutputLocation?: string;
  OutputEncryptionKMSKeyId?: string;
  DataAccessRoleArn?: string;
  Settings?: AwsSpeechFullApiSchemaCallAnalyticsJobSettings;
  Tags?: AwsSpeechFullApiSchemaTagList;
  ChannelDefinitions?: AwsSpeechFullApiSchemaChannelDefinitions;
};
  "transcribe:StartMedicalScribeJob": {
  Media: AwsSpeechFullApiSchemaMedia;
  OutputBucketName: string;
  OutputEncryptionKMSKeyId?: string;
  KMSEncryptionContext?: AwsSpeechFullApiSchemaKMSEncryptionContextMap;
  DataAccessRoleArn: string;
  Settings: AwsSpeechFullApiSchemaMedicalScribeSettings;
  ChannelDefinitions?: AwsSpeechFullApiSchemaMedicalScribeChannelDefinitions;
  Tags?: AwsSpeechFullApiSchemaTagList;
  MedicalScribeContext?: AwsSpeechFullApiSchemaMedicalScribeContext;
};
  "transcribe:StartMedicalTranscriptionJob": {
  LanguageCode: AwsSpeechFullApiSchemaLanguageCode2;
  MediaSampleRateHertz?: number;
  MediaFormat?: AwsSpeechFullApiSchemaMediaFormat;
  Media: AwsSpeechFullApiSchemaMedia;
  OutputBucketName: string;
  OutputKey?: string;
  OutputEncryptionKMSKeyId?: string;
  KMSEncryptionContext?: AwsSpeechFullApiSchemaKMSEncryptionContextMap;
  Settings?: AwsSpeechFullApiSchemaMedicalTranscriptionSetting;
  ContentIdentificationType?: AwsSpeechFullApiSchemaMedicalContentIdentificationType;
  Specialty: AwsSpeechFullApiSchemaSpecialty;
  Type: AwsSpeechFullApiSchemaType;
  Tags?: AwsSpeechFullApiSchemaTagList;
};
  "transcribe:StartTranscriptionJob": {
  LanguageCode?: AwsSpeechFullApiSchemaLanguageCode2;
  MediaSampleRateHertz?: number;
  MediaFormat?: AwsSpeechFullApiSchemaMediaFormat;
  Media: AwsSpeechFullApiSchemaMedia;
  OutputBucketName?: string;
  OutputKey?: string;
  OutputEncryptionKMSKeyId?: string;
  KMSEncryptionContext?: AwsSpeechFullApiSchemaKMSEncryptionContextMap;
  Settings?: AwsSpeechFullApiSchemaSettings;
  ModelSettings?: AwsSpeechFullApiSchemaModelSettings;
  JobExecutionSettings?: AwsSpeechFullApiSchemaJobExecutionSettings;
  ContentRedaction?: AwsSpeechFullApiSchemaContentRedaction;
  IdentifyLanguage?: boolean;
  IdentifyMultipleLanguages?: boolean;
  LanguageOptions?: AwsSpeechFullApiSchemaLanguageOptions;
  Subtitles?: AwsSpeechFullApiSchemaSubtitles;
  Tags?: AwsSpeechFullApiSchemaTagList;
  LanguageIdSettings?: AwsSpeechFullApiSchemaLanguageIdSettingsMap;
  ToxicityDetection?: AwsSpeechFullApiSchemaToxicityDetection;
};
  "transcribe-streaming:GetMedicalScribeStream": never;
  "transcribe-streaming:StartCallAnalyticsStreamTranscription": AwsSpeechFullApiSchemaAudioStream;
  "transcribe-streaming:StartMedicalScribeStream": AwsSpeechFullApiSchemaMedicalScribeInputStream;
  "transcribe-streaming:StartMedicalStreamTranscription": AwsSpeechFullApiSchemaAudioStream;
  "transcribe-streaming:StartStreamTranscription": AwsSpeechFullApiSchemaAudioStream;
  "transcribe:TagResource": {
  Tags: AwsSpeechFullApiSchemaTagList;
};
  "transcribe:UntagResource": never;
  "transcribe:UpdateCallAnalyticsCategory": {
  Rules: AwsSpeechFullApiSchemaRuleList;
  InputType?: AwsSpeechFullApiSchemaInputType;
};
  "transcribe:UpdateMedicalVocabulary": {
  LanguageCode: AwsSpeechFullApiSchemaLanguageCode2;
  VocabularyFileUri: string;
};
  "transcribe:UpdateVocabulary": {
  LanguageCode: AwsSpeechFullApiSchemaLanguageCode2;
  Phrases?: AwsSpeechFullApiSchemaPhrases;
  VocabularyFileUri?: string;
  DataAccessRoleArn?: string;
};
  "transcribe:UpdateVocabularyFilter": {
  Words?: AwsSpeechFullApiSchemaWords;
  VocabularyFilterFileUri?: string;
  DataAccessRoleArn?: string;
};
}

export interface AwsSpeechFullApiOperationRequestBodyRequiredMap {
  "polly:DeleteLexicon": false;
  "polly:DescribeVoices": false;
  "polly:GetLexicon": false;
  "polly:GetSpeechSynthesisTask": false;
  "polly:ListLexicons": false;
  "polly:ListSpeechSynthesisTasks": false;
  "polly:PutLexicon": true;
  "polly:StartSpeechSynthesisStream": false;
  "polly:StartSpeechSynthesisTask": true;
  "polly:SynthesizeSpeech": true;
  "transcribe:CreateCallAnalyticsCategory": true;
  "transcribe:CreateLanguageModel": true;
  "transcribe:CreateMedicalVocabulary": true;
  "transcribe:CreateVocabulary": true;
  "transcribe:CreateVocabularyFilter": true;
  "transcribe:DeleteCallAnalyticsCategory": false;
  "transcribe:DeleteCallAnalyticsJob": false;
  "transcribe:DeleteLanguageModel": false;
  "transcribe:DeleteMedicalScribeJob": false;
  "transcribe:DeleteMedicalTranscriptionJob": false;
  "transcribe:DeleteMedicalVocabulary": false;
  "transcribe:DeleteTranscriptionJob": false;
  "transcribe:DeleteVocabulary": false;
  "transcribe:DeleteVocabularyFilter": false;
  "transcribe:DescribeLanguageModel": false;
  "transcribe:GetCallAnalyticsCategory": false;
  "transcribe:GetCallAnalyticsJob": false;
  "transcribe:GetMedicalScribeJob": false;
  "transcribe:GetMedicalTranscriptionJob": false;
  "transcribe:GetMedicalVocabulary": false;
  "transcribe:GetTranscriptionJob": false;
  "transcribe:GetVocabulary": false;
  "transcribe:GetVocabularyFilter": false;
  "transcribe:ListCallAnalyticsCategories": false;
  "transcribe:ListCallAnalyticsJobs": false;
  "transcribe:ListLanguageModels": false;
  "transcribe:ListMedicalScribeJobs": false;
  "transcribe:ListMedicalTranscriptionJobs": false;
  "transcribe:ListMedicalVocabularies": false;
  "transcribe:ListTagsForResource": false;
  "transcribe:ListTranscriptionJobs": false;
  "transcribe:ListVocabularies": false;
  "transcribe:ListVocabularyFilters": false;
  "transcribe:StartCallAnalyticsJob": true;
  "transcribe:StartMedicalScribeJob": true;
  "transcribe:StartMedicalTranscriptionJob": true;
  "transcribe:StartTranscriptionJob": true;
  "transcribe-streaming:GetMedicalScribeStream": false;
  "transcribe-streaming:StartCallAnalyticsStreamTranscription": true;
  "transcribe-streaming:StartMedicalScribeStream": true;
  "transcribe-streaming:StartMedicalStreamTranscription": true;
  "transcribe-streaming:StartStreamTranscription": true;
  "transcribe:TagResource": true;
  "transcribe:UntagResource": false;
  "transcribe:UpdateCallAnalyticsCategory": true;
  "transcribe:UpdateMedicalVocabulary": true;
  "transcribe:UpdateVocabulary": true;
  "transcribe:UpdateVocabularyFilter": false;
}

export interface AwsSpeechFullApiOperationResponseMap {
  "polly:DeleteLexicon": AwsSpeechFullApiSchemaDeleteLexiconOutput;
  "polly:DescribeVoices": AwsSpeechFullApiSchemaDescribeVoicesOutput;
  "polly:GetLexicon": AwsSpeechFullApiSchemaGetLexiconOutput;
  "polly:GetSpeechSynthesisTask": AwsSpeechFullApiSchemaGetSpeechSynthesisTaskOutput;
  "polly:ListLexicons": AwsSpeechFullApiSchemaListLexiconsOutput;
  "polly:ListSpeechSynthesisTasks": AwsSpeechFullApiSchemaListSpeechSynthesisTasksOutput;
  "polly:PutLexicon": AwsSpeechFullApiSchemaPutLexiconOutput;
  "polly:StartSpeechSynthesisStream": AwsSpeechFullApiSchemaStartSpeechSynthesisStreamOutput;
  "polly:StartSpeechSynthesisTask": AwsSpeechFullApiSchemaStartSpeechSynthesisTaskOutput;
  "polly:SynthesizeSpeech": AwsSpeechFullApiSchemaSynthesizeSpeechOutput;
  "transcribe:CreateCallAnalyticsCategory": AwsSpeechFullApiSchemaCreateCallAnalyticsCategoryResponse;
  "transcribe:CreateLanguageModel": AwsSpeechFullApiSchemaCreateLanguageModelResponse;
  "transcribe:CreateMedicalVocabulary": AwsSpeechFullApiSchemaCreateMedicalVocabularyResponse;
  "transcribe:CreateVocabulary": AwsSpeechFullApiSchemaCreateVocabularyResponse;
  "transcribe:CreateVocabularyFilter": AwsSpeechFullApiSchemaCreateVocabularyFilterResponse;
  "transcribe:DeleteCallAnalyticsCategory": AwsSpeechFullApiSchemaDeleteCallAnalyticsCategoryResponse;
  "transcribe:DeleteCallAnalyticsJob": AwsSpeechFullApiSchemaDeleteCallAnalyticsJobResponse;
  "transcribe:DeleteLanguageModel": void;
  "transcribe:DeleteMedicalScribeJob": void;
  "transcribe:DeleteMedicalTranscriptionJob": void;
  "transcribe:DeleteMedicalVocabulary": void;
  "transcribe:DeleteTranscriptionJob": void;
  "transcribe:DeleteVocabulary": void;
  "transcribe:DeleteVocabularyFilter": void;
  "transcribe:DescribeLanguageModel": AwsSpeechFullApiSchemaDescribeLanguageModelResponse;
  "transcribe:GetCallAnalyticsCategory": AwsSpeechFullApiSchemaGetCallAnalyticsCategoryResponse;
  "transcribe:GetCallAnalyticsJob": AwsSpeechFullApiSchemaGetCallAnalyticsJobResponse;
  "transcribe:GetMedicalScribeJob": AwsSpeechFullApiSchemaGetMedicalScribeJobResponse;
  "transcribe:GetMedicalTranscriptionJob": AwsSpeechFullApiSchemaGetMedicalTranscriptionJobResponse;
  "transcribe:GetMedicalVocabulary": AwsSpeechFullApiSchemaGetMedicalVocabularyResponse;
  "transcribe:GetTranscriptionJob": AwsSpeechFullApiSchemaGetTranscriptionJobResponse;
  "transcribe:GetVocabulary": AwsSpeechFullApiSchemaGetVocabularyResponse;
  "transcribe:GetVocabularyFilter": AwsSpeechFullApiSchemaGetVocabularyFilterResponse;
  "transcribe:ListCallAnalyticsCategories": AwsSpeechFullApiSchemaListCallAnalyticsCategoriesResponse;
  "transcribe:ListCallAnalyticsJobs": AwsSpeechFullApiSchemaListCallAnalyticsJobsResponse;
  "transcribe:ListLanguageModels": AwsSpeechFullApiSchemaListLanguageModelsResponse;
  "transcribe:ListMedicalScribeJobs": AwsSpeechFullApiSchemaListMedicalScribeJobsResponse;
  "transcribe:ListMedicalTranscriptionJobs": AwsSpeechFullApiSchemaListMedicalTranscriptionJobsResponse;
  "transcribe:ListMedicalVocabularies": AwsSpeechFullApiSchemaListMedicalVocabulariesResponse;
  "transcribe:ListTagsForResource": AwsSpeechFullApiSchemaListTagsForResourceResponse;
  "transcribe:ListTranscriptionJobs": AwsSpeechFullApiSchemaListTranscriptionJobsResponse;
  "transcribe:ListVocabularies": AwsSpeechFullApiSchemaListVocabulariesResponse;
  "transcribe:ListVocabularyFilters": AwsSpeechFullApiSchemaListVocabularyFiltersResponse;
  "transcribe:StartCallAnalyticsJob": AwsSpeechFullApiSchemaStartCallAnalyticsJobResponse;
  "transcribe:StartMedicalScribeJob": AwsSpeechFullApiSchemaStartMedicalScribeJobResponse;
  "transcribe:StartMedicalTranscriptionJob": AwsSpeechFullApiSchemaStartMedicalTranscriptionJobResponse;
  "transcribe:StartTranscriptionJob": AwsSpeechFullApiSchemaStartTranscriptionJobResponse;
  "transcribe-streaming:GetMedicalScribeStream": AwsSpeechFullApiSchemaGetMedicalScribeStreamResponse;
  "transcribe-streaming:StartCallAnalyticsStreamTranscription": AwsSpeechFullApiSchemaStartCallAnalyticsStreamTranscriptionResponse;
  "transcribe-streaming:StartMedicalScribeStream": AwsSpeechFullApiSchemaStartMedicalScribeStreamResponse;
  "transcribe-streaming:StartMedicalStreamTranscription": AwsSpeechFullApiSchemaStartMedicalStreamTranscriptionResponse;
  "transcribe-streaming:StartStreamTranscription": AwsSpeechFullApiSchemaStartStreamTranscriptionResponse;
  "transcribe:TagResource": AwsSpeechFullApiSchemaTagResourceResponse;
  "transcribe:UntagResource": AwsSpeechFullApiSchemaUntagResourceResponse;
  "transcribe:UpdateCallAnalyticsCategory": AwsSpeechFullApiSchemaUpdateCallAnalyticsCategoryResponse;
  "transcribe:UpdateMedicalVocabulary": AwsSpeechFullApiSchemaUpdateMedicalVocabularyResponse;
  "transcribe:UpdateVocabulary": AwsSpeechFullApiSchemaUpdateVocabularyResponse;
  "transcribe:UpdateVocabularyFilter": AwsSpeechFullApiSchemaUpdateVocabularyFilterResponse;
}
