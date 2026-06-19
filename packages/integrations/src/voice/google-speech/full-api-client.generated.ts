// Generated from Google Cloud Speech and Text-to-Speech Discovery documents.
// Do not edit by hand; run scripts/generate-speech-provider-apis.mjs after checking upstream docs.

import type { GoogleSpeechOperationRequestInput } from "./index.js";
import type {
  GoogleSpeechFullApiOperationQueryMap,
  GoogleSpeechFullApiOperationQueryRequiredMap,
  GoogleSpeechFullApiOperationRequestBodyMap,
  GoogleSpeechFullApiOperationRequestBodyRequiredMap,
  GoogleSpeechFullApiOperationResponseMap,
} from "./full-api-schema-types.generated.js";

export type GoogleSpeechFullApiPathParamValue = string | number;
export interface GoogleSpeechFullApiOperationPathParamMap {
  "speech.operations.get": { name: GoogleSpeechFullApiPathParamValue };
  "speech.operations.list": {};
  "speech.projects.locations.customClasses.create": { parent: GoogleSpeechFullApiPathParamValue };
  "speech.projects.locations.customClasses.delete": { name: GoogleSpeechFullApiPathParamValue };
  "speech.projects.locations.customClasses.get": { name: GoogleSpeechFullApiPathParamValue };
  "speech.projects.locations.customClasses.list": { parent: GoogleSpeechFullApiPathParamValue };
  "speech.projects.locations.customClasses.patch": { name: GoogleSpeechFullApiPathParamValue };
  "speech.projects.locations.phraseSets.create": { parent: GoogleSpeechFullApiPathParamValue };
  "speech.projects.locations.phraseSets.delete": { name: GoogleSpeechFullApiPathParamValue };
  "speech.projects.locations.phraseSets.get": { name: GoogleSpeechFullApiPathParamValue };
  "speech.projects.locations.phraseSets.list": { parent: GoogleSpeechFullApiPathParamValue };
  "speech.projects.locations.phraseSets.patch": { name: GoogleSpeechFullApiPathParamValue };
  "speech.speech.longrunningrecognize": {};
  "speech.speech.recognize": {};
  "texttospeech.operations.cancel": { name: GoogleSpeechFullApiPathParamValue };
  "texttospeech.operations.delete": { name: GoogleSpeechFullApiPathParamValue };
  "texttospeech.projects.locations.operations.get": { name: GoogleSpeechFullApiPathParamValue };
  "texttospeech.projects.locations.operations.list": { name: GoogleSpeechFullApiPathParamValue };
  "texttospeech.projects.locations.synthesizeLongAudio": { parent: GoogleSpeechFullApiPathParamValue };
  "texttospeech.text.synthesize": {};
  "texttospeech.voices.list": {};
}

export type GoogleSpeechFullApiOperationKey = keyof GoogleSpeechFullApiOperationPathParamMap & string;

export type GoogleSpeechFullApiOperationQueryInput<OperationKey extends GoogleSpeechFullApiOperationKey> =
  GoogleSpeechFullApiOperationQueryRequiredMap[OperationKey] extends true
    ? { query: GoogleSpeechFullApiOperationQueryMap[OperationKey] }
    : { query?: GoogleSpeechFullApiOperationQueryMap[OperationKey] };

export type GoogleSpeechFullApiOperationBodyInput<OperationKey extends GoogleSpeechFullApiOperationKey> =
  [GoogleSpeechFullApiOperationRequestBodyMap[OperationKey]] extends [never]
    ? { body?: never }
    : GoogleSpeechFullApiOperationRequestBodyRequiredMap[OperationKey] extends true
      ? { body: GoogleSpeechFullApiOperationRequestBodyMap[OperationKey] }
      : { body?: GoogleSpeechFullApiOperationRequestBodyMap[OperationKey] };

export type GoogleSpeechFullApiOperationInput<OperationKey extends GoogleSpeechFullApiOperationKey> = Omit<GoogleSpeechOperationRequestInput, "pathParams" | "query" | "body"> & (
  {} extends GoogleSpeechFullApiOperationPathParamMap[OperationKey]
    ? { pathParams?: never }
    : { pathParams: GoogleSpeechFullApiOperationPathParamMap[OperationKey] }
) & GoogleSpeechFullApiOperationQueryInput<OperationKey> & GoogleSpeechFullApiOperationBodyInput<OperationKey>;

export interface GoogleSpeechFullApiOperationRequestMap {
  "speech.operations.get": GoogleSpeechFullApiOperationInput<"speech.operations.get">;
  "speech.operations.list": GoogleSpeechFullApiOperationInput<"speech.operations.list">;
  "speech.projects.locations.customClasses.create": GoogleSpeechFullApiOperationInput<"speech.projects.locations.customClasses.create">;
  "speech.projects.locations.customClasses.delete": GoogleSpeechFullApiOperationInput<"speech.projects.locations.customClasses.delete">;
  "speech.projects.locations.customClasses.get": GoogleSpeechFullApiOperationInput<"speech.projects.locations.customClasses.get">;
  "speech.projects.locations.customClasses.list": GoogleSpeechFullApiOperationInput<"speech.projects.locations.customClasses.list">;
  "speech.projects.locations.customClasses.patch": GoogleSpeechFullApiOperationInput<"speech.projects.locations.customClasses.patch">;
  "speech.projects.locations.phraseSets.create": GoogleSpeechFullApiOperationInput<"speech.projects.locations.phraseSets.create">;
  "speech.projects.locations.phraseSets.delete": GoogleSpeechFullApiOperationInput<"speech.projects.locations.phraseSets.delete">;
  "speech.projects.locations.phraseSets.get": GoogleSpeechFullApiOperationInput<"speech.projects.locations.phraseSets.get">;
  "speech.projects.locations.phraseSets.list": GoogleSpeechFullApiOperationInput<"speech.projects.locations.phraseSets.list">;
  "speech.projects.locations.phraseSets.patch": GoogleSpeechFullApiOperationInput<"speech.projects.locations.phraseSets.patch">;
  "speech.speech.longrunningrecognize": GoogleSpeechFullApiOperationInput<"speech.speech.longrunningrecognize">;
  "speech.speech.recognize": GoogleSpeechFullApiOperationInput<"speech.speech.recognize">;
  "texttospeech.operations.cancel": GoogleSpeechFullApiOperationInput<"texttospeech.operations.cancel">;
  "texttospeech.operations.delete": GoogleSpeechFullApiOperationInput<"texttospeech.operations.delete">;
  "texttospeech.projects.locations.operations.get": GoogleSpeechFullApiOperationInput<"texttospeech.projects.locations.operations.get">;
  "texttospeech.projects.locations.operations.list": GoogleSpeechFullApiOperationInput<"texttospeech.projects.locations.operations.list">;
  "texttospeech.projects.locations.synthesizeLongAudio": GoogleSpeechFullApiOperationInput<"texttospeech.projects.locations.synthesizeLongAudio">;
  "texttospeech.text.synthesize": GoogleSpeechFullApiOperationInput<"texttospeech.text.synthesize">;
  "texttospeech.voices.list": GoogleSpeechFullApiOperationInput<"texttospeech.voices.list">;
}

export type GoogleSpeechFullApiOperationArgs<OperationKey extends GoogleSpeechFullApiOperationKey> = {} extends GoogleSpeechFullApiOperationPathParamMap[OperationKey]
  ? [input?: GoogleSpeechFullApiOperationRequestMap[OperationKey]]
  : [input: GoogleSpeechFullApiOperationRequestMap[OperationKey]];

export type GoogleSpeechGeneratedOperationCaller = <OperationKey extends GoogleSpeechFullApiOperationKey>(
  operationKey: OperationKey,
  ...args: GoogleSpeechFullApiOperationArgs<OperationKey>
) => Promise<GoogleSpeechFullApiOperationResponseMap[OperationKey]>;

export interface GoogleSpeechFullApiGeneratedClient {
  SpeechOperationsGet(...args: GoogleSpeechFullApiOperationArgs<"speech.operations.get">): Promise<GoogleSpeechFullApiOperationResponseMap["speech.operations.get"]>;
  SpeechOperationsList(...args: GoogleSpeechFullApiOperationArgs<"speech.operations.list">): Promise<GoogleSpeechFullApiOperationResponseMap["speech.operations.list"]>;
  SpeechProjectsLocationsCustomClassesCreate(...args: GoogleSpeechFullApiOperationArgs<"speech.projects.locations.customClasses.create">): Promise<GoogleSpeechFullApiOperationResponseMap["speech.projects.locations.customClasses.create"]>;
  SpeechProjectsLocationsCustomClassesDelete(...args: GoogleSpeechFullApiOperationArgs<"speech.projects.locations.customClasses.delete">): Promise<GoogleSpeechFullApiOperationResponseMap["speech.projects.locations.customClasses.delete"]>;
  SpeechProjectsLocationsCustomClassesGet(...args: GoogleSpeechFullApiOperationArgs<"speech.projects.locations.customClasses.get">): Promise<GoogleSpeechFullApiOperationResponseMap["speech.projects.locations.customClasses.get"]>;
  SpeechProjectsLocationsCustomClassesList(...args: GoogleSpeechFullApiOperationArgs<"speech.projects.locations.customClasses.list">): Promise<GoogleSpeechFullApiOperationResponseMap["speech.projects.locations.customClasses.list"]>;
  SpeechProjectsLocationsCustomClassesPatch(...args: GoogleSpeechFullApiOperationArgs<"speech.projects.locations.customClasses.patch">): Promise<GoogleSpeechFullApiOperationResponseMap["speech.projects.locations.customClasses.patch"]>;
  SpeechProjectsLocationsPhraseSetsCreate(...args: GoogleSpeechFullApiOperationArgs<"speech.projects.locations.phraseSets.create">): Promise<GoogleSpeechFullApiOperationResponseMap["speech.projects.locations.phraseSets.create"]>;
  SpeechProjectsLocationsPhraseSetsDelete(...args: GoogleSpeechFullApiOperationArgs<"speech.projects.locations.phraseSets.delete">): Promise<GoogleSpeechFullApiOperationResponseMap["speech.projects.locations.phraseSets.delete"]>;
  SpeechProjectsLocationsPhraseSetsGet(...args: GoogleSpeechFullApiOperationArgs<"speech.projects.locations.phraseSets.get">): Promise<GoogleSpeechFullApiOperationResponseMap["speech.projects.locations.phraseSets.get"]>;
  SpeechProjectsLocationsPhraseSetsList(...args: GoogleSpeechFullApiOperationArgs<"speech.projects.locations.phraseSets.list">): Promise<GoogleSpeechFullApiOperationResponseMap["speech.projects.locations.phraseSets.list"]>;
  SpeechProjectsLocationsPhraseSetsPatch(...args: GoogleSpeechFullApiOperationArgs<"speech.projects.locations.phraseSets.patch">): Promise<GoogleSpeechFullApiOperationResponseMap["speech.projects.locations.phraseSets.patch"]>;
  SpeechSpeechLongrunningrecognize(...args: GoogleSpeechFullApiOperationArgs<"speech.speech.longrunningrecognize">): Promise<GoogleSpeechFullApiOperationResponseMap["speech.speech.longrunningrecognize"]>;
  SpeechSpeechRecognize(...args: GoogleSpeechFullApiOperationArgs<"speech.speech.recognize">): Promise<GoogleSpeechFullApiOperationResponseMap["speech.speech.recognize"]>;
  TexttospeechOperationsCancel(...args: GoogleSpeechFullApiOperationArgs<"texttospeech.operations.cancel">): Promise<GoogleSpeechFullApiOperationResponseMap["texttospeech.operations.cancel"]>;
  TexttospeechOperationsDelete(...args: GoogleSpeechFullApiOperationArgs<"texttospeech.operations.delete">): Promise<GoogleSpeechFullApiOperationResponseMap["texttospeech.operations.delete"]>;
  TexttospeechProjectsLocationsOperationsGet(...args: GoogleSpeechFullApiOperationArgs<"texttospeech.projects.locations.operations.get">): Promise<GoogleSpeechFullApiOperationResponseMap["texttospeech.projects.locations.operations.get"]>;
  TexttospeechProjectsLocationsOperationsList(...args: GoogleSpeechFullApiOperationArgs<"texttospeech.projects.locations.operations.list">): Promise<GoogleSpeechFullApiOperationResponseMap["texttospeech.projects.locations.operations.list"]>;
  TexttospeechProjectsLocationsSynthesizeLongAudio(...args: GoogleSpeechFullApiOperationArgs<"texttospeech.projects.locations.synthesizeLongAudio">): Promise<GoogleSpeechFullApiOperationResponseMap["texttospeech.projects.locations.synthesizeLongAudio"]>;
  TexttospeechTextSynthesize(...args: GoogleSpeechFullApiOperationArgs<"texttospeech.text.synthesize">): Promise<GoogleSpeechFullApiOperationResponseMap["texttospeech.text.synthesize"]>;
  TexttospeechVoicesList(...args: GoogleSpeechFullApiOperationArgs<"texttospeech.voices.list">): Promise<GoogleSpeechFullApiOperationResponseMap["texttospeech.voices.list"]>;
}

export const GOOGLE_SPEECH_FULL_API_GENERATED_FUNCTION_COUNT = 21 as const;
export const GOOGLE_SPEECH_FULL_API_GENERATED_FUNCTION_NAMES = [
  "SpeechOperationsGet",
  "SpeechOperationsList",
  "SpeechProjectsLocationsCustomClassesCreate",
  "SpeechProjectsLocationsCustomClassesDelete",
  "SpeechProjectsLocationsCustomClassesGet",
  "SpeechProjectsLocationsCustomClassesList",
  "SpeechProjectsLocationsCustomClassesPatch",
  "SpeechProjectsLocationsPhraseSetsCreate",
  "SpeechProjectsLocationsPhraseSetsDelete",
  "SpeechProjectsLocationsPhraseSetsGet",
  "SpeechProjectsLocationsPhraseSetsList",
  "SpeechProjectsLocationsPhraseSetsPatch",
  "SpeechSpeechLongrunningrecognize",
  "SpeechSpeechRecognize",
  "TexttospeechOperationsCancel",
  "TexttospeechOperationsDelete",
  "TexttospeechProjectsLocationsOperationsGet",
  "TexttospeechProjectsLocationsOperationsList",
  "TexttospeechProjectsLocationsSynthesizeLongAudio",
  "TexttospeechTextSynthesize",
  "TexttospeechVoicesList"
] as const satisfies readonly (keyof GoogleSpeechFullApiGeneratedClient)[];

export function createGoogleSpeechFullApiGeneratedClient(
  callOperation: GoogleSpeechGeneratedOperationCaller,
): GoogleSpeechFullApiGeneratedClient {
  return {
    SpeechOperationsGet: (...args) => callOperation("speech.operations.get", ...(args as GoogleSpeechFullApiOperationArgs<"speech.operations.get">)),
    SpeechOperationsList: (...args) => callOperation("speech.operations.list", ...(args as GoogleSpeechFullApiOperationArgs<"speech.operations.list">)),
    SpeechProjectsLocationsCustomClassesCreate: (...args) => callOperation("speech.projects.locations.customClasses.create", ...(args as GoogleSpeechFullApiOperationArgs<"speech.projects.locations.customClasses.create">)),
    SpeechProjectsLocationsCustomClassesDelete: (...args) => callOperation("speech.projects.locations.customClasses.delete", ...(args as GoogleSpeechFullApiOperationArgs<"speech.projects.locations.customClasses.delete">)),
    SpeechProjectsLocationsCustomClassesGet: (...args) => callOperation("speech.projects.locations.customClasses.get", ...(args as GoogleSpeechFullApiOperationArgs<"speech.projects.locations.customClasses.get">)),
    SpeechProjectsLocationsCustomClassesList: (...args) => callOperation("speech.projects.locations.customClasses.list", ...(args as GoogleSpeechFullApiOperationArgs<"speech.projects.locations.customClasses.list">)),
    SpeechProjectsLocationsCustomClassesPatch: (...args) => callOperation("speech.projects.locations.customClasses.patch", ...(args as GoogleSpeechFullApiOperationArgs<"speech.projects.locations.customClasses.patch">)),
    SpeechProjectsLocationsPhraseSetsCreate: (...args) => callOperation("speech.projects.locations.phraseSets.create", ...(args as GoogleSpeechFullApiOperationArgs<"speech.projects.locations.phraseSets.create">)),
    SpeechProjectsLocationsPhraseSetsDelete: (...args) => callOperation("speech.projects.locations.phraseSets.delete", ...(args as GoogleSpeechFullApiOperationArgs<"speech.projects.locations.phraseSets.delete">)),
    SpeechProjectsLocationsPhraseSetsGet: (...args) => callOperation("speech.projects.locations.phraseSets.get", ...(args as GoogleSpeechFullApiOperationArgs<"speech.projects.locations.phraseSets.get">)),
    SpeechProjectsLocationsPhraseSetsList: (...args) => callOperation("speech.projects.locations.phraseSets.list", ...(args as GoogleSpeechFullApiOperationArgs<"speech.projects.locations.phraseSets.list">)),
    SpeechProjectsLocationsPhraseSetsPatch: (...args) => callOperation("speech.projects.locations.phraseSets.patch", ...(args as GoogleSpeechFullApiOperationArgs<"speech.projects.locations.phraseSets.patch">)),
    SpeechSpeechLongrunningrecognize: (...args) => callOperation("speech.speech.longrunningrecognize", ...(args as GoogleSpeechFullApiOperationArgs<"speech.speech.longrunningrecognize">)),
    SpeechSpeechRecognize: (...args) => callOperation("speech.speech.recognize", ...(args as GoogleSpeechFullApiOperationArgs<"speech.speech.recognize">)),
    TexttospeechOperationsCancel: (...args) => callOperation("texttospeech.operations.cancel", ...(args as GoogleSpeechFullApiOperationArgs<"texttospeech.operations.cancel">)),
    TexttospeechOperationsDelete: (...args) => callOperation("texttospeech.operations.delete", ...(args as GoogleSpeechFullApiOperationArgs<"texttospeech.operations.delete">)),
    TexttospeechProjectsLocationsOperationsGet: (...args) => callOperation("texttospeech.projects.locations.operations.get", ...(args as GoogleSpeechFullApiOperationArgs<"texttospeech.projects.locations.operations.get">)),
    TexttospeechProjectsLocationsOperationsList: (...args) => callOperation("texttospeech.projects.locations.operations.list", ...(args as GoogleSpeechFullApiOperationArgs<"texttospeech.projects.locations.operations.list">)),
    TexttospeechProjectsLocationsSynthesizeLongAudio: (...args) => callOperation("texttospeech.projects.locations.synthesizeLongAudio", ...(args as GoogleSpeechFullApiOperationArgs<"texttospeech.projects.locations.synthesizeLongAudio">)),
    TexttospeechTextSynthesize: (...args) => callOperation("texttospeech.text.synthesize", ...(args as GoogleSpeechFullApiOperationArgs<"texttospeech.text.synthesize">)),
    TexttospeechVoicesList: (...args) => callOperation("texttospeech.voices.list", ...(args as GoogleSpeechFullApiOperationArgs<"texttospeech.voices.list">)),
  };
}
