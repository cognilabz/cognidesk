// Generated from Google Cloud Speech and Text-to-Speech Discovery documents.
// Do not edit by hand; run scripts/generate-speech-provider-apis.mjs after checking upstream docs.

export type GoogleSpeechFullApiOperationMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export interface GoogleSpeechFullApiSpec {
  id: string;
  label: string;
  sourceUrl: string;
  docsUrl: string;
  version: string;
  title?: string;
  revision?: string;
  swagger?: string;
  pathCount?: number;
  operationCount: number;
}

export interface GoogleSpeechFullApiOperation {
  id: string;
  operationId: string;
  functionName: string;
  method: GoogleSpeechFullApiOperationMethod;
  path: string;
  description: string;
  specId: string;
  specLabel: string;
  sourceUrl: string;
  docsUrl: string;
}

export const GOOGLE_SPEECH_FULL_API_SPEC_SOURCE = "google-discovery-bundle" as const;
export const GOOGLE_SPEECH_FULL_API_SPEC_VERSION = "google-speech-discovery-2026-06-18" as const;
export const GOOGLE_SPEECH_FULL_API_GENERATED_AT = "2026-06-18" as const;
export const GOOGLE_SPEECH_FULL_API_OPERATION_COUNT = 21 as const;

export const GOOGLE_SPEECH_FULL_API_SPECS = JSON.parse("[{\"id\":\"speech\",\"label\":\"Google Cloud Speech-to-Text API\",\"sourceUrl\":\"https://speech.googleapis.com/$discovery/rest?version=v1\",\"docsUrl\":\"https://cloud.google.com/speech-to-text/docs/reference/rest/v1\",\"revision\":\"20260604\",\"version\":\"v1\",\"operationCount\":14},{\"id\":\"texttospeech\",\"label\":\"Google Cloud Text-to-Speech API\",\"sourceUrl\":\"https://texttospeech.googleapis.com/$discovery/rest?version=v1\",\"docsUrl\":\"https://cloud.google.com/text-to-speech/docs/reference/rest/v1\",\"revision\":\"20260602\",\"version\":\"v1\",\"operationCount\":7}]") as readonly GoogleSpeechFullApiSpec[];

export const GOOGLE_SPEECH_FULL_API_SPEC = JSON.parse("{\"source\":\"google-discovery-bundle\",\"specs\":[{\"id\":\"speech\",\"label\":\"Google Cloud Speech-to-Text API\",\"sourceUrl\":\"https://speech.googleapis.com/$discovery/rest?version=v1\",\"docsUrl\":\"https://cloud.google.com/speech-to-text/docs/reference/rest/v1\",\"revision\":\"20260604\",\"version\":\"v1\",\"operationCount\":14},{\"id\":\"texttospeech\",\"label\":\"Google Cloud Text-to-Speech API\",\"sourceUrl\":\"https://texttospeech.googleapis.com/$discovery/rest?version=v1\",\"docsUrl\":\"https://cloud.google.com/text-to-speech/docs/reference/rest/v1\",\"revision\":\"20260602\",\"version\":\"v1\",\"operationCount\":7}],\"operationCount\":21}") as {
  source: string;
  specs: readonly GoogleSpeechFullApiSpec[];
  operationCount: number;
};

export const GOOGLE_SPEECH_FULL_API_OPERATIONS = JSON.parse("[{\"id\":\"speech.operations.get\",\"operationId\":\"speech.operations.get\",\"functionName\":\"SpeechOperationsGet\",\"method\":\"GET\",\"path\":\"v1/operations/{+name}\",\"description\":\"Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.\",\"sourceUrl\":\"https://speech.googleapis.com/$discovery/rest?version=v1\",\"specId\":\"speech\",\"specLabel\":\"Google Cloud Speech-to-Text API\",\"docsUrl\":\"https://cloud.google.com/speech-to-text/docs/reference/rest/v1\"},{\"id\":\"speech.operations.list\",\"operationId\":\"speech.operations.list\",\"functionName\":\"SpeechOperationsList\",\"method\":\"GET\",\"path\":\"v1/operations\",\"description\":\"Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.\",\"sourceUrl\":\"https://speech.googleapis.com/$discovery/rest?version=v1\",\"specId\":\"speech\",\"specLabel\":\"Google Cloud Speech-to-Text API\",\"docsUrl\":\"https://cloud.google.com/speech-to-text/docs/reference/rest/v1\"},{\"id\":\"speech.projects.locations.customClasses.create\",\"operationId\":\"speech.projects.locations.customClasses.create\",\"functionName\":\"SpeechProjectsLocationsCustomClassesCreate\",\"method\":\"POST\",\"path\":\"v1/{+parent}/customClasses\",\"description\":\"Create a custom class.\",\"sourceUrl\":\"https://speech.googleapis.com/$discovery/rest?version=v1\",\"specId\":\"speech\",\"specLabel\":\"Google Cloud Speech-to-Text API\",\"docsUrl\":\"https://cloud.google.com/speech-to-text/docs/reference/rest/v1\"},{\"id\":\"speech.projects.locations.customClasses.delete\",\"operationId\":\"speech.projects.locations.customClasses.delete\",\"functionName\":\"SpeechProjectsLocationsCustomClassesDelete\",\"method\":\"DELETE\",\"path\":\"v1/{+name}\",\"description\":\"Delete a custom class.\",\"sourceUrl\":\"https://speech.googleapis.com/$discovery/rest?version=v1\",\"specId\":\"speech\",\"specLabel\":\"Google Cloud Speech-to-Text API\",\"docsUrl\":\"https://cloud.google.com/speech-to-text/docs/reference/rest/v1\"},{\"id\":\"speech.projects.locations.customClasses.get\",\"operationId\":\"speech.projects.locations.customClasses.get\",\"functionName\":\"SpeechProjectsLocationsCustomClassesGet\",\"method\":\"GET\",\"path\":\"v1/{+name}\",\"description\":\"Get a custom class.\",\"sourceUrl\":\"https://speech.googleapis.com/$discovery/rest?version=v1\",\"specId\":\"speech\",\"specLabel\":\"Google Cloud Speech-to-Text API\",\"docsUrl\":\"https://cloud.google.com/speech-to-text/docs/reference/rest/v1\"},{\"id\":\"speech.projects.locations.customClasses.list\",\"operationId\":\"speech.projects.locations.customClasses.list\",\"functionName\":\"SpeechProjectsLocationsCustomClassesList\",\"method\":\"GET\",\"path\":\"v1/{+parent}/customClasses\",\"description\":\"List custom classes.\",\"sourceUrl\":\"https://speech.googleapis.com/$discovery/rest?version=v1\",\"specId\":\"speech\",\"specLabel\":\"Google Cloud Speech-to-Text API\",\"docsUrl\":\"https://cloud.google.com/speech-to-text/docs/reference/rest/v1\"},{\"id\":\"speech.projects.locations.customClasses.patch\",\"operationId\":\"speech.projects.locations.customClasses.patch\",\"functionName\":\"SpeechProjectsLocationsCustomClassesPatch\",\"method\":\"PATCH\",\"path\":\"v1/{+name}\",\"description\":\"Update a custom class.\",\"sourceUrl\":\"https://speech.googleapis.com/$discovery/rest?version=v1\",\"specId\":\"speech\",\"specLabel\":\"Google Cloud Speech-to-Text API\",\"docsUrl\":\"https://cloud.google.com/speech-to-text/docs/reference/rest/v1\"},{\"id\":\"speech.projects.locations.phraseSets.create\",\"operationId\":\"speech.projects.locations.phraseSets.create\",\"functionName\":\"SpeechProjectsLocationsPhraseSetsCreate\",\"method\":\"POST\",\"path\":\"v1/{+parent}/phraseSets\",\"description\":\"Create a set of phrase hints. Each item in the set can be a single word or a multi-word phrase. The items in the PhraseSet are favored by the recognition model when you send a call that includes the PhraseSet.\",\"sourceUrl\":\"https://speech.googleapis.com/$discovery/rest?version=v1\",\"specId\":\"speech\",\"specLabel\":\"Google Cloud Speech-to-Text API\",\"docsUrl\":\"https://cloud.google.com/speech-to-text/docs/reference/rest/v1\"},{\"id\":\"speech.projects.locations.phraseSets.delete\",\"operationId\":\"speech.projects.locations.phraseSets.delete\",\"functionName\":\"SpeechProjectsLocationsPhraseSetsDelete\",\"method\":\"DELETE\",\"path\":\"v1/{+name}\",\"description\":\"Delete a phrase set.\",\"sourceUrl\":\"https://speech.googleapis.com/$discovery/rest?version=v1\",\"specId\":\"speech\",\"specLabel\":\"Google Cloud Speech-to-Text API\",\"docsUrl\":\"https://cloud.google.com/speech-to-text/docs/reference/rest/v1\"},{\"id\":\"speech.projects.locations.phraseSets.get\",\"operationId\":\"speech.projects.locations.phraseSets.get\",\"functionName\":\"SpeechProjectsLocationsPhraseSetsGet\",\"method\":\"GET\",\"path\":\"v1/{+name}\",\"description\":\"Get a phrase set.\",\"sourceUrl\":\"https://speech.googleapis.com/$discovery/rest?version=v1\",\"specId\":\"speech\",\"specLabel\":\"Google Cloud Speech-to-Text API\",\"docsUrl\":\"https://cloud.google.com/speech-to-text/docs/reference/rest/v1\"},{\"id\":\"speech.projects.locations.phraseSets.list\",\"operationId\":\"speech.projects.locations.phraseSets.list\",\"functionName\":\"SpeechProjectsLocationsPhraseSetsList\",\"method\":\"GET\",\"path\":\"v1/{+parent}/phraseSets\",\"description\":\"List phrase sets.\",\"sourceUrl\":\"https://speech.googleapis.com/$discovery/rest?version=v1\",\"specId\":\"speech\",\"specLabel\":\"Google Cloud Speech-to-Text API\",\"docsUrl\":\"https://cloud.google.com/speech-to-text/docs/reference/rest/v1\"},{\"id\":\"speech.projects.locations.phraseSets.patch\",\"operationId\":\"speech.projects.locations.phraseSets.patch\",\"functionName\":\"SpeechProjectsLocationsPhraseSetsPatch\",\"method\":\"PATCH\",\"path\":\"v1/{+name}\",\"description\":\"Update a phrase set.\",\"sourceUrl\":\"https://speech.googleapis.com/$discovery/rest?version=v1\",\"specId\":\"speech\",\"specLabel\":\"Google Cloud Speech-to-Text API\",\"docsUrl\":\"https://cloud.google.com/speech-to-text/docs/reference/rest/v1\"},{\"id\":\"speech.speech.longrunningrecognize\",\"operationId\":\"speech.speech.longrunningrecognize\",\"functionName\":\"SpeechSpeechLongrunningrecognize\",\"method\":\"POST\",\"path\":\"v1/speech:longrunningrecognize\",\"description\":\"Performs asynchronous speech recognition: receive results via the google.longrunning.Operations interface. Returns either an `Operation.error` or an `Operation.response` which contains a `LongRunningRecognizeResponse` message. For more information on asynchronous speech recognition, see the [how-to](https://cloud.google.com/speech-to-text/docs/async-recognize).\",\"sourceUrl\":\"https://speech.googleapis.com/$discovery/rest?version=v1\",\"specId\":\"speech\",\"specLabel\":\"Google Cloud Speech-to-Text API\",\"docsUrl\":\"https://cloud.google.com/speech-to-text/docs/reference/rest/v1\"},{\"id\":\"speech.speech.recognize\",\"operationId\":\"speech.speech.recognize\",\"functionName\":\"SpeechSpeechRecognize\",\"method\":\"POST\",\"path\":\"v1/speech:recognize\",\"description\":\"Performs synchronous speech recognition: receive results after all audio has been sent and processed.\",\"sourceUrl\":\"https://speech.googleapis.com/$discovery/rest?version=v1\",\"specId\":\"speech\",\"specLabel\":\"Google Cloud Speech-to-Text API\",\"docsUrl\":\"https://cloud.google.com/speech-to-text/docs/reference/rest/v1\"},{\"id\":\"texttospeech.operations.cancel\",\"operationId\":\"texttospeech.operations.cancel\",\"functionName\":\"TexttospeechOperationsCancel\",\"method\":\"POST\",\"path\":\"v1/{+name}:cancel\",\"description\":\"Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.\",\"sourceUrl\":\"https://texttospeech.googleapis.com/$discovery/rest?version=v1\",\"specId\":\"texttospeech\",\"specLabel\":\"Google Cloud Text-to-Speech API\",\"docsUrl\":\"https://cloud.google.com/text-to-speech/docs/reference/rest/v1\"},{\"id\":\"texttospeech.operations.delete\",\"operationId\":\"texttospeech.operations.delete\",\"functionName\":\"TexttospeechOperationsDelete\",\"method\":\"DELETE\",\"path\":\"v1/{+name}\",\"description\":\"Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.\",\"sourceUrl\":\"https://texttospeech.googleapis.com/$discovery/rest?version=v1\",\"specId\":\"texttospeech\",\"specLabel\":\"Google Cloud Text-to-Speech API\",\"docsUrl\":\"https://cloud.google.com/text-to-speech/docs/reference/rest/v1\"},{\"id\":\"texttospeech.projects.locations.operations.get\",\"operationId\":\"texttospeech.projects.locations.operations.get\",\"functionName\":\"TexttospeechProjectsLocationsOperationsGet\",\"method\":\"GET\",\"path\":\"v1/{+name}\",\"description\":\"Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.\",\"sourceUrl\":\"https://texttospeech.googleapis.com/$discovery/rest?version=v1\",\"specId\":\"texttospeech\",\"specLabel\":\"Google Cloud Text-to-Speech API\",\"docsUrl\":\"https://cloud.google.com/text-to-speech/docs/reference/rest/v1\"},{\"id\":\"texttospeech.projects.locations.operations.list\",\"operationId\":\"texttospeech.projects.locations.operations.list\",\"functionName\":\"TexttospeechProjectsLocationsOperationsList\",\"method\":\"GET\",\"path\":\"v1/{+name}/operations\",\"description\":\"Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.\",\"sourceUrl\":\"https://texttospeech.googleapis.com/$discovery/rest?version=v1\",\"specId\":\"texttospeech\",\"specLabel\":\"Google Cloud Text-to-Speech API\",\"docsUrl\":\"https://cloud.google.com/text-to-speech/docs/reference/rest/v1\"},{\"id\":\"texttospeech.projects.locations.synthesizeLongAudio\",\"operationId\":\"texttospeech.projects.locations.synthesizeLongAudio\",\"functionName\":\"TexttospeechProjectsLocationsSynthesizeLongAudio\",\"method\":\"POST\",\"path\":\"v1/{+parent}:synthesizeLongAudio\",\"description\":\"Synthesizes long form text asynchronously.\",\"sourceUrl\":\"https://texttospeech.googleapis.com/$discovery/rest?version=v1\",\"specId\":\"texttospeech\",\"specLabel\":\"Google Cloud Text-to-Speech API\",\"docsUrl\":\"https://cloud.google.com/text-to-speech/docs/reference/rest/v1\"},{\"id\":\"texttospeech.text.synthesize\",\"operationId\":\"texttospeech.text.synthesize\",\"functionName\":\"TexttospeechTextSynthesize\",\"method\":\"POST\",\"path\":\"v1/text:synthesize\",\"description\":\"Synthesizes speech synchronously: receive results after all text input has been processed.\",\"sourceUrl\":\"https://texttospeech.googleapis.com/$discovery/rest?version=v1\",\"specId\":\"texttospeech\",\"specLabel\":\"Google Cloud Text-to-Speech API\",\"docsUrl\":\"https://cloud.google.com/text-to-speech/docs/reference/rest/v1\"},{\"id\":\"texttospeech.voices.list\",\"operationId\":\"texttospeech.voices.list\",\"functionName\":\"TexttospeechVoicesList\",\"method\":\"GET\",\"path\":\"v1/voices\",\"description\":\"Returns a list of Voice supported for synthesis.\",\"sourceUrl\":\"https://texttospeech.googleapis.com/$discovery/rest?version=v1\",\"specId\":\"texttospeech\",\"specLabel\":\"Google Cloud Text-to-Speech API\",\"docsUrl\":\"https://cloud.google.com/text-to-speech/docs/reference/rest/v1\"}]") as readonly GoogleSpeechFullApiOperation[];

// Hardened literal operation keys for generated SDK typing.
export const GOOGLE_SPEECH_FULL_API_OPERATION_IDS = [
  "speech.operations.get",
  "speech.operations.list",
  "speech.projects.locations.customClasses.create",
  "speech.projects.locations.customClasses.delete",
  "speech.projects.locations.customClasses.get",
  "speech.projects.locations.customClasses.list",
  "speech.projects.locations.customClasses.patch",
  "speech.projects.locations.phraseSets.create",
  "speech.projects.locations.phraseSets.delete",
  "speech.projects.locations.phraseSets.get",
  "speech.projects.locations.phraseSets.list",
  "speech.projects.locations.phraseSets.patch",
  "speech.speech.longrunningrecognize",
  "speech.speech.recognize",
  "texttospeech.operations.cancel",
  "texttospeech.operations.delete",
  "texttospeech.projects.locations.operations.get",
  "texttospeech.projects.locations.operations.list",
  "texttospeech.projects.locations.synthesizeLongAudio",
  "texttospeech.text.synthesize",
  "texttospeech.voices.list"
] as const;
export const GOOGLE_SPEECH_FULL_API_OPERATION_OPERATION_IDS = [
  "speech.operations.get",
  "speech.operations.list",
  "speech.projects.locations.customClasses.create",
  "speech.projects.locations.customClasses.delete",
  "speech.projects.locations.customClasses.get",
  "speech.projects.locations.customClasses.list",
  "speech.projects.locations.customClasses.patch",
  "speech.projects.locations.phraseSets.create",
  "speech.projects.locations.phraseSets.delete",
  "speech.projects.locations.phraseSets.get",
  "speech.projects.locations.phraseSets.list",
  "speech.projects.locations.phraseSets.patch",
  "speech.speech.longrunningrecognize",
  "speech.speech.recognize",
  "texttospeech.operations.cancel",
  "texttospeech.operations.delete",
  "texttospeech.projects.locations.operations.get",
  "texttospeech.projects.locations.operations.list",
  "texttospeech.projects.locations.synthesizeLongAudio",
  "texttospeech.text.synthesize",
  "texttospeech.voices.list"
] as const;
// End hardened literal operation keys.

export type GoogleSpeechFullApiOperationId = typeof GOOGLE_SPEECH_FULL_API_OPERATION_OPERATION_IDS[number];

export const GOOGLE_SPEECH_FULL_API_OPERATION_BY_ID = new Map<string, GoogleSpeechFullApiOperation>(
  GOOGLE_SPEECH_FULL_API_OPERATIONS.map((operation) => [operation.id, operation]),
);
export const GOOGLE_SPEECH_FULL_API_OPERATION_BY_OPERATION_ID = new Map<string, GoogleSpeechFullApiOperation>();
for (const operation of GOOGLE_SPEECH_FULL_API_OPERATIONS) {
  if (operation.operationId && !GOOGLE_SPEECH_FULL_API_OPERATION_BY_OPERATION_ID.has(operation.operationId)) {
    GOOGLE_SPEECH_FULL_API_OPERATION_BY_OPERATION_ID.set(operation.operationId, operation);
  }
}
