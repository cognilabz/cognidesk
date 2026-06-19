// Generated provider schema DTOs for GoogleSpeechFullApi.
// Do not edit by hand; run scripts/harden-generated-client-types.mjs after updating provider specs.

export type GoogleSpeechFullApiSchemaJsonPrimitive = string | number | boolean | null;
export type GoogleSpeechFullApiSchemaJsonValue = GoogleSpeechFullApiSchemaJsonPrimitive | readonly GoogleSpeechFullApiSchemaJsonValue[] | { readonly [key: string]: GoogleSpeechFullApiSchemaJsonValue | undefined };

export type GoogleSpeechFullApiSchemaOperation = {
  response?: {
  readonly [key: string]: GoogleSpeechFullApiSchemaJsonValue | undefined;
};
  done?: boolean;
  error?: GoogleSpeechFullApiSchemaStatus;
  name?: string;
  metadata?: {
  readonly [key: string]: GoogleSpeechFullApiSchemaJsonValue | undefined;
};
};

export type GoogleSpeechFullApiSchemaListOperationsResponse = {
  operations?: ReadonlyArray<GoogleSpeechFullApiSchemaOperation3>;
  unreachable?: ReadonlyArray<string>;
  nextPageToken?: string;
};

export type GoogleSpeechFullApiSchemaCreateCustomClassRequest = {
  customClassId?: string;
  customClass?: GoogleSpeechFullApiSchemaCustomClass2;
};

export type GoogleSpeechFullApiSchemaCustomClass = {
  customClassId?: string;
  kmsKeyName?: string;
  state?: "STATE_UNSPECIFIED" | "ACTIVE" | "DELETED";
  displayName?: string;
  kmsKeyVersionName?: string;
  deleteTime?: string;
  reconciling?: boolean;
  annotations?: {
  readonly [key: string]: string | undefined;
};
  uid?: string;
  etag?: string;
  name?: string;
  items?: ReadonlyArray<GoogleSpeechFullApiSchemaClassItem>;
  expireTime?: string;
};

export type GoogleSpeechFullApiSchemaEmpty = {};

export type GoogleSpeechFullApiSchemaListCustomClassesResponse = {
  customClasses?: ReadonlyArray<GoogleSpeechFullApiSchemaCustomClass2>;
  nextPageToken?: string;
};

export type GoogleSpeechFullApiSchemaCreatePhraseSetRequest = {
  phraseSetId?: string;
  phraseSet?: GoogleSpeechFullApiSchemaPhraseSet2;
};

export type GoogleSpeechFullApiSchemaPhraseSet = {
  displayName?: string;
  state?: "STATE_UNSPECIFIED" | "ACTIVE" | "DELETED";
  reconciling?: boolean;
  phrases?: ReadonlyArray<GoogleSpeechFullApiSchemaPhrase>;
  deleteTime?: string;
  kmsKeyVersionName?: string;
  kmsKeyName?: string;
  name?: string;
  etag?: string;
  uid?: string;
  boost?: number;
  expireTime?: string;
  annotations?: {
  readonly [key: string]: string | undefined;
};
};

export type GoogleSpeechFullApiSchemaListPhraseSetResponse = {
  phraseSets?: ReadonlyArray<GoogleSpeechFullApiSchemaPhraseSet2>;
  nextPageToken?: string;
};

export type GoogleSpeechFullApiSchemaLongRunningRecognizeRequest = {
  config?: GoogleSpeechFullApiSchemaRecognitionConfig;
  audio?: GoogleSpeechFullApiSchemaRecognitionAudio;
  outputConfig?: GoogleSpeechFullApiSchemaTranscriptOutputConfig;
};

export type GoogleSpeechFullApiSchemaRecognizeRequest = {
  config?: GoogleSpeechFullApiSchemaRecognitionConfig;
  audio?: GoogleSpeechFullApiSchemaRecognitionAudio;
};

export type GoogleSpeechFullApiSchemaRecognizeResponse = {
  totalBilledTime?: string;
  speechAdaptationInfo?: GoogleSpeechFullApiSchemaSpeechAdaptationInfo;
  usingLegacyModels?: boolean;
  results?: ReadonlyArray<GoogleSpeechFullApiSchemaSpeechRecognitionResult>;
  requestId?: string;
};

export type GoogleSpeechFullApiSchemaCancelOperationRequest = {};

export type GoogleSpeechFullApiSchemaEmpty2 = {};

export type GoogleSpeechFullApiSchemaOperation2 = {
  name?: string;
  metadata?: {
  readonly [key: string]: GoogleSpeechFullApiSchemaJsonValue | undefined;
};
  done?: boolean;
  error?: GoogleSpeechFullApiSchemaStatus2;
  response?: {
  readonly [key: string]: GoogleSpeechFullApiSchemaJsonValue | undefined;
};
};

export type GoogleSpeechFullApiSchemaListOperationsResponse2 = {
  operations?: ReadonlyArray<GoogleSpeechFullApiSchemaOperation4>;
  nextPageToken?: string;
  unreachable?: ReadonlyArray<string>;
};

export type GoogleSpeechFullApiSchemaSynthesizeLongAudioRequest = {
  input?: GoogleSpeechFullApiSchemaSynthesisInput;
  audioConfig?: GoogleSpeechFullApiSchemaAudioConfig;
  outputGcsUri?: string;
  voice?: GoogleSpeechFullApiSchemaVoiceSelectionParams;
};

export type GoogleSpeechFullApiSchemaSynthesizeSpeechRequest = {
  input?: GoogleSpeechFullApiSchemaSynthesisInput;
  voice?: GoogleSpeechFullApiSchemaVoiceSelectionParams;
  audioConfig?: GoogleSpeechFullApiSchemaAudioConfig;
  advancedVoiceOptions?: GoogleSpeechFullApiSchemaAdvancedVoiceOptions;
};

export type GoogleSpeechFullApiSchemaSynthesizeSpeechResponse = {
  audioContent?: string;
};

export type GoogleSpeechFullApiSchemaListVoicesResponse = {
  voices?: ReadonlyArray<GoogleSpeechFullApiSchemaVoice>;
};

export type GoogleSpeechFullApiSchemaStatus = GoogleSpeechFullApiSchemaJsonValue;

export type GoogleSpeechFullApiSchemaOperation3 = GoogleSpeechFullApiSchemaJsonValue;

export type GoogleSpeechFullApiSchemaCustomClass2 = GoogleSpeechFullApiSchemaJsonValue;

export type GoogleSpeechFullApiSchemaClassItem = GoogleSpeechFullApiSchemaJsonValue;

export type GoogleSpeechFullApiSchemaPhraseSet2 = GoogleSpeechFullApiSchemaJsonValue;

export type GoogleSpeechFullApiSchemaPhrase = GoogleSpeechFullApiSchemaJsonValue;

export type GoogleSpeechFullApiSchemaRecognitionConfig = GoogleSpeechFullApiSchemaJsonValue;

export type GoogleSpeechFullApiSchemaRecognitionAudio = GoogleSpeechFullApiSchemaJsonValue;

export type GoogleSpeechFullApiSchemaTranscriptOutputConfig = GoogleSpeechFullApiSchemaJsonValue;

export type GoogleSpeechFullApiSchemaSpeechAdaptationInfo = GoogleSpeechFullApiSchemaJsonValue;

export type GoogleSpeechFullApiSchemaSpeechRecognitionResult = GoogleSpeechFullApiSchemaJsonValue;

export type GoogleSpeechFullApiSchemaStatus2 = GoogleSpeechFullApiSchemaJsonValue;

export type GoogleSpeechFullApiSchemaOperation4 = GoogleSpeechFullApiSchemaJsonValue;

export type GoogleSpeechFullApiSchemaSynthesisInput = GoogleSpeechFullApiSchemaJsonValue;

export type GoogleSpeechFullApiSchemaAudioConfig = GoogleSpeechFullApiSchemaJsonValue;

export type GoogleSpeechFullApiSchemaVoiceSelectionParams = GoogleSpeechFullApiSchemaJsonValue;

export type GoogleSpeechFullApiSchemaAdvancedVoiceOptions = GoogleSpeechFullApiSchemaJsonValue;

export type GoogleSpeechFullApiSchemaVoice = GoogleSpeechFullApiSchemaJsonValue;

export interface GoogleSpeechFullApiOperationQueryMap {
  "speech.operations.get": {};
  "speech.operations.list": {
  returnPartialSuccess?: boolean;
  name?: string;
  filter?: string;
  pageSize?: number;
  pageToken?: string;
};
  "speech.projects.locations.customClasses.create": {};
  "speech.projects.locations.customClasses.delete": {};
  "speech.projects.locations.customClasses.get": {};
  "speech.projects.locations.customClasses.list": {
  pageSize?: number;
  pageToken?: string;
};
  "speech.projects.locations.customClasses.patch": {
  updateMask?: string;
};
  "speech.projects.locations.phraseSets.create": {};
  "speech.projects.locations.phraseSets.delete": {};
  "speech.projects.locations.phraseSets.get": {};
  "speech.projects.locations.phraseSets.list": {
  pageSize?: number;
  pageToken?: string;
};
  "speech.projects.locations.phraseSets.patch": {
  updateMask?: string;
};
  "speech.speech.longrunningrecognize": {};
  "speech.speech.recognize": {};
  "texttospeech.operations.cancel": {};
  "texttospeech.operations.delete": {};
  "texttospeech.projects.locations.operations.get": {};
  "texttospeech.projects.locations.operations.list": {
  filter?: string;
  pageSize?: number;
  pageToken?: string;
  returnPartialSuccess?: boolean;
};
  "texttospeech.projects.locations.synthesizeLongAudio": {};
  "texttospeech.text.synthesize": {};
  "texttospeech.voices.list": {
  languageCode?: string;
};
}

export interface GoogleSpeechFullApiOperationQueryRequiredMap {
  "speech.operations.get": false;
  "speech.operations.list": false;
  "speech.projects.locations.customClasses.create": false;
  "speech.projects.locations.customClasses.delete": false;
  "speech.projects.locations.customClasses.get": false;
  "speech.projects.locations.customClasses.list": false;
  "speech.projects.locations.customClasses.patch": false;
  "speech.projects.locations.phraseSets.create": false;
  "speech.projects.locations.phraseSets.delete": false;
  "speech.projects.locations.phraseSets.get": false;
  "speech.projects.locations.phraseSets.list": false;
  "speech.projects.locations.phraseSets.patch": false;
  "speech.speech.longrunningrecognize": false;
  "speech.speech.recognize": false;
  "texttospeech.operations.cancel": false;
  "texttospeech.operations.delete": false;
  "texttospeech.projects.locations.operations.get": false;
  "texttospeech.projects.locations.operations.list": false;
  "texttospeech.projects.locations.synthesizeLongAudio": false;
  "texttospeech.text.synthesize": false;
  "texttospeech.voices.list": false;
}

export interface GoogleSpeechFullApiOperationRequestBodyMap {
  "speech.operations.get": never;
  "speech.operations.list": never;
  "speech.projects.locations.customClasses.create": GoogleSpeechFullApiSchemaCreateCustomClassRequest;
  "speech.projects.locations.customClasses.delete": never;
  "speech.projects.locations.customClasses.get": never;
  "speech.projects.locations.customClasses.list": never;
  "speech.projects.locations.customClasses.patch": GoogleSpeechFullApiSchemaCustomClass;
  "speech.projects.locations.phraseSets.create": GoogleSpeechFullApiSchemaCreatePhraseSetRequest;
  "speech.projects.locations.phraseSets.delete": never;
  "speech.projects.locations.phraseSets.get": never;
  "speech.projects.locations.phraseSets.list": never;
  "speech.projects.locations.phraseSets.patch": GoogleSpeechFullApiSchemaPhraseSet;
  "speech.speech.longrunningrecognize": GoogleSpeechFullApiSchemaLongRunningRecognizeRequest;
  "speech.speech.recognize": GoogleSpeechFullApiSchemaRecognizeRequest;
  "texttospeech.operations.cancel": GoogleSpeechFullApiSchemaCancelOperationRequest;
  "texttospeech.operations.delete": never;
  "texttospeech.projects.locations.operations.get": never;
  "texttospeech.projects.locations.operations.list": never;
  "texttospeech.projects.locations.synthesizeLongAudio": GoogleSpeechFullApiSchemaSynthesizeLongAudioRequest;
  "texttospeech.text.synthesize": GoogleSpeechFullApiSchemaSynthesizeSpeechRequest;
  "texttospeech.voices.list": never;
}

export interface GoogleSpeechFullApiOperationRequestBodyRequiredMap {
  "speech.operations.get": false;
  "speech.operations.list": false;
  "speech.projects.locations.customClasses.create": true;
  "speech.projects.locations.customClasses.delete": false;
  "speech.projects.locations.customClasses.get": false;
  "speech.projects.locations.customClasses.list": false;
  "speech.projects.locations.customClasses.patch": true;
  "speech.projects.locations.phraseSets.create": true;
  "speech.projects.locations.phraseSets.delete": false;
  "speech.projects.locations.phraseSets.get": false;
  "speech.projects.locations.phraseSets.list": false;
  "speech.projects.locations.phraseSets.patch": true;
  "speech.speech.longrunningrecognize": true;
  "speech.speech.recognize": true;
  "texttospeech.operations.cancel": true;
  "texttospeech.operations.delete": false;
  "texttospeech.projects.locations.operations.get": false;
  "texttospeech.projects.locations.operations.list": false;
  "texttospeech.projects.locations.synthesizeLongAudio": true;
  "texttospeech.text.synthesize": true;
  "texttospeech.voices.list": false;
}

export interface GoogleSpeechFullApiOperationResponseMap {
  "speech.operations.get": GoogleSpeechFullApiSchemaOperation;
  "speech.operations.list": GoogleSpeechFullApiSchemaListOperationsResponse;
  "speech.projects.locations.customClasses.create": GoogleSpeechFullApiSchemaCustomClass;
  "speech.projects.locations.customClasses.delete": GoogleSpeechFullApiSchemaEmpty;
  "speech.projects.locations.customClasses.get": GoogleSpeechFullApiSchemaCustomClass;
  "speech.projects.locations.customClasses.list": GoogleSpeechFullApiSchemaListCustomClassesResponse;
  "speech.projects.locations.customClasses.patch": GoogleSpeechFullApiSchemaCustomClass;
  "speech.projects.locations.phraseSets.create": GoogleSpeechFullApiSchemaPhraseSet;
  "speech.projects.locations.phraseSets.delete": GoogleSpeechFullApiSchemaEmpty;
  "speech.projects.locations.phraseSets.get": GoogleSpeechFullApiSchemaPhraseSet;
  "speech.projects.locations.phraseSets.list": GoogleSpeechFullApiSchemaListPhraseSetResponse;
  "speech.projects.locations.phraseSets.patch": GoogleSpeechFullApiSchemaPhraseSet;
  "speech.speech.longrunningrecognize": GoogleSpeechFullApiSchemaOperation;
  "speech.speech.recognize": GoogleSpeechFullApiSchemaRecognizeResponse;
  "texttospeech.operations.cancel": GoogleSpeechFullApiSchemaEmpty2;
  "texttospeech.operations.delete": GoogleSpeechFullApiSchemaEmpty2;
  "texttospeech.projects.locations.operations.get": GoogleSpeechFullApiSchemaOperation2;
  "texttospeech.projects.locations.operations.list": GoogleSpeechFullApiSchemaListOperationsResponse2;
  "texttospeech.projects.locations.synthesizeLongAudio": GoogleSpeechFullApiSchemaOperation2;
  "texttospeech.text.synthesize": GoogleSpeechFullApiSchemaSynthesizeSpeechResponse;
  "texttospeech.voices.list": GoogleSpeechFullApiSchemaListVoicesResponse;
}
