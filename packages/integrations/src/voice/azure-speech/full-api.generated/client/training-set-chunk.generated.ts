// Generated endpoint chunk for AzureSpeechFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  AzureSpeechGeneratedOperationCaller,
  AzureSpeechFullApiOperationArgs,
  AzureSpeechFullApiOperationInput,
  AzureSpeechFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { AzureSpeechFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const AzureSpeechFullApiTrainingSetOperationKeys = [
  "custom-text-to-speech:TrainingSets_Create:/trainingsets/{id}",
  "custom-text-to-speech:TrainingSets_Delete:/trainingsets/{id}",
  "custom-text-to-speech:TrainingSets_Get:/trainingsets/{id}",
  "custom-text-to-speech:TrainingSets_List:/trainingsets",
  "custom-text-to-speech:TrainingSets_UploadData:/trainingsets/{id}:upload"
] as const;
export type AzureSpeechFullApiTrainingSetOperationKey = typeof AzureSpeechFullApiTrainingSetOperationKeys[number];
// End hardened literal operation keys.

export interface AzureSpeechFullApiTrainingSetOperationPathParamMap {
  "custom-text-to-speech:TrainingSets_Create:/trainingsets/{id}": { "id": AzureSpeechFullApiPathParamValue };
  "custom-text-to-speech:TrainingSets_Delete:/trainingsets/{id}": { "id": AzureSpeechFullApiPathParamValue };
  "custom-text-to-speech:TrainingSets_Get:/trainingsets/{id}": { "id": AzureSpeechFullApiPathParamValue };
  "custom-text-to-speech:TrainingSets_List:/trainingsets": {};
  "custom-text-to-speech:TrainingSets_UploadData:/trainingsets/{id}:upload": { "id": AzureSpeechFullApiPathParamValue };
}

export interface AzureSpeechFullApiTrainingSetOperationRequestMap {
  "custom-text-to-speech:TrainingSets_Create:/trainingsets/{id}": AzureSpeechFullApiOperationInput<"custom-text-to-speech:TrainingSets_Create:/trainingsets/{id}">;
  "custom-text-to-speech:TrainingSets_Delete:/trainingsets/{id}": AzureSpeechFullApiOperationInput<"custom-text-to-speech:TrainingSets_Delete:/trainingsets/{id}">;
  "custom-text-to-speech:TrainingSets_Get:/trainingsets/{id}": AzureSpeechFullApiOperationInput<"custom-text-to-speech:TrainingSets_Get:/trainingsets/{id}">;
  "custom-text-to-speech:TrainingSets_List:/trainingsets": AzureSpeechFullApiOperationInput<"custom-text-to-speech:TrainingSets_List:/trainingsets">;
  "custom-text-to-speech:TrainingSets_UploadData:/trainingsets/{id}:upload": AzureSpeechFullApiOperationInput<"custom-text-to-speech:TrainingSets_UploadData:/trainingsets/{id}:upload">;
}

export interface AzureSpeechFullApiTrainingSetGeneratedClient {
  CustomTextToSpeechTrainingSetsCreate(...args: AzureSpeechFullApiOperationArgs<"custom-text-to-speech:TrainingSets_Create:/trainingsets/{id}">): Promise<AzureSpeechFullApiOperationResponseMap["custom-text-to-speech:TrainingSets_Create:/trainingsets/{id}"]>;
  CustomTextToSpeechTrainingSetsDelete(...args: AzureSpeechFullApiOperationArgs<"custom-text-to-speech:TrainingSets_Delete:/trainingsets/{id}">): Promise<AzureSpeechFullApiOperationResponseMap["custom-text-to-speech:TrainingSets_Delete:/trainingsets/{id}"]>;
  CustomTextToSpeechTrainingSetsGet(...args: AzureSpeechFullApiOperationArgs<"custom-text-to-speech:TrainingSets_Get:/trainingsets/{id}">): Promise<AzureSpeechFullApiOperationResponseMap["custom-text-to-speech:TrainingSets_Get:/trainingsets/{id}"]>;
  CustomTextToSpeechTrainingSetsList(...args: AzureSpeechFullApiOperationArgs<"custom-text-to-speech:TrainingSets_List:/trainingsets">): Promise<AzureSpeechFullApiOperationResponseMap["custom-text-to-speech:TrainingSets_List:/trainingsets"]>;
  CustomTextToSpeechTrainingSetsUploadData(...args: AzureSpeechFullApiOperationArgs<"custom-text-to-speech:TrainingSets_UploadData:/trainingsets/{id}:upload">): Promise<AzureSpeechFullApiOperationResponseMap["custom-text-to-speech:TrainingSets_UploadData:/trainingsets/{id}:upload"]>;
}

export const AzureSpeechFullApiTrainingSetGeneratedFunctionNames = [
  "CustomTextToSpeechTrainingSetsCreate",
  "CustomTextToSpeechTrainingSetsDelete",
  "CustomTextToSpeechTrainingSetsGet",
  "CustomTextToSpeechTrainingSetsList",
  "CustomTextToSpeechTrainingSetsUploadData"
] as const satisfies readonly (keyof AzureSpeechFullApiTrainingSetGeneratedClient)[];

export function createAzureSpeechFullApiTrainingSetGeneratedClient(
  callOperation: AzureSpeechGeneratedOperationCaller,
): AzureSpeechFullApiTrainingSetGeneratedClient {
  return {
    CustomTextToSpeechTrainingSetsCreate: (...args) => callOperation("custom-text-to-speech:TrainingSets_Create:/trainingsets/{id}", ...(args as AzureSpeechFullApiOperationArgs<"custom-text-to-speech:TrainingSets_Create:/trainingsets/{id}">)),
    CustomTextToSpeechTrainingSetsDelete: (...args) => callOperation("custom-text-to-speech:TrainingSets_Delete:/trainingsets/{id}", ...(args as AzureSpeechFullApiOperationArgs<"custom-text-to-speech:TrainingSets_Delete:/trainingsets/{id}">)),
    CustomTextToSpeechTrainingSetsGet: (...args) => callOperation("custom-text-to-speech:TrainingSets_Get:/trainingsets/{id}", ...(args as AzureSpeechFullApiOperationArgs<"custom-text-to-speech:TrainingSets_Get:/trainingsets/{id}">)),
    CustomTextToSpeechTrainingSetsList: (...args) => callOperation("custom-text-to-speech:TrainingSets_List:/trainingsets", ...(args as AzureSpeechFullApiOperationArgs<"custom-text-to-speech:TrainingSets_List:/trainingsets">)),
    CustomTextToSpeechTrainingSetsUploadData: (...args) => callOperation("custom-text-to-speech:TrainingSets_UploadData:/trainingsets/{id}:upload", ...(args as AzureSpeechFullApiOperationArgs<"custom-text-to-speech:TrainingSets_UploadData:/trainingsets/{id}:upload">)),
  };
}
