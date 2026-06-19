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
export const AzureSpeechFullApiModelOperationKeys = [
  "custom-text-to-speech:Models_Create:/models/{id}",
  "custom-text-to-speech:Models_Delete:/models/{id}",
  "custom-text-to-speech:Models_Get:/models/{id}",
  "custom-text-to-speech:Models_List:/models",
  "custom-text-to-speech:Models_ListRecipes:/modelrecipes"
] as const;
export type AzureSpeechFullApiModelOperationKey = typeof AzureSpeechFullApiModelOperationKeys[number];
// End hardened literal operation keys.

export interface AzureSpeechFullApiModelOperationPathParamMap {
  "custom-text-to-speech:Models_Create:/models/{id}": { "id": AzureSpeechFullApiPathParamValue };
  "custom-text-to-speech:Models_Delete:/models/{id}": { "id": AzureSpeechFullApiPathParamValue };
  "custom-text-to-speech:Models_Get:/models/{id}": { "id": AzureSpeechFullApiPathParamValue };
  "custom-text-to-speech:Models_List:/models": {};
  "custom-text-to-speech:Models_ListRecipes:/modelrecipes": {};
}

export interface AzureSpeechFullApiModelOperationRequestMap {
  "custom-text-to-speech:Models_Create:/models/{id}": AzureSpeechFullApiOperationInput<"custom-text-to-speech:Models_Create:/models/{id}">;
  "custom-text-to-speech:Models_Delete:/models/{id}": AzureSpeechFullApiOperationInput<"custom-text-to-speech:Models_Delete:/models/{id}">;
  "custom-text-to-speech:Models_Get:/models/{id}": AzureSpeechFullApiOperationInput<"custom-text-to-speech:Models_Get:/models/{id}">;
  "custom-text-to-speech:Models_List:/models": AzureSpeechFullApiOperationInput<"custom-text-to-speech:Models_List:/models">;
  "custom-text-to-speech:Models_ListRecipes:/modelrecipes": AzureSpeechFullApiOperationInput<"custom-text-to-speech:Models_ListRecipes:/modelrecipes">;
}

export interface AzureSpeechFullApiModelGeneratedClient {
  CustomTextToSpeechModelsCreate(...args: AzureSpeechFullApiOperationArgs<"custom-text-to-speech:Models_Create:/models/{id}">): Promise<AzureSpeechFullApiOperationResponseMap["custom-text-to-speech:Models_Create:/models/{id}"]>;
  CustomTextToSpeechModelsDelete(...args: AzureSpeechFullApiOperationArgs<"custom-text-to-speech:Models_Delete:/models/{id}">): Promise<AzureSpeechFullApiOperationResponseMap["custom-text-to-speech:Models_Delete:/models/{id}"]>;
  CustomTextToSpeechModelsGet(...args: AzureSpeechFullApiOperationArgs<"custom-text-to-speech:Models_Get:/models/{id}">): Promise<AzureSpeechFullApiOperationResponseMap["custom-text-to-speech:Models_Get:/models/{id}"]>;
  CustomTextToSpeechModelsList(...args: AzureSpeechFullApiOperationArgs<"custom-text-to-speech:Models_List:/models">): Promise<AzureSpeechFullApiOperationResponseMap["custom-text-to-speech:Models_List:/models"]>;
  CustomTextToSpeechModelsListRecipes(...args: AzureSpeechFullApiOperationArgs<"custom-text-to-speech:Models_ListRecipes:/modelrecipes">): Promise<AzureSpeechFullApiOperationResponseMap["custom-text-to-speech:Models_ListRecipes:/modelrecipes"]>;
}

export const AzureSpeechFullApiModelGeneratedFunctionNames = [
  "CustomTextToSpeechModelsCreate",
  "CustomTextToSpeechModelsDelete",
  "CustomTextToSpeechModelsGet",
  "CustomTextToSpeechModelsList",
  "CustomTextToSpeechModelsListRecipes"
] as const satisfies readonly (keyof AzureSpeechFullApiModelGeneratedClient)[];

export function createAzureSpeechFullApiModelGeneratedClient(
  callOperation: AzureSpeechGeneratedOperationCaller,
): AzureSpeechFullApiModelGeneratedClient {
  return {
    CustomTextToSpeechModelsCreate: (...args) => callOperation("custom-text-to-speech:Models_Create:/models/{id}", ...(args as AzureSpeechFullApiOperationArgs<"custom-text-to-speech:Models_Create:/models/{id}">)),
    CustomTextToSpeechModelsDelete: (...args) => callOperation("custom-text-to-speech:Models_Delete:/models/{id}", ...(args as AzureSpeechFullApiOperationArgs<"custom-text-to-speech:Models_Delete:/models/{id}">)),
    CustomTextToSpeechModelsGet: (...args) => callOperation("custom-text-to-speech:Models_Get:/models/{id}", ...(args as AzureSpeechFullApiOperationArgs<"custom-text-to-speech:Models_Get:/models/{id}">)),
    CustomTextToSpeechModelsList: (...args) => callOperation("custom-text-to-speech:Models_List:/models", ...(args as AzureSpeechFullApiOperationArgs<"custom-text-to-speech:Models_List:/models">)),
    CustomTextToSpeechModelsListRecipes: (...args) => callOperation("custom-text-to-speech:Models_ListRecipes:/modelrecipes", ...(args as AzureSpeechFullApiOperationArgs<"custom-text-to-speech:Models_ListRecipes:/modelrecipes">)),
  };
}
