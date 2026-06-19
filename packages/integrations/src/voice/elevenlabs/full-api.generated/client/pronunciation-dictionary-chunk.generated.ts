// Generated endpoint chunk for ElevenLabsFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  ElevenLabsGeneratedOperationCaller,
  ElevenLabsFullApiOperationArgs,
  ElevenLabsFullApiOperationInput,
  ElevenLabsFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { ElevenLabsFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const ElevenLabsFullApiPronunciationDictionaryOperationKeys = [
  "POST /v1/pronunciation-dictionaries/add-from-file",
  "POST /v1/pronunciation-dictionaries/add-from-rules",
  "PATCH /v1/pronunciation-dictionaries/{pronunciation_dictionary_id}",
  "GET /v1/pronunciation-dictionaries/{pronunciation_dictionary_id}",
  "POST /v1/pronunciation-dictionaries/{pronunciation_dictionary_id}/set-rules",
  "POST /v1/pronunciation-dictionaries/{pronunciation_dictionary_id}/add-rules",
  "POST /v1/pronunciation-dictionaries/{pronunciation_dictionary_id}/remove-rules",
  "GET /v1/pronunciation-dictionaries/{dictionary_id}/{version_id}/download",
  "GET /v1/pronunciation-dictionaries"
] as const;
export type ElevenLabsFullApiPronunciationDictionaryOperationKey = typeof ElevenLabsFullApiPronunciationDictionaryOperationKeys[number];
// End hardened literal operation keys.

export interface ElevenLabsFullApiPronunciationDictionaryOperationPathParamMap {
  "POST /v1/pronunciation-dictionaries/add-from-file": {};
  "POST /v1/pronunciation-dictionaries/add-from-rules": {};
  "PATCH /v1/pronunciation-dictionaries/{pronunciation_dictionary_id}": { "pronunciation_dictionary_id": ElevenLabsFullApiPathParamValue };
  "GET /v1/pronunciation-dictionaries/{pronunciation_dictionary_id}": { "pronunciation_dictionary_id": ElevenLabsFullApiPathParamValue };
  "POST /v1/pronunciation-dictionaries/{pronunciation_dictionary_id}/set-rules": { "pronunciation_dictionary_id": ElevenLabsFullApiPathParamValue };
  "POST /v1/pronunciation-dictionaries/{pronunciation_dictionary_id}/add-rules": { "pronunciation_dictionary_id": ElevenLabsFullApiPathParamValue };
  "POST /v1/pronunciation-dictionaries/{pronunciation_dictionary_id}/remove-rules": { "pronunciation_dictionary_id": ElevenLabsFullApiPathParamValue };
  "GET /v1/pronunciation-dictionaries/{dictionary_id}/{version_id}/download": { "dictionary_id": ElevenLabsFullApiPathParamValue; "version_id": ElevenLabsFullApiPathParamValue };
  "GET /v1/pronunciation-dictionaries": {};
}

export interface ElevenLabsFullApiPronunciationDictionaryOperationRequestMap {
  "POST /v1/pronunciation-dictionaries/add-from-file": ElevenLabsFullApiOperationInput<"POST /v1/pronunciation-dictionaries/add-from-file">;
  "POST /v1/pronunciation-dictionaries/add-from-rules": ElevenLabsFullApiOperationInput<"POST /v1/pronunciation-dictionaries/add-from-rules">;
  "PATCH /v1/pronunciation-dictionaries/{pronunciation_dictionary_id}": ElevenLabsFullApiOperationInput<"PATCH /v1/pronunciation-dictionaries/{pronunciation_dictionary_id}">;
  "GET /v1/pronunciation-dictionaries/{pronunciation_dictionary_id}": ElevenLabsFullApiOperationInput<"GET /v1/pronunciation-dictionaries/{pronunciation_dictionary_id}">;
  "POST /v1/pronunciation-dictionaries/{pronunciation_dictionary_id}/set-rules": ElevenLabsFullApiOperationInput<"POST /v1/pronunciation-dictionaries/{pronunciation_dictionary_id}/set-rules">;
  "POST /v1/pronunciation-dictionaries/{pronunciation_dictionary_id}/add-rules": ElevenLabsFullApiOperationInput<"POST /v1/pronunciation-dictionaries/{pronunciation_dictionary_id}/add-rules">;
  "POST /v1/pronunciation-dictionaries/{pronunciation_dictionary_id}/remove-rules": ElevenLabsFullApiOperationInput<"POST /v1/pronunciation-dictionaries/{pronunciation_dictionary_id}/remove-rules">;
  "GET /v1/pronunciation-dictionaries/{dictionary_id}/{version_id}/download": ElevenLabsFullApiOperationInput<"GET /v1/pronunciation-dictionaries/{dictionary_id}/{version_id}/download">;
  "GET /v1/pronunciation-dictionaries": ElevenLabsFullApiOperationInput<"GET /v1/pronunciation-dictionaries">;
}

export interface ElevenLabsFullApiPronunciationDictionaryGeneratedClient {
  AddFromFile(...args: ElevenLabsFullApiOperationArgs<"POST /v1/pronunciation-dictionaries/add-from-file">): Promise<ElevenLabsFullApiOperationResponseMap["POST /v1/pronunciation-dictionaries/add-from-file"]>;
  AddFromRules(...args: ElevenLabsFullApiOperationArgs<"POST /v1/pronunciation-dictionaries/add-from-rules">): Promise<ElevenLabsFullApiOperationResponseMap["POST /v1/pronunciation-dictionaries/add-from-rules"]>;
  PatchPronunciationDictionary(...args: ElevenLabsFullApiOperationArgs<"PATCH /v1/pronunciation-dictionaries/{pronunciation_dictionary_id}">): Promise<ElevenLabsFullApiOperationResponseMap["PATCH /v1/pronunciation-dictionaries/{pronunciation_dictionary_id}"]>;
  GetPronunciationDictionaryMetadata(...args: ElevenLabsFullApiOperationArgs<"GET /v1/pronunciation-dictionaries/{pronunciation_dictionary_id}">): Promise<ElevenLabsFullApiOperationResponseMap["GET /v1/pronunciation-dictionaries/{pronunciation_dictionary_id}"]>;
  SetRules(...args: ElevenLabsFullApiOperationArgs<"POST /v1/pronunciation-dictionaries/{pronunciation_dictionary_id}/set-rules">): Promise<ElevenLabsFullApiOperationResponseMap["POST /v1/pronunciation-dictionaries/{pronunciation_dictionary_id}/set-rules"]>;
  AddRules(...args: ElevenLabsFullApiOperationArgs<"POST /v1/pronunciation-dictionaries/{pronunciation_dictionary_id}/add-rules">): Promise<ElevenLabsFullApiOperationResponseMap["POST /v1/pronunciation-dictionaries/{pronunciation_dictionary_id}/add-rules"]>;
  RemoveRules(...args: ElevenLabsFullApiOperationArgs<"POST /v1/pronunciation-dictionaries/{pronunciation_dictionary_id}/remove-rules">): Promise<ElevenLabsFullApiOperationResponseMap["POST /v1/pronunciation-dictionaries/{pronunciation_dictionary_id}/remove-rules"]>;
  GetPronunciationDictionaryVersionPls(...args: ElevenLabsFullApiOperationArgs<"GET /v1/pronunciation-dictionaries/{dictionary_id}/{version_id}/download">): Promise<ElevenLabsFullApiOperationResponseMap["GET /v1/pronunciation-dictionaries/{dictionary_id}/{version_id}/download"]>;
  GetPronunciationDictionariesMetadata(...args: ElevenLabsFullApiOperationArgs<"GET /v1/pronunciation-dictionaries">): Promise<ElevenLabsFullApiOperationResponseMap["GET /v1/pronunciation-dictionaries"]>;
}

export const ElevenLabsFullApiPronunciationDictionaryGeneratedFunctionNames = [
  "AddFromFile",
  "AddFromRules",
  "PatchPronunciationDictionary",
  "GetPronunciationDictionaryMetadata",
  "SetRules",
  "AddRules",
  "RemoveRules",
  "GetPronunciationDictionaryVersionPls",
  "GetPronunciationDictionariesMetadata"
] as const satisfies readonly (keyof ElevenLabsFullApiPronunciationDictionaryGeneratedClient)[];

export function createElevenLabsFullApiPronunciationDictionaryGeneratedClient(
  callOperation: ElevenLabsGeneratedOperationCaller,
): ElevenLabsFullApiPronunciationDictionaryGeneratedClient {
  return {
    AddFromFile: (...args) => callOperation("POST /v1/pronunciation-dictionaries/add-from-file", ...(args as ElevenLabsFullApiOperationArgs<"POST /v1/pronunciation-dictionaries/add-from-file">)),
    AddFromRules: (...args) => callOperation("POST /v1/pronunciation-dictionaries/add-from-rules", ...(args as ElevenLabsFullApiOperationArgs<"POST /v1/pronunciation-dictionaries/add-from-rules">)),
    PatchPronunciationDictionary: (...args) => callOperation("PATCH /v1/pronunciation-dictionaries/{pronunciation_dictionary_id}", ...(args as ElevenLabsFullApiOperationArgs<"PATCH /v1/pronunciation-dictionaries/{pronunciation_dictionary_id}">)),
    GetPronunciationDictionaryMetadata: (...args) => callOperation("GET /v1/pronunciation-dictionaries/{pronunciation_dictionary_id}", ...(args as ElevenLabsFullApiOperationArgs<"GET /v1/pronunciation-dictionaries/{pronunciation_dictionary_id}">)),
    SetRules: (...args) => callOperation("POST /v1/pronunciation-dictionaries/{pronunciation_dictionary_id}/set-rules", ...(args as ElevenLabsFullApiOperationArgs<"POST /v1/pronunciation-dictionaries/{pronunciation_dictionary_id}/set-rules">)),
    AddRules: (...args) => callOperation("POST /v1/pronunciation-dictionaries/{pronunciation_dictionary_id}/add-rules", ...(args as ElevenLabsFullApiOperationArgs<"POST /v1/pronunciation-dictionaries/{pronunciation_dictionary_id}/add-rules">)),
    RemoveRules: (...args) => callOperation("POST /v1/pronunciation-dictionaries/{pronunciation_dictionary_id}/remove-rules", ...(args as ElevenLabsFullApiOperationArgs<"POST /v1/pronunciation-dictionaries/{pronunciation_dictionary_id}/remove-rules">)),
    GetPronunciationDictionaryVersionPls: (...args) => callOperation("GET /v1/pronunciation-dictionaries/{dictionary_id}/{version_id}/download", ...(args as ElevenLabsFullApiOperationArgs<"GET /v1/pronunciation-dictionaries/{dictionary_id}/{version_id}/download">)),
    GetPronunciationDictionariesMetadata: (...args) => callOperation("GET /v1/pronunciation-dictionaries", ...(args as ElevenLabsFullApiOperationArgs<"GET /v1/pronunciation-dictionaries">)),
  };
}
